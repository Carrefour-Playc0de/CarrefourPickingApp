import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuExportraSurtido extends BasePage {

    readonly EXPORTAR_SURTIDO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.EXPORTAR_SURTIDO = this.page.locator("((//div[@onclick=\"gotoPage('productsList')\"])[1]")
    }

    async clickMenuExportarSurtido(): Promise<void> {
        await this.click(this.EXPORTAR_SURTIDO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuExportarSurtido(): Promise<void> {
        await this.clickMenuExportarSurtido()
    }
}
