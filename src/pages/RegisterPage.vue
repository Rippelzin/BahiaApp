<template>
  <div class="divCentral">
    <h1 class="titulo">Criar uma conta</h1>

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
      <div class="buttons">
        <p><button @click="register" class="submit">Cadastrar</button></p>
      </div>

      <div class="section">
        <h1 class="ouGoogle"></h1>
      </div>

      <div class="buttons">
        <p>
          <button @click="signInWithGoogle" class="submit">
            Sign In With Google
          </button>
        </p>
      </div>
    </div>
  </div>
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

<style>
.divCentral {
  margin-top: -3vh;
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
  margin-top: -3vh;
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
  margin: 0px;
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
}
</style>
