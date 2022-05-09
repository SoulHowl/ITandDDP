const firebaseConfig = {
    apiKey: "AIzaSyAZVZtCC1HtP-Zrllhy2NYq0hMxkzSoFTQ",
    authDomain: "weather-8b64a.firebaseapp.com",
    databaseURL: "https://weather-8b64a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "weather-8b64a",
    storageBucket: "weather-8b64a.appspot.com",
    messagingSenderId: "515368424508",
    appId: "1:515368424508:web:91f4a24584d31b88e69f39"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export async function apiLogin(email, password){
    try {
        const new_response = await auth.signInWithEmailAndPassword(email, password);
        return new_response;
    }
    catch(error) {
        console.error(`Couldn't signin: ${error}`);
    }

}

export function logout(){
    auth.signOut().then(() => {
        alert('Sign-out successful');
        window.location.replace("index.html");
    }).catch((error) => {
        alert(error)
    });
}

export async function apiSignUp(email, password){
    try {
        const new_response = await auth.createUserWithEmailAndPassword(email, password);
        console.log("new response", new_response.user.uid)
        console.log("CREATE:",new_response)
        const docref = db.collection('users').doc(new_response.user.uid);

        await docref.set({
            email:email,
            password:password,
            country:"None",
            city:"None"
        });
        return new_response;
    }
    catch(error) {
        console.error(`Couldn't signup: ${error}`);
    }
}

export async function apiUpdateInfo(country, city){
    var userRef = db.collection('users').doc(auth.currentUser.uid);
    try {
        const new_response =  await userRef.set({
            country: country,
            city: city
        }, { merge: true });
        return new_response;
    }
    catch(error) {
        console.error(`Couldn't update info: ${error}`);
    }
}

export function onChanged(user){
    {
        if (user) {
            var uid = user.uid;
            console.log("CHANGED user",user)
            console.log(uid)
            var docRef = db.collection("users").doc(uid);
            docRef.get().then((doc) => {
                if (doc.exists)
                {
                    try{
                        console.log("On authed changed")
                        console.log(doc.data())
                        localStorage.setItem("mail",doc.data().email)
                        localStorage.setItem("country",doc.data().country)
                        localStorage.setItem("city",doc.data().city)
                    }
                    catch{
                        console.log('wait some time..')
                    }
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }
        else {
            var myRe = new RegExp(".*index.html");
            if(!myRe.test(window.location.href)){
                window.location.replace("index.html");
            }
        }
    }
}