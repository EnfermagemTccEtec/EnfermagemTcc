<template>
  <div class="navbar-main">
    <nav class="navbar-container-links">
      <router-link to="/" class="navbar-link">Inicio</router-link>
      <router-link to="/questionario" class="navbar-link navbar-borda"
        >Questionario</router-link
      >
      <router-link
        to="/#Ajuda-Area"
        class="navbar-link"
        @click="selectClassAjuda"
        >Ajuda</router-link
      >
      <!--
      //  <router-link :to="{ name: 'inicio', hash: '#Ajuda' }" class="navbar-link"
      //  >Ajuda</router-link
      //
      -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "navBar",
  components: {},

  methods: {
    selectClassAjuda() {
      if (this.$route.hash) {
        const el = document.querySelector(this.$route.hash);
        el && el.scrollIntoView();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.navbar-main {
  height: 75px;
  width: 100%;
  display: flex;
  background-color: #fff;
}

.navbar-link {
  text-decoration: none;
  font-size: 30px;
  padding: 0 1% 0 1%;
  color: #089bab;
  transition: 0.3s;
}

.navbar-link:hover {
  color: #075c66;
}
.navbar-link:active {
  color: #05bbd0;
}

.navbar-container-links {
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #f1f1f1;
}

.navbar-borda {
  border-right: 1px solid #f1f1f1;
  border-left: 1px solid #f1f1f1;
}

/* 
  MEDIA QUERIES
*/

@media (max-width: 550px) {
  .navbar-main {
    height: 150px;
  }
  .navbar-container-links {
    flex-direction: column;
    row-gap: 15px;
  }
}
</style>
