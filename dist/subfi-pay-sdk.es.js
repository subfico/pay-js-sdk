var re = Object.defineProperty;
var n = (s, l) => re(s, "name", { value: l, configurable: !0 });
import te from "react";
var T = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function ne() {
  if (I) return R;
  I = 1;
  var s = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function m(E, u, c) {
    var b = null;
    if (c !== void 0 && (b = "" + c), u.key !== void 0 && (b = "" + u.key), "key" in u) {
      c = {};
      for (var _ in u)
        _ !== "key" && (c[_] = u[_]);
    } else c = u;
    return u = c.ref, {
      $$typeof: s,
      type: E,
      key: b,
      ref: u !== void 0 ? u : null,
      props: c
    };
  }
  return n(m, "jsxProd"), R.Fragment = l, R.jsx = m, R.jsxs = m, R;
}
n(ne, "requireReactJsxRuntime_production");
var v = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function oe() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case J:
          return "Profiler";
        case q:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case V:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case j:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
            } catch {
            }
        }
      return null;
    }
    n(s, "getComponentNameFromType");
    function l(e) {
      return "" + e;
    }
    n(l, "testStringCoercion");
    function m(e) {
      try {
        l(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), l(e);
      }
    }
    n(m, "checkKeyStringCoercion");
    function E(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === j)
        return "<...>";
      try {
        var r = s(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    n(E, "getTaskName");
    function u() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    n(u, "getOwner");
    function c() {
      return Error("react-stack-top-frame");
    }
    n(c, "UnknownOwner");
    function b(e) {
      if (y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    n(b, "hasValidKey");
    function _(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n(t, "warnAboutAccessingKey"), t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    n(_, "defineKeyPropWarningGetter");
    function L() {
      var e = s(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    n(L, "elementRefGetterWithDeprecationWarning");
    function W(e, r, t, o, f, i, A, P) {
      return t = i.ref, e = {
        $$typeof: x,
        type: e,
        key: r,
        props: i,
        _owner: f
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: L
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    n(W, "ReactElement");
    function w(e, r, t, o, f, i, A, P) {
      var a = r.children;
      if (a !== void 0)
        if (o)
          if (K(a)) {
            for (o = 0; o < a.length; o++)
              g(a[o]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(a);
      if (y.call(r, "key")) {
        a = s(e);
        var d = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        o = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", $[a + o] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          a,
          d,
          a
        ), $[a + o] = !0);
      }
      if (a = null, t !== void 0 && (m(t), a = "" + t), b(r) && (m(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var h in r)
          h !== "key" && (t[h] = r[h]);
      } else t = r;
      return a && _(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        a,
        i,
        f,
        u(),
        t,
        A,
        P
      );
    }
    n(w, "jsxDEVImpl");
    function g(e) {
      typeof e == "object" && e !== null && e.$$typeof === x && e._store && (e._store.validated = 1);
    }
    n(g, "validateChildKeys");
    var p = te, x = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), V = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), O = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, K = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: /* @__PURE__ */ n(function(e) {
        return e();
      }, "react_stack_bottom_frame")
    };
    var N, C = {}, Y = p.react_stack_bottom_frame.bind(
      p,
      c
    )(), F = S(E(c)), $ = {};
    v.Fragment = k, v.jsx = function(e, r, t, o, f) {
      var i = 1e4 > O.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        t,
        !1,
        o,
        f,
        i ? Error("react-stack-top-frame") : Y,
        i ? S(E(e)) : F
      );
    }, v.jsxs = function(e, r, t, o, f) {
      var i = 1e4 > O.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        t,
        !0,
        o,
        f,
        i ? Error("react-stack-top-frame") : Y,
        i ? S(E(e)) : F
      );
    };
  }()), v;
}
n(oe, "requireReactJsxRuntime_development");
var M;
function ae() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? T.exports = ne() : T.exports = oe()), T.exports;
}
n(ae, "requireJsxRuntime");
var se = ae();
function ie(s) {
  return s;
}
n(ie, "createMessage");
function le({
  ref: s,
  renderToken: l,
  origin: m
}) {
  return /* @__PURE__ */ se.jsx(
    "iframe",
    {
      ref: s,
      title: "Secure credit card payment method form powered by SubFi",
      name: "subfi-credit-card-payment-method-form",
      role: "presentation",
      src: `${m}/iframe/card?token=${l}`,
      style: {
        width: "100%",
        transition: "height 200ms ease-in-out",
        margin: "0 -4px"
      },
      scrolling: "no"
    }
  );
}
n(le, "SubFiCreditCardPaymentMethodForm");
export {
  le as SubFiCreditCardPaymentMethodForm,
  ie as createMessage
};
