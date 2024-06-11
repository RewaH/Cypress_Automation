///<require='cypress'>
describe("register test cases",()=>{

it("register with valid data",()=>{
cy.visit("https://guneet.pythonanywhere.com/register")
cy.get("#username").type("Rewaa.Hamed")
cy.get("#password").type("Rewaa@12345")
cy.get("#confirm_password").type("Rewaa@12345")
cy.xpath("//input[@value='Register']").click()
cy.xpath("//p[contains(text(),'Registration successful. Please login.')]")
})


})