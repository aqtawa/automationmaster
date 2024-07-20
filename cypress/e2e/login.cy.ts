import MainPage from '../pom/MainPage';

describe('Login Tests', () => {
  const loginPage = new MainPage();

  it('should login successfully', () => {
    loginPage.visit();
    loginPage.login('test-login@mail.com', 'WYFo66SVbh!uw#D');
  });
});
