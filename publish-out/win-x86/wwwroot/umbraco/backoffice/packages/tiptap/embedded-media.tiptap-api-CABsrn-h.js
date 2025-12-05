import { U as e } from "./tiptap-extension-api-base-Dc5dmxjn.js";
import { css as o } from "@umbraco-cms/backoffice/external/lit";
import { umbEmbeddedMedia as i } from "@umbraco-cms/backoffice/external/tiptap";
class d extends e {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [i.configure({ inline: !0 })], this.getStyles = () => o`
		.umb-embed-holder {
			display: inline-block;
			position: relative;

			&::before {
				z-index: 1000;
				width: 100%;
				height: 100%;
				position: absolute;
				content: ' ';
			}

			&.ProseMirror-selectednode {
				outline: 3px solid var(--uui-color-focus);

				&::before {
					background: rgba(0, 0, 0, 0.1);
				}

				> * {
					user-select: none;
					pointer-events: none;
				}
			}
		}
	`;
  }
}
export {
  d as default
};
//# sourceMappingURL=embedded-media.tiptap-api-CABsrn-h.js.map
