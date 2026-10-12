import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as i,
  j as a,
  l as o,
  o as s,
  p as c,
  s as l,
  w as ee,
} from "./react.typNXLzE.mjs";
import { a as u, j as d, r as f, t as p } from "./motion.CQsVbJu1.mjs";
import {
  D as m,
  F as h,
  G as g,
  L as _,
  Lt as v,
  M as y,
  Mt as b,
  Nt as x,
  O as S,
  S as C,
  Tt as w,
  U as T,
  W as E,
  Z as D,
  _t as te,
  a as O,
  bt as k,
  d as A,
  i as j,
  j as M,
  kt as ne,
  mt as re,
  o as N,
  p as ie,
  wt as ae,
  yt as oe,
} from "./framer.B3F8DTpJ.mjs";
import { i as P, n as F, r as I, t as L } from "./jsPFAj3P2.xszjOvq7.mjs";
import { a as R, i as se, o as ce, r as z } from "./shared-lib.BczJtw9W.mjs";
import { i as le, n as ue, r as de, t as fe } from "./Rcgs2l1OR.sBtHcz0w.mjs";
import { n as pe, t as B } from "./A7j4jyv2g.ZuufPjhg.mjs";
import { n as me, t as V } from "./Cv6kYmHpn.B4RYovEx.mjs";
import { i as he, n as ge, r as _e, t as ve } from "./E952Zd3mb.BxttGTN2.mjs";
import { i as ye, n as be, r as xe, t as Se } from "./ar0X3XvKk.BFP7uYt_.mjs";
import { i as Ce, n as we, r as Te, t as Ee } from "./wIcaSKsHY.D0vvQ5cq.mjs";
import De, { t as Oe } from "./mwkc2wi-aOnhAW1C6waCp-R8iyb4SiEEHQo-IddjUOk.-EGOzB2P.mjs";
function ke(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var H,
  U,
  W,
  G,
  K,
  q,
  J,
  Ae,
  je,
  Y,
  Me = e(() => {
    (l(),
      D(),
      p(),
      r(),
      P(),
      le(),
      (H = [`YyoChc_7c`, `RP6NYnXEg`, `LTUbo99x0`]),
      (U = `framer-gUqb1`),
      (W = {
        LTUbo99x0: `framer-v-t3vm5s`,
        RP6NYnXEg: `framer-v-10z439f`,
        YyoChc_7c: `framer-v-13l0h6`,
      }),
      (G = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (K = ({ value: e, children: t }) => {
        let r = a(u),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(u.Provider, { value: o, children: t });
      }),
      (q = d.create(t)),
      (J = { Desktop: `YyoChc_7c`, Phone: `LTUbo99x0`, Tablet: `RP6NYnXEg` }),
      (Ae = ({ category: e, gear: t, height: n, id: r, number: i, width: a, ...o }) => ({
        ...o,
        bvTAs7kWV: t ?? o.bvTAs7kWV ?? `Canon EOS R5`,
        Fz78Cz2_5: i ?? o.Fz78Cz2_5 ?? `01`,
        variant: J[o.variant] ?? o.variant ?? `YyoChc_7c`,
        wTZK9067K: e ?? o.wTZK9067K ?? `Camera`,
      })),
      (je = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = x(
        c(function (e, n) {
          let { activeLocale: r, setLocale: a } = ae(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: p,
              bvTAs7kWV: m,
              wTZK9067K: g,
              Fz78Cz2_5: _,
              ...v
            } = Ae(e),
            {
              baseVariant: y,
              classNames: x,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: te,
              variants: O,
            } = b({ cycleOrder: H, defaultVariant: `YyoChc_7c`, variant: p, variantClassNames: W }),
            k = je(e, O),
            A = i(null),
            j = ee(),
            M = [L, fe];
          return (
            re(),
            s(f, {
              id: u ?? j,
              children: s(q, {
                animate: O,
                initial: !1,
                children: s(K, {
                  value: G,
                  children: o(d.div, {
                    ...v,
                    ...w,
                    className: h(U, ...M, `framer-13l0h6`, l, x),
                    "data-framer-name": `Desktop`,
                    layoutDependency: k,
                    layoutId: `YyoChc_7c`,
                    ref: n ?? A,
                    style: {
                      backgroundColor: `var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, rgb(241, 241, 241))`,
                      ...c,
                    },
                    ...ke(
                      {
                        LTUbo99x0: { "data-framer-name": `Phone` },
                        RP6NYnXEg: { "data-framer-name": `Tablet` },
                      },
                      y,
                      T
                    ),
                    children: [
                      s(d.div, {
                        className: `framer-1mk8rqb`,
                        "data-framer-name": `Number`,
                        layoutDependency: k,
                        layoutId: `xZAuleY_L`,
                        children: s(S, {
                          __fromCanvasComponent: !0,
                          children: s(t, {
                            children: s(d.p, {
                              style: {
                                "--framer-font-size": `13px`,
                                "--framer-line-height": `140%`,
                              },
                              children: s(d.span, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-family": `"Inter-Medium", "Inter", sans-serif`,
                                  "--framer-font-size": `13px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.05em`,
                                  "--framer-text-color": `var(--extracted-1w3ko1f, rgba(17, 17, 18, 1))`,
                                },
                                children: `01`,
                              }),
                            }),
                          }),
                          className: `framer-1qw8al3`,
                          "data-framer-name": `01`,
                          fonts: [`Inter-Medium`],
                          layoutDependency: k,
                          layoutId: `YXhEl2GeD`,
                          style: {
                            "--extracted-1w3ko1f": `rgba(17, 17, 18, 1)`,
                            "--framer-paragraph-spacing": `0px`,
                            opacity: 0.4,
                          },
                          text: _,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                      s(S, {
                        __fromCanvasComponent: !0,
                        children: s(t, {
                          children: s(d.p, {
                            className: `framer-styles-preset-8vgk3u`,
                            "data-styles-preset": `jsPFAj3P2`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, rgb(17, 17, 18)))`,
                            },
                            children: `Canon EOS R5`,
                          }),
                        }),
                        className: `framer-1dn7lu5`,
                        "data-framer-name": `Canon EOS R5`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `SQEwR4fMp`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, rgb(17, 17, 18))`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: m,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      s(d.div, {
                        className: `framer-1kyxygw`,
                        "data-framer-name": `Filler`,
                        layoutDependency: k,
                        layoutId: `FU2NyuDIu`,
                      }),
                      s(S, {
                        __fromCanvasComponent: !0,
                        children: s(t, {
                          children: s(d.p, {
                            className: `framer-styles-preset-2n4ap`,
                            "data-styles-preset": `Rcgs2l1OR`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, rgba(17, 17, 18, 0.6))`,
                            },
                            children: `Camera`,
                          }),
                        }),
                        className: `framer-1cf3y34`,
                        "data-framer-name": `Camera`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `vgaO4mUu8`,
                        style: {
                          "--extracted-r6o4lv": `rgba(17, 17, 18, 0.6)`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: g,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-gUqb1.framer-cmrabu, .framer-gUqb1 .framer-cmrabu { display: block; }`,
          `.framer-gUqb1.framer-13l0h6 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 34px 34px 34px 64px; position: relative; width: 564px; }`,
          `.framer-gUqb1 .framer-1mk8rqb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 34px; overflow: hidden; padding: 0px; position: absolute; top: 36px; width: min-content; z-index: 1; }`,
          `.framer-gUqb1 .framer-1qw8al3, .framer-gUqb1 .framer-1cf3y34 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-gUqb1 .framer-1dn7lu5 { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-gUqb1 .framer-1kyxygw { align-self: stretch; flex: none; height: auto; overflow: visible; position: relative; width: 20px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gUqb1 .framer-1mk8rqb { gap: 0px; } .framer-gUqb1 .framer-1mk8rqb > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-gUqb1 .framer-1mk8rqb > :first-child { margin-left: 0px; } .framer-gUqb1 .framer-1mk8rqb > :last-child { margin-right: 0px; } }`,
          `.framer-gUqb1.framer-v-10z439f.framer-13l0h6 { padding: 30px 30px 30px 60px; }`,
          `.framer-gUqb1.framer-v-10z439f .framer-1mk8rqb { left: 30px; top: 32px; }`,
          `.framer-gUqb1.framer-v-t3vm5s.framer-13l0h6 { align-content: center; align-items: center; padding: 22px 0px 22px 0px; }`,
          `.framer-gUqb1.framer-v-t3vm5s .framer-1mk8rqb { left: unset; padding: 0px 13px 0px 0px; position: relative; top: unset; }`,
          ...F,
          ...ue,
        ],
        `framer-gUqb1`
      )),
      (Y.displayName = `Gear item`),
      (Y.defaultProps = { height: 96, width: 564 }),
      y(Y, {
        variant: {
          options: [`YyoChc_7c`, `RP6NYnXEg`, `LTUbo99x0`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: N.Enum,
        },
        bvTAs7kWV: {
          defaultValue: `Canon EOS R5`,
          displayTextArea: !1,
          title: `Gear`,
          type: N.String,
        },
        wTZK9067K: {
          defaultValue: `Camera`,
          displayTextArea: !1,
          title: `Category`,
          type: N.String,
        },
        Fz78Cz2_5: { defaultValue: `01`, displayTextArea: !1, title: `Number`, type: N.String },
      }),
      M(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
                weight: `500`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
                weight: `500`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
                weight: `500`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
                weight: `500`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
                weight: `500`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2`,
                weight: `500`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
                weight: `500`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...E(I),
          ...E(de),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  X,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Z,
  Q,
  Ge,
  Ke,
  $,
  qe;
e(() => {
  (l(),
    D(),
    p(),
    r(),
    se(),
    pe(),
    Me(),
    me(),
    ce(),
    ye(),
    he(),
    P(),
    Ce(),
    Oe(),
    (Ne = T(B)),
    (Pe = T(V)),
    (Fe = T(Y)),
    (Ie = v(d.section)),
    (Le = T(R)),
    (X = T(z)),
    (Re = {
      HCbXteHnQ: `(max-width: 809.98px)`,
      JVhaku2n8: `(min-width: 1200px)`,
      qMwYcviWr: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (ze = []),
    (Be = `framer-Z7kYm`),
    (Ve = {
      HCbXteHnQ: `framer-v-1xl1qct`,
      JVhaku2n8: `framer-v-vt2tlf`,
      qMwYcviWr: `framer-v-e0k6mh`,
    }),
    (He = (e, t, n) => (e && t ? `position` : n)),
    (Ue = {
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
    (We = {
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
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Q = { Desktop: `JVhaku2n8`, Phone: `HCbXteHnQ`, Tablet: `qMwYcviWr` }),
    (Ge = ({ value: e }) =>
      k()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ke = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `JVhaku2n8`,
    })),
    ($ = x(
      c(function (e, r) {
        let c = i(null),
          l = r ?? c,
          p = ee(),
          { activeLocale: _, setLocale: v } = ae(),
          y = re(),
          { style: b, className: x, layoutId: T, variant: E, ...D } = Ke(e);
        w(n(() => De({}, _), [_]));
        let [k, M] = oe(E, Re, !1),
          N = h(Be, ve, Se, L, Ee),
          P = a(A)?.isLayoutTemplate,
          F = !!a(u)?.transition?.layout,
          I = He(P, F);
        return (
          ne(),
          te({}),
          s(A.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: Q,
              primaryVariantId: `JVhaku2n8`,
              variantClassNames: Ve,
            },
            children: o(f, {
              id: T ?? p,
              children: [
                s(Ge, {
                  value: `html body { background: var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, rgb(241, 241, 241)); }`,
                }),
                o(d.div, {
                  ...D,
                  className: h(N, `framer-vt2tlf`, x),
                  ref: l,
                  style: { ...b },
                  children: [
                    o(d.main, {
                      className: `framer-22yllg`,
                      "data-framer-name": `Main`,
                      layout: I,
                      children: [
                        o(Ie, {
                          animate: Ue,
                          className: `framer-p9uhb5`,
                          "data-framer-appear-id": `p9uhb5`,
                          "data-framer-name": `Container`,
                          initial: We,
                          optimized: !0,
                          children: [
                            s(`aside`, {
                              className: `framer-1nny3af`,
                              "data-framer-name": `Side`,
                              children: o(`div`, {
                                className: `framer-86owpw`,
                                "data-framer-name": `Sticky`,
                                children: [
                                  s(C, {
                                    breakpoint: k,
                                    overrides: {
                                      HCbXteHnQ: {
                                        width: `min(${y?.width || `100vw`} - 48px, 1848px)`,
                                        y:
                                          (y?.y || 0) +
                                          0 +
                                          0 +
                                          114 +
                                          0 +
                                          0 +
                                          1718.32 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      qMwYcviWr: {
                                        width: `max(min(${y?.width || `100vw`} - 63px, 1848px) / 4, 1px)`,
                                        y: (y?.y || 0) + 0 + 0 + 214 + 0 + 0 + 0 + 0 + 0 + 0,
                                      },
                                    },
                                    children: s(j, {
                                      height: 74,
                                      width: `max(min(${y?.width || `100vw`} - 73px, 1848px) / 4, 1px)`,
                                      y: (y?.y || 0) + 0 + 0 + 254 + 0 + 0 + 0 + 0 + 0 + 0,
                                      children: s(O, {
                                        className: `framer-kko0k-container`,
                                        nodeId: `wJuvJDXQC`,
                                        scopeId: `nbiWtvW87`,
                                        children: s(C, {
                                          breakpoint: k,
                                          overrides: {
                                            HCbXteHnQ: { variant: Z(`TuRw7aFlX`) },
                                            qMwYcviWr: { variant: Z(`RPQmTWYXP`) },
                                          },
                                          children: s(B, {
                                            height: `100%`,
                                            id: `wJuvJDXQC`,
                                            layoutId: `wJuvJDXQC`,
                                            style: { width: `100%` },
                                            variant: Z(`RqjG8NJO6`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  s(m, {
                                    links: [
                                      {
                                        href: { webPageId: `JhEGlRZQU` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `JhEGlRZQU` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `JhEGlRZQU` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      s(C, {
                                        breakpoint: k,
                                        overrides: {
                                          HCbXteHnQ: {
                                            y:
                                              (y?.y || 0) +
                                              0 +
                                              0 +
                                              114 +
                                              0 +
                                              0 +
                                              1718.32 +
                                              0 +
                                              0 +
                                              0 +
                                              104,
                                          },
                                          qMwYcviWr: {
                                            y: (y?.y || 0) + 0 + 0 + 214 + 0 + 0 + 0 + 0 + 0 + 124,
                                          },
                                        },
                                        children: s(j, {
                                          height: 47,
                                          y: (y?.y || 0) + 0 + 0 + 254 + 0 + 0 + 0 + 0 + 0 + 124,
                                          children: s(O, {
                                            className: `framer-c5mzd3-container`,
                                            nodeId: `z64UFcDrk`,
                                            scopeId: `nbiWtvW87`,
                                            children: s(C, {
                                              breakpoint: k,
                                              overrides: {
                                                HCbXteHnQ: {
                                                  rYvSKCvJf: e[2],
                                                  variant: Z(`iI2ipV6vo`),
                                                },
                                                qMwYcviWr: {
                                                  rYvSKCvJf: e[1],
                                                  variant: Z(`icsoeaVPh`),
                                                },
                                              },
                                              children: s(V, {
                                                height: `100%`,
                                                id: `z64UFcDrk`,
                                                layoutId: `z64UFcDrk`,
                                                rYvSKCvJf: e[0],
                                                u99mHedFv: `Contact me`,
                                                variant: Z(`VdXXpamQf`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                            }),
                            o(`article`, {
                              className: `framer-1iax5dw`,
                              "data-framer-name": `Content`,
                              children: [
                                s(S, {
                                  __fromCanvasComponent: !0,
                                  children: s(t, {
                                    children: s(`h1`, {
                                      className: `framer-styles-preset-13zczbi`,
                                      "data-styles-preset": `E952Zd3mb`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, rgb(17, 17, 18))`,
                                      },
                                      children: `About me`,
                                    }),
                                  }),
                                  className: `framer-7ur8mn`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(S, {
                                  __fromCanvasComponent: !0,
                                  children: s(t, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-1ngxlwc`,
                                      "data-styles-preset": `ar0X3XvKk`,
                                      children: `Hey, I’m M. Haikal Arrasyid, a photographer based in Malang, Indonesia. I focus on portraits and lifestyle photography, but I enjoy capturing all kinds of stories.`,
                                    }),
                                  }),
                                  className: `framer-1dnbykg`,
                                  "data-framer-name": `Hey, I’m M. Haikal Arrasyid, a photographer based in Malang, Indonesia. I focus on portraits and lifestyle photography, but I enjoy capturing all kinds of stories.`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(`div`, {
                                  className: `framer-12plvs3`,
                                  "data-framer-name": `Description`,
                                  children: [
                                    s(S, {
                                      __fromCanvasComponent: !0,
                                      children: s(t, {
                                        children: s(`p`, {
                                          style: {
                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                            "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                            "--framer-font-size": `26px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `-0.05em`,
                                            "--framer-line-height": `32px`,
                                            "--framer-text-color": `rgb(17, 17, 18)`,
                                          },
                                          children: `My goal is simple`,
                                        }),
                                      }),
                                      className: `framer-j6wkmq`,
                                      "data-framer-name": `My goal is simple`,
                                      fonts: [`Inter-Medium`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(S, {
                                      __fromCanvasComponent: !0,
                                      children: s(t, {
                                        children: s(`p`, {
                                          className: `framer-styles-preset-8vgk3u`,
                                          "data-styles-preset": `jsPFAj3P2`,
                                          children: `I capture real moments that feel like you. I want you to feel comfortable and just be yourself in front of the camera, whether it’s on your wedding day, during a family session, or while working on a creative project together.`,
                                        }),
                                      }),
                                      className: `framer-148z35b`,
                                      "data-framer-name": `I capture real moments that feel like you. I want you to feel comfortable and just be yourself in front of the camera, whether it’s on your wedding day, during a family session, or while working on a creative project together.`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                s(`div`, {
                                  className: `framer-1xbgp67`,
                                  "data-framer-name": `Image`,
                                  children: s(C, {
                                    breakpoint: k,
                                    overrides: {
                                      HCbXteHnQ: {
                                        background: {
                                          alt: `Photographer holding camera`,
                                          fit: `fill`,
                                          loading: g(
                                            (y?.y || 0) +
                                              0 +
                                              0 +
                                              114 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              696.32 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 669,
                                          pixelWidth: 1054,
                                          sizes: `calc(max(min(${y?.width || `100vw`} - 48px, 1848px) / 3, 50px) * 3)`,
                                          src: `../../assets/images/1x5u4t8rWmUK0N1Vgz223Dr7s0-8671a6.jpg`,
                                          srcSet: `../../assets/images/1x5u4t8rWmUK0N1Vgz223Dr7s0-872cb0.jpg 512w,../../assets/images/1x5u4t8rWmUK0N1Vgz223Dr7s0.jpg 1024w,../../assets/images/1x5u4t8rWmUK0N1Vgz223Dr7s0-8671a6.jpg 1054w`,
                                        },
                                      },
                                      qMwYcviWr: {
                                        background: {
                                          alt: `Photographer holding camera`,
                                          fit: `fill`,
                                          loading: g(
                                            (y?.y || 0) + 0 + 0 + 214 + 0 + 0 + 0 + 756.32 + 0 + 0
                                          ),
                                          pixelHeight: 669,
                                          pixelWidth: 1054,
                                          sizes: `calc(max(max(min(${y?.width || `100vw`} - 63px, 1848px) * 0.75, 1px) / 3, 50px) * 3)`,
                                          src: `../../assets/images/1x5u4t8rWmUK0N1Vgz223Dr7s0-8671a6.jpg`,
                                          srcSet: `../../assets/images/1x5u4t8rWmUK0N1Vgz223Dr7s0-872cb0.jpg 512w,../../assets/images/1x5u4t8rWmUK0N1Vgz223Dr7s0.jpg 1024w,../../assets/images/1x5u4t8rWmUK0N1Vgz223Dr7s0-8671a6.jpg 1054w`,
                                        },
                                      },
                                    },
                                    children: s(ie, {
                                      background: {
                                        alt: `Photographer holding camera`,
                                        fit: `fill`,
                                        loading: g(
                                          (y?.y || 0) + 0 + 0 + 254 + 0 + 0 + 0 + 666.32 + 0 + 0
                                        ),
                                        pixelHeight: 669,
                                        pixelWidth: 1054,
                                        sizes: `calc(max(max(min(${y?.width || `100vw`} - 73px, 1848px) * 0.75, 1px) / 3, 50px) * 2)`,
                                        src: `../../assets/images/1x5u4t8rWmUK0N1Vgz223Dr7s0-8671a6.jpg`,
                                        srcSet: `../../assets/images/1x5u4t8rWmUK0N1Vgz223Dr7s0-872cb0.jpg 512w,../../assets/images/1x5u4t8rWmUK0N1Vgz223Dr7s0.jpg 1024w,../../assets/images/1x5u4t8rWmUK0N1Vgz223Dr7s0-8671a6.jpg 1054w`,
                                      },
                                      className: `framer-yxr0f1`,
                                      "data-framer-name": `Image`,
                                    }),
                                  }),
                                }),
                                s(`div`, {
                                  className: `framer-eg6fks`,
                                  "data-framer-name": `Gear`,
                                  children: o(`div`, {
                                    className: `framer-q2q3k2`,
                                    "data-framer-name": `Container`,
                                    children: [
                                      s(S, {
                                        __fromCanvasComponent: !0,
                                        children: s(t, {
                                          children: s(`h2`, {
                                            className: `framer-styles-preset-1w6tysk`,
                                            "data-styles-preset": `wIcaSKsHY`,
                                            children: `My gear and software`,
                                          }),
                                        }),
                                        className: `framer-obt610`,
                                        "data-framer-name": `My gear`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(`div`, {
                                        className: `framer-s4o7b9`,
                                        "data-border": !0,
                                        "data-framer-name": `Gear items`,
                                        children: [
                                          s(C, {
                                            breakpoint: k,
                                            overrides: {
                                              HCbXteHnQ: {
                                                width: `min(${y?.width || `100vw`} - 48px, 1848px)`,
                                                y:
                                                  (y?.y || 0) +
                                                  0 +
                                                  0 +
                                                  114 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  726.32 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  72 +
                                                  0 +
                                                  0,
                                              },
                                              qMwYcviWr: {
                                                width: `calc(max(max(min(${y?.width || `100vw`} - 63px, 1848px) * 0.75, 1px) / 3, 50px) * 3)`,
                                                y:
                                                  (y?.y || 0) +
                                                  0 +
                                                  0 +
                                                  214 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  806.32 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  92 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            children: s(j, {
                                              height: 96,
                                              width: `calc(max(max(min(${y?.width || `100vw`} - 73px, 1848px) * 0.75, 1px) / 3, 50px) * 2)`,
                                              y:
                                                (y?.y || 0) +
                                                0 +
                                                0 +
                                                254 +
                                                0 +
                                                0 +
                                                0 +
                                                746.32 +
                                                0 +
                                                0 +
                                                0 +
                                                92 +
                                                0 +
                                                0,
                                              children: s(O, {
                                                className: `framer-7u09q0-container`,
                                                nodeId: `JruWEnOTx`,
                                                scopeId: `nbiWtvW87`,
                                                children: s(C, {
                                                  breakpoint: k,
                                                  overrides: {
                                                    HCbXteHnQ: { variant: Z(`LTUbo99x0`) },
                                                    qMwYcviWr: { variant: Z(`RP6NYnXEg`) },
                                                  },
                                                  children: s(Y, {
                                                    bvTAs7kWV: `Canon EOS R5`,
                                                    Fz78Cz2_5: `01`,
                                                    height: `100%`,
                                                    id: `JruWEnOTx`,
                                                    layoutId: `JruWEnOTx`,
                                                    style: { width: `100%` },
                                                    variant: Z(`YyoChc_7c`),
                                                    width: `100%`,
                                                    wTZK9067K: `Camera`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          s(C, {
                                            breakpoint: k,
                                            overrides: {
                                              HCbXteHnQ: {
                                                width: `min(${y?.width || `100vw`} - 48px, 1848px)`,
                                                y:
                                                  (y?.y || 0) +
                                                  0 +
                                                  0 +
                                                  114 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  726.32 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  72 +
                                                  0 +
                                                  97,
                                              },
                                              qMwYcviWr: {
                                                width: `calc(max(max(min(${y?.width || `100vw`} - 63px, 1848px) * 0.75, 1px) / 3, 50px) * 3)`,
                                                y:
                                                  (y?.y || 0) +
                                                  0 +
                                                  0 +
                                                  214 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  806.32 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  92 +
                                                  0 +
                                                  97,
                                              },
                                            },
                                            children: s(j, {
                                              height: 96,
                                              width: `calc(max(max(min(${y?.width || `100vw`} - 73px, 1848px) * 0.75, 1px) / 3, 50px) * 2)`,
                                              y:
                                                (y?.y || 0) +
                                                0 +
                                                0 +
                                                254 +
                                                0 +
                                                0 +
                                                0 +
                                                746.32 +
                                                0 +
                                                0 +
                                                0 +
                                                92 +
                                                0 +
                                                97,
                                              children: s(O, {
                                                className: `framer-caq5k-container`,
                                                nodeId: `Iah4UZhCZ`,
                                                scopeId: `nbiWtvW87`,
                                                children: s(C, {
                                                  breakpoint: k,
                                                  overrides: {
                                                    HCbXteHnQ: { variant: Z(`LTUbo99x0`) },
                                                    qMwYcviWr: { variant: Z(`RP6NYnXEg`) },
                                                  },
                                                  children: s(Y, {
                                                    bvTAs7kWV: `Canon RF 24-70mm f/2.8L IS USM`,
                                                    Fz78Cz2_5: `02`,
                                                    height: `100%`,
                                                    id: `Iah4UZhCZ`,
                                                    layoutId: `Iah4UZhCZ`,
                                                    style: { width: `100%` },
                                                    variant: Z(`YyoChc_7c`),
                                                    width: `100%`,
                                                    wTZK9067K: `Zoom lens`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          s(C, {
                                            breakpoint: k,
                                            overrides: {
                                              HCbXteHnQ: {
                                                width: `min(${y?.width || `100vw`} - 48px, 1848px)`,
                                                y:
                                                  (y?.y || 0) +
                                                  0 +
                                                  0 +
                                                  114 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  726.32 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  72 +
                                                  0 +
                                                  194,
                                              },
                                              qMwYcviWr: {
                                                width: `calc(max(max(min(${y?.width || `100vw`} - 63px, 1848px) * 0.75, 1px) / 3, 50px) * 3)`,
                                                y:
                                                  (y?.y || 0) +
                                                  0 +
                                                  0 +
                                                  214 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  806.32 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  92 +
                                                  0 +
                                                  194,
                                              },
                                            },
                                            children: s(j, {
                                              height: 96,
                                              width: `calc(max(max(min(${y?.width || `100vw`} - 73px, 1848px) * 0.75, 1px) / 3, 50px) * 2)`,
                                              y:
                                                (y?.y || 0) +
                                                0 +
                                                0 +
                                                254 +
                                                0 +
                                                0 +
                                                0 +
                                                746.32 +
                                                0 +
                                                0 +
                                                0 +
                                                92 +
                                                0 +
                                                194,
                                              children: s(O, {
                                                className: `framer-1a1pkcs-container`,
                                                nodeId: `HRlKH__3E`,
                                                scopeId: `nbiWtvW87`,
                                                children: s(C, {
                                                  breakpoint: k,
                                                  overrides: {
                                                    HCbXteHnQ: { variant: Z(`LTUbo99x0`) },
                                                    qMwYcviWr: { variant: Z(`RP6NYnXEg`) },
                                                  },
                                                  children: s(Y, {
                                                    bvTAs7kWV: `Sigma 85mm f/1.4 DG HSM Art`,
                                                    Fz78Cz2_5: `03`,
                                                    height: `100%`,
                                                    id: `HRlKH__3E`,
                                                    layoutId: `HRlKH__3E`,
                                                    style: { width: `100%` },
                                                    variant: Z(`YyoChc_7c`),
                                                    width: `100%`,
                                                    wTZK9067K: `Prime lens`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          s(C, {
                                            breakpoint: k,
                                            overrides: {
                                              HCbXteHnQ: {
                                                width: `min(${y?.width || `100vw`} - 48px, 1848px)`,
                                                y:
                                                  (y?.y || 0) +
                                                  0 +
                                                  0 +
                                                  114 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  726.32 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  72 +
                                                  0 +
                                                  291,
                                              },
                                              qMwYcviWr: {
                                                width: `calc(max(max(min(${y?.width || `100vw`} - 63px, 1848px) * 0.75, 1px) / 3, 50px) * 3)`,
                                                y:
                                                  (y?.y || 0) +
                                                  0 +
                                                  0 +
                                                  214 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  806.32 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  92 +
                                                  0 +
                                                  291,
                                              },
                                            },
                                            children: s(j, {
                                              height: 96,
                                              width: `calc(max(max(min(${y?.width || `100vw`} - 73px, 1848px) * 0.75, 1px) / 3, 50px) * 2)`,
                                              y:
                                                (y?.y || 0) +
                                                0 +
                                                0 +
                                                254 +
                                                0 +
                                                0 +
                                                0 +
                                                746.32 +
                                                0 +
                                                0 +
                                                0 +
                                                92 +
                                                0 +
                                                291,
                                              children: s(O, {
                                                className: `framer-6p5ci1-container`,
                                                nodeId: `bwx6bjKOX`,
                                                scopeId: `nbiWtvW87`,
                                                children: s(C, {
                                                  breakpoint: k,
                                                  overrides: {
                                                    HCbXteHnQ: { variant: Z(`LTUbo99x0`) },
                                                    qMwYcviWr: { variant: Z(`RP6NYnXEg`) },
                                                  },
                                                  children: s(Y, {
                                                    bvTAs7kWV: `DJI Mavic Air 2`,
                                                    Fz78Cz2_5: `04`,
                                                    height: `100%`,
                                                    id: `bwx6bjKOX`,
                                                    layoutId: `bwx6bjKOX`,
                                                    style: { width: `100%` },
                                                    variant: Z(`YyoChc_7c`),
                                                    width: `100%`,
                                                    wTZK9067K: `Drone`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          s(C, {
                                            breakpoint: k,
                                            overrides: {
                                              HCbXteHnQ: {
                                                width: `min(${y?.width || `100vw`} - 48px, 1848px)`,
                                                y:
                                                  (y?.y || 0) +
                                                  0 +
                                                  0 +
                                                  114 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  726.32 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  72 +
                                                  0 +
                                                  388,
                                              },
                                              qMwYcviWr: {
                                                width: `calc(max(max(min(${y?.width || `100vw`} - 63px, 1848px) * 0.75, 1px) / 3, 50px) * 3)`,
                                                y:
                                                  (y?.y || 0) +
                                                  0 +
                                                  0 +
                                                  214 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  806.32 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  92 +
                                                  0 +
                                                  388,
                                              },
                                            },
                                            children: s(j, {
                                              height: 96,
                                              width: `calc(max(max(min(${y?.width || `100vw`} - 73px, 1848px) * 0.75, 1px) / 3, 50px) * 2)`,
                                              y:
                                                (y?.y || 0) +
                                                0 +
                                                0 +
                                                254 +
                                                0 +
                                                0 +
                                                0 +
                                                746.32 +
                                                0 +
                                                0 +
                                                0 +
                                                92 +
                                                0 +
                                                388,
                                              children: s(O, {
                                                className: `framer-1pynzbp-container`,
                                                nodeId: `QkDaDSY5L`,
                                                scopeId: `nbiWtvW87`,
                                                children: s(C, {
                                                  breakpoint: k,
                                                  overrides: {
                                                    HCbXteHnQ: { variant: Z(`LTUbo99x0`) },
                                                    qMwYcviWr: { variant: Z(`RP6NYnXEg`) },
                                                  },
                                                  children: s(Y, {
                                                    bvTAs7kWV: `Godox AD200 Pro`,
                                                    Fz78Cz2_5: `05`,
                                                    height: `100%`,
                                                    id: `QkDaDSY5L`,
                                                    layoutId: `QkDaDSY5L`,
                                                    style: { width: `100%` },
                                                    variant: Z(`YyoChc_7c`),
                                                    width: `100%`,
                                                    wTZK9067K: `Flash`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          s(C, {
                                            breakpoint: k,
                                            overrides: {
                                              HCbXteHnQ: {
                                                width: `min(${y?.width || `100vw`} - 48px, 1848px)`,
                                                y:
                                                  (y?.y || 0) +
                                                  0 +
                                                  0 +
                                                  114 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  726.32 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  72 +
                                                  0 +
                                                  485,
                                              },
                                              qMwYcviWr: {
                                                width: `calc(max(max(min(${y?.width || `100vw`} - 63px, 1848px) * 0.75, 1px) / 3, 50px) * 3)`,
                                                y:
                                                  (y?.y || 0) +
                                                  0 +
                                                  0 +
                                                  214 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  806.32 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  92 +
                                                  0 +
                                                  485,
                                              },
                                            },
                                            children: s(j, {
                                              height: 96,
                                              width: `calc(max(max(min(${y?.width || `100vw`} - 73px, 1848px) * 0.75, 1px) / 3, 50px) * 2)`,
                                              y:
                                                (y?.y || 0) +
                                                0 +
                                                0 +
                                                254 +
                                                0 +
                                                0 +
                                                0 +
                                                746.32 +
                                                0 +
                                                0 +
                                                0 +
                                                92 +
                                                0 +
                                                485,
                                              children: s(O, {
                                                className: `framer-1dqayot-container`,
                                                nodeId: `TNkhzLs65`,
                                                scopeId: `nbiWtvW87`,
                                                children: s(C, {
                                                  breakpoint: k,
                                                  overrides: {
                                                    HCbXteHnQ: { variant: Z(`LTUbo99x0`) },
                                                    qMwYcviWr: { variant: Z(`RP6NYnXEg`) },
                                                  },
                                                  children: s(Y, {
                                                    bvTAs7kWV: `Canon RF 24-70mm f/2.8L IS USM`,
                                                    Fz78Cz2_5: `06`,
                                                    height: `100%`,
                                                    id: `TNkhzLs65`,
                                                    layoutId: `TNkhzLs65`,
                                                    style: { width: `100%` },
                                                    variant: Z(`YyoChc_7c`),
                                                    width: `100%`,
                                                    wTZK9067K: `Zoom lens`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          s(C, {
                                            breakpoint: k,
                                            overrides: {
                                              HCbXteHnQ: {
                                                width: `min(${y?.width || `100vw`} - 48px, 1848px)`,
                                                y:
                                                  (y?.y || 0) +
                                                  0 +
                                                  0 +
                                                  114 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  726.32 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  72 +
                                                  0 +
                                                  582,
                                              },
                                              qMwYcviWr: {
                                                width: `calc(max(max(min(${y?.width || `100vw`} - 63px, 1848px) * 0.75, 1px) / 3, 50px) * 3)`,
                                                y:
                                                  (y?.y || 0) +
                                                  0 +
                                                  0 +
                                                  214 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  806.32 +
                                                  20 +
                                                  0 +
                                                  0 +
                                                  92 +
                                                  0 +
                                                  582,
                                              },
                                            },
                                            children: s(j, {
                                              height: 96,
                                              width: `calc(max(max(min(${y?.width || `100vw`} - 73px, 1848px) * 0.75, 1px) / 3, 50px) * 2)`,
                                              y:
                                                (y?.y || 0) +
                                                0 +
                                                0 +
                                                254 +
                                                0 +
                                                0 +
                                                0 +
                                                746.32 +
                                                0 +
                                                0 +
                                                0 +
                                                92 +
                                                0 +
                                                582,
                                              children: s(O, {
                                                className: `framer-lt1x0j-container`,
                                                nodeId: `lmhS_7tpf`,
                                                scopeId: `nbiWtvW87`,
                                                children: s(C, {
                                                  breakpoint: k,
                                                  overrides: {
                                                    HCbXteHnQ: { variant: Z(`LTUbo99x0`) },
                                                    qMwYcviWr: { variant: Z(`RP6NYnXEg`) },
                                                  },
                                                  children: s(Y, {
                                                    bvTAs7kWV: `Adobe Lightroom & Photoshop`,
                                                    Fz78Cz2_5: `07`,
                                                    height: `100%`,
                                                    id: `lmhS_7tpf`,
                                                    layoutId: `lmhS_7tpf`,
                                                    style: { width: `100%` },
                                                    variant: Z(`YyoChc_7c`),
                                                    width: `100%`,
                                                    wTZK9067K: `Editing software`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                s(`div`, {
                                  className: `framer-1eofh6w`,
                                  "data-framer-name": `Text`,
                                  children: s(S, {
                                    __fromCanvasComponent: !0,
                                    children: s(t, {
                                      children: s(`p`, {
                                        className: `framer-styles-preset-8vgk3u`,
                                        "data-styles-preset": `jsPFAj3P2`,
                                        children: `When I’m not behind the camera, I’m usually exploring the mountains, finding hidden spots around the city, or getting inspired by nature and architecture. Let’s connect and create something memorable together. I’d love to hear your story.`,
                                      }),
                                    }),
                                    className: `framer-4igolk`,
                                    "data-framer-name": `When I’m not behind the camera, I’m usually exploring the mountains, finding hidden spots around the city, or getting inspired by nature and architecture. Let’s connect and create something memorable together. I’d love to hear your story.`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        s(C, {
                          breakpoint: k,
                          overrides: {
                            HCbXteHnQ: { height: 2043.32 },
                            qMwYcviWr: { height: 2120.32 },
                          },
                          children: s(j, {
                            height: 2150.32,
                            width: y?.width || `100vw`,
                            y: (y?.y || 0) + 0 + 0 + 0,
                            children: s(O, {
                              className: `framer-inl4at-container`,
                              "data-framer-name": `Grid`,
                              name: `Grid`,
                              nodeId: `z5Qw_ZfKy`,
                              scopeId: `nbiWtvW87`,
                              children: s(C, {
                                breakpoint: k,
                                overrides: {
                                  HCbXteHnQ: { JLnFVd4lc: !1, SZjrZZXey: !1 },
                                  qMwYcviWr: { ieZNkwrrK: `0px 32px 0px 32px` },
                                },
                                children: s(R, {
                                  gbAjZwZif: !0,
                                  height: `100%`,
                                  HIadHX3E2: `rgba(0, 0, 0, 0.12)`,
                                  id: `z5Qw_ZfKy`,
                                  ieZNkwrrK: `0px 36px 0px 36px`,
                                  JLnFVd4lc: !0,
                                  layoutId: `z5Qw_ZfKy`,
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
                    s(j, {
                      children: s(O, {
                        className: `framer-1cqxh3f-container`,
                        "data-framer-name": `Smooth scroll`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: I,
                        name: `Smooth scroll`,
                        nodeId: `rZ0IkRTsz`,
                        scopeId: `nbiWtvW87`,
                        children: s(z, {
                          height: `100%`,
                          id: `rZ0IkRTsz`,
                          infinite: !1,
                          intensity: 8,
                          layoutId: `rZ0IkRTsz`,
                          name: `Smooth scroll`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-Z7kYm.framer-1b46vxm, .framer-Z7kYm .framer-1b46vxm { display: block; }`,
        `.framer-Z7kYm.framer-vt2tlf { align-content: center; align-items: center; background-color: var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, #f1f1f1); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Z7kYm .framer-22yllg { align-content: center; align-items: center; background-color: var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, #f1f1f1); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 254px 36px 160px 37px; position: relative; width: 100%; }`,
        `.framer-Z7kYm .framer-p9uhb5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1848px; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Z7kYm .framer-1nny3af { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Z7kYm .framer-86owpw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: sticky; top: 36px; width: 100%; z-index: 1; }`,
        `.framer-Z7kYm .framer-kko0k-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Z7kYm .framer-c5mzd3-container, .framer-Z7kYm .framer-1cqxh3f-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Z7kYm .framer-1iax5dw { align-content: flex-start; align-items: flex-start; display: flex; flex: 3 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Z7kYm .framer-7ur8mn, .framer-Z7kYm .framer-obt610 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Z7kYm .framer-1dnbykg { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 944px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Z7kYm .framer-12plvs3 { display: grid; flex: none; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Z7kYm .framer-j6wkmq { --framer-paragraph-spacing: 0px; align-self: start; flex: none; height: 100%; justify-self: start; position: relative; white-space: pre; width: 100%; }`,
        `.framer-Z7kYm .framer-148z35b { --framer-paragraph-spacing: 0px; align-self: start; flex: none; grid-column: span 2; height: 100%; justify-self: start; max-width: 603px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Z7kYm .framer-1xbgp67, .framer-Z7kYm .framer-eg6fks { display: grid; flex: none; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Z7kYm .framer-yxr0f1 { align-content: center; align-items: center; align-self: start; aspect-ratio: 1.5723404255319149 / 1; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; grid-column: span 2; height: auto; justify-content: center; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Z7kYm .framer-q2q3k2 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; grid-column: span 2; height: 100%; justify-content: flex-start; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Z7kYm .framer-s4o7b9 { --border-bottom-width: 1px; --border-color: #d8d8d8; --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #d8d8d8; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 1px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Z7kYm .framer-7u09q0-container, .framer-Z7kYm .framer-caq5k-container, .framer-Z7kYm .framer-1a1pkcs-container, .framer-Z7kYm .framer-6p5ci1-container, .framer-Z7kYm .framer-1pynzbp-container, .framer-Z7kYm .framer-1dqayot-container, .framer-Z7kYm .framer-lt1x0j-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Z7kYm .framer-1eofh6w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Z7kYm .framer-4igolk { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 610px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Z7kYm .framer-inl4at-container { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 0; }`,
        ...ge,
        ...be,
        ...F,
        ...we,
        `.framer-Z7kYm[data-border="true"]::after, .framer-Z7kYm [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Z7kYm.framer-vt2tlf { width: 810px; } .framer-Z7kYm .framer-22yllg { padding: 214px 32px 120px 31px; } .framer-Z7kYm .framer-1nny3af { gap: 30px; } .framer-Z7kYm .framer-1iax5dw { gap: 50px; overflow: visible; } .framer-Z7kYm .framer-12plvs3 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; justify-content: flex-start; } .framer-Z7kYm .framer-j6wkmq { align-self: unset; height: auto; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; } .framer-Z7kYm .framer-148z35b { align-self: unset; height: auto; } .framer-Z7kYm .framer-yxr0f1 { grid-column: span 3; } .framer-Z7kYm .framer-eg6fks { overflow: visible; padding: 20px 0px 0px 0px; } .framer-Z7kYm .framer-q2q3k2 { grid-column: span 3; overflow: visible; } .framer-Z7kYm .framer-s4o7b9 { --border-left-width: 1px; } .framer-Z7kYm .framer-1eofh6w { gap: 60px; }}`,
        `@media (max-width: 809.98px) { .framer-Z7kYm.framer-vt2tlf { width: 390px; } .framer-Z7kYm .framer-22yllg { padding: 114px 24px 60px 24px; } .framer-Z7kYm .framer-p9uhb5 { flex-direction: column; gap: 40px; } .framer-Z7kYm .framer-1nny3af { align-self: unset; flex: none; height: min-content; order: 1; width: 100%; } .framer-Z7kYm .framer-86owpw { gap: 30px; position: relative; top: unset; } .framer-Z7kYm .framer-1iax5dw { flex: none; gap: 30px; order: 0; width: 100%; } .framer-Z7kYm .framer-12plvs3 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; justify-content: flex-start; } .framer-Z7kYm .framer-j6wkmq { align-self: unset; height: auto; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; } .framer-Z7kYm .framer-148z35b { align-self: unset; height: auto; } .framer-Z7kYm .framer-yxr0f1 { border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; grid-column: span 3; } .framer-Z7kYm .framer-eg6fks { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: flex-start; padding: 20px 0px 12px 0px; } .framer-Z7kYm .framer-q2q3k2 { align-self: unset; gap: 30px; height: min-content; } .framer-Z7kYm .framer-s4o7b9 { --border-right-width: 0px; } .framer-Z7kYm .framer-1eofh6w { gap: 40px; }}`,
      ],
      `framer-Z7kYm`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 3373, width: 1200 }),
    M(
      $,
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
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
              weight: `500`,
            },
          ],
        },
        ...Ne,
        ...Pe,
        ...Fe,
        ...Le,
        ...X,
        ...E(_e),
        ...E(xe),
        ...E(I),
        ...E(Te),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([_(B, {}, t), _(V, {}, t), _(Y, {}, t), _(R, {}, t)])
      ),
    }),
    (qe = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramernbiWtvW87`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"qMwYcviWr":{"layout":["fixed","auto"]},"HCbXteHnQ":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `3373`,
            framerLayoutTemplateFlowEffect: `true`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerComponentViewportWidth: `true`,
            framerContractVersion: `1`,
            framerScrollSections: `false`,
            framerIntrinsicWidth: `1200`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { qe as __FramerMetadata__, $ as default, ze as queryParamNames };
//# sourceMappingURL=UZHnOeEBp9xWAIDiCDQtbnJ_87sZlk0_ZNNXPaA6VpE.BtoZFt56.mjs.map
