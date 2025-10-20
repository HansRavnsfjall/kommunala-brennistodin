import { o as U, U as O } from "./index-q0gJfrDp.js";
import { repeat as A, html as _, ifDefined as R, nothing as S, css as D, property as E, state as m, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as V } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as L, UMB_PROPERTY_DATASET_CONTEXT as N } from "@umbraco-cms/backoffice/property";
import { UmbModalRouteRegistrationController as z } from "@umbraco-cms/backoffice/router";
import { UmbSorterController as K } from "@umbraco-cms/backoffice/sorter";
import { UmbChangeEvent as Y } from "@umbraco-cms/backoffice/event";
import { umbConfirmModal as q } from "@umbraco-cms/backoffice/modal";
var X = Object.defineProperty, F = Object.getOwnPropertyDescriptor, P = (t) => {
  throw TypeError(t);
}, h = (t, e, o, a) => {
  for (var r = a > 1 ? void 0 : a ? F(e, o) : e, f = t.length - 1, v; f >= 0; f--)
    (v = t[f]) && (r = (a ? v(e, o, r) : v(r)) || r);
  return a && r && X(e, o, r), r;
}, B = (t, e, o) => e.has(t) || P("Cannot " + o), i = (t, e, o) => (B(t, e, "read from private field"), o ? o.call(t) : e.get(t)), d = (t, e, o) => e.has(t) ? P("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), y = (t, e, o, a) => (B(t, e, "write to private field"), e.set(t, o), o), n = (t, e, o) => (B(t, e, "access private method"), o), G, u, k, c, l, s, b, g, w, C, T, W, $, M;
let p = class extends I {
  constructor() {
    super(), d(this, s), d(this, G, new K(this, {
      getUniqueOfElement: (t) => t.getAttribute("data-umb-group-key"),
      getUniqueOfModel: (t) => t.key,
      itemSelector: ".group",
      handleSelector: ".group-handle",
      containerSelector: "#groups",
      onChange: ({ model: t }) => {
        this._groupsWithBlockTypes = t;
      },
      onEnd: () => {
        i(this, u)?.setPropertyValue(
          "blockGroups",
          this._groupsWithBlockTypes.map((t) => ({ key: t.key, name: t.name }))
        );
      }
    })), d(this, u), d(this, k), d(this, c, []), d(this, l), this._groupsWithBlockTypes = [], this._notGroupedBlockTypes = [], this.consumeContext(L, async (t) => {
      this._alias = t?.getAlias();
    }), this.consumeContext(N, async (t) => {
      y(this, u, t), this.observe(
        await i(this, u)?.propertyValueByAlias("blockGroups"),
        (e) => {
          y(this, l, e ?? []), n(this, s, b).call(this);
        },
        "_observeBlockGroups"
      );
    }), y(this, k, new z(
      this,
      U
    ).addAdditionalPath(O).observeRouteBuilder((t) => {
      const e = t({});
      this._workspacePath = e;
    }));
  }
  get value() {
    return i(this, c);
  }
  set value(t) {
    y(this, c, t ?? []), n(this, s, b).call(this);
  }
  render() {
    return _`<div id="groups">
			${this._notGroupedBlockTypes ? _`<umb-input-block-type
						.propertyAlias=${this._alias}
						.value=${this._notGroupedBlockTypes}
						.workspacePath=${this._workspacePath}
						@change=${(t) => n(this, s, g).call(this, t, void 0)}
						@create=${(t) => n(this, s, T).call(this, t, void 0)}></umb-input-block-type>` : ""}
			${A(
      this._groupsWithBlockTypes,
      (t) => t.key,
      (t) => _`<div class="group" data-umb-group-key=${R(t.key)}>
						${t.key ? n(this, s, M).call(this, t.key, t.name) : S}
						<umb-input-block-type
							data-umb-group-key=${t.key}
							.propertyAlias=${this._alias + "_" + t.key}
							.value=${t.blocks}
							.workspacePath=${this._workspacePath}
							@change=${(e) => n(this, s, g).call(this, e, t.key)}
							@create=${(e) => n(this, s, T).call(this, e, t.key)}></umb-input-block-type>
					</div>`
    )}
		</div>`;
  }
};
G = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
b = function() {
  i(this, l) && (this._notGroupedBlockTypes = i(this, c).filter(
    (t) => !t.groupKey || !i(this, l).find((e) => e.key === t.groupKey)
  ), this._groupsWithBlockTypes = i(this, l).map((t) => ({ name: t.name, key: t.key, blocks: i(this, c).filter((e) => e.groupKey === t.key) })), i(this, G).setModel(this._groupsWithBlockTypes));
};
g = async function(t, e) {
  t.stopPropagation();
  const a = t.target.value.map((r) => ({ ...r, groupKey: e }));
  e ? this._groupsWithBlockTypes = this._groupsWithBlockTypes.map((r) => r.key === e ? { ...r, blocks: a } : r) : this._notGroupedBlockTypes = a, n(this, s, w).call(this);
};
w = function() {
  this.value = [...this._notGroupedBlockTypes, ...this._groupsWithBlockTypes.flatMap((t) => t.blocks)], this.dispatchEvent(new Y());
};
C = function(t) {
  i(this, u)?.setPropertyValue("blockGroups", t);
};
T = function(t, e) {
  const o = t.detail.contentElementTypeKey;
  o && i(this, k)?.open({}, "create/" + o + "/" + (e ?? "null"));
};
W = async function(t) {
  const e = i(this, l)?.find((o) => o.key === t)?.name ?? "";
  await q(this, {
    headline: "#blockEditor_confirmDeleteBlockGroupTitle",
    content: this.localize.term("#blockEditor_confirmDeleteBlockGroupMessage", [e]),
    color: "danger",
    confirmLabel: "#general_delete"
  }), this.value = i(this, c).map((o) => o.groupKey === t ? { ...o, groupKey: void 0 } : o), i(this, l) && n(this, s, C).call(this, i(this, l).filter((o) => o.key !== t));
};
$ = function(t, e) {
  const o = t.target.value;
  i(this, u)?.setPropertyValue(
    "blockGroups",
    i(this, l)?.map((a) => a.key === e ? { ...a, name: o } : a)
  );
};
M = function(t, e) {
  return _`<div class="group-handle">
			<uui-input
				auto-width
				label="Group"
				.value=${e ?? ""}
				@change=${(o) => n(this, s, $).call(this, o, t)}>
				<uui-button compact slot="append" label="delete" @click=${() => n(this, s, W).call(this, t)}>
					<uui-icon name="icon-trash"></uui-icon>
				</uui-button>
			</uui-input>
		</div>`;
};
p.styles = [
  V,
  D`
			uui-input:not(:hover, :focus) {
				border: 1px solid transparent;
			}
			uui-input:not(:hover, :focus) uui-button {
				opacity: 0;
			}

			.group-handle {
				padding: var(--uui-size-1);
				margin-top: var(--uui-size-6);
				margin-bottom: var(--uui-size-4);
				cursor: grab;
			}

			.group-handle:hover {
				background-color: var(--uui-color-divider);
				border-radius: var(--uui-border-radius);
			}

			.group:has([drag-placeholder]) {
				opacity: 0.2;
			}
		`
];
h([
  E({ attribute: !1 })
], p.prototype, "value", 1);
h([
  m()
], p.prototype, "_alias", 2);
h([
  E({ type: Object, attribute: !1 })
], p.prototype, "config", 2);
h([
  m()
], p.prototype, "_groupsWithBlockTypes", 2);
h([
  m()
], p.prototype, "_notGroupedBlockTypes", 2);
h([
  m()
], p.prototype, "_workspacePath", 2);
p = h([
  x("umb-property-editor-ui-block-grid-type-configuration")
], p);
const rt = p;
export {
  p as UmbPropertyEditorUIBlockGridTypeConfigurationElement,
  rt as default
};
//# sourceMappingURL=property-editor-ui-block-grid-type-configuration.element-s9KYjchC.js.map
