<template>
  <h1>CREATE AM ACCOUNT</h1>
  <p><input type="text" placeholder="email" v-model="email" /></p>
  <p><input type="text" placeholder="password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>

<script>
//import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { route } from "quasar/wrappers";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      email: "",
      password: "",
      router: useRouter(),
    };
  },

  methods: {
    register() {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          console.log("Sucessfuly Registered!");
          this.router.push("/jogo");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    },
    signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log(result.user);
          this.router.push("/jogo");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
