let e, t, n, l = !1,
    o = !1,
    s = !1,
    r = !1,
    i = 0,
    c = !1;
const a = "undefined" != typeof window ? window : {},
    f = a.CSS,
    u = a.document || {
        head: {}
    },
    p = {
        t: 0,
        l: "",
        jmp: e => e(),
        raf: e => requestAnimationFrame(e),
        ael: (e, t, n, l) => e.addEventListener(t, n, l),
        rel: (e, t, n, l) => e.removeEventListener(t, n, l)
    },
    d = (() => (u.head.attachShadow + "").indexOf("[native") > -1)(),
    m = e => Promise.resolve(e),
    w = (() => {
        try {
            return new CSSStyleSheet, !0
        } catch (e) {}
        return !1
    })(),
    $ = {},
    h = (e, t, n) => {
        n && n.map(([n, l, o]) => {
            const s = y(e, n),
                r = b(t, o),
                i = v(n);
            p.ael(s, l, r, i), (t.o = t.o || []).push(() => p.rel(s, l, r, i))
        })
    },
    b = (e, t) => n => {
        256 & e.t ? e.s[t](n) : (e.u = e.u || []).push([t, n])
    },
    y = (e, t) => 4 & t ? u : 8 & t ? a : e,
    v = e => 0 != (2 & e),
    g = "http://www.w3.org/1999/xlink",
    _ = new WeakMap,
    j = e => "sc-" + e,
    k = {},
    M = e => "object" == (e = typeof e) || "function" === e,
    R = (e, t, ...n) => {
        let l = null,
            o = null,
            s = null,
            r = !1,
            i = !1,
            c = [];
        const a = t => {
            for (let n = 0; n < t.length; n++) l = t[n], Array.isArray(l) ? a(l) : null != l && "boolean" != typeof l && ((r = "function" != typeof e && !M(l)) && (l += ""), r && i ? c[c.length - 1].p += l : c.push(r ? U(null, l) : l), i = r)
        };
        if (a(n), t) {
            t.key && (o = t.key), t.name && (s = t.name); {
                const e = t.className || t.class;
                e && (t.class = "object" != typeof e ? e : Object.keys(e).filter(t => e[t]).join(" "))
            }
        }
        if ("function" == typeof e) return e(null === t ? {} : t, c, S);
        const f = U(e, null);
        return f.$ = t, c.length > 0 && (f.h = c), f.v = o, f.g = s, f
    },
    U = (e, t) => ({
        t: 0,
        _: e,
        p: t,
        j: null,
        h: null,
        $: null,
        v: null,
        g: null
    }),
    O = {},
    S = {
        forEach: (e, t) => e.map(L).forEach(t),
        map: (e, t) => e.map(L).map(t).map(C)
    },
    L = e => ({
        vattrs: e.$,
        vchildren: e.h,
        vkey: e.v,
        vname: e.g,
        vtag: e._,
        vtext: e.p
    }),
    C = e => {
        const t = U(e.vtag, e.vtext);
        return t.$ = e.vattrs, t.h = e.vchildren, t.v = e.vkey, t.g = e.vname, t
    },
    P = (e, t, n, l, o, s) => {
        if (n !== l) {
            let i = we(e, t),
                c = t.toLowerCase();
            if ("class" === t) {
                const t = e.classList,
                    o = T(n),
                    s = T(l);
                t.remove(...o.filter(e => e && !s.includes(e))), t.add(...s.filter(e => e && !o.includes(e)))
            } else if ("style" === t) {
                for (const t in n) l && null != l[t] || (t.includes("-") ? e.style.removeProperty(t) : e.style[t] = "");
                for (const t in l) n && l[t] === n[t] || (t.includes("-") ? e.style.setProperty(t, l[t]) : e.style[t] = l[t])
            } else if ("key" === t);
            else if ("ref" === t) l && l(e);
            else if (i || "o" !== t[0] || "n" !== t[1]) {
                const a = M(l);
                if ((i || a && null !== l) && !o) try {
                    if (e.tagName.includes("-")) e[t] = l;
                    else {
                        let o = null == l ? "" : l;
                        "list" === t ? i = !1 : null != n && e[t] == o || (e[t] = o)
                    }
                } catch (r) {}
                let f = !1;
                c !== (c = c.replace(/^xlink\:?/, "")) && (t = c, f = !0), null == l || !1 === l ? f ? e.removeAttributeNS(g, t) : e.removeAttribute(t) : (!i || 4 & s || o) && !a && (l = !0 === l ? "" : l, f ? e.setAttributeNS(g, t, l) : e.setAttribute(t, l))
            } else t = "-" === t[2] ? t.slice(3) : we(a, c) ? c.slice(2) : c[2] + t.slice(3), n && p.rel(e, t, n, !1), l && p.ael(e, t, l, !1)
        }
    },
    x = /\s/,
    T = e => e ? e.split(x) : [],
    E = (e, t, n, l) => {
        const o = 11 === t.j.nodeType && t.j.host ? t.j.host : t.j,
            s = e && e.$ || k,
            r = t.$ || k;
        for (l in s) l in r || P(o, l, s[l], void 0, n, t.t);
        for (l in r) P(o, l, s[l], r[l], n, t.t)
    },
    A = (o, i, c, a) => {
        let f, p, d, m = i.h[c],
            w = 0;
        if (l || (s = !0, "slot" === m._ && (e && a.classList.add(e + "-s"), m.t |= m.h ? 2 : 1)), null !== m.p) f = m.j = u.createTextNode(m.p);
        else if (1 & m.t) f = m.j = u.createTextNode("");
        else {
            if (r || (r = "svg" === m._), f = m.j = u.createElementNS(r ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", 2 & m.t ? "slot-fb" : m._), r && "foreignObject" === m._ && (r = !1), E(null, m, r), null != e && f["s-si"] !== e && f.classList.add(f["s-si"] = e), m.h)
                for (w = 0; w < m.h.length; ++w) p = A(o, m, w, f), p && f.appendChild(p);
            "svg" === m._ ? r = !1 : "foreignObject" === f.tagName && (r = !0)
        }
        return f["s-hn"] = n, 3 & m.t && (f["s-sr"] = !0, f["s-cr"] = t, f["s-sn"] = m.g || "", d = o && o.h && o.h[c], d && d._ === m._ && o.j && D(o.j, !1)), f
    },
    D = (e, t) => {
        p.t |= 1;
        const l = e.childNodes;
        for (let o = l.length - 1; o >= 0; o--) {
            const e = l[o];
            e["s-hn"] !== n && e["s-ol"] && (N(e).insertBefore(e, H(e)), e["s-ol"].remove(), e["s-ol"] = void 0, s = !0), t && D(e, t)
        }
        p.t &= -2
    },
    F = (e, t, l, o, s, r) => {
        let i, c = e["s-cr"] && e["s-cr"].parentNode || e;
        for (c.shadowRoot && c.tagName === n && (c = c.shadowRoot); s <= r; ++s) o[s] && (i = A(null, l, s, e), i && (o[s].j = i, c.insertBefore(i, H(t))))
    },
    W = (e, t, n, l, s) => {
        for (; t <= n; ++t)(l = e[t]) && (s = l.j, J(l), o = !0, s["s-ol"] ? s["s-ol"].remove() : D(s, !0), s.remove())
    },
    q = (e, t) => e._ === t._ && ("slot" === e._ ? e.g === t.g : e.v === t.v),
    H = e => e && e["s-ol"] || e,
    N = e => (e["s-ol"] ? e["s-ol"] : e).parentNode,
    B = (e, t) => {
        const n = t.j = e.j,
            l = e.h,
            o = t.h,
            s = t._,
            i = t.p;
        let c;
        null === i ? (r = "svg" === s || "foreignObject" !== s && r, "slot" === s || E(e, t, r), null !== l && null !== o ? ((e, t, n, l) => {
            let o, s, r = 0,
                i = 0,
                c = 0,
                a = 0,
                f = t.length - 1,
                u = t[0],
                p = t[f],
                d = l.length - 1,
                m = l[0],
                w = l[d];
            for (; r <= f && i <= d;)
                if (null == u) u = t[++r];
                else if (null == p) p = t[--f];
            else if (null == m) m = l[++i];
            else if (null == w) w = l[--d];
            else if (q(u, m)) B(u, m), u = t[++r], m = l[++i];
            else if (q(p, w)) B(p, w), p = t[--f], w = l[--d];
            else if (q(u, w)) "slot" !== u._ && "slot" !== w._ || D(u.j.parentNode, !1), B(u, w), e.insertBefore(u.j, p.j.nextSibling), u = t[++r], w = l[--d];
            else if (q(p, m)) "slot" !== u._ && "slot" !== w._ || D(p.j.parentNode, !1), B(p, m), e.insertBefore(p.j, u.j), p = t[--f], m = l[++i];
            else {
                for (c = -1, a = r; a <= f; ++a)
                    if (t[a] && null !== t[a].v && t[a].v === m.v) {
                        c = a;
                        break
                    } c >= 0 ? (s = t[c], s._ !== m._ ? o = A(t && t[i], n, c, e) : (B(s, m), t[c] = void 0, o = s.j), m = l[++i]) : (o = A(t && t[i], n, i, e), m = l[++i]), o && N(u.j).insertBefore(o, H(u.j))
            }
            r > f ? F(e, null == l[d + 1] ? null : l[d + 1].j, n, l, i, d) : i > d && W(t, r, f)
        })(n, l, t, o) : null !== o ? (null !== e.p && (n.textContent = ""), F(n, null, t, o, 0, o.length - 1)) : null !== l && W(l, 0, l.length - 1), r && "svg" === s && (r = !1)) : (c = n["s-cr"]) ? c.parentNode.textContent = i : e.p !== i && (n.data = i)
    },
    V = e => {
        let t, n, l, o, s, r, i = e.childNodes;
        for (n = 0, l = i.length; n < l; n++)
            if (t = i[n], 1 === t.nodeType) {
                if (t["s-sr"])
                    for (s = t["s-sn"], t.hidden = !1, o = 0; o < l; o++)
                        if (i[o]["s-hn"] !== t["s-hn"])
                            if (r = i[o].nodeType, "" !== s) {
                                if (1 === r && s === i[o].getAttribute("slot")) {
                                    t.hidden = !0;
                                    break
                                }
                            } else if (1 === r || 3 === r && "" !== i[o].textContent.trim()) {
                    t.hidden = !0;
                    break
                }
                V(t)
            }
    },
    z = [],
    G = e => {
        let t, n, l, s, r, i, c = 0,
            a = e.childNodes,
            f = a.length;
        for (; c < f; c++) {
            if (t = a[c], t["s-sr"] && (n = t["s-cr"]))
                for (l = n.parentNode.childNodes, s = t["s-sn"], i = l.length - 1; i >= 0; i--) n = l[i], n["s-cn"] || n["s-nr"] || n["s-hn"] === t["s-hn"] || (I(n, s) ? (r = z.find(e => e.k === n), o = !0, n["s-sn"] = n["s-sn"] || s, r ? r.M = t : z.push({
                    M: t,
                    k: n
                }), n["s-sr"] && z.map(e => {
                    I(e.k, n["s-sn"]) && (r = z.find(e => e.k === n), r && !e.M && (e.M = r.M))
                })) : z.some(e => e.k === n) || z.push({
                    k: n
                }));
            1 === t.nodeType && G(t)
        }
    },
    I = (e, t) => 1 === e.nodeType ? null === e.getAttribute("slot") && "" === t || e.getAttribute("slot") === t : e["s-sn"] === t || "" === t,
    J = e => {
        e.$ && e.$.ref && e.$.ref(null), e.h && e.h.map(J)
    },
    K = e => pe(e).R,
    Q = (e, t, n) => {
        const l = K(e);
        return {
            emit: e => X(l, t, {
                bubbles: !!(4 & n),
                composed: !!(2 & n),
                cancelable: !!(1 & n),
                detail: e
            })
        }
    },
    X = (e, t, n) => {
        const l = new CustomEvent(t, n);
        return e.dispatchEvent(l), l
    },
    Y = (e, t) => {
        t && !e.U && t["s-p"].push(new Promise(t => e.U = t))
    },
    Z = (e, t) => {
        if (e.t |= 16, 4 & e.t) return void(e.t |= 512);
        const n = e.s,
            l = () => ee(e, n, t);
        let o;
        return Y(e, e.O), t && (e.t |= 256, e.u && (e.u.map(([e, t]) => oe(n, e, t)), e.u = null), o = oe(n, "componentWillLoad")), se(o, () => Oe(l))
    },
    ee = (r, i, c) => {
        const a = r.R,
            f = a["s-rc"];
        c && (e => {
            const t = e.S,
                n = e.R,
                l = t.t,
                o = ((e, t) => {
                    let n = j(t.L),
                        l = ye.get(n);
                    if (e = 11 === e.nodeType ? e : u, l)
                        if ("string" == typeof l) {
                            let t, o = _.get(e = e.head || e);
                            o || _.set(e, o = new Set), o.has(n) || (t = u.createElement("style"), t.innerHTML = l, e.insertBefore(t, e.querySelector("link")), o && o.add(n))
                        } else e.adoptedStyleSheets.includes(l) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, l]);
                    return n
                })(d && n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
            10 & l && (n["s-sc"] = o, n.classList.add(o + "-h"), 2 & l && n.classList.add(o + "-s"))
        })(r), ((r, i) => {
            const c = r.R,
                a = r.S,
                f = r.C || U(null, null),
                m = (e => e && e._ === O)(i) ? i : R(null, null, i);
            if (n = c.tagName, a.P && (m.$ = m.$ || {}, a.P.map(([e, t]) => m.$[t] = c[e])), m._ = null, m.t |= 4, r.C = m, m.j = f.j = c.shadowRoot || c, e = c["s-sc"], t = c["s-cr"], l = d && 0 != (1 & a.t), o = !1, B(f, m), s) {
                let e, t, n, l, o, s;
                p.t |= 1, G(m.j);
                let r = 0;
                for (; r < z.length; r++) e = z[r], t = e.k, t["s-ol"] || (n = u.createTextNode(""), n["s-nr"] = t, t.parentNode.insertBefore(t["s-ol"] = n, t));
                for (r = 0; r < z.length; r++)
                    if (e = z[r], t = e.k, e.M) {
                        for (l = e.M.parentNode, o = e.M.nextSibling, n = t["s-ol"]; n = n.previousSibling;)
                            if (s = n["s-nr"], s && s["s-sn"] === t["s-sn"] && l === s.parentNode && (s = s.nextSibling, !s || !s["s-nr"])) {
                                o = s;
                                break
                            }(!o && l !== t.parentNode || t.nextSibling !== o) && t !== o && (!t["s-hn"] && t["s-ol"] && (t["s-hn"] = t["s-ol"].parentNode.nodeName), l.insertBefore(t, o))
                    } else 1 === t.nodeType && (t.hidden = !0);
                p.t &= -2
            }
            o && V(m.j), z.length = 0
        })(r, te(i)), r.t &= -17, r.t |= 2, f && (f.map(e => e()), a["s-rc"] = void 0); {
            const e = a["s-p"],
                t = () => ne(r);
            0 === e.length ? t() : (Promise.all(e).then(t), r.t |= 4, e.length = 0)
        }
    },
    te = e => {
        try {
            e = e.render && e.render()
        } catch (t) {
            $e(t)
        }
        return e
    },
    ne = e => {
        const t = e.R,
            n = e.s,
            l = e.O;
        64 & e.t ? oe(n, "componentDidUpdate") : (e.t |= 64, re(t), oe(n, "componentDidLoad"), e.T(t), l || le()), e.A(t), e.U && (e.U(), e.U = void 0), 512 & e.t && Re(() => Z(e, !1)), e.t &= -517
    },
    le = () => {
        re(u.documentElement), p.t |= 2, Re(() => X(a, "appload", {
            detail: {
                namespace: "app"
            }
        }))
    },
    oe = (e, t, n) => {
        if (e && e[t]) try {
            return e[t](n)
        } catch (l) {
            $e(l)
        }
    },
    se = (e, t) => e && e.then ? e.then(t) : t(),
    re = e => e.classList.add("hydrated"),
    ie = (e, t, n) => {
        if (t.D) {
            e.watchers && (t.F = e.watchers);
            const l = Object.entries(t.D),
                o = e.prototype;
            if (l.map(([e, [l]]) => {
                    31 & l || 2 & n && 32 & l ? Object.defineProperty(o, e, {
                        get() {
                            return ((e, t) => pe(this).W.get(t))(0, e)
                        },
                        set(n) {
                            ((e, t, n, l) => {
                                const o = pe(this),
                                    s = o.W.get(t),
                                    r = o.t,
                                    i = o.s;
                                if (n = ((e, t) => null == e || M(e) ? e : 4 & t ? "false" !== e && ("" === e || !!e) : 2 & t ? parseFloat(e) : 1 & t ? e + "" : e)(n, l.D[t][0]), !(8 & r && void 0 !== s || n === s) && (o.W.set(t, n), i)) {
                                    if (l.F && 128 & r) {
                                        const e = l.F[t];
                                        e && e.map(e => {
                                            try {
                                                i[e](n, s, t)
                                            } catch (l) {
                                                $e(l)
                                            }
                                        })
                                    }
                                    2 == (18 & r) && Z(o, !1)
                                }
                            })(0, e, n, t)
                        },
                        configurable: !0,
                        enumerable: !0
                    }) : 1 & n && 64 & l && Object.defineProperty(o, e, {
                        value(...t) {
                            const n = pe(this);
                            return n.q.then(() => n.s[e](...t))
                        }
                    })
                }), 1 & n) {
                const n = new Map;
                o.attributeChangedCallback = function(e, t, l) {
                    p.jmp(() => {
                        const t = n.get(e);
                        this[t] = (null !== l || "boolean" != typeof this[t]) && l
                    })
                }, e.observedAttributes = l.filter(([e, t]) => 15 & t[0]).map(([e, l]) => {
                    const o = l[1] || e;
                    return n.set(o, e), 512 & l[0] && t.P.push([e, o]), o
                })
            }
        }
        return e
    },
    ce = e => {
        oe(e, "connectedCallback")
    },
    ae = (e, t = {}) => {
        const n = [],
            l = t.exclude || [],
            o = a.customElements,
            s = u.head,
            r = s.querySelector("meta[charset]"),
            i = u.createElement("style"),
            c = [];
        let f, m = !0;
        Object.assign(p, t), p.l = new URL(t.resourcesUrl || "./", u.baseURI).href, t.syncQueue && (p.t |= 4), e.map(e => e[1].map(t => {
            const s = {
                t: t[0],
                L: t[1],
                D: t[2],
                H: t[3]
            };
            s.D = t[2], s.H = t[3], s.P = [], s.F = {}, !d && 1 & s.t && (s.t |= 8);
            const r = s.L,
                i = class extends HTMLElement {
                    constructor(e) {
                        super(e), me(e = this, s), 1 & s.t && (d ? e.attachShadow({
                            mode: "open"
                        }) : "shadowRoot" in e || (e.shadowRoot = e))
                    }
                    connectedCallback() {
                        f && (clearTimeout(f), f = null), m ? c.push(this) : p.jmp(() => (e => {
                            if (0 == (1 & p.t)) {
                                const t = pe(e),
                                    n = t.S,
                                    l = () => {};
                                if (1 & t.t) h(e, t, n.H), ce(t.s);
                                else {
                                    t.t |= 1, 12 & n.t && (e => {
                                        const t = e["s-cr"] = u.createComment("");
                                        t["s-cn"] = !0, e.insertBefore(t, e.firstChild)
                                    })(e); {
                                        let n = e;
                                        for (; n = n.parentNode || n.host;)
                                            if (n["s-p"]) {
                                                Y(t, t.O = n);
                                                break
                                            }
                                    }
                                    n.D && Object.entries(n.D).map(([t, [n]]) => {
                                        if (31 & n && e.hasOwnProperty(t)) {
                                            const n = e[t];
                                            delete e[t], e[t] = n
                                        }
                                    }), (async (e, t, n, l, o) => {
                                        if (0 == (32 & t.t)) {
                                            t.t |= 32; {
                                                if ((o = be(n)).then) {
                                                    const e = () => {};
                                                    o = await o, e()
                                                }
                                                o.isProxied || (n.F = o.watchers, ie(o, n, 2), o.isProxied = !0);
                                                const e = () => {};
                                                t.t |= 8;
                                                try {
                                                    new o(t)
                                                } catch (i) {
                                                    $e(i)
                                                }
                                                t.t &= -9, t.t |= 128, e(), ce(t.s)
                                            }
                                            const e = j(n.L);
                                            if (!ye.has(e) && o.style) {
                                                const t = () => {};
                                                let l = o.style;
                                                8 & n.t && (l = await __sc_import_app("./p-ea5813c8.js").then(t => t.scopeCss(l, e, !1))), ((e, t, n) => {
                                                    let l = ye.get(e);
                                                    w && n ? (l = l || new CSSStyleSheet, l.replace(t)) : l = t, ye.set(e, l)
                                                })(e, l, !!(1 & n.t)), t()
                                            }
                                        }
                                        const s = t.O,
                                            r = () => Z(t, !0);
                                        s && s["s-rc"] ? s["s-rc"].push(r) : r()
                                    })(0, t, n)
                                }
                                l()
                            }
                        })(this))
                    }
                    disconnectedCallback() {
                        p.jmp(() => (() => {
                            if (0 == (1 & p.t)) {
                                const e = pe(this),
                                    t = e.s;
                                e.o && (e.o.map(e => e()), e.o = void 0), oe(t, "disconnectedCallback"), oe(t, "componentDidUnload")
                            }
                        })())
                    }
                    forceUpdate() {
                        (() => {
                            {
                                const e = pe(this);
                                e.R.isConnected && 2 == (18 & e.t) && Z(e, !1)
                            }
                        })()
                    }
                    componentOnReady() {
                        return pe(this).N
                    }
                };
            s.B = e[0], l.includes(r) || o.get(r) || (n.push(r), o.define(r, ie(i, s, 1)))
        })), i.innerHTML = n + "{visibility:hidden}.hydrated{visibility:inherit}", i.setAttribute("data-styles", ""), s.insertBefore(i, r ? r.nextSibling : s.firstChild), m = !1, c.length ? c.map(e => e.connectedCallback()) : p.jmp(() => f = setTimeout(le, 30))
    },
    fe = (e, t) => t in $ ? $[t] : "window" === t ? a : "document" === t ? u : "isServer" !== t && "isPrerender" !== t && ("isClient" === t || ("resourcesUrl" === t || "publicPath" === t ? (() => {
        const e = new URL(".", p.l);
        return e.origin !== a.location.origin ? e.href : e.pathname
    })() : "queue" === t ? {
        write: Oe,
        read: Ue,
        tick: {
            then: e => Re(e)
        }
    } : void 0)),
    ue = new WeakMap,
    pe = e => ue.get(e),
    de = (e, t) => ue.set(t.s = e, t),
    me = (e, t) => {
        const n = {
            t: 0,
            R: e,
            S: t,
            W: new Map
        };
        return n.q = new Promise(e => n.A = e), n.N = new Promise(e => n.T = e), e["s-p"] = [], e["s-rc"] = [], h(e, n, t.H), ue.set(e, n)
    },
    we = (e, t) => t in e,
    $e = e => console.error(e),
    he = new Map,
    be = e => {
        const t = e.L.replace(/-/g, "_"),
            n = e.B,
            l = he.get(n);
        return l ? l[t] : __sc_import_app(`./${n}.entry.js`).then(e => (he.set(n, e), e[t]), $e)
    },
    ye = new Map,
    ve = [],
    ge = [],
    _e = [],
    je = (e, t) => n => {
        e.push(n), c || (c = !0, t && 4 & p.t ? Re(Me) : p.raf(Me))
    },
    ke = (e, t) => {
        let n = 0,
            l = 0;
        for (; n < e.length && (l = performance.now()) < t;) try {
            e[n++](l)
        } catch (o) {
            $e(o)
        }
        n === e.length ? e.length = 0 : 0 !== n && e.splice(0, n)
    },
    Me = () => {
        i++, (e => {
            for (let n = 0; n < e.length; n++) try {
                e[n](performance.now())
            } catch (t) {
                $e(t)
            }
            e.length = 0
        })(ve);
        const e = 2 == (6 & p.t) ? performance.now() + 10 * Math.ceil(i * (1 / 22)) : 1 / 0;
        ke(ge, e), ke(_e, e), ge.length > 0 && (_e.push(...ge), ge.length = 0), (c = ve.length + ge.length + _e.length > 0) ? p.raf(Me) : i = 0
    },
    Re = e => m().then(e),
    Ue = je(ve, !1),
    Oe = je(ge, !0),
    Se = () => f && f.supports && f.supports("color", "var(--c)") ? m() : __sc_import_app("./p-e77adc1e.js").then(() => (p.V = a.__cssshim) ? (!1).i() : 0),
    Le = () => {
        p.V = a.__cssshim;
        const e = Array.from(u.querySelectorAll("script")).find(e => /\/app(\.esm)?\.js($|\?|#)/.test(e.src) || "app" === e.getAttribute("data-stencil-namespace")),
            t = e["data-opts"] || {};
        return "onbeforeload" in e && !history.scrollRestoration ? {
            then() {}
        } : (t.resourcesUrl = new URL(".", new URL(e.getAttribute("data-resources-url") || e.src, a.location.href)).href, Ce(t.resourcesUrl, e), a.customElements ? m(t) : __sc_import_app("./p-34b64bba.js").then(() => t))
    },
    Ce = (e, t) => {
        try {
            a.__sc_import_app = Function("w", `return import(w);//${Math.random()}`)
        } catch (n) {
            const l = new Map;
            a.__sc_import_app = n => {
                const o = new URL(n, e).href;
                let s = l.get(o);
                if (!s) {
                    const e = u.createElement("script");
                    e.type = "module", e.crossOrigin = t.crossOrigin, e.src = URL.createObjectURL(new Blob([`import * as m from '${o}'; window.__sc_import_app.m = m;`], {
                        type: "application/javascript"
                    })), s = new Promise(t => {
                        e.onload = () => {
                            t(a.__sc_import_app.m), e.remove()
                        }
                    }), l.set(o, s), u.head.appendChild(e)
                }
                return s
            }
        }
    };
export {
    O as H, Se as a, ae as b, Q as c, fe as d, K as g, R as h, Le as p, de as r
}