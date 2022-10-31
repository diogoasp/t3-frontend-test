import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import chromedriver from 'chromedriver';

const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('ProdutoTest', function() {
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
    await driver.get("http://localhost:3000/")
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("admin@gmail.com")
    await driver.findElement(By.id("senha")).click()
    await driver.findElement(By.id("senha")).sendKeys("123")
    await driver.findElement(By.id("login")).click()
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('goToProduto', async function() {
    {
      const elements = await driver.findElements(By.id("titulo"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.id("productTable"))
      assert(elements.length)
    }
  })
  it('deleteProduto', async function() {
    {
      const elements = await driver.findElements(By.id("1tr"))
      assert(elements.length)
    }
    await driver.findElement(By.id("1-excluir")).click()
    {
      const elements = await driver.findElements(By.id("1tr"))
      assert(!elements.length)
    }
  })
  it('editProduto', async function() {
    await driver.findElement(By.id("1-editar")).click()
    await driver.findElement(By.id("formBasicNome")).click()
    await driver.findElement(By.id("formBasicNome")).sendKeys("Monitor LG")
    await driver.findElement(By.id("enviar")).click()
    assert(await driver.findElement(By.id("1-nome")).getText() == "Monitor LG")
  })
  it('addProduto', async function() {
    await driver.findElement(By.linkText("Adicionar Produto")).click()
    await driver.findElement(By.id("formBasicNome")).click()
    await driver.findElement(By.id("formBasicNome")).sendKeys("TV")
    await driver.findElement(By.id("formBasicDescription")).click()
    await driver.findElement(By.id("formBasicDescription")).sendKeys("SmartTV 43")
    await driver.findElement(By.id("formBasicCost")).click()
    await driver.findElement(By.id("formBasicCost")).sendKeys("1899.90")
    await driver.findElement(By.id("enviar")).click()
    assert(await driver.findElement(By.id("3-nome")).getText() == "TV")
    assert(await driver.findElement(By.id("3-descricao")).getText() == "SmartTV 43")
    assert(await driver.findElement(By.id("3-valor")).getText() == "1899.9")
  })
})
