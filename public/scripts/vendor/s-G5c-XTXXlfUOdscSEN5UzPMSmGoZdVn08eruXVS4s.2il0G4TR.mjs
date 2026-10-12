import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as i,
  c as ee,
  j as te,
  l as a,
  o,
  p as ne,
  s as re,
  w as ie,
} from "./react.typNXLzE.mjs";
import { a as ae, j as s, r as c, t as oe } from "./motion.CQsVbJu1.mjs";
import {
  Ct as se,
  D as ce,
  Dt as le,
  F as ue,
  Ft as l,
  G as u,
  L as d,
  Lt as f,
  Nt as p,
  O as m,
  S as h,
  Tt as de,
  U as g,
  W as _,
  Z as fe,
  _ as v,
  _t as pe,
  a as y,
  bt as me,
  d as he,
  ht as ge,
  i as b,
  it as x,
  j as _e,
  kt as ve,
  mt as ye,
  n as be,
  p as S,
  q as xe,
  v as Se,
  wt as Ce,
  x as we,
  yt as Te,
} from "./framer.B3F8DTpJ.mjs";
import { i as C, r as Ee } from "./Phosphor.DA1rZyDZ.mjs";
import { i as w, n as T, r as De, t as Oe } from "./FRDnCmBOd.BfrafLkP.mjs";
import { n as ke, t as E } from "./jrBwqGEOh.8FmayInh.mjs";
import { a as D, i as Ae, o as je, r as Me } from "./shared-lib.BczJtw9W.mjs";
import { i as Ne, n as O, r as k, t as Pe } from "./Rcgs2l1OR.sBtHcz0w.mjs";
import { n as Fe, t as A } from "./Rt3Sh5gwq.Cy2nCw4B.mjs";
import { i as Ie, n as Le, r as j, t as Re } from "./DXm77IWSL.RE7umW_E.mjs";
import { a as M, r as ze } from "./r4GnmA_r2.8mbnORs-.mjs";
import { i as Be, n as N, r as Ve, t as He } from "./ei1YNJ1Ze.XaNBV9ub.mjs";
import { i as P, n as Ue, r as We, t as Ge } from "./E952Zd3mb.BxttGTN2.mjs";
import { n as F, t as I } from "./qP9bHc6_m.Ce8tblfm.mjs";
import { i as Ke, n as qe, r as L, t as Je } from "./LThA9CIiA.DczHfjR2.mjs";
import { n as Ye, t as R } from "./RiTFBoiLP.CZWvn7fh.mjs";
import Xe, { t as Ze } from "./s4-XywrmWfTVKAReMuqTw7oZp8T7-fW30VVlMaFC6dM.1yf4SUa2.mjs";
var Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  z,
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
  B,
  V,
  ht,
  H,
  U,
  W,
  gt,
  G,
  _t,
  K,
  q,
  J,
  Y,
  X,
  Z,
  vt,
  Q,
  yt,
  bt,
  $,
  xt;
e(() => {
  (re(),
    fe(),
    oe(),
    r(),
    Ae(),
    C(),
    ke(),
    je(),
    Ye(),
    Fe(),
    I(),
    ze(),
    Ie(),
    P(),
    Be(),
    w(),
    Ke(),
    Ne(),
    Ze(),
    (Qe = g(R)),
    ($e = g(E)),
    (et = g(D)),
    (tt = g(Ee)),
    (nt = f(l(s.section))),
    (rt = l(s.div)),
    (z = l(S)),
    (it = g(Me)),
    (at = g(A)),
    (ot = {
      CYw9tYZbA: `(min-width: 1200px)`,
      XzXDrGZ58: `(max-width: 809.98px)`,
      YJf0H43De: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (st = []),
    (ct = `framer-C4Pu8`),
    (lt = {
      CYw9tYZbA: `framer-v-dbrefx`,
      XzXDrGZ58: `framer-v-12krsi0`,
      YJf0H43De: `framer-v-1d0esm7`,
    }),
    (ut = (e, t, n) => (e && t ? `position` : n)),
    (dt = {
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
    (ft = {
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
    (pt = (e, t, n) => {
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
    (mt = { dateStyle: `medium`, timeZone: `UTC` }),
    (B = (e, t) => pt(e, mt, t)),
    (V = { bounce: 0.25, delay: 0, duration: 0.45, type: `spring` }),
    (ht = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: V,
      x: 6,
    }),
    (H = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: V,
    }),
    (U = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (W = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (gt = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (G = { damping: 46, delay: 0, mass: 1, stiffness: 209, type: `spring` }),
    (_t = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: G,
      x: 0,
      y: 0,
    }),
    (K = { delay: 0, duration: 0.3, ease: [0.68, 0, 0.28, 0.92], type: `tween` }),
    (q = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (J = () => ({
      from: { alias: `uW30pPmch`, data: M, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `uW30pPmch`, name: `GUYstJGWH`, type: `Identifier` },
        { collection: `uW30pPmch`, name: `id`, type: `Identifier` },
      ],
    })),
    (Y = ({ query: e, pageSize: t, children: n }) => n(le(e))),
    (X = () => ({
      from: { alias: `XShpSSVxI`, data: M, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `XShpSSVxI`, name: `GUYstJGWH`, type: `Identifier` },
        { collection: `XShpSSVxI`, name: `id`, type: `Identifier` },
      ],
    })),
    (Z = { Desktop: `CYw9tYZbA`, Phone: `XzXDrGZ58`, Tablet: `YJf0H43De` }),
    (vt = ({ value: e }) =>
      me()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Q = (e) => ({
      from: {
        constraint: {
          left: { collection: `nextItemId`, name: `eu9GOakWf`, type: `Identifier` },
          operator: `==`,
          right: { collection: `nextItemId.eu9GOakWf`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: {
          constraint: {
            left: { collection: `SB16CA7KQ`, name: `nextItemId`, type: `Identifier` },
            operator: `==`,
            right: { collection: `nextItemId`, name: `id`, type: `Identifier` },
            type: `BinaryOperation`,
          },
          left: {
            constraint: {
              left: { collection: `SB16CA7KQ`, name: `previousItemId`, type: `Identifier` },
              operator: `==`,
              right: { collection: `previousItemId`, name: `id`, type: `Identifier` },
              type: `BinaryOperation`,
            },
            left: {
              constraint: {
                left: { collection: `SB16CA7KQ`, name: `eu9GOakWf`, type: `Identifier` },
                operator: `==`,
                right: { collection: `eu9GOakWf`, name: `id`, type: `Identifier` },
                type: `BinaryOperation`,
              },
              left: { alias: `SB16CA7KQ`, data: M, type: `Collection` },
              right: { alias: `eu9GOakWf`, data: F, type: `Collection` },
              type: `LeftJoin`,
            },
            right: { alias: `previousItemId`, data: M, type: `Collection` },
            type: `LeftJoin`,
          },
          right: { alias: `nextItemId`, data: M, type: `Collection` },
          type: `LeftJoin`,
        },
        right: { alias: `nextItemId.eu9GOakWf`, data: F, type: `Collection` },
        type: `LeftJoin`,
      },
      select: [
        { collection: `SB16CA7KQ`, name: `TWzcXE82P`, type: `Identifier` },
        {
          alias: `eu9GOakWf.ZEbwV0LO1`,
          collection: `eu9GOakWf`,
          name: `ZEbwV0LO1`,
          type: `Identifier`,
        },
        { collection: `SB16CA7KQ`, name: `e_oqHADQd`, type: `Identifier` },
        { collection: `SB16CA7KQ`, name: `l7MvKqPuQ`, type: `Identifier` },
        { collection: `SB16CA7KQ`, name: `xegTeIKOI`, type: `Identifier` },
        { collection: `SB16CA7KQ`, name: `LM74JNIh4`, type: `Identifier` },
        {
          alias: `previousItemId.GUYstJGWH`,
          collection: `previousItemId`,
          name: `GUYstJGWH`,
          type: `Identifier`,
        },
        {
          alias: `previousItemId.TWzcXE82P`,
          collection: `previousItemId`,
          name: `TWzcXE82P`,
          type: `Identifier`,
        },
        {
          alias: `previousItemId.e_oqHADQd`,
          collection: `previousItemId`,
          name: `e_oqHADQd`,
          type: `Identifier`,
        },
        {
          alias: `previousItemId.l7MvKqPuQ`,
          collection: `previousItemId`,
          name: `l7MvKqPuQ`,
          type: `Identifier`,
        },
        { alias: `previousItemId`, collection: `previousItemId`, name: `id`, type: `Identifier` },
        {
          alias: `nextItemId.GUYstJGWH`,
          collection: `nextItemId`,
          name: `GUYstJGWH`,
          type: `Identifier`,
        },
        {
          alias: `nextItemId.TWzcXE82P`,
          collection: `nextItemId`,
          name: `TWzcXE82P`,
          type: `Identifier`,
        },
        {
          alias: `nextItemId.eu9GOakWf.ZEbwV0LO1`,
          collection: `nextItemId.eu9GOakWf`,
          name: `ZEbwV0LO1`,
          type: `Identifier`,
        },
        {
          alias: `nextItemId.e_oqHADQd`,
          collection: `nextItemId`,
          name: `e_oqHADQd`,
          type: `Identifier`,
        },
        {
          alias: `nextItemId.l7MvKqPuQ`,
          collection: `nextItemId`,
          name: `l7MvKqPuQ`,
          type: `Identifier`,
        },
        { alias: `nextItemId`, collection: `nextItemId`, name: `id`, type: `Identifier` },
      ],
      where: e,
    })),
    (yt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `CYw9tYZbA`,
    })),
    (bt = { component: A, variant: `emBAu_3nQ` }),
    ($ = p(
      ne(function (e, r) {
        let ne = i(null),
          re = r ?? ne,
          oe = ie(),
          { activeLocale: l, setLocale: d } = Ce(),
          f = ye(),
          p = ge();
      if (p && p.GUYstJGWH) {
        if (p.GUYstJGWH === 'delvisa') p.GUYstJGWH = 'field-trip';
        else if (p.GUYstJGWH === 'moklet-serve-man-2') p.GUYstJGWH = 'posing-on-a-chair';
        else if (p.GUYstJGWH === 'dempo-fair-47') p.GUYstJGWH = 'annie-and-her-dog';
        else if (p.GUYstJGWH === 'google-devfest-2025') p.GUYstJGWH = 'bride-and-groom';
      }
      var 
          [g] = le(Q(xe(p, `SB16CA7KQ`))),
          _ = (e) => {
            if (!g) throw new Se(`No data matches path variables: ${JSON.stringify(p)}`);
            return g[e];
          },
          {
            style: fe,
            className: me,
            layoutId: x,
            variant: _e,
            TWzcXE82P: C = _(`TWzcXE82P`) ?? ``,
            eu9GOakWf_ZEbwV0LO1: w = _(`eu9GOakWf.ZEbwV0LO1`) ?? ``,
            e_oqHADQd: T = _(`e_oqHADQd`),
            l7MvKqPuQ: De = _(`l7MvKqPuQ`),
            xegTeIKOI: ke = _(`xegTeIKOI`) ?? [],
            LM74JNIh4: Ae = _(`LM74JNIh4`) ?? [],
            previousItemId_GUYstJGWH: je = _(`previousItemId.GUYstJGWH`) ?? ``,
            previousItemId_TWzcXE82P: Ne = _(`previousItemId.TWzcXE82P`) ?? ``,
            previousItemId_e_oqHADQd: O = _(`previousItemId.e_oqHADQd`),
            previousItemId_l7MvKqPuQ: k = _(`previousItemId.l7MvKqPuQ`),
            previousItemId: Fe = _(`previousItemId`),
            nextItemId_GUYstJGWH: A = _(`nextItemId.GUYstJGWH`) ?? ``,
            nextItemId_TWzcXE82P: Ie = _(`nextItemId.TWzcXE82P`) ?? ``,
            nextItemId_eu9GOakWf_ZEbwV0LO1: Le = _(`nextItemId.eu9GOakWf.ZEbwV0LO1`) ?? ``,
            nextItemId_e_oqHADQd: j = _(`nextItemId.e_oqHADQd`),
            nextItemId_l7MvKqPuQ: M = _(`nextItemId.l7MvKqPuQ`),
            nextItemId: ze = _(`nextItemId`),
            ...Be
          } = yt(e);
        de(n(() => Xe({ TWzcXE82P: C }, l), [C, l]));
        let [N, Ve] = Te(_e, ot, !1),
          P = ue(ct, Re, Pe, Ge, Oe, He, Je),
          Ue = te(he)?.isLayoutTemplate,
          We = !!te(ae)?.transition?.layout,
          F = ut(Ue, We),
          I = se(),
          Ke = B(T, I);
        ve();
        let qe = q(Fe),
          L = B(O, I),
          Ye = q(ze),
          Ze = B(j, I);
        return (
          pe({ v4fkfb: bt }),
          o(he.Provider, {
            value: {
              activeVariantId: N,
              humanReadableVariantMap: Z,
              primaryVariantId: `CYw9tYZbA`,
              variantClassNames: lt,
            },
            children: a(c, {
              id: x ?? oe,
              children: [
                o(vt, { value: `html body { background: rgb(241, 241, 241); }` }),
                a(s.div, {
                  ...Be,
                  className: ue(P, `framer-dbrefx`, me),
                  ref: re,
                  style: { ...fe },
                  children: [
                    a(s.main, {
                      className: `framer-1dedjcu`,
                      "data-framer-name": `Main`,
                      layout: F,
                      children: [
                        a(nt, {
                          __framer__adjustPosition: !1,
                          __framer__offset: 0,
                          __framer__parallaxTransformEnabled: !0,
                          __framer__speed: 120,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          animate: dt,
                          className: `framer-e9nu5a`,
                          "data-framer-appear-id": `e9nu5a`,
                          "data-framer-name": `Hero`,
                          initial: ft,
                          optimized: !0,
                          children: [
                            a(`div`, {
                              className: `framer-1t8bts`,
                              "data-framer-name": `Container`,
                              children: [
                                a(`div`, {
                                  className: `framer-1i83sc1`,
                                  "data-framer-name": `Info`,
                                  children: [
                                    a(`div`, {
                                      className: `framer-1ryk7gm`,
                                      "data-framer-name": `Heading`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-12uecny`,
                                          "data-framer-name": `Info`,
                                          children: [
                                            o(`div`, {
                                              className: `framer-1y8s8ph`,
                                              "data-border": !0,
                                              "data-framer-name": `Date`,
                                              children: o(m, {
                                                __fromCanvasComponent: !0,
                                                children: o(t, {
                                                  children: o(`p`, {
                                                    className: `framer-styles-preset-17etv0n`,
                                                    "data-styles-preset": `DXm77IWSL`,
                                                    style: {
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                    },
                                                    children: `Content`,
                                                  }),
                                                }),
                                                className: `framer-1fa2zt2`,
                                                fonts: [`Inter`],
                                                text: o(`time`, { dateTime: T, children: Ke }),
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            o(m, {
                                              __fromCanvasComponent: !0,
                                              children: o(t, {
                                                children: o(`p`, {
                                                  className: `framer-styles-preset-2n4ap`,
                                                  "data-styles-preset": `Rcgs2l1OR`,
                                                  style: {
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                  },
                                                  children: `Lifestyle`,
                                                }),
                                              }),
                                              className: `framer-10hahr1`,
                                              fonts: [`Inter`],
                                              text: w,
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        o(m, {
                                          __fromCanvasComponent: !0,
                                          children: o(t, {
                                            children: o(`h1`, {
                                              className: `framer-styles-preset-13zczbi`,
                                              "data-styles-preset": `E952Zd3mb`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-2b0e121e-0368-44f6-b6fc-57cffb0ea05b, rgb(255, 255, 255))`,
                                              },
                                              children: `Nike commercial`,
                                            }),
                                          }),
                                          className: `framer-ejtcsd`,
                                          fonts: [`Inter`],
                                          text: C,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o(v, {
                                      href: { webPageId: `JhEGlRZQU` },
                                      motionChild: !0,
                                      nodeId: `nJzbfrg_H`,
                                      scopeId: `SB16CA7KQ`,
                                      children: o(h, {
                                        breakpoint: N,
                                        overrides: { XzXDrGZ58: { whileHover: void 0 } },
                                        children: a(s.a, {
                                          className: `framer-bzy2k0 framer-8y0ys`,
                                          "data-framer-name": `Photographer`,
                                          whileHover: ht,
                                          children: [
                                            o(h, {
                                              breakpoint: N,
                                              overrides: {
                                                XzXDrGZ58: {
                                                  background: {
                                                    alt: `Photographer holding a camera`,
                                                    fit: `fill`,
                                                    loading: u(
                                                      (f?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        473.68 +
                                                        0 +
                                                        72 +
                                                        0 +
                                                        156.32 +
                                                        0.5
                                                    ),
                                                    pixelHeight: 406,
                                                    pixelWidth: 408,
                                                    sizes: `43px`,
                                                    src: `../../assets/images/AfuEIphQNXa3eShgFNrb8KwyaE.png`,
                                                  },
                                                },
                                                YJf0H43De: {
                                                  background: {
                                                    alt: `Photographer holding a camera`,
                                                    fit: `fill`,
                                                    loading: u(
                                                      (f?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        519.68 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        162.32 +
                                                        0.5
                                                    ),
                                                    pixelHeight: 406,
                                                    pixelWidth: 408,
                                                    sizes: `43px`,
                                                    src: `../../assets/images/AfuEIphQNXa3eShgFNrb8KwyaE.png`,
                                                  },
                                                },
                                              },
                                              children: o(S, {
                                                background: {
                                                  alt: `Photographer holding a camera`,
                                                  fit: `fill`,
                                                  loading: u(
                                                    (f?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      559.68 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      166.32 +
                                                      0.5
                                                  ),
                                                  pixelHeight: 406,
                                                  pixelWidth: 408,
                                                  sizes: `43px`,
                                                  src: `../../assets/images/AfuEIphQNXa3eShgFNrb8KwyaE.png`,
                                                },
                                                className: `framer-1ajav8t`,
                                                "data-framer-name": `image`,
                                              }),
                                            }),
                                            a(`div`, {
                                              className: `framer-ix4t62`,
                                              "data-framer-name": `Text`,
                                              children: [
                                                o(m, {
                                                  __fromCanvasComponent: !0,
                                                  children: o(t, {
                                                    children: o(`p`, {
                                                      className: `framer-styles-preset-2n4ap`,
                                                      "data-styles-preset": `Rcgs2l1OR`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-2b0e121e-0368-44f6-b6fc-57cffb0ea05b, rgb(255, 255, 255))`,
                                                      },
                                                      children: `M. Haikal Arrasyid`,
                                                    }),
                                                  }),
                                                  className: `framer-l04ym8`,
                                                  "data-framer-name": `M. Haikal Arrasyid`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                o(m, {
                                                  __fromCanvasComponent: !0,
                                                  children: o(t, {
                                                    children: o(`p`, {
                                                      className: `framer-styles-preset-1adkjxa`,
                                                      "data-styles-preset": `FRDnCmBOd`,
                                                      style: {
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                      },
                                                      children: `Professional Photographer`,
                                                    }),
                                                  }),
                                                  className: `framer-u65beu`,
                                                  "data-framer-name": `Professional Photographer`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                o(ce, {
                                  links: [
                                    {
                                      href: { webPageId: `v0kaQiEgk` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `v0kaQiEgk` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `v0kaQiEgk` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    o(h, {
                                      breakpoint: N,
                                      overrides: {
                                        XzXDrGZ58: {
                                          y: (f?.y || 0) + 0 + 0 + 0 + 0 + 0 + 473.68 + 0 + 0,
                                        },
                                        YJf0H43De: {
                                          y: (f?.y || 0) + 0 + 0 + 0 + 0 + 0 + 519.68 + 0 + 184.32,
                                        },
                                      },
                                      children: o(b, {
                                        height: 22,
                                        y: (f?.y || 0) + 0 + 0 + 0 + 0 + 0 + 559.68 + 0 + 188.32,
                                        children: o(y, {
                                          className: `framer-1hi6ts2-container`,
                                          nodeId: `fYsr3e_zQ`,
                                          rendersWithMotion: !0,
                                          scopeId: `SB16CA7KQ`,
                                          whileHover: H,
                                          children: o(h, {
                                            breakpoint: N,
                                            overrides: {
                                              XzXDrGZ58: {
                                                Boor76kiW: e[2],
                                                variant: U(`EIQYCxQnz`),
                                              },
                                              YJf0H43De: { Boor76kiW: e[1] },
                                            },
                                            children: o(R, {
                                              Boor76kiW: e[0],
                                              EXOsvPYgG: `rgb(255, 255, 255)`,
                                              h059AvfWL: `Go back to portfolio`,
                                              height: `100%`,
                                              id: `fYsr3e_zQ`,
                                              layoutId: `fYsr3e_zQ`,
                                              MT6iv4U7v: `rgb(255, 255, 255)`,
                                              npv8N8VQy: `arrow-elbow-down-left`,
                                              variant: U(`kljxVVNnO`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                            o(h, {
                              breakpoint: N,
                              overrides: {
                                XzXDrGZ58: {
                                  height: 800,
                                  y: (f?.y || 0) + 0 + 0 + 0 + 0 + -0.4711,
                                },
                                YJf0H43De: {
                                  height: 800,
                                  y: (f?.y || 0) + 0 + 0 + 0 + 0 + -0.4711,
                                },
                              },
                              children: o(b, {
                                height: 850,
                                width: f?.width || `100vw`,
                                y: (f?.y || 0) + 0 + 0 + 0 + 0 + -0.5006,
                                children: o(y, {
                                  className: `framer-6207cq-container`,
                                  nodeId: `C2fl5wtbn`,
                                  scopeId: `SB16CA7KQ`,
                                  children: o(h, {
                                    breakpoint: N,
                                    overrides: {
                                      XzXDrGZ58: { m_eduoTBf: `20px` },
                                      YJf0H43De: { m_eduoTBf: `32px` },
                                    },
                                    children: o(E, {
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
                                      id: `C2fl5wtbn`,
                                      IWD_vykVW: {
                                        borderBottomWidth: 0,
                                        borderColor: `rgb(255, 255, 255)`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 1,
                                        borderStyle: `solid`,
                                        borderTopWidth: 1,
                                      },
                                      layoutId: `C2fl5wtbn`,
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
                                      variant: U(`FW9uK5oRP`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            o(h, {
                              breakpoint: N,
                              overrides: { XzXDrGZ58: { height: 800 }, YJf0H43De: { height: 800 } },
                              children: o(b, {
                                height: 850,
                                width: f?.width || `100vw`,
                                y: (f?.y || 0) + 0 + 0 + 0 + 0 + 0,
                                children: o(y, {
                                  className: `framer-921xya-container`,
                                  nodeId: `zfF4sl1iJ`,
                                  scopeId: `SB16CA7KQ`,
                                  children: o(h, {
                                    breakpoint: N,
                                    overrides: { XzXDrGZ58: { JLnFVd4lc: !1, SZjrZZXey: !1 } },
                                    children: o(D, {
                                      gbAjZwZif: !0,
                                      height: `100%`,
                                      HIadHX3E2: `rgba(255, 255, 255, 0.2)`,
                                      id: `zfF4sl1iJ`,
                                      ieZNkwrrK: `0px 36px 0px 36px`,
                                      JLnFVd4lc: !0,
                                      layoutId: `zfF4sl1iJ`,
                                      style: { height: `100%`, width: `100%` },
                                      SZjrZZXey: !0,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            o(S, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: u((f?.y || 0) + 0 + 0 + 0 + 0 + 0),
                                sizes: f?.width || `100vw`,
                                ...W(De),
                              },
                              className: `framer-19370nq`,
                              "data-framer-name": `Image`,
                              children: o(b, {
                                children: o(y, {
                                  className: `framer-dlyqnl-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  nodeId: `U3ihmK_zc`,
                                  scopeId: `SB16CA7KQ`,
                                  children: o(Ee, {
                                    height: `100%`,
                                    id: `U3ihmK_zc`,
                                    layoutId: `U3ihmK_zc`,
                                    opacity: 0.062,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        a(`section`, {
                          className: `framer-1epic4n`,
                          "data-framer-name": `Gallery`,
                          children: [
                            a(rt, {
                              __framer__animate: { transition: G },
                              __framer__animateOnce: !0,
                              __framer__enter: gt,
                              __framer__exit: _t,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-18sm12y`,
                              "data-framer-name": `Container`,
                              children: [
                                o(`div`, {
                                  className: `framer-tvfzfr`,
                                  "data-framer-name": `1`,
                                  children: o(`div`, {
                                    className: `framer-tnl69l`,
                                    children: ke?.map(({ id: e, XyWakHIBM: t }, n) =>
                                      o(
                                        c,
                                        {
                                          id: `Ct3_1KsNh-${e ?? n}`,
                                          children: o(h, {
                                            breakpoint: N,
                                            overrides: {
                                              XzXDrGZ58: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  sizes: `min(max(${f?.width || `100vw`} - 20px, 1px), 1848px)`,
                                                  ...W(t),
                                                },
                                                lightbox: {
                                                  backdrop: `rgba(0, 0, 0, 0.8)`,
                                                  maxWidth: 1920,
                                                  padding: 10,
                                                  transition: K,
                                                  zIndex: 10,
                                                },
                                              },
                                              YJf0H43De: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  sizes: `max((min(max(${f?.width || `100vw`} - 64px, 1px), 1848px) - 20px) / 2, 1px)`,
                                                  ...W(t),
                                                },
                                              },
                                            },
                                            children: o(S, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                sizes: `max((min(max(${f?.width || `100vw`} - 72px, 1px), 1848px) - 24px) / 2, 1px)`,
                                                ...W(t),
                                              },
                                              className: `framer-y08lyk`,
                                              "data-framer-name": `Image`,
                                              fitImageDimension: `height`,
                                              id: `y08lyk`,
                                              lightbox: {
                                                backdrop: `rgba(0, 0, 0, 0.8)`,
                                                maxWidth: 1920,
                                                padding: 20,
                                                transition: K,
                                                zIndex: 10,
                                              },
                                              lightboxClassName: P,
                                            }),
                                          }),
                                        },
                                        e ?? n
                                      )
                                    ),
                                  }),
                                }),
                                o(`div`, {
                                  className: `framer-1epdt3f`,
                                  "data-framer-name": `2`,
                                  children: o(`div`, {
                                    className: `framer-1y836sw`,
                                    children: Ae?.map(({ HMVfy1zc3: e, id: t }, n) =>
                                      o(
                                        c,
                                        {
                                          id: `lNPTY304N-${t ?? n}`,
                                          children: o(h, {
                                            breakpoint: N,
                                            overrides: {
                                              XzXDrGZ58: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  sizes: `min(max(${f?.width || `100vw`} - 20px, 1px), 1848px)`,
                                                  ...W(e),
                                                },
                                                lightbox: {
                                                  backdrop: `rgba(0, 0, 0, 0.8)`,
                                                  maxWidth: 1920,
                                                  padding: 10,
                                                  transition: K,
                                                  zIndex: 10,
                                                },
                                              },
                                              YJf0H43De: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  sizes: `max((min(max(${f?.width || `100vw`} - 64px, 1px), 1848px) - 20px) / 2, 1px)`,
                                                  ...W(e),
                                                },
                                              },
                                            },
                                            children: o(S, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                sizes: `max((min(max(${f?.width || `100vw`} - 72px, 1px), 1848px) - 24px) / 2, 1px)`,
                                                ...W(e),
                                              },
                                              className: `framer-1efxo77`,
                                              "data-framer-name": `Image`,
                                              fitImageDimension: `height`,
                                              id: `1efxo77`,
                                              lightbox: {
                                                backdrop: `rgba(0, 0, 0, 0.8)`,
                                                maxWidth: 1920,
                                                padding: 20,
                                                transition: K,
                                                zIndex: 10,
                                              },
                                              lightboxClassName: P,
                                            }),
                                          }),
                                        },
                                        t ?? n
                                      )
                                    ),
                                  }),
                                }),
                              ],
                            }),
                            o(h, {
                              breakpoint: N,
                              overrides: {
                                XzXDrGZ58: { height: 20, y: (f?.y || 0) + 0 + 0 + 0 + 800 + 0 },
                                YJf0H43De: { y: (f?.y || 0) + 0 + 0 + 0 + 800 + 0 },
                              },
                              children: o(b, {
                                height: 24,
                                width: f?.width || `100vw`,
                                y: (f?.y || 0) + 0 + 0 + 0 + 850 + 0,
                                children: o(y, {
                                  className: `framer-a3x6r7-container`,
                                  nodeId: `TpN9L4zwc`,
                                  scopeId: `SB16CA7KQ`,
                                  children: o(h, {
                                    breakpoint: N,
                                    overrides: {
                                      XzXDrGZ58: {
                                        ieZNkwrrK: `0px 24px 0px 24px`,
                                        JLnFVd4lc: !1,
                                        SZjrZZXey: !1,
                                      },
                                      YJf0H43De: { ieZNkwrrK: `0px 32px 0px 32px` },
                                    },
                                    children: o(D, {
                                      gbAjZwZif: !0,
                                      height: `100%`,
                                      HIadHX3E2: `rgba(0, 0, 0, 0.12)`,
                                      id: `TpN9L4zwc`,
                                      ieZNkwrrK: `0px 36px 0px 36px`,
                                      JLnFVd4lc: !0,
                                      layoutId: `TpN9L4zwc`,
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
                        a(`section`, {
                          className: `framer-l77obk`,
                          "data-framer-name": `More`,
                          children: [
                            a(`div`, {
                              className: `framer-1tzrufi`,
                              "data-framer-name": `Text`,
                              children: [
                                o(ce, {
                                  links: [
                                    {
                                      href: { webPageId: `v0kaQiEgk` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `v0kaQiEgk` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `v0kaQiEgk` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    o(h, {
                                      breakpoint: N,
                                      overrides: {
                                        XzXDrGZ58: {
                                          y: (f?.y || 0) + 0 + 0 + 0 + 820 + 60 + 0 + 0 + 0,
                                        },
                                        YJf0H43De: {
                                          y: (f?.y || 0) + 0 + 0 + 0 + 824 + 120 + 0 + 0 + 0,
                                        },
                                      },
                                      children: o(b, {
                                        height: 22,
                                        y: (f?.y || 0) + 0 + 0 + 0 + 874 + 160 + 0 + 0 + 0,
                                        children: o(h, {
                                          breakpoint: N,
                                          overrides: { XzXDrGZ58: { whileHover: void 0 } },
                                          children: o(y, {
                                            className: `framer-vm7hrd-container`,
                                            nodeId: `VmWMl3sXB`,
                                            rendersWithMotion: !0,
                                            scopeId: `SB16CA7KQ`,
                                            whileHover: H,
                                            children: o(h, {
                                              breakpoint: N,
                                              overrides: {
                                                XzXDrGZ58: {
                                                  Boor76kiW: e[2],
                                                  variant: U(`EIQYCxQnz`),
                                                },
                                                YJf0H43De: { Boor76kiW: e[1] },
                                              },
                                              children: o(R, {
                                                Boor76kiW: e[0],
                                                EXOsvPYgG: `rgba(17, 17, 18, 0.6)`,
                                                h059AvfWL: `Go back to portfolio`,
                                                height: `100%`,
                                                id: `VmWMl3sXB`,
                                                layoutId: `VmWMl3sXB`,
                                                MT6iv4U7v: `rgba(17, 17, 18, 0.8)`,
                                                npv8N8VQy: `arrow-elbow-down-left`,
                                                variant: U(`kljxVVNnO`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                                o(m, {
                                  __fromCanvasComponent: !0,
                                  children: o(t, {
                                    children: o(`h2`, {
                                      className: `framer-styles-preset-k8v4ky`,
                                      "data-styles-preset": `ei1YNJ1Ze`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, rgb(17, 17, 18))`,
                                      },
                                      children: `More projects`,
                                    }),
                                  }),
                                  className: `framer-j77sjx`,
                                  "data-framer-name": `Liam Stark photoshoot`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-awzr4x`,
                              "data-framer-name": `Items`,
                              children: [
                                qe !== !1 &&
                                  o(`div`, {
                                    className: `framer-15eweru`,
                                    "data-framer-name": `Prev`,
                                    children: o(be, {
                                      children: o(Y, {
                                        query: J(),
                                        children: (e, n, r) =>
                                          o(ee, {
                                            children: e?.map(
                                              ({ GUYstJGWH: e, id: n }, r) => (
                                                (e ??= ``),
                                                o(
                                                  c,
                                                  {
                                                    id: `uW30pPmch-${n}`,
                                                    children: o(we.Provider, {
                                                      value: { GUYstJGWH: e },
                                                      children: o(v, {
                                                        href: {
                                                          pathVariables: { GUYstJGWH: je },
                                                          webPageId: `SB16CA7KQ`,
                                                        },
                                                        motionChild: !0,
                                                        nodeId: `mW6H4LkMr`,
                                                        openInNewTab: !1,
                                                        scopeId: `SB16CA7KQ`,
                                                        children: o(s.a, {
                                                          className: `framer-ois5v framer-8y0ys`,
                                                          "data-framer-cursor": `v4fkfb`,
                                                          children: a(`div`, {
                                                            className: `framer-firolt`,
                                                            "data-framer-name": `Image`,
                                                            children: [
                                                              a(`div`, {
                                                                className: `framer-g9mkem`,
                                                                "data-framer-name": `Text`,
                                                                children: [
                                                                  a(`div`, {
                                                                    className: `framer-dcaoki`,
                                                                    "data-framer-name": `Info`,
                                                                    children: [
                                                                      o(`div`, {
                                                                        className: `framer-1gy1ldv`,
                                                                        "data-border": !0,
                                                                        children: o(m, {
                                                                          __fromCanvasComponent: !0,
                                                                          children: o(t, {
                                                                            children: o(`p`, {
                                                                              className: `framer-styles-preset-17etv0n`,
                                                                              "data-styles-preset": `DXm77IWSL`,
                                                                              style: {
                                                                                "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                                              },
                                                                              children: `Content`,
                                                                            }),
                                                                          }),
                                                                          className: `framer-z5te2w`,
                                                                          "data-framer-name": `08 / 24`,
                                                                          fonts: [`Inter`],
                                                                          text: o(`time`, {
                                                                            dateTime: O,
                                                                            children: L,
                                                                          }),
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                      }),
                                                                      o(m, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: o(t, {
                                                                          children: o(`p`, {
                                                                            className: `framer-styles-preset-2n4ap`,
                                                                            "data-styles-preset": `Rcgs2l1OR`,
                                                                            style: {
                                                                              "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                                            },
                                                                            children: `Lifestyle`,
                                                                          }),
                                                                        }),
                                                                        className: `framer-1t4gi04`,
                                                                        fonts: [`Inter`],
                                                                        text: w,
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  o(m, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: o(t, {
                                                                      children: o(`h3`, {
                                                                        className: `framer-styles-preset-1hxmvg1`,
                                                                        "data-styles-preset": `LThA9CIiA`,
                                                                        children: `Delvisa`,
                                                                      }),
                                                                    }),
                                                                    className: `framer-6hneq4`,
                                                                    "data-framer-name": `Liam Stark photoshoot`,
                                                                    fonts: [`Inter`],
                                                                    text: Ne,
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                ],
                                                              }),
                                                              o(h, {
                                                                breakpoint: N,
                                                                overrides: {
                                                                  XzXDrGZ58: {
                                                                    background: {
                                                                      alt: ``,
                                                                      fit: `fill`,
                                                                      loading: u(
                                                                        (f?.y || 0) +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          820 +
                                                                          60 +
                                                                          148.72 +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          0
                                                                      ),
                                                                      sizes: `min(${f?.width || `100vw`} - 48px, 1848px)`,
                                                                      ...W(k),
                                                                    },
                                                                  },
                                                                  YJf0H43De: {
                                                                    background: {
                                                                      alt: ``,
                                                                      fit: `fill`,
                                                                      loading: u(
                                                                        (f?.y || 0) +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          824 +
                                                                          120 +
                                                                          180.72 +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          0
                                                                      ),
                                                                      sizes: `min(${f?.width || `100vw`} - 72px, 1848px)`,
                                                                      ...W(k),
                                                                    },
                                                                  },
                                                                },
                                                                children: o(z, {
                                                                  __framer__styleTransformEffectEnabled:
                                                                    !0,
                                                                  __framer__transformTargets: [
                                                                    {
                                                                      target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1.2,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 0,
                                                                      },
                                                                    },
                                                                    {
                                                                      target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 0,
                                                                      },
                                                                    },
                                                                  ],
                                                                  __framer__transformTrigger: `onInView`,
                                                                  __perspectiveFX: !1,
                                                                  __targetOpacity: 0.8,
                                                                  background: {
                                                                    alt: ``,
                                                                    fit: `fill`,
                                                                    loading: u(
                                                                      (f?.y || 0) +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        874 +
                                                                        160 +
                                                                        200.72 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        0
                                                                    ),
                                                                    sizes: `calc(min(${f?.width || `100vw`} - 72px, 1848px) * 0.75)`,
                                                                    ...W(k),
                                                                  },
                                                                  className: `framer-76g0pe`,
                                                                }),
                                                              }),
                                                              o(h, {
                                                                breakpoint: N,
                                                                overrides: {
                                                                  XzXDrGZ58: {
                                                                    width: `min(${f?.width || `100vw`} - 48px, 1848px)`,
                                                                    y:
                                                                      (f?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      820 +
                                                                      60 +
                                                                      148.72 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                  YJf0H43De: {
                                                                    width: `min(${f?.width || `100vw`} - 72px, 1848px)`,
                                                                    y:
                                                                      (f?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      824 +
                                                                      120 +
                                                                      180.72 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                },
                                                                children: o(b, {
                                                                  height: 750,
                                                                  width: `calc(min(${f?.width || `100vw`} - 72px, 1848px) * 0.75)`,
                                                                  y:
                                                                    (f?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    874 +
                                                                    160 +
                                                                    200.72 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                  children: o(y, {
                                                                    className: `framer-4voyr-container`,
                                                                    nodeId: `Y66iKsJRl`,
                                                                    scopeId: `SB16CA7KQ`,
                                                                    children: o(h, {
                                                                      breakpoint: N,
                                                                      overrides: {
                                                                        XzXDrGZ58: {
                                                                          m_eduoTBf: `16px`,
                                                                        },
                                                                        YJf0H43De: {
                                                                          m_eduoTBf: `32px`,
                                                                        },
                                                                      },
                                                                      children: o(E, {
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
                                                                        id: `Y66iKsJRl`,
                                                                        IWD_vykVW: {
                                                                          borderBottomWidth: 0,
                                                                          borderColor: `rgb(255, 255, 255)`,
                                                                          borderLeftWidth: 0,
                                                                          borderRightWidth: 1,
                                                                          borderStyle: `solid`,
                                                                          borderTopWidth: 1,
                                                                        },
                                                                        layoutId: `Y66iKsJRl`,
                                                                        m_eduoTBf: `36px`,
                                                                        OMz475883: {
                                                                          borderBottomWidth: 1,
                                                                          borderColor: `rgb(255, 255, 255)`,
                                                                          borderLeftWidth: 0,
                                                                          borderRightWidth: 1,
                                                                          borderStyle: `solid`,
                                                                          borderTopWidth: 0,
                                                                        },
                                                                        style: {
                                                                          height: `100%`,
                                                                          width: `100%`,
                                                                        },
                                                                        variant: U(`FW9uK5oRP`),
                                                                        width: `100%`,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            ],
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                  n
                                                )
                                              )
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                Ye !== !1 &&
                                  o(`div`, {
                                    className: `framer-m2lt36`,
                                    "data-framer-name": `Next`,
                                    children: o(be, {
                                      children: o(Y, {
                                        query: X(),
                                        children: (e, n, r) =>
                                          o(ee, {
                                            children: e?.map(
                                              ({ GUYstJGWH: e, id: n }, r) => (
                                                (e ??= ``),
                                                o(
                                                  c,
                                                  {
                                                    id: `XShpSSVxI-${n}`,
                                                    children: o(we.Provider, {
                                                      value: { GUYstJGWH: e },
                                                      children: o(v, {
                                                        href: {
                                                          pathVariables: { GUYstJGWH: A },
                                                          webPageId: `SB16CA7KQ`,
                                                        },
                                                        motionChild: !0,
                                                        nodeId: `WtQ6csgdn`,
                                                        openInNewTab: !1,
                                                        scopeId: `SB16CA7KQ`,
                                                        children: o(s.a, {
                                                          className: `framer-ro4zge framer-8y0ys`,
                                                          "data-framer-cursor": `v4fkfb`,
                                                          children: a(`div`, {
                                                            className: `framer-1okiycj`,
                                                            "data-framer-name": `Image`,
                                                            children: [
                                                              a(`div`, {
                                                                className: `framer-1p14zq1`,
                                                                "data-framer-name": `Text`,
                                                                children: [
                                                                  a(`div`, {
                                                                    className: `framer-1mzywg4`,
                                                                    "data-framer-name": `Info`,
                                                                    children: [
                                                                      o(`div`, {
                                                                        className: `framer-1x9jvzx`,
                                                                        "data-border": !0,
                                                                        children: o(m, {
                                                                          __fromCanvasComponent: !0,
                                                                          children: o(t, {
                                                                            children: o(`p`, {
                                                                              className: `framer-styles-preset-17etv0n`,
                                                                              "data-styles-preset": `DXm77IWSL`,
                                                                              style: {
                                                                                "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                                              },
                                                                              children: `Content`,
                                                                            }),
                                                                          }),
                                                                          className: `framer-15l7qme`,
                                                                          "data-framer-name": `08 / 24`,
                                                                          fonts: [`Inter`],
                                                                          text: o(`time`, {
                                                                            dateTime: j,
                                                                            children: Ze,
                                                                          }),
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                      }),
                                                                      o(m, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: o(t, {
                                                                          children: o(`p`, {
                                                                            className: `framer-styles-preset-2n4ap`,
                                                                            "data-styles-preset": `Rcgs2l1OR`,
                                                                            style: {
                                                                              "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                                            },
                                                                            children: `Lifestyle`,
                                                                          }),
                                                                        }),
                                                                        className: `framer-noc2no`,
                                                                        "data-framer-name": `Portrait photo`,
                                                                        fonts: [`Inter`],
                                                                        text: Le,
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  o(m, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: o(t, {
                                                                      children: o(`h3`, {
                                                                        className: `framer-styles-preset-1hxmvg1`,
                                                                        "data-styles-preset": `LThA9CIiA`,
                                                                        children: `Dempo Fair - 47`,
                                                                      }),
                                                                    }),
                                                                    className: `framer-1r73v7j`,
                                                                    "data-framer-name": `Liam Stark photoshoot`,
                                                                    fonts: [`Inter`],
                                                                    text: Ie,
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                ],
                                                              }),
                                                              o(h, {
                                                                breakpoint: N,
                                                                overrides: {
                                                                  XzXDrGZ58: {
                                                                    background: {
                                                                      alt: ``,
                                                                      fit: `fill`,
                                                                      loading: u(
                                                                        (f?.y || 0) +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          820 +
                                                                          60 +
                                                                          148.72 +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          0
                                                                      ),
                                                                      sizes: `min(${f?.width || `100vw`} - 48px, 1848px)`,
                                                                      ...W(M),
                                                                    },
                                                                  },
                                                                  YJf0H43De: {
                                                                    background: {
                                                                      alt: ``,
                                                                      fit: `fill`,
                                                                      loading: u(
                                                                        (f?.y || 0) +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          824 +
                                                                          120 +
                                                                          180.72 +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          0 +
                                                                          0
                                                                      ),
                                                                      sizes: `min(${f?.width || `100vw`} - 72px, 1848px)`,
                                                                      ...W(M),
                                                                    },
                                                                  },
                                                                },
                                                                children: o(z, {
                                                                  __framer__styleTransformEffectEnabled:
                                                                    !0,
                                                                  __framer__transformTargets: [
                                                                    {
                                                                      target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1.2,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 0,
                                                                      },
                                                                    },
                                                                    {
                                                                      target: {
                                                                        opacity: 1,
                                                                        rotate: 0,
                                                                        rotateX: 0,
                                                                        rotateY: 0,
                                                                        scale: 1,
                                                                        skewX: 0,
                                                                        skewY: 0,
                                                                        x: 0,
                                                                        y: 0,
                                                                      },
                                                                    },
                                                                  ],
                                                                  __framer__transformTrigger: `onInView`,
                                                                  __perspectiveFX: !1,
                                                                  __targetOpacity: 0.8,
                                                                  background: {
                                                                    alt: ``,
                                                                    fit: `fill`,
                                                                    loading: u(
                                                                      (f?.y || 0) +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        874 +
                                                                        160 +
                                                                        200.72 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        0 +
                                                                        0
                                                                    ),
                                                                    sizes: `calc(min(${f?.width || `100vw`} - 72px, 1848px) * 0.75)`,
                                                                    ...W(M),
                                                                  },
                                                                  className: `framer-i8stlo`,
                                                                }),
                                                              }),
                                                              o(h, {
                                                                breakpoint: N,
                                                                overrides: {
                                                                  XzXDrGZ58: {
                                                                    width: `min(${f?.width || `100vw`} - 48px, 1848px)`,
                                                                    y:
                                                                      (f?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      820 +
                                                                      60 +
                                                                      148.72 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                  YJf0H43De: {
                                                                    width: `min(${f?.width || `100vw`} - 72px, 1848px)`,
                                                                    y:
                                                                      (f?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      824 +
                                                                      120 +
                                                                      180.72 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      0,
                                                                  },
                                                                },
                                                                children: o(b, {
                                                                  height: 750,
                                                                  width: `calc(min(${f?.width || `100vw`} - 72px, 1848px) * 0.75)`,
                                                                  y:
                                                                    (f?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    874 +
                                                                    160 +
                                                                    200.72 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    0,
                                                                  children: o(y, {
                                                                    className: `framer-n0li65-container`,
                                                                    nodeId: `nZXBygUVS`,
                                                                    scopeId: `SB16CA7KQ`,
                                                                    children: o(h, {
                                                                      breakpoint: N,
                                                                      overrides: {
                                                                        XzXDrGZ58: {
                                                                          m_eduoTBf: `16px`,
                                                                        },
                                                                        YJf0H43De: {
                                                                          m_eduoTBf: `32px`,
                                                                        },
                                                                      },
                                                                      children: o(E, {
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
                                                                        id: `nZXBygUVS`,
                                                                        IWD_vykVW: {
                                                                          borderBottomWidth: 0,
                                                                          borderColor: `rgb(255, 255, 255)`,
                                                                          borderLeftWidth: 0,
                                                                          borderRightWidth: 1,
                                                                          borderStyle: `solid`,
                                                                          borderTopWidth: 1,
                                                                        },
                                                                        layoutId: `nZXBygUVS`,
                                                                        m_eduoTBf: `36px`,
                                                                        OMz475883: {
                                                                          borderBottomWidth: 1,
                                                                          borderColor: `rgb(255, 255, 255)`,
                                                                          borderLeftWidth: 0,
                                                                          borderRightWidth: 1,
                                                                          borderStyle: `solid`,
                                                                          borderTopWidth: 0,
                                                                        },
                                                                        style: {
                                                                          height: `100%`,
                                                                          width: `100%`,
                                                                        },
                                                                        variant: U(`FW9uK5oRP`),
                                                                        width: `100%`,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            ],
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                  n
                                                )
                                              )
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                              ],
                            }),
                            o(h, {
                              breakpoint: N,
                              overrides: {
                                XzXDrGZ58: {
                                  height: 5350.72,
                                  y: (f?.y || 0) + 0 + 0 + 0 + 820 + -5116,
                                },
                                YJf0H43De: {
                                  height: 5500.72,
                                  y: (f?.y || 0) + 0 + 0 + 0 + 824 + -5116,
                                },
                              },
                              children: o(b, {
                                height: 5600.72,
                                width: f?.width || `100vw`,
                                y: (f?.y || 0) + 0 + 0 + 0 + 874 + -5116,
                                children: o(y, {
                                  className: `framer-1tocevy-container`,
                                  nodeId: `j9sDxhyLk`,
                                  scopeId: `SB16CA7KQ`,
                                  children: o(h, {
                                    breakpoint: N,
                                    overrides: {
                                      XzXDrGZ58: {
                                        ieZNkwrrK: `0px 24px 0px 24px`,
                                        JLnFVd4lc: !1,
                                        SZjrZZXey: !1,
                                      },
                                      YJf0H43De: { ieZNkwrrK: `0px 32px 0px 32px` },
                                    },
                                    children: o(D, {
                                      gbAjZwZif: !0,
                                      height: `100%`,
                                      HIadHX3E2: `rgba(0, 0, 0, 0.12)`,
                                      id: `j9sDxhyLk`,
                                      ieZNkwrrK: `0px 36px 0px 36px`,
                                      JLnFVd4lc: !0,
                                      layoutId: `j9sDxhyLk`,
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
                        o(h, {
                          breakpoint: N,
                          overrides: {
                            XzXDrGZ58: { height: 1054.72 },
                            YJf0H43De: { height: 1208.72 },
                          },
                          children: o(b, {
                            height: 1358.72,
                            width: f?.width || `100vw`,
                            y: (f?.y || 0) + 0 + 0 + 0,
                            children: o(y, {
                              className: `framer-1uq44jb-container`,
                              "data-framer-name": `Grid`,
                              name: `Grid`,
                              nodeId: `owTLDUg20`,
                              scopeId: `SB16CA7KQ`,
                              children: o(h, {
                                breakpoint: N,
                                overrides: {
                                  XzXDrGZ58: { JLnFVd4lc: !1, SZjrZZXey: !1 },
                                  YJf0H43De: { ieZNkwrrK: `0px 32px 0px 32px` },
                                },
                                children: o(D, {
                                  gbAjZwZif: !0,
                                  height: `100%`,
                                  HIadHX3E2: `rgba(0, 0, 0, 0.12)`,
                                  id: `owTLDUg20`,
                                  ieZNkwrrK: `0px 36px 0px 36px`,
                                  JLnFVd4lc: !0,
                                  layoutId: `owTLDUg20`,
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
                    o(b, {
                      children: o(y, {
                        className: `framer-1c2yz0p-container`,
                        "data-framer-name": `Smooth scroll`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: F,
                        name: `Smooth scroll`,
                        nodeId: `KfPrDKbkl`,
                        scopeId: `SB16CA7KQ`,
                        children: o(Me, {
                          height: `100%`,
                          id: `KfPrDKbkl`,
                          infinite: !1,
                          intensity: 8,
                          layoutId: `KfPrDKbkl`,
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
        `.framer-C4Pu8.framer-8y0ys, .framer-C4Pu8 .framer-8y0ys { display: block; }`,
        `.framer-C4Pu8.framer-dbrefx { align-content: center; align-items: center; background-color: #f1f1f1; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-C4Pu8 .framer-1dedjcu { align-content: center; align-items: center; background-color: var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, #f1f1f1); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C4Pu8 .framer-e9nu5a { align-content: flex-end; align-items: flex-end; background-color: #000000; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 85vh; justify-content: center; overflow: hidden; padding: 0px 36px 0px 36px; position: sticky; top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-C4Pu8 .framer-1t8bts { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1848px; overflow: visible; padding: 0px 19px 80px 0px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-C4Pu8 .framer-1i83sc1 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 34px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-C4Pu8 .framer-1ryk7gm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C4Pu8 .framer-12uecny, .framer-C4Pu8 .framer-dcaoki, .framer-C4Pu8 .framer-1mzywg4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-C4Pu8 .framer-1y8s8ph { --border-bottom-width: 0px; --border-color: rgba(255, 255, 255, 0.25); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 30px 0px 0px; position: relative; width: min-content; }`,
        `.framer-C4Pu8 .framer-1fa2zt2, .framer-C4Pu8 .framer-10hahr1, .framer-C4Pu8 .framer-l04ym8, .framer-C4Pu8 .framer-u65beu, .framer-C4Pu8 .framer-z5te2w, .framer-C4Pu8 .framer-1t4gi04, .framer-C4Pu8 .framer-15l7qme, .framer-C4Pu8 .framer-noc2no { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-C4Pu8 .framer-ejtcsd, .framer-C4Pu8 .framer-j77sjx { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-C4Pu8 .framer-bzy2k0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-C4Pu8 .framer-1ajav8t { aspect-ratio: 1 / 1; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; flex: none; height: auto; position: relative; width: 43px; }`,
        `.framer-C4Pu8 .framer-ix4t62 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-C4Pu8 .framer-1hi6ts2-container, .framer-C4Pu8 .framer-vm7hrd-container { flex: none; height: auto; opacity: 0.9; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-C4Pu8 .framer-6207cq-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(49.94110718492346% - 100% / 2); width: 100%; z-index: 1; }`,
        `.framer-C4Pu8 .framer-921xya-container, .framer-C4Pu8 .framer-dlyqnl-container, .framer-C4Pu8 .framer-4voyr-container, .framer-C4Pu8 .framer-n0li65-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-C4Pu8 .framer-19370nq { -webkit-mask: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.9) 16.847480292792795%, rgba(0, 0, 0, 0.9) 57.12718186936937%, rgba(0, 0, 0, 0.4) 100%) add; flex: none; height: 100%; left: 0px; mask: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.9) 16.847480292792795%, rgba(0, 0, 0, 0.9) 57.12718186936937%, rgba(0, 0, 0, 0.4) 100%) add; position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-C4Pu8 .framer-1epic4n { align-content: center; align-items: center; background-color: var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, #f1f1f1); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 24px 36px 0px 36px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-C4Pu8 .framer-18sm12y { align-content: flex-start; align-items: flex-start; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1848px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-C4Pu8 .framer-tvfzfr, .framer-C4Pu8 .framer-1epdt3f { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: sticky; top: 24px; width: 1px; z-index: 1; }`,
        `.framer-C4Pu8 .framer-tnl69l, .framer-C4Pu8 .framer-1y836sw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C4Pu8 .framer-y08lyk, .framer-C4Pu8 .framer-1efxo77 { cursor: pointer; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-C4Pu8 .framer-a3x6r7-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
        `.framer-C4Pu8 .framer-l77obk { align-content: center; align-items: center; background-color: var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, #f1f1f1); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 160px 36px 124px 36px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-C4Pu8 .framer-1tzrufi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-C4Pu8 .framer-awzr4x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-C4Pu8 .framer-15eweru, .framer-C4Pu8 .framer-m2lt36 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; max-width: 1848px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-C4Pu8 .framer-ois5v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 0px 36px 0px; position: relative; text-decoration: none; width: 75%; }`,
        `.framer-C4Pu8 .framer-firolt, .framer-C4Pu8 .framer-1okiycj { align-content: center; align-items: center; aspect-ratio: 1.504 / 1; background-color: var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, #111112); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 0; }`,
        `.framer-C4Pu8 .framer-g9mkem, .framer-C4Pu8 .framer-1p14zq1 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-C4Pu8 .framer-1gy1ldv, .framer-C4Pu8 .framer-1x9jvzx { --border-bottom-width: 0px; --border-color: rgba(255, 255, 255, 0.22); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 30px 0px 0px; position: relative; width: min-content; }`,
        `.framer-C4Pu8 .framer-6hneq4, .framer-C4Pu8 .framer-1r73v7j { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-C4Pu8 .framer-76g0pe, .framer-C4Pu8 .framer-i8stlo { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); opacity: 0.8; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`,
        `.framer-C4Pu8 .framer-ro4zge { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 75%; }`,
        `.framer-C4Pu8 .framer-1tocevy-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: -5116px; z-index: 0; }`,
        `.framer-C4Pu8 .framer-1uq44jb-container { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 0; }`,
        `.framer-C4Pu8 .framer-1c2yz0p-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...Le,
        ...O,
        ...Ue,
        ...T,
        ...N,
        ...qe,
        `.framer-C4Pu8[data-border="true"]::after, .framer-C4Pu8 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-C4Pu8.framer-dbrefx { width: 810px; } .framer-C4Pu8 .framer-e9nu5a { height: 80vh; padding: 0px 32px 0px 32px; } .framer-C4Pu8 .framer-1t8bts { padding: 0px 19px 74px 0px; } .framer-C4Pu8 .framer-1i83sc1 { gap: 30px; } .framer-C4Pu8 .framer-1epic4n { padding: 24px 32px 0px 32px; } .framer-C4Pu8 .framer-18sm12y, .framer-C4Pu8 .framer-tvfzfr, .framer-C4Pu8 .framer-1epdt3f { gap: 20px; } .framer-C4Pu8 .framer-l77obk { gap: 60px; padding: 120px 36px 84px 36px; } .framer-C4Pu8 .framer-ois5v, .framer-C4Pu8 .framer-ro4zge { width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-C4Pu8.framer-dbrefx { width: 390px; } .framer-C4Pu8 .framer-e9nu5a { height: 80vh; padding: 0px 24px 0px 24px; } .framer-C4Pu8 .framer-1t8bts { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 50px; padding: 0px 19px 54px 0px; } .framer-C4Pu8 .framer-1i83sc1 { flex: none; gap: 26px; order: 1; width: 100%; } .framer-C4Pu8 .framer-1ryk7gm, .framer-C4Pu8 .framer-1tzrufi { gap: 12px; } .framer-C4Pu8 .framer-bzy2k0, .framer-C4Pu8 .framer-vm7hrd-container { will-change: unset; } .framer-C4Pu8 .framer-1hi6ts2-container { order: 0; } .framer-C4Pu8 .framer-19370nq { -webkit-mask: linear-gradient(180deg, rgba(0, 0, 0, 0.72) 0%, rgb(0, 0, 0) 18%, rgb(0, 0, 0) 61%, rgba(0, 0, 0, 0.4) 100%) add; mask: linear-gradient(180deg, rgba(0, 0, 0, 0.72) 0%, rgb(0, 0, 0) 18%, rgb(0, 0, 0) 61%, rgba(0, 0, 0, 0.4) 100%) add; } .framer-C4Pu8 .framer-1epic4n { padding: 10px 10px 0px 10px; } .framer-C4Pu8 .framer-18sm12y { flex-direction: column; gap: 10px; } .framer-C4Pu8 .framer-tvfzfr, .framer-C4Pu8 .framer-1epdt3f { flex: none; gap: 10px; position: relative; top: unset; width: 100%; } .framer-C4Pu8 .framer-tnl69l, .framer-C4Pu8 .framer-1y836sw { gap: 10px; } .framer-C4Pu8 .framer-l77obk { gap: 36px; padding: 60px 24px 26px 24px; } .framer-C4Pu8 .framer-ois5v { flex-direction: column; gap: 34px; padding: 0px 0px 24px 0px; width: 100%; } .framer-C4Pu8 .framer-firolt, .framer-C4Pu8 .framer-1okiycj { border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; order: 0; padding: 30px; } .framer-C4Pu8 .framer-g9mkem, .framer-C4Pu8 .framer-1p14zq1 { gap: 16px; } .framer-C4Pu8 .framer-dcaoki, .framer-C4Pu8 .framer-1mzywg4 { gap: 20px; } .framer-C4Pu8 .framer-1gy1ldv, .framer-C4Pu8 .framer-1x9jvzx { padding: 0px 20px 0px 0px; } .framer-C4Pu8 .framer-ro4zge { width: 100%; }}`,
      ],
      `framer-C4Pu8`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 6224, width: 1200 }),
    _e(
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
        ...Qe,
        ...$e,
        ...et,
        ...tt,
        ...it,
        ...at,
        ..._(j),
        ..._(k),
        ..._(We),
        ..._(De),
        ..._(Ve),
        ..._(L),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = x.get(J(), n),
          i = x.get(X(), n);
        return Promise.allSettled([
          x.get(Q(xe(t.pathVariables, `SB16CA7KQ`)), n).preload(),
          r.preload(),
          i.preload(),
          d(R, {}, t),
          d(E, {}, t),
          d(D, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => d(E, {}, t)));
          })(),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => d(E, {}, t)));
          })(),
        ]);
      },
    }),
    (xt = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerSB16CA7KQ`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `false`,
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `6224`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"YJf0H43De":{"layout":["fixed","auto"]},"XzXDrGZ58":{"layout":["fixed","auto"]}}}`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { xt as __FramerMetadata__, $ as default, st as queryParamNames };
//# sourceMappingURL=s-G5c-XTXXlfUOdscSEN5UzPMSmGoZdVn08eruXVS4s.2il0G4TR.mjs.map
