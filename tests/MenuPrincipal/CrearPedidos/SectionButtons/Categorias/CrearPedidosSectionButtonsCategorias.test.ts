import test from '../../../../../config/testManager'

test.beforeEach(async ({loginPage, activarGeolocalizacion, menuCrearPedidos, menuCrearPedidosBotonEnvio, menuCrearPedidosBotonAceptar}) => {
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
})

test('@xyz @Regression @Pedido (B2B-TC-447) Verificar que en la seccion botones Crear Pedidos el boton Categorias funciona correctamente', async ({menuCrearPedidosSectionButtonsCategorias}) => {
    await test.step('Click en el boton Categorias', async () => {
        await menuCrearPedidosSectionButtonsCategorias.clickCrearPedidosSectionButtonsCategorias()
    })
})