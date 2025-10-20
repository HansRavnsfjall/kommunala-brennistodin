import { UmbTagRepository as O } from "./tag.repository-CQuBjPOQ.js";
import { html as l, nothing as m, css as B, property as h, state as y, query as f, queryAll as S, customElement as M, repeat as P } from "@umbraco-cms/backoffice/external/lit";
import { UUIFormControlMixin as W } from "@umbraco-cms/backoffice/external/uui";
import { UmbLitElement as F } from "@umbraco-cms/backoffice/lit-element";
var q = Object.defineProperty, K = Object.getOwnPropertyDescriptor, b = (t) => {
  throw TypeError(t);
}, a = (t, i, e, s) => {
  for (var u = s > 1 ? void 0 : s ? K(i, e) : i, d = t.length - 1, g; d >= 0; d--)
    (g = t[d]) && (u = (s ? g(i, e, u) : g(u)) || u);
  return s && u && q(i, e, u), u;
}, w = (t, i, e) => i.has(t) || b("Cannot " + e), R = (t, i, e) => (w(t, i, "read from private field"), e ? e.call(t) : i.get(t)), _ = (t, i, e) => i.has(t) ? b("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, e), n = (t, i, e) => (w(t, i, "access private method"), e), v, r, x, k, I, $, c, p, C, T, E, z, D, U, A;
let o = class extends W(F, "") {
  constructor() {
    super(...arguments), _(this, r), this._items = [], this.readonly = !1, this._matches = [], this._currentInput = "", _(this, v, new O(this));
  }
  set items(t) {
    const i = t.filter((e) => e !== "");
    this._items = i, super.value = this._items.join(",");
  }
  get items() {
    return this._items;
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
    return l`
			<div id="wrapper">
				${n(this, r, z).call(this)}
				<span id="main-tag-wrapper">
					<uui-tag id="input-width-tracker" aria-hidden="true" style="visibility:hidden;opacity:0;position:absolute;">
						${this._currentInput}
					</uui-tag>
					${n(this, r, U).call(this)}
				</span>
			</div>
		`;
  }
};
v = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
x = async function(t) {
  if (!this.group || this.culture === void 0 || !t) return;
  const { data: i } = await R(this, v).queryTags(this.group, this.culture, t);
  i && (this._matches = i.items);
};
k = function(t) {
  if (t.key === "Tab" && this._tagInput.value.trim().length && !this._matches.length) {
    t.preventDefault(), n(this, r, c).call(this);
    return;
  }
  if (t.key === "Enter") {
    n(this, r, c).call(this);
    return;
  }
  if (t.key === "ArrowDown" || t.key === "Tab") {
    t.preventDefault(), this._currentInput = this._optionCollection?.item(0)?.value ?? this._currentInput, this._optionCollection?.item(0)?.focus();
    return;
  }
  n(this, r, p).call(this, !1);
};
I = function(t) {
  this._currentInput = t.target.value, !this._currentInput || !this._currentInput.length ? this._matches = [] : n(this, r, x).call(this, this._currentInput);
};
$ = function() {
  this._matches.length || n(this, r, c).call(this);
};
c = function() {
  n(this, r, p).call(this, !1);
  const t = this._tagInput.value.trim();
  if (!t) return;
  if (this.items.find((e) => e === t)) return n(this, r, p).call(this, !0);
  n(this, r, p).call(this, !1), this.items = [...this.items, t], this._tagInput.value = "", this._currentInput = "", this.dispatchEvent(new CustomEvent("change", { bubbles: !0, composed: !0 }));
};
p = function(t) {
  if (t) {
    this._mainTag.style.border = "1px solid var(--uui-color-danger)", this._tagInput.style.color = "var(--uui-color-danger)";
    return;
  }
  this._mainTag.style.border = "", this._tagInput.style.color = "";
};
C = function(t) {
  const i = [...this.items], e = i.findIndex((s) => s === t);
  i.splice(e, 1), i.length ? this.items = i : this.items = [], this.dispatchEvent(new CustomEvent("change", { bubbles: !0, composed: !0 }));
};
T = function(t) {
  this._tagInput.value = this._optionCollection?.item(t)?.value ?? "", n(this, r, c).call(this), this.focus();
};
E = function(t, i) {
  if (t.key === "Enter" || t.key === "Tab") {
    t.preventDefault(), this._currentInput = this._optionCollection?.item(i)?.value ?? "", n(this, r, c).call(this), this.focus();
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
z = function() {
  return l` ${this.items.map((t) => l`
				<uui-tag class="tag">
					<span>${t}</span>
					${n(this, r, A).call(this, t)}
				</uui-tag>
			`)}`;
};
D = function() {
  if (!this._currentInput.length || !this._matches.length) return m;
  const t = this._matches.filter((i) => i.text !== this._items.find((e) => e === i.text));
  if (t.length)
    return l`
			<div id="matchlist">
				${P(
      t.slice(0, 5),
      (i) => i.id,
      (i, e) => l` <input
								class="options"
								id="tag-${i.id}"
								type="radio"
								name="${i.group ?? ""}"
								@click="${() => n(this, r, T).call(this, e)}"
								@keydown="${(s) => n(this, r, E).call(this, s, e)}"
								value="${i.text ?? ""}"
								?readonly=${this.readonly} />
							<label for="tag-${i.id}"> ${i.text} </label>`
    )}
			</div>
		`;
};
U = function() {
  return this.readonly ? m : l`
			<uui-tag look="outline" id="main-tag" @click="${this.focus}" slot="trigger">
				<input
					id="tag-input"
					aria-label="tag input"
					placeholder="Enter tag"
					.value="${this._currentInput ?? void 0}"
					@keydown="${n(this, r, k)}"
					@input="${n(this, r, I)}"
					@blur="${n(this, r, $)}" />
				<uui-icon id="icon-add" name="icon-add"></uui-icon>
				${n(this, r, D).call(this)}
			</uui-tag>
		`;
};
A = function(t) {
  return this.readonly ? m : l` <uui-icon name="icon-wrong" @click="${() => n(this, r, C).call(this, t)}"></uui-icon> `;
};
o.styles = [
  B`
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

			/** Created tags */

			.tag uui-icon {
				margin-left: var(--uui-size-space-2);
			}

			.tag uui-icon:hover,
			.tag uui-icon:active {
				color: var(--uui-color-selected-contrast);
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
  h({ type: String })
], o.prototype, "group", 2);
a([
  h({ type: String })
], o.prototype, "culture", 2);
a([
  h({ type: Array })
], o.prototype, "items", 1);
a([
  h({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 2);
a([
  y()
], o.prototype, "_matches", 2);
a([
  y()
], o.prototype, "_currentInput", 2);
a([
  f("#main-tag")
], o.prototype, "_mainTag", 2);
a([
  f("#tag-input")
], o.prototype, "_tagInput", 2);
a([
  f("#input-width-tracker")
], o.prototype, "_widthTracker", 2);
a([
  S(".options")
], o.prototype, "_optionCollection", 2);
o = a([
  M("umb-tags-input")
], o);
export {
  o as U
};
//# sourceMappingURL=tags-input.element-Dd1UD2kK.js.map
