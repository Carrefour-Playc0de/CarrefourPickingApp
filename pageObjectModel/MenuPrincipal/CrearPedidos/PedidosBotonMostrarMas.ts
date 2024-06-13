import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class PedidosBotonMostrarMas extends BasePage {

    readonly BOTON_MOSTRAR_MAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_MOSTRAR_MAS = this.page.locator("//*[@id='btn_getMore']")
    }

    async clickPedidosBotonMostrarMas(): Promise<void> {

        const botonMostarMas = await this.page.$("//*[@id='btn_getMore']")
        const statusProgress = await this.page.$("(//span[@class='status_progress' and @style='width: 0px;'])[1]")

        if(botonMostarMas && !statusProgress) {
            while (true) {
                if (!statusProgress) {
                    await this.click(this.BOTON_MOSTRAR_MAS)
                    await this.page.waitForLoadState("domcontentloaded")
                    await this.page.waitForFunction(() => document.readyState === 'complete')
                } else {
                    break
                }
            }
        }
        const alts = await this.page.$$eval('img[src="https://tupedido.carrefour.com.ar/imagenesPDA/noimage-svg.svg"]', imgs =>
            imgs.map(
                img => img.getAttribute('alt')
            )
        )
        // Enlatados y Conservas (144)
    }

    async navigateToMenuNuevoPedidosBotonMostrarMas(): Promise<void> {
        await this.clickPedidosBotonMostrarMas()
    }
}
