import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { Z as t, q as n, w as r } from "./framer.B3F8DTpJ.mjs";
import { n as i, t as a } from "./shared-lib.BczJtw9W.mjs";
import { i as o, t as s } from "./EEv3Nygkn.CJnQhIgT.mjs";
function c(e, t) {
  let n = e?.ua9FnvLmw;
  return {
    breakpoints: [
      { hash: `kc4ov5`, mediaQuery: `(min-width: 1200px)` },
      { hash: `18c9l0a`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `ndrouk`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-hPmvp`,
    title: `${n === void 0 ? `{{ua9FnvLmw}}` : d(n)} - M. Haikal Arrasyid Blog`,
    viewport: `width=device-width`,
  };
}
async function l(e, t) {
  let i = new r(),
    a = {
      from: { alias: `QciPY2G4i`, data: s, type: `Collection` },
      select: [{ collection: `QciPY2G4i`, name: `ua9FnvLmw`, type: `Identifier` }],
      where: n(e, `QciPY2G4i`),
    },
    o = await i.query(a, t);
  if (o.length === 0) throw Error(`No data matches pathVariables`);
  let l = o[0];
  return c(l, t);
}
async function u(e, t) {
  let n = new r(),
    i = {
      from: { alias: `QciPY2G4i`, data: s, type: `Collection` },
      select: [{ collection: `QciPY2G4i`, name: `ua9FnvLmw`, type: `Identifier` }],
    };
  for (let t of e) i.select.push({ collection: `QciPY2G4i`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: c(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var d,
  f,
  p,
  m = e(() => {
    (t(),
      o(),
      a(),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = 1),
      (p = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
m();
export {
  p as __FramerMetadata__,
  c as default,
  u as fetchAllMetadata,
  l as fetchMetadata,
  f as metadataVersion,
  m as t,
};
//# sourceMappingURL=IN4u4ftlkmCldAQ0UQbJYFR1fMbr053mDa9qp5Lk22A.BOIsTBtx.mjs.map
