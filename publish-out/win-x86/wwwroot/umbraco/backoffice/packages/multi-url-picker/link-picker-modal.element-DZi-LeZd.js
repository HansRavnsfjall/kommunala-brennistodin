import { html as u, nothing as f, when as J, css as Q, state as $, query as I, customElement as Y } from "@umbraco-cms/backoffice/external/lit";
import { UmbMediaTypeStructureRepository as Z, isUmbracoFolder as j } from "@umbraco-cms/backoffice/media-type";
import { UmbValidationContext as tt, UmbObserveValidationStateController as et, UMB_VALIDATION_CONTEXT as it, umbBindToValidation as at } from "@umbraco-cms/backoffice/validation";
import { UmbModalBaseElement as nt, umbConfirmModal as lt } from "@umbraco-cms/backoffice/modal";
import { UmbDocumentUrlRepository as rt, UmbDocumentUrlsDataResolver as st, UmbDocumentItemRepository as ot, UmbDocumentItemDataResolver as ut } from "@umbraco-cms/backoffice/document";
import { UmbMediaUrlRepository as ct, UmbMediaItemRepository as ht } from "@umbraco-cms/backoffice/media";
import { UmbControllerBase as dt } from "@umbraco-cms/backoffice/class-api";
import { umbFocus as mt } from "@umbraco-cms/backoffice/lit-element";
var pt = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, z = (e) => {
  throw TypeError(e);
}, m = (e, t, n, l) => {
  for (var r = l > 1 ? void 0 : l ? kt(t, n) : t, s = e.length - 1, k; s >= 0; s--)
    (k = e[s]) && (r = (l ? k(t, n, r) : k(r)) || r);
  return l && r && pt(t, n, r), r;
}, U = (e, t, n) => t.has(e) || z("Cannot " + n), p = (e, t, n) => (U(e, t, "read from private field"), n ? n.call(e) : t.get(e)), g = (e, t, n) => t.has(e) ? z("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ft = (e, t, n, l) => (U(e, t, "write to private field"), t.set(e, n), n), a = (e, t, n) => (U(e, t, "access private method"), n), h, v, i, M, o, x, C, T, R, w, L, q, D, P, E, V, S, N, O, A, W, B, F, G, H, K, X;
class vt extends dt {
  #t;
  #e = !0;
  get isValid() {
    return this.#e;
  }
  #i;
  #a = "UmbLinkPickerValueValidator";
  setValue(t) {
    this.#i = t, this.validate();
  }
  getValue() {
    return this.#i;
  }
  // The path to the data that this validator is validating.
  #n;
  constructor(t, n) {
    super(t), this.#n = n, this.consumeContext(it, (l) => {
      this.#t && this.#t.removeValidator(this), this.#t = l, l?.addValidator(this);
    });
  }
  async validate() {
    this.#e = !!this.getValue(), this.#e ? this.#t?.messages.removeMessageByKey(this.#a) : this.#t?.messages.addMessage(
      "client",
      this.#n,
      "#linkPicker_modalAnchorValidationMessage",
      this.#a
    );
  }
  reset() {
  }
  focusFirstInvalidElement() {
  }
}
let c = class extends nt {
  constructor() {
    super(), g(this, i), g(this, h, "vertical"), g(this, v, new tt(this)), this._config = {
      hideAnchor: !1,
      hideTarget: !1
    }, this._missingLinkUrl = !1, new et(this, "$.type", (e) => {
      this._missingLinkUrl = e;
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.data?.config && (this._config = this.data.config), this.modalContext && this.observe(this.modalContext.size, (t) => {
      (t === "large" || t === "full") && ft(this, h, "horizontal");
    }), a(this, i, M).call(this), this.populateLinkUrl();
    const e = new vt(this, "$.type");
    this.observe(this.modalContext?.value, (t) => {
      e.setValue(t?.link.type);
    });
  }
  async populateLinkUrl() {
    if (!this.value.link?.unique) return;
    let e;
    switch (this.value.link.type) {
      case "document": {
        e = await a(this, i, L).call(this, this.value.link.unique);
        break;
      }
      case "media": {
        e = await a(this, i, q).call(this, this.value.link.unique);
        break;
      }
    }
    e && a(this, i, o).call(this, { url: e });
  }
  render() {
    return u`
			<umb-body-layout
				headline=${this.localize.term(
      this.modalContext?.data?.isNew ? "defaultdialogs_addLink" : "defaultdialogs_updateLink"
    )}>
				<uui-box>
					${a(this, i, O).call(this)} ${a(this, i, H).call(this)} ${a(this, i, K).call(this)}
					${a(this, i, X).call(this)}
				</uui-box>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						color="positive"
						look="primary"
						label=${this.localize.term(this.modalContext?.data?.isNew ? "general_add" : "general_update")}
						@click=${a(this, i, E)}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
M = async function() {
  const e = new Z(this), { data: t } = await e.requestAllowedChildrenOf(null, null);
  this._allowedMediaTypeUniques = t?.items.map((n) => n.unique).filter((n) => n && !j(n)) ?? [];
};
o = function(e) {
  this.modalContext?.updateValue({ link: { ...this.value.link, ...e } });
};
x = function(e) {
  const t = e.target.value ?? "";
  if (t.startsWith("#") || t.startsWith("?")) {
    a(this, i, o).call(this, { queryString: t });
    return;
  }
  t.includes("=") ? a(this, i, o).call(this, { queryString: `?${t}` }) : t ? a(this, i, o).call(this, { queryString: `#${t}` }) : a(this, i, o).call(this, { queryString: "" });
};
C = function(e) {
  a(this, i, o).call(this, { name: e.target.value });
};
T = function(e) {
  a(this, i, o).call(this, { target: e.target.checked ? "_blank" : void 0 });
};
R = function(e) {
  const t = e.target.value;
  let n;
  t && !this.value.link.name && (URL.canParse(t) ? n = URL.parse(t)?.hostname ?? t : n = t), a(this, i, o).call(this, {
    name: this.value.link.name || n,
    type: "external",
    url: t
  });
};
w = async function(e, t) {
  let n, l, r;
  const s = e.target.value;
  if (s)
    switch (t) {
      case "document": {
        const _ = new ot(this), { data: y } = await _.requestItems([s]), d = y?.[0];
        if (d) {
          const b = new ut(this);
          b.setData(d), n = await b.getIcon(), l = await b.getName(), r = await a(this, i, L).call(this, s);
        }
        break;
      }
      case "media": {
        const _ = new ht(this), { data: y } = await _.requestItems([s]), d = y?.[0];
        d && (n = d.mediaType.icon, l = d.variants[0].name, r = await a(this, i, q).call(this, s));
        break;
      }
    }
  else
    a(this, i, P).call(this);
  const k = {
    icon: n,
    name: l || this.value.link.name,
    type: s ? t : void 0,
    unique: s,
    url: r ?? this.value.link.url
  };
  a(this, i, o).call(this, k), await p(this, v).validate();
};
L = async function(e) {
  const t = new rt(this), { data: n } = await t.requestItems([e]), l = n?.[0], r = new st(this);
  return r.setData(l?.urls), (await r.getUrls())?.[0]?.url ?? "";
};
q = async function(e) {
  const t = new ct(this), { data: n } = await t.requestItems([e]);
  return n?.[0].url ?? "";
};
D = async function() {
  this.value.link.url && await lt(this, {
    color: "danger",
    headline: this.localize.term("linkPicker_resetUrlHeadline"),
    content: this.localize.term("linkPicker_resetUrlMessage"),
    confirmLabel: this.localize.term("linkPicker_resetUrlLabel")
  }), a(this, i, P).call(this);
};
P = function() {
  a(this, i, o).call(this, { type: null, url: null });
};
E = async function() {
  await p(this, v).validate(), this.modalContext?.submit();
};
V = function() {
  this._documentPickerElement?.shadowRoot?.querySelector("#btn-add")?.dispatchEvent(new Event("click"));
};
S = function() {
  this._mediaPickerElement?.shadowRoot?.querySelector("#btn-add")?.dispatchEvent(new Event("click"));
};
N = function() {
  a(this, i, o).call(this, { type: "external" });
};
O = function() {
  return u`
			<umb-property-layout
				orientation=${p(this, h)}
				label=${this.localize.term("linkPicker_modalSource")}
				mandatory
				?invalid=${this._missingLinkUrl}>
				<div slot="editor">
					${a(this, i, A).call(this)} ${a(this, i, W).call(this)} ${a(this, i, B).call(this)}
					${a(this, i, F).call(this)} ${a(this, i, G).call(this)}
				</div>
			</umb-property-layout>
		`;
};
A = function() {
  return this.value.link.type ? f : u`
			<uui-button-group>
				<uui-button
					data-mark="action:document"
					look="placeholder"
					label=${this.localize.term("general_content")}
					@click=${a(this, i, V)}></uui-button>
				<uui-button
					data-mark="action:media"
					look="placeholder"
					label=${this.localize.term("general_media")}
					@click=${a(this, i, S)}></uui-button>
				<uui-button
					data-mark="action:external"
					look="placeholder"
					label=${this.localize.term("linkPicker_modalManual")}
					@click=${a(this, i, N)}></uui-button>
			</uui-button-group>
		`;
};
W = function() {
  return u`
			<umb-input-document
				?hidden=${!this.value.link.unique || this.value.link.type !== "document"}
				.max=${1}
				.value=${this.value.link.unique && this.value.link.type === "document" ? this.value.link.unique : ""}
				@change=${(e) => a(this, i, w).call(this, e, "document")}>
			</umb-input-document>
		`;
};
B = function() {
  return u`
			<umb-input-media
				?hidden=${!this.value.link.unique || this.value.link.type !== "media"}
				.allowedContentTypeIds=${this._allowedMediaTypeUniques}
				.max=${1}
				.value=${this.value.link.unique && this.value.link.type === "media" ? this.value.link.unique : ""}
				@change=${(e) => a(this, i, w).call(this, e, "media")}></umb-input-media>
		`;
};
F = function() {
  return this.value.link.type !== "external" ? f : u`
			<uui-input
				data-mark="input:url"
				label=${this.localize.term("placeholders_enterUrl")}
				placeholder=${this.localize.term("placeholders_enterUrl")}
				.value=${this.value.link.url ?? ""}
				?disabled=${!!this.value.link.unique}
				required
				@input=${a(this, i, R)}
				${at(this)}
				${mt()}>
				${J(
    !this.value.link.unique,
    () => u`
						<div slot="append">
							<uui-button
								slot="append"
								compact
								label=${this.localize.term("general_remove")}
								@click=${a(this, i, D)}>
								<uui-icon name="remove"></uui-icon>
							</uui-button>
						</div>
					`
  )}
			</uui-input>
		`;
};
G = function() {
  return !this.value.link.unique || !this.value.link.url ? f : u`<uui-input readonly value=${this.value.link.url}></uui-input>`;
};
H = function() {
  return this._config.hideAnchor ? f : u`
			<umb-property-layout
				orientation=${p(this, h)}
				label=${this.localize.term("defaultdialogs_anchorLinkPicker")}>
				<uui-input
					data-mark="input:anchor"
					slot="editor"
					label=${this.localize.term("placeholders_anchor")}
					placeholder=${this.localize.term("placeholders_anchor")}
					.value=${this.value.link.queryString ?? ""}
					@change=${a(this, i, x)}></uui-input>
			</umb-property-layout>
		`;
};
K = function() {
  return u`
			<umb-property-layout
				orientation=${p(this, h)}
				label=${this.localize.term("defaultdialogs_nodeNameLinkPicker")}>
				<uui-input
					data-mark="input:title"
					slot="editor"
					label=${this.localize.term("defaultdialogs_nodeNameLinkPicker")}
					placeholder=${this.localize.term("defaultdialogs_nodeNameLinkPicker")}
					.value=${this.value.link.name ?? ""}
					@change=${a(this, i, C)}>
				</uui-input>
			</umb-property-layout>
		`;
};
X = function() {
  return this._config.hideTarget ? f : u`
			<umb-property-layout orientation=${p(this, h)} label=${this.localize.term("content_target")}>
				<uui-toggle
					slot="editor"
					label=${this.localize.term("defaultdialogs_openInNewWindow")}
					.checked=${this.value.link.target === "_blank"}
					@change=${a(this, i, T)}>
					${this.localize.term("defaultdialogs_openInNewWindow")}
				</uui-toggle>
			</umb-property-layout>
		`;
};
c.styles = [
  Q`
			uui-box {
				--uui-box-default-padding: 0 var(--uui-size-space-5);
			}

			uui-button-group {
				width: 100%;
			}

			uui-input {
				width: 100%;

				&[readonly] {
					margin-top: var(--uui-size-space-2);
				}
			}
		`
];
m([
  $()
], c.prototype, "_allowedMediaTypeUniques", 2);
m([
  $()
], c.prototype, "_config", 2);
m([
  $()
], c.prototype, "_missingLinkUrl", 2);
m([
  I("umb-input-document")
], c.prototype, "_documentPickerElement", 2);
m([
  I("umb-input-media")
], c.prototype, "_mediaPickerElement", 2);
c = m([
  Y("umb-link-picker-modal")
], c);
const qt = c;
export {
  c as UmbLinkPickerModalElement,
  qt as default,
  c as element
};
//# sourceMappingURL=link-picker-modal.element-DZi-LeZd.js.map
