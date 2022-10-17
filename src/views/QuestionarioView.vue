<template>
  <div class="Perguntas-InformaçãoSobre">
    <p>Responda as perguntas com base na sua vivencia nas ultimas semanas</p>
  </div>
  <div class="Estrutura-Perguntas-AreaTotal">
    <div class="Estrutura-Perguntas">
      <ThePergunta
        v-for="(pergunta, index) in BancoPerguntasLocal"
        :title="pergunta"
        :index="index"
        v-model:value="BancoRespostaLocal[index]"
        :key="index"
      ></ThePergunta>

      <router-link
        to="/resultado"
        v-if="BancoRespostaLocal.indexOf(-1) == -1"
        class="Perguntas-BotaoAvancar"
        >Obter Resultado</router-link
      >
      <div v-else class="Perguntas-Requirimento">
        Responda Todas As Perguntas*
      </div>
    </div>
  </div>
</template>

<script>
import BancoPerguntas from "@/components/Questionario/BancoPerguntas";
import ThePergunta from "@/components/Questionario/ThePergunta.vue";
export default {
  name: "QuestionarioView",
  components: { ThePergunta },

  data() {
    return {
      BancoPerguntasLocal: "",
      BancoRespostaLocal: [
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1,
      ],
    };
  },

  beforeMount() {
    this.BancoPerguntasLocal = BancoPerguntas;
  },

  watch: {
    BancoRespostaLocal: {
      deep: true,
      handler() {
        this.MudarValor();
      },
    },
  },

  methods: {
    MudarValor() {
      this.$store.dispatch("MudarEscolhaPergunta", this.BancoRespostaLocal);
    },
  },
};
</script>

<style scoped lang="scss">
.Estrutura-Perguntas-AreaTotal {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Estrutura-Perguntas {
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 30px;
}

.Perguntas-InformaçãoSobre {
  justify-content: center;
  align-items: center;
  display: flex;
  color: #089bab;
  font-size: 30px;
  margin: 60px 0px;
  text-transform: uppercase;
  text-align: center;
}

.Perguntas-Requirimento {
  justify-content: center;
  align-items: center;
  display: flex;
  color: #cc0000;
  font-size: 25px;
  margin: 50px 0px;
  text-transform: uppercase;
  text-align: center;
}

.Perguntas-BotaoAvancar {
  padding: 15px 0px;
  font-size: 30px;
  border-radius: 10px;
  border: 1px solid #089bab;
  background-color: #089bab;
  color: #fff;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  display: flex;
  transition: 0.3s;
  margin-bottom: 30px;
}

.Perguntas-BotaoAvancar:hover {
  background-color: #075c66;
}
.Perguntas-BotaoAvancar:active {
  background-color: #05bbd0;
}

/* 
  MEDIA QUERIES
*/

@media (max-width: 500px) {
  .Estrutura-Perguntas {
    margin: 0px 10px;
  }

  .Perguntas-InformaçãoSobre {
    margin: 60px 50px;
    text-align: center;
  }
}
</style>
