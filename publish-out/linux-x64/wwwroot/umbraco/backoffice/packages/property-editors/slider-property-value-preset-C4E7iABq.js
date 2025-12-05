class c {
  async processValue(t, i) {
    const o = !!(i.find((e) => e.alias === "enableRange") ?? !1), n = i.find((e) => e.alias === "step") ?? 0, r = n > 0 ? n : 1, s = Number(i.find((e) => e.alias === "initVal1")?.value) || 0, a = isNaN(s) ? 0 : s, l = Number(i.find((e) => e.alias === "initVal2")?.value) || 0, V = isNaN(l) ? a + r : l;
    return t !== void 0 ? t : o ? { from: a, to: V } : { from: a, to: a };
  }
  destroy() {
  }
}
export {
  c as UmbSliderPropertyValuePreset,
  c as api
};
//# sourceMappingURL=slider-property-value-preset-C4E7iABq.js.map
