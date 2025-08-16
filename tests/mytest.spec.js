const {test, expect} = require('@playwright/test')


test('Registro Exitoso', async({page}) => {
 
    await page.goto('http://opencart.abstracta.us/');
    await page.locator('//*[@id="top-links"]/ul/li[2]/a').click();
    await page.locator('//*[@id="top-links"]/ul/li[2]/ul/li[1]').click();
    await page.locator('//*[@id="details-button"]').click();
    await page.locator('//*[@id="proceed-link"]').click ();
    await expect(page.locator('//div[contains(@class,  \'col-sm-9\')]')).toBeVisible()
    await page.waitForTimeout(5000);
    //Ingreso de informacion personal
    await page.locator('//*[@id="input-firstname"]').fill('SOLEDAD')
    await page.locator('//*[@id="input-lastname"]').fill('LOPEZ')
    await page.locator('//*[@id="input-email"]').fill('SOLEDAD.LOPEZ@gmail.com')
    await page.locator('//*[@id="input-telephone"]').fill('5585901255')
    //ingreso de password
    await page.locator('//*[@id="input-password"]').fill('Temporal33')
    await page.locator('//*[@id="input-confirm"]').fill('Temporal33')
    //cuestionario Newsletter
    await page.locator('//*[@id="content"]/form/fieldset[3]/div/div/label[2]/input').click();
    //aviso de privacidad
    await page.locator('//*[@id="content"]/form/div/div/input[1]').click();
    //Click en continue
    await page.locator('//*[@id="content"]/form/div/div/input[2]').click();
    
    
    //escenario esperado satisfactorio
    await expect(page.locator('//*[@id="content"]/p[1]')).toBeVisible()
    await page.waitForTimeout(5000);

    //continuar a la pantalla de account
    await page.locator('//*[@id="content"]/div/div/a').click();
    await expect(page.locator('//*[@id="content"]/h2[1]')).toBeVisible()
    await page.waitForTimeout(5000);

    page.pause()

});

test('Registro Fallido correo existente', async({page}) => {
 
    await page.goto('http://opencart.abstracta.us/');
    await page.locator('//*[@id="top-links"]/ul/li[2]/a').click();
    await page.locator('//*[@id="top-links"]/ul/li[2]/ul/li[1]').click();
    await page.locator('//*[@id="details-button"]').click();
    await page.locator('//*[@id="proceed-link"]').click ();
    await expect(page.locator('//div[contains(@class,  \'col-sm-9\')]')).toBeVisible();
    await page.waitForTimeout(5000);
    //Ingreso de informacion personal
    await page.locator('//*[@id="input-firstname"]').fill('JOSE');
    await page.locator('//*[@id="input-lastname"]').fill('LOPEZ');
    await page.locator('//*[@id="input-email"]').fill('JOSE.LOPEZ@gmail.com');
    await page.locator('//*[@id="input-telephone"]').fill('5585901201');
    //ingreso de password
    await page.locator('//*[@id="input-password"]').fill('Temporal33');
    await page.locator('//*[@id="input-confirm"]').fill('Temporal33');
    //cuestionario Newsletter
    await page.locator('//*[@id="content"]/form/fieldset[3]/div/div/label[2]/input').click();
    //aviso de privacidad
    await page.locator('//*[@id="content"]/form/div/div/input[1]').click();
    //Click en continue
    await page.locator('//*[@id="content"]/form/div/div/input[2]').click();
    
    
    //escenario esperado satisfactorio
    await expect(page.locator('//*[@id="account-register"]/div[1]')).toBeVisible();
    await page.waitForTimeout(5000);


    page.pause()

});

test('login Exitoso', async({page}) => {

    await page.goto('http://opencart.abstracta.us/');
    await page.locator('//*[@id="top-links"]/ul/li[2]/a').click();
    await page.locator('//*[@id="top-links"]/ul/li[2]/ul/li[2]/a').click();
    await page.locator('//*[@id="details-button"]').click();
    await page.locator('//*[@id="proceed-link"]').click ();
    await expect(page.locator('//*[@id="content"]/div/div[2]/div/h2')).toBeVisible
    //ingreso usuario y contraseña
    await page.locator('//*[@id="input-email"]').fill('JOSE.LOPEZ@gmail.com');
    await page.locator('//*[@id="input-password"]').fill('Temporal33');
    await page.locator('//*[@id="content"]/div/div[2]/div/form/input').click();
    //pantalla account
    await expect(page.locator('//*[@id="content"]/h2[1]')).toBeVisible()
    await page.waitForTimeout(5000);

    page.pause()

});

test('login fallido contraseña invalida', async({page}) => {

    await page.goto('http://opencart.abstracta.us/');
    await page.locator('//*[@id="top-links"]/ul/li[2]/a').click();
    await page.locator('//*[@id="top-links"]/ul/li[2]/ul/li[2]/a').click();
    await page.locator('//*[@id="details-button"]').click();
    await page.locator('//*[@id="proceed-link"]').click ();
    await expect(page.locator('//*[@id="content"]/div/div[2]/div/h2')).toBeVisible
    //ingreso usuario y contraseña
    await page.locator('//*[@id="input-email"]').fill('JOSE.LOPEZ@gmail.com');
    await page.locator('//*[@id="input-password"]').fill('sjhdajksd');
    await page.locator('//*[@id="content"]/div/div[2]/div/form/input').click();
    //pantalla account
    await expect(page.locator('//*[@id="account-login"]/div[1]')).toBeVisible()
    await page.waitForTimeout(5000);

    page.pause()

});


test('login fallido usuario invalido', async({page}) => {

    await page.goto('http://opencart.abstracta.us/');
    await page.locator('//*[@id="top-links"]/ul/li[2]/a').click();
    await page.locator('//*[@id="top-links"]/ul/li[2]/ul/li[2]/a').click();
    await page.locator('//*[@id="details-button"]').click();
    await page.locator('//*[@id="proceed-link"]').click ();
    await expect(page.locator('//*[@id="content"]/div/div[2]/div/h2')).toBeVisible
    //ingreso usuario y contraseña
    await page.locator('//*[@id="input-email"]').fill('JOSELOPEZgmail.com')
    await page.locator('//*[@id="input-password"]').fill('sjhdajksd')
    await page.locator('//*[@id="content"]/div/div[2]/div/form/input').click();
    //pantalla account
    await expect(page.locator('//*[@id="account-login"]/div[1]')).toBeVisible();
    await page.waitForTimeout(5000);

    page.pause()

});


test('Recuperacion de contraseña', async({page}) => {

    await page.goto('http://opencart.abstracta.us/');
    await page.locator('//*[@id="top-links"]/ul/li[2]/a').click();
    await page.locator('//*[@id="top-links"]/ul/li[2]/ul/li[2]/a').click();
    await page.locator('//*[@id="details-button"]').click();
    await page.locator('//*[@id="proceed-link"]').click ();
    await expect(page.locator('//*[@id="content"]/div/div[2]/div/h2')).toBeVisible
    //recuperacion de contraseña
    await page.locator('//*[@id="content"]/div/div[2]/div/form/div[2]/a').click();
    await expect(page.locator('//*[@id="content"]/form/fieldset/div/label')).toBeVisible
    await page.locator('//*[@id="input-email"]').fill('RAUL.LOPEZ@gmail.com')
    await page.locator('//*[@id="content"]/form/div/div[2]/input').click();
    await expect(page.locator('//*[@id="account-login"]/div[1]')).toBeVisible();
    await page.waitForTimeout(5000);

    page.pause()

});

test('Compra en el carrito your strore', async({page}) => {

    await page.goto('http://opencart.abstracta.us/');
    await page.locator('//*[@id="top-links"]/ul/li[2]/a').click();
    await page.locator('//*[@id="top-links"]/ul/li[2]/ul/li[2]/a').click();
    await page.locator('//*[@id="details-button"]').click();
    await page.locator('//*[@id="proceed-link"]').click ();
    await expect(page.locator('//*[@id="content"]/div/div[2]/div/h2')).toBeVisible
    //ingreso usuario y contraseña
    await page.locator('//*[@id="input-email"]').fill('SOLEDAD.LOPEZ@gmail.com');
    await page.locator('//*[@id="input-password"]').fill('Temporal33');
    await page.locator('//*[@id="content"]/div/div[2]/div/form/input').click();
    await expect(page.locator('//*[@id="content"]/h2[1]')).toBeVisible()
    //ingresar a la seccion de laptops and notebooks
    await page.locator('//*[@id="menu"]/div[2]/ul/li[2]/a').click();
    await page.locator('//*[@id="menu"]/div[2]/ul/li[2]/div/a').click();
    await expect(page.locator('//*[@id="content"]/h2')).toBeVisible();
    //agregar macbook pro 
    await page.locator('//*[@id="content"]/div[4]/div[4]/div/div[2]/div[2]/button[1]').click();
    await expect(page.locator('//*[@id="product-category"]/div[1]/a[1]')).toBeVisible();
    //Buscar y agregar tablet Samsung Galaxy 
    await page.locator('//*[@id="search"]/input').fill('Samsung Galaxy Tab 10.1');
    await page.locator('//*[@id="search"]/span/button').click();
    await expect(page.locator('//*[@id="content"]/div[3]/div/div/div[2]/div[1]/h4/a')).toBeVisible();
    await page.locator('//*[@id="content"]/div[3]/div/div/div[2]/div[2]/button[1]').click();
    await expect(page.locator('//*[@id="product-search"]/div[1]/a[1]')).toBeVisible();
    //Carrito de compras
    await page.locator('//*[@id="cart"]/button').click();
    await expect(page.locator("//*[contains(@class, 'text-right') and contains(text(), '$2,000.00')]")).toBeVisible();
    await expect(page.locator('//*[@id="cart"]/ul/li[1]/table/tbody/tr[2]/td[2]')).toBeVisible();
    await page.locator('//*[@id="cart"]/ul/li[1]/table/tbody/tr[1]/td[5]/button').click();
    //Eliminar macbook pro 
    await page.locator('//*[@id="cart"]/button').click();
    //Agregar una tablet Samsung galaxy 
    await page.locator('//*[@id="cart"]/ul/li[2]/div/p/a[1]').click();
    await expect(page.locator('//*[@id="content"]')).toBeVisible();
    await page.locator('//*[@id="content"]/form/div/table/tbody/tr/td[4]/div/input').fill('2');
    await page.locator('//*[@id="content"]/form/div/table/tbody/tr/td[4]/div/span/button[1]').click();
    await expect(page.locator('//*[@id="content"]/div[2]/div/table/tbody/tr[2]/td[2]')).toBeVisible();
    //Completar compra
    await page.locator('//*[@id="content"]/div[3]/div[2]/a').click();
    await page.locator('//*[@id="input-payment-firstname"]').fill('FRANCISCO');
    await page.locator('//*[@id="input-payment-lastname"]').fill('LOPEZ');
    await page.locator('//*[@id="input-payment-company"]').fill('LUX123');
    await page.locator('//*[@id="input-payment-address-1"]').fill('RIO LUNA');
    await page.locator('//*[@id="input-payment-address-2"]').fill('#2');
    await page.locator('//*[@id="input-payment-city"]').fill('CDMX');
    await page.locator('//*[@id="input-payment-postcode"]').fill('06600');
    await page.getByLabel('Country').selectOption('138');
    await page.getByLabel('Region / State').selectOption('2153');
    await page.locator('//*[@id="button-payment-address"]').click();
    //Delivery details
    await page.locator('//*[@id="button-shipping-address"]').click();
    //Delivery method
    await page.locator('//*[@id="collapse-shipping-method"]/div/div[1]').click();
    await page.locator('//*[@id="collapse-shipping-method"]/div/p[4]/textarea').fill('Prueba Fer');
    await page.locator('//*[@id="button-shipping-method"]').click();
    //payment method
    await page.locator('//*[@id="collapse-payment-method"]/div/p[3]/textarea').fill('TDC');
    await page.locator('//*[@id="collapse-payment-method"]/div/div[3]/div/input[1]').click();
    await page.locator('//*[@id="button-payment-method"]').click();
    //Confirm orden
    await expect(page.locator("//*[contains(@class, 'text-right') and contains(text(), '404.98')]")).toBeVisible();
    await page.locator('//*[@id="button-confirm"]').click();
    await expect(page.locator('//*[@id="content"]/h1')).toBeVisible();

page.pause()

});