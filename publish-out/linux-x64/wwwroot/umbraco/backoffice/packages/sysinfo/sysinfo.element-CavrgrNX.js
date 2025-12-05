import { U as C } from "./sysinfo.repository-50SHjqQ7.js";
import { when as T, html as d, css as I, state as y, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as k } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as $ } from "@umbraco-cms/backoffice/modal";
import { UMB_NOTIFICATION_CONTEXT as M } from "@umbraco-cms/backoffice/notification";
import { UmbCurrentUserRepository as E } from "@umbraco-cms/backoffice/current-user";
import { UmbTemporaryFileConfigRepository as F } from "@umbraco-cms/backoffice/temporary-file";
var A = Object.defineProperty, B = Object.getOwnPropertyDescriptor, _ = (s) => {
  throw TypeError(s);
}, m = (s, a, i, n) => {
  for (var o = n > 1 ? void 0 : n ? B(a, i) : a, p = s.length - 1, c; p >= 0; p--)
    (c = s[p]) && (o = (n ? c(a, i, o) : c(o)) || o);
  return n && o && A(a, i, o), o;
}, v = (s, a, i) => a.has(s) || _("Cannot " + i), e = (s, a, i) => (v(s, a, "read from private field"), i ? i.call(s) : a.get(s)), l = (s, a, i) => a.has(s) ? _("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(s) : a.set(s, i), f = (s, a, i) => (v(s, a, "access private method"), i), t, h, g, b, u, w, U, S;
let r = class extends $ {
  constructor() {
    super(...arguments), l(this, u), this._systemInformation = "", this._loading = !1, l(this, t, []), l(this, h, new C(this)), l(this, g, new E(this)), l(this, b, new F(this));
  }
  connectedCallback() {
    super.connectedCallback(), f(this, u, w).call(this);
  }
  render() {
    return d`
			<uui-dialog>
				<uui-dialog-layout headline="System information">
					${T(
      this._loading,
      () => d`<uui-loader-bar></uui-loader-bar>`,
      () => d` <umb-code-block id="codeblock">${this._systemInformation}</umb-code-block> `
    )}

					<uui-button
						@click=${this._submitModal}
						slot="actions"
						look="secondary"
						label=${this.localize.term("general_close")}></uui-button>

					<uui-button
						@click=${f(this, u, S)}
						.state=${this._buttonState}
						slot="actions"
						look="primary"
						color="positive"
						label=${this.localize.term("clipboard_labelForCopyToClipboard")}></uui-button>
				</uui-dialog-layout>
			</uui-dialog>
		`;
  }
};
t = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
w = async function() {
  this._loading = !0, e(this, t).length = 0;
  const [s, a, i, { data: n }, o] = await Promise.all([
    e(this, h).requestTroubleShooting(),
    e(this, h).requestServerInformation(),
    e(this, h).requestClientInformation(),
    e(this, g).requestCurrentUser(),
    e(this, b).requestTemporaryFileConfiguration()
  ]);
  e(this, t).push({ name: "Server Troubleshooting" }), s && e(this, t).push(...s.items), e(this, t).push({}), e(this, t).push({ name: "Server Information" }), a && (e(this, t).push({ name: "Umbraco build version", data: a.version }), e(this, t).push({ name: "Umbraco assembly version", data: a.assemblyVersion }), e(this, t).push({ name: "Server time offset", data: a.baseUtcOffset }), e(this, t).push({ name: "Runtime mode", data: a.runtimeMode })), e(this, t).push({}), e(this, t).push({ name: "Client Information" }), i && e(this, t).push({ name: "Umbraco client version", data: i.version }), e(this, t).push({}), e(this, t).push({ name: "Current user" }), n && (e(this, t).push({ name: "User is admin", data: n.isAdmin ? "Yes" : "No" }), e(this, t).push({ name: "User sections", data: n.allowedSections.join(", ") }), e(this, t).push({ name: "User culture", data: n.languageIsoCode }), e(this, t).push({
    name: "User languages",
    data: n.hasAccessToAllLanguages ? "All" : n.languages.join(", ")
  }), e(this, t).push({
    name: "User document start nodes",
    data: n.documentStartNodeUniques.join(", ")
  })), e(this, t).push({}), e(this, t).push({ name: "Temporary file configuration" }), o && (e(this, t).push({
    name: "Max allowed file size",
    data: o.maxFileSize?.toString() ?? "Not set (unlimited)"
  }), e(this, t).push({
    name: "Allowed file types",
    data: o.allowedUploadedFileExtensions.join(", ")
  }), e(this, t).push({
    name: "Disallowed file types",
    data: o.disallowedUploadedFilesExtensions?.join(", ")
  }), e(this, t).push({
    name: "Image file types",
    data: o.imageFileTypes?.join(", ")
  })), e(this, t).push({}), e(this, t).push({ name: "Browser Troubleshooting" }), e(this, t).push({ name: "Browser (user agent)", data: navigator.userAgent }), e(this, t).push({ name: "Browser language", data: navigator.language }), e(this, t).push({ name: "Browser location", data: location.href }), this._systemInformation = f(this, u, U).call(this), this._loading = !1;
};
U = function() {
  return e(this, t).map((s) => s.name ? `${s.name}: ${s.data ?? ""}` : "").join(`
`);
};
S = async function() {
  const s = await this.getContext(M);
  try {
    this._buttonState = "waiting";
    const i = `\`\`\`
${`Umbraco system information
--------------------------------
${this._systemInformation}`}
\`\`\`
`;
    await navigator.clipboard.writeText(i), setTimeout(() => {
      s?.peek("positive", {
        data: {
          headline: "System information",
          message: this.localize.term("speechBubbles_copySuccessMessage")
        }
      }), this._buttonState = "success";
    }, 250);
  } catch {
    this._buttonState = "failed", s?.peek("danger", {
      data: {
        headline: "System information",
        message: this.localize.term("speechBubbles_cannotCopyInformation")
      }
    });
  }
};
r.styles = [
  k,
  I`
			#codeblock {
				max-height: 300px;
				overflow: auto;
			}
		`
];
m([
  y()
], r.prototype, "_systemInformation", 2);
m([
  y()
], r.prototype, "_loading", 2);
m([
  y()
], r.prototype, "_buttonState", 2);
r = m([
  x("umb-sysinfo")
], r);
const P = r;
export {
  r as UmbSysinfoElement,
  P as default
};
//# sourceMappingURL=sysinfo.element-CavrgrNX.js.map
