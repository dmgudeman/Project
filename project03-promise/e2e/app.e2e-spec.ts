import { Project03PromisePage } from './app.po';

describe('project03-promise App', function() {
  let page: Project03PromisePage;

  beforeEach(() => {
    page = new Project03PromisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
