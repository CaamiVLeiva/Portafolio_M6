<template>
    <div class="catalogo">
        <h2>Catálogo de Libros</h2>
        <div class="libros-container">
            <div class="libro-item" v-for="libro in libros" :key="libro.id">
                <Libro :libro="libro" />
            </div>
        </div>
    </div>
</template>

<script>
import Libro from '@/components/LibroItem.vue';

export default {
    name: 'ListaCatalogo',
    components: {
        Libro
    },
    data() {
        return {
            libros: [
                { id: 1, titulo: 'Libro 1', autor: 'Autor 1', resenas: [] },
                { id: 2, titulo: 'Libro 2', autor: 'Autor 2', resenas: [] },
                { id: 3, titulo: 'Libro 3', autor: 'Autor 3', resenas: [] }
            ]
        };
    }
};
</script>

<style scoped>
.catalogo {
    max-width: 800px;
    margin: 100px auto;
    padding: 0 20px;
}

.libros-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.libro-item {
    width: calc(33.33% - 20px); 
    margin-bottom: 20px;
    box-sizing: border-box;
}

@media (max-width: 1024px) {
    .libro-item {
        width: calc(50% - 20px); 
}
}

@media (max-width: 768px) {
    .libro-item {
        width: calc(100% - 20px); 
    }
}
</style>
