import { UmbTagRepository as q } from "./tag.repository-CQuBjPOQ.js";
import { html as c, repeat as I, nothing as y, css as F, property as g, state as $, query as w, queryAll as T, customElement as L } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as E } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as G } from "@umbraco-cms/backoffice/lit-element";
import { UUIFormControlMixin as N } from "@umbraco-cms/backoffice/external/uui";
var H = Object.defineProperty, J = Object.getOwnPropertyDescriptor, C = (t) => {
  throw TypeError(t);
}, a = (t, i, r, s) => {
  for (var l = s > 1 ? void 0 : s ? J(i, r) : i, m = t.length - 1, v; m >= 0; m--)
    (v = t[m]) && (l = (s ? v(i, r, l) : v(l)) || l);
  return s && l && H(i, r, l), l;
}, b = (t, i, r) => i.has(t) || C("Cannot " + r), h = (t, i, r) => (b(t, i, "read from private field"), r ? r.call(t) : i.get(t)), _ = (t, i, r) => i.has(t) ? C("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, r), Q = (t, i, r, s) => (b(t, i, "write to private field"), i.set(t, r), r), n = (t, i, r) => (b(t, i, "access private method"), r), u, k, e, D, z, p, A, U, O, S, d, f, x, B, W, M, K, P, R;
let o = class extends N(G, "") {
  constructor() {
    super(...arguments), _(this, e), _(this, u, []), this.readonly = !1, this._matches = [], this._currentInput = "", _(this, k, new q(this));
  }
  set items(t) {
    const i = t.filter((r) => r !== "");
    Q(this, u, i), super.value = h(this, u).join(",");
  }
  get items() {
    return h(this, u);
  }
  focus() {
    this._tagInput.focus();
  }
  getFormElement() {
  }
  updated() {
    this._mainTag.style.width = `${this._widthTracker.offsetWidth - 4}px`;
  }
  /** Render */
  render() {
    return c`
			<div id="wrapper">
				${n(this, e, M).call(this)}
				<span id="main-tag-wrapper">
					<uui-tag id="input-width-tracker" aria-hidden="true" style="visibility:hidden;opacity:0;position:absolute;">
						${this._currentInput}
					</uui-tag>
					${n(this, e, P).call(this)}
				</span>
			</div>
		`;
  }
};
u = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakMap();
e = /* @__PURE__ */ new WeakSet();
D = async function(t) {
  if (!this.group || !t) return;
  const { data: i } = await h(this, k).queryTags(this.group, this.culture ?? null, t);
  i && (this._matches = i.items);
};
z = function(t) {
  const i = this._tagInput.value.trim().length;
  if (t.key === "Tab" && i && !this._matches.length) {
    t.preventDefault(), n(this, e, d).call(this);
    return;
  }
  if (!(t.key === "Tab" && !i)) {
    if (t.key === "Enter") {
      n(this, e, d).call(this);
      return;
    }
    if (t.key === "ArrowDown") {
      t.preventDefault(), this._currentInput = this._optionCollection?.item(0)?.value ?? this._currentInput, this._optionCollection?.item(0)?.focus();
      return;
    }
    n(this, e, f).call(this, !1);
  }
};
p = function(t) {
  const i = this._tagEls?.[t];
  if (!i) return;
  this.renderRoot.querySelector('.tag[tabindex="0"]')?.setAttribute("tabindex", "-1"), i.setAttribute("tabindex", "0"), i.focus();
};
A = function(t) {
  (t.key === "Enter" || t.key === "ArrowDown") && this.items.length && (t.preventDefault(), n(this, e, p).call(this, 0));
};
U = function(t, i) {
  t.key === "ArrowRight" && (t.preventDefault(), i < this.items.length - 1 && n(this, e, p).call(this, i + 1)), t.key === "ArrowLeft" && (t.preventDefault(), i > 0 && n(this, e, p).call(this, i - 1)), (t.key === "Backspace" || t.key === "Delete") && (t.preventDefault(), h(this, u).length - 1 === i && n(this, e, p).call(this, i - 1), n(this, e, x).call(this, h(this, u)[i]), n(this, e, p).call(this, i + 1));
};
O = function(t) {
  this._currentInput = t.target.value, !this._currentInput || !this._currentInput.length ? this._matches = [] : n(this, e, D).call(this, this._currentInput);
};
S = function() {
  this._matches.length || n(this, e, d).call(this);
};
d = function() {
  n(this, e, f).call(this, !1);
  const t = this._tagInput.value.trim();
  if (!t) return;
  if (this.items.find((r) => r === t)) return n(this, e, f).call(this, !0);
  n(this, e, f).call(this, !1), this.items = [...this.items, t], this._tagInput.value = "", this._currentInput = "", this.dispatchEvent(new E());
};
f = function(t) {
  if (t) {
    this._mainTag.style.border = "1px solid var(--uui-color-danger)", this._tagInput.style.color = "var(--uui-color-danger)";
    return;
  }
  this._mainTag.style.border = "", this._tagInput.style.color = "";
};
x = function(t) {
  const i = [...this.items], r = i.findIndex((s) => s === t);
  i.splice(r, 1), i.length ? this.items = i : this.items = [], this.dispatchEvent(new E());
};
B = function(t) {
  this._tagInput.value = this._optionCollection?.item(t)?.value ?? "", n(this, e, d).call(this), this.focus();
};
W = function(t, i) {
  if (t.key === "Enter" || t.key === "Tab") {
    t.preventDefault(), this._currentInput = this._optionCollection?.item(i)?.value ?? "", n(this, e, d).call(this), this.focus();
    return;
  }
  if (t.key === "ArrowDown") {
    if (t.preventDefault(), !this._optionCollection?.item(i + 1)) return;
    this._optionCollection?.item(i + 1)?.focus(), this._currentInput = this._optionCollection?.item(i + 1)?.value ?? "";
    return;
  }
  if (t.key === "ArrowUp") {
    if (t.preventDefault(), !this._optionCollection?.item(i - 1)) return;
    this._optionCollection?.item(i - 1)?.focus(), this._currentInput = this._optionCollection?.item(i - 1)?.value ?? "";
  }
  t.key === "Backspace" && this.focus();
};
M = function() {
  return c`
			<div id="tags" tabindex="0" @keydown=${n(this, e, A)}>
				${I(
    this.items,
    (t) => t,
    (t, i) => c`
						<uui-tag class="tag" @keydown=${(r) => n(this, e, U).call(this, r, i)}>
							<span>${t}</span>
							${n(this, e, R).call(this, t)}
						</uui-tag>
					`
  )}
			</div>
		`;
};
K = function() {
  if (!this._matches.length) return y;
  const t = this._matches.filter((i) => i.text !== h(this, u).find((r) => r === i.text));
  if (t.length)
    return c`
			<div id="matchlist">
				${I(
      t.slice(0, 5),
      (i) => i.id,
      (i, r) => c`<input
								class="options"
								id="tag-${i.id}"
								type="radio"
								name="${i.group ?? ""}"
								@click="${() => n(this, e, B).call(this, r)}"
								@keydown="${(s) => n(this, e, W).call(this, s, r)}"
								value="${i.text ?? ""}"
								?readonly=${this.readonly} />
							<label for="tag-${i.id}"> ${i.text} </label>`
    )}
			</div>
		`;
};
P = function() {
  return this.readonly ? y : c`
			<uui-tag look="outline" id="main-tag" @click="${this.focus}" slot="trigger">
				<input
					id="tag-input"
					aria-label="tag input"
					autocomplete="off"
					placeholder="Enter tag"
					.value="${this._currentInput ?? void 0}"
					@keydown="${n(this, e, z)}"
					@input="${n(this, e, O)}"
					@blur="${n(this, e, S)}" />
				<uui-icon id="icon-add" name="icon-add"></uui-icon>
				${n(this, e, K).call(this)}
			</uui-tag>
		`;
};
R = function(t) {
  return this.readonly ? y : c`<uui-icon name="icon-wrong" @click="${() => n(this, e, x).call(this, t)}"></uui-icon>`;
};
o.styles = [
  F`
			#wrapper {
				box-sizing: border-box;
				display: flex;
				gap: var(--uui-size-space-2);
				flex-wrap: wrap;
				align-items: center;
				padding: var(--uui-size-space-2);
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-input-background-color, var(--uui-color-surface));
				flex: 1;
				min-height: 40px;
			}

			#main-tag-wrapper {
				position: relative;
			}

			/** Tags */
			#tags {
				display: flex;
				gap: var(--uui-size-space-2);
				flex-wrap: wrap;
				border-radius: var(--uui-size-1);

				&:focus {
					outline: var(--uui-size-1) solid var(--uui-color-focus);
					outline-offset: var(--uui-size-1);
				}
			}

			uui-tag {
				position: relative;
				max-width: 200px;
			}

			uui-tag uui-icon {
				cursor: pointer;
				min-width: 12.8px !important;
			}

			uui-tag span {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			/** Existing tags */
			.tag {
				&:focus {
					outline: var(--uui-size-1) solid var(--uui-color-focus);
				}

				uui-icon {
					margin-left: var(--uui-size-space-2);

					&:hover,
					&:active {
						color: var(--uui-color-selected-contrast);
					}
				}
			}

			/** Main tag */

			#main-tag {
				padding: 3px;
				background-color: var(--uui-color-selected-contrast);
				min-width: 20px;
				position: relative;
				border-radius: var(--uui-size-5, 12px);
			}

			#main-tag uui-icon {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}

			#main-tag:hover uui-icon,
			#main-tag:active uui-icon {
				color: var(--uui-color-selected);
			}

			#main-tag #tag-input:focus ~ uui-icon,
			#main-tag #tag-input:not(:placeholder-shown) ~ uui-icon {
				display: none;
			}

			#main-tag:has(*:hover),
			#main-tag:has(*:active),
			#main-tag:has(*:focus) {
				border: 1px solid var(--uui-color-selected-emphasis);
			}

			#main-tag:has(#tag-input:not(:focus)):hover {
				cursor: pointer;
				border: 1px solid var(--uui-color-selected-emphasis);
			}

			#main-tag:not(:focus-within) #tag-input:placeholder-shown {
				opacity: 0;
			}

			#main-tag:has(#tag-input:focus),
			#main-tag:has(#tag-input:not(:placeholder-shown)) {
				min-width: 65px;
			}

			#main-tag #tag-input {
				box-sizing: border-box;
				max-height: 25.8px;
				background: none;
				font: inherit;
				color: var(--uui-color-selected);
				line-height: reset;
				padding: 0 var(--uui-size-space-2);
				margin: 0.5px 0 -0.5px;
				border: none;
				outline: none;
				width: 100%;
			}

			/** Dropdown matchlist */

			#matchlist input[type='radio'] {
				-webkit-appearance: none;
				appearance: none;
				/* For iOS < 15 to remove gradient background */
				background-color: transparent;
				/* Not removed via appearance */
				margin: 0;
			}

			uui-tag:focus-within #matchlist {
				display: flex;
			}

			#matchlist {
				display: flex;
				flex-direction: column;
				background-color: var(--uui-color-surface);
				position: absolute;
				width: 150px;
				left: 0;
				top: var(--uui-size-space-6);
				border-radius: var(--uui-border-radius);
				border: 1px solid var(--uui-color-border);
				z-index: 10;
			}

			#matchlist label {
				display: none;
				cursor: pointer;
				box-sizing: border-box;
				display: block;
				width: 100%;
				background: none;
				border: none;
				text-align: left;
				padding: 10px 12px;

				/** Overflow */
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			#matchlist label:hover,
			#matchlist label:focus,
			#matchlist label:focus-within,
			#matchlist input[type='radio']:focus + label {
				display: block;
				background-color: var(--uui-color-focus);
				color: var(--uui-color-selected-contrast);
			}
		`
];
a([
  g({ type: String })
], o.prototype, "group", 2);
a([
  g({ type: String })
], o.prototype, "culture", 2);
a([
  g({ type: Array })
], o.prototype, "items", 1);
a([
  g({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 2);
a([
  $()
], o.prototype, "_matches", 2);
a([
  $()
], o.prototype, "_currentInput", 2);
a([
  w("#main-tag")
], o.prototype, "_mainTag", 2);
a([
  w("#tag-input")
], o.prototype, "_tagInput", 2);
a([
  w("#input-width-tracker")
], o.prototype, "_widthTracker", 2);
a([
  T(".options")
], o.prototype, "_optionCollection", 2);
a([
  T(".tag")
], o.prototype, "_tagEls", 2);
o = a([
  L("umb-tags-input")
], o);
export {
  o as U
};
//# sourceMappingURL=tags-input.element-DeH2D_xJ.js.map
