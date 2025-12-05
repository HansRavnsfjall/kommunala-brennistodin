import { U as t } from "./tiptap-extension-api-base-Dc5dmxjn.js";
import { css as s } from "@umbraco-cms/backoffice/external/lit";
import { ListItem as i, OrderedList as e } from "@umbraco-cms/backoffice/external/tiptap";
class m extends t {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [i, e], this.getStyles = () => s`
		li {
			> p {
				margin: 0;
				padding: 0;
			}
		}
	`;
  }
}
export {
  m as default
};
//# sourceMappingURL=ordered-list.tiptap-api-CS7EoQWK.js.map
