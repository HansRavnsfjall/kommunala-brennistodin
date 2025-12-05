import { U as t } from "./tiptap-extension-api-base-Dc5dmxjn.js";
import { css as s } from "@umbraco-cms/backoffice/external/lit";
import { ListItem as i, BulletList as e } from "@umbraco-cms/backoffice/external/tiptap";
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
//# sourceMappingURL=bullet-list.tiptap-api-BztUp6O_.js.map
