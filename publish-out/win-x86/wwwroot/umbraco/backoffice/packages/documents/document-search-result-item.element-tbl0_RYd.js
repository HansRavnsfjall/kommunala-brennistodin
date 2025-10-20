import { nothing as y, when as m, classMap as C, html as o, css as D, property as T, state as p, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { UMB_APP_LANGUAGE_CONTEXT as E } from "@umbraco-cms/backoffice/language";
var P = Object.defineProperty, S = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, c = (t, e, a, n) => {
  for (var i = n > 1 ? void 0 : n ? S(e, a) : e, h = t.length - 1, l; h >= 0; h--)
    (l = t[h]) && (i = (n ? l(e, a, i) : l(i)) || i);
  return n && i && P(e, a, i), i;
}, U = (t, e, a) => e.has(t) || d("Cannot " + a), $ = (t, e, a) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), u = (t, e, a) => (U(t, e, "access private method"), a), s, _, v, f, b, g;
let r = class extends x {
  constructor() {
    super(), $(this, s), this.consumeContext(E, (t) => {
      u(this, s, _).call(this, t), u(this, s, v).call(this, t);
    });
  }
  render() {
    if (!this.item) return y;
    const t = u(this, s, b).call(this), e = u(this, s, g).call(this), a = {
      trashed: this.item.isTrashed,
      hasState: this.item.isTrashed || e
    };
    return o`
			${m(
      this.item.documentType.icon ?? this.item.icon,
      (n) => o`<umb-icon name=${n}></umb-icon>`,
      () => o`<uui-icon name="icon-document"></uui-icon>`
    )}
			<span class=${C(a)}>${t}</span>
			<div class="extra">
				${m(
      this.item.isTrashed,
      () => o`
						<uui-tag look="secondary">
							<umb-localize key="mediaPicker_trashed">Trashed</umb-localize>
						</uui-tag>
					`
    )}
				${m(!this.item.isTrashed && e, () => o`<uui-tag look="secondary">Draft</uui-tag>`)}
			</div>
		`;
  }
};
s = /* @__PURE__ */ new WeakSet();
_ = function(t) {
  this.observe(t?.appLanguageCulture, (e) => {
    this._currentCulture = e, this._variant = u(this, s, f).call(this, e);
  });
};
v = function(t) {
  this.observe(t?.appDefaultLanguage, (e) => {
    this._defaultCulture = e?.unique;
  });
};
f = function(t) {
  return this.item?.variants.find((e) => e.culture === t);
};
b = function() {
  if (this.item?.variants[0]?.culture === null)
    return this.item?.name ?? "Unknown";
  const t = u(this, s, f).call(this, this._defaultCulture)?.name ?? this.item?.name ?? "Unknown";
  return this._variant?.name ?? `(${t})`;
};
g = function() {
  return this.item?.isTrashed ? !1 : this._variant?.state === "Draft" || this.item?.variants[0]?.state === "Draft";
};
r.styles = [
  D`
			:host {
				border-radius: var(--uui-border-radius);
				outline-offset: -3px;
				padding: var(--uui-size-space-3) var(--uui-size-space-5);

				display: flex;
				gap: var(--uui-size-space-3);
				align-items: center;

				width: 100%;

				> span {
					flex: 1;

					&.hasState {
						opacity: 0.6;
					}

					&.trashed {
						text-decoration: line-through;
					}
				}
			}
		`
];
c([
  T({ type: Object })
], r.prototype, "item", 2);
c([
  p()
], r.prototype, "_currentCulture", 2);
c([
  p()
], r.prototype, "_defaultCulture", 2);
c([
  p()
], r.prototype, "_variant", 2);
r = c([
  w("umb-document-search-result-item")
], r);
export {
  r as UmbDocumentSearchResultItemElement,
  r as element
};
//# sourceMappingURL=document-search-result-item.element-tbl0_RYd.js.map
