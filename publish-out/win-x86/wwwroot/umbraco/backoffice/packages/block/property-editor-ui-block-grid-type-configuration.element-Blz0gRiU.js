import { o as U, U as O } from "./index-q0gJfrDp.js";
import { repeat as A, html as m, ifDefined as R, nothing as S, css as D, property as E, state as k, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as z } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as V } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as I, UMB_PROPERTY_DATASET_CONTEXT as L } from "@umbraco-cms/backoffice/property";
import { UmbModalRouteRegistrationController as N } from "@umbraco-cms/backoffice/router";
import { UmbSorterController as K } from "@umbraco-cms/backoffice/sorter";
import { UmbChangeEvent as Y } from "@umbraco-cms/backoffice/event";
import { umbConfirmModal as q } from "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/block-type";
var X = Object.defineProperty, F = Object.getOwnPropertyDescriptor, P = (e) => {
  throw TypeError(e);
}, h = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? F(t, i) : t, f = e.length - 1, v; f >= 0; f--)
    (v = e[f]) && (r = (s ? v(t, i, r) : v(r)) || r);
  return s && r && X(t, i, r), r;
}, B = (e, t, i) => t.has(e) || P("Cannot " + i), o = (e, t, i) => (B(e, t, "read from private field"), i ? i.call(e) : t.get(e)), d = (e, t, i) => t.has(e) ? P("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), y = (e, t, i, s) => (B(e, t, "write to private field"), t.set(e, i), i), n = (e, t, i) => (B(e, t, "access private method"), i), G, u, _, c, l, a, g, b, C, w, T, $, W, M;
let p = class extends V {
  constructor() {
    super(), d(this, a), d(this, G, new K(this, {
      getUniqueOfElement: (e) => e.getAttribute("data-umb-group-key"),
      getUniqueOfModel: (e) => e.key,
      itemSelector: ".group",
      handleSelector: ".group-handle",
      containerSelector: "#groups",
      onChange: ({ model: e }) => {
        this._groupsWithBlockTypes = e;
      },
      onEnd: () => {
        o(this, u)?.setPropertyValue(
          "blockGroups",
          this._groupsWithBlockTypes.map((e) => ({ key: e.key, name: e.name }))
        );
      }
    })), d(this, u), d(this, _), d(this, c, []), d(this, l), this._groupsWithBlockTypes = [], this._notGroupedBlockTypes = [], this.consumeContext(I, async (e) => {
      this._alias = e?.getAlias();
    }), this.consumeContext(L, async (e) => {
      y(this, u, e), this.observe(
        await o(this, u)?.propertyValueByAlias("blockGroups"),
        (t) => {
          y(this, l, t ?? []), n(this, a, g).call(this);
        },
        "_observeBlockGroups"
      );
    }), y(this, _, new N(
      this,
      U
    ).addAdditionalPath(O).observeRouteBuilder((e) => {
      const t = e({});
      this._workspacePath = t;
    }));
  }
  get value() {
    return o(this, c);
  }
  set value(e) {
    y(this, c, e ?? []), n(this, a, g).call(this);
  }
  render() {
    return m`<div id="groups">
			${this._notGroupedBlockTypes ? m`<umb-input-block-type
						.propertyAlias=${this._alias}
						.value=${this._notGroupedBlockTypes}
						.workspacePath=${this._workspacePath}
						@change=${(e) => n(this, a, b).call(this, e, void 0)}
						@create=${(e) => n(this, a, T).call(this, e, void 0)}></umb-input-block-type>` : ""}
			${A(
      this._groupsWithBlockTypes,
      (e) => e.key,
      (e) => m`<div class="group" data-umb-group-key=${R(e.key)}>
						${e.key ? n(this, a, M).call(this, e.key, e.name) : S}
						<umb-input-block-type
							data-umb-group-key=${e.key}
							.propertyAlias=${this._alias + "_" + e.key}
							.value=${e.blocks}
							.workspacePath=${this._workspacePath}
							@change=${(t) => n(this, a, b).call(this, t, e.key)}
							@create=${(t) => n(this, a, T).call(this, t, e.key)}></umb-input-block-type>
					</div>`
    )}
		</div>`;
  }
};
G = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
g = function() {
  o(this, l) && (this._notGroupedBlockTypes = o(this, c).filter(
    (e) => !e.groupKey || !o(this, l).find((t) => t.key === e.groupKey)
  ), this._groupsWithBlockTypes = o(this, l).map((e) => ({ name: e.name, key: e.key, blocks: o(this, c).filter((t) => t.groupKey === e.key) })), o(this, G).setModel(this._groupsWithBlockTypes));
};
b = async function(e, t) {
  e.stopPropagation();
  const s = e.target.value.map((r) => ({ ...r, groupKey: t }));
  t ? this._groupsWithBlockTypes = this._groupsWithBlockTypes.map((r) => r.key === t ? { ...r, blocks: s } : r) : this._notGroupedBlockTypes = s, n(this, a, C).call(this);
};
C = function() {
  this.value = [...this._notGroupedBlockTypes, ...this._groupsWithBlockTypes.flatMap((e) => e.blocks)], this.dispatchEvent(new Y());
};
w = function(e) {
  o(this, u)?.setPropertyValue("blockGroups", e);
};
T = function(e, t) {
  const i = e.detail.contentElementTypeKey;
  i && o(this, _)?.open({}, "create/" + i + "/" + (t ?? "null"));
};
$ = async function(e) {
  const t = o(this, l)?.find((i) => i.key === e)?.name ?? "";
  await q(this, {
    headline: "#blockEditor_confirmDeleteBlockGroupTitle",
    content: this.localize.term("blockEditor_confirmDeleteBlockGroupMessage", [t]),
    color: "danger",
    confirmLabel: "#general_delete"
  }), this.value = o(this, c).map((i) => i.groupKey === e ? { ...i, groupKey: void 0 } : i), o(this, l) && n(this, a, w).call(this, o(this, l).filter((i) => i.key !== e));
};
W = function(e, t) {
  const i = e.target.value;
  o(this, u)?.setPropertyValue(
    "blockGroups",
    o(this, l)?.map((s) => s.key === t ? { ...s, name: i } : s)
  );
};
M = function(e, t) {
  return m`<div class="group-handle">
			<uui-icon name="icon-grip"></uui-icon>
			<uui-input
				label="Group"
				.value=${t ?? ""}
				@change=${(i) => n(this, a, W).call(this, i, e)}>
			</uui-input>
			<uui-button
				compact
				label=${this.localize.term("general_delete")}
				look="outline"
				@click=${() => n(this, a, $).call(this, e)}>
				<uui-icon name="icon-trash"></uui-icon>
			</uui-button>
		</div>`;
};
p.styles = [
  z,
  D`
			.group-handle {
				display: flex;
				align-items: center;
				padding: var(--uui-size-3) var(--uui-size-1);
				margin-top: var(--uui-size-6);
				margin-bottom: var(--uui-size-4);
				gap: var(--uui-size-1);
				cursor: grab;
			}

			.group-handle:active {
				cursor: grabbing;
			}

			.group-handle:hover {
				background-color: var(--uui-color-divider);
				border-radius: var(--uui-border-radius);
			}

			.group:has([drag-placeholder]) {
				opacity: 0.2;
			}

			uui-input {
				flex: 1;
			}
		`
];
h([
  E({ attribute: !1 })
], p.prototype, "value", 1);
h([
  k()
], p.prototype, "_alias", 2);
h([
  E({ type: Object, attribute: !1 })
], p.prototype, "config", 2);
h([
  k()
], p.prototype, "_groupsWithBlockTypes", 2);
h([
  k()
], p.prototype, "_notGroupedBlockTypes", 2);
h([
  k()
], p.prototype, "_workspacePath", 2);
p = h([
  x("umb-property-editor-ui-block-grid-type-configuration")
], p);
const ae = p;
export {
  p as UmbPropertyEditorUIBlockGridTypeConfigurationElement,
  ae as default
};
//# sourceMappingURL=property-editor-ui-block-grid-type-configuration.element-Blz0gRiU.js.map
