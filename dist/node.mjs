var y = Object.defineProperty;
var p = (e, t) => y(e, "name", { value: t, configurable: !0 });
function j({
  renderToken: e,
  apiKey: t
}) {
  const { env: a = "sandbox" } = u(e).payload;
  async function s({
    accountId: i,
    data: n,
    headers: o
  }) {
    const c = "id" in n.customer ? n.customer : await h({
      requestBody: n.customer,
      headers: o,
      apiKey: t,
      env: a
    }), r = (await f({
      requestBody: {
        ...n.paymentIntent,
        amount: n.paymentIntent?.amount ?? 0,
        ...c?.id && { customer_id: c.id }
      },
      headers: o,
      apiKey: t,
      env: a,
      accountId: i,
      renderToken: e
    })).token ?? "", d = await b({
      token: r,
      requestBody: {
        ...n.paymentMethod,
        ...c?.id && { customer_id: c.id }
      },
      headers: o,
      env: a
    }), m = u(r).payload.payment_intent_id ?? "";
    return await w({
      token: r,
      paymentIntentId: m,
      paymentMethodId: d.id,
      headers: o,
      env: a
    }), await l({
      token: r,
      paymentIntentId: m,
      headers: o,
      env: a
    });
  }
  return p(s, "createPayment"), {
    createPayment: s
  };
}
p(j, "createClient");
async function h({
  requestBody: e,
  headers: t,
  apiKey: a,
  env: s
}) {
  const i = await fetch(
    `${s === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/customers`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...!t?.Authorization && { "X-Api-Key": a },
        ...t
      },
      body: JSON.stringify({
        customer: e
      })
    }
  );
  if (i.ok)
    return i.json();
  if (i.status === 422 && e?.email) {
    const n = await fetch(
      `${s === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/customers?email=${e.email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...!t?.Authorization && { "X-Api-Key": a },
          ...t
        }
      }
    );
    if (n.ok)
      return (await n.json()).data[0];
    throw new Error(n.statusText);
  }
  throw new Error(i.statusText);
}
p(h, "findOrCreateCustomer");
async function f({
  requestBody: e,
  headers: t,
  accountId: a,
  apiKey: s,
  renderToken: i,
  env: n
}) {
  const o = await fetch(
    `${n === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/payment_intents`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Account-Id": a,
        ...!t?.Authorization && { "X-Api-Key": s },
        "X-Render-Token": i,
        ...t
      },
      body: JSON.stringify({
        payment_intent: e
      })
    }
  );
  if (o.ok)
    return o.json();
  throw new Error(o.statusText);
}
p(f, "createPaymentIntent");
async function b({
  token: e,
  requestBody: t,
  headers: a,
  env: s
}) {
  const { Authorization: i, ...n } = a ?? {}, o = await fetch(
    `${s === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/embed/payment_methods`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Embed ${e}`,
        ...n
      },
      body: JSON.stringify({
        payment_method: t
      })
    }
  );
  if (o.ok)
    return o.json();
  throw new Error(o.statusText);
}
p(b, "createPaymentMethod");
async function w({
  token: e,
  paymentIntentId: t,
  paymentMethodId: a,
  headers: s,
  env: i
}) {
  const { Authorization: n, ...o } = s ?? {}, c = await fetch(
    `${i === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/embed/payment_intents/${t}/add_payment_method`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Embed ${e}`,
        ...o
      },
      body: JSON.stringify({
        payment_intent: {
          payment_method_id: a
        }
      })
    }
  );
  if (!c.ok)
    throw new Error(c.statusText);
}
p(w, "addPaymentMethodToPaymentIntent");
async function l({
  token: e,
  paymentIntentId: t,
  headers: a,
  env: s
}) {
  const { Authorization: i, ...n } = a ?? {}, o = await fetch(
    `${s === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/embed/payment_intents/${t}/confirm`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Embed ${e}`,
        ...n
      }
    }
  );
  if (o.ok)
    return o.json();
  throw new Error(o.statusText);
}
p(l, "confirmPaymentIntent");
function u(e) {
  const [t = "", a = "", s = ""] = e.split("."), i = typeof atob == "function" ? atob : (n) => Buffer.from(n, "base64").toString("utf8");
  return {
    header: JSON.parse(i(t)),
    payload: JSON.parse(i(a)),
    signature: s
  };
}
p(u, "decodeJwt");
export {
  j as createClient
};
