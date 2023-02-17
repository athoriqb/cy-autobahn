const { Before, Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

import signuppage from '../../pages/signUpPage.spec.js'

const generatorEmailUrl = 'https://generator.email'

Given('Generate email from mail site',() => {
    cy.origin(generatorEmailUrl ,() => {
        cy.visit('/')
        cy.get("span#email_ch_text").then(($el) => {
            const email = $el.text()
            Cypress.env('email',email)
            cy.log('Email :' + email)
        })
    })
})

When('user open autobahn signup page', () => {
    signuppage.visit()
})

When('input email', () => {
    signuppage.emailField.type(Cypress.env('email'))
})

When('input password', () => {
    cy.fixture("data.json").then((sample) => {
        datatest = sample
        signuppage.passwordField.type(datatest.password)
    })
})

When('click Sign Up button', () => {
    signuppage.signUpBtn.click()
})

When('user input info data', () => {
    cy.fixture("data.json").then((sample) => {
        datatest = sample
        signuppage.inputInfoData(datatest.firstName, datatest.lastName, datatest.industry, datatest.country, datatest.phone)
    })
})

When('click start using autobahn button', () => {
    signuppage.startUsingAutobahnBtn.click()
    signuppage.ResendLinkBtn.should('be.visible')
})

When('click verify account from mail box', () => {
    cy.origin(generatorEmailUrl ,() => {
        cy.wait(5000)
        cy.visit('/')
        cy.get("span#email_ch_text").should('be.visible')
        cy.contains('a','Verify Account').invoke('removeAttr','target').click()
    })
  })
  

Then('user should be redirected to home page', () => {
    cy.url().should('include','/report')
})