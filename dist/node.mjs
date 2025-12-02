var y = Object.defineProperty;
var p = (o, t) => y(o, "name", { value: t, configurable: !0 });
function l({
  renderToken: o,
  apiKey: t
}) {
  const { env: e = "sandbox" } = m(o).payload;
  async function c({
    accountId: a,
    data: n,
    headers: i
  }) {
    const s = "id" in n.customer ? n.customer : await d({
      requestBody: n.customer,
      headers: i,
      apiKey: t,
      env: e
    }), r = (await f({
      requestBody: {
        ...n.paymentIntent,
        amount: n.paymentIntent?.amount ?? 0,
        ...s?.id && { customer_id: s.id }
      },
      headers: i,
      apiKey: t,
      env: e,
      accountId: a,
      renderToken: o
    })).token ?? "", u = m(r).payload.payment_intent_id ?? "";
    return await h({
      token: r,
      paymentIntentId: u,
      ..."paymentMethod" in n ? {
        paymentMethod: {
          ...n.paymentMethod,
          ...s?.id && { customer_id: s.id }
        }
      } : {
        paymentMethod: { id: n.paymentIntent.payment_method_id }
      },
      headers: i,
      env: e
    });
  }
  return p(c, "createPayment"), {
    createPayment: c
  };
}
p(l, "createClient");
async function d({
  requestBody: o,
  headers: t,
  apiKey: e,
  env: c
}) {
  const a = await fetch(
    `${c === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/customers`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...!t?.Authorization && { "X-Api-Key": e },
        ...t
      },
      body: JSON.stringify({
        customer: o
      })
    }
  );
  if (a.ok)
    return a.json();
  if (a.status === 422 && o?.email) {
    const n = await fetch(
      `${c === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/customers?email=${o.email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...!t?.Authorization && { "X-Api-Key": e },
          ...t
        }
      }
    );
    if (n.ok) {
      const i = (await n.json()).data[0];
      if (o?.metadata && Object.keys(o.metadata).length > 0) {
        const s = await fetch(
          `${c === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/customers/${i.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              ...!t?.Authorization && { "X-Api-Key": e },
              ...t
            },
            body: JSON.stringify({
              customer: {
                metadata: {
                  ...i.metadata,
                  ...o.metadata
                }
              }
            })
          }
        );
        if (s.ok)
          return s.json();
        throw new Error(`${s.statusText}: ${await s.text()}`);
      }
      return i;
    }
    throw new Error(`${n.statusText}: ${await n.text()}`);
  }
  throw new Error(`${a.statusText}: ${await a.text()}`);
}
p(d, "findOrCreateCustomer");
async function f({
  requestBody: o,
  headers: t,
  accountId: e,
  apiKey: c,
  renderToken: a,
  env: n
}) {
  const i = await fetch(
    `${n === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/payment_intents`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Account-Id": e,
        ...!t?.Authorization && { "X-Api-Key": c },
        "X-Render-Token": a,
        ...t
      },
      body: JSON.stringify({
        payment_intent: o
      })
    }
  );
  if (i.ok)
    return i.json();
  throw new Error(`${i.statusText}: ${await i.text()}`);
}
p(f, "createPaymentIntent");
async function h({
  token: o,
  paymentIntentId: t,
  paymentMethod: e,
  headers: c,
  env: a
}) {
  const { Authorization: n, ...i } = c ?? {}, s = await fetch(
    `${a === "production" ? "https://pay.subfi.com" : "https://pay-sandbox.subfi.com"}/embed/payment_intents/${t}/confirm`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Embed ${o}`,
        ...i
      },
      body: JSON.stringify({
        payment_intent: {
          ...e && "id" in e ? { payment_method_id: e.id } : { payment_method: e }
        }
      })
    }
  );
  if (s.ok)
    return s.json();
  throw new Error(`${s.statusText}: ${await s.text()}`);
}
p(h, "confirmPaymentIntent");
function m(o) {
  const [t = "", e = "", c = ""] = o.split("."), a = typeof atob == "function" ? atob : (n) => Buffer.from(n, "base64").toString("utf8");
  return {
    header: JSON.parse(a(t)),
    payload: JSON.parse(a(e)),
    signature: c
  };
}
p(m, "decodeJwt");
export {
  l as createClient
};
