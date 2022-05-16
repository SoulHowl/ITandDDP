import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZVZtCC1HtP-Zrllhy2NYq0hMxkzSoFTQ",
    authDomain: "weather-8b64a.firebaseapp.com",
    databaseURL: "https://weather-8b64a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "weather-8b64a",
    storageBucket: "weather-8b64a.appspot.com",
    messagingSenderId: "515368424508",
    appId: "1:515368424508:web:91f4a24584d31b88e69f39"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const user = auth.currentUser;


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth();


// async function apiLogin(email, password){
//     try {
//         return await auth.signInWithEmailAndPassword(email, password);
//     }
//     catch(error) {
//         console.error(`Couldn't signin: ${error}`);
//     }
//
// }
//
// async function apiSignUp(email, password){
//     try {
//         const new_response = await auth.createUserWithEmailAndPassword(email, password);
//         console.log("new response", new_response.user.uid)
//         console.log("CREATE:",new_response)
//         const docref = db.collection('users').doc(new_response.user.uid);
//
//         await docref.set({
//             email:email,
//             password:password,
//             country:"None",
//             city:"None"
//         });
//         return new_response;
//     }
//     catch(error) {
//         console.error(`Couldn't signup: ${error}`);
//     }
// }
//
// function logout(){
//     auth.signOut().then(() => {
//         alert('Sign-out successful');
//         window.location.replace("auth.html");
//     }).catch((error) => {
//         alert(error)
//     });
// }

const login = async(email, password) =>{
    let response = await signInWithEmailAndPassword(auth, email, password)
    return response
}


const logout = async() =>{
    let response = await signOut(auth)
    return response
}

const signUp = async(email, password) =>{
    let response = await createUserWithEmailAndPassword(auth, email, password).then(res=>{
        const uid = res.user.uid;
        let data = {
            email:email,
             password:password,
             country:"None",
             city:"None"
        };
        const docRef = doc(db, 'users', uid);
        setDoc(docRef, data);
    })
    return response;
}
//export {apiLogin, apiSignUp, logout, db, auth, collection, doc}
export {user, login, signUp, logout, db, auth, collection}