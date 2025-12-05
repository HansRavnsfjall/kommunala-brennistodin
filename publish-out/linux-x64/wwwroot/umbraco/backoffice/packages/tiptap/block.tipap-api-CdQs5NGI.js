import { U as u } from "./base-CzBFGKJV.js";
import { distinctUntilChanged as d } from "@umbraco-cms/backoffice/external/rxjs";
import { Node as p } from "@umbraco-cms/backoffice/external/tiptap";
import { UMB_BLOCK_RTE_DATA_CONTENT_KEY as i } from "@umbraco-cms/backoffice/rte";
import { UMB_BLOCK_RTE_MANAGER_CONTEXT as k } from "@umbraco-cms/backoffice/block-rte";
const c = p.create({
  name: "umbRteBlock",
  group: "block",
  content: void 0,
  // The block does not have any content, it is just a wrapper.
  atom: !0,
  // The block is an atom, meaning it is a single unit that cannot be split.
  marks: "",
  // We do not allow marks on the block
  draggable: !0,
  selectable: !0,
  addAttributes() {
    return {
      [i]: {
        isRequired: !0
      }
    };
  },
  parseHTML() {
    return [{ tag: `umb-rte-block[${i}]` }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["umb-rte-block", n];
  },
  addCommands() {
    return {
      setBlock: (n) => ({ commands: r }) => {
        const e = { [i]: n.contentKey };
        return r.insertContent({
          type: this.name,
          attrs: e
        });
      }
    };
  }
}), b = c.extend({
  name: "umbRteBlockInline",
  group: "inline",
  inline: !0,
  parseHTML() {
    return [{ tag: `umb-rte-block-inline[${i}]` }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["umb-rte-block-inline", n];
  },
  addCommands() {
    return {
      setBlockInline: (n) => ({ commands: r }) => {
        const e = { [i]: n.contentKey };
        return r.insertContent({
          type: this.name,
          attrs: e
        });
      }
    };
  }
});
class C extends u {
  constructor(r) {
    super(r), this.consumeContext(k, (e) => {
      this.observe(
        e?.contents.pipe(
          d((t, l) => t.map((s) => s.key).join() === l.map((s) => s.key).join())
        ),
        (t) => {
          !t || !e || this.#e(t, e.getLayouts());
        },
        "contents"
      );
    });
  }
  getTiptapExtensions() {
    return [c, b];
  }
  #e(r, e) {
    const t = this._editor;
    if (!t) return;
    const l = Array.from(t.view.dom.querySelectorAll("umb-rte-block, umb-rte-block-inline")).map(
      (o) => o.getAttribute(i)
    );
    r.filter((o) => !l.find((a) => a === o.key)).forEach((o) => {
      e.find((m) => m.contentKey === o.key)?.displayInline ?? !1 ? t.commands.setBlockInline({ contentKey: o.key }) : t.commands.setBlock({ contentKey: o.key });
    });
  }
}
export {
  C as default
};
//# sourceMappingURL=block.tipap-api-CdQs5NGI.js.map
