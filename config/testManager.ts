import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../pageObjectModel/LoginPage/LoginPage'
import { MenuArmadoPedido } from '../pageObjectModel/MenuPrincipal/ArmadoPedido/MenuArmadoPedido'

const environment = process.env.TEST || 'qa'

const test = baseTest.extend<{
    loginPage: LoginPage
    menuArmadoPedido: MenuArmadoPedido

}>({
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context, environment))
    },

    menuArmadoPedido: async ({ page, context }, use) => {
        await use(new MenuArmadoPedido(page, context, environment))
    },



})

export default test
