import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import chromedriver from 'chromedriver';
import { fireEvent } from '@testing-library/react';


const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const r = (Math.random() + 1).toString(36).substring(7);

describe('CarrinhooTest', function() {
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    driver.manage().window().maximize();
    vars = {}
    jest.setTimeout(15000)
    await driver.get("http://localhost:3000/")
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("usuario@comum.com")
    await driver.findElement(By.id("senha")).click()
    await driver.findElement(By.id("senha")).sendKeys("123")
    await driver.findElement(By.id("login")).click()
  })
  afterEach(async function() {
    await driver.quit();
  })  
  it('goToCarrinho', async function() {
    await driver.wait(until.elementLocated(By.id("carrinho")), 30000)
    await driver.findElement(By.id("carrinho")).click()
    assert(await driver.findElement(By.xpath("//h2")).getText() == "Carrinho de compras")
    await driver.wait(until.elementLocated(By.id("carrinhoTable")), 30000)
  })
  it('addProdutoCarrinho', async function() {
    await driver.wait(until.elementLocated(By.id("productTable")), 30000)

    await driver.wait(until.elementLocated(By.xpath("//tr/td")), 30000)
    {
      const elements = await driver.findElements(By.xpath("//tr/td"))
      assert(elements.length)
    }
    const item = await driver.findElement(By.xpath("//tr/td")).getText();
    await driver.wait(until.elementLocated(By.xpath("//tr/td[last()]/button")), 30000).click()
    await driver.wait(until.elementLocated(By.id("carrinho")), 30000)
    await driver.findElement(By.id("carrinho")).click()
    assert(await driver.findElement(By.xpath("//h2")).getText() == "Carrinho de compras")
    await driver.wait(until.elementLocated(By.id("carrinhoTable")), 30000)
    assert(await driver.findElement(By.xpath("//tr[last()]/td")).getText() == item)
  })
  it('removeProdutoCarrinho', async function() {
    await driver.wait(until.elementLocated(By.id("productTable")), 30000)
    await driver.wait(until.elementLocated(By.id("carrinho")), 30000)
    await driver.findElement(By.id("carrinho")).click()
    assert(await driver.findElement(By.xpath("//h2")).getText() == "Carrinho de compras")
    await driver.wait(until.elementLocated(By.id("carrinhoTable")), 30000)
    const elements = await driver.findElements(By.xpath("//tr"))
    assert(elements.length>0)
    await driver.wait(until.elementLocated(By.xpath("//tr[last()]/td[last()]/button")), 30000).click()
    await driver.wait(until.elementLocated(By.id("carrinho")), 30000).click()
    {
      const elementsAtt = await driver.findElements(By.xpath("//tr"))
      await assert(elementsAtt.length < elements.length)
    }
  })
 
})
