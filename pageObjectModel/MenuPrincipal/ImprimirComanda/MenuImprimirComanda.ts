import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuImprimirComanda extends BasePage {

    readonly IMPRIMIR_COMANDA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.IMPRIMIR_COMANDA = this.page.locator("((//div[@onclick=\"gotoPage('print')\"])[1]")
    }

    async clickMenuImprimirComanda(): Promise<void> {
        await this.click(this.IMPRIMIR_COMANDA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuImprimirComanda(): Promise<void> {
        await this.clickMenuImprimirComanda()
    }
}
