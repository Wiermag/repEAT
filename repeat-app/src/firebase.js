import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN, 
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
}

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