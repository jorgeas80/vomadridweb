import { VomadridwebPage } from './app.po';

describe('vomadridweb App', function() {
  let page: VomadridwebPage;

  beforeEach(() => {
    page = new VomadridwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
