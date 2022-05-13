import {
  initializeApp
} from 'firebase/app';
import {
  getFirestore
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBN0bW6uMSvPi6melOxxPudprNlv7_xwx4",
  authDomain: "red-lab-test.firebaseapp.com",
  projectId: "red-lab-test",
  storageBucket: "red-lab-test.appspot.com",
  messagingSenderId: "661841590839",
  appId: "1:661841590839:web:42f8317d4f4e96305e5db2"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export {
  db
}