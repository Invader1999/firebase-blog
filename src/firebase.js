import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDy095cNejIXxF4g_NtK3uK_MpI3JHW_xM",
    authDomain: "react-blog-app-026.firebaseapp.com",
    projectId: "react-blog-app-026",
    storageBucket: "react-blog-app-026.appspot.com",
    messagingSenderId: "423332263142",
    appId: "1:423332263142:web:58378df161cc00942b7727"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }