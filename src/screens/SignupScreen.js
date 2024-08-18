import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;

      // Store user data in Firebase Realtime Database
      await database().ref(`/users/${userId}`).set({
        username: username,
        email: email,
      });

      navigation.navigate('Login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
});
