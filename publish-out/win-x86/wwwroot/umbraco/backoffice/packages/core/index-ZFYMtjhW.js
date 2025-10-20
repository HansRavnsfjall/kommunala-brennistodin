function h() {
}
h.prototype = {
  diff: function(e, r) {
    var t, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = o.callback;
    typeof o == "function" && (u = o, o = {});
    var i = this;
    function a(v) {
      return v = i.postProcess(v, o), u ? (setTimeout(function() {
        u(v);
      }, 0), !0) : v;
    }
    e = this.castInput(e, o), r = this.castInput(r, o), e = this.removeEmpty(this.tokenize(e, o)), r = this.removeEmpty(this.tokenize(r, o));
    var f = r.length, s = e.length, l = 1, c = f + s;
    o.maxEditLength != null && (c = Math.min(c, o.maxEditLength));
    var C = (t = o.timeout) !== null && t !== void 0 ? t : 1 / 0, g = Date.now() + C, m = [{
      oldPos: -1,
      lastComponent: void 0
    }], p = this.extractCommon(m[0], r, e, 0, o);
    if (m[0].oldPos + 1 >= s && p + 1 >= f)
      return a(B(i, m[0].lastComponent, r, e, i.useLongestToken));
    var d = -1 / 0, T = 1 / 0;
    function x() {
      for (var v = Math.max(d, -l); v <= Math.min(T, l); v += 2) {
        var y = void 0, w = m[v - 1], E = m[v + 1];
        w && (m[v - 1] = void 0);
        var q = !1;
        if (E) {
          var F = E.oldPos - v;
          q = E && 0 <= F && F < f;
        }
        var V = w && w.oldPos + 1 < s;
        if (!q && !V) {
          m[v] = void 0;
          continue;
        }
        if (!V || q && w.oldPos < E.oldPos ? y = i.addToPath(E, !0, !1, 0, o) : y = i.addToPath(w, !1, !0, 1, o), p = i.extractCommon(y, r, e, v, o), y.oldPos + 1 >= s && p + 1 >= f)
          return a(B(i, y.lastComponent, r, e, i.useLongestToken));
        m[v] = y, y.oldPos + 1 >= s && (T = Math.min(T, v - 1)), p + 1 >= f && (d = Math.max(d, v + 1));
      }
      l++;
    }
    if (u)
      (function v() {
        setTimeout(function() {
          if (l > c || Date.now() > g)
            return u();
          x() || v();
        }, 0);
      })();
    else
      for (; l <= c && Date.now() <= g; ) {
        var O = x();
        if (O)
          return O;
      }
  },
  addToPath: function(e, r, t, o, u) {
    var i = e.lastComponent;
    return i && !u.oneChangePerToken && i.added === r && i.removed === t ? {
      oldPos: e.oldPos + o,
      lastComponent: {
        count: i.count + 1,
        added: r,
        removed: t,
        previousComponent: i.previousComponent
      }
    } : {
      oldPos: e.oldPos + o,
      lastComponent: {
        count: 1,
        added: r,
        removed: t,
        previousComponent: i
      }
    };
  },
  extractCommon: function(e, r, t, o, u) {
    for (var i = r.length, a = t.length, f = e.oldPos, s = f - o, l = 0; s + 1 < i && f + 1 < a && this.equals(t[f + 1], r[s + 1], u); )
      s++, f++, l++, u.oneChangePerToken && (e.lastComponent = {
        count: 1,
        previousComponent: e.lastComponent,
        added: !1,
        removed: !1
      });
    return l && !u.oneChangePerToken && (e.lastComponent = {
      count: l,
      previousComponent: e.lastComponent,
      added: !1,
      removed: !1
    }), e.oldPos = f, s;
  },
  equals: function(e, r, t) {
    return t.comparator ? t.comparator(e, r) : e === r || t.ignoreCase && e.toLowerCase() === r.toLowerCase();
  },
  removeEmpty: function(e) {
    for (var r = [], t = 0; t < e.length; t++)
      e[t] && r.push(e[t]);
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
function B(n, e, r, t, o) {
  for (var u = [], i; e; )
    u.push(e), i = e.previousComponent, delete e.previousComponent, e = i;
  u.reverse();
  for (var a = 0, f = u.length, s = 0, l = 0; a < f; a++) {
    var c = u[a];
    if (c.removed)
      c.value = n.join(t.slice(l, l + c.count)), l += c.count;
    else {
      if (!c.added && o) {
        var C = r.slice(s, s + c.count);
        C = C.map(function(g, m) {
          var p = t[l + m];
          return p.length > g.length ? p : g;
        }), c.value = n.join(C);
      } else
        c.value = n.join(r.slice(s, s + c.count));
      s += c.count, c.added || (l += c.count);
    }
  }
  return u;
}
function Z(n, e) {
  var r;
  for (r = 0; r < n.length && r < e.length; r++)
    if (n[r] != e[r])
      return n.slice(0, r);
  return n.slice(0, r);
}
function G(n, e) {
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
function L(n, e) {
  return A(n, e, "");
}
function I(n, e) {
  return N(n, e, "");
}
function H(n, e) {
  return e.slice(0, U(n, e));
}
function U(n, e) {
  var r = 0;
  n.length > e.length && (r = n.length - e.length);
  var t = e.length;
  n.length < e.length && (t = n.length);
  var o = Array(t), u = 0;
  o[0] = 0;
  for (var i = 1; i < t; i++) {
    for (e[i] == e[u] ? o[i] = o[u] : o[i] = u; u > 0 && e[i] != e[u]; )
      u = o[u];
    e[i] == e[u] && u++;
  }
  u = 0;
  for (var a = r; a < n.length; a++) {
    for (; u > 0 && n[a] != e[u]; )
      u = o[u];
    n[a] == e[u] && u++;
  }
  return u;
}
var $ = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", X = new RegExp("[".concat($, "]+|\\s+|[^").concat($, "]"), "ug"), D = new h();
D.equals = function(n, e, r) {
  return r.ignoreCase && (n = n.toLowerCase(), e = e.toLowerCase()), n.trim() === e.trim();
};
D.tokenize = function(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r;
  if (e.intlSegmenter) {
    if (e.intlSegmenter.resolvedOptions().granularity != "word")
      throw new Error('The segmenter passed must have a granularity of "word"');
    r = Array.from(e.intlSegmenter.segment(n), function(u) {
      return u.segment;
    });
  } else
    r = n.match(X) || [];
  var t = [], o = null;
  return r.forEach(function(u) {
    /\s/.test(u) ? o == null ? t.push(u) : t.push(t.pop() + u) : /\s/.test(o) ? t[t.length - 1] == o ? t.push(t.pop() + u) : t.push(o + u) : t.push(u), o = u;
  }), t;
};
D.join = function(n) {
  return n.map(function(e, r) {
    return r == 0 ? e : e.replace(/^\s+/, "");
  }).join("");
};
D.postProcess = function(n, e) {
  if (!n || e.oneChangePerToken)
    return n;
  var r = null, t = null, o = null;
  return n.forEach(function(u) {
    u.added ? t = u : u.removed ? o = u : ((t || o) && P(r, o, t, u), r = u, t = null, o = null);
  }), (t || o) && P(r, o, t, null), n;
};
function j(n, e, r) {
  return r?.ignoreWhitespace != null && !r.ignoreWhitespace ? Y(n, e, r) : D.diff(n, e, r);
}
function P(n, e, r, t) {
  if (e && r) {
    var o = e.value.match(/^\s*/)[0], u = e.value.match(/\s*$/)[0], i = r.value.match(/^\s*/)[0], a = r.value.match(/\s*$/)[0];
    if (n) {
      var f = Z(o, i);
      n.value = N(n.value, i, f), e.value = L(e.value, f), r.value = L(r.value, f);
    }
    if (t) {
      var s = G(u, a);
      t.value = A(t.value, a, s), e.value = I(e.value, s), r.value = I(r.value, s);
    }
  } else if (r)
    n && (r.value = r.value.replace(/^\s*/, "")), t && (t.value = t.value.replace(/^\s*/, ""));
  else if (n && t) {
    var l = t.value.match(/^\s*/)[0], c = e.value.match(/^\s*/)[0], C = e.value.match(/\s*$/)[0], g = Z(l, c);
    e.value = L(e.value, g);
    var m = G(L(l, g), C);
    e.value = I(e.value, m), t.value = A(t.value, l, m), n.value = N(n.value, l, l.slice(0, l.length - m.length));
  } else if (t) {
    var p = t.value.match(/^\s*/)[0], d = e.value.match(/\s*$/)[0], T = H(d, p);
    e.value = I(e.value, T);
  } else if (n) {
    var x = n.value.match(/\s*$/)[0], O = e.value.match(/^\s*/)[0], v = H(x, O);
    e.value = L(e.value, v);
  }
}
var Q = new h();
Q.tokenize = function(n) {
  var e = new RegExp("(\\r?\\n)|[".concat($, "]+|[^\\S\\n\\r]+|[^").concat($, "]"), "ug");
  return n.match(e) || [];
};
function Y(n, e, r) {
  return Q.diff(n, e, r);
}
var k = new h();
k.tokenize = function(n, e) {
  e.stripTrailingCr && (n = n.replace(/\r\n/g, `
`));
  var r = [], t = n.split(/(\n|\r\n)/);
  t[t.length - 1] || t.pop();
  for (var o = 0; o < t.length; o++) {
    var u = t[o];
    o % 2 && !e.newlineIsToken ? r[r.length - 1] += u : r.push(u);
  }
  return r;
};
k.equals = function(n, e, r) {
  return r.ignoreWhitespace ? ((!r.newlineIsToken || !n.includes(`
`)) && (n = n.trim()), (!r.newlineIsToken || !e.includes(`
`)) && (e = e.trim())) : r.ignoreNewlineAtEof && !r.newlineIsToken && (n.endsWith(`
`) && (n = n.slice(0, -1)), e.endsWith(`
`) && (e = e.slice(0, -1))), h.prototype.equals.call(this, n, e, r);
};
var W = new h();
W.tokenize = function(n) {
  return n.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var _ = new h();
_.tokenize = function(n) {
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
var z = new h();
z.useLongestToken = !0;
z.tokenize = k.tokenize;
z.castInput = function(n, e) {
  var r = e.undefinedReplacement, t = e.stringifyReplacer, o = t === void 0 ? function(u, i) {
    return typeof i > "u" ? r : i;
  } : t;
  return typeof n == "string" ? n : JSON.stringify(R(n, null, null, o), o, "  ");
};
z.equals = function(n, e, r) {
  return h.prototype.equals.call(z, n.replace(/,([\r\n])/g, "$1"), e.replace(/,([\r\n])/g, "$1"), r);
};
function R(n, e, r, t, o) {
  e = e || [], r = r || [], t && (n = t(o, n));
  var u;
  for (u = 0; u < e.length; u += 1)
    if (e[u] === n)
      return r[u];
  var i;
  if (Object.prototype.toString.call(n) === "[object Array]") {
    for (e.push(n), i = new Array(n.length), r.push(i), u = 0; u < n.length; u += 1)
      i[u] = R(n[u], e, r, t, o);
    return e.pop(), r.pop(), i;
  }
  if (n && n.toJSON && (n = n.toJSON()), J(n) === "object" && n !== null) {
    e.push(n), i = {}, r.push(i);
    var a = [], f;
    for (f in n)
      Object.prototype.hasOwnProperty.call(n, f) && a.push(f);
    for (a.sort(), u = 0; u < a.length; u += 1)
      f = a[u], i[f] = R(n[f], e, r, t, f);
    e.pop(), r.pop();
  } else
    i = n;
  return i;
}
var M = new h();
M.tokenize = function(n) {
  return n.slice();
};
M.join = M.removeEmpty = function(n) {
  return n;
};
export {
  j as d
};
//# sourceMappingURL=index-ZFYMtjhW.js.map
