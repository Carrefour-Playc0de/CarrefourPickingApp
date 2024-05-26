import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../../config/configLoader'

export class MenuCrearPedidosSeccionSectionButtonsAlmacen extends BasePage {

    readonly BOTON: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON = this.page.locator("//*[@data-itemname='almacén']")
    }

    async clickCrearPedidosSeccionSectionButtonsAlmacen(): Promise<void> {
        await this.click(this.BOTON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuCrearPedidosSeccionSectionButtonsAlmacen(): Promise<void> {
        await this.clickCrearPedidosSeccionSectionButtonsAlmacen()
    }
}
