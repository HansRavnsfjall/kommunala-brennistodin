class b extends Event {
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
class l extends Event {
  static {
    this.TYPE = "closed";
  }
  constructor() {
    super(l.TYPE, { bubbles: !1, composed: !1, cancelable: !1 });
  }
}
class d extends Event {
  constructor() {
    super("delete", { bubbles: !0, composed: !1, cancelable: !1 });
  }
}
class a extends Event {
  static {
    this.TYPE = "deselected";
  }
  constructor(e, s) {
    super(a.TYPE, { bubbles: !0, composed: !1, cancelable: !1, ...s }), this.unique = e;
  }
}
class E extends Event {
  constructor() {
    super("input", { bubbles: !0, composed: !0, cancelable: !1 });
  }
}
class n extends Event {
  static {
    this.TYPE = "opened";
  }
  constructor() {
    super(n.TYPE, { bubbles: !1, composed: !1, cancelable: !1 });
  }
}
class o extends Event {
  static {
    this.TYPE = "progress";
  }
  constructor(e) {
    super(o.TYPE, { bubbles: !0, composed: !1, cancelable: !1 }), this.progress = e;
  }
}
class u extends Event {
  static {
    this.TYPE = "selected";
  }
  constructor(e, s) {
    super(u.TYPE, { bubbles: !0, composed: !1, cancelable: !1, ...s }), this.unique = e;
  }
}
class r extends Event {
  static {
    this.TYPE = "selection-change";
  }
  constructor(e) {
    super(r.TYPE, { bubbles: !0, composed: !1, cancelable: !1, ...e });
  }
}
export {
  b as UmbActionExecutedEvent,
  c as UmbChangeEvent,
  l as UmbClosedEvent,
  d as UmbDeleteEvent,
  a as UmbDeselectedEvent,
  E as UmbInputEvent,
  n as UmbOpenedEvent,
  o as UmbProgressEvent,
  u as UmbSelectedEvent,
  r as UmbSelectionChangeEvent
};
//# sourceMappingURL=index.js.map
