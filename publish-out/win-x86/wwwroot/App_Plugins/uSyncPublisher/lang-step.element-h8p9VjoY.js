import { ProcessStepElementBase as S, JUMOO_PROCESSING_CONTEXT as P } from "@jumoo/processing";
import { d as x, S as C } from "./index-DFDZ_Jke.js";
import { nothing as f, html as d, css as w, state as l, customElement as E } from "@umbraco-cms/backoffice/external/lit";
var $ = Object.defineProperty, O = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, r = (e, t, s, n) => {
  for (var a = n > 1 ? void 0 : n ? O(t, s) : t, c = e.length - 1, h; c >= 0; c--)
    (h = e[c]) && (a = (n ? h(t, s, a) : h(a)) || a);
  return n && a && $(t, s, a), a;
}, _ = (e, t, s) => t.has(e) || b("Cannot " + s), p = (e, t, s) => (_(e, t, "read from private field"), s ? s.call(e) : t.get(e)), v = (e, t, s) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), m = (e, t, s, n) => (_(e, t, "write to private field"), t.set(e, s), s), k = (e, t, s) => (_(e, t, "access private method"), s), u, o, g, y;
let i = class extends S {
  constructor() {
    super(), v(this, g), v(this, u), this.cultures = [], this.includeUnpublished = !1, this.allSelected = !1, this.nonSelected = !1, v(this, o, !1), this.consumeContext(P, (e) => {
      e && (m(this, u, e), this.observe(p(this, u).options, async (t) => {
        const s = t;
        this.primaryItem = s.items[0].udi, await this.initializeVariants();
      }));
    });
  }
  async initializeVariants() {
    p(this, o) || (await this._loadVariants(), m(this, o, !0), this._setCultures(), this._calculateCultures());
  }
  async _loadVariants() {
    this.variants = (await x.getVariants({ query: { udiValue: this.primaryItem } })).data;
  }
  _setCultures() {
    this.variants && this.variants.forEach((e) => {
      e.selected = e.isPublished;
    });
  }
  _calculateCultures() {
    var e;
    this.cultures = [], this.variants && (this.variants.forEach((t) => {
      t.selected && (this.cultures.push(t.name), t.isPublished == !1 && (this.includeUnpublished = !0));
    }), this.allSelected = this.cultures.length == this.variants.length, this.nonSelected = this.cultures.length == 0, this.allSelected && (this.cultures = []), (e = p(this, u)) == null || e.setPending({ cultures: this.cultures }));
  }
  render() {
    if (!this.variants) return f;
    const e = this.variants.map((t) => d` <div
				class="lang-item ${t.isPublished ? "published" : "unpublished"}">
				<uui-checkbox
					id="lang_item_${t.name}"
					.checked=${t.selected}
					@change=${() => k(this, g, y).call(this, t)}></uui-checkbox>
				<div>
					<label for="lang_item_${t.name}">${t.displayName}</label>
					<div>${t.isPublished ? "published" : "unpublished"}</div>
				</div>
			</div>`);
    return d`<uui-box>
				<div slot="header" class="header">
					<h3>Languages</h3>
					<div>Select what languages to syncronise</div>
				</div>

				${e}</uui-box
			>
			${this.renderPartialWarning()}`;
  }
  renderPartialWarning() {
    return this.allSelected ? f : d`<uui-box class="info">
			<umb-localize key="usyncpublish_partialLangWarning"></umb-localize>
		</uui-box>`;
  }
};
u = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakSet();
y = function(e) {
  e.selected = !e.selected, this._calculateCultures();
};
i.styles = w`
		.lang-item {
			display: flex;
			padding: 10px;
		}

		.unpublished {
			opacity: 0.5;
		}

		uui-box {
			margin-bottom: 10px;
		}

		uui-box .header h3 {
			margin: 0;
			padding: 0;
		}

		.info {
			background-color: var(--uui-color-positive);
			color: var(--uui-color-positive-contrast);
		}

		.warn {
			background-color: var(--uui-color-warning);
		}

		.error {
			background-color: var(--uui-color-danger);
		}
	`;
r([
  l()
], i.prototype, "cultures", 2);
r([
  l()
], i.prototype, "includeUnpublished", 2);
r([
  l()
], i.prototype, "allSelected", 2);
r([
  l()
], i.prototype, "nonSelected", 2);
r([
  l()
], i.prototype, "primaryItem", 2);
r([
  l()
], i.prototype, "variants", 2);
i = r([
  E(C.elements.language)
], i);
const z = i;
export {
  i as SyncPublishPushLangStepElement,
  z as default
};
//# sourceMappingURL=lang-step.element-h8p9VjoY.js.map
