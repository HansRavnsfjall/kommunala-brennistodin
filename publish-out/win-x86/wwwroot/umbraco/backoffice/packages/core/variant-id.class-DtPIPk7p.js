import { U as i } from "./deprecation-SeDYTswO.js";
import "./expansion-entry-expanded.event-Ct82JR9u.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/external/uui";
import "@umbraco-cms/backoffice/event";
import "@umbraco-cms/backoffice/external/dompurify";
function w(l) {
  return new i({
    deprecated: "Method `variantPropertiesObjectToString` is deprecated",
    removeInVersion: "17",
    solution: "Use UmbVariantId to make this conversion"
  }).warn(), (l.culture || s) + (l.segment ? `_${l.segment}` : "");
}
const s = "invariant";
class t {
  constructor(e, n) {
    this.culture = null, this.segment = null, this.culture = (e === s ? null : e) ?? null, this.segment = n ?? null;
  }
  static Create(e) {
    return Object.freeze(new t(e.culture, e.segment));
  }
  static CreateFromPartial(e) {
    return Object.freeze(new t(e.culture, e.segment));
  }
  static CreateInvariant() {
    return Object.freeze(new t(null, null));
  }
  static FromString(e) {
    const n = e.indexOf("_");
    let r = n === -1 ? e : e.substring(0, n);
    r = r === s ? null : r;
    const u = n === -1 ? null : e.substring(n + 1) || null;
    return Object.freeze(new t(r, u));
  }
  compare(e) {
    return this.equal(new t(e.culture, e.segment));
  }
  equal(e) {
    return this.culture === e.culture && this.segment === e.segment;
  }
  toString() {
    return (this.culture || s) + (this.segment ? `_${this.segment}` : "");
  }
  toCultureString() {
    return this.culture || s;
  }
  toSegmentString() {
    return this.segment || "";
  }
  isCultureInvariant() {
    return this.culture === null;
  }
  isSegmentInvariant() {
    return this.segment === null;
  }
  isInvariant() {
    return this.culture === null && this.segment === null;
  }
  clone() {
    return new t(null, this.segment);
  }
  toObject() {
    return { culture: this.culture, segment: this.segment };
  }
  toSegmentInvariant() {
    return Object.freeze(new t(this.culture, null));
  }
  toCultureInvariant() {
    return Object.freeze(new t(null, this.segment));
  }
  toCulture(e) {
    return Object.freeze(new t(e, this.segment));
  }
  toSegment(e) {
    return Object.freeze(new t(this.culture, e));
  }
  toVariant(e, n) {
    return Object.freeze(new t(e ? this.culture : null, n ? this.segment : null));
  }
  // TODO: needs localization option:
  // TODO: Consider if this should be handled else where, it does not seem like the responsibility of this class, since it contains wordings:
  toDifferencesString(e, n = "Invariant", r = "Unsegmented") {
    let u = "";
    return e.culture !== this.culture && (u = n), e.segment !== this.segment && (u = (u !== "" ? " " : "") + r), u;
  }
}
export {
  t as U,
  s as a,
  w as v
};
//# sourceMappingURL=variant-id.class-DtPIPk7p.js.map
