import test from '../../../../../config/testManager'

test.beforeEach(async ({loginPage, activarGeolocalizacion, menuNuevoPedidos, menuCrearPedidosBotonEnvio, menuCrearPedidosBotonAceptar, menuCrearPedidosSectionButtonsOfertas}) => {
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
    await test.step('Click en Nuevo Pedido', async () => {
        await menuNuevoPedidos.clickNuevoPedidos();
    })
    await test.step('Click en el boton Envio', async () => {
        await menuCrearPedidosBotonEnvio.clickCrearPedidosBotonEnvio();
    })
    await test.step('Click en el boton Aceptar', async () => {
        await menuCrearPedidosBotonAceptar.clickCrearPedidosBotonAceptar()
    })
    await test.step('Click en el boton Ofertas', async () => {
        await menuCrearPedidosSectionButtonsOfertas.clickCrearPedidosSectionButtonsOfertas()
    })
})

test('@Regression @Pedido (B2B-TC-448) Verificar que en Crear Pedidos en Ofertas el boton Ahorrador funciona correctamente', async ({menuCrearPedidosOfertasSectionButtonsAhorrador}) => {
    await test.step('Click en el boton Ahorrador', async () => {
        await menuCrearPedidosOfertasSectionButtonsAhorrador.clickCrearPedidosOfertasSectionButtonsAhorrador()
    })
})
test('@Regression @Pedido (B2B-TC-449) Verificar que en Crear Pedidos en Ofertas el boton Especiales Del Dia funciona correctamente', async ({menuCrearPedidosOfertasSectionButtonsEspecialesDia}) => {
    await test.step('Click en el boton Especiales Del Dia', async () => {
        await menuCrearPedidosOfertasSectionButtonsEspecialesDia.clickCrearPedidosOfertasSectionButtonsEspecialesDia()
    })
})
test('@Regression @Pedido (B2B-TC-450) Verificar que en Crear Pedidos en Ofertas el boton Folleto Maxi funciona correctamente', async ({menuCrearPedidosOfertasSectionButtonsFolletoMaxi}) => {
    await test.step('Click en el boton Folleto Maxi', async () => {
        await menuCrearPedidosOfertasSectionButtonsFolletoMaxi.clickCrearPedidosOfertasSectionButtonsFolletoMaxi()
    })
})
test('@Regression @Pedido (B2B-TC-451) Verificar que en Crear Pedidos en Ofertas el boton Oferta Por Bulto funciona correctamente', async ({menuCrearPedidosOfertasSectionButtonsOfertaPorBulto}) => {
    await test.step('Click en el boton Oferta Por Bulto', async () => {
        await menuCrearPedidosOfertasSectionButtonsOfertaPorBulto.clickCrearPedidosOfertasSectionButtonsOfertaPorBulto()
    })
})
