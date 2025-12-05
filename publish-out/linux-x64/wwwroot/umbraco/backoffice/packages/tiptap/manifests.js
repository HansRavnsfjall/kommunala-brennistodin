import { U as t, a, b as i } from "./constants-C_O9XwbU.js";
const e = [
  {
    type: "modal",
    alias: t,
    name: "Tiptap Anchor Modal",
    element: () => import("./anchor-modal.element-CUIc3fQI.js")
  }
], o = [
  {
    type: "modal",
    alias: a,
    name: "Character Map Modal",
    element: () => import("./character-map-modal.element-Bs-_oEyu.js")
  }
], n = [...e, ...o], p = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Block",
    name: "Block Tiptap Extension",
    api: () => import("./block.tipap-api-CdQs5NGI.js"),
    meta: {
      icon: "icon-plugin",
      label: "Block",
      group: "#tiptap_extGroup_interactive"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.BlockPicker",
    name: "Block Picker Tiptap Extension Button",
    api: () => import("./block.tiptap-toolbar-api-CB_HF1c1.js"),
    forExtensions: ["Umb.Tiptap.Block"],
    meta: {
      alias: "umbblockpicker",
      icon: "icon-plugin",
      label: "#blockEditor_insertBlock"
    }
  }
], l = [
  {
    type: "tiptapToolbarExtension",
    kind: "styleMenu",
    alias: "Umb.Tiptap.Toolbar.StyleSelect",
    name: "Style Select Tiptap Extension",
    items: [
      {
        label: "Headers",
        items: [
          {
            label: "Page header",
            appearance: { icon: "icon-heading-2", style: "font-size: x-large;font-weight: bold;" },
            data: { tag: "h2" }
          },
          {
            label: "Section header",
            appearance: { icon: "icon-heading-3", style: "font-size: large;font-weight: bold;" },
            data: { tag: "h3" }
          },
          {
            label: "Paragraph header",
            appearance: { icon: "icon-heading-4", style: "font-weight: bold;" },
            data: { tag: "h4" }
          }
        ]
      },
      {
        label: "Blocks",
        items: [{ label: "Paragraph", appearance: { icon: "icon-paragraph" }, data: { tag: "p" } }]
      },
      {
        label: "Containers",
        items: [
          {
            label: "Block quote",
            appearance: { icon: "icon-blockquote", style: "font-style: italic;" },
            data: { tag: "blockquote" }
          },
          {
            label: "Code block",
            appearance: { icon: "icon-code", style: "font-family: monospace;" },
            data: { tag: "codeBlock" }
          }
        ]
      }
    ],
    meta: {
      alias: "umbStyleSelect",
      icon: "icon-palette",
      label: "Style Select"
    }
  }
], r = [
  {
    type: "modal",
    alias: i,
    name: "Tiptap Table Properties Modal",
    element: () => import("./table-properties-modal.element-DkBZpba6.js")
  }
], s = [
  {
    type: "tiptapExtension",
    kind: "button",
    alias: "Umb.Tiptap.Table",
    name: "Table Tiptap Extension",
    api: () => import("./table.tiptap-api-CstfSMOe.js"),
    meta: {
      icon: "icon-table",
      label: "Table",
      group: "#tiptap_extGroup_interactive"
    }
  }
], b = [
  {
    type: "tiptapToolbarExtension",
    kind: "menu",
    alias: "Umb.Tiptap.Toolbar.Table",
    name: "Table Tiptap Extension",
    api: () => import("./table.tiptap-toolbar-api-BkJ1Brwz.js"),
    element: () => import("./table-toolbar-menu.element-ENAl4-mu.js"),
    forExtensions: ["Umb.Tiptap.Table"],
    meta: {
      alias: "table",
      icon: "icon-table",
      label: "Table",
      look: "icon",
      items: [
        {
          label: "Cell",
          items: [
            { label: "Merge cells", data: "mergeCells" },
            { label: "Split cell", data: "splitCell" },
            { label: "Merge or split", data: "mergeOrSplit" },
            { label: "Toggle header cell", data: "toggleHeaderCell" }
          ]
        },
        {
          label: "Row",
          items: [
            { label: "Add row before", icon: "icon-page-up", data: "addRowBefore" },
            { label: "Add row after", icon: "icon-page-down", data: "addRowAfter" },
            { label: "Delete row", icon: "icon-trash", data: "deleteRow" },
            { label: "Toggle header row", data: "toggleHeaderRow" }
          ]
        },
        {
          label: "Column",
          items: [
            { label: "Add column before", icon: "icon-navigation-first", data: "addColumnBefore" },
            { label: "Add column after", icon: "icon-tab-key", data: "addColumnAfter" },
            { label: "Delete column", icon: "icon-trash", data: "deleteColumn" },
            { label: "Toggle header column", data: "toggleHeaderColumn" }
          ],
          separatorAfter: !0
        },
        { label: "Table properties", data: "tableProperties" },
        { label: "Delete table", icon: "icon-trash", data: "deleteTable" }
      ]
    }
  }
], m = [...r, ...s, ...b], c = [
  {
    type: "tiptapStatusbarExtension",
    alias: "Umb.Tiptap.Statusbar.WordCount",
    name: "Word Count Tiptap Statusbar Extension",
    element: () => import("./word-count.tiptap-statusbar-element-BRtYSXRt.js"),
    forExtensions: ["Umb.Tiptap.WordCount"],
    meta: {
      alias: "wordCount",
      icon: "icon-speed-gauge",
      label: "Word Count"
    }
  },
  {
    type: "tiptapStatusbarExtension",
    alias: "Umb.Tiptap.Statusbar.ElementPath",
    name: "Element Path Tiptap Statusbar Extension",
    element: () => import("./element-path.tiptap-statusbar-element-0oK27Kye.js"),
    meta: {
      alias: "elementPath",
      icon: "icon-map-alt",
      label: "Element Path"
    }
  }
], T = [
  {
    type: "kind",
    alias: "Umb.Kind.TiptapToolbar.Button",
    matchKind: "button",
    matchType: "tiptapToolbarExtension",
    manifest: {
      element: () => import("./tiptap-toolbar-button.element-Boria81H.js")
    }
  },
  {
    type: "kind",
    alias: "Umb.Kind.TiptapToolbar.ColorPickerButton",
    matchKind: "colorPickerButton",
    matchType: "tiptapToolbarExtension",
    manifest: {
      element: () => import("./tiptap-toolbar-color-picker-button.element-pI_N8ISQ.js")
    }
  },
  {
    type: "kind",
    alias: "Umb.Kind.TiptapToolbar.Menu",
    matchKind: "menu",
    matchType: "tiptapToolbarExtension",
    manifest: {
      element: () => import("./tiptap-toolbar-menu.element-Bowtq1j5.js")
    }
  },
  {
    type: "kind",
    alias: "Umb.Kind.TiptapToolbar.StyleMenu",
    matchKind: "styleMenu",
    matchType: "tiptapToolbarExtension",
    manifest: {
      api: () => import("./style-menu.tiptap-toolbar-api-pD-g0onj.js"),
      element: () => import("./tiptap-toolbar-menu.element-Bowtq1j5.js")
    }
  }
], d = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.RichTextEssentials",
    name: "Rich Text Essentials Tiptap Extension",
    api: () => import("./rich-text-essentials.tiptap-api-C7v7tNIy.js"),
    weight: 1e3,
    meta: {
      icon: "icon-browser-window",
      label: "Rich Text Essentials",
      group: "#tiptap_extGroup_formatting",
      description: "This is a core extension, it is always enabled by default."
    }
  },
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Embed",
    name: "Embed Tiptap Extension",
    api: () => import("./embedded-media.tiptap-api-thIOS_AI.js"),
    meta: {
      icon: "icon-embed",
      label: "#general_embed",
      group: "#tiptap_extGroup_media"
    }
  },
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Link",
    name: "Link Tiptap Extension",
    api: () => import("./link.tiptap-api-DYeSjxA_.js"),
    meta: {
      icon: "icon-link",
      label: "#defaultdialogs_urlLinkPicker",
      group: "#tiptap_extGroup_interactive"
    }
  },
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Figure",
    name: "Figure Tiptap Extension",
    api: () => import("./figure.tiptap-api-70h53txb.js"),
    meta: {
      icon: "icon-frame",
      label: "Figure",
      group: "#tiptap_extGroup_media"
    }
  },
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Image",
    name: "Image Tiptap Extension",
    api: () => import("./image.tiptap-api-BeNJV55o.js"),
    meta: {
      icon: "icon-picture",
      label: "Image",
      group: "#tiptap_extGroup_media"
    }
  },
  {
    type: "tiptapExtension",
    kind: "button",
    alias: "Umb.Tiptap.Subscript",
    name: "Subscript Tiptap Extension",
    api: () => import("./subscript.tiptap-api-DqQkqCPd.js"),
    meta: {
      icon: "icon-subscript",
      label: "Subscript",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapExtension",
    kind: "button",
    alias: "Umb.Tiptap.Superscript",
    name: "Superscript Tiptap Extension",
    api: () => import("./superscript.tiptap-api-SuVNQbC7.js"),
    meta: {
      icon: "icon-superscript",
      label: "Superscript",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapExtension",
    kind: "button",
    alias: "Umb.Tiptap.Underline",
    name: "Underline Tiptap Extension",
    api: () => import("./underline.tiptap-api-COh5SyGi.js"),
    meta: {
      icon: "icon-underline",
      label: "Underline",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.TextAlign",
    name: "Text Align Tiptap Extension",
    api: () => import("./text-align.tiptap-api-CLKc8a2f.js"),
    meta: {
      icon: "icon-text-align-justify",
      label: "Text Align",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.TextDirection",
    name: "Text Direction Tiptap Extension",
    api: () => import("./text-direction.tiptap-api-CDWwj2RJ.js"),
    meta: {
      icon: "icon-text-direction-ltr",
      label: "Text Direction",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.MediaUpload",
    name: "Media Upload Tiptap Extension",
    api: () => import("./media-upload.tiptap-api-0LiwID2H.js"),
    meta: {
      icon: "icon-image-up",
      label: "Media Upload",
      group: "#tiptap_extGroup_media"
    }
  },
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.TextIndent",
    name: "Text Indent Tiptap Extension",
    api: () => import("./text-indent.tiptap-api-D31ugvXC.js"),
    meta: {
      icon: "icon-indent",
      label: "Text Indent",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.WordCount",
    name: "Word Count Tiptap Extension",
    api: () => import("./word-count.tiptap-api-DJ45lSoI.js"),
    meta: {
      icon: "icon-speed-gauge",
      label: "Word Count",
      group: "#tiptap_extGroup_interactive"
    }
  }
], u = [
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.SourceEditor",
    name: "Source Editor Tiptap Extension",
    api: () => import("./source-editor.tiptap-toolbar-api-6Rxfutm0.js"),
    meta: {
      alias: "umbSourceEditor",
      icon: "icon-code-xml",
      label: "#general_viewSourceCode"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Bold",
    name: "Bold Tiptap Extension",
    api: () => import("./bold.tiptap-toolbar-api-CGY7la_R.js"),
    meta: {
      alias: "bold",
      icon: "icon-bold",
      label: "#buttons_bold"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Italic",
    name: "Italic Tiptap Extension",
    api: () => import("./italic.tiptap-toolbar-api-C9OO7jr-.js"),
    meta: {
      alias: "italic",
      icon: "icon-italic",
      label: "#buttons_italic"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Underline",
    name: "Underline Tiptap Extension",
    api: () => import("./underline.tiptap-toolbar-api-C3o_fwN8.js"),
    forExtensions: ["Umb.Tiptap.Underline"],
    meta: {
      alias: "underline",
      icon: "icon-underline",
      label: "Underline"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Strike",
    name: "Strike Tiptap Extension",
    api: () => import("./strike.tiptap-toolbar-api-BrWIUJiP.js"),
    meta: {
      alias: "strike",
      icon: "icon-strikethrough",
      label: "Strike"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.ClearFormatting",
    name: "Clear Formatting Tiptap Extension",
    api: () => import("./clear-formatting.tiptap-toolbar-api-B0jhjI5c.js"),
    meta: {
      alias: "clear-formatting",
      icon: "icon-clear-formatting",
      label: "Clear Formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextAlignLeft",
    name: "Text Align Left Tiptap Extension",
    api: () => import("./text-align-left.tiptap-toolbar-api-DCvsL4lu.js"),
    forExtensions: ["Umb.Tiptap.TextAlign"],
    meta: {
      alias: "text-align-left",
      icon: "icon-text-align-left",
      label: "Text Align Left"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextAlignCenter",
    name: "Text Align Center Tiptap Extension",
    api: () => import("./text-align-center.tiptap-toolbar-api-BAzWuVFE.js"),
    forExtensions: ["Umb.Tiptap.TextAlign"],
    meta: {
      alias: "text-align-center",
      icon: "icon-text-align-center",
      label: "Text Align Center"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextAlignRight",
    name: "Text Align Right Tiptap Extension",
    api: () => import("./text-align-right.tiptap-toolbar-api-CYZRvA7m.js"),
    forExtensions: ["Umb.Tiptap.TextAlign"],
    meta: {
      alias: "text-align-right",
      icon: "icon-text-align-right",
      label: "Text Align Right"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextAlignJustify",
    name: "Text Align Justify Tiptap Extension",
    api: () => import("./text-align-justify.tiptap-toolbar-api-D9Ew_Ahc.js"),
    forExtensions: ["Umb.Tiptap.TextAlign"],
    meta: {
      alias: "text-align-justify",
      icon: "icon-text-align-justify",
      label: "Text Align Justify"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "colorPickerButton",
    alias: "Umb.Tiptap.Toolbar.TextColorBackground",
    name: "Text Color Background Tiptap Extension",
    api: () => import("./text-color-background.tiptap-toolbar-api-CJzQImAh.js"),
    meta: {
      alias: "text-color-background",
      icon: "icon-color-bucket",
      label: "Background color"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "colorPickerButton",
    alias: "Umb.Tiptap.Toolbar.TextColorForeground",
    name: "Text Color Foreground Tiptap Extension",
    api: () => import("./text-color-foreground.tiptap-toolbar-api-DS-Z_lzh.js"),
    meta: {
      alias: "text-color-foreground",
      icon: "icon-colorpicker",
      label: "Color"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextDirectionRtl",
    name: "Text Direction RTL Tiptap Extension",
    api: () => import("./text-direction-rtl.tiptap-toolbar-api-vzV0GYmo.js"),
    forExtensions: ["Umb.Tiptap.TextDirection"],
    meta: {
      alias: "text-direction-rtl",
      icon: "icon-text-direction-rtl",
      label: "Right to left"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextDirectionLtr",
    name: "Text Direction LTR Tiptap Extension",
    api: () => import("./text-direction-ltr.tiptap-toolbar-api-DoU-ui8V.js"),
    forExtensions: ["Umb.Tiptap.TextDirection"],
    meta: {
      alias: "text-direction-ltr",
      icon: "icon-text-direction-ltr",
      label: "Left to right"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Heading1",
    name: "Heading 1 Tiptap Extension",
    api: () => import("./heading1.tiptap-toolbar-api-PhIYhl8p.js"),
    meta: {
      alias: "heading1",
      icon: "icon-heading-1",
      label: "Heading 1"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Heading2",
    name: "Heading 2 Tiptap Extension",
    api: () => import("./heading2.tiptap-toolbar-api-BudDmNQW.js"),
    meta: {
      alias: "heading2",
      icon: "icon-heading-2",
      label: "Heading 2"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Heading3",
    name: "Heading 3 Tiptap Extension",
    api: () => import("./heading3.tiptap-toolbar-api-EEgmGW0h.js"),
    meta: {
      alias: "heading3",
      icon: "icon-heading-3",
      label: "Heading 3"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.BulletList",
    name: "Bullet List Tiptap Extension",
    api: () => import("./bullet-list.tiptap-toolbar-api-C-r9muwh.js"),
    meta: {
      alias: "bulletList",
      icon: "icon-bulleted-list",
      label: "#buttons_listBullet"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.OrderedList",
    name: "Ordered List Tiptap Extension",
    api: () => import("./ordered-list.tiptap-toolbar-api-CRHxAt_D.js"),
    meta: {
      alias: "orderedList",
      icon: "icon-ordered-list",
      label: "Ordered List"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Anchor",
    name: "Anchor Tiptap Extension",
    api: () => import("./anchor.tiptap-toolbar-api-CvS2NZ4Y.js"),
    meta: {
      alias: "anchor",
      icon: "icon-anchor",
      label: "#tiptap_anchor"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Blockquote",
    name: "Blockquote Tiptap Extension",
    api: () => import("./blockquote.tiptap-toolbar-api-DNVsYgyu.js"),
    meta: {
      alias: "blockquote",
      icon: "icon-blockquote",
      label: "Blockquote"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Link",
    name: "Link Tiptap Extension",
    api: () => import("./link.tiptap-toolbar-api-5BE_vOxQ.js"),
    forExtensions: ["Umb.Tiptap.Link"],
    meta: {
      alias: "umbLink",
      icon: "icon-link",
      label: "#defaultdialogs_urlLinkPicker"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Unlink",
    name: "Unlink Tiptap Extension",
    api: () => import("./unlink.tiptap-toolbar-api-kMc5heWo.js"),
    element: () => import("./tiptap-toolbar-button-disabled.element-7fPqrSFx.js"),
    forExtensions: ["Umb.Tiptap.Link"],
    meta: {
      alias: "unlink",
      icon: "icon-unlink",
      label: "Unlink"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.CodeBlock",
    name: "Code Block Tiptap Extension",
    api: () => import("./code-block.tiptap-toolbar-api-Cj1E8BmL.js"),
    meta: {
      alias: "codeBlock",
      icon: "icon-code",
      label: "Code Block"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Subscript",
    name: "Subscript Tiptap Extension",
    api: () => import("./subscript.tiptap-toolbar-api-CMmUknZS.js"),
    forExtensions: ["Umb.Tiptap.Subscript"],
    meta: {
      alias: "subscript",
      icon: "icon-subscript",
      label: "Subscript"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Superscript",
    name: "Superscript Tiptap Extension",
    api: () => import("./superscript.tiptap-toolbar-api-Br-iJiXI.js"),
    forExtensions: ["Umb.Tiptap.Superscript"],
    meta: {
      alias: "superscript",
      icon: "icon-superscript",
      label: "Superscript"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.HorizontalRule",
    name: "Horizontal Rule Tiptap Extension",
    api: () => import("./horizontal-rule.tiptap-toolbar-api-yALTbnKv.js"),
    meta: {
      alias: "horizontalRule",
      icon: "icon-horizontal-rule",
      label: "Horizontal Rule"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Undo",
    name: "Undo Tiptap Extension",
    api: () => import("./undo.tiptap-toolbar-api-Cjsl4dF7.js"),
    element: () => import("./tiptap-toolbar-button-disabled.element-7fPqrSFx.js"),
    meta: {
      alias: "undo",
      icon: "icon-undo",
      label: "#buttons_undo"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Redo",
    name: "Redo Tiptap Extension",
    api: () => import("./redo.tiptap-toolbar-api-CqDHvMN2.js"),
    element: () => import("./tiptap-toolbar-button-disabled.element-7fPqrSFx.js"),
    meta: {
      alias: "redo",
      icon: "icon-redo",
      label: "#buttons_redo"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.MediaPicker",
    name: "Media Picker Tiptap Extension",
    api: () => import("./media-picker.tiptap-toolbar-api-XAcggXJn.js"),
    forExtensions: ["Umb.Tiptap.Figure", "Umb.Tiptap.Image"],
    meta: {
      alias: "umbMedia",
      icon: "icon-picture",
      label: "#general_mediaPicker"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.EmbeddedMedia",
    name: "Embedded Media Tiptap Extension",
    api: () => import("./embedded-media.tiptap-toolbar-api-CNB_fZwn.js"),
    forExtensions: ["Umb.Tiptap.Embed"],
    meta: {
      alias: "umbEmbeddedMedia",
      icon: "icon-embed",
      label: "#general_embed"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "menu",
    alias: "Umb.Tiptap.Toolbar.FontFamily",
    name: "Font Family Tiptap Extension",
    api: () => import("./font-family.tiptap-toolbar-api-Ed4I5rFX.js"),
    items: [
      { label: "Sans serif", appearance: { style: "font-family: sans-serif;" }, data: "sans-serif" },
      { label: "Serif", appearance: { style: "font-family: serif;" }, data: "serif" },
      { label: "Monospace", appearance: { style: "font-family: monospace;" }, data: "monospace" },
      { label: "Cursive", appearance: { style: "font-family: cursive;" }, data: "cursive" },
      { label: "Fantasy", appearance: { style: "font-family: fantasy;" }, data: "fantasy" }
    ],
    meta: {
      alias: "umbFontFamily",
      icon: "icon-ruler-alt",
      label: "Font family"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "menu",
    alias: "Umb.Tiptap.Toolbar.FontSize",
    name: "Font Size Tiptap Extension",
    api: () => import("./font-size.tiptap-toolbar-api-BPNtMF-H.js"),
    items: [
      { label: "8pt", data: "8pt;" },
      { label: "10pt", data: "10pt;" },
      { label: "12pt", data: "12pt;" },
      { label: "14pt", data: "14pt;" },
      { label: "16pt", data: "16pt;" },
      { label: "18pt", data: "18pt;" },
      { label: "24pt", data: "24pt;" },
      { label: "26pt", data: "26pt;" },
      { label: "48pt", data: "48pt;" }
    ],
    meta: {
      alias: "umbFontSize",
      icon: "icon-ruler",
      label: "Font size"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.CharacterMap",
    name: "Character Map Tiptap Extension",
    api: () => import("./character-map.tiptap-toolbar-api-DGrjfErO.js"),
    meta: {
      alias: "umbCharacterMap",
      icon: "icon-omega",
      label: "#tiptap_charmap"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextIndent",
    name: "Text Indent Tiptap Extension",
    api: () => import("./text-indent.tiptap-toolbar-api-CnJZsrxw.js"),
    forExtensions: ["Umb.Tiptap.TextIndent"],
    meta: {
      alias: "indent",
      icon: "icon-indent",
      label: "Indent"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextOutdent",
    name: "Text Outdent Tiptap Extension",
    api: () => import("./text-outdent.tiptap-toolbar-api-DpwR6kZW.js"),
    forExtensions: ["Umb.Tiptap.TextIndent"],
    meta: {
      alias: "outdent",
      icon: "icon-outdent",
      label: "Outdent"
    }
  }
], x = [
  ...T,
  ...d,
  ...c,
  ...u,
  ...p,
  ...l,
  ...m
], E = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Tiptap",
    name: "Rich Text Editor [Tiptap] Property Editor UI",
    element: () => import("./property-editor-ui-tiptap.element-BDJ_Mkw6.js"),
    meta: {
      label: "Rich Text Editor [Tiptap]",
      propertyEditorSchemaAlias: "Umbraco.RichText",
      icon: "icon-browser-window",
      group: "richContent",
      settings: {
        properties: [
          {
            alias: "extensions",
            label: "#tiptap_config_extensions",
            description: `Choose which Tiptap extensions to enable.

_Once enabled, the related actions will be available for the toolbar and statusbar._`,
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Tiptap.ExtensionsConfiguration",
            weight: 10
          },
          {
            alias: "toolbar",
            label: "#tiptap_config_toolbar",
            description: `Design the available actions.

_Drag and drop the available actions onto the toolbar._`,
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Tiptap.ToolbarConfiguration",
            weight: 15
          },
          {
            alias: "statusbar",
            label: "#tiptap_config_statusbar",
            description: `Design the available statuses.

_Drag and drop the available actions onto the statusbar areas._`,
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Tiptap.StatusbarConfiguration",
            weight: 18
          },
          {
            alias: "stylesheets",
            label: "#treeHeaders_stylesheets",
            description: "Pick the stylesheets whose editor styles should be available when editing.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.StylesheetPicker",
            weight: 20
          },
          {
            alias: "dimensions",
            label: "#general_dimensions",
            description: "{#tiptap_config_dimensions_description}",
            propertyEditorUiAlias: "Umb.PropertyEditorUI.Dimensions",
            weight: 30
          },
          {
            alias: "maxImageSize",
            label: "#rte_config_maxImageSize",
            description: "{#rte_config_maxImageSize_description}",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
            config: [{ alias: "min", value: 0 }],
            weight: 40
          },
          {
            alias: "overlaySize",
            label: "#rte_config_overlaySize",
            description: "{#rte_config_overlaySize_description}",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.OverlaySize",
            weight: 50
          }
        ],
        defaultData: [
          {
            alias: "toolbar",
            value: [
              [
                ["Umb.Tiptap.Toolbar.SourceEditor"],
                ["Umb.Tiptap.Toolbar.Bold", "Umb.Tiptap.Toolbar.Italic", "Umb.Tiptap.Toolbar.Underline"],
                [
                  "Umb.Tiptap.Toolbar.TextAlignLeft",
                  "Umb.Tiptap.Toolbar.TextAlignCenter",
                  "Umb.Tiptap.Toolbar.TextAlignRight"
                ],
                ["Umb.Tiptap.Toolbar.BulletList", "Umb.Tiptap.Toolbar.OrderedList"],
                ["Umb.Tiptap.Toolbar.Blockquote", "Umb.Tiptap.Toolbar.HorizontalRule"],
                ["Umb.Tiptap.Toolbar.Link", "Umb.Tiptap.Toolbar.Unlink"],
                ["Umb.Tiptap.Toolbar.MediaPicker", "Umb.Tiptap.Toolbar.EmbeddedMedia"]
              ]
            ]
          },
          { alias: "maxImageSize", value: 500 },
          { alias: "overlaySize", value: "medium" }
        ]
      }
    }
  },
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Tiptap.ExtensionsConfiguration",
    name: "Tiptap Extensions Property Editor UI",
    element: () => import("./property-editor-ui-tiptap-extensions-configuration.element-CrQCiwuS.js"),
    meta: {
      label: "Tiptap Extensions Configuration",
      icon: "icon-autofill",
      group: "common"
    }
  },
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Tiptap.ToolbarConfiguration",
    name: "Tiptap Toolbar Property Editor UI",
    element: () => import("./property-editor-ui-tiptap-toolbar-configuration.element-BRa6FkD3.js"),
    meta: {
      label: "Tiptap Toolbar Configuration",
      icon: "icon-autofill",
      group: "common"
    }
  },
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Tiptap.StatusbarConfiguration",
    name: "Tiptap Statusbar Property Editor UI",
    element: () => import("./property-editor-ui-tiptap-statusbar-configuration.element-DH01gQAh.js"),
    meta: {
      label: "Tiptap Statusbar Configuration",
      icon: "icon-autofill",
      group: "common"
    }
  }
], g = [...E], y = [
  ...n,
  ...x,
  ...g
];
export {
  y as manifests
};
//# sourceMappingURL=manifests.js.map
