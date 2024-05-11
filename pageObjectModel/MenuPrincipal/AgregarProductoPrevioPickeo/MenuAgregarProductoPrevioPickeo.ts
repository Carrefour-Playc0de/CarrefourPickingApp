import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuAgregarProductoPrevioPickeo extends BasePage {

    readonly PRODUCTO_PREVIO_PICKEO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PRODUCTO_PREVIO_PICKEO = this.page.locator("(//div[@onclick=\"gotoPage('newProduct')\"])[1]")
    }

    async clickMenuAgregarProductoPrevioPickeo(): Promise<void> {
        await this.click(this.PRODUCTO_PREVIO_PICKEO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuAgregarProductoPrevioPickeo(): Promise<void> {
        await this.clickMenuAgregarProductoPrevioPickeo()
    }
}
