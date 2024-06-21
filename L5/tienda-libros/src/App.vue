<template>
  <div id="app">
    <header>
      <!-- Encabezado común / menú de navegación -->
      <router-link to="/">Inicio</router-link>
      <router-link to="/catalogo">Catálogo</router-link>
    </header>
    
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
    
    <footer>
      <p>&copy; 2024 Mi Tienda de Libros</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Estilos globales para toda la aplicación */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active (v2.1.8 y anteriores) */ {
  transform: translateX(10px);
  opacity: 0;
}

header {
  background-color: #333;
  padding: 10px;
  color: white;
  width: 100%; 
}

header a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

footer {
  background-color: #333;
  padding: 10px;
  color: white;
  margin-top: auto; 
  width: 100%; 
}
</style>
