import { createStore } from "vuex";

export default createStore({
  state: {
    EscolhaPergunta: [
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1,
    ],
  },
  getters: {},
  mutations: {
    MUDARESCOLHA(state, payload) {
      state.EscolhaPergunta = payload;
      console.log(state.EscolhaPergunta);
    },
  },
  actions: {
    MudarEscolhaPergunta(context, payload) {
      context.commit("MUDARESCOLHA", payload);
    },
  },
  modules: {},
});
