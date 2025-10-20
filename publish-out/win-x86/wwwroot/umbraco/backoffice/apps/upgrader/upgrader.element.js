var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, customElement, state } from '@umbraco-cms/backoffice/external/lit';
import { UpgradeService } from '@umbraco-cms/backoffice/external/backend-api';
import { tryExecute, UmbApiError } from '@umbraco-cms/backoffice/resources';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import '../installer/shared/layout/installer-layout.element.js';
import './upgrader-view.element.js';
/**
 * @element umb-upgrader
 */
let UmbUpgraderElement = class UmbUpgraderElement extends UmbLitElement {
    constructor() {
        super();
        this.fetching = true;
        this.upgrading = false;
        this.errorMessage = '';
        this._handleSubmit = async (e) => {
            e.stopPropagation();
            this.errorMessage = '';
            this.upgrading = true;
            const { error } = await tryExecute(this, UpgradeService.postUpgradeAuthorize());
            if (error) {
                this.errorMessage = UmbApiError.isUmbApiError(error)
                    ? (error.problemDetails.detail ?? 'Unknown error, please try again')
                    : (error.message ?? 'Unknown error, please try again');
            }
            else {
                history.pushState(null, '', 'section/content');
            }
            this.upgrading = false;
        };
        this._setup();
    }
    render() {
        return html `<umb-installer-layout data-test="upgrader">
			<umb-upgrader-view
				.fetching=${this.fetching}
				.upgrading=${this.upgrading}
				.settings=${this.upgradeSettings}
				.errorMessage=${this.errorMessage}
				@onAuthorizeUpgrade=${this._handleSubmit}></umb-upgrader-view>
		</umb-installer-layout>`;
    }
    async _setup() {
        this.fetching = true;
        const { data, error } = await tryExecute(this, UpgradeService.getUpgradeSettings(), { disableNotifications: true });
        if (data) {
            this.upgradeSettings = data;
        }
        else if (error) {
            this.errorMessage = UmbApiError.isUmbApiError(error)
                ? (error.problemDetails.detail ?? 'Unknown error, please try again')
                : error.message;
        }
        this.fetching = false;
    }
};
__decorate([
    state()
], UmbUpgraderElement.prototype, "upgradeSettings", void 0);
__decorate([
    state()
], UmbUpgraderElement.prototype, "fetching", void 0);
__decorate([
    state()
], UmbUpgraderElement.prototype, "upgrading", void 0);
__decorate([
    state()
], UmbUpgraderElement.prototype, "errorMessage", void 0);
UmbUpgraderElement = __decorate([
    customElement('umb-upgrader')
], UmbUpgraderElement);
export { UmbUpgraderElement };
export default UmbUpgraderElement;
