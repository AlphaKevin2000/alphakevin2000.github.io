function e(n) {
  return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
  } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(n)
}

function n(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
  }) : e[n] = t, e
}

function t(e) {
  for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? Object(arguments[t]) : {},
          r = Object.keys(i);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter((function(e) {
          return Object.getOwnPropertyDescriptor(i, e).enumerable
      })))), r.forEach((function(t) {
          n(e, t, i[t])
      }))
  }
  return e
}

function i(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function r(e, n) {
  for (var t = 0; t < n.length; t++) {
      var i = n[t];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
  }
}

function a(e, n, t) {
  return n && r(e.prototype, n), t && r(e, t), e
}

function o(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function s(n, t) {
  return !t || "object" !== e(t) && "function" != typeof t ? o(n) : t
}

function h(e) {
  return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
  })(e)
}

function u(e, n) {
  return (u = Object.setPrototypeOf || function(e, n) {
      return e.__proto__ = n, e
  })(e, n)
}

function l(e, n) {
  if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, {
      constructor: {
          value: e,
          writable: !0,
          configurable: !0
      }
  }), n && u(e, n)
}

function c(e, n) {
  (null == n || n > e.length) && (n = e.length);
  for (var t = 0, i = new Array(n); t < n; t++) i[t] = e[t];
  return i
}

function d(e, n) {
  if (e) {
      if ("string" == typeof e) return c(e, n);
      var t = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? c(e, n) : void 0
  }
}

function g(e, n) {
  return function(e) {
      if (Array.isArray(e)) return e
  }(e) || function(e, n) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
          var t = [],
              i = !0,
              r = !1,
              a = void 0;
          try {
              for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (t.push(o.value), !n || t.length !== n); i = !0);
          } catch (h) {
              r = !0, a = h
          } finally {
              try {
                  i || null == s.return || s.return()
              } finally {
                  if (r) throw a
              }
          }
          return t
      }
  }(e, n) || d(e, n) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}
var f = {
      type: "logger",
      log: function(e) {
          this.output("log", e)
      },
      warn: function(e) {
          this.output("warn", e)
      },
      error: function(e) {
          this.output("error", e)
      },
      output: function(e, n) {
          var t;
          console && console[e] && (t = console)[e].apply(t, function(e) {
              return function(e) {
                  if (Array.isArray(e)) return c(e)
              }(e) || function(e) {
                  if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
              }(e) || d(e) || function() {
                  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }()
          }(n))
      }
  },
  p = new(function() {
      function e(n) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          i(this, e), this.init(n, t)
      }
      return a(e, [{
          key: "init",
          value: function(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              this.prefix = n.prefix || "i18next:", this.logger = e || f, this.options = n, this.debug = n.debug
          }
      }, {
          key: "setDebug",
          value: function(e) {
              this.debug = e
          }
      }, {
          key: "log",
          value: function() {
              for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
              return this.forward(n, "log", "", !0)
          }
      }, {
          key: "warn",
          value: function() {
              for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
              return this.forward(n, "warn", "", !0)
          }
      }, {
          key: "error",
          value: function() {
              for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
              return this.forward(n, "error", "")
          }
      }, {
          key: "deprecate",
          value: function() {
              for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
              return this.forward(n, "warn", "WARNING DEPRECATED: ", !0)
          }
      }, {
          key: "forward",
          value: function(e, n, t, i) {
              return i && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(t).concat(this.prefix, " ").concat(e[0])), this.logger[n](e))
          }
      }, {
          key: "create",
          value: function(n) {
              return new e(this.logger, t({}, {
                  prefix: "".concat(this.prefix, ":").concat(n, ":")
              }, this.options))
          }
      }]), e
  }()),
  m = function() {
      function e() {
          i(this, e), this.observers = {}
      }
      return a(e, [{
          key: "on",
          value: function(e, n) {
              var t = this;
              return e.split(" ").forEach((function(e) {
                  t.observers[e] = t.observers[e] || [], t.observers[e].push(n)
              })), this
          }
      }, {
          key: "off",
          value: function(e, n) {
              this.observers[e] && (n ? this.observers[e] = this.observers[e].filter((function(e) {
                  return e !== n
              })) : delete this.observers[e])
          }
      }, {
          key: "emit",
          value: function(e) {
              for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) t[i - 1] = arguments[i];
              if (this.observers[e]) {
                  var r = [].concat(this.observers[e]);
                  r.forEach((function(e) {
                      e.apply(void 0, t)
                  }))
              }
              if (this.observers["*"]) {
                  var a = [].concat(this.observers["*"]);
                  a.forEach((function(n) {
                      n.apply(n, [e].concat(t))
                  }))
              }
          }
      }]), e
  }();

function v() {
  var e, n, t = new Promise((function(t, i) {
      e = t, n = i
  }));
  return t.resolve = e, t.reject = n, t
}

function b(e) {
  return null == e ? "" : "" + e
}

function _(e, n, t) {
  e.forEach((function(e) {
      n[e] && (t[e] = n[e])
  }))
}

function y(e, n, t) {
  function i(e) {
      return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
  }

  function r() {
      return !e || "string" == typeof e
  }
  for (var a = "string" != typeof n ? [].concat(n) : n.split("."); a.length > 1;) {
      if (r()) return {};
      var o = i(a.shift());
      !e[o] && t && (e[o] = new t), e = e[o]
  }
  return r() ? {} : {
      obj: e,
      k: i(a.shift())
  }
}

function w(e, n, t) {
  var i = y(e, n, Object);
  i.obj[i.k] = t
}

function k(e, n) {
  var t = y(e, n),
      i = t.obj;
  if (i) return i[t.k]
}

function S(e, n, t) {
  var i = k(e, t);
  return void 0 !== i ? i : k(n, t)
}

function z(e, n, t) {
  for (var i in n) i in e ? "string" == typeof e[i] || e[i] instanceof String || "string" == typeof n[i] || n[i] instanceof String ? t && (e[i] = n[i]) : z(e[i], n[i], t) : e[i] = n[i];
  return e
}

function A(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
}
var C = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};

function I(e) {
  return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
      return C[e]
  })) : e
}
var D = function() {
      function e(n) {
          var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
              ns: ["translation"],
              defaultNS: "translation"
          };
          return i(this, e), t = s(this, h(e).call(this)), m.call(o(t)), t.data = n || {}, t.options = r, void 0 === t.options.keySeparator && (t.options.keySeparator = "."), t
      }
      return l(e, m), a(e, [{
          key: "addNamespaces",
          value: function(e) {
              this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
          }
      }, {
          key: "removeNamespaces",
          value: function(e) {
              var n = this.options.ns.indexOf(e);
              n > -1 && this.options.ns.splice(n, 1)
          }
      }, {
          key: "getResource",
          value: function(e, n, t) {
              var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                  r = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator,
                  a = [e, n];
              return t && "string" != typeof t && (a = a.concat(t)), t && "string" == typeof t && (a = a.concat(r ? t.split(r) : t)), e.indexOf(".") > -1 && (a = e.split(".")), k(this.data, a)
          }
      }, {
          key: "addResource",
          value: function(e, n, t, i) {
              var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                      silent: !1
                  },
                  a = this.options.keySeparator;
              void 0 === a && (a = ".");
              var o = [e, n];
              t && (o = o.concat(a ? t.split(a) : t)), e.indexOf(".") > -1 && (i = n, n = (o = e.split("."))[1]), this.addNamespaces(n), w(this.data, o, i), r.silent || this.emit("added", e, n, t, i)
          }
      }, {
          key: "addResources",
          value: function(e, n, t) {
              var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                  silent: !1
              };
              for (var r in t) "string" != typeof t[r] && "[object Array]" !== Object.prototype.toString.apply(t[r]) || this.addResource(e, n, r, t[r], {
                  silent: !0
              });
              i.silent || this.emit("added", e, n, t)
          }
      }, {
          key: "addResourceBundle",
          value: function(e, n, i, r, a) {
              var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                      silent: !1
                  },
                  s = [e, n];
              e.indexOf(".") > -1 && (r = i, i = n, n = (s = e.split("."))[1]), this.addNamespaces(n);
              var h = k(this.data, s) || {};
              r ? z(h, i, a) : h = t({}, h, i), w(this.data, s, h), o.silent || this.emit("added", e, n, i)
          }
      }, {
          key: "removeResourceBundle",
          value: function(e, n) {
              this.hasResourceBundle(e, n) && delete this.data[e][n], this.removeNamespaces(n), this.emit("removed", e, n)
          }
      }, {
          key: "hasResourceBundle",
          value: function(e, n) {
              return void 0 !== this.getResource(e, n)
          }
      }, {
          key: "getResourceBundle",
          value: function(e, n) {
              return n || (n = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? t({}, {}, this.getResource(e, n)) : this.getResource(e, n)
          }
      }, {
          key: "getDataByLanguage",
          value: function(e) {
              return this.data[e]
          }
      }, {
          key: "toJSON",
          value: function() {
              return this.data
          }
      }]), e
  }(),
  q = {
      processors: {},
      addPostProcessor: function(e) {
          this.processors[e.name] = e
      },
      handle: function(e, n, t, i, r) {
          var a = this;
          return e.forEach((function(e) {
              a.processors[e] && (n = a.processors[e].process(n, t, i, r))
          })), n
      }
  },
  B = {},
  x = function() {
      function n(e) {
          var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return i(this, n), t = s(this, h(n).call(this)), m.call(o(t)), _(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, o(t)), t.options = r, void 0 === t.options.keySeparator && (t.options.keySeparator = "."), t.logger = p.create("translator"), t
      }
      return l(n, m), a(n, [{
          key: "changeLanguage",
          value: function(e) {
              e && (this.language = e)
          }
      }, {
          key: "exists",
          value: function(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                      interpolation: {}
                  },
                  t = this.resolve(e, n);
              return t && void 0 !== t.res
          }
      }, {
          key: "extractFromKey",
          value: function(e, n) {
              var t = n.nsSeparator || this.options.nsSeparator;
              void 0 === t && (t = ":");
              var i = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                  r = n.ns || this.options.defaultNS;
              if (t && e.indexOf(t) > -1) {
                  var a = e.split(t);
                  (t !== i || t === i && this.options.ns.indexOf(a[0]) > -1) && (r = a.shift()), e = a.join(i)
              }
              return "string" == typeof r && (r = [r]), {
                  key: e,
                  namespaces: r
              }
          }
      }, {
          key: "translate",
          value: function(n, i) {
              var r = this;
              if ("object" !== e(i) && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), i || (i = {}), null == n) return "";
              Array.isArray(n) || (n = [String(n)]);
              var a = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator,
                  o = this.extractFromKey(n[n.length - 1], i),
                  s = o.key,
                  h = o.namespaces,
                  u = h[h.length - 1],
                  l = i.lng || this.language,
                  c = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
              if (l && "cimode" === l.toLowerCase()) {
                  if (c) {
                      var d = i.nsSeparator || this.options.nsSeparator;
                      return u + d + s
                  }
                  return s
              }
              var g = this.resolve(n, i),
                  f = g && g.res,
                  p = g && g.usedKey || s,
                  m = g && g.exactUsedKey || s,
                  v = Object.prototype.toString.apply(f),
                  b = ["[object Number]", "[object Function]", "[object RegExp]"],
                  _ = void 0 !== i.joinArrays ? i.joinArrays : this.options.joinArrays,
                  y = !this.i18nFormat || this.i18nFormat.handleAsObject,
                  w = "string" != typeof f && "boolean" != typeof f && "number" != typeof f;
              if (y && f && w && b.indexOf(v) < 0 && ("string" != typeof _ || "[object Array]" !== v)) {
                  if (!i.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, f, i) : "key '".concat(s, " (").concat(this.language, ")' returned an object instead of string.");
                  if (a) {
                      var k = "[object Array]" === v,
                          S = k ? [] : {},
                          z = k ? m : p;
                      for (var A in f)
                          if (Object.prototype.hasOwnProperty.call(f, A)) {
                              var C = "".concat(z).concat(a).concat(A);
                              S[A] = this.translate(C, t({}, i, {
                                  joinArrays: !1,
                                  ns: h
                              })), S[A] === C && (S[A] = f[A])
                          } f = S
                  }
              } else if (y && "string" == typeof _ && "[object Array]" === v)(f = f.join(_)) && (f = this.extendTranslation(f, n, i));
              else {
                  var I = !1,
                      D = !1;
                  if (!this.isValidLookup(f) && void 0 !== i.defaultValue) {
                      if (I = !0, void 0 !== i.count) {
                          var q = this.pluralResolver.getSuffix(l, i.count);
                          f = i["defaultValue".concat(q)]
                      }
                      f || (f = i.defaultValue)
                  }
                  this.isValidLookup(f) || (D = !0, f = s);
                  var B = i.defaultValue && i.defaultValue !== f && this.options.updateMissing;
                  if (D || I || B) {
                      this.logger.log(B ? "updateKey" : "missingKey", l, u, s, B ? i.defaultValue : f);
                      var x = [],
                          H = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
                      if ("fallback" === this.options.saveMissingTo && H && H[0])
                          for (var T = 0; T < H.length; T++) x.push(H[T]);
                      else "all" === this.options.saveMissingTo ? x = this.languageUtils.toResolveHierarchy(i.lng || this.language) : x.push(i.lng || this.language);
                      var P = function(e, n) {
                          r.options.missingKeyHandler ? r.options.missingKeyHandler(e, u, n, B ? i.defaultValue : f, B, i) : r.backendConnector && r.backendConnector.saveMissing && r.backendConnector.saveMissing(e, u, n, B ? i.defaultValue : f, B, i), r.emit("missingKey", e, u, n, f)
                      };
                      if (this.options.saveMissing) {
                          var R = void 0 !== i.count && "string" != typeof i.count;
                          this.options.saveMissingPlurals && R ? x.forEach((function(e) {
                              r.pluralResolver.getPluralFormsOfKey(e, s).forEach((function(n) {
                                  return P([e], n)
                              }))
                          })) : P(x, s)
                      }
                  }
                  f = this.extendTranslation(f, n, i, g), D && f === s && this.options.appendNamespaceToMissingKey && (f = "".concat(u, ":").concat(s)), D && this.options.parseMissingKeyHandler && (f = this.options.parseMissingKeyHandler(f))
              }
              return f
          }
      }, {
          key: "extendTranslation",
          value: function(e, n, i, r) {
              var a = this;
              if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, i, r.usedLng, r.usedNS, r.usedKey, {
                  resolved: r
              });
              else if (!i.skipInterpolation) {
                  i.interpolation && this.interpolator.init(t({}, i, {
                      interpolation: t({}, this.options.interpolation, i.interpolation)
                  }));
                  var o = i.replace && "string" != typeof i.replace ? i.replace : i;
                  this.options.interpolation.defaultVariables && (o = t({}, this.options.interpolation.defaultVariables, o)), e = this.interpolator.interpolate(e, o, i.lng || this.language, i), !1 !== i.nest && (e = this.interpolator.nest(e, (function() {
                      return a.translate.apply(a, arguments)
                  }), i)), i.interpolation && this.interpolator.reset()
              }
              var s = i.postProcess || this.options.postProcess,
                  h = "string" == typeof s ? [s] : s;
              return null != e && h && h.length && !1 !== i.applyPostProcessor && (e = q.handle(h, e, n, this.options && this.options.postProcessPassResolved ? t({
                  i18nResolved: r
              }, i) : i, this)), e
          }
      }, {
          key: "resolve",
          value: function(e) {
              var n, t, i, r, a, o = this,
                  s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return "string" == typeof e && (e = [e]), e.forEach((function(e) {
                  if (!o.isValidLookup(n)) {
                      var h = o.extractFromKey(e, s),
                          u = h.key;
                      t = u;
                      var l = h.namespaces;
                      o.options.fallbackNS && (l = l.concat(o.options.fallbackNS));
                      var c = void 0 !== s.count && "string" != typeof s.count,
                          d = void 0 !== s.context && "string" == typeof s.context && "" !== s.context,
                          g = s.lngs ? s.lngs : o.languageUtils.toResolveHierarchy(s.lng || o.language, s.fallbackLng);
                      l.forEach((function(e) {
                          o.isValidLookup(n) || (a = e, !B["".concat(g[0], "-").concat(e)] && o.utils && o.utils.hasLoadedNamespace && !o.utils.hasLoadedNamespace(a) && (B["".concat(g[0], "-").concat(e)] = !0, o.logger.warn('key "'.concat(t, '" for namespace "').concat(a, '" for languages "').concat(g.join(", "), "\" won't get resolved as namespace was not yet loaded"), "This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((function(t) {
                              if (!o.isValidLookup(n)) {
                                  r = t;
                                  var a, h, l = u,
                                      g = [l];
                                  for (o.i18nFormat && o.i18nFormat.addLookupKeys ? o.i18nFormat.addLookupKeys(g, u, t, e, s) : (c && (a = o.pluralResolver.getSuffix(t, s.count)), c && d && g.push(l + a), d && g.push(l += "".concat(o.options.contextSeparator).concat(s.context)), c && g.push(l += a)); h = g.pop();) o.isValidLookup(n) || (i = h, n = o.getResource(t, e, h, s))
                              }
                          })))
                      }))
                  }
              })), {
                  res: n,
                  usedKey: t,
                  exactUsedKey: i,
                  usedLng: r,
                  usedNS: a
              }
          }
      }, {
          key: "isValidLookup",
          value: function(e) {
              return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
          }
      }, {
          key: "getResource",
          value: function(e, n, t) {
              var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, n, t, i) : this.resourceStore.getResource(e, n, t, i)
          }
      }]), n
  }();

function H(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}
var T = function() {
      function e(n) {
          i(this, e), this.options = n, this.whitelist = this.options.whitelist || !1, this.logger = p.create("languageUtils")
      }
      return a(e, [{
          key: "getScriptPartFromCode",
          value: function(e) {
              if (!e || e.indexOf("-") < 0) return null;
              var n = e.split("-");
              return 2 === n.length ? null : (n.pop(), this.formatLanguageCode(n.join("-")))
          }
      }, {
          key: "getLanguagePartFromCode",
          value: function(e) {
              if (!e || e.indexOf("-") < 0) return e;
              var n = e.split("-");
              return this.formatLanguageCode(n[0])
          }
      }, {
          key: "formatLanguageCode",
          value: function(e) {
              if ("string" == typeof e && e.indexOf("-") > -1) {
                  var n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                      t = e.split("-");
                  return this.options.lowerCaseLng ? t = t.map((function(e) {
                      return e.toLowerCase()
                  })) : 2 === t.length ? (t[0] = t[0].toLowerCase(), t[1] = t[1].toUpperCase(), n.indexOf(t[1].toLowerCase()) > -1 && (t[1] = H(t[1].toLowerCase()))) : 3 === t.length && (t[0] = t[0].toLowerCase(), 2 === t[1].length && (t[1] = t[1].toUpperCase()), "sgn" !== t[0] && 2 === t[2].length && (t[2] = t[2].toUpperCase()), n.indexOf(t[1].toLowerCase()) > -1 && (t[1] = H(t[1].toLowerCase())), n.indexOf(t[2].toLowerCase()) > -1 && (t[2] = H(t[2].toLowerCase()))), t.join("-")
              }
              return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
          }
      }, {
          key: "isWhitelisted",
          value: function(e) {
              return ("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (e = this.getLanguagePartFromCode(e)), !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(e) > -1
          }
      }, {
          key: "getFallbackCodes",
          value: function(e, n) {
              if (!e) return [];
              if ("string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
              if (!n) return e.default || [];
              var t = e[n];
              return t || (t = e[this.getScriptPartFromCode(n)]), t || (t = e[this.formatLanguageCode(n)]), t || (t = e.default), t || []
          }
      }, {
          key: "toResolveHierarchy",
          value: function(e, n) {
              var t = this,
                  i = this.getFallbackCodes(n || this.options.fallbackLng || [], e),
                  r = [],
                  a = function(e) {
                      e && (t.isWhitelisted(e) ? r.push(e) : t.logger.warn("rejecting non-whitelisted language code: ".concat(e)))
                  };
              return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && a(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && a(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && a(this.getLanguagePartFromCode(e))) : "string" == typeof e && a(this.formatLanguageCode(e)), i.forEach((function(e) {
                  r.indexOf(e) < 0 && a(t.formatLanguageCode(e))
              })), r
          }
      }]), e
  }(),
  P = [{
      lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
      nr: [1, 2],
      fc: 1
  }, {
      lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
      nr: [1, 2],
      fc: 2
  }, {
      lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
      nr: [1],
      fc: 3
  }, {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4
  }, {
      lngs: ["ar"],
      nr: [0, 1, 2, 3, 11, 100],
      fc: 5
  }, {
      lngs: ["cs", "sk"],
      nr: [1, 2, 5],
      fc: 6
  }, {
      lngs: ["csb", "pl"],
      nr: [1, 2, 5],
      fc: 7
  }, {
      lngs: ["cy"],
      nr: [1, 2, 3, 8],
      fc: 8
  }, {
      lngs: ["fr"],
      nr: [1, 2],
      fc: 9
  }, {
      lngs: ["ga"],
      nr: [1, 2, 3, 7, 11],
      fc: 10
  }, {
      lngs: ["gd"],
      nr: [1, 2, 3, 20],
      fc: 11
  }, {
      lngs: ["is"],
      nr: [1, 2],
      fc: 12
  }, {
      lngs: ["jv"],
      nr: [0, 1],
      fc: 13
  }, {
      lngs: ["kw"],
      nr: [1, 2, 3, 4],
      fc: 14
  }, {
      lngs: ["lt"],
      nr: [1, 2, 10],
      fc: 15
  }, {
      lngs: ["lv"],
      nr: [1, 2, 0],
      fc: 16
  }, {
      lngs: ["mk"],
      nr: [1, 2],
      fc: 17
  }, {
      lngs: ["mnk"],
      nr: [0, 1, 2],
      fc: 18
  }, {
      lngs: ["mt"],
      nr: [1, 2, 11, 20],
      fc: 19
  }, {
      lngs: ["or"],
      nr: [2, 1],
      fc: 2
  }, {
      lngs: ["ro"],
      nr: [1, 2, 20],
      fc: 20
  }, {
      lngs: ["sl"],
      nr: [5, 1, 2, 3],
      fc: 21
  }, {
      lngs: ["he"],
      nr: [1, 2, 20, 21],
      fc: 22
  }],
  R = {
      1: function(e) {
          return Number(e > 1)
      },
      2: function(e) {
          return Number(1 != e)
      },
      3: function() {
          return 0
      },
      4: function(e) {
          return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
      },
      5: function(e) {
          return Number(0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
      },
      6: function(e) {
          return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
      },
      7: function(e) {
          return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
      },
      8: function(e) {
          return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
      },
      9: function(e) {
          return Number(e >= 2)
      },
      10: function(e) {
          return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
      },
      11: function(e) {
          return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
      },
      12: function(e) {
          return Number(e % 10 != 1 || e % 100 == 11)
      },
      13: function(e) {
          return Number(0 !== e)
      },
      14: function(e) {
          return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
      },
      15: function(e) {
          return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
      },
      16: function(e) {
          return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
      },
      17: function(e) {
          return Number(1 == e || e % 10 == 1 ? 0 : 1)
      },
      18: function(e) {
          return Number(0 == e ? 0 : 1 == e ? 1 : 2)
      },
      19: function(e) {
          return Number(1 == e ? 0 : 0 === e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
      },
      20: function(e) {
          return Number(1 == e ? 0 : 0 === e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
      },
      21: function(e) {
          return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
      },
      22: function(e) {
          return Number(1 === e ? 0 : 2 === e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
      }
  };

function K() {
  var e = {};
  return P.forEach((function(n) {
      n.lngs.forEach((function(t) {
          e[t] = {
              numbers: n.nr,
              plurals: R[n.fc]
          }
      }))
  })), e
}
var F = function() {
      function e(n) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          i(this, e), this.languageUtils = n, this.options = t, this.logger = p.create("pluralResolver"), this.rules = K()
      }
      return a(e, [{
          key: "addRule",
          value: function(e, n) {
              this.rules[e] = n
          }
      }, {
          key: "getRule",
          value: function(e) {
              return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
          }
      }, {
          key: "needsPlural",
          value: function(e) {
              var n = this.getRule(e);
              return n && n.numbers.length > 1
          }
      }, {
          key: "getPluralFormsOfKey",
          value: function(e, n) {
              var t = this,
                  i = [],
                  r = this.getRule(e);
              return r ? (r.numbers.forEach((function(r) {
                  var a = t.getSuffix(e, r);
                  i.push("".concat(n).concat(a))
              })), i) : i
          }
      }, {
          key: "getSuffix",
          value: function(e, n) {
              var t = this,
                  i = this.getRule(e);
              if (i) {
                  var r = i.plurals(i.noAbs ? n : Math.abs(n)),
                      a = i.numbers[r];
                  this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] && (2 === a ? a = "plural" : 1 === a && (a = ""));
                  var o = function() {
                      return t.options.prepend && a.toString() ? t.options.prepend + a.toString() : a.toString()
                  };
                  return "v1" === this.options.compatibilityJSON ? 1 === a ? "" : "number" == typeof a ? "_plural_".concat(a.toString()) : o() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] ? o() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
              }
              return this.logger.warn("no plural rule found for: ".concat(e)), ""
          }
      }]), e
  }(),
  j = function() {
      function e() {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          i(this, e), this.logger = p.create("interpolator"), this.options = n, this.format = n.interpolation && n.interpolation.format || function(e) {
              return e
          }, this.init(n)
      }
      return a(e, [{
          key: "init",
          value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              e.interpolation || (e.interpolation = {
                  escapeValue: !0
              });
              var n = e.interpolation;
              this.escape = void 0 !== n.escape ? n.escape : I, this.escapeValue = void 0 === n.escapeValue || n.escapeValue, this.useRawValueToEscape = void 0 !== n.useRawValueToEscape && n.useRawValueToEscape, this.prefix = n.prefix ? A(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? A(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? A(n.nestingPrefix) : n.nestingPrefixEscaped || A("$t("), this.nestingSuffix = n.nestingSuffix ? A(n.nestingSuffix) : n.nestingSuffixEscaped || A(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = void 0 !== n.alwaysFormat && n.alwaysFormat, this.resetRegExp()
          }
      }, {
          key: "reset",
          value: function() {
              this.options && this.init(this.options)
          }
      }, {
          key: "resetRegExp",
          value: function() {
              var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
              this.regexp = new RegExp(e, "g");
              var n = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
              this.regexpUnescape = new RegExp(n, "g");
              var t = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
              this.nestingRegexp = new RegExp(t, "g")
          }
      }, {
          key: "interpolate",
          value: function(e, n, t, i) {
              var r, a, o, s = this,
                  h = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

              function u(e) {
                  return e.replace(/\$/g, "$$$$")
              }
              var l = function(e) {
                  if (e.indexOf(s.formatSeparator) < 0) {
                      var r = S(n, h, e);
                      return s.alwaysFormat ? s.format(r, void 0, t) : r
                  }
                  var a = e.split(s.formatSeparator),
                      o = a.shift().trim(),
                      u = a.join(s.formatSeparator).trim();
                  return s.format(S(n, h, o), u, t, i)
              };
              this.resetRegExp();
              var c = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler;
              for (o = 0; r = this.regexpUnescape.exec(e);) {
                  if (void 0 === (a = l(r[1].trim())))
                      if ("function" == typeof c) {
                          var d = c(e, r, i);
                          a = "string" == typeof d ? d : ""
                      } else this.logger.warn("missed to pass in variable ".concat(r[1], " for interpolating ").concat(e)), a = "";
                  else "string" == typeof a || this.useRawValueToEscape || (a = b(a));
                  if (e = e.replace(r[0], u(a)), this.regexpUnescape.lastIndex = 0, ++o >= this.maxReplaces) break
              }
              for (o = 0; r = this.regexp.exec(e);) {
                  if (void 0 === (a = l(r[1].trim())))
                      if ("function" == typeof c) {
                          var g = c(e, r, i);
                          a = "string" == typeof g ? g : ""
                      } else this.logger.warn("missed to pass in variable ".concat(r[1], " for interpolating ").concat(e)), a = "";
                  else "string" == typeof a || this.useRawValueToEscape || (a = b(a));
                  if (a = u(this.escapeValue ? this.escape(a) : a), e = e.replace(r[0], a), this.regexp.lastIndex = 0, ++o >= this.maxReplaces) break
              }
              return e
          }
      }, {
          key: "nest",
          value: function(e, n) {
              var i, r, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  o = t({}, a);

              function s(e, n) {
                  var i = this.nestingOptionsSeparator;
                  if (e.indexOf(i) < 0) return e;
                  var r = e.split(new RegExp("".concat(i, "[ ]*{"))),
                      a = "{".concat(r[1]);
                  e = r[0], a = (a = this.interpolate(a, o)).replace(/'/g, '"');
                  try {
                      o = JSON.parse(a), n && (o = t({}, n, o))
                  } catch (s) {
                      return this.logger.warn("failed parsing options string in nesting for key ".concat(e), s), "".concat(e).concat(i).concat(a)
                  }
                  return delete o.defaultValue, e
              }
              for (o.applyPostProcessor = !1, delete o.defaultValue; i = this.nestingRegexp.exec(e);) {
                  if ((r = n(s.call(this, i[1].trim(), o), o)) && i[0] === e && "string" != typeof r) return r;
                  "string" != typeof r && (r = b(r)), r || (this.logger.warn("missed to resolve ".concat(i[1], " for nesting ").concat(e)), r = ""), e = e.replace(i[0], r), this.regexp.lastIndex = 0
              }
              return e
          }
      }]), e
  }(),
  V = function() {
      function e(n, t, r) {
          var a, u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return i(this, e), a = s(this, h(e).call(this)), m.call(o(a)), a.backend = n, a.store = t, a.services = r, a.languageUtils = r.languageUtils, a.options = u, a.logger = p.create("backendConnector"), a.state = {}, a.queue = [], a.backend && a.backend.init && a.backend.init(r, u.backend, u), a
      }
      return l(e, m), a(e, [{
          key: "queueLoad",
          value: function(e, n, t, i) {
              var r = this,
                  a = [],
                  o = [],
                  s = [],
                  h = [];
              return e.forEach((function(e) {
                  var i = !0;
                  n.forEach((function(n) {
                      var s = "".concat(e, "|").concat(n);
                      !t.reload && r.store.hasResourceBundle(e, n) ? r.state[s] = 2 : r.state[s] < 0 || (1 === r.state[s] ? o.indexOf(s) < 0 && o.push(s) : (r.state[s] = 1, i = !1, o.indexOf(s) < 0 && o.push(s), a.indexOf(s) < 0 && a.push(s), h.indexOf(n) < 0 && h.push(n)))
                  })), i || s.push(e)
              })), (a.length || o.length) && this.queue.push({
                  pending: o,
                  loaded: {},
                  errors: [],
                  callback: i
              }), {
                  toLoad: a,
                  pending: o,
                  toLoadLanguages: s,
                  toLoadNamespaces: h
              }
          }
      }, {
          key: "loaded",
          value: function(e, n, t) {
              var i = g(e.split("|"), 2),
                  r = i[0],
                  a = i[1];
              n && this.emit("failedLoading", r, a, n), t && this.store.addResourceBundle(r, a, t), this.state[e] = n ? -1 : 2;
              var o = {};
              this.queue.forEach((function(t) {
                  ! function(e, n, t) {
                      var i = y(e, n, Object),
                          r = i.obj,
                          a = i.k;
                      r[a] = r[a] || [], r[a].push(t)
                  }(t.loaded, [r], a),
                  function(e, n) {
                      for (var t = e.indexOf(n); - 1 !== t;) e.splice(t, 1), t = e.indexOf(n)
                  }(t.pending, e), n && t.errors.push(n), 0 !== t.pending.length || t.done || (Object.keys(t.loaded).forEach((function(e) {
                      o[e] || (o[e] = []), t.loaded[e].length && t.loaded[e].forEach((function(n) {
                          o[e].indexOf(n) < 0 && o[e].push(n)
                      }))
                  })), t.done = !0, t.errors.length ? t.callback(t.errors) : t.callback())
              })), this.emit("loaded", o), this.queue = this.queue.filter((function(e) {
                  return !e.done
              }))
          }
      }, {
          key: "read",
          value: function(e, n, t) {
              var i = this,
                  r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                  o = arguments.length > 5 ? arguments[5] : void 0;
              return e.length ? this.backend[t](e, n, (function(s, h) {
                  s && h && r < 5 ? setTimeout((function() {
                      i.read.call(i, e, n, t, r + 1, 2 * a, o)
                  }), a) : o(s, h)
              })) : o(null, {})
          }
      }, {
          key: "prepareLoading",
          value: function(e, n) {
              var t = this,
                  i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  r = arguments.length > 3 ? arguments[3] : void 0;
              if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
              "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof n && (n = [n]);
              var a = this.queueLoad(e, n, i, r);
              if (!a.toLoad.length) return a.pending.length || r(), null;
              a.toLoad.forEach((function(e) {
                  t.loadOne(e)
              }))
          }
      }, {
          key: "load",
          value: function(e, n, t) {
              this.prepareLoading(e, n, {}, t)
          }
      }, {
          key: "reload",
          value: function(e, n, t) {
              this.prepareLoading(e, n, {
                  reload: !0
              }, t)
          }
      }, {
          key: "loadOne",
          value: function(e) {
              var n = this,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                  i = e.split("|"),
                  r = g(i, 2),
                  a = r[0],
                  o = r[1];
              this.read(a, o, "read", void 0, void 0, (function(i, r) {
                  i && n.logger.warn("".concat(t, "loading namespace ").concat(o, " for language ").concat(a, " failed"), i), !i && r && n.logger.log("".concat(t, "loaded namespace ").concat(o, " for language ").concat(a), r), n.loaded(e, i, r)
              }))
          }
      }, {
          key: "saveMissing",
          value: function(e, n, i, r, a) {
              var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
              this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n) ? this.logger.warn('did not save key "'.concat(i, '" for namespace "').concat(n, '" as the namespace was not yet loaded'), "This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : null != i && "" !== i && (this.backend && this.backend.create && this.backend.create(e, n, i, r, null, t({}, o, {
                  isUpdate: a
              })), e && e[0] && this.store.addResource(e[0], n, i, r))
          }
      }]), e
  }();

function N() {
  return {
      debug: !1,
      initImmediate: !0,
      ns: ["translation"],
      defaultNS: ["translation"],
      fallbackLng: ["dev"],
      fallbackNS: !1,
      whitelist: !1,
      nonExplicitWhitelist: !1,
      load: "all",
      preload: !1,
      simplifyPluralSuffix: !0,
      keySeparator: ".",
      nsSeparator: ":",
      pluralSeparator: "_",
      contextSeparator: "_",
      partialBundledLanguages: !1,
      saveMissing: !1,
      updateMissing: !1,
      saveMissingTo: "fallback",
      saveMissingPlurals: !0,
      missingKeyHandler: !1,
      missingInterpolationHandler: !1,
      postProcess: !1,
      postProcessPassResolved: !1,
      returnNull: !0,
      returnEmptyString: !0,
      returnObjects: !1,
      joinArrays: !1,
      returnedObjectHandler: !1,
      parseMissingKeyHandler: !1,
      appendNamespaceToMissingKey: !1,
      appendNamespaceToCIMode: !1,
      overloadTranslationOptionHandler: function(n) {
          var t = {};
          if ("object" === e(n[1]) && (t = n[1]), "string" == typeof n[1] && (t.defaultValue = n[1]), "string" == typeof n[2] && (t.tDescription = n[2]), "object" === e(n[2]) || "object" === e(n[3])) {
              var i = n[3] || n[2];
              Object.keys(i).forEach((function(e) {
                  t[e] = i[e]
              }))
          }
          return t
      },
      interpolation: {
          escapeValue: !0,
          format: function(e) {
              return e
          },
          prefix: "{{",
          suffix: "}}",
          formatSeparator: ",",
          unescapePrefix: "-",
          nestingPrefix: "$t(",
          nestingSuffix: ")",
          nestingOptionsSeparator: ",",
          maxReplaces: 1e3
      }
  }
}

function M(e) {
  return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e
}

function W() {}
var E = new(function() {
      function n() {
          var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              r = arguments.length > 1 ? arguments[1] : void 0;
          if (i(this, n), e = s(this, h(n).call(this)), m.call(o(e)), e.options = M(t), e.services = {}, e.logger = p, e.modules = {
                  external: []
              }, r && !e.isInitialized && !t.isClone) {
              if (!e.options.initImmediate) return e.init(t, r), s(e, o(e));
              setTimeout((function() {
                  e.init(t, r)
              }), 0)
          }
          return e
      }
      return l(n, m), a(n, [{
          key: "init",
          value: function() {
              var e = this,
                  n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  i = arguments.length > 1 ? arguments[1] : void 0;

              function r(e) {
                  return e ? "function" == typeof e ? new e : e : null
              }
              if ("function" == typeof n && (i = n, n = {}), this.options = t({}, N(), this.options, M(n)), this.format = this.options.interpolation.format, i || (i = W), !this.options.isClone) {
                  p.init(this.modules.logger ? r(this.modules.logger) : null, this.options);
                  var a = new T(this.options);
                  this.store = new D(this.options.resources, this.options);
                  var o = this.services;
                  o.logger = p, o.resourceStore = this.store, o.languageUtils = a, o.pluralResolver = new F(a, {
                      prepend: this.options.pluralSeparator,
                      compatibilityJSON: this.options.compatibilityJSON,
                      simplifyPluralSuffix: this.options.simplifyPluralSuffix
                  }), o.interpolator = new j(this.options), o.utils = {
                      hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                  }, o.backendConnector = new V(r(this.modules.backend), o.resourceStore, o, this.options), o.backendConnector.on("*", (function(n) {
                      for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) i[r - 1] = arguments[r];
                      e.emit.apply(e, [n].concat(i))
                  })), this.modules.languageDetector && (o.languageDetector = r(this.modules.languageDetector), o.languageDetector.init(o, this.options.detection, this.options)), this.modules.i18nFormat && (o.i18nFormat = r(this.modules.i18nFormat), o.i18nFormat.init && o.i18nFormat.init(this)), this.translator = new x(this.services, this.options), this.translator.on("*", (function(n) {
                      for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) i[r - 1] = arguments[r];
                      e.emit.apply(e, [n].concat(i))
                  })), this.modules.external.forEach((function(n) {
                      n.init && n.init(e)
                  }))
              }
              this.modules.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
              var s = ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
              s.forEach((function(n) {
                  e[n] = function() {
                      var t;
                      return (t = e.store)[n].apply(t, arguments)
                  }
              }));
              var h = v(),
                  u = function() {
                      e.changeLanguage(e.options.lng, (function(n, t) {
                          e.isInitialized = !0, e.logger.log("initialized", e.options), e.emit("initialized", e.options), h.resolve(t), i(n, t)
                      }))
                  };
              return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), h
          }
      }, {
          key: "loadResources",
          value: function(e) {
              var n = this,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W,
                  i = t,
                  r = "string" == typeof e ? e : this.language;
              if ("function" == typeof e && (i = e), !this.options.resources || this.options.partialBundledLanguages) {
                  if (r && "cimode" === r.toLowerCase()) return i();
                  var a = [],
                      o = function(e) {
                          e && n.services.languageUtils.toResolveHierarchy(e).forEach((function(e) {
                              a.indexOf(e) < 0 && a.push(e)
                          }))
                      };
                  if (r) o(r);
                  else {
                      var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                      s.forEach((function(e) {
                          return o(e)
                      }))
                  }
                  this.options.preload && this.options.preload.forEach((function(e) {
                      return o(e)
                  })), this.services.backendConnector.load(a, this.options.ns, i)
              } else i(null)
          }
      }, {
          key: "reloadResources",
          value: function(e, n, t) {
              var i = v();
              return e || (e = this.languages), n || (n = this.options.ns), t || (t = W), this.services.backendConnector.reload(e, n, (function(e) {
                  i.resolve(), t(e)
              })), i
          }
      }, {
          key: "use",
          value: function(e) {
              return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && q.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this
          }
      }, {
          key: "changeLanguage",
          value: function(e, n) {
              var t = this;
              this.isLanguageChangingTo = e;
              var i = v();
              this.emit("languageChanging", e);
              var r = function(e) {
                  e && (t.language || (t.language = e, t.languages = t.services.languageUtils.toResolveHierarchy(e)), t.translator.language || t.translator.changeLanguage(e), t.services.languageDetector && t.services.languageDetector.cacheUserLanguage(e)), t.loadResources(e, (function(r) {
                      ! function(e, r) {
                          r ? (t.language = r, t.languages = t.services.languageUtils.toResolveHierarchy(r), t.translator.changeLanguage(r), t.isLanguageChangingTo = void 0, t.emit("languageChanged", r), t.logger.log("languageChanged", r)) : t.isLanguageChangingTo = void 0, i.resolve((function() {
                              return t.t.apply(t, arguments)
                          })), n && n(e, (function() {
                              return t.t.apply(t, arguments)
                          }))
                      }(r, e)
                  }))
              };
              return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(r) : r(e) : r(this.services.languageDetector.detect()), i
          }
      }, {
          key: "getFixedT",
          value: function(n, i) {
              var r = this,
                  a = function n(i, a) {
                      var o;
                      if ("object" !== e(a)) {
                          for (var s = arguments.length, h = new Array(s > 2 ? s - 2 : 0), u = 2; u < s; u++) h[u - 2] = arguments[u];
                          o = r.options.overloadTranslationOptionHandler([i, a].concat(h))
                      } else o = t({}, a);
                      return o.lng = o.lng || n.lng, o.lngs = o.lngs || n.lngs, o.ns = o.ns || n.ns, r.t(i, o)
                  };
              return "string" == typeof n ? a.lng = n : a.lngs = n, a.ns = i, a
          }
      }, {
          key: "t",
          value: function() {
              var e;
              return this.translator && (e = this.translator).translate.apply(e, arguments)
          }
      }, {
          key: "exists",
          value: function() {
              var e;
              return this.translator && (e = this.translator).exists.apply(e, arguments)
          }
      }, {
          key: "setDefaultNamespace",
          value: function(e) {
              this.options.defaultNS = e
          }
      }, {
          key: "hasLoadedNamespace",
          value: function(e) {
              var n = this;
              if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
              if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
              var t = this.languages[0],
                  i = !!this.options && this.options.fallbackLng,
                  r = this.languages[this.languages.length - 1];
              if ("cimode" === t.toLowerCase()) return !0;
              var a = function(e, t) {
                  var i = n.services.backendConnector.state["".concat(e, "|").concat(t)];
                  return -1 === i || 2 === i
              };
              return !!this.hasResourceBundle(t, e) || !this.services.backendConnector.backend || !(!a(t, e) || i && !a(r, e))
          }
      }, {
          key: "loadNamespaces",
          value: function(e, n) {
              var t = this,
                  i = v();
              return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach((function(e) {
                  t.options.ns.indexOf(e) < 0 && t.options.ns.push(e)
              })), this.loadResources((function(e) {
                  i.resolve(), n && n(e)
              })), i) : (n && n(), Promise.resolve())
          }
      }, {
          key: "loadLanguages",
          value: function(e, n) {
              var t = v();
              "string" == typeof e && (e = [e]);
              var i = this.options.preload || [],
                  r = e.filter((function(e) {
                      return i.indexOf(e) < 0
                  }));
              return r.length ? (this.options.preload = i.concat(r), this.loadResources((function(e) {
                  t.resolve(), n && n(e)
              })), t) : (n && n(), Promise.resolve())
          }
      }, {
          key: "dir",
          value: function(e) {
              return e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), e ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr" : "rtl"
          }
      }, {
          key: "createInstance",
          value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = arguments.length > 1 ? arguments[1] : void 0;
              return new n(e, t)
          }
      }, {
          key: "cloneInstance",
          value: function() {
              var e = this,
                  i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W,
                  a = t({}, this.options, i, {
                      isClone: !0
                  }),
                  o = new n(a),
                  s = ["store", "services", "language"];
              return s.forEach((function(n) {
                  o[n] = e[n]
              })), o.translator = new x(o.services, o.options), o.translator.on("*", (function(e) {
                  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) t[i - 1] = arguments[i];
                  o.emit.apply(o, [e].concat(t))
              })), o.init(a, r), o.translator.options = o.options, o
          }
      }]), n
  }()),
  L = [],
  G = L.forEach,
  O = L.slice;

function U(e) {
  return G.call(O.call(arguments, 1), (function(n) {
      if (n)
          for (var t in n) void 0 === e[t] && (e[t] = n[t])
  })), e
}
var Y, Z = {
      name: "cookie",
      lookup: function(e) {
          var n;
          if (e.lookupCookie && "undefined" != typeof document) {
              var t = function(e) {
                  for (var n = e + "=", t = document.cookie.split(";"), i = 0; i < t.length; i++) {
                      for (var r = t[i];
                          " " === r.charAt(0);) r = r.substring(1, r.length);
                      if (0 === r.indexOf(n)) return r.substring(n.length, r.length)
                  }
                  return null
              }(e.lookupCookie);
              t && (n = t)
          }
          return n
      },
      cacheUserLanguage: function(e, n) {
          n.lookupCookie && "undefined" != typeof document && function(e, n, t, i) {
              var r;
              if (t) {
                  var a = new Date;
                  a.setTime(a.getTime() + 60 * t * 1e3), r = "; expires=" + a.toGMTString()
              } else r = "";
              i = i ? "domain=" + i + ";" : "", document.cookie = e + "=" + n + r + ";" + i + "path=/"
          }(n.lookupCookie, e, n.cookieMinutes, n.cookieDomain)
      }
  },
  Q = {
      name: "querystring",
      lookup: function(e) {
          var n;
          if ("undefined" != typeof window)
              for (var t = window.location.search.substring(1).split("&"), i = 0; i < t.length; i++) {
                  var r = t[i].indexOf("=");
                  r > 0 && t[i].substring(0, r) === e.lookupQuerystring && (n = t[i].substring(r + 1))
              }
          return n
      }
  };
try {
  Y = "undefined" !== window && null !== window.localStorage, window.localStorage.setItem("i18next.translate.boo", "foo"), window.localStorage.removeItem("i18next.translate.boo")
} catch (ue) {
  Y = !1
}
var J = {
      name: "localStorage",
      lookup: function(e) {
          var n;
          if (e.lookupLocalStorage && Y) {
              var t = window.localStorage.getItem(e.lookupLocalStorage);
              t && (n = t)
          }
          return n
      },
      cacheUserLanguage: function(e, n) {
          n.lookupLocalStorage && Y && window.localStorage.setItem(n.lookupLocalStorage, e)
      }
  },
  $ = {
      name: "navigator",
      lookup: function() {
          var e = [];
          if ("undefined" != typeof navigator) {
              if (navigator.languages)
                  for (var n = 0; n < navigator.languages.length; n++) e.push(navigator.languages[n]);
              navigator.userLanguage && e.push(navigator.userLanguage), navigator.language && e.push(navigator.language)
          }
          return e.length > 0 ? e : void 0
      }
  },
  X = {
      name: "htmlTag",
      lookup: function(e) {
          var n, t = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
          return t && "function" == typeof t.getAttribute && (n = t.getAttribute("lang")), n
      }
  },
  ee = {
      name: "path",
      lookup: function(e) {
          var n;
          if ("undefined" != typeof window) {
              var t = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
              if (t instanceof Array)
                  if ("number" == typeof e.lookupFromPathIndex) {
                      if ("string" != typeof t[e.lookupFromPathIndex]) return;
                      n = t[e.lookupFromPathIndex].replace("/", "")
                  } else n = t[0].replace("/", "")
          }
          return n
      }
  },
  ne = {
      name: "subdomain",
      lookup: function(e) {
          var n;
          if ("undefined" != typeof window) {
              var t = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
              t instanceof Array && (n = "number" == typeof e.lookupFromSubdomainIndex ? t[e.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : t[0].replace("http://", "").replace("https://", "").replace(".", ""))
          }
          return n
      }
  },
  te = function() {
      function e(n) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          i(this, e), this.type = "languageDetector", this.detectors = {}, this.init(n, t)
      }
      return a(e, [{
          key: "init",
          value: function(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              this.services = e, this.options = U(n, this.options || {}, {
                  order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
                  lookupQuerystring: "lng",
                  lookupCookie: "i18next",
                  lookupLocalStorage: "i18nextLng",
                  caches: ["localStorage"],
                  excludeCacheFor: ["cimode"],
                  checkWhitelist: !0
              }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = t, this.addDetector(Z), this.addDetector(Q), this.addDetector(J), this.addDetector($), this.addDetector(X), this.addDetector(ee), this.addDetector(ne)
          }
      }, {
          key: "addDetector",
          value: function(e) {
              this.detectors[e.name] = e
          }
      }, {
          key: "detect",
          value: function(e) {
              var n = this;
              e || (e = this.options.order);
              var t, i = [];
              if (e.forEach((function(e) {
                      if (n.detectors[e]) {
                          var t = n.detectors[e].lookup(n.options);
                          t && "string" == typeof t && (t = [t]), t && (i = i.concat(t))
                      }
                  })), i.forEach((function(e) {
                      if (!t) {
                          var i = n.services.languageUtils.formatLanguageCode(e);
                          n.options.checkWhitelist && !n.services.languageUtils.isWhitelisted(i) || (t = i)
                      }
                  })), !t) {
                  var r = this.i18nOptions.fallbackLng;
                  "string" == typeof r && (r = [r]), r || (r = []), t = "[object Array]" === Object.prototype.toString.apply(r) ? r[0] : r[0] || r.default && r.default[0]
              }
              return t
          }
      }, {
          key: "cacheUserLanguage",
          value: function(e, n) {
              var t = this;
              n || (n = this.options.caches), n && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || n.forEach((function(n) {
                  t.detectors[n] && t.detectors[n].cacheUserLanguage(e, t.options)
              })))
          }
      }]), e
  }();
te.type = "languageDetector";
const ie = {
      answer_no: "No",
      answer_region_no: "I haven't been to any of the regions mentioned above",
      answer_unknown: "I don't know",
      answer_yes: "Yes",
      app_root_all_rights_reserved: "All rights reserved.",
      app_root_data_privacy_link: "Privacy policy",
      app_root_faq_link: "FAQ",
      app_root_imprint_link: "Imprint",
      app_root_legal_link: "Legal",
      button_continue: "Continue to questions",
      button_delete_qr_code: "Fill out new questionnaire",
      button_show_code: "Display previous QR code",
      button_start_now: "Start questionnaire",
      cookie_bar_accept: "Accept",
      cookie_bar_data_privacy: "privacy policy",
      cookie_bar_reject: "Reject",
      cookie_bar_text: "With your consent, we will analyze your use of the CovApp for scientific research and to improve the CovApp for all users. If you consent to the transmission of analysis data, please click on “Accept”. You can use the CovApp without giving consent to analyze your use of the CovApp. For further information, please visit the",
      cookie_bar_text_dnt: 'To offer you a better browsing experience, we use cookies. We respect your "Do not track" browser setting, analyzing is deactivated.',
      data_privacy_content: '<strong>CovApp – Data Protection Notice (Status: 20.3.2020)</strong>\n\n<strong>1. Data Controller</strong>\n\nThe CovApp is a joint project of Charité - Universitätsmedizin Berlin (responsible for the provision and hosting of the CovApp) and the nonprofit D4L data4life gGmbH.\n\nThe organisation responsible for the processing of personal data is\n\nCharité - University Medicine Berlin\nCharitéplatz 1\n10117 Berlin\nGermany\nPhone: <a href="tel:+493045050">+49 30 45050</a>\nWebsite: <a href="https://www.charite.de/" target="_blank">www.charite.de</a>\n\nIf you have any questions regarding the processing of your personal data, as well as your rights regarding data protection, please contact\n\nPhone: <a href="tel:+4930450580016">+49 30 450580-016</a>\nEmail: <a href="mailto:datenschutz@charite.de">datenschutz(at)charite.de</a>\n\n<strong>2. Which data is collected and how is it processed?</strong>\n\nThe CovApp is used to ask questions about current symptoms, your last trips and possible contacts. These data are not attributed by name.\n\nThe CovApp is a web application. The following data is automatically transferred to the Charité\'s web server, which is operated by D4L data4life gGmbH as a processor on behalf of the Charité, with a computer center in Frankfurt at the subcontractor Amazon Web Services (AWS):\n\n- IP address of the device used for the retrieval\n- Web address (URL) of the page from which the file was requested (referrer)\n- Date and time of the request\n- Data volume transferred\n- Description of the type of web browser used\n\nThe above-mentioned data is not stored after the app has been used, so that no conclusion can be drawn as to the identity of the user.\n\nThe answers to the questions answered in the app and the recommendations for action are stored exclusively locally on the terminal device you use (smartphone, tablet, or PC). This data will – if you wish – be summarized in a QR code. You can show this QR code when being tested for COVID-19, at a doctor\'s or hospital to facilitate the collection of the necessary anamnesis data.\n\nYou can delete the data stored by CovApp on your terminal device at any time by clicking "Delete answers" at the end of the questionnaire. \n\n<strong>3. For what purposes and on what legal basis are the data processed?</strong>\n\nThe CovApp is intended to make it easier for users to assess for themselves whether there is a need for further clarification regarding a COVID-19 infection and offers concrete recommendations for action. The app thus serves to combat the current COVID-19 pandemic. The legal basis of the processing is Article 6.1. lit. d) and e), Art. 9. 2 c), h), i) of the General Data Protection Regulation in conjunction with § 14.1.3 of the Berlin Data Protection Act.\n\nIn all other respects, the Charité\'s data protection declaration applies, available at <a href="https://www.charite.de/service/datenschutz/" target="_blank">https://www.charite.de/service/datenschutz/</a>',
      data_privacy_headline: "Privacy policy",
      disclaimer_headline: "Disclaimer",
      disclaimer_paragraph_1: "Dear users,\nThe coronavirus pandemic is changing, and in the future, we will only test people in Germany who meet the following criteria:\n<ul><li>People who have had contact with infected individuals and have symptoms</li><li>People belonging to risk groups and those having pre-existing conditions that may intensify the severity of COVID-19 disease</li><li>People who could further spread the coronavirus</li></ul>\nIf you have used the app in the past, you will notice that the assessment is now different. We will continue to update our protocols in accordance with relevant authorities and institutional recommendations. For this, we are working closely with the Robert Koch Institute and the Federal Ministry of Health.\n\nThe main message is: Please stay at home and do your part to help slow down the spread.\n\n<strong>Legal disclaimer</strong>\nUsage of this app <strong>does not substitute medical treatment</strong> by a physician or clinical diagnostics. The CovApp serves to improve the procedures at the Charité examination centre and other outpatient clinics in connection with the novel coronavirus SARS-CoV-2. If you currently feel seriously ill, please seek medical help.",
      disclaimer_paragraph_2: "This website uses cookies, which are necessary for the function of the website. Personal data is not stored and no conclusions regarding the identity of the user can be made.",
      disclaimer_sub_headline_1: "Remarks regarding usage of cookies",
      faq_content: '<strong>About the coronavirus</strong>\nThe scientific term for the novel coronavirus is „SARS-CoV-2“. This virus can cause a respiratory disease. The name of this disease is called „COVID-19“. Because the infectious disease COVID-19 has already spread across countries and continents, it\'s referred to as a pandemic.\n\n<strong>Transmission</strong>\nThe new coronavirus is transmitted via droplet infection. It can directly be transferred between humans, when droplets containing the virus get into the respiratory system after they are absorbed via the lining of the mouth and nose or via the conjunctiva of the eye. But an indirect infection is also possible, when droplets are transmitted via the hands to the mucosa of mouth, nose and eyes. Symptoms occur 5 to 6, at most 14 days, after infection.\u2028\n\n<strong>Symptoms</strong>\nAfter an infection with the coronavirus, the disease runs a mild course and is not life-threatening for most people. This extends to pregnant women and children. There can be flu-like symptoms, such as a dry cough, fatigue and fever. Furthermore, some patients suffer from a sore throat, headaches, limb pain and chills. Currently it’s been assumed that 4 in 5 cases run a mild course. Though in some patients the infection can have a serious course, causing respiratory distress and bilateral pneumonia. This mostly affects elderly persons or people with chronic diseases such as cardiovascular diseases, chronic lung disease, diabetes, high blood pressure, or cancer. Those severe cases have to be treated in intensive care in a hospital.\n\n<strong>Solidarity</strong>\nAlthough there is a very good healthcare system available in Germany, it is not prepared for a rapid increase in intensive care patients. But if it is possible to prolong an increase in severe cases, treatment of infected patients will continue to be available. This can only be done if every citizen practices social distancing. As a precautionary measure, especially for the elderly generation and the chronically ill, everyone should take the situation seriously and avoid social contact as much as possible. But please, provide for elderly and chronically ill relatives or neighbors and living alone or persons in need with food and daily life essentials. Be considerate and attentive for their needs and worries. Communicate with each other – but stay at least 1.5 meters apart. Act in solidarity.\n\n<strong>Protection</strong>\nTo slow down the spreading of the virus, avoid direct contact, for example when meeting someone. Wash your hands regularly and thoroughly, at least 20 seconds with soap and water. Keep as much distance as possible when coughing or sneezing – turn away from other people. Sneeze into a sleeve or a tissue, which you throw into a bin immediately. Don’t share something you touched with your mouth, like a glass or a bottle, with someone else. Stay at home.\n\n<strong>Therapy</strong>\nThe therapy of the infection depends on the severity of the disease. Mild cases don’t have to be treated and can get well at home. Severe pneumonia has to be treated, for example with oxygen treatment, fluid substitution or antibiotics to treat bacterial co-infections. This mostly has to be done in a hospital.\n\n<strong>Vaccination</strong>\nResearchers are currently working on developing a vaccine. Right now, there is no vaccination available which protects against the new coronavirus.\n\n<strong>Suchen Sie sich Hilfe</strong>\nThe Violence against women support Hotline : <a href="tel:+498000116116">0800 116 116</a>\n Crisis Hotline: <a href="tel:+498001110111">0800 111 0 111</a> oder <a href="tel:+498001110222">0800 111 0 222</a>\n\n<strong>Stay informed</strong>\nThe <a href="https://www.bundesgesundheitsministerium.de/coronavirus.html" target="_blank">German Ministry of Health</a> regularly updates the information on the coronavirus.\n\nCharité researcher Prof. Dr. Christian Drosten keeps you up-to-date on the <a href="https://www.ndr.de/nachrichten/info/Corona-Podcast-Alle-Folgen-in-der-Uebersicht,podcastcoronavirus134.html" target="_blank">NDR podcast</a>',
      faq_headline: "FAQ Coronavirus",
      found_code: "A QR code was found",
      imprint_content: '<strong>Provider </strong>\nCharité – Universitätsmedizin Berlin\nPostal address: Charitéplatz 1, 10117 Berlin \nDie Charité – Universitätsmedizin Berlin is a public-law institution. It is legally represented by the chairman of the board.\n\n<strong>Contact</strong>\nSend an email to <a href="mailto:covapp@charite.de">covapp@charite.de</a> for any praise, notes, or criticism\nInternet: <a href="https://www.charite.de" target="_blank">https://www.charite.de</a>\n\n<strong>Responsible person in terms of media law</strong>\nProf. Dr. Heyo K. Kroemer, The Chairman of the Board of Charité – Universitätsmedizin Berlin \n\nResponsible Content:\nProject Lead: Dr. Valerie Kirchberger, M. Sc.\nHead of Product: Dipl. Kffr. Claudia Hartmann\n\nResponsible Software development:\nHead Charité: Dr. Alexander H. Thieme M. Sc.\nSAP Integration: Peter Heumann\n\nCovApp Team: Antonia Rollwage, Peter Gocke\n\n<strong>Regulatory authority </strong>\nThe Governing Mayor of Berlin – Senate Chancellery Higher Education and Research \nContact: <a href="https://www.berlin.de/rbmskzl/" target="_blank">https://www.berlin.de/rbmskzl/</a>\n\nSenate Chancellery Health, Care and Equality\n<a href="https://www.berlin.de/sen/gpg/" target="_blank">https://www.berlin.de/sen/gpg/</a>\n\nSales tax number – Identification number: DE 228847810',
      imprint_headline: "Imprint",
      input_date_error: "Invalid date. Please try again.",
      input_date_error_future: "The date must not be in the future.",
      input_date_help: "Ensure to enter a full date in the DD MM YYYY format that isn’t in the future. For example, 09 03 2020",
      input_date_label: "Please enter the date",
      input_date_label_day: "Day",
      input_date_label_month: "Month",
      input_date_label_year: "Year",
      input_date_placeholder_day: "DD",
      input_date_placeholder_month: "MM",
      input_date_placeholder_year: "YYYY",
      legal_first_paragraph: "<p><strong>Legal notice</strong></p><p>Disclaimer</p><p><strong>General notice </strong></p><p>The use of this app does not replace medical treatment. If you are currently feeling seriously ill, please seek medical treatment immediately. The digital application is not an application that provides diagnostic services. The application serves to simplify the procedures in care.</p><p><strong>Liability for contents </strong></p><p>As a service provider, we are responsible for our own contents according to § 7 (1) TMG (German Telemedia Act). According to §§ 8 to 10 TMG, we, as a service provider, are not obligated to monitor third party information transmitted or stored. Obligations to remove or block the use of information according to general laws remain unaffected.</p><p><strong>Liability for links </strong></p><p>Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the sites is always responsible for the contents of the linked sites. </p><p><strong>Copyright</strong></p><p>The contents and works created by the service provider on these pages are subject to German copyright law. The reproduction, editing, distribution and any kind of use outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use. Insofar as the operator did not create the content on this site, the copyrights of third parties are respected. In particular, content of third parties is marked as such. Nevertheless, should you become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such contents immediately.</p>",
      legal_headline: "Legal",
      logo_header_label: "In partnership with",
      navigation_header_back_button_label: "Navigate back",
      q_A_option0: "Under 40",
      q_A_option1: "40-50",
      q_A_option2: "51-60",
      q_A_option3: "61-70",
      q_A_option4: "71-80",
      q_A_option5: "Over 80",
      q_A_text: "How old are you?",
      q_A0_comment: "The question relates to cold symptoms and excludes chronic runny nose, seasonal or allergy-related runny nose. If you have chronic sniffling, please compare your current conditions with your existing problems.",
      q_A0_text: "In the past 24 hours, have you had a runny nose?",
      q_A1_comment: "If you have a chronic bowel disease, please compare your current bowel symptoms to your bowel patterns under your existing medical condition.",
      q_A1_text: "In the past 24 hours, have you had diarrhea?",
      q_A2_text: "In the past 24 hours, have you had a sore throat?",
      q_A3_text: "In the past 24 hours, have you had a headache?",
      q_A5_text: "Have you been diagnosed with chronic lung disease by a doctor?",
      q_A6_text: "Have you been diagnosed with diabetes by a doctor?",
      q_A7_text: "Have you been diagnosed with heart disease by a doctor?",
      q_A8_text: "Have you been diagnosed with adipositas (obesity) by a doctor?",
      q_A9_text: "Are you pregnant?",
      q_B_option0: "Living alone",
      q_B_option1: "Living together with family, in a shared flat, or in a supervised community facility",
      q_B_text: "What is your current living situation?",
      q_B0_text: "Are you currently taking steroids?",
      q_B1_comment: "You take or get immunosuppresives after an organ transplant, in the therapy of an autoimmune disease, or during chemotherapy.",
      q_B1_text: "Are you currently taking immunosuppressants?",
      q_B2_text: "Have you been vaccinated against flu between October 2019 and today?",
      q_B7_comment: "Check the box if you:\n<ul><li>Become breathless faster than usual or have difficulty breathing with light loads, such as a walk or climbing a short flight of stairs</li><li>Experience difficulty breathing or shortness of breath when sitting or lying down</li><li>Have a feeling of breathlessness/shortness of breath when getting up from bed or a chair</li></ul>\n\nIf you have chronic lung disease, compare your current breathing problems with your existing breathing problems.",
      q_B7_text: "In the past 24 hours, did you feel that you were more quickly out of breath than usual?",
      q_B8_text: "What day was the last contact?",
      q_B9_text: "With regard to all questions about symptoms: since when have you had the symptoms you specified?",
      q_C_option0: "In the medical field",
      q_C_option1: "In a community facility (school, day care center, university, home etc.)",
      q_C_option2: "No, in none of the above",
      q_C_text: "Do you work in one of the following areas?",
      q_D_text: "Do you smoke?",
      q_P1_text: "Are you 65 years old or older?",
      q_P3_comment: "Care services or support that you provide in connection with your professional activity are not meant.",
      q_P3_text: "At least once a week, do you privately care for people with age-related conditions, chronic illnesses, or frailty?",
      q_Q_comment: 'Close contact with a confirmed case means:\n<ul><li>Face-to-face contact for longer than 15 minutes</li><li>Direct, physical contact (touching, shaking hands, kissing)</li><li>Being within 1.5 meters of the person for more than 15 minutes</li><li>Contact with or exchange of body fluids</li><li>Living in the same apartment</li></ul>\n\nChoose "no" if you have worn adequate protective measures (mask, smock) on contact.',
      q_Q_text: "Have you had close contact with a confirmed case?",
      q_SD_text: "Have you had any taste and/or smell loss in the last 24 hours?",
      q_T_text: "Have you had a fever (over 38°C) in the past 24 hours?",
      q_U_text: "Have you had a fever (over 38°C) in the past 4 days?",
      q_V_option0: "Under 38°C",
      q_V_option1: "38°C",
      q_V_option2: "39°C",
      q_V_option3: "40°C",
      q_V_option4: "41°C",
      q_V_option5: "42°C",
      q_V_option6: "More than 42°C",
      q_V_option7: "I don't know",
      q_V_text: "What was the highest temperature, approx.?",
      q_W_text: "In the past 24 hours, have you had chills?",
      q_X_text: "In the past 24 hours, have you felt tired or worn out?",
      q_Y_text: "In the past 24 hours, have you had body aches?",
      q_Z_comment: "The question relates to cold symptoms and excludes chronic cough, seasonal or allergy-related cough.\nIf you have a chronic cough, please compare your current coughing to your regular problems.",
      q_Z_text: "In the past 24 hours, have you had a persistent cough?",
      qr_code_button_reset: "Delete answers",
      qr_code_headline: "Your personal summary",
      qr_code_hide_answers: "Hide answers",
      qr_code_paragraph: "Below, you find a summary of your answers as a table and as a QR code.\n\nPlease save the following QR code and the summary of your answers if you received the recommendation to present yourself at a testing site. If possible, print the summary and, if applicable, show it at the testing site.\n\nIf you need to leave home: Please keep a distance of at least 1.5 meters from other people, do not touch anything, and try to contain coughing and sneezing without affecting others.",
      qr_code_print: "Print",
      qr_code_show_answers: "Show answers",
      questionnaire_button_generate_qr: "Complete questionnaire",
      questionnaire_button_next: "Next",
      recommendation_case_1_additonal_info: "<strong>Charité Virchow Wedding</strong>\nMittelallee 1 \nOpen daily 8 AM to 4 PM  \n\n<strong>Evangelisches Krankenhaus Königin Elisabeth Herzberge (KEH)</strong>\nHerzbergstraße 79, 10365 Berlin \nMon-Fri 10 AM to 7 PM, Sat/Sun 10 AM to 5 PM\n\n<strong>DRK Kliniken Berlin Westend</strong>\nSpandauer Damm 130, 14050 Berlin \nMon-Fri 9 AM to 3 PM\n\n<strong>Coronavirus outpatient clinic Havelhöhe Community Hospital, building 16</strong>\nHaus 16, Kladower Damm 221, Spandau \nTesting site: Mon-Fri 9 AM to 5 PM, Hotline: Mon-Fri 8 AM to 6 PM and Sat/Sun 9 AM to 3:30 PM",
      recommendation_case_1_emoji_label: "Red circle",
      recommendation_case_1_headline: "Get in touch",
      recommendation_case_1_hide_info: "Hide testing sites",
      recommendation_case_1_show_info: "Show testing sites",
      recommendation_case_1_text: 'You had contact with a confirmed case and reported symptoms of the disease that could be explained by a coronavirus infection.\n\nPlease contact your local health department or call a local public hotline to learn how to corona virus testing is organized in your area.\nYou can find contact information for the regional health authorities on the <a href="https://tools.rki.de/PLZTool/" target="_blank">Robert Koch Institute website</a>\n\n<strong>For residents of Berlin:</strong>\nPlease contact the hotline of the Senate Department of Health (Tel. <a href="tel:+493090282828">030 90282828</a>) or make an appointment for the <a href="https://app.samedi.de/practices/40qpj1s185nermhp/api/booking-widget/vcdirekt?category_id=73198&event_type_id=211636">Charité\'s video consultation service</a>. You can also visit one of the in-person testing sites. Please plan for long waiting times.\n\nAccording to the recommendations of the Robert Koch Institute, it would make sense for you to be tested. However, there is no entitlement to a test. The decision whether you should be tested is a medical one and may also depend on on-site test capacities.',
      recommendation_case_2_headline: "Please take care of yourself at home.",
      recommendation_case_2_text: 'The symptoms you mentioned may appear consistent with those of a coronavirus infection.\n\nAccording to the current recommendations of the Robert Koch Institute, an examination for the coronavirus is currently not recommended for you since the contact with a confirmed case was more than 14 days ago or you had no contact with a confirmed case.\n\nIt is best for you to stay at home, focus on your recovery and reduce direct personal contacts.\n\nIf your symptoms become more severe in the next few days or if you are unsure what to do, please first contact your general practitioner or the medical on-call service (<a href="tel:+49116117">116117</a>). Alternatively, you are welcome to make an appointment for the <a href="https://app.samedi.de/practices/40qpj1s185nermhp/api/booking-widget/vcdirekt?category_id=73198&event_type_id=211636">Charité\'s video consultation service</a> or make an appointment using your mobile phone with KRY: <a href="https://kry.de/redirect?campaign=charite_app-link-mar2020-corona" target="_blank">https://kry.de</a>. (KRY is a external provider. You will be redirected to a third-party website, for which the Charité has no responsibility).\n\n<strong>For residents of Berlin:</strong>\nYou are welcome to make an appointment for the <a href="https://app.samedi.de/practices/40qpj1s185nermhp/api/booking-widget/vcdirekt?category_id=73198&event_type_id=211636" target="_blank">Charité\'s video consultation service</a> or contact the Senate Department of Health hotline (Tel. <a href="tel:+493090282828">030 90282828</a>).',
      recommendation_case_3_emoji_label: "Orange circle",
      recommendation_case_3_headline: "Stay at home and get healthy",
      recommendation_case_3_text: 'You had contact with a person infected with the coronavirus within the past 14 days, but you currently have no symptoms. In your situation, a screening for the coronavirus is currently not recommended because a possible negative test result does not reliably rule out infection.\n\nPlease stay at home. If you develop (cold/flu) symptoms in the next few days, you can use this tool again to check for new recommendations given your symptom profile and history.\n\nIf you are unsure what to do or have any further questions, please contact your general practitioner or the medical on-call service (<a href="tel:+49116117">116117</a>). You are welcome to make an appointment for the <a href="https://app.samedi.de/practices/40qpj1s185nermhp/api/booking-widget/vcdirekt?category_id=73198&event_type_id=211636" target="_blank">Charité\'s video consultation service</a> or make an appointment using your mobile phone with KRY: <a href="https://kry.de/redirect?campaign=charite_app-link-mar2020-corona" target="_blank">https://kry.de</a>. (KRY is a external provider. You will be redirected to a third-party website, for which the Charité has no responsibility).\n\n<strong>For residents of Berlin:</strong>\nYou are welcome to make an appointment for the <a href="https://app.samedi.de/practices/40qpj1s185nermhp/api/booking-widget/vcdirekt?category_id=73198&event_type_id=211636" target="_blank">Charité\'s video consultation service</a> or contact the Senate Department of Health hotline (Tel. <a href="tel:+493090282828">030 90282828</a>).',
      recommendation_case_4_emoji_label: "Yellow circle",
      recommendation_case_4_headline: "Please stay at home and follow the general hygiene recommendations.",
      recommendation_case_4_text: 'According to the current recommendations of the Robert Koch Institute, an examination for the coronavirus is currently not recommended for you, since the contact with a confirmed case was more than 14 days ago or you had no contact with a confirmed case. \n\nPlease stay at home, allow yourself to recover, and avoid unnecessary contacts with other people.\n\nIf your symptoms get worse in the next few days or you feel unsure, please contact your general practitioner or the medical on-call service (<a href="tel:+49116117">116117</a>). Alternatively, you are welcome to make an appointment for the <a href="https://app.samedi.de/practices/40qpj1s185nermhp/api/booking-widget/vcdirekt?category_id=73198&event_type_id=211636" target="_blank">Charité\'s video consultation service</a> or make an appointment using your mobile phone with KRY: <a href="https://kry.de/redirect?campaign=charite_app-link-mar2020-corona" target="_blank">https://kry.de</a>. (KRY is a external provider. You will be redirected to a third-party website, for which the Charité has no responsibility).\n\n<strong>For residents of Berlin:</strong>\nYou are welcome to make an appointment for the <a href="https://app.samedi.de/practices/40qpj1s185nermhp/api/booking-widget/vcdirekt?category_id=73198&event_type_id=211636" target="_blank">Charité\'s video consultation service</a> or contact the Senate Department of Health hotline (Tel. <a href="tel:+493090282828">030 90282828</a>).',
      recommendation_case_5_emoji_label: "Green circle",
      recommendation_case_5_headline: "Please stay at home",
      recommendation_case_5_text: 'Currently, you don\'t need to do anything, because:\n<ul><li>You didn\'t have contact to a verified case</li><li>You don\'t have symptoms</li></ul>\nTo keep the risk of infection low, please pay more attention to good hand hygiene.\n\nAvoid unnecessary contacts with other people and stay at home if possible. When you leave the house, maintain a sufficient distance (at least 1.5 meters) from other people and follow the <a href="https://www.infektionsschutz.de/coronavirus/verhalten.html" target="_blank">rules of conduct to protect against infection</a>\n\nIf you develop (cold/flu) symptoms in the next few days, you can use this tool again to check for new recommendations given your symptom profile and history.\n\nFurther helpful information can be found on: <a href="https://www.zusammengegencorona.de" target="_blank">ZusammenGegenCorona.de</a>',
      risk_spreading_caring_for_relatives: "<strong>You indicated that you take care of one or more relatives. </strong>\nPlease discuss how to proceed with your general practitioner and try to maintain a safe physical distance from your relative(s) in care.",
      risk_spreading_living_alone: '<strong>You reported that you live alone.</strong>\nWe advise you to call a trusted person on a daily basis to discuss your current condition and any potential worsening of symptoms.\n\nPlease inquire with neighbors, family members, and friends whether they are able to help you. If this isn\'t possible, you can contact volunteers in your area or do research on the Internet (e.g., using the "Corona Neighborhood Help" search term). ',
      risk_spreading_living_together: "<strong>You reported that you do not live alone. </strong>\nWhen possible, please stay in your own room.",
      risk_spreading_paragraphs: '<strong>General notes</strong>\nWhen you leave the house, keep enough distance (at least 1.5 meters) from other people and follow the rules of conduct for <a href="https://www.infektionsschutz.de/coronavirus/verhalten.html" target="_blank">protection against infection</a>.\n\nPlease avoid unnecessary contact with other people and stay at home if possible.\n\nFurther helpful information can be found on: <a href="https://www.zusammengegencorona.de" target="_blank">ZusammenGegenCorona.de</a>',
      risk_spreading_workspace_medical: "<strong>You are working in the medical field</strong>\nPlease inform your employer of your contact or current symptoms and discuss further measures to protect the people around you and your colleagues.",
      risk_very_ill_above_sixty_five: '<strong>You reported shortness of breath.</strong>\nPlease call your general practitioner or the medical on-call service <a href="tel:+49116117">(+49 116 117)</a>. If your shortness of breath becomes severe, please seek medical help. \n\nPlease check in daily with a trusted person about your current condition and any potential worsening of symptoms.',
      risk_very_ill_below_sixty_five: '<strong>You reported shortness of breath.</strong>\nPlease call your general practitioner or the medical on-call service <a href="tel:+49116117">(116117)</a>. If your shortness of breath becomes severe, please seek medical help. ',
      start_headline: "Recommendations and information regarding coronavirus",
      start_legal_paragraph: "<strong>This application is not an application that provides diagnostic services. The application serves to simplify the procedures in care.</strong>",
      start_paragraph_1_option_1: "Contacts to services in Berlin",
      start_paragraph_1_option_2: "Decision support for doctor's visit or coronavirus test",
      start_paragraph_1_option_3: "Information to reduce your risk",
      start_paragraph_1_option_4: "Optimize the patient flow",
      start_paragraph_2: '<p>The CovApp is software developed by Charité in cooperation with Data4Life. You can use it to get recommendations for action in just a few minutes. The app asks you several questions including symptoms and potential contacts. Besides recommendations for action, relevant contacts, and structured results, the purpose of the app is to guide you safely through the various health care offers and, if necessary, to show you the way to hospitals or to examination centers. Please note that this app does not provide diagnostic services.</p> \n<p>In this way, the CovApp can help you to better assess your medical condition, provide recommendations regarding doctor’s visits or coronavirus testing, and summarize relevant medical information for future doctor’s consultation. </p><p><h3 class="o-headline-3">How can I use the CovApp? </h3></p>\n<p><strong>1. Start the survey by clicking "Start questionnaire"</strong></p><p>The survey contains questions regarding your current symptoms and contact history.  \nCompleting the survey takes approximately 5 minutes. Please try to answer the questions as precisely as possible.</p>\n<p><strong>2. Survey and recommendations</strong></p><p>At the end of the survey, the CovApp summarizes your answers and provides you with a recommendation for action, for example: <ul><li>Advice to contact the public hotline for coronavirus</li><li>Advice to contact your general practitioner</li><li>Advice on social distancing</li></ul></p>\n<p><strong>3. Preparation for doctor’s visit</strong></p><p>When you\'re given the advice for a doctor’s visit or a visit to one of the coronavirus testing sites, please bring the QR code or print the summary presented. Some coronavirus testing sites (like the Charité) can scan the code so that your answers are made directly available to our medical staff and can be used for your consultation. This helps to speed up the process of the medical interview. \nIf visiting your local physician or any other coronavirus testing site, please print the summary provided and bring it along to your consultation.</p>',
      start_paragraph_3: "<p>The survey is evaluated anonymously, and all information is processed on your device (for example, your smartphone). None of your answers will be forwarded to us, our server, or any third party. </p>",
      start_paragraph_4: "<p>The use of this app does not qualify as medical treatment. If you currently feel seriously ill, please seek medical help.</p>",
      start_sub_headline_1: "Prepare your doctor's visit",
      start_sub_headline_2: "What is the CovApp?",
      start_sub_headline_3: "Which data will be transmitted through the internet?",
      start_sub_headline_4: "If in doubt, call a doctor!"
  },
  re = {
      answer_no: "Nein",
      answer_region_no: "Ich war in keiner der genannten Regionen",
      answer_unknown: "Ich weiß es nicht",
      answer_yes: "Ja",
      app_root_all_rights_reserved: "Alle Rechte vorbehalten.",
      app_root_data_privacy_link: "Datenschutzerklärung",
      app_root_faq_link: "FAQ",
      app_root_imprint_link: "Impressum",
      app_root_legal_link: "Rechtliches",
      button_continue: "Weiter zu den Fragen",
      button_delete_qr_code: "Fragebogen neu ausfüllen",
      button_show_code: "Erstellten QR-Code anzeigen",
      button_start_now: "Fragebogen starten",
      cookie_bar_accept: "Akzeptieren",
      cookie_bar_data_privacy: "Datenschutzerklärung",
      cookie_bar_reject: "Ablehnen",
      cookie_bar_text: "Mit Ihrer Einwilligung analysieren wir Ihre Nutzung zu wissenschaftlichen Zwecken und zur Verbesserung der CovApp. Wenn Sie in die Übermittlung von Analysedaten einwilligen möchten, klicken Sie bitte auf „Akzeptieren”. Sie können die CovApp auch ohne Einwilligung in die Analyse Ihrer Nutzung der CovApp nutzen. Weitere Informationen finden Sie in der ",
      cookie_bar_text_dnt: 'Für eine bessere Nutzererfahrung verwenden wir Cookies. Ihre "Do not track"-Browsereinstellung wird hierbei berücksichtigt und es findet keine Analyse statt.',
      data_privacy_content: '<strong>Hinweise zum Datenschutz bei der CovApp der Charité (Stand: 20.3.2020)</strong>\n\n<strong>1. Verantwortlichkeit</strong>\n\nDie CovApp ist ein Gemeinschaftsprojekt der Charité – Universitätsmedizin Berlin (Verantwortlich für die Bereitstellung und das Hosting der CovApp) und der gemeinnützigen D4L data4life gGmbH.\n\nFür die Verarbeitung personenbezogener Daten verantwortlich ist die\n\nCharité – Universitätsmedizin Berlin\nCharitéplatz 1\n10117 Berlin\nDeutschland\nTel: <a href="tel:+493045050">+49 (0) 30 450 50</a>\nWebsite: <a href="https://www.charite.de/" target="_blank">www.charite.de</a>\n\nBei Fragen zur Verarbeitung Ihrer personenbezogenen Daten, sowie zu Ihren Rechten rund um den Datenschutz, wenden Sie sich bitte an:\nTelefon: <a href="tel:+4930450580016">+49 (0) 30 450 580 016</a>\nE-Mail: <a href="mailto:datenschutz@charite.de">datenschutz(at)charite.de</a>\n\n<strong>2. Welche Daten werden erhoben und wie werden sie verarbeitet?</strong>\n\nMit der CovApp werden Fragen nach aktuellen Symptomen, Ihren letzten Reisen und möglichen Kontakten gestellt. Eine namentliche Zuordnung dieser Daten erfolgt nicht.\n\nBei der CovApp handelt es sich um Web-Anwendung. Dabei werden die folgenden Daten automatisch an den Web-Server der Charité, der im Auftrag der Charité von D4L data4life gGmbH als Auftragsverarbeiter betrieben wird, mit einem Rechenzentrum in Frankfurt bei dem Unterauftragsverarbeiter Amazon Web Services (AWS), übertragen:\n\n- IP-Adresse des beim Abruf verwendeten Geräts\n- Web-Adresse (URL) der Seite, von der aus die Datei angefordert wurde (Referrer)\n- Datum und Uhrzeit der Anforderung\n- Übertragene Datenmenge\n- Beschreibung des Typs des verwendeten Webbrowsers\n\nDie oben genannten Daten werden nach der Verwendung der App nicht gespeichert, sodass kein Rückschluss auf die Identität des Nutzers/der Nutzerin möglich ist.\n\nDie Antworten auf die in der App beantworteten Fragen und die Handlungsempfehlungen werden ausschließlich lokal auf dem von Ihnen genutzten Endgerät (Smartphone, Tablet oder PC) gespeichert. Diese Daten werden – sofern Sie dies wünschen – in einem QR-Code zusammengefasst. Sie können diesen QR-Code beim Durchführen eines Tests auf COVID-19 bei einem Arzt oder Krankenhaus vorzeigen, um die Erfassung von erforderlichen Anamnesedaten zu erleichtern.\n\nSie können die durch die CovApp auf ihrem Endgerät gespeicherten Daten jederzeit löschen, indem Sie am Ende des Fragebogens „Antworten löschen“ anklicken. \n\n<strong>3. Zu welchen Zwecken und auf welcher Rechtsgrundlage werden die Daten verarbeitet?</strong>\n\nDie CovApp soll es den Nutzerinnen und Nutzern erleichtern, selbst einzuschätzen, ob ein weiterer Abklärungsbedarf hinsichtlich einer COVID-19-Infektion besteht und bietet konkrete Handlungsempfehlungen. Die App dient damit der Bekämpfung der aktuellen COVID-19-Pandemie. Rechtsgrundlage der Verarbeitung sind Artikel 6 Abs. 1 Satz 1 lit. d) und e), Art. 9 Abs. 2 lit c), h), i) Datenschutz-Grundverordnung in Verbindung mit § 14 Abs. 1 Nr. 3 Berliner Datenschutzgesetz.\n\n<strong>Im übrigen gilt die Datenschutzerklärung der Charité, abrufbar unter:</strong>\n<a href="https://www.charite.de/service/datenschutz/" target="_blank">https://www.charite.de/service/datenschutz/</a>',
      data_privacy_headline: "Datenschutzerklärung",
      disclaimer_headline: "Hinweis",
      disclaimer_paragraph_1: "Liebe Benutzerinnen und Benutzer,\ndie Coronavirus-Pandemie ändert sich und wir werden in Zukunft in Deutschland vorrangig nur noch Personen testen, die folgende Kriterien erfüllen:\n<ul><li>Personen mit Kontakt zu Infizierten und mit Symptomen</li><li>Personen mit Risiken und Vorerkrankungen, die auf eine schwere COVID-19-Erkrankung hindeuten könnten</li><li>Personen, die das Coronavirus verbreiten könnten</li></ul>\nFalls Sie die App bereits genutzt haben, werden Sie merken, dass sich die Bewertung geändert hat. Dies geschieht auch weiterhin nach Angaben der relevanten Behörden und Institutionen. Hierzu arbeiten wir eng mit dem Robert Koch-Institut und dem Bundesgesundheitsministerium zusammen.\n\nDie wichtigste Botschaft für Sie ist: Bleiben Sie zu Hause und helfen Sie so, die Ausbreitung zu verlangsamen.\n\n<strong>Rechtlicher Hinweis</strong>\nDie Nutzung dieser App ersetzt keine ärztliche Behandlung und erbringt keine diagnostische Leistung. Die CovApp dient der Verbesserung der Handlungsabläufe in der Untersuchungsstelle der Charité und anderen Ambulanzen im Zusammenhang mit dem neuartigen Coronavirus SARS-CoV-2. Wenn Sie sich aktuell schwer krank fühlen, rufen Sie umgehend einen Arzt/Ärztin an.",
      disclaimer_paragraph_2: "Diese Website verwendet einen Cookie, welcher zur Handhabung der Website erforderlich ist. Persönliche Daten, die einen Rückschluss auf Ihre Person zulassen, werden nicht gespeichert.",
      disclaimer_sub_headline_1: "Hinweis auf die Verwendung von Cookies",
      faq_content: '<strong>Über das Coronavirus</strong>\nDie wissenschaftliche Bezeichnung des neuartigen Coronavirus lautet „SARS-CoV-2“. Dieses Virus kann eine Atemwegserkrankung auslösen. Diese Erkrankung trägt den Namen „COVID-19“. Weil sich die Infektionskrankheit COVID-19 bereits über Länder und Kontinente hinweg ausgebreitet hat, spricht man von einer Pandemie.\n \n<strong>Die Übertragung</strong>\nDas neuartige Coronavirus wird über die sogenannte Tröpfcheninfektion übertragen. Dies kann direkt von Mensch zu Mensch geschehen, wenn virushaltige Tröpfchen über die Mund- oder Nasenschleimhaut oder die Augenbindehaut in die Atemwege gelangen. Aber auch eine indirekte Ansteckung ist möglich, wenn Tröpfchen über die Hände mit den Schleimhäuten in Kontakt kommen. Krankheitszeichen treten im Durchschnitt nach 5 bis 6, maximal 14 Tagen nach einer Ansteckung auf.\n \n<strong>Die Krankheitszeichen</strong>\nWenn es zu einer Infektion mit dem Coronavirus gekommen ist, verläuft diese für die die meisten Menschen leicht und ist nicht lebensbedrohlich. Das gilt auch für Schwangere und Kinder. Leichte Krankheitszeichen können grippeähnliche Symptome wie trockener Husten, Abgeschlagenheit und Fieber sein. Darüber hinaus leiden einige Patientinnen und Patienten unter Halskratzen, Kopf- und Gliederschmerzen und Schüttelfrost. Derzeit geht man davon aus, dass 4 von 5 Infektionen mild verlaufen. Bei einigen Betroffenen kann das Virus jedoch zu einem schwereren Verlauf mit Atemproblemen bis hin zur beidseitigen Lungenentzündung führen. Hier handelt es sich oftmals um ältere Menschen und Patientinnen und Patienten mit Vorerkrankungen wie Herz-Kreislauf-Erkrankungen, chronischen Atemwegserkrankungen, Diabetes, Bluthochdruck oder Krebs. Diese schweren Fälle müssen intensivmedizinisch im Krankenhaus behandelt werden.\n\n<strong>Solidarität</strong>\nObwohl Deutschland über ein sehr gutes Gesundheitssystem verfügt, ist dieses nicht auf einen steilen Anstieg insbesondere der intensiv medizinisch zu betreuenden Patientinnen und Patienten eingestellt. Gelingt es aber, den Anstieg schwerer Erkrankungen über einen längeren Zeitraum hinauszuzögern, werden Infizierte auch weiterhin gut versorgt werden können. Darum liegt das Hauptaugenmerk derzeit auf einer Entschleunigung der Infektionsrate. Dies kann nur gelingen, wenn alle Bürgerinnen und Bürger auf räumliche Distanz gehen. Zum Schutz, insbesondere der älteren Generation und chronisch Kranker, sollten alle darum die Situation ernst nehmen und soziale Kontakte so weit wie möglich einschränken. Versorgen Sie aber bitte ältere, hochbetagte oder chronisch kranke Angehörige oder Nachbarn und alleinstehende, hilfsbedürftige Menschen mit Lebensmitteln und Dingen des täglichen Bedarfs. Haben Sie ein offenes Ohr für ihre Sorgen und kommunizieren Sie miteinander – aber halten Sie dabei bitte mindestens 1,5 Meter Abstand. Handeln Sie solidarisch.\n\n<strong>Schutz</strong>\nUm die Verbreitung des Coronavirus zu entschleunigen, vermeiden Sie unbedingt Berührungen beispielsweise bei der Begrüßung und waschen Sie Ihre Hände regelmäßig und gründlich mindestens 20 Sekunden lang mit Wasser und Seife. Halten Sie beim Husten oder Niesen größtmöglichen Abstand – drehen Sie sich einfach von ihrem Gegenüber weg. Niesen Sie in die Armbeuge oder in ein Papiertaschentuch, das Sie danach immer entsorgen. Vermeiden Sie es, mit ihren Händen Mund, Augen oder Nase zu berühren. Teilen Sie Gegenstände, die Sie mit Ihrem Mund berühren, wie z.B. Tassen oder Flaschen, nicht mit anderen Personen. Bleiben Sie daheim.\n \n<strong>Therapie</strong>\nDie Behandlung der Infektion richtet sich nach der Schwere des Krankheitsbildes. Milde Fälle müssen nicht behandelt und können daheim auskuriert werden. Schwerere Lungenentzündungen werden z.B. durch die Gabe von Sauerstoff, den Ausgleich des Flüssigkeitshaushalts oder Antibiotikagabe zur Behandlung von bakteriellen Begleitinfektionen behandelt. Dies geschieht meistens im Krankenhaus.\n \n<strong>Impfung</strong>\nEs wird an der Entwicklung eines Impfstoffes gearbeitet. Momentan steht jedoch noch kein Impfstoff zur Verfügung, der vor dem neuartigen Coronavirus schützt.\n\n<strong>Suchen Sie sich Hilfe</strong>\n Hilfetelefon "Gewalt gegen Frauen": <a href="tel:+498000116116">0800 116 116</a>\n Telefonseelsorge: <a href="tel:+498001110111">0800 111 0 111</a> oder <a href="tel:+498001110222">0800 111 0 222</a>\n Elterntelefon: <a href="tel:+498001110550">0800 111 0 550</a>\n "Nummer gegen Kummer" für Kinder und Jugendliche: <a href="tel:+49116111">116 111</a>\n \n<strong>Bleiben Sie informiert</strong>\nDas <a href="https://www.bundesgesundheitsministerium.de/coronavirus.html" target="_blank">Bundesministerium für Gesundheit</a> aktualisiert regelmäßig die Information zum Coronavirus.\n\nDer Charité-Wissenschaftler Prof. Dr. Christian Drosten hält sie im <a href="https://www.ndr.de/nachrichten/info/Corona-Podcast-Alle-Folgen-in-der-Uebersicht,podcastcoronavirus134.html" tarrget="_blank">NDR-Podcast</a> auf dem Laufenden.',
      faq_headline: "FAQ Coronavirus",
      found_code: "Es wurde ein QR-Code gefunden",
      imprint_content: '<strong>Anbieter</strong>\nCharité – Universitätsmedizin Berlin\nZentrale Postanschrift: Charitéplatz 1, 10117 Berlin\nDie Charité – Universitätsmedizin Berlin ist eine Körperschaft des Öffentlichen Rechts. Sie wird durch den Vorstandsvorsitzenden gesetzlich vertreten.\n\n<strong>Kontakt</strong>\nFür Hinweise, Lob und Kritik schreiben Sie uns bitte eine E-Mail an: <a href="mailto:covapp@charite.de">covapp@charite.de</a>\nInternet: <a href="https://www.charite.de" target="_blank">https://www.charite.de</a>\n\n<strong>Verantwortlicher im Sinne des Medienrechts</strong>\nProf. Dr. Heyo K. Kroemer, der Vorstandsvorsitzende der Charité – Universitätsmedizin Berlin\n\nVerantwortlich für Inhalte:\nProjektleitung: Dr. Valerie Kirchberger, M. Sc.\nHead of Product: Dipl. Kffr. Claudia Hartmann\n\nVerantwortlich Software Entwicklung:\nHead Charité: Dr. Alexander H. Thieme M. Sc.\nSAP Integration: Peter Heumann\n\nCovApp Team: Antonia Rollwage, Peter Gocke\n\n<strong>Zuständige Aufsichtsbehörde</strong>\nDer Regierende Bürgermeister von Berlin – inkl. Wissenschaft und Forschung \nKontakt: <a href="https://www.berlin.de/rbmskzl/" target="_blank">https://www.berlin.de/rbmskzl/</a>\n\nSenatsverwaltung für Gesundheit, Pflege und Gleichstellung \nKontakt: <a href="https://www.berlin.de/sen/gpg/" target="_blank">https://www.berlin.de/sen/gpg/</a>\n\nUmsatzsteuer-Identifikationsnummer: DE 228847810',
      imprint_headline: "Impressum",
      input_date_error: "Ungültiges Datum. Bitte versuchen Sie es erneut.",
      input_date_error_future: "Das Datum darf nicht in der Zukunft liegen.",
      input_date_help: "Achten Sie darauf, ein vollständiges Datum im Format TT MM JJJJ einzugeben, das nicht in der Zukunft liegt. Beispiel: 09 03 2020",
      input_date_label: "Bitte geben Sie das Datum ein",
      input_date_label_day: "Tag",
      input_date_label_month: "Monat",
      input_date_label_year: "Jahr",
      input_date_placeholder_day: "TT",
      input_date_placeholder_month: "MM",
      input_date_placeholder_year: "JJJJ",
      legal_first_paragraph: "<p><strong>Rechtliche Hinweise </strong></p><p>Haftungsausschluss (Disclaimer) </p><p><strong>Allgemeiner Hinweis</strong></p><p>Die Nutzung dieser App ersetzt keine ärztliche Behandlung. Wenn Sie sich aktuell schwer krank fühlen, suchen Sie bitte umgehend medizinische Hilfe. </p><p><strong>Haftung für Inhalte </strong></p><p>Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Dienstanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. </p><p><strong>Haftung für Links</strong></p><p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. </p><p><strong>Urheberrecht </strong></p><p>Die durch den Dienstanbieter erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>",
      legal_headline: "Rechtliches",
      logo_header_label: "In Zusammenarbeit mit",
      navigation_header_back_button_label: "Navigieren Sie zurück",
      q_A_option0: "Jünger als 40",
      q_A_option1: "40-50",
      q_A_option2: "51-60",
      q_A_option3: "61-70",
      q_A_option4: "71-80",
      q_A_option5: "Über 80",
      q_A_text: "Wie alt sind Sie?",
      q_A0_comment: "Die Frage bezieht sich auf Erkältungssymptome und schließt chronischen Schnupfen oder saisonalen bzw. allergischen Schnupfen aus. Sollten Sie einen chronischen Schnupfen haben, vergleichen Sie für die Beantwortung der Frage Ihre derzeitigen Beschwerden mit Ihren bisherigen Problemen.",
      q_A0_text: "Hatten Sie in den letzten 24 Std. Schnupfen?",
      q_A1_comment: "Sollten Sie eine chronische Darmerkrankung haben, vergleichen Sie für die Beantwortung der Frage Ihre derzeitigen Beschwerden mit Ihren bisherigen Problemen.",
      q_A1_text: "Hatten Sie in den letzten 24 Std. Durchfall?",
      q_A2_text: "Hatten Sie in den letzten 24 Std. Halsschmerzen?",
      q_A3_text: "Hatten Sie in den letzten 24 Std. Kopfschmerzen?",
      q_A5_text: "Wurde bei Ihnen durch einen Arzt/einer Ärztin eine chronische Lungenerkrankung festgestellt?",
      q_A6_text: "Wurde bei Ihnen durch einen Arzt/einer Ärztin Diabetes festgestellt?",
      q_A7_text: "Wurde bei Ihnen durch einen Arzt/einer Ärztin eine Herzerkrankung festgestellt?",
      q_A8_text: "Wurde bei Ihnen durch einen Arzt/einer Ärztin Adipositas (Fettsucht) festgestellt?",
      q_A9_text: "Sind Sie schwanger?",
      q_B_option0: "Allein wohnend",
      q_B_option1: "Zusammen mit Familie, in einer Wohngemeinschaft oder betreuten Gemeinschaftseinrichtung",
      q_B_text: "Wie ist Ihre aktuelle Wohnsituation?",
      q_B0_text: "Nehmen Sie aktuell Cortison ein (in Tablettenform)?",
      q_B1_comment: "Immunsuppresiva nehmen oder bekommen Sie nach einer Organtransplantation, während der Therapie einer Autoimmunerkrankung oder im Rahmen einer Chemotherapie.",
      q_B1_text: "Nehmen Sie aktuell Immunsuppressiva?",
      q_B2_text: "Haben Sie sich im Zeitraum von Oktober 2019 bis heute gegen Grippe impfen lassen?",
      q_B7_comment: 'Wählen Sie "Ja", wenn Sie: \n<ul><li>Bei leichten Belastungen, wie einem Spaziergang oder dem Steigen weniger Treppenstufen schneller als sonst kurzatmig werden oder Schwierigkeiten beim Atmen haben</li><li>Das Gefühl der Atemnot/Luftnot oder Kurzatmigkeit beim Sitzen oder Liegen verspüren</li><li>Beim Aufstehen aus dem Bett oder vom Stuhl das Gefühl der Atemnot/Luftnot haben</li></ul>\n\nSollten Sie eine chronische Lungenerkrankung haben, vergleichen Sie Ihre derzeitigen Beschwerden im Hinblick auf Ihre Atmung mit Ihren bisherigen Atemproblemen.',
      q_B7_text: "Sind Sie in den letzten 24 Std. schneller außer Atem als sonst?",
      q_B8_text: "An welchem Tag war der letzte Kontakt?",
      q_B9_text: "Bezogen auf alle Fragen zu Symptomen: Seit wann haben Sie die von Ihnen angegebenen Symptome?",
      q_C_option0: "Im medizinischen Bereich",
      q_C_option1: "In einer Gemeinschaftseinrichtung (Schule, Kita, Universität, Heim etc.)",
      q_C_option2: "Nein, in keinem der genannten Bereiche",
      q_C_text: "Sind Sie in einem der folgenden Bereiche tätig?",
      q_D_text: "Rauchen Sie?",
      q_P1_text: "Sind Sie 65 Jahre oder älter?",
      q_P3_comment: "Nicht gemeint sind Pflegeleistungen oder Unterstützung, die Sie im Zusammenhang mit Ihrer beruflichen Tätigkeit erbringen.",
      q_P3_text: "Pflegen oder unterstützen Sie privat mindestens einmal pro Woche eine oder mehrere Personen mit altersbedingten Beschwerden, chronischen Erkrankungen oder Gebrechlichkeit?",
      q_Q_comment: 'Enger Kontakt mit einem bestätigten Fall bedeutet:\n<ul><li>Kontakt von Angesicht zu Angesicht länger als 15 Minuten</li><li>Direkter, physischer Kontakt (Berührung, Händeschütteln, Küssen)</li><li>Länger als 15 Minuten direkt neben einer infizierten Person (weniger als 1,5 Meter) verbracht</li><li>Kontakt mit oder Austausch von Körperflüssigkeiten</li><li>Teilen einer Wohnung</li></ul>\n\nFalls Sie Kontakt hatten, aber adäquate Schutzmaßnahmen (Maske, Kittel) getragen haben, wählen Sie "Nein".',
      q_Q_text: "Hatten Sie engen Kontakt zu einem bestätigten Fall?",
      q_SD_text: "Hatten sie in den letzten 24 Std. Geschmacks- und/oder Geruchsverlust?",
      q_T_text: "Hatten Sie in den letzten 24 Std. Fieber (über 38°C)?",
      q_U_text: "Hatten Sie in den letzten 4 Tagen Fieber (über 38°C) ?",
      q_V_option0: "Weniger als 38°C",
      q_V_option1: "38°C",
      q_V_option2: "39°C",
      q_V_option3: "40°C",
      q_V_option4: "41°C",
      q_V_option5: "42°C",
      q_V_option6: "Über 42°C",
      q_V_option7: "Ich weiß es nicht",
      q_V_text: "Wie hoch war die höchste Temperatur ca.?",
      q_W_text: "Hatten Sie in den letzten 24 Std. Schüttelfrost?",
      q_X_text: "Haben Sie sich in den letzten 24 Std. schlapp oder abgeschlagen gefühlt?",
      q_Y_text: "Hatten Sie in den letzten 24 Std. Gliederschmerzen?",
      q_Z_comment: "Die Frage bezieht sich auf Erkältungssymptome und schließt chronischen Husten oder saisonalen bzw. allergischen Husten aus. Sollten Sie chronischem Husten haben, vergleichen Sie für die Beantwortung der Frage Ihre derzeitigen Beschwerden mit Ihren bisherigen Problemen.",
      q_Z_text: "Hatten Sie in den letzten 24 Std. anhaltenden Husten?",
      qr_code_button_reset: "Antworten löschen",
      qr_code_headline: "Zusammenfassung Ihrer Antworten",
      qr_code_hide_answers: "Antworten ausblenden",
      qr_code_paragraph: "Folgend finden Sie eine Übersicht Ihrer Antworten als Tabelle und QR-Code.\n\nFalls Sie den Hinweis erhalten haben, sich in einer Untersuchungsstelle vorzustellen, speichern Sie bitte den folgenden QR-Code und die Zusammenfassung der Fragen. Wenn möglich, drucken Sie die Zusammenfassung aus und zeigen Sie diese vor.\n\nWenn Sie das Haus verlassen, halten Sie ausreichend Abstand (mindestens 1,5 Meter) zu anderen Personen. Fassen Sie möglichst nichts an, und achten Sie auf die Regeln für richtiges Husten und Niesen.",
      qr_code_print: "Drucken",
      qr_code_show_answers: "Antworten anzeigen",
      questionnaire_button_generate_qr: "Fragebogen abschließen",
      questionnaire_button_next: "Weiter",
      recommendation_case_1_additonal_info: "<strong>Charité-Standort Virchow in Wedding</strong>\nMittelallee 1 \nGeöffnet täglich 8 bis 16 Uhr\n\n<strong>Evangelisches Krankenhaus Königin Elisabeth Herzberge in Lichtenberg </strong>\nHerzbergstraße 79, 10365 Berlin \nMo-Fr: 10 bis 19 Uhr, Sa/So: 10 bis 17 Uhr\n\n<strong>DRK Kliniken Berlin Westend (Ambulantes Diagnostikzentrum)</strong>\nSpandauer Damm 130, 14050 Berlin\nMo-Fr: 9 bis 15 Uhr\n\n<strong>Coronavirus-Ambulanz im Gemeinschaftskrankenhaus Havelhöhe</strong>\nHaus 16, Kladower Damm 221, Spandau \nMo-Fr von 9 bis 17 Uhr geöffnet. Die Telefonhotline ist von Mo-Fr von 8 bis 18 Uhr und Sa/So 9 bis 15:30 Uhr besetzt.",
      recommendation_case_1_emoji_label: "Roter Kreis",
      recommendation_case_1_headline: "Melden Sie sich",
      recommendation_case_1_hide_info: "Untersuchungsstellen ausblenden",
      recommendation_case_1_show_info: "Untersuchungsstellen anzeigen",
      recommendation_case_1_text: 'Sie hatten Kontakt zu einem bestätigten Fall und geben Krankheitssymptome an, die durch eine Coronavirus-Infektion erklärt werden könnten.\n\nBitte wenden Sie sich an Ihr zuständiges Gesundheitsamt oder eine lokale, öffentliche Hotline um zu erfahren, wie in Ihrer Region Untersuchungen auf das Coronavirus organisiert werden. \nKontaktinformationen zu den regionalen Gesundheitsämtern finden Sie auf der <a href="https://tools.rki.de/PLZTool/" target="_blank">Website des Robert Koch-Instituts</a>.\n\n<strong>Für Berliner Bürgerinnen und Bürger:</strong>\nBitte melden Sie sich bei der Hotline der Senatsgesundheitsverwaltung (Tel. <a href="tel:+493090282828">030 90282828</a>) oder vereinbaren Sie für eine individuelle Beratung  einen Termin in der <a href="https://app.samedi.de/practices/40qpj1s185nermhp/api/booking-widget/vcdirekt?category_id=73198&event_type_id=211636">Video-Sprechstunde der Charité</a>. Sie können sich in einer der Untersuchungsstellen vorstellen. Bitte rechnen Sie mit langen Wartezeiten.\n\nNach den Empfehlungen des Robert Koch-Instituts wäre bei Ihnen ein Test sinnvoll. Es besteht jedoch kein Anspruch auf einen Test. Dies wäre eine ärztliche Entscheidung und kann auch von Testkapazitäten vor Ort abhängen.',
      recommendation_case_2_headline: "Kurieren Sie sich aus und bleiben Sie daheim.",
      recommendation_case_2_text: 'Die von Ihnen genannten Symptome können bei einer Coronavirus-Infektion auftreten.\n\nNach den aktuellen Empfehlungen des Robert Koch-Instituts wird eine Untersuchung auf das Coronavirus derzeit nicht empfohlen, da Ihr letzter Kontakt zu einem bestätigten Fall mehr als 14 Tage zurückliegt oder Sie keinen Kontakt zu einem bestätigtem Fall hatten.\n\nBleiben Sie am besten zu Hause, kurieren Sie sich aus und reduzieren Sie direkte persönliche Kontakte.\n\nSollten Ihre Symptome in den nächsten Tagen stärker werden oder Sie sich unsicher fühlen, dann melden Sie sich zunächst telefonisch bei Ihrem Hausarzt oder dem Ärztlichen Bereitschaftsdienst der KV (Tel: <a href="tel:+49116117">116117</a>). Möglich wäre auch einen Termin in der <a href="https://app.samedi.de/practices/40qpj1s185nermhp/api/booking-widget/vcdirekt?category_id=73198&event_type_id=211636" target="_blank">Video-Sprechstunde der Charité</a> zu vereinbaren oder in einer Video-Sprechstunde bspw. <a href="https://kry.de/redirect?campaign=charite_app-link-mar2020-corona" target="_blank">von KRY</a> zu vereinbaren. (Sie werden zu einer externen Website weitergeleitet, die nicht von der Charité verantwortet wird).\n\n<strong>Für Berliner Bürgerinnen und Bürger:</strong>\nGerne können Sie einen Termin in der <a href="https://app.samedi.de/practices/40qpj1s185nermhp/api/booking-widget/vcdirekt?category_id=73198&event_type_id=211636" target="_blank">Video-Sprechstunde der Charité</a> vereinbaren oder sich bei der Hotline der Senatsgesundheitsverwaltung (Tel. <a href="tel:+493090282828">030 90282828</a>) melden.',
      recommendation_case_3_emoji_label: "Orange Kreis",
      recommendation_case_3_headline: "Bleiben Sie zu Hause und kurieren Sie sich aus.",
      recommendation_case_3_text: 'Sie hatten innerhalb der letzten 14 Tage Kontakt zu einer mit dem Coronavirus infizierten Person, haben aber aktuell keine Symptome. Eine Untersuchung auf das Coronavirus wird aktuell nicht empfohlen, da ein mögliches negatives Testergebnis eine Infektion nicht sicher ausschließt.\n\nBitte bleiben Sie zu Hause. Sollten Sie in den nächsten Tagen (Erkältungs-)Symptome entwickeln, können Sie Ihr persönliches Risiko mit dem Fragebogen erneut überprüfen.\n\nSollten Sie sich unsicher fühlen oder weitere Fragen haben, dann melden Sie sich zunächst telefonisch bei Ihrem Hausarzt oder dem Ärztlichen Bereitschaftsdienst (<a href="tel:+49116117">116117</a>). Möglich wäre auch einen Termin in der <a href="https://app.samedi.de/practices/40qpj1s185nermhp/api/booking-widget/vcdirekt?category_id=73198&event_type_id=211636" target="_blank">Video-Sprechstunde der Charité</a> zu vereinbaren oder in einer Video-Sprechstunde bspw. <a href="https://kry.de/redirect?campaign=charite_app-link-mar2020-corona" target="_blank">von KRY</a> zu vereinbaren. (Sie werden zu einer externen Website weitergeleitet, die nicht von der Charité verantwortet wird).\n\n\n<strong>Für Berliner Bürgerinnen und Bürger:</strong>\nGerne können Sie einen Termin in der <a href="https://app.samedi.de/practices/40qpj1s185nermhp/api/booking-widget/vcdirekt?category_id=73198&event_type_id=211636" target="_blank">Video-Sprechstunde der Charité</a> vereinbaren oder sich bei der Hotline der Senatsgesundheitsverwaltung (Tel. <a href="tel:+493090282828">030 90282828</a>) melden.',
      recommendation_case_4_emoji_label: "Gelber Kreis",
      recommendation_case_4_headline: "Bleiben Sie zu Hause und befolgen Sie die allgemeinen Hygienehinweise.",
      recommendation_case_4_text: 'Nach den aktuellen Empfehlungen des Robert Koch-Instituts wird eine Untersuchung auf das Coronavirus derzeit nicht empfohlen, da Ihr letzter Kontakt zu einem bestätigten Fall mehr als 14 Tage zurückliegt oder Sie keinen Kontakt zu einem bestätigtem Fall hatten. \n\nSollten Ihre Symptome in den nächsten Tagen stärker werden oder Sie sich unsicher fühlen, dann melden Sie sich zunächst telefonisch bei Ihrem Hausarzt oder dem Ärztlichen Bereitschaftsdienst (<a href="tel:+49116117">116117</a>). Möglich wäre auch einen Termin in der <a href="https://app.samedi.de/practices/40qpj1s185nermhp/api/booking-widget/vcdirekt?category_id=73198&event_type_id=211636" target="_blank">Video-Sprechstunde der Charité</a> zu vereinbaren oder in einer Video-Sprechstunde bspw.  <a href="https://kry.de/redirect?campaign=charite_app-link-mar2020-corona" target="_blank">von KRY</a> zu vereinbaren. (Sie werden zu einer externen Website weitergeleitet, die nicht von der Charité verantwortet wird).\n\n\n<strong>Für Berliner Bürgerinnen und Bürger:</strong>\nGerne können Sie einen Termin in der <a href="https://app.samedi.de/practices/40qpj1s185nermhp/api/booking-widget/vcdirekt?category_id=73198&event_type_id=211636" target="_blank">Video-Sprechstunde der Charité</a> vereinbaren oder sich bei der Hotline der Senatsgesundheitsverwaltung (Tel. <a href="tel:+493090282828">030 90282828</a>) melden.',
      recommendation_case_5_emoji_label: "Grüner Kreis",
      recommendation_case_5_headline: "Bleiben Sie daheim",
      recommendation_case_5_text: 'Es besteht derzeit kein Handlungsbedarf für Sie, da Sie:\n<ul><li>Keinen Kontakt zu einem bestätigten Fall hatten</li><li>Keine Symptome haben</li></ul>\nUm das Ansteckungsrisiko gering zu halten, achten Sie weiterhin verstärkt auf gute Händehygiene.\n\nVermeiden Sie unnötige Kontakte zu anderen Personen und bleiben Sie nach Möglichkeit zu Hause. Wenn Sie das Haus verlassen, halten Sie ausreichend Abstand (mindestens 1,5 Meter) zu anderen Personen und achten Sie auf die <a href="https://www.infektionsschutz.de/hygienetipps/hygiene-beim-husten-und-niesen/#c6375" target="_blank">Verhaltensregeln zum Infektionsschutz</a>. \n\nSollten Sie in den nächsten Tagen (Erkältungs-)Symptome entwickeln, könnten Sie Ihr persönliches Risiko mit dem Fragebogen erneut überprüfen.\n\nWeitere hilfreiche Informationen finden Sie auf: <a href="https://www.zusammengegencorona.de" target="_blank">ZusammenGegenCorona.de</a>',
      risk_spreading_caring_for_relatives: "<strong>Sie geben an, einen Angehörigen zu pflegen. </strong>\nBitte klären Sie das weitere Vorgehen mit Ihrem zuständigen Hausarzt telefonisch ab und halten Sie Abstand zu Ihrem zu pflegenden Angehörigen.",
      risk_spreading_living_alone: '<strong>Sie geben an alleine zu wohnen.</strong>\nWir raten Ihnen, täglich mit einer vertrauten Person zu telefonieren, mit der Sie eine eventuelle Verschlechterung der Symptome besprechen können.\n\nBitte erkundigen Sie sich bei Nachbarn, Familienangehörigen oder Freunden, ob sie Ihnen helfen können. Falls dies nicht möglich ist, können Sie sich an ehrenamtlich Helfende in ihrem Umkreis wenden, oder im Internet recherchieren (z.B unter dem Suchbegriff "Corona Nachbarschaftshilfe"). ',
      risk_spreading_living_together: "<strong>Sie geben an, zusammen mit anderen Personen zu leben.</strong>\nBitte bleiben Sie wenn möglich in Ihrem Zimmer. ",
      risk_spreading_paragraphs: '<strong>Allgemeine Hinweise</strong>\nWenn Sie das Haus verlassen, halten Sie ausreichend Abstand (mindestens 1,5 Meter) zu anderen Personen und achten Sie auf die <a href="https://www.infektionsschutz.de/coronavirus/verhalten.html" target="_blank">Verhaltensregeln zum Infektionsschutz</a>.\n\nBitte vermeiden Sie unnötige Kontakte zu anderen Personen und bleiben Sie nach Möglichkeit zu Hause.\n\nWeitere hilfreiche Informationen finden Sie auf: <a href="https://www.zusammengegencorona.de/" target="_blank">ZusammenGegenCorona.de</a>',
      risk_spreading_workspace_medical: "<strong>Sie arbeiten im medizinischen Bereich</strong>\nBitte Informieren Sie Ihren Arbeitgeber über etwaigen Kontakt oder Ihre aktuellen Symptome und sprechen Sie die weiteren Maßnahmen zum Schutz der Personen in Ihrem Umfeld sowie Ihrer Kolleginnen und Kollegen ab.",
      risk_very_ill_above_sixty_five: '<strong>Sie geben an, unter Atemnot zu leiden. </strong>\nBitte melden Sie sich telefonisch bei Ihrem Hausarzt oder dem Ärztlichen Bereitschaftsdienst <a href="tel:+49116117">(+49 116 117)</a>. Bei stärker werden der Atemnot holen Sie sich bitte ärztliche Hilfe.\n\nBitte tauschen Sie sich täglich mit einer nahestehenden Person über Ihr Befinden aus.',
      risk_very_ill_below_sixty_five: '<strong>Sie geben an, unter Atemnot zu leiden.</strong>\nBitte melden Sie sich telefonisch bei Ihrem Hausarzt oder dem Ärztlichen Bereitschaftsdienst <a href="tel:+49116117">(116117)</a>. Bei stärker werden der Atemnot holen Sie sich bitte ärztliche Hilfe.',
      start_headline: "Handlungsempfehlungen und Informationen zum Coronavirus",
      start_legal_paragraph: "<strong>Bei der digitalen Anwendung handelt es sich nicht um eine Anwendung, die diagnostische Leistungen erbringt. Die Anwendung dient der Vereinfachung der Handlungsabläufe in der Versorgung.</strong>",
      start_paragraph_1_option_1: "Ansprechpartner und Kontakte für Berlin",
      start_paragraph_1_option_2: "Entscheidungshilfe bezüglich Arztbesuch oder Coronavirus-Test",
      start_paragraph_1_option_3: "Verhaltensweisen zur Reduzierung des Infektionsrisikos",
      start_paragraph_1_option_4: "Optimierung der Patientenströme",
      start_paragraph_2: '<p>Die CovApp ist eine von der Charité in Zusammenarbeit mit Data4Life entwickelte Software, mit der Sie innerhalb weniger Minuten einen Fragenkatalog beantworten und daraus spezifische Handlungsempfehlungen erhalten. Dafür werden Ihnen Fragen nach aktuellen Symptomen und möglichen Kontakten gestellt. Diese App erbringt keine diagnostischen Leistungen. Sie erhalten aber nach Beantwortung des Fragenkatalogs konkrete Handlungsempfehlungen, Ansprechpartner und Kontakte sowie eine Zusammenfassung Ihrer Daten. Ziel ist es, Sie sicher durch die verschiedenen Angebote der Gesundheitsversorgung zu lotsen und Ihnen ggf. den Weg in Krankenhäuser oder zu Untersuchungsstellen aufzuzeigen.</p><p>So kann Ihnen die CovApp helfen, die Notwendigkeit eines Arztbesuches oder Coronavirus-Tests besser einzuschätzen. Die medizinisch relevanten Informationen für ein etwaiges Arztgespräch werden am Ende für Sie zusammengefasst.</p><p><h3 class="o-headline-3">Wie nutze ich die CovApp?</h3></p>\n<p><strong>1. Starten Sie die Befragung durch Klicken auf „Fragebogen starten“</strong></p>\n<p>Der Fragebogen nimmt ca. 5 Minuten Ihrer Zeit in Anspruch und stellt Ihnen Fragen zu aktuellen Symptomen, Vorerkrankungen und dem Kontakt zu Verdachtsfällen. Versuchen Sie, die Fragen so genau wie möglich zu beantworten.</p>\n<p><strong>2. Fragenkatalog und Empfehlungen</strong></p>\n<p>Zum Abschluss der Befragung erhalten Sie eine Übersicht über Ihre Antworten und spezifische Handlungsempfehlungen wie z.B. <ul><li>Anruf bei einer der Hotlines des öffentlichen Gesundheitsdienstes</li>\n<li>Vorstellung beim Hausarzt</li>\n<li>Häusliche Isolierung</li>\n</ul></p><p><strong>3. Vorbereitung eines Arztgesprächs</strong></p>\n<p>Falls ein Arztgespräch notwendig sein sollte, bieten einige Untersuchungsstellen die Möglichkeit, Ihre Antworten über einen QR-Code einzuscannen (u.a. an der Charité). Der Einsatz eines QR-Codes zur Übermittlung relevanter medizinischer Informationen unterstützt die weiterführende Versorgung und hilft, die hohe Anzahl an Hilfe- bzw. Ratsuchenden schneller zu bearbeiten. \nFür einen Besuch bei Ihrem Hausarzt oder in einer anderen Untersuchungsstelle außerhalb der Charité drucken Sie die Zusammenfassung am Ende aus oder zeigen Sie diese bei Ihrem Arztbesuch vor. </p>',
      start_paragraph_3: "<p>Der Fragebogen ist anonym und wird nur auf Ihrem Endgerät (zum Beispiel Smartphone) bearbeitet und gespeichert. Ihre Antworten werden nicht an uns oder über das Internet an Dritte übertragen.</p>",
      start_paragraph_4: "<p>Die Nutzung dieser App ersetzt keine ärztliche Behandlung. Wenn Sie sich aktuell schwer krank fühlen, rufen Sie bitte umgehend medizinische Hilfe.</p>",
      start_sub_headline_1: "Vorbereitung des Ihres Arztgespräches",
      start_sub_headline_2: "Was ist die CovApp?",
      start_sub_headline_3: "Welche Daten werden über das Internet übertragen?",
      start_sub_headline_4: "Im Zweifel einen Arzt/Ärztin kontaktieren!"
  },
  ae = [{
      code: "en",
      label: "English"
  }, {
      code: "de",
      label: "Deutsch"
  }],
  oe = new te;
oe.addDetector({
  name: "custom",
  lookup(e) {
      const {
          lookupQuerystring: n
      } = e;
      return (document.location.href.match(new RegExp(`[?&]${n}=([a-z]{2})`)) || []).pop() || (navigator.language || "").split("-").shift()
  },
  cacheUserLanguage() {}
});
const se = {
      order: ["custom"],
      caches: ["custom"]
  },
  he = new Promise(e => {
      E.use(oe).init({
          detection: se,
          fallbackLng: "en",
          whitelist: ae.map(({
              code: e
          }) => e),
          resources: {
              en: {
                  translation: ie
              },
              de: {
                  translation: re
              }
          }
      }).then(() => e(E.language))
  });
export {
  ae as L, E as a, he as i
}