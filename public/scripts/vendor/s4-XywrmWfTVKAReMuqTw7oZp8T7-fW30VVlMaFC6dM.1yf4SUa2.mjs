import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { Z as t, q as n, w as r } from "./framer.B3F8DTpJ.mjs";
import { n as i, t as a } from "./shared-lib.BczJtw9W.mjs";
import { a as o, r as s } from "./r4GnmA_r2.8mbnORs-.mjs";
function c(e, t) {
  let n = e?.TWzcXE82P;
  return {
    breakpoints: [
      { hash: `dbrefx`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1d0esm7`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `12krsi0`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-C4Pu8`,
    title: `${n === void 0 ? `{{TWzcXE82P}}` : d(n)} - Portfolio project`,
    viewport: `width=device-width`,
  };
}
async function l(e, t) {
  let i = new r(),
    a = {
      from: { alias: `SB16CA7KQ`, data: o, type: `Collection` },
      select: [{ collection: `SB16CA7KQ`, name: `TWzcXE82P`, type: `Identifier` }],
      where: n(e, `SB16CA7KQ`),
    },
    s = await i.query(a, t);
  if (s.length === 0) throw Error(`No data matches pathVariables`);
  let l = s[0];
  return c(l, t);
}
async function u(e, t) {
  let n = new r(),
    i = {
      from: { alias: `SB16CA7KQ`, data: o, type: `Collection` },
      select: [{ collection: `SB16CA7KQ`, name: `TWzcXE82P`, type: `Identifier` }],
    };
  for (let t of e) i.select.push({ collection: `SB16CA7KQ`, name: t, type: `Identifier` });
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
      s(),
      a(),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = 1),
      (p = {
        exports: {
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
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
//# sourceMappingURL=s4-XywrmWfTVKAReMuqTw7oZp8T7-fW30VVlMaFC6dM.1yf4SUa2.mjs.map
