import { MsAuthPlugin } from '@recognizebv/capacitor-plugin-msauth';
import { Intune } from "@fellow/intune";

export const BASE_CONFIG = {
    clientId: "10282e0b-ca1c-404a-8efc-f5ec13aa2fcd",
    tenant: "common",
}

window.customElements.define(
    'capacitor-welcome',
    class extends HTMLElement {
        constructor() {
            super();

            const root = this.attachShadow({mode: 'open'});

            root.innerHTML = `
    <style>
      :host {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        display: block;
        width: 100%;
        height: 100%;
      }
      h1, h2, h3, h4, h5 {
        text-transform: uppercase;
      }
      .button {
        display: inline-block;
        padding: 10px;
        background-color: #73B5F6;
        color: #fff;
        font-size: 0.9em;
        border: 0;
        border-radius: 3px;
        text-decoration: none;
        cursor: pointer;
      }
      main {
        padding: 15px;
      }
      main hr { height: 1px; background-color: #eee; border: 0; }
      main h1 {
        font-size: 1.4em;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      main h2 {
        font-size: 1.1em;
      }
      main h3 {
        font-size: 0.9em;
      }
      main p {
        color: #333;
      }
      main pre {
        white-space: pre-line;
      }
    </style>
    <div>
      <capacitor-welcome-titlebar>
        <h1>Capacitor</h1>
      </capacitor-welcome-titlebar>
      <main>
        <h2>MSAL</h2>
        <p>
          This demo shows how to sign in with MSAL
        </p>
        <p>
          <button class="button" id="login">Login with MSAL</button>
        </p>
        <p>
          <button class="button" id="intune">Activate Intune</button>
        </p>
        <p>
          <button class="button" id="debug">Open Intune Console</button>
        </p>
        <p>
          <img id="image" style="max-width: 100%">
        </p>
      </main>
    </div>
    `;
        }

        connectedCallback() {
            const self = this;

            self.shadowRoot.querySelector('#login').addEventListener("click", async () => {
                await MsAuthPlugin.login({
                    ...BASE_CONFIG,
                    scopes: ["Calendars.Read", "User.Read"],
                });
            });

            self.shadowRoot.querySelector('#intune').addEventListener("click", async () => {
                await Intune.loginAndEnrollAccount({ email: "PUT_EMAIL_HERE" });
            });

            self.shadowRoot.querySelector('#debug').addEventListener("click", async () => {
                await Intune.openIntuneConsole();
            });

        }
    }
);

window.customElements.define(
    'capacitor-welcome-titlebar',
    class extends HTMLElement {
        constructor() {
            super();
            const root = this.attachShadow({mode: 'open'});
            root.innerHTML = `
    <style>
      :host {
        position: relative;
        display: block;
        padding: 15px 15px 15px 15px;
        text-align: center;
        background-color: #73B5F6;
      }
      ::slotted(h1) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 0.9em;
        font-weight: 600;
        color: #fff;
      }
    </style>
    <slot></slot>
    `;
        }
    }
);
