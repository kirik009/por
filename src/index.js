import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import './index.css';
import firebase from 'firebase'


  firebase.initializeApp({
    apiKey: "AIzaSyAJ3wjolp1QD4t5UupxRBS_qkOoSCqm9F8",
    authDomain: "reac-f8ed1.firebaseapp.com",
    projectId: "reac-f8ed1",
    storageBucket: "reac-f8ed1.appspot.com",
    messagingSenderId: "451001285109",
    appId: "1:451001285109:web:8f10eb5a766111c59208bc",
    measurementId: "G-84L06RKD0V"
  });

  export const Context = createContext(null)
  const auth = firebase.auth()
  const firestore = firebase.firestore()
ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
<App />
</Context.Provider>
, document.getElementById('root'));