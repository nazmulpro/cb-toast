import { newE2EPage } from '@stencil/core/testing';

describe('cb-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cb-toast></cb-toast>');

    const element = await page.find('cb-toast');
    expect(element).toHaveClass('hydrated');
  });
});
