import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../../config/configLoader'

export class MCPCategorySectionButtonsAntitransDesodorantes extends BasePage {

    readonly BOTON: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOTON = this.page.locator("//*[@data-itemname='antitranspirantes y desodorantes']")
    }

    async clickMCPCategorySectionButtonsAntitransDesodorantes(): Promise<void> {
        await this.click(this.BOTON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMCPCategorySectionButtonsAntitransDesodorantes(): Promise<void> {
        await this.clickMCPCategorySectionButtonsAntitransDesodorantes()
    }
}
