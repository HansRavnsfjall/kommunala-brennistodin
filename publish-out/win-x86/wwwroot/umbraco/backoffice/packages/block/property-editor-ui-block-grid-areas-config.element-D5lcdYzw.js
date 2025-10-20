import { j as P, d as D, g as L } from "./index-q0gJfrDp.js";
import { U as V } from "./constants-D1CA0epN.js";
import { UmbContextBase as O } from "@umbraco-cms/backoffice/class-api";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
import { css as I, property as E, state as h, customElement as U, html as C, repeat as W } from "@umbraco-cms/backoffice/external/lit";
import { UMB_PROPERTY_CONTEXT as K, UMB_PROPERTY_DATASET_CONTEXT as N } from "@umbraco-cms/backoffice/property";
import { UmbModalRouteRegistrationController as Y } from "@umbraco-cms/backoffice/router";
import { incrementString as z } from "@umbraco-cms/backoffice/utils";
import { U as q } from "./block-grid-scale-manager.controller-CmKL_UCf.js";
import { UmbObjectState as X, appendToFrozenArray as F } from "@umbraco-cms/backoffice/observable-api";
import { umbConfirmModal as H } from "@umbraco-cms/backoffice/modal";
class J extends O {
  #a;
  setLayoutColumns(t) {
    this.#a = t;
  }
  getLayoutColumns() {
    return this.#a;
  }
  getLayoutContainerElement() {
    return this.getHostElement().shadowRoot?.querySelector(".umb-block-grid__area-container");
  }
  constructor(t) {
    super(t, P);
  }
}
class Q extends O {
  constructor(t) {
    super(t, D), this.#e = new X(void 0), this.area = this.#e.asObservable(), this.alias = this.#e.asObservablePart((r) => r?.alias), this.columnSpan = this.#e.asObservablePart((r) => r?.columnSpan), this.rowSpan = this.#e.asObservablePart((r) => r?.rowSpan ?? 1), this.scaleManager = new q(this), this.consumeContext(K, (r) => {
      this.#t = r, this.#s();
    }), this.consumeContext(P, (r) => {
      this.#a = r, this.scaleManager.setEntriesContext(r);
    });
  }
  //
  #a;
  //
  #t;
  //
  #r;
  #e;
  getMinMaxRowSpan() {
    return [1, 999];
  }
  setColumnSpan(t) {
    const r = this.#a?.getLayoutColumns();
    r && (t = Math.max(1, Math.min(t, r)), this.#e.update({ columnSpan: t }));
  }
  getColumnSpan() {
    return this.#e.getValue()?.columnSpan;
  }
  setRowSpan(t) {
    this.#e.update({ rowSpan: t });
  }
  getRowSpan() {
    return this.#e.getValue()?.rowSpan;
  }
  getAlias() {
    return this.#e.getValue()?.alias;
  }
  getRelevantColumnSpanOptions() {
    const t = this.#a?.getLayoutColumns();
    if (t)
      return Array.from({ length: t }, (r, s) => s + 1);
  }
  setAreaKey(t) {
    this.#r !== t && (this.#r = t, this.#s());
  }
  #s() {
    !this.#r || !this.#t || (this.observe(
      this.#t.value,
      (t) => {
        if (t) {
          const r = t.find((s) => s.key === this.#r);
          this.#e.setValue(r);
        }
      },
      "observeAreaData"
    ), this.observe(
      this.area,
      (t) => {
        if (t && this.#t) {
          const r = this.#t.getValue();
          if (!r) return;
          const s = F(r, t, (a) => a.key === this.#r);
          this.#t?.setValue(s);
        }
      },
      "observeInternalArea"
    ));
  }
  async requestDelete() {
    await H(this, {
      headline: `Delete ${this.getAlias()}`,
      content: "Are you sure you want to delete this Area?",
      confirmLabel: "Delete",
      color: "danger"
    }), this.delete();
  }
  delete() {
    if (!this.#r || !this.#t) return;
    const t = this.#t.getValue();
    t && this.#t.setValue(t.filter((r) => r.key !== this.#r));
  }
  destroy() {
    super.destroy(), this.#e.destroy();
  }
}
var Z = Object.defineProperty, j = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, d = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? j(t, r) : t, l = e.length - 1, u; l >= 0; l--)
    (u = e[l]) && (a = (s ? u(t, r, a) : u(a)) || a);
  return s && a && Z(t, r, a), a;
}, $ = (e, t, r) => t.has(e) || M("Cannot " + r), c = (e, t, r) => ($(e, t, "read from private field"), r ? r.call(e) : t.get(e)), G = (e, t, r) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ee = (e, t, r) => ($(e, t, "access private method"), r), i, k, B;
let o = class extends T {
  constructor() {
    super(), G(this, k), G(this, i, new Q(this)), this._alias = "", this.observe(c(this, i).alias, (e) => {
      this._alias = e ?? "";
    });
  }
  get key() {
    return this._key;
  }
  set key(e) {
    e && (this._key = e, this.setAttribute("data-area-key", e), c(this, i).setAreaKey(e));
  }
  connectedCallback() {
    super.connectedCallback(), this.observe(
      c(this, i).columnSpan,
      (e) => {
        this._columnSpan = e, this.setAttribute("data-col-span", e ? e.toString() : ""), this.style.setProperty("--umb-block-grid--grid-column", e ? e.toString() : ""), this.style.setProperty("--umb-block-grid--area-column-span", e ? e.toString() : "");
      },
      "columnSpan"
    ), this.observe(
      c(this, i).rowSpan,
      (e) => {
        this._rowSpan = e, this.setAttribute("data-row-span", e ? e.toString() : ""), this.style.setProperty("--umb-block-grid--area-row-span", e ? e.toString() : "");
      },
      "rowSpan"
    );
  }
  render() {
    return ee(this, k, B).call(this);
  }
};
i = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakSet();
B = function() {
  return this._key ? C`
					<span>${this._alias}</span>
					<uui-action-bar>
						<uui-button label="edit" compact href=${this.workspacePath + "edit/" + this._key}>
							<uui-icon name="icon-edit"></uui-icon>
						</uui-button>
						<uui-button label="delete" compact @click=${() => c(this, i).requestDelete()}>
							<uui-icon name="icon-remove"></uui-icon>
						</uui-button>
					</uui-action-bar>
					<umb-block-scale-handler @mousedown=${(e) => c(this, i).scaleManager.onScaleMouseDown(e)}>
						${this._columnSpan}x${this._rowSpan}
					</umb-block-scale-handler>
				` : "";
};
o.styles = [
  I`
			:host {
				position: relative;
				display: block;
				box-sizing: border-box;
				background-color: var(--uui-color-disabled);
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
				transition: background-color 120ms;
			}

			:host(:hover) {
				background-color: var(--uui-color-disabled-standalone);
			}

			uui-action-bar {
				position: absolute;
				top: var(--uui-size-2);
				right: var(--uui-size-2);
			}

			:host([drag-placeholder]) {
				opacity: 0.2;
			}
		`
];
d([
  E({ attribute: !1 })
], o.prototype, "key", 1);
d([
  E()
], o.prototype, "workspacePath", 2);
d([
  h()
], o.prototype, "_columnSpan", 2);
d([
  h()
], o.prototype, "_rowSpan", 2);
d([
  h()
], o.prototype, "_alias", 2);
o = d([
  U("umb-block-area-config-entry")
], o);
var te = Object.defineProperty, re = Object.getOwnPropertyDescriptor, R = (e) => {
  throw TypeError(e);
}, _ = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? re(t, r) : t, l = e.length - 1, u; l >= 0; l--)
    (u = e[l]) && (a = (s ? u(t, r, a) : u(a)) || a);
  return s && a && te(t, r, a), a;
}, w = (e, t, r) => t.has(e) || R("Cannot " + r), m = (e, t, r) => (w(e, t, "read from private field"), t.get(e)), v = (e, t, r) => t.has(e) ? R("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), f = (e, t, r, s) => (w(e, t, "write to private field"), t.set(e, r), r), g = (e, t, r) => (w(e, t, "access private method"), r), S, p, b, y, A, x;
let n = class extends T {
  constructor() {
    super(), v(this, y), v(this, S, new J(this)), v(this, p, 12), v(this, b), this._value = [], new Y(this, L).addAdditionalPath("block-grid-area-type").onSetup(() => {
      if (!this._areaGridColumns) return !1;
      const e = this._areaGridColumns * 0.5;
      return {
        data: {
          entityType: "block-grid-area-type",
          preset: { columnSpan: e === Math.round(e) ? e : this._areaGridColumns, alias: g(this, y, x).call(this, "area") }
        },
        modal: { size: "large" }
      };
    }).observeRouteBuilder((e) => {
      this._workspacePath = e({});
    }), this.consumeContext(N, async (e) => {
      this.observe(
        await e?.propertyValueByAlias("areaGridColumns"),
        (t) => {
          f(this, b, t > 0 ? t : null), g(this, y, A).call(this);
        },
        "observeAreaGridColumns"
      ), this.observe(
        await e?.propertyValueByAlias("layoutStylesheet"),
        (t) => {
          this._styleElement && this._styleElement.href === t || (this._styleElement = document.createElement("link"), this._styleElement.setAttribute("rel", "stylesheet"), this._styleElement.setAttribute("href", t ?? V));
        },
        "observeStylesheet"
      );
    });
  }
  set value(e) {
    this._value = e ?? [];
  }
  get value() {
    return this._value;
  }
  set config(e) {
    const t = e?.getValueByAlias("defaultAreaGridColumns");
    typeof t == "number" && t > 0 ? f(this, p, t ?? null) : f(this, p, 12), g(this, y, A).call(this);
  }
  render() {
    return this._areaGridColumns ? C`${this._styleElement}
					<div
						class="umb-block-grid__area-container"
						part="area-container"
						style="--umb-block-grid--area-grid-columns: ${this._areaGridColumns}">
						${W(
      this.value,
      (e) => e.key,
      (e) => C`<umb-block-area-config-entry
									class="umb-block-grid__area"
									.workspacePath=${this._workspacePath}
									.areaGridColumns=${this._areaGridColumns}
									.key=${e.key}></umb-block-area-config-entry>`
    )}
					</div>
					<uui-button look="placeholder" label=${"Add area"} href=${this._workspacePath + "create"}></uui-button>` : "";
  }
};
S = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakSet();
A = function() {
  !m(this, p) || m(this, b) === void 0 || (this._areaGridColumns = m(this, b) ?? m(this, p), m(this, S).setLayoutColumns(this._areaGridColumns));
};
x = function(e) {
  for (; this._value.find((t) => t.alias === e); )
    e = z(e);
  return e;
};
_([
  E({ type: Array })
], n.prototype, "value", 1);
_([
  h()
], n.prototype, "_value", 2);
_([
  h()
], n.prototype, "_workspacePath", 2);
_([
  h()
], n.prototype, "_styleElement", 2);
_([
  h()
], n.prototype, "_areaGridColumns", 2);
n = _([
  U("umb-property-editor-ui-block-grid-areas-config")
], n);
const _e = n;
export {
  n as UmbPropertyEditorUIBlockGridAreasConfigElement,
  _e as default
};
//# sourceMappingURL=property-editor-ui-block-grid-areas-config.element-D5lcdYzw.js.map
