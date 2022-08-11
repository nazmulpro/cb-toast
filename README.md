# cb-toast

Coolbrains Toast Notification web component - Built With Stenciljs

This is a toast notification Web Component using Stenciljs.

- Built with Stencil
- Built with TailwindCSS v3.x

## Demo

[Demo](https://cbtoast.netlify.app/)

## Installation

```bash
npm install cb-toast
```

Or use npm cdn

```js
<script type="module" src="https://cdn.jsdelivr.net/npm/cb-toast@1.0.2/dist/cb-toast/cb-toast.esm.js"></script>
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
          title: 'Success', //default
          description: 'success message', //default
          timeOut: 3000, //default
          position: 'top-left', //default
          type: 'success', //default
        });

      });

</script>
```

## Positions

```html
'top' 'bottom' 'top-left' 'top-right' 'top-right' 'top-right'
```

## type

```html
'success' 'info' 'warning' 'error' 'top-right'
```
