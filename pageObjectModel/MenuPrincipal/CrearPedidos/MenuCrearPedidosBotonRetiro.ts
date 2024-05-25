import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuCrearPedidosBotonRetiro extends BasePage {

    readonly BOTON_RETIRO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_RETIRO = this.page.locator("//label[@for='retiro']//div[@class='plan-content']")
    }

    async clickCrearPedidosBotonRetiro(): Promise<void> {
        await this.click(this.BOTON_RETIRO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuCrearPedidosBotonRetiro(): Promise<void> {
        await this.clickCrearPedidosBotonRetiro()
    }
}
