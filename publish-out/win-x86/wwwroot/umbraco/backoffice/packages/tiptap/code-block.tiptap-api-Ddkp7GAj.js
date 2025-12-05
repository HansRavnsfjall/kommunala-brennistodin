import { U as o } from "./tiptap-extension-api-base-Dc5dmxjn.js";
import { css as r } from "@umbraco-cms/backoffice/external/lit";
import { Code as e, CodeBlock as a } from "@umbraco-cms/backoffice/external/tiptap";
class t extends o {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [e, a], this.getStyles = () => r`
		pre {
			background-color: var(--uui-color-surface-alt);
			padding: var(--uui-size-space-2) var(--uui-size-space-4);
			border-radius: calc(var(--uui-border-radius) * 2);
			overflow-x: auto;
		}

		code:not(pre > code) {
			background-color: var(--uui-color-surface-alt);
			padding: var(--uui-size-space-1) var(--uui-size-space-2);
			border-radius: calc(var(--uui-border-radius) * 2);
		}

		code {
			font-family: 'Roboto Mono', monospace;
			background: none;
			color: inherit;
			font-size: 0.8rem;
			padding: 0;
		}
	`;
  }
}
export {
  t as default
};
//# sourceMappingURL=code-block.tiptap-api-Ddkp7GAj.js.map
