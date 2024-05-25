import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuCrearPedidosBotonCancelar extends BasePage {

    readonly BOTON_CANCELAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_CANCELAR = this.page.locator("//button[normalize-space()='Aceptar']")
    }

    async clickCrearPedidosBotonCancelar(): Promise<void> {
        await this.click(this.BOTON_CANCELAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuCrearPedidosBotonCancelar(): Promise<void> {
        await this.clickCrearPedidosBotonCancelar()
    }
}
