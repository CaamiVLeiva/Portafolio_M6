<template>
  <div id="app">
    <TareaLista />
  </div>
</template>

<script>
import TareaLista from './components/TareaLista.vue';

export default {
  name: 'App',
  components: {
    TareaLista
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
