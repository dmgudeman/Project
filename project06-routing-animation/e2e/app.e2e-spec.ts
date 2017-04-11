import { Project06RoutingAnimationPage } from './app.po';

describe('project06-routing-animation App', () => {
  let page: Project06RoutingAnimationPage;

  beforeEach(() => {
    page = new Project06RoutingAnimationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
