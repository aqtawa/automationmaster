class MainPage {
    visit() {
      cy.visit('https://stage.skies.land/');
      cy.get('.top-menu__list-item--to-right > .top-menu__list-item-link').contains('Войти').click()
    }
  
    enterEmail(email: string) {
      cy.get('input[name="email"]').type(email);
    }
  
    enterPassword(password: string) {
      cy.get('input[name="password"]').type(password);
    }
  
    submit() {
      cy.get('.login-window__submit-button').click();
    }
  
    login(email: string, password: string) {
      this.enterEmail(email);
      this.enterPassword(password);
      this.submit();
      cy.wait(100)
    }

    selectFirstPopularProject() {
      cy.get(':nth-child(1) > .creator-badge > .creator-badge__details > .creator-badge__name > .creator-badge__name__link > span').click();
    }

    checkFavoritesProjectsNumber() {
      cy.get(':nth-child(6) > .creator-badge').should('exist')
      cy.get(':nth-child(7) > .creator-badge').should('not.exist')
    }

    
  }
  
  export default MainPage;
  