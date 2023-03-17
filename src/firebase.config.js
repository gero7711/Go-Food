import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import{getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC-QjYy8crGb-MHJeba3DvBXCPMtHw7egY",
    authDomain: "grocerystoreapp-f1dc1.firebaseapp.com",
    databaseURL: "https://grocerystoreapp-f1dc1-default-rtdb.firebaseio.com",
    projectId: "grocerystoreapp-f1dc1",
    storageBucket: "grocerystoreapp-f1dc1.appspot.com",
    messagingSenderId: "1075510556007",
    appId: "1:1075510556007:web:e6a8d262529a8c8f74abc2",
    measurementId: "G-VSNJWT38DK"
  };

  const app = getApps.length > 0 ? getApp (): initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage};
  