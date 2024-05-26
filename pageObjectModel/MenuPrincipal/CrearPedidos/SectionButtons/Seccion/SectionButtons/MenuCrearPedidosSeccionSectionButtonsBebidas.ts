import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../../config/configLoader'

export class MenuCrearPedidosSeccionSectionButtonsBebidas extends BasePage {

    readonly BOTON: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON = this.page.locator("//div[@class='categorySlider__item' and @data-items='section' and @data-itemname='bebidas']")
    }

    async clickCrearPedidosSeccionSectionButtonsBebidas(): Promise<void> {
        await this.click(this.BOTON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuCrearPedidosSeccionSectionButtonsBebidas(): Promise<void> {
        await this.clickCrearPedidosSeccionSectionButtonsBebidas()
    }
}
