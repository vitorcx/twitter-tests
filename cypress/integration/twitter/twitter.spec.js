xdescribe('Twitter page', function(){
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

describe('User logged in features', function(){
    beforeEach(function(){
        cy.visit('https://twitter.com/') 
        cy.get('.StaticLoggedOutHomePage-buttonLogin').click()
        cy.get('div.clearfix.field>input.email-input').type('test33199455')
        cy.get('div.clearfix>input.js-password-field').type('cypresstest')
        cy.get('div.clearfix>button.submit').click()
     })

     xit('create new tweet', function(){
         cy.get('div#tweet-box-home-timeline').type('Test')
         cy.get('div.TweetBoxToolbar-tweetButton>button[innerText="Tweet"]').click()
     })

     it('access moments page', function(){
         cy.get('.moments>a').click()
         cy.get('.MomentsGuidePage-content').scrollIntoView()
     })
})