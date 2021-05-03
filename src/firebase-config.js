import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAB_L_epSDsqqNAjkxjhrSLsiEc9Hm-AZM",
  authDomain: "auth-83bdb.firebaseapp.com",
  projectId: "auth-83bdb",
  storageBucket: "auth-83bdb.appspot.com",
  messagingSenderId: "929326951822",
  appId: "1:929326951822:web:a691c57d31da324f1d08df",
};

firebase.initializeApp(firebaseConfig);
const authService = firebase.auth();

export { authService };
