const e = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g"),
  r = e => e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
  t = e => e.replace(/([=!:$/()])/g, "\\$1"),
  n = e => e && e.sensitive ? "" : "i",
  a = (e, t, a) => {
    for (var o = (a = a || {}).strict, s = !1 !== a.end, i = r(a.delimiter || "/"), l = a.delimiters || "./", c = [].concat(a.endsWith || []).map(r).concat("$").join("|"), u = "", f = !1, p = 0; p < e.length; p++) {
      var d = e[p];
      if ("string" == typeof d) u += r(d), f = p === e.length - 1 && l.indexOf(d[d.length - 1]) > -1;
      else {
        var h = r(d.prefix || ""),
          v = d.repeat ? "(?:" + d.pattern + ")(?:" + h + "(?:" + d.pattern + "))*" : d.pattern;
        t && t.push(d), u += d.optional ? d.partial ? h + "(" + v + ")?" : "(?:" + h + "(" + v + "))?" : h + "(" + v + ")"
      }
    }
    return s ? (o || (u += "(?:" + i + ")?"), u += "$" === c ? "$" : "(?=" + c + ")") : (o || (u += "(?:" + i + "(?=" + c + "))?"), f || (u += "(?=" + i + "|" + c + ")")), new RegExp("^" + u, n(a))
  },
  o = (s, i, l) => s instanceof RegExp ? ((e, r) => {
    if (!r) return e;
    var t = e.source.match(/\((?!\?)/g);
    if (t)
      for (var n = 0; n < t.length; n++) r.push({
        name: n,
        prefix: null,
        delimiter: null,
        optional: !1,
        repeat: !1,
        partial: !1,
        pattern: null
      });
    return e
  })(s, i) : Array.isArray(s) ? ((e, r, t) => {
    for (var a = [], s = 0; s < e.length; s++) a.push(o(e[s], r, t).source);
    return new RegExp("(?:" + a.join("|") + ")", n(t))
  })(s, i, l) : ((n, o, s) => a(((n, a) => {
    for (var o, s = [], i = 0, l = 0, c = "", u = a && a.delimiter || "/", f = a && a.delimiters || "./", p = !1; null !== (o = e.exec(n));) {
      var d = o[0],
        h = o[1],
        v = o.index;
      if (c += n.slice(l, v), l = v + d.length, h) c += h[1], p = !0;
      else {
        var g = "",
          y = n[l],
          $ = o[2],
          m = o[3],
          x = o[4],
          R = o[5];
        if (!p && c.length) {
          var E = c.length - 1;
          f.indexOf(c[E]) > -1 && (g = c[E], c = c.slice(0, E))
        }
        c && (s.push(c), c = "", p = !1);
        var b = g || u,
          w = m || x;
        s.push({
          name: $ || i++,
          prefix: g,
          delimiter: b,
          optional: "?" === R || "*" === R,
          repeat: "+" === R || "*" === R,
          partial: "" !== g && void 0 !== y && y !== g,
          pattern: w ? t(w) : "[^" + r(b) + "]+?"
        })
      }
    }
    return (c || l < n.length) && s.push(c + n.substr(l)), s
  })(n, s), o, s))(s, i, l),
  s = (e, r) => new RegExp("^" + r + "(\\/|\\?|#|$)", "i").test(e),
  i = (e, r) => s(e, r) ? e.substr(r.length) : e,
  l = e => "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e,
  c = e => "/" === e.charAt(0) ? e : "/" + e,
  u = e => "/" === e.charAt(0) ? e.substr(1) : e,
  f = e => {
    const {
      pathname: r,
      search: t,
      hash: n
    } = e;
    let a = r || "/";
    return t && "?" !== t && (a += "?" === t.charAt(0) ? t : `?${t}`), n && "#" !== n && (a += "#" === n.charAt(0) ? n : `#${n}`), a
  },
  p = e => "/" === e.charAt(0),
  d = e => Math.random().toString(36).substr(2, e),
  h = (e, r) => {
    for (let t = r, n = t + 1, a = e.length; n < a; t += 1, n += 1) e[t] = e[n];
    e.pop()
  },
  v = (e, r) => {
    if (e === r) return !0;
    if (null == e || null == r) return !1;
    if (Array.isArray(e)) return Array.isArray(r) && e.length === r.length && e.every((e, t) => v(e, r[t]));
    const t = typeof e;
    if (t !== typeof r) return !1;
    if ("object" === t) {
      const t = e.valueOf(),
        n = r.valueOf();
      if (t !== e || n !== r) return v(t, n);
      const a = Object.keys(e),
        o = Object.keys(r);
      return a.length === o.length && a.every(t => v(e[t], r[t]))
    }
    return !1
  },
  g = (e, r) => e.pathname === r.pathname && e.search === r.search && e.hash === r.hash && e.key === r.key && v(e.state, r.state),
  y = (e, r, t, n) => {
    let a;
    "string" == typeof e ? (a = (e => {
      let r = e || "/",
        t = "",
        n = "";
      const a = r.indexOf("#"); - 1 !== a && (n = r.substr(a), r = r.substr(0, a));
      const o = r.indexOf("?");
      return -1 !== o && (t = r.substr(o), r = r.substr(0, o)), {
        pathname: r,
        search: "?" === t ? "" : t,
        hash: "#" === n ? "" : n,
        query: {},
        key: ""
      }
    })(e), void 0 !== r && (a.state = r)) : (a = Object.assign({
      pathname: ""
    }, e), a.search && "?" !== a.search.charAt(0) && (a.search = "?" + a.search), a.hash && "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash), void 0 !== r && void 0 === a.state && (a.state = r));
    try {
      a.pathname = decodeURI(a.pathname)
    } catch (s) {
      throw s instanceof URIError ? new URIError('Pathname "' + a.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : s
    }
    var o;
    return a.key = t, n ? a.pathname ? "/" !== a.pathname.charAt(0) && (a.pathname = ((e, r = "") => {
      let t, n = r && r.split("/") || [],
        a = 0;
      const o = e && e.split("/") || [],
        s = e && p(e),
        i = r && p(r),
        l = s || i;
      if (e && p(e) ? n = o : o.length && (n.pop(), n = n.concat(o)), !n.length) return "/";
      if (n.length) {
        const e = n[n.length - 1];
        t = "." === e || ".." === e || "" === e
      } else t = !1;
      for (let u = n.length; u >= 0; u--) {
        const e = n[u];
        "." === e ? h(n, u) : ".." === e ? (h(n, u), a++) : a && (h(n, u), a--)
      }
      if (!l)
        for (; a--; a) n.unshift("..");
      !l || "" === n[0] || n[0] && p(n[0]) || n.unshift("");
      let c = n.join("/");
      return t && "/" !== c.substr(-1) && (c += "/"), c
    })(a.pathname, n.pathname)) : a.pathname = n.pathname : a.pathname || (a.pathname = "/"), a.query = (o = a.search || "") ? (/^[?#]/.test(o) ? o.slice(1) : o).split("&").reduce((e, r) => {
      let [t, n] = r.split("=");
      return e[t] = n ? decodeURIComponent(n.replace(/\+/g, " ")) : "", e
    }, {}) : {}, a
  };
let $ = 0;
const m = {},
  x = (e, r = {}) => {
    "string" == typeof r && (r = {
      path: r
    });
    const {
      path: t = "/",
      exact: n = !1,
      strict: a = !1
    } = r, {
      re: s,
      keys: i
    } = ((e, r) => {
      const t = `${r.end}${r.strict}`,
        n = m[t] || (m[t] = {}),
        a = JSON.stringify(e);
      if (n[a]) return n[a];
      const s = [],
        i = {
          re: o(e, s, r),
          keys: s
        };
      return $ < 1e4 && (n[a] = i, $ += 1), i
    })(t, {
      end: n,
      strict: a
    }), l = s.exec(e);
    if (!l) return null;
    const [c, ...u] = l, f = e === c;
    return n && !f ? null : {
      path: t,
      url: "/" === t && "" === c ? "/" : c,
      isExact: f,
      params: i.reduce((e, r, t) => (e[r.name] = u[t], e), {})
    }
  },
  R = (e, r) => null == e && null == r || null != r && e && r && e.path === r.path && e.url === r.url && v(e.params, r.params);
export {
  R as a, c as b, y as c, d, i as e, f, u as g, s as h, g as l, x as m, l as s
}