import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../config/configLoader'

export class MenuCrearPedidosSectionButtonsCategorias extends BasePage {

    readonly BOTON: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON = this.page.locator("//button[@data-value='category']")
    }

    async clickCrearPedidosSectionButtonsCategorias(): Promise<void> {
        await this.click(this.BOTON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuCrearPedidosSectionButtonsCategorias(): Promise<void> {
        await this.clickCrearPedidosSectionButtonsCategorias()
    }
}
