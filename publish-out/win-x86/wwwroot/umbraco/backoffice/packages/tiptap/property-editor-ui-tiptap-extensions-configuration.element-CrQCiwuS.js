import { nothing as O, repeat as g, ifDefined as P, when as U, html as u, css as $, property as b, state as E, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { umbExtensionsRegistry as S } from "@umbraco-cms/backoffice/extension-registry";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_DATASET_CONTEXT as z } from "@umbraco-cms/backoffice/property";
import { UmbChangeEvent as B } from "@umbraco-cms/backoffice/event";
var I = Object.defineProperty, L = Object.getOwnPropertyDescriptor, x = (s) => {
  throw TypeError(s);
}, c = (s, e, t, i) => {
  for (var a = i > 1 ? void 0 : i ? L(e, t) : e, d = s.length - 1, _; d >= 0; d--)
    (_ = s[d]) && (a = (i ? _(e, t, a) : _(a)) || a);
  return i && a && I(e, t, a), a;
}, T = (s, e, t) => e.has(s) || x("Cannot " + t), f = (s, e, t) => (T(s, e, "read from private field"), t ? t.call(s) : e.get(s)), y = (s, e, t) => e.has(s) ? x("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), l = (s, e, t) => (T(s, e, "access private method"), t), p, n, w, C, h, v;
const m = "Umb.Tiptap.RichTextEssentials", r = "Umb.Tiptap.Block";
let o = class extends k {
  constructor() {
    super(), y(this, n), y(this, p, /* @__PURE__ */ new Set([m])), this.value = [m], this._extensions = [], this._groups = [], this.consumeContext(z, async (s) => {
      this.observe(
        await s?.propertyValueByAlias("blocks"),
        (e) => {
          const t = this.value ? [...this.value] : [];
          if (e?.length)
            t.includes(r) || t.push(r), f(this, p).delete(r);
          else {
            const i = t.indexOf(r) ?? -1;
            i >= 0 && t.splice(i, 1), f(this, p).add(r);
          }
          (!this.value || !l(this, n, w).call(this, t, this.value)) && (l(this, n, h).call(this, t), l(this, n, v).call(this)), this.requestUpdate("_extensions");
        },
        "_observeBlocks"
      );
    });
  }
  async firstUpdated(s) {
    super.firstUpdated(s), this.observe(S.byType("tiptapExtension"), (e) => {
      this._extensions = e.sort((t, i) => t.alias.localeCompare(i.alias)).map((t) => ({
        alias: t.alias,
        label: t.meta.label,
        icon: t.meta.icon,
        group: t.meta.group,
        description: t.meta.description
      })), this.value || l(this, n, h).call(this, this._extensions.map((t) => t.alias)), l(this, n, v).call(this);
    });
  }
  render() {
    return this._groups.length ? u`
			${g(
      this._groups,
      (s) => u`
					<div class="group">
						<uui-label>${this.localize.string(s.group)}</uui-label>
						<ul>
							${g(
        s.extensions,
        (e) => u`
									<li title=${P(e.description)}>
										<uui-checkbox
											label=${this.localize.string(e.label)}
											value=${e.alias}
											?checked=${e.selected}
											?disabled=${f(this, p).has(e.alias)}
											@change=${() => l(this, n, C).call(this, e)}>
											<div class="inner">
												${U(e.icon, () => u`<umb-icon .name=${e.icon}></umb-icon>`)}
												<span>${this.localize.string(e.label)}</span>
											</div>
										</uui-checkbox>
									</li>
								`
      )}
						</ul>
					</div>
				`
    )}
		` : O;
  }
};
p = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
w = function(s, e) {
  return s.length === e.length && s.every((t) => e.includes(t)) && e.every((t) => s.includes(t));
};
C = function(s) {
  s.selected = !s.selected;
  const e = s.selected ? [...this.value ?? [], s.alias] : (this.value ?? []).filter((t) => t !== s.alias);
  l(this, n, h).call(this, e);
};
h = function(s) {
  this.value = s, this.dispatchEvent(new B());
};
v = function() {
  const s = this._extensions.map((i) => ({
    ...i,
    selected: this.value.includes(i.alias) || i.alias === m
  })), e = this.localize.term("tiptap_extGroup_unknown"), t = Object.groupBy(s, (i) => i.group || e);
  this._groups = Object.keys(t).sort((i, a) => i.localeCompare(a)).map((i) => ({ group: i, extensions: t[i] }));
};
o.styles = [
  $`
			:host {
				display: flex;
				flex-wrap: wrap;
				gap: 1rem;
			}

			.group {
				width: calc((100% - 2rem) / 3);

				ul {
					list-style: none;
					padding: 0;
					margin: 1rem 0 0;

					.inner {
						display: flex;
						flex-direction: row;
						gap: 0.5rem;

						umb-icon {
							font-size: 1.2rem;
						}
					}
				}
			}
		`
];
c([
  b({ attribute: !1 })
], o.prototype, "value", 2);
c([
  b({ attribute: !1 })
], o.prototype, "config", 2);
c([
  E()
], o.prototype, "_extensions", 2);
c([
  E()
], o.prototype, "_groups", 2);
o = c([
  A("umb-property-editor-ui-tiptap-extensions-configuration")
], o);
export {
  o as UmbPropertyEditorUiTiptapExtensionsConfigurationElement,
  o as element
};
//# sourceMappingURL=property-editor-ui-tiptap-extensions-configuration.element-CrQCiwuS.js.map
