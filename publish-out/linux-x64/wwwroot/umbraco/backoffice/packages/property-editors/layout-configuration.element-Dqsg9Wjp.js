import { html as c, nothing as M, repeat as P, when as k, ifDefined as f, css as z, property as w, customElement as V } from "@umbraco-cms/backoffice/external/lit";
import { extractUmbColorVariable as D } from "@umbraco-cms/backoffice/resources";
import { simpleHashCode as q } from "@umbraco-cms/backoffice/observable-api";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as W } from "@umbraco-cms/backoffice/sorter";
import { UmbChangeEvent as s } from "@umbraco-cms/backoffice/event";
import { UmbTextStyles as N } from "@umbraco-cms/backoffice/style";
import { UMB_ICON_PICKER_MODAL as R } from "@umbraco-cms/backoffice/icon";
var T = Object.defineProperty, B = Object.getOwnPropertyDescriptor, b = (t) => {
  throw TypeError(t);
}, _ = (t, e, i, a) => {
  for (var r = a > 1 ? void 0 : a ? B(e, i) : e, h = t.length - 1, v; h >= 0; h--)
    (v = t[h]) && (r = (a ? v(e, i, r) : v(r)) || r);
  return a && r && T(e, i, r), r;
}, g = (t, e, i) => e.has(t) || b("Cannot " + i), m = (t, e, i) => (g(t, e, "read from private field"), i ? i.call(t) : e.get(t)), d = (t, e, i) => e.has(t) ? b("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), G = (t, e, i, a) => (g(t, e, "write to private field"), e.set(t, i), i), n = (t, e, i) => (g(t, e, "access private method"), i), y, u, o, C, E, $, U, x, O, p, I, S, L;
let l = class extends A {
  constructor() {
    super(...arguments), d(this, o), d(this, y, new W(this, {
      getUniqueOfElement: (t) => t.id,
      getUniqueOfModel: (t) => n(this, o, p).call(this, t),
      itemSelector: ".layout-item",
      containerSelector: "#layout-wrapper",
      onChange: ({ model: t }) => {
        this.value = t, this.dispatchEvent(new s());
      }
    })), d(this, u, []);
  }
  set value(t) {
    G(this, u, t ?? []), m(this, y).setModel(m(this, u));
  }
  get value() {
    return m(this, u);
  }
  render() {
    return c`
			<div id="layout-wrapper">${n(this, o, S).call(this)}</div>
			${n(this, o, I).call(this)}
		`;
  }
};
y = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
C = async function() {
  await this.updateComplete, (this.shadowRoot?.querySelector(".layout-item:last-of-type > uui-input")).focus();
};
E = function(t) {
  const e = t.target.value;
  if (this.value?.find((a) => e?.value === a.collectionView))
    throw new Error("Duplicate `collectionView` aliases are not allowed.");
  this.value = [
    ...this.value ?? [],
    {
      icon: e?.icon,
      name: e?.label,
      collectionView: e?.value
    }
  ], this.dispatchEvent(new s()), n(this, o, C).call(this);
};
$ = function(t, e) {
  const i = [...this.value ?? []];
  i[e] = { ...i[e], name: t.target.value }, this.value = i, this.dispatchEvent(new s());
};
U = function(t) {
  const e = [...this.value ?? []];
  e.splice(t, 1), this.value = e, this.dispatchEvent(new s());
};
x = async function(t, e) {
  const i = await (await import("@umbraco-cms/backoffice/modal")).umbOpenModal(this, R, { value: t }).catch(() => {
  });
  if (!i) return;
  const a = [...this.value ?? []];
  a[e] = { ...a[e], icon: `${i.icon} color-${i.color}` }, this.value = a, this.dispatchEvent(new s());
};
O = function(t) {
  const [e, i] = t?.split(" ") ?? [];
  return { icon: e, color: i?.replace("color-", "") };
};
p = function(t) {
  return "x" + q("" + t.collectionView + t.name + t.icon).toString(16);
};
I = function() {
  return c`<umb-input-manifest extension-type="collectionView" @change=${n(this, o, E)}></umb-input-manifest>`;
};
S = function() {
  return this.value ? P(
    this.value,
    (t) => n(this, o, p).call(this, t),
    (t, e) => n(this, o, L).call(this, t, e)
  ) : M;
};
L = function(t, e) {
  const i = n(this, o, O).call(this, t.icon), a = i.color ? D(i.color) : void 0;
  return c`
			<div class="layout-item" id=${n(this, o, p).call(this, t)}>
				<uui-icon class="drag-handle" name="icon-grip"></uui-icon>

				<uui-button compact look="outline" label="pick icon" @click=${() => n(this, o, x).call(this, i, e)}>
					${k(
    i.color,
    () => c`<uui-icon name=${f(i.icon)} style="color:var(${a})"></uui-icon>`,
    () => c`<uui-icon name=${f(i.icon)}></uui-icon>`
  )}
				</uui-button>

				<uui-input
					label="name"
					value=${f(t.name)}
					placeholder="Enter a label..."
					@change=${(r) => n(this, o, $).call(this, r, e)}></uui-input>

				<div class="alias">
					<code>${t.collectionView}</code>
				</div>

				<div class="actions">
					<uui-button
						label=${this.localize.term("general_remove")}
						look="secondary"
						@click=${() => n(this, o, U).call(this, e)}></uui-button>
				</div>
			</div>
		`;
};
l.styles = [
  N,
  z`
			#layout-wrapper {
				display: flex;
				flex-direction: column;
				gap: 1px;
				margin-bottom: var(--uui-size-1);
			}

			.layout-item {
				background-color: var(--uui-color-surface-alt);
				display: flex;
				align-items: center;
				gap: var(--uui-size-6);
				padding: var(--uui-size-3) var(--uui-size-6);
			}

			.layout-item > uui-icon {
				flex: 0 0 var(--uui-size-6);
			}

			.layout-item > uui-button {
				flex: 0 0 var(--uui-size-10);
			}

			.layout-item > uui-input,
			.layout-item > .alias {
				flex: 1;
			}

			.layout-item > .actions {
				flex: 0 0 auto;
				display: flex;
				justify-content: flex-end;
			}

			.drag-handle {
				cursor: grab;
			}

			.drag-handle:active {
				cursor: grabbing;
			}
		`
];
_([
  w({ type: Array })
], l.prototype, "value", 1);
_([
  w({ type: Object, attribute: !1 })
], l.prototype, "config", 2);
l = _([
  V("umb-property-editor-ui-collection-layout-configuration")
], l);
const j = l;
export {
  l as UmbPropertyEditorUICollectionLayoutConfigurationElement,
  j as default
};
//# sourceMappingURL=layout-configuration.element-Dqsg9Wjp.js.map
