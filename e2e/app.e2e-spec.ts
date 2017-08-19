import { HeroesTurPage } from './app.po';

describe('heroes-tur App', () => {
  let page: HeroesTurPage;

  beforeEach(() => {
    page = new HeroesTurPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
