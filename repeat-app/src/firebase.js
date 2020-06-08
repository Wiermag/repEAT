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

const firebaseFold = require('firebase/app');
                     require('firebase/auth');
                     require('firebase/database');
const refComments = firebaseFold.database().ref('comments');
const refFormPerson = firebaseFold.database().ref('form-join-person');
const refFormCompany = firebaseFold.database().ref('form-join-company');

export {
    firebaseFold, 
    firebaseConfig,
    refComments,
    refFormPerson,
    refFormCompany
}