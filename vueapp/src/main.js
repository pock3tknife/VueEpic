import { createApp } from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD9Kp4pWCW0lPoJv0GhX34AoyGN3GcBo9U",
  authDomain: "vue-auth-1afc6.firebaseapp.com",
  databaseURL: "https://vue-auth-1afc6.firebaseapp.com",
  projectId: "vue-auth-1afc6",
  storageBucket: "vue-auth-1afc6.appspot.com",
  messagingSenderId: "1023427373675",
  appId: "1:1023427373675:web:0cc02a15b174b94e305f2e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
