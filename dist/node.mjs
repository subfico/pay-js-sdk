var y = Object.defineProperty;
var i = (e, o) => y(e, "name", { value: o, configurable: !0 });
function x({
  renderToken: e,
  apiKey: o
}) {
  const { env: t = "sandbox" } = d(e).payload;
  async function a({
    accountId: n,
    data: s,
    headers: r
  }) {
    const p = await h({
      requestBody: s.customer,
      headers: r,
      apiKey: o,
      env: t
    }), c = (await f({
      requestBody: {
        payment_intent: {
          ...s.paymentIntent.payment_intent,
          amount: s.paymentIntent.payment_intent?.amount ?? 0,
          ...p.id && { customer_id: p.id }
        }
      },
      headers: r,
      apiKey: o,
      env: t,
      accountId: n,
      renderToken: e
    })).token ?? "", u = await b({
      token: c,
      requestBody: {
        payment_method: {
          ...s.paymentMethod,
          ...p.id && { customer_id: p.id }
        }
      },
      headers: r,
      env: t
    }), m = d(c).payload.payment_intent_id ?? "";
    return await w({
      token: c,
      paymentIntentId: m,
      paymentMethodId: u.id,
      env: t
    }), await l({
      token: c,
      paymentIntentId: m,
      env: t
    }), {
      id: m
    };
  }
  return i(a, "createPayment"), {
    createPayment: a
  };
}
i(x, "createClient");
async function h({
  requestBody: e,
  headers: o,
  apiKey: t,
  env: a
}) {
  const n = await fetch(
    `${a === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/customers`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Api-Key": t,
        ...o
      }
    }
  );
  if (n.ok)
    return n.json();
  if (n.status === 422 && e.customer?.email) {
    const s = await fetch(
      `${a === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/customers?email=${e.customer.email}`,
      {
        headers: {
          "X-Api-Key": t,
          ...o
        }
      }
    );
    if (s.ok)
      return (await s.json()).data[0];
    throw new Error(s.statusText);
  }
  throw new Error(n.statusText);
}
i(h, "findOrCreateCustomer");
async function f({
  requestBody: e,
  headers: o,
  accountId: t,
  apiKey: a,
  renderToken: n,
  env: s
}) {
  const r = await fetch(
    `${s === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/payment_intents`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Account-Id": t,
        "X-Api-Key": a,
        "X-Render-Token": n,
        ...o
      },
      body: JSON.stringify(e)
    }
  );
  if (r.ok)
    return r.json();
  throw new Error(r.statusText);
}
i(f, "createPaymentIntent");
async function b({
  token: e,
  requestBody: o,
  headers: t,
  env: a
}) {
  const n = await fetch(
    `${a === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/embed/payment_methods`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Embed ${e}`,
        ...t
      },
      body: JSON.stringify(o)
    }
  );
  if (n.ok)
    return n.json();
  throw new Error(n.statusText);
}
i(b, "createPaymentMethod");
async function w({
  token: e,
  paymentIntentId: o,
  paymentMethodId: t,
  env: a
}) {
  const n = await fetch(
    `${a === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/embed/payment_intents/${o}/add_payment_method`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Embed ${e}`
      },
      body: JSON.stringify({
        payment_intent: {
          payment_method_id: t
        }
      })
    }
  );
  if (!n.ok)
    throw new Error(n.statusText);
}
i(w, "addPaymentMethodToPaymentIntent");
async function l({
  token: e,
  paymentIntentId: o,
  env: t
}) {
  const a = await fetch(
    `${t === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/embed/payment_intents/${o}/confirm`,
    {
      method: "POST",
      headers: {
        Authorization: `Embed ${e}`
      }
    }
  );
  if (a.ok)
    return a.json();
  throw new Error(a.statusText);
}
i(l, "confirmPaymentIntent");
function d(e) {
  const [o = "", t = "", a = ""] = e.split("."), n = typeof atob == "function" ? atob : (s) => Buffer.from(s, "base64").toString("utf8");
  return {
    header: JSON.parse(n(o)),
    payload: JSON.parse(n(t)),
    signature: a
  };
}
i(d, "decodeJwt");
export {
  x as createClient
};
