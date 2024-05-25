import test from '../../../config/testManager'

test.beforeEach(async ({loginPage, activarGeolocalizacion, menuCrearPedidos}) => {
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
})

test('@Regression @Pedido (B2B-TC-79) Verificar que funcione correctamente el boton Cancelar del modal Tipo de entrega de pedido Envio', async ({menuCrearPedidosBotonEnvio}) => {

    await test.step('Click en el boton Envio', async () => {
        await menuCrearPedidosBotonEnvio.clickCrearPedidosBotonEnvio();
    })
})

test.afterEach(async ({ menuCrearPedidosBotonCancelar }) => {
    await test.step('Click en el boton Cancelar', async () => {
        await menuCrearPedidosBotonCancelar.clickCrearPedidosBotonCancelar()
    })
})
