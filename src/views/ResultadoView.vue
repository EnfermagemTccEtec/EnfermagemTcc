<template>
  <section class="Resultado-Container-Main">
    <div v-if="valorDepressão >= 0" class="Resultado-Container-Central">
      <h1 class="Resultado-Title">RESULTADO</h1>
      <div class="Resultado-Container-Meio">
        <div
          class="Resultado-Container"
          :style="{ 'border-color': CorDepressao.CorEscura }"
        >
          <div>
            <h1 :style="{ color: CorDepressao.CorEscura }">Depressão</h1>
          </div>
          <div>
            <p
              :style="{
                'background-color': CorDepressao.CorClara,
                color: CorDepressao.CorEscura,
              }"
            >
              {{ ResultadoDepressao }}
            </p>
          </div>
        </div>

        <div
          class="Resultado-Container"
          :style="{ 'border-color': CorAnsiedade.CorEscura }"
        >
          <div>
            <h1 :style="{ color: CorAnsiedade.CorEscura }">Ansiedade</h1>
          </div>
          <div>
            <p
              :style="{
                'background-color': CorAnsiedade.CorClara,
                color: CorAnsiedade.CorEscura,
              }"
            >
              {{ ResultadoAnsiedade }}
            </p>
          </div>
        </div>

        <div
          class="Resultado-Container"
          :style="{ 'border-color': CorEstresse.CorEscura }"
        >
          <div><h1 :style="{ color: CorEstresse.CorEscura }">Estresse</h1></div>
          <div>
            <p
              :style="{
                'background-color': CorEstresse.CorClara,
                color: CorEstresse.CorEscura,
              }"
            >
              {{ ResultadoEstresse }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="Resultado-Container-Central-Else">
      <div class="Resultado-Container-Else">
        <h1>POR FAVOR REALIZE O TESTE EM</h1>
        <router-link to="/questionario" class="">Questionario</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ResultadoView",
  components: {},

  data() {
    return {
      valorDepressão: 0,
      valorAnsiedade: 0,
      valorEstresse: 0,
      ResultadoDepressao: -1,
      ResultadoAnsiedade: -1,
      ResultadoEstresse: -1,
      CorDepressao: "",
      CorAnsiedade: "",
      CorEstresse: "",
    };
  },

  beforeMount() {
    this.CalcularResultado();
  },

  methods: {
    CalcularResultado() {
      this.CalculoDepressao();
      this.CalculoAnsiedade();
      this.CalculoEstresse();

      this.ResultadoDepressao = this.CategoriaResultado(this.valorDepressão);
      this.ResultadoAnsiedade = this.CategoriaResultado(this.valorAnsiedade);
      this.ResultadoEstresse = this.CategoriaResultado(this.valorEstresse);

      this.CorDepressao = this.CorResultado(this.ResultadoDepressao);
      this.CorAnsiedade = this.CorResultado(this.ResultadoAnsiedade);
      this.CorEstresse = this.CorResultado(this.ResultadoEstresse);

      console.log(this.CorDepressao);
      console.log(this.CorAnsiedade);
      console.log(this.CorEstresse);
    },
    CalculoDepressao() {
      this.valorDepressão += this.$store.state.EscolhaPergunta[3 - 1];
      this.valorDepressão += this.$store.state.EscolhaPergunta[5 - 1];
      this.valorDepressão += this.$store.state.EscolhaPergunta[10 - 1];
      this.valorDepressão += this.$store.state.EscolhaPergunta[13 - 1];
      this.valorDepressão += this.$store.state.EscolhaPergunta[16 - 1];
      this.valorDepressão += this.$store.state.EscolhaPergunta[17 - 1];
      this.valorDepressão += this.$store.state.EscolhaPergunta[21 - 1];

      this.valorDepressão = this.valorDepressão * 2;
    },

    CalculoAnsiedade() {
      this.valorAnsiedade += this.$store.state.EscolhaPergunta[2 - 1];
      this.valorAnsiedade += this.$store.state.EscolhaPergunta[4 - 1];
      this.valorAnsiedade += this.$store.state.EscolhaPergunta[7 - 1];
      this.valorAnsiedade += this.$store.state.EscolhaPergunta[9 - 1];
      this.valorAnsiedade += this.$store.state.EscolhaPergunta[15 - 1];
      this.valorAnsiedade += this.$store.state.EscolhaPergunta[19 - 1];
      this.valorAnsiedade += this.$store.state.EscolhaPergunta[20 - 1];

      this.valorAnsiedade = this.valorAnsiedade * 2;
    },

    CalculoEstresse() {
      this.valorEstresse += this.$store.state.EscolhaPergunta[1 - 1];
      this.valorEstresse += this.$store.state.EscolhaPergunta[6 - 1];
      this.valorEstresse += this.$store.state.EscolhaPergunta[8 - 1];
      this.valorEstresse += this.$store.state.EscolhaPergunta[11 - 1];
      this.valorEstresse += this.$store.state.EscolhaPergunta[12 - 1];
      this.valorEstresse += this.$store.state.EscolhaPergunta[14 - 1];
      this.valorEstresse += this.$store.state.EscolhaPergunta[18 - 1];

      this.valorEstresse = this.valorEstresse * 2;
    },

    CategoriaResultado(entrada) {
      // 0-10 Normal
      // 11-18 Leve
      // 19-26 Moderado
      // 27-34 Severo
      // 35-42 Extremamente Severo

      if (entrada >= 0 && entrada <= 10) {
        return "Normal";
      }
      if (entrada >= 11 && entrada <= 18) {
        return "Leve";
      }
      if (entrada >= 19 && entrada <= 26) {
        return "Moderado";
      }
      if (entrada >= 27 && entrada <= 34) {
        return "Severo";
      }
      if (entrada >= 35 && entrada <= 42) {
        return "Extremamente Severo";
      }
    },

    CorResultado(entrada) {
      if (entrada == "Normal") {
        return {
          CorBase: "#27b9d7",
          CorClara: "#73d7e8",
          CorEscura: "#0a6f8b",
        };
      }
      if (entrada == "Leve") {
        return {
          CorBase: "#49bc7f",
          CorClara: "#80d9ae",
          CorEscura: "#186f3a",
        };
      }
      if (entrada == "Moderado") {
        return {
          CorBase: "#ffcd28",
          CorClara: "#ffe264",
          CorEscura: "#a8820a",
        };
      }
      if (entrada == "Severo") {
        return {
          CorBase: "#f6893a",
          CorClara: "#febb69",
          CorEscura: "#9e4110",
        };
      }
      if (entrada == "Extremamente Severo") {
        return {
          CorBase: "#f15354",
          CorClara: "#981c1a",
          CorEscura: "#fb8980",
        };
      }
    },
  },
};
</script>

<style scoped lang="scss">
.Resultado-Container-Main {
  width: 100%;
  height: 750px;
}

.Resultado-Container-Central {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.Resultado-Container-Meio {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
  margin-left: 10px;
  margin-right: 10px;
}

.Resultado-Container {
  border-radius: 10px;
  padding: 50px;
  width: 300px;
  border: 1px solid #000;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3em;
    }

    p {
      width: 100%;
      font-size: 2em;

      border-radius: 10px;
      padding: 10px 0px;
      text-align: center;
    }
  }
}

.Resultado-Title {
  color: #089bab;
}

@media (max-width: 1300px) {
  .Resultado-Container {
    padding: 20px;
    width: 220px;

    div {
      h1 {
        font-size: 2.5em;
      }

      p {
        font-size: 1.5em;
        padding: 10px 0px;
        text-align: center;
      }
    }
  }
}

@media (max-width: 910px) {
  .Resultado-Container-Central {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
  .Resultado-Container-Meio {
    width: 80%;
    height: auto;
    flex-direction: column;
    column-gap: 0px;
    row-gap: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .Resultado-Title {
    margin-bottom: 30px;
  }

  .Resultado-Container {
    padding: 50px;
    width: 70%;
  }
}

/*
  ELSE
*/

.Resultado-Container-Central-Else {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.Resultado-Container-Else {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;

  h1 {
    font-size: 3em;
    color: #089bab;
  }

  a {
    text-decoration: none;
    font-size: 3em;
    background-color: #089bab;
    color: white;
    padding: 20px 0px;
    border-radius: 10px;
    font-weight: bold;
    transition: 0.3s ease;
  }
  a:hover {
    transition: 0.3s ease;
    background-color: #075c66;
  }
  a:active {
    transition: 0.3s ease;
    background-color: #05bbd0;
  }
}
</style>
