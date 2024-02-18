import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../pageObjectModel/LoginPage/LoginPage'

const environment = process.env.TEST || 'qa'

const test = baseTest.extend<{
    loginPage: LoginPage

}>({
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context, environment))
    },



})

export default test
