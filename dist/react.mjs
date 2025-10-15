var ae = Object.defineProperty;
var t = (a, f) => ae(a, "name", { value: f, configurable: !0 });
import oe, { useState as L, useEffect as U } from "react";
var h = { exports: {} }, p = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function se() {
  if (F) return p;
  F = 1;
  var a = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function m(E, c, u) {
    var l = null;
    if (u !== void 0 && (l = "" + u), c.key !== void 0 && (l = "" + c.key), "key" in c) {
      u = {};
      for (var i in c)
        i !== "key" && (u[i] = c[i]);
    } else u = c;
    return c = u.ref, {
      $$typeof: a,
      type: E,
      key: l,
      ref: c !== void 0 ? c : null,
      props: u
    };
  }
  return t(m, "jsxProd"), p.Fragment = f, p.jsx = m, p.jsxs = m, p;
}
t(se, "requireReactJsxRuntime_production");
var T = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function ce() {
  return $ || ($ = 1, process.env.NODE_ENV !== "production" && function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case v:
          return "Fragment";
        case z:
          return "Profiler";
        case J:
          return "StrictMode";
        case Z:
          return "Suspense";
        case Q:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case q:
            return "Portal";
          case X:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case B:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case K:
            return r = e.displayName || null, r !== null ? r : a(e.type) || "Memo";
          case x:
            r = e._payload, e = e._init;
            try {
              return a(e(r));
            } catch {
            }
        }
      return null;
    }
    t(a, "getComponentNameFromType");
    function f(e) {
      return "" + e;
    }
    t(f, "testStringCoercion");
    function m(e) {
      try {
        f(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), f(e);
      }
    }
    t(m, "checkKeyStringCoercion");
    function E(e) {
      if (e === v) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === x)
        return "<...>";
      try {
        var r = a(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    t(E, "getTaskName");
    function c() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    t(c, "getOwner");
    function u() {
      return Error("react-stack-top-frame");
    }
    t(u, "UnknownOwner");
    function l(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    t(l, "hasValidKey");
    function i(e, r) {
      function n() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t(n, "warnAboutAccessingKey"), n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    t(i, "defineKeyPropWarningGetter");
    function G() {
      var e = a(this.type);
      return M[e] || (M[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    t(G, "elementRefGetterWithDeprecationWarning");
    function H(e, r, n, o, b, d, w, y) {
      return n = d.ref, e = {
        $$typeof: O,
        type: e,
        key: r,
        props: d,
        _owner: b
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: G
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
        value: w
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: y
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    t(H, "ReactElement");
    function P(e, r, n, o, b, d, w, y) {
      var s = r.children;
      if (s !== void 0)
        if (o)
          if (te(s)) {
            for (o = 0; o < s.length; o++)
              S(s[o]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(s);
      if (N.call(r, "key")) {
        s = a(e);
        var _ = Object.keys(r).filter(function(ne) {
          return ne !== "key";
        });
        o = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}", D[s + o] || (_ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          s,
          _,
          s
        ), D[s + o] = !0);
      }
      if (s = null, n !== void 0 && (m(n), s = "" + n), l(r) && (m(r.key), s = "" + r.key), "key" in r) {
        n = {};
        for (var A in r)
          A !== "key" && (n[A] = r[A]);
      } else n = r;
      return s && i(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), H(
        e,
        s,
        d,
        b,
        c(),
        n,
        w,
        y
      );
    }
    t(P, "jsxDEVImpl");
    function S(e) {
      typeof e == "object" && e !== null && e.$$typeof === O && e._store && (e._store.validated = 1);
    }
    t(S, "validateChildKeys");
    var R = oe, O = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), X = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), k = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, te = Array.isArray, g = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: /* @__PURE__ */ t(function(e) {
        return e();
      }, "react_stack_bottom_frame")
    };
    var j, M = {}, C = R.react_stack_bottom_frame.bind(
      R,
      u
    )(), Y = g(E(u)), D = {};
    T.Fragment = v, T.jsx = function(e, r, n, o, b) {
      var d = 1e4 > k.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        n,
        !1,
        o,
        b,
        d ? Error("react-stack-top-frame") : C,
        d ? g(E(e)) : Y
      );
    }, T.jsxs = function(e, r, n, o, b) {
      var d = 1e4 > k.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        n,
        !0,
        o,
        b,
        d ? Error("react-stack-top-frame") : C,
        d ? g(E(e)) : Y
      );
    };
  }()), T;
}
t(ce, "requireReactJsxRuntime_development");
var I;
function ie() {
  return I || (I = 1, process.env.NODE_ENV === "production" ? h.exports = se() : h.exports = ce()), h.exports;
}
t(ie, "requireJsxRuntime");
var W = ie();
function fe(a) {
  return a;
}
t(fe, "createMessage");
function de({
  iframeRef: a
}) {
  a.current?.contentWindow?.postMessage(
    {
      type: "GENERATE_ENCRYPTED_PAYMENT_METHOD"
    },
    "*"
  );
}
t(de, "generateEncryptedPaymentMethod");
function me({
  ref: a,
  renderToken: f,
  onEncryptedPaymentMethodGenerated: m,
  origin: E
}) {
  const [c, u] = L("0px");
  return U(() => {
    function l(i) {
      switch (i.data.type) {
        case "UPDATE_HEIGHT":
          u(i.data.height);
          break;
        case "GENERATE_ENCRYPTED_PAYMENT_METHOD":
          i.data.paymentMethod && m({
            paymentMethod: i.data.paymentMethod
          });
          break;
      }
    }
    return t(l, "handleMessage"), window.addEventListener("message", l), () => {
      window.removeEventListener("message", l);
    };
  }), /* @__PURE__ */ W.jsx(
    "iframe",
    {
      ref: a,
      title: "Secure credit card payment method form powered by SubFi",
      name: "subfi-credit-card-payment-method-form",
      role: "presentation",
      src: `${E}/iframe/card?token=${f}`,
      style: {
        width: "calc(100% + 8px)",
        transition: "height 200ms ease-in-out",
        margin: "0 -4px",
        height: c
      },
      scrolling: "no"
    }
  );
}
t(me, "SubFiCreditCardPaymentMethodForm");
function Ee({
  ref: a,
  renderToken: f,
  onEncryptedPaymentMethodGenerated: m,
  origin: E
}) {
  const [c, u] = L("0px");
  return U(() => {
    function l(i) {
      switch (i.data.type) {
        case "UPDATE_HEIGHT":
          u(i.data.height);
          break;
        case "GENERATE_ENCRYPTED_PAYMENT_METHOD":
          i.data.paymentMethod && m({
            paymentMethod: i.data.paymentMethod
          });
          break;
      }
    }
    return t(l, "handleMessage"), window.addEventListener("message", l), () => {
      window.removeEventListener("message", l);
    };
  }), /* @__PURE__ */ W.jsx(
    "iframe",
    {
      ref: a,
      title: "Secure bank account payment method form powered by SubFi",
      name: "subfi-bank-account-payment-method-form",
      role: "presentation",
      src: `${E}/iframe/bank?token=${f}`,
      style: {
        width: "calc(100% + 8px)",
        transition: "height 200ms ease-in-out",
        margin: "0 -4px",
        height: c
      },
      scrolling: "no"
    }
  );
}
t(Ee, "SubFiBankAccountPaymentMethodForm");
export {
  Ee as SubFiBankAccountPaymentMethodForm,
  me as SubFiCreditCardPaymentMethodForm,
  fe as createMessage,
  de as generateEncryptedPaymentMethod
};
