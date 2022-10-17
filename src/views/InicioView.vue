<template>
  <AreaInicial></AreaInicial>
  <SintomasArea></SintomasArea>
  <PrevencaoArea></PrevencaoArea>
  <AjudaArea></AjudaArea>
</template>

<script>
import AreaInicial from "@/components/Inicio/AreaInicial.vue";
import SintomasArea from "@/components/Inicio/Sintomas-Area.vue";
import PrevencaoArea from "@/components/Inicio/Prevencao-Area.vue";
import AjudaArea from "@/components/Inicio/Ajuda-Area.vue";
export default {
  name: "InicioView",
  components: { AreaInicial, SintomasArea, PrevencaoArea, AjudaArea },
};
</script>
