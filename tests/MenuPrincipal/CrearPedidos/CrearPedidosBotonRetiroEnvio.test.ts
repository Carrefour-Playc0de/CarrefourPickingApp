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

test('@xyz @Regression @Pedido (B2B-TC-440) Verificar que al clickear el boton Retiro funciona correctamente', async ({menuCrearPedidosBotonRetiro}) => {

    await test.step('Click en el boton Retiro', async () => {
        await menuCrearPedidosBotonRetiro.clickCrearPedidosBotonRetiro();
    })
})
test('@xyz @Regression @Pedido (B2B-TC-441) Verificar que al clickear el boton Envio funciona correctamente', async ({menuCrearPedidosBotonEnvio}) => {

    await test.step('Click em el boton Envio', async () => {
        await menuCrearPedidosBotonEnvio.clickCrearPedidosBotonEnvio();
    })
})

