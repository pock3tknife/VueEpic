<template>
  <header class="global-header">
    <div class="row">
      <div class="global-logo">
        <a href="/">Vue Epic</a>
      </div>
      <Navbar />
    </div>
  </header>
  <div class="dvview" style="margin-top:100px;">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import firebase from "firebase";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace("/login");
        } else if (route.path == "/login" || route.path == "/register") {
          router.replace("/");
        }
      });
    });
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
}

body {
  background: #28282b;
}

.global-header {
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 999;
}

.row {
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0;
  max-width: 1000px;
  margin: 0 auto;
}

.global-logo a {
  color: #252222;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
}
</style>
