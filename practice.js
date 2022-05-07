const firebaseConfig = {
    apiKey: "AIzaSyDcmueFfWt0GuZ_RD6erGS_KkXQvYjjwIU",
    authDomain: "kwitter-f5756.firebaseapp.com",
    databaseURL: "https://kwitter-f5756-default-rtdb.firebaseio.com",
    projectId: "kwitter-f5756",
    storageBucket: "kwitter-f5756.appspot.com",
    messagingSenderId: "655649611610",
    appId: "1:655649611610:web:57bd201277f88e17835d63"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
username=document.getElementsById("user_name").value
firebase.database().ref("/").child(username).update({

    purpose: "adding user"
})
  }