<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1lQiKvt9jleZFpFlzlwyGQowH4jpMNrU",
  authDomain: "bahia-app-cd82d.firebaseapp.com",
  projectId: "bahia-app-cd82d",
  storageBucket: "bahia-app-cd82d.appspot.com",
  messagingSenderId: "1011257695456",
  appId: "1:1011257695456:web:afe9680e9942f7a56dc485",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default defineComponent({
  name: "App",
});
</script>
