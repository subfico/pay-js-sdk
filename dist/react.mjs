var de = Object.defineProperty;
var i = (u, t) => de(u, "name", { value: t, configurable: !0 });
import T, { useState as X, useEffect as Z } from "react";
var P = { exports: {} }, g = {};
var H;
function fe() {
  if (H) return g;
  H = 1;
  var u = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, l, o) {
    var a = null;
    if (o !== void 0 && (a = "" + o), l.key !== void 0 && (a = "" + l.key), "key" in l) {
      o = {};
      for (var c in l)
        c !== "key" && (o[c] = l[c]);
    } else o = l;
    return l = o.ref, {
      $$typeof: u,
      type: r,
      key: a,
      ref: l !== void 0 ? l : null,
      props: o
    };
  }
  return i(n, "jsxProd"), g.Fragment = t, g.jsx = n, g.jsxs = n, g;
}
i(fe, "requireReactJsxRuntime_production");
var v = {};
var W;
function me() {
  return W || (W = 1, process.env.NODE_ENV !== "production" && (function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === le ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case A:
          return "Fragment";
        case ee:
          return "Profiler";
        case K:
          return "StrictMode";
        case oe:
          return "Suspense";
        case ae:
          return "SuspenseList";
        case se:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Q:
            return "Portal";
          case ne:
            return e.displayName || "Context";
          case te:
            return (e._context.displayName || "Context") + ".Consumer";
          case re:
            var s = e.render;
            return e = e.displayName, e || (e = s.displayName || s.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ie:
            return s = e.displayName || null, s !== null ? s : u(e.type) || "Memo";
          case M:
            s = e._payload, e = e._init;
            try {
              return u(e(s));
            } catch {
            }
        }
      return null;
    }
    i(u, "getComponentNameFromType");
    function t(e) {
      return "" + e;
    }
    i(t, "testStringCoercion");
    function n(e) {
      try {
        t(e);
        var s = !1;
      } catch {
        s = !0;
      }
      if (s) {
        s = console;
        var d = s.error, f = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return d.call(
          s,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), t(e);
      }
    }
    i(n, "checkKeyStringCoercion");
    function r(e) {
      if (e === A) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === M)
        return "<...>";
      try {
        var s = u(e);
        return s ? "<" + s + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    i(r, "getTaskName");
    function l() {
      var e = S.A;
      return e === null ? null : e.getOwner();
    }
    i(l, "getOwner");
    function o() {
      return Error("react-stack-top-frame");
    }
    i(o, "UnknownOwner");
    function a(e) {
      if (V.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    i(a, "hasValidKey");
    function c(e, s) {
      function d() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          s
        ));
      }
      i(d, "warnAboutAccessingKey"), d.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: d,
        configurable: !0
      });
    }
    i(c, "defineKeyPropWarningGetter");
    function E() {
      var e = u(this.type);
      return F[e] || (F[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    i(E, "elementRefGetterWithDeprecationWarning");
    function b(e, s, d, f, _, k) {
      var m = d.ref;
      return e = {
        $$typeof: Y,
        type: e,
        key: s,
        props: d,
        _owner: f
      }, (m !== void 0 ? m : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: E
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
        value: _
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    i(b, "ReactElement");
    function h(e, s, d, f, _, k) {
      var m = s.children;
      if (m !== void 0)
        if (f)
          if (ce(m)) {
            for (f = 0; f < m.length; f++)
              p(m[f]);
            Object.freeze && Object.freeze(m);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(m);
      if (V.call(s, "key")) {
        m = u(e);
        var y = Object.keys(s).filter(function(ue) {
          return ue !== "key";
        });
        f = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", G[m + f] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          m,
          y,
          m
        ), G[m + f] = !0);
      }
      if (m = null, d !== void 0 && (n(d), m = "" + d), a(s) && (n(s.key), m = "" + s.key), "key" in s) {
        d = {};
        for (var N in s)
          N !== "key" && (d[N] = s[N]);
      } else d = s;
      return m && c(
        d,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), b(
        e,
        m,
        d,
        l(),
        _,
        k
      );
    }
    i(h, "jsxDEVImpl");
    function p(e) {
      q(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === M && (e._payload.status === "fulfilled" ? q(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    i(p, "validateChildKeys");
    function q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === Y;
    }
    i(q, "isValidElement");
    var R = T, Y = Symbol.for("react.transitional.element"), Q = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), te = Symbol.for("react.consumer"), ne = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), le = Symbol.for("react.client.reference"), S = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, ce = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: /* @__PURE__ */ i(function(e) {
        return e();
      }, "react_stack_bottom_frame")
    };
    var $, F = {}, z = R.react_stack_bottom_frame.bind(
      R,
      o
    )(), U = C(r(o)), G = {};
    v.Fragment = A, v.jsx = function(e, s, d) {
      var f = 1e4 > S.recentlyCreatedOwnerStacks++;
      return h(
        e,
        s,
        d,
        !1,
        f ? Error("react-stack-top-frame") : z,
        f ? C(r(e)) : U
      );
    }, v.jsxs = function(e, s, d) {
      var f = 1e4 > S.recentlyCreatedOwnerStacks++;
      return h(
        e,
        s,
        d,
        !0,
        f ? Error("react-stack-top-frame") : z,
        f ? C(r(e)) : U
      );
    };
  })()), v;
}
i(me, "requireReactJsxRuntime_development");
var J;
function he() {
  return J || (J = 1, process.env.NODE_ENV === "production" ? P.exports = fe() : P.exports = me()), P.exports;
}
i(he, "requireJsxRuntime");
var D = he();
function w(u, t, n, r) {
  function l(o) {
    return o instanceof n ? o : new n(function(a) {
      a(o);
    });
  }
  return i(l, "adopt"), new (n || (n = Promise))(function(o, a) {
    function c(h) {
      try {
        b(r.next(h));
      } catch (p) {
        a(p);
      }
    }
    i(c, "fulfilled");
    function E(h) {
      try {
        b(r.throw(h));
      } catch (p) {
        a(p);
      }
    }
    i(E, "rejected");
    function b(h) {
      h.done ? o(h.value) : l(h.value).then(c, E);
    }
    i(b, "step"), b((r = r.apply(u, [])).next());
  });
}
i(w, "__awaiter");
let I = {};
function pe(u) {
  const t = I[u];
  if (t)
    return t;
  const n = new Promise((r, l) => {
    const o = document.createElement("script");
    o.src = u, o.async = !0;
    const a = /* @__PURE__ */ i(() => {
      r();
    }, "onScriptLoad"), c = /* @__PURE__ */ i(() => {
      E(), delete I[u], o.remove(), l(new Error(`Unable to load script ${u}`));
    }, "onScriptError");
    o.addEventListener("load", a), o.addEventListener("error", c), document.body.appendChild(o);
    function E() {
      o.removeEventListener("load", a), o.removeEventListener("error", c);
    }
    i(E, "cleanup");
  });
  return I[u] = n, n;
}
i(pe, "loadScript");
const j = class j {
  constructor(t) {
    this.handleClick = (n) => w(this, void 0, void 0, function* () {
      const r = this.config;
      if (!r)
        throw new Error("google-pay-button: Missing configuration");
      const l = this.createLoadPaymentDataRequest(r);
      try {
        if (r.onClick && r.onClick(n), n.defaultPrevented)
          return;
        const o = yield this.client.loadPaymentData(l);
        r.onLoadPaymentData && r.onLoadPaymentData(o);
      } catch (o) {
        o.statusCode === "CANCELED" ? r.onCancel && r.onCancel(o) : r.onError ? r.onError(o) : console.error(o);
      }
    }), this.options = t;
  }
  getElement() {
    return this.element;
  }
  isGooglePayLoaded() {
    var t, n;
    return "google" in (window || global) && !!(!((n = (t = google == null ? void 0 : google.payments) === null || t === void 0 ? void 0 : t.api) === null || n === void 0) && n.PaymentsClient);
  }
  mount(t) {
    var n;
    return w(this, void 0, void 0, function* () {
      if (!this.isGooglePayLoaded())
        try {
          yield pe("https://pay.google.com/gp/p/js/pay.js");
        } catch (r) {
          !((n = this.config) === null || n === void 0) && n.onError ? this.config.onError(r) : console.error(r);
          return;
        }
      this.element = t, t && (this.appendStyles(), this.config && this.updateElement());
    });
  }
  unmount() {
    this.element = void 0;
  }
  configure(t) {
    let n;
    return this.config = t, (!this.oldInvalidationValues || this.isClientInvalidated(t)) && (n = this.updateElement()), this.oldInvalidationValues = this.getInvalidationValues(t), n ?? Promise.resolve();
  }
  /**
   * Creates client configuration options based on button configuration
   * options.
   *
   * This method would normally be private but has been made public for
   * testing purposes.
   *
   * @private
   */
  createClientOptions(t) {
    const n = {
      environment: t.environment,
      merchantInfo: this.createMerchantInfo(t)
    };
    return (t.onPaymentDataChanged || t.onPaymentAuthorized) && (n.paymentDataCallbacks = {}, t.onPaymentDataChanged && (n.paymentDataCallbacks.onPaymentDataChanged = (r) => t.onPaymentDataChanged(r) || {}), t.onPaymentAuthorized && (n.paymentDataCallbacks.onPaymentAuthorized = (r) => t.onPaymentAuthorized(r) || {})), n;
  }
  createIsReadyToPayRequest(t) {
    const n = t.paymentRequest;
    return {
      apiVersion: n.apiVersion,
      apiVersionMinor: n.apiVersionMinor,
      allowedPaymentMethods: n.allowedPaymentMethods,
      existingPaymentMethodRequired: t.existingPaymentMethodRequired
    };
  }
  /**
   * Constructs `loadPaymentData` request object based on button configuration.
   *
   * It infers request properties like `shippingAddressRequired`,
   * `shippingOptionRequired`, and `billingAddressRequired` if not already set
   * based on the presence of their associated options and parameters. It also
   * infers `callbackIntents` based on the callback methods defined in button
   * configuration.
   *
   * This method would normally be private but has been made public for
   * testing purposes.
   *
   * @private
   */
  createLoadPaymentDataRequest(t) {
    return Object.assign(Object.assign({}, t.paymentRequest), { merchantInfo: this.createMerchantInfo(t) });
  }
  createMerchantInfo(t) {
    const n = Object.assign({}, t.paymentRequest.merchantInfo);
    return n.softwareInfo || (n.softwareInfo = {
      id: this.options.softwareInfoId,
      version: this.options.softwareInfoVersion
    }), n;
  }
  isMounted() {
    return this.element != null && this.element.isConnected !== !1;
  }
  removeButton() {
    if (this.element instanceof ShadowRoot || this.element instanceof Element)
      for (const t of Array.from(this.element.children))
        t.tagName !== "STYLE" && t.remove();
  }
  updateElement() {
    return w(this, void 0, void 0, function* () {
      if (!this.isMounted())
        return;
      const t = this.getElement();
      if (!this.config)
        throw new Error("google-pay-button: Missing configuration");
      this.removeButton();
      try {
        this.client = new google.payments.api.PaymentsClient(this.createClientOptions(this.config));
      } catch (c) {
        this.config.onError ? this.config.onError(c) : console.error(c);
        return;
      }
      const n = {
        buttonType: this.config.buttonType,
        buttonColor: this.config.buttonColor,
        buttonRadius: this.config.buttonRadius,
        buttonSizeMode: this.config.buttonSizeMode,
        buttonLocale: this.config.buttonLocale,
        buttonBorderType: this.config.buttonBorderType,
        onClick: this.handleClick,
        allowedPaymentMethods: this.config.paymentRequest.allowedPaymentMethods
      }, r = t.getRootNode();
      r instanceof ShadowRoot && (n.buttonRootNode = r);
      const l = this.client.createButton(n);
      this.setClassName(t, [t.className, "not-ready"]), t.appendChild(l);
      let o = !1, a;
      try {
        a = yield this.client.isReadyToPay(this.createIsReadyToPayRequest(this.config)), o = a.result && !this.config.existingPaymentMethodRequired || a.result && a.paymentMethodPresent && this.config.existingPaymentMethodRequired || !1;
      } catch (c) {
        this.config.onError ? this.config.onError(c) : console.error(c);
      }
      if (this.isMounted()) {
        if (o) {
          try {
            this.client.prefetchPaymentData(this.createLoadPaymentDataRequest(this.config));
          } catch (c) {
            console.log("Error with prefetch", c);
          }
          this.setClassName(t, (t.className || "").split(" ").filter((c) => c && c !== "not-ready"));
        }
        if ((this.isReadyToPay !== a?.result || this.paymentMethodPresent !== a?.paymentMethodPresent) && (this.isReadyToPay = !!a?.result, this.paymentMethodPresent = a?.paymentMethodPresent, this.config.onReadyToPayChange)) {
          const c = {
            isButtonVisible: o,
            isReadyToPay: this.isReadyToPay
          };
          this.paymentMethodPresent && (c.paymentMethodPresent = this.paymentMethodPresent), this.config.onReadyToPayChange(c);
        }
      }
    });
  }
  setClassName(t, n) {
    const r = n.filter((l) => l).join(" ");
    r ? t.className = r : t.removeAttribute("class");
  }
  appendStyles() {
    var t, n, r;
    if (typeof document > "u")
      return;
    const l = (t = this.element) === null || t === void 0 ? void 0 : t.getRootNode(), o = `default-google-style-${this.options.cssSelector.replace(/[^\w-]+/g, "")}-${(n = this.config) === null || n === void 0 ? void 0 : n.buttonLocale}`;
    if (l && !(!((r = l.getElementById) === null || r === void 0) && r.call(l, o))) {
      const a = document.createElement("style");
      a.id = o, a.type = "text/css", a.innerHTML = `
          ${this.options.cssSelector} {
            display: inline-block;
          }
          ${this.options.cssSelector}.not-ready {
            width: 0;
            height: 0;
            overflow: hidden;
          }
        `, l instanceof Document && l.head ? l.head.appendChild(a) : l.appendChild(a);
    }
  }
  isClientInvalidated(t) {
    return this.oldInvalidationValues ? this.getInvalidationValues(t).some((r, l) => JSON.stringify(r) !== JSON.stringify(this.oldInvalidationValues[l])) : !0;
  }
  getInvalidationValues(t) {
    var n, r;
    return [
      t.environment,
      t.existingPaymentMethodRequired,
      !!t.onPaymentDataChanged,
      !!t.onPaymentAuthorized,
      t.buttonType,
      t.buttonColor,
      t.buttonRadius,
      t.buttonLocale,
      t.buttonSizeMode,
      t.buttonBorderType,
      t.paymentRequest.merchantInfo.merchantId,
      t.paymentRequest.merchantInfo.merchantName,
      (n = t.paymentRequest.merchantInfo.softwareInfo) === null || n === void 0 ? void 0 : n.id,
      (r = t.paymentRequest.merchantInfo.softwareInfo) === null || r === void 0 ? void 0 : r.version,
      t.paymentRequest.allowedPaymentMethods
    ];
  }
};
i(j, "ButtonManager");
let O = j;
var ye = "@google-pay/button-react", Ee = "3.2.1";
const B = "google-pay-button-container", L = class L extends T.Component {
  constructor() {
    super(...arguments), this.manager = new O({
      cssSelector: `.${B}`,
      softwareInfoId: ye,
      softwareInfoVersion: Ee
    }), this.elementRef = T.createRef();
  }
  componentDidMount() {
    return w(this, void 0, void 0, function* () {
      const t = this.elementRef.current;
      t && (yield this.manager.configure(this.props), yield this.manager.mount(t));
    });
  }
  componentWillUnmount() {
    this.manager.unmount();
  }
  componentDidUpdate() {
    this.manager.configure(this.props);
  }
  render() {
    return T.createElement("div", { ref: this.elementRef, className: [B, this.props.className].filter((t) => t).join(" "), style: this.props.style });
  }
};
i(L, "GooglePayButton");
let x = L;
function ve(u) {
  return u;
}
i(ve, "createMessage");
function Re({
  iframeRef: u
}) {
  u.current?.contentWindow?.postMessage(
    {
      type: "GENERATE_ENCRYPTED_PAYMENT_METHOD"
    },
    "*"
  );
}
i(Re, "generateEncryptedPaymentMethod");
function _e({
  ref: u,
  renderToken: t,
  onEncryptedPaymentMethodGenerated: n,
  origin: r
}) {
  const [l, o] = X("212px");
  return Z(() => {
    function a(c) {
      switch (c.data.type) {
        case "UPDATE_HEIGHT":
          o(c.data.height);
          break;
        case "GENERATE_ENCRYPTED_PAYMENT_METHOD":
          c.data.paymentMethod && n({
            paymentMethod: c.data.paymentMethod
          });
          break;
      }
    }
    return i(a, "handleMessage"), window.addEventListener("message", a), () => {
      window.removeEventListener("message", a);
    };
  }), /* @__PURE__ */ D.jsx(
    "iframe",
    {
      ref: u,
      title: "Secure credit card payment method form powered by SubFi",
      name: "subfi-credit-card-payment-method-form",
      role: "presentation",
      src: `${r}/iframe/card?token=${t}`,
      style: {
        width: "calc(100% + 8px)",
        transition: "height 200ms ease-in-out",
        margin: "0 -4px",
        height: l
      },
      scrolling: "no"
    }
  );
}
i(_e, "SubFiCreditCardPaymentMethodForm");
function Pe({
  ref: u,
  renderToken: t,
  onEncryptedPaymentMethodGenerated: n,
  origin: r
}) {
  const [l, o] = X("320px");
  return Z(() => {
    function a(c) {
      switch (c.data.type) {
        case "UPDATE_HEIGHT":
          o(c.data.height);
          break;
        case "GENERATE_ENCRYPTED_PAYMENT_METHOD":
          c.data.paymentMethod && n({
            paymentMethod: c.data.paymentMethod
          });
          break;
      }
    }
    return i(a, "handleMessage"), window.addEventListener("message", a), () => {
      window.removeEventListener("message", a);
    };
  }), /* @__PURE__ */ D.jsx(
    "iframe",
    {
      ref: u,
      title: "Secure bank account payment method form powered by SubFi",
      name: "subfi-bank-account-payment-method-form",
      role: "presentation",
      src: `${r}/iframe/bank?token=${t}`,
      style: {
        width: "calc(100% + 8px)",
        transition: "height 200ms ease-in-out",
        margin: "0 -4px",
        height: l
      },
      scrolling: "no"
    }
  );
}
i(Pe, "SubFiBankAccountPaymentMethodForm");
function Te({
  onEncryptedPaymentMethodGenerated: u,
  ...t
}) {
  return /* @__PURE__ */ D.jsx(
    x,
    {
      paymentRequest: {
        emailRequired: !0,
        allowedPaymentMethods: [
          {
            parameters: {
              allowedAuthMethods: ["CRYPTOGRAM_3DS", "PAN_ONLY"],
              allowedCardNetworks: ["AMEX", "DISCOVER", "MASTERCARD", "VISA"],
              billingAddressRequired: !0,
              billingAddressParameters: {
                format: "FULL",
                phoneNumberRequired: !1
              },
              cvcRequired: !1
            },
            tokenizationSpecification: {
              parameters: {
                gateway: "anedot",
                gatewayMerchantId: "anedot"
              },
              type: "PAYMENT_GATEWAY"
            },
            type: "CARD"
          }
        ],
        callbackIntents: ["PAYMENT_AUTHORIZATION", "SHIPPING_ADDRESS"],
        apiVersion: 2,
        apiVersionMinor: 0,
        merchantInfo: t.merchantInfo,
        transactionInfo: t.transactionInfo,
        shippingAddressRequired: !0
      },
      onLoadPaymentData: /* @__PURE__ */ i((n) => {
        u({
          paymentMethod: {
            billing_address_attributes: {
              name: n.paymentMethodData.info?.billingAddress?.name,
              address_line1: n.paymentMethodData.info?.billingAddress?.address1,
              address_line2: n.paymentMethodData.info?.billingAddress?.address2,
              city: n.paymentMethodData.info?.billingAddress?.locality,
              state: n.paymentMethodData.info?.billingAddress?.administrativeArea,
              postal_code: n.paymentMethodData.info?.billingAddress?.postalCode,
              country: n.paymentMethodData.info?.billingAddress?.countryCode,
              email: n.email,
              phone: n.paymentMethodData.info?.billingAddress?.phoneNumber
            },
            card_profile_attributes: {
              wallet_provider: "googlepay",
              wallet_payload: n.paymentMethodData.tokenizationData.token,
              last_four: n.paymentMethodData.info?.cardDetails,
              brand: n.paymentMethodData.info?.cardNetwork
            }
          }
        });
      }, "onLoadPaymentData"),
      ...t
    }
  );
}
i(Te, "SubFiGooglePayPaymentMethodForm");
export {
  Pe as SubFiBankAccountPaymentMethodForm,
  _e as SubFiCreditCardPaymentMethodForm,
  Te as SubFiGooglePayPaymentMethodForm,
  ve as createMessage,
  Re as generateEncryptedPaymentMethod
};
