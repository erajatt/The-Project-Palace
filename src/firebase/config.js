import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB6KmF1ugxM5FXPldwHIfs2NuZNmORqKGM",
    authDomain: "theprojectpalace-903eb.firebaseapp.com",
    projectId: "theprojectpalace-903eb",
    storageBucket: "theprojectpalace-903eb.appspot.com",
    messagingSenderId: "64979167498",
    appId: "1:64979167498:web:1ad7fffee3e8b09560f2f3"
};

//initialise firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore=firebase.firestore()
const projectAuth=firebase.auth()
const projectStorage=firebase.storage()

const timestamp= firebase.firestore.Timestamp

export{projectFirestore, projectAuth, timestamp, projectStorage}