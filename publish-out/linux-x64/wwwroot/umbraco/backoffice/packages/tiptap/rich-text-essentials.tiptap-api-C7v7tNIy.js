import { U as r } from "./base-CzBFGKJV.js";
import { css as e } from "@umbraco-cms/backoffice/external/lit";
import { StarterKit as i, Anchor as o, Div as a, Span as t, HtmlGlobalAttributes as s, TrailingNode as u } from "@umbraco-cms/backoffice/external/tiptap";
class p extends r {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [
      i,
      o,
      a,
      t,
      s.configure({
        types: [
          "bold",
          "blockquote",
          "bulletList",
          "codeBlock",
          "div",
          "figcaption",
          "figure",
          "heading",
          "horizontalRule",
          "italic",
          "image",
          "link",
          "orderedList",
          "paragraph",
          "span",
          "strike",
          "subscript",
          "superscript",
          "table",
          "tableHeader",
          "tableRow",
          "tableCell",
          "underline",
          "umbLink"
        ]
      }),
      u
    ], this.getStyles = () => e`
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

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin-top: 0;
			margin-bottom: 0.5em;
		}

		li {
			> p {
				margin: 0;
				padding: 0;
			}
		}

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
  p as UmbTiptapRichTextEssentialsExtensionApi,
  p as api,
  p as default
};
//# sourceMappingURL=rich-text-essentials.tiptap-api-C7v7tNIy.js.map
