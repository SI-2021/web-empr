import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDslgUsrC66lD93HfSum9c0Bz6p0kKP2Yc",
  authDomain: "web-empr.firebaseapp.com",
  projectId: "web-empr",
  storageBucket: "web-empr.appspot.com",
  messagingSenderId: "409377443856",
  appId: "1:409377443856:web:a9c3389feec05643e37a95",
  measurementId: "G-C2P76901H5"
};

const app = initializeApp(firebaseConfig);

export default app;