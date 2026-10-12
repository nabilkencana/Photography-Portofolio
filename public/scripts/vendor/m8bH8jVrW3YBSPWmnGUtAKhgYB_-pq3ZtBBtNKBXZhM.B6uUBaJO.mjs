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
  p as l,
  s as u,
  w as ee,
} from "./react.typNXLzE.mjs";
import { a as d, j as f, r as te, t as p } from "./motion.CQsVbJu1.mjs";
import {
  F as m,
  Ft as h,
  I as g,
  L as _,
  Lt as v,
  M as y,
  Mt as ne,
  Nt as b,
  O as x,
  S,
  Tt as re,
  U as C,
  W as w,
  Z as T,
  _ as E,
  _t as D,
  a as O,
  bt as k,
  c as ie,
  d as ae,
  i as A,
  j,
  l as M,
  mt as N,
  o as P,
  wt as F,
  yt as oe,
} from "./framer.B3F8DTpJ.mjs";
import { i as I, n as L, r as R, t as z } from "./jsPFAj3P2.xszjOvq7.mjs";
import { a as B, i as se, o as ce, r as V } from "./shared-lib.BczJtw9W.mjs";
import { n as le, t as H } from "./A7j4jyv2g.ZuufPjhg.mjs";
import { i as ue, n as de, r as fe, t as pe } from "./E952Zd3mb.BxttGTN2.mjs";
import { i as me, n as he, r as ge, t as _e } from "./ar0X3XvKk.BFP7uYt_.mjs";
import ve, { t as ye } from "./fTnPfOX_2byMdq6OUGe-biD-PTa0tONsmlGXSNL21Ao.CgQSK3f1.mjs";
function U(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var W,
  G,
  K,
  q,
  J,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  Y,
  ke = e(() => {
    (u(),
      T(),
      p(),
      r(),
      I(),
      (W = h(f.div)),
      (G = { QhIm0d8zc: { hover: !0, pressed: !0 } }),
      (K = [`QhIm0d8zc`, `Yr4Jtugkh`, `QlZ_TYokZ`, `zWsz21g7K`, `ttiqPnWqd`]),
      (q = `framer-sCPK2`),
      (J = {
        QhIm0d8zc: `framer-v-1gqsop0`,
        QlZ_TYokZ: `framer-v-l80t3s`,
        ttiqPnWqd: `framer-v-fc9v9h`,
        Yr4Jtugkh: `framer-v-1370xy5`,
        zWsz21g7K: `framer-v-1wkahn7`,
      }),
      (be = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (xe = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Se = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Ce = (e, t) => `translateX(-50%) ${t}`),
      (we = ({ value: e, children: t }) => {
        let r = o(d),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(d.Provider, { value: a, children: t });
      }),
      (Te = f.create(t)),
      (Ee = {
        Default: `QhIm0d8zc`,
        Disabled: `QlZ_TYokZ`,
        Error: `ttiqPnWqd`,
        Loading: `Yr4Jtugkh`,
        Success: `zWsz21g7K`,
      }),
      (De = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ee[r.variant] ?? r.variant ?? `QhIm0d8zc`,
      })),
      (Oe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = b(
        l(function (e, n) {
          let { activeLocale: r, setLocale: a } = F(),
            { style: o, className: l, layoutId: u, variant: d, ...p } = De(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: b,
              setGestureState: S,
              setVariant: re,
              variants: C,
            } = ne({
              cycleOrder: K,
              defaultVariant: `QhIm0d8zc`,
              enabledGestures: G,
              variant: d,
              variantClassNames: J,
            }),
            w = Oe(e, C),
            T = i(null),
            E = () => h !== `Yr4Jtugkh`,
            D = () => h === `Yr4Jtugkh`,
            O = ee(),
            k = [z];
          return (
            N(),
            c(te, {
              id: u ?? O,
              children: c(Te, {
                animate: C,
                initial: !1,
                children: c(we, {
                  value: be,
                  children: s(f.button, {
                    ...p,
                    ...v,
                    className: m(q, ...k, `framer-1gqsop0`, l, g),
                    "data-framer-name": `Default`,
                    "data-reset": `button`,
                    layoutDependency: w,
                    layoutId: `QhIm0d8zc`,
                    ref: n ?? T,
                    style: {
                      backgroundColor: `var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, rgb(17, 17, 18))`,
                      borderBottomLeftRadius: 9,
                      borderBottomRightRadius: 9,
                      borderTopLeftRadius: 9,
                      borderTopRightRadius: 9,
                      opacity: 1,
                      ...o,
                    },
                    variants: {
                      "QhIm0d8zc-hover": { backgroundColor: `rgb(5, 5, 5)` },
                      "QhIm0d8zc-pressed": { backgroundColor: `rgb(51, 51, 51)` },
                      QlZ_TYokZ: { opacity: 0.5 },
                      ttiqPnWqd: { backgroundColor: `rgba(255, 34, 68, 0.15)` },
                    },
                    ...U(
                      {
                        "QhIm0d8zc-hover": { "data-framer-name": void 0 },
                        "QhIm0d8zc-pressed": { "data-framer-name": void 0 },
                        QlZ_TYokZ: { "data-framer-name": `Disabled` },
                        ttiqPnWqd: { "data-framer-name": `Error` },
                        Yr4Jtugkh: { "data-framer-name": `Loading` },
                        zWsz21g7K: { "data-framer-name": `Success` },
                      },
                      h,
                      y
                    ),
                    children: [
                      E() &&
                        c(x, {
                          __fromCanvasComponent: !0,
                          children: c(t, {
                            children: c(f.p, {
                              className: `framer-styles-preset-8vgk3u`,
                              "data-styles-preset": `jsPFAj3P2`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2b0e121e-0368-44f6-b6fc-57cffb0ea05b, rgb(255, 255, 255)))`,
                              },
                              children: `Send message`,
                            }),
                          }),
                          className: `framer-pdnev5`,
                          fonts: [`Inter`],
                          layoutDependency: w,
                          layoutId: `CE4XdvCml`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-2b0e121e-0368-44f6-b6fc-57cffb0ea05b, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          variants: { ttiqPnWqd: { "--extracted-r6o4lv": `rgb(224, 20, 20)` } },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...U(
                            {
                              ttiqPnWqd: {
                                children: c(t, {
                                  children: c(f.p, {
                                    className: `framer-styles-preset-8vgk3u`,
                                    "data-styles-preset": `jsPFAj3P2`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(224, 20, 20))`,
                                    },
                                    children: `Something went wrong`,
                                  }),
                                }),
                              },
                              zWsz21g7K: {
                                children: c(t, {
                                  children: c(f.p, {
                                    className: `framer-styles-preset-8vgk3u`,
                                    "data-styles-preset": `jsPFAj3P2`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2b0e121e-0368-44f6-b6fc-57cffb0ea05b, rgb(255, 255, 255)))`,
                                    },
                                    children: `Thank you`,
                                  }),
                                }),
                              },
                            },
                            h,
                            y
                          ),
                        }),
                      D() &&
                        c(f.div, {
                          className: `framer-1at8ddt`,
                          "data-framer-name": `Spinner`,
                          layoutDependency: w,
                          layoutId: `Sr3DtotB7`,
                          style: {
                            mask: `url('../../assets/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                            WebkitMask: `url('../../assets/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                          },
                          children: c(W, {
                            __framer__loop: Se,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: `loop`,
                            __framer__loopTransition: xe,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-1sk7m5l`,
                            "data-framer-name": `Conic`,
                            layoutDependency: w,
                            layoutId: `rFZe405At`,
                            style: {
                              background: `conic-gradient(from 180deg at 50% 50%, #4cf 0deg, #4cf 360deg)`,
                              backgroundColor: `rgb(68, 204, 255)`,
                              mask: `none`,
                              WebkitMask: `none`,
                            },
                            variants: {
                              Yr4Jtugkh: {
                                background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                mask: `url('../../assets/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                                WebkitMask: `url('../../assets/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                              },
                            },
                            children: c(f.div, {
                              className: `framer-zc3yic`,
                              "data-framer-name": `Rounding`,
                              layoutDependency: w,
                              layoutId: `z2J4kEtuh`,
                              style: {
                                backgroundColor: `rgb(255, 255, 255)`,
                                borderBottomLeftRadius: 1,
                                borderBottomRightRadius: 1,
                                borderTopLeftRadius: 1,
                                borderTopRightRadius: 1,
                              },
                              transformTemplate: Ce,
                            }),
                          }),
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
          `.framer-sCPK2.framer-wiwycs, .framer-sCPK2 .framer-wiwycs { display: block; }`,
          `.framer-sCPK2.framer-1gqsop0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 16px; position: relative; width: 240px; }`,
          `.framer-sCPK2 .framer-pdnev5 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-sCPK2 .framer-1at8ddt { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
          `.framer-sCPK2 .framer-1sk7m5l { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-sCPK2 .framer-zc3yic { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-sCPK2.framer-1gqsop0 { gap: 0px; } .framer-sCPK2.framer-1gqsop0 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-sCPK2.framer-1gqsop0 > :first-child { margin-left: 0px; } .framer-sCPK2.framer-1gqsop0 > :last-child { margin-right: 0px; } }`,
          `.framer-sCPK2.framer-v-1370xy5.framer-1gqsop0, .framer-sCPK2.framer-v-l80t3s.framer-1gqsop0, .framer-sCPK2.framer-v-1wkahn7.framer-1gqsop0, .framer-sCPK2.framer-v-fc9v9h.framer-1gqsop0 { cursor: unset; }`,
          `.framer-sCPK2.framer-v-1370xy5 .framer-1sk7m5l { overflow: hidden; }`,
          ...L,
        ],
        `framer-sCPK2`
      )),
      (Y.displayName = `Button filled`),
      (Y.defaultProps = { height: 60, width: 240 }),
      y(Y, {
        variant: {
          options: [`QhIm0d8zc`, `Yr4Jtugkh`, `QlZ_TYokZ`, `zWsz21g7K`, `ttiqPnWqd`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: P.Enum,
        },
      }),
      j(
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
          ...w(R),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ae,
  je,
  Me,
  Ne = e(() => {
    (T(),
      g.loadFonts([]),
      (Ae = [{ explicitInter: !0, fonts: [] }]),
      (je = [
        `.framer-SR0ll .framer-styles-preset-nyooen:not(.rich-text-wrapper), .framer-SR0ll .framer-styles-preset-nyooen.rich-text-wrapper a { --framer-link-current-text-color: #111111; --framer-link-current-text-decoration: none; --framer-link-hover-text-color: rgba(17, 17, 18, 0.8); --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, #111112); --framer-link-text-decoration: none; transition: color 0.4s cubic-bezier(0.44, 0, 0.56, 1) 0s; }`,
      ]),
      (Me = `framer-SR0ll`));
  }),
  Pe,
  Fe,
  Ie,
  Le = e(() => {
    (T(),
      g.loadFonts([`Inter-Medium`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-MediumItalic`]),
      (Pe = [
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
              url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/khkJkwSL66WFg8SX6Wa726c.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/0E7IMbDzcGABpBwwqNEt60wU0w.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/NTJ0nQgIF0gcDelS14zQ9NR9Q.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/QrcNhgEPfRl0LS8qz5Ln8olanl8.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JEXmejW8mXOYMtt0hyRg811kHac.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/ksvR4VsLksjpSwnC2fPgHRNMw.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/uy9s0iWuxiNnVt8EpTI3gzohpwo.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (Fe = [
        `.framer-Yeohv .framer-styles-preset-t83ngg:not(.rich-text-wrapper), .framer-Yeohv .framer-styles-preset-t83ngg.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 50px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.05em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, #111112); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-Yeohv .framer-styles-preset-t83ngg:not(.rich-text-wrapper), .framer-Yeohv .framer-styles-preset-t83ngg.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.05em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, #111112); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-Yeohv .framer-styles-preset-t83ngg:not(.rich-text-wrapper), .framer-Yeohv .framer-styles-preset-t83ngg.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.05em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, #111112); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Ie = `framer-Yeohv`));
  }),
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  X,
  Ge,
  Ke,
  qe,
  Je,
  Z,
  Ye,
  Q,
  Xe,
  Ze,
  $,
  Qe;
e(() => {
  (u(),
    T(),
    p(),
    r(),
    se(),
    le(),
    ke(),
    ce(),
    me(),
    ue(),
    I(),
    Ne(),
    Le(),
    ye(),
    (Re = C(H)),
    (ze = C(Y)),
    (Be = v(f.section)),
    (Ve = C(B)),
    (He = C(V)),
    (Ue = {
      Kh1ZD7BYa: `(max-width: 809.98px)`,
      pt59te2w7: `(min-width: 810px) and (max-width: 1199.98px)`,
      WMg9C9XUT: `(min-width: 1200px)`,
    }),
    (We = []),
    (X = `framer-7GfwB`),
    (Ge = {
      Kh1ZD7BYa: `framer-v-1p3o25a`,
      pt59te2w7: `framer-v-mq5ocg`,
      WMg9C9XUT: `framer-v-1uzo0nr`,
    }),
    (Ke = (e, t, n) => (e && t ? `position` : n)),
    (qe = {
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
    (Je = {
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
    (Ye = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
        default:
          return n;
      }
    }),
    (Q = { Desktop: `WMg9C9XUT`, Phone: `Kh1ZD7BYa`, Tablet: `pt59te2w7` }),
    (Xe = ({ value: e }) =>
      k()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ze = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `WMg9C9XUT`,
    })),
    ($ = b(
      l(function (e, r) {
        let l = i(null),
          u = r ?? l,
          p = ee(),
          { activeLocale: h, setLocale: g } = F(),
          _ = N(),
          { style: v, className: y, layoutId: ne, variant: b, ...C } = Ze(e);
        re(n(() => ve({}, h), [h]));
        let [w, T] = oe(b, Ue, !1),
          k = m(X, pe, _e, z, Ie, Me),
          j = o(ae)?.isLayoutTemplate,
          P = !!o(d)?.transition?.layout,
          I = Ke(j, P);
        return (
          D({}),
          c(ae.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: Q,
              primaryVariantId: `WMg9C9XUT`,
              variantClassNames: Ge,
            },
            children: s(te, {
              id: ne ?? p,
              children: [
                c(Xe, {
                  value: `html body { background: var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, rgb(241, 241, 241)); }`,
                }),
                s(f.div, {
                  ...C,
                  className: m(k, `framer-1uzo0nr`, y),
                  ref: u,
                  style: { ...v },
                  children: [
                    s(f.main, {
                      className: `framer-zhs2lw`,
                      "data-framer-name": `Main`,
                      layout: I,
                      children: [
                        s(Be, {
                          animate: qe,
                          className: `framer-1juvczv`,
                          "data-framer-appear-id": `1juvczv`,
                          "data-framer-name": `Container`,
                          initial: Je,
                          optimized: !0,
                          children: [
                            c(`div`, {
                              className: `framer-11gt7di`,
                              "data-framer-name": `Left`,
                              children: c(S, {
                                breakpoint: w,
                                overrides: {
                                  Kh1ZD7BYa: {
                                    width: `max(min(${_?.width || `100vw`} - 48px, 1848px), 1px)`,
                                  },
                                  pt59te2w7: {
                                    width: `max(min(${_?.width || `100vw`} - 64px, 1848px) / 4, 1px)`,
                                  },
                                },
                                children: c(A, {
                                  height: 74,
                                  width: `max(min(${_?.width || `100vw`} - 72px, 1848px) / 4, 1px)`,
                                  children: c(O, {
                                    className: `framer-dcwspo-container`,
                                    nodeId: `TZVs59JXS`,
                                    scopeId: `JhEGlRZQU`,
                                    children: c(S, {
                                      breakpoint: w,
                                      overrides: {
                                        Kh1ZD7BYa: { variant: Z(`TuRw7aFlX`) },
                                        pt59te2w7: { variant: Z(`RPQmTWYXP`) },
                                      },
                                      children: c(H, {
                                        height: `100%`,
                                        id: `TZVs59JXS`,
                                        layoutId: `TZVs59JXS`,
                                        style: { width: `100%` },
                                        variant: Z(`RqjG8NJO6`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            s(`div`, {
                              className: `framer-ifzxhg`,
                              "data-framer-name": `Right`,
                              children: [
                                s(`div`, {
                                  className: `framer-1djal8g`,
                                  "data-framer-name": `Heading`,
                                  children: [
                                    c(x, {
                                      __fromCanvasComponent: !0,
                                      children: c(t, {
                                        children: c(`h1`, {
                                          className: `framer-styles-preset-13zczbi`,
                                          "data-styles-preset": `E952Zd3mb`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, rgb(17, 17, 18))`,
                                          },
                                          children: `Lets give it a shot`,
                                        }),
                                      }),
                                      className: `framer-1dfgyod`,
                                      "data-framer-name": `What I can offer`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(`div`, {
                                      className: `framer-1p2uuf`,
                                      "data-framer-name": `Description`,
                                      children: [
                                        c(x, {
                                          __fromCanvasComponent: !0,
                                          children: c(t, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-1ngxlwc`,
                                              "data-styles-preset": `ar0X3XvKk`,
                                              style: {
                                                "--framer-text-color": `var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, rgb(17, 17, 18))`,
                                              },
                                              children: `Whether you’re ready to book a session or just have a few questions, I’d love to hear from you.`,
                                            }),
                                          }),
                                          className: `framer-199hq7h`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        c(x, {
                                          __fromCanvasComponent: !0,
                                          children: c(t, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-8vgk3u`,
                                              "data-styles-preset": `jsPFAj3P2`,
                                              style: {
                                                "--framer-text-color": `rgba(17, 17, 18, 0.6)`,
                                              },
                                              children: `Fill out the form below or drop me a message directly, and I’ll get back to you as soon as I can. Let’s create something memorable together!`,
                                            }),
                                          }),
                                          className: `framer-piv8jn`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                s(`div`, {
                                  className: `framer-16wvzwq`,
                                  "data-framer-name": `Form`,
                                  children: [
                                    s(`div`, {
                                      className: `framer-dvgc4n`,
                                      "data-framer-name": `Email`,
                                      children: [
                                        c(x, {
                                          __fromCanvasComponent: !0,
                                          children: c(t, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-8vgk3u`,
                                              "data-styles-preset": `jsPFAj3P2`,
                                              style: {
                                                "--framer-text-color": `rgba(0, 0, 0, 0.6)`,
                                              },
                                              children: `E-mail me at`,
                                            }),
                                          }),
                                          className: `framer-66rt5d`,
                                          "data-framer-name": `E-mail me at`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        c(`div`, {
                                          className: `framer-fr2qci`,
                                          "data-border": !0,
                                          "data-framer-name": `Email`,
                                          children: c(x, {
                                            __fromCanvasComponent: !0,
                                            children: c(t, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-t83ngg`,
                                                "data-styles-preset": `tpPG0Ymmy`,
                                                children: c(E, {
                                                  href: `mailto:arasyidhaikal00@gmail.com`,
                                                  motionChild: !0,
                                                  nodeId: `OP0kjDfSZ`,
                                                  openInNewTab: !0,
                                                  relValues: [],
                                                  scopeId: `JhEGlRZQU`,
                                                  smoothScroll: !1,
                                                  children: c(f.a, {
                                                    className: `framer-styles-preset-nyooen`,
                                                    "data-styles-preset": `mzOD5K6mC`,
                                                    children: `arasyidhaikal00@gmail.com`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            className: `framer-153e14t`,
                                            "data-framer-name": `arasyidhaikal00@gmail.com`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    s(`div`, {
                                      className: `framer-kwty3`,
                                      "data-framer-name": `Form`,
                                      children: [
                                        c(x, {
                                          __fromCanvasComponent: !0,
                                          children: c(t, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-8vgk3u`,
                                              "data-styles-preset": `jsPFAj3P2`,
                                              style: {
                                                "--framer-text-color": `rgba(0, 0, 0, 0.6)`,
                                              },
                                              children: `Or simply leave your details, and I’ll get back to you shortly.`,
                                            }),
                                          }),
                                          className: `framer-lof125`,
                                          "data-framer-name": `E-mail me at`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        c(ie, {
                                          className: `framer-66btl1`,
                                          nodeId: `Y9dxtwJoA`,
                                          children: (e) =>
                                            s(a, {
                                              children: [
                                                s(`div`, {
                                                  className: `framer-ards93`,
                                                  "data-framer-name": `Contact`,
                                                  children: [
                                                    c(`label`, {
                                                      className: `framer-qaw8ol`,
                                                      "data-framer-name": `Name`,
                                                      children: c(M, {
                                                        className: `framer-1kdtdho`,
                                                        inputName: `Name`,
                                                        placeholder: `Name`,
                                                        required: !0,
                                                        type: `text`,
                                                      }),
                                                    }),
                                                    c(`label`, {
                                                      className: `framer-fa3m85`,
                                                      "data-framer-name": `Email`,
                                                      children: c(M, {
                                                        className: `framer-ns8vjd`,
                                                        inputName: `E-mail`,
                                                        placeholder: `E-mail`,
                                                        required: !0,
                                                        type: `email`,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                c(`label`, {
                                                  className: `framer-qmcy50`,
                                                  "data-framer-name": `Message`,
                                                  children: c(M, {
                                                    className: `framer-cs58bq`,
                                                    inputName: `Leave your message`,
                                                    placeholder: `Leave your message`,
                                                    required: !0,
                                                    type: `textarea`,
                                                  }),
                                                }),
                                                c(S, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    Kh1ZD7BYa: {
                                                      width: `calc(min(${_?.width || `100vw`} - 48px, 1848px) - 60px)`,
                                                    },
                                                    pt59te2w7: {
                                                      width: `calc(max(min(${_?.width || `100vw`} - 64px, 1848px) * 0.75, 1px) - 100px)`,
                                                    },
                                                  },
                                                  children: c(A, {
                                                    height: 60,
                                                    width: `calc(max(min(${_?.width || `100vw`} - 72px, 1848px) * 0.75, 1px) - 160px)`,
                                                    children: c(O, {
                                                      className: `framer-1x6z53l-container`,
                                                      nodeId: `Rbkp99Ut2`,
                                                      scopeId: `JhEGlRZQU`,
                                                      children: c(Y, {
                                                        height: `100%`,
                                                        id: `Rbkp99Ut2`,
                                                        layoutId: `Rbkp99Ut2`,
                                                        style: { height: `100%`, width: `100%` },
                                                        type: `submit`,
                                                        variant: Ye(
                                                          e,
                                                          {
                                                            pending: `Yr4Jtugkh`,
                                                            success: `zWsz21g7K`,
                                                          },
                                                          Z(`QhIm0d8zc`)
                                                        ),
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        c(A, {
                          width: _?.width || `100vw`,
                          children: c(O, {
                            className: `framer-756nmq-container`,
                            "data-framer-name": `Grid`,
                            name: `Grid`,
                            nodeId: `Co1FkCyKd`,
                            scopeId: `JhEGlRZQU`,
                            children: c(S, {
                              breakpoint: w,
                              overrides: {
                                Kh1ZD7BYa: { JLnFVd4lc: !1, SZjrZZXey: !1 },
                                pt59te2w7: { ieZNkwrrK: `0px 32px 0px 32px` },
                              },
                              children: c(B, {
                                gbAjZwZif: !0,
                                height: `100%`,
                                HIadHX3E2: `rgba(0, 0, 0, 0.12)`,
                                id: `Co1FkCyKd`,
                                ieZNkwrrK: `0px 36px 0px 36px`,
                                JLnFVd4lc: !0,
                                layoutId: `Co1FkCyKd`,
                                name: `Grid`,
                                style: { height: `100%`, width: `100%` },
                                SZjrZZXey: !0,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    c(A, {
                      children: c(O, {
                        className: `framer-18agu4s-container`,
                        "data-framer-name": `Smooth scroll`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: I,
                        name: `Smooth scroll`,
                        nodeId: `Tc9Fsd6su`,
                        scopeId: `JhEGlRZQU`,
                        children: c(V, {
                          height: `100%`,
                          id: `Tc9Fsd6su`,
                          infinite: !1,
                          intensity: 8,
                          layoutId: `Tc9Fsd6su`,
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
        `.framer-7GfwB.framer-9zj220, .framer-7GfwB .framer-9zj220 { display: block; }`,
        `.framer-7GfwB.framer-1uzo0nr { align-content: center; align-items: center; background-color: var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, #f1f1f1); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-7GfwB .framer-zhs2lw { align-content: center; align-items: center; background-color: var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, #f1f1f1); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 240px 36px 160px 36px; position: relative; width: 100%; }`,
        `.framer-7GfwB .framer-1juvczv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1848px; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-7GfwB .framer-11gt7di { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-7GfwB .framer-dcwspo-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-7GfwB .framer-ifzxhg { align-content: flex-start; align-items: flex-start; display: flex; flex: 3 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-7GfwB .framer-1djal8g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-7GfwB .framer-1dfgyod, .framer-7GfwB .framer-66rt5d { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-7GfwB .framer-1p2uuf, .framer-7GfwB .framer-kwty3, .framer-7GfwB .framer-66btl1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-7GfwB .framer-199hq7h { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 810px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-7GfwB .framer-piv8jn { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 890px; position: relative; width: 100%; }`,
        `.framer-7GfwB .framer-16wvzwq { align-content: flex-start; align-items: flex-start; background-color: var(--token-2b0e121e-0368-44f6-b6fc-57cffb0ea05b, #ffffff); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 80px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-7GfwB .framer-dvgc4n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-7GfwB .framer-fr2qci { --border-bottom-width: 2px; --border-color: var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, #111112); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 12px 0px; position: relative; width: min-content; }`,
        `.framer-7GfwB .framer-153e14t, .framer-7GfwB .framer-lof125 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-7GfwB .framer-ards93 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-7GfwB .framer-qaw8ol, .framer-7GfwB .framer-fa3m85 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-7GfwB .framer-1kdtdho, .framer-7GfwB .framer-ns8vjd { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-radius-bottom-left: 9px; --framer-input-border-radius-bottom-right: 9px; --framer-input-border-radius-top-left: 9px; --framer-input-border-radius-top-right: 9px; --framer-input-font-color: var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, #111112); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: -0.05em; --framer-input-font-line-height: 1em; --framer-input-font-size: 20px; --framer-input-font-weight: 500; --framer-input-icon-color: #999999; --framer-input-padding: 16px; --framer-input-placeholder-color: rgba(17, 17, 18, 0.4); --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-7GfwB .framer-qmcy50 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-7GfwB .framer-cs58bq { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-radius-bottom-left: 9px; --framer-input-border-radius-bottom-right: 9px; --framer-input-border-radius-top-left: 9px; --framer-input-border-radius-top-right: 9px; --framer-input-font-color: var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, #111112); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: -0.05em; --framer-input-font-line-height: 1em; --framer-input-font-size: 20px; --framer-input-font-weight: 500; --framer-input-icon-color: #999999; --framer-input-padding: 16px; --framer-input-placeholder-color: rgba(17, 17, 18, 0.4); --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 170px; position: relative; width: 100%; }`,
        `.framer-7GfwB .framer-1x6z53l-container { flex: none; height: 60px; position: relative; width: 100%; }`,
        `.framer-7GfwB .framer-756nmq-container { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 0; }`,
        `.framer-7GfwB .framer-18agu4s-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...de,
        ...he,
        ...L,
        ...Fe,
        ...je,
        `.framer-7GfwB[data-border="true"]::after, .framer-7GfwB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-7GfwB.framer-1uzo0nr { width: 810px; } .framer-7GfwB .framer-zhs2lw { padding: 214px 32px 120px 32px; } .framer-7GfwB .framer-ifzxhg, .framer-7GfwB .framer-1djal8g { gap: 40px; } .framer-7GfwB .framer-16wvzwq { gap: 38px; padding: 50px; } .framer-7GfwB .framer-kwty3 { gap: 30px; } .framer-7GfwB .framer-66btl1, .framer-7GfwB .framer-ards93 { gap: 20px; }}`,
        `@media (max-width: 809.98px) { .framer-7GfwB.framer-1uzo0nr { width: 390px; } .framer-7GfwB .framer-zhs2lw { padding: 114px 24px 60px 24px; } .framer-7GfwB .framer-1juvczv { flex-direction: column; gap: 40px; } .framer-7GfwB .framer-11gt7di, .framer-7GfwB .framer-qaw8ol, .framer-7GfwB .framer-fa3m85 { flex: none; width: 100%; } .framer-7GfwB .framer-ifzxhg { flex: none; gap: 40px; width: 100%; } .framer-7GfwB .framer-1djal8g, .framer-7GfwB .framer-1p2uuf, .framer-7GfwB .framer-kwty3 { gap: 30px; } .framer-7GfwB .framer-16wvzwq { border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; gap: 30px; padding: 30px; } .framer-7GfwB .framer-fr2qci { padding: 0px 0px 10px 0px; } .framer-7GfwB .framer-lof125 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-7GfwB .framer-66btl1 { gap: 10px; } .framer-7GfwB .framer-ards93 { flex-direction: column; gap: 10px; } .framer-7GfwB .framer-1kdtdho, .framer-7GfwB .framer-ns8vjd, .framer-7GfwB .framer-cs58bq { --framer-input-font-size: 16px; --framer-input-padding: 18px; }}`,
      ],
      `framer-7GfwB`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 2588, width: 1200 }),
    j(
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
              source: `google`,
              style: `normal`,
              uiFamilyName: `Inter`,
              url: `https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZ1rib2Bg-4.woff2`,
              weight: `500`,
            },
          ],
        },
        ...Re,
        ...ze,
        ...Ve,
        ...He,
        ...w(fe),
        ...w(ge),
        ...w(R),
        ...w(Pe),
        ...w(Ae),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (t.locale, Promise.allSettled([_(H, {}, t), _(Y, {}, t), _(B, {}, t)])),
    }),
    (Qe = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerJhEGlRZQU`,
          slots: [],
          annotations: {
            framerColorSyntax: `true`,
            framerComponentViewportWidth: `true`,
            framerContractVersion: `1`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"pt59te2w7":{"layout":["fixed","auto"]},"Kh1ZD7BYa":{"layout":["fixed","auto"]}}}`,
            framerAutoSizeImages: `true`,
            framerScrollSections: `false`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `2588`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Qe as __FramerMetadata__, $ as default, We as queryParamNames };
//# sourceMappingURL=m8bH8jVrW3YBSPWmnGUtAKhgYB_-pq3ZtBBtNKBXZhM.B6uUBaJO.mjs.map
