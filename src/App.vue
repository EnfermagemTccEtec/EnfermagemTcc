<template>
  <NavBar></NavBar>
  <router-view />
  <FooterBar></FooterBar>
</template>

<script>
import NavBar from "./components/navBar.vue";
import FooterBar from "./components/footerBar.vue";
export default {
  name: "app",
  components: { NavBar, FooterBar },
};
</script>

<style lang="scss"></style>
