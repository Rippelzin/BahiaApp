<template>
  <q-layout view="lHh Lpr lFf">
    <!----><q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Navegador </q-item-label>

        <q-item clickable to="/">
          <q-tem-section avatar>
            <q-icon name="home" />
          </q-tem-section>
          <q-item-label> Home </q-item-label>
        </q-item>

        <q-item clickable to="/mapa" v-if="this.isLoggedIn">
          <q-tem-section avatar>
            <q-icon name="public" />
          </q-tem-section>
          <q-item-label> Mapa da sua Aventura </q-item-label>
        </q-item>

        <q-item clickable to="/diario" v-if="this.isLoggedIn">
          <q-tem-section avatar>
            <q-icon name="menu_book" />
          </q-tem-section>
          <q-item-label> Diario da Aventura </q-item-label>
        </q-item>

        <q-item clickable to="/">
          <q-tem-section avatar>
            <q-icon name="settings" />
          </q-tem-section>
          <q-item-label> Settings </q-item-label>
        </q-item>

        <q-item clickable @click="SignOut" v-if="this.isLoggedIn">
          <q-tem-section avatar>
            <q-icon name="logout" />
          </q-tem-section>
          <q-item-label> Sair </q-item-label>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
//import EssentialLink from "components/EssentialLink.vue";
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { onMounted } from "vue";
import router from "src/router";
const linksList = [
  {
    title: "Sair",
    caption: "",
    icon: "school",
    link: "",
  },
  /* {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },*/
];

export default defineComponent({
  name: "MainLayout",

  /*components: {
    EssentialLink,
  },*/

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  data() {
    return {
      auth: "",
      isLoggedIn: false,
    };
  },

  methods: {
    SignOut() {
      alert("adeus");
      signOut(this.auth).then(() => {
        router.push("/");
      });
    },
  },
  mounted() {
    this.auth = getAuth();
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
});
</script>
