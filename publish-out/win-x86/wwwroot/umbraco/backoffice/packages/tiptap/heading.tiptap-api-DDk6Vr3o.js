import { U as t } from "./tiptap-extension-api-base-Dc5dmxjn.js";
import { css as i } from "@umbraco-cms/backoffice/external/lit";
import { Heading as s } from "@umbraco-cms/backoffice/external/tiptap";
class p extends t {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [s], this.getStyles = () => i`
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin-top: 0;
			margin-bottom: 1rem;

			&:first-child {
				margin-top: 0.25rem;
			}
		}
	`;
  }
}
export {
  p as default
};
//# sourceMappingURL=heading.tiptap-api-DDk6Vr3o.js.map
