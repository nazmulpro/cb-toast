import { newSpecPage } from '@stencil/core/testing';
import { CbToast } from '../cb-toast';

describe('cb-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CbToast],
      html: `<cb-toast></cb-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <cb-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cb-toast>
    `);
  });
});
