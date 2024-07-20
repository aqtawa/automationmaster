import MainPage from '../pom/MainPage';
import ProjectsPage from '../pom/ProjectsPage';
import ProjectDetailsPage from '../pom/ProjectDetailsPage';
import HeaderPage from '../pom/HeaderPage';

describe('Projects Search Tests', () => {
  const mainPage = new MainPage();
  const projectsPage = new ProjectsPage();
  const projectDetailsPage = new ProjectDetailsPage();
  const headerPage = new HeaderPage();

  beforeEach(() => {
    mainPage.visit();
    mainPage.login('test-login@mail.com', 'WYFo66SVbh!uw#D');
  });

  it.only('should search and open a project', () => {
    headerPage.clickProjectsButton();
    projectsPage.searchProject('привет');
    projectsPage.verifySearchResults();
    projectsPage.openProject();
  });


  it('check projects navigation', () => {
    mainPage.checkFavoritesProjectsNumber();
    mainPage.selectFirstPopularProject();
    projectDetailsPage.verifySections();
    projectDetailsPage.leaveComment('hi');
    projectDetailsPage.supportProjectCheck();
  });
});
