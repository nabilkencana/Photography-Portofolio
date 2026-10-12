import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as i,
  j as a,
  o,
  p as s,
  s as c,
  w as l,
} from "./react.typNXLzE.mjs";
import { a as u, j as d, r as f, t as p } from "./motion.CQsVbJu1.mjs";
import {
  F as m,
  M as h,
  Mt as g,
  Nt as _,
  Z as v,
  j as y,
  k as b,
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
    (c(),
      v(),
      p(),
      r(),
      (T = { Nzy3_nRM6: { pressed: !0 } }),
      (E = [`Nzy3_nRM6`, `emBAu_3nQ`, `wkzDokLUy`]),
      (D = `framer-vwpth`),
      (O = {
        emBAu_3nQ: `framer-v-12fmo1`,
        Nzy3_nRM6: `framer-v-ty5pqn`,
        wkzDokLUy: `framer-v-2n1f60`,
      }),
      (k = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (A = ({ value: e, children: t }) => {
        let r = a(u),
          i = e ?? r.transition,
          s = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(u.Provider, { value: s, children: t });
      }),
      (j = d.create(t)),
      (M = { Close: `wkzDokLUy`, Default: `Nzy3_nRM6`, Hover: `emBAu_3nQ` }),
      (N = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: M[r.variant] ?? r.variant ?? `Nzy3_nRM6`,
      })),
      (P = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (F = _(
        s(function (e, t) {
          let { activeLocale: n, setLocale: r } = C(),
            { style: a, className: s, layoutId: c, variant: u, ...p } = N(e),
            {
              baseVariant: h,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: S,
              isLoading: M,
              setGestureState: F,
              setVariant: I,
              variants: L,
            } = g({
              cycleOrder: E,
              defaultVariant: `Nzy3_nRM6`,
              enabledGestures: T,
              variant: u,
              variantClassNames: O,
            }),
            R = P(e, L),
            z = m(D),
            B = i(null),
            V = () => !![`emBAu_3nQ`, `wkzDokLUy`].includes(h),
            H = l();
          return (
            x(),
            o(f, {
              id: c ?? H,
              children: o(j, {
                animate: L,
                initial: !1,
                children: o(A, {
                  value: k,
                  children: o(d.div, {
                    ...p,
                    ...y,
                    className: m(z, `framer-ty5pqn`, s, _),
                    "data-framer-name": `Default`,
                    layoutDependency: R,
                    layoutId: `Nzy3_nRM6`,
                    ref: t ?? B,
                    style: {
                      backgroundColor: `var(--token-2b0e121e-0368-44f6-b6fc-57cffb0ea05b, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 13,
                      borderBottomRightRadius: 13,
                      borderTopLeftRadius: 13,
                      borderTopRightRadius: 13,
                      ...a,
                    },
                    variants: {
                      emBAu_3nQ: {
                        backgroundColor: `rgba(255, 255, 255, 0.34)`,
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                      wkzDokLUy: {
                        backgroundColor: `rgba(0, 0, 0, 0.44)`,
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                    },
                    ...w(
                      {
                        "Nzy3_nRM6-pressed": { "data-framer-name": void 0 },
                        emBAu_3nQ: { "data-framer-name": `Hover` },
                        wkzDokLUy: { "data-framer-name": `Close` },
                      },
                      h,
                      S
                    ),
                    children:
                      V() &&
                      o(b, {
                        className: `framer-l05pd8`,
                        "data-framer-name": `Vector`,
                        fill: `rgba(0,0,0,1)`,
                        intrinsicHeight: 28,
                        intrinsicWidth: 28,
                        layoutDependency: R,
                        layoutId: `HtY3Cvrhf`,
                        style: { rotate: 0 },
                        svg: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.8086 12.8088H15.1914V1.19146C15.1914 0.875468 15.0659 0.572415 14.8425 0.348972C14.619 0.125529 14.316 0 14 0C13.684 0 13.381 0.125529 13.1575 0.348972C12.9341 0.572415 12.8086 0.875468 12.8086 1.19146V12.8085H1.19144C0.875449 12.8085 0.572402 12.9341 0.348964 13.1575C0.125526 13.381 0 13.684 0 14C0 14.316 0.125526 14.619 0.348964 14.8425C0.572402 15.0659 0.875449 15.1915 1.19144 15.1915H12.8086V26.8085C12.8086 27.1245 12.9341 27.4276 13.1575 27.651C13.381 27.8745 13.684 28 14 28C14.316 28 14.619 27.8745 14.8425 27.651C15.0659 27.4276 15.1914 27.1245 15.1914 26.8085V15.1918H26.8086C27.1245 15.1918 27.4276 15.0662 27.651 14.8428C27.8745 14.6193 28 14.3163 28 14.0003C28 13.6843 27.8745 13.3812 27.651 13.1578C27.4276 12.9344 27.1245 12.8088 26.8086 12.8088Z" fill="white"/>
</svg>
`,
                        variants: { wkzDokLUy: { rotate: -45 } },
                        withExternalLayout: !0,
                      }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-vwpth.framer-krg41p, .framer-vwpth .framer-krg41p { display: block; }`,
          `.framer-vwpth.framer-ty5pqn { cursor: pointer; height: 26px; mix-blend-mode: difference; overflow: hidden; position: relative; width: 26px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-vwpth .framer-l05pd8 { flex: none; height: 28%; left: calc(50.00000000000002% - 28.000000000000004% / 2); position: absolute; top: calc(46.15384615384618% - 28.000000000000004% / 2); width: 28%; }`,
          `.framer-vwpth.framer-v-12fmo1.framer-ty5pqn { align-content: center; align-items: center; aspect-ratio: 1 / 1; cursor: unset; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 70px); justify-content: center; mix-blend-mode: unset; padding: 0px; width: 70px; }`,
          `.framer-vwpth.framer-v-12fmo1 .framer-l05pd8 { left: unset; position: relative; top: unset; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vwpth.framer-v-12fmo1.framer-ty5pqn { gap: 0px; } .framer-vwpth.framer-v-12fmo1.framer-ty5pqn > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-vwpth.framer-v-12fmo1.framer-ty5pqn > :first-child { margin-left: 0px; } .framer-vwpth.framer-v-12fmo1.framer-ty5pqn > :last-child { margin-right: 0px; } }`,
          `.framer-vwpth.framer-v-2n1f60.framer-ty5pqn { align-content: center; align-items: center; aspect-ratio: 1 / 1; cursor: unset; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 50px); justify-content: center; mix-blend-mode: unset; padding: 0px; width: 50px; }`,
          `.framer-vwpth.framer-v-2n1f60 .framer-l05pd8 { height: 36%; left: unset; position: relative; top: unset; width: 36%; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vwpth.framer-v-2n1f60.framer-ty5pqn { gap: 0px; } .framer-vwpth.framer-v-2n1f60.framer-ty5pqn > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-vwpth.framer-v-2n1f60.framer-ty5pqn > :first-child { margin-left: 0px; } .framer-vwpth.framer-v-2n1f60.framer-ty5pqn > :last-child { margin-right: 0px; } }`,
          `.framer-vwpth.framer-v-ty5pqn.pressed.framer-ty5pqn { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 20px); width: 20px; }`,
        ],
        `framer-vwpth`
      )),
      (F.displayName = `Cursor`),
      (F.defaultProps = { height: 26, width: 26 }),
      h(F, {
        variant: {
          options: [`Nzy3_nRM6`, `emBAu_3nQ`, `wkzDokLUy`],
          optionTitles: [`Default`, `Hover`, `Close`],
          title: `Variant`,
          type: S.Enum,
        },
      }),
      y(F, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
export { I as n, F as t };
//# sourceMappingURL=Rt3Sh5gwq.Cy2nCw4B.mjs.map
