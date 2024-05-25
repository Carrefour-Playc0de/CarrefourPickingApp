import test from '../../../../../config/testManager'

test.beforeEach(async ({loginPage, activarGeolocalizacion, menuCrearPedidos, menuCrearPedidosBotonEnvio, menuCrearPedidosBotonAceptar, menuCrearPedidosSectionButtonsSeccion}) => {
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
    await test.step('Click en Crear Pedidos', async () => {
        await menuCrearPedidos.clickMenuCrearPedidos();
    })
    await test.step('Click en el boton Envio', async () => {
        await menuCrearPedidosBotonEnvio.clickCrearPedidosBotonEnvio();
    })
    await test.step('Click en el boton Aceptar', async () => {
        await menuCrearPedidosBotonAceptar.clickCrearPedidosBotonAceptar()
    })
    await test.step('Click en el boton Seccion', async () => {
        await menuCrearPedidosSectionButtonsSeccion.clickCrearPedidosSectionButtonsSeccion()
    })
})

test('@Regression @Pedido (B2B-TC-452) Verificar que en Crear Pedidos en Seccion el boton Almacen funciona correctamente', async ({menuCrearPedidosSeccionSectionButtonsAlmacen}) => {
    await test.step('Click en el boton Almacen', async () => {
        await menuCrearPedidosSeccionSectionButtonsAlmacen.clickCrearPedidosSeccionSectionButtonsAlmacen()
    })
})
test('@Regression @Pedido (B2B-TC-453) Verificar que en Crear Pedidos en Seccion el boton Bazar y Textil funciona correctamente', async ({menuCrearPedidosSeccionSectionButtonsBazarTextil}) => {
    await test.step('Click en el boton Bazar y Textil', async () => {
        await menuCrearPedidosSeccionSectionButtonsBazarTextil.clickCrearPedidosSeccionSectionButtonsBazarTextil()
    })
})
test('@Regression @Pedido (B2B-TC-454) Verificar que en Crear Pedidos en Seccion el boton Bebidas funciona correctamente', async ({menuCrearPedidosSeccionSectionButtonsBebidas}) => {
    await test.step('Click en el boton Bebidas', async () => {
        await menuCrearPedidosSeccionSectionButtonsBebidas.clickCrearPedidosSeccionSectionButtonsBebidas()
    })
})
test('@Regression @Pedido (B2B-TC-455) Verificar que en Crear Pedidos en Seccion el boton Desayuno y Merienda funciona correctamente', async ({menuCrearPedidosSeccionSectionButtonsDesayunoMerienda}) => {
    await test.step('Click en el boton Desayuno y Merienda', async () => {
        await menuCrearPedidosSeccionSectionButtonsDesayunoMerienda.clickCrearPedidosSeccionSectionButtonsDesayunoMerienda()
    })
})
test('@Regression @Pedido (B2B-TC-456) Verificar que en Crear Pedidos en Seccion el boton Fruta y Verdura funciona correctamente', async ({menuCrearPedidosSeccionSectionButtonsFrutasVerduras}) => {
    await test.step('Click en el boton Fruta y Verdura', async () => {
        await menuCrearPedidosSeccionSectionButtonsFrutasVerduras.clickMenuCrearPedidosSeccionSectionButtonsFrutasVerduras()
    })
})
test('@Regression @Pedido (B2B-TC-457) Verificar que en Crear Pedidos en Seccion el boton Lacteos y Productos Frescos funciona correctamente', async ({menuCrearPedidosSeccionSectionButtonsLacteosProductosFrescos}) => {
    await test.step('Click en el boton Lacteos y Productos Frescos', async () => {
        await menuCrearPedidosSeccionSectionButtonsLacteosProductosFrescos.clickCrearPedidosSeccionSectionButtonsLacteosProductosFrescos()
    })
})
test('@Regression @Pedido (B2B-TC-458) Verificar que en Crear Pedidos en Seccion el boton Limpieza funciona correctamente', async ({menuCrearPedidosSeccionSectionButtonsLimpieza}) => {
    await test.step('Click en el boton Limpieza', async () => {
        await menuCrearPedidosSeccionSectionButtonsLimpieza.clickMenuCrearPedidosSeccionSectionButtonsLimpieza()
    })
})
test('@Regression @Pedido (B2B-TC-459) Verificar que en Crear Pedidos en Seccion el boton Mundo Bebé funciona correctamente', async ({menuCrearPedidosSeccionSectionButtonsMundoBebe}) => {
    await test.step('Click en el boton Mundo Bebé', async () => {
        await menuCrearPedidosSeccionSectionButtonsMundoBebe.clickCrearPedidosSeccionSectionButtonsMundoBebe()
    })
})
test('@Regression @Pedido (B2B-TC-460) Verificar que en Crear Pedidos en Seccion el boton Panaderia funciona correctamente', async ({menuCrearPedidosSeccionSectionButtonsPanaderia}) => {
    await test.step('Click en el boton Panaderia', async () => {
        await menuCrearPedidosSeccionSectionButtonsPanaderia.clickCrearPedidosSeccionSectionButtonsPanaderia()
    })
})
test('@Regression @Pedido (B2B-TC-461) Verificar que en Crear Pedidos en Seccion el boton Perfumeria funciona correctamente', async ({menuCrearPedidosSeccionSectionButtonsPerfumeria}) => {
    await test.step('Click en el boton Perfumeria', async () => {
        await menuCrearPedidosSeccionSectionButtonsPerfumeria.clickCrearPedidosSeccionSectionButtonsPerfumeria()
    })
})
