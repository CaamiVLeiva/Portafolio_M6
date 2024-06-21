<template>
    <div class="tarea-lista">
        <h1>Lista de Tareas</h1>
        <form @submit.prevent="agregarTarea">
            <input v-model="nuevaTarea" type="text" placeholder="Agregar nueva tarea" />
            <button type="submit">Agregar</button>
        </form>
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                {{ tarea }}
                <button @click="eliminarTarea(index)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nuevaTarea: '',
            tareas: []
        };
    },
    methods: {
        agregarTarea() {
            if (this.nuevaTarea.trim()) {
                this.tareas.push(this.nuevaTarea);
                this.nuevaTarea = '';
            }
        },
        eliminarTarea(index) {
            this.tareas.splice(index, 1);
        }
    }
};
</script>

<style scoped>
.tarea-lista {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

input {
    padding: 8px;
    width: 70%;
    margin-right: 10px;
}

button {
    padding: 8px 16px;
}

form>button{
    background-color: rgb(142, 177, 142);
}

li>button{
    background-color: rgb(201, 109, 109);
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 8px;
    background: #f4f4f4;
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>