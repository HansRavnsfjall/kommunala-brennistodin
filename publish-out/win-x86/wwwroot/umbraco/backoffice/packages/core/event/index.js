class r extends Event {
  constructor() {
    super("action-executed", { bubbles: !0, composed: !0, cancelable: !1 });
  }
}
class c extends Event {
  static {
    this.TYPE = "change";
  }
  constructor() {
    super(c.TYPE, { bubbles: !0, composed: !1, cancelable: !1 });
  }
}
class o extends Event {
  constructor() {
    super("delete", { bubbles: !0, composed: !1, cancelable: !1 });
  }
}
class l extends Event {
  static {
    this.TYPE = "deselected";
  }
  constructor(e, s) {
    super(l.TYPE, { bubbles: !0, composed: !1, cancelable: !1, ...s }), this.unique = e;
  }
}
class b extends Event {
  constructor() {
    super("input", { bubbles: !0, composed: !0, cancelable: !1 });
  }
}
class a extends Event {
  static {
    this.TYPE = "progress";
  }
  constructor(e) {
    super(a.TYPE, { bubbles: !0, composed: !1, cancelable: !1 }), this.progress = e;
  }
}
class n extends Event {
  static {
    this.TYPE = "selected";
  }
  constructor(e, s) {
    super(n.TYPE, { bubbles: !0, composed: !1, cancelable: !1, ...s }), this.unique = e;
  }
}
class u extends Event {
  static {
    this.TYPE = "selection-change";
  }
  constructor(e) {
    super(u.TYPE, { bubbles: !0, composed: !1, cancelable: !1, ...e });
  }
}
export {
  r as UmbActionExecutedEvent,
  c as UmbChangeEvent,
  o as UmbDeleteEvent,
  l as UmbDeselectedEvent,
  b as UmbInputEvent,
  a as UmbProgressEvent,
  n as UmbSelectedEvent,
  u as UmbSelectionChangeEvent
};
//# sourceMappingURL=index.js.map
