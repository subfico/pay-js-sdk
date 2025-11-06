var ne = Object.defineProperty;
var t = (s, f) => ne(s, "name", { value: f, configurable: !0 });
import ae, { useState as I, useEffect as L } from "react";
var R = { exports: {} }, _ = {};
var D;
function oe() {
  if (D) return _;
  D = 1;
  var s = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function d(m, i, c) {
    var l = null;
    if (c !== void 0 && (l = "" + c), i.key !== void 0 && (l = "" + i.key), "key" in i) {
      c = {};
      for (var u in i)
        u !== "key" && (c[u] = i[u]);
    } else c = i;
    return i = c.ref, {
      $$typeof: s,
      type: m,
      key: l,
      ref: i !== void 0 ? i : null,
      props: c
    };
  }
  return t(d, "jsxProd"), _.Fragment = f, _.jsx = d, _.jsxs = d, _;
}
t(oe, "requireReactJsxRuntime_production");
var p = {};
var $;
function se() {
  return $ || ($ = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case h:
          return "Fragment";
        case J:
          return "Profiler";
        case q:
          return "StrictMode";
        case B:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case H:
            return "Portal";
          case z:
            return e.displayName || "Context";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case v:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
            } catch {
            }
        }
      return null;
    }
    t(s, "getComponentNameFromType");
    function f(e) {
      return "" + e;
    }
    t(f, "testStringCoercion");
    function d(e) {
      try {
        f(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), f(e);
      }
    }
    t(d, "checkKeyStringCoercion");
    function m(e) {
      if (e === h) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === v)
        return "<...>";
      try {
        var r = s(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    t(m, "getTaskName");
    function i() {
      var e = y.A;
      return e === null ? null : e.getOwner();
    }
    t(i, "getOwner");
    function c() {
      return Error("react-stack-top-frame");
    }
    t(c, "UnknownOwner");
    function l(e) {
      if (x.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    t(l, "hasValidKey");
    function u(e, r) {
      function n() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t(n, "warnAboutAccessingKey"), n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    t(u, "defineKeyPropWarningGetter");
    function W() {
      var e = s(this.type);
      return j[e] || (j[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    t(W, "elementRefGetterWithDeprecationWarning");
    function G(e, r, n, a, T, g) {
      var o = n.ref;
      return e = {
        $$typeof: O,
        type: e,
        key: r,
        props: n,
        _owner: a
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: W
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
        value: T
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: g
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    t(G, "ReactElement");
    function A(e, r, n, a, T, g) {
      var o = r.children;
      if (o !== void 0)
        if (a)
          if (re(o)) {
            for (a = 0; a < o.length; a++)
              P(o[a]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(o);
      if (x.call(r, "key")) {
        o = s(e);
        var E = Object.keys(r).filter(function(te) {
          return te !== "key";
        });
        a = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", Y[o + a] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          o,
          E,
          o
        ), Y[o + a] = !0);
      }
      if (o = null, n !== void 0 && (d(n), o = "" + n), l(r) && (d(r.key), o = "" + r.key), "key" in r) {
        n = {};
        for (var w in r)
          w !== "key" && (n[w] = r[w]);
      } else n = r;
      return o && u(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), G(
        e,
        o,
        n,
        i(),
        T,
        g
      );
    }
    t(A, "jsxDEVImpl");
    function P(e) {
      S(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === v && (e._payload.status === "fulfilled" ? S(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    t(P, "validateChildKeys");
    function S(e) {
      return typeof e == "object" && e !== null && e.$$typeof === O;
    }
    t(S, "isValidElement");
    var b = ae, O = Symbol.for("react.transitional.element"), H = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), z = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), y = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = Object.prototype.hasOwnProperty, re = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: /* @__PURE__ */ t(function(e) {
        return e();
      }, "react_stack_bottom_frame")
    };
    var N, j = {}, M = b.react_stack_bottom_frame.bind(
      b,
      c
    )(), C = k(m(c)), Y = {};
    p.Fragment = h, p.jsx = function(e, r, n) {
      var a = 1e4 > y.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        n,
        !1,
        a ? Error("react-stack-top-frame") : M,
        a ? k(m(e)) : C
      );
    }, p.jsxs = function(e, r, n) {
      var a = 1e4 > y.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        n,
        !0,
        a ? Error("react-stack-top-frame") : M,
        a ? k(m(e)) : C
      );
    };
  })()), p;
}
t(se, "requireReactJsxRuntime_development");
var F;
function ie() {
  return F || (F = 1, process.env.NODE_ENV === "production" ? R.exports = oe() : R.exports = se()), R.exports;
}
t(ie, "requireJsxRuntime");
var U = ie();
function le(s) {
  return s;
}
t(le, "createMessage");
function fe({
  iframeRef: s
}) {
  s.current?.contentWindow?.postMessage(
    {
      type: "GENERATE_ENCRYPTED_PAYMENT_METHOD"
    },
    "*"
  );
}
t(fe, "generateEncryptedPaymentMethod");
function de({
  ref: s,
  renderToken: f,
  onEncryptedPaymentMethodGenerated: d,
  origin: m
}) {
  const [i, c] = I("212px");
  return L(() => {
    function l(u) {
      switch (u.data.type) {
        case "UPDATE_HEIGHT":
          c(u.data.height);
          break;
        case "GENERATE_ENCRYPTED_PAYMENT_METHOD":
          u.data.paymentMethod && d({
            paymentMethod: u.data.paymentMethod
          });
          break;
      }
    }
    return t(l, "handleMessage"), window.addEventListener("message", l), () => {
      window.removeEventListener("message", l);
    };
  }), /* @__PURE__ */ U.jsx(
    "iframe",
    {
      ref: s,
      title: "Secure credit card payment method form powered by SubFi",
      name: "subfi-credit-card-payment-method-form",
      role: "presentation",
      src: `${m}/iframe/card?token=${f}`,
      style: {
        width: "calc(100% + 8px)",
        transition: "height 200ms ease-in-out",
        margin: "0 -4px",
        height: i
      },
      scrolling: "no"
    }
  );
}
t(de, "SubFiCreditCardPaymentMethodForm");
function me({
  ref: s,
  renderToken: f,
  onEncryptedPaymentMethodGenerated: d,
  origin: m
}) {
  const [i, c] = I("320px");
  return L(() => {
    function l(u) {
      switch (u.data.type) {
        case "UPDATE_HEIGHT":
          c(u.data.height);
          break;
        case "GENERATE_ENCRYPTED_PAYMENT_METHOD":
          u.data.paymentMethod && d({
            paymentMethod: u.data.paymentMethod
          });
          break;
      }
    }
    return t(l, "handleMessage"), window.addEventListener("message", l), () => {
      window.removeEventListener("message", l);
    };
  }), /* @__PURE__ */ U.jsx(
    "iframe",
    {
      ref: s,
      title: "Secure bank account payment method form powered by SubFi",
      name: "subfi-bank-account-payment-method-form",
      role: "presentation",
      src: `${m}/iframe/bank?token=${f}`,
      style: {
        width: "calc(100% + 8px)",
        transition: "height 200ms ease-in-out",
        margin: "0 -4px",
        height: i
      },
      scrolling: "no"
    }
  );
}
t(me, "SubFiBankAccountPaymentMethodForm");
export {
  me as SubFiBankAccountPaymentMethodForm,
  de as SubFiCreditCardPaymentMethodForm,
  le as createMessage,
  fe as generateEncryptedPaymentMethod
};
