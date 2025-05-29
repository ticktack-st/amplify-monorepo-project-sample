'use strict'
var TA = Object.create
var xo = Object.defineProperty
var IA = Object.getOwnPropertyDescriptor
var NA = Object.getOwnPropertyNames
var DA = Object.getPrototypeOf,
  kA = Object.prototype.hasOwnProperty
var MA = (e, t, r) =>
  t in e
    ? xo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r)
var v = (e, t) => () => (e && (t = e((e = 0))), t)
var h = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  st = (e, t) => {
    for (var r in t) xo(e, r, { get: t[r], enumerable: !0 })
  },
  Lf = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let o of NA(t))
        !kA.call(e, o) &&
          o !== r &&
          xo(e, o, {
            get: () => t[o],
            enumerable: !(n = IA(t, o)) || n.enumerable,
          })
    return e
  }
var E = (e, t, r) => (
    (r = e != null ? TA(DA(e)) : {}),
    Lf(
      t || !e || !e.__esModule
        ? xo(r, 'default', { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  F = (e) => Lf(xo({}, '__esModule', { value: !0 }), e)
var y = (e, t, r) => MA(e, typeof t != 'symbol' ? t + '' : t, r)
var Be = h((kz, Wf) => {
  var Ks = Object.defineProperty,
    UA = Object.getOwnPropertyDescriptor,
    FA = Object.getOwnPropertyNames,
    LA = Object.prototype.hasOwnProperty,
    Ys = (e, t) => Ks(e, 'name', { value: t, configurable: !0 }),
    jA = (e, t) => {
      for (var r in t) Ks(e, r, { get: t[r], enumerable: !0 })
    },
    HA = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of FA(t))
          !LA.call(e, o) &&
            o !== r &&
            Ks(e, o, {
              get: () => t[o],
              enumerable: !(n = UA(t, o)) || n.enumerable,
            })
      return e
    },
    qA = (e) => HA(Ks({}, '__esModule', { value: !0 }), e),
    jf = {}
  jA(jf, {
    AlgorithmId: () => Bf,
    EndpointURLScheme: () => $f,
    FieldPosition: () => Vf,
    HttpApiKeyAuthLocation: () => qf,
    HttpAuthLocation: () => Hf,
    IniSectionType: () => Gf,
    RequestHandlerProtocol: () => zf,
    SMITHY_CONTEXT_KEY: () => zA,
    getDefaultClientConfiguration: () => VA,
    resolveDefaultRuntimeConfig: () => GA,
  })
  Wf.exports = qA(jf)
  var Hf = ((e) => ((e.HEADER = 'header'), (e.QUERY = 'query'), e))(Hf || {}),
    qf = ((e) => ((e.HEADER = 'header'), (e.QUERY = 'query'), e))(qf || {}),
    $f = ((e) => ((e.HTTP = 'http'), (e.HTTPS = 'https'), e))($f || {}),
    Bf = ((e) => (
      (e.MD5 = 'md5'),
      (e.CRC32 = 'crc32'),
      (e.CRC32C = 'crc32c'),
      (e.SHA1 = 'sha1'),
      (e.SHA256 = 'sha256'),
      e
    ))(Bf || {}),
    $A = Ys((e) => {
      let t = []
      return (
        e.sha256 !== void 0 &&
          t.push({
            algorithmId: () => 'sha256',
            checksumConstructor: () => e.sha256,
          }),
        e.md5 != null &&
          t.push({
            algorithmId: () => 'md5',
            checksumConstructor: () => e.md5,
          }),
        {
          addChecksumAlgorithm(r) {
            t.push(r)
          },
          checksumAlgorithms() {
            return t
          },
        }
      )
    }, 'getChecksumConfiguration'),
    BA = Ys((e) => {
      let t = {}
      return (
        e.checksumAlgorithms().forEach((r) => {
          t[r.algorithmId()] = r.checksumConstructor()
        }),
        t
      )
    }, 'resolveChecksumRuntimeConfig'),
    VA = Ys((e) => $A(e), 'getDefaultClientConfiguration'),
    GA = Ys((e) => BA(e), 'resolveDefaultRuntimeConfig'),
    Vf = ((e) => (
      (e[(e.HEADER = 0)] = 'HEADER'), (e[(e.TRAILER = 1)] = 'TRAILER'), e
    ))(Vf || {}),
    zA = '__smithy_context',
    Gf = ((e) => (
      (e.PROFILE = 'profile'),
      (e.SSO_SESSION = 'sso-session'),
      (e.SERVICES = 'services'),
      e
    ))(Gf || {}),
    zf = ((e) => (
      (e.HTTP_0_9 = 'http/0.9'),
      (e.HTTP_1_0 = 'http/1.0'),
      (e.TDS_8_0 = 'tds/8.0'),
      e
    ))(zf || {})
})
var X = h((Mz, Qf) => {
  var Js = Object.defineProperty,
    WA = Object.getOwnPropertyDescriptor,
    KA = Object.getOwnPropertyNames,
    YA = Object.prototype.hasOwnProperty,
    vt = (e, t) => Js(e, 'name', { value: t, configurable: !0 }),
    JA = (e, t) => {
      for (var r in t) Js(e, r, { get: t[r], enumerable: !0 })
    },
    XA = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of KA(t))
          !YA.call(e, o) &&
            o !== r &&
            Js(e, o, {
              get: () => t[o],
              enumerable: !(n = WA(t, o)) || n.enumerable,
            })
      return e
    },
    QA = (e) => XA(Js({}, '__esModule', { value: !0 }), e),
    Kf = {}
  JA(Kf, {
    Field: () => tx,
    Fields: () => rx,
    HttpRequest: () => nx,
    HttpResponse: () => ox,
    IHttpRequest: () => Yf.HttpRequest,
    getHttpHandlerExtensionConfiguration: () => ZA,
    isValidHostname: () => Xf,
    resolveHttpHandlerRuntimeConfig: () => ex,
  })
  Qf.exports = QA(Kf)
  var ZA = vt(
      (e) => ({
        setHttpHandler(t) {
          e.httpHandler = t
        },
        httpHandler() {
          return e.httpHandler
        },
        updateHttpClientConfig(t, r) {
          e.httpHandler?.updateHttpClientConfig(t, r)
        },
        httpHandlerConfigs() {
          return e.httpHandler.httpHandlerConfigs()
        },
      }),
      'getHttpHandlerExtensionConfiguration'
    ),
    ex = vt(
      (e) => ({ httpHandler: e.httpHandler() }),
      'resolveHttpHandlerRuntimeConfig'
    ),
    Yf = Be(),
    qr,
    tx =
      ((qr = class {
        constructor({
          name: t,
          kind: r = Yf.FieldPosition.HEADER,
          values: n = [],
        }) {
          ;(this.name = t), (this.kind = r), (this.values = n)
        }
        add(t) {
          this.values.push(t)
        }
        set(t) {
          this.values = t
        }
        remove(t) {
          this.values = this.values.filter((r) => r !== t)
        }
        toString() {
          return this.values
            .map((t) => (t.includes(',') || t.includes(' ') ? `"${t}"` : t))
            .join(', ')
        }
        get() {
          return this.values
        }
      }),
      vt(qr, 'Field'),
      qr),
    $r,
    rx =
      (($r = class {
        constructor({ fields: t = [], encoding: r = 'utf-8' }) {
          ;(this.entries = {}),
            t.forEach(this.setField.bind(this)),
            (this.encoding = r)
        }
        setField(t) {
          this.entries[t.name.toLowerCase()] = t
        }
        getField(t) {
          return this.entries[t.toLowerCase()]
        }
        removeField(t) {
          delete this.entries[t.toLowerCase()]
        }
        getByType(t) {
          return Object.values(this.entries).filter((r) => r.kind === t)
        }
      }),
      vt($r, 'Fields'),
      $r),
    yt,
    nx =
      ((yt = class {
        constructor(t) {
          ;(this.method = t.method || 'GET'),
            (this.hostname = t.hostname || 'localhost'),
            (this.port = t.port),
            (this.query = t.query || {}),
            (this.headers = t.headers || {}),
            (this.body = t.body),
            (this.protocol = t.protocol
              ? t.protocol.slice(-1) !== ':'
                ? `${t.protocol}:`
                : t.protocol
              : 'https:'),
            (this.path = t.path
              ? t.path.charAt(0) !== '/'
                ? `/${t.path}`
                : t.path
              : '/'),
            (this.username = t.username),
            (this.password = t.password),
            (this.fragment = t.fragment)
        }
        static clone(t) {
          let r = new yt({ ...t, headers: { ...t.headers } })
          return r.query && (r.query = Jf(r.query)), r
        }
        static isInstance(t) {
          if (!t) return !1
          let r = t
          return (
            'method' in r &&
            'protocol' in r &&
            'hostname' in r &&
            'path' in r &&
            typeof r.query == 'object' &&
            typeof r.headers == 'object'
          )
        }
        clone() {
          return yt.clone(this)
        }
      }),
      vt(yt, 'HttpRequest'),
      yt)
  function Jf(e) {
    return Object.keys(e).reduce((t, r) => {
      let n = e[r]
      return { ...t, [r]: Array.isArray(n) ? [...n] : n }
    }, {})
  }
  vt(Jf, 'cloneQuery')
  var Br,
    ox =
      ((Br = class {
        constructor(t) {
          ;(this.statusCode = t.statusCode),
            (this.reason = t.reason),
            (this.headers = t.headers || {}),
            (this.body = t.body)
        }
        static isInstance(t) {
          if (!t) return !1
          let r = t
          return typeof r.statusCode == 'number' && typeof r.headers == 'object'
        }
      }),
      vt(Br, 'HttpResponse'),
      Br)
  function Xf(e) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(e)
  }
  vt(Xf, 'isValidHostname')
})
var To = h((Uz, nm) => {
  'use strict'
  var Qs = Object.defineProperty,
    sx = Object.getOwnPropertyDescriptor,
    ix = Object.getOwnPropertyNames,
    ax = Object.prototype.hasOwnProperty,
    Xs = (e, t) => Qs(e, 'name', { value: t, configurable: !0 }),
    cx = (e, t) => {
      for (var r in t) Qs(e, r, { get: t[r], enumerable: !0 })
    },
    dx = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of ix(t))
          !ax.call(e, o) &&
            o !== r &&
            Qs(e, o, {
              get: () => t[o],
              enumerable: !(n = sx(t, o)) || n.enumerable,
            })
      return e
    },
    lx = (e) => dx(Qs({}, '__esModule', { value: !0 }), e),
    Zf = {}
  cx(Zf, {
    getHostHeaderPlugin: () => px,
    hostHeaderMiddleware: () => tm,
    hostHeaderMiddlewareOptions: () => rm,
    resolveHostHeaderConfig: () => em,
  })
  nm.exports = lx(Zf)
  var ux = X()
  function em(e) {
    return e
  }
  Xs(em, 'resolveHostHeaderConfig')
  var tm = Xs(
      (e) => (t) => async (r) => {
        if (!ux.HttpRequest.isInstance(r.request)) return t(r)
        let { request: n } = r,
          { handlerProtocol: o = '' } = e.requestHandler.metadata || {}
        if (o.indexOf('h2') >= 0 && !n.headers[':authority'])
          delete n.headers.host,
            (n.headers[':authority'] =
              n.hostname + (n.port ? ':' + n.port : ''))
        else if (!n.headers.host) {
          let s = n.hostname
          n.port != null && (s += `:${n.port}`), (n.headers.host = s)
        }
        return t(r)
      },
      'hostHeaderMiddleware'
    ),
    rm = {
      name: 'hostHeaderMiddleware',
      step: 'build',
      priority: 'low',
      tags: ['HOST'],
      override: !0,
    },
    px = Xs(
      (e) => ({
        applyToStack: Xs((t) => {
          t.add(tm(e), rm)
        }, 'applyToStack'),
      }),
      'getHostHeaderPlugin'
    )
})
var Io = h((Fz, am) => {
  'use strict'
  var Zs = Object.defineProperty,
    fx = Object.getOwnPropertyDescriptor,
    mx = Object.getOwnPropertyNames,
    gx = Object.prototype.hasOwnProperty,
    Cd = (e, t) => Zs(e, 'name', { value: t, configurable: !0 }),
    hx = (e, t) => {
      for (var r in t) Zs(e, r, { get: t[r], enumerable: !0 })
    },
    _x = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of mx(t))
          !gx.call(e, o) &&
            o !== r &&
            Zs(e, o, {
              get: () => t[o],
              enumerable: !(n = fx(t, o)) || n.enumerable,
            })
      return e
    },
    yx = (e) => _x(Zs({}, '__esModule', { value: !0 }), e),
    om = {}
  hx(om, {
    getLoggerPlugin: () => vx,
    loggerMiddleware: () => sm,
    loggerMiddlewareOptions: () => im,
  })
  am.exports = yx(om)
  var sm = Cd(
      () => (e, t) => async (r) => {
        try {
          let n = await e(r),
            {
              clientName: o,
              commandName: s,
              logger: i,
              dynamoDbDocumentClientOptions: a = {},
            } = t,
            {
              overrideInputFilterSensitiveLog: c,
              overrideOutputFilterSensitiveLog: d,
            } = a,
            l = c ?? t.inputFilterSensitiveLog,
            u = d ?? t.outputFilterSensitiveLog,
            { $metadata: f, ...g } = n.output
          return (
            i?.info?.({
              clientName: o,
              commandName: s,
              input: l(r.input),
              output: u(g),
              metadata: f,
            }),
            n
          )
        } catch (n) {
          let {
              clientName: o,
              commandName: s,
              logger: i,
              dynamoDbDocumentClientOptions: a = {},
            } = t,
            { overrideInputFilterSensitiveLog: c } = a,
            d = c ?? t.inputFilterSensitiveLog
          throw (
            (i?.error?.({
              clientName: o,
              commandName: s,
              input: d(r.input),
              error: n,
              metadata: n.$metadata,
            }),
            n)
          )
        }
      },
      'loggerMiddleware'
    ),
    im = {
      name: 'loggerMiddleware',
      tags: ['LOGGER'],
      step: 'initialize',
      override: !0,
    },
    vx = Cd(
      (e) => ({
        applyToStack: Cd((t) => {
          t.add(sm(), im)
        }, 'applyToStack'),
      }),
      'getLoggerPlugin'
    )
})
var No = h((Lz, um) => {
  'use strict'
  var ti = Object.defineProperty,
    Ex = Object.getOwnPropertyDescriptor,
    Sx = Object.getOwnPropertyNames,
    wx = Object.prototype.hasOwnProperty,
    ei = (e, t) => ti(e, 'name', { value: t, configurable: !0 }),
    bx = (e, t) => {
      for (var r in t) ti(e, r, { get: t[r], enumerable: !0 })
    },
    Px = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of Sx(t))
          !wx.call(e, o) &&
            o !== r &&
            ti(e, o, {
              get: () => t[o],
              enumerable: !(n = Ex(t, o)) || n.enumerable,
            })
      return e
    },
    Rx = (e) => Px(ti({}, '__esModule', { value: !0 }), e),
    cm = {}
  bx(cm, {
    addRecursionDetectionMiddlewareOptions: () => lm,
    getRecursionDetectionPlugin: () => xx,
    recursionDetectionMiddleware: () => dm,
  })
  um.exports = Rx(cm)
  var Cx = X(),
    Od = 'X-Amzn-Trace-Id',
    Ox = 'AWS_LAMBDA_FUNCTION_NAME',
    Ax = '_X_AMZN_TRACE_ID',
    dm = ei(
      (e) => (t) => async (r) => {
        let { request: n } = r
        if (!Cx.HttpRequest.isInstance(n) || e.runtime !== 'node') return t(r)
        let o =
          Object.keys(n.headers ?? {}).find(
            (c) => c.toLowerCase() === Od.toLowerCase()
          ) ?? Od
        if (n.headers.hasOwnProperty(o)) return t(r)
        let s = process.env[Ox],
          i = process.env[Ax],
          a = ei((c) => typeof c == 'string' && c.length > 0, 'nonEmptyString')
        return a(s) && a(i) && (n.headers[Od] = i), t({ ...r, request: n })
      },
      'recursionDetectionMiddleware'
    ),
    lm = {
      step: 'build',
      tags: ['RECURSION_DETECTION'],
      name: 'recursionDetectionMiddleware',
      override: !0,
      priority: 'low',
    },
    xx = ei(
      (e) => ({
        applyToStack: ei((t) => {
          t.add(dm(e), lm)
        }, 'applyToStack'),
      }),
      'getRecursionDetectionPlugin'
    )
})
var Ad,
  Tx,
  pm = v(() => {
    ;(Ad = E(Be())),
      (Tx = (e) => e[Ad.SMITHY_CONTEXT_KEY] || (e[Ad.SMITHY_CONTEXT_KEY] = {}))
  })
var Ue = h((Hz, hm) => {
  var ri = Object.defineProperty,
    Ix = Object.getOwnPropertyDescriptor,
    Nx = Object.getOwnPropertyNames,
    Dx = Object.prototype.hasOwnProperty,
    mm = (e, t) => ri(e, 'name', { value: t, configurable: !0 }),
    kx = (e, t) => {
      for (var r in t) ri(e, r, { get: t[r], enumerable: !0 })
    },
    Mx = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of Nx(t))
          !Dx.call(e, o) &&
            o !== r &&
            ri(e, o, {
              get: () => t[o],
              enumerable: !(n = Ix(t, o)) || n.enumerable,
            })
      return e
    },
    Ux = (e) => Mx(ri({}, '__esModule', { value: !0 }), e),
    gm = {}
  kx(gm, { getSmithyContext: () => Fx, normalizeProvider: () => Lx })
  hm.exports = Ux(gm)
  var fm = Be(),
    Fx = mm(
      (e) => e[fm.SMITHY_CONTEXT_KEY] || (e[fm.SMITHY_CONTEXT_KEY] = {}),
      'getSmithyContext'
    ),
    Lx = mm((e) => {
      if (typeof e == 'function') return e
      let t = Promise.resolve(e)
      return () => t
    }, 'normalizeProvider')
})
var _m,
  ym = v(() => {
    _m = (e, t) => {
      if (!t || t.length === 0) return e
      let r = []
      for (let n of t)
        for (let o of e) o.schemeId.split('#')[1] === n && r.push(o)
      for (let n of e)
        r.find(({ schemeId: o }) => o === n.schemeId) || r.push(n)
      return r
    }
  })
function jx(e) {
  let t = new Map()
  for (let r of e) t.set(r.schemeId, r)
  return t
}
var $z,
  vm,
  Do,
  ni = v(() => {
    ;($z = E(Be())), (vm = E(Ue()))
    ym()
    Do = (e, t) => (r, n) => async (o) => {
      let s = e.httpAuthSchemeProvider(
          await t.httpAuthSchemeParametersProvider(e, n, o.input)
        ),
        i = e.authSchemePreference ? await e.authSchemePreference() : [],
        a = _m(s, i),
        c = jx(e.httpAuthSchemes),
        d = (0, vm.getSmithyContext)(n),
        l = []
      for (let u of a) {
        let f = c.get(u.schemeId)
        if (!f) {
          l.push(
            `HttpAuthScheme \`${u.schemeId}\` was not enabled for this service.`
          )
          continue
        }
        let g = f.identityProvider(await t.identityProviderConfigProvider(e))
        if (!g) {
          l.push(
            `HttpAuthScheme \`${u.schemeId}\` did not have an IdentityProvider configured.`
          )
          continue
        }
        let { identityProperties: _ = {}, signingProperties: w = {} } =
          u.propertiesExtractor?.(e, n) || {}
        ;(u.identityProperties = Object.assign(u.identityProperties || {}, _)),
          (u.signingProperties = Object.assign(u.signingProperties || {}, w)),
          (d.selectedHttpAuthScheme = {
            httpAuthOption: u,
            identity: await g(u.identityProperties),
            signer: f.signer,
          })
        break
      }
      if (!d.selectedHttpAuthScheme)
        throw new Error(
          l.join(`
`)
        )
      return r(o)
    }
  })
var Em,
  ko,
  Sm = v(() => {
    ni()
    ;(Em = {
      step: 'serialize',
      tags: ['HTTP_AUTH_SCHEME'],
      name: 'httpAuthSchemeMiddleware',
      override: !0,
      relation: 'before',
      toMiddleware: 'endpointV2Middleware',
    }),
      (ko = (
        e,
        {
          httpAuthSchemeParametersProvider: t,
          identityProviderConfigProvider: r,
        }
      ) => ({
        applyToStack: (n) => {
          n.addRelativeTo(
            Do(e, {
              httpAuthSchemeParametersProvider: t,
              identityProviderConfigProvider: r,
            }),
            Em
          )
        },
      }))
  })
var Et = h((Kz, Am) => {
  var oi = Object.defineProperty,
    Hx = Object.getOwnPropertyDescriptor,
    qx = Object.getOwnPropertyNames,
    $x = Object.prototype.hasOwnProperty,
    xd = (e, t) => oi(e, 'name', { value: t, configurable: !0 }),
    Bx = (e, t) => {
      for (var r in t) oi(e, r, { get: t[r], enumerable: !0 })
    },
    Vx = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of qx(t))
          !$x.call(e, o) &&
            o !== r &&
            oi(e, o, {
              get: () => t[o],
              enumerable: !(n = Hx(t, o)) || n.enumerable,
            })
      return e
    },
    Gx = (e) => Vx(oi({}, '__esModule', { value: !0 }), e),
    wm = {}
  Bx(wm, {
    deserializerMiddleware: () => bm,
    deserializerMiddlewareOption: () => Rm,
    getSerdePlugin: () => Om,
    serializerMiddleware: () => Pm,
    serializerMiddlewareOption: () => Cm,
  })
  Am.exports = Gx(wm)
  var bm = xd(
      (e, t) => (r, n) => async (o) => {
        let { response: s } = await r(o)
        try {
          let i = await t(s, e)
          return { response: s, output: i }
        } catch (i) {
          if (
            (Object.defineProperty(i, '$response', { value: s }),
            !('$metadata' in i))
          ) {
            let a =
              'Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.'
            try {
              i.message +=
                `
  ` + a
            } catch {
              !n.logger || n.logger?.constructor?.name === 'NoOpLogger'
                ? console.warn(a)
                : n.logger?.warn?.(a)
            }
            typeof i.$responseBodyText < 'u' &&
              i.$response &&
              (i.$response.body = i.$responseBodyText)
          }
          throw i
        }
      },
      'deserializerMiddleware'
    ),
    Pm = xd(
      (e, t) => (r, n) => async (o) => {
        let s =
          n.endpointV2?.url && e.urlParser
            ? async () => e.urlParser(n.endpointV2.url)
            : e.endpoint
        if (!s) throw new Error('No valid endpoint provider available.')
        let i = await t(o.input, { ...e, endpoint: s })
        return r({ ...o, request: i })
      },
      'serializerMiddleware'
    ),
    Rm = {
      name: 'deserializerMiddleware',
      step: 'deserialize',
      tags: ['DESERIALIZER'],
      override: !0,
    },
    Cm = {
      name: 'serializerMiddleware',
      step: 'serialize',
      tags: ['SERIALIZER'],
      override: !0,
    }
  function Om(e, t, r) {
    return {
      applyToStack: (n) => {
        n.add(bm(e, r), Rm), n.add(Pm(e, t), Cm)
      },
    }
  }
  xd(Om, 'getSerdePlugin')
})
var xm,
  Tm,
  zx,
  Im = v(() => {
    xm = E(Et())
    ni()
    ;(Tm = {
      step: 'serialize',
      tags: ['HTTP_AUTH_SCHEME'],
      name: 'httpAuthSchemeMiddleware',
      override: !0,
      relation: 'before',
      toMiddleware: xm.serializerMiddlewareOption.name,
    }),
      (zx = (
        e,
        {
          httpAuthSchemeParametersProvider: t,
          identityProviderConfigProvider: r,
        }
      ) => ({
        applyToStack: (n) => {
          n.addRelativeTo(
            Do(e, {
              httpAuthSchemeParametersProvider: t,
              identityProviderConfigProvider: r,
            }),
            Tm
          )
        },
      }))
  })
var Nm = v(() => {
  ni()
  Sm()
  Im()
})
var Dm,
  t3,
  km,
  Wx,
  Kx,
  Td,
  Id = v(() => {
    ;(Dm = E(X())),
      (t3 = E(Be())),
      (km = E(Ue())),
      (Wx = (e) => (t) => {
        throw t
      }),
      (Kx = (e, t) => {}),
      (Td = (e) => (t, r) => async (n) => {
        if (!Dm.HttpRequest.isInstance(n.request)) return t(n)
        let s = (0, km.getSmithyContext)(r).selectedHttpAuthScheme
        if (!s)
          throw new Error(
            'No HttpAuthScheme was selected: unable to sign request'
          )
        let {
            httpAuthOption: { signingProperties: i = {} },
            identity: a,
            signer: c,
          } = s,
          d = await t({
            ...n,
            request: await c.sign(n.request, a, i),
          }).catch((c.errorHandler || Wx)(i))
        return (c.successHandler || Kx)(d.response, i), d
      })
  })
var Mm,
  Mo,
  Um = v(() => {
    Id()
    ;(Mm = {
      step: 'finalizeRequest',
      tags: ['HTTP_SIGNING'],
      name: 'httpSigningMiddleware',
      aliases: ['apiKeyMiddleware', 'tokenMiddleware', 'awsAuthMiddleware'],
      override: !0,
      relation: 'after',
      toMiddleware: 'retryMiddleware',
    }),
      (Mo = (e) => ({
        applyToStack: (t) => {
          t.addRelativeTo(Td(e), Mm)
        },
      }))
  })
var Fm = v(() => {
  Id()
  Um()
})
var St,
  Lm = v(() => {
    St = (e) => {
      if (typeof e == 'function') return e
      let t = Promise.resolve(e)
      return () => t
    }
  })
function jm(e, t, r, n, o) {
  return async function* (i, a, ...c) {
    let d = a,
      l = i.startingToken ?? d[r],
      u = !0,
      f
    for (; u; ) {
      if (((d[r] = l), o && (d[o] = d[o] ?? i.pageSize), i.client instanceof e))
        f = await Yx(t, i.client, a, i.withCommand, ...c)
      else throw new Error(`Invalid client, expected instance of ${e.name}`)
      yield f
      let g = l
      ;(l = Jx(f, n)), (u = !!(l && (!i.stopOnSameToken || l !== g)))
    }
    return void 0
  }
}
var Yx,
  Jx,
  Hm = v(() => {
    Yx = async (e, t, r, n = (s) => s, ...o) => {
      let s = new e(r)
      return (s = n(s) ?? s), await t.send(s, ...o)
    }
    Jx = (e, t) => {
      let r = e,
        n = t.split('.')
      for (let o of n) {
        if (!r || typeof r != 'object') return
        r = r[o]
      }
      return r
    }
  })
var Nd = h((u3, $m) => {
  var si = Object.defineProperty,
    Xx = Object.getOwnPropertyDescriptor,
    Qx = Object.getOwnPropertyNames,
    Zx = Object.prototype.hasOwnProperty,
    eT = (e, t) => si(e, 'name', { value: t, configurable: !0 }),
    tT = (e, t) => {
      for (var r in t) si(e, r, { get: t[r], enumerable: !0 })
    },
    rT = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of Qx(t))
          !Zx.call(e, o) &&
            o !== r &&
            si(e, o, {
              get: () => t[o],
              enumerable: !(n = Xx(t, o)) || n.enumerable,
            })
      return e
    },
    nT = (e) => rT(si({}, '__esModule', { value: !0 }), e),
    qm = {}
  tT(qm, { isArrayBuffer: () => oT })
  $m.exports = nT(qm)
  var oT = eT(
    (e) =>
      (typeof ArrayBuffer == 'function' && e instanceof ArrayBuffer) ||
      Object.prototype.toString.call(e) === '[object ArrayBuffer]',
    'isArrayBuffer'
  )
})
var ee = h((p3, Gm) => {
  var ii = Object.defineProperty,
    sT = Object.getOwnPropertyDescriptor,
    iT = Object.getOwnPropertyNames,
    aT = Object.prototype.hasOwnProperty,
    Bm = (e, t) => ii(e, 'name', { value: t, configurable: !0 }),
    cT = (e, t) => {
      for (var r in t) ii(e, r, { get: t[r], enumerable: !0 })
    },
    dT = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of iT(t))
          !aT.call(e, o) &&
            o !== r &&
            ii(e, o, {
              get: () => t[o],
              enumerable: !(n = sT(t, o)) || n.enumerable,
            })
      return e
    },
    lT = (e) => dT(ii({}, '__esModule', { value: !0 }), e),
    Vm = {}
  cT(Vm, { fromArrayBuffer: () => pT, fromString: () => fT })
  Gm.exports = lT(Vm)
  var uT = Nd(),
    Dd = require('buffer'),
    pT = Bm((e, t = 0, r = e.byteLength - t) => {
      if (!(0, uT.isArrayBuffer)(e))
        throw new TypeError(
          `The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`
        )
      return Dd.Buffer.from(e, t, r)
    }, 'fromArrayBuffer'),
    fT = Bm((e, t) => {
      if (typeof e != 'string')
        throw new TypeError(
          `The "input" argument must be of type string. Received type ${typeof e} (${e})`
        )
      return t ? Dd.Buffer.from(e, t) : Dd.Buffer.from(e)
    }, 'fromString')
})
var zm = h((ai) => {
  'use strict'
  Object.defineProperty(ai, '__esModule', { value: !0 })
  ai.fromBase64 = void 0
  var mT = ee(),
    gT = /^[A-Za-z0-9+/]*={0,2}$/,
    hT = (e) => {
      if ((e.length * 3) % 4 !== 0)
        throw new TypeError('Incorrect padding on base64 string.')
      if (!gT.exec(e)) throw new TypeError('Invalid base64 string.')
      let t = (0, mT.fromString)(e, 'base64')
      return new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
    }
  ai.fromBase64 = hT
})
var di = h((m3, Jm) => {
  var ci = Object.defineProperty,
    _T = Object.getOwnPropertyDescriptor,
    yT = Object.getOwnPropertyNames,
    vT = Object.prototype.hasOwnProperty,
    kd = (e, t) => ci(e, 'name', { value: t, configurable: !0 }),
    ET = (e, t) => {
      for (var r in t) ci(e, r, { get: t[r], enumerable: !0 })
    },
    ST = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of yT(t))
          !vT.call(e, o) &&
            o !== r &&
            ci(e, o, {
              get: () => t[o],
              enumerable: !(n = _T(t, o)) || n.enumerable,
            })
      return e
    },
    wT = (e) => ST(ci({}, '__esModule', { value: !0 }), e),
    Wm = {}
  ET(Wm, { fromUtf8: () => Ym, toUint8Array: () => bT, toUtf8: () => PT })
  Jm.exports = wT(Wm)
  var Km = ee(),
    Ym = kd((e) => {
      let t = (0, Km.fromString)(e, 'utf8')
      return new Uint8Array(
        t.buffer,
        t.byteOffset,
        t.byteLength / Uint8Array.BYTES_PER_ELEMENT
      )
    }, 'fromUtf8'),
    bT = kd(
      (e) =>
        typeof e == 'string'
          ? Ym(e)
          : ArrayBuffer.isView(e)
            ? new Uint8Array(
                e.buffer,
                e.byteOffset,
                e.byteLength / Uint8Array.BYTES_PER_ELEMENT
              )
            : new Uint8Array(e),
      'toUint8Array'
    ),
    PT = kd((e) => {
      if (typeof e == 'string') return e
      if (
        typeof e != 'object' ||
        typeof e.byteOffset != 'number' ||
        typeof e.byteLength != 'number'
      )
        throw new Error(
          '@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.'
        )
      return (0, Km.fromArrayBuffer)(
        e.buffer,
        e.byteOffset,
        e.byteLength
      ).toString('utf8')
    }, 'toUtf8')
})
var Xm = h((li) => {
  'use strict'
  Object.defineProperty(li, '__esModule', { value: !0 })
  li.toBase64 = void 0
  var RT = ee(),
    CT = di(),
    OT = (e) => {
      let t
      if (
        (typeof e == 'string' ? (t = (0, CT.fromUtf8)(e)) : (t = e),
        typeof t != 'object' ||
          typeof t.byteOffset != 'number' ||
          typeof t.byteLength != 'number')
      )
        throw new Error(
          '@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.'
        )
      return (0, RT.fromArrayBuffer)(
        t.buffer,
        t.byteOffset,
        t.byteLength
      ).toString('base64')
    }
  li.toBase64 = OT
})
var Uo = h((h3, ui) => {
  var Qm = Object.defineProperty,
    AT = Object.getOwnPropertyDescriptor,
    xT = Object.getOwnPropertyNames,
    TT = Object.prototype.hasOwnProperty,
    Md = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of xT(t))
          !TT.call(e, o) &&
            o !== r &&
            Qm(e, o, {
              get: () => t[o],
              enumerable: !(n = AT(t, o)) || n.enumerable,
            })
      return e
    },
    Zm = (e, t, r) => (Md(e, t, 'default'), r && Md(r, t, 'default')),
    IT = (e) => Md(Qm({}, '__esModule', { value: !0 }), e),
    Ud = {}
  ui.exports = IT(Ud)
  Zm(Ud, zm(), ui.exports)
  Zm(Ud, Xm(), ui.exports)
})
var Ld = h((pi) => {
  'use strict'
  Object.defineProperty(pi, '__esModule', { value: !0 })
  pi.ChecksumStream = void 0
  var NT = Uo(),
    DT = require('stream'),
    Fd = class extends DT.Duplex {
      constructor({
        expectedChecksum: t,
        checksum: r,
        source: n,
        checksumSourceLocation: o,
        base64Encoder: s,
      }) {
        var i, a
        if ((super(), typeof n.pipe == 'function')) this.source = n
        else
          throw new Error(
            `@smithy/util-stream: unsupported source type ${(a = (i = n?.constructor) === null || i === void 0 ? void 0 : i.name) !== null && a !== void 0 ? a : n} in ChecksumStream.`
          )
        ;(this.base64Encoder = s ?? NT.toBase64),
          (this.expectedChecksum = t),
          (this.checksum = r),
          (this.checksumSourceLocation = o),
          this.source.pipe(this)
      }
      _read(t) {}
      _write(t, r, n) {
        try {
          this.checksum.update(t), this.push(t)
        } catch (o) {
          return n(o)
        }
        return n()
      }
      async _final(t) {
        try {
          let r = await this.checksum.digest(),
            n = this.base64Encoder(r)
          if (this.expectedChecksum !== n)
            return t(
              new Error(
                `Checksum mismatch: expected "${this.expectedChecksum}" but received "${n}" in response header "${this.checksumSourceLocation}".`
              )
            )
        } catch (r) {
          return t(r)
        }
        return this.push(null), t()
      }
    }
  pi.ChecksumStream = Fd
})
var wt = h((Vr) => {
  'use strict'
  Object.defineProperty(Vr, '__esModule', { value: !0 })
  Vr.isBlob = Vr.isReadableStream = void 0
  var kT = (e) => {
    var t
    return (
      typeof ReadableStream == 'function' &&
      (((t = e?.constructor) === null || t === void 0 ? void 0 : t.name) ===
        ReadableStream.name ||
        e instanceof ReadableStream)
    )
  }
  Vr.isReadableStream = kT
  var MT = (e) => {
    var t
    return (
      typeof Blob == 'function' &&
      (((t = e?.constructor) === null || t === void 0 ? void 0 : t.name) ===
        Blob.name ||
        e instanceof Blob)
    )
  }
  Vr.isBlob = MT
})
var eg = h((fi) => {
  'use strict'
  Object.defineProperty(fi, '__esModule', { value: !0 })
  fi.ChecksumStream = void 0
  var UT =
      typeof ReadableStream == 'function' ? ReadableStream : function () {},
    jd = class extends UT {}
  fi.ChecksumStream = jd
})
var tg = h((mi) => {
  'use strict'
  Object.defineProperty(mi, '__esModule', { value: !0 })
  mi.createChecksumStream = void 0
  var FT = Uo(),
    LT = wt(),
    jT = eg(),
    HT = ({
      expectedChecksum: e,
      checksum: t,
      source: r,
      checksumSourceLocation: n,
      base64Encoder: o,
    }) => {
      var s, i
      if (!(0, LT.isReadableStream)(r))
        throw new Error(
          `@smithy/util-stream: unsupported source type ${(i = (s = r?.constructor) === null || s === void 0 ? void 0 : s.name) !== null && i !== void 0 ? i : r} in ChecksumStream.`
        )
      let a = o ?? FT.toBase64
      if (typeof TransformStream != 'function')
        throw new Error(
          '@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.'
        )
      let c = new TransformStream({
        start() {},
        async transform(l, u) {
          t.update(l), u.enqueue(l)
        },
        async flush(l) {
          let u = await t.digest(),
            f = a(u)
          if (e !== f) {
            let g = new Error(
              `Checksum mismatch: expected "${e}" but received "${f}" in response header "${n}".`
            )
            l.error(g)
          } else l.terminate()
        },
      })
      r.pipeThrough(c)
      let d = c.readable
      return Object.setPrototypeOf(d, jT.ChecksumStream.prototype), d
    }
  mi.createChecksumStream = HT
})
var rg = h((gi) => {
  'use strict'
  Object.defineProperty(gi, '__esModule', { value: !0 })
  gi.createChecksumStream = void 0
  var qT = wt(),
    $T = Ld(),
    BT = tg()
  function VT(e) {
    return typeof ReadableStream == 'function' &&
      (0, qT.isReadableStream)(e.source)
      ? (0, BT.createChecksumStream)(e)
      : new $T.ChecksumStream(e)
  }
  gi.createChecksumStream = VT
})
var qd = h((hi) => {
  'use strict'
  Object.defineProperty(hi, '__esModule', { value: !0 })
  hi.ByteArrayCollector = void 0
  var Hd = class {
    constructor(t) {
      ;(this.allocByteArray = t), (this.byteLength = 0), (this.byteArrays = [])
    }
    push(t) {
      this.byteArrays.push(t), (this.byteLength += t.byteLength)
    }
    flush() {
      if (this.byteArrays.length === 1) {
        let n = this.byteArrays[0]
        return this.reset(), n
      }
      let t = this.allocByteArray(this.byteLength),
        r = 0
      for (let n = 0; n < this.byteArrays.length; ++n) {
        let o = this.byteArrays[n]
        t.set(o, r), (r += o.byteLength)
      }
      return this.reset(), t
    }
    reset() {
      ;(this.byteArrays = []), (this.byteLength = 0)
    }
  }
  hi.ByteArrayCollector = Hd
})
var ig = h((ge) => {
  'use strict'
  Object.defineProperty(ge, '__esModule', { value: !0 })
  ge.modeOf =
    ge.sizeOf =
    ge.flush =
    ge.merge =
    ge.createBufferedReadable =
    ge.createBufferedReadableStream =
      void 0
  var GT = qd()
  function ng(e, t, r) {
    let n = e.getReader(),
      o = !1,
      s = 0,
      i = ['', new GT.ByteArrayCollector((d) => new Uint8Array(d))],
      a = -1,
      c = async (d) => {
        let { value: l, done: u } = await n.read(),
          f = l
        if (u) {
          if (a !== -1) {
            let g = _i(i, a)
            Gr(g) > 0 && d.enqueue(g)
          }
          d.close()
        } else {
          let g = sg(f, !1)
          if ((a !== g && (a >= 0 && d.enqueue(_i(i, a)), (a = g)), a === -1)) {
            d.enqueue(f)
            return
          }
          let _ = Gr(f)
          s += _
          let w = Gr(i[a])
          if (_ >= t && w === 0) d.enqueue(f)
          else {
            let S = og(i, a, f)
            !o &&
              s > t * 2 &&
              ((o = !0),
              r?.warn(
                `@smithy/util-stream - stream chunk size ${_} is below threshold of ${t}, automatically buffering.`
              )),
              S >= t ? d.enqueue(_i(i, a)) : await c(d)
          }
        }
      }
    return new ReadableStream({ pull: c })
  }
  ge.createBufferedReadableStream = ng
  ge.createBufferedReadable = ng
  function og(e, t, r) {
    switch (t) {
      case 0:
        return (e[0] += r), Gr(e[0])
      case 1:
      case 2:
        return e[t].push(r), Gr(e[t])
    }
  }
  ge.merge = og
  function _i(e, t) {
    switch (t) {
      case 0:
        let r = e[0]
        return (e[0] = ''), r
      case 1:
      case 2:
        return e[t].flush()
    }
    throw new Error(`@smithy/util-stream - invalid index ${t} given to flush()`)
  }
  ge.flush = _i
  function Gr(e) {
    var t, r
    return (r =
      (t = e?.byteLength) !== null && t !== void 0 ? t : e?.length) !== null &&
      r !== void 0
      ? r
      : 0
  }
  ge.sizeOf = Gr
  function sg(e, t = !0) {
    return t && typeof Buffer < 'u' && e instanceof Buffer
      ? 2
      : e instanceof Uint8Array
        ? 1
        : typeof e == 'string'
          ? 0
          : -1
  }
  ge.modeOf = sg
})
var cg = h((yi) => {
  'use strict'
  Object.defineProperty(yi, '__esModule', { value: !0 })
  yi.createBufferedReadable = void 0
  var zT = require('node:stream'),
    ag = qd(),
    it = ig(),
    WT = wt()
  function KT(e, t, r) {
    if ((0, WT.isReadableStream)(e))
      return (0, it.createBufferedReadableStream)(e, t, r)
    let n = new zT.Readable({ read() {} }),
      o = !1,
      s = 0,
      i = [
        '',
        new ag.ByteArrayCollector((c) => new Uint8Array(c)),
        new ag.ByteArrayCollector((c) => Buffer.from(new Uint8Array(c))),
      ],
      a = -1
    return (
      e.on('data', (c) => {
        let d = (0, it.modeOf)(c, !0)
        if (
          (a !== d && (a >= 0 && n.push((0, it.flush)(i, a)), (a = d)),
          a === -1)
        ) {
          n.push(c)
          return
        }
        let l = (0, it.sizeOf)(c)
        s += l
        let u = (0, it.sizeOf)(i[a])
        if (l >= t && u === 0) n.push(c)
        else {
          let f = (0, it.merge)(i, a, c)
          !o &&
            s > t * 2 &&
            ((o = !0),
            r?.warn(
              `@smithy/util-stream - stream chunk size ${l} is below threshold of ${t}, automatically buffering.`
            )),
            f >= t && n.push((0, it.flush)(i, a))
        }
      }),
      e.on('end', () => {
        if (a !== -1) {
          let c = (0, it.flush)(i, a)
          ;(0, it.sizeOf)(c) > 0 && n.push(c)
        }
        n.push(null)
      }),
      n
    )
  }
  yi.createBufferedReadable = KT
})
var dg = h((vi) => {
  'use strict'
  Object.defineProperty(vi, '__esModule', { value: !0 })
  vi.getAwsChunkedEncodingStream = void 0
  var YT = require('stream'),
    JT = (e, t) => {
      let {
          base64Encoder: r,
          bodyLengthChecker: n,
          checksumAlgorithmFn: o,
          checksumLocationName: s,
          streamHasher: i,
        } = t,
        a = r !== void 0 && o !== void 0 && s !== void 0 && i !== void 0,
        c = a ? i(o, e) : void 0,
        d = new YT.Readable({ read: () => {} })
      return (
        e.on('data', (l) => {
          let u = n(l) || 0
          d.push(`${u.toString(16)}\r
`),
            d.push(l),
            d.push(`\r
`)
        }),
        e.on('end', async () => {
          if (
            (d.push(`0\r
`),
            a)
          ) {
            let l = r(await c)
            d.push(`${s}:${l}\r
`),
              d.push(`\r
`)
          }
          d.push(null)
        }),
        d
      )
    }
  vi.getAwsChunkedEncodingStream = JT
})
var lg = h((Ei) => {
  'use strict'
  Object.defineProperty(Ei, '__esModule', { value: !0 })
  Ei.headStream = void 0
  async function XT(e, t) {
    var r
    let n = 0,
      o = [],
      s = e.getReader(),
      i = !1
    for (; !i; ) {
      let { done: d, value: l } = await s.read()
      if (
        (l &&
          (o.push(l),
          (n += (r = l?.byteLength) !== null && r !== void 0 ? r : 0)),
        n >= t)
      )
        break
      i = d
    }
    s.releaseLock()
    let a = new Uint8Array(Math.min(t, n)),
      c = 0
    for (let d of o) {
      if (d.byteLength > a.byteLength - c) {
        a.set(d.subarray(0, a.byteLength - c), c)
        break
      } else a.set(d, c)
      c += d.length
    }
    return a
  }
  Ei.headStream = XT
})
var ug = h((Si) => {
  'use strict'
  Object.defineProperty(Si, '__esModule', { value: !0 })
  Si.headStream = void 0
  var QT = require('stream'),
    ZT = lg(),
    eI = wt(),
    tI = (e, t) =>
      (0, eI.isReadableStream)(e)
        ? (0, ZT.headStream)(e, t)
        : new Promise((r, n) => {
            let o = new $d()
            ;(o.limit = t),
              e.pipe(o),
              e.on('error', (s) => {
                o.end(), n(s)
              }),
              o.on('error', n),
              o.on('finish', function () {
                let s = new Uint8Array(Buffer.concat(this.buffers))
                r(s)
              })
          })
  Si.headStream = tI
  var $d = class extends QT.Writable {
    constructor() {
      super(...arguments),
        (this.buffers = []),
        (this.limit = 1 / 0),
        (this.bytesBuffered = 0)
    }
    _write(t, r, n) {
      var o
      if (
        (this.buffers.push(t),
        (this.bytesBuffered +=
          (o = t.byteLength) !== null && o !== void 0 ? o : 0),
        this.bytesBuffered >= this.limit)
      ) {
        let s = this.bytesBuffered - this.limit,
          i = this.buffers[this.buffers.length - 1]
        ;(this.buffers[this.buffers.length - 1] = i.subarray(
          0,
          i.byteLength - s
        )),
          this.emit('finish')
      }
      n()
    }
  }
})
var gg = h((A3, mg) => {
  var wi = Object.defineProperty,
    rI = Object.getOwnPropertyDescriptor,
    nI = Object.getOwnPropertyNames,
    oI = Object.prototype.hasOwnProperty,
    Bd = (e, t) => wi(e, 'name', { value: t, configurable: !0 }),
    sI = (e, t) => {
      for (var r in t) wi(e, r, { get: t[r], enumerable: !0 })
    },
    iI = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of nI(t))
          !oI.call(e, o) &&
            o !== r &&
            wi(e, o, {
              get: () => t[o],
              enumerable: !(n = rI(t, o)) || n.enumerable,
            })
      return e
    },
    aI = (e) => iI(wi({}, '__esModule', { value: !0 }), e),
    pg = {}
  sI(pg, { escapeUri: () => fg, escapeUriPath: () => dI })
  mg.exports = aI(pg)
  var fg = Bd(
      (e) => encodeURIComponent(e).replace(/[!'()*]/g, cI),
      'escapeUri'
    ),
    cI = Bd(
      (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
      'hexEncode'
    ),
    dI = Bd((e) => e.split('/').map(fg).join('/'), 'escapeUriPath')
})
var vg = h((x3, yg) => {
  var bi = Object.defineProperty,
    lI = Object.getOwnPropertyDescriptor,
    uI = Object.getOwnPropertyNames,
    pI = Object.prototype.hasOwnProperty,
    fI = (e, t) => bi(e, 'name', { value: t, configurable: !0 }),
    mI = (e, t) => {
      for (var r in t) bi(e, r, { get: t[r], enumerable: !0 })
    },
    gI = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of uI(t))
          !pI.call(e, o) &&
            o !== r &&
            bi(e, o, {
              get: () => t[o],
              enumerable: !(n = lI(t, o)) || n.enumerable,
            })
      return e
    },
    hI = (e) => gI(bi({}, '__esModule', { value: !0 }), e),
    hg = {}
  mI(hg, { buildQueryString: () => _g })
  yg.exports = hI(hg)
  var Vd = gg()
  function _g(e) {
    let t = []
    for (let r of Object.keys(e).sort()) {
      let n = e[r]
      if (((r = (0, Vd.escapeUri)(r)), Array.isArray(n)))
        for (let o = 0, s = n.length; o < s; o++)
          t.push(`${r}=${(0, Vd.escapeUri)(n[o])}`)
      else {
        let o = r
        ;(n || typeof n == 'string') && (o += `=${(0, Vd.escapeUri)(n)}`),
          t.push(o)
      }
    }
    return t.join('&')
  }
  fI(_g, 'buildQueryString')
})
var Xt = h((T3, Dg) => {
  var _I = Object.create,
    Fo = Object.defineProperty,
    yI = Object.getOwnPropertyDescriptor,
    vI = Object.getOwnPropertyNames,
    EI = Object.getPrototypeOf,
    SI = Object.prototype.hasOwnProperty,
    H = (e, t) => Fo(e, 'name', { value: t, configurable: !0 }),
    wI = (e, t) => {
      for (var r in t) Fo(e, r, { get: t[r], enumerable: !0 })
    },
    Pg = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of vI(t))
          !SI.call(e, o) &&
            o !== r &&
            Fo(e, o, {
              get: () => t[o],
              enumerable: !(n = yI(t, o)) || n.enumerable,
            })
      return e
    },
    bI = (e, t, r) => (
      (r = e != null ? _I(EI(e)) : {}),
      Pg(
        t || !e || !e.__esModule
          ? Fo(r, 'default', { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    PI = (e) => Pg(Fo({}, '__esModule', { value: !0 }), e),
    Rg = {}
  wI(Rg, {
    DEFAULT_REQUEST_TIMEOUT: () => Ig,
    NodeHttp2Handler: () => kI,
    NodeHttpHandler: () => TI,
    streamCollector: () => UI,
  })
  Dg.exports = PI(Rg)
  var Cg = X(),
    Og = vg(),
    Gd = require('http'),
    zd = require('https'),
    RI = ['ECONNRESET', 'EPIPE', 'ETIMEDOUT'],
    Ag = H((e) => {
      let t = {}
      for (let r of Object.keys(e)) {
        let n = e[r]
        t[r] = Array.isArray(n) ? n.join(',') : n
      }
      return t
    }, 'getTransformedHeaders'),
    he = {
      setTimeout: (e, t) => setTimeout(e, t),
      clearTimeout: (e) => clearTimeout(e),
    },
    Eg = 1e3,
    CI = H((e, t, r = 0) => {
      if (!r) return -1
      let n = H((o) => {
        let s = he.setTimeout(() => {
            e.destroy(),
              t(
                Object.assign(
                  new Error(
                    `Socket timed out without establishing a connection within ${r} ms`
                  ),
                  { name: 'TimeoutError' }
                )
              )
          }, r - o),
          i = H((a) => {
            a?.connecting
              ? a.on('connect', () => {
                  he.clearTimeout(s)
                })
              : he.clearTimeout(s)
          }, 'doWithSocket')
        e.socket ? i(e.socket) : e.on('socket', i)
      }, 'registerTimeout')
      return r < 2e3 ? (n(0), 0) : he.setTimeout(n.bind(null, Eg), Eg)
    }, 'setConnectionTimeout'),
    OI = 3e3,
    AI = H((e, { keepAlive: t, keepAliveMsecs: r }, n = OI) => {
      if (t !== !0) return -1
      let o = H(() => {
        e.socket
          ? e.socket.setKeepAlive(t, r || 0)
          : e.on('socket', (s) => {
              s.setKeepAlive(t, r || 0)
            })
      }, 'registerListener')
      return n === 0 ? (o(), 0) : he.setTimeout(o, n)
    }, 'setSocketKeepAlive'),
    Sg = 3e3,
    xI = H((e, t, r = Ig) => {
      let n = H((o) => {
        let s = r - o,
          i = H(() => {
            e.destroy(),
              t(
                Object.assign(new Error(`Connection timed out after ${r} ms`), {
                  name: 'TimeoutError',
                })
              )
          }, 'onTimeout')
        e.socket
          ? (e.socket.setTimeout(s, i),
            e.on('close', () => e.socket?.removeListener('timeout', i)))
          : e.setTimeout(s, i)
      }, 'registerTimeout')
      return 0 < r && r < 6e3
        ? (n(0), 0)
        : he.setTimeout(n.bind(null, r === 0 ? 0 : Sg), Sg)
    }, 'setSocketTimeout'),
    xg = require('stream'),
    wg = 6e3
  async function Wd(e, t, r = wg) {
    let n = t.headers ?? {},
      o = n.Expect || n.expect,
      s = -1,
      i = !0
    o === '100-continue' &&
      (i = await Promise.race([
        new Promise((a) => {
          s = Number(he.setTimeout(() => a(!0), Math.max(wg, r)))
        }),
        new Promise((a) => {
          e.on('continue', () => {
            he.clearTimeout(s), a(!0)
          }),
            e.on('response', () => {
              he.clearTimeout(s), a(!1)
            }),
            e.on('error', () => {
              he.clearTimeout(s), a(!1)
            })
        }),
      ])),
      i && Tg(e, t.body)
  }
  H(Wd, 'writeRequestBody')
  function Tg(e, t) {
    if (t instanceof xg.Readable) {
      t.pipe(e)
      return
    }
    if (t) {
      if (Buffer.isBuffer(t) || typeof t == 'string') {
        e.end(t)
        return
      }
      let r = t
      if (
        typeof r == 'object' &&
        r.buffer &&
        typeof r.byteOffset == 'number' &&
        typeof r.byteLength == 'number'
      ) {
        e.end(Buffer.from(r.buffer, r.byteOffset, r.byteLength))
        return
      }
      e.end(Buffer.from(t))
      return
    }
    e.end()
  }
  H(Tg, 'writeBody')
  var Ig = 0,
    bt,
    TI =
      ((bt = class {
        constructor(t) {
          ;(this.socketWarningTimestamp = 0),
            (this.metadata = { handlerProtocol: 'http/1.1' }),
            (this.configProvider = new Promise((r, n) => {
              typeof t == 'function'
                ? t()
                    .then((o) => {
                      r(this.resolveDefaultConfig(o))
                    })
                    .catch(n)
                : r(this.resolveDefaultConfig(t))
            }))
        }
        static create(t) {
          return typeof t?.handle == 'function' ? t : new bt(t)
        }
        static checkSocketUsage(t, r, n = console) {
          let { sockets: o, requests: s, maxSockets: i } = t
          if (typeof i != 'number' || i === 1 / 0 || Date.now() - 15e3 < r)
            return r
          if (o && s)
            for (let c in o) {
              let d = o[c]?.length ?? 0,
                l = s[c]?.length ?? 0
              if (d >= i && l >= 2 * i)
                return (
                  n?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${d} and ${l} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`),
                  Date.now()
                )
            }
          return r
        }
        resolveDefaultConfig(t) {
          let {
              requestTimeout: r,
              connectionTimeout: n,
              socketTimeout: o,
              socketAcquisitionWarningTimeout: s,
              httpAgent: i,
              httpsAgent: a,
            } = t || {},
            c = !0,
            d = 50
          return {
            connectionTimeout: n,
            requestTimeout: r ?? o,
            socketAcquisitionWarningTimeout: s,
            httpAgent:
              i instanceof Gd.Agent || typeof i?.destroy == 'function'
                ? i
                : new Gd.Agent({
                    keepAlive: c,
                    maxSockets: d,
                    ...i,
                  }),
            httpsAgent:
              a instanceof zd.Agent || typeof a?.destroy == 'function'
                ? a
                : new zd.Agent({
                    keepAlive: c,
                    maxSockets: d,
                    ...a,
                  }),
            logger: console,
          }
        }
        destroy() {
          this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy()
        }
        async handle(t, { abortSignal: r } = {}) {
          return (
            this.config || (this.config = await this.configProvider),
            new Promise((n, o) => {
              let s,
                i = [],
                a = H(async (O) => {
                  await s, i.forEach(he.clearTimeout), n(O)
                }, 'resolve'),
                c = H(async (O) => {
                  await s, i.forEach(he.clearTimeout), o(O)
                }, 'reject')
              if (!this.config)
                throw new Error(
                  'Node HTTP request handler config is not resolved'
                )
              if (r?.aborted) {
                let O = new Error('Request aborted')
                ;(O.name = 'AbortError'), c(O)
                return
              }
              let d = t.protocol === 'https:',
                l = d ? this.config.httpsAgent : this.config.httpAgent
              i.push(
                he.setTimeout(
                  () => {
                    this.socketWarningTimestamp = bt.checkSocketUsage(
                      l,
                      this.socketWarningTimestamp,
                      this.config.logger
                    )
                  },
                  this.config.socketAcquisitionWarningTimeout ??
                    (this.config.requestTimeout ?? 2e3) +
                      (this.config.connectionTimeout ?? 1e3)
                )
              )
              let u = (0, Og.buildQueryString)(t.query || {}),
                f
              if (t.username != null || t.password != null) {
                let O = t.username ?? '',
                  T = t.password ?? ''
                f = `${O}:${T}`
              }
              let g = t.path
              u && (g += `?${u}`), t.fragment && (g += `#${t.fragment}`)
              let _ = t.hostname ?? ''
              _[0] === '[' && _.endsWith(']')
                ? (_ = t.hostname.slice(1, -1))
                : (_ = t.hostname)
              let w = {
                  headers: t.headers,
                  host: _,
                  method: t.method,
                  path: g,
                  port: t.port,
                  agent: l,
                  auth: f,
                },
                R = (d ? zd.request : Gd.request)(w, (O) => {
                  let T = new Cg.HttpResponse({
                    statusCode: O.statusCode || -1,
                    reason: O.statusMessage,
                    headers: Ag(O.headers),
                    body: O,
                  })
                  a({ response: T })
                })
              if (
                (R.on('error', (O) => {
                  RI.includes(O.code)
                    ? c(
                        Object.assign(O, {
                          name: 'TimeoutError',
                        })
                      )
                    : c(O)
                }),
                r)
              ) {
                let O = H(() => {
                  R.destroy()
                  let T = new Error('Request aborted')
                  ;(T.name = 'AbortError'), c(T)
                }, 'onAbort')
                if (typeof r.addEventListener == 'function') {
                  let T = r
                  T.addEventListener('abort', O, {
                    once: !0,
                  }),
                    R.once('close', () => T.removeEventListener('abort', O))
                } else r.onabort = O
              }
              i.push(CI(R, c, this.config.connectionTimeout)),
                i.push(xI(R, c, this.config.requestTimeout))
              let x = w.agent
              typeof x == 'object' &&
                'keepAlive' in x &&
                i.push(
                  AI(R, {
                    keepAlive: x.keepAlive,
                    keepAliveMsecs: x.keepAliveMsecs,
                  })
                ),
                (s = Wd(R, t, this.config.requestTimeout).catch(
                  (O) => (i.forEach(he.clearTimeout), o(O))
                ))
            })
          )
        }
        updateHttpClientConfig(t, r) {
          ;(this.config = void 0),
            (this.configProvider = this.configProvider.then((n) => ({
              ...n,
              [t]: r,
            })))
        }
        httpHandlerConfigs() {
          return this.config ?? {}
        }
      }),
      H(bt, 'NodeHttpHandler'),
      bt),
    bg = require('http2'),
    II = bI(require('http2')),
    zr,
    NI =
      ((zr = class {
        constructor(t) {
          ;(this.sessions = []), (this.sessions = t ?? [])
        }
        poll() {
          if (this.sessions.length > 0) return this.sessions.shift()
        }
        offerLast(t) {
          this.sessions.push(t)
        }
        contains(t) {
          return this.sessions.includes(t)
        }
        remove(t) {
          this.sessions = this.sessions.filter((r) => r !== t)
        }
        [Symbol.iterator]() {
          return this.sessions[Symbol.iterator]()
        }
        destroy(t) {
          for (let r of this.sessions) r === t && (r.destroyed || r.destroy())
        }
      }),
      H(zr, 'NodeHttp2ConnectionPool'),
      zr),
    Wr,
    DI =
      ((Wr = class {
        constructor(t) {
          if (
            ((this.sessionCache = new Map()),
            (this.config = t),
            this.config.maxConcurrency && this.config.maxConcurrency <= 0)
          )
            throw new RangeError('maxConcurrency must be greater than zero.')
        }
        lease(t, r) {
          let n = this.getUrlString(t),
            o = this.sessionCache.get(n)
          if (o) {
            let c = o.poll()
            if (c && !this.config.disableConcurrency) return c
          }
          let s = II.default.connect(n)
          this.config.maxConcurrency &&
            s.settings(
              {
                maxConcurrentStreams: this.config.maxConcurrency,
              },
              (c) => {
                if (c)
                  throw new Error(
                    'Fail to set maxConcurrentStreams to ' +
                      this.config.maxConcurrency +
                      'when creating new session for ' +
                      t.destination.toString()
                  )
              }
            ),
            s.unref()
          let i = H(() => {
            s.destroy(), this.deleteSession(n, s)
          }, 'destroySessionCb')
          s.on('goaway', i),
            s.on('error', i),
            s.on('frameError', i),
            s.on('close', () => this.deleteSession(n, s)),
            r.requestTimeout && s.setTimeout(r.requestTimeout, i)
          let a = this.sessionCache.get(n) || new NI()
          return a.offerLast(s), this.sessionCache.set(n, a), s
        }
        deleteSession(t, r) {
          let n = this.sessionCache.get(t)
          n && n.contains(r) && (n.remove(r), this.sessionCache.set(t, n))
        }
        release(t, r) {
          let n = this.getUrlString(t)
          this.sessionCache.get(n)?.offerLast(r)
        }
        destroy() {
          for (let [t, r] of this.sessionCache) {
            for (let n of r) n.destroyed || n.destroy(), r.remove(n)
            this.sessionCache.delete(t)
          }
        }
        setMaxConcurrentStreams(t) {
          if (t && t <= 0)
            throw new RangeError(
              'maxConcurrentStreams must be greater than zero.'
            )
          this.config.maxConcurrency = t
        }
        setDisableConcurrentStreams(t) {
          this.config.disableConcurrency = t
        }
        getUrlString(t) {
          return t.destination.toString()
        }
      }),
      H(Wr, 'NodeHttp2ConnectionManager'),
      Wr),
    Jt,
    kI =
      ((Jt = class {
        constructor(t) {
          ;(this.metadata = { handlerProtocol: 'h2' }),
            (this.connectionManager = new DI({})),
            (this.configProvider = new Promise((r, n) => {
              typeof t == 'function'
                ? t()
                    .then((o) => {
                      r(o || {})
                    })
                    .catch(n)
                : r(t || {})
            }))
        }
        static create(t) {
          return typeof t?.handle == 'function' ? t : new Jt(t)
        }
        destroy() {
          this.connectionManager.destroy()
        }
        async handle(t, { abortSignal: r } = {}) {
          this.config ||
            ((this.config = await this.configProvider),
            this.connectionManager.setDisableConcurrentStreams(
              this.config.disableConcurrentStreams || !1
            ),
            this.config.maxConcurrentStreams &&
              this.connectionManager.setMaxConcurrentStreams(
                this.config.maxConcurrentStreams
              ))
          let { requestTimeout: n, disableConcurrentStreams: o } = this.config
          return new Promise((s, i) => {
            let a = !1,
              c,
              d = H(async (L) => {
                await c, s(L)
              }, 'resolve'),
              l = H(async (L) => {
                await c, i(L)
              }, 'reject')
            if (r?.aborted) {
              a = !0
              let L = new Error('Request aborted')
              ;(L.name = 'AbortError'), l(L)
              return
            }
            let { hostname: u, method: f, port: g, protocol: _, query: w } = t,
              S = ''
            if (t.username != null || t.password != null) {
              let L = t.username ?? '',
                Me = t.password ?? ''
              S = `${L}:${Me}@`
            }
            let R = `${_}//${S}${u}${g ? `:${g}` : ''}`,
              x = { destination: new URL(R) },
              O = this.connectionManager.lease(x, {
                requestTimeout: this.config?.sessionTimeout,
                disableConcurrentStreams: o || !1,
              }),
              T = H((L) => {
                o && this.destroySession(O), (a = !0), l(L)
              }, 'rejectWithDestroy'),
              le = (0, Og.buildQueryString)(w || {}),
              $e = t.path
            le && ($e += `?${le}`), t.fragment && ($e += `#${t.fragment}`)
            let ue = O.request({
              ...t.headers,
              [bg.constants.HTTP2_HEADER_PATH]: $e,
              [bg.constants.HTTP2_HEADER_METHOD]: f,
            })
            if (
              (O.ref(),
              ue.on('response', (L) => {
                let Me = new Cg.HttpResponse({
                  statusCode: L[':status'] || -1,
                  headers: Ag(L),
                  body: ue,
                })
                ;(a = !0),
                  d({ response: Me }),
                  o && (O.close(), this.connectionManager.deleteSession(R, O))
              }),
              n &&
                ue.setTimeout(n, () => {
                  ue.close()
                  let L = new Error(
                    `Stream timed out because of no activity for ${n} ms`
                  )
                  ;(L.name = 'TimeoutError'), T(L)
                }),
              r)
            ) {
              let L = H(() => {
                ue.close()
                let Me = new Error('Request aborted')
                ;(Me.name = 'AbortError'), T(Me)
              }, 'onAbort')
              if (typeof r.addEventListener == 'function') {
                let Me = r
                Me.addEventListener('abort', L, { once: !0 }),
                  ue.once('close', () => Me.removeEventListener('abort', L))
              } else r.onabort = L
            }
            ue.on('frameError', (L, Me, xA) => {
              T(
                new Error(
                  `Frame type id ${L} in stream id ${xA} has failed with code ${Me}.`
                )
              )
            }),
              ue.on('error', T),
              ue.on('aborted', () => {
                T(
                  new Error(
                    `HTTP/2 stream is abnormally aborted in mid-communication with result code ${ue.rstCode}.`
                  )
                )
              }),
              ue.on('close', () => {
                O.unref(),
                  o && O.destroy(),
                  a ||
                    T(
                      new Error(
                        'Unexpected error: http2 request did not get a response'
                      )
                    )
              }),
              (c = Wd(ue, t, n))
          })
        }
        updateHttpClientConfig(t, r) {
          ;(this.config = void 0),
            (this.configProvider = this.configProvider.then((n) => ({
              ...n,
              [t]: r,
            })))
        }
        httpHandlerConfigs() {
          return this.config ?? {}
        }
        destroySession(t) {
          t.destroyed || t.destroy()
        }
      }),
      H(Jt, 'NodeHttp2Handler'),
      Jt),
    Kr,
    MI =
      ((Kr = class extends xg.Writable {
        constructor() {
          super(...arguments), (this.bufferedBytes = [])
        }
        _write(t, r, n) {
          this.bufferedBytes.push(t), n()
        }
      }),
      H(Kr, 'Collector'),
      Kr),
    UI = H(
      (e) =>
        FI(e)
          ? Ng(e)
          : new Promise((t, r) => {
              let n = new MI()
              e.pipe(n),
                e.on('error', (o) => {
                  n.end(), r(o)
                }),
                n.on('error', r),
                n.on('finish', function () {
                  let o = new Uint8Array(Buffer.concat(this.bufferedBytes))
                  t(o)
                })
            }),
      'streamCollector'
    ),
    FI = H(
      (e) => typeof ReadableStream == 'function' && e instanceof ReadableStream,
      'isReadableStreamInstance'
    )
  async function Ng(e) {
    let t = [],
      r = e.getReader(),
      n = !1,
      o = 0
    for (; !n; ) {
      let { done: a, value: c } = await r.read()
      c && (t.push(c), (o += c.length)), (n = a)
    }
    let s = new Uint8Array(o),
      i = 0
    for (let a of t) s.set(a, i), (i += a.length)
    return s
  }
  H(Ng, 'collectReadableStream')
})
var Fg = h((I3, Ug) => {
  var Pi = Object.defineProperty,
    LI = Object.getOwnPropertyDescriptor,
    jI = Object.getOwnPropertyNames,
    HI = Object.prototype.hasOwnProperty,
    Kd = (e, t) => Pi(e, 'name', { value: t, configurable: !0 }),
    qI = (e, t) => {
      for (var r in t) Pi(e, r, { get: t[r], enumerable: !0 })
    },
    $I = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of jI(t))
          !HI.call(e, o) &&
            o !== r &&
            Pi(e, o, {
              get: () => t[o],
              enumerable: !(n = LI(t, o)) || n.enumerable,
            })
      return e
    },
    BI = (e) => $I(Pi({}, '__esModule', { value: !0 }), e),
    kg = {}
  qI(kg, { escapeUri: () => Mg, escapeUriPath: () => GI })
  Ug.exports = BI(kg)
  var Mg = Kd(
      (e) => encodeURIComponent(e).replace(/[!'()*]/g, VI),
      'escapeUri'
    ),
    VI = Kd(
      (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
      'hexEncode'
    ),
    GI = Kd((e) => e.split('/').map(Mg).join('/'), 'escapeUriPath')
})
var qg = h((N3, Hg) => {
  var Ri = Object.defineProperty,
    zI = Object.getOwnPropertyDescriptor,
    WI = Object.getOwnPropertyNames,
    KI = Object.prototype.hasOwnProperty,
    YI = (e, t) => Ri(e, 'name', { value: t, configurable: !0 }),
    JI = (e, t) => {
      for (var r in t) Ri(e, r, { get: t[r], enumerable: !0 })
    },
    XI = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of WI(t))
          !KI.call(e, o) &&
            o !== r &&
            Ri(e, o, {
              get: () => t[o],
              enumerable: !(n = zI(t, o)) || n.enumerable,
            })
      return e
    },
    QI = (e) => XI(Ri({}, '__esModule', { value: !0 }), e),
    Lg = {}
  JI(Lg, { buildQueryString: () => jg })
  Hg.exports = QI(Lg)
  var Yd = Fg()
  function jg(e) {
    let t = []
    for (let r of Object.keys(e).sort()) {
      let n = e[r]
      if (((r = (0, Yd.escapeUri)(r)), Array.isArray(n)))
        for (let o = 0, s = n.length; o < s; o++)
          t.push(`${r}=${(0, Yd.escapeUri)(n[o])}`)
      else {
        let o = r
        ;(n || typeof n == 'string') && (o += `=${(0, Yd.escapeUri)(n)}`),
          t.push(o)
      }
    }
    return t.join('&')
  }
  YI(jg, 'buildQueryString')
})
var $g = h((Ci) => {
  'use strict'
  Object.defineProperty(Ci, '__esModule', { value: !0 })
  Ci.fromBase64 = void 0
  var ZI = ee(),
    eN = /^[A-Za-z0-9+/]*={0,2}$/,
    tN = (e) => {
      if ((e.length * 3) % 4 !== 0)
        throw new TypeError('Incorrect padding on base64 string.')
      if (!eN.exec(e)) throw new TypeError('Invalid base64 string.')
      let t = (0, ZI.fromString)(e, 'base64')
      return new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
    }
  Ci.fromBase64 = tN
})
var Wg = h((k3, zg) => {
  var Oi = Object.defineProperty,
    rN = Object.getOwnPropertyDescriptor,
    nN = Object.getOwnPropertyNames,
    oN = Object.prototype.hasOwnProperty,
    Jd = (e, t) => Oi(e, 'name', { value: t, configurable: !0 }),
    sN = (e, t) => {
      for (var r in t) Oi(e, r, { get: t[r], enumerable: !0 })
    },
    iN = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of nN(t))
          !oN.call(e, o) &&
            o !== r &&
            Oi(e, o, {
              get: () => t[o],
              enumerable: !(n = rN(t, o)) || n.enumerable,
            })
      return e
    },
    aN = (e) => iN(Oi({}, '__esModule', { value: !0 }), e),
    Bg = {}
  sN(Bg, { fromUtf8: () => Gg, toUint8Array: () => cN, toUtf8: () => dN })
  zg.exports = aN(Bg)
  var Vg = ee(),
    Gg = Jd((e) => {
      let t = (0, Vg.fromString)(e, 'utf8')
      return new Uint8Array(
        t.buffer,
        t.byteOffset,
        t.byteLength / Uint8Array.BYTES_PER_ELEMENT
      )
    }, 'fromUtf8'),
    cN = Jd(
      (e) =>
        typeof e == 'string'
          ? Gg(e)
          : ArrayBuffer.isView(e)
            ? new Uint8Array(
                e.buffer,
                e.byteOffset,
                e.byteLength / Uint8Array.BYTES_PER_ELEMENT
              )
            : new Uint8Array(e),
      'toUint8Array'
    ),
    dN = Jd((e) => {
      if (typeof e == 'string') return e
      if (
        typeof e != 'object' ||
        typeof e.byteOffset != 'number' ||
        typeof e.byteLength != 'number'
      )
        throw new Error(
          '@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.'
        )
      return (0, Vg.fromArrayBuffer)(
        e.buffer,
        e.byteOffset,
        e.byteLength
      ).toString('utf8')
    }, 'toUtf8')
})
var Kg = h((Ai) => {
  'use strict'
  Object.defineProperty(Ai, '__esModule', { value: !0 })
  Ai.toBase64 = void 0
  var lN = ee(),
    uN = Wg(),
    pN = (e) => {
      let t
      if (
        (typeof e == 'string' ? (t = (0, uN.fromUtf8)(e)) : (t = e),
        typeof t != 'object' ||
          typeof t.byteOffset != 'number' ||
          typeof t.byteLength != 'number')
      )
        throw new Error(
          '@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.'
        )
      return (0, lN.fromArrayBuffer)(
        t.buffer,
        t.byteOffset,
        t.byteLength
      ).toString('base64')
    }
  Ai.toBase64 = pN
})
var Xg = h((U3, xi) => {
  var Yg = Object.defineProperty,
    fN = Object.getOwnPropertyDescriptor,
    mN = Object.getOwnPropertyNames,
    gN = Object.prototype.hasOwnProperty,
    Xd = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of mN(t))
          !gN.call(e, o) &&
            o !== r &&
            Yg(e, o, {
              get: () => t[o],
              enumerable: !(n = fN(t, o)) || n.enumerable,
            })
      return e
    },
    Jg = (e, t, r) => (Xd(e, t, 'default'), r && Xd(r, t, 'default')),
    hN = (e) => Xd(Yg({}, '__esModule', { value: !0 }), e),
    Qd = {}
  xi.exports = hN(Qd)
  Jg(Qd, $g(), xi.exports)
  Jg(Qd, Kg(), xi.exports)
})
var sh = h((F3, oh) => {
  var Ii = Object.defineProperty,
    _N = Object.getOwnPropertyDescriptor,
    yN = Object.getOwnPropertyNames,
    vN = Object.prototype.hasOwnProperty,
    Ve = (e, t) => Ii(e, 'name', { value: t, configurable: !0 }),
    EN = (e, t) => {
      for (var r in t) Ii(e, r, { get: t[r], enumerable: !0 })
    },
    SN = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of yN(t))
          !vN.call(e, o) &&
            o !== r &&
            Ii(e, o, {
              get: () => t[o],
              enumerable: !(n = _N(t, o)) || n.enumerable,
            })
      return e
    },
    wN = (e) => SN(Ii({}, '__esModule', { value: !0 }), e),
    Zg = {}
  EN(Zg, {
    FetchHttpHandler: () => PN,
    keepAliveSupport: () => Ti,
    streamCollector: () => CN,
  })
  oh.exports = wN(Zg)
  var Qg = X(),
    bN = qg()
  function Zd(e, t) {
    return new Request(e, t)
  }
  Ve(Zd, 'createRequest')
  function eh(e = 0) {
    return new Promise((t, r) => {
      e &&
        setTimeout(() => {
          let n = new Error(`Request did not complete within ${e} ms`)
          ;(n.name = 'TimeoutError'), r(n)
        }, e)
    })
  }
  Ve(eh, 'requestTimeout')
  var Ti = { supported: void 0 },
    Qt,
    PN =
      ((Qt = class {
        static create(t) {
          return typeof t?.handle == 'function' ? t : new Qt(t)
        }
        constructor(t) {
          typeof t == 'function'
            ? (this.configProvider = t().then((r) => r || {}))
            : ((this.config = t ?? {}),
              (this.configProvider = Promise.resolve(this.config))),
            Ti.supported === void 0 &&
              (Ti.supported =
                typeof Request < 'u' && 'keepalive' in Zd('https://[::1]'))
        }
        destroy() {}
        async handle(t, { abortSignal: r } = {}) {
          this.config || (this.config = await this.configProvider)
          let n = this.config.requestTimeout,
            o = this.config.keepAlive === !0,
            s = this.config.credentials
          if (r?.aborted) {
            let R = new Error('Request aborted')
            return (R.name = 'AbortError'), Promise.reject(R)
          }
          let i = t.path,
            a = (0, bN.buildQueryString)(t.query || {})
          a && (i += `?${a}`), t.fragment && (i += `#${t.fragment}`)
          let c = ''
          if (t.username != null || t.password != null) {
            let R = t.username ?? '',
              x = t.password ?? ''
            c = `${R}:${x}@`
          }
          let { port: d, method: l } = t,
            u = `${t.protocol}//${c}${t.hostname}${d ? `:${d}` : ''}${i}`,
            f = l === 'GET' || l === 'HEAD' ? void 0 : t.body,
            g = {
              body: f,
              headers: new Headers(t.headers),
              method: l,
              credentials: s,
            }
          this.config?.cache && (g.cache = this.config.cache),
            f && (g.duplex = 'half'),
            typeof AbortController < 'u' && (g.signal = r),
            Ti.supported && (g.keepalive = o),
            typeof this.config.requestInit == 'function' &&
              Object.assign(g, this.config.requestInit(t))
          let _ = Ve(() => {}, 'removeSignalEventListener'),
            w = Zd(u, g),
            S = [
              fetch(w).then((R) => {
                let x = R.headers,
                  O = {}
                for (let le of x.entries()) O[le[0]] = le[1]
                return R.body != null
                  ? {
                      response: new Qg.HttpResponse({
                        headers: O,
                        reason: R.statusText,
                        statusCode: R.status,
                        body: R.body,
                      }),
                    }
                  : R.blob().then((le) => ({
                      response: new Qg.HttpResponse({
                        headers: O,
                        reason: R.statusText,
                        statusCode: R.status,
                        body: le,
                      }),
                    }))
              }),
              eh(n),
            ]
          return (
            r &&
              S.push(
                new Promise((R, x) => {
                  let O = Ve(() => {
                    let T = new Error('Request aborted')
                    ;(T.name = 'AbortError'), x(T)
                  }, 'onAbort')
                  if (typeof r.addEventListener == 'function') {
                    let T = r
                    T.addEventListener('abort', O, {
                      once: !0,
                    }),
                      (_ = Ve(
                        () => T.removeEventListener('abort', O),
                        'removeSignalEventListener'
                      ))
                  } else r.onabort = O
                })
              ),
            Promise.race(S).finally(_)
          )
        }
        updateHttpClientConfig(t, r) {
          ;(this.config = void 0),
            (this.configProvider = this.configProvider.then(
              (n) => ((n[t] = r), n)
            ))
        }
        httpHandlerConfigs() {
          return this.config ?? {}
        }
      }),
      Ve(Qt, 'FetchHttpHandler'),
      Qt),
    RN = Xg(),
    CN = Ve(
      async (e) =>
        (typeof Blob == 'function' && e instanceof Blob) ||
        e.constructor?.name === 'Blob'
          ? Blob.prototype.arrayBuffer !== void 0
            ? new Uint8Array(await e.arrayBuffer())
            : th(e)
          : rh(e),
      'streamCollector'
    )
  async function th(e) {
    let t = await nh(e),
      r = (0, RN.fromBase64)(t)
    return new Uint8Array(r)
  }
  Ve(th, 'collectBlob')
  async function rh(e) {
    let t = [],
      r = e.getReader(),
      n = !1,
      o = 0
    for (; !n; ) {
      let { done: a, value: c } = await r.read()
      c && (t.push(c), (o += c.length)), (n = a)
    }
    let s = new Uint8Array(o),
      i = 0
    for (let a of t) s.set(a, i), (i += a.length)
    return s
  }
  Ve(rh, 'collectStream')
  function nh(e) {
    return new Promise((t, r) => {
      let n = new FileReader()
      ;(n.onloadend = () => {
        if (n.readyState !== 2) return r(new Error('Reader aborted too early'))
        let o = n.result ?? '',
          s = o.indexOf(','),
          i = s > -1 ? s + 1 : o.length
        t(o.substring(i))
      }),
        (n.onabort = () => r(new Error('Read aborted'))),
        (n.onerror = () => r(n.error)),
        n.readAsDataURL(e)
    })
  }
  Ve(nh, 'readToBase64')
})
var ph = h((L3, uh) => {
  var Ni = Object.defineProperty,
    ON = Object.getOwnPropertyDescriptor,
    AN = Object.getOwnPropertyNames,
    xN = Object.prototype.hasOwnProperty,
    ih = (e, t) => Ni(e, 'name', { value: t, configurable: !0 }),
    TN = (e, t) => {
      for (var r in t) Ni(e, r, { get: t[r], enumerable: !0 })
    },
    IN = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of AN(t))
          !xN.call(e, o) &&
            o !== r &&
            Ni(e, o, {
              get: () => t[o],
              enumerable: !(n = ON(t, o)) || n.enumerable,
            })
      return e
    },
    NN = (e) => IN(Ni({}, '__esModule', { value: !0 }), e),
    ah = {}
  TN(ah, { fromHex: () => dh, toHex: () => lh })
  uh.exports = NN(ah)
  var ch = {},
    el = {}
  for (let e = 0; e < 256; e++) {
    let t = e.toString(16).toLowerCase()
    t.length === 1 && (t = `0${t}`), (ch[e] = t), (el[t] = e)
  }
  function dh(e) {
    if (e.length % 2 !== 0)
      throw new Error('Hex encoded strings must have an even number length')
    let t = new Uint8Array(e.length / 2)
    for (let r = 0; r < e.length; r += 2) {
      let n = e.slice(r, r + 2).toLowerCase()
      if (n in el) t[r / 2] = el[n]
      else
        throw new Error(
          `Cannot decode unrecognized sequence ${n} as hexadecimal`
        )
    }
    return t
  }
  ih(dh, 'fromHex')
  function lh(e) {
    let t = ''
    for (let r = 0; r < e.byteLength; r++) t += ch[e[r]]
    return t
  }
  ih(lh, 'toHex')
})
var hh = h((Di) => {
  'use strict'
  Object.defineProperty(Di, '__esModule', { value: !0 })
  Di.sdkStreamMixin = void 0
  var DN = sh(),
    kN = Uo(),
    MN = ph(),
    UN = di(),
    fh = wt(),
    mh = 'The stream has already been transformed.',
    FN = (e) => {
      var t, r
      if (!gh(e) && !(0, fh.isReadableStream)(e)) {
        let i =
          ((r =
            (t = e?.__proto__) === null || t === void 0
              ? void 0
              : t.constructor) === null || r === void 0
            ? void 0
            : r.name) || e
        throw new Error(
          `Unexpected stream implementation, expect Blob or ReadableStream, got ${i}`
        )
      }
      let n = !1,
        o = async () => {
          if (n) throw new Error(mh)
          return (n = !0), await (0, DN.streamCollector)(e)
        },
        s = (i) => {
          if (typeof i.stream != 'function')
            throw new Error(`Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.
If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body`)
          return i.stream()
        }
      return Object.assign(e, {
        transformToByteArray: o,
        transformToString: async (i) => {
          let a = await o()
          if (i === 'base64') return (0, kN.toBase64)(a)
          if (i === 'hex') return (0, MN.toHex)(a)
          if (i === void 0 || i === 'utf8' || i === 'utf-8')
            return (0, UN.toUtf8)(a)
          if (typeof TextDecoder == 'function')
            return new TextDecoder(i).decode(a)
          throw new Error(
            'TextDecoder is not available, please make sure polyfill is provided.'
          )
        },
        transformToWebStream: () => {
          if (n) throw new Error(mh)
          if (((n = !0), gh(e))) return s(e)
          if ((0, fh.isReadableStream)(e)) return e
          throw new Error(`Cannot transform payload to web stream, got ${e}`)
        },
      })
    }
  Di.sdkStreamMixin = FN
  var gh = (e) => typeof Blob == 'function' && e instanceof Blob
})
var yh = h((ki) => {
  'use strict'
  Object.defineProperty(ki, '__esModule', { value: !0 })
  ki.sdkStreamMixin = void 0
  var LN = Xt(),
    jN = ee(),
    tl = require('stream'),
    HN = hh(),
    _h = 'The stream has already been transformed.',
    qN = (e) => {
      var t, r
      if (!(e instanceof tl.Readable))
        try {
          return (0, HN.sdkStreamMixin)(e)
        } catch {
          let i =
            ((r =
              (t = e?.__proto__) === null || t === void 0
                ? void 0
                : t.constructor) === null || r === void 0
              ? void 0
              : r.name) || e
          throw new Error(
            `Unexpected stream implementation, expect Stream.Readable instance, got ${i}`
          )
        }
      let n = !1,
        o = async () => {
          if (n) throw new Error(_h)
          return (n = !0), await (0, LN.streamCollector)(e)
        }
      return Object.assign(e, {
        transformToByteArray: o,
        transformToString: async (s) => {
          let i = await o()
          return s === void 0 || Buffer.isEncoding(s)
            ? (0, jN.fromArrayBuffer)(
                i.buffer,
                i.byteOffset,
                i.byteLength
              ).toString(s)
            : new TextDecoder(s).decode(i)
        },
        transformToWebStream: () => {
          if (n) throw new Error(_h)
          if (e.readableFlowing !== null)
            throw new Error('The stream has been consumed by other callbacks.')
          if (typeof tl.Readable.toWeb != 'function')
            throw new Error(
              'Readable.toWeb() is not supported. Please ensure a polyfill is available.'
            )
          return (n = !0), tl.Readable.toWeb(e)
        },
      })
    }
  ki.sdkStreamMixin = qN
})
var vh = h((Mi) => {
  'use strict'
  Object.defineProperty(Mi, '__esModule', { value: !0 })
  Mi.splitStream = void 0
  async function $N(e) {
    return typeof e.stream == 'function' && (e = e.stream()), e.tee()
  }
  Mi.splitStream = $N
})
var wh = h((Ui) => {
  'use strict'
  Object.defineProperty(Ui, '__esModule', { value: !0 })
  Ui.splitStream = void 0
  var Eh = require('stream'),
    BN = vh(),
    Sh = wt()
  async function VN(e) {
    if ((0, Sh.isReadableStream)(e) || (0, Sh.isBlob)(e))
      return (0, BN.splitStream)(e)
    let t = new Eh.PassThrough(),
      r = new Eh.PassThrough()
    return e.pipe(t), e.pipe(r), [t, r]
  }
  Ui.splitStream = VN
})
var sl = h((B3, ze) => {
  var Fi = Object.defineProperty,
    GN = Object.getOwnPropertyDescriptor,
    zN = Object.getOwnPropertyNames,
    WN = Object.prototype.hasOwnProperty,
    ol = (e, t) => Fi(e, 'name', { value: t, configurable: !0 }),
    KN = (e, t) => {
      for (var r in t) Fi(e, r, { get: t[r], enumerable: !0 })
    },
    rl = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of zN(t))
          !WN.call(e, o) &&
            o !== r &&
            Fi(e, o, {
              get: () => t[o],
              enumerable: !(n = GN(t, o)) || n.enumerable,
            })
      return e
    },
    Pt = (e, t, r) => (rl(e, t, 'default'), r && rl(r, t, 'default')),
    YN = (e) => rl(Fi({}, '__esModule', { value: !0 }), e),
    Ge = {}
  KN(Ge, { Uint8ArrayBlobAdapter: () => nl })
  ze.exports = YN(Ge)
  var bh = Uo(),
    Ph = di()
  function Rh(e, t = 'utf-8') {
    return t === 'base64' ? (0, bh.toBase64)(e) : (0, Ph.toUtf8)(e)
  }
  ol(Rh, 'transformToString')
  function Ch(e, t) {
    return t === 'base64'
      ? nl.mutate((0, bh.fromBase64)(e))
      : nl.mutate((0, Ph.fromUtf8)(e))
  }
  ol(Ch, 'transformFromString')
  var Zt,
    nl =
      ((Zt = class extends Uint8Array {
        static fromString(t, r = 'utf-8') {
          switch (typeof t) {
            case 'string':
              return Ch(t, r)
            default:
              throw new Error(
                `Unsupported conversion from ${typeof t} to Uint8ArrayBlobAdapter.`
              )
          }
        }
        static mutate(t) {
          return Object.setPrototypeOf(t, Zt.prototype), t
        }
        transformToString(t = 'utf-8') {
          return Rh(this, t)
        }
      }),
      ol(Zt, 'Uint8ArrayBlobAdapter'),
      Zt)
  Pt(Ge, Ld(), ze.exports)
  Pt(Ge, rg(), ze.exports)
  Pt(Ge, cg(), ze.exports)
  Pt(Ge, dg(), ze.exports)
  Pt(Ge, ug(), ze.exports)
  Pt(Ge, yh(), ze.exports)
  Pt(Ge, wh(), ze.exports)
  Pt(Ge, wt(), ze.exports)
})
var Li,
  JN,
  Oh = v(() => {
    ;(Li = E(sl())),
      (JN = async (e = new Uint8Array(), t) => {
        if (e instanceof Uint8Array) return Li.Uint8ArrayBlobAdapter.mutate(e)
        if (!e) return Li.Uint8ArrayBlobAdapter.mutate(new Uint8Array())
        let r = t.streamCollector(e)
        return Li.Uint8ArrayBlobAdapter.mutate(await r)
      })
  })
function ji(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function (t) {
    return '%' + t.charCodeAt(0).toString(16).toUpperCase()
  })
}
var il = v(() => {})
var al,
  cl = v(() => {
    il()
    al = (e, t, r, n, o, s) => {
      if (t != null && t[r] !== void 0) {
        let i = n()
        if (i.length <= 0)
          throw new Error(
            'Empty value provided for input HTTP label: ' + r + '.'
          )
        e = e.replace(
          o,
          s
            ? i
                .split('/')
                .map((a) => ji(a))
                .join('/')
            : ji(i)
        )
      } else
        throw new Error('No value provided for input HTTP label: ' + r + '.')
      return e
    }
  })
function Lo(e, t) {
  return new Hi(e, t)
}
var Ah,
  Hi,
  xh = v(() => {
    Ah = E(X())
    cl()
    Hi = class {
      constructor(t, r) {
        ;(this.input = t),
          (this.context = r),
          (this.query = {}),
          (this.method = ''),
          (this.headers = {}),
          (this.path = ''),
          (this.body = null),
          (this.hostname = ''),
          (this.resolvePathStack = [])
      }
      async build() {
        let {
          hostname: t,
          protocol: r = 'https',
          port: n,
          path: o,
        } = await this.context.endpoint()
        this.path = o
        for (let s of this.resolvePathStack) s(this.path)
        return new Ah.HttpRequest({
          protocol: r,
          hostname: this.hostname || t,
          port: n,
          method: this.method,
          path: this.path,
          query: this.query,
          body: this.body,
          headers: this.headers,
        })
      }
      hn(t) {
        return (this.hostname = t), this
      }
      bp(t) {
        return (
          this.resolvePathStack.push((r) => {
            this.path = `${r?.endsWith('/') ? r.slice(0, -1) : r || ''}` + t
          }),
          this
        )
      }
      p(t, r, n, o) {
        return (
          this.resolvePathStack.push((s) => {
            this.path = al(s, this.input, t, r, n, o)
          }),
          this
        )
      }
      h(t) {
        return (this.headers = t), this
      }
      q(t) {
        return (this.query = t), this
      }
      b(t) {
        return (this.body = t), this
      }
      m(t) {
        return (this.method = t), this
      }
    }
  })
var Th = {}
st(Th, {
  RequestBuilder: () => Hi,
  collectBody: () => JN,
  extendedEncodeURIComponent: () => ji,
  requestBuilder: () => Lo,
  resolvedPath: () => al,
})
var dl = v(() => {
  Oh()
  il()
  xh()
  cl()
})
var Ih = v(() => {
  dl()
})
function XN(e, t, r) {
  e.__smithy_context
    ? e.__smithy_context.features || (e.__smithy_context.features = {})
    : (e.__smithy_context = { features: {} }),
    (e.__smithy_context.features[t] = r)
}
var Nh = v(() => {})
var er,
  Dh = v(() => {
    er = class {
      constructor(t) {
        this.authSchemes = new Map()
        for (let [r, n] of Object.entries(t))
          n !== void 0 && this.authSchemes.set(r, n)
      }
      getIdentityProvider(t) {
        return this.authSchemes.get(t)
      }
    }
  })
var kh,
  ll,
  ul,
  Mh = v(() => {
    ;(kh = E(X())),
      (ll = E(Be())),
      (ul = class {
        async sign(t, r, n) {
          if (!n)
            throw new Error(
              'request could not be signed with `apiKey` since the `name` and `in` signer properties are missing'
            )
          if (!n.name)
            throw new Error(
              'request could not be signed with `apiKey` since the `name` signer property is missing'
            )
          if (!n.in)
            throw new Error(
              'request could not be signed with `apiKey` since the `in` signer property is missing'
            )
          if (!r.apiKey)
            throw new Error(
              'request could not be signed with `apiKey` since the `apiKey` is not defined'
            )
          let o = kh.HttpRequest.clone(t)
          if (n.in === ll.HttpApiKeyAuthLocation.QUERY)
            o.query[n.name] = r.apiKey
          else if (n.in === ll.HttpApiKeyAuthLocation.HEADER)
            o.headers[n.name] = n.scheme ? `${n.scheme} ${r.apiKey}` : r.apiKey
          else
            throw new Error(
              'request can only be signed with `apiKey` locations `query` or `header`, but found: `' +
                n.in +
                '`'
            )
          return o
        }
      })
  })
var Uh,
  pl,
  Fh = v(() => {
    ;(Uh = E(X())),
      (pl = class {
        async sign(t, r, n) {
          let o = Uh.HttpRequest.clone(t)
          if (!r.token)
            throw new Error(
              'request could not be signed with `token` since the `token` is not defined'
            )
          return (o.headers.Authorization = `Bearer ${r.token}`), o
        }
      })
  })
var at,
  Lh = v(() => {
    at = class {
      async sign(t, r, n) {
        return t
      }
    }
  })
var jh = v(() => {
  Mh()
  Fh()
  Lh()
})
var Hh,
  QN,
  fl,
  qi,
  ml,
  qh = v(() => {
    ;(Hh = (e) => (t) => qi(t) && t.expiration.getTime() - Date.now() < e),
      (QN = 3e5),
      (fl = Hh(3e5)),
      (qi = (e) => e.expiration !== void 0),
      (ml = (e, t, r) => {
        if (e === void 0) return
        let n = typeof e != 'function' ? async () => Promise.resolve(e) : e,
          o,
          s,
          i,
          a = !1,
          c = async (d) => {
            s || (s = n(d))
            try {
              ;(o = await s), (i = !0), (a = !1)
            } finally {
              s = void 0
            }
            return o
          }
        return t === void 0
          ? async (d) => ((!i || d?.forceRefresh) && (o = await c(d)), o)
          : async (d) => (
              (!i || d?.forceRefresh) && (o = await c(d)),
              a ? o : r(o) ? (t(o) && (await c(d)), o) : ((a = !0), o)
            )
      })
  })
var $h = v(() => {
  Dh()
  jh()
  qh()
})
var Yr = {}
st(Yr, {
  DefaultIdentityProviderConfig: () => er,
  EXPIRATION_MS: () => QN,
  HttpApiKeyAuthSigner: () => ul,
  HttpBearerAuthSigner: () => pl,
  NoAuthSigner: () => at,
  createIsIdentityExpiredFunction: () => Hh,
  createPaginator: () => jm,
  doesIdentityRequireRefresh: () => qi,
  getHttpAuthSchemeEndpointRuleSetPlugin: () => ko,
  getHttpAuthSchemePlugin: () => zx,
  getHttpSigningPlugin: () => Mo,
  getSmithyContext: () => Tx,
  httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => Em,
  httpAuthSchemeMiddleware: () => Do,
  httpAuthSchemeMiddlewareOptions: () => Tm,
  httpSigningMiddleware: () => Td,
  httpSigningMiddlewareOptions: () => Mm,
  isIdentityExpired: () => fl,
  memoizeIdentityProvider: () => ml,
  normalizeProvider: () => St,
  requestBuilder: () => Lo,
  setFeature: () => XN,
})
var _e = v(() => {
  pm()
  Nm()
  Fm()
  Lm()
  Hm()
  Ih()
  Nh()
  $h()
})
var Qr = h((P6, Xh) => {
  var $i = Object.defineProperty,
    ZN = Object.getOwnPropertyDescriptor,
    eD = Object.getOwnPropertyNames,
    tD = Object.prototype.hasOwnProperty,
    j = (e, t) => $i(e, 'name', { value: t, configurable: !0 }),
    rD = (e, t) => {
      for (var r in t) $i(e, r, { get: t[r], enumerable: !0 })
    },
    nD = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of eD(t))
          !tD.call(e, o) &&
            o !== r &&
            $i(e, o, {
              get: () => t[o],
              enumerable: !(n = ZN(t, o)) || n.enumerable,
            })
      return e
    },
    oD = (e) => nD($i({}, '__esModule', { value: !0 }), e),
    Bh = {}
  rD(Bh, {
    EndpointCache: () => sD,
    EndpointError: () => ye,
    customEndpointFunctions: () => hl,
    isIpAddress: () => Vh,
    isValidHostLabel: () => yl,
    resolveEndpoint: () => PD,
  })
  Xh.exports = oD(Bh)
  var Jr,
    sD =
      ((Jr = class {
        constructor({ size: t, params: r }) {
          ;(this.data = new Map()),
            (this.parameters = []),
            (this.capacity = t ?? 50),
            r && (this.parameters = r)
        }
        get(t, r) {
          let n = this.hash(t)
          if (n === !1) return r()
          if (!this.data.has(n)) {
            if (this.data.size > this.capacity + 10) {
              let o = this.data.keys(),
                s = 0
              for (;;) {
                let { value: i, done: a } = o.next()
                if ((this.data.delete(i), a || ++s > 10)) break
              }
            }
            this.data.set(n, r())
          }
          return this.data.get(n)
        }
        size() {
          return this.data.size
        }
        hash(t) {
          let r = '',
            { parameters: n } = this
          if (n.length === 0) return !1
          for (let o of n) {
            let s = String(t[o] ?? '')
            if (s.includes('|;')) return !1
            r += s + '|;'
          }
          return r
        }
      }),
      j(Jr, 'EndpointCache'),
      Jr),
    iD = new RegExp(
      '^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$'
    ),
    Vh = j(
      (e) => iD.test(e) || (e.startsWith('[') && e.endsWith(']')),
      'isIpAddress'
    ),
    aD = new RegExp('^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$'),
    yl = j((e, t = !1) => {
      if (!t) return aD.test(e)
      let r = e.split('.')
      for (let n of r) if (!yl(n)) return !1
      return !0
    }, 'isValidHostLabel'),
    hl = {},
    jo = 'endpoints'
  function ct(e) {
    return typeof e != 'object' || e == null
      ? e
      : 'ref' in e
        ? `$${ct(e.ref)}`
        : 'fn' in e
          ? `${e.fn}(${(e.argv || []).map(ct).join(', ')})`
          : JSON.stringify(e, null, 2)
  }
  j(ct, 'toDebugString')
  var Xr,
    ye =
      ((Xr = class extends Error {
        constructor(t) {
          super(t), (this.name = 'EndpointError')
        }
      }),
      j(Xr, 'EndpointError'),
      Xr),
    cD = j((e, t) => e === t, 'booleanEquals'),
    dD = j((e) => {
      let t = e.split('.'),
        r = []
      for (let n of t) {
        let o = n.indexOf('[')
        if (o !== -1) {
          if (n.indexOf(']') !== n.length - 1)
            throw new ye(`Path: '${e}' does not end with ']'`)
          let s = n.slice(o + 1, -1)
          if (Number.isNaN(parseInt(s)))
            throw new ye(`Invalid array index: '${s}' in path: '${e}'`)
          o !== 0 && r.push(n.slice(0, o)), r.push(s)
        } else r.push(n)
      }
      return r
    }, 'getAttrPathList'),
    Gh = j(
      (e, t) =>
        dD(t).reduce((r, n) => {
          if (typeof r != 'object')
            throw new ye(
              `Index '${n}' in '${t}' not found in '${JSON.stringify(e)}'`
            )
          return Array.isArray(r) ? r[parseInt(n)] : r[n]
        }, e),
      'getAttr'
    ),
    lD = j((e) => e != null, 'isSet'),
    uD = j((e) => !e, 'not'),
    _l = Be(),
    gl = {
      [_l.EndpointURLScheme.HTTP]: 80,
      [_l.EndpointURLScheme.HTTPS]: 443,
    },
    pD = j((e) => {
      let t = (() => {
        try {
          if (e instanceof URL) return e
          if (typeof e == 'object' && 'hostname' in e) {
            let {
                hostname: f,
                port: g,
                protocol: _ = '',
                path: w = '',
                query: S = {},
              } = e,
              R = new URL(`${_}//${f}${g ? `:${g}` : ''}${w}`)
            return (
              (R.search = Object.entries(S)
                .map(([x, O]) => `${x}=${O}`)
                .join('&')),
              R
            )
          }
          return new URL(e)
        } catch {
          return null
        }
      })()
      if (!t)
        return (
          console.error(
            `Unable to parse ${JSON.stringify(e)} as a whatwg URL.`
          ),
          null
        )
      let r = t.href,
        { host: n, hostname: o, pathname: s, protocol: i, search: a } = t
      if (a) return null
      let c = i.slice(0, -1)
      if (!Object.values(_l.EndpointURLScheme).includes(c)) return null
      let d = Vh(o),
        l =
          r.includes(`${n}:${gl[c]}`) ||
          (typeof e == 'string' && e.includes(`${n}:${gl[c]}`)),
        u = `${n}${l ? `:${gl[c]}` : ''}`
      return {
        scheme: c,
        authority: u,
        path: s,
        normalizedPath: s.endsWith('/') ? s : `${s}/`,
        isIp: d,
      }
    }, 'parseURL'),
    fD = j((e, t) => e === t, 'stringEquals'),
    mD = j(
      (e, t, r, n) =>
        t >= r || e.length < r
          ? null
          : n
            ? e.substring(e.length - r, e.length - t)
            : e.substring(t, r),
      'substring'
    ),
    gD = j(
      (e) =>
        encodeURIComponent(e).replace(
          /[!*'()]/g,
          (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`
        ),
      'uriEncode'
    ),
    hD = {
      booleanEquals: cD,
      getAttr: Gh,
      isSet: lD,
      isValidHostLabel: yl,
      not: uD,
      parseURL: pD,
      stringEquals: fD,
      substring: mD,
      uriEncode: gD,
    },
    zh = j((e, t) => {
      let r = [],
        n = { ...t.endpointParams, ...t.referenceRecord },
        o = 0
      for (; o < e.length; ) {
        let s = e.indexOf('{', o)
        if (s === -1) {
          r.push(e.slice(o))
          break
        }
        r.push(e.slice(o, s))
        let i = e.indexOf('}', s)
        if (i === -1) {
          r.push(e.slice(s))
          break
        }
        e[s + 1] === '{' &&
          e[i + 1] === '}' &&
          (r.push(e.slice(s + 1, i)), (o = i + 2))
        let a = e.substring(s + 1, i)
        if (a.includes('#')) {
          let [c, d] = a.split('#')
          r.push(Gh(n[c], d))
        } else r.push(n[a])
        o = i + 1
      }
      return r.join('')
    }, 'evaluateTemplate'),
    _D = j(
      ({ ref: e }, t) => ({ ...t.endpointParams, ...t.referenceRecord })[e],
      'getReferenceValue'
    ),
    Bi = j((e, t, r) => {
      if (typeof e == 'string') return zh(e, r)
      if (e.fn) return Wh(e, r)
      if (e.ref) return _D(e, r)
      throw new ye(
        `'${t}': ${String(e)} is not a string, function or reference.`
      )
    }, 'evaluateExpression'),
    Wh = j(({ fn: e, argv: t }, r) => {
      let n = t.map((s) =>
          ['boolean', 'number'].includes(typeof s) ? s : Bi(s, 'arg', r)
        ),
        o = e.split('.')
      return o[0] in hl && o[1] != null ? hl[o[0]][o[1]](...n) : hD[e](...n)
    }, 'callFunction'),
    yD = j(({ assign: e, ...t }, r) => {
      if (e && e in r.referenceRecord)
        throw new ye(`'${e}' is already defined in Reference Record.`)
      let n = Wh(t, r)
      return (
        r.logger?.debug?.(`${jo} evaluateCondition: ${ct(t)} = ${ct(n)}`),
        {
          result: n === '' ? !0 : !!n,
          ...(e != null && { toAssign: { name: e, value: n } }),
        }
      )
    }, 'evaluateCondition'),
    vl = j((e = [], t) => {
      let r = {}
      for (let n of e) {
        let { result: o, toAssign: s } = yD(n, {
          ...t,
          referenceRecord: { ...t.referenceRecord, ...r },
        })
        if (!o) return { result: o }
        s &&
          ((r[s.name] = s.value),
          t.logger?.debug?.(`${jo} assign: ${s.name} := ${ct(s.value)}`))
      }
      return { result: !0, referenceRecord: r }
    }, 'evaluateConditions'),
    vD = j(
      (e, t) =>
        Object.entries(e).reduce(
          (r, [n, o]) => ({
            ...r,
            [n]: o.map((s) => {
              let i = Bi(s, 'Header value entry', t)
              if (typeof i != 'string')
                throw new ye(`Header '${n}' value '${i}' is not a string`)
              return i
            }),
          }),
          {}
        ),
      'getEndpointHeaders'
    ),
    Kh = j((e, t) => {
      if (Array.isArray(e)) return e.map((r) => Kh(r, t))
      switch (typeof e) {
        case 'string':
          return zh(e, t)
        case 'object':
          if (e === null) throw new ye(`Unexpected endpoint property: ${e}`)
          return Yh(e, t)
        case 'boolean':
          return e
        default:
          throw new ye(`Unexpected endpoint property type: ${typeof e}`)
      }
    }, 'getEndpointProperty'),
    Yh = j(
      (e, t) =>
        Object.entries(e).reduce((r, [n, o]) => ({ ...r, [n]: Kh(o, t) }), {}),
      'getEndpointProperties'
    ),
    ED = j((e, t) => {
      let r = Bi(e, 'Endpoint URL', t)
      if (typeof r == 'string')
        try {
          return new URL(r)
        } catch (n) {
          throw (console.error(`Failed to construct URL with ${r}`, n), n)
        }
      throw new ye(`Endpoint URL must be a string, got ${typeof r}`)
    }, 'getEndpointUrl'),
    SD = j((e, t) => {
      let { conditions: r, endpoint: n } = e,
        { result: o, referenceRecord: s } = vl(r, t)
      if (!o) return
      let i = { ...t, referenceRecord: { ...t.referenceRecord, ...s } },
        { url: a, properties: c, headers: d } = n
      return (
        t.logger?.debug?.(`${jo} Resolving endpoint from template: ${ct(n)}`),
        {
          ...(d != null && { headers: vD(d, i) }),
          ...(c != null && { properties: Yh(c, i) }),
          url: ED(a, i),
        }
      )
    }, 'evaluateEndpointRule'),
    wD = j((e, t) => {
      let { conditions: r, error: n } = e,
        { result: o, referenceRecord: s } = vl(r, t)
      if (o)
        throw new ye(
          Bi(n, 'Error', {
            ...t,
            referenceRecord: { ...t.referenceRecord, ...s },
          })
        )
    }, 'evaluateErrorRule'),
    bD = j((e, t) => {
      let { conditions: r, rules: n } = e,
        { result: o, referenceRecord: s } = vl(r, t)
      if (o)
        return Jh(n, {
          ...t,
          referenceRecord: { ...t.referenceRecord, ...s },
        })
    }, 'evaluateTreeRule'),
    Jh = j((e, t) => {
      for (let r of e)
        if (r.type === 'endpoint') {
          let n = SD(r, t)
          if (n) return n
        } else if (r.type === 'error') wD(r, t)
        else if (r.type === 'tree') {
          let n = bD(r, t)
          if (n) return n
        } else throw new ye(`Unknown endpoint rule: ${r}`)
      throw new ye('Rules evaluation failed')
    }, 'evaluateRules'),
    PD = j((e, t) => {
      let { endpointParams: r, logger: n } = t,
        { parameters: o, rules: s } = e
      t.logger?.debug?.(`${jo} Initial EndpointParams: ${ct(r)}`)
      let i = Object.entries(o)
        .filter(([, d]) => d.default != null)
        .map(([d, l]) => [d, l.default])
      if (i.length > 0) for (let [d, l] of i) r[d] = r[d] ?? l
      let a = Object.entries(o)
        .filter(([, d]) => d.required)
        .map(([d]) => d)
      for (let d of a)
        if (r[d] == null) throw new ye(`Missing required parameter: '${d}'`)
      let c = Jh(s, { endpointParams: r, logger: n, referenceRecord: {} })
      return t.logger?.debug?.(`${jo} Resolved endpoint: ${ct(c)}`), c
    }, 'resolveEndpoint')
})
var en = h((R6, a_) => {
  'use strict'
  var Vi = Object.defineProperty,
    RD = Object.getOwnPropertyDescriptor,
    CD = Object.getOwnPropertyNames,
    OD = Object.prototype.hasOwnProperty,
    Zr = (e, t) => Vi(e, 'name', { value: t, configurable: !0 }),
    AD = (e, t) => {
      for (var r in t) Vi(e, r, { get: t[r], enumerable: !0 })
    },
    xD = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of CD(t))
          !OD.call(e, o) &&
            o !== r &&
            Vi(e, o, {
              get: () => t[o],
              enumerable: !(n = RD(t, o)) || n.enumerable,
            })
      return e
    },
    TD = (e) => xD(Vi({}, '__esModule', { value: !0 }), e),
    Zh = {}
  AD(Zh, {
    ConditionObject: () => q.ConditionObject,
    DeprecatedObject: () => q.DeprecatedObject,
    EndpointError: () => q.EndpointError,
    EndpointObject: () => q.EndpointObject,
    EndpointObjectHeaders: () => q.EndpointObjectHeaders,
    EndpointObjectProperties: () => q.EndpointObjectProperties,
    EndpointParams: () => q.EndpointParams,
    EndpointResolverOptions: () => q.EndpointResolverOptions,
    EndpointRuleObject: () => q.EndpointRuleObject,
    ErrorRuleObject: () => q.ErrorRuleObject,
    EvaluateOptions: () => q.EvaluateOptions,
    Expression: () => q.Expression,
    FunctionArgv: () => q.FunctionArgv,
    FunctionObject: () => q.FunctionObject,
    FunctionReturn: () => q.FunctionReturn,
    ParameterObject: () => q.ParameterObject,
    ReferenceObject: () => q.ReferenceObject,
    ReferenceRecord: () => q.ReferenceRecord,
    RuleSetObject: () => q.RuleSetObject,
    RuleSetRules: () => q.RuleSetRules,
    TreeRuleObject: () => q.TreeRuleObject,
    awsEndpointFunctions: () => i_,
    getUserAgentPrefix: () => kD,
    isIpAddress: () => q.isIpAddress,
    partition: () => o_,
    resolveEndpoint: () => q.resolveEndpoint,
    setPartitionInfo: () => s_,
    useDefaultPartitionInfo: () => DD,
  })
  a_.exports = TD(Zh)
  var q = Qr(),
    e_ = Zr((e, t = !1) => {
      if (t) {
        for (let r of e.split('.')) if (!e_(r)) return !1
        return !0
      }
      return !(
        !(0, q.isValidHostLabel)(e) ||
        e.length < 3 ||
        e.length > 63 ||
        e !== e.toLowerCase() ||
        (0, q.isIpAddress)(e)
      )
    }, 'isVirtualHostableS3Bucket'),
    Qh = ':',
    ID = '/',
    ND = Zr((e) => {
      let t = e.split(Qh)
      if (t.length < 6) return null
      let [r, n, o, s, i, ...a] = t
      if (r !== 'arn' || n === '' || o === '' || a.join(Qh) === '') return null
      let c = a.map((d) => d.split(ID)).flat()
      return {
        partition: n,
        service: o,
        region: s,
        accountId: i,
        resourceId: c,
      }
    }, 'parseArn'),
    t_ = {
      partitions: [
        {
          id: 'aws',
          outputs: {
            dnsSuffix: 'amazonaws.com',
            dualStackDnsSuffix: 'api.aws',
            implicitGlobalRegion: 'us-east-1',
            name: 'aws',
            supportsDualStack: !0,
            supportsFIPS: !0,
          },
          regionRegex: '^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$',
          regions: {
            'af-south-1': { description: 'Africa (Cape Town)' },
            'ap-east-1': {
              description: 'Asia Pacific (Hong Kong)',
            },
            'ap-northeast-1': {
              description: 'Asia Pacific (Tokyo)',
            },
            'ap-northeast-2': {
              description: 'Asia Pacific (Seoul)',
            },
            'ap-northeast-3': {
              description: 'Asia Pacific (Osaka)',
            },
            'ap-south-1': { description: 'Asia Pacific (Mumbai)' },
            'ap-south-2': {
              description: 'Asia Pacific (Hyderabad)',
            },
            'ap-southeast-1': {
              description: 'Asia Pacific (Singapore)',
            },
            'ap-southeast-2': {
              description: 'Asia Pacific (Sydney)',
            },
            'ap-southeast-3': {
              description: 'Asia Pacific (Jakarta)',
            },
            'ap-southeast-4': {
              description: 'Asia Pacific (Melbourne)',
            },
            'ap-southeast-5': {
              description: 'Asia Pacific (Malaysia)',
            },
            'ap-southeast-7': {
              description: 'Asia Pacific (Thailand)',
            },
            'aws-global': {
              description: 'AWS Standard global region',
            },
            'ca-central-1': { description: 'Canada (Central)' },
            'ca-west-1': { description: 'Canada West (Calgary)' },
            'eu-central-1': { description: 'Europe (Frankfurt)' },
            'eu-central-2': { description: 'Europe (Zurich)' },
            'eu-north-1': { description: 'Europe (Stockholm)' },
            'eu-south-1': { description: 'Europe (Milan)' },
            'eu-south-2': { description: 'Europe (Spain)' },
            'eu-west-1': { description: 'Europe (Ireland)' },
            'eu-west-2': { description: 'Europe (London)' },
            'eu-west-3': { description: 'Europe (Paris)' },
            'il-central-1': { description: 'Israel (Tel Aviv)' },
            'me-central-1': { description: 'Middle East (UAE)' },
            'me-south-1': { description: 'Middle East (Bahrain)' },
            'mx-central-1': { description: 'Mexico (Central)' },
            'sa-east-1': {
              description: 'South America (Sao Paulo)',
            },
            'us-east-1': { description: 'US East (N. Virginia)' },
            'us-east-2': { description: 'US East (Ohio)' },
            'us-west-1': { description: 'US West (N. California)' },
            'us-west-2': { description: 'US West (Oregon)' },
          },
        },
        {
          id: 'aws-cn',
          outputs: {
            dnsSuffix: 'amazonaws.com.cn',
            dualStackDnsSuffix: 'api.amazonwebservices.com.cn',
            implicitGlobalRegion: 'cn-northwest-1',
            name: 'aws-cn',
            supportsDualStack: !0,
            supportsFIPS: !0,
          },
          regionRegex: '^cn\\-\\w+\\-\\d+$',
          regions: {
            'aws-cn-global': {
              description: 'AWS China global region',
            },
            'cn-north-1': { description: 'China (Beijing)' },
            'cn-northwest-1': { description: 'China (Ningxia)' },
          },
        },
        {
          id: 'aws-us-gov',
          outputs: {
            dnsSuffix: 'amazonaws.com',
            dualStackDnsSuffix: 'api.aws',
            implicitGlobalRegion: 'us-gov-west-1',
            name: 'aws-us-gov',
            supportsDualStack: !0,
            supportsFIPS: !0,
          },
          regionRegex: '^us\\-gov\\-\\w+\\-\\d+$',
          regions: {
            'aws-us-gov-global': {
              description: 'AWS GovCloud (US) global region',
            },
            'us-gov-east-1': {
              description: 'AWS GovCloud (US-East)',
            },
            'us-gov-west-1': {
              description: 'AWS GovCloud (US-West)',
            },
          },
        },
        {
          id: 'aws-iso',
          outputs: {
            dnsSuffix: 'c2s.ic.gov',
            dualStackDnsSuffix: 'c2s.ic.gov',
            implicitGlobalRegion: 'us-iso-east-1',
            name: 'aws-iso',
            supportsDualStack: !1,
            supportsFIPS: !0,
          },
          regionRegex: '^us\\-iso\\-\\w+\\-\\d+$',
          regions: {
            'aws-iso-global': {
              description: 'AWS ISO (US) global region',
            },
            'us-iso-east-1': { description: 'US ISO East' },
            'us-iso-west-1': { description: 'US ISO WEST' },
          },
        },
        {
          id: 'aws-iso-b',
          outputs: {
            dnsSuffix: 'sc2s.sgov.gov',
            dualStackDnsSuffix: 'sc2s.sgov.gov',
            implicitGlobalRegion: 'us-isob-east-1',
            name: 'aws-iso-b',
            supportsDualStack: !1,
            supportsFIPS: !0,
          },
          regionRegex: '^us\\-isob\\-\\w+\\-\\d+$',
          regions: {
            'aws-iso-b-global': {
              description: 'AWS ISOB (US) global region',
            },
            'us-isob-east-1': {
              description: 'US ISOB East (Ohio)',
            },
          },
        },
        {
          id: 'aws-iso-e',
          outputs: {
            dnsSuffix: 'cloud.adc-e.uk',
            dualStackDnsSuffix: 'cloud.adc-e.uk',
            implicitGlobalRegion: 'eu-isoe-west-1',
            name: 'aws-iso-e',
            supportsDualStack: !1,
            supportsFIPS: !0,
          },
          regionRegex: '^eu\\-isoe\\-\\w+\\-\\d+$',
          regions: {
            'aws-iso-e-global': {
              description: 'AWS ISOE (Europe) global region',
            },
            'eu-isoe-west-1': { description: 'EU ISOE West' },
          },
        },
        {
          id: 'aws-iso-f',
          outputs: {
            dnsSuffix: 'csp.hci.ic.gov',
            dualStackDnsSuffix: 'csp.hci.ic.gov',
            implicitGlobalRegion: 'us-isof-south-1',
            name: 'aws-iso-f',
            supportsDualStack: !1,
            supportsFIPS: !0,
          },
          regionRegex: '^us\\-isof\\-\\w+\\-\\d+$',
          regions: {
            'aws-iso-f-global': {
              description: 'AWS ISOF global region',
            },
            'us-isof-east-1': { description: 'US ISOF EAST' },
            'us-isof-south-1': { description: 'US ISOF SOUTH' },
          },
        },
        {
          id: 'aws-eusc',
          outputs: {
            dnsSuffix: 'amazonaws.eu',
            dualStackDnsSuffix: 'amazonaws.eu',
            implicitGlobalRegion: 'eusc-de-east-1',
            name: 'aws-eusc',
            supportsDualStack: !1,
            supportsFIPS: !0,
          },
          regionRegex: '^eusc\\-(de)\\-\\w+\\-\\d+$',
          regions: {
            'eusc-de-east-1': { description: 'EU (Germany)' },
          },
        },
      ],
      version: '1.1',
    },
    r_ = t_,
    n_ = '',
    o_ = Zr((e) => {
      let { partitions: t } = r_
      for (let n of t) {
        let { regions: o, outputs: s } = n
        for (let [i, a] of Object.entries(o)) if (i === e) return { ...s, ...a }
      }
      for (let n of t) {
        let { regionRegex: o, outputs: s } = n
        if (new RegExp(o).test(e)) return { ...s }
      }
      let r = t.find((n) => n.id === 'aws')
      if (!r)
        throw new Error(
          "Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist."
        )
      return { ...r.outputs }
    }, 'partition'),
    s_ = Zr((e, t = '') => {
      ;(r_ = e), (n_ = t)
    }, 'setPartitionInfo'),
    DD = Zr(() => {
      s_(t_, '')
    }, 'useDefaultPartitionInfo'),
    kD = Zr(() => n_, 'getUserAgentPrefix'),
    i_ = { isVirtualHostableS3Bucket: e_, parseArn: ND, partition: o_ }
  q.customEndpointFunctions.aws = i_
})
var Gi,
  tn,
  c_ = v(() => {
    ;(Gi = { warningEmitted: !1 }),
      (tn = (e) => {
        e &&
          !Gi.warningEmitted &&
          parseInt(e.substring(1, e.indexOf('.'))) < 18 &&
          ((Gi.warningEmitted = !0),
          process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`))
      })
  })
function Rt(e, t, r) {
  return e.$source || (e.$source = {}), (e.$source[t] = r), e
}
var d_ = v(() => {})
function l_(e, t, r) {
  e.__aws_sdk_context
    ? e.__aws_sdk_context.features || (e.__aws_sdk_context.features = {})
    : (e.__aws_sdk_context = { features: {} }),
    (e.__aws_sdk_context.features[t] = r)
}
var u_ = v(() => {})
var tr = {}
st(tr, {
  emitWarningIfUnsupportedVersion: () => tn,
  setCredentialFeature: () => Rt,
  setFeature: () => l_,
  state: () => Gi,
})
var We = v(() => {
  c_()
  d_()
  u_()
})
var p_,
  El,
  f_ = v(() => {
    ;(p_ = E(X())),
      (El = (e) =>
        p_.HttpResponse.isInstance(e)
          ? (e.headers?.date ?? e.headers?.Date)
          : void 0)
  })
var rn,
  Sl = v(() => {
    rn = (e) => new Date(Date.now() + e)
  })
var m_,
  g_ = v(() => {
    Sl()
    m_ = (e, t) => Math.abs(rn(t).getTime() - e) >= 3e5
  })
var wl,
  h_ = v(() => {
    g_()
    wl = (e, t) => {
      let r = Date.parse(e)
      return m_(r, t) ? r - Date.now() : t
    }
  })
var bl = v(() => {
  f_()
  Sl()
  h_()
})
var __,
  Ho,
  qo,
  be,
  y_,
  Pl = v(() => {
    __ = E(X())
    bl()
    ;(Ho = (e, t) => {
      if (!t)
        throw new Error(
          `Property \`${e}\` is not resolved for AWS SDK SigV4Auth`
        )
      return t
    }),
      (qo = async (e) => {
        let t = Ho('context', e.context),
          r = Ho('config', e.config),
          n = t.endpointV2?.properties?.authSchemes?.[0],
          s = await Ho('signer', r.signer)(n),
          i = e?.signingRegion,
          a = e?.signingRegionSet,
          c = e?.signingName
        return {
          config: r,
          signer: s,
          signingRegion: i,
          signingRegionSet: a,
          signingName: c,
        }
      }),
      (be = class {
        async sign(t, r, n) {
          if (!__.HttpRequest.isInstance(t))
            throw new Error(
              'The request is not an instance of `HttpRequest` and cannot be signed'
            )
          let o = await qo(n),
            { config: s, signer: i } = o,
            { signingRegion: a, signingName: c } = o,
            d = n.context
          if (d?.authSchemes?.length ?? !1) {
            let [u, f] = d.authSchemes
            u?.name === 'sigv4a' &&
              f?.name === 'sigv4' &&
              ((a = f?.signingRegion ?? a), (c = f?.signingName ?? c))
          }
          return await i.sign(t, {
            signingDate: rn(s.systemClockOffset),
            signingRegion: a,
            signingService: c,
          })
        }
        errorHandler(t) {
          return (r) => {
            let n = r.ServerTime ?? El(r.$response)
            if (n) {
              let o = Ho('config', t.config),
                s = o.systemClockOffset
              ;(o.systemClockOffset = wl(n, o.systemClockOffset)),
                o.systemClockOffset !== s &&
                  r.$metadata &&
                  (r.$metadata.clockSkewCorrected = !0)
            }
            throw r
          }
        }
        successHandler(t, r) {
          let n = El(t)
          if (n) {
            let o = Ho('config', r.config)
            o.systemClockOffset = wl(n, o.systemClockOffset)
          }
        }
      }),
      (y_ = be)
  })
var v_,
  zi,
  E_ = v(() => {
    v_ = E(X())
    bl()
    Pl()
    zi = class extends be {
      async sign(t, r, n) {
        if (!v_.HttpRequest.isInstance(t))
          throw new Error(
            'The request is not an instance of `HttpRequest` and cannot be signed'
          )
        let {
            config: o,
            signer: s,
            signingRegion: i,
            signingRegionSet: a,
            signingName: c,
          } = await qo(n),
          l = ((await o.sigv4aSigningRegionSet?.()) ?? a ?? [i]).join(',')
        return await s.sign(t, {
          signingDate: rn(o.systemClockOffset),
          signingRegion: l,
          signingService: c,
        })
      }
    }
  })
var Rl,
  S_ = v(() => {
    Rl = (e) =>
      typeof e == 'string' && e.length > 0
        ? e.split(',').map((t) => t.trim())
        : []
  })
var w_,
  b_,
  $o,
  P_ = v(() => {
    S_()
    ;(w_ = 'AWS_AUTH_SCHEME_PREFERENCE'),
      (b_ = 'auth_scheme_preference'),
      ($o = {
        environmentVariableSelector: (e) => {
          if (w_ in e) return Rl(e[w_])
        },
        configFileSelector: (e) => {
          if (b_ in e) return Rl(e[b_])
        },
        default: [],
      })
  })
var fe = h((J6, C_) => {
  var Wi = Object.defineProperty,
    MD = Object.getOwnPropertyDescriptor,
    UD = Object.getOwnPropertyNames,
    FD = Object.prototype.hasOwnProperty,
    sr = (e, t) => Wi(e, 'name', { value: t, configurable: !0 }),
    LD = (e, t) => {
      for (var r in t) Wi(e, r, { get: t[r], enumerable: !0 })
    },
    jD = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of UD(t))
          !FD.call(e, o) &&
            o !== r &&
            Wi(e, o, {
              get: () => t[o],
              enumerable: !(n = MD(t, o)) || n.enumerable,
            })
      return e
    },
    HD = (e) => jD(Wi({}, '__esModule', { value: !0 }), e),
    R_ = {}
  LD(R_, {
    CredentialsProviderError: () => qD,
    ProviderError: () => Ki,
    TokenProviderError: () => $D,
    chain: () => BD,
    fromStatic: () => VD,
    memoize: () => GD,
  })
  C_.exports = HD(R_)
  var rr,
    Ki =
      ((rr = class extends Error {
        constructor(t, r = !0) {
          let n,
            o = !0
          typeof r == 'boolean'
            ? ((n = void 0), (o = r))
            : r != null &&
              typeof r == 'object' &&
              ((n = r.logger), (o = r.tryNextLink ?? !0)),
            super(t),
            (this.name = 'ProviderError'),
            (this.tryNextLink = o),
            Object.setPrototypeOf(this, rr.prototype),
            n?.debug?.(`@smithy/property-provider ${o ? '->' : '(!)'} ${t}`)
        }
        static from(t, r = !0) {
          return Object.assign(new this(t.message, r), t)
        }
      }),
      sr(rr, 'ProviderError'),
      rr),
    nr,
    qD =
      ((nr = class extends Ki {
        constructor(t, r = !0) {
          super(t, r),
            (this.name = 'CredentialsProviderError'),
            Object.setPrototypeOf(this, nr.prototype)
        }
      }),
      sr(nr, 'CredentialsProviderError'),
      nr),
    or,
    $D =
      ((or = class extends Ki {
        constructor(t, r = !0) {
          super(t, r),
            (this.name = 'TokenProviderError'),
            Object.setPrototypeOf(this, or.prototype)
        }
      }),
      sr(or, 'TokenProviderError'),
      or),
    BD = sr(
      (...e) =>
        async () => {
          if (e.length === 0) throw new Ki('No providers in chain')
          let t
          for (let r of e)
            try {
              return await r()
            } catch (n) {
              if (((t = n), n?.tryNextLink)) continue
              throw n
            }
          throw t
        },
      'chain'
    ),
    VD = sr((e) => () => Promise.resolve(e), 'fromStatic'),
    GD = sr((e, t, r) => {
      let n,
        o,
        s,
        i = !1,
        a = sr(async () => {
          o || (o = e())
          try {
            ;(n = await o), (s = !0), (i = !1)
          } finally {
            o = void 0
          }
          return n
        }, 'coalesceProvider')
      return t === void 0
        ? async (c) => ((!s || c?.forceRefresh) && (n = await a()), n)
        : async (c) => (
            (!s || c?.forceRefresh) && (n = await a()),
            i ? n : r && !r(n) ? ((i = !0), n) : (t(n) && (await a()), n)
          )
    }, 'memoize')
})
var Cl,
  zD,
  WD,
  O_ = v(() => {
    _e()
    ;(Cl = E(fe())),
      (zD = (e) => (
        (e.sigv4aSigningRegionSet = St(e.sigv4aSigningRegionSet)), e
      )),
      (WD = {
        environmentVariableSelector(e) {
          if (e.AWS_SIGV4A_SIGNING_REGION_SET)
            return e.AWS_SIGV4A_SIGNING_REGION_SET.split(',').map((t) =>
              t.trim()
            )
          throw new Cl.ProviderError(
            'AWS_SIGV4A_SIGNING_REGION_SET not set in env.',
            { tryNextLink: !0 }
          )
        },
        configFileSelector(e) {
          if (e.sigv4a_signing_region_set)
            return (e.sigv4a_signing_region_set ?? '')
              .split(',')
              .map((t) => t.trim())
          throw new Cl.ProviderError(
            'sigv4a_signing_region_set not set in profile.',
            { tryNextLink: !0 }
          )
        },
        default: void 0,
      })
  })
var nn = h((Z6, I_) => {
  var Yi = Object.defineProperty,
    KD = Object.getOwnPropertyDescriptor,
    YD = Object.getOwnPropertyNames,
    JD = Object.prototype.hasOwnProperty,
    Ol = (e, t) => Yi(e, 'name', { value: t, configurable: !0 }),
    XD = (e, t) => {
      for (var r in t) Yi(e, r, { get: t[r], enumerable: !0 })
    },
    QD = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of YD(t))
          !JD.call(e, o) &&
            o !== r &&
            Yi(e, o, {
              get: () => t[o],
              enumerable: !(n = KD(t, o)) || n.enumerable,
            })
      return e
    },
    ZD = (e) => QD(Yi({}, '__esModule', { value: !0 }), e),
    A_ = {}
  XD(A_, { fromUtf8: () => T_, toUint8Array: () => ek, toUtf8: () => tk })
  I_.exports = ZD(A_)
  var x_ = ee(),
    T_ = Ol((e) => {
      let t = (0, x_.fromString)(e, 'utf8')
      return new Uint8Array(
        t.buffer,
        t.byteOffset,
        t.byteLength / Uint8Array.BYTES_PER_ELEMENT
      )
    }, 'fromUtf8'),
    ek = Ol(
      (e) =>
        typeof e == 'string'
          ? T_(e)
          : ArrayBuffer.isView(e)
            ? new Uint8Array(
                e.buffer,
                e.byteOffset,
                e.byteLength / Uint8Array.BYTES_PER_ELEMENT
              )
            : new Uint8Array(e),
      'toUint8Array'
    ),
    tk = Ol((e) => {
      if (typeof e == 'string') return e
      if (
        typeof e != 'object' ||
        typeof e.byteOffset != 'number' ||
        typeof e.byteLength != 'number'
      )
        throw new Error(
          '@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.'
        )
      return (0, x_.fromArrayBuffer)(
        e.buffer,
        e.byteOffset,
        e.byteLength
      ).toString('utf8')
    }, 'toUtf8')
})
var L_ = h((eW, F_) => {
  var Ji = Object.defineProperty,
    rk = Object.getOwnPropertyDescriptor,
    nk = Object.getOwnPropertyNames,
    ok = Object.prototype.hasOwnProperty,
    N_ = (e, t) => Ji(e, 'name', { value: t, configurable: !0 }),
    sk = (e, t) => {
      for (var r in t) Ji(e, r, { get: t[r], enumerable: !0 })
    },
    ik = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of nk(t))
          !ok.call(e, o) &&
            o !== r &&
            Ji(e, o, {
              get: () => t[o],
              enumerable: !(n = rk(t, o)) || n.enumerable,
            })
      return e
    },
    ak = (e) => ik(Ji({}, '__esModule', { value: !0 }), e),
    D_ = {}
  sk(D_, { fromHex: () => M_, toHex: () => U_ })
  F_.exports = ak(D_)
  var k_ = {},
    Al = {}
  for (let e = 0; e < 256; e++) {
    let t = e.toString(16).toLowerCase()
    t.length === 1 && (t = `0${t}`), (k_[e] = t), (Al[t] = e)
  }
  function M_(e) {
    if (e.length % 2 !== 0)
      throw new Error('Hex encoded strings must have an even number length')
    let t = new Uint8Array(e.length / 2)
    for (let r = 0; r < e.length; r += 2) {
      let n = e.slice(r, r + 2).toLowerCase()
      if (n in Al) t[r / 2] = Al[n]
      else
        throw new Error(
          `Cannot decode unrecognized sequence ${n} as hexadecimal`
        )
    }
    return t
  }
  N_(M_, 'fromHex')
  function U_(e) {
    let t = ''
    for (let r = 0; r < e.byteLength; r++) t += k_[e[r]]
    return t
  }
  N_(U_, 'toHex')
})
var $_ = h((tW, q_) => {
  var Xi = Object.defineProperty,
    ck = Object.getOwnPropertyDescriptor,
    dk = Object.getOwnPropertyNames,
    lk = Object.prototype.hasOwnProperty,
    xl = (e, t) => Xi(e, 'name', { value: t, configurable: !0 }),
    uk = (e, t) => {
      for (var r in t) Xi(e, r, { get: t[r], enumerable: !0 })
    },
    pk = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of dk(t))
          !lk.call(e, o) &&
            o !== r &&
            Xi(e, o, {
              get: () => t[o],
              enumerable: !(n = ck(t, o)) || n.enumerable,
            })
      return e
    },
    fk = (e) => pk(Xi({}, '__esModule', { value: !0 }), e),
    j_ = {}
  uk(j_, { escapeUri: () => H_, escapeUriPath: () => gk })
  q_.exports = fk(j_)
  var H_ = xl(
      (e) => encodeURIComponent(e).replace(/[!'()*]/g, mk),
      'escapeUri'
    ),
    mk = xl(
      (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
      'hexEncode'
    ),
    gk = xl((e) => e.split('/').map(H_).join('/'), 'escapeUriPath')
})
var hy = h((rW, gy) => {
  var oa = Object.defineProperty,
    hk = Object.getOwnPropertyDescriptor,
    _k = Object.getOwnPropertyNames,
    yk = Object.prototype.hasOwnProperty,
    ie = (e, t) => oa(e, 'name', { value: t, configurable: !0 }),
    vk = (e, t) => {
      for (var r in t) oa(e, r, { get: t[r], enumerable: !0 })
    },
    Ek = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of _k(t))
          !yk.call(e, o) &&
            o !== r &&
            oa(e, o, {
              get: () => t[o],
              enumerable: !(n = hk(t, o)) || n.enumerable,
            })
      return e
    },
    Sk = (e) => Ek(oa({}, '__esModule', { value: !0 }), e),
    W_ = {}
  vk(W_, {
    ALGORITHM_IDENTIFIER: () => Qi,
    ALGORITHM_IDENTIFIER_V4A: () => Rk,
    ALGORITHM_QUERY_PARAM: () => K_,
    ALWAYS_UNSIGNABLE_HEADERS: () => ry,
    AMZ_DATE_HEADER: () => Fl,
    AMZ_DATE_QUERY_PARAM: () => Dl,
    AUTH_HEADER: () => Ul,
    CREDENTIAL_QUERY_PARAM: () => Y_,
    DATE_HEADER: () => Q_,
    EVENT_ALGORITHM_IDENTIFIER: () => sy,
    EXPIRES_QUERY_PARAM: () => X_,
    GENERATED_HEADERS: () => Z_,
    HOST_HEADER: () => bk,
    KEY_TYPE_IDENTIFIER: () => Ll,
    MAX_CACHE_SIZE: () => ay,
    MAX_PRESIGNED_TTL: () => cy,
    PROXY_HEADER_PATTERN: () => ny,
    REGION_SET_PARAM: () => wk,
    SEC_HEADER_PATTERN: () => oy,
    SHA256_HEADER: () => na,
    SIGNATURE_HEADER: () => ey,
    SIGNATURE_QUERY_PARAM: () => kl,
    SIGNED_HEADERS_QUERY_PARAM: () => J_,
    SignatureV4: () => Uk,
    SignatureV4Base: () => my,
    TOKEN_HEADER: () => ty,
    TOKEN_QUERY_PARAM: () => Ml,
    UNSIGNABLE_PATTERNS: () => Pk,
    UNSIGNED_PAYLOAD: () => iy,
    clearCredentialCache: () => Ok,
    createScope: () => ea,
    getCanonicalHeaders: () => Tl,
    getCanonicalQuery: () => fy,
    getPayloadHash: () => ta,
    getSigningKey: () => dy,
    hasHeader: () => ly,
    moveHeadersToQuery: () => py,
    prepareRequest: () => Nl,
    signatureV4aContainer: () => Fk,
  })
  gy.exports = Sk(W_)
  var B_ = nn(),
    K_ = 'X-Amz-Algorithm',
    Y_ = 'X-Amz-Credential',
    Dl = 'X-Amz-Date',
    J_ = 'X-Amz-SignedHeaders',
    X_ = 'X-Amz-Expires',
    kl = 'X-Amz-Signature',
    Ml = 'X-Amz-Security-Token',
    wk = 'X-Amz-Region-Set',
    Ul = 'authorization',
    Fl = Dl.toLowerCase(),
    Q_ = 'date',
    Z_ = [Ul, Fl, Q_],
    ey = kl.toLowerCase(),
    na = 'x-amz-content-sha256',
    ty = Ml.toLowerCase(),
    bk = 'host',
    ry = {
      authorization: !0,
      'cache-control': !0,
      connection: !0,
      expect: !0,
      from: !0,
      'keep-alive': !0,
      'max-forwards': !0,
      pragma: !0,
      referer: !0,
      te: !0,
      trailer: !0,
      'transfer-encoding': !0,
      upgrade: !0,
      'user-agent': !0,
      'x-amzn-trace-id': !0,
    },
    ny = /^proxy-/,
    oy = /^sec-/,
    Pk = [/^proxy-/i, /^sec-/i],
    Qi = 'AWS4-HMAC-SHA256',
    Rk = 'AWS4-ECDSA-P256-SHA256',
    sy = 'AWS4-HMAC-SHA256-PAYLOAD',
    iy = 'UNSIGNED-PAYLOAD',
    ay = 50,
    Ll = 'aws4_request',
    cy = 60 * 60 * 24 * 7,
    Ct = L_(),
    Ck = nn(),
    on = {},
    Zi = [],
    ea = ie((e, t, r) => `${e}/${t}/${r}/${Ll}`, 'createScope'),
    dy = ie(async (e, t, r, n, o) => {
      let s = await V_(e, t.secretAccessKey, t.accessKeyId),
        i = `${r}:${n}:${o}:${(0, Ct.toHex)(s)}:${t.sessionToken}`
      if (i in on) return on[i]
      for (Zi.push(i); Zi.length > ay; ) delete on[Zi.shift()]
      let a = `AWS4${t.secretAccessKey}`
      for (let c of [r, n, o, Ll]) a = await V_(e, a, c)
      return (on[i] = a)
    }, 'getSigningKey'),
    Ok = ie(() => {
      ;(Zi.length = 0),
        Object.keys(on).forEach((e) => {
          delete on[e]
        })
    }, 'clearCredentialCache'),
    V_ = ie((e, t, r) => {
      let n = new e(t)
      return n.update((0, Ck.toUint8Array)(r)), n.digest()
    }, 'hmac'),
    Tl = ie(({ headers: e }, t, r) => {
      let n = {}
      for (let o of Object.keys(e).sort()) {
        if (e[o] == null) continue
        let s = o.toLowerCase()
        ;((s in ry || t?.has(s) || ny.test(s) || oy.test(s)) &&
          (!r || (r && !r.has(s)))) ||
          (n[s] = e[o].trim().replace(/\s+/g, ' '))
      }
      return n
    }, 'getCanonicalHeaders'),
    Ak = Nd(),
    xk = nn(),
    ta = ie(async ({ headers: e, body: t }, r) => {
      for (let n of Object.keys(e)) if (n.toLowerCase() === na) return e[n]
      if (t == null)
        return 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
      if (
        typeof t == 'string' ||
        ArrayBuffer.isView(t) ||
        (0, Ak.isArrayBuffer)(t)
      ) {
        let n = new r()
        return (
          n.update((0, xk.toUint8Array)(t)), (0, Ct.toHex)(await n.digest())
        )
      }
      return iy
    }, 'getPayloadHash'),
    G_ = nn(),
    sn,
    Tk =
      ((sn = class {
        format(t) {
          let r = []
          for (let s of Object.keys(t)) {
            let i = (0, G_.fromUtf8)(s)
            r.push(
              Uint8Array.from([i.byteLength]),
              i,
              this.formatHeaderValue(t[s])
            )
          }
          let n = new Uint8Array(r.reduce((s, i) => s + i.byteLength, 0)),
            o = 0
          for (let s of r) n.set(s, o), (o += s.byteLength)
          return n
        }
        formatHeaderValue(t) {
          switch (t.type) {
            case 'boolean':
              return Uint8Array.from([t.value ? 0 : 1])
            case 'byte':
              return Uint8Array.from([2, t.value])
            case 'short':
              let r = new DataView(new ArrayBuffer(3))
              return (
                r.setUint8(0, 3),
                r.setInt16(1, t.value, !1),
                new Uint8Array(r.buffer)
              )
            case 'integer':
              let n = new DataView(new ArrayBuffer(5))
              return (
                n.setUint8(0, 4),
                n.setInt32(1, t.value, !1),
                new Uint8Array(n.buffer)
              )
            case 'long':
              let o = new Uint8Array(9)
              return (o[0] = 5), o.set(t.value.bytes, 1), o
            case 'binary':
              let s = new DataView(new ArrayBuffer(3 + t.value.byteLength))
              s.setUint8(0, 6), s.setUint16(1, t.value.byteLength, !1)
              let i = new Uint8Array(s.buffer)
              return i.set(t.value, 3), i
            case 'string':
              let a = (0, G_.fromUtf8)(t.value),
                c = new DataView(new ArrayBuffer(3 + a.byteLength))
              c.setUint8(0, 7), c.setUint16(1, a.byteLength, !1)
              let d = new Uint8Array(c.buffer)
              return d.set(a, 3), d
            case 'timestamp':
              let l = new Uint8Array(9)
              return (
                (l[0] = 8), l.set(Nk.fromNumber(t.value.valueOf()).bytes, 1), l
              )
            case 'uuid':
              if (!Ik.test(t.value))
                throw new Error(`Invalid UUID received: ${t.value}`)
              let u = new Uint8Array(17)
              return (
                (u[0] = 9),
                u.set((0, Ct.fromHex)(t.value.replace(/\-/g, '')), 1),
                u
              )
          }
        }
      }),
      ie(sn, 'HeaderFormatter'),
      sn),
    Ik = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
    ir,
    Nk =
      ((ir = class {
        constructor(t) {
          if (((this.bytes = t), t.byteLength !== 8))
            throw new Error('Int64 buffers must be exactly 8 bytes')
        }
        static fromNumber(t) {
          if (t > 9223372036854776e3 || t < -9223372036854776e3)
            throw new Error(
              `${t} is too large (or, if negative, too small) to represent as an Int64`
            )
          let r = new Uint8Array(8)
          for (
            let n = 7, o = Math.abs(Math.round(t));
            n > -1 && o > 0;
            n--, o /= 256
          )
            r[n] = o
          return t < 0 && Il(r), new ir(r)
        }
        valueOf() {
          let t = this.bytes.slice(0),
            r = t[0] & 128
          return r && Il(t), parseInt((0, Ct.toHex)(t), 16) * (r ? -1 : 1)
        }
        toString() {
          return String(this.valueOf())
        }
      }),
      ie(ir, 'Int64'),
      ir)
  function Il(e) {
    for (let t = 0; t < 8; t++) e[t] ^= 255
    for (let t = 7; t > -1 && (e[t]++, e[t] === 0); t--);
  }
  ie(Il, 'negate')
  var ly = ie((e, t) => {
      e = e.toLowerCase()
      for (let r of Object.keys(t)) if (e === r.toLowerCase()) return !0
      return !1
    }, 'hasHeader'),
    uy = X(),
    py = ie((e, t = {}) => {
      let { headers: r, query: n = {} } = uy.HttpRequest.clone(e)
      for (let o of Object.keys(r)) {
        let s = o.toLowerCase()
        ;((s.slice(0, 6) === 'x-amz-' && !t.unhoistableHeaders?.has(s)) ||
          t.hoistableHeaders?.has(s)) &&
          ((n[o] = r[o]), delete r[o])
      }
      return { ...e, headers: r, query: n }
    }, 'moveHeadersToQuery'),
    Nl = ie((e) => {
      e = uy.HttpRequest.clone(e)
      for (let t of Object.keys(e.headers))
        Z_.indexOf(t.toLowerCase()) > -1 && delete e.headers[t]
      return e
    }, 'prepareRequest'),
    z_ = Ue(),
    Dk = nn(),
    ra = $_(),
    fy = ie(({ query: e = {} }) => {
      let t = [],
        r = {}
      for (let n of Object.keys(e)) {
        if (n.toLowerCase() === ey) continue
        let o = (0, ra.escapeUri)(n)
        t.push(o)
        let s = e[n]
        typeof s == 'string'
          ? (r[o] = `${o}=${(0, ra.escapeUri)(s)}`)
          : Array.isArray(s) &&
            (r[o] = s
              .slice(0)
              .reduce((i, a) => i.concat([`${o}=${(0, ra.escapeUri)(a)}`]), [])
              .sort()
              .join('&'))
      }
      return t
        .sort()
        .map((n) => r[n])
        .filter((n) => n)
        .join('&')
    }, 'getCanonicalQuery'),
    kk = ie(
      (e) =>
        Mk(e)
          .toISOString()
          .replace(/\.\d{3}Z$/, 'Z'),
      'iso8601'
    ),
    Mk = ie(
      (e) =>
        typeof e == 'number'
          ? new Date(e * 1e3)
          : typeof e == 'string'
            ? Number(e)
              ? new Date(Number(e) * 1e3)
              : new Date(e)
            : e,
      'toDate'
    ),
    an,
    my =
      ((an = class {
        constructor({
          applyChecksum: t,
          credentials: r,
          region: n,
          service: o,
          sha256: s,
          uriEscapePath: i = !0,
        }) {
          ;(this.service = o),
            (this.sha256 = s),
            (this.uriEscapePath = i),
            (this.applyChecksum = typeof t == 'boolean' ? t : !0),
            (this.regionProvider = (0, z_.normalizeProvider)(n)),
            (this.credentialProvider = (0, z_.normalizeProvider)(r))
        }
        createCanonicalRequest(t, r, n) {
          let o = Object.keys(r).sort()
          return `${t.method}
${this.getCanonicalPath(t)}
${fy(t)}
${o.map((s) => `${s}:${r[s]}`).join(`
`)}

${o.join(';')}
${n}`
        }
        async createStringToSign(t, r, n, o) {
          let s = new this.sha256()
          s.update((0, Dk.toUint8Array)(n))
          let i = await s.digest()
          return `${o}
${t}
${r}
${(0, Ct.toHex)(i)}`
        }
        getCanonicalPath({ path: t }) {
          if (this.uriEscapePath) {
            let r = []
            for (let s of t.split('/'))
              s?.length !== 0 && s !== '.' && (s === '..' ? r.pop() : r.push(s))
            let n = `${t?.startsWith('/') ? '/' : ''}${r.join('/')}${r.length > 0 && t?.endsWith('/') ? '/' : ''}`
            return (0, ra.escapeUri)(n).replace(/%2F/g, '/')
          }
          return t
        }
        validateResolvedCredentials(t) {
          if (
            typeof t != 'object' ||
            typeof t.accessKeyId != 'string' ||
            typeof t.secretAccessKey != 'string'
          )
            throw new Error('Resolved credential object is not valid')
        }
        formatDate(t) {
          let r = kk(t).replace(/[\-:]/g, '')
          return { longDate: r, shortDate: r.slice(0, 8) }
        }
        getCanonicalHeaderList(t) {
          return Object.keys(t).sort().join(';')
        }
      }),
      ie(an, 'SignatureV4Base'),
      an),
    cn,
    Uk =
      ((cn = class extends my {
        constructor({
          applyChecksum: t,
          credentials: r,
          region: n,
          service: o,
          sha256: s,
          uriEscapePath: i = !0,
        }) {
          super({
            applyChecksum: t,
            credentials: r,
            region: n,
            service: o,
            sha256: s,
            uriEscapePath: i,
          }),
            (this.headerFormatter = new Tk())
        }
        async presign(t, r = {}) {
          let {
              signingDate: n = new Date(),
              expiresIn: o = 3600,
              unsignableHeaders: s,
              unhoistableHeaders: i,
              signableHeaders: a,
              hoistableHeaders: c,
              signingRegion: d,
              signingService: l,
            } = r,
            u = await this.credentialProvider()
          this.validateResolvedCredentials(u)
          let f = d ?? (await this.regionProvider()),
            { longDate: g, shortDate: _ } = this.formatDate(n)
          if (o > cy)
            return Promise.reject(
              'Signature version 4 presigned URLs must have an expiration date less than one week in the future'
            )
          let w = ea(_, f, l ?? this.service),
            S = py(Nl(t), {
              unhoistableHeaders: i,
              hoistableHeaders: c,
            })
          u.sessionToken && (S.query[Ml] = u.sessionToken),
            (S.query[K_] = Qi),
            (S.query[Y_] = `${u.accessKeyId}/${w}`),
            (S.query[Dl] = g),
            (S.query[X_] = o.toString(10))
          let R = Tl(S, s, a)
          return (
            (S.query[J_] = this.getCanonicalHeaderList(R)),
            (S.query[kl] = await this.getSignature(
              g,
              w,
              this.getSigningKey(u, f, _, l),
              this.createCanonicalRequest(S, R, await ta(t, this.sha256))
            )),
            S
          )
        }
        async sign(t, r) {
          return typeof t == 'string'
            ? this.signString(t, r)
            : t.headers && t.payload
              ? this.signEvent(t, r)
              : t.message
                ? this.signMessage(t, r)
                : this.signRequest(t, r)
        }
        async signEvent(
          { headers: t, payload: r },
          {
            signingDate: n = new Date(),
            priorSignature: o,
            signingRegion: s,
            signingService: i,
          }
        ) {
          let a = s ?? (await this.regionProvider()),
            { shortDate: c, longDate: d } = this.formatDate(n),
            l = ea(c, a, i ?? this.service),
            u = await ta({ headers: {}, body: r }, this.sha256),
            f = new this.sha256()
          f.update(t)
          let g = (0, Ct.toHex)(await f.digest()),
            _ = [sy, d, l, o, g, u].join(`
`)
          return this.signString(_, {
            signingDate: n,
            signingRegion: a,
            signingService: i,
          })
        }
        async signMessage(
          t,
          { signingDate: r = new Date(), signingRegion: n, signingService: o }
        ) {
          return this.signEvent(
            {
              headers: this.headerFormatter.format(t.message.headers),
              payload: t.message.body,
            },
            {
              signingDate: r,
              signingRegion: n,
              signingService: o,
              priorSignature: t.priorSignature,
            }
          ).then((i) => ({ message: t.message, signature: i }))
        }
        async signString(
          t,
          {
            signingDate: r = new Date(),
            signingRegion: n,
            signingService: o,
          } = {}
        ) {
          let s = await this.credentialProvider()
          this.validateResolvedCredentials(s)
          let i = n ?? (await this.regionProvider()),
            { shortDate: a } = this.formatDate(r),
            c = new this.sha256(await this.getSigningKey(s, i, a, o))
          return (
            c.update((0, B_.toUint8Array)(t)), (0, Ct.toHex)(await c.digest())
          )
        }
        async signRequest(
          t,
          {
            signingDate: r = new Date(),
            signableHeaders: n,
            unsignableHeaders: o,
            signingRegion: s,
            signingService: i,
          } = {}
        ) {
          let a = await this.credentialProvider()
          this.validateResolvedCredentials(a)
          let c = s ?? (await this.regionProvider()),
            d = Nl(t),
            { longDate: l, shortDate: u } = this.formatDate(r),
            f = ea(u, c, i ?? this.service)
          ;(d.headers[Fl] = l),
            a.sessionToken && (d.headers[ty] = a.sessionToken)
          let g = await ta(d, this.sha256)
          !ly(na, d.headers) && this.applyChecksum && (d.headers[na] = g)
          let _ = Tl(d, o, n),
            w = await this.getSignature(
              l,
              f,
              this.getSigningKey(a, c, u, i),
              this.createCanonicalRequest(d, _, g)
            )
          return (
            (d.headers[Ul] =
              `${Qi} Credential=${a.accessKeyId}/${f}, SignedHeaders=${this.getCanonicalHeaderList(_)}, Signature=${w}`),
            d
          )
        }
        async getSignature(t, r, n, o) {
          let s = await this.createStringToSign(t, r, o, Qi),
            i = new this.sha256(await n)
          return (
            i.update((0, B_.toUint8Array)(s)), (0, Ct.toHex)(await i.digest())
          )
        }
        getSigningKey(t, r, n, o) {
          return dy(this.sha256, t, n, r, o || this.service)
        }
      }),
      ie(cn, 'SignatureV4'),
      cn),
    Fk = { SignatureV4a: null }
})
function jk(e, { credentials: t, credentialDefaultProvider: r }) {
  let n
  return (
    t
      ? t?.memoized
        ? (n = t)
        : (n = ml(t, fl, qi))
      : r
        ? (n = St(r(Object.assign({}, e, { parentClientConfig: e }))))
        : (n = async () => {
            throw new Error(
              '@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.'
            )
          }),
    (n.memoized = !0),
    n
  )
}
function Hk(e, t) {
  if (t.configBound) return t
  let r = async (n) => t({ ...n, callerClientConfig: e })
  return (r.memoized = t.memoized), (r.configBound = !0), r
}
var jl,
  dn,
  Lk,
  _y = v(() => {
    We()
    _e()
    ;(jl = E(hy())),
      (dn = (e) => {
        let t = e.credentials,
          r = !!e.credentials,
          n
        Object.defineProperty(e, 'credentials', {
          set(d) {
            d && d !== t && d !== n && (r = !0), (t = d)
            let l = jk(e, {
                credentials: t,
                credentialDefaultProvider: e.credentialDefaultProvider,
              }),
              u = Hk(e, l)
            r && !u.attributed
              ? ((n = async (f) =>
                  u(f).then((g) => Rt(g, 'CREDENTIALS_CODE', 'e'))),
                (n.memoized = u.memoized),
                (n.configBound = u.configBound),
                (n.attributed = !0))
              : (n = u)
          },
          get() {
            return n
          },
          enumerable: !0,
          configurable: !0,
        }),
          (e.credentials = t)
        let {
            signingEscapePath: o = !0,
            systemClockOffset: s = e.systemClockOffset || 0,
            sha256: i,
          } = e,
          a
        return (
          e.signer
            ? (a = St(e.signer))
            : e.regionInfoProvider
              ? (a = () =>
                  St(e.region)()
                    .then(async (d) => [
                      (await e.regionInfoProvider(d, {
                        useFipsEndpoint: await e.useFipsEndpoint(),
                        useDualstackEndpoint: await e.useDualstackEndpoint(),
                      })) || {},
                      d,
                    ])
                    .then(([d, l]) => {
                      let { signingRegion: u, signingService: f } = d
                      ;(e.signingRegion = e.signingRegion || u || l),
                        (e.signingName = e.signingName || f || e.serviceId)
                      let g = {
                          ...e,
                          credentials: e.credentials,
                          region: e.signingRegion,
                          service: e.signingName,
                          sha256: i,
                          uriEscapePath: o,
                        },
                        _ = e.signerConstructor || jl.SignatureV4
                      return new _(g)
                    }))
              : (a = async (d) => {
                  d = Object.assign(
                    {},
                    {
                      name: 'sigv4',
                      signingName: e.signingName || e.defaultSigningName,
                      signingRegion: await St(e.region)(),
                      properties: {},
                    },
                    d
                  )
                  let l = d.signingRegion,
                    u = d.signingName
                  ;(e.signingRegion = e.signingRegion || l),
                    (e.signingName = e.signingName || u || e.serviceId)
                  let f = {
                      ...e,
                      credentials: e.credentials,
                      region: e.signingRegion,
                      service: e.signingName,
                      sha256: i,
                      uriEscapePath: o,
                    },
                    g = e.signerConstructor || jl.SignatureV4
                  return new g(f)
                }),
          Object.assign(e, {
            systemClockOffset: s,
            signingEscapePath: o,
            signer: a,
          })
        )
      }),
      (Lk = dn)
  })
var yy = v(() => {
  Pl()
  E_()
  P_()
  O_()
  _y()
})
var vy = v(() => {
  yy()
})
var qk,
  $k,
  Bk,
  Ey = v(() => {
    ;(qk = (e) => {
      if (e == null) return e
      if (typeof e == 'number' || typeof e == 'bigint') {
        let t = new Error(`Received number ${e} where a string was expected.`)
        return (t.name = 'Warning'), console.warn(t), String(e)
      }
      if (typeof e == 'boolean') {
        let t = new Error(`Received boolean ${e} where a string was expected.`)
        return (t.name = 'Warning'), console.warn(t), String(e)
      }
      return e
    }),
      ($k = (e) => {
        if (e == null) return e
        if (typeof e == 'string') {
          let t = e.toLowerCase()
          if (e !== '' && t !== 'false' && t !== 'true') {
            let r = new Error(
              `Received string "${e}" where a boolean was expected.`
            )
            ;(r.name = 'Warning'), console.warn(r)
          }
          return e !== '' && t !== 'false'
        }
        return e
      }),
      (Bk = (e) => {
        if (e == null) return e
        if (typeof e == 'string') {
          let t = Number(e)
          if (t.toString() !== e) {
            let r = new Error(
              `Received string "${e}" where a number was expected.`
            )
            return (r.name = 'Warning'), console.warn(r), e
          }
          return t
        }
        return e
      })
  })
var Ry = h((gW, Py) => {
  var sa = Object.defineProperty,
    Vk = Object.getOwnPropertyDescriptor,
    Gk = Object.getOwnPropertyNames,
    zk = Object.prototype.hasOwnProperty,
    Re = (e, t) => sa(e, 'name', { value: t, configurable: !0 }),
    Wk = (e, t) => {
      for (var r in t) sa(e, r, { get: t[r], enumerable: !0 })
    },
    Kk = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of Gk(t))
          !zk.call(e, o) &&
            o !== r &&
            sa(e, o, {
              get: () => t[o],
              enumerable: !(n = Vk(t, o)) || n.enumerable,
            })
      return e
    },
    Yk = (e) => Kk(sa({}, '__esModule', { value: !0 }), e),
    by = {}
  Wk(by, { constructStack: () => Hl })
  Py.exports = Yk(by)
  var ar = Re((e, t) => {
      let r = []
      if ((e && r.push(e), t)) for (let n of t) r.push(n)
      return r
    }, 'getAllAliases'),
    Ot = Re(
      (e, t) =>
        `${e || 'anonymous'}${t && t.length > 0 ? ` (a.k.a. ${t.join(',')})` : ''}`,
      'getMiddlewareNameWithAliases'
    ),
    Hl = Re(() => {
      let e = [],
        t = [],
        r = !1,
        n = new Set(),
        o = Re(
          (u) =>
            u.sort(
              (f, g) =>
                Sy[g.step] - Sy[f.step] ||
                wy[g.priority || 'normal'] - wy[f.priority || 'normal']
            ),
          'sort'
        ),
        s = Re((u) => {
          let f = !1,
            g = Re((_) => {
              let w = ar(_.name, _.aliases)
              if (w.includes(u)) {
                f = !0
                for (let S of w) n.delete(S)
                return !1
              }
              return !0
            }, 'filterCb')
          return (e = e.filter(g)), (t = t.filter(g)), f
        }, 'removeByName'),
        i = Re((u) => {
          let f = !1,
            g = Re((_) => {
              if (_.middleware === u) {
                f = !0
                for (let w of ar(_.name, _.aliases)) n.delete(w)
                return !1
              }
              return !0
            }, 'filterCb')
          return (e = e.filter(g)), (t = t.filter(g)), f
        }, 'removeByReference'),
        a = Re(
          (u) => (
            e.forEach((f) => {
              u.add(f.middleware, { ...f })
            }),
            t.forEach((f) => {
              u.addRelativeTo(f.middleware, { ...f })
            }),
            u.identifyOnResolve?.(l.identifyOnResolve()),
            u
          ),
          'cloneTo'
        ),
        c = Re((u) => {
          let f = []
          return (
            u.before.forEach((g) => {
              g.before.length === 0 && g.after.length === 0
                ? f.push(g)
                : f.push(...c(g))
            }),
            f.push(u),
            u.after.reverse().forEach((g) => {
              g.before.length === 0 && g.after.length === 0
                ? f.push(g)
                : f.push(...c(g))
            }),
            f
          )
        }, 'expandRelativeMiddlewareList'),
        d = Re((u = !1) => {
          let f = [],
            g = [],
            _ = {}
          return (
            e.forEach((S) => {
              let R = { ...S, before: [], after: [] }
              for (let x of ar(R.name, R.aliases)) _[x] = R
              f.push(R)
            }),
            t.forEach((S) => {
              let R = { ...S, before: [], after: [] }
              for (let x of ar(R.name, R.aliases)) _[x] = R
              g.push(R)
            }),
            g.forEach((S) => {
              if (S.toMiddleware) {
                let R = _[S.toMiddleware]
                if (R === void 0) {
                  if (u) return
                  throw new Error(
                    `${S.toMiddleware} is not found when adding ${Ot(S.name, S.aliases)} middleware ${S.relation} ${S.toMiddleware}`
                  )
                }
                S.relation === 'after' && R.after.push(S),
                  S.relation === 'before' && R.before.push(S)
              }
            }),
            o(f)
              .map(c)
              .reduce((S, R) => (S.push(...R), S), [])
          )
        }, 'getMiddlewareList'),
        l = {
          add: (u, f = {}) => {
            let { name: g, override: _, aliases: w } = f,
              S = {
                step: 'initialize',
                priority: 'normal',
                middleware: u,
                ...f,
              },
              R = ar(g, w)
            if (R.length > 0) {
              if (R.some((x) => n.has(x))) {
                if (!_)
                  throw new Error(`Duplicate middleware name '${Ot(g, w)}'`)
                for (let x of R) {
                  let O = e.findIndex(
                    (le) => le.name === x || le.aliases?.some(($e) => $e === x)
                  )
                  if (O === -1) continue
                  let T = e[O]
                  if (T.step !== S.step || S.priority !== T.priority)
                    throw new Error(
                      `"${Ot(T.name, T.aliases)}" middleware with ${T.priority} priority in ${T.step} step cannot be overridden by "${Ot(g, w)}" middleware with ${S.priority} priority in ${S.step} step.`
                    )
                  e.splice(O, 1)
                }
              }
              for (let x of R) n.add(x)
            }
            e.push(S)
          },
          addRelativeTo: (u, f) => {
            let { name: g, override: _, aliases: w } = f,
              S = { middleware: u, ...f },
              R = ar(g, w)
            if (R.length > 0) {
              if (R.some((x) => n.has(x))) {
                if (!_)
                  throw new Error(`Duplicate middleware name '${Ot(g, w)}'`)
                for (let x of R) {
                  let O = t.findIndex(
                    (le) => le.name === x || le.aliases?.some(($e) => $e === x)
                  )
                  if (O === -1) continue
                  let T = t[O]
                  if (
                    T.toMiddleware !== S.toMiddleware ||
                    T.relation !== S.relation
                  )
                    throw new Error(
                      `"${Ot(T.name, T.aliases)}" middleware ${T.relation} "${T.toMiddleware}" middleware cannot be overridden by "${Ot(g, w)}" middleware ${S.relation} "${S.toMiddleware}" middleware.`
                    )
                  t.splice(O, 1)
                }
              }
              for (let x of R) n.add(x)
            }
            t.push(S)
          },
          clone: () => a(Hl()),
          use: (u) => {
            u.applyToStack(l)
          },
          remove: (u) => (typeof u == 'string' ? s(u) : i(u)),
          removeByTag: (u) => {
            let f = !1,
              g = Re((_) => {
                let { tags: w, name: S, aliases: R } = _
                if (w && w.includes(u)) {
                  let x = ar(S, R)
                  for (let O of x) n.delete(O)
                  return (f = !0), !1
                }
                return !0
              }, 'filterCb')
            return (e = e.filter(g)), (t = t.filter(g)), f
          },
          concat: (u) => {
            let f = a(Hl())
            return (
              f.use(u),
              f.identifyOnResolve(
                r || f.identifyOnResolve() || (u.identifyOnResolve?.() ?? !1)
              ),
              f
            )
          },
          applyToStack: a,
          identify: () =>
            d(!0).map((u) => {
              let f = u.step ?? u.relation + ' ' + u.toMiddleware
              return Ot(u.name, u.aliases) + ' - ' + f
            }),
          identifyOnResolve(u) {
            return typeof u == 'boolean' && (r = u), r
          },
          resolve: (u, f) => {
            for (let g of d()
              .map((_) => _.middleware)
              .reverse())
              u = g(u, f)
            return r && console.log(l.identify()), u
          },
        }
      return l
    }, 'constructStack'),
    Sy = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1,
    },
    wy = { high: 3, normal: 2, low: 1 }
})
var D = h((hW, By) => {
  var ca = Object.defineProperty,
    Jk = Object.getOwnPropertyDescriptor,
    Xk = Object.getOwnPropertyNames,
    Qk = Object.prototype.hasOwnProperty,
    b = (e, t) => ca(e, 'name', { value: t, configurable: !0 }),
    Zk = (e, t) => {
      for (var r in t) ca(e, r, { get: t[r], enumerable: !0 })
    },
    eM = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of Xk(t))
          !Qk.call(e, o) &&
            o !== r &&
            ca(e, o, {
              get: () => t[o],
              enumerable: !(n = Jk(t, o)) || n.enumerable,
            })
      return e
    },
    tM = (e) => eM(ca({}, '__esModule', { value: !0 }), e),
    Oy = {}
  Zk(Oy, {
    Client: () => rM,
    Command: () => xy,
    LazyJsonString: () => cr,
    NoOpLogger: () => QM,
    SENSITIVE_STRING: () => oM,
    ServiceException: () => jM,
    _json: () => Wl,
    collectBody: () => ql.collectBody,
    convertMap: () => ZM,
    createAggregatedClient: () => sM,
    dateToUtcString: () => My,
    decorateServiceException: () => Uy,
    emitWarningIfUnsupportedVersion: () => BM,
    expectBoolean: () => aM,
    expectByte: () => zl,
    expectFloat32: () => ia,
    expectInt: () => dM,
    expectInt32: () => Vl,
    expectLong: () => Go,
    expectNonNull: () => uM,
    expectNumber: () => Vo,
    expectObject: () => Ty,
    expectShort: () => Gl,
    expectString: () => pM,
    expectUnion: () => fM,
    extendedEncodeURIComponent: () => ql.extendedEncodeURIComponent,
    getArrayIfSingleItem: () => JM,
    getDefaultClientConfiguration: () => KM,
    getDefaultExtensionConfiguration: () => Ly,
    getValueFromTextNode: () => jy,
    handleFloat: () => hM,
    isSerializableHeaderValue: () => XM,
    limitedParseDouble: () => Jl,
    limitedParseFloat: () => _M,
    limitedParseFloat32: () => yM,
    loadConfigsForDefaultMode: () => $M,
    logger: () => zo,
    map: () => Ql,
    parseBoolean: () => iM,
    parseEpochTimestamp: () => TM,
    parseRfc3339DateTime: () => bM,
    parseRfc3339DateTimeWithOffset: () => RM,
    parseRfc7231DateTime: () => xM,
    quoteHeader: () => qy,
    resolveDefaultRuntimeConfig: () => YM,
    resolvedPath: () => ql.resolvedPath,
    serializeDateTime: () => sU,
    serializeFloat: () => oU,
    splitEvery: () => $y,
    splitHeader: () => iU,
    strictParseByte: () => ky,
    strictParseDouble: () => Yl,
    strictParseFloat: () => mM,
    strictParseFloat32: () => Iy,
    strictParseInt: () => vM,
    strictParseInt32: () => EM,
    strictParseLong: () => Dy,
    strictParseShort: () => mn,
    take: () => eU,
    throwDefaultError: () => Fy,
    withBaseException: () => HM,
  })
  By.exports = tM(Oy)
  var Ay = Ry(),
    ln,
    rM =
      ((ln = class {
        constructor(t) {
          ;(this.config = t), (this.middlewareStack = (0, Ay.constructStack)())
        }
        send(t, r, n) {
          let o = typeof r != 'function' ? r : void 0,
            s = typeof r == 'function' ? r : n,
            i = o === void 0 && this.config.cacheMiddleware === !0,
            a
          if (i) {
            this.handlers || (this.handlers = new WeakMap())
            let c = this.handlers
            c.has(t.constructor)
              ? (a = c.get(t.constructor))
              : ((a = t.resolveMiddleware(
                  this.middlewareStack,
                  this.config,
                  o
                )),
                c.set(t.constructor, a))
          } else
            delete this.handlers,
              (a = t.resolveMiddleware(this.middlewareStack, this.config, o))
          if (s)
            a(t)
              .then(
                (c) => s(null, c.output),
                (c) => s(c)
              )
              .catch(() => {})
          else return a(t).then((c) => c.output)
        }
        destroy() {
          this.config?.requestHandler?.destroy?.(), delete this.handlers
        }
      }),
      b(ln, 'Client'),
      ln),
    ql = (dl(), F(Th)),
    Bl = Be(),
    un,
    xy =
      ((un = class {
        constructor() {
          this.middlewareStack = (0, Ay.constructStack)()
        }
        static classBuilder() {
          return new nM()
        }
        resolveMiddlewareWithContext(
          t,
          r,
          n,
          {
            middlewareFn: o,
            clientName: s,
            commandName: i,
            inputFilterSensitiveLog: a,
            outputFilterSensitiveLog: c,
            smithyContext: d,
            additionalContext: l,
            CommandCtor: u,
          }
        ) {
          for (let S of o.bind(this)(u, t, r, n)) this.middlewareStack.use(S)
          let f = t.concat(this.middlewareStack),
            { logger: g } = r,
            _ = {
              logger: g,
              clientName: s,
              commandName: i,
              inputFilterSensitiveLog: a,
              outputFilterSensitiveLog: c,
              [Bl.SMITHY_CONTEXT_KEY]: {
                commandInstance: this,
                ...d,
              },
              ...l,
            },
            { requestHandler: w } = r
          return f.resolve((S) => w.handle(S.request, n || {}), _)
        }
      }),
      b(un, 'Command'),
      un),
    pn,
    nM =
      ((pn = class {
        constructor() {
          ;(this._init = () => {}),
            (this._ep = {}),
            (this._middlewareFn = () => []),
            (this._commandName = ''),
            (this._clientName = ''),
            (this._additionalContext = {}),
            (this._smithyContext = {}),
            (this._inputFilterSensitiveLog = (t) => t),
            (this._outputFilterSensitiveLog = (t) => t),
            (this._serializer = null),
            (this._deserializer = null)
        }
        init(t) {
          this._init = t
        }
        ep(t) {
          return (this._ep = t), this
        }
        m(t) {
          return (this._middlewareFn = t), this
        }
        s(t, r, n = {}) {
          return (
            (this._smithyContext = {
              service: t,
              operation: r,
              ...n,
            }),
            this
          )
        }
        c(t = {}) {
          return (this._additionalContext = t), this
        }
        n(t, r) {
          return (this._clientName = t), (this._commandName = r), this
        }
        f(t = (n) => n, r = (n) => n) {
          return (
            (this._inputFilterSensitiveLog = t),
            (this._outputFilterSensitiveLog = r),
            this
          )
        }
        ser(t) {
          return (this._serializer = t), this
        }
        de(t) {
          return (this._deserializer = t), this
        }
        build() {
          var n
          let t = this,
            r
          return (r =
            ((n = class extends xy {
              constructor(...[s]) {
                super(),
                  (this.serialize = t._serializer),
                  (this.deserialize = t._deserializer),
                  (this.input = s ?? {}),
                  t._init(this)
              }
              static getEndpointParameterInstructions() {
                return t._ep
              }
              resolveMiddleware(s, i, a) {
                return this.resolveMiddlewareWithContext(s, i, a, {
                  CommandCtor: r,
                  middlewareFn: t._middlewareFn,
                  clientName: t._clientName,
                  commandName: t._commandName,
                  inputFilterSensitiveLog: t._inputFilterSensitiveLog,
                  outputFilterSensitiveLog: t._outputFilterSensitiveLog,
                  smithyContext: t._smithyContext,
                  additionalContext: t._additionalContext,
                })
              }
            }),
            b(n, 'CommandRef'),
            n))
        }
      }),
      b(pn, 'ClassBuilder'),
      pn),
    oM = '***SensitiveInformation***',
    sM = b((e, t) => {
      for (let r of Object.keys(e)) {
        let n = e[r],
          o = b(async function (i, a, c) {
            let d = new n(i)
            if (typeof a == 'function') this.send(d, a)
            else if (typeof c == 'function') {
              if (typeof a != 'object')
                throw new Error(`Expected http options but got ${typeof a}`)
              this.send(d, a || {}, c)
            } else return this.send(d, a)
          }, 'methodImpl'),
          s = (r[0].toLowerCase() + r.slice(1)).replace(/Command$/, '')
        t.prototype[s] = o
      }
    }, 'createAggregatedClient'),
    iM = b((e) => {
      switch (e) {
        case 'true':
          return !0
        case 'false':
          return !1
        default:
          throw new Error(`Unable to parse boolean value "${e}"`)
      }
    }, 'parseBoolean'),
    aM = b((e) => {
      if (e != null) {
        if (typeof e == 'number') {
          if (
            ((e === 0 || e === 1) &&
              zo.warn(aa(`Expected boolean, got ${typeof e}: ${e}`)),
            e === 0)
          )
            return !1
          if (e === 1) return !0
        }
        if (typeof e == 'string') {
          let t = e.toLowerCase()
          if (
            ((t === 'false' || t === 'true') &&
              zo.warn(aa(`Expected boolean, got ${typeof e}: ${e}`)),
            t === 'false')
          )
            return !1
          if (t === 'true') return !0
        }
        if (typeof e == 'boolean') return e
        throw new TypeError(`Expected boolean, got ${typeof e}: ${e}`)
      }
    }, 'expectBoolean'),
    Vo = b((e) => {
      if (e != null) {
        if (typeof e == 'string') {
          let t = parseFloat(e)
          if (!Number.isNaN(t))
            return (
              String(t) !== String(e) &&
                zo.warn(aa(`Expected number but observed string: ${e}`)),
              t
            )
        }
        if (typeof e == 'number') return e
        throw new TypeError(`Expected number, got ${typeof e}: ${e}`)
      }
    }, 'expectNumber'),
    cM = Math.ceil(2 ** 127 * (2 - 2 ** -23)),
    ia = b((e) => {
      let t = Vo(e)
      if (
        t !== void 0 &&
        !Number.isNaN(t) &&
        t !== 1 / 0 &&
        t !== -1 / 0 &&
        Math.abs(t) > cM
      )
        throw new TypeError(`Expected 32-bit float, got ${e}`)
      return t
    }, 'expectFloat32'),
    Go = b((e) => {
      if (e != null) {
        if (Number.isInteger(e) && !Number.isNaN(e)) return e
        throw new TypeError(`Expected integer, got ${typeof e}: ${e}`)
      }
    }, 'expectLong'),
    dM = Go,
    Vl = b((e) => Kl(e, 32), 'expectInt32'),
    Gl = b((e) => Kl(e, 16), 'expectShort'),
    zl = b((e) => Kl(e, 8), 'expectByte'),
    Kl = b((e, t) => {
      let r = Go(e)
      if (r !== void 0 && lM(r, t) !== r)
        throw new TypeError(`Expected ${t}-bit integer, got ${e}`)
      return r
    }, 'expectSizedInt'),
    lM = b((e, t) => {
      switch (t) {
        case 32:
          return Int32Array.of(e)[0]
        case 16:
          return Int16Array.of(e)[0]
        case 8:
          return Int8Array.of(e)[0]
      }
    }, 'castInt'),
    uM = b((e, t) => {
      if (e == null)
        throw t
          ? new TypeError(`Expected a non-null value for ${t}`)
          : new TypeError('Expected a non-null value')
      return e
    }, 'expectNonNull'),
    Ty = b((e) => {
      if (e == null) return
      if (typeof e == 'object' && !Array.isArray(e)) return e
      let t = Array.isArray(e) ? 'array' : typeof e
      throw new TypeError(`Expected object, got ${t}: ${e}`)
    }, 'expectObject'),
    pM = b((e) => {
      if (e != null) {
        if (typeof e == 'string') return e
        if (['boolean', 'number', 'bigint'].includes(typeof e))
          return (
            zo.warn(aa(`Expected string, got ${typeof e}: ${e}`)), String(e)
          )
        throw new TypeError(`Expected string, got ${typeof e}: ${e}`)
      }
    }, 'expectString'),
    fM = b((e) => {
      if (e == null) return
      let t = Ty(e),
        r = Object.entries(t)
          .filter(([, n]) => n != null)
          .map(([n]) => n)
      if (r.length === 0)
        throw new TypeError(
          'Unions must have exactly one non-null member. None were found.'
        )
      if (r.length > 1)
        throw new TypeError(
          `Unions must have exactly one non-null member. Keys ${r} were not null.`
        )
      return t
    }, 'expectUnion'),
    Yl = b((e) => Vo(typeof e == 'string' ? hn(e) : e), 'strictParseDouble'),
    mM = Yl,
    Iy = b((e) => ia(typeof e == 'string' ? hn(e) : e), 'strictParseFloat32'),
    gM = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
    hn = b((e) => {
      let t = e.match(gM)
      if (t === null || t[0].length !== e.length)
        throw new TypeError('Expected real number, got implicit NaN')
      return parseFloat(e)
    }, 'parseNumber'),
    Jl = b((e) => (typeof e == 'string' ? Ny(e) : Vo(e)), 'limitedParseDouble'),
    hM = Jl,
    _M = Jl,
    yM = b(
      (e) => (typeof e == 'string' ? Ny(e) : ia(e)),
      'limitedParseFloat32'
    ),
    Ny = b((e) => {
      switch (e) {
        case 'NaN':
          return NaN
        case 'Infinity':
          return 1 / 0
        case '-Infinity':
          return -1 / 0
        default:
          throw new Error(`Unable to parse float value: ${e}`)
      }
    }, 'parseFloatString'),
    Dy = b((e) => Go(typeof e == 'string' ? hn(e) : e), 'strictParseLong'),
    vM = Dy,
    EM = b((e) => Vl(typeof e == 'string' ? hn(e) : e), 'strictParseInt32'),
    mn = b((e) => Gl(typeof e == 'string' ? hn(e) : e), 'strictParseShort'),
    ky = b((e) => zl(typeof e == 'string' ? hn(e) : e), 'strictParseByte'),
    aa = b(
      (e) =>
        String(new TypeError(e).stack || e)
          .split(
            `
`
          )
          .slice(0, 5)
          .filter((t) => !t.includes('stackTraceWarning')).join(`
`),
      'stackTraceWarning'
    ),
    zo = { warn: console.warn },
    SM = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    Xl = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
  function My(e) {
    let t = e.getUTCFullYear(),
      r = e.getUTCMonth(),
      n = e.getUTCDay(),
      o = e.getUTCDate(),
      s = e.getUTCHours(),
      i = e.getUTCMinutes(),
      a = e.getUTCSeconds(),
      c = o < 10 ? `0${o}` : `${o}`,
      d = s < 10 ? `0${s}` : `${s}`,
      l = i < 10 ? `0${i}` : `${i}`,
      u = a < 10 ? `0${a}` : `${a}`
    return `${SM[n]}, ${c} ${Xl[r]} ${t} ${d}:${l}:${u} GMT`
  }
  b(My, 'dateToUtcString')
  var wM = new RegExp(
      /^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/
    ),
    bM = b((e) => {
      if (e == null) return
      if (typeof e != 'string')
        throw new TypeError('RFC-3339 date-times must be expressed as strings')
      let t = wM.exec(e)
      if (!t) throw new TypeError('Invalid RFC-3339 date-time value')
      let [r, n, o, s, i, a, c, d] = t,
        l = mn(gn(n)),
        u = Ye(o, 'month', 1, 12),
        f = Ye(s, 'day', 1, 31)
      return Bo(l, u, f, {
        hours: i,
        minutes: a,
        seconds: c,
        fractionalMilliseconds: d,
      })
    }, 'parseRfc3339DateTime'),
    PM = new RegExp(
      /^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/
    ),
    RM = b((e) => {
      if (e == null) return
      if (typeof e != 'string')
        throw new TypeError('RFC-3339 date-times must be expressed as strings')
      let t = PM.exec(e)
      if (!t) throw new TypeError('Invalid RFC-3339 date-time value')
      let [r, n, o, s, i, a, c, d, l] = t,
        u = mn(gn(n)),
        f = Ye(o, 'month', 1, 12),
        g = Ye(s, 'day', 1, 31),
        _ = Bo(u, f, g, {
          hours: i,
          minutes: a,
          seconds: c,
          fractionalMilliseconds: d,
        })
      return l.toUpperCase() != 'Z' && _.setTime(_.getTime() - LM(l)), _
    }, 'parseRfc3339DateTimeWithOffset'),
    CM = new RegExp(
      /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/
    ),
    OM = new RegExp(
      /^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/
    ),
    AM = new RegExp(
      /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/
    ),
    xM = b((e) => {
      if (e == null) return
      if (typeof e != 'string')
        throw new TypeError('RFC-7231 date-times must be expressed as strings')
      let t = CM.exec(e)
      if (t) {
        let [r, n, o, s, i, a, c, d] = t
        return Bo(mn(gn(s)), $l(o), Ye(n, 'day', 1, 31), {
          hours: i,
          minutes: a,
          seconds: c,
          fractionalMilliseconds: d,
        })
      }
      if (((t = OM.exec(e)), t)) {
        let [r, n, o, s, i, a, c, d] = t
        return DM(
          Bo(IM(s), $l(o), Ye(n, 'day', 1, 31), {
            hours: i,
            minutes: a,
            seconds: c,
            fractionalMilliseconds: d,
          })
        )
      }
      if (((t = AM.exec(e)), t)) {
        let [r, n, o, s, i, a, c, d] = t
        return Bo(mn(gn(d)), $l(n), Ye(o.trimLeft(), 'day', 1, 31), {
          hours: s,
          minutes: i,
          seconds: a,
          fractionalMilliseconds: c,
        })
      }
      throw new TypeError('Invalid RFC-7231 date-time value')
    }, 'parseRfc7231DateTime'),
    TM = b((e) => {
      if (e == null) return
      let t
      if (typeof e == 'number') t = e
      else if (typeof e == 'string') t = Yl(e)
      else if (typeof e == 'object' && e.tag === 1) t = e.value
      else
        throw new TypeError(
          'Epoch timestamps must be expressed as floating point numbers or their string representation'
        )
      if (Number.isNaN(t) || t === 1 / 0 || t === -1 / 0)
        throw new TypeError(
          'Epoch timestamps must be valid, non-Infinite, non-NaN numerics'
        )
      return new Date(Math.round(t * 1e3))
    }, 'parseEpochTimestamp'),
    Bo = b((e, t, r, n) => {
      let o = t - 1
      return (
        MM(e, o, r),
        new Date(
          Date.UTC(
            e,
            o,
            r,
            Ye(n.hours, 'hour', 0, 23),
            Ye(n.minutes, 'minute', 0, 59),
            Ye(n.seconds, 'seconds', 0, 60),
            FM(n.fractionalMilliseconds)
          )
        )
      )
    }, 'buildDate'),
    IM = b((e) => {
      let t = new Date().getUTCFullYear(),
        r = Math.floor(t / 100) * 100 + mn(gn(e))
      return r < t ? r + 100 : r
    }, 'parseTwoDigitYear'),
    NM = 50 * 365 * 24 * 60 * 60 * 1e3,
    DM = b(
      (e) =>
        e.getTime() - new Date().getTime() > NM
          ? new Date(
              Date.UTC(
                e.getUTCFullYear() - 100,
                e.getUTCMonth(),
                e.getUTCDate(),
                e.getUTCHours(),
                e.getUTCMinutes(),
                e.getUTCSeconds(),
                e.getUTCMilliseconds()
              )
            )
          : e,
      'adjustRfc850Year'
    ),
    $l = b((e) => {
      let t = Xl.indexOf(e)
      if (t < 0) throw new TypeError(`Invalid month: ${e}`)
      return t + 1
    }, 'parseMonthByShortName'),
    kM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    MM = b((e, t, r) => {
      let n = kM[t]
      if ((t === 1 && UM(e) && (n = 29), r > n))
        throw new TypeError(`Invalid day for ${Xl[t]} in ${e}: ${r}`)
    }, 'validateDayOfMonth'),
    UM = b(
      (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0),
      'isLeapYear'
    ),
    Ye = b((e, t, r, n) => {
      let o = ky(gn(e))
      if (o < r || o > n)
        throw new TypeError(`${t} must be between ${r} and ${n}, inclusive`)
      return o
    }, 'parseDateValue'),
    FM = b((e) => (e == null ? 0 : Iy('0.' + e) * 1e3), 'parseMilliseconds'),
    LM = b((e) => {
      let t = e[0],
        r = 1
      if (t == '+') r = 1
      else if (t == '-') r = -1
      else throw new TypeError(`Offset direction, ${t}, must be "+" or "-"`)
      let n = Number(e.substring(1, 3)),
        o = Number(e.substring(4, 6))
      return r * (n * 60 + o) * 60 * 1e3
    }, 'parseOffsetToMilliseconds'),
    gn = b((e) => {
      let t = 0
      for (; t < e.length - 1 && e.charAt(t) === '0'; ) t++
      return t === 0 ? e : e.slice(t)
    }, 'stripLeadingZeroes'),
    Ke,
    jM =
      ((Ke = class extends Error {
        constructor(t) {
          super(t.message),
            Object.setPrototypeOf(
              this,
              Object.getPrototypeOf(this).constructor.prototype
            ),
            (this.name = t.name),
            (this.$fault = t.$fault),
            (this.$metadata = t.$metadata)
        }
        static isInstance(t) {
          if (!t) return !1
          let r = t
          return (
            Ke.prototype.isPrototypeOf(r) ||
            (!!r.$fault &&
              !!r.$metadata &&
              (r.$fault === 'client' || r.$fault === 'server'))
          )
        }
        static [Symbol.hasInstance](t) {
          if (!t) return !1
          let r = t
          return this === Ke
            ? Ke.isInstance(t)
            : Ke.isInstance(t)
              ? r.name && this.name
                ? this.prototype.isPrototypeOf(t) || r.name === this.name
                : this.prototype.isPrototypeOf(t)
              : !1
        }
      }),
      b(Ke, 'ServiceException'),
      Ke),
    Uy = b((e, t = {}) => {
      Object.entries(t)
        .filter(([, n]) => n !== void 0)
        .forEach(([n, o]) => {
          ;(e[n] == null || e[n] === '') && (e[n] = o)
        })
      let r = e.message || e.Message || 'UnknownError'
      return (e.message = r), delete e.Message, e
    }, 'decorateServiceException'),
    Fy = b(({ output: e, parsedBody: t, exceptionCtor: r, errorCode: n }) => {
      let o = qM(e),
        s = o.httpStatusCode ? o.httpStatusCode + '' : void 0,
        i = new r({
          name: t?.code || t?.Code || n || s || 'UnknownError',
          $fault: 'client',
          $metadata: o,
        })
      throw Uy(i, t)
    }, 'throwDefaultError'),
    HM = b(
      (e) =>
        ({ output: t, parsedBody: r, errorCode: n }) => {
          Fy({
            output: t,
            parsedBody: r,
            exceptionCtor: e,
            errorCode: n,
          })
        },
      'withBaseException'
    ),
    qM = b(
      (e) => ({
        httpStatusCode: e.statusCode,
        requestId:
          e.headers['x-amzn-requestid'] ??
          e.headers['x-amzn-request-id'] ??
          e.headers['x-amz-request-id'],
        extendedRequestId: e.headers['x-amz-id-2'],
        cfId: e.headers['x-amz-cf-id'],
      }),
      'deserializeMetadata'
    ),
    $M = b((e) => {
      switch (e) {
        case 'standard':
          return { retryMode: 'standard', connectionTimeout: 3100 }
        case 'in-region':
          return { retryMode: 'standard', connectionTimeout: 1100 }
        case 'cross-region':
          return { retryMode: 'standard', connectionTimeout: 3100 }
        case 'mobile':
          return { retryMode: 'standard', connectionTimeout: 3e4 }
        default:
          return {}
      }
    }, 'loadConfigsForDefaultMode'),
    Cy = !1,
    BM = b((e) => {
      e && !Cy && parseInt(e.substring(1, e.indexOf('.'))) < 16 && (Cy = !0)
    }, 'emitWarningIfUnsupportedVersion'),
    VM = b((e) => {
      let t = []
      for (let r in Bl.AlgorithmId) {
        let n = Bl.AlgorithmId[r]
        e[n] !== void 0 &&
          t.push({
            algorithmId: () => n,
            checksumConstructor: () => e[n],
          })
      }
      return {
        addChecksumAlgorithm(r) {
          t.push(r)
        },
        checksumAlgorithms() {
          return t
        },
      }
    }, 'getChecksumConfiguration'),
    GM = b((e) => {
      let t = {}
      return (
        e.checksumAlgorithms().forEach((r) => {
          t[r.algorithmId()] = r.checksumConstructor()
        }),
        t
      )
    }, 'resolveChecksumRuntimeConfig'),
    zM = b(
      (e) => ({
        setRetryStrategy(t) {
          e.retryStrategy = t
        },
        retryStrategy() {
          return e.retryStrategy
        },
      }),
      'getRetryConfiguration'
    ),
    WM = b((e) => {
      let t = {}
      return (t.retryStrategy = e.retryStrategy()), t
    }, 'resolveRetryRuntimeConfig'),
    Ly = b(
      (e) => Object.assign(VM(e), zM(e)),
      'getDefaultExtensionConfiguration'
    ),
    KM = Ly,
    YM = b((e) => Object.assign(GM(e), WM(e)), 'resolveDefaultRuntimeConfig'),
    JM = b((e) => (Array.isArray(e) ? e : [e]), 'getArrayIfSingleItem'),
    jy = b((e) => {
      let t = '#text'
      for (let r in e)
        e.hasOwnProperty(r) && e[r][t] !== void 0
          ? (e[r] = e[r][t])
          : typeof e[r] == 'object' && e[r] !== null && (e[r] = jy(e[r]))
      return e
    }, 'getValueFromTextNode'),
    XM = b((e) => e != null, 'isSerializableHeaderValue'),
    cr = b(function (t) {
      return Object.assign(new String(t), {
        deserializeJSON() {
          return JSON.parse(String(t))
        },
        toString() {
          return String(t)
        },
        toJSON() {
          return String(t)
        },
      })
    }, 'LazyJsonString')
  cr.from = (e) =>
    e && typeof e == 'object' && (e instanceof cr || 'deserializeJSON' in e)
      ? e
      : typeof e == 'string' || Object.getPrototypeOf(e) === String.prototype
        ? cr(String(e))
        : cr(JSON.stringify(e))
  cr.fromObject = cr.from
  var fn,
    QM =
      ((fn = class {
        trace() {}
        debug() {}
        info() {}
        warn() {}
        error() {}
      }),
      b(fn, 'NoOpLogger'),
      fn)
  function Ql(e, t, r) {
    let n, o, s
    if (typeof t > 'u' && typeof r > 'u') (n = {}), (s = e)
    else {
      if (((n = e), typeof t == 'function'))
        return (o = t), (s = r), tU(n, o, s)
      s = t
    }
    for (let i of Object.keys(s)) {
      if (!Array.isArray(s[i])) {
        n[i] = s[i]
        continue
      }
      Hy(n, null, s, i)
    }
    return n
  }
  b(Ql, 'map')
  var ZM = b((e) => {
      let t = {}
      for (let [r, n] of Object.entries(e || {})) t[r] = [, n]
      return t
    }, 'convertMap'),
    eU = b((e, t) => {
      let r = {}
      for (let n in t) Hy(r, e, t, n)
      return r
    }, 'take'),
    tU = b(
      (e, t, r) =>
        Ql(
          e,
          Object.entries(r).reduce(
            (n, [o, s]) => (
              Array.isArray(s)
                ? (n[o] = s)
                : typeof s == 'function'
                  ? (n[o] = [t, s()])
                  : (n[o] = [t, s]),
              n
            ),
            {}
          )
        ),
      'mapWithFilter'
    ),
    Hy = b((e, t, r, n) => {
      if (t !== null) {
        let i = r[n]
        typeof i == 'function' && (i = [, i])
        let [a = rU, c = nU, d = n] = i
        ;((typeof a == 'function' && a(t[d])) ||
          (typeof a != 'function' && a)) &&
          (e[n] = c(t[d]))
        return
      }
      let [o, s] = r[n]
      if (typeof s == 'function') {
        let i,
          a = o === void 0 && (i = s()) != null,
          c =
            (typeof o == 'function' && !!o(void 0)) ||
            (typeof o != 'function' && !!o)
        a ? (e[n] = i) : c && (e[n] = s())
      } else {
        let i = o === void 0 && s != null,
          a =
            (typeof o == 'function' && !!o(s)) ||
            (typeof o != 'function' && !!o)
        ;(i || a) && (e[n] = s)
      }
    }, 'applyInstruction'),
    rU = b((e) => e != null, 'nonNullish'),
    nU = b((e) => e, 'pass')
  function qy(e) {
    return (
      (e.includes(',') || e.includes('"')) &&
        (e = `"${e.replace(/"/g, '\\"')}"`),
      e
    )
  }
  b(qy, 'quoteHeader')
  var oU = b((e) => {
      if (e !== e) return 'NaN'
      switch (e) {
        case 1 / 0:
          return 'Infinity'
        case -1 / 0:
          return '-Infinity'
        default:
          return e
      }
    }, 'serializeFloat'),
    sU = b((e) => e.toISOString().replace('.000Z', 'Z'), 'serializeDateTime'),
    Wl = b((e) => {
      if (e == null) return {}
      if (Array.isArray(e)) return e.filter((t) => t != null).map(Wl)
      if (typeof e == 'object') {
        let t = {}
        for (let r of Object.keys(e)) e[r] != null && (t[r] = Wl(e[r]))
        return t
      }
      return e
    }, '_json')
  function $y(e, t, r) {
    if (r <= 0 || !Number.isInteger(r))
      throw new Error(
        'Invalid number of delimiters (' + r + ') for splitEvery.'
      )
    let n = e.split(t)
    if (r === 1) return n
    let o = [],
      s = ''
    for (let i = 0; i < n.length; i++)
      s === '' ? (s = n[i]) : (s += t + n[i]),
        (i + 1) % r === 0 && (o.push(s), (s = ''))
    return s !== '' && o.push(s), o
  }
  b($y, 'splitEvery')
  var iU = b((e) => {
    let t = e.length,
      r = [],
      n = !1,
      o,
      s = 0
    for (let i = 0; i < t; ++i) {
      let a = e[i]
      switch (a) {
        case '"':
          o !== '\\' && (n = !n)
          break
        case ',':
          n || (r.push(e.slice(s, i)), (s = i + 1))
          break
        default:
      }
      o = a
    }
    return (
      r.push(e.slice(s)),
      r.map((i) => {
        i = i.trim()
        let a = i.length
        return a < 2
          ? i
          : (i[0] === '"' && i[a - 1] === '"' && (i = i.slice(1, a - 1)),
            i.replace(/\\"/g, '"'))
      })
    )
  }, 'splitHeader')
})
var Vy,
  aU,
  Gy = v(() => {
    ;(Vy = E(D())),
      (aU = (e) => {
        if (e != null)
          return (
            typeof e == 'object' && '__type' in e && delete e.__type,
            (0, Vy.expectUnion)(e)
          )
      })
  })
var zy,
  da,
  Zl = v(() => {
    ;(zy = E(D())),
      (da = (e, t) => (0, zy.collectBody)(e, t).then((r) => t.utf8Encoder(r)))
  })
var la,
  eu,
  tu,
  Wy = v(() => {
    Zl()
    ;(la = (e, t) =>
      da(e, t).then((r) => {
        if (r.length)
          try {
            return JSON.parse(r)
          } catch (n) {
            throw (
              (n?.name === 'SyntaxError' &&
                Object.defineProperty(n, '$responseBodyText', {
                  value: r,
                }),
              n)
            )
          }
        return {}
      })),
      (eu = async (e, t) => {
        let r = await la(e, t)
        return (r.message = r.message ?? r.Message), r
      }),
      (tu = (e, t) => {
        let r = (s, i) =>
            Object.keys(s).find((a) => a.toLowerCase() === i.toLowerCase()),
          n = (s) => {
            let i = s
            return (
              typeof i == 'number' && (i = i.toString()),
              i.indexOf(',') >= 0 && (i = i.split(',')[0]),
              i.indexOf(':') >= 0 && (i = i.split(':')[0]),
              i.indexOf('#') >= 0 && (i = i.split('#')[1]),
              i
            )
          },
          o = r(e.headers, 'x-amzn-errortype')
        if (o !== void 0) return n(e.headers[o])
        if (t.code !== void 0) return n(t.code)
        if (t.__type !== void 0) return n(t.__type)
      })
  })
var ua = h((dt) => {
  'use strict'
  var Ky =
      ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD',
    cU = Ky + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
    Yy = '[' + Ky + '][' + cU + ']*',
    dU = new RegExp('^' + Yy + '$'),
    lU = function (e, t) {
      let r = [],
        n = t.exec(e)
      for (; n; ) {
        let o = []
        o.startIndex = t.lastIndex - n[0].length
        let s = n.length
        for (let i = 0; i < s; i++) o.push(n[i])
        r.push(o), (n = t.exec(e))
      }
      return r
    },
    uU = function (e) {
      let t = dU.exec(e)
      return !(t === null || typeof t > 'u')
    }
  dt.isExist = function (e) {
    return typeof e < 'u'
  }
  dt.isEmptyObject = function (e) {
    return Object.keys(e).length === 0
  }
  dt.merge = function (e, t, r) {
    if (t) {
      let n = Object.keys(t),
        o = n.length
      for (let s = 0; s < o; s++)
        r === 'strict' ? (e[n[s]] = [t[n[s]]]) : (e[n[s]] = t[n[s]])
    }
  }
  dt.getValue = function (e) {
    return dt.isExist(e) ? e : ''
  }
  dt.isName = uU
  dt.getAllMatches = lU
  dt.nameRegexp = Yy
})
var nu = h((ev) => {
  'use strict'
  var ru = ua(),
    pU = { allowBooleanAttributes: !1, unpairedTags: [] }
  ev.validate = function (e, t) {
    t = Object.assign({}, pU, t)
    let r = [],
      n = !1,
      o = !1
    e[0] === '\uFEFF' && (e = e.substr(1))
    for (let s = 0; s < e.length; s++)
      if (e[s] === '<' && e[s + 1] === '?') {
        if (((s += 2), (s = Xy(e, s)), s.err)) return s
      } else if (e[s] === '<') {
        let i = s
        if ((s++, e[s] === '!')) {
          s = Qy(e, s)
          continue
        } else {
          let a = !1
          e[s] === '/' && ((a = !0), s++)
          let c = ''
          for (
            ;
            s < e.length &&
            e[s] !== '>' &&
            e[s] !== ' ' &&
            e[s] !== '	' &&
            e[s] !==
              `
` &&
            e[s] !== '\r';
            s++
          )
            c += e[s]
          if (
            ((c = c.trim()),
            c[c.length - 1] === '/' &&
              ((c = c.substring(0, c.length - 1)), s--),
            !EU(c))
          ) {
            let u
            return (
              c.trim().length === 0
                ? (u = "Invalid space after '<'.")
                : (u = "Tag '" + c + "' is an invalid name."),
              Q('InvalidTag', u, me(e, s))
            )
          }
          let d = gU(e, s)
          if (d === !1)
            return Q(
              'InvalidAttr',
              "Attributes for '" + c + "' have open quote.",
              me(e, s)
            )
          let l = d.value
          if (((s = d.index), l[l.length - 1] === '/')) {
            let u = s - l.length
            l = l.substring(0, l.length - 1)
            let f = Zy(l, t)
            if (f === !0) n = !0
            else return Q(f.err.code, f.err.msg, me(e, u + f.err.line))
          } else if (a)
            if (d.tagClosed) {
              if (l.trim().length > 0)
                return Q(
                  'InvalidTag',
                  "Closing tag '" +
                    c +
                    "' can't have attributes or invalid starting.",
                  me(e, i)
                )
              if (r.length === 0)
                return Q(
                  'InvalidTag',
                  "Closing tag '" + c + "' has not been opened.",
                  me(e, i)
                )
              {
                let u = r.pop()
                if (c !== u.tagName) {
                  let f = me(e, u.tagStartPos)
                  return Q(
                    'InvalidTag',
                    "Expected closing tag '" +
                      u.tagName +
                      "' (opened in line " +
                      f.line +
                      ', col ' +
                      f.col +
                      ") instead of closing tag '" +
                      c +
                      "'.",
                    me(e, i)
                  )
                }
                r.length == 0 && (o = !0)
              }
            } else
              return Q(
                'InvalidTag',
                "Closing tag '" + c + "' doesn't have proper closing.",
                me(e, s)
              )
          else {
            let u = Zy(l, t)
            if (u !== !0)
              return Q(u.err.code, u.err.msg, me(e, s - l.length + u.err.line))
            if (o === !0)
              return Q(
                'InvalidXml',
                'Multiple possible root nodes found.',
                me(e, s)
              )
            t.unpairedTags.indexOf(c) !== -1 ||
              r.push({ tagName: c, tagStartPos: i }),
              (n = !0)
          }
          for (s++; s < e.length; s++)
            if (e[s] === '<')
              if (e[s + 1] === '!') {
                s++, (s = Qy(e, s))
                continue
              } else if (e[s + 1] === '?') {
                if (((s = Xy(e, ++s)), s.err)) return s
              } else break
            else if (e[s] === '&') {
              let u = yU(e, s)
              if (u == -1)
                return Q('InvalidChar', "char '&' is not expected.", me(e, s))
              s = u
            } else if (o === !0 && !Jy(e[s]))
              return Q('InvalidXml', 'Extra text at the end', me(e, s))
          e[s] === '<' && s--
        }
      } else {
        if (Jy(e[s])) continue
        return Q(
          'InvalidChar',
          "char '" + e[s] + "' is not expected.",
          me(e, s)
        )
      }
    if (n) {
      if (r.length == 1)
        return Q(
          'InvalidTag',
          "Unclosed tag '" + r[0].tagName + "'.",
          me(e, r[0].tagStartPos)
        )
      if (r.length > 0)
        return Q(
          'InvalidXml',
          "Invalid '" +
            JSON.stringify(
              r.map((s) => s.tagName),
              null,
              4
            ).replace(/\r?\n/g, '') +
            "' found.",
          { line: 1, col: 1 }
        )
    } else return Q('InvalidXml', 'Start tag expected.', 1)
    return !0
  }
  function Jy(e) {
    return (
      e === ' ' ||
      e === '	' ||
      e ===
        `
` ||
      e === '\r'
    )
  }
  function Xy(e, t) {
    let r = t
    for (; t < e.length; t++)
      if (e[t] == '?' || e[t] == ' ') {
        let n = e.substr(r, t - r)
        if (t > 5 && n === 'xml')
          return Q(
            'InvalidXml',
            'XML declaration allowed only at the start of the document.',
            me(e, t)
          )
        if (e[t] == '?' && e[t + 1] == '>') {
          t++
          break
        } else continue
      }
    return t
  }
  function Qy(e, t) {
    if (e.length > t + 5 && e[t + 1] === '-' && e[t + 2] === '-') {
      for (t += 3; t < e.length; t++)
        if (e[t] === '-' && e[t + 1] === '-' && e[t + 2] === '>') {
          t += 2
          break
        }
    } else if (
      e.length > t + 8 &&
      e[t + 1] === 'D' &&
      e[t + 2] === 'O' &&
      e[t + 3] === 'C' &&
      e[t + 4] === 'T' &&
      e[t + 5] === 'Y' &&
      e[t + 6] === 'P' &&
      e[t + 7] === 'E'
    ) {
      let r = 1
      for (t += 8; t < e.length; t++)
        if (e[t] === '<') r++
        else if (e[t] === '>' && (r--, r === 0)) break
    } else if (
      e.length > t + 9 &&
      e[t + 1] === '[' &&
      e[t + 2] === 'C' &&
      e[t + 3] === 'D' &&
      e[t + 4] === 'A' &&
      e[t + 5] === 'T' &&
      e[t + 6] === 'A' &&
      e[t + 7] === '['
    ) {
      for (t += 8; t < e.length; t++)
        if (e[t] === ']' && e[t + 1] === ']' && e[t + 2] === '>') {
          t += 2
          break
        }
    }
    return t
  }
  var fU = '"',
    mU = "'"
  function gU(e, t) {
    let r = '',
      n = '',
      o = !1
    for (; t < e.length; t++) {
      if (e[t] === fU || e[t] === mU)
        n === '' ? (n = e[t]) : n !== e[t] || (n = '')
      else if (e[t] === '>' && n === '') {
        o = !0
        break
      }
      r += e[t]
    }
    return n !== '' ? !1 : { value: r, index: t, tagClosed: o }
  }
  var hU = new RegExp(
    `(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,
    'g'
  )
  function Zy(e, t) {
    let r = ru.getAllMatches(e, hU),
      n = {}
    for (let o = 0; o < r.length; o++) {
      if (r[o][1].length === 0)
        return Q(
          'InvalidAttr',
          "Attribute '" + r[o][2] + "' has no space in starting.",
          Wo(r[o])
        )
      if (r[o][3] !== void 0 && r[o][4] === void 0)
        return Q(
          'InvalidAttr',
          "Attribute '" + r[o][2] + "' is without value.",
          Wo(r[o])
        )
      if (r[o][3] === void 0 && !t.allowBooleanAttributes)
        return Q(
          'InvalidAttr',
          "boolean attribute '" + r[o][2] + "' is not allowed.",
          Wo(r[o])
        )
      let s = r[o][2]
      if (!vU(s))
        return Q(
          'InvalidAttr',
          "Attribute '" + s + "' is an invalid name.",
          Wo(r[o])
        )
      if (!n.hasOwnProperty(s)) n[s] = 1
      else
        return Q('InvalidAttr', "Attribute '" + s + "' is repeated.", Wo(r[o]))
    }
    return !0
  }
  function _U(e, t) {
    let r = /\d/
    for (e[t] === 'x' && (t++, (r = /[\da-fA-F]/)); t < e.length; t++) {
      if (e[t] === ';') return t
      if (!e[t].match(r)) break
    }
    return -1
  }
  function yU(e, t) {
    if ((t++, e[t] === ';')) return -1
    if (e[t] === '#') return t++, _U(e, t)
    let r = 0
    for (; t < e.length; t++, r++)
      if (!(e[t].match(/\w/) && r < 20)) {
        if (e[t] === ';') break
        return -1
      }
    return t
  }
  function Q(e, t, r) {
    return { err: { code: e, msg: t, line: r.line || r, col: r.col } }
  }
  function vU(e) {
    return ru.isName(e)
  }
  function EU(e) {
    return ru.isName(e)
  }
  function me(e, t) {
    let r = e.substring(0, t).split(/\r?\n/)
    return { line: r.length, col: r[r.length - 1].length + 1 }
  }
  function Wo(e) {
    return e.startIndex + e[1].length
  }
})
var rv = h((ou) => {
  var tv = {
      preserveOrder: !1,
      attributeNamePrefix: '@_',
      attributesGroupName: !1,
      textNodeName: '#text',
      ignoreAttributes: !0,
      removeNSPrefix: !1,
      allowBooleanAttributes: !1,
      parseTagValue: !0,
      parseAttributeValue: !1,
      trimValues: !0,
      cdataPropName: !1,
      numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 },
      tagValueProcessor: function (e, t) {
        return t
      },
      attributeValueProcessor: function (e, t) {
        return t
      },
      stopNodes: [],
      alwaysCreateTextNode: !1,
      isArray: () => !1,
      commentPropName: !1,
      unpairedTags: [],
      processEntities: !0,
      htmlEntities: !1,
      ignoreDeclaration: !1,
      ignorePiTags: !1,
      transformTagName: !1,
      transformAttributeName: !1,
      updateTag: function (e, t, r) {
        return e
      },
    },
    SU = function (e) {
      return Object.assign({}, tv, e)
    }
  ou.buildOptions = SU
  ou.defaultOptions = tv
})
var ov = h((PW, nv) => {
  'use strict'
  var su = class {
    constructor(t) {
      ;(this.tagname = t), (this.child = []), (this[':@'] = {})
    }
    add(t, r) {
      t === '__proto__' && (t = '#__proto__'), this.child.push({ [t]: r })
    }
    addChild(t) {
      t.tagname === '__proto__' && (t.tagname = '#__proto__'),
        t[':@'] && Object.keys(t[':@']).length > 0
          ? this.child.push({ [t.tagname]: t.child, ':@': t[':@'] })
          : this.child.push({ [t.tagname]: t.child })
    }
  }
  nv.exports = su
})
var iv = h((RW, sv) => {
  var wU = ua()
  function bU(e, t) {
    let r = {}
    if (
      e[t + 3] === 'O' &&
      e[t + 4] === 'C' &&
      e[t + 5] === 'T' &&
      e[t + 6] === 'Y' &&
      e[t + 7] === 'P' &&
      e[t + 8] === 'E'
    ) {
      t = t + 9
      let n = 1,
        o = !1,
        s = !1,
        i = ''
      for (; t < e.length; t++)
        if (e[t] === '<' && !s) {
          if (o && CU(e, t))
            (t += 7),
              ([entityName, val, t] = PU(e, t + 1)),
              val.indexOf('&') === -1 &&
                (r[TU(entityName)] = {
                  regx: RegExp(`&${entityName};`, 'g'),
                  val,
                })
          else if (o && OU(e, t)) t += 8
          else if (o && AU(e, t)) t += 8
          else if (o && xU(e, t)) t += 9
          else if (RU) s = !0
          else throw new Error('Invalid DOCTYPE')
          n++, (i = '')
        } else if (e[t] === '>') {
          if (
            (s ? e[t - 1] === '-' && e[t - 2] === '-' && ((s = !1), n--) : n--,
            n === 0)
          )
            break
        } else e[t] === '[' ? (o = !0) : (i += e[t])
      if (n !== 0) throw new Error('Unclosed DOCTYPE')
    } else throw new Error('Invalid Tag instead of DOCTYPE')
    return { entities: r, i: t }
  }
  function PU(e, t) {
    let r = ''
    for (; t < e.length && e[t] !== "'" && e[t] !== '"'; t++) r += e[t]
    if (((r = r.trim()), r.indexOf(' ') !== -1))
      throw new Error('External entites are not supported')
    let n = e[t++],
      o = ''
    for (; t < e.length && e[t] !== n; t++) o += e[t]
    return [r, o, t]
  }
  function RU(e, t) {
    return e[t + 1] === '!' && e[t + 2] === '-' && e[t + 3] === '-'
  }
  function CU(e, t) {
    return (
      e[t + 1] === '!' &&
      e[t + 2] === 'E' &&
      e[t + 3] === 'N' &&
      e[t + 4] === 'T' &&
      e[t + 5] === 'I' &&
      e[t + 6] === 'T' &&
      e[t + 7] === 'Y'
    )
  }
  function OU(e, t) {
    return (
      e[t + 1] === '!' &&
      e[t + 2] === 'E' &&
      e[t + 3] === 'L' &&
      e[t + 4] === 'E' &&
      e[t + 5] === 'M' &&
      e[t + 6] === 'E' &&
      e[t + 7] === 'N' &&
      e[t + 8] === 'T'
    )
  }
  function AU(e, t) {
    return (
      e[t + 1] === '!' &&
      e[t + 2] === 'A' &&
      e[t + 3] === 'T' &&
      e[t + 4] === 'T' &&
      e[t + 5] === 'L' &&
      e[t + 6] === 'I' &&
      e[t + 7] === 'S' &&
      e[t + 8] === 'T'
    )
  }
  function xU(e, t) {
    return (
      e[t + 1] === '!' &&
      e[t + 2] === 'N' &&
      e[t + 3] === 'O' &&
      e[t + 4] === 'T' &&
      e[t + 5] === 'A' &&
      e[t + 6] === 'T' &&
      e[t + 7] === 'I' &&
      e[t + 8] === 'O' &&
      e[t + 9] === 'N'
    )
  }
  function TU(e) {
    if (wU.isName(e)) return e
    throw new Error(`Invalid entity name ${e}`)
  }
  sv.exports = bU
})
var cv = h((CW, av) => {
  var IU = /^[-+]?0x[a-fA-F0-9]+$/,
    NU = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/,
    DU = { hex: !0, leadingZeros: !0, decimalPoint: '.', eNotation: !0 }
  function kU(e, t = {}) {
    if (((t = Object.assign({}, DU, t)), !e || typeof e != 'string')) return e
    let r = e.trim()
    if (t.skipLike !== void 0 && t.skipLike.test(r)) return e
    if (e === '0') return 0
    if (t.hex && IU.test(r)) return UU(r, 16)
    if (r.search(/[eE]/) !== -1) {
      let n = r.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/)
      if (n) {
        if (t.leadingZeros) r = (n[1] || '') + n[3]
        else if (!(n[2] === '0' && n[3][0] === '.')) return e
        return t.eNotation ? Number(r) : e
      } else return e
    } else {
      let n = NU.exec(r)
      if (n) {
        let o = n[1],
          s = n[2],
          i = MU(n[3])
        if (!t.leadingZeros && s.length > 0 && o && r[2] !== '.') return e
        if (!t.leadingZeros && s.length > 0 && !o && r[1] !== '.') return e
        if (t.leadingZeros && s === e) return 0
        {
          let a = Number(r),
            c = '' + a
          return c.search(/[eE]/) !== -1
            ? t.eNotation
              ? a
              : e
            : r.indexOf('.') !== -1
              ? (c === '0' && i === '') || c === i || (o && c === '-' + i)
                ? a
                : e
              : s
                ? i === c || o + i === c
                  ? a
                  : e
                : r === c || r === o + c
                  ? a
                  : e
        }
      } else return e
    }
  }
  function MU(e) {
    return (
      e &&
        e.indexOf('.') !== -1 &&
        ((e = e.replace(/0+$/, '')),
        e === '.'
          ? (e = '0')
          : e[0] === '.'
            ? (e = '0' + e)
            : e[e.length - 1] === '.' && (e = e.substr(0, e.length - 1))),
      e
    )
  }
  function UU(e, t) {
    if (parseInt) return parseInt(e, t)
    if (Number.parseInt) return Number.parseInt(e, t)
    if (window && window.parseInt) return window.parseInt(e, t)
    throw new Error(
      'parseInt, Number.parseInt, window.parseInt are not supported'
    )
  }
  av.exports = kU
})
var uv = h((OW, lv) => {
  'use strict'
  var dv = ua(),
    Ko = ov(),
    FU = iv(),
    LU = cv(),
    iu = class {
      constructor(t) {
        ;(this.options = t),
          (this.currentNode = null),
          (this.tagsNodeStack = []),
          (this.docTypeEntities = {}),
          (this.lastEntities = {
            apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
            gt: { regex: /&(gt|#62|#x3E);/g, val: '>' },
            lt: { regex: /&(lt|#60|#x3C);/g, val: '<' },
            quot: { regex: /&(quot|#34|#x22);/g, val: '"' },
          }),
          (this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: '&' }),
          (this.htmlEntities = {
            space: { regex: /&(nbsp|#160);/g, val: ' ' },
            cent: { regex: /&(cent|#162);/g, val: '\xA2' },
            pound: { regex: /&(pound|#163);/g, val: '\xA3' },
            yen: { regex: /&(yen|#165);/g, val: '\xA5' },
            euro: { regex: /&(euro|#8364);/g, val: '\u20AC' },
            copyright: { regex: /&(copy|#169);/g, val: '\xA9' },
            reg: { regex: /&(reg|#174);/g, val: '\xAE' },
            inr: { regex: /&(inr|#8377);/g, val: '\u20B9' },
            num_dec: {
              regex: /&#([0-9]{1,7});/g,
              val: (r, n) => String.fromCharCode(Number.parseInt(n, 10)),
            },
            num_hex: {
              regex: /&#x([0-9a-fA-F]{1,6});/g,
              val: (r, n) => String.fromCharCode(Number.parseInt(n, 16)),
            },
          }),
          (this.addExternalEntities = jU),
          (this.parseXml = VU),
          (this.parseTextData = HU),
          (this.resolveNameSpace = qU),
          (this.buildAttributesMap = BU),
          (this.isItStopNode = KU),
          (this.replaceEntitiesValue = zU),
          (this.readStopNodeData = JU),
          (this.saveTextToParentTag = WU),
          (this.addChild = GU)
      }
    }
  function jU(e) {
    let t = Object.keys(e)
    for (let r = 0; r < t.length; r++) {
      let n = t[r]
      this.lastEntities[n] = {
        regex: new RegExp('&' + n + ';', 'g'),
        val: e[n],
      }
    }
  }
  function HU(e, t, r, n, o, s, i) {
    if (
      e !== void 0 &&
      (this.options.trimValues && !n && (e = e.trim()), e.length > 0)
    ) {
      i || (e = this.replaceEntitiesValue(e))
      let a = this.options.tagValueProcessor(t, e, r, o, s)
      return a == null
        ? e
        : typeof a != typeof e || a !== e
          ? a
          : this.options.trimValues
            ? cu(e, this.options.parseTagValue, this.options.numberParseOptions)
            : e.trim() === e
              ? cu(
                  e,
                  this.options.parseTagValue,
                  this.options.numberParseOptions
                )
              : e
    }
  }
  function qU(e) {
    if (this.options.removeNSPrefix) {
      let t = e.split(':'),
        r = e.charAt(0) === '/' ? '/' : ''
      if (t[0] === 'xmlns') return ''
      t.length === 2 && (e = r + t[1])
    }
    return e
  }
  var $U = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, 'gm')
  function BU(e, t, r) {
    if (!this.options.ignoreAttributes && typeof e == 'string') {
      let n = dv.getAllMatches(e, $U),
        o = n.length,
        s = {}
      for (let i = 0; i < o; i++) {
        let a = this.resolveNameSpace(n[i][1]),
          c = n[i][4],
          d = this.options.attributeNamePrefix + a
        if (a.length)
          if (
            (this.options.transformAttributeName &&
              (d = this.options.transformAttributeName(d)),
            d === '__proto__' && (d = '#__proto__'),
            c !== void 0)
          ) {
            this.options.trimValues && (c = c.trim()),
              (c = this.replaceEntitiesValue(c))
            let l = this.options.attributeValueProcessor(a, c, t)
            l == null
              ? (s[d] = c)
              : typeof l != typeof c || l !== c
                ? (s[d] = l)
                : (s[d] = cu(
                    c,
                    this.options.parseAttributeValue,
                    this.options.numberParseOptions
                  ))
          } else this.options.allowBooleanAttributes && (s[d] = !0)
      }
      if (!Object.keys(s).length) return
      if (this.options.attributesGroupName) {
        let i = {}
        return (i[this.options.attributesGroupName] = s), i
      }
      return s
    }
  }
  var VU = function (e) {
    e = e.replace(
      /\r\n?/g,
      `
`
    )
    let t = new Ko('!xml'),
      r = t,
      n = '',
      o = ''
    for (let s = 0; s < e.length; s++)
      if (e[s] === '<')
        if (e[s + 1] === '/') {
          let a = dr(e, '>', s, 'Closing Tag is not closed.'),
            c = e.substring(s + 2, a).trim()
          if (this.options.removeNSPrefix) {
            let u = c.indexOf(':')
            u !== -1 && (c = c.substr(u + 1))
          }
          this.options.transformTagName &&
            (c = this.options.transformTagName(c)),
            r && (n = this.saveTextToParentTag(n, r, o))
          let d = o.substring(o.lastIndexOf('.') + 1)
          if (c && this.options.unpairedTags.indexOf(c) !== -1)
            throw new Error(
              `Unpaired tag can not be used as closing tag: </${c}>`
            )
          let l = 0
          d && this.options.unpairedTags.indexOf(d) !== -1
            ? ((l = o.lastIndexOf('.', o.lastIndexOf('.') - 1)),
              this.tagsNodeStack.pop())
            : (l = o.lastIndexOf('.')),
            (o = o.substring(0, l)),
            (r = this.tagsNodeStack.pop()),
            (n = ''),
            (s = a)
        } else if (e[s + 1] === '?') {
          let a = au(e, s, !1, '?>')
          if (!a) throw new Error('Pi Tag is not closed.')
          if (
            ((n = this.saveTextToParentTag(n, r, o)),
            !(
              (this.options.ignoreDeclaration && a.tagName === '?xml') ||
              this.options.ignorePiTags
            ))
          ) {
            let c = new Ko(a.tagName)
            c.add(this.options.textNodeName, ''),
              a.tagName !== a.tagExp &&
                a.attrExpPresent &&
                (c[':@'] = this.buildAttributesMap(a.tagExp, o, a.tagName)),
              this.addChild(r, c, o)
          }
          s = a.closeIndex + 1
        } else if (e.substr(s + 1, 3) === '!--') {
          let a = dr(e, '-->', s + 4, 'Comment is not closed.')
          if (this.options.commentPropName) {
            let c = e.substring(s + 4, a - 2)
            ;(n = this.saveTextToParentTag(n, r, o)),
              r.add(this.options.commentPropName, [
                { [this.options.textNodeName]: c },
              ])
          }
          s = a
        } else if (e.substr(s + 1, 2) === '!D') {
          let a = FU(e, s)
          ;(this.docTypeEntities = a.entities), (s = a.i)
        } else if (e.substr(s + 1, 2) === '![') {
          let a = dr(e, ']]>', s, 'CDATA is not closed.') - 2,
            c = e.substring(s + 9, a)
          n = this.saveTextToParentTag(n, r, o)
          let d = this.parseTextData(c, r.tagname, o, !0, !1, !0, !0)
          d == null && (d = ''),
            this.options.cdataPropName
              ? r.add(this.options.cdataPropName, [
                  { [this.options.textNodeName]: c },
                ])
              : r.add(this.options.textNodeName, d),
            (s = a + 2)
        } else {
          let a = au(e, s, this.options.removeNSPrefix),
            c = a.tagName,
            d = a.rawTagName,
            l = a.tagExp,
            u = a.attrExpPresent,
            f = a.closeIndex
          this.options.transformTagName &&
            (c = this.options.transformTagName(c)),
            r &&
              n &&
              r.tagname !== '!xml' &&
              (n = this.saveTextToParentTag(n, r, o, !1))
          let g = r
          if (
            (g &&
              this.options.unpairedTags.indexOf(g.tagname) !== -1 &&
              ((r = this.tagsNodeStack.pop()),
              (o = o.substring(0, o.lastIndexOf('.')))),
            c !== t.tagname && (o += o ? '.' + c : c),
            this.isItStopNode(this.options.stopNodes, o, c))
          ) {
            let _ = ''
            if (l.length > 0 && l.lastIndexOf('/') === l.length - 1)
              c[c.length - 1] === '/'
                ? ((c = c.substr(0, c.length - 1)),
                  (o = o.substr(0, o.length - 1)),
                  (l = c))
                : (l = l.substr(0, l.length - 1)),
                (s = a.closeIndex)
            else if (this.options.unpairedTags.indexOf(c) !== -1)
              s = a.closeIndex
            else {
              let S = this.readStopNodeData(e, d, f + 1)
              if (!S) throw new Error(`Unexpected end of ${d}`)
              ;(s = S.i), (_ = S.tagContent)
            }
            let w = new Ko(c)
            c !== l && u && (w[':@'] = this.buildAttributesMap(l, o, c)),
              _ && (_ = this.parseTextData(_, c, o, !0, u, !0, !0)),
              (o = o.substr(0, o.lastIndexOf('.'))),
              w.add(this.options.textNodeName, _),
              this.addChild(r, w, o)
          } else {
            if (l.length > 0 && l.lastIndexOf('/') === l.length - 1) {
              c[c.length - 1] === '/'
                ? ((c = c.substr(0, c.length - 1)),
                  (o = o.substr(0, o.length - 1)),
                  (l = c))
                : (l = l.substr(0, l.length - 1)),
                this.options.transformTagName &&
                  (c = this.options.transformTagName(c))
              let _ = new Ko(c)
              c !== l && u && (_[':@'] = this.buildAttributesMap(l, o, c)),
                this.addChild(r, _, o),
                (o = o.substr(0, o.lastIndexOf('.')))
            } else {
              let _ = new Ko(c)
              this.tagsNodeStack.push(r),
                c !== l && u && (_[':@'] = this.buildAttributesMap(l, o, c)),
                this.addChild(r, _, o),
                (r = _)
            }
            ;(n = ''), (s = f)
          }
        }
      else n += e[s]
    return t.child
  }
  function GU(e, t, r) {
    let n = this.options.updateTag(t.tagname, r, t[':@'])
    n === !1 || (typeof n == 'string' && (t.tagname = n), e.addChild(t))
  }
  var zU = function (e) {
    if (this.options.processEntities) {
      for (let t in this.docTypeEntities) {
        let r = this.docTypeEntities[t]
        e = e.replace(r.regx, r.val)
      }
      for (let t in this.lastEntities) {
        let r = this.lastEntities[t]
        e = e.replace(r.regex, r.val)
      }
      if (this.options.htmlEntities)
        for (let t in this.htmlEntities) {
          let r = this.htmlEntities[t]
          e = e.replace(r.regex, r.val)
        }
      e = e.replace(this.ampEntity.regex, this.ampEntity.val)
    }
    return e
  }
  function WU(e, t, r, n) {
    return (
      e &&
        (n === void 0 && (n = Object.keys(t.child).length === 0),
        (e = this.parseTextData(
          e,
          t.tagname,
          r,
          !1,
          t[':@'] ? Object.keys(t[':@']).length !== 0 : !1,
          n
        )),
        e !== void 0 && e !== '' && t.add(this.options.textNodeName, e),
        (e = '')),
      e
    )
  }
  function KU(e, t, r) {
    let n = '*.' + r
    for (let o in e) {
      let s = e[o]
      if (n === s || t === s) return !0
    }
    return !1
  }
  function YU(e, t, r = '>') {
    let n,
      o = ''
    for (let s = t; s < e.length; s++) {
      let i = e[s]
      if (n) i === n && (n = '')
      else if (i === '"' || i === "'") n = i
      else if (i === r[0])
        if (r[1]) {
          if (e[s + 1] === r[1]) return { data: o, index: s }
        } else return { data: o, index: s }
      else i === '	' && (i = ' ')
      o += i
    }
  }
  function dr(e, t, r, n) {
    let o = e.indexOf(t, r)
    if (o === -1) throw new Error(n)
    return o + t.length - 1
  }
  function au(e, t, r, n = '>') {
    let o = YU(e, t + 1, n)
    if (!o) return
    let s = o.data,
      i = o.index,
      a = s.search(/\s/),
      c = s,
      d = !0
    a !== -1 && ((c = s.substring(0, a)), (s = s.substring(a + 1).trimStart()))
    let l = c
    if (r) {
      let u = c.indexOf(':')
      u !== -1 && ((c = c.substr(u + 1)), (d = c !== o.data.substr(u + 1)))
    }
    return {
      tagName: c,
      tagExp: s,
      closeIndex: i,
      attrExpPresent: d,
      rawTagName: l,
    }
  }
  function JU(e, t, r) {
    let n = r,
      o = 1
    for (; r < e.length; r++)
      if (e[r] === '<')
        if (e[r + 1] === '/') {
          let s = dr(e, '>', r, `${t} is not closed`)
          if (e.substring(r + 2, s).trim() === t && (o--, o === 0))
            return { tagContent: e.substring(n, r), i: s }
          r = s
        } else if (e[r + 1] === '?')
          r = dr(e, '?>', r + 1, 'StopNode is not closed.')
        else if (e.substr(r + 1, 3) === '!--')
          r = dr(e, '-->', r + 3, 'StopNode is not closed.')
        else if (e.substr(r + 1, 2) === '![')
          r = dr(e, ']]>', r, 'StopNode is not closed.') - 2
        else {
          let s = au(e, r, '>')
          s &&
            ((s && s.tagName) === t &&
              s.tagExp[s.tagExp.length - 1] !== '/' &&
              o++,
            (r = s.closeIndex))
        }
  }
  function cu(e, t, r) {
    if (t && typeof e == 'string') {
      let n = e.trim()
      return n === 'true' ? !0 : n === 'false' ? !1 : LU(e, r)
    } else return dv.isExist(e) ? e : ''
  }
  lv.exports = iu
})
var mv = h((fv) => {
  'use strict'
  function XU(e, t) {
    return pv(e, t)
  }
  function pv(e, t, r) {
    let n,
      o = {}
    for (let s = 0; s < e.length; s++) {
      let i = e[s],
        a = QU(i),
        c = ''
      if ((r === void 0 ? (c = a) : (c = r + '.' + a), a === t.textNodeName))
        n === void 0 ? (n = i[a]) : (n += '' + i[a])
      else {
        if (a === void 0) continue
        if (i[a]) {
          let d = pv(i[a], t, c),
            l = eF(d, t)
          i[':@']
            ? ZU(d, i[':@'], c, t)
            : Object.keys(d).length === 1 &&
                d[t.textNodeName] !== void 0 &&
                !t.alwaysCreateTextNode
              ? (d = d[t.textNodeName])
              : Object.keys(d).length === 0 &&
                (t.alwaysCreateTextNode ? (d[t.textNodeName] = '') : (d = '')),
            o[a] !== void 0 && o.hasOwnProperty(a)
              ? (Array.isArray(o[a]) || (o[a] = [o[a]]), o[a].push(d))
              : t.isArray(a, c, l)
                ? (o[a] = [d])
                : (o[a] = d)
        }
      }
    }
    return (
      typeof n == 'string'
        ? n.length > 0 && (o[t.textNodeName] = n)
        : n !== void 0 && (o[t.textNodeName] = n),
      o
    )
  }
  function QU(e) {
    let t = Object.keys(e)
    for (let r = 0; r < t.length; r++) {
      let n = t[r]
      if (n !== ':@') return n
    }
  }
  function ZU(e, t, r, n) {
    if (t) {
      let o = Object.keys(t),
        s = o.length
      for (let i = 0; i < s; i++) {
        let a = o[i]
        n.isArray(a, r + '.' + a, !0, !0) ? (e[a] = [t[a]]) : (e[a] = t[a])
      }
    }
  }
  function eF(e, t) {
    let { textNodeName: r } = t,
      n = Object.keys(e).length
    return !!(
      n === 0 ||
      (n === 1 && (e[r] || typeof e[r] == 'boolean' || e[r] === 0))
    )
  }
  fv.prettify = XU
})
var hv = h((xW, gv) => {
  var { buildOptions: tF } = rv(),
    rF = uv(),
    { prettify: nF } = mv(),
    oF = nu(),
    du = class {
      constructor(t) {
        ;(this.externalEntities = {}), (this.options = tF(t))
      }
      parse(t, r) {
        if (typeof t != 'string')
          if (t.toString) t = t.toString()
          else
            throw new Error('XML data is accepted in String or Bytes[] form.')
        if (r) {
          r === !0 && (r = {})
          let s = oF.validate(t, r)
          if (s !== !0) throw Error(`${s.err.msg}:${s.err.line}:${s.err.col}`)
        }
        let n = new rF(this.options)
        n.addExternalEntities(this.externalEntities)
        let o = n.parseXml(t)
        return this.options.preserveOrder || o === void 0
          ? o
          : nF(o, this.options)
      }
      addEntity(t, r) {
        if (r.indexOf('&') !== -1)
          throw new Error("Entity value can't have '&'")
        if (t.indexOf('&') !== -1 || t.indexOf(';') !== -1)
          throw new Error(
            "An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'"
          )
        if (r === '&')
          throw new Error("An entity with value '&' is not permitted")
        this.externalEntities[t] = r
      }
    }
  gv.exports = du
})
var Sv = h((TW, Ev) => {
  var sF = `
`
  function iF(e, t) {
    let r = ''
    return t.format && t.indentBy.length > 0 && (r = sF), yv(e, t, '', r)
  }
  function yv(e, t, r, n) {
    let o = '',
      s = !1
    for (let i = 0; i < e.length; i++) {
      let a = e[i],
        c = aF(a)
      if (c === void 0) continue
      let d = ''
      if (
        (r.length === 0 ? (d = c) : (d = `${r}.${c}`), c === t.textNodeName)
      ) {
        let _ = a[c]
        cF(d, t) || ((_ = t.tagValueProcessor(c, _)), (_ = vv(_, t))),
          s && (o += n),
          (o += _),
          (s = !1)
        continue
      } else if (c === t.cdataPropName) {
        s && (o += n), (o += `<![CDATA[${a[c][0][t.textNodeName]}]]>`), (s = !1)
        continue
      } else if (c === t.commentPropName) {
        ;(o += n + `<!--${a[c][0][t.textNodeName]}-->`), (s = !0)
        continue
      } else if (c[0] === '?') {
        let _ = _v(a[':@'], t),
          w = c === '?xml' ? '' : n,
          S = a[c][0][t.textNodeName]
        ;(S = S.length !== 0 ? ' ' + S : ''),
          (o += w + `<${c}${S}${_}?>`),
          (s = !0)
        continue
      }
      let l = n
      l !== '' && (l += t.indentBy)
      let u = _v(a[':@'], t),
        f = n + `<${c}${u}`,
        g = yv(a[c], t, d, l)
      t.unpairedTags.indexOf(c) !== -1
        ? t.suppressUnpairedNode
          ? (o += f + '>')
          : (o += f + '/>')
        : (!g || g.length === 0) && t.suppressEmptyNode
          ? (o += f + '/>')
          : g && g.endsWith('>')
            ? (o += f + `>${g}${n}</${c}>`)
            : ((o += f + '>'),
              g && n !== '' && (g.includes('/>') || g.includes('</'))
                ? (o += n + t.indentBy + g + n)
                : (o += g),
              (o += `</${c}>`)),
        (s = !0)
    }
    return o
  }
  function aF(e) {
    let t = Object.keys(e)
    for (let r = 0; r < t.length; r++) {
      let n = t[r]
      if (e.hasOwnProperty(n) && n !== ':@') return n
    }
  }
  function _v(e, t) {
    let r = ''
    if (e && !t.ignoreAttributes)
      for (let n in e) {
        if (!e.hasOwnProperty(n)) continue
        let o = t.attributeValueProcessor(n, e[n])
        ;(o = vv(o, t)),
          o === !0 && t.suppressBooleanAttributes
            ? (r += ` ${n.substr(t.attributeNamePrefix.length)}`)
            : (r += ` ${n.substr(t.attributeNamePrefix.length)}="${o}"`)
      }
    return r
  }
  function cF(e, t) {
    e = e.substr(0, e.length - t.textNodeName.length - 1)
    let r = e.substr(e.lastIndexOf('.') + 1)
    for (let n in t.stopNodes)
      if (t.stopNodes[n] === e || t.stopNodes[n] === '*.' + r) return !0
    return !1
  }
  function vv(e, t) {
    if (e && e.length > 0 && t.processEntities)
      for (let r = 0; r < t.entities.length; r++) {
        let n = t.entities[r]
        e = e.replace(n.regex, n.val)
      }
    return e
  }
  Ev.exports = iF
})
var bv = h((IW, wv) => {
  'use strict'
  var dF = Sv(),
    lF = {
      attributeNamePrefix: '@_',
      attributesGroupName: !1,
      textNodeName: '#text',
      ignoreAttributes: !0,
      cdataPropName: !1,
      format: !1,
      indentBy: '  ',
      suppressEmptyNode: !1,
      suppressUnpairedNode: !0,
      suppressBooleanAttributes: !0,
      tagValueProcessor: function (e, t) {
        return t
      },
      attributeValueProcessor: function (e, t) {
        return t
      },
      preserveOrder: !1,
      commentPropName: !1,
      unpairedTags: [],
      entities: [
        { regex: new RegExp('&', 'g'), val: '&amp;' },
        { regex: new RegExp('>', 'g'), val: '&gt;' },
        { regex: new RegExp('<', 'g'), val: '&lt;' },
        { regex: new RegExp("'", 'g'), val: '&apos;' },
        { regex: new RegExp('"', 'g'), val: '&quot;' },
      ],
      processEntities: !0,
      stopNodes: [],
      oneListGroup: !1,
    }
  function At(e) {
    ;(this.options = Object.assign({}, lF, e)),
      this.options.ignoreAttributes || this.options.attributesGroupName
        ? (this.isAttribute = function () {
            return !1
          })
        : ((this.attrPrefixLen = this.options.attributeNamePrefix.length),
          (this.isAttribute = fF)),
      (this.processTextOrObjNode = uF),
      this.options.format
        ? ((this.indentate = pF),
          (this.tagEndChar = `>
`),
          (this.newLine = `
`))
        : ((this.indentate = function () {
            return ''
          }),
          (this.tagEndChar = '>'),
          (this.newLine = ''))
  }
  At.prototype.build = function (e) {
    return this.options.preserveOrder
      ? dF(e, this.options)
      : (Array.isArray(e) &&
          this.options.arrayNodeName &&
          this.options.arrayNodeName.length > 1 &&
          (e = { [this.options.arrayNodeName]: e }),
        this.j2x(e, 0).val)
  }
  At.prototype.j2x = function (e, t) {
    let r = '',
      n = ''
    for (let o in e)
      if (Object.prototype.hasOwnProperty.call(e, o))
        if (typeof e[o] > 'u') this.isAttribute(o) && (n += '')
        else if (e[o] === null)
          this.isAttribute(o)
            ? (n += '')
            : o[0] === '?'
              ? (n += this.indentate(t) + '<' + o + '?' + this.tagEndChar)
              : (n += this.indentate(t) + '<' + o + '/' + this.tagEndChar)
        else if (e[o] instanceof Date)
          n += this.buildTextValNode(e[o], o, '', t)
        else if (typeof e[o] != 'object') {
          let s = this.isAttribute(o)
          if (s) r += this.buildAttrPairStr(s, '' + e[o])
          else if (o === this.options.textNodeName) {
            let i = this.options.tagValueProcessor(o, '' + e[o])
            n += this.replaceEntitiesValue(i)
          } else n += this.buildTextValNode(e[o], o, '', t)
        } else if (Array.isArray(e[o])) {
          let s = e[o].length,
            i = '',
            a = ''
          for (let c = 0; c < s; c++) {
            let d = e[o][c]
            if (!(typeof d > 'u'))
              if (d === null)
                o[0] === '?'
                  ? (n += this.indentate(t) + '<' + o + '?' + this.tagEndChar)
                  : (n += this.indentate(t) + '<' + o + '/' + this.tagEndChar)
              else if (typeof d == 'object')
                if (this.options.oneListGroup) {
                  let l = this.j2x(d, t + 1)
                  ;(i += l.val),
                    this.options.attributesGroupName &&
                      d.hasOwnProperty(this.options.attributesGroupName) &&
                      (a += l.attrStr)
                } else i += this.processTextOrObjNode(d, o, t)
              else if (this.options.oneListGroup) {
                let l = this.options.tagValueProcessor(o, d)
                ;(l = this.replaceEntitiesValue(l)), (i += l)
              } else i += this.buildTextValNode(d, o, '', t)
          }
          this.options.oneListGroup && (i = this.buildObjectNode(i, o, a, t)),
            (n += i)
        } else if (
          this.options.attributesGroupName &&
          o === this.options.attributesGroupName
        ) {
          let s = Object.keys(e[o]),
            i = s.length
          for (let a = 0; a < i; a++)
            r += this.buildAttrPairStr(s[a], '' + e[o][s[a]])
        } else n += this.processTextOrObjNode(e[o], o, t)
    return { attrStr: r, val: n }
  }
  At.prototype.buildAttrPairStr = function (e, t) {
    return (
      (t = this.options.attributeValueProcessor(e, '' + t)),
      (t = this.replaceEntitiesValue(t)),
      this.options.suppressBooleanAttributes && t === 'true'
        ? ' ' + e
        : ' ' + e + '="' + t + '"'
    )
  }
  function uF(e, t, r) {
    let n = this.j2x(e, r + 1)
    return e[this.options.textNodeName] !== void 0 &&
      Object.keys(e).length === 1
      ? this.buildTextValNode(e[this.options.textNodeName], t, n.attrStr, r)
      : this.buildObjectNode(n.val, t, n.attrStr, r)
  }
  At.prototype.buildObjectNode = function (e, t, r, n) {
    if (e === '')
      return t[0] === '?'
        ? this.indentate(n) + '<' + t + r + '?' + this.tagEndChar
        : this.indentate(n) + '<' + t + r + this.closeTag(t) + this.tagEndChar
    {
      let o = '</' + t + this.tagEndChar,
        s = ''
      return (
        t[0] === '?' && ((s = '?'), (o = '')),
        (r || r === '') && e.indexOf('<') === -1
          ? this.indentate(n) + '<' + t + r + s + '>' + e + o
          : this.options.commentPropName !== !1 &&
              t === this.options.commentPropName &&
              s.length === 0
            ? this.indentate(n) + `<!--${e}-->` + this.newLine
            : this.indentate(n) +
              '<' +
              t +
              r +
              s +
              this.tagEndChar +
              e +
              this.indentate(n) +
              o
      )
    }
  }
  At.prototype.closeTag = function (e) {
    let t = ''
    return (
      this.options.unpairedTags.indexOf(e) !== -1
        ? this.options.suppressUnpairedNode || (t = '/')
        : this.options.suppressEmptyNode
          ? (t = '/')
          : (t = `></${e}`),
      t
    )
  }
  At.prototype.buildTextValNode = function (e, t, r, n) {
    if (this.options.cdataPropName !== !1 && t === this.options.cdataPropName)
      return this.indentate(n) + `<![CDATA[${e}]]>` + this.newLine
    if (
      this.options.commentPropName !== !1 &&
      t === this.options.commentPropName
    )
      return this.indentate(n) + `<!--${e}-->` + this.newLine
    if (t[0] === '?')
      return this.indentate(n) + '<' + t + r + '?' + this.tagEndChar
    {
      let o = this.options.tagValueProcessor(t, e)
      return (
        (o = this.replaceEntitiesValue(o)),
        o === ''
          ? this.indentate(n) + '<' + t + r + this.closeTag(t) + this.tagEndChar
          : this.indentate(n) +
            '<' +
            t +
            r +
            '>' +
            o +
            '</' +
            t +
            this.tagEndChar
      )
    }
  }
  At.prototype.replaceEntitiesValue = function (e) {
    if (e && e.length > 0 && this.options.processEntities)
      for (let t = 0; t < this.options.entities.length; t++) {
        let r = this.options.entities[t]
        e = e.replace(r.regex, r.val)
      }
    return e
  }
  function pF(e) {
    return this.options.indentBy.repeat(e)
  }
  function fF(e) {
    return e.startsWith(this.options.attributeNamePrefix) &&
      e !== this.options.textNodeName
      ? e.substr(this.attrPrefixLen)
      : !1
  }
  wv.exports = At
})
var Rv = h((NW, Pv) => {
  'use strict'
  var mF = nu(),
    gF = hv(),
    hF = bv()
  Pv.exports = { XMLParser: gF, XMLValidator: mF, XMLBuilder: hF }
})
var Cv,
  Ov,
  Yo,
  lu,
  _F,
  Av = v(() => {
    ;(Cv = E(D())), (Ov = E(Rv()))
    Zl()
    ;(Yo = (e, t) =>
      da(e, t).then((r) => {
        if (r.length) {
          let n = new Ov.XMLParser({
            attributeNamePrefix: '',
            htmlEntities: !0,
            ignoreAttributes: !1,
            ignoreDeclaration: !0,
            parseTagValue: !1,
            trimValues: !1,
            tagValueProcessor: (c, d) =>
              d.trim() === '' &&
              d.includes(`
`)
                ? ''
                : void 0,
          })
          n.addEntity('#xD', '\r'),
            n.addEntity(
              '#10',
              `
`
            )
          let o
          try {
            o = n.parse(r, !0)
          } catch (c) {
            throw (
              (c &&
                typeof c == 'object' &&
                Object.defineProperty(c, '$responseBodyText', {
                  value: r,
                }),
              c)
            )
          }
          let s = '#text',
            i = Object.keys(o)[0],
            a = o[i]
          return (
            a[s] && ((a[i] = a[s]), delete a[s]),
            (0, Cv.getValueFromTextNode)(a)
          )
        }
        return {}
      })),
      (lu = async (e, t) => {
        let r = await Yo(e, t)
        return (
          r.Error && (r.Error.message = r.Error.message ?? r.Error.Message), r
        )
      }),
      (_F = (e, t) => {
        if (t?.Error?.Code !== void 0) return t.Error.Code
        if (t?.Code !== void 0) return t.Code
        if (e.statusCode == 404) return 'NotFound'
      })
  })
var xv = v(() => {
  Ey()
  Gy()
  Wy()
  Av()
})
var Je = {}
st(Je, {
  AWSSDKSigV4Signer: () => y_,
  AwsSdkSigV4ASigner: () => zi,
  AwsSdkSigV4Signer: () => be,
  NODE_AUTH_SCHEME_PREFERENCE_OPTIONS: () => $o,
  NODE_SIGV4A_CONFIG_OPTIONS: () => WD,
  _toBool: () => $k,
  _toNum: () => Bk,
  _toStr: () => qk,
  awsExpectUnion: () => aU,
  emitWarningIfUnsupportedVersion: () => tn,
  loadRestJsonErrorCode: () => tu,
  loadRestXmlErrorCode: () => _F,
  parseJsonBody: () => la,
  parseJsonErrorBody: () => eu,
  parseXmlBody: () => Yo,
  parseXmlErrorBody: () => lu,
  resolveAWSSDKSigV4Config: () => Lk,
  resolveAwsSdkSigV4AConfig: () => zD,
  resolveAwsSdkSigV4Config: () => dn,
  setCredentialFeature: () => Rt,
  setFeature: () => l_,
  state: () => Gi,
  validateSigningProperties: () => qo,
})
var oe = v(() => {
  We()
  vy()
  xv()
})
var _n = h((BW, qv) => {
  'use strict'
  var fa = Object.defineProperty,
    yF = Object.getOwnPropertyDescriptor,
    vF = Object.getOwnPropertyNames,
    EF = Object.prototype.hasOwnProperty,
    lt = (e, t) => fa(e, 'name', { value: t, configurable: !0 }),
    SF = (e, t) => {
      for (var r in t) fa(e, r, { get: t[r], enumerable: !0 })
    },
    wF = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of vF(t))
          !EF.call(e, o) &&
            o !== r &&
            fa(e, o, {
              get: () => t[o],
              enumerable: !(n = yF(t, o)) || n.enumerable,
            })
      return e
    },
    bF = (e) => wF(fa({}, '__esModule', { value: !0 }), e),
    Dv = {}
  SF(Dv, {
    DEFAULT_UA_APP_ID: () => kv,
    getUserAgentMiddlewareOptions: () => Hv,
    getUserAgentPlugin: () => IF,
    resolveUserAgentConfig: () => Uv,
    userAgentMiddleware: () => jv,
  })
  qv.exports = bF(Dv)
  var PF = (_e(), F(Yr)),
    kv = void 0
  function Mv(e) {
    return e === void 0 ? !0 : typeof e == 'string' && e.length <= 50
  }
  lt(Mv, 'isValidUserAgentAppId')
  function Uv(e) {
    let t = (0, PF.normalizeProvider)(e.userAgentAppId ?? kv),
      { customUserAgent: r } = e
    return Object.assign(e, {
      customUserAgent: typeof r == 'string' ? [[r]] : r,
      userAgentAppId: lt(async () => {
        let n = await t()
        if (!Mv(n)) {
          let o =
            e.logger?.constructor?.name === 'NoOpLogger' || !e.logger
              ? console
              : e.logger
          typeof n != 'string'
            ? o?.warn('userAgentAppId must be a string or undefined.')
            : n.length > 50 &&
              o?.warn(
                'The provided userAgentAppId exceeds the maximum length of 50 characters.'
              )
        }
        return n
      }, 'userAgentAppId'),
    })
  }
  lt(Uv, 'resolveUserAgentConfig')
  var RF = en(),
    CF = X(),
    Xe = (oe(), F(Je)),
    OF = /\d{12}\.ddb/
  async function Fv(e, t, r) {
    if (
      (r.request?.headers?.['smithy-protocol'] === 'rpc-v2-cbor' &&
        (0, Xe.setFeature)(e, 'PROTOCOL_RPC_V2_CBOR', 'M'),
      typeof t.retryStrategy == 'function')
    ) {
      let s = await t.retryStrategy()
      typeof s.acquireInitialRetryToken == 'function'
        ? s.constructor?.name?.includes('Adaptive')
          ? (0, Xe.setFeature)(e, 'RETRY_MODE_ADAPTIVE', 'F')
          : (0, Xe.setFeature)(e, 'RETRY_MODE_STANDARD', 'E')
        : (0, Xe.setFeature)(e, 'RETRY_MODE_LEGACY', 'D')
    }
    if (typeof t.accountIdEndpointMode == 'function') {
      let s = e.endpointV2
      switch (
        (String(s?.url?.hostname).match(OF) &&
          (0, Xe.setFeature)(e, 'ACCOUNT_ID_ENDPOINT', 'O'),
        await t.accountIdEndpointMode?.())
      ) {
        case 'disabled':
          ;(0, Xe.setFeature)(e, 'ACCOUNT_ID_MODE_DISABLED', 'Q')
          break
        case 'preferred':
          ;(0, Xe.setFeature)(e, 'ACCOUNT_ID_MODE_PREFERRED', 'P')
          break
        case 'required':
          ;(0, Xe.setFeature)(e, 'ACCOUNT_ID_MODE_REQUIRED', 'R')
          break
      }
    }
    let o = e.__smithy_context?.selectedHttpAuthScheme?.identity
    if (o?.$source) {
      let s = o
      s.accountId && (0, Xe.setFeature)(e, 'RESOLVED_ACCOUNT_ID', 'T')
      for (let [i, a] of Object.entries(s.$source ?? {}))
        (0, Xe.setFeature)(e, i, a)
    }
  }
  lt(Fv, 'checkFeatures')
  var Tv = 'user-agent',
    uu = 'x-amz-user-agent',
    Iv = ' ',
    pu = '/',
    AF = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
    xF = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g,
    Nv = '-',
    TF = 1024
  function Lv(e) {
    let t = ''
    for (let r in e) {
      let n = e[r]
      if (t.length + n.length + 1 <= TF) {
        t.length ? (t += ',' + n) : (t += n)
        continue
      }
      break
    }
    return t
  }
  lt(Lv, 'encodeFeatures')
  var jv = lt(
      (e) => (t, r) => async (n) => {
        let { request: o } = n
        if (!CF.HttpRequest.isInstance(o)) return t(n)
        let { headers: s } = o,
          i = r?.userAgent?.map(pa) || [],
          a = (await e.defaultUserAgentProvider()).map(pa)
        await Fv(r, e, n)
        let c = r
        a.push(
          `m/${Lv(Object.assign({}, r.__smithy_context?.features, c.__aws_sdk_context?.features))}`
        )
        let d = e?.customUserAgent?.map(pa) || [],
          l = await e.userAgentAppId()
        l && a.push(pa([`app/${l}`]))
        let u = (0, RF.getUserAgentPrefix)(),
          f = (u ? [u] : []).concat([...a, ...i, ...d]).join(Iv),
          g = [...a.filter((_) => _.startsWith('aws-sdk-')), ...d].join(Iv)
        return (
          e.runtime !== 'browser'
            ? (g && (s[uu] = s[uu] ? `${s[Tv]} ${g}` : g), (s[Tv] = f))
            : (s[uu] = f),
          t({ ...n, request: o })
        )
      },
      'userAgentMiddleware'
    ),
    pa = lt((e) => {
      let t = e[0]
          .split(pu)
          .map((i) => i.replace(AF, Nv))
          .join(pu),
        r = e[1]?.replace(xF, Nv),
        n = t.indexOf(pu),
        o = t.substring(0, n),
        s = t.substring(n + 1)
      return (
        o === 'api' && (s = s.toLowerCase()),
        [o, s, r]
          .filter((i) => i && i.length > 0)
          .reduce((i, a, c) => {
            switch (c) {
              case 0:
                return a
              case 1:
                return `${i}/${a}`
              default:
                return `${i}#${a}`
            }
          }, '')
      )
    }, 'escapeUserAgent'),
    Hv = {
      name: 'getUserAgentMiddleware',
      step: 'build',
      priority: 'low',
      tags: ['SET_USER_AGENT', 'USER_AGENT'],
      override: !0,
    },
    IF = lt(
      (e) => ({
        applyToStack: lt((t) => {
          t.add(jv(e), Hv)
        }, 'applyToStack'),
      }),
      'getUserAgentPlugin'
    )
})
var zv = h((VW, Gv) => {
  var ma = Object.defineProperty,
    NF = Object.getOwnPropertyDescriptor,
    DF = Object.getOwnPropertyNames,
    kF = Object.prototype.hasOwnProperty,
    $v = (e, t) => ma(e, 'name', { value: t, configurable: !0 }),
    MF = (e, t) => {
      for (var r in t) ma(e, r, { get: t[r], enumerable: !0 })
    },
    UF = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of DF(t))
          !kF.call(e, o) &&
            o !== r &&
            ma(e, o, {
              get: () => t[o],
              enumerable: !(n = NF(t, o)) || n.enumerable,
            })
      return e
    },
    FF = (e) => UF(ma({}, '__esModule', { value: !0 }), e),
    Bv = {}
  MF(Bv, {
    SelectorType: () => Vv,
    booleanSelector: () => LF,
    numberSelector: () => jF,
  })
  Gv.exports = FF(Bv)
  var LF = $v((e, t, r) => {
      if (t in e) {
        if (e[t] === 'true') return !0
        if (e[t] === 'false') return !1
        throw new Error(
          `Cannot load ${r} "${t}". Expected "true" or "false", got ${e[t]}.`
        )
      }
    }, 'booleanSelector'),
    jF = $v((e, t, r) => {
      if (!(t in e)) return
      let n = parseInt(e[t], 10)
      if (Number.isNaN(n))
        throw new TypeError(
          `Cannot load ${r} '${t}'. Expected number, got '${e[t]}'.`
        )
      return n
    }, 'numberSelector'),
    Vv = ((e) => ((e.ENV = 'env'), (e.CONFIG = 'shared config entry'), e))(
      Vv || {}
    )
})
var Qe = h((GW, nE) => {
  var ha = Object.defineProperty,
    HF = Object.getOwnPropertyDescriptor,
    qF = Object.getOwnPropertyNames,
    $F = Object.prototype.hasOwnProperty,
    Fe = (e, t) => ha(e, 'name', { value: t, configurable: !0 }),
    BF = (e, t) => {
      for (var r in t) ha(e, r, { get: t[r], enumerable: !0 })
    },
    VF = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of qF(t))
          !$F.call(e, o) &&
            o !== r &&
            ha(e, o, {
              get: () => t[o],
              enumerable: !(n = HF(t, o)) || n.enumerable,
            })
      return e
    },
    GF = (e) => VF(ha({}, '__esModule', { value: !0 }), e),
    Yv = {}
  BF(Yv, {
    CONFIG_USE_DUALSTACK_ENDPOINT: () => Xv,
    CONFIG_USE_FIPS_ENDPOINT: () => Zv,
    DEFAULT_USE_DUALSTACK_ENDPOINT: () => zF,
    DEFAULT_USE_FIPS_ENDPOINT: () => KF,
    ENV_USE_DUALSTACK_ENDPOINT: () => Jv,
    ENV_USE_FIPS_ENDPOINT: () => Qv,
    NODE_REGION_CONFIG_FILE_OPTIONS: () => eL,
    NODE_REGION_CONFIG_OPTIONS: () => ZF,
    NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => WF,
    NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => YF,
    REGION_ENV_NAME: () => eE,
    REGION_INI_NAME: () => tE,
    getRegionInfo: () => sL,
    resolveCustomEndpointsConfig: () => JF,
    resolveEndpointsConfig: () => QF,
    resolveRegionConfig: () => tL,
  })
  nE.exports = GF(Yv)
  var xt = zv(),
    Jv = 'AWS_USE_DUALSTACK_ENDPOINT',
    Xv = 'use_dualstack_endpoint',
    zF = !1,
    WF = {
      environmentVariableSelector: (e) =>
        (0, xt.booleanSelector)(e, Jv, xt.SelectorType.ENV),
      configFileSelector: (e) =>
        (0, xt.booleanSelector)(e, Xv, xt.SelectorType.CONFIG),
      default: !1,
    },
    Qv = 'AWS_USE_FIPS_ENDPOINT',
    Zv = 'use_fips_endpoint',
    KF = !1,
    YF = {
      environmentVariableSelector: (e) =>
        (0, xt.booleanSelector)(e, Qv, xt.SelectorType.ENV),
      configFileSelector: (e) =>
        (0, xt.booleanSelector)(e, Zv, xt.SelectorType.CONFIG),
      default: !1,
    },
    ga = Ue(),
    JF = Fe((e) => {
      let { tls: t, endpoint: r, urlParser: n, useDualstackEndpoint: o } = e
      return Object.assign(e, {
        tls: t ?? !0,
        endpoint: (0, ga.normalizeProvider)(typeof r == 'string' ? n(r) : r),
        isCustomEndpoint: !0,
        useDualstackEndpoint: (0, ga.normalizeProvider)(o ?? !1),
      })
    }, 'resolveCustomEndpointsConfig'),
    XF = Fe(async (e) => {
      let { tls: t = !0 } = e,
        r = await e.region()
      if (
        !new RegExp(
          /^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/
        ).test(r)
      )
        throw new Error('Invalid region in client config')
      let o = await e.useDualstackEndpoint(),
        s = await e.useFipsEndpoint(),
        { hostname: i } =
          (await e.regionInfoProvider(r, {
            useDualstackEndpoint: o,
            useFipsEndpoint: s,
          })) ?? {}
      if (!i) throw new Error('Cannot resolve hostname from client config')
      return e.urlParser(`${t ? 'https:' : 'http:'}//${i}`)
    }, 'getEndpointFromRegion'),
    QF = Fe((e) => {
      let t = (0, ga.normalizeProvider)(e.useDualstackEndpoint ?? !1),
        { endpoint: r, useFipsEndpoint: n, urlParser: o, tls: s } = e
      return Object.assign(e, {
        tls: s ?? !0,
        endpoint: r
          ? (0, ga.normalizeProvider)(typeof r == 'string' ? o(r) : r)
          : () =>
              XF({
                ...e,
                useDualstackEndpoint: t,
                useFipsEndpoint: n,
              }),
        isCustomEndpoint: !!r,
        useDualstackEndpoint: t,
      })
    }, 'resolveEndpointsConfig'),
    eE = 'AWS_REGION',
    tE = 'region',
    ZF = {
      environmentVariableSelector: (e) => e[eE],
      configFileSelector: (e) => e[tE],
      default: () => {
        throw new Error('Region is missing')
      },
    },
    eL = { preferredFile: 'credentials' },
    rE = Fe(
      (e) =>
        typeof e == 'string' && (e.startsWith('fips-') || e.endsWith('-fips')),
      'isFipsRegion'
    ),
    Wv = Fe(
      (e) =>
        rE(e)
          ? ['fips-aws-global', 'aws-fips'].includes(e)
            ? 'us-east-1'
            : e.replace(/fips-(dkr-|prod-)?|-fips/, '')
          : e,
      'getRealRegion'
    ),
    tL = Fe((e) => {
      let { region: t, useFipsEndpoint: r } = e
      if (!t) throw new Error('Region is missing')
      return Object.assign(e, {
        region: async () => {
          if (typeof t == 'string') return Wv(t)
          let n = await t()
          return Wv(n)
        },
        useFipsEndpoint: async () => {
          let n = typeof t == 'string' ? t : await t()
          return rE(n)
            ? !0
            : typeof r != 'function'
              ? Promise.resolve(!!r)
              : r()
        },
      })
    }, 'resolveRegionConfig'),
    Kv = Fe(
      (e = [], { useFipsEndpoint: t, useDualstackEndpoint: r }) =>
        e.find(
          ({ tags: n }) =>
            t === n.includes('fips') && r === n.includes('dualstack')
        )?.hostname,
      'getHostnameFromVariants'
    ),
    rL = Fe(
      (e, { regionHostname: t, partitionHostname: r }) =>
        t || (r ? r.replace('{region}', e) : void 0),
      'getResolvedHostname'
    ),
    nL = Fe(
      (e, { partitionHash: t }) =>
        Object.keys(t || {}).find((r) => t[r].regions.includes(e)) ?? 'aws',
      'getResolvedPartition'
    ),
    oL = Fe((e, { signingRegion: t, regionRegex: r, useFipsEndpoint: n }) => {
      if (t) return t
      if (n) {
        let o = r
            .replace('\\\\', '\\')
            .replace(/^\^/g, '\\.')
            .replace(/\$$/g, '\\.'),
          s = e.match(o)
        if (s) return s[0].slice(1, -1)
      }
    }, 'getResolvedSigningRegion'),
    sL = Fe(
      (
        e,
        {
          useFipsEndpoint: t = !1,
          useDualstackEndpoint: r = !1,
          signingService: n,
          regionHash: o,
          partitionHash: s,
        }
      ) => {
        let i = nL(e, { partitionHash: s }),
          a = e in o ? e : (s[i]?.endpoint ?? e),
          c = { useFipsEndpoint: t, useDualstackEndpoint: r },
          d = Kv(o[a]?.variants, c),
          l = Kv(s[i]?.variants, c),
          u = rL(a, { regionHostname: d, partitionHostname: l })
        if (u === void 0)
          throw new Error(
            `Endpoint resolution failed for: ${{ resolvedRegion: a, useFipsEndpoint: t, useDualstackEndpoint: r }}`
          )
        let f = oL(u, {
          signingRegion: o[a]?.signingRegion,
          regionRegex: s[i].regionRegex,
          useFipsEndpoint: t,
        })
        return {
          partition: i,
          signingService: n,
          hostname: u,
          ...(f && { signingRegion: f }),
          ...(o[a]?.signingService && {
            signingService: o[a].signingService,
          }),
        }
      },
      'getRegionInfo'
    )
})
var Jo = h((zW, cE) => {
  var _a = Object.defineProperty,
    iL = Object.getOwnPropertyDescriptor,
    aL = Object.getOwnPropertyNames,
    cL = Object.prototype.hasOwnProperty,
    sE = (e, t) => _a(e, 'name', { value: t, configurable: !0 }),
    dL = (e, t) => {
      for (var r in t) _a(e, r, { get: t[r], enumerable: !0 })
    },
    lL = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of aL(t))
          !cL.call(e, o) &&
            o !== r &&
            _a(e, o, {
              get: () => t[o],
              enumerable: !(n = iL(t, o)) || n.enumerable,
            })
      return e
    },
    uL = (e) => lL(_a({}, '__esModule', { value: !0 }), e),
    iE = {}
  dL(iE, {
    contentLengthMiddleware: () => fu,
    contentLengthMiddlewareOptions: () => aE,
    getContentLengthPlugin: () => fL,
  })
  cE.exports = uL(iE)
  var pL = X(),
    oE = 'content-length'
  function fu(e) {
    return (t) => async (r) => {
      let n = r.request
      if (pL.HttpRequest.isInstance(n)) {
        let { body: o, headers: s } = n
        if (
          o &&
          Object.keys(s)
            .map((i) => i.toLowerCase())
            .indexOf(oE) === -1
        )
          try {
            let i = e(o)
            n.headers = { ...n.headers, [oE]: String(i) }
          } catch {}
      }
      return t({ ...r, request: n })
    }
  }
  sE(fu, 'contentLengthMiddleware')
  var aE = {
      step: 'build',
      tags: ['SET_CONTENT_LENGTH', 'CONTENT_LENGTH'],
      name: 'contentLengthMiddleware',
      override: !0,
    },
    fL = sE(
      (e) => ({
        applyToStack: (t) => {
          t.add(fu(e.bodyLengthChecker), aE)
        },
      }),
      'getContentLengthPlugin'
    )
})
var yn = h((ya) => {
  'use strict'
  Object.defineProperty(ya, '__esModule', { value: !0 })
  ya.getHomeDir = void 0
  var mL = require('os'),
    gL = require('path'),
    mu = {},
    hL = () =>
      process && process.geteuid ? `${process.geteuid()}` : 'DEFAULT',
    _L = () => {
      let {
        HOME: e,
        USERPROFILE: t,
        HOMEPATH: r,
        HOMEDRIVE: n = `C:${gL.sep}`,
      } = process.env
      if (e) return e
      if (t) return t
      if (r) return `${n}${r}`
      let o = hL()
      return mu[o] || (mu[o] = (0, mL.homedir)()), mu[o]
    }
  ya.getHomeDir = _L
})
var gu = h((va) => {
  'use strict'
  Object.defineProperty(va, '__esModule', { value: !0 })
  va.getSSOTokenFilepath = void 0
  var yL = require('crypto'),
    vL = require('path'),
    EL = yn(),
    SL = (e) => {
      let r = (0, yL.createHash)('sha1').update(e).digest('hex')
      return (0, vL.join)(
        (0, EL.getHomeDir)(),
        '.aws',
        'sso',
        'cache',
        `${r}.json`
      )
    }
  va.getSSOTokenFilepath = SL
})
var dE = h((Ea) => {
  'use strict'
  Object.defineProperty(Ea, '__esModule', { value: !0 })
  Ea.getSSOTokenFromFile = void 0
  var wL = require('fs'),
    bL = gu(),
    { readFile: PL } = wL.promises,
    RL = async (e) => {
      let t = (0, bL.getSSOTokenFilepath)(e),
        r = await PL(t, 'utf8')
      return JSON.parse(r)
    }
  Ea.getSSOTokenFromFile = RL
})
var _u = h((Sa) => {
  'use strict'
  Object.defineProperty(Sa, '__esModule', { value: !0 })
  Sa.slurpFile = void 0
  var CL = require('fs'),
    { readFile: OL } = CL.promises,
    hu = {},
    AL = (e, t) => (
      (!hu[e] || t?.ignoreCache) && (hu[e] = OL(e, 'utf8')), hu[e]
    )
  Sa.slurpFile = AL
})
var Tt = h((XW, Qo) => {
  var Pa = Object.defineProperty,
    xL = Object.getOwnPropertyDescriptor,
    TL = Object.getOwnPropertyNames,
    IL = Object.prototype.hasOwnProperty,
    Ce = (e, t) => Pa(e, 'name', { value: t, configurable: !0 }),
    NL = (e, t) => {
      for (var r in t) Pa(e, r, { get: t[r], enumerable: !0 })
    },
    yu = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of TL(t))
          !IL.call(e, o) &&
            o !== r &&
            Pa(e, o, {
              get: () => t[o],
              enumerable: !(n = xL(t, o)) || n.enumerable,
            })
      return e
    },
    Eu = (e, t, r) => (yu(e, t, 'default'), r && yu(r, t, 'default')),
    DL = (e) => yu(Pa({}, '__esModule', { value: !0 }), e),
    Xo = {}
  NL(Xo, {
    CONFIG_PREFIX_SEPARATOR: () => lr,
    DEFAULT_PROFILE: () => fE,
    ENV_PROFILE: () => pE,
    getProfileName: () => kL,
    loadSharedConfigFiles: () => gE,
    loadSsoSessionData: () => WL,
    parseKnownFiles: () => YL,
  })
  Qo.exports = DL(Xo)
  Eu(Xo, yn(), Qo.exports)
  var pE = 'AWS_PROFILE',
    fE = 'default',
    kL = Ce((e) => e.profile || process.env[pE] || fE, 'getProfileName')
  Eu(Xo, gu(), Qo.exports)
  Eu(Xo, dE(), Qo.exports)
  var wa = Be(),
    ML = Ce(
      (e) =>
        Object.entries(e)
          .filter(([t]) => {
            let r = t.indexOf(lr)
            return r === -1
              ? !1
              : Object.values(wa.IniSectionType).includes(t.substring(0, r))
          })
          .reduce(
            (t, [r, n]) => {
              let o = r.indexOf(lr),
                s =
                  r.substring(0, o) === wa.IniSectionType.PROFILE
                    ? r.substring(o + 1)
                    : r
              return (t[s] = n), t
            },
            { ...(e.default && { default: e.default }) }
          ),
      'getConfigData'
    ),
    ba = require('path'),
    UL = yn(),
    FL = 'AWS_CONFIG_FILE',
    mE = Ce(
      () =>
        process.env[FL] || (0, ba.join)((0, UL.getHomeDir)(), '.aws', 'config'),
      'getConfigFilepath'
    ),
    LL = yn(),
    jL = 'AWS_SHARED_CREDENTIALS_FILE',
    HL = Ce(
      () =>
        process.env[jL] ||
        (0, ba.join)((0, LL.getHomeDir)(), '.aws', 'credentials'),
      'getCredentialsFilepath'
    ),
    qL = yn(),
    $L = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/,
    BL = ['__proto__', 'profile __proto__'],
    vu = Ce((e) => {
      let t = {},
        r,
        n
      for (let o of e.split(/\r?\n/)) {
        let s = o.split(/(^|\s)[;#]/)[0].trim()
        if (s[0] === '[' && s[s.length - 1] === ']') {
          ;(r = void 0), (n = void 0)
          let a = s.substring(1, s.length - 1),
            c = $L.exec(a)
          if (c) {
            let [, d, , l] = c
            Object.values(wa.IniSectionType).includes(d) &&
              (r = [d, l].join(lr))
          } else r = a
          if (BL.includes(a))
            throw new Error(`Found invalid profile name "${a}"`)
        } else if (r) {
          let a = s.indexOf('=')
          if (![0, -1].includes(a)) {
            let [c, d] = [s.substring(0, a).trim(), s.substring(a + 1).trim()]
            if (d === '') n = c
            else {
              n && o.trimStart() === o && (n = void 0), (t[r] = t[r] || {})
              let l = n ? [n, c].join(lr) : c
              t[r][l] = d
            }
          }
        }
      }
      return t
    }, 'parseIni'),
    lE = _u(),
    uE = Ce(() => ({}), 'swallowError'),
    lr = '.',
    gE = Ce(async (e = {}) => {
      let { filepath: t = HL(), configFilepath: r = mE() } = e,
        n = (0, qL.getHomeDir)(),
        o = '~/',
        s = t
      t.startsWith(o) && (s = (0, ba.join)(n, t.slice(2)))
      let i = r
      r.startsWith(o) && (i = (0, ba.join)(n, r.slice(2)))
      let a = await Promise.all([
        (0, lE.slurpFile)(i, { ignoreCache: e.ignoreCache })
          .then(vu)
          .then(ML)
          .catch(uE),
        (0, lE.slurpFile)(s, { ignoreCache: e.ignoreCache }).then(vu).catch(uE),
      ])
      return { configFile: a[0], credentialsFile: a[1] }
    }, 'loadSharedConfigFiles'),
    VL = Ce(
      (e) =>
        Object.entries(e)
          .filter(([t]) => t.startsWith(wa.IniSectionType.SSO_SESSION + lr))
          .reduce(
            (t, [r, n]) => ({
              ...t,
              [r.substring(r.indexOf(lr) + 1)]: n,
            }),
            {}
          ),
      'getSsoSessionData'
    ),
    GL = _u(),
    zL = Ce(() => ({}), 'swallowError'),
    WL = Ce(
      async (e = {}) =>
        (0, GL.slurpFile)(e.configFilepath ?? mE())
          .then(vu)
          .then(VL)
          .catch(zL),
      'loadSsoSessionData'
    ),
    KL = Ce((...e) => {
      let t = {}
      for (let r of e)
        for (let [n, o] of Object.entries(r))
          t[n] !== void 0 ? Object.assign(t[n], o) : (t[n] = o)
      return t
    }, 'mergeConfigFiles'),
    YL = Ce(async (e) => {
      let t = await gE(e)
      return KL(t.configFile, t.credentialsFile)
    }, 'parseKnownFiles')
})
var It = h((QW, yE) => {
  var Ra = Object.defineProperty,
    JL = Object.getOwnPropertyDescriptor,
    XL = Object.getOwnPropertyNames,
    QL = Object.prototype.hasOwnProperty,
    vn = (e, t) => Ra(e, 'name', { value: t, configurable: !0 }),
    ZL = (e, t) => {
      for (var r in t) Ra(e, r, { get: t[r], enumerable: !0 })
    },
    ej = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of XL(t))
          !QL.call(e, o) &&
            o !== r &&
            Ra(e, o, {
              get: () => t[o],
              enumerable: !(n = JL(t, o)) || n.enumerable,
            })
      return e
    },
    tj = (e) => ej(Ra({}, '__esModule', { value: !0 }), e),
    _E = {}
  ZL(_E, { loadConfig: () => ij })
  yE.exports = tj(_E)
  var Zo = fe()
  function Su(e) {
    try {
      let t = new Set(Array.from(e.match(/([A-Z_]){3,}/g) ?? []))
      return (
        t.delete('CONFIG'),
        t.delete('CONFIG_PREFIX_SEPARATOR'),
        t.delete('ENV'),
        [...t].join(', ')
      )
    } catch {
      return e
    }
  }
  vn(Su, 'getSelectorName')
  var rj = vn(
      (e, t) => async () => {
        try {
          let r = e(process.env)
          if (r === void 0) throw new Error()
          return r
        } catch (r) {
          throw new Zo.CredentialsProviderError(
            r.message || `Not found in ENV: ${Su(e.toString())}`,
            { logger: t }
          )
        }
      },
      'fromEnv'
    ),
    hE = Tt(),
    nj = vn(
      (e, { preferredFile: t = 'config', ...r } = {}) =>
        async () => {
          let n = (0, hE.getProfileName)(r),
            { configFile: o, credentialsFile: s } = await (0,
            hE.loadSharedConfigFiles)(r),
            i = s[n] || {},
            a = o[n] || {},
            c = t === 'config' ? { ...i, ...a } : { ...a, ...i }
          try {
            let l = e(c, t === 'config' ? o : s)
            if (l === void 0) throw new Error()
            return l
          } catch (d) {
            throw new Zo.CredentialsProviderError(
              d.message ||
                `Not found in config files w/ profile [${n}]: ${Su(e.toString())}`,
              { logger: r.logger }
            )
          }
        },
      'fromSharedConfigFiles'
    ),
    oj = vn((e) => typeof e == 'function', 'isFunction'),
    sj = vn(
      (e) => (oj(e) ? async () => await e() : (0, Zo.fromStatic)(e)),
      'fromStatic'
    ),
    ij = vn(
      (
        { environmentVariableSelector: e, configFileSelector: t, default: r },
        n = {}
      ) => (0, Zo.memoize)((0, Zo.chain)(rj(e), nj(t, n), sj(r))),
      'loadConfig'
    )
})
var wE = h((Ca) => {
  'use strict'
  Object.defineProperty(Ca, '__esModule', { value: !0 })
  Ca.getEndpointUrlConfig = void 0
  var vE = Tt(),
    EE = 'AWS_ENDPOINT_URL',
    SE = 'endpoint_url',
    aj = (e) => ({
      environmentVariableSelector: (t) => {
        let r = e.split(' ').map((s) => s.toUpperCase()),
          n = t[[EE, ...r].join('_')]
        if (n) return n
        let o = t[EE]
        if (o) return o
      },
      configFileSelector: (t, r) => {
        if (r && t.services) {
          let o = r[['services', t.services].join(vE.CONFIG_PREFIX_SEPARATOR)]
          if (o) {
            let s = e.split(' ').map((a) => a.toLowerCase()),
              i = o[[s.join('_'), SE].join(vE.CONFIG_PREFIX_SEPARATOR)]
            if (i) return i
          }
        }
        let n = t[SE]
        if (n) return n
      },
      default: void 0,
    })
  Ca.getEndpointUrlConfig = aj
})
var wu = h((Oa) => {
  'use strict'
  Object.defineProperty(Oa, '__esModule', { value: !0 })
  Oa.getEndpointFromConfig = void 0
  var cj = It(),
    dj = wE(),
    lj = async (e) =>
      (0, cj.loadConfig)((0, dj.getEndpointUrlConfig)(e ?? ''))()
  Oa.getEndpointFromConfig = lj
})
var CE = h((tK, RE) => {
  var Aa = Object.defineProperty,
    uj = Object.getOwnPropertyDescriptor,
    pj = Object.getOwnPropertyNames,
    fj = Object.prototype.hasOwnProperty,
    mj = (e, t) => Aa(e, 'name', { value: t, configurable: !0 }),
    gj = (e, t) => {
      for (var r in t) Aa(e, r, { get: t[r], enumerable: !0 })
    },
    hj = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of pj(t))
          !fj.call(e, o) &&
            o !== r &&
            Aa(e, o, {
              get: () => t[o],
              enumerable: !(n = uj(t, o)) || n.enumerable,
            })
      return e
    },
    _j = (e) => hj(Aa({}, '__esModule', { value: !0 }), e),
    bE = {}
  gj(bE, { parseQueryString: () => PE })
  RE.exports = _j(bE)
  function PE(e) {
    let t = {}
    if (((e = e.replace(/^\?/, '')), e))
      for (let r of e.split('&')) {
        let [n, o = null] = r.split('=')
        ;(n = decodeURIComponent(n)),
          o && (o = decodeURIComponent(o)),
          n in t
            ? Array.isArray(t[n])
              ? t[n].push(o)
              : (t[n] = [t[n], o])
            : (t[n] = o)
      }
    return t
  }
  mj(PE, 'parseQueryString')
})
var ur = h((rK, xE) => {
  var xa = Object.defineProperty,
    yj = Object.getOwnPropertyDescriptor,
    vj = Object.getOwnPropertyNames,
    Ej = Object.prototype.hasOwnProperty,
    Sj = (e, t) => xa(e, 'name', { value: t, configurable: !0 }),
    wj = (e, t) => {
      for (var r in t) xa(e, r, { get: t[r], enumerable: !0 })
    },
    bj = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of vj(t))
          !Ej.call(e, o) &&
            o !== r &&
            xa(e, o, {
              get: () => t[o],
              enumerable: !(n = yj(t, o)) || n.enumerable,
            })
      return e
    },
    Pj = (e) => bj(xa({}, '__esModule', { value: !0 }), e),
    OE = {}
  wj(OE, { parseUrl: () => AE })
  xE.exports = Pj(OE)
  var Rj = CE(),
    AE = Sj((e) => {
      if (typeof e == 'string') return AE(new URL(e))
      let { hostname: t, pathname: r, port: n, protocol: o, search: s } = e,
        i
      return (
        s && (i = (0, Rj.parseQueryString)(s)),
        {
          hostname: t,
          port: n ? parseInt(n) : void 0,
          protocol: o,
          path: r,
          query: i,
        }
      )
    }, 'parseUrl')
})
var Nt = h((nK, UE) => {
  var Ia = Object.defineProperty,
    Cj = Object.getOwnPropertyDescriptor,
    Oj = Object.getOwnPropertyNames,
    Aj = Object.prototype.hasOwnProperty,
    Le = (e, t) => Ia(e, 'name', { value: t, configurable: !0 }),
    xj = (e, t) => {
      for (var r in t) Ia(e, r, { get: t[r], enumerable: !0 })
    },
    Tj = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of Oj(t))
          !Aj.call(e, o) &&
            o !== r &&
            Ia(e, o, {
              get: () => t[o],
              enumerable: !(n = Cj(t, o)) || n.enumerable,
            })
      return e
    },
    Ij = (e) => Tj(Ia({}, '__esModule', { value: !0 }), e),
    IE = {}
  xj(IE, {
    endpointMiddleware: () => kE,
    endpointMiddlewareOptions: () => ME,
    getEndpointFromInstructions: () => NE,
    getEndpointPlugin: () => $j,
    resolveEndpointConfig: () => Vj,
    resolveParams: () => DE,
    toEndpointV1: () => bu,
  })
  UE.exports = Ij(IE)
  var Nj = Le(async (e) => {
      let t = e?.Bucket || ''
      if (
        (typeof e.Bucket == 'string' &&
          (e.Bucket = t
            .replace(/#/g, encodeURIComponent('#'))
            .replace(/\?/g, encodeURIComponent('?'))),
        Fj(t))
      ) {
        if (e.ForcePathStyle === !0)
          throw new Error(
            'Path-style addressing cannot be used with ARN buckets'
          )
      } else
        (!Uj(t) ||
          (t.indexOf('.') !== -1 && !String(e.Endpoint).startsWith('http:')) ||
          t.toLowerCase() !== t ||
          t.length < 3) &&
          (e.ForcePathStyle = !0)
      return (
        e.DisableMultiRegionAccessPoints &&
          ((e.disableMultiRegionAccessPoints = !0), (e.DisableMRAP = !0)),
        e
      )
    }, 'resolveParamsForS3'),
    Dj = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
    kj = /(\d+\.){3}\d+/,
    Mj = /\.\./,
    Uj = Le(
      (e) => Dj.test(e) && !kj.test(e) && !Mj.test(e),
      'isDnsCompatibleBucketName'
    ),
    Fj = Le((e) => {
      let [t, r, n, , , o] = e.split(':'),
        s = t === 'arn' && e.split(':').length >= 6,
        i = !!(s && r && n && o)
      if (s && !i) throw new Error(`Invalid ARN: ${e} was an invalid ARN.`)
      return i
    }, 'isArnBucketName'),
    Lj = Le((e, t, r) => {
      let n = Le(async () => {
        let o = r[e] ?? r[t]
        return typeof o == 'function' ? o() : o
      }, 'configProvider')
      return e === 'credentialScope' || t === 'CredentialScope'
        ? async () => {
            let o =
              typeof r.credentials == 'function'
                ? await r.credentials()
                : r.credentials
            return o?.credentialScope ?? o?.CredentialScope
          }
        : e === 'accountId' || t === 'AccountId'
          ? async () => {
              let o =
                typeof r.credentials == 'function'
                  ? await r.credentials()
                  : r.credentials
              return o?.accountId ?? o?.AccountId
            }
          : e === 'endpoint' || t === 'endpoint'
            ? async () => {
                let o = await n()
                if (o && typeof o == 'object') {
                  if ('url' in o) return o.url.href
                  if ('hostname' in o) {
                    let { protocol: s, hostname: i, port: a, path: c } = o
                    return `${s}//${i}${a ? ':' + a : ''}${c}`
                  }
                }
                return o
              }
            : n
    }, 'createConfigValueProvider'),
    jj = wu(),
    TE = ur(),
    bu = Le(
      (e) =>
        typeof e == 'object'
          ? 'url' in e
            ? (0, TE.parseUrl)(e.url)
            : e
          : (0, TE.parseUrl)(e),
      'toEndpointV1'
    ),
    NE = Le(async (e, t, r, n) => {
      if (!r.endpoint) {
        let i
        r.serviceConfiguredEndpoint
          ? (i = await r.serviceConfiguredEndpoint())
          : (i = await (0, jj.getEndpointFromConfig)(r.serviceId)),
          i && (r.endpoint = () => Promise.resolve(bu(i)))
      }
      let o = await DE(e, t, r)
      if (typeof r.endpointProvider != 'function')
        throw new Error('config.endpointProvider is not set.')
      return r.endpointProvider(o, n)
    }, 'getEndpointFromInstructions'),
    DE = Le(async (e, t, r) => {
      let n = {},
        o = t?.getEndpointParameterInstructions?.() || {}
      for (let [s, i] of Object.entries(o))
        switch (i.type) {
          case 'staticContextParams':
            n[s] = i.value
            break
          case 'contextParams':
            n[s] = e[i.name]
            break
          case 'clientContextParams':
          case 'builtInParams':
            n[s] = await Lj(i.name, s, r)()
            break
          case 'operationContextParams':
            n[s] = i.get(e)
            break
          default:
            throw new Error(
              'Unrecognized endpoint parameter instruction: ' +
                JSON.stringify(i)
            )
        }
      return (
        Object.keys(o).length === 0 && Object.assign(n, r),
        String(r.serviceId).toLowerCase() === 's3' && (await Nj(n)),
        n
      )
    }, 'resolveParams'),
    Hj = (_e(), F(Yr)),
    Ta = Ue(),
    kE = Le(
      ({ config: e, instructions: t }) =>
        (r, n) =>
        async (o) => {
          e.endpoint && (0, Hj.setFeature)(n, 'ENDPOINT_OVERRIDE', 'N')
          let s = await NE(
            o.input,
            {
              getEndpointParameterInstructions() {
                return t
              },
            },
            { ...e },
            n
          )
          ;(n.endpointV2 = s), (n.authSchemes = s.properties?.authSchemes)
          let i = n.authSchemes?.[0]
          if (i) {
            ;(n.signing_region = i.signingRegion),
              (n.signing_service = i.signingName)
            let c = (0, Ta.getSmithyContext)(n)?.selectedHttpAuthScheme
              ?.httpAuthOption
            c &&
              (c.signingProperties = Object.assign(
                c.signingProperties || {},
                {
                  signing_region: i.signingRegion,
                  signingRegion: i.signingRegion,
                  signing_service: i.signingName,
                  signingName: i.signingName,
                  signingRegionSet: i.signingRegionSet,
                },
                i.properties
              ))
          }
          return r({ ...o })
        },
      'endpointMiddleware'
    ),
    qj = Et(),
    ME = {
      step: 'serialize',
      tags: ['ENDPOINT_PARAMETERS', 'ENDPOINT_V2', 'ENDPOINT'],
      name: 'endpointV2Middleware',
      override: !0,
      relation: 'before',
      toMiddleware: qj.serializerMiddlewareOption.name,
    },
    $j = Le(
      (e, t) => ({
        applyToStack: (r) => {
          r.addRelativeTo(kE({ config: e, instructions: t }), ME)
        },
      }),
      'getEndpointPlugin'
    ),
    Bj = wu(),
    Vj = Le((e) => {
      let t = e.tls ?? !0,
        { endpoint: r, useDualstackEndpoint: n, useFipsEndpoint: o } = e,
        s =
          r != null
            ? async () => bu(await (0, Ta.normalizeProvider)(r)())
            : void 0,
        a = Object.assign(e, {
          endpoint: s,
          tls: t,
          isCustomEndpoint: !!r,
          useDualstackEndpoint: (0, Ta.normalizeProvider)(n ?? !1),
          useFipsEndpoint: (0, Ta.normalizeProvider)(o ?? !1),
        }),
        c
      return (
        (a.serviceConfiguredEndpoint = async () => (
          e.serviceId && !c && (c = (0, Bj.getEndpointFromConfig)(e.serviceId)),
          c
        )),
        a
      )
    }, 'resolveEndpointConfig')
})
function es() {
  return (
    Na > Da.length - 16 && (FE.default.randomFillSync(Da), (Na = 0)),
    Da.slice(Na, (Na += 16))
  )
}
var FE,
  Da,
  Na,
  Pu = v(() => {
    ;(FE = E(require('crypto'))), (Da = new Uint8Array(256)), (Na = Da.length)
  })
var LE,
  jE = v(() => {
    LE =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
  })
function Gj(e) {
  return typeof e == 'string' && LE.test(e)
}
var Dt,
  ts = v(() => {
    jE()
    Dt = Gj
  })
function pr(e, t = 0) {
  return (
    ae[e[t + 0]] +
    ae[e[t + 1]] +
    ae[e[t + 2]] +
    ae[e[t + 3]] +
    '-' +
    ae[e[t + 4]] +
    ae[e[t + 5]] +
    '-' +
    ae[e[t + 6]] +
    ae[e[t + 7]] +
    '-' +
    ae[e[t + 8]] +
    ae[e[t + 9]] +
    '-' +
    ae[e[t + 10]] +
    ae[e[t + 11]] +
    ae[e[t + 12]] +
    ae[e[t + 13]] +
    ae[e[t + 14]] +
    ae[e[t + 15]]
  )
}
function zj(e, t = 0) {
  let r = pr(e, t)
  if (!Dt(r)) throw TypeError('Stringified UUID is invalid')
  return r
}
var ae,
  HE,
  rs = v(() => {
    ts()
    ae = []
    for (let e = 0; e < 256; ++e) ae.push((e + 256).toString(16).slice(1))
    HE = zj
  })
function Wj(e, t, r) {
  let n = (t && r) || 0,
    o = t || new Array(16)
  e = e || {}
  let s = e.node || qE,
    i = e.clockseq !== void 0 ? e.clockseq : Ru
  if (s == null || i == null) {
    let f = e.random || (e.rng || es)()
    s == null && (s = qE = [f[0] | 1, f[1], f[2], f[3], f[4], f[5]]),
      i == null && (i = Ru = ((f[6] << 8) | f[7]) & 16383)
  }
  let a = e.msecs !== void 0 ? e.msecs : Date.now(),
    c = e.nsecs !== void 0 ? e.nsecs : Ou + 1,
    d = a - Cu + (c - Ou) / 1e4
  if (
    (d < 0 && e.clockseq === void 0 && (i = (i + 1) & 16383),
    (d < 0 || a > Cu) && e.nsecs === void 0 && (c = 0),
    c >= 1e4)
  )
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
  ;(Cu = a), (Ou = c), (Ru = i), (a += 122192928e5)
  let l = ((a & 268435455) * 1e4 + c) % 4294967296
  ;(o[n++] = (l >>> 24) & 255),
    (o[n++] = (l >>> 16) & 255),
    (o[n++] = (l >>> 8) & 255),
    (o[n++] = l & 255)
  let u = ((a / 4294967296) * 1e4) & 268435455
  ;(o[n++] = (u >>> 8) & 255),
    (o[n++] = u & 255),
    (o[n++] = ((u >>> 24) & 15) | 16),
    (o[n++] = (u >>> 16) & 255),
    (o[n++] = (i >>> 8) | 128),
    (o[n++] = i & 255)
  for (let f = 0; f < 6; ++f) o[n + f] = s[f]
  return t || pr(o)
}
var qE,
  Ru,
  Cu,
  Ou,
  $E,
  BE = v(() => {
    Pu()
    rs()
    ;(Cu = 0), (Ou = 0)
    $E = Wj
  })
function Kj(e) {
  if (!Dt(e)) throw TypeError('Invalid UUID')
  let t,
    r = new Uint8Array(16)
  return (
    (r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
    (r[1] = (t >>> 16) & 255),
    (r[2] = (t >>> 8) & 255),
    (r[3] = t & 255),
    (r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
    (r[5] = t & 255),
    (r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
    (r[7] = t & 255),
    (r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
    (r[9] = t & 255),
    (r[10] = ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
    (r[11] = (t / 4294967296) & 255),
    (r[12] = (t >>> 24) & 255),
    (r[13] = (t >>> 16) & 255),
    (r[14] = (t >>> 8) & 255),
    (r[15] = t & 255),
    r
  )
}
var ka,
  Au = v(() => {
    ts()
    ka = Kj
  })
function Yj(e) {
  e = unescape(encodeURIComponent(e))
  let t = []
  for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r))
  return t
}
function ns(e, t, r) {
  function n(o, s, i, a) {
    var c
    if (
      (typeof o == 'string' && (o = Yj(o)),
      typeof s == 'string' && (s = ka(s)),
      ((c = s) === null || c === void 0 ? void 0 : c.length) !== 16)
    )
      throw TypeError(
        'Namespace must be array-like (16 iterable integer values, 0-255)'
      )
    let d = new Uint8Array(16 + o.length)
    if (
      (d.set(s),
      d.set(o, s.length),
      (d = r(d)),
      (d[6] = (d[6] & 15) | t),
      (d[8] = (d[8] & 63) | 128),
      i)
    ) {
      a = a || 0
      for (let l = 0; l < 16; ++l) i[a + l] = d[l]
      return i
    }
    return pr(d)
  }
  try {
    n.name = e
  } catch {}
  return (n.DNS = Jj), (n.URL = Xj), n
}
var Jj,
  Xj,
  xu = v(() => {
    rs()
    Au()
    ;(Jj = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'),
      (Xj = '6ba7b811-9dad-11d1-80b4-00c04fd430c8')
  })
function Qj(e) {
  return (
    Array.isArray(e)
      ? (e = Buffer.from(e))
      : typeof e == 'string' && (e = Buffer.from(e, 'utf8')),
    VE.default.createHash('md5').update(e).digest()
  )
}
var VE,
  GE,
  zE = v(() => {
    VE = E(require('crypto'))
    GE = Qj
  })
var Zj,
  WE,
  KE = v(() => {
    xu()
    zE()
    ;(Zj = ns('v3', 48, GE)), (WE = Zj)
  })
var YE,
  Tu,
  JE = v(() => {
    ;(YE = E(require('crypto'))), (Tu = { randomUUID: YE.default.randomUUID })
  })
function e1(e, t, r) {
  if (Tu.randomUUID && !t && !e) return Tu.randomUUID()
  e = e || {}
  let n = e.random || (e.rng || es)()
  if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), t)) {
    r = r || 0
    for (let o = 0; o < 16; ++o) t[r + o] = n[o]
    return t
  }
  return pr(n)
}
var XE,
  QE = v(() => {
    JE()
    Pu()
    rs()
    XE = e1
  })
function t1(e) {
  return (
    Array.isArray(e)
      ? (e = Buffer.from(e))
      : typeof e == 'string' && (e = Buffer.from(e, 'utf8')),
    ZE.default.createHash('sha1').update(e).digest()
  )
}
var ZE,
  eS,
  tS = v(() => {
    ZE = E(require('crypto'))
    eS = t1
  })
var r1,
  rS,
  nS = v(() => {
    xu()
    tS()
    ;(r1 = ns('v5', 80, eS)), (rS = r1)
  })
var oS,
  sS = v(() => {
    oS = '00000000-0000-0000-0000-000000000000'
  })
function n1(e) {
  if (!Dt(e)) throw TypeError('Invalid UUID')
  return parseInt(e.slice(14, 15), 16)
}
var iS,
  aS = v(() => {
    ts()
    iS = n1
  })
var Iu = {}
st(Iu, {
  NIL: () => oS,
  parse: () => ka,
  stringify: () => HE,
  v1: () => $E,
  v3: () => WE,
  v4: () => XE,
  v5: () => rS,
  validate: () => Dt,
  version: () => iS,
})
var Nu = v(() => {
  BE()
  KE()
  QE()
  nS()
  sS()
  aS()
  ts()
  rs()
  Au()
})
var ku = h((BK, uS) => {
  var Ma = Object.defineProperty,
    o1 = Object.getOwnPropertyDescriptor,
    s1 = Object.getOwnPropertyNames,
    i1 = Object.prototype.hasOwnProperty,
    fr = (e, t) => Ma(e, 'name', { value: t, configurable: !0 }),
    a1 = (e, t) => {
      for (var r in t) Ma(e, r, { get: t[r], enumerable: !0 })
    },
    c1 = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of s1(t))
          !i1.call(e, o) &&
            o !== r &&
            Ma(e, o, {
              get: () => t[o],
              enumerable: !(n = o1(t, o)) || n.enumerable,
            })
      return e
    },
    d1 = (e) => c1(Ma({}, '__esModule', { value: !0 }), e),
    cS = {}
  a1(cS, {
    isBrowserNetworkError: () => lS,
    isClockSkewCorrectedError: () => dS,
    isClockSkewError: () => h1,
    isRetryableByTrait: () => g1,
    isServerError: () => y1,
    isThrottlingError: () => _1,
    isTransientError: () => Du,
  })
  uS.exports = d1(cS)
  var l1 = [
      'AuthFailure',
      'InvalidSignatureException',
      'RequestExpired',
      'RequestInTheFuture',
      'RequestTimeTooSkewed',
      'SignatureDoesNotMatch',
    ],
    u1 = [
      'BandwidthLimitExceeded',
      'EC2ThrottledException',
      'LimitExceededException',
      'PriorRequestNotComplete',
      'ProvisionedThroughputExceededException',
      'RequestLimitExceeded',
      'RequestThrottled',
      'RequestThrottledException',
      'SlowDown',
      'ThrottledException',
      'Throttling',
      'ThrottlingException',
      'TooManyRequestsException',
      'TransactionInProgressException',
    ],
    p1 = ['TimeoutError', 'RequestTimeout', 'RequestTimeoutException'],
    f1 = [500, 502, 503, 504],
    m1 = ['ECONNRESET', 'ECONNREFUSED', 'EPIPE', 'ETIMEDOUT'],
    g1 = fr((e) => e.$retryable !== void 0, 'isRetryableByTrait'),
    h1 = fr((e) => l1.includes(e.name), 'isClockSkewError'),
    dS = fr(
      (e) => e.$metadata?.clockSkewCorrected,
      'isClockSkewCorrectedError'
    ),
    lS = fr((e) => {
      let t = new Set([
        'Failed to fetch',
        'NetworkError when attempting to fetch resource',
        'The Internet connection appears to be offline',
        'Load failed',
        'Network request failed',
      ])
      return e && e instanceof TypeError ? t.has(e.message) : !1
    }, 'isBrowserNetworkError'),
    _1 = fr(
      (e) =>
        e.$metadata?.httpStatusCode === 429 ||
        u1.includes(e.name) ||
        e.$retryable?.throttling == !0,
      'isThrottlingError'
    ),
    Du = fr(
      (e, t = 0) =>
        dS(e) ||
        p1.includes(e.name) ||
        m1.includes(e?.code || '') ||
        f1.includes(e.$metadata?.httpStatusCode || 0) ||
        lS(e) ||
        (e.cause !== void 0 && t <= 10 && Du(e.cause, t + 1)),
      'isTransientError'
    ),
    y1 = fr((e) => {
      if (e.$metadata?.httpStatusCode !== void 0) {
        let t = e.$metadata.httpStatusCode
        return 500 <= t && t <= 599 && !Du(e)
      }
      return !1
    }, 'isServerError')
})
var bn = h((VK, ES) => {
  var Ua = Object.defineProperty,
    v1 = Object.getOwnPropertyDescriptor,
    E1 = Object.getOwnPropertyNames,
    S1 = Object.prototype.hasOwnProperty,
    je = (e, t) => Ua(e, 'name', { value: t, configurable: !0 }),
    w1 = (e, t) => {
      for (var r in t) Ua(e, r, { get: t[r], enumerable: !0 })
    },
    b1 = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of E1(t))
          !S1.call(e, o) &&
            o !== r &&
            Ua(e, o, {
              get: () => t[o],
              enumerable: !(n = v1(t, o)) || n.enumerable,
            })
      return e
    },
    P1 = (e) => b1(Ua({}, '__esModule', { value: !0 }), e),
    fS = {}
  w1(fS, {
    AdaptiveRetryStrategy: () => T1,
    ConfiguredRetryStrategy: () => I1,
    DEFAULT_MAX_ATTEMPTS: () => Mu,
    DEFAULT_RETRY_DELAY_BASE: () => os,
    DEFAULT_RETRY_MODE: () => R1,
    DefaultRateLimiter: () => gS,
    INITIAL_RETRY_TOKENS: () => Uu,
    INVOCATION_ID_HEADER: () => O1,
    MAXIMUM_RETRY_DELAY: () => Fu,
    NO_RETRY_INCREMENT: () => vS,
    REQUEST_HEADER: () => A1,
    RETRY_COST: () => _S,
    RETRY_MODES: () => mS,
    StandardRetryStrategy: () => Lu,
    THROTTLING_RETRY_DELAY_BASE: () => hS,
    TIMEOUT_RETRY_COST: () => yS,
  })
  ES.exports = P1(fS)
  var mS = ((e) => ((e.STANDARD = 'standard'), (e.ADAPTIVE = 'adaptive'), e))(
      mS || {}
    ),
    Mu = 3,
    R1 = 'standard',
    C1 = ku(),
    kt,
    gS =
      ((kt = class {
        constructor(t) {
          ;(this.currentCapacity = 0),
            (this.enabled = !1),
            (this.lastMaxRate = 0),
            (this.measuredTxRate = 0),
            (this.requestCount = 0),
            (this.lastTimestamp = 0),
            (this.timeWindow = 0),
            (this.beta = t?.beta ?? 0.7),
            (this.minCapacity = t?.minCapacity ?? 1),
            (this.minFillRate = t?.minFillRate ?? 0.5),
            (this.scaleConstant = t?.scaleConstant ?? 0.4),
            (this.smooth = t?.smooth ?? 0.8)
          let r = this.getCurrentTimeInSeconds()
          ;(this.lastThrottleTime = r),
            (this.lastTxRateBucket = Math.floor(
              this.getCurrentTimeInSeconds()
            )),
            (this.fillRate = this.minFillRate),
            (this.maxCapacity = this.minCapacity)
        }
        getCurrentTimeInSeconds() {
          return Date.now() / 1e3
        }
        async getSendToken() {
          return this.acquireTokenBucket(1)
        }
        async acquireTokenBucket(t) {
          if (this.enabled) {
            if ((this.refillTokenBucket(), t > this.currentCapacity)) {
              let r = ((t - this.currentCapacity) / this.fillRate) * 1e3
              await new Promise((n) => kt.setTimeoutFn(n, r))
            }
            this.currentCapacity = this.currentCapacity - t
          }
        }
        refillTokenBucket() {
          let t = this.getCurrentTimeInSeconds()
          if (!this.lastTimestamp) {
            this.lastTimestamp = t
            return
          }
          let r = (t - this.lastTimestamp) * this.fillRate
          ;(this.currentCapacity = Math.min(
            this.maxCapacity,
            this.currentCapacity + r
          )),
            (this.lastTimestamp = t)
        }
        updateClientSendingRate(t) {
          let r
          if ((this.updateMeasuredRate(), (0, C1.isThrottlingError)(t))) {
            let o = this.enabled
              ? Math.min(this.measuredTxRate, this.fillRate)
              : this.measuredTxRate
            ;(this.lastMaxRate = o),
              this.calculateTimeWindow(),
              (this.lastThrottleTime = this.getCurrentTimeInSeconds()),
              (r = this.cubicThrottle(o)),
              this.enableTokenBucket()
          } else
            this.calculateTimeWindow(),
              (r = this.cubicSuccess(this.getCurrentTimeInSeconds()))
          let n = Math.min(r, 2 * this.measuredTxRate)
          this.updateTokenBucketRate(n)
        }
        calculateTimeWindow() {
          this.timeWindow = this.getPrecise(
            Math.pow(
              (this.lastMaxRate * (1 - this.beta)) / this.scaleConstant,
              1 / 3
            )
          )
        }
        cubicThrottle(t) {
          return this.getPrecise(t * this.beta)
        }
        cubicSuccess(t) {
          return this.getPrecise(
            this.scaleConstant *
              Math.pow(t - this.lastThrottleTime - this.timeWindow, 3) +
              this.lastMaxRate
          )
        }
        enableTokenBucket() {
          this.enabled = !0
        }
        updateTokenBucketRate(t) {
          this.refillTokenBucket(),
            (this.fillRate = Math.max(t, this.minFillRate)),
            (this.maxCapacity = Math.max(t, this.minCapacity)),
            (this.currentCapacity = Math.min(
              this.currentCapacity,
              this.maxCapacity
            ))
        }
        updateMeasuredRate() {
          let t = this.getCurrentTimeInSeconds(),
            r = Math.floor(t * 2) / 2
          if ((this.requestCount++, r > this.lastTxRateBucket)) {
            let n = this.requestCount / (r - this.lastTxRateBucket)
            ;(this.measuredTxRate = this.getPrecise(
              n * this.smooth + this.measuredTxRate * (1 - this.smooth)
            )),
              (this.requestCount = 0),
              (this.lastTxRateBucket = r)
          }
        }
        getPrecise(t) {
          return parseFloat(t.toFixed(8))
        }
      }),
      je(kt, 'DefaultRateLimiter'),
      (kt.setTimeoutFn = setTimeout),
      kt),
    os = 100,
    Fu = 20 * 1e3,
    hS = 500,
    Uu = 500,
    _S = 5,
    yS = 10,
    vS = 1,
    O1 = 'amz-sdk-invocation-id',
    A1 = 'amz-sdk-request',
    x1 = je(() => {
      let e = os
      return {
        computeNextBackoffDelay: je(
          (n) => Math.floor(Math.min(Fu, Math.random() * 2 ** n * e)),
          'computeNextBackoffDelay'
        ),
        setDelayBase: je((n) => {
          e = n
        }, 'setDelayBase'),
      }
    }, 'getDefaultRetryBackoffStrategy'),
    pS = je(
      ({ retryDelay: e, retryCount: t, retryCost: r }) => ({
        getRetryCount: je(() => t, 'getRetryCount'),
        getRetryDelay: je(() => Math.min(Fu, e), 'getRetryDelay'),
        getRetryCost: je(() => r, 'getRetryCost'),
      }),
      'createDefaultRetryToken'
    ),
    En,
    Lu =
      ((En = class {
        constructor(t) {
          ;(this.maxAttempts = t),
            (this.mode = 'standard'),
            (this.capacity = Uu),
            (this.retryBackoffStrategy = x1()),
            (this.maxAttemptsProvider =
              typeof t == 'function' ? t : async () => t)
        }
        async acquireInitialRetryToken(t) {
          return pS({ retryDelay: os, retryCount: 0 })
        }
        async refreshRetryTokenForRetry(t, r) {
          let n = await this.getMaxAttempts()
          if (this.shouldRetry(t, r, n)) {
            let o = r.errorType
            this.retryBackoffStrategy.setDelayBase(o === 'THROTTLING' ? hS : os)
            let s = this.retryBackoffStrategy.computeNextBackoffDelay(
                t.getRetryCount()
              ),
              i = r.retryAfterHint
                ? Math.max(r.retryAfterHint.getTime() - Date.now() || 0, s)
                : s,
              a = this.getCapacityCost(o)
            return (
              (this.capacity -= a),
              pS({
                retryDelay: i,
                retryCount: t.getRetryCount() + 1,
                retryCost: a,
              })
            )
          }
          throw new Error('No retry token available')
        }
        recordSuccess(t) {
          this.capacity = Math.max(Uu, this.capacity + (t.getRetryCost() ?? vS))
        }
        getCapacity() {
          return this.capacity
        }
        async getMaxAttempts() {
          try {
            return await this.maxAttemptsProvider()
          } catch {
            return (
              console.warn(
                `Max attempts provider could not resolve. Using default of ${Mu}`
              ),
              Mu
            )
          }
        }
        shouldRetry(t, r, n) {
          return (
            t.getRetryCount() + 1 < n &&
            this.capacity >= this.getCapacityCost(r.errorType) &&
            this.isRetryableError(r.errorType)
          )
        }
        getCapacityCost(t) {
          return t === 'TRANSIENT' ? yS : _S
        }
        isRetryableError(t) {
          return t === 'THROTTLING' || t === 'TRANSIENT'
        }
      }),
      je(En, 'StandardRetryStrategy'),
      En),
    Sn,
    T1 =
      ((Sn = class {
        constructor(t, r) {
          ;(this.maxAttemptsProvider = t), (this.mode = 'adaptive')
          let { rateLimiter: n } = r ?? {}
          ;(this.rateLimiter = n ?? new gS()),
            (this.standardRetryStrategy = new Lu(t))
        }
        async acquireInitialRetryToken(t) {
          return (
            await this.rateLimiter.getSendToken(),
            this.standardRetryStrategy.acquireInitialRetryToken(t)
          )
        }
        async refreshRetryTokenForRetry(t, r) {
          return (
            this.rateLimiter.updateClientSendingRate(r),
            this.standardRetryStrategy.refreshRetryTokenForRetry(t, r)
          )
        }
        recordSuccess(t) {
          this.rateLimiter.updateClientSendingRate({}),
            this.standardRetryStrategy.recordSuccess(t)
        }
      }),
      je(Sn, 'AdaptiveRetryStrategy'),
      Sn),
    wn,
    I1 =
      ((wn = class extends Lu {
        constructor(t, r = os) {
          super(typeof t == 'function' ? t : async () => t),
            typeof r == 'number'
              ? (this.computeNextBackoffDelay = () => r)
              : (this.computeNextBackoffDelay = r)
        }
        async refreshRetryTokenForRetry(t, r) {
          let n = await super.refreshRetryTokenForRetry(t, r)
          return (
            (n.getRetryDelay = () =>
              this.computeNextBackoffDelay(n.getRetryCount())),
            n
          )
        }
      }),
      je(wn, 'ConfiguredRetryStrategy'),
      wn)
})
var SS = h((Fa) => {
  'use strict'
  Object.defineProperty(Fa, '__esModule', { value: !0 })
  Fa.isStreamingPayload = void 0
  var N1 = require('stream'),
    D1 = (e) =>
      e?.body instanceof N1.Readable ||
      (typeof ReadableStream < 'u' && e?.body instanceof ReadableStream)
  Fa.isStreamingPayload = D1
})
var ut = h((zK, US) => {
  var La = Object.defineProperty,
    k1 = Object.getOwnPropertyDescriptor,
    M1 = Object.getOwnPropertyNames,
    U1 = Object.prototype.hasOwnProperty,
    te = (e, t) => La(e, 'name', { value: t, configurable: !0 }),
    F1 = (e, t) => {
      for (var r in t) La(e, r, { get: t[r], enumerable: !0 })
    },
    L1 = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of M1(t))
          !U1.call(e, o) &&
            o !== r &&
            La(e, o, {
              get: () => t[o],
              enumerable: !(n = k1(t, o)) || n.enumerable,
            })
      return e
    },
    j1 = (e) => L1(La({}, '__esModule', { value: !0 }), e),
    bS = {}
  F1(bS, {
    AdaptiveRetryStrategy: () => $1,
    CONFIG_MAX_ATTEMPTS: () => Hu,
    CONFIG_RETRY_MODE: () => TS,
    ENV_MAX_ATTEMPTS: () => ju,
    ENV_RETRY_MODE: () => xS,
    NODE_MAX_ATTEMPT_CONFIG_OPTIONS: () => B1,
    NODE_RETRY_MODE_CONFIG_OPTIONS: () => G1,
    StandardRetryStrategy: () => AS,
    defaultDelayDecider: () => RS,
    defaultRetryDecider: () => CS,
    getOmitRetryHeadersPlugin: () => z1,
    getRetryAfterHint: () => MS,
    getRetryPlugin: () => Q1,
    omitRetryHeadersMiddleware: () => IS,
    omitRetryHeadersMiddlewareOptions: () => NS,
    resolveRetryConfig: () => V1,
    retryMiddleware: () => DS,
    retryMiddlewareOptions: () => kS,
  })
  US.exports = j1(bS)
  var Cn = X(),
    PS = (Nu(), F(Iu)),
    G = bn(),
    H1 = te((e, t) => {
      let r = e,
        n = t?.noRetryIncrement ?? G.NO_RETRY_INCREMENT,
        o = t?.retryCost ?? G.RETRY_COST,
        s = t?.timeoutRetryCost ?? G.TIMEOUT_RETRY_COST,
        i = e,
        a = te((u) => (u.name === 'TimeoutError' ? s : o), 'getCapacityAmount'),
        c = te((u) => a(u) <= i, 'hasRetryTokens')
      return Object.freeze({
        hasRetryTokens: c,
        retrieveRetryTokens: te((u) => {
          if (!c(u)) throw new Error('No retry token available')
          let f = a(u)
          return (i -= f), f
        }, 'retrieveRetryTokens'),
        releaseRetryTokens: te((u) => {
          ;(i += u ?? n), (i = Math.min(i, r))
        }, 'releaseRetryTokens'),
      })
    }, 'getDefaultRetryQuota'),
    RS = te(
      (e, t) =>
        Math.floor(Math.min(G.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** t * e)),
      'defaultDelayDecider'
    ),
    Mt = ku(),
    CS = te(
      (e) =>
        e
          ? (0, Mt.isRetryableByTrait)(e) ||
            (0, Mt.isClockSkewError)(e) ||
            (0, Mt.isThrottlingError)(e) ||
            (0, Mt.isTransientError)(e)
          : !1,
      'defaultRetryDecider'
    ),
    OS = te(
      (e) =>
        e instanceof Error
          ? e
          : e instanceof Object
            ? Object.assign(new Error(), e)
            : typeof e == 'string'
              ? new Error(e)
              : new Error(`AWS SDK error wrapper for ${e}`),
      'asSdkError'
    ),
    Pn,
    AS =
      ((Pn = class {
        constructor(t, r) {
          ;(this.maxAttemptsProvider = t),
            (this.mode = G.RETRY_MODES.STANDARD),
            (this.retryDecider = r?.retryDecider ?? CS),
            (this.delayDecider = r?.delayDecider ?? RS),
            (this.retryQuota = r?.retryQuota ?? H1(G.INITIAL_RETRY_TOKENS))
        }
        shouldRetry(t, r, n) {
          return (
            r < n && this.retryDecider(t) && this.retryQuota.hasRetryTokens(t)
          )
        }
        async getMaxAttempts() {
          let t
          try {
            t = await this.maxAttemptsProvider()
          } catch {
            t = G.DEFAULT_MAX_ATTEMPTS
          }
          return t
        }
        async retry(t, r, n) {
          let o,
            s = 0,
            i = 0,
            a = await this.getMaxAttempts(),
            { request: c } = r
          for (
            Cn.HttpRequest.isInstance(c) &&
            (c.headers[G.INVOCATION_ID_HEADER] = (0, PS.v4)());
            ;

          )
            try {
              Cn.HttpRequest.isInstance(c) &&
                (c.headers[G.REQUEST_HEADER] = `attempt=${s + 1}; max=${a}`),
                n?.beforeRequest && (await n.beforeRequest())
              let { response: d, output: l } = await t(r)
              return (
                n?.afterRequest && n.afterRequest(d),
                this.retryQuota.releaseRetryTokens(o),
                (l.$metadata.attempts = s + 1),
                (l.$metadata.totalRetryDelay = i),
                { response: d, output: l }
              )
            } catch (d) {
              let l = OS(d)
              if ((s++, this.shouldRetry(l, s, a))) {
                o = this.retryQuota.retrieveRetryTokens(l)
                let u = this.delayDecider(
                    (0, Mt.isThrottlingError)(l)
                      ? G.THROTTLING_RETRY_DELAY_BASE
                      : G.DEFAULT_RETRY_DELAY_BASE,
                    s
                  ),
                  f = q1(l.$response),
                  g = Math.max(f || 0, u)
                ;(i += g), await new Promise((_) => setTimeout(_, g))
                continue
              }
              throw (
                (l.$metadata || (l.$metadata = {}),
                (l.$metadata.attempts = s),
                (l.$metadata.totalRetryDelay = i),
                l)
              )
            }
        }
      }),
      te(Pn, 'StandardRetryStrategy'),
      Pn),
    q1 = te((e) => {
      if (!Cn.HttpResponse.isInstance(e)) return
      let t = Object.keys(e.headers).find(
        (s) => s.toLowerCase() === 'retry-after'
      )
      if (!t) return
      let r = e.headers[t],
        n = Number(r)
      return Number.isNaN(n) ? new Date(r).getTime() - Date.now() : n * 1e3
    }, 'getDelayFromRetryAfterHeader'),
    Rn,
    $1 =
      ((Rn = class extends AS {
        constructor(t, r) {
          let { rateLimiter: n, ...o } = r ?? {}
          super(t, o),
            (this.rateLimiter = n ?? new G.DefaultRateLimiter()),
            (this.mode = G.RETRY_MODES.ADAPTIVE)
        }
        async retry(t, r) {
          return super.retry(t, r, {
            beforeRequest: async () => this.rateLimiter.getSendToken(),
            afterRequest: (n) => {
              this.rateLimiter.updateClientSendingRate(n)
            },
          })
        }
      }),
      te(Rn, 'AdaptiveRetryStrategy'),
      Rn),
    wS = Ue(),
    ju = 'AWS_MAX_ATTEMPTS',
    Hu = 'max_attempts',
    B1 = {
      environmentVariableSelector: (e) => {
        let t = e[ju]
        if (!t) return
        let r = parseInt(t)
        if (Number.isNaN(r))
          throw new Error(
            `Environment variable ${ju} mast be a number, got "${t}"`
          )
        return r
      },
      configFileSelector: (e) => {
        let t = e[Hu]
        if (!t) return
        let r = parseInt(t)
        if (Number.isNaN(r))
          throw new Error(
            `Shared config file entry ${Hu} mast be a number, got "${t}"`
          )
        return r
      },
      default: G.DEFAULT_MAX_ATTEMPTS,
    },
    V1 = te((e) => {
      let { retryStrategy: t, retryMode: r, maxAttempts: n } = e,
        o = (0, wS.normalizeProvider)(n ?? G.DEFAULT_MAX_ATTEMPTS)
      return Object.assign(e, {
        maxAttempts: o,
        retryStrategy: async () =>
          t ||
          ((await (0, wS.normalizeProvider)(r)()) === G.RETRY_MODES.ADAPTIVE
            ? new G.AdaptiveRetryStrategy(o)
            : new G.StandardRetryStrategy(o)),
      })
    }, 'resolveRetryConfig'),
    xS = 'AWS_RETRY_MODE',
    TS = 'retry_mode',
    G1 = {
      environmentVariableSelector: (e) => e[xS],
      configFileSelector: (e) => e[TS],
      default: G.DEFAULT_RETRY_MODE,
    },
    IS = te(
      () => (e) => async (t) => {
        let { request: r } = t
        return (
          Cn.HttpRequest.isInstance(r) &&
            (delete r.headers[G.INVOCATION_ID_HEADER],
            delete r.headers[G.REQUEST_HEADER]),
          e(t)
        )
      },
      'omitRetryHeadersMiddleware'
    ),
    NS = {
      name: 'omitRetryHeadersMiddleware',
      tags: ['RETRY', 'HEADERS', 'OMIT_RETRY_HEADERS'],
      relation: 'before',
      toMiddleware: 'awsAuthMiddleware',
      override: !0,
    },
    z1 = te(
      (e) => ({
        applyToStack: (t) => {
          t.addRelativeTo(IS(), NS)
        },
      }),
      'getOmitRetryHeadersPlugin'
    ),
    W1 = D(),
    K1 = SS(),
    DS = te(
      (e) => (t, r) => async (n) => {
        let o = await e.retryStrategy(),
          s = await e.maxAttempts()
        if (Y1(o)) {
          o = o
          let i = await o.acquireInitialRetryToken(r.partition_id),
            a = new Error(),
            c = 0,
            d = 0,
            { request: l } = n,
            u = Cn.HttpRequest.isInstance(l)
          for (u && (l.headers[G.INVOCATION_ID_HEADER] = (0, PS.v4)()); ; )
            try {
              u && (l.headers[G.REQUEST_HEADER] = `attempt=${c + 1}; max=${s}`)
              let { response: f, output: g } = await t(n)
              return (
                o.recordSuccess(i),
                (g.$metadata.attempts = c + 1),
                (g.$metadata.totalRetryDelay = d),
                { response: f, output: g }
              )
            } catch (f) {
              let g = J1(f)
              if (((a = OS(f)), u && (0, K1.isStreamingPayload)(l)))
                throw (
                  ((r.logger instanceof W1.NoOpLogger
                    ? console
                    : r.logger
                  )?.warn(
                    'An error was encountered in a non-retryable streaming request.'
                  ),
                  a)
                )
              try {
                i = await o.refreshRetryTokenForRetry(i, g)
              } catch {
                throw (
                  (a.$metadata || (a.$metadata = {}),
                  (a.$metadata.attempts = c + 1),
                  (a.$metadata.totalRetryDelay = d),
                  a)
                )
              }
              c = i.getRetryCount()
              let _ = i.getRetryDelay()
              ;(d += _), await new Promise((w) => setTimeout(w, _))
            }
        } else
          return (
            (o = o),
            o?.mode &&
              (r.userAgent = [
                ...(r.userAgent || []),
                ['cfg/retry-mode', o.mode],
              ]),
            o.retry(t, n)
          )
      },
      'retryMiddleware'
    ),
    Y1 = te(
      (e) =>
        typeof e.acquireInitialRetryToken < 'u' &&
        typeof e.refreshRetryTokenForRetry < 'u' &&
        typeof e.recordSuccess < 'u',
      'isRetryStrategyV2'
    ),
    J1 = te((e) => {
      let t = { error: e, errorType: X1(e) },
        r = MS(e.$response)
      return r && (t.retryAfterHint = r), t
    }, 'getRetryErrorInfo'),
    X1 = te(
      (e) =>
        (0, Mt.isThrottlingError)(e)
          ? 'THROTTLING'
          : (0, Mt.isTransientError)(e)
            ? 'TRANSIENT'
            : (0, Mt.isServerError)(e)
              ? 'SERVER_ERROR'
              : 'CLIENT_ERROR',
      'getRetryErrorType'
    ),
    kS = {
      name: 'retryMiddleware',
      tags: ['RETRY'],
      step: 'finalizeRequest',
      priority: 'high',
      override: !0,
    },
    Q1 = te(
      (e) => ({
        applyToStack: (t) => {
          t.add(DS(e), kS)
        },
      }),
      'getRetryPlugin'
    ),
    MS = te((e) => {
      if (!Cn.HttpResponse.isInstance(e)) return
      let t = Object.keys(e.headers).find(
        (s) => s.toLowerCase() === 'retry-after'
      )
      if (!t) return
      let r = e.headers[t],
        n = Number(r)
      return Number.isNaN(n) ? new Date(r) : new Date(n * 1e3)
    }, 'getRetryAfterHint')
})
var $u = h((Ut) => {
  'use strict'
  Object.defineProperty(Ut, '__esModule', { value: !0 })
  Ut.resolveHttpAuthSchemeConfig =
    Ut.defaultSecretsManagerHttpAuthSchemeProvider =
    Ut.defaultSecretsManagerHttpAuthSchemeParametersProvider =
      void 0
  var Z1 = (oe(), F(Je)),
    qu = Ue(),
    eH = async (e, t, r) => ({
      operation: (0, qu.getSmithyContext)(t).operation,
      region:
        (await (0, qu.normalizeProvider)(e.region)()) ||
        (() => {
          throw new Error(
            'expected `region` to be configured for `aws.auth#sigv4`'
          )
        })(),
    })
  Ut.defaultSecretsManagerHttpAuthSchemeParametersProvider = eH
  function tH(e) {
    return {
      schemeId: 'aws.auth#sigv4',
      signingProperties: { name: 'secretsmanager', region: e.region },
      propertiesExtractor: (t, r) => ({
        signingProperties: { config: t, context: r },
      }),
    }
  }
  var rH = (e) => {
    let t = []
    switch (e.operation) {
      default:
        t.push(tH(e))
    }
    return t
  }
  Ut.defaultSecretsManagerHttpAuthSchemeProvider = rH
  var nH = (e) => {
    let t = (0, Z1.resolveAwsSdkSigV4Config)(e)
    return Object.assign(t, {
      authSchemePreference: (0, qu.normalizeProvider)(
        e.authSchemePreference ?? []
      ),
    })
  }
  Ut.resolveHttpAuthSchemeConfig = nH
})
var $a = {}
st($a, {
  __addDisposableResource: () => aw,
  __assign: () => ja,
  __asyncDelegator: () => ZS,
  __asyncGenerator: () => QS,
  __asyncValues: () => ew,
  __await: () => On,
  __awaiter: () => zS,
  __classPrivateFieldGet: () => ow,
  __classPrivateFieldIn: () => iw,
  __classPrivateFieldSet: () => sw,
  __createBinding: () => qa,
  __decorate: () => jS,
  __disposeResources: () => cw,
  __esDecorate: () => qS,
  __exportStar: () => KS,
  __extends: () => FS,
  __generator: () => WS,
  __importDefault: () => nw,
  __importStar: () => rw,
  __makeTemplateObject: () => tw,
  __metadata: () => GS,
  __param: () => HS,
  __propKey: () => BS,
  __read: () => Gu,
  __rest: () => LS,
  __rewriteRelativeImportExtension: () => dw,
  __runInitializers: () => $S,
  __setFunctionName: () => VS,
  __spread: () => YS,
  __spreadArray: () => XS,
  __spreadArrays: () => JS,
  __values: () => Ha,
  default: () => iH,
})
function FS(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null'
    )
  Bu(e, t)
  function r() {
    this.constructor = e
  }
  e.prototype =
    t === null ? Object.create(t) : ((r.prototype = t.prototype), new r())
}
function LS(e, t) {
  var r = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]])
  return r
}
function jS(e, t, r, n) {
  var o = arguments.length,
    s =
      o < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    i
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    s = Reflect.decorate(e, t, r, n)
  else
    for (var a = e.length - 1; a >= 0; a--)
      (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s)
  return o > 3 && s && Object.defineProperty(t, r, s), s
}
function HS(e, t) {
  return function (r, n) {
    t(r, n, e)
  }
}
function qS(e, t, r, n, o, s) {
  function i(R) {
    if (R !== void 0 && typeof R != 'function')
      throw new TypeError('Function expected')
    return R
  }
  for (
    var a = n.kind,
      c = a === 'getter' ? 'get' : a === 'setter' ? 'set' : 'value',
      d = !t && e ? (n.static ? e : e.prototype) : null,
      l = t || (d ? Object.getOwnPropertyDescriptor(d, n.name) : {}),
      u,
      f = !1,
      g = r.length - 1;
    g >= 0;
    g--
  ) {
    var _ = {}
    for (var w in n) _[w] = w === 'access' ? {} : n[w]
    for (var w in n.access) _.access[w] = n.access[w]
    _.addInitializer = function (R) {
      if (f)
        throw new TypeError(
          'Cannot add initializers after decoration has completed'
        )
      s.push(i(R || null))
    }
    var S = (0, r[g])(a === 'accessor' ? { get: l.get, set: l.set } : l[c], _)
    if (a === 'accessor') {
      if (S === void 0) continue
      if (S === null || typeof S != 'object')
        throw new TypeError('Object expected')
      ;(u = i(S.get)) && (l.get = u),
        (u = i(S.set)) && (l.set = u),
        (u = i(S.init)) && o.unshift(u)
    } else (u = i(S)) && (a === 'field' ? o.unshift(u) : (l[c] = u))
  }
  d && Object.defineProperty(d, n.name, l), (f = !0)
}
function $S(e, t, r) {
  for (var n = arguments.length > 2, o = 0; o < t.length; o++)
    r = n ? t[o].call(e, r) : t[o].call(e)
  return n ? r : void 0
}
function BS(e) {
  return typeof e == 'symbol' ? e : ''.concat(e)
}
function VS(e, t, r) {
  return (
    typeof t == 'symbol' &&
      (t = t.description ? '['.concat(t.description, ']') : ''),
    Object.defineProperty(e, 'name', {
      configurable: !0,
      value: r ? ''.concat(r, ' ', t) : t,
    })
  )
}
function GS(e, t) {
  if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
    return Reflect.metadata(e, t)
}
function zS(e, t, r, n) {
  function o(s) {
    return s instanceof r
      ? s
      : new r(function (i) {
          i(s)
        })
  }
  return new (r || (r = Promise))(function (s, i) {
    function a(l) {
      try {
        d(n.next(l))
      } catch (u) {
        i(u)
      }
    }
    function c(l) {
      try {
        d(n.throw(l))
      } catch (u) {
        i(u)
      }
    }
    function d(l) {
      l.done ? s(l.value) : o(l.value).then(a, c)
    }
    d((n = n.apply(e, t || [])).next())
  })
}
function WS(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (s[0] & 1) throw s[1]
        return s[1]
      },
      trys: [],
      ops: [],
    },
    n,
    o,
    s,
    i = Object.create(
      (typeof Iterator == 'function' ? Iterator : Object).prototype
    )
  return (
    (i.next = a(0)),
    (i.throw = a(1)),
    (i.return = a(2)),
    typeof Symbol == 'function' &&
      (i[Symbol.iterator] = function () {
        return this
      }),
    i
  )
  function a(d) {
    return function (l) {
      return c([d, l])
    }
  }
  function c(d) {
    if (n) throw new TypeError('Generator is already executing.')
    for (; i && ((i = 0), d[0] && (r = 0)), r; )
      try {
        if (
          ((n = 1),
          o &&
            (s =
              d[0] & 2
                ? o.return
                : d[0]
                  ? o.throw || ((s = o.return) && s.call(o), 0)
                  : o.next) &&
            !(s = s.call(o, d[1])).done)
        )
          return s
        switch (((o = 0), s && (d = [d[0] & 2, s.value]), d[0])) {
          case 0:
          case 1:
            s = d
            break
          case 4:
            return r.label++, { value: d[1], done: !1 }
          case 5:
            r.label++, (o = d[1]), (d = [0])
            continue
          case 7:
            ;(d = r.ops.pop()), r.trys.pop()
            continue
          default:
            if (
              ((s = r.trys),
              !(s = s.length > 0 && s[s.length - 1]) &&
                (d[0] === 6 || d[0] === 2))
            ) {
              r = 0
              continue
            }
            if (d[0] === 3 && (!s || (d[1] > s[0] && d[1] < s[3]))) {
              r.label = d[1]
              break
            }
            if (d[0] === 6 && r.label < s[1]) {
              ;(r.label = s[1]), (s = d)
              break
            }
            if (s && r.label < s[2]) {
              ;(r.label = s[2]), r.ops.push(d)
              break
            }
            s[2] && r.ops.pop(), r.trys.pop()
            continue
        }
        d = t.call(e, r)
      } catch (l) {
        ;(d = [6, l]), (o = 0)
      } finally {
        n = s = 0
      }
    if (d[0] & 5) throw d[1]
    return { value: d[0] ? d[1] : void 0, done: !0 }
  }
}
function KS(e, t) {
  for (var r in e)
    r !== 'default' &&
      !Object.prototype.hasOwnProperty.call(t, r) &&
      qa(t, e, r)
}
function Ha(e) {
  var t = typeof Symbol == 'function' && Symbol.iterator,
    r = t && e[t],
    n = 0
  if (r) return r.call(e)
  if (e && typeof e.length == 'number')
    return {
      next: function () {
        return (
          e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e }
        )
      },
    }
  throw new TypeError(
    t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
  )
}
function Gu(e, t) {
  var r = typeof Symbol == 'function' && e[Symbol.iterator]
  if (!r) return e
  var n = r.call(e),
    o,
    s = [],
    i
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; ) s.push(o.value)
  } catch (a) {
    i = { error: a }
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n)
    } finally {
      if (i) throw i.error
    }
  }
  return s
}
function YS() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Gu(arguments[t]))
  return e
}
function JS() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length
  for (var n = Array(e), o = 0, t = 0; t < r; t++)
    for (var s = arguments[t], i = 0, a = s.length; i < a; i++, o++) n[o] = s[i]
  return n
}
function XS(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, s; n < o; n++)
      (s || !(n in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, n)), (s[n] = t[n]))
  return e.concat(s || Array.prototype.slice.call(t))
}
function On(e) {
  return this instanceof On ? ((this.v = e), this) : new On(e)
}
function QS(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError('Symbol.asyncIterator is not defined.')
  var n = r.apply(e, t || []),
    o,
    s = []
  return (
    (o = Object.create(
      (typeof AsyncIterator == 'function' ? AsyncIterator : Object).prototype
    )),
    a('next'),
    a('throw'),
    a('return', i),
    (o[Symbol.asyncIterator] = function () {
      return this
    }),
    o
  )
  function i(g) {
    return function (_) {
      return Promise.resolve(_).then(g, u)
    }
  }
  function a(g, _) {
    n[g] &&
      ((o[g] = function (w) {
        return new Promise(function (S, R) {
          s.push([g, w, S, R]) > 1 || c(g, w)
        })
      }),
      _ && (o[g] = _(o[g])))
  }
  function c(g, _) {
    try {
      d(n[g](_))
    } catch (w) {
      f(s[0][3], w)
    }
  }
  function d(g) {
    g.value instanceof On
      ? Promise.resolve(g.value.v).then(l, u)
      : f(s[0][2], g)
  }
  function l(g) {
    c('next', g)
  }
  function u(g) {
    c('throw', g)
  }
  function f(g, _) {
    g(_), s.shift(), s.length && c(s[0][0], s[0][1])
  }
}
function ZS(e) {
  var t, r
  return (
    (t = {}),
    n('next'),
    n('throw', function (o) {
      throw o
    }),
    n('return'),
    (t[Symbol.iterator] = function () {
      return this
    }),
    t
  )
  function n(o, s) {
    t[o] = e[o]
      ? function (i) {
          return (r = !r) ? { value: On(e[o](i)), done: !1 } : s ? s(i) : i
        }
      : s
  }
}
function ew(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError('Symbol.asyncIterator is not defined.')
  var t = e[Symbol.asyncIterator],
    r
  return t
    ? t.call(e)
    : ((e = typeof Ha == 'function' ? Ha(e) : e[Symbol.iterator]()),
      (r = {}),
      n('next'),
      n('throw'),
      n('return'),
      (r[Symbol.asyncIterator] = function () {
        return this
      }),
      r)
  function n(s) {
    r[s] =
      e[s] &&
      function (i) {
        return new Promise(function (a, c) {
          ;(i = e[s](i)), o(a, c, i.done, i.value)
        })
      }
  }
  function o(s, i, a, c) {
    Promise.resolve(c).then(function (d) {
      s({ value: d, done: a })
    }, i)
  }
}
function tw(e, t) {
  return (
    Object.defineProperty
      ? Object.defineProperty(e, 'raw', { value: t })
      : (e.raw = t),
    e
  )
}
function rw(e) {
  if (e && e.__esModule) return e
  var t = {}
  if (e != null)
    for (var r = Vu(e), n = 0; n < r.length; n++)
      r[n] !== 'default' && qa(t, e, r[n])
  return oH(t, e), t
}
function nw(e) {
  return e && e.__esModule ? e : { default: e }
}
function ow(e, t, r, n) {
  if (r === 'a' && !n)
    throw new TypeError('Private accessor was defined without a getter')
  if (typeof t == 'function' ? e !== t || !n : !t.has(e))
    throw new TypeError(
      'Cannot read private member from an object whose class did not declare it'
    )
  return r === 'm' ? n : r === 'a' ? n.call(e) : n ? n.value : t.get(e)
}
function sw(e, t, r, n, o) {
  if (n === 'm') throw new TypeError('Private method is not writable')
  if (n === 'a' && !o)
    throw new TypeError('Private accessor was defined without a setter')
  if (typeof t == 'function' ? e !== t || !o : !t.has(e))
    throw new TypeError(
      'Cannot write private member to an object whose class did not declare it'
    )
  return n === 'a' ? o.call(e, r) : o ? (o.value = r) : t.set(e, r), r
}
function iw(e, t) {
  if (t === null || (typeof t != 'object' && typeof t != 'function'))
    throw new TypeError("Cannot use 'in' operator on non-object")
  return typeof e == 'function' ? t === e : e.has(t)
}
function aw(e, t, r) {
  if (t != null) {
    if (typeof t != 'object' && typeof t != 'function')
      throw new TypeError('Object expected.')
    var n, o
    if (r) {
      if (!Symbol.asyncDispose)
        throw new TypeError('Symbol.asyncDispose is not defined.')
      n = t[Symbol.asyncDispose]
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError('Symbol.dispose is not defined.')
      ;(n = t[Symbol.dispose]), r && (o = n)
    }
    if (typeof n != 'function') throw new TypeError('Object not disposable.')
    o &&
      (n = function () {
        try {
          o.call(this)
        } catch (s) {
          return Promise.reject(s)
        }
      }),
      e.stack.push({ value: t, dispose: n, async: r })
  } else r && e.stack.push({ async: !0 })
  return t
}
function cw(e) {
  function t(s) {
    ;(e.error = e.hasError
      ? new sH(s, e.error, 'An error was suppressed during disposal.')
      : s),
      (e.hasError = !0)
  }
  var r,
    n = 0
  function o() {
    for (; (r = e.stack.pop()); )
      try {
        if (!r.async && n === 1)
          return (n = 0), e.stack.push(r), Promise.resolve().then(o)
        if (r.dispose) {
          var s = r.dispose.call(r.value)
          if (r.async)
            return (
              (n |= 2),
              Promise.resolve(s).then(o, function (i) {
                return t(i), o()
              })
            )
        } else n |= 1
      } catch (i) {
        t(i)
      }
    if (n === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve()
    if (e.hasError) throw e.error
  }
  return o()
}
function dw(e, t) {
  return typeof e == 'string' && /^\.\.?\//.test(e)
    ? e.replace(
        /\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
        function (r, n, o, s, i) {
          return n
            ? t
              ? '.jsx'
              : '.js'
            : o && (!s || !i)
              ? r
              : o + s + '.' + i.toLowerCase() + 'js'
        }
      )
    : e
}
var Bu,
  ja,
  qa,
  oH,
  Vu,
  sH,
  iH,
  Ba = v(() => {
    Bu = function (e, t) {
      return (
        (Bu =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (r, n) {
              r.__proto__ = n
            }) ||
          function (r, n) {
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o])
          }),
        Bu(e, t)
      )
    }
    ja = function () {
      return (
        (ja =
          Object.assign ||
          function (t) {
            for (var r, n = 1, o = arguments.length; n < o; n++) {
              r = arguments[n]
              for (var s in r)
                Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s])
            }
            return t
          }),
        ja.apply(this, arguments)
      )
    }
    qa = Object.create
      ? function (e, t, r, n) {
          n === void 0 && (n = r)
          var o = Object.getOwnPropertyDescriptor(t, r)
          ;(!o ||
            ('get' in o ? !t.__esModule : o.writable || o.configurable)) &&
            (o = {
              enumerable: !0,
              get: function () {
                return t[r]
              },
            }),
            Object.defineProperty(e, n, o)
        }
      : function (e, t, r, n) {
          n === void 0 && (n = r), (e[n] = t[r])
        }
    ;(oH = Object.create
      ? function (e, t) {
          Object.defineProperty(e, 'default', {
            enumerable: !0,
            value: t,
          })
        }
      : function (e, t) {
          e.default = t
        }),
      (Vu = function (e) {
        return (
          (Vu =
            Object.getOwnPropertyNames ||
            function (t) {
              var r = []
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n)
              return r
            }),
          Vu(e)
        )
      })
    sH =
      typeof SuppressedError == 'function'
        ? SuppressedError
        : function (e, t, r) {
            var n = new Error(r)
            return (
              (n.name = 'SuppressedError'), (n.error = e), (n.suppressed = t), n
            )
          }
    iH = {
      __extends: FS,
      __assign: ja,
      __rest: LS,
      __decorate: jS,
      __param: HS,
      __esDecorate: qS,
      __runInitializers: $S,
      __propKey: BS,
      __setFunctionName: VS,
      __metadata: GS,
      __awaiter: zS,
      __generator: WS,
      __createBinding: qa,
      __exportStar: KS,
      __values: Ha,
      __read: Gu,
      __spread: YS,
      __spreadArrays: JS,
      __spreadArray: XS,
      __await: On,
      __asyncGenerator: QS,
      __asyncDelegator: ZS,
      __asyncValues: ew,
      __makeTemplateObject: tw,
      __importStar: rw,
      __importDefault: nw,
      __classPrivateFieldGet: ow,
      __classPrivateFieldSet: sw,
      __classPrivateFieldIn: iw,
      __addDisposableResource: aw,
      __disposeResources: cw,
      __rewriteRelativeImportExtension: dw,
    }
  })
var lw = h((KK, aH) => {
  aH.exports = {
    name: '@aws-sdk/client-secrets-manager',
    description:
      'AWS SDK for JavaScript Secrets Manager Client for Node.js, Browser and React Native',
    version: '3.804.0',
    scripts: {
      build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
      'build:cjs':
        'node ../../scripts/compilation/inline client-secrets-manager',
      'build:es': 'tsc -p tsconfig.es.json',
      'build:include:deps':
        'lerna run --scope $npm_package_name --include-dependencies build',
      'build:types': 'tsc -p tsconfig.types.json',
      'build:types:downlevel': 'downlevel-dts dist-types dist-types/ts3.4',
      clean: 'rimraf ./dist-* && rimraf *.tsbuildinfo',
      'extract:docs': 'api-extractor run --local',
      'generate:client':
        'node ../../scripts/generate-clients/single-service --solo secrets-manager',
    },
    main: './dist-cjs/index.js',
    types: './dist-types/index.d.ts',
    module: './dist-es/index.js',
    sideEffects: !1,
    dependencies: {
      '@aws-crypto/sha256-browser': '5.2.0',
      '@aws-crypto/sha256-js': '5.2.0',
      '@aws-sdk/core': '3.804.0',
      '@aws-sdk/credential-provider-node': '3.804.0',
      '@aws-sdk/middleware-host-header': '3.804.0',
      '@aws-sdk/middleware-logger': '3.804.0',
      '@aws-sdk/middleware-recursion-detection': '3.804.0',
      '@aws-sdk/middleware-user-agent': '3.804.0',
      '@aws-sdk/region-config-resolver': '3.804.0',
      '@aws-sdk/types': '3.804.0',
      '@aws-sdk/util-endpoints': '3.804.0',
      '@aws-sdk/util-user-agent-browser': '3.804.0',
      '@aws-sdk/util-user-agent-node': '3.804.0',
      '@smithy/config-resolver': '^4.1.0',
      '@smithy/core': '^3.3.1',
      '@smithy/fetch-http-handler': '^5.0.2',
      '@smithy/hash-node': '^4.0.2',
      '@smithy/invalid-dependency': '^4.0.2',
      '@smithy/middleware-content-length': '^4.0.2',
      '@smithy/middleware-endpoint': '^4.1.2',
      '@smithy/middleware-retry': '^4.1.3',
      '@smithy/middleware-serde': '^4.0.3',
      '@smithy/middleware-stack': '^4.0.2',
      '@smithy/node-config-provider': '^4.0.2',
      '@smithy/node-http-handler': '^4.0.4',
      '@smithy/protocol-http': '^5.1.0',
      '@smithy/smithy-client': '^4.2.2',
      '@smithy/types': '^4.2.0',
      '@smithy/url-parser': '^4.0.2',
      '@smithy/util-base64': '^4.0.0',
      '@smithy/util-body-length-browser': '^4.0.0',
      '@smithy/util-body-length-node': '^4.0.0',
      '@smithy/util-defaults-mode-browser': '^4.0.10',
      '@smithy/util-defaults-mode-node': '^4.0.10',
      '@smithy/util-endpoints': '^3.0.2',
      '@smithy/util-middleware': '^4.0.2',
      '@smithy/util-retry': '^4.0.3',
      '@smithy/util-utf8': '^4.0.0',
      '@types/uuid': '^9.0.1',
      tslib: '^2.6.2',
      uuid: '^9.0.1',
    },
    devDependencies: {
      '@tsconfig/node18': '18.2.4',
      '@types/node': '^18.19.69',
      concurrently: '7.0.0',
      'downlevel-dts': '0.10.1',
      rimraf: '3.0.2',
      typescript: '~5.8.3',
    },
    engines: { node: '>=18.0.0' },
    typesVersions: { '<4.0': { 'dist-types/*': ['dist-types/ts3.4/*'] } },
    files: ['dist-*/**'],
    author: {
      name: 'AWS SDK for JavaScript Team',
      url: 'https://aws.amazon.com/javascript/',
    },
    license: 'Apache-2.0',
    browser: {
      './dist-es/runtimeConfig': './dist-es/runtimeConfig.browser',
    },
    'react-native': {
      './dist-es/runtimeConfig': './dist-es/runtimeConfig.native',
    },
    homepage:
      'https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-secrets-manager',
    repository: {
      type: 'git',
      url: 'https://github.com/aws/aws-sdk-js-v3.git',
      directory: 'clients/client-secrets-manager',
    },
  }
})
var zu = h((YK, yw) => {
  'use strict'
  var Va = Object.defineProperty,
    cH = Object.getOwnPropertyDescriptor,
    dH = Object.getOwnPropertyNames,
    lH = Object.prototype.hasOwnProperty,
    uH = (e, t) => Va(e, 'name', { value: t, configurable: !0 }),
    pH = (e, t) => {
      for (var r in t) Va(e, r, { get: t[r], enumerable: !0 })
    },
    fH = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of dH(t))
          !lH.call(e, o) &&
            o !== r &&
            Va(e, o, {
              get: () => t[o],
              enumerable: !(n = cH(t, o)) || n.enumerable,
            })
      return e
    },
    mH = (e) => fH(Va({}, '__esModule', { value: !0 }), e),
    uw = {}
  pH(uw, {
    ENV_ACCOUNT_ID: () => _w,
    ENV_CREDENTIAL_SCOPE: () => hw,
    ENV_EXPIRATION: () => gw,
    ENV_KEY: () => pw,
    ENV_SECRET: () => fw,
    ENV_SESSION: () => mw,
    fromEnv: () => _H,
  })
  yw.exports = mH(uw)
  var gH = (We(), F(tr)),
    hH = fe(),
    pw = 'AWS_ACCESS_KEY_ID',
    fw = 'AWS_SECRET_ACCESS_KEY',
    mw = 'AWS_SESSION_TOKEN',
    gw = 'AWS_CREDENTIAL_EXPIRATION',
    hw = 'AWS_CREDENTIAL_SCOPE',
    _w = 'AWS_ACCOUNT_ID',
    _H = uH(
      (e) => async () => {
        e?.logger?.debug('@aws-sdk/credential-provider-env - fromEnv')
        let t = process.env[pw],
          r = process.env[fw],
          n = process.env[mw],
          o = process.env[gw],
          s = process.env[hw],
          i = process.env[_w]
        if (t && r) {
          let a = {
            accessKeyId: t,
            secretAccessKey: r,
            ...(n && { sessionToken: n }),
            ...(o && { expiration: new Date(o) }),
            ...(s && { credentialScope: s }),
            ...(i && { accountId: i }),
          }
          return (0, gH.setCredentialFeature)(a, 'CREDENTIALS_ENV_VARS', 'g'), a
        }
        throw new hH.CredentialsProviderError(
          'Unable to find environment variable credentials.',
          { logger: e?.logger }
        )
      },
      'fromEnv'
    )
})
var ss = h((JK, Iw) => {
  var Wa = Object.defineProperty,
    yH = Object.getOwnPropertyDescriptor,
    vH = Object.getOwnPropertyNames,
    EH = Object.prototype.hasOwnProperty,
    re = (e, t) => Wa(e, 'name', { value: t, configurable: !0 }),
    SH = (e, t) => {
      for (var r in t) Wa(e, r, { get: t[r], enumerable: !0 })
    },
    wH = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of vH(t))
          !EH.call(e, o) &&
            o !== r &&
            Wa(e, o, {
              get: () => t[o],
              enumerable: !(n = yH(t, o)) || n.enumerable,
            })
      return e
    },
    bH = (e) => wH(Wa({}, '__esModule', { value: !0 }), e),
    ww = {}
  SH(ww, {
    DEFAULT_MAX_RETRIES: () => Cw,
    DEFAULT_TIMEOUT: () => Rw,
    ENV_CMDS_AUTH_TOKEN: () => Yu,
    ENV_CMDS_FULL_URI: () => Ga,
    ENV_CMDS_RELATIVE_URI: () => za,
    Endpoint: () => Ow,
    fromContainerMetadata: () => OH,
    fromInstanceMetadata: () => KH,
    getInstanceMetadataEndpoint: () => xw,
    httpRequest: () => An,
    providerConfigFromInit: () => Ju,
  })
  Iw.exports = bH(ww)
  var PH = require('url'),
    Ze = fe(),
    RH = require('buffer'),
    CH = require('http')
  function An(e) {
    return new Promise((t, r) => {
      let n = (0, CH.request)({
        method: 'GET',
        ...e,
        hostname: e.hostname?.replace(/^\[(.+)\]$/, '$1'),
      })
      n.on('error', (o) => {
        r(
          Object.assign(
            new Ze.ProviderError(
              'Unable to connect to instance metadata service'
            ),
            o
          )
        ),
          n.destroy()
      }),
        n.on('timeout', () => {
          r(
            new Ze.ProviderError('TimeoutError from instance metadata service')
          ),
            n.destroy()
        }),
        n.on('response', (o) => {
          let { statusCode: s = 400 } = o
          ;(s < 200 || 300 <= s) &&
            (r(
              Object.assign(
                new Ze.ProviderError(
                  'Error response received from instance metadata service'
                ),
                { statusCode: s }
              )
            ),
            n.destroy())
          let i = []
          o.on('data', (a) => {
            i.push(a)
          }),
            o.on('end', () => {
              t(RH.Buffer.concat(i)), n.destroy()
            })
        }),
        n.end()
    })
  }
  re(An, 'httpRequest')
  var bw = re(
      (e) =>
        !!e &&
        typeof e == 'object' &&
        typeof e.AccessKeyId == 'string' &&
        typeof e.SecretAccessKey == 'string' &&
        typeof e.Token == 'string' &&
        typeof e.Expiration == 'string',
      'isImdsCredentials'
    ),
    Pw = re(
      (e) => ({
        accessKeyId: e.AccessKeyId,
        secretAccessKey: e.SecretAccessKey,
        sessionToken: e.Token,
        expiration: new Date(e.Expiration),
        ...(e.AccountId && { accountId: e.AccountId }),
      }),
      'fromImdsCredentials'
    ),
    Rw = 1e3,
    Cw = 0,
    Ju = re(
      ({ maxRetries: e = Cw, timeout: t = Rw }) => ({
        maxRetries: e,
        timeout: t,
      }),
      'providerConfigFromInit'
    ),
    Ku = re((e, t) => {
      let r = e()
      for (let n = 0; n < t; n++) r = r.catch(e)
      return r
    }, 'retry'),
    Ga = 'AWS_CONTAINER_CREDENTIALS_FULL_URI',
    za = 'AWS_CONTAINER_CREDENTIALS_RELATIVE_URI',
    Yu = 'AWS_CONTAINER_AUTHORIZATION_TOKEN',
    OH = re((e = {}) => {
      let { timeout: t, maxRetries: r } = Ju(e)
      return () =>
        Ku(async () => {
          let n = await NH({ logger: e.logger }),
            o = JSON.parse(await AH(t, n))
          if (!bw(o))
            throw new Ze.CredentialsProviderError(
              'Invalid response received from instance metadata service.',
              { logger: e.logger }
            )
          return Pw(o)
        }, r)
    }, 'fromContainerMetadata'),
    AH = re(
      async (e, t) => (
        process.env[Yu] &&
          (t.headers = {
            ...t.headers,
            Authorization: process.env[Yu],
          }),
        (await An({ ...t, timeout: e })).toString()
      ),
      'requestFromEcsImds'
    ),
    xH = '169.254.170.2',
    TH = { localhost: !0, '127.0.0.1': !0 },
    IH = { 'http:': !0, 'https:': !0 },
    NH = re(async ({ logger: e }) => {
      if (process.env[za]) return { hostname: xH, path: process.env[za] }
      if (process.env[Ga]) {
        let t = (0, PH.parse)(process.env[Ga])
        if (!t.hostname || !(t.hostname in TH))
          throw new Ze.CredentialsProviderError(
            `${t.hostname} is not a valid container metadata service hostname`,
            { tryNextLink: !1, logger: e }
          )
        if (!t.protocol || !(t.protocol in IH))
          throw new Ze.CredentialsProviderError(
            `${t.protocol} is not a valid container metadata service protocol`,
            { tryNextLink: !1, logger: e }
          )
        return { ...t, port: t.port ? parseInt(t.port, 10) : void 0 }
      }
      throw new Ze.CredentialsProviderError(
        `The container metadata credential provider cannot be used unless the ${za} or ${Ga} environment variable is set`,
        { tryNextLink: !1, logger: e }
      )
    }, 'getCmdsUri'),
    mr,
    DH =
      ((mr = class extends Ze.CredentialsProviderError {
        constructor(t, r = !0) {
          super(t, r),
            (this.tryNextLink = r),
            (this.name = 'InstanceMetadataV1FallbackError'),
            Object.setPrototypeOf(this, mr.prototype)
        }
      }),
      re(mr, 'InstanceMetadataV1FallbackError'),
      mr),
    Xu = It(),
    kH = ur(),
    Ow = ((e) => (
      (e.IPv4 = 'http://169.254.169.254'),
      (e.IPv6 = 'http://[fd00:ec2::254]'),
      e
    ))(Ow || {}),
    MH = 'AWS_EC2_METADATA_SERVICE_ENDPOINT',
    UH = 'ec2_metadata_service_endpoint',
    FH = {
      environmentVariableSelector: (e) => e[MH],
      configFileSelector: (e) => e[UH],
      default: void 0,
    },
    Aw = ((e) => ((e.IPv4 = 'IPv4'), (e.IPv6 = 'IPv6'), e))(Aw || {}),
    LH = 'AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE',
    jH = 'ec2_metadata_service_endpoint_mode',
    HH = {
      environmentVariableSelector: (e) => e[LH],
      configFileSelector: (e) => e[jH],
      default: 'IPv4',
    },
    xw = re(
      async () => (0, kH.parseUrl)((await qH()) || (await $H())),
      'getInstanceMetadataEndpoint'
    ),
    qH = re(async () => (0, Xu.loadConfig)(FH)(), 'getFromEndpointConfig'),
    $H = re(async () => {
      let e = await (0, Xu.loadConfig)(HH)()
      switch (e) {
        case 'IPv4':
          return 'http://169.254.169.254'
        case 'IPv6':
          return 'http://[fd00:ec2::254]'
        default:
          throw new Error(
            `Unsupported endpoint mode: ${e}. Select from ${Object.values(Aw)}`
          )
      }
    }, 'getFromEndpointModeConfig'),
    BH = 5 * 60,
    VH = 5 * 60,
    GH =
      'https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html',
    vw = re((e, t) => {
      let r = BH + Math.floor(Math.random() * VH),
        n = new Date(Date.now() + r * 1e3)
      t.warn(
        `Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(n)}.
For more information, please visit: ` + GH
      )
      let o = e.originalExpiration ?? e.expiration
      return {
        ...e,
        ...(o ? { originalExpiration: o } : {}),
        expiration: n,
      }
    }, 'getExtendedInstanceMetadataCredentials'),
    zH = re((e, t = {}) => {
      let r = t?.logger || console,
        n
      return async () => {
        let o
        try {
          ;(o = await e()),
            o.expiration &&
              o.expiration.getTime() < Date.now() &&
              (o = vw(o, r))
        } catch (s) {
          if (n) r.warn('Credential renew failed: ', s), (o = vw(n, r))
          else throw s
        }
        return (n = o), o
      }
    }, 'staticStabilityProvider'),
    Tw = '/latest/meta-data/iam/security-credentials/',
    WH = '/latest/api/token',
    Wu = 'AWS_EC2_METADATA_V1_DISABLED',
    Ew = 'ec2_metadata_v1_disabled',
    Sw = 'x-aws-ec2-metadata-token',
    KH = re(
      (e = {}) => zH(YH(e), { logger: e.logger }),
      'fromInstanceMetadata'
    ),
    YH = re((e = {}) => {
      let t = !1,
        { logger: r, profile: n } = e,
        { timeout: o, maxRetries: s } = Ju(e),
        i = re(async (a, c) => {
          if (t || c.headers?.[Sw] == null) {
            let u = !1,
              f = !1,
              g = await (0, Xu.loadConfig)(
                {
                  environmentVariableSelector: (_) => {
                    let w = _[Wu]
                    if (((f = !!w && w !== 'false'), w === void 0))
                      throw new Ze.CredentialsProviderError(
                        `${Wu} not set in env, checking config file next.`,
                        { logger: e.logger }
                      )
                    return f
                  },
                  configFileSelector: (_) => {
                    let w = _[Ew]
                    return (u = !!w && w !== 'false'), u
                  },
                  default: !1,
                },
                { profile: n }
              )()
            if (e.ec2MetadataV1Disabled || g) {
              let _ = []
              throw (
                (e.ec2MetadataV1Disabled &&
                  _.push(
                    'credential provider initialization (runtime option ec2MetadataV1Disabled)'
                  ),
                u && _.push(`config file profile (${Ew})`),
                f && _.push(`process environment variable (${Wu})`),
                new DH(
                  `AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${_.join(', ')}].`
                ))
              )
            }
          }
          let l = (
            await Ku(async () => {
              let u
              try {
                u = await XH(c)
              } catch (f) {
                throw (f.statusCode === 401 && (t = !1), f)
              }
              return u
            }, a)
          ).trim()
          return Ku(async () => {
            let u
            try {
              u = await QH(l, c, e)
            } catch (f) {
              throw (f.statusCode === 401 && (t = !1), f)
            }
            return u
          }, a)
        }, 'getCredentials')
      return async () => {
        let a = await xw()
        if (t)
          return (
            r?.debug(
              'AWS SDK Instance Metadata',
              'using v1 fallback (no token fetch)'
            ),
            i(s, { ...a, timeout: o })
          )
        {
          let c
          try {
            c = (await JH({ ...a, timeout: o })).toString()
          } catch (d) {
            if (d?.statusCode === 400)
              throw Object.assign(d, {
                message: 'EC2 Metadata token request returned error',
              })
            return (
              (d.message === 'TimeoutError' ||
                [403, 404, 405].includes(d.statusCode)) &&
                (t = !0),
              r?.debug(
                'AWS SDK Instance Metadata',
                'using v1 fallback (initial)'
              ),
              i(s, { ...a, timeout: o })
            )
          }
          return i(s, { ...a, headers: { [Sw]: c }, timeout: o })
        }
      }
    }, 'getInstanceMetadataProvider'),
    JH = re(
      async (e) =>
        An({
          ...e,
          path: WH,
          method: 'PUT',
          headers: {
            'x-aws-ec2-metadata-token-ttl-seconds': '21600',
          },
        }),
      'getMetadataToken'
    ),
    XH = re(
      async (e) => (await An({ ...e, path: Tw })).toString(),
      'getProfile'
    ),
    QH = re(async (e, t, r) => {
      let n = JSON.parse((await An({ ...t, path: Tw + e })).toString())
      if (!bw(n))
        throw new Ze.CredentialsProviderError(
          'Invalid response received from instance metadata service.',
          { logger: r.logger }
        )
      return Pw(n)
    }, 'getCredentialsFromProfile')
})
var Nw = h((Ka) => {
  'use strict'
  Object.defineProperty(Ka, '__esModule', { value: !0 })
  Ka.checkUrl = void 0
  var ZH = fe(),
    eq = '169.254.170.2',
    tq = '169.254.170.23',
    rq = '[fd00:ec2::23]',
    nq = (e, t) => {
      if (
        e.protocol !== 'https:' &&
        !(e.hostname === eq || e.hostname === tq || e.hostname === rq)
      ) {
        if (e.hostname.includes('[')) {
          if (
            e.hostname === '[::1]' ||
            e.hostname === '[0000:0000:0000:0000:0000:0000:0000:0001]'
          )
            return
        } else {
          if (e.hostname === 'localhost') return
          let r = e.hostname.split('.'),
            n = (o) => {
              let s = parseInt(o, 10)
              return 0 <= s && s <= 255
            }
          if (r[0] === '127' && n(r[1]) && n(r[2]) && n(r[3]) && r.length === 4)
            return
        }
        throw new ZH.CredentialsProviderError(
          `URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`,
          { logger: t }
        )
      }
    }
  Ka.checkUrl = nq
})
var Dw = h((Ya) => {
  'use strict'
  Object.defineProperty(Ya, '__esModule', { value: !0 })
  Ya.createGetRequest = aq
  Ya.getCredentials = cq
  var Qu = fe(),
    oq = X(),
    sq = D(),
    iq = sl()
  function aq(e) {
    return new oq.HttpRequest({
      protocol: e.protocol,
      hostname: e.hostname,
      port: Number(e.port),
      path: e.pathname,
      query: Array.from(e.searchParams.entries()).reduce(
        (t, [r, n]) => ((t[r] = n), t),
        {}
      ),
      fragment: e.hash,
    })
  }
  async function cq(e, t) {
    let n = await (0, iq.sdkStreamMixin)(e.body).transformToString()
    if (e.statusCode === 200) {
      let o = JSON.parse(n)
      if (
        typeof o.AccessKeyId != 'string' ||
        typeof o.SecretAccessKey != 'string' ||
        typeof o.Token != 'string' ||
        typeof o.Expiration != 'string'
      )
        throw new Qu.CredentialsProviderError(
          'HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }',
          { logger: t }
        )
      return {
        accessKeyId: o.AccessKeyId,
        secretAccessKey: o.SecretAccessKey,
        sessionToken: o.Token,
        expiration: (0, sq.parseRfc3339DateTime)(o.Expiration),
      }
    }
    if (e.statusCode >= 400 && e.statusCode < 500) {
      let o = {}
      try {
        o = JSON.parse(n)
      } catch {}
      throw Object.assign(
        new Qu.CredentialsProviderError(
          `Server responded with status: ${e.statusCode}`,
          { logger: t }
        ),
        { Code: o.Code, Message: o.Message }
      )
    }
    throw new Qu.CredentialsProviderError(
      `Server responded with status: ${e.statusCode}`,
      { logger: t }
    )
  }
})
var kw = h((Ja) => {
  'use strict'
  Object.defineProperty(Ja, '__esModule', { value: !0 })
  Ja.retryWrapper = void 0
  var dq = (e, t, r) => async () => {
    for (let n = 0; n < t; ++n)
      try {
        return await e()
      } catch {
        await new Promise((s) => setTimeout(s, r))
      }
    return await e()
  }
  Ja.retryWrapper = dq
})
var Fw = h((Xa) => {
  'use strict'
  Object.defineProperty(Xa, '__esModule', { value: !0 })
  Xa.fromHttp = void 0
  var lq = (Ba(), F($a)),
    uq = (We(), F(tr)),
    pq = Xt(),
    Mw = fe(),
    fq = lq.__importDefault(require('fs/promises')),
    mq = Nw(),
    Uw = Dw(),
    gq = kw(),
    hq = 'AWS_CONTAINER_CREDENTIALS_RELATIVE_URI',
    _q = 'http://169.254.170.2',
    yq = 'AWS_CONTAINER_CREDENTIALS_FULL_URI',
    vq = 'AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE',
    Eq = 'AWS_CONTAINER_AUTHORIZATION_TOKEN',
    Sq = (e = {}) => {
      e.logger?.debug('@aws-sdk/credential-provider-http - fromHttp')
      let t,
        r = e.awsContainerCredentialsRelativeUri ?? process.env[hq],
        n = e.awsContainerCredentialsFullUri ?? process.env[yq],
        o = e.awsContainerAuthorizationToken ?? process.env[Eq],
        s = e.awsContainerAuthorizationTokenFile ?? process.env[vq],
        i =
          e.logger?.constructor?.name === 'NoOpLogger' || !e.logger
            ? console.warn
            : e.logger.warn
      if (
        (r &&
          n &&
          (i(
            '@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.'
          ),
          i('awsContainerCredentialsFullUri will take precedence.')),
        o &&
          s &&
          (i(
            '@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.'
          ),
          i('awsContainerAuthorizationToken will take precedence.')),
        n)
      )
        t = n
      else if (r) t = `${_q}${r}`
      else
        throw new Mw.CredentialsProviderError(
          `No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`,
          { logger: e.logger }
        )
      let a = new URL(t)
      ;(0, mq.checkUrl)(a, e.logger)
      let c = new pq.NodeHttpHandler({
        requestTimeout: e.timeout ?? 1e3,
        connectionTimeout: e.timeout ?? 1e3,
      })
      return (0, gq.retryWrapper)(
        async () => {
          let d = (0, Uw.createGetRequest)(a)
          o
            ? (d.headers.Authorization = o)
            : s &&
              (d.headers.Authorization = (
                await fq.default.readFile(s)
              ).toString())
          try {
            let l = await c.handle(d)
            return (0, Uw.getCredentials)(l.response).then((u) =>
              (0, uq.setCredentialFeature)(u, 'CREDENTIALS_HTTP', 'z')
            )
          } catch (l) {
            throw new Mw.CredentialsProviderError(String(l), {
              logger: e.logger,
            })
          }
        },
        e.maxRetries ?? 3,
        e.timeout ?? 1e3
      )
    }
  Xa.fromHttp = Sq
})
var Zu = h((Qa) => {
  'use strict'
  Object.defineProperty(Qa, '__esModule', { value: !0 })
  Qa.fromHttp = void 0
  var wq = Fw()
  Object.defineProperty(Qa, 'fromHttp', {
    enumerable: !0,
    get: function () {
      return wq.fromHttp
    },
  })
})
var tp = h((Ft) => {
  'use strict'
  Object.defineProperty(Ft, '__esModule', { value: !0 })
  Ft.resolveHttpAuthSchemeConfig =
    Ft.defaultSSOHttpAuthSchemeProvider =
    Ft.defaultSSOHttpAuthSchemeParametersProvider =
      void 0
  var bq = (oe(), F(Je)),
    ep = Ue(),
    Pq = async (e, t, r) => ({
      operation: (0, ep.getSmithyContext)(t).operation,
      region:
        (await (0, ep.normalizeProvider)(e.region)()) ||
        (() => {
          throw new Error(
            'expected `region` to be configured for `aws.auth#sigv4`'
          )
        })(),
    })
  Ft.defaultSSOHttpAuthSchemeParametersProvider = Pq
  function Rq(e) {
    return {
      schemeId: 'aws.auth#sigv4',
      signingProperties: { name: 'awsssoportal', region: e.region },
      propertiesExtractor: (t, r) => ({
        signingProperties: { config: t, context: r },
      }),
    }
  }
  function Za(e) {
    return { schemeId: 'smithy.api#noAuth' }
  }
  var Cq = (e) => {
    let t = []
    switch (e.operation) {
      case 'GetRoleCredentials': {
        t.push(Za(e))
        break
      }
      case 'ListAccountRoles': {
        t.push(Za(e))
        break
      }
      case 'ListAccounts': {
        t.push(Za(e))
        break
      }
      case 'Logout': {
        t.push(Za(e))
        break
      }
      default:
        t.push(Rq(e))
    }
    return t
  }
  Ft.defaultSSOHttpAuthSchemeProvider = Cq
  var Oq = (e) => {
    let t = (0, bq.resolveAwsSdkSigV4Config)(e)
    return Object.assign(t, {
      authSchemePreference: (0, ep.normalizeProvider)(
        e.authSchemePreference ?? []
      ),
    })
  }
  Ft.resolveHttpAuthSchemeConfig = Oq
})
var Lw = h((nY, Aq) => {
  Aq.exports = {
    name: '@aws-sdk/client-sso',
    description:
      'AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native',
    version: '3.804.0',
    scripts: {
      build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
      'build:cjs': 'node ../../scripts/compilation/inline client-sso',
      'build:es': 'tsc -p tsconfig.es.json',
      'build:include:deps':
        'lerna run --scope $npm_package_name --include-dependencies build',
      'build:types': 'tsc -p tsconfig.types.json',
      'build:types:downlevel': 'downlevel-dts dist-types dist-types/ts3.4',
      clean: 'rimraf ./dist-* && rimraf *.tsbuildinfo',
      'extract:docs': 'api-extractor run --local',
      'generate:client':
        'node ../../scripts/generate-clients/single-service --solo sso',
    },
    main: './dist-cjs/index.js',
    types: './dist-types/index.d.ts',
    module: './dist-es/index.js',
    sideEffects: !1,
    dependencies: {
      '@aws-crypto/sha256-browser': '5.2.0',
      '@aws-crypto/sha256-js': '5.2.0',
      '@aws-sdk/core': '3.804.0',
      '@aws-sdk/middleware-host-header': '3.804.0',
      '@aws-sdk/middleware-logger': '3.804.0',
      '@aws-sdk/middleware-recursion-detection': '3.804.0',
      '@aws-sdk/middleware-user-agent': '3.804.0',
      '@aws-sdk/region-config-resolver': '3.804.0',
      '@aws-sdk/types': '3.804.0',
      '@aws-sdk/util-endpoints': '3.804.0',
      '@aws-sdk/util-user-agent-browser': '3.804.0',
      '@aws-sdk/util-user-agent-node': '3.804.0',
      '@smithy/config-resolver': '^4.1.0',
      '@smithy/core': '^3.3.1',
      '@smithy/fetch-http-handler': '^5.0.2',
      '@smithy/hash-node': '^4.0.2',
      '@smithy/invalid-dependency': '^4.0.2',
      '@smithy/middleware-content-length': '^4.0.2',
      '@smithy/middleware-endpoint': '^4.1.2',
      '@smithy/middleware-retry': '^4.1.3',
      '@smithy/middleware-serde': '^4.0.3',
      '@smithy/middleware-stack': '^4.0.2',
      '@smithy/node-config-provider': '^4.0.2',
      '@smithy/node-http-handler': '^4.0.4',
      '@smithy/protocol-http': '^5.1.0',
      '@smithy/smithy-client': '^4.2.2',
      '@smithy/types': '^4.2.0',
      '@smithy/url-parser': '^4.0.2',
      '@smithy/util-base64': '^4.0.0',
      '@smithy/util-body-length-browser': '^4.0.0',
      '@smithy/util-body-length-node': '^4.0.0',
      '@smithy/util-defaults-mode-browser': '^4.0.10',
      '@smithy/util-defaults-mode-node': '^4.0.10',
      '@smithy/util-endpoints': '^3.0.2',
      '@smithy/util-middleware': '^4.0.2',
      '@smithy/util-retry': '^4.0.3',
      '@smithy/util-utf8': '^4.0.0',
      tslib: '^2.6.2',
    },
    devDependencies: {
      '@tsconfig/node18': '18.2.4',
      '@types/node': '^18.19.69',
      concurrently: '7.0.0',
      'downlevel-dts': '0.10.1',
      rimraf: '3.0.2',
      typescript: '~5.8.3',
    },
    engines: { node: '>=18.0.0' },
    typesVersions: { '<4.0': { 'dist-types/*': ['dist-types/ts3.4/*'] } },
    files: ['dist-*/**'],
    author: {
      name: 'AWS SDK for JavaScript Team',
      url: 'https://aws.amazon.com/javascript/',
    },
    license: 'Apache-2.0',
    browser: {
      './dist-es/runtimeConfig': './dist-es/runtimeConfig.browser',
    },
    'react-native': {
      './dist-es/runtimeConfig': './dist-es/runtimeConfig.native',
    },
    homepage:
      'https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso',
    repository: {
      type: 'git',
      url: 'https://github.com/aws/aws-sdk-js-v3.git',
      directory: 'clients/client-sso',
    },
  }
})
var is = h((oY, Gw) => {
  'use strict'
  var tc = Object.defineProperty,
    xq = Object.getOwnPropertyDescriptor,
    Tq = Object.getOwnPropertyNames,
    Iq = Object.prototype.hasOwnProperty,
    ec = (e, t) => tc(e, 'name', { value: t, configurable: !0 }),
    Nq = (e, t) => {
      for (var r in t) tc(e, r, { get: t[r], enumerable: !0 })
    },
    Dq = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of Tq(t))
          !Iq.call(e, o) &&
            o !== r &&
            tc(e, o, {
              get: () => t[o],
              enumerable: !(n = xq(t, o)) || n.enumerable,
            })
      return e
    },
    kq = (e) => Dq(tc({}, '__esModule', { value: !0 }), e),
    Hw = {}
  Nq(Hw, {
    NODE_APP_ID_CONFIG_OPTIONS: () => jq,
    UA_APP_ID_ENV_NAME: () => Bw,
    UA_APP_ID_INI_NAME: () => Vw,
    createDefaultUserAgentProvider: () => $w,
    crtAvailability: () => qw,
    defaultUserAgent: () => Uq,
  })
  Gw.exports = kq(Hw)
  var jw = require('os'),
    rp = require('process'),
    qw = { isCrtAvailable: !1 },
    Mq = ec(
      () => (qw.isCrtAvailable ? ['md/crt-avail'] : null),
      'isCrtAvailable'
    ),
    $w = ec(
      ({ serviceId: e, clientVersion: t }) =>
        async (r) => {
          let n = [
              ['aws-sdk-js', t],
              ['ua', '2.1'],
              [`os/${(0, jw.platform)()}`, (0, jw.release)()],
              ['lang/js'],
              ['md/nodejs', `${rp.versions.node}`],
            ],
            o = Mq()
          o && n.push(o),
            e && n.push([`api/${e}`, t]),
            rp.env.AWS_EXECUTION_ENV &&
              n.push([`exec-env/${rp.env.AWS_EXECUTION_ENV}`])
          let s = await r?.userAgentAppId?.()
          return s ? [...n, [`app/${s}`]] : [...n]
        },
      'createDefaultUserAgentProvider'
    ),
    Uq = $w,
    Fq = _n(),
    Bw = 'AWS_SDK_UA_APP_ID',
    Vw = 'sdk_ua_app_id',
    Lq = 'sdk-ua-app-id',
    jq = {
      environmentVariableSelector: ec(
        (e) => e[Bw],
        'environmentVariableSelector'
      ),
      configFileSelector: ec((e) => e[Vw] ?? e[Lq], 'configFileSelector'),
      default: Fq.DEFAULT_UA_APP_ID,
    }
})
var Jw = h((sY, Yw) => {
  var rc = Object.defineProperty,
    Hq = Object.getOwnPropertyDescriptor,
    qq = Object.getOwnPropertyNames,
    $q = Object.prototype.hasOwnProperty,
    np = (e, t) => rc(e, 'name', { value: t, configurable: !0 }),
    Bq = (e, t) => {
      for (var r in t) rc(e, r, { get: t[r], enumerable: !0 })
    },
    Vq = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of qq(t))
          !$q.call(e, o) &&
            o !== r &&
            rc(e, o, {
              get: () => t[o],
              enumerable: !(n = Hq(t, o)) || n.enumerable,
            })
      return e
    },
    Gq = (e) => Vq(rc({}, '__esModule', { value: !0 }), e),
    zw = {}
  Bq(zw, { fromUtf8: () => Kw, toUint8Array: () => zq, toUtf8: () => Wq })
  Yw.exports = Gq(zw)
  var Ww = ee(),
    Kw = np((e) => {
      let t = (0, Ww.fromString)(e, 'utf8')
      return new Uint8Array(
        t.buffer,
        t.byteOffset,
        t.byteLength / Uint8Array.BYTES_PER_ELEMENT
      )
    }, 'fromUtf8'),
    zq = np(
      (e) =>
        typeof e == 'string'
          ? Kw(e)
          : ArrayBuffer.isView(e)
            ? new Uint8Array(
                e.buffer,
                e.byteOffset,
                e.byteLength / Uint8Array.BYTES_PER_ELEMENT
              )
            : new Uint8Array(e),
      'toUint8Array'
    ),
    Wq = np((e) => {
      if (typeof e == 'string') return e
      if (
        typeof e != 'object' ||
        typeof e.byteOffset != 'number' ||
        typeof e.byteLength != 'number'
      )
        throw new Error(
          '@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.'
        )
      return (0, Ww.fromArrayBuffer)(
        e.buffer,
        e.byteOffset,
        e.byteLength
      ).toString('utf8')
    }, 'toUtf8')
})
var as = h((iY, eb) => {
  var nc = Object.defineProperty,
    Kq = Object.getOwnPropertyDescriptor,
    Yq = Object.getOwnPropertyNames,
    Jq = Object.prototype.hasOwnProperty,
    Qw = (e, t) => nc(e, 'name', { value: t, configurable: !0 }),
    Xq = (e, t) => {
      for (var r in t) nc(e, r, { get: t[r], enumerable: !0 })
    },
    Qq = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of Yq(t))
          !Jq.call(e, o) &&
            o !== r &&
            nc(e, o, {
              get: () => t[o],
              enumerable: !(n = Kq(t, o)) || n.enumerable,
            })
      return e
    },
    Zq = (e) => Qq(nc({}, '__esModule', { value: !0 }), e),
    Zw = {}
  Xq(Zw, { Hash: () => r$ })
  eb.exports = Zq(Zw)
  var op = ee(),
    e$ = Jw(),
    t$ = require('buffer'),
    Xw = require('crypto'),
    xn,
    r$ =
      ((xn = class {
        constructor(t, r) {
          ;(this.algorithmIdentifier = t), (this.secret = r), this.reset()
        }
        update(t, r) {
          this.hash.update((0, e$.toUint8Array)(sp(t, r)))
        }
        digest() {
          return Promise.resolve(this.hash.digest())
        }
        reset() {
          this.hash = this.secret
            ? (0, Xw.createHmac)(this.algorithmIdentifier, sp(this.secret))
            : (0, Xw.createHash)(this.algorithmIdentifier)
        }
      }),
      Qw(xn, 'Hash'),
      xn)
  function sp(e, t) {
    return t$.Buffer.isBuffer(e)
      ? e
      : typeof e == 'string'
        ? (0, op.fromString)(e, t)
        : ArrayBuffer.isView(e)
          ? (0, op.fromArrayBuffer)(e.buffer, e.byteOffset, e.byteLength)
          : (0, op.fromArrayBuffer)(e)
  }
  Qw(sp, 'castSourceData')
})
var cs = h((aY, nb) => {
  var oc = Object.defineProperty,
    n$ = Object.getOwnPropertyDescriptor,
    o$ = Object.getOwnPropertyNames,
    s$ = Object.prototype.hasOwnProperty,
    i$ = (e, t) => oc(e, 'name', { value: t, configurable: !0 }),
    a$ = (e, t) => {
      for (var r in t) oc(e, r, { get: t[r], enumerable: !0 })
    },
    c$ = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of o$(t))
          !s$.call(e, o) &&
            o !== r &&
            oc(e, o, {
              get: () => t[o],
              enumerable: !(n = n$(t, o)) || n.enumerable,
            })
      return e
    },
    d$ = (e) => c$(oc({}, '__esModule', { value: !0 }), e),
    rb = {}
  a$(rb, { calculateBodyLength: () => l$ })
  nb.exports = d$(rb)
  var tb = require('fs'),
    l$ = i$((e) => {
      if (!e) return 0
      if (typeof e == 'string') return Buffer.byteLength(e)
      if (typeof e.byteLength == 'number') return e.byteLength
      if (typeof e.size == 'number') return e.size
      if (typeof e.start == 'number' && typeof e.end == 'number')
        return e.end + 1 - e.start
      if (typeof e.path == 'string' || Buffer.isBuffer(e.path))
        return (0, tb.lstatSync)(e.path).size
      if (typeof e.fd == 'number') return (0, tb.fstatSync)(e.fd).size
      throw new Error(`Body Length computation failed for ${e}`)
    }, 'calculateBodyLength')
})
var ob = h((sc) => {
  'use strict'
  Object.defineProperty(sc, '__esModule', { value: !0 })
  sc.fromBase64 = void 0
  var u$ = ee(),
    p$ = /^[A-Za-z0-9+/]*={0,2}$/,
    f$ = (e) => {
      if ((e.length * 3) % 4 !== 0)
        throw new TypeError('Incorrect padding on base64 string.')
      if (!p$.exec(e)) throw new TypeError('Invalid base64 string.')
      let t = (0, u$.fromString)(e, 'base64')
      return new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
    }
  sc.fromBase64 = f$
})
var ap = h((dY, cb) => {
  var ic = Object.defineProperty,
    m$ = Object.getOwnPropertyDescriptor,
    g$ = Object.getOwnPropertyNames,
    h$ = Object.prototype.hasOwnProperty,
    ip = (e, t) => ic(e, 'name', { value: t, configurable: !0 }),
    _$ = (e, t) => {
      for (var r in t) ic(e, r, { get: t[r], enumerable: !0 })
    },
    y$ = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of g$(t))
          !h$.call(e, o) &&
            o !== r &&
            ic(e, o, {
              get: () => t[o],
              enumerable: !(n = m$(t, o)) || n.enumerable,
            })
      return e
    },
    v$ = (e) => y$(ic({}, '__esModule', { value: !0 }), e),
    sb = {}
  _$(sb, { fromUtf8: () => ab, toUint8Array: () => E$, toUtf8: () => S$ })
  cb.exports = v$(sb)
  var ib = ee(),
    ab = ip((e) => {
      let t = (0, ib.fromString)(e, 'utf8')
      return new Uint8Array(
        t.buffer,
        t.byteOffset,
        t.byteLength / Uint8Array.BYTES_PER_ELEMENT
      )
    }, 'fromUtf8'),
    E$ = ip(
      (e) =>
        typeof e == 'string'
          ? ab(e)
          : ArrayBuffer.isView(e)
            ? new Uint8Array(
                e.buffer,
                e.byteOffset,
                e.byteLength / Uint8Array.BYTES_PER_ELEMENT
              )
            : new Uint8Array(e),
      'toUint8Array'
    ),
    S$ = ip((e) => {
      if (typeof e == 'string') return e
      if (
        typeof e != 'object' ||
        typeof e.byteOffset != 'number' ||
        typeof e.byteLength != 'number'
      )
        throw new Error(
          '@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.'
        )
      return (0, ib.fromArrayBuffer)(
        e.buffer,
        e.byteOffset,
        e.byteLength
      ).toString('utf8')
    }, 'toUtf8')
})
var db = h((ac) => {
  'use strict'
  Object.defineProperty(ac, '__esModule', { value: !0 })
  ac.toBase64 = void 0
  var w$ = ee(),
    b$ = ap(),
    P$ = (e) => {
      let t
      if (
        (typeof e == 'string' ? (t = (0, b$.fromUtf8)(e)) : (t = e),
        typeof t != 'object' ||
          typeof t.byteOffset != 'number' ||
          typeof t.byteLength != 'number')
      )
        throw new Error(
          '@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.'
        )
      return (0, w$.fromArrayBuffer)(
        t.buffer,
        t.byteOffset,
        t.byteLength
      ).toString('base64')
    }
  ac.toBase64 = P$
})
var pb = h((uY, cc) => {
  var lb = Object.defineProperty,
    R$ = Object.getOwnPropertyDescriptor,
    C$ = Object.getOwnPropertyNames,
    O$ = Object.prototype.hasOwnProperty,
    cp = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of C$(t))
          !O$.call(e, o) &&
            o !== r &&
            lb(e, o, {
              get: () => t[o],
              enumerable: !(n = R$(t, o)) || n.enumerable,
            })
      return e
    },
    ub = (e, t, r) => (cp(e, t, 'default'), r && cp(r, t, 'default')),
    A$ = (e) => cp(lb({}, '__esModule', { value: !0 }), e),
    dp = {}
  cc.exports = A$(dp)
  ub(dp, ob(), cc.exports)
  ub(dp, db(), cc.exports)
})
var Ob = h((dc) => {
  'use strict'
  Object.defineProperty(dc, '__esModule', { value: !0 })
  dc.ruleSet = void 0
  var bb = 'required',
    Ae = 'fn',
    xe = 'argv',
    Nn = 'ref',
    fb = !0,
    mb = 'isSet',
    ds = 'booleanEquals',
    Tn = 'error',
    In = 'endpoint',
    pt = 'tree',
    lp = 'PartitionResult',
    up = 'getAttr',
    gb = { [bb]: !1, type: 'String' },
    hb = { [bb]: !0, default: !1, type: 'Boolean' },
    _b = { [Nn]: 'Endpoint' },
    Pb = { [Ae]: ds, [xe]: [{ [Nn]: 'UseFIPS' }, !0] },
    Rb = { [Ae]: ds, [xe]: [{ [Nn]: 'UseDualStack' }, !0] },
    Oe = {},
    yb = { [Ae]: up, [xe]: [{ [Nn]: lp }, 'supportsFIPS'] },
    Cb = { [Nn]: lp },
    vb = {
      [Ae]: ds,
      [xe]: [!0, { [Ae]: up, [xe]: [Cb, 'supportsDualStack'] }],
    },
    Eb = [Pb],
    Sb = [Rb],
    wb = [{ [Nn]: 'Region' }],
    x$ = {
      version: '1.0',
      parameters: {
        Region: gb,
        UseDualStack: hb,
        UseFIPS: hb,
        Endpoint: gb,
      },
      rules: [
        {
          conditions: [{ [Ae]: mb, [xe]: [_b] }],
          rules: [
            {
              conditions: Eb,
              error:
                'Invalid Configuration: FIPS and custom endpoint are not supported',
              type: Tn,
            },
            {
              conditions: Sb,
              error:
                'Invalid Configuration: Dualstack and custom endpoint are not supported',
              type: Tn,
            },
            {
              endpoint: { url: _b, properties: Oe, headers: Oe },
              type: In,
            },
          ],
          type: pt,
        },
        {
          conditions: [{ [Ae]: mb, [xe]: wb }],
          rules: [
            {
              conditions: [{ [Ae]: 'aws.partition', [xe]: wb, assign: lp }],
              rules: [
                {
                  conditions: [Pb, Rb],
                  rules: [
                    {
                      conditions: [{ [Ae]: ds, [xe]: [fb, yb] }, vb],
                      rules: [
                        {
                          endpoint: {
                            url: 'https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}',
                            properties: Oe,
                            headers: Oe,
                          },
                          type: In,
                        },
                      ],
                      type: pt,
                    },
                    {
                      error:
                        'FIPS and DualStack are enabled, but this partition does not support one or both',
                      type: Tn,
                    },
                  ],
                  type: pt,
                },
                {
                  conditions: Eb,
                  rules: [
                    {
                      conditions: [{ [Ae]: ds, [xe]: [yb, fb] }],
                      rules: [
                        {
                          conditions: [
                            {
                              [Ae]: 'stringEquals',
                              [xe]: [
                                {
                                  [Ae]: up,
                                  [xe]: [Cb, 'name'],
                                },
                                'aws-us-gov',
                              ],
                            },
                          ],
                          endpoint: {
                            url: 'https://portal.sso.{Region}.amazonaws.com',
                            properties: Oe,
                            headers: Oe,
                          },
                          type: In,
                        },
                        {
                          endpoint: {
                            url: 'https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}',
                            properties: Oe,
                            headers: Oe,
                          },
                          type: In,
                        },
                      ],
                      type: pt,
                    },
                    {
                      error:
                        'FIPS is enabled but this partition does not support FIPS',
                      type: Tn,
                    },
                  ],
                  type: pt,
                },
                {
                  conditions: Sb,
                  rules: [
                    {
                      conditions: [vb],
                      rules: [
                        {
                          endpoint: {
                            url: 'https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}',
                            properties: Oe,
                            headers: Oe,
                          },
                          type: In,
                        },
                      ],
                      type: pt,
                    },
                    {
                      error:
                        'DualStack is enabled but this partition does not support DualStack',
                      type: Tn,
                    },
                  ],
                  type: pt,
                },
                {
                  endpoint: {
                    url: 'https://portal.sso.{Region}.{PartitionResult#dnsSuffix}',
                    properties: Oe,
                    headers: Oe,
                  },
                  type: In,
                },
              ],
              type: pt,
            },
          ],
          type: pt,
        },
        { error: 'Invalid Configuration: Missing Region', type: Tn },
      ],
    }
  dc.ruleSet = x$
})
var Ab = h((lc) => {
  'use strict'
  Object.defineProperty(lc, '__esModule', { value: !0 })
  lc.defaultEndpointResolver = void 0
  var T$ = en(),
    pp = Qr(),
    I$ = Ob(),
    N$ = new pp.EndpointCache({
      size: 50,
      params: ['Endpoint', 'Region', 'UseDualStack', 'UseFIPS'],
    }),
    D$ = (e, t = {}) =>
      N$.get(e, () =>
        (0, pp.resolveEndpoint)(I$.ruleSet, {
          endpointParams: e,
          logger: t.logger,
        })
      )
  lc.defaultEndpointResolver = D$
  pp.customEndpointFunctions.aws = T$.awsEndpointFunctions
})
var Ib = h((uc) => {
  'use strict'
  Object.defineProperty(uc, '__esModule', { value: !0 })
  uc.getRuntimeConfig = void 0
  var k$ = (oe(), F(Je)),
    M$ = (_e(), F(Yr)),
    U$ = D(),
    F$ = ur(),
    xb = pb(),
    Tb = ap(),
    L$ = tp(),
    j$ = Ab(),
    H$ = (e) => ({
      apiVersion: '2019-06-10',
      base64Decoder: e?.base64Decoder ?? xb.fromBase64,
      base64Encoder: e?.base64Encoder ?? xb.toBase64,
      disableHostPrefix: e?.disableHostPrefix ?? !1,
      endpointProvider: e?.endpointProvider ?? j$.defaultEndpointResolver,
      extensions: e?.extensions ?? [],
      httpAuthSchemeProvider:
        e?.httpAuthSchemeProvider ?? L$.defaultSSOHttpAuthSchemeProvider,
      httpAuthSchemes: e?.httpAuthSchemes ?? [
        {
          schemeId: 'aws.auth#sigv4',
          identityProvider: (t) => t.getIdentityProvider('aws.auth#sigv4'),
          signer: new k$.AwsSdkSigV4Signer(),
        },
        {
          schemeId: 'smithy.api#noAuth',
          identityProvider: (t) =>
            t.getIdentityProvider('smithy.api#noAuth') || (async () => ({})),
          signer: new M$.NoAuthSigner(),
        },
      ],
      logger: e?.logger ?? new U$.NoOpLogger(),
      serviceId: e?.serviceId ?? 'SSO',
      urlParser: e?.urlParser ?? F$.parseUrl,
      utf8Decoder: e?.utf8Decoder ?? Tb.fromUtf8,
      utf8Encoder: e?.utf8Encoder ?? Tb.toUtf8,
    })
  uc.getRuntimeConfig = H$
})
var us = h((gY, Fb) => {
  var q$ = Object.create,
    ls = Object.defineProperty,
    $$ = Object.getOwnPropertyDescriptor,
    B$ = Object.getOwnPropertyNames,
    V$ = Object.getPrototypeOf,
    G$ = Object.prototype.hasOwnProperty,
    fp = (e, t) => ls(e, 'name', { value: t, configurable: !0 }),
    z$ = (e, t) => {
      for (var r in t) ls(e, r, { get: t[r], enumerable: !0 })
    },
    Mb = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of B$(t))
          !G$.call(e, o) &&
            o !== r &&
            ls(e, o, {
              get: () => t[o],
              enumerable: !(n = $$(t, o)) || n.enumerable,
            })
      return e
    },
    W$ = (e, t, r) => (
      (r = e != null ? q$(V$(e)) : {}),
      Mb(
        t || !e || !e.__esModule
          ? ls(r, 'default', { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    K$ = (e) => Mb(ls({}, '__esModule', { value: !0 }), e),
    Ub = {}
  z$(Ub, { resolveDefaultsModeConfig: () => oB })
  Fb.exports = K$(Ub)
  var Y$ = Qe(),
    Nb = It(),
    J$ = fe(),
    X$ = 'AWS_EXECUTION_ENV',
    Db = 'AWS_REGION',
    kb = 'AWS_DEFAULT_REGION',
    Q$ = 'AWS_EC2_METADATA_DISABLED',
    Z$ = ['in-region', 'cross-region', 'mobile', 'standard', 'legacy'],
    eB = '/latest/meta-data/placement/region',
    tB = 'AWS_DEFAULTS_MODE',
    rB = 'defaults_mode',
    nB = {
      environmentVariableSelector: (e) => e[tB],
      configFileSelector: (e) => e[rB],
      default: 'legacy',
    },
    oB = fp(
      ({
        region: e = (0, Nb.loadConfig)(Y$.NODE_REGION_CONFIG_OPTIONS),
        defaultsMode: t = (0, Nb.loadConfig)(nB),
      } = {}) =>
        (0, J$.memoize)(async () => {
          let r = typeof t == 'function' ? await t() : t
          switch (r?.toLowerCase()) {
            case 'auto':
              return sB(e)
            case 'in-region':
            case 'cross-region':
            case 'mobile':
            case 'standard':
            case 'legacy':
              return Promise.resolve(r?.toLocaleLowerCase())
            case void 0:
              return Promise.resolve('legacy')
            default:
              throw new Error(
                `Invalid parameter for "defaultsMode", expect ${Z$.join(', ')}, got ${r}`
              )
          }
        }),
      'resolveDefaultsModeConfig'
    ),
    sB = fp(async (e) => {
      if (e) {
        let t = typeof e == 'function' ? await e() : e,
          r = await iB()
        return r ? (t === r ? 'in-region' : 'cross-region') : 'standard'
      }
      return 'standard'
    }, 'resolveNodeDefaultsModeAuto'),
    iB = fp(async () => {
      if (process.env[X$] && (process.env[Db] || process.env[kb]))
        return process.env[Db] ?? process.env[kb]
      if (!process.env[Q$])
        try {
          let { getInstanceMetadataEndpoint: e, httpRequest: t } =
              await Promise.resolve().then(() => W$(ss())),
            r = await e()
          return (await t({ ...r, path: eB })).toString()
        } catch {}
    }, 'inferPhysicalRegion')
})
var $b = h((fc) => {
  'use strict'
  Object.defineProperty(fc, '__esModule', { value: !0 })
  fc.getRuntimeConfig = void 0
  var aB = (Ba(), F($a)),
    cB = aB.__importDefault(Lw()),
    Lb = (oe(), F(Je)),
    jb = is(),
    pc = Qe(),
    dB = as(),
    Hb = ut(),
    gr = It(),
    qb = Xt(),
    lB = cs(),
    uB = bn(),
    pB = Ib(),
    fB = D(),
    mB = us(),
    gB = D(),
    hB = (e) => {
      ;(0, gB.emitWarningIfUnsupportedVersion)(process.version)
      let t = (0, mB.resolveDefaultsModeConfig)(e),
        r = () => t().then(fB.loadConfigsForDefaultMode),
        n = (0, pB.getRuntimeConfig)(e)
      ;(0, Lb.emitWarningIfUnsupportedVersion)(process.version)
      let o = { profile: e?.profile }
      return {
        ...n,
        ...e,
        runtime: 'node',
        defaultsMode: t,
        authSchemePreference:
          e?.authSchemePreference ??
          (0, gr.loadConfig)(Lb.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, o),
        bodyLengthChecker: e?.bodyLengthChecker ?? lB.calculateBodyLength,
        defaultUserAgentProvider:
          e?.defaultUserAgentProvider ??
          (0, jb.createDefaultUserAgentProvider)({
            serviceId: n.serviceId,
            clientVersion: cB.default.version,
          }),
        maxAttempts:
          e?.maxAttempts ??
          (0, gr.loadConfig)(Hb.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
        region:
          e?.region ??
          (0, gr.loadConfig)(pc.NODE_REGION_CONFIG_OPTIONS, {
            ...pc.NODE_REGION_CONFIG_FILE_OPTIONS,
            ...o,
          }),
        requestHandler: qb.NodeHttpHandler.create(e?.requestHandler ?? r),
        retryMode:
          e?.retryMode ??
          (0, gr.loadConfig)(
            {
              ...Hb.NODE_RETRY_MODE_CONFIG_OPTIONS,
              default: async () =>
                (await r()).retryMode || uB.DEFAULT_RETRY_MODE,
            },
            e
          ),
        sha256: e?.sha256 ?? dB.Hash.bind(null, 'sha256'),
        streamCollector: e?.streamCollector ?? qb.streamCollector,
        useDualstackEndpoint:
          e?.useDualstackEndpoint ??
          (0, gr.loadConfig)(pc.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, o),
        useFipsEndpoint:
          e?.useFipsEndpoint ??
          (0, gr.loadConfig)(pc.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, o),
        userAgentAppId:
          e?.userAgentAppId ??
          (0, gr.loadConfig)(jb.NODE_APP_ID_CONFIG_OPTIONS, o),
      }
    }
  fc.getRuntimeConfig = hB
})
var ps = h((_Y, Kb) => {
  'use strict'
  var mc = Object.defineProperty,
    _B = Object.getOwnPropertyDescriptor,
    yB = Object.getOwnPropertyNames,
    vB = Object.prototype.hasOwnProperty,
    et = (e, t) => mc(e, 'name', { value: t, configurable: !0 }),
    EB = (e, t) => {
      for (var r in t) mc(e, r, { get: t[r], enumerable: !0 })
    },
    SB = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of yB(t))
          !vB.call(e, o) &&
            o !== r &&
            mc(e, o, {
              get: () => t[o],
              enumerable: !(n = _B(t, o)) || n.enumerable,
            })
      return e
    },
    wB = (e) => SB(mc({}, '__esModule', { value: !0 }), e),
    Vb = {}
  EB(Vb, {
    NODE_REGION_CONFIG_FILE_OPTIONS: () => CB,
    NODE_REGION_CONFIG_OPTIONS: () => RB,
    REGION_ENV_NAME: () => Gb,
    REGION_INI_NAME: () => zb,
    getAwsRegionExtensionConfiguration: () => bB,
    resolveAwsRegionExtensionConfiguration: () => PB,
    resolveRegionConfig: () => OB,
  })
  Kb.exports = wB(Vb)
  var bB = et(
      (e) => ({
        setRegion(t) {
          e.region = t
        },
        region() {
          return e.region
        },
      }),
      'getAwsRegionExtensionConfiguration'
    ),
    PB = et(
      (e) => ({ region: e.region() }),
      'resolveAwsRegionExtensionConfiguration'
    ),
    Gb = 'AWS_REGION',
    zb = 'region',
    RB = {
      environmentVariableSelector: et(
        (e) => e[Gb],
        'environmentVariableSelector'
      ),
      configFileSelector: et((e) => e[zb], 'configFileSelector'),
      default: et(() => {
        throw new Error('Region is missing')
      }, 'default'),
    },
    CB = { preferredFile: 'credentials' },
    Wb = et(
      (e) =>
        typeof e == 'string' && (e.startsWith('fips-') || e.endsWith('-fips')),
      'isFipsRegion'
    ),
    Bb = et(
      (e) =>
        Wb(e)
          ? ['fips-aws-global', 'aws-fips'].includes(e)
            ? 'us-east-1'
            : e.replace(/fips-(dkr-|prod-)?|-fips/, '')
          : e,
      'getRealRegion'
    ),
    OB = et((e) => {
      let { region: t, useFipsEndpoint: r } = e
      if (!t) throw new Error('Region is missing')
      return Object.assign(e, {
        region: et(async () => {
          if (typeof t == 'string') return Bb(t)
          let n = await t()
          return Bb(n)
        }, 'region'),
        useFipsEndpoint: et(async () => {
          let n = typeof t == 'string' ? t : await t()
          return Wb(n)
            ? !0
            : typeof r != 'function'
              ? Promise.resolve(!!r)
              : r()
        }, 'useFipsEndpoint'),
      })
    }, 'resolveRegionConfig')
})
var wP = h((yY, SP) => {
  'use strict'
  var gc = Object.defineProperty,
    AB = Object.getOwnPropertyDescriptor,
    xB = Object.getOwnPropertyNames,
    TB = Object.prototype.hasOwnProperty,
    N = (e, t) => gc(e, 'name', { value: t, configurable: !0 }),
    IB = (e, t) => {
      for (var r in t) gc(e, r, { get: t[r], enumerable: !0 })
    },
    NB = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of xB(t))
          !TB.call(e, o) &&
            o !== r &&
            gc(e, o, {
              get: () => t[o],
              enumerable: !(n = AB(t, o)) || n.enumerable,
            })
      return e
    },
    DB = (e) => NB(gc({}, '__esModule', { value: !0 }), e),
    tP = {}
  IB(tP, {
    GetRoleCredentialsCommand: () => yP,
    GetRoleCredentialsRequestFilterSensitiveLog: () => iP,
    GetRoleCredentialsResponseFilterSensitiveLog: () => cP,
    InvalidRequestException: () => rP,
    ListAccountRolesCommand: () => mp,
    ListAccountRolesRequestFilterSensitiveLog: () => dP,
    ListAccountsCommand: () => gp,
    ListAccountsRequestFilterSensitiveLog: () => lP,
    LogoutCommand: () => vP,
    LogoutRequestFilterSensitiveLog: () => uP,
    ResourceNotFoundException: () => nP,
    RoleCredentialsFilterSensitiveLog: () => aP,
    SSO: () => EP,
    SSOClient: () => _c,
    SSOServiceException: () => jn,
    TooManyRequestsException: () => oP,
    UnauthorizedException: () => sP,
    __Client: () => C.Client,
    paginateListAccountRoles: () => sV,
    paginateListAccounts: () => iV,
  })
  SP.exports = DB(tP)
  var Yb = To(),
    kB = Io(),
    MB = No(),
    Jb = _n(),
    UB = Qe(),
    ft = (_e(), F(Yr)),
    FB = Jo(),
    ms = Nt(),
    Xb = ut(),
    Qb = tp(),
    LB = N(
      (e) =>
        Object.assign(e, {
          useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
          useFipsEndpoint: e.useFipsEndpoint ?? !1,
          defaultSigningName: 'awsssoportal',
        }),
      'resolveClientEndpointParameters'
    ),
    hc = {
      UseFIPS: { type: 'builtInParams', name: 'useFipsEndpoint' },
      Endpoint: { type: 'builtInParams', name: 'endpoint' },
      Region: { type: 'builtInParams', name: 'region' },
      UseDualStack: {
        type: 'builtInParams',
        name: 'useDualstackEndpoint',
      },
    },
    jB = $b(),
    Zb = ps(),
    eP = X(),
    C = D(),
    HB = N((e) => {
      let t = e.httpAuthSchemes,
        r = e.httpAuthSchemeProvider,
        n = e.credentials
      return {
        setHttpAuthScheme(o) {
          let s = t.findIndex((i) => i.schemeId === o.schemeId)
          s === -1 ? t.push(o) : t.splice(s, 1, o)
        },
        httpAuthSchemes() {
          return t
        },
        setHttpAuthSchemeProvider(o) {
          r = o
        },
        httpAuthSchemeProvider() {
          return r
        },
        setCredentials(o) {
          n = o
        },
        credentials() {
          return n
        },
      }
    }, 'getHttpAuthExtensionConfiguration'),
    qB = N(
      (e) => ({
        httpAuthSchemes: e.httpAuthSchemes(),
        httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
        credentials: e.credentials(),
      }),
      'resolveHttpAuthRuntimeConfig'
    ),
    $B = N((e, t) => {
      let r = Object.assign(
        (0, Zb.getAwsRegionExtensionConfiguration)(e),
        (0, C.getDefaultExtensionConfiguration)(e),
        (0, eP.getHttpHandlerExtensionConfiguration)(e),
        HB(e)
      )
      return (
        t.forEach((n) => n.configure(r)),
        Object.assign(
          e,
          (0, Zb.resolveAwsRegionExtensionConfiguration)(r),
          (0, C.resolveDefaultRuntimeConfig)(r),
          (0, eP.resolveHttpHandlerRuntimeConfig)(r),
          qB(r)
        )
      )
    }, 'resolveRuntimeExtensions'),
    Dn,
    _c =
      ((Dn = class extends C.Client {
        constructor(...[r]) {
          let n = (0, jB.getRuntimeConfig)(r || {})
          super(n)
          y(this, 'config')
          this.initConfig = n
          let o = LB(n),
            s = (0, Jb.resolveUserAgentConfig)(o),
            i = (0, Xb.resolveRetryConfig)(s),
            a = (0, UB.resolveRegionConfig)(i),
            c = (0, Yb.resolveHostHeaderConfig)(a),
            d = (0, ms.resolveEndpointConfig)(c),
            l = (0, Qb.resolveHttpAuthSchemeConfig)(d),
            u = $B(l, r?.extensions || [])
          ;(this.config = u),
            this.middlewareStack.use((0, Jb.getUserAgentPlugin)(this.config)),
            this.middlewareStack.use((0, Xb.getRetryPlugin)(this.config)),
            this.middlewareStack.use(
              (0, FB.getContentLengthPlugin)(this.config)
            ),
            this.middlewareStack.use((0, Yb.getHostHeaderPlugin)(this.config)),
            this.middlewareStack.use((0, kB.getLoggerPlugin)(this.config)),
            this.middlewareStack.use(
              (0, MB.getRecursionDetectionPlugin)(this.config)
            ),
            this.middlewareStack.use(
              (0, ft.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                httpAuthSchemeParametersProvider:
                  Qb.defaultSSOHttpAuthSchemeParametersProvider,
                identityProviderConfigProvider: N(
                  async (f) =>
                    new ft.DefaultIdentityProviderConfig({
                      'aws.auth#sigv4': f.credentials,
                    }),
                  'identityProviderConfigProvider'
                ),
              })
            ),
            this.middlewareStack.use((0, ft.getHttpSigningPlugin)(this.config))
        }
        destroy() {
          super.destroy()
        }
      }),
      N(Dn, 'SSOClient'),
      Dn),
    yc = Et(),
    hr,
    jn =
      ((hr = class extends C.ServiceException {
        constructor(t) {
          super(t), Object.setPrototypeOf(this, hr.prototype)
        }
      }),
      N(hr, 'SSOServiceException'),
      hr),
    _r,
    rP =
      ((_r = class extends jn {
        constructor(r) {
          super({
            name: 'InvalidRequestException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'InvalidRequestException')
          y(this, '$fault', 'client')
          Object.setPrototypeOf(this, _r.prototype)
        }
      }),
      N(_r, 'InvalidRequestException'),
      _r),
    yr,
    nP =
      ((yr = class extends jn {
        constructor(r) {
          super({
            name: 'ResourceNotFoundException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'ResourceNotFoundException')
          y(this, '$fault', 'client')
          Object.setPrototypeOf(this, yr.prototype)
        }
      }),
      N(yr, 'ResourceNotFoundException'),
      yr),
    vr,
    oP =
      ((vr = class extends jn {
        constructor(r) {
          super({
            name: 'TooManyRequestsException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'TooManyRequestsException')
          y(this, '$fault', 'client')
          Object.setPrototypeOf(this, vr.prototype)
        }
      }),
      N(vr, 'TooManyRequestsException'),
      vr),
    Er,
    sP =
      ((Er = class extends jn {
        constructor(r) {
          super({
            name: 'UnauthorizedException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'UnauthorizedException')
          y(this, '$fault', 'client')
          Object.setPrototypeOf(this, Er.prototype)
        }
      }),
      N(Er, 'UnauthorizedException'),
      Er),
    iP = N(
      (e) => ({
        ...e,
        ...(e.accessToken && { accessToken: C.SENSITIVE_STRING }),
      }),
      'GetRoleCredentialsRequestFilterSensitiveLog'
    ),
    aP = N(
      (e) => ({
        ...e,
        ...(e.secretAccessKey && {
          secretAccessKey: C.SENSITIVE_STRING,
        }),
        ...(e.sessionToken && { sessionToken: C.SENSITIVE_STRING }),
      }),
      'RoleCredentialsFilterSensitiveLog'
    ),
    cP = N(
      (e) => ({
        ...e,
        ...(e.roleCredentials && {
          roleCredentials: aP(e.roleCredentials),
        }),
      }),
      'GetRoleCredentialsResponseFilterSensitiveLog'
    ),
    dP = N(
      (e) => ({
        ...e,
        ...(e.accessToken && { accessToken: C.SENSITIVE_STRING }),
      }),
      'ListAccountRolesRequestFilterSensitiveLog'
    ),
    lP = N(
      (e) => ({
        ...e,
        ...(e.accessToken && { accessToken: C.SENSITIVE_STRING }),
      }),
      'ListAccountsRequestFilterSensitiveLog'
    ),
    uP = N(
      (e) => ({
        ...e,
        ...(e.accessToken && { accessToken: C.SENSITIVE_STRING }),
      }),
      'LogoutRequestFilterSensitiveLog'
    ),
    fs = (oe(), F(Je)),
    BB = N(async (e, t) => {
      let r = (0, ft.requestBuilder)(e, t),
        n = (0, C.map)({}, C.isSerializableHeaderValue, { [Sc]: e[Ec] })
      r.bp('/federation/credentials')
      let o = (0, C.map)({
        [nV]: [, (0, C.expectNonNull)(e[rV], 'roleName')],
        [fP]: [, (0, C.expectNonNull)(e[pP], 'accountId')],
      })
      return (
        r
          .m('GET')
          .h(n)
          .q(o)
          .b(void 0),
        r.build()
      )
    }, 'se_GetRoleCredentialsCommand'),
    VB = N(async (e, t) => {
      let r = (0, ft.requestBuilder)(e, t),
        n = (0, C.map)({}, C.isSerializableHeaderValue, { [Sc]: e[Ec] })
      r.bp('/assignment/roles')
      let o = (0, C.map)({
        [_P]: [, e[hP]],
        [gP]: [() => e.maxResults !== void 0, () => e[mP].toString()],
        [fP]: [, (0, C.expectNonNull)(e[pP], 'accountId')],
      })
      return (
        r
          .m('GET')
          .h(n)
          .q(o)
          .b(void 0),
        r.build()
      )
    }, 'se_ListAccountRolesCommand'),
    GB = N(async (e, t) => {
      let r = (0, ft.requestBuilder)(e, t),
        n = (0, C.map)({}, C.isSerializableHeaderValue, { [Sc]: e[Ec] })
      r.bp('/assignment/accounts')
      let o = (0, C.map)({
        [_P]: [, e[hP]],
        [gP]: [() => e.maxResults !== void 0, () => e[mP].toString()],
      })
      return (
        r
          .m('GET')
          .h(n)
          .q(o)
          .b(void 0),
        r.build()
      )
    }, 'se_ListAccountsCommand'),
    zB = N(async (e, t) => {
      let r = (0, ft.requestBuilder)(e, t),
        n = (0, C.map)({}, C.isSerializableHeaderValue, { [Sc]: e[Ec] })
      return (
        r.bp('/logout'),
        r
          .m('POST')
          .h(n)
          .b(void 0),
        r.build()
      )
    }, 'se_LogoutCommand'),
    WB = N(async (e, t) => {
      if (e.statusCode !== 200 && e.statusCode >= 300) return vc(e, t)
      let r = (0, C.map)({ $metadata: Lt(e) }),
        n = (0, C.expectNonNull)(
          (0, C.expectObject)(await (0, fs.parseJsonBody)(e.body, t)),
          'body'
        ),
        o = (0, C.take)(n, { roleCredentials: C._json })
      return Object.assign(r, o), r
    }, 'de_GetRoleCredentialsCommand'),
    KB = N(async (e, t) => {
      if (e.statusCode !== 200 && e.statusCode >= 300) return vc(e, t)
      let r = (0, C.map)({ $metadata: Lt(e) }),
        n = (0, C.expectNonNull)(
          (0, C.expectObject)(await (0, fs.parseJsonBody)(e.body, t)),
          'body'
        ),
        o = (0, C.take)(n, {
          nextToken: C.expectString,
          roleList: C._json,
        })
      return Object.assign(r, o), r
    }, 'de_ListAccountRolesCommand'),
    YB = N(async (e, t) => {
      if (e.statusCode !== 200 && e.statusCode >= 300) return vc(e, t)
      let r = (0, C.map)({ $metadata: Lt(e) }),
        n = (0, C.expectNonNull)(
          (0, C.expectObject)(await (0, fs.parseJsonBody)(e.body, t)),
          'body'
        ),
        o = (0, C.take)(n, {
          accountList: C._json,
          nextToken: C.expectString,
        })
      return Object.assign(r, o), r
    }, 'de_ListAccountsCommand'),
    JB = N(async (e, t) => {
      if (e.statusCode !== 200 && e.statusCode >= 300) return vc(e, t)
      let r = (0, C.map)({ $metadata: Lt(e) })
      return await (0, C.collectBody)(e.body, t), r
    }, 'de_LogoutCommand'),
    vc = N(async (e, t) => {
      let r = { ...e, body: await (0, fs.parseJsonErrorBody)(e.body, t) },
        n = (0, fs.loadRestJsonErrorCode)(e, r.body)
      switch (n) {
        case 'InvalidRequestException':
        case 'com.amazonaws.sso#InvalidRequestException':
          throw await QB(r, t)
        case 'ResourceNotFoundException':
        case 'com.amazonaws.sso#ResourceNotFoundException':
          throw await ZB(r, t)
        case 'TooManyRequestsException':
        case 'com.amazonaws.sso#TooManyRequestsException':
          throw await eV(r, t)
        case 'UnauthorizedException':
        case 'com.amazonaws.sso#UnauthorizedException':
          throw await tV(r, t)
        default:
          let o = r.body
          return XB({ output: e, parsedBody: o, errorCode: n })
      }
    }, 'de_CommandError'),
    XB = (0, C.withBaseException)(jn),
    QB = N(async (e, t) => {
      let r = (0, C.map)({}),
        n = e.body,
        o = (0, C.take)(n, { message: C.expectString })
      Object.assign(r, o)
      let s = new rP({ $metadata: Lt(e), ...r })
      return (0, C.decorateServiceException)(s, e.body)
    }, 'de_InvalidRequestExceptionRes'),
    ZB = N(async (e, t) => {
      let r = (0, C.map)({}),
        n = e.body,
        o = (0, C.take)(n, { message: C.expectString })
      Object.assign(r, o)
      let s = new nP({ $metadata: Lt(e), ...r })
      return (0, C.decorateServiceException)(s, e.body)
    }, 'de_ResourceNotFoundExceptionRes'),
    eV = N(async (e, t) => {
      let r = (0, C.map)({}),
        n = e.body,
        o = (0, C.take)(n, { message: C.expectString })
      Object.assign(r, o)
      let s = new oP({ $metadata: Lt(e), ...r })
      return (0, C.decorateServiceException)(s, e.body)
    }, 'de_TooManyRequestsExceptionRes'),
    tV = N(async (e, t) => {
      let r = (0, C.map)({}),
        n = e.body,
        o = (0, C.take)(n, { message: C.expectString })
      Object.assign(r, o)
      let s = new sP({ $metadata: Lt(e), ...r })
      return (0, C.decorateServiceException)(s, e.body)
    }, 'de_UnauthorizedExceptionRes'),
    Lt = N(
      (e) => ({
        httpStatusCode: e.statusCode,
        requestId:
          e.headers['x-amzn-requestid'] ??
          e.headers['x-amzn-request-id'] ??
          e.headers['x-amz-request-id'],
        extendedRequestId: e.headers['x-amz-id-2'],
        cfId: e.headers['x-amz-cf-id'],
      }),
      'deserializeMetadata'
    ),
    pP = 'accountId',
    Ec = 'accessToken',
    fP = 'account_id',
    mP = 'maxResults',
    gP = 'max_result',
    hP = 'nextToken',
    _P = 'next_token',
    rV = 'roleName',
    nV = 'role_name',
    Sc = 'x-amz-sso_bearer_token',
    kn,
    yP =
      ((kn = class extends (
        C.Command.classBuilder()
          .ep(hc)
          .m(function (t, r, n, o) {
            return [
              (0, yc.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, ms.getEndpointPlugin)(
                n,
                t.getEndpointParameterInstructions()
              ),
            ]
          })
          .s('SWBPortalService', 'GetRoleCredentials', {})
          .n('SSOClient', 'GetRoleCredentialsCommand')
          .f(iP, cP)
          .ser(BB)
          .de(WB)
          .build()
      ) {}),
      N(kn, 'GetRoleCredentialsCommand'),
      kn),
    Mn,
    mp =
      ((Mn = class extends (
        C.Command.classBuilder()
          .ep(hc)
          .m(function (t, r, n, o) {
            return [
              (0, yc.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, ms.getEndpointPlugin)(
                n,
                t.getEndpointParameterInstructions()
              ),
            ]
          })
          .s('SWBPortalService', 'ListAccountRoles', {})
          .n('SSOClient', 'ListAccountRolesCommand')
          .f(dP, void 0)
          .ser(VB)
          .de(KB)
          .build()
      ) {}),
      N(Mn, 'ListAccountRolesCommand'),
      Mn),
    Un,
    gp =
      ((Un = class extends (
        C.Command.classBuilder()
          .ep(hc)
          .m(function (t, r, n, o) {
            return [
              (0, yc.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, ms.getEndpointPlugin)(
                n,
                t.getEndpointParameterInstructions()
              ),
            ]
          })
          .s('SWBPortalService', 'ListAccounts', {})
          .n('SSOClient', 'ListAccountsCommand')
          .f(lP, void 0)
          .ser(GB)
          .de(YB)
          .build()
      ) {}),
      N(Un, 'ListAccountsCommand'),
      Un),
    Fn,
    vP =
      ((Fn = class extends (
        C.Command.classBuilder()
          .ep(hc)
          .m(function (t, r, n, o) {
            return [
              (0, yc.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, ms.getEndpointPlugin)(
                n,
                t.getEndpointParameterInstructions()
              ),
            ]
          })
          .s('SWBPortalService', 'Logout', {})
          .n('SSOClient', 'LogoutCommand')
          .f(uP, void 0)
          .ser(zB)
          .de(JB)
          .build()
      ) {}),
      N(Fn, 'LogoutCommand'),
      Fn),
    oV = {
      GetRoleCredentialsCommand: yP,
      ListAccountRolesCommand: mp,
      ListAccountsCommand: gp,
      LogoutCommand: vP,
    },
    Ln,
    EP = ((Ln = class extends _c {}), N(Ln, 'SSO'), Ln)
  ;(0, C.createAggregatedClient)(oV, EP)
  var sV = (0, ft.createPaginator)(
      _c,
      mp,
      'nextToken',
      'nextToken',
      'maxResults'
    ),
    iV = (0, ft.createPaginator)(_c, gp, 'nextToken', 'nextToken', 'maxResults')
})
function aV(e) {
  return {
    schemeId: 'aws.auth#sigv4',
    signingProperties: { name: 'sso-oauth', region: e.region },
    propertiesExtractor: (t, r) => ({
      signingProperties: { config: t, context: r },
    }),
  }
}
function cV(e) {
  return { schemeId: 'smithy.api#noAuth' }
}
var gs,
  bP,
  PP,
  RP,
  hp = v(() => {
    oe()
    ;(gs = E(Ue())),
      (bP = async (e, t, r) => ({
        operation: (0, gs.getSmithyContext)(t).operation,
        region:
          (await (0, gs.normalizeProvider)(e.region)()) ||
          (() => {
            throw new Error(
              'expected `region` to be configured for `aws.auth#sigv4`'
            )
          })(),
      }))
    ;(PP = (e) => {
      let t = []
      switch (e.operation) {
        case 'CreateToken': {
          t.push(cV(e))
          break
        }
        default:
          t.push(aV(e))
      }
      return t
    }),
      (RP = (e) => {
        let t = dn(e)
        return Object.assign(t, {
          authSchemePreference: (0, gs.normalizeProvider)(
            e.authSchemePreference ?? []
          ),
        })
      })
  })
var CP,
  OP,
  _p = v(() => {
    ;(CP = (e) =>
      Object.assign(e, {
        useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
        useFipsEndpoint: e.useFipsEndpoint ?? !1,
        defaultSigningName: 'sso-oauth',
      })),
      (OP = {
        UseFIPS: { type: 'builtInParams', name: 'useFipsEndpoint' },
        Endpoint: { type: 'builtInParams', name: 'endpoint' },
        Region: { type: 'builtInParams', name: 'region' },
        UseDualStack: {
          type: 'builtInParams',
          name: 'useDualstackEndpoint',
        },
      })
  })
var wc,
  yp = v(() => {
    wc = {
      name: '@aws-sdk/nested-clients',
      version: '3.804.0',
      description: 'Nested clients for AWS SDK packages.',
      main: './dist-cjs/index.js',
      module: './dist-es/index.js',
      types: './dist-types/index.d.ts',
      scripts: {
        build:
          "yarn lint && concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        'build:cjs': 'node ../../scripts/compilation/inline nested-clients',
        'build:es': 'tsc -p tsconfig.es.json',
        'build:include:deps':
          'lerna run --scope $npm_package_name --include-dependencies build',
        'build:types': 'tsc -p tsconfig.types.json',
        'build:types:downlevel': 'downlevel-dts dist-types dist-types/ts3.4',
        clean: 'rimraf ./dist-* && rimraf *.tsbuildinfo',
        lint: 'node ../../scripts/validation/submodules-linter.js --pkg nested-clients',
        test: 'yarn g:vitest run',
        'test:watch': 'yarn g:vitest watch',
      },
      engines: { node: '>=18.0.0' },
      author: {
        name: 'AWS SDK for JavaScript Team',
        url: 'https://aws.amazon.com/javascript/',
      },
      license: 'Apache-2.0',
      dependencies: {
        '@aws-crypto/sha256-browser': '5.2.0',
        '@aws-crypto/sha256-js': '5.2.0',
        '@aws-sdk/core': '3.804.0',
        '@aws-sdk/middleware-host-header': '3.804.0',
        '@aws-sdk/middleware-logger': '3.804.0',
        '@aws-sdk/middleware-recursion-detection': '3.804.0',
        '@aws-sdk/middleware-user-agent': '3.804.0',
        '@aws-sdk/region-config-resolver': '3.804.0',
        '@aws-sdk/types': '3.804.0',
        '@aws-sdk/util-endpoints': '3.804.0',
        '@aws-sdk/util-user-agent-browser': '3.804.0',
        '@aws-sdk/util-user-agent-node': '3.804.0',
        '@smithy/config-resolver': '^4.1.0',
        '@smithy/core': '^3.3.1',
        '@smithy/fetch-http-handler': '^5.0.2',
        '@smithy/hash-node': '^4.0.2',
        '@smithy/invalid-dependency': '^4.0.2',
        '@smithy/middleware-content-length': '^4.0.2',
        '@smithy/middleware-endpoint': '^4.1.2',
        '@smithy/middleware-retry': '^4.1.3',
        '@smithy/middleware-serde': '^4.0.3',
        '@smithy/middleware-stack': '^4.0.2',
        '@smithy/node-config-provider': '^4.0.2',
        '@smithy/node-http-handler': '^4.0.4',
        '@smithy/protocol-http': '^5.1.0',
        '@smithy/smithy-client': '^4.2.2',
        '@smithy/types': '^4.2.0',
        '@smithy/url-parser': '^4.0.2',
        '@smithy/util-base64': '^4.0.0',
        '@smithy/util-body-length-browser': '^4.0.0',
        '@smithy/util-body-length-node': '^4.0.0',
        '@smithy/util-defaults-mode-browser': '^4.0.10',
        '@smithy/util-defaults-mode-node': '^4.0.10',
        '@smithy/util-endpoints': '^3.0.2',
        '@smithy/util-middleware': '^4.0.2',
        '@smithy/util-retry': '^4.0.3',
        '@smithy/util-utf8': '^4.0.0',
        tslib: '^2.6.2',
      },
      devDependencies: {
        concurrently: '7.0.0',
        'downlevel-dts': '0.10.1',
        rimraf: '3.0.2',
        typescript: '~5.8.3',
      },
      typesVersions: {
        '<4.0': { 'dist-types/*': ['dist-types/ts3.4/*'] },
      },
      files: [
        './sso-oidc.d.ts',
        './sso-oidc.js',
        './sts.d.ts',
        './sts.js',
        'dist-*/**',
      ],
      browser: {
        './dist-es/submodules/sso-oidc/runtimeConfig':
          './dist-es/submodules/sso-oidc/runtimeConfig.browser',
        './dist-es/submodules/sts/runtimeConfig':
          './dist-es/submodules/sts/runtimeConfig.browser',
      },
      'react-native': {},
      homepage:
        'https://github.com/aws/aws-sdk-js-v3/tree/main/packages/nested-clients',
      repository: {
        type: 'git',
        url: 'https://github.com/aws/aws-sdk-js-v3.git',
        directory: 'packages/nested-clients',
      },
      exports: {
        './sso-oidc': {
          types: './dist-types/submodules/sso-oidc/index.d.ts',
          module: './dist-es/submodules/sso-oidc/index.js',
          node: './dist-cjs/submodules/sso-oidc/index.js',
          import: './dist-es/submodules/sso-oidc/index.js',
          require: './dist-cjs/submodules/sso-oidc/index.js',
        },
        './sts': {
          types: './dist-types/submodules/sts/index.d.ts',
          module: './dist-es/submodules/sts/index.js',
          node: './dist-cjs/submodules/sts/index.js',
          import: './dist-es/submodules/sts/index.js',
          require: './dist-cjs/submodules/sts/index.js',
        },
      },
    }
  })
var AP = h((bc) => {
  'use strict'
  Object.defineProperty(bc, '__esModule', { value: !0 })
  bc.fromBase64 = void 0
  var lV = ee(),
    uV = /^[A-Za-z0-9+/]*={0,2}$/,
    pV = (e) => {
      if ((e.length * 3) % 4 !== 0)
        throw new TypeError('Incorrect padding on base64 string.')
      if (!uV.exec(e)) throw new TypeError('Invalid base64 string.')
      let t = (0, lV.fromString)(e, 'base64')
      return new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
    }
  bc.fromBase64 = pV
})
var Rc = h((RY, NP) => {
  var Pc = Object.defineProperty,
    fV = Object.getOwnPropertyDescriptor,
    mV = Object.getOwnPropertyNames,
    gV = Object.prototype.hasOwnProperty,
    vp = (e, t) => Pc(e, 'name', { value: t, configurable: !0 }),
    hV = (e, t) => {
      for (var r in t) Pc(e, r, { get: t[r], enumerable: !0 })
    },
    _V = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of mV(t))
          !gV.call(e, o) &&
            o !== r &&
            Pc(e, o, {
              get: () => t[o],
              enumerable: !(n = fV(t, o)) || n.enumerable,
            })
      return e
    },
    yV = (e) => _V(Pc({}, '__esModule', { value: !0 }), e),
    xP = {}
  hV(xP, { fromUtf8: () => IP, toUint8Array: () => vV, toUtf8: () => EV })
  NP.exports = yV(xP)
  var TP = ee(),
    IP = vp((e) => {
      let t = (0, TP.fromString)(e, 'utf8')
      return new Uint8Array(
        t.buffer,
        t.byteOffset,
        t.byteLength / Uint8Array.BYTES_PER_ELEMENT
      )
    }, 'fromUtf8'),
    vV = vp(
      (e) =>
        typeof e == 'string'
          ? IP(e)
          : ArrayBuffer.isView(e)
            ? new Uint8Array(
                e.buffer,
                e.byteOffset,
                e.byteLength / Uint8Array.BYTES_PER_ELEMENT
              )
            : new Uint8Array(e),
      'toUint8Array'
    ),
    EV = vp((e) => {
      if (typeof e == 'string') return e
      if (
        typeof e != 'object' ||
        typeof e.byteOffset != 'number' ||
        typeof e.byteLength != 'number'
      )
        throw new Error(
          '@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.'
        )
      return (0, TP.fromArrayBuffer)(
        e.buffer,
        e.byteOffset,
        e.byteLength
      ).toString('utf8')
    }, 'toUtf8')
})
var DP = h((Cc) => {
  'use strict'
  Object.defineProperty(Cc, '__esModule', { value: !0 })
  Cc.toBase64 = void 0
  var SV = ee(),
    wV = Rc(),
    bV = (e) => {
      let t
      if (
        (typeof e == 'string' ? (t = (0, wV.fromUtf8)(e)) : (t = e),
        typeof t != 'object' ||
          typeof t.byteOffset != 'number' ||
          typeof t.byteLength != 'number')
      )
        throw new Error(
          '@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.'
        )
      return (0, SV.fromArrayBuffer)(
        t.buffer,
        t.byteOffset,
        t.byteLength
      ).toString('base64')
    }
  Cc.toBase64 = bV
})
var wp = h((OY, Oc) => {
  var kP = Object.defineProperty,
    PV = Object.getOwnPropertyDescriptor,
    RV = Object.getOwnPropertyNames,
    CV = Object.prototype.hasOwnProperty,
    Ep = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of RV(t))
          !CV.call(e, o) &&
            o !== r &&
            kP(e, o, {
              get: () => t[o],
              enumerable: !(n = PV(t, o)) || n.enumerable,
            })
      return e
    },
    MP = (e, t, r) => (Ep(e, t, 'default'), r && Ep(r, t, 'default')),
    OV = (e) => Ep(kP({}, '__esModule', { value: !0 }), e),
    Sp = {}
  Oc.exports = OV(Sp)
  MP(Sp, AP(), Oc.exports)
  MP(Sp, DP(), Oc.exports)
})
var GP,
  Ie,
  Ne,
  $n,
  UP,
  hs,
  Hn,
  qn,
  mt,
  bp,
  Pp,
  FP,
  LP,
  jP,
  zP,
  WP,
  Te,
  HP,
  KP,
  qP,
  $P,
  BP,
  VP,
  AV,
  YP,
  JP = v(() => {
    ;(GP = 'required'),
      (Ie = 'fn'),
      (Ne = 'argv'),
      ($n = 'ref'),
      (UP = 'isSet'),
      (hs = 'booleanEquals'),
      (Hn = 'error'),
      (qn = 'endpoint'),
      (mt = 'tree'),
      (bp = 'PartitionResult'),
      (Pp = 'getAttr'),
      (FP = { [GP]: !1, type: 'String' }),
      (LP = { [GP]: !0, default: !1, type: 'Boolean' }),
      (jP = { [$n]: 'Endpoint' }),
      (zP = { [Ie]: hs, [Ne]: [{ [$n]: 'UseFIPS' }, !0] }),
      (WP = { [Ie]: hs, [Ne]: [{ [$n]: 'UseDualStack' }, !0] }),
      (Te = {}),
      (HP = { [Ie]: Pp, [Ne]: [{ [$n]: bp }, 'supportsFIPS'] }),
      (KP = { [$n]: bp }),
      (qP = {
        [Ie]: hs,
        [Ne]: [!0, { [Ie]: Pp, [Ne]: [KP, 'supportsDualStack'] }],
      }),
      ($P = [zP]),
      (BP = [WP]),
      (VP = [{ [$n]: 'Region' }]),
      (AV = {
        version: '1.0',
        parameters: {
          Region: FP,
          UseDualStack: LP,
          UseFIPS: LP,
          Endpoint: FP,
        },
        rules: [
          {
            conditions: [{ [Ie]: UP, [Ne]: [jP] }],
            rules: [
              {
                conditions: $P,
                error:
                  'Invalid Configuration: FIPS and custom endpoint are not supported',
                type: Hn,
              },
              {
                conditions: BP,
                error:
                  'Invalid Configuration: Dualstack and custom endpoint are not supported',
                type: Hn,
              },
              {
                endpoint: {
                  url: jP,
                  properties: Te,
                  headers: Te,
                },
                type: qn,
              },
            ],
            type: mt,
          },
          {
            conditions: [{ [Ie]: UP, [Ne]: VP }],
            rules: [
              {
                conditions: [
                  {
                    [Ie]: 'aws.partition',
                    [Ne]: VP,
                    assign: bp,
                  },
                ],
                rules: [
                  {
                    conditions: [zP, WP],
                    rules: [
                      {
                        conditions: [
                          {
                            [Ie]: hs,
                            [Ne]: [!0, HP],
                          },
                          qP,
                        ],
                        rules: [
                          {
                            endpoint: {
                              url: 'https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}',
                              properties: Te,
                              headers: Te,
                            },
                            type: qn,
                          },
                        ],
                        type: mt,
                      },
                      {
                        error:
                          'FIPS and DualStack are enabled, but this partition does not support one or both',
                        type: Hn,
                      },
                    ],
                    type: mt,
                  },
                  {
                    conditions: $P,
                    rules: [
                      {
                        conditions: [
                          {
                            [Ie]: hs,
                            [Ne]: [HP, !0],
                          },
                        ],
                        rules: [
                          {
                            conditions: [
                              {
                                [Ie]: 'stringEquals',
                                [Ne]: [
                                  {
                                    [Ie]: Pp,
                                    [Ne]: [KP, 'name'],
                                  },
                                  'aws-us-gov',
                                ],
                              },
                            ],
                            endpoint: {
                              url: 'https://oidc.{Region}.amazonaws.com',
                              properties: Te,
                              headers: Te,
                            },
                            type: qn,
                          },
                          {
                            endpoint: {
                              url: 'https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}',
                              properties: Te,
                              headers: Te,
                            },
                            type: qn,
                          },
                        ],
                        type: mt,
                      },
                      {
                        error:
                          'FIPS is enabled but this partition does not support FIPS',
                        type: Hn,
                      },
                    ],
                    type: mt,
                  },
                  {
                    conditions: BP,
                    rules: [
                      {
                        conditions: [qP],
                        rules: [
                          {
                            endpoint: {
                              url: 'https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}',
                              properties: Te,
                              headers: Te,
                            },
                            type: qn,
                          },
                        ],
                        type: mt,
                      },
                      {
                        error:
                          'DualStack is enabled but this partition does not support DualStack',
                        type: Hn,
                      },
                    ],
                    type: mt,
                  },
                  {
                    endpoint: {
                      url: 'https://oidc.{Region}.{PartitionResult#dnsSuffix}',
                      properties: Te,
                      headers: Te,
                    },
                    type: qn,
                  },
                ],
                type: mt,
              },
            ],
            type: mt,
          },
          {
            error: 'Invalid Configuration: Missing Region',
            type: Hn,
          },
        ],
      }),
      (YP = AV)
  })
var XP,
  Bn,
  xV,
  QP,
  ZP = v(() => {
    ;(XP = E(en())), (Bn = E(Qr()))
    JP()
    ;(xV = new Bn.EndpointCache({
      size: 50,
      params: ['Endpoint', 'Region', 'UseDualStack', 'UseFIPS'],
    })),
      (QP = (e, t = {}) =>
        xV.get(e, () =>
          (0, Bn.resolveEndpoint)(YP, {
            endpointParams: e,
            logger: t.logger,
          })
        ))
    Bn.customEndpointFunctions.aws = XP.awsEndpointFunctions
  })
var eR,
  tR,
  Ac,
  xc,
  rR,
  nR = v(() => {
    oe()
    _e()
    ;(eR = E(D())), (tR = E(ur())), (Ac = E(wp())), (xc = E(Rc()))
    hp()
    ZP()
    rR = (e) => ({
      apiVersion: '2019-06-10',
      base64Decoder: e?.base64Decoder ?? Ac.fromBase64,
      base64Encoder: e?.base64Encoder ?? Ac.toBase64,
      disableHostPrefix: e?.disableHostPrefix ?? !1,
      endpointProvider: e?.endpointProvider ?? QP,
      extensions: e?.extensions ?? [],
      httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? PP,
      httpAuthSchemes: e?.httpAuthSchemes ?? [
        {
          schemeId: 'aws.auth#sigv4',
          identityProvider: (t) => t.getIdentityProvider('aws.auth#sigv4'),
          signer: new be(),
        },
        {
          schemeId: 'smithy.api#noAuth',
          identityProvider: (t) =>
            t.getIdentityProvider('smithy.api#noAuth') || (async () => ({})),
          signer: new at(),
        },
      ],
      logger: e?.logger ?? new eR.NoOpLogger(),
      serviceId: e?.serviceId ?? 'SSO OIDC',
      urlParser: e?.urlParser ?? tR.parseUrl,
      utf8Decoder: e?.utf8Decoder ?? xc.fromUtf8,
      utf8Encoder: e?.utf8Encoder ?? xc.toUtf8,
    })
  })
var Tc,
  Ht,
  oR,
  Ic,
  jt,
  Nc,
  sR,
  iR,
  aR,
  cR,
  dR,
  lR,
  uR = v(() => {
    yp()
    oe()
    ;(Tc = E(is())),
      (Ht = E(Qe())),
      (oR = E(as())),
      (Ic = E(ut())),
      (jt = E(It())),
      (Nc = E(Xt())),
      (sR = E(cs())),
      (iR = E(bn()))
    nR()
    ;(aR = E(D())),
      (cR = E(us())),
      (dR = E(D())),
      (lR = (e) => {
        ;(0, dR.emitWarningIfUnsupportedVersion)(process.version)
        let t = (0, cR.resolveDefaultsModeConfig)(e),
          r = () => t().then(aR.loadConfigsForDefaultMode),
          n = rR(e)
        tn(process.version)
        let o = { profile: e?.profile }
        return {
          ...n,
          ...e,
          runtime: 'node',
          defaultsMode: t,
          authSchemePreference:
            e?.authSchemePreference ?? (0, jt.loadConfig)($o, o),
          bodyLengthChecker: e?.bodyLengthChecker ?? sR.calculateBodyLength,
          defaultUserAgentProvider:
            e?.defaultUserAgentProvider ??
            (0, Tc.createDefaultUserAgentProvider)({
              serviceId: n.serviceId,
              clientVersion: wc.version,
            }),
          maxAttempts:
            e?.maxAttempts ??
            (0, jt.loadConfig)(Ic.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
          region:
            e?.region ??
            (0, jt.loadConfig)(Ht.NODE_REGION_CONFIG_OPTIONS, {
              ...Ht.NODE_REGION_CONFIG_FILE_OPTIONS,
              ...o,
            }),
          requestHandler: Nc.NodeHttpHandler.create(e?.requestHandler ?? r),
          retryMode:
            e?.retryMode ??
            (0, jt.loadConfig)(
              {
                ...Ic.NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () =>
                  (await r()).retryMode || iR.DEFAULT_RETRY_MODE,
              },
              e
            ),
          sha256: e?.sha256 ?? oR.Hash.bind(null, 'sha256'),
          streamCollector: e?.streamCollector ?? Nc.streamCollector,
          useDualstackEndpoint:
            e?.useDualstackEndpoint ??
            (0, jt.loadConfig)(
              Ht.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS,
              o
            ),
          useFipsEndpoint:
            e?.useFipsEndpoint ??
            (0, jt.loadConfig)(Ht.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, o),
          userAgentAppId:
            e?.userAgentAppId ??
            (0, jt.loadConfig)(Tc.NODE_APP_ID_CONFIG_OPTIONS, o),
        }
      })
  })
var pR,
  fR,
  mR = v(() => {
    ;(pR = (e) => {
      let t = e.httpAuthSchemes,
        r = e.httpAuthSchemeProvider,
        n = e.credentials
      return {
        setHttpAuthScheme(o) {
          let s = t.findIndex((i) => i.schemeId === o.schemeId)
          s === -1 ? t.push(o) : t.splice(s, 1, o)
        },
        httpAuthSchemes() {
          return t
        },
        setHttpAuthSchemeProvider(o) {
          r = o
        },
        httpAuthSchemeProvider() {
          return r
        },
        setCredentials(o) {
          n = o
        },
        credentials() {
          return n
        },
      }
    }),
      (fR = (e) => ({
        httpAuthSchemes: e.httpAuthSchemes(),
        httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
        credentials: e.credentials(),
      }))
  })
var Dc,
  kc,
  Mc,
  gR,
  hR = v(() => {
    ;(Dc = E(ps())), (kc = E(X())), (Mc = E(D()))
    mR()
    gR = (e, t) => {
      let r = Object.assign(
        (0, Dc.getAwsRegionExtensionConfiguration)(e),
        (0, Mc.getDefaultExtensionConfiguration)(e),
        (0, kc.getHttpHandlerExtensionConfiguration)(e),
        pR(e)
      )
      return (
        t.forEach((n) => n.configure(r)),
        Object.assign(
          e,
          (0, Dc.resolveAwsRegionExtensionConfiguration)(r),
          (0, Mc.resolveDefaultRuntimeConfig)(r),
          (0, kc.resolveHttpHandlerRuntimeConfig)(r),
          fR(r)
        )
      )
    }
  })
var Uc,
  _R,
  yR,
  Fc,
  vR,
  ER,
  SR,
  Lc,
  Rp,
  _s,
  Cp = v(() => {
    ;(Uc = E(To())),
      (_R = E(Io())),
      (yR = E(No())),
      (Fc = E(_n())),
      (vR = E(Qe()))
    _e()
    ;(ER = E(Jo())), (SR = E(Nt())), (Lc = E(ut())), (Rp = E(D()))
    hp()
    _p()
    uR()
    hR()
    _s = class extends Rp.Client {
      constructor(...[r]) {
        let n = lR(r || {})
        super(n)
        y(this, 'config')
        this.initConfig = n
        let o = CP(n),
          s = (0, Fc.resolveUserAgentConfig)(o),
          i = (0, Lc.resolveRetryConfig)(s),
          a = (0, vR.resolveRegionConfig)(i),
          c = (0, Uc.resolveHostHeaderConfig)(a),
          d = (0, SR.resolveEndpointConfig)(c),
          l = RP(d),
          u = gR(l, r?.extensions || [])
        ;(this.config = u),
          this.middlewareStack.use((0, Fc.getUserAgentPlugin)(this.config)),
          this.middlewareStack.use((0, Lc.getRetryPlugin)(this.config)),
          this.middlewareStack.use((0, ER.getContentLengthPlugin)(this.config)),
          this.middlewareStack.use((0, Uc.getHostHeaderPlugin)(this.config)),
          this.middlewareStack.use((0, _R.getLoggerPlugin)(this.config)),
          this.middlewareStack.use(
            (0, yR.getRecursionDetectionPlugin)(this.config)
          ),
          this.middlewareStack.use(
            ko(this.config, {
              httpAuthSchemeParametersProvider: bP,
              identityProviderConfigProvider: async (f) =>
                new er({ 'aws.auth#sigv4': f.credentials }),
            })
          ),
          this.middlewareStack.use(Mo(this.config))
      }
      destroy() {
        super.destroy()
      }
    }
  })
var wR,
  se,
  jc = v(() => {
    ;(wR = E(D())),
      (se = class e extends wR.ServiceException {
        constructor(t) {
          super(t), Object.setPrototypeOf(this, e.prototype)
        }
      })
  })
var Sr,
  ys,
  vs,
  Op,
  Ap,
  Es,
  Ss,
  ws,
  bs,
  Ps,
  Rs,
  Cs,
  Os,
  As,
  Hc = v(() => {
    Sr = E(D())
    jc()
    ;(ys = class e extends se {
      constructor(r) {
        super({ name: 'AccessDeniedException', $fault: 'client', ...r })
        y(this, 'name', 'AccessDeniedException')
        y(this, '$fault', 'client')
        y(this, 'error')
        y(this, 'error_description')
        Object.setPrototypeOf(this, e.prototype),
          (this.error = r.error),
          (this.error_description = r.error_description)
      }
    }),
      (vs = class e extends se {
        constructor(r) {
          super({
            name: 'AuthorizationPendingException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'AuthorizationPendingException')
          y(this, '$fault', 'client')
          y(this, 'error')
          y(this, 'error_description')
          Object.setPrototypeOf(this, e.prototype),
            (this.error = r.error),
            (this.error_description = r.error_description)
        }
      }),
      (Op = (e) => ({
        ...e,
        ...(e.clientSecret && { clientSecret: Sr.SENSITIVE_STRING }),
        ...(e.refreshToken && { refreshToken: Sr.SENSITIVE_STRING }),
        ...(e.codeVerifier && { codeVerifier: Sr.SENSITIVE_STRING }),
      })),
      (Ap = (e) => ({
        ...e,
        ...(e.accessToken && { accessToken: Sr.SENSITIVE_STRING }),
        ...(e.refreshToken && { refreshToken: Sr.SENSITIVE_STRING }),
        ...(e.idToken && { idToken: Sr.SENSITIVE_STRING }),
      })),
      (Es = class e extends se {
        constructor(r) {
          super({
            name: 'ExpiredTokenException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'ExpiredTokenException')
          y(this, '$fault', 'client')
          y(this, 'error')
          y(this, 'error_description')
          Object.setPrototypeOf(this, e.prototype),
            (this.error = r.error),
            (this.error_description = r.error_description)
        }
      }),
      (Ss = class e extends se {
        constructor(r) {
          super({
            name: 'InternalServerException',
            $fault: 'server',
            ...r,
          })
          y(this, 'name', 'InternalServerException')
          y(this, '$fault', 'server')
          y(this, 'error')
          y(this, 'error_description')
          Object.setPrototypeOf(this, e.prototype),
            (this.error = r.error),
            (this.error_description = r.error_description)
        }
      }),
      (ws = class e extends se {
        constructor(r) {
          super({
            name: 'InvalidClientException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'InvalidClientException')
          y(this, '$fault', 'client')
          y(this, 'error')
          y(this, 'error_description')
          Object.setPrototypeOf(this, e.prototype),
            (this.error = r.error),
            (this.error_description = r.error_description)
        }
      }),
      (bs = class e extends se {
        constructor(r) {
          super({
            name: 'InvalidGrantException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'InvalidGrantException')
          y(this, '$fault', 'client')
          y(this, 'error')
          y(this, 'error_description')
          Object.setPrototypeOf(this, e.prototype),
            (this.error = r.error),
            (this.error_description = r.error_description)
        }
      }),
      (Ps = class e extends se {
        constructor(r) {
          super({
            name: 'InvalidRequestException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'InvalidRequestException')
          y(this, '$fault', 'client')
          y(this, 'error')
          y(this, 'error_description')
          Object.setPrototypeOf(this, e.prototype),
            (this.error = r.error),
            (this.error_description = r.error_description)
        }
      }),
      (Rs = class e extends se {
        constructor(r) {
          super({
            name: 'InvalidScopeException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'InvalidScopeException')
          y(this, '$fault', 'client')
          y(this, 'error')
          y(this, 'error_description')
          Object.setPrototypeOf(this, e.prototype),
            (this.error = r.error),
            (this.error_description = r.error_description)
        }
      }),
      (Cs = class e extends se {
        constructor(r) {
          super({ name: 'SlowDownException', $fault: 'client', ...r })
          y(this, 'name', 'SlowDownException')
          y(this, '$fault', 'client')
          y(this, 'error')
          y(this, 'error_description')
          Object.setPrototypeOf(this, e.prototype),
            (this.error = r.error),
            (this.error_description = r.error_description)
        }
      }),
      (Os = class e extends se {
        constructor(r) {
          super({
            name: 'UnauthorizedClientException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'UnauthorizedClientException')
          y(this, '$fault', 'client')
          y(this, 'error')
          y(this, 'error_description')
          Object.setPrototypeOf(this, e.prototype),
            (this.error = r.error),
            (this.error_description = r.error_description)
        }
      }),
      (As = class e extends se {
        constructor(r) {
          super({
            name: 'UnsupportedGrantTypeException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'UnsupportedGrantTypeException')
          y(this, '$fault', 'client')
          y(this, 'error')
          y(this, 'error_description')
          Object.setPrototypeOf(this, e.prototype),
            (this.error = r.error),
            (this.error_description = r.error_description)
        }
      })
  })
var P,
  bR,
  PR,
  TV,
  IV,
  NV,
  DV,
  kV,
  MV,
  UV,
  FV,
  LV,
  jV,
  HV,
  qV,
  $V,
  De,
  RR = v(() => {
    oe()
    _e()
    P = E(D())
    Hc()
    jc()
    ;(bR = async (e, t) => {
      let r = Lo(e, t),
        n = { 'content-type': 'application/json' }
      r.bp('/token')
      let o
      return (
        (o = JSON.stringify(
          (0, P.take)(e, {
            clientId: [],
            clientSecret: [],
            code: [],
            codeVerifier: [],
            deviceCode: [],
            grantType: [],
            redirectUri: [],
            refreshToken: [],
            scope: (s) => (0, P._json)(s),
          })
        )),
        r.m('POST').h(n).b(o),
        r.build()
      )
    }),
      (PR = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return TV(e, t)
        let r = (0, P.map)({ $metadata: De(e) }),
          n = (0, P.expectNonNull)(
            (0, P.expectObject)(await la(e.body, t)),
            'body'
          ),
          o = (0, P.take)(n, {
            accessToken: P.expectString,
            expiresIn: P.expectInt32,
            idToken: P.expectString,
            refreshToken: P.expectString,
            tokenType: P.expectString,
          })
        return Object.assign(r, o), r
      }),
      (TV = async (e, t) => {
        let r = { ...e, body: await eu(e.body, t) },
          n = tu(e, r.body)
        switch (n) {
          case 'AccessDeniedException':
          case 'com.amazonaws.ssooidc#AccessDeniedException':
            throw await NV(r, t)
          case 'AuthorizationPendingException':
          case 'com.amazonaws.ssooidc#AuthorizationPendingException':
            throw await DV(r, t)
          case 'ExpiredTokenException':
          case 'com.amazonaws.ssooidc#ExpiredTokenException':
            throw await kV(r, t)
          case 'InternalServerException':
          case 'com.amazonaws.ssooidc#InternalServerException':
            throw await MV(r, t)
          case 'InvalidClientException':
          case 'com.amazonaws.ssooidc#InvalidClientException':
            throw await UV(r, t)
          case 'InvalidGrantException':
          case 'com.amazonaws.ssooidc#InvalidGrantException':
            throw await FV(r, t)
          case 'InvalidRequestException':
          case 'com.amazonaws.ssooidc#InvalidRequestException':
            throw await LV(r, t)
          case 'InvalidScopeException':
          case 'com.amazonaws.ssooidc#InvalidScopeException':
            throw await jV(r, t)
          case 'SlowDownException':
          case 'com.amazonaws.ssooidc#SlowDownException':
            throw await HV(r, t)
          case 'UnauthorizedClientException':
          case 'com.amazonaws.ssooidc#UnauthorizedClientException':
            throw await qV(r, t)
          case 'UnsupportedGrantTypeException':
          case 'com.amazonaws.ssooidc#UnsupportedGrantTypeException':
            throw await $V(r, t)
          default:
            let o = r.body
            return IV({ output: e, parsedBody: o, errorCode: n })
        }
      }),
      (IV = (0, P.withBaseException)(se)),
      (NV = async (e, t) => {
        let r = (0, P.map)({}),
          n = e.body,
          o = (0, P.take)(n, {
            error: P.expectString,
            error_description: P.expectString,
          })
        Object.assign(r, o)
        let s = new ys({ $metadata: De(e), ...r })
        return (0, P.decorateServiceException)(s, e.body)
      }),
      (DV = async (e, t) => {
        let r = (0, P.map)({}),
          n = e.body,
          o = (0, P.take)(n, {
            error: P.expectString,
            error_description: P.expectString,
          })
        Object.assign(r, o)
        let s = new vs({ $metadata: De(e), ...r })
        return (0, P.decorateServiceException)(s, e.body)
      }),
      (kV = async (e, t) => {
        let r = (0, P.map)({}),
          n = e.body,
          o = (0, P.take)(n, {
            error: P.expectString,
            error_description: P.expectString,
          })
        Object.assign(r, o)
        let s = new Es({ $metadata: De(e), ...r })
        return (0, P.decorateServiceException)(s, e.body)
      }),
      (MV = async (e, t) => {
        let r = (0, P.map)({}),
          n = e.body,
          o = (0, P.take)(n, {
            error: P.expectString,
            error_description: P.expectString,
          })
        Object.assign(r, o)
        let s = new Ss({ $metadata: De(e), ...r })
        return (0, P.decorateServiceException)(s, e.body)
      }),
      (UV = async (e, t) => {
        let r = (0, P.map)({}),
          n = e.body,
          o = (0, P.take)(n, {
            error: P.expectString,
            error_description: P.expectString,
          })
        Object.assign(r, o)
        let s = new ws({ $metadata: De(e), ...r })
        return (0, P.decorateServiceException)(s, e.body)
      }),
      (FV = async (e, t) => {
        let r = (0, P.map)({}),
          n = e.body,
          o = (0, P.take)(n, {
            error: P.expectString,
            error_description: P.expectString,
          })
        Object.assign(r, o)
        let s = new bs({ $metadata: De(e), ...r })
        return (0, P.decorateServiceException)(s, e.body)
      }),
      (LV = async (e, t) => {
        let r = (0, P.map)({}),
          n = e.body,
          o = (0, P.take)(n, {
            error: P.expectString,
            error_description: P.expectString,
          })
        Object.assign(r, o)
        let s = new Ps({ $metadata: De(e), ...r })
        return (0, P.decorateServiceException)(s, e.body)
      }),
      (jV = async (e, t) => {
        let r = (0, P.map)({}),
          n = e.body,
          o = (0, P.take)(n, {
            error: P.expectString,
            error_description: P.expectString,
          })
        Object.assign(r, o)
        let s = new Rs({ $metadata: De(e), ...r })
        return (0, P.decorateServiceException)(s, e.body)
      }),
      (HV = async (e, t) => {
        let r = (0, P.map)({}),
          n = e.body,
          o = (0, P.take)(n, {
            error: P.expectString,
            error_description: P.expectString,
          })
        Object.assign(r, o)
        let s = new Cs({ $metadata: De(e), ...r })
        return (0, P.decorateServiceException)(s, e.body)
      }),
      (qV = async (e, t) => {
        let r = (0, P.map)({}),
          n = e.body,
          o = (0, P.take)(n, {
            error: P.expectString,
            error_description: P.expectString,
          })
        Object.assign(r, o)
        let s = new Os({ $metadata: De(e), ...r })
        return (0, P.decorateServiceException)(s, e.body)
      }),
      ($V = async (e, t) => {
        let r = (0, P.map)({}),
          n = e.body,
          o = (0, P.take)(n, {
            error: P.expectString,
            error_description: P.expectString,
          })
        Object.assign(r, o)
        let s = new As({ $metadata: De(e), ...r })
        return (0, P.decorateServiceException)(s, e.body)
      }),
      (De = (e) => ({
        httpStatusCode: e.statusCode,
        requestId:
          e.headers['x-amzn-requestid'] ??
          e.headers['x-amzn-request-id'] ??
          e.headers['x-amz-request-id'],
        extendedRequestId: e.headers['x-amz-id-2'],
        cfId: e.headers['x-amz-cf-id'],
      }))
  })
var CR,
  OR,
  xp,
  xs,
  Tp = v(() => {
    ;(CR = E(Nt())), (OR = E(Et())), (xp = E(D()))
    _p()
    Hc()
    RR()
    xs = class extends (
      xp.Command.classBuilder()
        .ep(OP)
        .m(function (t, r, n, o) {
          return [
            (0, OR.getSerdePlugin)(n, this.serialize, this.deserialize),
            (0, CR.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
          ]
        })
        .s('AWSSSOOIDCService', 'CreateToken', {})
        .n('SSOOIDCClient', 'CreateTokenCommand')
        .f(Op, Ap)
        .ser(bR)
        .de(PR)
        .build()
    ) {}
  })
var AR,
  BV,
  qc,
  xR = v(() => {
    AR = E(D())
    Tp()
    Cp()
    ;(BV = { CreateTokenCommand: xs }), (qc = class extends _s {})
    ;(0, AR.createAggregatedClient)(BV, qc)
  })
var TR = v(() => {
  Tp()
})
var IR = v(() => {
  Hc()
})
var Ip = {}
st(Ip, {
  $Command: () => xp.Command,
  AccessDeniedException: () => ys,
  AuthorizationPendingException: () => vs,
  CreateTokenCommand: () => xs,
  CreateTokenRequestFilterSensitiveLog: () => Op,
  CreateTokenResponseFilterSensitiveLog: () => Ap,
  ExpiredTokenException: () => Es,
  InternalServerException: () => Ss,
  InvalidClientException: () => ws,
  InvalidGrantException: () => bs,
  InvalidRequestException: () => Ps,
  InvalidScopeException: () => Rs,
  SSOOIDC: () => qc,
  SSOOIDCClient: () => _s,
  SSOOIDCServiceException: () => se,
  SlowDownException: () => Cs,
  UnauthorizedClientException: () => Os,
  UnsupportedGrantTypeException: () => As,
  __Client: () => Rp.Client,
})
var Np = v(() => {
  Cp()
  xR()
  TR()
  IR()
  jc()
})
var jR = h((SJ, LR) => {
  'use strict'
  var VV = Object.create,
    Is = Object.defineProperty,
    GV = Object.getOwnPropertyDescriptor,
    zV = Object.getOwnPropertyNames,
    WV = Object.getPrototypeOf,
    KV = Object.prototype.hasOwnProperty,
    qt = (e, t) => Is(e, 'name', { value: t, configurable: !0 }),
    YV = (e, t) => {
      for (var r in t) Is(e, r, { get: t[r], enumerable: !0 })
    },
    kR = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of zV(t))
          !KV.call(e, o) &&
            o !== r &&
            Is(e, o, {
              get: () => t[o],
              enumerable: !(n = GV(t, o)) || n.enumerable,
            })
      return e
    },
    MR = (e, t, r) => (
      (r = e != null ? VV(WV(e)) : {}),
      kR(
        t || !e || !e.__esModule
          ? Is(r, 'default', { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    JV = (e) => kR(Is({}, '__esModule', { value: !0 }), e),
    UR = {}
  YV(UR, { fromSso: () => FR, fromStatic: () => n4, nodeProvider: () => o4 })
  LR.exports = JV(UR)
  var XV = 5 * 60 * 1e3,
    Dp =
      "To refresh this SSO session run 'aws sso login' with the corresponding profile.",
    QV = qt(async (e, t = {}) => {
      let { SSOOIDCClient: r } = await Promise.resolve().then(() =>
        MR((Np(), F(Ip)))
      )
      return new r(
        Object.assign({}, t.clientConfig ?? {}, {
          region: e ?? t.clientConfig?.region,
          logger: t.clientConfig?.logger ?? t.parentClientConfig?.logger,
        })
      )
    }, 'getSsoOidcClient'),
    ZV = qt(async (e, t, r = {}) => {
      let { CreateTokenCommand: n } = await Promise.resolve().then(() =>
        MR((Np(), F(Ip)))
      )
      return (await QV(t, r)).send(
        new n({
          clientId: e.clientId,
          clientSecret: e.clientSecret,
          refreshToken: e.refreshToken,
          grantType: 'refresh_token',
        })
      )
    }, 'getNewSsoOidcToken'),
    He = fe(),
    NR = qt((e) => {
      if (e.expiration && e.expiration.getTime() < Date.now())
        throw new He.TokenProviderError(`Token is expired. ${Dp}`, !1)
    }, 'validateTokenExpiry'),
    wr = qt((e, t, r = !1) => {
      if (typeof t > 'u')
        throw new He.TokenProviderError(
          `Value not present for '${e}' in SSO Token${r ? '. Cannot refresh' : ''}. ${Dp}`,
          !1
        )
    }, 'validateTokenKey'),
    Ts = Tt(),
    e4 = require('fs'),
    { writeFile: t4 } = e4.promises,
    r4 = qt((e, t) => {
      let r = (0, Ts.getSSOTokenFilepath)(e),
        n = JSON.stringify(t, null, 2)
      return t4(r, n)
    }, 'writeSSOTokenToFile'),
    DR = new Date(0),
    FR = qt(
      (e = {}) =>
        async ({ callerClientConfig: t } = {}) => {
          let r = {
            ...e,
            parentClientConfig: { ...t, ...e.parentClientConfig },
          }
          r.logger?.debug('@aws-sdk/token-providers - fromSso')
          let n = await (0, Ts.parseKnownFiles)(r),
            o = (0, Ts.getProfileName)({
              profile: r.profile ?? t?.profile,
            }),
            s = n[o]
          if (s) {
            if (!s.sso_session)
              throw new He.TokenProviderError(
                `Profile '${o}' is missing required property 'sso_session'.`
              )
          } else
            throw new He.TokenProviderError(
              `Profile '${o}' could not be found in shared credentials file.`,
              !1
            )
          let i = s.sso_session,
            c = (await (0, Ts.loadSsoSessionData)(r))[i]
          if (!c)
            throw new He.TokenProviderError(
              `Sso session '${i}' could not be found in shared credentials file.`,
              !1
            )
          for (let w of ['sso_start_url', 'sso_region'])
            if (!c[w])
              throw new He.TokenProviderError(
                `Sso session '${i}' is missing required property '${w}'.`,
                !1
              )
          let d = c.sso_start_url,
            l = c.sso_region,
            u
          try {
            u = await (0, Ts.getSSOTokenFromFile)(i)
          } catch {
            throw new He.TokenProviderError(
              `The SSO session token associated with profile=${o} was not found or is invalid. ${Dp}`,
              !1
            )
          }
          wr('accessToken', u.accessToken), wr('expiresAt', u.expiresAt)
          let { accessToken: f, expiresAt: g } = u,
            _ = { token: f, expiration: new Date(g) }
          if (_.expiration.getTime() - Date.now() > XV) return _
          if (Date.now() - DR.getTime() < 30 * 1e3) return NR(_), _
          wr('clientId', u.clientId, !0),
            wr('clientSecret', u.clientSecret, !0),
            wr('refreshToken', u.refreshToken, !0)
          try {
            DR.setTime(Date.now())
            let w = await ZV(u, l, r)
            wr('accessToken', w.accessToken), wr('expiresIn', w.expiresIn)
            let S = new Date(Date.now() + w.expiresIn * 1e3)
            try {
              await r4(i, {
                ...u,
                accessToken: w.accessToken,
                expiresAt: S.toISOString(),
                refreshToken: w.refreshToken,
              })
            } catch {}
            return { token: w.accessToken, expiration: S }
          } catch {
            return NR(_), _
          }
        },
      'fromSso'
    ),
    n4 = qt(
      ({ token: e, logger: t }) =>
        async () => {
          if (
            (t?.debug('@aws-sdk/token-providers - fromStatic'), !e || !e.token)
          )
            throw new He.TokenProviderError(
              'Please pass a valid token to fromStatic',
              !1
            )
          return e
        },
      'fromStatic'
    ),
    o4 = qt(
      (e = {}) =>
        (0, He.memoize)(
          (0, He.chain)(FR(e), async () => {
            throw new He.TokenProviderError(
              'Could not load token from any providers',
              !1
            )
          }),
          (t) =>
            t.expiration !== void 0 &&
            t.expiration.getTime() - Date.now() < 3e5,
          (t) => t.expiration !== void 0
        ),
      'nodeProvider'
    )
})
var Mp = h((wJ, KR) => {
  'use strict'
  var Bc = Object.defineProperty,
    s4 = Object.getOwnPropertyDescriptor,
    $R = Object.getOwnPropertyNames,
    i4 = Object.prototype.hasOwnProperty,
    Vc = (e, t) => Bc(e, 'name', { value: t, configurable: !0 }),
    a4 = (e, t) =>
      function () {
        return e && (t = (0, e[$R(e)[0]])((e = 0))), t
      },
    BR = (e, t) => {
      for (var r in t) Bc(e, r, { get: t[r], enumerable: !0 })
    },
    c4 = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of $R(t))
          !i4.call(e, o) &&
            o !== r &&
            Bc(e, o, {
              get: () => t[o],
              enumerable: !(n = s4(t, o)) || n.enumerable,
            })
      return e
    },
    d4 = (e) => c4(Bc({}, '__esModule', { value: !0 }), e),
    VR = {}
  BR(VR, {
    GetRoleCredentialsCommand: () => kp.GetRoleCredentialsCommand,
    SSOClient: () => kp.SSOClient,
  })
  var kp,
    l4 = a4({
      'src/loadSso.ts'() {
        'use strict'
        kp = wP()
      },
    }),
    GR = {}
  BR(GR, {
    fromSSO: () => p4,
    isSsoProfile: () => zR,
    validateSsoProfile: () => WR,
  })
  KR.exports = d4(GR)
  var zR = Vc(
      (e) =>
        e &&
        (typeof e.sso_start_url == 'string' ||
          typeof e.sso_account_id == 'string' ||
          typeof e.sso_session == 'string' ||
          typeof e.sso_region == 'string' ||
          typeof e.sso_role_name == 'string'),
      'isSsoProfile'
    ),
    HR = (We(), F(tr)),
    u4 = jR(),
    qe = fe(),
    $c = Tt(),
    Ns = !1,
    qR = Vc(
      async ({
        ssoStartUrl: e,
        ssoSession: t,
        ssoAccountId: r,
        ssoRegion: n,
        ssoRoleName: o,
        ssoClient: s,
        clientConfig: i,
        parentClientConfig: a,
        profile: c,
        logger: d,
      }) => {
        let l,
          u =
            'To refresh this SSO session run aws sso login with the corresponding profile.'
        if (t)
          try {
            let L = await (0, u4.fromSso)({ profile: c })()
            l = {
              accessToken: L.token,
              expiresAt: new Date(L.expiration).toISOString(),
            }
          } catch (L) {
            throw new qe.CredentialsProviderError(L.message, {
              tryNextLink: Ns,
              logger: d,
            })
          }
        else
          try {
            l = await (0, $c.getSSOTokenFromFile)(e)
          } catch {
            throw new qe.CredentialsProviderError(
              `The SSO session associated with this profile is invalid. ${u}`,
              { tryNextLink: Ns, logger: d }
            )
          }
        if (new Date(l.expiresAt).getTime() - Date.now() <= 0)
          throw new qe.CredentialsProviderError(
            `The SSO session associated with this profile has expired. ${u}`,
            { tryNextLink: Ns, logger: d }
          )
        let { accessToken: f } = l,
          { SSOClient: g, GetRoleCredentialsCommand: _ } =
            await Promise.resolve().then(() => (l4(), VR)),
          w =
            s ||
            new g(
              Object.assign({}, i ?? {}, {
                logger: i?.logger ?? a?.logger,
                region: i?.region ?? n,
              })
            ),
          S
        try {
          S = await w.send(new _({ accountId: r, roleName: o, accessToken: f }))
        } catch (L) {
          throw new qe.CredentialsProviderError(L, {
            tryNextLink: Ns,
            logger: d,
          })
        }
        let {
          roleCredentials: {
            accessKeyId: R,
            secretAccessKey: x,
            sessionToken: O,
            expiration: T,
            credentialScope: le,
            accountId: $e,
          } = {},
        } = S
        if (!R || !x || !O || !T)
          throw new qe.CredentialsProviderError(
            'SSO returns an invalid temporary credential.',
            { tryNextLink: Ns, logger: d }
          )
        let ue = {
          accessKeyId: R,
          secretAccessKey: x,
          sessionToken: O,
          expiration: new Date(T),
          ...(le && { credentialScope: le }),
          ...($e && { accountId: $e }),
        }
        return (
          t
            ? (0, HR.setCredentialFeature)(ue, 'CREDENTIALS_SSO', 's')
            : (0, HR.setCredentialFeature)(ue, 'CREDENTIALS_SSO_LEGACY', 'u'),
          ue
        )
      },
      'resolveSSOCredentials'
    ),
    WR = Vc((e, t) => {
      let {
        sso_start_url: r,
        sso_account_id: n,
        sso_region: o,
        sso_role_name: s,
      } = e
      if (!r || !n || !o || !s)
        throw new qe.CredentialsProviderError(
          `Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(e).join(', ')}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`,
          { tryNextLink: !1, logger: t }
        )
      return e
    }, 'validateSsoProfile'),
    p4 = Vc(
      (e = {}) =>
        async ({ callerClientConfig: t } = {}) => {
          e.logger?.debug('@aws-sdk/credential-provider-sso - fromSSO')
          let {
              ssoStartUrl: r,
              ssoAccountId: n,
              ssoRegion: o,
              ssoRoleName: s,
              ssoSession: i,
            } = e,
            { ssoClient: a } = e,
            c = (0, $c.getProfileName)({
              profile: e.profile ?? t?.profile,
            })
          if (!r && !n && !o && !s && !i) {
            let l = (await (0, $c.parseKnownFiles)(e))[c]
            if (!l)
              throw new qe.CredentialsProviderError(
                `Profile ${c} was not found.`,
                { logger: e.logger }
              )
            if (!zR(l))
              throw new qe.CredentialsProviderError(
                `Profile ${c} is not configured with SSO credentials.`,
                { logger: e.logger }
              )
            if (l?.sso_session) {
              let R = (await (0, $c.loadSsoSessionData)(e))[l.sso_session],
                x = ` configurations in profile ${c} and sso-session ${l.sso_session}`
              if (o && o !== R.sso_region)
                throw new qe.CredentialsProviderError(
                  'Conflicting SSO region' + x,
                  { tryNextLink: !1, logger: e.logger }
                )
              if (r && r !== R.sso_start_url)
                throw new qe.CredentialsProviderError(
                  'Conflicting SSO start_url' + x,
                  { tryNextLink: !1, logger: e.logger }
                )
              ;(l.sso_region = R.sso_region),
                (l.sso_start_url = R.sso_start_url)
            }
            let {
              sso_start_url: u,
              sso_account_id: f,
              sso_region: g,
              sso_role_name: _,
              sso_session: w,
            } = WR(l, e.logger)
            return qR({
              ssoStartUrl: u,
              ssoSession: w,
              ssoAccountId: f,
              ssoRegion: g,
              ssoRoleName: _,
              ssoClient: a,
              clientConfig: e.clientConfig,
              parentClientConfig: e.parentClientConfig,
              profile: c,
            })
          } else {
            if (!r || !n || !o || !s)
              throw new qe.CredentialsProviderError(
                'Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"',
                { tryNextLink: !1, logger: e.logger }
              )
            return qR({
              ssoStartUrl: r,
              ssoSession: i,
              ssoAccountId: n,
              ssoRegion: o,
              ssoRoleName: s,
              ssoClient: a,
              clientConfig: e.clientConfig,
              parentClientConfig: e.parentClientConfig,
              profile: c,
            })
          }
        },
      'fromSSO'
    )
})
function f4(e) {
  return {
    schemeId: 'aws.auth#sigv4',
    signingProperties: { name: 'sts', region: e.region },
    propertiesExtractor: (t, r) => ({
      signingProperties: { config: t, context: r },
    }),
  }
}
function m4(e) {
  return { schemeId: 'smithy.api#noAuth' }
}
var Ds,
  YR,
  JR,
  g4,
  XR,
  Up = v(() => {
    oe()
    Ds = E(Ue())
    ks()
    YR = async (e, t, r) => ({
      operation: (0, Ds.getSmithyContext)(t).operation,
      region:
        (await (0, Ds.normalizeProvider)(e.region)()) ||
        (() => {
          throw new Error(
            'expected `region` to be configured for `aws.auth#sigv4`'
          )
        })(),
    })
    ;(JR = (e) => {
      let t = []
      switch (e.operation) {
        case 'AssumeRoleWithWebIdentity': {
          t.push(m4(e))
          break
        }
        default:
          t.push(f4(e))
      }
      return t
    }),
      (g4 = (e) => Object.assign(e, { stsClientCtor: tt })),
      (XR = (e) => {
        let t = g4(e),
          r = dn(t)
        return Object.assign(r, {
          authSchemePreference: (0, Ds.normalizeProvider)(
            e.authSchemePreference ?? []
          ),
        })
      })
  })
var QR,
  Gc,
  zc = v(() => {
    ;(QR = (e) =>
      Object.assign(e, {
        useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
        useFipsEndpoint: e.useFipsEndpoint ?? !1,
        useGlobalEndpoint: e.useGlobalEndpoint ?? !1,
        defaultSigningName: 'sts',
      })),
      (Gc = {
        UseGlobalEndpoint: {
          type: 'builtInParams',
          name: 'useGlobalEndpoint',
        },
        UseFIPS: { type: 'builtInParams', name: 'useFipsEndpoint' },
        Endpoint: { type: 'builtInParams', name: 'endpoint' },
        Region: { type: 'builtInParams', name: 'region' },
        UseDualStack: {
          type: 'builtInParams',
          name: 'useDualstackEndpoint',
        },
      })
  })
var dC,
  A,
  M,
  U,
  Bt,
  $t,
  ce,
  lC,
  uC,
  pC,
  $,
  ZR,
  rt,
  Vn,
  Lp,
  eC,
  Fp,
  fC,
  tC,
  de,
  rC,
  mC,
  gC,
  pe,
  Pe,
  nC,
  hC,
  _C,
  oC,
  yC,
  sC,
  iC,
  aC,
  cC,
  h4,
  vC,
  EC = v(() => {
    ;(dC = 'required'),
      (A = 'type'),
      (M = 'fn'),
      (U = 'argv'),
      (Bt = 'ref'),
      ($t = 'booleanEquals'),
      (ce = 'stringEquals'),
      (lC = 'sigv4'),
      (uC = 'sts'),
      (pC = 'us-east-1'),
      ($ = 'endpoint'),
      (ZR = 'https://sts.{Region}.{PartitionResult#dnsSuffix}'),
      (rt = 'tree'),
      (Vn = 'error'),
      (Lp = 'getAttr'),
      (eC = { [dC]: !1, [A]: 'String' }),
      (Fp = { [dC]: !0, default: !1, [A]: 'Boolean' }),
      (fC = { [Bt]: 'Endpoint' }),
      (tC = { [M]: 'isSet', [U]: [{ [Bt]: 'Region' }] }),
      (de = { [Bt]: 'Region' }),
      (rC = {
        [M]: 'aws.partition',
        [U]: [de],
        assign: 'PartitionResult',
      }),
      (mC = { [Bt]: 'UseFIPS' }),
      (gC = { [Bt]: 'UseDualStack' }),
      (pe = {
        url: 'https://sts.amazonaws.com',
        properties: {
          authSchemes: [{ name: lC, signingName: uC, signingRegion: pC }],
        },
        headers: {},
      }),
      (Pe = {}),
      (nC = {
        conditions: [{ [M]: ce, [U]: [de, 'aws-global'] }],
        [$]: pe,
        [A]: $,
      }),
      (hC = { [M]: $t, [U]: [mC, !0] }),
      (_C = { [M]: $t, [U]: [gC, !0] }),
      (oC = {
        [M]: Lp,
        [U]: [{ [Bt]: 'PartitionResult' }, 'supportsFIPS'],
      }),
      (yC = { [Bt]: 'PartitionResult' }),
      (sC = {
        [M]: $t,
        [U]: [!0, { [M]: Lp, [U]: [yC, 'supportsDualStack'] }],
      }),
      (iC = [{ [M]: 'isSet', [U]: [fC] }]),
      (aC = [hC]),
      (cC = [_C]),
      (h4 = {
        version: '1.0',
        parameters: {
          Region: eC,
          UseDualStack: Fp,
          UseFIPS: Fp,
          Endpoint: eC,
          UseGlobalEndpoint: Fp,
        },
        rules: [
          {
            conditions: [
              {
                [M]: $t,
                [U]: [{ [Bt]: 'UseGlobalEndpoint' }, !0],
              },
              { [M]: 'not', [U]: iC },
              tC,
              rC,
              { [M]: $t, [U]: [mC, !1] },
              { [M]: $t, [U]: [gC, !1] },
            ],
            rules: [
              {
                conditions: [{ [M]: ce, [U]: [de, 'ap-northeast-1'] }],
                endpoint: pe,
                [A]: $,
              },
              {
                conditions: [{ [M]: ce, [U]: [de, 'ap-south-1'] }],
                endpoint: pe,
                [A]: $,
              },
              {
                conditions: [{ [M]: ce, [U]: [de, 'ap-southeast-1'] }],
                endpoint: pe,
                [A]: $,
              },
              {
                conditions: [{ [M]: ce, [U]: [de, 'ap-southeast-2'] }],
                endpoint: pe,
                [A]: $,
              },
              nC,
              {
                conditions: [{ [M]: ce, [U]: [de, 'ca-central-1'] }],
                endpoint: pe,
                [A]: $,
              },
              {
                conditions: [{ [M]: ce, [U]: [de, 'eu-central-1'] }],
                endpoint: pe,
                [A]: $,
              },
              {
                conditions: [{ [M]: ce, [U]: [de, 'eu-north-1'] }],
                endpoint: pe,
                [A]: $,
              },
              {
                conditions: [{ [M]: ce, [U]: [de, 'eu-west-1'] }],
                endpoint: pe,
                [A]: $,
              },
              {
                conditions: [{ [M]: ce, [U]: [de, 'eu-west-2'] }],
                endpoint: pe,
                [A]: $,
              },
              {
                conditions: [{ [M]: ce, [U]: [de, 'eu-west-3'] }],
                endpoint: pe,
                [A]: $,
              },
              {
                conditions: [{ [M]: ce, [U]: [de, 'sa-east-1'] }],
                endpoint: pe,
                [A]: $,
              },
              {
                conditions: [{ [M]: ce, [U]: [de, pC] }],
                endpoint: pe,
                [A]: $,
              },
              {
                conditions: [{ [M]: ce, [U]: [de, 'us-east-2'] }],
                endpoint: pe,
                [A]: $,
              },
              {
                conditions: [{ [M]: ce, [U]: [de, 'us-west-1'] }],
                endpoint: pe,
                [A]: $,
              },
              {
                conditions: [{ [M]: ce, [U]: [de, 'us-west-2'] }],
                endpoint: pe,
                [A]: $,
              },
              {
                endpoint: {
                  url: ZR,
                  properties: {
                    authSchemes: [
                      {
                        name: lC,
                        signingName: uC,
                        signingRegion: '{Region}',
                      },
                    ],
                  },
                  headers: Pe,
                },
                [A]: $,
              },
            ],
            [A]: rt,
          },
          {
            conditions: iC,
            rules: [
              {
                conditions: aC,
                error:
                  'Invalid Configuration: FIPS and custom endpoint are not supported',
                [A]: Vn,
              },
              {
                conditions: cC,
                error:
                  'Invalid Configuration: Dualstack and custom endpoint are not supported',
                [A]: Vn,
              },
              {
                endpoint: {
                  url: fC,
                  properties: Pe,
                  headers: Pe,
                },
                [A]: $,
              },
            ],
            [A]: rt,
          },
          {
            conditions: [tC],
            rules: [
              {
                conditions: [rC],
                rules: [
                  {
                    conditions: [hC, _C],
                    rules: [
                      {
                        conditions: [{ [M]: $t, [U]: [!0, oC] }, sC],
                        rules: [
                          {
                            endpoint: {
                              url: 'https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}',
                              properties: Pe,
                              headers: Pe,
                            },
                            [A]: $,
                          },
                        ],
                        [A]: rt,
                      },
                      {
                        error:
                          'FIPS and DualStack are enabled, but this partition does not support one or both',
                        [A]: Vn,
                      },
                    ],
                    [A]: rt,
                  },
                  {
                    conditions: aC,
                    rules: [
                      {
                        conditions: [{ [M]: $t, [U]: [oC, !0] }],
                        rules: [
                          {
                            conditions: [
                              {
                                [M]: ce,
                                [U]: [
                                  {
                                    [M]: Lp,
                                    [U]: [yC, 'name'],
                                  },
                                  'aws-us-gov',
                                ],
                              },
                            ],
                            endpoint: {
                              url: 'https://sts.{Region}.amazonaws.com',
                              properties: Pe,
                              headers: Pe,
                            },
                            [A]: $,
                          },
                          {
                            endpoint: {
                              url: 'https://sts-fips.{Region}.{PartitionResult#dnsSuffix}',
                              properties: Pe,
                              headers: Pe,
                            },
                            [A]: $,
                          },
                        ],
                        [A]: rt,
                      },
                      {
                        error:
                          'FIPS is enabled but this partition does not support FIPS',
                        [A]: Vn,
                      },
                    ],
                    [A]: rt,
                  },
                  {
                    conditions: cC,
                    rules: [
                      {
                        conditions: [sC],
                        rules: [
                          {
                            endpoint: {
                              url: 'https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}',
                              properties: Pe,
                              headers: Pe,
                            },
                            [A]: $,
                          },
                        ],
                        [A]: rt,
                      },
                      {
                        error:
                          'DualStack is enabled but this partition does not support DualStack',
                        [A]: Vn,
                      },
                    ],
                    [A]: rt,
                  },
                  nC,
                  {
                    endpoint: {
                      url: ZR,
                      properties: Pe,
                      headers: Pe,
                    },
                    [A]: $,
                  },
                ],
                [A]: rt,
              },
            ],
            [A]: rt,
          },
          { error: 'Invalid Configuration: Missing Region', [A]: Vn },
        ],
      }),
      (vC = h4)
  })
var SC,
  Gn,
  _4,
  wC,
  bC = v(() => {
    ;(SC = E(en())), (Gn = E(Qr()))
    EC()
    ;(_4 = new Gn.EndpointCache({
      size: 50,
      params: [
        'Endpoint',
        'Region',
        'UseDualStack',
        'UseFIPS',
        'UseGlobalEndpoint',
      ],
    })),
      (wC = (e, t = {}) =>
        _4.get(e, () =>
          (0, Gn.resolveEndpoint)(vC, {
            endpointParams: e,
            logger: t.logger,
          })
        ))
    Gn.customEndpointFunctions.aws = SC.awsEndpointFunctions
  })
var PC,
  RC,
  Wc,
  Kc,
  CC,
  OC = v(() => {
    oe()
    _e()
    ;(PC = E(D())), (RC = E(ur())), (Wc = E(wp())), (Kc = E(Rc()))
    Up()
    bC()
    CC = (e) => ({
      apiVersion: '2011-06-15',
      base64Decoder: e?.base64Decoder ?? Wc.fromBase64,
      base64Encoder: e?.base64Encoder ?? Wc.toBase64,
      disableHostPrefix: e?.disableHostPrefix ?? !1,
      endpointProvider: e?.endpointProvider ?? wC,
      extensions: e?.extensions ?? [],
      httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? JR,
      httpAuthSchemes: e?.httpAuthSchemes ?? [
        {
          schemeId: 'aws.auth#sigv4',
          identityProvider: (t) => t.getIdentityProvider('aws.auth#sigv4'),
          signer: new be(),
        },
        {
          schemeId: 'smithy.api#noAuth',
          identityProvider: (t) =>
            t.getIdentityProvider('smithy.api#noAuth') || (async () => ({})),
          signer: new at(),
        },
      ],
      logger: e?.logger ?? new PC.NoOpLogger(),
      serviceId: e?.serviceId ?? 'STS',
      urlParser: e?.urlParser ?? RC.parseUrl,
      utf8Decoder: e?.utf8Decoder ?? Kc.fromUtf8,
      utf8Encoder: e?.utf8Encoder ?? Kc.toUtf8,
    })
  })
var Yc,
  Gt,
  AC,
  Jc,
  Vt,
  Xc,
  xC,
  TC,
  IC,
  NC,
  DC,
  kC,
  MC = v(() => {
    yp()
    oe()
    ;(Yc = E(is())), (Gt = E(Qe()))
    _e()
    ;(AC = E(as())),
      (Jc = E(ut())),
      (Vt = E(It())),
      (Xc = E(Xt())),
      (xC = E(cs())),
      (TC = E(bn()))
    OC()
    ;(IC = E(D())),
      (NC = E(us())),
      (DC = E(D())),
      (kC = (e) => {
        ;(0, DC.emitWarningIfUnsupportedVersion)(process.version)
        let t = (0, NC.resolveDefaultsModeConfig)(e),
          r = () => t().then(IC.loadConfigsForDefaultMode),
          n = CC(e)
        tn(process.version)
        let o = { profile: e?.profile }
        return {
          ...n,
          ...e,
          runtime: 'node',
          defaultsMode: t,
          authSchemePreference:
            e?.authSchemePreference ?? (0, Vt.loadConfig)($o, o),
          bodyLengthChecker: e?.bodyLengthChecker ?? xC.calculateBodyLength,
          defaultUserAgentProvider:
            e?.defaultUserAgentProvider ??
            (0, Yc.createDefaultUserAgentProvider)({
              serviceId: n.serviceId,
              clientVersion: wc.version,
            }),
          httpAuthSchemes: e?.httpAuthSchemes ?? [
            {
              schemeId: 'aws.auth#sigv4',
              identityProvider: (s) =>
                s.getIdentityProvider('aws.auth#sigv4') ||
                (async (i) =>
                  await e.credentialDefaultProvider(i?.__config || {})()),
              signer: new be(),
            },
            {
              schemeId: 'smithy.api#noAuth',
              identityProvider: (s) =>
                s.getIdentityProvider('smithy.api#noAuth') ||
                (async () => ({})),
              signer: new at(),
            },
          ],
          maxAttempts:
            e?.maxAttempts ??
            (0, Vt.loadConfig)(Jc.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
          region:
            e?.region ??
            (0, Vt.loadConfig)(Gt.NODE_REGION_CONFIG_OPTIONS, {
              ...Gt.NODE_REGION_CONFIG_FILE_OPTIONS,
              ...o,
            }),
          requestHandler: Xc.NodeHttpHandler.create(e?.requestHandler ?? r),
          retryMode:
            e?.retryMode ??
            (0, Vt.loadConfig)(
              {
                ...Jc.NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () =>
                  (await r()).retryMode || TC.DEFAULT_RETRY_MODE,
              },
              e
            ),
          sha256: e?.sha256 ?? AC.Hash.bind(null, 'sha256'),
          streamCollector: e?.streamCollector ?? Xc.streamCollector,
          useDualstackEndpoint:
            e?.useDualstackEndpoint ??
            (0, Vt.loadConfig)(
              Gt.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS,
              o
            ),
          useFipsEndpoint:
            e?.useFipsEndpoint ??
            (0, Vt.loadConfig)(Gt.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, o),
          userAgentAppId:
            e?.userAgentAppId ??
            (0, Vt.loadConfig)(Yc.NODE_APP_ID_CONFIG_OPTIONS, o),
        }
      })
  })
var UC,
  FC,
  LC = v(() => {
    ;(UC = (e) => {
      let t = e.httpAuthSchemes,
        r = e.httpAuthSchemeProvider,
        n = e.credentials
      return {
        setHttpAuthScheme(o) {
          let s = t.findIndex((i) => i.schemeId === o.schemeId)
          s === -1 ? t.push(o) : t.splice(s, 1, o)
        },
        httpAuthSchemes() {
          return t
        },
        setHttpAuthSchemeProvider(o) {
          r = o
        },
        httpAuthSchemeProvider() {
          return r
        },
        setCredentials(o) {
          n = o
        },
        credentials() {
          return n
        },
      }
    }),
      (FC = (e) => ({
        httpAuthSchemes: e.httpAuthSchemes(),
        httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
        credentials: e.credentials(),
      }))
  })
var Qc,
  Zc,
  ed,
  jC,
  HC = v(() => {
    ;(Qc = E(ps())), (Zc = E(X())), (ed = E(D()))
    LC()
    jC = (e, t) => {
      let r = Object.assign(
        (0, Qc.getAwsRegionExtensionConfiguration)(e),
        (0, ed.getDefaultExtensionConfiguration)(e),
        (0, Zc.getHttpHandlerExtensionConfiguration)(e),
        UC(e)
      )
      return (
        t.forEach((n) => n.configure(r)),
        Object.assign(
          e,
          (0, Qc.resolveAwsRegionExtensionConfiguration)(r),
          (0, ed.resolveDefaultRuntimeConfig)(r),
          (0, Zc.resolveHttpHandlerRuntimeConfig)(r),
          FC(r)
        )
      )
    }
  })
var td,
  qC,
  $C,
  rd,
  BC,
  VC,
  GC,
  nd,
  jp,
  tt,
  ks = v(() => {
    ;(td = E(To())),
      (qC = E(Io())),
      ($C = E(No())),
      (rd = E(_n())),
      (BC = E(Qe()))
    _e()
    ;(VC = E(Jo())), (GC = E(Nt())), (nd = E(ut())), (jp = E(D()))
    Up()
    zc()
    MC()
    HC()
    tt = class extends jp.Client {
      constructor(...[r]) {
        let n = kC(r || {})
        super(n)
        y(this, 'config')
        this.initConfig = n
        let o = QR(n),
          s = (0, rd.resolveUserAgentConfig)(o),
          i = (0, nd.resolveRetryConfig)(s),
          a = (0, BC.resolveRegionConfig)(i),
          c = (0, td.resolveHostHeaderConfig)(a),
          d = (0, GC.resolveEndpointConfig)(c),
          l = XR(d),
          u = jC(l, r?.extensions || [])
        ;(this.config = u),
          this.middlewareStack.use((0, rd.getUserAgentPlugin)(this.config)),
          this.middlewareStack.use((0, nd.getRetryPlugin)(this.config)),
          this.middlewareStack.use((0, VC.getContentLengthPlugin)(this.config)),
          this.middlewareStack.use((0, td.getHostHeaderPlugin)(this.config)),
          this.middlewareStack.use((0, qC.getLoggerPlugin)(this.config)),
          this.middlewareStack.use(
            (0, $C.getRecursionDetectionPlugin)(this.config)
          ),
          this.middlewareStack.use(
            ko(this.config, {
              httpAuthSchemeParametersProvider: YR,
              identityProviderConfigProvider: async (f) =>
                new er({ 'aws.auth#sigv4': f.credentials }),
            })
          ),
          this.middlewareStack.use(Mo(this.config))
      }
      destroy() {
        super.destroy()
      }
    }
  })
var zC,
  ve,
  od = v(() => {
    ;(zC = E(D())),
      (ve = class e extends zC.ServiceException {
        constructor(t) {
          super(t), Object.setPrototypeOf(this, e.prototype)
        }
      })
  })
var Hp,
  qp,
  $p,
  Ms,
  Us,
  Fs,
  Ls,
  js,
  Hs,
  Bp,
  Vp,
  qs,
  $s = v(() => {
    Hp = E(D())
    od()
    ;(qp = (e) => ({
      ...e,
      ...(e.SecretAccessKey && { SecretAccessKey: Hp.SENSITIVE_STRING }),
    })),
      ($p = (e) => ({
        ...e,
        ...(e.Credentials && { Credentials: qp(e.Credentials) }),
      })),
      (Ms = class e extends ve {
        constructor(r) {
          super({
            name: 'ExpiredTokenException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'ExpiredTokenException')
          y(this, '$fault', 'client')
          Object.setPrototypeOf(this, e.prototype)
        }
      }),
      (Us = class e extends ve {
        constructor(r) {
          super({
            name: 'MalformedPolicyDocumentException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'MalformedPolicyDocumentException')
          y(this, '$fault', 'client')
          Object.setPrototypeOf(this, e.prototype)
        }
      }),
      (Fs = class e extends ve {
        constructor(r) {
          super({
            name: 'PackedPolicyTooLargeException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'PackedPolicyTooLargeException')
          y(this, '$fault', 'client')
          Object.setPrototypeOf(this, e.prototype)
        }
      }),
      (Ls = class e extends ve {
        constructor(r) {
          super({
            name: 'RegionDisabledException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'RegionDisabledException')
          y(this, '$fault', 'client')
          Object.setPrototypeOf(this, e.prototype)
        }
      }),
      (js = class e extends ve {
        constructor(r) {
          super({
            name: 'IDPRejectedClaimException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'IDPRejectedClaimException')
          y(this, '$fault', 'client')
          Object.setPrototypeOf(this, e.prototype)
        }
      }),
      (Hs = class e extends ve {
        constructor(r) {
          super({
            name: 'InvalidIdentityTokenException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'InvalidIdentityTokenException')
          y(this, '$fault', 'client')
          Object.setPrototypeOf(this, e.prototype)
        }
      }),
      (Bp = (e) => ({
        ...e,
        ...(e.WebIdentityToken && {
          WebIdentityToken: Hp.SENSITIVE_STRING,
        }),
      })),
      (Vp = (e) => ({
        ...e,
        ...(e.Credentials && { Credentials: qp(e.Credentials) }),
      })),
      (qs = class e extends ve {
        constructor(r) {
          super({
            name: 'IDPCommunicationErrorException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'IDPCommunicationErrorException')
          y(this, '$fault', 'client')
          Object.setPrototypeOf(this, e.prototype)
        }
      })
  })
var WC,
  I,
  KC,
  YC,
  JC,
  XC,
  QC,
  y4,
  v4,
  E4,
  S4,
  w4,
  b4,
  P4,
  R4,
  C4,
  ZC,
  O4,
  A4,
  x4,
  T4,
  I4,
  N4,
  eO,
  D4,
  k4,
  tO,
  M4,
  U4,
  F4,
  L4,
  j4,
  H4,
  q4,
  ht,
  $4,
  rO,
  nO,
  oO,
  sO,
  Gp,
  B4,
  zp,
  zn,
  V4,
  Wp,
  Kp,
  Wn,
  Yp,
  Kn,
  Jp,
  Xp,
  Qp,
  Yn,
  Jn,
  Zp,
  ef,
  tf,
  Xn,
  rf,
  Qn,
  Zn,
  nf,
  of,
  gt,
  sf,
  af,
  cf,
  df,
  lf,
  iO,
  uf,
  pf,
  ff,
  Z,
  aO,
  G4,
  mf = v(() => {
    oe()
    ;(WC = E(X())), (I = E(D()))
    $s()
    od()
    ;(KC = async (e, t) => {
      let r = nO,
        n
      return (
        (n = aO({ ...R4(e, t), [sO]: B4, [iO]: oO })), rO(t, r, '/', void 0, n)
      )
    }),
      (YC = async (e, t) => {
        let r = nO,
          n
        return (
          (n = aO({ ...C4(e, t), [sO]: V4, [iO]: oO })),
          rO(t, r, '/', void 0, n)
        )
      }),
      (JC = async (e, t) => {
        if (e.statusCode >= 300) return QC(e, t)
        let r = await Yo(e.body, t),
          n = {}
        return (n = D4(r.AssumeRoleResult, t)), { $metadata: ht(e), ...n }
      }),
      (XC = async (e, t) => {
        if (e.statusCode >= 300) return QC(e, t)
        let r = await Yo(e.body, t),
          n = {}
        return (
          (n = k4(r.AssumeRoleWithWebIdentityResult, t)),
          { $metadata: ht(e), ...n }
        )
      }),
      (QC = async (e, t) => {
        let r = { ...e, body: await lu(e.body, t) },
          n = G4(e, r.body)
        switch (n) {
          case 'ExpiredTokenException':
          case 'com.amazonaws.sts#ExpiredTokenException':
            throw await y4(r, t)
          case 'MalformedPolicyDocument':
          case 'com.amazonaws.sts#MalformedPolicyDocumentException':
            throw await w4(r, t)
          case 'PackedPolicyTooLarge':
          case 'com.amazonaws.sts#PackedPolicyTooLargeException':
            throw await b4(r, t)
          case 'RegionDisabledException':
          case 'com.amazonaws.sts#RegionDisabledException':
            throw await P4(r, t)
          case 'IDPCommunicationError':
          case 'com.amazonaws.sts#IDPCommunicationErrorException':
            throw await v4(r, t)
          case 'IDPRejectedClaim':
          case 'com.amazonaws.sts#IDPRejectedClaimException':
            throw await E4(r, t)
          case 'InvalidIdentityToken':
          case 'com.amazonaws.sts#InvalidIdentityTokenException':
            throw await S4(r, t)
          default:
            let o = r.body
            return $4({
              output: e,
              parsedBody: o.Error,
              errorCode: n,
            })
        }
      }),
      (y4 = async (e, t) => {
        let r = e.body,
          n = M4(r.Error, t),
          o = new Ms({ $metadata: ht(e), ...n })
        return (0, I.decorateServiceException)(o, r)
      }),
      (v4 = async (e, t) => {
        let r = e.body,
          n = U4(r.Error, t),
          o = new qs({ $metadata: ht(e), ...n })
        return (0, I.decorateServiceException)(o, r)
      }),
      (E4 = async (e, t) => {
        let r = e.body,
          n = F4(r.Error, t),
          o = new js({ $metadata: ht(e), ...n })
        return (0, I.decorateServiceException)(o, r)
      }),
      (S4 = async (e, t) => {
        let r = e.body,
          n = L4(r.Error, t),
          o = new Hs({ $metadata: ht(e), ...n })
        return (0, I.decorateServiceException)(o, r)
      }),
      (w4 = async (e, t) => {
        let r = e.body,
          n = j4(r.Error, t),
          o = new Us({ $metadata: ht(e), ...n })
        return (0, I.decorateServiceException)(o, r)
      }),
      (b4 = async (e, t) => {
        let r = e.body,
          n = H4(r.Error, t),
          o = new Fs({ $metadata: ht(e), ...n })
        return (0, I.decorateServiceException)(o, r)
      }),
      (P4 = async (e, t) => {
        let r = e.body,
          n = q4(r.Error, t),
          o = new Ls({ $metadata: ht(e), ...n })
        return (0, I.decorateServiceException)(o, r)
      }),
      (R4 = (e, t) => {
        let r = {}
        if (
          (e[Qn] != null && (r[Qn] = e[Qn]),
          e[Zn] != null && (r[Zn] = e[Zn]),
          e[Jn] != null)
        ) {
          let n = ZC(e[Jn], t)
          e[Jn]?.length === 0 && (r.PolicyArns = []),
            Object.entries(n).forEach(([o, s]) => {
              let i = `PolicyArns.${o}`
              r[i] = s
            })
        }
        if (
          (e[Yn] != null && (r[Yn] = e[Yn]),
          e[Kn] != null && (r[Kn] = e[Kn]),
          e[cf] != null)
        ) {
          let n = N4(e[cf], t)
          e[cf]?.length === 0 && (r.Tags = []),
            Object.entries(n).forEach(([o, s]) => {
              let i = `Tags.${o}`
              r[i] = s
            })
        }
        if (e[lf] != null) {
          let n = I4(e[lf], t)
          e[lf]?.length === 0 && (r.TransitiveTagKeys = []),
            Object.entries(n).forEach(([o, s]) => {
              let i = `TransitiveTagKeys.${o}`
              r[i] = s
            })
        }
        if (
          (e[Xp] != null && (r[Xp] = e[Xp]),
          e[sf] != null && (r[sf] = e[sf]),
          e[df] != null && (r[df] = e[df]),
          e[gt] != null && (r[gt] = e[gt]),
          e[ef] != null)
        ) {
          let n = x4(e[ef], t)
          e[ef]?.length === 0 && (r.ProvidedContexts = []),
            Object.entries(n).forEach(([o, s]) => {
              let i = `ProvidedContexts.${o}`
              r[i] = s
            })
        }
        return r
      }),
      (C4 = (e, t) => {
        let r = {}
        if (
          (e[Qn] != null && (r[Qn] = e[Qn]),
          e[Zn] != null && (r[Zn] = e[Zn]),
          e[pf] != null && (r[pf] = e[pf]),
          e[tf] != null && (r[tf] = e[tf]),
          e[Jn] != null)
        ) {
          let n = ZC(e[Jn], t)
          e[Jn]?.length === 0 && (r.PolicyArns = []),
            Object.entries(n).forEach(([o, s]) => {
              let i = `PolicyArns.${o}`
              r[i] = s
            })
        }
        return (
          e[Yn] != null && (r[Yn] = e[Yn]), e[Kn] != null && (r[Kn] = e[Kn]), r
        )
      }),
      (ZC = (e, t) => {
        let r = {},
          n = 1
        for (let o of e) {
          if (o === null) continue
          let s = O4(o, t)
          Object.entries(s).forEach(([i, a]) => {
            r[`member.${n}.${i}`] = a
          }),
            n++
        }
        return r
      }),
      (O4 = (e, t) => {
        let r = {}
        return e[ff] != null && (r[ff] = e[ff]), r
      }),
      (A4 = (e, t) => {
        let r = {}
        return (
          e[Zp] != null && (r[Zp] = e[Zp]), e[Yp] != null && (r[Yp] = e[Yp]), r
        )
      }),
      (x4 = (e, t) => {
        let r = {},
          n = 1
        for (let o of e) {
          if (o === null) continue
          let s = A4(o, t)
          Object.entries(s).forEach(([i, a]) => {
            r[`member.${n}.${i}`] = a
          }),
            n++
        }
        return r
      }),
      (T4 = (e, t) => {
        let r = {}
        return (
          e[Qp] != null && (r[Qp] = e[Qp]), e[uf] != null && (r[uf] = e[uf]), r
        )
      }),
      (I4 = (e, t) => {
        let r = {},
          n = 1
        for (let o of e) o !== null && ((r[`member.${n}`] = o), n++)
        return r
      }),
      (N4 = (e, t) => {
        let r = {},
          n = 1
        for (let o of e) {
          if (o === null) continue
          let s = T4(o, t)
          Object.entries(s).forEach(([i, a]) => {
            r[`member.${n}.${i}`] = a
          }),
            n++
        }
        return r
      }),
      (eO = (e, t) => {
        let r = {}
        return (
          e[zp] != null && (r[zp] = (0, I.expectString)(e[zp])),
          e[Wp] != null && (r[Wp] = (0, I.expectString)(e[Wp])),
          r
        )
      }),
      (D4 = (e, t) => {
        let r = {}
        return (
          e[Wn] != null && (r[Wn] = tO(e[Wn], t)),
          e[zn] != null && (r[zn] = eO(e[zn], t)),
          e[Xn] != null && (r[Xn] = (0, I.strictParseInt32)(e[Xn])),
          e[gt] != null && (r[gt] = (0, I.expectString)(e[gt])),
          r
        )
      }),
      (k4 = (e, t) => {
        let r = {}
        return (
          e[Wn] != null && (r[Wn] = tO(e[Wn], t)),
          e[of] != null && (r[of] = (0, I.expectString)(e[of])),
          e[zn] != null && (r[zn] = eO(e[zn], t)),
          e[Xn] != null && (r[Xn] = (0, I.strictParseInt32)(e[Xn])),
          e[rf] != null && (r[rf] = (0, I.expectString)(e[rf])),
          e[Kp] != null && (r[Kp] = (0, I.expectString)(e[Kp])),
          e[gt] != null && (r[gt] = (0, I.expectString)(e[gt])),
          r
        )
      }),
      (tO = (e, t) => {
        let r = {}
        return (
          e[Gp] != null && (r[Gp] = (0, I.expectString)(e[Gp])),
          e[nf] != null && (r[nf] = (0, I.expectString)(e[nf])),
          e[af] != null && (r[af] = (0, I.expectString)(e[af])),
          e[Jp] != null &&
            (r[Jp] = (0, I.expectNonNull)(
              (0, I.parseRfc3339DateTimeWithOffset)(e[Jp])
            )),
          r
        )
      }),
      (M4 = (e, t) => {
        let r = {}
        return e[Z] != null && (r[Z] = (0, I.expectString)(e[Z])), r
      }),
      (U4 = (e, t) => {
        let r = {}
        return e[Z] != null && (r[Z] = (0, I.expectString)(e[Z])), r
      }),
      (F4 = (e, t) => {
        let r = {}
        return e[Z] != null && (r[Z] = (0, I.expectString)(e[Z])), r
      }),
      (L4 = (e, t) => {
        let r = {}
        return e[Z] != null && (r[Z] = (0, I.expectString)(e[Z])), r
      }),
      (j4 = (e, t) => {
        let r = {}
        return e[Z] != null && (r[Z] = (0, I.expectString)(e[Z])), r
      }),
      (H4 = (e, t) => {
        let r = {}
        return e[Z] != null && (r[Z] = (0, I.expectString)(e[Z])), r
      }),
      (q4 = (e, t) => {
        let r = {}
        return e[Z] != null && (r[Z] = (0, I.expectString)(e[Z])), r
      }),
      (ht = (e) => ({
        httpStatusCode: e.statusCode,
        requestId:
          e.headers['x-amzn-requestid'] ??
          e.headers['x-amzn-request-id'] ??
          e.headers['x-amz-request-id'],
        extendedRequestId: e.headers['x-amz-id-2'],
        cfId: e.headers['x-amz-cf-id'],
      })),
      ($4 = (0, I.withBaseException)(ve)),
      (rO = async (e, t, r, n, o) => {
        let {
            hostname: s,
            protocol: i = 'https',
            port: a,
            path: c,
          } = await e.endpoint(),
          d = {
            protocol: i,
            hostname: s,
            port: a,
            method: 'POST',
            path: c.endsWith('/') ? c.slice(0, -1) + r : c + r,
            headers: t,
          }
        return (
          n !== void 0 && (d.hostname = n),
          o !== void 0 && (d.body = o),
          new WC.HttpRequest(d)
        )
      }),
      (nO = { 'content-type': 'application/x-www-form-urlencoded' }),
      (oO = '2011-06-15'),
      (sO = 'Action'),
      (Gp = 'AccessKeyId'),
      (B4 = 'AssumeRole'),
      (zp = 'AssumedRoleId'),
      (zn = 'AssumedRoleUser'),
      (V4 = 'AssumeRoleWithWebIdentity'),
      (Wp = 'Arn'),
      (Kp = 'Audience'),
      (Wn = 'Credentials'),
      (Yp = 'ContextAssertion'),
      (Kn = 'DurationSeconds'),
      (Jp = 'Expiration'),
      (Xp = 'ExternalId'),
      (Qp = 'Key'),
      (Yn = 'Policy'),
      (Jn = 'PolicyArns'),
      (Zp = 'ProviderArn'),
      (ef = 'ProvidedContexts'),
      (tf = 'ProviderId'),
      (Xn = 'PackedPolicySize'),
      (rf = 'Provider'),
      (Qn = 'RoleArn'),
      (Zn = 'RoleSessionName'),
      (nf = 'SecretAccessKey'),
      (of = 'SubjectFromWebIdentityToken'),
      (gt = 'SourceIdentity'),
      (sf = 'SerialNumber'),
      (af = 'SessionToken'),
      (cf = 'Tags'),
      (df = 'TokenCode'),
      (lf = 'TransitiveTagKeys'),
      (iO = 'Version'),
      (uf = 'Value'),
      (pf = 'WebIdentityToken'),
      (ff = 'arn'),
      (Z = 'message'),
      (aO = (e) =>
        Object.entries(e)
          .map(
            ([t, r]) =>
              (0, I.extendedEncodeURIComponent)(t) +
              '=' +
              (0, I.extendedEncodeURIComponent)(r)
          )
          .join('&')),
      (G4 = (e, t) => {
        if (t.Error?.Code !== void 0) return t.Error.Code
        if (e.statusCode == 404) return 'NotFound'
      })
  })
var cO,
  dO,
  lO,
  br,
  sd = v(() => {
    ;(cO = E(Nt())), (dO = E(Et())), (lO = E(D()))
    zc()
    $s()
    mf()
    br = class extends (
      lO.Command.classBuilder()
        .ep(Gc)
        .m(function (t, r, n, o) {
          return [
            (0, dO.getSerdePlugin)(n, this.serialize, this.deserialize),
            (0, cO.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
          ]
        })
        .s('AWSSecurityTokenServiceV20110615', 'AssumeRole', {})
        .n('STSClient', 'AssumeRoleCommand')
        .f(void 0, $p)
        .ser(KC)
        .de(JC)
        .build()
    ) {}
  })
var uO,
  pO,
  fO,
  Pr,
  id = v(() => {
    ;(uO = E(Nt())), (pO = E(Et())), (fO = E(D()))
    zc()
    $s()
    mf()
    Pr = class extends (
      fO.Command.classBuilder()
        .ep(Gc)
        .m(function (t, r, n, o) {
          return [
            (0, pO.getSerdePlugin)(n, this.serialize, this.deserialize),
            (0, uO.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
          ]
        })
        .s('AWSSecurityTokenServiceV20110615', 'AssumeRoleWithWebIdentity', {})
        .n('STSClient', 'AssumeRoleWithWebIdentityCommand')
        .f(Bp, Vp)
        .ser(YC)
        .de(XC)
        .build()
    ) {}
  })
var mO,
  z4,
  ad,
  gO = v(() => {
    mO = E(D())
    sd()
    id()
    ks()
    ;(z4 = { AssumeRoleCommand: br, AssumeRoleWithWebIdentityCommand: Pr }),
      (ad = class extends tt {})
    ;(0, mO.createAggregatedClient)(z4, ad)
  })
var hO = v(() => {
  sd()
  id()
})
var _O = v(() => {
  $s()
})
var yO,
  vO,
  EO,
  SO,
  wO,
  bO,
  PO = v(() => {
    We()
    sd()
    id()
    ;(yO = 'us-east-1'),
      (vO = (e) => {
        if (typeof e?.Arn == 'string') {
          let t = e.Arn.split(':')
          if (t.length > 4 && t[4] !== '') return t[4]
        }
      }),
      (EO = async (e, t, r) => {
        let n = typeof e == 'function' ? await e() : e,
          o = typeof t == 'function' ? await t() : t
        return (
          r?.debug?.(
            '@aws-sdk/client-sts::resolveRegion',
            'accepting first of:',
            `${n} (provider)`,
            `${o} (parent client)`,
            `${yO} (STS default)`
          ),
          n ?? o ?? yO
        )
      }),
      (SO = (e, t) => {
        let r, n
        return async (o, s) => {
          if (((n = o), !r)) {
            let {
                logger: l = e?.parentClientConfig?.logger,
                region: u,
                requestHandler: f = e?.parentClientConfig?.requestHandler,
                credentialProviderLogger: g,
              } = e,
              _ = await EO(u, e?.parentClientConfig?.region, g),
              w = !bO(f)
            r = new t({
              profile: e?.parentClientConfig?.profile,
              credentialDefaultProvider: () => async () => n,
              region: _,
              requestHandler: w ? f : void 0,
              logger: l,
            })
          }
          let { Credentials: i, AssumedRoleUser: a } = await r.send(new br(s))
          if (!i || !i.AccessKeyId || !i.SecretAccessKey)
            throw new Error(
              `Invalid response from STS.assumeRole call with role ${s.RoleArn}`
            )
          let c = vO(a),
            d = {
              accessKeyId: i.AccessKeyId,
              secretAccessKey: i.SecretAccessKey,
              sessionToken: i.SessionToken,
              expiration: i.Expiration,
              ...(i.CredentialScope && {
                credentialScope: i.CredentialScope,
              }),
              ...(c && { accountId: c }),
            }
          return Rt(d, 'CREDENTIALS_STS_ASSUME_ROLE', 'i'), d
        }
      }),
      (wO = (e, t) => {
        let r
        return async (n) => {
          if (!r) {
            let {
                logger: c = e?.parentClientConfig?.logger,
                region: d,
                requestHandler: l = e?.parentClientConfig?.requestHandler,
                credentialProviderLogger: u,
              } = e,
              f = await EO(d, e?.parentClientConfig?.region, u),
              g = !bO(l)
            r = new t({
              profile: e?.parentClientConfig?.profile,
              region: f,
              requestHandler: g ? l : void 0,
              logger: c,
            })
          }
          let { Credentials: o, AssumedRoleUser: s } = await r.send(new Pr(n))
          if (!o || !o.AccessKeyId || !o.SecretAccessKey)
            throw new Error(
              `Invalid response from STS.assumeRoleWithWebIdentity call with role ${n.RoleArn}`
            )
          let i = vO(s),
            a = {
              accessKeyId: o.AccessKeyId,
              secretAccessKey: o.SecretAccessKey,
              sessionToken: o.SessionToken,
              expiration: o.Expiration,
              ...(o.CredentialScope && {
                credentialScope: o.CredentialScope,
              }),
              ...(i && { accountId: i }),
            }
          return (
            i && Rt(a, 'RESOLVED_ACCOUNT_ID', 'T'),
            Rt(a, 'CREDENTIALS_STS_ASSUME_ROLE_WEB_ID', 'k'),
            a
          )
        }
      }),
      (bO = (e) => e?.metadata?.handlerProtocol === 'h2')
  })
var RO,
  CO,
  OO,
  W4,
  AO = v(() => {
    PO()
    ks()
    ;(RO = (e, t) =>
      t
        ? class extends e {
            constructor(n) {
              super(n)
              for (let o of t) this.middlewareStack.use(o)
            }
          }
        : e),
      (CO = (e = {}, t) => SO(e, RO(tt, t))),
      (OO = (e = {}, t) => wO(e, RO(tt, t))),
      (W4 = (e) => (t) =>
        e({
          roleAssumer: CO(t),
          roleAssumerWithWebIdentity: OO(t),
          ...t,
        }))
  })
var gf = {}
st(gf, {
  AssumeRoleCommand: () => br,
  AssumeRoleResponseFilterSensitiveLog: () => $p,
  AssumeRoleWithWebIdentityCommand: () => Pr,
  AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => Bp,
  AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => Vp,
  CredentialsFilterSensitiveLog: () => qp,
  ExpiredTokenException: () => Ms,
  IDPCommunicationErrorException: () => qs,
  IDPRejectedClaimException: () => js,
  InvalidIdentityTokenException: () => Hs,
  MalformedPolicyDocumentException: () => Us,
  PackedPolicyTooLargeException: () => Fs,
  RegionDisabledException: () => Ls,
  STS: () => ad,
  STSClient: () => tt,
  STSServiceException: () => ve,
  __Client: () => jp.Client,
  decorateDefaultCredentialProvider: () => W4,
  getDefaultRoleAssumer: () => CO,
  getDefaultRoleAssumerWithWebIdentity: () => OO,
})
var hf = v(() => {
  ks()
  gO()
  hO()
  _O()
  AO()
  od()
})
var vf = h((M5, IO) => {
  'use strict'
  var cd = Object.defineProperty,
    K4 = Object.getOwnPropertyDescriptor,
    Y4 = Object.getOwnPropertyNames,
    J4 = Object.prototype.hasOwnProperty,
    yf = (e, t) => cd(e, 'name', { value: t, configurable: !0 }),
    X4 = (e, t) => {
      for (var r in t) cd(e, r, { get: t[r], enumerable: !0 })
    },
    Q4 = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of Y4(t))
          !J4.call(e, o) &&
            o !== r &&
            cd(e, o, {
              get: () => t[o],
              enumerable: !(n = K4(t, o)) || n.enumerable,
            })
      return e
    },
    Z4 = (e) => Q4(cd({}, '__esModule', { value: !0 }), e),
    TO = {}
  X4(TO, { fromProcess: () => s2 })
  IO.exports = Z4(TO)
  var xO = Tt(),
    _f = fe(),
    e2 = require('child_process'),
    t2 = require('util'),
    r2 = (We(), F(tr)),
    n2 = yf((e, t, r) => {
      if (t.Version !== 1)
        throw Error(`Profile ${e} credential_process did not return Version 1.`)
      if (t.AccessKeyId === void 0 || t.SecretAccessKey === void 0)
        throw Error(
          `Profile ${e} credential_process returned invalid credentials.`
        )
      if (t.Expiration) {
        let s = new Date()
        if (new Date(t.Expiration) < s)
          throw Error(
            `Profile ${e} credential_process returned expired credentials.`
          )
      }
      let n = t.AccountId
      !n && r?.[e]?.aws_account_id && (n = r[e].aws_account_id)
      let o = {
        accessKeyId: t.AccessKeyId,
        secretAccessKey: t.SecretAccessKey,
        ...(t.SessionToken && { sessionToken: t.SessionToken }),
        ...(t.Expiration && { expiration: new Date(t.Expiration) }),
        ...(t.CredentialScope && {
          credentialScope: t.CredentialScope,
        }),
        ...(n && { accountId: n }),
      }
      return (0, r2.setCredentialFeature)(o, 'CREDENTIALS_PROCESS', 'w'), o
    }, 'getValidatedProcessCredentials'),
    o2 = yf(async (e, t, r) => {
      let n = t[e]
      if (t[e]) {
        let o = n.credential_process
        if (o !== void 0) {
          let s = (0, t2.promisify)(e2.exec)
          try {
            let { stdout: i } = await s(o),
              a
            try {
              a = JSON.parse(i.trim())
            } catch {
              throw Error(
                `Profile ${e} credential_process returned invalid JSON.`
              )
            }
            return n2(e, a, t)
          } catch (i) {
            throw new _f.CredentialsProviderError(i.message, {
              logger: r,
            })
          }
        } else
          throw new _f.CredentialsProviderError(
            `Profile ${e} did not contain credential_process.`,
            { logger: r }
          )
      } else
        throw new _f.CredentialsProviderError(
          `Profile ${e} could not be found in shared credentials file.`,
          { logger: r }
        )
    }, 'resolveProcessCredentials'),
    s2 = yf(
      (e = {}) =>
        async ({ callerClientConfig: t } = {}) => {
          e.logger?.debug('@aws-sdk/credential-provider-process - fromProcess')
          let r = await (0, xO.parseKnownFiles)(e)
          return o2(
            (0, xO.getProfileName)({
              profile: e.profile ?? t?.profile,
            }),
            r,
            e.logger
          )
        },
      'fromProcess'
    )
})
var Ef = h((nt) => {
  'use strict'
  var i2 =
      (nt && nt.__createBinding) ||
      (Object.create
        ? function (e, t, r, n) {
            n === void 0 && (n = r)
            var o = Object.getOwnPropertyDescriptor(t, r)
            ;(!o ||
              ('get' in o ? !t.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return t[r]
                },
              }),
              Object.defineProperty(e, n, o)
          }
        : function (e, t, r, n) {
            n === void 0 && (n = r), (e[n] = t[r])
          }),
    a2 =
      (nt && nt.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, 'default', {
              enumerable: !0,
              value: t,
            })
          }
        : function (e, t) {
            e.default = t
          }),
    c2 =
      (nt && nt.__importStar) ||
      (function () {
        var e = function (t) {
          return (
            (e =
              Object.getOwnPropertyNames ||
              function (r) {
                var n = []
                for (var o in r)
                  Object.prototype.hasOwnProperty.call(r, o) &&
                    (n[n.length] = o)
                return n
              }),
            e(t)
          )
        }
        return function (t) {
          if (t && t.__esModule) return t
          var r = {}
          if (t != null)
            for (var n = e(t), o = 0; o < n.length; o++)
              n[o] !== 'default' && i2(r, t, n[o])
          return a2(r, t), r
        }
      })()
  Object.defineProperty(nt, '__esModule', { value: !0 })
  nt.fromWebToken = void 0
  var d2 = (e) => async (t) => {
    e.logger?.debug('@aws-sdk/credential-provider-web-identity - fromWebToken')
    let {
        roleArn: r,
        roleSessionName: n,
        webIdentityToken: o,
        providerId: s,
        policyArns: i,
        policy: a,
        durationSeconds: c,
      } = e,
      { roleAssumerWithWebIdentity: d } = e
    if (!d) {
      let { getDefaultRoleAssumerWithWebIdentity: l } =
        await Promise.resolve().then(() => c2((hf(), F(gf))))
      d = l(
        {
          ...e.clientConfig,
          credentialProviderLogger: e.logger,
          parentClientConfig: {
            ...t?.callerClientConfig,
            ...e.parentClientConfig,
          },
        },
        e.clientPlugins
      )
    }
    return d({
      RoleArn: r,
      RoleSessionName: n ?? `aws-sdk-js-session-${Date.now()}`,
      WebIdentityToken: o,
      ProviderId: s,
      PolicyArns: i,
      Policy: a,
      DurationSeconds: c,
    })
  }
  nt.fromWebToken = d2
})
var DO = h((dd) => {
  'use strict'
  Object.defineProperty(dd, '__esModule', { value: !0 })
  dd.fromTokenFile = void 0
  var l2 = (We(), F(tr)),
    u2 = fe(),
    p2 = require('fs'),
    f2 = Ef(),
    NO = 'AWS_WEB_IDENTITY_TOKEN_FILE',
    m2 = 'AWS_ROLE_ARN',
    g2 = 'AWS_ROLE_SESSION_NAME',
    h2 =
      (e = {}) =>
      async () => {
        e.logger?.debug(
          '@aws-sdk/credential-provider-web-identity - fromTokenFile'
        )
        let t = e?.webIdentityTokenFile ?? process.env[NO],
          r = e?.roleArn ?? process.env[m2],
          n = e?.roleSessionName ?? process.env[g2]
        if (!t || !r)
          throw new u2.CredentialsProviderError(
            'Web identity configuration not specified',
            { logger: e.logger }
          )
        let o = await (0, f2.fromWebToken)({
          ...e,
          webIdentityToken: (0, p2.readFileSync)(t, {
            encoding: 'ascii',
          }),
          roleArn: r,
          roleSessionName: n,
        })()
        return (
          t === process.env[NO] &&
            (0, l2.setCredentialFeature)(
              o,
              'CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN',
              'h'
            ),
          o
        )
      }
  dd.fromTokenFile = h2
})
var bf = h((L5, ld) => {
  'use strict'
  var kO = Object.defineProperty,
    _2 = Object.getOwnPropertyDescriptor,
    y2 = Object.getOwnPropertyNames,
    v2 = Object.prototype.hasOwnProperty,
    Sf = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of y2(t))
          !v2.call(e, o) &&
            o !== r &&
            kO(e, o, {
              get: () => t[o],
              enumerable: !(n = _2(t, o)) || n.enumerable,
            })
      return e
    },
    MO = (e, t, r) => (Sf(e, t, 'default'), r && Sf(r, t, 'default')),
    E2 = (e) => Sf(kO({}, '__esModule', { value: !0 }), e),
    wf = {}
  ld.exports = E2(wf)
  MO(wf, DO(), ld.exports)
  MO(wf, Ef(), ld.exports)
})
var BO = h((j5, $O) => {
  'use strict'
  var S2 = Object.create,
    Vs = Object.defineProperty,
    w2 = Object.getOwnPropertyDescriptor,
    b2 = Object.getOwnPropertyNames,
    P2 = Object.getPrototypeOf,
    R2 = Object.prototype.hasOwnProperty,
    ne = (e, t) => Vs(e, 'name', { value: t, configurable: !0 }),
    C2 = (e, t) => {
      for (var r in t) Vs(e, r, { get: t[r], enumerable: !0 })
    },
    jO = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of b2(t))
          !R2.call(e, o) &&
            o !== r &&
            Vs(e, o, {
              get: () => t[o],
              enumerable: !(n = w2(t, o)) || n.enumerable,
            })
      return e
    },
    zt = (e, t, r) => (
      (r = e != null ? S2(P2(e)) : {}),
      jO(
        t || !e || !e.__esModule
          ? Vs(r, 'default', { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    O2 = (e) => jO(Vs({}, '__esModule', { value: !0 }), e),
    HO = {}
  C2(HO, { fromIni: () => j2 })
  $O.exports = O2(HO)
  var Rf = Tt(),
    Wt = (We(), F(tr)),
    Bs = fe(),
    A2 = ne((e, t, r) => {
      let n = {
        EcsContainer: ne(async (o) => {
          let { fromHttp: s } = await Promise.resolve().then(() => zt(Zu())),
            { fromContainerMetadata: i } = await Promise.resolve().then(() =>
              zt(ss())
            )
          return (
            r?.debug(
              '@aws-sdk/credential-provider-ini - credential_source is EcsContainer'
            ),
            async () => (0, Bs.chain)(s(o ?? {}), i(o))().then(Pf)
          )
        }, 'EcsContainer'),
        Ec2InstanceMetadata: ne(async (o) => {
          r?.debug(
            '@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata'
          )
          let { fromInstanceMetadata: s } = await Promise.resolve().then(() =>
            zt(ss())
          )
          return async () => s(o)().then(Pf)
        }, 'Ec2InstanceMetadata'),
        Environment: ne(async (o) => {
          r?.debug(
            '@aws-sdk/credential-provider-ini - credential_source is Environment'
          )
          let { fromEnv: s } = await Promise.resolve().then(() => zt(zu()))
          return async () => s(o)().then(Pf)
        }, 'Environment'),
      }
      if (e in n) return n[e]
      throw new Bs.CredentialsProviderError(
        `Unsupported credential source in profile ${t}. Got ${e}, expected EcsContainer or Ec2InstanceMetadata or Environment.`,
        { logger: r }
      )
    }, 'resolveCredentialSource'),
    Pf = ne(
      (e) =>
        (0, Wt.setCredentialFeature)(
          e,
          'CREDENTIALS_PROFILE_NAMED_PROVIDER',
          'p'
        ),
      'setNamedProvider'
    ),
    x2 = ne(
      (e, { profile: t = 'default', logger: r } = {}) =>
        !!e &&
        typeof e == 'object' &&
        typeof e.role_arn == 'string' &&
        ['undefined', 'string'].indexOf(typeof e.role_session_name) > -1 &&
        ['undefined', 'string'].indexOf(typeof e.external_id) > -1 &&
        ['undefined', 'string'].indexOf(typeof e.mfa_serial) > -1 &&
        (T2(e, { profile: t, logger: r }) || I2(e, { profile: t, logger: r })),
      'isAssumeRoleProfile'
    ),
    T2 = ne((e, { profile: t, logger: r }) => {
      let n =
        typeof e.source_profile == 'string' && typeof e.credential_source > 'u'
      return (
        n &&
          r?.debug?.(
            `    ${t} isAssumeRoleWithSourceProfile source_profile=${e.source_profile}`
          ),
        n
      )
    }, 'isAssumeRoleWithSourceProfile'),
    I2 = ne((e, { profile: t, logger: r }) => {
      let n =
        typeof e.credential_source == 'string' && typeof e.source_profile > 'u'
      return (
        n &&
          r?.debug?.(
            `    ${t} isCredentialSourceProfile credential_source=${e.credential_source}`
          ),
        n
      )
    }, 'isCredentialSourceProfile'),
    N2 = ne(async (e, t, r, n = {}) => {
      r.logger?.debug(
        '@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)'
      )
      let o = t[e],
        { source_profile: s, region: i } = o
      if (!r.roleAssumer) {
        let { getDefaultRoleAssumer: c } = await Promise.resolve().then(() =>
          zt((hf(), F(gf)))
        )
        r.roleAssumer = c(
          {
            ...r.clientConfig,
            credentialProviderLogger: r.logger,
            parentClientConfig: {
              ...r?.parentClientConfig,
              region: i ?? r?.parentClientConfig?.region,
            },
          },
          r.clientPlugins
        )
      }
      if (s && s in n)
        throw new Bs.CredentialsProviderError(
          `Detected a cycle attempting to resolve credentials for profile ${(0, Rf.getProfileName)(r)}. Profiles visited: ` +
            Object.keys(n).join(', '),
          { logger: r.logger }
        )
      r.logger?.debug(
        `@aws-sdk/credential-provider-ini - finding credential resolver using ${s ? `source_profile=[${s}]` : `profile=[${e}]`}`
      )
      let a = s
        ? qO(s, t, r, { ...n, [s]: !0 }, UO(t[s] ?? {}))
        : (await A2(o.credential_source, e, r.logger)(r))()
      if (UO(o))
        return a.then((c) =>
          (0, Wt.setCredentialFeature)(
            c,
            'CREDENTIALS_PROFILE_SOURCE_PROFILE',
            'o'
          )
        )
      {
        let c = {
            RoleArn: o.role_arn,
            RoleSessionName: o.role_session_name || `aws-sdk-js-${Date.now()}`,
            ExternalId: o.external_id,
            DurationSeconds: parseInt(o.duration_seconds || '3600', 10),
          },
          { mfa_serial: d } = o
        if (d) {
          if (!r.mfaCodeProvider)
            throw new Bs.CredentialsProviderError(
              `Profile ${e} requires multi-factor authentication, but no MFA code callback was provided.`,
              { logger: r.logger, tryNextLink: !1 }
            )
          ;(c.SerialNumber = d), (c.TokenCode = await r.mfaCodeProvider(d))
        }
        let l = await a
        return r
          .roleAssumer(l, c)
          .then((u) =>
            (0, Wt.setCredentialFeature)(
              u,
              'CREDENTIALS_PROFILE_SOURCE_PROFILE',
              'o'
            )
          )
      }
    }, 'resolveAssumeRoleCredentials'),
    UO = ne(
      (e) => !e.role_arn && !!e.credential_source,
      'isCredentialSourceWithoutRoleArn'
    ),
    D2 = ne(
      (e) =>
        !!e && typeof e == 'object' && typeof e.credential_process == 'string',
      'isProcessProfile'
    ),
    k2 = ne(
      async (e, t) =>
        Promise.resolve()
          .then(() => zt(vf()))
          .then(({ fromProcess: r }) =>
            r({ ...e, profile: t })().then((n) =>
              (0, Wt.setCredentialFeature)(
                n,
                'CREDENTIALS_PROFILE_PROCESS',
                'v'
              )
            )
          ),
      'resolveProcessCredentials'
    ),
    M2 = ne(async (e, t, r = {}) => {
      let { fromSSO: n } = await Promise.resolve().then(() => zt(Mp()))
      return n({
        profile: e,
        logger: r.logger,
        parentClientConfig: r.parentClientConfig,
        clientConfig: r.clientConfig,
      })().then((o) =>
        t.sso_session
          ? (0, Wt.setCredentialFeature)(o, 'CREDENTIALS_PROFILE_SSO', 'r')
          : (0, Wt.setCredentialFeature)(
              o,
              'CREDENTIALS_PROFILE_SSO_LEGACY',
              't'
            )
      )
    }, 'resolveSsoCredentials'),
    U2 = ne(
      (e) =>
        e &&
        (typeof e.sso_start_url == 'string' ||
          typeof e.sso_account_id == 'string' ||
          typeof e.sso_session == 'string' ||
          typeof e.sso_region == 'string' ||
          typeof e.sso_role_name == 'string'),
      'isSsoProfile'
    ),
    FO = ne(
      (e) =>
        !!e &&
        typeof e == 'object' &&
        typeof e.aws_access_key_id == 'string' &&
        typeof e.aws_secret_access_key == 'string' &&
        ['undefined', 'string'].indexOf(typeof e.aws_session_token) > -1 &&
        ['undefined', 'string'].indexOf(typeof e.aws_account_id) > -1,
      'isStaticCredsProfile'
    ),
    LO = ne(async (e, t) => {
      t?.logger?.debug(
        '@aws-sdk/credential-provider-ini - resolveStaticCredentials'
      )
      let r = {
        accessKeyId: e.aws_access_key_id,
        secretAccessKey: e.aws_secret_access_key,
        sessionToken: e.aws_session_token,
        ...(e.aws_credential_scope && {
          credentialScope: e.aws_credential_scope,
        }),
        ...(e.aws_account_id && { accountId: e.aws_account_id }),
      }
      return (0, Wt.setCredentialFeature)(r, 'CREDENTIALS_PROFILE', 'n')
    }, 'resolveStaticCredentials'),
    F2 = ne(
      (e) =>
        !!e &&
        typeof e == 'object' &&
        typeof e.web_identity_token_file == 'string' &&
        typeof e.role_arn == 'string' &&
        ['undefined', 'string'].indexOf(typeof e.role_session_name) > -1,
      'isWebIdentityProfile'
    ),
    L2 = ne(
      async (e, t) =>
        Promise.resolve()
          .then(() => zt(bf()))
          .then(({ fromTokenFile: r }) =>
            r({
              webIdentityTokenFile: e.web_identity_token_file,
              roleArn: e.role_arn,
              roleSessionName: e.role_session_name,
              roleAssumerWithWebIdentity: t.roleAssumerWithWebIdentity,
              logger: t.logger,
              parentClientConfig: t.parentClientConfig,
            })().then((n) =>
              (0, Wt.setCredentialFeature)(
                n,
                'CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN',
                'q'
              )
            )
          ),
      'resolveWebIdentityCredentials'
    ),
    qO = ne(async (e, t, r, n = {}, o = !1) => {
      let s = t[e]
      if (Object.keys(n).length > 0 && FO(s)) return LO(s, r)
      if (o || x2(s, { profile: e, logger: r.logger })) return N2(e, t, r, n)
      if (FO(s)) return LO(s, r)
      if (F2(s)) return L2(s, r)
      if (D2(s)) return k2(r, e)
      if (U2(s)) return await M2(e, s, r)
      throw new Bs.CredentialsProviderError(
        `Could not resolve credentials using profile: [${e}] in configuration/credentials file(s).`,
        { logger: r.logger }
      )
    }, 'resolveProfileData'),
    j2 = ne(
      (e = {}) =>
        async ({ callerClientConfig: t } = {}) => {
          let r = {
            ...e,
            parentClientConfig: { ...t, ...e.parentClientConfig },
          }
          r.logger?.debug('@aws-sdk/credential-provider-ini - fromIni')
          let n = await (0, Rf.parseKnownFiles)(r)
          return qO(
            (0, Rf.getProfileName)({
              profile: e.profile ?? t?.profile,
            }),
            n,
            r
          )
        },
      'fromIni'
    )
})
var XO = h((H5, JO) => {
  'use strict'
  var H2 = Object.create,
    Gs = Object.defineProperty,
    q2 = Object.getOwnPropertyDescriptor,
    $2 = Object.getOwnPropertyNames,
    B2 = Object.getPrototypeOf,
    V2 = Object.prototype.hasOwnProperty,
    ud = (e, t) => Gs(e, 'name', { value: t, configurable: !0 }),
    G2 = (e, t) => {
      for (var r in t) Gs(e, r, { get: t[r], enumerable: !0 })
    },
    zO = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of $2(t))
          !V2.call(e, o) &&
            o !== r &&
            Gs(e, o, {
              get: () => t[o],
              enumerable: !(n = q2(t, o)) || n.enumerable,
            })
      return e
    },
    eo = (e, t, r) => (
      (r = e != null ? H2(B2(e)) : {}),
      zO(
        t || !e || !e.__esModule
          ? Gs(r, 'default', { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    z2 = (e) => zO(Gs({}, '__esModule', { value: !0 }), e),
    WO = {}
  G2(WO, {
    credentialsTreatedAsExpired: () => YO,
    credentialsWillNeedRefresh: () => KO,
    defaultProvider: () => Y2,
  })
  JO.exports = z2(WO)
  var Cf = zu(),
    W2 = Tt(),
    Rr = fe(),
    VO = 'AWS_EC2_METADATA_DISABLED',
    K2 = ud(async (e) => {
      let {
        ENV_CMDS_FULL_URI: t,
        ENV_CMDS_RELATIVE_URI: r,
        fromContainerMetadata: n,
        fromInstanceMetadata: o,
      } = await Promise.resolve().then(() => eo(ss()))
      if (process.env[r] || process.env[t]) {
        e.logger?.debug(
          '@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata'
        )
        let { fromHttp: s } = await Promise.resolve().then(() => eo(Zu()))
        return (0, Rr.chain)(s(e), n(e))
      }
      return process.env[VO] && process.env[VO] !== 'false'
        ? async () => {
            throw new Rr.CredentialsProviderError(
              'EC2 Instance Metadata Service access disabled',
              { logger: e.logger }
            )
          }
        : (e.logger?.debug(
            '@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata'
          ),
          o(e))
    }, 'remoteProvider'),
    GO = !1,
    Y2 = ud(
      (e = {}) =>
        (0, Rr.memoize)(
          (0, Rr.chain)(
            async () => {
              if (e.profile ?? process.env[W2.ENV_PROFILE])
                throw (
                  (process.env[Cf.ENV_KEY] &&
                    process.env[Cf.ENV_SECRET] &&
                    (GO ||
                      ((e.logger?.warn &&
                        e.logger?.constructor?.name !== 'NoOpLogger'
                        ? e.logger.warn
                        : console.warn)(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`),
                      (GO = !0))),
                  new Rr.CredentialsProviderError(
                    'AWS_PROFILE is set, skipping fromEnv provider.',
                    { logger: e.logger, tryNextLink: !0 }
                  ))
                )
              return (
                e.logger?.debug(
                  '@aws-sdk/credential-provider-node - defaultProvider::fromEnv'
                ),
                (0, Cf.fromEnv)(e)()
              )
            },
            async () => {
              e.logger?.debug(
                '@aws-sdk/credential-provider-node - defaultProvider::fromSSO'
              )
              let {
                ssoStartUrl: t,
                ssoAccountId: r,
                ssoRegion: n,
                ssoRoleName: o,
                ssoSession: s,
              } = e
              if (!t && !r && !n && !o && !s)
                throw new Rr.CredentialsProviderError(
                  'Skipping SSO provider in default chain (inputs do not include SSO fields).',
                  { logger: e.logger }
                )
              let { fromSSO: i } = await Promise.resolve().then(() => eo(Mp()))
              return i(e)()
            },
            async () => {
              e.logger?.debug(
                '@aws-sdk/credential-provider-node - defaultProvider::fromIni'
              )
              let { fromIni: t } = await Promise.resolve().then(() => eo(BO()))
              return t(e)()
            },
            async () => {
              e.logger?.debug(
                '@aws-sdk/credential-provider-node - defaultProvider::fromProcess'
              )
              let { fromProcess: t } = await Promise.resolve().then(() =>
                eo(vf())
              )
              return t(e)()
            },
            async () => {
              e.logger?.debug(
                '@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile'
              )
              let { fromTokenFile: t } = await Promise.resolve().then(() =>
                eo(bf())
              )
              return t(e)()
            },
            async () => (
              e.logger?.debug(
                '@aws-sdk/credential-provider-node - defaultProvider::remoteProvider'
              ),
              (await K2(e))()
            ),
            async () => {
              throw new Rr.CredentialsProviderError(
                'Could not load credentials from any providers',
                { tryNextLink: !1, logger: e.logger }
              )
            }
          ),
          YO,
          KO
        ),
      'defaultProvider'
    ),
    KO = ud((e) => e?.expiration !== void 0, 'credentialsWillNeedRefresh'),
    YO = ud(
      (e) =>
        e?.expiration !== void 0 && e.expiration.getTime() - Date.now() < 3e5,
      'credentialsTreatedAsExpired'
    )
})
var QO = h((pd) => {
  'use strict'
  Object.defineProperty(pd, '__esModule', { value: !0 })
  pd.fromBase64 = void 0
  var J2 = ee(),
    X2 = /^[A-Za-z0-9+/]*={0,2}$/,
    Q2 = (e) => {
      if ((e.length * 3) % 4 !== 0)
        throw new TypeError('Incorrect padding on base64 string.')
      if (!X2.exec(e)) throw new TypeError('Invalid base64 string.')
      let t = (0, J2.fromString)(e, 'base64')
      return new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
    }
  pd.fromBase64 = Q2
})
var Af = h(($5, r0) => {
  var fd = Object.defineProperty,
    Z2 = Object.getOwnPropertyDescriptor,
    e8 = Object.getOwnPropertyNames,
    t8 = Object.prototype.hasOwnProperty,
    Of = (e, t) => fd(e, 'name', { value: t, configurable: !0 }),
    r8 = (e, t) => {
      for (var r in t) fd(e, r, { get: t[r], enumerable: !0 })
    },
    n8 = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of e8(t))
          !t8.call(e, o) &&
            o !== r &&
            fd(e, o, {
              get: () => t[o],
              enumerable: !(n = Z2(t, o)) || n.enumerable,
            })
      return e
    },
    o8 = (e) => n8(fd({}, '__esModule', { value: !0 }), e),
    ZO = {}
  r8(ZO, { fromUtf8: () => t0, toUint8Array: () => s8, toUtf8: () => i8 })
  r0.exports = o8(ZO)
  var e0 = ee(),
    t0 = Of((e) => {
      let t = (0, e0.fromString)(e, 'utf8')
      return new Uint8Array(
        t.buffer,
        t.byteOffset,
        t.byteLength / Uint8Array.BYTES_PER_ELEMENT
      )
    }, 'fromUtf8'),
    s8 = Of(
      (e) =>
        typeof e == 'string'
          ? t0(e)
          : ArrayBuffer.isView(e)
            ? new Uint8Array(
                e.buffer,
                e.byteOffset,
                e.byteLength / Uint8Array.BYTES_PER_ELEMENT
              )
            : new Uint8Array(e),
      'toUint8Array'
    ),
    i8 = Of((e) => {
      if (typeof e == 'string') return e
      if (
        typeof e != 'object' ||
        typeof e.byteOffset != 'number' ||
        typeof e.byteLength != 'number'
      )
        throw new Error(
          '@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.'
        )
      return (0, e0.fromArrayBuffer)(
        e.buffer,
        e.byteOffset,
        e.byteLength
      ).toString('utf8')
    }, 'toUtf8')
})
var n0 = h((md) => {
  'use strict'
  Object.defineProperty(md, '__esModule', { value: !0 })
  md.toBase64 = void 0
  var a8 = ee(),
    c8 = Af(),
    d8 = (e) => {
      let t
      if (
        (typeof e == 'string' ? (t = (0, c8.fromUtf8)(e)) : (t = e),
        typeof t != 'object' ||
          typeof t.byteOffset != 'number' ||
          typeof t.byteLength != 'number')
      )
        throw new Error(
          '@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.'
        )
      return (0, a8.fromArrayBuffer)(
        t.buffer,
        t.byteOffset,
        t.byteLength
      ).toString('base64')
    }
  md.toBase64 = d8
})
var i0 = h((V5, gd) => {
  var o0 = Object.defineProperty,
    l8 = Object.getOwnPropertyDescriptor,
    u8 = Object.getOwnPropertyNames,
    p8 = Object.prototype.hasOwnProperty,
    xf = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of u8(t))
          !p8.call(e, o) &&
            o !== r &&
            o0(e, o, {
              get: () => t[o],
              enumerable: !(n = l8(t, o)) || n.enumerable,
            })
      return e
    },
    s0 = (e, t, r) => (xf(e, t, 'default'), r && xf(r, t, 'default')),
    f8 = (e) => xf(o0({}, '__esModule', { value: !0 }), e),
    Tf = {}
  gd.exports = f8(Tf)
  s0(Tf, QO(), gd.exports)
  s0(Tf, n0(), gd.exports)
})
var P0 = h((_d) => {
  'use strict'
  Object.defineProperty(_d, '__esModule', { value: !0 })
  _d.ruleSet = void 0
  var S0 = 'required',
    Ee = 'fn',
    Se = 'argv',
    Cr = 'ref',
    Kt = 'properties',
    Yt = 'headers',
    a0 = !0,
    c0 = 'isSet',
    zs = 'booleanEquals',
    to = 'error',
    ot = 'endpoint',
    _t = 'tree',
    hd = 'PartitionResult',
    If = 'stringEquals',
    d0 = { [S0]: !1, type: 'String' },
    l0 = { [S0]: !0, default: !1, type: 'Boolean' },
    u0 = { [Cr]: 'Endpoint' },
    w0 = { [Ee]: zs, [Se]: [{ [Cr]: 'UseFIPS' }, !0] },
    b0 = { [Ee]: zs, [Se]: [{ [Cr]: 'UseDualStack' }, !0] },
    ke = {},
    p0 = { [Ee]: 'getAttr', [Se]: [{ [Cr]: hd }, 'supportsFIPS'] },
    f0 = {
      [Ee]: zs,
      [Se]: [
        !0,
        { [Ee]: 'getAttr', [Se]: [{ [Cr]: hd }, 'supportsDualStack'] },
      ],
    },
    Nf = { [Ee]: 'getAttr', [Se]: [{ [Cr]: hd }, 'name'] },
    m0 = {
      url: 'https://secretsmanager-fips.{Region}.amazonaws.com',
      [Kt]: {},
      [Yt]: {},
    },
    g0 = {
      url: 'https://secretsmanager.{Region}.amazonaws.com',
      [Kt]: {},
      [Yt]: {},
    },
    h0 = [w0],
    _0 = [b0],
    y0 = [{ [Cr]: 'Region' }],
    v0 = [{ [Ee]: If, [Se]: ['aws', Nf] }],
    E0 = [{ [Ee]: If, [Se]: ['aws-us-gov', Nf] }],
    m8 = {
      version: '1.0',
      parameters: {
        Region: d0,
        UseDualStack: l0,
        UseFIPS: l0,
        Endpoint: d0,
      },
      rules: [
        {
          conditions: [{ [Ee]: c0, [Se]: [u0] }],
          rules: [
            {
              conditions: h0,
              error:
                'Invalid Configuration: FIPS and custom endpoint are not supported',
              type: to,
            },
            {
              conditions: _0,
              error:
                'Invalid Configuration: Dualstack and custom endpoint are not supported',
              type: to,
            },
            { endpoint: { url: u0, [Kt]: ke, [Yt]: ke }, type: ot },
          ],
          type: _t,
        },
        {
          conditions: [{ [Ee]: c0, [Se]: y0 }],
          rules: [
            {
              conditions: [{ [Ee]: 'aws.partition', [Se]: y0, assign: hd }],
              rules: [
                {
                  conditions: [w0, b0],
                  rules: [
                    {
                      conditions: [{ [Ee]: zs, [Se]: [a0, p0] }, f0],
                      rules: [
                        {
                          conditions: v0,
                          endpoint: m0,
                          type: ot,
                        },
                        {
                          conditions: E0,
                          endpoint: m0,
                          type: ot,
                        },
                        {
                          endpoint: {
                            url: 'https://secretsmanager-fips.{Region}.{PartitionResult#dualStackDnsSuffix}',
                            [Kt]: ke,
                            [Yt]: ke,
                          },
                          type: ot,
                        },
                      ],
                      type: _t,
                    },
                    {
                      error:
                        'FIPS and DualStack are enabled, but this partition does not support one or both',
                      type: to,
                    },
                  ],
                  type: _t,
                },
                {
                  conditions: h0,
                  rules: [
                    {
                      conditions: [{ [Ee]: zs, [Se]: [p0, a0] }],
                      rules: [
                        {
                          endpoint: {
                            url: 'https://secretsmanager-fips.{Region}.{PartitionResult#dnsSuffix}',
                            [Kt]: ke,
                            [Yt]: ke,
                          },
                          type: ot,
                        },
                      ],
                      type: _t,
                    },
                    {
                      error:
                        'FIPS is enabled but this partition does not support FIPS',
                      type: to,
                    },
                  ],
                  type: _t,
                },
                {
                  conditions: _0,
                  rules: [
                    {
                      conditions: [f0],
                      rules: [
                        {
                          conditions: v0,
                          endpoint: g0,
                          type: ot,
                        },
                        {
                          conditions: [
                            {
                              [Ee]: If,
                              [Se]: ['aws-cn', Nf],
                            },
                          ],
                          endpoint: {
                            url: 'https://secretsmanager.{Region}.amazonaws.com.cn',
                            [Kt]: ke,
                            [Yt]: ke,
                          },
                          type: ot,
                        },
                        {
                          conditions: E0,
                          endpoint: g0,
                          type: ot,
                        },
                        {
                          endpoint: {
                            url: 'https://secretsmanager.{Region}.{PartitionResult#dualStackDnsSuffix}',
                            [Kt]: ke,
                            [Yt]: ke,
                          },
                          type: ot,
                        },
                      ],
                      type: _t,
                    },
                    {
                      error:
                        'DualStack is enabled but this partition does not support DualStack',
                      type: to,
                    },
                  ],
                  type: _t,
                },
                {
                  endpoint: {
                    url: 'https://secretsmanager.{Region}.{PartitionResult#dnsSuffix}',
                    [Kt]: ke,
                    [Yt]: ke,
                  },
                  type: ot,
                },
              ],
              type: _t,
            },
          ],
          type: _t,
        },
        { error: 'Invalid Configuration: Missing Region', type: to },
      ],
    }
  _d.ruleSet = m8
})
var R0 = h((yd) => {
  'use strict'
  Object.defineProperty(yd, '__esModule', { value: !0 })
  yd.defaultEndpointResolver = void 0
  var g8 = en(),
    Df = Qr(),
    h8 = P0(),
    _8 = new Df.EndpointCache({
      size: 50,
      params: ['Endpoint', 'Region', 'UseDualStack', 'UseFIPS'],
    }),
    y8 = (e, t = {}) =>
      _8.get(e, () =>
        (0, Df.resolveEndpoint)(h8.ruleSet, {
          endpointParams: e,
          logger: t.logger,
        })
      )
  yd.defaultEndpointResolver = y8
  Df.customEndpointFunctions.aws = g8.awsEndpointFunctions
})
var A0 = h((vd) => {
  'use strict'
  Object.defineProperty(vd, '__esModule', { value: !0 })
  vd.getRuntimeConfig = void 0
  var v8 = (oe(), F(Je)),
    E8 = D(),
    S8 = ur(),
    C0 = i0(),
    O0 = Af(),
    w8 = $u(),
    b8 = R0(),
    P8 = (e) => ({
      apiVersion: '2017-10-17',
      base64Decoder: e?.base64Decoder ?? C0.fromBase64,
      base64Encoder: e?.base64Encoder ?? C0.toBase64,
      disableHostPrefix: e?.disableHostPrefix ?? !1,
      endpointProvider: e?.endpointProvider ?? b8.defaultEndpointResolver,
      extensions: e?.extensions ?? [],
      httpAuthSchemeProvider:
        e?.httpAuthSchemeProvider ??
        w8.defaultSecretsManagerHttpAuthSchemeProvider,
      httpAuthSchemes: e?.httpAuthSchemes ?? [
        {
          schemeId: 'aws.auth#sigv4',
          identityProvider: (t) => t.getIdentityProvider('aws.auth#sigv4'),
          signer: new v8.AwsSdkSigV4Signer(),
        },
      ],
      logger: e?.logger ?? new E8.NoOpLogger(),
      serviceId: e?.serviceId ?? 'Secrets Manager',
      urlParser: e?.urlParser ?? S8.parseUrl,
      utf8Decoder: e?.utf8Decoder ?? O0.fromUtf8,
      utf8Encoder: e?.utf8Encoder ?? O0.toUtf8,
    })
  vd.getRuntimeConfig = P8
})
var D0 = h((Sd) => {
  'use strict'
  Object.defineProperty(Sd, '__esModule', { value: !0 })
  Sd.getRuntimeConfig = void 0
  var R8 = (Ba(), F($a)),
    C8 = R8.__importDefault(lw()),
    x0 = (oe(), F(Je)),
    O8 = XO(),
    T0 = is(),
    Ed = Qe(),
    A8 = as(),
    I0 = ut(),
    Or = It(),
    N0 = Xt(),
    x8 = cs(),
    T8 = bn(),
    I8 = A0(),
    N8 = D(),
    D8 = us(),
    k8 = D(),
    M8 = (e) => {
      ;(0, k8.emitWarningIfUnsupportedVersion)(process.version)
      let t = (0, D8.resolveDefaultsModeConfig)(e),
        r = () => t().then(N8.loadConfigsForDefaultMode),
        n = (0, I8.getRuntimeConfig)(e)
      ;(0, x0.emitWarningIfUnsupportedVersion)(process.version)
      let o = { profile: e?.profile }
      return {
        ...n,
        ...e,
        runtime: 'node',
        defaultsMode: t,
        authSchemePreference:
          e?.authSchemePreference ??
          (0, Or.loadConfig)(x0.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, o),
        bodyLengthChecker: e?.bodyLengthChecker ?? x8.calculateBodyLength,
        credentialDefaultProvider:
          e?.credentialDefaultProvider ?? O8.defaultProvider,
        defaultUserAgentProvider:
          e?.defaultUserAgentProvider ??
          (0, T0.createDefaultUserAgentProvider)({
            serviceId: n.serviceId,
            clientVersion: C8.default.version,
          }),
        maxAttempts:
          e?.maxAttempts ??
          (0, Or.loadConfig)(I0.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
        region:
          e?.region ??
          (0, Or.loadConfig)(Ed.NODE_REGION_CONFIG_OPTIONS, {
            ...Ed.NODE_REGION_CONFIG_FILE_OPTIONS,
            ...o,
          }),
        requestHandler: N0.NodeHttpHandler.create(e?.requestHandler ?? r),
        retryMode:
          e?.retryMode ??
          (0, Or.loadConfig)(
            {
              ...I0.NODE_RETRY_MODE_CONFIG_OPTIONS,
              default: async () =>
                (await r()).retryMode || T8.DEFAULT_RETRY_MODE,
            },
            e
          ),
        sha256: e?.sha256 ?? A8.Hash.bind(null, 'sha256'),
        streamCollector: e?.streamCollector ?? N0.streamCollector,
        useDualstackEndpoint:
          e?.useDualstackEndpoint ??
          (0, Or.loadConfig)(Ed.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, o),
        useFipsEndpoint:
          e?.useFipsEndpoint ??
          (0, Or.loadConfig)(Ed.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, o),
        userAgentAppId:
          e?.userAgentAppId ??
          (0, Or.loadConfig)(T0.NODE_APP_ID_CONFIG_OPTIONS, o),
      }
    }
  Sd.getRuntimeConfig = M8
})
var OA = h((Y5, CA) => {
  'use strict'
  var wd = Object.defineProperty,
    U8 = Object.getOwnPropertyDescriptor,
    F8 = Object.getOwnPropertyNames,
    L8 = Object.prototype.hasOwnProperty,
    m = (e, t) => wd(e, 'name', { value: t, configurable: !0 }),
    j8 = (e, t) => {
      for (var r in t) wd(e, r, { get: t[r], enumerable: !0 })
    },
    H8 = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let o of F8(t))
          !L8.call(e, o) &&
            o !== r &&
            wd(e, o, {
              get: () => t[o],
              enumerable: !(n = U8(t, o)) || n.enumerable,
            })
      return e
    },
    q8 = (e) => H8(wd({}, '__esModule', { value: !0 }), e),
    j0 = {}
  j8(j0, {
    BatchGetSecretValueCommand: () => Mf,
    BatchGetSecretValueResponseFilterSensitiveLog: () => Z0,
    CancelRotateSecretCommand: () => sA,
    CreateSecretCommand: () => iA,
    CreateSecretRequestFilterSensitiveLog: () => eA,
    DecryptionFailure: () => H0,
    DeleteResourcePolicyCommand: () => aA,
    DeleteSecretCommand: () => cA,
    DescribeSecretCommand: () => dA,
    EncryptionFailure: () => z0,
    FilterNameStringType: () => X8,
    GetRandomPasswordCommand: () => lA,
    GetRandomPasswordResponseFilterSensitiveLog: () => tA,
    GetResourcePolicyCommand: () => uA,
    GetSecretValueCommand: () => pA,
    GetSecretValueResponseFilterSensitiveLog: () => rA,
    InternalServiceError: () => q0,
    InvalidNextTokenException: () => $0,
    InvalidParameterException: () => B0,
    InvalidRequestException: () => V0,
    LimitExceededException: () => W0,
    ListSecretVersionIdsCommand: () => Ff,
    ListSecretsCommand: () => Uf,
    MalformedPolicyDocumentException: () => K0,
    PreconditionNotMetException: () => Y0,
    PublicPolicyException: () => X0,
    PutResourcePolicyCommand: () => fA,
    PutSecretValueCommand: () => mA,
    PutSecretValueRequestFilterSensitiveLog: () => nA,
    RemoveRegionsFromReplicationCommand: () => gA,
    ReplicateSecretToRegionsCommand: () => hA,
    ResourceExistsException: () => J0,
    ResourceNotFoundException: () => G0,
    RestoreSecretCommand: () => _A,
    RotateSecretCommand: () => yA,
    SecretValueEntryFilterSensitiveLog: () => Q0,
    SecretsManager: () => RA,
    SecretsManagerClient: () => Ws,
    SecretsManagerServiceException: () => we,
    SortOrderType: () => Z8,
    StatusType: () => Q8,
    StopReplicationToReplicaCommand: () => vA,
    TagResourceCommand: () => EA,
    UntagResourceCommand: () => SA,
    UpdateSecretCommand: () => wA,
    UpdateSecretRequestFilterSensitiveLog: () => oA,
    UpdateSecretVersionStageCommand: () => bA,
    ValidateResourcePolicyCommand: () => PA,
    __Client: () => p.Client,
    paginateBatchGetSecretValue: () => Cz,
    paginateListSecretVersionIds: () => Oz,
    paginateListSecrets: () => Az,
  })
  CA.exports = q8(j0)
  var k0 = To(),
    $8 = Io(),
    B8 = No(),
    M0 = _n(),
    V8 = Qe(),
    ro = (_e(), F(Yr)),
    G8 = Jo(),
    B = Nt(),
    U0 = ut(),
    F0 = $u(),
    z8 = m(
      (e) =>
        Object.assign(e, {
          useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
          useFipsEndpoint: e.useFipsEndpoint ?? !1,
          defaultSigningName: 'secretsmanager',
        }),
      'resolveClientEndpointParameters'
    ),
    W = {
      UseFIPS: { type: 'builtInParams', name: 'useFipsEndpoint' },
      Endpoint: { type: 'builtInParams', name: 'endpoint' },
      Region: { type: 'builtInParams', name: 'region' },
      UseDualStack: {
        type: 'builtInParams',
        name: 'useDualstackEndpoint',
      },
    },
    W8 = D0(),
    L0 = ps(),
    kf = X(),
    p = D(),
    K8 = m((e) => {
      let t = e.httpAuthSchemes,
        r = e.httpAuthSchemeProvider,
        n = e.credentials
      return {
        setHttpAuthScheme(o) {
          let s = t.findIndex((i) => i.schemeId === o.schemeId)
          s === -1 ? t.push(o) : t.splice(s, 1, o)
        },
        httpAuthSchemes() {
          return t
        },
        setHttpAuthSchemeProvider(o) {
          r = o
        },
        httpAuthSchemeProvider() {
          return r
        },
        setCredentials(o) {
          n = o
        },
        credentials() {
          return n
        },
      }
    }, 'getHttpAuthExtensionConfiguration'),
    Y8 = m(
      (e) => ({
        httpAuthSchemes: e.httpAuthSchemes(),
        httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
        credentials: e.credentials(),
      }),
      'resolveHttpAuthRuntimeConfig'
    ),
    J8 = m((e, t) => {
      let r = Object.assign(
        (0, L0.getAwsRegionExtensionConfiguration)(e),
        (0, p.getDefaultExtensionConfiguration)(e),
        (0, kf.getHttpHandlerExtensionConfiguration)(e),
        K8(e)
      )
      return (
        t.forEach((n) => n.configure(r)),
        Object.assign(
          e,
          (0, L0.resolveAwsRegionExtensionConfiguration)(r),
          (0, p.resolveDefaultRuntimeConfig)(r),
          (0, kf.resolveHttpHandlerRuntimeConfig)(r),
          Y8(r)
        )
      )
    }, 'resolveRuntimeExtensions'),
    no,
    Ws =
      ((no = class extends p.Client {
        constructor(...[r]) {
          let n = (0, W8.getRuntimeConfig)(r || {})
          super(n)
          y(this, 'config')
          this.initConfig = n
          let o = z8(n),
            s = (0, M0.resolveUserAgentConfig)(o),
            i = (0, U0.resolveRetryConfig)(s),
            a = (0, V8.resolveRegionConfig)(i),
            c = (0, k0.resolveHostHeaderConfig)(a),
            d = (0, B.resolveEndpointConfig)(c),
            l = (0, F0.resolveHttpAuthSchemeConfig)(d),
            u = J8(l, r?.extensions || [])
          ;(this.config = u),
            this.middlewareStack.use((0, M0.getUserAgentPlugin)(this.config)),
            this.middlewareStack.use((0, U0.getRetryPlugin)(this.config)),
            this.middlewareStack.use(
              (0, G8.getContentLengthPlugin)(this.config)
            ),
            this.middlewareStack.use((0, k0.getHostHeaderPlugin)(this.config)),
            this.middlewareStack.use((0, $8.getLoggerPlugin)(this.config)),
            this.middlewareStack.use(
              (0, B8.getRecursionDetectionPlugin)(this.config)
            ),
            this.middlewareStack.use(
              (0, ro.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                httpAuthSchemeParametersProvider:
                  F0.defaultSecretsManagerHttpAuthSchemeParametersProvider,
                identityProviderConfigProvider: m(
                  async (f) =>
                    new ro.DefaultIdentityProviderConfig({
                      'aws.auth#sigv4': f.credentials,
                    }),
                  'identityProviderConfigProvider'
                ),
              })
            ),
            this.middlewareStack.use((0, ro.getHttpSigningPlugin)(this.config))
        }
        destroy() {
          super.destroy()
        }
      }),
      m(no, 'SecretsManagerClient'),
      no),
    K = Et(),
    Ar,
    we =
      ((Ar = class extends p.ServiceException {
        constructor(t) {
          super(t), Object.setPrototypeOf(this, Ar.prototype)
        }
      }),
      m(Ar, 'SecretsManagerServiceException'),
      Ar),
    X8 = {
      all: 'all',
      description: 'description',
      name: 'name',
      owning_service: 'owning-service',
      primary_region: 'primary-region',
      tag_key: 'tag-key',
      tag_value: 'tag-value',
    },
    xr,
    H0 =
      ((xr = class extends we {
        constructor(r) {
          super({ name: 'DecryptionFailure', $fault: 'client', ...r })
          y(this, 'name', 'DecryptionFailure')
          y(this, '$fault', 'client')
          y(this, 'Message')
          Object.setPrototypeOf(this, xr.prototype), (this.Message = r.Message)
        }
      }),
      m(xr, 'DecryptionFailure'),
      xr),
    Tr,
    q0 =
      ((Tr = class extends we {
        constructor(r) {
          super({
            name: 'InternalServiceError',
            $fault: 'server',
            ...r,
          })
          y(this, 'name', 'InternalServiceError')
          y(this, '$fault', 'server')
          y(this, 'Message')
          Object.setPrototypeOf(this, Tr.prototype), (this.Message = r.Message)
        }
      }),
      m(Tr, 'InternalServiceError'),
      Tr),
    Ir,
    $0 =
      ((Ir = class extends we {
        constructor(r) {
          super({
            name: 'InvalidNextTokenException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'InvalidNextTokenException')
          y(this, '$fault', 'client')
          y(this, 'Message')
          Object.setPrototypeOf(this, Ir.prototype), (this.Message = r.Message)
        }
      }),
      m(Ir, 'InvalidNextTokenException'),
      Ir),
    Nr,
    B0 =
      ((Nr = class extends we {
        constructor(r) {
          super({
            name: 'InvalidParameterException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'InvalidParameterException')
          y(this, '$fault', 'client')
          y(this, 'Message')
          Object.setPrototypeOf(this, Nr.prototype), (this.Message = r.Message)
        }
      }),
      m(Nr, 'InvalidParameterException'),
      Nr),
    Dr,
    V0 =
      ((Dr = class extends we {
        constructor(r) {
          super({
            name: 'InvalidRequestException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'InvalidRequestException')
          y(this, '$fault', 'client')
          y(this, 'Message')
          Object.setPrototypeOf(this, Dr.prototype), (this.Message = r.Message)
        }
      }),
      m(Dr, 'InvalidRequestException'),
      Dr),
    kr,
    G0 =
      ((kr = class extends we {
        constructor(r) {
          super({
            name: 'ResourceNotFoundException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'ResourceNotFoundException')
          y(this, '$fault', 'client')
          y(this, 'Message')
          Object.setPrototypeOf(this, kr.prototype), (this.Message = r.Message)
        }
      }),
      m(kr, 'ResourceNotFoundException'),
      kr),
    Q8 = { Failed: 'Failed', InProgress: 'InProgress', InSync: 'InSync' },
    Mr,
    z0 =
      ((Mr = class extends we {
        constructor(r) {
          super({ name: 'EncryptionFailure', $fault: 'client', ...r })
          y(this, 'name', 'EncryptionFailure')
          y(this, '$fault', 'client')
          y(this, 'Message')
          Object.setPrototypeOf(this, Mr.prototype), (this.Message = r.Message)
        }
      }),
      m(Mr, 'EncryptionFailure'),
      Mr),
    Ur,
    W0 =
      ((Ur = class extends we {
        constructor(r) {
          super({
            name: 'LimitExceededException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'LimitExceededException')
          y(this, '$fault', 'client')
          y(this, 'Message')
          Object.setPrototypeOf(this, Ur.prototype), (this.Message = r.Message)
        }
      }),
      m(Ur, 'LimitExceededException'),
      Ur),
    Fr,
    K0 =
      ((Fr = class extends we {
        constructor(r) {
          super({
            name: 'MalformedPolicyDocumentException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'MalformedPolicyDocumentException')
          y(this, '$fault', 'client')
          y(this, 'Message')
          Object.setPrototypeOf(this, Fr.prototype), (this.Message = r.Message)
        }
      }),
      m(Fr, 'MalformedPolicyDocumentException'),
      Fr),
    Lr,
    Y0 =
      ((Lr = class extends we {
        constructor(r) {
          super({
            name: 'PreconditionNotMetException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'PreconditionNotMetException')
          y(this, '$fault', 'client')
          y(this, 'Message')
          Object.setPrototypeOf(this, Lr.prototype), (this.Message = r.Message)
        }
      }),
      m(Lr, 'PreconditionNotMetException'),
      Lr),
    jr,
    J0 =
      ((jr = class extends we {
        constructor(r) {
          super({
            name: 'ResourceExistsException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'ResourceExistsException')
          y(this, '$fault', 'client')
          y(this, 'Message')
          Object.setPrototypeOf(this, jr.prototype), (this.Message = r.Message)
        }
      }),
      m(jr, 'ResourceExistsException'),
      jr),
    Z8 = { asc: 'asc', desc: 'desc' },
    Hr,
    X0 =
      ((Hr = class extends we {
        constructor(r) {
          super({
            name: 'PublicPolicyException',
            $fault: 'client',
            ...r,
          })
          y(this, 'name', 'PublicPolicyException')
          y(this, '$fault', 'client')
          y(this, 'Message')
          Object.setPrototypeOf(this, Hr.prototype), (this.Message = r.Message)
        }
      }),
      m(Hr, 'PublicPolicyException'),
      Hr),
    Q0 = m(
      (e) => ({
        ...e,
        ...(e.SecretBinary && { SecretBinary: p.SENSITIVE_STRING }),
        ...(e.SecretString && { SecretString: p.SENSITIVE_STRING }),
      }),
      'SecretValueEntryFilterSensitiveLog'
    ),
    Z0 = m(
      (e) => ({
        ...e,
        ...(e.SecretValues && {
          SecretValues: e.SecretValues.map((t) => Q0(t)),
        }),
      }),
      'BatchGetSecretValueResponseFilterSensitiveLog'
    ),
    eA = m(
      (e) => ({
        ...e,
        ...(e.SecretBinary && { SecretBinary: p.SENSITIVE_STRING }),
        ...(e.SecretString && { SecretString: p.SENSITIVE_STRING }),
      }),
      'CreateSecretRequestFilterSensitiveLog'
    ),
    tA = m(
      (e) => ({
        ...e,
        ...(e.RandomPassword && { RandomPassword: p.SENSITIVE_STRING }),
      }),
      'GetRandomPasswordResponseFilterSensitiveLog'
    ),
    rA = m(
      (e) => ({
        ...e,
        ...(e.SecretBinary && { SecretBinary: p.SENSITIVE_STRING }),
        ...(e.SecretString && { SecretString: p.SENSITIVE_STRING }),
      }),
      'GetSecretValueResponseFilterSensitiveLog'
    ),
    nA = m(
      (e) => ({
        ...e,
        ...(e.SecretBinary && { SecretBinary: p.SENSITIVE_STRING }),
        ...(e.SecretString && { SecretString: p.SENSITIVE_STRING }),
        ...(e.RotationToken && { RotationToken: p.SENSITIVE_STRING }),
      }),
      'PutSecretValueRequestFilterSensitiveLog'
    ),
    oA = m(
      (e) => ({
        ...e,
        ...(e.SecretBinary && { SecretBinary: p.SENSITIVE_STRING }),
        ...(e.SecretString && { SecretString: p.SENSITIVE_STRING }),
      }),
      'UpdateSecretRequestFilterSensitiveLog'
    ),
    z = (oe(), F(Je)),
    bd = (Nu(), F(Iu)),
    eG = m(async (e, t) => {
      let r = V('BatchGetSecretValue'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_BatchGetSecretValueCommand'),
    tG = m(async (e, t) => {
      let r = V('CancelRotateSecret'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_CancelRotateSecretCommand'),
    rG = m(async (e, t) => {
      let r = V('CreateSecret'),
        n
      return (n = JSON.stringify(oz(e, t))), J(t, r, '/', void 0, n)
    }, 'se_CreateSecretCommand'),
    nG = m(async (e, t) => {
      let r = V('DeleteResourcePolicy'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_DeleteResourcePolicyCommand'),
    oG = m(async (e, t) => {
      let r = V('DeleteSecret'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_DeleteSecretCommand'),
    sG = m(async (e, t) => {
      let r = V('DescribeSecret'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_DescribeSecretCommand'),
    iG = m(async (e, t) => {
      let r = V('GetRandomPassword'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_GetRandomPasswordCommand'),
    aG = m(async (e, t) => {
      let r = V('GetResourcePolicy'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_GetResourcePolicyCommand'),
    cG = m(async (e, t) => {
      let r = V('GetSecretValue'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_GetSecretValueCommand'),
    dG = m(async (e, t) => {
      let r = V('ListSecrets'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_ListSecretsCommand'),
    lG = m(async (e, t) => {
      let r = V('ListSecretVersionIds'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_ListSecretVersionIdsCommand'),
    uG = m(async (e, t) => {
      let r = V('PutResourcePolicy'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_PutResourcePolicyCommand'),
    pG = m(async (e, t) => {
      let r = V('PutSecretValue'),
        n
      return (n = JSON.stringify(sz(e, t))), J(t, r, '/', void 0, n)
    }, 'se_PutSecretValueCommand'),
    fG = m(async (e, t) => {
      let r = V('RemoveRegionsFromReplication'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_RemoveRegionsFromReplicationCommand'),
    mG = m(async (e, t) => {
      let r = V('ReplicateSecretToRegions'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_ReplicateSecretToRegionsCommand'),
    gG = m(async (e, t) => {
      let r = V('RestoreSecret'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_RestoreSecretCommand'),
    hG = m(async (e, t) => {
      let r = V('RotateSecret'),
        n
      return (n = JSON.stringify(iz(e, t))), J(t, r, '/', void 0, n)
    }, 'se_RotateSecretCommand'),
    _G = m(async (e, t) => {
      let r = V('StopReplicationToReplica'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_StopReplicationToReplicaCommand'),
    yG = m(async (e, t) => {
      let r = V('TagResource'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_TagResourceCommand'),
    vG = m(async (e, t) => {
      let r = V('UntagResource'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_UntagResourceCommand'),
    EG = m(async (e, t) => {
      let r = V('UpdateSecret'),
        n
      return (n = JSON.stringify(az(e, t))), J(t, r, '/', void 0, n)
    }, 'se_UpdateSecretCommand'),
    SG = m(async (e, t) => {
      let r = V('UpdateSecretVersionStage'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_UpdateSecretVersionStageCommand'),
    wG = m(async (e, t) => {
      let r = V('ValidateResourcePolicy'),
        n
      return (n = JSON.stringify((0, p._json)(e))), J(t, r, '/', void 0, n)
    }, 'se_ValidateResourcePolicyCommand'),
    bG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = cz(r, t)), { $metadata: k(e), ...n }
    }, 'de_BatchGetSecretValueCommand'),
    PG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = (0, p._json)(r)), { $metadata: k(e), ...n }
    }, 'de_CancelRotateSecretCommand'),
    RG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = dz(r, t)), { $metadata: k(e), ...n }
    }, 'de_CreateSecretCommand'),
    CG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = (0, p._json)(r)), { $metadata: k(e), ...n }
    }, 'de_DeleteResourcePolicyCommand'),
    OG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = lz(r, t)), { $metadata: k(e), ...n }
    }, 'de_DeleteSecretCommand'),
    AG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = uz(r, t)), { $metadata: k(e), ...n }
    }, 'de_DescribeSecretCommand'),
    xG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = (0, p._json)(r)), { $metadata: k(e), ...n }
    }, 'de_GetRandomPasswordCommand'),
    TG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = (0, p._json)(r)), { $metadata: k(e), ...n }
    }, 'de_GetResourcePolicyCommand'),
    IG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = pz(r, t)), { $metadata: k(e), ...n }
    }, 'de_GetSecretValueCommand'),
    NG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = fz(r, t)), { $metadata: k(e), ...n }
    }, 'de_ListSecretsCommand'),
    DG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = mz(r, t)), { $metadata: k(e), ...n }
    }, 'de_ListSecretVersionIdsCommand'),
    kG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = (0, p._json)(r)), { $metadata: k(e), ...n }
    }, 'de_PutResourcePolicyCommand'),
    MG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = (0, p._json)(r)), { $metadata: k(e), ...n }
    }, 'de_PutSecretValueCommand'),
    UG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = gz(r, t)), { $metadata: k(e), ...n }
    }, 'de_RemoveRegionsFromReplicationCommand'),
    FG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = hz(r, t)), { $metadata: k(e), ...n }
    }, 'de_ReplicateSecretToRegionsCommand'),
    LG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = (0, p._json)(r)), { $metadata: k(e), ...n }
    }, 'de_RestoreSecretCommand'),
    jG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = (0, p._json)(r)), { $metadata: k(e), ...n }
    }, 'de_RotateSecretCommand'),
    HG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = (0, p._json)(r)), { $metadata: k(e), ...n }
    }, 'de_StopReplicationToReplicaCommand'),
    qG = m(
      async (e, t) =>
        e.statusCode >= 300
          ? Y(e, t)
          : (await (0, p.collectBody)(e.body, t), { $metadata: k(e) }),
      'de_TagResourceCommand'
    ),
    $G = m(
      async (e, t) =>
        e.statusCode >= 300
          ? Y(e, t)
          : (await (0, p.collectBody)(e.body, t), { $metadata: k(e) }),
      'de_UntagResourceCommand'
    ),
    BG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = (0, p._json)(r)), { $metadata: k(e), ...n }
    }, 'de_UpdateSecretCommand'),
    VG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = (0, p._json)(r)), { $metadata: k(e), ...n }
    }, 'de_UpdateSecretVersionStageCommand'),
    GG = m(async (e, t) => {
      if (e.statusCode >= 300) return Y(e, t)
      let r = await (0, z.parseJsonBody)(e.body, t),
        n = {}
      return (n = (0, p._json)(r)), { $metadata: k(e), ...n }
    }, 'de_ValidateResourcePolicyCommand'),
    Y = m(async (e, t) => {
      let r = { ...e, body: await (0, z.parseJsonErrorBody)(e.body, t) },
        n = (0, z.loadRestJsonErrorCode)(e, r.body)
      switch (n) {
        case 'DecryptionFailure':
        case 'com.amazonaws.secretsmanager#DecryptionFailure':
          throw await zG(r, t)
        case 'InternalServiceError':
        case 'com.amazonaws.secretsmanager#InternalServiceError':
          throw await KG(r, t)
        case 'InvalidNextTokenException':
        case 'com.amazonaws.secretsmanager#InvalidNextTokenException':
          throw await YG(r, t)
        case 'InvalidParameterException':
        case 'com.amazonaws.secretsmanager#InvalidParameterException':
          throw await JG(r, t)
        case 'InvalidRequestException':
        case 'com.amazonaws.secretsmanager#InvalidRequestException':
          throw await XG(r, t)
        case 'ResourceNotFoundException':
        case 'com.amazonaws.secretsmanager#ResourceNotFoundException':
          throw await nz(r, t)
        case 'EncryptionFailure':
        case 'com.amazonaws.secretsmanager#EncryptionFailure':
          throw await WG(r, t)
        case 'LimitExceededException':
        case 'com.amazonaws.secretsmanager#LimitExceededException':
          throw await QG(r, t)
        case 'MalformedPolicyDocumentException':
        case 'com.amazonaws.secretsmanager#MalformedPolicyDocumentException':
          throw await ZG(r, t)
        case 'PreconditionNotMetException':
        case 'com.amazonaws.secretsmanager#PreconditionNotMetException':
          throw await ez(r, t)
        case 'ResourceExistsException':
        case 'com.amazonaws.secretsmanager#ResourceExistsException':
          throw await rz(r, t)
        case 'PublicPolicyException':
        case 'com.amazonaws.secretsmanager#PublicPolicyException':
          throw await tz(r, t)
        default:
          let o = r.body
          return Pz({ output: e, parsedBody: o, errorCode: n })
      }
    }, 'de_CommandError'),
    zG = m(async (e, t) => {
      let r = e.body,
        n = (0, p._json)(r),
        o = new H0({ $metadata: k(e), ...n })
      return (0, p.decorateServiceException)(o, r)
    }, 'de_DecryptionFailureRes'),
    WG = m(async (e, t) => {
      let r = e.body,
        n = (0, p._json)(r),
        o = new z0({ $metadata: k(e), ...n })
      return (0, p.decorateServiceException)(o, r)
    }, 'de_EncryptionFailureRes'),
    KG = m(async (e, t) => {
      let r = e.body,
        n = (0, p._json)(r),
        o = new q0({ $metadata: k(e), ...n })
      return (0, p.decorateServiceException)(o, r)
    }, 'de_InternalServiceErrorRes'),
    YG = m(async (e, t) => {
      let r = e.body,
        n = (0, p._json)(r),
        o = new $0({ $metadata: k(e), ...n })
      return (0, p.decorateServiceException)(o, r)
    }, 'de_InvalidNextTokenExceptionRes'),
    JG = m(async (e, t) => {
      let r = e.body,
        n = (0, p._json)(r),
        o = new B0({ $metadata: k(e), ...n })
      return (0, p.decorateServiceException)(o, r)
    }, 'de_InvalidParameterExceptionRes'),
    XG = m(async (e, t) => {
      let r = e.body,
        n = (0, p._json)(r),
        o = new V0({ $metadata: k(e), ...n })
      return (0, p.decorateServiceException)(o, r)
    }, 'de_InvalidRequestExceptionRes'),
    QG = m(async (e, t) => {
      let r = e.body,
        n = (0, p._json)(r),
        o = new W0({ $metadata: k(e), ...n })
      return (0, p.decorateServiceException)(o, r)
    }, 'de_LimitExceededExceptionRes'),
    ZG = m(async (e, t) => {
      let r = e.body,
        n = (0, p._json)(r),
        o = new K0({ $metadata: k(e), ...n })
      return (0, p.decorateServiceException)(o, r)
    }, 'de_MalformedPolicyDocumentExceptionRes'),
    ez = m(async (e, t) => {
      let r = e.body,
        n = (0, p._json)(r),
        o = new Y0({ $metadata: k(e), ...n })
      return (0, p.decorateServiceException)(o, r)
    }, 'de_PreconditionNotMetExceptionRes'),
    tz = m(async (e, t) => {
      let r = e.body,
        n = (0, p._json)(r),
        o = new X0({ $metadata: k(e), ...n })
      return (0, p.decorateServiceException)(o, r)
    }, 'de_PublicPolicyExceptionRes'),
    rz = m(async (e, t) => {
      let r = e.body,
        n = (0, p._json)(r),
        o = new J0({ $metadata: k(e), ...n })
      return (0, p.decorateServiceException)(o, r)
    }, 'de_ResourceExistsExceptionRes'),
    nz = m(async (e, t) => {
      let r = e.body,
        n = (0, p._json)(r),
        o = new G0({ $metadata: k(e), ...n })
      return (0, p.decorateServiceException)(o, r)
    }, 'de_ResourceNotFoundExceptionRes'),
    oz = m(
      (e, t) =>
        (0, p.take)(e, {
          AddReplicaRegions: p._json,
          ClientRequestToken: [!0, (r) => r ?? (0, bd.v4)()],
          Description: [],
          ForceOverwriteReplicaSecret: [],
          KmsKeyId: [],
          Name: [],
          SecretBinary: t.base64Encoder,
          SecretString: [],
          Tags: p._json,
        }),
      'se_CreateSecretRequest'
    ),
    sz = m(
      (e, t) =>
        (0, p.take)(e, {
          ClientRequestToken: [!0, (r) => r ?? (0, bd.v4)()],
          RotationToken: [],
          SecretBinary: t.base64Encoder,
          SecretId: [],
          SecretString: [],
          VersionStages: p._json,
        }),
      'se_PutSecretValueRequest'
    ),
    iz = m(
      (e, t) =>
        (0, p.take)(e, {
          ClientRequestToken: [!0, (r) => r ?? (0, bd.v4)()],
          RotateImmediately: [],
          RotationLambdaARN: [],
          RotationRules: p._json,
          SecretId: [],
        }),
      'se_RotateSecretRequest'
    ),
    az = m(
      (e, t) =>
        (0, p.take)(e, {
          ClientRequestToken: [!0, (r) => r ?? (0, bd.v4)()],
          Description: [],
          KmsKeyId: [],
          SecretBinary: t.base64Encoder,
          SecretId: [],
          SecretString: [],
        }),
      'se_UpdateSecretRequest'
    ),
    cz = m(
      (e, t) =>
        (0, p.take)(e, {
          Errors: p._json,
          NextToken: p.expectString,
          SecretValues: m((r) => Sz(r, t), 'SecretValues'),
        }),
      'de_BatchGetSecretValueResponse'
    ),
    dz = m(
      (e, t) =>
        (0, p.take)(e, {
          ARN: p.expectString,
          Name: p.expectString,
          ReplicationStatus: m((r) => Pd(r, t), 'ReplicationStatus'),
          VersionId: p.expectString,
        }),
      'de_CreateSecretResponse'
    ),
    lz = m(
      (e, t) =>
        (0, p.take)(e, {
          ARN: p.expectString,
          DeletionDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'DeletionDate'
          ),
          Name: p.expectString,
        }),
      'de_DeleteSecretResponse'
    ),
    uz = m(
      (e, t) =>
        (0, p.take)(e, {
          ARN: p.expectString,
          CreatedDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'CreatedDate'
          ),
          DeletedDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'DeletedDate'
          ),
          Description: p.expectString,
          KmsKeyId: p.expectString,
          LastAccessedDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'LastAccessedDate'
          ),
          LastChangedDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'LastChangedDate'
          ),
          LastRotatedDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'LastRotatedDate'
          ),
          Name: p.expectString,
          NextRotationDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'NextRotationDate'
          ),
          OwningService: p.expectString,
          PrimaryRegion: p.expectString,
          ReplicationStatus: m((r) => Pd(r, t), 'ReplicationStatus'),
          RotationEnabled: p.expectBoolean,
          RotationLambdaARN: p.expectString,
          RotationRules: p._json,
          Tags: p._json,
          VersionIdsToStages: p._json,
        }),
      'de_DescribeSecretResponse'
    ),
    pz = m(
      (e, t) =>
        (0, p.take)(e, {
          ARN: p.expectString,
          CreatedDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'CreatedDate'
          ),
          Name: p.expectString,
          SecretBinary: t.base64Decoder,
          SecretString: p.expectString,
          VersionId: p.expectString,
          VersionStages: p._json,
        }),
      'de_GetSecretValueResponse'
    ),
    fz = m(
      (e, t) =>
        (0, p.take)(e, {
          NextToken: p.expectString,
          SecretList: m((r) => vz(r, t), 'SecretList'),
        }),
      'de_ListSecretsResponse'
    ),
    mz = m(
      (e, t) =>
        (0, p.take)(e, {
          ARN: p.expectString,
          Name: p.expectString,
          NextToken: p.expectString,
          Versions: m((r) => bz(r, t), 'Versions'),
        }),
      'de_ListSecretVersionIdsResponse'
    ),
    gz = m(
      (e, t) =>
        (0, p.take)(e, {
          ARN: p.expectString,
          ReplicationStatus: m((r) => Pd(r, t), 'ReplicationStatus'),
        }),
      'de_RemoveRegionsFromReplicationResponse'
    ),
    hz = m(
      (e, t) =>
        (0, p.take)(e, {
          ARN: p.expectString,
          ReplicationStatus: m((r) => Pd(r, t), 'ReplicationStatus'),
        }),
      'de_ReplicateSecretToRegionsResponse'
    ),
    Pd = m(
      (e, t) => (e || []).filter((n) => n != null).map((n) => _z(n, t)),
      'de_ReplicationStatusListType'
    ),
    _z = m(
      (e, t) =>
        (0, p.take)(e, {
          KmsKeyId: p.expectString,
          LastAccessedDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'LastAccessedDate'
          ),
          Region: p.expectString,
          Status: p.expectString,
          StatusMessage: p.expectString,
        }),
      'de_ReplicationStatusType'
    ),
    yz = m(
      (e, t) =>
        (0, p.take)(e, {
          ARN: p.expectString,
          CreatedDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'CreatedDate'
          ),
          DeletedDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'DeletedDate'
          ),
          Description: p.expectString,
          KmsKeyId: p.expectString,
          LastAccessedDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'LastAccessedDate'
          ),
          LastChangedDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'LastChangedDate'
          ),
          LastRotatedDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'LastRotatedDate'
          ),
          Name: p.expectString,
          NextRotationDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'NextRotationDate'
          ),
          OwningService: p.expectString,
          PrimaryRegion: p.expectString,
          RotationEnabled: p.expectBoolean,
          RotationLambdaARN: p.expectString,
          RotationRules: p._json,
          SecretVersionsToStages: p._json,
          Tags: p._json,
        }),
      'de_SecretListEntry'
    ),
    vz = m(
      (e, t) => (e || []).filter((n) => n != null).map((n) => yz(n, t)),
      'de_SecretListType'
    ),
    Ez = m(
      (e, t) =>
        (0, p.take)(e, {
          ARN: p.expectString,
          CreatedDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'CreatedDate'
          ),
          Name: p.expectString,
          SecretBinary: t.base64Decoder,
          SecretString: p.expectString,
          VersionId: p.expectString,
          VersionStages: p._json,
        }),
      'de_SecretValueEntry'
    ),
    Sz = m(
      (e, t) => (e || []).filter((n) => n != null).map((n) => Ez(n, t)),
      'de_SecretValuesType'
    ),
    wz = m(
      (e, t) =>
        (0, p.take)(e, {
          CreatedDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'CreatedDate'
          ),
          KmsKeyIds: p._json,
          LastAccessedDate: m(
            (r) =>
              (0, p.expectNonNull)(
                (0, p.parseEpochTimestamp)((0, p.expectNumber)(r))
              ),
            'LastAccessedDate'
          ),
          VersionId: p.expectString,
          VersionStages: p._json,
        }),
      'de_SecretVersionsListEntry'
    ),
    bz = m(
      (e, t) => (e || []).filter((n) => n != null).map((n) => wz(n, t)),
      'de_SecretVersionsListType'
    ),
    k = m(
      (e) => ({
        httpStatusCode: e.statusCode,
        requestId:
          e.headers['x-amzn-requestid'] ??
          e.headers['x-amzn-request-id'] ??
          e.headers['x-amz-request-id'],
        extendedRequestId: e.headers['x-amz-id-2'],
        cfId: e.headers['x-amz-cf-id'],
      }),
      'deserializeMetadata'
    ),
    Pz = (0, p.withBaseException)(we),
    J = m(async (e, t, r, n, o) => {
      let {
          hostname: s,
          protocol: i = 'https',
          port: a,
          path: c,
        } = await e.endpoint(),
        d = {
          protocol: i,
          hostname: s,
          port: a,
          method: 'POST',
          path: c.endsWith('/') ? c.slice(0, -1) + r : c + r,
          headers: t,
        }
      return (
        n !== void 0 && (d.hostname = n),
        o !== void 0 && (d.body = o),
        new kf.HttpRequest(d)
      )
    }, 'buildHttpRpcRequest')
  function V(e) {
    return {
      'content-type': 'application/x-amz-json-1.1',
      'x-amz-target': `secretsmanager.${e}`,
    }
  }
  m(V, 'sharedHeaders')
  var oo,
    Mf =
      ((oo = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'BatchGetSecretValue', {})
          .n('SecretsManagerClient', 'BatchGetSecretValueCommand')
          .f(void 0, Z0)
          .ser(eG)
          .de(bG)
          .build()
      ) {}),
      m(oo, 'BatchGetSecretValueCommand'),
      oo),
    so,
    sA =
      ((so = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'CancelRotateSecret', {})
          .n('SecretsManagerClient', 'CancelRotateSecretCommand')
          .f(void 0, void 0)
          .ser(tG)
          .de(PG)
          .build()
      ) {}),
      m(so, 'CancelRotateSecretCommand'),
      so),
    io,
    iA =
      ((io = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'CreateSecret', {})
          .n('SecretsManagerClient', 'CreateSecretCommand')
          .f(eA, void 0)
          .ser(rG)
          .de(RG)
          .build()
      ) {}),
      m(io, 'CreateSecretCommand'),
      io),
    ao,
    aA =
      ((ao = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'DeleteResourcePolicy', {})
          .n('SecretsManagerClient', 'DeleteResourcePolicyCommand')
          .f(void 0, void 0)
          .ser(nG)
          .de(CG)
          .build()
      ) {}),
      m(ao, 'DeleteResourcePolicyCommand'),
      ao),
    co,
    cA =
      ((co = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'DeleteSecret', {})
          .n('SecretsManagerClient', 'DeleteSecretCommand')
          .f(void 0, void 0)
          .ser(oG)
          .de(OG)
          .build()
      ) {}),
      m(co, 'DeleteSecretCommand'),
      co),
    lo,
    dA =
      ((lo = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'DescribeSecret', {})
          .n('SecretsManagerClient', 'DescribeSecretCommand')
          .f(void 0, void 0)
          .ser(sG)
          .de(AG)
          .build()
      ) {}),
      m(lo, 'DescribeSecretCommand'),
      lo),
    uo,
    lA =
      ((uo = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'GetRandomPassword', {})
          .n('SecretsManagerClient', 'GetRandomPasswordCommand')
          .f(void 0, tA)
          .ser(iG)
          .de(xG)
          .build()
      ) {}),
      m(uo, 'GetRandomPasswordCommand'),
      uo),
    po,
    uA =
      ((po = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'GetResourcePolicy', {})
          .n('SecretsManagerClient', 'GetResourcePolicyCommand')
          .f(void 0, void 0)
          .ser(aG)
          .de(TG)
          .build()
      ) {}),
      m(po, 'GetResourcePolicyCommand'),
      po),
    fo,
    pA =
      ((fo = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'GetSecretValue', {})
          .n('SecretsManagerClient', 'GetSecretValueCommand')
          .f(void 0, rA)
          .ser(cG)
          .de(IG)
          .build()
      ) {}),
      m(fo, 'GetSecretValueCommand'),
      fo),
    mo,
    Uf =
      ((mo = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'ListSecrets', {})
          .n('SecretsManagerClient', 'ListSecretsCommand')
          .f(void 0, void 0)
          .ser(dG)
          .de(NG)
          .build()
      ) {}),
      m(mo, 'ListSecretsCommand'),
      mo),
    go,
    Ff =
      ((go = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'ListSecretVersionIds', {})
          .n('SecretsManagerClient', 'ListSecretVersionIdsCommand')
          .f(void 0, void 0)
          .ser(lG)
          .de(DG)
          .build()
      ) {}),
      m(go, 'ListSecretVersionIdsCommand'),
      go),
    ho,
    fA =
      ((ho = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'PutResourcePolicy', {})
          .n('SecretsManagerClient', 'PutResourcePolicyCommand')
          .f(void 0, void 0)
          .ser(uG)
          .de(kG)
          .build()
      ) {}),
      m(ho, 'PutResourcePolicyCommand'),
      ho),
    _o,
    mA =
      ((_o = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'PutSecretValue', {})
          .n('SecretsManagerClient', 'PutSecretValueCommand')
          .f(nA, void 0)
          .ser(pG)
          .de(MG)
          .build()
      ) {}),
      m(_o, 'PutSecretValueCommand'),
      _o),
    yo,
    gA =
      ((yo = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'RemoveRegionsFromReplication', {})
          .n('SecretsManagerClient', 'RemoveRegionsFromReplicationCommand')
          .f(void 0, void 0)
          .ser(fG)
          .de(UG)
          .build()
      ) {}),
      m(yo, 'RemoveRegionsFromReplicationCommand'),
      yo),
    vo,
    hA =
      ((vo = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'ReplicateSecretToRegions', {})
          .n('SecretsManagerClient', 'ReplicateSecretToRegionsCommand')
          .f(void 0, void 0)
          .ser(mG)
          .de(FG)
          .build()
      ) {}),
      m(vo, 'ReplicateSecretToRegionsCommand'),
      vo),
    Eo,
    _A =
      ((Eo = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'RestoreSecret', {})
          .n('SecretsManagerClient', 'RestoreSecretCommand')
          .f(void 0, void 0)
          .ser(gG)
          .de(LG)
          .build()
      ) {}),
      m(Eo, 'RestoreSecretCommand'),
      Eo),
    So,
    yA =
      ((So = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'RotateSecret', {})
          .n('SecretsManagerClient', 'RotateSecretCommand')
          .f(void 0, void 0)
          .ser(hG)
          .de(jG)
          .build()
      ) {}),
      m(So, 'RotateSecretCommand'),
      So),
    wo,
    vA =
      ((wo = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'StopReplicationToReplica', {})
          .n('SecretsManagerClient', 'StopReplicationToReplicaCommand')
          .f(void 0, void 0)
          .ser(_G)
          .de(HG)
          .build()
      ) {}),
      m(wo, 'StopReplicationToReplicaCommand'),
      wo),
    bo,
    EA =
      ((bo = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'TagResource', {})
          .n('SecretsManagerClient', 'TagResourceCommand')
          .f(void 0, void 0)
          .ser(yG)
          .de(qG)
          .build()
      ) {}),
      m(bo, 'TagResourceCommand'),
      bo),
    Po,
    SA =
      ((Po = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'UntagResource', {})
          .n('SecretsManagerClient', 'UntagResourceCommand')
          .f(void 0, void 0)
          .ser(vG)
          .de($G)
          .build()
      ) {}),
      m(Po, 'UntagResourceCommand'),
      Po),
    Ro,
    wA =
      ((Ro = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'UpdateSecret', {})
          .n('SecretsManagerClient', 'UpdateSecretCommand')
          .f(oA, void 0)
          .ser(EG)
          .de(BG)
          .build()
      ) {}),
      m(Ro, 'UpdateSecretCommand'),
      Ro),
    Co,
    bA =
      ((Co = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'UpdateSecretVersionStage', {})
          .n('SecretsManagerClient', 'UpdateSecretVersionStageCommand')
          .f(void 0, void 0)
          .ser(SG)
          .de(VG)
          .build()
      ) {}),
      m(Co, 'UpdateSecretVersionStageCommand'),
      Co),
    Oo,
    PA =
      ((Oo = class extends (
        p.Command.classBuilder()
          .ep(W)
          .m(function (t, r, n, o) {
            return [
              (0, K.getSerdePlugin)(n, this.serialize, this.deserialize),
              (0, B.getEndpointPlugin)(n, t.getEndpointParameterInstructions()),
            ]
          })
          .s('secretsmanager', 'ValidateResourcePolicy', {})
          .n('SecretsManagerClient', 'ValidateResourcePolicyCommand')
          .f(void 0, void 0)
          .ser(wG)
          .de(GG)
          .build()
      ) {}),
      m(Oo, 'ValidateResourcePolicyCommand'),
      Oo),
    Rz = {
      BatchGetSecretValueCommand: Mf,
      CancelRotateSecretCommand: sA,
      CreateSecretCommand: iA,
      DeleteResourcePolicyCommand: aA,
      DeleteSecretCommand: cA,
      DescribeSecretCommand: dA,
      GetRandomPasswordCommand: lA,
      GetResourcePolicyCommand: uA,
      GetSecretValueCommand: pA,
      ListSecretsCommand: Uf,
      ListSecretVersionIdsCommand: Ff,
      PutResourcePolicyCommand: fA,
      PutSecretValueCommand: mA,
      RemoveRegionsFromReplicationCommand: gA,
      ReplicateSecretToRegionsCommand: hA,
      RestoreSecretCommand: _A,
      RotateSecretCommand: yA,
      StopReplicationToReplicaCommand: vA,
      TagResourceCommand: EA,
      UntagResourceCommand: SA,
      UpdateSecretCommand: wA,
      UpdateSecretVersionStageCommand: bA,
      ValidateResourcePolicyCommand: PA,
    },
    Ao,
    RA = ((Ao = class extends Ws {}), m(Ao, 'SecretsManager'), Ao)
  ;(0, p.createAggregatedClient)(Rz, RA)
  var Cz = (0, ro.createPaginator)(
      Ws,
      Mf,
      'NextToken',
      'NextToken',
      'MaxResults'
    ),
    Oz = (0, ro.createPaginator)(
      Ws,
      Ff,
      'NextToken',
      'NextToken',
      'MaxResults'
    ),
    Az = (0, ro.createPaginator)(Ws, Uf, 'NextToken', 'NextToken', 'MaxResults')
})
var Nz = {}
st(Nz, { handler: () => Iz })
module.exports = F(Nz)
var AA = require('child_process'),
  Rd = E(OA(), 1),
  xz = new Rd.SecretsManagerClient({ region: 'ap-northeast-1' })
async function Tz() {
  let e = new Rd.GetSecretValueCommand({
    SecretId: 'amplify/product/dev/DATABASE_URL',
  })
  return (await xz.send(e)).SecretString
}
var Iz = async (e, t) => {
  try {
    return (
      (process.env.PRISMA_CLI_BINARY_TARGETS = 'native,rhel-openssl-3.0.x'),
      (process.env.DATABASE_URL = await Tz()),
      (0, AA.execSync)('npx prisma migrate deploy', { stdio: 'inherit' }),
      {
        statusCode: 200,
        body: JSON.stringify({ message: 'Migration successful' }),
      }
    )
  } catch (r) {
    return (
      console.error('Migration failed:', r),
      {
        statusCode: 500,
        body: JSON.stringify({ message: 'Migration failed' }),
      }
    )
  }
}
0 && (module.exports = { handler })
//# sourceMappingURL=index.js.map
