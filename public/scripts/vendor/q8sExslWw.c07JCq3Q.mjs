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
  Ct as ee,
  F as h,
  G as g,
  M as _,
  Mt as v,
  Nt as y,
  O as b,
  W as x,
  Z as S,
  _ as te,
  j as C,
  k as w,
  mt as T,
  o as E,
  p as D,
  wt as ne,
} from "./framer.B3F8DTpJ.mjs";
import { i as O, n as k, r as A, t as j } from "./Y4eex_aGW.BfyhXmji.mjs";
import { i as M, n as N, r as P, t as F } from "./uX7HtuG5N.zByZLh56.mjs";
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
  q,
  J,
  Y,
  X,
  Z,
  re = e(() => {
    (l(),
      S(),
      m(),
      r(),
      M(),
      O(),
      (L = { kYHa_x55W: { hover: !0 } }),
      (R = [`kYHa_x55W`, `jtdQHdy2h`, `joZZPMbeY`]),
      (z = `framer-whV1f`),
      (B = {
        joZZPMbeY: `framer-v-10lym46`,
        jtdQHdy2h: `framer-v-yzop4o`,
        kYHa_x55W: `framer-v-sia5l0`,
      }),
      (V = { delay: 0, duration: 0.3, ease: [0.82, 0.11, 0.37, 0.82], type: `tween` }),
      (H = (e, t, n) => {
        if (typeof e != `string`) return ``;
        let r = new Date(e);
        if (isNaN(r.getTime())) return ``;
        let i = `en-US`;
        try {
          return r.toLocaleString(n || i, t);
        } catch {
          return r.toLocaleString(i, t);
        }
      }),
      (U = { dateStyle: `medium`, timeZone: `UTC` }),
      (W = (e, t) => H(e, U, t)),
      (G = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (K = ({ value: e, children: t }) => {
        let r = a(d),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(d.Provider, { value: o, children: t });
      }),
      (q = f.create(t)),
      (J = { Desktop: `kYHa_x55W`, Phone: `joZZPMbeY`, Tablet: `jtdQHdy2h` }),
      (Y = ({ date: e, height: t, id: n, link: r, preview: i, title: a, width: o, ...s }) => ({
        ...s,
        atjk_KyTN: i ?? s.atjk_KyTN,
        FG8rd1EUA: e ?? s.FG8rd1EUA ?? `2024-10-11T00:00:00.000Z`,
        rvBKN8hHg: r ?? s.rvBKN8hHg,
        TFO4LYmNP: a ?? s.TFO4LYmNP ?? `Specta Show 2026 - Panggung Visual & Musik`,
        variant: J[s.variant] ?? s.variant ?? `kYHa_x55W`,
      })),
      (X = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = y(
        c(function (e, n) {
          let r = i(null),
            a = n ?? r,
            c = u(),
            { activeLocale: l, setLocale: d } = ne(),
            m = T(),
            {
              style: _,
              className: y,
              layoutId: x,
              variant: S,
              rvBKN8hHg: C,
              FG8rd1EUA: E,
              TFO4LYmNP: O,
              atjk_KyTN: k,
              ...A
            } = Y(e),
            {
              baseVariant: M,
              classNames: N,
              clearLoadingGesture: P,
              gestureHandlers: H,
              gestureVariant: U,
              isLoading: J,
              setGestureState: Z,
              setVariant: re,
              variants: Q,
            } = v({
              cycleOrder: R,
              defaultVariant: `kYHa_x55W`,
              enabledGestures: L,
              ref: a,
              variant: S,
              variantClassNames: B,
            }),
            $ = X(e, Q),
            ie = h(z, j, F),
            ae = ee(),
            oe = W(E, ae);
          return s(p, {
            id: x ?? c,
            children: s(q, {
              animate: Q,
              initial: !1,
              children: s(K, {
                value: V,
                children: s(te, {
                  href: C,
                  motionChild: !0,
                  nodeId: `kYHa_x55W`,
                  scopeId: `q8sExslWw`,
                  children: o(f.a, {
                    ...A,
                    ...H,
                    className: `${h(ie, `framer-sia5l0`, y, N)} framer-1ggy21`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: $,
                    layoutId: `kYHa_x55W`,
                    ref: a,
                    style: {
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      ..._,
                    },
                    variants: {
                      joZZPMbeY: {
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      },
                    },
                    ...I(
                      {
                        "kYHa_x55W-hover": { "data-framer-name": void 0 },
                        joZZPMbeY: { "data-framer-name": `Phone` },
                        jtdQHdy2h: { "data-framer-name": `Tablet` },
                      },
                      M,
                      U
                    ),
                    children: [
                      o(f.div, {
                        className: `framer-8hha3r`,
                        "data-framer-name": `Top`,
                        layoutDependency: $,
                        layoutId: `XHGHVx_m9`,
                        children: [
                          s(b, {
                            __fromCanvasComponent: !0,
                            children: s(t, {
                              children: s(f.p, {
                                className: `framer-styles-preset-1xs0hlt`,
                                "data-styles-preset": `Y4eex_aGW`,
                                children: `Content`,
                              }),
                            }),
                            className: `framer-12dd1jl`,
                            "data-framer-name": `Date`,
                            fonts: [`Inter`],
                            layoutDependency: $,
                            layoutId: `howDDZSM7`,
                            text: oe,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          s(w, {
                            className: `framer-4scwa4`,
                            "data-framer-name": `Arrow`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 20,
                            intrinsicWidth: 20,
                            layoutDependency: $,
                            layoutId: `YJLElZhIC`,
                            svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.9963 0.590631L2.99677 1.88964C2.99684 2.04626 3.05908 2.19645 3.16983 2.30721C3.28058 2.41796 3.43077 2.4802 3.5874 2.48027L15.7657 2.48003L0.172823 18.0731C0.0621185 18.1839 -4.44939e-05 18.3342 2.38943e-08 18.4908C4.45417e-05 18.6475 0.0622927 18.7977 0.17306 18.9084L1.09176 19.8271C1.32226 20.0577 1.69639 20.0577 1.92713 19.8269L17.52 4.23388L17.5195 16.413C17.5196 16.5696 17.5818 16.7198 17.6926 16.8306C17.8033 16.9413 17.9535 17.0036 18.1102 17.0036H19.4091C19.5658 17.0036 19.716 16.9413 19.8267 16.8306C19.9375 16.7198 19.9997 16.5696 19.9998 16.413L20 0.590634C19.9999 0.434009 19.9377 0.283817 19.8269 0.173066C19.7162 0.0623155 19.566 6.82101e-05 19.4094 4.29795e-06L3.58692 0C3.4303 6.39121e-05 3.28011 0.0623115 3.16936 0.173062C3.05861 0.283813 2.99636 0.434006 2.9963 0.590631Z" fill="white"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      s(b, {
                        __fromCanvasComponent: !0,
                        children: s(t, {
                          children: s(f.h3, {
                            className: `framer-styles-preset-1d9cb7n`,
                            "data-styles-preset": `uX7HtuG5N`,
                            style: {
                              "--framer-text-color": `var(--extracted-a0htzi, var(--token-2b0e121e-0368-44f6-b6fc-57cffb0ea05b, rgb(255, 255, 255)))`,
                            },
                            children: `Specta Show 2026 - Panggung Visual & Musik`,
                          }),
                        }),
                        className: `framer-tb721v`,
                        fonts: [`Inter`],
                        layoutDependency: $,
                        layoutId: `bdrLX9HK3`,
                        style: {
                          "--extracted-a0htzi": `var(--token-2b0e121e-0368-44f6-b6fc-57cffb0ea05b, rgb(255, 255, 255))`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: O,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      s(f.div, {
                        className: `framer-y4apnx`,
                        "data-framer-name": `Darken`,
                        layoutDependency: $,
                        layoutId: `hzvMecEP3`,
                        style: { backgroundColor: `rgba(17, 17, 18, 0.2)` },
                      }),
                      s(D, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: g((m?.y || 0) + 0),
                          sizes: m?.width || `100vw`,
                          ...G(k),
                        },
                        className: `framer-14rrl1t`,
                        "data-framer-name": `BG image`,
                        layoutDependency: $,
                        layoutId: `Dr6lhUOHz`,
                        style: { rotate: 0, scale: 1 },
                        variants: { "kYHa_x55W-hover": { rotate: 1, scale: 1.07 } },
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-whV1f.framer-1ggy21, .framer-whV1f .framer-1ggy21 { display: block; }`,
          `.framer-whV1f.framer-sia5l0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: wrap; height: 499px; justify-content: space-between; overflow: hidden; padding: 50px; position: relative; text-decoration: none; width: 360px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-whV1f .framer-8hha3r { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-whV1f .framer-12dd1jl { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-whV1f .framer-4scwa4 { flex: none; height: 20px; position: relative; width: 20px; z-index: 1; }`,
          `.framer-whV1f .framer-tb721v { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
          `.framer-whV1f .framer-y4apnx { flex: none; gap: 0px; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; z-index: 0; }`,
          `.framer-whV1f .framer-14rrl1t { bottom: 0px; flex: none; gap: 0px; left: 0px; position: absolute; right: 0px; top: 0px; z-index: -1; }`,
          `.framer-whV1f.framer-v-yzop4o.framer-sia5l0 { aspect-ratio: 0.72 / 1; cursor: unset; height: var(--framer-aspect-ratio-supported, 500px); padding: 40px; }`,
          `.framer-whV1f.framer-v-10lym46.framer-sia5l0 { aspect-ratio: 0.72 / 1; cursor: unset; height: var(--framer-aspect-ratio-supported, 500px); padding: 30px; }`,
          `.framer-whV1f.framer-v-sia5l0.hover.framer-sia5l0 { aspect-ratio: 0.72 / 1; height: var(--framer-aspect-ratio-supported, 500px); }`,
          ...k,
          ...N,
        ],
        `framer-whV1f`
      )),
      (Z.displayName = `Blog card`),
      (Z.defaultProps = { height: 500, width: 360 }),
      _(Z, {
        variant: {
          options: [`kYHa_x55W`, `jtdQHdy2h`, `joZZPMbeY`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: E.Enum,
        },
        rvBKN8hHg: { title: `Link`, type: E.Link },
        FG8rd1EUA: { defaultValue: `2024-10-11T00:00:00.000Z`, title: `Date`, type: E.Date },
        TFO4LYmNP: {
          defaultValue: `Specta Show 2026 - Panggung Visual & Musik`,
          title: `Title`,
          type: E.String,
        },
        atjk_KyTN: { title: `Preview`, type: E.ResponsiveImage },
      }),
      C(
        Z,
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
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
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
export { re as n, Z as t };
//# sourceMappingURL=q8sExslWw.c07JCq3Q.mjs.map
