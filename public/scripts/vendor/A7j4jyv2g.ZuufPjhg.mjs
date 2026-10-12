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
  w as u,
} from "./react.typNXLzE.mjs";
import { a as d, j as f, r as p, t as m } from "./motion.CQsVbJu1.mjs";
import {
  F as h,
  G as g,
  M as _,
  Mt as v,
  Nt as y,
  O as b,
  W as x,
  Z as S,
  j as C,
  mt as w,
  o as T,
  p as E,
  wt as D,
} from "./framer.B3F8DTpJ.mjs";
import { i as O, n as k, r as A, t as j } from "./jsPFAj3P2.xszjOvq7.mjs";
import { i as M, n as N, r as P, t as F } from "./Rcgs2l1OR.sBtHcz0w.mjs";
function I(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q = e(() => {
    (l(),
      S(),
      m(),
      r(),
      O(),
      M(),
      (L = [`RqjG8NJO6`, `RPQmTWYXP`, `TuRw7aFlX`]),
      (R = `framer-E9plE`),
      (z = {
        RPQmTWYXP: `framer-v-1ck7a4w`,
        RqjG8NJO6: `framer-v-1uwqi7g`,
        TuRw7aFlX: `framer-v-q2fc3q`,
      }),
      (B = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (V = ({ value: e, children: t }) => {
        let r = a(d),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(d.Provider, { value: o, children: t });
      }),
      (H = f.create(t)),
      (U = { Desktop: `RqjG8NJO6`, Phone: `TuRw7aFlX`, Tablet: `RPQmTWYXP` }),
      (W = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: U[r.variant] ?? r.variant ?? `RqjG8NJO6`,
      })),
      (G = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = y(
        c(function (e, n) {
          let { activeLocale: r, setLocale: a } = D(),
            { style: c, className: l, layoutId: d, variant: m, ..._ } = W(e),
            {
              baseVariant: y,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: T,
              isLoading: O,
              setGestureState: k,
              setVariant: A,
              variants: M,
            } = v({ cycleOrder: L, defaultVariant: `RqjG8NJO6`, variant: m, variantClassNames: z }),
            N = G(e, M),
            P = i(null),
            U = u(),
            K = [j, F],
            q = w();
          return s(p, {
            id: d ?? U,
            children: s(H, {
              animate: M,
              initial: !1,
              children: s(V, {
                value: B,
                children: o(f.div, {
                  ..._,
                  ...C,
                  className: h(R, ...K, `framer-1uwqi7g`, l, x),
                  "data-framer-name": `Desktop`,
                  layoutDependency: N,
                  layoutId: `RqjG8NJO6`,
                  ref: n ?? P,
                  style: { ...c },
                  ...I(
                    {
                      RPQmTWYXP: { "data-framer-name": `Tablet` },
                      TuRw7aFlX: { "data-framer-name": `Phone` },
                    },
                    y,
                    T
                  ),
                  children: [
                    s(E, {
                      background: {
                        alt: `Photographer holding camera`,
                        fit: `fill`,
                        loading: g((q?.y || 0) + (0 + ((q?.height || 74) - 0 - 70) / 2)),
                        pixelHeight: 404,
                        pixelWidth: 291,
                        src: `../../assets/images/EhvTGXjqxSNjTytJPHX7ST8svIQ.jpg`,
                      },
                      className: `framer-yq9kdt`,
                      "data-framer-name": `Image`,
                      layoutDependency: N,
                      layoutId: `doET039dy`,
                      style: {
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      },
                      ...I(
                        {
                          RPQmTWYXP: {
                            background: {
                              alt: `Photographer holding camera`,
                              fit: `fill`,
                              loading: g((q?.y || 0) + 0 + 0),
                              pixelHeight: 404,
                              pixelWidth: 291,
                              src: `../../assets/images/EhvTGXjqxSNjTytJPHX7ST8svIQ.jpg`,
                            },
                          },
                          TuRw7aFlX: {
                            background: {
                              alt: `Photographer holding camera`,
                              fit: `fill`,
                              loading: g((q?.y || 0) + (0 + ((q?.height || 74) - 0 - 60) / 2)),
                              pixelHeight: 404,
                              pixelWidth: 291,
                              src: `../../assets/images/EhvTGXjqxSNjTytJPHX7ST8svIQ.jpg`,
                            },
                          },
                        },
                        y,
                        T
                      ),
                    }),
                    o(f.div, {
                      className: `framer-18wx270`,
                      "data-framer-name": `Text`,
                      layoutDependency: N,
                      layoutId: `c5cSZRvpd`,
                      children: [
                        s(b, {
                          __fromCanvasComponent: !0,
                          children: s(t, {
                            children: s(f.p, {
                              className: `framer-styles-preset-8vgk3u`,
                              "data-styles-preset": `jsPFAj3P2`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, rgb(17, 17, 18)))`,
                              },
                              children: `M. Haikal Arrasyid`,
                            }),
                          }),
                          className: `framer-1vw5uvf`,
                          "data-framer-name": `M. Haikal Arrasyid`,
                          fonts: [`Inter`],
                          layoutDependency: N,
                          layoutId: `vh4NsycTC`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, rgb(17, 17, 18))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        s(b, {
                          __fromCanvasComponent: !0,
                          children: s(t, {
                            children: s(f.p, {
                              className: `framer-styles-preset-2n4ap`,
                              "data-styles-preset": `Rcgs2l1OR`,
                              children: `Professional Photographer`,
                            }),
                          }),
                          className: `framer-1q2zk8w`,
                          "data-framer-name": `Professional Photographer`,
                          fonts: [`Inter`],
                          layoutDependency: N,
                          layoutId: `KuXZWvzIh`,
                          style: { "--framer-paragraph-spacing": `0px` },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-E9plE.framer-p90eh3, .framer-E9plE .framer-p90eh3 { display: block; }`,
          `.framer-E9plE.framer-1uwqi7g { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 30px 0px 0px; position: relative; width: 282px; }`,
          `.framer-E9plE .framer-yq9kdt { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 70px); position: relative; width: 70px; }`,
          `.framer-E9plE .framer-18wx270 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-E9plE .framer-1vw5uvf, .framer-E9plE .framer-1q2zk8w { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-E9plE.framer-1uwqi7g, .framer-E9plE .framer-18wx270 { gap: 0px; } .framer-E9plE.framer-1uwqi7g > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-E9plE.framer-1uwqi7g > :first-child { margin-left: 0px; } .framer-E9plE.framer-1uwqi7g > :last-child { margin-right: 0px; } .framer-E9plE .framer-18wx270 > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } .framer-E9plE .framer-18wx270 > :first-child { margin-top: 0px; } .framer-E9plE .framer-18wx270 > :last-child { margin-bottom: 0px; } }`,
          `.framer-E9plE.framer-v-1ck7a4w.framer-1uwqi7g { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 22px; }`,
          `.framer-E9plE.framer-v-1ck7a4w .framer-18wx270 { flex: none; width: 100%; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-E9plE.framer-v-1ck7a4w.framer-1uwqi7g { gap: 0px; } .framer-E9plE.framer-v-1ck7a4w.framer-1uwqi7g > * { margin: 0px; margin-bottom: calc(22px / 2); margin-top: calc(22px / 2); } .framer-E9plE.framer-v-1ck7a4w.framer-1uwqi7g > :first-child { margin-top: 0px; } .framer-E9plE.framer-v-1ck7a4w.framer-1uwqi7g > :last-child { margin-bottom: 0px; } }`,
          `.framer-E9plE.framer-v-q2fc3q .framer-yq9kdt { height: var(--framer-aspect-ratio-supported, 60px); width: 60px; }`,
          ...k,
          ...N,
        ],
        `framer-E9plE`
      )),
      (K.displayName = `Photographer`),
      (K.defaultProps = { height: 74, width: 282 }),
      _(K, {
        variant: {
          options: [`RqjG8NJO6`, `RPQmTWYXP`, `TuRw7aFlX`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: T.Enum,
        },
      }),
      C(
        K,
        [
          {
            explicitInter: !0,
            fonts: [
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
          ...x(A),
          ...x(P),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { q as n, K as t };
//# sourceMappingURL=A7j4jyv2g.ZuufPjhg.mjs.map
