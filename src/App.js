import { initializeApp } from "firebase/app";
import {getFirestore,collection,addDoc} from 'firebase/firestore/lite'
import { useEffect } from "react";

const firebaseConfig = {
   apiKey: "AIzaSyBDdmZAdyVzKIG655qmAtaOkHdpXYVwC7E",
   authDomain: "sypandsave-62a85.firebaseapp.com",
   projectId: "sypandsave-62a85",
   storageBucket: "sypandsave-62a85.appspot.com",
   messagingSenderId: "692289706141",
   appId: "1:692289706141:web:985ac181739dc52787dc74",
   measurementId: "G-MHQE8XFSGT"
 };

 const app = initializeApp(firebaseConfig);

 const db = getFirestore(app);
 
 useEffect

let App = ()=>{
   
    
   return(
    <>
       <h1>hello akshay</h1>
    </>
  )
}

export default App;