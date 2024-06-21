<template>
    <div class="registro-usuario">
        <h2>Formulario de Registro</h2>

        <form @submit.prevent="registrarUsuario">
            <div>
                <label for="nombre">Nombre:</label>
                <input id="nombre" type="text" v-model="usuario.nombre" required>
            </div>

            <div>
                <label for="email">Correo Electrónico:</label>
                <input id="email" type="email" v-model="usuario.email" required>
            </div>

            <div>
                <label for="password">Contraseña:</label>
                <input id="password" type="password" v-model="usuario.password" required>
            </div>

            <div>
                <label>Género:</label>
                <div>
                    <input type="radio" id="masculino" value="masculino" v-model="usuario.genero">
                    <label for="masculino">Masculino</label>
                </div>
                <div>
                    <input type="radio" id="femenino" value="femenino" v-model="usuario.genero">
                    <label for="femenino">Femenino</label>
                </div>
                <div>
                    <input type="radio" id="otro" value="otro" v-model="usuario.genero">
                    <label for="otro">Otro</label>
                </div>
            </div>

            <div>
                <label>
                    <input type="checkbox" v-model="aceptaTerminos">
                    Acepto los términos y condiciones
                </label>
            </div>

            <div>
                <button type="submit">Registrarse</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            usuario: {
                nombre: '',
                email: '',
                password: '',
                genero: '',
            },
            aceptaTerminos: false,
        };
    },
    methods: {
        registrarUsuario() {
            console.log('Datos del usuario:');
            console.log('Nombre:', this.usuario.nombre);
            console.log('Correo:', this.usuario.email);
            console.log('Contraseña:', this.usuario.password);
            console.log('Género:', this.usuario.genero);
            console.log('Acepta términos:', this.aceptaTerminos ? 'Sí' : 'No');
        }
    }
};
</script>

<style scoped>
.registro-usuario {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 5px;
}

input,
select,
button {
    margin-bottom: 10px;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: #b95acc;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #b434ce;
}
</style>