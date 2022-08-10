# cb-toast
Coolbrains Toast Notification  web component - Built With Stenciljs

This is a toast notification Web Component using Stenciljs.

- Built with Stencil
- Built with TailwindCSS v3.x

## Demo

[codesandbox](https://codesandbox.io/s/coolbrains-treeview-component-built-with-stenciljs-eixw6s?file=/index.html)

## Installation

```bash
npm install cb-toast
```

Or use npm cdn

```js
<script type="module" src="https://cdn.jsdelivr.net/npm/cb-treeview@1.0.0/dist/cb-treeview/cb-treeview.esm.js"></script>
```

## Usage

The Coolbrains toast Component can be use as following:

```html
<cb-toast></cb-toast>

 <button id="showToastSuccess" class="bg-green-700">Success</button>
```

```js
<script>
let cbToast = document.querySelector('cb-toast');

document.getElementById('showToastSuccess').addEventListener('click', event => {
        cbToast.Toast({
          title: 'Success',
          description: 'success message',
          timeOut: 3000,
          position: 'top',
          type: 'success',
        });
      });
</script>
```

