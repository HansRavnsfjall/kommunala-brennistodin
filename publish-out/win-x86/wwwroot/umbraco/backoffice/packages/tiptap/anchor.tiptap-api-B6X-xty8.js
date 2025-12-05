import { U as t } from "./tiptap-extension-api-base-Dc5dmxjn.js";
import { css as r } from "@umbraco-cms/backoffice/external/lit";
import { Anchor as e } from "@umbraco-cms/backoffice/external/tiptap";
class n extends t {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [e], this.getStyles = () => r`
		span[data-umb-anchor] {
			&.ProseMirror-selectednode {
				border-radius: var(--uui-border-radius);
				outline: 2px solid var(--uui-color-selected);
			}

			uui-icon {
				height: 1rem;
				width: 1rem;
				vertical-align: text-bottom;
			}
		}
	`;
  }
}
export {
  n as default
};
//# sourceMappingURL=anchor.tiptap-api-B6X-xty8.js.map
