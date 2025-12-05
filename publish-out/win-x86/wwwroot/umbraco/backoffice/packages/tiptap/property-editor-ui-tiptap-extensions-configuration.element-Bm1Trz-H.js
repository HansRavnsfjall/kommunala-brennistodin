import { nothing as O, repeat as g, when as b, html as o, css as P, property as E, state as x, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { umbExtensionsRegistry as A } from "@umbraco-cms/backoffice/extension-registry";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_DATASET_CONTEXT as S } from "@umbraco-cms/backoffice/property";
import { UmbChangeEvent as z } from "@umbraco-cms/backoffice/event";
var B = Object.defineProperty, I = Object.getOwnPropertyDescriptor, w = (s) => {
  throw TypeError(s);
}, u = (s, e, t, i) => {
  for (var a = i > 1 ? void 0 : i ? I(e, t) : e, d = s.length - 1, _; d >= 0; d--)
    (_ = s[d]) && (a = (i ? _(e, t, a) : _(a)) || a);
  return i && a && B(e, t, a), a;
}, T = (s, e, t) => e.has(s) || w("Cannot " + t), f = (s, e, t) => (T(s, e, "read from private field"), t ? t.call(s) : e.get(s)), y = (s, e, t) => e.has(s) ? w("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), l = (s, e, t) => (T(s, e, "access private method"), t), c, n, C, $, h, v;
const m = "Umb.Tiptap.RichTextEssentials", p = "Umb.Tiptap.Block";
let r = class extends k {
  constructor() {
    super(), y(this, n), y(this, c, /* @__PURE__ */ new Set([m])), this.value = [m], this._extensions = [], this._groups = [], this.consumeContext(S, async (s) => {
      this.observe(
        await s?.propertyValueByAlias("blocks"),
        (e) => {
          const t = this.value ? [...this.value] : [];
          if (e?.length)
            t.includes(p) || t.push(p), f(this, c).delete(p);
          else {
            const i = t.indexOf(p) ?? -1;
            i >= 0 && t.splice(i, 1), f(this, c).add(p);
          }
          (!this.value || !l(this, n, C).call(this, t, this.value)) && (l(this, n, h).call(this, t), l(this, n, v).call(this)), this.requestUpdate("_extensions");
        },
        "_observeBlocks"
      );
    });
  }
  async firstUpdated(s) {
    super.firstUpdated(s), this.observe(A.byType("tiptapExtension"), (e) => {
      this._extensions = e.sort((t, i) => (i.weight || 0) - (t.weight || 0) || t.alias.localeCompare(i.alias)).map((t) => ({
        alias: t.alias,
        label: t.meta.label,
        icon: t.meta.icon,
        group: t.meta.group,
        description: t.meta.description
      })), this.value || l(this, n, h).call(this, this._extensions.map((t) => t.alias)), l(this, n, v).call(this);
    });
  }
  render() {
    return this._groups.length ? o`
			${g(
      this._groups,
      (s) => o`
					<div class="group">
						<uui-label>${this.localize.string(s.group)}</uui-label>
						<ul>
							${g(
        s.extensions,
        (e) => o`
									<li title=${e.description ?? e.alias}>
										<uui-checkbox
											label=${this.localize.string(e.label)}
											value=${e.alias}
											?checked=${e.selected}
											?disabled=${f(this, c).has(e.alias)}
											@change=${() => l(this, n, $).call(this, e)}>
											<div class="inner">
												${b(e.icon, () => o`<umb-icon .name=${e.icon}></umb-icon>`)}
												${b(
          e.label.startsWith("#"),
          () => o`<span>${this.localize.string(e.label)}</span>`,
          () => o`<umb-ufm-render inline .markdown=${e.label}></umb-ufm-render>`
        )}
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
c = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
C = function(s, e) {
  return s.length === e.length && s.every((t) => e.includes(t)) && e.every((t) => s.includes(t));
};
$ = function(s) {
  s.selected = !s.selected;
  const e = s.selected ? [...this.value ?? [], s.alias] : (this.value ?? []).filter((t) => t !== s.alias);
  l(this, n, h).call(this, e);
};
h = function(s) {
  this.value = s, this.dispatchEvent(new z());
};
v = function() {
  const s = this._extensions.map((i) => ({
    ...i,
    selected: this.value.includes(i.alias) || i.alias === m
  })), e = this.localize.term("tiptap_extGroup_unknown"), t = Object.groupBy(s, (i) => i.group || e);
  this._groups = Object.keys(t).sort((i, a) => i.localeCompare(a)).map((i) => ({ group: i, extensions: t[i] }));
};
r.styles = [
  P`
			:host {
				display: flex;
				flex-wrap: wrap;
				gap: 1rem;
			}

			.group {
				min-width: 180px;
				width: calc((100% - 3rem) / 4);

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
u([
  E({ attribute: !1 })
], r.prototype, "value", 2);
u([
  E({ attribute: !1 })
], r.prototype, "config", 2);
u([
  x()
], r.prototype, "_extensions", 2);
u([
  x()
], r.prototype, "_groups", 2);
r = u([
  U("umb-property-editor-ui-tiptap-extensions-configuration")
], r);
export {
  r as UmbPropertyEditorUiTiptapExtensionsConfigurationElement,
  r as element
};
//# sourceMappingURL=property-editor-ui-tiptap-extensions-configuration.element-Bm1Trz-H.js.map
