import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuConsultarPedidos extends BasePage {

    readonly CONSULTAR_PEDIDOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CONSULTAR_PEDIDOS = this.page.locator("((//div[@onclick=\"gotoPage('orderSearch')\"])[1]")
    }

    async clickMenuConsultarPedidos(): Promise<void> {
        await this.click(this.CONSULTAR_PEDIDOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuConsultarPedidos(): Promise<void> {
        await this.clickMenuConsultarPedidos()
    }
}
