import { q as E } from "./language-access.workspace.context-token-Bqcpkg-3.js";
import { UUIBooleanInputEvent as b } from "@umbraco-cms/backoffice/external/uui";
import { nothing as L, ifDefined as v, html as h, css as U, state as p, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as _ } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as O } from "@umbraco-cms/backoffice/style";
import "@umbraco-cms/backoffice/culture";
var S = Object.defineProperty, N = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, g = (e, t, a, u) => {
  for (var i = u > 1 ? void 0 : u ? N(t, a) : t, c = e.length - 1, d; c >= 0; c--)
    (d = e[c]) && (i = (u ? d(t, a, i) : d(i)) || i);
  return u && i && S(t, a, i), i;
}, f = (e, t, a) => t.has(e) || y("Cannot " + a), r = (e, t, a) => (f(e, t, "read from private field"), t.get(e)), m = (e, t, a) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), q = (e, t, a, u) => (f(e, t, "write to private field"), t.set(e, a), a), l = (e, t, a) => (f(e, t, "access private method"), a), n, s, w, D, C, k;
let o = class extends x {
  constructor() {
    super(), m(this, s), this._isDefaultLanguage = !1, m(this, n);
    let e = !1;
    this.consumeContext(E, (t) => {
      q(this, n, t), this.observe(r(this, n)?.data, (a) => {
        this._language = a, e === !1 && (this._isDefaultLanguage = a?.isDefault ?? !1, e = !0);
      }), this.observe(r(this, n)?.isNew, (a) => {
        this._isNew = a;
      });
    });
  }
  render() {
    return h`
			<uui-box>
				<umb-property-layout label="Language">
					<div slot="editor">
						<!-- TODO: disable already created cultures in the select -->
						${this._isNew ? h` <umb-input-culture-select
									value=${v(this._language?.unique)}
									@change=${l(this, s, w)}></umb-input-culture-select>` : this._language?.name}
					</div>
				</umb-property-layout>

				<umb-property-layout label="ISO Code">
					<div slot="editor">${this._language?.unique}</div>
				</umb-property-layout>

				<umb-property-layout label="Settings">
					<div slot="editor">
						<uui-toggle
							label="Default language"
							?disabled=${this._isDefaultLanguage}
							?checked=${this._language?.isDefault || !1}
							@change=${l(this, s, D)}>
							<div>
								<b>Default language</b>
								<div>An Umbraco site can only have one default language set.</div>
							</div>
						</uui-toggle>
						<!-- 	TODO: we need a UUI component for this -->
						${this._language?.isDefault && this._language?.isDefault !== this._isDefaultLanguage ? h`<div id="default-language-warning">
									Switching default language may result in default content missing.
								</div>` : L}

						<hr />
						<uui-toggle
							label="Mandatory language"
							?checked=${this._language?.isMandatory || !1}
							@change=${l(this, s, C)}>
							<div>
								<b>Mandatory language</b>
								<div>Properties on this language have to be filled out before the node can be published.</div>
							</div>
						</uui-toggle>
					</div>
				</umb-property-layout>

				<umb-property-layout
					label="Fallback language"
					description="To allow multi-lingual content to fall back to another language if not present in the requested language, select it here.">
					<umb-input-language
						value=${v(this._language?.fallbackIsoCode === null ? void 0 : this._language?.fallbackIsoCode)}
						slot="editor"
						max="1"
						@change=${l(this, s, k)}
						.filter=${(e) => e.unique !== this._language?.unique}></umb-input-language>
				</umb-property-layout>
			</uui-box>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
w = function(e) {
  if (e instanceof _) {
    const t = e.target, a = t.value.toString(), u = t.selectedCultureName;
    if (!u)
      return;
    if (!a) {
      const i = () => t.value = this._language?.unique;
      t.addEventListener("close", i, { once: !0 }), t.addEventListener("blur", i, { once: !0 });
      return;
    }
    r(this, n)?.setCulture(a), this._isNew && u && r(this, n)?.setName(u);
  }
};
D = function(e) {
  if (e instanceof b) {
    const t = e.composedPath()[0];
    r(this, n)?.setDefault(t.checked);
  }
};
C = function(e) {
  if (e instanceof b) {
    const t = e.composedPath()[0];
    r(this, n)?.setMandatory(t.checked);
  }
};
k = function(e) {
  if (e instanceof _) {
    const a = e.target.selection?.[0];
    r(this, n)?.setFallbackCulture(a);
  }
};
o.styles = [
  O,
  U`
			:host {
				display: block;
				padding: var(--uui-size-space-6);
			}

			uui-combobox {
				width: 100%;
			}

			hr {
				border: none;
				border-bottom: 1px solid var(--uui-color-divider);
			}

			#default-language-warning {
				background-color: var(--uui-color-warning);
				color: var(--uui-color-warning-contrast);
				padding: var(--uui-size-space-4) var(--uui-size-space-5);
				border: 1px solid var(--uui-color-warning-standalone);
				margin-top: var(--uui-size-space-4);
				border-radius: var(--uui-border-radius);
			}

			.validation-message {
				color: var(--uui-color-danger);
			}
		`
];
g([
  p()
], o.prototype, "_language", 2);
g([
  p()
], o.prototype, "_isDefaultLanguage", 2);
g([
  p()
], o.prototype, "_isNew", 2);
o = g([
  $("umb-language-details-workspace-view")
], o);
const F = o;
export {
  o as UmbLanguageDetailsWorkspaceViewElement,
  F as default
};
//# sourceMappingURL=language-details-workspace-view.element-C9pHiQMS.js.map
