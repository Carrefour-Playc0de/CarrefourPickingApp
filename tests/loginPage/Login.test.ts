import test from '../../config/testManager'

test('@Smoke (B2B-TC-) Verificar que se puede loguear de forma exitosa con credenciales validas', async ({ loginPage }) => {
    await test.step(`Navegar en el sitio`, async () => {
        await loginPage.navigateToLoginPage()
    })
    await test.step('Ingreso de credenciales validas', async () => {
        await loginPage.fillCredentials()
    })
    await test.step('Click en el boton Ingresar', async () => {
        await loginPage.endLoginProcess()
    })
})
