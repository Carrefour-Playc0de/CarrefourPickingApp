import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuPedidosProceso extends BasePage {

    readonly PEDIDOS_PROCESO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PEDIDOS_PROCESO = this.page.locator("((//div[@onclick=\"gotoPage('orderInProcess')\"])[1]")
    }

    async clickMenuPedidosProceso(): Promise<void> {
        await this.click(this.PEDIDOS_PROCESO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuPedidosProceso(): Promise<void> {
        await this.clickMenuPedidosProceso()
    }
}
