  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCyQbDRbVWoCz43GgvHYHlY7k6jKo3EwIM",
    authDomain: "geo-ninjas-c2840.firebaseapp.com",
    databaseURL: "https://geo-ninjas-c2840.firebaseio.com",
    projectId: "geo-ninjas-c2840",
    storageBucket: "",
    messagingSenderId: "510878729111",
    appId: "1:510878729111:web:c483dcfa86abc806"
  };

  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);

  //firebaseApp.firestore().settings({timestampsInSnapshots:true});

  export const db = firebaseApp.firestore();
  export const auth = firebaseApp.auth();
  