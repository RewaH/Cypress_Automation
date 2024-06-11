///<require='cypress'>
describe("RewaaFirstTestSuite",()=>{   //create test suite 

it("user is able to login with right username & password",()=>{               //create test case
cy.visit("https://guneet.pythonanywhere.com/")
cy.get("#username").type("Rewaa")
cy.get("#password").type("Rewaa@123")
cy.contains("input","Login").click()
cy.xpath("//a[contains(text(),'Home')]").click()
cy.xpath("//a[contains(text(),'About')]").click()

})
it("user is not able to login with wrong username & right password",()=>{               //create test case
    cy.visit("https://guneet.pythonanywhere.com/")
    cy.get("#username").type("Rewaa123")
    cy.get("#password").type("Rewaa@123")
    cy.contains("input","Login").click()
   // cy.xpath("//a[contains(text(),'Home')]").click()
    //cy.xpath("//a[contains(text(),'About')]").click()
    cy.get('[class="error"]').contains("Invalid username or password")
    })
    it("user is not able to login with right username & wrong password",()=>{               //create test case
        cy.visit("https://guneet.pythonanywhere.com/")
        cy.get("#username").type("Rewaa")
        cy.get("#password").type("Rewaa@123456")
        cy.contains("input","Login").click()
       // cy.xpath("//a[contains(text(),'Home')]").click()
        //cy.xpath("//a[contains(text(),'About')]").click()
        cy.get('[class="error"]').contains("Invalid username or password")
        })
    it("user is not able to login with wrong username & wrong password",()=>{               //create test case
            cy.visit("https://guneet.pythonanywhere.com/")
            cy.get("#username").type("Rewaa123")
            cy.get("#password").type("Rewaa@123456")
            cy.contains("input","Login").click()
           // cy.xpath("//a[contains(text(),'Home')]").click()
            //cy.xpath("//a[contains(text(),'About')]").click()
            cy.get('[class="error"]').contains("Invalid username or password")
            })


            it("user is not able to login with numeric username & numeric password",()=>{               //create test case
                cy.visit("https://guneet.pythonanywhere.com/")
                cy.get("#username").type("123@&%456")
                cy.get("#password").type("456789@123%^&")
                cy.contains("input","Login").click()
                cy.get('[class="error"]').contains("Invalid username or password")
                })
                
})