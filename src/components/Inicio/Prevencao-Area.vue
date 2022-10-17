<template>
  <div class="main-container-prevencaoArea" id="Prevencao">
    <div class="container-title-prevencaoArea">
      <div class="title-prevencaoArea">
        <h1 class="text-title-prevencao">Prevenção</h1>
      </div>
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
  height: 915px;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #f1f1f1;
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
</style>
