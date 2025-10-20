import { U as e } from "./base-CzBFGKJV.js";
import { css as o } from "@umbraco-cms/backoffice/external/lit";
import { umbEmbeddedMedia as i } from "@umbraco-cms/backoffice/external/tiptap";
class d extends e {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [i.configure({ inline: !0 })], this.getStyles = () => o`
		.umb-embed-holder {
			display: inline-block;
			position: relative;
		}

		.umb-embed-holder > * {
			user-select: none;
			pointer-events: none;
		}

		.umb-embed-holder.ProseMirror-selectednode {
			outline: 2px solid var(--uui-palette-spanish-pink-light);
		}

		.umb-embed-holder::before {
			z-index: 1000;
			width: 100%;
			height: 100%;
			position: absolute;
			content: ' ';
		}

		.umb-embed-holder.ProseMirror-selectednode::before {
			background: rgba(0, 0, 0, 0.025);
		}
	`;
  }
}
export {
  d as default
};
//# sourceMappingURL=embedded-media.tiptap-api-thIOS_AI.js.map
