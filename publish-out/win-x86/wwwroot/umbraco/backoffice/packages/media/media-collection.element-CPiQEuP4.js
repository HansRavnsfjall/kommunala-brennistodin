import { s as q, H as b, o as P, p as M } from "./input-upload-field.element-DEgpG3Zz.js";
import { when as O, ref as U, html as d, state as m, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbCollectionDefaultElement as I } from "@umbraco-cms/backoffice/collection";
import { UmbRequestReloadChildrenOfEntityEvent as y } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as D } from "@umbraco-cms/backoffice/action";
var x = Object.defineProperty, N = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, c = (e, t, r, i) => {
  for (var s = i > 1 ? void 0 : i ? N(t, r) : t, _ = e.length - 1, p; _ >= 0; _--)
    (p = e[_]) && (s = (i ? p(t, r, s) : p(s)) || s);
  return i && s && x(t, r, s), s;
}, h = (e, t, r) => t.has(e) || v("Cannot " + r), u = (e, t, r) => (h(e, t, "read from private field"), t.get(e)), f = (e, t, r) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), $ = (e, t, r, i) => (h(e, t, "write to private field"), t.set(e, r), r), l = (e, t, r) => (h(e, t, "access private method"), r), o, n, E, C, g, T;
let a = class extends I {
  constructor() {
    super(), f(this, n), f(this, o), this._progress = -1, this._unique = null, this.consumeContext(q, (e) => {
      $(this, o, e);
    }), this.consumeContext(b, (e) => {
      this.observe(e?.unique, (t) => {
        this._unique = t ?? null;
      });
    });
  }
  renderToolbar() {
    return d`
			<umb-collection-toolbar slot="header">
				<umb-collection-filter-field></umb-collection-filter-field>
			</umb-collection-toolbar>
			${O(this._progress >= 0, () => d`<uui-loader-bar progress=${this._progress}></uui-loader-bar>`)}
			<umb-dropzone-media
				id="dropzone"
				${U(l(this, n, E))}
				multiple
				.parentUnique=${this._unique}
				@submitted=${l(this, n, C)}
				@complete=${l(this, n, g)}
				@progress=${l(this, n, T)}></umb-dropzone-media>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
E = function(e) {
  e && this.observe(
    e.progressItems(),
    (t) => {
      t.forEach((r) => {
        r.folder?.name || (u(this, o)?.updatePlaceholderStatus(r.unique, r.status), u(this, o)?.updatePlaceholderProgress(r.unique, r.progress));
      });
    },
    "_observeProgressItems"
  );
};
C = async function(e) {
  e.preventDefault();
  const t = e.items.filter((r) => r.parentUnique === this._unique).map((r) => ({ unique: r.unique, status: r.status, name: r.temporaryFile?.file.name ?? r.folder?.name }));
  u(this, o)?.setPlaceholders(t);
};
g = async function(e) {
  e.preventDefault(), this._progress = -1, u(this, o)?.requestCollection();
  const t = await this.getContext(D);
  if (!t)
    throw new Error("Could not get event context");
  const r = new y({
    entityType: this._unique ? P : M,
    unique: this._unique
  });
  t.dispatchEvent(r);
};
T = function(e) {
  e.preventDefault(), this._progress = e.loaded / e.total * 100, this._progress >= 100 && (this._progress = -1);
};
c([
  m()
], a.prototype, "_progress", 2);
c([
  m()
], a.prototype, "_unique", 2);
a = c([
  w("umb-media-collection")
], a);
const Y = a;
export {
  a as UmbMediaCollectionElement,
  Y as default,
  a as element
};
//# sourceMappingURL=media-collection.element-CPiQEuP4.js.map
