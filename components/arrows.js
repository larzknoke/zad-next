module.exports = (function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  return (
    (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 2))
  );
})([
  function (t, e) {
    t.exports = require("react");
  },
  function (t, e, r) {
    window,
      (t.exports = (function (t) {
        var e = {};
        function r(n) {
          if (e[n]) return e[n].exports;
          var o = (e[n] = { i: n, l: !1, exports: {} });
          return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
        }
        return (
          (r.m = t),
          (r.c = e),
          (r.d = function (t, e, n) {
            r.o(t, e) ||
              Object.defineProperty(t, e, { enumerable: !0, get: n });
          }),
          (r.r = function (t) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(t, "__esModule", { value: !0 });
          }),
          (r.t = function (t, e) {
            if ((1 & e && (t = r(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
              (r.r(n),
              Object.defineProperty(n, "default", { enumerable: !0, value: t }),
              2 & e && "string" != typeof t)
            )
              for (var o in t)
                r.d(
                  n,
                  o,
                  function (e) {
                    return t[e];
                  }.bind(null, o)
                );
            return n;
          }),
          (r.n = function (t) {
            var e =
              t && t.__esModule
                ? function () {
                    return t.default;
                  }
                : function () {
                    return t;
                  };
            return r.d(e, "a", e), e;
          }),
          (r.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (r.p = ""),
          r((r.s = 0))
        );
      })([
        function (t, e, r) {
          "use strict";
          function n(t) {
            return (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  })(t);
          }
          function o(t, e) {
            return (
              (function (t) {
                if (Array.isArray(t)) return t;
              })(t) ||
              (function (t, e) {
                if (
                  "undefined" != typeof Symbol &&
                  Symbol.iterator in Object(t)
                ) {
                  var r = [],
                    n = !0,
                    o = !1,
                    i = void 0;
                  try {
                    for (
                      var c, u = t[Symbol.iterator]();
                      !(n = (c = u.next()).done) &&
                      (r.push(c.value), !e || r.length !== e);
                      n = !0
                    );
                  } catch (t) {
                    (o = !0), (i = t);
                  } finally {
                    try {
                      n || null == u.return || u.return();
                    } finally {
                      if (o) throw i;
                    }
                  }
                  return r;
                }
              })(t, e) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return i(t, e);
                  var r = Object.prototype.toString.call(t).slice(8, -1);
                  return (
                    "Object" === r && t.constructor && (r = t.constructor.name),
                    "Map" === r || "Set" === r
                      ? Array.from(r)
                      : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? i(t, e)
                      : void 0
                  );
                }
              })(t, e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function i(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
            return n;
          }
          r.r(e),
            r.d(e, "DIRECTION", function () {
              return s;
            }),
            r.d(e, "HEAD", function () {
              return O;
            });
          var c = "http://www.w3.org/2000/svg",
            u = function (t, e) {
              return "style" === t
                ? ((r = e),
                  (n = Object.entries(r).reduce(function (t, e) {
                    var r = o(e, 2),
                      n = r[0],
                      i = r[1];
                    return "number" == typeof i
                      ? "".concat(n, ": ").concat(i, "px; ").concat(t)
                      : "".concat(n, ": ").concat(i, "; ").concat(t);
                  }, "")).endsWith("; ")
                    ? n.substring(0, n.length - 2)
                    : n)
                : e;
              var r, n;
            },
            a = function (t) {
              var e = t.key,
                r = t.node,
                n = t.value;
              switch (e) {
                case "className":
                  return "class";
                case "ref":
                  return n(r), null;
                default:
                  return e;
              }
            },
            f = function (t, e) {
              for (
                var r = arguments.length,
                  i = new Array(r > 2 ? r - 2 : 0),
                  f = 2;
                f < r;
                f++
              )
                i[f - 2] = arguments[f];
              var l = document.createElementNS(c, t);
              return (
                e &&
                  Object.entries(e).forEach(function (t) {
                    var e = o(t, 2),
                      r = e[0],
                      n = e[1],
                      i = a({ key: r, node: l, value: n });
                    i && l.setAttributeNS(null, i, u(r, n));
                  }),
                i.length &&
                  i.forEach(function (t) {
                    t && "object" === n(t)
                      ? l.appendChild(t)
                      : (l.innerHTML = i);
                  }),
                l
              );
            },
            l = function () {
              var t = function t(e) {
                t.current = e;
              };
              return (t.current = null), t;
            },
            s = {
              TOP_LEFT: "top-left",
              TOP: "top",
              TOP_RIGHT: "top-right",
              RIGHT: "right",
              BOTTOM_LEFT: "bottom-left",
              BOTTOM: "bottom",
              BOTTOM_RIGHT: "bottom-right",
              LEFT: "left",
            },
            h = function (t) {
              var e = t.size,
                r = void 0 === e ? 10 : e;
              return {
                node: f(
                  "g",
                  { transform: "translate(-".concat(r, ", 0)") },
                  f("path", {
                    d: "M"
                      .concat(-r, " 0 L0 ")
                      .concat(-r, " L")
                      .concat(r, " 0 L0 ")
                      .concat(r, " Z"),
                  })
                ),
                width: r,
                height: r,
              };
            },
            y = function (t) {
              var e = t.size,
                r = void 0 === e ? 10 : e;
              return {
                node: f(
                  "g",
                  { transform: "translate(-".concat(r, ", 0)") },
                  f("circle", { cx: 0, cy: 0, r: r })
                ),
                width: r,
                height: r,
              };
            },
            d = function (t) {
              var e = t.src,
                r = t.width,
                n = t.height;
              if (!e || !r || !n)
                throw new Error("image requires src, height, width");
              var o = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "image"
              );
              return (
                o.setAttributeNS(null, "width", r),
                o.setAttributeNS(null, "height", n),
                o.setAttributeNS(null, "x", -r),
                o.setAttributeNS(null, "y", -n / 2),
                o.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  e
                ),
                { node: o, width: r, height: n }
              );
            },
            p = function (t) {
              var e = t.size,
                r = void 0 === e ? 10 : e;
              return {
                node: f("path", {
                  d: "M"
                    .concat(-r, " 0 L0 ")
                    .concat(-r, " L0 ")
                    .concat(r, " Z"),
                }),
                width: r,
                height: r,
              };
            },
            b = function (t) {
              var e = t.size,
                r = void 0 === e ? 10 : e;
              return {
                node: f("path", {
                  d: "M"
                    .concat(-r, " ")
                    .concat(-r, " L0 0 L")
                    .concat(-r, " ")
                    .concat(r, " Z"),
                }),
                width: r,
                height: r,
              };
            },
            m = function () {
              return { node: "", width: 10, height: 10 };
            },
            g = function (t) {
              var e = t.size,
                r = void 0 === e ? 10 : e;
              return {
                node: f(
                  "g",
                  null,
                  f("line", { x1: -r, y1: -r, x2: 0, y2: 0 }),
                  f("line", { x1: 0, y1: 0, x2: -r, y2: r })
                ),
                width: r,
                height: r,
              };
            },
            v = function (t) {
              var e = t.size,
                r = void 0 === e ? 10 : e;
              return {
                node: f(
                  "g",
                  { transform: "translate(-".concat(r, ", 0)") },
                  f("path", {
                    d: "M"
                      .concat(-r, " ")
                      .concat(-r, " L")
                      .concat(r, " 0 L")
                      .concat(-r, " ")
                      .concat(r, " L0 0 Z"),
                  })
                ),
                width: r,
                height: r,
              };
            },
            O = {
              diamond: h,
              DIAMOND: h,
              dot: y,
              DOT: y,
              image: d,
              IMAGE: d,
              none: m,
              NONE: m,
              inv: p,
              INV: p,
              normal: b,
              NORMAL: b,
              thin: g,
              THIN: g,
              vee: v,
              VEE: v,
            };
          function w(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(t);
              e &&
                (n = n.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          function x(t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? w(Object(r), !0).forEach(function (e) {
                    j(t, e, r[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : w(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e)
                    );
                  });
            }
            return t;
          }
          function j(t, e, r) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = r),
              t
            );
          }
          function P(t) {
            return (P =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  })(t);
          }
          var S = function (t) {
              return Math.round(1e3 * t) / 1e3;
            },
            T = function (t, e) {
              var r = t.distance,
                n = function (t) {
                  return (
                    Math.pow(1 - r, 2) * (e[1][t] - e[0][t]) +
                    2 * r * (1 - r) * (e[2][t] - e[1][t]) +
                    r * r * (e[3][t] - e[2][t])
                  );
                },
                o = n("x"),
                i = n("y"),
                c = S(-Math.atan2(o, i) + 0.5 * Math.PI);
              return { degree: S(c * (180 / Math.PI)), radius: c };
            },
            M = function (t, e) {
              var r = t.distance,
                n = function (t) {
                  return (
                    Math.pow(1 - r, 3) * e[0][t] +
                    3 * r * Math.pow(1 - r, 2) * e[1][t] +
                    3 * r * r * (1 - r) * e[2][t] +
                    r * r * r * e[3][t]
                  );
                };
              return { x: n("x"), y: n("y") };
            },
            E = function (t) {
              return "rotate("
                .concat(t.degree, ", ")
                .concat(t.x, ", ")
                .concat(t.y, "), translate(")
                .concat(t.x, ", ")
                .concat(t.y, ")");
            },
            N = function (t) {
              return "function" == typeof t ? t() : t;
            };
          function I(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(t);
              e &&
                (n = n.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          function A(t, e, r) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = r),
              t
            );
          }
          var C = function (t) {
              var e = (function (t) {
                  if (!N(t.node))
                    throw new Error(
                      "point is null, check if 'from'/'to' exists"
                    );
                  var e = N(t.node).getBoundingClientRect();
                  console.log(t);
                  switch (t.direction) {
                    case s.TOP_LEFT:
                      return { x: e.x, y: e.y };
                    case s.TOP:
                      return { x: e.x + e.width / 2, y: e.y };
                    case s.TOP_RIGHT:
                      return { x: e.x + e.width, y: e.y };
                    case s.RIGHT:
                      return { x: e.x + e.width, y: e.y + e.height / 2 };
                    case s.BOTTOM_LEFT:
                      return { x: e.x, y: e.y + e.height };
                    case s.BOTTOM:
                      return { x: e.x + e.width / 2, y: e.y + e.height };
                    case s.BOTTOM_RIGHT:
                      return { x: e.x + e.width, y: e.y + e.height };
                    case s.LEFT:
                      return { x: e.x, y: e.y + e.height / 2 };
                    default:
                      // throw new Error("unexpected type");
                      // return { x: e.x + e.width / 2, y: e.y + e.height };
                      return { x: e.x + e.width, y: e.y + e.height / 2 };
                  }
                })(t),
                r = window
                  ? { x: window.scrollX, y: window.scrollY }
                  : { scrollX: 0, scrollY: 0 };
              return (
                (e.y += r.y),
                (e.x += r.x),
                (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? I(Object(r), !0).forEach(function (e) {
                          A(t, e, r[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(r)
                        )
                      : I(Object(r)).forEach(function (e) {
                          Object.defineProperty(
                            t,
                            e,
                            Object.getOwnPropertyDescriptor(r, e)
                          );
                        });
                  }
                  return t;
                })({}, t, {}, e)
              );
            },
            D = function (t) {
              return [t.x, t.y];
            },
            _ = function (t, e) {
              return {
                x: t.x + e.width * t.translation[0],
                y: t.y + e.height * t.translation[1],
              };
            };
          function L(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(t);
              e &&
                (n = n.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          function H(t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? L(Object(r), !0).forEach(function (e) {
                    R(t, e, r[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : L(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e)
                    );
                  });
            }
            return t;
          }
          function R(t, e, r) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = r),
              t
            );
          }
          var z = function (t, e, r) {
              return (function (t, e) {
                return H({}, t, { x: t.x - e.x, y: t.y - e.y });
              })(H({}, t, { x: t.x - e.x, y: t.y - e.y }), {
                x: 2 * -r.width,
                y: 2 * -r.height,
              });
            },
            k = function (t) {
              var e = ["M"];
              return (
                e.push(D(t[0])),
                e.push("C"),
                e.push(D(t[1])),
                e.push(","),
                e.push(D(t[2])),
                e.push(","),
                e.push(D(t[3])),
                e.flat().join(" ").replace(/ ,/g, ",")
              );
            },
            F = function (t, e) {
              return t.reduce(function (t, r) {
                return t ? e(t, r) : r;
              });
            },
            B = function (t, e, r) {
              var n = (function (t) {
                  var e = (function t(e) {
                      if (!e) return { func: O.THIN };
                      if ("string" == typeof e) return t(O[e]);
                      if ("object" === P(e)) {
                        if ("function" == typeof e.func) return e;
                        if ("string" == typeof e.func)
                          return x({}, e, {}, t(e.func));
                      }
                      return "function" == typeof e
                        ? { func: e }
                        : x({}, e, { func: O.THIN });
                    })(t),
                    r = x({}, t, {}, e.func(e));
                  if (void 0 === !r.node || !r.width || !r.height)
                    throw new Error(
                      "head function should return { node, width, height }"
                    );
                  return r.distance || (r.distance = 1), r;
                })(r),
                o = (function (t, e) {
                  return { x: Math.min(t.x, e.x), y: Math.min(t.y, e.y) };
                })(t, e),
                i = (function (t) {
                  var e = t.from,
                    r = t.to,
                    n = t.head,
                    o = (function (t) {
                      var e = t.from,
                        r = t.to;
                      return {
                        width: Math.max(e.x, r.x),
                        height: Math.max(e.y, r.y),
                      };
                    })({ from: e, to: r }),
                    i = [];
                  return (
                    i.push(e),
                    i.push(_(e, o)),
                    i.push(_(r, o)),
                    i.push(r),
                    (function (t, e) {
                      var r = F(t, function (t, e) {
                        return { x: Math.min(t.x, e.x), y: Math.min(t.y, e.y) };
                      });
                      return t.map(function (t) {
                        return H({}, t, {
                          x: t.x - r.x + e.width,
                          y: t.y - r.y + e.height,
                        });
                      });
                    })(i, n)
                  );
                })({ from: z(t, o, n), to: z(e, o, n), head: n }),
                c = F(i, function (t, e) {
                  return { x: Math.max(t.x, e.x), y: Math.max(t.y, e.y) };
                }),
                u = H({}, T(n, i), {}, M(n, i)),
                a = (function (t, e, r) {
                  var n = function (e) {
                    return Math.min(t[0][e] - r.width, t[3][e] - r.height);
                  };
                  return {
                    x: e.x - n("x") - r.width,
                    y: e.y - n("y") - r.height,
                  };
                })(i, o, n);
              return {
                offset: a,
                size: { width: c.x + 2 * n.width, height: c.y + 2 * n.height },
                points: k(i),
                head: H({}, n, {}, u),
                getPointXY: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 1,
                    e = T({ distance: t }, i),
                    r = M({ distance: t }, i);
                  return H({}, e, { x: r.x + a.x, y: r.y + a.y });
                },
              };
            },
            G = ["x", "y", "width", "height"],
            q = function (t, e) {
              var r = e.getBoundingClientRect();
              return {
                equal: !G.some(function (e) {
                  return t[e] !== r[e];
                }),
                rect: r,
              };
            },
            Z = function (t) {
              var e = t.className,
                r = void 0 === e ? "arrow" : e,
                n = t.head,
                o = t.from,
                i = t.to,
                c = {
                  className: r,
                  head: n,
                  from: o,
                  to: i,
                  onChange: t.onChange,
                },
                u = B(C(c.from), C(c.to), c.head),
                a = l(),
                s = l(),
                h = l(),
                y = f(
                  "svg",
                  {
                    className: c.className,
                    ref: a,
                    style: {
                      top: u.offset.y,
                      left: u.offset.x,
                      position: "absolute",
                    },
                    width: u.size.width,
                    height: u.size.height,
                  },
                  f("path", {
                    ref: s,
                    className: "".concat(r, "__path"),
                    d: u.points,
                  }),
                  f(
                    "g",
                    {
                      ref: h,
                      className: "".concat(r, "__head"),
                      transform: E(u.head),
                    },
                    u.head.node
                  )
                ),
                d = function () {
                  var t = B(C(c.from), C(c.to), c.head);
                  c.onChange && c.onChange(t),
                    (a.current.style.top = "".concat(t.offset.y, "px")),
                    (a.current.style.left = "".concat(t.offset.x, "px")),
                    (a.current.style.width = "".concat(t.size.width, "px")),
                    (a.current.style.height = "".concat(t.size.height, "px")),
                    s.current.setAttribute("d", t.points),
                    h.current.setAttribute("transform", E(t.head)),
                    "string" == typeof t.head.node
                      ? (h.current.innerHTML = t.head.node)
                      : (h.current.firstChild &&
                          h.current.removeChild(h.current.firstChild),
                        h.current.appendChild(t.head.node));
                },
                p = (function (t, e) {
                  var r = { from: t, to: e },
                    n = { from: {}, to: {} },
                    o = null,
                    i = setInterval(function () {
                      var t = N(r.from.node),
                        e = N(r.to.node);
                      if (
                        t &&
                        e &&
                        document.body.contains(t) &&
                        document.body.contains(e)
                      ) {
                        var i = (function (t) {
                          var e = t.previousPositions,
                            r = t.fromNode,
                            n = t.toNode,
                            o = {};
                          return (
                            (o.from = q(e.from, r)),
                            (o.to = q(e.to, n)),
                            o.from.equal && o.to.equal
                              ? null
                              : { from: o.from.rect, to: o.to.rect }
                          );
                        })({ previousPositions: n, fromNode: t, toNode: e });
                        i && ((n.from = i.from), (n.to = i.to), o && o());
                      }
                    }, 150);
                  return {
                    observe: function (t) {
                      o = t;
                    },
                    timer: i,
                    clear: function () {
                      return clearInterval(i);
                    },
                    setFrom: function (t) {
                      r.from = t;
                    },
                    setTo: function (t) {
                      r.to = t;
                    },
                  };
                })(o, i);
              return (
                p.observe(d),
                {
                  node: y,
                  timer: p.timer,
                  clear: function () {
                    p.clear();
                    var t = y.parentNode;
                    t && t.removeChild(y);
                  },
                  update: d,
                  setProps: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    t.from && (p.setFrom(t.from), (c.from = t.from)),
                      t.to && (p.setFrom(t.to), (c.to = t.to)),
                      Object.keys(t).forEach(function (e) {
                        c[e] = t[e];
                      }),
                      d();
                  },
                }
              );
            };
          window && (window.arrowCreate = Z), (e.default = Z);
        },
      ]));
  },
  function (t, e, r) {
    "use strict";
    r.r(e),
      r.d(e, "DIRECTION", function () {
        return o.DIRECTION;
      }),
      r.d(e, "HEAD", function () {
        return o.HEAD;
      });
    var n = r(0),
      o = r(1),
      i = r.n(o),
      c = function (t) {
        return "function" == typeof t ? t() : t;
      },
      u = function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return c(t.node);
      };
    function a(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
            return;
          var r = [],
            n = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var c, u = t[Symbol.iterator]();
              !(n = (c = u.next()).done) &&
              (r.push(c.value), !e || r.length !== e);
              n = !0
            );
          } catch (t) {
            (o = !0), (i = t);
          } finally {
            try {
              n || null == u.return || u.return();
            } finally {
              if (o) throw i;
            }
          }
          return r;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return f(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === r && t.constructor && (r = t.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(r);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return f(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function f(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var l = function (t) {
      var e = t.from,
        r = t.to,
        o = a(Object(n.useState)(!1), 2),
        i = o[0],
        c = o[1];
      return (
        Object(n.useLayoutEffect)(
          function () {
            var t = function () {
              if (u(e) && u(r)) return c(!0), !0;
            };
            if (!t()) {
              var n = setInterval(t, 150);
              return function () {
                return clearInterval(n);
              };
            }
          },
          [i, e, r]
        ),
        i
      );
    };
    function s(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function h(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? s(Object(r), !0).forEach(function (e) {
              y(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : s(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function y(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var d = function (t) {
      var e = t.className,
        r = t.head,
        o = t.from,
        c = t.to,
        a = t.onChange,
        f = l({ from: o, to: c }),
        s = Object(n.useRef)();
      Object(n.useLayoutEffect)(
        function () {
          s.current &&
            s.current.setProps({
              className: e,
              head: r,
              from: o,
              to: c,
              onChange: a,
            });
        },
        [e, r, o, c, a]
      ),
        Object(n.useLayoutEffect)(
          function () {
            if (f) {
              try {
                s.current = i()({
                  className: e,
                  head: r,
                  from: h({}, o, { node: u(o) }),
                  to: h({}, c, { node: u(c) }),
                  onChange: a,
                });
              } catch (t) {
                return void console.warn(t);
              }
              return (
                document.body.appendChild(s.current.node),
                function () {
                  s.current.clear(), (s.current = null);
                }
              );
            }
          },
          [f]
        );
    };
    e.default = Object(n.memo)(function (t) {
      var e = t.className,
        r = t.head,
        n = t.from,
        o = t.to,
        i = t.onChange;
      return d({ className: e, head: r, from: n, to: o, onChange: i }), null;
    });
  },
]);
