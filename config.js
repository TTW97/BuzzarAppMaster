import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyAQ3o_z-hKYYjb1TMj3G1qde5J4kLOQmiI",
    authDomain: "buzzerapp-e708b.firebaseapp.com",
    databaseURL: "https://buzzerapp-e708b.firebaseio.com",
    projectId: "buzzerapp-e708b",
    storageBucket: "buzzerapp-e708b.appspot.com",
    messagingSenderId: "24161680776",
    appId: "1:24161680776:web:b4901f6f788a58d9e8ce3d",
    measurementId: "G-MHQ31NZPPK"
  };

  if (!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig);

  }

export default firebase.database();





