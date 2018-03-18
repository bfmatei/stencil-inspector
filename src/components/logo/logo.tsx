import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'si-logo',
  styleUrl: 'logo.pcss',
  shadow: true
})
export class Logo {

  @Prop() dark = false;

  protected hostData() {
    return {
      class: {
        dark: this.dark
      }
    };
  }

  protected render() {
    return [
      (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 280" fill="currentColor" class="logo">
          <path d="M375.8 165.2c7 6.6 17.6 12.9 28.9 12.9 6.6 0 10.6-2.1 12.7-4.3 1.9-1.9 3.2-4.7 3.2-7.9 0-2.5-0.9-5.3-3.6-7.6 -3.2-2.8-8.1-4.2-16.3-6.6l-8.5-2.6c-5.3-1.7-13-4.5-18.1-10.2 -6.4-7-7.2-15.9-7.2-22.3 0-15.5 6-24.9 11.5-30.4 6.4-6.4 17-11.9 32.3-11.9 12.5 0 27 4 38.9 10.2l-13 25.5c-9.8-7.7-17.2-8.5-21.5-8.5 -3.2 0-7.6 0.8-10.8 3.8 -1.9 1.9-3.2 4-3.2 6.8 0 2.3 0.4 4 1.7 5.7 0.9 1.1 3.2 3.4 11 5.7l10 3c7.9 2.5 16.3 5.3 22.9 12.5 6.4 6.8 8.1 13.8 8.1 22.5 0 11.5-2.8 22.7-11.9 31.8 -10.8 10.8-23.8 12.9-37.2 12.9 -7.9 0-15.5-0.8-24.8-4.2 -2.1-0.8-10-3.8-19.1-10L375.8 165.2z" />
          <path d="M533.7 104.8V203H501v-98.3h-26.6V77H561v27.8H533.7z" />
          <path d="M661.8 104.8h-38.9v21h36.9v27.8h-36.9v21.7h38.9V203h-71.6V77h71.6V104.8z" />
          <path d="M695.5 203V77h32.7l60.3 77.1V77h32.7v126h-32.7l-60.3-77.1V203H695.5z" />
          <path d="M942.1 199.6c-13 4.7-20.2 6.2-28.3 6.2 -21.9 0-38.4-8.7-48.8-18.9 -12.3-12.3-19.1-29.5-19.1-45.9 0-18 7.7-35 19.1-46.5 11.2-11.3 28-19.7 47.6-19.7 6 0 15.9 0.9 29.5 6.4v39.1c-10.6-13-23.1-13.8-28.5-13.8 -9.4 0-16.6 2.8-22.7 8.3 -7.7 7.2-11 17-11 25.9 0 8.7 3.6 18.3 10.2 24.6 5.5 5.1 14.2 8.7 23.4 8.7 4.9 0 17-0.6 28.5-13.2L942.1 199.6 942.1 199.6z" />
          <path d="M1009.5 77v126h-32.7V77H1009.5z" />
          <path d="M1080.5 77v98.3h39.3V203h-72V77H1080.5z" />
          <path d="M184.2 0h-88c-52.8 0-96 43.2-96 96v88c0 52.8 43.2 96 96 96h88c52.8 0 96-43.2 96-96V96C280.2 43.2 237 0 184.2 0zM196.2 179.2c0 12.5-18.3 22.8-30.8 22.8H115c-12.6 0-30.8-10.2-30.8-22.8V178h112V179.2zM196.2 152H115c-12.5 0-30.8-10.3-30.8-22.8V128h81.2c12.5 0 30.8 10.3 30.8 22.8V152zM196.2 102h-112v-1.2C84.2 88.3 102.4 78 115 78h50.4c12.6 0 30.8 10.2 30.8 22.8V102z" />
        </svg>
      ),
      (
        <div class="badge">
          (INSPECTOR)
        </div>
      )
    ];
  }
}
