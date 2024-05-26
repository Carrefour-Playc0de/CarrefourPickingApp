import test from '../../../../../config/testManager'
import {
    MCPCategorySectionButtonsAutomotor
} from '../../../../../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsAutomotor'
import {
    MCPCategorySectionButtonsAceitesVinagres
} from '../../../../../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsAceitesVinagres'
import {
    MCPCategorySectionButtonsAguas
} from '../../../../../pageObjectModel/MenuPrincipal/CrearPedidos/SectionButtons/Categorias/SectionButtons/MCPCategorySectionButtonsAguas'

test.beforeEach(async ({loginPage, activarGeolocalizacion, menuCrearPedidos, menuCrearPedidosBotonEnvio, menuCrearPedidosBotonAceptar, menuCrearPedidosSectionButtonsCategorias}) => {
    await test.step(`Navegar en el sitio`, async () => {
        await loginPage.navigateToLoginPage()
    })
    await test.step('Ingreso de credenciales validas', async () => {
        await loginPage.fillCredentials()
    })
    await test.step('Click en el boton Ingresar', async () => {
        await loginPage.endLoginProcess()
    })
    await test.step('Click en el boton de VERIFICAR', async () => {
        await activarGeolocalizacion.clickBotonActivarGeolocalizacion()
    })
    await test.step('Click en Crear Pedidos', async () => {
        await menuCrearPedidos.clickMenuCrearPedidos();
    })
    await test.step('Click en el boton Envio', async () => {
        await menuCrearPedidosBotonEnvio.clickCrearPedidosBotonEnvio();
    })
    await test.step('Click en el boton Aceptar', async () => {
        await menuCrearPedidosBotonAceptar.clickCrearPedidosBotonAceptar()
    })
    await test.step('Click en el boton Categorias', async () => {
        await menuCrearPedidosSectionButtonsCategorias.clickCrearPedidosSectionButtonsCategorias()
    })
})

test('@Regression @Pedido (B2B-TC-462) Verificar que en Crear Pedidos en Categoria el boton Aceites y Vinagres funciona correctamente', async ({mCPCategorySectionButtonsAceitesVinagres}) => {
    await test.step('Click en el boton Aceites y Vinagres', async () => {
        await mCPCategorySectionButtonsAceitesVinagres.clickMCPCategorySectionButtonsAceitesVinagres()
    })
})
test('@Regression @Pedido (B2B-TC-463) Verificar que en Crear Pedidos en Categoria el boton Aguas funciona correctamente', async ({mCPCategorySectionButtonsAguas}) => {
    await test.step('Click en el boton Aguas', async () => {
        await mCPCategorySectionButtonsAguas.clickMCPCategorySectionButtonsAguas()
    })
})
test('@Regression @Pedido (B2B-TC-464) Verificar que en Crear Pedidos en Categoria el boton Algodones e Hisopos funciona correctamente', async ({mCPCategorySectionButtonsAlgodonesHisopos}) => {
    await test.step('Click en el boton Algodones e Hisopos', async () => {
        await mCPCategorySectionButtonsAlgodonesHisopos.clickMCPCategorySectionButtonsAlgodonesHisopos()
    })
})
test('@Regression @Pedido (B2B-TC-465) Verificar que en Crear Pedidos en Categoria el boton Alimento para Bebe funciona correctamente', async ({mCPCategorySectionButtonsAlimentoBebe}) => {
    await test.step('Click en el boton Alimento para Bebe', async () => {
        await mCPCategorySectionButtonsAlimentoBebe.clickMCPCategorySectionButtonsAlimentoBebe()
    })
})
test('@Regression @Pedido (B2B-TC-466) Verificar que en Crear Pedidos en Categoria el boton Antitranspirantes y Desodorantes funciona correctamente', async ({mCPCategorySectionButtonsAntitransDesodorantes}) => {
    await test.step('Click en el boton Antitranspirantes y Desodorantes', async () => {
        await mCPCategorySectionButtonsAntitransDesodorantes.clickMCPCategorySectionButtonsAntitransDesodorantes()
    })
})
test('@Regression @Pedido (B2B-TC-467) Verificar que en Crear Pedidos en Categoria el boton Arroz y Legumbres funciona correctamente', async ({mCPCategorySectionButtonsArrozLegumbres}) => {
    await test.step('Click en el boton Arroz y Legumbres', async () => {
        await mCPCategorySectionButtonsArrozLegumbres.clickMCPCategorySectionButtonsArrozLegumbres()
    })
})
test('@Regression @Pedido (B2B-TC-469) Verificar que en Crear Pedidos en Categoria el boton Articulos de Limpieza funciona correctamente', async ({mCPCategorySectionButtonsArticulosLimpieza}) => {
    await test.step('Click en el boton Articulos de Limpieza', async () => {
        await mCPCategorySectionButtonsArticulosLimpieza.clickMCPCategorySectionButtonsArticulosLimpieza()
    })
})
test('@Regression @Pedido (B2B-TC-470) Verificar que en Crear Pedidos en Categoria el boton Automotor funciona correctamente', async ({mCPCategorySectionButtonsAutomotor}) => {
    await test.step('Click en el boton Automotor', async () => {
        await mCPCategorySectionButtonsAutomotor.clickMCPCategorySectionButtonsAutomotor()
    })
})
test('@Regression @Pedido (B2B-TC-468) Verificar que en Crear Pedidos en Categoria el boton Azucar y Endulzantes funciona correctamente', async ({mCPCategorySectionButtonsAzucarEndulzantes}) => {
    await test.step('Click en el boton Azucar y Endulzantes', async () => {
        await mCPCategorySectionButtonsAzucarEndulzantes.clickMCPCategorySectionButtonsAzucarEndulzantes()
    })
})
test('@Regression @Pedido (B2B-TC-478) Verificar que en Crear Pedidos en Categoria el boton Bebidas funciona correctamente', async ({mCPCategorySectionButtonsBebidas}) => {
    await test.step('Click en el boton Bebidas', async () => {
        await mCPCategorySectionButtonsBebidas.clickMCPCategorySectionButtonsBebidas()
    })
})
test('@Regression @Pedido (B2B-TC-479) Verificar que en Crear Pedidos en Categoria el boton Bebidas Blancas funciona correctamente', async ({mCPCategorySectionButtonsBebidasBlancas}) => {
    await test.step('Click en el boton Bebidas Blancas', async () => {
        await mCPCategorySectionButtonsBebidasBlancas.clickMCPCategorySectionButtonsBebidasBlancas()
    })
})
test('@Regression @Pedido (B2B-TC-480) Verificar que en Crear Pedidos en Categoria el boton Bebidas Energizantes funciona correctamente', async ({mCPCategorySectionButtonsBebidasEnergizantes}) => {
    await test.step('Click en el boton Bebidas Energizantes', async () => {
        await mCPCategorySectionButtonsBebidasEnergizantes.clickMCPCategorySectionButtonsBebidasEnergizantes()
    })
})
test('@Regression @Pedido (B2B-TC-481) Verificar que en Crear Pedidos en Categoria el boton Bebidas Isotonicas funciona correctamente', async ({mCPCategorySectionButtonsBebidasIsotonicas}) => {
    await test.step('Click en el boton Bebidas Isotonicas', async () => {
        await mCPCategorySectionButtonsBebidasIsotonicas.clickMCPCategorySectionButtonsBebidasIsotonicas()
    })
})
test('@Regression @Pedido (B2B-TC-482) Verificar que en Crear Pedidos en Categoria el boton Budines y Magdalenas funciona correctamente', async ({mCPCategorySectionButtonsBudinesMagdalenas}) => {
    await test.step('Click en el boton Budines y Magdalenas', async () => {
        await mCPCategorySectionButtonsBudinesMagdalenas.clickMCPCategorySectionButtonsBudinesMagdalenas()
    })
})
test('@Regression @Pedido (B2B-TC-483) Verificar que en Crear Pedidos en Categoria el boton Cafe funciona correctamente', async ({mCPCategorySectionButtonsCafe}) => {
    await test.step('Click en el boton Cafe', async () => {
        await mCPCategorySectionButtonsCafe.clickMCPCategorySectionButtonsCafe()
    })
})
test('@Regression @Pedido (B2B-TC-484) Verificar que en Crear Pedidos en Categoria el boton Caldos Sopas y Pure funciona correctamente', async ({mCPCategorySectionButtonsCaldosSopasPure}) => {
    await test.step('Click en el boton Caldos Sopas y Pure', async () => {
        await mCPCategorySectionButtonsCaldosSopasPure.clickMCPCategorySectionButtonsCaldosSopasPure()
    })
})
test('@Regression @Pedido (B2B-TC-485) Verificar que en Crear Pedidos en Categoria el boton Cereales y Barritas funciona correctamente', async ({mCPCategorySectionButtonsCerealesBarritas}) => {
    await test.step('Click en el boton Cereales y Barritas', async () => {
        await mCPCategorySectionButtonsCerealesBarritas.clickMCPCategorySectionButtonsCerealesBarritas()
    })
})
test('@Regression @Pedido (B2B-TC-486) Verificar que en Crear Pedidos en Categoria el boton Cervezas funciona correctamente', async ({mCPCategorySectionButtonsCervezas}) => {
    await test.step('Click en el boton Cervezas', async () => {
        await mCPCategorySectionButtonsCervezas.clickMCPCategorySectionButtonsCervezas()
    })
})
test('@Regression @Pedido (B2B-TC-487) Verificar que en Crear Pedidos en Categoria el boton Cocina y Comedor funciona correctamente', async ({mCPCategorySectionButtonsCocinaComedor}) => {
    await test.step('Click en el boton Cocina y Comedor', async () => {
        await mCPCategorySectionButtonsCocinaComedor.clickMCPCategorySectionButtonsCocinaComedor()
    })
})
test('@Regression @Pedido (B2B-TC-488) Verificar que en Crear Pedidos en Categoria el boton Cremas de Leche funciona correctamente', async ({mCPCategorySectionButtonsCremasLeche}) => {
    await test.step('Click en el boton Cremas de Leche', async () => {
        await mCPCategorySectionButtonsCremasLeche.clickMCPCategorySectionButtonsCremasLeche()
    })
})
test('@Regression @Pedido (B2B-TC-489) Verificar que en Crear Pedidos en Categoria el boton Cuidado Corporal funciona correctamente', async ({mCPCategorySectionButtonsCuidadoCorporal}) => {
    await test.step('Click en el boton Cuidado Corporal', async () => {
        await mCPCategorySectionButtonsCuidadoCorporal.clickMCPCategorySectionButtonsCuidadoCorporal()
    })
})
test('@Regression @Pedido (B2B-TC-490) Verificar que en Crear Pedidos en Categoria el boton Cuidado de la Piel funciona correctamente', async ({mCPCategorySectionButtonsCuidadoPiel}) => {
    await test.step('Click en el boton Cuidado de la Piel', async () => {
        await mCPCategorySectionButtonsCuidadoPiel.clickMCPCategorySectionButtonsCuidadoPiel()
    })
})
test('@Regression @Pedido (B2B-TC-491) Verificar que en Crear Pedidos en Categoria el boton Cuidado de Cabello funciona correctamente', async ({mCPCategorySectionButtonsCuidadoCabello}) => {
    await test.step('Click en el boton Cuidado de Cabello', async () => {
        await mCPCategorySectionButtonsCuidadoCabello.clickMCPCategorySectionButtonsCuidadoCabello()
    })
})
test('@Regression @Pedido (B2B-TC-492) Verificar que en Crear Pedidos en Categoria el boton Cuidado Dental funciona correctamente', async ({mCPCategorySectionButtonsCuidadoDental}) => {
    await test.step('Click en el boton Cuidado Dental', async () => {
        await mCPCategorySectionButtonsCuidadoDental.clickMCPCategorySectionButtonsCuidadoDental()
    })
})
test('@Regression @Pedido (B2B-TC-493) Verificar que en Crear Pedidos en Categoria el boton Deco y Organizacion funciona correctamente', async ({mCPCategorySectionButtonsDecoOrganizacion}) => {
    await test.step('Click en el boton Deco y Organizacion', async () => {
        await mCPCategorySectionButtonsDecoOrganizacion.clickMCPCategorySectionButtonsDecoOrganizacion()
    })
})
test('@Regression @Pedido (B2B-TC-494) Verificar que en Crear Pedidos en Categoria el boton Desodorantes de Ambiente funciona correctamente', async ({mCPCategorySectionButtonsDesodorAmbiente}) => {
    await test.step('Click en el boton Desodorantes de Ambiente', async () => {
        await mCPCategorySectionButtonsDesodorAmbiente.clickMCPCategorySectionButtonsDesodorAmbiente()
    })
})
test('@Regression @Pedido (B2B-TC-495) Verificar que en Crear Pedidos en Categoria el boton Despues del Banio funciona correctamente', async ({mCPCategorySectionButtonsDespuesBanio}) => {
    await test.step('Click en el boton Despues del Banio', async () => {
        await mCPCategorySectionButtonsDespuesBanio.clickMCPCategorySectionButtonsDespuesBanio()
    })
})
test('@Regression @Pedido (B2B-TC-496) Verificar que en Crear Pedidos en Categoria el boton Dulce de Leche funciona correctamente', async ({mCPCategorySectionButtonsDulceLeche}) => {
    await test.step('Click en el boton Dulce de Leche', async () => {
        await mCPCategorySectionButtonsDulceLeche.clickMCPCategorySectionButtonsDulceLeche()
    })
})
test('@Regression @Pedido (B2B-TC-497) Verificar que en Crear Pedidos en Categoria el boton Enlatados y Conservas funciona correctamente', async ({mCPCategorySectionButtonsEnlatadosConservas}) => {
    await test.step('Click en el boton Enlatados y Conservas', async () => {
        await mCPCategorySectionButtonsEnlatadosConservas.clickMCPCategorySectionButtonsEnlatadosConservas()
    })
})
test('@Regression @Pedido (B2B-TC-498) Verificar que en Crear Pedidos en Categoria el boton Espumantes y Sidras funciona correctamente', async ({mCPCategorySectionButtonsEspumantesSidras}) => {
    await test.step('Click en el boton Espumantes y Sidras', async () => {
        await mCPCategorySectionButtonsEspumantesSidras.clickMCPCategorySectionButtonsEspumantesSidras()
    })
})
test('@Regression @Pedido (B2B-TC-499) Verificar que en Crear Pedidos en Categoria el boton Farmacia funciona correctamente', async ({mCPCategorySectionButtonsFarmacia}) => {
    await test.step('Click en el boton Farmacia', async () => {
        await mCPCategorySectionButtonsFarmacia.clickMCPCategorySectionButtonsFarmacia()
    })
})
test('@Regression @Pedido (B2B-TC-500) Verificar que en Crear Pedidos en Categoria el boton Fernet y Aperitivos funciona correctamente', async ({mCPCategorySectionButtonsFernetAperitivos}) => {
    await test.step('Click en el boton Fernet y Aperitivos', async () => {
        await mCPCategorySectionButtonsFernetAperitivos.clickMCPCategorySectionButtonsFernetAperitivos()
    })
})
test('@Regression @Pedido (B2B-TC-501) Verificar que en Crear Pedidos en Categoria el boton Ferreteria y Pintura funciona correctamente', async ({mCPCategorySectionButtonsFerreteriaPintura}) => {
    await test.step('Click en el boton Ferreteria y Pintura', async () => {
        await mCPCategorySectionButtonsFerreteriaPintura.clickMCPCategorySectionButtonsFerreteriaPintura()
    })
})
test('@Regression @Pedido (B2B-TC-502) Verificar que en Crear Pedidos en Categoria el boton Galletitas Bizcochitos y Tostadas funciona correctamente', async ({mCPCategorySectionButtonsGalletBizcoTostadas}) => {
    await test.step('Click en el boton Galletitas Bizcochitos y Tostadas', async () => {
        await mCPCategorySectionButtonsGalletBizcoTostadas.clickMCPCategorySectionButtonsGalletBizcoTostadas()
    })
})
test('@Regression @Pedido (B2B-TC-503) Verificar que en Crear Pedidos en Categoria el boton Gaseosas funciona correctamente', async ({mCPCategorySectionButtonsGaseosas}) => {
    await test.step('Click en el boton Gaseosas', async () => {
        await mCPCategorySectionButtonsGaseosas.clickMCPCategorySectionButtonsGaseosas()
    })
})
test('@Regression @Pedido (B2B-TC-504) Verificar que en Crear Pedidos en Categoria el boton Golosinas y Chocolates funciona correctamente', async ({mCPCategorySectionButtonsGolosinasChocolates}) => {
    await test.step('Click en el boton Golosinas y Chocolates', async () => {
        await mCPCategorySectionButtonsGolosinasChocolates.clickMCPCategorySectionButtonsGolosinasChocolates()
    })
})
test('@Regression @Pedido (B2B-TC-505) Verificar que en Crear Pedidos en Categoria el boton Harinas funciona correctamente', async ({mCPCategorySectionButtonsHarinas}) => {
    await test.step('Click en el boton Harinas', async () => {
        await mCPCategorySectionButtonsHarinas.clickMCPCategorySectionButtonsHarinas()
    })
})
test('@Regression @Pedido (B2B-TC-506) Verificar que en Crear Pedidos en Categoria el boton Infusiones funciona correctamente', async ({mCPCategorySectionButtonsInfusiones}) => {
    await test.step('Click en el boton Infusiones', async () => {
        await mCPCategorySectionButtonsInfusiones.clickMCPCategorySectionButtonsInfusiones()
    })
})
test('@Regression @Pedido (B2B-TC-507) Verificar que en Crear Pedidos en Categoria el boton Insecticidas funciona correctamente', async ({mCPCategorySectionButtonsInsecticidas}) => {
    await test.step('Click en el boton Insecticidas', async () => {
        await mCPCategorySectionButtonsInsecticidas.clickMCPCategorySectionButtonsInsecticidas()
    })
})
test('@Regression @Pedido (B2B-TC-508) Verificar que en Crear Pedidos en Categoria el boton Jabones funciona correctamente', async ({mCPCategorySectionButtonsJabones}) => {
    await test.step('Click en el boton Jabones', async () => {
        await mCPCategorySectionButtonsJabones.clickMCPCategorySectionButtonsJabones()
    })
})
test('@Regression @Pedido (B2B-TC-509) Verificar que en Crear Pedidos en Categoria el boton Jugos funciona correctamente', async ({mCPCategorySectionButtonsJugos}) => {
    await test.step('Click en el boton Jugos', async () => {
        await mCPCategorySectionButtonsJugos.clickMCPCategorySectionButtonsJugos()
    })
})



















