import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyDX-yli_qT2a1LQeULHqSYjruf8eT9TNnc",
    authDomain: "udemy-man-city.firebaseapp.com",
    databaseURL: "https://udemy-man-city.firebaseio.com",
    projectId: "udemy-man-city",
    storageBucket: "udemy-man-city.appspot.com",
    messagingSenderId: "463400952220",
    appId: "1:463400952220:web:f41220cf2af72d97cd6859",
    measurementId: "G-3PLVMJEHPW"
  };

  firebase.initializeApp(firebaseConfig);

  const firebaseDatabase = firebase.database();
  const firebaseMatches = firebaseDatabase.ref('matches');
  const firebasePromotions = firebaseDatabase.ref('promotions');

  export {
      firebase,
      firebaseMatches,
      firebasePromotions
  }