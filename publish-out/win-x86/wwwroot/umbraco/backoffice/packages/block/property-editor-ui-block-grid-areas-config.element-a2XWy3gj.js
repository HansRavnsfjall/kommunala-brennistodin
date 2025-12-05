import { j as U, d as V, g as I } from "./index-q0gJfrDp.js";
import { U as W } from "./constants-D1CA0epN.js";
import { UmbContextBase as O } from "@umbraco-cms/backoffice/class-api";
import { css as M, property as w, state as h, customElement as T, html as C, repeat as q } from "@umbraco-cms/backoffice/external/lit";
import { incrementString as z } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as K } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as N } from "@umbraco-cms/backoffice/router";
import { UmbSorterController as Y, UmbSorterResolvePlacementAsGrid as X } from "@umbraco-cms/backoffice/sorter";
import { UMB_PROPERTY_CONTEXT as F, UMB_PROPERTY_DATASET_CONTEXT as H } from "@umbraco-cms/backoffice/property";
import { U as J } from "./block-scale-handler.element-BKzGcvEu.js";
import { UmbObjectState as Q, appendToFrozenArray as Z } from "@umbraco-cms/backoffice/observable-api";
import { umbConfirmModal as j } from "@umbraco-cms/backoffice/modal";
class ee extends O {
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
    super(t, U);
  }
}
class te extends O {
  constructor(t) {
    super(t, V), this.#e = new Q(void 0), this.area = this.#e.asObservable(), this.alias = this.#e.asObservablePart((r) => r?.alias), this.columnSpan = this.#e.asObservablePart((r) => r?.columnSpan), this.rowSpan = this.#e.asObservablePart((r) => r?.rowSpan ?? 1), this.scaleManager = new J(this), this.consumeContext(F, (r) => {
      this.#t = r, this.#s();
    }), this.consumeContext(U, (r) => {
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
          const s = Z(r, t, (a) => a.key === this.#r);
          this.#t?.setValue(s);
        }
      },
      "observeInternalArea"
    ));
  }
  async requestDelete() {
    await j(this, {
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
var re = Object.defineProperty, ae = Object.getOwnPropertyDescriptor, B = (e) => {
  throw TypeError(e);
}, m = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? ae(t, r) : t, l = e.length - 1, u; l >= 0; l--)
    (u = e[l]) && (a = (s ? u(t, r, a) : u(a)) || a);
  return s && a && re(t, r, a), a;
}, R = (e, t, r) => t.has(e) || B("Cannot " + r), p = (e, t, r) => (R(e, t, "read from private field"), r ? r.call(e) : t.get(e)), G = (e, t, r) => t.has(e) ? B("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), se = (e, t, r) => (R(e, t, "access private method"), r), o, k, x;
let n = class extends $ {
  constructor() {
    super(), G(this, k), G(this, o, new te(this)), this._alias = "", this.observe(p(this, o).alias, (e) => {
      this._alias = e ?? "";
    });
  }
  get key() {
    return this._key;
  }
  set key(e) {
    e && (this._key = e, this.setAttribute("data-area-key", e), p(this, o).setAreaKey(e));
  }
  connectedCallback() {
    super.connectedCallback(), this.observe(
      p(this, o).columnSpan,
      (e) => {
        this._columnSpan = e, this.setAttribute("data-col-span", e ? e.toString() : ""), this.style.setProperty("--umb-block-grid--grid-column", e ? e.toString() : ""), this.style.setProperty("--umb-block-grid--area-column-span", e ? e.toString() : "");
      },
      "columnSpan"
    ), this.observe(
      p(this, o).rowSpan,
      (e) => {
        this._rowSpan = e, this.setAttribute("data-row-span", e ? e.toString() : ""), this.style.setProperty("--umb-block-grid--area-row-span", e ? e.toString() : "");
      },
      "rowSpan"
    );
  }
  render() {
    return se(this, k, x).call(this);
  }
};
o = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakSet();
x = function() {
  return this._key ? C`
					<span class="alias">${this._alias}</span>
					<uui-action-bar>
						<uui-button label="edit" compact href=${this.workspacePath + "edit/" + this._key}>
							<uui-icon name="icon-edit"></uui-icon>
						</uui-button>
						<uui-button label="delete" compact @click=${() => p(this, o).requestDelete()}>
							<uui-icon name="icon-remove"></uui-icon>
						</uui-button>
					</uui-action-bar>
					<umb-block-scale-handler @mousedown=${(e) => p(this, o).scaleManager.onScaleMouseDown(e)}>
						${this._columnSpan}x${this._rowSpan}
					</umb-block-scale-handler>
				` : "";
};
n.styles = [
  M`
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

			:host([drag-placeholder]) {
				opacity: 0.2;
			}

			uui-action-bar {
				position: absolute;
				top: var(--uui-size-2);
				right: var(--uui-size-2);
			}

			.alias {
				padding: var(--uui-size-space-4);
			}
		`
];
m([
  w({ attribute: !1 })
], n.prototype, "key", 1);
m([
  w()
], n.prototype, "workspacePath", 2);
m([
  h()
], n.prototype, "_columnSpan", 2);
m([
  h()
], n.prototype, "_rowSpan", 2);
m([
  h()
], n.prototype, "_alias", 2);
n = m([
  T("umb-block-area-config-entry")
], n);
var ie = Object.defineProperty, oe = Object.getOwnPropertyDescriptor, D = (e) => {
  throw TypeError(e);
}, _ = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? oe(t, r) : t, l = e.length - 1, u; l >= 0; l--)
    (u = e[l]) && (a = (s ? u(t, r, a) : u(a)) || a);
  return s && a && ie(t, r, a), a;
}, S = (e, t, r) => t.has(e) || D("Cannot " + r), c = (e, t, r) => (S(e, t, "read from private field"), r ? r.call(e) : t.get(e)), y = (e, t, r) => t.has(e) ? D("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), f = (e, t, r, s) => (S(e, t, "write to private field"), t.set(e, r), r), g = (e, t, r) => (S(e, t, "access private method"), r), P, d, v, A, b, E, L;
let i = class extends $ {
  constructor() {
    super(), y(this, b), y(this, P, new ee(this)), y(this, d, 12), y(this, v), y(this, A, new Y(this, {
      itemSelector: "umb-block-area-config-entry",
      containerSelector: ".umb-block-grid__area-container",
      resolvePlacement: X,
      getUniqueOfElement: (e) => e.key,
      getUniqueOfModel: (e) => e.key,
      onChange: ({ model: e }) => {
        const t = this._value;
        this._value = e, this.requestUpdate("_value", t), this.dispatchEvent(new K());
      }
    })), this._value = [], new N(this, I).addAdditionalPath("block-grid-area-type").onSetup(() => {
      if (!this._areaGridColumns) return !1;
      const e = this._areaGridColumns * 0.5;
      return {
        data: {
          entityType: "block-grid-area-type",
          preset: { columnSpan: e === Math.round(e) ? e : this._areaGridColumns, alias: g(this, b, L).call(this, "area") }
        },
        modal: { size: "large" }
      };
    }).observeRouteBuilder((e) => {
      this._workspacePath = e({});
    }), this.consumeContext(H, async (e) => {
      this.observe(
        await e?.propertyValueByAlias("areaGridColumns"),
        (t) => {
          f(this, v, t > 0 ? t : null), g(this, b, E).call(this);
        },
        "observeAreaGridColumns"
      ), this.observe(
        await e?.propertyValueByAlias("layoutStylesheet"),
        (t) => {
          this._styleElement && this._styleElement.href === t || (this._styleElement = document.createElement("link"), this._styleElement.setAttribute("rel", "stylesheet"), this._styleElement.setAttribute("href", t ?? W));
        },
        "observeStylesheet"
      );
    });
  }
  set value(e) {
    this._value = e ?? [], c(this, A).setModel(this._value);
  }
  get value() {
    return this._value;
  }
  set config(e) {
    const t = e?.getValueByAlias("defaultAreaGridColumns");
    typeof t == "number" && t > 0 ? f(this, d, t ?? null) : f(this, d, 12), g(this, b, E).call(this);
  }
  render() {
    return this._areaGridColumns ? C`${this._styleElement}
					<div
						class="umb-block-grid__area-container"
						part="area-container"
						style="--umb-block-grid--area-grid-columns: ${this._areaGridColumns}">
						${q(
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
P = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
A = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakSet();
E = function() {
  !c(this, d) || c(this, v) === void 0 || (this._areaGridColumns = c(this, v) ?? c(this, d), c(this, P).setLayoutColumns(this._areaGridColumns));
};
L = function(e) {
  for (; this._value.find((t) => t.alias === e); )
    e = z(e);
  return e;
};
i.styles = [
  M`
			:host {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-2);
			}

			.umb-block-grid__area {
				cursor: move;
			}
		`
];
_([
  w({ type: Array })
], i.prototype, "value", 1);
_([
  h()
], i.prototype, "_value", 2);
_([
  h()
], i.prototype, "_workspacePath", 2);
_([
  h()
], i.prototype, "_styleElement", 2);
_([
  h()
], i.prototype, "_areaGridColumns", 2);
i = _([
  T("umb-property-editor-ui-block-grid-areas-config")
], i);
const ge = i;
export {
  i as UmbPropertyEditorUIBlockGridAreasConfigElement,
  ge as default
};
//# sourceMappingURL=property-editor-ui-block-grid-areas-config.element-a2XWy3gj.js.map
