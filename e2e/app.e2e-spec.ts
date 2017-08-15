import { KreatikaAppPage } from './app.po';

describe('kreatika-app App', () => {
  let page: KreatikaAppPage;

  beforeEach(() => {
    page = new KreatikaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
