



import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'


  // Your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBTCCi_9KpdjC789z9cGQOHuGBL7NpPl80",
    authDomain: "olx-clone-2adc2.firebaseapp.com",
    projectId: "olx-clone-2adc2",
    storageBucket: "olx-clone-2adc2.appspot.com",
    messagingSenderId: "46742846489",
    appId: "1:46742846489:web:cab58af36680feba46fe88"
  };


export default firebase.initializeApp(firebaseConfig);


