import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import chromedriver from 'chromedriver';
import { fireEvent } from '@testing-library/react';


const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const r = (Math.random() + 1).toString(36).substring(7);

describe('ProdutoTest', function() {
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    driver.manage().window().maximize();
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
    await driver.wait(until.elementLocated(By.id("titulo")), 30000)
    await driver.wait(until.elementLocated(By.id("productTable")), 30000)
  })
  it('addProduto', async function() {
    await driver.wait(until.elementLocated(By.id("adicionar")), 30000)
    await driver.findElement(By.id("adicionar")).click()
    await driver.findElement(By.id("formBasicNome")).click()
    await driver.findElement(By.id("formBasicNome")).sendKeys(r)
    await driver.findElement(By.id("formBasicDescription")).click()
    await driver.findElement(By.id("formBasicDescription")).sendKeys(r)
    await driver.findElement(By.id("formBasicCost")).click()
    await driver.findElement(By.id("formBasicCost")).sendKeys("0000.00")
    await driver.findElement(By.id("enviar")).click()
    await driver.wait(until.elementLocated(By.xpath("//tr[last()]/td")), 30000)
    assert(await driver.findElement(By.xpath("//tr[last()]/td")).getText() == r)
  })
  it('editProduto', async function() {
    await driver.wait(until.elementLocated(By.xpath("//tr[last()]/td")), 30000)
    {
      const elements = await driver.findElements(By.xpath("//tr[last()]/td[last()]/a"))
      assert(elements.length)
    }
    assert(await driver.findElement(By.xpath("//tr[last()]/td")).getText() == r)
    const edit = await driver.findElement(By.xpath("//tr[last()]/td[last()]/a"))
    await edit.click()
    await driver.wait(until.elementLocated(By.xpath("//h2")), 30000)
    await driver.findElement(By.id("formBasicNome")).click()
    await driver.findElement(By.id("formBasicNome")).sendKeys(r+"-new")
    await driver.findElement(By.id("enviar")).click()
    await driver.wait(until.elementLocated(By.xpath("//tr[last()]/td")), 30000)
    assert(await driver.findElement(By.xpath("//tr[last()]/td")).getText() == r+"-new")
  })
  it('deleteProduto', async function() {
    await driver.wait(until.elementLocated(By.xpath("//tr[last()]/td")), 30000)
    {
      const elements = await driver.findElements(By.xpath("//tr[last()]/td[last()]/button"))
      assert(elements.length)
    }
    assert(await driver.findElement(By.xpath("//tr[last()]/td")).getText() == r+"-new")

    await driver.findElement(By.xpath("//tr[last()]/td[last()]/button")).click()
    {
      const elements = await driver.findElement(By.xpath("//tr[last()]/td")).getText() == r+"-new"
      assert(!elements.length)
    }
  })
})
