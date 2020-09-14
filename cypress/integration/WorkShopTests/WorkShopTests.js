/// <reference types="cypress" />
import WorkshopPage from '../../page_objects/WorkshopPage.js'

var discount = 1.0
var workshopPage = new WorkshopPage
before('Executes once - login', ()=>{
    cy.visit('https://lunch.devbstaging.com/login-password')
    workshopPage.getUsername().type('bernardas@red.vln') 
    workshopPage.getPassword().type('Tomato001')
    cy.get('.v-btn').click();
    cy.wait(3000)
    cy.visit('https://lunch.devbstaging.com/dishes/wednesday/Lijanos%20tiek%C4%97jas%204%20green')
}) 

it('Should order two different soups', ()=>{ 
    cy.get(':nth-child(2) > .layout > :nth-child(1) > .v-card__text > div').click()
    cy.get(':nth-child(2) > .layout > :nth-child(2) > .v-card__text').click()
    cy.get('.orders-list-button').click()
    cy.get(':nth-child(1) > :nth-child(1) > .v-chip').should('be.visible')
    cy.get(':nth-child(2) > :nth-child(1) > .v-chip').should('be.visible')  
})

it('Should order main and soup', ()=>{ 
    cy.get('.v-chip__content > .v-icon').click()
    cy.get('.orders-list-button').click()
    cy.get(':nth-child(2) > .layout > :nth-child(1) > .v-card__text > div').click()
    cy.get(':nth-child(4) > .layout > :nth-child(1) > .v-card__text').click()
    cy.get('.orders-list-button').click()
    cy.get(':nth-child(1) > :nth-child(1) > .v-chip').should('be.visible')
    cy.get(':nth-child(2) > :nth-child(1) > .v-chip').should('be.visible')  
})