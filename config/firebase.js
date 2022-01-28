import firebase from 'firebase/app';
import 'firebase/auth';
import Constants  from 'expo-constants';

//Initialize Firebase
const firebaseConfig = {
    apiKey: Constants.manifest.extra.apiKey,
    authDomain: Constants.manifest.extra.authDomain,
    projectId: Constants.manifest.extra.projectId,
    storageBucket: Constants.manifest.storageBucket,
    messagingSenderId: Constants.manifest.messagingSenderId,
    appId: Constants.manifest.appId,
};

let Firebase;

if(firebase.apps.length===0){
    Firebase = firebase.initializeApp(firebaseConfig)
}

export default Firebase;