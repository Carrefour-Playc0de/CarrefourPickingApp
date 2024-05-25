// import { Page, BrowserContext, Locator, expect } from '@playwright/test'
// import { BasePage } from '../../../../../commonActions'
// import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../../config/configLoader'
//
// export class MenuCrearPedidosFavoritosSectionButtonsVaciarListado extends BasePage {
//
//     readonly BOTON: Locator
//
//     private env: any
//
//     constructor(page: Page, context: BrowserContext, environment: string) {
//         super(page, context)
//         this.env = loadEnvironmentConfig(environment)
//
//         this.BOTON = this.page.locator("//*[@onclick='clearFavorite()']")
//     }
//
//     async clickCrearPedidosFavoritosSectionButtonsVaciarListado(): Promise<void> {
//         await this.click(this.BOTON)
//         await this.page.waitForLoadState("domcontentloaded")
//         await this.page.waitForFunction(() => document.readyState === 'complete')
//         await this.page.waitForTimeout(3000)
//     }
//     async clickCrearPedidosFavoritosSectionButtonsVaciarListado(): Promise<void> {
//         await this.click(this.BOTON)
//         await this.page.waitForLoadState("domcontentloaded")
//         await this.page.waitForFunction(() => document.readyState === 'complete')
//         await this.page.waitForTimeout(3000)
//     }
//
//     async navigateToMenuCrearPedidosFavoritosSectionButtonsVaciarListado(): Promise<void> {
//         await this.clickCrearPedidosFavoritosSectionButtonsVaciarListado()
//     }
// }
//
// Si el modal no aparece inmediatamente en el DOM, pero aparece después de hacer clic en un botón, es probable que sea cargado dinámicamente por JavaScript. Para manejar esto con Playwright y TypeScript, puedes esperar a que el modal aparezca después de hacer clic en el botón y luego interactuar con él. Aquí te muestro cómo hacerlo:
//
//     Espera que el modal aparezca después de hacer clic en el botón.
//     Interactúa con el botón "Aceptar" del modal.
//
//     Aquí tienes un ejemplo de cómo podrías hacer esto con Playwright y TypeScript:
//
//     import { chromium, Browser, Page } from 'playwright';
//
// (async () => {
//     // Iniciar el navegador
//     const browser: Browser = await chromium.launch({ headless: false }); // headless: false para ver las acciones
//     const page: Page = await browser.newPage();
//
//     // Navegar a la URL de tu página
//     await page.goto('URL_DE_LA_PAGINA');
//
//     // Hacer clic en el botón que abre el modal
//     await page.click('SELECTOR_DEL_BOTON_QUE_ABRE_EL_MODAL');
//
//     // Esperar a que el modal aparezca
//     await page.waitForSelector('SELECTOR_DEL_MODAL', { state: 'visible' });
//
//     // Hacer clic en el botón "Aceptar" del modal
//     await page.click('SELECTOR_DEL_BOTON_ACEPTAR_DEL_MODAL');
//
//     // Cerrar el navegador
//     await browser.close();
// })();
//
// Explicación:
//
//     Iniciar el navegador: Se inicia una instancia del navegador.
//     Navegar a la página: Se navega a la URL de la página donde se encuentra el botón que abre el modal.
//     Hacer clic en el botón: Se hace clic en el botón que se supone abre el modal.
//     Esperar a que el modal aparezca: Utiliza waitForSelector para esperar a que el modal esté visible en el DOM.
//     Hacer clic en el botón "Aceptar": Una vez que el modal es visible, se hace clic en el botón "Aceptar" dentro del modal.
//     Cerrar el navegador: Finalmente, se cierra el navegador.
//
//     Consideraciones:
//
// SELECTOR_DEL_BOTON_QUE_ABRE_EL_MODAL: Reemplaza esto con el selector real del botón que abre el modal.
//     SELECTOR_DEL_MODAL: Reemplaza esto con el selector real del modal que aparece.
//     SELECTOR_DEL_BOTON_ACEPTAR_DEL_MODAL: Reemplaza esto con el selector real del botón "Aceptar" dentro del modal.
//
//     Ejemplo Práctico:
//
//     Si el botón que abre el modal tiene el selector #open-modal-btn, el modal tiene el selector #modal y el botón "Aceptar" dentro del modal tiene el selector #accept-btn, el código sería así:
//
// await page.click('#open-modal-btn');
// await page.waitForSelector('#modal', { state: 'visible' });
// await page.click('#accept-btn');