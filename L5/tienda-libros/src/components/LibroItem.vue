<template>
    <div class="libro">
        <div class="card">
            <h3>{{ libro.titulo }}</h3>
            <p>Por {{ libro.autor }}</p>
            <router-link :to="{ name: 'DetalleLibro', params: { id: libro.id.toString() } }">Ver Detalle</router-link>
        </div>
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
.libro {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    max-width: 300px; /* Ancho máximo de la card */
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
}

.card p {
    font-style: italic;
    color: #666;
    margin-bottom: 10px;
}

.card a {
    display: inline-block;
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.card a:hover {
    background-color: #0056b3;
}
</style>
