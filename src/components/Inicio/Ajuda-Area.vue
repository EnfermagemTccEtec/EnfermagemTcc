<template>
  <div class="main-container-ajudaArea" id="Ajuda-Area">
    <div class="container-title-ajudaArea">
      <div class="title-ajudaArea">
        <h1 class="text-title-ajuda">Ajuda</h1>
      </div>
    </div>

    <div class="container-ajuda">
      <div class="main-container-ajuda">
        <div class="text-container-ajuda">
          <a href="https://www.cvv.org.br/ligue-188/">LIGUE 188</a>
        </div>
        <div class="text-container-ajuda">
          <a href="https://www.cvv.org.br/postos-de-atendimento/">CVV LOCAL</a>
        </div>
        <div class="text-container-ajuda">
          <a href="https://www.cvv.org.br/chat/">CVV CHAT</a>
        </div>
        <div class="text-container-ajuda">
          <a href="https://www.podefalar.org.br">PODE FALAR</a>
        </div>
        <div class="text-container-ajuda">
          <a href="https://mapasaudemental.com.br">CAPS</a>
        </div>
      </div>
      <div class="main-container-ajuda">
        <div class="text-container-ajuda">
          <p>Postos de Saude</p>
        </div>
        <div class="text-container-ajuda">
          <p>Hospital</p>
        </div>
      </div>
      <div class="main-container-ajuda">
        <div class="text-container-ajuda">
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

.main-container-ajuda {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  margin: 80px 10px;
}
.text-container-ajuda {
  padding: 40px;
  border: 1px solid #089bab;
  margin: 10px;
  border-radius: 3%;
  color: #089bab;

  a {
    text-decoration: none;
    color: #089bab;
  }
}

.container-ajuda {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 833px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

@media (max-width: 872px) {
  .main-container-ajuda {
    height: 200px;
  }
}
@media (max-width: 520px) {
  .main-container-ajudaArea {
    height: auto;
  }
  .container-ajuda {
    height: auto;
  }
  .main-container-ajuda {
    height: auto;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 30px 10px;
  }
  .text-container-ajuda {
    width: 70%;
    text-align: center;
  }
}
</style>
