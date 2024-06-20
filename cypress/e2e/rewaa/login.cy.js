///<require='cypress'>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  });
describe("Login Test Cases",()=> {   //create test suite 
    let fd;

    before(function() {     //hook to read data from external file
        cy.fixture('login').then((data) => {
          fd = data;
        });
      });

it("user is able to login with right username & password",function(){               //create test case
cy.visit("https://guneet.pythonanywhere.com/")

fd.forEach(element => {   
cy.get("#username").clear().type(element.Username)
cy.get("#password").clear().type(element.Password)
cy.contains("input","Login").click()
 cy.xpath("//a[contains(text(),'Logout')]").click()

// cy.xpath("//a[contains(text(),'Home')]").click()
// cy.xpath("//a[contains(text(),'About')]").click()

});
});

 it("user is not able to login with wrong username & right password",function(){               //create test case
     cy.visit("https://guneet.pythonanywhere.com/")

     fd.forEach(element => {   
cy.get("#username").clear().type(element.WrongUsername)
cy.get("#password").clear().type(element.Password)
cy.contains("input","Login").click()
cy.get('[class="error"]').contains("Invalid username or password")

});
});
    it("user is not able to login with right username & wrong password",function(){               //create test case
        cy.visit("https://guneet.pythonanywhere.com/")
        fd.forEach(element=> {
            cy.get("#username").clear().type(element.Username)
            cy.get("#password").clear().type(element.WrongPassword)
            cy.contains("input","Login").click()
            cy.get('[class="error"]').contains("Invalid username or password")
            
            });
            });
    it("user is not able to login with wrong username & wrong password",function(){               //create test case
            cy.visit("https://guneet.pythonanywhere.com/")
            fd.forEach(element=> {
                cy.get("#username").clear().type(element.WrongUsername)
                cy.get("#password").clear().type(element.WrongPassword)
                cy.contains("input","Login").click()
                cy.get('[class="error"]').contains("Invalid username or password")
                
                });
                });
//             cy.get("#username").type("Rewaa123")
//             cy.get("#password").type("Rewaa@123456")
//             cy.contains("input","Login").click()
//            // cy.xpath("//a[contains(text(),'Home')]").click()
//             //cy.xpath("//a[contains(text(),'About')]").click()
//             cy.get('[class="error"]').contains("Invalid username or password")
//             })


            it("user is not able to login with numeric username & numeric password",function(){               //create test case
                cy.visit("https://guneet.pythonanywhere.com/")
                fd.forEach(element=> {
                    cy.get("#username").clear().type(element.NumericUsername)
                    cy.get("#password").clear().type(element.NumericPassword)
                    cy.contains("input","Login").click()
                    cy.get('[class="error"]').contains("Invalid username or password")
                    
                    });
                    });
//                 cy.get("#username").type("123@&%456")
//                 cy.get("#password").type("456789@123%^&")
//                 cy.contains("input","Login").click()
//                 cy.get('[class="error"]').contains("Invalid username or password")
//                 })
                
// })
});