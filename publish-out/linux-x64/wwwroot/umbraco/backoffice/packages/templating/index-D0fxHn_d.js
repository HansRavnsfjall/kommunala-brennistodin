const c = (e) => `@Umbraco.GetDictionaryValue("${e}")`, o = (e) => `@await Html.PartialAsync("${e.replace(".cshtml", "")}")`, s = (e) => {
  let n = `
@{
	var selection = ` + e + `;
}
`;
  return n += `<ul>
	@foreach (var item in selection)
	{
		<li>
			<a href="@item.Url()">@item.Name()</a>
		</li>
	}
</ul>

`, n;
}, i = () => "@RenderBody()", r = (e, n) => `@RenderSection("${e}", ${n})`, p = (e) => `@section ${e}
{



}`, u = (e, n = null, t = !1) => {
  let l = null;
  return t !== !1 && n !== null ? l = "Fallback.To(Fallback.Ancestors, Fallback.DefaultValue)" : t !== !1 ? l = "Fallback.ToAncestors" : n !== null && (l = "Fallback.ToDefaultValue"), `${e !== null ? `@Model.Value("${e}"` : ""}${l !== null ? `, fallback: ${l}` : ""}${n !== null ? `, defaultValue: (object)"${n}"` : ""})`;
};
export {
  r as a,
  i as b,
  s as c,
  o as d,
  c as e,
  u as f,
  p as g
};
//# sourceMappingURL=index-D0fxHn_d.js.map
