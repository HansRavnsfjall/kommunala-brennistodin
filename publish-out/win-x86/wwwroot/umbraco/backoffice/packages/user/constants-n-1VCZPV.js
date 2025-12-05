import { UmbChangeEvent as _ } from "@umbraco-cms/backoffice/event";
import { umbExtensionsRegistry as $ } from "@umbraco-cms/backoffice/extension-registry";
import { html as a, nothing as O, ifDefined as u, css as S, property as v, state as I, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as V } from "@umbraco-cms/backoffice/validation";
var x = Object.defineProperty, z = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, c = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? z(t, s) : t, h = e.length - 1, m; h >= 0; h--)
    (m = e[h]) && (i = (n ? m(t, s, i) : m(i)) || i);
  return n && i && x(t, s, i), i;
}, d = (e, t, s) => t.has(e) || f("Cannot " + s), b = (e, t, s) => (d(e, t, "read from private field"), t.get(e)), y = (e, t, s) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), D = (e, t, s, n) => (d(e, t, "write to private field"), t.set(e, s), s), o = (e, t, s) => (d(e, t, "access private method"), s), p, r, g, w, P, U, E, C, T;
let l = class extends V(M) {
  constructor() {
    super(...arguments), y(this, r), this._entityType = "", this.allowedVerbs = [], this._manifests = [], y(this, p);
  }
  get entityType() {
    return this._entityType;
  }
  set entityType(e) {
    e !== this._entityType && (this._entityType = e, o(this, r, w).call(this));
  }
  getFormElement() {
  }
  render() {
    return a`${o(this, r, C).call(this, this._manifests)} `;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), b(this, p)?.destroy();
  }
};
p = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
g = function(e) {
  return e.every((t) => this.allowedVerbs.includes(t));
};
w = function() {
  b(this, p)?.destroy(), D(this, p, this.observe(
    $.byType("entityUserPermission"),
    (e) => {
      this._manifests = e.filter(
        (t) => t.forEntityTypes.includes(this.entityType)
      );
    },
    "umbUserPermissionManifestsObserver"
  ));
};
P = function(e, t) {
  e.stopPropagation(), e.target.allowed ? o(this, r, U).call(this, t) : o(this, r, E).call(this, t);
};
U = function(e) {
  const t = [...this.allowedVerbs, ...e];
  this.allowedVerbs = [...new Set(t)], this.dispatchEvent(new _());
};
E = function(e) {
  this.allowedVerbs = this.allowedVerbs.filter((t) => !e.includes(t)), this.dispatchEvent(new _());
};
C = function(e) {
  const t = Object.groupBy(
    e,
    (s) => s.meta.group
  );
  return a`
			${Object.entries(t).map(
    ([s, n]) => a`
					${s !== "undefined" ? a` <h5><umb-localize .key=${`actionCategories_${s}`}>${s}</umb-localize></h5> ` : O}
					<div>${n.map((i) => a` ${o(this, r, T).call(this, i)} `)}</div>
				`
  )}
		`;
};
T = function(e) {
  return a` <umb-input-user-permission-verb
			label=${u(e.meta.label ? this.localize.string(e.meta.label) : e.name)}
			description=${u(e.meta.description ? this.localize.string(e.meta.description) : void 0)}
			?allowed=${o(this, r, g).call(this, e.meta.verbs)}
			@change=${(t) => o(this, r, P).call(this, t, e.meta.verbs)}></umb-input-user-permission-verb>`;
};
l.styles = S`
		umb-input-user-permission-verb:not(:last-of-type) {
			border-bottom: 1px solid var(--uui-color-divider);
		}
	`;
c([
  v({ type: String, attribute: "entity-type" })
], l.prototype, "entityType", 1);
c([
  v({ attribute: !1 })
], l.prototype, "allowedVerbs", 2);
c([
  I()
], l.prototype, "_manifests", 2);
l = c([
  A("umb-input-entity-user-permission")
], l);
const R = "Umb.Condition.UserPermission.Fallback";
export {
  l as U,
  R as a
};
//# sourceMappingURL=constants-n-1VCZPV.js.map
