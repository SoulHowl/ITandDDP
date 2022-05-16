import { useState, useEffect } from 'react'
import { getAuth }  from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from './firebase';


function useAuth() {
    const [authState, setAuthState] = useState({
        isSignedIn: false,
        pending: true,
        user: null,
    })

    useEffect(() => {
        const unregisterAuthObserver = auth.onAuthStateChanged(user =>{
                if(user){
                    const docRef = doc(db, 'users', user.uid);
                    getDoc(docRef).then(docSnap=>{
                        if (docSnap.exists()) {
                            console.log("Document data:", docSnap.data());
                            localStorage.setItem("mail",docSnap.data().email)
                            localStorage.setItem("country",docSnap.data().country)
                            localStorage.setItem("city",docSnap.data().city)

                            setAuthState({ user, pending: false, isSignedIn: !!user})
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    });
                }
            }
        )
        return () => unregisterAuthObserver()
    }, [])

    return { getAuth, ...authState}
}


export {useAuth}