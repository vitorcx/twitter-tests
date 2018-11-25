describe('Twitter page', function(){
    it('access aplication', function(){
        cy.visit('https://twitter.com/') 
    })
    it('Login test user', function(){
        cy.get('.StaticLoggedOutHomePage-buttonLogin').click()
        cy.get('div.clearfix.field>input.email-input').type('test33199455')
        cy.get('div.clearfix>input.js-password-field').type('cypresstest')
        cy.get('div.clearfix>button.submit').click()
    })
})