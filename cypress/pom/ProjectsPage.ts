class ProjectsPage {
    navigateToProjects() {
      cy.contains('Проекты').click();
    }
  
    searchProject(query: string) {
      cy.get('.search-panel__form').type(`${query}{enter}`);
      cy.get('.button_search').click();
    }
  
    verifySearchResults() {
      cy.contains('Проекты').should('have.length', 1);
      cy.contains('Посты').should('have.length', 1);
    }
  
    openProject() {
      cy.contains('проект').click();
    }
  }
  
  export default ProjectsPage;
  