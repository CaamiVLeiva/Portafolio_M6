<template>
    <div class="tarea-lista">
        <h1>Lista de Tareas</h1>

        <!-- Formulario para agregar nuevas tareas -->
        <form @submit.prevent="agregarTarea">
            <input v-model="nuevaTarea.texto" type="text" placeholder="Agregar nueva tarea" required />
            <input v-model="nuevaTarea.descripcion" type="text" placeholder="Descripción" />
            <input v-model="nuevaTarea.fecha" type="date" />
            <button type="submit">Agregar</button>
        </form>

        <!-- Botón para mostrar/ocultar tareas completadas -->
        <button @click="toggleMostrarCompletadas">
            {{ mostrarCompletadas ? 'Ocultar Completadas' : 'Mostrar Completadas' }}
        </button>

        <!-- Botón para marcar todas las tareas como completadas -->
        <button @click="marcarTodasCompletadas">
            Marcar todas como completadas
        </button>

        <!-- Lista de tareas -->
        <ul>
            <li v-for="(tarea, index) in tareasFiltradas" :key="index" v-bind:class="{ completada: tarea.completada }">
                <input type="checkbox" v-model="tarea.completada" />
                <div>
                    <span>{{ tarea.texto }} - {{ tarea.descripcion }} - {{ tarea.fecha }}</span>
                    <button @click="eliminarTarea(index)">Eliminar</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nuevaTarea: {
                texto: '',
                descripcion: '',
                fecha: ''
            },
            tareas: [],
            mostrarCompletadas: true
        };
    },
    computed: {
        // Filtra las tareas según el estado de mostrarCompletadas
        tareasFiltradas() {
            return this.mostrarCompletadas
                ? this.tareas
                : this.tareas.filter(tarea => !tarea.completada);
        }
    },
    methods: {
        // Agrega una nueva tarea a la lista
        agregarTarea() {
            if (this.nuevaTarea.texto.trim()) {
                this.tareas.push({ ...this.nuevaTarea, completada: false });
                this.nuevaTarea = {
                    texto: '',
                    descripcion: '',
                    fecha: ''
                };
            }
        },
        // Elimina una tarea de la lista según su índice
        eliminarTarea(index) {
            this.tareas.splice(index, 1);
        },
        // Alterna el estado de mostrarCompletadas entre true y false
        toggleMostrarCompletadas() {
            this.mostrarCompletadas = !this.mostrarCompletadas;
        },
        // Marca todas las tareas como completadas
        marcarTodasCompletadas() {
            this.tareas.forEach(tarea => {
                tarea.completada = true;
            });
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

input[type="text"],
input[type="date"] {
    padding: 8px;
    margin: 5px;
    width: 70%;
}

button {
    padding: 8px 16px;
}

form>button {
    background-color: rgb(142, 177, 142);
}

li>div>button {
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

/* Estilo para tareas completadas */
.completada {
    text-decoration: line-through;
    color: gray;
    background-color: #d3ffd3;
}
</style>