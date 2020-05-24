import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1VwexjGyMePF5JQ4TGQejrn-gbvG14pI",
  authDomain: "magda-app-34c7b.firebaseapp.com",
  databaseURL: "https://magda-app-34c7b.firebaseio.com",
  projectId: "magda-app-34c7b",
  storageBucket: "magda-app-34c7b.appspot.com",
  messagingSenderId: "182805958148",
  appId: "1:182805958148:web:b06af80205eae8b8fdef51"
};
firebase.initializeApp(firebaseConfig);

 
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
