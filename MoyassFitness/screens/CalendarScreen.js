import React from 'react';
import { View, Text } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default function CalendarScreen() {
  return (
    <View>
      <Text>Votre Calendrier d'Entraînement</Text>
      <CalendarPicker />
    </View>
  );
}
