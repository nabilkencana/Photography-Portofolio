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
  M as g,
  Mt as _,
  Nt as v,
  O as y,
  U as b,
  W as x,
  Z as S,
  _ as C,
  i as w,
  j as T,
  mt as E,
  o as D,
  wt as O,
} from "./framer.B3F8DTpJ.mjs";
import { n as k, t as A } from "./Phosphor.DA1rZyDZ.mjs";
import { i as j, n as M, r as N, t as P } from "./Rcgs2l1OR.sBtHcz0w.mjs";
function F(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var I,
  L,
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
  J = e(() => {
    (l(),
      S(),
      m(),
      r(),
      k(),
      j(),
      (I = b(A)),
      (L = { kljxVVNnO: { hover: !0 } }),
      (R = [`kljxVVNnO`, `EIQYCxQnz`]),
      (z = `framer-uKVEh`),
      (B = { EIQYCxQnz: `framer-v-gg0unj`, kljxVVNnO: `framer-v-1enucbh` }),
      (V = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (H = ({ value: e, children: t }) => {
        let r = a(d),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(d.Provider, { value: o, children: t });
      }),
      (U = f.create(t)),
      (W = { Desktop: `kljxVVNnO`, Mobile: `EIQYCxQnz` }),
      (G = ({
        color: e,
        colorHover: t,
        height: n,
        icon: r,
        id: i,
        link: a,
        text: o,
        width: s,
        ...c
      }) => ({
        ...c,
        Boor76kiW: a ?? c.Boor76kiW,
        EXOsvPYgG: e ?? c.EXOsvPYgG ?? `rgb(255, 255, 255)`,
        h059AvfWL: o ?? c.h059AvfWL ?? `Go back to portfolio`,
        MT6iv4U7v: t ?? c.MT6iv4U7v ?? `rgb(255, 255, 255)`,
        npv8N8VQy: r ?? c.npv8N8VQy ?? `arrow-elbow-down-left`,
        variant: W[c.variant] ?? c.variant ?? `kljxVVNnO`,
      })),
      (K = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = v(
        c(function (e, n) {
          let { activeLocale: r, setLocale: a } = O(),
            {
              style: c,
              className: l,
              layoutId: d,
              variant: m,
              Boor76kiW: g,
              npv8N8VQy: v,
              h059AvfWL: b,
              EXOsvPYgG: x,
              MT6iv4U7v: S,
              ...T
            } = G(e),
            {
              baseVariant: D,
              classNames: k,
              clearLoadingGesture: j,
              gestureHandlers: M,
              gestureVariant: N,
              isLoading: I,
              setGestureState: W,
              setVariant: q,
              variants: J,
            } = _({
              cycleOrder: R,
              defaultVariant: `kljxVVNnO`,
              enabledGestures: L,
              variant: m,
              variantClassNames: B,
            }),
            Y = K(e, J),
            X = i(null),
            Z = u(),
            Q = [P];
          return (
            E(),
            s(p, {
              id: d ?? Z,
              children: s(U, {
                animate: J,
                initial: !1,
                children: s(H, {
                  value: V,
                  children: s(C, {
                    href: g,
                    openInNewTab: !1,
                    children: o(f.a, {
                      ...T,
                      ...M,
                      className: `${h(z, ...Q, `framer-1enucbh`, l, k)} framer-108xmyz`,
                      "data-framer-name": `Desktop`,
                      layoutDependency: Y,
                      layoutId: `kljxVVNnO`,
                      ref: n ?? X,
                      style: { ...c },
                      ...F(
                        {
                          "kljxVVNnO-hover": { "data-framer-name": void 0 },
                          EIQYCxQnz: { "data-framer-name": `Mobile` },
                        },
                        D,
                        N
                      ),
                      children: [
                        s(w, {
                          children: s(f.div, {
                            className: `framer-1awc2go-container`,
                            layoutDependency: Y,
                            layoutId: `XqhfUEc0w-container`,
                            children: s(A, {
                              color: x,
                              height: `100%`,
                              iconSearch: v,
                              iconSelection: `House`,
                              id: `XqhfUEc0w`,
                              layoutId: `XqhfUEc0w`,
                              mirrored: !1,
                              selectByList: !1,
                              style: { height: `100%`, width: `100%` },
                              weight: `regular`,
                              width: `100%`,
                              ...F({ "kljxVVNnO-hover": { color: S } }, D, N),
                            }),
                          }),
                        }),
                        s(y, {
                          __fromCanvasComponent: !0,
                          children: s(t, {
                            children: s(f.p, {
                              className: `framer-styles-preset-2n4ap`,
                              "data-styles-preset": `Rcgs2l1OR`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-EXOsvPYgG-RiTFBoiLP))`,
                              },
                              children: `Go back to portfolio`,
                            }),
                          }),
                          className: `framer-2n1s5b`,
                          fonts: [`Inter`],
                          layoutDependency: Y,
                          layoutId: `BSQwiPbv0`,
                          style: {
                            "--extracted-r6o4lv": `var(--variable-reference-EXOsvPYgG-RiTFBoiLP)`,
                            "--variable-reference-EXOsvPYgG-RiTFBoiLP": x,
                            "--variable-reference-MT6iv4U7v-RiTFBoiLP": S,
                          },
                          text: b,
                          variants: {
                            "kljxVVNnO-hover": {
                              "--extracted-r6o4lv": `var(--variable-reference-MT6iv4U7v-RiTFBoiLP)`,
                              "--variable-reference-MT6iv4U7v-RiTFBoiLP": S,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...F(
                            {
                              "kljxVVNnO-hover": {
                                children: s(t, {
                                  children: s(f.p, {
                                    className: `framer-styles-preset-2n4ap`,
                                    "data-styles-preset": `Rcgs2l1OR`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-MT6iv4U7v-RiTFBoiLP))`,
                                    },
                                    children: `Go back to portfolio`,
                                  }),
                                }),
                              },
                            },
                            D,
                            N
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-uKVEh.framer-108xmyz, .framer-uKVEh .framer-108xmyz { display: block; }`,
          `.framer-uKVEh.framer-1enucbh { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-uKVEh .framer-1awc2go-container { flex: none; height: 18px; position: relative; width: 18px; }`,
          `.framer-uKVEh .framer-2n1s5b { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-uKVEh.framer-1enucbh { gap: 0px; } .framer-uKVEh.framer-1enucbh > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-uKVEh.framer-1enucbh > :first-child { margin-left: 0px; } .framer-uKVEh.framer-1enucbh > :last-child { margin-right: 0px; } }`,
          `.framer-uKVEh.framer-v-gg0unj.framer-1enucbh { cursor: unset; }`,
          `.framer-uKVEh.framer-v-1enucbh.hover.framer-1enucbh { gap: 14px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-uKVEh.framer-v-1enucbh.hover.framer-1enucbh { gap: 0px; } .framer-uKVEh.framer-v-1enucbh.hover.framer-1enucbh > * { margin: 0px; margin-left: calc(14px / 2); margin-right: calc(14px / 2); } .framer-uKVEh.framer-v-1enucbh.hover.framer-1enucbh > :first-child { margin-left: 0px; } .framer-uKVEh.framer-v-1enucbh.hover.framer-1enucbh > :last-child { margin-right: 0px; } }`,
          ...M,
        ],
        `framer-uKVEh`
      )),
      (q.displayName = `Go back button`),
      (q.defaultProps = { height: 22, width: 163 }),
      g(q, {
        variant: {
          options: [`kljxVVNnO`, `EIQYCxQnz`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: D.Enum,
        },
        Boor76kiW: { title: `Link`, type: D.Link },
        npv8N8VQy: {
          defaultValue: `arrow-elbow-down-left`,
          description: `Check icon names at phosphoricons.com`,
          placeholder: `Menu, Wifi, Box…`,
          title: `Icon`,
          type: D.String,
        },
        h059AvfWL: {
          defaultValue: `Go back to portfolio`,
          displayTextArea: !1,
          title: `Text`,
          type: D.String,
        },
        EXOsvPYgG: { defaultValue: `rgb(255, 255, 255)`, title: `Color`, type: D.Color },
        MT6iv4U7v: { defaultValue: `rgb(255, 255, 255)`, title: `Color hover`, type: D.Color },
      }),
      T(
        q,
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
          ...I,
          ...x(N),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { J as n, q as t };
//# sourceMappingURL=RiTFBoiLP.CZWvn7fh.mjs.map
