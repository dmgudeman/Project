import { Project02PromisesPage } from './app.po';

describe('project02-promises App', function() {
  let page: Project02PromisesPage;

  beforeEach(() => {
    page = new Project02PromisesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
