;(function () {
    const e = document.createElement('link').relList
    if (e && e.supports && e.supports('modulepreload')) return
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === 'childList')
                for (const l of o.addedNodes)
                    l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l)
    }).observe(document, { childList: !0, subtree: !0 })
    function n(i) {
        const o = {}
        return (
            i.integrity && (o.integrity = i.integrity),
            i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === 'use-credentials'
                ? (o.credentials = 'include')
                : i.crossOrigin === 'anonymous'
                  ? (o.credentials = 'omit')
                  : (o.credentials = 'same-origin'),
            o
        )
    }
    function r(i) {
        if (i.ep) return
        i.ep = !0
        const o = n(i)
        fetch(i.href, o)
    }
})()
var Ya =
    typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof self < 'u'
              ? self
              : {}
function g0(t) {
    return t &&
        t.__esModule &&
        Object.prototype.hasOwnProperty.call(t, 'default')
        ? t.default
        : t
}
var _0 = { exports: {} },
    ju = {},
    y0 = { exports: {} },
    re = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ra = Symbol.for('react.element'),
    Ny = Symbol.for('react.portal'),
    My = Symbol.for('react.fragment'),
    Ly = Symbol.for('react.strict_mode'),
    Ry = Symbol.for('react.profiler'),
    jy = Symbol.for('react.provider'),
    Ay = Symbol.for('react.context'),
    zy = Symbol.for('react.forward_ref'),
    Iy = Symbol.for('react.suspense'),
    Fy = Symbol.for('react.memo'),
    by = Symbol.for('react.lazy'),
    hp = Symbol.iterator
function Wy(t) {
    return t === null || typeof t != 'object'
        ? null
        : ((t = (hp && t[hp]) || t['@@iterator']),
          typeof t == 'function' ? t : null)
}
var w0 = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    x0 = Object.assign,
    S0 = {}
function ll(t, e, n) {
    ;(this.props = t),
        (this.context = e),
        (this.refs = S0),
        (this.updater = n || w0)
}
ll.prototype.isReactComponent = {}
ll.prototype.setState = function (t, e) {
    if (typeof t != 'object' && typeof t != 'function' && t != null)
        throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
        )
    this.updater.enqueueSetState(this, t, e, 'setState')
}
ll.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, 'forceUpdate')
}
function k0() {}
k0.prototype = ll.prototype
function zd(t, e, n) {
    ;(this.props = t),
        (this.context = e),
        (this.refs = S0),
        (this.updater = n || w0)
}
var Id = (zd.prototype = new k0())
Id.constructor = zd
x0(Id, ll.prototype)
Id.isPureReactComponent = !0
var pp = Array.isArray,
    C0 = Object.prototype.hasOwnProperty,
    Fd = { current: null },
    T0 = { key: !0, ref: !0, __self: !0, __source: !0 }
function O0(t, e, n) {
    var r,
        i = {},
        o = null,
        l = null
    if (e != null)
        for (r in (e.ref !== void 0 && (l = e.ref),
        e.key !== void 0 && (o = '' + e.key),
        e))
            C0.call(e, r) && !T0.hasOwnProperty(r) && (i[r] = e[r])
    var a = arguments.length - 2
    if (a === 1) i.children = n
    else if (1 < a) {
        for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2]
        i.children = s
    }
    if (t && t.defaultProps)
        for (r in ((a = t.defaultProps), a)) i[r] === void 0 && (i[r] = a[r])
    return {
        $$typeof: Ra,
        type: t,
        key: o,
        ref: l,
        props: i,
        _owner: Fd.current,
    }
}
function Vy(t, e) {
    return {
        $$typeof: Ra,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner,
    }
}
function bd(t) {
    return typeof t == 'object' && t !== null && t.$$typeof === Ra
}
function $y(t) {
    var e = { '=': '=0', ':': '=2' }
    return (
        '$' +
        t.replace(/[=:]/g, function (n) {
            return e[n]
        })
    )
}
var mp = /\/+/g
function sc(t, e) {
    return typeof t == 'object' && t !== null && t.key != null
        ? $y('' + t.key)
        : e.toString(36)
}
function Ts(t, e, n, r, i) {
    var o = typeof t
    ;(o === 'undefined' || o === 'boolean') && (t = null)
    var l = !1
    if (t === null) l = !0
    else
        switch (o) {
            case 'string':
            case 'number':
                l = !0
                break
            case 'object':
                switch (t.$$typeof) {
                    case Ra:
                    case Ny:
                        l = !0
                }
        }
    if (l)
        return (
            (l = t),
            (i = i(l)),
            (t = r === '' ? '.' + sc(l, 0) : r),
            pp(i)
                ? ((n = ''),
                  t != null && (n = t.replace(mp, '$&/') + '/'),
                  Ts(i, e, n, '', function (u) {
                      return u
                  }))
                : i != null &&
                  (bd(i) &&
                      (i = Vy(
                          i,
                          n +
                              (!i.key || (l && l.key === i.key)
                                  ? ''
                                  : ('' + i.key).replace(mp, '$&/') + '/') +
                              t,
                      )),
                  e.push(i)),
            1
        )
    if (((l = 0), (r = r === '' ? '.' : r + ':'), pp(t)))
        for (var a = 0; a < t.length; a++) {
            o = t[a]
            var s = r + sc(o, a)
            l += Ts(o, e, n, s, i)
        }
    else if (((s = Wy(t)), typeof s == 'function'))
        for (t = s.call(t), a = 0; !(o = t.next()).done; )
            (o = o.value), (s = r + sc(o, a++)), (l += Ts(o, e, n, s, i))
    else if (o === 'object')
        throw (
            ((e = String(t)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    (e === '[object Object]'
                        ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                        : e) +
                    '). If you meant to render a collection of children, use an array instead.',
            ))
        )
    return l
}
function Ha(t, e, n) {
    if (t == null) return t
    var r = [],
        i = 0
    return (
        Ts(t, r, '', '', function (o) {
            return e.call(n, o, i++)
        }),
        r
    )
}
function By(t) {
    if (t._status === -1) {
        var e = t._result
        ;(e = e()),
            e.then(
                function (n) {
                    ;(t._status === 0 || t._status === -1) &&
                        ((t._status = 1), (t._result = n))
                },
                function (n) {
                    ;(t._status === 0 || t._status === -1) &&
                        ((t._status = 2), (t._result = n))
                },
            ),
            t._status === -1 && ((t._status = 0), (t._result = e))
    }
    if (t._status === 1) return t._result.default
    throw t._result
}
var Qt = { current: null },
    Os = { transition: null },
    Uy = {
        ReactCurrentDispatcher: Qt,
        ReactCurrentBatchConfig: Os,
        ReactCurrentOwner: Fd,
    }
function P0() {
    throw Error('act(...) is not supported in production builds of React.')
}
re.Children = {
    map: Ha,
    forEach: function (t, e, n) {
        Ha(
            t,
            function () {
                e.apply(this, arguments)
            },
            n,
        )
    },
    count: function (t) {
        var e = 0
        return (
            Ha(t, function () {
                e++
            }),
            e
        )
    },
    toArray: function (t) {
        return (
            Ha(t, function (e) {
                return e
            }) || []
        )
    },
    only: function (t) {
        if (!bd(t))
            throw Error(
                'React.Children.only expected to receive a single React element child.',
            )
        return t
    },
}
re.Component = ll
re.Fragment = My
re.Profiler = Ry
re.PureComponent = zd
re.StrictMode = Ly
re.Suspense = Iy
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uy
re.act = P0
re.cloneElement = function (t, e, n) {
    if (t == null)
        throw Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
                t +
                '.',
        )
    var r = x0({}, t.props),
        i = t.key,
        o = t.ref,
        l = t._owner
    if (e != null) {
        if (
            (e.ref !== void 0 && ((o = e.ref), (l = Fd.current)),
            e.key !== void 0 && (i = '' + e.key),
            t.type && t.type.defaultProps)
        )
            var a = t.type.defaultProps
        for (s in e)
            C0.call(e, s) &&
                !T0.hasOwnProperty(s) &&
                (r[s] = e[s] === void 0 && a !== void 0 ? a[s] : e[s])
    }
    var s = arguments.length - 2
    if (s === 1) r.children = n
    else if (1 < s) {
        a = Array(s)
        for (var u = 0; u < s; u++) a[u] = arguments[u + 2]
        r.children = a
    }
    return { $$typeof: Ra, type: t.type, key: i, ref: o, props: r, _owner: l }
}
re.createContext = function (t) {
    return (
        (t = {
            $$typeof: Ay,
            _currentValue: t,
            _currentValue2: t,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (t.Provider = { $$typeof: jy, _context: t }),
        (t.Consumer = t)
    )
}
re.createElement = O0
re.createFactory = function (t) {
    var e = O0.bind(null, t)
    return (e.type = t), e
}
re.createRef = function () {
    return { current: null }
}
re.forwardRef = function (t) {
    return { $$typeof: zy, render: t }
}
re.isValidElement = bd
re.lazy = function (t) {
    return { $$typeof: by, _payload: { _status: -1, _result: t }, _init: By }
}
re.memo = function (t, e) {
    return { $$typeof: Fy, type: t, compare: e === void 0 ? null : e }
}
re.startTransition = function (t) {
    var e = Os.transition
    Os.transition = {}
    try {
        t()
    } finally {
        Os.transition = e
    }
}
re.unstable_act = P0
re.useCallback = function (t, e) {
    return Qt.current.useCallback(t, e)
}
re.useContext = function (t) {
    return Qt.current.useContext(t)
}
re.useDebugValue = function () {}
re.useDeferredValue = function (t) {
    return Qt.current.useDeferredValue(t)
}
re.useEffect = function (t, e) {
    return Qt.current.useEffect(t, e)
}
re.useId = function () {
    return Qt.current.useId()
}
re.useImperativeHandle = function (t, e, n) {
    return Qt.current.useImperativeHandle(t, e, n)
}
re.useInsertionEffect = function (t, e) {
    return Qt.current.useInsertionEffect(t, e)
}
re.useLayoutEffect = function (t, e) {
    return Qt.current.useLayoutEffect(t, e)
}
re.useMemo = function (t, e) {
    return Qt.current.useMemo(t, e)
}
re.useReducer = function (t, e, n) {
    return Qt.current.useReducer(t, e, n)
}
re.useRef = function (t) {
    return Qt.current.useRef(t)
}
re.useState = function (t) {
    return Qt.current.useState(t)
}
re.useSyncExternalStore = function (t, e, n) {
    return Qt.current.useSyncExternalStore(t, e, n)
}
re.useTransition = function () {
    return Qt.current.useTransition()
}
re.version = '18.3.1'
y0.exports = re
var ze = y0.exports
const oi = g0(ze)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yy = ze,
    Hy = Symbol.for('react.element'),
    Xy = Symbol.for('react.fragment'),
    Gy = Object.prototype.hasOwnProperty,
    Qy =
        Yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Ky = { key: !0, ref: !0, __self: !0, __source: !0 }
function E0(t, e, n) {
    var r,
        i = {},
        o = null,
        l = null
    n !== void 0 && (o = '' + n),
        e.key !== void 0 && (o = '' + e.key),
        e.ref !== void 0 && (l = e.ref)
    for (r in e) Gy.call(e, r) && !Ky.hasOwnProperty(r) && (i[r] = e[r])
    if (t && t.defaultProps)
        for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r])
    return {
        $$typeof: Hy,
        type: t,
        key: o,
        ref: l,
        props: i,
        _owner: Qy.current,
    }
}
ju.Fragment = Xy
ju.jsx = E0
ju.jsxs = E0
_0.exports = ju
var O = _0.exports,
    nf = {},
    D0 = { exports: {} },
    Cn = {},
    N0 = { exports: {} },
    M0 = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (t) {
    function e(N, R) {
        var w = N.length
        N.push(R)
        e: for (; 0 < w; ) {
            var F = (w - 1) >>> 1,
                K = N[F]
            if (0 < i(K, R)) (N[F] = R), (N[w] = K), (w = F)
            else break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0) return null
        var R = N[0],
            w = N.pop()
        if (w !== R) {
            N[0] = w
            e: for (var F = 0, K = N.length, $e = K >>> 1; F < $e; ) {
                var le = 2 * (F + 1) - 1,
                    Ce = N[le],
                    ge = le + 1,
                    he = N[ge]
                if (0 > i(Ce, w))
                    ge < K && 0 > i(he, Ce)
                        ? ((N[F] = he), (N[ge] = w), (F = ge))
                        : ((N[F] = Ce), (N[le] = w), (F = le))
                else if (ge < K && 0 > i(he, w))
                    (N[F] = he), (N[ge] = w), (F = ge)
                else break e
            }
        }
        return R
    }
    function i(N, R) {
        var w = N.sortIndex - R.sortIndex
        return w !== 0 ? w : N.id - R.id
    }
    if (
        typeof performance == 'object' &&
        typeof performance.now == 'function'
    ) {
        var o = performance
        t.unstable_now = function () {
            return o.now()
        }
    } else {
        var l = Date,
            a = l.now()
        t.unstable_now = function () {
            return l.now() - a
        }
    }
    var s = [],
        u = [],
        c = 1,
        d = null,
        f = 3,
        h = !1,
        g = !1,
        p = !1,
        x = typeof setTimeout == 'function' ? setTimeout : null,
        v = typeof clearTimeout == 'function' ? clearTimeout : null,
        m = typeof setImmediate < 'u' ? setImmediate : null
    typeof navigator < 'u' &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling)
    function _(N) {
        for (var R = n(u); R !== null; ) {
            if (R.callback === null) r(u)
            else if (R.startTime <= N)
                r(u), (R.sortIndex = R.expirationTime), e(s, R)
            else break
            R = n(u)
        }
    }
    function y(N) {
        if (((p = !1), _(N), !g))
            if (n(s) !== null) (g = !0), W(k)
            else {
                var R = n(u)
                R !== null && V(y, R.startTime - N)
            }
    }
    function k(N, R) {
        ;(g = !1), p && ((p = !1), v(T), (T = -1)), (h = !0)
        var w = f
        try {
            for (
                _(R), d = n(s);
                d !== null && (!(d.expirationTime > R) || (N && !I()));

            ) {
                var F = d.callback
                if (typeof F == 'function') {
                    ;(d.callback = null), (f = d.priorityLevel)
                    var K = F(d.expirationTime <= R)
                    ;(R = t.unstable_now()),
                        typeof K == 'function'
                            ? (d.callback = K)
                            : d === n(s) && r(s),
                        _(R)
                } else r(s)
                d = n(s)
            }
            if (d !== null) var $e = !0
            else {
                var le = n(u)
                le !== null && V(y, le.startTime - R), ($e = !1)
            }
            return $e
        } finally {
            ;(d = null), (f = w), (h = !1)
        }
    }
    var C = !1,
        S = null,
        T = -1,
        D = 5,
        P = -1
    function I() {
        return !(t.unstable_now() - P < D)
    }
    function L() {
        if (S !== null) {
            var N = t.unstable_now()
            P = N
            var R = !0
            try {
                R = S(!0, N)
            } finally {
                R ? U() : ((C = !1), (S = null))
            }
        } else C = !1
    }
    var U
    if (typeof m == 'function')
        U = function () {
            m(L)
        }
    else if (typeof MessageChannel < 'u') {
        var Y = new MessageChannel(),
            q = Y.port2
        ;(Y.port1.onmessage = L),
            (U = function () {
                q.postMessage(null)
            })
    } else
        U = function () {
            x(L, 0)
        }
    function W(N) {
        ;(S = N), C || ((C = !0), U())
    }
    function V(N, R) {
        T = x(function () {
            N(t.unstable_now())
        }, R)
    }
    ;(t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (N) {
            N.callback = null
        }),
        (t.unstable_continueExecution = function () {
            g || h || ((g = !0), W(k))
        }),
        (t.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                  )
                : (D = 0 < N ? Math.floor(1e3 / N) : 5)
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
            return f
        }),
        (t.unstable_getFirstCallbackNode = function () {
            return n(s)
        }),
        (t.unstable_next = function (N) {
            switch (f) {
                case 1:
                case 2:
                case 3:
                    var R = 3
                    break
                default:
                    R = f
            }
            var w = f
            f = R
            try {
                return N()
            } finally {
                f = w
            }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (N, R) {
            switch (N) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break
                default:
                    N = 3
            }
            var w = f
            f = N
            try {
                return R()
            } finally {
                f = w
            }
        }),
        (t.unstable_scheduleCallback = function (N, R, w) {
            var F = t.unstable_now()
            switch (
                (typeof w == 'object' && w !== null
                    ? ((w = w.delay),
                      (w = typeof w == 'number' && 0 < w ? F + w : F))
                    : (w = F),
                N)
            ) {
                case 1:
                    var K = -1
                    break
                case 2:
                    K = 250
                    break
                case 5:
                    K = 1073741823
                    break
                case 4:
                    K = 1e4
                    break
                default:
                    K = 5e3
            }
            return (
                (K = w + K),
                (N = {
                    id: c++,
                    callback: R,
                    priorityLevel: N,
                    startTime: w,
                    expirationTime: K,
                    sortIndex: -1,
                }),
                w > F
                    ? ((N.sortIndex = w),
                      e(u, N),
                      n(s) === null &&
                          N === n(u) &&
                          (p ? (v(T), (T = -1)) : (p = !0), V(y, w - F)))
                    : ((N.sortIndex = K), e(s, N), g || h || ((g = !0), W(k))),
                N
            )
        }),
        (t.unstable_shouldYield = I),
        (t.unstable_wrapCallback = function (N) {
            var R = f
            return function () {
                var w = f
                f = R
                try {
                    return N.apply(this, arguments)
                } finally {
                    f = w
                }
            }
        })
})(M0)
N0.exports = M0
var Zy = N0.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qy = ze,
    Sn = Zy
function M(t) {
    for (
        var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
            n = 1;
        n < arguments.length;
        n++
    )
        e += '&args[]=' + encodeURIComponent(arguments[n])
    return (
        'Minified React error #' +
        t +
        '; visit ' +
        e +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
}
var L0 = new Set(),
    oa = {}
function lo(t, e) {
    Xo(t, e), Xo(t + 'Capture', e)
}
function Xo(t, e) {
    for (oa[t] = e, t = 0; t < e.length; t++) L0.add(e[t])
}
var Ar = !(
        typeof window > 'u' ||
        typeof window.document > 'u' ||
        typeof window.document.createElement > 'u'
    ),
    rf = Object.prototype.hasOwnProperty,
    Jy =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    vp = {},
    gp = {}
function e1(t) {
    return rf.call(gp, t)
        ? !0
        : rf.call(vp, t)
          ? !1
          : Jy.test(t)
            ? (gp[t] = !0)
            : ((vp[t] = !0), !1)
}
function t1(t, e, n, r) {
    if (n !== null && n.type === 0) return !1
    switch (typeof e) {
        case 'function':
        case 'symbol':
            return !0
        case 'boolean':
            return r
                ? !1
                : n !== null
                  ? !n.acceptsBooleans
                  : ((t = t.toLowerCase().slice(0, 5)),
                    t !== 'data-' && t !== 'aria-')
        default:
            return !1
    }
}
function n1(t, e, n, r) {
    if (e === null || typeof e > 'u' || t1(t, e, n, r)) return !0
    if (r) return !1
    if (n !== null)
        switch (n.type) {
            case 3:
                return !e
            case 4:
                return e === !1
            case 5:
                return isNaN(e)
            case 6:
                return isNaN(e) || 1 > e
        }
    return !1
}
function Kt(t, e, n, r, i, o, l) {
    ;(this.acceptsBooleans = e === 2 || e === 3 || e === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = t),
        (this.type = e),
        (this.sanitizeURL = o),
        (this.removeEmptyString = l)
}
var Ct = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (t) {
        Ct[t] = new Kt(t, 0, !1, t, null, !1, !1)
    })
;[
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
].forEach(function (t) {
    var e = t[0]
    Ct[e] = new Kt(e, 1, !1, t[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
    Ct[t] = new Kt(t, 2, !1, t.toLowerCase(), null, !1, !1)
})
;[
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
].forEach(function (t) {
    Ct[t] = new Kt(t, 2, !1, t, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (t) {
        Ct[t] = new Kt(t, 3, !1, t.toLowerCase(), null, !1, !1)
    })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
    Ct[t] = new Kt(t, 3, !0, t, null, !1, !1)
})
;['capture', 'download'].forEach(function (t) {
    Ct[t] = new Kt(t, 4, !1, t, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (t) {
    Ct[t] = new Kt(t, 6, !1, t, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (t) {
    Ct[t] = new Kt(t, 5, !1, t.toLowerCase(), null, !1, !1)
})
var Wd = /[\-:]([a-z])/g
function Vd(t) {
    return t[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (t) {
        var e = t.replace(Wd, Vd)
        Ct[e] = new Kt(e, 1, !1, t, null, !1, !1)
    })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (t) {
        var e = t.replace(Wd, Vd)
        Ct[e] = new Kt(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1)
    })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
    var e = t.replace(Wd, Vd)
    Ct[e] = new Kt(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (t) {
    Ct[t] = new Kt(t, 1, !1, t.toLowerCase(), null, !1, !1)
})
Ct.xlinkHref = new Kt(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1,
)
;['src', 'href', 'action', 'formAction'].forEach(function (t) {
    Ct[t] = new Kt(t, 1, !1, t.toLowerCase(), null, !0, !0)
})
function $d(t, e, n, r) {
    var i = Ct.hasOwnProperty(e) ? Ct[e] : null
    ;(i !== null
        ? i.type !== 0
        : r ||
          !(2 < e.length) ||
          (e[0] !== 'o' && e[0] !== 'O') ||
          (e[1] !== 'n' && e[1] !== 'N')) &&
        (n1(e, n, i, r) && (n = null),
        r || i === null
            ? e1(e) &&
              (n === null ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
            : i.mustUseProperty
              ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
              : ((e = i.attributeName),
                (r = i.attributeNamespace),
                n === null
                    ? t.removeAttribute(e)
                    : ((i = i.type),
                      (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
                      r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var Vr = qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Xa = Symbol.for('react.element'),
    _o = Symbol.for('react.portal'),
    yo = Symbol.for('react.fragment'),
    Bd = Symbol.for('react.strict_mode'),
    of = Symbol.for('react.profiler'),
    R0 = Symbol.for('react.provider'),
    j0 = Symbol.for('react.context'),
    Ud = Symbol.for('react.forward_ref'),
    lf = Symbol.for('react.suspense'),
    af = Symbol.for('react.suspense_list'),
    Yd = Symbol.for('react.memo'),
    Gr = Symbol.for('react.lazy'),
    A0 = Symbol.for('react.offscreen'),
    _p = Symbol.iterator
function pl(t) {
    return t === null || typeof t != 'object'
        ? null
        : ((t = (_p && t[_p]) || t['@@iterator']),
          typeof t == 'function' ? t : null)
}
var Ve = Object.assign,
    uc
function Ol(t) {
    if (uc === void 0)
        try {
            throw Error()
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/)
            uc = (e && e[1]) || ''
        }
    return (
        `
` +
        uc +
        t
    )
}
var cc = !1
function fc(t, e) {
    if (!t || cc) return ''
    cc = !0
    var n = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
        if (e)
            if (
                ((e = function () {
                    throw Error()
                }),
                Object.defineProperty(e.prototype, 'props', {
                    set: function () {
                        throw Error()
                    },
                }),
                typeof Reflect == 'object' && Reflect.construct)
            ) {
                try {
                    Reflect.construct(e, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (u) {
                    r = u
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            t()
        }
    } catch (u) {
        if (u && r && typeof u.stack == 'string') {
            for (
                var i = u.stack.split(`
`),
                    o = r.stack.split(`
`),
                    l = i.length - 1,
                    a = o.length - 1;
                1 <= l && 0 <= a && i[l] !== o[a];

            )
                a--
            for (; 1 <= l && 0 <= a; l--, a--)
                if (i[l] !== o[a]) {
                    if (l !== 1 || a !== 1)
                        do
                            if ((l--, a--, 0 > a || i[l] !== o[a])) {
                                var s =
                                    `
` + i[l].replace(' at new ', ' at ')
                                return (
                                    t.displayName &&
                                        s.includes('<anonymous>') &&
                                        (s = s.replace(
                                            '<anonymous>',
                                            t.displayName,
                                        )),
                                    s
                                )
                            }
                        while (1 <= l && 0 <= a)
                    break
                }
        }
    } finally {
        ;(cc = !1), (Error.prepareStackTrace = n)
    }
    return (t = t ? t.displayName || t.name : '') ? Ol(t) : ''
}
function r1(t) {
    switch (t.tag) {
        case 5:
            return Ol(t.type)
        case 16:
            return Ol('Lazy')
        case 13:
            return Ol('Suspense')
        case 19:
            return Ol('SuspenseList')
        case 0:
        case 2:
        case 15:
            return (t = fc(t.type, !1)), t
        case 11:
            return (t = fc(t.type.render, !1)), t
        case 1:
            return (t = fc(t.type, !0)), t
        default:
            return ''
    }
}
function sf(t) {
    if (t == null) return null
    if (typeof t == 'function') return t.displayName || t.name || null
    if (typeof t == 'string') return t
    switch (t) {
        case yo:
            return 'Fragment'
        case _o:
            return 'Portal'
        case of:
            return 'Profiler'
        case Bd:
            return 'StrictMode'
        case lf:
            return 'Suspense'
        case af:
            return 'SuspenseList'
    }
    if (typeof t == 'object')
        switch (t.$$typeof) {
            case j0:
                return (t.displayName || 'Context') + '.Consumer'
            case R0:
                return (t._context.displayName || 'Context') + '.Provider'
            case Ud:
                var e = t.render
                return (
                    (t = t.displayName),
                    t ||
                        ((t = e.displayName || e.name || ''),
                        (t =
                            t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
                    t
                )
            case Yd:
                return (
                    (e = t.displayName || null),
                    e !== null ? e : sf(t.type) || 'Memo'
                )
            case Gr:
                ;(e = t._payload), (t = t._init)
                try {
                    return sf(t(e))
                } catch {}
        }
    return null
}
function i1(t) {
    var e = t.type
    switch (t.tag) {
        case 24:
            return 'Cache'
        case 9:
            return (e.displayName || 'Context') + '.Consumer'
        case 10:
            return (e._context.displayName || 'Context') + '.Provider'
        case 18:
            return 'DehydratedFragment'
        case 11:
            return (
                (t = e.render),
                (t = t.displayName || t.name || ''),
                e.displayName ||
                    (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
            )
        case 7:
            return 'Fragment'
        case 5:
            return e
        case 4:
            return 'Portal'
        case 3:
            return 'Root'
        case 6:
            return 'Text'
        case 16:
            return sf(e)
        case 8:
            return e === Bd ? 'StrictMode' : 'Mode'
        case 22:
            return 'Offscreen'
        case 12:
            return 'Profiler'
        case 21:
            return 'Scope'
        case 13:
            return 'Suspense'
        case 19:
            return 'SuspenseList'
        case 25:
            return 'TracingMarker'
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof e == 'function') return e.displayName || e.name || null
            if (typeof e == 'string') return e
    }
    return null
}
function gi(t) {
    switch (typeof t) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
            return t
        case 'object':
            return t
        default:
            return ''
    }
}
function z0(t) {
    var e = t.type
    return (
        (t = t.nodeName) &&
        t.toLowerCase() === 'input' &&
        (e === 'checkbox' || e === 'radio')
    )
}
function o1(t) {
    var e = z0(t) ? 'checked' : 'value',
        n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
        r = '' + t[e]
    if (
        !t.hasOwnProperty(e) &&
        typeof n < 'u' &&
        typeof n.get == 'function' &&
        typeof n.set == 'function'
    ) {
        var i = n.get,
            o = n.set
        return (
            Object.defineProperty(t, e, {
                configurable: !0,
                get: function () {
                    return i.call(this)
                },
                set: function (l) {
                    ;(r = '' + l), o.call(this, l)
                },
            }),
            Object.defineProperty(t, e, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r
                },
                setValue: function (l) {
                    r = '' + l
                },
                stopTracking: function () {
                    ;(t._valueTracker = null), delete t[e]
                },
            }
        )
    }
}
function Ga(t) {
    t._valueTracker || (t._valueTracker = o1(t))
}
function I0(t) {
    if (!t) return !1
    var e = t._valueTracker
    if (!e) return !0
    var n = e.getValue(),
        r = ''
    return (
        t && (r = z0(t) ? (t.checked ? 'true' : 'false') : t.value),
        (t = r),
        t !== n ? (e.setValue(t), !0) : !1
    )
}
function Gs(t) {
    if (
        ((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')
    )
        return null
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}
function uf(t, e) {
    var n = e.checked
    return Ve({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked,
    })
}
function yp(t, e) {
    var n = e.defaultValue == null ? '' : e.defaultValue,
        r = e.checked != null ? e.checked : e.defaultChecked
    ;(n = gi(e.value != null ? e.value : n)),
        (t._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                e.type === 'checkbox' || e.type === 'radio'
                    ? e.checked != null
                    : e.value != null,
        })
}
function F0(t, e) {
    ;(e = e.checked), e != null && $d(t, 'checked', e, !1)
}
function cf(t, e) {
    F0(t, e)
    var n = gi(e.value),
        r = e.type
    if (n != null)
        r === 'number'
            ? ((n === 0 && t.value === '') || t.value != n) &&
              (t.value = '' + n)
            : t.value !== '' + n && (t.value = '' + n)
    else if (r === 'submit' || r === 'reset') {
        t.removeAttribute('value')
        return
    }
    e.hasOwnProperty('value')
        ? ff(t, e.type, n)
        : e.hasOwnProperty('defaultValue') && ff(t, e.type, gi(e.defaultValue)),
        e.checked == null &&
            e.defaultChecked != null &&
            (t.defaultChecked = !!e.defaultChecked)
}
function wp(t, e, n) {
    if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
        var r = e.type
        if (
            !(
                (r !== 'submit' && r !== 'reset') ||
                (e.value !== void 0 && e.value !== null)
            )
        )
            return
        ;(e = '' + t._wrapperState.initialValue),
            n || e === t.value || (t.value = e),
            (t.defaultValue = e)
    }
    ;(n = t.name),
        n !== '' && (t.name = ''),
        (t.defaultChecked = !!t._wrapperState.initialChecked),
        n !== '' && (t.name = n)
}
function ff(t, e, n) {
    ;(e !== 'number' || Gs(t.ownerDocument) !== t) &&
        (n == null
            ? (t.defaultValue = '' + t._wrapperState.initialValue)
            : t.defaultValue !== '' + n && (t.defaultValue = '' + n))
}
var Pl = Array.isArray
function Ao(t, e, n, r) {
    if (((t = t.options), e)) {
        e = {}
        for (var i = 0; i < n.length; i++) e['$' + n[i]] = !0
        for (n = 0; n < t.length; n++)
            (i = e.hasOwnProperty('$' + t[n].value)),
                t[n].selected !== i && (t[n].selected = i),
                i && r && (t[n].defaultSelected = !0)
    } else {
        for (n = '' + gi(n), e = null, i = 0; i < t.length; i++) {
            if (t[i].value === n) {
                ;(t[i].selected = !0), r && (t[i].defaultSelected = !0)
                return
            }
            e !== null || t[i].disabled || (e = t[i])
        }
        e !== null && (e.selected = !0)
    }
}
function df(t, e) {
    if (e.dangerouslySetInnerHTML != null) throw Error(M(91))
    return Ve({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: '' + t._wrapperState.initialValue,
    })
}
function xp(t, e) {
    var n = e.value
    if (n == null) {
        if (((n = e.children), (e = e.defaultValue), n != null)) {
            if (e != null) throw Error(M(92))
            if (Pl(n)) {
                if (1 < n.length) throw Error(M(93))
                n = n[0]
            }
            e = n
        }
        e == null && (e = ''), (n = e)
    }
    t._wrapperState = { initialValue: gi(n) }
}
function b0(t, e) {
    var n = gi(e.value),
        r = gi(e.defaultValue)
    n != null &&
        ((n = '' + n),
        n !== t.value && (t.value = n),
        e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
        r != null && (t.defaultValue = '' + r)
}
function Sp(t) {
    var e = t.textContent
    e === t._wrapperState.initialValue &&
        e !== '' &&
        e !== null &&
        (t.value = e)
}
function W0(t) {
    switch (t) {
        case 'svg':
            return 'http://www.w3.org/2000/svg'
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML'
        default:
            return 'http://www.w3.org/1999/xhtml'
    }
}
function hf(t, e) {
    return t == null || t === 'http://www.w3.org/1999/xhtml'
        ? W0(e)
        : t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
          ? 'http://www.w3.org/1999/xhtml'
          : t
}
var Qa,
    V0 = (function (t) {
        return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
            ? function (e, n, r, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return t(e, n, r, i)
                  })
              }
            : t
    })(function (t, e) {
        if (t.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in t)
            t.innerHTML = e
        else {
            for (
                Qa = Qa || document.createElement('div'),
                    Qa.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
                    e = Qa.firstChild;
                t.firstChild;

            )
                t.removeChild(t.firstChild)
            for (; e.firstChild; ) t.appendChild(e.firstChild)
        }
    })
function la(t, e) {
    if (e) {
        var n = t.firstChild
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e
            return
        }
    }
    t.textContent = e
}
var Fl = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    l1 = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Fl).forEach(function (t) {
    l1.forEach(function (e) {
        ;(e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Fl[e] = Fl[t])
    })
})
function $0(t, e, n) {
    return e == null || typeof e == 'boolean' || e === ''
        ? ''
        : n ||
            typeof e != 'number' ||
            e === 0 ||
            (Fl.hasOwnProperty(t) && Fl[t])
          ? ('' + e).trim()
          : e + 'px'
}
function B0(t, e) {
    t = t.style
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var r = n.indexOf('--') === 0,
                i = $0(n, e[n], r)
            n === 'float' && (n = 'cssFloat'),
                r ? t.setProperty(n, i) : (t[n] = i)
        }
}
var a1 = Ve(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    },
)
function pf(t, e) {
    if (e) {
        if (a1[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(M(137, t))
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null) throw Error(M(60))
            if (
                typeof e.dangerouslySetInnerHTML != 'object' ||
                !('__html' in e.dangerouslySetInnerHTML)
            )
                throw Error(M(61))
        }
        if (e.style != null && typeof e.style != 'object') throw Error(M(62))
    }
}
function mf(t, e) {
    if (t.indexOf('-') === -1) return typeof e.is == 'string'
    switch (t) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
            return !1
        default:
            return !0
    }
}
var vf = null
function Hd(t) {
    return (
        (t = t.target || t.srcElement || window),
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    )
}
var gf = null,
    zo = null,
    Io = null
function kp(t) {
    if ((t = za(t))) {
        if (typeof gf != 'function') throw Error(M(280))
        var e = t.stateNode
        e && ((e = bu(e)), gf(t.stateNode, t.type, e))
    }
}
function U0(t) {
    zo ? (Io ? Io.push(t) : (Io = [t])) : (zo = t)
}
function Y0() {
    if (zo) {
        var t = zo,
            e = Io
        if (((Io = zo = null), kp(t), e))
            for (t = 0; t < e.length; t++) kp(e[t])
    }
}
function H0(t, e) {
    return t(e)
}
function X0() {}
var dc = !1
function G0(t, e, n) {
    if (dc) return t(e, n)
    dc = !0
    try {
        return H0(t, e, n)
    } finally {
        ;(dc = !1), (zo !== null || Io !== null) && (X0(), Y0())
    }
}
function aa(t, e) {
    var n = t.stateNode
    if (n === null) return null
    var r = bu(n)
    if (r === null) return null
    n = r[e]
    e: switch (e) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
            ;(r = !r.disabled) ||
                ((t = t.type),
                (r = !(
                    t === 'button' ||
                    t === 'input' ||
                    t === 'select' ||
                    t === 'textarea'
                ))),
                (t = !r)
            break e
        default:
            t = !1
    }
    if (t) return null
    if (n && typeof n != 'function') throw Error(M(231, e, typeof n))
    return n
}
var _f = !1
if (Ar)
    try {
        var ml = {}
        Object.defineProperty(ml, 'passive', {
            get: function () {
                _f = !0
            },
        }),
            window.addEventListener('test', ml, ml),
            window.removeEventListener('test', ml, ml)
    } catch {
        _f = !1
    }
function s1(t, e, n, r, i, o, l, a, s) {
    var u = Array.prototype.slice.call(arguments, 3)
    try {
        e.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var bl = !1,
    Qs = null,
    Ks = !1,
    yf = null,
    u1 = {
        onError: function (t) {
            ;(bl = !0), (Qs = t)
        },
    }
function c1(t, e, n, r, i, o, l, a, s) {
    ;(bl = !1), (Qs = null), s1.apply(u1, arguments)
}
function f1(t, e, n, r, i, o, l, a, s) {
    if ((c1.apply(this, arguments), bl)) {
        if (bl) {
            var u = Qs
            ;(bl = !1), (Qs = null)
        } else throw Error(M(198))
        Ks || ((Ks = !0), (yf = u))
    }
}
function ao(t) {
    var e = t,
        n = t
    if (t.alternate) for (; e.return; ) e = e.return
    else {
        t = e
        do (e = t), e.flags & 4098 && (n = e.return), (t = e.return)
        while (t)
    }
    return e.tag === 3 ? n : null
}
function Q0(t) {
    if (t.tag === 13) {
        var e = t.memoizedState
        if (
            (e === null &&
                ((t = t.alternate), t !== null && (e = t.memoizedState)),
            e !== null)
        )
            return e.dehydrated
    }
    return null
}
function Cp(t) {
    if (ao(t) !== t) throw Error(M(188))
}
function d1(t) {
    var e = t.alternate
    if (!e) {
        if (((e = ao(t)), e === null)) throw Error(M(188))
        return e !== t ? null : t
    }
    for (var n = t, r = e; ; ) {
        var i = n.return
        if (i === null) break
        var o = i.alternate
        if (o === null) {
            if (((r = i.return), r !== null)) {
                n = r
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n) return Cp(i), t
                if (o === r) return Cp(i), e
                o = o.sibling
            }
            throw Error(M(188))
        }
        if (n.return !== r.return) (n = i), (r = o)
        else {
            for (var l = !1, a = i.child; a; ) {
                if (a === n) {
                    ;(l = !0), (n = i), (r = o)
                    break
                }
                if (a === r) {
                    ;(l = !0), (r = i), (n = o)
                    break
                }
                a = a.sibling
            }
            if (!l) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        ;(l = !0), (n = o), (r = i)
                        break
                    }
                    if (a === r) {
                        ;(l = !0), (r = o), (n = i)
                        break
                    }
                    a = a.sibling
                }
                if (!l) throw Error(M(189))
            }
        }
        if (n.alternate !== r) throw Error(M(190))
    }
    if (n.tag !== 3) throw Error(M(188))
    return n.stateNode.current === n ? t : e
}
function K0(t) {
    return (t = d1(t)), t !== null ? Z0(t) : null
}
function Z0(t) {
    if (t.tag === 5 || t.tag === 6) return t
    for (t = t.child; t !== null; ) {
        var e = Z0(t)
        if (e !== null) return e
        t = t.sibling
    }
    return null
}
var q0 = Sn.unstable_scheduleCallback,
    Tp = Sn.unstable_cancelCallback,
    h1 = Sn.unstable_shouldYield,
    p1 = Sn.unstable_requestPaint,
    Je = Sn.unstable_now,
    m1 = Sn.unstable_getCurrentPriorityLevel,
    Xd = Sn.unstable_ImmediatePriority,
    J0 = Sn.unstable_UserBlockingPriority,
    Zs = Sn.unstable_NormalPriority,
    v1 = Sn.unstable_LowPriority,
    ev = Sn.unstable_IdlePriority,
    Au = null,
    gr = null
function g1(t) {
    if (gr && typeof gr.onCommitFiberRoot == 'function')
        try {
            gr.onCommitFiberRoot(Au, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
}
var qn = Math.clz32 ? Math.clz32 : w1,
    _1 = Math.log,
    y1 = Math.LN2
function w1(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((_1(t) / y1) | 0)) | 0
}
var Ka = 64,
    Za = 4194304
function El(t) {
    switch (t & -t) {
        case 1:
            return 1
        case 2:
            return 2
        case 4:
            return 4
        case 8:
            return 8
        case 16:
            return 16
        case 32:
            return 32
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 4194240
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424
        case 134217728:
            return 134217728
        case 268435456:
            return 268435456
        case 536870912:
            return 536870912
        case 1073741824:
            return 1073741824
        default:
            return t
    }
}
function qs(t, e) {
    var n = t.pendingLanes
    if (n === 0) return 0
    var r = 0,
        i = t.suspendedLanes,
        o = t.pingedLanes,
        l = n & 268435455
    if (l !== 0) {
        var a = l & ~i
        a !== 0 ? (r = El(a)) : ((o &= l), o !== 0 && (r = El(o)))
    } else (l = n & ~i), l !== 0 ? (r = El(l)) : o !== 0 && (r = El(o))
    if (r === 0) return 0
    if (
        e !== 0 &&
        e !== r &&
        !(e & i) &&
        ((i = r & -r),
        (o = e & -e),
        i >= o || (i === 16 && (o & 4194240) !== 0))
    )
        return e
    if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
        for (t = t.entanglements, e &= r; 0 < e; )
            (n = 31 - qn(e)), (i = 1 << n), (r |= t[n]), (e &= ~i)
    return r
}
function x1(t, e) {
    switch (t) {
        case 1:
        case 2:
        case 4:
            return e + 250
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1
        default:
            return -1
    }
}
function S1(t, e) {
    for (
        var n = t.suspendedLanes,
            r = t.pingedLanes,
            i = t.expirationTimes,
            o = t.pendingLanes;
        0 < o;

    ) {
        var l = 31 - qn(o),
            a = 1 << l,
            s = i[l]
        s === -1
            ? (!(a & n) || a & r) && (i[l] = x1(a, e))
            : s <= e && (t.expiredLanes |= a),
            (o &= ~a)
    }
}
function wf(t) {
    return (
        (t = t.pendingLanes & -1073741825),
        t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
    )
}
function tv() {
    var t = Ka
    return (Ka <<= 1), !(Ka & 4194240) && (Ka = 64), t
}
function hc(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t)
    return e
}
function ja(t, e, n) {
    ;(t.pendingLanes |= e),
        e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
        (t = t.eventTimes),
        (e = 31 - qn(e)),
        (t[e] = n)
}
function k1(t, e) {
    var n = t.pendingLanes & ~e
    ;(t.pendingLanes = e),
        (t.suspendedLanes = 0),
        (t.pingedLanes = 0),
        (t.expiredLanes &= e),
        (t.mutableReadLanes &= e),
        (t.entangledLanes &= e),
        (e = t.entanglements)
    var r = t.eventTimes
    for (t = t.expirationTimes; 0 < n; ) {
        var i = 31 - qn(n),
            o = 1 << i
        ;(e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~o)
    }
}
function Gd(t, e) {
    var n = (t.entangledLanes |= e)
    for (t = t.entanglements; n; ) {
        var r = 31 - qn(n),
            i = 1 << r
        ;(i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i)
    }
}
var ve = 0
function nv(t) {
    return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1
}
var rv,
    Qd,
    iv,
    ov,
    lv,
    xf = !1,
    qa = [],
    li = null,
    ai = null,
    si = null,
    sa = new Map(),
    ua = new Map(),
    Kr = [],
    C1 =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' ',
        )
function Op(t, e) {
    switch (t) {
        case 'focusin':
        case 'focusout':
            li = null
            break
        case 'dragenter':
        case 'dragleave':
            ai = null
            break
        case 'mouseover':
        case 'mouseout':
            si = null
            break
        case 'pointerover':
        case 'pointerout':
            sa.delete(e.pointerId)
            break
        case 'gotpointercapture':
        case 'lostpointercapture':
            ua.delete(e.pointerId)
    }
}
function vl(t, e, n, r, i, o) {
    return t === null || t.nativeEvent !== o
        ? ((t = {
              blockedOn: e,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [i],
          }),
          e !== null && ((e = za(e)), e !== null && Qd(e)),
          t)
        : ((t.eventSystemFlags |= r),
          (e = t.targetContainers),
          i !== null && e.indexOf(i) === -1 && e.push(i),
          t)
}
function T1(t, e, n, r, i) {
    switch (e) {
        case 'focusin':
            return (li = vl(li, t, e, n, r, i)), !0
        case 'dragenter':
            return (ai = vl(ai, t, e, n, r, i)), !0
        case 'mouseover':
            return (si = vl(si, t, e, n, r, i)), !0
        case 'pointerover':
            var o = i.pointerId
            return sa.set(o, vl(sa.get(o) || null, t, e, n, r, i)), !0
        case 'gotpointercapture':
            return (
                (o = i.pointerId),
                ua.set(o, vl(ua.get(o) || null, t, e, n, r, i)),
                !0
            )
    }
    return !1
}
function av(t) {
    var e = Ai(t.target)
    if (e !== null) {
        var n = ao(e)
        if (n !== null) {
            if (((e = n.tag), e === 13)) {
                if (((e = Q0(n)), e !== null)) {
                    ;(t.blockedOn = e),
                        lv(t.priority, function () {
                            iv(n)
                        })
                    return
                }
            } else if (
                e === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
                return
            }
        }
    }
    t.blockedOn = null
}
function Ps(t) {
    if (t.blockedOn !== null) return !1
    for (var e = t.targetContainers; 0 < e.length; ) {
        var n = Sf(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent)
        if (n === null) {
            n = t.nativeEvent
            var r = new n.constructor(n.type, n)
            ;(vf = r), n.target.dispatchEvent(r), (vf = null)
        } else return (e = za(n)), e !== null && Qd(e), (t.blockedOn = n), !1
        e.shift()
    }
    return !0
}
function Pp(t, e, n) {
    Ps(t) && n.delete(e)
}
function O1() {
    ;(xf = !1),
        li !== null && Ps(li) && (li = null),
        ai !== null && Ps(ai) && (ai = null),
        si !== null && Ps(si) && (si = null),
        sa.forEach(Pp),
        ua.forEach(Pp)
}
function gl(t, e) {
    t.blockedOn === e &&
        ((t.blockedOn = null),
        xf ||
            ((xf = !0),
            Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority, O1)))
}
function ca(t) {
    function e(i) {
        return gl(i, t)
    }
    if (0 < qa.length) {
        gl(qa[0], t)
        for (var n = 1; n < qa.length; n++) {
            var r = qa[n]
            r.blockedOn === t && (r.blockedOn = null)
        }
    }
    for (
        li !== null && gl(li, t),
            ai !== null && gl(ai, t),
            si !== null && gl(si, t),
            sa.forEach(e),
            ua.forEach(e),
            n = 0;
        n < Kr.length;
        n++
    )
        (r = Kr[n]), r.blockedOn === t && (r.blockedOn = null)
    for (; 0 < Kr.length && ((n = Kr[0]), n.blockedOn === null); )
        av(n), n.blockedOn === null && Kr.shift()
}
var Fo = Vr.ReactCurrentBatchConfig,
    Js = !0
function P1(t, e, n, r) {
    var i = ve,
        o = Fo.transition
    Fo.transition = null
    try {
        ;(ve = 1), Kd(t, e, n, r)
    } finally {
        ;(ve = i), (Fo.transition = o)
    }
}
function E1(t, e, n, r) {
    var i = ve,
        o = Fo.transition
    Fo.transition = null
    try {
        ;(ve = 4), Kd(t, e, n, r)
    } finally {
        ;(ve = i), (Fo.transition = o)
    }
}
function Kd(t, e, n, r) {
    if (Js) {
        var i = Sf(t, e, n, r)
        if (i === null) kc(t, e, r, eu, n), Op(t, r)
        else if (T1(i, t, e, n, r)) r.stopPropagation()
        else if ((Op(t, r), e & 4 && -1 < C1.indexOf(t))) {
            for (; i !== null; ) {
                var o = za(i)
                if (
                    (o !== null && rv(o),
                    (o = Sf(t, e, n, r)),
                    o === null && kc(t, e, r, eu, n),
                    o === i)
                )
                    break
                i = o
            }
            i !== null && r.stopPropagation()
        } else kc(t, e, r, null, n)
    }
}
var eu = null
function Sf(t, e, n, r) {
    if (((eu = null), (t = Hd(r)), (t = Ai(t)), t !== null))
        if (((e = ao(t)), e === null)) t = null
        else if (((n = e.tag), n === 13)) {
            if (((t = Q0(e)), t !== null)) return t
            t = null
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null
            t = null
        } else e !== t && (t = null)
    return (eu = t), null
}
function sv(t) {
    switch (t) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
            return 1
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
            return 4
        case 'message':
            switch (m1()) {
                case Xd:
                    return 1
                case J0:
                    return 4
                case Zs:
                case v1:
                    return 16
                case ev:
                    return 536870912
                default:
                    return 16
            }
        default:
            return 16
    }
}
var qr = null,
    Zd = null,
    Es = null
function uv() {
    if (Es) return Es
    var t,
        e = Zd,
        n = e.length,
        r,
        i = 'value' in qr ? qr.value : qr.textContent,
        o = i.length
    for (t = 0; t < n && e[t] === i[t]; t++);
    var l = n - t
    for (r = 1; r <= l && e[n - r] === i[o - r]; r++);
    return (Es = i.slice(t, 1 < r ? 1 - r : void 0))
}
function Ds(t) {
    var e = t.keyCode
    return (
        'charCode' in t
            ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
            : (t = e),
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    )
}
function Ja() {
    return !0
}
function Ep() {
    return !1
}
function Tn(t) {
    function e(n, r, i, o, l) {
        ;(this._reactName = n),
            (this._targetInst = i),
            (this.type = r),
            (this.nativeEvent = o),
            (this.target = l),
            (this.currentTarget = null)
        for (var a in t)
            t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(o) : o[a]))
        return (
            (this.isDefaultPrevented = (
                o.defaultPrevented != null
                    ? o.defaultPrevented
                    : o.returnValue === !1
            )
                ? Ja
                : Ep),
            (this.isPropagationStopped = Ep),
            this
        )
    }
    return (
        Ve(e.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0
                var n = this.nativeEvent
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != 'unknown' &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = Ja))
            },
            stopPropagation: function () {
                var n = this.nativeEvent
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != 'unknown' &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = Ja))
            },
            persist: function () {},
            isPersistent: Ja,
        }),
        e
    )
}
var al = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    qd = Tn(al),
    Aa = Ve({}, al, { view: 0, detail: 0 }),
    D1 = Tn(Aa),
    pc,
    mc,
    _l,
    zu = Ve({}, Aa, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Jd,
        button: 0,
        buttons: 0,
        relatedTarget: function (t) {
            return t.relatedTarget === void 0
                ? t.fromElement === t.srcElement
                    ? t.toElement
                    : t.fromElement
                : t.relatedTarget
        },
        movementX: function (t) {
            return 'movementX' in t
                ? t.movementX
                : (t !== _l &&
                      (_l && t.type === 'mousemove'
                          ? ((pc = t.screenX - _l.screenX),
                            (mc = t.screenY - _l.screenY))
                          : (mc = pc = 0),
                      (_l = t)),
                  pc)
        },
        movementY: function (t) {
            return 'movementY' in t ? t.movementY : mc
        },
    }),
    Dp = Tn(zu),
    N1 = Ve({}, zu, { dataTransfer: 0 }),
    M1 = Tn(N1),
    L1 = Ve({}, Aa, { relatedTarget: 0 }),
    vc = Tn(L1),
    R1 = Ve({}, al, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    j1 = Tn(R1),
    A1 = Ve({}, al, {
        clipboardData: function (t) {
            return 'clipboardData' in t ? t.clipboardData : window.clipboardData
        },
    }),
    z1 = Tn(A1),
    I1 = Ve({}, al, { data: 0 }),
    Np = Tn(I1),
    F1 = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
    },
    b1 = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
    },
    W1 = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
    }
function V1(t) {
    var e = this.nativeEvent
    return e.getModifierState
        ? e.getModifierState(t)
        : (t = W1[t])
          ? !!e[t]
          : !1
}
function Jd() {
    return V1
}
var $1 = Ve({}, Aa, {
        key: function (t) {
            if (t.key) {
                var e = F1[t.key] || t.key
                if (e !== 'Unidentified') return e
            }
            return t.type === 'keypress'
                ? ((t = Ds(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
                : t.type === 'keydown' || t.type === 'keyup'
                  ? b1[t.keyCode] || 'Unidentified'
                  : ''
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Jd,
        charCode: function (t) {
            return t.type === 'keypress' ? Ds(t) : 0
        },
        keyCode: function (t) {
            return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0
        },
        which: function (t) {
            return t.type === 'keypress'
                ? Ds(t)
                : t.type === 'keydown' || t.type === 'keyup'
                  ? t.keyCode
                  : 0
        },
    }),
    B1 = Tn($1),
    U1 = Ve({}, zu, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Mp = Tn(U1),
    Y1 = Ve({}, Aa, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Jd,
    }),
    H1 = Tn(Y1),
    X1 = Ve({}, al, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    G1 = Tn(X1),
    Q1 = Ve({}, zu, {
        deltaX: function (t) {
            return 'deltaX' in t
                ? t.deltaX
                : 'wheelDeltaX' in t
                  ? -t.wheelDeltaX
                  : 0
        },
        deltaY: function (t) {
            return 'deltaY' in t
                ? t.deltaY
                : 'wheelDeltaY' in t
                  ? -t.wheelDeltaY
                  : 'wheelDelta' in t
                    ? -t.wheelDelta
                    : 0
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    K1 = Tn(Q1),
    Z1 = [9, 13, 27, 32],
    eh = Ar && 'CompositionEvent' in window,
    Wl = null
Ar && 'documentMode' in document && (Wl = document.documentMode)
var q1 = Ar && 'TextEvent' in window && !Wl,
    cv = Ar && (!eh || (Wl && 8 < Wl && 11 >= Wl)),
    Lp = ' ',
    Rp = !1
function fv(t, e) {
    switch (t) {
        case 'keyup':
            return Z1.indexOf(e.keyCode) !== -1
        case 'keydown':
            return e.keyCode !== 229
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0
        default:
            return !1
    }
}
function dv(t) {
    return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null
}
var wo = !1
function J1(t, e) {
    switch (t) {
        case 'compositionend':
            return dv(e)
        case 'keypress':
            return e.which !== 32 ? null : ((Rp = !0), Lp)
        case 'textInput':
            return (t = e.data), t === Lp && Rp ? null : t
        default:
            return null
    }
}
function ew(t, e) {
    if (wo)
        return t === 'compositionend' || (!eh && fv(t, e))
            ? ((t = uv()), (Es = Zd = qr = null), (wo = !1), t)
            : null
    switch (t) {
        case 'paste':
            return null
        case 'keypress':
            if (
                !(e.ctrlKey || e.altKey || e.metaKey) ||
                (e.ctrlKey && e.altKey)
            ) {
                if (e.char && 1 < e.char.length) return e.char
                if (e.which) return String.fromCharCode(e.which)
            }
            return null
        case 'compositionend':
            return cv && e.locale !== 'ko' ? null : e.data
        default:
            return null
    }
}
var tw = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
}
function jp(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase()
    return e === 'input' ? !!tw[t.type] : e === 'textarea'
}
function hv(t, e, n, r) {
    U0(r),
        (e = tu(e, 'onChange')),
        0 < e.length &&
            ((n = new qd('onChange', 'change', null, n, r)),
            t.push({ event: n, listeners: e }))
}
var Vl = null,
    fa = null
function nw(t) {
    Cv(t, 0)
}
function Iu(t) {
    var e = ko(t)
    if (I0(e)) return t
}
function rw(t, e) {
    if (t === 'change') return e
}
var pv = !1
if (Ar) {
    var gc
    if (Ar) {
        var _c = 'oninput' in document
        if (!_c) {
            var Ap = document.createElement('div')
            Ap.setAttribute('oninput', 'return;'),
                (_c = typeof Ap.oninput == 'function')
        }
        gc = _c
    } else gc = !1
    pv = gc && (!document.documentMode || 9 < document.documentMode)
}
function zp() {
    Vl && (Vl.detachEvent('onpropertychange', mv), (fa = Vl = null))
}
function mv(t) {
    if (t.propertyName === 'value' && Iu(fa)) {
        var e = []
        hv(e, fa, t, Hd(t)), G0(nw, e)
    }
}
function iw(t, e, n) {
    t === 'focusin'
        ? (zp(), (Vl = e), (fa = n), Vl.attachEvent('onpropertychange', mv))
        : t === 'focusout' && zp()
}
function ow(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
        return Iu(fa)
}
function lw(t, e) {
    if (t === 'click') return Iu(e)
}
function aw(t, e) {
    if (t === 'input' || t === 'change') return Iu(e)
}
function sw(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e)
}
var er = typeof Object.is == 'function' ? Object.is : sw
function da(t, e) {
    if (er(t, e)) return !0
    if (
        typeof t != 'object' ||
        t === null ||
        typeof e != 'object' ||
        e === null
    )
        return !1
    var n = Object.keys(t),
        r = Object.keys(e)
    if (n.length !== r.length) return !1
    for (r = 0; r < n.length; r++) {
        var i = n[r]
        if (!rf.call(e, i) || !er(t[i], e[i])) return !1
    }
    return !0
}
function Ip(t) {
    for (; t && t.firstChild; ) t = t.firstChild
    return t
}
function Fp(t, e) {
    var n = Ip(t)
    t = 0
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = t + n.textContent.length), t <= e && r >= e))
                return { node: n, offset: e - t }
            t = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ip(n)
    }
}
function vv(t, e) {
    return t && e
        ? t === e
            ? !0
            : t && t.nodeType === 3
              ? !1
              : e && e.nodeType === 3
                ? vv(t, e.parentNode)
                : 'contains' in t
                  ? t.contains(e)
                  : t.compareDocumentPosition
                    ? !!(t.compareDocumentPosition(e) & 16)
                    : !1
        : !1
}
function gv() {
    for (var t = window, e = Gs(); e instanceof t.HTMLIFrameElement; ) {
        try {
            var n = typeof e.contentWindow.location.href == 'string'
        } catch {
            n = !1
        }
        if (n) t = e.contentWindow
        else break
        e = Gs(t.document)
    }
    return e
}
function th(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase()
    return (
        e &&
        ((e === 'input' &&
            (t.type === 'text' ||
                t.type === 'search' ||
                t.type === 'tel' ||
                t.type === 'url' ||
                t.type === 'password')) ||
            e === 'textarea' ||
            t.contentEditable === 'true')
    )
}
function uw(t) {
    var e = gv(),
        n = t.focusedElem,
        r = t.selectionRange
    if (
        e !== n &&
        n &&
        n.ownerDocument &&
        vv(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && th(n)) {
            if (
                ((e = r.start),
                (t = r.end),
                t === void 0 && (t = e),
                'selectionStart' in n)
            )
                (n.selectionStart = e),
                    (n.selectionEnd = Math.min(t, n.value.length))
            else if (
                ((t =
                    ((e = n.ownerDocument || document) && e.defaultView) ||
                    window),
                t.getSelection)
            ) {
                t = t.getSelection()
                var i = n.textContent.length,
                    o = Math.min(r.start, i)
                ;(r = r.end === void 0 ? o : Math.min(r.end, i)),
                    !t.extend && o > r && ((i = r), (r = o), (o = i)),
                    (i = Fp(n, o))
                var l = Fp(n, r)
                i &&
                    l &&
                    (t.rangeCount !== 1 ||
                        t.anchorNode !== i.node ||
                        t.anchorOffset !== i.offset ||
                        t.focusNode !== l.node ||
                        t.focusOffset !== l.offset) &&
                    ((e = e.createRange()),
                    e.setStart(i.node, i.offset),
                    t.removeAllRanges(),
                    o > r
                        ? (t.addRange(e), t.extend(l.node, l.offset))
                        : (e.setEnd(l.node, l.offset), t.addRange(e)))
            }
        }
        for (e = [], t = n; (t = t.parentNode); )
            t.nodeType === 1 &&
                e.push({ element: t, left: t.scrollLeft, top: t.scrollTop })
        for (
            typeof n.focus == 'function' && n.focus(), n = 0;
            n < e.length;
            n++
        )
            (t = e[n]),
                (t.element.scrollLeft = t.left),
                (t.element.scrollTop = t.top)
    }
}
var cw = Ar && 'documentMode' in document && 11 >= document.documentMode,
    xo = null,
    kf = null,
    $l = null,
    Cf = !1
function bp(t, e, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
    Cf ||
        xo == null ||
        xo !== Gs(r) ||
        ((r = xo),
        'selectionStart' in r && th(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        ($l && da($l, r)) ||
            (($l = r),
            (r = tu(kf, 'onSelect')),
            0 < r.length &&
                ((e = new qd('onSelect', 'select', null, e, n)),
                t.push({ event: e, listeners: r }),
                (e.target = xo))))
}
function es(t, e) {
    var n = {}
    return (
        (n[t.toLowerCase()] = e.toLowerCase()),
        (n['Webkit' + t] = 'webkit' + e),
        (n['Moz' + t] = 'moz' + e),
        n
    )
}
var So = {
        animationend: es('Animation', 'AnimationEnd'),
        animationiteration: es('Animation', 'AnimationIteration'),
        animationstart: es('Animation', 'AnimationStart'),
        transitionend: es('Transition', 'TransitionEnd'),
    },
    yc = {},
    _v = {}
Ar &&
    ((_v = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete So.animationend.animation,
        delete So.animationiteration.animation,
        delete So.animationstart.animation),
    'TransitionEvent' in window || delete So.transitionend.transition)
function Fu(t) {
    if (yc[t]) return yc[t]
    if (!So[t]) return t
    var e = So[t],
        n
    for (n in e) if (e.hasOwnProperty(n) && n in _v) return (yc[t] = e[n])
    return t
}
var yv = Fu('animationend'),
    wv = Fu('animationiteration'),
    xv = Fu('animationstart'),
    Sv = Fu('transitionend'),
    kv = new Map(),
    Wp =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' ',
        )
function Si(t, e) {
    kv.set(t, e), lo(e, [t])
}
for (var wc = 0; wc < Wp.length; wc++) {
    var xc = Wp[wc],
        fw = xc.toLowerCase(),
        dw = xc[0].toUpperCase() + xc.slice(1)
    Si(fw, 'on' + dw)
}
Si(yv, 'onAnimationEnd')
Si(wv, 'onAnimationIteration')
Si(xv, 'onAnimationStart')
Si('dblclick', 'onDoubleClick')
Si('focusin', 'onFocus')
Si('focusout', 'onBlur')
Si(Sv, 'onTransitionEnd')
Xo('onMouseEnter', ['mouseout', 'mouseover'])
Xo('onMouseLeave', ['mouseout', 'mouseover'])
Xo('onPointerEnter', ['pointerout', 'pointerover'])
Xo('onPointerLeave', ['pointerout', 'pointerover'])
lo(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
    ),
)
lo(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
    ),
)
lo('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
lo(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' '),
)
lo(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
)
lo(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
)
var Dl =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
        ),
    hw = new Set(
        'cancel close invalid load scroll toggle'.split(' ').concat(Dl),
    )
function Vp(t, e, n) {
    var r = t.type || 'unknown-event'
    ;(t.currentTarget = n), f1(r, e, void 0, t), (t.currentTarget = null)
}
function Cv(t, e) {
    e = (e & 4) !== 0
    for (var n = 0; n < t.length; n++) {
        var r = t[n],
            i = r.event
        r = r.listeners
        e: {
            var o = void 0
            if (e)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var a = r[l],
                        s = a.instance,
                        u = a.currentTarget
                    if (((a = a.listener), s !== o && i.isPropagationStopped()))
                        break e
                    Vp(i, a, u), (o = s)
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (
                        ((a = r[l]),
                        (s = a.instance),
                        (u = a.currentTarget),
                        (a = a.listener),
                        s !== o && i.isPropagationStopped())
                    )
                        break e
                    Vp(i, a, u), (o = s)
                }
        }
    }
    if (Ks) throw ((t = yf), (Ks = !1), (yf = null), t)
}
function Pe(t, e) {
    var n = e[Df]
    n === void 0 && (n = e[Df] = new Set())
    var r = t + '__bubble'
    n.has(r) || (Tv(e, t, 2, !1), n.add(r))
}
function Sc(t, e, n) {
    var r = 0
    e && (r |= 4), Tv(n, t, r, e)
}
var ts = '_reactListening' + Math.random().toString(36).slice(2)
function ha(t) {
    if (!t[ts]) {
        ;(t[ts] = !0),
            L0.forEach(function (n) {
                n !== 'selectionchange' &&
                    (hw.has(n) || Sc(n, !1, t), Sc(n, !0, t))
            })
        var e = t.nodeType === 9 ? t : t.ownerDocument
        e === null || e[ts] || ((e[ts] = !0), Sc('selectionchange', !1, e))
    }
}
function Tv(t, e, n, r) {
    switch (sv(e)) {
        case 1:
            var i = P1
            break
        case 4:
            i = E1
            break
        default:
            i = Kd
    }
    ;(n = i.bind(null, e, n, t)),
        (i = void 0),
        !_f ||
            (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
            (i = !0),
        r
            ? i !== void 0
                ? t.addEventListener(e, n, { capture: !0, passive: i })
                : t.addEventListener(e, n, !0)
            : i !== void 0
              ? t.addEventListener(e, n, { passive: i })
              : t.addEventListener(e, n, !1)
}
function kc(t, e, n, r, i) {
    var o = r
    if (!(e & 1) && !(e & 2) && r !== null)
        e: for (;;) {
            if (r === null) return
            var l = r.tag
            if (l === 3 || l === 4) {
                var a = r.stateNode.containerInfo
                if (a === i || (a.nodeType === 8 && a.parentNode === i)) break
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var s = l.tag
                        if (
                            (s === 3 || s === 4) &&
                            ((s = l.stateNode.containerInfo),
                            s === i || (s.nodeType === 8 && s.parentNode === i))
                        )
                            return
                        l = l.return
                    }
                for (; a !== null; ) {
                    if (((l = Ai(a)), l === null)) return
                    if (((s = l.tag), s === 5 || s === 6)) {
                        r = o = l
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    G0(function () {
        var u = o,
            c = Hd(n),
            d = []
        e: {
            var f = kv.get(t)
            if (f !== void 0) {
                var h = qd,
                    g = t
                switch (t) {
                    case 'keypress':
                        if (Ds(n) === 0) break e
                    case 'keydown':
                    case 'keyup':
                        h = B1
                        break
                    case 'focusin':
                        ;(g = 'focus'), (h = vc)
                        break
                    case 'focusout':
                        ;(g = 'blur'), (h = vc)
                        break
                    case 'beforeblur':
                    case 'afterblur':
                        h = vc
                        break
                    case 'click':
                        if (n.button === 2) break e
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        h = Dp
                        break
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        h = M1
                        break
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        h = H1
                        break
                    case yv:
                    case wv:
                    case xv:
                        h = j1
                        break
                    case Sv:
                        h = G1
                        break
                    case 'scroll':
                        h = D1
                        break
                    case 'wheel':
                        h = K1
                        break
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        h = z1
                        break
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        h = Mp
                }
                var p = (e & 4) !== 0,
                    x = !p && t === 'scroll',
                    v = p ? (f !== null ? f + 'Capture' : null) : f
                p = []
                for (var m = u, _; m !== null; ) {
                    _ = m
                    var y = _.stateNode
                    if (
                        (_.tag === 5 &&
                            y !== null &&
                            ((_ = y),
                            v !== null &&
                                ((y = aa(m, v)),
                                y != null && p.push(pa(m, y, _)))),
                        x)
                    )
                        break
                    m = m.return
                }
                0 < p.length &&
                    ((f = new h(f, g, null, n, c)),
                    d.push({ event: f, listeners: p }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (
                    ((f = t === 'mouseover' || t === 'pointerover'),
                    (h = t === 'mouseout' || t === 'pointerout'),
                    f &&
                        n !== vf &&
                        (g = n.relatedTarget || n.fromElement) &&
                        (Ai(g) || g[zr]))
                )
                    break e
                if (
                    (h || f) &&
                    ((f =
                        c.window === c
                            ? c
                            : (f = c.ownerDocument)
                              ? f.defaultView || f.parentWindow
                              : window),
                    h
                        ? ((g = n.relatedTarget || n.toElement),
                          (h = u),
                          (g = g ? Ai(g) : null),
                          g !== null &&
                              ((x = ao(g)),
                              g !== x || (g.tag !== 5 && g.tag !== 6)) &&
                              (g = null))
                        : ((h = null), (g = u)),
                    h !== g)
                ) {
                    if (
                        ((p = Dp),
                        (y = 'onMouseLeave'),
                        (v = 'onMouseEnter'),
                        (m = 'mouse'),
                        (t === 'pointerout' || t === 'pointerover') &&
                            ((p = Mp),
                            (y = 'onPointerLeave'),
                            (v = 'onPointerEnter'),
                            (m = 'pointer')),
                        (x = h == null ? f : ko(h)),
                        (_ = g == null ? f : ko(g)),
                        (f = new p(y, m + 'leave', h, n, c)),
                        (f.target = x),
                        (f.relatedTarget = _),
                        (y = null),
                        Ai(c) === u &&
                            ((p = new p(v, m + 'enter', g, n, c)),
                            (p.target = _),
                            (p.relatedTarget = x),
                            (y = p)),
                        (x = y),
                        h && g)
                    )
                        t: {
                            for (p = h, v = g, m = 0, _ = p; _; _ = fo(_)) m++
                            for (_ = 0, y = v; y; y = fo(y)) _++
                            for (; 0 < m - _; ) (p = fo(p)), m--
                            for (; 0 < _ - m; ) (v = fo(v)), _--
                            for (; m--; ) {
                                if (
                                    p === v ||
                                    (v !== null && p === v.alternate)
                                )
                                    break t
                                ;(p = fo(p)), (v = fo(v))
                            }
                            p = null
                        }
                    else p = null
                    h !== null && $p(d, f, h, p, !1),
                        g !== null && x !== null && $p(d, x, g, p, !0)
                }
            }
            e: {
                if (
                    ((f = u ? ko(u) : window),
                    (h = f.nodeName && f.nodeName.toLowerCase()),
                    h === 'select' || (h === 'input' && f.type === 'file'))
                )
                    var k = rw
                else if (jp(f))
                    if (pv) k = aw
                    else {
                        k = ow
                        var C = iw
                    }
                else
                    (h = f.nodeName) &&
                        h.toLowerCase() === 'input' &&
                        (f.type === 'checkbox' || f.type === 'radio') &&
                        (k = lw)
                if (k && (k = k(t, u))) {
                    hv(d, k, n, c)
                    break e
                }
                C && C(t, f, u),
                    t === 'focusout' &&
                        (C = f._wrapperState) &&
                        C.controlled &&
                        f.type === 'number' &&
                        ff(f, 'number', f.value)
            }
            switch (((C = u ? ko(u) : window), t)) {
                case 'focusin':
                    ;(jp(C) || C.contentEditable === 'true') &&
                        ((xo = C), (kf = u), ($l = null))
                    break
                case 'focusout':
                    $l = kf = xo = null
                    break
                case 'mousedown':
                    Cf = !0
                    break
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    ;(Cf = !1), bp(d, n, c)
                    break
                case 'selectionchange':
                    if (cw) break
                case 'keydown':
                case 'keyup':
                    bp(d, n, c)
            }
            var S
            if (eh)
                e: {
                    switch (t) {
                        case 'compositionstart':
                            var T = 'onCompositionStart'
                            break e
                        case 'compositionend':
                            T = 'onCompositionEnd'
                            break e
                        case 'compositionupdate':
                            T = 'onCompositionUpdate'
                            break e
                    }
                    T = void 0
                }
            else
                wo
                    ? fv(t, n) && (T = 'onCompositionEnd')
                    : t === 'keydown' &&
                      n.keyCode === 229 &&
                      (T = 'onCompositionStart')
            T &&
                (cv &&
                    n.locale !== 'ko' &&
                    (wo || T !== 'onCompositionStart'
                        ? T === 'onCompositionEnd' && wo && (S = uv())
                        : ((qr = c),
                          (Zd = 'value' in qr ? qr.value : qr.textContent),
                          (wo = !0))),
                (C = tu(u, T)),
                0 < C.length &&
                    ((T = new Np(T, t, null, n, c)),
                    d.push({ event: T, listeners: C }),
                    S
                        ? (T.data = S)
                        : ((S = dv(n)), S !== null && (T.data = S)))),
                (S = q1 ? J1(t, n) : ew(t, n)) &&
                    ((u = tu(u, 'onBeforeInput')),
                    0 < u.length &&
                        ((c = new Np(
                            'onBeforeInput',
                            'beforeinput',
                            null,
                            n,
                            c,
                        )),
                        d.push({ event: c, listeners: u }),
                        (c.data = S)))
        }
        Cv(d, e)
    })
}
function pa(t, e, n) {
    return { instance: t, listener: e, currentTarget: n }
}
function tu(t, e) {
    for (var n = e + 'Capture', r = []; t !== null; ) {
        var i = t,
            o = i.stateNode
        i.tag === 5 &&
            o !== null &&
            ((i = o),
            (o = aa(t, n)),
            o != null && r.unshift(pa(t, o, i)),
            (o = aa(t, e)),
            o != null && r.push(pa(t, o, i))),
            (t = t.return)
    }
    return r
}
function fo(t) {
    if (t === null) return null
    do t = t.return
    while (t && t.tag !== 5)
    return t || null
}
function $p(t, e, n, r, i) {
    for (var o = e._reactName, l = []; n !== null && n !== r; ) {
        var a = n,
            s = a.alternate,
            u = a.stateNode
        if (s !== null && s === r) break
        a.tag === 5 &&
            u !== null &&
            ((a = u),
            i
                ? ((s = aa(n, o)), s != null && l.unshift(pa(n, s, a)))
                : i || ((s = aa(n, o)), s != null && l.push(pa(n, s, a)))),
            (n = n.return)
    }
    l.length !== 0 && t.push({ event: e, listeners: l })
}
var pw = /\r\n?/g,
    mw = /\u0000|\uFFFD/g
function Bp(t) {
    return (typeof t == 'string' ? t : '' + t)
        .replace(
            pw,
            `
`,
        )
        .replace(mw, '')
}
function ns(t, e, n) {
    if (((e = Bp(e)), Bp(t) !== e && n)) throw Error(M(425))
}
function nu() {}
var Tf = null,
    Of = null
function Pf(t, e) {
    return (
        t === 'textarea' ||
        t === 'noscript' ||
        typeof e.children == 'string' ||
        typeof e.children == 'number' ||
        (typeof e.dangerouslySetInnerHTML == 'object' &&
            e.dangerouslySetInnerHTML !== null &&
            e.dangerouslySetInnerHTML.__html != null)
    )
}
var Ef = typeof setTimeout == 'function' ? setTimeout : void 0,
    vw = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Up = typeof Promise == 'function' ? Promise : void 0,
    gw =
        typeof queueMicrotask == 'function'
            ? queueMicrotask
            : typeof Up < 'u'
              ? function (t) {
                    return Up.resolve(null).then(t).catch(_w)
                }
              : Ef
function _w(t) {
    setTimeout(function () {
        throw t
    })
}
function Cc(t, e) {
    var n = e,
        r = 0
    do {
        var i = n.nextSibling
        if ((t.removeChild(n), i && i.nodeType === 8))
            if (((n = i.data), n === '/$')) {
                if (r === 0) {
                    t.removeChild(i), ca(e)
                    return
                }
                r--
            } else (n !== '$' && n !== '$?' && n !== '$!') || r++
        n = i
    } while (n)
    ca(e)
}
function ui(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType
        if (e === 1 || e === 3) break
        if (e === 8) {
            if (((e = t.data), e === '$' || e === '$!' || e === '$?')) break
            if (e === '/$') return null
        }
    }
    return t
}
function Yp(t) {
    t = t.previousSibling
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var n = t.data
            if (n === '$' || n === '$!' || n === '$?') {
                if (e === 0) return t
                e--
            } else n === '/$' && e++
        }
        t = t.previousSibling
    }
    return null
}
var sl = Math.random().toString(36).slice(2),
    hr = '__reactFiber$' + sl,
    ma = '__reactProps$' + sl,
    zr = '__reactContainer$' + sl,
    Df = '__reactEvents$' + sl,
    yw = '__reactListeners$' + sl,
    ww = '__reactHandles$' + sl
function Ai(t) {
    var e = t[hr]
    if (e) return e
    for (var n = t.parentNode; n; ) {
        if ((e = n[zr] || n[hr])) {
            if (
                ((n = e.alternate),
                e.child !== null || (n !== null && n.child !== null))
            )
                for (t = Yp(t); t !== null; ) {
                    if ((n = t[hr])) return n
                    t = Yp(t)
                }
            return e
        }
        ;(t = n), (n = t.parentNode)
    }
    return null
}
function za(t) {
    return (
        (t = t[hr] || t[zr]),
        !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3)
            ? null
            : t
    )
}
function ko(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode
    throw Error(M(33))
}
function bu(t) {
    return t[ma] || null
}
var Nf = [],
    Co = -1
function ki(t) {
    return { current: t }
}
function De(t) {
    0 > Co || ((t.current = Nf[Co]), (Nf[Co] = null), Co--)
}
function ke(t, e) {
    Co++, (Nf[Co] = t.current), (t.current = e)
}
var _i = {},
    Ft = ki(_i),
    tn = ki(!1),
    Ki = _i
function Go(t, e) {
    var n = t.type.contextTypes
    if (!n) return _i
    var r = t.stateNode
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
        return r.__reactInternalMemoizedMaskedChildContext
    var i = {},
        o
    for (o in n) i[o] = e[o]
    return (
        r &&
            ((t = t.stateNode),
            (t.__reactInternalMemoizedUnmaskedChildContext = e),
            (t.__reactInternalMemoizedMaskedChildContext = i)),
        i
    )
}
function nn(t) {
    return (t = t.childContextTypes), t != null
}
function ru() {
    De(tn), De(Ft)
}
function Hp(t, e, n) {
    if (Ft.current !== _i) throw Error(M(168))
    ke(Ft, e), ke(tn, n)
}
function Ov(t, e, n) {
    var r = t.stateNode
    if (((e = e.childContextTypes), typeof r.getChildContext != 'function'))
        return n
    r = r.getChildContext()
    for (var i in r) if (!(i in e)) throw Error(M(108, i1(t) || 'Unknown', i))
    return Ve({}, n, r)
}
function iu(t) {
    return (
        (t =
            ((t = t.stateNode) &&
                t.__reactInternalMemoizedMergedChildContext) ||
            _i),
        (Ki = Ft.current),
        ke(Ft, t),
        ke(tn, tn.current),
        !0
    )
}
function Xp(t, e, n) {
    var r = t.stateNode
    if (!r) throw Error(M(169))
    n
        ? ((t = Ov(t, e, Ki)),
          (r.__reactInternalMemoizedMergedChildContext = t),
          De(tn),
          De(Ft),
          ke(Ft, t))
        : De(tn),
        ke(tn, n)
}
var Pr = null,
    Wu = !1,
    Tc = !1
function Pv(t) {
    Pr === null ? (Pr = [t]) : Pr.push(t)
}
function xw(t) {
    ;(Wu = !0), Pv(t)
}
function Ci() {
    if (!Tc && Pr !== null) {
        Tc = !0
        var t = 0,
            e = ve
        try {
            var n = Pr
            for (ve = 1; t < n.length; t++) {
                var r = n[t]
                do r = r(!0)
                while (r !== null)
            }
            ;(Pr = null), (Wu = !1)
        } catch (i) {
            throw (Pr !== null && (Pr = Pr.slice(t + 1)), q0(Xd, Ci), i)
        } finally {
            ;(ve = e), (Tc = !1)
        }
    }
    return null
}
var To = [],
    Oo = 0,
    ou = null,
    lu = 0,
    Nn = [],
    Mn = 0,
    Zi = null,
    Nr = 1,
    Mr = ''
function Ni(t, e) {
    ;(To[Oo++] = lu), (To[Oo++] = ou), (ou = t), (lu = e)
}
function Ev(t, e, n) {
    ;(Nn[Mn++] = Nr), (Nn[Mn++] = Mr), (Nn[Mn++] = Zi), (Zi = t)
    var r = Nr
    t = Mr
    var i = 32 - qn(r) - 1
    ;(r &= ~(1 << i)), (n += 1)
    var o = 32 - qn(e) + i
    if (30 < o) {
        var l = i - (i % 5)
        ;(o = (r & ((1 << l) - 1)).toString(32)),
            (r >>= l),
            (i -= l),
            (Nr = (1 << (32 - qn(e) + i)) | (n << i) | r),
            (Mr = o + t)
    } else (Nr = (1 << o) | (n << i) | r), (Mr = t)
}
function nh(t) {
    t.return !== null && (Ni(t, 1), Ev(t, 1, 0))
}
function rh(t) {
    for (; t === ou; )
        (ou = To[--Oo]), (To[Oo] = null), (lu = To[--Oo]), (To[Oo] = null)
    for (; t === Zi; )
        (Zi = Nn[--Mn]),
            (Nn[Mn] = null),
            (Mr = Nn[--Mn]),
            (Nn[Mn] = null),
            (Nr = Nn[--Mn]),
            (Nn[Mn] = null)
}
var wn = null,
    _n = null,
    Ne = !1,
    Kn = null
function Dv(t, e) {
    var n = jn(5, null, null, 0)
    ;(n.elementType = 'DELETED'),
        (n.stateNode = e),
        (n.return = t),
        (e = t.deletions),
        e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n)
}
function Gp(t, e) {
    switch (t.tag) {
        case 5:
            var n = t.type
            return (
                (e =
                    e.nodeType !== 1 ||
                    n.toLowerCase() !== e.nodeName.toLowerCase()
                        ? null
                        : e),
                e !== null
                    ? ((t.stateNode = e), (wn = t), (_n = ui(e.firstChild)), !0)
                    : !1
            )
        case 6:
            return (
                (e = t.pendingProps === '' || e.nodeType !== 3 ? null : e),
                e !== null ? ((t.stateNode = e), (wn = t), (_n = null), !0) : !1
            )
        case 13:
            return (
                (e = e.nodeType !== 8 ? null : e),
                e !== null
                    ? ((n = Zi !== null ? { id: Nr, overflow: Mr } : null),
                      (t.memoizedState = {
                          dehydrated: e,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = jn(18, null, null, 0)),
                      (n.stateNode = e),
                      (n.return = t),
                      (t.child = n),
                      (wn = t),
                      (_n = null),
                      !0)
                    : !1
            )
        default:
            return !1
    }
}
function Mf(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function Lf(t) {
    if (Ne) {
        var e = _n
        if (e) {
            var n = e
            if (!Gp(t, e)) {
                if (Mf(t)) throw Error(M(418))
                e = ui(n.nextSibling)
                var r = wn
                e && Gp(t, e)
                    ? Dv(r, n)
                    : ((t.flags = (t.flags & -4097) | 2), (Ne = !1), (wn = t))
            }
        } else {
            if (Mf(t)) throw Error(M(418))
            ;(t.flags = (t.flags & -4097) | 2), (Ne = !1), (wn = t)
        }
    }
}
function Qp(t) {
    for (
        t = t.return;
        t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;

    )
        t = t.return
    wn = t
}
function rs(t) {
    if (t !== wn) return !1
    if (!Ne) return Qp(t), (Ne = !0), !1
    var e
    if (
        ((e = t.tag !== 3) &&
            !(e = t.tag !== 5) &&
            ((e = t.type),
            (e = e !== 'head' && e !== 'body' && !Pf(t.type, t.memoizedProps))),
        e && (e = _n))
    ) {
        if (Mf(t)) throw (Nv(), Error(M(418)))
        for (; e; ) Dv(t, e), (e = ui(e.nextSibling))
    }
    if ((Qp(t), t.tag === 13)) {
        if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
            throw Error(M(317))
        e: {
            for (t = t.nextSibling, e = 0; t; ) {
                if (t.nodeType === 8) {
                    var n = t.data
                    if (n === '/$') {
                        if (e === 0) {
                            _n = ui(t.nextSibling)
                            break e
                        }
                        e--
                    } else (n !== '$' && n !== '$!' && n !== '$?') || e++
                }
                t = t.nextSibling
            }
            _n = null
        }
    } else _n = wn ? ui(t.stateNode.nextSibling) : null
    return !0
}
function Nv() {
    for (var t = _n; t; ) t = ui(t.nextSibling)
}
function Qo() {
    ;(_n = wn = null), (Ne = !1)
}
function ih(t) {
    Kn === null ? (Kn = [t]) : Kn.push(t)
}
var Sw = Vr.ReactCurrentBatchConfig
function yl(t, e, n) {
    if (
        ((t = n.ref),
        t !== null && typeof t != 'function' && typeof t != 'object')
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(M(309))
                var r = n.stateNode
            }
            if (!r) throw Error(M(147, t))
            var i = r,
                o = '' + t
            return e !== null &&
                e.ref !== null &&
                typeof e.ref == 'function' &&
                e.ref._stringRef === o
                ? e.ref
                : ((e = function (l) {
                      var a = i.refs
                      l === null ? delete a[o] : (a[o] = l)
                  }),
                  (e._stringRef = o),
                  e)
        }
        if (typeof t != 'string') throw Error(M(284))
        if (!n._owner) throw Error(M(290, t))
    }
    return t
}
function is(t, e) {
    throw (
        ((t = Object.prototype.toString.call(e)),
        Error(
            M(
                31,
                t === '[object Object]'
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t,
            ),
        ))
    )
}
function Kp(t) {
    var e = t._init
    return e(t._payload)
}
function Mv(t) {
    function e(v, m) {
        if (t) {
            var _ = v.deletions
            _ === null ? ((v.deletions = [m]), (v.flags |= 16)) : _.push(m)
        }
    }
    function n(v, m) {
        if (!t) return null
        for (; m !== null; ) e(v, m), (m = m.sibling)
        return null
    }
    function r(v, m) {
        for (v = new Map(); m !== null; )
            m.key !== null ? v.set(m.key, m) : v.set(m.index, m),
                (m = m.sibling)
        return v
    }
    function i(v, m) {
        return (v = hi(v, m)), (v.index = 0), (v.sibling = null), v
    }
    function o(v, m, _) {
        return (
            (v.index = _),
            t
                ? ((_ = v.alternate),
                  _ !== null
                      ? ((_ = _.index), _ < m ? ((v.flags |= 2), m) : _)
                      : ((v.flags |= 2), m))
                : ((v.flags |= 1048576), m)
        )
    }
    function l(v) {
        return t && v.alternate === null && (v.flags |= 2), v
    }
    function a(v, m, _, y) {
        return m === null || m.tag !== 6
            ? ((m = Lc(_, v.mode, y)), (m.return = v), m)
            : ((m = i(m, _)), (m.return = v), m)
    }
    function s(v, m, _, y) {
        var k = _.type
        return k === yo
            ? c(v, m, _.props.children, y, _.key)
            : m !== null &&
                (m.elementType === k ||
                    (typeof k == 'object' &&
                        k !== null &&
                        k.$$typeof === Gr &&
                        Kp(k) === m.type))
              ? ((y = i(m, _.props)), (y.ref = yl(v, m, _)), (y.return = v), y)
              : ((y = zs(_.type, _.key, _.props, null, v.mode, y)),
                (y.ref = yl(v, m, _)),
                (y.return = v),
                y)
    }
    function u(v, m, _, y) {
        return m === null ||
            m.tag !== 4 ||
            m.stateNode.containerInfo !== _.containerInfo ||
            m.stateNode.implementation !== _.implementation
            ? ((m = Rc(_, v.mode, y)), (m.return = v), m)
            : ((m = i(m, _.children || [])), (m.return = v), m)
    }
    function c(v, m, _, y, k) {
        return m === null || m.tag !== 7
            ? ((m = Vi(_, v.mode, y, k)), (m.return = v), m)
            : ((m = i(m, _)), (m.return = v), m)
    }
    function d(v, m, _) {
        if ((typeof m == 'string' && m !== '') || typeof m == 'number')
            return (m = Lc('' + m, v.mode, _)), (m.return = v), m
        if (typeof m == 'object' && m !== null) {
            switch (m.$$typeof) {
                case Xa:
                    return (
                        (_ = zs(m.type, m.key, m.props, null, v.mode, _)),
                        (_.ref = yl(v, null, m)),
                        (_.return = v),
                        _
                    )
                case _o:
                    return (m = Rc(m, v.mode, _)), (m.return = v), m
                case Gr:
                    var y = m._init
                    return d(v, y(m._payload), _)
            }
            if (Pl(m) || pl(m))
                return (m = Vi(m, v.mode, _, null)), (m.return = v), m
            is(v, m)
        }
        return null
    }
    function f(v, m, _, y) {
        var k = m !== null ? m.key : null
        if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
            return k !== null ? null : a(v, m, '' + _, y)
        if (typeof _ == 'object' && _ !== null) {
            switch (_.$$typeof) {
                case Xa:
                    return _.key === k ? s(v, m, _, y) : null
                case _o:
                    return _.key === k ? u(v, m, _, y) : null
                case Gr:
                    return (k = _._init), f(v, m, k(_._payload), y)
            }
            if (Pl(_) || pl(_)) return k !== null ? null : c(v, m, _, y, null)
            is(v, _)
        }
        return null
    }
    function h(v, m, _, y, k) {
        if ((typeof y == 'string' && y !== '') || typeof y == 'number')
            return (v = v.get(_) || null), a(m, v, '' + y, k)
        if (typeof y == 'object' && y !== null) {
            switch (y.$$typeof) {
                case Xa:
                    return (
                        (v = v.get(y.key === null ? _ : y.key) || null),
                        s(m, v, y, k)
                    )
                case _o:
                    return (
                        (v = v.get(y.key === null ? _ : y.key) || null),
                        u(m, v, y, k)
                    )
                case Gr:
                    var C = y._init
                    return h(v, m, _, C(y._payload), k)
            }
            if (Pl(y) || pl(y))
                return (v = v.get(_) || null), c(m, v, y, k, null)
            is(m, y)
        }
        return null
    }
    function g(v, m, _, y) {
        for (
            var k = null, C = null, S = m, T = (m = 0), D = null;
            S !== null && T < _.length;
            T++
        ) {
            S.index > T ? ((D = S), (S = null)) : (D = S.sibling)
            var P = f(v, S, _[T], y)
            if (P === null) {
                S === null && (S = D)
                break
            }
            t && S && P.alternate === null && e(v, S),
                (m = o(P, m, T)),
                C === null ? (k = P) : (C.sibling = P),
                (C = P),
                (S = D)
        }
        if (T === _.length) return n(v, S), Ne && Ni(v, T), k
        if (S === null) {
            for (; T < _.length; T++)
                (S = d(v, _[T], y)),
                    S !== null &&
                        ((m = o(S, m, T)),
                        C === null ? (k = S) : (C.sibling = S),
                        (C = S))
            return Ne && Ni(v, T), k
        }
        for (S = r(v, S); T < _.length; T++)
            (D = h(S, v, T, _[T], y)),
                D !== null &&
                    (t &&
                        D.alternate !== null &&
                        S.delete(D.key === null ? T : D.key),
                    (m = o(D, m, T)),
                    C === null ? (k = D) : (C.sibling = D),
                    (C = D))
        return (
            t &&
                S.forEach(function (I) {
                    return e(v, I)
                }),
            Ne && Ni(v, T),
            k
        )
    }
    function p(v, m, _, y) {
        var k = pl(_)
        if (typeof k != 'function') throw Error(M(150))
        if (((_ = k.call(_)), _ == null)) throw Error(M(151))
        for (
            var C = (k = null), S = m, T = (m = 0), D = null, P = _.next();
            S !== null && !P.done;
            T++, P = _.next()
        ) {
            S.index > T ? ((D = S), (S = null)) : (D = S.sibling)
            var I = f(v, S, P.value, y)
            if (I === null) {
                S === null && (S = D)
                break
            }
            t && S && I.alternate === null && e(v, S),
                (m = o(I, m, T)),
                C === null ? (k = I) : (C.sibling = I),
                (C = I),
                (S = D)
        }
        if (P.done) return n(v, S), Ne && Ni(v, T), k
        if (S === null) {
            for (; !P.done; T++, P = _.next())
                (P = d(v, P.value, y)),
                    P !== null &&
                        ((m = o(P, m, T)),
                        C === null ? (k = P) : (C.sibling = P),
                        (C = P))
            return Ne && Ni(v, T), k
        }
        for (S = r(v, S); !P.done; T++, P = _.next())
            (P = h(S, v, T, P.value, y)),
                P !== null &&
                    (t &&
                        P.alternate !== null &&
                        S.delete(P.key === null ? T : P.key),
                    (m = o(P, m, T)),
                    C === null ? (k = P) : (C.sibling = P),
                    (C = P))
        return (
            t &&
                S.forEach(function (L) {
                    return e(v, L)
                }),
            Ne && Ni(v, T),
            k
        )
    }
    function x(v, m, _, y) {
        if (
            (typeof _ == 'object' &&
                _ !== null &&
                _.type === yo &&
                _.key === null &&
                (_ = _.props.children),
            typeof _ == 'object' && _ !== null)
        ) {
            switch (_.$$typeof) {
                case Xa:
                    e: {
                        for (var k = _.key, C = m; C !== null; ) {
                            if (C.key === k) {
                                if (((k = _.type), k === yo)) {
                                    if (C.tag === 7) {
                                        n(v, C.sibling),
                                            (m = i(C, _.props.children)),
                                            (m.return = v),
                                            (v = m)
                                        break e
                                    }
                                } else if (
                                    C.elementType === k ||
                                    (typeof k == 'object' &&
                                        k !== null &&
                                        k.$$typeof === Gr &&
                                        Kp(k) === C.type)
                                ) {
                                    n(v, C.sibling),
                                        (m = i(C, _.props)),
                                        (m.ref = yl(v, C, _)),
                                        (m.return = v),
                                        (v = m)
                                    break e
                                }
                                n(v, C)
                                break
                            } else e(v, C)
                            C = C.sibling
                        }
                        _.type === yo
                            ? ((m = Vi(_.props.children, v.mode, y, _.key)),
                              (m.return = v),
                              (v = m))
                            : ((y = zs(
                                  _.type,
                                  _.key,
                                  _.props,
                                  null,
                                  v.mode,
                                  y,
                              )),
                              (y.ref = yl(v, m, _)),
                              (y.return = v),
                              (v = y))
                    }
                    return l(v)
                case _o:
                    e: {
                        for (C = _.key; m !== null; ) {
                            if (m.key === C)
                                if (
                                    m.tag === 4 &&
                                    m.stateNode.containerInfo ===
                                        _.containerInfo &&
                                    m.stateNode.implementation ===
                                        _.implementation
                                ) {
                                    n(v, m.sibling),
                                        (m = i(m, _.children || [])),
                                        (m.return = v),
                                        (v = m)
                                    break e
                                } else {
                                    n(v, m)
                                    break
                                }
                            else e(v, m)
                            m = m.sibling
                        }
                        ;(m = Rc(_, v.mode, y)), (m.return = v), (v = m)
                    }
                    return l(v)
                case Gr:
                    return (C = _._init), x(v, m, C(_._payload), y)
            }
            if (Pl(_)) return g(v, m, _, y)
            if (pl(_)) return p(v, m, _, y)
            is(v, _)
        }
        return (typeof _ == 'string' && _ !== '') || typeof _ == 'number'
            ? ((_ = '' + _),
              m !== null && m.tag === 6
                  ? (n(v, m.sibling), (m = i(m, _)), (m.return = v), (v = m))
                  : (n(v, m), (m = Lc(_, v.mode, y)), (m.return = v), (v = m)),
              l(v))
            : n(v, m)
    }
    return x
}
var Ko = Mv(!0),
    Lv = Mv(!1),
    au = ki(null),
    su = null,
    Po = null,
    oh = null
function lh() {
    oh = Po = su = null
}
function ah(t) {
    var e = au.current
    De(au), (t._currentValue = e)
}
function Rf(t, e, n) {
    for (; t !== null; ) {
        var r = t.alternate
        if (
            ((t.childLanes & e) !== e
                ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
                : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
            t === n)
        )
            break
        t = t.return
    }
}
function bo(t, e) {
    ;(su = t),
        (oh = Po = null),
        (t = t.dependencies),
        t !== null &&
            t.firstContext !== null &&
            (t.lanes & e && (en = !0), (t.firstContext = null))
}
function bn(t) {
    var e = t._currentValue
    if (oh !== t)
        if (((t = { context: t, memoizedValue: e, next: null }), Po === null)) {
            if (su === null) throw Error(M(308))
            ;(Po = t), (su.dependencies = { lanes: 0, firstContext: t })
        } else Po = Po.next = t
    return e
}
var zi = null
function sh(t) {
    zi === null ? (zi = [t]) : zi.push(t)
}
function Rv(t, e, n, r) {
    var i = e.interleaved
    return (
        i === null ? ((n.next = n), sh(e)) : ((n.next = i.next), (i.next = n)),
        (e.interleaved = n),
        Ir(t, r)
    )
}
function Ir(t, e) {
    t.lanes |= e
    var n = t.alternate
    for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
        (t.childLanes |= e),
            (n = t.alternate),
            n !== null && (n.childLanes |= e),
            (n = t),
            (t = t.return)
    return n.tag === 3 ? n.stateNode : null
}
var Qr = !1
function uh(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    }
}
function jv(t, e) {
    ;(t = t.updateQueue),
        e.updateQueue === t &&
            (e.updateQueue = {
                baseState: t.baseState,
                firstBaseUpdate: t.firstBaseUpdate,
                lastBaseUpdate: t.lastBaseUpdate,
                shared: t.shared,
                effects: t.effects,
            })
}
function Rr(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    }
}
function ci(t, e, n) {
    var r = t.updateQueue
    if (r === null) return null
    if (((r = r.shared), de & 2)) {
        var i = r.pending
        return (
            i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
            (r.pending = e),
            Ir(t, n)
        )
    }
    return (
        (i = r.interleaved),
        i === null ? ((e.next = e), sh(r)) : ((e.next = i.next), (i.next = e)),
        (r.interleaved = e),
        Ir(t, n)
    )
}
function Ns(t, e, n) {
    if (
        ((e = e.updateQueue),
        e !== null && ((e = e.shared), (n & 4194240) !== 0))
    ) {
        var r = e.lanes
        ;(r &= t.pendingLanes), (n |= r), (e.lanes = n), Gd(t, n)
    }
}
function Zp(t, e) {
    var n = t.updateQueue,
        r = t.alternate
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
            o = null
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                }
                o === null ? (i = o = l) : (o = o.next = l), (n = n.next)
            } while (n !== null)
            o === null ? (i = o = e) : (o = o.next = e)
        } else i = o = e
        ;(n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects,
        }),
            (t.updateQueue = n)
        return
    }
    ;(t = n.lastBaseUpdate),
        t === null ? (n.firstBaseUpdate = e) : (t.next = e),
        (n.lastBaseUpdate = e)
}
function uu(t, e, n, r) {
    var i = t.updateQueue
    Qr = !1
    var o = i.firstBaseUpdate,
        l = i.lastBaseUpdate,
        a = i.shared.pending
    if (a !== null) {
        i.shared.pending = null
        var s = a,
            u = s.next
        ;(s.next = null), l === null ? (o = u) : (l.next = u), (l = s)
        var c = t.alternate
        c !== null &&
            ((c = c.updateQueue),
            (a = c.lastBaseUpdate),
            a !== l &&
                (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
                (c.lastBaseUpdate = s)))
    }
    if (o !== null) {
        var d = i.baseState
        ;(l = 0), (c = u = s = null), (a = o)
        do {
            var f = a.lane,
                h = a.eventTime
            if ((r & f) === f) {
                c !== null &&
                    (c = c.next =
                        {
                            eventTime: h,
                            lane: 0,
                            tag: a.tag,
                            payload: a.payload,
                            callback: a.callback,
                            next: null,
                        })
                e: {
                    var g = t,
                        p = a
                    switch (((f = e), (h = n), p.tag)) {
                        case 1:
                            if (((g = p.payload), typeof g == 'function')) {
                                d = g.call(h, d, f)
                                break e
                            }
                            d = g
                            break e
                        case 3:
                            g.flags = (g.flags & -65537) | 128
                        case 0:
                            if (
                                ((g = p.payload),
                                (f =
                                    typeof g == 'function'
                                        ? g.call(h, d, f)
                                        : g),
                                f == null)
                            )
                                break e
                            d = Ve({}, d, f)
                            break e
                        case 2:
                            Qr = !0
                    }
                }
                a.callback !== null &&
                    a.lane !== 0 &&
                    ((t.flags |= 64),
                    (f = i.effects),
                    f === null ? (i.effects = [a]) : f.push(a))
            } else
                (h = {
                    eventTime: h,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null,
                }),
                    c === null ? ((u = c = h), (s = d)) : (c = c.next = h),
                    (l |= f)
            if (((a = a.next), a === null)) {
                if (((a = i.shared.pending), a === null)) break
                ;(f = a),
                    (a = f.next),
                    (f.next = null),
                    (i.lastBaseUpdate = f),
                    (i.shared.pending = null)
            }
        } while (!0)
        if (
            (c === null && (s = d),
            (i.baseState = s),
            (i.firstBaseUpdate = u),
            (i.lastBaseUpdate = c),
            (e = i.shared.interleaved),
            e !== null)
        ) {
            i = e
            do (l |= i.lane), (i = i.next)
            while (i !== e)
        } else o === null && (i.shared.lanes = 0)
        ;(Ji |= l), (t.lanes = l), (t.memoizedState = d)
    }
}
function qp(t, e, n) {
    if (((t = e.effects), (e.effects = null), t !== null))
        for (e = 0; e < t.length; e++) {
            var r = t[e],
                i = r.callback
            if (i !== null) {
                if (((r.callback = null), (r = n), typeof i != 'function'))
                    throw Error(M(191, i))
                i.call(r)
            }
        }
}
var Ia = {},
    _r = ki(Ia),
    va = ki(Ia),
    ga = ki(Ia)
function Ii(t) {
    if (t === Ia) throw Error(M(174))
    return t
}
function ch(t, e) {
    switch ((ke(ga, e), ke(va, t), ke(_r, Ia), (t = e.nodeType), t)) {
        case 9:
        case 11:
            e = (e = e.documentElement) ? e.namespaceURI : hf(null, '')
            break
        default:
            ;(t = t === 8 ? e.parentNode : e),
                (e = t.namespaceURI || null),
                (t = t.tagName),
                (e = hf(e, t))
    }
    De(_r), ke(_r, e)
}
function Zo() {
    De(_r), De(va), De(ga)
}
function Av(t) {
    Ii(ga.current)
    var e = Ii(_r.current),
        n = hf(e, t.type)
    e !== n && (ke(va, t), ke(_r, n))
}
function fh(t) {
    va.current === t && (De(_r), De(va))
}
var Ie = ki(0)
function cu(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var n = e.memoizedState
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === '$?' || n.data === '$!')
            )
                return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128) return e
        } else if (e.child !== null) {
            ;(e.child.return = e), (e = e.child)
            continue
        }
        if (e === t) break
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return null
            e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
    }
    return null
}
var Oc = []
function dh() {
    for (var t = 0; t < Oc.length; t++)
        Oc[t]._workInProgressVersionPrimary = null
    Oc.length = 0
}
var Ms = Vr.ReactCurrentDispatcher,
    Pc = Vr.ReactCurrentBatchConfig,
    qi = 0,
    We = null,
    ft = null,
    gt = null,
    fu = !1,
    Bl = !1,
    _a = 0,
    kw = 0
function Nt() {
    throw Error(M(321))
}
function hh(t, e) {
    if (e === null) return !1
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!er(t[n], e[n])) return !1
    return !0
}
function ph(t, e, n, r, i, o) {
    if (
        ((qi = o),
        (We = e),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.lanes = 0),
        (Ms.current = t === null || t.memoizedState === null ? Pw : Ew),
        (t = n(r, i)),
        Bl)
    ) {
        o = 0
        do {
            if (((Bl = !1), (_a = 0), 25 <= o)) throw Error(M(301))
            ;(o += 1),
                (gt = ft = null),
                (e.updateQueue = null),
                (Ms.current = Dw),
                (t = n(r, i))
        } while (Bl)
    }
    if (
        ((Ms.current = du),
        (e = ft !== null && ft.next !== null),
        (qi = 0),
        (gt = ft = We = null),
        (fu = !1),
        e)
    )
        throw Error(M(300))
    return t
}
function mh() {
    var t = _a !== 0
    return (_a = 0), t
}
function cr() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    }
    return gt === null ? (We.memoizedState = gt = t) : (gt = gt.next = t), gt
}
function Wn() {
    if (ft === null) {
        var t = We.alternate
        t = t !== null ? t.memoizedState : null
    } else t = ft.next
    var e = gt === null ? We.memoizedState : gt.next
    if (e !== null) (gt = e), (ft = t)
    else {
        if (t === null) throw Error(M(310))
        ;(ft = t),
            (t = {
                memoizedState: ft.memoizedState,
                baseState: ft.baseState,
                baseQueue: ft.baseQueue,
                queue: ft.queue,
                next: null,
            }),
            gt === null ? (We.memoizedState = gt = t) : (gt = gt.next = t)
    }
    return gt
}
function ya(t, e) {
    return typeof e == 'function' ? e(t) : e
}
function Ec(t) {
    var e = Wn(),
        n = e.queue
    if (n === null) throw Error(M(311))
    n.lastRenderedReducer = t
    var r = ft,
        i = r.baseQueue,
        o = n.pending
    if (o !== null) {
        if (i !== null) {
            var l = i.next
            ;(i.next = o.next), (o.next = l)
        }
        ;(r.baseQueue = i = o), (n.pending = null)
    }
    if (i !== null) {
        ;(o = i.next), (r = r.baseState)
        var a = (l = null),
            s = null,
            u = o
        do {
            var c = u.lane
            if ((qi & c) === c)
                s !== null &&
                    (s = s.next =
                        {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null,
                        }),
                    (r = u.hasEagerState ? u.eagerState : t(r, u.action))
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                }
                s === null ? ((a = s = d), (l = r)) : (s = s.next = d),
                    (We.lanes |= c),
                    (Ji |= c)
            }
            u = u.next
        } while (u !== null && u !== o)
        s === null ? (l = r) : (s.next = a),
            er(r, e.memoizedState) || (en = !0),
            (e.memoizedState = r),
            (e.baseState = l),
            (e.baseQueue = s),
            (n.lastRenderedState = r)
    }
    if (((t = n.interleaved), t !== null)) {
        i = t
        do (o = i.lane), (We.lanes |= o), (Ji |= o), (i = i.next)
        while (i !== t)
    } else i === null && (n.lanes = 0)
    return [e.memoizedState, n.dispatch]
}
function Dc(t) {
    var e = Wn(),
        n = e.queue
    if (n === null) throw Error(M(311))
    n.lastRenderedReducer = t
    var r = n.dispatch,
        i = n.pending,
        o = e.memoizedState
    if (i !== null) {
        n.pending = null
        var l = (i = i.next)
        do (o = t(o, l.action)), (l = l.next)
        while (l !== i)
        er(o, e.memoizedState) || (en = !0),
            (e.memoizedState = o),
            e.baseQueue === null && (e.baseState = o),
            (n.lastRenderedState = o)
    }
    return [o, r]
}
function zv() {}
function Iv(t, e) {
    var n = We,
        r = Wn(),
        i = e(),
        o = !er(r.memoizedState, i)
    if (
        (o && ((r.memoizedState = i), (en = !0)),
        (r = r.queue),
        vh(Wv.bind(null, n, r, t), [t]),
        r.getSnapshot !== e || o || (gt !== null && gt.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            wa(9, bv.bind(null, n, r, i, e), void 0, null),
            yt === null)
        )
            throw Error(M(349))
        qi & 30 || Fv(n, e, i)
    }
    return i
}
function Fv(t, e, n) {
    ;(t.flags |= 16384),
        (t = { getSnapshot: e, value: n }),
        (e = We.updateQueue),
        e === null
            ? ((e = { lastEffect: null, stores: null }),
              (We.updateQueue = e),
              (e.stores = [t]))
            : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t))
}
function bv(t, e, n, r) {
    ;(e.value = n), (e.getSnapshot = r), Vv(e) && $v(t)
}
function Wv(t, e, n) {
    return n(function () {
        Vv(e) && $v(t)
    })
}
function Vv(t) {
    var e = t.getSnapshot
    t = t.value
    try {
        var n = e()
        return !er(t, n)
    } catch {
        return !0
    }
}
function $v(t) {
    var e = Ir(t, 1)
    e !== null && Jn(e, t, 1, -1)
}
function Jp(t) {
    var e = cr()
    return (
        typeof t == 'function' && (t = t()),
        (e.memoizedState = e.baseState = t),
        (t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ya,
            lastRenderedState: t,
        }),
        (e.queue = t),
        (t = t.dispatch = Ow.bind(null, We, t)),
        [e.memoizedState, t]
    )
}
function wa(t, e, n, r) {
    return (
        (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
        (e = We.updateQueue),
        e === null
            ? ((e = { lastEffect: null, stores: null }),
              (We.updateQueue = e),
              (e.lastEffect = t.next = t))
            : ((n = e.lastEffect),
              n === null
                  ? (e.lastEffect = t.next = t)
                  : ((r = n.next),
                    (n.next = t),
                    (t.next = r),
                    (e.lastEffect = t))),
        t
    )
}
function Bv() {
    return Wn().memoizedState
}
function Ls(t, e, n, r) {
    var i = cr()
    ;(We.flags |= t),
        (i.memoizedState = wa(1 | e, n, void 0, r === void 0 ? null : r))
}
function Vu(t, e, n, r) {
    var i = Wn()
    r = r === void 0 ? null : r
    var o = void 0
    if (ft !== null) {
        var l = ft.memoizedState
        if (((o = l.destroy), r !== null && hh(r, l.deps))) {
            i.memoizedState = wa(e, n, o, r)
            return
        }
    }
    ;(We.flags |= t), (i.memoizedState = wa(1 | e, n, o, r))
}
function em(t, e) {
    return Ls(8390656, 8, t, e)
}
function vh(t, e) {
    return Vu(2048, 8, t, e)
}
function Uv(t, e) {
    return Vu(4, 2, t, e)
}
function Yv(t, e) {
    return Vu(4, 4, t, e)
}
function Hv(t, e) {
    if (typeof e == 'function')
        return (
            (t = t()),
            e(t),
            function () {
                e(null)
            }
        )
    if (e != null)
        return (
            (t = t()),
            (e.current = t),
            function () {
                e.current = null
            }
        )
}
function Xv(t, e, n) {
    return (
        (n = n != null ? n.concat([t]) : null), Vu(4, 4, Hv.bind(null, e, t), n)
    )
}
function gh() {}
function Gv(t, e) {
    var n = Wn()
    e = e === void 0 ? null : e
    var r = n.memoizedState
    return r !== null && e !== null && hh(e, r[1])
        ? r[0]
        : ((n.memoizedState = [t, e]), t)
}
function Qv(t, e) {
    var n = Wn()
    e = e === void 0 ? null : e
    var r = n.memoizedState
    return r !== null && e !== null && hh(e, r[1])
        ? r[0]
        : ((t = t()), (n.memoizedState = [t, e]), t)
}
function Kv(t, e, n) {
    return qi & 21
        ? (er(n, e) ||
              ((n = tv()), (We.lanes |= n), (Ji |= n), (t.baseState = !0)),
          e)
        : (t.baseState && ((t.baseState = !1), (en = !0)),
          (t.memoizedState = n))
}
function Cw(t, e) {
    var n = ve
    ;(ve = n !== 0 && 4 > n ? n : 4), t(!0)
    var r = Pc.transition
    Pc.transition = {}
    try {
        t(!1), e()
    } finally {
        ;(ve = n), (Pc.transition = r)
    }
}
function Zv() {
    return Wn().memoizedState
}
function Tw(t, e, n) {
    var r = di(t)
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        qv(t))
    )
        Jv(e, n)
    else if (((n = Rv(t, e, n, r)), n !== null)) {
        var i = Gt()
        Jn(n, t, r, i), eg(n, e, r)
    }
}
function Ow(t, e, n) {
    var r = di(t),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }
    if (qv(t)) Jv(e, i)
    else {
        var o = t.alternate
        if (
            t.lanes === 0 &&
            (o === null || o.lanes === 0) &&
            ((o = e.lastRenderedReducer), o !== null)
        )
            try {
                var l = e.lastRenderedState,
                    a = o(l, n)
                if (((i.hasEagerState = !0), (i.eagerState = a), er(a, l))) {
                    var s = e.interleaved
                    s === null
                        ? ((i.next = i), sh(e))
                        : ((i.next = s.next), (s.next = i)),
                        (e.interleaved = i)
                    return
                }
            } catch {
            } finally {
            }
        ;(n = Rv(t, e, i, r)),
            n !== null && ((i = Gt()), Jn(n, t, r, i), eg(n, e, r))
    }
}
function qv(t) {
    var e = t.alternate
    return t === We || (e !== null && e === We)
}
function Jv(t, e) {
    Bl = fu = !0
    var n = t.pending
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (t.pending = e)
}
function eg(t, e, n) {
    if (n & 4194240) {
        var r = e.lanes
        ;(r &= t.pendingLanes), (n |= r), (e.lanes = n), Gd(t, n)
    }
}
var du = {
        readContext: bn,
        useCallback: Nt,
        useContext: Nt,
        useEffect: Nt,
        useImperativeHandle: Nt,
        useInsertionEffect: Nt,
        useLayoutEffect: Nt,
        useMemo: Nt,
        useReducer: Nt,
        useRef: Nt,
        useState: Nt,
        useDebugValue: Nt,
        useDeferredValue: Nt,
        useTransition: Nt,
        useMutableSource: Nt,
        useSyncExternalStore: Nt,
        useId: Nt,
        unstable_isNewReconciler: !1,
    },
    Pw = {
        readContext: bn,
        useCallback: function (t, e) {
            return (cr().memoizedState = [t, e === void 0 ? null : e]), t
        },
        useContext: bn,
        useEffect: em,
        useImperativeHandle: function (t, e, n) {
            return (
                (n = n != null ? n.concat([t]) : null),
                Ls(4194308, 4, Hv.bind(null, e, t), n)
            )
        },
        useLayoutEffect: function (t, e) {
            return Ls(4194308, 4, t, e)
        },
        useInsertionEffect: function (t, e) {
            return Ls(4, 2, t, e)
        },
        useMemo: function (t, e) {
            var n = cr()
            return (
                (e = e === void 0 ? null : e),
                (t = t()),
                (n.memoizedState = [t, e]),
                t
            )
        },
        useReducer: function (t, e, n) {
            var r = cr()
            return (
                (e = n !== void 0 ? n(e) : e),
                (r.memoizedState = r.baseState = e),
                (t = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: e,
                }),
                (r.queue = t),
                (t = t.dispatch = Tw.bind(null, We, t)),
                [r.memoizedState, t]
            )
        },
        useRef: function (t) {
            var e = cr()
            return (t = { current: t }), (e.memoizedState = t)
        },
        useState: Jp,
        useDebugValue: gh,
        useDeferredValue: function (t) {
            return (cr().memoizedState = t)
        },
        useTransition: function () {
            var t = Jp(!1),
                e = t[0]
            return (t = Cw.bind(null, t[1])), (cr().memoizedState = t), [e, t]
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (t, e, n) {
            var r = We,
                i = cr()
            if (Ne) {
                if (n === void 0) throw Error(M(407))
                n = n()
            } else {
                if (((n = e()), yt === null)) throw Error(M(349))
                qi & 30 || Fv(r, e, n)
            }
            i.memoizedState = n
            var o = { value: n, getSnapshot: e }
            return (
                (i.queue = o),
                em(Wv.bind(null, r, o, t), [t]),
                (r.flags |= 2048),
                wa(9, bv.bind(null, r, o, n, e), void 0, null),
                n
            )
        },
        useId: function () {
            var t = cr(),
                e = yt.identifierPrefix
            if (Ne) {
                var n = Mr,
                    r = Nr
                ;(n = (r & ~(1 << (32 - qn(r) - 1))).toString(32) + n),
                    (e = ':' + e + 'R' + n),
                    (n = _a++),
                    0 < n && (e += 'H' + n.toString(32)),
                    (e += ':')
            } else (n = kw++), (e = ':' + e + 'r' + n.toString(32) + ':')
            return (t.memoizedState = e)
        },
        unstable_isNewReconciler: !1,
    },
    Ew = {
        readContext: bn,
        useCallback: Gv,
        useContext: bn,
        useEffect: vh,
        useImperativeHandle: Xv,
        useInsertionEffect: Uv,
        useLayoutEffect: Yv,
        useMemo: Qv,
        useReducer: Ec,
        useRef: Bv,
        useState: function () {
            return Ec(ya)
        },
        useDebugValue: gh,
        useDeferredValue: function (t) {
            var e = Wn()
            return Kv(e, ft.memoizedState, t)
        },
        useTransition: function () {
            var t = Ec(ya)[0],
                e = Wn().memoizedState
            return [t, e]
        },
        useMutableSource: zv,
        useSyncExternalStore: Iv,
        useId: Zv,
        unstable_isNewReconciler: !1,
    },
    Dw = {
        readContext: bn,
        useCallback: Gv,
        useContext: bn,
        useEffect: vh,
        useImperativeHandle: Xv,
        useInsertionEffect: Uv,
        useLayoutEffect: Yv,
        useMemo: Qv,
        useReducer: Dc,
        useRef: Bv,
        useState: function () {
            return Dc(ya)
        },
        useDebugValue: gh,
        useDeferredValue: function (t) {
            var e = Wn()
            return ft === null
                ? (e.memoizedState = t)
                : Kv(e, ft.memoizedState, t)
        },
        useTransition: function () {
            var t = Dc(ya)[0],
                e = Wn().memoizedState
            return [t, e]
        },
        useMutableSource: zv,
        useSyncExternalStore: Iv,
        useId: Zv,
        unstable_isNewReconciler: !1,
    }
function Gn(t, e) {
    if (t && t.defaultProps) {
        ;(e = Ve({}, e)), (t = t.defaultProps)
        for (var n in t) e[n] === void 0 && (e[n] = t[n])
        return e
    }
    return e
}
function jf(t, e, n, r) {
    ;(e = t.memoizedState),
        (n = n(r, e)),
        (n = n == null ? e : Ve({}, e, n)),
        (t.memoizedState = n),
        t.lanes === 0 && (t.updateQueue.baseState = n)
}
var $u = {
    isMounted: function (t) {
        return (t = t._reactInternals) ? ao(t) === t : !1
    },
    enqueueSetState: function (t, e, n) {
        t = t._reactInternals
        var r = Gt(),
            i = di(t),
            o = Rr(r, i)
        ;(o.payload = e),
            n != null && (o.callback = n),
            (e = ci(t, o, i)),
            e !== null && (Jn(e, t, i, r), Ns(e, t, i))
    },
    enqueueReplaceState: function (t, e, n) {
        t = t._reactInternals
        var r = Gt(),
            i = di(t),
            o = Rr(r, i)
        ;(o.tag = 1),
            (o.payload = e),
            n != null && (o.callback = n),
            (e = ci(t, o, i)),
            e !== null && (Jn(e, t, i, r), Ns(e, t, i))
    },
    enqueueForceUpdate: function (t, e) {
        t = t._reactInternals
        var n = Gt(),
            r = di(t),
            i = Rr(n, r)
        ;(i.tag = 2),
            e != null && (i.callback = e),
            (e = ci(t, i, r)),
            e !== null && (Jn(e, t, r, n), Ns(e, t, r))
    },
}
function tm(t, e, n, r, i, o, l) {
    return (
        (t = t.stateNode),
        typeof t.shouldComponentUpdate == 'function'
            ? t.shouldComponentUpdate(r, o, l)
            : e.prototype && e.prototype.isPureReactComponent
              ? !da(n, r) || !da(i, o)
              : !0
    )
}
function tg(t, e, n) {
    var r = !1,
        i = _i,
        o = e.contextType
    return (
        typeof o == 'object' && o !== null
            ? (o = bn(o))
            : ((i = nn(e) ? Ki : Ft.current),
              (r = e.contextTypes),
              (o = (r = r != null) ? Go(t, i) : _i)),
        (e = new e(n, o)),
        (t.memoizedState =
            e.state !== null && e.state !== void 0 ? e.state : null),
        (e.updater = $u),
        (t.stateNode = e),
        (e._reactInternals = t),
        r &&
            ((t = t.stateNode),
            (t.__reactInternalMemoizedUnmaskedChildContext = i),
            (t.__reactInternalMemoizedMaskedChildContext = o)),
        e
    )
}
function nm(t, e, n, r) {
    ;(t = e.state),
        typeof e.componentWillReceiveProps == 'function' &&
            e.componentWillReceiveProps(n, r),
        typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
            e.UNSAFE_componentWillReceiveProps(n, r),
        e.state !== t && $u.enqueueReplaceState(e, e.state, null)
}
function Af(t, e, n, r) {
    var i = t.stateNode
    ;(i.props = n), (i.state = t.memoizedState), (i.refs = {}), uh(t)
    var o = e.contextType
    typeof o == 'object' && o !== null
        ? (i.context = bn(o))
        : ((o = nn(e) ? Ki : Ft.current), (i.context = Go(t, o))),
        (i.state = t.memoizedState),
        (o = e.getDerivedStateFromProps),
        typeof o == 'function' && (jf(t, e, o, n), (i.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == 'function' ||
            typeof i.getSnapshotBeforeUpdate == 'function' ||
            (typeof i.UNSAFE_componentWillMount != 'function' &&
                typeof i.componentWillMount != 'function') ||
            ((e = i.state),
            typeof i.componentWillMount == 'function' && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == 'function' &&
                i.UNSAFE_componentWillMount(),
            e !== i.state && $u.enqueueReplaceState(i, i.state, null),
            uu(t, n, i, r),
            (i.state = t.memoizedState)),
        typeof i.componentDidMount == 'function' && (t.flags |= 4194308)
}
function qo(t, e) {
    try {
        var n = '',
            r = e
        do (n += r1(r)), (r = r.return)
        while (r)
        var i = n
    } catch (o) {
        i =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack
    }
    return { value: t, source: e, stack: i, digest: null }
}
function Nc(t, e, n) {
    return { value: t, source: null, stack: n ?? null, digest: e ?? null }
}
function zf(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var Nw = typeof WeakMap == 'function' ? WeakMap : Map
function ng(t, e, n) {
    ;(n = Rr(-1, n)), (n.tag = 3), (n.payload = { element: null })
    var r = e.value
    return (
        (n.callback = function () {
            pu || ((pu = !0), (Hf = r)), zf(t, e)
        }),
        n
    )
}
function rg(t, e, n) {
    ;(n = Rr(-1, n)), (n.tag = 3)
    var r = t.type.getDerivedStateFromError
    if (typeof r == 'function') {
        var i = e.value
        ;(n.payload = function () {
            return r(i)
        }),
            (n.callback = function () {
                zf(t, e)
            })
    }
    var o = t.stateNode
    return (
        o !== null &&
            typeof o.componentDidCatch == 'function' &&
            (n.callback = function () {
                zf(t, e),
                    typeof r != 'function' &&
                        (fi === null ? (fi = new Set([this])) : fi.add(this))
                var l = e.stack
                this.componentDidCatch(e.value, {
                    componentStack: l !== null ? l : '',
                })
            }),
        n
    )
}
function rm(t, e, n) {
    var r = t.pingCache
    if (r === null) {
        r = t.pingCache = new Nw()
        var i = new Set()
        r.set(e, i)
    } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i))
    i.has(n) || (i.add(n), (t = Uw.bind(null, t, e, n)), e.then(t, t))
}
function im(t) {
    do {
        var e
        if (
            ((e = t.tag === 13) &&
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated !== null : !0)),
            e)
        )
            return t
        t = t.return
    } while (t !== null)
    return null
}
function om(t, e, n, r, i) {
    return t.mode & 1
        ? ((t.flags |= 65536), (t.lanes = i), t)
        : (t === e
              ? (t.flags |= 65536)
              : ((t.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((e = Rr(-1, 1)), (e.tag = 2), ci(n, e, 1))),
                (n.lanes |= 1)),
          t)
}
var Mw = Vr.ReactCurrentOwner,
    en = !1
function $t(t, e, n, r) {
    e.child = t === null ? Lv(e, null, n, r) : Ko(e, t.child, n, r)
}
function lm(t, e, n, r, i) {
    n = n.render
    var o = e.ref
    return (
        bo(e, i),
        (r = ph(t, e, n, r, o, i)),
        (n = mh()),
        t !== null && !en
            ? ((e.updateQueue = t.updateQueue),
              (e.flags &= -2053),
              (t.lanes &= ~i),
              Fr(t, e, i))
            : (Ne && n && nh(e), (e.flags |= 1), $t(t, e, r, i), e.child)
    )
}
function am(t, e, n, r, i) {
    if (t === null) {
        var o = n.type
        return typeof o == 'function' &&
            !Th(o) &&
            o.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((e.tag = 15), (e.type = o), ig(t, e, o, r, i))
            : ((t = zs(n.type, null, r, e, e.mode, i)),
              (t.ref = e.ref),
              (t.return = e),
              (e.child = t))
    }
    if (((o = t.child), !(t.lanes & i))) {
        var l = o.memoizedProps
        if (
            ((n = n.compare),
            (n = n !== null ? n : da),
            n(l, r) && t.ref === e.ref)
        )
            return Fr(t, e, i)
    }
    return (
        (e.flags |= 1),
        (t = hi(o, r)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t)
    )
}
function ig(t, e, n, r, i) {
    if (t !== null) {
        var o = t.memoizedProps
        if (da(o, r) && t.ref === e.ref)
            if (((en = !1), (e.pendingProps = r = o), (t.lanes & i) !== 0))
                t.flags & 131072 && (en = !0)
            else return (e.lanes = t.lanes), Fr(t, e, i)
    }
    return If(t, e, n, r, i)
}
function og(t, e, n) {
    var r = e.pendingProps,
        i = r.children,
        o = t !== null ? t.memoizedState : null
    if (r.mode === 'hidden')
        if (!(e.mode & 1))
            (e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                ke(Do, hn),
                (hn |= n)
        else {
            if (!(n & 1073741824))
                return (
                    (t = o !== null ? o.baseLanes | n : n),
                    (e.lanes = e.childLanes = 1073741824),
                    (e.memoizedState = {
                        baseLanes: t,
                        cachePool: null,
                        transitions: null,
                    }),
                    (e.updateQueue = null),
                    ke(Do, hn),
                    (hn |= t),
                    null
                )
            ;(e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = o !== null ? o.baseLanes : n),
                ke(Do, hn),
                (hn |= r)
        }
    else
        o !== null
            ? ((r = o.baseLanes | n), (e.memoizedState = null))
            : (r = n),
            ke(Do, hn),
            (hn |= r)
    return $t(t, e, i, n), e.child
}
function lg(t, e) {
    var n = e.ref
    ;((t === null && n !== null) || (t !== null && t.ref !== n)) &&
        ((e.flags |= 512), (e.flags |= 2097152))
}
function If(t, e, n, r, i) {
    var o = nn(n) ? Ki : Ft.current
    return (
        (o = Go(e, o)),
        bo(e, i),
        (n = ph(t, e, n, r, o, i)),
        (r = mh()),
        t !== null && !en
            ? ((e.updateQueue = t.updateQueue),
              (e.flags &= -2053),
              (t.lanes &= ~i),
              Fr(t, e, i))
            : (Ne && r && nh(e), (e.flags |= 1), $t(t, e, n, i), e.child)
    )
}
function sm(t, e, n, r, i) {
    if (nn(n)) {
        var o = !0
        iu(e)
    } else o = !1
    if ((bo(e, i), e.stateNode === null))
        Rs(t, e), tg(e, n, r), Af(e, n, r, i), (r = !0)
    else if (t === null) {
        var l = e.stateNode,
            a = e.memoizedProps
        l.props = a
        var s = l.context,
            u = n.contextType
        typeof u == 'object' && u !== null
            ? (u = bn(u))
            : ((u = nn(n) ? Ki : Ft.current), (u = Go(e, u)))
        var c = n.getDerivedStateFromProps,
            d =
                typeof c == 'function' ||
                typeof l.getSnapshotBeforeUpdate == 'function'
        d ||
            (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof l.componentWillReceiveProps != 'function') ||
            ((a !== r || s !== u) && nm(e, l, r, u)),
            (Qr = !1)
        var f = e.memoizedState
        ;(l.state = f),
            uu(e, r, l, i),
            (s = e.memoizedState),
            a !== r || f !== s || tn.current || Qr
                ? (typeof c == 'function' &&
                      (jf(e, n, c, r), (s = e.memoizedState)),
                  (a = Qr || tm(e, n, a, r, f, s, u))
                      ? (d ||
                            (typeof l.UNSAFE_componentWillMount != 'function' &&
                                typeof l.componentWillMount != 'function') ||
                            (typeof l.componentWillMount == 'function' &&
                                l.componentWillMount(),
                            typeof l.UNSAFE_componentWillMount == 'function' &&
                                l.UNSAFE_componentWillMount()),
                        typeof l.componentDidMount == 'function' &&
                            (e.flags |= 4194308))
                      : (typeof l.componentDidMount == 'function' &&
                            (e.flags |= 4194308),
                        (e.memoizedProps = r),
                        (e.memoizedState = s)),
                  (l.props = r),
                  (l.state = s),
                  (l.context = u),
                  (r = a))
                : (typeof l.componentDidMount == 'function' &&
                      (e.flags |= 4194308),
                  (r = !1))
    } else {
        ;(l = e.stateNode),
            jv(t, e),
            (a = e.memoizedProps),
            (u = e.type === e.elementType ? a : Gn(e.type, a)),
            (l.props = u),
            (d = e.pendingProps),
            (f = l.context),
            (s = n.contextType),
            typeof s == 'object' && s !== null
                ? (s = bn(s))
                : ((s = nn(n) ? Ki : Ft.current), (s = Go(e, s)))
        var h = n.getDerivedStateFromProps
        ;(c =
            typeof h == 'function' ||
            typeof l.getSnapshotBeforeUpdate == 'function') ||
            (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof l.componentWillReceiveProps != 'function') ||
            ((a !== d || f !== s) && nm(e, l, r, s)),
            (Qr = !1),
            (f = e.memoizedState),
            (l.state = f),
            uu(e, r, l, i)
        var g = e.memoizedState
        a !== d || f !== g || tn.current || Qr
            ? (typeof h == 'function' &&
                  (jf(e, n, h, r), (g = e.memoizedState)),
              (u = Qr || tm(e, n, u, r, f, g, s) || !1)
                  ? (c ||
                        (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                            typeof l.componentWillUpdate != 'function') ||
                        (typeof l.componentWillUpdate == 'function' &&
                            l.componentWillUpdate(r, g, s),
                        typeof l.UNSAFE_componentWillUpdate == 'function' &&
                            l.UNSAFE_componentWillUpdate(r, g, s)),
                    typeof l.componentDidUpdate == 'function' && (e.flags |= 4),
                    typeof l.getSnapshotBeforeUpdate == 'function' &&
                        (e.flags |= 1024))
                  : (typeof l.componentDidUpdate != 'function' ||
                        (a === t.memoizedProps && f === t.memoizedState) ||
                        (e.flags |= 4),
                    typeof l.getSnapshotBeforeUpdate != 'function' ||
                        (a === t.memoizedProps && f === t.memoizedState) ||
                        (e.flags |= 1024),
                    (e.memoizedProps = r),
                    (e.memoizedState = g)),
              (l.props = r),
              (l.state = g),
              (l.context = s),
              (r = u))
            : (typeof l.componentDidUpdate != 'function' ||
                  (a === t.memoizedProps && f === t.memoizedState) ||
                  (e.flags |= 4),
              typeof l.getSnapshotBeforeUpdate != 'function' ||
                  (a === t.memoizedProps && f === t.memoizedState) ||
                  (e.flags |= 1024),
              (r = !1))
    }
    return Ff(t, e, n, r, o, i)
}
function Ff(t, e, n, r, i, o) {
    lg(t, e)
    var l = (e.flags & 128) !== 0
    if (!r && !l) return i && Xp(e, n, !1), Fr(t, e, o)
    ;(r = e.stateNode), (Mw.current = e)
    var a =
        l && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
    return (
        (e.flags |= 1),
        t !== null && l
            ? ((e.child = Ko(e, t.child, null, o)),
              (e.child = Ko(e, null, a, o)))
            : $t(t, e, a, o),
        (e.memoizedState = r.state),
        i && Xp(e, n, !0),
        e.child
    )
}
function ag(t) {
    var e = t.stateNode
    e.pendingContext
        ? Hp(t, e.pendingContext, e.pendingContext !== e.context)
        : e.context && Hp(t, e.context, !1),
        ch(t, e.containerInfo)
}
function um(t, e, n, r, i) {
    return Qo(), ih(i), (e.flags |= 256), $t(t, e, n, r), e.child
}
var bf = { dehydrated: null, treeContext: null, retryLane: 0 }
function Wf(t) {
    return { baseLanes: t, cachePool: null, transitions: null }
}
function sg(t, e, n) {
    var r = e.pendingProps,
        i = Ie.current,
        o = !1,
        l = (e.flags & 128) !== 0,
        a
    if (
        ((a = l) ||
            (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
        a
            ? ((o = !0), (e.flags &= -129))
            : (t === null || t.memoizedState !== null) && (i |= 1),
        ke(Ie, i & 1),
        t === null)
    )
        return (
            Lf(e),
            (t = e.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null)
                ? (e.mode & 1
                      ? t.data === '$!'
                          ? (e.lanes = 8)
                          : (e.lanes = 1073741824)
                      : (e.lanes = 1),
                  null)
                : ((l = r.children),
                  (t = r.fallback),
                  o
                      ? ((r = e.mode),
                        (o = e.child),
                        (l = { mode: 'hidden', children: l }),
                        !(r & 1) && o !== null
                            ? ((o.childLanes = 0), (o.pendingProps = l))
                            : (o = Yu(l, r, 0, null)),
                        (t = Vi(t, r, n, null)),
                        (o.return = e),
                        (t.return = e),
                        (o.sibling = t),
                        (e.child = o),
                        (e.child.memoizedState = Wf(n)),
                        (e.memoizedState = bf),
                        t)
                      : _h(e, l))
        )
    if (((i = t.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
        return Lw(t, e, l, r, a, i, n)
    if (o) {
        ;(o = r.fallback), (l = e.mode), (i = t.child), (a = i.sibling)
        var s = { mode: 'hidden', children: r.children }
        return (
            !(l & 1) && e.child !== i
                ? ((r = e.child),
                  (r.childLanes = 0),
                  (r.pendingProps = s),
                  (e.deletions = null))
                : ((r = hi(i, s)),
                  (r.subtreeFlags = i.subtreeFlags & 14680064)),
            a !== null
                ? (o = hi(a, o))
                : ((o = Vi(o, l, n, null)), (o.flags |= 2)),
            (o.return = e),
            (r.return = e),
            (r.sibling = o),
            (e.child = r),
            (r = o),
            (o = e.child),
            (l = t.child.memoizedState),
            (l =
                l === null
                    ? Wf(n)
                    : {
                          baseLanes: l.baseLanes | n,
                          cachePool: null,
                          transitions: l.transitions,
                      }),
            (o.memoizedState = l),
            (o.childLanes = t.childLanes & ~n),
            (e.memoizedState = bf),
            r
        )
    }
    return (
        (o = t.child),
        (t = o.sibling),
        (r = hi(o, { mode: 'visible', children: r.children })),
        !(e.mode & 1) && (r.lanes = n),
        (r.return = e),
        (r.sibling = null),
        t !== null &&
            ((n = e.deletions),
            n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
        (e.child = r),
        (e.memoizedState = null),
        r
    )
}
function _h(t, e) {
    return (
        (e = Yu({ mode: 'visible', children: e }, t.mode, 0, null)),
        (e.return = t),
        (t.child = e)
    )
}
function os(t, e, n, r) {
    return (
        r !== null && ih(r),
        Ko(e, t.child, null, n),
        (t = _h(e, e.pendingProps.children)),
        (t.flags |= 2),
        (e.memoizedState = null),
        t
    )
}
function Lw(t, e, n, r, i, o, l) {
    if (n)
        return e.flags & 256
            ? ((e.flags &= -257), (r = Nc(Error(M(422)))), os(t, e, l, r))
            : e.memoizedState !== null
              ? ((e.child = t.child), (e.flags |= 128), null)
              : ((o = r.fallback),
                (i = e.mode),
                (r = Yu({ mode: 'visible', children: r.children }, i, 0, null)),
                (o = Vi(o, i, l, null)),
                (o.flags |= 2),
                (r.return = e),
                (o.return = e),
                (r.sibling = o),
                (e.child = r),
                e.mode & 1 && Ko(e, t.child, null, l),
                (e.child.memoizedState = Wf(l)),
                (e.memoizedState = bf),
                o)
    if (!(e.mode & 1)) return os(t, e, l, null)
    if (i.data === '$!') {
        if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst
        return (
            (r = a), (o = Error(M(419))), (r = Nc(o, r, void 0)), os(t, e, l, r)
        )
    }
    if (((a = (l & t.childLanes) !== 0), en || a)) {
        if (((r = yt), r !== null)) {
            switch (l & -l) {
                case 4:
                    i = 2
                    break
                case 16:
                    i = 8
                    break
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32
                    break
                case 536870912:
                    i = 268435456
                    break
                default:
                    i = 0
            }
            ;(i = i & (r.suspendedLanes | l) ? 0 : i),
                i !== 0 &&
                    i !== o.retryLane &&
                    ((o.retryLane = i), Ir(t, i), Jn(r, t, i, -1))
        }
        return Ch(), (r = Nc(Error(M(421)))), os(t, e, l, r)
    }
    return i.data === '$?'
        ? ((e.flags |= 128),
          (e.child = t.child),
          (e = Yw.bind(null, t)),
          (i._reactRetry = e),
          null)
        : ((t = o.treeContext),
          (_n = ui(i.nextSibling)),
          (wn = e),
          (Ne = !0),
          (Kn = null),
          t !== null &&
              ((Nn[Mn++] = Nr),
              (Nn[Mn++] = Mr),
              (Nn[Mn++] = Zi),
              (Nr = t.id),
              (Mr = t.overflow),
              (Zi = e)),
          (e = _h(e, r.children)),
          (e.flags |= 4096),
          e)
}
function cm(t, e, n) {
    t.lanes |= e
    var r = t.alternate
    r !== null && (r.lanes |= e), Rf(t.return, e, n)
}
function Mc(t, e, n, r, i) {
    var o = t.memoizedState
    o === null
        ? (t.memoizedState = {
              isBackwards: e,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: i,
          })
        : ((o.isBackwards = e),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i))
}
function ug(t, e, n) {
    var r = e.pendingProps,
        i = r.revealOrder,
        o = r.tail
    if (($t(t, e, r.children, n), (r = Ie.current), r & 2))
        (r = (r & 1) | 2), (e.flags |= 128)
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null; ) {
                if (t.tag === 13) t.memoizedState !== null && cm(t, n, e)
                else if (t.tag === 19) cm(t, n, e)
                else if (t.child !== null) {
                    ;(t.child.return = t), (t = t.child)
                    continue
                }
                if (t === e) break e
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e) break e
                    t = t.return
                }
                ;(t.sibling.return = t.return), (t = t.sibling)
            }
        r &= 1
    }
    if ((ke(Ie, r), !(e.mode & 1))) e.memoizedState = null
    else
        switch (i) {
            case 'forwards':
                for (n = e.child, i = null; n !== null; )
                    (t = n.alternate),
                        t !== null && cu(t) === null && (i = n),
                        (n = n.sibling)
                ;(n = i),
                    n === null
                        ? ((i = e.child), (e.child = null))
                        : ((i = n.sibling), (n.sibling = null)),
                    Mc(e, !1, i, n, o)
                break
            case 'backwards':
                for (n = null, i = e.child, e.child = null; i !== null; ) {
                    if (((t = i.alternate), t !== null && cu(t) === null)) {
                        e.child = i
                        break
                    }
                    ;(t = i.sibling), (i.sibling = n), (n = i), (i = t)
                }
                Mc(e, !0, n, null, o)
                break
            case 'together':
                Mc(e, !1, null, null, void 0)
                break
            default:
                e.memoizedState = null
        }
    return e.child
}
function Rs(t, e) {
    !(e.mode & 1) &&
        t !== null &&
        ((t.alternate = null), (e.alternate = null), (e.flags |= 2))
}
function Fr(t, e, n) {
    if (
        (t !== null && (e.dependencies = t.dependencies),
        (Ji |= e.lanes),
        !(n & e.childLanes))
    )
        return null
    if (t !== null && e.child !== t.child) throw Error(M(153))
    if (e.child !== null) {
        for (
            t = e.child, n = hi(t, t.pendingProps), e.child = n, n.return = e;
            t.sibling !== null;

        )
            (t = t.sibling),
                (n = n.sibling = hi(t, t.pendingProps)),
                (n.return = e)
        n.sibling = null
    }
    return e.child
}
function Rw(t, e, n) {
    switch (e.tag) {
        case 3:
            ag(e), Qo()
            break
        case 5:
            Av(e)
            break
        case 1:
            nn(e.type) && iu(e)
            break
        case 4:
            ch(e, e.stateNode.containerInfo)
            break
        case 10:
            var r = e.type._context,
                i = e.memoizedProps.value
            ke(au, r._currentValue), (r._currentValue = i)
            break
        case 13:
            if (((r = e.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (ke(Ie, Ie.current & 1), (e.flags |= 128), null)
                    : n & e.child.childLanes
                      ? sg(t, e, n)
                      : (ke(Ie, Ie.current & 1),
                        (t = Fr(t, e, n)),
                        t !== null ? t.sibling : null)
            ke(Ie, Ie.current & 1)
            break
        case 19:
            if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
                if (r) return ug(t, e, n)
                e.flags |= 128
            }
            if (
                ((i = e.memoizedState),
                i !== null &&
                    ((i.rendering = null),
                    (i.tail = null),
                    (i.lastEffect = null)),
                ke(Ie, Ie.current),
                r)
            )
                break
            return null
        case 22:
        case 23:
            return (e.lanes = 0), og(t, e, n)
    }
    return Fr(t, e, n)
}
var cg, Vf, fg, dg
cg = function (t, e) {
    for (var n = e.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode)
        else if (n.tag !== 4 && n.child !== null) {
            ;(n.child.return = n), (n = n.child)
            continue
        }
        if (n === e) break
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e) return
            n = n.return
        }
        ;(n.sibling.return = n.return), (n = n.sibling)
    }
}
Vf = function () {}
fg = function (t, e, n, r) {
    var i = t.memoizedProps
    if (i !== r) {
        ;(t = e.stateNode), Ii(_r.current)
        var o = null
        switch (n) {
            case 'input':
                ;(i = uf(t, i)), (r = uf(t, r)), (o = [])
                break
            case 'select':
                ;(i = Ve({}, i, { value: void 0 })),
                    (r = Ve({}, r, { value: void 0 })),
                    (o = [])
                break
            case 'textarea':
                ;(i = df(t, i)), (r = df(t, r)), (o = [])
                break
            default:
                typeof i.onClick != 'function' &&
                    typeof r.onClick == 'function' &&
                    (t.onclick = nu)
        }
        pf(n, r)
        var l
        n = null
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === 'style') {
                    var a = i[u]
                    for (l in a)
                        a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''))
                } else
                    u !== 'dangerouslySetInnerHTML' &&
                        u !== 'children' &&
                        u !== 'suppressContentEditableWarning' &&
                        u !== 'suppressHydrationWarning' &&
                        u !== 'autoFocus' &&
                        (oa.hasOwnProperty(u)
                            ? o || (o = [])
                            : (o = o || []).push(u, null))
        for (u in r) {
            var s = r[u]
            if (
                ((a = i != null ? i[u] : void 0),
                r.hasOwnProperty(u) && s !== a && (s != null || a != null))
            )
                if (u === 'style')
                    if (a) {
                        for (l in a)
                            !a.hasOwnProperty(l) ||
                                (s && s.hasOwnProperty(l)) ||
                                (n || (n = {}), (n[l] = ''))
                        for (l in s)
                            s.hasOwnProperty(l) &&
                                a[l] !== s[l] &&
                                (n || (n = {}), (n[l] = s[l]))
                    } else n || (o || (o = []), o.push(u, n)), (n = s)
                else
                    u === 'dangerouslySetInnerHTML'
                        ? ((s = s ? s.__html : void 0),
                          (a = a ? a.__html : void 0),
                          s != null && a !== s && (o = o || []).push(u, s))
                        : u === 'children'
                          ? (typeof s != 'string' && typeof s != 'number') ||
                            (o = o || []).push(u, '' + s)
                          : u !== 'suppressContentEditableWarning' &&
                            u !== 'suppressHydrationWarning' &&
                            (oa.hasOwnProperty(u)
                                ? (s != null &&
                                      u === 'onScroll' &&
                                      Pe('scroll', t),
                                  o || a === s || (o = []))
                                : (o = o || []).push(u, s))
        }
        n && (o = o || []).push('style', n)
        var u = o
        ;(e.updateQueue = u) && (e.flags |= 4)
    }
}
dg = function (t, e, n, r) {
    n !== r && (e.flags |= 4)
}
function wl(t, e) {
    if (!Ne)
        switch (t.tailMode) {
            case 'hidden':
                e = t.tail
                for (var n = null; e !== null; )
                    e.alternate !== null && (n = e), (e = e.sibling)
                n === null ? (t.tail = null) : (n.sibling = null)
                break
            case 'collapsed':
                n = t.tail
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling)
                r === null
                    ? e || t.tail === null
                        ? (t.tail = null)
                        : (t.tail.sibling = null)
                    : (r.sibling = null)
        }
}
function Mt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
        n = 0,
        r = 0
    if (e)
        for (var i = t.child; i !== null; )
            (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags & 14680064),
                (r |= i.flags & 14680064),
                (i.return = t),
                (i = i.sibling)
    else
        for (i = t.child; i !== null; )
            (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = t),
                (i = i.sibling)
    return (t.subtreeFlags |= r), (t.childLanes = n), e
}
function jw(t, e, n) {
    var r = e.pendingProps
    switch ((rh(e), e.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Mt(e), null
        case 1:
            return nn(e.type) && ru(), Mt(e), null
        case 3:
            return (
                (r = e.stateNode),
                Zo(),
                De(tn),
                De(Ft),
                dh(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (t === null || t.child === null) &&
                    (rs(e)
                        ? (e.flags |= 4)
                        : t === null ||
                          (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
                          ((e.flags |= 1024),
                          Kn !== null && (Qf(Kn), (Kn = null)))),
                Vf(t, e),
                Mt(e),
                null
            )
        case 5:
            fh(e)
            var i = Ii(ga.current)
            if (((n = e.type), t !== null && e.stateNode != null))
                fg(t, e, n, r, i),
                    t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152))
            else {
                if (!r) {
                    if (e.stateNode === null) throw Error(M(166))
                    return Mt(e), null
                }
                if (((t = Ii(_r.current)), rs(e))) {
                    ;(r = e.stateNode), (n = e.type)
                    var o = e.memoizedProps
                    switch (
                        ((r[hr] = e), (r[ma] = o), (t = (e.mode & 1) !== 0), n)
                    ) {
                        case 'dialog':
                            Pe('cancel', r), Pe('close', r)
                            break
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            Pe('load', r)
                            break
                        case 'video':
                        case 'audio':
                            for (i = 0; i < Dl.length; i++) Pe(Dl[i], r)
                            break
                        case 'source':
                            Pe('error', r)
                            break
                        case 'img':
                        case 'image':
                        case 'link':
                            Pe('error', r), Pe('load', r)
                            break
                        case 'details':
                            Pe('toggle', r)
                            break
                        case 'input':
                            yp(r, o), Pe('invalid', r)
                            break
                        case 'select':
                            ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                                Pe('invalid', r)
                            break
                        case 'textarea':
                            xp(r, o), Pe('invalid', r)
                    }
                    pf(n, o), (i = null)
                    for (var l in o)
                        if (o.hasOwnProperty(l)) {
                            var a = o[l]
                            l === 'children'
                                ? typeof a == 'string'
                                    ? r.textContent !== a &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          ns(r.textContent, a, t),
                                      (i = ['children', a]))
                                    : typeof a == 'number' &&
                                      r.textContent !== '' + a &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          ns(r.textContent, a, t),
                                      (i = ['children', '' + a]))
                                : oa.hasOwnProperty(l) &&
                                  a != null &&
                                  l === 'onScroll' &&
                                  Pe('scroll', r)
                        }
                    switch (n) {
                        case 'input':
                            Ga(r), wp(r, o, !0)
                            break
                        case 'textarea':
                            Ga(r), Sp(r)
                            break
                        case 'select':
                        case 'option':
                            break
                        default:
                            typeof o.onClick == 'function' && (r.onclick = nu)
                    }
                    ;(r = i), (e.updateQueue = r), r !== null && (e.flags |= 4)
                } else {
                    ;(l = i.nodeType === 9 ? i : i.ownerDocument),
                        t === 'http://www.w3.org/1999/xhtml' && (t = W0(n)),
                        t === 'http://www.w3.org/1999/xhtml'
                            ? n === 'script'
                                ? ((t = l.createElement('div')),
                                  (t.innerHTML = '<script></script>'),
                                  (t = t.removeChild(t.firstChild)))
                                : typeof r.is == 'string'
                                  ? (t = l.createElement(n, { is: r.is }))
                                  : ((t = l.createElement(n)),
                                    n === 'select' &&
                                        ((l = t),
                                        r.multiple
                                            ? (l.multiple = !0)
                                            : r.size && (l.size = r.size)))
                            : (t = l.createElementNS(t, n)),
                        (t[hr] = e),
                        (t[ma] = r),
                        cg(t, e, !1, !1),
                        (e.stateNode = t)
                    e: {
                        switch (((l = mf(n, r)), n)) {
                            case 'dialog':
                                Pe('cancel', t), Pe('close', t), (i = r)
                                break
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                Pe('load', t), (i = r)
                                break
                            case 'video':
                            case 'audio':
                                for (i = 0; i < Dl.length; i++) Pe(Dl[i], t)
                                i = r
                                break
                            case 'source':
                                Pe('error', t), (i = r)
                                break
                            case 'img':
                            case 'image':
                            case 'link':
                                Pe('error', t), Pe('load', t), (i = r)
                                break
                            case 'details':
                                Pe('toggle', t), (i = r)
                                break
                            case 'input':
                                yp(t, r), (i = uf(t, r)), Pe('invalid', t)
                                break
                            case 'option':
                                i = r
                                break
                            case 'select':
                                ;(t._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (i = Ve({}, r, { value: void 0 })),
                                    Pe('invalid', t)
                                break
                            case 'textarea':
                                xp(t, r), (i = df(t, r)), Pe('invalid', t)
                                break
                            default:
                                i = r
                        }
                        pf(n, i), (a = i)
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var s = a[o]
                                o === 'style'
                                    ? B0(t, s)
                                    : o === 'dangerouslySetInnerHTML'
                                      ? ((s = s ? s.__html : void 0),
                                        s != null && V0(t, s))
                                      : o === 'children'
                                        ? typeof s == 'string'
                                            ? (n !== 'textarea' || s !== '') &&
                                              la(t, s)
                                            : typeof s == 'number' &&
                                              la(t, '' + s)
                                        : o !==
                                              'suppressContentEditableWarning' &&
                                          o !== 'suppressHydrationWarning' &&
                                          o !== 'autoFocus' &&
                                          (oa.hasOwnProperty(o)
                                              ? s != null &&
                                                o === 'onScroll' &&
                                                Pe('scroll', t)
                                              : s != null && $d(t, o, s, l))
                            }
                        switch (n) {
                            case 'input':
                                Ga(t), wp(t, r, !1)
                                break
                            case 'textarea':
                                Ga(t), Sp(t)
                                break
                            case 'option':
                                r.value != null &&
                                    t.setAttribute('value', '' + gi(r.value))
                                break
                            case 'select':
                                ;(t.multiple = !!r.multiple),
                                    (o = r.value),
                                    o != null
                                        ? Ao(t, !!r.multiple, o, !1)
                                        : r.defaultValue != null &&
                                          Ao(
                                              t,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0,
                                          )
                                break
                            default:
                                typeof i.onClick == 'function' &&
                                    (t.onclick = nu)
                        }
                        switch (n) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                r = !!r.autoFocus
                                break e
                            case 'img':
                                r = !0
                                break e
                            default:
                                r = !1
                        }
                    }
                    r && (e.flags |= 4)
                }
                e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152))
            }
            return Mt(e), null
        case 6:
            if (t && e.stateNode != null) dg(t, e, t.memoizedProps, r)
            else {
                if (typeof r != 'string' && e.stateNode === null)
                    throw Error(M(166))
                if (((n = Ii(ga.current)), Ii(_r.current), rs(e))) {
                    if (
                        ((r = e.stateNode),
                        (n = e.memoizedProps),
                        (r[hr] = e),
                        (o = r.nodeValue !== n) && ((t = wn), t !== null))
                    )
                        switch (t.tag) {
                            case 3:
                                ns(r.nodeValue, n, (t.mode & 1) !== 0)
                                break
                            case 5:
                                t.memoizedProps.suppressHydrationWarning !==
                                    !0 && ns(r.nodeValue, n, (t.mode & 1) !== 0)
                        }
                    o && (e.flags |= 4)
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[hr] = e),
                        (e.stateNode = r)
            }
            return Mt(e), null
        case 13:
            if (
                (De(Ie),
                (r = e.memoizedState),
                t === null ||
                    (t.memoizedState !== null &&
                        t.memoizedState.dehydrated !== null))
            ) {
                if (Ne && _n !== null && e.mode & 1 && !(e.flags & 128))
                    Nv(), Qo(), (e.flags |= 98560), (o = !1)
                else if (((o = rs(e)), r !== null && r.dehydrated !== null)) {
                    if (t === null) {
                        if (!o) throw Error(M(318))
                        if (
                            ((o = e.memoizedState),
                            (o = o !== null ? o.dehydrated : null),
                            !o)
                        )
                            throw Error(M(317))
                        o[hr] = e
                    } else
                        Qo(),
                            !(e.flags & 128) && (e.memoizedState = null),
                            (e.flags |= 4)
                    Mt(e), (o = !1)
                } else Kn !== null && (Qf(Kn), (Kn = null)), (o = !0)
                if (!o) return e.flags & 65536 ? e : null
            }
            return e.flags & 128
                ? ((e.lanes = n), e)
                : ((r = r !== null),
                  r !== (t !== null && t.memoizedState !== null) &&
                      r &&
                      ((e.child.flags |= 8192),
                      e.mode & 1 &&
                          (t === null || Ie.current & 1
                              ? ht === 0 && (ht = 3)
                              : Ch())),
                  e.updateQueue !== null && (e.flags |= 4),
                  Mt(e),
                  null)
        case 4:
            return (
                Zo(),
                Vf(t, e),
                t === null && ha(e.stateNode.containerInfo),
                Mt(e),
                null
            )
        case 10:
            return ah(e.type._context), Mt(e), null
        case 17:
            return nn(e.type) && ru(), Mt(e), null
        case 19:
            if ((De(Ie), (o = e.memoizedState), o === null)) return Mt(e), null
            if (((r = (e.flags & 128) !== 0), (l = o.rendering), l === null))
                if (r) wl(o, !1)
                else {
                    if (ht !== 0 || (t !== null && t.flags & 128))
                        for (t = e.child; t !== null; ) {
                            if (((l = cu(t)), l !== null)) {
                                for (
                                    e.flags |= 128,
                                        wl(o, !1),
                                        r = l.updateQueue,
                                        r !== null &&
                                            ((e.updateQueue = r),
                                            (e.flags |= 4)),
                                        e.subtreeFlags = 0,
                                        r = n,
                                        n = e.child;
                                    n !== null;

                                )
                                    (o = n),
                                        (t = r),
                                        (o.flags &= 14680066),
                                        (l = o.alternate),
                                        l === null
                                            ? ((o.childLanes = 0),
                                              (o.lanes = t),
                                              (o.child = null),
                                              (o.subtreeFlags = 0),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = l.childLanes),
                                              (o.lanes = l.lanes),
                                              (o.child = l.child),
                                              (o.subtreeFlags = 0),
                                              (o.deletions = null),
                                              (o.memoizedProps =
                                                  l.memoizedProps),
                                              (o.memoizedState =
                                                  l.memoizedState),
                                              (o.updateQueue = l.updateQueue),
                                              (o.type = l.type),
                                              (t = l.dependencies),
                                              (o.dependencies =
                                                  t === null
                                                      ? null
                                                      : {
                                                            lanes: t.lanes,
                                                            firstContext:
                                                                t.firstContext,
                                                        })),
                                        (n = n.sibling)
                                return ke(Ie, (Ie.current & 1) | 2), e.child
                            }
                            t = t.sibling
                        }
                    o.tail !== null &&
                        Je() > Jo &&
                        ((e.flags |= 128),
                        (r = !0),
                        wl(o, !1),
                        (e.lanes = 4194304))
                }
            else {
                if (!r)
                    if (((t = cu(l)), t !== null)) {
                        if (
                            ((e.flags |= 128),
                            (r = !0),
                            (n = t.updateQueue),
                            n !== null && ((e.updateQueue = n), (e.flags |= 4)),
                            wl(o, !0),
                            o.tail === null &&
                                o.tailMode === 'hidden' &&
                                !l.alternate &&
                                !Ne)
                        )
                            return Mt(e), null
                    } else
                        2 * Je() - o.renderingStartTime > Jo &&
                            n !== 1073741824 &&
                            ((e.flags |= 128),
                            (r = !0),
                            wl(o, !1),
                            (e.lanes = 4194304))
                o.isBackwards
                    ? ((l.sibling = e.child), (e.child = l))
                    : ((n = o.last),
                      n !== null ? (n.sibling = l) : (e.child = l),
                      (o.last = l))
            }
            return o.tail !== null
                ? ((e = o.tail),
                  (o.rendering = e),
                  (o.tail = e.sibling),
                  (o.renderingStartTime = Je()),
                  (e.sibling = null),
                  (n = Ie.current),
                  ke(Ie, r ? (n & 1) | 2 : n & 1),
                  e)
                : (Mt(e), null)
        case 22:
        case 23:
            return (
                kh(),
                (r = e.memoizedState !== null),
                t !== null &&
                    (t.memoizedState !== null) !== r &&
                    (e.flags |= 8192),
                r && e.mode & 1
                    ? hn & 1073741824 &&
                      (Mt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
                    : Mt(e),
                null
            )
        case 24:
            return null
        case 25:
            return null
    }
    throw Error(M(156, e.tag))
}
function Aw(t, e) {
    switch ((rh(e), e.tag)) {
        case 1:
            return (
                nn(e.type) && ru(),
                (t = e.flags),
                t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
            )
        case 3:
            return (
                Zo(),
                De(tn),
                De(Ft),
                dh(),
                (t = e.flags),
                t & 65536 && !(t & 128)
                    ? ((e.flags = (t & -65537) | 128), e)
                    : null
            )
        case 5:
            return fh(e), null
        case 13:
            if (
                (De(Ie),
                (t = e.memoizedState),
                t !== null && t.dehydrated !== null)
            ) {
                if (e.alternate === null) throw Error(M(340))
                Qo()
            }
            return (
                (t = e.flags),
                t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
            )
        case 19:
            return De(Ie), null
        case 4:
            return Zo(), null
        case 10:
            return ah(e.type._context), null
        case 22:
        case 23:
            return kh(), null
        case 24:
            return null
        default:
            return null
    }
}
var ls = !1,
    jt = !1,
    zw = typeof WeakSet == 'function' ? WeakSet : Set,
    A = null
function Eo(t, e) {
    var n = t.ref
    if (n !== null)
        if (typeof n == 'function')
            try {
                n(null)
            } catch (r) {
                Ge(t, e, r)
            }
        else n.current = null
}
function $f(t, e, n) {
    try {
        n()
    } catch (r) {
        Ge(t, e, r)
    }
}
var fm = !1
function Iw(t, e) {
    if (((Tf = Js), (t = gv()), th(t))) {
        if ('selectionStart' in t)
            var n = { start: t.selectionStart, end: t.selectionEnd }
        else
            e: {
                n = ((n = t.ownerDocument) && n.defaultView) || window
                var r = n.getSelection && n.getSelection()
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode
                    var i = r.anchorOffset,
                        o = r.focusNode
                    r = r.focusOffset
                    try {
                        n.nodeType, o.nodeType
                    } catch {
                        n = null
                        break e
                    }
                    var l = 0,
                        a = -1,
                        s = -1,
                        u = 0,
                        c = 0,
                        d = t,
                        f = null
                    t: for (;;) {
                        for (
                            var h;
                            d !== n ||
                                (i !== 0 && d.nodeType !== 3) ||
                                (a = l + i),
                                d !== o ||
                                    (r !== 0 && d.nodeType !== 3) ||
                                    (s = l + r),
                                d.nodeType === 3 && (l += d.nodeValue.length),
                                (h = d.firstChild) !== null;

                        )
                            (f = d), (d = h)
                        for (;;) {
                            if (d === t) break t
                            if (
                                (f === n && ++u === i && (a = l),
                                f === o && ++c === r && (s = l),
                                (h = d.nextSibling) !== null)
                            )
                                break
                            ;(d = f), (f = d.parentNode)
                        }
                        d = h
                    }
                    n = a === -1 || s === -1 ? null : { start: a, end: s }
                } else n = null
            }
        n = n || { start: 0, end: 0 }
    } else n = null
    for (
        Of = { focusedElem: t, selectionRange: n }, Js = !1, A = e;
        A !== null;

    )
        if (
            ((e = A),
            (t = e.child),
            (e.subtreeFlags & 1028) !== 0 && t !== null)
        )
            (t.return = e), (A = t)
        else
            for (; A !== null; ) {
                e = A
                try {
                    var g = e.alternate
                    if (e.flags & 1024)
                        switch (e.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break
                            case 1:
                                if (g !== null) {
                                    var p = g.memoizedProps,
                                        x = g.memoizedState,
                                        v = e.stateNode,
                                        m = v.getSnapshotBeforeUpdate(
                                            e.elementType === e.type
                                                ? p
                                                : Gn(e.type, p),
                                            x,
                                        )
                                    v.__reactInternalSnapshotBeforeUpdate = m
                                }
                                break
                            case 3:
                                var _ = e.stateNode.containerInfo
                                _.nodeType === 1
                                    ? (_.textContent = '')
                                    : _.nodeType === 9 &&
                                      _.documentElement &&
                                      _.removeChild(_.documentElement)
                                break
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break
                            default:
                                throw Error(M(163))
                        }
                } catch (y) {
                    Ge(e, e.return, y)
                }
                if (((t = e.sibling), t !== null)) {
                    ;(t.return = e.return), (A = t)
                    break
                }
                A = e.return
            }
    return (g = fm), (fm = !1), g
}
function Ul(t, e, n) {
    var r = e.updateQueue
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var i = (r = r.next)
        do {
            if ((i.tag & t) === t) {
                var o = i.destroy
                ;(i.destroy = void 0), o !== void 0 && $f(e, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Bu(t, e) {
    if (
        ((e = e.updateQueue),
        (e = e !== null ? e.lastEffect : null),
        e !== null)
    ) {
        var n = (e = e.next)
        do {
            if ((n.tag & t) === t) {
                var r = n.create
                n.destroy = r()
            }
            n = n.next
        } while (n !== e)
    }
}
function Bf(t) {
    var e = t.ref
    if (e !== null) {
        var n = t.stateNode
        switch (t.tag) {
            case 5:
                t = n
                break
            default:
                t = n
        }
        typeof e == 'function' ? e(t) : (e.current = t)
    }
}
function hg(t) {
    var e = t.alternate
    e !== null && ((t.alternate = null), hg(e)),
        (t.child = null),
        (t.deletions = null),
        (t.sibling = null),
        t.tag === 5 &&
            ((e = t.stateNode),
            e !== null &&
                (delete e[hr],
                delete e[ma],
                delete e[Df],
                delete e[yw],
                delete e[ww])),
        (t.stateNode = null),
        (t.return = null),
        (t.dependencies = null),
        (t.memoizedProps = null),
        (t.memoizedState = null),
        (t.pendingProps = null),
        (t.stateNode = null),
        (t.updateQueue = null)
}
function pg(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function dm(t) {
    e: for (;;) {
        for (; t.sibling === null; ) {
            if (t.return === null || pg(t.return)) return null
            t = t.return
        }
        for (
            t.sibling.return = t.return, t = t.sibling;
            t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

        ) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue e
            ;(t.child.return = t), (t = t.child)
        }
        if (!(t.flags & 2)) return t.stateNode
    }
}
function Uf(t, e, n) {
    var r = t.tag
    if (r === 5 || r === 6)
        (t = t.stateNode),
            e
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(t, e)
                    : n.insertBefore(t, e)
                : (n.nodeType === 8
                      ? ((e = n.parentNode), e.insertBefore(t, n))
                      : ((e = n), e.appendChild(t)),
                  (n = n._reactRootContainer),
                  n != null || e.onclick !== null || (e.onclick = nu))
    else if (r !== 4 && ((t = t.child), t !== null))
        for (Uf(t, e, n), t = t.sibling; t !== null; )
            Uf(t, e, n), (t = t.sibling)
}
function Yf(t, e, n) {
    var r = t.tag
    if (r === 5 || r === 6)
        (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t)
    else if (r !== 4 && ((t = t.child), t !== null))
        for (Yf(t, e, n), t = t.sibling; t !== null; )
            Yf(t, e, n), (t = t.sibling)
}
var xt = null,
    Qn = !1
function Hr(t, e, n) {
    for (n = n.child; n !== null; ) mg(t, e, n), (n = n.sibling)
}
function mg(t, e, n) {
    if (gr && typeof gr.onCommitFiberUnmount == 'function')
        try {
            gr.onCommitFiberUnmount(Au, n)
        } catch {}
    switch (n.tag) {
        case 5:
            jt || Eo(n, e)
        case 6:
            var r = xt,
                i = Qn
            ;(xt = null),
                Hr(t, e, n),
                (xt = r),
                (Qn = i),
                xt !== null &&
                    (Qn
                        ? ((t = xt),
                          (n = n.stateNode),
                          t.nodeType === 8
                              ? t.parentNode.removeChild(n)
                              : t.removeChild(n))
                        : xt.removeChild(n.stateNode))
            break
        case 18:
            xt !== null &&
                (Qn
                    ? ((t = xt),
                      (n = n.stateNode),
                      t.nodeType === 8
                          ? Cc(t.parentNode, n)
                          : t.nodeType === 1 && Cc(t, n),
                      ca(t))
                    : Cc(xt, n.stateNode))
            break
        case 4:
            ;(r = xt),
                (i = Qn),
                (xt = n.stateNode.containerInfo),
                (Qn = !0),
                Hr(t, e, n),
                (xt = r),
                (Qn = i)
            break
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !jt &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                i = r = r.next
                do {
                    var o = i,
                        l = o.destroy
                    ;(o = o.tag),
                        l !== void 0 && (o & 2 || o & 4) && $f(n, e, l),
                        (i = i.next)
                } while (i !== r)
            }
            Hr(t, e, n)
            break
        case 1:
            if (
                !jt &&
                (Eo(n, e),
                (r = n.stateNode),
                typeof r.componentWillUnmount == 'function')
            )
                try {
                    ;(r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount()
                } catch (a) {
                    Ge(n, e, a)
                }
            Hr(t, e, n)
            break
        case 21:
            Hr(t, e, n)
            break
        case 22:
            n.mode & 1
                ? ((jt = (r = jt) || n.memoizedState !== null),
                  Hr(t, e, n),
                  (jt = r))
                : Hr(t, e, n)
            break
        default:
            Hr(t, e, n)
    }
}
function hm(t) {
    var e = t.updateQueue
    if (e !== null) {
        t.updateQueue = null
        var n = t.stateNode
        n === null && (n = t.stateNode = new zw()),
            e.forEach(function (r) {
                var i = Hw.bind(null, t, r)
                n.has(r) || (n.add(r), r.then(i, i))
            })
    }
}
function Hn(t, e) {
    var n = e.deletions
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r]
            try {
                var o = t,
                    l = e,
                    a = l
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            ;(xt = a.stateNode), (Qn = !1)
                            break e
                        case 3:
                            ;(xt = a.stateNode.containerInfo), (Qn = !0)
                            break e
                        case 4:
                            ;(xt = a.stateNode.containerInfo), (Qn = !0)
                            break e
                    }
                    a = a.return
                }
                if (xt === null) throw Error(M(160))
                mg(o, l, i), (xt = null), (Qn = !1)
                var s = i.alternate
                s !== null && (s.return = null), (i.return = null)
            } catch (u) {
                Ge(i, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; ) vg(e, t), (e = e.sibling)
}
function vg(t, e) {
    var n = t.alternate,
        r = t.flags
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Hn(e, t), sr(t), r & 4)) {
                try {
                    Ul(3, t, t.return), Bu(3, t)
                } catch (p) {
                    Ge(t, t.return, p)
                }
                try {
                    Ul(5, t, t.return)
                } catch (p) {
                    Ge(t, t.return, p)
                }
            }
            break
        case 1:
            Hn(e, t), sr(t), r & 512 && n !== null && Eo(n, n.return)
            break
        case 5:
            if (
                (Hn(e, t),
                sr(t),
                r & 512 && n !== null && Eo(n, n.return),
                t.flags & 32)
            ) {
                var i = t.stateNode
                try {
                    la(i, '')
                } catch (p) {
                    Ge(t, t.return, p)
                }
            }
            if (r & 4 && ((i = t.stateNode), i != null)) {
                var o = t.memoizedProps,
                    l = n !== null ? n.memoizedProps : o,
                    a = t.type,
                    s = t.updateQueue
                if (((t.updateQueue = null), s !== null))
                    try {
                        a === 'input' &&
                            o.type === 'radio' &&
                            o.name != null &&
                            F0(i, o),
                            mf(a, l)
                        var u = mf(a, o)
                        for (l = 0; l < s.length; l += 2) {
                            var c = s[l],
                                d = s[l + 1]
                            c === 'style'
                                ? B0(i, d)
                                : c === 'dangerouslySetInnerHTML'
                                  ? V0(i, d)
                                  : c === 'children'
                                    ? la(i, d)
                                    : $d(i, c, d, u)
                        }
                        switch (a) {
                            case 'input':
                                cf(i, o)
                                break
                            case 'textarea':
                                b0(i, o)
                                break
                            case 'select':
                                var f = i._wrapperState.wasMultiple
                                i._wrapperState.wasMultiple = !!o.multiple
                                var h = o.value
                                h != null
                                    ? Ao(i, !!o.multiple, h, !1)
                                    : f !== !!o.multiple &&
                                      (o.defaultValue != null
                                          ? Ao(
                                                i,
                                                !!o.multiple,
                                                o.defaultValue,
                                                !0,
                                            )
                                          : Ao(
                                                i,
                                                !!o.multiple,
                                                o.multiple ? [] : '',
                                                !1,
                                            ))
                        }
                        i[ma] = o
                    } catch (p) {
                        Ge(t, t.return, p)
                    }
            }
            break
        case 6:
            if ((Hn(e, t), sr(t), r & 4)) {
                if (t.stateNode === null) throw Error(M(162))
                ;(i = t.stateNode), (o = t.memoizedProps)
                try {
                    i.nodeValue = o
                } catch (p) {
                    Ge(t, t.return, p)
                }
            }
            break
        case 3:
            if (
                (Hn(e, t),
                sr(t),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    ca(e.containerInfo)
                } catch (p) {
                    Ge(t, t.return, p)
                }
            break
        case 4:
            Hn(e, t), sr(t)
            break
        case 13:
            Hn(e, t),
                sr(t),
                (i = t.child),
                i.flags & 8192 &&
                    ((o = i.memoizedState !== null),
                    (i.stateNode.isHidden = o),
                    !o ||
                        (i.alternate !== null &&
                            i.alternate.memoizedState !== null) ||
                        (xh = Je())),
                r & 4 && hm(t)
            break
        case 22:
            if (
                ((c = n !== null && n.memoizedState !== null),
                t.mode & 1
                    ? ((jt = (u = jt) || c), Hn(e, t), (jt = u))
                    : Hn(e, t),
                sr(t),
                r & 8192)
            ) {
                if (
                    ((u = t.memoizedState !== null),
                    (t.stateNode.isHidden = u) && !c && t.mode & 1)
                )
                    for (A = t, c = t.child; c !== null; ) {
                        for (d = A = c; A !== null; ) {
                            switch (((f = A), (h = f.child), f.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ul(4, f, f.return)
                                    break
                                case 1:
                                    Eo(f, f.return)
                                    var g = f.stateNode
                                    if (
                                        typeof g.componentWillUnmount ==
                                        'function'
                                    ) {
                                        ;(r = f), (n = f.return)
                                        try {
                                            ;(e = r),
                                                (g.props = e.memoizedProps),
                                                (g.state = e.memoizedState),
                                                g.componentWillUnmount()
                                        } catch (p) {
                                            Ge(r, n, p)
                                        }
                                    }
                                    break
                                case 5:
                                    Eo(f, f.return)
                                    break
                                case 22:
                                    if (f.memoizedState !== null) {
                                        mm(d)
                                        continue
                                    }
                            }
                            h !== null ? ((h.return = f), (A = h)) : mm(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = t; ; ) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d
                            try {
                                ;(i = d.stateNode),
                                    u
                                        ? ((o = i.style),
                                          typeof o.setProperty == 'function'
                                              ? o.setProperty(
                                                    'display',
                                                    'none',
                                                    'important',
                                                )
                                              : (o.display = 'none'))
                                        : ((a = d.stateNode),
                                          (s = d.memoizedProps.style),
                                          (l =
                                              s != null &&
                                              s.hasOwnProperty('display')
                                                  ? s.display
                                                  : null),
                                          (a.style.display = $0('display', l)))
                            } catch (p) {
                                Ge(t, t.return, p)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null)
                            try {
                                d.stateNode.nodeValue = u ? '' : d.memoizedProps
                            } catch (p) {
                                Ge(t, t.return, p)
                            }
                    } else if (
                        ((d.tag !== 22 && d.tag !== 23) ||
                            d.memoizedState === null ||
                            d === t) &&
                        d.child !== null
                    ) {
                        ;(d.child.return = d), (d = d.child)
                        continue
                    }
                    if (d === t) break e
                    for (; d.sibling === null; ) {
                        if (d.return === null || d.return === t) break e
                        c === d && (c = null), (d = d.return)
                    }
                    c === d && (c = null),
                        (d.sibling.return = d.return),
                        (d = d.sibling)
                }
            }
            break
        case 19:
            Hn(e, t), sr(t), r & 4 && hm(t)
            break
        case 21:
            break
        default:
            Hn(e, t), sr(t)
    }
}
function sr(t) {
    var e = t.flags
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null; ) {
                    if (pg(n)) {
                        var r = n
                        break e
                    }
                    n = n.return
                }
                throw Error(M(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode
                    r.flags & 32 && (la(i, ''), (r.flags &= -33))
                    var o = dm(t)
                    Yf(t, o, i)
                    break
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo,
                        a = dm(t)
                    Uf(t, a, l)
                    break
                default:
                    throw Error(M(161))
            }
        } catch (s) {
            Ge(t, t.return, s)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}
function Fw(t, e, n) {
    ;(A = t), gg(t)
}
function gg(t, e, n) {
    for (var r = (t.mode & 1) !== 0; A !== null; ) {
        var i = A,
            o = i.child
        if (i.tag === 22 && r) {
            var l = i.memoizedState !== null || ls
            if (!l) {
                var a = i.alternate,
                    s = (a !== null && a.memoizedState !== null) || jt
                a = ls
                var u = jt
                if (((ls = l), (jt = s) && !u))
                    for (A = i; A !== null; )
                        (l = A),
                            (s = l.child),
                            l.tag === 22 && l.memoizedState !== null
                                ? vm(i)
                                : s !== null
                                  ? ((s.return = l), (A = s))
                                  : vm(i)
                for (; o !== null; ) (A = o), gg(o), (o = o.sibling)
                ;(A = i), (ls = a), (jt = u)
            }
            pm(t)
        } else
            i.subtreeFlags & 8772 && o !== null
                ? ((o.return = i), (A = o))
                : pm(t)
    }
}
function pm(t) {
    for (; A !== null; ) {
        var e = A
        if (e.flags & 8772) {
            var n = e.alternate
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            jt || Bu(5, e)
                            break
                        case 1:
                            var r = e.stateNode
                            if (e.flags & 4 && !jt)
                                if (n === null) r.componentDidMount()
                                else {
                                    var i =
                                        e.elementType === e.type
                                            ? n.memoizedProps
                                            : Gn(e.type, n.memoizedProps)
                                    r.componentDidUpdate(
                                        i,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate,
                                    )
                                }
                            var o = e.updateQueue
                            o !== null && qp(e, o, r)
                            break
                        case 3:
                            var l = e.updateQueue
                            if (l !== null) {
                                if (((n = null), e.child !== null))
                                    switch (e.child.tag) {
                                        case 5:
                                            n = e.child.stateNode
                                            break
                                        case 1:
                                            n = e.child.stateNode
                                    }
                                qp(e, l, n)
                            }
                            break
                        case 5:
                            var a = e.stateNode
                            if (n === null && e.flags & 4) {
                                n = a
                                var s = e.memoizedProps
                                switch (e.type) {
                                    case 'button':
                                    case 'input':
                                    case 'select':
                                    case 'textarea':
                                        s.autoFocus && n.focus()
                                        break
                                    case 'img':
                                        s.src && (n.src = s.src)
                                }
                            }
                            break
                        case 6:
                            break
                        case 4:
                            break
                        case 12:
                            break
                        case 13:
                            if (e.memoizedState === null) {
                                var u = e.alternate
                                if (u !== null) {
                                    var c = u.memoizedState
                                    if (c !== null) {
                                        var d = c.dehydrated
                                        d !== null && ca(d)
                                    }
                                }
                            }
                            break
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break
                        default:
                            throw Error(M(163))
                    }
                jt || (e.flags & 512 && Bf(e))
            } catch (f) {
                Ge(e, e.return, f)
            }
        }
        if (e === t) {
            A = null
            break
        }
        if (((n = e.sibling), n !== null)) {
            ;(n.return = e.return), (A = n)
            break
        }
        A = e.return
    }
}
function mm(t) {
    for (; A !== null; ) {
        var e = A
        if (e === t) {
            A = null
            break
        }
        var n = e.sibling
        if (n !== null) {
            ;(n.return = e.return), (A = n)
            break
        }
        A = e.return
    }
}
function vm(t) {
    for (; A !== null; ) {
        var e = A
        try {
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    var n = e.return
                    try {
                        Bu(4, e)
                    } catch (s) {
                        Ge(e, n, s)
                    }
                    break
                case 1:
                    var r = e.stateNode
                    if (typeof r.componentDidMount == 'function') {
                        var i = e.return
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            Ge(e, i, s)
                        }
                    }
                    var o = e.return
                    try {
                        Bf(e)
                    } catch (s) {
                        Ge(e, o, s)
                    }
                    break
                case 5:
                    var l = e.return
                    try {
                        Bf(e)
                    } catch (s) {
                        Ge(e, l, s)
                    }
            }
        } catch (s) {
            Ge(e, e.return, s)
        }
        if (e === t) {
            A = null
            break
        }
        var a = e.sibling
        if (a !== null) {
            ;(a.return = e.return), (A = a)
            break
        }
        A = e.return
    }
}
var bw = Math.ceil,
    hu = Vr.ReactCurrentDispatcher,
    yh = Vr.ReactCurrentOwner,
    In = Vr.ReactCurrentBatchConfig,
    de = 0,
    yt = null,
    lt = null,
    kt = 0,
    hn = 0,
    Do = ki(0),
    ht = 0,
    xa = null,
    Ji = 0,
    Uu = 0,
    wh = 0,
    Yl = null,
    Jt = null,
    xh = 0,
    Jo = 1 / 0,
    Tr = null,
    pu = !1,
    Hf = null,
    fi = null,
    as = !1,
    Jr = null,
    mu = 0,
    Hl = 0,
    Xf = null,
    js = -1,
    As = 0
function Gt() {
    return de & 6 ? Je() : js !== -1 ? js : (js = Je())
}
function di(t) {
    return t.mode & 1
        ? de & 2 && kt !== 0
            ? kt & -kt
            : Sw.transition !== null
              ? (As === 0 && (As = tv()), As)
              : ((t = ve),
                t !== 0 ||
                    ((t = window.event), (t = t === void 0 ? 16 : sv(t.type))),
                t)
        : 1
}
function Jn(t, e, n, r) {
    if (50 < Hl) throw ((Hl = 0), (Xf = null), Error(M(185)))
    ja(t, n, r),
        (!(de & 2) || t !== yt) &&
            (t === yt && (!(de & 2) && (Uu |= n), ht === 4 && Zr(t, kt)),
            rn(t, r),
            n === 1 &&
                de === 0 &&
                !(e.mode & 1) &&
                ((Jo = Je() + 500), Wu && Ci()))
}
function rn(t, e) {
    var n = t.callbackNode
    S1(t, e)
    var r = qs(t, t === yt ? kt : 0)
    if (r === 0)
        n !== null && Tp(n), (t.callbackNode = null), (t.callbackPriority = 0)
    else if (((e = r & -r), t.callbackPriority !== e)) {
        if ((n != null && Tp(n), e === 1))
            t.tag === 0 ? xw(gm.bind(null, t)) : Pv(gm.bind(null, t)),
                gw(function () {
                    !(de & 6) && Ci()
                }),
                (n = null)
        else {
            switch (nv(r)) {
                case 1:
                    n = Xd
                    break
                case 4:
                    n = J0
                    break
                case 16:
                    n = Zs
                    break
                case 536870912:
                    n = ev
                    break
                default:
                    n = Zs
            }
            n = Tg(n, _g.bind(null, t))
        }
        ;(t.callbackPriority = e), (t.callbackNode = n)
    }
}
function _g(t, e) {
    if (((js = -1), (As = 0), de & 6)) throw Error(M(327))
    var n = t.callbackNode
    if (Wo() && t.callbackNode !== n) return null
    var r = qs(t, t === yt ? kt : 0)
    if (r === 0) return null
    if (r & 30 || r & t.expiredLanes || e) e = vu(t, r)
    else {
        e = r
        var i = de
        de |= 2
        var o = wg()
        ;(yt !== t || kt !== e) && ((Tr = null), (Jo = Je() + 500), Wi(t, e))
        do
            try {
                $w()
                break
            } catch (a) {
                yg(t, a)
            }
        while (!0)
        lh(),
            (hu.current = o),
            (de = i),
            lt !== null ? (e = 0) : ((yt = null), (kt = 0), (e = ht))
    }
    if (e !== 0) {
        if (
            (e === 2 && ((i = wf(t)), i !== 0 && ((r = i), (e = Gf(t, i)))),
            e === 1)
        )
            throw ((n = xa), Wi(t, 0), Zr(t, r), rn(t, Je()), n)
        if (e === 6) Zr(t, r)
        else {
            if (
                ((i = t.current.alternate),
                !(r & 30) &&
                    !Ww(i) &&
                    ((e = vu(t, r)),
                    e === 2 &&
                        ((o = wf(t)), o !== 0 && ((r = o), (e = Gf(t, o)))),
                    e === 1))
            )
                throw ((n = xa), Wi(t, 0), Zr(t, r), rn(t, Je()), n)
            switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
                case 0:
                case 1:
                    throw Error(M(345))
                case 2:
                    Mi(t, Jt, Tr)
                    break
                case 3:
                    if (
                        (Zr(t, r),
                        (r & 130023424) === r &&
                            ((e = xh + 500 - Je()), 10 < e))
                    ) {
                        if (qs(t, 0) !== 0) break
                        if (((i = t.suspendedLanes), (i & r) !== r)) {
                            Gt(), (t.pingedLanes |= t.suspendedLanes & i)
                            break
                        }
                        t.timeoutHandle = Ef(Mi.bind(null, t, Jt, Tr), e)
                        break
                    }
                    Mi(t, Jt, Tr)
                    break
                case 4:
                    if ((Zr(t, r), (r & 4194240) === r)) break
                    for (e = t.eventTimes, i = -1; 0 < r; ) {
                        var l = 31 - qn(r)
                        ;(o = 1 << l), (l = e[l]), l > i && (i = l), (r &= ~o)
                    }
                    if (
                        ((r = i),
                        (r = Je() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                  ? 480
                                  : 1080 > r
                                    ? 1080
                                    : 1920 > r
                                      ? 1920
                                      : 3e3 > r
                                        ? 3e3
                                        : 4320 > r
                                          ? 4320
                                          : 1960 * bw(r / 1960)) - r),
                        10 < r)
                    ) {
                        t.timeoutHandle = Ef(Mi.bind(null, t, Jt, Tr), r)
                        break
                    }
                    Mi(t, Jt, Tr)
                    break
                case 5:
                    Mi(t, Jt, Tr)
                    break
                default:
                    throw Error(M(329))
            }
        }
    }
    return rn(t, Je()), t.callbackNode === n ? _g.bind(null, t) : null
}
function Gf(t, e) {
    var n = Yl
    return (
        t.current.memoizedState.isDehydrated && (Wi(t, e).flags |= 256),
        (t = vu(t, e)),
        t !== 2 && ((e = Jt), (Jt = n), e !== null && Qf(e)),
        t
    )
}
function Qf(t) {
    Jt === null ? (Jt = t) : Jt.push.apply(Jt, t)
}
function Ww(t) {
    for (var e = t; ; ) {
        if (e.flags & 16384) {
            var n = e.updateQueue
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot
                    i = i.value
                    try {
                        if (!er(o(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
            (n.return = e), (e = n)
        else {
            if (e === t) break
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) return !0
                e = e.return
            }
            ;(e.sibling.return = e.return), (e = e.sibling)
        }
    }
    return !0
}
function Zr(t, e) {
    for (
        e &= ~wh,
            e &= ~Uu,
            t.suspendedLanes |= e,
            t.pingedLanes &= ~e,
            t = t.expirationTimes;
        0 < e;

    ) {
        var n = 31 - qn(e),
            r = 1 << n
        ;(t[n] = -1), (e &= ~r)
    }
}
function gm(t) {
    if (de & 6) throw Error(M(327))
    Wo()
    var e = qs(t, 0)
    if (!(e & 1)) return rn(t, Je()), null
    var n = vu(t, e)
    if (t.tag !== 0 && n === 2) {
        var r = wf(t)
        r !== 0 && ((e = r), (n = Gf(t, r)))
    }
    if (n === 1) throw ((n = xa), Wi(t, 0), Zr(t, e), rn(t, Je()), n)
    if (n === 6) throw Error(M(345))
    return (
        (t.finishedWork = t.current.alternate),
        (t.finishedLanes = e),
        Mi(t, Jt, Tr),
        rn(t, Je()),
        null
    )
}
function Sh(t, e) {
    var n = de
    de |= 1
    try {
        return t(e)
    } finally {
        ;(de = n), de === 0 && ((Jo = Je() + 500), Wu && Ci())
    }
}
function eo(t) {
    Jr !== null && Jr.tag === 0 && !(de & 6) && Wo()
    var e = de
    de |= 1
    var n = In.transition,
        r = ve
    try {
        if (((In.transition = null), (ve = 1), t)) return t()
    } finally {
        ;(ve = r), (In.transition = n), (de = e), !(de & 6) && Ci()
    }
}
function kh() {
    ;(hn = Do.current), De(Do)
}
function Wi(t, e) {
    ;(t.finishedWork = null), (t.finishedLanes = 0)
    var n = t.timeoutHandle
    if ((n !== -1 && ((t.timeoutHandle = -1), vw(n)), lt !== null))
        for (n = lt.return; n !== null; ) {
            var r = n
            switch ((rh(r), r.tag)) {
                case 1:
                    ;(r = r.type.childContextTypes), r != null && ru()
                    break
                case 3:
                    Zo(), De(tn), De(Ft), dh()
                    break
                case 5:
                    fh(r)
                    break
                case 4:
                    Zo()
                    break
                case 13:
                    De(Ie)
                    break
                case 19:
                    De(Ie)
                    break
                case 10:
                    ah(r.type._context)
                    break
                case 22:
                case 23:
                    kh()
            }
            n = n.return
        }
    if (
        ((yt = t),
        (lt = t = hi(t.current, null)),
        (kt = hn = e),
        (ht = 0),
        (xa = null),
        (wh = Uu = Ji = 0),
        (Jt = Yl = null),
        zi !== null)
    ) {
        for (e = 0; e < zi.length; e++)
            if (((n = zi[e]), (r = n.interleaved), r !== null)) {
                n.interleaved = null
                var i = r.next,
                    o = n.pending
                if (o !== null) {
                    var l = o.next
                    ;(o.next = i), (r.next = l)
                }
                n.pending = r
            }
        zi = null
    }
    return t
}
function yg(t, e) {
    do {
        var n = lt
        try {
            if ((lh(), (Ms.current = du), fu)) {
                for (var r = We.memoizedState; r !== null; ) {
                    var i = r.queue
                    i !== null && (i.pending = null), (r = r.next)
                }
                fu = !1
            }
            if (
                ((qi = 0),
                (gt = ft = We = null),
                (Bl = !1),
                (_a = 0),
                (yh.current = null),
                n === null || n.return === null)
            ) {
                ;(ht = 1), (xa = e), (lt = null)
                break
            }
            e: {
                var o = t,
                    l = n.return,
                    a = n,
                    s = e
                if (
                    ((e = kt),
                    (a.flags |= 32768),
                    s !== null &&
                        typeof s == 'object' &&
                        typeof s.then == 'function')
                ) {
                    var u = s,
                        c = a,
                        d = c.tag
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate
                        f
                            ? ((c.updateQueue = f.updateQueue),
                              (c.memoizedState = f.memoizedState),
                              (c.lanes = f.lanes))
                            : ((c.updateQueue = null), (c.memoizedState = null))
                    }
                    var h = im(l)
                    if (h !== null) {
                        ;(h.flags &= -257),
                            om(h, l, a, o, e),
                            h.mode & 1 && rm(o, u, e),
                            (e = h),
                            (s = u)
                        var g = e.updateQueue
                        if (g === null) {
                            var p = new Set()
                            p.add(s), (e.updateQueue = p)
                        } else g.add(s)
                        break e
                    } else {
                        if (!(e & 1)) {
                            rm(o, u, e), Ch()
                            break e
                        }
                        s = Error(M(426))
                    }
                } else if (Ne && a.mode & 1) {
                    var x = im(l)
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                            om(x, l, a, o, e),
                            ih(qo(s, a))
                        break e
                    }
                }
                ;(o = s = qo(s, a)),
                    ht !== 4 && (ht = 2),
                    Yl === null ? (Yl = [o]) : Yl.push(o),
                    (o = l)
                do {
                    switch (o.tag) {
                        case 3:
                            ;(o.flags |= 65536), (e &= -e), (o.lanes |= e)
                            var v = ng(o, s, e)
                            Zp(o, v)
                            break e
                        case 1:
                            a = s
                            var m = o.type,
                                _ = o.stateNode
                            if (
                                !(o.flags & 128) &&
                                (typeof m.getDerivedStateFromError ==
                                    'function' ||
                                    (_ !== null &&
                                        typeof _.componentDidCatch ==
                                            'function' &&
                                        (fi === null || !fi.has(_))))
                            ) {
                                ;(o.flags |= 65536), (e &= -e), (o.lanes |= e)
                                var y = rg(o, a, e)
                                Zp(o, y)
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            Sg(n)
        } catch (k) {
            ;(e = k), lt === n && n !== null && (lt = n = n.return)
            continue
        }
        break
    } while (!0)
}
function wg() {
    var t = hu.current
    return (hu.current = du), t === null ? du : t
}
function Ch() {
    ;(ht === 0 || ht === 3 || ht === 2) && (ht = 4),
        yt === null || (!(Ji & 268435455) && !(Uu & 268435455)) || Zr(yt, kt)
}
function vu(t, e) {
    var n = de
    de |= 2
    var r = wg()
    ;(yt !== t || kt !== e) && ((Tr = null), Wi(t, e))
    do
        try {
            Vw()
            break
        } catch (i) {
            yg(t, i)
        }
    while (!0)
    if ((lh(), (de = n), (hu.current = r), lt !== null)) throw Error(M(261))
    return (yt = null), (kt = 0), ht
}
function Vw() {
    for (; lt !== null; ) xg(lt)
}
function $w() {
    for (; lt !== null && !h1(); ) xg(lt)
}
function xg(t) {
    var e = Cg(t.alternate, t, hn)
    ;(t.memoizedProps = t.pendingProps),
        e === null ? Sg(t) : (lt = e),
        (yh.current = null)
}
function Sg(t) {
    var e = t
    do {
        var n = e.alternate
        if (((t = e.return), e.flags & 32768)) {
            if (((n = Aw(n, e)), n !== null)) {
                ;(n.flags &= 32767), (lt = n)
                return
            }
            if (t !== null)
                (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)
            else {
                ;(ht = 6), (lt = null)
                return
            }
        } else if (((n = jw(n, e, hn)), n !== null)) {
            lt = n
            return
        }
        if (((e = e.sibling), e !== null)) {
            lt = e
            return
        }
        lt = e = t
    } while (e !== null)
    ht === 0 && (ht = 5)
}
function Mi(t, e, n) {
    var r = ve,
        i = In.transition
    try {
        ;(In.transition = null), (ve = 1), Bw(t, e, n, r)
    } finally {
        ;(In.transition = i), (ve = r)
    }
    return null
}
function Bw(t, e, n, r) {
    do Wo()
    while (Jr !== null)
    if (de & 6) throw Error(M(327))
    n = t.finishedWork
    var i = t.finishedLanes
    if (n === null) return null
    if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
        throw Error(M(177))
    ;(t.callbackNode = null), (t.callbackPriority = 0)
    var o = n.lanes | n.childLanes
    if (
        (k1(t, o),
        t === yt && ((lt = yt = null), (kt = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            as ||
            ((as = !0),
            Tg(Zs, function () {
                return Wo(), null
            })),
        (o = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || o)
    ) {
        ;(o = In.transition), (In.transition = null)
        var l = ve
        ve = 1
        var a = de
        ;(de |= 4),
            (yh.current = null),
            Iw(t, n),
            vg(n, t),
            uw(Of),
            (Js = !!Tf),
            (Of = Tf = null),
            (t.current = n),
            Fw(n),
            p1(),
            (de = a),
            (ve = l),
            (In.transition = o)
    } else t.current = n
    if (
        (as && ((as = !1), (Jr = t), (mu = i)),
        (o = t.pendingLanes),
        o === 0 && (fi = null),
        g1(n.stateNode),
        rn(t, Je()),
        e !== null)
    )
        for (r = t.onRecoverableError, n = 0; n < e.length; n++)
            (i = e[n]),
                r(i.value, { componentStack: i.stack, digest: i.digest })
    if (pu) throw ((pu = !1), (t = Hf), (Hf = null), t)
    return (
        mu & 1 && t.tag !== 0 && Wo(),
        (o = t.pendingLanes),
        o & 1 ? (t === Xf ? Hl++ : ((Hl = 0), (Xf = t))) : (Hl = 0),
        Ci(),
        null
    )
}
function Wo() {
    if (Jr !== null) {
        var t = nv(mu),
            e = In.transition,
            n = ve
        try {
            if (((In.transition = null), (ve = 16 > t ? 16 : t), Jr === null))
                var r = !1
            else {
                if (((t = Jr), (Jr = null), (mu = 0), de & 6))
                    throw Error(M(331))
                var i = de
                for (de |= 4, A = t.current; A !== null; ) {
                    var o = A,
                        l = o.child
                    if (A.flags & 16) {
                        var a = o.deletions
                        if (a !== null) {
                            for (var s = 0; s < a.length; s++) {
                                var u = a[s]
                                for (A = u; A !== null; ) {
                                    var c = A
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ul(8, c, o)
                                    }
                                    var d = c.child
                                    if (d !== null) (d.return = c), (A = d)
                                    else
                                        for (; A !== null; ) {
                                            c = A
                                            var f = c.sibling,
                                                h = c.return
                                            if ((hg(c), c === u)) {
                                                A = null
                                                break
                                            }
                                            if (f !== null) {
                                                ;(f.return = h), (A = f)
                                                break
                                            }
                                            A = h
                                        }
                                }
                            }
                            var g = o.alternate
                            if (g !== null) {
                                var p = g.child
                                if (p !== null) {
                                    g.child = null
                                    do {
                                        var x = p.sibling
                                        ;(p.sibling = null), (p = x)
                                    } while (p !== null)
                                }
                            }
                            A = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && l !== null)
                        (l.return = o), (A = l)
                    else
                        e: for (; A !== null; ) {
                            if (((o = A), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ul(9, o, o.return)
                                }
                            var v = o.sibling
                            if (v !== null) {
                                ;(v.return = o.return), (A = v)
                                break e
                            }
                            A = o.return
                        }
                }
                var m = t.current
                for (A = m; A !== null; ) {
                    l = A
                    var _ = l.child
                    if (l.subtreeFlags & 2064 && _ !== null)
                        (_.return = l), (A = _)
                    else
                        e: for (l = m; A !== null; ) {
                            if (((a = A), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Bu(9, a)
                                    }
                                } catch (k) {
                                    Ge(a, a.return, k)
                                }
                            if (a === l) {
                                A = null
                                break e
                            }
                            var y = a.sibling
                            if (y !== null) {
                                ;(y.return = a.return), (A = y)
                                break e
                            }
                            A = a.return
                        }
                }
                if (
                    ((de = i),
                    Ci(),
                    gr && typeof gr.onPostCommitFiberRoot == 'function')
                )
                    try {
                        gr.onPostCommitFiberRoot(Au, t)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ;(ve = n), (In.transition = e)
        }
    }
    return !1
}
function _m(t, e, n) {
    ;(e = qo(n, e)),
        (e = ng(t, e, 1)),
        (t = ci(t, e, 1)),
        (e = Gt()),
        t !== null && (ja(t, 1, e), rn(t, e))
}
function Ge(t, e, n) {
    if (t.tag === 3) _m(t, t, n)
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                _m(e, t, n)
                break
            } else if (e.tag === 1) {
                var r = e.stateNode
                if (
                    typeof e.type.getDerivedStateFromError == 'function' ||
                    (typeof r.componentDidCatch == 'function' &&
                        (fi === null || !fi.has(r)))
                ) {
                    ;(t = qo(n, t)),
                        (t = rg(e, t, 1)),
                        (e = ci(e, t, 1)),
                        (t = Gt()),
                        e !== null && (ja(e, 1, t), rn(e, t))
                    break
                }
            }
            e = e.return
        }
}
function Uw(t, e, n) {
    var r = t.pingCache
    r !== null && r.delete(e),
        (e = Gt()),
        (t.pingedLanes |= t.suspendedLanes & n),
        yt === t &&
            (kt & n) === n &&
            (ht === 4 ||
            (ht === 3 && (kt & 130023424) === kt && 500 > Je() - xh)
                ? Wi(t, 0)
                : (wh |= n)),
        rn(t, e)
}
function kg(t, e) {
    e === 0 &&
        (t.mode & 1
            ? ((e = Za), (Za <<= 1), !(Za & 130023424) && (Za = 4194304))
            : (e = 1))
    var n = Gt()
    ;(t = Ir(t, e)), t !== null && (ja(t, e, n), rn(t, n))
}
function Yw(t) {
    var e = t.memoizedState,
        n = 0
    e !== null && (n = e.retryLane), kg(t, n)
}
function Hw(t, e) {
    var n = 0
    switch (t.tag) {
        case 13:
            var r = t.stateNode,
                i = t.memoizedState
            i !== null && (n = i.retryLane)
            break
        case 19:
            r = t.stateNode
            break
        default:
            throw Error(M(314))
    }
    r !== null && r.delete(e), kg(t, n)
}
var Cg
Cg = function (t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || tn.current) en = !0
        else {
            if (!(t.lanes & n) && !(e.flags & 128))
                return (en = !1), Rw(t, e, n)
            en = !!(t.flags & 131072)
        }
    else (en = !1), Ne && e.flags & 1048576 && Ev(e, lu, e.index)
    switch (((e.lanes = 0), e.tag)) {
        case 2:
            var r = e.type
            Rs(t, e), (t = e.pendingProps)
            var i = Go(e, Ft.current)
            bo(e, n), (i = ph(null, e, r, t, i, n))
            var o = mh()
            return (
                (e.flags |= 1),
                typeof i == 'object' &&
                i !== null &&
                typeof i.render == 'function' &&
                i.$$typeof === void 0
                    ? ((e.tag = 1),
                      (e.memoizedState = null),
                      (e.updateQueue = null),
                      nn(r) ? ((o = !0), iu(e)) : (o = !1),
                      (e.memoizedState =
                          i.state !== null && i.state !== void 0
                              ? i.state
                              : null),
                      uh(e),
                      (i.updater = $u),
                      (e.stateNode = i),
                      (i._reactInternals = e),
                      Af(e, r, t, n),
                      (e = Ff(null, e, r, !0, o, n)))
                    : ((e.tag = 0),
                      Ne && o && nh(e),
                      $t(null, e, i, n),
                      (e = e.child)),
                e
            )
        case 16:
            r = e.elementType
            e: {
                switch (
                    (Rs(t, e),
                    (t = e.pendingProps),
                    (i = r._init),
                    (r = i(r._payload)),
                    (e.type = r),
                    (i = e.tag = Gw(r)),
                    (t = Gn(r, t)),
                    i)
                ) {
                    case 0:
                        e = If(null, e, r, t, n)
                        break e
                    case 1:
                        e = sm(null, e, r, t, n)
                        break e
                    case 11:
                        e = lm(null, e, r, t, n)
                        break e
                    case 14:
                        e = am(null, e, r, Gn(r.type, t), n)
                        break e
                }
                throw Error(M(306, r, ''))
            }
            return e
        case 0:
            return (
                (r = e.type),
                (i = e.pendingProps),
                (i = e.elementType === r ? i : Gn(r, i)),
                If(t, e, r, i, n)
            )
        case 1:
            return (
                (r = e.type),
                (i = e.pendingProps),
                (i = e.elementType === r ? i : Gn(r, i)),
                sm(t, e, r, i, n)
            )
        case 3:
            e: {
                if ((ag(e), t === null)) throw Error(M(387))
                ;(r = e.pendingProps),
                    (o = e.memoizedState),
                    (i = o.element),
                    jv(t, e),
                    uu(e, r, null, n)
                var l = e.memoizedState
                if (((r = l.element), o.isDehydrated))
                    if (
                        ((o = {
                            element: r,
                            isDehydrated: !1,
                            cache: l.cache,
                            pendingSuspenseBoundaries:
                                l.pendingSuspenseBoundaries,
                            transitions: l.transitions,
                        }),
                        (e.updateQueue.baseState = o),
                        (e.memoizedState = o),
                        e.flags & 256)
                    ) {
                        ;(i = qo(Error(M(423)), e)), (e = um(t, e, r, n, i))
                        break e
                    } else if (r !== i) {
                        ;(i = qo(Error(M(424)), e)), (e = um(t, e, r, n, i))
                        break e
                    } else
                        for (
                            _n = ui(e.stateNode.containerInfo.firstChild),
                                wn = e,
                                Ne = !0,
                                Kn = null,
                                n = Lv(e, null, r, n),
                                e.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
                else {
                    if ((Qo(), r === i)) {
                        e = Fr(t, e, n)
                        break e
                    }
                    $t(t, e, r, n)
                }
                e = e.child
            }
            return e
        case 5:
            return (
                Av(e),
                t === null && Lf(e),
                (r = e.type),
                (i = e.pendingProps),
                (o = t !== null ? t.memoizedProps : null),
                (l = i.children),
                Pf(r, i)
                    ? (l = null)
                    : o !== null && Pf(r, o) && (e.flags |= 32),
                lg(t, e),
                $t(t, e, l, n),
                e.child
            )
        case 6:
            return t === null && Lf(e), null
        case 13:
            return sg(t, e, n)
        case 4:
            return (
                ch(e, e.stateNode.containerInfo),
                (r = e.pendingProps),
                t === null ? (e.child = Ko(e, null, r, n)) : $t(t, e, r, n),
                e.child
            )
        case 11:
            return (
                (r = e.type),
                (i = e.pendingProps),
                (i = e.elementType === r ? i : Gn(r, i)),
                lm(t, e, r, i, n)
            )
        case 7:
            return $t(t, e, e.pendingProps, n), e.child
        case 8:
            return $t(t, e, e.pendingProps.children, n), e.child
        case 12:
            return $t(t, e, e.pendingProps.children, n), e.child
        case 10:
            e: {
                if (
                    ((r = e.type._context),
                    (i = e.pendingProps),
                    (o = e.memoizedProps),
                    (l = i.value),
                    ke(au, r._currentValue),
                    (r._currentValue = l),
                    o !== null)
                )
                    if (er(o.value, l)) {
                        if (o.children === i.children && !tn.current) {
                            e = Fr(t, e, n)
                            break e
                        }
                    } else
                        for (
                            o = e.child, o !== null && (o.return = e);
                            o !== null;

                        ) {
                            var a = o.dependencies
                            if (a !== null) {
                                l = o.child
                                for (var s = a.firstContext; s !== null; ) {
                                    if (s.context === r) {
                                        if (o.tag === 1) {
                                            ;(s = Rr(-1, n & -n)), (s.tag = 2)
                                            var u = o.updateQueue
                                            if (u !== null) {
                                                u = u.shared
                                                var c = u.pending
                                                c === null
                                                    ? (s.next = s)
                                                    : ((s.next = c.next),
                                                      (c.next = s)),
                                                    (u.pending = s)
                                            }
                                        }
                                        ;(o.lanes |= n),
                                            (s = o.alternate),
                                            s !== null && (s.lanes |= n),
                                            Rf(o.return, n, e),
                                            (a.lanes |= n)
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (o.tag === 10)
                                l = o.type === e.type ? null : o.child
                            else if (o.tag === 18) {
                                if (((l = o.return), l === null))
                                    throw Error(M(341))
                                ;(l.lanes |= n),
                                    (a = l.alternate),
                                    a !== null && (a.lanes |= n),
                                    Rf(l, n, e),
                                    (l = o.sibling)
                            } else l = o.child
                            if (l !== null) l.return = o
                            else
                                for (l = o; l !== null; ) {
                                    if (l === e) {
                                        l = null
                                        break
                                    }
                                    if (((o = l.sibling), o !== null)) {
                                        ;(o.return = l.return), (l = o)
                                        break
                                    }
                                    l = l.return
                                }
                            o = l
                        }
                $t(t, e, i.children, n), (e = e.child)
            }
            return e
        case 9:
            return (
                (i = e.type),
                (r = e.pendingProps.children),
                bo(e, n),
                (i = bn(i)),
                (r = r(i)),
                (e.flags |= 1),
                $t(t, e, r, n),
                e.child
            )
        case 14:
            return (
                (r = e.type),
                (i = Gn(r, e.pendingProps)),
                (i = Gn(r.type, i)),
                am(t, e, r, i, n)
            )
        case 15:
            return ig(t, e, e.type, e.pendingProps, n)
        case 17:
            return (
                (r = e.type),
                (i = e.pendingProps),
                (i = e.elementType === r ? i : Gn(r, i)),
                Rs(t, e),
                (e.tag = 1),
                nn(r) ? ((t = !0), iu(e)) : (t = !1),
                bo(e, n),
                tg(e, r, i),
                Af(e, r, i, n),
                Ff(null, e, r, !0, t, n)
            )
        case 19:
            return ug(t, e, n)
        case 22:
            return og(t, e, n)
    }
    throw Error(M(156, e.tag))
}
function Tg(t, e) {
    return q0(t, e)
}
function Xw(t, e, n, r) {
    ;(this.tag = t),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = e),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null)
}
function jn(t, e, n, r) {
    return new Xw(t, e, n, r)
}
function Th(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent)
}
function Gw(t) {
    if (typeof t == 'function') return Th(t) ? 1 : 0
    if (t != null) {
        if (((t = t.$$typeof), t === Ud)) return 11
        if (t === Yd) return 14
    }
    return 2
}
function hi(t, e) {
    var n = t.alternate
    return (
        n === null
            ? ((n = jn(t.tag, e, t.key, t.mode)),
              (n.elementType = t.elementType),
              (n.type = t.type),
              (n.stateNode = t.stateNode),
              (n.alternate = t),
              (t.alternate = n))
            : ((n.pendingProps = e),
              (n.type = t.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = t.flags & 14680064),
        (n.childLanes = t.childLanes),
        (n.lanes = t.lanes),
        (n.child = t.child),
        (n.memoizedProps = t.memoizedProps),
        (n.memoizedState = t.memoizedState),
        (n.updateQueue = t.updateQueue),
        (e = t.dependencies),
        (n.dependencies =
            e === null
                ? null
                : { lanes: e.lanes, firstContext: e.firstContext }),
        (n.sibling = t.sibling),
        (n.index = t.index),
        (n.ref = t.ref),
        n
    )
}
function zs(t, e, n, r, i, o) {
    var l = 2
    if (((r = t), typeof t == 'function')) Th(t) && (l = 1)
    else if (typeof t == 'string') l = 5
    else
        e: switch (t) {
            case yo:
                return Vi(n.children, i, o, e)
            case Bd:
                ;(l = 8), (i |= 8)
                break
            case of:
                return (
                    (t = jn(12, n, e, i | 2)),
                    (t.elementType = of),
                    (t.lanes = o),
                    t
                )
            case lf:
                return (
                    (t = jn(13, n, e, i)),
                    (t.elementType = lf),
                    (t.lanes = o),
                    t
                )
            case af:
                return (
                    (t = jn(19, n, e, i)),
                    (t.elementType = af),
                    (t.lanes = o),
                    t
                )
            case A0:
                return Yu(n, i, o, e)
            default:
                if (typeof t == 'object' && t !== null)
                    switch (t.$$typeof) {
                        case R0:
                            l = 10
                            break e
                        case j0:
                            l = 9
                            break e
                        case Ud:
                            l = 11
                            break e
                        case Yd:
                            l = 14
                            break e
                        case Gr:
                            ;(l = 16), (r = null)
                            break e
                    }
                throw Error(M(130, t == null ? t : typeof t, ''))
        }
    return (
        (e = jn(l, n, e, i)),
        (e.elementType = t),
        (e.type = r),
        (e.lanes = o),
        e
    )
}
function Vi(t, e, n, r) {
    return (t = jn(7, t, r, e)), (t.lanes = n), t
}
function Yu(t, e, n, r) {
    return (
        (t = jn(22, t, r, e)),
        (t.elementType = A0),
        (t.lanes = n),
        (t.stateNode = { isHidden: !1 }),
        t
    )
}
function Lc(t, e, n) {
    return (t = jn(6, t, null, e)), (t.lanes = n), t
}
function Rc(t, e, n) {
    return (
        (e = jn(4, t.children !== null ? t.children : [], t.key, e)),
        (e.lanes = n),
        (e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation,
        }),
        e
    )
}
function Qw(t, e, n, r, i) {
    ;(this.tag = e),
        (this.containerInfo = t),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = hc(0)),
        (this.expirationTimes = hc(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = hc(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null)
}
function Oh(t, e, n, r, i, o, l, a, s) {
    return (
        (t = new Qw(t, e, n, a, s)),
        e === 1 ? ((e = 1), o === !0 && (e |= 8)) : (e = 0),
        (o = jn(3, null, null, e)),
        (t.current = o),
        (o.stateNode = t),
        (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        uh(o),
        t
    )
}
function Kw(t, e, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
        $$typeof: _o,
        key: r == null ? null : '' + r,
        children: t,
        containerInfo: e,
        implementation: n,
    }
}
function Og(t) {
    if (!t) return _i
    t = t._reactInternals
    e: {
        if (ao(t) !== t || t.tag !== 1) throw Error(M(170))
        var e = t
        do {
            switch (e.tag) {
                case 3:
                    e = e.stateNode.context
                    break e
                case 1:
                    if (nn(e.type)) {
                        e =
                            e.stateNode
                                .__reactInternalMemoizedMergedChildContext
                        break e
                    }
            }
            e = e.return
        } while (e !== null)
        throw Error(M(171))
    }
    if (t.tag === 1) {
        var n = t.type
        if (nn(n)) return Ov(t, n, e)
    }
    return e
}
function Pg(t, e, n, r, i, o, l, a, s) {
    return (
        (t = Oh(n, r, !0, t, i, o, l, a, s)),
        (t.context = Og(null)),
        (n = t.current),
        (r = Gt()),
        (i = di(n)),
        (o = Rr(r, i)),
        (o.callback = e ?? null),
        ci(n, o, i),
        (t.current.lanes = i),
        ja(t, i, r),
        rn(t, r),
        t
    )
}
function Hu(t, e, n, r) {
    var i = e.current,
        o = Gt(),
        l = di(i)
    return (
        (n = Og(n)),
        e.context === null ? (e.context = n) : (e.pendingContext = n),
        (e = Rr(o, l)),
        (e.payload = { element: t }),
        (r = r === void 0 ? null : r),
        r !== null && (e.callback = r),
        (t = ci(i, e, l)),
        t !== null && (Jn(t, i, l, o), Ns(t, i, l)),
        l
    )
}
function gu(t) {
    if (((t = t.current), !t.child)) return null
    switch (t.child.tag) {
        case 5:
            return t.child.stateNode
        default:
            return t.child.stateNode
    }
}
function ym(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
        var n = t.retryLane
        t.retryLane = n !== 0 && n < e ? n : e
    }
}
function Ph(t, e) {
    ym(t, e), (t = t.alternate) && ym(t, e)
}
function Zw() {
    return null
}
var Eg =
    typeof reportError == 'function'
        ? reportError
        : function (t) {
              console.error(t)
          }
function Eh(t) {
    this._internalRoot = t
}
Xu.prototype.render = Eh.prototype.render = function (t) {
    var e = this._internalRoot
    if (e === null) throw Error(M(409))
    Hu(t, e, null, null)
}
Xu.prototype.unmount = Eh.prototype.unmount = function () {
    var t = this._internalRoot
    if (t !== null) {
        this._internalRoot = null
        var e = t.containerInfo
        eo(function () {
            Hu(null, t, null, null)
        }),
            (e[zr] = null)
    }
}
function Xu(t) {
    this._internalRoot = t
}
Xu.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
        var e = ov()
        t = { blockedOn: null, target: t, priority: e }
        for (var n = 0; n < Kr.length && e !== 0 && e < Kr[n].priority; n++);
        Kr.splice(n, 0, t), n === 0 && av(t)
    }
}
function Dh(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
}
function Gu(t) {
    return !(
        !t ||
        (t.nodeType !== 1 &&
            t.nodeType !== 9 &&
            t.nodeType !== 11 &&
            (t.nodeType !== 8 ||
                t.nodeValue !== ' react-mount-point-unstable '))
    )
}
function wm() {}
function qw(t, e, n, r, i) {
    if (i) {
        if (typeof r == 'function') {
            var o = r
            r = function () {
                var u = gu(l)
                o.call(u)
            }
        }
        var l = Pg(e, r, t, 0, null, !1, !1, '', wm)
        return (
            (t._reactRootContainer = l),
            (t[zr] = l.current),
            ha(t.nodeType === 8 ? t.parentNode : t),
            eo(),
            l
        )
    }
    for (; (i = t.lastChild); ) t.removeChild(i)
    if (typeof r == 'function') {
        var a = r
        r = function () {
            var u = gu(s)
            a.call(u)
        }
    }
    var s = Oh(t, 0, !1, null, null, !1, !1, '', wm)
    return (
        (t._reactRootContainer = s),
        (t[zr] = s.current),
        ha(t.nodeType === 8 ? t.parentNode : t),
        eo(function () {
            Hu(e, s, n, r)
        }),
        s
    )
}
function Qu(t, e, n, r, i) {
    var o = n._reactRootContainer
    if (o) {
        var l = o
        if (typeof i == 'function') {
            var a = i
            i = function () {
                var s = gu(l)
                a.call(s)
            }
        }
        Hu(e, l, t, i)
    } else l = qw(n, e, t, i, r)
    return gu(l)
}
rv = function (t) {
    switch (t.tag) {
        case 3:
            var e = t.stateNode
            if (e.current.memoizedState.isDehydrated) {
                var n = El(e.pendingLanes)
                n !== 0 &&
                    (Gd(e, n | 1),
                    rn(e, Je()),
                    !(de & 6) && ((Jo = Je() + 500), Ci()))
            }
            break
        case 13:
            eo(function () {
                var r = Ir(t, 1)
                if (r !== null) {
                    var i = Gt()
                    Jn(r, t, 1, i)
                }
            }),
                Ph(t, 1)
    }
}
Qd = function (t) {
    if (t.tag === 13) {
        var e = Ir(t, 134217728)
        if (e !== null) {
            var n = Gt()
            Jn(e, t, 134217728, n)
        }
        Ph(t, 134217728)
    }
}
iv = function (t) {
    if (t.tag === 13) {
        var e = di(t),
            n = Ir(t, e)
        if (n !== null) {
            var r = Gt()
            Jn(n, t, e, r)
        }
        Ph(t, e)
    }
}
ov = function () {
    return ve
}
lv = function (t, e) {
    var n = ve
    try {
        return (ve = t), e()
    } finally {
        ve = n
    }
}
gf = function (t, e, n) {
    switch (e) {
        case 'input':
            if ((cf(t, n), (e = n.name), n.type === 'radio' && e != null)) {
                for (n = t; n.parentNode; ) n = n.parentNode
                for (
                    n = n.querySelectorAll(
                        'input[name=' +
                            JSON.stringify('' + e) +
                            '][type="radio"]',
                    ),
                        e = 0;
                    e < n.length;
                    e++
                ) {
                    var r = n[e]
                    if (r !== t && r.form === t.form) {
                        var i = bu(r)
                        if (!i) throw Error(M(90))
                        I0(r), cf(r, i)
                    }
                }
            }
            break
        case 'textarea':
            b0(t, n)
            break
        case 'select':
            ;(e = n.value), e != null && Ao(t, !!n.multiple, e, !1)
    }
}
H0 = Sh
X0 = eo
var Jw = { usingClientEntryPoint: !1, Events: [za, ko, bu, U0, Y0, Sh] },
    xl = {
        findFiberByHostInstance: Ai,
        bundleType: 0,
        version: '18.3.1',
        rendererPackageName: 'react-dom',
    },
    ex = {
        bundleType: xl.bundleType,
        version: xl.version,
        rendererPackageName: xl.rendererPackageName,
        rendererConfig: xl.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Vr.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (t) {
            return (t = K0(t)), t === null ? null : t.stateNode
        },
        findFiberByHostInstance: xl.findFiberByHostInstance || Zw,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var ss = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!ss.isDisabled && ss.supportsFiber)
        try {
            ;(Au = ss.inject(ex)), (gr = ss)
        } catch {}
}
Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jw
Cn.createPortal = function (t, e) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
    if (!Dh(e)) throw Error(M(200))
    return Kw(t, e, null, n)
}
Cn.createRoot = function (t, e) {
    if (!Dh(t)) throw Error(M(299))
    var n = !1,
        r = '',
        i = Eg
    return (
        e != null &&
            (e.unstable_strictMode === !0 && (n = !0),
            e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
            e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
        (e = Oh(t, 1, !1, null, null, n, !1, r, i)),
        (t[zr] = e.current),
        ha(t.nodeType === 8 ? t.parentNode : t),
        new Eh(e)
    )
}
Cn.findDOMNode = function (t) {
    if (t == null) return null
    if (t.nodeType === 1) return t
    var e = t._reactInternals
    if (e === void 0)
        throw typeof t.render == 'function'
            ? Error(M(188))
            : ((t = Object.keys(t).join(',')), Error(M(268, t)))
    return (t = K0(e)), (t = t === null ? null : t.stateNode), t
}
Cn.flushSync = function (t) {
    return eo(t)
}
Cn.hydrate = function (t, e, n) {
    if (!Gu(e)) throw Error(M(200))
    return Qu(null, t, e, !0, n)
}
Cn.hydrateRoot = function (t, e, n) {
    if (!Dh(t)) throw Error(M(405))
    var r = (n != null && n.hydratedSources) || null,
        i = !1,
        o = '',
        l = Eg
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (i = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (e = Pg(e, null, t, 1, n ?? null, i, !1, o, l)),
        (t[zr] = e.current),
        ha(t),
        r)
    )
        for (t = 0; t < r.length; t++)
            (n = r[t]),
                (i = n._getVersion),
                (i = i(n._source)),
                e.mutableSourceEagerHydrationData == null
                    ? (e.mutableSourceEagerHydrationData = [n, i])
                    : e.mutableSourceEagerHydrationData.push(n, i)
    return new Xu(e)
}
Cn.render = function (t, e, n) {
    if (!Gu(e)) throw Error(M(200))
    return Qu(null, t, e, !1, n)
}
Cn.unmountComponentAtNode = function (t) {
    if (!Gu(t)) throw Error(M(40))
    return t._reactRootContainer
        ? (eo(function () {
              Qu(null, null, t, !1, function () {
                  ;(t._reactRootContainer = null), (t[zr] = null)
              })
          }),
          !0)
        : !1
}
Cn.unstable_batchedUpdates = Sh
Cn.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
    if (!Gu(n)) throw Error(M(200))
    if (t == null || t._reactInternals === void 0) throw Error(M(38))
    return Qu(t, e, n, !1, r)
}
Cn.version = '18.3.1-next-f1338f8080-20240426'
function Dg() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dg)
        } catch (t) {
            console.error(t)
        }
}
Dg(), (D0.exports = Cn)
var tx = D0.exports,
    xm = tx
;(nf.createRoot = xm.createRoot), (nf.hydrateRoot = xm.hydrateRoot)
var Ng = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0,
    },
    Sm = oi.createContext && oi.createContext(Ng),
    nx = ['attr', 'size', 'title']
function rx(t, e) {
    if (t == null) return {}
    var n = ix(t, e),
        r,
        i
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t)
        for (i = 0; i < o.length; i++)
            (r = o[i]),
                !(e.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (n[r] = t[r])
    }
    return n
}
function ix(t, e) {
    if (t == null) return {}
    var n = {}
    for (var r in t)
        if (Object.prototype.hasOwnProperty.call(t, r)) {
            if (e.indexOf(r) >= 0) continue
            n[r] = t[r]
        }
    return n
}
function _u() {
    return (
        (_u = Object.assign
            ? Object.assign.bind()
            : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                      var n = arguments[e]
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (t[r] = n[r])
                  }
                  return t
              }),
        _u.apply(this, arguments)
    )
}
function km(t, e) {
    var n = Object.keys(t)
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t)
        e &&
            (r = r.filter(function (i) {
                return Object.getOwnPropertyDescriptor(t, i).enumerable
            })),
            n.push.apply(n, r)
    }
    return n
}
function yu(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {}
        e % 2
            ? km(Object(n), !0).forEach(function (r) {
                  ox(t, r, n[r])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : km(Object(n)).forEach(function (r) {
                    Object.defineProperty(
                        t,
                        r,
                        Object.getOwnPropertyDescriptor(n, r),
                    )
                })
    }
    return t
}
function ox(t, e, n) {
    return (
        (e = lx(e)),
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    )
}
function lx(t) {
    var e = ax(t, 'string')
    return typeof e == 'symbol' ? e : e + ''
}
function ax(t, e) {
    if (typeof t != 'object' || !t) return t
    var n = t[Symbol.toPrimitive]
    if (n !== void 0) {
        var r = n.call(t, e || 'default')
        if (typeof r != 'object') return r
        throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (e === 'string' ? String : Number)(t)
}
function Mg(t) {
    return (
        t &&
        t.map((e, n) =>
            oi.createElement(e.tag, yu({ key: n }, e.attr), Mg(e.child)),
        )
    )
}
function Lg(t) {
    return e =>
        oi.createElement(sx, _u({ attr: yu({}, t.attr) }, e), Mg(t.child))
}
function sx(t) {
    var e = n => {
        var { attr: r, size: i, title: o } = t,
            l = rx(t, nx),
            a = i || n.size || '1em',
            s
        return (
            n.className && (s = n.className),
            t.className && (s = (s ? s + ' ' : '') + t.className),
            oi.createElement(
                'svg',
                _u(
                    {
                        stroke: 'currentColor',
                        fill: 'currentColor',
                        strokeWidth: '0',
                    },
                    n.attr,
                    r,
                    l,
                    {
                        className: s,
                        style: yu(
                            yu({ color: t.color || n.color }, n.style),
                            t.style,
                        ),
                        height: a,
                        width: a,
                        xmlns: 'http://www.w3.org/2000/svg',
                    },
                ),
                o && oi.createElement('title', null, o),
                t.children,
            )
        )
    }
    return Sm !== void 0
        ? oi.createElement(Sm.Consumer, null, n => e(n))
        : e(Ng)
}
function Cm(t) {
    return Lg({
        tag: 'svg',
        attr: { viewBox: '0 0 512 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56z',
                },
                child: [],
            },
        ],
    })(t)
}
function Nh(t) {
    return O.jsx('section', {
        className: `section ${t.container ? 'container mx-auto px-4 md:px-0' : ''}`,
        children: t.children,
    })
}
const ux = () => {
        const t = [
                '/img/manhlinh-banner-01.JPG',
                '/img/manhlinh-banner-02.JPG',
            ],
            [e] = ze.useState(t[0])
        return O.jsx(Nh, {
            children: O.jsxs('div', {
                className: 'h-screen',
                children: [
                    O.jsx('div', {
                        className: 'h-full transition-all block md:hidden',
                        style: {
                            background: `url(${e})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center 20%',
                        },
                        children: O.jsx('div', {
                            className:
                                'relative w-full h-full flex flex-wrap items-start md:items-end justify-center pt-16 md:p-0',
                            children: O.jsxs('div', {
                                className:
                                    'text-center font-viao text-white md:text-theme-main',
                                children: [
                                    O.jsx('div', {
                                        className:
                                            "text-2xl font-bold font-['Montserrat']",
                                        children: 'SAVE THE DATE',
                                    }),
                                    O.jsx('div', { className: 'pt-4 md:pt-8' }),
                                    O.jsxs('div', {
                                        className: 'text-4xl md:text-6xl flex',
                                        children: [
                                            'Đức Mạnh ',
                                            O.jsx('span', {
                                                className: 'ml-1 md:ml-4',
                                            }),
                                            O.jsx(Cm, { color: 'white' }),
                                            O.jsx('span', {
                                                className: 'mr-1 md:mr-3',
                                            }),
                                            'Thùy Linh',
                                        ],
                                    }),
                                    O.jsx('div', { className: 'pt-4 md:pt-8' }),
                                    O.jsx('div', {
                                        className: ' px-4 md:px-0',
                                        children: O.jsx('div', {
                                            className:
                                                "font-viao font-semibold font-['Montserrat'] text-3xl md:text-4xl px-8 py-2 md:py-4 border-2 border-white shadow-2xl focus:bg-white focus:text-transparent active:bg-white active:text-border-theme-main transition-all",
                                            children: '22.09.2024',
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    O.jsx('div', {
                        className: 'h-full transition-all hidden md:block',
                        style: {
                            background: `url(${t[1]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center 40%',
                        },
                        children: O.jsx('div', {
                            className:
                                'relative w-full h-full flex flex-wrap items-end justify-center pb-20',
                            children: O.jsxs('div', {
                                className:
                                    'text-center font-viao text-theme-bg',
                                children: [
                                    O.jsx('div', {
                                        className:
                                            "text-2xl font-bold font-['Montserrat']",
                                        children: 'SAVE THE DATE',
                                    }),
                                    O.jsx('div', { className: 'pt-4 md:pt-8' }),
                                    O.jsxs('div', {
                                        className: 'text-4xl md:text-6xl flex',
                                        children: [
                                            'Đức Mạnh ',
                                            O.jsx('span', {
                                                className: 'ml-1 md:ml-4',
                                            }),
                                            O.jsx(Cm, { color: '#fff9f0' }),
                                            O.jsx('span', {
                                                className: 'mr-1 md:mr-3',
                                            }),
                                            'Thùy Linh',
                                        ],
                                    }),
                                    O.jsx('div', { className: 'pt-4 md:pt-8' }),
                                    O.jsx('div', {
                                        className: ' px-4 md:px-0',
                                        children: O.jsx('div', {
                                            className:
                                                "font-viao font-semibold font-['Montserrat'] text-3xl md:text-4xl px-8 py-2 md:py-4 border-2 border-theme-bg shadow-2xl focus:bg-white focus:text-transparent active:bg-white active:text-border-theme-main transition-all",
                                            children: '22.09.2024',
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                ],
            }),
        })
    },
    cx = () =>
        O.jsxs(Nh, {
            container: !0,
            children: [
                O.jsxs('div', {
                    className: 'hidden md:block',
                    children: [
                        O.jsx('div', {
                            className: 'flex justify-center items-center',
                            children: O.jsx('div', {
                                children: O.jsx('div', {
                                    className: 'flex justify-center',
                                    children: O.jsx('img', {
                                        alt: '',
                                        src: '/img/manhlinh-03.JPG',
                                        className:
                                            'w-full md:w-1/2 shadow-lg rounded-lg',
                                    }),
                                }),
                            }),
                        }),
                        O.jsx('div', { className: 'pt-12 md:pt-24' }),
                        O.jsx('div', {
                            className:
                                "text-center text-theme-main font-['Montserrat'] font-bold text-xl md:text-3xl",
                            children: 'We are getting married',
                        }),
                        O.jsx('div', { className: 'pt-8' }),
                        O.jsx('div', {
                            className:
                                'w-full flex justify-center items-center',
                            children: O.jsx('div', {
                                className:
                                    'text-justify text-theme-second w-1/2',
                                children:
                                    'Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng tôi. Chúng tôi muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết chúng tôi rất hạnh phúc khi thấy bạn ở đó. Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp mà bạn đã dành cho chúng tôi!',
                            }),
                        }),
                        O.jsx('div', { className: 'pt-8 md:pt-16' }),
                        O.jsx('div', {
                            className:
                                "text-center text-theme-main font-['Hurricane'] italic text-4xl md:text-5xl",
                            children: 'Đức Mạnh & Thùy Linh',
                        }),
                    ],
                }),
                O.jsxs('div', {
                    className:
                        'flex flex-col justify-center md:hidden min-h-screen',
                    children: [
                        O.jsx('div', {
                            className: 'flex justify-center items-center',
                            children: O.jsx('img', {
                                alt: '',
                                src: '/img/manhlinh-03.JPG',
                                className: 'shadow-lg rounded-lg',
                            }),
                        }),
                        O.jsx('div', { className: 'pt-12 md:pt-24' }),
                        O.jsx('div', {
                            className:
                                "text-center text-theme-main font-['Montserrat'] font-bold text-xl md:text-3xl",
                            children: 'We are getting married',
                        }),
                        O.jsx('div', { className: 'pt-8 md:pt-16' }),
                        O.jsx('div', {
                            className:
                                "text-justify text-theme-second font-['Playfair+Display']",
                            children:
                                'Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng tôi. Chúng tôi muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết chúng tôi rất hạnh phúc khi thấy bạn ở đó. Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp mà bạn đã dành cho chúng tôi!',
                        }),
                        O.jsx('div', { className: 'pt-8 md:pt-16' }),
                        O.jsx('div', {
                            className:
                                "text-center text-theme-main font-['Hurricane'] italic text-4xl md:text-5xl",
                            children: 'Đức Mạnh & Thùy Linh',
                        }),
                    ],
                }),
            ],
        })
function Rg(t) {
    var e,
        n,
        r = ''
    if (typeof t == 'string' || typeof t == 'number') r += t
    else if (typeof t == 'object')
        if (Array.isArray(t)) {
            var i = t.length
            for (e = 0; e < i; e++)
                t[e] && (n = Rg(t[e])) && (r && (r += ' '), (r += n))
        } else for (n in t) t[n] && (r && (r += ' '), (r += n))
    return r
}
function Ku() {
    for (var t, e, n = 0, r = '', i = arguments.length; n < i; n++)
        (t = arguments[n]) && (e = Rg(t)) && (r && (r += ' '), (r += e))
    return r
}
const fx = (t, e, n, r) => {
        if (
            n === 'length' ||
            n === 'prototype' ||
            n === 'arguments' ||
            n === 'caller'
        )
            return
        const i = Object.getOwnPropertyDescriptor(t, n),
            o = Object.getOwnPropertyDescriptor(e, n)
        ;(!dx(i, o) && r) || Object.defineProperty(t, n, o)
    },
    dx = function (t, e) {
        return (
            t === void 0 ||
            t.configurable ||
            (t.writable === e.writable &&
                t.enumerable === e.enumerable &&
                t.configurable === e.configurable &&
                (t.writable || t.value === e.value))
        )
    },
    hx = (t, e) => {
        const n = Object.getPrototypeOf(e)
        n !== Object.getPrototypeOf(t) && Object.setPrototypeOf(t, n)
    },
    px = (t, e) => `/* Wrapped ${t}*/
${e}`,
    mx = Object.getOwnPropertyDescriptor(Function.prototype, 'toString'),
    vx = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name'),
    gx = (t, e, n) => {
        const r = n === '' ? '' : `with ${n.trim()}() `,
            i = px.bind(null, r, e.toString())
        Object.defineProperty(i, 'name', vx),
            Object.defineProperty(t, 'toString', { ...mx, value: i })
    },
    _x = (t, e, { ignoreNonConfigurable: n = !1 } = {}) => {
        const { name: r } = t
        for (const i of Reflect.ownKeys(e)) fx(t, e, i, n)
        return hx(t, e), gx(t, e, r), t
    }
var yx = _x,
    Kf = { exports: {} },
    wx = () => {
        const t = {}
        return (
            (t.promise = new Promise((e, n) => {
                ;(t.resolve = e), (t.reject = n)
            })),
            t
        )
    }
;(function (t, e) {
    var n =
            (Ya && Ya.__awaiter) ||
            function (l, a, s, u) {
                return new (s || (s = Promise))(function (c, d) {
                    function f(p) {
                        try {
                            g(u.next(p))
                        } catch (x) {
                            d(x)
                        }
                    }
                    function h(p) {
                        try {
                            g(u.throw(p))
                        } catch (x) {
                            d(x)
                        }
                    }
                    function g(p) {
                        p.done
                            ? c(p.value)
                            : new s(function (x) {
                                  x(p.value)
                              }).then(f, h)
                    }
                    g((u = u.apply(l, a || [])).next())
                })
            },
        r =
            (Ya && Ya.__importDefault) ||
            function (l) {
                return l && l.__esModule ? l : { default: l }
            }
    Object.defineProperty(e, '__esModule', { value: !0 })
    const i = r(wx)
    function o(l, a = 'maxAge') {
        let s, u, c
        const d = () =>
                n(this, void 0, void 0, function* () {
                    if (s !== void 0) return
                    const g = p =>
                        n(this, void 0, void 0, function* () {
                            c = i.default()
                            const x = p[1][a] - Date.now()
                            if (x <= 0) {
                                l.delete(p[0]), c.resolve()
                                return
                            }
                            return (
                                (s = p[0]),
                                (u = setTimeout(() => {
                                    l.delete(p[0]), c && c.resolve()
                                }, x)),
                                typeof u.unref == 'function' && u.unref(),
                                c.promise
                            )
                        })
                    try {
                        for (const p of l) yield g(p)
                    } catch {}
                    s = void 0
                }),
            f = () => {
                ;(s = void 0),
                    u !== void 0 && (clearTimeout(u), (u = void 0)),
                    c !== void 0 && (c.reject(void 0), (c = void 0))
            },
            h = l.set.bind(l)
        return (
            (l.set = (g, p) => {
                l.has(g) && l.delete(g)
                const x = h(g, p)
                return s && s === g && f(), d(), x
            }),
            d(),
            l
        )
    }
    ;(e.default = o), (t.exports = o), (t.exports.default = o)
})(Kf, Kf.exports)
var xx = Kf.exports
const Sx = yx,
    kx = xx,
    jc = new WeakMap(),
    jg = new WeakMap(),
    wu = (t, { cacheKey: e, cache: n = new Map(), maxAge: r } = {}) => {
        typeof r == 'number' && kx(n)
        const i = function (...o) {
            const l = e ? e(o) : o[0],
                a = n.get(l)
            if (a) return a.data
            const s = t.apply(this, o)
            return (
                n.set(l, {
                    data: s,
                    maxAge: r ? Date.now() + r : Number.POSITIVE_INFINITY,
                }),
                s
            )
        }
        return Sx(i, t, { ignoreNonConfigurable: !0 }), jg.set(i, n), i
    }
wu.decorator =
    (t = {}) =>
    (e, n, r) => {
        const i = e[n]
        if (typeof i != 'function')
            throw new TypeError('The decorated value must be a function')
        delete r.value,
            delete r.writable,
            (r.get = function () {
                if (!jc.has(this)) {
                    const o = wu(i, t)
                    return jc.set(this, o), o
                }
                return jc.get(this)
            })
    }
wu.clear = t => {
    const e = jg.get(t)
    if (!e) throw new TypeError("Can't clear a function that was not memoized!")
    if (typeof e.clear != 'function')
        throw new TypeError("The cache Map can't be cleared!")
    e.clear()
}
var Cx = wu
const Ag = g0(Cx)
function Tx(t) {
    return typeof t == 'string'
}
function Ox(t, e, n) {
    return n.indexOf(t) === e
}
function Px(t) {
    return t.toLowerCase() === t
}
function Tm(t) {
    return t.indexOf(',') === -1 ? t : t.split(',')
}
function Zf(t) {
    if (!t) return t
    if (t === 'C' || t === 'posix' || t === 'POSIX') return 'en-US'
    if (t.indexOf('.') !== -1) {
        var e = t.split('.')[0],
            n = e === void 0 ? '' : e
        return Zf(n)
    }
    if (t.indexOf('@') !== -1) {
        var r = t.split('@')[0],
            n = r === void 0 ? '' : r
        return Zf(n)
    }
    if (t.indexOf('-') === -1 || !Px(t)) return t
    var i = t.split('-'),
        o = i[0],
        l = i[1],
        a = l === void 0 ? '' : l
    return ''.concat(o, '-').concat(a.toUpperCase())
}
function Ex(t) {
    var e = t === void 0 ? {} : t,
        n = e.useFallbackLocale,
        r = n === void 0 ? !0 : n,
        i = e.fallbackLocale,
        o = i === void 0 ? 'en-US' : i,
        l = []
    if (typeof navigator < 'u') {
        for (
            var a = navigator.languages || [], s = [], u = 0, c = a;
            u < c.length;
            u++
        ) {
            var d = c[u]
            s = s.concat(Tm(d))
        }
        var f = navigator.language,
            h = f && Tm(f)
        l = l.concat(s, h)
    }
    return r && l.push(o), l.filter(Tx).map(Zf).filter(Ox)
}
var Dx = Ag(Ex, { cacheKey: JSON.stringify })
function Nx(t) {
    return Dx(t)[0] || null
}
var zg = Ag(Nx, { cacheKey: JSON.stringify })
function $r(t, e, n) {
    return function (i, o) {
        o === void 0 && (o = n)
        var l = t(i) + o
        return e(l)
    }
}
function Fa(t) {
    return function (n) {
        return new Date(t(n).getTime() - 1)
    }
}
function ba(t, e) {
    return function (r) {
        return [t(r), e(r)]
    }
}
function Le(t) {
    if (t instanceof Date) return t.getFullYear()
    if (typeof t == 'number') return t
    var e = parseInt(t, 10)
    if (typeof t == 'string' && !isNaN(e)) return e
    throw new Error('Failed to get year from date: '.concat(t, '.'))
}
function Ti(t) {
    if (t instanceof Date) return t.getMonth()
    throw new Error('Failed to get month from date: '.concat(t, '.'))
}
function Zu(t) {
    if (t instanceof Date) return t.getDate()
    throw new Error('Failed to get year from date: '.concat(t, '.'))
}
function ul(t) {
    var e = Le(t),
        n = e + ((-e + 1) % 100),
        r = new Date()
    return r.setFullYear(n, 0, 1), r.setHours(0, 0, 0, 0), r
}
var Mx = $r(Le, ul, -100),
    Ig = $r(Le, ul, 100),
    Mh = Fa(Ig),
    Lx = $r(Le, Mh, -100),
    Fg = ba(ul, Mh)
function Oi(t) {
    var e = Le(t),
        n = e + ((-e + 1) % 10),
        r = new Date()
    return r.setFullYear(n, 0, 1), r.setHours(0, 0, 0, 0), r
}
var bg = $r(Le, Oi, -10),
    Lh = $r(Le, Oi, 10),
    qu = Fa(Lh),
    Wg = $r(Le, qu, -10),
    Vg = ba(Oi, qu)
function cl(t) {
    var e = Le(t),
        n = new Date()
    return n.setFullYear(e, 0, 1), n.setHours(0, 0, 0, 0), n
}
var $g = $r(Le, cl, -1),
    Rh = $r(Le, cl, 1),
    Ju = Fa(Rh),
    Bg = $r(Le, Ju, -1),
    Rx = ba(cl, Ju)
function jh(t, e) {
    return function (r, i) {
        i === void 0 && (i = e)
        var o = Le(r),
            l = Ti(r) + i,
            a = new Date()
        return a.setFullYear(o, l, 1), a.setHours(0, 0, 0, 0), t(a)
    }
}
function so(t) {
    var e = Le(t),
        n = Ti(t),
        r = new Date()
    return r.setFullYear(e, n, 1), r.setHours(0, 0, 0, 0), r
}
var Ug = jh(so, -1),
    Ah = jh(so, 1),
    Wa = Fa(Ah),
    Yg = jh(Wa, -1),
    jx = ba(so, Wa)
function Ax(t, e) {
    return function (r, i) {
        i === void 0 && (i = e)
        var o = Le(r),
            l = Ti(r),
            a = Zu(r) + i,
            s = new Date()
        return s.setFullYear(o, l, a), s.setHours(0, 0, 0, 0), t(s)
    }
}
function Va(t) {
    var e = Le(t),
        n = Ti(t),
        r = Zu(t),
        i = new Date()
    return i.setFullYear(e, n, r), i.setHours(0, 0, 0, 0), i
}
var zx = Ax(Va, 1),
    zh = Fa(zx),
    Ix = ba(Va, zh)
function Hg(t) {
    return Zu(Wa(t))
}
var Sl,
    at = {
        GREGORY: 'gregory',
        HEBREW: 'hebrew',
        ISLAMIC: 'islamic',
        ISO_8601: 'iso8601',
    },
    Fx =
        ((Sl = {}),
        (Sl[at.GREGORY] = [
            'en-CA',
            'en-US',
            'es-AR',
            'es-BO',
            'es-CL',
            'es-CO',
            'es-CR',
            'es-DO',
            'es-EC',
            'es-GT',
            'es-HN',
            'es-MX',
            'es-NI',
            'es-PA',
            'es-PE',
            'es-PR',
            'es-SV',
            'es-VE',
            'pt-BR',
        ]),
        (Sl[at.HEBREW] = ['he', 'he-IL']),
        (Sl[at.ISLAMIC] = [
            'ar',
            'ar-AE',
            'ar-BH',
            'ar-DZ',
            'ar-EG',
            'ar-IQ',
            'ar-JO',
            'ar-KW',
            'ar-LY',
            'ar-OM',
            'ar-QA',
            'ar-SA',
            'ar-SD',
            'ar-SY',
            'ar-YE',
            'dv',
            'dv-MV',
            'ps',
            'ps-AR',
        ]),
        Sl),
    Ih = [0, 1, 2, 3, 4, 5, 6],
    Ac = new Map()
function bx(t) {
    return function (n, r) {
        var i = n || zg()
        Ac.has(i) || Ac.set(i, new Map())
        var o = Ac.get(i)
        return (
            o.has(t) ||
                o.set(t, new Intl.DateTimeFormat(i || void 0, t).format),
            o.get(t)(r)
        )
    }
}
function Wx(t) {
    var e = new Date(t)
    return new Date(e.setHours(12))
}
function uo(t) {
    return function (e, n) {
        return bx(t)(e, Wx(n))
    }
}
var Vx = { day: 'numeric' },
    $x = { day: 'numeric', month: 'long', year: 'numeric' },
    Bx = { month: 'long' },
    Ux = { month: 'long', year: 'numeric' },
    Yx = { weekday: 'short' },
    Hx = { weekday: 'long' },
    Xx = { year: 'numeric' },
    Gx = uo(Vx),
    Qx = uo($x),
    Kx = uo(Bx),
    Xg = uo(Ux),
    Zx = uo(Yx),
    qx = uo(Hx),
    ec = uo(Xx),
    Jx = Ih[0],
    eS = Ih[5],
    Om = Ih[6]
function Sa(t, e) {
    e === void 0 && (e = at.ISO_8601)
    var n = t.getDay()
    switch (e) {
        case at.ISO_8601:
            return (n + 6) % 7
        case at.ISLAMIC:
            return (n + 1) % 7
        case at.HEBREW:
        case at.GREGORY:
            return n
        default:
            throw new Error('Unsupported calendar type.')
    }
}
function tS(t) {
    var e = ul(t)
    return Le(e)
}
function nS(t) {
    var e = Oi(t)
    return Le(e)
}
function qf(t, e) {
    e === void 0 && (e = at.ISO_8601)
    var n = Le(t),
        r = Ti(t),
        i = t.getDate() - Sa(t, e)
    return new Date(n, r, i)
}
function rS(t, e) {
    e === void 0 && (e = at.ISO_8601)
    var n = e === at.GREGORY ? at.GREGORY : at.ISO_8601,
        r = qf(t, e),
        i = Le(t) + 1,
        o,
        l
    do (o = new Date(i, 0, n === at.ISO_8601 ? 4 : 1)), (l = qf(o, e)), (i -= 1)
    while (t < l)
    return Math.round((r.getTime() - l.getTime()) / (864e5 * 7)) + 1
}
function $i(t, e) {
    switch (t) {
        case 'century':
            return ul(e)
        case 'decade':
            return Oi(e)
        case 'year':
            return cl(e)
        case 'month':
            return so(e)
        case 'day':
            return Va(e)
        default:
            throw new Error('Invalid rangeType: '.concat(t))
    }
}
function iS(t, e) {
    switch (t) {
        case 'century':
            return Mx(e)
        case 'decade':
            return bg(e)
        case 'year':
            return $g(e)
        case 'month':
            return Ug(e)
        default:
            throw new Error('Invalid rangeType: '.concat(t))
    }
}
function Gg(t, e) {
    switch (t) {
        case 'century':
            return Ig(e)
        case 'decade':
            return Lh(e)
        case 'year':
            return Rh(e)
        case 'month':
            return Ah(e)
        default:
            throw new Error('Invalid rangeType: '.concat(t))
    }
}
function oS(t, e) {
    switch (t) {
        case 'decade':
            return bg(e, -100)
        case 'year':
            return $g(e, -10)
        case 'month':
            return Ug(e, -12)
        default:
            throw new Error('Invalid rangeType: '.concat(t))
    }
}
function lS(t, e) {
    switch (t) {
        case 'decade':
            return Lh(e, 100)
        case 'year':
            return Rh(e, 10)
        case 'month':
            return Ah(e, 12)
        default:
            throw new Error('Invalid rangeType: '.concat(t))
    }
}
function Qg(t, e) {
    switch (t) {
        case 'century':
            return Mh(e)
        case 'decade':
            return qu(e)
        case 'year':
            return Ju(e)
        case 'month':
            return Wa(e)
        case 'day':
            return zh(e)
        default:
            throw new Error('Invalid rangeType: '.concat(t))
    }
}
function aS(t, e) {
    switch (t) {
        case 'century':
            return Lx(e)
        case 'decade':
            return Wg(e)
        case 'year':
            return Bg(e)
        case 'month':
            return Yg(e)
        default:
            throw new Error('Invalid rangeType: '.concat(t))
    }
}
function sS(t, e) {
    switch (t) {
        case 'decade':
            return Wg(e, -100)
        case 'year':
            return Bg(e, -10)
        case 'month':
            return Yg(e, -12)
        default:
            throw new Error('Invalid rangeType: '.concat(t))
    }
}
function Pm(t, e) {
    switch (t) {
        case 'century':
            return Fg(e)
        case 'decade':
            return Vg(e)
        case 'year':
            return Rx(e)
        case 'month':
            return jx(e)
        case 'day':
            return Ix(e)
        default:
            throw new Error('Invalid rangeType: '.concat(t))
    }
}
function uS(t, e, n) {
    var r = [e, n].sort(function (i, o) {
        return i.getTime() - o.getTime()
    })
    return [$i(t, r[0]), Qg(t, r[1])]
}
function Kg(t, e, n) {
    return (
        e === void 0 && (e = ec),
        n
            .map(function (r) {
                return e(t, r)
            })
            .join(' – ')
    )
}
function cS(t, e, n) {
    return Kg(t, e, Fg(n))
}
function Zg(t, e, n) {
    return Kg(t, e, Vg(n))
}
function fS(t) {
    return t.getDay() === new Date().getDay()
}
function qg(t, e) {
    e === void 0 && (e = at.ISO_8601)
    var n = t.getDay()
    switch (e) {
        case at.ISLAMIC:
        case at.HEBREW:
            return n === eS || n === Om
        case at.ISO_8601:
        case at.GREGORY:
            return n === Om || n === Jx
        default:
            throw new Error('Unsupported calendar type.')
    }
}
var ur = 'react-calendar__navigation'
function dS(t) {
    var e = t.activeStartDate,
        n = t.drillUp,
        r = t.formatMonthYear,
        i = r === void 0 ? Xg : r,
        o = t.formatYear,
        l = o === void 0 ? ec : o,
        a = t.locale,
        s = t.maxDate,
        u = t.minDate,
        c = t.navigationAriaLabel,
        d = c === void 0 ? '' : c,
        f = t.navigationAriaLive,
        h = t.navigationLabel,
        g = t.next2AriaLabel,
        p = g === void 0 ? '' : g,
        x = t.next2Label,
        v = x === void 0 ? '»' : x,
        m = t.nextAriaLabel,
        _ = m === void 0 ? '' : m,
        y = t.nextLabel,
        k = y === void 0 ? '›' : y,
        C = t.prev2AriaLabel,
        S = C === void 0 ? '' : C,
        T = t.prev2Label,
        D = T === void 0 ? '«' : T,
        P = t.prevAriaLabel,
        I = P === void 0 ? '' : P,
        L = t.prevLabel,
        U = L === void 0 ? '‹' : L,
        Y = t.setActiveStartDate,
        q = t.showDoubleView,
        W = t.view,
        V = t.views,
        N = V.indexOf(W) > 0,
        R = W !== 'century',
        w = iS(W, e),
        F = R ? oS(W, e) : void 0,
        K = Gg(W, e),
        $e = R ? lS(W, e) : void 0,
        le = (function () {
            if (w.getFullYear() < 0) return !0
            var Z = aS(W, e)
            return u && u >= Z
        })(),
        Ce =
            R &&
            (function () {
                if (F.getFullYear() < 0) return !0
                var Z = sS(W, e)
                return u && u >= Z
            })(),
        ge = s && s < K,
        he = R && s && s < $e
    function Ke() {
        Y(w, 'prev')
    }
    function Te() {
        Y(F, 'prev2')
    }
    function On() {
        Y(K, 'next')
    }
    function st() {
        Y($e, 'next2')
    }
    function Tt(Z) {
        var tt = (function () {
            switch (W) {
                case 'century':
                    return cS(a, l, Z)
                case 'decade':
                    return Zg(a, l, Z)
                case 'year':
                    return l(a, Z)
                case 'month':
                    return i(a, Z)
                default:
                    throw new Error('Invalid view: '.concat(W, '.'))
            }
        })()
        return h
            ? h({ date: Z, label: tt, locale: a || zg() || void 0, view: W })
            : tt
    }
    function ie() {
        var Z = ''.concat(ur, '__label')
        return O.jsxs('button', {
            'aria-label': d,
            'aria-live': f,
            className: Z,
            disabled: !N,
            onClick: n,
            style: { flexGrow: 1 },
            type: 'button',
            children: [
                O.jsx('span', {
                    className: ''
                        .concat(Z, '__labelText ')
                        .concat(Z, '__labelText--from'),
                    children: Tt(e),
                }),
                q
                    ? O.jsxs(O.Fragment, {
                          children: [
                              O.jsx('span', {
                                  className: ''.concat(Z, '__divider'),
                                  children: ' – ',
                              }),
                              O.jsx('span', {
                                  className: ''
                                      .concat(Z, '__labelText ')
                                      .concat(Z, '__labelText--to'),
                                  children: Tt(K),
                              }),
                          ],
                      })
                    : null,
            ],
        })
    }
    return O.jsxs('div', {
        className: ur,
        children: [
            D !== null && R
                ? O.jsx('button', {
                      'aria-label': S,
                      className: ''
                          .concat(ur, '__arrow ')
                          .concat(ur, '__prev2-button'),
                      disabled: Ce,
                      onClick: Te,
                      type: 'button',
                      children: D,
                  })
                : null,
            U !== null &&
                O.jsx('button', {
                    'aria-label': I,
                    className: ''
                        .concat(ur, '__arrow ')
                        .concat(ur, '__prev-button'),
                    disabled: le,
                    onClick: Ke,
                    type: 'button',
                    children: U,
                }),
            ie(),
            k !== null &&
                O.jsx('button', {
                    'aria-label': _,
                    className: ''
                        .concat(ur, '__arrow ')
                        .concat(ur, '__next-button'),
                    disabled: ge,
                    onClick: On,
                    type: 'button',
                    children: k,
                }),
            v !== null && R
                ? O.jsx('button', {
                      'aria-label': p,
                      className: ''
                          .concat(ur, '__arrow ')
                          .concat(ur, '__next2-button'),
                      disabled: he,
                      onClick: st,
                      type: 'button',
                      children: v,
                  })
                : null,
        ],
    })
}
var No = function () {
        return (
            (No =
                Object.assign ||
                function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++) {
                        e = arguments[n]
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) &&
                                (t[i] = e[i])
                    }
                    return t
                }),
            No.apply(this, arguments)
        )
    },
    hS = function (t, e) {
        var n = {}
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
                e.indexOf(r) < 0 &&
                (n[r] = t[r])
        if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
                var i = 0, r = Object.getOwnPropertySymbols(t);
                i < r.length;
                i++
            )
                e.indexOf(r[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                    (n[r[i]] = t[r[i]])
        return n
    }
function Em(t) {
    return ''.concat(t, '%')
}
function Fh(t) {
    var e = t.children,
        n = t.className,
        r = t.count,
        i = t.direction,
        o = t.offset,
        l = t.style,
        a = t.wrap,
        s = hS(t, [
            'children',
            'className',
            'count',
            'direction',
            'offset',
            'style',
            'wrap',
        ])
    return O.jsx(
        'div',
        No(
            {
                className: n,
                style: No(
                    {
                        display: 'flex',
                        flexDirection: i,
                        flexWrap: a ? 'wrap' : 'nowrap',
                    },
                    l,
                ),
            },
            s,
            {
                children: ze.Children.map(e, function (u, c) {
                    var d = o && c === 0 ? Em((100 * o) / r) : null
                    return ze.cloneElement(
                        u,
                        No(No({}, u.props), {
                            style: {
                                flexBasis: Em(100 / r),
                                flexShrink: 0,
                                flexGrow: 0,
                                overflow: 'hidden',
                                marginLeft: d,
                                marginInlineStart: d,
                                marginInlineEnd: 0,
                            },
                        }),
                    )
                }),
            },
        ),
    )
}
function pS(t, e, n) {
    return e && e > t ? e : n && n < t ? n : t
}
function ka(t, e) {
    return e[0] <= t && e[1] >= t
}
function mS(t, e) {
    return t[0] <= e[0] && t[1] >= e[1]
}
function Jg(t, e) {
    return ka(t[0], e) || ka(t[1], e)
}
function Dm(t, e, n) {
    var r = Jg(e, t),
        i = []
    if (r) {
        i.push(n)
        var o = ka(t[0], e),
            l = ka(t[1], e)
        o && i.push(''.concat(n, 'Start')),
            l && i.push(''.concat(n, 'End')),
            o && l && i.push(''.concat(n, 'BothEnds'))
    }
    return i
}
function vS(t) {
    return Array.isArray(t) ? t[0] !== null && t[1] !== null : t !== null
}
function gS(t) {
    if (!t) throw new Error('args is required')
    var e = t.value,
        n = t.date,
        r = t.hover,
        i = 'react-calendar__tile',
        o = [i]
    if (!n) return o
    var l = new Date(),
        a = (function () {
            if (Array.isArray(n)) return n
            var h = t.dateType
            if (!h)
                throw new Error(
                    'dateType is required when date is not an array of two dates',
                )
            return Pm(h, n)
        })()
    if ((ka(l, a) && o.push(''.concat(i, '--now')), !e || !vS(e))) return o
    var s = (function () {
        if (Array.isArray(e)) return e
        var h = t.valueType
        if (!h)
            throw new Error(
                'valueType is required when value is not an array of two dates',
            )
        return Pm(h, e)
    })()
    mS(s, a)
        ? o.push(''.concat(i, '--active'))
        : Jg(s, a) && o.push(''.concat(i, '--hasActive'))
    var u = Dm(s, a, ''.concat(i, '--range'))
    o.push.apply(o, u)
    var c = Array.isArray(e) ? e : [e]
    if (r && c.length === 1) {
        var d = r > s[0] ? [s[0], r] : [r, s[0]],
            f = Dm(d, a, ''.concat(i, '--hover'))
        o.push.apply(o, f)
    }
    return o
}
function tc(t) {
    for (
        var e = t.className,
            n = t.count,
            r = n === void 0 ? 3 : n,
            i = t.dateTransform,
            o = t.dateType,
            l = t.end,
            a = t.hover,
            s = t.offset,
            u = t.renderTile,
            c = t.start,
            d = t.step,
            f = d === void 0 ? 1 : d,
            h = t.value,
            g = t.valueType,
            p = [],
            x = c;
        x <= l;
        x += f
    ) {
        var v = i(x)
        p.push(
            u({
                classes: gS({
                    date: v,
                    dateType: o,
                    hover: a,
                    value: h,
                    valueType: g,
                }),
                date: v,
            }),
        )
    }
    return O.jsx(Fh, {
        className: e,
        count: r,
        offset: s,
        wrap: !0,
        children: p,
    })
}
function nc(t) {
    var e = t.activeStartDate,
        n = t.children,
        r = t.classes,
        i = t.date,
        o = t.formatAbbr,
        l = t.locale,
        a = t.maxDate,
        s = t.maxDateTransform,
        u = t.minDate,
        c = t.minDateTransform,
        d = t.onClick,
        f = t.onMouseOver,
        h = t.style,
        g = t.tileClassName,
        p = t.tileContent,
        x = t.tileDisabled,
        v = t.view,
        m = ze.useMemo(
            function () {
                var y = { activeStartDate: e, date: i, view: v }
                return typeof g == 'function' ? g(y) : g
            },
            [e, i, g, v],
        ),
        _ = ze.useMemo(
            function () {
                var y = { activeStartDate: e, date: i, view: v }
                return typeof p == 'function' ? p(y) : p
            },
            [e, i, p, v],
        )
    return O.jsxs('button', {
        className: Ku(r, m),
        disabled:
            (u && c(u) > i) ||
            (a && s(a) < i) ||
            (x && x({ activeStartDate: e, date: i, view: v })),
        onClick: d
            ? function (y) {
                  return d(i, y)
              }
            : void 0,
        onFocus: f
            ? function () {
                  return f(i)
              }
            : void 0,
        onMouseOver: f
            ? function () {
                  return f(i)
              }
            : void 0,
        style: h,
        type: 'button',
        children: [
            o ? O.jsx('abbr', { 'aria-label': o(l, i), children: n }) : n,
            _,
        ],
    })
}
var Jf = function () {
        return (
            (Jf =
                Object.assign ||
                function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++) {
                        e = arguments[n]
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) &&
                                (t[i] = e[i])
                    }
                    return t
                }),
            Jf.apply(this, arguments)
        )
    },
    _S = function (t, e) {
        var n = {}
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
                e.indexOf(r) < 0 &&
                (n[r] = t[r])
        if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
                var i = 0, r = Object.getOwnPropertySymbols(t);
                i < r.length;
                i++
            )
                e.indexOf(r[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                    (n[r[i]] = t[r[i]])
        return n
    },
    zc = 'react-calendar__century-view__decades__decade'
function yS(t) {
    var e = t.classes,
        n = e === void 0 ? [] : e,
        r = t.currentCentury,
        i = t.formatYear,
        o = i === void 0 ? ec : i,
        l = _S(t, ['classes', 'currentCentury', 'formatYear']),
        a = l.date,
        s = l.locale,
        u = []
    return (
        n && u.push.apply(u, n),
        zc && u.push(zc),
        ul(a).getFullYear() !== r &&
            u.push(''.concat(zc, '--neighboringCentury')),
        O.jsx(
            nc,
            Jf({}, l, {
                classes: u,
                maxDateTransform: qu,
                minDateTransform: Oi,
                view: 'century',
                children: Zg(s, o, a),
            }),
        )
    )
}
var ed = function () {
        return (
            (ed =
                Object.assign ||
                function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++) {
                        e = arguments[n]
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) &&
                                (t[i] = e[i])
                    }
                    return t
                }),
            ed.apply(this, arguments)
        )
    },
    Nm = function (t, e) {
        var n = {}
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
                e.indexOf(r) < 0 &&
                (n[r] = t[r])
        if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
                var i = 0, r = Object.getOwnPropertySymbols(t);
                i < r.length;
                i++
            )
                e.indexOf(r[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                    (n[r[i]] = t[r[i]])
        return n
    }
function wS(t) {
    var e = t.activeStartDate,
        n = t.hover,
        r = t.showNeighboringCentury,
        i = t.value,
        o = t.valueType,
        l = Nm(t, [
            'activeStartDate',
            'hover',
            'showNeighboringCentury',
            'value',
            'valueType',
        ]),
        a = tS(e),
        s = a + (r ? 119 : 99)
    return O.jsx(tc, {
        className: 'react-calendar__century-view__decades',
        dateTransform: Oi,
        dateType: 'decade',
        end: s,
        hover: n,
        renderTile: function (u) {
            var c = u.date,
                d = Nm(u, ['date'])
            return O.jsx(
                yS,
                ed({}, l, d, {
                    activeStartDate: e,
                    currentCentury: a,
                    date: c,
                }),
                c.getTime(),
            )
        },
        start: a,
        step: 10,
        value: i,
        valueType: o,
    })
}
var td = function () {
    return (
        (td =
            Object.assign ||
            function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) {
                    e = arguments[n]
                    for (var i in e)
                        Object.prototype.hasOwnProperty.call(e, i) &&
                            (t[i] = e[i])
                }
                return t
            }),
        td.apply(this, arguments)
    )
}
function xS(t) {
    function e() {
        return O.jsx(wS, td({}, t))
    }
    return O.jsx('div', {
        className: 'react-calendar__century-view',
        children: e(),
    })
}
var nd = function () {
        return (
            (nd =
                Object.assign ||
                function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++) {
                        e = arguments[n]
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) &&
                                (t[i] = e[i])
                    }
                    return t
                }),
            nd.apply(this, arguments)
        )
    },
    SS = function (t, e) {
        var n = {}
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
                e.indexOf(r) < 0 &&
                (n[r] = t[r])
        if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
                var i = 0, r = Object.getOwnPropertySymbols(t);
                i < r.length;
                i++
            )
                e.indexOf(r[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                    (n[r[i]] = t[r[i]])
        return n
    },
    Ic = 'react-calendar__decade-view__years__year'
function kS(t) {
    var e = t.classes,
        n = e === void 0 ? [] : e,
        r = t.currentDecade,
        i = t.formatYear,
        o = i === void 0 ? ec : i,
        l = SS(t, ['classes', 'currentDecade', 'formatYear']),
        a = l.date,
        s = l.locale,
        u = []
    return (
        n && u.push.apply(u, n),
        Ic && u.push(Ic),
        Oi(a).getFullYear() !== r &&
            u.push(''.concat(Ic, '--neighboringDecade')),
        O.jsx(
            nc,
            nd({}, l, {
                classes: u,
                maxDateTransform: Ju,
                minDateTransform: cl,
                view: 'decade',
                children: o(s, a),
            }),
        )
    )
}
var rd = function () {
        return (
            (rd =
                Object.assign ||
                function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++) {
                        e = arguments[n]
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) &&
                                (t[i] = e[i])
                    }
                    return t
                }),
            rd.apply(this, arguments)
        )
    },
    Mm = function (t, e) {
        var n = {}
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
                e.indexOf(r) < 0 &&
                (n[r] = t[r])
        if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
                var i = 0, r = Object.getOwnPropertySymbols(t);
                i < r.length;
                i++
            )
                e.indexOf(r[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                    (n[r[i]] = t[r[i]])
        return n
    }
function CS(t) {
    var e = t.activeStartDate,
        n = t.hover,
        r = t.showNeighboringDecade,
        i = t.value,
        o = t.valueType,
        l = Mm(t, [
            'activeStartDate',
            'hover',
            'showNeighboringDecade',
            'value',
            'valueType',
        ]),
        a = nS(e),
        s = a + (r ? 11 : 9)
    return O.jsx(tc, {
        className: 'react-calendar__decade-view__years',
        dateTransform: cl,
        dateType: 'year',
        end: s,
        hover: n,
        renderTile: function (u) {
            var c = u.date,
                d = Mm(u, ['date'])
            return O.jsx(
                kS,
                rd({}, l, d, { activeStartDate: e, currentDecade: a, date: c }),
                c.getTime(),
            )
        },
        start: a,
        value: i,
        valueType: o,
    })
}
var id = function () {
    return (
        (id =
            Object.assign ||
            function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) {
                    e = arguments[n]
                    for (var i in e)
                        Object.prototype.hasOwnProperty.call(e, i) &&
                            (t[i] = e[i])
                }
                return t
            }),
        id.apply(this, arguments)
    )
}
function TS(t) {
    function e() {
        return O.jsx(CS, id({}, t))
    }
    return O.jsx('div', {
        className: 'react-calendar__decade-view',
        children: e(),
    })
}
var od = function () {
        return (
            (od =
                Object.assign ||
                function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++) {
                        e = arguments[n]
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) &&
                                (t[i] = e[i])
                    }
                    return t
                }),
            od.apply(this, arguments)
        )
    },
    OS = function (t, e) {
        var n = {}
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
                e.indexOf(r) < 0 &&
                (n[r] = t[r])
        if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
                var i = 0, r = Object.getOwnPropertySymbols(t);
                i < r.length;
                i++
            )
                e.indexOf(r[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                    (n[r[i]] = t[r[i]])
        return n
    },
    Lm = function (t, e, n) {
        if (n || arguments.length === 2)
            for (var r = 0, i = e.length, o; r < i; r++)
                (o || !(r in e)) &&
                    (o || (o = Array.prototype.slice.call(e, 0, r)),
                    (o[r] = e[r]))
        return t.concat(o || Array.prototype.slice.call(e))
    },
    PS = 'react-calendar__year-view__months__month'
function ES(t) {
    var e = t.classes,
        n = e === void 0 ? [] : e,
        r = t.formatMonth,
        i = r === void 0 ? Kx : r,
        o = t.formatMonthYear,
        l = o === void 0 ? Xg : o,
        a = OS(t, ['classes', 'formatMonth', 'formatMonthYear']),
        s = a.date,
        u = a.locale
    return O.jsx(
        nc,
        od({}, a, {
            classes: Lm(Lm([], n, !0), [PS], !1),
            formatAbbr: l,
            maxDateTransform: Wa,
            minDateTransform: so,
            view: 'year',
            children: i(u, s),
        }),
    )
}
var ld = function () {
        return (
            (ld =
                Object.assign ||
                function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++) {
                        e = arguments[n]
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) &&
                                (t[i] = e[i])
                    }
                    return t
                }),
            ld.apply(this, arguments)
        )
    },
    Rm = function (t, e) {
        var n = {}
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
                e.indexOf(r) < 0 &&
                (n[r] = t[r])
        if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
                var i = 0, r = Object.getOwnPropertySymbols(t);
                i < r.length;
                i++
            )
                e.indexOf(r[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                    (n[r[i]] = t[r[i]])
        return n
    }
function DS(t) {
    var e = t.activeStartDate,
        n = t.hover,
        r = t.value,
        i = t.valueType,
        o = Rm(t, ['activeStartDate', 'hover', 'value', 'valueType']),
        l = 0,
        a = 11,
        s = Le(e)
    return O.jsx(tc, {
        className: 'react-calendar__year-view__months',
        dateTransform: function (u) {
            var c = new Date()
            return c.setFullYear(s, u, 1), so(c)
        },
        dateType: 'month',
        end: a,
        hover: n,
        renderTile: function (u) {
            var c = u.date,
                d = Rm(u, ['date'])
            return O.jsx(
                ES,
                ld({}, o, d, { activeStartDate: e, date: c }),
                c.getTime(),
            )
        },
        start: l,
        value: r,
        valueType: i,
    })
}
var ad = function () {
    return (
        (ad =
            Object.assign ||
            function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) {
                    e = arguments[n]
                    for (var i in e)
                        Object.prototype.hasOwnProperty.call(e, i) &&
                            (t[i] = e[i])
                }
                return t
            }),
        ad.apply(this, arguments)
    )
}
function NS(t) {
    function e() {
        return O.jsx(DS, ad({}, t))
    }
    return O.jsx('div', {
        className: 'react-calendar__year-view',
        children: e(),
    })
}
var sd = function () {
        return (
            (sd =
                Object.assign ||
                function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++) {
                        e = arguments[n]
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) &&
                                (t[i] = e[i])
                    }
                    return t
                }),
            sd.apply(this, arguments)
        )
    },
    MS = function (t, e) {
        var n = {}
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
                e.indexOf(r) < 0 &&
                (n[r] = t[r])
        if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
                var i = 0, r = Object.getOwnPropertySymbols(t);
                i < r.length;
                i++
            )
                e.indexOf(r[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                    (n[r[i]] = t[r[i]])
        return n
    },
    us = 'react-calendar__month-view__days__day'
function LS(t) {
    var e = t.calendarType,
        n = t.classes,
        r = n === void 0 ? [] : n,
        i = t.currentMonthIndex,
        o = t.formatDay,
        l = o === void 0 ? Gx : o,
        a = t.formatLongDate,
        s = a === void 0 ? Qx : a,
        u = MS(t, [
            'calendarType',
            'classes',
            'currentMonthIndex',
            'formatDay',
            'formatLongDate',
        ]),
        c = u.date,
        d = u.locale,
        f = []
    return (
        r && f.push.apply(f, r),
        us && f.push(us),
        qg(c, e) && f.push(''.concat(us, '--weekend')),
        c.getMonth() !== i && f.push(''.concat(us, '--neighboringMonth')),
        O.jsx(
            nc,
            sd({}, u, {
                classes: f,
                formatAbbr: s,
                maxDateTransform: zh,
                minDateTransform: Va,
                view: 'month',
                children: l(d, c),
            }),
        )
    )
}
var ud = function () {
        return (
            (ud =
                Object.assign ||
                function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++) {
                        e = arguments[n]
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) &&
                                (t[i] = e[i])
                    }
                    return t
                }),
            ud.apply(this, arguments)
        )
    },
    jm = function (t, e) {
        var n = {}
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
                e.indexOf(r) < 0 &&
                (n[r] = t[r])
        if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
                var i = 0, r = Object.getOwnPropertySymbols(t);
                i < r.length;
                i++
            )
                e.indexOf(r[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                    (n[r[i]] = t[r[i]])
        return n
    }
function RS(t) {
    var e = t.activeStartDate,
        n = t.calendarType,
        r = t.hover,
        i = t.showFixedNumberOfWeeks,
        o = t.showNeighboringMonth,
        l = t.value,
        a = t.valueType,
        s = jm(t, [
            'activeStartDate',
            'calendarType',
            'hover',
            'showFixedNumberOfWeeks',
            'showNeighboringMonth',
            'value',
            'valueType',
        ]),
        u = Le(e),
        c = Ti(e),
        d = i || o,
        f = Sa(e, n),
        h = d ? 0 : f,
        g = (d ? -f : 0) + 1,
        p = (function () {
            if (i) return g + 6 * 7 - 1
            var x = Hg(e)
            if (o) {
                var v = new Date()
                v.setFullYear(u, c, x), v.setHours(0, 0, 0, 0)
                var m = 7 - Sa(v, n) - 1
                return x + m
            }
            return x
        })()
    return O.jsx(tc, {
        className: 'react-calendar__month-view__days',
        count: 7,
        dateTransform: function (x) {
            var v = new Date()
            return v.setFullYear(u, c, x), Va(v)
        },
        dateType: 'day',
        hover: r,
        end: p,
        renderTile: function (x) {
            var v = x.date,
                m = jm(x, ['date'])
            return O.jsx(
                LS,
                ud({}, s, m, {
                    activeStartDate: e,
                    calendarType: n,
                    currentMonthIndex: c,
                    date: v,
                }),
                v.getTime(),
            )
        },
        offset: h,
        start: g,
        value: l,
        valueType: a,
    })
}
var e_ = 'react-calendar__month-view__weekdays',
    Fc = ''.concat(e_, '__weekday')
function jS(t) {
    for (
        var e = t.calendarType,
            n = t.formatShortWeekday,
            r = n === void 0 ? Zx : n,
            i = t.formatWeekday,
            o = i === void 0 ? qx : i,
            l = t.locale,
            a = t.onMouseLeave,
            s = new Date(),
            u = so(s),
            c = Le(u),
            d = Ti(u),
            f = [],
            h = 1;
        h <= 7;
        h += 1
    ) {
        var g = new Date(c, d, h - Sa(u, e)),
            p = o(l, g)
        f.push(
            O.jsx(
                'div',
                {
                    className: Ku(
                        Fc,
                        fS(g) && ''.concat(Fc, '--current'),
                        qg(g, e) && ''.concat(Fc, '--weekend'),
                    ),
                    children: O.jsx('abbr', {
                        'aria-label': p,
                        title: p,
                        children: r(l, g).replace('.', ''),
                    }),
                },
                h,
            ),
        )
    }
    return O.jsx(Fh, {
        className: e_,
        count: 7,
        onFocus: a,
        onMouseOver: a,
        children: f,
    })
}
var xu = function () {
        return (
            (xu =
                Object.assign ||
                function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++) {
                        e = arguments[n]
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) &&
                                (t[i] = e[i])
                    }
                    return t
                }),
            xu.apply(this, arguments)
        )
    },
    Am = function (t, e) {
        var n = {}
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
                e.indexOf(r) < 0 &&
                (n[r] = t[r])
        if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
                var i = 0, r = Object.getOwnPropertySymbols(t);
                i < r.length;
                i++
            )
                e.indexOf(r[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                    (n[r[i]] = t[r[i]])
        return n
    },
    zm = 'react-calendar__tile'
function AS(t) {
    var e = t.onClickWeekNumber,
        n = t.weekNumber,
        r = O.jsx('span', { children: n })
    if (e) {
        var i = t.date,
            o = t.onClickWeekNumber,
            l = t.weekNumber,
            a = Am(t, ['date', 'onClickWeekNumber', 'weekNumber'])
        return O.jsx(
            'button',
            xu({}, a, {
                className: zm,
                onClick: function (s) {
                    return o(l, i, s)
                },
                type: 'button',
                children: r,
            }),
        )
    } else {
        t.date, t.onClickWeekNumber, t.weekNumber
        var a = Am(t, ['date', 'onClickWeekNumber', 'weekNumber'])
        return O.jsx('div', xu({}, a, { className: zm, children: r }))
    }
}
function zS(t) {
    var e = t.activeStartDate,
        n = t.calendarType,
        r = t.onClickWeekNumber,
        i = t.onMouseLeave,
        o = t.showFixedNumberOfWeeks,
        l = (function () {
            if (o) return 6
            var u = Hg(e),
                c = Sa(e, n),
                d = u - (7 - c)
            return 1 + Math.ceil(d / 7)
        })(),
        a = (function () {
            for (
                var u = Le(e), c = Ti(e), d = Zu(e), f = [], h = 0;
                h < l;
                h += 1
            )
                f.push(qf(new Date(u, c, d + h * 7), n))
            return f
        })(),
        s = a.map(function (u) {
            return rS(u, n)
        })
    return O.jsx(Fh, {
        className: 'react-calendar__month-view__weekNumbers',
        count: l,
        direction: 'column',
        onFocus: i,
        onMouseOver: i,
        style: { flexBasis: 'calc(100% * (1 / 8)', flexShrink: 0 },
        children: s.map(function (u, c) {
            var d = a[c]
            if (!d) throw new Error('date is not defined')
            return O.jsx(
                AS,
                { date: d, onClickWeekNumber: r, weekNumber: u },
                u,
            )
        }),
    })
}
var cd = function () {
        return (
            (cd =
                Object.assign ||
                function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++) {
                        e = arguments[n]
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) &&
                                (t[i] = e[i])
                    }
                    return t
                }),
            cd.apply(this, arguments)
        )
    },
    IS = function (t, e) {
        var n = {}
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
                e.indexOf(r) < 0 &&
                (n[r] = t[r])
        if (t != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
                var i = 0, r = Object.getOwnPropertySymbols(t);
                i < r.length;
                i++
            )
                e.indexOf(r[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                    (n[r[i]] = t[r[i]])
        return n
    }
function FS(t) {
    if (t)
        for (var e = 0, n = Object.entries(Fx); e < n.length; e++) {
            var r = n[e],
                i = r[0],
                o = r[1]
            if (o.includes(t)) return i
        }
    return at.ISO_8601
}
function bS(t) {
    var e = t.activeStartDate,
        n = t.locale,
        r = t.onMouseLeave,
        i = t.showFixedNumberOfWeeks,
        o = t.calendarType,
        l = o === void 0 ? FS(n) : o,
        a = t.formatShortWeekday,
        s = t.formatWeekday,
        u = t.onClickWeekNumber,
        c = t.showWeekNumbers,
        d = IS(t, [
            'calendarType',
            'formatShortWeekday',
            'formatWeekday',
            'onClickWeekNumber',
            'showWeekNumbers',
        ])
    function f() {
        return O.jsx(jS, {
            calendarType: l,
            formatShortWeekday: a,
            formatWeekday: s,
            locale: n,
            onMouseLeave: r,
        })
    }
    function h() {
        return c
            ? O.jsx(zS, {
                  activeStartDate: e,
                  calendarType: l,
                  onClickWeekNumber: u,
                  onMouseLeave: r,
                  showFixedNumberOfWeeks: i,
              })
            : null
    }
    function g() {
        return O.jsx(RS, cd({ calendarType: l }, d))
    }
    var p = 'react-calendar__month-view'
    return O.jsx('div', {
        className: Ku(p, c ? ''.concat(p, '--weekNumbers') : ''),
        children: O.jsxs('div', {
            style: { display: 'flex', alignItems: 'flex-end' },
            children: [
                h(),
                O.jsxs('div', {
                    style: { flexGrow: 1, width: '100%' },
                    children: [f(), g()],
                }),
            ],
        }),
    })
}
var Mo = function () {
        return (
            (Mo =
                Object.assign ||
                function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++) {
                        e = arguments[n]
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) &&
                                (t[i] = e[i])
                    }
                    return t
                }),
            Mo.apply(this, arguments)
        )
    },
    cs = 'react-calendar',
    Is = ['century', 'decade', 'year', 'month'],
    WS = ['decade', 'year', 'month', 'day'],
    bh = new Date()
bh.setFullYear(1, 0, 1)
bh.setHours(0, 0, 0, 0)
var VS = new Date(864e13)
function Nl(t) {
    return t instanceof Date ? t : new Date(t)
}
function t_(t, e) {
    return Is.slice(Is.indexOf(t), Is.indexOf(e) + 1)
}
function $S(t, e, n) {
    var r = t_(e, n)
    return r.indexOf(t) !== -1
}
function Wh(t, e, n) {
    return t && $S(t, e, n) ? t : n
}
function n_(t) {
    var e = Is.indexOf(t)
    return WS[e]
}
function BS(t, e) {
    var n = Array.isArray(t) ? t[e] : t
    if (!n) return null
    var r = Nl(n)
    if (isNaN(r.getTime())) throw new Error('Invalid date: '.concat(t))
    return r
}
function r_(t, e) {
    var n = t.value,
        r = t.minDate,
        i = t.maxDate,
        o = t.maxDetail,
        l = BS(n, e)
    if (!l) return null
    var a = n_(o),
        s = (function () {
            switch (e) {
                case 0:
                    return $i(a, l)
                case 1:
                    return Qg(a, l)
                default:
                    throw new Error('Invalid index value: '.concat(e))
            }
        })()
    return pS(s, r, i)
}
var Vh = function (t) {
        return r_(t, 0)
    },
    i_ = function (t) {
        return r_(t, 1)
    },
    US = function (t) {
        return [Vh, i_].map(function (e) {
            return e(t)
        })
    }
function o_(t) {
    var e = t.maxDate,
        n = t.maxDetail,
        r = t.minDate,
        i = t.minDetail,
        o = t.value,
        l = t.view,
        a = Wh(l, i, n),
        s = Vh({ value: o, minDate: r, maxDate: e, maxDetail: n }) || new Date()
    return $i(a, s)
}
function YS(t) {
    var e = t.activeStartDate,
        n = t.defaultActiveStartDate,
        r = t.defaultValue,
        i = t.defaultView,
        o = t.maxDate,
        l = t.maxDetail,
        a = t.minDate,
        s = t.minDetail,
        u = t.value,
        c = t.view,
        d = Wh(c, s, l),
        f = e || n
    return f
        ? $i(d, f)
        : o_({
              maxDate: o,
              maxDetail: l,
              minDate: a,
              minDetail: s,
              value: u || r,
              view: c || i,
          })
}
function bc(t) {
    return t && (!Array.isArray(t) || t.length === 1)
}
function fs(t, e) {
    return t instanceof Date && e instanceof Date && t.getTime() === e.getTime()
}
var HS = ze.forwardRef(function (e, n) {
    var r = e.activeStartDate,
        i = e.allowPartialRange,
        o = e.calendarType,
        l = e.className,
        a = e.defaultActiveStartDate,
        s = e.defaultValue,
        u = e.defaultView,
        c = e.formatDay,
        d = e.formatLongDate,
        f = e.formatMonth,
        h = e.formatMonthYear,
        g = e.formatShortWeekday,
        p = e.formatWeekday,
        x = e.formatYear,
        v = e.goToRangeStartOnSelect,
        m = v === void 0 ? !0 : v,
        _ = e.inputRef,
        y = e.locale,
        k = e.maxDate,
        C = k === void 0 ? VS : k,
        S = e.maxDetail,
        T = S === void 0 ? 'month' : S,
        D = e.minDate,
        P = D === void 0 ? bh : D,
        I = e.minDetail,
        L = I === void 0 ? 'century' : I,
        U = e.navigationAriaLabel,
        Y = e.navigationAriaLive,
        q = e.navigationLabel,
        W = e.next2AriaLabel,
        V = e.next2Label,
        N = e.nextAriaLabel,
        R = e.nextLabel,
        w = e.onActiveStartDateChange,
        F = e.onChange,
        K = e.onClickDay,
        $e = e.onClickDecade,
        le = e.onClickMonth,
        Ce = e.onClickWeekNumber,
        ge = e.onClickYear,
        he = e.onDrillDown,
        Ke = e.onDrillUp,
        Te = e.onViewChange,
        On = e.prev2AriaLabel,
        st = e.prev2Label,
        Tt = e.prevAriaLabel,
        ie = e.prevLabel,
        Z = e.returnValue,
        tt = Z === void 0 ? 'start' : Z,
        ye = e.selectRange,
        E = e.showDoubleView,
        Ot = e.showFixedNumberOfWeeks,
        Pn = e.showNavigation,
        tr = Pn === void 0 ? !0 : Pn,
        Be = e.showNeighboringCentury,
        nr = e.showNeighboringDecade,
        rr = e.showNeighboringMonth,
        Br = rr === void 0 ? !0 : rr,
        nt = e.showWeekNumbers,
        ir = e.tileClassName,
        Re = e.tileContent,
        cn = e.tileDisabled,
        Pt = e.value,
        En = e.view,
        Ur = ze.useState(a),
        Ue = Ur[0],
        Sr = Ur[1],
        $n = ze.useState(null),
        Yr = $n[0],
        kr = $n[1],
        Bn = ze.useState(
            Array.isArray(s)
                ? s.map(function (B) {
                      return B !== null ? Nl(B) : null
                  })
                : s != null
                  ? Nl(s)
                  : null,
        ),
        Un = Bn[0],
        J = Bn[1],
        or = ze.useState(u),
        fn = or[0],
        Zt = or[1],
        we =
            r ||
            Ue ||
            YS({
                activeStartDate: r,
                defaultActiveStartDate: a,
                defaultValue: s,
                defaultView: u,
                maxDate: C,
                maxDetail: T,
                minDate: P,
                minDetail: L,
                value: Pt,
                view: En,
            }),
        Ye = (function () {
            var B = (function () {
                return ye && bc(Un) ? Un : Pt !== void 0 ? Pt : Un
            })()
            return B
                ? Array.isArray(B)
                    ? B.map(function (G) {
                          return G !== null ? Nl(G) : null
                      })
                    : B !== null
                      ? Nl(B)
                      : null
                : null
        })(),
        Yn = n_(T),
        fe = Wh(En || fn, L, T),
        Et = t_(L, T),
        Q = ye ? Yr : null,
        $ = Et.indexOf(fe) < Et.length - 1,
        ue = Et.indexOf(fe) > 0,
        j = ze.useCallback(
            function (B) {
                var G = (function () {
                    switch (tt) {
                        case 'start':
                            return Vh
                        case 'end':
                            return i_
                        case 'range':
                            return US
                        default:
                            throw new Error('Invalid returnValue.')
                    }
                })()
                return G({ maxDate: C, maxDetail: T, minDate: P, value: B })
            },
            [C, T, P, tt],
        ),
        X = ze.useCallback(
            function (B, G) {
                Sr(B)
                var ce = { action: G, activeStartDate: B, value: Ye, view: fe }
                w && !fs(we, B) && w(ce)
            },
            [we, w, Ye, fe],
        ),
        b = ze.useCallback(
            function (B, G) {
                var ce = (function () {
                    switch (fe) {
                        case 'century':
                            return $e
                        case 'decade':
                            return ge
                        case 'year':
                            return le
                        case 'month':
                            return K
                        default:
                            throw new Error('Invalid view: '.concat(fe, '.'))
                    }
                })()
                ce && ce(B, G)
            },
            [K, $e, le, ge, fe],
        ),
        H = ze.useCallback(
            function (B, G) {
                if ($) {
                    b(B, G)
                    var ce = Et[Et.indexOf(fe) + 1]
                    if (!ce)
                        throw new Error(
                            'Attempted to drill down from the lowest view.',
                        )
                    Sr(B), Zt(ce)
                    var Xe = {
                        action: 'drillDown',
                        activeStartDate: B,
                        value: Ye,
                        view: ce,
                    }
                    w && !fs(we, B) && w(Xe),
                        Te && fe !== ce && Te(Xe),
                        he && he(Xe)
                }
            },
            [we, $, w, b, he, Te, Ye, fe, Et],
        ),
        He = ze.useCallback(
            function () {
                if (ue) {
                    var B = Et[Et.indexOf(fe) - 1]
                    if (!B)
                        throw new Error(
                            'Attempted to drill up from the highest view.',
                        )
                    var G = $i(B, we)
                    Sr(G), Zt(B)
                    var ce = {
                        action: 'drillUp',
                        activeStartDate: G,
                        value: Ye,
                        view: B,
                    }
                    w && !fs(we, G) && w(ce),
                        Te && fe !== B && Te(ce),
                        Ke && Ke(ce)
                }
            },
            [we, ue, w, Ke, Te, Ye, fe, Et],
        ),
        ee = ze.useCallback(
            function (B, G) {
                var ce = Ye
                b(B, G)
                var Xe = ye && !bc(ce),
                    me
                if (ye)
                    if (Xe) me = $i(Yn, B)
                    else {
                        if (!ce) throw new Error('previousValue is required')
                        if (Array.isArray(ce))
                            throw new Error(
                                'previousValue must not be an array',
                            )
                        me = uS(Yn, ce, B)
                    }
                else me = j(B)
                var Ze =
                    !ye || Xe || m
                        ? o_({
                              maxDate: C,
                              maxDetail: T,
                              minDate: P,
                              minDetail: L,
                              value: me,
                              view: fe,
                          })
                        : null
                G.persist(), Sr(Ze), J(me)
                var pt = {
                    action: 'onChange',
                    activeStartDate: Ze,
                    value: me,
                    view: fe,
                }
                if ((w && !fs(we, Ze) && w(pt), F))
                    if (ye) {
                        var Cr = bc(me)
                        if (!Cr) F(me || null, G)
                        else if (i) {
                            if (Array.isArray(me))
                                throw new Error('value must not be an array')
                            F([me || null, null], G)
                        }
                    } else F(me || null, G)
            },
            [we, i, j, m, C, T, P, L, w, F, b, ye, Ye, Yn, fe],
        )
    function je(B) {
        kr(B)
    }
    function rt() {
        kr(null)
    }
    ze.useImperativeHandle(
        n,
        function () {
            return {
                activeStartDate: we,
                drillDown: H,
                drillUp: He,
                onChange: ee,
                setActiveStartDate: X,
                value: Ye,
                view: fe,
            }
        },
        [we, H, He, ee, X, Ye, fe],
    )
    function Oe(B) {
        var G = B ? Gg(fe, we) : $i(fe, we),
            ce = $ ? H : ee,
            Xe = {
                activeStartDate: G,
                hover: Q,
                locale: y,
                maxDate: C,
                minDate: P,
                onClick: ce,
                onMouseOver: ye ? je : void 0,
                tileClassName: ir,
                tileContent: Re,
                tileDisabled: cn,
                value: Ye,
                valueType: Yn,
            }
        switch (fe) {
            case 'century':
                return O.jsx(
                    xS,
                    Mo({ formatYear: x, showNeighboringCentury: Be }, Xe),
                )
            case 'decade':
                return O.jsx(
                    TS,
                    Mo({ formatYear: x, showNeighboringDecade: nr }, Xe),
                )
            case 'year':
                return O.jsx(NS, Mo({ formatMonth: f, formatMonthYear: h }, Xe))
            case 'month':
                return O.jsx(
                    bS,
                    Mo(
                        {
                            calendarType: o,
                            formatDay: c,
                            formatLongDate: d,
                            formatShortWeekday: g,
                            formatWeekday: p,
                            onClickWeekNumber: Ce,
                            onMouseLeave: ye ? rt : void 0,
                            showFixedNumberOfWeeks: typeof Ot < 'u' ? Ot : E,
                            showNeighboringMonth: Br,
                            showWeekNumbers: nt,
                        },
                        Xe,
                    ),
                )
            default:
                throw new Error('Invalid view: '.concat(fe, '.'))
        }
    }
    function xe() {
        return tr
            ? O.jsx(dS, {
                  activeStartDate: we,
                  drillUp: He,
                  formatMonthYear: h,
                  formatYear: x,
                  locale: y,
                  maxDate: C,
                  minDate: P,
                  navigationAriaLabel: U,
                  navigationAriaLive: Y,
                  navigationLabel: q,
                  next2AriaLabel: W,
                  next2Label: V,
                  nextAriaLabel: N,
                  nextLabel: R,
                  prev2AriaLabel: On,
                  prev2Label: st,
                  prevAriaLabel: Tt,
                  prevLabel: ie,
                  setActiveStartDate: X,
                  showDoubleView: E,
                  view: fe,
                  views: Et,
              })
            : null
    }
    var pe = Array.isArray(Ye) ? Ye : [Ye]
    return O.jsxs('div', {
        className: Ku(
            cs,
            ye && pe.length === 1 && ''.concat(cs, '--selectRange'),
            E && ''.concat(cs, '--doubleView'),
            l,
        ),
        ref: _,
        children: [
            xe(),
            O.jsxs('div', {
                className: ''.concat(cs, '__viewContainer'),
                onBlur: ye ? rt : void 0,
                onMouseLeave: ye ? rt : void 0,
                children: [Oe(), E ? Oe(!0) : null],
            }),
        ],
    })
})
const XS = () =>
    O.jsx(Nh, {
        children: O.jsxs('div', {
            className:
                'flex flex-col justify-center h-screen mx-auto px-4 md:px-0',
            children: [
                O.jsxs('div', {
                    className: 'text-center font-old-standard md:text-2xl',
                    children: [
                        O.jsx('div', {
                            className: 'text-xl font-thin',
                            children: 'Trân trọng kính mời',
                        }),
                        O.jsx('div', {
                            className: 'text-xl font-thin',
                            children:
                                'Đến dự buổi tiệc chung vui của chúng tôi tại',
                        }),
                        O.jsx('div', {
                            className:
                                ' font-lovers text-4xl md:text-8xl my-4 md:my-8 text-theme-main',
                            children: 'W.Jardin',
                        }),
                        O.jsx('div', {
                            className: 'text-md',
                            children: '307 Nguyễn Văn Linh',
                        }),
                        O.jsx('div', {
                            className: 'text-md',
                            children: 'Dư Hàng Kênh, Lê Chân, Hải Phòng',
                        }),
                        O.jsx('div', { className: 'pt-4' }),
                        O.jsxs('div', {
                            className:
                                'border-t-2 border-b-2 border-theme-main py-2',
                            children: [
                                O.jsx('div', {
                                    className: 'text-md font-thin uppercase',
                                    children: 'vào lúc 11:00 - Chủ Nhật',
                                }),
                                O.jsx('div', {
                                    className: 'text-3xl md:text-6xl font-bold',
                                    children: '22 . 09 . 2024',
                                }),
                            ],
                        }),
                    ],
                }),
                O.jsx('div', { className: 'pt-4 md:pt-16' }),
                O.jsxs('div', {
                    className: 'border-4 border-theme-main',
                    children: [
                        O.jsx('div', {
                            className:
                                'text-xl font-old-standard uppercase font-black text-center p-2 bg-theme-main text-theme-bg',
                            children: 'September 2024',
                        }),
                        O.jsx('div', {
                            className: 'flex justify-center',
                            children: O.jsx('div', {
                                className: 'w-full border border-theme-main',
                            }),
                        }),
                        O.jsx('div', { className: 'pt-4' }),
                        O.jsx('div', {
                            className: 'flex items-center justify-center px-2',
                            children: O.jsx('div', {
                                className: 'w-full md:w-1/2',
                                children: O.jsx(HS, {
                                    showNeighboringMonth: !1,
                                    value: new Date('2024-09-22'),
                                    showNavigation: !1,
                                    locale: 'vi-vn',
                                    tileClassName:
                                        "p-2 text-md font-['Montserrat']",
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    })
function Or(t) {
    if (t === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
        )
    return t
}
function l_(t, e) {
    ;(t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e)
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var xn = {
        autoSleep: 120,
        force3D: 'auto',
        nullTargetWarn: 1,
        units: { lineHeight: '' },
    },
    el = { duration: 0.5, overwrite: !1, delay: 0 },
    $h,
    zt,
    Me,
    An = 1e8,
    Se = 1 / An,
    fd = Math.PI * 2,
    GS = fd / 4,
    QS = 0,
    a_ = Math.sqrt,
    KS = Math.cos,
    ZS = Math.sin,
    wt = function (e) {
        return typeof e == 'string'
    },
    Qe = function (e) {
        return typeof e == 'function'
    },
    br = function (e) {
        return typeof e == 'number'
    },
    Bh = function (e) {
        return typeof e > 'u'
    },
    xr = function (e) {
        return typeof e == 'object'
    },
    on = function (e) {
        return e !== !1
    },
    Uh = function () {
        return typeof window < 'u'
    },
    ds = function (e) {
        return Qe(e) || wt(e)
    },
    s_ =
        (typeof ArrayBuffer == 'function' && ArrayBuffer.isView) ||
        function () {},
    It = Array.isArray,
    dd = /(?:-?\.?\d|\.)+/gi,
    u_ = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Lo = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Wc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    c_ = /[+-]=-?[.\d]+/,
    f_ = /[^,'"\[\]\s]+/gi,
    qS = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Fe,
    fr,
    hd,
    Yh,
    kn = {},
    Su = {},
    d_,
    h_ = function (e) {
        return (Su = to(e, kn)) && un
    },
    Hh = function (e, n) {
        return console.warn(
            'Invalid property',
            e,
            'set to',
            n,
            'Missing plugin? gsap.registerPlugin()',
        )
    },
    Ca = function (e, n) {
        return !n && console.warn(e)
    },
    p_ = function (e, n) {
        return (e && (kn[e] = n) && Su && (Su[e] = n)) || kn
    },
    Ta = function () {
        return 0
    },
    JS = { suppressEvents: !0, isStart: !0, kill: !1 },
    Fs = { suppressEvents: !0, kill: !1 },
    ek = { suppressEvents: !0 },
    Xh = {},
    pi = [],
    pd = {},
    m_,
    mn = {},
    Vc = {},
    Im = 30,
    bs = [],
    Gh = '',
    Qh = function (e) {
        var n = e[0],
            r,
            i
        if ((xr(n) || Qe(n) || (e = [e]), !(r = (n._gsap || {}).harness))) {
            for (i = bs.length; i-- && !bs[i].targetTest(n); );
            r = bs[i]
        }
        for (i = e.length; i--; )
            (e[i] && (e[i]._gsap || (e[i]._gsap = new b_(e[i], r)))) ||
                e.splice(i, 1)
        return e
    },
    Bi = function (e) {
        return e._gsap || Qh(zn(e))[0]._gsap
    },
    v_ = function (e, n, r) {
        return (r = e[n]) && Qe(r)
            ? e[n]()
            : (Bh(r) && e.getAttribute && e.getAttribute(n)) || r
    },
    ln = function (e, n) {
        return (e = e.split(',')).forEach(n) || e
    },
    qe = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    _t = function (e) {
        return Math.round(e * 1e7) / 1e7 || 0
    },
    Vo = function (e, n) {
        var r = n.charAt(0),
            i = parseFloat(n.substr(2))
        return (
            (e = parseFloat(e)),
            r === '+' ? e + i : r === '-' ? e - i : r === '*' ? e * i : e / i
        )
    },
    tk = function (e, n) {
        for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; );
        return i < r
    },
    ku = function () {
        var e = pi.length,
            n = pi.slice(0),
            r,
            i
        for (pd = {}, pi.length = 0, r = 0; r < e; r++)
            (i = n[r]),
                i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
    },
    g_ = function (e, n, r, i) {
        pi.length && !zt && ku(),
            e.render(n, r, zt && n < 0 && (e._initted || e._startAt)),
            pi.length && !zt && ku()
    },
    __ = function (e) {
        var n = parseFloat(e)
        return (n || n === 0) && (e + '').match(f_).length < 2
            ? n
            : wt(e)
              ? e.trim()
              : e
    },
    y_ = function (e) {
        return e
    },
    Vn = function (e, n) {
        for (var r in n) r in e || (e[r] = n[r])
        return e
    },
    nk = function (e) {
        return function (n, r) {
            for (var i in r)
                i in n ||
                    (i === 'duration' && e) ||
                    i === 'ease' ||
                    (n[i] = r[i])
        }
    },
    to = function (e, n) {
        for (var r in n) e[r] = n[r]
        return e
    },
    Fm = function t(e, n) {
        for (var r in n)
            r !== '__proto__' &&
                r !== 'constructor' &&
                r !== 'prototype' &&
                (e[r] = xr(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r])
        return e
    },
    Cu = function (e, n) {
        var r = {},
            i
        for (i in e) i in n || (r[i] = e[i])
        return r
    },
    Xl = function (e) {
        var n = e.parent || Fe,
            r = e.keyframes ? nk(It(e.keyframes)) : Vn
        if (on(e.inherit))
            for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp)
        return e
    },
    rk = function (e, n) {
        for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; );
        return r < 0
    },
    w_ = function (e, n, r, i, o) {
        var l = e[i],
            a
        if (o) for (a = n[o]; l && l[o] > a; ) l = l._prev
        return (
            l
                ? ((n._next = l._next), (l._next = n))
                : ((n._next = e[r]), (e[r] = n)),
            n._next ? (n._next._prev = n) : (e[i] = n),
            (n._prev = l),
            (n.parent = n._dp = e),
            n
        )
    },
    rc = function (e, n, r, i) {
        r === void 0 && (r = '_first'), i === void 0 && (i = '_last')
        var o = n._prev,
            l = n._next
        o ? (o._next = l) : e[r] === n && (e[r] = l),
            l ? (l._prev = o) : e[i] === n && (e[i] = o),
            (n._next = n._prev = n.parent = null)
    },
    yi = function (e, n) {
        e.parent &&
            (!n || e.parent.autoRemoveChildren) &&
            e.parent.remove &&
            e.parent.remove(e),
            (e._act = 0)
    },
    Ui = function (e, n) {
        if (e && (!n || n._end > e._dur || n._start < 0))
            for (var r = e; r; ) (r._dirty = 1), (r = r.parent)
        return e
    },
    ik = function (e) {
        for (var n = e.parent; n && n.parent; )
            (n._dirty = 1), n.totalDuration(), (n = n.parent)
        return e
    },
    md = function (e, n, r, i) {
        return (
            e._startAt &&
            (zt
                ? e._startAt.revert(Fs)
                : (e.vars.immediateRender && !e.vars.autoRevert) ||
                  e._startAt.render(n, !0, i))
        )
    },
    ok = function t(e) {
        return !e || (e._ts && t(e.parent))
    },
    bm = function (e) {
        return e._repeat ? tl(e._tTime, (e = e.duration() + e._rDelay)) * e : 0
    },
    tl = function (e, n) {
        var r = Math.floor((e /= n))
        return e && r === e ? r - 1 : r
    },
    Tu = function (e, n) {
        return (
            (e - n._start) * n._ts +
            (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
        )
    },
    ic = function (e) {
        return (e._end = _t(
            e._start + (e._tDur / Math.abs(e._ts || e._rts || Se) || 0),
        ))
    },
    oc = function (e, n) {
        var r = e._dp
        return (
            r &&
                r.smoothChildTiming &&
                e._ts &&
                ((e._start = _t(
                    r._time -
                        (e._ts > 0
                            ? n / e._ts
                            : ((e._dirty ? e.totalDuration() : e._tDur) - n) /
                              -e._ts),
                )),
                ic(e),
                r._dirty || Ui(r, e)),
            e
        )
    },
    x_ = function (e, n) {
        var r
        if (
            ((n._time ||
                (!n._dur && n._initted) ||
                (n._start < e._time && (n._dur || !n.add))) &&
                ((r = Tu(e.rawTime(), n)),
                (!n._dur || $a(0, n.totalDuration(), r) - n._tTime > Se) &&
                    n.render(r, !0)),
            Ui(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
        ) {
            if (e._dur < e.duration())
                for (r = e; r._dp; )
                    r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp)
            e._zTime = -Se
        }
    },
    pr = function (e, n, r, i) {
        return (
            n.parent && yi(n),
            (n._start = _t(
                (br(r) ? r : r || e !== Fe ? Dn(e, r, n) : e._time) + n._delay,
            )),
            (n._end = _t(
                n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0),
            )),
            w_(e, n, '_first', '_last', e._sort ? '_start' : 0),
            vd(n) || (e._recent = n),
            i || x_(e, n),
            e._ts < 0 && oc(e, e._tTime),
            e
        )
    },
    S_ = function (e, n) {
        return (
            (kn.ScrollTrigger || Hh('scrollTrigger', n)) &&
            kn.ScrollTrigger.create(n, e)
        )
    },
    k_ = function (e, n, r, i, o) {
        if ((Zh(e, n, o), !e._initted)) return 1
        if (
            !r &&
            e._pt &&
            !zt &&
            ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
            m_ !== vn.frame
        )
            return pi.push(e), (e._lazy = [o, i]), 1
    },
    lk = function t(e) {
        var n = e.parent
        return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
    },
    vd = function (e) {
        var n = e.data
        return n === 'isFromStart' || n === 'isStart'
    },
    ak = function (e, n, r, i) {
        var o = e.ratio,
            l =
                n < 0 ||
                (!n &&
                    ((!e._start && lk(e) && !(!e._initted && vd(e))) ||
                        ((e._ts < 0 || e._dp._ts < 0) && !vd(e))))
                    ? 0
                    : 1,
            a = e._rDelay,
            s = 0,
            u,
            c,
            d
        if (
            (a &&
                e._repeat &&
                ((s = $a(0, e._tDur, n)),
                (c = tl(s, a)),
                e._yoyo && c & 1 && (l = 1 - l),
                c !== tl(e._tTime, a) &&
                    ((o = 1 - l),
                    e.vars.repeatRefresh && e._initted && e.invalidate())),
            l !== o || zt || i || e._zTime === Se || (!n && e._zTime))
        ) {
            if (!e._initted && k_(e, n, i, r, s)) return
            for (
                d = e._zTime,
                    e._zTime = n || (r ? Se : 0),
                    r || (r = n && !d),
                    e.ratio = l,
                    e._from && (l = 1 - l),
                    e._time = 0,
                    e._tTime = s,
                    u = e._pt;
                u;

            )
                u.r(l, u.d), (u = u._next)
            n < 0 && md(e, n, r, !0),
                e._onUpdate && !r && yn(e, 'onUpdate'),
                s && e._repeat && !r && e.parent && yn(e, 'onRepeat'),
                (n >= e._tDur || n < 0) &&
                    e.ratio === l &&
                    (l && yi(e, 1),
                    !r &&
                        !zt &&
                        (yn(e, l ? 'onComplete' : 'onReverseComplete', !0),
                        e._prom && e._prom()))
        } else e._zTime || (e._zTime = n)
    },
    sk = function (e, n, r) {
        var i
        if (r > n)
            for (i = e._first; i && i._start <= r; ) {
                if (i.data === 'isPause' && i._start > n) return i
                i = i._next
            }
        else
            for (i = e._last; i && i._start >= r; ) {
                if (i.data === 'isPause' && i._start < n) return i
                i = i._prev
            }
    },
    nl = function (e, n, r, i) {
        var o = e._repeat,
            l = _t(n) || 0,
            a = e._tTime / e._tDur
        return (
            a && !i && (e._time *= l / e._dur),
            (e._dur = l),
            (e._tDur = o
                ? o < 0
                    ? 1e10
                    : _t(l * (o + 1) + e._rDelay * o)
                : l),
            a > 0 && !i && oc(e, (e._tTime = e._tDur * a)),
            e.parent && ic(e),
            r || Ui(e.parent, e),
            e
        )
    },
    Wm = function (e) {
        return e instanceof Yt ? Ui(e) : nl(e, e._dur)
    },
    uk = { _start: 0, endTime: Ta, totalDuration: Ta },
    Dn = function t(e, n, r) {
        var i = e.labels,
            o = e._recent || uk,
            l = e.duration() >= An ? o.endTime(!1) : e._dur,
            a,
            s,
            u
        return wt(n) && (isNaN(n) || n in i)
            ? ((s = n.charAt(0)),
              (u = n.substr(-1) === '%'),
              (a = n.indexOf('=')),
              s === '<' || s === '>'
                  ? (a >= 0 && (n = n.replace(/=/, '')),
                    (s === '<' ? o._start : o.endTime(o._repeat >= 0)) +
                        (parseFloat(n.substr(1)) || 0) *
                            (u ? (a < 0 ? o : r).totalDuration() / 100 : 1))
                  : a < 0
                    ? (n in i || (i[n] = l), i[n])
                    : ((s = parseFloat(n.charAt(a - 1) + n.substr(a + 1))),
                      u &&
                          r &&
                          (s = (s / 100) * (It(r) ? r[0] : r).totalDuration()),
                      a > 1 ? t(e, n.substr(0, a - 1), r) + s : l + s))
            : n == null
              ? l
              : +n
    },
    Gl = function (e, n, r) {
        var i = br(n[1]),
            o = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            l = n[o],
            a,
            s
        if ((i && (l.duration = n[1]), (l.parent = r), e)) {
            for (a = l, s = r; s && !('immediateRender' in a); )
                (a = s.vars.defaults || {}),
                    (s = on(s.vars.inherit) && s.parent)
            ;(l.immediateRender = on(a.immediateRender)),
                e < 2 ? (l.runBackwards = 1) : (l.startAt = n[o - 1])
        }
        return new ot(n[0], l, n[o + 1])
    },
    Pi = function (e, n) {
        return e || e === 0 ? n(e) : n
    },
    $a = function (e, n, r) {
        return r < e ? e : r > n ? n : r
    },
    At = function (e, n) {
        return !wt(e) || !(n = qS.exec(e)) ? '' : n[1]
    },
    ck = function (e, n, r) {
        return Pi(r, function (i) {
            return $a(e, n, i)
        })
    },
    gd = [].slice,
    C_ = function (e, n) {
        return (
            e &&
            xr(e) &&
            'length' in e &&
            ((!n && !e.length) || (e.length - 1 in e && xr(e[0]))) &&
            !e.nodeType &&
            e !== fr
        )
    },
    fk = function (e, n, r) {
        return (
            r === void 0 && (r = []),
            e.forEach(function (i) {
                var o
                return (wt(i) && !n) || C_(i, 1)
                    ? (o = r).push.apply(o, zn(i))
                    : r.push(i)
            }) || r
        )
    },
    zn = function (e, n, r) {
        return Me && !n && Me.selector
            ? Me.selector(e)
            : wt(e) && !r && (hd || !rl())
              ? gd.call((n || Yh).querySelectorAll(e), 0)
              : It(e)
                ? fk(e, r)
                : C_(e)
                  ? gd.call(e, 0)
                  : e
                    ? [e]
                    : []
    },
    _d = function (e) {
        return (
            (e = zn(e)[0] || Ca('Invalid scope') || {}),
            function (n) {
                var r = e.current || e.nativeElement || e
                return zn(
                    n,
                    r.querySelectorAll
                        ? r
                        : r === e
                          ? Ca('Invalid scope') || Yh.createElement('div')
                          : e,
                )
            }
        )
    },
    T_ = function (e) {
        return e.sort(function () {
            return 0.5 - Math.random()
        })
    },
    O_ = function (e) {
        if (Qe(e)) return e
        var n = xr(e) ? e : { each: e },
            r = Yi(n.ease),
            i = n.from || 0,
            o = parseFloat(n.base) || 0,
            l = {},
            a = i > 0 && i < 1,
            s = isNaN(i) || a,
            u = n.axis,
            c = i,
            d = i
        return (
            wt(i)
                ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
                : !a && s && ((c = i[0]), (d = i[1])),
            function (f, h, g) {
                var p = (g || n).length,
                    x = l[p],
                    v,
                    m,
                    _,
                    y,
                    k,
                    C,
                    S,
                    T,
                    D
                if (!x) {
                    if (
                        ((D = n.grid === 'auto' ? 0 : (n.grid || [1, An])[1]),
                        !D)
                    ) {
                        for (
                            S = -An;
                            S < (S = g[D++].getBoundingClientRect().left) &&
                            D < p;

                        );
                        D < p && D--
                    }
                    for (
                        x = l[p] = [],
                            v = s ? Math.min(D, p) * c - 0.5 : i % D,
                            m =
                                D === An
                                    ? 0
                                    : s
                                      ? (p * d) / D - 0.5
                                      : (i / D) | 0,
                            S = 0,
                            T = An,
                            C = 0;
                        C < p;
                        C++
                    )
                        (_ = (C % D) - v),
                            (y = m - ((C / D) | 0)),
                            (x[C] = k =
                                u
                                    ? Math.abs(u === 'y' ? y : _)
                                    : a_(_ * _ + y * y)),
                            k > S && (S = k),
                            k < T && (T = k)
                    i === 'random' && T_(x),
                        (x.max = S - T),
                        (x.min = T),
                        (x.v = p =
                            (parseFloat(n.amount) ||
                                parseFloat(n.each) *
                                    (D > p
                                        ? p - 1
                                        : u
                                          ? u === 'y'
                                              ? p / D
                                              : D
                                          : Math.max(D, p / D)) ||
                                0) * (i === 'edges' ? -1 : 1)),
                        (x.b = p < 0 ? o - p : o),
                        (x.u = At(n.amount || n.each) || 0),
                        (r = r && p < 0 ? z_(r) : r)
                }
                return (
                    (p = (x[f] - x.min) / x.max || 0),
                    _t(x.b + (r ? r(p) : p) * x.v) + x.u
                )
            }
        )
    },
    yd = function (e) {
        var n = Math.pow(10, ((e + '').split('.')[1] || '').length)
        return function (r) {
            var i = _t(Math.round(parseFloat(r) / e) * e * n)
            return (i - (i % 1)) / n + (br(r) ? 0 : At(r))
        }
    },
    P_ = function (e, n) {
        var r = It(e),
            i,
            o
        return (
            !r &&
                xr(e) &&
                ((i = r = e.radius || An),
                e.values
                    ? ((e = zn(e.values)), (o = !br(e[0])) && (i *= i))
                    : (e = yd(e.increment))),
            Pi(
                n,
                r
                    ? Qe(e)
                        ? function (l) {
                              return (o = e(l)), Math.abs(o - l) <= i ? o : l
                          }
                        : function (l) {
                              for (
                                  var a = parseFloat(o ? l.x : l),
                                      s = parseFloat(o ? l.y : 0),
                                      u = An,
                                      c = 0,
                                      d = e.length,
                                      f,
                                      h;
                                  d--;

                              )
                                  o
                                      ? ((f = e[d].x - a),
                                        (h = e[d].y - s),
                                        (f = f * f + h * h))
                                      : (f = Math.abs(e[d] - a)),
                                      f < u && ((u = f), (c = d))
                              return (
                                  (c = !i || u <= i ? e[c] : l),
                                  o || c === l || br(l) ? c : c + At(l)
                              )
                          }
                    : yd(e),
            )
        )
    },
    E_ = function (e, n, r, i) {
        return Pi(It(e) ? !n : r === !0 ? !!(r = 0) : !i, function () {
            return It(e)
                ? e[~~(Math.random() * e.length)]
                : (r = r || 1e-5) &&
                      (i = r < 1 ? Math.pow(10, (r + '').length - 2) : 1) &&
                      Math.floor(
                          Math.round(
                              (e - r / 2 + Math.random() * (n - e + r * 0.99)) /
                                  r,
                          ) *
                              r *
                              i,
                      ) / i
        })
    },
    dk = function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r]
        return function (i) {
            return n.reduce(function (o, l) {
                return l(o)
            }, i)
        }
    },
    hk = function (e, n) {
        return function (r) {
            return e(parseFloat(r)) + (n || At(r))
        }
    },
    pk = function (e, n, r) {
        return N_(e, n, 0, 1, r)
    },
    D_ = function (e, n, r) {
        return Pi(r, function (i) {
            return e[~~n(i)]
        })
    },
    mk = function t(e, n, r) {
        var i = n - e
        return It(e)
            ? D_(e, t(0, e.length), n)
            : Pi(r, function (o) {
                  return ((i + ((o - e) % i)) % i) + e
              })
    },
    vk = function t(e, n, r) {
        var i = n - e,
            o = i * 2
        return It(e)
            ? D_(e, t(0, e.length - 1), n)
            : Pi(r, function (l) {
                  return (
                      (l = (o + ((l - e) % o)) % o || 0),
                      e + (l > i ? o - l : l)
                  )
              })
    },
    Oa = function (e) {
        for (var n = 0, r = '', i, o, l, a; ~(i = e.indexOf('random(', n)); )
            (l = e.indexOf(')', i)),
                (a = e.charAt(i + 7) === '['),
                (o = e.substr(i + 7, l - i - 7).match(a ? f_ : dd)),
                (r +=
                    e.substr(n, i - n) +
                    E_(a ? o : +o[0], a ? 0 : +o[1], +o[2] || 1e-5)),
                (n = l + 1)
        return r + e.substr(n, e.length - n)
    },
    N_ = function (e, n, r, i, o) {
        var l = n - e,
            a = i - r
        return Pi(o, function (s) {
            return r + (((s - e) / l) * a || 0)
        })
    },
    gk = function t(e, n, r, i) {
        var o = isNaN(e + n)
            ? 0
            : function (h) {
                  return (1 - h) * e + h * n
              }
        if (!o) {
            var l = wt(e),
                a = {},
                s,
                u,
                c,
                d,
                f
            if ((r === !0 && (i = 1) && (r = null), l))
                (e = { p: e }), (n = { p: n })
            else if (It(e) && !It(n)) {
                for (c = [], d = e.length, f = d - 2, u = 1; u < d; u++)
                    c.push(t(e[u - 1], e[u]))
                d--,
                    (o = function (g) {
                        g *= d
                        var p = Math.min(f, ~~g)
                        return c[p](g - p)
                    }),
                    (r = n)
            } else i || (e = to(It(e) ? [] : {}, e))
            if (!c) {
                for (s in n) Kh.call(a, e, s, 'get', n[s])
                o = function (g) {
                    return ep(g, a) || (l ? e.p : e)
                }
            }
        }
        return Pi(r, o)
    },
    Vm = function (e, n, r) {
        var i = e.labels,
            o = An,
            l,
            a,
            s
        for (l in i)
            (a = i[l] - n),
                a < 0 == !!r && a && o > (a = Math.abs(a)) && ((s = l), (o = a))
        return s
    },
    yn = function (e, n, r) {
        var i = e.vars,
            o = i[n],
            l = Me,
            a = e._ctx,
            s,
            u,
            c
        if (o)
            return (
                (s = i[n + 'Params']),
                (u = i.callbackScope || e),
                r && pi.length && ku(),
                a && (Me = a),
                (c = s ? o.apply(u, s) : o.call(u)),
                (Me = l),
                c
            )
    },
    Ml = function (e) {
        return (
            yi(e),
            e.scrollTrigger && e.scrollTrigger.kill(!!zt),
            e.progress() < 1 && yn(e, 'onInterrupt'),
            e
        )
    },
    Ro,
    M_ = [],
    L_ = function (e) {
        if (e)
            if (((e = (!e.name && e.default) || e), Uh() || e.headless)) {
                var n = e.name,
                    r = Qe(e),
                    i =
                        n && !r && e.init
                            ? function () {
                                  this._props = []
                              }
                            : e,
                    o = {
                        init: Ta,
                        render: ep,
                        add: Kh,
                        kill: Rk,
                        modifier: Lk,
                        rawVars: 0,
                    },
                    l = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Jh,
                        aliases: {},
                        register: 0,
                    }
                if ((rl(), e !== i)) {
                    if (mn[n]) return
                    Vn(i, Vn(Cu(e, o), l)),
                        to(i.prototype, to(o, Cu(e, l))),
                        (mn[(i.prop = n)] = i),
                        e.targetTest && (bs.push(i), (Xh[n] = 1)),
                        (n =
                            (n === 'css'
                                ? 'CSS'
                                : n.charAt(0).toUpperCase() + n.substr(1)) +
                            'Plugin')
                }
                p_(n, i), e.register && e.register(un, i, an)
            } else M_.push(e)
    },
    _e = 255,
    Ll = {
        aqua: [0, _e, _e],
        lime: [0, _e, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, _e],
        navy: [0, 0, 128],
        white: [_e, _e, _e],
        olive: [128, 128, 0],
        yellow: [_e, _e, 0],
        orange: [_e, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [_e, 0, 0],
        pink: [_e, 192, 203],
        cyan: [0, _e, _e],
        transparent: [_e, _e, _e, 0],
    },
    $c = function (e, n, r) {
        return (
            (e += e < 0 ? 1 : e > 1 ? -1 : 0),
            ((e * 6 < 1
                ? n + (r - n) * e * 6
                : e < 0.5
                  ? r
                  : e * 3 < 2
                    ? n + (r - n) * (2 / 3 - e) * 6
                    : n) *
                _e +
                0.5) |
                0
        )
    },
    R_ = function (e, n, r) {
        var i = e ? (br(e) ? [e >> 16, (e >> 8) & _e, e & _e] : 0) : Ll.black,
            o,
            l,
            a,
            s,
            u,
            c,
            d,
            f,
            h,
            g
        if (!i) {
            if (
                (e.substr(-1) === ',' && (e = e.substr(0, e.length - 1)), Ll[e])
            )
                i = Ll[e]
            else if (e.charAt(0) === '#') {
                if (
                    (e.length < 6 &&
                        ((o = e.charAt(1)),
                        (l = e.charAt(2)),
                        (a = e.charAt(3)),
                        (e =
                            '#' +
                            o +
                            o +
                            l +
                            l +
                            a +
                            a +
                            (e.length === 5 ? e.charAt(4) + e.charAt(4) : ''))),
                    e.length === 9)
                )
                    return (
                        (i = parseInt(e.substr(1, 6), 16)),
                        [
                            i >> 16,
                            (i >> 8) & _e,
                            i & _e,
                            parseInt(e.substr(7), 16) / 255,
                        ]
                    )
                ;(e = parseInt(e.substr(1), 16)),
                    (i = [e >> 16, (e >> 8) & _e, e & _e])
            } else if (e.substr(0, 3) === 'hsl') {
                if (((i = g = e.match(dd)), !n))
                    (s = (+i[0] % 360) / 360),
                        (u = +i[1] / 100),
                        (c = +i[2] / 100),
                        (l = c <= 0.5 ? c * (u + 1) : c + u - c * u),
                        (o = c * 2 - l),
                        i.length > 3 && (i[3] *= 1),
                        (i[0] = $c(s + 1 / 3, o, l)),
                        (i[1] = $c(s, o, l)),
                        (i[2] = $c(s - 1 / 3, o, l))
                else if (~e.indexOf('='))
                    return (i = e.match(u_)), r && i.length < 4 && (i[3] = 1), i
            } else i = e.match(dd) || Ll.transparent
            i = i.map(Number)
        }
        return (
            n &&
                !g &&
                ((o = i[0] / _e),
                (l = i[1] / _e),
                (a = i[2] / _e),
                (d = Math.max(o, l, a)),
                (f = Math.min(o, l, a)),
                (c = (d + f) / 2),
                d === f
                    ? (s = u = 0)
                    : ((h = d - f),
                      (u = c > 0.5 ? h / (2 - d - f) : h / (d + f)),
                      (s =
                          d === o
                              ? (l - a) / h + (l < a ? 6 : 0)
                              : d === l
                                ? (a - o) / h + 2
                                : (o - l) / h + 4),
                      (s *= 60)),
                (i[0] = ~~(s + 0.5)),
                (i[1] = ~~(u * 100 + 0.5)),
                (i[2] = ~~(c * 100 + 0.5))),
            r && i.length < 4 && (i[3] = 1),
            i
        )
    },
    j_ = function (e) {
        var n = [],
            r = [],
            i = -1
        return (
            e.split(mi).forEach(function (o) {
                var l = o.match(Lo) || []
                n.push.apply(n, l), r.push((i += l.length + 1))
            }),
            (n.c = r),
            n
        )
    },
    $m = function (e, n, r) {
        var i = '',
            o = (e + i).match(mi),
            l = n ? 'hsla(' : 'rgba(',
            a = 0,
            s,
            u,
            c,
            d
        if (!o) return e
        if (
            ((o = o.map(function (f) {
                return (
                    (f = R_(f, n, 1)) &&
                    l +
                        (n
                            ? f[0] + ',' + f[1] + '%,' + f[2] + '%,' + f[3]
                            : f.join(',')) +
                        ')'
                )
            })),
            r && ((c = j_(e)), (s = r.c), s.join(i) !== c.c.join(i)))
        )
            for (u = e.replace(mi, '1').split(Lo), d = u.length - 1; a < d; a++)
                i +=
                    u[a] +
                    (~s.indexOf(a)
                        ? o.shift() || l + '0,0,0,0)'
                        : (c.length ? c : o.length ? o : r).shift())
        if (!u)
            for (u = e.split(mi), d = u.length - 1; a < d; a++) i += u[a] + o[a]
        return i + u[d]
    },
    mi = (function () {
        var t =
                '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
            e
        for (e in Ll) t += '|' + e + '\\b'
        return new RegExp(t + ')', 'gi')
    })(),
    _k = /hsl[a]?\(/,
    A_ = function (e) {
        var n = e.join(' '),
            r
        if (((mi.lastIndex = 0), mi.test(n)))
            return (
                (r = _k.test(n)),
                (e[1] = $m(e[1], r)),
                (e[0] = $m(e[0], r, j_(e[1]))),
                !0
            )
    },
    Pa,
    vn = (function () {
        var t = Date.now,
            e = 500,
            n = 33,
            r = t(),
            i = r,
            o = 1e3 / 240,
            l = o,
            a = [],
            s,
            u,
            c,
            d,
            f,
            h,
            g = function p(x) {
                var v = t() - i,
                    m = x === !0,
                    _,
                    y,
                    k,
                    C
                if (
                    ((v > e || v < 0) && (r += v - n),
                    (i += v),
                    (k = i - r),
                    (_ = k - l),
                    (_ > 0 || m) &&
                        ((C = ++d.frame),
                        (f = k - d.time * 1e3),
                        (d.time = k = k / 1e3),
                        (l += _ + (_ >= o ? 4 : o - _)),
                        (y = 1)),
                    m || (s = u(p)),
                    y)
                )
                    for (h = 0; h < a.length; h++) a[h](k, f, C, x)
            }
        return (
            (d = {
                time: 0,
                frame: 0,
                tick: function () {
                    g(!0)
                },
                deltaRatio: function (x) {
                    return f / (1e3 / (x || 60))
                },
                wake: function () {
                    d_ &&
                        (!hd &&
                            Uh() &&
                            ((fr = hd = window),
                            (Yh = fr.document || {}),
                            (kn.gsap = un),
                            (fr.gsapVersions || (fr.gsapVersions = [])).push(
                                un.version,
                            ),
                            h_(
                                Su ||
                                    fr.GreenSockGlobals ||
                                    (!fr.gsap && fr) ||
                                    {},
                            ),
                            M_.forEach(L_)),
                        (c =
                            typeof requestAnimationFrame < 'u' &&
                            requestAnimationFrame),
                        s && d.sleep(),
                        (u =
                            c ||
                            function (x) {
                                return setTimeout(x, (l - d.time * 1e3 + 1) | 0)
                            }),
                        (Pa = 1),
                        g(2))
                },
                sleep: function () {
                    ;(c ? cancelAnimationFrame : clearTimeout)(s),
                        (Pa = 0),
                        (u = Ta)
                },
                lagSmoothing: function (x, v) {
                    ;(e = x || 1 / 0), (n = Math.min(v || 33, e))
                },
                fps: function (x) {
                    ;(o = 1e3 / (x || 240)), (l = d.time * 1e3 + o)
                },
                add: function (x, v, m) {
                    var _ = v
                        ? function (y, k, C, S) {
                              x(y, k, C, S), d.remove(_)
                          }
                        : x
                    return d.remove(x), a[m ? 'unshift' : 'push'](_), rl(), _
                },
                remove: function (x, v) {
                    ~(v = a.indexOf(x)) && a.splice(v, 1) && h >= v && h--
                },
                _listeners: a,
            }),
            d
        )
    })(),
    rl = function () {
        return !Pa && vn.wake()
    },
    se = {},
    yk = /^[\d.\-M][\d.\-,\s]/,
    wk = /["']/g,
    xk = function (e) {
        for (
            var n = {},
                r = e.substr(1, e.length - 3).split(':'),
                i = r[0],
                o = 1,
                l = r.length,
                a,
                s,
                u;
            o < l;
            o++
        )
            (s = r[o]),
                (a = o !== l - 1 ? s.lastIndexOf(',') : s.length),
                (u = s.substr(0, a)),
                (n[i] = isNaN(u) ? u.replace(wk, '').trim() : +u),
                (i = s.substr(a + 1).trim())
        return n
    },
    Sk = function (e) {
        var n = e.indexOf('(') + 1,
            r = e.indexOf(')'),
            i = e.indexOf('(', n)
        return e.substring(n, ~i && i < r ? e.indexOf(')', r + 1) : r)
    },
    kk = function (e) {
        var n = (e + '').split('('),
            r = se[n[0]]
        return r && n.length > 1 && r.config
            ? r.config.apply(
                  null,
                  ~e.indexOf('{') ? [xk(n[1])] : Sk(e).split(',').map(__),
              )
            : se._CE && yk.test(e)
              ? se._CE('', e)
              : r
    },
    z_ = function (e) {
        return function (n) {
            return 1 - e(1 - n)
        }
    },
    I_ = function t(e, n) {
        for (var r = e._first, i; r; )
            r instanceof Yt
                ? t(r, n)
                : r.vars.yoyoEase &&
                  (!r._yoyo || !r._repeat) &&
                  r._yoyo !== n &&
                  (r.timeline
                      ? t(r.timeline, n)
                      : ((i = r._ease),
                        (r._ease = r._yEase),
                        (r._yEase = i),
                        (r._yoyo = n))),
                (r = r._next)
    },
    Yi = function (e, n) {
        return (e && (Qe(e) ? e : se[e] || kk(e))) || n
    },
    co = function (e, n, r, i) {
        r === void 0 &&
            (r = function (s) {
                return 1 - n(1 - s)
            }),
            i === void 0 &&
                (i = function (s) {
                    return s < 0.5 ? n(s * 2) / 2 : 1 - n((1 - s) * 2) / 2
                })
        var o = { easeIn: n, easeOut: r, easeInOut: i },
            l
        return (
            ln(e, function (a) {
                ;(se[a] = kn[a] = o), (se[(l = a.toLowerCase())] = r)
                for (var s in o)
                    se[
                        l +
                            (s === 'easeIn'
                                ? '.in'
                                : s === 'easeOut'
                                  ? '.out'
                                  : '.inOut')
                    ] = se[a + '.' + s] = o[s]
            }),
            o
        )
    },
    F_ = function (e) {
        return function (n) {
            return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2
        }
    },
    Bc = function t(e, n, r) {
        var i = n >= 1 ? n : 1,
            o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            l = (o / fd) * (Math.asin(1 / i) || 0),
            a = function (c) {
                return c === 1
                    ? 1
                    : i * Math.pow(2, -10 * c) * ZS((c - l) * o) + 1
            },
            s =
                e === 'out'
                    ? a
                    : e === 'in'
                      ? function (u) {
                            return 1 - a(1 - u)
                        }
                      : F_(a)
        return (
            (o = fd / o),
            (s.config = function (u, c) {
                return t(e, u, c)
            }),
            s
        )
    },
    Uc = function t(e, n) {
        n === void 0 && (n = 1.70158)
        var r = function (l) {
                return l ? --l * l * ((n + 1) * l + n) + 1 : 0
            },
            i =
                e === 'out'
                    ? r
                    : e === 'in'
                      ? function (o) {
                            return 1 - r(1 - o)
                        }
                      : F_(r)
        return (
            (i.config = function (o) {
                return t(e, o)
            }),
            i
        )
    }
ln('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
    var n = e < 5 ? e + 1 : e
    co(
        t + ',Power' + (n - 1),
        e
            ? function (r) {
                  return Math.pow(r, n)
              }
            : function (r) {
                  return r
              },
        function (r) {
            return 1 - Math.pow(1 - r, n)
        },
        function (r) {
            return r < 0.5
                ? Math.pow(r * 2, n) / 2
                : 1 - Math.pow((1 - r) * 2, n) / 2
        },
    )
})
se.Linear.easeNone = se.none = se.Linear.easeIn
co('Elastic', Bc('in'), Bc('out'), Bc())
;(function (t, e) {
    var n = 1 / e,
        r = 2 * n,
        i = 2.5 * n,
        o = function (a) {
            return a < n
                ? t * a * a
                : a < r
                  ? t * Math.pow(a - 1.5 / e, 2) + 0.75
                  : a < i
                    ? t * (a -= 2.25 / e) * a + 0.9375
                    : t * Math.pow(a - 2.625 / e, 2) + 0.984375
        }
    co(
        'Bounce',
        function (l) {
            return 1 - o(1 - l)
        },
        o,
    )
})(7.5625, 2.75)
co('Expo', function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0
})
co('Circ', function (t) {
    return -(a_(1 - t * t) - 1)
})
co('Sine', function (t) {
    return t === 1 ? 1 : -KS(t * GS) + 1
})
co('Back', Uc('in'), Uc('out'), Uc())
se.SteppedEase =
    se.steps =
    kn.SteppedEase =
        {
            config: function (e, n) {
                e === void 0 && (e = 1)
                var r = 1 / e,
                    i = e + (n ? 0 : 1),
                    o = n ? 1 : 0,
                    l = 1 - Se
                return function (a) {
                    return (((i * $a(0, l, a)) | 0) + o) * r
                }
            },
        }
el.ease = se['quad.out']
ln(
    'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
    function (t) {
        return (Gh += t + ',' + t + 'Params,')
    },
)
var b_ = function (e, n) {
        ;(this.id = QS++),
            (e._gsap = this),
            (this.target = e),
            (this.harness = n),
            (this.get = n ? n.get : v_),
            (this.set = n ? n.getSetter : Jh)
    },
    Ea = (function () {
        function t(n) {
            ;(this.vars = n),
                (this._delay = +n.delay || 0),
                (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
                    ((this._rDelay = n.repeatDelay || 0),
                    (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
                (this._ts = 1),
                nl(this, +n.duration, 1, 1),
                (this.data = n.data),
                Me && ((this._ctx = Me), Me.data.push(this)),
                Pa || vn.wake()
        }
        var e = t.prototype
        return (
            (e.delay = function (r) {
                return r || r === 0
                    ? (this.parent &&
                          this.parent.smoothChildTiming &&
                          this.startTime(this._start + r - this._delay),
                      (this._delay = r),
                      this)
                    : this._delay
            }),
            (e.duration = function (r) {
                return arguments.length
                    ? this.totalDuration(
                          this._repeat > 0
                              ? r + (r + this._rDelay) * this._repeat
                              : r,
                      )
                    : this.totalDuration() && this._dur
            }),
            (e.totalDuration = function (r) {
                return arguments.length
                    ? ((this._dirty = 0),
                      nl(
                          this,
                          this._repeat < 0
                              ? r
                              : (r - this._repeat * this._rDelay) /
                                    (this._repeat + 1),
                      ))
                    : this._tDur
            }),
            (e.totalTime = function (r, i) {
                if ((rl(), !arguments.length)) return this._tTime
                var o = this._dp
                if (o && o.smoothChildTiming && this._ts) {
                    for (
                        oc(this, r), !o._dp || o.parent || x_(o, this);
                        o && o.parent;

                    )
                        o.parent._time !==
                            o._start +
                                (o._ts >= 0
                                    ? o._tTime / o._ts
                                    : (o.totalDuration() - o._tTime) /
                                      -o._ts) && o.totalTime(o._tTime, !0),
                            (o = o.parent)
                    !this.parent &&
                        this._dp.autoRemoveChildren &&
                        ((this._ts > 0 && r < this._tDur) ||
                            (this._ts < 0 && r > 0) ||
                            (!this._tDur && !r)) &&
                        pr(this._dp, this, this._start - this._delay)
                }
                return (
                    (this._tTime !== r ||
                        (!this._dur && !i) ||
                        (this._initted && Math.abs(this._zTime) === Se) ||
                        (!r &&
                            !this._initted &&
                            (this.add || this._ptLookup))) &&
                        (this._ts || (this._pTime = r), g_(this, r, i)),
                    this
                )
            }),
            (e.time = function (r, i) {
                return arguments.length
                    ? this.totalTime(
                          Math.min(this.totalDuration(), r + bm(this)) %
                              (this._dur + this._rDelay) || (r ? this._dur : 0),
                          i,
                      )
                    : this._time
            }),
            (e.totalProgress = function (r, i) {
                return arguments.length
                    ? this.totalTime(this.totalDuration() * r, i)
                    : this.totalDuration()
                      ? Math.min(1, this._tTime / this._tDur)
                      : this.rawTime() > 0
                        ? 1
                        : 0
            }),
            (e.progress = function (r, i) {
                return arguments.length
                    ? this.totalTime(
                          this.duration() *
                              (this._yoyo && !(this.iteration() & 1)
                                  ? 1 - r
                                  : r) +
                              bm(this),
                          i,
                      )
                    : this.duration()
                      ? Math.min(1, this._time / this._dur)
                      : this.rawTime() > 0
                        ? 1
                        : 0
            }),
            (e.iteration = function (r, i) {
                var o = this.duration() + this._rDelay
                return arguments.length
                    ? this.totalTime(this._time + (r - 1) * o, i)
                    : this._repeat
                      ? tl(this._tTime, o) + 1
                      : 1
            }),
            (e.timeScale = function (r, i) {
                if (!arguments.length) return this._rts === -Se ? 0 : this._rts
                if (this._rts === r) return this
                var o =
                    this.parent && this._ts
                        ? Tu(this.parent._time, this)
                        : this._tTime
                return (
                    (this._rts = +r || 0),
                    (this._ts = this._ps || r === -Se ? 0 : this._rts),
                    this.totalTime(
                        $a(-Math.abs(this._delay), this._tDur, o),
                        i !== !1,
                    ),
                    ic(this),
                    ik(this)
                )
            }),
            (e.paused = function (r) {
                return arguments.length
                    ? (this._ps !== r &&
                          ((this._ps = r),
                          r
                              ? ((this._pTime =
                                    this._tTime ||
                                    Math.max(-this._delay, this.rawTime())),
                                (this._ts = this._act = 0))
                              : (rl(),
                                (this._ts = this._rts),
                                this.totalTime(
                                    this.parent &&
                                        !this.parent.smoothChildTiming
                                        ? this.rawTime()
                                        : this._tTime || this._pTime,
                                    this.progress() === 1 &&
                                        Math.abs(this._zTime) !== Se &&
                                        (this._tTime -= Se),
                                ))),
                      this)
                    : this._ps
            }),
            (e.startTime = function (r) {
                if (arguments.length) {
                    this._start = r
                    var i = this.parent || this._dp
                    return (
                        i &&
                            (i._sort || !this.parent) &&
                            pr(i, this, r - this._delay),
                        this
                    )
                }
                return this._start
            }),
            (e.endTime = function (r) {
                return (
                    this._start +
                    (on(r) ? this.totalDuration() : this.duration()) /
                        Math.abs(this._ts || 1)
                )
            }),
            (e.rawTime = function (r) {
                var i = this.parent || this._dp
                return i
                    ? r &&
                      (!this._ts ||
                          (this._repeat &&
                              this._time &&
                              this.totalProgress() < 1))
                        ? this._tTime % (this._dur + this._rDelay)
                        : this._ts
                          ? Tu(i.rawTime(r), this)
                          : this._tTime
                    : this._tTime
            }),
            (e.revert = function (r) {
                r === void 0 && (r = ek)
                var i = zt
                return (
                    (zt = r),
                    (this._initted || this._startAt) &&
                        (this.timeline && this.timeline.revert(r),
                        this.totalTime(-0.01, r.suppressEvents)),
                    this.data !== 'nested' && r.kill !== !1 && this.kill(),
                    (zt = i),
                    this
                )
            }),
            (e.globalTime = function (r) {
                for (var i = this, o = arguments.length ? r : i.rawTime(); i; )
                    (o = i._start + o / (Math.abs(i._ts) || 1)), (i = i._dp)
                return !this.parent && this._sat ? this._sat.globalTime(r) : o
            }),
            (e.repeat = function (r) {
                return arguments.length
                    ? ((this._repeat = r === 1 / 0 ? -2 : r), Wm(this))
                    : this._repeat === -2
                      ? 1 / 0
                      : this._repeat
            }),
            (e.repeatDelay = function (r) {
                if (arguments.length) {
                    var i = this._time
                    return (this._rDelay = r), Wm(this), i ? this.time(i) : this
                }
                return this._rDelay
            }),
            (e.yoyo = function (r) {
                return arguments.length ? ((this._yoyo = r), this) : this._yoyo
            }),
            (e.seek = function (r, i) {
                return this.totalTime(Dn(this, r), on(i))
            }),
            (e.restart = function (r, i) {
                return this.play().totalTime(r ? -this._delay : 0, on(i))
            }),
            (e.play = function (r, i) {
                return (
                    r != null && this.seek(r, i), this.reversed(!1).paused(!1)
                )
            }),
            (e.reverse = function (r, i) {
                return (
                    r != null && this.seek(r || this.totalDuration(), i),
                    this.reversed(!0).paused(!1)
                )
            }),
            (e.pause = function (r, i) {
                return r != null && this.seek(r, i), this.paused(!0)
            }),
            (e.resume = function () {
                return this.paused(!1)
            }),
            (e.reversed = function (r) {
                return arguments.length
                    ? (!!r !== this.reversed() &&
                          this.timeScale(-this._rts || (r ? -Se : 0)),
                      this)
                    : this._rts < 0
            }),
            (e.invalidate = function () {
                return (
                    (this._initted = this._act = 0), (this._zTime = -Se), this
                )
            }),
            (e.isActive = function () {
                var r = this.parent || this._dp,
                    i = this._start,
                    o
                return !!(
                    !r ||
                    (this._ts &&
                        this._initted &&
                        r.isActive() &&
                        (o = r.rawTime(!0)) >= i &&
                        o < this.endTime(!0) - Se)
                )
            }),
            (e.eventCallback = function (r, i, o) {
                var l = this.vars
                return arguments.length > 1
                    ? (i
                          ? ((l[r] = i),
                            o && (l[r + 'Params'] = o),
                            r === 'onUpdate' && (this._onUpdate = i))
                          : delete l[r],
                      this)
                    : l[r]
            }),
            (e.then = function (r) {
                var i = this
                return new Promise(function (o) {
                    var l = Qe(r) ? r : y_,
                        a = function () {
                            var u = i.then
                            ;(i.then = null),
                                Qe(l) &&
                                    (l = l(i)) &&
                                    (l.then || l === i) &&
                                    (i.then = u),
                                o(l),
                                (i.then = u)
                        }
                    ;(i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
                    (!i._tTime && i._ts < 0)
                        ? a()
                        : (i._prom = a)
                })
            }),
            (e.kill = function () {
                Ml(this)
            }),
            t
        )
    })()
Vn(Ea.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -Se,
    _prom: 0,
    _ps: !1,
    _rts: 1,
})
var Yt = (function (t) {
    l_(e, t)
    function e(r, i) {
        var o
        return (
            r === void 0 && (r = {}),
            (o = t.call(this, r) || this),
            (o.labels = {}),
            (o.smoothChildTiming = !!r.smoothChildTiming),
            (o.autoRemoveChildren = !!r.autoRemoveChildren),
            (o._sort = on(r.sortChildren)),
            Fe && pr(r.parent || Fe, Or(o), i),
            r.reversed && o.reverse(),
            r.paused && o.paused(!0),
            r.scrollTrigger && S_(Or(o), r.scrollTrigger),
            o
        )
    }
    var n = e.prototype
    return (
        (n.to = function (i, o, l) {
            return Gl(0, arguments, this), this
        }),
        (n.from = function (i, o, l) {
            return Gl(1, arguments, this), this
        }),
        (n.fromTo = function (i, o, l, a) {
            return Gl(2, arguments, this), this
        }),
        (n.set = function (i, o, l) {
            return (
                (o.duration = 0),
                (o.parent = this),
                Xl(o).repeatDelay || (o.repeat = 0),
                (o.immediateRender = !!o.immediateRender),
                new ot(i, o, Dn(this, l), 1),
                this
            )
        }),
        (n.call = function (i, o, l) {
            return pr(this, ot.delayedCall(0, i, o), l)
        }),
        (n.staggerTo = function (i, o, l, a, s, u, c) {
            return (
                (l.duration = o),
                (l.stagger = l.stagger || a),
                (l.onComplete = u),
                (l.onCompleteParams = c),
                (l.parent = this),
                new ot(i, l, Dn(this, s)),
                this
            )
        }),
        (n.staggerFrom = function (i, o, l, a, s, u, c) {
            return (
                (l.runBackwards = 1),
                (Xl(l).immediateRender = on(l.immediateRender)),
                this.staggerTo(i, o, l, a, s, u, c)
            )
        }),
        (n.staggerFromTo = function (i, o, l, a, s, u, c, d) {
            return (
                (a.startAt = l),
                (Xl(a).immediateRender = on(a.immediateRender)),
                this.staggerTo(i, o, a, s, u, c, d)
            )
        }),
        (n.render = function (i, o, l) {
            var a = this._time,
                s = this._dirty ? this.totalDuration() : this._tDur,
                u = this._dur,
                c = i <= 0 ? 0 : _t(i),
                d = this._zTime < 0 != i < 0 && (this._initted || !u),
                f,
                h,
                g,
                p,
                x,
                v,
                m,
                _,
                y,
                k,
                C,
                S
            if (
                (this !== Fe && c > s && i >= 0 && (c = s),
                c !== this._tTime || l || d)
            ) {
                if (
                    (a !== this._time &&
                        u &&
                        ((c += this._time - a), (i += this._time - a)),
                    (f = c),
                    (y = this._start),
                    (_ = this._ts),
                    (v = !_),
                    d &&
                        (u || (a = this._zTime),
                        (i || !o) && (this._zTime = i)),
                    this._repeat)
                ) {
                    if (
                        ((C = this._yoyo),
                        (x = u + this._rDelay),
                        this._repeat < -1 && i < 0)
                    )
                        return this.totalTime(x * 100 + i, o, l)
                    if (
                        ((f = _t(c % x)),
                        c === s
                            ? ((p = this._repeat), (f = u))
                            : ((p = ~~(c / x)),
                              p && p === c / x && ((f = u), p--),
                              f > u && (f = u)),
                        (k = tl(this._tTime, x)),
                        !a &&
                            this._tTime &&
                            k !== p &&
                            this._tTime - k * x - this._dur <= 0 &&
                            (k = p),
                        C && p & 1 && ((f = u - f), (S = 1)),
                        p !== k && !this._lock)
                    ) {
                        var T = C && k & 1,
                            D = T === (C && p & 1)
                        if (
                            (p < k && (T = !T),
                            (a = T ? 0 : c % u ? u : c),
                            (this._lock = 1),
                            (this.render(
                                a || (S ? 0 : _t(p * x)),
                                o,
                                !u,
                            )._lock = 0),
                            (this._tTime = c),
                            !o && this.parent && yn(this, 'onRepeat'),
                            this.vars.repeatRefresh &&
                                !S &&
                                (this.invalidate()._lock = 1),
                            (a && a !== this._time) ||
                                v !== !this._ts ||
                                (this.vars.onRepeat &&
                                    !this.parent &&
                                    !this._act))
                        )
                            return this
                        if (
                            ((u = this._dur),
                            (s = this._tDur),
                            D &&
                                ((this._lock = 2),
                                (a = T ? u : -1e-4),
                                this.render(a, !0),
                                this.vars.repeatRefresh &&
                                    !S &&
                                    this.invalidate()),
                            (this._lock = 0),
                            !this._ts && !v)
                        )
                            return this
                        I_(this, S)
                    }
                }
                if (
                    (this._hasPause &&
                        !this._forcing &&
                        this._lock < 2 &&
                        ((m = sk(this, _t(a), _t(f))),
                        m && (c -= f - (f = m._start))),
                    (this._tTime = c),
                    (this._time = f),
                    (this._act = !_),
                    this._initted ||
                        ((this._onUpdate = this.vars.onUpdate),
                        (this._initted = 1),
                        (this._zTime = i),
                        (a = 0)),
                    !a &&
                        f &&
                        !o &&
                        !p &&
                        (yn(this, 'onStart'), this._tTime !== c))
                )
                    return this
                if (f >= a && i >= 0)
                    for (h = this._first; h; ) {
                        if (
                            ((g = h._next),
                            (h._act || f >= h._start) && h._ts && m !== h)
                        ) {
                            if (h.parent !== this) return this.render(i, o, l)
                            if (
                                (h.render(
                                    h._ts > 0
                                        ? (f - h._start) * h._ts
                                        : (h._dirty
                                              ? h.totalDuration()
                                              : h._tDur) +
                                              (f - h._start) * h._ts,
                                    o,
                                    l,
                                ),
                                f !== this._time || (!this._ts && !v))
                            ) {
                                ;(m = 0), g && (c += this._zTime = -Se)
                                break
                            }
                        }
                        h = g
                    }
                else {
                    h = this._last
                    for (var P = i < 0 ? i : f; h; ) {
                        if (
                            ((g = h._prev),
                            (h._act || P <= h._end) && h._ts && m !== h)
                        ) {
                            if (h.parent !== this) return this.render(i, o, l)
                            if (
                                (h.render(
                                    h._ts > 0
                                        ? (P - h._start) * h._ts
                                        : (h._dirty
                                              ? h.totalDuration()
                                              : h._tDur) +
                                              (P - h._start) * h._ts,
                                    o,
                                    l || (zt && (h._initted || h._startAt)),
                                ),
                                f !== this._time || (!this._ts && !v))
                            ) {
                                ;(m = 0), g && (c += this._zTime = P ? -Se : Se)
                                break
                            }
                        }
                        h = g
                    }
                }
                if (
                    m &&
                    !o &&
                    (this.pause(),
                    (m.render(f >= a ? 0 : -Se)._zTime = f >= a ? 1 : -1),
                    this._ts)
                )
                    return (this._start = y), ic(this), this.render(i, o, l)
                this._onUpdate && !o && yn(this, 'onUpdate', !0),
                    ((c === s && this._tTime >= this.totalDuration()) ||
                        (!c && a)) &&
                        (y === this._start ||
                            Math.abs(_) !== Math.abs(this._ts)) &&
                        (this._lock ||
                            ((i || !u) &&
                                ((c === s && this._ts > 0) ||
                                    (!c && this._ts < 0)) &&
                                yi(this, 1),
                            !o &&
                                !(i < 0 && !a) &&
                                (c || a || !s) &&
                                (yn(
                                    this,
                                    c === s && i >= 0
                                        ? 'onComplete'
                                        : 'onReverseComplete',
                                    !0,
                                ),
                                this._prom &&
                                    !(c < s && this.timeScale() > 0) &&
                                    this._prom())))
            }
            return this
        }),
        (n.add = function (i, o) {
            var l = this
            if ((br(o) || (o = Dn(this, o, i)), !(i instanceof Ea))) {
                if (It(i))
                    return (
                        i.forEach(function (a) {
                            return l.add(a, o)
                        }),
                        this
                    )
                if (wt(i)) return this.addLabel(i, o)
                if (Qe(i)) i = ot.delayedCall(0, i)
                else return this
            }
            return this !== i ? pr(this, i, o) : this
        }),
        (n.getChildren = function (i, o, l, a) {
            i === void 0 && (i = !0),
                o === void 0 && (o = !0),
                l === void 0 && (l = !0),
                a === void 0 && (a = -An)
            for (var s = [], u = this._first; u; )
                u._start >= a &&
                    (u instanceof ot
                        ? o && s.push(u)
                        : (l && s.push(u),
                          i && s.push.apply(s, u.getChildren(!0, o, l)))),
                    (u = u._next)
            return s
        }),
        (n.getById = function (i) {
            for (var o = this.getChildren(1, 1, 1), l = o.length; l--; )
                if (o[l].vars.id === i) return o[l]
        }),
        (n.remove = function (i) {
            return wt(i)
                ? this.removeLabel(i)
                : Qe(i)
                  ? this.killTweensOf(i)
                  : (rc(this, i),
                    i === this._recent && (this._recent = this._last),
                    Ui(this))
        }),
        (n.totalTime = function (i, o) {
            return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                      this._ts &&
                      (this._start = _t(
                          vn.time -
                              (this._ts > 0
                                  ? i / this._ts
                                  : (this.totalDuration() - i) / -this._ts),
                      )),
                  t.prototype.totalTime.call(this, i, o),
                  (this._forcing = 0),
                  this)
                : this._tTime
        }),
        (n.addLabel = function (i, o) {
            return (this.labels[i] = Dn(this, o)), this
        }),
        (n.removeLabel = function (i) {
            return delete this.labels[i], this
        }),
        (n.addPause = function (i, o, l) {
            var a = ot.delayedCall(0, o || Ta, l)
            return (
                (a.data = 'isPause'),
                (this._hasPause = 1),
                pr(this, a, Dn(this, i))
            )
        }),
        (n.removePause = function (i) {
            var o = this._first
            for (i = Dn(this, i); o; )
                o._start === i && o.data === 'isPause' && yi(o), (o = o._next)
        }),
        (n.killTweensOf = function (i, o, l) {
            for (var a = this.getTweensOf(i, l), s = a.length; s--; )
                ei !== a[s] && a[s].kill(i, o)
            return this
        }),
        (n.getTweensOf = function (i, o) {
            for (var l = [], a = zn(i), s = this._first, u = br(o), c; s; )
                s instanceof ot
                    ? tk(s._targets, a) &&
                      (u
                          ? (!ei || (s._initted && s._ts)) &&
                            s.globalTime(0) <= o &&
                            s.globalTime(s.totalDuration()) > o
                          : !o || s.isActive()) &&
                      l.push(s)
                    : (c = s.getTweensOf(a, o)).length && l.push.apply(l, c),
                    (s = s._next)
            return l
        }),
        (n.tweenTo = function (i, o) {
            o = o || {}
            var l = this,
                a = Dn(l, i),
                s = o,
                u = s.startAt,
                c = s.onStart,
                d = s.onStartParams,
                f = s.immediateRender,
                h,
                g = ot.to(
                    l,
                    Vn(
                        {
                            ease: o.ease || 'none',
                            lazy: !1,
                            immediateRender: !1,
                            time: a,
                            overwrite: 'auto',
                            duration:
                                o.duration ||
                                Math.abs(
                                    (a -
                                        (u && 'time' in u ? u.time : l._time)) /
                                        l.timeScale(),
                                ) ||
                                Se,
                            onStart: function () {
                                if ((l.pause(), !h)) {
                                    var x =
                                        o.duration ||
                                        Math.abs(
                                            (a -
                                                (u && 'time' in u
                                                    ? u.time
                                                    : l._time)) /
                                                l.timeScale(),
                                        )
                                    g._dur !== x &&
                                        nl(g, x, 0, 1).render(g._time, !0, !0),
                                        (h = 1)
                                }
                                c && c.apply(g, d || [])
                            },
                        },
                        o,
                    ),
                )
            return f ? g.render(0) : g
        }),
        (n.tweenFromTo = function (i, o, l) {
            return this.tweenTo(o, Vn({ startAt: { time: Dn(this, i) } }, l))
        }),
        (n.recent = function () {
            return this._recent
        }),
        (n.nextLabel = function (i) {
            return i === void 0 && (i = this._time), Vm(this, Dn(this, i))
        }),
        (n.previousLabel = function (i) {
            return i === void 0 && (i = this._time), Vm(this, Dn(this, i), 1)
        }),
        (n.currentLabel = function (i) {
            return arguments.length
                ? this.seek(i, !0)
                : this.previousLabel(this._time + Se)
        }),
        (n.shiftChildren = function (i, o, l) {
            l === void 0 && (l = 0)
            for (var a = this._first, s = this.labels, u; a; )
                a._start >= l && ((a._start += i), (a._end += i)), (a = a._next)
            if (o) for (u in s) s[u] >= l && (s[u] += i)
            return Ui(this)
        }),
        (n.invalidate = function (i) {
            var o = this._first
            for (this._lock = 0; o; ) o.invalidate(i), (o = o._next)
            return t.prototype.invalidate.call(this, i)
        }),
        (n.clear = function (i) {
            i === void 0 && (i = !0)
            for (var o = this._first, l; o; )
                (l = o._next), this.remove(o), (o = l)
            return (
                this._dp && (this._time = this._tTime = this._pTime = 0),
                i && (this.labels = {}),
                Ui(this)
            )
        }),
        (n.totalDuration = function (i) {
            var o = 0,
                l = this,
                a = l._last,
                s = An,
                u,
                c,
                d
            if (arguments.length)
                return l.timeScale(
                    (l._repeat < 0 ? l.duration() : l.totalDuration()) /
                        (l.reversed() ? -i : i),
                )
            if (l._dirty) {
                for (d = l.parent; a; )
                    (u = a._prev),
                        a._dirty && a.totalDuration(),
                        (c = a._start),
                        c > s && l._sort && a._ts && !l._lock
                            ? ((l._lock = 1),
                              (pr(l, a, c - a._delay, 1)._lock = 0))
                            : (s = c),
                        c < 0 &&
                            a._ts &&
                            ((o -= c),
                            ((!d && !l._dp) || (d && d.smoothChildTiming)) &&
                                ((l._start += c / l._ts),
                                (l._time -= c),
                                (l._tTime -= c)),
                            l.shiftChildren(-c, !1, -1 / 0),
                            (s = 0)),
                        a._end > o && a._ts && (o = a._end),
                        (a = u)
                nl(l, l === Fe && l._time > o ? l._time : o, 1, 1),
                    (l._dirty = 0)
            }
            return l._tDur
        }),
        (e.updateRoot = function (i) {
            if (
                (Fe._ts && (g_(Fe, Tu(i, Fe)), (m_ = vn.frame)), vn.frame >= Im)
            ) {
                Im += xn.autoSleep || 120
                var o = Fe._first
                if (
                    (!o || !o._ts) &&
                    xn.autoSleep &&
                    vn._listeners.length < 2
                ) {
                    for (; o && !o._ts; ) o = o._next
                    o || vn.sleep()
                }
            }
        }),
        e
    )
})(Ea)
Vn(Yt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 })
var Ck = function (e, n, r, i, o, l, a) {
        var s = new an(this._pt, e, n, 0, 1, Y_, null, o),
            u = 0,
            c = 0,
            d,
            f,
            h,
            g,
            p,
            x,
            v,
            m
        for (
            s.b = r,
                s.e = i,
                r += '',
                i += '',
                (v = ~i.indexOf('random(')) && (i = Oa(i)),
                l && ((m = [r, i]), l(m, e, n), (r = m[0]), (i = m[1])),
                f = r.match(Wc) || [];
            (d = Wc.exec(i));

        )
            (g = d[0]),
                (p = i.substring(u, d.index)),
                h ? (h = (h + 1) % 5) : p.substr(-5) === 'rgba(' && (h = 1),
                g !== f[c++] &&
                    ((x = parseFloat(f[c - 1]) || 0),
                    (s._pt = {
                        _next: s._pt,
                        p: p || c === 1 ? p : ',',
                        s: x,
                        c:
                            g.charAt(1) === '='
                                ? Vo(x, g) - x
                                : parseFloat(g) - x,
                        m: h && h < 4 ? Math.round : 0,
                    }),
                    (u = Wc.lastIndex))
        return (
            (s.c = u < i.length ? i.substring(u, i.length) : ''),
            (s.fp = a),
            (c_.test(i) || v) && (s.e = 0),
            (this._pt = s),
            s
        )
    },
    Kh = function (e, n, r, i, o, l, a, s, u, c) {
        Qe(i) && (i = i(o || 0, e, l))
        var d = e[n],
            f =
                r !== 'get'
                    ? r
                    : Qe(d)
                      ? u
                          ? e[
                                n.indexOf('set') || !Qe(e['get' + n.substr(3)])
                                    ? n
                                    : 'get' + n.substr(3)
                            ](u)
                          : e[n]()
                      : d,
            h = Qe(d) ? (u ? Dk : B_) : qh,
            g
        if (
            (wt(i) &&
                (~i.indexOf('random(') && (i = Oa(i)),
                i.charAt(1) === '=' &&
                    ((g = Vo(f, i) + (At(f) || 0)), (g || g === 0) && (i = g))),
            !c || f !== i || wd)
        )
            return !isNaN(f * i) && i !== ''
                ? ((g = new an(
                      this._pt,
                      e,
                      n,
                      +f || 0,
                      i - (f || 0),
                      typeof d == 'boolean' ? Mk : U_,
                      0,
                      h,
                  )),
                  u && (g.fp = u),
                  a && g.modifier(a, this, e),
                  (this._pt = g))
                : (!d && !(n in e) && Hh(n, i),
                  Ck.call(this, e, n, f, i, h, s || xn.stringFilter, u))
    },
    Tk = function (e, n, r, i, o) {
        if (
            (Qe(e) && (e = Ql(e, o, n, r, i)),
            !xr(e) || (e.style && e.nodeType) || It(e) || s_(e))
        )
            return wt(e) ? Ql(e, o, n, r, i) : e
        var l = {},
            a
        for (a in e) l[a] = Ql(e[a], o, n, r, i)
        return l
    },
    W_ = function (e, n, r, i, o, l) {
        var a, s, u, c
        if (
            mn[e] &&
            (a = new mn[e]()).init(
                o,
                a.rawVars ? n[e] : Tk(n[e], i, o, l, r),
                r,
                i,
                l,
            ) !== !1 &&
            ((r._pt = s =
                new an(r._pt, o, e, 0, 1, a.render, a, 0, a.priority)),
            r !== Ro)
        )
            for (
                u = r._ptLookup[r._targets.indexOf(o)], c = a._props.length;
                c--;

            )
                u[a._props[c]] = s
        return a
    },
    ei,
    wd,
    Zh = function t(e, n, r) {
        var i = e.vars,
            o = i.ease,
            l = i.startAt,
            a = i.immediateRender,
            s = i.lazy,
            u = i.onUpdate,
            c = i.runBackwards,
            d = i.yoyoEase,
            f = i.keyframes,
            h = i.autoRevert,
            g = e._dur,
            p = e._startAt,
            x = e._targets,
            v = e.parent,
            m = v && v.data === 'nested' ? v.vars.targets : x,
            _ = e._overwrite === 'auto' && !$h,
            y = e.timeline,
            k,
            C,
            S,
            T,
            D,
            P,
            I,
            L,
            U,
            Y,
            q,
            W,
            V
        if (
            (y && (!f || !o) && (o = 'none'),
            (e._ease = Yi(o, el.ease)),
            (e._yEase = d ? z_(Yi(d === !0 ? o : d, el.ease)) : 0),
            d &&
                e._yoyo &&
                !e._repeat &&
                ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
            (e._from = !y && !!i.runBackwards),
            !y || (f && !i.stagger))
        ) {
            if (
                ((L = x[0] ? Bi(x[0]).harness : 0),
                (W = L && i[L.prop]),
                (k = Cu(i, Xh)),
                p &&
                    (p._zTime < 0 && p.progress(1),
                    n < 0 && c && a && !h
                        ? p.render(-1, !0)
                        : p.revert(c && g ? Fs : JS),
                    (p._lazy = 0)),
                l)
            ) {
                if (
                    (yi(
                        (e._startAt = ot.set(
                            x,
                            Vn(
                                {
                                    data: 'isStart',
                                    overwrite: !1,
                                    parent: v,
                                    immediateRender: !0,
                                    lazy: !p && on(s),
                                    startAt: null,
                                    delay: 0,
                                    onUpdate:
                                        u &&
                                        function () {
                                            return yn(e, 'onUpdate')
                                        },
                                    stagger: 0,
                                },
                                l,
                            ),
                        )),
                    ),
                    (e._startAt._dp = 0),
                    (e._startAt._sat = e),
                    n < 0 && (zt || (!a && !h)) && e._startAt.revert(Fs),
                    a && g && n <= 0 && r <= 0)
                ) {
                    n && (e._zTime = n)
                    return
                }
            } else if (c && g && !p) {
                if (
                    (n && (a = !1),
                    (S = Vn(
                        {
                            overwrite: !1,
                            data: 'isFromStart',
                            lazy: a && !p && on(s),
                            immediateRender: a,
                            stagger: 0,
                            parent: v,
                        },
                        k,
                    )),
                    W && (S[L.prop] = W),
                    yi((e._startAt = ot.set(x, S))),
                    (e._startAt._dp = 0),
                    (e._startAt._sat = e),
                    n < 0 &&
                        (zt
                            ? e._startAt.revert(Fs)
                            : e._startAt.render(-1, !0)),
                    (e._zTime = n),
                    !a)
                )
                    t(e._startAt, Se, Se)
                else if (!n) return
            }
            for (
                e._pt = e._ptCache = 0, s = (g && on(s)) || (s && !g), C = 0;
                C < x.length;
                C++
            ) {
                if (
                    ((D = x[C]),
                    (I = D._gsap || Qh(x)[C]._gsap),
                    (e._ptLookup[C] = Y = {}),
                    pd[I.id] && pi.length && ku(),
                    (q = m === x ? C : m.indexOf(D)),
                    L &&
                        (U = new L()).init(D, W || k, e, q, m) !== !1 &&
                        ((e._pt = T =
                            new an(
                                e._pt,
                                D,
                                U.name,
                                0,
                                1,
                                U.render,
                                U,
                                0,
                                U.priority,
                            )),
                        U._props.forEach(function (N) {
                            Y[N] = T
                        }),
                        U.priority && (P = 1)),
                    !L || W)
                )
                    for (S in k)
                        mn[S] && (U = W_(S, k, e, q, D, m))
                            ? U.priority && (P = 1)
                            : (Y[S] = T =
                                  Kh.call(
                                      e,
                                      D,
                                      S,
                                      'get',
                                      k[S],
                                      q,
                                      m,
                                      0,
                                      i.stringFilter,
                                  ))
                e._op && e._op[C] && e.kill(D, e._op[C]),
                    _ &&
                        e._pt &&
                        ((ei = e),
                        Fe.killTweensOf(D, Y, e.globalTime(n)),
                        (V = !e.parent),
                        (ei = 0)),
                    e._pt && s && (pd[I.id] = 1)
            }
            P && H_(e), e._onInit && e._onInit(e)
        }
        ;(e._onUpdate = u),
            (e._initted = (!e._op || e._pt) && !V),
            f && n <= 0 && y.render(An, !0, !0)
    },
    Ok = function (e, n, r, i, o, l, a, s) {
        var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[n],
            c,
            d,
            f,
            h
        if (!u)
            for (
                u = e._ptCache[n] = [], f = e._ptLookup, h = e._targets.length;
                h--;

            ) {
                if (((c = f[h][n]), c && c.d && c.d._pt))
                    for (c = c.d._pt; c && c.p !== n && c.fp !== n; )
                        c = c._next
                if (!c)
                    return (
                        (wd = 1),
                        (e.vars[n] = '+=0'),
                        Zh(e, a),
                        (wd = 0),
                        s ? Ca(n + ' not eligible for reset') : 1
                    )
                u.push(c)
            }
        for (h = u.length; h--; )
            (d = u[h]),
                (c = d._pt || d),
                (c.s = (i || i === 0) && !o ? i : c.s + (i || 0) + l * c.c),
                (c.c = r - c.s),
                d.e && (d.e = qe(r) + At(d.e)),
                d.b && (d.b = c.s + At(d.b))
    },
    Pk = function (e, n) {
        var r = e[0] ? Bi(e[0]).harness : 0,
            i = r && r.aliases,
            o,
            l,
            a,
            s
        if (!i) return n
        o = to({}, n)
        for (l in i)
            if (l in o)
                for (s = i[l].split(','), a = s.length; a--; ) o[s[a]] = o[l]
        return o
    },
    Ek = function (e, n, r, i) {
        var o = n.ease || i || 'power1.inOut',
            l,
            a
        if (It(n))
            (a = r[e] || (r[e] = [])),
                n.forEach(function (s, u) {
                    return a.push({ t: (u / (n.length - 1)) * 100, v: s, e: o })
                })
        else
            for (l in n)
                (a = r[l] || (r[l] = [])),
                    l === 'ease' || a.push({ t: parseFloat(e), v: n[l], e: o })
    },
    Ql = function (e, n, r, i, o) {
        return Qe(e)
            ? e.call(n, r, i, o)
            : wt(e) && ~e.indexOf('random(')
              ? Oa(e)
              : e
    },
    V_ = Gh + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
    $_ = {}
ln(V_ + ',id,stagger,delay,duration,paused,scrollTrigger', function (t) {
    return ($_[t] = 1)
})
var ot = (function (t) {
    l_(e, t)
    function e(r, i, o, l) {
        var a
        typeof i == 'number' && ((o.duration = i), (i = o), (o = null)),
            (a = t.call(this, l ? i : Xl(i)) || this)
        var s = a.vars,
            u = s.duration,
            c = s.delay,
            d = s.immediateRender,
            f = s.stagger,
            h = s.overwrite,
            g = s.keyframes,
            p = s.defaults,
            x = s.scrollTrigger,
            v = s.yoyoEase,
            m = i.parent || Fe,
            _ = (It(r) || s_(r) ? br(r[0]) : 'length' in i) ? [r] : zn(r),
            y,
            k,
            C,
            S,
            T,
            D,
            P,
            I
        if (
            ((a._targets = _.length
                ? Qh(_)
                : Ca(
                      'GSAP target ' + r + ' not found. https://gsap.com',
                      !xn.nullTargetWarn,
                  ) || []),
            (a._ptLookup = []),
            (a._overwrite = h),
            g || f || ds(u) || ds(c))
        ) {
            if (
                ((i = a.vars),
                (y = a.timeline =
                    new Yt({
                        data: 'nested',
                        defaults: p || {},
                        targets: m && m.data === 'nested' ? m.vars.targets : _,
                    })),
                y.kill(),
                (y.parent = y._dp = Or(a)),
                (y._start = 0),
                f || ds(u) || ds(c))
            ) {
                if (((S = _.length), (P = f && O_(f)), xr(f)))
                    for (T in f)
                        ~V_.indexOf(T) && (I || (I = {}), (I[T] = f[T]))
                for (k = 0; k < S; k++)
                    (C = Cu(i, $_)),
                        (C.stagger = 0),
                        v && (C.yoyoEase = v),
                        I && to(C, I),
                        (D = _[k]),
                        (C.duration = +Ql(u, Or(a), k, D, _)),
                        (C.delay = (+Ql(c, Or(a), k, D, _) || 0) - a._delay),
                        !f &&
                            S === 1 &&
                            C.delay &&
                            ((a._delay = c = C.delay),
                            (a._start += c),
                            (C.delay = 0)),
                        y.to(D, C, P ? P(k, D, _) : 0),
                        (y._ease = se.none)
                y.duration() ? (u = c = 0) : (a.timeline = 0)
            } else if (g) {
                Xl(Vn(y.vars.defaults, { ease: 'none' })),
                    (y._ease = Yi(g.ease || i.ease || 'none'))
                var L = 0,
                    U,
                    Y,
                    q
                if (It(g))
                    g.forEach(function (W) {
                        return y.to(_, W, '>')
                    }),
                        y.duration()
                else {
                    C = {}
                    for (T in g)
                        T === 'ease' ||
                            T === 'easeEach' ||
                            Ek(T, g[T], C, g.easeEach)
                    for (T in C)
                        for (
                            U = C[T].sort(function (W, V) {
                                return W.t - V.t
                            }),
                                L = 0,
                                k = 0;
                            k < U.length;
                            k++
                        )
                            (Y = U[k]),
                                (q = {
                                    ease: Y.e,
                                    duration:
                                        ((Y.t - (k ? U[k - 1].t : 0)) / 100) *
                                        u,
                                }),
                                (q[T] = Y.v),
                                y.to(_, q, L),
                                (L += q.duration)
                    y.duration() < u && y.to({}, { duration: u - y.duration() })
                }
            }
            u || a.duration((u = y.duration()))
        } else a.timeline = 0
        return (
            h === !0 && !$h && ((ei = Or(a)), Fe.killTweensOf(_), (ei = 0)),
            pr(m, Or(a), o),
            i.reversed && a.reverse(),
            i.paused && a.paused(!0),
            (d ||
                (!u &&
                    !g &&
                    a._start === _t(m._time) &&
                    on(d) &&
                    ok(Or(a)) &&
                    m.data !== 'nested')) &&
                ((a._tTime = -Se), a.render(Math.max(0, -c) || 0)),
            x && S_(Or(a), x),
            a
        )
    }
    var n = e.prototype
    return (
        (n.render = function (i, o, l) {
            var a = this._time,
                s = this._tDur,
                u = this._dur,
                c = i < 0,
                d = i > s - Se && !c ? s : i < Se ? 0 : i,
                f,
                h,
                g,
                p,
                x,
                v,
                m,
                _,
                y
            if (!u) ak(this, i, o, l)
            else if (
                d !== this._tTime ||
                !i ||
                l ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== c)
            ) {
                if (((f = d), (_ = this.timeline), this._repeat)) {
                    if (((p = u + this._rDelay), this._repeat < -1 && c))
                        return this.totalTime(p * 100 + i, o, l)
                    if (
                        ((f = _t(d % p)),
                        d === s
                            ? ((g = this._repeat), (f = u))
                            : ((g = ~~(d / p)),
                              g && g === _t(d / p) && ((f = u), g--),
                              f > u && (f = u)),
                        (v = this._yoyo && g & 1),
                        v && ((y = this._yEase), (f = u - f)),
                        (x = tl(this._tTime, p)),
                        f === a && !l && this._initted && g === x)
                    )
                        return (this._tTime = d), this
                    g !== x &&
                        (_ && this._yEase && I_(_, v),
                        this.vars.repeatRefresh &&
                            !v &&
                            !this._lock &&
                            this._time !== p &&
                            this._initted &&
                            ((this._lock = l = 1),
                            (this.render(_t(p * g), !0).invalidate()._lock =
                                0)))
                }
                if (!this._initted) {
                    if (k_(this, c ? i : f, l, o, d))
                        return (this._tTime = 0), this
                    if (
                        a !== this._time &&
                        !(l && this.vars.repeatRefresh && g !== x)
                    )
                        return this
                    if (u !== this._dur) return this.render(i, o, l)
                }
                if (
                    ((this._tTime = d),
                    (this._time = f),
                    !this._act &&
                        this._ts &&
                        ((this._act = 1), (this._lazy = 0)),
                    (this.ratio = m = (y || this._ease)(f / u)),
                    this._from && (this.ratio = m = 1 - m),
                    f &&
                        !a &&
                        !o &&
                        !g &&
                        (yn(this, 'onStart'), this._tTime !== d))
                )
                    return this
                for (h = this._pt; h; ) h.r(m, h.d), (h = h._next)
                ;(_ &&
                    _.render(
                        i < 0 ? i : _._dur * _._ease(f / this._dur),
                        o,
                        l,
                    )) ||
                    (this._startAt && (this._zTime = i)),
                    this._onUpdate &&
                        !o &&
                        (c && md(this, i, o, l), yn(this, 'onUpdate')),
                    this._repeat &&
                        g !== x &&
                        this.vars.onRepeat &&
                        !o &&
                        this.parent &&
                        yn(this, 'onRepeat'),
                    (d === this._tDur || !d) &&
                        this._tTime === d &&
                        (c && !this._onUpdate && md(this, i, !0, !0),
                        (i || !u) &&
                            ((d === this._tDur && this._ts > 0) ||
                                (!d && this._ts < 0)) &&
                            yi(this, 1),
                        !o &&
                            !(c && !a) &&
                            (d || a || v) &&
                            (yn(
                                this,
                                d === s ? 'onComplete' : 'onReverseComplete',
                                !0,
                            ),
                            this._prom &&
                                !(d < s && this.timeScale() > 0) &&
                                this._prom()))
            }
            return this
        }),
        (n.targets = function () {
            return this._targets
        }),
        (n.invalidate = function (i) {
            return (
                (!i || !this.vars.runBackwards) && (this._startAt = 0),
                (this._pt =
                    this._op =
                    this._onUpdate =
                    this._lazy =
                    this.ratio =
                        0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(i),
                t.prototype.invalidate.call(this, i)
            )
        }),
        (n.resetTo = function (i, o, l, a, s) {
            Pa || vn.wake(), this._ts || this.play()
            var u = Math.min(
                    this._dur,
                    (this._dp._time - this._start) * this._ts,
                ),
                c
            return (
                this._initted || Zh(this, u),
                (c = this._ease(u / this._dur)),
                Ok(this, i, o, l, a, c, u, s)
                    ? this.resetTo(i, o, l, a, 1)
                    : (oc(this, 0),
                      this.parent ||
                          w_(
                              this._dp,
                              this,
                              '_first',
                              '_last',
                              this._dp._sort ? '_start' : 0,
                          ),
                      this.render(0))
            )
        }),
        (n.kill = function (i, o) {
            if ((o === void 0 && (o = 'all'), !i && (!o || o === 'all')))
                return (
                    (this._lazy = this._pt = 0), this.parent ? Ml(this) : this
                )
            if (this.timeline) {
                var l = this.timeline.totalDuration()
                return (
                    this.timeline.killTweensOf(
                        i,
                        o,
                        ei && ei.vars.overwrite !== !0,
                    )._first || Ml(this),
                    this.parent &&
                        l !== this.timeline.totalDuration() &&
                        nl(this, (this._dur * this.timeline._tDur) / l, 0, 1),
                    this
                )
            }
            var a = this._targets,
                s = i ? zn(i) : a,
                u = this._ptLookup,
                c = this._pt,
                d,
                f,
                h,
                g,
                p,
                x,
                v
            if ((!o || o === 'all') && rk(a, s))
                return o === 'all' && (this._pt = 0), Ml(this)
            for (
                d = this._op = this._op || [],
                    o !== 'all' &&
                        (wt(o) &&
                            ((p = {}),
                            ln(o, function (m) {
                                return (p[m] = 1)
                            }),
                            (o = p)),
                        (o = Pk(a, o))),
                    v = a.length;
                v--;

            )
                if (~s.indexOf(a[v])) {
                    ;(f = u[v]),
                        o === 'all'
                            ? ((d[v] = o), (g = f), (h = {}))
                            : ((h = d[v] = d[v] || {}), (g = o))
                    for (p in g)
                        (x = f && f[p]),
                            x &&
                                ((!('kill' in x.d) || x.d.kill(p) === !0) &&
                                    rc(this, x, '_pt'),
                                delete f[p]),
                            h !== 'all' && (h[p] = 1)
                }
            return this._initted && !this._pt && c && Ml(this), this
        }),
        (e.to = function (i, o) {
            return new e(i, o, arguments[2])
        }),
        (e.from = function (i, o) {
            return Gl(1, arguments)
        }),
        (e.delayedCall = function (i, o, l, a) {
            return new e(o, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: i,
                onComplete: o,
                onReverseComplete: o,
                onCompleteParams: l,
                onReverseCompleteParams: l,
                callbackScope: a,
            })
        }),
        (e.fromTo = function (i, o, l) {
            return Gl(2, arguments)
        }),
        (e.set = function (i, o) {
            return (
                (o.duration = 0), o.repeatDelay || (o.repeat = 0), new e(i, o)
            )
        }),
        (e.killTweensOf = function (i, o, l) {
            return Fe.killTweensOf(i, o, l)
        }),
        e
    )
})(Ea)
Vn(ot.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 })
ln('staggerTo,staggerFrom,staggerFromTo', function (t) {
    ot[t] = function () {
        var e = new Yt(),
            n = gd.call(arguments, 0)
        return n.splice(t === 'staggerFromTo' ? 5 : 4, 0, 0), e[t].apply(e, n)
    }
})
var qh = function (e, n, r) {
        return (e[n] = r)
    },
    B_ = function (e, n, r) {
        return e[n](r)
    },
    Dk = function (e, n, r, i) {
        return e[n](i.fp, r)
    },
    Nk = function (e, n, r) {
        return e.setAttribute(n, r)
    },
    Jh = function (e, n) {
        return Qe(e[n]) ? B_ : Bh(e[n]) && e.setAttribute ? Nk : qh
    },
    U_ = function (e, n) {
        return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
    },
    Mk = function (e, n) {
        return n.set(n.t, n.p, !!(n.s + n.c * e), n)
    },
    Y_ = function (e, n) {
        var r = n._pt,
            i = ''
        if (!e && n.b) i = n.b
        else if (e === 1 && n.e) i = n.e
        else {
            for (; r; )
                (i =
                    r.p +
                    (r.m
                        ? r.m(r.s + r.c * e)
                        : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
                    i),
                    (r = r._next)
            i += n.c
        }
        n.set(n.t, n.p, i, n)
    },
    ep = function (e, n) {
        for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next)
    },
    Lk = function (e, n, r, i) {
        for (var o = this._pt, l; o; )
            (l = o._next), o.p === i && o.modifier(e, n, r), (o = l)
    },
    Rk = function (e) {
        for (var n = this._pt, r, i; n; )
            (i = n._next),
                (n.p === e && !n.op) || n.op === e
                    ? rc(this, n, '_pt')
                    : n.dep || (r = 1),
                (n = i)
        return !r
    },
    jk = function (e, n, r, i) {
        i.mSet(e, n, i.m.call(i.tween, r, i.mt), i)
    },
    H_ = function (e) {
        for (var n = e._pt, r, i, o, l; n; ) {
            for (r = n._next, i = o; i && i.pr > n.pr; ) i = i._next
            ;(n._prev = i ? i._prev : l) ? (n._prev._next = n) : (o = n),
                (n._next = i) ? (i._prev = n) : (l = n),
                (n = r)
        }
        e._pt = o
    },
    an = (function () {
        function t(n, r, i, o, l, a, s, u, c) {
            ;(this.t = r),
                (this.s = o),
                (this.c = l),
                (this.p = i),
                (this.r = a || U_),
                (this.d = s || this),
                (this.set = u || qh),
                (this.pr = c || 0),
                (this._next = n),
                n && (n._prev = this)
        }
        var e = t.prototype
        return (
            (e.modifier = function (r, i, o) {
                ;(this.mSet = this.mSet || this.set),
                    (this.set = jk),
                    (this.m = r),
                    (this.mt = o),
                    (this.tween = i)
            }),
            t
        )
    })()
ln(
    Gh +
        'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
    function (t) {
        return (Xh[t] = 1)
    },
)
kn.TweenMax = kn.TweenLite = ot
kn.TimelineLite = kn.TimelineMax = Yt
Fe = new Yt({
    sortChildren: !1,
    defaults: el,
    autoRemoveChildren: !0,
    id: 'root',
    smoothChildTiming: !0,
})
xn.stringFilter = A_
var Hi = [],
    Ws = {},
    Ak = [],
    Bm = 0,
    zk = 0,
    Yc = function (e) {
        return (Ws[e] || Ak).map(function (n) {
            return n()
        })
    },
    xd = function () {
        var e = Date.now(),
            n = []
        e - Bm > 2 &&
            (Yc('matchMediaInit'),
            Hi.forEach(function (r) {
                var i = r.queries,
                    o = r.conditions,
                    l,
                    a,
                    s,
                    u
                for (a in i)
                    (l = fr.matchMedia(i[a]).matches),
                        l && (s = 1),
                        l !== o[a] && ((o[a] = l), (u = 1))
                u && (r.revert(), s && n.push(r))
            }),
            Yc('matchMediaRevert'),
            n.forEach(function (r) {
                return r.onMatch(r, function (i) {
                    return r.add(null, i)
                })
            }),
            (Bm = e),
            Yc('matchMedia'))
    },
    X_ = (function () {
        function t(n, r) {
            ;(this.selector = r && _d(r)),
                (this.data = []),
                (this._r = []),
                (this.isReverted = !1),
                (this.id = zk++),
                n && this.add(n)
        }
        var e = t.prototype
        return (
            (e.add = function (r, i, o) {
                Qe(r) && ((o = i), (i = r), (r = Qe))
                var l = this,
                    a = function () {
                        var u = Me,
                            c = l.selector,
                            d
                        return (
                            u && u !== l && u.data.push(l),
                            o && (l.selector = _d(o)),
                            (Me = l),
                            (d = i.apply(l, arguments)),
                            Qe(d) && l._r.push(d),
                            (Me = u),
                            (l.selector = c),
                            (l.isReverted = !1),
                            d
                        )
                    }
                return (
                    (l.last = a),
                    r === Qe
                        ? a(l, function (s) {
                              return l.add(null, s)
                          })
                        : r
                          ? (l[r] = a)
                          : a
                )
            }),
            (e.ignore = function (r) {
                var i = Me
                ;(Me = null), r(this), (Me = i)
            }),
            (e.getTweens = function () {
                var r = []
                return (
                    this.data.forEach(function (i) {
                        return i instanceof t
                            ? r.push.apply(r, i.getTweens())
                            : i instanceof ot &&
                                  !(i.parent && i.parent.data === 'nested') &&
                                  r.push(i)
                    }),
                    r
                )
            }),
            (e.clear = function () {
                this._r.length = this.data.length = 0
            }),
            (e.kill = function (r, i) {
                var o = this
                if (
                    (r
                        ? (function () {
                              for (
                                  var a = o.getTweens(), s = o.data.length, u;
                                  s--;

                              )
                                  (u = o.data[s]),
                                      u.data === 'isFlip' &&
                                          (u.revert(),
                                          u
                                              .getChildren(!0, !0, !1)
                                              .forEach(function (c) {
                                                  return a.splice(
                                                      a.indexOf(c),
                                                      1,
                                                  )
                                              }))
                              for (
                                  a
                                      .map(function (c) {
                                          return {
                                              g:
                                                  c._dur ||
                                                  c._delay ||
                                                  (c._sat &&
                                                      !c._sat.vars
                                                          .immediateRender)
                                                      ? c.globalTime(0)
                                                      : -1 / 0,
                                              t: c,
                                          }
                                      })
                                      .sort(function (c, d) {
                                          return d.g - c.g || -1 / 0
                                      })
                                      .forEach(function (c) {
                                          return c.t.revert(r)
                                      }),
                                      s = o.data.length;
                                  s--;

                              )
                                  (u = o.data[s]),
                                      u instanceof Yt
                                          ? u.data !== 'nested' &&
                                            (u.scrollTrigger &&
                                                u.scrollTrigger.revert(),
                                            u.kill())
                                          : !(u instanceof ot) &&
                                            u.revert &&
                                            u.revert(r)
                              o._r.forEach(function (c) {
                                  return c(r, o)
                              }),
                                  (o.isReverted = !0)
                          })()
                        : this.data.forEach(function (a) {
                              return a.kill && a.kill()
                          }),
                    this.clear(),
                    i)
                )
                    for (var l = Hi.length; l--; )
                        Hi[l].id === this.id && Hi.splice(l, 1)
            }),
            (e.revert = function (r) {
                this.kill(r || {})
            }),
            t
        )
    })(),
    Ik = (function () {
        function t(n) {
            ;(this.contexts = []), (this.scope = n), Me && Me.data.push(this)
        }
        var e = t.prototype
        return (
            (e.add = function (r, i, o) {
                xr(r) || (r = { matches: r })
                var l = new X_(0, o || this.scope),
                    a = (l.conditions = {}),
                    s,
                    u,
                    c
                Me && !l.selector && (l.selector = Me.selector),
                    this.contexts.push(l),
                    (i = l.add('onMatch', i)),
                    (l.queries = r)
                for (u in r)
                    u === 'all'
                        ? (c = 1)
                        : ((s = fr.matchMedia(r[u])),
                          s &&
                              (Hi.indexOf(l) < 0 && Hi.push(l),
                              (a[u] = s.matches) && (c = 1),
                              s.addListener
                                  ? s.addListener(xd)
                                  : s.addEventListener('change', xd)))
                return (
                    c &&
                        i(l, function (d) {
                            return l.add(null, d)
                        }),
                    this
                )
            }),
            (e.revert = function (r) {
                this.kill(r || {})
            }),
            (e.kill = function (r) {
                this.contexts.forEach(function (i) {
                    return i.kill(r, !0)
                })
            }),
            t
        )
    })(),
    Ou = {
        registerPlugin: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                n[r] = arguments[r]
            n.forEach(function (i) {
                return L_(i)
            })
        },
        timeline: function (e) {
            return new Yt(e)
        },
        getTweensOf: function (e, n) {
            return Fe.getTweensOf(e, n)
        },
        getProperty: function (e, n, r, i) {
            wt(e) && (e = zn(e)[0])
            var o = Bi(e || {}).get,
                l = r ? y_ : __
            return (
                r === 'native' && (r = ''),
                e &&
                    (n
                        ? l(((mn[n] && mn[n].get) || o)(e, n, r, i))
                        : function (a, s, u) {
                              return l(((mn[a] && mn[a].get) || o)(e, a, s, u))
                          })
            )
        },
        quickSetter: function (e, n, r) {
            if (((e = zn(e)), e.length > 1)) {
                var i = e.map(function (c) {
                        return un.quickSetter(c, n, r)
                    }),
                    o = i.length
                return function (c) {
                    for (var d = o; d--; ) i[d](c)
                }
            }
            e = e[0] || {}
            var l = mn[n],
                a = Bi(e),
                s = (a.harness && (a.harness.aliases || {})[n]) || n,
                u = l
                    ? function (c) {
                          var d = new l()
                          ;(Ro._pt = 0),
                              d.init(e, r ? c + r : c, Ro, 0, [e]),
                              d.render(1, d),
                              Ro._pt && ep(1, Ro)
                      }
                    : a.set(e, s)
            return l
                ? u
                : function (c) {
                      return u(e, s, r ? c + r : c, a, 1)
                  }
        },
        quickTo: function (e, n, r) {
            var i,
                o = un.to(
                    e,
                    to(
                        ((i = {}), (i[n] = '+=0.1'), (i.paused = !0), i),
                        r || {},
                    ),
                ),
                l = function (s, u, c) {
                    return o.resetTo(n, s, u, c)
                }
            return (l.tween = o), l
        },
        isTweening: function (e) {
            return Fe.getTweensOf(e, !0).length > 0
        },
        defaults: function (e) {
            return (
                e && e.ease && (e.ease = Yi(e.ease, el.ease)), Fm(el, e || {})
            )
        },
        config: function (e) {
            return Fm(xn, e || {})
        },
        registerEffect: function (e) {
            var n = e.name,
                r = e.effect,
                i = e.plugins,
                o = e.defaults,
                l = e.extendTimeline
            ;(i || '').split(',').forEach(function (a) {
                return (
                    a &&
                    !mn[a] &&
                    !kn[a] &&
                    Ca(n + ' effect requires ' + a + ' plugin.')
                )
            }),
                (Vc[n] = function (a, s, u) {
                    return r(zn(a), Vn(s || {}, o), u)
                }),
                l &&
                    (Yt.prototype[n] = function (a, s, u) {
                        return this.add(
                            Vc[n](a, xr(s) ? s : (u = s) && {}, this),
                            u,
                        )
                    })
        },
        registerEase: function (e, n) {
            se[e] = Yi(n)
        },
        parseEase: function (e, n) {
            return arguments.length ? Yi(e, n) : se
        },
        getById: function (e) {
            return Fe.getById(e)
        },
        exportRoot: function (e, n) {
            e === void 0 && (e = {})
            var r = new Yt(e),
                i,
                o
            for (
                r.smoothChildTiming = on(e.smoothChildTiming),
                    Fe.remove(r),
                    r._dp = 0,
                    r._time = r._tTime = Fe._time,
                    i = Fe._first;
                i;

            )
                (o = i._next),
                    (n ||
                        !(
                            !i._dur &&
                            i instanceof ot &&
                            i.vars.onComplete === i._targets[0]
                        )) &&
                        pr(r, i, i._start - i._delay),
                    (i = o)
            return pr(Fe, r, 0), r
        },
        context: function (e, n) {
            return e ? new X_(e, n) : Me
        },
        matchMedia: function (e) {
            return new Ik(e)
        },
        matchMediaRefresh: function () {
            return (
                Hi.forEach(function (e) {
                    var n = e.conditions,
                        r,
                        i
                    for (i in n) n[i] && ((n[i] = !1), (r = 1))
                    r && e.revert()
                }) || xd()
            )
        },
        addEventListener: function (e, n) {
            var r = Ws[e] || (Ws[e] = [])
            ~r.indexOf(n) || r.push(n)
        },
        removeEventListener: function (e, n) {
            var r = Ws[e],
                i = r && r.indexOf(n)
            i >= 0 && r.splice(i, 1)
        },
        utils: {
            wrap: mk,
            wrapYoyo: vk,
            distribute: O_,
            random: E_,
            snap: P_,
            normalize: pk,
            getUnit: At,
            clamp: ck,
            splitColor: R_,
            toArray: zn,
            selector: _d,
            mapRange: N_,
            pipe: dk,
            unitize: hk,
            interpolate: gk,
            shuffle: T_,
        },
        install: h_,
        effects: Vc,
        ticker: vn,
        updateRoot: Yt.updateRoot,
        plugins: mn,
        globalTimeline: Fe,
        core: {
            PropTween: an,
            globals: p_,
            Tween: ot,
            Timeline: Yt,
            Animation: Ea,
            getCache: Bi,
            _removeLinkedListItem: rc,
            reverting: function () {
                return zt
            },
            context: function (e) {
                return e && Me && (Me.data.push(e), (e._ctx = Me)), Me
            },
            suppressOverwrites: function (e) {
                return ($h = e)
            },
        },
    }
ln('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
    return (Ou[t] = ot[t])
})
vn.add(Yt.updateRoot)
Ro = Ou.to({}, { duration: 0 })
var Fk = function (e, n) {
        for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
            r = r._next
        return r
    },
    bk = function (e, n) {
        var r = e._targets,
            i,
            o,
            l
        for (i in n)
            for (o = r.length; o--; )
                (l = e._ptLookup[o][i]),
                    l &&
                        (l = l.d) &&
                        (l._pt && (l = Fk(l, i)),
                        l && l.modifier && l.modifier(n[i], e, r[o], i))
    },
    Hc = function (e, n) {
        return {
            name: e,
            rawVars: 1,
            init: function (i, o, l) {
                l._onInit = function (a) {
                    var s, u
                    if (
                        (wt(o) &&
                            ((s = {}),
                            ln(o, function (c) {
                                return (s[c] = 1)
                            }),
                            (o = s)),
                        n)
                    ) {
                        s = {}
                        for (u in o) s[u] = n(o[u])
                        o = s
                    }
                    bk(a, o)
                }
            },
        }
    },
    un =
        Ou.registerPlugin(
            {
                name: 'attr',
                init: function (e, n, r, i, o) {
                    var l, a, s
                    this.tween = r
                    for (l in n)
                        (s = e.getAttribute(l) || ''),
                            (a = this.add(
                                e,
                                'setAttribute',
                                (s || 0) + '',
                                n[l],
                                i,
                                o,
                                0,
                                0,
                                l,
                            )),
                            (a.op = l),
                            (a.b = s),
                            this._props.push(l)
                },
                render: function (e, n) {
                    for (var r = n._pt; r; )
                        zt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d),
                            (r = r._next)
                },
            },
            {
                name: 'endArray',
                init: function (e, n) {
                    for (var r = n.length; r--; )
                        this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
                },
            },
            Hc('roundProps', yd),
            Hc('modifiers'),
            Hc('snap', P_),
        ) || Ou
ot.version = Yt.version = un.version = '3.12.5'
d_ = 1
Uh() && rl()
se.Power0
se.Power1
se.Power2
se.Power3
se.Power4
se.Linear
se.Quad
se.Cubic
se.Quart
se.Quint
se.Strong
se.Elastic
se.Back
se.SteppedEase
se.Bounce
se.Sine
se.Expo
se.Circ
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Um,
    ti,
    $o,
    tp,
    Fi,
    Ym,
    np,
    Wk = function () {
        return typeof window < 'u'
    },
    Wr = {},
    Li = 180 / Math.PI,
    Bo = Math.PI / 180,
    ho = Math.atan2,
    Hm = 1e8,
    rp = /([A-Z])/g,
    Vk = /(left|right|width|margin|padding|x)/i,
    $k = /[\s,\(]\S/,
    mr = {
        autoAlpha: 'opacity,visibility',
        scale: 'scaleX,scaleY',
        alpha: 'opacity',
    },
    Sd = function (e, n) {
        return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
    },
    Bk = function (e, n) {
        return n.set(
            n.t,
            n.p,
            e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
            n,
        )
    },
    Uk = function (e, n) {
        return n.set(
            n.t,
            n.p,
            e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
            n,
        )
    },
    Yk = function (e, n) {
        var r = n.s + n.c * e
        n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n)
    },
    G_ = function (e, n) {
        return n.set(n.t, n.p, e ? n.e : n.b, n)
    },
    Q_ = function (e, n) {
        return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
    },
    Hk = function (e, n, r) {
        return (e.style[n] = r)
    },
    Xk = function (e, n, r) {
        return e.style.setProperty(n, r)
    },
    Gk = function (e, n, r) {
        return (e._gsap[n] = r)
    },
    Qk = function (e, n, r) {
        return (e._gsap.scaleX = e._gsap.scaleY = r)
    },
    Kk = function (e, n, r, i, o) {
        var l = e._gsap
        ;(l.scaleX = l.scaleY = r), l.renderTransform(o, l)
    },
    Zk = function (e, n, r, i, o) {
        var l = e._gsap
        ;(l[n] = r), l.renderTransform(o, l)
    },
    be = 'transform',
    sn = be + 'Origin',
    qk = function t(e, n) {
        var r = this,
            i = this.target,
            o = i.style,
            l = i._gsap
        if (e in Wr && o) {
            if (((this.tfm = this.tfm || {}), e !== 'transform'))
                (e = mr[e] || e),
                    ~e.indexOf(',')
                        ? e.split(',').forEach(function (a) {
                              return (r.tfm[a] = Er(i, a))
                          })
                        : (this.tfm[e] = l.x ? l[e] : Er(i, e)),
                    e === sn && (this.tfm.zOrigin = l.zOrigin)
            else
                return mr.transform.split(',').forEach(function (a) {
                    return t.call(r, a, n)
                })
            if (this.props.indexOf(be) >= 0) return
            l.svg &&
                ((this.svgo = i.getAttribute('data-svg-origin')),
                this.props.push(sn, n, '')),
                (e = be)
        }
        ;(o || n) && this.props.push(e, n, o[e])
    },
    K_ = function (e) {
        e.translate &&
            (e.removeProperty('translate'),
            e.removeProperty('scale'),
            e.removeProperty('rotate'))
    },
    Jk = function () {
        var e = this.props,
            n = this.target,
            r = n.style,
            i = n._gsap,
            o,
            l
        for (o = 0; o < e.length; o += 3)
            e[o + 1]
                ? (n[e[o]] = e[o + 2])
                : e[o + 2]
                  ? (r[e[o]] = e[o + 2])
                  : r.removeProperty(
                        e[o].substr(0, 2) === '--'
                            ? e[o]
                            : e[o].replace(rp, '-$1').toLowerCase(),
                    )
        if (this.tfm) {
            for (l in this.tfm) i[l] = this.tfm[l]
            i.svg &&
                (i.renderTransform(),
                n.setAttribute('data-svg-origin', this.svgo || '')),
                (o = np()),
                (!o || !o.isStart) &&
                    !r[be] &&
                    (K_(r),
                    i.zOrigin &&
                        r[sn] &&
                        ((r[sn] += ' ' + i.zOrigin + 'px'),
                        (i.zOrigin = 0),
                        i.renderTransform()),
                    (i.uncache = 1))
        }
    },
    Z_ = function (e, n) {
        var r = { target: e, props: [], revert: Jk, save: qk }
        return (
            e._gsap || un.core.getCache(e),
            n &&
                n.split(',').forEach(function (i) {
                    return r.save(i)
                }),
            r
        )
    },
    q_,
    kd = function (e, n) {
        var r = ti.createElementNS
            ? ti.createElementNS(
                  (n || 'http://www.w3.org/1999/xhtml').replace(
                      /^https/,
                      'http',
                  ),
                  e,
              )
            : ti.createElement(e)
        return r && r.style ? r : ti.createElement(e)
    },
    yr = function t(e, n, r) {
        var i = getComputedStyle(e)
        return (
            i[n] ||
            i.getPropertyValue(n.replace(rp, '-$1').toLowerCase()) ||
            i.getPropertyValue(n) ||
            (!r && t(e, il(n) || n, 1)) ||
            ''
        )
    },
    Xm = 'O,Moz,ms,Ms,Webkit'.split(','),
    il = function (e, n, r) {
        var i = n || Fi,
            o = i.style,
            l = 5
        if (e in o && !r) return e
        for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            l-- && !(Xm[l] + e in o);

        );
        return l < 0 ? null : (l === 3 ? 'ms' : l >= 0 ? Xm[l] : '') + e
    },
    Cd = function () {
        Wk() &&
            window.document &&
            ((Um = window),
            (ti = Um.document),
            ($o = ti.documentElement),
            (Fi = kd('div') || { style: {} }),
            kd('div'),
            (be = il(be)),
            (sn = be + 'Origin'),
            (Fi.style.cssText =
                'border-width:0;line-height:0;position:absolute;padding:0'),
            (q_ = !!il('perspective')),
            (np = un.core.reverting),
            (tp = 1))
    },
    Xc = function t(e) {
        var n = kd(
                'svg',
                (this.ownerSVGElement &&
                    this.ownerSVGElement.getAttribute('xmlns')) ||
                    'http://www.w3.org/2000/svg',
            ),
            r = this.parentNode,
            i = this.nextSibling,
            o = this.style.cssText,
            l
        if (
            ($o.appendChild(n),
            n.appendChild(this),
            (this.style.display = 'block'),
            e)
        )
            try {
                ;(l = this.getBBox()),
                    (this._gsapBBox = this.getBBox),
                    (this.getBBox = t)
            } catch {}
        else this._gsapBBox && (l = this._gsapBBox())
        return (
            r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
            $o.removeChild(n),
            (this.style.cssText = o),
            l
        )
    },
    Gm = function (e, n) {
        for (var r = n.length; r--; )
            if (e.hasAttribute(n[r])) return e.getAttribute(n[r])
    },
    J_ = function (e) {
        var n
        try {
            n = e.getBBox()
        } catch {
            n = Xc.call(e, !0)
        }
        return (
            (n && (n.width || n.height)) ||
                e.getBBox === Xc ||
                (n = Xc.call(e, !0)),
            n && !n.width && !n.x && !n.y
                ? {
                      x: +Gm(e, ['x', 'cx', 'x1']) || 0,
                      y: +Gm(e, ['y', 'cy', 'y1']) || 0,
                      width: 0,
                      height: 0,
                  }
                : n
        )
    },
    ey = function (e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && J_(e))
    },
    no = function (e, n) {
        if (n) {
            var r = e.style,
                i
            n in Wr && n !== sn && (n = be),
                r.removeProperty
                    ? ((i = n.substr(0, 2)),
                      (i === 'ms' || n.substr(0, 6) === 'webkit') &&
                          (n = '-' + n),
                      r.removeProperty(
                          i === '--' ? n : n.replace(rp, '-$1').toLowerCase(),
                      ))
                    : r.removeAttribute(n)
        }
    },
    ni = function (e, n, r, i, o, l) {
        var a = new an(e._pt, n, r, 0, 1, l ? Q_ : G_)
        return (e._pt = a), (a.b = i), (a.e = o), e._props.push(r), a
    },
    Qm = { deg: 1, rad: 1, turn: 1 },
    e2 = { grid: 1, flex: 1 },
    wi = function t(e, n, r, i) {
        var o = parseFloat(r) || 0,
            l = (r + '').trim().substr((o + '').length) || 'px',
            a = Fi.style,
            s = Vk.test(n),
            u = e.tagName.toLowerCase() === 'svg',
            c = (u ? 'client' : 'offset') + (s ? 'Width' : 'Height'),
            d = 100,
            f = i === 'px',
            h = i === '%',
            g,
            p,
            x,
            v
        if (i === l || !o || Qm[i] || Qm[l]) return o
        if (
            (l !== 'px' && !f && (o = t(e, n, r, 'px')),
            (v = e.getCTM && ey(e)),
            (h || l === '%') && (Wr[n] || ~n.indexOf('adius')))
        )
            return (
                (g = v ? e.getBBox()[s ? 'width' : 'height'] : e[c]),
                qe(h ? (o / g) * d : (o / 100) * g)
            )
        if (
            ((a[s ? 'width' : 'height'] = d + (f ? l : i)),
            (p =
                ~n.indexOf('adius') || (i === 'em' && e.appendChild && !u)
                    ? e
                    : e.parentNode),
            v && (p = (e.ownerSVGElement || {}).parentNode),
            (!p || p === ti || !p.appendChild) && (p = ti.body),
            (x = p._gsap),
            x && h && x.width && s && x.time === vn.time && !x.uncache)
        )
            return qe((o / x.width) * d)
        if (h && (n === 'height' || n === 'width')) {
            var m = e.style[n]
            ;(e.style[n] = d + i), (g = e[c]), m ? (e.style[n] = m) : no(e, n)
        } else
            (h || l === '%') &&
                !e2[yr(p, 'display')] &&
                (a.position = yr(e, 'position')),
                p === e && (a.position = 'static'),
                p.appendChild(Fi),
                (g = Fi[c]),
                p.removeChild(Fi),
                (a.position = 'absolute')
        return (
            s && h && ((x = Bi(p)), (x.time = vn.time), (x.width = p[c])),
            qe(f ? (g * o) / d : g && o ? (d / g) * o : 0)
        )
    },
    Er = function (e, n, r, i) {
        var o
        return (
            tp || Cd(),
            n in mr &&
                n !== 'transform' &&
                ((n = mr[n]), ~n.indexOf(',') && (n = n.split(',')[0])),
            Wr[n] && n !== 'transform'
                ? ((o = Na(e, i)),
                  (o =
                      n !== 'transformOrigin'
                          ? o[n]
                          : o.svg
                            ? o.origin
                            : Eu(yr(e, sn)) + ' ' + o.zOrigin + 'px'))
                : ((o = e.style[n]),
                  (!o || o === 'auto' || i || ~(o + '').indexOf('calc(')) &&
                      (o =
                          (Pu[n] && Pu[n](e, n, r)) ||
                          yr(e, n) ||
                          v_(e, n) ||
                          (n === 'opacity' ? 1 : 0))),
            r && !~(o + '').trim().indexOf(' ') ? wi(e, n, o, r) + r : o
        )
    },
    t2 = function (e, n, r, i) {
        if (!r || r === 'none') {
            var o = il(n, e, 1),
                l = o && yr(e, o, 1)
            l && l !== r
                ? ((n = o), (r = l))
                : n === 'borderColor' && (r = yr(e, 'borderTopColor'))
        }
        var a = new an(this._pt, e.style, n, 0, 1, Y_),
            s = 0,
            u = 0,
            c,
            d,
            f,
            h,
            g,
            p,
            x,
            v,
            m,
            _,
            y,
            k
        if (
            ((a.b = r),
            (a.e = i),
            (r += ''),
            (i += ''),
            i === 'auto' &&
                ((p = e.style[n]),
                (e.style[n] = i),
                (i = yr(e, n) || i),
                p ? (e.style[n] = p) : no(e, n)),
            (c = [r, i]),
            A_(c),
            (r = c[0]),
            (i = c[1]),
            (f = r.match(Lo) || []),
            (k = i.match(Lo) || []),
            k.length)
        ) {
            for (; (d = Lo.exec(i)); )
                (x = d[0]),
                    (m = i.substring(s, d.index)),
                    g
                        ? (g = (g + 1) % 5)
                        : (m.substr(-5) === 'rgba(' ||
                              m.substr(-5) === 'hsla(') &&
                          (g = 1),
                    x !== (p = f[u++] || '') &&
                        ((h = parseFloat(p) || 0),
                        (y = p.substr((h + '').length)),
                        x.charAt(1) === '=' && (x = Vo(h, x) + y),
                        (v = parseFloat(x)),
                        (_ = x.substr((v + '').length)),
                        (s = Lo.lastIndex - _.length),
                        _ ||
                            ((_ = _ || xn.units[n] || y),
                            s === i.length && ((i += _), (a.e += _))),
                        y !== _ && (h = wi(e, n, p, _) || 0),
                        (a._pt = {
                            _next: a._pt,
                            p: m || u === 1 ? m : ',',
                            s: h,
                            c: v - h,
                            m: (g && g < 4) || n === 'zIndex' ? Math.round : 0,
                        }))
            a.c = s < i.length ? i.substring(s, i.length) : ''
        } else a.r = n === 'display' && i === 'none' ? Q_ : G_
        return c_.test(i) && (a.e = 0), (this._pt = a), a
    },
    Km = {
        top: '0%',
        bottom: '100%',
        left: '0%',
        right: '100%',
        center: '50%',
    },
    n2 = function (e) {
        var n = e.split(' '),
            r = n[0],
            i = n[1] || '50%'
        return (
            (r === 'top' || r === 'bottom' || i === 'left' || i === 'right') &&
                ((e = r), (r = i), (i = e)),
            (n[0] = Km[r] || r),
            (n[1] = Km[i] || i),
            n.join(' ')
        )
    },
    r2 = function (e, n) {
        if (n.tween && n.tween._time === n.tween._dur) {
            var r = n.t,
                i = r.style,
                o = n.u,
                l = r._gsap,
                a,
                s,
                u
            if (o === 'all' || o === !0) (i.cssText = ''), (s = 1)
            else
                for (o = o.split(','), u = o.length; --u > -1; )
                    (a = o[u]),
                        Wr[a] &&
                            ((s = 1), (a = a === 'transformOrigin' ? sn : be)),
                        no(r, a)
            s &&
                (no(r, be),
                l &&
                    (l.svg && r.removeAttribute('transform'),
                    Na(r, 1),
                    (l.uncache = 1),
                    K_(i)))
        }
    },
    Pu = {
        clearProps: function (e, n, r, i, o) {
            if (o.data !== 'isFromStart') {
                var l = (e._pt = new an(e._pt, n, r, 0, 0, r2))
                return (
                    (l.u = i), (l.pr = -10), (l.tween = o), e._props.push(r), 1
                )
            }
        },
    },
    Da = [1, 0, 0, 1, 0, 0],
    ty = {},
    ny = function (e) {
        return e === 'matrix(1, 0, 0, 1, 0, 0)' || e === 'none' || !e
    },
    Zm = function (e) {
        var n = yr(e, be)
        return ny(n) ? Da : n.substr(7).match(u_).map(qe)
    },
    ip = function (e, n) {
        var r = e._gsap || Bi(e),
            i = e.style,
            o = Zm(e),
            l,
            a,
            s,
            u
        return r.svg && e.getAttribute('transform')
            ? ((s = e.transform.baseVal.consolidate().matrix),
              (o = [s.a, s.b, s.c, s.d, s.e, s.f]),
              o.join(',') === '1,0,0,1,0,0' ? Da : o)
            : (o === Da &&
                  !e.offsetParent &&
                  e !== $o &&
                  !r.svg &&
                  ((s = i.display),
                  (i.display = 'block'),
                  (l = e.parentNode),
                  (!l || !e.offsetParent) &&
                      ((u = 1), (a = e.nextElementSibling), $o.appendChild(e)),
                  (o = Zm(e)),
                  s ? (i.display = s) : no(e, 'display'),
                  u &&
                      (a
                          ? l.insertBefore(e, a)
                          : l
                            ? l.appendChild(e)
                            : $o.removeChild(e))),
              n && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
    },
    Td = function (e, n, r, i, o, l) {
        var a = e._gsap,
            s = o || ip(e, !0),
            u = a.xOrigin || 0,
            c = a.yOrigin || 0,
            d = a.xOffset || 0,
            f = a.yOffset || 0,
            h = s[0],
            g = s[1],
            p = s[2],
            x = s[3],
            v = s[4],
            m = s[5],
            _ = n.split(' '),
            y = parseFloat(_[0]) || 0,
            k = parseFloat(_[1]) || 0,
            C,
            S,
            T,
            D
        r
            ? s !== Da &&
              (S = h * x - g * p) &&
              ((T = y * (x / S) + k * (-p / S) + (p * m - x * v) / S),
              (D = y * (-g / S) + k * (h / S) - (h * m - g * v) / S),
              (y = T),
              (k = D))
            : ((C = J_(e)),
              (y = C.x + (~_[0].indexOf('%') ? (y / 100) * C.width : y)),
              (k =
                  C.y +
                  (~(_[1] || _[0]).indexOf('%') ? (k / 100) * C.height : k))),
            i || (i !== !1 && a.smooth)
                ? ((v = y - u),
                  (m = k - c),
                  (a.xOffset = d + (v * h + m * p) - v),
                  (a.yOffset = f + (v * g + m * x) - m))
                : (a.xOffset = a.yOffset = 0),
            (a.xOrigin = y),
            (a.yOrigin = k),
            (a.smooth = !!i),
            (a.origin = n),
            (a.originIsAbsolute = !!r),
            (e.style[sn] = '0px 0px'),
            l &&
                (ni(l, a, 'xOrigin', u, y),
                ni(l, a, 'yOrigin', c, k),
                ni(l, a, 'xOffset', d, a.xOffset),
                ni(l, a, 'yOffset', f, a.yOffset)),
            e.setAttribute('data-svg-origin', y + ' ' + k)
    },
    Na = function (e, n) {
        var r = e._gsap || new b_(e)
        if ('x' in r && !n && !r.uncache) return r
        var i = e.style,
            o = r.scaleX < 0,
            l = 'px',
            a = 'deg',
            s = getComputedStyle(e),
            u = yr(e, sn) || '0',
            c,
            d,
            f,
            h,
            g,
            p,
            x,
            v,
            m,
            _,
            y,
            k,
            C,
            S,
            T,
            D,
            P,
            I,
            L,
            U,
            Y,
            q,
            W,
            V,
            N,
            R,
            w,
            F,
            K,
            $e,
            le,
            Ce
        return (
            (c = d = f = p = x = v = m = _ = y = 0),
            (h = g = 1),
            (r.svg = !!(e.getCTM && ey(e))),
            s.translate &&
                ((s.translate !== 'none' ||
                    s.scale !== 'none' ||
                    s.rotate !== 'none') &&
                    (i[be] =
                        (s.translate !== 'none'
                            ? 'translate3d(' +
                              (s.translate + ' 0 0')
                                  .split(' ')
                                  .slice(0, 3)
                                  .join(', ') +
                              ') '
                            : '') +
                        (s.rotate !== 'none'
                            ? 'rotate(' + s.rotate + ') '
                            : '') +
                        (s.scale !== 'none'
                            ? 'scale(' + s.scale.split(' ').join(',') + ') '
                            : '') +
                        (s[be] !== 'none' ? s[be] : '')),
                (i.scale = i.rotate = i.translate = 'none')),
            (S = ip(e, r.svg)),
            r.svg &&
                (r.uncache
                    ? ((N = e.getBBox()),
                      (u = r.xOrigin - N.x + 'px ' + (r.yOrigin - N.y) + 'px'),
                      (V = ''))
                    : (V = !n && e.getAttribute('data-svg-origin')),
                Td(e, V || u, !!V || r.originIsAbsolute, r.smooth !== !1, S)),
            (k = r.xOrigin || 0),
            (C = r.yOrigin || 0),
            S !== Da &&
                ((I = S[0]),
                (L = S[1]),
                (U = S[2]),
                (Y = S[3]),
                (c = q = S[4]),
                (d = W = S[5]),
                S.length === 6
                    ? ((h = Math.sqrt(I * I + L * L)),
                      (g = Math.sqrt(Y * Y + U * U)),
                      (p = I || L ? ho(L, I) * Li : 0),
                      (m = U || Y ? ho(U, Y) * Li + p : 0),
                      m && (g *= Math.abs(Math.cos(m * Bo))),
                      r.svg &&
                          ((c -= k - (k * I + C * U)),
                          (d -= C - (k * L + C * Y))))
                    : ((Ce = S[6]),
                      ($e = S[7]),
                      (w = S[8]),
                      (F = S[9]),
                      (K = S[10]),
                      (le = S[11]),
                      (c = S[12]),
                      (d = S[13]),
                      (f = S[14]),
                      (T = ho(Ce, K)),
                      (x = T * Li),
                      T &&
                          ((D = Math.cos(-T)),
                          (P = Math.sin(-T)),
                          (V = q * D + w * P),
                          (N = W * D + F * P),
                          (R = Ce * D + K * P),
                          (w = q * -P + w * D),
                          (F = W * -P + F * D),
                          (K = Ce * -P + K * D),
                          (le = $e * -P + le * D),
                          (q = V),
                          (W = N),
                          (Ce = R)),
                      (T = ho(-U, K)),
                      (v = T * Li),
                      T &&
                          ((D = Math.cos(-T)),
                          (P = Math.sin(-T)),
                          (V = I * D - w * P),
                          (N = L * D - F * P),
                          (R = U * D - K * P),
                          (le = Y * P + le * D),
                          (I = V),
                          (L = N),
                          (U = R)),
                      (T = ho(L, I)),
                      (p = T * Li),
                      T &&
                          ((D = Math.cos(T)),
                          (P = Math.sin(T)),
                          (V = I * D + L * P),
                          (N = q * D + W * P),
                          (L = L * D - I * P),
                          (W = W * D - q * P),
                          (I = V),
                          (q = N)),
                      x &&
                          Math.abs(x) + Math.abs(p) > 359.9 &&
                          ((x = p = 0), (v = 180 - v)),
                      (h = qe(Math.sqrt(I * I + L * L + U * U))),
                      (g = qe(Math.sqrt(W * W + Ce * Ce))),
                      (T = ho(q, W)),
                      (m = Math.abs(T) > 2e-4 ? T * Li : 0),
                      (y = le ? 1 / (le < 0 ? -le : le) : 0)),
                r.svg &&
                    ((V = e.getAttribute('transform')),
                    (r.forceCSS =
                        e.setAttribute('transform', '') || !ny(yr(e, be))),
                    V && e.setAttribute('transform', V))),
            Math.abs(m) > 90 &&
                Math.abs(m) < 270 &&
                (o
                    ? ((h *= -1),
                      (m += p <= 0 ? 180 : -180),
                      (p += p <= 0 ? 180 : -180))
                    : ((g *= -1), (m += m <= 0 ? 180 : -180))),
            (n = n || r.uncache),
            (r.x =
                c -
                ((r.xPercent =
                    c &&
                    ((!n && r.xPercent) ||
                        (Math.round(e.offsetWidth / 2) === Math.round(-c)
                            ? -50
                            : 0)))
                    ? (e.offsetWidth * r.xPercent) / 100
                    : 0) +
                l),
            (r.y =
                d -
                ((r.yPercent =
                    d &&
                    ((!n && r.yPercent) ||
                        (Math.round(e.offsetHeight / 2) === Math.round(-d)
                            ? -50
                            : 0)))
                    ? (e.offsetHeight * r.yPercent) / 100
                    : 0) +
                l),
            (r.z = f + l),
            (r.scaleX = qe(h)),
            (r.scaleY = qe(g)),
            (r.rotation = qe(p) + a),
            (r.rotationX = qe(x) + a),
            (r.rotationY = qe(v) + a),
            (r.skewX = m + a),
            (r.skewY = _ + a),
            (r.transformPerspective = y + l),
            (r.zOrigin =
                parseFloat(u.split(' ')[2]) || (!n && r.zOrigin) || 0) &&
                (i[sn] = Eu(u)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = xn.force3D),
            (r.renderTransform = r.svg ? o2 : q_ ? ry : i2),
            (r.uncache = 0),
            r
        )
    },
    Eu = function (e) {
        return (e = e.split(' '))[0] + ' ' + e[1]
    },
    Gc = function (e, n, r) {
        var i = At(n)
        return qe(parseFloat(n) + parseFloat(wi(e, 'x', r + 'px', i))) + i
    },
    i2 = function (e, n) {
        ;(n.z = '0px'),
            (n.rotationY = n.rotationX = '0deg'),
            (n.force3D = 0),
            ry(e, n)
    },
    Ei = '0deg',
    kl = '0px',
    Di = ') ',
    ry = function (e, n) {
        var r = n || this,
            i = r.xPercent,
            o = r.yPercent,
            l = r.x,
            a = r.y,
            s = r.z,
            u = r.rotation,
            c = r.rotationY,
            d = r.rotationX,
            f = r.skewX,
            h = r.skewY,
            g = r.scaleX,
            p = r.scaleY,
            x = r.transformPerspective,
            v = r.force3D,
            m = r.target,
            _ = r.zOrigin,
            y = '',
            k = (v === 'auto' && e && e !== 1) || v === !0
        if (_ && (d !== Ei || c !== Ei)) {
            var C = parseFloat(c) * Bo,
                S = Math.sin(C),
                T = Math.cos(C),
                D
            ;(C = parseFloat(d) * Bo),
                (D = Math.cos(C)),
                (l = Gc(m, l, S * D * -_)),
                (a = Gc(m, a, -Math.sin(C) * -_)),
                (s = Gc(m, s, T * D * -_ + _))
        }
        x !== kl && (y += 'perspective(' + x + Di),
            (i || o) && (y += 'translate(' + i + '%, ' + o + '%) '),
            (k || l !== kl || a !== kl || s !== kl) &&
                (y +=
                    s !== kl || k
                        ? 'translate3d(' + l + ', ' + a + ', ' + s + ') '
                        : 'translate(' + l + ', ' + a + Di),
            u !== Ei && (y += 'rotate(' + u + Di),
            c !== Ei && (y += 'rotateY(' + c + Di),
            d !== Ei && (y += 'rotateX(' + d + Di),
            (f !== Ei || h !== Ei) && (y += 'skew(' + f + ', ' + h + Di),
            (g !== 1 || p !== 1) && (y += 'scale(' + g + ', ' + p + Di),
            (m.style[be] = y || 'translate(0, 0)')
    },
    o2 = function (e, n) {
        var r = n || this,
            i = r.xPercent,
            o = r.yPercent,
            l = r.x,
            a = r.y,
            s = r.rotation,
            u = r.skewX,
            c = r.skewY,
            d = r.scaleX,
            f = r.scaleY,
            h = r.target,
            g = r.xOrigin,
            p = r.yOrigin,
            x = r.xOffset,
            v = r.yOffset,
            m = r.forceCSS,
            _ = parseFloat(l),
            y = parseFloat(a),
            k,
            C,
            S,
            T,
            D
        ;(s = parseFloat(s)),
            (u = parseFloat(u)),
            (c = parseFloat(c)),
            c && ((c = parseFloat(c)), (u += c), (s += c)),
            s || u
                ? ((s *= Bo),
                  (u *= Bo),
                  (k = Math.cos(s) * d),
                  (C = Math.sin(s) * d),
                  (S = Math.sin(s - u) * -f),
                  (T = Math.cos(s - u) * f),
                  u &&
                      ((c *= Bo),
                      (D = Math.tan(u - c)),
                      (D = Math.sqrt(1 + D * D)),
                      (S *= D),
                      (T *= D),
                      c &&
                          ((D = Math.tan(c)),
                          (D = Math.sqrt(1 + D * D)),
                          (k *= D),
                          (C *= D))),
                  (k = qe(k)),
                  (C = qe(C)),
                  (S = qe(S)),
                  (T = qe(T)))
                : ((k = d), (T = f), (C = S = 0)),
            ((_ && !~(l + '').indexOf('px')) ||
                (y && !~(a + '').indexOf('px'))) &&
                ((_ = wi(h, 'x', l, 'px')), (y = wi(h, 'y', a, 'px'))),
            (g || p || x || v) &&
                ((_ = qe(_ + g - (g * k + p * S) + x)),
                (y = qe(y + p - (g * C + p * T) + v))),
            (i || o) &&
                ((D = h.getBBox()),
                (_ = qe(_ + (i / 100) * D.width)),
                (y = qe(y + (o / 100) * D.height))),
            (D =
                'matrix(' +
                k +
                ',' +
                C +
                ',' +
                S +
                ',' +
                T +
                ',' +
                _ +
                ',' +
                y +
                ')'),
            h.setAttribute('transform', D),
            m && (h.style[be] = D)
    },
    l2 = function (e, n, r, i, o) {
        var l = 360,
            a = wt(o),
            s = parseFloat(o) * (a && ~o.indexOf('rad') ? Li : 1),
            u = s - i,
            c = i + u + 'deg',
            d,
            f
        return (
            a &&
                ((d = o.split('_')[1]),
                d === 'short' &&
                    ((u %= l), u !== u % (l / 2) && (u += u < 0 ? l : -l)),
                d === 'cw' && u < 0
                    ? (u = ((u + l * Hm) % l) - ~~(u / l) * l)
                    : d === 'ccw' &&
                      u > 0 &&
                      (u = ((u - l * Hm) % l) - ~~(u / l) * l)),
            (e._pt = f = new an(e._pt, n, r, i, u, Bk)),
            (f.e = c),
            (f.u = 'deg'),
            e._props.push(r),
            f
        )
    },
    qm = function (e, n) {
        for (var r in n) e[r] = n[r]
        return e
    },
    a2 = function (e, n, r) {
        var i = qm({}, r._gsap),
            o = 'perspective,force3D,transformOrigin,svgOrigin',
            l = r.style,
            a,
            s,
            u,
            c,
            d,
            f,
            h,
            g
        i.svg
            ? ((u = r.getAttribute('transform')),
              r.setAttribute('transform', ''),
              (l[be] = n),
              (a = Na(r, 1)),
              no(r, be),
              r.setAttribute('transform', u))
            : ((u = getComputedStyle(r)[be]),
              (l[be] = n),
              (a = Na(r, 1)),
              (l[be] = u))
        for (s in Wr)
            (u = i[s]),
                (c = a[s]),
                u !== c &&
                    o.indexOf(s) < 0 &&
                    ((h = At(u)),
                    (g = At(c)),
                    (d = h !== g ? wi(r, s, u, g) : parseFloat(u)),
                    (f = parseFloat(c)),
                    (e._pt = new an(e._pt, a, s, d, f - d, Sd)),
                    (e._pt.u = g || 0),
                    e._props.push(s))
        qm(a, i)
    }
ln('padding,margin,Width,Radius', function (t, e) {
    var n = 'Top',
        r = 'Right',
        i = 'Bottom',
        o = 'Left',
        l = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(
            function (a) {
                return e < 2 ? t + a : 'border' + a + t
            },
        )
    Pu[e > 1 ? 'border' + t : t] = function (a, s, u, c, d) {
        var f, h
        if (arguments.length < 4)
            return (
                (f = l.map(function (g) {
                    return Er(a, g, u)
                })),
                (h = f.join(' ')),
                h.split(f[0]).length === 5 ? f[0] : h
            )
        ;(f = (c + '').split(' ')),
            (h = {}),
            l.forEach(function (g, p) {
                return (h[g] = f[p] = f[p] || f[((p - 1) / 2) | 0])
            }),
            a.init(s, h, d)
    }
})
var iy = {
    name: 'css',
    register: Cd,
    targetTest: function (e) {
        return e.style && e.nodeType
    },
    init: function (e, n, r, i, o) {
        var l = this._props,
            a = e.style,
            s = r.vars.startAt,
            u,
            c,
            d,
            f,
            h,
            g,
            p,
            x,
            v,
            m,
            _,
            y,
            k,
            C,
            S,
            T
        tp || Cd(),
            (this.styles = this.styles || Z_(e)),
            (T = this.styles.props),
            (this.tween = r)
        for (p in n)
            if (
                p !== 'autoRound' &&
                ((c = n[p]), !(mn[p] && W_(p, n, r, i, e, o)))
            ) {
                if (
                    ((h = typeof c),
                    (g = Pu[p]),
                    h === 'function' &&
                        ((c = c.call(r, i, e, o)), (h = typeof c)),
                    h === 'string' && ~c.indexOf('random(') && (c = Oa(c)),
                    g)
                )
                    g(this, e, p, c, r) && (S = 1)
                else if (p.substr(0, 2) === '--')
                    (u = (getComputedStyle(e).getPropertyValue(p) + '').trim()),
                        (c += ''),
                        (mi.lastIndex = 0),
                        mi.test(u) || ((x = At(u)), (v = At(c))),
                        v ? x !== v && (u = wi(e, p, u, v) + v) : x && (c += x),
                        this.add(a, 'setProperty', u, c, i, o, 0, 0, p),
                        l.push(p),
                        T.push(p, 0, a[p])
                else if (h !== 'undefined') {
                    if (
                        (s && p in s
                            ? ((u =
                                  typeof s[p] == 'function'
                                      ? s[p].call(r, i, e, o)
                                      : s[p]),
                              wt(u) && ~u.indexOf('random(') && (u = Oa(u)),
                              At(u + '') ||
                                  u === 'auto' ||
                                  (u += xn.units[p] || At(Er(e, p)) || ''),
                              (u + '').charAt(1) === '=' && (u = Er(e, p)))
                            : (u = Er(e, p)),
                        (f = parseFloat(u)),
                        (m =
                            h === 'string' &&
                            c.charAt(1) === '=' &&
                            c.substr(0, 2)),
                        m && (c = c.substr(2)),
                        (d = parseFloat(c)),
                        p in mr &&
                            (p === 'autoAlpha' &&
                                (f === 1 &&
                                    Er(e, 'visibility') === 'hidden' &&
                                    d &&
                                    (f = 0),
                                T.push('visibility', 0, a.visibility),
                                ni(
                                    this,
                                    a,
                                    'visibility',
                                    f ? 'inherit' : 'hidden',
                                    d ? 'inherit' : 'hidden',
                                    !d,
                                )),
                            p !== 'scale' &&
                                p !== 'transform' &&
                                ((p = mr[p]),
                                ~p.indexOf(',') && (p = p.split(',')[0]))),
                        (_ = p in Wr),
                        _)
                    ) {
                        if (
                            (this.styles.save(p),
                            y ||
                                ((k = e._gsap),
                                (k.renderTransform && !n.parseTransform) ||
                                    Na(e, n.parseTransform),
                                (C = n.smoothOrigin !== !1 && k.smooth),
                                (y = this._pt =
                                    new an(
                                        this._pt,
                                        a,
                                        be,
                                        0,
                                        1,
                                        k.renderTransform,
                                        k,
                                        0,
                                        -1,
                                    )),
                                (y.dep = 1)),
                            p === 'scale')
                        )
                            (this._pt = new an(
                                this._pt,
                                k,
                                'scaleY',
                                k.scaleY,
                                (m ? Vo(k.scaleY, m + d) : d) - k.scaleY || 0,
                                Sd,
                            )),
                                (this._pt.u = 0),
                                l.push('scaleY', p),
                                (p += 'X')
                        else if (p === 'transformOrigin') {
                            T.push(sn, 0, a[sn]),
                                (c = n2(c)),
                                k.svg
                                    ? Td(e, c, 0, C, 0, this)
                                    : ((v = parseFloat(c.split(' ')[2]) || 0),
                                      v !== k.zOrigin &&
                                          ni(this, k, 'zOrigin', k.zOrigin, v),
                                      ni(this, a, p, Eu(u), Eu(c)))
                            continue
                        } else if (p === 'svgOrigin') {
                            Td(e, c, 1, C, 0, this)
                            continue
                        } else if (p in ty) {
                            l2(this, k, p, f, m ? Vo(f, m + c) : c)
                            continue
                        } else if (p === 'smoothOrigin') {
                            ni(this, k, 'smooth', k.smooth, c)
                            continue
                        } else if (p === 'force3D') {
                            k[p] = c
                            continue
                        } else if (p === 'transform') {
                            a2(this, c, e)
                            continue
                        }
                    } else p in a || (p = il(p) || p)
                    if (
                        _ ||
                        ((d || d === 0) &&
                            (f || f === 0) &&
                            !$k.test(c) &&
                            p in a)
                    )
                        (x = (u + '').substr((f + '').length)),
                            d || (d = 0),
                            (v = At(c) || (p in xn.units ? xn.units[p] : x)),
                            x !== v && (f = wi(e, p, u, v)),
                            (this._pt = new an(
                                this._pt,
                                _ ? k : a,
                                p,
                                f,
                                (m ? Vo(f, m + d) : d) - f,
                                !_ &&
                                (v === 'px' || p === 'zIndex') &&
                                n.autoRound !== !1
                                    ? Yk
                                    : Sd,
                            )),
                            (this._pt.u = v || 0),
                            x !== v &&
                                v !== '%' &&
                                ((this._pt.b = u), (this._pt.r = Uk))
                    else if (p in a) t2.call(this, e, p, u, m ? m + c : c)
                    else if (p in e)
                        this.add(e, p, u || e[p], m ? m + c : c, i, o)
                    else if (p !== 'parseTransform') {
                        Hh(p, c)
                        continue
                    }
                    _ ||
                        (p in a ? T.push(p, 0, a[p]) : T.push(p, 1, u || e[p])),
                        l.push(p)
                }
            }
        S && H_(this)
    },
    render: function (e, n) {
        if (n.tween._time || !np())
            for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next)
        else n.styles.revert()
    },
    get: Er,
    aliases: mr,
    getSetter: function (e, n, r) {
        var i = mr[n]
        return (
            i && i.indexOf(',') < 0 && (n = i),
            n in Wr && n !== sn && (e._gsap.x || Er(e, 'x'))
                ? r && Ym === r
                    ? n === 'scale'
                        ? Qk
                        : Gk
                    : (Ym = r || {}) && (n === 'scale' ? Kk : Zk)
                : e.style && !Bh(e.style[n])
                  ? Hk
                  : ~n.indexOf('-')
                    ? Xk
                    : Jh(e, n)
        )
    },
    core: { _removeProperty: no, _getMatrix: ip },
}
un.utils.checkPrefix = il
un.core.getStyleSaver = Z_
;(function (t, e, n, r) {
    var i = ln(t + ',' + e + ',' + n, function (o) {
        Wr[o] = 1
    })
    ln(e, function (o) {
        ;(xn.units[o] = 'deg'), (ty[o] = 1)
    }),
        (mr[i[13]] = t + ',' + e),
        ln(r, function (o) {
            var l = o.split(':')
            mr[l[1]] = i[l[0]]
        })
})(
    'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
    'rotation,rotationX,rotationY,skewX,skewY',
    'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
    '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
)
ln(
    'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
    function (t) {
        xn.units[t] = 'px'
    },
)
un.registerPlugin(iy)
var Vs = un.registerPlugin(iy) || un
Vs.core.Tween
function s2(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
        ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
    }
}
function u2(t, e, n) {
    return e && s2(t.prototype, e), t
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var St,
    $s,
    gn,
    ri,
    ii,
    Uo,
    oy,
    Ri,
    Kl,
    ly,
    Lr,
    Xn,
    ay,
    sy = function () {
        return (
            St ||
            (typeof window < 'u' &&
                (St = window.gsap) &&
                St.registerPlugin &&
                St)
        )
    },
    uy = 1,
    jo = [],
    ne = [],
    wr = [],
    Zl = Date.now,
    Od = function (e, n) {
        return n
    },
    c2 = function () {
        var e = Kl.core,
            n = e.bridge || {},
            r = e._scrollers,
            i = e._proxies
        r.push.apply(r, ne),
            i.push.apply(i, wr),
            (ne = r),
            (wr = i),
            (Od = function (l, a) {
                return n[l](a)
            })
    },
    vi = function (e, n) {
        return ~wr.indexOf(e) && wr[wr.indexOf(e) + 1][n]
    },
    ql = function (e) {
        return !!~ly.indexOf(e)
    },
    Wt = function (e, n, r, i, o) {
        return e.addEventListener(n, r, { passive: i !== !1, capture: !!o })
    },
    bt = function (e, n, r, i) {
        return e.removeEventListener(n, r, !!i)
    },
    hs = 'scrollLeft',
    ps = 'scrollTop',
    Pd = function () {
        return (Lr && Lr.isPressed) || ne.cache++
    },
    Du = function (e, n) {
        var r = function i(o) {
            if (o || o === 0) {
                uy && (gn.history.scrollRestoration = 'manual')
                var l = Lr && Lr.isPressed
                ;(o = i.v = Math.round(o) || (Lr && Lr.iOS ? 1 : 0)),
                    e(o),
                    (i.cacheID = ne.cache),
                    l && Od('ss', o)
            } else
                (n || ne.cache !== i.cacheID || Od('ref')) &&
                    ((i.cacheID = ne.cache), (i.v = e()))
            return i.v + i.offset
        }
        return (r.offset = 0), e && r
    },
    Ht = {
        s: hs,
        p: 'left',
        p2: 'Left',
        os: 'right',
        os2: 'Right',
        d: 'width',
        d2: 'Width',
        a: 'x',
        sc: Du(function (t) {
            return arguments.length
                ? gn.scrollTo(t, dt.sc())
                : gn.pageXOffset || ri[hs] || ii[hs] || Uo[hs] || 0
        }),
    },
    dt = {
        s: ps,
        p: 'top',
        p2: 'Top',
        os: 'bottom',
        os2: 'Bottom',
        d: 'height',
        d2: 'Height',
        a: 'y',
        op: Ht,
        sc: Du(function (t) {
            return arguments.length
                ? gn.scrollTo(Ht.sc(), t)
                : gn.pageYOffset || ri[ps] || ii[ps] || Uo[ps] || 0
        }),
    },
    qt = function (e, n) {
        return (
            ((n && n._ctx && n._ctx.selector) || St.utils.toArray)(e)[0] ||
            (typeof e == 'string' && St.config().nullTargetWarn !== !1
                ? console.warn('Element not found:', e)
                : null)
        )
    },
    xi = function (e, n) {
        var r = n.s,
            i = n.sc
        ql(e) && (e = ri.scrollingElement || ii)
        var o = ne.indexOf(e),
            l = i === dt.sc ? 1 : 2
        !~o && (o = ne.push(e) - 1), ne[o + l] || Wt(e, 'scroll', Pd)
        var a = ne[o + l],
            s =
                a ||
                (ne[o + l] =
                    Du(vi(e, r), !0) ||
                    (ql(e)
                        ? i
                        : Du(function (u) {
                              return arguments.length ? (e[r] = u) : e[r]
                          })))
        return (
            (s.target = e),
            a || (s.smooth = St.getProperty(e, 'scrollBehavior') === 'smooth'),
            s
        )
    },
    Ed = function (e, n, r) {
        var i = e,
            o = e,
            l = Zl(),
            a = l,
            s = n || 50,
            u = Math.max(500, s * 3),
            c = function (g, p) {
                var x = Zl()
                p || x - l > s
                    ? ((o = i), (i = g), (a = l), (l = x))
                    : r
                      ? (i += g)
                      : (i = o + ((g - o) / (x - a)) * (l - a))
            },
            d = function () {
                ;(o = i = r ? 0 : i), (a = l = 0)
            },
            f = function (g) {
                var p = a,
                    x = o,
                    v = Zl()
                return (
                    (g || g === 0) && g !== i && c(g),
                    l === a || v - a > u
                        ? 0
                        : ((i + (r ? x : -x)) / ((r ? v : l) - p)) * 1e3
                )
            }
        return { update: c, reset: d, getVelocity: f }
    },
    Cl = function (e, n) {
        return (
            n && !e._gsapAllow && e.preventDefault(),
            e.changedTouches ? e.changedTouches[0] : e
        )
    },
    Jm = function (e) {
        var n = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e)
        return Math.abs(n) >= Math.abs(r) ? n : r
    },
    cy = function () {
        ;(Kl = St.core.globals().ScrollTrigger), Kl && Kl.core && c2()
    },
    fy = function (e) {
        return (
            (St = e || sy()),
            !$s &&
                St &&
                typeof document < 'u' &&
                document.body &&
                ((gn = window),
                (ri = document),
                (ii = ri.documentElement),
                (Uo = ri.body),
                (ly = [gn, ri, ii, Uo]),
                St.utils.clamp,
                (ay = St.core.context || function () {}),
                (Ri = 'onpointerenter' in Uo ? 'pointer' : 'mouse'),
                (oy = et.isTouch =
                    gn.matchMedia &&
                    gn.matchMedia('(hover: none), (pointer: coarse)').matches
                        ? 1
                        : 'ontouchstart' in gn ||
                            navigator.maxTouchPoints > 0 ||
                            navigator.msMaxTouchPoints > 0
                          ? 2
                          : 0),
                (Xn = et.eventTypes =
                    (
                        'ontouchstart' in ii
                            ? 'touchstart,touchmove,touchcancel,touchend'
                            : 'onpointerdown' in ii
                              ? 'pointerdown,pointermove,pointercancel,pointerup'
                              : 'mousedown,mousemove,mouseup,mouseup'
                    ).split(',')),
                setTimeout(function () {
                    return (uy = 0)
                }, 500),
                cy(),
                ($s = 1)),
            $s
        )
    }
Ht.op = dt
ne.cache = 0
var et = (function () {
    function t(n) {
        this.init(n)
    }
    var e = t.prototype
    return (
        (e.init = function (r) {
            $s ||
                fy(St) ||
                console.warn('Please gsap.registerPlugin(Observer)'),
                Kl || cy()
            var i = r.tolerance,
                o = r.dragMinimum,
                l = r.type,
                a = r.target,
                s = r.lineHeight,
                u = r.debounce,
                c = r.preventDefault,
                d = r.onStop,
                f = r.onStopDelay,
                h = r.ignore,
                g = r.wheelSpeed,
                p = r.event,
                x = r.onDragStart,
                v = r.onDragEnd,
                m = r.onDrag,
                _ = r.onPress,
                y = r.onRelease,
                k = r.onRight,
                C = r.onLeft,
                S = r.onUp,
                T = r.onDown,
                D = r.onChangeX,
                P = r.onChangeY,
                I = r.onChange,
                L = r.onToggleX,
                U = r.onToggleY,
                Y = r.onHover,
                q = r.onHoverEnd,
                W = r.onMove,
                V = r.ignoreCheck,
                N = r.isNormalizer,
                R = r.onGestureStart,
                w = r.onGestureEnd,
                F = r.onWheel,
                K = r.onEnable,
                $e = r.onDisable,
                le = r.onClick,
                Ce = r.scrollSpeed,
                ge = r.capture,
                he = r.allowClicks,
                Ke = r.lockAxis,
                Te = r.onLockAxis
            ;(this.target = a = qt(a) || ii),
                (this.vars = r),
                h && (h = St.utils.toArray(h)),
                (i = i || 1e-9),
                (o = o || 0),
                (g = g || 1),
                (Ce = Ce || 1),
                (l = l || 'wheel,touch,pointer'),
                (u = u !== !1),
                s || (s = parseFloat(gn.getComputedStyle(Uo).lineHeight) || 22)
            var On,
                st,
                Tt,
                ie,
                Z,
                tt,
                ye,
                E = this,
                Ot = 0,
                Pn = 0,
                tr = r.passive || !c,
                Be = xi(a, Ht),
                nr = xi(a, dt),
                rr = Be(),
                Br = nr(),
                nt =
                    ~l.indexOf('touch') &&
                    !~l.indexOf('pointer') &&
                    Xn[0] === 'pointerdown',
                ir = ql(a),
                Re = a.ownerDocument || ri,
                cn = [0, 0, 0],
                Pt = [0, 0, 0],
                En = 0,
                Ur = function () {
                    return (En = Zl())
                },
                Ue = function ($, ue) {
                    return (
                        ((E.event = $) && h && ~h.indexOf($.target)) ||
                        (ue && nt && $.pointerType !== 'touch') ||
                        (V && V($, ue))
                    )
                },
                Sr = function () {
                    E._vx.reset(), E._vy.reset(), st.pause(), d && d(E)
                },
                $n = function () {
                    var $ = (E.deltaX = Jm(cn)),
                        ue = (E.deltaY = Jm(Pt)),
                        j = Math.abs($) >= i,
                        X = Math.abs(ue) >= i
                    I && (j || X) && I(E, $, ue, cn, Pt),
                        j &&
                            (k && E.deltaX > 0 && k(E),
                            C && E.deltaX < 0 && C(E),
                            D && D(E),
                            L && E.deltaX < 0 != Ot < 0 && L(E),
                            (Ot = E.deltaX),
                            (cn[0] = cn[1] = cn[2] = 0)),
                        X &&
                            (T && E.deltaY > 0 && T(E),
                            S && E.deltaY < 0 && S(E),
                            P && P(E),
                            U && E.deltaY < 0 != Pn < 0 && U(E),
                            (Pn = E.deltaY),
                            (Pt[0] = Pt[1] = Pt[2] = 0)),
                        (ie || Tt) &&
                            (W && W(E), Tt && (m(E), (Tt = !1)), (ie = !1)),
                        tt && !(tt = !1) && Te && Te(E),
                        Z && (F(E), (Z = !1)),
                        (On = 0)
                },
                Yr = function ($, ue, j) {
                    ;(cn[j] += $),
                        (Pt[j] += ue),
                        E._vx.update($),
                        E._vy.update(ue),
                        u ? On || (On = requestAnimationFrame($n)) : $n()
                },
                kr = function ($, ue) {
                    Ke &&
                        !ye &&
                        ((E.axis = ye = Math.abs($) > Math.abs(ue) ? 'x' : 'y'),
                        (tt = !0)),
                        ye !== 'y' && ((cn[2] += $), E._vx.update($, !0)),
                        ye !== 'x' && ((Pt[2] += ue), E._vy.update(ue, !0)),
                        u ? On || (On = requestAnimationFrame($n)) : $n()
                },
                Bn = function ($) {
                    if (!Ue($, 1)) {
                        $ = Cl($, c)
                        var ue = $.clientX,
                            j = $.clientY,
                            X = ue - E.x,
                            b = j - E.y,
                            H = E.isDragging
                        ;(E.x = ue),
                            (E.y = j),
                            (H ||
                                Math.abs(E.startX - ue) >= o ||
                                Math.abs(E.startY - j) >= o) &&
                                (m && (Tt = !0),
                                H || (E.isDragging = !0),
                                kr(X, b),
                                H || (x && x(E)))
                    }
                },
                Un = (E.onPress = function (Q) {
                    Ue(Q, 1) ||
                        (Q && Q.button) ||
                        ((E.axis = ye = null),
                        st.pause(),
                        (E.isPressed = !0),
                        (Q = Cl(Q)),
                        (Ot = Pn = 0),
                        (E.startX = E.x = Q.clientX),
                        (E.startY = E.y = Q.clientY),
                        E._vx.reset(),
                        E._vy.reset(),
                        Wt(N ? a : Re, Xn[1], Bn, tr, !0),
                        (E.deltaX = E.deltaY = 0),
                        _ && _(E))
                }),
                J = (E.onRelease = function (Q) {
                    if (!Ue(Q, 1)) {
                        bt(N ? a : Re, Xn[1], Bn, !0)
                        var $ = !isNaN(E.y - E.startY),
                            ue = E.isDragging,
                            j =
                                ue &&
                                (Math.abs(E.x - E.startX) > 3 ||
                                    Math.abs(E.y - E.startY) > 3),
                            X = Cl(Q)
                        !j &&
                            $ &&
                            (E._vx.reset(),
                            E._vy.reset(),
                            c &&
                                he &&
                                St.delayedCall(0.08, function () {
                                    if (
                                        Zl() - En > 300 &&
                                        !Q.defaultPrevented
                                    ) {
                                        if (Q.target.click) Q.target.click()
                                        else if (Re.createEvent) {
                                            var b =
                                                Re.createEvent('MouseEvents')
                                            b.initMouseEvent(
                                                'click',
                                                !0,
                                                !0,
                                                gn,
                                                1,
                                                X.screenX,
                                                X.screenY,
                                                X.clientX,
                                                X.clientY,
                                                !1,
                                                !1,
                                                !1,
                                                !1,
                                                0,
                                                null,
                                            ),
                                                Q.target.dispatchEvent(b)
                                        }
                                    }
                                })),
                            (E.isDragging = E.isGesturing = E.isPressed = !1),
                            d && ue && !N && st.restart(!0),
                            v && ue && v(E),
                            y && y(E, j)
                    }
                }),
                or = function ($) {
                    return (
                        $.touches &&
                        $.touches.length > 1 &&
                        (E.isGesturing = !0) &&
                        R($, E.isDragging)
                    )
                },
                fn = function () {
                    return (E.isGesturing = !1) || w(E)
                },
                Zt = function ($) {
                    if (!Ue($)) {
                        var ue = Be(),
                            j = nr()
                        Yr((ue - rr) * Ce, (j - Br) * Ce, 1),
                            (rr = ue),
                            (Br = j),
                            d && st.restart(!0)
                    }
                },
                we = function ($) {
                    if (!Ue($)) {
                        ;($ = Cl($, c)), F && (Z = !0)
                        var ue =
                            ($.deltaMode === 1
                                ? s
                                : $.deltaMode === 2
                                  ? gn.innerHeight
                                  : 1) * g
                        Yr($.deltaX * ue, $.deltaY * ue, 0),
                            d && !N && st.restart(!0)
                    }
                },
                Ye = function ($) {
                    if (!Ue($)) {
                        var ue = $.clientX,
                            j = $.clientY,
                            X = ue - E.x,
                            b = j - E.y
                        ;(E.x = ue),
                            (E.y = j),
                            (ie = !0),
                            d && st.restart(!0),
                            (X || b) && kr(X, b)
                    }
                },
                Yn = function ($) {
                    ;(E.event = $), Y(E)
                },
                fe = function ($) {
                    ;(E.event = $), q(E)
                },
                Et = function ($) {
                    return Ue($) || (Cl($, c) && le(E))
                }
            ;(st = E._dc = St.delayedCall(f || 0.25, Sr).pause()),
                (E.deltaX = E.deltaY = 0),
                (E._vx = Ed(0, 50, !0)),
                (E._vy = Ed(0, 50, !0)),
                (E.scrollX = Be),
                (E.scrollY = nr),
                (E.isDragging = E.isGesturing = E.isPressed = !1),
                ay(this),
                (E.enable = function (Q) {
                    return (
                        E.isEnabled ||
                            (Wt(ir ? Re : a, 'scroll', Pd),
                            l.indexOf('scroll') >= 0 &&
                                Wt(ir ? Re : a, 'scroll', Zt, tr, ge),
                            l.indexOf('wheel') >= 0 &&
                                Wt(a, 'wheel', we, tr, ge),
                            ((l.indexOf('touch') >= 0 && oy) ||
                                l.indexOf('pointer') >= 0) &&
                                (Wt(a, Xn[0], Un, tr, ge),
                                Wt(Re, Xn[2], J),
                                Wt(Re, Xn[3], J),
                                he && Wt(a, 'click', Ur, !0, !0),
                                le && Wt(a, 'click', Et),
                                R && Wt(Re, 'gesturestart', or),
                                w && Wt(Re, 'gestureend', fn),
                                Y && Wt(a, Ri + 'enter', Yn),
                                q && Wt(a, Ri + 'leave', fe),
                                W && Wt(a, Ri + 'move', Ye)),
                            (E.isEnabled = !0),
                            Q && Q.type && Un(Q),
                            K && K(E)),
                        E
                    )
                }),
                (E.disable = function () {
                    E.isEnabled &&
                        (jo.filter(function (Q) {
                            return Q !== E && ql(Q.target)
                        }).length || bt(ir ? Re : a, 'scroll', Pd),
                        E.isPressed &&
                            (E._vx.reset(),
                            E._vy.reset(),
                            bt(N ? a : Re, Xn[1], Bn, !0)),
                        bt(ir ? Re : a, 'scroll', Zt, ge),
                        bt(a, 'wheel', we, ge),
                        bt(a, Xn[0], Un, ge),
                        bt(Re, Xn[2], J),
                        bt(Re, Xn[3], J),
                        bt(a, 'click', Ur, !0),
                        bt(a, 'click', Et),
                        bt(Re, 'gesturestart', or),
                        bt(Re, 'gestureend', fn),
                        bt(a, Ri + 'enter', Yn),
                        bt(a, Ri + 'leave', fe),
                        bt(a, Ri + 'move', Ye),
                        (E.isEnabled = E.isPressed = E.isDragging = !1),
                        $e && $e(E))
                }),
                (E.kill = E.revert =
                    function () {
                        E.disable()
                        var Q = jo.indexOf(E)
                        Q >= 0 && jo.splice(Q, 1), Lr === E && (Lr = 0)
                    }),
                jo.push(E),
                N && ql(a) && (Lr = E),
                E.enable(p)
        }),
        u2(t, [
            {
                key: 'velocityX',
                get: function () {
                    return this._vx.getVelocity()
                },
            },
            {
                key: 'velocityY',
                get: function () {
                    return this._vy.getVelocity()
                },
            },
        ]),
        t
    )
})()
et.version = '3.12.5'
et.create = function (t) {
    return new et(t)
}
et.register = fy
et.getAll = function () {
    return jo.slice()
}
et.getById = function (t) {
    return jo.filter(function (e) {
        return e.vars.id === t
    })[0]
}
sy() && St.registerPlugin(et)
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var z,
    vo,
    ae,
    Ae,
    Zn,
    Ee,
    dy,
    Nu,
    Ma,
    Jl,
    Rl,
    ms,
    Lt,
    lc,
    Dd,
    Bt,
    e0,
    t0,
    go,
    hy,
    Qc,
    py,
    Vt,
    Nd,
    my,
    vy,
    Xr,
    Md,
    op,
    Yo,
    lp,
    Mu,
    Ld,
    Kc,
    vs = 1,
    Rt = Date.now,
    Zc = Rt(),
    Fn = 0,
    jl = 0,
    n0 = function (e, n, r) {
        var i = pn(e) && (e.substr(0, 6) === 'clamp(' || e.indexOf('max') > -1)
        return (r['_' + n + 'Clamp'] = i), i ? e.substr(6, e.length - 7) : e
    },
    r0 = function (e, n) {
        return n && (!pn(e) || e.substr(0, 6) !== 'clamp(')
            ? 'clamp(' + e + ')'
            : e
    },
    f2 = function t() {
        return jl && requestAnimationFrame(t)
    },
    i0 = function () {
        return (lc = 1)
    },
    o0 = function () {
        return (lc = 0)
    },
    dr = function (e) {
        return e
    },
    Al = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    gy = function () {
        return typeof window < 'u'
    },
    _y = function () {
        return z || (gy() && (z = window.gsap) && z.registerPlugin && z)
    },
    ro = function (e) {
        return !!~dy.indexOf(e)
    },
    yy = function (e) {
        return (
            (e === 'Height' ? lp : ae['inner' + e]) ||
            Zn['client' + e] ||
            Ee['client' + e]
        )
    },
    wy = function (e) {
        return (
            vi(e, 'getBoundingClientRect') ||
            (ro(e)
                ? function () {
                      return (Xs.width = ae.innerWidth), (Xs.height = lp), Xs
                  }
                : function () {
                      return Dr(e)
                  })
        )
    },
    d2 = function (e, n, r) {
        var i = r.d,
            o = r.d2,
            l = r.a
        return (l = vi(e, 'getBoundingClientRect'))
            ? function () {
                  return l()[i]
              }
            : function () {
                  return (n ? yy(o) : e['client' + o]) || 0
              }
    },
    h2 = function (e, n) {
        return !n || ~wr.indexOf(e)
            ? wy(e)
            : function () {
                  return Xs
              }
    },
    vr = function (e, n) {
        var r = n.s,
            i = n.d2,
            o = n.d,
            l = n.a
        return Math.max(
            0,
            (r = 'scroll' + i) && (l = vi(e, r))
                ? l() - wy(e)()[o]
                : ro(e)
                  ? (Zn[r] || Ee[r]) - yy(i)
                  : e[r] - e['offset' + i],
        )
    },
    gs = function (e, n) {
        for (var r = 0; r < go.length; r += 3)
            (!n || ~n.indexOf(go[r + 1])) && e(go[r], go[r + 1], go[r + 2])
    },
    pn = function (e) {
        return typeof e == 'string'
    },
    Xt = function (e) {
        return typeof e == 'function'
    },
    zl = function (e) {
        return typeof e == 'number'
    },
    ji = function (e) {
        return typeof e == 'object'
    },
    Tl = function (e, n, r) {
        return e && e.progress(n ? 0 : 1) && r && e.pause()
    },
    qc = function (e, n) {
        if (e.enabled) {
            var r = e._ctx
                ? e._ctx.add(function () {
                      return n(e)
                  })
                : n(e)
            r && r.totalTime && (e.callbackAnimation = r)
        }
    },
    po = Math.abs,
    xy = 'left',
    Sy = 'top',
    ap = 'right',
    sp = 'bottom',
    Xi = 'width',
    Gi = 'height',
    ea = 'Right',
    ta = 'Left',
    na = 'Top',
    ra = 'Bottom',
    it = 'padding',
    Ln = 'margin',
    ol = 'Width',
    up = 'Height',
    ct = 'px',
    Rn = function (e) {
        return ae.getComputedStyle(e)
    },
    p2 = function (e) {
        var n = Rn(e).position
        e.style.position = n === 'absolute' || n === 'fixed' ? n : 'relative'
    },
    l0 = function (e, n) {
        for (var r in n) r in e || (e[r] = n[r])
        return e
    },
    Dr = function (e, n) {
        var r =
                n &&
                Rn(e)[Dd] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
                z
                    .to(e, {
                        x: 0,
                        y: 0,
                        xPercent: 0,
                        yPercent: 0,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0,
                    })
                    .progress(1),
            i = e.getBoundingClientRect()
        return r && r.progress(0).kill(), i
    },
    Lu = function (e, n) {
        var r = n.d2
        return e['offset' + r] || e['client' + r] || 0
    },
    ky = function (e) {
        var n = [],
            r = e.labels,
            i = e.duration(),
            o
        for (o in r) n.push(r[o] / i)
        return n
    },
    m2 = function (e) {
        return function (n) {
            return z.utils.snap(ky(e), n)
        }
    },
    cp = function (e) {
        var n = z.utils.snap(e),
            r =
                Array.isArray(e) &&
                e.slice(0).sort(function (i, o) {
                    return i - o
                })
        return r
            ? function (i, o, l) {
                  l === void 0 && (l = 0.001)
                  var a
                  if (!o) return n(i)
                  if (o > 0) {
                      for (i -= l, a = 0; a < r.length; a++)
                          if (r[a] >= i) return r[a]
                      return r[a - 1]
                  } else
                      for (a = r.length, i += l; a--; )
                          if (r[a] <= i) return r[a]
                  return r[0]
              }
            : function (i, o, l) {
                  l === void 0 && (l = 0.001)
                  var a = n(i)
                  return !o || Math.abs(a - i) < l || a - i < 0 == o < 0
                      ? a
                      : n(o < 0 ? i - e : i + e)
              }
    },
    v2 = function (e) {
        return function (n, r) {
            return cp(ky(e))(n, r.direction)
        }
    },
    _s = function (e, n, r, i) {
        return r.split(',').forEach(function (o) {
            return e(n, o, i)
        })
    },
    vt = function (e, n, r, i, o) {
        return e.addEventListener(n, r, { passive: !i, capture: !!o })
    },
    mt = function (e, n, r, i) {
        return e.removeEventListener(n, r, !!i)
    },
    ys = function (e, n, r) {
        ;(r = r && r.wheelHandler),
            r && (e(n, 'wheel', r), e(n, 'touchmove', r))
    },
    a0 = {
        startColor: 'green',
        endColor: 'red',
        indent: 0,
        fontSize: '16px',
        fontWeight: 'normal',
    },
    ws = { toggleActions: 'play', anticipatePin: 0 },
    Ru = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Bs = function (e, n) {
        if (pn(e)) {
            var r = e.indexOf('='),
                i = ~r
                    ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1))
                    : 0
            ~r &&
                (e.indexOf('%') > r && (i *= n / 100),
                (e = e.substr(0, r - 1))),
                (e =
                    i +
                    (e in Ru
                        ? Ru[e] * n
                        : ~e.indexOf('%')
                          ? (parseFloat(e) * n) / 100
                          : parseFloat(e) || 0))
        }
        return e
    },
    xs = function (e, n, r, i, o, l, a, s) {
        var u = o.startColor,
            c = o.endColor,
            d = o.fontSize,
            f = o.indent,
            h = o.fontWeight,
            g = Ae.createElement('div'),
            p = ro(r) || vi(r, 'pinType') === 'fixed',
            x = e.indexOf('scroller') !== -1,
            v = p ? Ee : r,
            m = e.indexOf('start') !== -1,
            _ = m ? u : c,
            y =
                'border-color:' +
                _ +
                ';font-size:' +
                d +
                ';color:' +
                _ +
                ';font-weight:' +
                h +
                ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;'
        return (
            (y += 'position:' + ((x || s) && p ? 'fixed;' : 'absolute;')),
            (x || s || !p) &&
                (y += (i === dt ? ap : sp) + ':' + (l + parseFloat(f)) + 'px;'),
            a &&
                (y +=
                    'box-sizing:border-box;text-align:left;width:' +
                    a.offsetWidth +
                    'px;'),
            (g._isStart = m),
            g.setAttribute(
                'class',
                'gsap-marker-' + e + (n ? ' marker-' + n : ''),
            ),
            (g.style.cssText = y),
            (g.innerText = n || n === 0 ? e + '-' + n : e),
            v.children[0] ? v.insertBefore(g, v.children[0]) : v.appendChild(g),
            (g._offset = g['offset' + i.op.d2]),
            Us(g, 0, i, m),
            g
        )
    },
    Us = function (e, n, r, i) {
        var o = { display: 'block' },
            l = r[i ? 'os2' : 'p2'],
            a = r[i ? 'p2' : 'os2']
        ;(e._isFlipped = i),
            (o[r.a + 'Percent'] = i ? -100 : 0),
            (o[r.a] = i ? '1px' : 0),
            (o['border' + l + ol] = 1),
            (o['border' + a + ol] = 0),
            (o[r.p] = n + 'px'),
            z.set(e, o)
    },
    te = [],
    Rd = {},
    La,
    s0 = function () {
        return Rt() - Fn > 34 && (La || (La = requestAnimationFrame(jr)))
    },
    mo = function () {
        ;(!Vt || !Vt.isPressed || Vt.startX > Ee.clientWidth) &&
            (ne.cache++,
            Vt ? La || (La = requestAnimationFrame(jr)) : jr(),
            Fn || oo('scrollStart'),
            (Fn = Rt()))
    },
    Jc = function () {
        ;(vy = ae.innerWidth), (my = ae.innerHeight)
    },
    Il = function () {
        ne.cache++,
            !Lt &&
                !py &&
                !Ae.fullscreenElement &&
                !Ae.webkitFullscreenElement &&
                (!Nd ||
                    vy !== ae.innerWidth ||
                    Math.abs(ae.innerHeight - my) > ae.innerHeight * 0.25) &&
                Nu.restart(!0)
    },
    io = {},
    g2 = [],
    Cy = function t() {
        return mt(oe, 'scrollEnd', t) || bi(!0)
    },
    oo = function (e) {
        return (
            (io[e] &&
                io[e].map(function (n) {
                    return n()
                })) ||
            g2
        )
    },
    dn = [],
    Ty = function (e) {
        for (var n = 0; n < dn.length; n += 5)
            (!e || (dn[n + 4] && dn[n + 4].query === e)) &&
                ((dn[n].style.cssText = dn[n + 1]),
                dn[n].getBBox &&
                    dn[n].setAttribute('transform', dn[n + 2] || ''),
                (dn[n + 3].uncache = 1))
    },
    fp = function (e, n) {
        var r
        for (Bt = 0; Bt < te.length; Bt++)
            (r = te[Bt]),
                r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0))
        ;(Mu = !0), n && Ty(n), n || oo('revert')
    },
    Oy = function (e, n) {
        ne.cache++,
            (n || !Ut) &&
                ne.forEach(function (r) {
                    return Xt(r) && r.cacheID++ && (r.rec = 0)
                }),
            pn(e) && (ae.history.scrollRestoration = op = e)
    },
    Ut,
    Qi = 0,
    u0,
    _2 = function () {
        if (u0 !== Qi) {
            var e = (u0 = Qi)
            requestAnimationFrame(function () {
                return e === Qi && bi(!0)
            })
        }
    },
    Py = function () {
        Ee.appendChild(Yo),
            (lp = (!Vt && Yo.offsetHeight) || ae.innerHeight),
            Ee.removeChild(Yo)
    },
    c0 = function (e) {
        return Ma(
            '.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end',
        ).forEach(function (n) {
            return (n.style.display = e ? 'none' : 'block')
        })
    },
    bi = function (e, n) {
        if (Fn && !e && !Mu) {
            vt(oe, 'scrollEnd', Cy)
            return
        }
        Py(),
            (Ut = oe.isRefreshing = !0),
            ne.forEach(function (i) {
                return Xt(i) && ++i.cacheID && (i.rec = i())
            })
        var r = oo('refreshInit')
        hy && oe.sort(),
            n || fp(),
            ne.forEach(function (i) {
                Xt(i) &&
                    (i.smooth && (i.target.style.scrollBehavior = 'auto'), i(0))
            }),
            te.slice(0).forEach(function (i) {
                return i.refresh()
            }),
            (Mu = !1),
            te.forEach(function (i) {
                if (i._subPinOffset && i.pin) {
                    var o = i.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
                        l = i.pin[o]
                    i.revert(!0, 1),
                        i.adjustPinSpacing(i.pin[o] - l),
                        i.refresh()
                }
            }),
            (Ld = 1),
            c0(!0),
            te.forEach(function (i) {
                var o = vr(i.scroller, i._dir),
                    l = i.vars.end === 'max' || (i._endClamp && i.end > o),
                    a = i._startClamp && i.start >= o
                ;(l || a) &&
                    i.setPositions(
                        a ? o - 1 : i.start,
                        l ? Math.max(a ? o : i.start + 1, o) : i.end,
                        !0,
                    )
            }),
            c0(!1),
            (Ld = 0),
            r.forEach(function (i) {
                return i && i.render && i.render(-1)
            }),
            ne.forEach(function (i) {
                Xt(i) &&
                    (i.smooth &&
                        requestAnimationFrame(function () {
                            return (i.target.style.scrollBehavior = 'smooth')
                        }),
                    i.rec && i(i.rec))
            }),
            Oy(op, 1),
            Nu.pause(),
            Qi++,
            (Ut = 2),
            jr(2),
            te.forEach(function (i) {
                return Xt(i.vars.onRefresh) && i.vars.onRefresh(i)
            }),
            (Ut = oe.isRefreshing = !1),
            oo('refresh')
    },
    jd = 0,
    Ys = 1,
    ia,
    jr = function (e) {
        if (e === 2 || (!Ut && !Mu)) {
            ;(oe.isUpdating = !0), ia && ia.update(0)
            var n = te.length,
                r = Rt(),
                i = r - Zc >= 50,
                o = n && te[0].scroll()
            if (
                ((Ys = jd > o ? -1 : 1),
                Ut || (jd = o),
                i &&
                    (Fn && !lc && r - Fn > 200 && ((Fn = 0), oo('scrollEnd')),
                    (Rl = Zc),
                    (Zc = r)),
                Ys < 0)
            ) {
                for (Bt = n; Bt-- > 0; ) te[Bt] && te[Bt].update(0, i)
                Ys = 1
            } else for (Bt = 0; Bt < n; Bt++) te[Bt] && te[Bt].update(0, i)
            oe.isUpdating = !1
        }
        La = 0
    },
    Ad = [
        xy,
        Sy,
        sp,
        ap,
        Ln + ra,
        Ln + ea,
        Ln + na,
        Ln + ta,
        'display',
        'flexShrink',
        'float',
        'zIndex',
        'gridColumnStart',
        'gridColumnEnd',
        'gridRowStart',
        'gridRowEnd',
        'gridArea',
        'justifySelf',
        'alignSelf',
        'placeSelf',
        'order',
    ],
    Hs = Ad.concat([
        Xi,
        Gi,
        'boxSizing',
        'max' + ol,
        'max' + up,
        'position',
        Ln,
        it,
        it + na,
        it + ea,
        it + ra,
        it + ta,
    ]),
    y2 = function (e, n, r) {
        Ho(r)
        var i = e._gsap
        if (i.spacerIsNative) Ho(i.spacerState)
        else if (e._gsap.swappedIn) {
            var o = n.parentNode
            o && (o.insertBefore(e, n), o.removeChild(n))
        }
        e._gsap.swappedIn = !1
    },
    ef = function (e, n, r, i) {
        if (!e._gsap.swappedIn) {
            for (var o = Ad.length, l = n.style, a = e.style, s; o--; )
                (s = Ad[o]), (l[s] = r[s])
            ;(l.position = r.position === 'absolute' ? 'absolute' : 'relative'),
                r.display === 'inline' && (l.display = 'inline-block'),
                (a[sp] = a[ap] = 'auto'),
                (l.flexBasis = r.flexBasis || 'auto'),
                (l.overflow = 'visible'),
                (l.boxSizing = 'border-box'),
                (l[Xi] = Lu(e, Ht) + ct),
                (l[Gi] = Lu(e, dt) + ct),
                (l[it] = a[Ln] = a[Sy] = a[xy] = '0'),
                Ho(i),
                (a[Xi] = a['max' + ol] = r[Xi]),
                (a[Gi] = a['max' + up] = r[Gi]),
                (a[it] = r[it]),
                e.parentNode !== n &&
                    (e.parentNode.insertBefore(n, e), n.appendChild(e)),
                (e._gsap.swappedIn = !0)
        }
    },
    w2 = /([A-Z])/g,
    Ho = function (e) {
        if (e) {
            var n = e.t.style,
                r = e.length,
                i = 0,
                o,
                l
            for ((e.t._gsap || z.core.getCache(e.t)).uncache = 1; i < r; i += 2)
                (l = e[i + 1]),
                    (o = e[i]),
                    l
                        ? (n[o] = l)
                        : n[o] &&
                          n.removeProperty(o.replace(w2, '-$1').toLowerCase())
        }
    },
    Ss = function (e) {
        for (var n = Hs.length, r = e.style, i = [], o = 0; o < n; o++)
            i.push(Hs[o], r[Hs[o]])
        return (i.t = e), i
    },
    x2 = function (e, n, r) {
        for (var i = [], o = e.length, l = r ? 8 : 0, a; l < o; l += 2)
            (a = e[l]), i.push(a, a in n ? n[a] : e[l + 1])
        return (i.t = e.t), i
    },
    Xs = { left: 0, top: 0 },
    f0 = function (e, n, r, i, o, l, a, s, u, c, d, f, h, g) {
        Xt(e) && (e = e(s)),
            pn(e) &&
                e.substr(0, 3) === 'max' &&
                (e = f + (e.charAt(4) === '=' ? Bs('0' + e.substr(3), r) : 0))
        var p = h ? h.time() : 0,
            x,
            v,
            m
        if ((h && h.seek(0), isNaN(e) || (e = +e), zl(e)))
            h &&
                (e = z.utils.mapRange(
                    h.scrollTrigger.start,
                    h.scrollTrigger.end,
                    0,
                    f,
                    e,
                )),
                a && Us(a, r, i, !0)
        else {
            Xt(n) && (n = n(s))
            var _ = (e || '0').split(' '),
                y,
                k,
                C,
                S
            ;(m = qt(n, s) || Ee),
                (y = Dr(m) || {}),
                (!y || (!y.left && !y.top)) &&
                    Rn(m).display === 'none' &&
                    ((S = m.style.display),
                    (m.style.display = 'block'),
                    (y = Dr(m)),
                    S
                        ? (m.style.display = S)
                        : m.style.removeProperty('display')),
                (k = Bs(_[0], y[i.d])),
                (C = Bs(_[1] || '0', r)),
                (e = y[i.p] - u[i.p] - c + k + o - C),
                a && Us(a, C, i, r - C < 20 || (a._isStart && C > 20)),
                (r -= r - C)
        }
        if ((g && ((s[g] = e || -0.001), e < 0 && (e = 0)), l)) {
            var T = e + r,
                D = l._isStart
            ;(x = 'scroll' + i.d2),
                Us(
                    l,
                    T,
                    i,
                    (D && T > 20) ||
                        (!D &&
                            (d ? Math.max(Ee[x], Zn[x]) : l.parentNode[x]) <=
                                T + 1),
                ),
                d &&
                    ((u = Dr(a)),
                    d &&
                        (l.style[i.op.p] = u[i.op.p] - i.op.m - l._offset + ct))
        }
        return (
            h &&
                m &&
                ((x = Dr(m)),
                h.seek(f),
                (v = Dr(m)),
                (h._caScrollDist = x[i.p] - v[i.p]),
                (e = (e / h._caScrollDist) * f)),
            h && h.seek(p),
            h ? e : Math.round(e)
        )
    },
    S2 = /(webkit|moz|length|cssText|inset)/i,
    d0 = function (e, n, r, i) {
        if (e.parentNode !== n) {
            var o = e.style,
                l,
                a
            if (n === Ee) {
                ;(e._stOrig = o.cssText), (a = Rn(e))
                for (l in a)
                    !+l &&
                        !S2.test(l) &&
                        a[l] &&
                        typeof o[l] == 'string' &&
                        l !== '0' &&
                        (o[l] = a[l])
                ;(o.top = r), (o.left = i)
            } else o.cssText = e._stOrig
            ;(z.core.getCache(e).uncache = 1), n.appendChild(e)
        }
    },
    Ey = function (e, n, r) {
        var i = n,
            o = i
        return function (l) {
            var a = Math.round(e())
            return (
                a !== i &&
                    a !== o &&
                    Math.abs(a - i) > 3 &&
                    Math.abs(a - o) > 3 &&
                    ((l = a), r && r()),
                (o = i),
                (i = l),
                l
            )
        }
    },
    ks = function (e, n, r) {
        var i = {}
        ;(i[n.p] = '+=' + r), z.set(e, i)
    },
    h0 = function (e, n) {
        var r = xi(e, n),
            i = '_scroll' + n.p2,
            o = function l(a, s, u, c, d) {
                var f = l.tween,
                    h = s.onComplete,
                    g = {}
                u = u || r()
                var p = Ey(r, u, function () {
                    f.kill(), (l.tween = 0)
                })
                return (
                    (d = (c && d) || 0),
                    (c = c || a - u),
                    f && f.kill(),
                    (s[i] = a),
                    (s.inherit = !1),
                    (s.modifiers = g),
                    (g[i] = function () {
                        return p(u + c * f.ratio + d * f.ratio * f.ratio)
                    }),
                    (s.onUpdate = function () {
                        ne.cache++, l.tween && jr()
                    }),
                    (s.onComplete = function () {
                        ;(l.tween = 0), h && h.call(f)
                    }),
                    (f = l.tween = z.to(e, s)),
                    f
                )
            }
        return (
            (e[i] = r),
            (r.wheelHandler = function () {
                return o.tween && o.tween.kill() && (o.tween = 0)
            }),
            vt(e, 'wheel', r.wheelHandler),
            oe.isTouch && vt(e, 'touchmove', r.wheelHandler),
            o
        )
    },
    oe = (function () {
        function t(n, r) {
            vo ||
                t.register(z) ||
                console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
                Md(this),
                this.init(n, r)
        }
        var e = t.prototype
        return (
            (e.init = function (r, i) {
                if (
                    ((this.progress = this.start = 0),
                    this.vars && this.kill(!0, !0),
                    !jl)
                ) {
                    this.update = this.refresh = this.kill = dr
                    return
                }
                r = l0(pn(r) || zl(r) || r.nodeType ? { trigger: r } : r, ws)
                var o = r,
                    l = o.onUpdate,
                    a = o.toggleClass,
                    s = o.id,
                    u = o.onToggle,
                    c = o.onRefresh,
                    d = o.scrub,
                    f = o.trigger,
                    h = o.pin,
                    g = o.pinSpacing,
                    p = o.invalidateOnRefresh,
                    x = o.anticipatePin,
                    v = o.onScrubComplete,
                    m = o.onSnapComplete,
                    _ = o.once,
                    y = o.snap,
                    k = o.pinReparent,
                    C = o.pinSpacer,
                    S = o.containerAnimation,
                    T = o.fastScrollEnd,
                    D = o.preventOverlaps,
                    P =
                        r.horizontal ||
                        (r.containerAnimation && r.horizontal !== !1)
                            ? Ht
                            : dt,
                    I = !d && d !== 0,
                    L = qt(r.scroller || ae),
                    U = z.core.getCache(L),
                    Y = ro(L),
                    q =
                        ('pinType' in r
                            ? r.pinType
                            : vi(L, 'pinType') || (Y && 'fixed')) === 'fixed',
                    W = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
                    V = I && r.toggleActions.split(' '),
                    N = 'markers' in r ? r.markers : ws.markers,
                    R = Y ? 0 : parseFloat(Rn(L)['border' + P.p2 + ol]) || 0,
                    w = this,
                    F =
                        r.onRefreshInit &&
                        function () {
                            return r.onRefreshInit(w)
                        },
                    K = d2(L, Y, P),
                    $e = h2(L, Y),
                    le = 0,
                    Ce = 0,
                    ge = 0,
                    he = xi(L, P),
                    Ke,
                    Te,
                    On,
                    st,
                    Tt,
                    ie,
                    Z,
                    tt,
                    ye,
                    E,
                    Ot,
                    Pn,
                    tr,
                    Be,
                    nr,
                    rr,
                    Br,
                    nt,
                    ir,
                    Re,
                    cn,
                    Pt,
                    En,
                    Ur,
                    Ue,
                    Sr,
                    $n,
                    Yr,
                    kr,
                    Bn,
                    Un,
                    J,
                    or,
                    fn,
                    Zt,
                    we,
                    Ye,
                    Yn,
                    fe
                if (
                    ((w._startClamp = w._endClamp = !1),
                    (w._dir = P),
                    (x *= 45),
                    (w.scroller = L),
                    (w.scroll = S ? S.time.bind(S) : he),
                    (st = he()),
                    (w.vars = r),
                    (i = i || r.animation),
                    'refreshPriority' in r &&
                        ((hy = 1), r.refreshPriority === -9999 && (ia = w)),
                    (U.tweenScroll = U.tweenScroll || {
                        top: h0(L, dt),
                        left: h0(L, Ht),
                    }),
                    (w.tweenTo = Ke = U.tweenScroll[P.p]),
                    (w.scrubDuration = function (j) {
                        ;(or = zl(j) && j),
                            or
                                ? J
                                    ? J.duration(j)
                                    : (J = z.to(i, {
                                          ease: 'expo',
                                          totalProgress: '+=0',
                                          inherit: !1,
                                          duration: or,
                                          paused: !0,
                                          onComplete: function () {
                                              return v && v(w)
                                          },
                                      }))
                                : (J && J.progress(1).kill(), (J = 0))
                    }),
                    i &&
                        ((i.vars.lazy = !1),
                        (i._initted && !w.isReverted) ||
                            (i.vars.immediateRender !== !1 &&
                                r.immediateRender !== !1 &&
                                i.duration() &&
                                i.render(0, !0, !0)),
                        (w.animation = i.pause()),
                        (i.scrollTrigger = w),
                        w.scrubDuration(d),
                        (Bn = 0),
                        s || (s = i.vars.id)),
                    y &&
                        ((!ji(y) || y.push) && (y = { snapTo: y }),
                        'scrollBehavior' in Ee.style &&
                            z.set(Y ? [Ee, Zn] : L, { scrollBehavior: 'auto' }),
                        ne.forEach(function (j) {
                            return (
                                Xt(j) &&
                                j.target ===
                                    (Y ? Ae.scrollingElement || Zn : L) &&
                                (j.smooth = !1)
                            )
                        }),
                        (On = Xt(y.snapTo)
                            ? y.snapTo
                            : y.snapTo === 'labels'
                              ? m2(i)
                              : y.snapTo === 'labelsDirectional'
                                ? v2(i)
                                : y.directional !== !1
                                  ? function (j, X) {
                                        return cp(y.snapTo)(
                                            j,
                                            Rt() - Ce < 500 ? 0 : X.direction,
                                        )
                                    }
                                  : z.utils.snap(y.snapTo)),
                        (fn = y.duration || { min: 0.1, max: 2 }),
                        (fn = ji(fn) ? Jl(fn.min, fn.max) : Jl(fn, fn)),
                        (Zt = z
                            .delayedCall(y.delay || or / 2 || 0.1, function () {
                                var j = he(),
                                    X = Rt() - Ce < 500,
                                    b = Ke.tween
                                if (
                                    (X || Math.abs(w.getVelocity()) < 10) &&
                                    !b &&
                                    !lc &&
                                    le !== j
                                ) {
                                    var H = (j - ie) / Be,
                                        He = i && !I ? i.totalProgress() : H,
                                        ee = X
                                            ? 0
                                            : ((He - Un) / (Rt() - Rl)) * 1e3 ||
                                              0,
                                        je = z.utils.clamp(
                                            -H,
                                            1 - H,
                                            (po(ee / 2) * ee) / 0.185,
                                        ),
                                        rt = H + (y.inertia === !1 ? 0 : je),
                                        Oe,
                                        xe,
                                        pe = y,
                                        B = pe.onStart,
                                        G = pe.onInterrupt,
                                        ce = pe.onComplete
                                    if (
                                        ((Oe = On(rt, w)),
                                        zl(Oe) || (Oe = rt),
                                        (xe = Math.round(ie + Oe * Be)),
                                        j <= Z && j >= ie && xe !== j)
                                    ) {
                                        if (
                                            b &&
                                            !b._initted &&
                                            b.data <= po(xe - j)
                                        )
                                            return
                                        y.inertia === !1 && (je = Oe - H),
                                            Ke(
                                                xe,
                                                {
                                                    duration: fn(
                                                        po(
                                                            (Math.max(
                                                                po(rt - He),
                                                                po(Oe - He),
                                                            ) *
                                                                0.185) /
                                                                ee /
                                                                0.05 || 0,
                                                        ),
                                                    ),
                                                    ease: y.ease || 'power3',
                                                    data: po(xe - j),
                                                    onInterrupt: function () {
                                                        return (
                                                            Zt.restart(!0) &&
                                                            G &&
                                                            G(w)
                                                        )
                                                    },
                                                    onComplete: function () {
                                                        w.update(),
                                                            (le = he()),
                                                            i &&
                                                                (J
                                                                    ? J.resetTo(
                                                                          'totalProgress',
                                                                          Oe,
                                                                          i._tTime /
                                                                              i._tDur,
                                                                      )
                                                                    : i.progress(
                                                                          Oe,
                                                                      )),
                                                            (Bn = Un =
                                                                i && !I
                                                                    ? i.totalProgress()
                                                                    : w.progress),
                                                            m && m(w),
                                                            ce && ce(w)
                                                    },
                                                },
                                                j,
                                                je * Be,
                                                xe - j - je * Be,
                                            ),
                                            B && B(w, Ke.tween)
                                    }
                                } else w.isActive && le !== j && Zt.restart(!0)
                            })
                            .pause())),
                    s && (Rd[s] = w),
                    (f = w.trigger = qt(f || (h !== !0 && h))),
                    (fe = f && f._gsap && f._gsap.stRevert),
                    fe && (fe = fe(w)),
                    (h = h === !0 ? f : qt(h)),
                    pn(a) && (a = { targets: f, className: a }),
                    h &&
                        (g === !1 ||
                            g === Ln ||
                            (g =
                                !g &&
                                h.parentNode &&
                                h.parentNode.style &&
                                Rn(h.parentNode).display === 'flex'
                                    ? !1
                                    : it),
                        (w.pin = h),
                        (Te = z.core.getCache(h)),
                        Te.spacer
                            ? (nr = Te.pinState)
                            : (C &&
                                  ((C = qt(C)),
                                  C &&
                                      !C.nodeType &&
                                      (C = C.current || C.nativeElement),
                                  (Te.spacerIsNative = !!C),
                                  C && (Te.spacerState = Ss(C))),
                              (Te.spacer = nt = C || Ae.createElement('div')),
                              nt.classList.add('pin-spacer'),
                              s && nt.classList.add('pin-spacer-' + s),
                              (Te.pinState = nr = Ss(h))),
                        r.force3D !== !1 && z.set(h, { force3D: !0 }),
                        (w.spacer = nt = Te.spacer),
                        (kr = Rn(h)),
                        (Ur = kr[g + P.os2]),
                        (Re = z.getProperty(h)),
                        (cn = z.quickSetter(h, P.a, ct)),
                        ef(h, nt, kr),
                        (Br = Ss(h))),
                    N)
                ) {
                    ;(Pn = ji(N) ? l0(N, a0) : a0),
                        (E = xs('scroller-start', s, L, P, Pn, 0)),
                        (Ot = xs('scroller-end', s, L, P, Pn, 0, E)),
                        (ir = E['offset' + P.op.d2])
                    var Et = qt(vi(L, 'content') || L)
                    ;(tt = this.markerStart =
                        xs('start', s, Et, P, Pn, ir, 0, S)),
                        (ye = this.markerEnd =
                            xs('end', s, Et, P, Pn, ir, 0, S)),
                        S && (Yn = z.quickSetter([tt, ye], P.a, ct)),
                        !q &&
                            !(wr.length && vi(L, 'fixedMarkers') === !0) &&
                            (p2(Y ? Ee : L),
                            z.set([E, Ot], { force3D: !0 }),
                            (Sr = z.quickSetter(E, P.a, ct)),
                            (Yr = z.quickSetter(Ot, P.a, ct)))
                }
                if (S) {
                    var Q = S.vars.onUpdate,
                        $ = S.vars.onUpdateParams
                    S.eventCallback('onUpdate', function () {
                        w.update(0, 0, 1), Q && Q.apply(S, $ || [])
                    })
                }
                if (
                    ((w.previous = function () {
                        return te[te.indexOf(w) - 1]
                    }),
                    (w.next = function () {
                        return te[te.indexOf(w) + 1]
                    }),
                    (w.revert = function (j, X) {
                        if (!X) return w.kill(!0)
                        var b = j !== !1 || !w.enabled,
                            H = Lt
                        b !== w.isReverted &&
                            (b &&
                                ((we = Math.max(he(), w.scroll.rec || 0)),
                                (ge = w.progress),
                                (Ye = i && i.progress())),
                            tt &&
                                [tt, ye, E, Ot].forEach(function (He) {
                                    return (He.style.display = b
                                        ? 'none'
                                        : 'block')
                                }),
                            b && ((Lt = w), w.update(b)),
                            h &&
                                (!k || !w.isActive) &&
                                (b ? y2(h, nt, nr) : ef(h, nt, Rn(h), Ue)),
                            b || w.update(b),
                            (Lt = H),
                            (w.isReverted = b))
                    }),
                    (w.refresh = function (j, X, b, H) {
                        if (!((Lt || !w.enabled) && !X)) {
                            if (h && j && Fn) {
                                vt(t, 'scrollEnd', Cy)
                                return
                            }
                            !Ut && F && F(w),
                                (Lt = w),
                                Ke.tween &&
                                    !b &&
                                    (Ke.tween.kill(), (Ke.tween = 0)),
                                J && J.pause(),
                                p && i && i.revert({ kill: !1 }).invalidate(),
                                w.isReverted || w.revert(!0, !0),
                                (w._subPinOffset = !1)
                            var He = K(),
                                ee = $e(),
                                je = S ? S.duration() : vr(L, P),
                                rt = Be <= 0.01,
                                Oe = 0,
                                xe = H || 0,
                                pe = ji(b) ? b.end : r.end,
                                B = r.endTrigger || f,
                                G = ji(b)
                                    ? b.start
                                    : r.start ||
                                      (r.start === 0 || !f
                                          ? 0
                                          : h
                                            ? '0 0'
                                            : '0 100%'),
                                ce = (w.pinnedContainer =
                                    r.pinnedContainer &&
                                    qt(r.pinnedContainer, w)),
                                Xe = (f && Math.max(0, te.indexOf(w))) || 0,
                                me = Xe,
                                Ze,
                                pt,
                                Cr,
                                Ba,
                                Dt,
                                ut,
                                lr,
                                ac,
                                dp,
                                fl,
                                ar,
                                dl,
                                Ua
                            for (
                                N &&
                                ji(b) &&
                                ((dl = z.getProperty(E, P.p)),
                                (Ua = z.getProperty(Ot, P.p)));
                                me--;

                            )
                                (ut = te[me]),
                                    ut.end || ut.refresh(0, 1) || (Lt = w),
                                    (lr = ut.pin),
                                    lr &&
                                        (lr === f || lr === h || lr === ce) &&
                                        !ut.isReverted &&
                                        (fl || (fl = []),
                                        fl.unshift(ut),
                                        ut.revert(!0, !0)),
                                    ut !== te[me] && (Xe--, me--)
                            for (
                                Xt(G) && (G = G(w)),
                                    G = n0(G, 'start', w),
                                    ie =
                                        f0(
                                            G,
                                            f,
                                            He,
                                            P,
                                            he(),
                                            tt,
                                            E,
                                            w,
                                            ee,
                                            R,
                                            q,
                                            je,
                                            S,
                                            w._startClamp && '_startClamp',
                                        ) || (h ? -0.001 : 0),
                                    Xt(pe) && (pe = pe(w)),
                                    pn(pe) &&
                                        !pe.indexOf('+=') &&
                                        (~pe.indexOf(' ')
                                            ? (pe =
                                                  (pn(G)
                                                      ? G.split(' ')[0]
                                                      : '') + pe)
                                            : ((Oe = Bs(pe.substr(2), He)),
                                              (pe = pn(G)
                                                  ? G
                                                  : (S
                                                        ? z.utils.mapRange(
                                                              0,
                                                              S.duration(),
                                                              S.scrollTrigger
                                                                  .start,
                                                              S.scrollTrigger
                                                                  .end,
                                                              ie,
                                                          )
                                                        : ie) + Oe),
                                              (B = f))),
                                    pe = n0(pe, 'end', w),
                                    Z =
                                        Math.max(
                                            ie,
                                            f0(
                                                pe || (B ? '100% 0' : je),
                                                B,
                                                He,
                                                P,
                                                he() + Oe,
                                                ye,
                                                Ot,
                                                w,
                                                ee,
                                                R,
                                                q,
                                                je,
                                                S,
                                                w._endClamp && '_endClamp',
                                            ),
                                        ) || -0.001,
                                    Oe = 0,
                                    me = Xe;
                                me--;

                            )
                                (ut = te[me]),
                                    (lr = ut.pin),
                                    lr &&
                                        ut.start - ut._pinPush <= ie &&
                                        !S &&
                                        ut.end > 0 &&
                                        ((Ze =
                                            ut.end -
                                            (w._startClamp
                                                ? Math.max(0, ut.start)
                                                : ut.start)),
                                        ((lr === f &&
                                            ut.start - ut._pinPush < ie) ||
                                            lr === ce) &&
                                            isNaN(G) &&
                                            (Oe += Ze * (1 - ut.progress)),
                                        lr === h && (xe += Ze))
                            if (
                                ((ie += Oe),
                                (Z += Oe),
                                w._startClamp && (w._startClamp += Oe),
                                w._endClamp &&
                                    !Ut &&
                                    ((w._endClamp = Z || -0.001),
                                    (Z = Math.min(Z, vr(L, P)))),
                                (Be = Z - ie || ((ie -= 0.01) && 0.001)),
                                rt &&
                                    (ge = z.utils.clamp(
                                        0,
                                        1,
                                        z.utils.normalize(ie, Z, we),
                                    )),
                                (w._pinPush = xe),
                                tt &&
                                    Oe &&
                                    ((Ze = {}),
                                    (Ze[P.a] = '+=' + Oe),
                                    ce && (Ze[P.p] = '-=' + he()),
                                    z.set([tt, ye], Ze)),
                                h && !(Ld && w.end >= vr(L, P)))
                            )
                                (Ze = Rn(h)),
                                    (Ba = P === dt),
                                    (Cr = he()),
                                    (Pt = parseFloat(Re(P.a)) + xe),
                                    !je &&
                                        Z > 1 &&
                                        ((ar = (
                                            Y ? Ae.scrollingElement || Zn : L
                                        ).style),
                                        (ar = {
                                            style: ar,
                                            value: ar[
                                                'overflow' + P.a.toUpperCase()
                                            ],
                                        }),
                                        Y &&
                                            Rn(Ee)[
                                                'overflow' + P.a.toUpperCase()
                                            ] !== 'scroll' &&
                                            (ar.style[
                                                'overflow' + P.a.toUpperCase()
                                            ] = 'scroll')),
                                    ef(h, nt, Ze),
                                    (Br = Ss(h)),
                                    (pt = Dr(h, !0)),
                                    (ac = q && xi(L, Ba ? Ht : dt)()),
                                    g
                                        ? ((Ue = [g + P.os2, Be + xe + ct]),
                                          (Ue.t = nt),
                                          (me =
                                              g === it
                                                  ? Lu(h, P) + Be + xe
                                                  : 0),
                                          me &&
                                              (Ue.push(P.d, me + ct),
                                              nt.style.flexBasis !== 'auto' &&
                                                  (nt.style.flexBasis =
                                                      me + ct)),
                                          Ho(Ue),
                                          ce &&
                                              te.forEach(function (hl) {
                                                  hl.pin === ce &&
                                                      hl.vars.pinSpacing !==
                                                          !1 &&
                                                      (hl._subPinOffset = !0)
                                              }),
                                          q && he(we))
                                        : ((me = Lu(h, P)),
                                          me &&
                                              nt.style.flexBasis !== 'auto' &&
                                              (nt.style.flexBasis = me + ct)),
                                    q &&
                                        ((Dt = {
                                            top:
                                                pt.top +
                                                (Ba ? Cr - ie : ac) +
                                                ct,
                                            left:
                                                pt.left +
                                                (Ba ? ac : Cr - ie) +
                                                ct,
                                            boxSizing: 'border-box',
                                            position: 'fixed',
                                        }),
                                        (Dt[Xi] = Dt['max' + ol] =
                                            Math.ceil(pt.width) + ct),
                                        (Dt[Gi] = Dt['max' + up] =
                                            Math.ceil(pt.height) + ct),
                                        (Dt[Ln] =
                                            Dt[Ln + na] =
                                            Dt[Ln + ea] =
                                            Dt[Ln + ra] =
                                            Dt[Ln + ta] =
                                                '0'),
                                        (Dt[it] = Ze[it]),
                                        (Dt[it + na] = Ze[it + na]),
                                        (Dt[it + ea] = Ze[it + ea]),
                                        (Dt[it + ra] = Ze[it + ra]),
                                        (Dt[it + ta] = Ze[it + ta]),
                                        (rr = x2(nr, Dt, k)),
                                        Ut && he(0)),
                                    i
                                        ? ((dp = i._initted),
                                          Qc(1),
                                          i.render(i.duration(), !0, !0),
                                          (En = Re(P.a) - Pt + Be + xe),
                                          ($n = Math.abs(Be - En) > 1),
                                          q &&
                                              $n &&
                                              rr.splice(rr.length - 2, 2),
                                          i.render(0, !0, !0),
                                          dp || i.invalidate(!0),
                                          i.parent ||
                                              i.totalTime(i.totalTime()),
                                          Qc(0))
                                        : (En = Be),
                                    ar &&
                                        (ar.value
                                            ? (ar.style[
                                                  'overflow' + P.a.toUpperCase()
                                              ] = ar.value)
                                            : ar.style.removeProperty(
                                                  'overflow-' + P.a,
                                              ))
                            else if (f && he() && !S)
                                for (pt = f.parentNode; pt && pt !== Ee; )
                                    pt._pinOffset &&
                                        ((ie -= pt._pinOffset),
                                        (Z -= pt._pinOffset)),
                                        (pt = pt.parentNode)
                            fl &&
                                fl.forEach(function (hl) {
                                    return hl.revert(!1, !0)
                                }),
                                (w.start = ie),
                                (w.end = Z),
                                (st = Tt = Ut ? we : he()),
                                !S &&
                                    !Ut &&
                                    (st < we && he(we), (w.scroll.rec = 0)),
                                w.revert(!1, !0),
                                (Ce = Rt()),
                                Zt && ((le = -1), Zt.restart(!0)),
                                (Lt = 0),
                                i &&
                                    I &&
                                    (i._initted || Ye) &&
                                    i.progress() !== Ye &&
                                    i
                                        .progress(Ye || 0, !0)
                                        .render(i.time(), !0, !0),
                                (rt || ge !== w.progress || S || p) &&
                                    (i &&
                                        !I &&
                                        i.totalProgress(
                                            S && ie < -0.001 && !ge
                                                ? z.utils.normalize(ie, Z, 0)
                                                : ge,
                                            !0,
                                        ),
                                    (w.progress =
                                        rt || (st - ie) / Be === ge ? 0 : ge)),
                                h &&
                                    g &&
                                    (nt._pinOffset = Math.round(
                                        w.progress * En,
                                    )),
                                J && J.invalidate(),
                                isNaN(dl) ||
                                    ((dl -= z.getProperty(E, P.p)),
                                    (Ua -= z.getProperty(Ot, P.p)),
                                    ks(E, P, dl),
                                    ks(tt, P, dl - (H || 0)),
                                    ks(Ot, P, Ua),
                                    ks(ye, P, Ua - (H || 0))),
                                rt && !Ut && w.update(),
                                c && !Ut && !tr && ((tr = !0), c(w), (tr = !1))
                        }
                    }),
                    (w.getVelocity = function () {
                        return ((he() - Tt) / (Rt() - Rl)) * 1e3 || 0
                    }),
                    (w.endAnimation = function () {
                        Tl(w.callbackAnimation),
                            i &&
                                (J
                                    ? J.progress(1)
                                    : i.paused()
                                      ? I || Tl(i, w.direction < 0, 1)
                                      : Tl(i, i.reversed()))
                    }),
                    (w.labelToScroll = function (j) {
                        return (
                            (i &&
                                i.labels &&
                                (ie || w.refresh() || ie) +
                                    (i.labels[j] / i.duration()) * Be) ||
                            0
                        )
                    }),
                    (w.getTrailing = function (j) {
                        var X = te.indexOf(w),
                            b =
                                w.direction > 0
                                    ? te.slice(0, X).reverse()
                                    : te.slice(X + 1)
                        return (
                            pn(j)
                                ? b.filter(function (H) {
                                      return H.vars.preventOverlaps === j
                                  })
                                : b
                        ).filter(function (H) {
                            return w.direction > 0 ? H.end <= ie : H.start >= Z
                        })
                    }),
                    (w.update = function (j, X, b) {
                        if (!(S && !b && !j)) {
                            var H = Ut === !0 ? we : w.scroll(),
                                He = j ? 0 : (H - ie) / Be,
                                ee = He < 0 ? 0 : He > 1 ? 1 : He || 0,
                                je = w.progress,
                                rt,
                                Oe,
                                xe,
                                pe,
                                B,
                                G,
                                ce,
                                Xe
                            if (
                                (X &&
                                    ((Tt = st),
                                    (st = S ? he() : H),
                                    y &&
                                        ((Un = Bn),
                                        (Bn =
                                            i && !I ? i.totalProgress() : ee))),
                                x &&
                                    h &&
                                    !Lt &&
                                    !vs &&
                                    Fn &&
                                    (!ee &&
                                    ie < H + ((H - Tt) / (Rt() - Rl)) * x
                                        ? (ee = 1e-4)
                                        : ee === 1 &&
                                          Z >
                                              H +
                                                  ((H - Tt) / (Rt() - Rl)) *
                                                      x &&
                                          (ee = 0.9999)),
                                ee !== je && w.enabled)
                            ) {
                                if (
                                    ((rt = w.isActive = !!ee && ee < 1),
                                    (Oe = !!je && je < 1),
                                    (G = rt !== Oe),
                                    (B = G || !!ee != !!je),
                                    (w.direction = ee > je ? 1 : -1),
                                    (w.progress = ee),
                                    B &&
                                        !Lt &&
                                        ((xe =
                                            ee && !je
                                                ? 0
                                                : ee === 1
                                                  ? 1
                                                  : je === 1
                                                    ? 2
                                                    : 3),
                                        I &&
                                            ((pe =
                                                (!G &&
                                                    V[xe + 1] !== 'none' &&
                                                    V[xe + 1]) ||
                                                V[xe]),
                                            (Xe =
                                                i &&
                                                (pe === 'complete' ||
                                                    pe === 'reset' ||
                                                    pe in i)))),
                                    D &&
                                        (G || Xe) &&
                                        (Xe || d || !i) &&
                                        (Xt(D)
                                            ? D(w)
                                            : w
                                                  .getTrailing(D)
                                                  .forEach(function (Cr) {
                                                      return Cr.endAnimation()
                                                  })),
                                    I ||
                                        (J && !Lt && !vs
                                            ? (J._dp._time - J._start !==
                                                  J._time &&
                                                  J.render(
                                                      J._dp._time - J._start,
                                                  ),
                                              J.resetTo
                                                  ? J.resetTo(
                                                        'totalProgress',
                                                        ee,
                                                        i._tTime / i._tDur,
                                                    )
                                                  : ((J.vars.totalProgress =
                                                        ee),
                                                    J.invalidate().restart()))
                                            : i &&
                                              i.totalProgress(
                                                  ee,
                                                  !!(Lt && (Ce || j)),
                                              )),
                                    h)
                                ) {
                                    if (
                                        (j && g && (nt.style[g + P.os2] = Ur),
                                        !q)
                                    )
                                        cn(Al(Pt + En * ee))
                                    else if (B) {
                                        if (
                                            ((ce =
                                                !j &&
                                                ee > je &&
                                                Z + 1 > H &&
                                                H + 1 >= vr(L, P)),
                                            k)
                                        )
                                            if (!j && (rt || ce)) {
                                                var me = Dr(h, !0),
                                                    Ze = H - ie
                                                d0(
                                                    h,
                                                    Ee,
                                                    me.top +
                                                        (P === dt ? Ze : 0) +
                                                        ct,
                                                    me.left +
                                                        (P === dt ? 0 : Ze) +
                                                        ct,
                                                )
                                            } else d0(h, nt)
                                        Ho(rt || ce ? rr : Br),
                                            ($n && ee < 1 && rt) ||
                                                cn(
                                                    Pt +
                                                        (ee === 1 && !ce
                                                            ? En
                                                            : 0),
                                                )
                                    }
                                }
                                y && !Ke.tween && !Lt && !vs && Zt.restart(!0),
                                    a &&
                                        (G || (_ && ee && (ee < 1 || !Kc))) &&
                                        Ma(a.targets).forEach(function (Cr) {
                                            return Cr.classList[
                                                rt || _ ? 'add' : 'remove'
                                            ](a.className)
                                        }),
                                    l && !I && !j && l(w),
                                    B && !Lt
                                        ? (I &&
                                              (Xe &&
                                                  (pe === 'complete'
                                                      ? i
                                                            .pause()
                                                            .totalProgress(1)
                                                      : pe === 'reset'
                                                        ? i.restart(!0).pause()
                                                        : pe === 'restart'
                                                          ? i.restart(!0)
                                                          : i[pe]()),
                                              l && l(w)),
                                          (G || !Kc) &&
                                              (u && G && qc(w, u),
                                              W[xe] && qc(w, W[xe]),
                                              _ &&
                                                  (ee === 1
                                                      ? w.kill(!1, 1)
                                                      : (W[xe] = 0)),
                                              G ||
                                                  ((xe = ee === 1 ? 1 : 3),
                                                  W[xe] && qc(w, W[xe]))),
                                          T &&
                                              !rt &&
                                              Math.abs(w.getVelocity()) >
                                                  (zl(T) ? T : 2500) &&
                                              (Tl(w.callbackAnimation),
                                              J
                                                  ? J.progress(1)
                                                  : Tl(
                                                        i,
                                                        pe === 'reverse'
                                                            ? 1
                                                            : !ee,
                                                        1,
                                                    )))
                                        : I && l && !Lt && l(w)
                            }
                            if (Yr) {
                                var pt = S
                                    ? (H / S.duration()) *
                                      (S._caScrollDist || 0)
                                    : H
                                Sr(pt + (E._isFlipped ? 1 : 0)), Yr(pt)
                            }
                            Yn &&
                                Yn((-H / S.duration()) * (S._caScrollDist || 0))
                        }
                    }),
                    (w.enable = function (j, X) {
                        w.enabled ||
                            ((w.enabled = !0),
                            vt(L, 'resize', Il),
                            Y || vt(L, 'scroll', mo),
                            F && vt(t, 'refreshInit', F),
                            j !== !1 &&
                                ((w.progress = ge = 0), (st = Tt = le = he())),
                            X !== !1 && w.refresh())
                    }),
                    (w.getTween = function (j) {
                        return j && Ke ? Ke.tween : J
                    }),
                    (w.setPositions = function (j, X, b, H) {
                        if (S) {
                            var He = S.scrollTrigger,
                                ee = S.duration(),
                                je = He.end - He.start
                            ;(j = He.start + (je * j) / ee),
                                (X = He.start + (je * X) / ee)
                        }
                        w.refresh(
                            !1,
                            !1,
                            {
                                start: r0(j, b && !!w._startClamp),
                                end: r0(X, b && !!w._endClamp),
                            },
                            H,
                        ),
                            w.update()
                    }),
                    (w.adjustPinSpacing = function (j) {
                        if (Ue && j) {
                            var X = Ue.indexOf(P.d) + 1
                            ;(Ue[X] = parseFloat(Ue[X]) + j + ct),
                                (Ue[1] = parseFloat(Ue[1]) + j + ct),
                                Ho(Ue)
                        }
                    }),
                    (w.disable = function (j, X) {
                        if (
                            w.enabled &&
                            (j !== !1 && w.revert(!0, !0),
                            (w.enabled = w.isActive = !1),
                            X || (J && J.pause()),
                            (we = 0),
                            Te && (Te.uncache = 1),
                            F && mt(t, 'refreshInit', F),
                            Zt &&
                                (Zt.pause(),
                                Ke.tween && Ke.tween.kill() && (Ke.tween = 0)),
                            !Y)
                        ) {
                            for (var b = te.length; b--; )
                                if (te[b].scroller === L && te[b] !== w) return
                            mt(L, 'resize', Il), Y || mt(L, 'scroll', mo)
                        }
                    }),
                    (w.kill = function (j, X) {
                        w.disable(j, X), J && !X && J.kill(), s && delete Rd[s]
                        var b = te.indexOf(w)
                        b >= 0 && te.splice(b, 1),
                            b === Bt && Ys > 0 && Bt--,
                            (b = 0),
                            te.forEach(function (H) {
                                return H.scroller === w.scroller && (b = 1)
                            }),
                            b || Ut || (w.scroll.rec = 0),
                            i &&
                                ((i.scrollTrigger = null),
                                j && i.revert({ kill: !1 }),
                                X || i.kill()),
                            tt &&
                                [tt, ye, E, Ot].forEach(function (H) {
                                    return (
                                        H.parentNode &&
                                        H.parentNode.removeChild(H)
                                    )
                                }),
                            ia === w && (ia = 0),
                            h &&
                                (Te && (Te.uncache = 1),
                                (b = 0),
                                te.forEach(function (H) {
                                    return H.pin === h && b++
                                }),
                                b || (Te.spacer = 0)),
                            r.onKill && r.onKill(w)
                    }),
                    te.push(w),
                    w.enable(!1, !1),
                    fe && fe(w),
                    i && i.add && !Be)
                ) {
                    var ue = w.update
                    ;(w.update = function () {
                        ;(w.update = ue), ie || Z || w.refresh()
                    }),
                        z.delayedCall(0.01, w.update),
                        (Be = 0.01),
                        (ie = Z = 0)
                } else w.refresh()
                h && _2()
            }),
            (t.register = function (r) {
                return (
                    vo ||
                        ((z = r || _y()),
                        gy() && window.document && t.enable(),
                        (vo = jl)),
                    vo
                )
            }),
            (t.defaults = function (r) {
                if (r) for (var i in r) ws[i] = r[i]
                return ws
            }),
            (t.disable = function (r, i) {
                ;(jl = 0),
                    te.forEach(function (l) {
                        return l[i ? 'kill' : 'disable'](r)
                    }),
                    mt(ae, 'wheel', mo),
                    mt(Ae, 'scroll', mo),
                    clearInterval(ms),
                    mt(Ae, 'touchcancel', dr),
                    mt(Ee, 'touchstart', dr),
                    _s(mt, Ae, 'pointerdown,touchstart,mousedown', i0),
                    _s(mt, Ae, 'pointerup,touchend,mouseup', o0),
                    Nu.kill(),
                    gs(mt)
                for (var o = 0; o < ne.length; o += 3)
                    ys(mt, ne[o], ne[o + 1]), ys(mt, ne[o], ne[o + 2])
            }),
            (t.enable = function () {
                if (
                    ((ae = window),
                    (Ae = document),
                    (Zn = Ae.documentElement),
                    (Ee = Ae.body),
                    z &&
                        ((Ma = z.utils.toArray),
                        (Jl = z.utils.clamp),
                        (Md = z.core.context || dr),
                        (Qc = z.core.suppressOverwrites || dr),
                        (op = ae.history.scrollRestoration || 'auto'),
                        (jd = ae.pageYOffset),
                        z.core.globals('ScrollTrigger', t),
                        Ee))
                ) {
                    ;(jl = 1),
                        (Yo = document.createElement('div')),
                        (Yo.style.height = '100vh'),
                        (Yo.style.position = 'absolute'),
                        Py(),
                        f2(),
                        et.register(z),
                        (t.isTouch = et.isTouch),
                        (Xr =
                            et.isTouch &&
                            /(iPad|iPhone|iPod|Mac)/g.test(
                                navigator.userAgent,
                            )),
                        (Nd = et.isTouch === 1),
                        vt(ae, 'wheel', mo),
                        (dy = [ae, Ae, Zn, Ee]),
                        z.matchMedia
                            ? ((t.matchMedia = function (s) {
                                  var u = z.matchMedia(),
                                      c
                                  for (c in s) u.add(c, s[c])
                                  return u
                              }),
                              z.addEventListener('matchMediaInit', function () {
                                  return fp()
                              }),
                              z.addEventListener(
                                  'matchMediaRevert',
                                  function () {
                                      return Ty()
                                  },
                              ),
                              z.addEventListener('matchMedia', function () {
                                  bi(0, 1), oo('matchMedia')
                              }),
                              z.matchMedia(
                                  '(orientation: portrait)',
                                  function () {
                                      return Jc(), Jc
                                  },
                              ))
                            : console.warn('Requires GSAP 3.11.0 or later'),
                        Jc(),
                        vt(Ae, 'scroll', mo)
                    var r = Ee.style,
                        i = r.borderTopStyle,
                        o = z.core.Animation.prototype,
                        l,
                        a
                    for (
                        o.revert ||
                            Object.defineProperty(o, 'revert', {
                                value: function () {
                                    return this.time(-0.01, !0)
                                },
                            }),
                            r.borderTopStyle = 'solid',
                            l = Dr(Ee),
                            dt.m = Math.round(l.top + dt.sc()) || 0,
                            Ht.m = Math.round(l.left + Ht.sc()) || 0,
                            i
                                ? (r.borderTopStyle = i)
                                : r.removeProperty('border-top-style'),
                            ms = setInterval(s0, 250),
                            z.delayedCall(0.5, function () {
                                return (vs = 0)
                            }),
                            vt(Ae, 'touchcancel', dr),
                            vt(Ee, 'touchstart', dr),
                            _s(vt, Ae, 'pointerdown,touchstart,mousedown', i0),
                            _s(vt, Ae, 'pointerup,touchend,mouseup', o0),
                            Dd = z.utils.checkPrefix('transform'),
                            Hs.push(Dd),
                            vo = Rt(),
                            Nu = z.delayedCall(0.2, bi).pause(),
                            go = [
                                Ae,
                                'visibilitychange',
                                function () {
                                    var s = ae.innerWidth,
                                        u = ae.innerHeight
                                    Ae.hidden
                                        ? ((e0 = s), (t0 = u))
                                        : (e0 !== s || t0 !== u) && Il()
                                },
                                Ae,
                                'DOMContentLoaded',
                                bi,
                                ae,
                                'load',
                                bi,
                                ae,
                                'resize',
                                Il,
                            ],
                            gs(vt),
                            te.forEach(function (s) {
                                return s.enable(0, 1)
                            }),
                            a = 0;
                        a < ne.length;
                        a += 3
                    )
                        ys(mt, ne[a], ne[a + 1]), ys(mt, ne[a], ne[a + 2])
                }
            }),
            (t.config = function (r) {
                'limitCallbacks' in r && (Kc = !!r.limitCallbacks)
                var i = r.syncInterval
                ;(i && clearInterval(ms)) || ((ms = i) && setInterval(s0, i)),
                    'ignoreMobileResize' in r &&
                        (Nd = t.isTouch === 1 && r.ignoreMobileResize),
                    'autoRefreshEvents' in r &&
                        (gs(mt) || gs(vt, r.autoRefreshEvents || 'none'),
                        (py =
                            (r.autoRefreshEvents + '').indexOf('resize') ===
                            -1))
            }),
            (t.scrollerProxy = function (r, i) {
                var o = qt(r),
                    l = ne.indexOf(o),
                    a = ro(o)
                ~l && ne.splice(l, a ? 6 : 2),
                    i &&
                        (a ? wr.unshift(ae, i, Ee, i, Zn, i) : wr.unshift(o, i))
            }),
            (t.clearMatchMedia = function (r) {
                te.forEach(function (i) {
                    return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
                })
            }),
            (t.isInViewport = function (r, i, o) {
                var l = (pn(r) ? qt(r) : r).getBoundingClientRect(),
                    a = l[o ? Xi : Gi] * i || 0
                return o
                    ? l.right - a > 0 && l.left + a < ae.innerWidth
                    : l.bottom - a > 0 && l.top + a < ae.innerHeight
            }),
            (t.positionInViewport = function (r, i, o) {
                pn(r) && (r = qt(r))
                var l = r.getBoundingClientRect(),
                    a = l[o ? Xi : Gi],
                    s =
                        i == null
                            ? a / 2
                            : i in Ru
                              ? Ru[i] * a
                              : ~i.indexOf('%')
                                ? (parseFloat(i) * a) / 100
                                : parseFloat(i) || 0
                return o
                    ? (l.left + s) / ae.innerWidth
                    : (l.top + s) / ae.innerHeight
            }),
            (t.killAll = function (r) {
                if (
                    (te.slice(0).forEach(function (o) {
                        return o.vars.id !== 'ScrollSmoother' && o.kill()
                    }),
                    r !== !0)
                ) {
                    var i = io.killAll || []
                    ;(io = {}),
                        i.forEach(function (o) {
                            return o()
                        })
                }
            }),
            t
        )
    })()
oe.version = '3.12.5'
oe.saveStyles = function (t) {
    return t
        ? Ma(t).forEach(function (e) {
              if (e && e.style) {
                  var n = dn.indexOf(e)
                  n >= 0 && dn.splice(n, 5),
                      dn.push(
                          e,
                          e.style.cssText,
                          e.getBBox && e.getAttribute('transform'),
                          z.core.getCache(e),
                          Md(),
                      )
              }
          })
        : dn
}
oe.revert = function (t, e) {
    return fp(!t, e)
}
oe.create = function (t, e) {
    return new oe(t, e)
}
oe.refresh = function (t) {
    return t ? Il() : (vo || oe.register()) && bi(!0)
}
oe.update = function (t) {
    return ++ne.cache && jr(t === !0 ? 2 : 0)
}
oe.clearScrollMemory = Oy
oe.maxScroll = function (t, e) {
    return vr(t, e ? Ht : dt)
}
oe.getScrollFunc = function (t, e) {
    return xi(qt(t), e ? Ht : dt)
}
oe.getById = function (t) {
    return Rd[t]
}
oe.getAll = function () {
    return te.filter(function (t) {
        return t.vars.id !== 'ScrollSmoother'
    })
}
oe.isScrolling = function () {
    return !!Fn
}
oe.snapDirectional = cp
oe.addEventListener = function (t, e) {
    var n = io[t] || (io[t] = [])
    ~n.indexOf(e) || n.push(e)
}
oe.removeEventListener = function (t, e) {
    var n = io[t],
        r = n && n.indexOf(e)
    r >= 0 && n.splice(r, 1)
}
oe.batch = function (t, e) {
    var n = [],
        r = {},
        i = e.interval || 0.016,
        o = e.batchMax || 1e9,
        l = function (u, c) {
            var d = [],
                f = [],
                h = z
                    .delayedCall(i, function () {
                        c(d, f), (d = []), (f = [])
                    })
                    .pause()
            return function (g) {
                d.length || h.restart(!0),
                    d.push(g.trigger),
                    f.push(g),
                    o <= d.length && h.progress(1)
            }
        },
        a
    for (a in e)
        r[a] =
            a.substr(0, 2) === 'on' && Xt(e[a]) && a !== 'onRefreshInit'
                ? l(a, e[a])
                : e[a]
    return (
        Xt(o) &&
            ((o = o()),
            vt(oe, 'refresh', function () {
                return (o = e.batchMax())
            })),
        Ma(t).forEach(function (s) {
            var u = {}
            for (a in r) u[a] = r[a]
            ;(u.trigger = s), n.push(oe.create(u))
        }),
        n
    )
}
var p0 = function (e, n, r, i) {
        return (
            n > i ? e(i) : n < 0 && e(0),
            r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
        )
    },
    tf = function t(e, n) {
        n === !0
            ? e.style.removeProperty('touch-action')
            : (e.style.touchAction =
                  n === !0
                      ? 'auto'
                      : n
                        ? 'pan-' + n + (et.isTouch ? ' pinch-zoom' : '')
                        : 'none'),
            e === Zn && t(Ee, n)
    },
    Cs = { auto: 1, scroll: 1 },
    k2 = function (e) {
        var n = e.event,
            r = e.target,
            i = e.axis,
            o = (n.changedTouches ? n.changedTouches[0] : n).target,
            l = o._gsap || z.core.getCache(o),
            a = Rt(),
            s
        if (!l._isScrollT || a - l._isScrollT > 2e3) {
            for (
                ;
                o &&
                o !== Ee &&
                ((o.scrollHeight <= o.clientHeight &&
                    o.scrollWidth <= o.clientWidth) ||
                    !(Cs[(s = Rn(o)).overflowY] || Cs[s.overflowX]));

            )
                o = o.parentNode
            ;(l._isScroll =
                o &&
                o !== r &&
                !ro(o) &&
                (Cs[(s = Rn(o)).overflowY] || Cs[s.overflowX])),
                (l._isScrollT = a)
        }
        ;(l._isScroll || i === 'x') &&
            (n.stopPropagation(), (n._gsapAllow = !0))
    },
    Dy = function (e, n, r, i) {
        return et.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: n,
            onWheel: (i = i && k2),
            onPress: i,
            onDrag: i,
            onScroll: i,
            onEnable: function () {
                return r && vt(Ae, et.eventTypes[0], v0, !1, !0)
            },
            onDisable: function () {
                return mt(Ae, et.eventTypes[0], v0, !0)
            },
        })
    },
    C2 = /(input|label|select|textarea)/i,
    m0,
    v0 = function (e) {
        var n = C2.test(e.target.tagName)
        ;(n || m0) && ((e._gsapAllow = !0), (m0 = n))
    },
    T2 = function (e) {
        ji(e) || (e = {}),
            (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
            e.type || (e.type = 'wheel,touch'),
            (e.debounce = !!e.debounce),
            (e.id = e.id || 'normalizer')
        var n = e,
            r = n.normalizeScrollX,
            i = n.momentum,
            o = n.allowNestedScroll,
            l = n.onRelease,
            a,
            s,
            u = qt(e.target) || Zn,
            c = z.core.globals().ScrollSmoother,
            d = c && c.get(),
            f =
                Xr &&
                ((e.content && qt(e.content)) ||
                    (d && e.content !== !1 && !d.smooth() && d.content())),
            h = xi(u, dt),
            g = xi(u, Ht),
            p = 1,
            x =
                (et.isTouch && ae.visualViewport
                    ? ae.visualViewport.scale * ae.visualViewport.width
                    : ae.outerWidth) / ae.innerWidth,
            v = 0,
            m = Xt(i)
                ? function () {
                      return i(a)
                  }
                : function () {
                      return i || 2.8
                  },
            _,
            y,
            k = Dy(u, e.type, !0, o),
            C = function () {
                return (y = !1)
            },
            S = dr,
            T = dr,
            D = function () {
                ;(s = vr(u, dt)),
                    (T = Jl(Xr ? 1 : 0, s)),
                    r && (S = Jl(0, vr(u, Ht))),
                    (_ = Qi)
            },
            P = function () {
                ;(f._gsap.y = Al(parseFloat(f._gsap.y) + h.offset) + 'px'),
                    (f.style.transform =
                        'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                        parseFloat(f._gsap.y) +
                        ', 0, 1)'),
                    (h.offset = h.cacheID = 0)
            },
            I = function () {
                if (y) {
                    requestAnimationFrame(C)
                    var N = Al(a.deltaY / 2),
                        R = T(h.v - N)
                    if (f && R !== h.v + h.offset) {
                        h.offset = R - h.v
                        var w = Al((parseFloat(f && f._gsap.y) || 0) - h.offset)
                        ;(f.style.transform =
                            'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                            w +
                            ', 0, 1)'),
                            (f._gsap.y = w + 'px'),
                            (h.cacheID = ne.cache),
                            jr()
                    }
                    return !0
                }
                h.offset && P(), (y = !0)
            },
            L,
            U,
            Y,
            q,
            W = function () {
                D(),
                    L.isActive() &&
                        L.vars.scrollY > s &&
                        (h() > s
                            ? L.progress(1) && h(s)
                            : L.resetTo('scrollY', s))
            }
        return (
            f && z.set(f, { y: '+=0' }),
            (e.ignoreCheck = function (V) {
                return (
                    (Xr && V.type === 'touchmove' && I()) ||
                    (p > 1.05 && V.type !== 'touchstart') ||
                    a.isGesturing ||
                    (V.touches && V.touches.length > 1)
                )
            }),
            (e.onPress = function () {
                y = !1
                var V = p
                ;(p = Al(
                    ((ae.visualViewport && ae.visualViewport.scale) || 1) / x,
                )),
                    L.pause(),
                    V !== p && tf(u, p > 1.01 ? !0 : r ? !1 : 'x'),
                    (U = g()),
                    (Y = h()),
                    D(),
                    (_ = Qi)
            }),
            (e.onRelease = e.onGestureStart =
                function (V, N) {
                    if ((h.offset && P(), !N)) q.restart(!0)
                    else {
                        ne.cache++
                        var R = m(),
                            w,
                            F
                        r &&
                            ((w = g()),
                            (F = w + (R * 0.05 * -V.velocityX) / 0.227),
                            (R *= p0(g, w, F, vr(u, Ht))),
                            (L.vars.scrollX = S(F))),
                            (w = h()),
                            (F = w + (R * 0.05 * -V.velocityY) / 0.227),
                            (R *= p0(h, w, F, vr(u, dt))),
                            (L.vars.scrollY = T(F)),
                            L.invalidate().duration(R).play(0.01),
                            ((Xr && L.vars.scrollY >= s) || w >= s - 1) &&
                                z.to({}, { onUpdate: W, duration: R })
                    }
                    l && l(V)
                }),
            (e.onWheel = function () {
                L._ts && L.pause(), Rt() - v > 1e3 && ((_ = 0), (v = Rt()))
            }),
            (e.onChange = function (V, N, R, w, F) {
                if (
                    (Qi !== _ && D(),
                    N &&
                        r &&
                        g(
                            S(
                                w[2] === N
                                    ? U + (V.startX - V.x)
                                    : g() + N - w[1],
                            ),
                        ),
                    R)
                ) {
                    h.offset && P()
                    var K = F[2] === R,
                        $e = K ? Y + V.startY - V.y : h() + R - F[1],
                        le = T($e)
                    K && $e !== le && (Y += le - $e), h(le)
                }
                ;(R || N) && jr()
            }),
            (e.onEnable = function () {
                tf(u, r ? !1 : 'x'),
                    oe.addEventListener('refresh', W),
                    vt(ae, 'resize', W),
                    h.smooth &&
                        ((h.target.style.scrollBehavior = 'auto'),
                        (h.smooth = g.smooth = !1)),
                    k.enable()
            }),
            (e.onDisable = function () {
                tf(u, !0),
                    mt(ae, 'resize', W),
                    oe.removeEventListener('refresh', W),
                    k.kill()
            }),
            (e.lockAxis = e.lockAxis !== !1),
            (a = new et(e)),
            (a.iOS = Xr),
            Xr && !h() && h(1),
            Xr && z.ticker.add(dr),
            (q = a._dc),
            (L = z.to(a, {
                ease: 'power4',
                paused: !0,
                inherit: !1,
                scrollX: r ? '+=0.1' : '+=0',
                scrollY: '+=0.1',
                modifiers: {
                    scrollY: Ey(h, h(), function () {
                        return L.pause()
                    }),
                },
                onUpdate: jr,
                onComplete: q.vars.onComplete,
            })),
            a
        )
    }
oe.sort = function (t) {
    return te.sort(
        t ||
            function (e, n) {
                return (
                    (e.vars.refreshPriority || 0) * -1e6 +
                    e.start -
                    (n.start + (n.vars.refreshPriority || 0) * -1e6)
                )
            },
    )
}
oe.observe = function (t) {
    return new et(t)
}
oe.normalizeScroll = function (t) {
    if (typeof t > 'u') return Vt
    if (t === !0 && Vt) return Vt.enable()
    if (t === !1) {
        Vt && Vt.kill(), (Vt = t)
        return
    }
    var e = t instanceof et ? t : T2(t)
    return (
        Vt && Vt.target === e.target && Vt.kill(), ro(e.target) && (Vt = e), e
    )
}
oe.core = {
    _getVelocityProp: Ed,
    _inputObserver: Dy,
    _scrollers: ne,
    _proxies: wr,
    bridge: {
        ss: function () {
            Fn || oo('scrollStart'), (Fn = Rt())
        },
        ref: function () {
            return Lt
        },
    },
}
_y() && z.registerPlugin(oe)
function O2(t) {
    return Lg({
        tag: 'svg',
        attr: { viewBox: '0 0 256 256', fill: 'currentColor' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M221.36,35.07a14,14,0,0,0-15.26,3l-.29.3L187.42,59.58a109.16,109.16,0,0,0-118.84,0L50.19,38.41l-.29-.3A14,14,0,0,0,26,48v88c0,51.83,45.76,94,102,94s102-42.17,102-94V48A14,14,0,0,0,221.36,35.07ZM218,136c0,43.38-37.16,79-84,81.81V194.48l14.24-14.24a6,6,0,0,0-8.48-8.49L128,183.51l-11.76-11.76a6,6,0,0,0-8.48,8.49L122,194.48v23.33C75.16,215,38,179.38,38,136V48a1.91,1.91,0,0,1,1.23-1.85,2.28,2.28,0,0,1,.82-.17,1.87,1.87,0,0,1,1.26.5l21.76,25a6,6,0,0,0,8.11.88A91.52,91.52,0,0,1,90,61.68V88a6,6,0,1,0,12,0V57.51a97.85,97.85,0,0,1,20-3.32V88a6,6,0,1,0,12,0V54.19a97.85,97.85,0,0,1,20,3.32V88a6,6,0,1,0,12,0V61.68a91.52,91.52,0,0,1,18.82,10.73,6,6,0,0,0,8.11-.88l21.76-25A2,2,0,0,1,218,48ZM94,140a10,10,0,1,1-10-10A10,10,0,0,1,94,140Zm88,0a10,10,0,1,1-10-10A10,10,0,0,1,182,140Z',
                },
                child: [],
            },
        ],
    })(t)
}
function P2({ toggle: t, show: e }) {
    const n = () => {
            t()
        },
        r = () => {
            t()
        }
    return O.jsxs('div', {
        className: "font-['Inter']",
        children: [
            e &&
                O.jsx('div', {
                    className:
                        'fixed top-0 left-0 w-screen h-screen bg-gray-900 z-10 opacity-90',
                    onClick: n,
                }),
            O.jsx('div', {
                className: `z-20 fixed ${e ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`,
                style: {
                    top: '2rem',
                    left: '2rem',
                    width: 'calc(100vw - 4rem)',
                    height: 'calc(100vh - 4rem)',
                    transition: 'all 0.2s linear',
                },
                children: O.jsxs('div', {
                    className:
                        'w-full h-full rounded-lg shadow-lg bg-cover bg-center px-4 py-8 flex flex-col justify-center',
                    style: { backgroundImage: 'url(/img/manhlinh-02.jpg)' },
                    children: [
                        O.jsx('input', {
                            className:
                                'bg-theme-bg px-3 py-5 w-full rounded font-bold uppercase text-theme-main',
                            placeholder: 'Nhập tên của bạn',
                        }),
                        O.jsx('div', { className: 'pt-4' }),
                        O.jsx('button', {
                            className:
                                'bg-theme-main w-full py-3 text-theme-bg',
                            onClick: r,
                            children: 'Xác nhận',
                        }),
                    ],
                }),
            }),
        ],
    })
}
const E2 = () => {
    const [t, e] = ze.useState(!1),
        n = () => e(!t),
        r = ze.useRef(null),
        i = Vs.utils.selector(r),
        o = Vs.timeline()
    return (
        Vs.registerPlugin(oe),
        ze.useEffect(() => {
            o.from(i('h1'), {
                scrollTrigger: {
                    trigger: i('.section'),
                    toggleActions: 'restart pause resume pause',
                    scroller: '.page',
                },
                duration: 2,
                opacity: 1,
                x: 1e3,
                ease: 'power3.Out',
            })
        }, [i, r, o]),
        O.jsxs('main', {
            ref: r,
            className: 'min-h-screen page bg-theme-bg',
            children: [
                O.jsx(ux, {}),
                O.jsx(cx, {}),
                O.jsx(XS, {}),
                O.jsx(P2, { show: t, toggle: n }),
                O.jsx('div', {
                    className: 'fixed right-0 bottom-0 p-4',
                    children: O.jsxs('button', {
                        onClick: n,
                        className:
                            'py-1 px-4 bg-theme-main text-theme-bg rounded shadow-xl flex items-center',
                        children: [
                            O.jsx(O2, { size: 32 }),
                            O.jsx('span', { className: 'pl-4' }),
                            'Xác nhận tham dự',
                        ],
                    }),
                }),
            ],
        })
    )
}
function D2() {
    return O.jsx(O.Fragment, { children: O.jsx(E2, {}) })
}
nf.createRoot(document.getElementById('root')).render(
    O.jsx(oi.StrictMode, { children: O.jsx(D2, {}) }),
)
