import { TagNote2Page } from './app.po';

describe('tag-note2 App', () => {
  let page: TagNote2Page;

  beforeEach(() => {
    page = new TagNote2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
