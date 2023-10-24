import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
// import './style.css'



//componentes




// Navbar y footer (Elementos que se muestran siempre)
import App from "./App.vue";

// Login y registro
import Login from "../src/components/Login.vue";
import Registro from "../src/components/Registro.vue";

// Pagina principal o home
import Home from "../src/components/Home.vue";

// Galeria de habitaciones de BellaVista
import BellaVista from "../src/components//Hoteles/BellaVista.vue";

// Info habitaciones BellaVista
import BellaVistaH1 from "../src/components/Habitaciones/BellaVistaH1.vue";

// Info Info sitios turisticos
import SaltoDelMico from "../src/components/InfoSTuristicos/SaltoDelMico.vue";





// Formularios
import RegitroHotel from "../src/components/Formularios/RegitroHotel.vue";
import RegistroHabitaciones from "../src/components/Formularios/RegistroHabitaciones.vue";

import HacerReserva from "../src/components/Formularios/HacerReserva.vue";
import RegistroSitio from "../src/components/Formularios/RegistroSitio.vue";
import RegistroProveedores from "../src/components/Formularios/RegistroProveedores.vue";

// Paneles Admin
import PanelAdmin from "../src/components/Admin/PanelAdmin.vue";

import PanelHoteles from "../src/components/Admin/AdminHoteles/PanelHoteles.vue";
import PanelProveedores from "../src/components/Admin/AdminProveedores/PanelProveedores.vue";
import PanelSitios from "../src/components/Admin/AdminSitios/PanelSitios.vue";
import PanelHabitaciones from "../src/components/Admin/AdminHabitaciones/PanelHabitaciones.vue";
import PanelUsuarios from "../src/components/Admin/AdminUsuarios/PanelUsuarios.vue";

// Paneles Dueño
import PanelDueno from "../src/components/Dueno/PanelDueno.vue";

import DPanelHotel from "../src/components/Dueno/DuneHotel/DPanelHotel.vue";
import DPanelHabitaciones from "../src/components/Dueno/DuenoHabitaciones/DPanelHabitaciones.vue";
import DPanelReservas from "../src/components/Dueno/DuenoReservas/DPanelReservas.vue";




// Definir rutas
const routes = [
  {
    path: "/", component: Home },
  { path: "/BellaVista", component: BellaVista },

  { path: "/BellaVistaH1", component: BellaVistaH1 },

  { path: "/SaltoDelMico", component: SaltoDelMico },

  { path: "/Login", component: Login },

  { path: "/Registro", component: Registro },


  { path: "/RegitroHotel", component: RegitroHotel },

  { path: "/RegistroHabitaciones", component: RegistroHabitaciones },



  { path: "/HacerReserva", component: HacerReserva },

  { path: "/RegistroSitio", component: RegistroSitio },

  { path: "/RegistroProveedores", component: RegistroProveedores },


// Paneles Admin
  { path: "/PanelAdmin", component: PanelAdmin},


  { path: "/PanelHoteles", component: PanelHoteles},

  { path: "/PanelProveedores", component: PanelProveedores},

  { path: "/PanelSitios", component: PanelSitios},

  { path: "/PanelHabitaciones", component: PanelHabitaciones},

  { path: "/PanelUsuarios", component: PanelUsuarios},


// Paneles Dueño
  { path: "/PanelDueno", component: PanelDueno},


  { path: "/DPanelHotel", component: DPanelHotel},

  { path: "/DPanelHabitaciones", component: DPanelHabitaciones},

  { path: "/DPanelReservas", component: DPanelReservas},


];

//objeto rutas - vue router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//instancia de vue
const app = createApp(App);

app.use(router);

app.mount("#app");
