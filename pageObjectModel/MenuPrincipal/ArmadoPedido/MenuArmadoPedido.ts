import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuArmadoPedido extends BasePage {

    readonly ARMADO_PEDIDO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ARMADO_PEDIDO = this.page.locator("(//div[@onclick=\"gotoPage('orders')\"])[1]")
    }

    async clickMenuArmadoPedido(): Promise<void> {
        await this.click(this.ARMADO_PEDIDO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuArmadoPedido(): Promise<void> {
        await this.clickMenuArmadoPedido()
    }
}
