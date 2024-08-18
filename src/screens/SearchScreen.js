import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';

export default function SearchScreen() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Logique pour rechercher des muscles via API
  };

  return (
    <View>
      <Text>Recherche de Muscle</Text>
      <TextInput placeholder="Chercher un muscle" value={query} onChangeText={setQuery} />
      <FlatList
        data={[]}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
