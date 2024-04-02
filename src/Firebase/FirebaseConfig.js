
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    // apiKey: import.meta.env.VITE_APIKEY,
    // authDomain: import.meta.env.VITE_AUTHDOMAIN,
    // projectId: import.meta.env.VITE_PROJECTID,
    // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    // appId: import.meta.env.VITE_APPID
  
    apiKey: "AIzaSyDwiHs6AHwwnzikf5tMoCiFHHL5MLOmWEA",
    authDomain: "create-task-50389.firebaseapp.com",
    projectId: "create-task-50389",
    storageBucket: "create-task-50389.appspot.com",
    messagingSenderId: "1075026133629",
    appId: "1:1075026133629:web:76eebe6e140e886e8e2714"
};
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;