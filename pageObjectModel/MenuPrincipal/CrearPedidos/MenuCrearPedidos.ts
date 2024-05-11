import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuCrearPedidos extends BasePage {

    readonly CREAR_PEDIDOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CREAR_PEDIDOS = this.page.locator("(//div[@onclick=\"btnOpenModal('alertNewOrder')\"])[1]")
    }

    async clickMenuCrearPedidos(): Promise<void> {
        await this.click(this.CREAR_PEDIDOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuCrearPedidos(): Promise<void> {
        await this.clickMenuCrearPedidos()
    }
}
