import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  E as t,
  F as n,
  I as r,
  L as i,
  M as a,
  R as o,
  T as s,
  b as c,
  c as l,
  j as u,
  l as d,
  m as f,
  o as p,
  p as m,
  s as h,
  w as g,
  y as _,
  z as v,
} from "./react.typNXLzE.mjs";
import { a as y, j as b, r as x, t as S } from "./motion.CQsVbJu1.mjs";
import {
  F as C,
  M as w,
  Mt as T,
  Nt as E,
  Z as D,
  j as ee,
  mt as te,
  o as O,
  wt as ne,
  xt as k,
} from "./framer.B3F8DTpJ.mjs";
var A,
  re,
  ie,
  ae,
  oe,
  j,
  M,
  N,
  P,
  F = e(() => {
    (h(),
      D(),
      S(),
      s(),
      (A = `framer-0vyHk`),
      (re = { CW04Ryqpa: `framer-v-163orac` }),
      (ie = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (ae = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (oe = ({ value: e, children: t }) => {
        let n = u(y),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return p(y.Provider, { value: i, children: t });
      }),
      (j = b.create(n)),
      (M = ({
        _1Visible: e,
        _2Visible: t,
        _3Visible: n,
        height: r,
        id: i,
        lineColor: a,
        padding: o,
        width: s,
        ...c
      }) => ({
        ...c,
        gbAjZwZif: n ?? c.gbAjZwZif ?? !0,
        HIadHX3E2: a ?? c.HIadHX3E2 ?? `rgba(255, 255, 255, 0.24)`,
        ieZNkwrrK: o ?? c.ieZNkwrrK ?? `0px 36px 0px 36px`,
        JLnFVd4lc: t ?? c.JLnFVd4lc ?? !0,
        SZjrZZXey: e ?? c.SZjrZZXey ?? !0,
      })),
      (N = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (P = E(
        m(function (e, t) {
          let { activeLocale: n, setLocale: r } = ne(),
            {
              style: i,
              className: a,
              layoutId: o,
              variant: s,
              HIadHX3E2: l,
              ieZNkwrrK: u,
              SZjrZZXey: f,
              JLnFVd4lc: m,
              gbAjZwZif: h,
              ..._
            } = M(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: S,
              gestureHandlers: w,
              gestureVariant: E,
              isLoading: D,
              setGestureState: ee,
              setVariant: O,
              variants: k,
            } = T({ defaultVariant: `CW04Ryqpa`, variant: s, variantClassNames: re }),
            P = N(e, k),
            F = C(A),
            I = c(null),
            L = g();
          return (
            te(),
            p(x, {
              id: o ?? L,
              children: p(j, {
                animate: k,
                initial: !1,
                children: p(oe, {
                  value: ae,
                  children: p(b.div, {
                    ..._,
                    ...w,
                    className: C(F, `framer-163orac`, a, y),
                    "data-framer-name": `Default`,
                    layoutDependency: P,
                    layoutId: `CW04Ryqpa`,
                    ref: t ?? I,
                    style: { "--u9p93t": ie(u), ...i },
                    children: d(b.div, {
                      className: `framer-1n8lrk9`,
                      "data-framer-name": `Container`,
                      layoutDependency: P,
                      layoutId: `bRpMbsJ6K`,
                      children: [
                        p(b.div, {
                          className: `framer-d5lys1`,
                          "data-framer-name": `filler`,
                          layoutDependency: P,
                          layoutId: `DAAAq0T1j`,
                          style: { backgroundColor: `rgba(255, 255, 255, 0.24)`, opacity: 0 },
                        }),
                        f &&
                          p(b.div, {
                            className: `framer-135dton`,
                            "data-framer-name": `Line`,
                            layoutDependency: P,
                            layoutId: `LJ_9Zt001`,
                            style: { backgroundColor: l },
                          }),
                        m &&
                          p(b.div, {
                            className: `framer-1dskx7`,
                            "data-framer-name": `Line`,
                            layoutDependency: P,
                            layoutId: `akuv6CxKl`,
                            style: { backgroundColor: l },
                          }),
                        h &&
                          p(b.div, {
                            className: `framer-koktsm`,
                            "data-framer-name": `Line`,
                            layoutDependency: P,
                            layoutId: `PlHhqnMMr`,
                            style: { backgroundColor: l },
                          }),
                        p(b.div, {
                          className: `framer-md4viw`,
                          "data-framer-name": `filler`,
                          layoutDependency: P,
                          layoutId: `THxgONunp`,
                          style: { backgroundColor: `rgba(255, 255, 255, 0.24)`, opacity: 0 },
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
          `.framer-0vyHk.framer-ukcwwj, .framer-0vyHk .framer-ukcwwj { display: block; }`,
          `.framer-0vyHk.framer-163orac { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 800px; justify-content: center; overflow: hidden; padding: var(--u9p93t); position: relative; width: 1200px; }`,
          `.framer-0vyHk .framer-1n8lrk9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 100%; justify-content: space-between; max-width: 1848px; overflow: visible; padding: 0px; pointer-events: none; position: relative; width: 100%; z-index: 1; }`,
          `.framer-0vyHk .framer-d5lys1, .framer-0vyHk .framer-135dton, .framer-0vyHk .framer-1dskx7, .framer-0vyHk .framer-koktsm, .framer-0vyHk .framer-md4viw { flex: none; height: 100%; overflow: hidden; position: relative; width: 1px; z-index: 1; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-0vyHk.framer-163orac { gap: 0px; } .framer-0vyHk.framer-163orac > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-0vyHk.framer-163orac > :first-child { margin-left: 0px; } .framer-0vyHk.framer-163orac > :last-child { margin-right: 0px; } }`,
        ],
        `framer-0vyHk`
      )),
      (P.displayName = `Grid`),
      (P.defaultProps = { height: 800, width: 1200 }),
      w(P, {
        HIadHX3E2: {
          defaultValue: `rgba(255, 255, 255, 0.24)`,
          title: `Line color`,
          type: O.Color,
        },
        ieZNkwrrK: { defaultValue: `0px 36px 0px 36px`, title: `Padding`, type: O.Padding },
        SZjrZZXey: { defaultValue: !0, title: `1 Visible`, type: O.Boolean },
        JLnFVd4lc: { defaultValue: !0, title: `2 Visible`, type: O.Boolean },
        gbAjZwZif: { defaultValue: !0, title: `3 Visible`, type: O.Boolean },
      }),
      ee(P, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function I(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function L(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function se(e, t, n) {
  return (1 - n) * e + n * t;
}
function ce(e, t, n, r) {
  return se(e, t, 1 - Math.exp(-n * r));
}
function le(e, t) {
  return ((e % t) + t) % t;
}
function R(e, t) {
  let n;
  return function (...r) {
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(this, r));
      }, t)));
  };
}
function z(e, t) {
  return e === 1 ? de : e === 2 ? t : 1;
}
function B(e) {
  (getComputedStyle(e).position === `sticky` &&
    (e.style.setProperty(`position`, `static`), (e.dataset.sticky = `true`)),
    e.offsetParent && B(e.offsetParent));
}
function V(e) {
  (e?.dataset?.sticky === `true` && (e.style.removeProperty(`position`), delete e.dataset.sticky),
    e.offsetParent && V(e.offsetParent));
}
function H(e, t = 0) {
  let n = t + e.offsetTop;
  return e.offsetParent ? H(e.offsetParent, n) : n;
}
function U(e, t = 0) {
  let n = t + e.offsetLeft;
  return e.offsetParent ? U(e.offsetParent, n) : n;
}
function ue(e, t = 0) {
  let n = t + e.scrollTop;
  return e.offsetParent ? ue(e.offsetParent, n) : n + v.scrollY;
}
function W(e, t = 0) {
  let n = t + e.scrollLeft;
  return e.offsetParent ? W(e.offsetParent, n) : n + v.scrollX;
}
function G() {
  return me++;
}
function K({ smooth: e, infinite: n, orientation: i, intensity: a, children: o, snap: s }) {
  let u = c(),
    m = c(),
    h = c(),
    g = k();
  return (
    _(() => {
      if (g || (o && (!u.current || !m.current))) return;
      u.current &&
        m.current &&
        (i === `horizontal`
          ? u.current.style.setProperty(`overflowX`, `auto`)
          : u.current.style.setProperty(`overflowY`, `auto`));
      let t = new pe({
        smoothWheel: e,
        duration: a / 10,
        infinite: n,
        orientation: i,
        gestureOrientation: i === `horizontal` ? `both` : `vertical`,
        autoRaf: !0,
        autoToggle: !0,
        anchors: !0,
        allowNestedScroll: !0,
        wrapper: u.current,
        content: m.current,
        syncTouch: !!n || i === `horizontal`,
        stopInertiaOnNavigate: !0,
      });
      h.current = t;
      let r;
      return (
        s &&
          s.snaps.length > 0 &&
          ((r = new he(t, { type: s.type, distanceThreshold: s.threshold + `%` })),
          s.snaps.forEach((e) => {
            if (!e.target?.current) return;
            let n = e.target.current.id;
            t.rootElement.querySelectorAll(`#${n}`).forEach((t) => {
              r.addElement(t, { align: e.align });
            });
          })),
        (v.lenis = t),
        (v.lenisSnap = s),
        () => {
          (t && t.destroy(), r && r.destroy());
        }
      );
    }, [e, n, i, a, o, s, g]),
    d(l, {
      children: [
        p(`style`, {
          children: `html.lenis,
html.lenis body {
  height: auto;
}

.lenis:not(.lenis-autoToggle).lenis-stopped {
  overflow: clip;
}

.lenis [data-lenis-prevent],
.lenis [data-lenis-prevent-wheel],
.lenis [data-lenis-prevent-touch],
.lenis [data-lenis-prevent-vertical],
.lenis [data-lenis-prevent-horizontal] {
  overscroll-behavior: contain;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}

.lenis.lenis-autoToggle {
  transition-property: overflow;
  transition-duration: 1ms;
  transition-behavior: allow-discrete;
}`,
        }),
        o &&
          p(l, {
            children: p(`div`, {
              ref: u,
              style:
                i === `horizontal`
                  ? { overflowX: `auto`, width: `100%` }
                  : { overflowY: `auto`, height: `100%` },
              children: p(`div`, {
                ref: m,
                style: { width: `100%` },
                children: t.map(o, (e) =>
                  f(e) ? r(e, { style: { ...e.props.style, width: `100%` } }) : e
                ),
              }),
            }),
          }),
      ],
    })
  );
}
var q,
  J,
  Y,
  X,
  de,
  Z,
  fe,
  Q,
  pe,
  $,
  me,
  he,
  ge = e(() => {
    (i(),
      h(),
      D(),
      s(),
      (q = `1.3.25`),
      (J = class {
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            let n = L(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r;
          } else
            this.lerp
              ? ((this.value = ce(this.value, this.to, this.lerp * 60, e)),
                Math.round(this.value) === Math.round(this.to) &&
                  ((this.value = this.to), (t = !0)))
              : ((this.value = this.to), (t = !0));
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o }) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
        constructor() {
          (I(this, `isRunning`, !1),
            I(this, `value`, 0),
            I(this, `from`, 0),
            I(this, `to`, 0),
            I(this, `currentTime`, 0),
            I(this, `lerp`, void 0),
            I(this, `duration`, void 0),
            I(this, `easing`, void 0),
            I(this, `onUpdate`, void 0));
        }
      }),
      (Y = class {
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            this.wrapper === v &&
              this.debouncedResize &&
              v.removeEventListener(`resize`, this.debouncedResize));
        }
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
        constructor(e, t, { autoResize: n = !0, debounce: r = 250 } = {}) {
          (I(this, `width`, 0),
            I(this, `height`, 0),
            I(this, `scrollHeight`, 0),
            I(this, `scrollWidth`, 0),
            I(this, `debouncedResize`, void 0),
            I(this, `wrapperResizeObserver`, void 0),
            I(this, `contentResizeObserver`, void 0),
            I(this, `resize`, () => {
              (this.onWrapperResize(), this.onContentResize());
            }),
            I(this, `onWrapperResize`, () => {
              this.wrapper instanceof Window
                ? ((this.width = v.innerWidth), (this.height = v.innerHeight))
                : ((this.width = this.wrapper.clientWidth),
                  (this.height = this.wrapper.clientHeight));
            }),
            I(this, `onContentResize`, () => {
              this.wrapper instanceof Window
                ? ((this.scrollHeight = this.content.scrollHeight),
                  (this.scrollWidth = this.content.scrollWidth))
                : ((this.scrollHeight = this.wrapper.scrollHeight),
                  (this.scrollWidth = this.wrapper.scrollWidth));
            }),
            (this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = R(this.resize, r)),
              this.wrapper instanceof Window
                ? v.addEventListener(`resize`, this.debouncedResize)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
      }),
      (X = class {
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e]?.(...t);
        }
        on(e, t) {
          return (
            this.events[e] ? this.events[e].push(t) : (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
        constructor() {
          I(this, `events`, {});
        }
      }),
      (de = 100 / 6),
      (Z = { passive: !1 }),
      (fe = class {
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            v.removeEventListener(`resize`, this.onWindowResize),
            this.element.removeEventListener(`wheel`, this.onWheel, Z),
            this.element.removeEventListener(`touchstart`, this.onTouchStart, Z),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, Z),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, Z));
        }
        constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
          (I(this, `touchStart`, { x: 0, y: 0 }),
            I(this, `lastDelta`, { x: 0, y: 0 }),
            I(this, `window`, { width: 0, height: 0 }),
            I(this, `emitter`, new X()),
            I(this, `onTouchStart`, (e) => {
              let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
              ((this.touchStart.x = t),
                (this.touchStart.y = n),
                (this.lastDelta = { x: 0, y: 0 }),
                this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
            }),
            I(this, `onTouchMove`, (e) => {
              let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
                r = -(t - this.touchStart.x) * this.options.touchMultiplier,
                i = -(n - this.touchStart.y) * this.options.touchMultiplier;
              ((this.touchStart.x = t),
                (this.touchStart.y = n),
                (this.lastDelta = { x: r, y: i }),
                this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
            }),
            I(this, `onTouchEnd`, (e) => {
              this.emitter.emit(`scroll`, {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: e,
              });
            }),
            I(this, `onWheel`, (e) => {
              let { deltaX: t, deltaY: n, deltaMode: r } = e,
                i = z(r, this.window.width),
                a = z(r, this.window.height);
              ((t *= i),
                (n *= a),
                (t *= this.options.wheelMultiplier),
                (n *= this.options.wheelMultiplier),
                this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
            }),
            I(this, `onWindowResize`, () => {
              this.window = { width: v.innerWidth, height: v.innerHeight };
            }),
            (this.element = e),
            (this.options = t),
            v.addEventListener(`resize`, this.onWindowResize),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, Z),
            this.element.addEventListener(`touchstart`, this.onTouchStart, Z),
            this.element.addEventListener(`touchmove`, this.onTouchMove, Z),
            this.element.addEventListener(`touchend`, this.onTouchEnd, Z));
        }
      }),
      (Q = (e) => Math.min(1, 1.001 - 2 ** (-10 * e))),
      (pe = class {
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll),
            this.options.wrapper.removeEventListener(`scrollend`, this.onScrollEnd, {
              capture: !0,
            }),
            this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown),
            (this.options.anchors || this.options.stopInertiaOnNavigate) &&
              this.options.wrapper.removeEventListener(`click`, this.onClick),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName(),
            this._rafId && cancelAnimationFrame(this._rafId));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        get overflow() {
          let e = this.isHorizontal ? `overflow-x` : `overflow-y`;
          return getComputedStyle(this.rootElement)[e];
        }
        checkOverflow() {
          [`hidden`, `clip`].includes(this.overflow) ? this.internalStop() : this.internalStart();
        }
        setScroll(e) {
          this.isHorizontal
            ? this.options.wrapper.scrollTo({ left: e, behavior: `instant` })
            : this.options.wrapper.scrollTo({ top: e, behavior: `instant` });
        }
        isTouchOnSelectionHandle(e) {
          let t = v.getSelection();
          if (!t || t.isCollapsed || t.rangeCount === 0) return !1;
          let n = e.targetTouches[0] ?? e.changedTouches[0];
          if (!n) return !1;
          let r = t.getRangeAt(0).getClientRects();
          if (r.length === 0) return !1;
          let i = r[0],
            a = r[r.length - 1],
            o = Math.hypot(n.clientX - i.left, n.clientY - i.top) <= 40,
            s = Math.hypot(n.clientX - a.right, n.clientY - a.bottom) <= 40;
          return o || s;
        }
        resize() {
          (this.dimensions.resize(),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            this.emit());
        }
        emit() {
          this.emitter.emit(`scroll`, this);
        }
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          if (this.isStopped) {
            if (this.options.autoToggle) {
              this.rootElement.style.removeProperty(`overflow`);
              return;
            }
            this.internalStart();
          }
        }
        internalStart() {
          this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
        }
        stop() {
          if (!this.isStopped) {
            if (this.options.autoToggle) {
              this.rootElement.style.setProperty(`overflow`, `clip`);
              return;
            }
            this.internalStop();
          }
        }
        internalStop() {
          this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            programmatic: i = !0,
            lerp: a = i ? this.options.lerp : void 0,
            duration: o = i ? this.options.duration : void 0,
            easing: s = i ? this.options.easing : void 0,
            onStart: c,
            onComplete: l,
            force: u = !1,
            userData: d,
          } = {}
        ) {
          if ((this.isStopped || this.isLocked) && !u) return;
          let f = e,
            p = t;
          if (typeof f == `string` && [`top`, `left`, `start`, `#`].includes(f)) f = 0;
          else if (typeof f == `string` && [`bottom`, `right`, `end`].includes(f)) f = this.limit;
          else {
            let e = null;
            if (
              (typeof f == `string`
                ? ((e = f.startsWith(`#`)
                    ? document.getElementById(f.slice(1))
                    : document.querySelector(f)),
                  e || (f === `#top` ? (f = 0) : console.warn(`Lenis: Target not found`, f)))
                : f instanceof HTMLElement && f?.nodeType && (e = f),
              e)
            ) {
              if (this.options.wrapper !== v) {
                let e = this.rootElement.getBoundingClientRect();
                p -= this.isHorizontal ? e.left : e.top;
              }
              let t = e.getBoundingClientRect(),
                n = getComputedStyle(e),
                r = this.isHorizontal
                  ? Number.parseFloat(n.scrollMarginLeft)
                  : Number.parseFloat(n.scrollMarginTop),
                i = getComputedStyle(this.rootElement),
                a = this.isHorizontal
                  ? Number.parseFloat(i.scrollPaddingLeft)
                  : Number.parseFloat(i.scrollPaddingTop);
              f =
                (this.isHorizontal ? t.left : t.top) +
                this.animatedScroll -
                (Number.isNaN(r) ? 0 : r) -
                (Number.isNaN(a) ? 0 : a);
            }
          }
          if (typeof f == `number`) {
            if (((f += p), this.options.infinite)) {
              if (i) {
                this.targetScroll = this.animatedScroll = this.scroll;
                let e = f - this.animatedScroll;
                e > this.limit / 2 ? (f -= this.limit) : e < -this.limit / 2 && (f += this.limit);
              }
            } else f = L(0, f, this.limit);
            if (f === this.targetScroll) {
              (c?.(this), l?.(this));
              return;
            }
            if (((this.userData = d ?? {}), n)) {
              ((this.animatedScroll = this.targetScroll = f),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                l?.(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                }));
              return;
            }
            (i || (this.targetScroll = f),
              typeof o == `number` && typeof s != `function`
                ? (s = Q)
                : typeof s == `function` && typeof o != `number` && (o = 1),
              this.animate.fromTo(this.animatedScroll, f, {
                duration: o,
                easing: s,
                lerp: a,
                onStart: () => {
                  (r && (this.isLocked = !0), (this.isScrolling = `smooth`), c?.(this));
                },
                onUpdate: (e, t) => {
                  ((this.isScrolling = `smooth`),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = e - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = e),
                    this.setScroll(this.scroll),
                    i && (this.targetScroll = e),
                    t || this.emit(),
                    t &&
                      (this.reset(),
                      this.emit(),
                      l?.(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent()));
                },
              }));
          }
        }
        preventNextNativeScrollEvent() {
          ((this._preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              this._preventNextNativeScrollEvent = !1;
            }));
        }
        hasNestedScroll(e, { deltaX: t, deltaY: n }) {
          let r = Date.now();
          e._lenis ||= {};
          let i = e._lenis,
            a,
            o,
            s,
            c,
            l,
            u,
            d,
            f,
            p,
            m;
          if (r - (i.time ?? 0) > 2e3) {
            i.time = Date.now();
            let t = v.getComputedStyle(e);
            if (
              ((i.computedStyle = t),
              (a = [`auto`, `overlay`, `scroll`].includes(t.overflowX)),
              (o = [`auto`, `overlay`, `scroll`].includes(t.overflowY)),
              (l = [`auto`].includes(t.overscrollBehaviorX)),
              (u = [`auto`].includes(t.overscrollBehaviorY)),
              (i.hasOverflowX = a),
              (i.hasOverflowY = o),
              !(a || o))
            )
              return !1;
            ((d = e.scrollWidth),
              (f = e.scrollHeight),
              (p = e.clientWidth),
              (m = e.clientHeight),
              (s = d > p),
              (c = f > m),
              (i.isScrollableX = s),
              (i.isScrollableY = c),
              (i.scrollWidth = d),
              (i.scrollHeight = f),
              (i.clientWidth = p),
              (i.clientHeight = m),
              (i.hasOverscrollBehaviorX = l),
              (i.hasOverscrollBehaviorY = u));
          } else
            ((s = i.isScrollableX),
              (c = i.isScrollableY),
              (a = i.hasOverflowX),
              (o = i.hasOverflowY),
              (d = i.scrollWidth),
              (f = i.scrollHeight),
              (p = i.clientWidth),
              (m = i.clientHeight),
              (l = i.hasOverscrollBehaviorX),
              (u = i.hasOverscrollBehaviorY));
          if (!((a && s) || (o && c))) return !1;
          let h = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`,
            g,
            _,
            y,
            b,
            x,
            S;
          if (h === `horizontal`)
            ((g = Math.round(e.scrollLeft)), (_ = d - p), (y = t), (b = a), (x = s), (S = l));
          else if (h === `vertical`)
            ((g = Math.round(e.scrollTop)), (_ = f - m), (y = n), (b = o), (x = c), (S = u));
          else return !1;
          return (!S && (g >= _ || g <= 0)) || ((y > 0 ? g < _ : g > 0) && b && x);
        }
        get rootElement() {
          return this.options.wrapper === v ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          let e = this.options.wrapper;
          return this.isHorizontal ? (e.scrollX ?? e.scrollLeft) : (e.scrollY ?? e.scrollTop);
        }
        get scroll() {
          return this.options.infinite ? le(this.animatedScroll, this.limit) : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this._isScrolling;
        }
        set isScrolling(e) {
          this._isScrolling !== e && ((this._isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this._isStopped;
        }
        set isStopped(e) {
          this._isStopped !== e && ((this._isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this._isLocked;
        }
        set isLocked(e) {
          this._isLocked !== e && ((this._isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.options.autoToggle && (e += ` lenis-autoToggle`),
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            this.className.split(` `).forEach((e) => {
              this.rootElement.classList.add(e);
            }));
        }
        cleanUpClassName() {
          for (let e of Array.from(this.rootElement.classList))
            (e === `lenis` || e.startsWith(`lenis-`)) && this.rootElement.classList.remove(e);
        }
        constructor({
          wrapper: e = v,
          content: t = document.documentElement,
          eventsTarget: n = e,
          smoothWheel: r = !0,
          syncTouch: i = !1,
          syncTouchLerp: a = 0.075,
          touchInertiaExponent: s = 1.7,
          duration: c,
          easing: l,
          lerp: u = 0.1,
          infinite: d = !1,
          orientation: f = `vertical`,
          gestureOrientation: p = f === `horizontal` ? `both` : `vertical`,
          touchMultiplier: m = 1,
          wheelMultiplier: h = 1,
          autoResize: g = !0,
          prevent: _,
          virtualScroll: y,
          overscroll: b = !0,
          autoRaf: x = !1,
          anchors: S = !1,
          autoToggle: C = !1,
          allowNestedScroll: w = !1,
          __experimental__naiveDimensions: T = !1,
          naiveDimensions: E = T,
          stopInertiaOnNavigate: D = !1,
        } = {}) {
          (I(this, `_isScrolling`, !1),
            I(this, `_isStopped`, !1),
            I(this, `_isLocked`, !1),
            I(this, `_preventNextNativeScrollEvent`, !1),
            I(this, `_resetVelocityTimeout`, null),
            I(this, `_rafId`, null),
            I(this, `_isDraggingSelection`, !1),
            I(this, `isTouching`, void 0),
            I(this, `isIos`, void 0),
            I(this, `time`, 0),
            I(this, `userData`, {}),
            I(this, `lastVelocity`, 0),
            I(this, `velocity`, 0),
            I(this, `direction`, 0),
            I(this, `options`, void 0),
            I(this, `targetScroll`, void 0),
            I(this, `animatedScroll`, void 0),
            I(this, `animate`, new J()),
            I(this, `emitter`, new X()),
            I(this, `dimensions`, void 0),
            I(this, `virtualScroll`, void 0),
            I(this, `onScrollEnd`, (e) => {
              e instanceof CustomEvent ||
                ((this.isScrolling === `smooth` || this.isScrolling === !1) && e.stopPropagation());
            }),
            I(this, `dispatchScrollendEvent`, () => {
              this.options.wrapper.dispatchEvent(
                new CustomEvent(`scrollend`, {
                  bubbles: this.options.wrapper === v,
                  detail: { lenisScrollEnd: !0 },
                })
              );
            }),
            I(this, `onTransitionEnd`, (e) => {
              e.propertyName?.includes(`overflow`) &&
                e.target === this.rootElement &&
                this.checkOverflow();
            }),
            I(this, `onClick`, (e) => {
              let t = e
                  .composedPath()
                  .filter((e) => e instanceof HTMLAnchorElement && e.href)
                  .map((e) => new URL(e.href)),
                n = new URL(v.location.href);
              if (this.options.anchors) {
                let e = t.find((e) => n.host === e.host && n.pathname === e.pathname && e.hash);
                if (e) {
                  let t =
                      typeof this.options.anchors == `object` && this.options.anchors
                        ? this.options.anchors
                        : void 0,
                    n = decodeURIComponent(e.hash);
                  this.scrollTo(n, t);
                  return;
                }
              }
              if (
                this.options.stopInertiaOnNavigate &&
                t.some((e) => n.host === e.host && n.pathname !== e.pathname)
              ) {
                this.reset();
                return;
              }
            }),
            I(this, `onPointerDown`, (e) => {
              e.button === 1 && this.reset();
            }),
            I(this, `onVirtualScroll`, (e) => {
              if (
                typeof this.options.virtualScroll == `function` &&
                this.options.virtualScroll(e) === !1
              )
                return;
              let { deltaX: t, deltaY: n, event: r } = e;
              if (
                (this.emitter.emit(`virtual-scroll`, { deltaX: t, deltaY: n, event: r }),
                r.ctrlKey || r.lenisStopPropagation)
              )
                return;
              let i = r.type.includes(`touch`),
                a = r.type.includes(`wheel`);
              if (
                i &&
                this.isIos &&
                (r.type === `touchstart` &&
                  (this._isDraggingSelection = this.isTouchOnSelectionHandle(r)),
                this._isDraggingSelection)
              ) {
                r.type === `touchend` && (this._isDraggingSelection = !1);
                return;
              }
              this.isTouching = r.type === `touchstart` || r.type === `touchmove`;
              let o = t === 0 && n === 0;
              if (
                this.options.syncTouch &&
                i &&
                r.type === `touchstart` &&
                o &&
                !this.isStopped &&
                !this.isLocked
              ) {
                this.reset();
                return;
              }
              let s =
                (this.options.gestureOrientation === `vertical` && n === 0) ||
                (this.options.gestureOrientation === `horizontal` && t === 0);
              if (o || s) return;
              let c = r.composedPath();
              c = c.slice(0, c.indexOf(this.rootElement));
              let l = this.options.prevent,
                u = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`;
              if (
                c.find(
                  (e) =>
                    e instanceof HTMLElement &&
                    ((typeof l == `function` && l?.(e)) ||
                      e.hasAttribute?.(`data-lenis-prevent`) ||
                      (u === `vertical` && e.hasAttribute?.(`data-lenis-prevent-vertical`)) ||
                      (u === `horizontal` && e.hasAttribute?.(`data-lenis-prevent-horizontal`)) ||
                      (i && e.hasAttribute?.(`data-lenis-prevent-touch`)) ||
                      (a && e.hasAttribute?.(`data-lenis-prevent-wheel`)) ||
                      (this.options.allowNestedScroll &&
                        this.hasNestedScroll(e, { deltaX: t, deltaY: n })))
                )
              )
                return;
              if (this.isStopped || this.isLocked) {
                r.cancelable && r.preventDefault();
                return;
              }
              if (!((this.options.syncTouch && i) || (this.options.smoothWheel && a))) {
                ((this.isScrolling = `native`), this.animate.stop(), (r.lenisStopPropagation = !0));
                return;
              }
              let d = n;
              (this.options.gestureOrientation === `both`
                ? (d = Math.abs(n) > Math.abs(t) ? n : t)
                : this.options.gestureOrientation === `horizontal` && (d = t),
                (!this.options.overscroll ||
                  this.options.infinite ||
                  (this.options.wrapper !== v &&
                    this.limit > 0 &&
                    ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
                      (this.animatedScroll === 0 && n > 0) ||
                      (this.animatedScroll === this.limit && n < 0)))) &&
                  (r.lenisStopPropagation = !0),
                r.cancelable && r.preventDefault());
              let f = i && this.options.syncTouch,
                p = i && r.type === `touchend`;
              (p &&
                (d = Math.sign(d) * Math.abs(this.velocity) ** this.options.touchInertiaExponent),
                this.scrollTo(this.targetScroll + d, {
                  programmatic: !1,
                  ...(f
                    ? { lerp: p ? this.options.syncTouchLerp : 1 }
                    : {
                        lerp: this.options.lerp,
                        duration: this.options.duration,
                        easing: this.options.easing,
                      }),
                }));
            }),
            I(this, `onNativeScroll`, () => {
              if (
                (this._resetVelocityTimeout !== null &&
                  (clearTimeout(this._resetVelocityTimeout), (this._resetVelocityTimeout = null)),
                this._preventNextNativeScrollEvent)
              ) {
                this._preventNextNativeScrollEvent = !1;
                return;
              }
              if (this.isScrolling === !1 || this.isScrolling === `native`) {
                let e = this.animatedScroll;
                ((this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - e),
                  (this.direction = Math.sign(this.animatedScroll - e)),
                  this.isStopped || (this.isScrolling = `native`),
                  this.emit(),
                  this.velocity !== 0 &&
                    (this._resetVelocityTimeout = setTimeout(() => {
                      ((this.lastVelocity = this.velocity),
                        (this.velocity = 0),
                        (this.isScrolling = !1),
                        this.emit());
                    }, 400)));
              }
            }),
            I(this, `raf`, (e) => {
              let t = e - (this.time || e);
              ((this.time = e),
                this.animate.advance(t * 0.001),
                this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
            }),
            (v.lenisVersion = q),
            (v.lenis ||= {}),
            (v.lenis.version = q),
            f === `horizontal` && (v.lenis.horizontal = !0),
            i === !0 && (v.lenis.touch = !0),
            (this.isIos = /(iPad|iPhone|iPod)/g.test(o.userAgent)),
            (!e || e === document.documentElement) && (e = v),
            typeof c == `number` && typeof l != `function`
              ? (l = Q)
              : typeof l == `function` && typeof c != `number` && (c = 1),
            (this.options = {
              wrapper: e,
              content: t,
              eventsTarget: n,
              smoothWheel: r,
              syncTouch: i,
              syncTouchLerp: a,
              touchInertiaExponent: s,
              duration: c,
              easing: l,
              lerp: u,
              infinite: d,
              gestureOrientation: p,
              orientation: f,
              touchMultiplier: m,
              wheelMultiplier: h,
              autoResize: g,
              prevent: _,
              virtualScroll: y,
              overscroll: b,
              autoRaf: x,
              anchors: S,
              autoToggle: C,
              allowNestedScroll: w,
              naiveDimensions: E,
              stopInertiaOnNavigate: D,
            }),
            (this.dimensions = new Y(e, t, { autoResize: g })),
            this.updateClassName(),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll),
            this.options.wrapper.addEventListener(`scrollend`, this.onScrollEnd, { capture: !0 }),
            (this.options.anchors || this.options.stopInertiaOnNavigate) &&
              this.options.wrapper.addEventListener(`click`, this.onClick),
            this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown),
            (this.virtualScroll = new fe(n, { touchMultiplier: m, wheelMultiplier: h })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll),
            this.options.autoToggle &&
              (this.checkOverflow(),
              this.rootElement.addEventListener(`transitionend`, this.onTransitionEnd)),
            this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
        }
      }),
      ($ = class {
        destroy() {
          (this.wrapperResizeObserver.disconnect(), this.resizeObserver.disconnect());
        }
        setRect({ top: e, left: t, width: n, height: r, element: i } = {}) {
          ((e ??= this.rect.top),
            (t ??= this.rect.left),
            (n ??= this.rect.width),
            (r ??= this.rect.height),
            (i ??= this.rect.element),
            !(
              e === this.rect.top &&
              t === this.rect.left &&
              n === this.rect.width &&
              r === this.rect.height &&
              i === this.rect.element
            ) &&
              ((this.rect.top = e),
              (this.rect.y = e),
              (this.rect.width = n),
              (this.rect.height = r),
              (this.rect.left = t),
              (this.rect.x = t),
              (this.rect.bottom = e + r),
              (this.rect.right = t + n)));
        }
        constructor(
          e,
          { align: t = [`start`], ignoreSticky: n = !0, ignoreTransform: r = !1 } = {}
        ) {
          (I(this, `element`, void 0),
            I(this, `options`, void 0),
            I(this, `align`, void 0),
            I(this, `rect`, {}),
            I(this, `wrapperResizeObserver`, void 0),
            I(this, `resizeObserver`, void 0),
            I(this, `debouncedWrapperResize`, void 0),
            I(this, `onWrapperResize`, () => {
              let e, t;
              if ((this.options.ignoreSticky && B(this.element), this.options.ignoreTransform))
                ((e = H(this.element)), (t = U(this.element)));
              else {
                let n = this.element.getBoundingClientRect();
                ((e = n.top + ue(this.element)), (t = n.left + W(this.element)));
              }
              (this.options.ignoreSticky && V(this.element), this.setRect({ top: e, left: t }));
            }),
            I(this, `onResize`, ([e]) => {
              if (!e?.borderBoxSize[0]) return;
              let t = e.borderBoxSize[0].inlineSize,
                n = e.borderBoxSize[0].blockSize;
              this.setRect({ width: t, height: n });
            }),
            (this.element = e),
            (this.options = { align: t, ignoreSticky: n, ignoreTransform: r }),
            (this.align = [t].flat()),
            (this.debouncedWrapperResize = R(this.onWrapperResize, 500)),
            (this.wrapperResizeObserver = new ResizeObserver(this.debouncedWrapperResize)),
            this.wrapperResizeObserver.observe(document.body),
            this.onWrapperResize(),
            (this.resizeObserver = new ResizeObserver(this.onResize)),
            this.resizeObserver.observe(this.element),
            this.setRect({ width: this.element.offsetWidth, height: this.element.offsetHeight }));
        }
      }),
      (me = 0),
      (he = class {
        destroy() {
          (this.lenis.off(`virtual-scroll`, this.onSnapDebounced),
            v.removeEventListener(`resize`, this.onWindowResize),
            this.elements.forEach((e) => {
              e.destroy();
            }));
        }
        start() {
          this.isStopped = !1;
        }
        stop() {
          this.isStopped = !0;
        }
        add(e) {
          let t = G();
          return (this.snaps.set(t, { value: e }), () => this.snaps.delete(t));
        }
        addElement(e, t = {}) {
          let n = G();
          return (this.elements.set(n, new $(e, t)), () => this.elements.delete(n));
        }
        addElements(e, t = {}) {
          let n = [...e].map((e) => this.addElement(e, t));
          return () => {
            n.forEach((e) => {
              e();
            });
          };
        }
        previous() {
          this.goTo((this.currentSnapIndex ?? 0) - 1);
        }
        next() {
          this.goTo((this.currentSnapIndex ?? 0) + 1);
        }
        goTo(e) {
          let t = this.computeSnaps();
          if (t.length === 0) return;
          this.currentSnapIndex = Math.max(0, Math.min(e, t.length - 1));
          let n = t[this.currentSnapIndex];
          n !== void 0 &&
            this.lenis.scrollTo(n.value, {
              duration: this.options.duration,
              easing: this.options.easing,
              lerp: this.options.lerp,
              lock: this.options.type === `lock`,
              userData: { initiator: `snap` },
              onStart: () => {
                this.options.onSnapStart?.({ index: this.currentSnapIndex, ...n });
              },
              onComplete: () => {
                this.options.onSnapComplete?.({ index: this.currentSnapIndex, ...n });
              },
            });
        }
        get distanceThreshold() {
          let e = 1 / 0;
          if (this.options.type === `mandatory`) return 1 / 0;
          let { isHorizontal: t } = this.lenis,
            n = t ? `width` : `height`;
          return (
            (e =
              typeof this.options.distanceThreshold == `string` &&
              this.options.distanceThreshold.endsWith(`%`)
                ? (Number(this.options.distanceThreshold.replace(`%`, ``)) / 100) * this.viewport[n]
                : typeof this.options.distanceThreshold == `number`
                  ? this.options.distanceThreshold
                  : this.viewport[n]),
            e
          );
        }
        resize() {
          this.elements.forEach((e) => {
            e.onWrapperResize();
          });
        }
        constructor(
          e,
          {
            type: t = `proximity`,
            lerp: n,
            easing: r,
            duration: i,
            distanceThreshold: a = `50%`,
            debounce: o = 500,
            onSnapStart: s,
            onSnapComplete: c,
          } = {}
        ) {
          (I(this, `options`, void 0),
            I(this, `elements`, new Map()),
            I(this, `snaps`, new Map()),
            I(this, `viewport`, { width: v.innerWidth, height: v.innerHeight }),
            I(this, `isStopped`, !1),
            I(this, `onSnapDebounced`, void 0),
            I(this, `currentSnapIndex`, void 0),
            I(this, `onWindowResize`, () => {
              ((this.viewport.width = v.innerWidth), (this.viewport.height = v.innerHeight));
            }),
            I(this, `computeSnaps`, () => {
              let { isHorizontal: e } = this.lenis,
                t = [...this.snaps.values()];
              return (
                this.elements.forEach(({ rect: n, align: r }) => {
                  let i;
                  r.forEach((r) => {
                    (r === `start`
                      ? (i = n.top)
                      : r === `center`
                        ? (i = e
                            ? n.left + n.width / 2 - this.viewport.width / 2
                            : n.top + n.height / 2 - this.viewport.height / 2)
                        : r === `end` &&
                          (i = e
                            ? n.left + n.width - this.viewport.width
                            : n.top + n.height - this.viewport.height),
                      typeof i == `number` && t.push({ value: Math.ceil(i) }));
                  });
                }),
                (t = t.sort((e, t) => Math.abs(e.value) - Math.abs(t.value))),
                t
              );
            }),
            I(this, `onSnap`, (e) => {
              if (
                this.isStopped ||
                e.event.type === `touchmove` ||
                (this.options.type === `lock` && this.lenis.userData?.initiator === `snap`)
              )
                return;
              let { scroll: t, isHorizontal: n } = this.lenis,
                r = n ? e.deltaX : e.deltaY;
              t = Math.ceil(this.lenis.scroll + r);
              let i = this.computeSnaps();
              if (i.length === 0) return;
              let a,
                o = i.findLastIndex(({ value: e }) => e < t),
                s = i.findIndex(({ value: e }) => e > t);
              if (this.options.type === `lock`) r > 0 ? (a = s) : r < 0 && (a = o);
              else {
                let e = i[o],
                  n = e ? Math.abs(t - e.value) : 1 / 0,
                  r = i[s];
                a = n < (r ? Math.abs(t - r.value) : 1 / 0) ? o : s;
              }
              if (a === void 0 || a === -1) return;
              a = Math.max(0, Math.min(a, i.length - 1));
              let c = i[a];
              Math.abs(t - c.value) <= this.distanceThreshold && this.goTo(a);
            }),
            (this.lenis = e),
            (v.lenis ||= {}),
            (v.lenis.snap = !0),
            (this.options = {
              type: t,
              lerp: n,
              easing: r,
              duration: i,
              distanceThreshold: a,
              debounce: o,
              onSnapStart: s,
              onSnapComplete: c,
            }),
            this.onWindowResize(),
            v.addEventListener(`resize`, this.onWindowResize),
            (this.onSnapDebounced = R(this.onSnap, this.options.debounce)),
            this.lenis.on(`virtual-scroll`, this.onSnapDebounced));
        }
      }),
      (K.displayName = `Lenis`),
      w(K, {
        smooth: { type: O.Boolean, title: `Smooth`, defaultValue: !0 },
        intensity: {
          type: O.Number,
          title: `Intensity`,
          defaultValue: 12,
          step: 1,
          min: 1,
          max: 100,
          hidden(e) {
            return e.smooth === !1;
          },
          description: `This will be ignored on mobile.`,
        },
        infinite: {
          type: O.Boolean,
          title: `Infinite`,
          defaultValue: !1,
          hidden(e) {
            return e.smooth === !1;
          },
        },
        orientation: {
          type: O.Enum,
          defaultValue: `vertical`,
          displaySegmentedControl: !0,
          options: [`vertical`, `horizontal`],
          optionTitles: [`Vertical`, `Horizontal`],
          hidden(e) {
            return e.smooth === !1;
          },
        },
        children: { type: O.ComponentInstance, title: `Content` },
        snap: {
          type: O.Object,
          optional: !0,
          description: `Cooked and served by [darkroom.engineering](https://darkroom.engineering).`,
          controls: {
            type: {
              type: O.Enum,
              defaultValue: `proximity`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              options: [`proximity`, `mandatory`, `lock`],
              optionTitles: [`Proximity`, `Mandatory`, `Lock`],
            },
            threshold: {
              type: O.Number,
              defaultValue: 50,
              min: 0,
              max: 100,
              unit: `%`,
              hidden: (e) => e.snap.type === `mandatory`,
            },
            snaps: {
              type: O.Array,
              control: {
                type: O.Object,
                controls: {
                  target: { title: `Target`, type: O.ScrollSectionRef },
                  align: {
                    type: O.Enum,
                    defaultValue: `center`,
                    displaySegmentedControl: !0,
                    segmentedControlDirection: `horizontal`,
                    options: [`start`, `center`, `end`],
                    optionIcons: [`align-top`, `align-middle`, `align-bottom`],
                  },
                },
              },
            },
          },
        },
      }));
  });
function _e(e, t) {
  return {
    description: `M. Haikal Arrasyid, fotografer dan Software Engineering student di SMK Telkom Malang. Dokumentasi visual profesional untuk event, wisuda, panggung seni, konferensi teknologi, dan olahraga.`,
    favicon: `https://framerusercontent.com/assets/pLgbJKQjYbi1aq49T5RQNbeGxY.png`,
    robots: `max-image-preview:large`,
    socialImage: `https://framerusercontent.com/assets/Ls3Mbc1E6pAmTp6tfRkTXigSXtI.jpg`,
    title: `M. Haikal Arrasyid | Professional Photography Portfolio`,
  };
}
var ve = e(() => {});
export { P as a, ge as i, _e as n, F as o, K as r, ve as t };
//# sourceMappingURL=shared-lib.BczJtw9W.mjs.map
