import { U as gt } from "./tiptap-toolbar-configuration.context-token-yqUn7jq0.js";
import { umbExtensionsRegistry as _t } from "@umbraco-cms/backoffice/extension-registry";
import { UmbArrayState as K, UmbBooleanState as wt } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextBase as xt } from "@umbraco-cms/backoffice/class-api";
import { UmbId as v } from "@umbraco-cms/backoffice/id";
import { UMB_PROPERTY_DATASET_CONTEXT as $t, UMB_PROPERTY_CONTEXT as yt } from "@umbraco-cms/backoffice/property";
import { css as Z, property as R, customElement as j, when as y, html as u, repeat as U, nothing as D, state as tt } from "@umbraco-cms/backoffice/external/lit";
import { debounce as Tt } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as et } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as Et } from "@umbraco-cms/backoffice/event";
import { UmbSorterController as It, UmbSorterResolvePlacementAsGrid as kt } from "@umbraco-cms/backoffice/sorter";
class at extends xt {
  constructor(t) {
    super(t, gt), this.#a = new K([], (a) => a.alias), this.extensions = this.#a.asObservable(), this.#o = new wt(!1), this.reload = this.#o.asObservable(), this.#i = /* @__PURE__ */ new Set(), this.#e = /* @__PURE__ */ new Set(), this.#t = new K([], (a) => a.unique), this.toolbar = this.#t.asObservable(), this.observe(_t.byType("tiptapToolbarExtension"), (a) => {
      const o = a.sort((i, r) => i.alias.localeCompare(r.alias)).map((i) => ({
        kind: i.kind ?? "button",
        alias: i.alias,
        label: i.meta.label,
        icon: i.meta.icon,
        dependencies: i.forExtensions
      }));
      this.#a.setValue(o), this.#r = new Map(o.map((i) => [i.alias, i]));
    }), this.consumeContext($t, async (a) => {
      this.observe(
        await a?.propertyValueByAlias("extensions"),
        (o) => {
          o && (this.#i.clear(), this.#o.setValue(!1), this.#a.getValue().filter((i) => !i.dependencies || i.dependencies.every((r) => o.includes(r))).map((i) => i.alias).forEach((i) => this.#i.add(i)), this.#o.setValue(!0));
        },
        "_observeExtensions"
      );
    });
  }
  #a;
  #o;
  #i;
  #e;
  #r;
  #t;
  cloneToolbarValue(t) {
    return this.isValidToolbarValue(t) ? t.map((a) => a.map((o) => [...o])) : [[[]]];
  }
  filterExtensions(t) {
    return this.#a.getValue().filter((a) => a.alias?.toLowerCase().includes(t) || a.label?.toLowerCase().includes(t));
  }
  getExtensionByAlias(t) {
    return this.#r?.get(t) ?? { label: "", alias: t, icon: "", kind: "unknown" };
  }
  isExtensionEnabled(t) {
    return this.#i.has(t);
  }
  isExtensionInUse(t) {
    return this.#e.has(t);
  }
  isValidToolbarValue(t) {
    if (!Array.isArray(t)) return !1;
    for (const a of t) {
      if (!Array.isArray(a)) return !1;
      for (const o of a) {
        if (!Array.isArray(o)) return !1;
        for (const i of o)
          if (typeof i != "string") return !1;
      }
    }
    return !0;
  }
  insertToolbarItem(t, a) {
    const o = [...this.#t.getValue()], [i, r, l] = a, d = o[i], b = [...d.data], h = b[r], f = [...h.data];
    f.splice(l, 0, t), this.#e.add(t), b[r] = { unique: h.unique, data: f }, o[i] = { unique: d.unique, data: b }, this.#t.setValue(o);
  }
  insertToolbarGroup(t, a) {
    const o = [...this.#t.getValue()], i = o[t], r = [...i.data];
    r.splice(a, 0, { unique: v.new(), data: [] }), o[t] = { unique: i.unique, data: r }, this.#t.setValue(o);
  }
  insertToolbarRow(t) {
    const a = [...this.#t.getValue()];
    a.splice(t, 0, { unique: v.new(), data: [{ unique: v.new(), data: [] }] }), this.#t.setValue(a);
  }
  moveToolbarItem(t, a) {
    const [o, i, r] = t, [l, d, b] = a, h = [...this.#t.getValue()], f = h[o], T = [...f.data], F = T[i], X = [...F.data], vt = X.splice(r, 1);
    T[i] = { unique: F.unique, data: X }, h[o] = { unique: f.unique, data: T };
    const Y = h[l], G = [...Y.data], H = G[d], J = [...H.data];
    J.splice(b, 0, vt[0]), G[d] = { unique: H.unique, data: J }, h[l] = { unique: Y.unique, data: G }, this.#t.setValue(h);
  }
  removeToolbarItem(t) {
    const [a, o, i] = t, r = [...this.#t.getValue()], l = r[a], d = [...l.data], b = d[o], h = [...b.data];
    h.splice(i, 1).forEach((T) => this.#e.delete(T)), d[o] = { unique: b.unique, data: h }, r[a] = { unique: l.unique, data: d }, this.#t.setValue(r);
  }
  removeToolbarGroup(t, a) {
    const o = [...this.#t.getValue()];
    if (o[t].data.length > a) {
      const i = o[t], r = [...i.data];
      r.splice(a, 1).forEach((d) => d.data.forEach((b) => this.#e.delete(b))), o[t] = { unique: i.unique, data: r };
    }
    o[t].data.length === 0 && (o[t].data[0] = { unique: v.new(), data: [] }), this.#t.setValue(o);
  }
  removeToolbarRow(t) {
    const a = [...this.#t.getValue()];
    a.length > t && a.splice(t, 1).forEach(
      (i) => i.data.forEach((r) => r.data.forEach((l) => this.#e.delete(l)))
    ), a.length === 0 && (a[0] = { unique: v.new(), data: [{ unique: v.new(), data: [] }] }), this.#t.setValue(a);
  }
  setToolbar(t) {
    this.isValidToolbarValue(t) || (t = [[[]]]), this.#e.clear(), t.forEach((o) => o.forEach((i) => i.forEach((r) => this.#e.add(r))));
    const a = t.map((o) => ({
      unique: v.new(),
      data: o.map((i) => ({ unique: v.new(), data: i }))
    }));
    this.#t.setValue(a);
  }
  updateToolbarItem(t, a) {
    const o = [...this.#t.getValue()], [i, r] = a, l = o.map((d, b) => b !== i ? d : {
      ...d,
      data: d.data.map((h, f) => f !== r ? h : {
        ...h,
        data: [...t]
      })
    });
    this.#t.setValue(l);
  }
  updateToolbarRow(t, a) {
    const o = [...this.#t.getValue()], i = o[t];
    o[t] = { unique: i.unique, data: a }, this.#t.setValue(o);
  }
}
var qt = Object.defineProperty, Vt = Object.getOwnPropertyDescriptor, ot = (e) => {
  throw TypeError(e);
}, A = (e, t, a, o) => {
  for (var i = o > 1 ? void 0 : o ? Vt(t, a) : t, r = e.length - 1, l; r >= 0; r--)
    (l = e[r]) && (i = (o ? l(t, a, i) : l(i)) || i);
  return o && i && qt(t, a, i), i;
}, P = (e, t, a) => t.has(e) || ot("Cannot " + a), k = (e, t, a) => (P(e, t, "read from private field"), a ? a.call(e) : t.get(e)), I = (e, t, a) => t.has(e) ? ot("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), Q = (e, t, a, o) => (P(e, t, "write to private field"), t.set(e, a), a), q = (e, t, a) => (P(e, t, "access private method"), a), M, S, _, w, V, it;
let x = class extends et {
  constructor() {
    super(...arguments), I(this, w), I(this, M, new It(this, {
      getUniqueOfElement: (e) => e.dataset.mark,
      getUniqueOfModel: (e) => `tiptap-toolbar-item:${e.alias}`,
      itemSelector: ".draggable",
      identifier: "umb-tiptap-toolbar-sorter",
      containerSelector: ".items",
      resolvePlacement: kt,
      onContainerChange: ({ item: e, model: t }) => {
        this.dispatchEvent(new CustomEvent("container-change", { detail: { item: e, model: t } }));
      },
      onChange: ({ model: e }) => {
        Q(this, _, e), this.requestUpdate(), this.dispatchEvent(new Et());
      }
    })), I(this, S, new at(this)), I(this, _, []), this.rowIndex = 0, this.groupIndex = 0;
  }
  set items(e) {
    Q(this, _, (e ?? []).filter((t, a, o) => o.findIndex((i) => i.alias === t.alias) === a)), k(this, M).setModel(k(this, _));
  }
  get items() {
    return k(this, _);
  }
  render() {
    return u`
			<div class="items">
				${y(
      this.items?.length === 0,
      () => u`<em><umb-localize key="tiptap_toolbar_emptyGroup">Empty</umb-localize></em>`,
      () => U(
        this.items,
        (e) => e.alias,
        (e, t) => q(this, w, it).call(this, e, t)
      )
    )}
			</div>
		`;
  }
};
M = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakSet();
V = function(e, t = 0) {
  this.items = this.items.filter((i) => i.alias !== e.alias);
  const a = this.rowIndex, o = this.groupIndex;
  this.dispatchEvent(
    new CustomEvent("remove", { detail: { rowIndex: a, groupIndex: o, index: t }, bubbles: !0, composed: !0 })
  );
};
it = function(e, t = 0) {
  const a = this.localize.string(e.label) || e.alias, o = !k(this, S)?.isExtensionEnabled(e.alias);
  switch (e.kind) {
    case "styleMenu":
    case "menu":
      return u`
					<uui-button
						compact
						class="draggable ${o ? "forbidden" : ""}"
						data-mark="tiptap-toolbar-item:${e.alias}"
						look=${o ? "placeholder" : "outline"}
						label=${a}
						title=${a}
						@click=${() => q(this, w, V).call(this, e, t)}>
						<div class="inner">
							<span>${a}</span>
						</div>
						<uui-symbol-expand slot="extra" open></uui-symbol-expand>
					</uui-button>
				`;
    case "unknown":
      return u`
					<uui-button
						compact
						data-mark="tiptap-toolbar-item:${e.alias}"
						color="danger"
						look="placeholder"
						label="Missing extension"
						title="Missing extension: ${e.alias}"
						@click=${() => q(this, w, V).call(this, e, t)}></uui-button>
				`;
    case "button":
    case "colorPickerButton":
    default:
      return u`
					<uui-button
						compact
						class="draggable ${o ? "forbidden" : ""}"
						data-mark="tiptap-toolbar-item:${e.alias}"
						look=${o ? "placeholder" : "outline"}
						label=${a}
						title=${a}
						@click=${() => q(this, w, V).call(this, e, t)}>
						<div class="inner">
							${y(
        e.icon,
        () => u`<umb-icon .name=${e.icon}></umb-icon>`,
        () => u`<span>${a}</span>`
      )}
						</div>
					</uui-button>
				`;
  }
};
x.styles = [
  Z`
			.items {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				gap: var(--uui-size-1);

				uui-button {
					--uui-button-font-weight: normal;

					&.draggable,
					&.draggable > .inner {
						cursor: move;
					}

					&.forbidden {
						--color: var(--uui-color-danger);
						--color-standalone: var(--uui-color-danger-standalone);
						--color-emphasis: var(--uui-color-danger-emphasis);
						--color-contrast: var(--uui-color-danger);
						--uui-button-contrast: var(--uui-color-danger);
						--uui-button-border-color: var(--uui-color-danger);
					}

					div {
						display: flex;
						gap: var(--uui-size-1);
						align-items: flex-end;
					}

					uui-symbol-expand {
						margin-left: var(--uui-size-space-2);
					}
				}
			}

			uui-button[look='outline'] {
				--uui-button-background-color-hover: var(--uui-color-surface);
			}
		`
];
A([
  R({ type: Array, attribute: !1 })
], x.prototype, "items", 1);
A([
  R({ type: Number })
], x.prototype, "rowIndex", 2);
A([
  R({ type: Number })
], x.prototype, "groupIndex", 2);
x = A([
  j("umb-tiptap-toolbar-group-configuration")
], x);
var Ct = Object.defineProperty, zt = Object.getOwnPropertyDescriptor, rt = (e) => {
  throw TypeError(e);
}, O = (e, t, a, o) => {
  for (var i = o > 1 ? void 0 : o ? zt(t, a) : t, r = e.length - 1, l; r >= 0; r--)
    (l = e[r]) && (i = (o ? l(t, a, i) : l(i)) || i);
  return o && i && Ct(t, a, i), i;
}, B = (e, t, a) => t.has(e) || rt("Cannot " + a), n = (e, t, a) => (B(e, t, "read from private field"), a ? a.call(e) : t.get(e)), g = (e, t, a) => t.has(e) ? rt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), C = (e, t, a, o) => (B(e, t, "write to private field"), t.set(e, a), a), p = (e, t, a) => (B(e, t, "access private method"), a), s, E, W, z, m, c, nt, st, lt, N, ut, L, ct, dt, pt, ht, bt, mt, ft;
let $ = class extends et {
  constructor() {
    super(), g(this, c), g(this, s, new at(this)), g(this, E), g(this, W, Tt((e) => {
      this._availableExtensions = n(this, s).filterExtensions(e);
    }, 250)), g(this, z, !1), this._availableExtensions = [], this._toolbar = [], g(this, m), this.consumeContext(yt, (e) => {
      this.observe(n(this, s).extensions, (t) => {
        this._availableExtensions = t;
      }), this.observe(n(this, s).reload, (t) => {
        t && this.requestUpdate();
      }), this.observe(n(this, s).toolbar, (t) => {
        t.length && (this._toolbar = t, n(this, z) && (C(this, m, t.map((a) => a.data.map((o) => [...o.data]))), e?.setValue(n(this, m))));
      });
    });
  }
  set value(e) {
    e || (e = [[[]]]), e !== n(this, m) && C(this, m, n(this, s).isValidToolbarValue(e) ? e : [[[]]]);
  }
  get value() {
    if (n(this, m) !== void 0)
      return n(this, s).cloneToolbarValue(n(this, m));
  }
  firstUpdated() {
    n(this, s).setToolbar(this.value), C(this, z, !0);
  }
  render() {
    return u`${p(this, c, bt).call(this)} ${p(this, c, pt).call(this)}`;
  }
};
s = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
W = /* @__PURE__ */ new WeakMap();
z = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
nt = function(e) {
  e.stopPropagation();
  const t = e.target, a = t.items.map((o) => o.alias);
  n(this, s).updateToolbarItem(a, [t.rowIndex, t.groupIndex]);
};
st = function(e) {
  const t = (n(this, m)?.length ?? 1) - 1, a = (n(this, m)?.[t].length ?? 1) - 1, o = n(this, m)?.[t][a].length ?? 0;
  n(this, s).insertToolbarItem(e.alias, [t, a, o]);
};
lt = function(e, t, a) {
  e.dataTransfer.effectAllowed = "move", C(this, E, { alias: t, fromPos: a });
};
N = function(e) {
  e.preventDefault(), e.dataTransfer.dropEffect = "move";
};
ut = function(e) {
  if (e.preventDefault(), e.dataTransfer?.dropEffect === "none") {
    const { fromPos: t } = n(this, E) ?? {};
    if (!t) return;
    n(this, s).removeToolbarItem(t);
  }
};
L = function(e, t) {
  e.preventDefault();
  const { alias: a, fromPos: o } = n(this, E) ?? {};
  if (o && !t) {
    n(this, s).removeToolbarItem(o);
    return;
  }
  if (o && t) {
    n(this, s).moveToolbarItem(o, t);
    return;
  }
  a && t && n(this, s).insertToolbarItem(a, t);
};
ct = function(e) {
  const t = (e.target.value ?? "").toLocaleLowerCase();
  n(this, W).call(this, t);
};
dt = function(e) {
  const { groupIndex: t, index: a, rowIndex: o } = e.detail;
  n(this, s)?.removeToolbarItem([o, t, a]);
};
pt = function() {
  const e = this.localize.term("placeholders_filter");
  return u`
			<uui-box id="toolbox" headline=${this.localize.term("tiptap_toobar_availableItems")}>
				<div slot="header-actions">
					<uui-input type="search" autocomplete="off" label=${e} placeholder=${e} @input=${p(this, c, ct)}>
						<div slot="prepend">
							<uui-icon name="search"></uui-icon>
						</div>
					</uui-input>
				</div>
				<uui-scroll-container>
					<div class="available-items" dropzone="move" @drop=${p(this, c, L)} @dragover=${p(this, c, N)}>
						${y(
    this._availableExtensions.length === 0,
    () => u`<umb-localize key="tiptap_toobar_availableItemsEmpty"
									>There are no toolbar extensions to show</umb-localize
								>`,
    () => U(this._availableExtensions, (t) => p(this, c, ht).call(this, t))
  )}
					</div>
				</uui-scroll-container>
			</uui-box>
		`;
};
ht = function(e) {
  const t = !n(this, s).isExtensionEnabled(e.alias), a = n(this, s).isExtensionInUse(e.alias);
  if (a || t) return D;
  const o = this.localize.string(e.label);
  return u`
			<uui-button
				compact
				class=${t ? "forbidden" : ""}
				data-mark="tiptap-toolbar-item:${e.alias}"
				draggable="true"
				label=${o}
				look=${t ? "placeholder" : "outline"}
				?disabled=${t || a}
				@click=${() => p(this, c, st).call(this, e)}
				@dragstart=${(i) => p(this, c, lt).call(this, i, e.alias)}
				@dragend=${p(this, c, ut)}>
				<div class="inner">
					${y(e.icon, () => u`<umb-icon .name=${e.icon}></umb-icon>`)}
					<span>${o}</span>
				</div>
			</uui-button>
		`;
};
bt = function() {
  return u`
			<div id="toolbar">
				<div id="rows">
					${U(
    this._toolbar,
    (e) => e.unique,
    (e, t) => p(this, c, mt).call(this, e, t)
  )}
				</div>
				<uui-button
					id="btnAddRow"
					look="placeholder"
					label=${this.localize.term("tiptap_toolbar_addRow")}
					@click=${() => n(this, s).insertToolbarRow(this._toolbar.length)}></uui-button>
			</div>
		`;
};
mt = function(e, t = 0) {
  if (!e) return D;
  const a = this._toolbar.length === 1;
  return u`
			<uui-button-inline-create
				label=${this.localize.term("tiptap_toolbar_addRow")}
				@click=${() => n(this, s)?.insertToolbarRow(t)}></uui-button-inline-create>
			<div class="row">
				<div class="groups">
					<uui-button-inline-create
						vertical
						label=${this.localize.term("tiptap_toolbar_addGroup")}
						@click=${() => n(this, s)?.insertToolbarGroup(t, 0)}></uui-button-inline-create>
					${U(
    e.data,
    (o) => o.unique,
    (o, i) => p(this, c, ft).call(this, o, t, i)
  )}
				</div>
				${y(
    !a,
    () => u`
						<uui-action-bar>
							<uui-button
								look="secondary"
								label=${this.localize.term("tiptap_toolbar_removeRow")}
								@click=${() => n(this, s)?.removeToolbarRow(t)}>
								<uui-icon name="icon-trash"></uui-icon>
							</uui-button>
						</uui-action-bar>
					`
  )}
			</div>
		`;
};
ft = function(e, t = 0, a = 0) {
  if (!e) return D;
  const o = this._toolbar[t].data.length > 1 && e.data.length === 0, i = e.data.map((r) => n(this, s)?.getExtensionByAlias(r));
  return u`
			<div
				class="group"
				dropzone="move"
				@dragover=${p(this, c, N)}
				@drop=${(r) => p(this, c, L).call(this, r, [t, a, e.data.length - 1])}>
				<umb-tiptap-toolbar-group-configuration
					.items=${i}
					.rowIndex=${t}
					.groupIndex=${a}
					@change=${p(this, c, nt)}
					@remove=${p(this, c, dt)}>
				</umb-tiptap-toolbar-group-configuration>
				${y(
    o,
    () => u`
						<uui-action-bar>
							<uui-button
								look="secondary"
								label=${this.localize.term("tiptap_toolbar_removeGroup")}
								@click=${() => n(this, s)?.removeToolbarGroup(t, a)}>
								<uui-icon name="icon-trash"></uui-icon>
							</uui-button>
						</uui-action-bar>
					`
  )}
			</div>
			<uui-button-inline-create
				vertical
				label=${this.localize.term("tiptap_toolbar_addGroup")}
				@click=${() => n(this, s)?.insertToolbarGroup(t, a + 1)}></uui-button-inline-create>
		`;
};
$.styles = [
  Z`
			:host {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-4);
				flex-grow: 1;
			}

			@media (min-width: 1400px) {
				:host {
					flex-direction: row;
				}
				#toolbox {
					width: 500px;
					max-width: 33%;
					flex-grow: 1;
				}

				#toolbar {
					flex-grow: 100;
				}
			}

			#toolbox {
				border: 1px solid var(--uui-color-border);
			}

			uui-box {
				[slot='header-actions'] {
					margin-bottom: var(--uui-size-2);

					uui-icon {
						color: var(--uui-color-border);
					}
				}
			}

			uui-scroll-container {
				max-height: 350px;
			}

			.available-items {
				display: flex;
				flex-wrap: wrap;
				gap: var(--uui-size-3);

				uui-button {
					--uui-button-font-weight: normal;

					&[draggable='true'],
					&[draggable='true'] > .inner {
						cursor: move;
					}

					&[disabled],
					&[disabled] > .inner {
						cursor: not-allowed;
					}

					&.forbidden {
						--color: var(--uui-color-danger);
						--color-standalone: var(--uui-color-danger-standalone);
						--color-emphasis: var(--uui-color-danger-emphasis);
						--color-contrast: var(--uui-color-danger);
						--uui-button-contrast-disabled: var(--uui-color-danger);
						--uui-button-border-color-disabled: var(--uui-color-danger);
					}

					div {
						display: flex;
						gap: var(--uui-size-1);
						align-items: flex-end;
					}
				}
			}

			uui-button-inline-create:not([vertical]) {
				margin-bottom: -4px;
			}

			#rows {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-1);

				.row {
					display: flex;
					align-items: flex-start;
					justify-content: space-between;
					gap: var(--uui-size-3);

					&:not(:last-child) {
						border-bottom: 1px solid var(--uui-color-border);
					}

					&:focus-within,
					&:hover {
						border-color: var(--uui-color-border-standalone);
					}

					.groups {
						flex: 1;
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						align-items: center;
						justify-content: flex-start;
						gap: var(--uui-size-1);

						uui-button-inline-create {
							height: 50px;
						}

						.group {
							display: flex;
							flex-direction: row;
							align-items: center;
							justify-content: space-between;
							gap: var(--uui-size-3);

							border: 1px dashed transparent;
							border-radius: var(--uui-border-radius);
							padding: var(--uui-size-3);

							> uui-action-bar {
								opacity: 0;
								transition: opacity 120ms;
							}

							&:focus-within,
							&:hover {
								border-color: var(--uui-color-border-standalone);
								> uui-action-bar {
									opacity: 1;
								}
							}
						}
					}
				}
			}

			#btnAddRow {
				display: block;
				margin-top: var(--uui-size-1);
			}

			.handle {
				cursor: move;
			}
		`
];
O([
  tt()
], $.prototype, "_availableExtensions", 2);
O([
  tt()
], $.prototype, "_toolbar", 2);
O([
  R({ attribute: !1 })
], $.prototype, "value", 1);
$ = O([
  j("umb-property-editor-ui-tiptap-toolbar-configuration")
], $);
export {
  $ as UmbPropertyEditorUiTiptapToolbarConfigurationElement,
  $ as element
};
//# sourceMappingURL=property-editor-ui-tiptap-toolbar-configuration.element-CDXo_UNS.js.map
