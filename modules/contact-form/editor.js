/*! For license information please see editor.js.LICENSE.txt */
(
  () => {
    var e = {
      4955: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => n
        });
        var a = r(9196),
        o = r(444);
        const n = (0, a.createElement) (
          o.SVG,
          {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24'
          },
          (0, a.createElement) (
            o.Path,
            {
              d: 'M15.5 9.5a1 1 0 100-2 1 1 0 000 2zm0 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-2.25 6v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM9.5 8.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z',
              fillRule: 'evenodd'
            }
          )
        )
      },
      5235: (e, t) => {
        var r;
        !function () {
          'use strict';
          var a = {}.hasOwnProperty;
          function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var r = arguments[t];
              if (r) {
                var n = typeof r;
                if ('string' === n || 'number' === n) e.push(r);
                 else if (Array.isArray(r)) {
                  if (r.length) {
                    var l = o.apply(null, r);
                    l &&
                    e.push(l)
                  }
                } else if ('object' === n) {
                  if (
                    r.toString !== Object.prototype.toString &&
                    !r.toString.toString().includes('[native code]')
                  ) {
                    e.push(r.toString());
                    continue
                  }
                  for (var i in r) a.call(r, i) &&
                  r[i] &&
                  e.push(i)
                }
              }
            }
            return e.join(' ')
          }
          e.exports ? (o.default = o, e.exports = o) : void 0 === (r = function () {
            return o
          }.apply(t, [])) ||
          (e.exports = r)
        }()
      },
      2384: (e, t) => {
        'use strict';
        var r = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        t.validate = function (e) {
          if (!e) return !1;
          if (e.length > 254) return !1;
          if (!r.test(e)) return !1;
          var t = e.split('@');
          return !(t[0].length > 64) &&
          !t[1].split('.').some((function (e) {
            return e.length > 63
          }))
        }
      },
      2746: (e, t, r) => {
        'use strict';
        const a = r(7811),
        o = Symbol('max'),
        n = Symbol('length'),
        l = Symbol('lengthCalculator'),
        i = Symbol('allowStale'),
        s = Symbol('maxAge'),
        c = Symbol('dispose'),
        u = Symbol('noDisposeOnSet'),
        p = Symbol('lruList'),
        d = Symbol('cache'),
        m = Symbol('updateAgeOnGet'),
        f = () => 1;
        const h = (e, t, r) => {
          const a = e[d].get(t);
          if (a) {
            const t = a.value;
            if (b(e, t)) {
              if (k(e, a), !e[i]) return
            } else r &&
            (e[m] && (a.value.now = Date.now()), e[p].unshiftNode(a));
            return t.value
          }
        },
        b = (e, t) => {
          if (!t || !t.maxAge && !e[s]) return !1;
          const r = Date.now() - t.now;
          return t.maxAge ? r > t.maxAge : e[s] &&
          r > e[s]
        },
        g = e => {
          if (e[n] > e[o]) for (let t = e[p].tail; e[n] > e[o] && null !== t; ) {
            const r = t.prev;
            k(e, t),
            t = r
          }
        },
        k = (e, t) => {
          if (t) {
            const r = t.value;
            e[c] &&
            e[c](r.key, r.value),
            e[n] -= r.length,
            e[d].delete(r.key),
            e[p].removeNode(t)
          }
        };
        class E {
          constructor(e, t, r, a, o) {
            this.key = e,
            this.value = t,
            this.length = r,
            this.now = a,
            this.maxAge = o ||
            0
          }
        }
        const C = (e, t, r, a) => {
          let o = r.value;
          b(e, o) &&
          (k(e, r), e[i] || (o = void 0)),
          o &&
          t.call(a, o.value, o.key, e)
        };
        e.exports = class {
          constructor(e) {
            if (
              'number' == typeof e &&
              (e = {
                max: e
              }),
              e ||
              (e = {}),
              e.max &&
              ('number' != typeof e.max || e.max < 0)
            ) throw new TypeError('max must be a non-negative number');
            this[o] = e.max ||
            1 / 0;
            const t = e.length ||
            f;
            if (
              this[l] = 'function' != typeof t ? f : t,
              this[i] = e.stale ||
              !1,
              e.maxAge &&
              'number' != typeof e.maxAge
            ) throw new TypeError('maxAge must be a number');
            this[s] = e.maxAge ||
            0,
            this[c] = e.dispose,
            this[u] = e.noDisposeOnSet ||
            !1,
            this[m] = e.updateAgeOnGet ||
            !1,
            this.reset()
          }
          set max(e) {
            if ('number' != typeof e || e < 0) throw new TypeError('max must be a non-negative number');
            this[o] = e ||
            1 / 0,
            g(this)
          }
          get max() {
            return this[o]
          }
          set allowStale(e) {
            this[i] = !!e
          }
          get allowStale() {
            return this[i]
          }
          set maxAge(e) {
            if ('number' != typeof e) throw new TypeError('maxAge must be a non-negative number');
            this[s] = e,
            g(this)
          }
          get maxAge() {
            return this[s]
          }
          set lengthCalculator(e) {
            'function' != typeof e &&
            (e = f),
            e !== this[l] &&
            (
              this[l] = e,
              this[n] = 0,
              this[p].forEach((e => {
                e.length = this[l](e.value, e.key),
                this[n] += e.length
              }))
            ),
            g(this)
          }
          get lengthCalculator() {
            return this[l]
          }
          get length() {
            return this[n]
          }
          get itemCount() {
            return this[p].length
          }
          rforEach(e, t) {
            t = t ||
            this;
            for (let r = this[p].tail; null !== r; ) {
              const a = r.prev;
              C(this, e, r, t),
              r = a
            }
          }
          forEach(e, t) {
            t = t ||
            this;
            for (let r = this[p].head; null !== r; ) {
              const a = r.next;
              C(this, e, r, t),
              r = a
            }
          }
          keys() {
            return this[p].toArray().map((e => e.key))
          }
          values() {
            return this[p].toArray().map((e => e.value))
          }
          reset() {
            this[c] &&
            this[p] &&
            this[p].length &&
            this[p].forEach((e => this[c](e.key, e.value))),
            this[d] = new Map,
            this[p] = new a,
            this[n] = 0
          }
          dump() {
            return this[p].map((e => !b(this, e) && {
              k: e.key,
              v: e.value,
              e: e.now + (e.maxAge || 0)
            })).toArray().filter((e => e))
          }
          dumpLru() {
            return this[p]
          }
          set(e, t, r) {
            if ((r = r || this[s]) && 'number' != typeof r) throw new TypeError('maxAge must be a number');
            const a = r ? Date.now() : 0,
            i = this[l](t, e);
            if (this[d].has(e)) {
              if (i > this[o]) return k(this, this[d].get(e)),
              !1;
              const l = this[d].get(e).value;
              return this[c] &&
              (this[u] || this[c](e, l.value)),
              l.now = a,
              l.maxAge = r,
              l.value = t,
              this[n] += i - l.length,
              l.length = i,
              this.get(e),
              g(this),
              !0
            }
            const m = new E(e, t, i, a, r);
            return m.length > this[o] ? (this[c] && this[c](e, t), !1) : (
              this[n] += m.length,
              this[p].unshift(m),
              this[d].set(e, this[p].head),
              g(this),
              !0
            )
          }
          has(e) {
            if (!this[d].has(e)) return !1;
            const t = this[d].get(e).value;
            return !b(this, t)
          }
          get(e) {
            return h(this, e, !0)
          }
          peek(e) {
            return h(this, e, !1)
          }
          pop() {
            const e = this[p].tail;
            return e ? (k(this, e), e.value) : null
          }
          del(e) {
            k(this, this[d].get(e))
          }
          load(e) {
            this.reset();
            const t = Date.now();
            for (let r = e.length - 1; r >= 0; r--) {
              const a = e[r],
              o = a.e ||
              0;
              if (0 === o) this.set(a.k, a.v);
               else {
                const e = o - t;
                e > 0 &&
                this.set(a.k, a.v, e)
              }
            }
          }
          prune() {
            this[d].forEach(((e, t) => h(this, t, !1)))
          }
        }
      },
      6409: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => a
        });
        const a = {
          placeholder: 'NisihrgiIKl_knpYJtfg',
          pulse: 'R2i0K45dEF157drbVRPI'
        }
      },
      3468: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => a
        });
        const a = {
          global: '_fUXxnSp5pagKBp9gSN7'
        }
      },
      3171: e => {
        var t = 1000,
        r = 60 * t,
        a = 60 * r,
        o = 24 * a,
        n = 7 * o,
        l = 365.25 * o;
        function i(e, t, r, a) {
          var o = t >= 1.5 * r;
          return Math.round(e / r) + ' ' + a + (o ? 's' : '')
        }
        e.exports = function (e, s) {
          s = s ||
          {
          };
          var c = typeof e;
          if ('string' === c && e.length > 0) return function (e) {
            if ((e = String(e)).length > 100) return;
            var i = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
            if (!i) return;
            var s = parseFloat(i[1]);
            switch ((i[2] || 'ms').toLowerCase()) {
              case 'years':
              case 'year':
              case 'yrs':
              case 'yr':
              case 'y':
                return s * l;
              case 'weeks':
              case 'week':
              case 'w':
                return s * n;
              case 'days':
              case 'day':
              case 'd':
                return s * o;
              case 'hours':
              case 'hour':
              case 'hrs':
              case 'hr':
              case 'h':
                return s * a;
              case 'minutes':
              case 'minute':
              case 'mins':
              case 'min':
              case 'm':
                return s * r;
              case 'seconds':
              case 'second':
              case 'secs':
              case 'sec':
              case 's':
                return s * t;
              case 'milliseconds':
              case 'millisecond':
              case 'msecs':
              case 'msec':
              case 'ms':
                return s;
              default:
                return
            }
          }(e);
          if ('number' === c && isFinite(e)) return s.long ? function (e) {
            var n = Math.abs(e);
            if (n >= o) return i(e, n, o, 'day');
            if (n >= a) return i(e, n, a, 'hour');
            if (n >= r) return i(e, n, r, 'minute');
            if (n >= t) return i(e, n, t, 'second');
            return e + ' ms'
          }(e) : function (e) {
            var n = Math.abs(e);
            if (n >= o) return Math.round(e / o) + 'd';
            if (n >= a) return Math.round(e / a) + 'h';
            if (n >= r) return Math.round(e / r) + 'm';
            if (n >= t) return Math.round(e / t) + 's';
            return e + 'ms'
          }(e);
          throw new Error(
            'val is not a non-empty string or a valid number. val=' + JSON.stringify(e)
          )
        }
      },
      9079: (e, t, r) => {
        const a = Symbol('SemVer ANY');
        class o {
          static get ANY() {
            return a
          }
          constructor(e, t) {
            if (t = n(t), e instanceof o) {
              if (e.loose === !!t.loose) return e;
              e = e.value
            }
            e = e.trim().split(/\s+/).join(' '),
            c('comparator', e, t),
            this.options = t,
            this.loose = !!t.loose,
            this.parse(e),
            this.semver === a ? this.value = '' : this.value = this.operator + this.semver.version,
            c('comp', this)
          }
          parse(e) {
            const t = this.options.loose ? l[i.COMPARATORLOOSE] : l[i.COMPARATOR],
            r = e.match(t);
            if (!r) throw new TypeError(`Invalid comparator: ${ e }`);
            this.operator = void 0 !== r[1] ? r[1] : '',
            '=' === this.operator &&
            (this.operator = ''),
            r[2] ? this.semver = new u(r[2], this.options.loose) : this.semver = a
          }
          toString() {
            return this.value
          }
          test(e) {
            if (
              c('Comparator.test', e, this.options.loose),
              this.semver === a ||
              e === a
            ) return !0;
            if ('string' == typeof e) try {
              e = new u(e, this.options)
            } catch (e) {
              return !1
            }
            return s(e, this.operator, this.semver, this.options)
          }
          intersects(e, t) {
            if (!(e instanceof o)) throw new TypeError('a Comparator is required');
            return '' === this.operator ? '' === this.value ||
            new p(e.value, t).test(this.value) : '' === e.operator ? '' === e.value ||
            new p(this.value, t).test(e.semver) : (
              !(t = n(t)).includePrerelease ||
              '<0.0.0-0' !== this.value &&
              '<0.0.0-0' !== e.value
            ) &&
            (
              !(
                !t.includePrerelease &&
                (
                  this.value.startsWith('<0.0.0') ||
                  e.value.startsWith('<0.0.0')
                )
              ) &&
              (
                !(!this.operator.startsWith('>') || !e.operator.startsWith('>')) ||
                (
                  !(!this.operator.startsWith('<') || !e.operator.startsWith('<')) ||
                  (
                    !(
                      this.semver.version !== e.semver.version ||
                      !this.operator.includes('=') ||
                      !e.operator.includes('=')
                    ) ||
                    (
                      !!(
                        s(this.semver, '<', e.semver, t) &&
                        this.operator.startsWith('>') &&
                        e.operator.startsWith('<')
                      ) ||
                      !!(
                        s(this.semver, '>', e.semver, t) &&
                        this.operator.startsWith('<') &&
                        e.operator.startsWith('>')
                      )
                    )
                  )
                )
              )
            )
          }
        }
        e.exports = o;
        const n = r(4916),
        {
          safeRe: l,
          t: i
        }
        = r(1037),
        s = r(6574),
        c = r(9262),
        u = r(8693),
        p = r(3538)
      },
      3538: (e, t, r) => {
        class a {
          constructor(e, t) {
            if (t = n(t), e instanceof a) return e.loose === !!t.loose &&
            e.includePrerelease === !!t.includePrerelease ? e : new a(e.raw, t);
            if (e instanceof l) return this.raw = e.value,
            this.set = [
              [e]
            ],
            this.format(),
            this;
            if (
              this.options = t,
              this.loose = !!t.loose,
              this.includePrerelease = !!t.includePrerelease,
              this.raw = e.trim().split(/\s+/).join(' '),
              this.set = this.raw.split('||').map((e => this.parseRange(e))).filter((e => e.length)),
              !this.set.length
            ) throw new TypeError(`Invalid SemVer Range: ${ this.raw }`);
            if (this.set.length > 1) {
              const e = this.set[0];
              if (this.set = this.set.filter((e => !b(e[0]))), 0 === this.set.length) this.set = [
                e
              ];
               else if (this.set.length > 1) for (const e of this.set) if (1 === e.length && g(e[0])) {
                this.set = [
                  e
                ];
                break
              }
            }
            this.format()
          }
          format() {
            return this.range = this.set.map((e => e.join(' ').trim())).join('||').trim(),
            this.range
          }
          toString() {
            return this.range
          }
          parseRange(e) {
            const t = ((this.options.includePrerelease && f) | (this.options.loose && h)) + ':' + e,
            r = o.get(t);
            if (r) return r;
            const a = this.options.loose,
            n = a ? c[u.HYPHENRANGELOOSE] : c[u.HYPHENRANGE];
            e = e.replace(n, I(this.options.includePrerelease)),
            i('hyphen replace', e),
            e = e.replace(c[u.COMPARATORTRIM], p),
            i('comparator trim', e);
            let s = (e = (e = e.replace(c[u.TILDETRIM], d)).replace(c[u.CARETTRIM], m)).split(' ').map((e => E(e, this.options))).join(' ').split(/\s+/).map((e => A(e, this.options)));
            a &&
            (
              s = s.filter(
                (
                  e => (
                    i('loose invalid filter', e, this.options),
                    !!e.match(c[u.COMPARATORLOOSE])
                  )
                )
              )
            ),
            i('range list', s);
            const g = new Map,
            k = s.map((e => new l(e, this.options)));
            for (const e of k) {
              if (b(e)) return [e];
              g.set(e.value, e)
            }
            g.size > 1 &&
            g.has('') &&
            g.delete('');
            const C = [
              ...g.values()
            ];
            return o.set(t, C),
            C
          }
          intersects(e, t) {
            if (!(e instanceof a)) throw new TypeError('a Range is required');
            return this.set.some(
              (
                r => k(r, t) &&
                e.set.some((e => k(e, t) && r.every((r => e.every((e => r.intersects(e, t)))))))
              )
            )
          }
          test(e) {
            if (!e) return !1;
            if ('string' == typeof e) try {
              e = new s(e, this.options)
            } catch (e) {
              return !1
            }
            for (let t = 0; t < this.set.length; t++) if (B(this.set[t], e, this.options)) return !0;
            return !1
          }
        }
        e.exports = a;
        const o = new (r(2746)) ({
          max: 1000
        }),
        n = r(4916),
        l = r(9079),
        i = r(9262),
        s = r(8693),
        {
          safeRe: c,
          t: u,
          comparatorTrimReplace: p,
          tildeTrimReplace: d,
          caretTrimReplace: m
        }
        = r(1037),
        {
          FLAG_INCLUDE_PRERELEASE: f,
          FLAG_LOOSE: h
        }
        = r(581),
        b = e => '<0.0.0-0' === e.value,
        g = e => '' === e.value,
        k = (e, t) => {
          let r = !0;
          const a = e.slice();
          let o = a.pop();
          for (; r && a.length; ) r = a.every((e => o.intersects(e, t))),
          o = a.pop();
          return r
        },
        E = (e, t) => (
          i('comp', e, t),
          e = j(e, t),
          i('caret', e),
          e = v(e, t),
          i('tildes', e),
          e = w(e, t),
          i('xrange', e),
          e = S(e, t),
          i('stars', e),
          e
        ),
        C = e => !e ||
        'x' === e.toLowerCase() ||
        '*' === e,
        v = (e, t) => e.trim().split(/\s+/).map((e => R(e, t))).join(' '),
        R = (e, t) => {
          const r = t.loose ? c[u.TILDELOOSE] : c[u.TILDE];
          return e.replace(
            r,
            (
              (t, r, a, o, n) => {
                let l;
                return i('tilde', e, t, r, a, o, n),
                C(r) ? l = '' : C(a) ? l = `>=${ r }.0.0 <${ + r + 1 }.0.0-0` : C(o) ? l = `>=${ r }.${ a }.0 <${ r }.${ + a + 1 }.0-0` : n ? (
                  i('replaceTilde pr', n),
                  l = `>=${ r }.${ a }.${ o }-${ n } <${ r }.${ + a + 1 }.0-0`
                ) : l = `>=${ r }.${ a }.${ o } <${ r }.${ + a + 1 }.0-0`,
                i('tilde return', l),
                l
              }
            )
          )
        },
        j = (e, t) => e.trim().split(/\s+/).map((e => y(e, t))).join(' '),
        y = (e, t) => {
          i('caret', e, t);
          const r = t.loose ? c[u.CARETLOOSE] : c[u.CARET],
          a = t.includePrerelease ? '-0' : '';
          return e.replace(
            r,
            (
              (t, r, o, n, l) => {
                let s;
                return i('caret', e, t, r, o, n, l),
                C(r) ? s = '' : C(o) ? s = `>=${ r }.0.0${ a } <${ + r + 1 }.0.0-0` : C(n) ? s = '0' === r ? `>=${ r }.${ o }.0${ a } <${ r }.${ + o + 1 }.0-0` : `>=${ r }.${ o }.0${ a } <${ + r + 1 }.0.0-0` : l ? (
                  i('replaceCaret pr', l),
                  s = '0' === r ? '0' === o ? `>=${ r }.${ o }.${ n }-${ l } <${ r }.${ o }.${ + n + 1 }-0` : `>=${ r }.${ o }.${ n }-${ l } <${ r }.${ + o + 1 }.0-0` : `>=${ r }.${ o }.${ n }-${ l } <${ + r + 1 }.0.0-0`
                ) : (
                  i('no pr'),
                  s = '0' === r ? '0' === o ? `>=${ r }.${ o }.${ n }${ a } <${ r }.${ o }.${ + n + 1 }-0` : `>=${ r }.${ o }.${ n }${ a } <${ r }.${ + o + 1 }.0-0` : `>=${ r }.${ o }.${ n } <${ + r + 1 }.0.0-0`
                ),
                i('caret return', s),
                s
              }
            )
          )
        },
        w = (e, t) => (
          i('replaceXRanges', e, t),
          e.split(/\s+/).map((e => x(e, t))).join(' ')
        ),
        x = (e, t) => {
          e = e.trim();
          const r = t.loose ? c[u.XRANGELOOSE] : c[u.XRANGE];
          return e.replace(
            r,
            (
              (r, a, o, n, l, s) => {
                i('xRange', e, r, a, o, n, l, s);
                const c = C(o),
                u = c ||
                C(n),
                p = u ||
                C(l),
                d = p;
                return '=' === a &&
                d &&
                (a = ''),
                s = t.includePrerelease ? '-0' : '',
                c ? r = '>' === a ||
                '<' === a ? '<0.0.0-0' : '*' : a &&
                d ? (
                  u &&
                  (n = 0),
                  l = 0,
                  '>' === a ? (a = '>=', u ? (o = + o + 1, n = 0, l = 0) : (n = + n + 1, l = 0)) : '<=' === a &&
                  (a = '<', u ? o = + o + 1 : n = + n + 1),
                  '<' === a &&
                  (s = '-0'),
                  r = `${ a + o }.${ n }.${ l }${ s }`
                ) : u ? r = `>=${ o }.0.0${ s } <${ + o + 1 }.0.0-0` : p &&
                (r = `>=${ o }.${ n }.0${ s } <${ o }.${ + n + 1 }.0-0`),
                i('xRange return', r),
                r
              }
            )
          )
        },
        S = (e, t) => (i('replaceStars', e, t), e.trim().replace(c[u.STAR], '')),
        A = (e, t) => (
          i('replaceGTE0', e, t),
          e.trim().replace(c[t.includePrerelease ? u.GTE0PRE : u.GTE0], '')
        ),
        I = e => (t, r, a, o, n, l, i, s, c, u, p, d, m) => `${ r = C(a) ? '' : C(o) ? `>=${ a }.0.0${ e ? '-0' : '' }` : C(n) ? `>=${ a }.${ o }.0${ e ? '-0' : '' }` : l ? `>=${ r }` : `>=${ r }${ e ? '-0' : '' }` } ${ s = C(c) ? '' : C(u) ? `<${ + c + 1 }.0.0-0` : C(p) ? `<${ c }.${ + u + 1 }.0-0` : d ? `<=${ c }.${ u }.${ p }-${ d }` : e ? `<${ c }.${ u }.${ + p + 1 }-0` : `<=${ s }` }`.trim(),
        B = (e, t, r) => {
          for (let r = 0; r < e.length; r++) if (!e[r].test(t)) return !1;
          if (t.prerelease.length && !r.includePrerelease) {
            for (let r = 0; r < e.length; r++) if (
              i(e[r].semver),
              e[r].semver !== l.ANY &&
              e[r].semver.prerelease.length > 0
            ) {
              const a = e[r].semver;
              if (a.major === t.major && a.minor === t.minor && a.patch === t.patch) return !0
            }
            return !1
          }
          return !0
        }
      },
      8693: (e, t, r) => {
        const a = r(9262),
        {
          MAX_LENGTH: o,
          MAX_SAFE_INTEGER: n
        }
        = r(581),
        {
          safeRe: l,
          t: i
        }
        = r(1037),
        s = r(4916),
        {
          compareIdentifiers: c
        }
        = r(3546);
        class u {
          constructor(e, t) {
            if (t = s(t), e instanceof u) {
              if (
                e.loose === !!t.loose &&
                e.includePrerelease === !!t.includePrerelease
              ) return e;
              e = e.version
            } else if ('string' != typeof e) throw new TypeError(`Invalid version. Must be a string. Got type "${ typeof e }".`);
            if (e.length > o) throw new TypeError(`version is longer than ${ o } characters`);
            a('SemVer', e, t),
            this.options = t,
            this.loose = !!t.loose,
            this.includePrerelease = !!t.includePrerelease;
            const r = e.trim().match(t.loose ? l[i.LOOSE] : l[i.FULL]);
            if (!r) throw new TypeError(`Invalid Version: ${ e }`);
            if (
              this.raw = e,
              this.major = + r[1],
              this.minor = + r[2],
              this.patch = + r[3],
              this.major > n ||
              this.major < 0
            ) throw new TypeError('Invalid major version');
            if (this.minor > n || this.minor < 0) throw new TypeError('Invalid minor version');
            if (this.patch > n || this.patch < 0) throw new TypeError('Invalid patch version');
            r[4] ? this.prerelease = r[4].split('.').map(
              (
                e => {
                  if (/^[0-9]+$/.test(e)) {
                    const t = + e;
                    if (t >= 0 && t < n) return t
                  }
                  return e
                }
              )
            ) : this.prerelease = [],
            this.build = r[5] ? r[5].split('.') : [],
            this.format()
          }
          format() {
            return this.version = `${ this.major }.${ this.minor }.${ this.patch }`,
            this.prerelease.length &&
            (this.version += `-${ this.prerelease.join('.') }`),
            this.version
          }
          toString() {
            return this.version
          }
          compare(e) {
            if (
              a('SemVer.compare', this.version, this.options, e),
              !(e instanceof u)
            ) {
              if ('string' == typeof e && e === this.version) return 0;
              e = new u(e, this.options)
            }
            return e.version === this.version ? 0 : this.compareMain(e) ||
            this.comparePre(e)
          }
          compareMain(e) {
            return e instanceof u ||
            (e = new u(e, this.options)),
            c(this.major, e.major) ||
            c(this.minor, e.minor) ||
            c(this.patch, e.patch)
          }
          comparePre(e) {
            if (
              e instanceof u ||
              (e = new u(e, this.options)),
              this.prerelease.length &&
              !e.prerelease.length
            ) return - 1;
            if (!this.prerelease.length && e.prerelease.length) return 1;
            if (!this.prerelease.length && !e.prerelease.length) return 0;
            let t = 0;
            do {
              const r = this.prerelease[t],
              o = e.prerelease[t];
              if (a('prerelease compare', t, r, o), void 0 === r && void 0 === o) return 0;
              if (void 0 === o) return 1;
              if (void 0 === r) return - 1;
              if (r !== o) return c(r, o)
            } while (++t)
          }
          compareBuild(e) {
            e instanceof u ||
            (e = new u(e, this.options));
            let t = 0;
            do {
              const r = this.build[t],
              o = e.build[t];
              if (a('prerelease compare', t, r, o), void 0 === r && void 0 === o) return 0;
              if (void 0 === o) return 1;
              if (void 0 === r) return - 1;
              if (r !== o) return c(r, o)
            } while (++t)
          }
          inc(e, t, r) {
            switch (e) {
              case 'premajor':
                this.prerelease.length = 0,
                this.patch = 0,
                this.minor = 0,
                this.major++,
                this.inc('pre', t, r);
                break;
              case 'preminor':
                this.prerelease.length = 0,
                this.patch = 0,
                this.minor++,
                this.inc('pre', t, r);
                break;
              case 'prepatch':
                this.prerelease.length = 0,
                this.inc('patch', t, r),
                this.inc('pre', t, r);
                break;
              case 'prerelease':
                0 === this.prerelease.length &&
                this.inc('patch', t, r),
                this.inc('pre', t, r);
                break;
              case 'major':
                0 === this.minor &&
                0 === this.patch &&
                0 !== this.prerelease.length ||
                this.major++,
                this.minor = 0,
                this.patch = 0,
                this.prerelease = [];
                break;
              case 'minor':
                0 === this.patch &&
                0 !== this.prerelease.length ||
                this.minor++,
                this.patch = 0,
                this.prerelease = [];
                break;
              case 'patch':
                0 === this.prerelease.length &&
                this.patch++,
                this.prerelease = [];
                break;
              case 'pre':
                {
                  const e = Number(r) ? 1 : 0;
                  if (!t && !1 === r) throw new Error('invalid increment argument: identifier is empty');
                  if (0 === this.prerelease.length) this.prerelease = [
                    e
                  ];
                   else {
                    let a = this.prerelease.length;
                    for (; --a >= 0; ) 'number' == typeof this.prerelease[a] &&
                    (this.prerelease[a]++, a = - 2);
                    if ( - 1 === a) {
                      if (t === this.prerelease.join('.') && !1 === r) throw new Error('invalid increment argument: identifier already exists');
                      this.prerelease.push(e)
                    }
                  }
                  if (t) {
                    let a = [
                      t,
                      e
                    ];
                    !1 === r &&
                    (a = [
                      t
                    ]),
                    0 === c(this.prerelease[0], t) ? isNaN(this.prerelease[1]) &&
                    (this.prerelease = a) : this.prerelease = a
                  }
                  break
                }
              default:
                throw new Error(`invalid increment argument: ${ e }`)
            }
            return this.raw = this.format(),
            this.build.length &&
            (this.raw += `+${ this.build.join('.') }`),
            this
          }
        }
        e.exports = u
      },
      881: (e, t, r) => {
        const a = r(2323);
        e.exports = (e, t) => {
          const r = a(e.trim().replace(/^[=v]+/, ''), t);
          return r ? r.version : null
        }
      },
      6574: (e, t, r) => {
        const a = r(6825),
        o = r(525),
        n = r(8586),
        l = r(3408),
        i = r(8546),
        s = r(6123);
        e.exports = (e, t, r, c) => {
          switch (t) {
            case '===':
              return 'object' == typeof e &&
              (e = e.version),
              'object' == typeof r &&
              (r = r.version),
              e === r;
            case '!==':
              return 'object' == typeof e &&
              (e = e.version),
              'object' == typeof r &&
              (r = r.version),
              e !== r;
            case '':
            case '=':
            case '==':
              return a(e, r, c);
            case '!=':
              return o(e, r, c);
            case '>':
              return n(e, r, c);
            case '>=':
              return l(e, r, c);
            case '<':
              return i(e, r, c);
            case '<=':
              return s(e, r, c);
            default:
              throw new TypeError(`Invalid operator: ${ t }`)
          }
        }
      },
      6171: (e, t, r) => {
        const a = r(8693),
        o = r(2323),
        {
          safeRe: n,
          t: l
        }
        = r(1037);
        e.exports = (e, t) => {
          if (e instanceof a) return e;
          if ('number' == typeof e && (e = String(e)), 'string' != typeof e) return null;
          let r = null;
          if ((t = t || {
          }).rtl) {
            let t;
            for (
              ;
              (t = n[l.COERCERTL].exec(e)) &&
              (!r || r.index + r[0].length !== e.length);
            ) r &&
            t.index + t[0].length === r.index + r[0].length ||
            (r = t),
            n[l.COERCERTL].lastIndex = t.index + t[1].length + t[2].length;
            n[l.COERCERTL].lastIndex = - 1
          } else r = e.match(n[l.COERCE]);
          return null === r ? null : o(`${ r[2] }.${ r[3] ||
          '0' }.${ r[4] ||
          '0' }`, t)
        }
      },
      1310: (e, t, r) => {
        const a = r(8693);
        e.exports = (e, t, r) => {
          const o = new a(e, r),
          n = new a(t, r);
          return o.compare(n) ||
          o.compareBuild(n)
        }
      },
      4773: (e, t, r) => {
        const a = r(256);
        e.exports = (e, t) => a(e, t, !0)
      },
      256: (e, t, r) => {
        const a = r(8693);
        e.exports = (e, t, r) => new a(e, r).compare(new a(t, r))
      },
      6690: (e, t, r) => {
        const a = r(2323);
        e.exports = (e, t) => {
          const r = a(e, null, !0),
          o = a(t, null, !0),
          n = r.compare(o);
          if (0 === n) return null;
          const l = n > 0,
          i = l ? r : o,
          s = l ? o : r,
          c = !!i.prerelease.length;
          if (!!s.prerelease.length && !c) return s.patch ||
          s.minor ? i.patch ? 'patch' : i.minor ? 'minor' : 'major' : 'major';
          const u = c ? 'pre' : '';
          return r.major !== o.major ? u + 'major' : r.minor !== o.minor ? u + 'minor' : r.patch !== o.patch ? u + 'patch' : 'prerelease'
        }
      },
      6825: (e, t, r) => {
        const a = r(256);
        e.exports = (e, t, r) => 0 === a(e, t, r)
      },
      8586: (e, t, r) => {
        const a = r(256);
        e.exports = (e, t, r) => a(e, t, r) > 0
      },
      3408: (e, t, r) => {
        const a = r(256);
        e.exports = (e, t, r) => a(e, t, r) >= 0
      },
      3469: (e, t, r) => {
        const a = r(8693);
        e.exports = (e, t, r, o, n) => {
          'string' == typeof r &&
          (n = o, o = r, r = void 0);
          try {
            return new a(e instanceof a ? e.version : e, r).inc(t, o, n).version
          } catch (e) {
            return null
          }
        }
      },
      8546: (e, t, r) => {
        const a = r(256);
        e.exports = (e, t, r) => a(e, t, r) < 0
      },
      6123: (e, t, r) => {
        const a = r(256);
        e.exports = (e, t, r) => a(e, t, r) <= 0
      },
      651: (e, t, r) => {
        const a = r(8693);
        e.exports = (e, t) => new a(e, t).major
      },
      3857: (e, t, r) => {
        const a = r(8693);
        e.exports = (e, t) => new a(e, t).minor
      },
      525: (e, t, r) => {
        const a = r(256);
        e.exports = (e, t, r) => 0 !== a(e, t, r)
      },
      2323: (e, t, r) => {
        const a = r(8693);
        e.exports = (e, t, r = !1) => {
          if (e instanceof a) return e;
          try {
            return new a(e, t)
          } catch (e) {
            if (!r) return null;
            throw e
          }
        }
      },
      3982: (e, t, r) => {
        const a = r(8693);
        e.exports = (e, t) => new a(e, t).patch
      },
      7665: (e, t, r) => {
        const a = r(2323);
        e.exports = (e, t) => {
          const r = a(e, t);
          return r &&
          r.prerelease.length ? r.prerelease : null
        }
      },
      8824: (e, t, r) => {
        const a = r(256);
        e.exports = (e, t, r) => a(t, e, r)
      },
      3135: (e, t, r) => {
        const a = r(1310);
        e.exports = (e, t) => e.sort(((e, r) => a(r, e, t)))
      },
      4938: (e, t, r) => {
        const a = r(3538);
        e.exports = (e, t, r) => {
          try {
            t = new a(t, r)
          } catch (e) {
            return !1
          }
          return t.test(e)
        }
      },
      3782: (e, t, r) => {
        const a = r(1310);
        e.exports = (e, t) => e.sort(((e, r) => a(e, r, t)))
      },
      5652: (e, t, r) => {
        const a = r(2323);
        e.exports = (e, t) => {
          const r = a(e, t);
          return r ? r.version : null
        }
      },
      5589: (e, t, r) => {
        const a = r(1037),
        o = r(581),
        n = r(8693),
        l = r(3546),
        i = r(2323),
        s = r(5652),
        c = r(881),
        u = r(3469),
        p = r(6690),
        d = r(651),
        m = r(3857),
        f = r(3982),
        h = r(7665),
        b = r(256),
        g = r(8824),
        k = r(4773),
        E = r(1310),
        C = r(3782),
        v = r(3135),
        R = r(8586),
        j = r(8546),
        y = r(6825),
        w = r(525),
        x = r(3408),
        S = r(6123),
        A = r(6574),
        I = r(6171),
        B = r(9079),
        N = r(3538),
        _ = r(4938),
        P = r(5559),
        T = r(3912),
        L = r(887),
        M = r(7124),
        F = r(3228),
        $ = r(2051),
        O = r(8118),
        Z = r(382),
        V = r(7445),
        H = r(9282),
        D = r(9910);
        e.exports = {
          parse: i,
          valid: s,
          clean: c,
          inc: u,
          diff: p,
          major: d,
          minor: m,
          patch: f,
          prerelease: h,
          compare: b,
          rcompare: g,
          compareLoose: k,
          compareBuild: E,
          sort: C,
          rsort: v,
          gt: R,
          lt: j,
          eq: y,
          neq: w,
          gte: x,
          lte: S,
          cmp: A,
          coerce: I,
          Comparator: B,
          Range: N,
          satisfies: _,
          toComparators: P,
          maxSatisfying: T,
          minSatisfying: L,
          minVersion: M,
          validRange: F,
          outside: $,
          gtr: O,
          ltr: Z,
          intersects: V,
          simplifyRange: H,
          subset: D,
          SemVer: n,
          re: a.re,
          src: a.src,
          tokens: a.t,
          SEMVER_SPEC_VERSION: o.SEMVER_SPEC_VERSION,
          RELEASE_TYPES: o.RELEASE_TYPES,
          compareIdentifiers: l.compareIdentifiers,
          rcompareIdentifiers: l.rcompareIdentifiers
        }
      },
      581: e => {
        const t = Number.MAX_SAFE_INTEGER ||
        9007199254740991;
        e.exports = {
          MAX_LENGTH: 256,
          MAX_SAFE_COMPONENT_LENGTH: 16,
          MAX_SAFE_INTEGER: t,
          RELEASE_TYPES: [
            'major',
            'premajor',
            'minor',
            'preminor',
            'patch',
            'prepatch',
            'prerelease'
          ],
          SEMVER_SPEC_VERSION: '2.0.0',
          FLAG_INCLUDE_PRERELEASE: 1,
          FLAG_LOOSE: 2
        }
      },
      9262: e => {
        const t = 'object' == typeof process &&
        process.env &&
        process.env.NODE_DEBUG &&
        /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error('SEMVER', ...e) : () => {
        };
        e.exports = t
      },
      3546: e => {
        const t = /^[0-9]+$/,
        r = (e, r) => {
          const a = t.test(e),
          o = t.test(r);
          return a &&
          o &&
          (e = + e, r = + r),
          e === r ? 0 : a &&
          !o ? - 1 : o &&
          !a ? 1 : e < r ? - 1 : 1
        };
        e.exports = {
          compareIdentifiers: r,
          rcompareIdentifiers: (e, t) => r(t, e)
        }
      },
      4916: e => {
        const t = Object.freeze({
          loose: !0
        }),
        r = Object.freeze({
        });
        e.exports = e => e ? 'object' != typeof e ? t : e : r
      },
      1037: (e, t, r) => {
        const {
          MAX_SAFE_COMPONENT_LENGTH: a
        }
        = r(581),
        o = r(9262),
        n = (t = e.exports = {}).re = [],
        l = t.safeRe = [],
        i = t.src = [],
        s = t.t = {};
        let c = 0;
        const u = (e, t, r) => {
          const a = t.split('\\s*').join('\\s{0,1}').split('\\s+').join('\\s'),
          u = c++;
          o(e, u, t),
          s[e] = u,
          i[u] = t,
          n[u] = new RegExp(t, r ? 'g' : void 0),
          l[u] = new RegExp(a, r ? 'g' : void 0)
        };
        u('NUMERICIDENTIFIER', '0|[1-9]\\d*'),
        u('NUMERICIDENTIFIERLOOSE', '[0-9]+'),
        u('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*'),
        u(
          'MAINVERSION',
          `(${ i[s.NUMERICIDENTIFIER] })\.(${ i[s.NUMERICIDENTIFIER] })\.(${ i[s.NUMERICIDENTIFIER] })`
        ),
        u(
          'MAINVERSIONLOOSE',
          `(${ i[s.NUMERICIDENTIFIERLOOSE] })\.(${ i[s.NUMERICIDENTIFIERLOOSE] })\.(${ i[s.NUMERICIDENTIFIERLOOSE] })`
        ),
        u(
          'PRERELEASEIDENTIFIER',
          `(?:${ i[s.NUMERICIDENTIFIER] }|${ i[s.NONNUMERICIDENTIFIER] })`
        ),
        u(
          'PRERELEASEIDENTIFIERLOOSE',
          `(?:${ i[s.NUMERICIDENTIFIERLOOSE] }|${ i[s.NONNUMERICIDENTIFIER] })`
        ),
        u(
          'PRERELEASE',
          `(?:-(${ i[s.PRERELEASEIDENTIFIER] }(?:\.${ i[s.PRERELEASEIDENTIFIER] })*))`
        ),
        u(
          'PRERELEASELOOSE',
          `(?:-?(${ i[s.PRERELEASEIDENTIFIERLOOSE] }(?:\.${ i[s.PRERELEASEIDENTIFIERLOOSE] })*))`
        ),
        u('BUILDIDENTIFIER', '[0-9A-Za-z-]+'),
        u(
          'BUILD',
          `(?:\+(${ i[s.BUILDIDENTIFIER] }(?:\.${ i[s.BUILDIDENTIFIER] })*))`
        ),
        u(
          'FULLPLAIN',
          `v?${ i[s.MAINVERSION] }${ i[s.PRERELEASE] }?${ i[s.BUILD] }?`
        ),
        u('FULL', `^${ i[s.FULLPLAIN] }$`),
        u(
          'LOOSEPLAIN',
          `[v=\s]*${ i[s.MAINVERSIONLOOSE] }${ i[s.PRERELEASELOOSE] }?${ i[s.BUILD] }?`
        ),
        u('LOOSE', `^${ i[s.LOOSEPLAIN] }$`),
        u('GTLT', '((?:<|>)?=?)'),
        u(
          'XRANGEIDENTIFIERLOOSE',
          `${ i[s.NUMERICIDENTIFIERLOOSE] }|x|X|\*`
        ),
        u('XRANGEIDENTIFIER', `${ i[s.NUMERICIDENTIFIER] }|x|X|\*`),
        u(
          'XRANGEPLAIN',
          `[v=\s]*(${ i[s.XRANGEIDENTIFIER] })(?:\.(${ i[s.XRANGEIDENTIFIER] })(?:\.(${ i[s.XRANGEIDENTIFIER] })(?:${ i[s.PRERELEASE] })?${ i[s.BUILD] }?)?)?`
        ),
        u(
          'XRANGEPLAINLOOSE',
          `[v=\s]*(${ i[s.XRANGEIDENTIFIERLOOSE] })(?:\.(${ i[s.XRANGEIDENTIFIERLOOSE] })(?:\.(${ i[s.XRANGEIDENTIFIERLOOSE] })(?:${ i[s.PRERELEASELOOSE] })?${ i[s.BUILD] }?)?)?`
        ),
        u('XRANGE', `^${ i[s.GTLT] }\s*${ i[s.XRANGEPLAIN] }$`),
        u('XRANGELOOSE', `^${ i[s.GTLT] }\s*${ i[s.XRANGEPLAINLOOSE] }$`),
        u(
          'COERCE',
          `(^|[^\d])(\d{1,${ a }})(?:\.(\d{1,${ a }}))?(?:\.(\d{1,${ a }}))?(?:$|[^\d])`
        ),
        u('COERCERTL', i[s.COERCE], !0),
        u('LONETILDE', '(?:~>?)'),
        u('TILDETRIM', `(\s*)${ i[s.LONETILDE] }\s+`, !0),
        t.tildeTrimReplace = '$1~',
        u('TILDE', `^${ i[s.LONETILDE] }${ i[s.XRANGEPLAIN] }$`),
        u('TILDELOOSE', `^${ i[s.LONETILDE] }${ i[s.XRANGEPLAINLOOSE] }$`),
        u('LONECARET', '(?:\\^)'),
        u('CARETTRIM', `(\s*)${ i[s.LONECARET] }\s+`, !0),
        t.caretTrimReplace = '$1^',
        u('CARET', `^${ i[s.LONECARET] }${ i[s.XRANGEPLAIN] }$`),
        u('CARETLOOSE', `^${ i[s.LONECARET] }${ i[s.XRANGEPLAINLOOSE] }$`),
        u(
          'COMPARATORLOOSE',
          `^${ i[s.GTLT] }\s*(${ i[s.LOOSEPLAIN] })$|^$`
        ),
        u('COMPARATOR', `^${ i[s.GTLT] }\s*(${ i[s.FULLPLAIN] })$|^$`),
        u(
          'COMPARATORTRIM',
          `(\s*)${ i[s.GTLT] }\s*(${ i[s.LOOSEPLAIN] }|${ i[s.XRANGEPLAIN] })`,
          !0
        ),
        t.comparatorTrimReplace = '$1$2$3',
        u(
          'HYPHENRANGE',
          `^\s*(${ i[s.XRANGEPLAIN] })\s+-\s+(${ i[s.XRANGEPLAIN] })\s*$`
        ),
        u(
          'HYPHENRANGELOOSE',
          `^\s*(${ i[s.XRANGEPLAINLOOSE] })\s+-\s+(${ i[s.XRANGEPLAINLOOSE] })\s*$`
        ),
        u('STAR', '(<|>)?=?\\s*\\*'),
        u('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$'),
        u('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$')
      },
      8118: (e, t, r) => {
        const a = r(2051);
        e.exports = (e, t, r) => a(e, t, '>', r)
      },
      7445: (e, t, r) => {
        const a = r(3538);
        e.exports = (e, t, r) => (e = new a(e, r), t = new a(t, r), e.intersects(t, r))
      },
      382: (e, t, r) => {
        const a = r(2051);
        e.exports = (e, t, r) => a(e, t, '<', r)
      },
      3912: (e, t, r) => {
        const a = r(8693),
        o = r(3538);
        e.exports = (e, t, r) => {
          let n = null,
          l = null,
          i = null;
          try {
            i = new o(t, r)
          } catch (e) {
            return null
          }
          return e.forEach((e => {
            i.test(e) &&
            (n && - 1 !== l.compare(e) || (n = e, l = new a(n, r)))
          })),
          n
        }
      },
      887: (e, t, r) => {
        const a = r(8693),
        o = r(3538);
        e.exports = (e, t, r) => {
          let n = null,
          l = null,
          i = null;
          try {
            i = new o(t, r)
          } catch (e) {
            return null
          }
          return e.forEach((e => {
            i.test(e) &&
            (n && 1 !== l.compare(e) || (n = e, l = new a(n, r)))
          })),
          n
        }
      },
      7124: (e, t, r) => {
        const a = r(8693),
        o = r(3538),
        n = r(8586);
        e.exports = (e, t) => {
          e = new o(e, t);
          let r = new a('0.0.0');
          if (e.test(r)) return r;
          if (r = new a('0.0.0-0'), e.test(r)) return r;
          r = null;
          for (let t = 0; t < e.set.length; ++t) {
            const o = e.set[t];
            let l = null;
            o.forEach(
              (
                e => {
                  const t = new a(e.semver.version);
                  switch (e.operator) {
                    case '>':
                      0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0),
                      t.raw = t.format();
                    case '':
                    case '>=':
                      l &&
                      !n(t, l) ||
                      (l = t);
                      break;
                    case '<':
                    case '<=':
                      break;
                    default:
                      throw new Error(`Unexpected operation: ${ e.operator }`)
                  }
                }
              )
            ),
            !l ||
            r &&
            !n(r, l) ||
            (r = l)
          }
          return r &&
          e.test(r) ? r : null
        }
      },
      2051: (e, t, r) => {
        const a = r(8693),
        o = r(9079),
        {
          ANY: n
        }
        = o,
        l = r(3538),
        i = r(4938),
        s = r(8586),
        c = r(8546),
        u = r(6123),
        p = r(3408);
        e.exports = (e, t, r, d) => {
          let m,
          f,
          h,
          b,
          g;
          switch (e = new a(e, d), t = new l(t, d), r) {
            case '>':
              m = s,
              f = u,
              h = c,
              b = '>',
              g = '>=';
              break;
            case '<':
              m = c,
              f = p,
              h = s,
              b = '<',
              g = '<=';
              break;
            default:
              throw new TypeError('Must provide a hilo val of "<" or ">"')
          }
          if (i(e, t, d)) return !1;
          for (let r = 0; r < t.set.length; ++r) {
            const a = t.set[r];
            let l = null,
            i = null;
            if (
              a.forEach(
                (
                  e => {
                    e.semver === n &&
                    (e = new o('>=0.0.0')),
                    l = l ||
                    e,
                    i = i ||
                    e,
                    m(e.semver, l.semver, d) ? l = e : h(e.semver, i.semver, d) &&
                    (i = e)
                  }
                )
              ),
              l.operator === b ||
              l.operator === g
            ) return !1;
            if ((!i.operator || i.operator === b) && f(e, i.semver)) return !1;
            if (i.operator === g && h(e, i.semver)) return !1
          }
          return !0
        }
      },
      9282: (e, t, r) => {
        const a = r(4938),
        o = r(256);
        e.exports = (e, t, r) => {
          const n = [];
          let l = null,
          i = null;
          const s = e.sort(((e, t) => o(e, t, r)));
          for (const e of s) {
            a(e, t, r) ? (i = e, l || (l = e)) : (i && n.push([l,
            i]), i = null, l = null)
          }
          l &&
          n.push([l,
          null]);
          const c = [];
          for (const [e,
          t]of n) e === t ? c.push(e) : t ||
          e !== s[0] ? t ? e === s[0] ? c.push(`<=${ t }`) : c.push(`${ e } - ${ t }`) : c.push(`>=${ e }`) : c.push('*');
          const u = c.join(' || '),
          p = 'string' == typeof t.raw ? t.raw : String(t);
          return u.length < p.length ? u : t
        }
      },
      9910: (e, t, r) => {
        const a = r(3538),
        o = r(9079),
        {
          ANY: n
        }
        = o,
        l = r(4938),
        i = r(256),
        s = [
          new o('>=0.0.0-0')
        ],
        c = [
          new o('>=0.0.0')
        ],
        u = (e, t, r) => {
          if (e === t) return !0;
          if (1 === e.length && e[0].semver === n) {
            if (1 === t.length && t[0].semver === n) return !0;
            e = r.includePrerelease ? s : c
          }
          if (1 === t.length && t[0].semver === n) {
            if (r.includePrerelease) return !0;
            t = c
          }
          const a = new Set;
          let o,
          u,
          m,
          f,
          h,
          b,
          g;
          for (const t of e) '>' === t.operator ||
          '>=' === t.operator ? o = p(o, t, r) : '<' === t.operator ||
          '<=' === t.operator ? u = d(u, t, r) : a.add(t.semver);
          if (a.size > 1) return null;
          if (o && u) {
            if (m = i(o.semver, u.semver, r), m > 0) return null;
            if (0 === m && ('>=' !== o.operator || '<=' !== u.operator)) return null
          }
          for (const e of a) {
            if (o && !l(e, String(o), r)) return null;
            if (u && !l(e, String(u), r)) return null;
            for (const a of t) if (!l(e, String(a), r)) return !1;
            return !0
          }
          let k = !(!u || r.includePrerelease || !u.semver.prerelease.length) &&
          u.semver,
          E = !(!o || r.includePrerelease || !o.semver.prerelease.length) &&
          o.semver;
          k &&
          1 === k.prerelease.length &&
          '<' === u.operator &&
          0 === k.prerelease[0] &&
          (k = !1);
          for (const e of t) {
            if (
              g = g ||
              '>' === e.operator ||
              '>=' === e.operator,
              b = b ||
              '<' === e.operator ||
              '<=' === e.operator,
              o
            ) if (
              E &&
              e.semver.prerelease &&
              e.semver.prerelease.length &&
              e.semver.major === E.major &&
              e.semver.minor === E.minor &&
              e.semver.patch === E.patch &&
              (E = !1),
              '>' === e.operator ||
              '>=' === e.operator
            ) {
              if (f = p(o, e, r), f === e && f !== o) return !1
            } else if ('>=' === o.operator && !l(o.semver, String(e), r)) return !1;
            if (u) if (
              k &&
              e.semver.prerelease &&
              e.semver.prerelease.length &&
              e.semver.major === k.major &&
              e.semver.minor === k.minor &&
              e.semver.patch === k.patch &&
              (k = !1),
              '<' === e.operator ||
              '<=' === e.operator
            ) {
              if (h = d(u, e, r), h === e && h !== u) return !1
            } else if ('<=' === u.operator && !l(u.semver, String(e), r)) return !1;
            if (!e.operator && (u || o) && 0 !== m) return !1
          }
          return !(o && b && !u && 0 !== m) &&
          (!(u && g && !o && 0 !== m) && (!E && !k))
        },
        p = (e, t, r) => {
          if (!e) return t;
          const a = i(e.semver, t.semver, r);
          return a > 0 ? e : a < 0 ||
          '>' === t.operator &&
          '>=' === e.operator ? t : e
        },
        d = (e, t, r) => {
          if (!e) return t;
          const a = i(e.semver, t.semver, r);
          return a < 0 ? e : a > 0 ||
          '<' === t.operator &&
          '<=' === e.operator ? t : e
        };
        e.exports = (e, t, r = {}) => {
          if (e === t) return !0;
          e = new a(e, r),
          t = new a(t, r);
          let o = !1;
          e: for (const a of e.set) {
            for (const e of t.set) {
              const t = u(a, e, r);
              if (o = o || null !== t, t) continue e
            }
            if (o) return !1
          }
          return !0
        }
      },
      5559: (e, t, r) => {
        const a = r(3538);
        e.exports = (e, t) => new a(e, t).set.map((e => e.map((e => e.value)).join(' ').trim().split(' ')))
      },
      3228: (e, t, r) => {
        const a = r(3538);
        e.exports = (e, t) => {
          try {
            return new a(e, t).range ||
            '*'
          } catch (e) {
            return null
          }
        }
      },
      6975: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => s
        });
        var a = r(1128);
        const o = r.n(a) () ('dops:analytics');
        let n,
        l;
        window._tkq = window._tkq ||
        [],
        window.ga = window.ga ||
        function () {
          (window.ga.q = window.ga.q || []).push(arguments)
        },
        window.ga.l = + new Date;
        const i = {
          initialize: function (e, t, r) {
            i.setUser(e, t),
            i.setSuperProps(r),
            i.identifyUser()
          },
          setGoogleAnalyticsEnabled: function (e, t = null) {
            this.googleAnalyticsEnabled = e,
            this.googleAnalyticsKey = t
          },
          setMcAnalyticsEnabled: function (e) {
            this.mcAnalyticsEnabled = e
          },
          setUser: function (e, t) {
            l = {
              ID: e,
              username: t
            }
          },
          setSuperProps: function (e) {
            n = e
          },
          assignSuperProps: function (e) {
            n = Object.assign(n || {
            }, e)
          },
          mc: {
            bumpStat: function (e, t) {
              const r = function (e, t) {
                let r = '';
                if ('object' == typeof e) {
                  for (const t in e) r += '&x_' + encodeURIComponent(t) + '=' + encodeURIComponent(e[t]);
                  o('Bumping stats %o', e)
                } else r = '&x_' + encodeURIComponent(e) + '=' + encodeURIComponent(t),
                o('Bumping stat "%s" in group "%s"', t, e);
                return r
              }(e, t);
              i.mcAnalyticsEnabled &&
              (
                (new Image).src = document.location.protocol + '//pixel.wp.com/g.gif?v=wpcom-no-pv' + r + '&t=' + Math.random()
              )
            },
            bumpStatWithPageView: function (e, t) {
              const r = function (e, t) {
                let r = '';
                if ('object' == typeof e) {
                  for (const t in e) r += '&' + encodeURIComponent(t) + '=' + encodeURIComponent(e[t]);
                  o('Built stats %o', e)
                } else r = '&' + encodeURIComponent(e) + '=' + encodeURIComponent(t),
                o('Built stat "%s" in group "%s"', t, e);
                return r
              }(e, t);
              i.mcAnalyticsEnabled &&
              (
                (new Image).src = document.location.protocol + '//pixel.wp.com/g.gif?v=wpcom' + r + '&t=' + Math.random()
              )
            }
          },
          pageView: {
            record: function (e, t) {
              i.tracks.recordPageView(e),
              i.ga.recordPageView(e, t)
            }
          },
          purchase: {
            record: function (e, t, r, a, o, n, l) {
              i.ga.recordPurchase(e, t, r, a, o, n, l)
            }
          },
          tracks: {
            recordEvent: function (e, t) {
              t = t ||
              {
              },
              0 === e.indexOf('akismet_') ||
              0 === e.indexOf('jetpack_') ? (
                n &&
                (o('- Super Props: %o', n), t = Object.assign(t, n)),
                o('Record event "%s" called with props %s', e, JSON.stringify(t)),
                window._tkq.push(['recordEvent',
                e,
                t])
              ) : o('- Event name must be prefixed by "akismet_" or "jetpack_"')
            },
            recordJetpackClick: function (e) {
              const t = 'object' == typeof e ? e : {
                target: e
              };
              i.tracks.recordEvent('jetpack_wpa_click', t)
            },
            recordPageView: function (e) {
              i.tracks.recordEvent('akismet_page_view', {
                path: e
              })
            },
            setOptOut: function (e) {
              o('Pushing setOptOut: %o', e),
              window._tkq.push(['setOptOut',
              e])
            }
          },
          ga: {
            initialized: !1,
            initialize: function () {
              let e = {};
              i.ga.initialized ||
              (
                l &&
                (e = {
                  userId: 'u-' + l.ID
                }),
                window.ga('create', this.googleAnalyticsKey, 'auto', e),
                i.ga.initialized = !0
              )
            },
            recordPageView: function (e, t) {
              i.ga.initialize(),
              o('Recording Page View ~ [URL: ' + e + '] [Title: ' + t + ']'),
              this.googleAnalyticsEnabled &&
              (
                window.ga('set', 'page', e),
                window.ga('send', {
                  hitType: 'pageview',
                  page: e,
                  title: t
                })
              )
            },
            recordEvent: function (e, t, r, a) {
              i.ga.initialize();
              let n = 'Recording Event ~ [Category: ' + e + '] [Action: ' + t + ']';
              void 0 !== r &&
              (n += ' [Option Label: ' + r + ']'),
              void 0 !== a &&
              (n += ' [Option Value: ' + a + ']'),
              o(n),
              this.googleAnalyticsEnabled &&
              window.ga('send', 'event', e, t, r, a)
            },
            recordPurchase: function (e, t, r, a, o, n, l) {
              window.ga('require', 'ecommerce'),
              window.ga('ecommerce:addTransaction', {
                id: e,
                revenue: a,
                currency: l
              }),
              window.ga('ecommerce:addItem', {
                id: e,
                name: t,
                sku: r,
                price: o,
                quantity: n
              }),
              window.ga('ecommerce:send')
            }
          },
          identifyUser: function () {
            l &&
            window._tkq.push(['identifyUser',
            l.ID,
            l.username])
          },
          setProperties: function (e) {
            window._tkq.push(['setProperties',
            e])
          },
          clearedIdentity: function () {
            window._tkq.push(['clearIdentity'])
          }
        },
        s = i
      },
      2636: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => s
        });
        var a = r(5235),
        o = r.n(a),
        n = r(9196),
        l = r.n(n),
        i = r(6409);
        const s = ({
          children: e = null,
          width: t = null,
          height: r = null,
          className: a = ''
        }) => l().createElement(
          'div',
          {
            className: o() (i.Z.placeholder, a),
            style: {
              width: t,
              height: r
            }
          },
          e
        )
      },
      8275: (e, t, r) => {
        'use strict';
        r.d(t, {
          ZP: () => d
        });
        var a = r(9196),
        o = r.n(a),
        n = r(3468);
        const l = {
          '--font-headline-medium': '48px',
          '--font-headline-small': '36px',
          '--font-title-medium': '24px',
          '--font-title-small': '20px',
          '--font-body': '16px',
          '--font-body-small': '14px',
          '--font-body-extra-small': '12px',
          '--font-title-large': 'var(--font-headline-small)',
          '--font-label': 'var(--font-body-extra-small)'
        },
        i = {
          '--jp-black': '#000000',
          '--jp-black-80': '#2c3338',
          '--jp-white': '#ffffff',
          '--jp-white-off': '#f9f9f6',
          '--jp-gray': '#dcdcde',
          '--jp-gray-0': '#F6F7F7',
          '--jp-gray-10': '#C3C4C7',
          '--jp-gray-20': '#A7AAAD',
          '--jp-gray-40': '#787C82',
          '--jp-gray-50': '#646970',
          '--jp-gray-60': '#50575E',
          '--jp-gray-70': '#3C434A',
          '--jp-gray-80': '#2C3338',
          '--jp-gray-90': '#1d2327',
          '--jp-gray-off': '#e2e2df',
          '--jp-red-0': '#F7EBEC',
          '--jp-red-5': '#FACFD2',
          '--jp-red-40': '#E65054',
          '--jp-red-50': '#D63638',
          '--jp-red-60': '#B32D2E',
          '--jp-red-70': '#8A2424',
          '--jp-red-80': '#691C1C',
          '--jp-red': '#d63639',
          '--jp-yellow-5': '#F5E6B3',
          '--jp-yellow-10': '#F2CF75',
          '--jp-yellow-20': '#F0C930',
          '--jp-yellow-30': '#DEB100',
          '--jp-yellow-40': '#C08C00',
          '--jp-yellow-50': '#9D6E00',
          '--jp-yellow-60': '#7D5600',
          '--jp-blue-20': '#68B3E8',
          '--jp-blue-40': '#1689DB',
          '--jp-pink': '#C9356E',
          '--jp-green-0': '#f0f2eb',
          '--jp-green-5': '#d0e6b8',
          '--jp-green-10': '#9dd977',
          '--jp-green-20': '#64ca43',
          '--jp-green-30': '#2fb41f',
          '--jp-green-40': '#069e08',
          '--jp-green-50': '#008710',
          '--jp-green-60': '#007117',
          '--jp-green-70': '#005b18',
          '--jp-green-80': '#004515',
          '--jp-green-90': '#003010',
          '--jp-green-100': '#001c09',
          '--jp-green': '#069e08',
          '--jp-green-primary': 'var( --jp-green-40 )',
          '--jp-green-secondary': 'var( --jp-green-30 )'
        },
        s = {
          '--jp-border-radius': '4px',
          '--jp-menu-border-height': '1px',
          '--jp-underline-thickness': '2px'
        },
        c = {
          '--spacing-base': '8px'
        },
        u = {},
        p = (e, t, r) => {
          const a = {
            ...l,
            ...i,
            ...s,
            ...c
          };
          for (const t in a) e.style.setProperty(t, a[t]);
          r &&
          e.classList.add(n.Z.global),
          t &&
          (u[t] = {
            provided: !0,
            root: e
          })
        },
        d = ({
          children: e = null,
          targetDom: t,
          id: r,
          withGlobalStyles: n = !0
        }) => {
          const l = (0, a.useRef) (),
          i = u?.[r]?.provided;
          return (0, a.useLayoutEffect) (
            (
              () => {
                if (!i) return t ? p(t, r, n) : void (l?.current && p(l.current, r, n))
              }
            ),
            [
              t,
              l,
              i,
              r,
              n
            ]
          ),
          t ? e : o().createElement('div', {
            ref: l
          }, e)
        }
      },
      3419: (e, t, r) => {
        'use strict';
        r.d(
          t,
          {
            OZ: () => n.Z,
            Pb: () => a.Z,
            T: () => l.Z,
            Ug: () => o.Ug,
            Wp: () => o.Wp,
            _D: () => i._D
          }
        );
        var a = r(148),
        o = r(9505),
        n = r(8052),
        l = (r(6714), r(354)),
        i = r(5404);
        r(1053),
        r(1380),
        r(6342),
        r(6959),
        r(9058)
      },
      6342: (e, t, r) => {
        'use strict';
        r(9196)
      },
      6959: (e, t, r) => {
        'use strict';
        r(9307)
      },
      148: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => o
        });
        const a = 'Jetpack_Editor_Initial_State';
        function o() {
          return 'object' == typeof window ? window?.[a] ?? null : null
        }
      },
      8052: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => o
        });
        var a = r(148);
        function o(e) {
          const t = (0, a.Z) (),
          r = t?.available_blocks?.[e]?.available ?? !1,
          o = t?.available_blocks?.[e]?.unavailable_reason ?? 'unknown';
          return {
            available: r,
            ...!r &&
            {
              details: t?.available_blocks?.[e]?.details ?? [],
              unavailableReason: o
            }
          }
        }
      },
      1053: (e, t, r) => {
        'use strict';
        var a = r(6975);
        r(9307);
        const {
          tracks: o
        }
        = a.Z,
        {
          recordEvent: n
        }
        = o
      },
      1380: (e, t, r) => {
        'use strict';
        r(6989),
        r(9307)
      },
      4166: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z$: () => s,
          ZP: () => d,
          rW: () => p
        });
        var a = r(9818),
        o = r(9505),
        n = r(2162),
        l = r(9058);
        const i = 'SET_JETPACK_MODULES';
        function * s() {
          if ((0, o.Wp) ()) return !0;
          try {
            yield c(!0);
            const e = yield(0, n.Bs) ();
            return yield p({
              data: e
            }),
            !0
          } catch (e) {
            const t = (0, a.select) (l.p).getJetpackModules();
            return yield p(t),
            !1
          } finally {
            yield c(!1)
          }
        }
        function c(e) {
          return p({
            isLoading: e
          })
        }
        function u(e) {
          return p({
            isUpdating: e
          })
        }
        function p(e) {
          return {
            type: i,
            options: e
          }
        }
        const d = {
          updateJetpackModuleStatus: function * (e) {
            try {
              const t = (0, a.select) (l.p).getJetpackModules();
              yield u(!0),
              t.data?.[e.name]?.activated !== e.active &&
              (yield p(t)),
              yield(0, n.zL) (e);
              const r = yield(0, n.Bs) ();
              return yield p({
                data: r
              }),
              !0
            } catch (e) {
              const t = (0, a.select) (l.p).getJetpackModules();
              return yield p(t),
              !1
            } finally {
              yield u(!1)
            }
          },
          setJetpackModules: p,
          fetchModules: s
        }
      },
      2162: (e, t, r) => {
        'use strict';
        r.d(t, {
          Bs: () => i,
          ZP: () => c,
          zL: () => s
        });
        var a = r(6989),
        o = r.n(a);
        const n = 'FETCH_JETPACK_MODULES',
        l = 'UPDATE_JETPACK_MODULE_STATUS',
        i = () => ({
          type: n
        }),
        s = e => ({
          type: l,
          settings: e
        }),
        c = {
          [
            n
          ]: function () {
            return o() ({
              path: '/jetpack/v4/module/all',
              method: 'GET'
            })
          },
          [
            l
          ]: function ({
            settings: e
          }) {
            return o() ({
              path: `/jetpack/v4/module/${ e.name }/active`,
              method: 'POST',
              data: {
                active: e.active
              }
            })
          }
        }
      },
      9058: (e, t, r) => {
        'use strict';
        r.d(t, {
          p: () => c
        });
        var a = r(9818),
        o = r(4166),
        n = r(2162),
        l = r(2469),
        i = r(5133),
        s = r(3524);
        const c = 'jetpack-modules',
        u = (0, a.createReduxStore) (
          c,
          {
            reducer: l.Z,
            actions: o.ZP,
            controls: n.ZP,
            resolvers: i.ZP,
            selectors: s.Z
          }
        );
        (0, a.register) (u)
      },
      2469: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => o
        });
        const a = {
          isLoading: !1,
          isUpdating: !1,
          data: {
          }
        },
        o = (e = a, t) => 'SET_JETPACK_MODULES' === t.type ? {
          ...e,
          ...t.options
        }
         : e
      },
      5133: (e, t, r) => {
        'use strict';
        r.d(t, {
          ZP: () => n
        });
        var a = r(4166),
        o = r(2162);
        const n = {
          getJetpackModules: function * () {
            try {
              const e = yield(0, o.Bs) ();
              if (e) return (0, a.rW) ({
                data: e
              })
            } catch (e) {
              console.error(e)
            }
          },
          isModuleActive: function () {
            return (0, a.Z$) ()
          }
        }
      },
      3524: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => o
        });
        var a = r(9505);
        const o = {
          getJetpackModules: e => e.data,
          isModuleActive: (e, t) => (0, a.Wp) () ||
          (e?.data?.[t]?.activated ?? !1),
          areModulesLoading: e => e.isLoading ?? !1,
          areModulesUpdating: e => e.isUpdating ?? !1
        }
      },
      5404: (e, t, r) => {
        'use strict';
        r.d(t, {
          _D: () => o
        });
        var a = r(5736);
        r(6483),
        r(2819);
        const __ = a.__;
        function o(e, t) {
          return 'missing_plan' === e &&
          t.required_plan
        }
        __('Upgrade your plan to use video covers', 'jetpack-forms'),
        __('Upgrade your plan to upload audio', 'jetpack-forms')
      },
      6714: (e, t, r) => {
        'use strict';
        r(8817)
      },
      9505: (e, t, r) => {
        'use strict';
        function a() {
          return 'object' == typeof window &&
          'string' == typeof window._currentSiteType ? window._currentSiteType : null
        }
        function o() {
          return 'simple' === a()
        }
        function n() {
          return 'atomic' === a()
        }
        r.d(t, {
          Ug: () => n,
          Wp: () => o
        })
      },
      354: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => l
        });
        var a = r(2674),
        o = r.n(a),
        n = r(4333);
        const l = e => (0, n.createHigherOrderComponent) (
          (
            t => r => React.createElement(
              t,
              o() ({
              }, r, {
                className: r.name === e ? 'has-warning is-interactive' : r.className
              })
            )
          ),
          'withHasWarningIsInteractiveClassNames'
        )
      },
      8003: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => o
        });
        var a = r(5736);
        const o = {
          subject: {
            type: 'string'
          },
          to: {
            type: 'string'
          },
          customThankyou: {
            type: 'string',
          default:
            ''
          },
          customThankyouHeading: {
            type: 'string',
          default:
            (0, a.__) ('Your message has been sent', 'jetpack-forms')
          },
          customThankyouMessage: {
            type: 'string',
          default:
            ''
          },
          customThankyouRedirect: {
            type: 'string',
          default:
            ''
          },
          jetpackCRM: {
            type: 'boolean',
          default:
            !0
          },
          formTitle: {
            type: 'string',
          default:
            ''
          },
          salesforceData: {
            type: 'object',
          default:
            {
              organizationId: '',
              sendToSalesforce: !1
            }
          }
        }
      },
      348: (e, t, r) => {
        'use strict';
        r.d(t, {
          N: () => w
        });
        var a = r(2175),
        o = r(4981),
        n = r(5609),
        l = r(9307),
        i = r(5736),
        s = r(2819),
        c = r(9775),
        u = r(1157),
        p = r(2304),
        d = r(3548),
        m = r(655),
        f = r(3616),
        h = r(3059),
        b = r(3644),
        g = r(7155),
        k = r(4697);
        const __ = i.__,
        _x = i._x,
        E = {
          category: 'contact-form',
          supports: {
            reusable: !1,
            html: !1
          },
          attributes: {
            label: {
              type: 'string',
            default:
              null
            },
            required: {
              type: 'boolean',
            default:
              !1
            },
            requiredText: {
              type: 'string'
            },
            options: {
              type: 'array',
            default:
              []
            },
            defaultValue: {
              type: 'string',
            default:
              ''
            },
            placeholder: {
              type: 'string',
            default:
              ''
            },
            id: {
              type: 'string',
            default:
              ''
            },
            width: {
              type: 'number',
            default:
              100
            },
            borderRadius: {
              type: 'number',
            default:
              ''
            },
            borderWidth: {
              type: 'number',
            default:
              ''
            },
            labelFontSize: {
              type: 'string'
            },
            fieldFontSize: {
              type: 'string'
            },
            lineHeight: {
              type: 'number'
            },
            labelLineHeight: {
              type: 'number'
            },
            inputColor: {
              type: 'string'
            },
            labelColor: {
              type: 'string'
            },
            fieldBackgroundColor: {
              type: 'string'
            },
            buttonBackgroundColor: {
              type: 'string'
            },
            buttonBorderRadius: {
              type: 'number',
            default:
              ''
            },
            buttonBorderWidth: {
              type: 'number',
            default:
              ''
            },
            borderColor: {
              type: 'string'
            },
            shareFieldAttributes: {
              type: 'boolean',
            default:
              !0
            }
          },
          transforms: {
            to: [
              {
                type: 'block',
                blocks: [
                  'jetpack/field-text'
                ],
                transform: e => (0, o.createBlock) ('jetpack/field-text', e)
              },
              {
                type: 'block',
                blocks: [
                  'jetpack/field-name'
                ],
                transform: e => (0, o.createBlock) ('jetpack/field-name', e)
              },
              {
                type: 'block',
                blocks: [
                  'jetpack/field-email'
                ],
                transform: e => (0, o.createBlock) ('jetpack/field-email', e)
              },
              {
                type: 'block',
                blocks: [
                  'jetpack/field-url'
                ],
                transform: e => (0, o.createBlock) ('jetpack/field-url', e)
              },
              {
                type: 'block',
                blocks: [
                  'jetpack/field-date'
                ],
                transform: e => (0, o.createBlock) ('jetpack/field-date', e)
              },
              {
                type: 'block',
                blocks: [
                  'jetpack/field-telephone'
                ],
                transform: e => (0, o.createBlock) ('jetpack/field-telephone', e)
              },
              {
                type: 'block',
                blocks: [
                  'jetpack/field-textarea'
                ],
                transform: e => (0, o.createBlock) ('jetpack/field-textarea', e)
              },
              {
                type: 'block',
                blocks: [
                  'jetpack/field-checkbox-multiple'
                ],
                transform: (e, t) => {
                  let r = [];
                  if ((0, s.isEmpty) (t)) e.options?.length &&
                  (
                    r = (0, s.map) (
                      e.options,
                      (
                        e => (0, o.createBlock) (
                          'jetpack/field-option-checkbox',
                          {
                            label: e,
                            fieldType: 'checkbox'
                          }
                        )
                      )
                    )
                  );
                   else {
                    const e = (0, s.filter) (t, (({
                      name: e
                    }) => (0, s.startsWith) (e, 'jetpack/field-option')));
                    r = (0, s.map) (
                      e,
                      (
                        e => (0, o.createBlock) (
                          'jetpack/field-option-checkbox',
                          {
                            label: e.attributes.label,
                            fieldType: 'checkbox'
                          }
                        )
                      )
                    )
                  }
                  return (0, o.createBlock) ('jetpack/field-checkbox-multiple', e, r)
                }
              },
              {
                type: 'block',
                blocks: [
                  'jetpack/field-radio'
                ],
                transform: (e, t) => {
                  let r = [];
                  if ((0, s.isEmpty) (t)) e.options?.length &&
                  (
                    r = (0, s.map) (
                      e.options,
                      (
                        e => (0, o.createBlock) ('jetpack/field-option-radio', {
                          label: e,
                          fieldType: 'radio'
                        })
                      )
                    )
                  );
                   else {
                    const e = (0, s.filter) (t, (({
                      name: e
                    }) => (0, s.startsWith) (e, 'jetpack/field-option')));
                    r = (0, s.map) (
                      e,
                      (
                        e => (0, o.createBlock) (
                          'jetpack/field-option-radio',
                          {
                            label: e.attributes.label,
                            fieldType: 'radio'
                          }
                        )
                      )
                    )
                  }
                  return (0, o.createBlock) ('jetpack/field-radio', e, r)
                }
              },
              {
                type: 'block',
                blocks: [
                  'jetpack/field-select'
                ],
                transform: (e, t) => {
                  if (!(0, s.isEmpty) (t)) {
                    const r = (0, s.filter) (t, (({
                      name: e
                    }) => (0, s.startsWith) (e, 'jetpack/field-option')));
                    e.options = (0, s.map) (r, (e => e.attributes.label))
                  }
                  return e.options = e.options?.length ? e.options : [
                    ''
                  ],
                  (0, o.createBlock) ('jetpack/field-select', e)
                }
              },
              {
                type: 'block',
                blocks: [
                  'jetpack/field-consent'
                ],
                transform: e => (0, o.createBlock) ('jetpack/field-consent', e)
              },
              {
                type: 'block',
                blocks: [
                  'jetpack/field-checkbox'
                ],
                transform: e => (0, o.createBlock) ('jetpack/field-checkbox', e)
              }
            ]
          },
          save: () => null,
          example: {
          }
        },
        C = {
          category: 'contact-form',
          edit: f.G,
          attributes: {
            label: {
              type: 'string'
            },
            fieldType: {
              enum: [
                'checkbox',
                'radio'
              ],
            default:
              'checkbox'
            }
          },
          supports: {
            reusable: !1,
            html: !1
          }
        },
        v = e => ({
          attributes: {
            ...E.attributes,
            label: {
              type: 'string',
            default:
              'checkbox' === e ? 'Choose several options' : 'Choose one option'
            }
          },
          migrate: t => {
            const r = `jetpack/field-option-${ e }`,
            a = (0, s.filter) (t.options, (e => !(0, s.isEmpty) ((0, s.trim) (e)))),
            n = (0, s.map) (a, (e => (0, o.createBlock) (r, {
              label: e
            })));
            return t.options = [],
            [
              t,
              n
            ]
          },
          isEligible: e => e.options &&
          (0, s.filter) (e.options, (e => !(0, s.isEmpty) ((0, s.trim) (e)))).length,
          save: () => null
        }),
        R = ({
          attributes: e,
          name: t
        }) => null === e.label ? (0, o.getBlockType) (t).title : e.label,
        j = e => t => (
          (0, g.mo) (t),
          React.createElement(
            c.Z,
            {
              clientId: t.clientId,
              type: e,
              label: R(t),
              required: t.attributes.required,
              requiredText: t.attributes.requiredText,
              setAttributes: t.setAttributes,
              isSelected: t.isSelected,
              defaultValue: t.attributes.defaultValue,
              placeholder: t.attributes.placeholder,
              id: t.attributes.id,
              width: t.attributes.width,
              attributes: t.attributes
            }
          )
        ),
        y = e => t => (
          (0, g.mo) (t),
          React.createElement(
            m.Z,
            {
              className: t.className,
              clientId: t.clientId,
              label: R(t),
              required: t.attributes.required,
              requiredText: t.attributes.requiredText,
              options: t.attributes.options,
              setAttributes: t.setAttributes,
              type: e,
              isSelected: t.isSelected,
              id: t.attributes.id,
              width: t.attributes.width,
              attributes: t.attributes
            }
          )
        ),
        w = [
          {
            name: 'field-text',
            settings: {
              ...E,
              title: __('Text Input Field', 'jetpack-forms'),
              description: __(
                'Collect short text responses from site visitors.',
                'jetpack-forms'
              ),
              icon: (0, k.Z) (
                React.createElement(
                  n.Path,
                  {
                    fill: (0, b.m) (),
                    d: 'M12 7H4V8.5H12V7ZM19.75 17.25V10.75H4.25V17.25H19.75ZM5.75 15.75V12.25H18.25V15.75H5.75Z'
                  }
                )
              ),
              edit: j('text'),
              attributes: {
                ...E.attributes,
                label: {
                  type: 'string',
                default:
                  'Text'
                }
              }
            }
          },
          {
            name: 'field-name',
            settings: {
              ...E,
              title: __('Name Field', 'jetpack-forms'),
              description: __('Collect the site visitor’s name.', 'jetpack-forms'),
              icon: (0, k.Z) (
                React.createElement(
                  n.Path,
                  {
                    fill: (0, b.m) (),
                    d: 'M8.25 11.5C9.63071 11.5 10.75 10.3807 10.75 9C10.75 7.61929 9.63071 6.5 8.25 6.5C6.86929 6.5 5.75 7.61929 5.75 9C5.75 10.3807 6.86929 11.5 8.25 11.5ZM8.25 10C8.80228 10 9.25 9.55228 9.25 9C9.25 8.44772 8.80228 8 8.25 8C7.69772 8 7.25 8.44772 7.25 9C7.25 9.55228 7.69772 10 8.25 10ZM13 15.5V17.5H11.5V15.5C11.5 14.8096 10.9404 14.25 10.25 14.25H6.25C5.55964 14.25 5 14.8096 5 15.5V17.5H3.5V15.5C3.5 13.9812 4.73122 12.75 6.25 12.75H10.25C11.7688 12.75 13 13.9812 13 15.5ZM20.5 11H14.5V9.5H20.5V11ZM20.5 14.5H14.5V13H20.5V14.5Z'
                  }
                )
              ),
              edit: j('text'),
              attributes: {
                ...E.attributes,
                label: {
                  type: 'string',
                default:
                  'Name'
                }
              }
            }
          },
          {
            name: 'field-email',
            settings: {
              ...E,
              title: __('Email Field', 'jetpack-forms'),
              keywords: [
                __('e-mail', 'jetpack-forms'),
                __('mail', 'jetpack-forms'),
                'email'
              ],
              description: __(
                'Collect email addresses from your visitors.',
                'jetpack-forms'
              ),
              icon: (0, k.Z) (
                React.createElement(
                  n.Path,
                  {
                    fill: (0, b.m) (),
                    fillRule: 'evenodd',
                    d: 'M5.5 8.41665V16C5.5 16.2761 5.72386 16.5 6 16.5H18C18.2761 16.5 18.5 16.2761 18.5 16V8.41633L11.9998 13.9879L5.5 8.41665ZM17.2642 7.5H6.73546L11.9998 12.0123L17.2642 7.5ZM6 6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H6Z'
                  }
                )
              ),
              edit: j('email'),
              attributes: {
                ...E.attributes,
                label: {
                  type: 'string',
                default:
                  'Email'
                }
              }
            }
          },
          {
            name: 'field-url',
            settings: {
              ...E,
              title: __('URL Field', 'jetpack-forms'),
              keywords: [
                'url',
                __('internet page', 'jetpack-forms'),
                'link'
              ],
              description: __(
                'Collect a website address from your site visitors.',
                'jetpack-forms'
              ),
              icon: (0, k.Z) (
                React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    n.Path,
                    {
                      fill: (0, b.m) (),
                      d: 'M4.47118 8.5H3V12.9489C3 14.4653 4.14479 15.5 5.94723 15.5C7.74479 15.5 8.88958 14.4653 8.88958 12.9489V8.5H7.4184V12.8059C7.4184 13.688 6.88742 14.265 5.94723 14.265C5.00216 14.265 4.47118 13.688 4.47118 12.8059V8.5Z'
                    }
                  ),
                  React.createElement(
                    n.Path,
                    {
                      fill: (0, b.m) (),
                      d: 'M11.5348 9.62534H12.7867C13.5175 9.62534 13.9754 10.0545 13.9754 10.7221C13.9754 11.404 13.5418 11.8188 12.8014 11.8188H11.5348V9.62534ZM11.5348 12.8631H12.7137L14.0241 15.3808H15.6901L14.2092 12.6485C15.0179 12.3386 15.4855 11.5756 15.4855 10.6935C15.4855 9.33447 14.5599 8.5 12.9426 8.5H10.0636V15.3808H11.5348V12.8631Z'
                    }
                  ),
                  React.createElement(
                    n.Path,
                    {
                      fill: (0, b.m) (),
                      d: 'M21 14.1887H17.9261V8.5H16.4549V15.3808H21V14.1887Z'
                    }
                  )
                )
              ),
              edit: j('url'),
              attributes: {
                ...E.attributes,
                label: {
                  type: 'string',
                default:
                  'URL'
                }
              }
            }
          },
          {
            name: 'field-date',
            settings: {
              ...E,
              title: __('Date Picker', 'jetpack-forms'),
              keywords: [
                __('Calendar', 'jetpack-forms'),
                _x('day month year', 'block search term', 'jetpack-forms')
              ],
              description: __(
                'Capture date information with a date picker.',
                'jetpack-forms'
              ),
              icon: (0, k.Z) (
                React.createElement(
                  n.Path,
                  {
                    fill: (0, b.m) (),
                    fillRule: 'evenodd',
                    d: 'M4.5 7H19.5V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V7ZM3 5V7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5ZM11 9.25H7V13.25H11V9.25Z'
                  }
                )
              ),
              edit: j('text'),
              attributes: {
                ...E.attributes,
                label: {
                  type: 'string',
                default:
                  'Date'
                }
              }
            }
          },
          {
            name: 'field-telephone',
            settings: {
              ...E,
              title: __('Phone Number Field', 'jetpack-forms'),
              keywords: [
                __('Phone', 'jetpack-forms'),
                __('Cellular phone', 'jetpack-forms'),
                __('Mobile', 'jetpack-forms')
              ],
              description: __('Collect phone numbers from site visitors.', 'jetpack-forms'),
              icon: (0, k.Z) (
                React.createElement(
                  n.Path,
                  {
                    fill: (0, b.m) (),
                    fillRule: 'evenodd',
                    d: 'M9 5.5H15C15.2761 5.5 15.5 5.72386 15.5 6V18C15.5 18.2761 15.2761 18.5 15 18.5H9C8.72386 18.5 8.5 18.2761 8.5 18V6C8.5 5.72386 8.72386 5.5 9 5.5ZM7 6C7 4.89543 7.89543 4 9 4H15C16.1046 4 17 4.89543 17 6V18C17 19.1046 16.1046 20 15 20H9C7.89543 20 7 19.1046 7 18V6ZM13 16H11V17.5H13V16Z'
                  }
                )
              ),
              edit: j('tel'),
              attributes: {
                ...E.attributes,
                label: {
                  type: 'string',
                default:
                  'Phone'
                }
              }
            }
          },
          {
            name: 'field-textarea',
            settings: {
              ...E,
              title: __('Multi-line Text Field', 'jetpack-forms'),
              keywords: [
                __('Textarea', 'jetpack-forms'),
                'textarea',
                __('Multiline text', 'jetpack-forms')
              ],
              description: __(
                'Capture longform text responses from site visitors.',
                'jetpack-forms'
              ),
              icon: (0, k.Z) (
                React.createElement(
                  n.Path,
                  {
                    fill: (0, b.m) (),
                    d: 'M20 5H4V6.5H20V5ZM5.5 11.5H18.5V18.5H5.5V11.5ZM20 20V10H4V20H20Z'
                  }
                )
              ),
              edit: e => (
                (0, g.mo) (e),
                React.createElement(
                  h.Z,
                  {
                    clientId: e.clientId,
                    label: e.attributes.label,
                    required: e.attributes.required,
                    requiredText: e.attributes.requiredText,
                    attributes: e.attributes,
                    setAttributes: e.setAttributes,
                    isSelected: e.isSelected,
                    defaultValue: e.attributes.defaultValue,
                    placeholder: e.attributes.placeholder,
                    id: e.attributes.id,
                    width: e.attributes.width
                  }
                )
              ),
              attributes: {
                ...E.attributes
              }
            }
          },
          {
            name: 'field-checkbox',
            settings: {
              ...E,
              title: __('Checkbox', 'jetpack-forms'),
              keywords: [
                __('Confirm', 'jetpack-forms'),
                __('Accept', 'jetpack-forms')
              ],
              description: __(
                'Confirm or select information with a single checkbox.',
                'jetpack-forms'
              ),
              icon: (0, k.Z) (
                React.createElement(
                  n.Path,
                  {
                    fill: (0, b.m) (),
                    fillRule: 'evenodd',
                    d: 'M6.125 6H17.875C17.944 6 18 6.05596 18 6.125V17.875C18 17.944 17.944 18 17.875 18H6.125C6.05596 18 6 17.944 6 17.875V6.125C6 6.05596 6.05596 6 6.125 6ZM4.5 6.125C4.5 5.22754 5.22754 4.5 6.125 4.5H17.875C18.7725 4.5 19.5 5.22754 19.5 6.125V17.875C19.5 18.7725 18.7725 19.5 17.875 19.5H6.125C5.22754 19.5 4.5 18.7725 4.5 17.875V6.125ZM10.5171 16.4421L16.5897 8.71335L15.4103 7.78662L10.4828 14.0579L8.57616 11.7698L7.42383 12.7301L10.5171 16.4421Z'
                  }
                )
              ),
              edit: e => (
                (0, g.mo) (e),
                React.createElement(
                  u.Z,
                  {
                    clientId: e.clientId,
                    label: e.attributes.label,
                    required: e.attributes.required,
                    requiredText: e.attributes.requiredText,
                    setAttributes: e.setAttributes,
                    isSelected: e.isSelected,
                    defaultValue: e.attributes.defaultValue,
                    id: e.attributes.id,
                    width: e.attributes.width,
                    attributes: e.attributes
                  }
                )
              ),
              attributes: {
                ...E.attributes,
                label: {
                  type: 'string',
                default:
                  ''
                }
              }
            }
          },
          {
            name: 'field-consent',
            settings: {
              ...E,
              title: __('Terms Consent', 'jetpack-forms'),
              keywords: [
                __('Consent', 'jetpack-forms')
              ],
              description: __(
                'Communicate site terms and offer visitors consent to those terms.',
                'jetpack-forms'
              ),
              icon: (0, k.Z) (
                React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    n.Path,
                    {
                      fill: (0, b.m) (),
                      d: 'M7 5.5H17C17.2761 5.5 17.5 5.72386 17.5 6V13H19V6C19 4.89543 18.1046 4 17 4H7C5.89543 4 5 4.89543 5 6V18C5 19.1046 5.89543 20 7 20H11.5V18.5H7C6.72386 18.5 6.5 18.2761 6.5 18V6C6.5 5.72386 6.72386 5.5 7 5.5ZM16 7.75H8V9.25H16V7.75ZM8 11H13V12.5H8V11Z'
                    }
                  ),
                  React.createElement(
                    n.Path,
                    {
                      fill: (0, b.m) (),
                      d: 'M20.1087 15.9382L15.9826 21.6689L12.959 18.5194L14.0411 17.4806L15.8175 19.331L18.8914 15.0618L20.1087 15.9382Z'
                    }
                  )
                )
              ),
              attributes: {
                ...E.attributes,
                label: {
                  type: 'string',
                default:
                  __('Consent', 'jetpack-forms')
                },
                consentType: {
                  type: 'string',
                default:
                  'implicit'
                },
                implicitConsentMessage: {
                  type: 'string',
                default:
                  __(
                    'By submitting your information, you\'re giving us permission to email you. You may unsubscribe at any time.',
                    'jetpack-forms'
                  )
                },
                explicitConsentMessage: {
                  type: 'string',
                default:
                  __(
                    'Can we send you an email from time to time?',
                    'jetpack-forms'
                  )
                }
              },
              edit: ({
                attributes: e,
                clientId: t,
                isSelected: r,
                name: a,
                setAttributes: o
              }) => {
                (0, g.mo) ({
                  attributes: e,
                  clientId: t,
                  name: a
                });
                const {
                  id: n,
                  width: l,
                  consentType: i,
                  implicitConsentMessage: s,
                  explicitConsentMessage: c
                }
                = e;
                return React.createElement(
                  p.Z,
                  {
                    clientId: t,
                    id: n,
                    isSelected: r,
                    width: l,
                    consentType: i,
                    implicitConsentMessage: s,
                    explicitConsentMessage: c,
                    setAttributes: o,
                    attributes: e
                  }
                )
              }
            }
          },
          {
            name: 'field-option-checkbox',
            settings: {
              ...C,
              parent: [
                'jetpack/field-checkbox-multiple'
              ],
              title: __('Multiple Choice Option', 'jetpack-forms'),
              icon: (0, k.Z) (
                React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    n.Path,
                    {
                      d: 'M5.5 10.5H8.5V13.5H5.5V10.5ZM8.5 9H5.5C4.67157 9 4 9.67157 4 10.5V13.5C4 14.3284 4.67157 15 5.5 15H8.5C9.32843 15 10 14.3284 10 13.5V10.5C10 9.67157 9.32843 9 8.5 9ZM12 12.75H20V11.25H12V12.75Z',
                      fill: (0, b.m) ()
                    }
                  )
                )
              )
            }
          },
          {
            name: 'field-option-radio',
            settings: {
              ...C,
              parent: [
                'jetpack/field-radio'
              ],
              title: __('Single Choice Option', 'jetpack-forms'),
              icon: (0, k.Z) (
                React.createElement(
                  n.Path,
                  {
                    d: 'M7.5 13.5C6.67157 13.5 6 12.8284 6 12C6 11.1716 6.67157 10.5 7.5 10.5C8.32843 10.5 9 11.1716 9 12C9 12.8284 8.32843 13.5 7.5 13.5ZM4.5 12C4.5 13.6569 5.84315 15 7.5 15C9.15685 15 10.5 13.6569 10.5 12C10.5 10.3431 9.15685 9 7.5 9C5.84315 9 4.5 10.3431 4.5 12ZM12.5 12.75H20.5V11.25H12.5V12.75Z',
                    fill: (0, b.m) ()
                  }
                )
              )
            }
          },
          {
            name: 'field-checkbox-multiple',
            settings: {
              ...E,
              title: __('Multiple Choice (Checkbox)', 'jetpack-forms'),
              keywords: [
                __('Choose Multiple', 'jetpack-forms'),
                __('Option', 'jetpack-forms')
              ],
              description: __(
                'Offer users a list of choices, and allow them to select multiple options.',
                'jetpack-forms'
              ),
              icon: (0, k.Z) (
                React.createElement(
                  n.Path,
                  {
                    fill: (0, b.m) (),
                    d: 'M7.0812 10.1419L10.6001 5.45005L9.40006 4.55005L6.91891 7.85824L5.53039 6.46972L4.46973 7.53038L7.0812 10.1419ZM12 8.5H20V7H12V8.5ZM12 17H20V15.5H12V17ZM8.5 14.5H5.5V17.5H8.5V14.5ZM5.5 13H8.5C9.32843 13 10 13.6716 10 14.5V17.5C10 18.3284 9.32843 19 8.5 19H5.5C4.67157 19 4 18.3284 4 17.5V14.5C4 13.6716 4.67157 13 5.5 13Z'
                  }
                )
              ),
              edit: y('checkbox'),
              save: () => React.createElement(a.InnerBlocks.Content, null),
              attributes: {
                ...E.attributes,
                label: {
                  type: 'string',
                default:
                  'Choose several options'
                }
              },
              styles: [
                {
                  name: 'list',
                  label: 'List',
                  isDefault: !0
                },
                {
                  name: 'button',
                  label: 'Button'
                }
              ],
              deprecated: [
                v('checkbox')
              ]
            }
          },
          {
            name: 'field-radio',
            settings: {
              ...E,
              title: __('Single Choice (Radio)', 'jetpack-forms'),
              keywords: [
                __('Choose', 'jetpack-forms'),
                __('Select', 'jetpack-forms'),
                __('Option', 'jetpack-forms')
              ],
              description: __(
                'Offer users a list of choices, and allow them to select a single option.',
                'jetpack-forms'
              ),
              icon: (0, k.Z) (
                React.createElement(
                  l.Fragment,
                  null,
                  React.createElement(
                    n.Path,
                    {
                      fill: (0, b.m) (),
                      d: 'M4 7.75C4 9.40685 5.34315 10.75 7 10.75C8.65685 10.75 10 9.40685 10 7.75C10 6.09315 8.65685 4.75 7 4.75C5.34315 4.75 4 6.09315 4 7.75ZM20 8.5H12V7H20V8.5ZM20 17H12V15.5H20V17ZM7 17.75C6.17157 17.75 5.5 17.0784 5.5 16.25C5.5 15.4216 6.17157 14.75 7 14.75C7.82843 14.75 8.5 15.4216 8.5 16.25C8.5 17.0784 7.82843 17.75 7 17.75ZM4 16.25C4 17.9069 5.34315 19.25 7 19.25C8.65685 19.25 10 17.9069 10 16.25C10 14.5931 8.65685 13.25 7 13.25C5.34315 13.25 4 14.5931 4 16.25Z'
                    }
                  )
                )
              ),
              edit: y('radio'),
              save: () => React.createElement(a.InnerBlocks.Content, null),
              attributes: {
                ...E.attributes,
                label: {
                  type: 'string',
                default:
                  'Choose one option'
                }
              },
              styles: [
                {
                  name: 'list',
                  label: 'List',
                  isDefault: !0
                },
                {
                  name: 'button',
                  label: 'Button'
                }
              ],
              deprecated: [
                v('radio')
              ]
            }
          },
          {
            name: 'field-select',
            settings: {
              ...E,
              title: __('Dropdown Field', 'jetpack-forms'),
              keywords: [
                __('Choose', 'jetpack-forms'),
                __('Dropdown', 'jetpack-forms'),
                __('Option', 'jetpack-forms')
              ],
              description: __(
                'Add a compact select box, that when expanded, allows visitors to choose one value from the list.',
                'jetpack-forms'
              ),
              icon: (0, k.Z) (
                React.createElement(
                  n.Path,
                  {
                    fill: (0, b.m) (),
                    d: 'M5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5C4.5 4.72386 4.72386 4.5 5 4.5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM8.93582 10.1396L8.06396 11.3602L11.9999 14.1716L15.9358 11.3602L15.064 10.1396L11.9999 12.3283L8.93582 10.1396Z'
                  }
                )
              ),
              edit: d.Z,
              attributes: {
                ...E.attributes,
                toggleLabel: {
                  type: 'string',
                default:
                  null
                },
                options: {
                  type: 'array',
                default:
                  [
                    ''
                  ]
                }
              }
            }
          }
        ]
      },
      1275: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => s
        });
        var a = r(2674),
        o = r.n(a),
        n = r(5235),
        l = r.n(n),
        i = r(3139);
        const s = ({
          children: e = null,
          isError: t = !1,
          ...r
        }) => {
          const a = l() ('help-message', {
            'help-message-is-error': t
          });
          return e &&
          React.createElement(
            'div',
            o() ({
              className: a
            }, r),
            t &&
            React.createElement(
              i.Z,
              {
                size: '24',
                'aria-hidden': 'true',
                role: 'img',
                focusable: 'false'
              }
            ),
            React.createElement('span', null, e)
          )
        }
      },
      6556: (e, t, r) => {
        'use strict';
        function a({
          children: e
        }) {
          return React.createElement(
            'p',
            {
              style: {
                color: 'rgba( 117, 117, 117, 1 )',
                marginBottom: '24px'
              }
            },
            e
          )
        }
        r.d(t, {
          Z: () => a
        })
      },
      9886: (e, t, r) => {
        'use strict';
        r.d(t, {
          f: () => l
        });
        var a = r(5609),
        o = r(5736),
        n = r(4913);
        const __ = o.__,
        l = ({
          changeStatus: e,
          isLoading: t,
          isModuleActive: r
        }) => React.createElement(
          a.Placeholder,
          {
            icon: n.X.icon,
            instructions: __(
              'You’ll need to activate the Contact Form feature to use this block.',
              'jetpack-forms'
            ),
            label: n.X.title
          },
          React.createElement(
            a.Button,
            {
              disabled: r ||
              t,
              isBusy: t,
              onClick: () => e(!0),
              variant: 'secondary'
            },
            t ? __('Activating Contact Form', 'jetpack-forms') : __('Activate Contact Form', 'jetpack-forms', 0)
          )
        )
      },
      5516: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => n
        });
        var a = r(2636),
        o = r(5609);
        const n = function () {
          return React.createElement(
            o.Placeholder,
            null,
            React.createElement(
              o.Flex,
              {
                gap: 2,
                direction: 'column',
                style: {
                  width: '100%'
                }
              },
              React.createElement(
                o.Flex,
                {
                  gap: 4
                },
                React.createElement(
                  o.FlexItem,
                  null,
                  React.createElement(a.Z, {
                    width: 30,
                    height: 30
                  })
                ),
                React.createElement(
                  o.FlexBlock,
                  null,
                  React.createElement(a.Z, {
                    width: '90%',
                    height: 30
                  })
                )
              ),
              React.createElement(
                o.Flex,
                {
                  style: {
                    marginTop: 12
                  }
                },
                React.createElement(
                  o.FlexBlock,
                  null,
                  React.createElement(a.Z, {
                    height: 30,
                    width: '60%'
                  })
                )
              ),
              React.createElement(
                o.Flex,
                {
                  style: {
                    marginTop: 12
                  }
                },
                React.createElement(
                  o.FlexBlock,
                  null,
                  React.createElement(a.Z, {
                    width: 150,
                    height: 50
                  })
                )
              ),
              React.createElement(
                o.Flex,
                {
                  style: {
                    marginTop: 18
                  }
                },
                React.createElement(
                  o.FlexBlock,
                  null,
                  React.createElement(a.Z, {
                    width: '90%',
                    height: 16
                  })
                )
              )
            )
          )
        }
      },
      8440: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => l
        });
        var a = r(5609),
        o = r(9307),
        n = r(5736);
        const __ = n.__,
        l = ({
          error: e
        }) => React.createElement(
          a.Notice,
          {
            isDismissible: !1,
            status: 'error'
          },
          (0, o.createInterpolateElement) (
            __(
              'The CRM Jetpack Form extension failed to activate. The error message was "<error />".',
              'jetpack-forms'
            ),
            {
              error: React.createElement('span', null, e)
            }
          )
        )
      },
      8919: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => p
        });
        var a = r(6989),
        o = r.n(a),
        n = r(5609),
        l = r(5736),
        i = r(8440);
        const __ = l.__,
        s = ({
          isActivatingExt: e,
          setIsActivatingExt: t,
          extActivationError: r,
          setExtActivationError: a,
          crmData: l,
          setCRMData: s
        }) => {
          const c = (
            (e, t, r, a) => () => {
              t(void 0),
              e(!0),
              o() ({
                path: '/jetpack/v4/jetpack_crm',
                method: 'POST',
                data: {
                  extension: 'jetpackforms'
                }
              }).then(
                (
                  e => {
                    if ('success' !== e.code) throw new Error(e.code);
                    const t = Object.assign({
                    }, r);
                    t.jp_form_ext_enabled = !0,
                    a(t)
                  }
                )
              ).catch((e => {
                t(e.message)
              })).finally((() => {
                e(!1)
              }))
            }
          ) (t, a, l, s);
          return e ? React.createElement(n.Spinner, null) : r ? React.createElement(i.Z, {
            error: r
          }) : React.createElement(
            n.Button,
            {
              variant: 'secondary',
              onClick: c
            },
            __('Enable Jetpack Forms Extension', 'jetpack-forms')
          )
        },
        c = () => React.createElement(
          'p',
          {
            className: 'jetpack-contact-form__crm_text'
          },
          __(
            'A site administrator must enable the CRM Jetpack Forms extension.',
            'jetpack-forms'
          )
        ),
        u = () => React.createElement(
          'p',
          {
            className: 'jetpack-contact-form__crm_text'
          },
          __(
            'You can integrate this contact form with Jetpack CRM by enabling Jetpack CRM\'s Jetpack Forms extension.',
            'jetpack-forms'
          )
        ),
        p = ({
          isActivatingExt: e,
          setIsActivatingExt: t,
          extActivationError: r,
          setExtActivationError: a,
          crmData: o,
          setCRMData: n
        }) => o.can_activate_extension ? React.createElement(
          'div',
          null,
          React.createElement(u, null),
          React.createElement('br', null),
          React.createElement(
            s,
            {
              isActivatingExt: e,
              setIsActivatingExt: t,
              extActivationError: r,
              setExtActivationError: a,
              crmData: o,
              setCRMData: n
            }
          )
        ) : React.createElement(c, null)
      },
      7336: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => g
        });
        var a = r(5609),
        o = r(9307),
        n = r(5736),
        l = r(5589),
        i = r.n(l),
        s = r(9289),
        c = r(8919);
        const __ = n.__,
        u = Object.freeze({
          ACTIVE: 1,
          INSTALLED: 2,
          NOT_INSTALLED: 3
        }),
        p = () => React.createElement(
          'p',
          {
            className: 'jetpack-contact-form__crm_text'
          },
          __(
            'The Jetpack CRM plugin is installed but has an invalid version.',
            'jetpack-forms'
          )
        ),
        d = () => React.createElement(
          'p',
          {
            className: 'jetpack-contact-form__crm_text'
          },
          __(
            'Please update to the latest version of the Jetpack CRM plugin to integrate your contact form with your CRM.',
            'jetpack-forms'
          )
        ),
        m = ({
          isActivating: e
        }) => {
          const t = e ? __('Activating…', 'jetpack-forms') : __('Installing…', 'jetpack-forms', 0);
          return React.createElement(
            a.Button,
            {
              variant: 'secondary',
              icon: React.createElement(
                a.Icon,
                {
                  style: {
                    animation: 'rotation 2s infinite linear'
                  },
                  icon: 'update'
                }
              ),
              disabled: !0,
              'aria-label': t
            },
            t
          )
        },
        f = ({
          installAndActivateCRMPlugin: e,
          isInstalling: t
        }) => {
          let r = React.createElement(
            a.Button,
            {
              variant: 'secondary',
              onClick: e
            },
            __('Install Jetpack CRM', 'jetpack-forms')
          );
          return t &&
          (r = React.createElement(m, null)),
          React.createElement(
            'p',
            {
              className: 'jetpack-contact-form__crm_text jetpack-contact-form__integration-panel'
            },
            React.createElement(
              'em',
              {
                style: {
                  color: 'rgba(38, 46, 57, 0.7)'
                }
              },
              __(
                'You can save contacts from Jetpack contact forms in Jetpack CRM.',
                'jetpack-forms'
              ),
              React.createElement('br', null),
              r
            )
          )
        },
        h = ({
          activateCRMPlugin: e,
          isInstalling: t
        }) => React.createElement(
          'p',
          {
            className: 'jetpack-contact-form__crm_text jetpack-contact-form__integration-panel'
          },
          React.createElement(
            'em',
            null,
            __(
              'You already have the Jetpack CRM plugin installed, but it’s not activated.',
              'jetpack-forms'
            )
          ),
          React.createElement('br', null),
          t &&
          React.createElement(m, {
            isActivating: !0
          }),
          !t &&
          React.createElement(
            a.Button,
            {
              variant: 'secondary',
              onClick: e
            },
            __('Activate the Jetpack CRM plugin', 'jetpack-forms')
          )
        ),
        b = ({
          crmData: e,
          setCRMData: t,
          jetpackCRM: r,
          setAttributes: n
        }) => {
          const [l,
          s] = (0, o.useState) (!1),
          [
            u,
            p
          ] = (0, o.useState) (!1);
          return e.jp_form_ext_enabled ? i().satisfies(i().coerce(e.crm_version), '3.0.19 - 4.0.0') ? React.createElement(
            'p',
            {
              className: 'jetpack-contact-form__crm_text'
            },
            __(
              'Contacts from this form will be stored in Jetpack CRM.',
              'jetpack-forms'
            )
          ) : React.createElement(
            a.ToggleControl,
            {
              className: 'jetpack-contact-form__crm_toggle',
              label: __('Jetpack CRM', 'jetpack-forms'),
              checked: r,
              onChange: e => n({
                jetpackCRM: e
              }),
              help: __(
                'Store contact form submissions in your CRM.',
                'jetpack-forms'
              )
            }
          ) : React.createElement(
            c.Z,
            {
              isActivatingExt: l,
              setIsActivatingExt: s,
              extActivationError: u,
              setExtActivationError: p,
              crmData: e,
              setCRMData: t
            }
          )
        },
        g = ({
          crmData: e,
          setCRMData: t,
          jetpackCRM: r,
          setAttributes: a,
          onCRMPluginClick: o,
          isInstalling: n
        }) => {
          const l = i().coerce(e.crm_version);
          if (e.crm_installed && !l) return React.createElement(p, null);
          if (e.crm_installed && i().lt(l, '4.9.1')) return React.createElement(d, null);
          let c = u.NOT_INSTALLED;
          return e.crm_active ? c = u.ACTIVE : e.crm_installed &&
          (c = u.INSTALLED),
          React.createElement(
            'div',
            {
              'aria-live': 'polite'
            },
            u.ACTIVE === c &&
            React.createElement(b, {
              crmData: e,
              setCRMData: t,
              jetpackCRM: r,
              setAttributes: a
            }),
            u.INSTALLED === c &&
            React.createElement(
              h,
              {
                activateCRMPlugin: () => o(s.bu, 'zero-bs-crm/ZeroBSCRM'),
                isInstalling: n
              }
            ),
            u.NOT_INSTALLED === c &&
            React.createElement(
              f,
              {
                installAndActivateCRMPlugin: () => o(s.yX, 'zero-bs-crm'),
                isInstalling: n
              }
            )
          )
        }
      },
      7871: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => u
        });
        var a = r(6989),
        o = r.n(a),
        n = r(5609),
        l = r(9307),
        i = r(7336);
        const s = (e, t, r) => {
          o() ({
            path: '/jetpack/v4/jetpack_crm'
          }).then((r => {
            if (r.error) throw r.message;
            e(!1),
            t(r)
          })).catch((() => e(!0))).finally((() => r(!1)))
        },
        c = ({
          jetpackCRM: e,
          setAttributes: t
        }) => {
          const [r,
          a] = (0, l.useState) (!0),
          [
            o,
            c
          ] = (0, l.useState) (!1),
          [
            u,
            p
          ] = (0, l.useState) (),
          [
            d,
            m
          ] = (0, l.useState) (!1),
          f = (0, l.useCallback) (
            (
              (e, t) => {
                m(!0),
                e(t).catch((() => {
                  c(!0)
                })).finally((() => {
                  m(!1),
                  a(!0),
                  s(c, p, a)
                }))
              }
            ),
            [
              m,
              c,
              a
            ]
          );
          return (0, l.useEffect) ((() => {
            s(c, p, a)
          }), []),
          r ? React.createElement(n.Spinner, null) : o ? null : React.createElement(
            i.Z,
            {
              crmData: u,
              setCRMData: p,
              jetpackCRM: e,
              setAttributes: t,
              onCRMPluginClick: f,
              isInstalling: d
            }
          )
        },
        u = ({
          jetpackCRM: e,
          setAttributes: t
        }) => React.createElement(
          n.BaseControl,
          null,
          React.createElement(c, {
            jetpackCRM: e,
            setAttributes: t
          })
        )
      },
      58: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => c
        });
        var a = r(5609),
        o = r(9307),
        n = r(5736),
        l = r(2384),
        i = r(1275),
        s = r(6556);
        const __ = n.__,
        c = ({
          emailAddress: e = '',
          emailSubject: t = '',
          instanceId: r,
          setAttributes: c,
          postAuthorEmail: u
        }) => {
          const [p,
          d] = (0, o.useState) (!1),
          m = e => 0 !== (e = e.trim()).length &&
          (!l.validate(e) && {
            email: e
          });
          return React.createElement(
            React.Fragment,
            null,
            React.createElement(
              s.Z,
              null,
              __(
                'Get incoming form responses sent to your email inbox:',
                'jetpack-forms'
              )
            ),
            React.createElement(
              a.TextControl,
              {
                'aria-describedby': `contact-form-${ r }-email-${ p &&
                p.length > 0 ? 'error' : 'help' }`,
                label: __('Email address to send to', 'jetpack-forms'),
                placeholder: __('name@example.com', 'jetpack-forms'),
                onKeyDown: e => {
                  'Enter' === event.key &&
                  (e.preventDefault(), e.stopPropagation())
                },
                value: e,
                onBlur: e => {
                  if (0 === e.target.value.length) return d(!1),
                  void c({
                    to: u
                  });
                  const t = e.target.value.split(',').map(m).filter(Boolean);
                  t &&
                  t.length &&
                  d(t)
                },
                onChange: e => {
                  d(!1),
                  c({
                    to: e.trim()
                  })
                },
                help: __(
                  'You can enter multiple email addresses separated by commas.',
                  'jetpack-forms'
                )
              }
            ),
            React.createElement(
              i.Z,
              {
                isError: !0,
                id: `contact-form-${ r }-email-error`
              },
              (
                () => {
                  if (p) {
                    if (1 === p.length) return p[0] &&
                    p[0].email ? (0, n.sprintf) ( /* translators: placeholder is an email address. */
                      __('%s is not a valid email address.', 'jetpack-forms'),
                      p[0].email
                    ) : p[0];
                    if (2 === p.length) return (0, n.sprintf) ( /* translators: placeholders are email addresses. */
                      __(
                        '%1$s and %2$s are not a valid email address.',
                        'jetpack-forms'
                      ),
                      p[0].email,
                      p[1].email
                    );
                    const e = p.map((e => e.email));
                    return (0, n.sprintf) ( /* translators: placeholder is a list of email addresses. */
                      __('%s are not a valid email address.', 'jetpack-forms'),
                      e.join(', ')
                    )
                  }
                  return null
                }
              ) ()
            ),
            React.createElement(
              a.TextControl,
              {
                label: __('Email subject line', 'jetpack-forms'),
                value: t,
                placeholder: __('Enter a subject', 'jetpack-forms'),
                onChange: e => c({
                  subject: e
                })
              }
            )
          )
        }
      },
      1157: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => d
        });
        var a = r(2175),
        o = r(5609),
        n = r(4333),
        l = r(5736),
        i = r(6101),
        s = r(282),
        c = r(231),
        u = r(2185),
        p = r(9696);
        const __ = l.__;
        const d = (0, n.compose) (
          (0, i.j) (
            ['borderRadius',
            'borderWidth',
            'labelFontSize',
            'fieldFontSize',
            'lineHeight',
            'labelLineHeight',
            'inputColor',
            'labelColor',
            'fieldBackgroundColor',
            'borderColor']
          ),
          n.withInstanceId
        ) (
          (
            function (e) {
              const {
                instanceId: t,
                required: r,
                requiredText: n,
                label: l,
                setAttributes: i,
                width: d,
                defaultValue: m,
                attributes: f
              }
              = e,
              {
                blockStyle: h
              }
              = (0, p.g) (f);
              return React.createElement(
                'div',
                {
                  id: `jetpack-field-checkbox-${ t }`,
                  className: 'jetpack-field jetpack-field-checkbox',
                  style: h
                },
                React.createElement(
                  'input',
                  {
                    className: 'jetpack-field-checkbox__checkbox',
                    type: 'checkbox',
                    disabled: !0,
                    checked: m
                  }
                ),
                React.createElement(
                  s.Z,
                  {
                    required: r,
                    requiredText: n,
                    label: l,
                    setAttributes: i,
                    attributes: f
                  }
                ),
                React.createElement(
                  a.InspectorControls,
                  null,
                  React.createElement(
                    o.PanelBody,
                    {
                      title: __('Checkbox Settings', 'jetpack-forms')
                    },
                    React.createElement(
                      o.ToggleControl,
                      {
                        label: __('Checked by default', 'jetpack-forms'),
                        checked: m,
                        onChange: e => i({
                          defaultValue: e ? 'true' : ''
                        })
                      }
                    )
                  )
                ),
                React.createElement(
                  a.InspectorControls,
                  null,
                  React.createElement(
                    o.PanelBody,
                    {
                      title: __('Manage Responses', 'jetpack-forms')
                    },
                    React.createElement(u.Z, {
                      isChildBlock: !0
                    })
                  ),
                  React.createElement(
                    o.PanelBody,
                    {
                      title: __('Field Settings', 'jetpack-forms')
                    },
                    React.createElement(
                      o.ToggleControl,
                      {
                        label: __('Field is required', 'jetpack-forms'),
                        className: 'jetpack-field-label__required',
                        checked: r,
                        onChange: e => i({
                          required: e
                        }),
                        help: __(
                          'You can edit the "required" label in the editor',
                          'jetpack-forms'
                        )
                      }
                    ),
                    React.createElement(c.Z, {
                      setAttributes: i,
                      width: d
                    }),
                    React.createElement(
                      o.ToggleControl,
                      {
                        label: __('Sync fields style', 'jetpack-forms'),
                        checked: f.shareFieldAttributes,
                        onChange: e => i({
                          shareFieldAttributes: e
                        }),
                        help: __(
                          'Deactivate for individual styling of this block',
                          'jetpack-forms'
                        )
                      }
                    )
                  ),
                  React.createElement(
                    a.PanelColorSettings,
                    {
                      title: __('Color', 'jetpack-forms'),
                      initialOpen: !1,
                      colorSettings: [
                        {
                          value: f.labelColor,
                          onChange: e => i({
                            labelColor: e
                          }),
                          label: __('Label Text', 'jetpack-forms')
                        }
                      ]
                    }
                  ),
                  React.createElement(
                    o.PanelBody,
                    {
                      title: __('Label Styles', 'jetpack-forms'),
                      initialOpen: f.labelFontSize
                    },
                    React.createElement(
                      a.FontSizePicker,
                      {
                        withSlider: !0,
                        withReset: !0,
                        size: '__unstable-large',
                        __nextHasNoMarginBottom: !0,
                        onChange: e => i({
                          labelFontSize: e
                        }),
                        value: f.labelFontSize
                      }
                    )
                  )
                )
              )
            }
          )
        )
      },
      2304: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => p
        });
        var a = r(2175),
        o = r(5609),
        n = r(4333),
        l = r(5736),
        i = r(6101),
        s = r(282),
        c = r(231),
        u = r(2185);
        const __ = l.__,
        p = (0, n.compose) (
          (0, i.j) (
            ['borderRadius',
            'borderWidth',
            'labelFontSize',
            'fieldFontSize',
            'lineHeight',
            'labelLineHeight',
            'inputColor',
            'labelColor',
            'fieldBackgroundColor',
            'borderColor']
          ),
          n.withInstanceId
        ) (
          (
            ({
              instanceId: e,
              width: t,
              consentType: r,
              implicitConsentMessage: n,
              explicitConsentMessage: i,
              setAttributes: p,
              attributes: d
            }) => React.createElement(
              'div',
              {
                id: `jetpack-field-consent-${ e }`,
                className: 'jetpack-field jetpack-field-consent'
              },
              'explicit' === r &&
              React.createElement(
                'input',
                {
                  className: 'jetpack-field-consent__checkbox',
                  type: 'checkbox',
                  disabled: !0
                }
              ),
              React.createElement(
                s.Z,
                {
                  required: !1,
                  label: {
                    implicit: n,
                    explicit: i
                  }
                  [
                    r
                  ] ?? '',
                  attributes: d,
                  setAttributes: p,
                  labelFieldName: `${ r }ConsentMessage`,
                  placeholder: (0, l.sprintf) ( /* translators: placeholder is a type of consent: implicit or explicit */
                    __('Add %s consent message…', 'jetpack-forms'),
                    r
                  )
                }
              ),
              React.createElement(
                a.InspectorControls,
                null,
                React.createElement(
                  o.PanelBody,
                  {
                    title: __('Manage Responses', 'jetpack-forms')
                  },
                  React.createElement(u.Z, {
                    isChildBlock: !0
                  })
                ),
                React.createElement(
                  o.PanelBody,
                  {
                    title: __('Field Settings', 'jetpack-forms')
                  },
                  React.createElement(c.Z, {
                    setAttributes: p,
                    width: t
                  }),
                  React.createElement(
                    o.ToggleControl,
                    {
                      label: __('Sync fields style', 'jetpack-forms'),
                      checked: d.shareFieldAttributes,
                      onChange: e => p({
                        shareFieldAttributes: e
                      }),
                      help: __(
                        'Deactivate for individual styling of this block',
                        'jetpack-forms'
                      )
                    }
                  )
                ),
                React.createElement(
                  a.PanelColorSettings,
                  {
                    title: __('Color', 'jetpack-forms'),
                    initialOpen: !1,
                    colorSettings: [
                      {
                        value: d.labelColor,
                        onChange: e => p({
                          labelColor: e
                        }),
                        label: __('Label Text', 'jetpack-forms')
                      }
                    ]
                  }
                ),
                React.createElement(
                  o.PanelBody,
                  {
                    title: __('Consent Settings', 'jetpack-forms')
                  },
                  React.createElement(
                    o.BaseControl,
                    null,
                    React.createElement(
                      o.SelectControl,
                      {
                        label: __('Permission to email', 'jetpack-forms'),
                        value: r,
                        options: [
                          {
                            label: __('Mention that you can email', 'jetpack-forms'),
                            value: 'implicit'
                          },
                          {
                            label: __('Add a privacy checkbox', 'jetpack-forms'),
                            value: 'explicit'
                          }
                        ],
                        onChange: e => p({
                          consentType: e
                        })
                      }
                    )
                  )
                )
              )
            )
          )
        )
      },
      5153: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => u
        });
        var a = r(2175),
        o = r(5609),
        n = r(5736),
        l = r(7155),
        i = r(4697),
        s = r(231),
        c = r(2185);
        const __ = n.__,
        u = ({
          attributes: e,
          blockClassNames: t,
          clientId: r,
          id: n,
          placeholder: u,
          placeholderField: p = 'placeholder',
          hidePlaceholder: d,
          required: m,
          setAttributes: f,
          type: h,
          width: b
        }) => {
          const g = (0, l.D6) (r),
          k = (0, l.RK) (t),
          E = [
            'radio',
            'checkbox'
          ].includes(h),
          C = (e, t = parseInt) => r => {
            const a = t(r, 10);
            f({
              [
                e
              ]: isNaN(a) ? '' : a
            })
          },
          v = 'button' === k ? __('Button Text', 'jetpack-forms') : __('Option Text', 'jetpack-forms', 0),
          R = E ? v : __('Field Text', 'jetpack-forms', 0),
          j = E ? __('Background', 'jetpack-forms') : __('Field Background', 'jetpack-forms', 0),
          y = E ? __('Options Styles', 'jetpack-forms') : __('Input Field Styles', 'jetpack-forms', 0),
          w = [
            {
              value: e.labelColor,
              onChange: e => f({
                labelColor: e
              }),
              label: __('Label Text', 'jetpack-forms')
            },
            {
              value: e.inputColor,
              onChange: e => f({
                inputColor: e
              }),
              label: R
            }
          ];
          E &&
          'button' === k &&
          w.push({
            value: e.buttonBackgroundColor,
            onChange: e => f({
              buttonBackgroundColor: e
            }),
            label: __('Button Background', 'jetpack-forms')
          }),
          E &&
          g !== l.JH.OUTLINED ||
          (
            w.push({
              value: e.fieldBackgroundColor,
              onChange: e => f({
                fieldBackgroundColor: e
              }),
              label: j
            }),
            w.push({
              value: e.borderColor,
              onChange: e => f({
                borderColor: e
              }),
              label: __('Border', 'jetpack-forms')
            })
          );
          return React.createElement(
            React.Fragment,
            null,
            React.createElement(
              a.BlockControls,
              null,
              React.createElement(
                o.ToolbarGroup,
                null,
                React.createElement(
                  o.ToolbarButton,
                  {
                    title: __('Required', 'jetpack-forms'),
                    icon: (0, i.Z) (
                      React.createElement(
                        o.Path,
                        {
                          d: 'M8.23118 8L16 16M8 16L15.7688 8 M6.5054 11.893L17.6567 11.9415M12.0585 17.6563L12 6.5',
                          stroke: 'currentColor'
                        }
                      )
                    ),
                    onClick: () => {
                      f({
                        required: !m
                      })
                    },
                    className: m ? 'is-pressed' : void 0
                  }
                )
              )
            ),
            React.createElement(
              a.InspectorControls,
              null,
              React.createElement(
                o.PanelBody,
                {
                  title: __('Manage Responses', 'jetpack-forms')
                },
                React.createElement(c.Z, {
                  isChildBlock: !0
                })
              ),
              React.createElement(
                o.PanelBody,
                {
                  title: __('Field Settings', 'jetpack-forms')
                },
                React.createElement(
                  o.ToggleControl,
                  {
                    label: __('Field is required', 'jetpack-forms'),
                    className: 'jetpack-field-label__required',
                    checked: m,
                    onChange: e => f({
                      required: e
                    }),
                    help: __(
                      'You can edit the "required" label in the editor',
                      'jetpack-forms'
                    )
                  }
                ),
                !d &&
                React.createElement(
                  o.TextControl,
                  {
                    label: __('Placeholder text', 'jetpack-forms'),
                    value: u ||
                    '',
                    onChange: e => f({
                      [
                        p
                      ]: e
                    }),
                    help: __(
                      'Show visitors an example of the type of content expected. Otherwise, leave blank.',
                      'jetpack-forms'
                    )
                  }
                ),
                React.createElement(s.Z, {
                  setAttributes: f,
                  width: b
                }),
                React.createElement(
                  o.ToggleControl,
                  {
                    label: __('Sync fields style', 'jetpack-forms'),
                    checked: e.shareFieldAttributes,
                    onChange: e => f({
                      shareFieldAttributes: e
                    }),
                    help: __(
                      'Deactivate for individual styling of this block',
                      'jetpack-forms'
                    )
                  }
                )
              ),
              React.createElement(
                a.PanelColorSettings,
                {
                  title: __('Color', 'jetpack-forms'),
                  initialOpen: !1,
                  colorSettings: w
                }
              ),
              React.createElement(
                o.PanelBody,
                {
                  title: y,
                  initialOpen: !1
                },
                React.createElement(
                  o.BaseControl,
                  null,
                  React.createElement(
                    a.FontSizePicker,
                    {
                      withReset: !0,
                      size: '__unstable-large',
                      __nextHasNoMarginBottom: !0,
                      onChange: e => f({
                        fieldFontSize: e
                      }),
                      value: e.fieldFontSize
                    }
                  )
                ),
                React.createElement(
                  o.BaseControl,
                  null,
                  React.createElement(
                    a.LineHeightControl,
                    {
                      __nextHasNoMarginBottom: !0,
                      __unstableInputWidth: '100%',
                      value: e.lineHeight,
                      onChange: C('lineHeight', parseFloat),
                      size: '__unstable-large'
                    }
                  )
                ),
                (E || 'button' === k) &&
                React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    o.RangeControl,
                    {
                      label: __('Button Border Width', 'jetpack-forms'),
                      value: e.buttonBorderWidth,
                      initialPosition: 1,
                      onChange: C('buttonBorderWidth'),
                      min: 0,
                      max: 100
                    }
                  ),
                  React.createElement(
                    o.RangeControl,
                    {
                      label: __('Button Border Radius', 'jetpack-forms'),
                      value: e.buttonBorderRadius,
                      initialPosition: 0,
                      onChange: C('buttonBorderRadius'),
                      min: 0,
                      max: 100
                    }
                  )
                ),
                (!E || g === l.JH.OUTLINED) &&
                React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    o.RangeControl,
                    {
                      label: __('Border Width', 'jetpack-forms'),
                      value: e.borderWidth,
                      initialPosition: 1,
                      onChange: C('borderWidth'),
                      min: 0,
                      max: 100
                    }
                  ),
                  React.createElement(
                    o.RangeControl,
                    {
                      label: __('Border Radius', 'jetpack-forms'),
                      value: e.borderRadius,
                      initialPosition: 0,
                      onChange: C('borderRadius'),
                      min: 0,
                      max: 100
                    }
                  )
                )
              ),
              React.createElement(
                o.PanelBody,
                {
                  title: __('Label Styles', 'jetpack-forms'),
                  initialOpen: !1
                },
                React.createElement(
                  o.BaseControl,
                  null,
                  React.createElement(
                    a.FontSizePicker,
                    {
                      withReset: !0,
                      size: '__unstable-large',
                      __nextHasNoMarginBottom: !0,
                      onChange: e => f({
                        labelFontSize: e
                      }),
                      value: e.labelFontSize
                    }
                  )
                ),
                React.createElement(
                  o.BaseControl,
                  null,
                  React.createElement(
                    a.LineHeightControl,
                    {
                      __unstableInputWidth: '100%',
                      __nextHasNoMarginBottom: !0,
                      value: e.labelLineHeight,
                      onChange: C('labelLineHeight', parseFloat),
                      size: '__unstable-large'
                    }
                  )
                )
              )
            ),
            React.createElement(
              a.InspectorAdvancedControls,
              null,
              React.createElement(
                o.TextControl,
                {
                  label: __('Name/ID', 'jetpack-forms'),
                  value: n ||
                  '',
                  onChange: e => {
                    const t = e.replace(/[^a-zA-Z0-9_-]/g, '');
                    f({
                      id: t
                    })
                  },
                  help: __(
                    'Customize the input\'s name/ID. Only alphanumeric, dash and underscore characters are allowed',
                    'jetpack-forms'
                  )
                }
              )
            )
          )
        }
      },
      3548: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => b
        });
        var a = r(2175),
        o = r(4333),
        n = r(9307),
        l = r(5736),
        i = r(5235),
        s = r.n(i),
        c = r(2819),
        u = r(9019),
        p = r(7155),
        d = r(6101),
        m = r(5153),
        f = r(282),
        h = r(9696);
        const __ = l.__,
        b = (0, o.compose) (
          (0, d.j) (
            ['borderRadius',
            'borderWidth',
            'labelFontSize',
            'fieldFontSize',
            'lineHeight',
            'labelLineHeight',
            'inputColor',
            'labelColor',
            'fieldBackgroundColor',
            'borderColor']
          )
        ) (
          (
            ({
              attributes: e,
              clientId: t,
              isSelected: r,
              name: o,
              setAttributes: l
            }) => {
              const {
                id: i,
                label: d,
                options: b,
                required: g,
                requiredText: k,
                toggleLabel: E,
                width: C
              }
              = e,
              v = (0, n.useRef) (),
              R = (0, p.D6) (t),
              j = s() (
                'jetpack-field jetpack-field-dropdown',
                {
                  'is-selected': r,
                  'has-placeholder': !(0, c.isEmpty) (E)
                }
              );
              (0, p.mo) ({
                attributes: e,
                clientId: t,
                name: o
              });
              const y = (e, t) => (0, u.k) (v.current, '[role=textbox]', e, t),
              w = (t, r) => {
                const a = [
                  ...e.options
                ],
                o = '' !== r[r.length - 1];
                a[t] &&
                (a[t] = r.shift(), t++),
                a.splice(t, 0, ...r),
                l({
                  options: a
                }),
                y(t + r.length - 1, o)
              },
              x = e => t => {
                const r = (0, c.split) (t, '\n').filter((e => e && '' !== (0, c.trim) (e)));
                r.length &&
                (
                  r.length > 1 ? w(e, r) : ((e, t) => {
                    const r = [
                      ...b
                    ];
                    r[e] = t,
                    l({
                      options: r
                    }),
                    y(e)
                  }) (e, r.pop())
                )
              },
              S = t => (r, a) => {
                if (!a) return;
                const o = e.options[t].slice(r.length);
                (0, c.isEmpty) (r) &&
                (0, c.isEmpty) (o) ||
                w(t, [
                  r,
                  o
                ])
              },
              A = t => () => {
                if (1 === e.options.length) return;
                const r = [
                  ...e.options
                ];
                r.splice(t, 1),
                l({
                  options: r
                }),
                y(Math.max(t - 1, 0), !0)
              };
              (0, n.useEffect) (
                (
                  () => {
                    (0, c.isNil) (d) &&
                    l({
                      label: ''
                    }),
                    (0, c.isNil) (E) &&
                    l({
                      toggleLabel: __('Select one option', 'jetpack-forms')
                    })
                  }
                ),
                []
              );
              const {
                blockStyle: I
              }
              = (0, h.g) (e);
              return React.createElement(
                'div',
                {
                  className: j,
                  style: I
                },
                React.createElement(
                  'div',
                  {
                    className: 'jetpack-field-dropdown__wrapper'
                  },
                  React.createElement(
                    f.Z,
                    {
                      required: g,
                      requiredText: k,
                      label: d,
                      attributes: e,
                      setAttributes: l,
                      isSelected: r,
                      style: R
                    }
                  ),
                  React.createElement(
                    'div',
                    {
                      className: 'jetpack-field-dropdown__toggle'
                    },
                    React.createElement(
                      a.RichText,
                      {
                        value: E,
                        onChange: e => {
                          l({
                            toggleLabel: e
                          })
                        },
                        allowedFormats: [
                          'core/bold',
                          'core/italic'
                        ],
                        withoutInteractiveFormatting: !0
                      }
                    ),
                    React.createElement('span', {
                      className: 'jetpack-field-dropdown__icon'
                    })
                  )
                ),
                r &&
                React.createElement(
                  'div',
                  {
                    className: 'jetpack-field-dropdown__popover',
                    ref: v
                  },
                  b.map(
                    (
                      (e, t) => React.createElement(
                        a.RichText,
                        {
                          key: t,
                          value: e,
                          onChange: x(t),
                          onSplit: S(t),
                          onRemove: A(t),
                          onReplace: c.noop,
                          placeholder: __('Add option…', 'jetpack-forms'),
                          __unstableDisableFormats: !0
                        }
                      )
                    )
                  )
                ),
                React.createElement(
                  m.Z,
                  {
                    id: i,
                    required: g,
                    attributes: e,
                    setAttributes: l,
                    width: C,
                    placeholder: E,
                    placeholderField: 'toggleLabel',
                    type: 'dropdown'
                  }
                )
              )
            }
          )
        )
      },
      282: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => f
        });
        var a = r(2674),
        o = r.n(a),
        n = r(2175),
        l = r(9307),
        i = r(5736),
        s = r(5235),
        c = r.n(s),
        u = r(2819),
        p = r(7155),
        d = r(9696);
        const __ = i.__,
        m = ({
          attributes: e,
          className: t,
          label: r,
          labelFieldName: a,
          placeholder: o,
          resetFocus: l,
          required: i,
          requiredText: s,
          setAttributes: u
        }) => {
          const {
            labelStyle: p
          }
          = (0, d.g) (e);
          return React.createElement(
            'div',
            {
              className: c() (t, 'jetpack-field-label'),
              style: p
            },
            React.createElement(
              n.RichText,
              {
                tagName: 'label',
                value: r,
                className: 'jetpack-field-label__input',
                onChange: e => {
                  l &&
                  l(),
                  u(a ? {
                    [
                      a
                    ]: e
                  }
                   : {
                    label: e
                  })
                },
                placeholder: o ?? __('Add label…', 'jetpack-forms'),
                withoutInteractiveFormatting: !0,
                allowedFormats: [
                  'core/bold',
                  'core/italic'
                ]
              }
            ),
            i &&
            React.createElement(
              n.RichText,
              {
                tagName: 'span',
                value: s,
                className: 'required',
                onChange: e => {
                  u({
                    requiredText: e
                  })
                },
                withoutInteractiveFormatting: !0,
                allowedFormats: [
                  'core/bold',
                  'core/italic'
                ]
              }
            )
          )
        },
        f = e => {
          const {
            setAttributes: t,
            requiredText: r,
            style: a
          }
          = e,
          n = c() ({
            'notched-label__label': a === p.JH.OUTLINED,
            'animated-label__label': a === p.JH.ANIMATED,
            'below-label__label': a === p.JH.BELOW
          });
          return (0, l.useEffect) (
            (
              () => {
                (0, u.isNil) (r) &&
                t({
                  requiredText: __('(required)', 'jetpack-forms')
                })
              }
            ),
            []
          ),
          a === p.JH.OUTLINED ? React.createElement(
            'div',
            {
              className: 'notched-label'
            },
            React.createElement('div', {
              className: 'notched-label__leading'
            }),
            React.createElement(
              'div',
              {
                className: 'notched-label__notch'
              },
              React.createElement(m, o() ({
                className: n
              }, e))
            ),
            React.createElement('div', {
              className: 'notched-label__trailing'
            })
          ) : React.createElement(m, o() ({
            className: n
          }, e))
        }
      },
      655: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => f
        });
        var a = r(2175),
        o = r(4333),
        n = r(9818),
        l = r(5235),
        i = r.n(l),
        s = r(7155),
        c = r(6101),
        u = r(5153),
        p = r(282),
        d = r(9696);
        const m = [
          'jetpack/field-option'
        ];
        const f = (0, o.compose) (
          (0, c.j) (
            ['borderRadius',
            'borderWidth',
            'labelFontSize',
            'fieldFontSize',
            'lineHeight',
            'labelLineHeight',
            'inputColor',
            'labelColor',
            'fieldBackgroundColor',
            'buttonBackgroundColor',
            'buttonBorderRadius',
            'buttonBorderWidth',
            'borderColor']
          ),
          o.withInstanceId
        ) (
          (
            function (e) {
              const {
                className: t,
                clientId: r,
                id: o,
                type: l,
                instanceId: c,
                required: f,
                requiredText: h,
                label: b,
                setAttributes: g,
                isSelected: k,
                width: E,
                options: C,
                attributes: v
              }
              = e,
              R = (0, s.D6) (r),
              j = (0, n.useSelect) ((e => e('core/block-editor').getBlock(r).innerBlocks), [
                r
              ]),
              y = i() (
                t,
                'jetpack-field jetpack-field-multiple',
                {
                  'is-selected': k,
                  'has-placeholder': C &&
                  C.length ||
                  j.length
                }
              ),
              {
                blockStyle: w
              }
              = (0, d.g) (v);
              return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  'div',
                  {
                    id: `jetpack-field-multiple-${ c }`,
                    className: y,
                    style: w
                  },
                  React.createElement(
                    p.Z,
                    {
                      required: f,
                      requiredText: h,
                      label: b,
                      setAttributes: g,
                      isSelected: k,
                      attributes: v,
                      style: R
                    }
                  ),
                  React.createElement(
                    'div',
                    {
                      className: 'jetpack-field-multiple__list'
                    },
                    React.createElement(
                      a.InnerBlocks,
                      {
                        allowedBlocks: m,
                        template: [
                          [`jetpack/field-option-${ l }`,
                          {
                          }
                          ]
                        ],
                        templateInsertUpdatesSelection: !1
                      }
                    )
                  )
                ),
                React.createElement(
                  u.Z,
                  {
                    blockClassNames: y,
                    clientId: r,
                    id: o,
                    required: f,
                    attributes: v,
                    setAttributes: g,
                    type: l,
                    width: E,
                    hidePlaceholder: !0
                  }
                )
              )
            }
          )
        )
      },
      3616: (e, t, r) => {
        'use strict';
        r.d(t, {
          G: () => d
        });
        var a = r(2175),
        o = r(4981),
        n = r(9818),
        l = r(5736),
        i = r(5235),
        s = r.n(i),
        c = r(2819),
        u = r(2316),
        p = r(9696);
        const __ = l.__,
        d = e => {
          const {
            attributes: t,
            clientId: r,
            name: l,
            onReplace: i,
            setAttributes: d
          }
          = e,
          {
            removeBlock: m
          }
          = (0, n.useDispatch) ('core/block-editor'),
          f = (0, u.j) (r),
          {
            optionStyle: h
          }
          = (0, p.g) (f),
          b = (0, n.useSelect) (
            (
              e => {
                const t = e('core/block-editor'),
                a = (0, c.first) (t.getBlockParents(r, !0));
                return t.getBlock(a).innerBlocks.length
              }
            ),
            [
              r
            ]
          ),
          g = l.replace('jetpack/field-option-', ''),
          k = s() ('jetpack-field-option', `field-option-${ g }`);
          return React.createElement(
            'div',
            {
              className: k,
              style: h
            },
            React.createElement(
              'input',
              {
                type: g,
                className: 'jetpack-option__type',
                tabIndex: '-1'
              }
            ),
            React.createElement(
              a.RichText,
              {
                allowedFormats: [],
                onChange: e => {
                  d({
                    label: e
                  })
                },
                onRemove: () => {
                  b <= 1 ||
                  m(r)
                },
                onSplit: e => (0, o.createBlock) (
                  l,
                  {
                    ...t,
                    clientId: e &&
                    0 === t.label.indexOf(e) ? t.clientId : void 0,
                    label: e
                  }
                ),
                onReplace: i,
                placeholder: __('Add option…', 'jetpack-forms'),
                preserveWhiteSpace: !1,
                withoutInteractiveFormatting: !0,
                value: t.label
              }
            )
          )
        }
      },
      3059: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => m
        });
        var a = r(4333),
        o = r(9307),
        n = r(5235),
        l = r.n(n),
        i = r(2819),
        s = r(7155),
        c = r(6101),
        u = r(5153),
        p = r(282),
        d = r(9696);
        const m = (0, a.compose) (
          (0, c.j) (
            ['borderRadius',
            'borderWidth',
            'labelFontSize',
            'fieldFontSize',
            'lineHeight',
            'labelLineHeight',
            'inputColor',
            'labelColor',
            'fieldBackgroundColor',
            'borderColor']
          )
        ) (
          (
            e => {
              const {
                attributes: t,
                clientId: r,
                id: a,
                isSelected: n,
                required: c,
                requiredText: m,
                label: f,
                setAttributes: h,
                placeholder: b,
                width: g
              }
              = e,
              k = (0, s.D6) (r),
              {
                blockStyle: E,
                fieldStyle: C
              }
              = (0, d.g) (t),
              v = l() (
                'jetpack-field jetpack-field-textarea',
                {
                  'is-selected': n,
                  'has-placeholder': !(0, i.isEmpty) (b)
                }
              );
              return (0, o.useEffect) ((() => {
                (0, i.isNil) (f) &&
                h({
                  label: ''
                })
              }), []),
              React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  'div',
                  {
                    className: v,
                    style: E
                  },
                  React.createElement(
                    p.Z,
                    {
                      clientId: r,
                      required: c,
                      requiredText: m,
                      label: f,
                      setAttributes: h,
                      attributes: t,
                      style: k
                    }
                  ),
                  React.createElement(
                    'textarea',
                    {
                      className: 'jetpack-field__textarea',
                      value: b,
                      onChange: e => h({
                        placeholder: e.target.value
                      }),
                      style: C
                    }
                  )
                ),
                React.createElement(
                  u.Z,
                  {
                    id: a,
                    required: c,
                    setAttributes: h,
                    width: g,
                    placeholder: b,
                    attributes: t
                  }
                )
              )
            }
          )
        )
      },
      231: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => n
        });
        var a = r(5609),
        o = r(5736);
        const __ = o.__;
        function n({
          setAttributes: e,
          width: t
        }) {
          return React.createElement(
            a.BaseControl,
            {
              label: __('Field Width', 'jetpack-forms'),
              help: __(
                'Adjust the width of the field to include multiple fields on a single line.',
                'jetpack-forms'
              ),
              className: 'jetpack-field-label__width'
            },
            React.createElement(
              a.ButtonGroup,
              {
                'aria-label': __('Field Width', 'jetpack-forms')
              },
              [
                25,
                50,
                75,
                100
              ].map(
                (
                  r => React.createElement(
                    a.Button,
                    {
                      key: r,
                      isSmall: !0,
                      variant: r === t ? 'primary' : void 0,
                      onClick: () => e({
                        width: r
                      })
                    },
                    r,
                    '%'
                  )
                )
              )
            )
          )
        }
      },
      9775: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => h
        });
        var a = r(2674),
        o = r.n(a),
        n = r(4333),
        l = r(2694),
        i = r(5235),
        s = r.n(i),
        c = r(2819),
        u = r(7155),
        p = r(6101),
        d = r(5153),
        m = r(282),
        f = r(9696);
        const h = (0, n.compose) (
          (0, p.j) (
            ['borderRadius',
            'borderWidth',
            'labelFontSize',
            'fieldFontSize',
            'lineHeight',
            'labelLineHeight',
            'inputColor',
            'labelColor',
            'fieldBackgroundColor',
            'borderColor']
          )
        ) (
          (
            e => {
              const {
                attributes: t,
                clientId: r,
                id: a,
                isSelected: o,
                required: n,
                requiredText: l,
                label: i,
                setAttributes: p,
                placeholder: h,
                width: b
              }
              = e,
              {
                blockStyle: g,
                fieldStyle: k
              }
              = (0, f.g) (t),
              E = (0, u.D6) (r),
              C = s() (
                'jetpack-field',
                {
                  'is-selected': o,
                  'has-placeholder': !(0, c.isEmpty) (h)
                }
              );
              return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  'div',
                  {
                    className: C,
                    style: g
                  },
                  React.createElement(
                    m.Z,
                    {
                      attributes: t,
                      label: i,
                      required: n,
                      requiredText: l,
                      setAttributes: p,
                      style: E
                    }
                  ),
                  React.createElement(
                    'input',
                    {
                      className: 'jetpack-field__input',
                      onChange: e => p({
                        placeholder: e.target.value
                      }),
                      style: k,
                      type: 'text',
                      value: h
                    }
                  )
                ),
                React.createElement(
                  d.Z,
                  {
                    id: a,
                    required: n,
                    width: b,
                    setAttributes: p,
                    placeholder: h,
                    attributes: t
                  }
                )
              )
            }
          )
        ),
        b = (0, n.createHigherOrderComponent) (
          (
            e => t => {
              if (t.name.indexOf('jetpack/field') > - 1) {
                const r = t.attributes.width ? 'jetpack-field__width-' + t.attributes.width : '';
                return React.createElement(e, o() ({
                }, t, {
                  className: r
                }))
              }
              return React.createElement(e, t)
            }
          ),
          'withCustomClassName'
        );
        (0, l.addFilter) ('editor.BlockListBlock', 'jetpack/contact-form', b)
      },
      2185: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => p
        });
        var a = r(3419),
        o = r(5609),
        n = r(5736),
        l = r(2819),
        i = r(9196),
        s = r.n(i),
        c = r(6556);
        const __ = n.__,
        u = `${ (0, l.get) ((0, a.Pb) (), 'adminUrl', !1) }edit.php?post_type=feedback`,
        p = ({
          formTitle: e = '',
          isChildBlock: t = !1,
          setAttributes: r
        }) => s().createElement(
          s().Fragment,
          null,
          s().createElement(
            c.Z,
            null,
            __(
              'Manage and export your form responses in WPAdmin:',
              'jetpack-forms'
            )
          ),
          s().createElement(
            o.Button,
            {
              variant: 'secondary',
              href: u,
              target: '_blank'
            },
            __('View Form Responses', 'jetpack-forms'),
            s().createElement(
              'span',
              {
                className: 'screen-reader-text'
              },
              __('(opens in a new tab)', 'jetpack-forms')
            )
          ),
          !1
        )
      },
      1666: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => c
        });
        var a = r(4981),
        o = r(5609),
        n = r(9818),
        l = r(9307),
        i = r(5736);
        const __ = i.__,
        s = () => {
          const {
            insertConsentBlock: e
          }
          = (
            () => {
              const e = (0, n.useSelect) ((e => e('core/block-editor').getSelectedBlock()), []),
              {
                insertBlock: t
              }
              = (0, n.useDispatch) ('core/block-editor');
              return {
                insertConsentBlock: (0, l.useCallback) (
                  (
                    async() => {
                      let r = (e.innerBlocks ?? []).findIndex((({
                        name: e
                      }) => 'jetpack/button' === e));
                      - 1 === r &&
                      (r = (e.innerBlocks ?? []).length);
                      const o = await(0, a.createBlock) ('jetpack/field-consent');
                      await t(o, r, e.clientId, !1)
                    }
                  ),
                  [
                    t,
                    e.clientId,
                    e.innerBlocks
                  ]
                )
              }
            }
          ) ();
          return React.createElement(
            React.Fragment,
            null,
            React.createElement(
              'p',
              null,
              __(
                'You’re already collecting email contacts. Why not make sure you have permission to email them too?',
                'jetpack-forms'
              )
            ),
            React.createElement(
              o.Button,
              {
                variant: 'secondary',
                onClick: e,
                style: {
                  marginBottom: '1em'
                }
              },
              __('Add email permission request', 'jetpack-forms')
            ),
            React.createElement('br', null)
          )
        },
        c = () => {
          const e = (0, n.useSelect) ((e => e('core/block-editor').getSelectedBlock()), []);
          return (0, l.useMemo) (
            (
              () => (
                e => {
                  const t = e.some((({
                    name: e
                  }) => 'jetpack/field-email' === e)),
                  r = e.some((({
                    name: e
                  }) => 'jetpack/field-consent' === e));
                  return !!t &&
                  !r
                }
              ) (e.innerBlocks)
            ),
            [
              e.innerBlocks
            ]
          ) ? React.createElement(s, null) : null
        }
      },
      5281: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => d
        });
        var a = r(5609),
        o = r(9307),
        n = r(2819),
        l = r(9289),
        i = r(7728),
        s = r(4722);
        const c = 'creative-mail-by-constant-contact/creative-mail-plugin.php',
        u = ({
          pluginState: e,
          setPluginState: t
        }) => {
          const [r,
          a] = (0, o.useState) (),
          [
            n,
            l
          ] = (0, o.useState) (!1),
          c = (
            (e, t, r) => (0, o.useCallback) (
              (
                (a, o) => {
                  e(void 0),
                  t(!0),
                  a(o).then((() => {
                    r(s.Q.ACTIVE)
                  })).catch((t => {
                    e(t)
                  })).finally((() => t(!1)))
                }
              ),
              [
                t,
                e,
                r
              ]
            )
          ) (a, l, t);
          return r ? React.createElement(i.Z, {
            error: r
          }) : React.createElement(
            s.Z,
            {
              pluginState: e,
              onCreativeMailPluginClick: c,
              isInstalling: n
            }
          )
        },
        p = ({
          isFetchingPlugins: e,
          hasError: t,
          pluginState: r,
          setPluginState: o
        }) => e ? React.createElement(a.Spinner, null) : t ? null : React.createElement(u, {
          pluginState: r,
          setPluginState: o
        }),
        d = () => {
          const [e,
          t] = (0, o.useState) (!0),
          [
            r,
            a
          ] = (0, o.useState) (!1),
          [
            i,
            u
          ] = (0, o.useState) (s.Q.NOT_INSTALLED);
          return (0, o.useEffect) (
            (
              () => {
                (0, l.uM) ().then(
                  (
                    e => {
                      a(!1),
                      (0, n.get) (e, c) &&
                      ((0, n.get) (e, [
                        c,
                        'active'
                      ]) ? u(s.Q.ACTIVE) : u(s.Q.INSTALLED))
                    }
                  )
                ).catch((() => a(!0))).finally((() => t(!1)))
              }
            ),
            [
              u,
              t,
              a
            ]
          ),
          React.createElement(
            p,
            {
              isFetchingPlugins: e,
              hasError: r,
              pluginState: i,
              setPluginState: u
            }
          )
        }
      },
      7728: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => l
        });
        var a = r(5609),
        o = r(9307),
        n = r(5736);
        const __ = n.__,
        l = ({
          error: e
        }) => React.createElement(
          a.Notice,
          {
            isDismissible: !1,
            status: 'error'
          },
          (0, o.createInterpolateElement) (
            __(
              'The plugin failed to install. <b /> Please check the <a>plugin information</a> for detailed requirements.',
              'jetpack-forms'
            ),
            {
              a: React.createElement(
                a.ExternalLink,
                {
                  href: 'https://wordpress.org/plugins/creative-mail-by-constant-contact'
                }
              ),
              b: React.createElement('span', null, e)
            }
          )
        )
      },
      4722: (e, t, r) => {
        'use strict';
        r.d(t, {
          Q: () => s,
          Z: () => m
        });
        var a = r(3419),
        o = r(5609),
        n = r(5736),
        l = r(2819),
        i = r(9289);
        const __ = n.__,
        s = Object.freeze({
          ACTIVE: 1,
          INSTALLED: 2,
          NOT_INSTALLED: 3
        }),
        c = ({
          isActivating: e
        }) => {
          const t = e ? __('Activating…', 'jetpack-forms') : __('Installing…', 'jetpack-forms', 0);
          return React.createElement(
            o.Button,
            {
              variant: 'secondary',
              icon: React.createElement(
                o.Icon,
                {
                  style: {
                    animation: 'rotation 2s infinite linear'
                  },
                  icon: 'update'
                }
              ),
              disabled: !0,
              'aria-label': t
            },
            t
          )
        },
        u = ({
          installAndActivateCreativeMailPlugin: e,
          isInstalling: t
        }) => React.createElement(
          'p',
          {
            className: 'jetpack-contact-form__integration-panel'
          },
          React.createElement(
            'em',
            {
              style: {
                color: 'rgba(38, 46, 57, 0.7)'
              }
            },
            __(
              'To start sending email campaigns, install the Creative Mail plugin for WordPress.',
              'jetpack-forms'
            ),
            React.createElement('br', null),
            t &&
            React.createElement(c, null),
            !t &&
            React.createElement(
              o.Button,
              {
                variant: 'secondary',
                onClick: e
              },
              __('Install Creative Mail plugin', 'jetpack-forms')
            )
          )
        ),
        p = ({
          activateCreativeMailPlugin: e,
          isInstalling: t
        }) => React.createElement(
          'p',
          {
            className: 'jetpack-contact-form__integration-panel'
          },
          React.createElement(
            'em',
            null,
            __(
              'To start sending email campaigns, activate the Creative Mail plugin for WordPress.',
              'jetpack-forms'
            )
          ),
          React.createElement('br', null),
          t &&
          React.createElement(c, {
            isActivating: !0
          }),
          !t &&
          React.createElement(
            o.Button,
            {
              variant: 'secondary',
              onClick: e
            },
            __('Activate Creative Mail Plugin', 'jetpack-forms')
          )
        ),
        d = () => React.createElement(
          'p',
          null,
          React.createElement(
            'em',
            null,
            __(
              'You’re all setup for email marketing with Creative Mail.',
              'jetpack-forms'
            ),
            React.createElement('br', null),
            React.createElement(
              o.ExternalLink,
              {
                href: `${ (0, l.get) ((0, a.Pb) (), 'adminUrl', !1) }admin.php?page=creativemail`
              },
              __('Open Creative Mail settings', 'jetpack-forms')
            )
          )
        ),
        m = ({
          pluginState: e,
          onCreativeMailPluginClick: t,
          isInstalling: r
        }) => React.createElement(
          'div',
          {
            'aria-live': 'polite'
          },
          s.ACTIVE === e &&
          React.createElement(d, null),
          s.INSTALLED === e &&
          React.createElement(
            p,
            {
              activateCreativeMailPlugin: () => t(
                i.bu,
                'creative-mail-by-constant-contact/creative-mail-plugin'
              ),
              isInstalling: r
            }
          ),
          s.NOT_INSTALLED === e &&
          React.createElement(
            u,
            {
              installAndActivateCreativeMailPlugin: () => t(i.yX, 'creative-mail-by-constant-contact'),
              isInstalling: r
            }
          )
        )
      },
      7990: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => l
        });
        var a = r(5609),
        o = r(1666),
        n = r(5281);
        const l = () => React.createElement(
          a.BaseControl,
          null,
          React.createElement(o.Z, null),
          React.createElement(n.Z, null)
        )
      },
      1726: (e, t, r) => {
        'use strict';
        r.d(t, {
          W: () => c,
          Z: () => u
        });
        var a = r(5609),
        o = r(9307),
        n = r(5736),
        l = r(1275),
        i = r(3644),
        s = r(4697);
        const __ = n.__,
        c = {
          name: 'salesforce-web-to-lead-form',
          title: __('Salesforce Lead Form', 'jetpack-forms'),
          description: __('Add a Salesforce Lead form to your site', 'jetpack-forms'),
          icon: (0, s.Z) (
            React.createElement(
              a.Path,
              {
                d: 'M10.6778 7.72509C11.1949 7.1895 11.9152 6.8509 12.7094 6.8509C13.7682 6.8509 14.6855 7.4419 15.178 8.31608C15.6028 8.12524 16.0768 8.02059 16.5755 8.02059C18.4839 8.02059 20.0229 9.57811 20.0229 11.4988C20.0229 13.4196 18.4777 14.9771 16.5755 14.9771C16.3415 14.9771 16.1138 14.9525 15.8983 14.9094C15.4674 15.6789 14.6424 16.2022 13.6944 16.2022C13.3004 16.2022 12.9248 16.1099 12.5924 15.9498C12.1553 16.9779 11.1334 17.7043 9.94523 17.7043C8.70783 17.7043 7.64896 16.9225 7.24265 15.8205C7.06412 15.8574 6.87943 15.8759 6.69475 15.8759C5.21725 15.8759 4.02295 14.6693 4.02295 13.1733C4.02295 12.176 4.55854 11.3018 5.35885 10.834C5.19263 10.4584 5.10029 10.0398 5.10029 9.59658C5.09413 7.8913 6.49159 6.5 8.20302 6.5C9.21264 6.5 10.1114 6.98018 10.6778 7.72509Z',
                fill: (0, i.m) ()
              }
            ),
            24,
            24,
            '0 0 24 24'
          ),
          innerBlocks: [
            ['jetpack/field-email',
            {
              required: !0,
              label: __('Business Email', 'jetpack-forms'),
              id: 'email'
            }
            ],
            [
              'jetpack/field-name',
              {
                required: !0,
                label: __('First Name', 'jetpack-forms'),
                id: 'first_name'
              }
            ],
            [
              'jetpack/field-name',
              {
                required: !0,
                label: __('Last Name', 'jetpack-forms'),
                id: 'last_name'
              }
            ],
            [
              'jetpack/field-text',
              {
                required: !0,
                label: __('Job Title', 'jetpack-forms'),
                id: 'title'
              }
            ],
            [
              'jetpack/field-text',
              {
                required: !0,
                label: __('Company', 'jetpack-forms'),
                id: 'company'
              }
            ],
            [
              'jetpack/field-telephone',
              {
                required: !0,
                label: __('Phone Number', 'jetpack-forms'),
                id: 'phone'
              }
            ],
            [
              'jetpack/button',
              {
                text: __('Submit', 'jetpack-forms'),
                element: 'button',
                lock: {
                  remove: !0
                }
              }
            ]
          ],
          attributes: {
            subject: __('New lead received from your website', 'jetpack-forms'),
            salesforceData: {
              organizationId: '',
              sendToSalesforce: !0
            },
            style: {
              spacing: {
                padding: {
                  top: '16px',
                  right: '16px',
                  bottom: '16px',
                  left: '16px'
                }
              }
            }
          }
        },
        u = ({
          salesforceData: e,
          setAttributes: t,
          instanceId: r
        }) => {
          const [n,
          i] = (0, o.useState) (!1);
          return React.createElement(
            o.Fragment,
            null,
            React.createElement(
              a.PanelBody,
              {
                title: __('Salesforce', 'jetpack-forms'),
                initialOpen: !0
              },
              React.createElement(
                a.BaseControl,
                null,
                React.createElement(
                  a.TextControl,
                  {
                    label: __('Organization ID', 'jetpack-forms'),
                    value: e.organizationId ||
                    '',
                    placeholder: __('Enter your Organization ID', 'jetpack-forms'),
                    onBlur: e => {
                      i(!e.target.value.trim().match(/^[a-zA-Z0-9]{15,18}$/))
                    },
                    onChange: r => {
                      var a;
                      i(!1),
                      a = {
                        organizationId: r.trim()
                      },
                      t({
                        salesforceData: {
                          ...e,
                          ...a
                        }
                      })
                    },
                    help: __(
                      'Enter the Salesforce organization ID to send Leads to.',
                      'jetpack-forms'
                    )
                  }
                ),
                n &&
                React.createElement(
                  l.Z,
                  {
                    isError: !0,
                    id: `contact-form-${ r }-email-error`
                  },
                  __(
                    'Invalid Organization ID. Should be a 15 - 18 characters long alphanumeric string.',
                    'jetpack-forms'
                  )
                ),
                React.createElement(
                  a.ExternalLink,
                  {
                    href: 'https://help.salesforce.com/s/articleView?id=000325251&type=1'
                  },
                  __(
                    'Where to find your Salesforce Organization ID',
                    'jetpack-forms'
                  )
                ),
                React.createElement(
                  'p',
                  {
                    style: {
                      'margin-top': '32px',
                      display: 'flex',
                      'font-size': '12px',
                      gap: '8px'
                    }
                  },
                  React.createElement(
                    'div',
                    null,
                    React.createElement(
                      'span',
                      {
                        style: {
                          padding: '3px 6px',
                          'border-radius': '4px',
                          background: '#2FB41F',
                          color: 'white',
                          display: 'block',
                          'font-weight': 600,
                          'font-size': '11px'
                        }
                      },
                      'BETA'
                    )
                  ),
                  React.createElement(
                    'div',
                    null,
                    __(
                      'This premium feature is currently free to use as it is in beta.',
                      'jetpack-forms'
                    )
                  )
                )
              )
            )
          )
        }
      },
      9696: (e, t, r) => {
        'use strict';
        r.d(t, {
          g: () => o
        });
        var a = r(2819);
        const o = e => {
          const t = {
            '--jetpack--contact-form--border-color': e.borderColor,
            '--jetpack--contact-form--border-radius': (0, a.isNumber) (e.borderRadius) ? `${ e.borderRadius }px` : null,
            '--jetpack--contact-form--border-size': (0, a.isNumber) (e.borderWidth) ? `${ e.borderWidth }px` : null,
            '--jetpack--contact-form--input-background': e.fieldBackgroundColor,
            '--jetpack--contact-form--font-size': e.fieldFontSize,
            '--jetpack--contact-form--line-height': e.lineHeight,
            '--jetpack--contact-form--text-color': e.inputColor,
            '--jetpack--contact-form--button-outline--text-color': e.inputColor,
            '--jetpack--contact-form--button-outline--background-color': e.buttonBackgroundColor,
            '--jetpack--contact-form--button-outline--border-radius': (0, a.isNumber) (e.buttonBorderRadius) ? `${ e.buttonBorderRadius }px` : null,
            '--jetpack--contact-form--button-outline--border-size': (0, a.isNumber) (e.buttonBorderWidth) ? `${ e.buttonBorderWidth }px` : null
          },
          r = {
            color: e.labelColor,
            fontSize: e.labelFontSize,
            lineHeight: e.labelLineHeight
          },
          o = {
            backgroundColor: e.fieldBackgroundColor,
            borderColor: e.borderColor,
            borderRadius: (0, a.isNumber) (e.borderRadius) ? e.borderRadius : null,
            borderWidth: (0, a.isNumber) (e.borderWidth) ? e.borderWidth : null,
            color: e.inputColor,
            fontSize: e.fieldFontSize,
            lineHeight: e.lineHeight
          };
          return {
            blockStyle: t,
            fieldStyle: o,
            labelStyle: r,
            optionStyle: {
              color: o.color,
              fontSize: o.fontSize,
              lineHeight: o.lineHeight
            }
          }
        }
      },
      1491: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => c
        });
        var a = r(2175),
        o = r(4981),
        n = r(5736),
        l = r(2819),
        i = r(8003);
        const __ = n.__,
        s = [
          'submit_button_text',
          'has_form_settings_set',
          'submitButtonText',
          'backgroundButtonColor',
          'textButtonColor',
          'customBackgroundButtonColor',
          'customTextButtonColor',
          'submitButtonClasses',
          'hasFormSettingsSet'
        ],
        c = [
          {
            attributes: {
              ...i.Z
            },
            supports: {
              html: !1
            },
            save: () => React.createElement(a.InnerBlocks.Content, null)
          },
          {
            attributes: {
              submit_button_text: {
                type: 'string',
              default:
                __('Submit', 'jetpack-forms')
              },
              has_form_settings_set: {
                type: 'string',
              default:
                null
              },
              submitButtonText: {
                type: 'string',
              default:
                __('Submit', 'jetpack-forms')
              },
              backgroundButtonColor: {
                type: 'string'
              },
              textButtonColor: {
                type: 'string'
              },
              customBackgroundButtonColor: {
                type: 'string'
              },
              customTextButtonColor: {
                type: 'string'
              },
              submitButtonClasses: {
                type: 'string'
              },
              ...i.Z
            },
            migrate: (e, t) => {
              const r = (0, l.omit) (e, s),
              a = {
                text: e.submitButtonText ||
                e.submit_button_text ||
                __('Submit', 'jetpack-forms'),
                backgroundColor: e.backgroundButtonColor,
                textColor: e.textButtonColor,
                customBackgroundColor: e.customBackgroundButtonColor,
                customTextColor: e.customTextButtonColor
              };
              return [r,
              t.concat((0, o.createBlock) ('jetpack/button', {
                element: 'button',
                ...a
              }))]
            },
            isEligible: e => !(!e.has_form_settings_set && !e.hasFormSettingsSet),
            save: () => React.createElement(a.InnerBlocks.Content, null)
          }
        ]
      },
      7829: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => N
        });
        var a = r(8275),
        o = r(3419),
        n = r(2175),
        l = r(4981),
        i = r(5609),
        s = r(4333),
        c = r(9818),
        u = r(9307),
        p = r(5736),
        d = r(5235),
        m = r.n(d),
        f = r(2819),
        h = r(348),
        b = r(6556),
        g = r(9886),
        k = r(5516),
        E = r(7871),
        C = r(58),
        v = r(2185),
        R = r(7990),
        j = r(1726),
        y = r(3120),
        w = r(4189);
        const __ = p.__,
        x = (0, f.filter) (
          h.N,
          (
            ({
              settings: e
            }) => !e.parent ||
            'jetpack/contact-form' === e.parent ||
            (0, f.isArray) (e.parent) &&
            e.parent.includes('jetpack/contact-form')
          )
        ),
        S = [
          ...(0, f.map) (x, (e => `jetpack/${ e.name }`)),
          'core/audio',
          'core/columns',
          'core/group',
          'core/heading',
          'core/image',
          'core/list',
          'core/paragraph',
          'core/row',
          'core/separator',
          'core/spacer',
          'core/stack',
          'core/subhead',
          'core/video'
        ],
        A = [
          ...(0, f.map) (x, (e => `jetpack/${ e.name }`))
        ],
        I = `${ (0, f.get) ((0, o.Pb) (), 'adminUrl', !1) }edit.php?post_type=feedback`,
        B = (0, u.forwardRef) (
          (
            ({
              attributes: e,
              setAttributes: t,
              siteTitle: r,
              postTitle: a,
              postAuthorEmail: s,
              hasInnerBlocks: c,
              replaceInnerBlocks: p,
              selectBlock: d,
              clientId: h,
              instanceId: y,
              className: x,
              blockType: B,
              variations: N,
              defaultVariation: _,
              canUserInstallPlugins: P,
              style: T,
              isModuleActive: L,
              isLoadingModules: M,
              isChangingStatus: F,
              updateJetpackModuleStatus: $
            }, O) => {
              const {
                to: Z,
                subject: V,
                customThankyou: H,
                customThankyouHeading: D,
                customThankyouMessage: q,
                customThankyouRedirect: G,
                jetpackCRM: z,
                formTitle: W,
                salesforceData: U
              }
              = e,
              [
                J,
                X
              ] = (0, u.useState) (!1),
              Y = m() (
                x,
                'jetpack-contact-form',
                {
                  'is-placeholder': !c &&
                  l.registerBlockVariation
                }
              ),
              K = !!window?.Jetpack_Editor_Initial_State?.available_blocks['contact-form/salesforce-lead-form'],
              Q = e => (0, f.map) (e, (([e,
              t,
              r = []]) => (0, l.createBlock) (e, t, Q(r)))),
              ee = e => {
                e.attributes &&
                t(e.attributes),
                e.innerBlocks &&
                p(h, Q(e.innerBlocks)),
                d(h)
              };
              (0, u.useEffect) ((() => {
                c ||
                l.registerBlockVariation ||
                ee(w.Z[0])
              })),
              (0, u.useEffect) (
                (
                  () => {
                    c ||
                    !l.registerBlockVariation ||
                    J ||
                    - 1 === window.location.search.indexOf('showJetpackFormsPatterns') ||
                    X(!0)
                  }
                ),
                []
              ),
              (0, u.useEffect) (
                (
                  () => {
                    if (void 0 === Z && s && t({
                      to: s
                    }), void 0 === V && void 0 !== r && void 0 !== a) {
                      t({
                        subject: '[' + r + '] ' + a
                      })
                    }
                  }
                ),
                [
                  Z,
                  s,
                  V,
                  r,
                  a,
                  t
                ]
              );
              return L ? !c &&
              l.registerBlockVariation ? React.createElement(
                'div',
                {
                  className: Y
                },
                React.createElement(
                  n.__experimentalBlockVariationPicker,
                  {
                    icon: (0, f.get) (B, [
                      'icon',
                      'src'
                    ]),
                    label: (0, f.get) (B, [
                      'title'
                    ]),
                    instructions: __(
                      'Start building a form by selecting one of these form templates, or search in the patterns library for more forms:',
                      'jetpack-forms'
                    ),
                    variations: (0, f.filter) (N, (e => !e.hiddenFromPicker)),
                    onSelect: (e = _) => {
                      ee(e)
                    }
                  }
                ),
                React.createElement(
                  'div',
                  {
                    className: 'form-placeholder__footer'
                  },
                  React.createElement(
                    i.Button,
                    {
                      variant: 'secondary',
                      onClick: () => X(!0)
                    },
                    __('Explore Form Patterns', 'jetpack-forms')
                  ),
                  React.createElement(
                    'div',
                    {
                      className: 'form-placeholder__footer-links'
                    },
                    React.createElement(
                      i.Button,
                      {
                        variant: 'link',
                        className: 'form-placeholder__external-link',
                        href: 'https://jetpack.com/support/jetpack-blocks/contact-form/',
                        target: '_blank'
                      },
                      __('Learn more about customizing forms', 'jetpack-forms')
                    ),
                    React.createElement(
                      i.Button,
                      {
                        variant: 'link',
                        className: 'form-placeholder__external-link',
                        href: I,
                        target: '_blank'
                      },
                      __('View and export your form responses here', 'jetpack-forms')
                    )
                  )
                ),
                J &&
                React.createElement(
                  i.Modal,
                  {
                    className: 'form-placeholder__patterns-modal',
                    title: __('Choose a pattern', 'jetpack-forms'),
                    closeLabel: __('Cancel', 'jetpack-forms'),
                    onRequestClose: () => X(!1)
                  },
                  React.createElement(
                    n.__experimentalBlockPatternSetup,
                    {
                      initialViewMode: 'grid',
                      filterPatternsFn: e => - 1 !== e.content.indexOf('jetpack/contact-form'),
                      clientId: h
                    }
                  )
                )
              ) : React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  n.InspectorControls,
                  null,
                  React.createElement(
                    i.PanelBody,
                    {
                      title: __('Manage Responses', 'jetpack-forms')
                    },
                    React.createElement(v.Z, {
                      formTitle: W,
                      setAttributes: t
                    })
                  ),
                  React.createElement(
                    i.PanelBody,
                    {
                      title: __('Submission Settings', 'jetpack-forms'),
                      initialOpen: !1
                    },
                    React.createElement(
                      React.Fragment,
                      null,
                      React.createElement(
                        b.Z,
                        null,
                        __('Customize the view after form submission:', 'jetpack-forms')
                      ),
                      React.createElement(
                        i.SelectControl,
                        {
                          label: __('On Submission', 'jetpack-forms'),
                          value: H,
                          options: [
                            {
                              label: __('Show a summary of submitted fields', 'jetpack-forms'),
                              value: ''
                            },
                            {
                              label: __('Show a custom text message', 'jetpack-forms'),
                              value: 'message'
                            },
                            {
                              label: __('Redirect to another webpage', 'jetpack-forms'),
                              value: 'redirect'
                            }
                          ],
                          onChange: e => t({
                            customThankyou: e
                          })
                        }
                      ),
                      'redirect' !== H &&
                      React.createElement(
                        i.TextControl,
                        {
                          label: __('Message Heading', 'jetpack-forms'),
                          value: D,
                          placeholder: __('Your message has been sent', 'jetpack-forms'),
                          onChange: e => t({
                            customThankyouHeading: e
                          })
                        }
                      ),
                      'message' === H &&
                      React.createElement(
                        i.TextareaControl,
                        {
                          label: __('Message Text', 'jetpack-forms'),
                          value: q,
                          placeholder: __('Thank you for your submission!', 'jetpack-forms'),
                          onChange: e => t({
                            customThankyouMessage: e
                          })
                        }
                      ),
                      'redirect' === H &&
                      React.createElement(
                        i.BaseControl,
                        {
                          label: __('Redirect Address', 'jetpack-forms'),
                          id: `contact-form-${ y }-thankyou-url`
                        },
                        React.createElement(
                          n.URLInput,
                          {
                            id: `contact-form-${ y }-thankyou-url`,
                            value: G,
                            className: 'jetpack-contact-form__thankyou-redirect-url',
                            onChange: e => t({
                              customThankyouRedirect: e
                            })
                          }
                        )
                      )
                    )
                  ),
                  React.createElement(
                    i.PanelBody,
                    {
                      title: __('Email Connection', 'jetpack-forms')
                    },
                    React.createElement(
                      C.Z,
                      {
                        emailAddress: Z,
                        emailSubject: V,
                        instanceId: y,
                        postAuthorEmail: s,
                        setAttributes: t
                      }
                    )
                  ),
                  K &&
                  U?.sendToSalesforce &&
                  React.createElement(j.Z, {
                    salesforceData: U,
                    setAttributes: t,
                    instanceId: y
                  }),
                  !(0, o.Wp) () &&
                  React.createElement(
                    u.Fragment,
                    null,
                    P &&
                    React.createElement(
                      i.PanelBody,
                      {
                        title: __('CRM Connection', 'jetpack-forms'),
                        initialOpen: !1
                      },
                      React.createElement(E.Z, {
                        jetpackCRM: z,
                        setAttributes: t
                      })
                    ),
                    React.createElement(
                      i.PanelBody,
                      {
                        title: __('Creative Mail', 'jetpack-forms'),
                        initialOpen: !1
                      },
                      React.createElement(R.Z, null)
                    )
                  )
                ),
                React.createElement(
                  'div',
                  {
                    className: Y,
                    style: T,
                    ref: O
                  },
                  React.createElement(
                    n.InnerBlocks,
                    {
                      allowedBlocks: S,
                      prioritizedInserterBlocks: A,
                      templateInsertUpdatesSelection: !1
                    }
                  )
                )
              ) : M ? React.createElement(k.Z, null) : React.createElement(
                g.f,
                {
                  changeStatus: e => {
                    $({
                      name: 'contact-form',
                      active: e
                    })
                  },
                  isModuleActive: L,
                  isLoading: F
                }
              )
            }
          )
        ),
        N = (0, s.compose) (
          [(0, c.withSelect) (
            (
              (e, t) => {
                const {
                  getBlockType: r,
                  getBlockVariations: a,
                  getDefaultBlockVariation: o
                }
                = e('core/blocks'),
                {
                  getBlocks: n
                }
                = e('core/block-editor'),
                {
                  getEditedPostAttribute: l
                }
                = e('core/editor'),
                {
                  getSite: i,
                  getUser: s,
                  canUser: c
                }
                = e('core'),
                {
                  isModuleActive: u,
                  areModulesLoading: p,
                  areModulesUpdating: d
                }
                = e('jetpack-modules'),
                m = n(t.clientId),
                h = l('author'),
                b = h &&
                s(h) &&
                s(h).email,
                g = l('title'),
                k = c('create', 'plugins'),
                E = m.find((e => 'jetpack/button' === e.name));
                if (E && !E.attributes.lock) {
                  const e = {
                    move: !1,
                    remove: !0
                  };
                  E.attributes.lock = e
                }
                return {
                  blockType: r &&
                  r(t.name),
                  canUserInstallPlugins: k,
                  defaultVariation: o &&
                  o(t.name, 'block'),
                  variations: a &&
                  a(t.name, 'block'),
                  innerBlocks: m,
                  hasInnerBlocks: m.length > 0,
                  siteTitle: (0, f.get) (i && i(), [
                    'title'
                  ]),
                  postTitle: g,
                  postAuthorEmail: b,
                  isModuleActive: u('contact-form'),
                  isLoadingModules: p(),
                  isChangingStatus: d()
                }
              }
            )
          ),
          (0, c.withDispatch) (
            (
              e => {
                const {
                  replaceInnerBlocks: t,
                  selectBlock: r
                }
                = e('core/block-editor'),
                {
                  updateJetpackModuleStatus: a
                }
                = e('jetpack-modules');
                return {
                  replaceInnerBlocks: t,
                  selectBlock: r,
                  updateJetpackModuleStatus: a
                }
              }
            )
          ),
          s.withInstanceId,
          e => t => React.createElement(a.ZP, null, React.createElement(e, t))]
        ) ((0, y.r) (B))
      },
      4913: (e, t, r) => {
        'use strict';
        r.d(t, {
          X: () => h,
          u: () => m
        });
        var a = r(2175),
        o = r(5609),
        n = r(5736),
        l = r(8003),
        i = r(1491),
        s = r(7829),
        c = r(5688),
        u = r(3644),
        p = r(4697),
        d = r(4189);
        const __ = n.__,
        _x = n._x,
        m = 'contact-form',
        f = (0, p.Z) (
          React.createElement(
            React.Fragment,
            null,
            React.createElement(
              o.Path,
              {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M18 9H13V7.5H18V9Z',
                fill: (0, u.m) ()
              }
            ),
            React.createElement(
              o.Path,
              {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M18 16.5H13V15H18V16.5Z',
                fill: (0, u.m) ()
              }
            ),
            React.createElement(
              o.Path,
              {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M9.5 7.5H7.5V9.5H9.5V7.5ZM7.5 6H9.5C10.3284 6 11 6.67157 11 7.5V9.5C11 10.3284 10.3284 11 9.5 11H7.5C6.67157 11 6 10.3284 6 9.5V7.5C6 6.67157 6.67157 6 7.5 6Z',
                fill: (0, u.m) ()
              }
            ),
            React.createElement(
              o.Path,
              {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M9.5 14.5H7.5V16.5H9.5V14.5ZM7.5 13H9.5C10.3284 13 11 13.6716 11 14.5V16.5C11 17.3284 10.3284 18 9.5 18H7.5C6.67157 18 6 17.3284 6 16.5V14.5C6 13.6716 6.67157 13 7.5 13Z',
                fill: (0, u.m) ()
              }
            ),
            React.createElement(
              o.Path,
              {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z',
                fill: (0, u.m) ()
              }
            )
          )
        ),
        h = {
          title: __('Form', 'jetpack-forms'),
          description: __(
            'Create forms to collect data from site visitors and manage their responses.',
            'jetpack-forms'
          ),
          icon: f,
          keywords: [
            _x('email', 'block search term', 'jetpack-forms'),
            _x('feedback', 'block search term', 'jetpack-forms'),
            _x('contact form', 'block search term', 'jetpack-forms')
          ],
          supports: {
            color: {
              link: !0,
              gradients: !0
            },
            html: !1,
            spacing: {
              padding: !0,
              margin: !0
            },
            align: [
              'wide',
              'full'
            ]
          },
          attributes: l.Z,
          edit: s.Z,
          save: () => {
            const e = a.useBlockProps.save();
            return React.createElement('div', e, React.createElement(a.InnerBlocks.Content, null))
          },
          example: {
            innerBlocks: [
              {
                name: 'jetpack/field-name',
                attributes: {
                  required: !0,
                  label: __('Name', 'jetpack-forms')
                }
              },
              {
                name: 'jetpack/field-email',
                attributes: {
                  required: !0,
                  label: __('Email', 'jetpack-forms')
                }
              },
              {
                name: 'jetpack/field-textarea',
                attributes: {
                  label: __('Message', 'jetpack-forms')
                }
              },
              {
                name: 'jetpack/button',
                attributes: {
                  text: __('Contact Us', 'jetpack-forms'),
                  element: 'button',
                  lock: {
                    remove: !0
                  }
                }
              }
            ]
          },
          styles: [
            {
              name: 'default',
              label: 'Default',
              isDefault: !0
            },
            {
              name: 'animated',
              label: 'Animated'
            },
            {
              name: 'outlined',
              label: 'Outlined'
            }
          ],
          variations: d.Z,
          category: 'contact-form',
          transforms: c.Z,
          deprecated: i.Z
        }
      },
      5688: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => s
        });
        var a = r(4981),
        o = r(5736),
        n = r(2819);
        const __ = o.__,
        l = (e, t, r) => {
          const a = r.match(new RegExp(`\[${ e }[^\]]* ${ t }="([^"]*)"`, 'im'));
          if (a && a.length) return a[1];
          const o = r.match(new RegExp(`\[${ e }[^\]]* ${ t }='([^']*)'`, 'im'));
          if (o && o.length) return o[1];
          const n = r.match(new RegExp(`\[${ e }[^\]]* ${ t }=([^\s]*)\s`, 'im'));
          return !(!n || !n.length) &&
          n[1]
        },
        i = {
          root: {
          },
          innerBlocks: []
        },
        s = {
          from: [
            {
              type: 'raw',
              priority: 1,
              isMatch: e => !(
                'P' !== e.nodeName ||
                !(
                  /\[contact-form(\s.*?)?\](?:([^\[]+)?)?/g.test(e.textContent) ||
                  /\[contact-field(\s.*?)?\](?:([^\[]+)?)?/g.test(e.textContent) ||
                  /\[\/contact-form]/g.test(e.textContent)
                )
              ),
              transform: e => {
                const t = e.textContent.replace('<br>', '');
                if (
                  t.includes('[contact-form') &&
                  (
                    i.root = {},
                    i.innerBlocks = [],
                    i.root = (
                      e => {
                        const t = {
                          to: l('contact-form', 'to', e),
                          subject: l('contact-form', 'subject', e),
                          submitButtonText: l('contact-form', 'submit_button_text', e)
                        };
                        return {
                          blockName: 'jetpack/contact-form',
                          attrs: (0, n.pickBy) (t, n.identity)
                        }
                      }
                    ) (t)
                  ),
                  t.includes('[contact-field')
                ) {
                  const e = t.match(/(\[contact-field[\s\S]*?\/?])/g);
                  e &&
                  e.length > 0 &&
                  e.forEach(
                    (
                      e => {
                        i.innerBlocks.push(
                          (
                            e => {
                              const t = {
                                label: l('contact-field', 'label', e),
                                placeholder: l('contact-field', 'placeholder', e),
                                required: l('contact-field', 'required', e),
                                options: l('contact-field', 'options', e)
                              },
                              r = (
                                e => {
                                  const t = 'jetpack',
                                  r = {
                                    text: `${ t }/field-text`,
                                    url: `${ t }/field-text`,
                                    textarea: `${ t }/field-textarea`,
                                    radio: `${ t }/field-radio`,
                                    checkbox: `${ t }/field-checkbox`,
                                    'checkbox-multiple': `${ t }/field-checkbox-multiple`,
                                    select: `${ t }/field-select`,
                                    email: `${ t }/field-email`,
                                    name: `${ t }/field-name`,
                                  default:
                                    `${ t }/field-text`
                                  };
                                  return r[e] ? r[e] : r.default
                                }
                              ) (l('contact-field', 'type', e));
                              return t.options &&
                              (t.options = t.options.split(',')),
                              (0, a.createBlock) (r, (0, n.pickBy) (t, n.identity))
                            }
                          ) (e)
                        )
                      }
                    )
                  )
                }
                if (t.includes('[/contact-form]')) {
                  i.innerBlocks.push(
                    (0, a.createBlock) (
                      'jetpack/button',
                      {
                        element: 'button',
                        text: i.root.attrs.submitButtonText ||
                        __('Contact Us', 'jetpack-forms')
                      }
                    )
                  );
                  return (0, a.createBlock) (i.root.blockName, i.root.attrs, i.innerBlocks)
                }
                return !1
              }
            }
          ],
          to: [
            {
              type: 'block',
              blocks: [
                'jetpack/subscriptions'
              ],
              transform: () => (0, a.createBlock) ('jetpack/subscriptions')
            }
          ]
        }
      },
      3644: (e, t, r) => {
        'use strict';
        r.d(t, {
          m: () => l
        });
        var a = r(550),
        o = r(3419);
        const n = a.O['Jetpack Green 40'];
        function l() {
          return (0, o.Ug) () ||
          (0, o.Wp) () ? null : n
        }
      },
      9019: (e, t, r) => {
        'use strict';
        r.d(t, {
          k: () => o
        });
        var a = r(2819);
        const o = (e, t, r, o) => setTimeout(
          (
            () => {
              (0, a.tap) (
                e.querySelectorAll(t) [r],
                (
                  e => {
                    if (e && (e.focus(), document.createRange && o)) {
                      const t = document.createRange();
                      t.selectNodeContents(e),
                      t.collapse(!1);
                      const r = document.defaultView.getSelection();
                      r.removeAllRanges(),
                      r.addRange(t)
                    }
                  }
                )
              )
            }
          ),
          0
        )
      },
      7940: () => {
        window.jetpackForms = window.jetpackForms ||
        {
        },
        window.jetpackForms.getBackgroundColor = function (e) {
          let t = window.getComputedStyle(e).backgroundColor;
          for (
            ;
            'rgba(0, 0, 0, 0)' === t &&
            e.parentNode &&
            e.parentNode.nodeType === window.Node.ELEMENT_NODE;
          ) if ('wp-block-cover' !== (e = e.parentNode).className) t = window.getComputedStyle(e).backgroundColor;
           else {
            const r = e.querySelector('.wp-block-cover__background');
            t = window.getComputedStyle(r).backgroundColor
          }
          return t
        },
        window.jetpackForms.generateStyleVariables = function (e) {
          const t = window['editor-canvas'] ? window['editor-canvas'].document : document,
          r = t.querySelector('body');
          if (!e) return;
          const a = t.createElement('div');
          a.className = 'contact-form__style-probe',
          a.style = 'position: absolute; z-index: -1; width: 1px; height: 1px; visibility: hidden',
          a.innerHTML = '\n\t\t\t<div class="contact-form">\n\t\t\t\t<div class="wp-block-button">\n\t\t\t\t\t<div class="wp-block-button__link btn-primary">Test</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="wp-block-button is-style-outline">\n\t\t\t\t\t<div class="wp-block-button__link btn-outline">Test</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="jetpack-field">\n\t\t\t\t\t<input class="jetpack-field__input" type="text">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t',
          e.parentNode.appendChild(a);
          const o = a.querySelector('.btn-primary'),
          n = a.querySelector('.btn-outline'),
          l = a.querySelector('input[type="text"]'),
          i = window.jetpackForms.getBackgroundColor(r),
          s = window.jetpackForms.getBackgroundColor(l),
          c = window.getComputedStyle(l).backgroundColor,
          {
            border: u,
            borderColor: p,
            backgroundColor: d,
            color: m
          }
          = window.getComputedStyle(o),
          {
            backgroundColor: f,
            border: h,
            borderWidth: b,
            borderRadius: g,
            color: k,
            padding: E,
            lineHeight: C
          }
          = window.getComputedStyle(n),
          v = window.jetpackForms.getBackgroundColor(n),
          {
            color: R,
            padding: j,
            paddingTop: y,
            paddingLeft: w,
            border: x,
            borderColor: S,
            borderWidth: A,
            borderStyle: I,
            borderRadius: B,
            fontSize: N,
            fontFamily: _,
            lineHeight: P
          }
          = window.getComputedStyle(l);
          return a.remove(),
          {
            '--jetpack--contact-form--primary-color': d,
            '--jetpack--contact-form--background-color': i,
            '--jetpack--contact-form--text-color': R,
            '--jetpack--contact-form--border': x,
            '--jetpack--contact-form--border-color': S,
            '--jetpack--contact-form--border-size': A,
            '--jetpack--contact-form--border-style': I,
            '--jetpack--contact-form--border-radius': B,
            '--jetpack--contact-form--input-background': c,
            '--jetpack--contact-form--input-background-fallback': s,
            '--jetpack--contact-form--input-padding': j,
            '--jetpack--contact-form--input-padding-top': y,
            '--jetpack--contact-form--input-padding-left': w,
            '--jetpack--contact-form--font-size': N,
            '--jetpack--contact-form--font-family': _,
            '--jetpack--contact-form--line-height': P,
            '--jetpack--contact-form--button-primary--color': m,
            '--jetpack--contact-form--button-primary--background-color': d,
            '--jetpack--contact-form--button-primary--border': u,
            '--jetpack--contact-form--button-primary--border-color': p,
            '--jetpack--contact-form--button-outline--padding': E,
            '--jetpack--contact-form--button-outline--border': h,
            '--jetpack--contact-form--button-outline--background-color': f,
            '--jetpack--contact-form--button-outline--background-color-fallback': v,
            '--jetpack--contact-form--button-outline--border-size': b,
            '--jetpack--contact-form--button-outline--border-radius': g,
            '--jetpack--contact-form--button-outline--text-color': k,
            '--jetpack--contact-form--button-outline--line-height': C
          }
        }
      },
      7155: (e, t, r) => {
        'use strict';
        r.d(t, {
          D6: () => d,
          JH: () => c,
          RK: () => p,
          mo: () => u
        });
        var a = r(2175),
        o = r(4981),
        n = r(9818),
        l = r(9307),
        i = r(5736);
        const __ = i.__,
        s = 'jetpack/contact-form',
        c = {
          ANIMATED: 'animated',
          BELOW: 'below',
          DEFAULT: 'default',
          OUTLINED: 'outlined'
        },
        u = ({
          attributes: e,
          clientId: t,
          name: r
        }) => {
          const i = {
            text: __('Submit', 'jetpack-forms'),
            element: 'button',
            lock: {
              remove: !0
            }
          },
          {
            replaceBlock: c
          }
          = (0, n.useDispatch) (a.store),
          u = (0, n.useSelect) ((e => e(a.store).getBlockParentsByBlockName(t, s)));
          (0, l.useEffect) (
            (
              () => {
                u?.length ||
                c(
                  t,
                  (0, o.createBlock) (
                    s,
                    {
                    },
                    [
                      (0, o.createBlock) (r, e),
                      (0, o.createBlock) ('jetpack/button', i)
                    ]
                  )
                )
              }
            ),
            []
          )
        },
        p = e => {
          const t = e &&
          e.match(/is-style-([^\s]+)/i);
          return t ? t[1] : ''
        },
        d = e => {
          const t = (0, n.useSelect) (
            (
              t => {
                const [r] = t(a.store).getBlockParentsByBlockName(e, s);
                return t(a.store).getBlockAttributes(r)
              }
            )
          );
          return p(t?.className) ||
          c.DEFAULT
        }
      },
      9289: (e, t, r) => {
        'use strict';
        r.d(t, {
          bu: () => s,
          uM: () => l,
          yX: () => i
        });
        var a = r(3419),
        o = r(6989),
        n = r.n(o);
        async function l() {
          if ((0, a.Wp) ()) return Promise.reject();
          try {
            return await n() ({
              path: '/jetpack/v4/plugins'
            })
          } catch (e) {
            return Promise.reject(e.message)
          }
        }
        async function i(e) {
          if ((0, a.Wp) ()) return Promise.reject();
          try {
            return await n() ({
              path: '/jetpack/v4/plugins',
              method: 'POST',
              data: {
                slug: e,
                status: 'active',
                source: 'block-editor'
              }
            })
          } catch (e) {
            return Promise.reject(e.message)
          }
        }
        async function s(e) {
          if ((0, a.Wp) ()) return Promise.reject();
          try {
            return await n() ({
              path: `/jetpack/v4/plugins/${ e }`,
              method: 'POST',
              data: {
                status: 'active',
                source: 'block-editor'
              }
            })
          } catch (e) {
            return Promise.reject(e.message)
          }
        }
      },
      7469: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => l
        });
        var a = r(3419),
        o = r(4981),
        n = r(2694);
        function l(e, t, r = [], l = !0) {
          const {
            available: i,
            details: s,
            unavailableReason: c
          }
          = (0, a.OZ) (e),
          u = (0, a._D) (c, s),
          p = l ? 'jetpack/' : '';
          if (!i && !u) return !1;
          const d = (0, o.registerBlockType) (p + e, t);
          return u &&
          (0, n.addFilter) (
            'editor.BlockListBlock',
            `${ p + e }-with-has-warning-is-interactive-class-names`,
            (0, a.T) (p + e)
          ),
          r.forEach((e => (0, o.registerBlockType) (p + e.name, e.settings))),
          d
        }
      },
      4697: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => o
        });
        var a = r(5609);
        const o = (e, t = 24, r = 24, o = '0 0 24 24') => React.createElement(
          a.SVG,
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: t,
            height: r,
            viewBox: o
          },
          React.createElement(
            a.Path,
            {
              fill: 'none',
              d: 'M0 0h24v24H0V0z',
              className: 'icon-filler'
            }
          ),
          e
        )
      },
      2316: (e, t, r) => {
        'use strict';
        r.d(t, {
          j: () => n
        });
        var a = r(9818),
        o = r(2819);
        const n = e => (0, a.useSelect) (
          (
            t => {
              const r = t('core/block-editor');
              return r.getBlockAttributes((0, o.first) (r.getBlockParents(e, !0)))
            }
          )
        )
      },
      6101: (e, t, r) => {
        'use strict';
        r.d(t, {
          j: () => s
        });
        var a = r(2674),
        o = r.n(a),
        n = r(9818),
        l = r(9307),
        i = r(2819);
        const s = e => t => ({
          attributes: r,
          clientId: a,
          setAttributes: s,
          ...c
        }) => {
          const u = (
            ({
              attributes: e,
              clientId: t,
              setAttributes: r,
              sharedAttributes: a
            }) => {
              const {
                updateBlockAttributes: o
              }
              = (0, n.useDispatch) ('core/block-editor'),
              s = (0, n.useSelect) (
                (
                  e => {
                    const r = e('core/block-editor'),
                    a = (0, i.first) (r.getBlockParentsByBlockName(t, 'jetpack/contact-form'));
                    return (0, i.filter) (
                      r.getBlocks(a),
                      (
                        e => e.name.indexOf('jetpack/field') > - 1 &&
                        e.attributes.shareFieldAttributes
                      )
                    )
                  }
                ),
                [
                  t
                ]
              );
              return (0, l.useEffect) (
                (
                  () => {
                    if (!(0, i.isEmpty) (s) && e.shareFieldAttributes) {
                      const e = (0, i.pick) ((0, i.first) (s).attributes, a);
                      o([t], e)
                    }
                  }
                ),
                []
              ),
              (0, l.useCallback) (
                (
                  n => {
                    let l,
                    c;
                    e.shareFieldAttributes &&
                    (0, i.isNil) (n.shareFieldAttributes) ? (l = (0, i.map) (s, (e => e.clientId)), c = (0, i.pick) (n, a)) : n.shareFieldAttributes &&
                    !(0, i.isEmpty) (s) &&
                    (l = [
                      t
                    ], c = (0, i.pick) ((0, i.first) (s).attributes, a)),
                    (0, i.isEmpty) (l) ||
                    (0, i.isEmpty) (c) ||
                    o(l, c),
                    r(n)
                  }
                ),
                [
                  e,
                  t,
                  r,
                  a,
                  s,
                  o
                ]
              )
            }
          ) ({
            attributes: r,
            clientId: a,
            setAttributes: s,
            sharedAttributes: e
          });
          return React.createElement(t, o() ({
            attributes: r,
            clientId: a,
            setAttributes: u
          }, c))
        }
      },
      3120: (e, t, r) => {
        'use strict';
        r.d(t, {
          r: () => l
        });
        var a = r(2674),
        o = r.n(a),
        n = (r(7940), r(9307));
        const l = e => t => {
          const {
            generateStyleVariables: r
          }
          = window.jetpackForms,
          a = (0, n.useRef) ();
          return React.createElement(e, o() ({
            style: r(a?.current)
          }, t, {
            ref: a
          }))
        }
      },
      4189: (e, t, r) => {
        'use strict';
        r.d(t, {
          Z: () => d
        });
        var a = r(3419),
        o = r(5609),
        n = r(5736),
        l = r(4955),
        i = r(2819),
        s = r(1726),
        c = r(3644),
        u = r(4697);
        const __ = n.__,
        _x = n._x,
        p = {
          style: {
            spacing: {
              padding: {
                top: '16px',
                right: '16px',
                bottom: '16px',
                left: '16px'
              }
            }
          }
        },
        d = (0, i.compact) (
          [{
            name: 'contact-form',
            title: __('Contact Form', 'jetpack-forms'),
            description: __('Add a contact form to your page.', 'jetpack-forms'),
            icon: (0, u.Z) (
              React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  o.Path,
                  {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M12 5.3203L6.6477 9L12 12.6797L17.3523 9L12 5.3203ZM12 3.5L4 9L12 14.5L20 9L12 3.5Z',
                    fill: (0, c.m) ()
                  }
                ),
                React.createElement(
                  o.Path,
                  {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M4 18V9H5.5V18C5.5 18.4142 5.83579 18.75 6.25 18.75H17.75C18.1642 18.75 18.5 18.4142 18.5 18V9H20V18C20 19.2426 18.9926 20.25 17.75 20.25H6.25C5.00736 20.25 4 19.2426 4 18Z',
                    fill: (0, c.m) ()
                  }
                )
              ),
              24,
              24,
              '0 0 24 24'
            ),
            innerBlocks: [
              ['jetpack/field-name',
              {
                required: !0,
                label: __('Name', 'jetpack-forms')
              }
              ],
              [
                'jetpack/field-email',
                {
                  required: !0,
                  label: __('Email', 'jetpack-forms')
                }
              ],
              [
                'jetpack/field-textarea',
                {
                  label: __('Message', 'jetpack-forms')
                }
              ],
              [
                'jetpack/button',
                {
                  text: __('Contact Us', 'jetpack-forms'),
                  element: 'button',
                  lock: {
                    remove: !0
                  }
                }
              ]
            ],
            attributes: {
              ...p
            }
          },
          !(0, a.Wp) () &&
          {
            name: 'newsletter-form',
            title: __('Lead capture', 'jetpack-forms'),
            description: __(
              'A simple way to collect leads using forms on your site.',
              'jetpack-forms'
            ),
            keywords: [
              _x('subscribe', 'block search term', 'jetpack-forms'),
              _x('email', 'block search term', 'jetpack-forms'),
              _x('signup', 'block search term', 'jetpack-forms')
            ],
            icon: l.Z,
            innerBlocks: [
              ['jetpack/field-name',
              {
                required: !0,
                label: __('Name', 'jetpack-forms')
              }
              ],
              [
                'jetpack/field-email',
                {
                  required: !0,
                  label: __('Email', 'jetpack-forms')
                }
              ],
              [
                'jetpack/field-consent',
                {
                }
              ],
              [
                'jetpack/button',
                {
                  text: __('Subscribe', 'jetpack-forms'),
                  element: 'button',
                  lock: {
                    remove: !0
                  }
                }
              ]
            ],
            attributes: {
              ...p
            }
          },
          {
            name: 'rsvp-form',
            title: __('RSVP Form', 'jetpack-forms'),
            description: __('Add an RSVP form to your page', 'jetpack-forms'),
            icon: (0, u.Z) (
              React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  o.Path,
                  {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M7.87868 15.5L5.5 17.8787L5.5 6C5.5 5.72386 5.72386 5.5 6 5.5L18 5.5C18.2761 5.5 18.5 5.72386 18.5 6L18.5 15C18.5 15.2761 18.2761 15.5 18 15.5L7.87868 15.5ZM8.5 17L18 17C19.1046 17 20 16.1046 20 15L20 6C20 4.89543 19.1046 4 18 4L6 4C4.89543 4 4 4.89543 4 6L4 18.9393C4 19.5251 4.47487 20 5.06066 20C5.34196 20 5.61175 19.8883 5.81066 19.6893L8.5 17Z',
                    fill: (0, c.m) ()
                  }
                ),
                React.createElement(
                  o.Path,
                  {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M15.6087 7.93847L11.4826 13.6692L8.45898 10.5196L9.54107 9.48084L11.3175 11.3313L14.3914 7.06201L15.6087 7.93847Z',
                    fill: (0, c.m) ()
                  }
                )
              ),
              24,
              24,
              '0 0 24 24'
            ),
            innerBlocks: [
              ['jetpack/field-name',
              {
                required: !0,
                label: __('Name', 'jetpack-forms')
              }
              ],
              [
                'jetpack/field-email',
                {
                  required: !0,
                  label: __('Email', 'jetpack-forms')
                }
              ],
              [
                'jetpack/field-radio',
                {
                  label: __('Attending?', 'jetpack-forms'),
                  required: !0,
                  options: [
                    __('Yes', 'jetpack-forms'),
                    __('No', 'jetpack-forms')
                  ]
                }
              ],
              [
                'jetpack/field-textarea',
                {
                  label: __('Other Details', 'jetpack-forms')
                }
              ],
              [
                'jetpack/button',
                {
                  text: __('Send RSVP', 'jetpack-forms'),
                  element: 'button',
                  lock: {
                    remove: !0
                  }
                }
              ]
            ],
            attributes: {
              ...p,
              subject: __('A new RSVP from your website', 'jetpack-forms')
            }
          },
          {
            name: 'registration-form',
            title: __('Registration Form', 'jetpack-forms'),
            description: __('Add a Registration form to your page', 'jetpack-forms'),
            icon: (0, u.Z) (
              React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  o.Path,
                  {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M18.5 5.5V8H20V5.5H22.5V4H20V1.5H18.5V4H16V5.5H18.5ZM12 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12H18.5V18C18.5 18.2761 18.2761 18.5 18 18.5H6C5.72386 18.5 5.5 18.2761 5.5 18V6C5.5 5.72386 5.72386 5.5 6 5.5H12V4Z',
                    fill: (0, c.m) ()
                  }
                ),
                React.createElement(
                  o.Path,
                  {
                    d: 'M16.75 17.5V15.5C16.75 13.9812 15.5188 12.75 14 12.75H10C8.48122 12.75 7.25 13.9812 7.25 15.5V17.5H8.75V15.5C8.75 14.8096 9.30964 14.25 10 14.25H14C14.6904 14.25 15.25 14.8096 15.25 15.5V17.5H16.75Z',
                    fill: (0, c.m) ()
                  }
                ),
                React.createElement(
                  o.Path,
                  {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9ZM13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z',
                    fill: (0, c.m) ()
                  }
                )
              ),
              24,
              24,
              '0 0 24 24'
            ),
            innerBlocks: [
              ['jetpack/field-name',
              {
                required: !0,
                label: __('Name', 'jetpack-forms')
              }
              ],
              [
                'jetpack/field-email',
                {
                  required: !0,
                  label: __('Email', 'jetpack-forms')
                }
              ],
              [
                'jetpack/field-telephone',
                {
                  label: __('Phone', 'jetpack-forms')
                }
              ],
              [
                'jetpack/field-select',
                {
                  label: __('How did you hear about us?', 'jetpack-forms'),
                  options: [
                    __('Search Engine', 'jetpack-forms'),
                    __('Social Media', 'jetpack-forms'),
                    __('TV', 'jetpack-forms'),
                    __('Radio', 'jetpack-forms'),
                    __('Friend or Family', 'jetpack-forms')
                  ]
                }
              ],
              [
                'jetpack/field-textarea',
                {
                  label: __('Other Details', 'jetpack-forms')
                }
              ],
              [
                'jetpack/button',
                {
                  text: __('Send', 'jetpack-forms'),
                  element: 'button',
                  lock: {
                    remove: !0
                  }
                }
              ]
            ],
            attributes: {
              ...p,
              subject: __('A new registration from your website', 'jetpack-forms')
            }
          },
          {
            name: 'appointment-form',
            title: __('Appointment Form', 'jetpack-forms'),
            description: __(
              'Add an Appointment booking form to your page',
              'jetpack-forms'
            ),
            icon: (0, u.Z) (
              React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  o.Path,
                  {
                    d: 'M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V8H4V6Z',
                    fill: (0, c.m) ()
                  }
                ),
                React.createElement(o.Path, {
                  d: 'M7 9.25H11V13.25H7V9.25Z',
                  fill: (0, c.m) ()
                }),
                React.createElement(
                  o.Path,
                  {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M6 5.5H18C18.2761 5.5 18.5 5.72386 18.5 6V12H20V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V18.5H6C5.72386 18.5 5.5 18.2761 5.5 18V6C5.5 5.72386 5.72386 5.5 6 5.5Z',
                    fill: (0, c.m) ()
                  }
                ),
                React.createElement(
                  o.Path,
                  {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M17.25 21V15H18.75V21H17.25Z',
                    fill: (0, c.m) ()
                  }
                ),
                React.createElement(
                  o.Path,
                  {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M15 17.25L21 17.25L21 18.75L15 18.75L15 17.25Z',
                    fill: (0, c.m) ()
                  }
                )
              ),
              24,
              24,
              '0 0 24 24'
            ),
            innerBlocks: [
              ['jetpack/field-name',
              {
                required: !0,
                label: __('Name', 'jetpack-forms')
              }
              ],
              [
                'jetpack/field-email',
                {
                  required: !0,
                  label: __('Email', 'jetpack-forms')
                }
              ],
              [
                'jetpack/field-telephone',
                {
                  required: !0,
                  label: __('Phone', 'jetpack-forms')
                }
              ],
              [
                'jetpack/field-date',
                {
                  label: __('Date', 'jetpack-forms'),
                  required: !0
                }
              ],
              [
                'jetpack/field-radio',
                {
                  label: __('Time', 'jetpack-forms'),
                  required: !0,
                  options: [
                    __('Morning', 'jetpack-forms'),
                    __('Afternoon', 'jetpack-forms')
                  ]
                }
              ],
              [
                'jetpack/field-textarea',
                {
                  label: __('Notes', 'jetpack-forms')
                }
              ],
              [
                'jetpack/button',
                {
                  text: __('Book Appointment', 'jetpack-forms'),
                  element: 'button',
                  lock: {
                    remove: !0
                  }
                }
              ]
            ],
            attributes: {
              ...p,
              subject: __('A new appointment booked from your website', 'jetpack-forms')
            }
          },
          {
            name: 'feedback-form',
            title: __('Feedback Form', 'jetpack-forms'),
            description: __('Add a Feedback form to your page', 'jetpack-forms'),
            icon: (0, u.Z) (
              React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  o.Path,
                  {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z',
                    fill: (0, c.m) ()
                  }
                ),
                React.createElement(
                  o.Path,
                  {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M9.5 11C10.3284 11 11 10.3284 11 9.5C11 8.67157 10.3284 8 9.5 8C8.67157 8 8 8.67157 8 9.5C8 10.3284 8.67157 11 9.5 11Z',
                    fill: (0, c.m) ()
                  }
                ),
                React.createElement(
                  o.Path,
                  {
                    d: 'M16 9.5C16 10.3284 15.3284 11 14.5 11C13.6716 11 13 10.3284 13 9.5C13 8.67157 13.6716 8 14.5 8C15.3284 8 16 8.67157 16 9.5Z',
                    fill: (0, c.m) ()
                  }
                ),
                React.createElement(
                  o.Path,
                  {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z',
                    fill: (0, c.m) ()
                  }
                ),
                React.createElement(
                  o.Path,
                  {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M8.16492 14.6566L7.41431 13.7183L8.58561 12.7812L9.33622 13.7195C9.98358 14.5287 10.9637 14.9998 12 14.9998C13.0362 14.9998 14.0163 14.5287 14.6637 13.7195L15.4143 12.7812L16.5856 13.7183L15.835 14.6566C14.903 15.8216 13.4919 16.4998 12 16.4998C10.508 16.4998 9.09693 15.8216 8.16492 14.6566Z',
                    fill: (0, c.m) ()
                  }
                )
              ),
              24,
              24,
              '0 0 24 24'
            ),
            innerBlocks: [
              ['jetpack/field-name',
              {
                required: !0,
                label: __('Name', 'jetpack-forms')
              }
              ],
              [
                'jetpack/field-email',
                {
                  required: !0,
                  label: __('Email', 'jetpack-forms')
                }
              ],
              [
                'jetpack/field-radio',
                {
                  label: __('Please rate our website', 'jetpack-forms'),
                  required: !0,
                  options: [
                    __('1 - Very Bad', 'jetpack-forms'),
                    __('2 - Poor', 'jetpack-forms'),
                    __('3 - Average', 'jetpack-forms'),
                    __('4 - Good', 'jetpack-forms'),
                    __('5 - Excellent', 'jetpack-forms')
                  ]
                }
              ],
              [
                'jetpack/field-textarea',
                {
                  label: __('How could we improve?', 'jetpack-forms')
                }
              ],
              [
                'jetpack/button',
                {
                  text: __('Send Feedback', 'jetpack-forms'),
                  element: 'button',
                  lock: {
                    remove: !0
                  }
                }
              ]
            ],
            attributes: {
              ...p,
              subject: __('New feedback received from your website', 'jetpack-forms')
            }
          },
          s.W]
        )
      },
      1128: (e, t, r) => {
        t.formatArgs = function (t) {
          if (
            t[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + t[0] + (this.useColors ? '%c ' : ' ') + '+' + e.exports.humanize(this.diff),
            !this.useColors
          ) return;
          const r = 'color: ' + this.color;
          t.splice(1, 0, r, 'color: inherit');
          let a = 0,
          o = 0;
          t[0].replace(/%[a-zA-Z%]/g, (e => {
            '%%' !== e &&
            (a++, '%c' === e && (o = a))
          })),
          t.splice(o, 0, r)
        },
        t.save = function (e) {
          try {
            e ? t.storage.setItem('debug', e) : t.storage.removeItem('debug')
          } catch (e) {
          }
        },
        t.load = function () {
          let e;
          try {
            e = t.storage.getItem('debug')
          } catch (e) {
          }
          !e &&
          'undefined' != typeof process &&
          'env' in process &&
          (e = process.env.DEBUG);
          return e
        },
        t.useColors = function () {
          if (
            'undefined' != typeof window &&
            window.process &&
            ('renderer' === window.process.type || window.process.__nwjs)
          ) return !0;
          if (
            'undefined' != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          ) return !1;
          return 'undefined' != typeof document &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance ||
          'undefined' != typeof window &&
          window.console &&
          (
            window.console.firebug ||
            window.console.exception &&
            window.console.table
          ) ||
          'undefined' != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31 ||
          'undefined' != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        },
        t.storage = function () {
          try {
            return localStorage
          } catch (e) {
          }
        }(),
        t.destroy = (
          () => {
            let e = !1;
            return () => {
              e ||
              (
                e = !0,
                console.warn(
                  'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
                )
              )
            }
          }
        ) (),
        t.colors = [
          '#0000CC',
          '#0000FF',
          '#0033CC',
          '#0033FF',
          '#0066CC',
          '#0066FF',
          '#0099CC',
          '#0099FF',
          '#00CC00',
          '#00CC33',
          '#00CC66',
          '#00CC99',
          '#00CCCC',
          '#00CCFF',
          '#3300CC',
          '#3300FF',
          '#3333CC',
          '#3333FF',
          '#3366CC',
          '#3366FF',
          '#3399CC',
          '#3399FF',
          '#33CC00',
          '#33CC33',
          '#33CC66',
          '#33CC99',
          '#33CCCC',
          '#33CCFF',
          '#6600CC',
          '#6600FF',
          '#6633CC',
          '#6633FF',
          '#66CC00',
          '#66CC33',
          '#9900CC',
          '#9900FF',
          '#9933CC',
          '#9933FF',
          '#99CC00',
          '#99CC33',
          '#CC0000',
          '#CC0033',
          '#CC0066',
          '#CC0099',
          '#CC00CC',
          '#CC00FF',
          '#CC3300',
          '#CC3333',
          '#CC3366',
          '#CC3399',
          '#CC33CC',
          '#CC33FF',
          '#CC6600',
          '#CC6633',
          '#CC9900',
          '#CC9933',
          '#CCCC00',
          '#CCCC33',
          '#FF0000',
          '#FF0033',
          '#FF0066',
          '#FF0099',
          '#FF00CC',
          '#FF00FF',
          '#FF3300',
          '#FF3333',
          '#FF3366',
          '#FF3399',
          '#FF33CC',
          '#FF33FF',
          '#FF6600',
          '#FF6633',
          '#FF9900',
          '#FF9933',
          '#FFCC00',
          '#FFCC33'
        ],
        t.log = console.debug ||
        console.log ||
        (() => {
        }),
        e.exports = r(2942) (t);
        const {
          formatters: a
        }
        = e.exports;
        a.j = function (e) {
          try {
            return JSON.stringify(e)
          } catch (e) {
            return '[UnexpectedJSONParseError]: ' + e.message
          }
        }
      },
      2942: (e, t, r) => {
        e.exports = function (e) {
          function t(e) {
            let r,
            o,
            n,
            l = null;
            function i(...e) {
              if (!i.enabled) return;
              const a = i,
              o = Number(new Date),
              n = o - (r || o);
              a.diff = n,
              a.prev = r,
              a.curr = o,
              r = o,
              e[0] = t.coerce(e[0]),
              'string' != typeof e[0] &&
              e.unshift('%O');
              let l = 0;
              e[0] = e[0].replace(
                /%([a-zA-Z%])/g,
                (
                  (r, o) => {
                    if ('%%' === r) return '%';
                    l++;
                    const n = t.formatters[o];
                    if ('function' == typeof n) {
                      const t = e[l];
                      r = n.call(a, t),
                      e.splice(l, 1),
                      l--
                    }
                    return r
                  }
                )
              ),
              t.formatArgs.call(a, e);
              (a.log || t.log).apply(a, e)
            }
            return i.namespace = e,
            i.useColors = t.useColors(),
            i.color = t.selectColor(e),
            i.extend = a,
            i.destroy = t.destroy,
            Object.defineProperty(
              i,
              'enabled',
              {
                enumerable: !0,
                configurable: !1,
                get: () => null !== l ? l : (o !== t.namespaces && (o = t.namespaces, n = t.enabled(e)), n),
                set: e => {
                  l = e
                }
              }
            ),
            'function' == typeof t.init &&
            t.init(i),
            i
          }
          function a(e, r) {
            const a = t(this.namespace + (void 0 === r ? ':' : r) + e);
            return a.log = this.log,
            a
          }
          function o(e) {
            return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, '*')
          }
          return t.debug = t,
          t.default = t,
          t.coerce = function (e) {
            if (e instanceof Error) return e.stack ||
            e.message;
            return e
          },
          t.disable = function () {
            const e = [
              ...t.names.map(o),
              ...t.skips.map(o).map((e => '-' + e))
            ].join(',');
            return t.enable(''),
            e
          },
          t.enable = function (e) {
            let r;
            t.save(e),
            t.namespaces = e,
            t.names = [],
            t.skips = [];
            const a = ('string' == typeof e ? e : '').split(/[\s,]+/),
            o = a.length;
            for (r = 0; r < o; r++) a[r] &&
            (
              '-' === (e = a[r].replace(/\*/g, '.*?')) [0] ? t.skips.push(new RegExp('^' + e.slice(1) + '$')) : t.names.push(new RegExp('^' + e + '$'))
            )
          },
          t.enabled = function (e) {
            if ('*' === e[e.length - 1]) return !0;
            let r,
            a;
            for (r = 0, a = t.skips.length; r < a; r++) if (t.skips[r].test(e)) return !1;
            for (r = 0, a = t.names.length; r < a; r++) if (t.names[r].test(e)) return !0;
            return !1
          },
          t.humanize = r(3171),
          t.destroy = function () {
            console.warn(
              'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
            )
          },
          Object.keys(e).forEach((r => {
            t[r] = e[r]
          })),
          t.names = [],
          t.skips = [],
          t.formatters = {},
          t.selectColor = function (e) {
            let r = 0;
            for (let t = 0; t < e.length; t++) r = (r << 5) - r + e.charCodeAt(t),
            r |= 0;
            return t.colors[Math.abs(r) % t.colors.length]
          },
          t.enable(t.load()),
          t
        }
      },
      3139: (e, t, r) => {
        'use strict';
        t.Z = function (e) {
          var t = e.size,
          r = void 0 === t ? 24 : t,
          a = e.onClick,
          i = (e.icon, e.className),
          s = function (e, t) {
            if (null == e) return {
            };
            var r,
            a,
            o = function (e, t) {
              if (null == e) return {
              };
              var r,
              a,
              o = {},
              n = Object.keys(e);
              for (a = 0; a < n.length; a++) r = n[a],
              0 <= t.indexOf(r) ||
              (o[r] = e[r]);
              return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              for (a = 0; a < n.length; a++) r = n[a],
              0 <= t.indexOf(r) ||
              Object.prototype.propertyIsEnumerable.call(e, r) &&
              (o[r] = e[r])
            }
            return o
          }(e, n),
          c = [
            'gridicon',
            'gridicons-notice-outline',
            i,
            !!function (e) {
              return 0 == e % 18
            }(r) &&
            'needs-offset',
            !1,
            !1
          ].filter(Boolean).join(' ');
          return o.default.createElement(
            'svg',
            l({
              className: c,
              height: r,
              width: r,
              onClick: a
            }, s, {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24'
            }),
            o.default.createElement(
              'g',
              null,
              o.default.createElement(
                'path',
                {
                  d: 'M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z'
                }
              )
            )
          )
        };
        var a,
        o = (a = r(9196)) &&
        a.__esModule ? a : {
        default:
          a
        },
        n = [
          'size',
          'onClick',
          'icon',
          'className'
        ];
        function l() {
          return l = Object.assign ||
          function (e) {
            for (var t, r = 1; r < arguments.length; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) &&
            (e[a] = t[a]);
            return e
          },
          l.apply(this, arguments)
        }
      },
      6389: e => {
        'use strict';
        e.exports = function (e) {
          e.prototype[Symbol.iterator] = function * () {
            for (let e = this.head; e; e = e.next) yield e.value
          }
        }
      },
      7811: (e, t, r) => {
        'use strict';
        function a(e) {
          var t = this;
          if (
            t instanceof a ||
            (t = new a),
            t.tail = null,
            t.head = null,
            t.length = 0,
            e &&
            'function' == typeof e.forEach
          ) e.forEach((function (e) {
            t.push(e)
          }));
           else if (arguments.length > 0) for (var r = 0, o = arguments.length; r < o; r++) t.push(arguments[r]);
          return t
        }
        function o(e, t, r) {
          var a = t === e.head ? new i(r, null, t, e) : new i(r, t, t.next, e);
          return null === a.next &&
          (e.tail = a),
          null === a.prev &&
          (e.head = a),
          e.length++,
          a
        }
        function n(e, t) {
          e.tail = new i(t, e.tail, null, e),
          e.head ||
          (e.head = e.tail),
          e.length++
        }
        function l(e, t) {
          e.head = new i(t, null, e.head, e),
          e.tail ||
          (e.tail = e.head),
          e.length++
        }
        function i(e, t, r, a) {
          if (!(this instanceof i)) return new i(e, t, r, a);
          this.list = a,
          this.value = e,
          t ? (t.next = this, this.prev = t) : this.prev = null,
          r ? (r.prev = this, this.next = r) : this.next = null
        }
        e.exports = a,
        a.Node = i,
        a.create = a,
        a.prototype.removeNode = function (e) {
          if (e.list !== this) throw new Error('removing node which does not belong to this list');
          var t = e.next,
          r = e.prev;
          return t &&
          (t.prev = r),
          r &&
          (r.next = t),
          e === this.head &&
          (this.head = t),
          e === this.tail &&
          (this.tail = r),
          e.list.length--,
          e.next = null,
          e.prev = null,
          e.list = null,
          t
        },
        a.prototype.unshiftNode = function (e) {
          if (e !== this.head) {
            e.list &&
            e.list.removeNode(e);
            var t = this.head;
            e.list = this,
            e.next = t,
            t &&
            (t.prev = e),
            this.head = e,
            this.tail ||
            (this.tail = e),
            this.length++
          }
        },
        a.prototype.pushNode = function (e) {
          if (e !== this.tail) {
            e.list &&
            e.list.removeNode(e);
            var t = this.tail;
            e.list = this,
            e.prev = t,
            t &&
            (t.next = e),
            this.tail = e,
            this.head ||
            (this.head = e),
            this.length++
          }
        },
        a.prototype.push = function () {
          for (var e = 0, t = arguments.length; e < t; e++) n(this, arguments[e]);
          return this.length
        },
        a.prototype.unshift = function () {
          for (var e = 0, t = arguments.length; e < t; e++) l(this, arguments[e]);
          return this.length
        },
        a.prototype.pop = function () {
          if (this.tail) {
            var e = this.tail.value;
            return this.tail = this.tail.prev,
            this.tail ? this.tail.next = null : this.head = null,
            this.length--,
            e
          }
        },
        a.prototype.shift = function () {
          if (this.head) {
            var e = this.head.value;
            return this.head = this.head.next,
            this.head ? this.head.prev = null : this.tail = null,
            this.length--,
            e
          }
        },
        a.prototype.forEach = function (e, t) {
          t = t ||
          this;
          for (var r = this.head, a = 0; null !== r; a++) e.call(t, r.value, a, this),
          r = r.next
        },
        a.prototype.forEachReverse = function (e, t) {
          t = t ||
          this;
          for (var r = this.tail, a = this.length - 1; null !== r; a--) e.call(t, r.value, a, this),
          r = r.prev
        },
        a.prototype.get = function (e) {
          for (var t = 0, r = this.head; null !== r && t < e; t++) r = r.next;
          if (t === e && null !== r) return r.value
        },
        a.prototype.getReverse = function (e) {
          for (var t = 0, r = this.tail; null !== r && t < e; t++) r = r.prev;
          if (t === e && null !== r) return r.value
        },
        a.prototype.map = function (e, t) {
          t = t ||
          this;
          for (var r = new a, o = this.head; null !== o; ) r.push(e.call(t, o.value, this)),
          o = o.next;
          return r
        },
        a.prototype.mapReverse = function (e, t) {
          t = t ||
          this;
          for (var r = new a, o = this.tail; null !== o; ) r.push(e.call(t, o.value, this)),
          o = o.prev;
          return r
        },
        a.prototype.reduce = function (e, t) {
          var r,
          a = this.head;
          if (arguments.length > 1) r = t;
           else {
            if (!this.head) throw new TypeError('Reduce of empty list with no initial value');
            a = this.head.next,
            r = this.head.value
          }
          for (var o = 0; null !== a; o++) r = e(r, a.value, o),
          a = a.next;
          return r
        },
        a.prototype.reduceReverse = function (e, t) {
          var r,
          a = this.tail;
          if (arguments.length > 1) r = t;
           else {
            if (!this.tail) throw new TypeError('Reduce of empty list with no initial value');
            a = this.tail.prev,
            r = this.tail.value
          }
          for (var o = this.length - 1; null !== a; o--) r = e(r, a.value, o),
          a = a.prev;
          return r
        },
        a.prototype.toArray = function () {
          for (var e = new Array(this.length), t = 0, r = this.head; null !== r; t++) e[t] = r.value,
          r = r.next;
          return e
        },
        a.prototype.toArrayReverse = function () {
          for (var e = new Array(this.length), t = 0, r = this.tail; null !== r; t++) e[t] = r.value,
          r = r.prev;
          return e
        },
        a.prototype.slice = function (e, t) {
          (t = t || this.length) < 0 &&
          (t += this.length),
          (e = e || 0) < 0 &&
          (e += this.length);
          var r = new a;
          if (t < e || t < 0) return r;
          e < 0 &&
          (e = 0),
          t > this.length &&
          (t = this.length);
          for (var o = 0, n = this.head; null !== n && o < e; o++) n = n.next;
          for (; null !== n && o < t; o++, n = n.next) r.push(n.value);
          return r
        },
        a.prototype.sliceReverse = function (e, t) {
          (t = t || this.length) < 0 &&
          (t += this.length),
          (e = e || 0) < 0 &&
          (e += this.length);
          var r = new a;
          if (t < e || t < 0) return r;
          e < 0 &&
          (e = 0),
          t > this.length &&
          (t = this.length);
          for (var o = this.length, n = this.tail; null !== n && o > t; o--) n = n.prev;
          for (; null !== n && o > e; o--, n = n.prev) r.push(n.value);
          return r
        },
        a.prototype.splice = function (e, t, ...r) {
          e > this.length &&
          (e = this.length - 1),
          e < 0 &&
          (e = this.length + e);
          for (var a = 0, n = this.head; null !== n && a < e; a++) n = n.next;
          var l = [];
          for (a = 0; n && a < t; a++) l.push(n.value),
          n = this.removeNode(n);
          null === n &&
          (n = this.tail),
          n !== this.head &&
          n !== this.tail &&
          (n = n.prev);
          for (a = 0; a < r.length; a++) n = o(this, n, r[a]);
          return l
        },
        a.prototype.reverse = function () {
          for (var e = this.head, t = this.tail, r = e; null !== r; r = r.prev) {
            var a = r.prev;
            r.prev = r.next,
            r.next = a
          }
          return this.head = t,
          this.tail = e,
          this
        };
        try {
          r(6389) (a)
        } catch (e) {
        }
      },
      9196: e => {
        'use strict';
        e.exports = window.React
      },
      2819: e => {
        'use strict';
        e.exports = window.lodash
      },
      6989: e => {
        'use strict';
        e.exports = window.wp.apiFetch
      },
      2175: e => {
        'use strict';
        e.exports = window.wp.blockEditor
      },
      4981: e => {
        'use strict';
        e.exports = window.wp.blocks
      },
      5609: e => {
        'use strict';
        e.exports = window.wp.components
      },
      4333: e => {
        'use strict';
        e.exports = window.wp.compose
      },
      9818: e => {
        'use strict';
        e.exports = window.wp.data
      },
      9307: e => {
        'use strict';
        e.exports = window.wp.element
      },
      2694: e => {
        'use strict';
        e.exports = window.wp.hooks
      },
      5736: e => {
        'use strict';
        e.exports = window.wp.i18n
      },
      8817: e => {
        'use strict';
        e.exports = window.wp.plugins
      },
      444: e => {
        'use strict';
        e.exports = window.wp.primitives
      },
      6483: e => {
        'use strict';
        e.exports = window.wp.url
      },
      2674: e => {
        function t() {
          return e.exports = t = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var a in r) Object.prototype.hasOwnProperty.call(r, a) &&
              (e[a] = r[a])
            }
            return e
          },
          e.exports.__esModule = !0,
          e.exports.default = e.exports,
          t.apply(this, arguments)
        }
        e.exports = t,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
      },
      550: e => {
        'use strict';
        e.exports = JSON.parse(
          '{"O":{"White":"#fff","Black":"#000","Gray":"#646970","Gray 0":"#f6f7f7","Gray 5":"#dcdcde","Gray 10":"#c3c4c7","Gray 20":"#a7aaad","Gray 30":"#8c8f94","Gray 40":"#787c82","Gray 50":"#646970","Gray 60":"#50575e","Gray 70":"#3c434a","Gray 80":"#2c3338","Gray 90":"#1d2327","Gray 100":"#101517","Blue":"#0675c4","Blue 0":"#e9f0f5","Blue 5":"#bbe0fa","Blue 10":"#91caf2","Blue 20":"#68b3e8","Blue 30":"#399ce3","Blue 40":"#1689db","Blue 50":"#0675c4","Blue 60":"#055d9c","Blue 70":"#044b7a","Blue 80":"#02395c","Blue 90":"#01283d","Blue 100":"#001621","Purple":"#984a9c","Purple 0":"#f2e9ed","Purple 5":"#ebcee0","Purple 10":"#e3afd5","Purple 20":"#d48fc8","Purple 30":"#c475bd","Purple 40":"#b35eb1","Purple 50":"#984a9c","Purple 60":"#7c3982","Purple 70":"#662c6e","Purple 80":"#4d2054","Purple 90":"#35163b","Purple 100":"#1e0c21","Pink":"#c9356e","Pink 0":"#f5e9ed","Pink 5":"#f2ceda","Pink 10":"#f7a8c3","Pink 20":"#f283aa","Pink 30":"#eb6594","Pink 40":"#e34c84","Pink 50":"#c9356e","Pink 60":"#ab235a","Pink 70":"#8c1749","Pink 80":"#700f3b","Pink 90":"#4f092a","Pink 100":"#260415","Red":"#d63638","Red 0":"#f7ebec","Red 5":"#facfd2","Red 10":"#ffabaf","Red 20":"#ff8085","Red 30":"#f86368","Red 40":"#e65054","Red 50":"#d63638","Red 60":"#b32d2e","Red 70":"#8a2424","Red 80":"#691c1c","Red 90":"#451313","Red 100":"#240a0a","Orange":"#b26200","Orange 0":"#f5ece6","Orange 5":"#f7dcc6","Orange 10":"#ffbf86","Orange 20":"#faa754","Orange 30":"#e68b28","Orange 40":"#d67709","Orange 50":"#b26200","Orange 60":"#8a4d00","Orange 70":"#704000","Orange 80":"#543100","Orange 90":"#361f00","Orange 100":"#1f1200","Yellow":"#9d6e00","Yellow 0":"#f5f1e1","Yellow 5":"#f5e6b3","Yellow 10":"#f2d76b","Yellow 20":"#f0c930","Yellow 30":"#deb100","Yellow 40":"#c08c00","Yellow 50":"#9d6e00","Yellow 60":"#7d5600","Yellow 70":"#674600","Yellow 80":"#4f3500","Yellow 90":"#320","Yellow 100":"#1c1300","Green":"#008a20","Green 0":"#e6f2e8","Green 5":"#b8e6bf","Green 10":"#68de86","Green 20":"#1ed15a","Green 30":"#00ba37","Green 40":"#00a32a","Green 50":"#008a20","Green 60":"#007017","Green 70":"#005c12","Green 80":"#00450c","Green 90":"#003008","Green 100":"#001c05","Celadon":"#008763","Celadon 0":"#e4f2ed","Celadon 5":"#a7e8d3","Celadon 10":"#66deb9","Celadon 20":"#31cc9f","Celadon 30":"#09b585","Celadon 40":"#009e73","Celadon 50":"#008763","Celadon 60":"#007053","Celadon 70":"#005c44","Celadon 80":"#004533","Celadon 90":"#003024","Celadon 100":"#001c15","WordPress Blue":"#006088","WordPress Blue 0":"#e6f1f5","WordPress Blue 5":"#bedae6","WordPress Blue 10":"#98c6d9","WordPress Blue 20":"#6ab3d0","WordPress Blue 30":"#3895ba","WordPress Blue 40":"#187aa2","WordPress Blue 50":"#006088","WordPress Blue 60":"#004e6e","WordPress Blue 70":"#003c56","WordPress Blue 80":"#002c40","WordPress Blue 90":"#001d2d","WordPress Blue 100":"#00101c","Simplenote Blue":"#3361cc","Simplenote Blue 0":"#e9ecf5","Simplenote Blue 5":"#ced9f2","Simplenote Blue 10":"#abc1f5","Simplenote Blue 20":"#84a4f0","Simplenote Blue 30":"#618df2","Simplenote Blue 40":"#4678eb","Simplenote Blue 50":"#3361cc","Simplenote Blue 60":"#1d4fc4","Simplenote Blue 70":"#113ead","Simplenote Blue 80":"#0d2f85","Simplenote Blue 90":"#09205c","Simplenote Blue 100":"#05102e","WooCommerce Purple":"#7f54b3","WooCommerce Purple 0":"#f7edf7","WooCommerce Purple 5":"#e5cfe8","WooCommerce Purple 10":"#d6b4e0","WooCommerce Purple 20":"#c792e0","WooCommerce Purple 30":"#af7dd1","WooCommerce Purple 40":"#9a69c7","WooCommerce Purple 50":"#7f54b3","WooCommerce Purple 60":"#674399","WooCommerce Purple 70":"#533582","WooCommerce Purple 80":"#3c2861","WooCommerce Purple 90":"#271b3d","WooCommerce Purple 100":"#140e1f","Jetpack Green":"#069e08","Jetpack Green 0":"#f0f2eb","Jetpack Green 5":"#d0e6b8","Jetpack Green 10":"#9dd977","Jetpack Green 20":"#64ca43","Jetpack Green 30":"#2fb41f","Jetpack Green 40":"#069e08","Jetpack Green 50":"#008710","Jetpack Green 60":"#007117","Jetpack Green 70":"#005b18","Jetpack Green 80":"#004515","Jetpack Green 90":"#003010","Jetpack Green 100":"#001c09"}}'
        )
      }
    },
    t = {};
    function r(a) {
      var o = t[a];
      if (void 0 !== o) return o.exports;
      var n = t[a] = {
        exports: {
        }
      };
      return e[a](n, n.exports, r),
      n.exports
    }
    r.n = e => {
      var t = e &&
      e.__esModule ? () => e.default : () => e;
      return r.d(t, {
        a: t
      }),
      t
    },
    r.d = (e, t) => {
      for (var a in t) r.o(t, a) &&
      !r.o(e, a) &&
      Object.defineProperty(e, a, {
        enumerable: !0,
        get: t[a]
      })
    },
    r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    (
      () => {
        'use strict';
        var e = r(348),
        t = r(7469),
        a = r(4913);
        (0, t.Z) (a.u, a.X, e.N)
      }
    ) ()
  }
) ();
