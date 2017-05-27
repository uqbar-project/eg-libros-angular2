import { EgLibrosAngular2Page } from './app.po';

describe('eg-libros-angular2 App', () => {
  let page: EgLibrosAngular2Page;

  beforeEach(() => {
    page = new EgLibrosAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
