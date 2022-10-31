import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import chromedriver from 'chromedriver';

const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('LoginTests', function() {
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
    await driver.get("http://localhost:3000/")
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('LoginTestFail', async function() {
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("a@a.com")
    await driver.findElement(By.id("senha")).click()
    await driver.findElement(By.id("senha")).sendKeys("123")
    await driver.findElement(By.id("login")).click()
    {
      const elements = await driver.findElements(By.id("erro"))
      assert(elements.length)
    }
  })

  it('LoginTestSuccess', async function() {
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("admin@gmail.com")
    await driver.findElement(By.id("senha")).click()
    await driver.findElement(By.id("senha")).sendKeys("123")
    await driver.findElement(By.id("login")).click()
    {
      const elements = await driver.findElements(By.id("userName"))
      assert(elements.length)
    }
    assert(await driver.findElement(By.id("userName")).getText() == "Olá, admin@gmail.com")
  })
})

