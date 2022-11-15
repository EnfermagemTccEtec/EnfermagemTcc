<template>
  <div class="main-container-ajudaArea" id="Ajuda-Area">
    <div class="container-title-ajudaArea">
      <div class="title-ajudaArea">
        <h1 class="text-title-ajuda">Ajuda</h1>
      </div>
    </div>

    <div>
      <div>
        <div>
          <a href="https://www.cvv.org.br/ligue-188/">LIGUE 188</a>
        </div>
        <div>
          <a href="https://www.cvv.org.br/postos-de-atendimento/">CVV LOCAL</a>
        </div>
        <div>
          <a href="https://www.cvv.org.br/chat/">CVV CHAT/</a>
        </div>
        <div>
          <a href="https://www.podefalar.org.br">PODE FALAR</a>
        </div>
        <div>
          <a href="https://mapasaudemental.com.br">CAPS</a>
        </div>
        <div>
          <p>Postos de Saude</p>
        </div>
        <div>
          <p>Hospital</p>
        </div>
        <div>
          <a href="https://www.cvv.org.br/links-uteis/">MAIS LINKS UTEIS</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ajuda-Area",
  components: {},
  mounted() {
    if (this.$route.hash) {
      const el = document.querySelector(this.$route.hash);
      el && el.scrollIntoView();
    }
  },
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
