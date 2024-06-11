///<require='cypress'>
describe("registeration test cases",()=>{

it("register with valid data",()=>{
cy.visit("https://guneet.pythonanywhere.com/register")
cy.get("#username").type("Rewaa.Hamed")
cy.get("#password").type("Rewaa@12345")
cy.get("#confirm_password").type("Rewaa@12345")
cy.xpath("//input[@value='Register']").click()
cy.xpath("//p[contains(text(),'Registration successful. Please login.')]")
})

it("user is not able to register with wrong confirm password",()=>{
    cy.visit("https://guneet.pythonanywhere.com/register")
    cy.get("#username").type("Rewaa.Hamed")
    cy.get("#password").type("Rewaa@12345")
    cy.get("#confirm_password").type("Rewaa@1234567")
    cy.xpath("//input[@value='Register']").click()
    cy.xpath("//p[contains(text(),'Passwords do not match.')]")
    })

  it("user is not able to register with password less than 8 characters",()=>{
    cy.visit("https://guneet.pythonanywhere.com/register")
    cy.get("#username").type("Rewaa.Hamed")
    cy.get("#password").type("Rew")
    cy.get("#confirm_password").type("Rew")
    cy.xpath("//input[@value='Register']").click()
    cy.get('[class="error"]').contains("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit")
})  

 it("user is not able to register with password with no uppercase letter",()=>{
        cy.visit("https://guneet.pythonanywhere.com/register")
        cy.get("#username").type("Rewaa.Hamed")
        cy.get("#password").type("Rew")
        cy.get("#confirm_password").type("Rew")
        cy.xpath("//input[@value='Register']").click()
        cy.get('[class="error"]').contains("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit")
    }) 

 it("user is not able to register with password with no lowercase letter",()=>{            
       cy.visit("https://guneet.pythonanywhere.com/register")
       cy.get("#username").type("Rewaa.Hamed")
       cy.get("#password").type("REW")
       cy.get("#confirm_password").type("REW")
       cy.xpath("//input[@value='Register']").click()
       cy.get('[class="error"]').contains("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit")
    })       


    it("user is not able to register with password with no digit",()=>{            
        cy.visit("https://guneet.pythonanywhere.com/register")
        cy.get("#username").type("Rewaa.Hamed")
        cy.get("#password").type("rew")
        cy.get("#confirm_password").type("rew")
        cy.xpath("//input[@value='Register']").click()
        cy.get('[class="error"]').contains("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit")
     })       
})