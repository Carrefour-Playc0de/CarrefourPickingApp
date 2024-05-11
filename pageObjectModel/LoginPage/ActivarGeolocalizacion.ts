import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class ActivarGeolocalizacion extends BasePage {

    readonly BOTON_ACTIVAR_GEOLOCALIZACION: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON_ACTIVAR_GEOLOCALIZACION = this.page.getByText('Activar', { exact: true })
    }

    async clickBotonActivarGeolocalizacion(): Promise<void> {
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForSelector('#alertLocation')
        const modalGeolocalizacion = await this.page.$('#alertLocation')
        if (modalGeolocalizacion) {
            await this.click(this.BOTON_ACTIVAR_GEOLOCALIZACION)
        }
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        // await this.page.waitForTimeout(1000)
    }

    async navigateToActivarGeolocalizacion(): Promise<void> {
        await this.clickBotonActivarGeolocalizacion()
    }
}
// const configureContext = async (browser) => {
//     let contextOptions = {
//             viewport: {width: 1920, height: 1080},
//             ignoreHTTPSErrors: true
//         }
//     ;
//     if (recordVideo) {
//         contextOptions.recordVideo = {dir: './videos/'};
//     }
//     contextOptions.geolocation = {
//         latitude: -32.893581, // Ejemplo: Latitud de calle Alem y San Martin del centro
//         longitude: -68.841046, // Ejemplo: Longitud de calle Alem y San Martin del centro
//     };
//     let context = await browser.newContext(contextOptions);
//     global.page = await context.newPage();
// };