import { ProcessStepElementBase as x, JUMOO_PROCESSING_CONTEXT as O } from "@jumoo/processing";
import { html as a, nothing as v, css as E, state as w, customElement as P } from "@umbraco-cms/backoffice/external/lit";
import { a as R } from "./index-CPaPWJuU.js";
import { C as f } from "./types.gen-Brf3tXUm.js";
var $ = Object.defineProperty, I = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, C = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? I(t, r) : t, p = e.length - 1, l; p >= 0; p--)
    (l = e[p]) && (o = (n ? l(t, r, o) : l(o)) || o);
  return n && o && $(t, r, o), o;
}, d = (e, t, r) => t.has(e) || y("Cannot " + r), m = (e, t, r) => (d(e, t, "read from private field"), t.get(e)), g = (e, t, r) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), k = (e, t, r, n) => (d(e, t, "write to private field"), t.set(e, r), r), c = (e, t, r) => (d(e, t, "access private method"), r), i, s, h, _, b, S;
let u = class extends x {
  constructor() {
    super(), g(this, s), g(this, i), this.consumeContext(O, (e) => {
      e && (k(this, i, e), this.observe(e.pending, (t) => {
        t && (this.pending = t);
      }));
    });
  }
  connectedCallback() {
    var r, n;
    super.connectedCallback();
    var e = (r = this.results) == null ? void 0 : r.results.actions, t = c(this, s, h).call(this, e);
    (n = m(this, i)) == null || n.primePending(), this.dispatchEvent(
      new CustomEvent("pipeline-valid", {
        bubbles: !0,
        composed: !0,
        detail: {
          valid: t > 0
        }
      })
    );
  }
  render() {
    var n;
    var e = (n = this.results) == null ? void 0 : n.results.actions, t = e == null ? void 0 : e.length, r = c(this, s, h).call(this, e);
    return r == 0 ? this.renderEmpty(r, t, e) : a`<div>
					${this.renderResults(r, e)} ${this.renderImportOptions()}
					${this.renderUserOptions()}
				</div>`;
  }
  renderEmpty(e, t, r) {
    return a`<uui-box class="no-change">
				<div>
					<uui-icon name="icon-check"></uui-icon>
					<h3>Imported Sync-pack contains no changes (${t} items)</h3>
				</div>
			</uui-box>
			${this.renderResults(e, r)}`;
  }
  renderResults(e, t) {
    return a`<uui-box>
			<div slot="header">
				<em>Imported Sync-pack contains ${e} changes</em>
			</div>
			<usync-results .results=${t}></usync-results>
		</uui-box>`;
  }
  renderImportOptions() {
    const e = this.options;
    return a` <uui-box headline="Restore options">
			<umb-localize key="uSyncImport_importReportOptions">
				<umb-property-layout label="Create restore point">
					<div slot="editor">
						<uui-checkbox
							label="Create restore point"
							.checked=${e.createRestorePoint}
							@change=${c(this, s, _)}></uui-checkbox>
					</div>
				</umb-property-layout>
			</umb-localize>
		</uui-box>`;
  }
  renderUserOptions() {
    var r;
    if (!this.pending) return v;
    if (!c(this, s, S).call(this, (r = this.results) == null ? void 0 : r.results.actions)) return v;
    const t = [
      { name: "Default (current version setting)", value: "" },
      { name: "Umbraco 8", value: '{"hashAlgorithm":"HMACSHA256"}' },
      { name: "Umbraco 10+", value: '{"hashAlgorithm":"PBKDF2.ASPNETCORE.V3"}' }
    ].map((n) => {
      var o;
      return {
        name: n.name,
        value: n.value,
        selected: ((o = this.pending) == null ? void 0 : o.passwordConfig) == n.value
      };
    });
    return a` <uui-box headline="User options">
			<umb-localize key="uSyncImport_importReportOptions">
				<umb-property-layout
					label="Import algorithm"
					description="Choose the default hashing algorithm for user passwords">
					<div slot="editor">
						<uui-select
							.options=${t}
							.value=${this.pending.passwordConfig}
							@change=${c(this, s, b)}></uui-select>
						<div>
							<em><small>${this.pending.passwordConfig}</small></em>
						</div>
					</div>
				</umb-property-layout>
			</umb-localize>
		</uui-box>`;
  }
};
i = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
h = function(e) {
  let t = 0;
  return e == null || e.forEach((r) => {
    r.change !== f.NO_CHANGE && t++;
  }), t;
};
_ = function(e) {
  var r;
  if (!this.options) return;
  const t = e.target;
  t && (console.log("create restore point", t.checked), (r = m(this, i)) == null || r.setPending({
    createRestorePoint: t.checked
  }));
};
b = function(e) {
  var r;
  if (!this.options) return;
  const t = e.target;
  t && (console.log("change password config", t.value), (r = m(this, i)) == null || r.setPending({
    passwordConfig: t.value
  }));
};
S = function(e) {
  return e.some(
    (t) => t.change !== f.NO_CHANGE && (t.itemType === "IUser" || t.itemType === "IMember")
  );
};
u.styles = E`
		uui-box {
			margin-bottom: 20px;
		}

		.no-change {
			background-color: var(--uui-color-positive-emphasis);
			color: var(--uui-color-positive-contrast);
		}

		.no-change > div {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 20px;
		}

		.no-change uui-icon {
			font-size: 32px;
		}
	`;
C([
  w()
], u.prototype, "pending", 2);
u = C([
  P(R.import.report)
], u);
const z = u;
export {
  z as default,
  u as uSyncImportReportStep
};
//# sourceMappingURL=import-report-step-DCLpOX61.js.map
