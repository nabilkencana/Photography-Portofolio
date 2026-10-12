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
import { a as te, j as d, r as ne, t as f } from "./motion.CQsVbJu1.mjs";
import {
  At as p,
  Ct as re,
  Dt as ie,
  F as m,
  Ft as h,
  G as g,
  It as _,
  L as v,
  Lt as y,
  M as ae,
  Nt as b,
  O as x,
  S,
  St as C,
  Tt as oe,
  U as w,
  W as T,
  Z as E,
  _ as se,
  _t as ce,
  a as D,
  bt as O,
  d as le,
  i as k,
  it as ue,
  j as A,
  jt as de,
  l as fe,
  mt as pe,
  n as me,
  o as j,
  p as M,
  pt as he,
  u as ge,
  vt as _e,
  wt as ve,
  x as ye,
  yt as be,
} from "./framer.B3F8DTpJ.mjs";
import {
  a as xe,
  c as N,
  i as P,
  n as F,
  o as I,
  r as L,
  s as R,
  t as Se,
} from "./rP_ujUt1v.Bw8c189i.mjs";
import { i as Ce, n as we, r as Te, t as Ee } from "./Y4eex_aGW.BfyhXmji.mjs";
import { n as De, t as z } from "./jrBwqGEOh.8FmayInh.mjs";
import { a as B, i as Oe, o as ke, r as V } from "./shared-lib.BczJtw9W.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./Rcgs2l1OR.sBtHcz0w.mjs";
import { n as Pe, t as H } from "./Rt3Sh5gwq.Cy2nCw4B.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./DXm77IWSL.RE7umW_E.mjs";
import { a as ze, r as Be } from "./r4GnmA_r2.8mbnORs-.mjs";
import { n as Ve, t as U } from "./O_XoZ3FcZ.ctzfLPh0.mjs";
import { i as He, n as Ue, r as We, t as Ge } from "./E952Zd3mb.BxttGTN2.mjs";
import { n as W, t as Ke } from "./qP9bHc6_m.Ce8tblfm.mjs";
import { i as qe, n as Je, r as Ye, t as Xe } from "./LThA9CIiA.DczHfjR2.mjs";
import Ze, { t as Qe } from "./zSeCYFLhQnJZZ37judcZNLlFDQfoLXhzk_kyCrsjXAA.8cRvBhkP.mjs";
var G,
  K,
  $e,
  et,
  tt,
  nt,
  q,
  rt = e(() => {
    (u(),
      E(),
      r(),
      (G = `var(--framer-icon-mask)`),
      (K = l(function (e, t) {
        return c(`svg`, { ...e, ref: t, children: e.children });
      })),
      ($e = d.create(K)),
      (et = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? c($e, { ...a, layoutId: r, ref: t, children: i })
          : c(`svg`, { ...a, ref: t, children: i });
      })),
      (tt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 5.25 L 9 10.5 L 18 5.25 L 9 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="10.5px" id="lYFPhWKGp" transform="translate(3 2.25)" width="18px"/><path d="M 0 0 L 9 5.25 L 18 0" fill="transparent" height="5.25px" id="tjxbvx4B_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 16.5)" width="18px"/><path d="M 0 0 L 9 5.25 L 18 0" fill="transparent" height="5.25px" id="jkFbsHmSE" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 12)" width="18px"/><path d="M 0 5.25 L 9 10.5 L 18 5.25 L 9 0 Z" fill="transparent" height="10.5px" id="g8tAjyTpu" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 2.25)" width="18px"/></svg>`),
      (nt = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (q = b(
        l(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: l,
              ...u
            } = nt(e),
            ee = p(`3076148817`, tt);
          return c(et, {
            ...u,
            className: m(`framer-qlGUT`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": l, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: c(`use`, { href: ee }),
          });
        }),
        [
          `.framer-qlGUT { -webkit-mask: ${G}; aspect-ratio: 1; display: block; mask: ${G}; width: 24px; }`,
        ],
        `framer-qlGUT`
      )),
      (q.displayName = `Stack`),
      ae(q, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: j.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: j.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: j.Number,
        },
      }));
  }),
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
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  J,
  Y,
  wt,
  Tt,
  X,
  Et,
  Z,
  Q,
  Dt,
  Ot,
  $,
  kt;
e(() => {
  (u(),
    E(),
    f(),
    r(),
    rt(),
    Oe(),
    Ve(),
    De(),
    ke(),
    Pe(),
    Ke(),
    Be(),
    Fe(),
    He(),
    qe(),
    N(),
    Ae(),
    P(),
    Ce(),
    Qe(),
    (it = h(M)),
    (at = w(z)),
    (ot = h(d.a)),
    (st = w(q)),
    (ct = w(U)),
    (lt = _(D)),
    (ut = w(B)),
    (dt = y(d.main)),
    (ft = w(V)),
    (pt = w(H)),
    (mt = {
      g0bK1hl4M: `(min-width: 810px) and (max-width: 1199.98px)`,
      kCNS37sgX: `(max-width: 809.98px)`,
      vRLDpaIEm: `(min-width: 1200px)`,
    }),
    (ht = [`title`, `category`]),
    (gt = `framer-uU1vE`),
    (_t = {
      g0bK1hl4M: `framer-v-362u2`,
      kCNS37sgX: `framer-v-1m3y84x`,
      vRLDpaIEm: `framer-v-183qutw`,
    }),
    (vt = (e, t, n) => (e && t ? `position` : n)),
    (yt = {
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
    (bt = {
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
    (xt = (e, t, n) => {
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
    (St = { dateStyle: `medium`, timeZone: `UTC` }),
    (Ct = (e, t) => xt(e, St, t)),
    (J = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Y = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (wt = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (Tt = (e, t, n) =>
      e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
    (X = (e, t) => ({
      from: {
        constraint: {
          left: { collection: `aonfcMOK9`, name: `eu9GOakWf`, type: `Identifier` },
          operator: `==`,
          right: { collection: `eu9GOakWf`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `aonfcMOK9`, data: ze, type: `Collection` },
        right: { alias: `eu9GOakWf`, data: W, type: `Collection` },
        type: `LeftJoin`,
      },
      orderBy: [
        { collection: `aonfcMOK9`, direction: `desc`, name: `e_oqHADQd`, type: `Identifier` },
      ],
      select: [
        { collection: `aonfcMOK9`, name: `GUYstJGWH`, type: `Identifier` },
        { collection: `aonfcMOK9`, name: `e_oqHADQd`, type: `Identifier` },
        {
          alias: `eu9GOakWf.ZEbwV0LO1`,
          collection: `eu9GOakWf`,
          name: `ZEbwV0LO1`,
          type: `Identifier`,
        },
        { collection: `aonfcMOK9`, name: `TWzcXE82P`, type: `Identifier` },
        { collection: `aonfcMOK9`, name: `l7MvKqPuQ`, type: `Identifier` },
        { collection: `aonfcMOK9`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: {
          left: {
            left: { type: `LiteralValue`, value: e },
            operator: `==`,
            right: { type: `LiteralValue`, value: null },
            type: `BinaryOperation`,
          },
          operator: `or`,
          right: {
            arguments: [
              { collection: `aonfcMOK9`, name: `TWzcXE82P`, type: `Identifier` },
              { type: `LiteralValue`, value: e },
            ],
            functionName: `CONTAINS`,
            type: `FunctionCall`,
          },
          type: `BinaryOperation`,
        },
        operator: `and`,
        right: {
          left: {
            left: { type: `LiteralValue`, value: t },
            operator: `==`,
            right: { type: `LiteralValue`, value: null },
            type: `BinaryOperation`,
          },
          operator: `or`,
          right: {
            left: { collection: `eu9GOakWf`, name: `id`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: t },
            type: `BinaryOperation`,
          },
          type: `BinaryOperation`,
        },
        type: `BinaryOperation`,
      },
    })),
    (Et = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = C(e, t, `aonfcMOK9`);
      return n(ie(r), i, a);
    }),
    (Z = { Desktop: `vRLDpaIEm`, Phone: `kCNS37sgX`, Tablet: `g0bK1hl4M` }),
    (Q = ({ value: e }) =>
      O()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Dt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `vRLDpaIEm`,
    })),
    (Ot = { component: H, variant: `emBAu_3nQ` }),
    ($ = b(
      l(function (e, r) {
        let l = i(null),
          u = r ?? l,
          f = ee(),
          { activeLocale: p, setLocale: ie } = ve(),
          h = pe(),
          [_, v] = de({ optional: !0, parameterName: `title` }),
          [y, ae] = he({ collectionId: `qP9bHc6_m`, optional: !0, parameterName: `category` }),
          { style: b, className: C, layoutId: w, variant: T, ...E } = Dt(e);
        oe(n(() => Ze({}, p), [p]));
        let [O, ue] = be(T, mt, !1),
          A = m(gt, Ge, Se, Re, Ne, Xe, Ee, xe),
          j = o(le)?.isLayoutTemplate,
          M = !!o(te)?.transition?.layout,
          N = vt(j, M),
          [P, F, I] = _e({
            allItemsLabel: `All categories`,
            collectionData: W,
            isOptional: !0,
            setValue: ae,
            slugId: `ASZI4swax`,
            titleId: `ZEbwV0LO1`,
            value: y,
            variableType: `collectionreference`,
          }),
          L = re(),
          R = i(null);
        return (
          ce({ v4fkfb: Ot }),
          c(le.Provider, {
            value: {
              activeVariantId: O,
              humanReadableVariantMap: Z,
              primaryVariantId: `vRLDpaIEm`,
              variantClassNames: _t,
            },
            children: s(ne, {
              id: w ?? f,
              children: [
                c(Q, { value: `html body { background: rgb(241, 241, 241); }` }),
                s(d.div, {
                  ...E,
                  className: m(A, `framer-183qutw`, C),
                  ref: u,
                  style: { ...b },
                  children: [
                    s(dt, {
                      animate: yt,
                      className: `framer-1x6dr2f`,
                      "data-framer-appear-id": `1x6dr2f`,
                      "data-framer-name": `Main`,
                      initial: bt,
                      layout: N,
                      optimized: !0,
                      children: [
                        s(`section`, {
                          className: `framer-1wforhx`,
                          "data-framer-name": `Container`,
                          children: [
                            s(`div`, {
                              className: `framer-14bio0p`,
                              "data-framer-name": `Top`,
                              children: [
                                s(`div`, {
                                  className: `framer-d6amgs`,
                                  "data-framer-name": `Heading`,
                                  children: [
                                    c(x, {
                                      __fromCanvasComponent: !0,
                                      children: c(t, {
                                        children: c(`h1`, {
                                          className: `framer-styles-preset-13zczbi`,
                                          "data-styles-preset": `E952Zd3mb`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, rgb(17, 17, 18))`,
                                          },
                                          children: `A showcase of captured moments`,
                                        }),
                                      }),
                                      className: `framer-10ayamd`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    c(x, {
                                      __fromCanvasComponent: !0,
                                      children: c(t, {
                                        children: c(`p`, {
                                          className: `framer-styles-preset-8nqfsa`,
                                          "data-styles-preset": `rP_ujUt1v`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `rgba(17, 17, 18, 0.6)`,
                                          },
                                          children: `Exploring stories through the lens, one moment at a time.`,
                                        }),
                                      }),
                                      className: `framer-cz8f0m`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                s(`div`, {
                                  className: `framer-1o3u0z4`,
                                  "data-framer-name": `Filter`,
                                  children: [
                                    c(S, {
                                      breakpoint: O,
                                      overrides: {
                                        g0bK1hl4M: { inputName: `g0bK1hl4MIFGh2Koiu` },
                                        kCNS37sgX: { inputName: `kCNS37sgXIFGh2Koiu` },
                                      },
                                      children: c(fe, {
                                        className: `framer-cwl3sj`,
                                        inputName: `IFGh2Koiu`,
                                        onChange: (e) => v(e.target.value || void 0),
                                        onClear: () => v(void 0),
                                        placeholder: `Search…`,
                                        type: `text`,
                                        value: _ ?? ``,
                                      }),
                                    }),
                                    c(S, {
                                      breakpoint: O,
                                      overrides: {
                                        g0bK1hl4M: { inputName: `g0bK1hl4MQTanya6mv` },
                                        kCNS37sgX: { inputName: `kCNS37sgXQTanya6mv` },
                                      },
                                      children: c(ge, {
                                        className: `framer-k0gr2p`,
                                        inputName: `QTanya6mv`,
                                        onChange: I,
                                        selectOptions: F,
                                        value: P,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1k89e8c`,
                              "data-framer-name": `Portfolios`,
                              children: c(me, {
                                children: c(Et, {
                                  pageSize: 3,
                                  query: X(_, y),
                                  children: (e, n, r) => {
                                    let i = e?.length ?? 0,
                                      o = wt(i, 0);
                                    return s(a, {
                                      children: [
                                        e?.map(
                                          (
                                            {
                                              "eu9GOakWf.ZEbwV0LO1": e,
                                              e_oqHADQd: n,
                                              GUYstJGWH: r,
                                              id: i,
                                              l7MvKqPuQ: a,
                                              TWzcXE82P: o,
                                            },
                                            l
                                          ) => {
                                            ((r ??= ``), (e ??= ``), (o ??= ``));
if (o === 'Morning field trip' || r === 'field-trip' || r === 'delvisa') { o = 'Delvisa'; }
else if (o === 'Posing on a chair' || r === 'posing-on-a-chair' || r === 'moklet-serve-man-2') { o = 'Moklet Serve - MAN 2'; }
else if (o === 'Annie and her dog' || r === 'annie-and-her-dog' || r === 'dempo-fair-47') { o = 'Dempo Fair - 47'; }
else if (o === 'Bride and Groom' || r === 'bride-and-groom' || r === 'google-devfest-2025') { o = 'Google DevFest 2025'; }
                                            let u = Ct(n, L);
                                            return c(
                                              ne,
                                              {
                                                id: `aonfcMOK9-${i}`,
                                                children: c(ye.Provider, {
                                                  value: { GUYstJGWH: r },
                                                  children: c(se, {
                                                    href: {
                                                      pathVariables: { GUYstJGWH: r },
                                                      webPageId: `SB16CA7KQ`,
                                                    },
                                                    motionChild: !0,
                                                    nodeId: `RdXzo5ZT1`,
                                                    scopeId: `v0kaQiEgk`,
                                                    children: c(ot, {
                                                      __framer__spring: {
                                                        damping: 60,
                                                        delay: 0,
                                                        duration: 0.3,
                                                        ease: [0.44, 0, 0.56, 1],
                                                        mass: 1,
                                                        stagger: 0,
                                                        stiffness: 500,
                                                        type: `spring`,
                                                      },
                                                      __framer__styleTransformEffectEnabled: !0,
                                                      __framer__transformTargets: [
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
                                                      __targetOpacity: 1,
                                                      className: `framer-eraxha framer-we78u3`,
                                                      "data-framer-cursor": `v4fkfb`,
                                                      children: s(`div`, {
                                                        className: `framer-hk9rfl`,
                                                        "data-framer-name": `Image`,
                                                        children: [
                                                          s(`div`, {
                                                            className: `framer-1ggr08p`,
                                                            "data-framer-name": `Text`,
                                                            children: [
                                                              s(`div`, {
                                                                className: `framer-esvltp`,
                                                                "data-framer-name": `Info`,
                                                                children: [
                                                                  c(`div`, {
                                                                    className: `framer-1bk37sh`,
                                                                    "data-border": !0,
                                                                    children: c(x, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: c(t, {
                                                                        children: c(`p`, {
                                                                          className: `framer-styles-preset-17etv0n`,
                                                                          "data-styles-preset": `DXm77IWSL`,
                                                                          style: {
                                                                            "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                                          },
                                                                          children: `Oct 10, 2024`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-1xk6mq1`,
                                                                      "data-framer-name": `08 / 24`,
                                                                      fonts: [`Inter`],
                                                                      text: c(`time`, {
                                                                        dateTime: n,
                                                                        children: u,
                                                                      }),
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                  }),
                                                                  c(x, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: c(t, {
                                                                      children: c(`p`, {
                                                                        className: `framer-styles-preset-2n4ap`,
                                                                        "data-styles-preset": `Rcgs2l1OR`,
                                                                        style: {
                                                                          "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                                        },
                                                                        children: `Lifestyle`,
                                                                      }),
                                                                    }),
                                                                    className: `framer-qijc1f`,
                                                                    "data-framer-name": `Portrait photo`,
                                                                    fonts: [`Inter`],
                                                                    text: e,
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                ],
                                                              }),
                                                              c(x, {
                                                                __fromCanvasComponent: !0,
                                                                children: c(t, {
                                                                  children: c(`h3`, {
                                                                    className: `framer-styles-preset-1hxmvg1`,
                                                                    "data-styles-preset": `LThA9CIiA`,
                                                                    children: `Delvisa`,
                                                                  }),
                                                                }),
                                                                className: `framer-yrdqzb`,
                                                                "data-framer-name": `Liam Stark photoshoot`,
                                                                fonts: [`Inter`],
                                                                text: o,
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            ],
                                                          }),
                                                          c(S, {
                                                            breakpoint: O,
                                                            overrides: {
                                                              g0bK1hl4M: {
                                                                background: {
                                                                  alt: ``,
                                                                  fit: `fill`,
                                                                  loading: g(
                                                                    (h?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      214 +
                                                                      0 +
                                                                      0 +
                                                                      456.32 +
                                                                      0 +
                                                                      216 +
                                                                      0 +
                                                                      0
                                                                  ),
                                                                  sizes: `min(${h?.width || `100vw`} - 64px, 1848px)`,
                                                                  ...J(a),
                                                                  positionX: `center`,
                                                                  positionY: `center`,
                                                                },
                                                              },
                                                              kCNS37sgX: {
                                                                background: {
                                                                  alt: ``,
                                                                  fit: `fill`,
                                                                  loading: g(
                                                                    (h?.y || 0) +
                                                                      0 +
                                                                      0 +
                                                                      114 +
                                                                      0 +
                                                                      0 +
                                                                      424.32 +
                                                                      0 +
                                                                      142 +
                                                                      0 +
                                                                      0
                                                                  ),
                                                                  sizes: `min(${h?.width || `100vw`} - 48px, 1848px)`,
                                                                  ...J(a),
                                                                  positionX: `center`,
                                                                  positionY: `center`,
                                                                },
                                                              },
                                                            },
                                                            children: c(it, {
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
                                                                loading: g(
                                                                  (h?.y || 0) +
                                                                    0 +
                                                                    0 +
                                                                    254 +
                                                                    0 +
                                                                    0 +
                                                                    524.32 +
                                                                    0 +
                                                                    268 +
                                                                    0 +
                                                                    0
                                                                ),
                                                                sizes: `calc(min(${h?.width || `100vw`} - 72px, 1848px) * 0.75)`,
                                                                ...J(a),
                                                                positionX: `center`,
                                                                positionY: `center`,
                                                              },
                                                              className: `framer-1rg9mwi`,
                                                            }),
                                                          }),
                                                          c(S, {
                                                            breakpoint: O,
                                                            overrides: {
                                                              g0bK1hl4M: {
                                                                width: `min(${h?.width || `100vw`} - 64px, 1848px)`,
                                                                y:
                                                                  (h?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  214 +
                                                                  0 +
                                                                  0 +
                                                                  456.32 +
                                                                  0 +
                                                                  216 +
                                                                  0 +
                                                                  0,
                                                              },
                                                              kCNS37sgX: {
                                                                width: `min(${h?.width || `100vw`} - 48px, 1848px)`,
                                                                y:
                                                                  (h?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  114 +
                                                                  0 +
                                                                  0 +
                                                                  424.32 +
                                                                  0 +
                                                                  142 +
                                                                  0 +
                                                                  0,
                                                              },
                                                            },
                                                            children: c(k, {
                                                              height: 750,
                                                              width: `calc(min(${h?.width || `100vw`} - 72px, 1848px) * 0.75)`,
                                                              y:
                                                                (h?.y || 0) +
                                                                0 +
                                                                0 +
                                                                254 +
                                                                0 +
                                                                0 +
                                                                524.32 +
                                                                0 +
                                                                268 +
                                                                0 +
                                                                0,
                                                              children: c(D, {
                                                                className: `framer-1nhhcsw-container`,
                                                                nodeId: `d_V2fQ7dr`,
                                                                scopeId: `v0kaQiEgk`,
                                                                children: c(S, {
                                                                  breakpoint: O,
                                                                  overrides: {
                                                                    g0bK1hl4M: {
                                                                      m_eduoTBf: `32px`,
                                                                    },
                                                                    kCNS37sgX: {
                                                                      m_eduoTBf: `16px`,
                                                                    },
                                                                  },
                                                                  children: c(z, {
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
                                                                    id: `d_V2fQ7dr`,
                                                                    IWD_vykVW: {
                                                                      borderBottomWidth: 0,
                                                                      borderColor: `rgb(255, 255, 255)`,
                                                                      borderLeftWidth: 0,
                                                                      borderRightWidth: 1,
                                                                      borderStyle: `solid`,
                                                                      borderTopWidth: 1,
                                                                    },
                                                                    layoutId: `d_V2fQ7dr`,
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
                                                                    variant: Y(`FW9uK5oRP`),
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
                                              i
                                            );
                                          }
                                        ),
                                        o !== !1 &&
                                          s(`div`, {
                                            className: `framer-9iri1r`,
                                            "data-border": !0,
                                            "data-framer-name": `Empty State`,
                                            children: [
                                              c(q, {
                                                animated: !1,
                                                className: `framer-1y1p09`,
                                                "data-framer-name": `Icon`,
                                                ezTt3ayMo: !0,
                                                layoutId: `MAtgCFM4N`,
                                                lschgej4H: !0,
                                                qxTvv_EBh: !0,
                                              }),
                                              s(`div`, {
                                                className: `framer-c4qjja`,
                                                "data-framer-name": `Text`,
                                                children: [
                                                  c(x, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(t, {
                                                      children: c(`p`, {
                                                        className: `framer-styles-preset-1xs0hlt`,
                                                        "data-styles-preset": `Y4eex_aGW`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, rgb(17, 17, 18))`,
                                                        },
                                                        children: `No Results`,
                                                      }),
                                                    }),
                                                    className: `framer-1dnh3q1`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  c(x, {
                                                    __fromCanvasComponent: !0,
                                                    children: c(t, {
                                                      children: c(`p`, {
                                                        className: `framer-styles-preset-1p7qn33`,
                                                        "data-styles-preset": `nBdQAQMSA`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-alignment": `center`,
                                                        },
                                                        children: `These filters didn't match anything`,
                                                      }),
                                                    }),
                                                    className: `framer-1h89bgk`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        c(S, {
                                          breakpoint: O,
                                          overrides: {
                                            g0bK1hl4M: {
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                214 +
                                                0 +
                                                0 +
                                                456.32 +
                                                0 +
                                                998,
                                            },
                                            kCNS37sgX: {
                                              y:
                                                (h?.y || 0) +
                                                0 +
                                                0 +
                                                114 +
                                                0 +
                                                0 +
                                                424.32 +
                                                1084 -
                                                45,
                                            },
                                          },
                                          children: c(k, {
                                            height: 40,
                                            y:
                                              (h?.y || 0) + 0 + 0 + 254 + 0 + 0 + 524.32 + 0 + 1054,
                                            children: c(lt, {
                                              __loadMore: r,
                                              __paginationInfo: n,
                                              className: `framer-has6kx-container`,
                                              "data-framer-name": `Loader`,
                                              isModuleExternal: !0,
                                              name: `Loader`,
                                              nodeId: `cxITqHb7b`,
                                              ref: R,
                                              scopeId: `v0kaQiEgk`,
                                              children: c(U, {
                                                height: `100%`,
                                                id: `cxITqHb7b`,
                                                layoutId: `cxITqHb7b`,
                                                name: `Loader`,
                                                variant: Tt(
                                                  n,
                                                  { disabled: `PX1MOnVXY`, loading: `G47S15YSn` },
                                                  Y(`G47S15YSn`)
                                                ),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    });
                                  },
                                }),
                              }),
                            }),
                          ],
                        }),
                        c(S, {
                          breakpoint: O,
                          overrides: {
                            g0bK1hl4M: { height: 2004.32 },
                            kCNS37sgX: { height: 1622.32 },
                          },
                          children: c(k, {
                            height: 2260.32,
                            width: h?.width || `100vw`,
                            y: (h?.y || 0) + 0 + 0 + 0,
                            children: c(D, {
                              className: `framer-flq2h2-container`,
                              "data-framer-name": `Grid`,
                              name: `Grid`,
                              nodeId: `gSj75JfwP`,
                              scopeId: `v0kaQiEgk`,
                              children: c(S, {
                                breakpoint: O,
                                overrides: {
                                  g0bK1hl4M: { ieZNkwrrK: `0px 32px 0px 32px` },
                                  kCNS37sgX: { JLnFVd4lc: !1, SZjrZZXey: !1 },
                                },
                                children: c(B, {
                                  gbAjZwZif: !0,
                                  height: `100%`,
                                  HIadHX3E2: `rgba(0, 0, 0, 0.12)`,
                                  id: `gSj75JfwP`,
                                  ieZNkwrrK: `0px 36px 0px 36px`,
                                  JLnFVd4lc: !0,
                                  layoutId: `gSj75JfwP`,
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
                    c(k, {
                      children: c(D, {
                        className: `framer-17c420t-container`,
                        "data-framer-name": `Smooth scroll`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: N,
                        name: `Smooth scroll`,
                        nodeId: `wsU7m0Ism`,
                        scopeId: `v0kaQiEgk`,
                        children: c(V, {
                          height: `100%`,
                          id: `wsU7m0Ism`,
                          infinite: !1,
                          intensity: 8,
                          layoutId: `wsU7m0Ism`,
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
        `.framer-uU1vE.framer-we78u3, .framer-uU1vE .framer-we78u3 { display: block; }`,
        `.framer-uU1vE.framer-183qutw { align-content: center; align-items: center; background-color: #f1f1f1; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-uU1vE .framer-1x6dr2f { align-content: center; align-items: center; background-color: var(--token-d64fb00e-b5cb-4b79-a672-ed51c8d41600, #f1f1f1); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 254px 36px 120px 36px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-uU1vE .framer-1wforhx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1848px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-uU1vE .framer-14bio0p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-uU1vE .framer-d6amgs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-uU1vE .framer-10ayamd, .framer-uU1vE .framer-cz8f0m { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 800px; position: relative; width: 100%; }`,
        `.framer-uU1vE .framer-1o3u0z4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 50%; }`,
        `.framer-uU1vE .framer-cwl3sj { --framer-input-border-bottom-width: 1px; --framer-input-border-color: #d4d4d4; --framer-input-border-left-width: 0px; --framer-input-border-right-width: 0px; --framer-input-border-style: solid; --framer-input-border-top-width: 0px; --framer-input-font-color: #222222; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: -0.04em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 500; --framer-input-icon-color: #999999; --framer-input-icon-content: ""; --framer-input-icon-mask-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22><path d=%22M7 2.5a5 5 0 0 1 4.13 7.82l2.03 2.03a.75.75 0 0 1-1.06 1.06l-2-2A5 5 0 1 1 7 2.5Zm-3.5 5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z%22 fill=%22%23999%22/></svg>'); --framer-input-padding: 15px; --framer-input-placeholder-color: #999999; flex: none; height: 60px; position: relative; width: 50%; }`,
        `.framer-uU1vE .framer-k0gr2p { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: #d4d4d4; --framer-input-border-left-width: 0px; --framer-input-border-right-width: 0px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-font-color: #222222; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: -0.04em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 500; --framer-input-icon-color: #999999; --framer-input-padding: 14px 14px 14px 20px; flex: 1 0 0px; height: 60px; position: relative; width: 1px; }`,
        `.framer-uU1vE .framer-1k89e8c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; max-width: 1848px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-uU1vE .framer-eraxha { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: sticky; text-decoration: none; top: 36px; width: 75%; z-index: 1; }`,
        `.framer-uU1vE .framer-hk9rfl { align-content: center; align-items: center; aspect-ratio: 1.504 / 1; background-color: var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, #111112); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 0; }`,
        `.framer-uU1vE .framer-1ggr08p { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-uU1vE .framer-esvltp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-uU1vE .framer-1bk37sh { --border-bottom-width: 0px; --border-color: rgba(255, 255, 255, 0.3); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 30px 0px 0px; position: relative; width: min-content; }`,
        `.framer-uU1vE .framer-1xk6mq1, .framer-uU1vE .framer-qijc1f { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-uU1vE .framer-yrdqzb { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-uU1vE .framer-1rg9mwi { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); opacity: 0.8; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`,
        `.framer-uU1vE .framer-1nhhcsw-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-uU1vE .framer-9iri1r { --border-bottom-width: 1px; --border-color: rgba(136, 136, 136, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(204, 204, 204, 0.2); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 500px; justify-content: center; min-height: 100%; padding: 10px; position: relative; width: 75%; }`,
        `.framer-uU1vE .framer-1y1p09 { --1m6trwb: 0; --21h8s6: #000000; --pgex8v: 1.5; aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 24px; }`,
        `.framer-uU1vE .framer-c4qjja { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-uU1vE .framer-1dnh3q1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-uU1vE .framer-1h89bgk { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 200px; opacity: 0.5; position: relative; width: auto; }`,
        `.framer-uU1vE .framer-has6kx-container, .framer-uU1vE .framer-17c420t-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-uU1vE .framer-flq2h2-container { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 0; }`,
        ...Ue,
        ...F,
        ...Ie,
        ...je,
        ...Je,
        ...we,
        ...I,
        `.framer-uU1vE[data-border="true"]::after, .framer-uU1vE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-uU1vE.framer-183qutw { width: 810px; } .framer-uU1vE .framer-1x6dr2f { padding: 214px 32px 80px 32px; } .framer-uU1vE .framer-1wforhx, .framer-uU1vE .framer-14bio0p { gap: 60px; } .framer-uU1vE .framer-d6amgs, .framer-uU1vE .framer-1k89e8c { gap: 32px; } .framer-uU1vE .framer-eraxha { width: 100%; } .framer-uU1vE .framer-9iri1r { height: 400px; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-uU1vE.framer-183qutw { width: 390px; } .framer-uU1vE .framer-1x6dr2f { padding: 114px 24px 0px 24px; } .framer-uU1vE .framer-1wforhx { gap: 24px; } .framer-uU1vE .framer-14bio0p { gap: 34px; order: 0; } .framer-uU1vE .framer-d6amgs, .framer-uU1vE .framer-1ggr08p { gap: 18px; } .framer-uU1vE .framer-1o3u0z4 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 4px; width: 100%; } .framer-uU1vE .framer-cwl3sj { --framer-input-background: #f1f1f1; --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 8px; --framer-input-border-radius-bottom-right: 8px; --framer-input-border-radius-top-left: 8px; --framer-input-border-radius-top-right: 8px; --framer-input-border-right-width: 1px; --framer-input-border-top-width: 1px; --framer-input-font-size: 14px; height: 50px; width: 100%; } .framer-uU1vE .framer-k0gr2p { --framer-input-background: #e9e9e9; --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 8px; --framer-input-border-radius-bottom-right: 8px; --framer-input-border-radius-top-left: 8px; --framer-input-border-radius-top-right: 8px; --framer-input-border-right-width: 1px; --framer-input-font-size: 14px; --framer-input-padding: 14px 14px 14px 18px; flex: none; height: 50px; width: 100%; } .framer-uU1vE .framer-1k89e8c { gap: 24px; order: 1; padding: 0px 0px 50px 0px; } .framer-uU1vE .framer-eraxha { width: 100%; } .framer-uU1vE .framer-hk9rfl { border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; order: 0; padding: 30px; } .framer-uU1vE .framer-esvltp { gap: 20px; } .framer-uU1vE .framer-1bk37sh { padding: 0px 20px 0px 0px; } .framer-uU1vE .framer-9iri1r { border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; height: 260px; width: 100%; } .framer-uU1vE .framer-has6kx-container { bottom: 5px; left: 50%; position: absolute; transform: translateX(-50%); z-index: 1; }}`,
      ],
      `framer-uU1vE`
    )),
    ($.displayName = `Portfolio`),
    ($.defaultProps = { height: 3697, width: 1200 }),
    A(
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
        ...at,
        ...st,
        ...ct,
        ...ut,
        ...ft,
        ...pt,
        ...T(We),
        ...T(L),
        ...T(Le),
        ...T(Me),
        ...T(Ye),
        ...T(Te),
        ...T(R),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = (async () => ({
            Q6MqN6DTl1: t.pathVariables?.title ?? void 0,
            QmOOj7jtD1: await (async () => {
              let e = t.pathVariables?.category ?? ``;
              if (!e) return ``;
              let r = t.collectionUtils?.get(`qP9bHc6_m`);
              return r ? ((await r.getRecordIdBySlug(e, n)) ?? ``) : ``;
            })(),
          }))();
        return Promise.allSettled([
          r.then(({ Q6MqN6DTl1: e, QmOOj7jtD1: t }) => ue.get(X(e, t), n).preload()),
          v(B, {}, t),
          (async () => {
            let { Q6MqN6DTl1: e, QmOOj7jtD1: i } = await r,
              a = (await ue.get(X(e, i), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(a.flatMap((e) => [v(z, {}, t), v(U, {}, t)]));
          })(),
        ]);
      },
    }),
    (kt = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `Framerv0kaQiEgk`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `3697`,
            framerIntrinsicWidth: `1200`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `false`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"g0bK1hl4M":{"layout":["fixed","auto"]},"kCNS37sgX":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { kt as __FramerMetadata__, $ as default, ht as queryParamNames };
//# sourceMappingURL=tt2ETtW7dCLyTyr9is1eBmOkwcB3yuXG12K0PRE-cQM.D1A2E7Tu.mjs.map
