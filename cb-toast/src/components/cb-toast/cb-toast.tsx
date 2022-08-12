import { Component, h, Method, State } from '@stencil/core';
import { IToastOptions } from '../../IToastOptions';

@Component({
  tag: 'cb-toast',
  styleUrl: 'cb-toast.css',
  shadow: true,
})
export class CbToast {
  rootElement: HTMLElement;
  @State() timeOut: number = 3000;
  @State() position: string = 'top-right';

  @State() toastType: Array<object> = [
    {
      type: 'success',
      typeBgColor: 'successBgColor',
      typeTextColor: 'successTextColor',
      typeIcon: () => (
        <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
      ),
    },
    {
      type: 'info',
      typeBgColor: 'infoBgColor',
      typeTextColor: 'infoTextColor',
      typeIcon: () => (
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        />
      ),
    },
    {
      type: 'warning',
      typeBgColor: 'warningBgColor',
      typeTextColor: 'warningTextColor',
      typeIcon: () => (
        <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
      ),
    },
    {
      type: 'error',
      typeBgColor: 'errorBgColor',
      typeTextColor: 'errorTextColor',
      typeIcon: () => (
        <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
      ),
    },
  ];

  @Method() async Toast(toast: IToastOptions) {
    if (toast.timeOut !== undefined && typeof toast.timeOut === 'number') {
      this.timeOut = toast['timeOut'];
    }
    if (toast.position !== undefined && toast.position !== '') {
      this.position = toast['position'];
    }

    let toastContent = document.createElement('cb-toastcontent');
    this.rootElement.append(toastContent);
    this.toastContentComponent(toast, toastContent);

    setTimeout(() => {
      let toastContainer = toastContent.firstElementChild;
      toastContainer.classList.remove('opacity-100');
      toastContainer.classList.add('opacity-0');
      setTimeout(() => {
        toastContent.remove();
      }, 500);
    }, this.timeOut);
  }

  toastContentComponent(toast: IToastOptions, toastContent) {
    if (toast.title !== undefined && toast.title !== '') {
      toastContent.toastTitle = toast.title;
    }

    if (toast.description !== undefined && toast.description !== '') {
      toastContent.description = toast.description;
    }

    if (toast.type !== undefined && toast.type !== '') {
      toastContent.type = toast.type;
      for (var i = 0; i < this.toastType.length; i++) {
        if (toastContent.type === this.toastType[i]['type']) {
          toastContent.typeBgColor = this.toastType[i]['typeBgColor'];
          toastContent.typeTextColor = this.toastType[i]['typeTextColor'];
          toastContent.typeIcon = this.toastType[i]['typeIcon']();
          break;
        }
      }
    }
  }

  render() {
    return <div class={this.position + ' fixed w-80  max-w-sm box-border'} ref={rootElement => (this.rootElement = rootElement)}></div>;
  }
}
