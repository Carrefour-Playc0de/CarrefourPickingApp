import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuCrearPedidosBotonAceptar extends BasePage {

    readonly BOTON_ACEPTAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_ACEPTAR = this.page.locator("//button[normalize-space()='Aceptar']")
    }

    async clickCrearPedidosBotonAceptar(): Promise<void> {
        await this.click(this.BOTON_ACEPTAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuCrearPedidosBotonAceptar(): Promise<void> {
        await this.clickCrearPedidosBotonAceptar()
    }
}
