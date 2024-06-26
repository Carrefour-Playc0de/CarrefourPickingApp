import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuCerrarSesion extends BasePage {

    readonly CERRAR_SESION: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CERRAR_SESION = this.page.locator("(//div[@onclick=\"gotoPage('logout')\"])[1]")
    }

    async clickMenuCerrarSesion(): Promise<void> {
        await this.click(this.CERRAR_SESION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuCerrarSesion(): Promise<void> {
        await this.clickMenuCerrarSesion()
    }
}
