import { U as F } from "./tiptap-statusbar-configuration.context-token-CR1vBM3L.js";
import { umbExtensionsRegistry as G } from "@umbraco-cms/backoffice/extension-registry";
import { UmbArrayState as V, UmbBooleanState as X } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextBase as Y } from "@umbraco-cms/backoffice/class-api";
import { UmbId as j } from "@umbraco-cms/backoffice/id";
import { UMB_PROPERTY_DATASET_CONTEXT as H, UMB_PROPERTY_CONTEXT as J } from "@umbraco-cms/backoffice/property";
import { html as c, when as _, repeat as z, nothing as C, css as K, state as O, property as Q, customElement as Z } from "@umbraco-cms/backoffice/external/lit";
import { debounce as tt } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as et } from "@umbraco-cms/backoffice/lit-element";
class at extends Y {
  constructor(t) {
    super(t, F), this.#a = new V([], (a) => a.alias), this.extensions = this.#a.asObservable(), this.#i = new X(!1), this.reload = this.#i.asObservable(), this.#s = /* @__PURE__ */ new Set(), this.#e = /* @__PURE__ */ new Set(), this.#t = new V([], (a) => a.unique), this.statusbar = this.#t.asObservable(), this.observe(G.byType("tiptapStatusbarExtension"), (a) => {
      const i = a.sort((s, n) => s.alias.localeCompare(n.alias)).map((s) => ({
        kind: "default",
        alias: s.alias,
        label: s.meta.label,
        icon: s.meta.icon,
        dependencies: s.forExtensions
      }));
      this.#a.setValue(i), this.#r = new Map(i.map((s) => [s.alias, s]));
    }), this.consumeContext(H, async (a) => {
      this.observe(
        await a?.propertyValueByAlias("extensions"),
        (i) => {
          i && (this.#s.clear(), this.#i.setValue(!1), this.#a.getValue().filter((s) => !s.dependencies || s.dependencies.every((n) => i.includes(n))).map((s) => s.alias).forEach((s) => this.#s.add(s)), this.#i.setValue(!0));
        },
        "_observeExtensions"
      );
    });
  }
  #a;
  #i;
  #s;
  #e;
  #r;
  #t;
  cloneStatusbarValue(t) {
    return this.isValidStatusbarValue(t) ? t.map((a) => [...a]) : [[], []];
  }
  filterExtensions(t) {
    return this.#a.getValue().filter((a) => a.alias?.toLowerCase().includes(t) || a.label?.toLowerCase().includes(t));
  }
  getExtensionByAlias(t) {
    return this.#r?.get(t) ?? { label: "", alias: t, icon: "", kind: "unknown" };
  }
  isExtensionEnabled(t) {
    return this.#s.has(t);
  }
  isExtensionInUse(t) {
    return this.#e.has(t);
  }
  isValidStatusbarValue(t) {
    if (!Array.isArray(t)) return !1;
    for (const a of t) {
      if (!Array.isArray(a)) return !1;
      for (const i of a)
        if (typeof i != "string") return !1;
    }
    return !0;
  }
  insertStatusbarItem(t, a) {
    const i = [...this.#t.getValue()], [s, n] = a, u = i[s], p = [...u.data];
    p.splice(n, 0, t), this.#e.add(t), i[s] = { unique: u.unique, data: p }, this.#t.setValue(i);
  }
  moveStatusbarItem(t, a) {
    const [i, s] = t, [n, u] = a, p = [...this.#t.getValue()], v = p[i], T = [...v.data], N = T.splice(s, 1);
    p[i] = { unique: v.unique, data: T };
    const k = p[n], U = [...k.data];
    U.splice(u, 0, N[0]), p[n] = { unique: k.unique, data: U }, this.#t.setValue(p);
  }
  removeStatusbarItem(t) {
    const [a, i] = t, s = [...this.#t.getValue()], n = s[a], u = [...n.data];
    u.splice(i, 1).forEach((v) => this.#e.delete(v)), s[a] = { unique: n.unique, data: u }, this.#t.setValue(s);
  }
  setStatusbar(t) {
    this.isValidStatusbarValue(t) || (t = [[], []]), t.length === 1 && (t = [[], t[0]]), this.#e.clear(), t.forEach((i) => i.forEach((s) => this.#e.add(s)));
    const a = t.map((i) => ({ unique: j.new(), data: i }));
    this.#t.setValue(a);
  }
}
var it = Object.defineProperty, st = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, w = (e, t, a, i) => {
  for (var s = i > 1 ? void 0 : i ? st(t, a) : t, n = e.length - 1, u; n >= 0; n--)
    (u = e[n]) && (s = (i ? u(t, a, s) : u(s)) || s);
  return i && s && it(t, a, s), s;
}, E = (e, t, a) => t.has(e) || M("Cannot " + a), r = (e, t, a) => (E(e, t, "read from private field"), a ? a.call(e) : t.get(e)), b = (e, t, a) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), g = (e, t, a, i) => (E(e, t, "write to private field"), t.set(e, a), a), d = (e, t, a) => (E(e, t, "access private method"), a), o, m, y, x, h, l, q, $, I, S, A, D, B, P, R, W, L;
let f = class extends et {
  constructor() {
    super(), b(this, l), b(this, o, new at(this)), b(this, m), b(this, y, tt((e) => {
      this._availableExtensions = r(this, o).filterExtensions(e);
    }, 250)), b(this, x, !1), this._availableExtensions = [], this._statusbar = [], b(this, h), this.consumeContext(J, (e) => {
      this.observe(r(this, o).extensions, (t) => {
        this._availableExtensions = t;
      }), this.observe(r(this, o).reload, (t) => {
        t && this.requestUpdate();
      }), this.observe(r(this, o).statusbar, (t) => {
        t.length && (this._statusbar = t, r(this, x) && (g(this, h, t.map((a) => [...a.data])), e?.setValue(r(this, h))));
      });
    });
  }
  set value(e) {
    e || (e = [[], []]), e !== r(this, h) && g(this, h, e);
  }
  get value() {
    if (r(this, h) !== void 0)
      return r(this, o).cloneStatusbarValue(r(this, h));
  }
  firstUpdated() {
    r(this, o).setStatusbar(r(this, h)), g(this, x, !0);
  }
  render() {
    return c`${d(this, l, R).call(this)} ${d(this, l, B).call(this)}`;
  }
};
o = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
q = function(e) {
  const t = (r(this, h)?.length ?? 1) - 1, a = r(this, h)?.[t].length ?? 0;
  r(this, o).insertStatusbarItem(e.alias, [t, a]);
};
$ = function(e, t, a) {
  e.dataTransfer.effectAllowed = "move", g(this, m, { alias: t, fromPos: a });
};
I = function(e) {
  e.preventDefault(), e.dataTransfer.dropEffect = "move";
};
S = function(e) {
  if (e.preventDefault(), e.dataTransfer?.dropEffect === "none") {
    const { fromPos: t } = r(this, m) ?? {};
    if (!t) return;
    r(this, o).removeStatusbarItem(t);
  }
};
A = function(e, t) {
  e.preventDefault();
  const { alias: a, fromPos: i } = r(this, m) ?? {};
  if (i && !t) {
    r(this, o).removeStatusbarItem(i);
    return;
  }
  if (i && t) {
    r(this, o).moveStatusbarItem(i, t);
    return;
  }
  a && t && r(this, o).insertStatusbarItem(a, t);
};
D = function(e) {
  const t = (e.target.value ?? "").toLocaleLowerCase();
  r(this, y).call(this, t);
};
B = function() {
  const e = this.localize.term("placeholders_filter");
  return c`
			<uui-box id="toolbox" headline=${this.localize.term("tiptap_statusbar_availableItems")}>
				<div slot="header-actions">
					<uui-input type="search" autocomplete="off" label=${e} placeholder=${e} @input=${d(this, l, D)}>
						<div slot="prepend">
							<uui-icon name="search"></uui-icon>
						</div>
					</uui-input>
				</div>
				<uui-scroll-container>
					<div class="available-items" dropzone="move" @drop=${d(this, l, A)} @dragover=${d(this, l, I)}>
						${_(
    this._availableExtensions.length === 0,
    () => c`<umb-localize key="tiptap_statusbar_availableItemsEmpty"
									>There are no statusbar extensions to show</umb-localize
								>`,
    () => z(this._availableExtensions, (t) => d(this, l, P).call(this, t))
  )}
					</div>
				</uui-scroll-container>
			</uui-box>
		`;
};
P = function(e) {
  const t = !r(this, o).isExtensionEnabled(e.alias), a = r(this, o).isExtensionInUse(e.alias);
  if (a || t) return C;
  const i = this.localize.string(e.label);
  return c`
			<uui-button
				compact
				class=${t ? "forbidden" : ""}
				data-mark="tiptap-statusbar-item:${e.alias}"
				draggable="true"
				label=${i}
				look=${t ? "placeholder" : "outline"}
				?disabled=${t || a}
				@click=${() => d(this, l, q).call(this, e)}
				@dragstart=${(s) => d(this, l, $).call(this, s, e.alias)}
				@dragend=${d(this, l, S)}>
				<div class="inner">
					${_(e.icon, () => c`<umb-icon .name=${e.icon}></umb-icon>`)}
					<span>${i}</span>
				</div>
			</uui-button>
		`;
};
R = function() {
  return c`
			<div id="statusbar">
				<div id="areas">
					${z(
    this._statusbar,
    (e) => e.unique,
    (e, t) => d(this, l, W).call(this, e, t)
  )}
				</div>
			</div>
		`;
};
W = function(e, t = 0) {
  return e ? c`
			<div
				class="area"
				dropzone="move"
				@dragover=${d(this, l, I)}
				@drop=${(a) => d(this, l, A).call(this, a, [t, e.data.length - 1])}>
				<div class="items">
					${_(
    e?.data.length === 0,
    () => c`<em><umb-localize key="tiptap_toolbar_emptyGroup">Empty</umb-localize></em>`,
    () => c`${e.data.map((a, i) => d(this, l, L).call(this, a, t, i))}`
  )}
				</div>
			</div>
		` : C;
};
L = function(e, t = 0, a = 0) {
  const i = r(this, o)?.getExtensionByAlias(e), s = !r(this, o)?.isExtensionEnabled(i.alias), n = this.localize.string(i.label) || i.alias;
  switch (i.kind) {
    case "unknown":
      return c`
					<uui-button
						compact
						class="missing"
						data-mark="tiptap-statusbar-item:${i.alias}"
						color="danger"
						look="placeholder"
						label="Missing extension"
						title="Missing extension: ${i.alias}"
						@click=${() => r(this, o).removeStatusbarItem([t, a])}></uui-button>
				`;
    default:
      return c`
					<uui-button
						compact
						class=${s ? "forbidden" : ""}
						data-mark="tiptap-statusbar-item:${i.alias}"
						draggable="true"
						label=${n}
						look=${s ? "placeholder" : "outline"}
						title=${n}
						@click=${() => r(this, o).removeStatusbarItem([t, a])}
						@dragend=${d(this, l, S)}
						@dragstart=${(u) => d(this, l, $).call(this, u, e, [t, a])}>
						<div class="inner">
							${_(i.icon, (u) => c`<umb-icon .name=${u}></umb-icon>`)}
							<span>${n}</span>
						</div>
					</uui-button>
				`;
  }
};
f.styles = [
  K`
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

				#statusbar {
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
						--uui-button-contrast: var(--uui-color-danger);
						--uui-button-border-color: var(--uui-color-danger);
					}

					div {
						display: flex;
						gap: var(--uui-size-1);
						align-items: flex-end;
					}
				}
			}

			#areas {
				display: flex;
				gap: var(--uui-size-1);
				justify-content: space-between;
				align-items: center;

				.area {
					flex: 1;
					display: flex;
					align-items: flex-start;
					justify-content: space-between;

					border: 1px dashed transparent;
					padding: var(--uui-size-3);

					&:last-child {
						justify-content: flex-end;
					}

					&:focus-within,
					&:hover {
						border-color: var(--uui-color-border-standalone);
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
								align-items: flex-end;
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
w([
  O()
], f.prototype, "_availableExtensions", 2);
w([
  O()
], f.prototype, "_statusbar", 2);
w([
  Q({ attribute: !1 })
], f.prototype, "value", 1);
f = w([
  Z("umb-property-editor-ui-tiptap-statusbar-configuration")
], f);
export {
  f as UmbPropertyEditorUiTiptapStatusbarConfigurationElement,
  f as element
};
//# sourceMappingURL=property-editor-ui-tiptap-statusbar-configuration.element-C4GZPoSm.js.map
