import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import SearchScreen from './screens/SearchScreen';
import auth from '@react-native-firebase/auth';
import { initializeApp } from '@react-native-firebase/app'; // Importez initializeApp
import firebaseConfig from './firebaseConfig'; 

// Initialiser Firebase
initializeApp(firebaseConfig);

// Créer les navigateurs
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Configurer la navigation principale avec authentification
function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// Configurer les onglets principaux après l'authentification
function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Coach AI" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Muscle Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

// Vérifier l'état de l'utilisateur (connecté ou non)
function App() {
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState(null);

  // Gestion de l'état d'authentification de Firebase
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // se désabonner lors du démontage
  }, []);

  if (initializing) return null; // Ou un écran de chargement

  return (
    <NavigationContainer>
      {user ? <MainTabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
