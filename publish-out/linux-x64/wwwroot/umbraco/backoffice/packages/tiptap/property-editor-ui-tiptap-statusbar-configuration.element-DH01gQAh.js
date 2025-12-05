import { umbExtensionsRegistry as F } from "@umbraco-cms/backoffice/extension-registry";
import { UmbArrayState as U, UmbBooleanState as G } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextBase as N } from "@umbraco-cms/backoffice/class-api";
import { UmbId as X } from "@umbraco-cms/backoffice/id";
import { UMB_PROPERTY_DATASET_CONTEXT as Y, UMB_PROPERTY_CONTEXT as j } from "@umbraco-cms/backoffice/property";
import { html as c, when as g, repeat as T, nothing as E, css as H, state as k, property as J, customElement as K } from "@umbraco-cms/backoffice/external/lit";
import { debounce as Q } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as Z } from "@umbraco-cms/backoffice/lit-element";
class tt extends N {
  constructor(t) {
    super(t, "UmbTiptapStatusbarConfigurationContext"), this.#a = new U([], (a) => a.alias), this.extensions = this.#a.asObservable(), this.#i = new G(!1), this.reload = this.#i.asObservable(), this.#s = /* @__PURE__ */ new Set(), this.#e = /* @__PURE__ */ new Set(), this.#t = new U([], (a) => a.unique), this.statusbar = this.#t.asObservable(), this.observe(F.byType("tiptapStatusbarExtension"), (a) => {
      const i = a.sort((s, o) => s.alias.localeCompare(o.alias)).map((s) => ({
        alias: s.alias,
        label: s.meta.label,
        icon: s.meta.icon,
        dependencies: s.forExtensions
      }));
      this.#a.setValue(i), this.#r = new Map(i.map((s) => [s.alias, s]));
    }), this.consumeContext(Y, async (a) => {
      this.observe(
        await a?.propertyValueByAlias("extensions"),
        (i) => {
          i && (this.#s.clear(), this.#i.setValue(!1), this.#a.getValue().filter((s) => !s.dependencies || s.dependencies.every((o) => i.includes(o))).map((s) => s.alias).forEach((s) => this.#s.add(s)), this.#i.setValue(!0));
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
    return this.#r?.get(t);
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
    const i = [...this.#t.getValue()], [s, o] = a, d = i[s], p = [...d.data];
    p.splice(o, 0, t), this.#e.add(t), i[s] = { unique: d.unique, data: p }, this.#t.setValue(i);
  }
  moveStatusbarItem(t, a) {
    const [i, s] = t, [o, d] = a, p = [...this.#t.getValue()], v = p[i], A = [...v.data], L = A.splice(s, 1);
    p[i] = { unique: v.unique, data: A };
    const z = p[o], C = [...z.data];
    C.splice(d, 0, L[0]), p[o] = { unique: z.unique, data: C }, this.#t.setValue(p);
  }
  removeStatusbarItem(t) {
    const [a, i] = t, s = [...this.#t.getValue()], o = s[a], d = [...o.data];
    d.splice(i, 1).forEach((v) => this.#e.delete(v)), s[a] = { unique: o.unique, data: d }, this.#t.setValue(s);
  }
  setStatusbar(t) {
    this.isValidStatusbarValue(t) || (t = [[], []]), t.length === 1 && (t = [[], t[0]]), this.#e.clear(), t.forEach((i) => i.forEach((s) => this.#e.add(s)));
    const a = t.map((i) => ({ unique: X.new(), data: i }));
    this.#t.setValue(a);
  }
}
var et = Object.defineProperty, at = Object.getOwnPropertyDescriptor, q = (e) => {
  throw TypeError(e);
}, x = (e, t, a, i) => {
  for (var s = i > 1 ? void 0 : i ? at(t, a) : t, o = e.length - 1, d; o >= 0; o--)
    (d = e[o]) && (s = (i ? d(t, a, s) : d(s)) || s);
  return i && s && et(t, a, s), s;
}, w = (e, t, a) => t.has(e) || q("Cannot " + a), r = (e, t, a) => (w(e, t, "read from private field"), a ? a.call(e) : t.get(e)), f = (e, t, a) => t.has(e) ? q("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), _ = (e, t, a, i) => (w(e, t, "write to private field"), t.set(e, a), a), u = (e, t, a) => (w(e, t, "access private method"), a), n, m, y, h, l, D, $, I, S, V, O, M, B, P, R, W;
let b = class extends Z {
  constructor() {
    super(), f(this, l), f(this, n, new tt(this)), f(this, m), f(this, y, Q((e) => {
      this._availableExtensions = r(this, n).filterExtensions(e);
    }, 250)), this._availableExtensions = [], this._statusbar = [], f(this, h), this.consumeContext(j, (e) => {
      this.observe(r(this, n).extensions, (t) => {
        this._availableExtensions = t;
      }), this.observe(r(this, n).reload, (t) => {
        t && this.requestUpdate();
      }), this.observe(r(this, n).statusbar, (t) => {
        t.length && (this._statusbar = t, _(this, h, t.map((a) => [...a.data])), e?.setValue(r(this, h)));
      });
    });
  }
  set value(e) {
    e || (e = [[], []]), e !== r(this, h) && _(this, h, e);
  }
  get value() {
    return r(this, n).cloneStatusbarValue(r(this, h));
  }
  firstUpdated() {
    r(this, n).setStatusbar(r(this, h));
  }
  render() {
    return c`${u(this, l, P).call(this)} ${u(this, l, M).call(this)}`;
  }
};
n = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
D = function(e) {
  const t = (r(this, h)?.length ?? 1) - 1, a = r(this, h)?.[t].length ?? 0;
  r(this, n).insertStatusbarItem(e.alias, [t, a]);
};
$ = function(e, t, a) {
  e.dataTransfer.effectAllowed = "move", _(this, m, { alias: t, fromPos: a });
};
I = function(e) {
  e.preventDefault(), e.dataTransfer.dropEffect = "move";
};
S = function(e) {
  if (e.preventDefault(), e.dataTransfer?.dropEffect === "none") {
    const { fromPos: t } = r(this, m) ?? {};
    if (!t) return;
    r(this, n).removeStatusbarItem(t);
  }
};
V = function(e, t) {
  e.preventDefault();
  const { alias: a, fromPos: i } = r(this, m) ?? {};
  if (i && !t) {
    r(this, n).removeStatusbarItem(i);
    return;
  }
  if (i && t) {
    r(this, n).moveStatusbarItem(i, t);
    return;
  }
  a && t && r(this, n).insertStatusbarItem(a, t);
};
O = function(e) {
  const t = (e.target.value ?? "").toLocaleLowerCase();
  r(this, y).call(this, t);
};
M = function() {
  return c`
			<uui-box id="toolbox" headline=${this.localize.term("tiptap_statusbar_availableItems")}>
				<div slot="header-actions">
					<uui-input
						type="search"
						autocomplete="off"
						placeholder=${this.localize.term("placeholders_filter")}
						@input=${u(this, l, O)}>
						<div slot="prepend">
							<uui-icon name="search"></uui-icon>
						</div>
					</uui-input>
				</div>
				<uui-scroll-container>
					<div class="available-items" dropzone="move" @drop=${u(this, l, V)} @dragover=${u(this, l, I)}>
						${g(
    this._availableExtensions.length === 0,
    () => c`<umb-localize key="tiptap_statusbar_availableItemsEmpty"
									>There are no statusbar extensions to show</umb-localize
								>`,
    () => T(this._availableExtensions, (e) => u(this, l, B).call(this, e))
  )}
					</div>
				</uui-scroll-container>
			</uui-box>
		`;
};
B = function(e) {
  const t = !r(this, n).isExtensionEnabled(e.alias), a = r(this, n).isExtensionInUse(e.alias);
  return a || t ? E : c`
			<uui-button
				compact
				class=${t ? "forbidden" : ""}
				data-mark="tiptap-toolbar-item:${e.alias}"
				draggable="true"
				look=${t ? "placeholder" : "outline"}
				?disabled=${t || a}
				@click=${() => u(this, l, D).call(this, e)}
				@dragstart=${(i) => u(this, l, $).call(this, i, e.alias)}
				@dragend=${u(this, l, S)}>
				<div class="inner">
					${g(e.icon, () => c`<umb-icon .name=${e.icon}></umb-icon>`)}
					<span>${this.localize.string(e.label)}</span>
				</div>
			</uui-button>
		`;
};
P = function() {
  return c`
			<div id="statusbar">
				<div id="areas">
					${T(
    this._statusbar,
    (e) => e.unique,
    (e, t) => u(this, l, R).call(this, e, t)
  )}
				</div>
			</div>
		`;
};
R = function(e, t = 0) {
  return e ? c`
			<div
				class="area"
				dropzone="move"
				@dragover=${u(this, l, I)}
				@drop=${(a) => u(this, l, V).call(this, a, [t, e.data.length - 1])}>
				<div class="items">
					${g(
    e?.data.length === 0,
    () => c`<em><umb-localize key="tiptap_toolbar_emptyGroup">Empty</umb-localize></em>`,
    () => c`${e.data.map((a, i) => u(this, l, W).call(this, a, t, i))}`
  )}
				</div>
			</div>
		` : E;
};
W = function(e, t = 0, a = 0) {
  const i = r(this, n)?.getExtensionByAlias(e);
  if (!i) return E;
  const s = !r(this, n)?.isExtensionEnabled(i.alias);
  return c`
			<uui-button
				compact
				class=${s ? "forbidden" : ""}
				data-mark="tiptap-toolbar-item:${i.alias}"
				draggable="true"
				look=${s ? "placeholder" : "outline"}
				title=${this.localize.string(i.label)}
				?disabled=${s}
				@click=${() => r(this, n).removeStatusbarItem([t, a])}
				@dragend=${u(this, l, S)}
				@dragstart=${(o) => u(this, l, $).call(this, o, e, [t, a])}>
				<div class="inner">
					${g(i.icon, (o) => c`<umb-icon .name=${o}></umb-icon>`)}
					<span>${this.localize.string(i.label)}</span>
				</div>
			</uui-button>
		`;
};
b.styles = [
  H`
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
						--uui-button-contrast-disabled: var(--uui-color-danger);
						--uui-button-border-color-disabled: var(--uui-color-danger);
					}

					div {
						display: flex;
						gap: var(--uui-size-1);
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
x([
  k()
], b.prototype, "_availableExtensions", 2);
x([
  k()
], b.prototype, "_statusbar", 2);
x([
  J({ attribute: !1 })
], b.prototype, "value", 1);
b = x([
  K("umb-property-editor-ui-tiptap-statusbar-configuration")
], b);
export {
  b as UmbPropertyEditorUiTiptapStatusbarConfigurationElement,
  b as element
};
//# sourceMappingURL=property-editor-ui-tiptap-statusbar-configuration.element-DH01gQAh.js.map
