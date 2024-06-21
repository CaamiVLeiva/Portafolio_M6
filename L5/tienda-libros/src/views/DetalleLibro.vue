<template>
    <div class="detalle-libro">
        <h2>{{ libro.title }}</h2>
        <p>{{ libro.description }}</p>
        <router-link :to="{ name: 'ListaResenas', params: { id: libro.id.toString() } }">Ver Reseñas</router-link>
        <!-- Mostrar componente ListaResenas solo si la ruta actual es /libro/:id/resenas -->
        <router-view v-if="$route.name === 'ListaResenas'" :libro="libro" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            libro: {}
        };
    },
    created() {
        // Obtener el ID del libro de la ruta
        const libroId = this.$route.params.id;
        // Simulación de carga de datos del libro y de reseñas
        this.cargarLibro(libroId);
    },
    methods: {
        cargarLibro(id) {
            // Simulación de carga de datos del libro
            this.libro = {
                id: id,
                title: 'Libro ' + id,
                description: 'Descripción del libro ' + id,
                resenas: [] // Inicializamos con un array vacío para las reseñas
            };
            this.cargarResenas();
        },
        cargarResenas() {
            this.libro.resenas = [
                { id: 1, texto: 'Buena lectura', valoracion: 4 },
                { id: 2, texto: 'Interesante pero corto', valoracion: 3 }
            ];
        }
    }
};
</script>

<style scoped>
.detalle-libro {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.detalle-libro h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.detalle-libro p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
}

.detalle-libro router-link {
    display: block;
    margin-top: 10px;
    font-size: 14px;
    text-decoration: none;
    color: #007bff;
}

.detalle-libro router-link:hover {
    text-decoration: underline;
}

/* Estilos para el componente ListaResenas.vue */
.lista-resenas {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #ccc;
}

.lista-resenas h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.lista-resenas ul {
    list-style-type: none;
    padding: 0;
}

.lista-resenas li {
    margin-bottom: 15px;
}

.lista-resenas p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
}

.lista-resenas .valoracion {
    font-size: 14px;
    color: #888;
}
</style>
