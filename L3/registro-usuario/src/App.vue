<template>
  <div id="app">
    <header>
      <h1>Formulario de Registro de Usuario</h1>
    </header>

    <main>
      <!-- Incluir el componente RegistroUsuario.vue -->
      <RegistroUsuario />
    </main>
  </div>
</template>

<script>
// Importar el componente RegistroUsuario.vue
import RegistroUsuario from './components/RegistroUsuario.vue';

export default {
  name: 'App',
  components: {
    RegistroUsuario // Registrar el componente para usarlo en el template
  }
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 20px;
}

header {
  background-color: #9f35e6d7;
  padding: 20px;
  color: white;
}

main {
  display: flex;
  justify-content: center;
}
</style>
