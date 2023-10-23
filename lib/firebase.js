import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAS1-3fR7qdiMaXQfJMj-OSsxoTEx_WE90",
  authDomain: "move-f8a78.firebaseapp.com",
  projectId: "move-f8a78",
  storageBucket: "move-f8a78.appspot.com",
  messagingSenderId: "538197118295",
  appId: "1:538197118295:web:c98507bd55216975a74212",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
