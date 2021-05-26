import firebase from 'firebase';


 var firebaseConfig = {
    apiKey: "AIzaSyAH8EK-Fll2pYznMSqsgVX1vbnmsWeemRw",
    authDomain: "chat-app-fa149.firebaseapp.com",
    projectId: "chat-app-fa149",
    storageBucket: "chat-app-fa149.appspot.com",
    messagingSenderId: "782789458313",
    appId: "1:782789458313:web:16b56ce6f6a9fc4edec958"
  };


  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;