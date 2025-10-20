import { DocumentService as w } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as y } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as L } from "@umbraco-cms/backoffice/class-api";
import { css as N, state as b, query as P, customElement as W, html as r, repeat as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLanguageCollectionRepository as B } from "@umbraco-cms/backoffice/language";
import { UmbModalBaseElement as R } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as T } from "@umbraco-cms/backoffice/style";
class V {
  #t;
  /**
   * Creates an instance of UmbDocumentCultureAndHostnamesServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentCultureAndHostnamesServerDataSource
   */
  constructor(e) {
    this.#t = e;
  }
  /**
   * Fetches the Culture and Hostnames for the given Document unique
   * @param {string} unique
   * @memberof UmbDocumentCultureAndHostnamesServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    return y(this.#t, w.getDocumentByIdDomains({ path: { id: e } }));
  }
  /**
   * Updates Culture and Hostnames for the given Document unique
   * @param {string} unique
   * @param {UpdateDomainsRequestModel} data
   * @memberof UmbDocumentCultureAndHostnamesServerDataSource
   */
  async update(e, o) {
    if (!e) throw new Error("Unique is missing");
    return y(this.#t, w.putDocumentByIdDomains({ path: { id: e }, body: o }));
  }
}
class j extends L {
  #t = new V(this);
  async readCultureAndHostnames(e) {
    if (!e) throw new Error("Unique is missing");
    return this.#t.read(e);
  }
  async updateCultureAndHostnames(e, o) {
    if (!e) throw new Error("Unique is missing");
    if (!o) throw new Error("Data is missing");
    return this.#t.update(e, o);
  }
}
var F = Object.defineProperty, G = Object.getOwnPropertyDescriptor, D = (t) => {
  throw TypeError(t);
}, d = (t, e, o, n) => {
  for (var s = n > 1 ? void 0 : n ? G(e, o) : e, p = t.length - 1, _; p >= 0; p--)
    (_ = t[p]) && (s = (n ? _(e, o, s) : _(s)) || s);
  return n && s && F(e, o, s), s;
}, f = (t, e, o) => e.has(t) || D("Cannot " + o), l = (t, e, o) => (f(t, e, "read from private field"), e.get(t)), c = (t, e, o) => e.has(t) ? D("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), J = (t, e, o, n) => (f(t, e, "write to private field"), e.set(t, o), o), a = (t, e, o) => (f(t, e, "access private method"), o), h, v, m, i, x, z, M, E, U, A, H, S, g, k, I, q, C, O;
let u = class extends R {
  constructor() {
    super(...arguments), c(this, i), c(this, h, new j(this)), c(this, v, new B(this)), c(this, m), this._languageModel = [], this._domains = [];
  }
  // Init
  firstUpdated() {
    J(this, m, this.data?.unique), a(this, i, z).call(this), a(this, i, x).call(this);
  }
  // Renders
  render() {
    return r`
			<umb-body-layout headline=${this.localize.term("actions_assigndomain")}>
				${a(this, i, k).call(this)} ${a(this, i, I).call(this)}
				<uui-button
					slot="actions"
					id="close"
					label=${this.localize.term("general_cancel")}
					@click=${a(this, i, E)}></uui-button>
				<uui-button
					slot="actions"
					id="save"
					look="primary"
					color="positive"
					label=${this.localize.term("buttons_save")}
					@click=${a(this, i, M)}></uui-button>
			</umb-body-layout>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
x = async function() {
  if (!l(this, m)) return;
  const { data: t } = await l(this, h).readCultureAndHostnames(l(this, m));
  t && (this._defaultIsoCode = t.defaultIsoCode, this._domains = t.domains);
};
z = async function() {
  const { data: t } = await l(this, v).requestCollection({});
  t && (this._languageModel = t.items);
};
M = async function() {
  this.value = { defaultIsoCode: this._defaultIsoCode, domains: this._domains };
  const { error: t } = await l(this, h).updateCultureAndHostnames(l(this, m), this.value);
  t || this._submitModal();
};
E = function() {
  this._rejectModal();
};
U = function(t) {
  const e = t.target.value;
  e === "inherit" ? this._defaultIsoCode = null : this._defaultIsoCode = e;
};
A = function(t, e) {
  const o = t.target.value;
  this._domains = this._domains.map((n, s) => e === s ? { ...n, isoCode: o } : n);
};
H = function(t, e) {
  const o = t.target.value;
  this._domains = this._domains.map((n, s) => e === s ? { ...n, domainName: o } : n);
};
S = async function(t) {
  this._domains = this._domains.filter((e, o) => t !== o);
};
g = function(t) {
  const e = this._languageModel.find((o) => o.isDefault);
  t ? (this.popoverContainerElement?.hidePopover(), this._domains = [...this._domains, { isoCode: e?.unique ?? "", domainName: window.location.host }]) : this._domains = [...this._domains, { isoCode: e?.unique ?? "", domainName: "" }];
};
k = function() {
  return r`
			<uui-box headline=${this.localize.term("assignDomain_setLanguage")}>
				<uui-label for="select">${this.localize.term("assignDomain_language")}</uui-label>
				<uui-combobox
					id="select"
					label=${this.localize.term("assignDomain_language")}
					.value=${this._defaultIsoCode ?? "inherit"}
					@change=${a(this, i, U)}>
					<uui-combobox-list>
						<uui-combobox-list-option .value=${"inherit"}>
							${this.localize.term("assignDomain_inherit")}
						</uui-combobox-list-option>
						${a(this, i, C).call(this)}
					</uui-combobox-list>
				</uui-combobox>
			</uui-box>
		`;
};
I = function() {
  return r`
			<uui-box headline=${this.localize.term("assignDomain_setDomains")}>
				<umb-localize key="assignDomain_domainHelpWithVariants">
					Valid domain names are: "example.com", "www.example.com", "example.com:8080", or
					"https://www.example.com/".<br />Furthermore also one-level paths in domains are supported, eg.
					"example.com/en" or "/en".
				</umb-localize>
				${a(this, i, q).call(this)} ${a(this, i, O).call(this)}
			</uui-box>
		`;
};
q = function() {
  if (this._domains?.length)
    return r`
			<div id="domains">
				${$(
      this._domains,
      (t) => t.isoCode,
      (t, e) => r`
						<uui-input
							label=${this.localize.term("assignDomain_domain")}
							.value=${t.domainName}
							@change=${(o) => a(this, i, H).call(this, o, e)}></uui-input>
						<uui-combobox
							.value=${t.isoCode}
							label=${this.localize.term("assignDomain_language")}
							@change=${(o) => a(this, i, A).call(this, o, e)}>
							<uui-combobox-list> ${a(this, i, C).call(this)} </uui-combobox-list>
						</uui-combobox>
						<uui-button
							look="outline"
							color="danger"
							label=${this.localize.term("assignDomain_remove")}
							@click=${() => a(this, i, S).call(this, e)}>
							<uui-icon name="icon-trash"></uui-icon>
						</uui-button>
					`
    )}
			</div>
		`;
};
C = function() {
  return r`${$(
    this._languageModel,
    (t) => t.unique,
    (t) => r`<uui-combobox-list-option .value=${t.unique}>${t.name}</uui-combobox-list-option>`
  )}`;
};
O = function() {
  return r`
			<uui-button-group>
				<uui-button
					label=${this.localize.term("assignDomain_addNew")}
					look="placeholder"
					@click=${() => a(this, i, g).call(this)}></uui-button>
				<uui-button
					id="dropdown"
					label=${this.localize.term("buttons_select")}
					look="placeholder"
					popovertarget="more-options">
					<uui-icon name="icon-navigation-down"></uui-icon>
				</uui-button>
				<uui-popover-container id="more-options" placement="bottom-end">
					<umb-popover-layout>
						<uui-button
							label=${this.localize.term("assignDomain_addCurrent")}
							@click=${() => a(this, i, g).call(this, !0)}></uui-button>
					</umb-popover-layout>
				</uui-popover-container>
			</uui-button-group>
		`;
};
u.styles = [
  T,
  N`
			uui-button-group {
				width: 100%;
			}

			uui-box:first-child {
				margin-bottom: var(--uui-size-layout-1);
			}

			#dropdown {
				flex-grow: 0;
			}

			#domains {
				margin-top: var(--uui-size-layout-1);
				margin-bottom: var(--uui-size-2);
				display: grid;
				grid-template-columns: 1fr 1fr auto;
				grid-gap: var(--uui-size-1);
			}
		`
];
d([
  b()
], u.prototype, "_languageModel", 2);
d([
  b()
], u.prototype, "_defaultIsoCode", 2);
d([
  b()
], u.prototype, "_domains", 2);
d([
  P("#more-options")
], u.prototype, "popoverContainerElement", 2);
u = d([
  W("umb-culture-and-hostnames-modal")
], u);
const K = u, it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbCultureAndHostnamesModalElement() {
    return u;
  },
  default: K
}, Symbol.toStringTag, { value: "Module" }));
export {
  u as U,
  j as a,
  it as c
};
//# sourceMappingURL=culture-and-hostnames-modal.element-DgqNE89K.js.map
