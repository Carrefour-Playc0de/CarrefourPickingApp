import test from '../../../config/testManager'

test.beforeEach(async ({loginPage, activarGeolocalizacion}) => {
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
})

test('@xyz @Smoke @Regression (B2B-TC-438) Verificar que al clickear el boton Estadisticas funciona correctamente', async ({menuEstadisticas}) => {

    await test.step('Click en Estadisticas', async () => {
        await menuEstadisticas.clickMenuEstadisticas();
    })
})