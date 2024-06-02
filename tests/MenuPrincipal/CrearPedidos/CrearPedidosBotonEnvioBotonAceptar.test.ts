import test from '../../../config/testManager'

test.beforeEach(async ({loginPage, activarGeolocalizacion, menuNuevoPedidos}) => {
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
})

test('@Regression @Pedido (B2B-TC-80) Verificar que funcione correctamente el boton Aceptar del modal Tipo de entrega de pedido Envio', async ({menuCrearPedidosBotonEnvio}) => {

    await test.step('Click en el boton Envio', async () => {
        await menuCrearPedidosBotonEnvio.clickCrearPedidosBotonEnvio();
    })
})

test.afterEach(async ({ menuCrearPedidosBotonAceptar }) => {
    await test.step('Click en el boton Aceptar', async () => {
        await menuCrearPedidosBotonAceptar.clickCrearPedidosBotonAceptar()
    })
})
