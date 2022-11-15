<template>
  <div></div>
  <div class="main-container-areainicio">
    <div class="container-imagem-areainicio">
      <img class="imagem-areainicio" src="@/../public/img/Imagem_Inicial.png" />
    </div>
    <div class="main-container-texto-areainicio">
      <div class="container-texto-areainicio">
        <div class="texto-areainicio">
          ANSIEDADE NÃO É FRECURA BUSQUE AJUDA !!
        </div>
        <a href="#Sintomas" class="links-texto">Principais Sintomas</a>
        <a href="#Prevencao" class="links-texto">Prevenção</a>
        <router-link to="/questionario" class="links-texto"
          >Questionario</router-link
        >
        <a href="#Ajuda-Area" class="links-texto">Ajuda</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AreaInicial",
  components: {},
};
</script>

<style scoped lang="scss">
.main-container-areainicio {
  width: 100%;
  height: 845px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid #f1f1f1;
}
.imagem-areainicio {
  width: 600px;
  height: 500px;
}
.main-container-texto-areainicio {
  width: 600px;
  height: 500px;
}
.container-texto-areainicio {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.texto-areainicio {
  width: 80%;
  font-size: 36px;
  text-align: center;
  margin-bottom: 5%;
  color: #089bab;
}
.links-texto {
  width: 70%;
  text-align: center;
  padding: 10px;
  margin: 1%;
  text-decoration: none;
  font-size: 30px;
  color: #089bab;
  border-radius: 5px;
  border: 2px solid #089bab;
  transition: 0.3s;
}
.links-texto:hover {
  transform: scale(1.05);
}
</style>
