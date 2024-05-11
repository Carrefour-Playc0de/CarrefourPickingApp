import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../pageObjectModel/LoginPage/LoginPage'
import { MenuArmadoPedido } from '../pageObjectModel/MenuPrincipal/ArmadoPedido/MenuArmadoPedido'
import { ActivarGeolocalizacion } from '../pageObjectModel/LoginPage/ActivarGeolocalizacion'
import { MenuImprimirComanda } from '../pageObjectModel/MenuPrincipal/ImprimirComanda/MenuImprimirComanda'
import { MenuPedidosProceso } from '../pageObjectModel/MenuPrincipal/PedidosProceso/MenuPedidosProceso'
import {
    MenuAgregarProductoPrevioPickeo
} from '../pageObjectModel/MenuPrincipal/AgregarProductoPrevioPickeo/MenuAgregarProductoPrevioPickeo'
import { MenuArmadosProceso } from '../pageObjectModel/MenuPrincipal/ArmadosProceso/MenuArmadosProceso'
import { MenuConsultarPedidos } from '../pageObjectModel/MenuPrincipal/ConsultarPedidos/MenuConsultarPedidos'
import { MenuExportraSurtido } from '../pageObjectModel/MenuPrincipal/ExportarSurtido/MenuExportarSurtido'
import { MenuEstadisticas } from '../pageObjectModel/MenuPrincipal/Estadisticas/MenuEstadisticas'
import { MenuCrearPedidos } from '../pageObjectModel/MenuPrincipal/CrearPedidos/MenuCrearPedidos'
import { MenuCerrarSesion } from '../pageObjectModel/LoginPage/MenuCerrarSesion'

const environment = process.env.TEST || 'qa'

const test = baseTest.extend<{
    loginPage: LoginPage
    activarGeolocalizacion: ActivarGeolocalizacion
    menuArmadoPedido: MenuArmadoPedido
    menuImprimirComanda: MenuImprimirComanda
    menuPedidosProceso: MenuPedidosProceso
    menuAgregarProductoPrevioPickeo: MenuAgregarProductoPrevioPickeo
    menuArmadosProceso: MenuArmadosProceso
    menuConsultarPedidos: MenuConsultarPedidos
    menuExportraSurtido: MenuExportraSurtido
    menuEstadisticas:MenuEstadisticas
    menuCrearPedidos: MenuCrearPedidos
    menuCerrarSesion: MenuCerrarSesion

}>({
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context, environment))
    },
    activarGeolocalizacion: async ({ page, context }, use) => {
        await use(new ActivarGeolocalizacion(page, context, environment))
    },
    menuCerrarSesion: async ({ page, context }, use) => {
        await use(new MenuCerrarSesion(page, context, environment))
    },





    menuArmadoPedido: async ({ page, context }, use) => {
        await use(new MenuArmadoPedido(page, context, environment))
    },
    menuImprimirComanda: async ({ page, context }, use) => {
        await use(new MenuImprimirComanda(page, context, environment))
    },
    menuPedidosProceso: async ({ page, context }, use) => {
        await use(new MenuPedidosProceso(page, context, environment))
    },
    menuAgregarProductoPrevioPickeo: async ({ page, context }, use) => {
        await use(new MenuAgregarProductoPrevioPickeo(page, context, environment))
    },
    menuArmadosProceso: async ({ page, context }, use) => {
        await use(new MenuArmadosProceso(page, context, environment))
    },
    menuConsultarPedidos: async ({ page, context }, use) => {
        await use(new MenuConsultarPedidos(page, context, environment))
    },
    menuExportraSurtido: async ({ page, context }, use) => {
        await use(new MenuExportraSurtido(page, context, environment))
    },
    menuEstadisticas: async ({ page, context }, use) => {
        await use(new MenuEstadisticas(page, context, environment))
    },
    menuCrearPedidos: async ({ page, context }, use) => {
        await use(new MenuCrearPedidos(page, context, environment))
    },



})

export default test
