

import { initializeApp } from '@react-native-firebase/app';

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
  
const app = initializeApp(firebaseConfig);

export default app;
