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

test('@Smoke @Regression (B2B-TC-436) Verificar que al clickear el boton Agregar Producto Previo al Pickeo funciona correctamente', async ({menuAgregarProductoPrevioPickeo}) => {

    await test.step('Click en Agregar Producto Previo al Pickeo', async () => {
        await menuAgregarProductoPrevioPickeo.clickMenuAgregarProductoPrevioPickeo();
    })
})
