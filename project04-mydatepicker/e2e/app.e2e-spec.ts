import { Project04MydatepickerPage } from './app.po';

describe('project04-mydatepicker App', () => {
  let page: Project04MydatepickerPage;

  beforeEach(() => {
    page = new Project04MydatepickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
