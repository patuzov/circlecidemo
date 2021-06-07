import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('#heading')).getText();
  }

  getButton(): ElementFinder {
    return element(by.css('#btn'));
  }
}
