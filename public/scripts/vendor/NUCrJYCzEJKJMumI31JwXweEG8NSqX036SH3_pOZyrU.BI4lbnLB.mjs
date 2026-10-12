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
import { a as d, j as f, r as p, t as m } from "./motion.CQsVbJu1.mjs";
import {
  Ct as te,
  D as h,
  Dt as g,
  F as _,
  Ft as v,
  G as y,
  I as ne,
  L as b,
  Lt as x,
  M as S,
  Mt as C,
  Nt as w,
  O as T,
  S as E,
  Tt as re,
  U as D,
  W as O,
  Z as k,
  _ as A,
  _t as ie,
  a as j,
  bt as M,
  d as N,
  ht as P,
  i as F,
  it as I,
  j as L,
  kt as ae,
  mt as oe,
  n as se,
  o as R,
  p as z,
  q as ce,
  v as le,
  wt as ue,
  x as de,
  yt as fe,
} from "./framer.B3F8DTpJ.mjs";
import { i as B, r as pe } from "./Phosphor.DA1rZyDZ.mjs";
import { i as V, n as H, r as U, t as me } from "./jsPFAj3P2.xszjOvq7.mjs";
import { i as he, n as ge, r as _e, t as ve } from "./OQFUDQG12.B_TkdXtI.mjs";
import { n as ye, t as W } from "./jrBwqGEOh.8FmayInh.mjs";
import { a as G, i as K, o as be, r as xe } from "./shared-lib.BczJtw9W.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./Rcgs2l1OR.sBtHcz0w.mjs";
import { n as Ee, t as q } from "./A7j4jyv2g.ZuufPjhg.mjs";
import { n as De, t as J } from "./Cv6kYmHpn.B4RYovEx.mjs";
import { i as Oe, n as ke, r as Ae, t as je } from "./uX7HtuG5N.zByZLh56.mjs";
import { i as Me, n as Ne, r as Pe, t as Fe } from "./DXm77IWSL.RE7umW_E.mjs";
import { i as Ie, t as Le } from "./EEv3Nygkn.CJnQhIgT.mjs";
import { i as Re, n as ze, r as Be, t as Ve } from "./E952Zd3mb.BxttGTN2.mjs";
import { i as He, n as Ue, r as We, t as Ge } from "./ar0X3XvKk.BFP7uYt_.mjs";
import { i as Ke, n as qe, r as Je, t as Ye } from "./wIcaSKsHY.D0vvQ5cq.mjs";
import { n as Xe, t as Ze } from "./RiTFBoiLP.CZWvn7fh.mjs";
import Qe, { t as $e } from "./IN4u4ftlkmCldAQ0UQbJYFR1fMbr053mDa9qp5Lk22A.BOIsTBtx.mjs";
function et(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  Y,
  ht = e(() => {
    (u(),
      k(),
      m(),
      r(),
      V(),
      Se(),
      (tt = { CAx3WTW1l: { hover: !0 } }),
      (nt = [`CAx3WTW1l`, `WGAK3FdCm`, `cNsLlT3iX`]),
      (rt = `framer-YjlAo`),
      (it = {
        CAx3WTW1l: `framer-v-a2rqpx`,
        cNsLlT3iX: `framer-v-10kzvjz`,
        WGAK3FdCm: `framer-v-1ywpyhi`,
      }),
      (at = { delay: 0, duration: 0.3, ease: [0.82, 0.11, 0.37, 0.82], type: `tween` }),
      (ot = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (st = (e, t, n) => {
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
      (ct = { dateStyle: `medium`, timeZone: `UTC` }),
      (lt = (e, t) => st(e, ct, t)),
      (ut = ({ value: e, children: t }) => {
        let r = o(d),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(d.Provider, { value: a, children: t });
      }),
      (dt = f.create(t)),
      (ft = { Desktop: `CAx3WTW1l`, Phone: `cNsLlT3iX`, Tablet: `WGAK3FdCm` }),
      (pt = ({ date: e, height: t, id: n, link: r, preview: i, title: a, width: o, ...s }) => ({
        ...s,
        A6Y0l37iI:
          a ?? s.A6Y0l37iI ?? `Fun Run 2026 - Euforia Ribuan Pelari`,
        variant: ft[s.variant] ?? s.variant ?? `CAx3WTW1l`,
        vZg5AjsLz: e ?? s.vZg5AjsLz ?? `2026-01-08T00:00:00.000Z`,
        Xa9Agj1Tx: i ?? s.Xa9Agj1Tx,
        XW1NsYFUh: r ?? s.XW1NsYFUh,
      })),
      (mt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = w(
        l(function (e, n) {
          let r = i(null),
            a = n ?? r,
            o = ee(),
            { activeLocale: l, setLocale: u } = ue(),
            d = oe(),
            {
              style: m,
              className: h,
              layoutId: g,
              variant: v,
              XW1NsYFUh: ne,
              Xa9Agj1Tx: b,
              vZg5AjsLz: x,
              A6Y0l37iI: S,
              ...w
            } = pt(e),
            {
              baseVariant: E,
              classNames: re,
              clearLoadingGesture: D,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: ie,
              setGestureState: j,
              setVariant: M,
              variants: N,
            } = C({
              cycleOrder: nt,
              defaultVariant: `CAx3WTW1l`,
              enabledGestures: tt,
              ref: a,
              variant: v,
              variantClassNames: it,
            }),
            P = mt(e, N),
            F = _(rt, Te, me),
            I = te(),
            L = lt(x, I);
          return c(p, {
            id: g ?? o,
            children: c(dt, {
              animate: N,
              initial: !1,
              children: c(ut, {
                value: at,
                children: c(A, {
                  href: ne,
                  motionChild: !0,
                  nodeId: `CAx3WTW1l`,
                  scopeId: `P5Uk_jJ8N`,
                  children: s(f.a, {
                    ...w,
                    ...O,
                    className: `${_(F, `framer-a2rqpx`, h, re)} framer-1e4ckd7`,
                    "data-border": !0,
                    "data-framer-name": `Desktop`,
                    layoutDependency: P,
                    layoutId: `CAx3WTW1l`,
                    ref: a,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `rgb(212, 212, 212)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      ...m,
                    },
                    variants: {
                      "CAx3WTW1l-hover": { backgroundColor: `rgba(0, 0, 0, 0)` },
                      cNsLlT3iX: {
                        backgroundColor: `var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, rgb(241, 241, 241))`,
                      },
                      WGAK3FdCm: {
                        backgroundColor: `var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, rgb(241, 241, 241))`,
                      },
                    },
                    ...et(
                      {
                        "CAx3WTW1l-hover": { "data-framer-name": void 0 },
                        cNsLlT3iX: { "data-framer-name": `Phone` },
                        WGAK3FdCm: { "data-framer-name": `Tablet` },
                      },
                      E,
                      k
                    ),
                    children: [
                      c(f.div, {
                        className: `framer-ur7osd`,
                        "data-framer-name": `Container`,
                        layoutDependency: P,
                        layoutId: `Uy9sEy4q8`,
                        style: {
                          borderBottomLeftRadius: 8,
                          borderBottomRightRadius: 8,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        },
                        children: c(z, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: y((d?.y || 0) + 26 + 0),
                            sizes: `80px`,
                            ...ot(b),
                          },
                          className: `framer-1g0f9kq`,
                          layoutDependency: P,
                          layoutId: `HSM17MQnw`,
                          style: { rotate: 0, scale: 1 },
                          variants: { "CAx3WTW1l-hover": { rotate: 1, scale: 1.17 } },
                          ...et(
                            {
                              cNsLlT3iX: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: y((d?.y || 0) + 20 + 0),
                                  sizes: `80px`,
                                  ...ot(b),
                                },
                              },
                            },
                            E,
                            k
                          ),
                        }),
                      }),
                      s(f.div, {
                        className: `framer-ot8m8g`,
                        "data-framer-name": `Text`,
                        layoutDependency: P,
                        layoutId: `bC_Gr4iTa`,
                        children: [
                          c(T, {
                            __fromCanvasComponent: !0,
                            children: c(t, {
                              children: c(f.p, {
                                className: `framer-styles-preset-2n4ap`,
                                "data-styles-preset": `Rcgs2l1OR`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(17, 17, 18, 0.6))`,
                                },
                                children: `Jan 8, 2026`,
                              }),
                            }),
                            className: `framer-t5xfxa`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: P,
                            layoutId: `pxqLlT2u3`,
                            style: { "--extracted-r6o4lv": `rgba(17, 17, 18, 0.6)` },
                            text: L,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          c(T, {
                            __fromCanvasComponent: !0,
                            children: c(t, {
                              children: c(f.p, {
                                className: `framer-styles-preset-8vgk3u`,
                                "data-styles-preset": `jsPFAj3P2`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, rgb(17, 17, 18)))`,
                                },
                                children: `Specta Show 2026 - Panggung Visual & Musik`,
                              }),
                            }),
                            className: `framer-erbv7p`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: P,
                            layoutId: `fB0NrjNmm`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, rgb(17, 17, 18))`,
                            },
                            text: S,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
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
          `.framer-YjlAo.framer-1e4ckd7, .framer-YjlAo .framer-1e4ckd7 { display: block; }`,
          `.framer-YjlAo.framer-a2rqpx { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 26px; position: relative; text-decoration: none; width: 282px; }`,
          `.framer-YjlAo .framer-ur7osd { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 80px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 80px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-YjlAo .framer-1g0f9kq { aspect-ratio: 1 / 1; bottom: 0px; flex: none; position: absolute; right: 0px; top: 0px; width: var(--framer-aspect-ratio-supported, 80px); }`,
          `.framer-YjlAo .framer-ot8m8g { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-YjlAo .framer-t5xfxa, .framer-YjlAo .framer-erbv7p { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-YjlAo.framer-v-1ywpyhi.framer-a2rqpx { cursor: unset; }`,
          `.framer-YjlAo.framer-v-10kzvjz.framer-a2rqpx { cursor: unset; gap: 20px; padding: 20px 0px 20px 0px; }`,
          `.framer-YjlAo.framer-v-10kzvjz .framer-ur7osd { height: var(--framer-aspect-ratio-supported, 70px); width: 70px; }`,
          `.framer-YjlAo.framer-v-10kzvjz .framer-1g0f9kq { width: var(--framer-aspect-ratio-supported, 70px); }`,
          `.framer-YjlAo.framer-v-10kzvjz .framer-ot8m8g { gap: 6px; }`,
          ...Ce,
          ...H,
          `.framer-YjlAo[data-border="true"]::after, .framer-YjlAo [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-YjlAo`
      )),
      (Y.displayName = `Blog card small`),
      (Y.defaultProps = { height: 280, width: 282 }),
      S(Y, {
        variant: {
          options: [`CAx3WTW1l`, `WGAK3FdCm`, `cNsLlT3iX`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: R.Enum,
        },
        XW1NsYFUh: { title: `Link`, type: R.Link },
        Xa9Agj1Tx: { title: `Preview`, type: R.ResponsiveImage },
        vZg5AjsLz: { defaultValue: `2026-01-08T00:00:00.000Z`, title: `Date`, type: R.Date },
        A6Y0l37iI: {
          defaultValue: `Fun Run 2026 - Euforia Ribuan Pelari`,
          title: `Title`,
          type: R.String,
        },
      }),
      L(
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
          ...O(we),
          ...O(U),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  gt,
  _t,
  vt,
  yt = e(() => {
    (k(),
      ne.loadFonts([]),
      (gt = [{ explicitInter: !0, fonts: [] }]),
      (_t = [
        `.framer-rL33l .framer-styles-preset-wditwx { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; }`,
      ]),
      (vt = `framer-rL33l`));
  }),
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  X,
  Z,
  Q,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  $,
  Gt;
e(() => {
  (u(),
    k(),
    m(),
    r(),
    K(),
    B(),
    Ee(),
    De(),
    ye(),
    be(),
    ht(),
    Xe(),
    Ie(),
    He(),
    Me(),
    Re(),
    V(),
    he(),
    yt(),
    Oe(),
    Ke(),
    $e(),
    (bt = D(Ze)),
    (xt = D(G)),
    (St = D(W)),
    (Ct = D(pe)),
    (wt = x(v(f.section))),
    (Tt = D(q)),
    (Et = D(J)),
    (Dt = D(Y)),
    (Ot = D(xe)),
    (kt = {
      HEysvAPhc: `(max-width: 809.98px)`,
      nrcLM35lb: `(min-width: 1200px)`,
      w0QgPVzK2: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (At = () => typeof document < `u`),
    (jt = []),
    (Mt = `framer-hPmvp`),
    (Nt = {
      HEysvAPhc: `framer-v-ndrouk`,
      nrcLM35lb: `framer-v-kc4ov5`,
      w0QgPVzK2: `framer-v-18c9l0a`,
    }),
    (Pt = (e, t, n) => (e && t ? `position` : n)),
    (Ft = {
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
    (It = {
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
    (Lt = (e, t, n) => {
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
    (Rt = { dateStyle: `medium`, timeZone: `UTC` }),
    (zt = (e, t) => Lt(e, Rt, t)),
    (X = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Z = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Q = (e) => ({
      from: { alias: `Jt86odJTd`, data: Le, type: `Collection` },
      limit: { type: `LiteralValue`, value: 3 },
      orderBy: [
        { collection: `Jt86odJTd`, direction: `desc`, name: `Fi53MNOAk`, type: `Identifier` },
      ],
      select: [
        { collection: `Jt86odJTd`, name: `TUMaRpq8Y`, type: `Identifier` },
        { collection: `Jt86odJTd`, name: `o4RZewo_g`, type: `Identifier` },
        { collection: `Jt86odJTd`, name: `Fi53MNOAk`, type: `Identifier` },
        { collection: `Jt86odJTd`, name: `ua9FnvLmw`, type: `Identifier` },
        { collection: `Jt86odJTd`, name: `id`, type: `Identifier` },
      ],
      where: {
        operator: `not`,
        type: `UnaryOperation`,
        value: {
          left: { collection: `Jt86odJTd`, name: `ua9FnvLmw`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
      },
    })),
    (Bt = ({ query: e, pageSize: t, children: n }) => n(g(e))),
    (Vt = { Desktop: `nrcLM35lb`, Phone: `HEysvAPhc`, Tablet: `w0QgPVzK2` }),
    (Ht = ({ value: e }) =>
      M()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ut = (e) => ({
      from: { alias: `QciPY2G4i`, data: Le, type: `Collection` },
      select: [
        { collection: `QciPY2G4i`, name: `ua9FnvLmw`, type: `Identifier` },
        { collection: `QciPY2G4i`, name: `Fi53MNOAk`, type: `Identifier` },
        { collection: `QciPY2G4i`, name: `o4RZewo_g`, type: `Identifier` },
        { collection: `QciPY2G4i`, name: `ivhGqPB2R`, type: `Identifier` },
        { collection: `QciPY2G4i`, name: `wIjEVkATu`, type: `Identifier` },
        { collection: `QciPY2G4i`, name: `rcnbZcT2W`, type: `Identifier` },
        { collection: `QciPY2G4i`, name: `Jf1NQ7bt1`, type: `Identifier` },
      ],
      where: e,
    })),
    (Wt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Vt[r.variant] ?? r.variant ?? `nrcLM35lb`,
    })),
    ($ = w(
      l(function (e, r) {
        let l = i(null),
          u = r ?? l,
          m = ee(),
          { activeLocale: v, setLocale: ne } = ue(),
          b = oe(),
          x = P(),
          [S] = g(Ut(ce(x, `QciPY2G4i`))),
          C = (e) => {
            if (!S) throw new le(`No data matches path variables: ${JSON.stringify(x)}`);
            return S[e];
          },
          {
            style: w,
            className: D,
            layoutId: O,
            variant: k,
            ua9FnvLmw: A = C(`ua9FnvLmw`) ?? ``,
            Fi53MNOAk: M = C(`Fi53MNOAk`),
            o4RZewo_g: I = C(`o4RZewo_g`),
            ivhGqPB2R: L = C(`ivhGqPB2R`) ?? ``,
            wIjEVkATu: R = C(`wIjEVkATu`) ?? ``,
            rcnbZcT2W: B = C(`rcnbZcT2W`),
            Jf1NQ7bt1: V = C(`Jf1NQ7bt1`) ?? ``,
            ...H
          } = Wt(e);
        re(n(() => Qe({ ua9FnvLmw: A }, v), [A, v]));
        let [U, he] = fe(k, kt, !1),
          ge = _(Mt, Fe, Ve, Ge, me, Ye, je, ve, vt),
          _e = o(N)?.isLayoutTemplate,
          ye = !!o(d)?.transition?.layout,
          K = Pt(_e, ye),
          be = te(),
          Se = zt(M, be);
        ae();
        let Ce = () => !At() || U === `w0QgPVzK2`;
        return (
          ie({}),
          c(N.Provider, {
            value: {
              activeVariantId: U,
              humanReadableVariantMap: Vt,
              primaryVariantId: `nrcLM35lb`,
              variantClassNames: Nt,
            },
            children: s(p, {
              id: O ?? m,
              children: [
                c(Ht, { value: `html body { background: rgb(241, 241, 241); }` }),
                s(f.div, {
                  ...H,
                  className: _(ge, `framer-kc4ov5`, D),
                  ref: u,
                  style: { ...w },
                  children: [
                    s(f.main, {
                      className: `framer-1lhn00n`,
                      "data-framer-name": `Main`,
                      layout: K,
                      children: [
                        s(wt, {
                          __framer__adjustPosition: !1,
                          __framer__offset: 0,
                          __framer__parallaxTransformEnabled: !0,
                          __framer__speed: 120,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          animate: Ft,
                          className: `framer-1gd7noz`,
                          "data-framer-appear-id": `1gd7noz`,
                          "data-framer-name": `Hero`,
                          initial: It,
                          optimized: !0,
                          children: [
                            s(`div`, {
                              className: `framer-10prxiu`,
                              "data-framer-name": `Container`,
                              children: [
                                c(`div`, {
                                  className: `framer-og7m63`,
                                  "data-framer-name": `Date`,
                                  children: c(T, {
                                    __fromCanvasComponent: !0,
                                    children: c(t, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-17etv0n`,
                                        "data-styles-preset": `DXm77IWSL`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                        },
                                        children: `Content`,
                                      }),
                                    }),
                                    className: `framer-1f1udz6`,
                                    fonts: [`Inter`],
                                    text: c(`time`, { dateTime: M, children: Se }),
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                s(`div`, {
                                  className: `framer-12i8xa7`,
                                  "data-framer-name": `Heading`,
                                  children: [
                                    c(T, {
                                      __fromCanvasComponent: !0,
                                      children: c(t, {
                                        children: c(`h1`, {
                                          className: `framer-styles-preset-13zczbi`,
                                          "data-styles-preset": `E952Zd3mb`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-2b0e121e-0368-44f6-b6fc-57cffb0ea05b, rgb(255, 255, 255))`,
                                          },
                                          children: `Fun Run 2026 - Euforia Ribuan Pelari`,
                                        }),
                                      }),
                                      className: `framer-1o06zwq`,
                                      fonts: [`Inter`],
                                      text: A,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    c(h, {
                                      links: [
                                        {
                                          href: { webPageId: `JB9ZuENHj` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `JB9ZuENHj` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `JB9ZuENHj` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        c(E, {
                                          breakpoint: U,
                                          overrides: {
                                            HEysvAPhc: {
                                              y:
                                                (b?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                134 +
                                                0 +
                                                170 +
                                                0 +
                                                118.32,
                                            },
                                            w0QgPVzK2: {
                                              y: (b?.y || 0) + 0 + 0 + 0 + 0 + 194 + 0 + 0 + 134.32,
                                            },
                                          },
                                          children: c(F, {
                                            height: 22,
                                            y: (b?.y || 0) + 0 + 0 + 0 + 0 + 294 + 0 + 0 + 134.32,
                                            children: c(j, {
                                              className: `framer-vaeldi-container`,
                                              nodeId: `S2oq6imqN`,
                                              scopeId: `QciPY2G4i`,
                                              children: c(E, {
                                                breakpoint: U,
                                                overrides: {
                                                  HEysvAPhc: { Boor76kiW: e[2] },
                                                  w0QgPVzK2: { Boor76kiW: e[1] },
                                                },
                                                children: c(Ze, {
                                                  Boor76kiW: e[0],
                                                  EXOsvPYgG: `rgb(255, 255, 255)`,
                                                  h059AvfWL: `Go back to blogs`,
                                                  height: `100%`,
                                                  id: `S2oq6imqN`,
                                                  layoutId: `S2oq6imqN`,
                                                  MT6iv4U7v: `rgb(255, 255, 255)`,
                                                  npv8N8VQy: `arrow-elbow-down-left`,
                                                  variant: X(`kljxVVNnO`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            s(z, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: y((b?.y || 0) + 0 + 0 + 0 + 0 + 0),
                                sizes: b?.width || `100vw`,
                                ...Z(I),
                              },
                              className: `framer-11qnfcj`,
                              "data-framer-name": `Image`,
                              children: [
                                c(E, {
                                  breakpoint: U,
                                  overrides: {
                                    HEysvAPhc: { height: 524.32 },
                                    w0QgPVzK2: { height: 450.32 },
                                  },
                                  children: c(F, {
                                    height: 650.32,
                                    width: b?.width || `100vw`,
                                    y: (b?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0,
                                    children: c(j, {
                                      className: `framer-n7v7jx-container`,
                                      nodeId: `CeC2K3Jx9`,
                                      scopeId: `QciPY2G4i`,
                                      children: c(E, {
                                        breakpoint: U,
                                        overrides: {
                                          HEysvAPhc: {
                                            ieZNkwrrK: `0px 32px 0px 32px`,
                                            JLnFVd4lc: !1,
                                            SZjrZZXey: !1,
                                          },
                                          w0QgPVzK2: { ieZNkwrrK: `0px 32px 0px 32px` },
                                        },
                                        children: c(G, {
                                          gbAjZwZif: !0,
                                          height: `100%`,
                                          HIadHX3E2: `rgba(255, 255, 255, 0.3)`,
                                          id: `CeC2K3Jx9`,
                                          ieZNkwrrK: `0px 36px 0px 36px`,
                                          JLnFVd4lc: !0,
                                          layoutId: `CeC2K3Jx9`,
                                          style: { height: `100%`, width: `100%` },
                                          SZjrZZXey: !0,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                c(E, {
                                  breakpoint: U,
                                  overrides: {
                                    HEysvAPhc: {
                                      height: 524.32,
                                      y: (b?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0.3418,
                                    },
                                    w0QgPVzK2: {
                                      height: 450.32,
                                      y: (b?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0,
                                    },
                                  },
                                  children: c(F, {
                                    height: 650.32,
                                    width: b?.width || `100vw`,
                                    y: (b?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0.4239,
                                    children: c(j, {
                                      className: `framer-14vu0kc-container`,
                                      nodeId: `wNrcJy9sI`,
                                      scopeId: `QciPY2G4i`,
                                      children: c(E, {
                                        breakpoint: U,
                                        overrides: {
                                          HEysvAPhc: { m_eduoTBf: `20px` },
                                          w0QgPVzK2: { m_eduoTBf: `32px` },
                                        },
                                        children: c(W, {
                                          bkDGgOnyS: {
                                            borderBottomWidth: 0,
                                            borderColor: `rgb(255, 255, 255)`,
                                            borderLeftWidth: 1,
                                            borderRightWidth: 0,
                                            borderStyle: `solid`,
                                            borderTopWidth: 1,
                                          },
                                          giUdIyR5I: {
                                            borderBottomWidth: 1,
                                            borderColor: `rgb(255, 255, 255)`,
                                            borderLeftWidth: 1,
                                            borderRightWidth: 0,
                                            borderStyle: `solid`,
                                            borderTopWidth: 0,
                                          },
                                          height: `100%`,
                                          id: `wNrcJy9sI`,
                                          IWD_vykVW: {
                                            borderBottomWidth: 0,
                                            borderColor: `rgb(255, 255, 255)`,
                                            borderLeftWidth: 0,
                                            borderRightWidth: 1,
                                            borderStyle: `solid`,
                                            borderTopWidth: 1,
                                          },
                                          layoutId: `wNrcJy9sI`,
                                          m_eduoTBf: `36px`,
                                          OMz475883: {
                                            borderBottomWidth: 1,
                                            borderColor: `rgb(255, 255, 255)`,
                                            borderLeftWidth: 0,
                                            borderRightWidth: 1,
                                            borderStyle: `solid`,
                                            borderTopWidth: 0,
                                          },
                                          style: { height: `100%`, width: `100%` },
                                          variant: X(`FW9uK5oRP`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                c(F, {
                                  children: c(j, {
                                    className: `framer-jvt6v7-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `pekREJATO`,
                                    scopeId: `QciPY2G4i`,
                                    children: c(pe, {
                                      height: `100%`,
                                      id: `pekREJATO`,
                                      layoutId: `pekREJATO`,
                                      opacity: 0.096,
                                      style: { height: `100%`, width: `100%` },
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        s(`section`, {
                          className: `framer-1owu7z8`,
                          "data-framer-name": `Content`,
                          children: [
                            s(`div`, {
                              className: `framer-1e4fnvx`,
                              "data-framer-name": `Container`,
                              children: [
                                s(`aside`, {
                                  className: `framer-1urm53d`,
                                  "data-framer-name": `Author`,
                                  children: [
                                    c(E, {
                                      breakpoint: U,
                                      overrides: {
                                        HEysvAPhc: {
                                          width: `min(max(${b?.width || `100vw`} - 48px, 1px), 1848px)`,
                                          y: (b?.y || 0) + 0 + 0 + 0 + 524.32 + 40 + 0 + 0 + 0 + 0,
                                        },
                                        w0QgPVzK2: {
                                          width: `max(min(max(${b?.width || `100vw`} - 64px, 1px), 1848px) / 4, 50px)`,
                                          y: (b?.y || 0) + 0 + 0 + 0 + 450.32 + 120 + 0 + 0 + 0 + 0,
                                        },
                                      },
                                      children: c(F, {
                                        height: 74,
                                        width: `max(min(max(${b?.width || `100vw`} - 72px, 1px), 1848px) / 4, 1px)`,
                                        y: (b?.y || 0) + 0 + 0 + 0 + 650.32 + 160 + 0 + 0 + 0,
                                        children: c(j, {
                                          className: `framer-rqnid7-container`,
                                          nodeId: `cSAJnx6WH`,
                                          scopeId: `QciPY2G4i`,
                                          children: c(E, {
                                            breakpoint: U,
                                            overrides: {
                                              HEysvAPhc: { variant: X(`TuRw7aFlX`) },
                                              w0QgPVzK2: { variant: X(`RPQmTWYXP`) },
                                            },
                                            children: c(q, {
                                              height: `100%`,
                                              id: `cSAJnx6WH`,
                                              layoutId: `cSAJnx6WH`,
                                              style: { width: `100%` },
                                              variant: X(`RqjG8NJO6`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    c(h, {
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
                                        c(E, {
                                          breakpoint: U,
                                          overrides: {
                                            HEysvAPhc: {
                                              y:
                                                (b?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                524.32 +
                                                40 +
                                                0 +
                                                0 +
                                                0 +
                                                104,
                                            },
                                            w0QgPVzK2: {
                                              y:
                                                (b?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                450.32 +
                                                120 +
                                                0 +
                                                0 +
                                                0 +
                                                134,
                                            },
                                          },
                                          children: c(F, {
                                            height: 47,
                                            y: (b?.y || 0) + 0 + 0 + 0 + 650.32 + 160 + 0 + 0 + 134,
                                            children: c(j, {
                                              className: `framer-1t1kxfg-container`,
                                              nodeId: `nAmntSVjr`,
                                              scopeId: `QciPY2G4i`,
                                              children: c(E, {
                                                breakpoint: U,
                                                overrides: {
                                                  HEysvAPhc: {
                                                    rYvSKCvJf: e[2],
                                                    variant: X(`iI2ipV6vo`),
                                                  },
                                                  w0QgPVzK2: {
                                                    rYvSKCvJf: e[1],
                                                    variant: X(`icsoeaVPh`),
                                                  },
                                                },
                                                children: c(J, {
                                                  height: `100%`,
                                                  id: `nAmntSVjr`,
                                                  layoutId: `nAmntSVjr`,
                                                  rYvSKCvJf: e[0],
                                                  u99mHedFv: `Contact me`,
                                                  variant: X(`VdXXpamQf`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                                s(`article`, {
                                  className: `framer-jdj3sw`,
                                  "data-framer-name": `Article`,
                                  children: [
                                    s(`div`, {
                                      className: `framer-1cnzk5g`,
                                      "data-framer-name": `Intro`,
                                      children: [
                                        c(T, {
                                          __fromCanvasComponent: !0,
                                          children: c(t, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-1ngxlwc`,
                                              "data-styles-preset": `ar0X3XvKk`,
                                              children: `asdasd`,
                                            }),
                                          }),
                                          className: `framer-1d8k4xf`,
                                          fonts: [`Inter`],
                                          text: L,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        c(T, {
                                          __fromCanvasComponent: !0,
                                          children: c(t, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-8vgk3u`,
                                              "data-styles-preset": `jsPFAj3P2`,
                                              children: `But here’s the thing: you’re not alone. In fact, it’s completely normal to feel this way! Whether it’s your first photoshoot or your tenth, nerves can creep in. The good news? There are ways to get comfortable and look your best on camera.`,
                                            }),
                                          }),
                                          className: `framer-wv51u1`,
                                          fonts: [`Inter`],
                                          text: R,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    c(`div`, {
                                      className: `framer-1nfv5en`,
                                      "data-framer-name": `Image`,
                                      children: c(E, {
                                        breakpoint: U,
                                        overrides: {
                                          HEysvAPhc: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: y(
                                                (b?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  524.32 +
                                                  40 +
                                                  0 +
                                                  191 +
                                                  0 +
                                                  398 +
                                                  0
                                              ),
                                              sizes: `max(min(max(${b?.width || `100vw`} - 48px, 1px), 1848px), 1px)`,
                                              ...Z(B),
                                            },
                                          },
                                          w0QgPVzK2: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: y(
                                                (b?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  450.32 +
                                                  120 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  438 +
                                                  0
                                              ),
                                              sizes: `max(max(min(max(${b?.width || `100vw`} - 64px, 1px), 1848px) / 4, 50px) * 3, 1px)`,
                                              ...Z(B),
                                            },
                                          },
                                        },
                                        children: c(z, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            loading: y(
                                              (b?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                650.32 +
                                                160 +
                                                0 +
                                                0 +
                                                438 +
                                                0
                                            ),
                                            sizes: `max(min(max(${b?.width || `100vw`} - 72px, 1px), 1848px) / 2, 1px)`,
                                            ...Z(B),
                                          },
                                          className: `framer-1bc0y8h`,
                                        }),
                                      }),
                                    }),
                                    c(`div`, {
                                      className: `framer-3rfhmi`,
                                      "data-framer-name": `Content`,
                                      children: c(T, {
                                        __fromCanvasComponent: !0,
                                        children: V,
                                        className: `framer-1vt5a48`,
                                        "data-framer-name": `Content`,
                                        fonts: [`Inter`],
                                        stylesPresetsClassNames: {
                                          a: `framer-styles-preset-1jim1cm`,
                                          h2: `framer-styles-preset-1w6tysk`,
                                          h3: `framer-styles-preset-1d9cb7n`,
                                          img: `framer-styles-preset-wditwx`,
                                          p: `framer-styles-preset-8vgk3u`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                                c(`aside`, {
                                  className: `framer-dppfqz`,
                                  "data-border": !0,
                                  children: c(se, {
                                    children: c(Bt, {
                                      query: Q(A),
                                      children: (e, t, n) =>
                                        c(a, {
                                          children: e?.map(
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
                                                p,
                                                {
                                                  id: `Jt86odJTd-${t}`,
                                                  children: c(de.Provider, {
                                                    value: { TUMaRpq8Y: r },
                                                    children: c(h, {
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
                                                        c(E, {
                                                          breakpoint: U,
                                                          overrides: {
                                                            HEysvAPhc: {
                                                              width: `min(max(${b?.width || `100vw`} - 48px, 1px), 1848px)`,
                                                              y:
                                                                (b?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                524.32 +
                                                                40 +
                                                                0 +
                                                                1361 +
                                                                0 +
                                                                0,
                                                            },
                                                            w0QgPVzK2: {
                                                              width: `calc(max(min(max(${b?.width || `100vw`} - 64px, 1px), 1848px) / 4, 50px) * 3)`,
                                                              y:
                                                                (b?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                450.32 +
                                                                120 +
                                                                0 +
                                                                1254 +
                                                                0 +
                                                                0,
                                                            },
                                                          },
                                                          children: c(F, {
                                                            height: 280,
                                                            width: `max(min(max(${b?.width || `100vw`} - 72px, 1px), 1848px) / 4, 1px)`,
                                                            y:
                                                              (b?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              650.32 +
                                                              160 +
                                                              0 +
                                                              0 +
                                                              0,
                                                            children: c(j, {
                                                              className: `framer-12haz5x-container`,
                                                              nodeId: `BtsSfTPaA`,
                                                              scopeId: `QciPY2G4i`,
                                                              children: c(E, {
                                                                breakpoint: U,
                                                                overrides: {
                                                                  HEysvAPhc: {
                                                                    variant: X(`cNsLlT3iX`),
                                                                    XW1NsYFUh: t[2],
                                                                  },
                                                                  w0QgPVzK2: {
                                                                    variant: X(`WGAK3FdCm`),
                                                                    XW1NsYFUh: t[1],
                                                                  },
                                                                },
                                                                children: c(Y, {
                                                                  A6Y0l37iI: i,
                                                                  height: `100%`,
                                                                  id: `BtsSfTPaA`,
                                                                  layoutId: `BtsSfTPaA`,
                                                                  style: { width: `100%` },
                                                                  variant: X(`CAx3WTW1l`),
                                                                  vZg5AjsLz: e,
                                                                  width: `100%`,
                                                                  Xa9Agj1Tx: Z(n),
                                                                  XW1NsYFUh: t[0],
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
                                        }),
                                    }),
                                  }),
                                }),
                                Ce() &&
                                  c(`div`, {
                                    className: `framer-1z8clo hidden-kc4ov5 hidden-ndrouk`,
                                    "data-framer-name": `Filler`,
                                  }),
                              ],
                            }),
                            c(E, {
                              breakpoint: U,
                              overrides: {
                                HEysvAPhc: {
                                  height: 1741,
                                  y: (b?.y || 0) + 0 + 0 + 0 + 524.32 + 0,
                                },
                                w0QgPVzK2: {
                                  height: 1774,
                                  y: (b?.y || 0) + 0 + 0 + 0 + 450.32 + 0,
                                },
                              },
                              children: c(F, {
                                height: 1514,
                                width: b?.width || `100vw`,
                                y: (b?.y || 0) + 0 + 0 + 0 + 650.32 + 0,
                                children: c(j, {
                                  className: `framer-15h1k77-container`,
                                  nodeId: `atXYJjSTI`,
                                  scopeId: `QciPY2G4i`,
                                  children: c(E, {
                                    breakpoint: U,
                                    overrides: {
                                      HEysvAPhc: { JLnFVd4lc: !1, SZjrZZXey: !1 },
                                      w0QgPVzK2: { ieZNkwrrK: `0px 32px 0px 32px` },
                                    },
                                    children: c(G, {
                                      gbAjZwZif: !0,
                                      height: `100%`,
                                      HIadHX3E2: `rgba(0, 0, 0, 0.12)`,
                                      id: `atXYJjSTI`,
                                      ieZNkwrrK: `0px 36px 0px 36px`,
                                      JLnFVd4lc: !0,
                                      layoutId: `atXYJjSTI`,
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
                      ],
                    }),
                    c(F, {
                      children: c(j, {
                        className: `framer-1s9xq7n-container`,
                        "data-framer-name": `Smooth scroll`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: K,
                        name: `Smooth scroll`,
                        nodeId: `ef_y4FZYy`,
                        scopeId: `QciPY2G4i`,
                        children: c(xe, {
                          height: `100%`,
                          id: `ef_y4FZYy`,
                          infinite: !1,
                          intensity: 8,
                          layoutId: `ef_y4FZYy`,
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
        `.framer-hPmvp.framer-1dqsd1f, .framer-hPmvp .framer-1dqsd1f { display: block; }`,
        `.framer-hPmvp.framer-kc4ov5 { align-content: center; align-items: center; background-color: #f1f1f1; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-hPmvp .framer-1lhn00n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-hPmvp .framer-1gd7noz { align-content: flex-start; align-items: flex-start; background-color: var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, #111112); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 294px 36px 200px 36px; position: sticky; top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-hPmvp .framer-10prxiu { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1848px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-hPmvp .framer-og7m63 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-hPmvp .framer-1f1udz6 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-hPmvp .framer-12i8xa7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 3 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 46px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-hPmvp .framer-1o06zwq { flex: none; height: auto; max-width: 80%; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-hPmvp .framer-vaeldi-container, .framer-hPmvp .framer-1t1kxfg-container, .framer-hPmvp .framer-1s9xq7n-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-hPmvp .framer-11qnfcj { flex: none; height: 100%; left: 0px; opacity: 0.4; position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-hPmvp .framer-n7v7jx-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-hPmvp .framer-14vu0kc-container { flex: none; height: 100%; left: 0px; position: absolute; top: calc(50.06518904823992% - 100% / 2); width: 100%; z-index: 10; }`,
        `.framer-hPmvp .framer-jvt6v7-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`,
        `.framer-hPmvp .framer-1owu7z8 { align-content: flex-start; align-items: flex-start; background-color: var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, #f1f1f1); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 160px 36px 160px 36px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-hPmvp .framer-1e4fnvx { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1848px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-hPmvp .framer-1urm53d { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: sticky; top: 36px; width: 1px; z-index: 1; }`,
        `.framer-hPmvp .framer-rqnid7-container, .framer-hPmvp .framer-12haz5x-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-hPmvp .framer-jdj3sw { align-content: flex-start; align-items: flex-start; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-hPmvp .framer-1cnzk5g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 820px; overflow: hidden; padding: 0px 60px 0px 0px; position: relative; width: 100%; }`,
        `.framer-hPmvp .framer-1d8k4xf, .framer-hPmvp .framer-wv51u1 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-hPmvp .framer-1nfv5en { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-hPmvp .framer-1bc0y8h { aspect-ratio: 1.41 / 1; flex: 1 0 0px; height: auto; overflow: hidden; position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-hPmvp .framer-3rfhmi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 60px 0px 0px; position: relative; width: 100%; }`,
        `.framer-hPmvp .framer-1vt5a48 { --framer-paragraph-spacing: 32px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-hPmvp .framer-dppfqz { --border-bottom-width: 1px; --border-color: #d4d4d4; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 1px; height: min-content; justify-content: center; padding: 0px; position: sticky; top: 0px; width: 1px; z-index: 1; }`,
        `.framer-hPmvp .framer-1z8clo { flex: none; height: 1px; overflow: hidden; position: relative; width: 187px; }`,
        `.framer-hPmvp .framer-15h1k77-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        ...Ne,
        ...ze,
        ...Ue,
        ...H,
        ...qe,
        ...ke,
        ...ge,
        ..._t,
        `.framer-hPmvp[data-border="true"]::after, .framer-hPmvp [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-hPmvp.framer-kc4ov5 { width: 810px; } .framer-hPmvp .framer-1gd7noz { padding: 194px 32px 100px 32px; } .framer-hPmvp .framer-14vu0kc-container { top: 0px; } .framer-hPmvp .framer-1owu7z8 { padding: 120px 32px 120px 32px; } .framer-hPmvp .framer-1e4fnvx { align-content: unset; align-items: unset; display: grid; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); justify-content: center; } .framer-hPmvp .framer-1urm53d { align-self: start; flex: none; height: auto; justify-self: start; order: 0; width: 100%; } .framer-hPmvp .framer-jdj3sw { align-self: start; flex: none; grid-column: span 3; justify-self: start; order: 1; padding: 0px 0px 60px 0px; width: 100%; } .framer-hPmvp .framer-dppfqz { align-self: start; flex: none; grid-column: span 3; justify-self: start; order: 3; width: 100%; } .framer-hPmvp .framer-1z8clo { align-self: start; justify-self: start; order: 2; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-hPmvp.framer-kc4ov5 { width: 390px; } .framer-hPmvp .framer-1gd7noz { padding: 134px 32px 80px 32px; } .framer-hPmvp .framer-10prxiu { flex-direction: column; gap: 20px; } .framer-hPmvp .framer-og7m63 { flex: none; order: 0; width: 100%; } .framer-hPmvp .framer-12i8xa7 { flex: none; gap: 30px; order: 1; width: 100%; } .framer-hPmvp .framer-1o06zwq { max-width: unset; } .framer-hPmvp .framer-1owu7z8 { padding: 40px 24px 60px 24px; } .framer-hPmvp .framer-1e4fnvx { flex-direction: column; gap: 40px; } .framer-hPmvp .framer-1urm53d { flex: none; gap: 30px; order: 0; position: relative; top: unset; width: 100%; } .framer-hPmvp .framer-jdj3sw { flex: none; gap: 36px; order: 1; width: 100%; } .framer-hPmvp .framer-1cnzk5g { gap: 24px; max-width: unset; padding: 0px; } .framer-hPmvp .framer-1nfv5en { border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; will-change: var(--framer-will-change-override, transform); } .framer-hPmvp .framer-3rfhmi { padding: 0px; } .framer-hPmvp .framer-dppfqz { flex: none; order: 3; width: 100%; }}`,
      ],
      `framer-hPmvp`
    )),
    ($.displayName = `Blog Detail`),
    ($.defaultProps = { height: 4544, width: 1200 }),
    L(
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
          ],
        },
        ...bt,
        ...xt,
        ...St,
        ...Ct,
        ...Tt,
        ...Et,
        ...Dt,
        ...Ot,
        ...O(Pe),
        ...O(Be),
        ...O(We),
        ...O(U),
        ...O(Je),
        ...O(Ae),
        ...O(_e),
        ...O(gt),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = I.get(Ut(ce(t.pathVariables, `QciPY2G4i`)), n).readMaybeAsync();
        return Promise.allSettled([
          b(Ze, {}, t),
          b(G, {}, t),
          b(W, {}, t),
          b(q, {}, t),
          b(J, {}, t),
          (async () => {
            let [e] = (await r) ?? [];
            return I.get(Q(e?.ua9FnvLmw), n).preload();
          })(),
          (async () => {
            let [e] = (await r) ?? [],
              i = (await I.get(Q(e?.ua9FnvLmw), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(i.flatMap((e) => b(Y, {}, t)));
          })(),
        ]);
      },
    }),
    (Gt = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerQciPY2G4i`,
          slots: [],
          annotations: {
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `false`,
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"w0QgPVzK2":{"layout":["fixed","auto"]},"HEysvAPhc":{"layout":["fixed","auto"]}}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `4544`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Gt as __FramerMetadata__, $ as default, jt as queryParamNames };
//# sourceMappingURL=NUCrJYCzEJKJMumI31JwXweEG8NSqX036SH3_pOZyrU.BI4lbnLB.mjs.map
