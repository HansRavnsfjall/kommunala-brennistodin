import { html as f, css as T, property as o, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as I } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as S } from "@umbraco-cms/backoffice/event";
import { UmbFormControlMixin as P } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
var k = Object.defineProperty, W = Object.getOwnPropertyDescriptor, w = (e) => {
  throw TypeError(e);
}, a = (e, t, i, u) => {
  for (var h = u > 1 ? void 0 : u ? W(t, i) : t, v = e.length - 1, $; v >= 0; v--)
    ($ = e[v]) && (h = (u ? $(t, i, h) : $(h)) || h);
  return u && h && k(t, i, h), h;
}, M = (e, t, i) => t.has(e) || w("Cannot " + i), s = (e, t, i) => (M(e, t, "read from private field"), i ? i.call(e) : t.get(e)), c = (e, t, i) => t.has(e) ? w("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), y = (e, t, i, u) => (M(e, t, "write to private field"), t.set(e, i), i), d = (e, t, i) => (M(e, t, "access private method"), i), m, l, g, r, p, _, b, x, C;
let n = class extends P(
  U
) {
  constructor() {
    super(...arguments), c(this, p), c(this, m, "content"), this.min = 0, this.minMessage = "This field need more items", this.max = 0, this.maxMessage = "This field exceeds the allowed amount of items", c(this, l, []), this.readonly = !1, c(this, g, { content: "document", media: "media", member: "member" }), c(this, r, []);
  }
  set type(e) {
    const t = s(this, m);
    e?.toLowerCase() !== s(this, m) && (y(this, m, e?.toLowerCase()), this.requestUpdate("type", t));
  }
  get type() {
    return s(this, m);
  }
  set allowedContentTypeIds(e) {
    y(this, l, e ? e.split(",") : []);
  }
  get allowedContentTypeIds() {
    return s(this, l).join(",");
  }
  set selection(e) {
    y(this, r, e?.map((t) => t.unique) ?? []);
  }
  get selection() {
    return s(this, r).map((e) => ({ type: s(this, g)[s(this, m)], unique: e }));
  }
  set value(e) {
    y(this, r, I(e));
  }
  get value() {
    return s(this, r).length > 0 ? s(this, r).join(",") : void 0;
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector(`umb-input-${s(this, g)[s(this, m)]}`));
  }
  render() {
    switch (s(this, m)) {
      case "content":
        return d(this, p, b).call(this);
      case "media":
        return d(this, p, x).call(this);
      case "member":
        return d(this, p, C).call(this);
      default:
        return f`<p>Type could not be found.</p>`;
    }
  }
};
m = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  y(this, r, e.target.selection ?? []), this.value = s(this, r).join(","), this.dispatchEvent(new S());
};
b = function() {
  return f`
			<umb-input-document
				.selection=${s(this, r)}
				.startNode=${this.startNode}
				.allowedContentTypeIds=${s(this, l)}
				.min=${this.min}
				.minMessage=${this.minMessage}
				.max=${this.max}
				.maxMessage=${this.maxMessage}
				?readonly=${this.readonly}
				@change=${d(this, p, _)}></umb-input-document>
		`;
};
x = function() {
  return f`
			<umb-input-media
				.selection=${s(this, r)}
				.allowedContentTypeIds=${s(this, l)}
				.min=${this.min}
				.minMessage=${this.minMessage}
				.max=${this.max}
				.maxMessage=${this.maxMessage}
				?readonly=${this.readonly}
				@change=${d(this, p, _)}></umb-input-media>
		`;
};
C = function() {
  return f`
			<umb-input-member
				.selection=${s(this, r)}
				.allowedContentTypeIds=${s(this, l)}
				.min=${this.min}
				.minMessage=${this.minMessage}
				.max=${this.max}
				.maxMessage=${this.maxMessage}
				?readonly=${this.readonly}
				@change=${d(this, p, _)}></umb-input-member>
		`;
};
n.styles = [
  T`
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
n = a([
  E("umb-input-content")
], n);
//# sourceMappingURL=input-content.element-ChvwYNyr.js.map
