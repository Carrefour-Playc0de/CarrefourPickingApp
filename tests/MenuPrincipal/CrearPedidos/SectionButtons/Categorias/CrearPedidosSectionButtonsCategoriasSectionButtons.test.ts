import test from '../../../../../config/testManager'

test.beforeEach(async ({loginPage, activarGeolocalizacion, menuNuevoPedidos, menuCrearPedidosBotonEnvio, menuCrearPedidosBotonAceptar, menuCrearPedidosSectionButtonsCategorias}) => {
    await test.step(`Navegar en el sitio`, async () => {
        await loginPage.navigateToLoginPage()
    })
    await test.step('Ingreso de credenciales validas', async () => {
        await loginPage.fillCredentials()
    })
    await test.step('Click en el boton Ingresar', async () => {
        await loginPage.endLoginProcess()
    })
    await test.step('Click en el boton de VERIFICAR', async () => {
        await activarGeolocalizacion.clickBotonActivarGeolocalizacion()
    })
    await test.step('Click en Nuevo Pedido', async () => {
        await menuNuevoPedidos.clickNuevoPedidos();
    })
    await test.step('Click en el boton Envio', async () => {
        await menuCrearPedidosBotonEnvio.clickCrearPedidosBotonEnvio();
    })
    await test.step('Click en el boton Aceptar', async () => {
        await menuCrearPedidosBotonAceptar.clickCrearPedidosBotonAceptar()
    })
    await test.step('Click en el boton Categorias', async () => {
        await menuCrearPedidosSectionButtonsCategorias.clickCrearPedidosSectionButtonsCategorias()
    })
})

test('@Regression @Pedido (B2B-TC-462) Verificar que en Crear Pedidos en Categoria el boton Aceites y Vinagres funciona correctamente', async ({mCPCategorySectionButtonsAceitesVinagres}) => {
    await test.step('Click en el boton Aceites y Vinagres', async () => {
        await mCPCategorySectionButtonsAceitesVinagres.clickMCPCategorySectionButtonsAceitesVinagres()
    })
})
test('@Regression @Pedido (B2B-TC-463) Verificar que en Crear Pedidos en Categoria el boton Aguas funciona correctamente', async ({mCPCategorySectionButtonsAguas}) => {
    await test.step('Click en el boton Aguas', async () => {
        await mCPCategorySectionButtonsAguas.clickMCPCategorySectionButtonsAguas()
    })
})
test('@Regression @Pedido (B2B-TC-464) Verificar que en Crear Pedidos en Categoria el boton Algodones e Hisopos funciona correctamente', async ({mCPCategorySectionButtonsAlgodonesHisopos}) => {
    await test.step('Click en el boton Algodones e Hisopos', async () => {
        await mCPCategorySectionButtonsAlgodonesHisopos.clickMCPCategorySectionButtonsAlgodonesHisopos()
    })
})
test('@Regression @Pedido (B2B-TC-465) Verificar que en Crear Pedidos en Categoria el boton Alimento para Bebe funciona correctamente', async ({mCPCategorySectionButtonsAlimentoBebe}) => {
    await test.step('Click en el boton Alimento para Bebe', async () => {
        await mCPCategorySectionButtonsAlimentoBebe.clickMCPCategorySectionButtonsAlimentoBebe()
    })
})
test('@Regression @Pedido (B2B-TC-466) Verificar que en Crear Pedidos en Categoria el boton Antitranspirantes y Desodorantes funciona correctamente', async ({mCPCategorySectionButtonsAntitransDesodorantes}) => {
    await test.step('Click en el boton Antitranspirantes y Desodorantes', async () => {
        await mCPCategorySectionButtonsAntitransDesodorantes.clickMCPCategorySectionButtonsAntitransDesodorantes()
    })
})
test('@Regression @Pedido (B2B-TC-467) Verificar que en Crear Pedidos en Categoria el boton Arroz y Legumbres funciona correctamente', async ({mCPCategorySectionButtonsArrozLegumbres}) => {
    await test.step('Click en el boton Arroz y Legumbres', async () => {
        await mCPCategorySectionButtonsArrozLegumbres.clickMCPCategorySectionButtonsArrozLegumbres()
    })
})
test('@Regression @Pedido (B2B-TC-469) Verificar que en Crear Pedidos en Categoria el boton Articulos de Limpieza funciona correctamente', async ({mCPCategorySectionButtonsArticulosLimpieza}) => {
    await test.step('Click en el boton Articulos de Limpieza', async () => {
        await mCPCategorySectionButtonsArticulosLimpieza.clickMCPCategorySectionButtonsArticulosLimpieza()
    })
})
test('@Regression @Pedido (B2B-TC-470) Verificar que en Crear Pedidos en Categoria el boton Automotor funciona correctamente', async ({mCPCategorySectionButtonsAutomotor}) => {
    await test.step('Click en el boton Automotor', async () => {
        await mCPCategorySectionButtonsAutomotor.clickMCPCategorySectionButtonsAutomotor()
    })
})
test('@Regression @Pedido (B2B-TC-468) Verificar que en Crear Pedidos en Categoria el boton Azucar y Endulzantes funciona correctamente', async ({mCPCategorySectionButtonsAzucarEndulzantes}) => {
    await test.step('Click en el boton Azucar y Endulzantes', async () => {
        await mCPCategorySectionButtonsAzucarEndulzantes.clickMCPCategorySectionButtonsAzucarEndulzantes()
    })
})
test('@Regression @Pedido (B2B-TC-478) Verificar que en Crear Pedidos en Categoria el boton Bebidas funciona correctamente', async ({mCPCategorySectionButtonsBebidas}) => {
    await test.step('Click en el boton Bebidas', async () => {
        await mCPCategorySectionButtonsBebidas.clickMCPCategorySectionButtonsBebidas()
    })
})
test('@Regression @Pedido (B2B-TC-479) Verificar que en Crear Pedidos en Categoria el boton Bebidas Blancas funciona correctamente', async ({mCPCategorySectionButtonsBebidasBlancas}) => {
    await test.step('Click en el boton Bebidas Blancas', async () => {
        await mCPCategorySectionButtonsBebidasBlancas.clickMCPCategorySectionButtonsBebidasBlancas()
    })
})
test('@Regression @Pedido (B2B-TC-480) Verificar que en Crear Pedidos en Categoria el boton Bebidas Energizantes funciona correctamente', async ({mCPCategorySectionButtonsBebidasEnergizantes}) => {
    await test.step('Click en el boton Bebidas Energizantes', async () => {
        await mCPCategorySectionButtonsBebidasEnergizantes.clickMCPCategorySectionButtonsBebidasEnergizantes()
    })
})
test('@Regression @Pedido (B2B-TC-481) Verificar que en Crear Pedidos en Categoria el boton Bebidas Isotonicas funciona correctamente', async ({mCPCategorySectionButtonsBebidasIsotonicas}) => {
    await test.step('Click en el boton Bebidas Isotonicas', async () => {
        await mCPCategorySectionButtonsBebidasIsotonicas.clickMCPCategorySectionButtonsBebidasIsotonicas()
    })
})
test('@Regression @Pedido (B2B-TC-482) Verificar que en Crear Pedidos en Categoria el boton Budines y Magdalenas funciona correctamente', async ({mCPCategorySectionButtonsBudinesMagdalenas}) => {
    await test.step('Click en el boton Budines y Magdalenas', async () => {
        await mCPCategorySectionButtonsBudinesMagdalenas.clickMCPCategorySectionButtonsBudinesMagdalenas()
    })
})
test('@Regression @Pedido (B2B-TC-483) Verificar que en Crear Pedidos en Categoria el boton Cafe funciona correctamente', async ({mCPCategorySectionButtonsCafe}) => {
    await test.step('Click en el boton Cafe', async () => {
        await mCPCategorySectionButtonsCafe.clickMCPCategorySectionButtonsCafe()
    })
})
test('@Regression @Pedido (B2B-TC-484) Verificar que en Crear Pedidos en Categoria el boton Caldos Sopas y Pure funciona correctamente', async ({mCPCategorySectionButtonsCaldosSopasPure}) => {
    await test.step('Click en el boton Caldos Sopas y Pure', async () => {
        await mCPCategorySectionButtonsCaldosSopasPure.clickMCPCategorySectionButtonsCaldosSopasPure()
    })
})
test('@Regression @Pedido (B2B-TC-485) Verificar que en Crear Pedidos en Categoria el boton Cereales y Barritas funciona correctamente', async ({mCPCategorySectionButtonsCerealesBarritas}) => {
    await test.step('Click en el boton Cereales y Barritas', async () => {
        await mCPCategorySectionButtonsCerealesBarritas.clickMCPCategorySectionButtonsCerealesBarritas()
    })
})
test('@Regression @Pedido (B2B-TC-486) Verificar que en Crear Pedidos en Categoria el boton Cervezas funciona correctamente', async ({mCPCategorySectionButtonsCervezas}) => {
    await test.step('Click en el boton Cervezas', async () => {
        await mCPCategorySectionButtonsCervezas.clickMCPCategorySectionButtonsCervezas()
    })
})
test('@Regression @Pedido (B2B-TC-487) Verificar que en Crear Pedidos en Categoria el boton Cocina y Comedor funciona correctamente', async ({mCPCategorySectionButtonsCocinaComedor}) => {
    await test.step('Click en el boton Cocina y Comedor', async () => {
        await mCPCategorySectionButtonsCocinaComedor.clickMCPCategorySectionButtonsCocinaComedor()
    })
})
test('@Regression @Pedido (B2B-TC-488) Verificar que en Crear Pedidos en Categoria el boton Cremas de Leche funciona correctamente', async ({mCPCategorySectionButtonsCremasLeche}) => {
    await test.step('Click en el boton Cremas de Leche', async () => {
        await mCPCategorySectionButtonsCremasLeche.clickMCPCategorySectionButtonsCremasLeche()
    })
})
test('@Regression @Pedido (B2B-TC-489) Verificar que en Crear Pedidos en Categoria el boton Cuidado Corporal funciona correctamente', async ({mCPCategorySectionButtonsCuidadoCorporal}) => {
    await test.step('Click en el boton Cuidado Corporal', async () => {
        await mCPCategorySectionButtonsCuidadoCorporal.clickMCPCategorySectionButtonsCuidadoCorporal()
    })
})
test('@Regression @Pedido (B2B-TC-490) Verificar que en Crear Pedidos en Categoria el boton Cuidado de la Piel funciona correctamente', async ({mCPCategorySectionButtonsCuidadoPiel}) => {
    await test.step('Click en el boton Cuidado de la Piel', async () => {
        await mCPCategorySectionButtonsCuidadoPiel.clickMCPCategorySectionButtonsCuidadoPiel()
    })
})
test('@Regression @Pedido (B2B-TC-491) Verificar que en Crear Pedidos en Categoria el boton Cuidado de Cabello funciona correctamente', async ({mCPCategorySectionButtonsCuidadoCabello}) => {
    await test.step('Click en el boton Cuidado de Cabello', async () => {
        await mCPCategorySectionButtonsCuidadoCabello.clickMCPCategorySectionButtonsCuidadoCabello()
    })
})
test('@Regression @Pedido (B2B-TC-492) Verificar que en Crear Pedidos en Categoria el boton Cuidado Dental funciona correctamente', async ({mCPCategorySectionButtonsCuidadoDental}) => {
    await test.step('Click en el boton Cuidado Dental', async () => {
        await mCPCategorySectionButtonsCuidadoDental.clickMCPCategorySectionButtonsCuidadoDental()
    })
})
test('@Regression @Pedido (B2B-TC-493) Verificar que en Crear Pedidos en Categoria el boton Deco y Organizacion funciona correctamente', async ({mCPCategorySectionButtonsDecoOrganizacion}) => {
    await test.step('Click en el boton Deco y Organizacion', async () => {
        await mCPCategorySectionButtonsDecoOrganizacion.clickMCPCategorySectionButtonsDecoOrganizacion()
    })
})
test('@Regression @Pedido (B2B-TC-494) Verificar que en Crear Pedidos en Categoria el boton Desodorantes de Ambiente funciona correctamente', async ({mCPCategorySectionButtonsDesodorAmbiente}) => {
    await test.step('Click en el boton Desodorantes de Ambiente', async () => {
        await mCPCategorySectionButtonsDesodorAmbiente.clickMCPCategorySectionButtonsDesodorAmbiente()
    })
})
test('@Regression @Pedido (B2B-TC-495) Verificar que en Crear Pedidos en Categoria el boton Despues del Banio funciona correctamente', async ({mCPCategorySectionButtonsDespuesBanio}) => {
    await test.step('Click en el boton Despues del Banio', async () => {
        await mCPCategorySectionButtonsDespuesBanio.clickMCPCategorySectionButtonsDespuesBanio()
    })
})
test('@Regression @Pedido (B2B-TC-496) Verificar que en Crear Pedidos en Categoria el boton Dulce de Leche funciona correctamente', async ({mCPCategorySectionButtonsDulceLeche}) => {
    await test.step('Click en el boton Dulce de Leche', async () => {
        await mCPCategorySectionButtonsDulceLeche.clickMCPCategorySectionButtonsDulceLeche()
    })
})
test('@Regression @Pedido (B2B-TC-497) Verificar que en Crear Pedidos en Categoria el boton Enlatados y Conservas funciona correctamente', async ({mCPCategorySectionButtonsEnlatadosConservas}) => {
    await test.step('Click en el boton Enlatados y Conservas', async () => {
        await mCPCategorySectionButtonsEnlatadosConservas.clickMCPCategorySectionButtonsEnlatadosConservas()
    })
})
test('@Regression @Pedido (B2B-TC-498) Verificar que en Crear Pedidos en Categoria el boton Espumantes y Sidras funciona correctamente', async ({mCPCategorySectionButtonsEspumantesSidras}) => {
    await test.step('Click en el boton Espumantes y Sidras', async () => {
        await mCPCategorySectionButtonsEspumantesSidras.clickMCPCategorySectionButtonsEspumantesSidras()
    })
})
test('@Regression @Pedido (B2B-TC-499) Verificar que en Crear Pedidos en Categoria el boton Farmacia funciona correctamente', async ({mCPCategorySectionButtonsFarmacia}) => {
    await test.step('Click en el boton Farmacia', async () => {
        await mCPCategorySectionButtonsFarmacia.clickMCPCategorySectionButtonsFarmacia()
    })
})
test('@Regression @Pedido (B2B-TC-500) Verificar que en Crear Pedidos en Categoria el boton Fernet y Aperitivos funciona correctamente', async ({mCPCategorySectionButtonsFernetAperitivos}) => {
    await test.step('Click en el boton Fernet y Aperitivos', async () => {
        await mCPCategorySectionButtonsFernetAperitivos.clickMCPCategorySectionButtonsFernetAperitivos()
    })
})
test('@Regression @Pedido (B2B-TC-501) Verificar que en Crear Pedidos en Categoria el boton Ferreteria y Pintura funciona correctamente', async ({mCPCategorySectionButtonsFerreteriaPintura}) => {
    await test.step('Click en el boton Ferreteria y Pintura', async () => {
        await mCPCategorySectionButtonsFerreteriaPintura.clickMCPCategorySectionButtonsFerreteriaPintura()
    })
})
test('@Regression @Pedido (B2B-TC-502) Verificar que en Crear Pedidos en Categoria el boton Galletitas Bizcochitos y Tostadas funciona correctamente', async ({mCPCategorySectionButtonsGalletBizcoTostadas}) => {
    await test.step('Click en el boton Galletitas Bizcochitos y Tostadas', async () => {
        await mCPCategorySectionButtonsGalletBizcoTostadas.clickMCPCategorySectionButtonsGalletBizcoTostadas()
    })
})
test('@Regression @Pedido (B2B-TC-503) Verificar que en Crear Pedidos en Categoria el boton Gaseosas funciona correctamente', async ({mCPCategorySectionButtonsGaseosas}) => {
    await test.step('Click en el boton Gaseosas', async () => {
        await mCPCategorySectionButtonsGaseosas.clickMCPCategorySectionButtonsGaseosas()
    })
})
test('@Regression @Pedido (B2B-TC-504) Verificar que en Crear Pedidos en Categoria el boton Golosinas y Chocolates funciona correctamente', async ({mCPCategorySectionButtonsGolosinasChocolates}) => {
    await test.step('Click en el boton Golosinas y Chocolates', async () => {
        await mCPCategorySectionButtonsGolosinasChocolates.clickMCPCategorySectionButtonsGolosinasChocolates()
    })
})
test('@Regression @Pedido (B2B-TC-505) Verificar que en Crear Pedidos en Categoria el boton Harinas funciona correctamente', async ({mCPCategorySectionButtonsHarinas}) => {
    await test.step('Click en el boton Harinas', async () => {
        await mCPCategorySectionButtonsHarinas.clickMCPCategorySectionButtonsHarinas()
    })
})
test('@Regression @Pedido (B2B-TC-506) Verificar que en Crear Pedidos en Categoria el boton Infusiones funciona correctamente', async ({mCPCategorySectionButtonsInfusiones}) => {
    await test.step('Click en el boton Infusiones', async () => {
        await mCPCategorySectionButtonsInfusiones.clickMCPCategorySectionButtonsInfusiones()
    })
})
test('@Regression @Pedido (B2B-TC-507) Verificar que en Crear Pedidos en Categoria el boton Insecticidas funciona correctamente', async ({mCPCategorySectionButtonsInsecticidas}) => {
    await test.step('Click en el boton Insecticidas', async () => {
        await mCPCategorySectionButtonsInsecticidas.clickMCPCategorySectionButtonsInsecticidas()
    })
})
test('@Regression @Pedido (B2B-TC-508) Verificar que en Crear Pedidos en Categoria el boton Jabones funciona correctamente', async ({mCPCategorySectionButtonsJabones}) => {
    await test.step('Click en el boton Jabones', async () => {
        await mCPCategorySectionButtonsJabones.clickMCPCategorySectionButtonsJabones()
    })
})
test('@Regression @Pedido (B2B-TC-509) Verificar que en Crear Pedidos en Categoria el boton Jugos funciona correctamente', async ({mCPCategorySectionButtonsJugos}) => {
    await test.step('Click en el boton Jugos', async () => {
        await mCPCategorySectionButtonsJugos.clickMCPCategorySectionButtonsJugos()
    })
})
test('@Regression @Pedido (B2B-TC-510) Verificar que en Crear Pedidos en Categoria el boton Lavandinas funciona correctamente', async ({mCPCategorySectionButtonsLavandinas}) => {
    await test.step('Click en el boton Lavandinas', async () => {
        await mCPCategorySectionButtonsLavandinas.clickMCPCategorySectionButtonsLavandinas()
    })
})
test('@Regression @Pedido (B2B-TC-511) Verificar que en Crear Pedidos en Categoria el boton Leches funciona correctamente', async ({mCPCategorySectionButtonsLeches}) => {
    await test.step('Click en el boton Leches', async () => {
        await mCPCategorySectionButtonsLeches.clickMCPCategorySectionButtonsLeches()
    })
})
test('@Regression @Pedido (B2B-TC-512) Verificar que en Crear Pedidos en Categoria el boton Leches en Polvo y Larga Vida funciona correctamente', async ({mCPCategorySectionButtonsLechesPolLarVida}) => {
    await test.step('Click en el boton Leches en Polvo y Larga Vida', async () => {
        await mCPCategorySectionButtonsLechesPolLarVida.clickMCPCategorySectionButtonsLechesPolLarVida()
    })
})
test('@Regression @Pedido (B2B-TC-513) Verificar que en Crear Pedidos en Categoria el boton Libreria funciona correctamente', async ({mCPCategorySectionButtonsLibreria}) => {
    await test.step('Click en el boton LLibreria', async () => {
        await mCPCategorySectionButtonsLibreria.clickMCPCategorySectionButtonsLibreria()
    })
})
test('@Regression @Pedido (B2B-TC-514) Verificar que en Crear Pedidos en Categoria el boton Limpieza de Banio funciona correctamente', async ({mCPCategorySectionButtonsLimpiezaBanio}) => {
    await test.step('Click en el boton Limpieza de Banio', async () => {
        await mCPCategorySectionButtonsLimpiezaBanio.clickMCPCategorySectionButtonsLimpiezaBanio()
    })
})
test('@Regression @Pedido (B2B-TC-515) Verificar que en Crear Pedidos en Categoria el boton Limpieza de Cocina funciona correctamente', async ({mCPCategorySectionButtonsLimpiezaCocina}) => {
    await test.step('Click en el boton Limpieza de Cocina', async () => {
        await mCPCategorySectionButtonsLimpiezaCocina.clickMCPCategorySectionButtonsLimpiezaCocina()
    })
})
test('@Regression @Pedido (B2B-TC-516) Verificar que en Crear Pedidos en Categoria el boton Limpieza de la Ropa funciona correctamente', async ({mCPCategorySectionButtonsLimpiezaRopa}) => {
    await test.step('Click en el boton Limpieza de la Ropa', async () => {
        await mCPCategorySectionButtonsLimpiezaRopa.clickMCPCategorySectionButtonsLimpiezaRopa()
    })
})
test('@Regression @Pedido (B2B-TC-517) Verificar que en Crear Pedidos en Categoria el boton Limpieza de Pisos y Muebles funciona correctamente', async ({mCPCategorySectionButtonsLimpiezaPisosMuebles}) => {
    await test.step('Click en el boton Limpieza de Pisos y Muebles', async () => {
        await mCPCategorySectionButtonsLimpiezaPisosMuebles.clickMCPCategorySectionButtonsLimpiezaPisosMuebles()
    })
})
test('@Regression @Pedido (B2B-TC-518) Verificar que en Crear Pedidos en Categoria el boton Mantecas Margarinas y Levaduras funciona correctamente', async ({mCPCategorySectionButtonsManteMargariLevaduras}) => {
    await test.step('Click en el boton Mantecas Margarinas y Levaduras', async () => {
        await mCPCategorySectionButtonsManteMargariLevaduras.clickMCPCategorySectionButtonsManteMargariLevaduras()
    })
})
test('@Regression @Pedido (B2B-TC-519) Verificar que en Crear Pedidos en Categoria el boton Mermeladas y otros Dulces funciona correctamente', async ({mCPCategorySectionButtonsMermeOtrosDulces}) => {
    await test.step('Click en el boton Mermeladas y otros Dulces', async () => {
        await mCPCategorySectionButtonsMermeOtrosDulces.clickMCPCategorySectionButtonsMermeOtrosDulces()
    })
})
test('@Regression @Pedido (B2B-TC-520) Verificar que en Crear Pedidos en Categoria el boton P.A.S. funciona correctamente', async ({mCPCategorySectionButtonsPAS}) => {
    await test.step('Click en el boton P.A.S.', async () => {
        await mCPCategorySectionButtonsPAS.clickMCPCategorySectionButtonsPAS()
    })
})
test('@Regression @Pedido (B2B-TC-521) Verificar que en Crear Pedidos en Categoria el boton Pan Rallado y Rebozadores funciona correctamente', async ({mCPCategorySectionButtonsPanRalladoRebozadores}) => {
    await test.step('Click en el boton Pan Rallado y Rebozadores', async () => {
        await mCPCategorySectionButtonsPanRalladoRebozadores.clickMCPCategorySectionButtonsPanRalladoRebozadores()
    })
})
test('@Regression @Pedido (B2B-TC-522) Verificar que en Crear Pedidos en Categoria el boton Paniales funciona correctamente', async ({mCPCategorySectionButtonsPaniales}) => {
    await test.step('Click en el boton Paniales', async () => {
        await mCPCategorySectionButtonsPaniales.clickMCPCategorySectionButtonsPaniales()
    })
})
test('@Regression @Pedido (B2B-TC-523) Verificar que en Crear Pedidos en Categoria el boton Panificados funciona correctamente', async ({mCPCategorySectionButtonsPanificados}) => {
    await test.step('Click en el boton Panificados', async () => {
        await mCPCategorySectionButtonsPanificados.clickMCPCategorySectionButtonsPanificados()
    })
})
test('@Regression @Pedido (B2B-TC-524) Verificar que en Crear Pedidos en Categoria el boton Papeles Higienicos funciona correctamente', async ({mCPCategorySectionButtonsPapelesHigienicos}) => {
    await test.step('Click en el boton Papeles Higienicos', async () => {
        await mCPCategorySectionButtonsPapelesHigienicos.clickMCPCategorySectionButtonsPapelesHigienicos()
    })
})
test('@Regression @Pedido (B2B-TC-525) Verificar que en Crear Pedidos en Categoria el boton Para el Banio funciona correctamente', async ({mCPCategorySectionButtonsParaBanio}) => {
    await test.step('Click en el boton Para el Banio', async () => {
        await mCPCategorySectionButtonsParaBanio.clickMCPCategorySectionButtonsParaBanio()
    })
})
test('@Regression @Pedido (B2B-TC-526) Verificar que en Crear Pedidos en Categoria el boton Pastas Secas funciona correctamente', async ({mCPCategorySectionButtonsPastasSecas}) => {
    await test.step('Click en el boton Pastas Secas', async () => {
        await mCPCategorySectionButtonsPastasSecas.clickMCPCategorySectionButtonsPastasSecas()
    })
})
test('@Regression @Pedido (B2B-TC-527) Verificar que en Crear Pedidos en Categoria el boton Proteccion Femenina funciona correctamente', async ({mCPCategorySectionButtonsProteccionFemenina}) => {
    await test.step('Click en el boton Proteccion Femenina', async () => {
        await mCPCategorySectionButtonsProteccionFemenina.clickMCPCategorySectionButtonsProteccionFemenina()
    })
})
test('@Regression @Pedido (B2B-TC-528) Verificar que en Crear Pedidos en Categoria el boton Proteccion para Adultos funciona correctamente', async ({mCPCategorySectionButtonsProteccionAdultos}) => {
    await test.step('Click en el boton Proteccion para Adultos', async () => {
        await mCPCategorySectionButtonsProteccionAdultos.clickMCPCategorySectionButtonsProteccionAdultos()
    })
})
test('@Regression @Pedido (B2B-TC-529) Verificar que en Crear Pedidos en Categoria el boton Quesos funciona correctamente', async ({mCPCategorySectionButtonsQuesos}) => {
    await test.step('Click en el boton Quesos', async () => {
        await mCPCategorySectionButtonsQuesos.clickMCPCategorySectionButtonsQuesos()
    })
})
test('@Regression @Pedido (B2B-TC-530) Verificar que en Crear Pedidos en Categoria el boton Repelentes funciona correctamente', async ({mCPCategorySectionButtonsRepelentes}) => {
    await test.step('Click en el boton Repelentes', async () => {
        await mCPCategorySectionButtonsRepelentes.clickMCPCategorySectionButtonsRepelentes()
    })
})
test('@Regression @Pedido (B2B-TC-531) Verificar que en Crear Pedidos en Categoria el boton Reposteria y Postres funciona correctamente', async ({mCPCategorySectionButtonsReposteriaPostres}) => {
    await test.step('Click en el boton Reposteria y Postres', async () => {
        await mCPCategorySectionButtonsReposteriaPostres.clickMCPCategorySectionButtonsReposteriaPostres()
    })
})
test('@Regression @Pedido (B2B-TC-532) Verificar que en Crear Pedidos en Categoria el boton Rollos de Cocina y Servilletas funciona correctamente', async ({mCPCategorySectionButtonsRollosCocinaServilletas}) => {
    await test.step('Click en el boton Rollos de Cocina y Servilletas', async () => {
        await mCPCategorySectionButtonsRollosCocinaServilletas.clickMCPCategorySectionButtonsRollosCocinaServilletas()
    })
})
test('@Regression @Pedido (B2B-TC-533) Verificar que en Crear Pedidos en Categoria el boton Sal Aderezos y Saborizadores funciona correctamente', async ({mCPCategorySectionButtonsSalAdereSaborizadores}) => {
    await test.step('Click en el boton Sal Aderezos y Saborizadores', async () => {
        await mCPCategorySectionButtonsSalAdereSaborizadores.clickMCPCategorySectionButtonsSalAdereSaborizadores()
    })
})
test('@Regression @Pedido (B2B-TC-534) Verificar que en Crear Pedidos en Categoria el boton Seco funciona correctamente', async ({mCPCategorySectionButtonsSeco}) => {
    await test.step('Click en el boton Seco', async () => {
        await mCPCategorySectionButtonsSeco.clickMCPCategorySectionButtonsSeco()
    })
})
test('@Regression @Pedido (B2B-TC-535) Verificar que en Crear Pedidos en Categoria el boton Snacks funciona correctamente', async ({mCPCategorySectionButtonsSnacks}) => {
    await test.step('Click en el boton Snacks', async () => {
        await mCPCategorySectionButtonsSnacks.clickMCPCategorySectionButtonsSnacks()
    })
})
test('@Regression @Pedido (B2B-TC-536) Verificar que en Crear Pedidos en Categoria el boton Toallitas Humedas funciona correctamente', async ({mCPCategorySectionButtonsToallitasHumedas}) => {
    await test.step('Click en el boton Toallitas Humedas', async () => {
        await mCPCategorySectionButtonsToallitasHumedas.clickMCPCategorySectionButtonsToallitasHumedas()
    })
})
test('@Regression @Pedido (B2B-TC-537) Verificar que en Crear Pedidos en Categoria el boton Vinos funciona correctamente', async ({mCPCategorySectionButtonsVinos}) => {
    await test.step('Click en el boton Vinos', async () => {
        await mCPCategorySectionButtonsVinos.clickMCPCategorySectionButtonsVinos()
    })
})
test('@Regression @Pedido (B2B-TC-538) Verificar que en Crear Pedidos en Categoria el boton Yerba funciona correctamente', async ({mCPCategorySectionButtonsYerba}) => {
    await test.step('Click en el boton Yerba', async () => {
        await mCPCategorySectionButtonsYerba.clickMCPCategorySectionButtonsYerba()
    })
})
