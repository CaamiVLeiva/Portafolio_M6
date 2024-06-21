import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/PaginaInicio.vue';
import Catalogo from '../views/ListaCatalogo.vue';
import DetalleLibro from '../views/DetalleLibro.vue';
import Resenas from '../components/ListaResenas.vue';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/catalogo',
    name: 'Catalogo',
    component: Catalogo
  },
  {
    path: '/libro/:id',
    name: 'DetalleLibro',
    component: DetalleLibro,
    props: true, // Permite pasar props desde la ruta
    children: [
      {
        path: 'resenas',
        name: 'ListaResenas',
        component: Resenas,
        props: true // Pasar props a ListaResenas
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
