<template>
  <div class="footerBar-main">
    <div class="footerBar-text">Cardilho ©</div>
  </div>
</template>

<script>
export default {
  name: "footerBar",
  components: {},
};
</script>

<style scoped lang="scss">
.footerBar-main {
  height: 85px;
  width: 100%;
  display: flex;
  background-color: #fff;
  border-top: 2px solid #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footerBar-text {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #089bab;
  font-size: 24px;
}
</style>
