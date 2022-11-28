<template>
  <div></div>
</template>

<script>
export default {
  name: "ErrorView",
  methods:{
    Redirecionar(){
      this.$router.push({name: "inicio"})
    }
  }
}
</script>