import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "upload-f299f.firebaseapp.com",
  projectId: "upload-f299f",
  storageBucket: "upload-f299f.appspot.com",
  messagingSenderId: "392811080056",
  appId: "1:392811080056:web:49ce2d500f32a1d46ac08d",
  measurementId: "G-W42XWEJSJQ",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage };