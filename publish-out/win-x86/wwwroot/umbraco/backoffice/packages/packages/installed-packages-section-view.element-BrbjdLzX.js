import { UmbPackageRepository as L } from "./package.repository-DyWS8t6-.js";
import { css as V, property as v, state as k, customElement as z, ifDefined as E, nothing as $, html as o, unsafeHTML as q, repeat as O } from "@umbraco-cms/backoffice/external/lit";
import { observeMultiple as H } from "@umbraco-cms/backoffice/observable-api";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as X } from "@umbraco-cms/backoffice/style";
import { createExtensionElement as J } from "@umbraco-cms/backoffice/extension-api";
import { PackageService as K } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as Q } from "@umbraco-cms/backoffice/resources";
import { umbConfirmModal as Y } from "@umbraco-cms/backoffice/modal";
import { umbExtensionsRegistry as Z } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_NOTIFICATION_CONTEXT as j } from "@umbraco-cms/backoffice/notification";
var ee = Object.defineProperty, te = Object.getOwnPropertyDescriptor, U = (e) => {
  throw TypeError(e);
}, l = (e, t, a, n) => {
  for (var i = n > 1 ? void 0 : n ? te(t, a) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (i = (n ? r(t, a, i) : r(i)) || i);
  return n && i && ee(t, a, i), i;
}, b = (e, t, a) => t.has(e) || U("Cannot " + a), f = (e, t, a) => (b(e, t, "read from private field"), a ? a.call(e) : t.get(e)), P = (e, t, a) => t.has(e) ? U("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), C = (e, t, a, n) => (b(e, t, "write to private field"), t.set(e, a), a), y = (e, t, a) => (b(e, t, "access private method"), a), g, _, u, N, B, W;
let c = class extends T {
  constructor() {
    super(), P(this, u), P(this, g), this.hasPendingMigrations = !1, P(this, _), this.consumeContext(j, (e) => {
      C(this, _, e);
    });
  }
  set name(e) {
    const t = f(this, g);
    t !== e && (C(this, g, e), y(this, u, N).call(this), this.requestUpdate("name", t));
  }
  get name() {
    return f(this, g);
  }
  render() {
    return this.name ? o`
					<uui-ref-node-package
						name=${E(this.name)}
						version="${E(this.version ?? void 0)}"
						@open=${y(this, u, B)}
						?disabled="${!this._packageView}">
						${this.customIcon ? o`<umb-icon slot="icon" name=${this.customIcon}></umb-icon>` : $}
						<div slot="tag">
							${this.hasPendingMigrations ? o`<uui-button
										@click="${y(this, u, W)}"
										.state=${this._migrationButtonState}
										color="warning"
										look="primary"
										label=${this.localize.term("packager_packageMigrationsRun")}></uui-button>` : $}
						</div>
					</uui-ref-node-package>
				` : "";
  }
};
g = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
N = function() {
  this.observe(
    Z.byTypeAndFilter("packageView", (e) => e.meta.packageName === f(this, g)),
    (e) => {
      if (e.length === 0) {
        this._packageView = void 0;
        return;
      }
      this._packageView = e[0];
    },
    "_observePackageViewExtension"
  );
};
B = async function() {
  if (!this._packageView) {
    console.warn("Tried to configure package without view");
    return;
  }
  if (!await J(this._packageView)) {
    console.warn("Failed to create package view element");
    return;
  }
  throw new Error("package view modal temporarily disabled.");
};
W = async function() {
  if (!this.name) return;
  await Y(this, {
    color: "positive",
    headline: this.name,
    content: this.localize.term("packager_packageMigrationsConfirmText")
  }), this._migrationButtonState = "waiting";
  const { error: e } = await Q(
    this,
    K.postPackageByNameRunMigration({ path: { name: this.name } })
  );
  e || (f(this, _)?.peek("positive", {
    data: {
      message: this.localize.term("packager_packageMigrationsComplete")
    }
  }), this._migrationButtonState = "success", this.hasPendingMigrations = !1);
};
c.styles = V`
		:host {
			display: flex;
			min-height: 47px;
		}
	`;
l([
  v()
], c.prototype, "name", 1);
l([
  v()
], c.prototype, "version", 2);
l([
  v({ type: Boolean, attribute: !1 })
], c.prototype, "hasPendingMigrations", 2);
l([
  v({ attribute: "custom-icon" })
], c.prototype, "customIcon", 2);
l([
  k()
], c.prototype, "_migrationButtonState", 2);
l([
  k()
], c.prototype, "_packageView", 2);
c = l([
  z("umb-installed-packages-section-view-item")
], c);
var ae = Object.defineProperty, ie = Object.getOwnPropertyDescriptor, D = (e) => {
  throw TypeError(e);
}, M = (e, t, a, n) => {
  for (var i = n > 1 ? void 0 : n ? ie(t, a) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (i = (n ? r(t, a, i) : r(i)) || i);
  return n && i && ae(t, a, i), i;
}, x = (e, t, a) => t.has(e) || D("Cannot " + a), S = (e, t, a) => (x(e, t, "read from private field"), a ? a.call(e) : t.get(e)), I = (e, t, a) => t.has(e) ? D("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), se = (e, t, a, n) => (x(e, t, "write to private field"), t.set(e, a), a), d = (e, t, a) => (x(e, t, "access private method"), a), h, p, R, A, F, G;
let m = class extends T {
  constructor() {
    super(), I(this, p), this._installedPackages = [], this._migrationPackages = [], I(this, h), se(this, h, new L(this));
  }
  firstUpdated() {
    d(this, p, R).call(this);
  }
  render() {
    return this._installedPackages.length ? o`${d(this, p, G).call(this)} ${d(this, p, F).call(this)} ` : d(this, p, A).call(this);
  }
};
h = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
R = async function() {
  const e = await Promise.all([S(this, h).rootItems(), S(this, h).migrations()]), [t, a] = e;
  this.observe(H([t, a]), ([n, i]) => {
    this._installedPackages = n.map((s) => {
      const r = i.find((w) => w.packageName === s.name);
      return r && (i = i.filter((w) => w.packageName !== s.name)), {
        ...s,
        hasPendingMigrations: r?.hasPendingMigrations ?? !1
      };
    }), this._migrationPackages = i.map((s) => ({
      name: s.packageName,
      hasPendingMigrations: s.hasPendingMigrations ?? !1,
      extensions: []
    }));
  });
};
A = function() {
  return o`
			<div class="no-packages">
				<h2><strong>${this.localize.term("packager_noPackages")}</strong></h2>
				<p>${q(this.localize.term("packager_noPackagesDescription"))}</p>
			</div>
		`;
};
F = function() {
  return o`
			<uui-box headline=${this.localize.term("packager_installedPackages")} style="--uui-box-default-padding:0">
				<uui-ref-list>
					${O(
    this._installedPackages,
    (e) => e.name,
    (e) => o`
							<umb-installed-packages-section-view-item
								.name=${e.name}
								.version=${e.version}
								.hasPendingMigrations=${e.hasPendingMigrations}>
							</umb-installed-packages-section-view-item>
						`
  )}
				</uui-ref-list>
			</uui-box>
		`;
};
G = function() {
  return this._migrationPackages.length ? o`
			<uui-box headline="Migrations" style="--uui-box-default-padding:0">
				<uui-ref-list>
					${O(
    this._migrationPackages,
    (e) => e.name,
    (e) => o`
							<umb-installed-packages-section-view-item
								custom-icon="icon-sync"
								.name=${e.name}
								.version=${e.version}
								.hasPendingMigrations=${e.hasPendingMigrations}>
							</umb-installed-packages-section-view-item>
						`
  )}
				</uui-ref-list>
			</uui-box>
		` : $;
};
m.styles = [
  X,
  V`
			:host {
				display: block;
				padding: var(--uui-size-layout-1);
			}
			uui-box {
				margin-top: var(--uui-size-space-5);
				padding-bottom: var(--uui-size-space-1);
			}

			umb-installed-packages-section-view-item {
				padding: var(--uui-size-space-3) 0 var(--uui-size-space-2);
			}

			umb-installed-packages-section-view-item:not(:first-child) {
				border-top: 1px solid var(--uui-color-border, #d8d7d9);
			}

			.no-packages {
				display: flex;
				justify-content: space-around;
				flex-direction: column;
				align-items: center;
			}
		`
];
M([
  k()
], m.prototype, "_installedPackages", 2);
M([
  k()
], m.prototype, "_migrationPackages", 2);
m = M([
  z("umb-installed-packages-section-view")
], m);
const fe = m;
export {
  m as UmbInstalledPackagesSectionViewElement,
  fe as default
};
//# sourceMappingURL=installed-packages-section-view.element-BrbjdLzX.js.map
