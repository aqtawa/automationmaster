class HeaderPage {
    openProfile () {
        cy.get('.top-menu__list-item--to-right > .top-menu__list-item-link').click()
    }

    clickProjectsButton() {
        cy.get(':nth-child(2) > .top-menu__list-item-link').click();
    }

}

export default HeaderPage;