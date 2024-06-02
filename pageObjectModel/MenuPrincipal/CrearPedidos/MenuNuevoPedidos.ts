import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuNuevoPedidos extends BasePage {

    readonly CREAR_PEDIDOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CREAR_PEDIDOS = this.page.locator("//button[normalize-space()='Nuevo Pedido']")
    }

    async clickNuevoPedidos(): Promise<void> {
        await this.click(this.CREAR_PEDIDOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuNuevoPedidos(): Promise<void> {
        await this.clickNuevoPedidos()
    }
}
