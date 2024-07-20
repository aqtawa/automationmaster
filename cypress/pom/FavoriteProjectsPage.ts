class FavoriteProjectsPage {

    unfollowProject() {
        cy.get(':nth-child(1) > .creators__item-buttons > .creators__item-button > .creators__item-button-icon').should('not.have.class', 'ng-star-inserte').click()
        cy.get(':nth-child(1) > .creators__item-buttons > .creators__item-button > .creators__item-button-icon').should('have.class', 'ng-star-inserted');
      }

}

export default FavoriteProjectsPage;