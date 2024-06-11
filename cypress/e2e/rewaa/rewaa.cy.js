///<require='cypress'>
describe("RewaaFirstTestSuite",()=>{   //create test suite 

it("firtsTestCase",()=>{               //create test case
cy.visit("https://guneet.pythonanywhere.com/")
cy.get("#username").type("Rewaa")
cy.get("#password").type("Rewaa@123")
cy.contains("input","Login").click()
cy.xpath("//a[contains(text(),'Home')]").click()
cy.xpath("//a[contains(text(),'About')]").click()


})


})