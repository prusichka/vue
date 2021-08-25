import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "firebase/app";
import "firebase/database";

firebase.initializeApp({
  apiKey: "AIzaSyCUALnhCp3oSPDRfztJUQ1EvQALDoRsE0U",
  authDomain: "vue-crm-11.firebaseapp.com",
  databaseURL: "https://vue-crm-11-default-rtdb.firebaseio.com",
  projectId: "vue-crm-11",
  storageBucket: "vue-crm-11.appspot.com",
  messagingSenderId: "604526953329",
  appId: "1:604526953329:web:9c144f83f7eb08f9542cd0",
  measurementId: "G-MXHJ7V3FD2",
});

createApp(App).use(store).use(router).mount("#app");
