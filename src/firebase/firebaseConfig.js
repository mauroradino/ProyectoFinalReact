import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfG-cTzPr5a3ybuPz2D4yutsmD-eICiws",
  authDomain: "e-headphones.firebaseapp.com",
  projectId: "e-headphones",
  storageBucket: "e-headphones.appspot.com",
  messagingSenderId: "794775596255",
  appId: "1:794775596255:web:45573322a328860b9c8d6a"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener una instancia de Firestore
const db = getFirestore(app);

export default db;