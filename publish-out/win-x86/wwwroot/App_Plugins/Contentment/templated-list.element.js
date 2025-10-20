import { html as m, ifDefined as b, repeat as V, nothing as g, classMap as w, until as $, unsafeHTML as B, css as C, state as d, property as D, customElement as I } from "@umbraco-cms/backoffice/external/lit";
import { p as L } from "./parse-boolean.function.js";
import { L as P } from "./liquid.browser.js";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as W } from "@umbraco-cms/backoffice/event";
var k = Object.defineProperty, O = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, r = (e, t, l, a) => {
  for (var s = a > 1 ? void 0 : a ? O(t, l) : t, n = e.length - 1, f; n >= 0; n--)
    (f = e[n]) && (s = (a ? f(t, l, s) : f(s)) || s);
  return a && s && k(t, l, s), s;
}, y = (e, t, l) => t.has(e) || M("Cannot " + l), o = (e, t, l) => (y(e, t, "read from private field"), l ? l.call(e) : t.get(e)), h = (e, t, l) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, l), x = (e, t, l, a) => (y(e, t, "write to private field"), t.set(e, l), l), v = (e, t, l) => (y(e, t, "access private method"), l), u, p, _, c, A, E, S;
let i = class extends T {
  constructor() {
    super(...arguments), h(this, c), h(this, u, new P({ cache: !0 })), h(this, p), this._enableMultiple = !1, this._flexDirection = "column", this._items = [], h(this, _, []);
  }
  set value(e) {
    x(this, _, e ?? []);
  }
  get value() {
    return o(this, _);
  }
  set config(e) {
    if (!e) return;
    const t = e.getValueByAlias("defaultValue") ?? [];
    this._enableMultiple = L(e.getValueByAlias("enableMultiple"));
    const l = e.getValueByAlias("template") ?? "{{ item.name }}";
    x(this, p, o(this, u).parse(l)), this._flexDirection = e.getValueByAlias("orientation") === "horizontal" ? "row" : "column", this._listStyles = e.getValueByAlias("listStyles"), this._listItemStyles = e.getValueByAlias("listItemStyles");
    const a = e.getValueByAlias("items") ?? [];
    this._items = a.map((s) => {
      var n;
      return { ...s, selected: ((n = this.value) == null ? void 0 : n.includes(s.value)) ?? !1 };
    }), this.value || (this.value = this._enableMultiple && Array.isArray(t) ? t : [t]);
  }
  render() {
    var e;
    return (e = this._items) != null && e.length ? m`
			<ul class=${this._flexDirection} style=${b(this._listStyles)}>
				${V(
      this._items,
      (t) => t.value,
      (t) => v(this, c, E).call(this, t)
    )}
			</ul>
		` : m`
				<contentment-info-box
					compact
					type="warning"
					icon="icon-alert"
					heading="There are no items to display"></contentment-info-box>
			`;
  }
};
u = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
A = function(e) {
  e.selected = !e.selected;
  const t = [];
  this._items.forEach((l) => {
    this._enableMultiple || (l.selected = e.selected && l.value === e.value), l.selected && (t == null || t.push(l.value));
  }), this.value = t, this.dispatchEvent(new W());
};
E = function(e) {
  return e ? m`
			<li class=${w({ selected: e.selected })} style=${b(this._listItemStyles)}>
				<button
					class=${w({ selected: e.selected })}
					?disabled=${e.disabled}
					@click=${() => v(this, c, A).call(this, e)}>
					${$(v(this, c, S).call(this, e))}
				</button>
			</li>
		` : g;
};
S = async function(e) {
  if (!o(this, u) || !o(this, p)) return null;
  const t = await o(this, u).render(o(this, p), { item: e });
  return t ? B(t) : g;
};
i.styles = [
  C`
			ul {
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				gap: var(--uui-size-3);

				list-style: none;
				padding: 0;
				margin: 0;

				&.row {
					flex-direction: row;
				}

				> li {
					flex: 1;
					border-radius: calc(var(--uui-border-radius) * 2);

					&.selected {
						outline: var(--uui-size-1) solid var(--uui-color-selected);
					}

					> button {
						all: initial;
						font: inherit;
						color: inherit;

						border-radius: calc(var(--uui-border-radius) * 2);
						cursor: pointer;
						display: flex;
						width: 100%;

						> * {
							flex: 1;
							pointer-events: none;
						}

						&[disabled] {
							cursor: not-allowed !important;
							opacity: 0.5;
						}

						&:focus-visible {
							outline: 2px solid var(--uui-color-focus);
						}
					}
				}
			}
		`
];
r([
  d()
], i.prototype, "_enableMultiple", 2);
r([
  d()
], i.prototype, "_flexDirection", 2);
r([
  d()
], i.prototype, "_items", 2);
r([
  d()
], i.prototype, "_listStyles", 2);
r([
  d()
], i.prototype, "_listItemStyles", 2);
r([
  D({ type: Array })
], i.prototype, "value", 1);
i = r([
  I("contentment-property-editor-ui-templated-list")
], i);
export {
  i as ContentmentPropertyEditorUITemplatedListElement,
  i as element
};
//# sourceMappingURL=templated-list.element.js.map
