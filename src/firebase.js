let firebase = require ('firebase')

var firebaseConfig = {
    apiKey: "AIzaSyBcfZsS1SYa7V4t5Z2Gs6VFbeTkekHwg0g",
    authDomain: "spoty-fact.firebaseapp.com",
    databaseURL: "https://spoty-fact.firebaseio.com",
    projectId: "spoty-fact",
    storageBucket: "spoty-fact.appspot.com",
    messagingSenderId: "961076568158",
    appId: "1:961076568158:web:c7ab75a52b3ade0c"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  module.exports = firebase