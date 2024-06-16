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

test('@qaz @Regression @Pedido (B2B-TC-549) Verificar que en Crear Pedidos en Categoria en Aceites y Vinagres el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsAceitesVinagres}) => {
    await test.step('Click en el boton Aceites y Vinagres', async () => {
        await mCPCategorySectionButtonsAceitesVinagres.clickMCPCategorySectionButtonsAceitesVinagres()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-550) Verificar que en Crear Pedidos en Categoria el boton Aguas el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsAguas}) => {
    await test.step('Click en el boton Aguas', async () => {
        await mCPCategorySectionButtonsAguas.clickMCPCategorySectionButtonsAguas()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-551) Verificar que en Crear Pedidos en Categoria el boton Algodones e Hisopos el boton MOSTRAR MAS funciona correctamentee', async ({mCPCategorySectionButtonsAlgodonesHisopos}) => {
    await test.step('Click en el boton Algodones e Hisopos', async () => {
        await mCPCategorySectionButtonsAlgodonesHisopos.clickMCPCategorySectionButtonsAlgodonesHisopos()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-552) Verificar que en Crear Pedidos en Categoria el boton Alimento para Bebe el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsAlimentoBebe}) => {
    await test.step('Click en el boton Alimento para Bebe', async () => {
        await mCPCategorySectionButtonsAlimentoBebe.clickMCPCategorySectionButtonsAlimentoBebe()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-553) Verificar que en Crear Pedidos en Categoria el boton Antitranspirantes y Desodorantes el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsAntitransDesodorantes}) => {
    await test.step('Click en el boton Antitranspirantes y Desodorantes', async () => {
        await mCPCategorySectionButtonsAntitransDesodorantes.clickMCPCategorySectionButtonsAntitransDesodorantes()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-554) Verificar que en Crear Pedidos en Categoria el boton Arroz y Legumbres el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsArrozLegumbres}) => {
    await test.step('Click en el boton Arroz y Legumbres', async () => {
        await mCPCategorySectionButtonsArrozLegumbres.clickMCPCategorySectionButtonsArrozLegumbres()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-555) Verificar que en Crear Pedidos en Categoria el boton Articulos de Limpieza el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsArticulosLimpieza}) => {
    await test.step('Click en el boton Articulos de Limpieza', async () => {
        await mCPCategorySectionButtonsArticulosLimpieza.clickMCPCategorySectionButtonsArticulosLimpieza()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-556) Verificar que en Crear Pedidos en Categoria el boton Automotor el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsAutomotor}) => {
    await test.step('Click en el boton Automotor', async () => {
        await mCPCategorySectionButtonsAutomotor.clickMCPCategorySectionButtonsAutomotor()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-557) Verificar que en Crear Pedidos en Categoria el boton Azucar y Endulzantes el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsAzucarEndulzantes}) => {
    await test.step('Click en el boton Azucar y Endulzantes', async () => {
        await mCPCategorySectionButtonsAzucarEndulzantes.clickMCPCategorySectionButtonsAzucarEndulzantes()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-558) Verificar que en Crear Pedidos en Categoria el boton Bebidas el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsBebidas}) => {
    await test.step('Click en el boton Bebidas', async () => {
        await mCPCategorySectionButtonsBebidas.clickMCPCategorySectionButtonsBebidas()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-559) Verificar que en Crear Pedidos en Categoria el boton Bebidas Blancas el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsBebidasBlancas}) => {
    await test.step('Click en el boton Bebidas Blancas', async () => {
        await mCPCategorySectionButtonsBebidasBlancas.clickMCPCategorySectionButtonsBebidasBlancas()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-560) Verificar que en Crear Pedidos en Categoria el boton Bebidas Energizantes el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsBebidasEnergizantes}) => {
    await test.step('Click en el boton Bebidas Energizantes', async () => {
        await mCPCategorySectionButtonsBebidasEnergizantes.clickMCPCategorySectionButtonsBebidasEnergizantes()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-561) Verificar que en Crear Pedidos en Categoria el boton Bebidas Isotonicas el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsBebidasIsotonicas}) => {
    await test.step('Click en el boton Bebidas Isotonicas', async () => {
        await mCPCategorySectionButtonsBebidasIsotonicas.clickMCPCategorySectionButtonsBebidasIsotonicas()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-562) Verificar que en Crear Pedidos en Categoria el boton Budines y Magdalenas el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsBudinesMagdalenas}) => {
    await test.step('Click en el boton Budines y Magdalenas', async () => {
        await mCPCategorySectionButtonsBudinesMagdalenas.clickMCPCategorySectionButtonsBudinesMagdalenas()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-563) Verificar que en Crear Pedidos en Categoria el boton Cafe el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsCafe}) => {
    await test.step('Click en el boton Cafe', async () => {
        await mCPCategorySectionButtonsCafe.clickMCPCategorySectionButtonsCafe()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-564) Verificar que en Crear Pedidos en Categoria el boton Caldos Sopas y Pure el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsCaldosSopasPure}) => {
    await test.step('Click en el boton Caldos Sopas y Pure', async () => {
        await mCPCategorySectionButtonsCaldosSopasPure.clickMCPCategorySectionButtonsCaldosSopasPure()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-565) Verificar que en Crear Pedidos en Categoria el boton Cereales y Barritas el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsCerealesBarritas}) => {
    await test.step('Click en el boton Cereales y Barritas', async () => {
        await mCPCategorySectionButtonsCerealesBarritas.clickMCPCategorySectionButtonsCerealesBarritas()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-566) Verificar que en Crear Pedidos en Categoria el boton Cervezas el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsCervezas}) => {
    await test.step('Click en el boton Cervezas', async () => {
        await mCPCategorySectionButtonsCervezas.clickMCPCategorySectionButtonsCervezas()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-567) Verificar que en Crear Pedidos en Categoria el boton Cocina y Comedor el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsCocinaComedor}) => {
    await test.step('Click en el boton Cocina y Comedor', async () => {
        await mCPCategorySectionButtonsCocinaComedor.clickMCPCategorySectionButtonsCocinaComedor()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-568) Verificar que en Crear Pedidos en Categoria el boton Cremas de Leche el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsCremasLeche}) => {
    await test.step('Click en el boton Cremas de Leche', async () => {
        await mCPCategorySectionButtonsCremasLeche.clickMCPCategorySectionButtonsCremasLeche()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-569) Verificar que en Crear Pedidos en Categoria el boton Cuidado Corporal el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsCuidadoCorporal}) => {
    await test.step('Click en el boton Cuidado Corporal', async () => {
        await mCPCategorySectionButtonsCuidadoCorporal.clickMCPCategorySectionButtonsCuidadoCorporal()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-570) Verificar que en Crear Pedidos en Categoria el boton Cuidado de la Piel el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsCuidadoPiel}) => {
    await test.step('Click en el boton Cuidado de la Piel', async () => {
        await mCPCategorySectionButtonsCuidadoPiel.clickMCPCategorySectionButtonsCuidadoPiel()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-571) Verificar que en Crear Pedidos en Categoria el boton Cuidado de Cabello el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsCuidadoCabello}) => {
    await test.step('Click en el boton Cuidado de Cabello', async () => {
        await mCPCategorySectionButtonsCuidadoCabello.clickMCPCategorySectionButtonsCuidadoCabello()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-572) Verificar que en Crear Pedidos en Categoria el boton Cuidado Dental el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsCuidadoDental}) => {
    await test.step('Click en el boton Cuidado Dental', async () => {
        await mCPCategorySectionButtonsCuidadoDental.clickMCPCategorySectionButtonsCuidadoDental()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-573) Verificar que en Crear Pedidos en Categoria el boton Deco y Organizacion el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsDecoOrganizacion}) => {
    await test.step('Click en el boton Deco y Organizacion', async () => {
        await mCPCategorySectionButtonsDecoOrganizacion.clickMCPCategorySectionButtonsDecoOrganizacion()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-574) Verificar que en Crear Pedidos en Categoria el boton Desodorantes de Ambiente el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsDesodorAmbiente}) => {
    await test.step('Click en el boton Desodorantes de Ambiente', async () => {
        await mCPCategorySectionButtonsDesodorAmbiente.clickMCPCategorySectionButtonsDesodorAmbiente()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-575) Verificar que en Crear Pedidos en Categoria el boton Despues del Banio el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsDespuesBanio}) => {
    await test.step('Click en el boton Despues del Banio', async () => {
        await mCPCategorySectionButtonsDespuesBanio.clickMCPCategorySectionButtonsDespuesBanio()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-576) Verificar que en Crear Pedidos en Categoria el boton Dulce de Leche el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsDulceLeche}) => {
    await test.step('Click en el boton Dulce de Leche', async () => {
        await mCPCategorySectionButtonsDulceLeche.clickMCPCategorySectionButtonsDulceLeche()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-577) Verificar que en Crear Pedidos en Categoria el boton Enlatados y Conservas el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsEnlatadosConservas}) => {
    await test.step('Click en el boton Enlatados y Conservas', async () => {
        await mCPCategorySectionButtonsEnlatadosConservas.clickMCPCategorySectionButtonsEnlatadosConservas()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-578) Verificar que en Crear Pedidos en Categoria el boton Espumantes y Sidras el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsEspumantesSidras}) => {
    await test.step('Click en el boton Espumantes y Sidras', async () => {
        await mCPCategorySectionButtonsEspumantesSidras.clickMCPCategorySectionButtonsEspumantesSidras()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-579) Verificar que en Crear Pedidos en Categoria el boton Farmacia el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsFarmacia}) => {
    await test.step('Click en el boton Farmacia', async () => {
        await mCPCategorySectionButtonsFarmacia.clickMCPCategorySectionButtonsFarmacia()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-580) Verificar que en Crear Pedidos en Categoria el boton Fernet y Aperitivos el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsFernetAperitivos}) => {
    await test.step('Click en el boton Fernet y Aperitivos', async () => {
        await mCPCategorySectionButtonsFernetAperitivos.clickMCPCategorySectionButtonsFernetAperitivos()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-581) Verificar que en Crear Pedidos en Categoria el boton Ferreteria y Pintura el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsFerreteriaPintura}) => {
    await test.step('Click en el boton Ferreteria y Pintura', async () => {
        await mCPCategorySectionButtonsFerreteriaPintura.clickMCPCategorySectionButtonsFerreteriaPintura()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-582) Verificar que en Crear Pedidos en Categoria el boton Galletitas Bizcochitos y Tostadas el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsGalletBizcoTostadas}) => {
    await test.step('Click en el boton Galletitas Bizcochitos y Tostadas', async () => {
        await mCPCategorySectionButtonsGalletBizcoTostadas.clickMCPCategorySectionButtonsGalletBizcoTostadas()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-583) Verificar que en Crear Pedidos en Categoria el boton Gaseosas el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsGaseosas}) => {
    await test.step('Click en el boton Gaseosas', async () => {
        await mCPCategorySectionButtonsGaseosas.clickMCPCategorySectionButtonsGaseosas()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-584) Verificar que en Crear Pedidos en Categoria el boton Golosinas y Chocolates el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsGolosinasChocolates}) => {
    await test.step('Click en el boton Golosinas y Chocolates', async () => {
        await mCPCategorySectionButtonsGolosinasChocolates.clickMCPCategorySectionButtonsGolosinasChocolates()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-585) Verificar que en Crear Pedidos en Categoria el boton Harinas el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsHarinas}) => {
    await test.step('Click en el boton Harinas', async () => {
        await mCPCategorySectionButtonsHarinas.clickMCPCategorySectionButtonsHarinas()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-586) Verificar que en Crear Pedidos en Categoria el boton Infusiones el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsInfusiones}) => {
    await test.step('Click en el boton Infusiones', async () => {
        await mCPCategorySectionButtonsInfusiones.clickMCPCategorySectionButtonsInfusiones()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-587) Verificar que en Crear Pedidos en Categoria el boton Insecticidas el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsInsecticidas}) => {
    await test.step('Click en el boton Insecticidas', async () => {
        await mCPCategorySectionButtonsInsecticidas.clickMCPCategorySectionButtonsInsecticidas()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-588) Verificar que en Crear Pedidos en Categoria el boton Jabones el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsJabones}) => {
    await test.step('Click en el boton Jabones', async () => {
        await mCPCategorySectionButtonsJabones.clickMCPCategorySectionButtonsJabones()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-589) Verificar que en Crear Pedidos en Categoria el boton Jugos el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsJugos}) => {
    await test.step('Click en el boton Jugos', async () => {
        await mCPCategorySectionButtonsJugos.clickMCPCategorySectionButtonsJugos()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-590) Verificar que en Crear Pedidos en Categoria el boton Lavandinas el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsLavandinas}) => {
    await test.step('Click en el boton Lavandinas', async () => {
        await mCPCategorySectionButtonsLavandinas.clickMCPCategorySectionButtonsLavandinas()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-591) Verificar que en Crear Pedidos en Categoria el boton Leches el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsLeches}) => {
    await test.step('Click en el boton Leches', async () => {
        await mCPCategorySectionButtonsLeches.clickMCPCategorySectionButtonsLeches()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-592) Verificar que en Crear Pedidos en Categoria el boton Leches en Polvo y Larga Vida el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsLechesPolLarVida}) => {
    await test.step('Click en el boton Leches en Polvo y Larga Vida', async () => {
        await mCPCategorySectionButtonsLechesPolLarVida.clickMCPCategorySectionButtonsLechesPolLarVida()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-593) Verificar que en Crear Pedidos en Categoria el boton Libreria el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsLibreria}) => {
    await test.step('Click en el boton LLibreria', async () => {
        await mCPCategorySectionButtonsLibreria.clickMCPCategorySectionButtonsLibreria()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-594) Verificar que en Crear Pedidos en Categoria el boton Limpieza de Banio el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsLimpiezaBanio}) => {
    await test.step('Click en el boton Limpieza de Banio', async () => {
        await mCPCategorySectionButtonsLimpiezaBanio.clickMCPCategorySectionButtonsLimpiezaBanio()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-595) Verificar que en Crear Pedidos en Categoria el boton Limpieza de Cocina el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsLimpiezaCocina}) => {
    await test.step('Click en el boton Limpieza de Cocina', async () => {
        await mCPCategorySectionButtonsLimpiezaCocina.clickMCPCategorySectionButtonsLimpiezaCocina()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-596) Verificar que en Crear Pedidos en Categoria el boton Limpieza de la Ropa el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsLimpiezaRopa}) => {
    await test.step('Click en el boton Limpieza de la Ropa', async () => {
        await mCPCategorySectionButtonsLimpiezaRopa.clickMCPCategorySectionButtonsLimpiezaRopa()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-597) Verificar que en Crear Pedidos en Categoria el boton Limpieza de Pisos y Muebles el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsLimpiezaPisosMuebles}) => {
    await test.step('Click en el boton Limpieza de Pisos y Muebles', async () => {
        await mCPCategorySectionButtonsLimpiezaPisosMuebles.clickMCPCategorySectionButtonsLimpiezaPisosMuebles()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-598) Verificar que en Crear Pedidos en Categoria el boton Mantecas Margarinas y Levaduras el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsManteMargariLevaduras}) => {
    await test.step('Click en el boton Mantecas Margarinas y Levaduras', async () => {
        await mCPCategorySectionButtonsManteMargariLevaduras.clickMCPCategorySectionButtonsManteMargariLevaduras()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-599) Verificar que en Crear Pedidos en Categoria el boton Mermeladas y otros Dulces el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsMermeOtrosDulces}) => {
    await test.step('Click en el boton Mermeladas y otros Dulces', async () => {
        await mCPCategorySectionButtonsMermeOtrosDulces.clickMCPCategorySectionButtonsMermeOtrosDulces()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-600) Verificar que en Crear Pedidos en Categoria el boton P.A.S. el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsPAS}) => {
    await test.step('Click en el boton P.A.S.', async () => {
        await mCPCategorySectionButtonsPAS.clickMCPCategorySectionButtonsPAS()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-601) Verificar que en Crear Pedidos en Categoria el boton Pan Rallado y Rebozadores el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsPanRalladoRebozadores}) => {
    await test.step('Click en el boton Pan Rallado y Rebozadores', async () => {
        await mCPCategorySectionButtonsPanRalladoRebozadores.clickMCPCategorySectionButtonsPanRalladoRebozadores()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-602) Verificar que en Crear Pedidos en Categoria el boton Paniales el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsPaniales}) => {
    await test.step('Click en el boton Paniales', async () => {
        await mCPCategorySectionButtonsPaniales.clickMCPCategorySectionButtonsPaniales()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-603) Verificar que en Crear Pedidos en Categoria el boton Panificados el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsPanificados}) => {
    await test.step('Click en el boton Panificados', async () => {
        await mCPCategorySectionButtonsPanificados.clickMCPCategorySectionButtonsPanificados()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-604) Verificar que en Crear Pedidos en Categoria el boton Papeles Higienicos el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsPapelesHigienicos}) => {
    await test.step('Click en el boton Papeles Higienicos', async () => {
        await mCPCategorySectionButtonsPapelesHigienicos.clickMCPCategorySectionButtonsPapelesHigienicos()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-605) Verificar que en Crear Pedidos en Categoria el boton Para el Banio fel boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsParaBanio}) => {
    await test.step('Click en el boton Para el Banio', async () => {
        await mCPCategorySectionButtonsParaBanio.clickMCPCategorySectionButtonsParaBanio()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-606) Verificar que en Crear Pedidos en Categoria el boton Pastas Secas el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsPastasSecas}) => {
    await test.step('Click en el boton Pastas Secas', async () => {
        await mCPCategorySectionButtonsPastasSecas.clickMCPCategorySectionButtonsPastasSecas()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-607) Verificar que en Crear Pedidos en Categoria el boton Proteccion Femenina el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsProteccionFemenina}) => {
    await test.step('Click en el boton Proteccion Femenina', async () => {
        await mCPCategorySectionButtonsProteccionFemenina.clickMCPCategorySectionButtonsProteccionFemenina()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-608) Verificar que en Crear Pedidos en Categoria el boton Proteccion para Adultos el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsProteccionAdultos}) => {
    await test.step('Click en el boton Proteccion para Adultos', async () => {
        await mCPCategorySectionButtonsProteccionAdultos.clickMCPCategorySectionButtonsProteccionAdultos()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-609) Verificar que en Crear Pedidos en Categoria el boton Quesos el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsQuesos}) => {
    await test.step('Click en el boton Quesos', async () => {
        await mCPCategorySectionButtonsQuesos.clickMCPCategorySectionButtonsQuesos()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-610) Verificar que en Crear Pedidos en Categoria el boton Repelentes el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsRepelentes}) => {
    await test.step('Click en el boton Repelentes', async () => {
        await mCPCategorySectionButtonsRepelentes.clickMCPCategorySectionButtonsRepelentes()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-611) Verificar que en Crear Pedidos en Categoria el boton Reposteria y Postres el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsReposteriaPostres}) => {
    await test.step('Click en el boton Reposteria y Postres', async () => {
        await mCPCategorySectionButtonsReposteriaPostres.clickMCPCategorySectionButtonsReposteriaPostres()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-612) Verificar que en Crear Pedidos en Categoria el boton Rollos de Cocina y Servilletas el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsRollosCocinaServilletas}) => {
    await test.step('Click en el boton Rollos de Cocina y Servilletas', async () => {
        await mCPCategorySectionButtonsRollosCocinaServilletas.clickMCPCategorySectionButtonsRollosCocinaServilletas()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-613) Verificar que en Crear Pedidos en Categoria el boton Sal Aderezos y Saborizadores el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsSalAdereSaborizadores}) => {
    await test.step('Click en el boton Sal Aderezos y Saborizadores', async () => {
        await mCPCategorySectionButtonsSalAdereSaborizadores.clickMCPCategorySectionButtonsSalAdereSaborizadores()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-614) Verificar que en Crear Pedidos en Categoria el boton Seco el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsSeco}) => {
    await test.step('Click en el boton Seco', async () => {
        await mCPCategorySectionButtonsSeco.clickMCPCategorySectionButtonsSeco()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-615) Verificar que en Crear Pedidos en Categoria el boton Snacks el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsSnacks}) => {
    await test.step('Click en el boton Snacks', async () => {
        await mCPCategorySectionButtonsSnacks.clickMCPCategorySectionButtonsSnacks()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-616) Verificar que en Crear Pedidos en Categoria el boton Toallitas Humedas el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsToallitasHumedas}) => {
    await test.step('Click en el boton Toallitas Humedas', async () => {
        await mCPCategorySectionButtonsToallitasHumedas.clickMCPCategorySectionButtonsToallitasHumedas()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-617) Verificar que en Crear Pedidos en Categoria el boton Vinos el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsVinos}) => {
    await test.step('Click en el boton Vinos', async () => {
        await mCPCategorySectionButtonsVinos.clickMCPCategorySectionButtonsVinos()
    })
})
test('@qaz @Regression @Pedido (B2B-TC-618) Verificar que en Crear Pedidos en Categoria el boton Yerba el boton MOSTRAR MAS funciona correctamente', async ({mCPCategorySectionButtonsYerba}) => {
    await test.step('Click en el boton Yerba', async () => {
        await mCPCategorySectionButtonsYerba.clickMCPCategorySectionButtonsYerba()
    })
})

test.afterEach(async ({ pedidosBotonMostrarMas }) => {
    await test.step('Click en el botón MOSTRAR MAS hasta que quede inactivo', async () => {
        await pedidosBotonMostrarMas.clickPedidosBotonMostrarMas()
    })
})
