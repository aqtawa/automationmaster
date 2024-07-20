class ProjectDetailsPage {
    verifySections() {
      cy.contains('Об авторе').should('exist');
      cy.contains('Блог').should('exist');
      cy.contains('Сообщество Автора проекта').should('exist');
      cy.contains('Поддерживать').should('exist');
    }
  
    leaveComment(comment: string) {
      cy.contains('Блог').click();
      cy.get('#mat-input-3').type(comment);
      cy.contains('Комментировать').click();
      cy.contains(comment).should('exist'); 
    }
  
    supportProjectCheck() {
      cy.contains('Поддерживать').click();
      cy.url().should('include', '/support');
    }
  
    followProject() {
      cy.get('.poster__button-icon').should('have.class', 'ng-star-inserted').click()
    }

    unfollowProject() {
      cy.get('.poster__button-icon').should('have.class', 'ng-star-inserte').click()
    }

    openFavoriteProjects() {
      cy.get(':nth-child(8) > .creator__menu__list__item__link > .creator__menu__list__item__link__text').should('contain', 'Избранные проекты').click()
    }

  }
  
  export default ProjectDetailsPage;
  