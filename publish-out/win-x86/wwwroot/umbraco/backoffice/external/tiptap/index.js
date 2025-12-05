function ee(n) {
  this.content = n;
}
ee.prototype = {
  constructor: ee,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, s = r.find(n), i = r.content.slice();
    return s == -1 ? i.push(t || n, e) : (i[s + 1] = e, t && (i[s] = t)), new ee(i);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1) return this;
    var t = this.content.slice();
    return t.splice(e, 2), new ee(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new ee([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new ee(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var r = this.remove(e), s = r.content.slice(), i = r.find(n);
    return s.splice(i == -1 ? s.length : i, 0, e, t), new ee(s);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(n) {
    return n = ee.from(n), n.size ? new ee(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = ee.from(n), n.size ? new ee(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = ee.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
ee.from = function(n) {
  if (n instanceof ee) return n;
  var e = [];
  if (n) for (var t in n) e.push(t, n[t]);
  return new ee(e);
};
function Il(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let s = n.child(r), i = e.child(r);
    if (s == i) {
      t += s.nodeSize;
      continue;
    }
    if (!s.sameMarkup(i))
      return t;
    if (s.isText && s.text != i.text) {
      for (let o = 0; s.text[o] == i.text[o]; o++)
        t++;
      return t;
    }
    if (s.content.size || i.content.size) {
      let o = Il(s.content, i.content, t + 1);
      if (o != null)
        return o;
    }
    t += s.nodeSize;
  }
}
function Pl(n, e, t, r) {
  for (let s = n.childCount, i = e.childCount; ; ) {
    if (s == 0 || i == 0)
      return s == i ? null : { a: t, b: r };
    let o = n.child(--s), l = e.child(--i), a = o.nodeSize;
    if (o == l) {
      t -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0, u = Math.min(o.text.length, l.text.length);
      for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = Pl(o.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
class b {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, s = 0, i) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && r(a, s + l, i || null, o) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, s + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, s) {
    let i = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? s ? typeof s == "function" ? s(l) : s : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = !1 : i += r), i += c;
    }, 0), i;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, s = this.content.slice(), i = 0;
    for (t.isText && t.sameMarkup(r) && (s[s.length - 1] = t.withText(t.text + r.text), i = 1); i < e.content.length; i++)
      s.push(e.content[i]);
    return new b(s, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], s = 0;
    if (t > e)
      for (let i = 0, o = 0; o < t; i++) {
        let l = this.content[i], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), s += l.nodeSize), o = a;
      }
    return new b(r, s);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? b.empty : e == 0 && t == this.content.length ? this : new b(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let s = this.content.slice(), i = this.size + t.nodeSize - r.nodeSize;
    return s[e] = t, new b(s, i);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new b([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new b(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let s = this.content[t];
      e(s, r, t), r += s.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return Il(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return Pl(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return En(0, e);
    if (e == this.size)
      return En(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let t = 0, r = 0; ; t++) {
      let s = this.child(t), i = r + s.nodeSize;
      if (i >= e)
        return i == e ? En(t + 1, i) : En(t, r);
      r = i;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return b.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new b(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return b.empty;
    let t, r = 0;
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      r += i.nodeSize, s && i.isText && e[s - 1].sameMarkup(i) ? (t || (t = e.slice(0, s)), t[t.length - 1] = i.withText(t[t.length - 1].text + i.text)) : t && t.push(i);
    }
    return new b(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return b.empty;
    if (e instanceof b)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new b([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
b.empty = new b([], 0);
const es = { index: 0, offset: 0 };
function En(n, e) {
  return es.index = n, es.offset = e, es;
}
function Gn(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!Gn(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Gn(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let z = class Os {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      if (this.eq(i))
        return e;
      if (this.type.excludes(i.type))
        t || (t = e.slice(0, s));
      else {
        if (i.type.excludes(this.type))
          return e;
        !r && i.type.rank > this.type.rank && (t || (t = e.slice(0, s)), t.push(this), r = !0), t && t.push(i);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Gn(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    let s = r.create(t.attrs);
    return r.checkAttrs(s.attrs), s;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return Os.none;
    if (e instanceof Os)
      return [e];
    let t = e.slice();
    return t.sort((r, s) => r.type.rank - s.type.rank), t;
  }
};
z.none = [];
class Yn extends Error {
}
class w {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = Bl(this.content, e + this.openStart, t);
    return r && new w(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new w(Ll(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return w.empty;
    let r = t.openStart || 0, s = t.openEnd || 0;
    if (typeof r != "number" || typeof s != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new w(b.fromJSON(e, t.content), r, s);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, s = 0;
    for (let i = e.firstChild; i && !i.isLeaf && (t || !i.type.spec.isolating); i = i.firstChild)
      r++;
    for (let i = e.lastChild; i && !i.isLeaf && (t || !i.type.spec.isolating); i = i.lastChild)
      s++;
    return new w(e, r, s);
  }
}
w.empty = new w(b.empty, 0, 0);
function Ll(n, e, t) {
  let { index: r, offset: s } = n.findIndex(e), i = n.maybeChild(r), { index: o, offset: l } = n.findIndex(t);
  if (s == e || i.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, i.copy(Ll(i.content, e - s - 1, t - s - 1)));
}
function Bl(n, e, t, r) {
  let { index: s, offset: i } = n.findIndex(e), o = n.maybeChild(s);
  if (i == e || o.isText)
    return r && !r.canReplace(s, s, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = Bl(o.content, e - i - 1, t, o);
  return l && n.replaceChild(s, o.copy(l));
}
function tu(n, e, t) {
  if (t.openStart > n.depth)
    throw new Yn("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new Yn("Inconsistent open depths");
  return zl(n, e, t, 0);
}
function zl(n, e, t, r) {
  let s = n.index(r), i = n.node(r);
  if (s == e.index(r) && r < n.depth - t.openStart) {
    let o = zl(n, e, t, r + 1);
    return i.copy(i.content.replaceChild(s, o));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let o = n.parent, l = o.content;
      return mt(o, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = nu(t, n);
      return mt(i, Fl(n, o, l, e, r));
    }
  else return mt(i, Xn(n, e, r));
}
function Hl(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new Yn("Cannot join " + e.type.name + " onto " + n.type.name);
}
function Ns(n, e, t) {
  let r = n.node(t);
  return Hl(r, e.node(t)), r;
}
function pt(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function Yt(n, e, t, r) {
  let s = (e || n).node(t), i = 0, o = e ? e.index(t) : s.childCount;
  n && (i = n.index(t), n.depth > t ? i++ : n.textOffset && (pt(n.nodeAfter, r), i++));
  for (let l = i; l < o; l++)
    pt(s.child(l), r);
  e && e.depth == t && e.textOffset && pt(e.nodeBefore, r);
}
function mt(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function Fl(n, e, t, r, s) {
  let i = n.depth > s && Ns(n, e, s + 1), o = r.depth > s && Ns(t, r, s + 1), l = [];
  return Yt(null, n, s, l), i && o && e.index(s) == t.index(s) ? (Hl(i, o), pt(mt(i, Fl(n, e, t, r, s + 1)), l)) : (i && pt(mt(i, Xn(n, e, s + 1)), l), Yt(e, t, s, l), o && pt(mt(o, Xn(t, r, s + 1)), l)), Yt(r, null, s, l), new b(l);
}
function Xn(n, e, t) {
  let r = [];
  if (Yt(null, n, t, r), n.depth > t) {
    let s = Ns(n, e, t + 1);
    pt(mt(s, Xn(n, e, t + 1)), r);
  }
  return Yt(e, null, t, r), new b(r);
}
function nu(n, e) {
  let t = e.depth - n.openStart, s = e.node(t).copy(n.content);
  for (let i = t - 1; i >= 0; i--)
    s = e.node(i).copy(b.from(s));
  return {
    start: s.resolveNoCache(n.openStart + t),
    end: s.resolveNoCache(s.content.size - n.openEnd - t)
  };
}
class ln {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], s = e.child(t);
    return r ? e.child(t).cut(r) : s;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], s = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let i = 0; i < e; i++)
      s += r.child(i).nodeSize;
    return s;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return z.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), s = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = s, s = l;
    }
    let i = r.marks;
    for (var o = 0; o < i.length; o++)
      i[o].type.spec.inclusive === !1 && (!s || !i[o].isInSet(s.marks)) && (i = i[o--].removeFromSet(i));
    return i;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, s = e.parent.maybeChild(e.index());
    for (var i = 0; i < r.length; i++)
      r[i].type.spec.inclusive === !1 && (!s || !r[i].isInSet(s.marks)) && (r = r[i--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new Qn(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], s = 0, i = t;
    for (let o = e; ; ) {
      let { index: l, offset: a } = o.content.findIndex(i), c = i - a;
      if (r.push(o, l, s + a), !c || (o = o.child(l), o.isText))
        break;
      i = c - 1, s += a + 1;
    }
    return new ln(t, r, i);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    let r = Xi.get(e);
    if (r)
      for (let i = 0; i < r.elts.length; i++) {
        let o = r.elts[i];
        if (o.pos == t)
          return o;
      }
    else
      Xi.set(e, r = new ru());
    let s = r.elts[r.i] = ln.resolve(e, t);
    return r.i = (r.i + 1) % su, s;
  }
}
class ru {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const su = 12, Xi = /* @__PURE__ */ new WeakMap();
class Qn {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const iu = /* @__PURE__ */ Object.create(null);
let Oe = class vs {
  /**
  @internal
  */
  constructor(e, t, r, s = z.none) {
    this.type = e, this.attrs = t, this.marks = s, this.content = r || b.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, r, s = 0) {
    this.content.nodesBetween(e, t, r, s, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(e, t, r, s) {
    return this.content.textBetween(e, t, r, s);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, r) {
    return this.type == e && Gn(this.attrs, t || e.defaultAttrs || iu) && z.sameSet(this.marks, r || z.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new vs(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new vs(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return w.empty;
    let s = this.resolve(e), i = this.resolve(t), o = r ? 0 : s.sharedDepth(t), l = s.start(o), c = s.node(o).content.cut(s.pos - l, i.pos - l);
    return new w(c, s.depth - o, i.depth - o);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, r) {
    return tu(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: s } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (s == e || t.isText)
        return t;
      e -= s + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let s = this.content.child(t - 1);
    return { node: s, index: t - 1, offset: r - s.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return ln.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return ln.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let s = !1;
    return t > e && this.nodesBetween(e, t, (i) => (r.isInSet(i.marks) && (s = !0), !s)), s;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), $l(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, r = b.empty, s = 0, i = r.childCount) {
    let o = this.contentMatchAt(e).matchFragment(r, s, i), l = o && o.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = s; a < i; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, s) {
    if (s && !this.type.allowsMarks(s))
      return !1;
    let i = this.contentMatchAt(e).matchType(r), o = i && i.matchFragment(this.content, t);
    return o ? o.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = z.none;
    for (let t = 0; t < this.marks.length; t++) {
      let r = this.marks[t];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!z.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let s = b.fromJSON(e, t.content), i = e.nodeType(t.type).create(t.attrs, s, r);
    return i.type.checkAttrs(i.attrs), i;
  }
};
Oe.prototype.text = void 0;
class Zn extends Oe {
  /**
  @internal
  */
  constructor(e, t, r, s) {
    if (super(e, t, null, s), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : $l(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new Zn(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Zn(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function $l(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class kt {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let r = new ou(e, t);
    if (r.next == null)
      return kt.empty;
    let s = Vl(r);
    r.next && r.err("Unexpected trailing text");
    let i = hu(fu(s));
    return pu(i, r), i;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, r = e.childCount) {
    let s = this;
    for (let i = t; s && i < r; i++)
      s = s.matchType(e.child(i).type);
    return s;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, r = 0) {
    let s = [this];
    function i(o, l) {
      let a = o.matchFragment(e, r);
      if (a && (!t || a.validEnd))
        return b.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < o.next.length; c++) {
        let { type: u, next: d } = o.next[c];
        if (!(u.isText || u.hasRequiredAttrs()) && s.indexOf(d) == -1) {
          s.push(d);
          let f = i(d, l.concat(u));
          if (f)
            return f;
        }
      }
      return null;
    }
    return i(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let s = r.shift(), i = s.match;
      if (i.matchType(e)) {
        let o = [];
        for (let l = s; l.type; l = l.via)
          o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < i.next.length; o++) {
        let { type: l, next: a } = i.next[o];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!s.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: s }), t[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(r) {
      e.push(r);
      for (let s = 0; s < r.next.length; s++)
        e.indexOf(r.next[s].next) == -1 && t(r.next[s].next);
    }
    return t(this), e.map((r, s) => {
      let i = s + (r.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < r.next.length; o++)
        i += (o ? ", " : "") + r.next[o].type.name + "->" + e.indexOf(r.next[o].next);
      return i;
    }).join(`
`);
  }
}
kt.empty = new kt(!0);
class ou {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function Vl(n) {
  let e = [];
  do
    e.push(lu(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function lu(n) {
  let e = [];
  do
    e.push(au(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function au(n) {
  let e = du(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = cu(n, e);
    else
      break;
  return e;
}
function Qi(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function cu(n, e) {
  let t = Qi(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = Qi(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function uu(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let s = [];
  for (let i in t) {
    let o = t[i];
    o.isInGroup(e) && s.push(o);
  }
  return s.length == 0 && n.err("No node type or group '" + e + "' found"), s;
}
function du(n) {
  if (n.eat("(")) {
    let e = Vl(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = uu(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function fu(n) {
  let e = [[]];
  return s(i(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(o, l, a) {
    let c = { term: a, to: l };
    return e[o].push(c), c;
  }
  function s(o, l) {
    o.forEach((a) => a.to = l);
  }
  function i(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((a, c) => a.concat(i(c, l)), []);
    if (o.type == "seq")
      for (let a = 0; ; a++) {
        let c = i(o.exprs[a], l);
        if (a == o.exprs.length - 1)
          return c;
        s(c, l = t());
      }
    else if (o.type == "star") {
      let a = t();
      return r(l, a), s(i(o.expr, a), a), [r(a)];
    } else if (o.type == "plus") {
      let a = t();
      return s(i(o.expr, l), a), s(i(o.expr, a), a), [r(a)];
    } else {
      if (o.type == "opt")
        return [r(l)].concat(i(o.expr, l));
      if (o.type == "range") {
        let a = l;
        for (let c = 0; c < o.min; c++) {
          let u = t();
          s(i(o.expr, a), u), a = u;
        }
        if (o.max == -1)
          s(i(o.expr, a), a);
        else
          for (let c = o.min; c < o.max; c++) {
            let u = t();
            r(a, u), s(i(o.expr, a), u), a = u;
          }
        return [r(a)];
      } else {
        if (o.type == "name")
          return [r(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Wl(n, e) {
  return e - n;
}
function Zi(n, e) {
  let t = [];
  return r(e), t.sort(Wl);
  function r(s) {
    let i = n[s];
    if (i.length == 1 && !i[0].term)
      return r(i[0].to);
    t.push(s);
    for (let o = 0; o < i.length; o++) {
      let { term: l, to: a } = i[o];
      !l && t.indexOf(a) == -1 && r(a);
    }
  }
}
function hu(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(Zi(n, 0));
  function t(r) {
    let s = [];
    r.forEach((o) => {
      n[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < s.length; u++)
          s[u][0] == l && (c = s[u][1]);
        Zi(n, a).forEach((u) => {
          c || s.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let i = e[r.join(",")] = new kt(r.indexOf(n.length - 1) > -1);
    for (let o = 0; o < s.length; o++) {
      let l = s[o][1].sort(Wl);
      i.next.push({ type: s[o][0], next: e[l.join(",")] || t(l) });
    }
    return i;
  }
}
function pu(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let s = r[t], i = !s.validEnd, o = [];
    for (let l = 0; l < s.next.length; l++) {
      let { type: a, next: c } = s.next[l];
      o.push(a.name), i && !(a.isText || a.hasRequiredAttrs()) && (i = !1), r.indexOf(c) == -1 && r.push(c);
    }
    i && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function jl(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function Kl(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let s = e && e[r];
    if (s === void 0) {
      let i = n[r];
      if (i.hasDefault)
        s = i.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = s;
  }
  return t;
}
function Ul(n, e, t, r) {
  for (let s in e)
    if (!(s in n))
      throw new RangeError(`Unsupported attribute ${s} for ${t} of type ${s}`);
  for (let s in n) {
    let i = n[s];
    i.validate && i.validate(e[s]);
  }
}
function ql(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      t[r] = new gu(n, r, e[r]);
  return t;
}
let eo = class Jl {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = ql(e, r.attrs), this.defaultAttrs = jl(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == kt.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : Kl(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Oe(this, this.computeAttrs(e), b.from(t), z.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, r) {
    return t = b.from(t), this.checkContent(t), new Oe(this, this.computeAttrs(e), t, z.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = b.from(t), t.size) {
      let o = this.contentMatch.fillBefore(t);
      if (!o)
        return null;
      t = o.append(t);
    }
    let s = this.contentMatch.matchFragment(t), i = s && s.fillBefore(b.empty, !0);
    return i ? new Oe(this, e, t.append(i), z.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Ul(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : z.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((i, o) => r[i] = new Jl(i, t, o));
    let s = t.spec.topNode || "doc";
    if (!r[s])
      throw new RangeError("Schema is missing its top node type ('" + s + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let i in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function mu(n, e, t) {
  let r = t.split("|");
  return (s) => {
    let i = s === null ? "null" : typeof s;
    if (r.indexOf(i) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${i}`);
  };
}
class gu {
  constructor(e, t, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? mu(e, t, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Lr {
  /**
  @internal
  */
  constructor(e, t, r, s) {
    this.name = e, this.rank = t, this.schema = r, this.spec = s, this.attrs = ql(e, s.attrs), this.excluded = null;
    let i = jl(this.attrs);
    this.instance = i ? new z(this, i) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new z(this, Kl(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), s = 0;
    return e.forEach((i, o) => r[i] = new Lr(i, s++, t, o)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Ul(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class _l {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let s in e)
      t[s] = e[s];
    t.nodes = ee.from(e.nodes), t.marks = ee.from(e.marks || {}), this.nodes = eo.compile(this.spec.nodes, this), this.marks = Lr.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in this.nodes) {
      if (s in this.marks)
        throw new RangeError(s + " can not be both a node and a mark");
      let i = this.nodes[s], o = i.spec.content || "", l = i.spec.marks;
      if (i.contentMatch = r[o] || (r[o] = kt.parse(o, this.nodes)), i.inlineContent = i.contentMatch.inlineContent, i.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!i.isInline || !i.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = i;
      }
      i.markSet = l == "_" ? null : l ? to(this, l.split(" ")) : l == "" || !i.inlineContent ? [] : null;
    }
    for (let s in this.marks) {
      let i = this.marks[s], o = i.spec.excludes;
      i.excluded = o == null ? [i] : o == "" ? [] : to(this, o.split(" "));
    }
    this.nodeFromJSON = (s) => Oe.fromJSON(this, s), this.markFromJSON = (s) => z.fromJSON(this, s), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, r, s) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof eo) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, s);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let r = this.nodes.text;
    return new Zn(r, r.defaultAttrs, e, z.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function to(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r], i = n.marks[s], o = i;
    if (i)
      t.push(i);
    else
      for (let l in n.marks) {
        let a = n.marks[l];
        (s == "_" || a.spec.group && a.spec.group.split(" ").indexOf(s) > -1) && t.push(o = a);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
function yu(n) {
  return n.tag != null;
}
function bu(n) {
  return n.style != null;
}
class $e {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    t.forEach((s) => {
      if (yu(s))
        this.tags.push(s);
      else if (bu(s)) {
        let i = /[^=]*/.exec(s.style)[0];
        r.indexOf(i) < 0 && r.push(i), this.styles.push(s);
      }
    }), this.normalizeLists = !this.tags.some((s) => {
      if (!/^(ul|ol)\b/.test(s.tag) || !s.node)
        return !1;
      let i = e.nodes[s.node];
      return i.contentMatch.matchType(i);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let r = new ro(this, t, !1);
    return r.addAll(e, z.none, t.from, t.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let r = new ro(this, t, !0);
    return r.addAll(e, z.none, t.from, t.to), w.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let s = r ? this.tags.indexOf(r) + 1 : 0; s < this.tags.length; s++) {
      let i = this.tags[s];
      if (wu(e, i.tag) && (i.namespace === void 0 || e.namespaceURI == i.namespace) && (!i.context || t.matchesContext(i.context))) {
        if (i.getAttrs) {
          let o = i.getAttrs(e);
          if (o === !1)
            continue;
          i.attrs = o || void 0;
        }
        return i;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, r, s) {
    for (let i = s ? this.styles.indexOf(s) + 1 : 0; i < this.styles.length; i++) {
      let o = this.styles[i], l = o.style;
      if (!(l.indexOf(e) != 0 || o.context && !r.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (o.getAttrs) {
          let a = o.getAttrs(t);
          if (a === !1)
            continue;
          o.attrs = a || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function r(s) {
      let i = s.priority == null ? 50 : s.priority, o = 0;
      for (; o < t.length; o++) {
        let l = t[o];
        if ((l.priority == null ? 50 : l.priority) < i)
          break;
      }
      t.splice(o, 0, s);
    }
    for (let s in e.marks) {
      let i = e.marks[s].spec.parseDOM;
      i && i.forEach((o) => {
        r(o = so(o)), o.mark || o.ignore || o.clearMark || (o.mark = s);
      });
    }
    for (let s in e.nodes) {
      let i = e.nodes[s].spec.parseDOM;
      i && i.forEach((o) => {
        r(o = so(o)), o.node || o.ignore || o.mark || (o.node = s);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new $e(e, $e.schemaRules(e)));
  }
}
const Gl = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, ku = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Yl = { ol: !0, ul: !0 }, an = 1, Rs = 2, Xt = 4;
function no(n, e, t) {
  return e != null ? (e ? an : 0) | (e === "full" ? Rs : 0) : n && n.whitespace == "pre" ? an | Rs : t & ~Xt;
}
class On {
  constructor(e, t, r, s, i, o) {
    this.type = e, this.attrs = t, this.marks = r, this.solid = s, this.options = o, this.content = [], this.activeMarks = z.none, this.match = i || (o & Xt ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(b.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, s;
        return (s = r.findWrapping(e.type)) ? (this.match = r, s) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & an)) {
      let r = this.content[this.content.length - 1], s;
      if (r && r.isText && (s = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let i = r;
        r.text.length == s[0].length ? this.content.pop() : this.content[this.content.length - 1] = i.withText(i.text.slice(0, i.text.length - s[0].length));
      }
    }
    let t = b.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(b.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Gl.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class ro {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let s = t.topNode, i, o = no(null, t.preserveWhitespace, 0) | (r ? Xt : 0);
    s ? i = new On(s.type, s.attrs, z.none, !0, t.topMatch || s.type.contentMatch, o) : r ? i = new On(null, null, z.none, !0, null, o) : i = new On(e.schema.topNodeType, null, z.none, !0, null, o), this.nodes = [i], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, t) {
    e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
  }
  addTextNode(e, t) {
    let r = e.nodeValue, s = this.top, i = s.options & Rs ? "full" : this.localPreserveWS || (s.options & an) > 0;
    if (i === "full" || s.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (i)
        i !== "full" ? r = r.replace(/\r?\n|\r/g, " ") : r = r.replace(/\r\n?/g, `
`);
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let o = s.content[s.content.length - 1], l = e.previousSibling;
        (!o || l && l.nodeName == "BR" || o.isText && /[ \t\r\n\u000c]$/.test(o.text)) && (r = r.slice(1));
      }
      r && this.insertNode(this.parser.schema.text(r), t, !/\S/.test(r)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t, r) {
    let s = this.localPreserveWS, i = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let o = e.nodeName.toLowerCase(), l;
    Yl.hasOwnProperty(o) && this.parser.normalizeLists && Su(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : ku.hasOwnProperty(o))
      this.findInside(e), this.ignoreFallback(e, t);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, u = this.needsBlock;
      if (Gl.hasOwnProperty(o))
        i.content.length && i.content[0].isInline && this.open && (this.open--, i = this.top), c = !0, i.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, t);
        break e;
      }
      let d = a && a.skip ? t : this.readStyles(e, t);
      d && this.addAll(e, d), c && this.sync(i), this.needsBlock = u;
    } else {
      let c = this.readStyles(e, t);
      c && this.addElementByRule(e, a, c, a.consuming === !1 ? l : void 0);
    }
    this.localPreserveWS = s;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, t) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
  }
  // Called for ignored nodes
  ignoreFallback(e, t) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t, !0);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, t) {
    let r = e.style;
    if (r && r.length)
      for (let s = 0; s < this.parser.matchedStyles.length; s++) {
        let i = this.parser.matchedStyles[s], o = r.getPropertyValue(i);
        if (o)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(i, o, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? t = t.filter((c) => !a.clearMark(c)) : t = t.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return t;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, r, s) {
    let i, o;
    if (t.node)
      if (o = this.parser.schema.nodes[t.node], o.isLeaf)
        this.insertNode(o.create(t.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      else {
        let a = this.enter(o, t.attrs || null, r, t.preserveWhitespace);
        a && (i = !0, r = a);
      }
    else {
      let a = this.parser.schema.marks[t.mark];
      r = r.concat(a.create(t.attrs));
    }
    let l = this.top;
    if (o && o.isLeaf)
      this.findInside(e);
    else if (s)
      this.addElement(e, r, s);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, r, !1));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a, r), this.findAround(e, a, !1);
    }
    i && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r, s) {
    let i = r || 0;
    for (let o = r ? e.childNodes[r] : e.firstChild, l = s == null ? null : e.childNodes[s]; o != l; o = o.nextSibling, ++i)
      this.findAtPoint(e, i), this.addDOM(o, t);
    this.findAtPoint(e, i);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, t, r) {
    let s, i;
    for (let o = this.open, l = 0; o >= 0; o--) {
      let a = this.nodes[o], c = a.findWrapping(e);
      if (c && (!s || s.length > c.length + l) && (s = c, i = a, !c.length))
        break;
      if (a.solid) {
        if (r)
          break;
        l += 2;
      }
    }
    if (!s)
      return null;
    this.sync(i);
    for (let o = 0; o < s.length; o++)
      t = this.enterInner(s[o], null, t, !1);
    return t;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, t, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let i = this.textblockFromContext();
      i && (t = this.enterInner(i, null, t));
    }
    let s = this.findPlace(e, t, r);
    if (s) {
      this.closeExtra();
      let i = this.top;
      i.match && (i.match = i.match.matchType(e.type));
      let o = z.none;
      for (let l of s.concat(e.marks))
        (i.type ? i.type.allowsMarkType(l.type) : io(l.type, e.type)) && (o = l.addToSet(o));
      return i.content.push(e.mark(o)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r, s) {
    let i = this.findPlace(e.create(t), r, !1);
    return i && (i = this.enterInner(e, t, r, !0, s)), i;
  }
  // Open a node of the given type
  enterInner(e, t, r, s = !1, i) {
    this.closeExtra();
    let o = this.top;
    o.match = o.match && o.match.matchType(e);
    let l = no(e, i, o.options);
    o.options & Xt && o.content.length == 0 && (l |= Xt);
    let a = z.none;
    return r = r.filter((c) => (o.type ? o.type.allowsMarkType(c.type) : io(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new On(e, t, a, s, null, l)), this.open++, r;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--) {
      if (this.nodes[t] == e)
        return this.open = t, !0;
      this.localPreserveWS && (this.nodes[t].options |= an);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let s = r.length - 1; s >= 0; s--)
        e += r[s].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let s = 0; s < this.find.length; s++)
        this.find[s].pos == null && e.nodeType == 1 && e.contains(this.find[s].node) && t.compareDocumentPosition(this.find[s].node) & (r ? 2 : 4) && (this.find[s].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, s = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), i = -(r ? r.depth + 1 : 0) + (s ? 0 : 1), o = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= i; a--)
            if (o(l - 1, a))
              return !0;
          return !1;
        } else {
          let u = a > 0 || a == 0 && s ? this.nodes[a].type : r && a >= i ? r.node(a - i).type : null;
          if (!u || u.name != c && !u.isInGroup(c))
            return !1;
          a--;
        }
      }
      return !0;
    };
    return o(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function Su(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && Yl.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function wu(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function so(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function io(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let s = t[r];
    if (!s.allowsMarkType(n))
      continue;
    let i = [], o = (l) => {
      i.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: u } = l.edge(a);
        if (c == e || i.indexOf(u) < 0 && o(u))
          return !0;
      }
    };
    if (o(s.contentMatch))
      return !0;
  }
}
class Tt {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, r) {
    r || (r = ts(t).createDocumentFragment());
    let s = r, i = [];
    return e.forEach((o) => {
      if (i.length || o.marks.length) {
        let l = 0, a = 0;
        for (; l < i.length && a < o.marks.length; ) {
          let c = o.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(i[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < i.length; )
          s = i.pop()[1];
        for (; a < o.marks.length; ) {
          let c = o.marks[a++], u = this.serializeMark(c, o.isInline, t);
          u && (i.push([c, s]), s.appendChild(u.dom), s = u.contentDOM || u.dom);
        }
      }
      s.appendChild(this.serializeNodeInner(o, t));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: s } = Wn(ts(t), this.nodes[e.type.name](e), null, e.attrs);
    if (s) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, s);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let s = e.marks.length - 1; s >= 0; s--) {
      let i = this.serializeMark(e.marks[s], e.isInline, t);
      i && ((i.contentDOM || i.dom).appendChild(r), r = i.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let s = this.marks[e.type.name];
    return s && Wn(ts(r), s(e, t), null, e.attrs);
  }
  static renderSpec(e, t, r = null, s) {
    return Wn(e, t, r, s);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Tt(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = oo(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return oo(e.marks);
  }
}
function oo(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function ts(n) {
  return n.document || window.document;
}
const lo = /* @__PURE__ */ new WeakMap();
function Cu(n) {
  let e = lo.get(n);
  return e === void 0 && lo.set(n, e = xu(n)), e;
}
function xu(n) {
  let e = null;
  function t(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let s = 0; s < r.length; s++)
            t(r[s]);
      else
        for (let s in r)
          t(r[s]);
  }
  return t(n), e;
}
function Wn(n, e, t, r) {
  if (typeof e == "string")
    return { dom: n.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let s = e[0], i;
  if (typeof s != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (i = Cu(r)) && i.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let o = s.indexOf(" ");
  o > 0 && (t = s.slice(0, o), s = s.slice(o + 1));
  let l, a = t ? n.createElementNS(t, s) : n.createElement(s), c = e[1], u = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    u = 2;
    for (let d in c)
      if (c[d] != null) {
        let f = d.indexOf(" ");
        f > 0 ? a.setAttributeNS(d.slice(0, f), d.slice(f + 1), c[d]) : d == "style" && a.style ? a.style.cssText = c[d] : a.setAttribute(d, c[d]);
      }
  }
  for (let d = u; d < e.length; d++) {
    let f = e[d];
    if (f === 0) {
      if (d < e.length - 1 || d > u)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else {
      let { dom: h, contentDOM: p } = Wn(n, f, t, r);
      if (a.appendChild(h), p) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = p;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const Xl = 65535, Ql = Math.pow(2, 16);
function Mu(n, e) {
  return n + e * Ql;
}
function ao(n) {
  return n & Xl;
}
function Tu(n) {
  return (n - (n & Xl)) / Ql;
}
const Zl = 1, ea = 2, jn = 4, ta = 8;
class Ds {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & ta) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (Zl | jn)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (ea | jn)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & jn) > 0;
  }
}
class pe {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && pe.empty)
      return pe.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = ao(e);
    if (!this.inverted)
      for (let s = 0; s < r; s++)
        t += this.ranges[s * 3 + 2] - this.ranges[s * 3 + 1];
    return this.ranges[r * 3] + t + Tu(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let s = 0, i = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? s : 0);
      if (a > e)
        break;
      let c = this.ranges[l + i], u = this.ranges[l + o], d = a + c;
      if (e <= d) {
        let f = c ? e == a ? -1 : e == d ? 1 : t : t, h = a + s + (f < 0 ? 0 : u);
        if (r)
          return h;
        let p = e == (t < 0 ? a : d) ? null : Mu(l / 3, e - a), m = e == a ? ea : e == d ? Zl : jn;
        return (t < 0 ? e != a : e != d) && (m |= ta), new Ds(h, m, p);
      }
      s += u - c;
    }
    return r ? e + s : new Ds(e + s, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, s = ao(t), i = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + i], u = a + c;
      if (e <= u && l == s * 3)
        return !0;
      r += this.ranges[l + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let s = 0, i = 0; s < this.ranges.length; s += 3) {
      let o = this.ranges[s], l = o - (this.inverted ? i : 0), a = o + (this.inverted ? 0 : i), c = this.ranges[s + t], u = this.ranges[s + r];
      e(l, l + c, a, a + u), i += u - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new pe(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? pe.empty : new pe(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
pe.empty = new pe([]);
class cn {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e, t, r = 0, s = e ? e.length : 0) {
    this.mirror = t, this.from = r, this.to = s, this._maps = e || [], this.ownData = !(e || t);
  }
  /**
  The step maps in this mapping.
  */
  get maps() {
    return this._maps;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new cn(this._maps, this.mirror, e, t);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), t != null && this.setMirror(this._maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, r = this._maps.length; t < e._maps.length; t++) {
      let s = e.getMirror(t);
      this.appendMap(e._maps[t], s != null && s < t ? r + s : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this._maps.length + e._maps.length; t >= 0; t--) {
      let s = e.getMirror(t);
      this.appendMap(e._maps[t].invert(), s != null && s > t ? r - s - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new cn();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this._maps[r].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let s = 0;
    for (let i = this.from; i < this.to; i++) {
      let o = this._maps[i], l = o.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(i);
        if (a != null && a > i && a < this.to) {
          i = a, e = this._maps[a].recover(l.recover);
          continue;
        }
      }
      s |= l.delInfo, e = l.pos;
    }
    return r ? e : new Ds(e, s, null);
  }
}
const ns = /* @__PURE__ */ Object.create(null);
class oe {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return pe.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = ns[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in ns)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return ns[e] = t, t.prototype.jsonID = e, t;
  }
}
class q {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new q(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new q(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, s) {
    try {
      return q.ok(e.replace(t, r, s));
    } catch (i) {
      if (i instanceof Yn)
        return q.fail(i.message);
      throw i;
    }
  }
}
function ai(n, e, t) {
  let r = [];
  for (let s = 0; s < n.childCount; s++) {
    let i = n.child(s);
    i.content.size && (i = i.copy(ai(i.content, e, i))), i.isInline && (i = e(i, t, s)), r.push(i);
  }
  return b.fromArray(r);
}
class Xe extends oe {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), s = r.node(r.sharedDepth(this.to)), i = new w(ai(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), s), t.openStart, t.openEnd);
    return q.fromReplace(e, this.from, this.to, i);
  }
  invert() {
    return new Ee(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Xe(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Xe && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Xe(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Xe(t.from, t.to, e.markFromJSON(t.mark));
  }
}
oe.jsonID("addMark", Xe);
class Ee extends oe {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new w(ai(t.content, (s) => s.mark(this.mark.removeFromSet(s.marks)), e), t.openStart, t.openEnd);
    return q.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Xe(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Ee(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Ee && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Ee(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new Ee(t.from, t.to, e.markFromJSON(t.mark));
  }
}
oe.jsonID("removeMark", Ee);
class Qe extends oe {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return q.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return q.fromReplace(e, this.pos, this.pos + 1, new w(b.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let s = 0; s < t.marks.length; s++)
          if (!t.marks[s].isInSet(r))
            return new Qe(this.pos, t.marks[s]);
        return new Qe(this.pos, this.mark);
      }
    }
    return new St(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Qe(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new Qe(t.pos, e.markFromJSON(t.mark));
  }
}
oe.jsonID("addNodeMark", Qe);
class St extends oe {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return q.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return q.fromReplace(e, this.pos, this.pos + 1, new w(b.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new Qe(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new St(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new St(t.pos, e.markFromJSON(t.mark));
  }
}
oe.jsonID("removeNodeMark", St);
class G extends oe {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, s = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = s;
  }
  apply(e) {
    return this.structure && Is(e, this.from, this.to) ? q.fail("Structure replace would overwrite content") : q.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new pe([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new G(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new G(t.pos, Math.max(t.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof G) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? w.empty : new w(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new G(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? w.empty : new w(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new G(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new G(t.from, t.to, w.fromJSON(e, t.slice), !!t.structure);
  }
}
oe.jsonID("replace", G);
class X extends oe {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, s, i, o, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = s, this.slice = i, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (Is(e, this.from, this.gapFrom) || Is(e, this.gapTo, this.to)))
      return q.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return q.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? q.fromReplace(e, this.from, this.to, r) : q.fail("Content does not fit in gap");
  }
  getMap() {
    return new pe([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new X(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), s = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), i = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || s < t.pos || i > r.pos ? null : new X(t.pos, r.pos, s, i, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new X(t.from, t.to, t.gapFrom, t.gapTo, w.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
oe.jsonID("replaceAround", X);
function Is(n, e, t) {
  let r = n.resolve(e), s = t - e, i = r.depth;
  for (; s > 0 && i > 0 && r.indexAfter(i) == r.node(i).childCount; )
    i--, s--;
  if (s > 0) {
    let o = r.node(i).maybeChild(r.indexAfter(i));
    for (; s > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, s--;
    }
  }
  return !1;
}
function Au(n, e, t, r) {
  let s = [], i = [], o, l;
  n.doc.nodesBetween(e, t, (a, c, u) => {
    if (!a.isInline)
      return;
    let d = a.marks;
    if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), h = Math.min(c + a.nodeSize, t), p = r.addToSet(d);
      for (let m = 0; m < d.length; m++)
        d[m].isInSet(p) || (o && o.to == f && o.mark.eq(d[m]) ? o.to = h : s.push(o = new Ee(f, h, d[m])));
      l && l.to == f ? l.to = h : i.push(l = new Xe(f, h, r));
    }
  }), s.forEach((a) => n.step(a)), i.forEach((a) => n.step(a));
}
function Eu(n, e, t, r) {
  let s = [], i = 0;
  n.doc.nodesBetween(e, t, (o, l) => {
    if (!o.isInline)
      return;
    i++;
    let a = null;
    if (r instanceof Lr) {
      let c = o.marks, u;
      for (; u = r.isInSet(c); )
        (a || (a = [])).push(u), c = u.removeFromSet(c);
    } else r ? r.isInSet(o.marks) && (a = [r]) : a = o.marks;
    if (a && a.length) {
      let c = Math.min(l + o.nodeSize, t);
      for (let u = 0; u < a.length; u++) {
        let d = a[u], f;
        for (let h = 0; h < s.length; h++) {
          let p = s[h];
          p.step == i - 1 && d.eq(s[h].style) && (f = p);
        }
        f ? (f.to = c, f.step = i) : s.push({ style: d, from: Math.max(l, e), to: c, step: i });
      }
    }
  }), s.forEach((o) => n.step(new Ee(o.from, o.to, o.style)));
}
function ci(n, e, t, r = t.contentMatch, s = !0) {
  let i = n.doc.nodeAt(e), o = [], l = e + 1;
  for (let a = 0; a < i.childCount; a++) {
    let c = i.child(a), u = l + c.nodeSize, d = r.matchType(c.type);
    if (!d)
      o.push(new G(l, u, w.empty));
    else {
      r = d;
      for (let f = 0; f < c.marks.length; f++)
        t.allowsMarkType(c.marks[f].type) || n.step(new Ee(l, u, c.marks[f]));
      if (s && c.isText && t.whitespace != "pre") {
        let f, h = /\r?\n|\r/g, p;
        for (; f = h.exec(c.text); )
          p || (p = new w(b.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), o.push(new G(l + f.index, l + f.index + f[0].length, p));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(b.empty, !0);
    n.replace(l, l, new w(a, 0, 0));
  }
  for (let a = o.length - 1; a >= 0; a--)
    n.step(o[a]);
}
function Ou(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function $t(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let s = n.$from.node(r), i = n.$from.index(r), o = n.$to.indexAfter(r);
    if (r < n.depth && s.canReplace(i, o, t))
      return r;
    if (r == 0 || s.type.spec.isolating || !Ou(s, i, o))
      break;
  }
  return null;
}
function Nu(n, e, t) {
  let { $from: r, $to: s, depth: i } = e, o = r.before(i + 1), l = s.after(i + 1), a = o, c = l, u = b.empty, d = 0;
  for (let p = i, m = !1; p > t; p--)
    m || r.index(p) > 0 ? (m = !0, u = b.from(r.node(p).copy(u)), d++) : a--;
  let f = b.empty, h = 0;
  for (let p = i, m = !1; p > t; p--)
    m || s.after(p + 1) < s.end(p) ? (m = !0, f = b.from(s.node(p).copy(f)), h++) : c++;
  n.step(new X(a, c, o, l, new w(u.append(f), d, h), u.size - d, !0));
}
function ui(n, e, t = null, r = n) {
  let s = vu(n, e), i = s && Ru(r, e);
  return i ? s.map(co).concat({ type: e, attrs: t }).concat(i.map(co)) : null;
}
function co(n) {
  return { type: n, attrs: null };
}
function vu(n, e) {
  let { parent: t, startIndex: r, endIndex: s } = n, i = t.contentMatchAt(r).findWrapping(e);
  if (!i)
    return null;
  let o = i.length ? i[0] : e;
  return t.canReplaceWith(r, s, o) ? i : null;
}
function Ru(n, e) {
  let { parent: t, startIndex: r, endIndex: s } = n, i = t.child(r), o = e.contentMatch.findWrapping(i.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = r; a && c < s; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function Du(n, e, t) {
  let r = b.empty;
  for (let o = t.length - 1; o >= 0; o--) {
    if (r.size) {
      let l = t[o].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = b.from(t[o].type.create(t[o].attrs, r));
  }
  let s = e.start, i = e.end;
  n.step(new X(s, i, s, i, new w(r, 0, 0), t.length, !0));
}
function Iu(n, e, t, r, s) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let i = n.steps.length;
  n.doc.nodesBetween(e, t, (o, l) => {
    let a = typeof s == "function" ? s(o) : s;
    if (o.isTextblock && !o.hasMarkup(r, a) && Pu(n.doc, n.mapping.slice(i).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre", p = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        h && !p ? c = !1 : !h && p && (c = !0);
      }
      c === !1 && ra(n, o, l, i), ci(n, n.mapping.slice(i).map(l, 1), r, void 0, c === null);
      let u = n.mapping.slice(i), d = u.map(l, 1), f = u.map(l + o.nodeSize, 1);
      return n.step(new X(d, f, d + 1, f - 1, new w(b.from(r.create(a, null, o.marks)), 0, 0), 1, !0)), c === !0 && na(n, o, l, i), !1;
    }
  });
}
function na(n, e, t, r) {
  e.forEach((s, i) => {
    if (s.isText) {
      let o, l = /\r?\n|\r/g;
      for (; o = l.exec(s.text); ) {
        let a = n.mapping.slice(r).map(t + 1 + i + o.index);
        n.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function ra(n, e, t, r) {
  e.forEach((s, i) => {
    if (s.type == s.type.schema.linebreakReplacement) {
      let o = n.mapping.slice(r).map(t + 1 + i);
      n.replaceWith(o, o + 1, e.type.schema.text(`
`));
    }
  });
}
function Pu(n, e, t) {
  let r = n.resolve(e), s = r.index();
  return r.parent.canReplaceWith(s, s + 1, t);
}
function Lu(n, e, t, r, s) {
  let i = n.doc.nodeAt(e);
  if (!i)
    throw new RangeError("No node at given position");
  t || (t = i.type);
  let o = t.create(r, null, s || i.marks);
  if (i.isLeaf)
    return n.replaceWith(e, e + i.nodeSize, o);
  if (!t.validContent(i.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new X(e, e + i.nodeSize, e + 1, e + i.nodeSize - 1, new w(b.from(o), 0, 0), 1, !0));
}
function Ve(n, e, t = 1, r) {
  let s = n.resolve(e), i = s.depth - t, o = r && r[r.length - 1] || s.parent;
  if (i < 0 || s.parent.type.spec.isolating || !s.parent.canReplace(s.index(), s.parent.childCount) || !o.type.validContent(s.parent.content.cutByIndex(s.index(), s.parent.childCount)))
    return !1;
  for (let c = s.depth - 1, u = t - 2; c > i; c--, u--) {
    let d = s.node(c), f = s.index(c);
    if (d.type.spec.isolating)
      return !1;
    let h = d.content.cutByIndex(f, d.childCount), p = r && r[u + 1];
    p && (h = h.replaceChild(0, p.type.create(p.attrs)));
    let m = r && r[u] || d;
    if (!d.canReplace(f + 1, d.childCount) || !m.type.validContent(h))
      return !1;
  }
  let l = s.indexAfter(i), a = r && r[0];
  return s.node(i).canReplaceWith(l, l, a ? a.type : s.node(i + 1).type);
}
function Bu(n, e, t = 1, r) {
  let s = n.doc.resolve(e), i = b.empty, o = b.empty;
  for (let l = s.depth, a = s.depth - t, c = t - 1; l > a; l--, c--) {
    i = b.from(s.node(l).copy(i));
    let u = r && r[c];
    o = b.from(u ? u.type.create(u.attrs, o) : s.node(l).copy(o));
  }
  n.step(new G(e, e, new w(i.append(o), t, t), !0));
}
function st(n, e) {
  let t = n.resolve(e), r = t.index();
  return sa(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function zu(n, e) {
  e.content.size || n.type.compatibleContent(e.type);
  let t = n.contentMatchAt(n.childCount), { linebreakReplacement: r } = n.type.schema;
  for (let s = 0; s < e.childCount; s++) {
    let i = e.child(s), o = i.type == r ? n.type.schema.nodes.text : i.type;
    if (t = t.matchType(o), !t || !n.type.allowsMarks(i.marks))
      return !1;
  }
  return t.validEnd;
}
function sa(n, e) {
  return !!(n && e && !n.isLeaf && zu(n, e));
}
function Br(n, e, t = -1) {
  let r = n.resolve(e);
  for (let s = r.depth; ; s--) {
    let i, o, l = r.index(s);
    if (s == r.depth ? (i = r.nodeBefore, o = r.nodeAfter) : t > 0 ? (i = r.node(s + 1), l++, o = r.node(s).maybeChild(l)) : (i = r.node(s).maybeChild(l - 1), o = r.node(s + 1)), i && !i.isTextblock && sa(i, o) && r.node(s).canReplace(l, l + 1))
      return e;
    if (s == 0)
      break;
    e = t < 0 ? r.before(s) : r.after(s);
  }
}
function Hu(n, e, t) {
  let r = null, { linebreakReplacement: s } = n.doc.type.schema, i = n.doc.resolve(e - t), o = i.node().type;
  if (s && o.inlineContent) {
    let u = o.whitespace == "pre", d = !!o.contentMatch.matchType(s);
    u && !d ? r = !1 : !u && d && (r = !0);
  }
  let l = n.steps.length;
  if (r === !1) {
    let u = n.doc.resolve(e + t);
    ra(n, u.node(), u.before(), l);
  }
  o.inlineContent && ci(n, e + t - 1, o, i.node().contentMatchAt(i.index()), r == null);
  let a = n.mapping.slice(l), c = a.map(e - t);
  if (n.step(new G(c, a.map(e + t, -1), w.empty, !0)), r === !0) {
    let u = n.doc.resolve(c);
    na(n, u.node(), u.before(), n.steps.length);
  }
  return n;
}
function Fu(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let s = r.depth - 1; s >= 0; s--) {
      let i = r.index(s);
      if (r.node(s).canReplaceWith(i, i, t))
        return r.before(s + 1);
      if (i > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let s = r.depth - 1; s >= 0; s--) {
      let i = r.indexAfter(s);
      if (r.node(s).canReplaceWith(i, i, t))
        return r.after(s + 1);
      if (i < r.node(s).childCount)
        return null;
    }
  return null;
}
function ia(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let s = t.content;
  for (let i = 0; i < t.openStart; i++)
    s = s.firstChild.content;
  for (let i = 1; i <= (t.openStart == 0 && t.size ? 2 : 1); i++)
    for (let o = r.depth; o >= 0; o--) {
      let l = o == r.depth ? 0 : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2 ? -1 : 1, a = r.index(o) + (l > 0 ? 1 : 0), c = r.node(o), u = !1;
      if (i == 1)
        u = c.canReplace(a, a, s);
      else {
        let d = c.contentMatchAt(a).findWrapping(s.firstChild.type);
        u = d && c.canReplaceWith(a, a, d[0]);
      }
      if (u)
        return l == 0 ? r.pos : l < 0 ? r.before(o + 1) : r.after(o + 1);
    }
  return null;
}
function zr(n, e, t = e, r = w.empty) {
  if (e == t && !r.size)
    return null;
  let s = n.resolve(e), i = n.resolve(t);
  return oa(s, i, r) ? new G(e, t, r) : new $u(s, i, r).fit();
}
function oa(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class $u {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = b.empty;
    for (let s = 0; s <= e.depth; s++) {
      let i = e.node(s);
      this.frontier.push({
        type: i.type,
        match: i.contentMatchAt(e.indexAfter(s))
      });
    }
    for (let s = e.depth; s > 0; s--)
      this.placed = b.from(e.node(s).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, s = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!s)
      return null;
    let i = this.placed, o = r.depth, l = s.depth;
    for (; o && l && i.childCount == 1; )
      i = i.firstChild.content, o--, l--;
    let a = new w(i, o, l);
    return e > -1 ? new X(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new G(r.pos, s.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, s = this.unplaced.openEnd; r < e; r++) {
      let i = t.firstChild;
      if (t.childCount > 1 && (s = 0), i.type.spec.isolating && s <= r) {
        e = r;
        break;
      }
      t = i.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let s, i = null;
        r ? (i = rs(this.unplaced.content, r - 1).firstChild, s = i.content) : s = this.unplaced.content;
        let o = s.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, d = null;
          if (t == 1 && (o ? c.matchType(o.type) || (d = c.fillBefore(b.from(o), !1)) : i && a.compatibleContent(i.type)))
            return { sliceDepth: r, frontierDepth: l, parent: i, inject: d };
          if (t == 2 && o && (u = c.findWrapping(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: i, wrap: u };
          if (i && c.matchType(i.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, s = rs(e, t);
    return !s.childCount || s.firstChild.isLeaf ? !1 : (this.unplaced = new w(e, t + 1, Math.max(r, s.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, s = rs(e, t);
    if (s.childCount <= 1 && t > 0) {
      let i = e.size - t <= t + s.size;
      this.unplaced = new w(Ut(e, t - 1, 1), t - 1, i ? t - 1 : r);
    } else
      this.unplaced = new w(Ut(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: s, wrap: i }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (i)
      for (let m = 0; m < i.length; m++)
        this.openFrontierNode(i[m]);
    let o = this.unplaced, l = r ? r.content : o.content, a = o.openStart - e, c = 0, u = [], { match: d, type: f } = this.frontier[t];
    if (s) {
      for (let m = 0; m < s.childCount; m++)
        u.push(s.child(m));
      d = d.matchFragment(s);
    }
    let h = l.size + e - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), g = d.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (d = g, u.push(la(m.mark(f.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = qt(this.placed, t, b.from(u)), this.frontier[t].match = d, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = l; m < h; m++) {
      let y = g.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), g = y.content;
    }
    this.unplaced = p ? e == 0 ? w.empty : new w(Ut(o.content, e - 1, 1), e - 1, h < 0 ? o.openEnd : e - 1) : new w(Ut(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !ss(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, s = this.$to.after(r);
    for (; r > 1 && s == this.$to.end(--r); )
      ++s;
    return s;
  }
  findCloseLevel(e) {
    e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: r, type: s } = this.frontier[t], i = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = ss(e, t, s, r, i);
      if (o) {
        for (let l = t - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], u = ss(e, l, c, a, !0);
          if (!u || u.childCount)
            continue e;
        }
        return { depth: t, fit: o, move: i ? e.doc.resolve(e.after(t + 1)) : e };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = qt(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let s = e.node(r), i = s.type.contentMatch.fillBefore(s.content, !0, e.index(r));
      this.openFrontierNode(s.type, s.attrs, i);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let s = this.frontier[this.depth];
    s.match = s.match.matchType(e), this.placed = qt(this.placed, this.depth, b.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(b.empty, !0);
    t.childCount && (this.placed = qt(this.placed, this.frontier.length, t));
  }
}
function Ut(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(Ut(n.firstChild.content, e - 1, t)));
}
function qt(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(qt(n.lastChild.content, e - 1, t)));
}
function rs(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function la(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, la(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(b.empty, !0)))), n.copy(r);
}
function ss(n, e, t, r, s) {
  let i = n.node(e), o = s ? n.indexAfter(e) : n.index(e);
  if (o == i.childCount && !t.compatibleContent(i.type))
    return null;
  let l = r.fillBefore(i.content, !0, o);
  return l && !Vu(t, i.content, o) ? l : null;
}
function Vu(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function Wu(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function ju(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let s = n.doc.resolve(e), i = n.doc.resolve(t);
  if (oa(s, i, r))
    return n.step(new G(e, t, r));
  let o = ca(s, n.doc.resolve(t));
  o[o.length - 1] == 0 && o.pop();
  let l = -(s.depth + 1);
  o.unshift(l);
  for (let f = s.depth, h = s.pos - 1; f > 0; f--, h--) {
    let p = s.node(f).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    o.indexOf(f) > -1 ? l = f : s.before(f) == h && o.splice(1, 0, -f);
  }
  let a = o.indexOf(l), c = [], u = r.openStart;
  for (let f = r.content, h = 0; ; h++) {
    let p = f.firstChild;
    if (c.push(p), h == r.openStart)
      break;
    f = p.content;
  }
  for (let f = u - 1; f >= 0; f--) {
    let h = c[f], p = Wu(h.type);
    if (p && !h.sameMarkup(s.node(Math.abs(l) - 1)))
      u = f;
    else if (p || !h.type.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let h = (f + u + 1) % (r.openStart + 1), p = c[h];
    if (p)
      for (let m = 0; m < o.length; m++) {
        let g = o[(m + a) % o.length], y = !0;
        g < 0 && (y = !1, g = -g);
        let S = s.node(g - 1), A = s.index(g - 1);
        if (S.canReplaceWith(A, A, p.type, p.marks))
          return n.replace(s.before(g), y ? i.after(g) : t, new w(aa(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let d = n.steps.length;
  for (let f = o.length - 1; f >= 0 && (n.replace(e, t, r), !(n.steps.length > d)); f--) {
    let h = o[f];
    h < 0 || (e = s.before(h), t = i.after(h));
  }
}
function aa(n, e, t, r, s) {
  if (e < t) {
    let i = n.firstChild;
    n = n.replaceChild(0, i.copy(aa(i.content, e + 1, t, r, i)));
  }
  if (e > r) {
    let i = s.contentMatchAt(0), o = i.fillBefore(n).append(n);
    n = o.append(i.matchFragment(o).fillBefore(b.empty, !0));
  }
  return n;
}
function Ku(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let s = Fu(n.doc, e, r.type);
    s != null && (e = t = s);
  }
  n.replaceRange(e, t, new w(b.from(r), 0, 0));
}
function Uu(n, e, t) {
  let r = n.doc.resolve(e), s = n.doc.resolve(t), i = ca(r, s);
  for (let o = 0; o < i.length; o++) {
    let l = i[o], a = o == i.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), s.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), s.indexAfter(l - 1))))
      return n.delete(r.before(l), s.after(l));
  }
  for (let o = 1; o <= r.depth && o <= s.depth; o++)
    if (e - r.start(o) == r.depth - o && t > r.end(o) && s.end(o) - t != s.depth - o && r.start(o - 1) == s.start(o - 1) && r.node(o - 1).canReplace(r.index(o - 1), s.index(o - 1)))
      return n.delete(r.before(o), t);
  n.delete(e, t);
}
function ca(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let s = r; s >= 0; s--) {
    let i = n.start(s);
    if (i < n.pos - (n.depth - s) || e.end(s) > e.pos + (e.depth - s) || n.node(s).type.spec.isolating || e.node(s).type.spec.isolating)
      break;
    (i == e.start(s) || s == n.depth && s == e.depth && n.parent.inlineContent && e.parent.inlineContent && s && e.start(s - 1) == i - 1) && t.push(s);
  }
  return t;
}
class It extends oe {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return q.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in t.attrs)
      r[i] = t.attrs[i];
    r[this.attr] = this.value;
    let s = t.type.create(r, null, t.marks);
    return q.fromReplace(e, this.pos, this.pos + 1, new w(b.from(s), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return pe.empty;
  }
  invert(e) {
    return new It(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new It(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new It(t.pos, t.attr, t.value);
  }
}
oe.jsonID("attr", It);
class un extends oe {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let s in e.attrs)
      t[s] = e.attrs[s];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return q.ok(r);
  }
  getMap() {
    return pe.empty;
  }
  invert(e) {
    return new un(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new un(t.attr, t.value);
  }
}
oe.jsonID("docAttr", un);
let Lt = class extends Error {
};
Lt = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
Lt.prototype = Object.create(Error.prototype);
Lt.prototype.constructor = Lt;
Lt.prototype.name = "TransformError";
class di {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new cn();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new Lt(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, r = w.empty) {
    let s = zr(this.doc, e, t, r);
    return s && this.step(s), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new w(b.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, w.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, r) {
    return ju(this, e, t, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, r) {
    return Ku(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return Uu(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return Nu(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return Hu(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return Du(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, s = null) {
    return Iu(this, e, t, r, s), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, s) {
    return Lu(this, e, t, r, s), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new It(e, t, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new un(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new Qe(e, t)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (t instanceof z)
      t.isInSet(r.marks) && this.step(new St(e, t));
    else {
      let s = r.marks, i, o = [];
      for (; i = t.isInSet(s); )
        o.push(new St(e, i)), s = i.removeFromSet(s);
      for (let l = o.length - 1; l >= 0; l--)
        this.step(o[l]);
    }
    return this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split (with the outermost nodes coming first).
  */
  split(e, t = 1, r) {
    return Bu(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return Au(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return Eu(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return ci(this, e, t, r), this;
  }
}
const is = /* @__PURE__ */ Object.create(null);
class O {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new ua(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = w.empty) {
    let r = t.content.lastChild, s = null;
    for (let l = 0; l < t.openEnd; l++)
      s = r, r = r.lastChild;
    let i = e.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: c } = o[l], u = e.mapping.slice(i);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? w.empty : t), l == 0 && ho(e, i, (r ? r.isInline : s && s.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let r = e.steps.length, s = this.ranges;
    for (let i = 0; i < s.length; i++) {
      let { $from: o, $to: l } = s[i], a = e.mapping.slice(r), c = a.map(o.pos), u = a.map(l.pos);
      i ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, t), ho(e, r, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, r = !1) {
    let s = e.parent.inlineContent ? new T(e) : Nt(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (s)
      return s;
    for (let i = e.depth - 1; i >= 0; i--) {
      let o = t < 0 ? Nt(e.node(0), e.node(i), e.before(i + 1), e.index(i), t, r) : Nt(e.node(0), e.node(i), e.after(i + 1), e.index(i) + 1, t, r);
      if (o)
        return o;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new de(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return Nt(e, e, 0, 0, 1) || new de(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return Nt(e, e, e.content.size, e.childCount, -1) || new de(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = is[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in is)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return is[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return T.between(this.$anchor, this.$head).getBookmark();
  }
}
O.prototype.visible = !0;
class ua {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let uo = !1;
function fo(n) {
  !uo && !n.parent.inlineContent && (uo = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class T extends O {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    fo(e), fo(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return O.near(r);
    let s = e.resolve(t.map(this.anchor));
    return new T(s.parent.inlineContent ? s : r, r);
  }
  replace(e, t = w.empty) {
    if (super.replace(e, t), t == w.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof T && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Hr(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new T(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, r = t) {
    let s = e.resolve(t);
    return new this(s, r == t ? s : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, r) {
    let s = e.pos - t.pos;
    if ((!r || s) && (r = s >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let i = O.findFrom(t, r, !0) || O.findFrom(t, -r, !0);
      if (i)
        t = i.$head;
      else
        return O.near(t, r);
    }
    return e.parent.inlineContent || (s == 0 ? e = t : (e = (O.findFrom(e, -r, !0) || O.findFrom(e, r, !0)).$anchor, e.pos < t.pos != s < 0 && (e = t))), new T(e, t);
  }
}
O.jsonID("text", T);
class Hr {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Hr(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return T.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class x extends O {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: s } = t.mapResult(this.anchor), i = e.resolve(s);
    return r ? O.near(i) : new x(i);
  }
  content() {
    return new w(b.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof x && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new fi(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new x(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new x(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
x.prototype.visible = !1;
O.jsonID("node", x);
class fi {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new Hr(r, r) : new fi(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && x.isSelectable(r) ? new x(t) : O.near(t);
  }
}
class de extends O {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = w.empty) {
    if (t == w.empty) {
      e.delete(0, e.doc.content.size);
      let r = O.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new de(e);
  }
  map(e) {
    return new de(e);
  }
  eq(e) {
    return e instanceof de;
  }
  getBookmark() {
    return qu;
  }
}
O.jsonID("all", de);
const qu = {
  map() {
    return this;
  },
  resolve(n) {
    return new de(n);
  }
};
function Nt(n, e, t, r, s, i = !1) {
  if (e.inlineContent)
    return T.create(n, t);
  for (let o = r - (s > 0 ? 0 : 1); s > 0 ? o < e.childCount : o >= 0; o += s) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!i && x.isSelectable(l))
        return x.create(n, t - (s < 0 ? l.nodeSize : 0));
    } else {
      let a = Nt(n, l, t + s, s < 0 ? l.childCount : 0, s, i);
      if (a)
        return a;
    }
    t += l.nodeSize * s;
  }
  return null;
}
function ho(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let s = n.steps[r];
  if (!(s instanceof G || s instanceof X))
    return;
  let i = n.mapping.maps[r], o;
  i.forEach((l, a, c, u) => {
    o == null && (o = u);
  }), n.setSelection(O.near(n.doc.resolve(o), t));
}
const po = 1, Nn = 2, mo = 4;
class Ju extends di {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | po) & ~Nn, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & po) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= Nn, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return z.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & Nn) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~Nn, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || z.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, t, r) {
    let s = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(s.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), r = r ?? t, !e)
        return this.deleteRange(t, r);
      let i = this.storedMarks;
      if (!i) {
        let o = this.doc.resolve(t);
        i = r == t ? o.marks() : o.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, s.text(e, i)), this.selection.empty || this.setSelection(O.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= mo, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & mo) > 0;
  }
}
function go(n, e) {
  return !e || !n ? n : n.bind(e);
}
class Jt {
  constructor(e, t, r) {
    this.name = e, this.init = go(t.init, r), this.apply = go(t.apply, r);
  }
}
const _u = [
  new Jt("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new Jt("selection", {
    init(n, e) {
      return n.selection || O.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new Jt("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new Jt("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class ls {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = _u.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new Jt(r.key, r.spec.state, r));
    });
  }
}
class Dt {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
        let s = this.config.plugins[r];
        if (s.spec.filterTransaction && !s.spec.filterTransaction.call(s, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], r = this.applyInner(e), s = null;
    for (; ; ) {
      let i = !1;
      for (let o = 0; o < this.config.plugins.length; o++) {
        let l = this.config.plugins[o];
        if (l.spec.appendTransaction) {
          let a = s ? s[o].n : 0, c = s ? s[o].state : this, u = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r);
          if (u && r.filterTransaction(u, o)) {
            if (u.setMeta("appendedTransaction", e), !s) {
              s = [];
              for (let d = 0; d < this.config.plugins.length; d++)
                s.push(d < o ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(u), r = r.applyInner(u), i = !0;
          }
          s && (s[o] = { state: r, n: t.length });
        }
      }
      if (!i)
        return { state: r, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new Dt(this.config), r = this.config.fields;
    for (let s = 0; s < r.length; s++) {
      let i = r[s];
      t[i.name] = i.apply(e, this[i.name], this, t);
    }
    return t;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new Ju(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new ls(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new Dt(t);
    for (let s = 0; s < t.fields.length; s++)
      r[t.fields[s].name] = t.fields[s].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let t = new ls(this.schema, e.plugins), r = t.fields, s = new Dt(t);
    for (let i = 0; i < r.length; i++) {
      let o = r[i].name;
      s[o] = this.hasOwnProperty(o) ? this[o] : r[i].init(e, s);
    }
    return s;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let s = e[r], i = s.spec.state;
        i && i.toJSON && (t[r] = i.toJSON.call(s, this[s.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let s = new ls(e.schema, e.plugins), i = new Dt(s);
    return s.fields.forEach((o) => {
      if (o.name == "doc")
        i.doc = Oe.fromJSON(e.schema, t.doc);
      else if (o.name == "selection")
        i.selection = O.fromJSON(i.doc, t.selection);
      else if (o.name == "storedMarks")
        t.storedMarks && (i.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              i[o.name] = c.fromJSON.call(a, e, t[l], i);
              return;
            }
          }
        i[o.name] = o.init(e, i);
      }
    }), i;
  }
}
function da(n, e, t) {
  for (let r in n) {
    let s = n[r];
    s instanceof Function ? s = s.bind(e) : r == "handleDOMEvents" && (s = da(s, e, {})), t[r] = s;
  }
  return t;
}
class $ {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && da(e.props, this, this.props), this.key = e.key ? e.key.key : fa("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const as = /* @__PURE__ */ Object.create(null);
function fa(n) {
  return n in as ? n + "$" + ++as[n] : (as[n] = 0, n + "$");
}
class J {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = fa(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const te = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, Bt = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Ps = null;
const ze = function(n, e, t) {
  let r = Ps || (Ps = document.createRange());
  return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, Gu = function() {
  Ps = null;
}, wt = function(n, e, t, r) {
  return t && (yo(n, e, t, r, -1) || yo(n, e, t, r, 1));
}, Yu = /^(img|br|input|textarea|hr)$/i;
function yo(n, e, t, r, s) {
  for (var i; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (s < 0 ? 0 : ke(n))) {
      let o = n.parentNode;
      if (!o || o.nodeType != 1 || Sn(n) || Yu.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = te(n) + (s < 0 ? 0 : 1), n = o;
    } else if (n.nodeType == 1) {
      let o = n.childNodes[e + (s < 0 ? -1 : 0)];
      if (o.nodeType == 1 && o.contentEditable == "false")
        if (!((i = o.pmViewDesc) === null || i === void 0) && i.ignoreForSelection)
          e += s;
        else
          return !1;
      else
        n = o, e = s < 0 ? ke(n) : 0;
    } else
      return !1;
  }
}
function ke(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Xu(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e - 1], e = ke(n);
    } else if (n.parentNode && !Sn(n))
      e = te(n), n = n.parentNode;
    else
      return null;
  }
}
function Qu(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e < n.nodeValue.length)
      return n;
    if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e], e = 0;
    } else if (n.parentNode && !Sn(n))
      e = te(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
function Zu(n, e, t) {
  for (let r = e == 0, s = e == ke(n); r || s; ) {
    if (n == t)
      return !0;
    let i = te(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && i == 0, s = s && i == ke(n);
  }
}
function Sn(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const Fr = function(n) {
  return n.focusNode && wt(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function at(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function ed(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function td(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: Math.min(ke(r.offsetNode), r.offset) };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: Math.min(ke(r.startContainer), r.startOffset) };
  }
}
const Ne = typeof navigator < "u" ? navigator : null, bo = typeof document < "u" ? document : null, it = Ne && Ne.userAgent || "", Ls = /Edge\/(\d+)/.exec(it), ha = /MSIE \d/.exec(it), Bs = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(it), fe = !!(ha || Bs || Ls), et = ha ? document.documentMode : Bs ? +Bs[1] : Ls ? +Ls[1] : 0, Ce = !fe && /gecko\/(\d+)/i.test(it);
Ce && +(/Firefox\/(\d+)/.exec(it) || [0, 0])[1];
const zs = !fe && /Chrome\/(\d+)/.exec(it), se = !!zs, pa = zs ? +zs[1] : 0, le = !fe && !!Ne && /Apple Computer/.test(Ne.vendor), zt = le && (/Mobile\/\w+/.test(it) || !!Ne && Ne.maxTouchPoints > 2), be = zt || (Ne ? /Mac/.test(Ne.platform) : !1), nd = Ne ? /Win/.test(Ne.platform) : !1, He = /Android \d/.test(it), wn = !!bo && "webkitFontSmoothing" in bo.documentElement.style, rd = wn ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function sd(n) {
  let e = n.defaultView && n.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function De(n, e) {
  return typeof n == "number" ? n : n[e];
}
function id(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function ko(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, s = n.someProp("scrollMargin") || 5, i = n.dom.ownerDocument;
  for (let o = t || n.dom; o; ) {
    if (o.nodeType != 1) {
      o = Bt(o);
      continue;
    }
    let l = o, a = l == i.body, c = a ? sd(i) : id(l), u = 0, d = 0;
    if (e.top < c.top + De(r, "top") ? d = -(c.top - e.top + De(s, "top")) : e.bottom > c.bottom - De(r, "bottom") && (d = e.bottom - e.top > c.bottom - c.top ? e.top + De(s, "top") - c.top : e.bottom - c.bottom + De(s, "bottom")), e.left < c.left + De(r, "left") ? u = -(c.left - e.left + De(s, "left")) : e.right > c.right - De(r, "right") && (u = e.right - c.right + De(s, "right")), u || d)
      if (a)
        i.defaultView.scrollBy(u, d);
      else {
        let h = l.scrollLeft, p = l.scrollTop;
        d && (l.scrollTop += d), u && (l.scrollLeft += u);
        let m = l.scrollLeft - h, g = l.scrollTop - p;
        e = { left: e.left - m, top: e.top - g, right: e.right - m, bottom: e.bottom - g };
      }
    let f = a ? "fixed" : getComputedStyle(o).position;
    if (/^(fixed|sticky)$/.test(f))
      break;
    o = f == "absolute" ? o.offsetParent : Bt(o);
  }
}
function od(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, s;
  for (let i = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
    let l = n.root.elementFromPoint(i, o);
    if (!l || l == n.dom || !n.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      r = l, s = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: s, stack: ma(n.dom) };
}
function ma(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = Bt(r))
    ;
  return e;
}
function ld({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  ga(t, r == 0 ? 0 : r - e);
}
function ga(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: s, left: i } = n[t];
    r.scrollTop != s + e && (r.scrollTop = s + e), r.scrollLeft != i && (r.scrollLeft = i);
  }
}
let Et = null;
function ad(n) {
  if (n.setActive)
    return n.setActive();
  if (Et)
    return n.focus(Et);
  let e = ma(n);
  n.focus(Et == null ? {
    get preventScroll() {
      return Et = { preventScroll: !0 }, !0;
    }
  } : void 0), Et || (Et = !1, ga(e, 0));
}
function ya(n, e) {
  let t, r = 2e8, s, i = 0, o = e.top, l = e.top, a, c;
  for (let u = n.firstChild, d = 0; u; u = u.nextSibling, d++) {
    let f;
    if (u.nodeType == 1)
      f = u.getClientRects();
    else if (u.nodeType == 3)
      f = ze(u).getClientRects();
    else
      continue;
    for (let h = 0; h < f.length; h++) {
      let p = f[h];
      if (p.top <= o && p.bottom >= l) {
        o = Math.max(p.bottom, o), l = Math.min(p.top, l);
        let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (m < r) {
          t = u, r = m, s = m && t.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, u.nodeType == 1 && m && (i = d + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = u, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !t && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (i = d + 1);
    }
  }
  return !t && a && (t = a, s = c, r = 0), t && t.nodeType == 3 ? cd(t, s) : !t || r && t.nodeType == 1 ? { node: n, offset: i } : ya(t, s);
}
function cd(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let s = 0; s < t; s++) {
    r.setEnd(n, s + 1), r.setStart(n, s);
    let i = Ke(r, 1);
    if (i.top != i.bottom && hi(e, i))
      return { node: n, offset: s + (e.left >= (i.left + i.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function hi(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function ud(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function dd(n, e, t) {
  let { node: r, offset: s } = ya(e, t), i = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let o = r.getBoundingClientRect();
    i = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, s, i);
}
function fd(n, e, t, r) {
  let s = -1;
  for (let i = e, o = !1; i != n.dom; ) {
    let l = n.docView.nearestDesc(i, !0), a;
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((a = l.dom.getBoundingClientRect()).width || a.height) && (l.node.isBlock && l.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(l.dom.nodeName) && (!o && a.left > r.left || a.top > r.top ? s = l.posBefore : (!o && a.right < r.left || a.bottom < r.top) && (s = l.posAfter), o = !0), !l.contentDOM && s < 0 && !l.node.isText))
      return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    i = l.dom.parentNode;
  }
  return s > -1 ? s : n.docView.posFromDOM(e, t, -1);
}
function ba(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let s = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), i = s; ; ) {
      let o = n.childNodes[i];
      if (o.nodeType == 1) {
        let l = o.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (hi(e, c))
            return ba(o, e, c);
        }
      }
      if ((i = (i + 1) % r) == s)
        break;
    }
  return n;
}
function hd(n, e) {
  let t = n.dom.ownerDocument, r, s = 0, i = td(t, e.left, e.top);
  i && ({ node: r, offset: s } = i);
  let o = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
  if (!o || !n.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
    let c = n.dom.getBoundingClientRect();
    if (!hi(e, c) || (o = ba(n.dom, e, c), !o))
      return null;
  }
  if (le)
    for (let c = o; r && c; c = Bt(c))
      c.draggable && (r = void 0);
  if (o = ud(o, e), r) {
    if (Ce && r.nodeType == 1 && (s = Math.min(s, r.childNodes.length), s < r.childNodes.length)) {
      let u = r.childNodes[s], d;
      u.nodeName == "IMG" && (d = u.getBoundingClientRect()).right <= e.left && d.bottom > e.top && s++;
    }
    let c;
    wn && s && r.nodeType == 1 && (c = r.childNodes[s - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && s--, r == n.dom && s == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (s == 0 || r.nodeType != 1 || r.childNodes[s - 1].nodeName != "BR") && (l = fd(n, r, s, e));
  }
  l == null && (l = dd(n, o, e));
  let a = n.docView.nearestDesc(o, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function So(n) {
  return n.top < n.bottom || n.left < n.right;
}
function Ke(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (So(r))
      return r;
  }
  return Array.prototype.find.call(t, So) || n.getBoundingClientRect();
}
const pd = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function ka(n, e, t) {
  let { node: r, offset: s, atom: i } = n.docView.domFromPos(e, t < 0 ? -1 : 1), o = wn || Ce;
  if (r.nodeType == 3)
    if (o && (pd.test(r.nodeValue) || (t < 0 ? !s : s == r.nodeValue.length))) {
      let a = Ke(ze(r, s, s), t);
      if (Ce && s && /\s/.test(r.nodeValue[s - 1]) && s < r.nodeValue.length) {
        let c = Ke(ze(r, s - 1, s - 1), -1);
        if (c.top == a.top) {
          let u = Ke(ze(r, s, s + 1), -1);
          if (u.top != a.top)
            return jt(u, u.left < c.left);
        }
      }
      return a;
    } else {
      let a = s, c = s, u = t < 0 ? 1 : -1;
      return t < 0 && !s ? (c++, u = -1) : t >= 0 && s == r.nodeValue.length ? (a--, u = 1) : t < 0 ? a-- : c++, jt(Ke(ze(r, a, c), u), u < 0);
    }
  if (!n.state.doc.resolve(e - (i || 0)).parent.inlineContent) {
    if (i == null && s && (t < 0 || s == ke(r))) {
      let a = r.childNodes[s - 1];
      if (a.nodeType == 1)
        return cs(a.getBoundingClientRect(), !1);
    }
    if (i == null && s < ke(r)) {
      let a = r.childNodes[s];
      if (a.nodeType == 1)
        return cs(a.getBoundingClientRect(), !0);
    }
    return cs(r.getBoundingClientRect(), t >= 0);
  }
  if (i == null && s && (t < 0 || s == ke(r))) {
    let a = r.childNodes[s - 1], c = a.nodeType == 3 ? ze(a, ke(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return jt(Ke(c, 1), !1);
  }
  if (i == null && s < ke(r)) {
    let a = r.childNodes[s];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? ze(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return jt(Ke(c, -1), !0);
  }
  return jt(Ke(r.nodeType == 3 ? ze(r) : r, -t), t >= 0);
}
function jt(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function cs(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function Sa(n, e, t) {
  let r = n.state, s = n.root.activeElement;
  r != e && n.updateState(e), s != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), s != n.dom && s && s.focus();
  }
}
function md(n, e, t) {
  let r = e.selection, s = t == "up" ? r.$from : r.$to;
  return Sa(n, e, () => {
    let { node: i } = n.docView.domFromPos(s.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = n.docView.nearestDesc(i, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        i = l.contentDOM || l.dom;
        break;
      }
      i = l.dom.parentNode;
    }
    let o = ka(n, s.pos, 1);
    for (let l = i.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = ze(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let u = a[c];
        if (u.bottom > u.top + 1 && (t == "up" ? o.top - u.top > (u.bottom - o.top) * 2 : u.bottom - o.bottom > (o.bottom - u.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const gd = /[\u0590-\u08ac]/;
function yd(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let s = r.parentOffset, i = !s, o = s == r.parent.content.size, l = n.domSelection();
  return l ? !gd.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? i : o : Sa(n, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: u, anchorOffset: d } = n.domSelectionRange(), f = l.caretBidiLevel;
    l.modify("move", t, "character");
    let h = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: p, focusOffset: m } = n.domSelectionRange(), g = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == m;
    try {
      l.collapse(u, d), a && (a != u || c != d) && l.extend && l.extend(a, c);
    } catch {
    }
    return f != null && (l.caretBidiLevel = f), g;
  }) : r.pos == r.start() || r.pos == r.end();
}
let wo = null, Co = null, xo = !1;
function bd(n, e, t) {
  return wo == e && Co == t ? xo : (wo = e, Co = t, xo = t == "up" || t == "down" ? md(n, e, t) : yd(n, e, t));
}
const Se = 0, Mo = 1, ut = 2, ve = 3;
class Cn {
  constructor(e, t, r, s) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = s, this.dirty = Se, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ; t++) {
      let s = this.children[t];
      if (s == e)
        return r;
      r += s.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let i, o;
        if (e == this.contentDOM)
          i = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          i = e.previousSibling;
        }
        for (; i && !((o = i.pmViewDesc) && o.parent == this); )
          i = i.previousSibling;
        return i ? this.posBeforeChild(o) + o.size : this.posAtStart;
      } else {
        let i, o;
        if (e == this.contentDOM)
          i = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          i = e.nextSibling;
        }
        for (; i && !((o = i.pmViewDesc) && o.parent == this); )
          i = i.nextSibling;
        return i ? this.posBeforeChild(o) : this.posAtEnd;
      }
    let s;
    if (e == this.dom && this.contentDOM)
      s = t > te(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      s = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let i = e; ; i = i.parentNode) {
          if (i == this.dom) {
            s = !1;
            break;
          }
          if (i.previousSibling)
            break;
        }
      if (s == null && t == e.childNodes.length)
        for (let i = e; ; i = i.parentNode) {
          if (i == this.dom) {
            s = !0;
            break;
          }
          if (i.nextSibling)
            break;
        }
    }
    return s ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, s = e; s; s = s.parentNode) {
      let i = this.getDesc(s), o;
      if (i && (!t || i.node))
        if (r && (o = i.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e))
          r = !1;
        else
          return i;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let s = e; s; s = s.parentNode) {
      let i = this.getDesc(s);
      if (i)
        return i.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let s = this.children[t], i = r + s.size;
      if (r == e && i != r) {
        for (; !s.border && s.children.length; )
          for (let o = 0; o < s.children.length; o++) {
            let l = s.children[o];
            if (l.size) {
              s = l;
              break;
            }
          }
        return s;
      }
      if (e < i)
        return s.descAt(e - r - s.border);
      r = i;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, s = 0;
    for (let i = 0; r < this.children.length; r++) {
      let o = this.children[r], l = i + o.size;
      if (l > e || o instanceof Ca) {
        s = e - i;
        break;
      }
      i = l;
    }
    if (s)
      return this.children[r].domFromPos(s - this.children[r].border, t);
    for (let i; r && !(i = this.children[r - 1]).size && i instanceof wa && i.side >= 0; r--)
      ;
    if (t <= 0) {
      let i, o = !0;
      for (; i = r ? this.children[r - 1] : null, !(!i || i.dom.parentNode == this.contentDOM); r--, o = !1)
        ;
      return i && t && o && !i.border && !i.domAtom ? i.domFromPos(i.size, t) : { node: this.contentDOM, offset: i ? te(i.dom) + 1 : 0 };
    } else {
      let i, o = !0;
      for (; i = r < this.children.length ? this.children[r] : null, !(!i || i.dom.parentNode == this.contentDOM); r++, o = !1)
        ;
      return i && o && !i.border && !i.domAtom ? i.domFromPos(0, t) : { node: this.contentDOM, offset: i ? te(i.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let s = -1, i = -1;
    for (let o = r, l = 0; ; l++) {
      let a = this.children[l], c = o + a.size;
      if (s == -1 && e <= c) {
        let u = o + a.border;
        if (e >= u && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, u);
        e = o;
        for (let d = l; d > 0; d--) {
          let f = this.children[d - 1];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
            s = te(f.dom) + 1;
            break;
          }
          e -= f.size;
        }
        s == -1 && (s = 0);
      }
      if (s > -1 && (c > t || l == this.children.length - 1)) {
        t = c;
        for (let u = l + 1; u < this.children.length; u++) {
          let d = this.children[u];
          if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(-1)) {
            i = te(d.dom);
            break;
          }
          t += d.size;
        }
        i == -1 && (i = this.contentDOM.childNodes.length);
        break;
      }
      o = c;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: s, toOffset: i };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, r, s = !1) {
    let i = Math.min(e, t), o = Math.max(e, t);
    for (let h = 0, p = 0; h < this.children.length; h++) {
      let m = this.children[h], g = p + m.size;
      if (i > p && o < g)
        return m.setSelection(e - p - m.border, t - p - m.border, r, s);
      p = g;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), c = r.root.getSelection(), u = r.domSelectionRange(), d = !1;
    if ((Ce || le) && e == t) {
      let { node: h, offset: p } = l;
      if (h.nodeType == 3) {
        if (d = !!(p && h.nodeValue[p - 1] == `
`), d && p == h.nodeValue.length)
          for (let m = h, g; m; m = m.parentNode) {
            if (g = m.nextSibling) {
              g.nodeName == "BR" && (l = a = { node: g.parentNode, offset: te(g) + 1 });
              break;
            }
            let y = m.pmViewDesc;
            if (y && y.node && y.node.isBlock)
              break;
          }
      } else {
        let m = h.childNodes[p - 1];
        d = m && (m.nodeName == "BR" || m.contentEditable == "false");
      }
    }
    if (Ce && u.focusNode && u.focusNode != a.node && u.focusNode.nodeType == 1) {
      let h = u.focusNode.childNodes[u.focusOffset];
      h && h.contentEditable == "false" && (s = !0);
    }
    if (!(s || d && le) && wt(l.node, l.offset, u.anchorNode, u.anchorOffset) && wt(a.node, a.offset, u.focusNode, u.focusOffset))
      return;
    let f = !1;
    if ((c.extend || e == t) && !d) {
      c.collapse(l.node, l.offset);
      try {
        e != t && c.extend(a.node, a.offset), f = !0;
      } catch {
      }
    }
    if (!f) {
      if (e > t) {
        let p = l;
        l = a, a = p;
      }
      let h = document.createRange();
      h.setEnd(a.node, a.offset), h.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(h);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, t) {
    for (let r = 0, s = 0; s < this.children.length; s++) {
      let i = this.children[s], o = r + i.size;
      if (r == o ? e <= o && t >= r : e < o && t > r) {
        let l = r + i.border, a = o - i.border;
        if (e >= l && t <= a) {
          this.dirty = e == r || t == o ? ut : Mo, e == l && t == a && (i.contentLost || i.dom.parentNode != this.contentDOM) ? i.dirty = ve : i.markDirty(e - l, t - l);
          return;
        } else
          i.dirty = i.dom == i.contentDOM && i.dom.parentNode == this.contentDOM && !i.children.length ? ut : ve;
      }
      r = o;
    }
    this.dirty = ut;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? ut : Mo;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  get ignoreForSelection() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class wa extends Cn {
  constructor(e, t, r, s) {
    let i, o = t.type.toDOM;
    if (typeof o == "function" && (o = o(r, () => {
      if (!i)
        return s;
      if (i.parent)
        return i.parent.posBeforeChild(i);
    })), !t.type.spec.raw) {
      if (o.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(o), o = l;
      }
      o.contentEditable = "false", o.classList.add("ProseMirror-widget");
    }
    super(e, [], o, null), this.widget = t, this.widget = t, i = this;
  }
  matchesWidget(e) {
    return this.dirty == Se && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
}
class kd extends Cn {
  constructor(e, t, r, s) {
    super(e, [], t, null), this.textDOM = r, this.text = s;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class Ct extends Cn {
  constructor(e, t, r, s, i) {
    super(e, [], r, s), this.mark = t, this.spec = i;
  }
  static create(e, t, r, s) {
    let i = s.nodeViews[t.type.name], o = i && i(t, s, r);
    return (!o || !o.dom) && (o = Tt.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs)), new Ct(e, t, o.dom, o.contentDOM || o.dom, o);
  }
  parseRule() {
    return this.dirty & ve || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != ve && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != Se) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = Se;
    }
  }
  slice(e, t, r) {
    let s = Ct.create(this.parent, this.mark, !0, r), i = this.children, o = this.size;
    t < o && (i = Fs(i, t, o, r)), e > 0 && (i = Fs(i, 0, e, r));
    for (let l = 0; l < i.length; l++)
      i[l].parent = s;
    return s.children = i, s;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class tt extends Cn {
  constructor(e, t, r, s, i, o, l, a, c) {
    super(e, [], i, o), this.node = t, this.outerDeco = r, this.innerDeco = s, this.nodeDOM = l;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, t, r, s, i, o) {
    let l = i.nodeViews[t.type.name], a, c = l && l(t, i, () => {
      if (!a)
        return o;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, s), u = c && c.dom, d = c && c.contentDOM;
    if (t.isText) {
      if (!u)
        u = document.createTextNode(t.text);
      else if (u.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else u || ({ dom: u, contentDOM: d } = Tt.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
    !d && !t.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), t.type.spec.draggable && (u.draggable = !0));
    let f = u;
    return u = Ta(u, r, t), c ? a = new Sd(e, t, r, s, u, d || null, f, c, i, o + 1) : t.isText ? new $r(e, t, r, s, u, f, i) : new tt(e, t, r, s, u, d || null, f, i, o + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => b.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == Se && e.eq(this.node) && er(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, t) {
    let r = this.node.inlineContent, s = t, i = e.composing ? this.localCompositionInfo(e, t) : null, o = i && i.pos > -1 ? i : null, l = i && i.pos < 0, a = new Cd(this, o && o.node, e);
    Td(this.node, this.innerDeco, (c, u, d) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !d && a.syncToMarks(u == this.node.childCount ? z.none : this.node.child(u).marks, r, e), a.placeWidget(c, e, s);
    }, (c, u, d, f) => {
      a.syncToMarks(c.marks, r, e);
      let h;
      a.findNodeMatch(c, u, d, f) || l && e.state.selection.from > s && e.state.selection.to < s + c.nodeSize && (h = a.findIndexWithChild(i.node)) > -1 && a.updateNodeAt(c, u, d, h, e) || a.updateNextNode(c, u, d, e, f, s) || a.addNode(c, u, d, e, s), s += c.nodeSize;
    }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == ut) && (o && this.protectLocalComposition(e, o), xa(this.contentDOM, this.children, e), zt && Ad(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: s } = e.state.selection;
    if (!(e.state.selection instanceof T) || r < t || s > t + this.node.content.size)
      return null;
    let i = e.input.compositionNode;
    if (!i || !this.dom.contains(i.parentNode))
      return null;
    if (this.node.inlineContent) {
      let o = i.nodeValue, l = Ed(this.node.content, o, r - t, s - t);
      return l < 0 ? null : { node: i, pos: l, text: o };
    } else
      return { node: i, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: s }) {
    if (this.getDesc(t))
      return;
    let i = t;
    for (; i.parentNode != this.contentDOM; i = i.parentNode) {
      for (; i.previousSibling; )
        i.parentNode.removeChild(i.previousSibling);
      for (; i.nextSibling; )
        i.parentNode.removeChild(i.nextSibling);
      i.pmViewDesc && (i.pmViewDesc = void 0);
    }
    let o = new kd(this, i, t, s);
    e.input.compositionNodes.push(o), this.children = Fs(this.children, r, r + s.length, e, o);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, r, s) {
    return this.dirty == ve || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, s), !0);
  }
  updateInner(e, t, r, s) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(s, this.posAtStart), this.dirty = Se;
  }
  updateOuterDeco(e) {
    if (er(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = Ma(this.dom, this.nodeDOM, Hs(this.outerDeco, this.node, t), Hs(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function To(n, e, t, r, s) {
  Ta(r, e, n);
  let i = new tt(void 0, n, e, t, r, r, r, s, 0);
  return i.contentDOM && i.updateChildren(s, 0), i;
}
class $r extends tt {
  constructor(e, t, r, s, i, o, l) {
    super(e, t, r, s, i, null, o, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, s) {
    return this.dirty == ve || this.dirty != Se && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != Se || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, s.trackWrites == this.nodeDOM && (s.trackWrites = null)), this.node = e, this.dirty = Se, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let s = this.node.cut(e, t), i = document.createTextNode(s.text);
    return new $r(this.parent, s, this.outerDeco, this.innerDeco, i, i, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = ve);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class Ca extends Cn {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == Se && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class Sd extends tt {
  constructor(e, t, r, s, i, o, l, a, c, u) {
    super(e, t, r, s, i, o, l, c, u), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, r, s) {
    if (this.dirty == ve)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let i = this.spec.update(e, t, r);
      return i && this.updateInner(e, t, r, s), i;
    } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, s);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, s) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r.root) : super.setSelection(e, t, r, s);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function xa(n, e, t) {
  let r = n.firstChild, s = !1;
  for (let i = 0; i < e.length; i++) {
    let o = e[i], l = o.dom;
    if (l.parentNode == n) {
      for (; l != r; )
        r = Ao(r), s = !0;
      r = r.nextSibling;
    } else
      s = !0, n.insertBefore(l, r);
    if (o instanceof Ct) {
      let a = r ? r.previousSibling : n.lastChild;
      xa(o.contentDOM, o.children, t), r = a ? a.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = Ao(r), s = !0;
  s && t.trackWrites == n && (t.trackWrites = null);
}
const Qt = function(n) {
  n && (this.nodeName = n);
};
Qt.prototype = /* @__PURE__ */ Object.create(null);
const dt = [new Qt()];
function Hs(n, e, t) {
  if (n.length == 0)
    return dt;
  let r = t ? dt[0] : new Qt(), s = [r];
  for (let i = 0; i < n.length; i++) {
    let o = n[i].type.attrs;
    if (o) {
      o.nodeName && s.push(r = new Qt(o.nodeName));
      for (let l in o) {
        let a = o[l];
        a != null && (t && s.length == 1 && s.push(r = new Qt(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return s;
}
function Ma(n, e, t, r) {
  if (t == dt && r == dt)
    return e;
  let s = e;
  for (let i = 0; i < r.length; i++) {
    let o = r[i], l = t[i];
    if (i) {
      let a;
      l && l.nodeName == o.nodeName && s != n && (a = s.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName), a.pmIsDeco = !0, a.appendChild(s), l = dt[0]), s = a;
    }
    wd(s, l || dt[0], o);
  }
  return s;
}
function wd(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], s = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let i = 0; i < r.length; i++)
      s.indexOf(r[i]) == -1 && n.classList.remove(r[i]);
    for (let i = 0; i < s.length; i++)
      r.indexOf(s[i]) == -1 && n.classList.add(s[i]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, s;
      for (; s = r.exec(e.style); )
        n.style.removeProperty(s[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function Ta(n, e, t) {
  return Ma(n, n, dt, Hs(e, t, n.nodeType != 1));
}
function er(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function Ao(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class Cd {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = xd(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, r) {
    let s = 0, i = this.stack.length >> 1, o = Math.min(i, e.length);
    for (; s < o && (s == i - 1 ? this.top : this.stack[s + 1 << 1]).matchesMark(e[s]) && e[s].type.spec.spanning !== !1; )
      s++;
    for (; s < i; )
      this.destroyRest(), this.top.dirty = Se, this.index = this.stack.pop(), this.top = this.stack.pop(), i--;
    for (; i < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[i]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = Ct.create(this.top, e[i], t, r);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, i++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, r, s) {
    let i = -1, o;
    if (s >= this.preMatch.index && (o = this.preMatch.matches[s - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, r))
      i = this.top.children.indexOf(o, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
          i = l;
          break;
        }
      }
    return i < 0 ? !1 : (this.destroyBetween(this.index, i), this.index++, !0);
  }
  updateNodeAt(e, t, r, s, i) {
    let o = this.top.children[s];
    return o.dirty == ve && o.dom == o.contentDOM && (o.dirty = ut), o.update(e, t, r, i) ? (this.destroyBetween(this.index, s), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let s = this.index; s < this.top.children.length; s++)
            if (this.top.children[s] == r)
              return s;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, r, s, i, o) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof tt) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != i)
          return !1;
        let u = a.dom, d, f = this.isLocked(u) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != ve && er(t, a.outerDeco));
        if (!f && a.update(e, t, r, s))
          return this.destroyBetween(this.index, l), a.dom != u && (this.changed = !0), this.index++, !0;
        if (!f && (d = this.recreateWrapper(a, e, t, r, s, o)))
          return this.destroyBetween(this.index, l), this.top.children[this.index] = d, d.contentDOM && (d.dirty = ut, d.updateChildren(s, o + 1), d.dirty = Se), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, t, r, s, i, o) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !er(r, e.outerDeco) || !s.eq(e.innerDeco))
      return null;
    let l = tt.create(this.top, t, r, s, i, o);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, r, s, i) {
    let o = tt.create(this.top, e, t, r, s, i);
    o.contentDOM && o.updateChildren(s, i + 1), this.top.children.splice(this.index++, 0, o), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let s = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (s && s.matchesWidget(e) && (e == s.widget || !s.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let i = new wa(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof Ct; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof $r) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((le || se) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let s = new Ca(this.top, [], r, null);
      t != this.top ? t.children.push(s) : t.children.splice(this.index++, 0, s), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function xd(n, e) {
  let t = e, r = t.children.length, s = n.childCount, i = /* @__PURE__ */ new Map(), o = [];
  e: for (; s > 0; ) {
    let l;
    for (; ; )
      if (r) {
        let c = t.children[r - 1];
        if (c instanceof Ct)
          t = c, r = c.children.length;
        else {
          l = c, r--;
          break;
        }
      } else {
        if (t == e)
          break e;
        r = t.parent.children.indexOf(t), t = t.parent;
      }
    let a = l.node;
    if (a) {
      if (a != n.child(s - 1))
        break;
      --s, i.set(l, s), o.push(l);
    }
  }
  return { index: s, matched: i, matches: o.reverse() };
}
function Md(n, e) {
  return n.type.side - e.type.side;
}
function Td(n, e, t, r) {
  let s = e.locals(n), i = 0;
  if (s.length == 0) {
    for (let c = 0; c < n.childCount; c++) {
      let u = n.child(c);
      r(u, s, e.forChild(i, u), c), i += u.nodeSize;
    }
    return;
  }
  let o = 0, l = [], a = null;
  for (let c = 0; ; ) {
    let u, d;
    for (; o < s.length && s[o].to == i; ) {
      let g = s[o++];
      g.widget && (u ? (d || (d = [u])).push(g) : u = g);
    }
    if (u)
      if (d) {
        d.sort(Md);
        for (let g = 0; g < d.length; g++)
          t(d[g], c, !!a);
      } else
        t(u, c, !!a);
    let f, h;
    if (a)
      h = -1, f = a, a = null;
    else if (c < n.childCount)
      h = c, f = n.child(c++);
    else
      break;
    for (let g = 0; g < l.length; g++)
      l[g].to <= i && l.splice(g--, 1);
    for (; o < s.length && s[o].from <= i && s[o].to > i; )
      l.push(s[o++]);
    let p = i + f.nodeSize;
    if (f.isText) {
      let g = p;
      o < s.length && s[o].from < g && (g = s[o].from);
      for (let y = 0; y < l.length; y++)
        l[y].to < g && (g = l[y].to);
      g < p && (a = f.cut(g - i), f = f.cut(0, g - i), p = g, h = -1);
    } else
      for (; o < s.length && s[o].to < p; )
        o++;
    let m = f.isInline && !f.isLeaf ? l.filter((g) => !g.inline) : l.slice();
    r(f, m, e.forChild(i, f), h), i = p;
  }
}
function Ad(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function Ed(n, e, t, r) {
  for (let s = 0, i = 0; s < n.childCount && i <= r; ) {
    let o = n.child(s++), l = i;
    if (i += o.nodeSize, !o.isText)
      continue;
    let a = o.text;
    for (; s < n.childCount; ) {
      let c = n.child(s++);
      if (i += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (i >= t) {
      if (i >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= t)
        return l + c;
      if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function Fs(n, e, t, r, s) {
  let i = [];
  for (let o = 0, l = 0; o < n.length; o++) {
    let a = n[o], c = l, u = l += a.size;
    c >= t || u <= e ? i.push(a) : (c < e && i.push(a.slice(0, e - c, r)), s && (i.push(s), s = void 0), u > t && i.push(a.slice(t - c, a.size, r)));
  }
  return i;
}
function pi(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let s = n.docView.nearestDesc(t.focusNode), i = s && s.size == 0, o = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (o < 0)
    return null;
  let l = r.resolve(o), a, c;
  if (Fr(t)) {
    for (a = o; s && !s.node; )
      s = s.parent;
    let d = s.node;
    if (s && d.isAtom && x.isSelectable(d) && s.parent && !(d.isInline && Zu(t.focusNode, t.focusOffset, s.dom))) {
      let f = s.posBefore;
      c = new x(o == f ? l : r.resolve(f));
    }
  } else {
    if (t instanceof n.dom.ownerDocument.defaultView.Selection && t.rangeCount > 1) {
      let d = o, f = o;
      for (let h = 0; h < t.rangeCount; h++) {
        let p = t.getRangeAt(h);
        d = Math.min(d, n.docView.posFromDOM(p.startContainer, p.startOffset, 1)), f = Math.max(f, n.docView.posFromDOM(p.endContainer, p.endOffset, -1));
      }
      if (d < 0)
        return null;
      [a, o] = f == n.state.selection.anchor ? [f, d] : [d, f], l = r.resolve(o);
    } else
      a = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (a < 0)
      return null;
  }
  let u = r.resolve(a);
  if (!c) {
    let d = e == "pointer" || n.state.selection.head < l.pos && !i ? 1 : -1;
    c = mi(n, u, l, d);
  }
  return c;
}
function Aa(n) {
  return n.editable ? n.hasFocus() : Oa(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function We(n, e = !1) {
  let t = n.state.selection;
  if (Ea(n, t), !!Aa(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && se) {
      let r = n.domSelectionRange(), s = n.domObserver.currentSelection;
      if (r.anchorNode && s.anchorNode && wt(r.anchorNode, r.anchorOffset, s.anchorNode, s.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      Nd(n);
    else {
      let { anchor: r, head: s } = t, i, o;
      Eo && !(t instanceof T) && (t.$from.parent.inlineContent || (i = Oo(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (o = Oo(n, t.to))), n.docView.setSelection(r, s, n, e), Eo && (i && No(i), o && No(o)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Od(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const Eo = le || se && pa < 63;
function Oo(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), s = r < t.childNodes.length ? t.childNodes[r] : null, i = r ? t.childNodes[r - 1] : null;
  if (le && s && s.contentEditable == "false")
    return us(s);
  if ((!s || s.contentEditable == "false") && (!i || i.contentEditable == "false")) {
    if (s)
      return us(s);
    if (i)
      return us(i);
  }
}
function us(n) {
  return n.contentEditable = "true", le && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function No(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function Od(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, s = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != s) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!Aa(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Nd(n) {
  let e = n.domSelection(), t = document.createRange();
  if (!e)
    return;
  let r = n.cursorWrapper.dom, s = r.nodeName == "IMG";
  s ? t.setStart(r.parentNode, te(r) + 1) : t.setStart(r, 0), t.collapse(!0), e.removeAllRanges(), e.addRange(t), !s && !n.state.selection.visible && fe && et <= 11 && (r.disabled = !0, r.disabled = !1);
}
function Ea(n, e) {
  if (e instanceof x) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (vo(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    vo(n);
}
function vo(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function mi(n, e, t, r) {
  return n.someProp("createSelectionBetween", (s) => s(n, e, t)) || T.between(e, t, r);
}
function Ro(n) {
  return n.editable && !n.hasFocus() ? !1 : Oa(n);
}
function Oa(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function vd(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return wt(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function $s(n, e) {
  let { $anchor: t, $head: r } = n.selection, s = e > 0 ? t.max(r) : t.min(r), i = s.parent.inlineContent ? s.depth ? n.doc.resolve(e > 0 ? s.after() : s.before()) : null : s;
  return i && O.findFrom(i, e);
}
function Ue(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Do(n, e, t) {
  let r = n.state.selection;
  if (r instanceof T)
    if (t.indexOf("s") > -1) {
      let { $head: s } = r, i = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter;
      if (!i || i.isText || !i.isLeaf)
        return !1;
      let o = n.state.doc.resolve(s.pos + i.nodeSize * (e < 0 ? -1 : 1));
      return Ue(n, new T(r.$anchor, o));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let s = $s(n.state, e);
        return s && s instanceof x ? Ue(n, s) : !1;
      } else if (!(be && t.indexOf("m") > -1)) {
        let s = r.$head, i = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter, o;
        if (!i || i.isText)
          return !1;
        let l = e < 0 ? s.pos - i.nodeSize : s.pos;
        return i.isAtom || (o = n.docView.descAt(l)) && !o.contentDOM ? x.isSelectable(i) ? Ue(n, new x(e < 0 ? n.state.doc.resolve(s.pos - i.nodeSize) : s)) : wn ? Ue(n, new T(n.state.doc.resolve(e < 0 ? l : l + i.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof x && r.node.isInline)
      return Ue(n, new T(e > 0 ? r.$to : r.$from));
    {
      let s = $s(n.state, e);
      return s ? Ue(n, s) : !1;
    }
  }
}
function tr(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Zt(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function Ot(n, e) {
  return e < 0 ? Rd(n) : Dd(n);
}
function Rd(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let s, i, o = !1;
  for (Ce && t.nodeType == 1 && r < tr(t) && Zt(t.childNodes[r], -1) && (o = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if (Zt(l, -1))
          s = t, i = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (Na(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && Zt(l, -1); )
          s = t.parentNode, i = te(l), l = l.previousSibling;
        if (l)
          t = l, r = tr(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  o ? Vs(n, t, r) : s && Vs(n, s, i);
}
function Dd(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let s = tr(t), i, o;
  for (; ; )
    if (r < s) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if (Zt(l, 1))
        i = t, o = ++r;
      else
        break;
    } else {
      if (Na(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && Zt(l, 1); )
          i = l.parentNode, o = te(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, s = tr(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = s = 0;
        }
      }
    }
  i && Vs(n, i, o);
}
function Na(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Id(n, e) {
  for (; n && e == n.childNodes.length && !Sn(n); )
    e = te(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function Pd(n, e) {
  for (; n && !e && !Sn(n); )
    e = te(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function Vs(n, e, t) {
  if (e.nodeType != 3) {
    let i, o;
    (o = Id(e, t)) ? (e = o, t = 0) : (i = Pd(e, t)) && (e = i, t = i.nodeValue.length);
  }
  let r = n.domSelection();
  if (!r)
    return;
  if (Fr(r)) {
    let i = document.createRange();
    i.setEnd(e, t), i.setStart(e, t), r.removeAllRanges(), r.addRange(i);
  } else r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: s } = n;
  setTimeout(() => {
    n.state == s && We(n);
  }, 50);
}
function Io(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(se || nd) && t.parent.inlineContent) {
    let s = n.coordsAtPos(e);
    if (e > t.start()) {
      let i = n.coordsAtPos(e - 1), o = (i.top + i.bottom) / 2;
      if (o > s.top && o < s.bottom && Math.abs(i.left - s.left) > 1)
        return i.left < s.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let i = n.coordsAtPos(e + 1), o = (i.top + i.bottom) / 2;
      if (o > s.top && o < s.bottom && Math.abs(i.left - s.left) > 1)
        return i.left > s.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function Po(n, e, t) {
  let r = n.state.selection;
  if (r instanceof T && !r.empty || t.indexOf("s") > -1 || be && t.indexOf("m") > -1)
    return !1;
  let { $from: s, $to: i } = r;
  if (!s.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = $s(n.state, e);
    if (o && o instanceof x)
      return Ue(n, o);
  }
  if (!s.parent.inlineContent) {
    let o = e < 0 ? s : i, l = r instanceof de ? O.near(o, e) : O.findFrom(o, e);
    return l ? Ue(n, l) : !1;
  }
  return !1;
}
function Lo(n, e) {
  if (!(n.state.selection instanceof T))
    return !0;
  let { $head: t, $anchor: r, empty: s } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!s)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let i = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (i && !i.isText) {
    let o = n.state.tr;
    return e < 0 ? o.delete(t.pos - i.nodeSize, t.pos) : o.delete(t.pos, t.pos + i.nodeSize), n.dispatch(o), !0;
  }
  return !1;
}
function Bo(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function Ld(n) {
  if (!le || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    Bo(n, r, "true"), setTimeout(() => Bo(n, r, "false"), 20);
  }
  return !1;
}
function Bd(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function zd(n, e) {
  let t = e.keyCode, r = Bd(e);
  if (t == 8 || be && t == 72 && r == "c")
    return Lo(n, -1) || Ot(n, -1);
  if (t == 46 && !e.shiftKey || be && t == 68 && r == "c")
    return Lo(n, 1) || Ot(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || be && t == 66 && r == "c") {
    let s = t == 37 ? Io(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Do(n, s, r) || Ot(n, s);
  } else if (t == 39 || be && t == 70 && r == "c") {
    let s = t == 39 ? Io(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Do(n, s, r) || Ot(n, s);
  } else {
    if (t == 38 || be && t == 80 && r == "c")
      return Po(n, -1, r) || Ot(n, -1);
    if (t == 40 || be && t == 78 && r == "c")
      return Ld(n) || Po(n, 1, r) || Ot(n, 1);
    if (r == (be ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function gi(n, e) {
  n.someProp("transformCopied", (h) => {
    e = h(e, n);
  });
  let t = [], { content: r, openStart: s, openEnd: i } = e;
  for (; s > 1 && i > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    s--, i--;
    let h = r.firstChild;
    t.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let o = n.someProp("clipboardSerializer") || Tt.fromSchema(n.state.schema), l = La(), a = l.createElement("div");
  a.appendChild(o.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, d = 0;
  for (; c && c.nodeType == 1 && (u = Pa[c.nodeName.toLowerCase()]); ) {
    for (let h = u.length - 1; h >= 0; h--) {
      let p = l.createElement(u[h]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), d++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${s} ${i}${d ? ` -${d}` : ""} ${JSON.stringify(t)}`);
  let f = n.someProp("clipboardTextSerializer", (h) => h(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: f, slice: e };
}
function va(n, e, t, r, s) {
  let i = s.parent.type.spec.code, o, l;
  if (!t && !e)
    return null;
  let a = e && (r || i || !t);
  if (a) {
    if (n.someProp("transformPastedText", (f) => {
      e = f(e, i || r, n);
    }), i)
      return e ? new w(b.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : w.empty;
    let d = n.someProp("clipboardTextParser", (f) => f(e, s, r, n));
    if (d)
      l = d;
    else {
      let f = s.marks(), { schema: h } = n.state, p = Tt.fromSchema(h);
      o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = o.appendChild(document.createElement("p"));
        m && g.appendChild(p.serializeNode(h.text(m, f)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (d) => {
      t = d(t, n);
    }), o = Vd(t), wn && Wd(o);
  let c = o && o.querySelector("[data-pm-slice]"), u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (u && u[3])
    for (let d = +u[3]; d > 0; d--) {
      let f = o.firstChild;
      for (; f && f.nodeType != 1; )
        f = f.nextSibling;
      if (!f)
        break;
      o = f;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || $e.fromSchema(n.state.schema)).parseSlice(o, {
    preserveWhitespace: !!(a || u),
    context: s,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !Hd.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = jd(zo(l, +u[1], +u[2]), u[4]);
  else if (l = w.maxOpen(Fd(l.content, s), !0), l.openStart || l.openEnd) {
    let d = 0, f = 0;
    for (let h = l.content.firstChild; d < l.openStart && !h.type.spec.isolating; d++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    l = zo(l, d, f);
  }
  return n.someProp("transformPasted", (d) => {
    l = d(l, n);
  }), l;
}
const Hd = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Fd(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let s = e.node(t).contentMatchAt(e.index(t)), i, o = [];
    if (n.forEach((l) => {
      if (!o)
        return;
      let a = s.findWrapping(l.type), c;
      if (!a)
        return o = null;
      if (c = o.length && i.length && Da(a, i, l, o[o.length - 1], 0))
        o[o.length - 1] = c;
      else {
        o.length && (o[o.length - 1] = Ia(o[o.length - 1], i.length));
        let u = Ra(l, a);
        o.push(u), s = s.matchType(u.type), i = a;
      }
    }), o)
      return b.from(o);
  }
  return n;
}
function Ra(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, b.from(n));
  return n;
}
function Da(n, e, t, r, s) {
  if (s < n.length && s < e.length && n[s] == e[s]) {
    let i = Da(n, e, t, r.lastChild, s + 1);
    if (i)
      return r.copy(r.content.replaceChild(r.childCount - 1, i));
    if (r.contentMatchAt(r.childCount).matchType(s == n.length - 1 ? t.type : n[s + 1]))
      return r.copy(r.content.append(b.from(Ra(t, n, s + 1))));
  }
}
function Ia(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, Ia(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(b.empty, !0);
  return n.copy(t.append(r));
}
function Ws(n, e, t, r, s, i) {
  let o = e < 0 ? n.firstChild : n.lastChild, l = o.content;
  return n.childCount > 1 && (i = 0), s < r - 1 && (l = Ws(l, e, t, r, s + 1, i)), s >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, i <= s).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(b.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, o.copy(l));
}
function zo(n, e, t) {
  return e < n.openStart && (n = new w(Ws(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new w(Ws(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const Pa = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let Ho = null;
function La() {
  return Ho || (Ho = document.implementation.createHTMLDocument("title"));
}
let ds = null;
function $d(n) {
  let e = window.trustedTypes;
  return e ? (ds || (ds = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (t) => t })), ds.createHTML(n)) : n;
}
function Vd(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = La().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), s;
  if ((s = r && Pa[r[1].toLowerCase()]) && (n = s.map((i) => "<" + i + ">").join("") + n + s.map((i) => "</" + i + ">").reverse().join("")), t.innerHTML = $d(n), s)
    for (let i = 0; i < s.length; i++)
      t = t.querySelector(s[i]) || t;
  return t;
}
function Wd(n) {
  let e = n.querySelectorAll(se ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function jd(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: s, openStart: i, openEnd: o } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    s = b.from(a.create(r[l + 1], s)), i++, o++;
  }
  return new w(s, i, o);
}
const ae = {}, ce = {}, Kd = { touchstart: !0, touchmove: !0 };
class Ud {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function qd(n) {
  for (let e in ae) {
    let t = ae[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      _d(n, r) && !yi(n, r) && (n.editable || !(r.type in ce)) && t(n, r);
    }, Kd[e] ? { passive: !0 } : void 0);
  }
  le && n.dom.addEventListener("input", () => null), js(n);
}
function Ze(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function Jd(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function js(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => yi(n, r));
  });
}
function yi(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function _d(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function Gd(n, e) {
  !yi(n, e) && ae[e.type] && (n.editable || !(e.type in ce)) && ae[e.type](n, e);
}
ce.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !za(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(He && se && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), zt && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (s) => s(n, at(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else n.someProp("handleKeyDown", (r) => r(n, t)) || zd(n, t) ? t.preventDefault() : Ze(n, "key");
};
ce.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
ce.keypress = (n, e) => {
  let t = e;
  if (za(n, t) || !t.charCode || t.ctrlKey && !t.altKey || be && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (s) => s(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof T) || !r.$from.sameParent(r.$to)) {
    let s = String.fromCharCode(t.charCode), i = () => n.state.tr.insertText(s).scrollIntoView();
    !/[\r\n]/.test(s) && !n.someProp("handleTextInput", (o) => o(n, r.$from.pos, r.$to.pos, s, i)) && n.dispatch(i()), t.preventDefault();
  }
};
function Vr(n) {
  return { left: n.clientX, top: n.clientY };
}
function Yd(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function bi(n, e, t, r, s) {
  if (r == -1)
    return !1;
  let i = n.state.doc.resolve(r);
  for (let o = i.depth + 1; o > 0; o--)
    if (n.someProp(e, (l) => o > i.depth ? l(n, t, i.nodeAfter, i.before(o), s, !0) : l(n, t, i.node(o), i.before(o), s, !1)))
      return !0;
  return !1;
}
function Pt(n, e, t) {
  if (n.focused || n.focus(), n.state.selection.eq(e))
    return;
  let r = n.state.tr.setSelection(e);
  r.setMeta("pointer", !0), n.dispatch(r);
}
function Xd(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && x.isSelectable(r) ? (Pt(n, new x(t)), !0) : !1;
}
function Qd(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, s;
  t instanceof x && (r = t.node);
  let i = n.state.doc.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let l = o > i.depth ? i.nodeAfter : i.node(o);
    if (x.isSelectable(l)) {
      r && t.$from.depth > 0 && o >= t.$from.depth && i.before(t.$from.depth + 1) == t.$from.pos ? s = i.before(t.$from.depth) : s = i.before(o);
      break;
    }
  }
  return s != null ? (Pt(n, x.create(n.state.doc, s)), !0) : !1;
}
function Zd(n, e, t, r, s) {
  return bi(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (i) => i(n, e, r)) || (s ? Qd(n, t) : Xd(n, t));
}
function ef(n, e, t, r) {
  return bi(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (s) => s(n, e, r));
}
function tf(n, e, t, r) {
  return bi(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (s) => s(n, e, r)) || nf(n, t, r);
}
function nf(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (Pt(n, T.create(r, 0, r.content.size)), !0) : !1;
  let s = r.resolve(e);
  for (let i = s.depth + 1; i > 0; i--) {
    let o = i > s.depth ? s.nodeAfter : s.node(i), l = s.before(i);
    if (o.inlineContent)
      Pt(n, T.create(r, l + 1, l + 1 + o.content.size));
    else if (x.isSelectable(o))
      Pt(n, x.create(r, l));
    else
      continue;
    return !0;
  }
}
function ki(n) {
  return nr(n);
}
const Ba = be ? "metaKey" : "ctrlKey";
ae.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = ki(n), s = Date.now(), i = "singleClick";
  s - n.input.lastClick.time < 500 && Yd(t, n.input.lastClick) && !t[Ba] && n.input.lastClick.button == t.button && (n.input.lastClick.type == "singleClick" ? i = "doubleClick" : n.input.lastClick.type == "doubleClick" && (i = "tripleClick")), n.input.lastClick = { time: s, x: t.clientX, y: t.clientY, type: i, button: t.button };
  let o = n.posAtCoords(Vr(t));
  o && (i == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new rf(n, o, t, !!r)) : (i == "doubleClick" ? ef : tf)(n, o.pos, o.inside, t) ? t.preventDefault() : Ze(n, "pointer"));
};
class rf {
  constructor(e, t, r, s) {
    this.view = e, this.pos = t, this.event = r, this.flushed = s, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Ba], this.allowDefault = r.shiftKey;
    let i, o;
    if (t.inside > -1)
      i = e.state.doc.nodeAt(t.inside), o = t.inside;
    else {
      let u = e.state.doc.resolve(t.pos);
      i = u.parent, o = u.depth ? u.before() : 0;
    }
    const l = s ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.dom.nodeType == 1 ? a.dom : null;
    let { selection: c } = e.state;
    (r.button == 0 && i.type.spec.draggable && i.type.spec.selectable !== !1 || c instanceof x && c.from <= o && c.to > o) && (this.mightDrag = {
      node: i,
      pos: o,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && Ce && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), Ze(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => We(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(Vr(e))), this.updateAllowDefault(e), this.allowDefault || !t ? Ze(this.view, "pointer") : Zd(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    le && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    se && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Pt(this.view, O.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : Ze(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), Ze(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
ae.touchstart = (n) => {
  n.input.lastTouch = Date.now(), ki(n), Ze(n, "pointer");
};
ae.touchmove = (n) => {
  n.input.lastTouch = Date.now(), Ze(n, "pointer");
};
ae.contextmenu = (n) => ki(n);
function za(n, e) {
  return n.composing ? !0 : le && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const sf = He ? 5e3 : -1;
ce.compositionstart = ce.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$to;
    if (e.selection instanceof T && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), nr(n, !0), n.markCursor = null;
    else if (nr(n, !e.selection.empty), Ce && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let s = r.focusNode, i = r.focusOffset; s && s.nodeType == 1 && i != 0; ) {
        let o = i < 0 ? s.lastChild : s.childNodes[i - 1];
        if (!o)
          break;
        if (o.nodeType == 3) {
          let l = n.domSelection();
          l && l.collapse(o, o.nodeValue.length);
          break;
        } else
          s = o, i = -1;
      }
    }
    n.input.composing = !0;
  }
  Ha(n, sf);
};
ce.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, Ha(n, 20));
};
function Ha(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => nr(n), e));
}
function Fa(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = lf()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function of(n) {
  let e = n.domSelectionRange();
  if (!e.focusNode)
    return null;
  let t = Xu(e.focusNode, e.focusOffset), r = Qu(e.focusNode, e.focusOffset);
  if (t && r && t != r) {
    let s = r.pmViewDesc, i = n.domObserver.lastChangedTextNode;
    if (t == i || r == i)
      return i;
    if (!s || !s.isText(r.nodeValue))
      return r;
    if (n.input.compositionNode == r) {
      let o = t.pmViewDesc;
      if (!(!o || !o.isText(t.nodeValue)))
        return r;
    }
  }
  return t || r;
}
function lf() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function nr(n, e = !1) {
  if (!(He && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), Fa(n), e || n.docView && n.docView.dirty) {
      let t = pi(n), r = n.state.selection;
      return t && !t.eq(r) ? n.dispatch(n.state.tr.setSelection(t)) : (n.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? n.dispatch(n.state.tr.deleteSelection()) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function af(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), s = document.createRange();
  s.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(s), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const dn = fe && et < 15 || zt && rd < 604;
ae.copy = ce.cut = (n, e) => {
  let t = e, r = n.state.selection, s = t.type == "cut";
  if (r.empty)
    return;
  let i = dn ? null : t.clipboardData, o = r.content(), { dom: l, text: a } = gi(n, o);
  i ? (t.preventDefault(), i.clearData(), i.setData("text/html", l.innerHTML), i.setData("text/plain", a)) : af(n, l), s && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function cf(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function uf(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let s = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? fn(n, r.value, null, s, e) : fn(n, r.textContent, r.innerHTML, s, e);
  }, 50);
}
function fn(n, e, t, r, s) {
  let i = va(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (a) => a(n, s, i || w.empty)))
    return !0;
  if (!i)
    return !1;
  let o = cf(i), l = o ? n.state.tr.replaceSelectionWith(o, r) : n.state.tr.replaceSelection(i);
  return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function $a(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
ce.paste = (n, e) => {
  let t = e;
  if (n.composing && !He)
    return;
  let r = dn ? null : t.clipboardData, s = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && fn(n, $a(r), r.getData("text/html"), s, t) ? t.preventDefault() : uf(n, t);
};
class Va {
  constructor(e, t, r) {
    this.slice = e, this.move = t, this.node = r;
  }
}
const df = be ? "altKey" : "ctrlKey";
function Wa(n, e) {
  let t = n.someProp("dragCopies", (r) => !r(e));
  return t ?? !e[df];
}
ae.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let s = n.state.selection, i = s.empty ? null : n.posAtCoords(Vr(t)), o;
  if (!(i && i.pos >= s.from && i.pos <= (s instanceof x ? s.to - 1 : s.to))) {
    if (r && r.mightDrag)
      o = x.create(n.state.doc, r.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let d = n.docView.nearestDesc(t.target, !0);
      d && d.node.type.spec.draggable && d != n.docView && (o = x.create(n.state.doc, d.posBefore));
    }
  }
  let l = (o || n.state.selection).content(), { dom: a, text: c, slice: u } = gi(n, l);
  (!t.dataTransfer.files.length || !se || pa > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(dn ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", dn || t.dataTransfer.setData("text/plain", c), n.dragging = new Va(u, Wa(n, t), o);
};
ae.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
ce.dragover = ce.dragenter = (n, e) => e.preventDefault();
ce.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let s = n.posAtCoords(Vr(t));
  if (!s)
    return;
  let i = n.state.doc.resolve(s.pos), o = r && r.slice;
  o ? n.someProp("transformPasted", (p) => {
    o = p(o, n);
  }) : o = va(n, $a(t.dataTransfer), dn ? null : t.dataTransfer.getData("text/html"), !1, i);
  let l = !!(r && Wa(n, t));
  if (n.someProp("handleDrop", (p) => p(n, t, o || w.empty, l))) {
    t.preventDefault();
    return;
  }
  if (!o)
    return;
  t.preventDefault();
  let a = o ? ia(n.state.doc, i.pos, o) : i.pos;
  a == null && (a = i.pos);
  let c = n.state.tr;
  if (l) {
    let { node: p } = r;
    p ? p.replace(c) : c.deleteSelection();
  }
  let u = c.mapping.map(a), d = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1, f = c.doc;
  if (d ? c.replaceRangeWith(u, u, o.content.firstChild) : c.replaceRange(u, u, o), c.doc.eq(f))
    return;
  let h = c.doc.resolve(u);
  if (d && x.isSelectable(o.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(o.content.firstChild))
    c.setSelection(new x(h));
  else {
    let p = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((m, g, y, S) => p = S), c.setSelection(mi(n, h, c.doc.resolve(p)));
  }
  n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
};
ae.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && We(n);
  }, 20));
};
ae.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
ae.beforeinput = (n, e) => {
  if (se && He && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (i) => i(n, at(8, "Backspace")))))
        return;
      let { $cursor: s } = n.state.selection;
      s && s.pos > 0 && n.dispatch(n.state.tr.delete(s.pos - 1, s.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in ce)
  ae[n] = ce[n];
function hn(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class rr {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || gt, this.side = this.spec.side || 0;
  }
  map(e, t, r, s) {
    let { pos: i, deleted: o } = e.mapResult(t.from + s, this.side < 0 ? -1 : 1);
    return o ? null : new Y(i - r, i - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof rr && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && hn(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class nt {
  constructor(e, t) {
    this.attrs = e, this.spec = t || gt;
  }
  map(e, t, r, s) {
    let i = e.map(t.from + s, this.spec.inclusiveStart ? -1 : 1) - r, o = e.map(t.to + s, this.spec.inclusiveEnd ? 1 : -1) - r;
    return i >= o ? null : new Y(i, o, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof nt && hn(this.attrs, e.attrs) && hn(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof nt;
  }
  destroy() {
  }
}
class Si {
  constructor(e, t) {
    this.attrs = e, this.spec = t || gt;
  }
  map(e, t, r, s) {
    let i = e.mapResult(t.from + s, 1);
    if (i.deleted)
      return null;
    let o = e.mapResult(t.to + s, -1);
    return o.deleted || o.pos <= i.pos ? null : new Y(i.pos - r, o.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: s } = e.content.findIndex(t.from), i;
    return s == t.from && !(i = e.child(r)).isText && s + i.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof Si && hn(this.attrs, e.attrs) && hn(this.spec, e.spec);
  }
  destroy() {
  }
}
class Y {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new Y(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, r) {
    return new Y(e, e, new rr(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, s) {
    return new Y(e, t, new nt(r, s));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, s) {
    return new Y(e, t, new Si(r, s));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof nt;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof rr;
  }
}
const vt = [], gt = {};
class B {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : vt, this.children = t.length ? t : vt;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, t) {
    return t.length ? sr(t, e, 0, gt) : re;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, r) {
    let s = [];
    return this.findInner(e ?? 0, t ?? 1e9, s, 0, r), s;
  }
  findInner(e, t, r, s, i) {
    for (let o = 0; o < this.local.length; o++) {
      let l = this.local[o];
      l.from <= t && l.to >= e && (!i || i(l.spec)) && r.push(l.copy(l.from + s, l.to + s));
    }
    for (let o = 0; o < this.children.length; o += 3)
      if (this.children[o] < t && this.children[o + 1] > e) {
        let l = this.children[o] + 1;
        this.children[o + 2].findInner(e - l, t - l, r, s + l, i);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == re || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || gt);
  }
  /**
  @internal
  */
  mapInner(e, t, r, s, i) {
    let o;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, s);
      a && a.type.valid(t, a) ? (o || (o = [])).push(a) : i.onRemove && i.onRemove(this.local[l].spec);
    }
    return this.children.length ? ff(this.children, o || [], e, t, r, s, i) : o ? new B(o.sort(yt), vt) : re;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, t) {
    return t.length ? this == re ? B.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let s, i = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = Ka(t, l, c)) {
        for (s || (s = this.children.slice()); i < s.length && s[i] < a; )
          i += 3;
        s[i] == a ? s[i + 2] = s[i + 2].addInner(l, u, c + 1) : s.splice(i, 0, a, a + l.nodeSize, sr(u, l, c + 1, gt)), i += 3;
      }
    });
    let o = ja(i ? Ua(t) : t, -r);
    for (let l = 0; l < o.length; l++)
      o[l].type.valid(e, o[l]) || o.splice(l--, 1);
    return new B(o.length ? this.local.concat(o).sort(yt) : this.local, s || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == re ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, s = this.local;
    for (let i = 0; i < r.length; i += 3) {
      let o, l = r[i] + t, a = r[i + 1] + t;
      for (let u = 0, d; u < e.length; u++)
        (d = e[u]) && d.from > l && d.to < a && (e[u] = null, (o || (o = [])).push(d));
      if (!o)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[i + 2].removeInner(o, l + 1);
      c != re ? r[i + 2] = c : (r.splice(i, 3), i -= 3);
    }
    if (s.length) {
      for (let i = 0, o; i < e.length; i++)
        if (o = e[i])
          for (let l = 0; l < s.length; l++)
            s[l].eq(o, t) && (s == this.local && (s = this.local.slice()), s.splice(l--, 1));
    }
    return r == this.children && s == this.local ? this : s.length || r.length ? new B(s, r) : re;
  }
  forChild(e, t) {
    if (this == re)
      return this;
    if (t.isLeaf)
      return B.empty;
    let r, s;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let i = e + 1, o = i + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < o && a.to > i && a.type instanceof nt) {
        let c = Math.max(i, a.from) - i, u = Math.min(o, a.to) - i;
        c < u && (s || (s = [])).push(a.copy(c, u));
      }
    }
    if (s) {
      let l = new B(s.sort(yt), vt);
      return r ? new _e([l, r]) : l;
    }
    return r || re;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof B) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return wi(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == re)
      return vt;
    if (e.inlineContent || !this.local.some(nt.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof nt || t.push(this.local[r]);
    return t;
  }
  forEachSet(e) {
    e(this);
  }
}
B.empty = new B([], []);
B.removeOverlap = wi;
const re = B.empty;
class _e {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((s) => s.map(e, t, gt));
    return _e.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return B.empty;
    let r = [];
    for (let s = 0; s < this.members.length; s++) {
      let i = this.members[s].forChild(e, t);
      i != re && (i instanceof _e ? r = r.concat(i.members) : r.push(i));
    }
    return _e.from(r);
  }
  eq(e) {
    if (!(e instanceof _e) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let s = 0; s < this.members.length; s++) {
      let i = this.members[s].localsInner(e);
      if (i.length)
        if (!t)
          t = i;
        else {
          r && (t = t.slice(), r = !1);
          for (let o = 0; o < i.length; o++)
            t.push(i[o]);
        }
    }
    return t ? wi(r ? t : t.sort(yt)) : vt;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return re;
      case 1:
        return e[0];
      default:
        return new _e(e.every((t) => t instanceof B) ? e : e.reduce((t, r) => t.concat(r instanceof B ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let t = 0; t < this.members.length; t++)
      this.members[t].forEachSet(e);
  }
}
function ff(n, e, t, r, s, i, o) {
  let l = n.slice();
  for (let c = 0, u = i; c < t.maps.length; c++) {
    let d = 0;
    t.maps[c].forEach((f, h, p, m) => {
      let g = m - p - (h - f);
      for (let y = 0; y < l.length; y += 3) {
        let S = l[y + 1];
        if (S < 0 || f > S + u - d)
          continue;
        let A = l[y] + u - d;
        h >= A ? l[y + 1] = f <= A ? -2 : -1 : f >= u && g && (l[y] += g, l[y + 1] += g);
      }
      d += g;
    }), u = t.maps[c].map(u, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let u = t.map(n[c] + i), d = u - s;
      if (d < 0 || d >= r.content.size) {
        a = !0;
        continue;
      }
      let f = t.map(n[c + 1] + i, -1), h = f - s, { index: p, offset: m } = r.content.findIndex(d), g = r.maybeChild(p);
      if (g && m == d && m + g.nodeSize == h) {
        let y = l[c + 2].mapInner(t, g, u + 1, n[c] + i + 1, o);
        y != re ? (l[c] = d, l[c + 1] = h, l[c + 2] = y) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = hf(l, n, e, t, s, i, o), u = sr(c, r, 0, o);
    e = u.local;
    for (let d = 0; d < l.length; d += 3)
      l[d + 1] < 0 && (l.splice(d, 3), d -= 3);
    for (let d = 0, f = 0; d < u.children.length; d += 3) {
      let h = u.children[d];
      for (; f < l.length && l[f] < h; )
        f += 3;
      l.splice(f, 0, u.children[d], u.children[d + 1], u.children[d + 2]);
    }
  }
  return new B(e.sort(yt), l);
}
function ja(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let s = n[r];
    t.push(new Y(s.from + e, s.to + e, s.type));
  }
  return t;
}
function hf(n, e, t, r, s, i, o) {
  function l(a, c) {
    for (let u = 0; u < a.local.length; u++) {
      let d = a.local[u].map(r, s, c);
      d ? t.push(d) : o.onRemove && o.onRemove(a.local[u].spec);
    }
    for (let u = 0; u < a.children.length; u += 3)
      l(a.children[u + 2], a.children[u] + c + 1);
  }
  for (let a = 0; a < n.length; a += 3)
    n[a + 1] == -1 && l(n[a + 2], e[a] + i + 1);
  return t;
}
function Ka(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, s = null;
  for (let i = 0, o; i < n.length; i++)
    (o = n[i]) && o.from > t && o.to < r && ((s || (s = [])).push(o), n[i] = null);
  return s;
}
function Ua(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function sr(n, e, t, r) {
  let s = [], i = !1;
  e.forEach((l, a) => {
    let c = Ka(n, l, a + t);
    if (c) {
      i = !0;
      let u = sr(c, l, t + a + 1, r);
      u != re && s.push(a, a + l.nodeSize, u);
    }
  });
  let o = ja(i ? Ua(n) : n, -t).sort(yt);
  for (let l = 0; l < o.length; l++)
    o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1));
  return o.length || s.length ? new B(o, s) : re;
}
function yt(n, e) {
  return n.from - e.from || n.to - e.to;
}
function wi(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let s = t + 1; s < e.length; s++) {
        let i = e[s];
        if (i.from == r.from) {
          i.to != r.to && (e == n && (e = n.slice()), e[s] = i.copy(i.from, r.to), Fo(e, s + 1, i.copy(r.to, i.to)));
          continue;
        } else {
          i.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, i.from), Fo(e, s, r.copy(i.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function Fo(n, e, t) {
  for (; e < n.length && yt(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function fs(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != re && e.push(r);
  }), n.cursorWrapper && e.push(B.create(n.state.doc, [n.cursorWrapper.deco])), _e.from(e);
}
const pf = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, mf = fe && et <= 11;
class gf {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class yf {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new gf(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let s = 0; s < r.length; s++)
        this.queue.push(r[s]);
      fe && et <= 11 && r.some((s) => s.type == "childList" && s.removedNodes.length || s.type == "characterData" && s.oldValue.length > s.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), mf && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, pf)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (Ro(this.view)) {
      if (this.suppressingSelectionUpdates)
        return We(this.view);
      if (fe && et <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && wt(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), r;
    for (let i = e.focusNode; i; i = Bt(i))
      t.add(i);
    for (let i = e.anchorNode; i; i = Bt(i))
      if (t.has(i)) {
        r = i;
        break;
      }
    let s = r && this.view.docView.nearestDesc(r);
    if (s && s.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let r = e.domSelectionRange(), s = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && Ro(e) && !this.ignoreSelectionChange(r), i = -1, o = -1, l = !1, a = [];
    if (e.editable)
      for (let u = 0; u < t.length; u++) {
        let d = this.registerMutation(t[u], a);
        d && (i = i < 0 ? d.from : Math.min(d.from, i), o = o < 0 ? d.to : Math.max(d.to, o), d.typeOver && (l = !0));
      }
    if (Ce && a.length) {
      let u = a.filter((d) => d.nodeName == "BR");
      if (u.length == 2) {
        let [d, f] = u;
        d.parentNode && d.parentNode.parentNode == f.parentNode ? f.remove() : d.remove();
      } else {
        let { focusNode: d } = this.currentSelection;
        for (let f of u) {
          let h = f.parentNode;
          h && h.nodeName == "LI" && (!d || Sf(e, d) != h) && f.remove();
        }
      }
    }
    let c = null;
    i < 0 && s && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && Fr(r) && (c = pi(e)) && c.eq(O.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, We(e), this.currentSelection.set(r), e.scrollToSelection()) : (i > -1 || s) && (i > -1 && (e.docView.markDirty(i, o), bf(e)), this.handleDOMChange(i, o, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || We(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let u = 0; u < e.addedNodes.length; u++) {
        let d = e.addedNodes[u];
        t.push(d), d.nodeType == 3 && (this.lastChangedTextNode = d);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let s = e.previousSibling, i = e.nextSibling;
      if (fe && et <= 11 && e.addedNodes.length)
        for (let u = 0; u < e.addedNodes.length; u++) {
          let { previousSibling: d, nextSibling: f } = e.addedNodes[u];
          (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (s = d), (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (i = f);
        }
      let o = s && s.parentNode == e.target ? te(s) + 1 : 0, l = r.localPosFromDOM(e.target, o, -1), a = i && i.parentNode == e.target ? te(i) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
      from: r.posAtStart,
      to: r.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: e.target.nodeValue == e.oldValue
    });
  }
}
let $o = /* @__PURE__ */ new WeakMap(), Vo = !1;
function bf(n) {
  if (!$o.has(n) && ($o.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = Ce, Vo)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Vo = !0;
  }
}
function Wo(n, e) {
  let t = e.startContainer, r = e.startOffset, s = e.endContainer, i = e.endOffset, o = n.domAtPos(n.state.selection.anchor);
  return wt(o.node, o.offset, s, i) && ([t, r, s, i] = [s, i, t, r]), { anchorNode: t, anchorOffset: r, focusNode: s, focusOffset: i };
}
function kf(n, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(n.root)[0];
    if (s)
      return Wo(n, s);
  }
  let t;
  function r(s) {
    s.preventDefault(), s.stopImmediatePropagation(), t = s.getTargetRanges()[0];
  }
  return n.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", r, !0), t ? Wo(n, t) : null;
}
function Sf(n, e) {
  for (let t = e.parentNode; t && t != n.dom; t = t.parentNode) {
    let r = n.docView.nearestDesc(t, !0);
    if (r && r.node.isBlock)
      return t;
  }
  return null;
}
function wf(n, e, t) {
  let { node: r, fromOffset: s, toOffset: i, from: o, to: l } = n.docView.parseRange(e, t), a = n.domSelectionRange(), c, u = a.anchorNode;
  if (u && n.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (c = [{ node: u, offset: a.anchorOffset }], Fr(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), se && n.input.lastKeyCode === 8)
    for (let g = i; g > s; g--) {
      let y = r.childNodes[g - 1], S = y.pmViewDesc;
      if (y.nodeName == "BR" && !S) {
        i = g;
        break;
      }
      if (!S || S.size)
        break;
    }
  let d = n.state.doc, f = n.someProp("domParser") || $e.fromSchema(n.state.schema), h = d.resolve(o), p = null, m = f.parse(r, {
    topNode: h.parent,
    topMatch: h.parent.contentMatchAt(h.index()),
    topOpen: !0,
    from: s,
    to: i,
    preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: Cf,
    context: h
  });
  if (c && c[0].pos != null) {
    let g = c[0].pos, y = c[1] && c[1].pos;
    y == null && (y = g), p = { anchor: g + o, head: y + o };
  }
  return { doc: m, sel: p, from: o, to: l };
}
function Cf(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (le && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || le && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const xf = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Mf(n, e, t, r, s) {
  let i = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let E = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, j = pi(n, E);
    if (j && !n.state.selection.eq(j)) {
      if (se && He && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (Tn) => Tn(n, at(13, "Enter"))))
        return;
      let _ = n.state.tr.setSelection(j);
      E == "pointer" ? _.setMeta("pointer", !0) : E == "key" && _.scrollIntoView(), i && _.setMeta("composition", i), n.dispatch(_);
    }
    return;
  }
  let o = n.state.doc.resolve(e), l = o.sharedDepth(t);
  e = o.before(l + 1), t = n.state.doc.resolve(t).after(l + 1);
  let a = n.state.selection, c = wf(n, e, t), u = n.state.doc, d = u.slice(c.from, c.to), f, h;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (f = n.state.selection.to, h = "end") : (f = n.state.selection.from, h = "start"), n.input.lastKeyCode = null;
  let p = Ef(d.content, c.doc.content, c.from, f, h);
  if (p && n.input.domChangeCount++, (zt && n.input.lastIOSEnter > Date.now() - 225 || He) && s.some((E) => E.nodeType == 1 && !xf.test(E.nodeName)) && (!p || p.endA >= p.endB) && n.someProp("handleKeyDown", (E) => E(n, at(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!p)
    if (r && a instanceof T && !a.empty && a.$head.sameParent(a.$anchor) && !n.composing && !(c.sel && c.sel.anchor != c.sel.head))
      p = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (c.sel) {
        let E = jo(n, n.state.doc, c.sel);
        if (E && !E.eq(n.state.selection)) {
          let j = n.state.tr.setSelection(E);
          i && j.setMeta("composition", i), n.dispatch(j);
        }
      }
      return;
    }
  n.state.selection.from < n.state.selection.to && p.start == p.endB && n.state.selection instanceof T && (p.start > n.state.selection.from && p.start <= n.state.selection.from + 2 && n.state.selection.from >= c.from ? p.start = n.state.selection.from : p.endA < n.state.selection.to && p.endA >= n.state.selection.to - 2 && n.state.selection.to <= c.to && (p.endB += n.state.selection.to - p.endA, p.endA = n.state.selection.to)), fe && et <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == "  " && (p.start--, p.endA--, p.endB--);
  let m = c.doc.resolveNoCache(p.start - c.from), g = c.doc.resolveNoCache(p.endB - c.from), y = u.resolve(p.start), S = m.sameParent(g) && m.parent.inlineContent && y.end() >= p.endA, A;
  if ((zt && n.input.lastIOSEnter > Date.now() - 225 && (!S || s.some((E) => E.nodeName == "DIV" || E.nodeName == "P")) || !S && m.pos < c.doc.content.size && (!m.sameParent(g) || !m.parent.inlineContent) && !/\S/.test(c.doc.textBetween(m.pos, g.pos, "", "")) && (A = O.findFrom(c.doc.resolve(m.pos + 1), 1, !0)) && A.head > m.pos) && n.someProp("handleKeyDown", (E) => E(n, at(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > p.start && Af(u, p.start, p.endA, m, g) && n.someProp("handleKeyDown", (E) => E(n, at(8, "Backspace")))) {
    He && se && n.domObserver.suppressSelectionUpdates();
    return;
  }
  se && p.endB == p.start && (n.input.lastChromeDelete = Date.now()), He && !S && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA && (p.endB -= 2, g = c.doc.resolveNoCache(p.endB - c.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(E) {
      return E(n, at(13, "Enter"));
    });
  }, 20));
  let R = p.start, M = p.endA, I = (E) => {
    let j = E || n.state.tr.replace(R, M, c.doc.slice(p.start - c.from, p.endB - c.from));
    if (c.sel) {
      let _ = jo(n, j.doc, c.sel);
      _ && !(se && n.composing && _.empty && (p.start != p.endB || n.input.lastChromeDelete < Date.now() - 100) && (_.head == R || _.head == j.mapping.map(M) - 1) || fe && _.empty && _.head == R) && j.setSelection(_);
    }
    return i && j.setMeta("composition", i), j.scrollIntoView();
  }, H;
  if (S) {
    if (m.pos == g.pos) {
      fe && et <= 11 && m.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => We(n), 20));
      let E = I(n.state.tr.delete(R, M)), j = u.resolve(p.start).marksAcross(u.resolve(p.endA));
      j && E.ensureMarks(j), n.dispatch(E);
    } else if (
      // Adding or removing a mark
      p.endA == p.endB && (H = Tf(m.parent.content.cut(m.parentOffset, g.parentOffset), y.parent.content.cut(y.parentOffset, p.endA - y.start())))
    ) {
      let E = I(n.state.tr);
      H.type == "add" ? E.addMark(R, M, H.mark) : E.removeMark(R, M, H.mark), n.dispatch(E);
    } else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let E = m.parent.textBetween(m.parentOffset, g.parentOffset), j = () => I(n.state.tr.insertText(E, R, M));
      n.someProp("handleTextInput", (_) => _(n, R, M, E, j)) || n.dispatch(j());
    }
  } else
    n.dispatch(I());
}
function jo(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : mi(n, e.resolve(t.anchor), e.resolve(t.head));
}
function Tf(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, s = t, i = r, o, l, a;
  for (let u = 0; u < r.length; u++)
    s = r[u].removeFromSet(s);
  for (let u = 0; u < t.length; u++)
    i = t[u].removeFromSet(i);
  if (s.length == 1 && i.length == 0)
    l = s[0], o = "add", a = (u) => u.mark(l.addToSet(u.marks));
  else if (s.length == 0 && i.length == 1)
    l = i[0], o = "remove", a = (u) => u.mark(l.removeFromSet(u.marks));
  else
    return null;
  let c = [];
  for (let u = 0; u < e.childCount; u++)
    c.push(a(e.child(u)));
  if (b.from(c).eq(n))
    return { mark: l, type: o };
}
function Af(n, e, t, r, s) {
  if (
    // The content must have shrunk
    t - e <= s.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    hs(r, !0, !1) < s.pos
  )
    return !1;
  let i = n.resolve(e);
  if (!r.parent.isTextblock) {
    let l = i.nodeAfter;
    return l != null && t == e + l.nodeSize;
  }
  if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock)
    return !1;
  let o = n.resolve(hs(i, !0, !0));
  return !o.parent.isTextblock || o.pos > t || hs(o, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function hs(n, e, t) {
  let r = n.depth, s = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, s++, e = !1;
  if (t) {
    let i = n.node(r).maybeChild(n.indexAfter(r));
    for (; i && !i.isLeaf; )
      i = i.firstChild, s++;
  }
  return s;
}
function Ef(n, e, t, r, s) {
  let i = n.findDiffStart(e, t);
  if (i == null)
    return null;
  let { a: o, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (s == "end") {
    let a = Math.max(0, i - Math.min(o, l));
    r -= o + a - i;
  }
  if (o < i && n.size < e.size) {
    let a = r <= i && r >= o ? i - r : 0;
    i -= a, i && i < e.size && Ko(e.textBetween(i - 1, i + 1)) && (i += a ? 1 : -1), l = i + (l - o), o = i;
  } else if (l < i) {
    let a = r <= i && r >= l ? i - r : 0;
    i -= a, i && i < n.size && Ko(n.textBetween(i - 1, i + 1)) && (i += a ? 1 : -1), o = i + (o - l), l = i;
  }
  return { start: i, endA: o, endB: l };
}
function Ko(n) {
  if (n.length != 2)
    return !1;
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class qa {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Ud(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(Go), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Jo(this), qo(this), this.nodeViews = _o(this), this.docView = To(this.state.doc, Uo(this), fs(this), this.dom, this), this.domObserver = new yf(this, (r, s, i, o) => Mf(this, r, s, i, o)), this.domObserver.start(), qd(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && js(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Go), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    var r;
    let s = this.state, i = !1, o = !1;
    e.storedMarks && this.composing && (Fa(this), o = !0), this.state = e;
    let l = s.plugins != e.plugins || this._props.plugins != t.plugins;
    if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let h = _o(this);
      Nf(h, this.nodeViews) && (this.nodeViews = h, i = !0);
    }
    (l || t.handleDOMEvents != this._props.handleDOMEvents) && js(this), this.editable = Jo(this), qo(this);
    let a = fs(this), c = Uo(this), u = s.plugins != e.plugins && !s.doc.eq(e.doc) ? "reset" : e.scrollToSelection > s.scrollToSelection ? "to selection" : "preserve", d = i || !this.docView.matchesNode(e.doc, c, a);
    (d || !e.selection.eq(s.selection)) && (o = !0);
    let f = u == "preserve" && o && this.dom.style.overflowAnchor == null && od(this);
    if (o) {
      this.domObserver.stop();
      let h = d && (fe || se) && !this.composing && !s.selection.empty && !e.selection.empty && Of(s.selection, e.selection);
      if (d) {
        let p = se ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = of(this)), (i || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = To(e.doc, c, a, this.dom, this)), p && !this.trackWrites && (h = !0);
      }
      h || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && vd(this)) ? We(this, h) : (Ea(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(s), !((r = this.dragging) === null || r === void 0) && r.node && !s.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, s), u == "reset" ? this.dom.scrollTop = 0 : u == "to selection" ? this.scrollToSelection() : f && ld(f);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode))) {
      if (!this.someProp("handleScrollToSelection", (t) => t(this))) if (this.state.selection instanceof x) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && ko(this, t.getBoundingClientRect(), e);
      } else
        ko(this, this.coordsAtPos(this.state.selection.head, 1), e);
    }
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let r = e.node, s = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      s = r.from;
    else {
      let i = r.from + (this.state.doc.content.size - t.doc.content.size);
      (i > 0 && this.state.doc.nodeAt(i)) == r.node && (s = i);
    }
    this.dragging = new Va(e.slice, e.move, s < 0 ? void 0 : x.create(this.state.doc, s));
  }
  someProp(e, t) {
    let r = this._props && this._props[e], s;
    if (r != null && (s = t ? t(r) : r))
      return s;
    for (let o = 0; o < this.directPlugins.length; o++) {
      let l = this.directPlugins[o].props[e];
      if (l != null && (s = t ? t(l) : l))
        return s;
    }
    let i = this.state.plugins;
    if (i)
      for (let o = 0; o < i.length; o++) {
        let l = i[o].props[e];
        if (l != null && (s = t ? t(l) : l))
          return s;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (fe) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && ad(this.dom), We(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return hd(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return ka(this, e, t);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, t, r = -1) {
    let s = this.docView.posFromDOM(e, t, r);
    if (s == null)
      throw new RangeError("DOM position not inside the editor");
    return s;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, t) {
    return bd(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return fn(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return fn(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  /**
  Serialize the given slice as it would be if it was copied from
  this editor. Returns a DOM element that contains a
  representation of the slice as its children, a textual
  representation, and the transformed slice (which can be
  different from the given input due to hooks like
  [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
  */
  serializeForClipboard(e) {
    return gi(this, e);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (Jd(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], fs(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, Gu());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return Gd(this, e);
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? le && this.root.nodeType === 11 && ed(this.dom.ownerDocument) == this.dom && kf(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
qa.prototype.dispatch = function(n) {
  let e = this._props.dispatchTransaction;
  e ? e.call(this, n) : this.updateState(this.state.apply(n));
};
function Uo(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [Y.node(0, n.state.doc.content.size, e)];
}
function qo(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: Y.widget(n.state.selection.from, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function Jo(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function Of(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function _o(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let s in r)
      Object.prototype.hasOwnProperty.call(e, s) || (e[s] = r[s]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function Nf(n, e) {
  let t = 0, r = 0;
  for (let s in n) {
    if (n[s] != e[s])
      return !0;
    t++;
  }
  for (let s in e)
    r++;
  return t != r;
}
function Go(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var rt = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, ir = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, vf = typeof navigator < "u" && /Mac/.test(navigator.platform), Rf = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var ne = 0; ne < 10; ne++) rt[48 + ne] = rt[96 + ne] = String(ne);
for (var ne = 1; ne <= 24; ne++) rt[ne + 111] = "F" + ne;
for (var ne = 65; ne <= 90; ne++)
  rt[ne] = String.fromCharCode(ne + 32), ir[ne] = String.fromCharCode(ne);
for (var ps in rt) ir.hasOwnProperty(ps) || (ir[ps] = rt[ps]);
function Df(n) {
  var e = vf && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || Rf && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? ir : rt)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const If = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), Pf = typeof navigator < "u" && /Win/.test(navigator.platform);
function Lf(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, s, i, o;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      s = !0;
    else if (/^s(hift)?$/i.test(a))
      i = !0;
    else if (/^mod$/i.test(a))
      If ? o = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (t = "Alt-" + t), s && (t = "Ctrl-" + t), o && (t = "Meta-" + t), i && (t = "Shift-" + t), t;
}
function Bf(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[Lf(t)] = n[t];
  return e;
}
function ms(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function zf(n) {
  return new $({ props: { handleKeyDown: Ci(n) } });
}
function Ci(n) {
  let e = Bf(n);
  return function(t, r) {
    let s = Df(r), i, o = e[ms(s, r)];
    if (o && o(t.state, t.dispatch, t))
      return !0;
    if (s.length == 1 && s != " ") {
      if (r.shiftKey) {
        let l = e[ms(s, r, !1)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(Pf && r.ctrlKey && r.altKey) && (i = rt[r.keyCode]) && i != s) {
        let l = e[ms(i, r)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const xi = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function Ja(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const _a = (n, e, t) => {
  let r = Ja(n, t);
  if (!r)
    return !1;
  let s = Mi(r);
  if (!s) {
    let o = r.blockRange(), l = o && $t(o);
    return l == null ? !1 : (e && e(n.tr.lift(o, l).scrollIntoView()), !0);
  }
  let i = s.nodeBefore;
  if (rc(n, s, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Ht(i, "end") || x.isSelectable(i)))
    for (let o = r.depth; ; o--) {
      let l = zr(n.doc, r.before(o), r.after(o), w.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = n.tr.step(l);
          a.setSelection(Ht(i, "end") ? O.findFrom(a.doc.resolve(a.mapping.map(s.pos, -1)), -1) : x.create(a.doc, s.pos - i.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (o == 1 || r.node(o - 1).childCount > 1)
        break;
    }
  return i.isAtom && s.depth == r.depth - 1 ? (e && e(n.tr.delete(s.pos - i.nodeSize, s.pos).scrollIntoView()), !0) : !1;
}, Hf = (n, e, t) => {
  let r = Ja(n, t);
  if (!r)
    return !1;
  let s = Mi(r);
  return s ? Ga(n, s, e) : !1;
}, Ff = (n, e, t) => {
  let r = Xa(n, t);
  if (!r)
    return !1;
  let s = Ti(r);
  return s ? Ga(n, s, e) : !1;
};
function Ga(n, e, t) {
  let r = e.nodeBefore, s = r, i = e.pos - 1;
  for (; !s.isTextblock; i--) {
    if (s.type.spec.isolating)
      return !1;
    let u = s.lastChild;
    if (!u)
      return !1;
    s = u;
  }
  let o = e.nodeAfter, l = o, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let u = l.firstChild;
    if (!u)
      return !1;
    l = u;
  }
  let c = zr(n.doc, i, a, w.empty);
  if (!c || c.from != i || c instanceof G && c.slice.size >= a - i)
    return !1;
  if (t) {
    let u = n.tr.step(c);
    u.setSelection(T.create(u.doc, i)), t(u.scrollIntoView());
  }
  return !0;
}
function Ht(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const Ya = (n, e, t) => {
  let { $head: r, empty: s } = n.selection, i = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    i = Mi(r);
  }
  let o = i && i.nodeBefore;
  return !o || !x.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(x.create(n.doc, i.pos - o.nodeSize)).scrollIntoView()), !0);
};
function Mi(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Xa(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const Qa = (n, e, t) => {
  let r = Xa(n, t);
  if (!r)
    return !1;
  let s = Ti(r);
  if (!s)
    return !1;
  let i = s.nodeAfter;
  if (rc(n, s, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Ht(i, "start") || x.isSelectable(i))) {
    let o = zr(n.doc, r.before(), r.after(), w.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = n.tr.step(o);
        l.setSelection(Ht(i, "start") ? O.findFrom(l.doc.resolve(l.mapping.map(s.pos)), 1) : x.create(l.doc, l.mapping.map(s.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return i.isAtom && s.depth == r.depth - 1 ? (e && e(n.tr.delete(s.pos, s.pos + i.nodeSize).scrollIntoView()), !0) : !1;
}, Za = (n, e, t) => {
  let { $head: r, empty: s } = n.selection, i = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    i = Ti(r);
  }
  let o = i && i.nodeAfter;
  return !o || !x.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(x.create(n.doc, i.pos)).scrollIntoView()), !0);
};
function Ti(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const $f = (n, e) => {
  let t = n.selection, r = t instanceof x, s;
  if (r) {
    if (t.node.isTextblock || !st(n.doc, t.from))
      return !1;
    s = t.from;
  } else if (s = Br(n.doc, t.from, -1), s == null)
    return !1;
  if (e) {
    let i = n.tr.join(s);
    r && i.setSelection(x.create(i.doc, s - n.doc.resolve(s).nodeBefore.nodeSize)), e(i.scrollIntoView());
  }
  return !0;
}, Vf = (n, e) => {
  let t = n.selection, r;
  if (t instanceof x) {
    if (t.node.isTextblock || !st(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = Br(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, Wf = (n, e) => {
  let { $from: t, $to: r } = n.selection, s = t.blockRange(r), i = s && $t(s);
  return i == null ? !1 : (e && e(n.tr.lift(s, i).scrollIntoView()), !0);
}, ec = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function Ai(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const jf = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let s = t.node(-1), i = t.indexAfter(-1), o = Ai(s.contentMatchAt(i));
  if (!o || !s.canReplaceWith(i, i, o))
    return !1;
  if (e) {
    let l = t.after(), a = n.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(O.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, tc = (n, e) => {
  let t = n.selection, { $from: r, $to: s } = t;
  if (t instanceof de || r.parent.inlineContent || s.parent.inlineContent)
    return !1;
  let i = Ai(s.parent.contentMatchAt(s.indexAfter()));
  if (!i || !i.isTextblock)
    return !1;
  if (e) {
    let o = (!r.parentOffset && s.index() < s.parent.childCount ? r : s).pos, l = n.tr.insert(o, i.createAndFill());
    l.setSelection(T.create(l.doc, o + 1)), e(l.scrollIntoView());
  }
  return !0;
}, nc = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let i = t.before();
    if (Ve(n.doc, i))
      return e && e(n.tr.split(i).scrollIntoView()), !0;
  }
  let r = t.blockRange(), s = r && $t(r);
  return s == null ? !1 : (e && e(n.tr.lift(r, s).scrollIntoView()), !0);
};
function Kf(n) {
  return (e, t) => {
    let { $from: r, $to: s } = e.selection;
    if (e.selection instanceof x && e.selection.node.isBlock)
      return !r.parentOffset || !Ve(e.doc, r.pos) ? !1 : (t && t(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let i = [], o, l, a = !1, c = !1;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        a = r.end(h) == r.pos + (r.depth - h), c = r.start(h) == r.pos - (r.depth - h), l = Ai(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), i.unshift(a && l ? { type: l } : null), o = h;
        break;
      } else {
        if (h == 1)
          return !1;
        i.unshift(null);
      }
    let u = e.tr;
    (e.selection instanceof T || e.selection instanceof de) && u.deleteSelection();
    let d = u.mapping.map(r.pos), f = Ve(u.doc, d, i.length, i);
    if (f || (i[0] = l ? { type: l } : null, f = Ve(u.doc, d, i.length, i)), !f)
      return !1;
    if (u.split(d, i.length, i), !a && c && r.node(o).type != l) {
      let h = u.mapping.map(r.before(o)), p = u.doc.resolve(h);
      l && r.node(o - 1).canReplaceWith(p.index(), p.index() + 1, l) && u.setNodeMarkup(u.mapping.map(r.before(o)), l);
    }
    return t && t(u.scrollIntoView()), !0;
  };
}
const Uf = Kf(), qf = (n, e) => {
  let { $from: t, to: r } = n.selection, s, i = t.sharedDepth(r);
  return i == 0 ? !1 : (s = t.before(i), e && e(n.tr.setSelection(x.create(n.doc, s))), !0);
};
function Jf(n, e, t) {
  let r = e.nodeBefore, s = e.nodeAfter, i = e.index();
  return !r || !s || !r.type.compatibleContent(s.type) ? !1 : !r.content.size && e.parent.canReplace(i - 1, i) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(i, i + 1) || !(s.isTextblock || st(n.doc, e.pos)) ? !1 : (t && t(n.tr.join(e.pos).scrollIntoView()), !0);
}
function rc(n, e, t, r) {
  let s = e.nodeBefore, i = e.nodeAfter, o, l, a = s.type.spec.isolating || i.type.spec.isolating;
  if (!a && Jf(n, e, t))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (o = (l = s.contentMatchAt(s.childCount)).findWrapping(i.type)) && l.matchType(o[0] || i.type).validEnd) {
    if (t) {
      let h = e.pos + i.nodeSize, p = b.empty;
      for (let y = o.length - 1; y >= 0; y--)
        p = b.from(o[y].create(null, p));
      p = b.from(s.copy(p));
      let m = n.tr.step(new X(e.pos - 1, h, e.pos, h, new w(p, 1, 0), o.length, !0)), g = m.doc.resolve(h + 2 * o.length);
      g.nodeAfter && g.nodeAfter.type == s.type && st(m.doc, g.pos) && m.join(g.pos), t(m.scrollIntoView());
    }
    return !0;
  }
  let u = i.type.spec.isolating || r > 0 && a ? null : O.findFrom(e, 1), d = u && u.$from.blockRange(u.$to), f = d && $t(d);
  if (f != null && f >= e.depth)
    return t && t(n.tr.lift(d, f).scrollIntoView()), !0;
  if (c && Ht(i, "start", !0) && Ht(s, "end")) {
    let h = s, p = [];
    for (; p.push(h), !h.isTextblock; )
      h = h.lastChild;
    let m = i, g = 1;
    for (; !m.isTextblock; m = m.firstChild)
      g++;
    if (h.canReplace(h.childCount, h.childCount, m.content)) {
      if (t) {
        let y = b.empty;
        for (let A = p.length - 1; A >= 0; A--)
          y = b.from(p[A].copy(y));
        let S = n.tr.step(new X(e.pos - p.length, e.pos + i.nodeSize, e.pos + g, e.pos + i.nodeSize - g, new w(y, p.length, 0), 0, !0));
        t(S.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function sc(n) {
  return function(e, t) {
    let r = e.selection, s = n < 0 ? r.$from : r.$to, i = s.depth;
    for (; s.node(i).isInline; ) {
      if (!i)
        return !1;
      i--;
    }
    return s.node(i).isTextblock ? (t && t(e.tr.setSelection(T.create(e.doc, n < 0 ? s.start(i) : s.end(i)))), !0) : !1;
  };
}
const _f = sc(-1), Gf = sc(1);
function Yf(n, e = null) {
  return function(t, r) {
    let { $from: s, $to: i } = t.selection, o = s.blockRange(i), l = o && ui(o, n, e);
    return l ? (r && r(t.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function Yo(n, e = null) {
  return function(t, r) {
    let s = !1;
    for (let i = 0; i < t.selection.ranges.length && !s; i++) {
      let { $from: { pos: o }, $to: { pos: l } } = t.selection.ranges[i];
      t.doc.nodesBetween(o, l, (a, c) => {
        if (s)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(n, e)))
          if (a.type == n)
            s = !0;
          else {
            let u = t.doc.resolve(c), d = u.index();
            s = u.parent.canReplaceWith(d, d + 1, n);
          }
      });
    }
    if (!s)
      return !1;
    if (r) {
      let i = t.tr;
      for (let o = 0; o < t.selection.ranges.length; o++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[o];
        i.setBlockType(l, a, n, e);
      }
      r(i.scrollIntoView());
    }
    return !0;
  };
}
function Ei(...n) {
  return function(e, t, r) {
    for (let s = 0; s < n.length; s++)
      if (n[s](e, t, r))
        return !0;
    return !1;
  };
}
Ei(xi, _a, Ya);
Ei(xi, Qa, Za);
Ei(ec, tc, nc, Uf);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function Xf(n, e = null) {
  return function(t, r) {
    let { $from: s, $to: i } = t.selection, o = s.blockRange(i);
    if (!o)
      return !1;
    let l = r ? t.tr : null;
    return Qf(l, o, n, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function Qf(n, e, t, r = null) {
  let s = !1, i = e, o = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(t) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = o.resolve(e.start - 2);
    i = new Qn(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new Qn(e.$from, o.resolve(e.$to.end(e.depth)), e.depth)), s = !0;
  }
  let l = ui(i, t, r, e);
  return l ? (n && Zf(n, e, l, s, t), !0) : !1;
}
function Zf(n, e, t, r, s) {
  let i = b.empty;
  for (let u = t.length - 1; u >= 0; u--)
    i = b.from(t[u].type.create(t[u].attrs, i));
  n.step(new X(e.start - (r ? 2 : 0), e.end, e.start, e.end, new w(i, 0, 0), t.length, !0));
  let o = 0;
  for (let u = 0; u < t.length; u++)
    t[u].type == s && (o = u + 1);
  let l = t.length - o, a = e.start + t.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++, f = !1)
    !f && Ve(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return n;
}
function eh(n) {
  return function(e, t) {
    let { $from: r, $to: s } = e.selection, i = r.blockRange(s, (o) => o.childCount > 0 && o.firstChild.type == n);
    return i ? t ? r.node(i.depth - 1).type == n ? th(e, t, n, i) : nh(e, t, i) : !0 : !1;
  };
}
function th(n, e, t, r) {
  let s = n.tr, i = r.end, o = r.$to.end(r.depth);
  i < o && (s.step(new X(i - 1, o, i, o, new w(b.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Qn(s.doc.resolve(r.$from.pos), s.doc.resolve(o), r.depth));
  const l = $t(r);
  if (l == null)
    return !1;
  s.lift(r, l);
  let a = s.doc.resolve(s.mapping.map(i, -1) - 1);
  return st(s.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && s.join(a.pos), e(s.scrollIntoView()), !0;
}
function nh(n, e, t) {
  let r = n.tr, s = t.parent;
  for (let h = t.end, p = t.endIndex - 1, m = t.startIndex; p > m; p--)
    h -= s.child(p).nodeSize, r.delete(h - 1, h + 1);
  let i = r.doc.resolve(t.start), o = i.nodeAfter;
  if (r.mapping.map(t.end) != t.start + i.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == s.childCount, c = i.node(-1), u = i.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, o.content.append(a ? b.empty : b.from(s))))
    return !1;
  let d = i.pos, f = d + o.nodeSize;
  return r.step(new X(d - (l ? 1 : 0), f + (a ? 1 : 0), d + 1, f - 1, new w((l ? b.empty : b.from(s.copy(b.empty))).append(a ? b.empty : b.from(s.copy(b.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function rh(n) {
  return function(e, t) {
    let { $from: r, $to: s } = e.selection, i = r.blockRange(s, (c) => c.childCount > 0 && c.firstChild.type == n);
    if (!i)
      return !1;
    let o = i.startIndex;
    if (o == 0)
      return !1;
    let l = i.parent, a = l.child(o - 1);
    if (a.type != n)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, u = b.from(c ? n.create() : null), d = new w(b.from(n.create(null, b.from(l.type.create(null, u)))), c ? 3 : 1, 0), f = i.start, h = i.end;
      t(e.tr.step(new X(f - (c ? 3 : 1), h, f, h, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function Wr(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: s } = t, { storedMarks: i } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return i;
    },
    get selection() {
      return r;
    },
    get doc() {
      return s;
    },
    get tr() {
      return r = t.selection, s = t.doc, i = t.storedMarks, t;
    }
  };
}
class jr {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: t, state: r } = this, { view: s } = t, { tr: i } = r, o = this.buildProps(i);
    return Object.fromEntries(Object.entries(e).map(([l, a]) => [l, (...u) => {
      const d = a(...u)(o);
      return !i.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(i), d;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: r, editor: s, state: i } = this, { view: o } = s, l = [], a = !!e, c = e || i.tr, u = () => (!a && t && !c.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(c), l.every((f) => f === !0)), d = {
      ...Object.fromEntries(Object.entries(r).map(([f, h]) => [f, (...m) => {
        const g = this.buildProps(c, t), y = h(...m)(g);
        return l.push(y), d;
      }])),
      run: u
    };
    return d;
  }
  createCan(e) {
    const { rawCommands: t, state: r } = this, s = !1, i = e || r.tr, o = this.buildProps(i, s);
    return {
      ...Object.fromEntries(Object.entries(t).map(([a, c]) => [a, (...u) => c(...u)({ ...o, dispatch: void 0 })])),
      chain: () => this.createChain(i, s)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: r, editor: s, state: i } = this, { view: o } = s, l = {
      tr: e,
      editor: s,
      view: o,
      state: Wr({
        state: i,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([a, c]) => [a, (...u) => c(...u)(l)]));
      }
    };
    return l;
  }
}
class sh {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const r = this.callbacks[e];
    return r && r.forEach((s) => s.apply(this, t)), this;
  }
  off(e, t) {
    const r = this.callbacks[e];
    return r && (t ? this.callbacks[e] = r.filter((s) => s !== t) : delete this.callbacks[e]), this;
  }
  once(e, t) {
    const r = (...s) => {
      this.off(e, r), t.apply(this, s);
    };
    return this.on(e, r);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function C(n, e, t) {
  return n.config[e] === void 0 && n.parent ? C(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? C(n.parent, e, t) : null
  }) : n.config[e];
}
function Kr(n) {
  const e = n.filter((s) => s.type === "extension"), t = n.filter((s) => s.type === "node"), r = n.filter((s) => s.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function ic(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = Kr(n), s = [...t, ...r], i = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage,
      extensions: s
    }, a = C(o, "addGlobalAttributes", l);
    if (!a)
      return;
    a().forEach((u) => {
      u.types.forEach((d) => {
        Object.entries(u.attributes).forEach(([f, h]) => {
          e.push({
            type: d,
            name: f,
            attribute: {
              ...i,
              ...h
            }
          });
        });
      });
    });
  }), s.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = C(o, "addAttributes", l);
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([u, d]) => {
      const f = {
        ...i,
        ...d
      };
      typeof f?.default == "function" && (f.default = f.default()), f?.isRequired && f?.default === void 0 && delete f.default, e.push({
        type: o.name,
        name: u,
        attribute: f
      });
    });
  }), e;
}
function Z(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function D(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([s, i]) => {
      if (!r[s]) {
        r[s] = i;
        return;
      }
      if (s === "class") {
        const l = i ? String(i).split(" ") : [], a = r[s] ? r[s].split(" ") : [], c = l.filter((u) => !a.includes(u));
        r[s] = [...a, ...c].join(" ");
      } else if (s === "style") {
        const l = i ? i.split(";").map((u) => u.trim()).filter(Boolean) : [], a = r[s] ? r[s].split(";").map((u) => u.trim()).filter(Boolean) : [], c = /* @__PURE__ */ new Map();
        a.forEach((u) => {
          const [d, f] = u.split(":").map((h) => h.trim());
          c.set(d, f);
        }), l.forEach((u) => {
          const [d, f] = u.split(":").map((h) => h.trim());
          c.set(d, f);
        }), r[s] = Array.from(c.entries()).map(([u, d]) => `${u}: ${d}`).join("; ");
      } else
        r[s] = i;
    }), r;
  }, {});
}
function Ks(n, e) {
  return e.filter((t) => t.type === n.type.name).filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => D(t, r), {});
}
function oc(n) {
  return typeof n == "function";
}
function N(n, e = void 0, ...t) {
  return oc(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function ih(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function oh(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function Xo(n, e) {
  return "style" in n ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const s = e.reduce((i, o) => {
        const l = o.attribute.parseHTML ? o.attribute.parseHTML(t) : oh(t.getAttribute(o.name));
        return l == null ? i : {
          ...i,
          [o.name]: l
        };
      }, {});
      return { ...r, ...s };
    }
  };
}
function Qo(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([e, t]) => e === "attrs" && ih(t) ? !1 : t != null)
  );
}
function lc(n, e) {
  var t;
  const r = ic(n), { nodeExtensions: s, markExtensions: i } = Kr(n), o = (t = s.find((c) => C(c, "topNode"))) === null || t === void 0 ? void 0 : t.name, l = Object.fromEntries(s.map((c) => {
    const u = r.filter((y) => y.type === c.name), d = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, f = n.reduce((y, S) => {
      const A = C(S, "extendNodeSchema", d);
      return {
        ...y,
        ...A ? A(c) : {}
      };
    }, {}), h = Qo({
      ...f,
      content: N(C(c, "content", d)),
      marks: N(C(c, "marks", d)),
      group: N(C(c, "group", d)),
      inline: N(C(c, "inline", d)),
      atom: N(C(c, "atom", d)),
      selectable: N(C(c, "selectable", d)),
      draggable: N(C(c, "draggable", d)),
      code: N(C(c, "code", d)),
      whitespace: N(C(c, "whitespace", d)),
      linebreakReplacement: N(C(c, "linebreakReplacement", d)),
      defining: N(C(c, "defining", d)),
      isolating: N(C(c, "isolating", d)),
      attrs: Object.fromEntries(u.map((y) => {
        var S;
        return [y.name, { default: (S = y?.attribute) === null || S === void 0 ? void 0 : S.default }];
      }))
    }), p = N(C(c, "parseHTML", d));
    p && (h.parseDOM = p.map((y) => Xo(y, u)));
    const m = C(c, "renderHTML", d);
    m && (h.toDOM = (y) => m({
      node: y,
      HTMLAttributes: Ks(y, u)
    }));
    const g = C(c, "renderText", d);
    return g && (h.toText = g), [c.name, h];
  })), a = Object.fromEntries(i.map((c) => {
    const u = r.filter((g) => g.type === c.name), d = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, f = n.reduce((g, y) => {
      const S = C(y, "extendMarkSchema", d);
      return {
        ...g,
        ...S ? S(c) : {}
      };
    }, {}), h = Qo({
      ...f,
      inclusive: N(C(c, "inclusive", d)),
      excludes: N(C(c, "excludes", d)),
      group: N(C(c, "group", d)),
      spanning: N(C(c, "spanning", d)),
      code: N(C(c, "code", d)),
      attrs: Object.fromEntries(u.map((g) => {
        var y;
        return [g.name, { default: (y = g?.attribute) === null || y === void 0 ? void 0 : y.default }];
      }))
    }), p = N(C(c, "parseHTML", d));
    p && (h.parseDOM = p.map((g) => Xo(g, u)));
    const m = C(c, "renderHTML", d);
    return m && (h.toDOM = (g) => m({
      mark: g,
      HTMLAttributes: Ks(g, u)
    })), [c.name, h];
  }));
  return new _l({
    topNode: o,
    nodes: l,
    marks: a
  });
}
function gs(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function Zo(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
function Ur(n, e) {
  const t = Tt.fromSchema(e).serializeFragment(n), s = document.implementation.createHTMLDocument().createElement("div");
  return s.appendChild(t), s.innerHTML;
}
const lh = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (s, i, o, l) => {
    var a, c;
    const u = ((c = (a = s.type.spec).toText) === null || c === void 0 ? void 0 : c.call(a, {
      node: s,
      pos: i,
      parent: o,
      index: l
    })) || s.textContent || "%leaf%";
    t += s.isAtom && !s.isText ? u : u.slice(0, Math.max(0, r - i));
  }), t;
};
function Oi(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class xn {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const ah = (n, e) => {
  if (Oi(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function vn(n) {
  var e;
  const { editor: t, from: r, to: s, text: i, rules: o, plugin: l } = n, { view: a } = t;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || !((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find((f) => f.type.spec.code)
  )
    return !1;
  let u = !1;
  const d = lh(c) + i;
  return o.forEach((f) => {
    if (u)
      return;
    const h = ah(d, f.find);
    if (!h)
      return;
    const p = a.state.tr, m = Wr({
      state: a.state,
      transaction: p
    }), g = {
      from: r - (h[0].length - i.length),
      to: s
    }, { commands: y, chain: S, can: A } = new jr({
      editor: t,
      state: m
    });
    f.handler({
      state: m,
      range: g,
      match: h,
      commands: y,
      chain: S,
      can: A
    }) === null || !p.steps.length || (p.setMeta(l, {
      transform: p,
      from: r,
      to: s,
      text: i
    }), a.dispatch(p), u = !0);
  }), u;
}
function ch(n) {
  const { editor: e, rules: t } = n, r = new $({
    state: {
      init() {
        return null;
      },
      apply(s, i, o) {
        const l = s.getMeta(r);
        if (l)
          return l;
        const a = s.getMeta("applyInputRules");
        return !!a && setTimeout(() => {
          let { text: u } = a;
          typeof u == "string" ? u = u : u = Ur(b.from(u), o.schema);
          const { from: d } = a, f = d + u.length;
          vn({
            editor: e,
            from: d,
            to: f,
            text: u,
            rules: t,
            plugin: r
          });
        }), s.selectionSet || s.docChanged ? null : i;
      }
    },
    props: {
      handleTextInput(s, i, o, l) {
        return vn({
          editor: e,
          from: i,
          to: o,
          text: l,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (s) => (setTimeout(() => {
          const { $cursor: i } = s.state.selection;
          i && vn({
            editor: e,
            from: i.pos,
            to: i.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(s, i) {
        if (i.key !== "Enter")
          return !1;
        const { $cursor: o } = s.state.selection;
        return o ? vn({
          editor: e,
          from: o.pos,
          to: o.pos,
          text: `
`,
          rules: t,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function uh(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function Rn(n) {
  return uh(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function qr(n, e) {
  const t = { ...n };
  return Rn(n) && Rn(e) && Object.keys(e).forEach((r) => {
    Rn(e[r]) && Rn(n[r]) ? t[r] = qr(n[r], e[r]) : t[r] = e[r];
  }), t;
}
class he {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = N(C(this, "addOptions", {
      name: this.name
    }))), this.storage = N(C(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new he(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => qr(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new he(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = N(C(t, "addOptions", {
      name: t.name
    })), t.storage = N(C(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, s = e.state.selection.$from;
    if (s.pos === s.end()) {
      const o = s.marks();
      if (!!!o.find((c) => c?.type.name === t.name))
        return !1;
      const a = o.find((c) => c?.type.name === t.name);
      return a && r.removeStoredMark(a), r.insertText(" ", s.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
function dh(n) {
  return typeof n == "number";
}
class Ni {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const fh = (n, e, t) => {
  if (Oi(e))
    return [...n.matchAll(e)];
  const r = e(n, t);
  return r ? r.map((s) => {
    const i = [s.text];
    return i.index = s.index, i.input = n, i.data = s.data, s.replaceWith && (s.text.includes(s.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), i.push(s.replaceWith)), i;
  }) : [];
};
function hh(n) {
  const { editor: e, state: t, from: r, to: s, rule: i, pasteEvent: o, dropEvent: l } = n, { commands: a, chain: c, can: u } = new jr({
    editor: e,
    state: t
  }), d = [];
  return t.doc.nodesBetween(r, s, (h, p) => {
    if (!h.isTextblock || h.type.spec.code)
      return;
    const m = Math.max(r, p), g = Math.min(s, p + h.content.size), y = h.textBetween(m - p, g - p, void 0, "￼");
    fh(y, i.find, o).forEach((A) => {
      if (A.index === void 0)
        return;
      const R = m + A.index + 1, M = R + A[0].length, I = {
        from: t.tr.mapping.map(R),
        to: t.tr.mapping.map(M)
      }, H = i.handler({
        state: t,
        range: I,
        match: A,
        commands: a,
        chain: c,
        can: u,
        pasteEvent: o,
        dropEvent: l
      });
      d.push(H);
    });
  }), d.every((h) => h !== null);
}
let Dn = null;
const ph = (n) => {
  var e;
  const t = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = t.clipboardData) === null || e === void 0 || e.setData("text/html", n), t;
};
function mh(n) {
  const { editor: e, rules: t } = n;
  let r = null, s = !1, i = !1, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l;
  try {
    l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    l = null;
  }
  const a = ({ state: u, from: d, to: f, rule: h, pasteEvt: p }) => {
    const m = u.tr, g = Wr({
      state: u,
      transaction: m
    });
    if (!(!hh({
      editor: e,
      state: g,
      from: Math.max(d - 1, 0),
      to: f.b - 1,
      rule: h,
      pasteEvent: p,
      dropEvent: l
    }) || !m.steps.length)) {
      try {
        l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        l = null;
      }
      return o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, m;
    }
  };
  return t.map((u) => new $({
    // we register a global drag handler to track the current drag source element
    view(d) {
      const f = (p) => {
        var m;
        r = !((m = d.dom.parentElement) === null || m === void 0) && m.contains(p.target) ? d.dom.parentElement : null, r && (Dn = e);
      }, h = () => {
        Dn && (Dn = null);
      };
      return window.addEventListener("dragstart", f), window.addEventListener("dragend", h), {
        destroy() {
          window.removeEventListener("dragstart", f), window.removeEventListener("dragend", h);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (d, f) => {
          if (i = r === d.dom.parentElement, l = f, !i) {
            const h = Dn;
            h?.isEditable && setTimeout(() => {
              const p = h.state.selection;
              p && h.commands.deleteRange({ from: p.from, to: p.to });
            }, 10);
          }
          return !1;
        },
        paste: (d, f) => {
          var h;
          const p = (h = f.clipboardData) === null || h === void 0 ? void 0 : h.getData("text/html");
          return o = f, s = !!p?.includes("data-pm-slice"), !1;
        }
      }
    },
    appendTransaction: (d, f, h) => {
      const p = d[0], m = p.getMeta("uiEvent") === "paste" && !s, g = p.getMeta("uiEvent") === "drop" && !i, y = p.getMeta("applyPasteRules"), S = !!y;
      if (!m && !g && !S)
        return;
      if (S) {
        let { text: M } = y;
        typeof M == "string" ? M = M : M = Ur(b.from(M), h.schema);
        const { from: I } = y, H = I + M.length, E = ph(M);
        return a({
          rule: u,
          state: h,
          from: I,
          to: { b: H },
          pasteEvt: E
        });
      }
      const A = f.doc.content.findDiffStart(h.doc.content), R = f.doc.content.findDiffEnd(h.doc.content);
      if (!(!dh(A) || !R || A === R.b))
        return a({
          rule: u,
          state: h,
          from: A,
          to: R,
          pasteEvt: o
        });
    }
  }));
}
function gh(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return Array.from(new Set(e));
}
class ft {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = ft.resolve(e), this.schema = lc(this.extensions, t), this.setupExtensions();
  }
  /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */
  static resolve(e) {
    const t = ft.sort(ft.flatten(e)), r = gh(t.map((s) => s.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((s) => `'${s}'`).join(", ")}]. This can lead to issues.`), t;
  }
  /**
   * Create a flattened array of extensions by traversing the `addExtensions` field.
   * @param extensions An array of Tiptap extensions
   * @returns A flattened array of Tiptap extensions
   */
  static flatten(e) {
    return e.map((t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, s = C(t, "addExtensions", r);
      return s ? [t, ...this.flatten(s())] : t;
    }).flat(10);
  }
  /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */
  static sort(e) {
    return e.sort((r, s) => {
      const i = C(r, "priority") || 100, o = C(s, "priority") || 100;
      return i > o ? -1 : i < o ? 1 : 0;
    });
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((e, t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: gs(t.name, this.schema)
      }, s = C(t, "addCommands", r);
      return s ? {
        ...e,
        ...s()
      } : e;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: e } = this, t = ft.sort([...this.extensions].reverse()), r = [], s = [], i = t.map((o) => {
      const l = {
        name: o.name,
        options: o.options,
        storage: o.storage,
        editor: e,
        type: gs(o.name, this.schema)
      }, a = [], c = C(o, "addKeyboardShortcuts", l);
      let u = {};
      if (o.type === "mark" && C(o, "exitable", l) && (u.ArrowRight = () => he.handleExit({ editor: e, mark: o })), c) {
        const m = Object.fromEntries(Object.entries(c()).map(([g, y]) => [g, () => y({ editor: e })]));
        u = { ...u, ...m };
      }
      const d = zf(u);
      a.push(d);
      const f = C(o, "addInputRules", l);
      Zo(o, e.options.enableInputRules) && f && r.push(...f());
      const h = C(o, "addPasteRules", l);
      Zo(o, e.options.enablePasteRules) && h && s.push(...h());
      const p = C(o, "addProseMirrorPlugins", l);
      if (p) {
        const m = p();
        a.push(...m);
      }
      return a;
    }).flat();
    return [
      ch({
        editor: e,
        rules: r
      }),
      ...mh({
        editor: e,
        rules: s
      }),
      ...i
    ];
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return ic(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = Kr(this.extensions);
    return Object.fromEntries(t.filter((r) => !!C(r, "addNodeView")).map((r) => {
      const s = this.attributes.filter((a) => a.type === r.name), i = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: Z(r.name, this.schema)
      }, o = C(r, "addNodeView", i);
      if (!o)
        return [];
      const l = (a, c, u, d, f) => {
        const h = Ks(a, s);
        return o()({
          // pass-through
          node: a,
          view: c,
          getPos: u,
          decorations: d,
          innerDecorations: f,
          // tiptap-specific
          editor: e,
          extension: r,
          HTMLAttributes: h
        });
      };
      return [r.name, l];
    }));
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    this.extensions.forEach((e) => {
      var t;
      this.editor.extensionStorage[e.name] = e.storage;
      const r = {
        name: e.name,
        options: e.options,
        storage: e.storage,
        editor: this.editor,
        type: gs(e.name, this.schema)
      };
      e.type === "mark" && (!((t = N(C(e, "keepOnSplit", r))) !== null && t !== void 0) || t) && this.splittableMarks.push(e.name);
      const s = C(e, "onBeforeCreate", r), i = C(e, "onCreate", r), o = C(e, "onUpdate", r), l = C(e, "onSelectionUpdate", r), a = C(e, "onTransaction", r), c = C(e, "onFocus", r), u = C(e, "onBlur", r), d = C(e, "onDestroy", r);
      s && this.editor.on("beforeCreate", s), i && this.editor.on("create", i), o && this.editor.on("update", o), l && this.editor.on("selectionUpdate", l), a && this.editor.on("transaction", a), c && this.editor.on("focus", c), u && this.editor.on("blur", u), d && this.editor.on("destroy", d);
    });
  }
}
class W {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = N(C(this, "addOptions", {
      name: this.name
    }))), this.storage = N(C(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new W(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => qr(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new W({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = N(C(t, "addOptions", {
      name: t.name
    })), t.storage = N(C(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function ac(n, e, t) {
  const { from: r, to: s } = e, { blockSeparator: i = `

`, textSerializers: o = {} } = t || {};
  let l = "";
  return n.nodesBetween(r, s, (a, c, u, d) => {
    var f;
    a.isBlock && c > r && (l += i);
    const h = o?.[a.type.name];
    if (h)
      return u && (l += h({
        node: a,
        pos: c,
        parent: u,
        index: d,
        range: e
      })), !1;
    a.isText && (l += (f = a?.text) === null || f === void 0 ? void 0 : f.slice(Math.max(r, c) - c, s - c));
  }), l;
}
function vi(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const cc = W.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new $({
        key: new J("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: s } = e, { ranges: i } = s, o = Math.min(...i.map((u) => u.$from.pos)), l = Math.max(...i.map((u) => u.$to.pos)), a = vi(t);
            return ac(r, { from: o, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), yh = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window?.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), bh = (n = !1) => ({ commands: e }) => e.setContent("", n), kh = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: s } = r;
  return t && s.forEach(({ $from: i, $to: o }) => {
    n.doc.nodesBetween(i.pos, o.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: u } = e, d = c.resolve(u.map(a)), f = c.resolve(u.map(a + l.nodeSize)), h = d.blockRange(f);
      if (!h)
        return;
      const p = $t(h);
      if (l.type.isTextblock) {
        const { defaultType: m } = d.parent.contentMatchAt(d.index());
        e.setNodeMarkup(h.start, m);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), !0;
}, Sh = (n) => (e) => n(e), wh = () => ({ state: n, dispatch: e }) => tc(n, e), Ch = (n, e) => ({ editor: t, tr: r }) => {
  const { state: s } = t, i = s.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const o = r.mapping.map(e);
  return r.insert(o, i.content), r.setSelection(new T(r.doc.resolve(Math.max(o - 1, 0)))), !0;
}, xh = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const s = n.selection.$anchor;
  for (let i = s.depth; i > 0; i -= 1)
    if (s.node(i).type === r.type) {
      if (e) {
        const l = s.before(i), a = s.after(i);
        n.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Mh = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const s = Z(n, t.schema), i = e.selection.$anchor;
  for (let o = i.depth; o > 0; o -= 1)
    if (i.node(o).type === s) {
      if (r) {
        const a = i.before(o), c = i.after(o);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Th = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: s } = n;
  return t && e.delete(r, s), !0;
}, Ah = () => ({ state: n, dispatch: e }) => xi(n, e), Eh = () => ({ commands: n }) => n.keyboardShortcut("Enter"), Oh = () => ({ state: n, dispatch: e }) => jf(n, e);
function or(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((s) => t.strict ? e[s] === n[s] : Oi(e[s]) ? e[s].test(n[s]) : e[s] === n[s]) : !0;
}
function uc(n, e, t = {}) {
  return n.find((r) => r.type === e && or(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(t).map((s) => [s, r.attrs[s]])),
    t
  ));
}
function el(n, e, t = {}) {
  return !!uc(n, e, t);
}
function Ri(n, e, t) {
  var r;
  if (!n || !e)
    return;
  let s = n.parent.childAfter(n.parentOffset);
  if ((!s.node || !s.node.marks.some((u) => u.type === e)) && (s = n.parent.childBefore(n.parentOffset)), !s.node || !s.node.marks.some((u) => u.type === e) || (t = t || ((r = s.node.marks[0]) === null || r === void 0 ? void 0 : r.attrs), !uc([...s.node.marks], e, t)))
    return;
  let o = s.index, l = n.start() + s.offset, a = o + 1, c = l + s.node.nodeSize;
  for (; o > 0 && el([...n.parent.child(o - 1).marks], e, t); )
    o -= 1, l -= n.parent.child(o).nodeSize;
  for (; a < n.parent.childCount && el([...n.parent.child(a).marks], e, t); )
    c += n.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function ot(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const Nh = (n, e = {}) => ({ tr: t, state: r, dispatch: s }) => {
  const i = ot(n, r.schema), { doc: o, selection: l } = t, { $from: a, from: c, to: u } = l;
  if (s) {
    const d = Ri(a, i, e);
    if (d && d.from <= c && d.to >= u) {
      const f = T.create(o, d.from, d.to);
      t.setSelection(f);
    }
  }
  return !0;
}, vh = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function dc(n) {
  return n instanceof T;
}
function Fe(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function fc(n, e = null) {
  if (!e)
    return null;
  const t = O.atStart(n), r = O.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const s = t.from, i = r.to;
  return e === "all" ? T.create(n, Fe(0, s, i), Fe(n.content.size, s, i)) : T.create(n, Fe(e, s, i), Fe(e, s, i));
}
function hc() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Jr() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const Rh = (n = null, e = {}) => ({ editor: t, view: r, tr: s, dispatch: i }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    (Jr() || hc()) && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), e?.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (i && n === null && !dc(t.state.selection))
    return o(), !0;
  const l = fc(s.doc, n) || t.state.selection, a = t.state.selection.eq(l);
  return i && (a || s.setSelection(l), a && s.storedMarks && s.setStoredMarks(s.storedMarks), o()), !0;
}, Dh = (n, e) => (t) => n.every((r, s) => e(r, { ...t, index: s })), Ih = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e), pc = (n) => {
  const e = n.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const r = e[t];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && pc(r);
  }
  return n;
};
function _t(n) {
  const e = `<body>${n}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return pc(t);
}
function pn(n, e, t) {
  if (n instanceof Oe || n instanceof b)
    return n;
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const r = typeof n == "object" && n !== null, s = typeof n == "string";
  if (r)
    try {
      if (Array.isArray(n) && n.length > 0)
        return b.fromArray(n.map((l) => e.nodeFromJSON(l)));
      const o = e.nodeFromJSON(n);
      return t.errorOnInvalidContent && o.check(), o;
    } catch (i) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: i });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", i), pn("", e, t);
    }
  if (s) {
    if (t.errorOnInvalidContent) {
      let o = !1, l = "";
      const a = new _l({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (o = !0, l = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (t.slice ? $e.fromSchema(a).parseSlice(_t(n), t.parseOptions) : $e.fromSchema(a).parse(_t(n), t.parseOptions), t.errorOnInvalidContent && o)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${l}`) });
    }
    const i = $e.fromSchema(e);
    return t.slice ? i.parseSlice(_t(n), t.parseOptions).content : i.parse(_t(n), t.parseOptions);
  }
  return pn("", e, t);
}
function Ph(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const s = n.steps[r];
  if (!(s instanceof G || s instanceof X))
    return;
  const i = n.mapping.maps[r];
  let o = 0;
  i.forEach((l, a, c, u) => {
    o === 0 && (o = u);
  }), n.setSelection(O.near(n.doc.resolve(o), t));
}
const Lh = (n) => !("type" in n), Bh = (n, e, t) => ({ tr: r, dispatch: s, editor: i }) => {
  var o;
  if (s) {
    t = {
      parseOptions: i.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...t
    };
    let l;
    const a = (g) => {
      i.emit("contentError", {
        editor: i,
        error: g,
        disableCollaboration: () => {
          i.storage.collaboration && (i.storage.collaboration.isDisabled = !0);
        }
      });
    }, c = {
      preserveWhitespace: "full",
      ...t.parseOptions
    };
    if (!t.errorOnInvalidContent && !i.options.enableContentCheck && i.options.emitContentError)
      try {
        pn(e, i.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (g) {
        a(g);
      }
    try {
      l = pn(e, i.schema, {
        parseOptions: c,
        errorOnInvalidContent: (o = t.errorOnInvalidContent) !== null && o !== void 0 ? o : i.options.enableContentCheck
      });
    } catch (g) {
      return a(g), !1;
    }
    let { from: u, to: d } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, f = !0, h = !0;
    if ((Lh(l) ? l : [l]).forEach((g) => {
      g.check(), f = f ? g.isText && g.marks.length === 0 : !1, h = h ? g.isBlock : !1;
    }), u === d && h) {
      const { parent: g } = r.doc.resolve(u);
      g.isTextblock && !g.type.spec.code && !g.childCount && (u -= 1, d += 1);
    }
    let m;
    if (f) {
      if (Array.isArray(e))
        m = e.map((g) => g.text || "").join("");
      else if (e instanceof b) {
        let g = "";
        e.forEach((y) => {
          y.text && (g += y.text);
        }), m = g;
      } else typeof e == "object" && e && e.text ? m = e.text : m = e;
      r.insertText(m, u, d);
    } else
      m = l, r.replaceWith(u, d, m);
    t.updateSelection && Ph(r, r.steps.length - 1, -1), t.applyInputRules && r.setMeta("applyInputRules", { from: u, text: m }), t.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: m });
  }
  return !0;
}, zh = () => ({ state: n, dispatch: e }) => $f(n, e), Hh = () => ({ state: n, dispatch: e }) => Vf(n, e), Fh = () => ({ state: n, dispatch: e }) => _a(n, e), $h = () => ({ state: n, dispatch: e }) => Qa(n, e), Vh = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Br(n.doc, n.selection.$from.pos, -1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, Wh = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Br(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, jh = () => ({ state: n, dispatch: e }) => Hf(n, e), Kh = () => ({ state: n, dispatch: e }) => Ff(n, e);
function mc() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Uh(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, s, i, o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      s = !0;
    else if (/^s(hift)?$/i.test(a))
      i = !0;
    else if (/^mod$/i.test(a))
      Jr() || mc() ? o = !0 : s = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (t = `Alt-${t}`), s && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), i && (t = `Shift-${t}`), t;
}
const qh = (n) => ({ editor: e, view: t, tr: r, dispatch: s }) => {
  const i = Uh(n).split(/-(?!$)/), o = i.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: i.includes("Alt"),
    ctrlKey: i.includes("Ctrl"),
    metaKey: i.includes("Meta"),
    shiftKey: i.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, l));
  });
  return a?.steps.forEach((c) => {
    const u = c.map(r.mapping);
    u && s && r.maybeStep(u);
  }), !0;
};
function mn(n, e, t = {}) {
  const { from: r, to: s, empty: i } = n.selection, o = e ? Z(e, n.schema) : null, l = [];
  n.doc.nodesBetween(r, s, (d, f) => {
    if (d.isText)
      return;
    const h = Math.max(r, f), p = Math.min(s, f + d.nodeSize);
    l.push({
      node: d,
      from: h,
      to: p
    });
  });
  const a = s - r, c = l.filter((d) => o ? o.name === d.node.type.name : !0).filter((d) => or(d.node.attrs, t, { strict: !1 }));
  return i ? !!c.length : c.reduce((d, f) => d + f.to - f.from, 0) >= a;
}
const Jh = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const s = Z(n, t.schema);
  return mn(t, s, e) ? Wf(t, r) : !1;
}, _h = () => ({ state: n, dispatch: e }) => nc(n, e), Gh = (n) => ({ state: e, dispatch: t }) => {
  const r = Z(n, e.schema);
  return eh(r)(e, t);
}, Yh = () => ({ state: n, dispatch: e }) => ec(n, e);
function _r(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function tl(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, s) => (t.includes(s) || (r[s] = n[s]), r), {});
}
const Xh = (n, e) => ({ tr: t, state: r, dispatch: s }) => {
  let i = null, o = null;
  const l = _r(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (i = Z(n, r.schema)), l === "mark" && (o = ot(n, r.schema)), s && t.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, u) => {
      i && i === c.type && t.setNodeMarkup(u, void 0, tl(c.attrs, e)), o && c.marks.length && c.marks.forEach((d) => {
        o === d.type && t.addMark(u, u + c.nodeSize, o.create(tl(d.attrs, e)));
      });
    });
  }), !0) : !1;
}, Qh = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), Zh = () => ({ tr: n, dispatch: e }) => {
  if (e) {
    const t = new de(n.doc);
    n.setSelection(t);
  }
  return !0;
}, ep = () => ({ state: n, dispatch: e }) => Ya(n, e), tp = () => ({ state: n, dispatch: e }) => Za(n, e), np = () => ({ state: n, dispatch: e }) => qf(n, e), rp = () => ({ state: n, dispatch: e }) => Gf(n, e), sp = () => ({ state: n, dispatch: e }) => _f(n, e);
function Us(n, e, t = {}, r = {}) {
  return pn(n, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
const ip = (n, e = !1, t = {}, r = {}) => ({ editor: s, tr: i, dispatch: o, commands: l }) => {
  var a, c;
  const { doc: u } = i;
  if (t.preserveWhitespace !== "full") {
    const d = Us(n, s.schema, t, {
      errorOnInvalidContent: (a = r.errorOnInvalidContent) !== null && a !== void 0 ? a : s.options.enableContentCheck
    });
    return o && i.replaceWith(0, u.content.size, d).setMeta("preventUpdate", !e), !0;
  }
  return o && i.setMeta("preventUpdate", !e), l.insertContentAt({ from: 0, to: u.content.size }, n, {
    parseOptions: t,
    errorOnInvalidContent: (c = r.errorOnInvalidContent) !== null && c !== void 0 ? c : s.options.enableContentCheck
  });
};
function gc(n, e) {
  const t = ot(e, n.schema), { from: r, to: s, empty: i } = n.selection, o = [];
  i ? (n.storedMarks && o.push(...n.storedMarks), o.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, s, (a) => {
    o.push(...a.marks);
  });
  const l = o.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function op(n, e) {
  const t = new di(n);
  return e.forEach((r) => {
    r.steps.forEach((s) => {
      t.step(s);
    });
  }), t;
}
function lp(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function Ey(n, e) {
  const t = [];
  return n.descendants((r, s) => {
    e(r) && t.push({
      node: r,
      pos: s
    });
  }), t;
}
function ap(n, e, t) {
  const r = [];
  return n.nodesBetween(e.from, e.to, (s, i) => {
    t(s) && r.push({
      node: s,
      pos: i
    });
  }), r;
}
function yc(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
  }
}
function Mn(n) {
  return (e) => yc(e.$from, n);
}
function Di(n, e) {
  const t = ft.resolve(n);
  return lc(t, e);
}
function Oy(n, e) {
  const t = Di(e), r = Oe.fromJSON(t, n);
  return Ur(r.content, t);
}
function Ny(n, e) {
  const t = Di(e), r = _t(n);
  return $e.fromSchema(t).parse(r).toJSON();
}
function bc(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return ac(n, t, e);
}
function vy(n, e, t) {
  const { blockSeparator: r = `

`, textSerializers: s = {} } = t || {}, i = Di(e), o = Oe.fromJSON(i, n);
  return bc(o, {
    blockSeparator: r,
    textSerializers: {
      ...vi(i),
      ...s
    }
  });
}
function cp(n, e) {
  const t = Z(e, n.schema), { from: r, to: s } = n.selection, i = [];
  n.doc.nodesBetween(r, s, (l) => {
    i.push(l);
  });
  const o = i.reverse().find((l) => l.type.name === t.name);
  return o ? { ...o.attrs } : {};
}
function kc(n, e) {
  const t = _r(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? cp(n, e) : t === "mark" ? gc(n, e) : {};
}
function up(n, e = JSON.stringify) {
  const t = {};
  return n.filter((r) => {
    const s = e(r);
    return Object.prototype.hasOwnProperty.call(t, s) ? !1 : t[s] = !0;
  });
}
function dp(n) {
  const e = up(n);
  return e.length === 1 ? e : e.filter((t, r) => !e.filter((i, o) => o !== r).some((i) => t.oldRange.from >= i.oldRange.from && t.oldRange.to <= i.oldRange.to && t.newRange.from >= i.newRange.from && t.newRange.to <= i.newRange.to));
}
function fp(n) {
  const { mapping: e, steps: t } = n, r = [];
  return e.maps.forEach((s, i) => {
    const o = [];
    if (s.ranges.length)
      s.forEach((l, a) => {
        o.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = t[i];
      if (l === void 0 || a === void 0)
        return;
      o.push({ from: l, to: a });
    }
    o.forEach(({ from: l, to: a }) => {
      const c = e.slice(i).map(l, -1), u = e.slice(i).map(a), d = e.invert().map(c, -1), f = e.invert().map(u);
      r.push({
        oldRange: {
          from: d,
          to: f
        },
        newRange: {
          from: c,
          to: u
        }
      });
    });
  }), dp(r);
}
function hp(n, e = 0) {
  const r = n.type === n.type.schema.topNodeType ? 0 : 1, s = e, i = s + n.nodeSize, o = n.marks.map((c) => {
    const u = {
      type: c.type.name
    };
    return Object.keys(c.attrs).length && (u.attrs = { ...c.attrs }), u;
  }), l = { ...n.attrs }, a = {
    type: n.type.name,
    from: s,
    to: i
  };
  return Object.keys(l).length && (a.attrs = l), o.length && (a.marks = o), n.content.childCount && (a.content = [], n.forEach((c, u) => {
    var d;
    (d = a.content) === null || d === void 0 || d.push(hp(c, e + u + r));
  })), n.text && (a.text = n.text), a;
}
function Ii(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((s) => {
    const i = t.resolve(n), o = Ri(i, s.type);
    o && r.push({
      mark: s,
      ...o
    });
  }) : t.nodesBetween(n, e, (s, i) => {
    !s || s?.nodeSize === void 0 || r.push(...s.marks.map((o) => ({
      from: i,
      to: i + s.nodeSize,
      mark: o
    })));
  }), r;
}
const Ry = (n, e, t, r = 20) => {
  const s = n.doc.resolve(t);
  let i = r, o = null;
  for (; i > 0 && o === null; ) {
    const l = s.node(i);
    l?.type.name === e ? o = l : i -= 1;
  }
  return [o, i];
};
function Kn(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => {
    const s = n.find((i) => i.type === e && i.name === r);
    return s ? s.attribute.keepOnSplit : !1;
  }));
}
function qs(n, e, t = {}) {
  const { empty: r, ranges: s } = n.selection, i = e ? ot(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((d) => i ? i.name === d.type.name : !0).find((d) => or(d.attrs, t, { strict: !1 }));
  let o = 0;
  const l = [];
  if (s.forEach(({ $from: d, $to: f }) => {
    const h = d.pos, p = f.pos;
    n.doc.nodesBetween(h, p, (m, g) => {
      if (!m.isText && !m.marks.length)
        return;
      const y = Math.max(h, g), S = Math.min(p, g + m.nodeSize), A = S - y;
      o += A, l.push(...m.marks.map((R) => ({
        mark: R,
        from: y,
        to: S
      })));
    });
  }), o === 0)
    return !1;
  const a = l.filter((d) => i ? i.name === d.mark.type.name : !0).filter((d) => or(d.mark.attrs, t, { strict: !1 })).reduce((d, f) => d + f.to - f.from, 0), c = l.filter((d) => i ? d.mark.type !== i && d.mark.type.excludes(i) : !0).reduce((d, f) => d + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= o;
}
function pp(n, e, t = {}) {
  if (!e)
    return mn(n, null, t) || qs(n, null, t);
  const r = _r(e, n.schema);
  return r === "node" ? mn(n, e, t) : r === "mark" ? qs(n, e, t) : !1;
}
const Dy = (n, e) => {
  const { $from: t, $to: r, $anchor: s } = n.selection;
  if (e) {
    const i = Mn((l) => l.type.name === e)(n.selection);
    if (!i)
      return !1;
    const o = n.doc.resolve(i.pos + 1);
    return s.pos + 1 === o.end();
  }
  return !(r.parentOffset < r.parent.nodeSize - 2 || t.pos !== r.pos);
}, Iy = (n) => {
  const { $from: e, $to: t } = n.selection;
  return !(e.parentOffset > 0 || e.pos !== t.pos);
};
function nl(n, e) {
  const { nodeExtensions: t } = Kr(e), r = t.find((o) => o.name === n);
  if (!r)
    return !1;
  const s = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, i = N(C(r, "group", s));
  return typeof i != "string" ? !1 : i.split(" ").includes("list");
}
function Gr(n, { checkChildren: e = !0, ignoreWhitespace: t = !1 } = {}) {
  var r;
  if (t) {
    if (n.type.name === "hardBreak")
      return !0;
    if (n.isText)
      return /^\s*$/m.test((r = n.text) !== null && r !== void 0 ? r : "");
  }
  if (n.isText)
    return !n.text;
  if (n.isAtom || n.isLeaf)
    return !1;
  if (n.content.childCount === 0)
    return !0;
  if (e) {
    let s = !0;
    return n.content.forEach((i) => {
      s !== !1 && (Gr(i, { ignoreWhitespace: t, checkChildren: e }) || (s = !1));
    }), s;
  }
  return !1;
}
function mp(n) {
  return n instanceof x;
}
function Py(n, e, t) {
  const s = n.state.doc.content.size, i = Fe(e, 0, s), o = Fe(t, 0, s), l = n.coordsAtPos(i), a = n.coordsAtPos(o, -1), c = Math.min(l.top, a.top), u = Math.max(l.bottom, a.bottom), d = Math.min(l.left, a.left), f = Math.max(l.right, a.right), h = f - d, p = u - c, y = {
    top: c,
    bottom: u,
    left: d,
    right: f,
    width: h,
    height: p,
    x: d,
    y: c
  };
  return {
    ...y,
    toJSON: () => y
  };
}
function Sc({ json: n, validMarks: e, validNodes: t, options: r, rewrittenContent: s = [] }) {
  return n.marks && Array.isArray(n.marks) && (n.marks = n.marks.filter((i) => {
    const o = typeof i == "string" ? i : i.type;
    return e.has(o) ? !0 : (s.push({
      original: JSON.parse(JSON.stringify(i)),
      unsupported: o
    }), !1);
  })), n.content && Array.isArray(n.content) && (n.content = n.content.map((i) => Sc({
    json: i,
    validMarks: e,
    validNodes: t,
    options: r,
    rewrittenContent: s
  }).json).filter((i) => i != null)), n.type && !t.has(n.type) ? (s.push({
    original: JSON.parse(JSON.stringify(n)),
    unsupported: n.type
  }), n.content && Array.isArray(n.content) && r?.fallbackToParagraph !== !1 ? (n.type = "paragraph", {
    json: n,
    rewrittenContent: s
  }) : {
    json: null,
    rewrittenContent: s
  }) : { json: n, rewrittenContent: s };
}
function Ly(n, e, t) {
  return Sc({
    json: n,
    validNodes: new Set(Object.keys(e.nodes)),
    validMarks: new Set(Object.keys(e.marks)),
    options: t
  });
}
function gp(n, e, t) {
  var r;
  const { selection: s } = e;
  let i = null;
  if (dc(s) && (i = s.$cursor), i) {
    const l = (r = n.storedMarks) !== null && r !== void 0 ? r : i.marks();
    return !!t.isInSet(l) || !l.some((a) => a.type.excludes(t));
  }
  const { ranges: o } = s;
  return o.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(l.pos, a.pos, (u, d, f) => {
      if (c)
        return !1;
      if (u.isInline) {
        const h = !f || f.type.allowsMarkType(t), p = !!t.isInSet(u.marks) || !u.marks.some((m) => m.type.excludes(t));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
const yp = (n, e = {}) => ({ tr: t, state: r, dispatch: s }) => {
  const { selection: i } = t, { empty: o, ranges: l } = i, a = ot(n, r.schema);
  if (s)
    if (o) {
      const c = gc(r, a);
      t.addStoredMark(a.create({
        ...c,
        ...e
      }));
    } else
      l.forEach((c) => {
        const u = c.$from.pos, d = c.$to.pos;
        r.doc.nodesBetween(u, d, (f, h) => {
          const p = Math.max(h, u), m = Math.min(h + f.nodeSize, d);
          f.marks.find((y) => y.type === a) ? f.marks.forEach((y) => {
            a === y.type && t.addMark(p, m, a.create({
              ...y.attrs,
              ...e
            }));
          }) : t.addMark(p, m, a.create(e));
        });
      });
  return gp(r, t, a);
}, bp = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), kp = (n, e = {}) => ({ state: t, dispatch: r, chain: s }) => {
  const i = Z(n, t.schema);
  let o;
  return t.selection.$anchor.sameParent(t.selection.$head) && (o = t.selection.$anchor.parent.attrs), i.isTextblock ? s().command(({ commands: l }) => Yo(i, { ...o, ...e })(t) ? !0 : l.clearNodes()).command(({ state: l }) => Yo(i, { ...o, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Sp = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, s = Fe(n, 0, r.content.size), i = x.create(r, s);
    e.setSelection(i);
  }
  return !0;
}, wp = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: s, to: i } = typeof n == "number" ? { from: n, to: n } : n, o = T.atStart(r).from, l = T.atEnd(r).to, a = Fe(s, o, l), c = Fe(i, o, l), u = T.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, Cp = (n) => ({ state: e, dispatch: t }) => {
  const r = Z(n, e.schema);
  return rh(r)(e, t);
};
function rl(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((s) => e?.includes(s.type.name));
    n.tr.ensureMarks(r);
  }
}
const xp = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: s }) => {
  const { selection: i, doc: o } = e, { $from: l, $to: a } = i, c = s.extensionManager.attributes, u = Kn(c, l.node().type.name, l.node().attrs);
  if (i instanceof x && i.node.isBlock)
    return !l.parentOffset || !Ve(o, l.pos) ? !1 : (r && (n && rl(t, s.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const d = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : lp(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let h = d && f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0, p = Ve(e.doc, e.mapping.map(l.pos), 1, h);
  if (!h && !p && Ve(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (p = !0, h = f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0), r) {
    if (p && (i instanceof T && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), f && !d && !l.parentOffset && l.parent.type !== f)) {
      const m = e.mapping.map(l.before()), g = e.doc.resolve(m);
      l.node(-1).canReplaceWith(g.index(), g.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    n && rl(t, s.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return p;
}, Mp = (n, e = {}) => ({ tr: t, state: r, dispatch: s, editor: i }) => {
  var o;
  const l = Z(n, r.schema), { $from: a, $to: c } = r.selection, u = r.selection.node;
  if (u && u.isBlock || a.depth < 2 || !a.sameParent(c))
    return !1;
  const d = a.node(-1);
  if (d.type !== l)
    return !1;
  const f = i.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (s) {
      let y = b.empty;
      const S = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let E = a.depth - S; E >= a.depth - 3; E -= 1)
        y = b.from(a.node(E).copy(y));
      const A = a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3, R = {
        ...Kn(f, a.node().type.name, a.node().attrs),
        ...e
      }, M = ((o = l.contentMatch.defaultType) === null || o === void 0 ? void 0 : o.createAndFill(R)) || void 0;
      y = y.append(b.from(l.createAndFill(null, M) || void 0));
      const I = a.before(a.depth - (S - 1));
      t.replace(I, a.after(-A), new w(y, 4 - S, 0));
      let H = -1;
      t.doc.nodesBetween(I, t.doc.content.size, (E, j) => {
        if (H > -1)
          return !1;
        E.isTextblock && E.content.size === 0 && (H = j + 1);
      }), H > -1 && t.setSelection(T.near(t.doc.resolve(H))), t.scrollIntoView();
    }
    return !0;
  }
  const h = c.pos === a.end() ? d.contentMatchAt(0).defaultType : null, p = {
    ...Kn(f, d.type.name, d.attrs),
    ...e
  }, m = {
    ...Kn(f, a.node().type.name, a.node().attrs),
    ...e
  };
  t.delete(a.pos, c.pos);
  const g = h ? [
    { type: l, attrs: p },
    { type: h, attrs: m }
  ] : [{ type: l, attrs: p }];
  if (!Ve(t.doc, a.pos, 2))
    return !1;
  if (s) {
    const { selection: y, storedMarks: S } = r, { splittableMarks: A } = i.extensionManager, R = S || y.$to.parentOffset && y.$from.marks();
    if (t.split(a.pos, 2, g).scrollIntoView(), !R || !s)
      return !0;
    const M = R.filter((I) => A.includes(I.type.name));
    t.ensureMarks(M);
  }
  return !0;
}, ys = (n, e) => {
  const t = Mn((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const s = n.doc.nodeAt(r);
  return t.node.type === s?.type && st(n.doc, t.pos) && n.join(t.pos), !0;
}, bs = (n, e) => {
  const t = Mn((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const s = n.doc.nodeAt(r);
  return t.node.type === s?.type && st(n.doc, r) && n.join(r), !0;
}, Tp = (n, e, t, r = {}) => ({ editor: s, tr: i, state: o, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: d, splittableMarks: f } = s.extensionManager, h = Z(n, o.schema), p = Z(e, o.schema), { selection: m, storedMarks: g } = o, { $from: y, $to: S } = m, A = y.blockRange(S), R = g || m.$to.parentOffset && m.$from.marks();
  if (!A)
    return !1;
  const M = Mn((I) => nl(I.type.name, d))(m);
  if (A.depth >= 1 && M && A.depth - M.depth <= 1) {
    if (M.node.type === h)
      return c.liftListItem(p);
    if (nl(M.node.type.name, d) && h.validContent(M.node.content) && l)
      return a().command(() => (i.setNodeMarkup(M.pos, h), !0)).command(() => ys(i, h)).command(() => bs(i, h)).run();
  }
  return !t || !R || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => ys(i, h)).command(() => bs(i, h)).run() : a().command(() => {
    const I = u().wrapInList(h, r), H = R.filter((E) => f.includes(E.type.name));
    return i.ensureMarks(H), I ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => ys(i, h)).command(() => bs(i, h)).run();
}, Ap = (n, e = {}, t = {}) => ({ state: r, commands: s }) => {
  const { extendEmptyMarkRange: i = !1 } = t, o = ot(n, r.schema);
  return qs(r, o, e) ? s.unsetMark(o, { extendEmptyMarkRange: i }) : s.setMark(o, e);
}, Ep = (n, e, t = {}) => ({ state: r, commands: s }) => {
  const i = Z(n, r.schema), o = Z(e, r.schema), l = mn(r, i, t);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? s.setNode(o, a) : s.setNode(i, { ...a, ...t });
}, Op = (n, e = {}) => ({ state: t, commands: r }) => {
  const s = Z(n, t.schema);
  return mn(t, s, e) ? r.lift(s) : r.wrapIn(s, e);
}, Np = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const s = t[r];
    let i;
    if (s.spec.isInputRules && (i = s.getState(n))) {
      if (e) {
        const o = n.tr, l = i.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          o.step(l.steps[a].invert(l.docs[a]));
        if (i.text) {
          const a = o.doc.resolve(i.from).marks();
          o.replaceWith(i.from, i.to, n.schema.text(i.text, a));
        } else
          o.delete(i.from, i.to);
      }
      return !0;
    }
  }
  return !1;
}, vp = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: s } = t;
  return r || e && s.forEach((i) => {
    n.removeMark(i.$from.pos, i.$to.pos);
  }), !0;
}, Rp = (n, e = {}) => ({ tr: t, state: r, dispatch: s }) => {
  var i;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: l } = t, a = ot(n, r.schema), { $from: c, empty: u, ranges: d } = l;
  if (!s)
    return !0;
  if (u && o) {
    let { from: f, to: h } = l;
    const p = (i = c.marks().find((g) => g.type === a)) === null || i === void 0 ? void 0 : i.attrs, m = Ri(c, a, p);
    m && (f = m.from, h = m.to), t.removeMark(f, h, a);
  } else
    d.forEach((f) => {
      t.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, Dp = (n, e = {}) => ({ tr: t, state: r, dispatch: s }) => {
  let i = null, o = null;
  const l = _r(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (i = Z(n, r.schema)), l === "mark" && (o = ot(n, r.schema)), s && t.selection.ranges.forEach((a) => {
    const c = a.$from.pos, u = a.$to.pos;
    let d, f, h, p;
    t.selection.empty ? r.doc.nodesBetween(c, u, (m, g) => {
      i && i === m.type && (h = Math.max(g, c), p = Math.min(g + m.nodeSize, u), d = g, f = m);
    }) : r.doc.nodesBetween(c, u, (m, g) => {
      g < c && i && i === m.type && (h = Math.max(g, c), p = Math.min(g + m.nodeSize, u), d = g, f = m), g >= c && g <= u && (i && i === m.type && t.setNodeMarkup(g, void 0, {
        ...m.attrs,
        ...e
      }), o && m.marks.length && m.marks.forEach((y) => {
        if (o === y.type) {
          const S = Math.max(g, c), A = Math.min(g + m.nodeSize, u);
          t.addMark(S, A, o.create({
            ...y.attrs,
            ...e
          }));
        }
      }));
    }), f && (d !== void 0 && t.setNodeMarkup(d, void 0, {
      ...f.attrs,
      ...e
    }), o && f.marks.length && f.marks.forEach((m) => {
      o === m.type && t.addMark(h, p, o.create({
        ...m.attrs,
        ...e
      }));
    }));
  }), !0) : !1;
}, Ip = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const s = Z(n, t.schema);
  return Yf(s, e)(t, r);
}, Pp = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const s = Z(n, t.schema);
  return Xf(s, e)(t, r);
};
var Lp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: yh,
  clearContent: bh,
  clearNodes: kh,
  command: Sh,
  createParagraphNear: wh,
  cut: Ch,
  deleteCurrentNode: xh,
  deleteNode: Mh,
  deleteRange: Th,
  deleteSelection: Ah,
  enter: Eh,
  exitCode: Oh,
  extendMarkRange: Nh,
  first: vh,
  focus: Rh,
  forEach: Dh,
  insertContent: Ih,
  insertContentAt: Bh,
  joinBackward: Fh,
  joinDown: Hh,
  joinForward: $h,
  joinItemBackward: Vh,
  joinItemForward: Wh,
  joinTextblockBackward: jh,
  joinTextblockForward: Kh,
  joinUp: zh,
  keyboardShortcut: qh,
  lift: Jh,
  liftEmptyBlock: _h,
  liftListItem: Gh,
  newlineInCode: Yh,
  resetAttributes: Xh,
  scrollIntoView: Qh,
  selectAll: Zh,
  selectNodeBackward: ep,
  selectNodeForward: tp,
  selectParentNode: np,
  selectTextblockEnd: rp,
  selectTextblockStart: sp,
  setContent: ip,
  setMark: yp,
  setMeta: bp,
  setNode: kp,
  setNodeSelection: Sp,
  setTextSelection: wp,
  sinkListItem: Cp,
  splitBlock: xp,
  splitListItem: Mp,
  toggleList: Tp,
  toggleMark: Ap,
  toggleNode: Ep,
  toggleWrap: Op,
  undoInputRule: Np,
  unsetAllMarks: vp,
  unsetMark: Rp,
  updateAttributes: Dp,
  wrapIn: Ip,
  wrapInList: Pp
});
const wc = W.create({
  name: "commands",
  addCommands() {
    return {
      ...Lp
    };
  }
}), Cc = W.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new $({
        key: new J("tiptapDrop"),
        props: {
          handleDrop: (n, e, t, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: t,
              moved: r
            });
          }
        }
      })
    ];
  }
}), xc = W.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new $({
        key: new J("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Mc = new J("focusEvents"), Tc = W.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new $({
        key: Mc,
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), Ac = W.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: d } = a, { pos: f, parent: h } = d, p = d.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : d, m = p.parent.type.spec.isolating, g = d.pos - d.parentOffset, y = m && p.parent.childCount === 1 ? g === d.pos : O.atStart(c).from === f;
        return !u || !h.type.isTextblock || h.textContent.length || !y || y && d.parent.type.name === "paragraph" ? !1 : o.clearNodes();
      }),
      () => o.deleteSelection(),
      () => o.joinBackward(),
      () => o.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: o }) => [
      () => o.deleteSelection(),
      () => o.deleteCurrentNode(),
      () => o.joinForward(),
      () => o.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: o }) => [
        () => o.newlineInCode(),
        () => o.createParagraphNear(),
        () => o.liftEmptyBlock(),
        () => o.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, s = {
      ...r
    }, i = {
      ...r,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return Jr() || mc() ? i : s;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new $({
        key: new J("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (n.some((m) => m.getMeta("composition")))
            return;
          const r = n.some((m) => m.docChanged) && !e.doc.eq(t.doc), s = n.some((m) => m.getMeta("preventClearDocument"));
          if (!r || s)
            return;
          const { empty: i, from: o, to: l } = e.selection, a = O.atStart(e.doc).from, c = O.atEnd(e.doc).to;
          if (i || !(o === a && l === c) || !Gr(t.doc))
            return;
          const f = t.tr, h = Wr({
            state: t,
            transaction: f
          }), { commands: p } = new jr({
            editor: this.editor,
            state: h
          });
          if (p.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), Ec = W.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new $({
        key: new J("tiptapPaste"),
        props: {
          handlePaste: (n, e, t) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: t
            });
          }
        }
      })
    ];
  }
}), Oc = W.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new $({
        key: new J("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
var By = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ClipboardTextSerializer: cc,
  Commands: wc,
  Drop: Cc,
  Editable: xc,
  FocusEvents: Tc,
  Keymap: Ac,
  Paste: Ec,
  Tabindex: Oc,
  focusEventsPluginKey: Mc
});
class ct {
  get name() {
    return this.node.type.name;
  }
  constructor(e, t, r = !1, s = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = t, this.currentNode = s;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) !== null && e !== void 0 ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let t = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      t = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: t, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), t = this.resolvedPos.doc.resolve(e);
    return new ct(t, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new ct(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new ct(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((t, r) => {
      const s = t.isBlock && !t.isTextblock, i = t.isAtom && !t.isText, o = this.pos + r + (i ? 0 : 1);
      if (o < 0 || o > this.resolvedPos.doc.nodeSize - 2)
        return;
      const l = this.resolvedPos.doc.resolve(o);
      if (!s && l.depth <= this.depth)
        return;
      const a = new ct(l, this.editor, s, s ? t : null);
      s && (a.actualDepth = this.depth + 1), e.push(new ct(l, this.editor, s, s ? t : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, t = {}) {
    let r = null, s = this.parent;
    for (; s && !r; ) {
      if (s.node.type.name === e)
        if (Object.keys(t).length > 0) {
          const i = s.node.attrs, o = Object.keys(t);
          for (let l = 0; l < o.length; l += 1) {
            const a = o[l];
            if (i[a] !== t[a])
              break;
          }
        } else
          r = s;
      s = s.parent;
    }
    return r;
  }
  querySelector(e, t = {}) {
    return this.querySelectorAll(e, t, !0)[0] || null;
  }
  querySelectorAll(e, t = {}, r = !1) {
    let s = [];
    if (!this.children || this.children.length === 0)
      return s;
    const i = Object.keys(t);
    return this.children.forEach((o) => {
      r && s.length > 0 || (o.node.type.name === e && i.every((a) => t[a] === o.node.attrs[a]) && s.push(o), !(r && s.length > 0) && (s = s.concat(o.querySelectorAll(e, t, r))));
    }), s;
  }
  setAttribute(e) {
    const { tr: t } = this.editor.state;
    t.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(t);
  }
}
const Bp = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function zp(n, e, t) {
  const r = document.querySelector(`style[data-tiptap-style${t ? `-${t}` : ""}]`);
  if (r !== null)
    return r;
  const s = document.createElement("style");
  return e && s.setAttribute("nonce", e), s.setAttribute(`data-tiptap-style${t ? `-${t}` : ""}`, ""), s.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(s), s;
}
class zy extends sh {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      emitContentError: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: t }) => {
        throw t;
      },
      onPaste: () => null,
      onDrop: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: t, slice: r, moved: s }) => this.options.onDrop(t, r, s)), this.on("paste", ({ event: t, slice: r }) => this.options.onPaste(t, r)), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = zp(Bp, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(e, t) {
    const r = oc(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], s = this.state.reconfigure({ plugins: r });
    return this.view.updateState(s), s;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const t = this.state.plugins;
    let r = t;
    if ([].concat(e).forEach((i) => {
      const o = typeof i == "string" ? `${i}$` : i.key;
      r = r.filter((l) => !l.key.startsWith(o));
    }), t.length === r.length)
      return;
    const s = this.state.reconfigure({
      plugins: r
    });
    return this.view.updateState(s), s;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var e, t;
    const s = [...this.options.enableCoreExtensions ? [
      xc,
      cc.configure({
        blockSeparator: (t = (e = this.options.coreExtensionOptions) === null || e === void 0 ? void 0 : e.clipboardTextSerializer) === null || t === void 0 ? void 0 : t.blockSeparator
      }),
      wc,
      Tc,
      Ac,
      Oc,
      Cc,
      Ec
    ].filter((i) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[i.name] !== !1 : !0) : [], ...this.options.extensions].filter((i) => ["extension", "node", "mark"].includes(i?.type));
    this.extensionManager = new ft(s, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new jr({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    var e;
    let t;
    try {
      t = Us(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
    } catch (o) {
      if (!(o instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(o.message))
        throw o;
      this.emit("contentError", {
        editor: this,
        error: o,
        disableCollaboration: () => {
          this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((l) => l.name !== "collaboration"), this.createExtensionManager();
        }
      }), t = Us(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
    }
    const r = fc(t, this.options.autofocus);
    this.view = new qa(this.options.element, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...(e = this.options.editorProps) === null || e === void 0 ? void 0 : e.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: Dt.create({
        doc: t,
        selection: r || void 0
      })
    });
    const s = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(s), this.createNodeViews(), this.prependClass();
    const i = this.view.dom;
    i.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((o) => {
        var l;
        return (l = this.capturedTransaction) === null || l === void 0 ? void 0 : l.step(o);
      });
      return;
    }
    const t = this.state.apply(e), r = !this.state.selection.eq(t.selection);
    this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: t
    }), this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const s = e.getMeta("focus"), i = e.getMeta("blur");
    s && this.emit("focus", {
      editor: this,
      event: s.event,
      transaction: e
    }), i && this.emit("blur", {
      editor: this,
      event: i.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return kc(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, s = typeof e == "string" ? t : e;
    return pp(this.state, r, s);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return Ur(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return bc(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...vi(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return Gr(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    if (this.emit("destroy"), this.view) {
      const e = this.view.dom;
      e && e.editor && delete e.editor, this.view.destroy();
    }
    this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
  $node(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelector(e, t)) || null;
  }
  $nodes(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelectorAll(e, t)) || null;
  }
  $pos(e) {
    const t = this.state.doc.resolve(e);
    return new ct(t, this);
  }
  get $doc() {
    return this.$pos(0);
  }
}
function Ft(n) {
  return new xn({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const s = N(n.getAttributes, void 0, r);
      if (s === !1 || s === null)
        return null;
      const { tr: i } = e, o = r[r.length - 1], l = r[0];
      if (o) {
        const a = l.search(/\S/), c = t.from + l.indexOf(o), u = c + o.length;
        if (Ii(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((m) => m === n.type && m !== h.mark.type)).filter((h) => h.to > c).length)
          return null;
        u < t.to && i.delete(u, t.to), c > t.from && i.delete(t.from + a, c);
        const f = t.from + a + o.length;
        i.addMark(t.from + a, f, n.type.create(s || {})), i.removeStoredMark(n.type);
      }
    }
  });
}
function Nc(n) {
  return new xn({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const s = N(n.getAttributes, void 0, r) || {}, { tr: i } = e, o = t.from;
      let l = t.to;
      const a = n.type.create(s);
      if (r[1]) {
        const c = r[0].lastIndexOf(r[1]);
        let u = o + c;
        u > l ? u = l : l = u + r[1].length;
        const d = r[0][r[0].length - 1];
        i.insertText(d, o + r[0].length - 1), i.replaceWith(u, l, a);
      } else if (r[0]) {
        const c = n.type.isInline ? o : o - 1;
        i.insert(c, n.type.create(s)).delete(i.mapping.map(o), i.mapping.map(l));
      }
      i.scrollIntoView();
    }
  });
}
function Js(n) {
  return new xn({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const s = e.doc.resolve(t.from), i = N(n.getAttributes, void 0, r) || {};
      if (!s.node(-1).canReplaceWith(s.index(-1), s.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, i);
    }
  });
}
function Hy(n) {
  return new xn({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      let s = n.replace, i = t.from;
      const o = t.to;
      if (r[1]) {
        const l = r[0].lastIndexOf(r[1]);
        s += r[0].slice(l + r[1].length), i += l;
        const a = i - o;
        a > 0 && (s = r[0].slice(l - a, l) + s, i = o);
      }
      e.tr.insertText(s, i, o);
    }
  });
}
function gn(n) {
  return new xn({
    find: n.find,
    handler: ({ state: e, range: t, match: r, chain: s }) => {
      const i = N(n.getAttributes, void 0, r) || {}, o = e.tr.delete(t.from, t.to), a = o.doc.resolve(t.from).blockRange(), c = a && ui(a, n.type, i);
      if (!c)
        return null;
      if (o.wrap(a, c), n.keepMarks && n.editor) {
        const { selection: d, storedMarks: f } = e, { splittableMarks: h } = n.editor.extensionManager, p = f || d.$to.parentOffset && d.$from.marks();
        if (p) {
          const m = p.filter((g) => h.includes(g.type.name));
          o.ensureMarks(m);
        }
      }
      if (n.keepAttributes) {
        const d = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        s().updateAttributes(d, i).run();
      }
      const u = o.doc.resolve(t.from - 1).nodeBefore;
      u && u.type === n.type && st(o.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, u)) && o.join(t.from - 1);
    }
  });
}
class V {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = N(C(this, "addOptions", {
      name: this.name
    }))), this.storage = N(C(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new V(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => qr(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new V(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = N(C(t, "addOptions", {
      name: t.name
    })), t.storage = N(C(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
class Fy {
  constructor(e, t, r) {
    this.isDragging = !1, this.component = e, this.editor = t.editor, this.options = {
      stopEvent: null,
      ignoreMutation: null,
      ...r
    }, this.extension = t.extension, this.node = t.node, this.decorations = t.decorations, this.innerDecorations = t.innerDecorations, this.view = t.view, this.HTMLAttributes = t.HTMLAttributes, this.getPos = t.getPos, this.mount();
  }
  mount() {
  }
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  onDragStart(e) {
    var t, r, s, i, o, l, a;
    const { view: c } = this.editor, u = e.target, d = u.nodeType === 3 ? (t = u.parentElement) === null || t === void 0 ? void 0 : t.closest("[data-drag-handle]") : u.closest("[data-drag-handle]");
    if (!this.dom || !((r = this.contentDOM) === null || r === void 0) && r.contains(u) || !d)
      return;
    let f = 0, h = 0;
    if (this.dom !== d) {
      const S = this.dom.getBoundingClientRect(), A = d.getBoundingClientRect(), R = (s = e.offsetX) !== null && s !== void 0 ? s : (i = e.nativeEvent) === null || i === void 0 ? void 0 : i.offsetX, M = (o = e.offsetY) !== null && o !== void 0 ? o : (l = e.nativeEvent) === null || l === void 0 ? void 0 : l.offsetY;
      f = A.x - S.x + R, h = A.y - S.y + M;
    }
    const p = this.dom.cloneNode(!0);
    (a = e.dataTransfer) === null || a === void 0 || a.setDragImage(p, f, h);
    const m = this.getPos();
    if (typeof m != "number")
      return;
    const g = x.create(c.state.doc, m), y = c.state.tr.setSelection(g);
    c.dispatch(y);
  }
  stopEvent(e) {
    var t;
    if (!this.dom)
      return !1;
    if (typeof this.options.stopEvent == "function")
      return this.options.stopEvent({ event: e });
    const r = e.target;
    if (!(this.dom.contains(r) && !(!((t = this.contentDOM) === null || t === void 0) && t.contains(r))))
      return !1;
    const i = e.type.startsWith("drag"), o = e.type === "drop";
    if ((["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(r.tagName) || r.isContentEditable) && !o && !i)
      return !0;
    const { isEditable: a } = this.editor, { isDragging: c } = this, u = !!this.node.type.spec.draggable, d = x.isSelectable(this.node), f = e.type === "copy", h = e.type === "paste", p = e.type === "cut", m = e.type === "mousedown";
    if (!u && d && i && e.target === this.dom && e.preventDefault(), u && i && !c && e.target === this.dom)
      return e.preventDefault(), !1;
    if (u && a && !c && m) {
      const g = r.closest("[data-drag-handle]");
      g && (this.dom === g || this.dom.contains(g)) && (this.isDragging = !0, document.addEventListener("dragend", () => {
        this.isDragging = !1;
      }, { once: !0 }), document.addEventListener("drop", () => {
        this.isDragging = !1;
      }, { once: !0 }), document.addEventListener("mouseup", () => {
        this.isDragging = !1;
      }, { once: !0 }));
    }
    return !(c || o || f || h || p || m && d);
  }
  /**
   * Called when a DOM [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) or a selection change happens within the view.
   * @return `false` if the editor should re-read the selection or re-parse the range around the mutation
   * @return `true` if it can safely be ignored.
   */
  ignoreMutation(e) {
    return !this.dom || !this.contentDOM ? !0 : typeof this.options.ignoreMutation == "function" ? this.options.ignoreMutation({ mutation: e }) : this.node.isLeaf || this.node.isAtom ? !0 : e.type === "selection" || this.dom.contains(e.target) && e.type === "childList" && (Jr() || hc()) && this.editor.isFocused && [
      ...Array.from(e.addedNodes),
      ...Array.from(e.removedNodes)
    ].every((r) => r.isContentEditable) ? !1 : this.contentDOM === e.target && e.type === "attributes" ? !0 : !this.contentDOM.contains(e.target);
  }
  /**
   * Update the attributes of the prosemirror node.
   */
  updateAttributes(e) {
    this.editor.commands.command(({ tr: t }) => {
      const r = this.getPos();
      return typeof r != "number" ? !1 : (t.setNodeMarkup(r, void 0, {
        ...this.node.attrs,
        ...e
      }), !0);
    });
  }
  /**
   * Delete the node.
   */
  deleteNode() {
    const e = this.getPos();
    if (typeof e != "number")
      return;
    const t = e + this.node.nodeSize;
    this.editor.commands.deleteRange({ from: e, to: t });
  }
}
function xt(n) {
  return new Ni({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: s }) => {
      const i = N(n.getAttributes, void 0, r, s);
      if (i === !1 || i === null)
        return null;
      const { tr: o } = e, l = r[r.length - 1], a = r[0];
      let c = t.to;
      if (l) {
        const u = a.search(/\S/), d = t.from + a.indexOf(l), f = d + l.length;
        if (Ii(t.from, t.to, e.doc).filter((p) => p.mark.type.excluded.find((g) => g === n.type && g !== p.mark.type)).filter((p) => p.to > d).length)
          return null;
        f < t.to && o.delete(f, t.to), d > t.from && o.delete(t.from + u, d), c = t.from + u + l.length, o.addMark(t.from + u, c, n.type.create(i || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
function Hp(n, e) {
  const { selection: t } = n, { $from: r } = t;
  if (t instanceof x) {
    const i = r.index();
    return r.parent.canReplaceWith(i, i + 1, e);
  }
  let s = r.depth;
  for (; s >= 0; ) {
    const i = r.index(s);
    if (r.node(s).contentMatchAt(i).matchType(e))
      return !0;
    s -= 1;
  }
  return !1;
}
function $y(n) {
  return n.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Vy(n) {
  return typeof n == "string";
}
function Wy(n) {
  return new Ni({
    find: n.find,
    handler({ match: e, chain: t, range: r, pasteEvent: s }) {
      const i = N(n.getAttributes, void 0, e, s), o = N(n.getContent, void 0, i);
      if (i === !1 || i === null)
        return null;
      const l = { type: n.type.name, attrs: i };
      o && (l.content = o), e.input && t().deleteRange(r).insertContentAt(r.from, l);
    }
  });
}
function jy(n) {
  return new Ni({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      let s = n.replace, i = t.from;
      const o = t.to;
      if (r[1]) {
        const l = r[0].lastIndexOf(r[1]);
        s += r[0].slice(l + r[1].length), i += l;
        const a = i - o;
        a > 0 && (s = r[0].slice(l - a, l) + s, i = o);
      }
      e.tr.insertText(s, i, o);
    }
  });
}
class Ky {
  constructor(e) {
    this.transaction = e, this.currentStep = this.transaction.steps.length;
  }
  map(e) {
    let t = !1;
    return {
      position: this.transaction.steps.slice(this.currentStep).reduce((s, i) => {
        const o = i.getMap().mapResult(s);
        return o.deleted && (t = !0), o.pos;
      }, e),
      deleted: t
    };
  }
}
const Fp = V.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
function $p(n = {}) {
  return new $({
    view(e) {
      return new Vp(e, n);
    }
  });
}
class Vp {
  constructor(e, t) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = t.width) !== null && r !== void 0 ? r : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((s) => {
      let i = (o) => {
        this[s](o);
      };
      return e.dom.addEventListener(s, i), { name: s, handler: i };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
  }
  update(e, t) {
    this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, r, s = this.editorView.dom, i = s.getBoundingClientRect(), o = i.width / s.offsetWidth, l = i.height / s.offsetHeight;
    if (t) {
      let d = e.nodeBefore, f = e.nodeAfter;
      if (d || f) {
        let h = this.editorView.nodeDOM(this.cursorPos - (d ? d.nodeSize : 0));
        if (h) {
          let p = h.getBoundingClientRect(), m = d ? p.bottom : p.top;
          d && f && (m = (m + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
          let g = this.width / 2 * l;
          r = { left: p.left, right: p.right, top: m - g, bottom: m + g };
        }
      }
    }
    if (!r) {
      let d = this.editorView.coordsAtPos(this.cursorPos), f = this.width / 2 * o;
      r = { left: d.left - f, right: d.left + f, top: d.top, bottom: d.bottom };
    }
    let a = this.editorView.dom.offsetParent;
    this.element || (this.element = a.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let c, u;
    if (!a || a == document.body && getComputedStyle(a).position == "static")
      c = -pageXOffset, u = -pageYOffset;
    else {
      let d = a.getBoundingClientRect(), f = d.width / a.offsetWidth, h = d.height / a.offsetHeight;
      c = d.left - a.scrollLeft * f, u = d.top - a.scrollTop * h;
    }
    this.element.style.left = (r.left - c) / o + "px", this.element.style.top = (r.top - u) / l + "px", this.element.style.width = (r.right - r.left) / o + "px", this.element.style.height = (r.bottom - r.top) / l + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), s = r && r.type.spec.disableDropCursor, i = typeof s == "function" ? s(this.editorView, t, e) : s;
    if (t && !i) {
      let o = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = ia(this.editorView.state.doc, o, this.editorView.dragging.slice);
        l != null && (o = l);
      }
      this.setCursor(o), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
  }
}
const Wp = W.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      $p(this.options)
    ];
  }
});
class U extends O {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    return U.valid(r) ? new U(r) : O.near(r);
  }
  content() {
    return w.empty;
  }
  eq(e) {
    return e instanceof U && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new U(e.resolve(t.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new Pi(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !jp(e) || !Kp(e))
      return !1;
    let r = t.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let s = t.contentMatchAt(e.index()).defaultType;
    return s && s.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, t, r = !1) {
    e: for (; ; ) {
      if (!r && U.valid(e))
        return e;
      let s = e.pos, i = null;
      for (let o = e.depth; ; o--) {
        let l = e.node(o);
        if (t > 0 ? e.indexAfter(o) < l.childCount : e.index(o) > 0) {
          i = l.child(t > 0 ? e.indexAfter(o) : e.index(o) - 1);
          break;
        } else if (o == 0)
          return null;
        s += t;
        let a = e.doc.resolve(s);
        if (U.valid(a))
          return a;
      }
      for (; ; ) {
        let o = t > 0 ? i.firstChild : i.lastChild;
        if (!o) {
          if (i.isAtom && !i.isText && !x.isSelectable(i)) {
            e = e.doc.resolve(s + i.nodeSize * t), r = !1;
            continue e;
          }
          break;
        }
        i = o, s += t;
        let l = e.doc.resolve(s);
        if (U.valid(l))
          return l;
      }
      return null;
    }
  }
}
U.prototype.visible = !1;
U.findFrom = U.findGapCursorFrom;
O.jsonID("gapcursor", U);
class Pi {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new Pi(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return U.valid(t) ? new U(t) : O.near(t);
  }
}
function jp(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e), r = n.node(e);
    if (t == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let s = r.child(t - 1); ; s = s.lastChild) {
      if (s.childCount == 0 && !s.inlineContent || s.isAtom || s.type.spec.isolating)
        return !0;
      if (s.inlineContent)
        return !1;
    }
  }
  return !0;
}
function Kp(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e), r = n.node(e);
    if (t == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let s = r.child(t); ; s = s.firstChild) {
      if (s.childCount == 0 && !s.inlineContent || s.isAtom || s.type.spec.isolating)
        return !0;
      if (s.inlineContent)
        return !1;
    }
  }
  return !0;
}
function Up() {
  return new $({
    props: {
      decorations: Gp,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && U.valid(t) ? new U(t) : null;
      },
      handleClick: Jp,
      handleKeyDown: qp,
      handleDOMEvents: { beforeinput: _p }
    }
  });
}
const qp = Ci({
  ArrowLeft: In("horiz", -1),
  ArrowRight: In("horiz", 1),
  ArrowUp: In("vert", -1),
  ArrowDown: In("vert", 1)
});
function In(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, s, i) {
    let o = r.selection, l = e > 0 ? o.$to : o.$from, a = o.empty;
    if (o instanceof T) {
      if (!i.endOfTextblock(t) || l.depth == 0)
        return !1;
      a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = U.findGapCursorFrom(l, e, a);
    return c ? (s && s(r.tr.setSelection(new U(c))), !0) : !1;
  };
}
function Jp(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let r = n.state.doc.resolve(e);
  if (!U.valid(r))
    return !1;
  let s = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return s && s.inside > -1 && x.isSelectable(n.state.doc.nodeAt(s.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new U(r))), !0);
}
function _p(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof U))
    return !1;
  let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!r)
    return !1;
  let s = b.empty;
  for (let o = r.length - 1; o >= 0; o--)
    s = b.from(r[o].createAndFill(null, s));
  let i = n.state.tr.replace(t.pos, t.pos, new w(s, 0, 0));
  return i.setSelection(T.near(i.doc.resolve(t.pos + 1))), n.dispatch(i), !1;
}
function Gp(n) {
  if (!(n.selection instanceof U))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", B.create(n.doc, [Y.widget(n.selection.head, e, { key: "gapcursor" })]);
}
const Yp = W.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      Up()
    ];
  },
  extendNodeSchema(n) {
    var e;
    const t = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      allowGapCursor: (e = N(C(n, "allowGapCursor", t))) !== null && e !== void 0 ? e : null
    };
  }
}), Xp = V.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["br", D(this.options.HTMLAttributes, n)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: n, chain: e, state: t, editor: r }) => n.first([
        () => n.exitCode(),
        () => n.command(() => {
          const { selection: s, storedMarks: i } = t;
          if (s.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: o } = this.options, { splittableMarks: l } = r.extensionManager, a = i || s.$to.parentOffset && s.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: u }) => {
            if (u && a && o) {
              const d = a.filter((f) => l.includes(f.type.name));
              c.ensureMarks(d);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
});
var lr = 200, Q = function() {
};
Q.prototype.append = function(e) {
  return e.length ? (e = Q.from(e), !this.length && e || e.length < lr && this.leafAppend(e) || this.length < lr && e.leafPrepend(this) || this.appendInner(e)) : this;
};
Q.prototype.prepend = function(e) {
  return e.length ? Q.from(e).append(this) : this;
};
Q.prototype.appendInner = function(e) {
  return new Qp(this, e);
};
Q.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? Q.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
Q.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
Q.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
Q.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var s = [];
  return this.forEach(function(i, o) {
    return s.push(e(i, o));
  }, t, r), s;
};
Q.from = function(e) {
  return e instanceof Q ? e : e && e.length ? new vc(e) : Q.empty;
};
var vc = /* @__PURE__ */ (function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(s, i) {
    return s == 0 && i == this.length ? this : new e(this.values.slice(s, i));
  }, e.prototype.getInner = function(s) {
    return this.values[s];
  }, e.prototype.forEachInner = function(s, i, o, l) {
    for (var a = i; a < o; a++)
      if (s(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(s, i, o, l) {
    for (var a = i - 1; a >= o; a--)
      if (s(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(s) {
    if (this.length + s.length <= lr)
      return new e(this.values.concat(s.flatten()));
  }, e.prototype.leafPrepend = function(s) {
    if (this.length + s.length <= lr)
      return new e(s.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
})(Q);
Q.empty = new vc([]);
var Qp = /* @__PURE__ */ (function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, s, i, o) {
    var l = this.left.length;
    if (s < l && this.left.forEachInner(r, s, Math.min(i, l), o) === !1 || i > l && this.right.forEachInner(r, Math.max(s - l, 0), Math.min(this.length, i) - l, o + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, s, i, o) {
    var l = this.left.length;
    if (s > l && this.right.forEachInvertedInner(r, s - l, Math.max(i, l) - l, o + l) === !1 || i < l && this.left.forEachInvertedInner(r, Math.min(s, l), i, o) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, s) {
    if (r == 0 && s == this.length)
      return this;
    var i = this.left.length;
    return s <= i ? this.left.slice(r, s) : r >= i ? this.right.slice(r - i, s - i) : this.left.slice(r, i).append(this.right.slice(0, s - i));
  }, e.prototype.leafAppend = function(r) {
    var s = this.right.leafAppend(r);
    if (s)
      return new e(this.left, s);
  }, e.prototype.leafPrepend = function(r) {
    var s = this.left.leafPrepend(r);
    if (s)
      return new e(s, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
})(Q);
const Zp = 500;
class we {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let s, i;
    t && (s = this.remapping(r, this.items.length), i = s.maps.length);
    let o = e.tr, l, a, c = [], u = [];
    return this.items.forEach((d, f) => {
      if (!d.step) {
        s || (s = this.remapping(r, f + 1), i = s.maps.length), i--, u.push(d);
        return;
      }
      if (s) {
        u.push(new Me(d.map));
        let h = d.step.map(s.slice(i)), p;
        h && o.maybeStep(h).doc && (p = o.mapping.maps[o.mapping.maps.length - 1], c.push(new Me(p, void 0, void 0, c.length + u.length))), i--, p && s.appendMap(p, i);
      } else
        o.maybeStep(d.step);
      if (d.selection)
        return l = s ? d.selection.map(s.slice(i)) : d.selection, a = new we(this.items.slice(0, r).append(u.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: o, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, r, s) {
    let i = [], o = this.eventCount, l = this.items, a = !s && l.length ? l.get(l.length - 1) : null;
    for (let u = 0; u < e.steps.length; u++) {
      let d = e.steps[u].invert(e.docs[u]), f = new Me(e.mapping.maps[u], d, t), h;
      (h = a && a.merge(f)) && (f = h, u ? i.pop() : l = l.slice(0, l.length - 1)), i.push(f), t && (o++, t = void 0), s || (a = f);
    }
    let c = o - r.depth;
    return c > tm && (l = em(l, c), o -= c), new we(l.append(i), o);
  }
  remapping(e, t) {
    let r = new cn();
    return this.items.forEach((s, i) => {
      let o = s.mirrorOffset != null && i - s.mirrorOffset >= e ? r.maps.length - s.mirrorOffset : void 0;
      r.appendMap(s.map, o);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new we(this.items.append(e.map((t) => new Me(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], s = Math.max(0, this.items.length - t), i = e.mapping, o = e.steps.length, l = this.eventCount;
    this.items.forEach((f) => {
      f.selection && l--;
    }, s);
    let a = t;
    this.items.forEach((f) => {
      let h = i.getMirror(--a);
      if (h == null)
        return;
      o = Math.min(o, h);
      let p = i.maps[h];
      if (f.step) {
        let m = e.steps[h].invert(e.docs[h]), g = f.selection && f.selection.map(i.slice(a + 1, h));
        g && l++, r.push(new Me(p, m, g));
      } else
        r.push(new Me(p));
    }, s);
    let c = [];
    for (let f = t; f < o; f++)
      c.push(new Me(i.maps[f]));
    let u = this.items.slice(0, s).append(c).append(r), d = new we(u, l);
    return d.emptyItemCount() > Zp && (d = d.compress(this.items.length - r.length)), d;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, s = [], i = 0;
    return this.items.forEach((o, l) => {
      if (l >= e)
        s.push(o), o.selection && i++;
      else if (o.step) {
        let a = o.step.map(t.slice(r)), c = a && a.getMap();
        if (r--, c && t.appendMap(c, r), a) {
          let u = o.selection && o.selection.map(t.slice(r));
          u && i++;
          let d = new Me(c.invert(), a, u), f, h = s.length - 1;
          (f = s.length && s[h].merge(d)) ? s[h] = f : s.push(d);
        }
      } else o.map && r--;
    }, this.items.length, 0), new we(Q.from(s.reverse()), i);
  }
}
we.empty = new we(Q.empty, 0);
function em(n, e) {
  let t;
  return n.forEach((r, s) => {
    if (r.selection && e-- == 0)
      return t = s, !1;
  }), n.slice(t);
}
class Me {
  constructor(e, t, r, s) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = s;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new Me(t.getMap().invert(), t, this.selection);
    }
  }
}
class qe {
  constructor(e, t, r, s, i) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = s, this.prevComposition = i;
  }
}
const tm = 20;
function nm(n, e, t, r) {
  let s = t.getMeta(bt), i;
  if (s)
    return s.historyState;
  t.getMeta(im) && (n = new qe(n.done, n.undone, null, 0, -1));
  let o = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (o && o.getMeta(bt))
    return o.getMeta(bt).redo ? new qe(n.done.addTransform(t, void 0, r, Un(e)), n.undone, sl(t.mapping.maps), n.prevTime, n.prevComposition) : new qe(n.done, n.undone.addTransform(t, void 0, r, Un(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), a = n.prevTime == 0 || !o && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !rm(t, n.prevRanges)), c = o ? ks(n.prevRanges, t.mapping) : sl(t.mapping.maps);
    return new qe(n.done.addTransform(t, a ? e.selection.getBookmark() : void 0, r, Un(e)), we.empty, c, t.time, l ?? n.prevComposition);
  } else return (i = t.getMeta("rebased")) ? new qe(n.done.rebased(t, i), n.undone.rebased(t, i), ks(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new qe(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), ks(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function rm(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, s) => {
    for (let i = 0; i < e.length; i += 2)
      r <= e[i + 1] && s >= e[i] && (t = !0);
  }), t;
}
function sl(n) {
  let e = [];
  for (let t = n.length - 1; t >= 0 && e.length == 0; t--)
    n[t].forEach((r, s, i, o) => e.push(i, o));
  return e;
}
function ks(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let s = e.map(n[r], 1), i = e.map(n[r + 1], -1);
    s <= i && t.push(s, i);
  }
  return t;
}
function sm(n, e, t) {
  let r = Un(e), s = bt.get(e).spec.config, i = (t ? n.undone : n.done).popEvent(e, r);
  if (!i)
    return null;
  let o = i.selection.resolve(i.transform.doc), l = (t ? n.done : n.undone).addTransform(i.transform, e.selection.getBookmark(), s, r), a = new qe(t ? l : i.remaining, t ? i.remaining : l, null, 0, -1);
  return i.transform.setSelection(o).setMeta(bt, { redo: t, historyState: a });
}
let Ss = !1, il = null;
function Un(n) {
  let e = n.plugins;
  if (il != e) {
    Ss = !1, il = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        Ss = !0;
        break;
      }
  }
  return Ss;
}
const bt = new J("history"), im = new J("closeHistory");
function om(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new $({
    key: bt,
    state: {
      init() {
        return new qe(we.empty, we.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return nm(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, s = r == "historyUndo" ? Dc : r == "historyRedo" ? Ic : null;
          return s ? (t.preventDefault(), s(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function Rc(n, e) {
  return (t, r) => {
    let s = bt.getState(t);
    if (!s || (n ? s.undone : s.done).eventCount == 0)
      return !1;
    if (r) {
      let i = sm(s, t, n);
      i && r(e ? i.scrollIntoView() : i);
    }
    return !0;
  };
}
const Dc = Rc(!1, !0), Ic = Rc(!0, !0), lm = W.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => Dc(n, e),
      redo: () => ({ state: n, dispatch: e }) => Ic(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      om(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), am = V.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["p", D(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), Uy = W.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new $({
        key: new J("placeholder"),
        props: {
          decorations: ({ doc: n, selection: e }) => {
            const t = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = e, s = [];
            if (!t)
              return null;
            const i = this.editor.isEmpty;
            return n.descendants((o, l) => {
              const a = r >= l && r <= l + o.nodeSize, c = !o.isLeaf && Gr(o);
              if ((a || !this.options.showOnlyCurrent) && c) {
                const u = [this.options.emptyNodeClass];
                i && u.push(this.options.emptyEditorClass);
                const d = Y.node(l, l + o.nodeSize, {
                  class: u.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: o,
                    pos: l,
                    hasAnchor: a
                  }) : this.options.placeholder
                });
                s.push(d);
              }
              return this.options.includeChildren;
            }), B.create(n, s);
          }
        }
      })
    ];
  }
}), cm = V.create({
  name: "text",
  group: "inline"
}), um = /^\s*>\s$/, dm = V.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["blockquote", D(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: n }) => n.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: n }) => n.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: n }) => n.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      gn({
        find: um,
        type: this.type
      })
    ];
  }
}), fm = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, hm = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, pm = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, mm = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, gm = he.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (n) => n.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (n) => n.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (n) => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["strong", D(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: n }) => n.setMark(this.name),
      toggleBold: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetBold: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      Ft({
        find: fm,
        type: this.type
      }),
      Ft({
        find: pm,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      xt({
        find: hm,
        type: this.type
      }),
      xt({
        find: mm,
        type: this.type
      })
    ];
  }
}), ym = "listItem", ol = "textStyle", ll = /^\s*([-+*])\s$/, bm = V.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["ul", D(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ym, this.editor.getAttributes(ol)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = gn({
      find: ll,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = gn({
      find: ll,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(ol),
      editor: this.editor
    })), [
      n
    ];
  }
}), qy = W.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: (n) => n.length,
      wordCounter: (n) => n.split(" ").filter((e) => e !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (n) => {
      const e = n?.node || this.editor.state.doc;
      if ((n?.mode || this.options.mode) === "textSize") {
        const r = e.textBetween(0, e.content.size, void 0, " ");
        return this.options.textCounter(r);
      }
      return e.nodeSize;
    }, this.storage.words = (n) => {
      const e = n?.node || this.editor.state.doc, t = e.textBetween(0, e.content.size, " ", " ");
      return this.options.wordCounter(t);
    };
  },
  addProseMirrorPlugins() {
    let n = !1;
    return [
      new $({
        key: new J("characterCount"),
        appendTransaction: (e, t, r) => {
          if (n)
            return;
          const s = this.options.limit;
          if (s == null || s === 0) {
            n = !0;
            return;
          }
          const i = this.storage.characters({ node: r.doc });
          if (i > s) {
            const o = i - s, l = 0, a = o;
            console.warn(`[CharacterCount] Initial content exceeded limit of ${s} characters. Content was automatically trimmed.`);
            const c = r.tr.deleteRange(l, a);
            return n = !0, c;
          }
          n = !0;
        },
        filterTransaction: (e, t) => {
          const r = this.options.limit;
          if (!e.docChanged || r === 0 || r === null || r === void 0)
            return !0;
          const s = this.storage.characters({ node: t.doc }), i = this.storage.characters({ node: e.doc });
          if (i <= r || s > r && i > r && i <= s)
            return !0;
          if (s > r && i > r && i > s || !e.getMeta("paste"))
            return !1;
          const l = e.selection.$head.pos, a = i - r, c = l - a, u = l;
          return e.deleteRange(c, u), !(this.storage.characters({ node: e.doc }) > r);
        }
      })
    ];
  }
}), km = /(^|[^`])`([^`]+)`(?!`)/, Sm = /(^|[^`])`([^`]+)`(?!`)/g, wm = he.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["code", D(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: n }) => n.setMark(this.name),
      toggleCode: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetCode: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      Ft({
        find: km,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      xt({
        find: Sm,
        type: this.type
      })
    ];
  }
}), Cm = /^```([a-z]+)?[\s\n]$/, xm = /^~~~([a-z]+)?[\s\n]$/, Mm = V.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      defaultLanguage: null,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: (n) => {
          var e;
          const { languageClassPrefix: t } = this.options, i = [...((e = n.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((o) => o.startsWith(t)).map((o) => o.replace(t, ""))[0];
          return i || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [
      "pre",
      D(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: n.attrs.language ? this.options.languageClassPrefix + n.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: (n) => ({ commands: e }) => e.setNode(this.name, n),
      toggleCodeBlock: (n) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", n)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: n, $anchor: e } = this.editor.state.selection, t = e.pos === 1;
        return !n || e.parent.type.name !== this.name ? !1 : t || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // exit node on triple enter
      Enter: ({ editor: n }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = n, { selection: t } = e, { $from: r, empty: s } = t;
        if (!s || r.parent.type !== this.type)
          return !1;
        const i = r.parentOffset === r.parent.nodeSize - 2, o = r.parent.textContent.endsWith(`

`);
        return !i || !o ? !1 : n.chain().command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: n }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = n, { selection: t, doc: r } = e, { $from: s, empty: i } = t;
        if (!i || s.parent.type !== this.type || !(s.parentOffset === s.parent.nodeSize - 2))
          return !1;
        const l = s.after();
        return l === void 0 ? !1 : r.nodeAt(l) ? n.commands.command(({ tr: c }) => (c.setSelection(O.near(r.resolve(l))), !0)) : n.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      Js({
        find: Cm,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      }),
      Js({
        find: xm,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new $({
        key: new J("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (n, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const t = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), s = r ? JSON.parse(r) : void 0, i = s?.mode;
            if (!t || !i)
              return !1;
            const { tr: o, schema: l } = n.state, a = l.text(t.replace(/\r\n?/g, `
`));
            return o.replaceSelectionWith(this.type.create({ language: i }, a)), o.selection.$from.parent.type !== this.type && o.setSelection(T.near(o.doc.resolve(Math.max(0, o.selection.from - 2)))), o.setMeta("paste", !0), n.dispatch(o), !0;
          }
        }
      })
    ];
  }
}), Tm = V.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((n) => ({
      tag: `h${n}`,
      attrs: { level: n }
    }));
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, D(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.setNode(this.name, n) : !1,
      toggleHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.toggleNode(this.name, "paragraph", n) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((n, e) => ({
      ...n,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((n) => Js({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
}), Am = V.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["hr", D(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: n, state: e }) => {
        if (!Hp(e, e.schema.nodes[this.name]))
          return !1;
        const { selection: t } = e, { $from: r, $to: s } = t, i = n();
        return r.parentOffset === 0 ? i.insertContentAt({
          from: Math.max(r.pos - 1, 0),
          to: s.pos
        }, {
          type: this.name
        }) : mp(t) ? i.insertContentAt(s.pos, {
          type: this.name
        }) : i.insertContent({ type: this.name }), i.command(({ tr: o, dispatch: l }) => {
          var a;
          if (l) {
            const { $to: c } = o.selection, u = c.end();
            if (c.nodeAfter)
              c.nodeAfter.isTextblock ? o.setSelection(T.create(o.doc, c.pos + 1)) : c.nodeAfter.isBlock ? o.setSelection(x.create(o.doc, c.pos)) : o.setSelection(T.create(o.doc, c.pos));
            else {
              const d = (a = c.parent.type.contentMatch.defaultType) === null || a === void 0 ? void 0 : a.create();
              d && (o.insert(u, d), o.setSelection(T.create(o.doc, u + 1)));
            }
            o.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      Nc({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), Em = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, Om = V.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {}
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["img", D(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setImage: (n) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: n
      })
    };
  },
  addInputRules() {
    return [
      Nc({
        find: Em,
        type: this.type,
        getAttributes: (n) => {
          const [, , e, t, r] = n;
          return { src: t, alt: e, title: r };
        }
      })
    ];
  }
}), Nm = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, vm = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, Rm = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, Dm = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, Im = he.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (n) => n.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (n) => n.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["em", D(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: n }) => n.setMark(this.name),
      toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      Ft({
        find: Nm,
        type: this.type
      }),
      Ft({
        find: Rm,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      xt({
        find: vm,
        type: this.type
      }),
      xt({
        find: Dm,
        type: this.type
      })
    ];
  }
}), Pm = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Lm = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", _s = "numeric", Gs = "ascii", Ys = "alpha", en = "asciinumeric", Gt = "alphanumeric", Xs = "domain", Pc = "emoji", Bm = "scheme", zm = "slashscheme", ws = "whitespace";
function Hm(n, e) {
  return n in e || (e[n] = []), e[n];
}
function ht(n, e, t) {
  e[_s] && (e[en] = !0, e[Gt] = !0), e[Gs] && (e[en] = !0, e[Ys] = !0), e[en] && (e[Gt] = !0), e[Ys] && (e[Gt] = !0), e[Gt] && (e[Xs] = !0), e[Pc] && (e[Xs] = !0);
  for (const r in e) {
    const s = Hm(r, t);
    s.indexOf(n) < 0 && s.push(n);
  }
}
function Fm(n, e) {
  const t = {};
  for (const r in e)
    e[r].indexOf(n) >= 0 && (t[r] = !0);
  return t;
}
function ue(n = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = n;
}
ue.groups = {};
ue.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(n) {
    const e = this, t = e.j[n];
    if (t)
      return t;
    for (let r = 0; r < e.jr.length; r++) {
      const s = e.jr[r][0], i = e.jr[r][1];
      if (i && s.test(n))
        return i;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(n, e = !1) {
    return e ? n in this.j : !!this.go(n);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(n, e, t, r) {
    for (let s = 0; s < n.length; s++)
      this.tt(n[s], e, t, r);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(n, e, t, r) {
    r = r || ue.groups;
    let s;
    return e && e.j ? s = e : (s = new ue(e), t && r && ht(e, t, r)), this.jr.push([n, s]), s;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(n, e, t, r) {
    let s = this;
    const i = n.length;
    if (!i)
      return s;
    for (let o = 0; o < i - 1; o++)
      s = s.tt(n[o]);
    return s.tt(n[i - 1], e, t, r);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(n, e, t, r) {
    r = r || ue.groups;
    const s = this;
    if (e && e.j)
      return s.j[n] = e, e;
    const i = e;
    let o, l = s.go(n);
    if (l ? (o = new ue(), Object.assign(o.j, l.j), o.jr.push.apply(o.jr, l.jr), o.jd = l.jd, o.t = l.t) : o = new ue(), i) {
      if (r)
        if (o.t && typeof o.t == "string") {
          const a = Object.assign(Fm(o.t, r), t);
          ht(i, a, r);
        } else t && ht(i, t, r);
      o.t = i;
    }
    return s.j[n] = o, o;
  }
};
const v = (n, e, t, r, s) => n.ta(e, t, r, s), K = (n, e, t, r, s) => n.tr(e, t, r, s), al = (n, e, t, r, s) => n.ts(e, t, r, s), k = (n, e, t, r, s) => n.tt(e, t, r, s), Le = "WORD", Qs = "UWORD", Lc = "ASCIINUMERICAL", Bc = "ALPHANUMERICAL", yn = "LOCALHOST", Zs = "TLD", ei = "UTLD", qn = "SCHEME", Rt = "SLASH_SCHEME", Li = "NUM", ti = "WS", Bi = "NL", tn = "OPENBRACE", nn = "CLOSEBRACE", ar = "OPENBRACKET", cr = "CLOSEBRACKET", ur = "OPENPAREN", dr = "CLOSEPAREN", fr = "OPENANGLEBRACKET", hr = "CLOSEANGLEBRACKET", pr = "FULLWIDTHLEFTPAREN", mr = "FULLWIDTHRIGHTPAREN", gr = "LEFTCORNERBRACKET", yr = "RIGHTCORNERBRACKET", br = "LEFTWHITECORNERBRACKET", kr = "RIGHTWHITECORNERBRACKET", Sr = "FULLWIDTHLESSTHAN", wr = "FULLWIDTHGREATERTHAN", Cr = "AMPERSAND", xr = "APOSTROPHE", Mr = "ASTERISK", Je = "AT", Tr = "BACKSLASH", Ar = "BACKTICK", Er = "CARET", Ge = "COLON", zi = "COMMA", Or = "DOLLAR", Te = "DOT", Nr = "EQUALS", Hi = "EXCLAMATION", ye = "HYPHEN", rn = "PERCENT", vr = "PIPE", Rr = "PLUS", Dr = "POUND", sn = "QUERY", Fi = "QUOTE", zc = "FULLWIDTHMIDDLEDOT", $i = "SEMI", Ae = "SLASH", on = "TILDE", Ir = "UNDERSCORE", Hc = "EMOJI", Pr = "SYM";
var Fc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Bc,
  AMPERSAND: Cr,
  APOSTROPHE: xr,
  ASCIINUMERICAL: Lc,
  ASTERISK: Mr,
  AT: Je,
  BACKSLASH: Tr,
  BACKTICK: Ar,
  CARET: Er,
  CLOSEANGLEBRACKET: hr,
  CLOSEBRACE: nn,
  CLOSEBRACKET: cr,
  CLOSEPAREN: dr,
  COLON: Ge,
  COMMA: zi,
  DOLLAR: Or,
  DOT: Te,
  EMOJI: Hc,
  EQUALS: Nr,
  EXCLAMATION: Hi,
  FULLWIDTHGREATERTHAN: wr,
  FULLWIDTHLEFTPAREN: pr,
  FULLWIDTHLESSTHAN: Sr,
  FULLWIDTHMIDDLEDOT: zc,
  FULLWIDTHRIGHTPAREN: mr,
  HYPHEN: ye,
  LEFTCORNERBRACKET: gr,
  LEFTWHITECORNERBRACKET: br,
  LOCALHOST: yn,
  NL: Bi,
  NUM: Li,
  OPENANGLEBRACKET: fr,
  OPENBRACE: tn,
  OPENBRACKET: ar,
  OPENPAREN: ur,
  PERCENT: rn,
  PIPE: vr,
  PLUS: Rr,
  POUND: Dr,
  QUERY: sn,
  QUOTE: Fi,
  RIGHTCORNERBRACKET: yr,
  RIGHTWHITECORNERBRACKET: kr,
  SCHEME: qn,
  SEMI: $i,
  SLASH: Ae,
  SLASH_SCHEME: Rt,
  SYM: Pr,
  TILDE: on,
  TLD: Zs,
  UNDERSCORE: Ir,
  UTLD: ei,
  UWORD: Qs,
  WORD: Le,
  WS: ti
});
const Ie = /[a-z]/, Kt = /\p{L}/u, Cs = /\p{Emoji}/u, Pe = /\d/, xs = /\s/, cl = "\r", Ms = `
`, $m = "️", Vm = "‍", Ts = "￼";
let Pn = null, Ln = null;
function Wm(n = []) {
  const e = {};
  ue.groups = e;
  const t = new ue();
  Pn == null && (Pn = ul(Pm)), Ln == null && (Ln = ul(Lm)), k(t, "'", xr), k(t, "{", tn), k(t, "}", nn), k(t, "[", ar), k(t, "]", cr), k(t, "(", ur), k(t, ")", dr), k(t, "<", fr), k(t, ">", hr), k(t, "（", pr), k(t, "）", mr), k(t, "「", gr), k(t, "」", yr), k(t, "『", br), k(t, "』", kr), k(t, "＜", Sr), k(t, "＞", wr), k(t, "&", Cr), k(t, "*", Mr), k(t, "@", Je), k(t, "`", Ar), k(t, "^", Er), k(t, ":", Ge), k(t, ",", zi), k(t, "$", Or), k(t, ".", Te), k(t, "=", Nr), k(t, "!", Hi), k(t, "-", ye), k(t, "%", rn), k(t, "|", vr), k(t, "+", Rr), k(t, "#", Dr), k(t, "?", sn), k(t, '"', Fi), k(t, "/", Ae), k(t, ";", $i), k(t, "~", on), k(t, "_", Ir), k(t, "\\", Tr), k(t, "・", zc);
  const r = K(t, Pe, Li, {
    [_s]: !0
  });
  K(r, Pe, r);
  const s = K(r, Ie, Lc, {
    [en]: !0
  }), i = K(r, Kt, Bc, {
    [Gt]: !0
  }), o = K(t, Ie, Le, {
    [Gs]: !0
  });
  K(o, Pe, s), K(o, Ie, o), K(s, Pe, s), K(s, Ie, s);
  const l = K(t, Kt, Qs, {
    [Ys]: !0
  });
  K(l, Ie), K(l, Pe, i), K(l, Kt, l), K(i, Pe, i), K(i, Ie), K(i, Kt, i);
  const a = k(t, Ms, Bi, {
    [ws]: !0
  }), c = k(t, cl, ti, {
    [ws]: !0
  }), u = K(t, xs, ti, {
    [ws]: !0
  });
  k(t, Ts, u), k(c, Ms, a), k(c, Ts, u), K(c, xs, u), k(u, cl), k(u, Ms), K(u, xs, u), k(u, Ts, u);
  const d = K(t, Cs, Hc, {
    [Pc]: !0
  });
  k(d, "#"), K(d, Cs, d), k(d, $m, d);
  const f = k(d, Vm);
  k(f, "#"), K(f, Cs, d);
  const h = [[Ie, o], [Pe, s]], p = [[Ie, null], [Kt, l], [Pe, i]];
  for (let m = 0; m < Pn.length; m++)
    je(t, Pn[m], Zs, Le, h);
  for (let m = 0; m < Ln.length; m++)
    je(t, Ln[m], ei, Qs, p);
  ht(Zs, {
    tld: !0,
    ascii: !0
  }, e), ht(ei, {
    utld: !0,
    alpha: !0
  }, e), je(t, "file", qn, Le, h), je(t, "mailto", qn, Le, h), je(t, "http", Rt, Le, h), je(t, "https", Rt, Le, h), je(t, "ftp", Rt, Le, h), je(t, "ftps", Rt, Le, h), ht(qn, {
    scheme: !0,
    ascii: !0
  }, e), ht(Rt, {
    slashscheme: !0,
    ascii: !0
  }, e), n = n.sort((m, g) => m[0] > g[0] ? 1 : -1);
  for (let m = 0; m < n.length; m++) {
    const g = n[m][0], S = n[m][1] ? {
      [Bm]: !0
    } : {
      [zm]: !0
    };
    g.indexOf("-") >= 0 ? S[Xs] = !0 : Ie.test(g) ? Pe.test(g) ? S[en] = !0 : S[Gs] = !0 : S[_s] = !0, al(t, g, g, S);
  }
  return al(t, "localhost", yn, {
    ascii: !0
  }), t.jd = new ue(Pr), {
    start: t,
    tokens: Object.assign({
      groups: e
    }, Fc)
  };
}
function $c(n, e) {
  const t = jm(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = t.length, s = [];
  let i = 0, o = 0;
  for (; o < r; ) {
    let l = n, a = null, c = 0, u = null, d = -1, f = -1;
    for (; o < r && (a = l.go(t[o])); )
      l = a, l.accepts() ? (d = 0, f = 0, u = l) : d >= 0 && (d += t[o].length, f++), c += t[o].length, i += t[o].length, o++;
    i -= d, o -= f, c -= d, s.push({
      t: u.t,
      // token type/name
      v: e.slice(i - c, i),
      // string value
      s: i - c,
      // start index
      e: i
      // end index (excluding)
    });
  }
  return s;
}
function jm(n) {
  const e = [], t = n.length;
  let r = 0;
  for (; r < t; ) {
    let s = n.charCodeAt(r), i, o = s < 55296 || s > 56319 || r + 1 === t || (i = n.charCodeAt(r + 1)) < 56320 || i > 57343 ? n[r] : n.slice(r, r + 2);
    e.push(o), r += o.length;
  }
  return e;
}
function je(n, e, t, r, s) {
  let i;
  const o = e.length;
  for (let l = 0; l < o - 1; l++) {
    const a = e[l];
    n.j[a] ? i = n.j[a] : (i = new ue(r), i.jr = s.slice(), n.j[a] = i), n = i;
  }
  return i = new ue(t), i.jr = s.slice(), n.j[e[o - 1]] = i, i;
}
function ul(n) {
  const e = [], t = [];
  let r = 0, s = "0123456789";
  for (; r < n.length; ) {
    let i = 0;
    for (; s.indexOf(n[r + i]) >= 0; )
      i++;
    if (i > 0) {
      e.push(t.join(""));
      for (let o = parseInt(n.substring(r, r + i), 10); o > 0; o--)
        t.pop();
      r += i;
    } else
      t.push(n[r]), r++;
  }
  return e;
}
const bn = {
  defaultProtocol: "http",
  events: null,
  format: dl,
  formatHref: dl,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function Vi(n, e = null) {
  let t = Object.assign({}, bn);
  n && (t = Object.assign(t, n instanceof Vi ? n.o : n));
  const r = t.ignoreTags, s = [];
  for (let i = 0; i < r.length; i++)
    s.push(r[i].toUpperCase());
  this.o = t, e && (this.defaultRender = e), this.ignoreTags = s;
}
Vi.prototype = {
  o: bn,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(n) {
    return n;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(n) {
    return this.get("validate", n.toString(), n);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(n, e, t) {
    const r = e != null;
    let s = this.o[n];
    return s && (typeof s == "object" ? (s = t.t in s ? s[t.t] : bn[n], typeof s == "function" && r && (s = s(e, t))) : typeof s == "function" && r && (s = s(e, t.t, t)), s);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(n, e, t) {
    let r = this.o[n];
    return typeof r == "function" && e != null && (r = r(e, t.t, t)), r;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(n) {
    const e = n.render(this);
    return (this.get("render", null, n) || this.defaultRender)(e, n.t, n);
  }
};
function dl(n) {
  return n;
}
function Vc(n, e) {
  this.t = "token", this.v = n, this.tk = e;
}
Vc.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(n) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(n) {
    const e = this.toString(), t = n.get("truncate", e, this), r = n.get("format", e, this);
    return t && r.length > t ? r.substring(0, t) + "…" : r;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(n) {
    return n.get("formatHref", this.toHref(n.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(n = bn.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(n) {
    return {
      type: this.t,
      value: this.toFormattedString(n),
      isLink: this.isLink,
      href: this.toFormattedHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(n) {
    return n.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(n) {
    const e = this, t = this.toHref(n.get("defaultProtocol")), r = n.get("formatHref", t, this), s = n.get("tagName", t, e), i = this.toFormattedString(n), o = {}, l = n.get("className", t, e), a = n.get("target", t, e), c = n.get("rel", t, e), u = n.getObj("attributes", t, e), d = n.getObj("events", t, e);
    return o.href = r, l && (o.class = l), a && (o.target = a), c && (o.rel = c), u && Object.assign(o, u), {
      tagName: s,
      attributes: o,
      content: i,
      eventListeners: d
    };
  }
};
function Yr(n, e) {
  class t extends Vc {
    constructor(s, i) {
      super(s, i), this.t = n;
    }
  }
  for (const r in e)
    t.prototype[r] = e[r];
  return t.t = n, t;
}
const fl = Yr("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), hl = Yr("text"), Km = Yr("nl"), Bn = Yr("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(n = bn.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${n}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const n = this.tk;
    return n.length >= 2 && n[0].t !== yn && n[1].t === Ge;
  }
}), ge = (n) => new ue(n);
function Um({
  groups: n
}) {
  const e = n.domain.concat([Cr, Mr, Je, Tr, Ar, Er, Or, Nr, ye, Li, rn, vr, Rr, Dr, Ae, Pr, on, Ir]), t = [xr, Ge, zi, Te, Hi, rn, sn, Fi, $i, fr, hr, tn, nn, cr, ar, ur, dr, pr, mr, gr, yr, br, kr, Sr, wr], r = [Cr, xr, Mr, Tr, Ar, Er, Or, Nr, ye, tn, nn, rn, vr, Rr, Dr, sn, Ae, Pr, on, Ir], s = ge(), i = k(s, on);
  v(i, r, i), v(i, n.domain, i);
  const o = ge(), l = ge(), a = ge();
  v(s, n.domain, o), v(s, n.scheme, l), v(s, n.slashscheme, a), v(o, r, i), v(o, n.domain, o);
  const c = k(o, Je);
  k(i, Je, c), k(l, Je, c), k(a, Je, c);
  const u = k(i, Te);
  v(u, r, i), v(u, n.domain, i);
  const d = ge();
  v(c, n.domain, d), v(d, n.domain, d);
  const f = k(d, Te);
  v(f, n.domain, d);
  const h = ge(fl);
  v(f, n.tld, h), v(f, n.utld, h), k(c, yn, h);
  const p = k(d, ye);
  k(p, ye, p), v(p, n.domain, d), v(h, n.domain, d), k(h, Te, f), k(h, ye, p);
  const m = k(h, Ge);
  v(m, n.numeric, fl);
  const g = k(o, ye), y = k(o, Te);
  k(g, ye, g), v(g, n.domain, o), v(y, r, i), v(y, n.domain, o);
  const S = ge(Bn);
  v(y, n.tld, S), v(y, n.utld, S), v(S, n.domain, o), v(S, r, i), k(S, Te, y), k(S, ye, g), k(S, Je, c);
  const A = k(S, Ge), R = ge(Bn);
  v(A, n.numeric, R);
  const M = ge(Bn), I = ge();
  v(M, e, M), v(M, t, I), v(I, e, M), v(I, t, I), k(S, Ae, M), k(R, Ae, M);
  const H = k(l, Ge), E = k(a, Ge), j = k(E, Ae), _ = k(j, Ae);
  v(l, n.domain, o), k(l, Te, y), k(l, ye, g), v(a, n.domain, o), k(a, Te, y), k(a, ye, g), v(H, n.domain, M), k(H, Ae, M), k(H, sn, M), v(_, n.domain, M), v(_, e, M), k(_, Ae, M);
  const Tn = [
    [tn, nn],
    // {}
    [ar, cr],
    // []
    [ur, dr],
    // ()
    [fr, hr],
    // <>
    [pr, mr],
    // （）
    [gr, yr],
    // 「」
    [br, kr],
    // 『』
    [Sr, wr]
    // ＜＞
  ];
  for (let Qr = 0; Qr < Tn.length; Qr++) {
    const [Yi, Zr] = Tn[Qr], An = k(M, Yi);
    k(I, Yi, An), k(An, Zr, M);
    const At = ge(Bn);
    v(An, e, At);
    const Wt = ge();
    v(An, t), v(At, e, At), v(At, t, Wt), v(Wt, e, At), v(Wt, t, Wt), k(At, Zr, M), k(Wt, Zr, M);
  }
  return k(s, yn, S), k(s, Bi, Km), {
    start: s,
    tokens: Fc
  };
}
function qm(n, e, t) {
  let r = t.length, s = 0, i = [], o = [];
  for (; s < r; ) {
    let l = n, a = null, c = null, u = 0, d = null, f = -1;
    for (; s < r && !(a = l.go(t[s].t)); )
      o.push(t[s++]);
    for (; s < r && (c = a || l.go(t[s].t)); )
      a = null, l = c, l.accepts() ? (f = 0, d = l) : f >= 0 && f++, s++, u++;
    if (f < 0)
      s -= u, s < r && (o.push(t[s]), s++);
    else {
      o.length > 0 && (i.push(As(hl, e, o)), o = []), s -= f, u -= f;
      const h = d.t, p = t.slice(s - u, s);
      i.push(As(h, e, p));
    }
  }
  return o.length > 0 && i.push(As(hl, e, o)), i;
}
function As(n, e, t) {
  const r = t[0].s, s = t[t.length - 1].e, i = e.slice(r, s);
  return new n(i, t);
}
const Jm = typeof console < "u" && console && console.warn || (() => {
}), _m = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", F = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function Gm() {
  return ue.groups = {}, F.scanner = null, F.parser = null, F.tokenQueue = [], F.pluginQueue = [], F.customSchemes = [], F.initialized = !1, F;
}
function pl(n, e = !1) {
  if (F.initialized && Jm(`linkifyjs: already initialized - will not register custom scheme "${n}" ${_m}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(n))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  F.customSchemes.push([n, e]);
}
function Ym() {
  F.scanner = Wm(F.customSchemes);
  for (let n = 0; n < F.tokenQueue.length; n++)
    F.tokenQueue[n][1]({
      scanner: F.scanner
    });
  F.parser = Um(F.scanner.tokens);
  for (let n = 0; n < F.pluginQueue.length; n++)
    F.pluginQueue[n][1]({
      scanner: F.scanner,
      parser: F.parser
    });
  return F.initialized = !0, F;
}
function Wi(n) {
  return F.initialized || Ym(), qm(F.parser.start, n, $c(F.scanner.start, n));
}
Wi.scan = $c;
function Wc(n, e = null, t = null) {
  if (e && typeof e == "object") {
    if (t)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    t = e, e = null;
  }
  const r = new Vi(t), s = Wi(n), i = [];
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    l.isLink && (!e || l.t === e) && r.check(l) && i.push(l.toFormattedObject(r));
  }
  return i;
}
const ji = "[\0-   ᠎ -\u2029 　]", Xm = new RegExp(ji), Qm = new RegExp(`${ji}$`), Zm = new RegExp(ji, "g");
function eg(n) {
  return n.length === 1 ? n[0].isLink : n.length === 3 && n[1].isLink ? ["()", "[]"].includes(n[0].value + n[2].value) : !1;
}
function tg(n) {
  return new $({
    key: new J("autolink"),
    appendTransaction: (e, t, r) => {
      const s = e.some((c) => c.docChanged) && !t.doc.eq(r.doc), i = e.some((c) => c.getMeta("preventAutolink"));
      if (!s || i)
        return;
      const { tr: o } = r, l = op(t.doc, [...e]);
      if (fp(l).forEach(({ newRange: c }) => {
        const u = ap(r.doc, c, (h) => h.isTextblock);
        let d, f;
        if (u.length > 1)
          d = u[0], f = r.doc.textBetween(d.pos, d.pos + d.node.nodeSize, void 0, " ");
        else if (u.length) {
          const h = r.doc.textBetween(c.from, c.to, " ", " ");
          if (!Qm.test(h))
            return;
          d = u[0], f = r.doc.textBetween(d.pos, c.to, void 0, " ");
        }
        if (d && f) {
          const h = f.split(Xm).filter(Boolean);
          if (h.length <= 0)
            return !1;
          const p = h[h.length - 1], m = d.pos + f.lastIndexOf(p);
          if (!p)
            return !1;
          const g = Wi(p).map((y) => y.toObject(n.defaultProtocol));
          if (!eg(g))
            return !1;
          g.filter((y) => y.isLink).map((y) => ({
            ...y,
            from: m + y.start + 1,
            to: m + y.end + 1
          })).filter((y) => r.schema.marks.code ? !r.doc.rangeHasMark(y.from, y.to, r.schema.marks.code) : !0).filter((y) => n.validate(y.value)).filter((y) => n.shouldAutoLink(y.value)).forEach((y) => {
            Ii(y.from, y.to, r.doc).some((S) => S.mark.type === n.type) || o.addMark(y.from, y.to, n.type.create({
              href: y.href
            }));
          });
        }
      }), !!o.steps.length)
        return o;
    }
  });
}
function ng(n) {
  return new $({
    key: new J("handleClickLink"),
    props: {
      handleClick: (e, t, r) => {
        var s, i;
        if (r.button !== 0 || !e.editable)
          return !1;
        let o = r.target;
        const l = [];
        for (; o.nodeName !== "DIV"; )
          l.push(o), o = o.parentNode;
        if (!l.find((f) => f.nodeName === "A"))
          return !1;
        const a = kc(e.state, n.type.name), c = r.target, u = (s = c?.href) !== null && s !== void 0 ? s : a.href, d = (i = c?.target) !== null && i !== void 0 ? i : a.target;
        return c && u ? (window.open(u, d), !0) : !1;
      }
    }
  });
}
function rg(n) {
  return new $({
    key: new J("handlePasteLink"),
    props: {
      handlePaste: (e, t, r) => {
        const { state: s } = e, { selection: i } = s, { empty: o } = i;
        if (o)
          return !1;
        let l = "";
        r.content.forEach((c) => {
          l += c.textContent;
        });
        const a = Wc(l, { defaultProtocol: n.defaultProtocol }).find((c) => c.isLink && c.value === l);
        return !l || !a ? !1 : n.editor.commands.setMark(n.type, {
          href: a.href
        });
      }
    }
  });
}
function lt(n, e) {
  const t = [
    "http",
    "https",
    "ftp",
    "ftps",
    "mailto",
    "tel",
    "callto",
    "sms",
    "cid",
    "xmpp"
  ];
  return e && e.forEach((r) => {
    const s = typeof r == "string" ? r : r.scheme;
    s && t.push(s);
  }), !n || n.replace(Zm, "").match(new RegExp(
    // eslint-disable-next-line no-useless-escape
    `^(?:(?:${t.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
    "i"
  ));
}
const sg = he.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((n) => {
      if (typeof n == "string") {
        pl(n);
        return;
      }
      pl(n.scheme, n.optionalSlashes);
    });
  },
  onDestroy() {
    Gm();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (n, e) => !!lt(n, e.protocols),
      validate: (n) => !!n,
      shouldAutoLink: (n) => !!n
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(n) {
          return n.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (n) => {
          const e = n.getAttribute("href");
          return !e || !this.options.isAllowedUri(e, {
            defaultValidate: (t) => !!lt(t, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return this.options.isAllowedUri(n.href, {
      defaultValidate: (e) => !!lt(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", D(this.options.HTMLAttributes, n), 0] : [
      "a",
      D(this.options.HTMLAttributes, { ...n, href: "" }),
      0
    ];
  },
  addCommands() {
    return {
      setLink: (n) => ({ chain: e }) => {
        const { href: t } = n;
        return this.options.isAllowedUri(t, {
          defaultValidate: (r) => !!lt(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().setMark(this.name, n).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (n) => ({ chain: e }) => {
        const { href: t } = n;
        return this.options.isAllowedUri(t, {
          defaultValidate: (r) => !!lt(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().toggleMark(this.name, n, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run() : !1;
      },
      unsetLink: () => ({ chain: n }) => n().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      xt({
        find: (n) => {
          const e = [];
          if (n) {
            const { protocols: t, defaultProtocol: r } = this.options, s = Wc(n).filter((i) => i.isLink && this.options.isAllowedUri(i.value, {
              defaultValidate: (o) => !!lt(o, t),
              protocols: t,
              defaultProtocol: r
            }));
            s.length && s.forEach((i) => e.push({
              text: i.value,
              data: {
                href: i.href
              },
              index: i.start
            }));
          }
          return e;
        },
        type: this.type,
        getAttributes: (n) => {
          var e;
          return {
            href: (e = n.data) === null || e === void 0 ? void 0 : e.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const n = [], { protocols: e, defaultProtocol: t } = this.options;
    return this.options.autolink && n.push(tg({
      type: this.type,
      defaultProtocol: this.options.defaultProtocol,
      validate: (r) => this.options.isAllowedUri(r, {
        defaultValidate: (s) => !!lt(s, e),
        protocols: e,
        defaultProtocol: t
      }),
      shouldAutoLink: this.options.shouldAutoLink
    })), this.options.openOnClick === !0 && n.push(ng({
      type: this.type
    })), this.options.linkOnPaste && n.push(rg({
      editor: this.editor,
      defaultProtocol: this.options.defaultProtocol,
      type: this.type
    })), n;
  }
}), ig = V.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", D(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), og = "listItem", ml = "textStyle", gl = /^(\d+)\.\s$/, lg = V.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (n) => n.hasAttribute("start") ? parseInt(n.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: null,
        parseHTML: (n) => n.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const { start: e, ...t } = n;
    return e === 1 ? ["ol", D(this.options.HTMLAttributes, t), 0] : ["ol", D(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(og, this.editor.getAttributes(ml)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = gn({
      find: gl,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = gn({
      find: gl,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(ml) }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
      editor: this.editor
    })), [
      n
    ];
  }
}), ag = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, cg = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, ug = he.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["s", D(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: n }) => n.setMark(this.name),
      toggleStrike: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetStrike: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      Ft({
        find: ag,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      xt({
        find: cg,
        type: this.type
      })
    ];
  }
}), Jy = he.create({
  name: "subscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sub"
      },
      {
        style: "vertical-align",
        getAttrs(n) {
          return n !== "sub" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["sub", D(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setSubscript: () => ({ commands: n }) => n.setMark(this.name),
      toggleSubscript: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetSubscript: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-,": () => this.editor.commands.toggleSubscript()
    };
  }
}), _y = he.create({
  name: "superscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sup"
      },
      {
        style: "vertical-align",
        getAttrs(n) {
          return n !== "super" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["sup", D(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setSuperscript: () => ({ commands: n }) => n.setMark(this.name),
      toggleSuperscript: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetSuperscript: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-.": () => this.editor.commands.toggleSuperscript()
    };
  }
});
var ni, ri;
if (typeof WeakMap < "u") {
  let n = /* @__PURE__ */ new WeakMap();
  ni = (e) => n.get(e), ri = (e, t) => (n.set(e, t), t);
} else {
  const n = [];
  let t = 0;
  ni = (r) => {
    for (let s = 0; s < n.length; s += 2)
      if (n[s] == r) return n[s + 1];
  }, ri = (r, s) => (t == 10 && (t = 0), n[t++] = r, n[t++] = s);
}
var P = class {
  constructor(n, e, t, r) {
    this.width = n, this.height = e, this.map = t, this.problems = r;
  }
  // Find the dimensions of the cell at the given position.
  findCell(n) {
    for (let e = 0; e < this.map.length; e++) {
      const t = this.map[e];
      if (t != n) continue;
      const r = e % this.width, s = e / this.width | 0;
      let i = r + 1, o = s + 1;
      for (let l = 1; i < this.width && this.map[e + l] == t; l++)
        i++;
      for (let l = 1; o < this.height && this.map[e + this.width * l] == t; l++)
        o++;
      return { left: r, top: s, right: i, bottom: o };
    }
    throw new RangeError(`No cell with offset ${n} found`);
  }
  // Find the left side of the cell at the given position.
  colCount(n) {
    for (let e = 0; e < this.map.length; e++)
      if (this.map[e] == n)
        return e % this.width;
    throw new RangeError(`No cell with offset ${n} found`);
  }
  // Find the next cell in the given direction, starting from the cell
  // at `pos`, if any.
  nextCell(n, e, t) {
    const { left: r, right: s, top: i, bottom: o } = this.findCell(n);
    return e == "horiz" ? (t < 0 ? r == 0 : s == this.width) ? null : this.map[i * this.width + (t < 0 ? r - 1 : s)] : (t < 0 ? i == 0 : o == this.height) ? null : this.map[r + this.width * (t < 0 ? i - 1 : o)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(n, e) {
    const {
      left: t,
      right: r,
      top: s,
      bottom: i
    } = this.findCell(n), {
      left: o,
      right: l,
      top: a,
      bottom: c
    } = this.findCell(e);
    return {
      left: Math.min(t, o),
      top: Math.min(s, a),
      right: Math.max(r, l),
      bottom: Math.max(i, c)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(n) {
    const e = [], t = {};
    for (let r = n.top; r < n.bottom; r++)
      for (let s = n.left; s < n.right; s++) {
        const i = r * this.width + s, o = this.map[i];
        t[o] || (t[o] = !0, !(s == n.left && s && this.map[i - 1] == o || r == n.top && r && this.map[i - this.width] == o) && e.push(o));
      }
    return e;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(n, e, t) {
    for (let r = 0, s = 0; ; r++) {
      const i = s + t.child(r).nodeSize;
      if (r == n) {
        let o = e + n * this.width;
        const l = (n + 1) * this.width;
        for (; o < l && this.map[o] < s; ) o++;
        return o == l ? i - 1 : this.map[o];
      }
      s = i;
    }
  }
  // Find the table map for the given table node.
  static get(n) {
    return ni(n) || ri(n, dg(n));
  }
};
function dg(n) {
  if (n.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + n.type.name);
  const e = fg(n), t = n.childCount, r = [];
  let s = 0, i = null;
  const o = [];
  for (let c = 0, u = e * t; c < u; c++) r[c] = 0;
  for (let c = 0, u = 0; c < t; c++) {
    const d = n.child(c);
    u++;
    for (let p = 0; ; p++) {
      for (; s < r.length && r[s] != 0; ) s++;
      if (p == d.childCount) break;
      const m = d.child(p), { colspan: g, rowspan: y, colwidth: S } = m.attrs;
      for (let A = 0; A < y; A++) {
        if (A + c >= t) {
          (i || (i = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: y - A
          });
          break;
        }
        const R = s + A * e;
        for (let M = 0; M < g; M++) {
          r[R + M] == 0 ? r[R + M] = u : (i || (i = [])).push({
            type: "collision",
            row: c,
            pos: u,
            n: g - M
          });
          const I = S && S[M];
          if (I) {
            const H = (R + M) % e * 2, E = o[H];
            E == null || E != I && o[H + 1] == 1 ? (o[H] = I, o[H + 1] = 1) : E == I && o[H + 1]++;
          }
        }
      }
      s += g, u += m.nodeSize;
    }
    const f = (c + 1) * e;
    let h = 0;
    for (; s < f; ) r[s++] == 0 && h++;
    h && (i || (i = [])).push({ type: "missing", row: c, n: h }), u++;
  }
  (e === 0 || t === 0) && (i || (i = [])).push({ type: "zero_sized" });
  const l = new P(e, t, r, i);
  let a = !1;
  for (let c = 0; !a && c < o.length; c += 2)
    o[c] != null && o[c + 1] < t && (a = !0);
  return a && hg(l, o, n), l;
}
function fg(n) {
  let e = -1, t = !1;
  for (let r = 0; r < n.childCount; r++) {
    const s = n.child(r);
    let i = 0;
    if (t)
      for (let o = 0; o < r; o++) {
        const l = n.child(o);
        for (let a = 0; a < l.childCount; a++) {
          const c = l.child(a);
          o + c.attrs.rowspan > r && (i += c.attrs.colspan);
        }
      }
    for (let o = 0; o < s.childCount; o++) {
      const l = s.child(o);
      i += l.attrs.colspan, l.attrs.rowspan > 1 && (t = !0);
    }
    e == -1 ? e = i : e != i && (e = Math.max(e, i));
  }
  return e;
}
function hg(n, e, t) {
  n.problems || (n.problems = []);
  const r = {};
  for (let s = 0; s < n.map.length; s++) {
    const i = n.map[s];
    if (r[i]) continue;
    r[i] = !0;
    const o = t.nodeAt(i);
    if (!o)
      throw new RangeError(`No cell with offset ${i} found`);
    let l = null;
    const a = o.attrs;
    for (let c = 0; c < a.colspan; c++) {
      const u = (s + c) % n.width, d = e[u * 2];
      d != null && (!a.colwidth || a.colwidth[c] != d) && ((l || (l = pg(a)))[c] = d);
    }
    l && n.problems.unshift({
      type: "colwidth mismatch",
      pos: i,
      colwidth: l
    });
  }
}
function pg(n) {
  if (n.colwidth) return n.colwidth.slice();
  const e = [];
  for (let t = 0; t < n.colspan; t++) e.push(0);
  return e;
}
function ie(n) {
  let e = n.cached.tableNodeTypes;
  if (!e) {
    e = n.cached.tableNodeTypes = {};
    for (const t in n.nodes) {
      const r = n.nodes[t], s = r.spec.tableRole;
      s && (e[s] = r);
    }
  }
  return e;
}
var Ye = new J("selectingCells");
function Vt(n) {
  for (let e = n.depth - 1; e > 0; e--)
    if (n.node(e).type.spec.tableRole == "row")
      return n.node(0).resolve(n.before(e + 1));
  return null;
}
function mg(n) {
  for (let e = n.depth; e > 0; e--) {
    const t = n.node(e).type.spec.tableRole;
    if (t === "cell" || t === "header_cell") return n.node(e);
  }
  return null;
}
function xe(n) {
  const e = n.selection.$head;
  for (let t = e.depth; t > 0; t--)
    if (e.node(t).type.spec.tableRole == "row") return !0;
  return !1;
}
function Xr(n) {
  const e = n.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const t = Vt(e.$head) || gg(e.$head);
  if (t)
    return t;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function gg(n) {
  for (let e = n.nodeAfter, t = n.pos; e; e = e.firstChild, t++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return n.doc.resolve(t);
  }
  for (let e = n.nodeBefore, t = n.pos; e; e = e.lastChild, t--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return n.doc.resolve(t - e.nodeSize);
  }
}
function si(n) {
  return n.parent.type.spec.tableRole == "row" && !!n.nodeAfter;
}
function yg(n) {
  return n.node(0).resolve(n.pos + n.nodeAfter.nodeSize);
}
function Ki(n, e) {
  return n.depth == e.depth && n.pos >= e.start(-1) && n.pos <= e.end(-1);
}
function jc(n, e, t) {
  const r = n.node(-1), s = P.get(r), i = n.start(-1), o = s.nextCell(n.pos - i, e, t);
  return o == null ? null : n.node(0).resolve(i + o);
}
function Mt(n, e, t = 1) {
  const r = { ...n, colspan: n.colspan - t };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, t), r.colwidth.some((s) => s > 0) || (r.colwidth = null)), r;
}
function Kc(n, e, t = 1) {
  const r = { ...n, colspan: n.colspan + t };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let s = 0; s < t; s++) r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function bg(n, e, t) {
  const r = ie(e.type.schema).header_cell;
  for (let s = 0; s < n.height; s++)
    if (e.nodeAt(n.map[t + s * n.width]).type != r)
      return !1;
  return !0;
}
var L = class Be extends O {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(e, t = e) {
    const r = e.node(-1), s = P.get(r), i = e.start(-1), o = s.rectBetween(
      e.pos - i,
      t.pos - i
    ), l = e.node(0), a = s.cellsInRect(o).filter((u) => u != t.pos - i);
    a.unshift(t.pos - i);
    const c = a.map((u) => {
      const d = r.nodeAt(u);
      if (!d)
        throw RangeError(`No cell with offset ${u} found`);
      const f = i + u + 1;
      return new ua(
        l.resolve(f),
        l.resolve(f + d.content.size)
      );
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = t;
  }
  map(e, t) {
    const r = e.resolve(t.map(this.$anchorCell.pos)), s = e.resolve(t.map(this.$headCell.pos));
    if (si(r) && si(s) && Ki(r, s)) {
      const i = this.$anchorCell.node(-1) != r.node(-1);
      return i && this.isRowSelection() ? Be.rowSelection(r, s) : i && this.isColSelection() ? Be.colSelection(r, s) : new Be(r, s);
    }
    return T.between(r, s);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const e = this.$anchorCell.node(-1), t = P.get(e), r = this.$anchorCell.start(-1), s = t.rectBetween(
      this.$anchorCell.pos - r,
      this.$headCell.pos - r
    ), i = {}, o = [];
    for (let a = s.top; a < s.bottom; a++) {
      const c = [];
      for (let u = a * t.width + s.left, d = s.left; d < s.right; d++, u++) {
        const f = t.map[u];
        if (i[f]) continue;
        i[f] = !0;
        const h = t.findCell(f);
        let p = e.nodeAt(f);
        if (!p)
          throw RangeError(`No cell with offset ${f} found`);
        const m = s.left - h.left, g = h.right - s.right;
        if (m > 0 || g > 0) {
          let y = p.attrs;
          if (m > 0 && (y = Mt(y, 0, m)), g > 0 && (y = Mt(
            y,
            y.colspan - g,
            g
          )), h.left < s.left) {
            if (p = p.type.createAndFill(y), !p)
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(y)}`
              );
          } else
            p = p.type.create(y, p.content);
        }
        if (h.top < s.top || h.bottom > s.bottom) {
          const y = {
            ...p.attrs,
            rowspan: Math.min(h.bottom, s.bottom) - Math.max(h.top, s.top)
          };
          h.top < s.top ? p = p.type.createAndFill(y) : p = p.type.create(y, p.content);
        }
        c.push(p);
      }
      o.push(e.child(a).copy(b.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : o;
    return new w(b.from(l), 1, 1);
  }
  replace(e, t = w.empty) {
    const r = e.steps.length, s = this.ranges;
    for (let o = 0; o < s.length; o++) {
      const { $from: l, $to: a } = s[o], c = e.mapping.slice(r);
      e.replace(
        c.map(l.pos),
        c.map(a.pos),
        o ? w.empty : t
      );
    }
    const i = O.findFrom(
      e.doc.resolve(e.mapping.slice(r).map(this.to)),
      -1
    );
    i && e.setSelection(i);
  }
  replaceWith(e, t) {
    this.replace(e, new w(b.from(t), 0, 0));
  }
  forEachCell(e) {
    const t = this.$anchorCell.node(-1), r = P.get(t), s = this.$anchorCell.start(-1), i = r.cellsInRect(
      r.rectBetween(
        this.$anchorCell.pos - s,
        this.$headCell.pos - s
      )
    );
    for (let o = 0; o < i.length; o++)
      e(t.nodeAt(i[o]), s + i[o]);
  }
  // True if this selection goes all the way from the top to the
  // bottom of the table.
  isColSelection() {
    const e = this.$anchorCell.index(-1), t = this.$headCell.index(-1);
    if (Math.min(e, t) > 0) return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, s = t + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, s) == this.$headCell.node(-1).childCount;
  }
  // Returns the smallest column selection that covers the given anchor
  // and head cell.
  static colSelection(e, t = e) {
    const r = e.node(-1), s = P.get(r), i = e.start(-1), o = s.findCell(e.pos - i), l = s.findCell(t.pos - i), a = e.node(0);
    return o.top <= l.top ? (o.top > 0 && (e = a.resolve(i + s.map[o.left])), l.bottom < s.height && (t = a.resolve(
      i + s.map[s.width * (s.height - 1) + l.right - 1]
    ))) : (l.top > 0 && (t = a.resolve(i + s.map[l.left])), o.bottom < s.height && (e = a.resolve(
      i + s.map[s.width * (s.height - 1) + o.right - 1]
    ))), new Be(e, t);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const e = this.$anchorCell.node(-1), t = P.get(e), r = this.$anchorCell.start(-1), s = t.colCount(this.$anchorCell.pos - r), i = t.colCount(this.$headCell.pos - r);
    if (Math.min(s, i) > 0) return !1;
    const o = s + this.$anchorCell.nodeAfter.attrs.colspan, l = i + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(o, l) == t.width;
  }
  eq(e) {
    return e instanceof Be && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(e, t = e) {
    const r = e.node(-1), s = P.get(r), i = e.start(-1), o = s.findCell(e.pos - i), l = s.findCell(t.pos - i), a = e.node(0);
    return o.left <= l.left ? (o.left > 0 && (e = a.resolve(
      i + s.map[o.top * s.width]
    )), l.right < s.width && (t = a.resolve(
      i + s.map[s.width * (l.top + 1) - 1]
    ))) : (l.left > 0 && (t = a.resolve(i + s.map[l.top * s.width])), o.right < s.width && (e = a.resolve(
      i + s.map[s.width * (o.top + 1) - 1]
    ))), new Be(e, t);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, t) {
    return new Be(e.resolve(t.anchor), e.resolve(t.head));
  }
  static create(e, t, r = t) {
    return new Be(e.resolve(t), e.resolve(r));
  }
  getBookmark() {
    return new kg(this.$anchorCell.pos, this.$headCell.pos);
  }
};
L.prototype.visible = !1;
O.jsonID("cell", L);
var kg = class Uc {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Uc(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const t = e.resolve(this.anchor), r = e.resolve(this.head);
    return t.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && t.index() < t.parent.childCount && r.index() < r.parent.childCount && Ki(t, r) ? new L(t, r) : O.near(r, 1);
  }
};
function Sg(n) {
  if (!(n.selection instanceof L)) return null;
  const e = [];
  return n.selection.forEachCell((t, r) => {
    e.push(
      Y.node(r, r + t.nodeSize, { class: "selectedCell" })
    );
  }), B.create(n.doc, e);
}
function wg({ $from: n, $to: e }) {
  if (n.pos == e.pos || n.pos < e.pos - 6) return !1;
  let t = n.pos, r = e.pos, s = n.depth;
  for (; s >= 0 && !(n.after(s + 1) < n.end(s)); s--, t++)
    ;
  for (let i = e.depth; i >= 0 && !(e.before(i + 1) > e.start(i)); i--, r--)
    ;
  return t == r && /row|table/.test(n.node(s).type.spec.tableRole);
}
function Cg({ $from: n, $to: e }) {
  let t, r;
  for (let s = n.depth; s > 0; s--) {
    const i = n.node(s);
    if (i.type.spec.tableRole === "cell" || i.type.spec.tableRole === "header_cell") {
      t = i;
      break;
    }
  }
  for (let s = e.depth; s > 0; s--) {
    const i = e.node(s);
    if (i.type.spec.tableRole === "cell" || i.type.spec.tableRole === "header_cell") {
      r = i;
      break;
    }
  }
  return t !== r && e.parentOffset === 0;
}
function xg(n, e, t) {
  const r = (e || n).selection, s = (e || n).doc;
  let i, o;
  if (r instanceof x && (o = r.node.type.spec.tableRole)) {
    if (o == "cell" || o == "header_cell")
      i = L.create(s, r.from);
    else if (o == "row") {
      const l = s.resolve(r.from + 1);
      i = L.rowSelection(l, l);
    } else if (!t) {
      const l = P.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      i = L.create(s, a + 1, c);
    }
  } else r instanceof T && wg(r) ? i = T.create(s, r.from) : r instanceof T && Cg(r) && (i = T.create(s, r.$from.start(), r.$from.end()));
  return i && (e || (e = n.tr)).setSelection(i), e;
}
var Mg = new J("fix-tables");
function qc(n, e, t, r) {
  const s = n.childCount, i = e.childCount;
  e: for (let o = 0, l = 0; o < i; o++) {
    const a = e.child(o);
    for (let c = l, u = Math.min(s, o + 3); c < u; c++)
      if (n.child(c) == a) {
        l = c + 1, t += a.nodeSize;
        continue e;
      }
    r(a, t), l < s && n.child(l).sameMarkup(a) ? qc(n.child(l), a, t + 1, r) : a.nodesBetween(0, a.content.size, r, t + 1), t += a.nodeSize;
  }
}
function Jc(n, e) {
  let t;
  const r = (s, i) => {
    s.type.spec.tableRole == "table" && (t = Tg(n, s, i, t));
  };
  return e ? e.doc != n.doc && qc(e.doc, n.doc, 0, r) : n.doc.descendants(r), t;
}
function Tg(n, e, t, r) {
  const s = P.get(e);
  if (!s.problems) return r;
  r || (r = n.tr);
  const i = [];
  for (let a = 0; a < s.height; a++) i.push(0);
  for (let a = 0; a < s.problems.length; a++) {
    const c = s.problems[a];
    if (c.type == "collision") {
      const u = e.nodeAt(c.pos);
      if (!u) continue;
      const d = u.attrs;
      for (let f = 0; f < d.rowspan; f++) i[c.row + f] += c.n;
      r.setNodeMarkup(
        r.mapping.map(t + 1 + c.pos),
        null,
        Mt(d, d.colspan - c.n, c.n)
      );
    } else if (c.type == "missing")
      i[c.row] += c.n;
    else if (c.type == "overlong_rowspan") {
      const u = e.nodeAt(c.pos);
      if (!u) continue;
      r.setNodeMarkup(r.mapping.map(t + 1 + c.pos), null, {
        ...u.attrs,
        rowspan: u.attrs.rowspan - c.n
      });
    } else if (c.type == "colwidth mismatch") {
      const u = e.nodeAt(c.pos);
      if (!u) continue;
      r.setNodeMarkup(r.mapping.map(t + 1 + c.pos), null, {
        ...u.attrs,
        colwidth: c.colwidth
      });
    } else if (c.type == "zero_sized") {
      const u = r.mapping.map(t);
      r.delete(u, u + e.nodeSize);
    }
  }
  let o, l;
  for (let a = 0; a < i.length; a++)
    i[a] && (o == null && (o = a), l = a);
  for (let a = 0, c = t + 1; a < s.height; a++) {
    const u = e.child(a), d = c + u.nodeSize, f = i[a];
    if (f > 0) {
      let h = "cell";
      u.firstChild && (h = u.firstChild.type.spec.tableRole);
      const p = [];
      for (let g = 0; g < f; g++) {
        const y = ie(n.schema)[h].createAndFill();
        y && p.push(y);
      }
      const m = (a == 0 || o == a - 1) && l == a ? c + 1 : d - 1;
      r.insert(r.mapping.map(m), p);
    }
    c = d;
  }
  return r.setMeta(Mg, { fixTables: !0 });
}
function Re(n) {
  const e = n.selection, t = Xr(n), r = t.node(-1), s = t.start(-1), i = P.get(r);
  return { ...e instanceof L ? i.rectBetween(
    e.$anchorCell.pos - s,
    e.$headCell.pos - s
  ) : i.findCell(t.pos - s), tableStart: s, map: i, table: r };
}
function _c(n, { map: e, tableStart: t, table: r }, s) {
  let i = s > 0 ? -1 : 0;
  bg(e, r, s + i) && (i = s == 0 || s == e.width ? null : 0);
  for (let o = 0; o < e.height; o++) {
    const l = o * e.width + s;
    if (s > 0 && s < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      n.setNodeMarkup(
        n.mapping.map(t + a),
        null,
        Kc(c.attrs, s - e.colCount(a))
      ), o += c.attrs.rowspan - 1;
    } else {
      const a = i == null ? ie(r.type.schema).cell : r.nodeAt(e.map[l + i]).type, c = e.positionAt(o, s, r);
      n.insert(n.mapping.map(t + c), a.createAndFill());
    }
  }
  return n;
}
function Ag(n, e) {
  if (!xe(n)) return !1;
  if (e) {
    const t = Re(n);
    e(_c(n.tr, t, t.left));
  }
  return !0;
}
function Eg(n, e) {
  if (!xe(n)) return !1;
  if (e) {
    const t = Re(n);
    e(_c(n.tr, t, t.right));
  }
  return !0;
}
function Og(n, { map: e, table: t, tableStart: r }, s) {
  const i = n.mapping.maps.length;
  for (let o = 0; o < e.height; ) {
    const l = o * e.width + s, a = e.map[l], c = t.nodeAt(a), u = c.attrs;
    if (s > 0 && e.map[l - 1] == a || s < e.width - 1 && e.map[l + 1] == a)
      n.setNodeMarkup(
        n.mapping.slice(i).map(r + a),
        null,
        Mt(u, s - e.colCount(a))
      );
    else {
      const d = n.mapping.slice(i).map(r + a);
      n.delete(d, d + c.nodeSize);
    }
    o += u.rowspan;
  }
}
function Ng(n, e) {
  if (!xe(n)) return !1;
  if (e) {
    const t = Re(n), r = n.tr;
    if (t.left == 0 && t.right == t.map.width) return !1;
    for (let s = t.right - 1; Og(r, t, s), s != t.left; s--) {
      const i = t.tableStart ? r.doc.nodeAt(t.tableStart - 1) : r.doc;
      if (!i)
        throw RangeError("No table found");
      t.table = i, t.map = P.get(i);
    }
    e(r);
  }
  return !0;
}
function vg(n, e, t) {
  var r;
  const s = ie(e.type.schema).header_cell;
  for (let i = 0; i < n.width; i++)
    if (((r = e.nodeAt(n.map[i + t * n.width])) == null ? void 0 : r.type) != s)
      return !1;
  return !0;
}
function Gc(n, { map: e, tableStart: t, table: r }, s) {
  var i;
  let o = t;
  for (let c = 0; c < s; c++) o += r.child(c).nodeSize;
  const l = [];
  let a = s > 0 ? -1 : 0;
  vg(e, r, s + a) && (a = s == 0 || s == e.height ? null : 0);
  for (let c = 0, u = e.width * s; c < e.width; c++, u++)
    if (s > 0 && s < e.height && e.map[u] == e.map[u - e.width]) {
      const d = e.map[u], f = r.nodeAt(d).attrs;
      n.setNodeMarkup(t + d, null, {
        ...f,
        rowspan: f.rowspan + 1
      }), c += f.colspan - 1;
    } else {
      const d = a == null ? ie(r.type.schema).cell : (i = r.nodeAt(e.map[u + a * e.width])) == null ? void 0 : i.type, f = d?.createAndFill();
      f && l.push(f);
    }
  return n.insert(o, ie(r.type.schema).row.create(null, l)), n;
}
function Rg(n, e) {
  if (!xe(n)) return !1;
  if (e) {
    const t = Re(n);
    e(Gc(n.tr, t, t.top));
  }
  return !0;
}
function Dg(n, e) {
  if (!xe(n)) return !1;
  if (e) {
    const t = Re(n);
    e(Gc(n.tr, t, t.bottom));
  }
  return !0;
}
function Ig(n, { map: e, table: t, tableStart: r }, s) {
  let i = 0;
  for (let c = 0; c < s; c++) i += t.child(c).nodeSize;
  const o = i + t.child(s).nodeSize, l = n.mapping.maps.length;
  n.delete(i + r, o + r);
  const a = /* @__PURE__ */ new Set();
  for (let c = 0, u = s * e.width; c < e.width; c++, u++) {
    const d = e.map[u];
    if (!a.has(d)) {
      if (a.add(d), s > 0 && d == e.map[u - e.width]) {
        const f = t.nodeAt(d).attrs;
        n.setNodeMarkup(n.mapping.slice(l).map(d + r), null, {
          ...f,
          rowspan: f.rowspan - 1
        }), c += f.colspan - 1;
      } else if (s < e.height && d == e.map[u + e.width]) {
        const f = t.nodeAt(d), h = f.attrs, p = f.type.create(
          { ...h, rowspan: f.attrs.rowspan - 1 },
          f.content
        ), m = e.positionAt(s + 1, c, t);
        n.insert(n.mapping.slice(l).map(r + m), p), c += h.colspan - 1;
      }
    }
  }
}
function Pg(n, e) {
  if (!xe(n)) return !1;
  if (e) {
    const t = Re(n), r = n.tr;
    if (t.top == 0 && t.bottom == t.map.height) return !1;
    for (let s = t.bottom - 1; Ig(r, t, s), s != t.top; s--) {
      const i = t.tableStart ? r.doc.nodeAt(t.tableStart - 1) : r.doc;
      if (!i)
        throw RangeError("No table found");
      t.table = i, t.map = P.get(t.table);
    }
    e(r);
  }
  return !0;
}
function yl(n) {
  const e = n.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function Lg({ width: n, height: e, map: t }, r) {
  let s = r.top * n + r.left, i = s, o = (r.bottom - 1) * n + r.left, l = s + (r.right - r.left - 1);
  for (let a = r.top; a < r.bottom; a++) {
    if (r.left > 0 && t[i] == t[i - 1] || r.right < n && t[l] == t[l + 1])
      return !0;
    i += n, l += n;
  }
  for (let a = r.left; a < r.right; a++) {
    if (r.top > 0 && t[s] == t[s - n] || r.bottom < e && t[o] == t[o + n])
      return !0;
    s++, o++;
  }
  return !1;
}
function bl(n, e) {
  const t = n.selection;
  if (!(t instanceof L) || t.$anchorCell.pos == t.$headCell.pos)
    return !1;
  const r = Re(n), { map: s } = r;
  if (Lg(s, r)) return !1;
  if (e) {
    const i = n.tr, o = {};
    let l = b.empty, a, c;
    for (let u = r.top; u < r.bottom; u++)
      for (let d = r.left; d < r.right; d++) {
        const f = s.map[u * s.width + d], h = r.table.nodeAt(f);
        if (!(o[f] || !h))
          if (o[f] = !0, a == null)
            a = f, c = h;
          else {
            yl(h) || (l = l.append(h.content));
            const p = i.mapping.map(f + r.tableStart);
            i.delete(p, p + h.nodeSize);
          }
      }
    if (a == null || c == null)
      return !0;
    if (i.setNodeMarkup(a + r.tableStart, null, {
      ...Kc(
        c.attrs,
        c.attrs.colspan,
        r.right - r.left - c.attrs.colspan
      ),
      rowspan: r.bottom - r.top
    }), l.size) {
      const u = a + 1 + c.content.size, d = yl(c) ? a + 1 : u;
      i.replaceWith(d + r.tableStart, u + r.tableStart, l);
    }
    i.setSelection(
      new L(i.doc.resolve(a + r.tableStart))
    ), e(i);
  }
  return !0;
}
function kl(n, e) {
  const t = ie(n.schema);
  return Bg(({ node: r }) => t[r.type.spec.tableRole])(n, e);
}
function Bg(n) {
  return (e, t) => {
    var r;
    const s = e.selection;
    let i, o;
    if (s instanceof L) {
      if (s.$anchorCell.pos != s.$headCell.pos) return !1;
      i = s.$anchorCell.nodeAfter, o = s.$anchorCell.pos;
    } else {
      if (i = mg(s.$from), !i) return !1;
      o = (r = Vt(s.$from)) == null ? void 0 : r.pos;
    }
    if (i == null || o == null || i.attrs.colspan == 1 && i.attrs.rowspan == 1)
      return !1;
    if (t) {
      let l = i.attrs;
      const a = [], c = l.colwidth;
      l.rowspan > 1 && (l = { ...l, rowspan: 1 }), l.colspan > 1 && (l = { ...l, colspan: 1 });
      const u = Re(e), d = e.tr;
      for (let h = 0; h < u.right - u.left; h++)
        a.push(
          c ? {
            ...l,
            colwidth: c && c[h] ? [c[h]] : null
          } : l
        );
      let f;
      for (let h = u.top; h < u.bottom; h++) {
        let p = u.map.positionAt(h, u.left, u.table);
        h == u.top && (p += i.nodeSize);
        for (let m = u.left, g = 0; m < u.right; m++, g++)
          m == u.left && h == u.top || d.insert(
            f = d.mapping.map(p + u.tableStart, 1),
            n({ node: i, row: h, col: m }).createAndFill(a[g])
          );
      }
      d.setNodeMarkup(
        o,
        n({ node: i, row: u.top, col: u.left }),
        a[0]
      ), s instanceof L && d.setSelection(
        new L(
          d.doc.resolve(s.$anchorCell.pos),
          f ? d.doc.resolve(f) : void 0
        )
      ), t(d);
    }
    return !0;
  };
}
function zg(n, e) {
  return function(t, r) {
    if (!xe(t)) return !1;
    const s = Xr(t);
    if (s.nodeAfter.attrs[n] === e) return !1;
    if (r) {
      const i = t.tr;
      t.selection instanceof L ? t.selection.forEachCell((o, l) => {
        o.attrs[n] !== e && i.setNodeMarkup(l, null, {
          ...o.attrs,
          [n]: e
        });
      }) : i.setNodeMarkup(s.pos, null, {
        ...s.nodeAfter.attrs,
        [n]: e
      }), r(i);
    }
    return !0;
  };
}
function Hg(n) {
  return function(e, t) {
    if (!xe(e)) return !1;
    if (t) {
      const r = ie(e.schema), s = Re(e), i = e.tr, o = s.map.cellsInRect(
        n == "column" ? {
          left: s.left,
          top: 0,
          right: s.right,
          bottom: s.map.height
        } : n == "row" ? {
          left: 0,
          top: s.top,
          right: s.map.width,
          bottom: s.bottom
        } : s
      ), l = o.map((a) => s.table.nodeAt(a));
      for (let a = 0; a < o.length; a++)
        l[a].type == r.header_cell && i.setNodeMarkup(
          s.tableStart + o[a],
          r.cell,
          l[a].attrs
        );
      if (i.steps.length == 0)
        for (let a = 0; a < o.length; a++)
          i.setNodeMarkup(
            s.tableStart + o[a],
            r.header_cell,
            l[a].attrs
          );
      t(i);
    }
    return !0;
  };
}
function Sl(n, e, t) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: n == "row" ? e.map.width : 1,
    bottom: n == "column" ? e.map.height : 1
  });
  for (let s = 0; s < r.length; s++) {
    const i = e.table.nodeAt(r[s]);
    if (i && i.type !== t.header_cell)
      return !1;
  }
  return !0;
}
function kn(n, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? Hg(n) : function(t, r) {
    if (!xe(t)) return !1;
    if (r) {
      const s = ie(t.schema), i = Re(t), o = t.tr, l = Sl("row", i, s), a = Sl(
        "column",
        i,
        s
      ), u = (n === "column" ? l : n === "row" ? a : !1) ? 1 : 0, d = n == "column" ? {
        left: 0,
        top: u,
        right: 1,
        bottom: i.map.height
      } : n == "row" ? {
        left: u,
        top: 0,
        right: i.map.width,
        bottom: 1
      } : i, f = n == "column" ? a ? s.cell : s.header_cell : n == "row" ? l ? s.cell : s.header_cell : s.cell;
      i.map.cellsInRect(d).forEach((h) => {
        const p = h + i.tableStart, m = o.doc.nodeAt(p);
        m && o.setNodeMarkup(p, f, m.attrs);
      }), r(o);
    }
    return !0;
  };
}
kn("row", {
  useDeprecatedLogic: !0
});
kn("column", {
  useDeprecatedLogic: !0
});
var Fg = kn("cell", {
  useDeprecatedLogic: !0
});
function $g(n, e) {
  if (e < 0) {
    const t = n.nodeBefore;
    if (t) return n.pos - t.nodeSize;
    for (let r = n.index(-1) - 1, s = n.before(); r >= 0; r--) {
      const i = n.node(-1).child(r), o = i.lastChild;
      if (o)
        return s - 1 - o.nodeSize;
      s -= i.nodeSize;
    }
  } else {
    if (n.index() < n.parent.childCount - 1)
      return n.pos + n.nodeAfter.nodeSize;
    const t = n.node(-1);
    for (let r = n.indexAfter(-1), s = n.after(); r < t.childCount; r++) {
      const i = t.child(r);
      if (i.childCount) return s + 1;
      s += i.nodeSize;
    }
  }
  return null;
}
function wl(n) {
  return function(e, t) {
    if (!xe(e)) return !1;
    const r = $g(Xr(e), n);
    if (r == null) return !1;
    if (t) {
      const s = e.doc.resolve(r);
      t(
        e.tr.setSelection(T.between(s, yg(s))).scrollIntoView()
      );
    }
    return !0;
  };
}
function Vg(n, e) {
  const t = n.selection.$anchor;
  for (let r = t.depth; r > 0; r--)
    if (t.node(r).type.spec.tableRole == "table")
      return e && e(
        n.tr.delete(t.before(r), t.after(r)).scrollIntoView()
      ), !0;
  return !1;
}
function zn(n, e) {
  const t = n.selection;
  if (!(t instanceof L)) return !1;
  if (e) {
    const r = n.tr, s = ie(n.schema).cell.createAndFill().content;
    t.forEachCell((i, o) => {
      i.content.eq(s) || r.replace(
        r.mapping.map(o + 1),
        r.mapping.map(o + i.nodeSize - 1),
        new w(s, 0, 0)
      );
    }), r.docChanged && e(r);
  }
  return !0;
}
function Wg(n) {
  if (!n.size) return null;
  let { content: e, openStart: t, openEnd: r } = n;
  for (; e.childCount == 1 && (t > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    t--, r--, e = e.child(0).content;
  const s = e.child(0), i = s.type.spec.tableRole, o = s.type.schema, l = [];
  if (i == "row")
    for (let a = 0; a < e.childCount; a++) {
      let c = e.child(a).content;
      const u = a ? 0 : Math.max(0, t - 1), d = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
      (u || d) && (c = ii(
        ie(o).row,
        new w(c, u, d)
      ).content), l.push(c);
    }
  else if (i == "cell" || i == "header_cell")
    l.push(
      t || r ? ii(
        ie(o).row,
        new w(e, t, r)
      ).content : e
    );
  else
    return null;
  return jg(o, l);
}
function jg(n, e) {
  const t = [];
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    for (let o = i.childCount - 1; o >= 0; o--) {
      const { rowspan: l, colspan: a } = i.child(o).attrs;
      for (let c = s; c < s + l; c++)
        t[c] = (t[c] || 0) + a;
    }
  }
  let r = 0;
  for (let s = 0; s < t.length; s++) r = Math.max(r, t[s]);
  for (let s = 0; s < t.length; s++)
    if (s >= e.length && e.push(b.empty), t[s] < r) {
      const i = ie(n).cell.createAndFill(), o = [];
      for (let l = t[s]; l < r; l++)
        o.push(i);
      e[s] = e[s].append(b.from(o));
    }
  return { height: e.length, width: r, rows: e };
}
function ii(n, e) {
  const t = n.createAndFill();
  return new di(t).replace(0, t.content.size, e).doc;
}
function Kg({ width: n, height: e, rows: t }, r, s) {
  if (n != r) {
    const i = [], o = [];
    for (let l = 0; l < t.length; l++) {
      const a = t[l], c = [];
      for (let u = i[l] || 0, d = 0; u < r; d++) {
        let f = a.child(d % a.childCount);
        u + f.attrs.colspan > r && (f = f.type.createChecked(
          Mt(
            f.attrs,
            f.attrs.colspan,
            u + f.attrs.colspan - r
          ),
          f.content
        )), c.push(f), u += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++)
          i[l + h] = (i[l + h] || 0) + f.attrs.colspan;
      }
      o.push(b.from(c));
    }
    t = o, n = r;
  }
  if (e != s) {
    const i = [];
    for (let o = 0, l = 0; o < s; o++, l++) {
      const a = [], c = t[l % e];
      for (let u = 0; u < c.childCount; u++) {
        let d = c.child(u);
        o + d.attrs.rowspan > s && (d = d.type.create(
          {
            ...d.attrs,
            rowspan: Math.max(1, s - d.attrs.rowspan)
          },
          d.content
        )), a.push(d);
      }
      i.push(b.from(a));
    }
    t = i, e = s;
  }
  return { width: n, height: e, rows: t };
}
function Ug(n, e, t, r, s, i, o) {
  const l = n.doc.type.schema, a = ie(l);
  let c, u;
  if (s > e.width)
    for (let d = 0, f = 0; d < e.height; d++) {
      const h = t.child(d);
      f += h.nodeSize;
      const p = [];
      let m;
      h.lastChild == null || h.lastChild.type == a.cell ? m = c || (c = a.cell.createAndFill()) : m = u || (u = a.header_cell.createAndFill());
      for (let g = e.width; g < s; g++) p.push(m);
      n.insert(n.mapping.slice(o).map(f - 1 + r), p);
    }
  if (i > e.height) {
    const d = [];
    for (let p = 0, m = (e.height - 1) * e.width; p < Math.max(e.width, s); p++) {
      const g = p >= e.width ? !1 : t.nodeAt(e.map[m + p]).type == a.header_cell;
      d.push(
        g ? u || (u = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill())
      );
    }
    const f = a.row.create(null, b.from(d)), h = [];
    for (let p = e.height; p < i; p++) h.push(f);
    n.insert(n.mapping.slice(o).map(r + t.nodeSize - 2), h);
  }
  return !!(c || u);
}
function Cl(n, e, t, r, s, i, o, l) {
  if (o == 0 || o == e.height) return !1;
  let a = !1;
  for (let c = s; c < i; c++) {
    const u = o * e.width + c, d = e.map[u];
    if (e.map[u - e.width] == d) {
      a = !0;
      const f = t.nodeAt(d), { top: h, left: p } = e.findCell(d);
      n.setNodeMarkup(n.mapping.slice(l).map(d + r), null, {
        ...f.attrs,
        rowspan: o - h
      }), n.insert(
        n.mapping.slice(l).map(e.positionAt(o, p, t)),
        f.type.createAndFill({
          ...f.attrs,
          rowspan: h + f.attrs.rowspan - o
        })
      ), c += f.attrs.colspan - 1;
    }
  }
  return a;
}
function xl(n, e, t, r, s, i, o, l) {
  if (o == 0 || o == e.width) return !1;
  let a = !1;
  for (let c = s; c < i; c++) {
    const u = c * e.width + o, d = e.map[u];
    if (e.map[u - 1] == d) {
      a = !0;
      const f = t.nodeAt(d), h = e.colCount(d), p = n.mapping.slice(l).map(d + r);
      n.setNodeMarkup(
        p,
        null,
        Mt(
          f.attrs,
          o - h,
          f.attrs.colspan - (o - h)
        )
      ), n.insert(
        p + f.nodeSize,
        f.type.createAndFill(
          Mt(f.attrs, 0, o - h)
        )
      ), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function Ml(n, e, t, r, s) {
  let i = t ? n.doc.nodeAt(t - 1) : n.doc;
  if (!i)
    throw new Error("No table found");
  let o = P.get(i);
  const { top: l, left: a } = r, c = a + s.width, u = l + s.height, d = n.tr;
  let f = 0;
  function h() {
    if (i = t ? d.doc.nodeAt(t - 1) : d.doc, !i)
      throw new Error("No table found");
    o = P.get(i), f = d.mapping.maps.length;
  }
  Ug(d, o, i, t, c, u, f) && h(), Cl(d, o, i, t, a, c, l, f) && h(), Cl(d, o, i, t, a, c, u, f) && h(), xl(d, o, i, t, l, u, a, f) && h(), xl(d, o, i, t, l, u, c, f) && h();
  for (let p = l; p < u; p++) {
    const m = o.positionAt(p, a, i), g = o.positionAt(p, c, i);
    d.replace(
      d.mapping.slice(f).map(m + t),
      d.mapping.slice(f).map(g + t),
      new w(s.rows[p - l], 0, 0)
    );
  }
  h(), d.setSelection(
    new L(
      d.doc.resolve(t + o.positionAt(l, a, i)),
      d.doc.resolve(t + o.positionAt(u - 1, c - 1, i))
    )
  ), e(d);
}
var qg = Ci({
  ArrowLeft: Hn("horiz", -1),
  ArrowRight: Hn("horiz", 1),
  ArrowUp: Hn("vert", -1),
  ArrowDown: Hn("vert", 1),
  "Shift-ArrowLeft": Fn("horiz", -1),
  "Shift-ArrowRight": Fn("horiz", 1),
  "Shift-ArrowUp": Fn("vert", -1),
  "Shift-ArrowDown": Fn("vert", 1),
  Backspace: zn,
  "Mod-Backspace": zn,
  Delete: zn,
  "Mod-Delete": zn
});
function Jn(n, e, t) {
  return t.eq(n.selection) ? !1 : (e && e(n.tr.setSelection(t).scrollIntoView()), !0);
}
function Hn(n, e) {
  return (t, r, s) => {
    if (!s) return !1;
    const i = t.selection;
    if (i instanceof L)
      return Jn(
        t,
        r,
        O.near(i.$headCell, e)
      );
    if (n != "horiz" && !i.empty) return !1;
    const o = Yc(s, n, e);
    if (o == null) return !1;
    if (n == "horiz")
      return Jn(
        t,
        r,
        O.near(t.doc.resolve(i.head + e), e)
      );
    {
      const l = t.doc.resolve(o), a = jc(l, n, e);
      let c;
      return a ? c = O.near(a, 1) : e < 0 ? c = O.near(t.doc.resolve(l.before(-1)), -1) : c = O.near(t.doc.resolve(l.after(-1)), 1), Jn(t, r, c);
    }
  };
}
function Fn(n, e) {
  return (t, r, s) => {
    if (!s) return !1;
    const i = t.selection;
    let o;
    if (i instanceof L)
      o = i;
    else {
      const a = Yc(s, n, e);
      if (a == null) return !1;
      o = new L(t.doc.resolve(a));
    }
    const l = jc(o.$headCell, n, e);
    return l ? Jn(
      t,
      r,
      new L(o.$anchorCell, l)
    ) : !1;
  };
}
function Jg(n, e) {
  const t = n.state.doc, r = Vt(t.resolve(e));
  return r ? (n.dispatch(n.state.tr.setSelection(new L(r))), !0) : !1;
}
function _g(n, e, t) {
  if (!xe(n.state)) return !1;
  let r = Wg(t);
  const s = n.state.selection;
  if (s instanceof L) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [
        b.from(
          ii(ie(n.state.schema).cell, t)
        )
      ]
    });
    const i = s.$anchorCell.node(-1), o = s.$anchorCell.start(-1), l = P.get(i).rectBetween(
      s.$anchorCell.pos - o,
      s.$headCell.pos - o
    );
    return r = Kg(r, l.right - l.left, l.bottom - l.top), Ml(n.state, n.dispatch, o, l, r), !0;
  } else if (r) {
    const i = Xr(n.state), o = i.start(-1);
    return Ml(
      n.state,
      n.dispatch,
      o,
      P.get(i.node(-1)).findCell(i.pos - o),
      r
    ), !0;
  } else
    return !1;
}
function Gg(n, e) {
  var t;
  if (e.ctrlKey || e.metaKey) return;
  const r = Tl(n, e.target);
  let s;
  if (e.shiftKey && n.state.selection instanceof L)
    i(n.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (s = Vt(n.state.selection.$anchor)) != null && ((t = Es(n, e)) == null ? void 0 : t.pos) != s.pos)
    i(s, e), e.preventDefault();
  else if (!r)
    return;
  function i(a, c) {
    let u = Es(n, c);
    const d = Ye.getState(n.state) == null;
    if (!u || !Ki(a, u))
      if (d) u = a;
      else return;
    const f = new L(a, u);
    if (d || !n.state.selection.eq(f)) {
      const h = n.state.tr.setSelection(f);
      d && h.setMeta(Ye, a.pos), n.dispatch(h);
    }
  }
  function o() {
    n.root.removeEventListener("mouseup", o), n.root.removeEventListener("dragstart", o), n.root.removeEventListener("mousemove", l), Ye.getState(n.state) != null && n.dispatch(n.state.tr.setMeta(Ye, -1));
  }
  function l(a) {
    const c = a, u = Ye.getState(n.state);
    let d;
    if (u != null)
      d = n.state.doc.resolve(u);
    else if (Tl(n, c.target) != r && (d = Es(n, e), !d))
      return o();
    d && i(d, c);
  }
  n.root.addEventListener("mouseup", o), n.root.addEventListener("dragstart", o), n.root.addEventListener("mousemove", l);
}
function Yc(n, e, t) {
  if (!(n.state.selection instanceof T)) return null;
  const { $head: r } = n.state.selection;
  for (let s = r.depth - 1; s >= 0; s--) {
    const i = r.node(s);
    if ((t < 0 ? r.index(s) : r.indexAfter(s)) != (t < 0 ? 0 : i.childCount)) return null;
    if (i.type.spec.tableRole == "cell" || i.type.spec.tableRole == "header_cell") {
      const l = r.before(s), a = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
      return n.endOfTextblock(a) ? l : null;
    }
  }
  return null;
}
function Tl(n, e) {
  for (; e && e != n.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function Es(n, e) {
  const t = n.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return t && t ? Vt(n.state.doc.resolve(t.pos)) : null;
}
var Xc = class {
  constructor(e, t) {
    this.node = e, this.defaultCellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty(
      "--default-cell-min-width",
      `${t}px`
    ), this.colgroup = this.table.appendChild(document.createElement("colgroup")), oi(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, oi(
      e,
      this.colgroup,
      this.table,
      this.defaultCellMinWidth
    ), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function oi(n, e, t, r, s, i) {
  var o;
  let l = 0, a = !0, c = e.firstChild;
  const u = n.firstChild;
  if (u) {
    for (let d = 0, f = 0; d < u.childCount; d++) {
      const { colspan: h, colwidth: p } = u.child(d).attrs;
      for (let m = 0; m < h; m++, f++) {
        const g = s == f ? i : p && p[m], y = g ? g + "px" : "";
        if (l += g || r, g || (a = !1), c)
          c.style.width != y && (c.style.width = y), c = c.nextSibling;
        else {
          const S = document.createElement("col");
          S.style.width = y, e.appendChild(S);
        }
      }
    }
    for (; c; ) {
      const d = c.nextSibling;
      (o = c.parentNode) == null || o.removeChild(c), c = d;
    }
    a ? (t.style.width = l + "px", t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = l + "px");
  }
}
var me = new J(
  "tableColumnResizing"
);
function Yg({
  handleWidth: n = 5,
  cellMinWidth: e = 25,
  defaultCellMinWidth: t = 100,
  View: r = Xc,
  lastColumnResizable: s = !0
} = {}) {
  const i = new $({
    key: me,
    state: {
      init(o, l) {
        var a, c;
        const u = (c = (a = i.spec) == null ? void 0 : a.props) == null ? void 0 : c.nodeViews, d = ie(l.schema).table.name;
        return r && u && (u[d] = (f, h) => new r(f, t, h)), new Xg(-1, !1);
      },
      apply(o, l) {
        return l.apply(o);
      }
    },
    props: {
      attributes: (o) => {
        const l = me.getState(o);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (o, l) => {
          Qg(o, l, n, s);
        },
        mouseleave: (o) => {
          Zg(o);
        },
        mousedown: (o, l) => {
          ey(o, l, e, t);
        }
      },
      decorations: (o) => {
        const l = me.getState(o);
        if (l && l.activeHandle > -1)
          return iy(o, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return i;
}
var Xg = class _n {
  constructor(e, t) {
    this.activeHandle = e, this.dragging = t;
  }
  apply(e) {
    const t = this, r = e.getMeta(me);
    if (r && r.setHandle != null)
      return new _n(r.setHandle, !1);
    if (r && r.setDragging !== void 0)
      return new _n(t.activeHandle, r.setDragging);
    if (t.activeHandle > -1 && e.docChanged) {
      let s = e.mapping.map(t.activeHandle, -1);
      return si(e.doc.resolve(s)) || (s = -1), new _n(s, t.dragging);
    }
    return t;
  }
};
function Qg(n, e, t, r) {
  if (!n.editable) return;
  const s = me.getState(n.state);
  if (s && !s.dragging) {
    const i = ny(e.target);
    let o = -1;
    if (i) {
      const { left: l, right: a } = i.getBoundingClientRect();
      e.clientX - l <= t ? o = Al(n, e, "left", t) : a - e.clientX <= t && (o = Al(n, e, "right", t));
    }
    if (o != s.activeHandle) {
      if (!r && o !== -1) {
        const l = n.state.doc.resolve(o), a = l.node(-1), c = P.get(a), u = l.start(-1);
        if (c.colCount(l.pos - u) + l.nodeAfter.attrs.colspan - 1 == c.width - 1)
          return;
      }
      Qc(n, o);
    }
  }
}
function Zg(n) {
  if (!n.editable) return;
  const e = me.getState(n.state);
  e && e.activeHandle > -1 && !e.dragging && Qc(n, -1);
}
function ey(n, e, t, r) {
  var s;
  if (!n.editable) return !1;
  const i = (s = n.dom.ownerDocument.defaultView) != null ? s : window, o = me.getState(n.state);
  if (!o || o.activeHandle == -1 || o.dragging)
    return !1;
  const l = n.state.doc.nodeAt(o.activeHandle), a = ty(n, o.activeHandle, l.attrs);
  n.dispatch(
    n.state.tr.setMeta(me, {
      setDragging: { startX: e.clientX, startWidth: a }
    })
  );
  function c(d) {
    i.removeEventListener("mouseup", c), i.removeEventListener("mousemove", u);
    const f = me.getState(n.state);
    f?.dragging && (ry(
      n,
      f.activeHandle,
      El(f.dragging, d, t)
    ), n.dispatch(
      n.state.tr.setMeta(me, { setDragging: null })
    ));
  }
  function u(d) {
    if (!d.which) return c(d);
    const f = me.getState(n.state);
    if (f && f.dragging) {
      const h = El(f.dragging, d, t);
      Ol(
        n,
        f.activeHandle,
        h,
        r
      );
    }
  }
  return Ol(
    n,
    o.activeHandle,
    a,
    r
  ), i.addEventListener("mouseup", c), i.addEventListener("mousemove", u), e.preventDefault(), !0;
}
function ty(n, e, { colspan: t, colwidth: r }) {
  const s = r && r[r.length - 1];
  if (s) return s;
  const i = n.domAtPos(e);
  let l = i.node.childNodes[i.offset].offsetWidth, a = t;
  if (r)
    for (let c = 0; c < t; c++)
      r[c] && (l -= r[c], a--);
  return l / a;
}
function ny(n) {
  for (; n && n.nodeName != "TD" && n.nodeName != "TH"; )
    n = n.classList && n.classList.contains("ProseMirror") ? null : n.parentNode;
  return n;
}
function Al(n, e, t, r) {
  const s = t == "right" ? -r : r, i = n.posAtCoords({
    left: e.clientX + s,
    top: e.clientY
  });
  if (!i) return -1;
  const { pos: o } = i, l = Vt(n.state.doc.resolve(o));
  if (!l) return -1;
  if (t == "right") return l.pos;
  const a = P.get(l.node(-1)), c = l.start(-1), u = a.map.indexOf(l.pos - c);
  return u % a.width == 0 ? -1 : c + a.map[u - 1];
}
function El(n, e, t) {
  const r = e.clientX - n.startX;
  return Math.max(t, n.startWidth + r);
}
function Qc(n, e) {
  n.dispatch(
    n.state.tr.setMeta(me, { setHandle: e })
  );
}
function ry(n, e, t) {
  const r = n.state.doc.resolve(e), s = r.node(-1), i = P.get(s), o = r.start(-1), l = i.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1, a = n.state.tr;
  for (let c = 0; c < i.height; c++) {
    const u = c * i.width + l;
    if (c && i.map[u] == i.map[u - i.width]) continue;
    const d = i.map[u], f = s.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : l - i.colCount(d);
    if (f.colwidth && f.colwidth[h] == t) continue;
    const p = f.colwidth ? f.colwidth.slice() : sy(f.colspan);
    p[h] = t, a.setNodeMarkup(o + d, null, { ...f, colwidth: p });
  }
  a.docChanged && n.dispatch(a);
}
function Ol(n, e, t, r) {
  const s = n.state.doc.resolve(e), i = s.node(-1), o = s.start(-1), l = P.get(i).colCount(s.pos - o) + s.nodeAfter.attrs.colspan - 1;
  let a = n.domAtPos(s.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; )
    a = a.parentNode;
  a && oi(
    i,
    a.firstChild,
    a,
    r,
    l,
    t
  );
}
function sy(n) {
  return Array(n).fill(0);
}
function iy(n, e) {
  var t;
  const r = [], s = n.doc.resolve(e), i = s.node(-1);
  if (!i)
    return B.empty;
  const o = P.get(i), l = s.start(-1), a = o.colCount(s.pos - l) + s.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < o.height; c++) {
    const u = a + c * o.width;
    if ((a == o.width - 1 || o.map[u] != o.map[u + 1]) && (c == 0 || o.map[u] != o.map[u - o.width])) {
      const d = o.map[u], f = l + d + i.nodeAt(d).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", (t = me.getState(n)) != null && t.dragging && r.push(
        Y.node(
          l + d,
          l + d + i.nodeAt(d).nodeSize,
          {
            class: "column-resize-dragging"
          }
        )
      ), r.push(Y.widget(f, h));
    }
  }
  return B.create(n.doc, r);
}
function oy({
  allowTableNodeSelection: n = !1
} = {}) {
  return new $({
    key: Ye,
    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init() {
        return null;
      },
      apply(e, t) {
        const r = e.getMeta(Ye);
        if (r != null) return r == -1 ? null : r;
        if (t == null || !e.docChanged) return t;
        const { deleted: s, pos: i } = e.mapping.mapResult(t);
        return s ? null : i;
      }
    },
    props: {
      decorations: Sg,
      handleDOMEvents: {
        mousedown: Gg
      },
      createSelectionBetween(e) {
        return Ye.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: Jg,
      handleKeyDown: qg,
      handlePaste: _g
    },
    appendTransaction(e, t, r) {
      return xg(
        r,
        Jc(r, t),
        n
      );
    }
  });
}
function li(n, e) {
  return e ? ["width", `${Math.max(e, n)}px`] : ["min-width", `${n}px`];
}
function Nl(n, e, t, r, s, i) {
  var o;
  let l = 0, a = !0, c = e.firstChild;
  const u = n.firstChild;
  if (u !== null)
    for (let d = 0, f = 0; d < u.childCount; d += 1) {
      const { colspan: h, colwidth: p } = u.child(d).attrs;
      for (let m = 0; m < h; m += 1, f += 1) {
        const g = s === f ? i : p && p[m], y = g ? `${g}px` : "";
        if (l += g || r, g || (a = !1), c) {
          if (c.style.width !== y) {
            const [S, A] = li(r, g);
            c.style.setProperty(S, A);
          }
          c = c.nextSibling;
        } else {
          const S = document.createElement("col"), [A, R] = li(r, g);
          S.style.setProperty(A, R), e.appendChild(S);
        }
      }
    }
  for (; c; ) {
    const d = c.nextSibling;
    (o = c.parentNode) === null || o === void 0 || o.removeChild(c), c = d;
  }
  a ? (t.style.width = `${l}px`, t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = `${l}px`);
}
class ly {
  constructor(e, t) {
    this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Nl(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type !== this.node.type ? !1 : (this.node = e, Nl(e, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type === "attributes" && (e.target === this.table || this.colgroup.contains(e.target));
  }
}
function ay(n, e, t, r) {
  let s = 0, i = !0;
  const o = [], l = n.firstChild;
  if (!l)
    return {};
  for (let d = 0, f = 0; d < l.childCount; d += 1) {
    const { colspan: h, colwidth: p } = l.child(d).attrs;
    for (let m = 0; m < h; m += 1, f += 1) {
      const g = t === f ? r : p && p[m];
      s += g || e, g || (i = !1);
      const [y, S] = li(e, g);
      o.push([
        "col",
        { style: `${y}: ${S}` }
      ]);
    }
  }
  const a = i ? `${s}px` : "", c = i ? "" : `${s}px`;
  return { colgroup: ["colgroup", {}, ...o], tableWidth: a, tableMinWidth: c };
}
function vl(n, e) {
  return n.createAndFill();
}
function cy(n) {
  if (n.cached.tableNodeTypes)
    return n.cached.tableNodeTypes;
  const e = {};
  return Object.keys(n.nodes).forEach((t) => {
    const r = n.nodes[t];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), n.cached.tableNodeTypes = e, e;
}
function uy(n, e, t, r, s) {
  const i = cy(n), o = [], l = [];
  for (let c = 0; c < t; c += 1) {
    const u = vl(i.cell);
    if (u && l.push(u), r) {
      const d = vl(i.header_cell);
      d && o.push(d);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(i.row.createChecked(null, r && c === 0 ? o : l));
  return i.table.createChecked(null, a);
}
function dy(n) {
  return n instanceof L;
}
const $n = ({ editor: n }) => {
  const { selection: e } = n.state;
  if (!dy(e))
    return !1;
  let t = 0;
  const r = yc(e.ranges[0].$from, (i) => i.type.name === "table");
  return r?.node.descendants((i) => {
    if (i.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(i.type.name) && (t += 1);
  }), t === e.ranges.length ? (n.commands.deleteTable(), !0) : !1;
}, Ui = V.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: ly,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    const { colgroup: t, tableWidth: r, tableMinWidth: s } = ay(n, this.options.cellMinWidth);
    return [
      "table",
      D(this.options.HTMLAttributes, e, {
        style: r ? `width: ${r}` : `min-width: ${s}`
      }),
      t,
      ["tbody", 0]
    ];
  },
  addCommands() {
    return {
      insertTable: ({ rows: n = 3, cols: e = 3, withHeaderRow: t = !0 } = {}) => ({ tr: r, dispatch: s, editor: i }) => {
        const o = uy(i.schema, n, e, t);
        if (s) {
          const l = r.selection.from + 1;
          r.replaceSelectionWith(o).scrollIntoView().setSelection(T.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: n, dispatch: e }) => Ag(n, e),
      addColumnAfter: () => ({ state: n, dispatch: e }) => Eg(n, e),
      deleteColumn: () => ({ state: n, dispatch: e }) => Ng(n, e),
      addRowBefore: () => ({ state: n, dispatch: e }) => Rg(n, e),
      addRowAfter: () => ({ state: n, dispatch: e }) => Dg(n, e),
      deleteRow: () => ({ state: n, dispatch: e }) => Pg(n, e),
      deleteTable: () => ({ state: n, dispatch: e }) => Vg(n, e),
      mergeCells: () => ({ state: n, dispatch: e }) => bl(n, e),
      splitCell: () => ({ state: n, dispatch: e }) => kl(n, e),
      toggleHeaderColumn: () => ({ state: n, dispatch: e }) => kn("column")(n, e),
      toggleHeaderRow: () => ({ state: n, dispatch: e }) => kn("row")(n, e),
      toggleHeaderCell: () => ({ state: n, dispatch: e }) => Fg(n, e),
      mergeOrSplit: () => ({ state: n, dispatch: e }) => bl(n, e) ? !0 : kl(n, e),
      setCellAttribute: (n, e) => ({ state: t, dispatch: r }) => zg(n, e)(t, r),
      goToNextCell: () => ({ state: n, dispatch: e }) => wl(1)(n, e),
      goToPreviousCell: () => ({ state: n, dispatch: e }) => wl(-1)(n, e),
      fixTables: () => ({ state: n, dispatch: e }) => (e && Jc(n), !0),
      setCellSelection: (n) => ({ tr: e, dispatch: t }) => {
        if (t) {
          const r = L.create(e.doc, n.anchorCell, n.headCell);
          e.setSelection(r);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: $n,
      "Mod-Backspace": $n,
      Delete: $n,
      "Mod-Delete": $n
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        Yg({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      oy({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(n) {
    const e = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      tableRole: N(C(n, "tableRole", e))
    };
  }
}), fy = V.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (n) => {
          const e = n.getAttribute("colwidth");
          return e ? e.split(",").map((r) => parseInt(r, 10)) : null;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "td" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["td", D(this.options.HTMLAttributes, n), 0];
  }
}), hy = V.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (n) => {
          const e = n.getAttribute("colwidth");
          return e ? e.split(",").map((r) => parseInt(r, 10)) : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "th" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["th", D(this.options.HTMLAttributes, n), 0];
  }
}), py = V.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [
      { tag: "tr" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["tr", D(this.options.HTMLAttributes, n), 0];
  }
}), Yy = W.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: null
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (n) => {
              const e = n.style.textAlign;
              return this.options.alignments.includes(e) ? e : this.options.defaultAlignment;
            },
            renderHTML: (n) => n.textAlign ? { style: `text-align: ${n.textAlign}` } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (n) => ({ commands: e }) => this.options.alignments.includes(n) ? this.options.types.map((t) => e.updateAttributes(t, { textAlign: n })).every((t) => t) : !1,
      unsetTextAlign: () => ({ commands: n }) => this.options.types.map((e) => n.resetAttributes(e, "textAlign")).every((e) => e),
      toggleTextAlign: (n) => ({ editor: e, commands: t }) => this.options.alignments.includes(n) ? e.isActive({ textAlign: n }) ? t.unsetTextAlign() : t.setTextAlign(n) : !1
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
}), my = (n) => {
  if (!n.children.length)
    return;
  const e = n.querySelectorAll("span");
  e && e.forEach((t) => {
    var r, s;
    const i = t.getAttribute("style"), o = (s = (r = t.parentElement) === null || r === void 0 ? void 0 : r.closest("span")) === null || s === void 0 ? void 0 : s.getAttribute("style");
    t.setAttribute("style", `${o};${i}`);
  });
}, Xy = he.create({
  name: "textStyle",
  priority: 101,
  addOptions() {
    return {
      HTMLAttributes: {},
      mergeNestedSpanStyles: !1
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (n) => n.hasAttribute("style") ? (this.options.mergeNestedSpanStyles && my(n), {}) : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", D(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ tr: n }) => {
        const { selection: e } = n;
        return n.doc.nodesBetween(e.from, e.to, (t, r) => {
          if (t.isTextblock)
            return !0;
          t.marks.filter((s) => s.type === this.type).some((s) => Object.values(s.attrs).some((i) => !!i)) || n.removeMark(r, r + t.nodeSize, this.type);
        }), !0;
      }
    };
  }
}), Qy = he.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["u", D(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: n }) => n.setMark(this.name),
      toggleUnderline: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetUnderline: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
}), Zy = W.create({
  name: "starterKit",
  addExtensions() {
    const n = [];
    return this.options.bold !== !1 && n.push(gm.configure(this.options.bold)), this.options.blockquote !== !1 && n.push(dm.configure(this.options.blockquote)), this.options.bulletList !== !1 && n.push(bm.configure(this.options.bulletList)), this.options.code !== !1 && n.push(wm.configure(this.options.code)), this.options.codeBlock !== !1 && n.push(Mm.configure(this.options.codeBlock)), this.options.document !== !1 && n.push(Fp.configure(this.options.document)), this.options.dropcursor !== !1 && n.push(Wp.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && n.push(Yp.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && n.push(Xp.configure(this.options.hardBreak)), this.options.heading !== !1 && n.push(Tm.configure(this.options.heading)), this.options.history !== !1 && n.push(lm.configure(this.options.history)), this.options.horizontalRule !== !1 && n.push(Am.configure(this.options.horizontalRule)), this.options.italic !== !1 && n.push(Im.configure(this.options.italic)), this.options.listItem !== !1 && n.push(ig.configure(this.options.listItem)), this.options.orderedList !== !1 && n.push(lg.configure(this.options.orderedList)), this.options.paragraph !== !1 && n.push(am.configure(this.options.paragraph)), this.options.strike !== !1 && n.push(ug.configure(this.options.strike)), this.options.text !== !1 && n.push(cm.configure(this.options.text)), n;
  }
}), e0 = V.create({
  name: "anchor",
  atom: !0,
  draggable: !0,
  inline: !0,
  group: "inline",
  marks: "",
  selectable: !0,
  addAttributes() {
    return {
      id: {}
    };
  },
  addNodeView() {
    return ({ HTMLAttributes: n }) => {
      const e = document.createElement("span");
      e.setAttribute("data-umb-anchor", ""), e.setAttribute("title", n.id);
      const t = document.createElement("uui-icon");
      return t.setAttribute("name", "icon-anchor"), e.appendChild(t), { dom: e };
    };
  },
  addOptions() {
    return {
      HTMLAttributes: { id: "" }
    };
  },
  parseHTML() {
    return [{ tag: "a[id]", getAttrs: (n) => n.innerHTML === "" ? {} : !1 }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["a", D(this.options.HTMLAttributes, n)];
  }
}), t0 = V.create({
  name: "div",
  priority: 50,
  group: "block",
  content: "inline*",
  addOptions() {
    return { HTMLAttributes: {} };
  },
  parseHTML() {
    return [{ tag: this.name }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return [this.name, D(this.options.HTMLAttributes, n), 0];
  }
}), n0 = V.create({
  name: "figcaption",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  selectable: !1,
  draggable: !1,
  parseHTML() {
    return [{ tag: this.name }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return [this.name, n, 0];
  }
}), r0 = V.create({
  name: "figure",
  group: "block",
  content: "block+",
  draggable: !0,
  selectable: !0,
  isolating: !0,
  atom: !0,
  addAttributes() {
    return {
      figcaption: {
        default: ""
      }
    };
  },
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: this.name,
        getAttrs: (n) => ({
          figcaption: n.querySelector("figcaption")?.textContent || ""
        })
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return [this.name, D(this.options.HTMLAttributes, n), 0];
  }
});
function Vn(n) {
  const e = {};
  return (n ?? "").split(";").map((t) => t.trim()).filter((t) => t).forEach((t) => {
    const [r, s] = t.split(":");
    r && s && (e[r.trim()] = s.trim());
  }), e;
}
function Rl(n) {
  return Object.entries(n).map(([e, t]) => `${e}: ${t}`).join(";") + ";";
}
const s0 = he.create({
  name: "span",
  priority: 50,
  addOptions() {
    return { HTMLAttributes: {} };
  },
  parseHTML() {
    return [{ tag: this.name }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return [this.name, D(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setSpanStyle: (n) => ({ commands: e, editor: t }) => {
        if (!n) return !1;
        const r = t.getAttributes(this.name)?.style;
        if (!r && !t.isActive(this.name))
          return e.setMark(this.name, { style: n });
        const s = {
          ...Vn(r),
          ...Vn(n)
        }, i = Rl(s);
        return i === ";" ? !1 : e.updateAttributes(this.name, { style: i });
      },
      toggleSpanStyle: (n) => ({ commands: e, editor: t }) => n ? t.getAttributes(this.name)?.style?.includes(n) === !0 ? e.unsetSpanStyle(n) : e.setSpanStyle(n) : !1,
      unsetSpanStyle: (n) => ({ commands: e, editor: t }) => {
        if (!n) return !1;
        Vn(n);
        const r = /* @__PURE__ */ new Set();
        if (n.split(";").map((l) => l.trim()).filter((l) => l).forEach((l) => {
          const [a] = l.split(":");
          a && r.add(a.trim());
        }), r.size === 0) return !1;
        const s = t.getAttributes(this.name)?.style, i = Vn(s);
        for (const l of r)
          delete i[l];
        const o = Rl(i);
        return o === ";" ? e.resetAttributes(this.name, "style") : e.updateAttributes(this.name, { style: o });
      }
    };
  }
});
function gy(n) {
  return n.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());
}
const i0 = W.create({
  name: "htmlGlobalAttributes",
  addOptions() {
    return { types: [] };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          class: {},
          dataset: {
            parseHTML: (n) => n.dataset,
            renderHTML: (n) => {
              const e = n.dataset ? Object.keys(n.dataset) : [];
              if (!e.length) return {};
              const t = {};
              return e.forEach((r) => {
                t["data-" + gy(r)] = n.dataset[r];
              }), t;
            }
          },
          id: {},
          style: {
            parseHTML: (n) => n.style.length ? n.style.cssText : null
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setClassName: (n, e) => ({ commands: t }) => n ? (e ? [e] : this.options.types).map((s) => t.updateAttributes(s, { class: n })).every((s) => s) : !1,
      toggleClassName: (n, e) => ({ commands: t, editor: r }) => n ? (e ? [e] : this.options.types).map((o) => r.getAttributes(o)?.class).filter((o) => o).length ? t.unsetClassName(e) : t.setClassName(n, e) : !1,
      unsetClassName: (n) => ({ commands: e }) => (n ? [n] : this.options.types).map((r) => e.resetAttributes(r, "class")).every((r) => r),
      setId: (n, e) => ({ commands: t }) => n ? (e ? [e] : this.options.types).map((s) => t.updateAttributes(s, { id: n })).every((s) => s) : !1,
      toggleId: (n, e) => ({ commands: t, editor: r }) => n ? (e ? [e] : this.options.types).map((o) => r.getAttributes(o)?.id).filter((o) => o).length ? t.unsetId(e) : t.setId(n, e) : !1,
      unsetId: (n) => ({ commands: e }) => (n ? [n] : this.options.types).map((r) => e.resetAttributes(r, "id")).every((r) => r),
      setStyles: (n, e) => ({ commands: t }) => n ? (e ? [e] : this.options.types).map((s) => t.updateAttributes(s, { style: n })).every((s) => s) : !1,
      toggleStyles: (n, e) => ({ commands: t, editor: r }) => n ? (e ? [e] : this.options.types).map((o) => r.getAttributes(o)?.style).filter((o) => o).length ? t.unsetStyles(e) : t.setStyles(n, e) : !1,
      unsetStyles: (n) => ({ commands: e }) => (n ? [n] : this.options.types).map((r) => e.resetAttributes(r, "style")).every((r) => r)
    };
  }
}), o0 = W.create({
  name: "textDirection",
  addOptions() {
    return {
      directions: ["ltr", "rtl", "auto"],
      types: ["heading", "paragraph"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textDirection: {
            parseHTML: (n) => n.dir,
            renderHTML: (n) => this.options.directions.includes(n.textDirection) ? { dir: n.textDirection } : null
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextDirection: (n) => ({ commands: e }) => this.options.directions.includes(n) ? this.options.types.every((t) => e.updateAttributes(t, { textDirection: n })) : !1,
      unsetTextDirection: () => ({ commands: n }) => this.options.types.every((e) => n.resetAttributes(e, "textDirection"))
    };
  }
}), l0 = W.create({
  name: "textIndent",
  addOptions() {
    return {
      minLevel: 0,
      maxLevel: 5,
      types: ["heading", "paragraph", "listItem", "taskItem"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: null,
            parseHTML: (n) => {
              const e = this.options.minLevel, t = this.options.maxLevel, r = n.style.textIndent;
              return r ? Math.max(e, Math.min(t, parseInt(r, 10))) : null;
            },
            renderHTML: (n) => n.indent ? {
              style: `text-indent: ${n.indent}rem;`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    const n = (r, s, i) => {
      const o = r.doc.nodeAt(s);
      if (!o) return r;
      const l = this.options.minLevel, a = this.options.maxLevel;
      let c = (o.attrs.indent || 0) + i;
      return c = Math.max(l, Math.min(a, parseInt(c, 10))), c === o.attrs.indent ? r : r.setNodeMarkup(s, o.type, { ...o.attrs, indent: c }, o.marks);
    }, e = (r, s) => {
      if (r.selection instanceof T || r.selection instanceof de) {
        const { from: i, to: o } = r.selection;
        r.doc.nodesBetween(i, o, (l, a) => this.options.types.includes(l.type.name) ? (r = n(r, a, s), !1) : !0);
      }
      return r;
    }, t = (r) => () => function({ tr: i, state: o, dispatch: l }) {
      const { selection: a } = o;
      return i.setSelection(a), i = e(i, r), i.docChanged ? (l instanceof Function && l(i), !0) : !1;
    };
    return {
      textIndent: t(1),
      textOutdent: t(-1)
    };
  }
});
function Dl({ types: n, node: e }) {
  return Array.isArray(n) && n.includes(e.type) || e.type === n;
}
const a0 = W.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: "paragraph",
      notAfter: ["paragraph"]
    };
  },
  addProseMirrorPlugins() {
    const n = new J(this.name), e = Object.entries(this.editor.schema.nodes).map(([, t]) => t).filter((t) => this.options.notAfter.includes(t.name));
    return [
      new $({
        key: n,
        appendTransaction: (t, r, s) => {
          const { doc: i, tr: o, schema: l } = s, a = n.getState(s), c = i.content.size, u = l.nodes[this.options.node];
          if (a)
            return o.insert(c, u.create());
        },
        state: {
          init: (t, r) => {
            const s = r.tr.doc.lastChild;
            return !Dl({ node: s, types: e });
          },
          apply: (t, r) => {
            if (!t.docChanged)
              return r;
            const s = t.doc.lastChild;
            return !Dl({ node: s, types: e });
          }
        }
      })
    ];
  }
}), c0 = W.create({
  name: "umbBubbleMenu",
  addOptions() {
    return {
      unique: "umb-tiptap-menu",
      placement: "top",
      elementName: null,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return !this.options.unique || !this.options.elementName ? [] : [
      qi(this.editor, {
        unique: this.options.unique,
        placement: this.options.placement,
        elementName: this.options.elementName,
        menuAlias: this.options.menuAlias,
        shouldShow: this.options.shouldShow
      })
    ];
  }
});
class yy {
  #t;
  #e;
  #n;
  constructor(e, t, r) {
    if (this.#t = e, this.#n = r.shouldShow ?? null, this.#e = document.createElement("uui-popover-container"), this.#e.id = r.unique, this.#e.setAttribute("placement", r.placement ?? "top"), this.#e.setAttribute("popover", "manual"), r.elementName) {
      const s = document.createElement(r.elementName);
      s.editor = e, s.menuAlias = r.menuAlias, this.#e.appendChild(s);
    }
    t.dom.parentNode?.appendChild(this.#e), this.update(t, null);
  }
  update(e, t) {
    const r = this.#t, { state: s } = e, { selection: i } = s, { ranges: o } = i, l = Math.min(...o.map((u) => u.$from.pos)), a = Math.max(...o.map((u) => u.$to.pos));
    this.#n?.({ editor: r, view: e, state: s, from: l, to: a }) ? this.#e.showPopover() : this.#e.hidePopover();
  }
  destroy() {
    this.#e.remove();
  }
}
const qi = (n, e) => new $({
  view(t) {
    return new yy(n, t, e);
  }
}), u0 = V.create({
  name: "umbEmbeddedMedia",
  group() {
    return this.options.inline ? "inline" : "block";
  },
  inline() {
    return this.options.inline;
  },
  atom: !0,
  marks: "",
  draggable: !0,
  selectable: !0,
  addAttributes() {
    return {
      "data-embed-constrain": { default: !1 },
      "data-embed-height": { default: 240 },
      "data-embed-url": { default: null },
      "data-embed-width": { default: 360 },
      markup: { default: null, parseHTML: (n) => n.innerHTML }
    };
  },
  parseHTML() {
    return [{ tag: ".umb-embed-holder", priority: 100 }];
  },
  renderHTML({ HTMLAttributes: n }) {
    const { markup: e, ...t } = n, r = document.createRange().createContextualFragment(e);
    return [this.options.inline ? "span" : "div", D({ class: "umb-embed-holder" }, t), r];
  },
  addCommands() {
    return {
      setEmbeddedMedia: (n) => ({ commands: e }) => {
        const t = {
          markup: n.markup,
          "data-embed-url": n.url,
          "data-embed-width": n.width,
          "data-embed-height": n.height,
          "data-embed-constrain": n.constrain
        };
        return e.insertContent({ type: this.name, attrs: t });
      }
    };
  }
}), d0 = Om.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null
      },
      height: {
        default: null
      },
      loading: {
        default: null
      },
      srcset: {
        default: null
      },
      sizes: {
        default: null
      },
      "data-tmpimg": { default: null },
      "data-udi": { default: null }
    };
  }
}), f0 = sg.extend({
  name: "umbLink",
  addAttributes() {
    return {
      ...this.parent?.(),
      "data-anchor": { default: null },
      title: { default: null },
      type: { default: "external" }
    };
  },
  // TODO: [LK] Look to use a NodeView to render the link
  // https://tiptap.dev/docs/editor/extensions/custom-extensions/node-views/javascript
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {
        target: "",
        "data-router-slot": "disabled"
      }
    };
  },
  addCommands() {
    return {
      setUmbLink: (n) => ({ chain: e }) => e().setMark(this.name, n).setMeta("preventAutolink", !0).run(),
      unsetUmbLink: () => ({ chain: n }) => n().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  }
});
class by extends Xc {
  constructor(e, t) {
    super(e, t), this.#t(e);
  }
  update(e) {
    return super.update(e) ? (this.#t(e), !0) : !1;
  }
  #t(e) {
    if (e.attrs.style) {
      const t = this.table.style.minWidth, r = e.attrs.style;
      this.table.style.cssText = `${r}; min-width: ${t};`;
    }
  }
}
const h0 = Ui.configure({ resizable: !0, View: by }), p0 = py.extend({
  allowGapCursor: !1,
  content: "(tableCell | tableHeader)*"
}), m0 = hy.extend({
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (n) => {
          const e = n.getAttribute("colwidth");
          return e ? e.split(",").map((r) => parseInt(r, 10)) : null;
        }
      },
      style: {
        default: null
      }
    };
  },
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      qi(this.editor, {
        unique: "table-column-menu",
        placement: "top",
        elementName: "umb-tiptap-menu",
        menuAlias: "Umb.Menu.Tiptap.TableColumn",
        shouldShow(e) {
          return Ty(e);
        }
      }),
      new $({
        props: {
          decorations: (e) => {
            const { isEditable: t } = this.editor;
            if (!t)
              return B.empty;
            const { doc: r, selection: s } = e, i = [], o = Cy(0)(s);
            return o && o.forEach(({ pos: l }, a) => {
              i.push(
                Y.widget(l + 1, () => {
                  const c = ky(a)(s), u = document.createElement("a");
                  return u.appendChild(document.createElement("uui-symbol-more")), u.className = c ? "grip-column selected" : "grip-column", u.setAttribute("popovertarget", c ? "table-column-menu" : ""), u.addEventListener("mousedown", (d) => {
                    d.preventDefault(), d.stopImmediatePropagation(), this.editor.view.dispatch(xy(a)(this.editor.state.tr));
                  }), u;
                })
              );
            }), B.create(r, i);
          }
        }
      })
    ];
  }
}), g0 = fy.extend({
  addAttributes() {
    return {
      colspan: {
        default: 1,
        parseHTML: (n) => {
          const e = n.getAttribute("colspan");
          return e ? parseInt(e, 10) : 1;
        }
      },
      rowspan: {
        default: 1,
        parseHTML: (n) => {
          const e = n.getAttribute("rowspan");
          return e ? parseInt(e, 10) : 1;
        }
      },
      colwidth: {
        default: null,
        parseHTML: (n) => {
          const e = n.getAttribute("colwidth");
          return e ? [parseInt(e, 10)] : null;
        }
      },
      style: {
        default: null
      }
    };
  },
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      qi(this.editor, {
        unique: "table-row-menu",
        placement: "left",
        elementName: "umb-tiptap-menu",
        menuAlias: "Umb.Menu.Tiptap.TableRow",
        shouldShow(e) {
          return Ay(e);
        }
      }),
      new $({
        props: {
          decorations: (e) => {
            const { isEditable: t } = this.editor;
            if (!t)
              return B.empty;
            const { doc: r, selection: s } = e, i = [], o = wy(0)(s);
            return o && o.forEach(({ pos: l }, a) => {
              i.push(
                Y.widget(l + 1, () => {
                  const c = Sy(a)(s), u = document.createElement("a");
                  return u.appendChild(document.createElement("uui-symbol-more")), u.className = c ? "grip-row selected" : "grip-row", u.setAttribute("popovertarget", c ? "table-row-menu" : ""), u.addEventListener("mousedown", (d) => {
                    d.preventDefault(), d.stopImmediatePropagation(), this.editor.view.dispatch(My(a)(this.editor.state.tr));
                  }), u;
                })
              );
            }), B.create(r, i);
          }
        }
      })
    ];
  }
}), Ji = (n) => (e) => {
  const t = P.get(e.$anchorCell.node(-1)), r = e.$anchorCell.start(-1), s = t.cellsInRect(n), i = t.cellsInRect(
    t.rectBetween(e.$anchorCell.pos - r, e.$headCell.pos - r)
  );
  for (let o = 0, l = s.length; o < l; o += 1)
    if (i.indexOf(s[o]) === -1)
      return !1;
  return !0;
}, _i = (n) => Mn((e) => e.type.spec.tableRole && e.type.spec.tableRole === "table")(n), Gi = (n) => n instanceof L, ky = (n) => (e) => {
  if (Gi(e)) {
    const t = P.get(e.$anchorCell.node(-1));
    return Ji({
      left: n,
      right: n + 1,
      top: 0,
      bottom: t.height
    })(e);
  }
  return !1;
}, Sy = (n) => (e) => {
  if (Gi(e)) {
    const t = P.get(e.$anchorCell.node(-1));
    return Ji({
      left: 0,
      right: t.width,
      top: n,
      bottom: n + 1
    })(e);
  }
  return !1;
}, Zc = (n) => {
  if (Gi(n)) {
    const e = P.get(n.$anchorCell.node(-1));
    return Ji({
      left: 0,
      right: e.width,
      top: 0,
      bottom: e.height
    })(n);
  }
  return !1;
}, wy = (n) => (e) => {
  const t = _i(e);
  if (t) {
    const r = P.get(t.node);
    return (Array.isArray(n) ? n : Array.from([n])).reduce(
      (i, o) => {
        if (o >= 0 && o <= r.width - 1) {
          const l = r.cellsInRect({
            left: o,
            right: o + 1,
            top: 0,
            bottom: r.height
          });
          return i.concat(
            l.map((a) => {
              const c = t.node.nodeAt(a), u = a + t.start;
              return { pos: u, start: u + 1, node: c };
            })
          );
        }
        return i;
      },
      []
    );
  }
  return null;
}, Cy = (n) => (e) => {
  const t = _i(e);
  if (t) {
    const r = P.get(t.node);
    return (Array.isArray(n) ? n : Array.from([n])).reduce(
      (i, o) => {
        if (o >= 0 && o <= r.height - 1) {
          const l = r.cellsInRect({
            left: 0,
            right: r.width,
            top: o,
            bottom: o + 1
          });
          return i.concat(
            l.map((a) => {
              const c = t.node.nodeAt(a), u = a + t.start;
              return { pos: u, start: u + 1, node: c };
            })
          );
        }
        return i;
      },
      []
    );
  }
  return null;
}, eu = (n) => (e) => (t) => {
  const r = _i(t.selection), s = n === "row";
  if (r) {
    const i = P.get(r.node);
    if (e >= 0 && e < (s ? i.height : i.width)) {
      const o = s ? 0 : e, l = s ? e : 0, a = s ? i.width : e + 1, c = s ? e + 1 : i.height, u = i.cellsInRect({
        left: o,
        top: l,
        right: s ? a : o + 1,
        bottom: s ? l + 1 : c
      }), d = c - l === 1 ? u : i.cellsInRect({
        left: s ? o : a - 1,
        top: s ? c - 1 : l,
        right: a,
        bottom: c
      }), f = r.start + u[0], h = r.start + d[d.length - 1], p = t.doc.resolve(f), m = t.doc.resolve(h);
      return t.setSelection(new L(m, p));
    }
  }
  return t;
}, xy = eu("column"), My = eu("row"), Ty = ({
  editor: n,
  view: e,
  state: t,
  from: r
}) => {
  const s = e.domAtPos(r).node, o = e.nodeDOM(r) || s;
  if (!n.isActive(Ui.name) || !o || Zc(t.selection))
    return !1;
  let l = o;
  for (; l && !["TD", "TH"].includes(l.tagName); )
    l = l.parentElement;
  return !!(l && l.querySelector && l.querySelector("a.grip-column.selected"));
}, Ay = ({
  editor: n,
  view: e,
  state: t,
  from: r
}) => {
  const s = e.domAtPos(r).node, o = e.nodeDOM(r) || s;
  if (!n.isActive(Ui.name) || !o || Zc(t.selection))
    return !1;
  let l = o;
  for (; l && !["TD", "TH"].includes(l.tagName); )
    l = l.parentElement;
  return !!(l && l.querySelector && l.querySelector("a.grip-row.selected"));
};
export {
  e0 as Anchor,
  dm as Blockquote,
  gm as Bold,
  bm as BulletList,
  qy as CharacterCount,
  wm as Code,
  Mm as CodeBlock,
  jr as CommandManager,
  t0 as Div,
  Fp as Document,
  Wp as Dropcursor,
  zy as Editor,
  W as Extension,
  n0 as Figcaption,
  r0 as Figure,
  Yp as Gapcursor,
  Xp as HardBreak,
  Tm as Heading,
  lm as History,
  Am as HorizontalRule,
  i0 as HtmlGlobalAttributes,
  Om as Image,
  xn as InputRule,
  Im as Italic,
  sg as Link,
  ig as ListItem,
  he as Mark,
  V as Node,
  ct as NodePos,
  Fy as NodeView,
  lg as OrderedList,
  am as Paragraph,
  Ni as PasteRule,
  Uy as Placeholder,
  s0 as Span,
  Zy as StarterKit,
  ug as Strike,
  Jy as Subscript,
  _y as Superscript,
  Ui as Table,
  fy as TableCell,
  hy as TableHeader,
  py as TableRow,
  cm as Text,
  Yy as TextAlign,
  o0 as TextDirection,
  l0 as TextIndent,
  Xy as TextStyle,
  Ky as Tracker,
  a0 as TrailingNode,
  c0 as UmbBubbleMenu,
  qi as UmbBubbleMenuPlugin,
  d0 as UmbImage,
  f0 as UmbLink,
  h0 as UmbTable,
  g0 as UmbTableCell,
  m0 as UmbTableHeader,
  p0 as UmbTableRow,
  by as UmbTableView,
  Qy as Underline,
  N as callOrReturn,
  Hp as canInsertNode,
  op as combineTransactionSteps,
  Wr as createChainableState,
  Us as createDocument,
  pn as createNodeFromContent,
  zp as createStyleTag,
  lp as defaultBlockAt,
  tl as deleteProps,
  _t as elementFromString,
  $y as escapeForRegEx,
  By as extensions,
  Ey as findChildren,
  ap as findChildrenInRange,
  gh as findDuplicates,
  Mn as findParentNode,
  yc as findParentNodeClosestToPos,
  oh as fromString,
  Oy as generateHTML,
  Ny as generateJSON,
  vy as generateText,
  kc as getAttributes,
  ic as getAttributesFromExtensions,
  fp as getChangedRanges,
  hp as getDebugJSON,
  C as getExtensionField,
  Ur as getHTMLFromFragment,
  gc as getMarkAttributes,
  Ri as getMarkRange,
  ot as getMarkType,
  Ii as getMarksBetween,
  Ry as getNodeAtPosition,
  cp as getNodeAttributes,
  Z as getNodeType,
  Ks as getRenderedAttributes,
  Di as getSchema,
  lc as getSchemaByResolvedExtensions,
  gs as getSchemaTypeByName,
  _r as getSchemaTypeNameByName,
  Kn as getSplittedAttributes,
  bc as getText,
  ac as getTextBetween,
  lh as getTextContentFromNodes,
  vi as getTextSerializersFromSchema,
  Xo as injectExtensionAttributesToParseRule,
  ch as inputRulesPlugin,
  pp as isActive,
  Dy as isAtEndOfNode,
  Iy as isAtStartOfNode,
  ih as isEmptyObject,
  Zo as isExtensionRulesEnabled,
  oc as isFunction,
  nl as isList,
  mc as isMacOS,
  qs as isMarkActive,
  mn as isNodeActive,
  Gr as isNodeEmpty,
  mp as isNodeSelection,
  dh as isNumber,
  Rn as isPlainObject,
  Oi as isRegExp,
  Vy as isString,
  dc as isTextSelection,
  Jr as isiOS,
  Ft as markInputRule,
  xt as markPasteRule,
  D as mergeAttributes,
  qr as mergeDeep,
  Fe as minMax,
  Nc as nodeInputRule,
  Wy as nodePasteRule,
  or as objectIncludes,
  mh as pasteRulesPlugin,
  Py as posToDOMRect,
  up as removeDuplicates,
  fc as resolveFocusPosition,
  Ly as rewriteUnknownContent,
  Ph as selectionToInsertionEnd,
  Kr as splitExtensions,
  Hy as textInputRule,
  jy as textPasteRule,
  Js as textblockTypeInputRule,
  u0 as umbEmbeddedMedia,
  gn as wrappingInputRule
};
//# sourceMappingURL=index.js.map
