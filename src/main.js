import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC68xPMeb-SI1q4yMmhrBe6iy6fA57U-CM",
  authDomain: "fir-6c159.firebaseapp.com",
  projectId: "fir-6c159",
  storageBucket: "fir-6c159.appspot.com",
  messagingSenderId: "167567504821",
  appId: "1:167567504821:web:b1c1a967f5cc1d4fdd15fc",
  measurementId: "G-3ENB4LNRS2"
};

firebase.initializeApp(firebaseConfig)
var storage = firebase.storage();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, storage };

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
      const usuarioActivo ={
        email: user.email,
        uid: user.uid
      }
     store.dispatch('detectarUsuario', usuarioActivo)
     console.log(usuarioActivo)
    // ...
  } else {
    console.log(user)
    store.dispatch('detectarUsuario', user)
    // User is signed out
    // ...
  } 
});

createApp(App).use(store).use(router).mount('#app')

