import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class LoginPage extends BasePage {

    readonly IDENTIFICADOR: Locator
    readonly TIENDA: Locator
    readonly USUARIO: Locator
    readonly CONTRASENIA: Locator
    readonly BOTON_INGRESAR: Locator
    readonly BOTON_ACTIVAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.IDENTIFICADOR = this.page.getByPlaceholder('Identificador')
        this.TIENDA = this.page.getByPlaceholder('Tienda')
        this.USUARIO = this.page.getByPlaceholder('Usuario')
        this.CONTRASENIA = this.page.getByPlaceholder('Contraseña')
        this.BOTON_INGRESAR = this.page.locator("(//button[normalize-space()='Ingresar'])[1]")
        this.BOTON_ACTIVAR = this.page.locator("(//button[normalize-space()='Activar'])[1]")
    }

    async navigateToLoginPage(): Promise<void> {
        await this.goto(this.env.baseURL)
    }
    async fillCredentials(): Promise<void> {
        // await this.fill(this.IDENTIFICADOR, '96018290')
        await this.fill(this.IDENTIFICADOR, this.env.identifierNumber)
        await this.fill(this.TIENDA, this.env.storeNumber)
        await this.fill(this.USUARIO, this.env.username)
        await this.fill(this.CONTRASENIA, this.env.password)
    }
    async endLoginProcess(): Promise<void> {
        await this.click(this.BOTON_INGRESAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        // await this.page.waitForTimeout(10000)
    }
    async clickBotonActivarGeolocalizacion(): Promise<void> {
        await this.page.waitForLoadState("domcontentloaded")
        // await this.page.waitForSelector("//section [@id='alertLocation']", {timeout: 10000})
        await this.click(this.BOTON_ACTIVAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        // await this.page.waitForTimeout(3000)
    }

    async navigateToUrlAndLogin(): Promise<void> {
        await this.navigateToLoginPage()
        await this.fillCredentials()
        await this.endLoginProcess()
        await this.clickBotonActivarGeolocalizacion()
    }
}
