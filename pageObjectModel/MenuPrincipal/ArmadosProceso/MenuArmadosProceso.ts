import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuArmadosProceso extends BasePage {

    readonly ARMADOS_PROCESO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ARMADOS_PROCESO = this.page.locator("(//div[@onclick=\"gotoPage('package')\"])[1]")
    }

    async clickMenuArmadosProceso(): Promise<void> {
        await this.click(this.ARMADOS_PROCESO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuArmadosProceso(): Promise<void> {
        await this.clickMenuArmadosProceso()
    }
}
