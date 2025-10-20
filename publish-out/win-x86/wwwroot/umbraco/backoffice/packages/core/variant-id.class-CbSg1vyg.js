import { U as i } from "./deprecation-SeDYTswO.js";
import "./index-ZFYMtjhW.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/external/uui";
import "@umbraco-cms/backoffice/event";
import "@umbraco-cms/backoffice/external/dompurify";
function w(s) {
  return new i({
    deprecated: "Method `variantPropertiesObjectToString` is deprecated",
    removeInVersion: "17",
    solution: "Use UmbVariantId to make this conversion"
  }).warn(), (s.culture || u) + (s.segment ? `_${s.segment}` : "");
}
const u = "invariant";
class t {
  constructor(e, r) {
    this.culture = null, this.segment = null, this.culture = (e === u ? null : e) ?? null, this.segment = r ?? null;
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
    const r = e.split("_"), l = r[0] === u ? null : r[0], n = r[1] ?? null;
    return Object.freeze(new t(l, n));
  }
  compare(e) {
    return this.equal(new t(e.culture, e.segment));
  }
  equal(e) {
    return this.culture === e.culture && this.segment === e.segment;
  }
  toString() {
    return (this.culture || u) + (this.segment ? `_${this.segment}` : "");
  }
  toCultureString() {
    return this.culture || u;
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
  toVariant(e, r) {
    return Object.freeze(new t(e ? this.culture : null, r ? this.segment : null));
  }
  // TODO: needs localization option:
  // TODO: Consider if this should be handled else where, it does not seem like the responsibility of this class, since it contains wordings:
  toDifferencesString(e, r = "Invariant", l = "Unsegmented") {
    let n = "";
    return e.culture !== this.culture && (n = r), e.segment !== this.segment && (n = (n !== "" ? " " : "") + l), n;
  }
}
export {
  t as U,
  u as a,
  w as v
};
//# sourceMappingURL=variant-id.class-CbSg1vyg.js.map
