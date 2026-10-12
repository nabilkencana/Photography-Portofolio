import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as i,
  c as a,
  j as o,
  l as s,
  o as c,
  p as ee,
  s as te,
  w as ne,
} from "./react.typNXLzE.mjs";
import { a as re, j as l, r as u, t as d } from "./motion.CQsVbJu1.mjs";
import {
  D as ie,
  Dt as f,
  F as p,
  It as ae,
  L as m,
  Lt as oe,
  Nt as se,
  O as ce,
  S as h,
  St as g,
  Tt as le,
  U as _,
  W as v,
  Z as y,
  _t as ue,
  a as b,
  bt as de,
  d as x,
  i as S,
  it as C,
  j as w,
  kt as fe,
  mt as pe,
  n as me,
  wt as he,
  x as ge,
  yt as _e,
} from "./framer.B3F8DTpJ.mjs";
import { a as T, i as E, o as D, r as O } from "./shared-lib.BczJtw9W.mjs";
import { n as k, t as A } from "./A7j4jyv2g.ZuufPjhg.mjs";
import { n as ve, t as j } from "./q8sExslWw.c07JCq3Q.mjs";
import { n as ye, t as M } from "./Rt3Sh5gwq.Cy2nCw4B.mjs";
import { i as be, t as xe } from "./EEv3Nygkn.CJnQhIgT.mjs";
import { n as Se, t as N } from "./O_XoZ3FcZ.ctzfLPh0.mjs";
import { i as Ce, n as we, r as Te, t as Ee } from "./E952Zd3mb.BxttGTN2.mjs";
import De, { t as Oe } from "./GPHYN1DWarefpQsLkauhX_uGeGVwTQjsA_8IArx8vwM.MbSIhgQA.mjs";
var P, ke, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Ae, je, Y, Me, X, Z, Ne, Pe, Q, $;
e(() => {
  (te(),
    y(),
    d(),
    r(),
    E(),
    Se(),
    k(),
    D(),
    ve(),
    ye(),
    be(),
    Ce(),
    Oe(),
    (P = _(A)),
    (ke = _(j)),
    (F = _(N)),
    (I = ae(b)),
    (L = oe(l.main)),
    (R = _(T)),
    (z = _(O)),
    (B = _(M)),
    (V = {
      DFUXYb7iI: `(min-width: 810px) and (max-width: 1199.98px)`,
      ubwWauV3w: `(min-width: 1200px)`,
      xiYU0EEsP: `(max-width: 809.98px)`,
    }),
    (H = []),
    (U = `framer-cUrCZ`),
    (W = {
      DFUXYb7iI: `framer-v-elbmw2`,
      ubwWauV3w: `framer-v-t1zfnx`,
      xiYU0EEsP: `framer-v-14d5jl0`,
    }),
    (G = (e, t, n) => (e && t ? `position` : n)),
    (K = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 27, delay: 0.3, mass: 1, stiffness: 121, type: `spring` },
      x: 0,
      y: 0,
    }),
    (q = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 170,
    }),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Ae = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (je = (e, t, n) =>
      e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
    (Y = () => ({
      from: { alias: `S305TxtTH`, data: xe, type: `Collection` },
      orderBy: [
        { collection: `S305TxtTH`, direction: `desc`, name: `Fi53MNOAk`, type: `Identifier` },
      ],
      select: [
        { collection: `S305TxtTH`, name: `TUMaRpq8Y`, type: `Identifier` },
        { collection: `S305TxtTH`, name: `Fi53MNOAk`, type: `Identifier` },
        { collection: `S305TxtTH`, name: `ua9FnvLmw`, type: `Identifier` },
        { collection: `S305TxtTH`, name: `o4RZewo_g`, type: `Identifier` },
        { collection: `S305TxtTH`, name: `id`, type: `Identifier` },
      ],
    })),
    (Me = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = g(e, t, `S305TxtTH`);
      return n(f(r), i, a);
    }),
    (X = { Desktop: `ubwWauV3w`, Phone: `xiYU0EEsP`, Tablet: `DFUXYb7iI` }),
    (Z = ({ value: e }) =>
      de()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ne = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: X[r.variant] ?? r.variant ?? `ubwWauV3w`,
    })),
    (Pe = { component: M, variant: `emBAu_3nQ` }),
    (Q = se(
      ee(function (e, r) {
        let ee = i(null),
          te = r ?? ee,
          d = ne(),
          { activeLocale: f, setLocale: ae } = he(),
          m = pe(),
          { style: oe, className: se, layoutId: g, variant: _, ...v } = Ne(e);
        le(n(() => De({}, f), [f]));
        let [y, de] = _e(_, V, !1),
          C = p(U, Ee),
          w = o(x)?.isLayoutTemplate,
          E = !!o(re)?.transition?.layout,
          D = G(w, E);
        fe();
        let k = i(null);
        return (
          ue({ v4fkfb: Pe }),
          c(x.Provider, {
            value: {
              activeVariantId: y,
              humanReadableVariantMap: X,
              primaryVariantId: `ubwWauV3w`,
              variantClassNames: W,
            },
            children: s(u, {
              id: g ?? d,
              children: [
                c(Z, { value: `html body { background: rgb(241, 241, 241); }` }),
                s(l.div, {
                  ...v,
                  className: p(C, `framer-t1zfnx`, se),
                  ref: te,
                  style: { ...oe },
                  children: [
                    s(l.div, {
                      className: `framer-1i3uck0`,
                      "data-framer-name": `Main`,
                      layout: D,
                      children: [
                        s(L, {
                          animate: K,
                          className: `framer-1t588xa`,
                          "data-framer-appear-id": `1t588xa`,
                          "data-framer-name": `Container`,
                          initial: q,
                          optimized: !0,
                          children: [
                            s(`div`, {
                              className: `framer-waj3zq`,
                              "data-framer-name": `Heading`,
                              children: [
                                c(h, {
                                  breakpoint: y,
                                  overrides: {
                                    DFUXYb7iI: {
                                      width: `max((min(max(${m?.width || `100vw`}, 1px), 1848px) - 64px) / 4, 50px)`,
                                      y: (m?.y || 0) + 0 + 0 + 0 + 214 + 0 + 0 + 0,
                                    },
                                    xiYU0EEsP: {
                                      width: `calc(min(max(${m?.width || `100vw`}, 1px), 1848px) - 48px)`,
                                      y: (m?.y || 0) + 0 + 0 + 0 + 114 + 0 + 0 + 118.32,
                                    },
                                  },
                                  children: c(S, {
                                    height: 74,
                                    width: `282px`,
                                    y: (m?.y || 0) + 0 + 0 + 0 + 254 + 0 + 0 + 0,
                                    children: c(b, {
                                      className: `framer-1ikdu59-container`,
                                      nodeId: `kxgPYFUKQ`,
                                      scopeId: `JB9ZuENHj`,
                                      children: c(h, {
                                        breakpoint: y,
                                        overrides: {
                                          DFUXYb7iI: { variant: J(`RPQmTWYXP`) },
                                          xiYU0EEsP: { variant: J(`TuRw7aFlX`) },
                                        },
                                        children: c(A, {
                                          height: `100%`,
                                          id: `kxgPYFUKQ`,
                                          layoutId: `kxgPYFUKQ`,
                                          style: { width: `100%` },
                                          variant: J(`RqjG8NJO6`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                c(ce, {
                                  __fromCanvasComponent: !0,
                                  children: c(t, {
                                    children: c(`h1`, {
                                      className: `framer-styles-preset-13zczbi`,
                                      "data-styles-preset": `E952Zd3mb`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, rgb(17, 17, 18))`,
                                      },
                                      children: `Photographer's diary`,
                                    }),
                                  }),
                                  className: `framer-dabxbd`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-15eeti4`,
                              children: c(me, {
                                children: c(Me, {
                                  pageSize: 6,
                                  query: Y(),
                                  children: (e, t, n) =>
                                    s(a, {
                                      children: [
                                        e?.map(
                                          (
                                            {
                                              Fi53MNOAk: e,
                                              id: t,
                                              o4RZewo_g: n,
                                              TUMaRpq8Y: r,
                                              ua9FnvLmw: i,
                                            },
                                            a
                                          ) => (
                                            (r ??= ``),
                                            (i ??= ``),
                                            c(
                                              u,
                                              {
                                                id: `S305TxtTH-${t}`,
                                                children: c(ge.Provider, {
                                                  value: { TUMaRpq8Y: r },
                                                  children: c(ie, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { TUMaRpq8Y: r },
                                                          webPageId: `QciPY2G4i`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { TUMaRpq8Y: r },
                                                          webPageId: `QciPY2G4i`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { TUMaRpq8Y: r },
                                                          webPageId: `QciPY2G4i`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (t) =>
                                                      c(h, {
                                                        breakpoint: y,
                                                        overrides: {
                                                          DFUXYb7iI: {
                                                            width: `max((min(max(${m?.width || `100vw`}, 1px), 1848px) - 94px) / 2, 50px)`,
                                                            y:
                                                              (m?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              214 +
                                                              158.32 +
                                                              0 +
                                                              0,
                                                          },
                                                          xiYU0EEsP: {
                                                            height: 246,
                                                            width: `calc(min(max(${m?.width || `100vw`}, 1px), 1848px) - 48px)`,
                                                            y:
                                                              (m?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              114 +
                                                              232.32 +
                                                              0 +
                                                              1350,
                                                          },
                                                        },
                                                        children: c(S, {
                                                          height: 390,
                                                          width: `max((min(max(${m?.width || `100vw`}, 1px), 1848px) - 112px) / 2, 50px)`,
                                                          y:
                                                            (m?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            254 +
                                                            198.32 +
                                                            0 +
                                                            0,
                                                          children: c(b, {
                                                            className: `framer-z3qkfm-container`,
                                                            "data-framer-cursor": `v4fkfb`,
                                                            nodeId: `kUQ_pd005`,
                                                            scopeId: `JB9ZuENHj`,
                                                            children: c(h, {
                                                              breakpoint: y,
                                                              overrides: {
                                                                DFUXYb7iI: {
                                                                  rvBKN8hHg: t[1],
                                                                  variant: J(`jtdQHdy2h`),
                                                                },
                                                                xiYU0EEsP: {
                                                                  rvBKN8hHg: t[2],
                                                                  variant: J(`joZZPMbeY`),
                                                                },
                                                              },
                                                              children: c(j, {
                                                                atjk_KyTN: Ae(n),
                                                                FG8rd1EUA: e,
                                                                height: `100%`,
                                                                id: `kUQ_pd005`,
                                                                layoutId: `kUQ_pd005`,
                                                                rvBKN8hHg: t[0],
                                                                style: {
                                                                  height: `100%`,
                                                                  width: `100%`,
                                                                },
                                                                TFO4LYmNP: i,
                                                                variant: J(`kYHa_x55W`),
                                                                width: `100%`,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                }),
                                              },
                                              t
                                            )
                                          )
                                        ),
                                        c(h, {
                                          breakpoint: y,
                                          overrides: {
                                            DFUXYb7iI: {
                                              y:
                                                (m?.y || 0) + 0 + 0 + 0 + 214 + 158.32 + 1230 - -30,
                                            },
                                            xiYU0EEsP: {
                                              y:
                                                (m?.y || 0) + 0 + 0 + 0 + 114 + 232.32 + 1596 - -11,
                                            },
                                          },
                                          children: c(S, {
                                            height: 40,
                                            y: (m?.y || 0) + 0 + 0 + 0 + 254 + 198.32 + 1250 - -20,
                                            children: c(I, {
                                              __loadMore: n,
                                              __paginationInfo: t,
                                              className: `framer-1kq2p7b-container`,
                                              isModuleExternal: !0,
                                              nodeId: `Vd6_fKY3U`,
                                              ref: k,
                                              scopeId: `JB9ZuENHj`,
                                              children: c(N, {
                                                height: `100%`,
                                                id: `Vd6_fKY3U`,
                                                layoutId: `Vd6_fKY3U`,
                                                variant: je(
                                                  t,
                                                  { disabled: `PX1MOnVXY`, loading: `G47S15YSn` },
                                                  J(`G47S15YSn`)
                                                ),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        c(h, {
                          breakpoint: y,
                          overrides: {
                            DFUXYb7iI: { height: 1722.32 },
                            xiYU0EEsP: { height: 2002.32 },
                          },
                          children: c(S, {
                            height: 1862.32,
                            width: m?.width || `100vw`,
                            y: (m?.y || 0) + 0 + 0 + 0,
                            children: c(b, {
                              className: `framer-1w3mdbr-container`,
                              "data-framer-name": `Grid`,
                              name: `Grid`,
                              nodeId: `PwPm7oiKX`,
                              scopeId: `JB9ZuENHj`,
                              children: c(h, {
                                breakpoint: y,
                                overrides: {
                                  DFUXYb7iI: { ieZNkwrrK: `0px 32px 0px 32px` },
                                  xiYU0EEsP: { JLnFVd4lc: !1, SZjrZZXey: !1 },
                                },
                                children: c(T, {
                                  gbAjZwZif: !0,
                                  height: `100%`,
                                  HIadHX3E2: `rgba(0, 0, 0, 0.12)`,
                                  id: `PwPm7oiKX`,
                                  ieZNkwrrK: `0px 36px 0px 36px`,
                                  JLnFVd4lc: !0,
                                  layoutId: `PwPm7oiKX`,
                                  name: `Grid`,
                                  style: { height: `100%`, width: `100%` },
                                  SZjrZZXey: !0,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    c(S, {
                      children: c(b, {
                        className: `framer-jxkndn-container`,
                        "data-framer-name": `Smooth scroll`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: D,
                        name: `Smooth scroll`,
                        nodeId: `zY07oqwOR`,
                        scopeId: `JB9ZuENHj`,
                        children: c(O, {
                          height: `100%`,
                          id: `zY07oqwOR`,
                          infinite: !1,
                          intensity: 8,
                          layoutId: `zY07oqwOR`,
                          name: `Smooth scroll`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-cUrCZ.framer-1qzc576, .framer-cUrCZ .framer-1qzc576 { display: block; }`,
        `.framer-cUrCZ.framer-t1zfnx { align-content: center; align-items: center; background-color: #f1f1f1; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-cUrCZ .framer-1i3uck0 { align-content: center; align-items: center; background-color: var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, #f1f1f1); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-cUrCZ .framer-1t588xa { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 110px; height: min-content; justify-content: center; max-width: 1848px; overflow: visible; padding: 254px 36px 160px 36px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-cUrCZ .framer-waj3zq { display: grid; flex: none; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-cUrCZ .framer-1ikdu59-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 282px; }`,
        `.framer-cUrCZ .framer-dabxbd { --framer-paragraph-spacing: 0px; align-self: start; flex: none; grid-column: span 3; height: 100%; justify-self: start; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-cUrCZ .framer-15eeti4 { display: grid; flex: none; gap: 40px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-cUrCZ .framer-z3qkfm-container { align-self: start; aspect-ratio: 1.3948717948717948 / 1; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-cUrCZ .framer-1kq2p7b-container { bottom: -60px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); width: auto; }`,
        `.framer-cUrCZ .framer-1w3mdbr-container { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 0; }`,
        `.framer-cUrCZ .framer-jxkndn-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...we,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-cUrCZ.framer-t1zfnx { width: 810px; } .framer-cUrCZ .framer-1t588xa { gap: 70px; padding: 214px 32px 120px 32px; } .framer-cUrCZ .framer-1ikdu59-container { width: 100%; } .framer-cUrCZ .framer-15eeti4 { gap: 30px; } .framer-cUrCZ .framer-1kq2p7b-container { bottom: -70px; }}`,
        `@media (max-width: 809.98px) { .framer-cUrCZ.framer-t1zfnx { width: 390px; } .framer-cUrCZ .framer-1t588xa { gap: 40px; padding: 114px 24px 60px 24px; } .framer-cUrCZ .framer-waj3zq { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; } .framer-cUrCZ .framer-1ikdu59-container { align-self: unset; order: 1; width: 100%; } .framer-cUrCZ .framer-dabxbd { align-self: unset; height: auto; order: 0; } .framer-cUrCZ .framer-15eeti4 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; justify-content: flex-start; } .framer-cUrCZ .framer-z3qkfm-container { align-self: unset; } .framer-cUrCZ .framer-1kq2p7b-container { bottom: -51px; }}`,
      ],
      `framer-cUrCZ`
    )),
    (Q.displayName = `Blog`),
    (Q.defaultProps = { height: 2862, width: 1200 }),
    w(
      Q,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
          ],
        },
        ...P,
        ...ke,
        ...F,
        ...R,
        ...z,
        ...B,
        ...v(Te),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = C.get(Y(), n);
        return Promise.allSettled([
          r.preload(),
          m(A, {}, t),
          m(T, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => [m(j, {}, t), m(N, {}, t)]));
          })(),
        ]);
      },
    }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerJB9ZuENHj`,
          slots: [],
          annotations: {
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerScrollSections: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"DFUXYb7iI":{"layout":["fixed","auto"]},"xiYU0EEsP":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerIntrinsicHeight: `2862`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, H as queryParamNames };
//# sourceMappingURL=O9-nqPThbOmeG2YG88sNlqVfZO0ocSAzLVONXGLN9CE.BntMeKQl.mjs.map
