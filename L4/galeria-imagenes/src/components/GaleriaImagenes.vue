<template>
    <div class="galeria-imagenes">
        <h2>Galería de Imágenes</h2>

        <!-- Cuadrícula de miniaturas de imágenes -->
        <div class="miniaturas">
            <div v-for="(imagen, index) in imagenes" :key="index" class="miniatura">
                <img :src="imagen.url" alt="Imagen" @click="mostrarImagen(index)">
            </div>
        </div>

        <!-- Área para mostrar la imagen ampliada -->
        <div class="imagen-ampliada" v-if="imagenAmpliada !== null">
            <img :src="imagenes[imagenAmpliada].url" alt="Imagen Ampliada">
            <button @click.stop="cerrarImagen">Cerrar</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imagenes: [
                { url: 'https://media.istockphoto.com/id/1154103408/es/foto/repartidor-de-bicicletas.jpg?s=612x612&w=0&k=20&c=GKMmn3K43jTdudzGQ3uOJ2zryzQdawK7XanarqR4cA8=', descripcion: 'Descripción de la imagen 1' },
                { url: 'https://media.istockphoto.com/id/473082752/es/foto/flores-frescas-en-barquilla-de-helado-vida.jpg?s=612x612&w=0&k=20&c=BAPxtiXWV0dXGzva39GcE0Qhp-_hjXWpEvzmVLD09Q8=', descripcion: 'Descripción de la imagen 2' },
                { url: 'https://media.istockphoto.com/id/1159164272/es/foto/preparación-de-pasteles.jpg?s=612x612&w=0&k=20&c=Ki1deeOZ-LH1krxlSBMVESpMVkeO_q0Id9H_xuOynGg=', descripcion: 'Descripción de la imagen 3' },
                { url: 'https://media.istockphoto.com/id/1159164272/es/foto/preparación-de-pasteles.jpg?s=612x612&w=0&k=20&c=Ki1deeOZ-LH1krxlSBMVESpMVkeO_q0Id9H_xuOynGg=', descripcion: 'Descripción de la imagen 4' },
                { url: 'https://media.istockphoto.com/id/473082752/es/foto/flores-frescas-en-barquilla-de-helado-vida.jpg?s=612x612&w=0&k=20&c=BAPxtiXWV0dXGzva39GcE0Qhp-_hjXWpEvzmVLD09Q8=', descripcion: 'Descripción de la imagen 5' },
                { url: 'https://media.istockphoto.com/id/1154103408/es/foto/repartidor-de-bicicletas.jpg?s=612x612&w=0&k=20&c=GKMmn3K43jTdudzGQ3uOJ2zryzQdawK7XanarqR4cA8=', descripcion: 'Descripción de la imagen 6' },
            ],
            imagenAmpliada: null
        };
    },
    methods: {
        mostrarImagen(index) {
            this.imagenAmpliada = index;
        },
        cerrarImagen() {
            this.imagenAmpliada = null;
        }
    }
};
</script>

<style scoped>
.galeria-imagenes {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.miniaturas {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
}

.miniatura img {
    width: 100%;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.miniatura img:hover {
    transform: scale(1.1);
}

.imagen-ampliada {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}

.imagen-ampliada img {
    max-width: 80%;
    max-height: 80%;
    border: 4px solid #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.imagen-ampliada button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #fff;
    color: #000;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
}
</style>