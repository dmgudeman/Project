import { browser, element, by } from 'protractor';

export class Project04MydatepickerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
