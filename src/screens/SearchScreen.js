import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

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

  const renderListItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem}>
      <Text style={styles.listItemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Look for exercises</Text>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search exercises"
          placeholderTextColor="#A0AEC0"
        />
        <Text style={styles.searchIcon}>🔍</Text>
      </View>
      
      <TouchableOpacity 
        style={styles.dropdownButton}
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Text style={styles.dropdownButtonText}>
          {searchOption || "Select search option"}
        </Text>
        <Text style={[styles.dropdownIcon, isDropdownOpen && styles.dropdownIconOpen]}>
          ⌄
        </Text>
      </TouchableOpacity>
      
      {isDropdownOpen && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity 
            style={styles.dropdownMenuItem}
            onPress={() => {
              setSearchOption('Body Parts');
              setIsDropdownOpen(false);
            }}
          >
            <Text style={styles.dropdownMenuItemText}>• Body Parts</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.dropdownMenuItem}
            onPress={() => {
              setSearchOption('Targeted Muscles');
              setIsDropdownOpen(false);
            }}
          >
            <Text style={styles.dropdownMenuItemText}>• Targeted Muscles</Text>
          </TouchableOpacity>
        </View>
      )}
      
      {searchOption && (
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>{searchOption}</Text>
          <FlatList
            data={searchOption === 'Body Parts' ? bodyPartList : targetList}
            renderItem={renderListItem}
            keyExtractor={(item) => item}
          />
        </View>
      )}
      
      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaButtonText}>Begin Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    marginBottom: 4,
    color: '#1A202C',
  },
  subtitle: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 40,
  },
  searchContainer: {
    width: '100%',
    marginBottom: 20,
    position: 'relative',
  },
  searchInput: {
    width: '100%',
    backgroundColor: '#F7FAFC',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    paddingRight: 40,
    fontSize: 16,
    color: '#1A202C',
  },
  searchIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
    fontSize: 20,
  },
  dropdownButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#718096',
  },
  dropdownIcon: {
    fontSize: 20,
    transform: [{ rotate: '0deg' }],
  },
  dropdownIconOpen: {
    transform: [{ rotate: '180deg' }],
  },
  dropdownMenu: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  dropdownMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  dropdownMenuItemText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#4A5568',
  },
  listContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2D3748',
    marginBottom: 12,
  },
  listItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  listItemText: {
    fontSize: 16,
    color: '#4A5568',
  },
  ctaButton: {
    backgroundColor: '#4299E1',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SearchPage;
