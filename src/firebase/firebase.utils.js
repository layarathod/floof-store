import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBi3YvJulShaJH6roiyo47dml8g_r3KE-M",
    authDomain: "floof-store-db.firebaseapp.com",
    databaseURL: "https://floof-store-db.firebaseio.com",
    projectId: "floof-store-db",
    storageBucket: "floof-store-db.appspot.com",
    messagingSenderId: "105054388065",
    appId: "1:105054388065:web:a7cc34a980e9d91289cf20",
    measurementId: "G-SKVGEP4SMM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;