import { newSpecPage } from '@stencil/core/testing';
import { CbToastcontent } from '../cb-toastcontent';

describe('cb-toastcontent', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CbToastcontent],
      html: `<cb-toastcontent></cb-toastcontent>`,
    });
    expect(page.root).toEqualHtml(`
      <cb-toastcontent>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cb-toastcontent>
    `);
  });
});
