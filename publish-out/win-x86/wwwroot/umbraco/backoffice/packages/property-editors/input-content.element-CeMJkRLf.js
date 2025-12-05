import { html as M, css as I, property as o, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as P } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as k } from "@umbraco-cms/backoffice/event";
import { UmbFormControlMixin as S } from "@umbraco-cms/backoffice/validation";
import { UmbInteractionMemoriesChangeEvent as W } from "@umbraco-cms/backoffice/interaction-memory";
import { UmbLitElement as N } from "@umbraco-cms/backoffice/lit-element";
var O = Object.defineProperty, q = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, a = (e, t, s, g) => {
  for (var c = g > 1 ? void 0 : g ? q(t, s) : t, $ = e.length - 1, v; $ >= 0; $--)
    (v = e[$]) && (c = (g ? v(t, s, c) : v(c)) || c);
  return g && c && O(t, s, c), c;
}, w = (e, t, s) => t.has(e) || x("Cannot " + s), i = (e, t, s) => (w(e, t, "read from private field"), s ? s.call(e) : t.get(e)), y = (e, t, s) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), l = (e, t, s, g) => (w(e, t, "write to private field"), t.set(e, s), s), h = (e, t, s) => (w(e, t, "access private method"), s), p, u, d, f, r, m, _, b, C, T, E;
let n = class extends S(
  N
) {
  constructor() {
    super(...arguments), y(this, m), y(this, p, "content"), this.min = 0, this.minMessage = "This field need more items", this.max = 0, this.maxMessage = "This field exceeds the allowed amount of items", y(this, u, []), this.readonly = !1, y(this, d), y(this, f, { content: "document", media: "media", member: "member" }), y(this, r, []);
  }
  set type(e) {
    const t = i(this, p);
    e?.toLowerCase() !== i(this, p) && (l(this, p, e?.toLowerCase()), this.requestUpdate("type", t));
  }
  get type() {
    return i(this, p);
  }
  set allowedContentTypeIds(e) {
    l(this, u, e ? e.split(",") : []);
  }
  get allowedContentTypeIds() {
    return i(this, u).join(",");
  }
  set selection(e) {
    l(this, r, e?.map((t) => t.unique) ?? []);
  }
  get selection() {
    return i(this, r).map((e) => ({ type: i(this, f)[i(this, p)], unique: e }));
  }
  set value(e) {
    l(this, r, P(e)), super.value = e;
  }
  get value() {
    return i(this, r).length > 0 ? i(this, r).join(",") : void 0;
  }
  get interactionMemories() {
    return i(this, d);
  }
  set interactionMemories(e) {
    l(this, d, e);
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector(`umb-input-${i(this, f)[i(this, p)]}`));
  }
  render() {
    switch (i(this, p)) {
      case "content":
        return h(this, m, C).call(this);
      case "media":
        return h(this, m, T).call(this);
      case "member":
        return h(this, m, E).call(this);
      default:
        return M`<p>Type could not be found.</p>`;
    }
  }
};
p = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  l(this, r, e.target.selection ?? []), this.value = i(this, r).join(","), this.dispatchEvent(new k());
};
b = function(e) {
  e.stopPropagation();
  const s = e.target.interactionMemories;
  l(this, d, s), this.dispatchEvent(new W());
};
C = function() {
  return M`
			<umb-input-document
				.selection=${i(this, r)}
				.startNode=${this.startNode}
				.allowedContentTypeIds=${i(this, u)}
				.min=${this.min}
				.minMessage=${this.minMessage}
				.max=${this.max}
				.maxMessage=${this.maxMessage}
				?readonly=${this.readonly}
				@change=${h(this, m, _)}
				.interactionMemories=${i(this, d)}
				@interaction-memories-change=${h(this, m, b)}></umb-input-document>
		`;
};
T = function() {
  return M`
			<umb-input-media
				.selection=${i(this, r)}
				.allowedContentTypeIds=${i(this, u)}
				.min=${this.min}
				.minMessage=${this.minMessage}
				.max=${this.max}
				.maxMessage=${this.maxMessage}
				?readonly=${this.readonly}
				@change=${h(this, m, _)}
				.interactionMemories=${i(this, d)}
				@interaction-memories-change=${h(this, m, b)}></umb-input-media>
		`;
};
E = function() {
  return M`
			<umb-input-member
				.selection=${i(this, r)}
				.allowedContentTypeIds=${i(this, u)}
				.min=${this.min}
				.minMessage=${this.minMessage}
				.max=${this.max}
				.maxMessage=${this.maxMessage}
				?readonly=${this.readonly}
				@change=${h(this, m, _)}></umb-input-member>
		`;
};
n.styles = [
  I`
			p {
				margin: 0;
				color: var(--uui-color-border-emphasis);
			}
		`
];
a([
  o()
], n.prototype, "type", 1);
a([
  o({ type: Number })
], n.prototype, "min", 2);
a([
  o({ type: String, attribute: "min-message" })
], n.prototype, "minMessage", 2);
a([
  o({ type: Number })
], n.prototype, "max", 2);
a([
  o({ type: String, attribute: "max-message" })
], n.prototype, "maxMessage", 2);
a([
  o({ type: Object, attribute: !1 })
], n.prototype, "startNode", 2);
a([
  o()
], n.prototype, "allowedContentTypeIds", 1);
a([
  o({ type: Array })
], n.prototype, "selection", 1);
a([
  o({ type: String })
], n.prototype, "value", 1);
a([
  o({ type: Boolean, reflect: !0 })
], n.prototype, "readonly", 2);
a([
  o({ type: Array, attribute: !1 })
], n.prototype, "interactionMemories", 1);
n = a([
  U("umb-input-content")
], n);
export {
  n as U
};
//# sourceMappingURL=input-content.element-CeMJkRLf.js.map
