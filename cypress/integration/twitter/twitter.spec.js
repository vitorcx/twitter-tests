describe('Twitter page', function(){
    it('should access aplication', function(){
        cy.visit('https://twitter.com/') 
    })
    it('should login test user', function(){
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

     it('should create new tweet', function(){
         cy.get('div#tweet-box-home-timeline').type('Test')
         cy.get('div#timeline>div.timeline-tweet-box>div>form>div.TweetBoxToolbar>div.TweetBoxToolbar-tweetButton>button').click()
     })

     it('should access moments page', function(){
         cy.get('.moments>a').click()
         cy.get('.MomentsGuidePage-content').scrollIntoView()
     })
})