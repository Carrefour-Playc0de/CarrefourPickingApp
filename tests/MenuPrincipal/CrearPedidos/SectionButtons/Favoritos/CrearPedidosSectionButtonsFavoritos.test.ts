import test from '../../../../../config/testManager'

test.beforeEach(async ({loginPage, activarGeolocalizacion, menuNuevoPedidos, menuCrearPedidosBotonEnvio, menuCrearPedidosBotonAceptar}) => {
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
})

test('@Regression @Pedido (B2B-TC-445) Verificar que en la seccion botones Crear Pedidos el boton Favoritos funciona correctamente', async ({menuCrearPedidosSectionButtonsFavoritos}) => {
    await test.step('Click en el boton Favoritos', async () => {
        await menuCrearPedidosSectionButtonsFavoritos.clickCrearPedidosSectionButtonsFavoritos()
    })
})