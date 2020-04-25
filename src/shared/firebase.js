import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCAe5D0BYLVtLSLyU5eLSaBK4L140LfFJ4",
    authDomain: "shopping-cart-282a6.firebaseapp.com",
    databaseURL: "https://shopping-cart-282a6.firebaseio.com/",
    projectId: "shopping-cart-282a6",
    storageBucket: "shopping-cart-282a6.appspot.com",
    messagingSenderId: "445684731270",
    appID: "app-id",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
