import { Component, Host, h, State, Method } from '@stencil/core';

@Component({
  tag: 'cb-toastcontent',
  styleUrl: 'cb-toastcontent.css',
  shadow: false,
})
export class CbToastcontent {
  el: HTMLElement;
  @State() title: string = 'Success';
  @State() description: string = 'success message';
  @State() type: string = 'success';

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

  @State() typeBgColor: string = this.toastType[0]['typeBgColor'];
  @State() typeTextColor: string = this.toastType[0]['typeTextColor'];
  @State() typeIcon: any = this.toastType[0]['typeIcon']();

  @Method() async setParams(toast) {
    if (toast.title !== undefined && toast.title !== '') {
      this.title = toast['title'];
    }
    if (toast.description !== undefined && toast.description !== '') {
      this.description = toast['description'];
    }

    if (toast.type !== undefined && toast.type !== '') {
      this.type = toast['type'];
      for (var i = 0; i < this.toastType.length; i++) {
        if (this.type === this.toastType[i]['type']) {
          this.typeBgColor = this.toastType[i]['typeBgColor'];
          this.typeTextColor = this.toastType[i]['typeTextColor'];
          this.typeIcon = this.toastType[i]['typeIcon']();
          break;
        }
      }
    }
  }

  closeToast = event => {
    event.target.parentNode.closest('cb-toastcontent').remove();
  };

  closeSvgIconPath = () => (
    <path
      fill-rule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
      clip-rule="evenodd"
    ></path>
  );

  private buildToast = () => {
    let svgIcon = (
      <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        {this.typeIcon}
      </svg>
    );
    if (this.type === 'info') {
      svgIcon = (
        <svg class="h-6 w-6 text-white pr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
      );
    }

    return (
      <div
        class=" transition-all duration-700  ease-in opacity-100   flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md z-50 mt-4"
        ref={el => (this.el = el)}
      >
        <div class={this.typeBgColor + ' flex grow-0 items-center justify-center w-12'}>{svgIcon}</div>

        <div class="flex-grow w-72 px-4 py-2 -mx-3">
          <div class="mx-3">
            <span class={this.typeTextColor + ' font-semibold'}>{this.title}</span>
            <p class="text-sm text-gray-600 ">{this.description}</p>
          </div>
        </div>
        <div class="flex items-start justify-center">
          <svg onClick={e => this.closeToast(e)} class={this.typeTextColor + ' "w-6 h-6 fill-current cursor-pointer'} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            {this.closeSvgIconPath()}
          </svg>
        </div>
      </div>
    );
  };

  render() {
    return <Host>{this.buildToast()}</Host>;
  }
}
