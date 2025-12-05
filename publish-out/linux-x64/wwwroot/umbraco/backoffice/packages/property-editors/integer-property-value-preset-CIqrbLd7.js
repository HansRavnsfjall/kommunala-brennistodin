class t {
  async processValue(e, s) {
    const r = Number(s.find((i) => i.alias === "min")?.value ?? 0), a = isNaN(r) ? 0 : Math.round(r);
    return e !== void 0 ? e : a;
  }
  destroy() {
  }
}
export {
  t as UmbIntegerPropertyValuePreset,
  t as api
};
//# sourceMappingURL=integer-property-value-preset-CIqrbLd7.js.map
