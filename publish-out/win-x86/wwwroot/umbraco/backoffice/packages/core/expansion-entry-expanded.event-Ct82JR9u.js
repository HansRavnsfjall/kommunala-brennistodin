function h() {
}
h.prototype = {
  diff: function(e, r) {
    var u, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = o.callback;
    typeof o == "function" && (t = o, o = {});
    var i = this;
    function f(c) {
      return c = i.postProcess(c, o), t ? (setTimeout(function() {
        t(c);
      }, 0), !0) : c;
    }
    e = this.castInput(e, o), r = this.castInput(r, o), e = this.removeEmpty(this.tokenize(e, o)), r = this.removeEmpty(this.tokenize(r, o));
    var l = r.length, a = e.length, s = 1, v = l + a;
    o.maxEditLength != null && (v = Math.min(v, o.maxEditLength));
    var d = (u = o.timeout) !== null && u !== void 0 ? u : 1 / 0, g = Date.now() + d, m = [{
      oldPos: -1,
      lastComponent: void 0
    }], p = this.extractCommon(m[0], r, e, 0, o);
    if (m[0].oldPos + 1 >= a && p + 1 >= l)
      return f(F(i, m[0].lastComponent, r, e, i.useLongestToken));
    var C = -1 / 0, T = 1 / 0;
    function D() {
      for (var c = Math.max(C, -s); c <= Math.min(T, s); c += 2) {
        var y = void 0, E = m[c - 1], x = m[c + 1];
        E && (m[c - 1] = void 0);
        var q = !1;
        if (x) {
          var M = x.oldPos - c;
          q = x && 0 <= M && M < l;
        }
        var k = E && E.oldPos + 1 < a;
        if (!q && !k) {
          m[c] = void 0;
          continue;
        }
        if (!k || q && E.oldPos < x.oldPos ? y = i.addToPath(x, !0, !1, 0, o) : y = i.addToPath(E, !1, !0, 1, o), p = i.extractCommon(y, r, e, c, o), y.oldPos + 1 >= a && p + 1 >= l)
          return f(F(i, y.lastComponent, r, e, i.useLongestToken));
        m[c] = y, y.oldPos + 1 >= a && (T = Math.min(T, c - 1)), p + 1 >= l && (C = Math.max(C, c + 1));
      }
      s++;
    }
    if (t)
      (function c() {
        setTimeout(function() {
          if (s > v || Date.now() > g)
            return t();
          D() || c();
        }, 0);
      })();
    else
      for (; s <= v && Date.now() <= g; ) {
        var O = D();
        if (O)
          return O;
      }
  },
  addToPath: function(e, r, u, o, t) {
    var i = e.lastComponent;
    return i && !t.oneChangePerToken && i.added === r && i.removed === u ? {
      oldPos: e.oldPos + o,
      lastComponent: {
        count: i.count + 1,
        added: r,
        removed: u,
        previousComponent: i.previousComponent
      }
    } : {
      oldPos: e.oldPos + o,
      lastComponent: {
        count: 1,
        added: r,
        removed: u,
        previousComponent: i
      }
    };
  },
  extractCommon: function(e, r, u, o, t) {
    for (var i = r.length, f = u.length, l = e.oldPos, a = l - o, s = 0; a + 1 < i && l + 1 < f && this.equals(u[l + 1], r[a + 1], t); )
      a++, l++, s++, t.oneChangePerToken && (e.lastComponent = {
        count: 1,
        previousComponent: e.lastComponent,
        added: !1,
        removed: !1
      });
    return s && !t.oneChangePerToken && (e.lastComponent = {
      count: s,
      previousComponent: e.lastComponent,
      added: !1,
      removed: !1
    }), e.oldPos = l, a;
  },
  equals: function(e, r, u) {
    return u.comparator ? u.comparator(e, r) : e === r || u.ignoreCase && e.toLowerCase() === r.toLowerCase();
  },
  removeEmpty: function(e) {
    for (var r = [], u = 0; u < e.length; u++)
      e[u] && r.push(e[u]);
    return r;
  },
  castInput: function(e) {
    return e;
  },
  tokenize: function(e) {
    return Array.from(e);
  },
  join: function(e) {
    return e.join("");
  },
  postProcess: function(e) {
    return e;
  }
};
function F(n, e, r, u, o) {
  for (var t = [], i; e; )
    t.push(e), i = e.previousComponent, delete e.previousComponent, e = i;
  t.reverse();
  for (var f = 0, l = t.length, a = 0, s = 0; f < l; f++) {
    var v = t[f];
    if (v.removed)
      v.value = n.join(u.slice(s, s + v.count)), s += v.count;
    else {
      if (!v.added && o) {
        var d = r.slice(a, a + v.count);
        d = d.map(function(g, m) {
          var p = u[s + m];
          return p.length > g.length ? p : g;
        }), v.value = n.join(d);
      } else
        v.value = n.join(r.slice(a, a + v.count));
      a += v.count, v.added || (s += v.count);
    }
  }
  return t;
}
function V(n, e) {
  var r;
  for (r = 0; r < n.length && r < e.length; r++)
    if (n[r] != e[r])
      return n.slice(0, r);
  return n.slice(0, r);
}
function B(n, e) {
  var r;
  if (!n || !e || n[n.length - 1] != e[e.length - 1])
    return "";
  for (r = 0; r < n.length && r < e.length; r++)
    if (n[n.length - (r + 1)] != e[e.length - (r + 1)])
      return n.slice(-r);
  return n.slice(-r);
}
function A(n, e, r) {
  if (n.slice(0, e.length) != e)
    throw Error("string ".concat(JSON.stringify(n), " doesn't start with prefix ").concat(JSON.stringify(e), "; this is a bug"));
  return r + n.slice(e.length);
}
function N(n, e, r) {
  if (!e)
    return n + r;
  if (n.slice(-e.length) != e)
    throw Error("string ".concat(JSON.stringify(n), " doesn't end with suffix ").concat(JSON.stringify(e), "; this is a bug"));
  return n.slice(0, -e.length) + r;
}
function w(n, e) {
  return A(n, e, "");
}
function I(n, e) {
  return N(n, e, "");
}
function U(n, e) {
  return e.slice(0, W(n, e));
}
function W(n, e) {
  var r = 0;
  n.length > e.length && (r = n.length - e.length);
  var u = e.length;
  n.length < e.length && (u = n.length);
  var o = Array(u), t = 0;
  o[0] = 0;
  for (var i = 1; i < u; i++) {
    for (e[i] == e[t] ? o[i] = o[t] : o[i] = t; t > 0 && e[i] != e[t]; )
      t = o[t];
    e[i] == e[t] && t++;
  }
  t = 0;
  for (var f = r; f < n.length; f++) {
    for (; t > 0 && n[f] != e[t]; )
      t = o[t];
    n[f] == e[t] && t++;
  }
  return t;
}
var $ = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", b = new RegExp("[".concat($, "]+|\\s+|[^").concat($, "]"), "ug"), z = new h();
z.equals = function(n, e, r) {
  return r.ignoreCase && (n = n.toLowerCase(), e = e.toLowerCase()), n.trim() === e.trim();
};
z.tokenize = function(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r;
  if (e.intlSegmenter) {
    if (e.intlSegmenter.resolvedOptions().granularity != "word")
      throw new Error('The segmenter passed must have a granularity of "word"');
    r = Array.from(e.intlSegmenter.segment(n), function(t) {
      return t.segment;
    });
  } else
    r = n.match(b) || [];
  var u = [], o = null;
  return r.forEach(function(t) {
    /\s/.test(t) ? o == null ? u.push(t) : u.push(u.pop() + t) : /\s/.test(o) ? u[u.length - 1] == o ? u.push(u.pop() + t) : u.push(o + t) : u.push(t), o = t;
  }), u;
};
z.join = function(n) {
  return n.map(function(e, r) {
    return r == 0 ? e : e.replace(/^\s+/, "");
  }).join("");
};
z.postProcess = function(n, e) {
  if (!n || e.oneChangePerToken)
    return n;
  var r = null, u = null, o = null;
  return n.forEach(function(t) {
    t.added ? u = t : t.removed ? o = t : ((u || o) && Z(r, o, u, t), r = t, u = null, o = null);
  }), (u || o) && Z(r, o, u, null), n;
};
function K(n, e, r) {
  return r?.ignoreWhitespace != null && !r.ignoreWhitespace ? _(n, e, r) : z.diff(n, e, r);
}
function Z(n, e, r, u) {
  if (e && r) {
    var o = e.value.match(/^\s*/)[0], t = e.value.match(/\s*$/)[0], i = r.value.match(/^\s*/)[0], f = r.value.match(/\s*$/)[0];
    if (n) {
      var l = V(o, i);
      n.value = N(n.value, i, l), e.value = w(e.value, l), r.value = w(r.value, l);
    }
    if (u) {
      var a = B(t, f);
      u.value = A(u.value, f, a), e.value = I(e.value, a), r.value = I(r.value, a);
    }
  } else if (r)
    n && (r.value = r.value.replace(/^\s*/, "")), u && (u.value = u.value.replace(/^\s*/, ""));
  else if (n && u) {
    var s = u.value.match(/^\s*/)[0], v = e.value.match(/^\s*/)[0], d = e.value.match(/\s*$/)[0], g = V(s, v);
    e.value = w(e.value, g);
    var m = B(w(s, g), d);
    e.value = I(e.value, m), u.value = A(u.value, s, m), n.value = N(n.value, s, s.slice(0, s.length - m.length));
  } else if (u) {
    var p = u.value.match(/^\s*/)[0], C = e.value.match(/\s*$/)[0], T = U(C, p);
    e.value = I(e.value, T);
  } else if (n) {
    var D = n.value.match(/\s*$/)[0], O = e.value.match(/^\s*/)[0], c = U(D, O);
    e.value = w(e.value, c);
  }
}
var G = new h();
G.tokenize = function(n) {
  var e = new RegExp("(\\r?\\n)|[".concat($, "]+|[^\\S\\n\\r]+|[^").concat($, "]"), "ug");
  return n.match(e) || [];
};
function _(n, e, r) {
  return G.diff(n, e, r);
}
var Y = new h();
Y.tokenize = function(n, e) {
  e.stripTrailingCr && (n = n.replace(/\r\n/g, `
`));
  var r = [], u = n.split(/(\n|\r\n)/);
  u[u.length - 1] || u.pop();
  for (var o = 0; o < u.length; o++) {
    var t = u[o];
    o % 2 && !e.newlineIsToken ? r[r.length - 1] += t : r.push(t);
  }
  return r;
};
Y.equals = function(n, e, r) {
  return r.ignoreWhitespace ? ((!r.newlineIsToken || !n.includes(`
`)) && (n = n.trim()), (!r.newlineIsToken || !e.includes(`
`)) && (e = e.trim())) : r.ignoreNewlineAtEof && !r.newlineIsToken && (n.endsWith(`
`) && (n = n.slice(0, -1)), e.endsWith(`
`) && (e = e.slice(0, -1))), h.prototype.equals.call(this, n, e, r);
};
var j = new h();
j.tokenize = function(n) {
  return n.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var S = new h();
S.tokenize = function(n) {
  return n.split(/([{}:;,]|\s+)/);
};
function J(n) {
  "@babel/helpers - typeof";
  return J = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, J(n);
}
var L = new h();
L.useLongestToken = !0;
L.tokenize = Y.tokenize;
L.castInput = function(n, e) {
  var r = e.undefinedReplacement, u = e.stringifyReplacer, o = u === void 0 ? function(t, i) {
    return typeof i > "u" ? r : i;
  } : u;
  return typeof n == "string" ? n : JSON.stringify(P(n, null, null, o), o, "  ");
};
L.equals = function(n, e, r) {
  return h.prototype.equals.call(L, n.replace(/,([\r\n])/g, "$1"), e.replace(/,([\r\n])/g, "$1"), r);
};
function P(n, e, r, u, o) {
  e = e || [], r = r || [], u && (n = u(o, n));
  var t;
  for (t = 0; t < e.length; t += 1)
    if (e[t] === n)
      return r[t];
  var i;
  if (Object.prototype.toString.call(n) === "[object Array]") {
    for (e.push(n), i = new Array(n.length), r.push(i), t = 0; t < n.length; t += 1)
      i[t] = P(n[t], e, r, u, o);
    return e.pop(), r.pop(), i;
  }
  if (n && n.toJSON && (n = n.toJSON()), J(n) === "object" && n !== null) {
    e.push(n), i = {}, r.push(i);
    var f = [], l;
    for (l in n)
      Object.prototype.hasOwnProperty.call(n, l) && f.push(l);
    for (f.sort(), t = 0; t < f.length; t += 1)
      l = f[t], i[l] = P(n[l], e, r, u, l);
    e.pop(), r.pop();
  } else
    i = n;
  return i;
}
var R = new h();
R.tokenize = function(n) {
  return n.slice();
};
R.join = R.removeEmpty = function(n) {
  return n;
};
class H extends Event {
  static {
    this.TYPE = "expansion-change";
  }
  constructor() {
    super(H.TYPE, { bubbles: !0, composed: !1, cancelable: !1 });
  }
}
class Q extends Event {
  static {
    this.TYPE = "expansion-entry-collapsed";
  }
  constructor(e) {
    super(Q.TYPE, { bubbles: !0, composed: !1, cancelable: !1 }), this.entry = e;
  }
}
class X extends Event {
  static {
    this.TYPE = "expansion-entry-expanded";
  }
  constructor(e) {
    super(X.TYPE, { bubbles: !0, composed: !1, cancelable: !1 }), this.entry = e;
  }
}
export {
  H as U,
  X as a,
  Q as b,
  K as d
};
//# sourceMappingURL=expansion-entry-expanded.event-Ct82JR9u.js.map
