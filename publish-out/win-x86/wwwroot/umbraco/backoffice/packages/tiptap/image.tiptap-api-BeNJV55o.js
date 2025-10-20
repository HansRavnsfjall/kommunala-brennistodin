import { U as e } from "./base-CzBFGKJV.js";
import { css as o } from "@umbraco-cms/backoffice/external/lit";
import { UmbImage as i } from "@umbraco-cms/backoffice/external/tiptap";
class p extends e {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [i.configure({ inline: !0 })], this.getStyles = () => o`
		figure {
			> p,
			img {
				pointer-events: none;
				margin: 0;
				padding: 0;
			}

			&.ProseMirror-selectednode {
				outline: 3px solid var(--uui-color-focus);
			}
		}

		img {
			&.ProseMirror-selectednode {
				outline: 3px solid var(--uui-color-focus);
			}
		}
	`;
  }
}
export {
  p as default
};
//# sourceMappingURL=image.tiptap-api-BeNJV55o.js.map
