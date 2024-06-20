///<require='cypress'>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  });
  
  describe('Registration Tese Cases', () => {
    let fd;
  
    before(function() {     //hook to read data from external file
      cy.fixture('register').then((data) => {
        fd = data;
      });
    });
  
    it('register with valid data', function() { // test case
      cy.visit('https://guneet.pythonanywhere.com/register');
     //  cy.wait(5000)

      fd.forEach(element => {
        cy.get("#username").clear().type(element.Username);
        cy.get("#password").clear().type(element.Password);
        cy.get("#confirm_password").clear().type(element.ConfirmPassword);

        cy.get('input[type="submit"]').click();
        cy.xpath("//p[contains(text(),'Registration successful. Please login.')]")
       // cy.get("p[class='error']").contains("Invalid username or password.");
      });
    });


    it('user is not able to register with wrong confirm password', function() {
        cy.visit("https://guneet.pythonanywhere.com/register");
        cy.wait(5000);

        fd.forEach(element => {
            cy.get("#username").clear().type(element.Username);
            cy.get("#password").clear().type(element.Password);
            cy.get("#confirm_password").clear().type(element.InvalidConfirmPassword);
    
            cy.get('input[type="submit"]').click();
          //  cy.xpath("//p[contains(text(),'Registration successful. Please login.')]")
            cy.get("p[class='error']").contains("Passwords do not match.");
    });
  });

  it("user is not able to register with password less than 8 characters", function(){
    cy.visit("https://guneet.pythonanywhere.com/register")
    fd.forEach(element => {
        cy.get("#username").clear().type(element.Username);
        cy.get("#password").clear().type(element.InvalidPasswordLessThan8Charecters);
        cy.get("#confirm_password").clear().type(element.InvalidPasswordLessThan8Charecters);

        cy.get('input[type="submit"]').click();
        cy.get('[class="error"]').contains("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit")
});
});


 it("user is not able to register with password with no uppercase letter",function(){
        cy.visit("https://guneet.pythonanywhere.com/register")
        fd.forEach(element => {
            cy.get("#username").clear().type(element.Username);
            cy.get("#password").clear().type(element.InvalidPasswordWithNoUppercaseLetter);
            cy.get("#confirm_password").clear().type(element.InvalidPasswordWithNoUppercaseLetter);
    
            cy.get('input[type="submit"]').click();
            cy.get('[class="error"]').contains("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit")
    });
    });


 it("user is not able to register with password with no lowercase letter",function(){            
       cy.visit("https://guneet.pythonanywhere.com/register")
       fd.forEach(element => {
        cy.get("#username").clear().type(element.Username);
        cy.get("#password").clear().type(element.InvalidPasswordWithNoLowercaseLetter);
        cy.get("#confirm_password").clear().type(element.InvalidPasswordWithNoLowercaseLetter);

        cy.get('input[type="submit"]').click();
        cy.get('[class="error"]').contains("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit")
});
});      

    it("user is not able to register with password with no digit",function(){            
        cy.visit("https://guneet.pythonanywhere.com/register")
        fd.forEach(element => {
            cy.get("#username").clear().type(element.Username);
            cy.get("#password").clear().type(element.InvalidPasswordWithNoDigit);
            cy.get("#confirm_password").clear().type(element.InvalidPasswordWithNoDigit);
    
            cy.get('input[type="submit"]').click();
            cy.get('[class="error"]').contains("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit")
    });
    });
});