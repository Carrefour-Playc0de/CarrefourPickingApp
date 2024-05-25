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

test('@xyz @Regression @Pedido (B2B-TC-462) Verificar que en Crear Pedidos en Categoria el boton Aceites y Vinagres funciona correctamente', async ({mCPCategorySectionButtonsAceitesVinagres}) => {
    await test.step('Click en el boton Aceites y Vinagres', async () => {
        await mCPCategorySectionButtonsAceitesVinagres.clickMCPCategorySectionButtonsAceitesVinagres()
    })
})
test('@xyz @Regression @Pedido (B2B-TC-463) Verificar que en Crear Pedidos en Categoria el boton Aguas funciona correctamente', async ({mCPCategorySectionButtonsAguas}) => {
    await test.step('Click en el boton Aguas', async () => {
        await mCPCategorySectionButtonsAguas.clickMCPCategorySectionButtonsAguas()
    })
})
test('@xyz @Regression @Pedido (B2B-TC-464) Verificar que en Crear Pedidos en Categoria el boton Algodones e Hisopos funciona correctamente', async ({mCPCategorySectionButtonsAlgodonesHisopos}) => {
    await test.step('Click en el boton Algodones e Hisopos', async () => {
        await mCPCategorySectionButtonsAlgodonesHisopos.clickMCPCategorySectionButtonsAlgodonesHisopos()
    })
})
test('@xyz @Regression @Pedido (B2B-TC-465) Verificar que en Crear Pedidos en Categoria el boton Alimento para Bebe funciona correctamente', async ({mCPCategorySectionButtonsAlimentoBebe}) => {
    await test.step('Click en el boton Alimento para Bebe', async () => {
        await mCPCategorySectionButtonsAlimentoBebe.clickMCPCategorySectionButtonsAlimentoBebe()
    })
})
test('@xyz @Regression @Pedido (B2B-TC-466) Verificar que en Crear Pedidos en Categoria el boton Antitranspirantes y Desodorantes funciona correctamente', async ({mCPCategorySectionButtonsAntitransDesodorantes}) => {
    await test.step('Click en el boton Antitranspirantes y Desodorantes', async () => {
        await mCPCategorySectionButtonsAntitransDesodorantes.clickMCPCategorySectionButtonsAntitransDesodorantes()
    })
})
test('@xyz @Regression @Pedido (B2B-TC-467) Verificar que en Crear Pedidos en Categoria el boton Arroz y Legumbres funciona correctamente', async ({mCPCategorySectionButtonsArrozLegumbres}) => {
    await test.step('Click en el boton Arroz y Legumbres', async () => {
        await mCPCategorySectionButtonsArrozLegumbres.clickMCPCategorySectionButtonsArrozLegumbres()
    })
})
test('@xyz @Regression @Pedido (B2B-TC-469) Verificar que en Crear Pedidos en Categoria el boton Articulos de Limpieza funciona correctamente', async ({mCPCategorySectionButtonsArticulosLimpieza}) => {
    await test.step('Click en el boton Articulos de Limpieza', async () => {
        await mCPCategorySectionButtonsArticulosLimpieza.clickMCPCategorySectionButtonsArticulosLimpieza()
    })
})
test('@xyz @Regression @Pedido (B2B-TC-470) Verificar que en Crear Pedidos en Categoria el boton Automotor funciona correctamente', async ({mCPCategorySectionButtonsAutomotor}) => {
    await test.step('Click en el boton Automotor', async () => {
        await mCPCategorySectionButtonsAutomotor.clickMCPCategorySectionButtonsAutomotor()
    })
})
test('@xyz @Regression @Pedido (B2B-TC-468) Verificar que en Crear Pedidos en Categoria el boton Azucar y Endulzantes funciona correctamente', async ({mCPCategorySectionButtonsAzucarEndulzantes}) => {
    await test.step('Click en el boton Azucar y Endulzantes', async () => {
        await mCPCategorySectionButtonsAzucarEndulzantes.clickMCPCategorySectionButtonsAzucarEndulzantes()
    })
})
























