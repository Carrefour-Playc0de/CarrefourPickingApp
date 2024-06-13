import test from '../../../config/testManager'

test.beforeEach(async ({loginPage, activarGeolocalizacion, menuNuevoPedidos, menuCrearPedidosBotonEnvio, menuCrearPedidosBotonAceptar}) => {
    await test.step('Navegar en el sitio', async () => {
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

test('@zxcv @Regression @Pedido (B2B-TC-548) Verificar que el boton MOSTRAR MAS en Pedidos funciona correctamente y muestra todos productos', async ({pedidosBotonMostrarMas}) => {

    await test.step('Click en el botón MOSTRAR MAS hasta que quede inactivo', async () => {
        await pedidosBotonMostrarMas.clickPedidosBotonMostrarMas()
    })
})
