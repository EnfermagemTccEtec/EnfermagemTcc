<template>
  <div class="main-container-ajudaArea" id="Ajuda">
    <div class="container-title-ajudaArea">
      <div class="title-ajudaArea">
        <h1 class="text-title-ajuda">Ajuda</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ajuda-Area",
  components: {},
};
</script>

<style scoped lang="scss">
.main-container-ajudaArea {
  width: 100%;
  height: 915px;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #f1f1f1;
}

.container-title-ajudaArea {
  padding-top: 10px;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-bottom: 2px solid #089bab;
}

.title-ajudasArea {
  display: flex;
  text-align: center;
}

.text-title-ajuda {
  font-size: 36px;
  color: #089bab;
}
</style>
