<template>
  <div class="main-container-sintomasArea" id="Sintomas">
    <div class="container-title-sistomasArea">
      <div class="title-sistomasArea">
        <h1 class="text-title-sintomas">Principais Sintomas</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sintomas-Area",
  components: {},
};
</script>

<style scoped lang="scss">
.main-container-sintomasArea {
  width: 100%;
  height: 915px;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #f1f1f1;
}

.container-title-sistomasArea {
  padding-top: 10px;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-bottom: 2px solid #089bab;
}

.title-sintomasArea {
  display: flex;
  text-align: center;
}

.text-title-sintomas {
  font-size: 36px;
  color: #089bab;
}
</style>
