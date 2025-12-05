import { U as H } from "./index-jGJQ3LmE.js";
import { property as _, state as l, customElement as T, nothing as F, html as f, css as z, repeat as K } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as L } from "@umbraco-cms/backoffice/style";
import { UmbContentTypePropertyStructureHelper as J, UmbContentTypeContainerStructureHelper as Y } from "@umbraco-cms/backoffice/content-type";
import { UmbLitElement as B } from "@umbraco-cms/backoffice/lit-element";
import { UmbVariantId as Q } from "@umbraco-cms/backoffice/variant";
import { UmbDataPathPropertyValueQuery as Z } from "@umbraco-cms/backoffice/validation";
var j = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, V = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? tt(e, r) : e, o = t.length - 1, p; o >= 0; o--)
    (p = t[o]) && (i = (a ? p(e, r, i) : p(i)) || i);
  return a && i && j(e, r, i), i;
};
let y = class extends B {
  willUpdate(t) {
    if (super.willUpdate(t), (t.has("type") || t.has("variantId") || t.has("ownerContext")) && this.variantId && this.property && this.ownerContext) {
      const e = new Q(
        this.property.variesByCulture ? this.variantId.culture : null,
        this.property.variesBySegment ? this.variantId.segment : null
      );
      this._dataPath = `$.values[${Z({
        alias: this.property.alias,
        culture: e.culture,
        segment: e.segment
      })}].value`, this.observe(
        this.ownerContext.propertyWriteGuard.isPermittedForVariantAndProperty(
          e,
          this.property,
          this.variantId
        ),
        (r) => {
          this._writeable = r;
        },
        "observeView"
      );
    }
  }
  render() {
    return !this._dataPath || this._writeable === void 0 ? F : f`<umb-property-type-based-property
			data-path=${this._dataPath}
			.property=${this.property}
			?readonly=${!this._writeable}></umb-property-type-based-property>`;
  }
};
V([
  _({ attribute: !1 })
], y.prototype, "variantId", 2);
V([
  _({ attribute: !1 })
], y.prototype, "property", 2);
V([
  l()
], y.prototype, "_dataPath", 2);
V([
  l()
], y.prototype, "_writeable", 2);
V([
  _({ attribute: !1 })
], y.prototype, "ownerContext", 2);
y = V([
  T("umb-block-workspace-view-edit-property")
], y);
var et = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, R = (t) => {
  throw TypeError(t);
}, w = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? rt(e, r) : e, o = t.length - 1, p; o >= 0; o--)
    (p = t[o]) && (i = (a ? p(e, r, i) : p(i)) || i);
  return a && i && et(e, r, i), i;
}, G = (t, e, r) => e.has(t) || R("Cannot " + r), s = (t, e, r) => (G(t, e, "read from private field"), r ? r.call(t) : e.get(t)), b = (t, e, r) => e.has(t) ? R("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), O = (t, e, r, a) => (G(t, e, "write to private field"), e.set(t, r), r), g = (t, e, r) => (G(t, e, "access private method"), r), k, P, v, C, I, d, W, N, U;
let u = class extends B {
  constructor() {
    super(), b(this, d), b(this, k), b(this, P), b(this, v, new J(this)), b(this, C), b(this, I, []), this.consumeContext(H, (t) => {
      O(this, P, t), this._ownerEntityType = s(this, P)?.getEntityType(), this.observe(
        t?.variantId,
        (e) => {
          this._workspaceVariantId = e, g(this, d, N).call(this);
        },
        "observeVariantId"
      ), g(this, d, W).call(this);
    });
  }
  get managerName() {
    return s(this, k);
  }
  set managerName(t) {
    O(this, k, t), g(this, d, W).call(this);
  }
  get containerId() {
    return s(this, v).getContainerId();
  }
  set containerId(t) {
    s(this, v).setContainerId(t);
  }
  render() {
    return this._workspaceVariantId && this._visibleProperties ? K(
      this._visibleProperties,
      (t) => t.alias,
      (t) => f`<umb-block-workspace-view-edit-property
							class="property"
							.ownerContext=${this._dataOwner}
							.ownerEntityType=${this._ownerEntityType}
							.variantId=${this._workspaceVariantId}
							.property=${t}></umb-block-workspace-view-edit-property>`
    ) : F;
  }
};
k = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
W = function() {
  if (!s(this, P) || !s(this, k)) return;
  this._dataOwner = s(this, P)[s(this, k)];
  const t = this._dataOwner.structure;
  s(this, v).setStructureManager(t), this.observe(
    s(this, v).propertyStructure,
    (e) => {
      O(this, C, e), g(this, d, N).call(this);
    },
    "observePropertyStructure"
  );
};
N = function() {
  if (!this._dataOwner || !s(this, C) || !s(this, v) || !this._workspaceVariantId)
    return;
  const t = this._dataOwner.propertyViewGuard;
  s(this, C).forEach((e) => {
    const r = new Q(
      e.variesByCulture ? this._workspaceVariantId.culture : null,
      e.variesBySegment ? this._workspaceVariantId.segment : null
    );
    this.observe(
      t.isPermittedForVariantAndProperty(r, e, this._workspaceVariantId),
      (a) => {
        if (a)
          s(this, I).push(e.unique), g(this, d, U).call(this);
        else {
          const i = s(this, I).indexOf(e.unique);
          i !== -1 && (s(this, I).splice(i, 1), g(this, d, U).call(this));
        }
      },
      `propertyViewGuard-permittedForVariantAndProperty-${e.unique}`
    );
  });
};
U = function() {
  this._visibleProperties = s(this, C).filter(
    (t) => s(this, I).includes(t.unique)
  );
};
u.styles = [
  L,
  z`
			.property {
				border-bottom: 1px solid var(--uui-color-divider);
			}
			.property:last-child {
				border-bottom: 0;
			}
		`
];
w([
  _({ attribute: !1 })
], u.prototype, "managerName", 1);
w([
  _({ type: String, attribute: "container-name", reflect: !1 })
], u.prototype, "containerId", 1);
w([
  l()
], u.prototype, "_dataOwner", 2);
w([
  l()
], u.prototype, "_workspaceVariantId", 2);
w([
  l()
], u.prototype, "_visibleProperties", 2);
w([
  l()
], u.prototype, "_ownerEntityType", 2);
u = w([
  T("umb-block-workspace-view-edit-properties")
], u);
var it = Object.defineProperty, at = Object.getOwnPropertyDescriptor, X = (t) => {
  throw TypeError(t);
}, m = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? at(e, r) : e, o = t.length - 1, p; o >= 0; o--)
    (p = t[o]) && (i = (a ? p(e, r, i) : p(i)) || i);
  return a && i && it(e, r, i), i;
}, D = (t, e, r) => e.has(t) || X("Cannot " + r), n = (t, e, r) => (D(t, e, "read from private field"), r ? r.call(t) : e.get(t)), S = (t, e, r) => e.has(t) ? X("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), A = (t, e, r, a) => (D(t, e, "write to private field"), e.set(t, r), r), q = (t, e, r) => (D(t, e, "access private method"), r), c, E, $, x, M;
let h = class extends B {
  constructor() {
    super(), S(this, x), S(this, c), S(this, E), S(this, $, new Y(this)), this.hideSingleGroup = !1, this._groups = [], this._hasProperties = !1, this.consumeContext(H, (t) => {
      A(this, E, t), q(this, x, M).call(this);
    });
  }
  get managerName() {
    return n(this, c);
  }
  set managerName(t) {
    A(this, c, t), q(this, x, M).call(this);
  }
  get containerId() {
    return this._containerId;
  }
  set containerId(t) {
    this._containerId = t, n(this, $).setContainerId(t);
  }
  render() {
    return f`
			${this._hasProperties ? f`<uui-box>
						<umb-block-workspace-view-edit-properties
							.managerName=${n(this, c)}
							data-mark="property-group:root"
							.containerId=${this._containerId}></umb-block-workspace-view-edit-properties>
					</uui-box>` : ""}
			${this.hideSingleGroup && this._groups.length === 1 ? this.renderGroup(this._groups[0]) : K(
      this._groups,
      (t) => t.id,
      (t) => f` <uui-box .headline=${t.name}>${this.renderGroup(t)}</uui-box>`
    )}
		`;
  }
  renderGroup(t) {
    return f`
			<umb-block-workspace-view-edit-properties
				.managerName=${n(this, c)}
				data-mark="property-group:${t.name}"
				.containerId=${t.id}></umb-block-workspace-view-edit-properties>
		`;
  }
};
c = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakSet();
M = function() {
  !n(this, E) || !n(this, c) || (n(this, $).setStructureManager(n(this, E)[n(this, c)].structure), this.observe(
    n(this, $).mergedContainers,
    (t) => {
      this._groups = t;
    },
    "observeGroups"
  ), this.observe(
    n(this, $).hasProperties,
    (t) => {
      this._hasProperties = t;
    },
    "observeHasProperties"
  ));
};
h.styles = [
  L,
  z`
			uui-box {
				--uui-box-default-padding: 0 var(--uui-size-space-5);
			}
			uui-box:not(:first-child) {
				margin-top: var(--uui-size-layout-1);
			}
		`
];
m([
  _({ attribute: !1 })
], h.prototype, "managerName", 1);
m([
  _({ type: String })
], h.prototype, "containerId", 1);
m([
  l()
], h.prototype, "_containerId", 2);
m([
  _({ type: Boolean, reflect: !1 })
], h.prototype, "hideSingleGroup", 2);
m([
  l()
], h.prototype, "_groups", 2);
m([
  l()
], h.prototype, "_hasProperties", 2);
h = m([
  T("umb-block-workspace-view-edit-tab")
], h);
const ct = h;
export {
  h as UmbBlockWorkspaceViewEditTabElement,
  ct as default
};
//# sourceMappingURL=block-workspace-view-edit-tab.element-BR3FSxY3.js.map
