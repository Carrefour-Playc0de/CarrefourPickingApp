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
import { MenuNuevoPedidos } from '../pageObjectModel/MenuPrincipal/CrearPedidos/MenuNuevoPedidos'
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
import {
    MCPCategorySectionButtonsBebidas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsBebidas'
import {
    MCPCategorySectionButtonsBebidasBlancas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsBebidasBlancas'
import {
    MCPCategorySectionButtonsBebidasEnergizantes
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsBebidasEnergizantes'
import {
    MCPCategorySectionButtonsBebidasIsotonicas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsBebidasIsotonicas'
import {
    MCPCategorySectionButtonsBudinesMagdalenas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsBudinesMagdalenas'
import {
    MCPCategorySectionButtonsCafe
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsCafe'
import {
    MCPCategorySectionButtonsCaldosSopasPure
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsCaldosSopasPure'
import {
    MCPCategorySectionButtonsCerealesBarritas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsCerealesBarritas'
import {
    MCPCategorySectionButtonsCervezas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsCervezas'
import {
    MCPCategorySectionButtonsCocinaComedor
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsCocinaComedor'
import {
    MCPCategorySectionButtonsCremasLeche
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsCremasLeche'
import {
    MCPCategorySectionButtonsCuidadoCorporal
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsCuidadoCorporal'
import {
    MCPCategorySectionButtonsCuidadoPiel
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsCuidadoPiel'
import {
    MCPCategorySectionButtonsCuidadoCabello
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsCuidadoCabello'
import {
    MCPCategorySectionButtonsCuidadoDental
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsCuidadoDental'
import {
    MCPCategorySectionButtonsDecoOrganizacion
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsDecoOrganizacion'
import {
    MCPCategorySectionButtonsDesodorAmbiente
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsDesodorAmbiente'
import {
    MCPCategorySectionButtonsDespuesBanio
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsDespuesBanio'
import {
    MCPCategorySectionButtonsDulceLeche
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsDulceLeche'
import {
    MCPCategorySectionButtonsEnlatadosConservas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsEnlatadosConservas'
import {
    MCPCategorySectionButtonsEspumantesSidras
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsEspumantesSidras'
import {
    MCPCategorySectionButtonsFarmacia
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsFarmacia'
import {
    MCPCategorySectionButtonsFernetAperitivos
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsFernetAperitivos'
import {
    MCPCategorySectionButtonsFerreteriaPintura
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsFerreteriaPintura'
import {
    MCPCategorySectionButtonsGalletBizcoTostadas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsGalletBizcoTostadas'
import {
    MCPCategorySectionButtonsGaseosas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsGaseosas'
import {
    MCPCategorySectionButtonsGolosinasChocolates
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsGolosinasChocolates'
import {
    MCPCategorySectionButtonsHarinas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsHarinas'
import {
    MCPCategorySectionButtonsInfusiones
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsInfusiones'
import {
    MCPCategorySectionButtonsInsecticidas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsInsecticidas'
import {
    MCPCategorySectionButtonsJabones
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsJabones'
import {
    MCPCategorySectionButtonsJugos
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsJugos'
import {
    MCPCategorySectionButtonsLavandinas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsLavandinas'
import {
    MCPCategorySectionButtonsLeches
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsLeches'
import {
    MCPCategorySectionButtonsLechesPolLarVida
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsLechesPolLarVida'
import {
    MCPCategorySectionButtonsLibreria
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsLibreria'
import {
    MCPCategorySectionButtonsLimpiezaBanio
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsLimpiezaBanio'
import {
    MCPCategorySectionButtonsLimpiezaCocina
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsLimpiezaCocina'
import {
    MCPCategorySectionButtonsLimpiezaRopa
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsLimpiezaRopa'
import {
    MCPCategorySectionButtonsLimpiezaPisosMuebles
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsLimpiezaPisosMuebles'
import {
    MCPCategorySectionButtonsManteMargariLevaduras
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsManteMargariLevaduras'
import {
    MCPCategorySectionButtonsMermeOtrosDulces
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsMermeOtrosDulces'
import {
    MCPCategorySectionButtonsPAS
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsPAS'
import {
    MCPCategorySectionButtonsPanRalladoRebozadores
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsPanRalladoRebozadores'
import {
    MCPCategorySectionButtonsPaniales
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsPaniales'
import {
    MCPCategorySectionButtonsPanificados
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsPanificados'
import {
    MCPCategorySectionButtonsPapelesHigienicos
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsPapelesHigienicos'
import {
    MCPCategorySectionButtonsParaBanio
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsParaBanio'
import {
    MCPCategorySectionButtonsPastasSecas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsPastasSecas'
import {
    MCPCategorySectionButtonsProteccionFemenina
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsProteccionFemenina'
import {
    MCPCategorySectionButtonsProteccionAdultos
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsProteccionAdultos'
import {
    MCPCategorySectionButtonsQuesos
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsQuesos'
import {
    MCPCategorySectionButtonsRepelentes
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsRepelentes'
import {
    MCPCategorySectionButtonsReposteriaPostres
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsReposteriaPostres'
import {
    MCPCategorySectionButtonsRollosCocinaServilletas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsRollosCocinaServilletas'
import {
    MCPCategorySectionButtonsSalAdereSaborizadores
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsSalAdereSaborizadores'
import {
    MCPCategorySectionButtonsSeco
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsSeco'
import {
    MCPCategorySectionButtonsSnacks
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsSnacks'
import {
    MCPCategorySectionButtonsToallitasHumedas
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsToallitasHumedas'
import {
    MCPCategorySectionButtonsVinos
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsVinos'
import {
    MCPCategorySectionButtonsYerba
} from '../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsYerba'
import { PedidosBotonMostrarMas } from '../pageObjectModel/MenuPrincipal/CrearPedidos/PedidosBotonMostrarMas'


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
    menuNuevoPedidos: MenuNuevoPedidos
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
    mCPCategorySectionButtonsBebidas: MCPCategorySectionButtonsBebidas
    mCPCategorySectionButtonsBebidasBlancas: MCPCategorySectionButtonsBebidasBlancas
    mCPCategorySectionButtonsBebidasEnergizantes: MCPCategorySectionButtonsBebidasEnergizantes
    mCPCategorySectionButtonsBebidasIsotonicas: MCPCategorySectionButtonsBebidasIsotonicas
    mCPCategorySectionButtonsBudinesMagdalenas: MCPCategorySectionButtonsBudinesMagdalenas
    mCPCategorySectionButtonsCafe: MCPCategorySectionButtonsCafe
    mCPCategorySectionButtonsCaldosSopasPure: MCPCategorySectionButtonsCaldosSopasPure
    mCPCategorySectionButtonsCerealesBarritas: MCPCategorySectionButtonsCerealesBarritas
    mCPCategorySectionButtonsCervezas: MCPCategorySectionButtonsCervezas
    mCPCategorySectionButtonsCocinaComedor: MCPCategorySectionButtonsCocinaComedor
    mCPCategorySectionButtonsCremasLeche: MCPCategorySectionButtonsCremasLeche
    mCPCategorySectionButtonsCuidadoCorporal: MCPCategorySectionButtonsCuidadoCorporal
    mCPCategorySectionButtonsCuidadoPiel: MCPCategorySectionButtonsCuidadoPiel
    mCPCategorySectionButtonsCuidadoCabello: MCPCategorySectionButtonsCuidadoCabello
    mCPCategorySectionButtonsCuidadoDental: MCPCategorySectionButtonsCuidadoDental
    mCPCategorySectionButtonsDecoOrganizacion: MCPCategorySectionButtonsDecoOrganizacion
    mCPCategorySectionButtonsDesodorAmbiente: MCPCategorySectionButtonsDesodorAmbiente
    mCPCategorySectionButtonsDespuesBanio: MCPCategorySectionButtonsDespuesBanio
    mCPCategorySectionButtonsDulceLeche: MCPCategorySectionButtonsDulceLeche
    mCPCategorySectionButtonsEnlatadosConservas: MCPCategorySectionButtonsEnlatadosConservas
    mCPCategorySectionButtonsEspumantesSidras: MCPCategorySectionButtonsEspumantesSidras
    mCPCategorySectionButtonsFarmacia: MCPCategorySectionButtonsFarmacia
    mCPCategorySectionButtonsFernetAperitivos: MCPCategorySectionButtonsFernetAperitivos
    mCPCategorySectionButtonsFerreteriaPintura: MCPCategorySectionButtonsFerreteriaPintura
    mCPCategorySectionButtonsGalletBizcoTostadas: MCPCategorySectionButtonsGalletBizcoTostadas
    mCPCategorySectionButtonsGaseosas: MCPCategorySectionButtonsGaseosas
    mCPCategorySectionButtonsGolosinasChocolates: MCPCategorySectionButtonsGolosinasChocolates
    mCPCategorySectionButtonsHarinas: MCPCategorySectionButtonsHarinas
    mCPCategorySectionButtonsInfusiones: MCPCategorySectionButtonsInfusiones
    mCPCategorySectionButtonsInsecticidas: MCPCategorySectionButtonsInsecticidas
    mCPCategorySectionButtonsJabones: MCPCategorySectionButtonsJabones
    mCPCategorySectionButtonsJugos: MCPCategorySectionButtonsJugos
    mCPCategorySectionButtonsLavandinas :MCPCategorySectionButtonsLavandinas
    mCPCategorySectionButtonsLeches: MCPCategorySectionButtonsLeches
    mCPCategorySectionButtonsLechesPolLarVida: MCPCategorySectionButtonsLechesPolLarVida
    mCPCategorySectionButtonsLibreria: MCPCategorySectionButtonsLibreria
    mCPCategorySectionButtonsLimpiezaBanio: MCPCategorySectionButtonsLimpiezaBanio
    mCPCategorySectionButtonsLimpiezaCocina :MCPCategorySectionButtonsLimpiezaCocina
    mCPCategorySectionButtonsLimpiezaRopa: MCPCategorySectionButtonsLimpiezaRopa
    mCPCategorySectionButtonsLimpiezaPisosMuebles: MCPCategorySectionButtonsLimpiezaPisosMuebles
    mCPCategorySectionButtonsManteMargariLevaduras: MCPCategorySectionButtonsManteMargariLevaduras
    mCPCategorySectionButtonsMermeOtrosDulces: MCPCategorySectionButtonsMermeOtrosDulces
    mCPCategorySectionButtonsPAS: MCPCategorySectionButtonsPAS
    mCPCategorySectionButtonsPanRalladoRebozadores: MCPCategorySectionButtonsPanRalladoRebozadores
    mCPCategorySectionButtonsPaniales: MCPCategorySectionButtonsPaniales
    mCPCategorySectionButtonsPanificados: MCPCategorySectionButtonsPanificados
    mCPCategorySectionButtonsPapelesHigienicos: MCPCategorySectionButtonsPapelesHigienicos
    mCPCategorySectionButtonsParaBanio: MCPCategorySectionButtonsParaBanio
    mCPCategorySectionButtonsPastasSecas: MCPCategorySectionButtonsPastasSecas
    mCPCategorySectionButtonsProteccionFemenina: MCPCategorySectionButtonsProteccionFemenina
    mCPCategorySectionButtonsProteccionAdultos: MCPCategorySectionButtonsProteccionAdultos
    mCPCategorySectionButtonsQuesos: MCPCategorySectionButtonsQuesos
    mCPCategorySectionButtonsRepelentes: MCPCategorySectionButtonsRepelentes
    mCPCategorySectionButtonsReposteriaPostres: MCPCategorySectionButtonsReposteriaPostres
    mCPCategorySectionButtonsRollosCocinaServilletas: MCPCategorySectionButtonsRollosCocinaServilletas
    mCPCategorySectionButtonsSalAdereSaborizadores: MCPCategorySectionButtonsSalAdereSaborizadores
    mCPCategorySectionButtonsSeco: MCPCategorySectionButtonsSeco
    mCPCategorySectionButtonsSnacks: MCPCategorySectionButtonsSnacks
    mCPCategorySectionButtonsToallitasHumedas:MCPCategorySectionButtonsToallitasHumedas
    mCPCategorySectionButtonsVinos:MCPCategorySectionButtonsVinos
    mCPCategorySectionButtonsYerba: MCPCategorySectionButtonsYerba
    pedidosBotonMostrarMas: PedidosBotonMostrarMas

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
    mCPCategorySectionButtonsBebidas: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsBebidas(page, context, environment))
    },
    mCPCategorySectionButtonsBebidasBlancas: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsBebidasBlancas(page, context, environment))
    },
    mCPCategorySectionButtonsBebidasEnergizantes: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsBebidasEnergizantes(page, context, environment))
    },
    mCPCategorySectionButtonsBebidasIsotonicas: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsBebidasIsotonicas(page, context, environment))
    },
    mCPCategorySectionButtonsBudinesMagdalenas: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsBudinesMagdalenas(page, context, environment))
    },
    mCPCategorySectionButtonsCafe: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsCafe(page, context, environment))
    },
    mCPCategorySectionButtonsCaldosSopasPure: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsCaldosSopasPure(page, context, environment))
    },
    mCPCategorySectionButtonsCerealesBarritas: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsCerealesBarritas(page, context, environment))
    },
    mCPCategorySectionButtonsCervezas: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsCervezas(page, context, environment))
    },
    mCPCategorySectionButtonsCocinaComedor: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsCocinaComedor(page, context, environment))
    },
    mCPCategorySectionButtonsCremasLeche: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsCremasLeche(page, context, environment))
    },
    mCPCategorySectionButtonsCuidadoCorporal: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsCuidadoCorporal(page, context, environment))
    },
    mCPCategorySectionButtonsCuidadoPiel: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsCuidadoPiel(page, context, environment))
    },
    mCPCategorySectionButtonsCuidadoCabello: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsCuidadoCabello(page, context, environment))
    },
    mCPCategorySectionButtonsCuidadoDental: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsCuidadoDental(page, context, environment))
    },
    mCPCategorySectionButtonsDecoOrganizacion: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsDecoOrganizacion(page, context, environment))
    },
    mCPCategorySectionButtonsDesodorAmbiente: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsDesodorAmbiente(page, context, environment))
    },
    mCPCategorySectionButtonsDespuesBanio: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsDespuesBanio(page, context, environment))
    },
    mCPCategorySectionButtonsDulceLeche: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsDulceLeche(page, context, environment))
    },
    mCPCategorySectionButtonsEnlatadosConservas: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsEnlatadosConservas(page, context, environment))
    },
    mCPCategorySectionButtonsEspumantesSidras: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsEspumantesSidras(page, context, environment))
    },
    mCPCategorySectionButtonsFarmacia: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsFarmacia(page, context, environment))
    },
    mCPCategorySectionButtonsFernetAperitivos: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsFernetAperitivos(page, context, environment))
    },
    mCPCategorySectionButtonsFerreteriaPintura: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsFerreteriaPintura(page, context, environment))
    },
    mCPCategorySectionButtonsGalletBizcoTostadas: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsGalletBizcoTostadas(page, context, environment))
    },
    mCPCategorySectionButtonsGaseosas: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsGaseosas(page, context, environment))
    },
    mCPCategorySectionButtonsGolosinasChocolates: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsGolosinasChocolates(page, context, environment))
    },
    mCPCategorySectionButtonsHarinas: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsHarinas(page, context, environment))
    },
    mCPCategorySectionButtonsInfusiones: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsInfusiones(page, context, environment))
    },
    mCPCategorySectionButtonsInsecticidas: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsInsecticidas(page, context, environment))
    },
    mCPCategorySectionButtonsJabones: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsJabones(page, context, environment))
    },
    mCPCategorySectionButtonsJugos: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsJugos(page, context, environment))
    },
    mCPCategorySectionButtonsLavandinas: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsLavandinas(page, context, environment))
    },
    mCPCategorySectionButtonsLeches: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsLeches(page, context, environment))
    },
    mCPCategorySectionButtonsLechesPolLarVida: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsLechesPolLarVida(page, context, environment))
    },
    mCPCategorySectionButtonsLibreria: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsLibreria(page, context, environment))
    },
    mCPCategorySectionButtonsLimpiezaBanio: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsLimpiezaBanio(page, context, environment))
    },
    mCPCategorySectionButtonsLimpiezaCocina: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsLimpiezaCocina(page, context, environment))
    },
    mCPCategorySectionButtonsLimpiezaRopa: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsLimpiezaRopa(page, context, environment))
    },
    mCPCategorySectionButtonsLimpiezaPisosMuebles: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsLimpiezaPisosMuebles(page, context, environment))
    },
    mCPCategorySectionButtonsManteMargariLevaduras: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsManteMargariLevaduras(page, context, environment))
    },
    mCPCategorySectionButtonsMermeOtrosDulces: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsMermeOtrosDulces(page, context, environment))
    },
    mCPCategorySectionButtonsPAS: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsPAS(page, context, environment))
    },
    mCPCategorySectionButtonsPanRalladoRebozadores: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsPanRalladoRebozadores(page, context, environment))
    },
    mCPCategorySectionButtonsPaniales: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsPaniales(page, context, environment))
    },
    mCPCategorySectionButtonsPanificados: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsPanificados(page, context, environment))
    },
    mCPCategorySectionButtonsPapelesHigienicos: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsPapelesHigienicos(page, context, environment))
    },
    mCPCategorySectionButtonsParaBanio: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsParaBanio(page, context, environment))
    },
    mCPCategorySectionButtonsPastasSecas: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsPastasSecas(page, context, environment))
    },
    mCPCategorySectionButtonsProteccionFemenina: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsProteccionFemenina(page, context, environment))
    },
    mCPCategorySectionButtonsProteccionAdultos: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsProteccionAdultos(page, context, environment))
    },
    mCPCategorySectionButtonsQuesos: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsQuesos(page, context, environment))
    },
    mCPCategorySectionButtonsRepelentes: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsRepelentes(page, context, environment))
    },
    mCPCategorySectionButtonsReposteriaPostres: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsReposteriaPostres(page, context, environment))
    },
    mCPCategorySectionButtonsRollosCocinaServilletas: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsRollosCocinaServilletas(page, context, environment))
    },
    mCPCategorySectionButtonsSalAdereSaborizadores: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsSalAdereSaborizadores(page, context, environment))
    },
    mCPCategorySectionButtonsSeco: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsSeco(page, context, environment))
    },
    mCPCategorySectionButtonsSnacks: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsSnacks(page, context, environment))
    },
    mCPCategorySectionButtonsToallitasHumedas: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsToallitasHumedas(page, context, environment))
    },
    mCPCategorySectionButtonsVinos: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsVinos(page, context, environment))
    },
    mCPCategorySectionButtonsYerba: async ({ page, context }, use) => {
        await use(new MCPCategorySectionButtonsYerba(page, context, environment))
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
    pedidosBotonMostrarMas: async ({ page, context }, use) => {
        await use(new PedidosBotonMostrarMas(page, context, environment))
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
    menuNuevoPedidos: async ({ page, context }, use) => {
        await use(new MenuNuevoPedidos(page, context, environment))
    },



})

export default test
