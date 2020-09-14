class WorkshopPage{  
    getMonday(){
        return cy.get(':nth-child(1) > .v-list__group__header > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title')
    }
    getTuesday(){
        return cy.get(':nth-child(2) > .v-list__group__header > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title')
    }
    getWednesday(){
        return cy.get(':nth-child(3) > .v-list__group__header > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title')
    }
    getThursday(){
        return cy.get(':nth-child(4) > .v-list__group__header > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title')
    }
    getFriday(){
        return cy.get(':nth-child(5) > .v-list__group__header > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title')
    }
    getLunchEditing(){
        return cy.get(':nth-child(3) > :nth-child(1) > .v-list__tile')
    }
    getDiscountButton(){
        return cy.get('.mt-3 > .v-list > :nth-child(3) > .v-list__tile > .v-list__tile__action')
    }
    getDiscountPrice(){
        return cy.get('.v-list__tile__title > input')
    }
    getUsername(){
        return cy.get(':nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot > input')
    }
    getPassword(){
        return cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot > input')
    }
    getThursdayOrders(){
        return cy.visit('https://lunch.devbstaging.com/dishes/wednesday/Lijanos%20tiek%C4%97jas%204%20green')
    }
     
}
export default WorkshopPage