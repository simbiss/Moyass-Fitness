import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import MainTabNavigator from './MainTabNavigator';

function AppNavigator() {
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState(null);

  // Manage Firebase auth state
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null; // or a loading screen

  return (
    <NavigationContainer>
      {user ? <MainTabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppNavigator;
