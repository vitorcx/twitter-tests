describe('Twitter page', function(){
    beforeEach(function(){
        cy.visit('https://twitter.com/') 
        cy.get('.StaticLoggedOutHomePage-buttonLogin').click()
        cy.get('div.clearfix.field>input.email-input').type('test33199455')
        cy.get('div.clearfix>input.js-password-field').type('cypresstest')
        cy.get('div.clearfix>button.submit').click()

    })
    it('follows Cypress_io user', function(){
        
    })
})