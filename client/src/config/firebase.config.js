import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDaVdk3GvCFpGbD_IvSNchnHs0z6N-LccU",
  authDomain: "restaurant-app-ee8c7.firebaseapp.com",
  projectId: "restaurant-app-ee8c7",
  storageBucket: "restaurant-app-ee8c7.appspot.com",
  messagingSenderId: "423319567531",
  appId: "1:423319567531:web:6aa41035fa3278b35a8bee",
  measurementId: "G-4KSLQLLH6V",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const storage = getStorage(app);
export { app, storage };
