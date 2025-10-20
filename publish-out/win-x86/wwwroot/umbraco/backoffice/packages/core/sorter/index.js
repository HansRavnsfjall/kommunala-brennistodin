import { isWithinRect as A } from "@umbraco-cms/backoffice/utils";
import { UmbControllerBase as T } from "@umbraco-cms/backoffice/class-api";
const R = 50, D = 16;
function x(r, t) {
  if (!r || !r.getBoundingClientRect) return null;
  let s = r;
  for (; s; ) {
    if (s.clientWidth < s.scrollWidth || s.clientHeight < s.scrollHeight) {
      const i = getComputedStyle(s);
      if (s.clientHeight < s.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll") || s.clientWidth < s.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll"))
        return !s.getBoundingClientRect || s === document.body ? null : s;
    }
    if (s.parentNode === document)
      return null;
    s.parentNode instanceof ShadowRoot ? s = s.parentNode.host : s = s.parentNode;
  }
  return null;
}
function P(r, t) {
  const s = t.split(",");
  s.push('[draggable="false"]'), s.forEach(function(i) {
    r.querySelectorAll(i.trim()).forEach(X);
  });
}
function F(r, t) {
  const s = t.split(",");
  s.push('[draggable="false"]'), s.forEach(function(i) {
    r.querySelectorAll(i.trim()).forEach(B);
  });
}
function X(r) {
  r.draggable = !1;
}
function B(r) {
  r.draggable = !1;
}
class e extends T {
  constructor(t, s) {
    super(t), this.#r = !1, this.#t = [], this.#l = !0, this.#n = 0, this.#s = 0, this.#o = Array(), this.#q = () => {
      if (this.#r === !1 || this.#i)
        return;
      const i = this.#e.containerSelector ? this.#v.shadowRoot.querySelector(this.#e.containerSelector) : this.#v;
      if (!i)
        throw this.#e.containerSelector ? new Error(
          `Sorter could not find the container element, using this query selector '${this.#e.containerSelector}'.`
        ) : new Error("Sorter could not get its host element.");
      this.#i = i, this.#E = this.#i === this.#v;
      const n = this.#E ? this.#i.shadowRoot ?? this.#i : this.#i;
      n.addEventListener("dragover", this.#R), n.addEventListener("drop", this.#y), this.#m.disconnect(), n.querySelectorAll(this.#e.itemSelector).forEach((a) => {
        a.matches && a.matches(this.#e.itemSelector) && this.setupItem(a);
      }), this.#m.observe(n, {
        childList: !0,
        subtree: !1
      });
    }, this.#R = async (i) => {
      const n = await this.#X(i), a = e.dropSorter;
      if (!(!a || a.identifier !== this.identifier))
        if (a === this) {
          i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "move"), this.#S(i, n), i.stopPropagation();
          return;
        } else {
          if (this.updateAllowIndication(e.activeItem) === !1)
            return;
          e.dropSorter = this, i.stopPropagation();
        }
    }, this.#y = async (i) => {
      this.#w();
    }, this.#M = (i) => {
      const n = i.target, a = i.composedPath();
      if (this.#e.ignorerSelector) {
        if (n.matches(this.#e.ignorerSelector))
          return;
        const h = a.indexOf(n), o = h !== -1 ? a.slice(0, h) : void 0;
        if (o && o.some(
          (E) => E.matches?.('[draggable="false"],' + this.#e.ignorerSelector)
        ))
          return;
      }
      if (i.target && i.button === 0) {
        const h = this.#B(i.target);
        if (!h) return;
        const o = this.#u(h);
        if (!o) return;
        o.addEventListener("mouseup", this.#A), o.draggable = !0;
      }
    }, this.#A = (i) => {
      const n = i.target;
      n && (n.removeEventListener("mouseup", this.#A), n.draggable = !1);
    }, this.#D = (i) => {
      const n = i.target.closest(this.#e.itemSelector);
      if (!n) return;
      e.activeElement && e.activeElement !== n && (console.error("drag start ws cancelled due to another drag was still active"), this.#d()), this.#c || (this.#c = x(this.#i));
      const a = this.#i.getBoundingClientRect();
      if (this.#i.style.minHeight = a.height + "px", this.#P(n), window.addEventListener("mouseup", this.#a), window.addEventListener("mouseout", this.#a), window.addEventListener("mouseleave", this.#a), window.addEventListener("mousemove", this.#p), e.activeItem = this.getItemOfElement(e.activeElement), !e.activeItem) {
        console.error("Could not find item related to this element.", e.activeElement);
        return;
      }
      const h = this.#e.getUniqueOfModel(e.activeItem);
      if (i.stopPropagation(), i.dataTransfer) {
        const o = e.activeDragElement ?? n, u = o.getBoundingClientRect();
        i.dataTransfer.setDragImage(o, i.clientX - u.x, i.clientY - u.y), i.dataTransfer.dropEffect = "move", i.dataTransfer.effectAllowed = "all", i.dataTransfer.setData("text/umb-sorter-identifier#" + this.identifier.toString(), "true"), i.dataTransfer.setData("text/umb-sorter-item-unique#" + h?.toString(), "true");
      }
      return e.originalSorter = this, e.originalIndex = this.#t.findIndex((o) => this.#e.getUniqueOfModel(o) === h), e.activeIndex = e.originalIndex, e.activeDragElement.style.transform = "translateZ(0)", this.#e.dataTransferResolver && this.#e.dataTransferResolver(i.dataTransfer, e.activeItem), this.#e.onStart && this.#e.onStart({
        item: e.activeItem,
        element: e.activeElement
      }), e.activeSorter = this, e.dropSorter = this, e.rqaId = requestAnimationFrame(() => {
        e.rqaId = void 0, e.activeDragElement && (e.activeDragElement.style.transform = "");
      }), !0;
    }, this.#d = (i) => {
      e.originalSorter && i?.dataTransfer != null && i.dataTransfer.dropEffect === "none" ? e.originalSorter.moveItemInModel(
        e.originalIndex ?? 0,
        e.activeSorter
      ) : e.originalSorter, this.#w();
    }, this.#p = (i) => {
      i.buttons === 0 && this.#w();
    }, this.#a = (i) => {
      this.#w();
    }, this.#x = () => {
      if (e.rqaId = void 0, !e.activeItem)
        return;
      if (e.dropSorter !== this)
        throw new Error("Drop sorter is not this sorter");
      const i = e.activeElement?.getBoundingClientRect() ?? new DOMRect(0, 0, 0, 0);
      if (A(this.#n, this.#s, i))
        return;
      const a = this.#E ? this.#i.shadowRoot ?? this.#i : this.#i, h = Array.from(a.querySelectorAll(this.#e.itemSelector)), o = this.#i.getBoundingClientRect(), u = [];
      let E = !1;
      for (const l of h) {
        const c = l.getBoundingClientRect();
        if (this.#s >= c.top && this.#s <= c.bottom) {
          const g = this.#u(l);
          if (g) {
            const I = g.getBoundingClientRect();
            l !== e.activeElement ? u.push({ el: l, dragRect: I }) : E = !0;
          }
        }
      }
      let y = 1 / 0, p, d, v = !1;
      u.forEach((l) => {
        const c = l.dragRect.left + l.dragRect.width * 0.5, g = Math.abs(this.#n - c);
        g < y && (p = l.el, d = l.dragRect, y = g, v = this.#n > c);
      });
      const L = this.#e.getUniqueOfModel(e.activeItem);
      let f = this.#t.findIndex((l) => this.#e.getUniqueOfModel(l) === L);
      if (f === -1 && (f = null), p) {
        if (p === e.activeElement)
          return;
        const l = this.getItemOfElement(p);
        if (!l)
          throw new Error("Could not find model of found element");
        let c = this.#t.indexOf(l);
        if (c === -1 && (c = null), f !== null && c !== null) {
          const m = Math.max(d.width - i.width, 0);
          f < c && d.left + m < this.#n ? v = !0 : f > c && d.right - m > this.#n && (v = !1);
        }
        const g = this.#e.resolvePlacement ? this.#e.resolvePlacement({
          containerElement: this.#i,
          containerRect: o,
          item: e.activeItem,
          itemIndex: f,
          element: e.activeElement,
          elementRect: i,
          relatedElement: p,
          relatedModel: l,
          relatedRect: d,
          relatedIndex: c,
          placeholderIsInThisRow: E,
          horizontalPlaceAfter: v,
          pointerX: this.#n,
          pointerY: this.#s
        }) : !0;
        if (g === null)
          return;
        let I = !0;
        if (typeof g == "object")
          I = g.verticalDirection ?? !1, v = g.placeAfter;
        else if (I = g ?? !1, I === !0 && (v = this.#s > d.top + d.height * 0.5, f !== null && c !== null)) {
          const m = Math.max(d.height - i.height, 0);
          f < c && this.#s > d.top + m ? v = !0 : f > c && this.#s < d.bottom - m && (v = !1);
        }
        if (I === !0) {
          let m;
          if (v === !1) {
            let q = d.left;
            u.map((w) => {
              w.dragRect.left < q && (q = w.dragRect.left, m = w.el);
            });
          } else {
            let q = d.right;
            u.map((w) => {
              w.dragRect.right > q && (q = w.dragRect.right, m = w.el);
            });
          }
          m && (p = m);
        }
        const M = h.indexOf(p), O = v ? M + 1 : M;
        this.#g(O);
        return;
      }
      if (this.updateAllowIndication(e.activeItem) !== !1) {
        if (this.#t.length === 0)
          this.#g(0);
        else if (this.#s < o.top)
          this.#g(0);
        else if (this.#s > o.bottom)
          this.#g(-1);
        else if (this.#t.length > 1 && f !== null) {
          const c = this.#s > i.bottom === !1 ? this.#I(0, f) : this.#I(f, this.#t.length);
          c && this.#g(c);
        }
      }
    }, this.#f = null, this.#h = document.scrollingElement || document.documentElement, this.autoScrollX = 0, this.autoScrollY = 0, this.#L = () => {
      this.#h.scrollLeft += this.autoScrollX * D, this.#h.scrollTop += this.autoScrollY * D, this.#f = requestAnimationFrame(this.#L);
    }, this.#v = t, s.identifier ??= Symbol(), s.ignorerSelector ??= "a,img,iframe,input,textarea,select,option", !s.placeholderClass && !s.placeholderAttr && (s.placeholderAttr = "drag-placeholder"), this.#e = s, t.addUmbController(this), this.#m = new MutationObserver((i) => {
      i.forEach((n) => {
        n.addedNodes.forEach((a) => {
          a.matches && a.matches(this.#e.itemSelector) && this.setupItem(a);
        }), n.removedNodes.forEach((a) => {
          a.matches && a.matches(this.#e.itemSelector) && this.destroyItem(a);
        });
      });
    });
  }
  #v;
  #r;
  #e;
  #m;
  #t;
  #i;
  #E;
  #c;
  #l;
  #n;
  #s;
  #o;
  get identifier() {
    return this.#e.identifier;
  }
  set identifier(t) {
    this.#e.identifier = t;
  }
  #F() {
    return e.activeSorter?.identifier === this.identifier;
  }
  /**
   * Enables the sorter, this will allow sorting to happen.
   * @returns {*}  {void}
   * @memberof UmbSorterController
   */
  enable() {
    this.#l || (this.#l = !0, this.#r && requestAnimationFrame(this.#q));
  }
  /**
   * Disables the sorter, this will prevent any sorting to happen.
   * @returns {*}  {void}
   * @memberof UmbSorterController
   */
  disable() {
    this.#l && (this.#l = !1, this.#r && this.#O());
  }
  setModel(t) {
    this.#t = t ?? [];
  }
  /**
   * Returns the model of the sorter.
   * @returns {Array<T>} The model of this sorter.
   * @memberof UmbSorterController
   */
  getModel() {
    return this.#t;
  }
  hasItem(t) {
    return this.#t.find((s) => this.#e.getUniqueOfModel(s) === t) !== void 0;
  }
  getItem(t) {
    return this.#t.find((s) => this.#e.getUniqueOfModel(s) === t);
  }
  hostConnected() {
    this.#r || (this.#r = !0, this.#l && requestAnimationFrame(this.#q));
  }
  hostDisconnected() {
    this.#r = !1, this.#l && this.#O();
  }
  #q;
  #O() {
    if (e.activeSorter === this && (e.activeSorter = void 0, e.activeElement && this.#d()), e.dropSorter === this && (e.dropSorter = void 0), e.lastIndicationSorter === this && (e.lastIndicationSorter = void 0), this.#m.disconnect(), this.#c = null, this.#i) {
      const t = this.#E ? this.#i.shadowRoot ?? this.#i : this.#i;
      t.removeEventListener("dragover", this.#R), t.removeEventListener("drop", this.#y), this.#i = void 0;
    }
    this.#o.forEach((t) => this.destroyItem(t));
  }
  async #X(t) {
    if (!e.dropSorter && t.dataTransfer?.types.includes("text/umb-sorter-identifier#" + this.identifier.toString())) {
      const s = t.dataTransfer?.types.find(
        (i) => i.startsWith("text/umb-sorter-item-unique#")
      );
      if (s) {
        const i = s.split("#")?.[1];
        let n = this.#t.find((a) => this.#e.getUniqueOfModel(a) === i);
        return n && (e.activeSorter = this), !n && (n = await this.#e.onRequestDrop?.({ unique: i }), e.activeSorter = void 0, !n) || this.hasItem(i) ? !1 : (t.dataTransfer.setData("text/umb-sorter-item-accepted", "true"), e.activeItem = n, e.activeElement = void 0, e.activeDragElement = void 0, e.dropSorter = this, e.originalIndex = void 0, e.originalSorter = void 0, window.addEventListener("mouseup", this.#a), window.addEventListener("mouseout", this.#a), window.addEventListener("mouseleave", this.#a), window.addEventListener("mousemove", this.#p), this.#c || (this.#c = x(this.#i)), !0);
      }
    }
    return !1;
  }
  #R;
  #y;
  #u(t) {
    return this.#e.draggableSelector ? (t.shadowRoot ?? t).querySelector(this.#e.draggableSelector) ?? t : t;
  }
  #T(t) {
    return this.#e.handleSelector ? (t.shadowRoot ?? t).querySelector(this.#e.handleSelector) ?? t : t;
  }
  #B(t) {
    let s = t, i = null;
    for (; !i; )
      if (i = s.closest(this.#e.itemSelector), !i) {
        const n = s.getRootNode().host, a = s === n ? s.parentElement?.getRootNode()?.host : n;
        if (a)
          s = a;
        else
          return null;
      }
    return i;
  }
  setupItem(t) {
    if (this.#o.includes(t)) {
      console.error("Element already setup", t);
      return;
    }
    if (this.#e.ignorerSelector && P(t, this.#e.ignorerSelector), !this.#e.disabledItemSelector || !t.matches(this.#e.disabledItemSelector)) {
      const s = this.#u(t);
      this.#T(t).addEventListener("mousedown", this.#M), s.draggable = !1, s.addEventListener("dragstart", this.#D), s.addEventListener("dragend", this.#d);
    }
    if (e.activeItem && this.#F()) {
      const s = this.#e.getUniqueOfElement(t), i = this.#e.getUniqueOfModel(e.activeItem);
      s === i && s !== void 0 && e.activeElement !== t && this.#P(t);
    }
    this.#o.push(t), this.#o = Array.from(new Set(this.#o));
  }
  destroyItem(t) {
    this.#e.ignorerSelector && F(t, this.#e.ignorerSelector);
    const s = this.#u(t);
    s.removeEventListener("dragstart", this.#D), s.removeEventListener("dragend", this.#d), this.#T(t).removeEventListener("mousedown", this.#M), s.draggable = !1, this.#o = this.#o.filter((n) => n !== t);
  }
  #H() {
    this.#e.placeholderClass && e.activeElement?.classList.add(this.#e.placeholderClass), this.#e.placeholderAttr && e.activeElement?.setAttribute(this.#e.placeholderAttr, "");
  }
  #Y() {
    this.#e.placeholderClass && e.activeElement?.classList.remove(this.#e.placeholderClass), this.#e.placeholderAttr && e.activeElement?.removeAttribute(this.#e.placeholderAttr);
  }
  #P(t) {
    if (e.activeElement = t, e.activeDragElement = this.#u(t), !e.activeDragElement)
      throw new Error(
        'Could not find drag element, query was made with the `draggableSelector` of "' + this.#e.draggableSelector + '"'
      );
    this.#H();
  }
  #M;
  #A;
  #D;
  #d;
  #p;
  #a;
  #w() {
    if (this.#W(), this.#z(), this.removeAllowIndication(), e.activeElement && e.activeItem) {
      const t = e.activeElement;
      this.#e.onEnd && this.#e.onEnd({
        item: e.activeItem,
        element: t
      });
    }
    e.activeDragElement && (e.activeDragElement.style.transform = "", e.activeDragElement.draggable = !1, e.activeDragElement.removeEventListener("dragend", this.#d)), this.#Y(), e.rqaId && (cancelAnimationFrame(e.rqaId), e.rqaId = void 0), e.activeItem = void 0, e.activeElement = void 0, e.activeDragElement = void 0, e.activeSorter = void 0, e.dropSorter = void 0, e.originalIndex = void 0, e.originalSorter = void 0, this.#n = 0, this.#s = 0;
  }
  #W() {
    this.#i && (this.#i.style.minHeight = ""), window.removeEventListener("mouseup", this.#a), window.removeEventListener("mouseout", this.#a), window.removeEventListener("mouseleave", this.#a), window.removeEventListener("mousemove", this.#p);
  }
  #S(t, s) {
    if (!e.activeItem)
      return;
    const i = t.touches ? t.touches[0].clientX : t.clientX, n = t.touches ? t.touches[0].clientY : t.clientY;
    if (i !== 0 && n !== 0) {
      if (this.#n === i && this.#s === n)
        return;
      if (this.#n = i, this.#s = n, this.handleAutoScroll(this.#n, this.#s), s) {
        this.#x();
        return;
      }
      const a = e.activeDragElement?.getBoundingClientRect();
      (a ? A(this.#n, this.#s, a) : !1) || e.rqaId === void 0 && (e.rqaId = requestAnimationFrame(this.#x));
    }
  }
  #x;
  #I(t, s) {
    if (t === s)
      return t;
    const i = t + Math.round((s - t) * 0.5);
    if (i === t || i === s)
      return s;
    const n = this.#N(i);
    if (n === null)
      throw new Error("Could not determine if below target");
    return n ? this.#I(i, s) : this.#I(t, i);
  }
  #N(t) {
    if (t > 0 && t < this.#t.length) {
      const s = this.getElementOfItem(this.#t[t]);
      if (s)
        return this.#s > s?.getBoundingClientRect().bottom;
    }
    return null;
  }
  //
  // TODO: Should rename to move item to.. [NL]
  async #g(t) {
    if (!e.activeItem)
      return;
    const s = e.dropSorter;
    if (!s)
      throw new Error("Could not find requestingSorter");
    if (s !== this)
      throw new Error("Requesting sorter is not this sorter");
    s === e.activeSorter && e.activeIndex === t || await s.moveItemInModel(t, e.activeSorter);
  }
  /** Management methods: */
  getItemOfElement(t) {
    if (!t)
      throw new Error("Element was not defined");
    const s = this.#e.getUniqueOfElement(t);
    if (s === void 0) {
      console.error("Could not find unique of element", t);
      return;
    }
    return this.#t.find((i) => s === this.#e.getUniqueOfModel(i));
  }
  getElementOfItem(t) {
    const s = this.#e.getUniqueOfModel(t);
    if (s === void 0) {
      console.error("Sorter could not find unique of item", t);
      return;
    }
    return this.#o.find((i) => s === this.#e.getUniqueOfElement(i));
  }
  async removeItem(t) {
    if (!t)
      return !1;
    if (this.#e.performItemRemove)
      return await this.#e.performItemRemove({ item: t }) ?? !1;
    {
      const s = this.#e.getUniqueOfModel(t), i = this.#t.filter((n) => this.#e.getUniqueOfModel(n) !== s);
      if (this.#t.length !== i.length)
        return this.#t = i, this.#e.onChange?.({ model: i, item: t }), !0;
    }
    return !1;
  }
  hasOtherItemsThan(t) {
    return this.#t.filter((s) => s !== t).length > 0;
  }
  async moveItemInModel(t, s) {
    if (!e.activeItem)
      return console.error("There is no active item to move"), !1;
    const i = this.#e.getUniqueOfModel(e.activeItem);
    if (!i)
      return console.error("Failed to retrieve active item unique"), !1;
    let n;
    if (s) {
      const h = s.getItem(i);
      if (!h)
        return console.error("Could not find item of model to move", i, this.#t), !1;
      n = h;
    } else if (n = e.activeItem, !n)
      return !1;
    if (this.notifyRequestMove({ item: n }) === !1)
      return !1;
    let a = s === this;
    if (!a) {
      if (s) {
        if (await s.removeItem(n) !== !0)
          return console.error("Sorter could not remove item before moving to a new container"), !1;
      } else if (!s) {
        if (!this.#e.requestExternalRemove)
          return console.error(
            "Sorter needs the requestExternalRemove to be defined, therefor we cannot drop the external item"
          ), !1;
        if (e.activeSorter = this, s = this, await this.#e.requestExternalRemove({ item: n }) !== !0)
          return console.error("Sorter could not remove the item before moving to a new container"), !1;
        if (await this.#e.requestExternalInsert?.({ item: n }) !== !0)
          return console.error("Sorter could not insert the item into the new container"), !1;
        this.#t.find((h) => this.#e.getUniqueOfModel(h) === i) && (a = !0);
      }
    }
    if (!a) {
      if (this.#e.performItemInsert) {
        if (await this.#e.performItemInsert({ item: n, newIndex: t }) === !1)
          return console.error("Sync could not insert after a move a new container"), !1;
        e.activeSorter = this, e.dropSorter = this, e.activeIndex = this.#t.findIndex((o) => this.#e.getUniqueOfModel(o) === i) ?? 0;
      } else {
        const h = [...this.#t];
        h.splice(t, 0, n), this.#t = h, this.#e.onContainerChange?.({
          model: h,
          item: n,
          from: s
        }), this.#e.onChange?.({ model: h, item: n }), e.activeSorter = this, e.dropSorter = this, e.activeIndex = t;
      }
      return !0;
    }
    if (a) {
      const h = this.#t.findIndex((o) => this.#e.getUniqueOfModel(o) === i);
      if (h === -1)
        return console.error("Could not find item in model when performing internal move", this.getHostElement(), this.#t), !1;
      if (this.#e.performItemMove) {
        if (await this.#e.performItemMove({ item: n, newIndex: t, oldIndex: h }) === !1)
          return !1;
      } else {
        const o = [...this.#t];
        o.splice(h, 1), h <= t && t--, o.splice(t, 0, n), this.#t = o, this.#e.onChange?.({ model: o, item: n });
      }
      e.activeIndex = t;
    }
    return !0;
  }
  updateAllowIndication(t) {
    return e.lastIndicationSorter && e.lastIndicationSorter !== this && e.lastIndicationSorter.notifyAllowed(), e.lastIndicationSorter = this, this.notifyRequestMove({ item: t }) === !0 ? (this.notifyAllowed(), !0) : (this.notifyDisallowed(), !1);
  }
  removeAllowIndication() {
    e.lastIndicationSorter && e.lastIndicationSorter.notifyAllowed(), e.lastIndicationSorter = void 0;
  }
  #f;
  #h;
  handleAutoScroll(t, s) {
    let i = null;
    this.#c ? (this.#h = this.#c, i = this.#h.getBoundingClientRect()) : (this.#h = document.scrollingElement || document.documentElement, i = {
      top: 0,
      left: 0,
      bottom: window.innerHeight,
      right: window.innerWidth,
      height: window.innerHeight,
      width: window.innerWidth
    });
    const n = this.#h.scrollWidth, a = this.#h.scrollHeight, h = i.width < n, o = i.height < a, u = this.#h.scrollLeft, E = this.#h.scrollTop;
    cancelAnimationFrame(this.#f), (h || o) && (this.autoScrollX = Math.abs(i.right - t) <= R && u + i.width < n ? 1 : Math.abs(i.left - t) <= R && u ? -1 : 0, this.autoScrollY = Math.abs(i.bottom - s) <= R && E + i.height < a ? 1 : Math.abs(i.top - s) <= R && E ? -1 : 0, this.#f = requestAnimationFrame(this.#L));
  }
  #L;
  #z() {
    cancelAnimationFrame(this.#f), this.#f = null;
  }
  notifyDisallowed() {
    this.#e.onDisallowed && this.#e.onDisallowed({
      item: e.activeItem,
      element: e.activeElement
    });
  }
  notifyAllowed() {
    this.#e.onAllowed && this.#e.onAllowed({
      item: e.activeItem,
      element: e.activeElement
    });
  }
  notifyRequestMove(t) {
    return this.#e.onRequestMove ? this.#e.onRequestMove(t) || !1 : !0;
  }
}
function W(r) {
  return r.itemIndex !== null && r.relatedIndex !== null && r.relatedRect.left < r.pointerX && r.relatedRect.right > r.pointerX ? {
    placeAfter: r.itemIndex < r.relatedIndex
  } : !1;
}
export {
  e as UmbSorterController,
  W as UmbSorterResolvePlacementAsGrid
};
//# sourceMappingURL=index.js.map
