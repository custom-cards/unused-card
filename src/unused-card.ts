import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult
} from "lit-element";
import { HomeAssistant } from "custom-card-helpers";

import { UnusedConfig } from "./types";
import { computeUnusedEntities } from "./compute-unused-entities";

@customElement("unused-card")
class UnusedCard extends LitElement {
  @property() public hass?: HomeAssistant;

  @property() private _config?: UnusedConfig;

  public setConfig(config: UnusedConfig): void {
    if (!config) {
      throw new Error("Invalid configuration");
    }

    this._config = config;
  }

  protected render(): TemplateResult | void {
    if (!this._config || !this.hass) {
      return html``;
    }

    let root = document.querySelector("home-assistant") as any;
    root = root && root.shadowRoot;
    root = root && root.querySelector("home-assistant-main");
    const main = root;
    root = root && root.shadowRoot;
    root =
      root && root.querySelector("app-drawer-layout partial-panel-resolver");
    root = (root && root.shadowRoot) || root;
    root = root && root.querySelector("ha-panel-lovelace");
    root = root && root.shadowRoot;
    root = root && root.querySelector("hui-root");
    const lovelace = root.lovelace;

    const entities = computeUnusedEntities(this.hass, lovelace.config) as any;

    return html`
      <ha-card
        .header=${this._config.name ? this._config.name : "Unused Entities"}
      >
        ${entities.map(
          entity =>
            html`
              <div>
                ${entity}
              </div>
            `
        )}
      </ha-card>
    `;
  }
}
