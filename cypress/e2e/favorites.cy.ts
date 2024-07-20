import MainPage from '../pom/MainPage';
import ProjectDetailsPage from '../pom/ProjectDetailsPage';
import FavoriteProjectsPage from '../pom/FavoriteProjectsPage';

describe('Favorites Management Tests', () => {
  const mainPage = new MainPage();
  const projectDetailsPage = new ProjectDetailsPage();
  const favoriteProjectsPage = new FavoriteProjectsPage();

  beforeEach(() => {
    mainPage.visit();
    mainPage.login('test-login@mail.com', 'WYFo66SVbh!uw#D');
  });

  it('should follow and unfollow a project', () => {
    mainPage.selectFirstPopularProject();
    projectDetailsPage.followProject();
    projectDetailsPage.openFavoriteProjects();
    favoriteProjectsPage.unfollowProject();
  });
});
