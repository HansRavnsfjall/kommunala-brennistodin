import { html as c, css as W, property as q, state as f, query as m, queryAll as x, customElement as K, nothing as S, repeat as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as E } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as V } from "@umbraco-cms/backoffice/lit-element";
import { UmbTagsInputElement as j } from "@umbraco-cms/backoffice/tags";
var z = Object.defineProperty, F = Object.getOwnPropertyDescriptor, $ = (t) => {
  throw TypeError(t);
}, u = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? F(e, i) : e, l = t.length - 1, h; l >= 0; l--)
    (h = t[l]) && (a = (s ? h(e, i, a) : h(a)) || a);
  return s && a && z(e, i, a), a;
}, G = (t, e, i) => e.has(t) || $("Cannot " + i), H = (t, e, i) => e.has(t) ? $("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), r = (t, e, i) => (G(t, e, "access private method"), i), n, k, T, b, D, p, _, A, P, U, O, B, L;
let o = class extends V {
  constructor() {
    super(...arguments), H(this, n), this.value = [], this._items = [], this._matches = [], this._currentInput = "";
  }
  set config(t) {
    t && (this._items = t.getValueByAlias("items") ?? []);
  }
  focus() {
    this._tagInput.focus();
  }
  updated() {
    this._mainTag.style.width = `${this._widthTracker.offsetWidth - 4}px`;
  }
  /** Render */
  render() {
    return c`
			<div id="wrapper">
				${r(this, n, O).call(this)}
				<span id="main-tag-wrapper">
					<uui-tag id="input-width-tracker" aria-hidden="true" style="visibility:hidden;opacity:0;position:absolute;">
						${this._currentInput}
					</uui-tag>
					${r(this, n, L).call(this)}
				</span>
			</div>
		`;
  }
};
n = /* @__PURE__ */ new WeakSet();
k = function(t) {
  this._matches = this._items.filter((e) => e.value.toLowerCase().includes(t.toLowerCase()));
};
T = function(t) {
  var e, i, s, a;
  if (t.key === "Tab" && this._tagInput.value.trim().length && !this._matches.length) {
    t.preventDefault(), r(this, n, p).call(this);
    return;
  }
  if (t.key === "Enter") {
    r(this, n, p).call(this);
    return;
  }
  if (t.key === "ArrowDown" || t.key === "Tab") {
    t.preventDefault(), this._currentInput = ((i = (e = this._optionCollection) == null ? void 0 : e.item(0)) == null ? void 0 : i.value) ?? this._currentInput, (a = (s = this._optionCollection) == null ? void 0 : s.item(0)) == null || a.focus();
    return;
  }
  r(this, n, _).call(this, !1);
};
b = function(t) {
  this._currentInput = t.target.value, !this._currentInput || !this._currentInput.length ? this._matches = [] : r(this, n, k).call(this, this._currentInput);
};
D = function() {
  this._matches.length || r(this, n, p).call(this);
};
p = function() {
  var i;
  r(this, n, _).call(this, !1);
  const t = this._tagInput.value.trim();
  if (!t) return;
  if ((i = this.value) == null ? void 0 : i.find((s) => s === t)) return r(this, n, _).call(this, !0);
  r(this, n, _).call(this, !1), this.value = [...this.value ?? [], t], this._tagInput.value = "", this._currentInput = "", this.dispatchEvent(new E());
};
_ = function(t) {
  if (t) {
    this._mainTag.style.border = "1px solid var(--uui-color-danger)", this._tagInput.style.color = "var(--uui-color-danger)";
    return;
  }
  this._mainTag.style.border = "", this._tagInput.style.color = "";
};
A = function(t) {
  const e = [...this.value ?? []], i = e.findIndex((s) => s === t);
  e.splice(i, 1), e.length ? this.value = [...e] : this.value = [], this.dispatchEvent(new E());
};
P = function(t) {
  var e, i;
  this._tagInput.value = ((i = (e = this._optionCollection) == null ? void 0 : e.item(t)) == null ? void 0 : i.value) ?? "", r(this, n, p).call(this), this.focus();
};
U = function(t, e) {
  var i, s, a, l, h, d, v, g, y, I, w, C;
  if (t.key === "Enter" || t.key === "Tab") {
    t.preventDefault(), this._currentInput = ((s = (i = this._optionCollection) == null ? void 0 : i.item(e)) == null ? void 0 : s.value) ?? "", r(this, n, p).call(this), this.focus();
    return;
  }
  if (t.key === "ArrowDown") {
    if (t.preventDefault(), !((a = this._optionCollection) != null && a.item(e + 1))) return;
    (h = (l = this._optionCollection) == null ? void 0 : l.item(e + 1)) == null || h.focus(), this._currentInput = ((v = (d = this._optionCollection) == null ? void 0 : d.item(e + 1)) == null ? void 0 : v.value) ?? "";
    return;
  }
  if (t.key === "ArrowUp") {
    if (t.preventDefault(), !((g = this._optionCollection) != null && g.item(e - 1))) return;
    (I = (y = this._optionCollection) == null ? void 0 : y.item(e - 1)) == null || I.focus(), this._currentInput = ((C = (w = this._optionCollection) == null ? void 0 : w.item(e - 1)) == null ? void 0 : C.value) ?? "";
  }
  t.key === "Backspace" && this.focus();
};
O = function() {
  var t;
  return c`
			${(t = this.value) == null ? void 0 : t.map((e) => c`
					<uui-tag class="tag">
						<span>${e}</span>
						<uui-icon name="icon-wrong" @click=${() => r(this, n, A).call(this, e)}></uui-icon>
					</uui-tag>
				`)}
		`;
};
B = function() {
  if (!this._currentInput.length || !this._matches.length) return S;
  const t = this._matches;
  if (t.length)
    return c`
			<div id="matchlist">
				${M(
      t.slice(0, 5),
      (e) => e.value,
      (e, i) => c`
							<input
								class="options"
								id="tag-${e.value}"
								type="radio"
								name=""
								@click=${() => r(this, n, P).call(this, i)}
								@keydown="${(s) => r(this, n, U).call(this, s, i)}"
								value=${e.value ?? ""} />
							<label for="tag-${e.value}">${e.name}</label>
						`
    )}
			</div>
		`;
};
L = function() {
  return c`
			<uui-tag look="outline" id="main-tag" @click=${this.focus} slot="trigger">
				<input
					id="tag-input"
					aria-label="tag input"
					placeholder="Enter tag"
					.value=${this._currentInput ?? void 0}
					@keydown=${r(this, n, T)}
					@input=${r(this, n, b)}
					@blur=${r(this, n, D)} />
				<uui-icon id="icon-add" name="icon-add"></uui-icon>
				${r(this, n, B).call(this)}
			</uui-tag>
		`;
};
o.styles = [...j.styles, W``];
u([
  q({ type: Array })
], o.prototype, "value", 2);
u([
  f()
], o.prototype, "_items", 2);
u([
  f()
], o.prototype, "_matches", 2);
u([
  f()
], o.prototype, "_currentInput", 2);
u([
  m("#main-tag")
], o.prototype, "_mainTag", 2);
u([
  m("#tag-input")
], o.prototype, "_tagInput", 2);
u([
  m("#input-width-tracker")
], o.prototype, "_widthTracker", 2);
u([
  x(".options")
], o.prototype, "_optionCollection", 2);
o = u([
  K("contentment-property-editor-ui-tags")
], o);
const X = o;
export {
  o as ContentmentPropertyEditorUITagsElement,
  X as default
};
//# sourceMappingURL=tags.element.js.map
