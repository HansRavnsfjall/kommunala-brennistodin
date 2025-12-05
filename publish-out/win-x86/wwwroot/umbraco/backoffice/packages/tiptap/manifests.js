import { U as o, a as n, b as p } from "./constants-C_O9XwbU.js";
const l = {
  type: "kind",
  alias: "Umb.Kind.TiptapToolbar.Button",
  matchKind: "button",
  matchType: "tiptapToolbarExtension",
  manifest: {
    element: () => import("./tiptap-toolbar-button.element-CVnmHwBo.js")
  }
}, r = {
  type: "kind",
  alias: "Umb.Kind.TiptapToolbar.ColorPickerButton",
  matchKind: "colorPickerButton",
  matchType: "tiptapToolbarExtension",
  manifest: {
    element: () => import("./tiptap-toolbar-color-picker-button.element-B47xvS3V.js")
  }
}, s = {
  type: "kind",
  alias: "Umb.Kind.TiptapToolbar.Menu",
  matchKind: "menu",
  matchType: "tiptapToolbarExtension",
  manifest: {
    element: () => import("./tiptap-toolbar-menu.element-9SMGzmQW.js")
  }
}, m = {
  type: "kind",
  alias: "Umb.Kind.TiptapToolbar.StyleMenu",
  matchKind: "styleMenu",
  matchType: "tiptapToolbarExtension",
  manifest: {
    api: () => import("./style-menu.tiptap-toolbar-api-BBZLB52s.js"),
    element: () => import("./tiptap-toolbar-menu.element-9SMGzmQW.js")
  }
}, b = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Anchor",
    name: "Anchor Tiptap Extension",
    api: () => import("./anchor.tiptap-api-B6X-xty8.js"),
    meta: {
      icon: "icon-anchor",
      label: "#tiptap_anchor",
      group: "#tiptap_extGroup_interactive"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Anchor",
    name: "Anchor Tiptap Toolbar Extension",
    api: () => import("./anchor.tiptap-toolbar-api-BpNj5l2x.js"),
    forExtensions: ["Umb.Tiptap.Anchor"],
    meta: {
      alias: "anchor",
      icon: "icon-anchor",
      label: "#tiptap_anchor"
    }
  },
  {
    type: "modal",
    alias: o,
    name: "Tiptap Anchor Modal",
    element: () => import("./anchor-modal.element-CUIc3fQI.js")
  }
], T = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Block",
    name: "Block Tiptap Extension",
    api: () => import("./block.tipap-api-B59QSgz5.js"),
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
    api: () => import("./block.tiptap-toolbar-api-D-1uHwaK.js"),
    forExtensions: ["Umb.Tiptap.Block"],
    meta: {
      alias: "umbblockpicker",
      icon: "icon-plugin",
      label: "#blockEditor_insertBlock"
    }
  }
], c = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Blockquote",
    name: "Blockquote Tiptap Extension",
    api: () => import("./blockquote.tiptap-api-Dvn-E2Ax.js"),
    meta: {
      icon: "icon-blockquote",
      label: "Blockquote",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Blockquote",
    name: "Blockquote Tiptap Toolbar Extension",
    api: () => import("./blockquote.tiptap-toolbar-api-CxR8Yhzq.js"),
    forExtensions: ["Umb.Tiptap.Blockquote"],
    meta: {
      alias: "blockquote",
      icon: "icon-blockquote",
      label: "Blockquote"
    }
  }
], d = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Bold",
    name: "Bold Tiptap Extension",
    api: () => import("./bold.tiptap-api-Bo9rB-Sx.js"),
    meta: {
      icon: "icon-bold",
      label: "Bold",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Bold",
    name: "Bold Tiptap Toolbar Extension",
    api: () => import("./bold.tiptap-toolbar-api-BEo-AI7c.js"),
    forExtensions: ["Umb.Tiptap.Bold"],
    meta: {
      alias: "bold",
      icon: "icon-bold",
      label: "#buttons_bold"
    }
  }
], u = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.BulletList",
    name: "Bullet List Tiptap Extension",
    api: () => import("./bullet-list.tiptap-api-BztUp6O_.js"),
    meta: {
      icon: "icon-bulleted-list",
      label: "Bullet List",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.BulletList",
    name: "Bullet List Tiptap Toolbar Extension",
    api: () => import("./bullet-list.tiptap-toolbar-api-DSrnVv8T.js"),
    forExtensions: ["Umb.Tiptap.BulletList"],
    meta: {
      alias: "bulletList",
      icon: "icon-bulleted-list",
      label: "#buttons_listBullet"
    }
  }
], x = [
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.CharacterMap",
    name: "Character Map Tiptap Toolbar Extension",
    api: () => import("./character-map.tiptap-toolbar-api-GS87ITUB.js"),
    meta: {
      alias: "umbCharacterMap",
      icon: "icon-omega",
      label: "#tiptap_charmap"
    }
  },
  {
    type: "modal",
    alias: n,
    name: "Character Map Modal",
    element: () => import("./character-map-modal.element-Bs-_oEyu.js")
  }
], g = [
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.ClearFormatting",
    name: "Clear Formatting Tiptap Toolbar Extension",
    api: () => import("./clear-formatting.tiptap-toolbar-api-CS5neqqf.js"),
    meta: {
      alias: "clear-formatting",
      icon: "icon-clear-formatting",
      label: "Clear Formatting"
    }
  }
], E = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.CodeBlock",
    name: "Code Block Tiptap Extension",
    api: () => import("./code-block.tiptap-api-Ddkp7GAj.js"),
    meta: {
      icon: "icon-code",
      label: "Code Block",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.CodeBlock",
    name: "Code Block Tiptap Toolbar Extension",
    api: () => import("./code-block.tiptap-toolbar-api-Bs4_jY-a.js"),
    forExtensions: ["Umb.Tiptap.CodeBlock"],
    meta: {
      alias: "codeBlock",
      icon: "icon-code",
      label: "Code Block"
    }
  }
], U = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.RichTextEssentials",
    name: "Rich Text Essentials Tiptap Extension",
    api: () => import("./rich-text-essentials.tiptap-api-Cleda1MR.js"),
    weight: 1e3,
    meta: {
      icon: "icon-browser-window",
      label: "Rich Text Essentials",
      group: "#tiptap_extGroup_formatting",
      description: "This is a core extension, it is always enabled by default."
    }
  }
], f = [
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
], y = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Embed",
    name: "Embedded Media Tiptap Extension",
    api: () => import("./embedded-media.tiptap-api-CABsrn-h.js"),
    meta: {
      icon: "icon-embed",
      label: "#general_embed",
      group: "#tiptap_extGroup_media"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.EmbeddedMedia",
    name: "Embedded Media Tiptap Toolbar Extension",
    api: () => import("./embedded-media.tiptap-toolbar-api-2A8o9Ve_.js"),
    forExtensions: ["Umb.Tiptap.Embed"],
    meta: {
      alias: "umbEmbeddedMedia",
      icon: "icon-embed",
      label: "#general_embed"
    }
  }
], k = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Figure",
    name: "Figure Tiptap Extension",
    api: () => import("./figure.tiptap-api-j0dKB1gE.js"),
    meta: {
      icon: "icon-frame",
      label: "Figure",
      group: "#tiptap_extGroup_media"
    }
  }
], _ = [
  {
    type: "tiptapToolbarExtension",
    kind: "menu",
    alias: "Umb.Tiptap.Toolbar.FontFamily",
    name: "Font Family Tiptap Toolbar Extension",
    api: () => import("./font-family.tiptap-toolbar-api-DvSN5-KQ.js"),
    forExtensions: ["Umb.Tiptap.HtmlAttributeStyle", "Umb.Tiptap.HtmlTagSpan"],
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
  }
], h = [
  {
    type: "tiptapToolbarExtension",
    kind: "menu",
    alias: "Umb.Tiptap.Toolbar.FontSize",
    name: "Font Size Tiptap Toolbar Extension",
    api: () => import("./font-size.tiptap-toolbar-api-CB5vT-QZ.js"),
    forExtensions: ["Umb.Tiptap.HtmlAttributeStyle", "Umb.Tiptap.HtmlTagSpan"],
    items: [
      { label: "8pt", data: "8pt" },
      { label: "10pt", data: "10pt" },
      { label: "12pt", data: "12pt" },
      { label: "14pt", data: "14pt" },
      { label: "16pt", data: "16pt" },
      { label: "18pt", data: "18pt" },
      { label: "24pt", data: "24pt" },
      { label: "26pt", data: "26pt" },
      { label: "48pt", data: "48pt" }
    ],
    meta: {
      alias: "umbFontSize",
      icon: "icon-ruler",
      label: "Font size"
    }
  }
], A = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Heading",
    name: "Headings Tiptap Extension",
    api: () => import("./heading.tiptap-api-DDk6Vr3o.js"),
    meta: {
      icon: "icon-heading",
      label: "Headings",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Heading1",
    name: "Heading 1 Tiptap Toolbar Extension",
    api: () => import("./heading1.tiptap-toolbar-api-D1JDDJDH.js"),
    forExtensions: ["Umb.Tiptap.Heading"],
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
    name: "Heading 2 Tiptap Toolbar Extension",
    api: () => import("./heading2.tiptap-toolbar-api-BdWrEJNw.js"),
    forExtensions: ["Umb.Tiptap.Heading"],
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
    name: "Heading 3 Tiptap Toolbar Extension",
    api: () => import("./heading3.tiptap-toolbar-api-D5gieFbU.js"),
    forExtensions: ["Umb.Tiptap.Heading"],
    meta: {
      alias: "heading3",
      icon: "icon-heading-3",
      label: "Heading 3"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Heading4",
    name: "Heading 4 Tiptap Toolbar Extension",
    api: () => import("./heading4.tiptap-toolbar-api-BZ433G24.js"),
    forExtensions: ["Umb.Tiptap.Heading"],
    meta: {
      alias: "heading4",
      icon: "icon-heading-4",
      label: "Heading 4"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Heading5",
    name: "Heading 5 Tiptap Toolbar Extension",
    api: () => import("./heading5.tiptap-toolbar-api-Dn38ImEE.js"),
    forExtensions: ["Umb.Tiptap.Heading"],
    meta: {
      alias: "heading5",
      icon: "icon-heading-5",
      label: "Heading 5"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Heading6",
    name: "Heading 6 Tiptap Toolbar Extension",
    api: () => import("./heading6.tiptap-toolbar-api-B5Ntd8lv.js"),
    forExtensions: ["Umb.Tiptap.Heading"],
    meta: {
      alias: "heading6",
      icon: "icon-heading-6",
      label: "Heading 6"
    }
  }
], M = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.HorizontalRule",
    name: "Horizontal Rule Tiptap Extension",
    api: () => import("./horizontal-rule.tiptap-api-BFqfwn8t.js"),
    meta: {
      icon: "icon-horizontal-rule",
      label: "Horizontal Rule",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.HorizontalRule",
    name: "Horizontal Rule Tiptap Toolbar Extension",
    api: () => import("./horizontal-rule.tiptap-toolbar-api-uAR1PXjv.js"),
    forExtensions: ["Umb.Tiptap.HorizontalRule"],
    meta: {
      alias: "horizontalRule",
      icon: "icon-horizontal-rule",
      label: "Horizontal Rule"
    }
  }
], I = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.HtmlAttributeClass",
    name: "Class HTML Attribute Tiptap Extension",
    api: () => import("./html-attr-class.tiptap-api-Ca9xv2He.js"),
    meta: {
      icon: "icon-barcode",
      label: "`class` attributes",
      group: "#tiptap_extGroup_html"
    }
  }
], S = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.HtmlAttributeDataset",
    name: "Dataset HTML Attribute Tiptap Extension",
    api: () => import("./html-attr-dataset.tiptap-api-B_eBwDxR.js"),
    meta: {
      icon: "icon-binarycode",
      label: "`data-*` attributes",
      group: "#tiptap_extGroup_html"
    }
  }
], C = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.HtmlAttributeId",
    name: "ID HTML Attribute Tiptap Extension",
    api: () => import("./html-attr-id.tiptap-api-ClV-pFof.js"),
    meta: {
      icon: "icon-fingerprint",
      label: "`id` attributes",
      group: "#tiptap_extGroup_html"
    }
  }
], B = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.HtmlAttributeStyle",
    name: "Style HTML Attribute Tiptap Extension",
    api: () => import("./html-attr-style.tiptap-api-BOZbpxk8.js"),
    meta: {
      icon: "icon-palette",
      label: "`style` attributes",
      group: "#tiptap_extGroup_html"
    }
  }
], H = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.HtmlTagDiv",
    name: "Div HTML Tag Tiptap Extension",
    api: () => import("./html-tag-div.tiptap-api-CUWYPboC.js"),
    meta: {
      icon: "icon-document-html",
      label: "`<div>` tags",
      group: "#tiptap_extGroup_html"
    }
  }
], L = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.HtmlTagSpan",
    name: "Span HTML Tag Tiptap Extension",
    api: () => import("./html-tag-span.tiptap-api-sVnu9FNJ.js"),
    meta: {
      icon: "icon-document-html",
      label: "`<span>` tags",
      group: "#tiptap_extGroup_html"
    }
  }
], w = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Image",
    name: "Image Tiptap Extension",
    api: () => import("./image.tiptap-api-DnJKOfWB.js"),
    meta: {
      icon: "icon-picture",
      label: "Image",
      group: "#tiptap_extGroup_media"
    }
  }
], P = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Italic",
    name: "Italic Tiptap Extension",
    api: () => import("./italic.tiptap-api-9M1GL9zb.js"),
    meta: {
      icon: "icon-italic",
      label: "Italic",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Italic",
    name: "Italic Tiptap Toolbar Extension",
    api: () => import("./italic.tiptap-toolbar-api-Dz-khhaK.js"),
    forExtensions: ["Umb.Tiptap.Italic"],
    meta: {
      alias: "italic",
      icon: "icon-italic",
      label: "#buttons_italic"
    }
  }
], $ = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Link",
    name: "Link Tiptap Extension",
    api: () => import("./link.tiptap-api-BWZyMT-L.js"),
    meta: {
      icon: "icon-link",
      label: "#defaultdialogs_urlLinkPicker",
      group: "#tiptap_extGroup_interactive"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Link",
    name: "Link Tiptap Toolbar Extension",
    api: () => import("./link.tiptap-toolbar-api-Cnc6RbCL.js"),
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
    name: "Unlink Tiptap Toolbar Extension",
    api: () => import("./unlink.tiptap-toolbar-api-DppvXqHV.js"),
    element: () => import("./tiptap-toolbar-button-disabled.element-BFbRh7BX.js"),
    forExtensions: ["Umb.Tiptap.Link"],
    meta: {
      alias: "unlink",
      icon: "icon-unlink",
      label: "Unlink"
    }
  }
], R = [
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.MediaPicker",
    name: "Media Picker Tiptap Toolbar Extension",
    api: () => import("./media-picker.tiptap-toolbar-api-Bgu_WwPi.js"),
    forExtensions: ["Umb.Tiptap.Figure", "Umb.Tiptap.Image"],
    meta: {
      alias: "umbMedia",
      icon: "icon-picture",
      label: "#general_mediaPicker"
    }
  }
], D = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.MediaUpload",
    name: "Media Upload Tiptap Extension",
    api: () => import("./media-upload.tiptap-api-BVgNE2BN.js"),
    meta: {
      icon: "icon-image-up",
      label: "Media Upload",
      group: "#tiptap_extGroup_media"
    }
  }
], G = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.OrderedList",
    name: "Ordered List Tiptap Extension",
    api: () => import("./ordered-list.tiptap-api-CS7EoQWK.js"),
    meta: {
      icon: "icon-ordered-list",
      label: "Ordered List",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.OrderedList",
    name: "Ordered List Tiptap Toolbar Extension",
    api: () => import("./ordered-list.tiptap-toolbar-api-BOLA2MTM.js"),
    forExtensions: ["Umb.Tiptap.OrderedList"],
    meta: {
      alias: "orderedList",
      icon: "icon-ordered-list",
      label: "Ordered List"
    }
  }
], v = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Strike",
    name: "Strike Tiptap Extension",
    api: () => import("./strike.tiptap-api-B0K_XoTn.js"),
    meta: {
      icon: "icon-strikethrough",
      label: "Strike",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Strike",
    name: "Strike Tiptap Toolbar Extension",
    api: () => import("./strike.tiptap-toolbar-api-BoNipVjQ.js"),
    forExtensions: ["Umb.Tiptap.Strike"],
    meta: {
      alias: "strike",
      icon: "icon-strikethrough",
      label: "Strike"
    }
  }
], z = [
  {
    type: "tiptapToolbarExtension",
    kind: "styleMenu",
    alias: "Umb.Tiptap.Toolbar.StyleSelect",
    name: "Style Select Tiptap Extension",
    forExtensions: ["Umb.Tiptap.Heading", "Umb.Tiptap.Blockquote", "Umb.Tiptap.CodeBlock"],
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
], F = [
  {
    type: "tiptapExtension",
    kind: "button",
    alias: "Umb.Tiptap.Subscript",
    name: "Subscript Tiptap Extension",
    api: () => import("./subscript.tiptap-api-BYzgbb31.js"),
    meta: {
      icon: "icon-subscript",
      label: "Subscript",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Subscript",
    name: "Subscript Tiptap Toolbar Extension",
    api: () => import("./subscript.tiptap-toolbar-api-BllCvIql.js"),
    forExtensions: ["Umb.Tiptap.Subscript"],
    meta: {
      alias: "subscript",
      icon: "icon-subscript",
      label: "Subscript"
    }
  }
], O = [
  {
    type: "tiptapExtension",
    kind: "button",
    alias: "Umb.Tiptap.Superscript",
    name: "Superscript Tiptap Extension",
    api: () => import("./superscript.tiptap-api-BU2FtwCc.js"),
    meta: {
      icon: "icon-superscript",
      label: "Superscript",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Superscript",
    name: "Superscript Tiptap Toolbar Extension",
    api: () => import("./superscript.tiptap-toolbar-api-DWX4bPHG.js"),
    forExtensions: ["Umb.Tiptap.Superscript"],
    meta: {
      alias: "superscript",
      icon: "icon-superscript",
      label: "Superscript"
    }
  }
], e = "Umb.Menu.Tiptap.Table", t = "Umb.Menu.Tiptap.TableColumn", a = "Umb.Menu.Tiptap.TableRow", i = "Umb.Menu.Tiptap.TableCell", q = [
  {
    type: "modal",
    alias: p,
    name: "Tiptap Table Properties Modal",
    element: () => import("./table-properties-modal.element-DkBZpba6.js")
  }
], K = [
  {
    type: "tiptapExtension",
    kind: "button",
    alias: "Umb.Tiptap.Table",
    name: "Table Tiptap Extension",
    api: () => import("./table.tiptap-api-ItX0KoUA.js"),
    meta: {
      icon: "icon-table",
      label: "Table",
      group: "#tiptap_extGroup_interactive"
    }
  }
], N = [
  {
    type: "tiptapToolbarExtension",
    kind: "menu",
    alias: "Umb.Tiptap.Toolbar.Table",
    name: "Table Tiptap Extension",
    api: () => import("./table.tiptap-toolbar-api-C5vZgBCR.js"),
    element: () => import("./table-toolbar-menu.element-B0dPr8pE.js"),
    forExtensions: ["Umb.Tiptap.Table"],
    items: [
      {
        label: "Cell",
        menu: i
      },
      {
        label: "Row",
        menu: a
      },
      {
        label: "Column",
        menu: t,
        separatorAfter: !0
      }
    ],
    menu: e,
    meta: {
      alias: "table",
      icon: "icon-table",
      label: "Table",
      look: "icon"
    }
  }
], W = [
  {
    type: "menu",
    alias: e,
    name: "Tiptap Table Menu"
  },
  {
    type: "menuItem",
    kind: "action",
    alias: "Umb.MenuItem.Tiptap.TableProperties",
    name: "Tiptap Table Menu Item: Table Properties",
    api: () => import("./table-properties.action-Dih4cnzy.js"),
    weight: 110,
    meta: {
      label: "Table properties",
      menus: [e]
    }
  },
  {
    type: "menuItem",
    kind: "action",
    alias: "Umb.MenuItem.Tiptap.TableDelete",
    name: "Tiptap Table Menu Item: Delete Table",
    api: () => import("./table-delete.action-Bm5PaHxQ.js"),
    weight: 100,
    meta: {
      label: "Delete table",
      icon: "icon-trash",
      menus: [e]
    }
  }
], j = [
  {
    type: "menu",
    alias: t,
    name: "Tiptap Table Column Menu"
  },
  {
    type: "menuItem",
    kind: "action",
    alias: "Umb.MenuItem.Tiptap.TableColumnAddBefore",
    name: "Tiptap Table Menu Item: Add Column Before",
    api: () => import("./table-column-add-before.action-BGTxipJL.js"),
    weight: 120,
    meta: {
      label: "Add column before",
      icon: "icon-navigation-first",
      menus: [t]
    }
  },
  {
    type: "menuItem",
    kind: "action",
    alias: "Umb.MenuItem.Tiptap.TableColumnAddAfter",
    name: "Tiptap Table Menu Item: Add Column After",
    api: () => import("./table-column-add-after.action-CG5M1MUQ.js"),
    weight: 110,
    meta: {
      label: "Add column after",
      icon: "icon-tab-key",
      menus: [t]
    }
  },
  {
    type: "menuItem",
    kind: "action",
    alias: "Umb.MenuItem.Tiptap.TableColumnDelete",
    name: "Tiptap Table Menu Item: Delete Column",
    api: () => import("./table-column-delete.action-D6FFLdJm.js"),
    weight: 100,
    meta: {
      label: "Delete column",
      icon: "icon-trash",
      menus: [t]
    }
  },
  {
    type: "menuItem",
    kind: "action",
    alias: "Umb.MenuItem.Tiptap.TableColumnToggleHeader",
    name: "Tiptap Table Menu Item: Toggle Header Column",
    api: () => import("./table-column-toggle-header.action-Ca3aKPTg.js"),
    weight: 90,
    meta: {
      label: "Toggle header column",
      menus: [t]
    }
  }
], J = [
  {
    type: "menu",
    alias: a,
    name: "Tiptap Table Row Menu"
  },
  {
    type: "menuItem",
    kind: "action",
    alias: "Umb.MenuItem.Tiptap.TableRowAddBefore",
    name: "Tiptap Table Menu Item: Add Row Before",
    api: () => import("./table-row-add-before.action-tan1Q1HL.js"),
    weight: 120,
    meta: {
      label: "Add row before",
      icon: "icon-page-up",
      menus: [a]
    }
  },
  {
    type: "menuItem",
    kind: "action",
    alias: "Umb.MenuItem.Tiptap.TableRowAddAfter",
    name: "Tiptap Table Menu Item: Add Row After",
    api: () => import("./table-row-add-after.action-xwwEBGlj.js"),
    weight: 110,
    meta: {
      label: "Add row after",
      icon: "icon-page-down",
      menus: [a]
    }
  },
  {
    type: "menuItem",
    kind: "action",
    alias: "Umb.MenuItem.Tiptap.TableRowDelete",
    name: "Tiptap Table Menu Item: Delete Row",
    api: () => import("./table-row-delete.action-BZLxfG4z.js"),
    weight: 100,
    meta: {
      label: "Delete row",
      icon: "icon-trash",
      menus: [a]
    }
  },
  {
    type: "menuItem",
    kind: "action",
    alias: "Umb.MenuItem.Tiptap.TableRowToggleHeader",
    name: "Tiptap Table Menu Item: Toggle Header Row",
    api: () => import("./table-row-toggle-header.action-Bwu5gAwp.js"),
    weight: 90,
    meta: {
      label: "Toggle header row",
      menus: [a]
    }
  }
], Q = [
  {
    type: "menu",
    alias: i,
    name: "Tiptap Table Cell Menu"
  },
  {
    type: "menuItem",
    kind: "action",
    alias: "Umb.MenuItem.Tiptap.TableCellMerge",
    name: "Tiptap Table Menu Item: Merge Cell",
    api: () => import("./table-cell-merge.action-eICiC54s.js"),
    weight: 120,
    meta: {
      label: "Merge cells",
      menus: [i]
    }
  },
  {
    type: "menuItem",
    kind: "action",
    alias: "Umb.MenuItem.Tiptap.TableCellSplit",
    name: "Tiptap Table Menu Item: Split Cell",
    api: () => import("./table-cell-split.action-liqlsqm2.js"),
    weight: 110,
    meta: {
      label: "Split cell",
      menus: [i]
    }
  },
  {
    type: "menuItem",
    kind: "action",
    alias: "Umb.MenuItem.Tiptap.TableCellMergeSplit",
    name: "Tiptap Table Menu Item: Merge Or Split Cell",
    api: () => import("./table-cell-merge-split.action-BwWzimOk.js"),
    weight: 100,
    meta: {
      label: "Merge or split",
      menus: [i]
    }
  },
  {
    type: "menuItem",
    kind: "action",
    alias: "Umb.MenuItem.Tiptap.TableCellToggleHeader",
    name: "Tiptap Table Menu Item: Toggle Header Cell",
    api: () => import("./table-cell-toggle-header.action-CbkMu-Ma.js"),
    weight: 90,
    meta: {
      label: "Toggle header cell",
      menus: [i]
    }
  }
], V = [...W, ...j, ...J, ...Q], X = [...q, ...K, ...N, ...V], Y = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.TextAlign",
    name: "Text Align Tiptap Extension",
    api: () => import("./text-align.tiptap-api-BelYfyR4.js"),
    meta: {
      icon: "icon-text-align-justify",
      label: "Text Align",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextAlignLeft",
    name: "Text Align Left Tiptap Toolbar Extension",
    api: () => import("./text-align-left.tiptap-toolbar-api-CO4loc3P.js"),
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
    name: "Text Align Center Tiptap Toolbar Extension",
    api: () => import("./text-align-center.tiptap-toolbar-api-DTbBpK2K.js"),
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
    name: "Text Align Right Tiptap Toolbar Extension",
    api: () => import("./text-align-right.tiptap-toolbar-api-mPXQcwDm.js"),
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
    name: "Text Align Justify Tiptap Toolbar Extension",
    api: () => import("./text-align-justify.tiptap-toolbar-api-w97c_JJy.js"),
    forExtensions: ["Umb.Tiptap.TextAlign"],
    meta: {
      alias: "text-align-justify",
      icon: "icon-text-align-justify",
      label: "Text Align Justify"
    }
  }
], Z = [
  {
    type: "tiptapToolbarExtension",
    kind: "colorPickerButton",
    alias: "Umb.Tiptap.Toolbar.TextColorBackground",
    name: "Text Color Background Tiptap Toolbar Extension",
    api: () => import("./text-color-background.tiptap-toolbar-api-DU2R9C3A.js"),
    forExtensions: ["Umb.Tiptap.HtmlAttributeStyle", "Umb.Tiptap.HtmlTagSpan"],
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
    name: "Text Color Foreground Tiptap Toolbar Extension",
    api: () => import("./text-color-foreground.tiptap-toolbar-api-CK0t-kbD.js"),
    forExtensions: ["Umb.Tiptap.HtmlAttributeStyle", "Umb.Tiptap.HtmlTagSpan"],
    meta: {
      alias: "text-color-foreground",
      icon: "icon-colorpicker",
      label: "Color"
    }
  }
], tt = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.TextDirection",
    name: "Text Direction Tiptap Extension",
    api: () => import("./text-direction.tiptap-api-C3ANK0Xz.js"),
    meta: {
      icon: "icon-text-direction-ltr",
      label: "Text Direction",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextDirectionRtl",
    name: "Text Direction RTL Tiptap Toolbar Extension",
    api: () => import("./text-direction-rtl.tiptap-toolbar-api-DkWLzrdN.js"),
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
    name: "Text Direction LTR Tiptap Toolbar Extension",
    api: () => import("./text-direction-ltr.tiptap-toolbar-api-DIh_5PSk.js"),
    forExtensions: ["Umb.Tiptap.TextDirection"],
    meta: {
      alias: "text-direction-ltr",
      icon: "icon-text-direction-ltr",
      label: "Left to right"
    }
  }
], at = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.TextIndent",
    name: "Text Indent Tiptap Extension",
    api: () => import("./text-indent.tiptap-api-BkUvzXhq.js"),
    meta: {
      icon: "icon-indent",
      label: "Text Indent",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextIndent",
    name: "Text Indent Tiptap Toolbar Extension",
    api: () => import("./text-indent.tiptap-toolbar-api-CMIZAI_d.js"),
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
    name: "Text Outdent Tiptap Toolbar Extension",
    api: () => import("./text-outdent.tiptap-toolbar-api-B0-WzL_T.js"),
    forExtensions: ["Umb.Tiptap.TextIndent"],
    meta: {
      alias: "outdent",
      icon: "icon-outdent",
      label: "Outdent"
    }
  }
], it = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.TrailingNode",
    name: "Trailing Node Tiptap Extension",
    api: () => import("./trailing-node.tiptap-api-DIl61tby.js"),
    meta: {
      icon: "icon-page-down",
      label: "Trailing Node",
      group: "#tiptap_extGroup_interactive"
    }
  }
], et = [
  {
    type: "tiptapExtension",
    kind: "button",
    alias: "Umb.Tiptap.Underline",
    name: "Underline Tiptap Extension",
    api: () => import("./underline.tiptap-api-C5-1iFS2.js"),
    meta: {
      icon: "icon-underline",
      label: "Underline",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Underline",
    name: "Underline Tiptap Toolbar Extension",
    api: () => import("./underline.tiptap-toolbar-api-B1K1Qat8.js"),
    forExtensions: ["Umb.Tiptap.Underline"],
    meta: {
      alias: "underline",
      icon: "icon-underline",
      label: "Underline"
    }
  }
], ot = [
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Undo",
    name: "Undo Tiptap Toolbar Extension",
    api: () => import("./undo.tiptap-toolbar-api-C1DHxM5n.js"),
    element: () => import("./tiptap-toolbar-button-disabled.element-BFbRh7BX.js"),
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
    name: "Redo Tiptap Toolbar Extension",
    api: () => import("./redo.tiptap-toolbar-api-CqRmh6hA.js"),
    element: () => import("./tiptap-toolbar-button-disabled.element-BFbRh7BX.js"),
    meta: {
      alias: "redo",
      icon: "icon-redo",
      label: "#buttons_redo"
    }
  }
], nt = [
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.SourceEditor",
    name: "Source Editor Tiptap Toolbar Extension",
    api: () => import("./source-editor.tiptap-toolbar-api-CwjYmLIE.js"),
    meta: {
      alias: "umbSourceEditor",
      icon: "icon-code-xml",
      label: "#general_viewSourceCode"
    }
  }
], pt = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.WordCount",
    name: "Word Count Tiptap Extension",
    api: () => import("./word-count.tiptap-api-bez6kdME.js"),
    meta: {
      icon: "icon-speed-gauge",
      label: "Word Count",
      group: "#tiptap_extGroup_interactive"
    }
  },
  {
    type: "tiptapStatusbarExtension",
    alias: "Umb.Tiptap.Statusbar.WordCount",
    name: "Word Count Tiptap Statusbar Extension",
    element: () => import("./word-count.tiptap-statusbar-element-DOmLAO_4.js"),
    forExtensions: ["Umb.Tiptap.WordCount"],
    meta: {
      alias: "wordCount",
      icon: "icon-speed-gauge",
      label: "Word Count"
    }
  }
], lt = [l, r, s, m], rt = [
  ...lt,
  ...b,
  ...T,
  ...c,
  ...d,
  ...u,
  ...x,
  ...g,
  ...E,
  ...U,
  ...f,
  ...y,
  ...k,
  ..._,
  ...h,
  ...A,
  ...M,
  ...I,
  ...S,
  ...C,
  ...B,
  ...H,
  ...L,
  ...w,
  ...P,
  ...$,
  ...R,
  ...D,
  ...G,
  ...v,
  ...z,
  ...F,
  ...O,
  ...X,
  ...Y,
  ...Z,
  ...tt,
  ...at,
  ...it,
  ...et,
  ...ot,
  ...nt,
  ...pt
], st = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Tiptap.ExtensionsConfiguration",
    name: "Tiptap Extensions Property Editor UI",
    element: () => import("./property-editor-ui-tiptap-extensions-configuration.element-Bm1Trz-H.js"),
    meta: {
      label: "Tiptap Extensions Configuration",
      icon: "icon-autofill",
      group: "common"
    }
  }
], mt = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Tiptap.StatusbarConfiguration",
    name: "Tiptap Statusbar Property Editor UI",
    element: () => import("./property-editor-ui-tiptap-statusbar-configuration.element-C4GZPoSm.js"),
    meta: {
      label: "Tiptap Statusbar Configuration",
      icon: "icon-autofill",
      group: "common"
    }
  }
], bt = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Tiptap",
    name: "Rich Text Editor [Tiptap] Property Editor UI",
    element: () => import("./property-editor-ui-tiptap.element-BZm6NQf-.js"),
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
  }
], Tt = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Tiptap.ToolbarConfiguration",
    name: "Tiptap Toolbar Property Editor UI",
    element: () => import("./property-editor-ui-tiptap-toolbar-configuration.element-CDXo_UNS.js"),
    meta: {
      label: "Tiptap Toolbar Configuration",
      icon: "icon-autofill",
      group: "common"
    }
  }
], ct = [
  ...st,
  ...mt,
  ...bt,
  ...Tt
], ut = [...rt, ...ct];
export {
  ut as manifests
};
//# sourceMappingURL=manifests.js.map
