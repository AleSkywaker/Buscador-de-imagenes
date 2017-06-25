import { BuscarImagenesPage } from './app.po';

describe('buscar-imagenes App', () => {
  let page: BuscarImagenesPage;

  beforeEach(() => {
    page = new BuscarImagenesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
