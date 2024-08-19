// src/screens/WorkoutPlanScreen.js

import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function WorkoutPlanScreen({ route }) {
  const { workoutPlan } = route.params;

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>Votre Plan d'Entraînement</Text>
      <Text>{workoutPlan}</Text>
    </ScrollView>
  );
}
