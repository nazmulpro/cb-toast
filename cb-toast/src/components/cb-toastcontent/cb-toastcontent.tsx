import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'cb-toastcontent',
  styleUrl: 'cb-toastcontent.css',
  shadow: false,
})
export class CbToastcontent {
  el: HTMLElement;
  @Prop() toastTitle: string = 'Success';
  @Prop() description: string = 'success message';
  @Prop() type: string = 'success';

  @Prop() typeBgColor: string;
  @Prop() typeTextColor: string;
  @Prop() typeIcon: any;

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

  buildToast = () => {
    console.log('Toast load build');
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
            <span class={this.typeTextColor + ' font-semibold'}>{this.toastTitle}</span>
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

  componentWillLoad() {
    console.log('will load');
    console.log(this.toastTitle);
  }

  componentDidLoad() {
    console.log('Did load');
  }

  render() {
    return <Host>{this.buildToast()}</Host>;
  }
}
