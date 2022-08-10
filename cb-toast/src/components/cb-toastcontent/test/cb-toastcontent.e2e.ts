import { newE2EPage } from '@stencil/core/testing';

describe('cb-toastcontent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cb-toastcontent></cb-toastcontent>');

    const element = await page.find('cb-toastcontent');
    expect(element).toHaveClass('hydrated');
  });
});
