import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBFXvRN_e3nA9eIvfs1KKo9zjbFOQMyNf0",
  authDomain: "justina-shoes.firebaseapp.com",
  projectId: "justina-shoes",
  storageBucket: "justina-shoes.appspot.com",
  messagingSenderId: "129078051622",
  appId: "1:129078051622:web:6ec803707bf31ce6afb7e7"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)