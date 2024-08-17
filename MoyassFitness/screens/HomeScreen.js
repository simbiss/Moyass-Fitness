import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Bienvenue dans le Coach AI</Text>
      <Button title="Commencer l'évaluation" onPress={() => {
        // Naviguer vers une sous-page pour poser les questions
      }} />
    </View>
  );
}
