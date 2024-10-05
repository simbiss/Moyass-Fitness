import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Search, ChevronDown } from 'lucide-react-native';  // Install with npm install lucide-react-native

const bodyPartList = [
  "back", "cardio", "chest", "lower arms", "lower legs", 
  "neck", "shoulders", "upper arms", "upper legs", "waist"
];

const targetList = [
  "abductors", "abs", "adductors", "biceps", "calves", 
  "cardiovascular system", "delts", "forearms", "glutes", 
  "hamstrings", "lats", "levator scapulae", "pectorals", 
  "quads", "serratus anterior", "spine", "traps", "triceps", 
  "upper back"
];

const SearchPage = () => {
  const [searchOption, setSearchOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Fitness Exercise</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search exercises..."
          style={styles.input}
        />
        <Search color="#999" style={styles.searchIcon} />
      </View>

      <TouchableOpacity 
        style={styles.dropdownButton} 
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Text>{searchOption || "Select search option"}</Text>
        <ChevronDown style={isDropdownOpen ? styles.rotateIcon : styles.chevronIcon} />
      </TouchableOpacity>

      {isDropdownOpen && (
        <View style={styles.dropdownList}>
          <TouchableOpacity 
            onPress={() => {
              setSearchOption('Body Parts');
              setIsDropdownOpen(false);
            }} 
            style={styles.dropdownItem}
          >
            <Text>Body Parts</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {
              setSearchOption('Targeted Muscles');
              setIsDropdownOpen(false);
            }} 
            style={styles.dropdownItem}
          >
            <Text>Targeted Muscles</Text>
          </TouchableOpacity>
        </View>
      )}

      {searchOption && (
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>{searchOption}</Text>
          <FlatList
            data={searchOption === 'Body Parts' ? bodyPartList : targetList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.listItem}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400,
    position: 'relative',
  },
  input: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    paddingRight: 40
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  dropdownButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    maxWidth: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  chevronIcon: {
    marginLeft: 8,
  },
  rotateIcon: {
    transform: [{ rotate: '180deg' }],
    marginLeft: 8,
  },
  dropdownList: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 8,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listContainer: {
    marginTop: 16,
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
  },
  listTitle: {
    fontWeight: 'bold',
    marginBottom: 8
  },
  listItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default SearchPage;
  