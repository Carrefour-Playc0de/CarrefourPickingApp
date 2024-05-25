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
import { MenuCrearPedidosBotonRetiro } from '../pageObjectModel/MenuPrincipal/CrearPedidos/MenuCrearPedidosBotonRetiro'
import { MenuCrearPedidosBotonEnvio } from '../pageObjectModel/MenuPrincipal/CrearPedidos/MenuCrearPedidosBotonEnvio'
import {
    MenuCrearPedidosBotonAceptar
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/MenuCrearPedidosBotonAceptar'
import {
    MenuCrearPedidosBotonCancelar
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/MenuCrearPedidosBotonCancelar'
import {
    MenuCrearPedidosSectionButtonsOfertas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Ofertas/MenuCrearPedidosSectionButtonsOfertas'
import {
    MenuCrearPedidosSectionButtonsFavoritos
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Favoritos/MenuCrearPedidosSectionButtonsFavoritos'
import {
    MenuCrearPedidosSectionButtonsSeccion
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Seccion/MenuCrearPedidosSectionButtonsSeccion'
import {
    MenuCrearPedidosSectionButtonsCategorias
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/MenuCrearPedidosSectionButtonsCategorias'
import {
    MenuCrearPedidosOfertasSectionButtonsAhorrador
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Ofertas/SectionButtons/MenuCrearPedidosOfertasSectionButtonsAhorrador'
import {
    MenuCrearPedidosOfertasSectionButtonsEspecialesDia
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Ofertas/SectionButtons/MenuCrearPedidosOfertasSectionButtonsEspecialesDia'
import {
    MenuCrearPedidosOfertasSectionButtonsFolletoMaxi
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Ofertas/SectionButtons/MenuCrearPedidosOfertasSectionButtonsFolletoMaxi'
import {
    MenuCrearPedidosOfertasSectionButtonsOfertaPorBulto
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Ofertas/SectionButtons/MenuCrearPedidosOfertasSectionButtonsOfertaPorBulto'
import {
    MenuCrearPedidosSeccionSectionButtonsAlmacen
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Seccion/SectionButtons/MenuCrearPedidosSeccionSectionButtonsAlmacen'
import {
    MenuCrearPedidosSeccionSectionButtonsBazarTextil
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Seccion/SectionButtons/MenuCrearPedidosSeccionSectionButtonsBazarTextil'
import {
    MenuCrearPedidosSeccionSectionButtonsBebidas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Seccion/SectionButtons/MenuCrearPedidosSeccionSectionButtonsBebidas'
import {
    MenuCrearPedidosSeccionSectionButtonsDesayunoMerienda
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Seccion/SectionButtons/MenuCrearPedidosSeccionSectionButtonsDesayunoMerienda'
import {
    MenuCrearPedidosSeccionSectionButtonsFrutasVerduras
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Seccion/SectionButtons/MenuCrearPedidosSeccionSectionButtonsFrutasVerduras'
import {
    MenuCrearPedidosSeccionSectionButtonsLacteosProductosFrescos
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Seccion/SectionButtons/MenuCrearPedidosSeccionSectionButtonsLacteosProductosFrescos'
import {
    MenuCrearPedidosSeccionSectionButtonsLimpieza
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Seccion/SectionButtons/MenuCrearPedidosSeccionSectionButtonsLimpieza'
import {
    MenuCrearPedidosSeccionSectionButtonsMundoBebe
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Seccion/SectionButtons/MenuCrearPedidosSeccionSectionButtonsMundoBebe'
import {
    MenuCrearPedidosSeccionSectionButtonsPanaderia
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Seccion/SectionButtons/MenuCrearPedidosSeccionSectionButtonsPanaderia'
import {
    MenuCrearPedidosSeccionSectionButtonsPerfumeria
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Seccion/SectionButtons/MenuCrearPedidosSeccionSectionButtonsPerfumeria'

import {
    MCPCategorySectionButtonsAguas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsAguas'
import {
    MCPCategorySectionButtonsAlgodonesHisopos
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsAlgodonesHisopos'
import {
    MCPCategorySectionButtonsAlimentoBebe
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsAlimentoBebe'
import {
    MCPCategorySectionButtonsAntitransDesodorantes
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsAntitransDesodorantes'
import {
    MCPCategorySectionButtonsArrozLegumbres
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsArrozLegumbres'
import {
    MCPCategorySectionButtonsAzucarEndulzantes
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsAzucarEndulzantes'
import {
    MCPCategorySectionButtonsArticulosLimpieza
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsArticulosLimpieza'
import {
    MCPCategorySectionButtonsAutomotor
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsAutomotor'
import {
    MCPCategorySectionButtonsAceitesVinagres
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsAceitesVinagres'

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
    menuCrearPedidosBotonRetiro: MenuCrearPedidosBotonRetiro
    menuCrearPedidosBotonEnvio: MenuCrearPedidosBotonEnvio
    menuCrearPedidosBotonAceptar: MenuCrearPedidosBotonAceptar
    menuCrearPedidosBotonCancelar: MenuCrearPedidosBotonCancelar
    menuCrearPedidosSectionButtonsOfertas: MenuCrearPedidosSectionButtonsOfertas
    menuCrearPedidosSectionButtonsFavoritos: MenuCrearPedidosSectionButtonsFavoritos
    menuCrearPedidosSectionButtonsSeccion: MenuCrearPedidosSectionButtonsSeccion
    menuCrearPedidosSectionButtonsCategorias: MenuCrearPedidosSectionButtonsCategorias
    menuCrearPedidosOfertasSectionButtonsAhorrador: MenuCrearPedidosOfertasSectionButtonsAhorrador
    menuCrearPedidosOfertasSectionButtonsEspecialesDia: MenuCrearPedidosOfertasSectionButtonsEspecialesDia
    menuCrearPedidosOfertasSectionButtonsFolletoMaxi: MenuCrearPedidosOfertasSectionButtonsFolletoMaxi
    menuCrearPedidosOfertasSectionButtonsOfertaPorBulto: MenuCrearPedidosOfertasSectionButtonsOfertaPorBulto
    menuCrearPedidosSeccionSectionButtonsAlmacen: MenuCrearPedidosSeccionSectionButtonsAlmacen
    menuCrearPedidosSeccionSectionButtonsBazarTextil: MenuCrearPedidosSeccionSectionButtonsBazarTextil
    menuCrearPedidosSeccionSectionButtonsBebidas: MenuCrearPedidosSeccionSectionButtonsBebidas
    menuCrearPedidosSeccionSectionButtonsDesayunoMerienda: MenuCrearPedidosSeccionSectionButtonsDesayunoMerienda
    menuCrearPedidosSeccionSectionButtonsFrutasVerduras: MenuCrearPedidosSeccionSectionButtonsFrutasVerduras
    menuCrearPedidosSeccionSectionButtonsLacteosProductosFrescos: MenuCrearPedidosSeccionSectionButtonsLacteosProductosFrescos
    menuCrearPedidosSeccionSectionButtonsLimpieza: MenuCrearPedidosSeccionSectionButtonsLimpieza
    menuCrearPedidosSeccionSectionButtonsMundoBebe: MenuCrearPedidosSeccionSectionButtonsMundoBebe
    menuCrearPedidosSeccionSectionButtonsPanaderia: MenuCrearPedidosSeccionSectionButtonsPanaderia
    menuCrearPedidosSeccionSectionButtonsPerfumeria: MenuCrearPedidosSeccionSectionButtonsPerfumeria
    mCPCategorySectionButtonsAceitesVinagres: MCPCategorySectionButtonsAceitesVinagres
    mCPCategorySectionButtonsAguas: MCPCategorySectionButtonsAguas
    mCPCategorySectionButtonsAlgodonesHisopos: MCPCategorySectionButtonsAlgodonesHisopos
    mCPCategorySectionButtonsAlimentoBebe: MCPCategorySectionButtonsAlimentoBebe
    mCPCategorySectionButtonsAntitransDesodorantes: MCPCategorySectionButtonsAntitransDesodorantes
    mCPCategorySectionButtonsArrozLegumbres: MCPCategorySectionButtonsArrozLegumbres
    mCPCategorySectionButtonsAzucarEndulzantes: MCPCategorySectionButtonsAzucarEndulzantes
    mCPCategorySectionButtonsArticulosLimpieza: MCPCategorySectionButtonsArticulosLimpieza
    mCPCategorySectionButtonsAutomotor: MCPCategorySectionButtonsAutomotor

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




    // CREAR PEDIDOS - CATEGORIAS
    menuCrearPedidosSectionButtonsCategorias: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosSectionButtonsCategorias(page, context, environment))
    },
    mCPCategorySectionButtonsAceitesVinagres: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsAceitesVinagres(page, context, environment))
    },
    mCPCategorySectionButtonsAguas: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsAguas(page, context, environment))
    },
    mCPCategorySectionButtonsAlgodonesHisopos: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsAlgodonesHisopos(page, context, environment))
    },
    mCPCategorySectionButtonsAlimentoBebe: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsAlimentoBebe(page, context, environment))
    },
    mCPCategorySectionButtonsAntitransDesodorantes: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsAntitransDesodorantes(page, context, environment))
    },
    mCPCategorySectionButtonsArrozLegumbres: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsArrozLegumbres(page, context, environment))
    },
    mCPCategorySectionButtonsArticulosLimpieza: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsArticulosLimpieza(page, context, environment))
    },
    mCPCategorySectionButtonsAutomotor: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsAutomotor(page, context, environment))
    },
    mCPCategorySectionButtonsAzucarEndulzantes: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsAzucarEndulzantes(page, context, environment))
    },





    // CREAR PEDIDOS - SECCION
    menuCrearPedidosSectionButtonsSeccion: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosSectionButtonsSeccion(page, context, environment))
    },
    menuCrearPedidosSeccionSectionButtonsAlmacen: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosSeccionSectionButtonsAlmacen(page, context, environment))
    },
    menuCrearPedidosSeccionSectionButtonsBazarTextil: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosSeccionSectionButtonsBazarTextil(page, context, environment))
    },
    menuCrearPedidosSeccionSectionButtonsBebidas: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosSeccionSectionButtonsBebidas(page, context, environment))
    },
    menuCrearPedidosSeccionSectionButtonsDesayunoMerienda: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosSeccionSectionButtonsDesayunoMerienda(page, context, environment))
    },
    menuCrearPedidosSeccionSectionButtonsFrutasVerduras: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosSeccionSectionButtonsFrutasVerduras(page, context, environment))
    },
    menuCrearPedidosSeccionSectionButtonsLacteosProductosFrescos: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosSeccionSectionButtonsLacteosProductosFrescos(page, context, environment))
    },
    menuCrearPedidosSeccionSectionButtonsLimpieza: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosSeccionSectionButtonsLimpieza(page, context, environment))
    },
    menuCrearPedidosSeccionSectionButtonsMundoBebe: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosSeccionSectionButtonsMundoBebe(page, context, environment))
    },
    menuCrearPedidosSeccionSectionButtonsPanaderia: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosSeccionSectionButtonsPanaderia(page, context, environment))
    },
    menuCrearPedidosSeccionSectionButtonsPerfumeria: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosSeccionSectionButtonsPerfumeria(page, context, environment))
    },


    // CREAR PEDIDOS - OFERTAS
    menuCrearPedidosSectionButtonsOfertas: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosSectionButtonsOfertas(page, context, environment))
    },
    menuCrearPedidosOfertasSectionButtonsAhorrador: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosOfertasSectionButtonsAhorrador(page, context, environment))
    },
    menuCrearPedidosOfertasSectionButtonsEspecialesDia: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosOfertasSectionButtonsEspecialesDia(page, context, environment))
    },
    menuCrearPedidosOfertasSectionButtonsFolletoMaxi: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosOfertasSectionButtonsFolletoMaxi(page, context, environment))
    },
    menuCrearPedidosOfertasSectionButtonsOfertaPorBulto: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosOfertasSectionButtonsOfertaPorBulto(page, context, environment))
    },




    // CREAR PEDIDOS - FAVORITOS
    menuCrearPedidosSectionButtonsFavoritos: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosSectionButtonsFavoritos(page, context, environment))
    },



    // CREAR PEDIDOS
    menuCrearPedidosBotonRetiro: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosBotonRetiro(page, context, environment))
    },
    menuCrearPedidosBotonEnvio: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosBotonEnvio(page, context, environment))
    },
    menuCrearPedidosBotonAceptar: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosBotonAceptar(page, context, environment))
    },
    menuCrearPedidosBotonCancelar: async ({ page, context }, use) => {
        await use(new MenuCrearPedidosBotonCancelar(page, context, environment))
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
