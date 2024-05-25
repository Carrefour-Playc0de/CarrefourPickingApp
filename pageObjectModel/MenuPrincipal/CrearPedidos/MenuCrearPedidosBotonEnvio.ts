import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuCrearPedidosBotonEnvio extends BasePage {

    readonly BOTON_ENVIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_ENVIO = this.page.locator("//label[@for='envio']//div[@class='plan-content']")
    }

    async clickCrearPedidosBotonEnvio(): Promise<void> {
        await this.click(this.BOTON_ENVIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuCrearPedidosBotonEnvio(): Promise<void> {
        await this.clickCrearPedidosBotonEnvio()
    }
}
