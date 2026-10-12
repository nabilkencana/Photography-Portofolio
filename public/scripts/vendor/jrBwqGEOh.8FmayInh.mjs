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
  Z as y,
  j as b,
  mt as x,
  o as S,
  wt as C,
} from "./framer.B3F8DTpJ.mjs";
function w(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var T,
  E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I = e(() => {
    (l(),
      y(),
      m(),
      r(),
      (T = [`FW9uK5oRP`, `XIBYYzS8k`]),
      (E = `framer-fyVEy`),
      (D = { FW9uK5oRP: `framer-v-cg5exn`, XIBYYzS8k: `framer-v-292rfe` }),
      (O = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (k = { delay: 0, duration: 0.4, ease: [0.82, 0.11, 0.37, 0.82], type: `tween` }),
      (A = ({ value: e, children: t }) => {
        let r = a(d),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(d.Provider, { value: o, children: t });
      }),
      (j = f.create(t)),
      (M = { "All corners": `FW9uK5oRP`, "Top corners": `XIBYYzS8k` }),
      (N = ({
        bLBorder: e,
        bRBorder: t,
        height: n,
        id: r,
        padding: i,
        tLBorder: a,
        tRBorder: o,
        width: s,
        ...c
      }) => ({
        ...c,
        bkDGgOnyS: a ??
          c.bkDGgOnyS ?? {
            borderBottomWidth: 0,
            borderColor: `rgb(255, 255, 255)`,
            borderLeftWidth: 1,
            borderRightWidth: 0,
            borderStyle: `solid`,
            borderTopWidth: 1,
          },
        giUdIyR5I: e ??
          c.giUdIyR5I ?? {
            borderBottomWidth: 1,
            borderColor: `rgb(255, 255, 255)`,
            borderLeftWidth: 1,
            borderRightWidth: 0,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
        IWD_vykVW: o ??
          c.IWD_vykVW ?? {
            borderBottomWidth: 0,
            borderColor: `rgb(255, 255, 255)`,
            borderLeftWidth: 0,
            borderRightWidth: 1,
            borderStyle: `solid`,
            borderTopWidth: 1,
          },
        m_eduoTBf: i ?? c.m_eduoTBf ?? `36px`,
        OMz475883: t ??
          c.OMz475883 ?? {
            borderBottomWidth: 1,
            borderColor: `rgb(255, 255, 255)`,
            borderLeftWidth: 0,
            borderRightWidth: 1,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
        variant: M[c.variant] ?? c.variant ?? `FW9uK5oRP`,
      })),
      (P = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (F = v(
        c(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = u(),
            { activeLocale: c, setLocale: l } = C();
          x();
          let {
              style: d,
              className: m,
              layoutId: g,
              variant: v,
              m_eduoTBf: y,
              bkDGgOnyS: b,
              IWD_vykVW: S,
              giUdIyR5I: M,
              OMz475883: F,
              ...I
            } = N(e),
            {
              baseVariant: L,
              classNames: R,
              clearLoadingGesture: z,
              gestureHandlers: B,
              gestureVariant: V,
              isLoading: H,
              setGestureState: U,
              setVariant: W,
              variants: G,
            } = _({
              cycleOrder: T,
              defaultVariant: `FW9uK5oRP`,
              ref: r,
              variant: v,
              variantClassNames: D,
            }),
            K = P(e, G),
            q = h(E),
            J = () => L !== `XIBYYzS8k`;
          return s(p, {
            id: g ?? a,
            children: s(j, {
              animate: G,
              initial: !1,
              children: s(A, {
                value: k,
                children: o(f.div, {
                  ...I,
                  ...B,
                  className: h(q, `framer-cg5exn`, m, R),
                  "data-framer-name": `All corners`,
                  layoutDependency: K,
                  layoutId: `FW9uK5oRP`,
                  ref: r,
                  style: { "--12eybmm": O(y), ...d },
                  ...w({ XIBYYzS8k: { "data-framer-name": `Top corners` } }, L, V),
                  children: [
                    o(f.div, {
                      className: `framer-9mvoxu`,
                      "data-framer-name": `top`,
                      layoutDependency: K,
                      layoutId: `frLG_gO0w`,
                      children: [
                        s(f.div, {
                          className: `framer-kmt8ng`,
                          "data-border": !0,
                          layoutDependency: K,
                          layoutId: `tfizOrIW2`,
                          style: {
                            "--border-bottom-width": (b.borderBottomWidth ?? b.borderWidth) + `px`,
                            "--border-color": b.borderColor,
                            "--border-left-width": (b.borderLeftWidth ?? b.borderWidth) + `px`,
                            "--border-right-width": (b.borderRightWidth ?? b.borderWidth) + `px`,
                            "--border-style": b.borderStyle,
                            "--border-top-width": (b.borderTopWidth ?? b.borderWidth) + `px`,
                          },
                        }),
                        s(f.div, {
                          className: `framer-101ek76`,
                          "data-border": !0,
                          layoutDependency: K,
                          layoutId: `tgQfdA2lu`,
                          style: {
                            "--border-bottom-width": (S.borderBottomWidth ?? S.borderWidth) + `px`,
                            "--border-color": S.borderColor,
                            "--border-left-width": (S.borderLeftWidth ?? S.borderWidth) + `px`,
                            "--border-right-width": (S.borderRightWidth ?? S.borderWidth) + `px`,
                            "--border-style": S.borderStyle,
                            "--border-top-width": (S.borderTopWidth ?? S.borderWidth) + `px`,
                          },
                        }),
                      ],
                    }),
                    J() &&
                      o(f.div, {
                        className: `framer-1qvnj92`,
                        "data-framer-name": `bottom`,
                        layoutDependency: K,
                        layoutId: `cfLX5_OWo`,
                        children: [
                          s(f.div, {
                            className: `framer-4spxv3`,
                            "data-border": !0,
                            layoutDependency: K,
                            layoutId: `ZYRqAQo1X`,
                            style: {
                              "--border-bottom-width":
                                (M.borderBottomWidth ?? M.borderWidth) + `px`,
                              "--border-color": M.borderColor,
                              "--border-left-width": (M.borderLeftWidth ?? M.borderWidth) + `px`,
                              "--border-right-width": (M.borderRightWidth ?? M.borderWidth) + `px`,
                              "--border-style": M.borderStyle,
                              "--border-top-width": (M.borderTopWidth ?? M.borderWidth) + `px`,
                            },
                          }),
                          s(f.div, {
                            className: `framer-1armrbg`,
                            "data-border": !0,
                            layoutDependency: K,
                            layoutId: `JXN4kQ0QN`,
                            style: {
                              "--border-bottom-width":
                                (F.borderBottomWidth ?? F.borderWidth) + `px`,
                              "--border-color": F.borderColor,
                              "--border-left-width": (F.borderLeftWidth ?? F.borderWidth) + `px`,
                              "--border-right-width": (F.borderRightWidth ?? F.borderWidth) + `px`,
                              "--border-style": F.borderStyle,
                              "--border-top-width": (F.borderTopWidth ?? F.borderWidth) + `px`,
                            },
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
          `.framer-fyVEy.framer-1xrngk8, .framer-fyVEy .framer-1xrngk8 { display: block; }`,
          `.framer-fyVEy.framer-cg5exn { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: var(--12eybmm); position: relative; width: 1200px; }`,
          `.framer-fyVEy .framer-9mvoxu, .framer-fyVEy .framer-1qvnj92 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; pointer-events: none; position: relative; width: 100%; }`,
          `.framer-fyVEy .framer-kmt8ng, .framer-fyVEy .framer-101ek76, .framer-fyVEy .framer-4spxv3, .framer-fyVEy .framer-1armrbg { flex: none; height: 13px; overflow: hidden; position: relative; width: 13px; }`,
          `.framer-fyVEy[data-border="true"]::after, .framer-fyVEy [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-fyVEy`
      )),
      (F.displayName = `Corners`),
      (F.defaultProps = { height: 98, width: 1200 }),
      g(F, {
        variant: {
          options: [`FW9uK5oRP`, `XIBYYzS8k`],
          optionTitles: [`All corners`, `Top corners`],
          title: `Variant`,
          type: S.Enum,
        },
        m_eduoTBf: {
          defaultValue: `36px`,
          description: `36 - Desktop, 32 - Tablet, 24 - Mobile`,
          title: `Padding`,
          type: S.Padding,
        },
        bkDGgOnyS: {
          defaultValue: {
            borderBottomWidth: 0,
            borderColor: `rgb(255, 255, 255)`,
            borderLeftWidth: 1,
            borderRightWidth: 0,
            borderStyle: `solid`,
            borderTopWidth: 1,
          },
          title: `TL border`,
          type: S.Border,
        },
        IWD_vykVW: {
          defaultValue: {
            borderBottomWidth: 0,
            borderColor: `rgb(255, 255, 255)`,
            borderLeftWidth: 0,
            borderRightWidth: 1,
            borderStyle: `solid`,
            borderTopWidth: 1,
          },
          title: `TR border`,
          type: S.Border,
        },
        giUdIyR5I: {
          defaultValue: {
            borderBottomWidth: 1,
            borderColor: `rgb(255, 255, 255)`,
            borderLeftWidth: 1,
            borderRightWidth: 0,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
          title: `BL border`,
          type: S.Border,
        },
        OMz475883: {
          defaultValue: {
            borderBottomWidth: 1,
            borderColor: `rgb(255, 255, 255)`,
            borderLeftWidth: 0,
            borderRightWidth: 1,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
          title: `BR border`,
          type: S.Border,
        },
      }),
      b(F, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
export { I as n, F as t };
//# sourceMappingURL=jrBwqGEOh.8FmayInh.mjs.map
