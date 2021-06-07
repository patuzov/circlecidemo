import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Dev text', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Dev');
  });

  it('should display Ops text after button click', async () => {
    await page.navigateTo();
    await page.getButton().click();
    expect(await page.getTitleText()).toEqual('Ops');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
