import { Component, h, Method, State } from '@stencil/core';

@Component({
  tag: 'cb-toast',
  styleUrl: 'cb-toast.css',
  shadow: true,
})
export class CbToast {
  @State() timeOut: number = 3000;
  @State() position: string = 'top-right';
  rootElement: HTMLElement;

  @Method() async Toast(toast) {
    if (toast.timeOut !== undefined && toast.timeOut !== '') {
      this.timeOut = toast['timeOut'];
    }
    if (toast.position !== undefined && toast.position !== '') {
      this.position = toast['position'];
    }
    let toastContent = document.createElement('cb-toastcontent');
    this.rootElement.append(toastContent);
    toastContent.setParams({
      title: toast['title'],
      description: toast['description'],
      type: toast['type'],
    });

    setTimeout(() => {
      let toastContainer = toastContent.firstElementChild;
      toastContainer.classList.remove('opacity-100');
      toastContainer.classList.add('opacity-0');
      setTimeout(() => {
        toastContent.remove();
      }, 500);
    }, this.timeOut);
  }

  render() {
    return <div class={this.position + ' fixed w-80  max-w-sm box-border'} ref={rootElement => (this.rootElement = rootElement)}></div>;
  }
}
