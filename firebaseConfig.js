import { firebase } from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDdx4BT6T30By6giu3sjFBLNwLX46yf8us",
  authDomain: "moyass-fitness.firebaseapp.com",
  databaseURL: "https://moyass-fitness-default-rtdb.firebaseio.com",
  projectId: "moyass-fitness",
  storageBucket: "moyass-fitness.appspot.com",
  messagingSenderId: "661874297486",
  appId: "1:661874297486:web:11af1e5d180f082fedd7df",
  measurementId: "G-GRTHGQNY17"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
