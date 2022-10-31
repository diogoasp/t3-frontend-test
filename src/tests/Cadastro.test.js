import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import chromedriver from 'chromedriver';

const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
describe('cadastroTests', function() {
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('goToCadastro', async function() {
    await driver.get("http://localhost:3000/")
    await driver.findElement(By.linkText("Cadastre-se!")).click()
    {
      const elements = await driver.findElements(By.id("titulo"))
      assert(elements.length)
    }
  })
  it('cadastroEmailWrong', async function() {
    await driver.get("http://localhost:3000/novo")
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("admin@gmail.com")
    await driver.findElement(By.id("senha")).click()
    await driver.findElement(By.id("senha")).sendKeys("123")
    await driver.findElement(By.id("senhaValidacao")).sendKeys("123")
    await driver.findElement(By.id("cadastrar")).click()
    {
      const elements = await driver.findElements(By.id("erro"))
      assert(elements.length)
    }
    assert(await driver.findElement(By.id("msg")).getText() == "Email em uso!")
  })
  it('cadastroPasswordWrong', async function() {
    await driver.get("http://localhost:3000/novo")
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("a@a.com")
    await driver.findElement(By.id("senha")).click()
    await driver.findElement(By.id("senha")).sendKeys("123")
    await driver.findElement(By.id("senhaValidacao")).sendKeys("321")
    await driver.findElement(By.id("cadastrar")).click()
    {
      const elements = await driver.findElements(By.id("erro"))
      assert(elements.length)
    }
    assert(await driver.findElement(By.id("msg")).getText() == "Senhas não coincidem.")
  })
  it('cadastroSuccess', async function() {
    await driver.get("http://localhost:3000/novo")
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("a@a.com")
    await driver.findElement(By.id("senha")).click()
    await driver.findElement(By.id("senha")).sendKeys("123")
    await driver.findElement(By.id("senhaValidacao")).sendKeys("123")
    await driver.findElement(By.id("cadastrar")).click()
    {
      const elements = await driver.findElements(By.id("erro"))
      assert(!elements.length)
    }
    {
      const elements = await driver.findElements(By.id("success"))
      assert(elements.length)
    }
  })

})
