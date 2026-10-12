import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as ee,
  j as i,
  l as a,
  o,
  p as s,
  s as c,
  w as te,
} from "./react.typNXLzE.mjs";
import { a as ne, j as l, r as re, t as u } from "./motion.CQsVbJu1.mjs";
import {
  D as ie,
  F as d,
  L as f,
  Nt as p,
  O as m,
  S as h,
  Tt as g,
  U as _,
  W as v,
  Z as y,
  _t as ae,
  a as b,
  bt as x,
  d as S,
  i as C,
  j as w,
  kt as oe,
  mt as se,
  wt as ce,
  yt as le,
} from "./framer.B3F8DTpJ.mjs";
import { i as T, n as E, r as ue, t as de } from "./jsPFAj3P2.xszjOvq7.mjs";
import { a as D, i as O, o as k, r as A } from "./shared-lib.BczJtw9W.mjs";
import { n as j, t as M } from "./Cv6kYmHpn.B4RYovEx.mjs";
import { i as N, n as fe, r as pe, t as me } from "./E952Zd3mb.BxttGTN2.mjs";
import { i as P, n as F, r as I, t as L } from "./ar0X3XvKk.BFP7uYt_.mjs";
import R, { t as he } from "./5ofrUt2I3BwySCr8tiqEIZyGI0NoJv2JCMgYifH_8ZU.D1yTm0Hg.mjs";
var z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    y(),
    u(),
    r(),
    O(),
    j(),
    k(),
    P(),
    N(),
    T(),
    he(),
    (z = _(M)),
    (B = _(D)),
    (V = _(A)),
    (H = {
      L7wGa4bsr: `(min-width: 1200px)`,
      SiLwkaRYp: `(max-width: 809.98px)`,
      UsXyUSw2s: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (U = []),
    (W = `framer-Ug5Jp`),
    (G = {
      L7wGa4bsr: `framer-v-1s8owsd`,
      SiLwkaRYp: `framer-v-1xww77b`,
      UsXyUSw2s: `framer-v-1ee4yxn`,
    }),
    (K = (e, t, n) => (e && t ? `position` : n)),
    (q = (e, t) => `translateX(-50%) ${t}`),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `L7wGa4bsr`, Phone: `SiLwkaRYp`, Tablet: `UsXyUSw2s` }),
    (X = ({ value: e }) =>
      x()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `L7wGa4bsr`,
    })),
    (Q = p(
      s(function (e, r) {
        let s = ee(null),
          c = r ?? s,
          u = te(),
          { activeLocale: f, setLocale: p } = ce(),
          _ = se(),
          { style: v, className: y, layoutId: x, variant: w, ...T } = Z(e);
        g(n(() => R({}, f), [f]));
        let [E, ue] = le(w, H, !1),
          O = d(W, me, L, de),
          k = i(S)?.isLayoutTemplate,
          j = !!i(ne)?.transition?.layout,
          N = K(k, j);
        return (
          oe(),
          ae({}),
          o(S.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: Y,
              primaryVariantId: `L7wGa4bsr`,
              variantClassNames: G,
            },
            children: a(re, {
              id: x ?? u,
              children: [
                o(X, {
                  value: `html body { background: var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, rgb(241, 241, 241)); }`,
                }),
                a(l.div, {
                  ...T,
                  className: d(O, `framer-1s8owsd`, y),
                  ref: c,
                  style: { ...v },
                  children: [
                    a(l.main, {
                      className: `framer-5clbgm`,
                      "data-framer-name": `Main`,
                      layout: N,
                      children: [
                        o(h, {
                          breakpoint: E,
                          overrides: {
                            SiLwkaRYp: {
                              children: o(t, {
                                children: o(`h2`, {
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                    "--framer-font-size": `270px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `-0.07em`,
                                    "--framer-line-height": `0.96em`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `rgba(0, 0, 0, 0.03)`,
                                  },
                                  children: `404`,
                                }),
                              }),
                            },
                            UsXyUSw2s: {
                              children: o(t, {
                                children: o(`h2`, {
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                    "--framer-font-size": `312px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `-0.07em`,
                                    "--framer-line-height": `0.96em`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `rgba(0, 0, 0, 0.03)`,
                                  },
                                  children: `404`,
                                }),
                              }),
                            },
                          },
                          children: o(m, {
                            __fromCanvasComponent: !0,
                            children: o(t, {
                              children: o(`h2`, {
                                style: {
                                  "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                  "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                  "--framer-font-size": `562px`,
                                  "--framer-font-weight": `600`,
                                  "--framer-letter-spacing": `-0.07em`,
                                  "--framer-line-height": `0.96em`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `rgba(0, 0, 0, 0.03)`,
                                },
                                children: `404`,
                              }),
                            }),
                            className: `framer-18gwriy`,
                            fonts: [`Inter-SemiBold`],
                            transformTemplate: q,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        a(`div`, {
                          className: `framer-1snj22b`,
                          "data-framer-name": `Text`,
                          children: [
                            o(m, {
                              __fromCanvasComponent: !0,
                              children: o(t, {
                                children: o(`h1`, {
                                  className: `framer-styles-preset-13zczbi`,
                                  "data-styles-preset": `E952Zd3mb`,
                                  children: `Out of Frame`,
                                }),
                              }),
                              className: `framer-1s5h6zi`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            a(`div`, {
                              className: `framer-wm52ho`,
                              "data-framer-name": `text`,
                              children: [
                                o(m, {
                                  __fromCanvasComponent: !0,
                                  children: o(t, {
                                    children: o(`p`, {
                                      className: `framer-styles-preset-1ngxlwc`,
                                      "data-styles-preset": `ar0X3XvKk`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, rgb(17, 17, 18))`,
                                      },
                                      children: `Page not found`,
                                    }),
                                  }),
                                  className: `framer-wl1mmz`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(m, {
                                  __fromCanvasComponent: !0,
                                  children: o(t, {
                                    children: o(`p`, {
                                      className: `framer-styles-preset-8vgk3u`,
                                      "data-styles-preset": `jsPFAj3P2`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `rgba(17, 17, 18, 0.6)`,
                                      },
                                      children: `This page didn’t make the shot.`,
                                    }),
                                  }),
                                  className: `framer-our7iv`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        o(ie, {
                          links: [
                            { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            o(h, {
                              breakpoint: E,
                              overrides: {
                                SiLwkaRYp: { y: (_?.y || 0) + 0 + 0 + 160 + 520.32 },
                                UsXyUSw2s: { y: (_?.y || 0) + 0 + 0 + 230 + 540.32 },
                              },
                              children: o(C, {
                                height: 47,
                                y: (_?.y || 0) + 0 + 0 + 380 + 570.32,
                                children: o(b, {
                                  className: `framer-zei5us-container`,
                                  nodeId: `O3AARjaKM`,
                                  scopeId: `AHZqS6vxL`,
                                  children: o(h, {
                                    breakpoint: E,
                                    overrides: {
                                      SiLwkaRYp: { rYvSKCvJf: e[2], variant: J(`iI2ipV6vo`) },
                                      UsXyUSw2s: { rYvSKCvJf: e[1], variant: J(`icsoeaVPh`) },
                                    },
                                    children: o(M, {
                                      height: `100%`,
                                      id: `O3AARjaKM`,
                                      layoutId: `O3AARjaKM`,
                                      rYvSKCvJf: e[0],
                                      u99mHedFv: `Go back home`,
                                      variant: J(`VdXXpamQf`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                        }),
                        o(h, {
                          breakpoint: E,
                          overrides: {
                            SiLwkaRYp: { height: 847.32 },
                            UsXyUSw2s: { height: 947.32 },
                          },
                          children: o(C, {
                            height: 1277.32,
                            width: _?.width || `100vw`,
                            y: (_?.y || 0) + 0 + 0 + 0,
                            children: o(b, {
                              className: `framer-6i0b2i-container`,
                              "data-framer-name": `Grid`,
                              name: `Grid`,
                              nodeId: `sA_AYyxCr`,
                              scopeId: `AHZqS6vxL`,
                              children: o(h, {
                                breakpoint: E,
                                overrides: {
                                  SiLwkaRYp: { JLnFVd4lc: !1, SZjrZZXey: !1 },
                                  UsXyUSw2s: { ieZNkwrrK: `0px 32px 0px 32px` },
                                },
                                children: o(D, {
                                  gbAjZwZif: !0,
                                  height: `100%`,
                                  HIadHX3E2: `rgba(0, 0, 0, 0.12)`,
                                  id: `sA_AYyxCr`,
                                  ieZNkwrrK: `0px 36px 0px 36px`,
                                  JLnFVd4lc: !0,
                                  layoutId: `sA_AYyxCr`,
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
                    o(C, {
                      children: o(b, {
                        className: `framer-1d6yrj5-container`,
                        "data-framer-name": `Smooth scroll`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: N,
                        name: `Smooth scroll`,
                        nodeId: `hiTuAbLCu`,
                        scopeId: `AHZqS6vxL`,
                        children: o(A, {
                          height: `100%`,
                          id: `hiTuAbLCu`,
                          infinite: !1,
                          intensity: 8,
                          layoutId: `hiTuAbLCu`,
                          name: `Smooth scroll`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-Ug5Jp.framer-pt1sdk, .framer-Ug5Jp .framer-pt1sdk { display: block; }`,
        `.framer-Ug5Jp.framer-1s8owsd { align-content: center; align-items: center; background-color: var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, #f1f1f1); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Ug5Jp .framer-5clbgm { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 380px 36px 280px 36px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Ug5Jp .framer-18gwriy { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 282px; transform: translateX(-50%); white-space: pre; width: auto; z-index: 0; }`,
        `.framer-Ug5Jp .framer-1snj22b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Ug5Jp .framer-1s5h6zi { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-Ug5Jp .framer-wm52ho { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Ug5Jp .framer-wl1mmz, .framer-Ug5Jp .framer-our7iv { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: none; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Ug5Jp .framer-zei5us-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `.framer-Ug5Jp .framer-6i0b2i-container { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 0; }`,
        `.framer-Ug5Jp .framer-1d6yrj5-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...fe,
        ...F,
        ...E,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Ug5Jp.framer-1s8owsd { width: 810px; } .framer-Ug5Jp .framer-5clbgm { gap: 60px; padding: 230px 32px 130px 32px; } .framer-Ug5Jp .framer-18gwriy { top: 174px; } .framer-Ug5Jp .framer-1snj22b { gap: 40px; }}`,
        `@media (max-width: 809.98px) { .framer-Ug5Jp.framer-1s8owsd { width: 390px; } .framer-Ug5Jp .framer-5clbgm { gap: 50px; padding: 160px 24px 120px 24px; } .framer-Ug5Jp .framer-18gwriy { bottom: -50px; left: 47%; top: unset; } .framer-Ug5Jp .framer-1snj22b { gap: 30px; }}`,
      ],
      `framer-Ug5Jp`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 2007, width: 1200 }),
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
              url: `../../assets/fonts/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/yDtI2UI8XcEg1W2je9XPN3Noo.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
              weight: `600`,
            },
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
        ...z,
        ...B,
        ...V,
        ...v(pe),
        ...v(I),
        ...v(ue),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([f(M, {}, t), f(D, {}, t)])) }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerAHZqS6vxL`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"UsXyUSw2s":{"layout":["fixed","auto"]},"SiLwkaRYp":{"layout":["fixed","auto"]}}}`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `2007`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `false`,
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, U as queryParamNames };
//# sourceMappingURL=vVBaWpyRupqE4UciDSebfHW-VPOmdYMvz0gr5tptqE4.jFLRMThl.mjs.map
