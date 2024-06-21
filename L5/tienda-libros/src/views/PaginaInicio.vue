<template>
    <div class="inicio">
        <h1>Bienvenido a la Tienda de Libros</h1>
        <p>Descubre nuestra colección de libros y encuentra tu próxima lectura favorita.</p>
        <router-link to="/catalogo" class="btn">Explorar libros</router-link>
    </div>
</template>

<script>
export default {
    name: 'PaginaInicio'
};
</script>

<style scoped>
.inicio {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
}

.inicio h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
}

.inicio p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 30px;
    color: #666;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #0056b3;
}
</style>
