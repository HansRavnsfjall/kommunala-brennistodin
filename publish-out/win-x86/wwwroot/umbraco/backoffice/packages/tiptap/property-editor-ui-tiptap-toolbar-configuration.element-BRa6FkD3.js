import { U as K } from "./tiptap-toolbar-configuration.context-token-yqUn7jq0.js";
import { umbExtensionsRegistry as Q } from "@umbraco-cms/backoffice/extension-registry";
import { UmbArrayState as M, UmbBooleanState as Z } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextBase as tt } from "@umbraco-cms/backoffice/class-api";
import { UmbId as m } from "@umbraco-cms/backoffice/id";
import { UMB_PROPERTY_DATASET_CONTEXT as et, UMB_PROPERTY_CONTEXT as at } from "@umbraco-cms/backoffice/property";
import { html as d, when as g, repeat as k, nothing as E, css as ot, state as P, property as it, customElement as rt } from "@umbraco-cms/backoffice/external/lit";
import { debounce as st } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as nt } from "@umbraco-cms/backoffice/lit-element";
class lt extends tt {
  constructor(t) {
    super(t, K), this.#a = new M([], (e) => e.alias), this.extensions = this.#a.asObservable(), this.#o = new Z(!1), this.reload = this.#o.asObservable(), this.#i = /* @__PURE__ */ new Set(), this.#e = /* @__PURE__ */ new Set(), this.#t = new M([], (e) => e.unique), this.toolbar = this.#t.asObservable(), this.observe(Q.byType("tiptapToolbarExtension"), (e) => {
      const o = e.sort((i, r) => i.alias.localeCompare(r.alias)).map((i) => ({
        kind: i.kind ?? "button",
        alias: i.alias,
        label: i.meta.label,
        icon: i.meta.icon,
        dependencies: i.forExtensions
      }));
      this.#a.setValue(o), this.#r = new Map(o.map((i) => [i.alias, i]));
    }), this.consumeContext(et, async (e) => {
      this.observe(
        await e?.propertyValueByAlias("extensions"),
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
    return this.isValidToolbarValue(t) ? t.map((e) => e.map((o) => [...o])) : [[[]]];
  }
  filterExtensions(t) {
    return this.#a.getValue().filter((e) => e.alias?.toLowerCase().includes(t) || e.label?.toLowerCase().includes(t));
  }
  getExtensionByAlias(t) {
    return this.#r?.get(t);
  }
  isExtensionEnabled(t) {
    return this.#i.has(t);
  }
  isExtensionInUse(t) {
    return this.#e.has(t);
  }
  isValidToolbarValue(t) {
    if (!Array.isArray(t)) return !1;
    for (const e of t) {
      if (!Array.isArray(e)) return !1;
      for (const o of e) {
        if (!Array.isArray(o)) return !1;
        for (const i of o)
          if (typeof i != "string") return !1;
      }
    }
    return !0;
  }
  insertToolbarItem(t, e) {
    const o = [...this.#t.getValue()], [i, r, u] = e, h = o[i], p = [...h.data], b = p[r], v = [...b.data];
    v.splice(u, 0, t), this.#e.add(t), p[r] = { unique: b.unique, data: v }, o[i] = { unique: h.unique, data: p }, this.#t.setValue(o);
  }
  insertToolbarGroup(t, e) {
    const o = [...this.#t.getValue()], i = o[t], r = [...i.data];
    r.splice(e, 0, { unique: m.new(), data: [] }), o[t] = { unique: i.unique, data: r }, this.#t.setValue(o);
  }
  insertToolbarRow(t) {
    const e = [...this.#t.getValue()];
    e.splice(t, 0, { unique: m.new(), data: [{ unique: m.new(), data: [] }] }), this.#t.setValue(e);
  }
  moveToolbarItem(t, e) {
    const [o, i, r] = t, [u, h, p] = e, b = [...this.#t.getValue()], v = b[o], w = [...v.data], G = w[i], O = [...G.data], J = O.splice(r, 1);
    w[i] = { unique: G.unique, data: O }, b[o] = { unique: v.unique, data: w };
    const D = b[u], V = [...D.data], I = V[h], B = [...I.data];
    B.splice(p, 0, J[0]), V[h] = { unique: I.unique, data: B }, b[u] = { unique: D.unique, data: V }, this.#t.setValue(b);
  }
  removeToolbarItem(t) {
    const [e, o, i] = t, r = [...this.#t.getValue()], u = r[e], h = [...u.data], p = h[o], b = [...p.data];
    b.splice(i, 1).forEach((w) => this.#e.delete(w)), h[o] = { unique: p.unique, data: b }, r[e] = { unique: u.unique, data: h }, this.#t.setValue(r);
  }
  removeToolbarGroup(t, e) {
    const o = [...this.#t.getValue()];
    if (o[t].data.length > e) {
      const i = o[t], r = [...i.data];
      r.splice(e, 1).forEach((h) => h.data.forEach((p) => this.#e.delete(p))), o[t] = { unique: i.unique, data: r };
    }
    o[t].data.length === 0 && (o[t].data[0] = { unique: m.new(), data: [] }), this.#t.setValue(o);
  }
  removeToolbarRow(t) {
    const e = [...this.#t.getValue()];
    e.length > t && e.splice(t, 1).forEach(
      (i) => i.data.forEach((r) => r.data.forEach((u) => this.#e.delete(u)))
    ), e.length === 0 && (e[0] = { unique: m.new(), data: [{ unique: m.new(), data: [] }] }), this.#t.setValue(e);
  }
  setToolbar(t) {
    this.isValidToolbarValue(t) || (t = [[[]]]), this.#e.clear(), t.forEach((o) => o.forEach((i) => i.forEach((r) => this.#e.add(r))));
    const e = t.map((o) => ({
      unique: m.new(),
      data: o.map((i) => ({ unique: m.new(), data: i }))
    }));
    this.#t.setValue(e);
  }
  updateToolbarRow(t, e) {
    const o = [...this.#t.getValue()], i = o[t];
    o[t] = { unique: i.unique, data: e }, this.#t.setValue(o);
  }
}
var ut = Object.defineProperty, ct = Object.getOwnPropertyDescriptor, S = (a) => {
  throw TypeError(a);
}, q = (a, t, e, o) => {
  for (var i = o > 1 ? void 0 : o ? ct(t, e) : t, r = a.length - 1, u; r >= 0; r--)
    (u = a[r]) && (i = (o ? u(t, e, i) : u(i)) || i);
  return o && i && ut(t, e, i), i;
}, R = (a, t, e) => t.has(a) || S("Cannot " + e), s = (a, t, e) => (R(a, t, "read from private field"), e ? e.call(a) : t.get(a)), $ = (a, t, e) => t.has(a) ? S("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(a) : t.set(a, e), z = (a, t, e, o) => (R(a, t, "write to private field"), t.set(a, e), e), c = (a, t, e) => (R(a, t, "access private method"), e), n, x, A, f, l, L, T, U, y, C, W, N, F, X, Y, j, H;
let _ = class extends nt {
  constructor() {
    super(), $(this, l), $(this, n, new lt(this)), $(this, x), $(this, A, st((a) => {
      this._availableExtensions = s(this, n).filterExtensions(a);
    }, 250)), this._availableExtensions = [], this._toolbar = [], $(this, f), this.consumeContext(at, (a) => {
      this.observe(s(this, n).extensions, (t) => {
        this._availableExtensions = t;
      }), this.observe(s(this, n).reload, (t) => {
        t && this.requestUpdate();
      }), this.observe(s(this, n).toolbar, (t) => {
        t.length && (this._toolbar = t, z(this, f, t.map((e) => e.data.map((o) => [...o.data]))), a?.setValue(s(this, f)));
      });
    });
  }
  set value(a) {
    a || (a = [[[]]]), a !== s(this, f) && z(this, f, s(this, n).isValidToolbarValue(a) ? a : [[[]]]);
  }
  get value() {
    return s(this, n).cloneToolbarValue(s(this, f));
  }
  firstUpdated() {
    s(this, n).setToolbar(this.value);
  }
  render() {
    return d`${c(this, l, X).call(this)} ${c(this, l, N).call(this)}`;
  }
};
n = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
A = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
L = function(a) {
  const t = (s(this, f)?.length ?? 1) - 1, e = (s(this, f)?.[t].length ?? 1) - 1, o = s(this, f)?.[t][e].length ?? 0;
  s(this, n).insertToolbarItem(a.alias, [t, e, o]);
};
T = function(a, t, e) {
  a.dataTransfer.effectAllowed = "move", z(this, x, { alias: t, fromPos: e });
};
U = function(a) {
  a.preventDefault(), a.dataTransfer.dropEffect = "move";
};
y = function(a) {
  if (a.preventDefault(), a.dataTransfer?.dropEffect === "none") {
    const { fromPos: t } = s(this, x) ?? {};
    if (!t) return;
    s(this, n).removeToolbarItem(t);
  }
};
C = function(a, t) {
  a.preventDefault();
  const { alias: e, fromPos: o } = s(this, x) ?? {};
  if (o && !t) {
    s(this, n).removeToolbarItem(o);
    return;
  }
  if (o && t) {
    s(this, n).moveToolbarItem(o, t);
    return;
  }
  e && t && s(this, n).insertToolbarItem(e, t);
};
W = function(a) {
  const t = (a.target.value ?? "").toLocaleLowerCase();
  s(this, A).call(this, t);
};
N = function() {
  return d`
			<uui-box id="toolbox" headline=${this.localize.term("tiptap_toobar_availableItems")}>
				<div slot="header-actions">
					<uui-input
						type="search"
						autocomplete="off"
						placeholder=${this.localize.term("placeholders_filter")}
						@input=${c(this, l, W)}>
						<div slot="prepend">
							<uui-icon name="search"></uui-icon>
						</div>
					</uui-input>
				</div>
				<uui-scroll-container>
					<div class="available-items" dropzone="move" @drop=${c(this, l, C)} @dragover=${c(this, l, U)}>
						${g(
    this._availableExtensions.length === 0,
    () => d`<umb-localize key="tiptap_toobar_availableItemsEmpty"
									>There are no toolbar extensions to show</umb-localize
								>`,
    () => k(this._availableExtensions, (a) => c(this, l, F).call(this, a))
  )}
					</div>
				</uui-scroll-container>
			</uui-box>
		`;
};
F = function(a) {
  const t = !s(this, n).isExtensionEnabled(a.alias), e = s(this, n).isExtensionInUse(a.alias);
  return e || t ? E : d`
			<uui-button
				compact
				class=${t ? "forbidden" : ""}
				data-mark="tiptap-toolbar-item:${a.alias}"
				draggable="true"
				look=${t ? "placeholder" : "outline"}
				?disabled=${t || e}
				@click=${() => c(this, l, L).call(this, a)}
				@dragstart=${(o) => c(this, l, T).call(this, o, a.alias)}
				@dragend=${c(this, l, y)}>
				<div class="inner">
					${g(a.icon, () => d`<umb-icon .name=${a.icon}></umb-icon>`)}
					<span>${this.localize.string(a.label)}</span>
				</div>
			</uui-button>
		`;
};
X = function() {
  return d`
			<div id="toolbar">
				<div id="rows">
					${k(
    this._toolbar,
    (a) => a.unique,
    (a, t) => c(this, l, Y).call(this, a, t)
  )}
				</div>
				<uui-button
					id="btnAddRow"
					look="placeholder"
					label=${this.localize.term("tiptap_toolbar_addRow")}
					@click=${() => s(this, n).insertToolbarRow(this._toolbar.length)}></uui-button>
			</div>
		`;
};
Y = function(a, t = 0) {
  if (!a) return E;
  const e = this._toolbar.length === 1;
  return d`
			<uui-button-inline-create
				label=${this.localize.term("tiptap_toolbar_addRow")}
				@click=${() => s(this, n)?.insertToolbarRow(t)}></uui-button-inline-create>
			<div class="row">
				<div class="groups">
					<uui-button-inline-create
						vertical
						label=${this.localize.term("tiptap_toolbar_addGroup")}
						@click=${() => s(this, n)?.insertToolbarGroup(t, 0)}></uui-button-inline-create>
					${k(
    a.data,
    (o) => o.unique,
    (o, i) => c(this, l, j).call(this, o, t, i)
  )}
				</div>
				${g(
    !e,
    () => d`
						<uui-action-bar>
							<uui-button
								look="secondary"
								label=${this.localize.term("tiptap_toolbar_removeRow")}
								@click=${() => s(this, n)?.removeToolbarRow(t)}>
								<uui-icon name="icon-trash"></uui-icon>
							</uui-button>
						</uui-action-bar>
					`
  )}
			</div>
		`;
};
j = function(a, t = 0, e = 0) {
  if (!a) return E;
  const o = this._toolbar[t].data.length > 1 && a.data.length === 0;
  return d`
			<div
				class="group"
				dropzone="move"
				@dragover=${c(this, l, U)}
				@drop=${(i) => c(this, l, C).call(this, i, [t, e, a.data.length - 1])}>
				<div class="items">
					${g(
    a?.data.length === 0,
    () => d`<em><umb-localize key="tiptap_toolbar_emptyGroup">Empty</umb-localize></em>`,
    () => d`${a.data.map((i, r) => c(this, l, H).call(this, i, t, e, r))}`
  )}
				</div>
				${g(
    o,
    () => d`
						<uui-action-bar>
							<uui-button
								look="secondary"
								label=${this.localize.term("tiptap_toolbar_removeGroup")}
								@click=${() => s(this, n)?.removeToolbarGroup(t, e)}>
								<uui-icon name="icon-trash"></uui-icon>
							</uui-button>
						</uui-action-bar>
					`
  )}
			</div>
			<uui-button-inline-create
				vertical
				label=${this.localize.term("tiptap_toolbar_addGroup")}
				@click=${() => s(this, n)?.insertToolbarGroup(t, e + 1)}></uui-button-inline-create>
		`;
};
H = function(a, t = 0, e = 0, o = 0) {
  const i = s(this, n)?.getExtensionByAlias(a);
  if (!i) return E;
  const r = !s(this, n)?.isExtensionEnabled(i.alias);
  switch (i.kind) {
    case "styleMenu":
    case "menu":
      return d`
					<uui-button
						compact
						class=${r ? "forbidden" : ""}
						draggable="true"
						look=${r ? "placeholder" : "outline"}
						title=${this.localize.string(i.label)}
						?disabled=${r}
						@click=${() => s(this, n).removeToolbarItem([t, e, o])}
						@dragend=${c(this, l, y)}
						@dragstart=${(u) => c(this, l, T).call(this, u, a, [t, e, o])}>
						<div class="inner">
							<span>${this.localize.string(i.label)}</span>
						</div>
						<uui-symbol-expand slot="extra" open></uui-symbol-expand>
					</uui-button>
				`;
    case "button":
    default:
      return d`
					<uui-button
						compact
						class=${r ? "forbidden" : ""}
						data-mark="tiptap-toolbar-item:${i.alias}"
						draggable="true"
						look=${r ? "placeholder" : "outline"}
						title=${this.localize.string(i.label)}
						?disabled=${r}
						@click=${() => s(this, n).removeToolbarItem([t, e, o])}
						@dragend=${c(this, l, y)}
						@dragstart=${(u) => c(this, l, T).call(this, u, a, [t, e, o])}>
						<div class="inner">
							${g(
        i.icon,
        () => d`<umb-icon .name=${i.icon}></umb-icon>`,
        () => d`<span>${this.localize.string(i.label)}</span>`
      )}
						</div>
					</uui-button>
				`;
  }
};
_.styles = [
  ot`
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

							.items {
								display: flex;
								flex-direction: row;
								flex-wrap: wrap;
								gap: var(--uui-size-1);

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
									}

									uui-symbol-expand {
										margin-left: var(--uui-size-space-2);
									}
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
q([
  P()
], _.prototype, "_availableExtensions", 2);
q([
  P()
], _.prototype, "_toolbar", 2);
q([
  it({ attribute: !1 })
], _.prototype, "value", 1);
_ = q([
  rt("umb-property-editor-ui-tiptap-toolbar-configuration")
], _);
export {
  _ as UmbPropertyEditorUiTiptapToolbarConfigurationElement,
  _ as element
};
//# sourceMappingURL=property-editor-ui-tiptap-toolbar-configuration.element-BRa6FkD3.js.map
