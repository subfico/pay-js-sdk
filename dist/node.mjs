var y = Object.defineProperty;
var p = (n, t) => y(n, "name", { value: t, configurable: !0 });
function l({
  renderToken: n,
  apiKey: t
}) {
  const { env: s = "sandbox" } = m(n).payload;
  async function c({
    accountId: e,
    data: o,
    headers: a
  }) {
    const i = "id" in o.customer ? o.customer : await d({
      requestBody: o.customer,
      headers: a,
      apiKey: t,
      env: s
    }), r = (await f({
      requestBody: {
        ...o.paymentIntent,
        amount: o.paymentIntent?.amount ?? 0,
        ...i?.id && { customer_id: i.id }
      },
      headers: a,
      apiKey: t,
      env: s,
      accountId: e,
      renderToken: n
    })).token ?? "", u = m(r).payload.payment_intent_id ?? "";
    return await h({
      token: r,
      paymentIntentId: u,
      paymentMethod: {
        ...o.paymentMethod,
        ...i?.id && { customer_id: i.id }
      },
      headers: a,
      env: s
    });
  }
  return p(c, "createPayment"), {
    createPayment: c
  };
}
p(l, "createClient");
async function d({
  requestBody: n,
  headers: t,
  apiKey: s,
  env: c
}) {
  const e = await fetch(
    `${c === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/customers`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...!t?.Authorization && { "X-Api-Key": s },
        ...t
      },
      body: JSON.stringify({
        customer: n
      })
    }
  );
  if (e.ok)
    return e.json();
  if (e.status === 422 && n?.email) {
    const o = await fetch(
      `${c === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/customers?email=${n.email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...!t?.Authorization && { "X-Api-Key": s },
          ...t
        }
      }
    );
    if (o.ok) {
      const a = (await o.json()).data[0];
      if (n?.metadata && Object.keys(n.metadata).length > 0) {
        const i = await fetch(
          `${c === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/customers/${a.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              ...!t?.Authorization && { "X-Api-Key": s },
              ...t
            },
            body: JSON.stringify({
              customer: {
                metadata: {
                  ...a.metadata,
                  ...n.metadata
                }
              }
            })
          }
        );
        if (i.ok)
          return i.json();
        throw new Error(`${i.statusText}: ${await i.text()}`);
      }
      return a;
    }
    throw new Error(`${o.statusText}: ${await o.text()}`);
  }
  throw new Error(`${e.statusText}: ${await e.text()}`);
}
p(d, "findOrCreateCustomer");
async function f({
  requestBody: n,
  headers: t,
  accountId: s,
  apiKey: c,
  renderToken: e,
  env: o
}) {
  const a = await fetch(
    `${o === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/payment_intents`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Account-Id": s,
        ...!t?.Authorization && { "X-Api-Key": c },
        "X-Render-Token": e,
        ...t
      },
      body: JSON.stringify({
        payment_intent: n
      })
    }
  );
  if (a.ok)
    return a.json();
  throw new Error(`${a.statusText}: ${await a.text()}`);
}
p(f, "createPaymentIntent");
async function h({
  token: n,
  paymentIntentId: t,
  paymentMethod: s,
  headers: c,
  env: e
}) {
  const { Authorization: o, ...a } = c ?? {}, i = await fetch(
    `${e === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/embed/payment_intents/${t}/confirm`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Embed ${n}`,
        ...a
      },
      body: JSON.stringify({
        payment_intent: {
          payment_method: s
        }
      })
    }
  );
  if (i.ok)
    return i.json();
  throw new Error(`${i.statusText}: ${await i.text()}`);
}
p(h, "confirmPaymentIntent");
function m(n) {
  const [t = "", s = "", c = ""] = n.split("."), e = typeof atob == "function" ? atob : (o) => Buffer.from(o, "base64").toString("utf8");
  return {
    header: JSON.parse(e(t)),
    payload: JSON.parse(e(s)),
    signature: c
  };
}
p(m, "decodeJwt");
export {
  l as createClient
};
