import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const  firebaseConfig = {
    apiKey: "AIzaSyCfNp0oZ1Q5uMRBZfvhQ1Z6R1uSfs-A8ZI",
    authDomain: "crowdb-d5dd5.firebaseapp.com",
    databaseURL: "https://crowdb-d5dd5.firebaseio.com",
    projectId: "crowdb-d5dd5",
    storageBucket: "",
    messagingSenderId: "867485860195",
    appId: "1:867485860195:web:3ba3ded031c647ae685356",
    measurementId: "G-TBRS0VQRG7"
  };

  firebase.initializeApp(firebaseConfig);
  
  export const  auth = firebase.auth();
  export const firestore = firebase.firestore();

   const provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({prompt:'select_account'});
   export const signInWithGoogle = () =>auth.signInWithPopup(provider);


   export const createUserProfileDocument = async ( userAuth,additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot =await userRef.get();

    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt =  new Date();
        try{

            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData

            })
        }catch(e){
            console.log(e);
        }
       

    }
    return userRef;

   }

   export default firebase;



