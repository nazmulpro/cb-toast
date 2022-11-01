# cb-toast

Coolbrains Toast Notification web component - Built With Stenciljs

![Toast](https://github.com/nazmulpro/cb-toast/blob/main/toast.png?raw=true "Toast")

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
<script type="module" src="https://cdn.jsdelivr.net/npm/cb-toast@1.0.3/dist/cb-toast/cb-toast.esm.js"></script>
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
          position: 'top-right', //default
          type: 'success', //default
        });

      });

</script>
```

## Positions

```js
'top';
'bottom';
'top-left';
'top-right'; //default
'bottom-left';
'bottom-right';
```

## type

```js
'success'; //default
'info';
'warning';
'error';
```
