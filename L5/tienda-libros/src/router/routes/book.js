import LibroItem from "@/components/LibroItem.vue";
import ListaResenas from "@/components/ListaResenas.vue";

const bookRoutes = [
    {
    path: "/libro/:id",
    component: LibroItem,
    props: true,
    children: [{ path: "resenas", component: ListaResenas }],
    },
];

export default bookRoutes;
