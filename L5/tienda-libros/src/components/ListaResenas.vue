<template>
    <div class="resenas">
        <h3 v-if="libro && libro.title">Reseñas de {{ libro.title }}</h3>
        <ul v-if="libro && libro.resenas && libro.resenas.length > 0" class="lista-resenas">
            <li v-for="(resena, index) in libro.resenas" :key="index" class="resena-item">
                <p>{{ resena.texto }}</p>
                <p class="valoracion">Valoración: {{ resena.valoracion }}/5</p>
            </li>
        </ul>
        <p v-else>No se encontraron reseñas para este libro.</p>
    </div>
</template>

<script>
export default {
    props: {
        libro: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.resenas {
    margin-top: 20px;
}

.lista-resenas {
    list-style-type: none;
    padding: 0;
}

.resena-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
}

.resena-item p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 5px;
}

.resena-item .valoracion {
    font-size: 14px;
    color: #888;
}
</style>
