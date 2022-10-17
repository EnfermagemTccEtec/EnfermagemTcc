<template>
  <div class="Pergunta-Main-Container">
    <div>
      <b class="Pergunta-Titulo">
        <span class="Pergunta-Numero-Titulo">{{ index + 1 }})</span>
        <span class="Pergunta-Texto-Titulo">{{ this.title }}</span>
      </b>
    </div>
    <div class="Pergunta-Container-Resposta">
      <div class="Pergunta-Linha">
        <div>
          <input
            type="radio"
            :name="index"
            value="0"
            v-model="ValorResposta"
            @click="$emit('update:value', 0)"
          />
        </div>
        <div>
          <label>Não se aplicou de maneira alguma</label>
        </div>
      </div>
      <div class="Pergunta-Linha">
        <div>
          <input
            type="radio"
            :name="index"
            value="1"
            v-model="ValorResposta"
            @click="$emit('update:value', 1)"
          />
        </div>
        <div>
          <label>Aplicou-se em algum grau, ou por algum tempo</label>
        </div>
      </div>
      <div class="Pergunta-Linha">
        <div>
          <input
            type="radio"
            :name="index"
            value="2"
            v-model="ValorResposta"
            @click="$emit('update:value', 2)"
          />
        </div>
        <div>
          <label
            >Aplicou-se em um grau considerável, ou por uma boa parte do
            tempo</label
          >
        </div>
      </div>
      <div class="Pergunta-Linha">
        <div>
          <input
            type="radio"
            :name="index"
            value="3"
            v-model="ValorResposta"
            @click="$emit('update:value', 3)"
          />
        </div>
        <div>
          <label>Aplicou-se muito, ou na maioria do tempo </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThePergunta",
  components: {},
  props: {
    title: String,
    index: Number,
    value: Number,
  },
  emits: ["update:value"],

  data() {
    return {
      ValorResposta: "",
      indexLocal: this.index,
    };
  },
};
</script>

<style scoped lang="scss">
.Pergunta-Main-Container {
  border: 1px solid #089bab;
  padding: 30px;
  border-radius: 3%;
  display: flex;
  row-gap: 15px;
  flex-direction: column;
  line-height: 1.7;
}
.Pergunta-Titulo {
  width: 50%;
  color: #089bab;
  cursor: default;
}

.Pergunta-Numero-Titulo {
  margin-right: 5px;
  padding: 5px 10px;
  border-radius: 25%;
  background-color: #089bab;
  color: #fff;
}

.Pergunta-Texto-Titulo {
  text-transform: uppercase;
  text-align: justify;
}

.Pergunta-Container-Resposta {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.Pergunta-Linha {
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  justify-content: flex-start;
  align-items: center;
  text-align: justify;

  input {
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: #089bab;
    vertical-align: middle;
  }
}

/* 
  MEDIA QUERIES
*/

@media (max-width: 500px) {
}
</style>
