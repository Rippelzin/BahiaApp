<template>
  <q-page>
    <h1>Sign In</h1>
    <p><input type="text" placeholder="email" v-model="email" /></p>
    <p><input type="text" placeholder="password" v-model="password" /></p>
    <p v-if="this.errMsg">{{ this.errMsg }}</p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
  </q-page>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { useRouter } from "vue-router";

export default {
  data() {
    return {
      email: "",
      password: "",
      router: useRouter(),
      errMsg: "",
    };
  },

  methods: {
    register() {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          console.log("Sucessfuly Signed In!");
          this.router.push("/jogo");
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/invalid-email":
              this.errMsg.value = "Invalid Email";
              break;
            case "auth/user-not-found":
              this.errMsg.value = "Nao existe uma conta com esse email";
              break;
            case "auth/wrong-password":
              this.errMsg = "Senha errada";
              break;
            default:
              this.errMsg = "email ou senha incorretos";
              break;
          }
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
