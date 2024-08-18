import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function ProfileScreen({ navigation }) {
  const user = auth().currentUser;
  const [username, setUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Fetch the user's username from the database
  React.useEffect(() => {
    const fetchUserData = async () => {
      const userSnapshot = await database().ref(`/users/${user.uid}`).once('value');
      const userData = userSnapshot.val();
      if (userData) {
        setUsername(userData.username);
      }
    };

    fetchUserData();
  }, []);

  const reauthenticate = async (currentPassword) => {
    const credential = auth.EmailAuthProvider.credential(user.email, currentPassword);
    try {
      await user.reauthenticateWithCredential(credential);
      return true;
    } catch (error) {
      Alert.alert("Erreur", "Mot de passe actuel incorrect");
      return false;
    }
  };

  const handleChangePassword = async () => {
    if (await reauthenticate(currentPassword)) {
      try {
        await user.updatePassword(newPassword);
        Alert.alert("Succès", "Votre mot de passe a été changé avec succès");
        setCurrentPassword('');
        setNewPassword('');
      } catch (error) {
        Alert.alert("Erreur", error.message);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email: {user.email}</Text>
      <Text style={styles.label}>Nom d'utilisateur: {username}</Text>

      <TextInput
        style={styles.input}
        placeholder="Mot de passe actuel"
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Nouveau mot de passe"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />

      <Button title="Changer le mot de passe" onPress={handleChangePassword} />

      <View style={styles.logoutButton}>
        <Button title="Se déconnecter" onPress={handleLogout} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
  logoutButton: {
    marginTop: 20,
  },
});
