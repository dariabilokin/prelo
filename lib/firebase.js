import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAeUjJHc9dTMsqz7vLEUMrSFCGj5wKN0Zg",
  authDomain: "moving-fb4bc.firebaseapp.com",
  projectId: "moving-fb4bc",
  storageBucket: "moving-fb4bc.appspot.com",
  messagingSenderId: "91022499581",
  appId: "1:91022499581:web:650527bccc0e554b98a894",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
