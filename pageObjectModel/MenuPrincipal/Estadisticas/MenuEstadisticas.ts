import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuEstadisticas extends BasePage {

    readonly ESTADISTICAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ESTADISTICAS = this.page.locator("((//div[@onclick=\"gotoPage('productsList')\"])[1]")
    }

    async clickMenuEstadisticas(): Promise<void> {
        await this.click(this.ESTADISTICAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuEstadisticas(): Promise<void> {
        await this.clickMenuEstadisticas()
    }
}
