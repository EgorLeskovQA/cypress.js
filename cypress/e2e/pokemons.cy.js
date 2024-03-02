
describe('Покемоны', function () {
    
    it('Покупка аватара', function () {
        cy.visit('https://pokemonbattle.me/');
       cy.get(':nth-child(1) > .auth__input').type('leskov_0_0@mail.ru')
       cy.get('#password').type('Mars273')
       cy.get('.auth__button').click()
       cy.get('.header__btns > [href="/shop"]').click()
       cy.get(':nth-child(1) > .shop__button').click()
       cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996')
      cy.get('.pay__cardtypeimage').should('be.visible')
       cy.get(':nth-child(1) > .pay_base-input-v2').type('1027')
       cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Egor jdhfjhdjf')
cy.get('.pay-btn').click()
cy.get('#cardnumber').type('56456')
cy.get('.payment__submit-button').click()
cy.get('.payment__font-for-success').contains('Покупка прошла успешно')
        })
    })