
describe('Авторизация', function () {
    
    it('Верный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').contains('Авторизация прошла успешно')
         })
    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
      cy.get('#forgotEmailButton').click()
      cy.get('#mailForgot').type('german@dolnikov.ru')
      cy.get('#restoreEmailButton').click()
      cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
         cy.get('#exitMessageButton > .exitIcon').should('be.visible')
         })
  it('Верный логин не верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio11')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').contains('Такого логина или пароля нет')
       cy.get('#exitMessageButton > .exitIcon').should('be.visible')
         })
it('Не верный логин верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germ1an@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').contains('Такого логина или пароля нет')
       cy.get('#exitMessageButton > .exitIcon').should('be.visible')
         })
it('Не верный логин верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
         })
it('Регистрозависимость', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').contains('Авторизация прошла успешно')
          cy.get('#exitMessageButton > .exitIcon').should('be.visible')
         })
})


describe('Покемоны', function () {
    
    it('Покупка аватара', function () {
        cy.visit('https://pokemonbattle.me/');
       cy.get(':nth-child(1) > .auth__input').type('leskov_0_0@mail.ru')
       cy.get('#password').type('Mars273')
       cy.get('.auth__button').click()
       
         })
    })