class o {
  async processValue(e, i) {
    const s = Number(i.find((r) => r.alias === "min")?.value ?? 0), a = isNaN(s) ? 0 : s;
    return e !== void 0 ? e : a;
  }
  destroy() {
  }
}
export {
  o as UmbDecimalPropertyValuePreset,
  o as api
};
//# sourceMappingURL=decimal-property-value-preset-rwAsCm7G.js.map
