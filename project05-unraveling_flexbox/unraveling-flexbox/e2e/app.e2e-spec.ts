import { UnravelingFlexboxPage } from './app.po';

describe('unraveling-flexbox App', () => {
  let page: UnravelingFlexboxPage;

  beforeEach(() => {
    page = new UnravelingFlexboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
