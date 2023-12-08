<template>
  <q-page class="divCentral">
    <h1 class="titulo">Faca seu login</h1>
    <div class="form">
      <div class="fieldOut">
        <input type="text" placeholder="email" v-model="email" class="field" />
      </div>
      <div class="fieldOut">
        <input
          type="text"
          placeholder="password"
          v-model="password"
          class="field"
        />
      </div>
    </div>

    <p v-if="this.errMsg">{{ this.errMsg }}</p>
    <div class="buttons">
      <p><button @click="login" class="submit">Login</button></p>
    </div>
    <div class="section">
      <h1 class="ouGoogle"></h1>
    </div>

    <div class="buttons">
      <p>
        <button @click="signInWithGoogle" class="submit">
          Entrar com o Google
        </button>
      </p>
    </div>
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
    login() {
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
<style>
.divCentral {
  margin-top: -5vh;
  display: grid;
  align-items: center;
  justify-content: center;
}
.titulo {
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid black;
  border-radius: 20px;
  font-family: "Comic Sans MS", cursive;
  padding: 2vh;
  color: rgb(0, 119, 255);
}
.form {
  margin-top: -5vh;
  display: grid;
  align-items: center;
  justify-content: center;
}

.field {
  height: 10vh;
  margin: 20px;
  width: 60vh;
  border-radius: 20px;
  border: 1px solid black;
  font-size: 5vh;
  font-weight: bold;
  font-family: "Comic Sans MS", cursive;
}
.field:hover {
  color: rgb(243, 243, 243);
  border: 2px white solid;
  background-color: rgb(255, 191, 0);
}
.buttons {
  display: grid;
  justify-content: center;
  align-items: center;
}

.submit {
  width: 40vh;
  height: 15vh;
  border: 2px black solid;
  border-radius: 20px;
  font-size: 5vh;
  font-family: "Comic Sans MS", cursive;
  transition: 1s;
  margin: 10px;
}
.submit:hover {
  width: 45vh;
  height: 18vh;
  border: 5px rgb(233, 233, 233) solid;

  font-family: "Comic Sans MS", cursive;
  background-color: rgb(0, 119, 255);
  color: white;
}
.section {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ouGoogle {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 119, 255, 0.665);
  width: 40%;
  background-color: white;
  border-radius: 30px;
  height: 2vh;
  margin: 0;
}
</style>
