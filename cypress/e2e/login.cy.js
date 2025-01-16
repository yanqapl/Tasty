describe('Login Tests for AB Tasty', () => {
    beforeEach(() => {
        cy.fixture('users').as('users');
    });

    it('(TC-001) Successful login with valid email and password', function () { 
      cy.visit('/login');
      cy.get('#email').type(this.users.validUser.email);
      cy.get('#password').type(this.users.validUser.password);
      cy.get('button[type="submit"]').click();
//    cy.url().should('include', '/dashboard'); -> example
    });

    it('(TC-002) Login with invalid email', function () {
        cy.visit('/login');
        cy.get('#email').type(this.users.invalidUser.email);
        cy.get('#password').type(this.users.validUser.password);
        cy.get('button[type="submit"]').click();
        cy.get('#loginErrorMessage').should('contain', 'Please enter a valid email or password');
    });

    it('(TC-003) Login with invalid password', function () {
        cy.visit('/login');
        cy.get('#email').type(this.users.validUser.email);
        cy.get('#password').type(this.users.invalidUser.password);
        cy.get('button[type="submit"]').click();
        cy.get('#loginErrorMessage').should('contain', 'Please enter a valid email or password');
    });

    it('(TC-004) Trigger Captcha after three failed login attempts', function () {
        cy.visit('/login');
        for (let i = 0; i < 3; i++) {
          cy.get('#email').type(this.users.invalidUser.email);
          cy.get('#password').type(this.users.invalidUser.password);
          cy.get('button[type="submit"]').click();
          cy.get('#loginErrorMessage').should('contain', 'Please enter a valid email or password');
        }
        cy.get('.captcha').should('be.visible');
    });

    it('(TC-005) Login via SSO', function () {
      cy.visit('/login');
      cy.get('#email').type('sso_user@example.com');
      cy.get('[data-testid="ssoLoginButton"]').click(); 
      cy.url().should('include', '/ssologin');
    });

    it('(TC-007) Forgot password link redirects to recovery', function () {
      cy.visit('/login');
      cy.get('[data-testid="resetPasswordLink"] > a').click(); 
      cy.url().should('include', '/reset-password');
    });

    it('(TC-008) Responsive design check for mobile', function () {
      cy.viewport(768, 1024);
      cy.visit('/login');
      cy.get('.sc-gEvEer').should('be.visible').and('have.css', 'width').then((width) => {
        expect(parseInt(width)).to.be.greaterThan(750);
      });
    });

    // it('(TC-011)Mocks Google login response', () => {
    //   cy.intercept('POST', '/api/auth/google', {
    //     statusCode: 200,
    //     body: {
    //       success: true,
    //       user: {
    //         email: 'testuser@gmail.com',
    //         name: 'Test User',
    //       },
    //     },
    //   }).as('googleLogin');
    
    //   cy.visit('/login');
    //   cy.get('button.google-login').click(); 
    //   cy.wait('@googleLogin'); 
    //   cy.url().should('include', '/dashboard');
    // });


// Tests can be modified if there is an API for getting text in different languages
    
describe('Localization Tests', () => {
    it('(TC-012)Localization check - French', function () {
      cy.visit('/login?lang=fr');
      cy.get('h1').should('contain', 'Connexion');
      cy.get('#email').invoke('attr', 'placeholder').should('contain', 'Votre email'); 
      cy.get('#password').invoke('attr', 'placeholder').should('contain', 'Votre mot de passe'); 
      cy.get('button[type="submit"]').should('contain', 'Se connecter');
    });

    it('(TC-013)Localization check - Spanish', function () {
      cy.visit('/login?lang=es'); 
      cy.get('h1').should('contain', 'Iniciar sesión'); 
      cy.get('#email').invoke('attr', 'placeholder').should('contain', 'Tu correo electrónico'); 
      cy.get('#password').invoke('attr', 'placeholder').should('contain', 'Tu contraseña'); 
      cy.get('button[type="submit"]').should('contain', 'Acceder');
    });

    it('(TC-014)Localization check - German', function () {
      cy.visit('/login?lang=de'); 
      cy.get('h1').should('contain', 'Anmelden'); 
      cy.get('#email').invoke('attr', 'placeholder').should('contain', 'Ihre E-Mail'); 
      cy.get('#password').invoke('attr', 'placeholder').should('contain', 'Ihr Passwort'); 
      cy.get('button[type="submit"]').should('contain', 'Einloggen');
    });
  });

});