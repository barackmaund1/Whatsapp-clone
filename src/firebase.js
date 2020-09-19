import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBYzEaWNcW1jNlJhCoVRhMhFVzDdZcC1y8",
  authDomain: "whatsapp-clone-a8d79.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-a8d79.firebaseio.com",
  projectId: "whatsapp-clone-a8d79",
  storageBucket: "whatsapp-clone-a8d79.appspot.com",
  messagingSenderId: "364927501908",
  appId: "1:364927501908:web:2235f039571126444e0fc1",
  measurementId: "G-E4J2K0F9JP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth =firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();

export { auth,provider};
export default db;
