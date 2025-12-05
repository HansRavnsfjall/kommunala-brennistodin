import { U as t } from "./tiptap-extension-api-base-Dc5dmxjn.js";
import { css as e } from "@umbraco-cms/backoffice/external/lit";
import { Blockquote as o } from "@umbraco-cms/backoffice/external/tiptap";
class p extends t {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [o], this.getStyles = () => e`
		blockquote {
			border-left: var(--uui-size-1) solid var(--uui-color-border);
			margin-left: 0;
			padding-left: var(--uui-size-space-4);
		}
	`;
  }
}
export {
  p as default
};
//# sourceMappingURL=blockquote.tiptap-api-Dvn-E2Ax.js.map
