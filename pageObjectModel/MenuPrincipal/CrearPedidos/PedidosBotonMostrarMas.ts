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

        for(let i=0; i<=210; i++){

            const isBtnMostrarMasVisible = await this.page.$eval("//*[@id='btn_getMore']", button => {
                return window.getComputedStyle(button).display !== 'none';
            })

            if (isBtnMostrarMasVisible === true){
                await this.click(this.BOTON_MOSTRAR_MAS)
                await this.page.waitForLoadState("domcontentloaded")
                await this.page.waitForFunction(() => document.readyState === 'complete')
                await this.page.waitForTimeout(500)
                console.log('botonMostarMas = ' + isBtnMostrarMasVisible)
            }else{
                console.log('botonMostarMas (Break) = ' + isBtnMostrarMasVisible)
                break
            }
        }

        const alts = await this.page.$$eval('img[src="https://tupedido.carrefour.com.ar/imagenesPDA/noimage-svg.svg"]', imgs =>
            imgs.map(
                img => img.getAttribute('alt')
            )
        )
    }

    async navigateToMenuNuevoPedidosBotonMostrarMas(): Promise<void> {
        await this.clickPedidosBotonMostrarMas()
    }
}
