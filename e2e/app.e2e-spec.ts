import { SearchUsersPage } from './app.po';

describe('search-users App', function() {
  let page: SearchUsersPage;

  beforeEach(() => {
    page = new SearchUsersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
