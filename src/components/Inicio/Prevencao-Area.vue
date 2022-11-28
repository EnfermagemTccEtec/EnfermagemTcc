<template>
  <div class="main-container-prevencaoArea" id="Prevencao">
    <div class="container-title-prevencaoArea">
      <div class="title-prevencaoArea">
        <h1 class="text-title-prevencao">Prevenção</h1>
      </div>
    </div>

    <div class="container-conteudo">
      <div><p>Praticar exercícios físicos</p></div>
      <div><p>Sono de qualidade</p></div>
      <div><p>Alimentação saudável</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prevencao-Area",
  components: {},
};
</script>

<style scoped lang="scss">
.main-container-prevencaoArea {
  width: 100%;
  height: 615px;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #f1f1f1;
  background: linear-gradient(191deg, #089bab, #089bab, #fff);
}

.container-title-prevencaoArea {
  padding-top: 10px;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-bottom: 2px solid #089bab;
}

.title-prevencaoArea {
  display: flex;
  text-align: center;
}

.text-title-prevencao {
  font-size: 36px;
  color: #089bab;
}

.container-conteudo {
  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 50px;

  div {
    padding: 50px 70px;
    border: 1px solid #f1f1f1;
    border-radius: 10px;
    cursor: default;
    transition: 0.5s ease;
    background-color: #165c648a;

    p {
      font-size: 2em;
      color: #FFF;
    }
  }
}

.container-conteudo div:hover {
  transition: 0.5s ease;
  transform: scale(1.05);
}

@media (max-width: 550px) {
  .container-conteudo div p{
    font-size: 1.3em;
  }

  .container-conteudo div{
    min-width: 300px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }


}

@media (max-width: 460px) {
  .container-conteudo div{
    padding: 30px 30px;
  }
}
</style>
