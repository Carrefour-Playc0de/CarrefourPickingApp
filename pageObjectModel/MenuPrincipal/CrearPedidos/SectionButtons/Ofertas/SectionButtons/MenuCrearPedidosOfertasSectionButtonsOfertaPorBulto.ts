import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../../config/configLoader'

export class MenuCrearPedidosOfertasSectionButtonsOfertaPorBulto extends BasePage {

    readonly BOTON: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON = this.page.locator("//*[@data-itemname='oferta por bulto']")
    }

    async clickCrearPedidosOfertasSectionButtonsOfertaPorBulto(): Promise<void> {
        await this.click(this.BOTON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuCrearPedidosOfertasSectionButtonsOfertaPorBulto(): Promise<void> {
        await this.clickCrearPedidosOfertasSectionButtonsOfertaPorBulto()
    }
}
