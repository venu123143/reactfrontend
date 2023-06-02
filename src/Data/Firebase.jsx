import firebase from 'firebase/compat/app';
import {getAuth} from "firebase/auth";
const config= {
    apiKey: "AIzaSyBCGt-x6oIoBnKFNf9vLNZDNWQ2MADw-hA",
    authDomain: "fir-react-6e449.firebaseapp.com",
    projectId: "fir-react-6e449",
    storageBucket: "fir-react-6e449.appspot.com",
    messagingSenderId: "546542489931",
    appId: "1:546542489931:web:ebbf2c599623640c1698ce"
}    
const app= firebase.initializeApp(config);
export const auth=getAuth(app)