(() => {
  var Dl = Object.create;
  var Ur = Object.defineProperty;
  var Tl = Object.getOwnPropertyDescriptor;
  var Ol = Object.getOwnPropertyNames;
  var Il = Object.getPrototypeOf,
    Al = Object.prototype.hasOwnProperty;
  var k = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
  var Gl = (t, e, r, i) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let n of Ol(e))
        !Al.call(t, n) &&
          n !== r &&
          Ur(t, n, {
            get: () => e[n],
            enumerable: !(i = Tl(e, n)) || i.enumerable,
          });
    return t;
  };
  var Lt = (t, e, r) => (
    (r = t != null ? Dl(Il(t)) : {}),
    Gl(
      e || !t || !t.__esModule
        ? Ur(r, 'default', { value: t, enumerable: !0 })
        : r,
      t
    )
  );
  var Hr = k((Qm, Kr) => {
    function zl() {
      (this.__data__ = []), (this.size = 0);
    }
    Kr.exports = zl;
  });
  var he = k((t_, Xr) => {
    function Nl(t, e) {
      return t === e || (t !== t && e !== e);
    }
    Xr.exports = Nl;
  });
  var ue = k((e_, Yr) => {
    var Fl = he();
    function Vl(t, e) {
      for (var r = t.length; r--; ) if (Fl(t[r][0], e)) return r;
      return -1;
    }
    Yr.exports = Vl;
  });
  var Zr = k((r_, Jr) => {
    var Ul = ue(),
      jl = Array.prototype,
      Kl = jl.splice;
    function Hl(t) {
      var e = this.__data__,
        r = Ul(e, t);
      if (r < 0) return !1;
      var i = e.length - 1;
      return r == i ? e.pop() : Kl.call(e, r, 1), --this.size, !0;
    }
    Jr.exports = Hl;
  });
  var Wr = k((i_, $r) => {
    var Xl = ue();
    function Yl(t) {
      var e = this.__data__,
        r = Xl(e, t);
      return r < 0 ? void 0 : e[r][1];
    }
    $r.exports = Yl;
  });
  var ti = k((n_, Qr) => {
    var Jl = ue();
    function Zl(t) {
      return Jl(this.__data__, t) > -1;
    }
    Qr.exports = Zl;
  });
  var ri = k((a_, ei) => {
    var $l = ue();
    function Wl(t, e) {
      var r = this.__data__,
        i = $l(r, t);
      return i < 0 ? (++this.size, r.push([t, e])) : (r[i][1] = e), this;
    }
    ei.exports = Wl;
  });
  var ce = k((s_, ii) => {
    var Ql = Hr(),
      th = Zr(),
      eh = Wr(),
      rh = ti(),
      ih = ri();
    function Ut(t) {
      var e = -1,
        r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var i = t[e];
        this.set(i[0], i[1]);
      }
    }
    Ut.prototype.clear = Ql;
    Ut.prototype.delete = th;
    Ut.prototype.get = eh;
    Ut.prototype.has = rh;
    Ut.prototype.set = ih;
    ii.exports = Ut;
  });
  var ai = k((o_, ni) => {
    var nh = ce();
    function ah() {
      (this.__data__ = new nh()), (this.size = 0);
    }
    ni.exports = ah;
  });
  var oi = k((l_, si) => {
    function sh(t) {
      var e = this.__data__,
        r = e.delete(t);
      return (this.size = e.size), r;
    }
    si.exports = sh;
  });
  var hi = k((h_, li) => {
    function oh(t) {
      return this.__data__.get(t);
    }
    li.exports = oh;
  });
  var ci = k((u_, ui) => {
    function lh(t) {
      return this.__data__.has(t);
    }
    ui.exports = lh;
  });
  var Ke = k((c_, pi) => {
    var hh =
      typeof global == 'object' && global && global.Object === Object && global;
    pi.exports = hh;
  });
  var Gt = k((p_, fi) => {
    var uh = Ke(),
      ch = typeof self == 'object' && self && self.Object === Object && self,
      ph = uh || ch || Function('return this')();
    fi.exports = ph;
  });
  var Ee = k((f_, di) => {
    var fh = Gt(),
      dh = fh.Symbol;
    di.exports = dh;
  });
  var yi = k((d_, _i) => {
    var gi = Ee(),
      mi = Object.prototype,
      gh = mi.hasOwnProperty,
      mh = mi.toString,
      pe = gi ? gi.toStringTag : void 0;
    function _h(t) {
      var e = gh.call(t, pe),
        r = t[pe];
      try {
        t[pe] = void 0;
        var i = !0;
      } catch {}
      var n = mh.call(t);
      return i && (e ? (t[pe] = r) : delete t[pe]), n;
    }
    _i.exports = _h;
  });
  var Li = k((g_, vi) => {
    var yh = Object.prototype,
      vh = yh.toString;
    function Lh(t) {
      return vh.call(t);
    }
    vi.exports = Lh;
  });
  var jt = k((m_, Mi) => {
    var bi = Ee(),
      bh = yi(),
      kh = Li(),
      Mh = '[object Null]',
      xh = '[object Undefined]',
      ki = bi ? bi.toStringTag : void 0;
    function wh(t) {
      return t == null
        ? t === void 0
          ? xh
          : Mh
        : ki && ki in Object(t)
          ? bh(t)
          : kh(t);
    }
    Mi.exports = wh;
  });
  var Et = k((__, xi) => {
    function Ch(t) {
      var e = typeof t;
      return t != null && (e == 'object' || e == 'function');
    }
    xi.exports = Ch;
  });
  var Se = k((y_, wi) => {
    var Ph = jt(),
      Eh = Et(),
      Sh = '[object AsyncFunction]',
      Bh = '[object Function]',
      Rh = '[object GeneratorFunction]',
      Dh = '[object Proxy]';
    function Th(t) {
      if (!Eh(t)) return !1;
      var e = Ph(t);
      return e == Bh || e == Rh || e == Sh || e == Dh;
    }
    wi.exports = Th;
  });
  var Pi = k((v_, Ci) => {
    var Oh = Gt(),
      Ih = Oh['__core-js_shared__'];
    Ci.exports = Ih;
  });
  var Bi = k((L_, Si) => {
    var He = Pi(),
      Ei = (function () {
        var t = /[^.]+$/.exec((He && He.keys && He.keys.IE_PROTO) || '');
        return t ? 'Symbol(src)_1.' + t : '';
      })();
    function Ah(t) {
      return !!Ei && Ei in t;
    }
    Si.exports = Ah;
  });
  var Di = k((b_, Ri) => {
    var Gh = Function.prototype,
      qh = Gh.toString;
    function zh(t) {
      if (t != null) {
        try {
          return qh.call(t);
        } catch {}
        try {
          return t + '';
        } catch {}
      }
      return '';
    }
    Ri.exports = zh;
  });
  var Oi = k((k_, Ti) => {
    var Nh = Se(),
      Fh = Bi(),
      Vh = Et(),
      Uh = Di(),
      jh = /[\\^$.*+?()[\]{}|]/g,
      Kh = /^\[object .+?Constructor\]$/,
      Hh = Function.prototype,
      Xh = Object.prototype,
      Yh = Hh.toString,
      Jh = Xh.hasOwnProperty,
      Zh = RegExp(
        '^' +
          Yh.call(Jh)
            .replace(jh, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      );
    function $h(t) {
      if (!Vh(t) || Fh(t)) return !1;
      var e = Nh(t) ? Zh : Kh;
      return e.test(Uh(t));
    }
    Ti.exports = $h;
  });
  var Ai = k((M_, Ii) => {
    function Wh(t, e) {
      return t?.[e];
    }
    Ii.exports = Wh;
  });
  var Be = k((x_, Gi) => {
    var Qh = Oi(),
      tu = Ai();
    function eu(t, e) {
      var r = tu(t, e);
      return Qh(r) ? r : void 0;
    }
    Gi.exports = eu;
  });
  var Xe = k((w_, qi) => {
    var ru = Be(),
      iu = Gt(),
      nu = ru(iu, 'Map');
    qi.exports = nu;
  });
  var fe = k((C_, zi) => {
    var au = Be(),
      su = au(Object, 'create');
    zi.exports = su;
  });
  var Vi = k((P_, Fi) => {
    var Ni = fe();
    function ou() {
      (this.__data__ = Ni ? Ni(null) : {}), (this.size = 0);
    }
    Fi.exports = ou;
  });
  var ji = k((E_, Ui) => {
    function lu(t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    }
    Ui.exports = lu;
  });
  var Hi = k((S_, Ki) => {
    var hu = fe(),
      uu = '__lodash_hash_undefined__',
      cu = Object.prototype,
      pu = cu.hasOwnProperty;
    function fu(t) {
      var e = this.__data__;
      if (hu) {
        var r = e[t];
        return r === uu ? void 0 : r;
      }
      return pu.call(e, t) ? e[t] : void 0;
    }
    Ki.exports = fu;
  });
  var Yi = k((B_, Xi) => {
    var du = fe(),
      gu = Object.prototype,
      mu = gu.hasOwnProperty;
    function _u(t) {
      var e = this.__data__;
      return du ? e[t] !== void 0 : mu.call(e, t);
    }
    Xi.exports = _u;
  });
  var Zi = k((R_, Ji) => {
    var yu = fe(),
      vu = '__lodash_hash_undefined__';
    function Lu(t, e) {
      var r = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (r[t] = yu && e === void 0 ? vu : e),
        this
      );
    }
    Ji.exports = Lu;
  });
  var Wi = k((D_, $i) => {
    var bu = Vi(),
      ku = ji(),
      Mu = Hi(),
      xu = Yi(),
      wu = Zi();
    function Kt(t) {
      var e = -1,
        r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var i = t[e];
        this.set(i[0], i[1]);
      }
    }
    Kt.prototype.clear = bu;
    Kt.prototype.delete = ku;
    Kt.prototype.get = Mu;
    Kt.prototype.has = xu;
    Kt.prototype.set = wu;
    $i.exports = Kt;
  });
  var en = k((T_, tn) => {
    var Qi = Wi(),
      Cu = ce(),
      Pu = Xe();
    function Eu() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Qi(),
          map: new (Pu || Cu)(),
          string: new Qi(),
        });
    }
    tn.exports = Eu;
  });
  var nn = k((O_, rn) => {
    function Su(t) {
      var e = typeof t;
      return e == 'string' || e == 'number' || e == 'symbol' || e == 'boolean'
        ? t !== '__proto__'
        : t === null;
    }
    rn.exports = Su;
  });
  var de = k((I_, an) => {
    var Bu = nn();
    function Ru(t, e) {
      var r = t.__data__;
      return Bu(e) ? r[typeof e == 'string' ? 'string' : 'hash'] : r.map;
    }
    an.exports = Ru;
  });
  var on = k((A_, sn) => {
    var Du = de();
    function Tu(t) {
      var e = Du(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    }
    sn.exports = Tu;
  });
  var hn = k((G_, ln) => {
    var Ou = de();
    function Iu(t) {
      return Ou(this, t).get(t);
    }
    ln.exports = Iu;
  });
  var cn = k((q_, un) => {
    var Au = de();
    function Gu(t) {
      return Au(this, t).has(t);
    }
    un.exports = Gu;
  });
  var fn = k((z_, pn) => {
    var qu = de();
    function zu(t, e) {
      var r = qu(this, t),
        i = r.size;
      return r.set(t, e), (this.size += r.size == i ? 0 : 1), this;
    }
    pn.exports = zu;
  });
  var Ye = k((N_, dn) => {
    var Nu = en(),
      Fu = on(),
      Vu = hn(),
      Uu = cn(),
      ju = fn();
    function Ht(t) {
      var e = -1,
        r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var i = t[e];
        this.set(i[0], i[1]);
      }
    }
    Ht.prototype.clear = Nu;
    Ht.prototype.delete = Fu;
    Ht.prototype.get = Vu;
    Ht.prototype.has = Uu;
    Ht.prototype.set = ju;
    dn.exports = Ht;
  });
  var mn = k((F_, gn) => {
    var Ku = ce(),
      Hu = Xe(),
      Xu = Ye(),
      Yu = 200;
    function Ju(t, e) {
      var r = this.__data__;
      if (r instanceof Ku) {
        var i = r.__data__;
        if (!Hu || i.length < Yu - 1)
          return i.push([t, e]), (this.size = ++r.size), this;
        r = this.__data__ = new Xu(i);
      }
      return r.set(t, e), (this.size = r.size), this;
    }
    gn.exports = Ju;
  });
  var yn = k((V_, _n) => {
    var Zu = ce(),
      $u = ai(),
      Wu = oi(),
      Qu = hi(),
      tc = ci(),
      ec = mn();
    function Xt(t) {
      var e = (this.__data__ = new Zu(t));
      this.size = e.size;
    }
    Xt.prototype.clear = $u;
    Xt.prototype.delete = Wu;
    Xt.prototype.get = Qu;
    Xt.prototype.has = tc;
    Xt.prototype.set = ec;
    _n.exports = Xt;
  });
  var Je = k((U_, vn) => {
    var rc = Be(),
      ic = (function () {
        try {
          var t = rc(Object, 'defineProperty');
          return t({}, '', {}), t;
        } catch {}
      })();
    vn.exports = ic;
  });
  var Re = k((j_, bn) => {
    var Ln = Je();
    function nc(t, e, r) {
      e == '__proto__' && Ln
        ? Ln(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (t[e] = r);
    }
    bn.exports = nc;
  });
  var Ze = k((K_, kn) => {
    var ac = Re(),
      sc = he();
    function oc(t, e, r) {
      ((r !== void 0 && !sc(t[e], r)) || (r === void 0 && !(e in t))) &&
        ac(t, e, r);
    }
    kn.exports = oc;
  });
  var xn = k((H_, Mn) => {
    function lc(t) {
      return function (e, r, i) {
        for (var n = -1, a = Object(e), o = i(e), u = o.length; u--; ) {
          var c = o[t ? u : ++n];
          if (r(a[c], c, a) === !1) break;
        }
        return e;
      };
    }
    Mn.exports = lc;
  });
  var Cn = k((X_, wn) => {
    var hc = xn(),
      uc = hc();
    wn.exports = uc;
  });
  var Rn = k((ge, Yt) => {
    var cc = Gt(),
      Bn = typeof ge == 'object' && ge && !ge.nodeType && ge,
      Pn = Bn && typeof Yt == 'object' && Yt && !Yt.nodeType && Yt,
      pc = Pn && Pn.exports === Bn,
      En = pc ? cc.Buffer : void 0,
      Sn = En ? En.allocUnsafe : void 0;
    function fc(t, e) {
      if (e) return t.slice();
      var r = t.length,
        i = Sn ? Sn(r) : new t.constructor(r);
      return t.copy(i), i;
    }
    Yt.exports = fc;
  });
  var Tn = k((Y_, Dn) => {
    var dc = Gt(),
      gc = dc.Uint8Array;
    Dn.exports = gc;
  });
  var An = k((J_, In) => {
    var On = Tn();
    function mc(t) {
      var e = new t.constructor(t.byteLength);
      return new On(e).set(new On(t)), e;
    }
    In.exports = mc;
  });
  var qn = k((Z_, Gn) => {
    var _c = An();
    function yc(t, e) {
      var r = e ? _c(t.buffer) : t.buffer;
      return new t.constructor(r, t.byteOffset, t.length);
    }
    Gn.exports = yc;
  });
  var Nn = k(($_, zn) => {
    function vc(t, e) {
      var r = -1,
        i = t.length;
      for (e || (e = Array(i)); ++r < i; ) e[r] = t[r];
      return e;
    }
    zn.exports = vc;
  });
  var Un = k((W_, Vn) => {
    var Lc = Et(),
      Fn = Object.create,
      bc = (function () {
        function t() {}
        return function (e) {
          if (!Lc(e)) return {};
          if (Fn) return Fn(e);
          t.prototype = e;
          var r = new t();
          return (t.prototype = void 0), r;
        };
      })();
    Vn.exports = bc;
  });
  var Kn = k((Q_, jn) => {
    function kc(t, e) {
      return function (r) {
        return t(e(r));
      };
    }
    jn.exports = kc;
  });
  var $e = k((ty, Hn) => {
    var Mc = Kn(),
      xc = Mc(Object.getPrototypeOf, Object);
    Hn.exports = xc;
  });
  var We = k((ey, Xn) => {
    var wc = Object.prototype;
    function Cc(t) {
      var e = t && t.constructor,
        r = (typeof e == 'function' && e.prototype) || wc;
      return t === r;
    }
    Xn.exports = Cc;
  });
  var Jn = k((ry, Yn) => {
    var Pc = Un(),
      Ec = $e(),
      Sc = We();
    function Bc(t) {
      return typeof t.constructor == 'function' && !Sc(t) ? Pc(Ec(t)) : {};
    }
    Yn.exports = Bc;
  });
  var qt = k((iy, Zn) => {
    function Rc(t) {
      return t != null && typeof t == 'object';
    }
    Zn.exports = Rc;
  });
  var Wn = k((ny, $n) => {
    var Dc = jt(),
      Tc = qt(),
      Oc = '[object Arguments]';
    function Ic(t) {
      return Tc(t) && Dc(t) == Oc;
    }
    $n.exports = Ic;
  });
  var Qe = k((ay, ea) => {
    var Qn = Wn(),
      Ac = qt(),
      ta = Object.prototype,
      Gc = ta.hasOwnProperty,
      qc = ta.propertyIsEnumerable,
      zc = Qn(
        (function () {
          return arguments;
        })()
      )
        ? Qn
        : function (t) {
            return Ac(t) && Gc.call(t, 'callee') && !qc.call(t, 'callee');
          };
    ea.exports = zc;
  });
  var Jt = k((sy, ra) => {
    var Nc = Array.isArray;
    ra.exports = Nc;
  });
  var tr = k((oy, ia) => {
    var Fc = 9007199254740991;
    function Vc(t) {
      return typeof t == 'number' && t > -1 && t % 1 == 0 && t <= Fc;
    }
    ia.exports = Vc;
  });
  var De = k((ly, na) => {
    var Uc = Se(),
      jc = tr();
    function Kc(t) {
      return t != null && jc(t.length) && !Uc(t);
    }
    na.exports = Kc;
  });
  var sa = k((hy, aa) => {
    var Hc = De(),
      Xc = qt();
    function Yc(t) {
      return Xc(t) && Hc(t);
    }
    aa.exports = Yc;
  });
  var la = k((uy, oa) => {
    function Jc() {
      return !1;
    }
    oa.exports = Jc;
  });
  var er = k((me, Zt) => {
    var Zc = Gt(),
      $c = la(),
      ca = typeof me == 'object' && me && !me.nodeType && me,
      ha = ca && typeof Zt == 'object' && Zt && !Zt.nodeType && Zt,
      Wc = ha && ha.exports === ca,
      ua = Wc ? Zc.Buffer : void 0,
      Qc = ua ? ua.isBuffer : void 0,
      tp = Qc || $c;
    Zt.exports = tp;
  });
  var da = k((cy, fa) => {
    var ep = jt(),
      rp = $e(),
      ip = qt(),
      np = '[object Object]',
      ap = Function.prototype,
      sp = Object.prototype,
      pa = ap.toString,
      op = sp.hasOwnProperty,
      lp = pa.call(Object);
    function hp(t) {
      if (!ip(t) || ep(t) != np) return !1;
      var e = rp(t);
      if (e === null) return !0;
      var r = op.call(e, 'constructor') && e.constructor;
      return typeof r == 'function' && r instanceof r && pa.call(r) == lp;
    }
    fa.exports = hp;
  });
  var ma = k((py, ga) => {
    var up = jt(),
      cp = tr(),
      pp = qt(),
      fp = '[object Arguments]',
      dp = '[object Array]',
      gp = '[object Boolean]',
      mp = '[object Date]',
      _p = '[object Error]',
      yp = '[object Function]',
      vp = '[object Map]',
      Lp = '[object Number]',
      bp = '[object Object]',
      kp = '[object RegExp]',
      Mp = '[object Set]',
      xp = '[object String]',
      wp = '[object WeakMap]',
      Cp = '[object ArrayBuffer]',
      Pp = '[object DataView]',
      Ep = '[object Float32Array]',
      Sp = '[object Float64Array]',
      Bp = '[object Int8Array]',
      Rp = '[object Int16Array]',
      Dp = '[object Int32Array]',
      Tp = '[object Uint8Array]',
      Op = '[object Uint8ClampedArray]',
      Ip = '[object Uint16Array]',
      Ap = '[object Uint32Array]',
      Z = {};
    Z[Ep] = Z[Sp] = Z[Bp] = Z[Rp] = Z[Dp] = Z[Tp] = Z[Op] = Z[Ip] = Z[Ap] = !0;
    Z[fp] =
      Z[dp] =
      Z[Cp] =
      Z[gp] =
      Z[Pp] =
      Z[mp] =
      Z[_p] =
      Z[yp] =
      Z[vp] =
      Z[Lp] =
      Z[bp] =
      Z[kp] =
      Z[Mp] =
      Z[xp] =
      Z[wp] =
        !1;
    function Gp(t) {
      return pp(t) && cp(t.length) && !!Z[up(t)];
    }
    ga.exports = Gp;
  });
  var ya = k((fy, _a) => {
    function qp(t) {
      return function (e) {
        return t(e);
      };
    }
    _a.exports = qp;
  });
  var La = k((_e, $t) => {
    var zp = Ke(),
      va = typeof _e == 'object' && _e && !_e.nodeType && _e,
      ye = va && typeof $t == 'object' && $t && !$t.nodeType && $t,
      Np = ye && ye.exports === va,
      rr = Np && zp.process,
      Fp = (function () {
        try {
          var t = ye && ye.require && ye.require('util').types;
          return t || (rr && rr.binding && rr.binding('util'));
        } catch {}
      })();
    $t.exports = Fp;
  });
  var ir = k((dy, Ma) => {
    var Vp = ma(),
      Up = ya(),
      ba = La(),
      ka = ba && ba.isTypedArray,
      jp = ka ? Up(ka) : Vp;
    Ma.exports = jp;
  });
  var nr = k((gy, xa) => {
    function Kp(t, e) {
      if (
        !(e === 'constructor' && typeof t[e] == 'function') &&
        e != '__proto__'
      )
        return t[e];
    }
    xa.exports = Kp;
  });
  var Ca = k((my, wa) => {
    var Hp = Re(),
      Xp = he(),
      Yp = Object.prototype,
      Jp = Yp.hasOwnProperty;
    function Zp(t, e, r) {
      var i = t[e];
      (!(Jp.call(t, e) && Xp(i, r)) || (r === void 0 && !(e in t))) &&
        Hp(t, e, r);
    }
    wa.exports = Zp;
  });
  var Ea = k((_y, Pa) => {
    var $p = Ca(),
      Wp = Re();
    function Qp(t, e, r, i) {
      var n = !r;
      r || (r = {});
      for (var a = -1, o = e.length; ++a < o; ) {
        var u = e[a],
          c = i ? i(r[u], t[u], u, r, t) : void 0;
        c === void 0 && (c = t[u]), n ? Wp(r, u, c) : $p(r, u, c);
      }
      return r;
    }
    Pa.exports = Qp;
  });
  var Ba = k((yy, Sa) => {
    function tf(t, e) {
      for (var r = -1, i = Array(t); ++r < t; ) i[r] = e(r);
      return i;
    }
    Sa.exports = tf;
  });
  var ar = k((vy, Ra) => {
    var ef = 9007199254740991,
      rf = /^(?:0|[1-9]\d*)$/;
    function nf(t, e) {
      var r = typeof t;
      return (
        (e = e ?? ef),
        !!e &&
          (r == 'number' || (r != 'symbol' && rf.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
      );
    }
    Ra.exports = nf;
  });
  var Ta = k((Ly, Da) => {
    var af = Ba(),
      sf = Qe(),
      of = Jt(),
      lf = er(),
      hf = ar(),
      uf = ir(),
      cf = Object.prototype,
      pf = cf.hasOwnProperty;
    function ff(t, e) {
      var r = of(t),
        i = !r && sf(t),
        n = !r && !i && lf(t),
        a = !r && !i && !n && uf(t),
        o = r || i || n || a,
        u = o ? af(t.length, String) : [],
        c = u.length;
      for (var f in t)
        (e || pf.call(t, f)) &&
          !(
            o &&
            (f == 'length' ||
              (n && (f == 'offset' || f == 'parent')) ||
              (a &&
                (f == 'buffer' || f == 'byteLength' || f == 'byteOffset')) ||
              hf(f, c))
          ) &&
          u.push(f);
      return u;
    }
    Da.exports = ff;
  });
  var Ia = k((by, Oa) => {
    function df(t) {
      var e = [];
      if (t != null) for (var r in Object(t)) e.push(r);
      return e;
    }
    Oa.exports = df;
  });
  var Ga = k((ky, Aa) => {
    var gf = Et(),
      mf = We(),
      _f = Ia(),
      yf = Object.prototype,
      vf = yf.hasOwnProperty;
    function Lf(t) {
      if (!gf(t)) return _f(t);
      var e = mf(t),
        r = [];
      for (var i in t)
        (i == 'constructor' && (e || !vf.call(t, i))) || r.push(i);
      return r;
    }
    Aa.exports = Lf;
  });
  var sr = k((My, qa) => {
    var bf = Ta(),
      kf = Ga(),
      Mf = De();
    function xf(t) {
      return Mf(t) ? bf(t, !0) : kf(t);
    }
    qa.exports = xf;
  });
  var Na = k((xy, za) => {
    var wf = Ea(),
      Cf = sr();
    function Pf(t) {
      return wf(t, Cf(t));
    }
    za.exports = Pf;
  });
  var Ha = k((wy, Ka) => {
    var Fa = Ze(),
      Ef = Rn(),
      Sf = qn(),
      Bf = Nn(),
      Rf = Jn(),
      Va = Qe(),
      Ua = Jt(),
      Df = sa(),
      Tf = er(),
      Of = Se(),
      If = Et(),
      Af = da(),
      Gf = ir(),
      ja = nr(),
      qf = Na();
    function zf(t, e, r, i, n, a, o) {
      var u = ja(t, r),
        c = ja(e, r),
        f = o.get(c);
      if (f) {
        Fa(t, r, f);
        return;
      }
      var v = a ? a(u, c, r + '', t, e, o) : void 0,
        b = v === void 0;
      if (b) {
        var E = Ua(c),
          M = !E && Tf(c),
          B = !E && !M && Gf(c);
        (v = c),
          E || M || B
            ? Ua(u)
              ? (v = u)
              : Df(u)
                ? (v = Bf(u))
                : M
                  ? ((b = !1), (v = Ef(c, !0)))
                  : B
                    ? ((b = !1), (v = Sf(c, !0)))
                    : (v = [])
            : Af(c) || Va(c)
              ? ((v = u),
                Va(u) ? (v = qf(u)) : (!If(u) || Of(u)) && (v = Rf(c)))
              : (b = !1);
      }
      b && (o.set(c, v), n(v, c, i, a, o), o.delete(c)), Fa(t, r, v);
    }
    Ka.exports = zf;
  });
  var Ja = k((Cy, Ya) => {
    var Nf = yn(),
      Ff = Ze(),
      Vf = Cn(),
      Uf = Ha(),
      jf = Et(),
      Kf = sr(),
      Hf = nr();
    function Xa(t, e, r, i, n) {
      t !== e &&
        Vf(
          e,
          function (a, o) {
            if ((n || (n = new Nf()), jf(a))) Uf(t, e, o, r, Xa, i, n);
            else {
              var u = i ? i(Hf(t, o), a, o + '', t, e, n) : void 0;
              u === void 0 && (u = a), Ff(t, o, u);
            }
          },
          Kf
        );
    }
    Ya.exports = Xa;
  });
  var or = k((Py, Za) => {
    function Xf(t) {
      return t;
    }
    Za.exports = Xf;
  });
  var Wa = k((Ey, $a) => {
    function Yf(t, e, r) {
      switch (r.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, r[0]);
        case 2:
          return t.call(e, r[0], r[1]);
        case 3:
          return t.call(e, r[0], r[1], r[2]);
      }
      return t.apply(e, r);
    }
    $a.exports = Yf;
  });
  var es = k((Sy, ts) => {
    var Jf = Wa(),
      Qa = Math.max;
    function Zf(t, e, r) {
      return (
        (e = Qa(e === void 0 ? t.length - 1 : e, 0)),
        function () {
          for (
            var i = arguments, n = -1, a = Qa(i.length - e, 0), o = Array(a);
            ++n < a;

          )
            o[n] = i[e + n];
          n = -1;
          for (var u = Array(e + 1); ++n < e; ) u[n] = i[n];
          return (u[e] = r(o)), Jf(t, this, u);
        }
      );
    }
    ts.exports = Zf;
  });
  var is = k((By, rs) => {
    function $f(t) {
      return function () {
        return t;
      };
    }
    rs.exports = $f;
  });
  var ss = k((Ry, as) => {
    var Wf = is(),
      ns = Je(),
      Qf = or(),
      td = ns
        ? function (t, e) {
            return ns(t, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: Wf(e),
              writable: !0,
            });
          }
        : Qf;
    as.exports = td;
  });
  var ls = k((Dy, os) => {
    var ed = 800,
      rd = 16,
      id = Date.now;
    function nd(t) {
      var e = 0,
        r = 0;
      return function () {
        var i = id(),
          n = rd - (i - r);
        if (((r = i), n > 0)) {
          if (++e >= ed) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
      };
    }
    os.exports = nd;
  });
  var us = k((Ty, hs) => {
    var ad = ss(),
      sd = ls(),
      od = sd(ad);
    hs.exports = od;
  });
  var ps = k((Oy, cs) => {
    var ld = or(),
      hd = es(),
      ud = us();
    function cd(t, e) {
      return ud(hd(t, e, ld), t + '');
    }
    cs.exports = cd;
  });
  var ds = k((Iy, fs) => {
    var pd = he(),
      fd = De(),
      dd = ar(),
      gd = Et();
    function md(t, e, r) {
      if (!gd(r)) return !1;
      var i = typeof e;
      return (
        i == 'number' ? fd(r) && dd(e, r.length) : i == 'string' && e in r
      )
        ? pd(r[e], t)
        : !1;
    }
    fs.exports = md;
  });
  var ms = k((Ay, gs) => {
    var _d = ps(),
      yd = ds();
    function vd(t) {
      return _d(function (e, r) {
        var i = -1,
          n = r.length,
          a = n > 1 ? r[n - 1] : void 0,
          o = n > 2 ? r[2] : void 0;
        for (
          a = t.length > 3 && typeof a == 'function' ? (n--, a) : void 0,
            o && yd(r[0], r[1], o) && ((a = n < 3 ? void 0 : a), (n = 1)),
            e = Object(e);
          ++i < n;

        ) {
          var u = r[i];
          u && t(e, u, i, a);
        }
        return e;
      });
    }
    gs.exports = vd;
  });
  var Te = k((Gy, _s) => {
    var Ld = Ja(),
      bd = ms(),
      kd = bd(function (t, e, r) {
        Ld(t, e, r);
      });
    _s.exports = kd;
  });
  var Oe = k((Kv, $s) => {
    var rg = jt(),
      ig = qt(),
      ng = '[object Symbol]';
    function ag(t) {
      return typeof t == 'symbol' || (ig(t) && rg(t) == ng);
    }
    $s.exports = ag;
  });
  var Qs = k((Hv, Ws) => {
    var sg = Jt(),
      og = Oe(),
      lg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      hg = /^\w*$/;
    function ug(t, e) {
      if (sg(t)) return !1;
      var r = typeof t;
      return r == 'number' ||
        r == 'symbol' ||
        r == 'boolean' ||
        t == null ||
        og(t)
        ? !0
        : hg.test(t) || !lg.test(t) || (e != null && t in Object(e));
    }
    Ws.exports = ug;
  });
  var ro = k((Xv, eo) => {
    var to = Ye(),
      cg = 'Expected a function';
    function lr(t, e) {
      if (typeof t != 'function' || (e != null && typeof e != 'function'))
        throw new TypeError(cg);
      var r = function () {
        var i = arguments,
          n = e ? e.apply(this, i) : i[0],
          a = r.cache;
        if (a.has(n)) return a.get(n);
        var o = t.apply(this, i);
        return (r.cache = a.set(n, o) || a), o;
      };
      return (r.cache = new (lr.Cache || to)()), r;
    }
    lr.Cache = to;
    eo.exports = lr;
  });
  var no = k((Yv, io) => {
    var pg = ro(),
      fg = 500;
    function dg(t) {
      var e = pg(t, function (i) {
          return r.size === fg && r.clear(), i;
        }),
        r = e.cache;
      return e;
    }
    io.exports = dg;
  });
  var so = k((Jv, ao) => {
    var gg = no(),
      mg =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      _g = /\\(\\)?/g,
      yg = gg(function (t) {
        var e = [];
        return (
          t.charCodeAt(0) === 46 && e.push(''),
          t.replace(mg, function (r, i, n, a) {
            e.push(n ? a.replace(_g, '$1') : i || r);
          }),
          e
        );
      });
    ao.exports = yg;
  });
  var lo = k((Zv, oo) => {
    function vg(t, e) {
      for (var r = -1, i = t == null ? 0 : t.length, n = Array(i); ++r < i; )
        n[r] = e(t[r], r, t);
      return n;
    }
    oo.exports = vg;
  });
  var go = k(($v, fo) => {
    var ho = Ee(),
      Lg = lo(),
      bg = Jt(),
      kg = Oe(),
      Mg = 1 / 0,
      uo = ho ? ho.prototype : void 0,
      co = uo ? uo.toString : void 0;
    function po(t) {
      if (typeof t == 'string') return t;
      if (bg(t)) return Lg(t, po) + '';
      if (kg(t)) return co ? co.call(t) : '';
      var e = t + '';
      return e == '0' && 1 / t == -Mg ? '-0' : e;
    }
    fo.exports = po;
  });
  var _o = k((Wv, mo) => {
    var xg = go();
    function wg(t) {
      return t == null ? '' : xg(t);
    }
    mo.exports = wg;
  });
  var vo = k((Qv, yo) => {
    var Cg = Jt(),
      Pg = Qs(),
      Eg = so(),
      Sg = _o();
    function Bg(t, e) {
      return Cg(t) ? t : Pg(t, e) ? [t] : Eg(Sg(t));
    }
    yo.exports = Bg;
  });
  var bo = k((tL, Lo) => {
    var Rg = Oe(),
      Dg = 1 / 0;
    function Tg(t) {
      if (typeof t == 'string' || Rg(t)) return t;
      var e = t + '';
      return e == '0' && 1 / t == -Dg ? '-0' : e;
    }
    Lo.exports = Tg;
  });
  var Mo = k((eL, ko) => {
    var Og = vo(),
      Ig = bo();
    function Ag(t, e) {
      e = Og(e, t);
      for (var r = 0, i = e.length; t != null && r < i; ) t = t[Ig(e[r++])];
      return r && r == i ? t : void 0;
    }
    ko.exports = Ag;
  });
  var ve = k((rL, xo) => {
    var Gg = Mo();
    function qg(t, e, r) {
      var i = t == null ? void 0 : Gg(t, e);
      return i === void 0 ? r : i;
    }
    xo.exports = qg;
  });
  var Oo = k((gr, mr) => {
    (function (t, e) {
      typeof gr == 'object' && typeof mr < 'u'
        ? (mr.exports = e())
        : typeof define == 'function' && define.amd
          ? define(e)
          : ((t = t || self).RBush = e());
    })(gr, function () {
      'use strict';
      function t(g, _, w, P, S) {
        (function R(T, G, z, A, j) {
          for (; A > z; ) {
            if (A - z > 600) {
              var F = A - z + 1,
                Y = G - z + 1,
                Mt = Math.log(F),
                ft = 0.5 * Math.exp((2 * Mt) / 3),
                ut =
                  0.5 *
                  Math.sqrt((Mt * ft * (F - ft)) / F) *
                  (Y - F / 2 < 0 ? -1 : 1),
                dt = Math.max(z, Math.floor(G - (Y * ft) / F + ut)),
                ne = Math.min(A, Math.floor(G + ((F - Y) * ft) / F + ut));
              R(T, G, dt, ne, j);
            }
            var tt = T[G],
              xt = z,
              et = A;
            for (e(T, z, G), j(T[A], tt) > 0 && e(T, z, A); xt < et; ) {
              for (e(T, xt, et), xt++, et--; j(T[xt], tt) < 0; ) xt++;
              for (; j(T[et], tt) > 0; ) et--;
            }
            j(T[z], tt) === 0 ? e(T, z, et) : e(T, ++et, A),
              et <= G && (z = et + 1),
              G <= et && (A = et - 1);
          }
        })(g, _, w || 0, P || g.length - 1, S || r);
      }
      function e(g, _, w) {
        var P = g[_];
        (g[_] = g[w]), (g[w] = P);
      }
      function r(g, _) {
        return g < _ ? -1 : g > _ ? 1 : 0;
      }
      var i = function (g) {
        g === void 0 && (g = 9),
          (this._maxEntries = Math.max(4, g)),
          (this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries))),
          this.clear();
      };
      function n(g, _, w) {
        if (!w) return _.indexOf(g);
        for (var P = 0; P < _.length; P++) if (w(g, _[P])) return P;
        return -1;
      }
      function a(g, _) {
        o(g, 0, g.children.length, _, g);
      }
      function o(g, _, w, P, S) {
        S || (S = B(null)),
          (S.minX = 1 / 0),
          (S.minY = 1 / 0),
          (S.maxX = -1 / 0),
          (S.maxY = -1 / 0);
        for (var R = _; R < w; R++) {
          var T = g.children[R];
          u(S, g.leaf ? P(T) : T);
        }
        return S;
      }
      function u(g, _) {
        return (
          (g.minX = Math.min(g.minX, _.minX)),
          (g.minY = Math.min(g.minY, _.minY)),
          (g.maxX = Math.max(g.maxX, _.maxX)),
          (g.maxY = Math.max(g.maxY, _.maxY)),
          g
        );
      }
      function c(g, _) {
        return g.minX - _.minX;
      }
      function f(g, _) {
        return g.minY - _.minY;
      }
      function v(g) {
        return (g.maxX - g.minX) * (g.maxY - g.minY);
      }
      function b(g) {
        return g.maxX - g.minX + (g.maxY - g.minY);
      }
      function E(g, _) {
        return (
          g.minX <= _.minX &&
          g.minY <= _.minY &&
          _.maxX <= g.maxX &&
          _.maxY <= g.maxY
        );
      }
      function M(g, _) {
        return (
          _.minX <= g.maxX &&
          _.minY <= g.maxY &&
          _.maxX >= g.minX &&
          _.maxY >= g.minY
        );
      }
      function B(g) {
        return {
          children: g,
          height: 1,
          leaf: !0,
          minX: 1 / 0,
          minY: 1 / 0,
          maxX: -1 / 0,
          maxY: -1 / 0,
        };
      }
      function I(g, _, w, P, S) {
        for (var R = [_, w]; R.length; )
          if (!((w = R.pop()) - (_ = R.pop()) <= P)) {
            var T = _ + Math.ceil((w - _) / P / 2) * P;
            t(g, T, _, w, S), R.push(_, T, T, w);
          }
      }
      return (
        (i.prototype.all = function () {
          return this._all(this.data, []);
        }),
        (i.prototype.search = function (g) {
          var _ = this.data,
            w = [];
          if (!M(g, _)) return w;
          for (var P = this.toBBox, S = []; _; ) {
            for (var R = 0; R < _.children.length; R++) {
              var T = _.children[R],
                G = _.leaf ? P(T) : T;
              M(g, G) &&
                (_.leaf ? w.push(T) : E(g, G) ? this._all(T, w) : S.push(T));
            }
            _ = S.pop();
          }
          return w;
        }),
        (i.prototype.collides = function (g) {
          var _ = this.data;
          if (!M(g, _)) return !1;
          for (var w = []; _; ) {
            for (var P = 0; P < _.children.length; P++) {
              var S = _.children[P],
                R = _.leaf ? this.toBBox(S) : S;
              if (M(g, R)) {
                if (_.leaf || E(g, R)) return !0;
                w.push(S);
              }
            }
            _ = w.pop();
          }
          return !1;
        }),
        (i.prototype.load = function (g) {
          if (!g || !g.length) return this;
          if (g.length < this._minEntries) {
            for (var _ = 0; _ < g.length; _++) this.insert(g[_]);
            return this;
          }
          var w = this._build(g.slice(), 0, g.length - 1, 0);
          if (this.data.children.length)
            if (this.data.height === w.height) this._splitRoot(this.data, w);
            else {
              if (this.data.height < w.height) {
                var P = this.data;
                (this.data = w), (w = P);
              }
              this._insert(w, this.data.height - w.height - 1, !0);
            }
          else this.data = w;
          return this;
        }),
        (i.prototype.insert = function (g) {
          return g && this._insert(g, this.data.height - 1), this;
        }),
        (i.prototype.clear = function () {
          return (this.data = B([])), this;
        }),
        (i.prototype.remove = function (g, _) {
          if (!g) return this;
          for (
            var w, P, S, R = this.data, T = this.toBBox(g), G = [], z = [];
            R || G.length;

          ) {
            if (
              (R ||
                ((R = G.pop()), (P = G[G.length - 1]), (w = z.pop()), (S = !0)),
              R.leaf)
            ) {
              var A = n(g, R.children, _);
              if (A !== -1)
                return (
                  R.children.splice(A, 1), G.push(R), this._condense(G), this
                );
            }
            S || R.leaf || !E(R, T)
              ? P
                ? (w++, (R = P.children[w]), (S = !1))
                : (R = null)
              : (G.push(R), z.push(w), (w = 0), (P = R), (R = R.children[0]));
          }
          return this;
        }),
        (i.prototype.toBBox = function (g) {
          return g;
        }),
        (i.prototype.compareMinX = function (g, _) {
          return g.minX - _.minX;
        }),
        (i.prototype.compareMinY = function (g, _) {
          return g.minY - _.minY;
        }),
        (i.prototype.toJSON = function () {
          return this.data;
        }),
        (i.prototype.fromJSON = function (g) {
          return (this.data = g), this;
        }),
        (i.prototype._all = function (g, _) {
          for (var w = []; g; )
            g.leaf ? _.push.apply(_, g.children) : w.push.apply(w, g.children),
              (g = w.pop());
          return _;
        }),
        (i.prototype._build = function (g, _, w, P) {
          var S,
            R = w - _ + 1,
            T = this._maxEntries;
          if (R <= T) return a((S = B(g.slice(_, w + 1))), this.toBBox), S;
          P ||
            ((P = Math.ceil(Math.log(R) / Math.log(T))),
            (T = Math.ceil(R / Math.pow(T, P - 1)))),
            ((S = B([])).leaf = !1),
            (S.height = P);
          var G = Math.ceil(R / T),
            z = G * Math.ceil(Math.sqrt(T));
          I(g, _, w, z, this.compareMinX);
          for (var A = _; A <= w; A += z) {
            var j = Math.min(A + z - 1, w);
            I(g, A, j, G, this.compareMinY);
            for (var F = A; F <= j; F += G) {
              var Y = Math.min(F + G - 1, j);
              S.children.push(this._build(g, F, Y, P - 1));
            }
          }
          return a(S, this.toBBox), S;
        }),
        (i.prototype._chooseSubtree = function (g, _, w, P) {
          for (; P.push(_), !_.leaf && P.length - 1 !== w; ) {
            for (
              var S = 1 / 0, R = 1 / 0, T = void 0, G = 0;
              G < _.children.length;
              G++
            ) {
              var z = _.children[G],
                A = v(z),
                j =
                  ((F = g),
                  (Y = z),
                  (Math.max(Y.maxX, F.maxX) - Math.min(Y.minX, F.minX)) *
                    (Math.max(Y.maxY, F.maxY) - Math.min(Y.minY, F.minY)) -
                    A);
              j < R
                ? ((R = j), (S = A < S ? A : S), (T = z))
                : j === R && A < S && ((S = A), (T = z));
            }
            _ = T || _.children[0];
          }
          var F, Y;
          return _;
        }),
        (i.prototype._insert = function (g, _, w) {
          var P = w ? g : this.toBBox(g),
            S = [],
            R = this._chooseSubtree(P, this.data, _, S);
          for (
            R.children.push(g), u(R, P);
            _ >= 0 && S[_].children.length > this._maxEntries;

          )
            this._split(S, _), _--;
          this._adjustParentBBoxes(P, S, _);
        }),
        (i.prototype._split = function (g, _) {
          var w = g[_],
            P = w.children.length,
            S = this._minEntries;
          this._chooseSplitAxis(w, S, P);
          var R = this._chooseSplitIndex(w, S, P),
            T = B(w.children.splice(R, w.children.length - R));
          (T.height = w.height),
            (T.leaf = w.leaf),
            a(w, this.toBBox),
            a(T, this.toBBox),
            _ ? g[_ - 1].children.push(T) : this._splitRoot(w, T);
        }),
        (i.prototype._splitRoot = function (g, _) {
          (this.data = B([g, _])),
            (this.data.height = g.height + 1),
            (this.data.leaf = !1),
            a(this.data, this.toBBox);
        }),
        (i.prototype._chooseSplitIndex = function (g, _, w) {
          for (
            var P, S, R, T, G, z, A, j = 1 / 0, F = 1 / 0, Y = _;
            Y <= w - _;
            Y++
          ) {
            var Mt = o(g, 0, Y, this.toBBox),
              ft = o(g, Y, w, this.toBBox),
              ut =
                ((S = Mt),
                (R = ft),
                (T = void 0),
                (G = void 0),
                (z = void 0),
                (A = void 0),
                (T = Math.max(S.minX, R.minX)),
                (G = Math.max(S.minY, R.minY)),
                (z = Math.min(S.maxX, R.maxX)),
                (A = Math.min(S.maxY, R.maxY)),
                Math.max(0, z - T) * Math.max(0, A - G)),
              dt = v(Mt) + v(ft);
            ut < j
              ? ((j = ut), (P = Y), (F = dt < F ? dt : F))
              : ut === j && dt < F && ((F = dt), (P = Y));
          }
          return P || w - _;
        }),
        (i.prototype._chooseSplitAxis = function (g, _, w) {
          var P = g.leaf ? this.compareMinX : c,
            S = g.leaf ? this.compareMinY : f;
          this._allDistMargin(g, _, w, P) < this._allDistMargin(g, _, w, S) &&
            g.children.sort(P);
        }),
        (i.prototype._allDistMargin = function (g, _, w, P) {
          g.children.sort(P);
          for (
            var S = this.toBBox,
              R = o(g, 0, _, S),
              T = o(g, w - _, w, S),
              G = b(R) + b(T),
              z = _;
            z < w - _;
            z++
          ) {
            var A = g.children[z];
            u(R, g.leaf ? S(A) : A), (G += b(R));
          }
          for (var j = w - _ - 1; j >= _; j--) {
            var F = g.children[j];
            u(T, g.leaf ? S(F) : F), (G += b(T));
          }
          return G;
        }),
        (i.prototype._adjustParentBBoxes = function (g, _, w) {
          for (var P = w; P >= 0; P--) u(_[P], g);
        }),
        (i.prototype._condense = function (g) {
          for (var _ = g.length - 1, w = void 0; _ >= 0; _--)
            g[_].children.length === 0
              ? _ > 0
                ? (w = g[_ - 1].children).splice(w.indexOf(g[_]), 1)
                : this.clear()
              : a(g[_], this.toBBox);
        }),
        i
      );
    });
  });
  var br = k((O) => {
    'use strict';
    Object.defineProperty(O, '__esModule', { value: !0 });
    O.earthRadius = 63710088e-1;
    O.factors = {
      centimeters: O.earthRadius * 100,
      centimetres: O.earthRadius * 100,
      degrees: O.earthRadius / 111325,
      feet: O.earthRadius * 3.28084,
      inches: O.earthRadius * 39.37,
      kilometers: O.earthRadius / 1e3,
      kilometres: O.earthRadius / 1e3,
      meters: O.earthRadius,
      metres: O.earthRadius,
      miles: O.earthRadius / 1609.344,
      millimeters: O.earthRadius * 1e3,
      millimetres: O.earthRadius * 1e3,
      nauticalmiles: O.earthRadius / 1852,
      radians: 1,
      yards: O.earthRadius * 1.0936,
    };
    O.unitsFactors = {
      centimeters: 100,
      centimetres: 100,
      degrees: 1 / 111325,
      feet: 3.28084,
      inches: 39.37,
      kilometers: 1 / 1e3,
      kilometres: 1 / 1e3,
      meters: 1,
      metres: 1,
      miles: 1 / 1609.344,
      millimeters: 1e3,
      millimetres: 1e3,
      nauticalmiles: 1 / 1852,
      radians: 1 / O.earthRadius,
      yards: 1.0936133,
    };
    O.areaFactors = {
      acres: 247105e-9,
      centimeters: 1e4,
      centimetres: 1e4,
      feet: 10.763910417,
      hectares: 1e-4,
      inches: 1550.003100006,
      kilometers: 1e-6,
      kilometres: 1e-6,
      meters: 1,
      metres: 1,
      miles: 386e-9,
      millimeters: 1e6,
      millimetres: 1e6,
      yards: 1.195990046,
    };
    function Dt(t, e, r) {
      r === void 0 && (r = {});
      var i = { type: 'Feature' };
      return (
        (r.id === 0 || r.id) && (i.id = r.id),
        r.bbox && (i.bbox = r.bbox),
        (i.properties = e || {}),
        (i.geometry = t),
        i
      );
    }
    O.feature = Dt;
    function Wg(t, e, r) {
      switch ((r === void 0 && (r = {}), t)) {
        case 'Point':
          return _r(e).geometry;
        case 'LineString':
          return vr(e).geometry;
        case 'Polygon':
          return yr(e).geometry;
        case 'MultiPoint':
          return Ao(e).geometry;
        case 'MultiLineString':
          return Io(e).geometry;
        case 'MultiPolygon':
          return Go(e).geometry;
        default:
          throw new Error(t + ' is invalid');
      }
    }
    O.geometry = Wg;
    function _r(t, e, r) {
      if ((r === void 0 && (r = {}), !t))
        throw new Error('coordinates is required');
      if (!Array.isArray(t)) throw new Error('coordinates must be an Array');
      if (t.length < 2)
        throw new Error('coordinates must be at least 2 numbers long');
      if (!Ae(t[0]) || !Ae(t[1]))
        throw new Error('coordinates must contain numbers');
      var i = { type: 'Point', coordinates: t };
      return Dt(i, e, r);
    }
    O.point = _r;
    function Qg(t, e, r) {
      return (
        r === void 0 && (r = {}),
        Ge(
          t.map(function (i) {
            return _r(i, e);
          }),
          r
        )
      );
    }
    O.points = Qg;
    function yr(t, e, r) {
      r === void 0 && (r = {});
      for (var i = 0, n = t; i < n.length; i++) {
        var a = n[i];
        if (a.length < 4)
          throw new Error(
            'Each LinearRing of a Polygon must have 4 or more Positions.'
          );
        for (var o = 0; o < a[a.length - 1].length; o++)
          if (a[a.length - 1][o] !== a[0][o])
            throw new Error('First and last Position are not equivalent.');
      }
      var u = { type: 'Polygon', coordinates: t };
      return Dt(u, e, r);
    }
    O.polygon = yr;
    function tm(t, e, r) {
      return (
        r === void 0 && (r = {}),
        Ge(
          t.map(function (i) {
            return yr(i, e);
          }),
          r
        )
      );
    }
    O.polygons = tm;
    function vr(t, e, r) {
      if ((r === void 0 && (r = {}), t.length < 2))
        throw new Error(
          'coordinates must be an array of two or more positions'
        );
      var i = { type: 'LineString', coordinates: t };
      return Dt(i, e, r);
    }
    O.lineString = vr;
    function em(t, e, r) {
      return (
        r === void 0 && (r = {}),
        Ge(
          t.map(function (i) {
            return vr(i, e);
          }),
          r
        )
      );
    }
    O.lineStrings = em;
    function Ge(t, e) {
      e === void 0 && (e = {});
      var r = { type: 'FeatureCollection' };
      return (
        e.id && (r.id = e.id), e.bbox && (r.bbox = e.bbox), (r.features = t), r
      );
    }
    O.featureCollection = Ge;
    function Io(t, e, r) {
      r === void 0 && (r = {});
      var i = { type: 'MultiLineString', coordinates: t };
      return Dt(i, e, r);
    }
    O.multiLineString = Io;
    function Ao(t, e, r) {
      r === void 0 && (r = {});
      var i = { type: 'MultiPoint', coordinates: t };
      return Dt(i, e, r);
    }
    O.multiPoint = Ao;
    function Go(t, e, r) {
      r === void 0 && (r = {});
      var i = { type: 'MultiPolygon', coordinates: t };
      return Dt(i, e, r);
    }
    O.multiPolygon = Go;
    function rm(t, e, r) {
      r === void 0 && (r = {});
      var i = { type: 'GeometryCollection', geometries: t };
      return Dt(i, e, r);
    }
    O.geometryCollection = rm;
    function im(t, e) {
      if ((e === void 0 && (e = 0), e && !(e >= 0)))
        throw new Error('precision must be a positive number');
      var r = Math.pow(10, e || 0);
      return Math.round(t * r) / r;
    }
    O.round = im;
    function qo(t, e) {
      e === void 0 && (e = 'kilometers');
      var r = O.factors[e];
      if (!r) throw new Error(e + ' units is invalid');
      return t * r;
    }
    O.radiansToLength = qo;
    function Lr(t, e) {
      e === void 0 && (e = 'kilometers');
      var r = O.factors[e];
      if (!r) throw new Error(e + ' units is invalid');
      return t / r;
    }
    O.lengthToRadians = Lr;
    function nm(t, e) {
      return zo(Lr(t, e));
    }
    O.lengthToDegrees = nm;
    function am(t) {
      var e = t % 360;
      return e < 0 && (e += 360), e;
    }
    O.bearingToAzimuth = am;
    function zo(t) {
      var e = t % (2 * Math.PI);
      return (e * 180) / Math.PI;
    }
    O.radiansToDegrees = zo;
    function sm(t) {
      var e = t % 360;
      return (e * Math.PI) / 180;
    }
    O.degreesToRadians = sm;
    function om(t, e, r) {
      if (
        (e === void 0 && (e = 'kilometers'),
        r === void 0 && (r = 'kilometers'),
        !(t >= 0))
      )
        throw new Error('length must be a positive number');
      return qo(Lr(t, e), r);
    }
    O.convertLength = om;
    function lm(t, e, r) {
      if (
        (e === void 0 && (e = 'meters'),
        r === void 0 && (r = 'kilometers'),
        !(t >= 0))
      )
        throw new Error('area must be a positive number');
      var i = O.areaFactors[e];
      if (!i) throw new Error('invalid original units');
      var n = O.areaFactors[r];
      if (!n) throw new Error('invalid final units');
      return (t / i) * n;
    }
    O.convertArea = lm;
    function Ae(t) {
      return !isNaN(t) && t !== null && !Array.isArray(t);
    }
    O.isNumber = Ae;
    function hm(t) {
      return !!t && t.constructor === Object;
    }
    O.isObject = hm;
    function um(t) {
      if (!t) throw new Error('bbox is required');
      if (!Array.isArray(t)) throw new Error('bbox must be an Array');
      if (t.length !== 4 && t.length !== 6)
        throw new Error('bbox must be an Array of 4 or 6 numbers');
      t.forEach(function (e) {
        if (!Ae(e)) throw new Error('bbox must only contain numbers');
      });
    }
    O.validateBBox = um;
    function cm(t) {
      if (!t) throw new Error('id is required');
      if (['string', 'number'].indexOf(typeof t) === -1)
        throw new Error('id must be a number or a string');
    }
    O.validateId = cm;
  });
  var Mr = k((Q) => {
    'use strict';
    Object.defineProperty(Q, '__esModule', { value: !0 });
    var nt = br();
    function Ce(t, e, r) {
      if (t !== null)
        for (
          var i,
            n,
            a,
            o,
            u,
            c,
            f,
            v = 0,
            b = 0,
            E,
            M = t.type,
            B = M === 'FeatureCollection',
            I = M === 'Feature',
            g = B ? t.features.length : 1,
            _ = 0;
          _ < g;
          _++
        ) {
          (f = B ? t.features[_].geometry : I ? t.geometry : t),
            (E = f ? f.type === 'GeometryCollection' : !1),
            (u = E ? f.geometries.length : 1);
          for (var w = 0; w < u; w++) {
            var P = 0,
              S = 0;
            if (((o = E ? f.geometries[w] : f), o !== null)) {
              c = o.coordinates;
              var R = o.type;
              switch (
                ((v = r && (R === 'Polygon' || R === 'MultiPolygon') ? 1 : 0),
                R)
              ) {
                case null:
                  break;
                case 'Point':
                  if (e(c, b, _, P, S) === !1) return !1;
                  b++, P++;
                  break;
                case 'LineString':
                case 'MultiPoint':
                  for (i = 0; i < c.length; i++) {
                    if (e(c[i], b, _, P, S) === !1) return !1;
                    b++, R === 'MultiPoint' && P++;
                  }
                  R === 'LineString' && P++;
                  break;
                case 'Polygon':
                case 'MultiLineString':
                  for (i = 0; i < c.length; i++) {
                    for (n = 0; n < c[i].length - v; n++) {
                      if (e(c[i][n], b, _, P, S) === !1) return !1;
                      b++;
                    }
                    R === 'MultiLineString' && P++, R === 'Polygon' && S++;
                  }
                  R === 'Polygon' && P++;
                  break;
                case 'MultiPolygon':
                  for (i = 0; i < c.length; i++) {
                    for (S = 0, n = 0; n < c[i].length; n++) {
                      for (a = 0; a < c[i][n].length - v; a++) {
                        if (e(c[i][n][a], b, _, P, S) === !1) return !1;
                        b++;
                      }
                      S++;
                    }
                    P++;
                  }
                  break;
                case 'GeometryCollection':
                  for (i = 0; i < o.geometries.length; i++)
                    if (Ce(o.geometries[i], e, r) === !1) return !1;
                  break;
                default:
                  throw new Error('Unknown Geometry Type');
              }
            }
          }
        }
    }
    function pm(t, e, r, i) {
      var n = r;
      return (
        Ce(
          t,
          function (a, o, u, c, f) {
            o === 0 && r === void 0 ? (n = a) : (n = e(n, a, o, u, c, f));
          },
          i
        ),
        n
      );
    }
    function No(t, e) {
      var r;
      switch (t.type) {
        case 'FeatureCollection':
          for (
            r = 0;
            r < t.features.length && e(t.features[r].properties, r) !== !1;
            r++
          );
          break;
        case 'Feature':
          e(t.properties, 0);
          break;
      }
    }
    function fm(t, e, r) {
      var i = r;
      return (
        No(t, function (n, a) {
          a === 0 && r === void 0 ? (i = n) : (i = e(i, n, a));
        }),
        i
      );
    }
    function Fo(t, e) {
      if (t.type === 'Feature') e(t, 0);
      else if (t.type === 'FeatureCollection')
        for (
          var r = 0;
          r < t.features.length && e(t.features[r], r) !== !1;
          r++
        );
    }
    function dm(t, e, r) {
      var i = r;
      return (
        Fo(t, function (n, a) {
          a === 0 && r === void 0 ? (i = n) : (i = e(i, n, a));
        }),
        i
      );
    }
    function gm(t) {
      var e = [];
      return (
        Ce(t, function (r) {
          e.push(r);
        }),
        e
      );
    }
    function kr(t, e) {
      var r,
        i,
        n,
        a,
        o,
        u,
        c,
        f,
        v,
        b,
        E = 0,
        M = t.type === 'FeatureCollection',
        B = t.type === 'Feature',
        I = M ? t.features.length : 1;
      for (r = 0; r < I; r++) {
        for (
          u = M ? t.features[r].geometry : B ? t.geometry : t,
            f = M ? t.features[r].properties : B ? t.properties : {},
            v = M ? t.features[r].bbox : B ? t.bbox : void 0,
            b = M ? t.features[r].id : B ? t.id : void 0,
            c = u ? u.type === 'GeometryCollection' : !1,
            o = c ? u.geometries.length : 1,
            n = 0;
          n < o;
          n++
        ) {
          if (((a = c ? u.geometries[n] : u), a === null)) {
            if (e(null, E, f, v, b) === !1) return !1;
            continue;
          }
          switch (a.type) {
            case 'Point':
            case 'LineString':
            case 'MultiPoint':
            case 'Polygon':
            case 'MultiLineString':
            case 'MultiPolygon': {
              if (e(a, E, f, v, b) === !1) return !1;
              break;
            }
            case 'GeometryCollection': {
              for (i = 0; i < a.geometries.length; i++)
                if (e(a.geometries[i], E, f, v, b) === !1) return !1;
              break;
            }
            default:
              throw new Error('Unknown Geometry Type');
          }
        }
        E++;
      }
    }
    function mm(t, e, r) {
      var i = r;
      return (
        kr(t, function (n, a, o, u, c) {
          a === 0 && r === void 0 ? (i = n) : (i = e(i, n, a, o, u, c));
        }),
        i
      );
    }
    function qe(t, e) {
      kr(t, function (r, i, n, a, o) {
        var u = r === null ? null : r.type;
        switch (u) {
          case null:
          case 'Point':
          case 'LineString':
          case 'Polygon':
            return e(nt.feature(r, n, { bbox: a, id: o }), i, 0) === !1
              ? !1
              : void 0;
        }
        var c;
        switch (u) {
          case 'MultiPoint':
            c = 'Point';
            break;
          case 'MultiLineString':
            c = 'LineString';
            break;
          case 'MultiPolygon':
            c = 'Polygon';
            break;
        }
        for (var f = 0; f < r.coordinates.length; f++) {
          var v = r.coordinates[f],
            b = { type: c, coordinates: v };
          if (e(nt.feature(b, n), i, f) === !1) return !1;
        }
      });
    }
    function _m(t, e, r) {
      var i = r;
      return (
        qe(t, function (n, a, o) {
          a === 0 && o === 0 && r === void 0 ? (i = n) : (i = e(i, n, a, o));
        }),
        i
      );
    }
    function Vo(t, e) {
      qe(t, function (r, i, n) {
        var a = 0;
        if (r.geometry) {
          var o = r.geometry.type;
          if (!(o === 'Point' || o === 'MultiPoint')) {
            var u,
              c = 0,
              f = 0,
              v = 0;
            if (
              Ce(r, function (b, E, M, B, I) {
                if (u === void 0 || i > c || B > f || I > v) {
                  (u = b), (c = i), (f = B), (v = I), (a = 0);
                  return;
                }
                var g = nt.lineString([u, b], r.properties);
                if (e(g, i, n, I, a) === !1) return !1;
                a++, (u = b);
              }) === !1
            )
              return !1;
          }
        }
      });
    }
    function ym(t, e, r) {
      var i = r,
        n = !1;
      return (
        Vo(t, function (a, o, u, c, f) {
          n === !1 && r === void 0 ? (i = a) : (i = e(i, a, o, u, c, f)),
            (n = !0);
        }),
        i
      );
    }
    function Uo(t, e) {
      if (!t) throw new Error('geojson is required');
      qe(t, function (r, i, n) {
        if (r.geometry !== null) {
          var a = r.geometry.type,
            o = r.geometry.coordinates;
          switch (a) {
            case 'LineString':
              if (e(r, i, n, 0, 0) === !1) return !1;
              break;
            case 'Polygon':
              for (var u = 0; u < o.length; u++)
                if (e(nt.lineString(o[u], r.properties), i, n, u) === !1)
                  return !1;
              break;
          }
        }
      });
    }
    function vm(t, e, r) {
      var i = r;
      return (
        Uo(t, function (n, a, o, u) {
          a === 0 && r === void 0 ? (i = n) : (i = e(i, n, a, o, u));
        }),
        i
      );
    }
    function Lm(t, e) {
      if (((e = e || {}), !nt.isObject(e)))
        throw new Error('options is invalid');
      var r = e.featureIndex || 0,
        i = e.multiFeatureIndex || 0,
        n = e.geometryIndex || 0,
        a = e.segmentIndex || 0,
        o = e.properties,
        u;
      switch (t.type) {
        case 'FeatureCollection':
          r < 0 && (r = t.features.length + r),
            (o = o || t.features[r].properties),
            (u = t.features[r].geometry);
          break;
        case 'Feature':
          (o = o || t.properties), (u = t.geometry);
          break;
        case 'Point':
        case 'MultiPoint':
          return null;
        case 'LineString':
        case 'Polygon':
        case 'MultiLineString':
        case 'MultiPolygon':
          u = t;
          break;
        default:
          throw new Error('geojson is invalid');
      }
      if (u === null) return null;
      var c = u.coordinates;
      switch (u.type) {
        case 'Point':
        case 'MultiPoint':
          return null;
        case 'LineString':
          return (
            a < 0 && (a = c.length + a - 1),
            nt.lineString([c[a], c[a + 1]], o, e)
          );
        case 'Polygon':
          return (
            n < 0 && (n = c.length + n),
            a < 0 && (a = c[n].length + a - 1),
            nt.lineString([c[n][a], c[n][a + 1]], o, e)
          );
        case 'MultiLineString':
          return (
            i < 0 && (i = c.length + i),
            a < 0 && (a = c[i].length + a - 1),
            nt.lineString([c[i][a], c[i][a + 1]], o, e)
          );
        case 'MultiPolygon':
          return (
            i < 0 && (i = c.length + i),
            n < 0 && (n = c[i].length + n),
            a < 0 && (a = c[i][n].length - a - 1),
            nt.lineString([c[i][n][a], c[i][n][a + 1]], o, e)
          );
      }
      throw new Error('geojson is invalid');
    }
    function bm(t, e) {
      if (((e = e || {}), !nt.isObject(e)))
        throw new Error('options is invalid');
      var r = e.featureIndex || 0,
        i = e.multiFeatureIndex || 0,
        n = e.geometryIndex || 0,
        a = e.coordIndex || 0,
        o = e.properties,
        u;
      switch (t.type) {
        case 'FeatureCollection':
          r < 0 && (r = t.features.length + r),
            (o = o || t.features[r].properties),
            (u = t.features[r].geometry);
          break;
        case 'Feature':
          (o = o || t.properties), (u = t.geometry);
          break;
        case 'Point':
        case 'MultiPoint':
          return null;
        case 'LineString':
        case 'Polygon':
        case 'MultiLineString':
        case 'MultiPolygon':
          u = t;
          break;
        default:
          throw new Error('geojson is invalid');
      }
      if (u === null) return null;
      var c = u.coordinates;
      switch (u.type) {
        case 'Point':
          return nt.point(c, o, e);
        case 'MultiPoint':
          return i < 0 && (i = c.length + i), nt.point(c[i], o, e);
        case 'LineString':
          return a < 0 && (a = c.length + a), nt.point(c[a], o, e);
        case 'Polygon':
          return (
            n < 0 && (n = c.length + n),
            a < 0 && (a = c[n].length + a),
            nt.point(c[n][a], o, e)
          );
        case 'MultiLineString':
          return (
            i < 0 && (i = c.length + i),
            a < 0 && (a = c[i].length + a),
            nt.point(c[i][a], o, e)
          );
        case 'MultiPolygon':
          return (
            i < 0 && (i = c.length + i),
            n < 0 && (n = c[i].length + n),
            a < 0 && (a = c[i][n].length - a),
            nt.point(c[i][n][a], o, e)
          );
      }
      throw new Error('geojson is invalid');
    }
    Q.coordAll = gm;
    Q.coordEach = Ce;
    Q.coordReduce = pm;
    Q.featureEach = Fo;
    Q.featureReduce = dm;
    Q.findPoint = bm;
    Q.findSegment = Lm;
    Q.flattenEach = qe;
    Q.flattenReduce = _m;
    Q.geomEach = kr;
    Q.geomReduce = mm;
    Q.lineEach = Uo;
    Q.lineReduce = vm;
    Q.propEach = No;
    Q.propReduce = fm;
    Q.segmentEach = Vo;
    Q.segmentReduce = ym;
  });
  var jo = k((wr) => {
    'use strict';
    Object.defineProperty(wr, '__esModule', { value: !0 });
    var km = Mr();
    function xr(t) {
      var e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      return (
        km.coordEach(t, function (r) {
          e[0] > r[0] && (e[0] = r[0]),
            e[1] > r[1] && (e[1] = r[1]),
            e[2] < r[0] && (e[2] = r[0]),
            e[3] < r[1] && (e[3] = r[1]);
        }),
        e
      );
    }
    xr.default = xr;
    wr.default = xr;
  });
  var Pr = k((eb, Cr) => {
    var kt = Oo(),
      Ho = br(),
      Xo = Mr(),
      ee = jo().default,
      Mm = Xo.featureEach,
      QL = Xo.coordEach,
      tb = Ho.polygon,
      Ko = Ho.featureCollection;
    function Yo(t) {
      var e = new kt(t);
      return (
        (e.insert = function (r) {
          if (r.type !== 'Feature') throw new Error('invalid feature');
          return (
            (r.bbox = r.bbox ? r.bbox : ee(r)),
            kt.prototype.insert.call(this, r)
          );
        }),
        (e.load = function (r) {
          var i = [];
          return (
            Array.isArray(r)
              ? r.forEach(function (n) {
                  if (n.type !== 'Feature') throw new Error('invalid features');
                  (n.bbox = n.bbox ? n.bbox : ee(n)), i.push(n);
                })
              : Mm(r, function (n) {
                  if (n.type !== 'Feature') throw new Error('invalid features');
                  (n.bbox = n.bbox ? n.bbox : ee(n)), i.push(n);
                }),
            kt.prototype.load.call(this, i)
          );
        }),
        (e.remove = function (r, i) {
          if (r.type !== 'Feature') throw new Error('invalid feature');
          return (
            (r.bbox = r.bbox ? r.bbox : ee(r)),
            kt.prototype.remove.call(this, r, i)
          );
        }),
        (e.clear = function () {
          return kt.prototype.clear.call(this);
        }),
        (e.search = function (r) {
          var i = kt.prototype.search.call(this, this.toBBox(r));
          return Ko(i);
        }),
        (e.collides = function (r) {
          return kt.prototype.collides.call(this, this.toBBox(r));
        }),
        (e.all = function () {
          var r = kt.prototype.all.call(this);
          return Ko(r);
        }),
        (e.toJSON = function () {
          return kt.prototype.toJSON.call(this);
        }),
        (e.fromJSON = function (r) {
          return kt.prototype.fromJSON.call(this, r);
        }),
        (e.toBBox = function (r) {
          var i;
          if (r.bbox) i = r.bbox;
          else if (Array.isArray(r) && r.length === 4) i = r;
          else if (Array.isArray(r) && r.length === 6)
            i = [r[0], r[1], r[3], r[4]];
          else if (r.type === 'Feature') i = ee(r);
          else if (r.type === 'FeatureCollection') i = ee(r);
          else throw new Error('invalid geojson');
          return { minX: i[0], minY: i[1], maxX: i[2], maxY: i[3] };
        }),
        e
      );
    }
    Cr.exports = Yo;
    Cr.exports.default = Yo;
  });
  var al = k((Or, Ir) => {
    (function (t, e) {
      typeof Or == 'object' && typeof Ir < 'u'
        ? (Ir.exports = e())
        : typeof define == 'function' && define.amd
          ? define(e)
          : ((t = typeof globalThis < 'u' ? globalThis : t || self),
            (t.polygonClipping = e()));
    })(Or, function () {
      'use strict';
      function t(m, l) {
        if (!(m instanceof l))
          throw new TypeError('Cannot call a class as a function');
      }
      function e(m, l) {
        for (var s = 0; s < l.length; s++) {
          var h = l[s];
          (h.enumerable = h.enumerable || !1),
            (h.configurable = !0),
            'value' in h && (h.writable = !0),
            Object.defineProperty(m, h.key, h);
        }
      }
      function r(m, l, s) {
        return l && e(m.prototype, l), s && e(m, s), m;
      }
      var i = (function () {
        function m(l, s) {
          (this.next = null),
            (this.key = l),
            (this.data = s),
            (this.left = null),
            (this.right = null);
        }
        return m;
      })();
      function n(m, l) {
        return m > l ? 1 : m < l ? -1 : 0;
      }
      function a(m, l, s) {
        for (var h = new i(null, null), p = h, d = h; ; ) {
          var y = s(m, l.key);
          if (y < 0) {
            if (l.left === null) break;
            if (s(m, l.left.key) < 0) {
              var x = l.left;
              if (((l.left = x.right), (x.right = l), (l = x), l.left === null))
                break;
            }
            (d.left = l), (d = l), (l = l.left);
          } else if (y > 0) {
            if (l.right === null) break;
            if (s(m, l.right.key) > 0) {
              var x = l.right;
              if (((l.right = x.left), (x.left = l), (l = x), l.right === null))
                break;
            }
            (p.right = l), (p = l), (l = l.right);
          } else break;
        }
        return (
          (p.right = l.left),
          (d.left = l.right),
          (l.left = h.right),
          (l.right = h.left),
          l
        );
      }
      function o(m, l, s, h) {
        var p = new i(m, l);
        if (s === null) return (p.left = p.right = null), p;
        s = a(m, s, h);
        var d = h(m, s.key);
        return (
          d < 0
            ? ((p.left = s.left), (p.right = s), (s.left = null))
            : d >= 0 && ((p.right = s.right), (p.left = s), (s.right = null)),
          p
        );
      }
      function u(m, l, s) {
        var h = null,
          p = null;
        if (l) {
          l = a(m, l, s);
          var d = s(l.key, m);
          d === 0
            ? ((h = l.left), (p = l.right))
            : d < 0
              ? ((p = l.right), (l.right = null), (h = l))
              : ((h = l.left), (l.left = null), (p = l));
        }
        return { left: h, right: p };
      }
      function c(m, l, s) {
        return l === null
          ? m
          : (m === null || ((l = a(m.key, l, s)), (l.left = m)), l);
      }
      function f(m, l, s, h, p) {
        if (m) {
          h(
            '' +
              l +
              (s ? '\u2514\u2500\u2500 ' : '\u251C\u2500\u2500 ') +
              p(m) +
              `
`
          );
          var d = l + (s ? '    ' : '\u2502   ');
          m.left && f(m.left, d, !1, h, p), m.right && f(m.right, d, !0, h, p);
        }
      }
      var v = (function () {
        function m(l) {
          l === void 0 && (l = n),
            (this._root = null),
            (this._size = 0),
            (this._comparator = l);
        }
        return (
          (m.prototype.insert = function (l, s) {
            return (
              this._size++, (this._root = o(l, s, this._root, this._comparator))
            );
          }),
          (m.prototype.add = function (l, s) {
            var h = new i(l, s);
            this._root === null &&
              ((h.left = h.right = null), this._size++, (this._root = h));
            var p = this._comparator,
              d = a(l, this._root, p),
              y = p(l, d.key);
            return (
              y === 0
                ? (this._root = d)
                : (y < 0
                    ? ((h.left = d.left), (h.right = d), (d.left = null))
                    : y > 0 &&
                      ((h.right = d.right), (h.left = d), (d.right = null)),
                  this._size++,
                  (this._root = h)),
              this._root
            );
          }),
          (m.prototype.remove = function (l) {
            this._root = this._remove(l, this._root, this._comparator);
          }),
          (m.prototype._remove = function (l, s, h) {
            var p;
            if (s === null) return null;
            s = a(l, s, h);
            var d = h(l, s.key);
            return d === 0
              ? (s.left === null
                  ? (p = s.right)
                  : ((p = a(l, s.left, h)), (p.right = s.right)),
                this._size--,
                p)
              : s;
          }),
          (m.prototype.pop = function () {
            var l = this._root;
            if (l) {
              for (; l.left; ) l = l.left;
              return (
                (this._root = a(l.key, this._root, this._comparator)),
                (this._root = this._remove(
                  l.key,
                  this._root,
                  this._comparator
                )),
                { key: l.key, data: l.data }
              );
            }
            return null;
          }),
          (m.prototype.findStatic = function (l) {
            for (var s = this._root, h = this._comparator; s; ) {
              var p = h(l, s.key);
              if (p === 0) return s;
              p < 0 ? (s = s.left) : (s = s.right);
            }
            return null;
          }),
          (m.prototype.find = function (l) {
            return this._root &&
              ((this._root = a(l, this._root, this._comparator)),
              this._comparator(l, this._root.key) !== 0)
              ? null
              : this._root;
          }),
          (m.prototype.contains = function (l) {
            for (var s = this._root, h = this._comparator; s; ) {
              var p = h(l, s.key);
              if (p === 0) return !0;
              p < 0 ? (s = s.left) : (s = s.right);
            }
            return !1;
          }),
          (m.prototype.forEach = function (l, s) {
            for (var h = this._root, p = [], d = !1; !d; )
              h !== null
                ? (p.push(h), (h = h.left))
                : p.length !== 0
                  ? ((h = p.pop()), l.call(s, h), (h = h.right))
                  : (d = !0);
            return this;
          }),
          (m.prototype.range = function (l, s, h, p) {
            for (
              var d = [], y = this._comparator, x = this._root, C;
              d.length !== 0 || x;

            )
              if (x) d.push(x), (x = x.left);
              else {
                if (((x = d.pop()), (C = y(x.key, s)), C > 0)) break;
                if (y(x.key, l) >= 0 && h.call(p, x)) return this;
                x = x.right;
              }
            return this;
          }),
          (m.prototype.keys = function () {
            var l = [];
            return (
              this.forEach(function (s) {
                var h = s.key;
                return l.push(h);
              }),
              l
            );
          }),
          (m.prototype.values = function () {
            var l = [];
            return (
              this.forEach(function (s) {
                var h = s.data;
                return l.push(h);
              }),
              l
            );
          }),
          (m.prototype.min = function () {
            return this._root ? this.minNode(this._root).key : null;
          }),
          (m.prototype.max = function () {
            return this._root ? this.maxNode(this._root).key : null;
          }),
          (m.prototype.minNode = function (l) {
            if ((l === void 0 && (l = this._root), l))
              for (; l.left; ) l = l.left;
            return l;
          }),
          (m.prototype.maxNode = function (l) {
            if ((l === void 0 && (l = this._root), l))
              for (; l.right; ) l = l.right;
            return l;
          }),
          (m.prototype.at = function (l) {
            for (var s = this._root, h = !1, p = 0, d = []; !h; )
              if (s) d.push(s), (s = s.left);
              else if (d.length > 0) {
                if (((s = d.pop()), p === l)) return s;
                p++, (s = s.right);
              } else h = !0;
            return null;
          }),
          (m.prototype.next = function (l) {
            var s = this._root,
              h = null;
            if (l.right) {
              for (h = l.right; h.left; ) h = h.left;
              return h;
            }
            for (var p = this._comparator; s; ) {
              var d = p(l.key, s.key);
              if (d === 0) break;
              d < 0 ? ((h = s), (s = s.left)) : (s = s.right);
            }
            return h;
          }),
          (m.prototype.prev = function (l) {
            var s = this._root,
              h = null;
            if (l.left !== null) {
              for (h = l.left; h.right; ) h = h.right;
              return h;
            }
            for (var p = this._comparator; s; ) {
              var d = p(l.key, s.key);
              if (d === 0) break;
              d < 0 ? (s = s.left) : ((h = s), (s = s.right));
            }
            return h;
          }),
          (m.prototype.clear = function () {
            return (this._root = null), (this._size = 0), this;
          }),
          (m.prototype.toList = function () {
            return M(this._root);
          }),
          (m.prototype.load = function (l, s, h) {
            s === void 0 && (s = []), h === void 0 && (h = !1);
            var p = l.length,
              d = this._comparator;
            if ((h && g(l, s, 0, p - 1, d), this._root === null))
              (this._root = b(l, s, 0, p)), (this._size = p);
            else {
              var y = I(this.toList(), E(l, s), d);
              (p = this._size + p), (this._root = B({ head: y }, 0, p));
            }
            return this;
          }),
          (m.prototype.isEmpty = function () {
            return this._root === null;
          }),
          Object.defineProperty(m.prototype, 'size', {
            get: function () {
              return this._size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(m.prototype, 'root', {
            get: function () {
              return this._root;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (m.prototype.toString = function (l) {
            l === void 0 &&
              (l = function (p) {
                return String(p.key);
              });
            var s = [];
            return (
              f(
                this._root,
                '',
                !0,
                function (h) {
                  return s.push(h);
                },
                l
              ),
              s.join('')
            );
          }),
          (m.prototype.update = function (l, s, h) {
            var p = this._comparator,
              d = u(l, this._root, p),
              y = d.left,
              x = d.right;
            p(l, s) < 0 ? (x = o(s, h, x, p)) : (y = o(s, h, y, p)),
              (this._root = c(y, x, p));
          }),
          (m.prototype.split = function (l) {
            return u(l, this._root, this._comparator);
          }),
          m
        );
      })();
      function b(m, l, s, h) {
        var p = h - s;
        if (p > 0) {
          var d = s + Math.floor(p / 2),
            y = m[d],
            x = l[d],
            C = new i(y, x);
          return (C.left = b(m, l, s, d)), (C.right = b(m, l, d + 1, h)), C;
        }
        return null;
      }
      function E(m, l) {
        for (var s = new i(null, null), h = s, p = 0; p < m.length; p++)
          h = h.next = new i(m[p], l[p]);
        return (h.next = null), s.next;
      }
      function M(m) {
        for (var l = m, s = [], h = !1, p = new i(null, null), d = p; !h; )
          l
            ? (s.push(l), (l = l.left))
            : s.length > 0
              ? ((l = d = d.next = s.pop()), (l = l.right))
              : (h = !0);
        return (d.next = null), p.next;
      }
      function B(m, l, s) {
        var h = s - l;
        if (h > 0) {
          var p = l + Math.floor(h / 2),
            d = B(m, l, p),
            y = m.head;
          return (
            (y.left = d), (m.head = m.head.next), (y.right = B(m, p + 1, s)), y
          );
        }
        return null;
      }
      function I(m, l, s) {
        for (
          var h = new i(null, null), p = h, d = m, y = l;
          d !== null && y !== null;

        )
          s(d.key, y.key) < 0
            ? ((p.next = d), (d = d.next))
            : ((p.next = y), (y = y.next)),
            (p = p.next);
        return d !== null ? (p.next = d) : y !== null && (p.next = y), h.next;
      }
      function g(m, l, s, h, p) {
        if (!(s >= h)) {
          for (var d = m[(s + h) >> 1], y = s - 1, x = h + 1; ; ) {
            do y++;
            while (p(m[y], d) < 0);
            do x--;
            while (p(m[x], d) > 0);
            if (y >= x) break;
            var C = m[y];
            (m[y] = m[x]), (m[x] = C), (C = l[y]), (l[y] = l[x]), (l[x] = C);
          }
          g(m, l, s, x, p), g(m, l, x + 1, h, p);
        }
      }
      var _ = function (l, s) {
          return (
            l.ll.x <= s.x && s.x <= l.ur.x && l.ll.y <= s.y && s.y <= l.ur.y
          );
        },
        w = function (l, s) {
          if (
            s.ur.x < l.ll.x ||
            l.ur.x < s.ll.x ||
            s.ur.y < l.ll.y ||
            l.ur.y < s.ll.y
          )
            return null;
          var h = l.ll.x < s.ll.x ? s.ll.x : l.ll.x,
            p = l.ur.x < s.ur.x ? l.ur.x : s.ur.x,
            d = l.ll.y < s.ll.y ? s.ll.y : l.ll.y,
            y = l.ur.y < s.ur.y ? l.ur.y : s.ur.y;
          return { ll: { x: h, y: d }, ur: { x: p, y } };
        },
        P = Number.EPSILON;
      P === void 0 && (P = Math.pow(2, -52));
      var S = P * P,
        R = function (l, s) {
          if (-P < l && l < P && -P < s && s < P) return 0;
          var h = l - s;
          return h * h < S * l * s ? 0 : l < s ? -1 : 1;
        },
        T = (function () {
          function m() {
            t(this, m), this.reset();
          }
          return (
            r(m, [
              {
                key: 'reset',
                value: function () {
                  (this.xRounder = new G()), (this.yRounder = new G());
                },
              },
              {
                key: 'round',
                value: function (s, h) {
                  return {
                    x: this.xRounder.round(s),
                    y: this.yRounder.round(h),
                  };
                },
              },
            ]),
            m
          );
        })(),
        G = (function () {
          function m() {
            t(this, m), (this.tree = new v()), this.round(0);
          }
          return (
            r(m, [
              {
                key: 'round',
                value: function (s) {
                  var h = this.tree.add(s),
                    p = this.tree.prev(h);
                  if (p !== null && R(h.key, p.key) === 0)
                    return this.tree.remove(s), p.key;
                  var d = this.tree.next(h);
                  return d !== null && R(h.key, d.key) === 0
                    ? (this.tree.remove(s), d.key)
                    : s;
                },
              },
            ]),
            m
          );
        })(),
        z = new T(),
        A = function (l, s) {
          return l.x * s.y - l.y * s.x;
        },
        j = function (l, s) {
          return l.x * s.x + l.y * s.y;
        },
        F = function (l, s, h) {
          var p = { x: s.x - l.x, y: s.y - l.y },
            d = { x: h.x - l.x, y: h.y - l.y },
            y = A(p, d);
          return R(y, 0);
        },
        Y = function (l) {
          return Math.sqrt(j(l, l));
        },
        Mt = function (l, s, h) {
          var p = { x: s.x - l.x, y: s.y - l.y },
            d = { x: h.x - l.x, y: h.y - l.y };
          return A(d, p) / Y(d) / Y(p);
        },
        ft = function (l, s, h) {
          var p = { x: s.x - l.x, y: s.y - l.y },
            d = { x: h.x - l.x, y: h.y - l.y };
          return j(d, p) / Y(d) / Y(p);
        },
        ut = function (l, s, h) {
          return s.y === 0 ? null : { x: l.x + (s.x / s.y) * (h - l.y), y: h };
        },
        dt = function (l, s, h) {
          return s.x === 0 ? null : { x: h, y: l.y + (s.y / s.x) * (h - l.x) };
        },
        ne = function (l, s, h, p) {
          if (s.x === 0) return dt(h, p, l.x);
          if (p.x === 0) return dt(l, s, h.x);
          if (s.y === 0) return ut(h, p, l.y);
          if (p.y === 0) return ut(l, s, h.y);
          var d = A(s, p);
          if (d == 0) return null;
          var y = { x: h.x - l.x, y: h.y - l.y },
            x = A(y, s) / d,
            C = A(y, p) / d,
            D = l.x + C * s.x,
            q = h.x + x * p.x,
            V = l.y + C * s.y,
            K = h.y + x * p.y,
            U = (D + q) / 2,
            $ = (V + K) / 2;
          return { x: U, y: $ };
        },
        tt = (function () {
          r(m, null, [
            {
              key: 'compare',
              value: function (s, h) {
                var p = m.comparePoints(s.point, h.point);
                return p !== 0
                  ? p
                  : (s.point !== h.point && s.link(h),
                    s.isLeft !== h.isLeft
                      ? s.isLeft
                        ? 1
                        : -1
                      : et.compare(s.segment, h.segment));
              },
            },
            {
              key: 'comparePoints',
              value: function (s, h) {
                return s.x < h.x
                  ? -1
                  : s.x > h.x
                    ? 1
                    : s.y < h.y
                      ? -1
                      : s.y > h.y
                        ? 1
                        : 0;
              },
            },
          ]);
          function m(l, s) {
            t(this, m),
              l.events === void 0 ? (l.events = [this]) : l.events.push(this),
              (this.point = l),
              (this.isLeft = s);
          }
          return (
            r(m, [
              {
                key: 'link',
                value: function (s) {
                  if (s.point === this.point)
                    throw new Error('Tried to link already linked events');
                  for (
                    var h = s.point.events, p = 0, d = h.length;
                    p < d;
                    p++
                  ) {
                    var y = h[p];
                    this.point.events.push(y), (y.point = this.point);
                  }
                  this.checkForConsuming();
                },
              },
              {
                key: 'checkForConsuming',
                value: function () {
                  for (var s = this.point.events.length, h = 0; h < s; h++) {
                    var p = this.point.events[h];
                    if (p.segment.consumedBy === void 0)
                      for (var d = h + 1; d < s; d++) {
                        var y = this.point.events[d];
                        y.consumedBy === void 0 &&
                          p.otherSE.point.events === y.otherSE.point.events &&
                          p.segment.consume(y.segment);
                      }
                  }
                },
              },
              {
                key: 'getAvailableLinkedEvents',
                value: function () {
                  for (
                    var s = [], h = 0, p = this.point.events.length;
                    h < p;
                    h++
                  ) {
                    var d = this.point.events[h];
                    d !== this &&
                      !d.segment.ringOut &&
                      d.segment.isInResult() &&
                      s.push(d);
                  }
                  return s;
                },
              },
              {
                key: 'getLeftmostComparator',
                value: function (s) {
                  var h = this,
                    p = new Map(),
                    d = function (x) {
                      var C = x.otherSE;
                      p.set(x, {
                        sine: Mt(h.point, s.point, C.point),
                        cosine: ft(h.point, s.point, C.point),
                      });
                    };
                  return function (y, x) {
                    p.has(y) || d(y), p.has(x) || d(x);
                    var C = p.get(y),
                      D = C.sine,
                      q = C.cosine,
                      V = p.get(x),
                      K = V.sine,
                      U = V.cosine;
                    return D >= 0 && K >= 0
                      ? q < U
                        ? 1
                        : q > U
                          ? -1
                          : 0
                      : D < 0 && K < 0
                        ? q < U
                          ? -1
                          : q > U
                            ? 1
                            : 0
                        : K < D
                          ? -1
                          : K > D
                            ? 1
                            : 0;
                  };
                },
              },
            ]),
            m
          );
        })(),
        xt = 0,
        et = (function () {
          r(m, null, [
            {
              key: 'compare',
              value: function (s, h) {
                var p = s.leftSE.point.x,
                  d = h.leftSE.point.x,
                  y = s.rightSE.point.x,
                  x = h.rightSE.point.x;
                if (x < p) return 1;
                if (y < d) return -1;
                var C = s.leftSE.point.y,
                  D = h.leftSE.point.y,
                  q = s.rightSE.point.y,
                  V = h.rightSE.point.y;
                if (p < d) {
                  if (D < C && D < q) return 1;
                  if (D > C && D > q) return -1;
                  var K = s.comparePoint(h.leftSE.point);
                  if (K < 0) return 1;
                  if (K > 0) return -1;
                  var U = h.comparePoint(s.rightSE.point);
                  return U !== 0 ? U : -1;
                }
                if (p > d) {
                  if (C < D && C < V) return -1;
                  if (C > D && C > V) return 1;
                  var $ = h.comparePoint(s.leftSE.point);
                  if ($ !== 0) return $;
                  var X = s.comparePoint(h.rightSE.point);
                  return X < 0 ? 1 : X > 0 ? -1 : 1;
                }
                if (C < D) return -1;
                if (C > D) return 1;
                if (y < x) {
                  var W = h.comparePoint(s.rightSE.point);
                  if (W !== 0) return W;
                }
                if (y > x) {
                  var at = s.comparePoint(h.rightSE.point);
                  if (at < 0) return 1;
                  if (at > 0) return -1;
                }
                if (y !== x) {
                  var st = q - C,
                    ct = y - p,
                    rt = V - D,
                    vt = x - d;
                  if (st > ct && rt < vt) return 1;
                  if (st < ct && rt > vt) return -1;
                }
                return y > x
                  ? 1
                  : y < x || q < V
                    ? -1
                    : q > V
                      ? 1
                      : s.id < h.id
                        ? -1
                        : s.id > h.id
                          ? 1
                          : 0;
              },
            },
          ]);
          function m(l, s, h, p) {
            t(this, m),
              (this.id = ++xt),
              (this.leftSE = l),
              (l.segment = this),
              (l.otherSE = s),
              (this.rightSE = s),
              (s.segment = this),
              (s.otherSE = l),
              (this.rings = h),
              (this.windings = p);
          }
          return (
            r(
              m,
              [
                {
                  key: 'replaceRightSE',
                  value: function (s) {
                    (this.rightSE = s),
                      (this.rightSE.segment = this),
                      (this.rightSE.otherSE = this.leftSE),
                      (this.leftSE.otherSE = this.rightSE);
                  },
                },
                {
                  key: 'bbox',
                  value: function () {
                    var s = this.leftSE.point.y,
                      h = this.rightSE.point.y;
                    return {
                      ll: { x: this.leftSE.point.x, y: s < h ? s : h },
                      ur: { x: this.rightSE.point.x, y: s > h ? s : h },
                    };
                  },
                },
                {
                  key: 'vector',
                  value: function () {
                    return {
                      x: this.rightSE.point.x - this.leftSE.point.x,
                      y: this.rightSE.point.y - this.leftSE.point.y,
                    };
                  },
                },
                {
                  key: 'isAnEndpoint',
                  value: function (s) {
                    return (
                      (s.x === this.leftSE.point.x &&
                        s.y === this.leftSE.point.y) ||
                      (s.x === this.rightSE.point.x &&
                        s.y === this.rightSE.point.y)
                    );
                  },
                },
                {
                  key: 'comparePoint',
                  value: function (s) {
                    if (this.isAnEndpoint(s)) return 0;
                    var h = this.leftSE.point,
                      p = this.rightSE.point,
                      d = this.vector();
                    if (h.x === p.x)
                      return s.x === h.x ? 0 : s.x < h.x ? 1 : -1;
                    var y = (s.y - h.y) / d.y,
                      x = h.x + y * d.x;
                    if (s.x === x) return 0;
                    var C = (s.x - h.x) / d.x,
                      D = h.y + C * d.y;
                    return s.y === D ? 0 : s.y < D ? -1 : 1;
                  },
                },
                {
                  key: 'getIntersection',
                  value: function (s) {
                    var h = this.bbox(),
                      p = s.bbox(),
                      d = w(h, p);
                    if (d === null) return null;
                    var y = this.leftSE.point,
                      x = this.rightSE.point,
                      C = s.leftSE.point,
                      D = s.rightSE.point,
                      q = _(h, C) && this.comparePoint(C) === 0,
                      V = _(p, y) && s.comparePoint(y) === 0,
                      K = _(h, D) && this.comparePoint(D) === 0,
                      U = _(p, x) && s.comparePoint(x) === 0;
                    if (V && q) return U && !K ? x : !U && K ? D : null;
                    if (V) return K && y.x === D.x && y.y === D.y ? null : y;
                    if (q) return U && x.x === C.x && x.y === C.y ? null : C;
                    if (U && K) return null;
                    if (U) return x;
                    if (K) return D;
                    var $ = ne(y, this.vector(), C, s.vector());
                    return $ === null || !_(d, $) ? null : z.round($.x, $.y);
                  },
                },
                {
                  key: 'split',
                  value: function (s) {
                    var h = [],
                      p = s.events !== void 0,
                      d = new tt(s, !0),
                      y = new tt(s, !1),
                      x = this.rightSE;
                    this.replaceRightSE(y), h.push(y), h.push(d);
                    var C = new m(
                      d,
                      x,
                      this.rings.slice(),
                      this.windings.slice()
                    );
                    return (
                      tt.comparePoints(C.leftSE.point, C.rightSE.point) > 0 &&
                        C.swapEvents(),
                      tt.comparePoints(this.leftSE.point, this.rightSE.point) >
                        0 && this.swapEvents(),
                      p && (d.checkForConsuming(), y.checkForConsuming()),
                      h
                    );
                  },
                },
                {
                  key: 'swapEvents',
                  value: function () {
                    var s = this.rightSE;
                    (this.rightSE = this.leftSE),
                      (this.leftSE = s),
                      (this.leftSE.isLeft = !0),
                      (this.rightSE.isLeft = !1);
                    for (var h = 0, p = this.windings.length; h < p; h++)
                      this.windings[h] *= -1;
                  },
                },
                {
                  key: 'consume',
                  value: function (s) {
                    for (var h = this, p = s; h.consumedBy; ) h = h.consumedBy;
                    for (; p.consumedBy; ) p = p.consumedBy;
                    var d = m.compare(h, p);
                    if (d !== 0) {
                      if (d > 0) {
                        var y = h;
                        (h = p), (p = y);
                      }
                      if (h.prev === p) {
                        var x = h;
                        (h = p), (p = x);
                      }
                      for (var C = 0, D = p.rings.length; C < D; C++) {
                        var q = p.rings[C],
                          V = p.windings[C],
                          K = h.rings.indexOf(q);
                        K === -1
                          ? (h.rings.push(q), h.windings.push(V))
                          : (h.windings[K] += V);
                      }
                      (p.rings = null),
                        (p.windings = null),
                        (p.consumedBy = h),
                        (p.leftSE.consumedBy = h.leftSE),
                        (p.rightSE.consumedBy = h.rightSE);
                    }
                  },
                },
                {
                  key: 'prevInResult',
                  value: function () {
                    return this._prevInResult !== void 0
                      ? this._prevInResult
                      : (this.prev
                          ? this.prev.isInResult()
                            ? (this._prevInResult = this.prev)
                            : (this._prevInResult = this.prev.prevInResult())
                          : (this._prevInResult = null),
                        this._prevInResult);
                  },
                },
                {
                  key: 'beforeState',
                  value: function () {
                    if (this._beforeState !== void 0) return this._beforeState;
                    if (!this.prev)
                      this._beforeState = {
                        rings: [],
                        windings: [],
                        multiPolys: [],
                      };
                    else {
                      var s = this.prev.consumedBy || this.prev;
                      this._beforeState = s.afterState();
                    }
                    return this._beforeState;
                  },
                },
                {
                  key: 'afterState',
                  value: function () {
                    if (this._afterState !== void 0) return this._afterState;
                    var s = this.beforeState();
                    this._afterState = {
                      rings: s.rings.slice(0),
                      windings: s.windings.slice(0),
                      multiPolys: [],
                    };
                    for (
                      var h = this._afterState.rings,
                        p = this._afterState.windings,
                        d = this._afterState.multiPolys,
                        y = 0,
                        x = this.rings.length;
                      y < x;
                      y++
                    ) {
                      var C = this.rings[y],
                        D = this.windings[y],
                        q = h.indexOf(C);
                      q === -1 ? (h.push(C), p.push(D)) : (p[q] += D);
                    }
                    for (var V = [], K = [], U = 0, $ = h.length; U < $; U++)
                      if (p[U] !== 0) {
                        var X = h[U],
                          W = X.poly;
                        if (K.indexOf(W) === -1)
                          if (X.isExterior) V.push(W);
                          else {
                            K.indexOf(W) === -1 && K.push(W);
                            var at = V.indexOf(X.poly);
                            at !== -1 && V.splice(at, 1);
                          }
                      }
                    for (var st = 0, ct = V.length; st < ct; st++) {
                      var rt = V[st].multiPoly;
                      d.indexOf(rt) === -1 && d.push(rt);
                    }
                    return this._afterState;
                  },
                },
                {
                  key: 'isInResult',
                  value: function () {
                    if (this.consumedBy) return !1;
                    if (this._isInResult !== void 0) return this._isInResult;
                    var s = this.beforeState().multiPolys,
                      h = this.afterState().multiPolys;
                    switch (gt.type) {
                      case 'union': {
                        var p = s.length === 0,
                          d = h.length === 0;
                        this._isInResult = p !== d;
                        break;
                      }
                      case 'intersection': {
                        var y, x;
                        s.length < h.length
                          ? ((y = s.length), (x = h.length))
                          : ((y = h.length), (x = s.length)),
                          (this._isInResult = x === gt.numMultiPolys && y < x);
                        break;
                      }
                      case 'xor': {
                        var C = Math.abs(s.length - h.length);
                        this._isInResult = C % 2 === 1;
                        break;
                      }
                      case 'difference': {
                        var D = function (V) {
                          return V.length === 1 && V[0].isSubject;
                        };
                        this._isInResult = D(s) !== D(h);
                        break;
                      }
                      default:
                        throw new Error(
                          'Unrecognized operation type found '.concat(gt.type)
                        );
                    }
                    return this._isInResult;
                  },
                },
              ],
              [
                {
                  key: 'fromRing',
                  value: function (s, h, p) {
                    var d,
                      y,
                      x,
                      C = tt.comparePoints(s, h);
                    if (C < 0) (d = s), (y = h), (x = 1);
                    else if (C > 0) (d = h), (y = s), (x = -1);
                    else
                      throw new Error(
                        'Tried to create degenerate segment at ['
                          .concat(s.x, ', ')
                          .concat(s.y, ']')
                      );
                    var D = new tt(d, !0),
                      q = new tt(y, !1);
                    return new m(D, q, [p], [x]);
                  },
                },
              ]
            ),
            m
          );
        })(),
        zr = (function () {
          function m(l, s, h) {
            if ((t(this, m), !Array.isArray(l) || l.length === 0))
              throw new Error(
                'Input geometry is not a valid Polygon or MultiPolygon'
              );
            if (
              ((this.poly = s),
              (this.isExterior = h),
              (this.segments = []),
              typeof l[0][0] != 'number' || typeof l[0][1] != 'number')
            )
              throw new Error(
                'Input geometry is not a valid Polygon or MultiPolygon'
              );
            var p = z.round(l[0][0], l[0][1]);
            this.bbox = { ll: { x: p.x, y: p.y }, ur: { x: p.x, y: p.y } };
            for (var d = p, y = 1, x = l.length; y < x; y++) {
              if (typeof l[y][0] != 'number' || typeof l[y][1] != 'number')
                throw new Error(
                  'Input geometry is not a valid Polygon or MultiPolygon'
                );
              var C = z.round(l[y][0], l[y][1]);
              (C.x === d.x && C.y === d.y) ||
                (this.segments.push(et.fromRing(d, C, this)),
                C.x < this.bbox.ll.x && (this.bbox.ll.x = C.x),
                C.y < this.bbox.ll.y && (this.bbox.ll.y = C.y),
                C.x > this.bbox.ur.x && (this.bbox.ur.x = C.x),
                C.y > this.bbox.ur.y && (this.bbox.ur.y = C.y),
                (d = C));
            }
            (p.x !== d.x || p.y !== d.y) &&
              this.segments.push(et.fromRing(d, p, this));
          }
          return (
            r(m, [
              {
                key: 'getSweepEvents',
                value: function () {
                  for (
                    var s = [], h = 0, p = this.segments.length;
                    h < p;
                    h++
                  ) {
                    var d = this.segments[h];
                    s.push(d.leftSE), s.push(d.rightSE);
                  }
                  return s;
                },
              },
            ]),
            m
          );
        })(),
        bl = (function () {
          function m(l, s) {
            if ((t(this, m), !Array.isArray(l)))
              throw new Error(
                'Input geometry is not a valid Polygon or MultiPolygon'
              );
            (this.exteriorRing = new zr(l[0], this, !0)),
              (this.bbox = {
                ll: {
                  x: this.exteriorRing.bbox.ll.x,
                  y: this.exteriorRing.bbox.ll.y,
                },
                ur: {
                  x: this.exteriorRing.bbox.ur.x,
                  y: this.exteriorRing.bbox.ur.y,
                },
              }),
              (this.interiorRings = []);
            for (var h = 1, p = l.length; h < p; h++) {
              var d = new zr(l[h], this, !1);
              d.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = d.bbox.ll.x),
                d.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = d.bbox.ll.y),
                d.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = d.bbox.ur.x),
                d.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = d.bbox.ur.y),
                this.interiorRings.push(d);
            }
            this.multiPoly = s;
          }
          return (
            r(m, [
              {
                key: 'getSweepEvents',
                value: function () {
                  for (
                    var s = this.exteriorRing.getSweepEvents(),
                      h = 0,
                      p = this.interiorRings.length;
                    h < p;
                    h++
                  )
                    for (
                      var d = this.interiorRings[h].getSweepEvents(),
                        y = 0,
                        x = d.length;
                      y < x;
                      y++
                    )
                      s.push(d[y]);
                  return s;
                },
              },
            ]),
            m
          );
        })(),
        Nr = (function () {
          function m(l, s) {
            if ((t(this, m), !Array.isArray(l)))
              throw new Error(
                'Input geometry is not a valid Polygon or MultiPolygon'
              );
            try {
              typeof l[0][0][0] == 'number' && (l = [l]);
            } catch {}
            (this.polys = []),
              (this.bbox = {
                ll: {
                  x: Number.POSITIVE_INFINITY,
                  y: Number.POSITIVE_INFINITY,
                },
                ur: {
                  x: Number.NEGATIVE_INFINITY,
                  y: Number.NEGATIVE_INFINITY,
                },
              });
            for (var h = 0, p = l.length; h < p; h++) {
              var d = new bl(l[h], this);
              d.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = d.bbox.ll.x),
                d.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = d.bbox.ll.y),
                d.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = d.bbox.ur.x),
                d.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = d.bbox.ur.y),
                this.polys.push(d);
            }
            this.isSubject = s;
          }
          return (
            r(m, [
              {
                key: 'getSweepEvents',
                value: function () {
                  for (var s = [], h = 0, p = this.polys.length; h < p; h++)
                    for (
                      var d = this.polys[h].getSweepEvents(),
                        y = 0,
                        x = d.length;
                      y < x;
                      y++
                    )
                      s.push(d[y]);
                  return s;
                },
              },
            ]),
            m
          );
        })(),
        kl = (function () {
          r(m, null, [
            {
              key: 'factory',
              value: function (s) {
                for (var h = [], p = 0, d = s.length; p < d; p++) {
                  var y = s[p];
                  if (!(!y.isInResult() || y.ringOut)) {
                    for (
                      var x = null,
                        C = y.leftSE,
                        D = y.rightSE,
                        q = [C],
                        V = C.point,
                        K = [];
                      (x = C), (C = D), q.push(C), C.point !== V;

                    )
                      for (;;) {
                        var U = C.getAvailableLinkedEvents();
                        if (U.length === 0) {
                          var $ = q[0].point,
                            X = q[q.length - 1].point;
                          throw new Error(
                            'Unable to complete output ring starting at ['.concat(
                              $.x,
                              ','
                            ) +
                              ' '.concat(
                                $.y,
                                ']. Last matching segment found ends at'
                              ) +
                              ' ['.concat(X.x, ', ').concat(X.y, '].')
                          );
                        }
                        if (U.length === 1) {
                          D = U[0].otherSE;
                          break;
                        }
                        for (var W = null, at = 0, st = K.length; at < st; at++)
                          if (K[at].point === C.point) {
                            W = at;
                            break;
                          }
                        if (W !== null) {
                          var ct = K.splice(W)[0],
                            rt = q.splice(ct.index);
                          rt.unshift(rt[0].otherSE),
                            h.push(new m(rt.reverse()));
                          continue;
                        }
                        K.push({ index: q.length, point: C.point });
                        var vt = C.getLeftmostComparator(x);
                        D = U.sort(vt)[0].otherSE;
                        break;
                      }
                    h.push(new m(q));
                  }
                }
                return h;
              },
            },
          ]);
          function m(l) {
            t(this, m), (this.events = l);
            for (var s = 0, h = l.length; s < h; s++)
              l[s].segment.ringOut = this;
            this.poly = null;
          }
          return (
            r(m, [
              {
                key: 'getGeom',
                value: function () {
                  for (
                    var s = this.events[0].point,
                      h = [s],
                      p = 1,
                      d = this.events.length - 1;
                    p < d;
                    p++
                  ) {
                    var y = this.events[p].point,
                      x = this.events[p + 1].point;
                    F(y, s, x) !== 0 && (h.push(y), (s = y));
                  }
                  if (h.length === 1) return null;
                  var C = h[0],
                    D = h[1];
                  F(C, s, D) === 0 && h.shift(), h.push(h[0]);
                  for (
                    var q = this.isExteriorRing() ? 1 : -1,
                      V = this.isExteriorRing() ? 0 : h.length - 1,
                      K = this.isExteriorRing() ? h.length : -1,
                      U = [],
                      $ = V;
                    $ != K;
                    $ += q
                  )
                    U.push([h[$].x, h[$].y]);
                  return U;
                },
              },
              {
                key: 'isExteriorRing',
                value: function () {
                  if (this._isExteriorRing === void 0) {
                    var s = this.enclosingRing();
                    this._isExteriorRing = s ? !s.isExteriorRing() : !0;
                  }
                  return this._isExteriorRing;
                },
              },
              {
                key: 'enclosingRing',
                value: function () {
                  return (
                    this._enclosingRing === void 0 &&
                      (this._enclosingRing = this._calcEnclosingRing()),
                    this._enclosingRing
                  );
                },
              },
              {
                key: '_calcEnclosingRing',
                value: function () {
                  for (
                    var s = this.events[0], h = 1, p = this.events.length;
                    h < p;
                    h++
                  ) {
                    var d = this.events[h];
                    tt.compare(s, d) > 0 && (s = d);
                  }
                  for (
                    var y = s.segment.prevInResult(),
                      x = y ? y.prevInResult() : null;
                    ;

                  ) {
                    if (!y) return null;
                    if (!x) return y.ringOut;
                    if (x.ringOut !== y.ringOut)
                      return x.ringOut.enclosingRing() !== y.ringOut
                        ? y.ringOut
                        : y.ringOut.enclosingRing();
                    (y = x.prevInResult()), (x = y ? y.prevInResult() : null);
                  }
                },
              },
            ]),
            m
          );
        })(),
        Fr = (function () {
          function m(l) {
            t(this, m),
              (this.exteriorRing = l),
              (l.poly = this),
              (this.interiorRings = []);
          }
          return (
            r(m, [
              {
                key: 'addInterior',
                value: function (s) {
                  this.interiorRings.push(s), (s.poly = this);
                },
              },
              {
                key: 'getGeom',
                value: function () {
                  var s = [this.exteriorRing.getGeom()];
                  if (s[0] === null) return null;
                  for (var h = 0, p = this.interiorRings.length; h < p; h++) {
                    var d = this.interiorRings[h].getGeom();
                    d !== null && s.push(d);
                  }
                  return s;
                },
              },
            ]),
            m
          );
        })(),
        Ml = (function () {
          function m(l) {
            t(this, m), (this.rings = l), (this.polys = this._composePolys(l));
          }
          return (
            r(m, [
              {
                key: 'getGeom',
                value: function () {
                  for (var s = [], h = 0, p = this.polys.length; h < p; h++) {
                    var d = this.polys[h].getGeom();
                    d !== null && s.push(d);
                  }
                  return s;
                },
              },
              {
                key: '_composePolys',
                value: function (s) {
                  for (var h = [], p = 0, d = s.length; p < d; p++) {
                    var y = s[p];
                    if (!y.poly)
                      if (y.isExteriorRing()) h.push(new Fr(y));
                      else {
                        var x = y.enclosingRing();
                        x.poly || h.push(new Fr(x)), x.poly.addInterior(y);
                      }
                  }
                  return h;
                },
              },
            ]),
            m
          );
        })(),
        xl = (function () {
          function m(l) {
            var s =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : et.compare;
            t(this, m),
              (this.queue = l),
              (this.tree = new v(s)),
              (this.segments = []);
          }
          return (
            r(m, [
              {
                key: 'process',
                value: function (s) {
                  var h = s.segment,
                    p = [];
                  if (s.consumedBy)
                    return (
                      s.isLeft
                        ? this.queue.remove(s.otherSE)
                        : this.tree.remove(h),
                      p
                    );
                  var d = s.isLeft ? this.tree.insert(h) : this.tree.find(h);
                  if (!d)
                    throw new Error(
                      'Unable to find segment #'.concat(h.id, ' ') +
                        '['
                          .concat(h.leftSE.point.x, ', ')
                          .concat(h.leftSE.point.y, '] -> ') +
                        '['
                          .concat(h.rightSE.point.x, ', ')
                          .concat(h.rightSE.point.y, '] ') +
                        'in SweepLine tree. Please submit a bug report.'
                    );
                  for (var y = d, x = d, C = void 0, D = void 0; C === void 0; )
                    (y = this.tree.prev(y)),
                      y === null
                        ? (C = null)
                        : y.key.consumedBy === void 0 && (C = y.key);
                  for (; D === void 0; )
                    (x = this.tree.next(x)),
                      x === null
                        ? (D = null)
                        : x.key.consumedBy === void 0 && (D = x.key);
                  if (s.isLeft) {
                    var q = null;
                    if (C) {
                      var V = C.getIntersection(h);
                      if (
                        V !== null &&
                        (h.isAnEndpoint(V) || (q = V), !C.isAnEndpoint(V))
                      )
                        for (
                          var K = this._splitSafely(C, V), U = 0, $ = K.length;
                          U < $;
                          U++
                        )
                          p.push(K[U]);
                    }
                    var X = null;
                    if (D) {
                      var W = D.getIntersection(h);
                      if (
                        W !== null &&
                        (h.isAnEndpoint(W) || (X = W), !D.isAnEndpoint(W))
                      )
                        for (
                          var at = this._splitSafely(D, W),
                            st = 0,
                            ct = at.length;
                          st < ct;
                          st++
                        )
                          p.push(at[st]);
                    }
                    if (q !== null || X !== null) {
                      var rt = null;
                      if (q === null) rt = X;
                      else if (X === null) rt = q;
                      else {
                        var vt = tt.comparePoints(q, X);
                        rt = vt <= 0 ? q : X;
                      }
                      this.queue.remove(h.rightSE), p.push(h.rightSE);
                      for (
                        var ae = h.split(rt), Ot = 0, It = ae.length;
                        Ot < It;
                        Ot++
                      )
                        p.push(ae[Ot]);
                    }
                    p.length > 0
                      ? (this.tree.remove(h), p.push(s))
                      : (this.segments.push(h), (h.prev = C));
                  } else {
                    if (C && D) {
                      var mt = C.getIntersection(D);
                      if (mt !== null) {
                        if (!C.isAnEndpoint(mt))
                          for (
                            var se = this._splitSafely(C, mt),
                              At = 0,
                              Ue = se.length;
                            At < Ue;
                            At++
                          )
                            p.push(se[At]);
                        if (!D.isAnEndpoint(mt))
                          for (
                            var oe = this._splitSafely(D, mt),
                              le = 0,
                              je = oe.length;
                            le < je;
                            le++
                          )
                            p.push(oe[le]);
                      }
                    }
                    this.tree.remove(h);
                  }
                  return p;
                },
              },
              {
                key: '_splitSafely',
                value: function (s, h) {
                  this.tree.remove(s);
                  var p = s.rightSE;
                  this.queue.remove(p);
                  var d = s.split(h);
                  return (
                    d.push(p), s.consumedBy === void 0 && this.tree.insert(s), d
                  );
                },
              },
            ]),
            m
          );
        })(),
        Vr =
          (typeof process < 'u' &&
            process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE) ||
          1e6,
        wl =
          (typeof process < 'u' &&
            process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS) ||
          1e6,
        Cl = (function () {
          function m() {
            t(this, m);
          }
          return (
            r(m, [
              {
                key: 'run',
                value: function (s, h, p) {
                  (gt.type = s), z.reset();
                  for (var d = [new Nr(h, !0)], y = 0, x = p.length; y < x; y++)
                    d.push(new Nr(p[y], !1));
                  if (((gt.numMultiPolys = d.length), gt.type === 'difference'))
                    for (var C = d[0], D = 1; D < d.length; )
                      w(d[D].bbox, C.bbox) !== null ? D++ : d.splice(D, 1);
                  if (gt.type === 'intersection') {
                    for (var q = 0, V = d.length; q < V; q++)
                      for (var K = d[q], U = q + 1, $ = d.length; U < $; U++)
                        if (w(K.bbox, d[U].bbox) === null) return [];
                  }
                  for (
                    var X = new v(tt.compare), W = 0, at = d.length;
                    W < at;
                    W++
                  )
                    for (
                      var st = d[W].getSweepEvents(), ct = 0, rt = st.length;
                      ct < rt;
                      ct++
                    )
                      if ((X.insert(st[ct]), X.size > Vr))
                        throw new Error(
                          'Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.'
                        );
                  for (var vt = new xl(X), ae = X.size, Ot = X.pop(); Ot; ) {
                    var It = Ot.key;
                    if (X.size === ae) {
                      var mt = It.segment;
                      throw new Error(
                        'Unable to pop() '.concat(
                          It.isLeft ? 'left' : 'right',
                          ' SweepEvent '
                        ) +
                          '['
                            .concat(It.point.x, ', ')
                            .concat(It.point.y, '] from segment #')
                            .concat(mt.id, ' ') +
                          '['
                            .concat(mt.leftSE.point.x, ', ')
                            .concat(mt.leftSE.point.y, '] -> ') +
                          '['
                            .concat(mt.rightSE.point.x, ', ')
                            .concat(mt.rightSE.point.y, '] from queue. ') +
                          'Please file a bug report.'
                      );
                    }
                    if (X.size > Vr)
                      throw new Error(
                        'Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.'
                      );
                    if (vt.segments.length > wl)
                      throw new Error(
                        'Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.'
                      );
                    for (
                      var se = vt.process(It), At = 0, Ue = se.length;
                      At < Ue;
                      At++
                    ) {
                      var oe = se[At];
                      oe.consumedBy === void 0 && X.insert(oe);
                    }
                    (ae = X.size), (Ot = X.pop());
                  }
                  z.reset();
                  var le = kl.factory(vt.segments),
                    je = new Ml(le);
                  return je.getGeom();
                },
              },
            ]),
            m
          );
        })(),
        gt = new Cl(),
        Pl = function (l) {
          for (
            var s = arguments.length, h = new Array(s > 1 ? s - 1 : 0), p = 1;
            p < s;
            p++
          )
            h[p - 1] = arguments[p];
          return gt.run('union', l, h);
        },
        El = function (l) {
          for (
            var s = arguments.length, h = new Array(s > 1 ? s - 1 : 0), p = 1;
            p < s;
            p++
          )
            h[p - 1] = arguments[p];
          return gt.run('intersection', l, h);
        },
        Sl = function (l) {
          for (
            var s = arguments.length, h = new Array(s > 1 ? s - 1 : 0), p = 1;
            p < s;
            p++
          )
            h[p - 1] = arguments[p];
          return gt.run('xor', l, h);
        },
        Bl = function (l) {
          for (
            var s = arguments.length, h = new Array(s > 1 ? s - 1 : 0), p = 1;
            p < s;
            p++
          )
            h[p - 1] = arguments[p];
          return gt.run('difference', l, h);
        },
        Rl = { union: Pl, intersection: El, xor: Sl, difference: Bl };
      return Rl;
    });
  });
  Array.prototype.findIndex =
    Array.prototype.findIndex ||
    function (t) {
      if (this === null)
        throw new TypeError(
          'Array.prototype.findIndex called on null or undefined'
        );
      if (typeof t != 'function')
        throw new TypeError('callback must be a function');
      for (
        var e = Object(this), r = e.length >>> 0, i = arguments[1], n = 0;
        n < r;
        n++
      )
        if (t.call(i, e[n], n, e)) return n;
      return -1;
    };
  Array.prototype.find =
    Array.prototype.find ||
    function (t) {
      if (this === null)
        throw new TypeError('Array.prototype.find called on null or undefined');
      if (typeof t != 'function')
        throw new TypeError('callback must be a function');
      for (
        var e = Object(this), r = e.length >>> 0, i = arguments[1], n = 0;
        n < r;
        n++
      ) {
        var a = e[n];
        if (t.call(i, a, n, e)) return a;
      }
    };
  typeof Object.assign != 'function' &&
    (Object.assign = function (t) {
      'use strict';
      if (t == null)
        throw new TypeError('Cannot convert undefined or null to object');
      t = Object(t);
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        if (r != null)
          for (var i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
      }
      return t;
    });
  (function (t) {
    t.forEach(function (e) {
      e.hasOwnProperty('remove') ||
        Object.defineProperty(e, 'remove', {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function () {
            this.parentNode.removeChild(this);
          },
        });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
  Array.prototype.includes ||
    Object.defineProperty(Array.prototype, 'includes', {
      value: function (t, e) {
        if (this == null) throw new TypeError('"this" is null or not defined');
        var r = Object(this),
          i = r.length >>> 0;
        if (i === 0) return !1;
        var n = e | 0,
          a = Math.max(n >= 0 ? n : i - Math.abs(n), 0);
        function o(u, c) {
          return (
            u === c ||
            (typeof u == 'number' &&
              typeof c == 'number' &&
              isNaN(u) &&
              isNaN(c))
          );
        }
        for (; a < i; ) {
          if (o(r[a], t)) return !0;
          a++;
        }
        return !1;
      },
    });
  var jr = {
    name: '@geoman-io/leaflet-geoman-free',
    version: '2.16.0',
    description: 'A Leaflet Plugin For Editing Geometry Layers in Leaflet 1.0',
    keywords: [
      'leaflet',
      'geoman',
      'polygon management',
      'geometry editing',
      'map data',
      'map overlay',
      'polygon',
      'geojson',
      'leaflet-draw',
      'data-field-geojson',
      'ui-leaflet-draw',
    ],
    files: ['dist'],
    main: 'dist/leaflet-geoman.js',
    types: 'dist/leaflet-geoman.d.ts',
    dependencies: {
      '@turf/boolean-contains': '^6.5.0',
      '@turf/kinks': '^6.5.0',
      '@turf/line-intersect': '^6.5.0',
      '@turf/line-split': '^6.5.0',
      lodash: '4.17.21',
      'polygon-clipping': '0.15.3',
    },
    devDependencies: {
      '@types/leaflet': '^1.7.9',
      'cross-env': '^7.0.3',
      cypress: '6.9.1',
      'cypress-wait-until': '1.7.1',
      esbuild: '^0.20.0',
      eslint: '8.56.0',
      'eslint-config-airbnb-base': '15.0.0',
      'eslint-config-prettier': '9.1.0',
      'eslint-plugin-cypress': '2.15.1',
      'eslint-plugin-import': '2.29.1',
      husky: '^9.0.7',
      leaflet: '1.9.3',
      'lint-staged': '^15.2.1',
      prettier: '3.2.4',
      'prosthetic-hand': '1.3.1',
      'ts-node': '^10.9.2',
    },
    peerDependencies: { leaflet: '^1.2.0' },
    scripts: {
      start: 'pnpm run dev',
      dev: 'cross-env DEV=true ts-node bundle.mjs',
      build: 'ts-node bundle.mjs',
      test: 'cypress run',
      cypress: 'cypress open',
      prepare: 'pnpm run build && husky',
      'eslint-check': 'eslint --print-config . | eslint-config-prettier-check',
      eslint: 'eslint "{src,cypress,demo}/**/*.js" --fix ',
      prettier:
        'prettier --write "{src,cypress,demo}/**/*.{js,css}" --log-level=warn',
      lint: 'pnpm run eslint && pnpm run prettier',
    },
    repository: {
      type: 'git',
      url: 'git://github.com/geoman-io/leaflet-geoman.git',
    },
    author: {
      name: 'Geoman.io',
      email: 'sales@geoman.io',
      url: 'http://geoman.io',
    },
    license: 'MIT',
    bugs: { url: 'https://github.com/geoman-io/leaflet-geoman/issues' },
    homepage: 'https://geoman.io',
    prettier: { trailingComma: 'es5', tabWidth: 2, semi: !0, singleQuote: !0 },
    'lint-staged': {
      '*.js': 'eslint "{src,cypress,demo}/**/*.js" --fix',
      '*.{js,css,md}': 'prettier --write "{src,cypress,demo}/**/*.{js,css}"',
    },
  };
  var pr = Lt(Te());
  var ys = {
    tooltips: {
      placeMarker: 'Click to place marker',
      firstVertex: 'Click to place first vertex',
      continueLine: 'Click to continue drawing',
      finishLine: 'Click any existing marker to finish',
      finishPoly: 'Click first marker to finish',
      finishRect: 'Click to finish',
      startCircle: 'Click to place circle center',
      finishCircle: 'Click to finish circle',
      placeCircleMarker: 'Click to place circle marker',
      placeText: 'Click to place text',
    },
    actions: {
      finish: 'Finish',
      cancel: 'Cancel',
      removeLastVertex: 'Remove Last Vertex',
    },
    buttonTitles: {
      drawMarkerButton: 'Draw Marker',
      drawPolyButton: 'Draw Polygons',
      drawLineButton: 'Draw Polyline',
      drawCircleButton: 'Draw Circle',
      drawRectButton: 'Draw Rectangle',
      editButton: 'Edit Layers',
      dragButton: 'Drag Layers',
      cutButton: 'Cut Layers',
      deleteButton: 'Remove Layers',
      drawCircleMarkerButton: 'Draw Circle Marker',
      snappingButton: 'Snap dragged marker to other layers and vertices',
      pinningButton: 'Pin shared vertices together',
      rotateButton: 'Rotate Layers',
      drawTextButton: 'Draw Text',
      scaleButton: 'Scale Layers',
      autoTracingButton: 'Auto trace Line',
    },
    measurements: {
      totalLength: 'Length',
      segmentLength: 'Segment length',
      area: 'Area',
      radius: 'Radius',
      perimeter: 'Perimeter',
      height: 'Height',
      width: 'Width',
      coordinates: 'Position',
      coordinatesMarker: 'Position Marker',
    },
  };
  var vs = {
    tooltips: {
      placeMarker: 'Platziere den Marker mit Klick',
      firstVertex: 'Platziere den ersten Marker mit Klick',
      continueLine: 'Klicke, um weiter zu zeichnen',
      finishLine: 'Beende mit Klick auf existierenden Marker',
      finishPoly: 'Beende mit Klick auf ersten Marker',
      finishRect: 'Beende mit Klick',
      startCircle: 'Platziere das Kreiszentrum mit Klick',
      finishCircle: 'Beende den Kreis mit Klick',
      placeCircleMarker: 'Platziere den Kreismarker mit Klick',
      placeText: 'Platziere den Text mit Klick',
    },
    actions: {
      finish: 'Beenden',
      cancel: 'Abbrechen',
      removeLastVertex: 'Letzten Vertex l\xF6schen',
    },
    buttonTitles: {
      drawMarkerButton: 'Marker zeichnen',
      drawPolyButton: 'Polygon zeichnen',
      drawLineButton: 'Polyline zeichnen',
      drawCircleButton: 'Kreis zeichnen',
      drawRectButton: 'Rechteck zeichnen',
      editButton: 'Layer editieren',
      dragButton: 'Layer bewegen',
      cutButton: 'Layer schneiden',
      deleteButton: 'Layer l\xF6schen',
      drawCircleMarkerButton: 'Kreismarker zeichnen',
      snappingButton: 'Bewegter Layer an andere Layer oder Vertexe einhacken',
      pinningButton: 'Vertexe an der gleichen Position verkn\xFCpfen',
      rotateButton: 'Layer drehen',
      drawTextButton: 'Text zeichnen',
      scaleButton: 'Layer skalieren',
      autoTracingButton: 'Linie automatisch nachzeichen',
    },
    measurements: {
      totalLength: 'L\xE4nge',
      segmentLength: 'Segment L\xE4nge',
      area: 'Fl\xE4che',
      radius: 'Radius',
      perimeter: 'Umfang',
      height: 'H\xF6he',
      width: 'Breite',
      coordinates: 'Position',
      coordinatesMarker: 'Position Marker',
    },
  };
  var Ls = {
    tooltips: {
      placeMarker: 'Clicca per posizionare un Marker',
      firstVertex: 'Clicca per posizionare il primo vertice',
      continueLine: 'Clicca per continuare a disegnare',
      finishLine: 'Clicca qualsiasi marker esistente per terminare',
      finishPoly: 'Clicca il primo marker per terminare',
      finishRect: 'Clicca per terminare',
      startCircle: 'Clicca per posizionare il punto centrale del cerchio',
      finishCircle: 'Clicca per terminare il cerchio',
      placeCircleMarker: 'Clicca per posizionare un Marker del cherchio',
    },
    actions: {
      finish: 'Termina',
      cancel: 'Annulla',
      removeLastVertex: "Rimuovi l'ultimo vertice",
    },
    buttonTitles: {
      drawMarkerButton: 'Disegna Marker',
      drawPolyButton: 'Disegna Poligoni',
      drawLineButton: 'Disegna Polilinea',
      drawCircleButton: 'Disegna Cerchio',
      drawRectButton: 'Disegna Rettangolo',
      editButton: 'Modifica Livelli',
      dragButton: 'Sposta Livelli',
      cutButton: 'Ritaglia Livelli',
      deleteButton: 'Elimina Livelli',
      drawCircleMarkerButton: 'Disegna Marker del Cerchio',
      snappingButton:
        'Snap ha trascinato il pennarello su altri strati e vertici',
      pinningButton: 'Pin condiviso vertici insieme',
      rotateButton: 'Ruota livello',
    },
  };
  var bs = {
    tooltips: {
      placeMarker: 'Klik untuk menempatkan marker',
      firstVertex: 'Klik untuk menempatkan vertex pertama',
      continueLine: 'Klik untuk meneruskan digitasi',
      finishLine: 'Klik pada sembarang marker yang ada untuk mengakhiri',
      finishPoly: 'Klik marker pertama untuk mengakhiri',
      finishRect: 'Klik untuk mengakhiri',
      startCircle: 'Klik untuk menempatkan titik pusat lingkaran',
      finishCircle: 'Klik untuk mengakhiri lingkaran',
      placeCircleMarker: 'Klik untuk menempatkan penanda lingkarann',
    },
    actions: {
      finish: 'Selesai',
      cancel: 'Batal',
      removeLastVertex: 'Hilangkan Vertex Terakhir',
    },
    buttonTitles: {
      drawMarkerButton: 'Digitasi Marker',
      drawPolyButton: 'Digitasi Polygon',
      drawLineButton: 'Digitasi Polyline',
      drawCircleButton: 'Digitasi Lingkaran',
      drawRectButton: 'Digitasi Segi Empat',
      editButton: 'Edit Layer',
      dragButton: 'Geser Layer',
      cutButton: 'Potong Layer',
      deleteButton: 'Hilangkan Layer',
      drawCircleMarkerButton: 'Digitasi Penanda Lingkaran',
      snappingButton:
        'Jepretkan penanda yang ditarik ke lapisan dan simpul lain',
      pinningButton: 'Sematkan simpul bersama bersama',
      rotateButton: 'Putar lapisan',
    },
  };
  var ks = {
    tooltips: {
      placeMarker: 'Adaug\u0103 un punct',
      firstVertex: 'Apas\u0103 aici pentru a ad\u0103uga primul Vertex',
      continueLine: 'Apas\u0103 aici pentru a continua desenul',
      finishLine: 'Apas\u0103 pe orice obiect pentru a finisa desenul',
      finishPoly: 'Apas\u0103 pe primul obiect pentru a finisa',
      finishRect: 'Apas\u0103 pentru a finisa',
      startCircle: 'Apas\u0103 pentru a desena un cerc',
      finishCircle: 'Apas\u0103 pentru a finisa un cerc',
      placeCircleMarker: 'Adaug\u0103 un punct',
    },
    actions: {
      finish: 'Termin\u0103',
      cancel: 'Anuleaz\u0103',
      removeLastVertex: '\u0218terge ultimul Vertex',
    },
    buttonTitles: {
      drawMarkerButton: 'Adaug\u0103 o bulin\u0103',
      drawPolyButton: 'Deseneaz\u0103 un poligon',
      drawLineButton: 'Deseneaz\u0103 o linie',
      drawCircleButton: 'Deseneaz\u0103 un cerc',
      drawRectButton: 'Deseneaz\u0103 un dreptunghi',
      editButton: 'Editeaz\u0103 straturile',
      dragButton: 'Mut\u0103 straturile',
      cutButton: 'Taie straturile',
      deleteButton: '\u0218terge straturile',
      drawCircleMarkerButton: 'Deseneaz\u0103 marcatorul cercului',
      snappingButton:
        'Fixa\u021Bi marcatorul glisat pe alte straturi \u0219i v\xE2rfuri',
      pinningButton: 'Fixa\u021Bi v\xE2rfurile partajate \xEEmpreun\u0103',
      rotateButton: 'Roti\u021Bi stratul',
    },
  };
  var Ms = {
    tooltips: {
      placeMarker:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043C\u0430\u0440\u043A\u0435\u0440',
      firstVertex:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043F\u0435\u0440\u0432\u044B\u0439 \u043E\u0431\u044A\u0435\u043A\u0442',
      continueLine:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435',
      finishLine:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043B\u044E\u0431\u043E\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440 \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F',
      finishPoly:
        '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0435\u0440\u0432\u0443\u044E \u0442\u043E\u0447\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C',
      finishRect:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C',
      startCircle:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0446\u0435\u043D\u0442\u0440 \u043A\u0440\u0443\u0433\u0430',
      finishCircle:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0434\u0430\u0442\u044C \u0440\u0430\u0434\u0438\u0443\u0441',
      placeCircleMarker:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043A\u0440\u0443\u0433\u043E\u0432\u043E\u0439 \u043C\u0430\u0440\u043A\u0435\u0440',
    },
    actions: {
      finish: '\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C',
      cancel: '\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C',
      removeLastVertex:
        '\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435',
    },
    buttonTitles: {
      drawMarkerButton:
        '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0430\u0440\u043A\u0435\u0440',
      drawPolyButton:
        '\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u0438\u0433\u043E\u043D',
      drawLineButton:
        '\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043A\u0440\u0438\u0432\u0443\u044E',
      drawCircleButton:
        '\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043A\u0440\u0443\u0433',
      drawRectButton:
        '\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A',
      editButton:
        '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043B\u043E\u0439',
      dragButton:
        '\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0441\u043B\u043E\u0439',
      cutButton:
        '\u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C \u0441\u043B\u043E\u0439',
      deleteButton:
        '\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043B\u043E\u0439',
      drawCircleMarkerButton:
        '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0440\u0443\u0433\u043E\u0432\u043E\u0439 \u043C\u0430\u0440\u043A\u0435\u0440',
      snappingButton:
        '\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043C\u0430\u0440\u043A\u0435\u0440 \u043A \u0434\u0440\u0443\u0433\u0438\u043C \u0441\u043B\u043E\u044F\u043C \u0438 \u0432\u0435\u0440\u0448\u0438\u043D\u0430\u043C',
      pinningButton:
        '\u0421\u0432\u044F\u0437\u0430\u0442\u044C \u043E\u0431\u0449\u0438\u0435 \u0442\u043E\u0447\u043A\u0438 \u0432\u043C\u0435\u0441\u0442\u0435',
      rotateButton:
        '\u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u0441\u043B\u043E\u044F',
    },
  };
  var xs = {
    tooltips: {
      placeMarker: 'Presiona para colocar un marcador',
      firstVertex: 'Presiona para colocar el primer v\xE9rtice',
      continueLine: 'Presiona para continuar dibujando',
      finishLine: 'Presiona cualquier marcador existente para finalizar',
      finishPoly: 'Presiona el primer marcador para finalizar',
      finishRect: 'Presiona para finalizar',
      startCircle: 'Presiona para colocar el centro del c\xEDrculo',
      finishCircle: 'Presiona para finalizar el c\xEDrculo',
      placeCircleMarker: 'Presiona para colocar un marcador de c\xEDrculo',
    },
    actions: {
      finish: 'Finalizar',
      cancel: 'Cancelar',
      removeLastVertex: 'Eliminar \xFAltimo v\xE9rtice',
    },
    buttonTitles: {
      drawMarkerButton: 'Dibujar Marcador',
      drawPolyButton: 'Dibujar Pol\xEDgono',
      drawLineButton: 'Dibujar L\xEDnea',
      drawCircleButton: 'Dibujar C\xEDrculo',
      drawRectButton: 'Dibujar Rect\xE1ngulo',
      editButton: 'Editar Capas',
      dragButton: 'Arrastrar Capas',
      cutButton: 'Cortar Capas',
      deleteButton: 'Eliminar Capas',
      drawCircleMarkerButton: 'Dibujar Marcador de C\xEDrculo',
      snappingButton:
        'El marcador de Snap arrastrado a otras capas y v\xE9rtices',
      pinningButton: 'Fijar juntos los v\xE9rtices compartidos',
      rotateButton: 'Rotar capa',
    },
  };
  var ws = {
    tooltips: {
      placeMarker: 'Klik om een marker te plaatsen',
      firstVertex: 'Klik om het eerste punt te plaatsen',
      continueLine: 'Klik om te blijven tekenen',
      finishLine: 'Klik op een bestaand punt om te be\xEBindigen',
      finishPoly: 'Klik op het eerst punt om te be\xEBindigen',
      finishRect: 'Klik om te be\xEBindigen',
      startCircle: 'Klik om het middelpunt te plaatsen',
      finishCircle: 'Klik om de cirkel te be\xEBindigen',
      placeCircleMarker: 'Klik om een marker te plaatsen',
    },
    actions: {
      finish: 'Bewaar',
      cancel: 'Annuleer',
      removeLastVertex: 'Verwijder laatste punt',
    },
    buttonTitles: {
      drawMarkerButton: 'Plaats Marker',
      drawPolyButton: 'Teken een vlak',
      drawLineButton: 'Teken een lijn',
      drawCircleButton: 'Teken een cirkel',
      drawRectButton: 'Teken een vierkant',
      editButton: 'Bewerk',
      dragButton: 'Verplaats',
      cutButton: 'Knip',
      deleteButton: 'Verwijder',
      drawCircleMarkerButton: 'Plaats Marker',
      snappingButton: 'Snap gesleepte marker naar andere lagen en hoekpunten',
      pinningButton: 'Speld gedeelde hoekpunten samen',
      rotateButton: 'Laag roteren',
    },
  };
  var Cs = {
    tooltips: {
      placeMarker: 'Cliquez pour placer un marqueur',
      firstVertex: 'Cliquez pour placer le premier sommet',
      continueLine: 'Cliquez pour continuer \xE0 dessiner',
      finishLine: "Cliquez sur n'importe quel marqueur pour terminer",
      finishPoly: 'Cliquez sur le premier marqueur pour terminer',
      finishRect: 'Cliquez pour terminer',
      startCircle: 'Cliquez pour placer le centre du cercle',
      finishCircle: 'Cliquez pour finir le cercle',
      placeCircleMarker: 'Cliquez pour placer le marqueur circulaire',
    },
    actions: {
      finish: 'Terminer',
      cancel: 'Annuler',
      removeLastVertex: 'Retirer le dernier sommet',
    },
    buttonTitles: {
      drawMarkerButton: 'Placer des marqueurs',
      drawPolyButton: 'Dessiner des polygones',
      drawLineButton: 'Dessiner des polylignes',
      drawCircleButton: 'Dessiner un cercle',
      drawRectButton: 'Dessiner un rectangle',
      editButton: '\xC9diter des calques',
      dragButton: 'D\xE9placer des calques',
      cutButton: 'Couper des calques',
      deleteButton: 'Supprimer des calques',
      drawCircleMarkerButton: 'Dessiner un marqueur circulaire',
      snappingButton: "Glisser le marqueur vers d'autres couches et sommets",
      pinningButton: '\xC9pingler ensemble les sommets partag\xE9s',
      rotateButton: 'Tourner des calques',
    },
  };
  var Ps = {
    tooltips: {
      placeMarker: '\u5355\u51FB\u653E\u7F6E\u6807\u8BB0',
      firstVertex: '\u5355\u51FB\u653E\u7F6E\u9996\u4E2A\u9876\u70B9',
      continueLine: '\u5355\u51FB\u7EE7\u7EED\u7ED8\u5236',
      finishLine:
        '\u5355\u51FB\u4EFB\u4F55\u5B58\u5728\u7684\u6807\u8BB0\u4EE5\u5B8C\u6210',
      finishPoly:
        '\u5355\u51FB\u7B2C\u4E00\u4E2A\u6807\u8BB0\u4EE5\u5B8C\u6210',
      finishRect: '\u5355\u51FB\u5B8C\u6210',
      startCircle: '\u5355\u51FB\u653E\u7F6E\u5706\u5FC3',
      finishCircle: '\u5355\u51FB\u5B8C\u6210\u5706\u5F62',
      placeCircleMarker: '\u70B9\u51FB\u653E\u7F6E\u5706\u5F62\u6807\u8BB0',
    },
    actions: {
      finish: '\u5B8C\u6210',
      cancel: '\u53D6\u6D88',
      removeLastVertex: '\u79FB\u9664\u6700\u540E\u7684\u9876\u70B9',
    },
    buttonTitles: {
      drawMarkerButton: '\u7ED8\u5236\u6807\u8BB0',
      drawPolyButton: '\u7ED8\u5236\u591A\u8FB9\u5F62',
      drawLineButton: '\u7ED8\u5236\u7EBF\u6BB5',
      drawCircleButton: '\u7ED8\u5236\u5706\u5F62',
      drawRectButton: '\u7ED8\u5236\u957F\u65B9\u5F62',
      editButton: '\u7F16\u8F91\u56FE\u5C42',
      dragButton: '\u62D6\u62FD\u56FE\u5C42',
      cutButton: '\u526A\u5207\u56FE\u5C42',
      deleteButton: '\u5220\u9664\u56FE\u5C42',
      drawCircleMarkerButton: '\u753B\u5706\u5708\u6807\u8BB0',
      snappingButton:
        '\u5C06\u62D6\u52A8\u7684\u6807\u8BB0\u6355\u6349\u5230\u5176\u4ED6\u56FE\u5C42\u548C\u9876\u70B9',
      pinningButton:
        '\u5C06\u5171\u4EAB\u9876\u70B9\u56FA\u5B9A\u5728\u4E00\u8D77',
      rotateButton: '\u65CB\u8F6C\u56FE\u5C42',
    },
  };
  var Es = {
    tooltips: {
      placeMarker: '\u55AE\u64CA\u653E\u7F6E\u6A19\u8A18',
      firstVertex: '\u55AE\u64CA\u653E\u7F6E\u7B2C\u4E00\u500B\u9802\u9EDE',
      continueLine: '\u55AE\u64CA\u7E7C\u7E8C\u7E6A\u88FD',
      finishLine:
        '\u55AE\u64CA\u4EFB\u4F55\u5B58\u5728\u7684\u6A19\u8A18\u4EE5\u5B8C\u6210',
      finishPoly:
        '\u55AE\u64CA\u7B2C\u4E00\u500B\u6A19\u8A18\u4EE5\u5B8C\u6210',
      finishRect: '\u55AE\u64CA\u5B8C\u6210',
      startCircle: '\u55AE\u64CA\u653E\u7F6E\u5713\u5FC3',
      finishCircle: '\u55AE\u64CA\u5B8C\u6210\u5713\u5F62',
      placeCircleMarker: '\u9EDE\u64CA\u653E\u7F6E\u5713\u5F62\u6A19\u8A18',
    },
    actions: {
      finish: '\u5B8C\u6210',
      cancel: '\u53D6\u6D88',
      removeLastVertex: '\u79FB\u9664\u6700\u5F8C\u4E00\u500B\u9802\u9EDE',
    },
    buttonTitles: {
      drawMarkerButton: '\u653E\u7F6E\u6A19\u8A18',
      drawPolyButton: '\u7E6A\u88FD\u591A\u908A\u5F62',
      drawLineButton: '\u7E6A\u88FD\u7DDA\u6BB5',
      drawCircleButton: '\u7E6A\u88FD\u5713\u5F62',
      drawRectButton: '\u7E6A\u88FD\u65B9\u5F62',
      editButton: '\u7DE8\u8F2F\u5716\u5F62',
      dragButton: '\u79FB\u52D5\u5716\u5F62',
      cutButton: '\u88C1\u5207\u5716\u5F62',
      deleteButton: '\u522A\u9664\u5716\u5F62',
      drawCircleMarkerButton: '\u756B\u5713\u5708\u6A19\u8A18',
      snappingButton:
        '\u5C07\u62D6\u52D5\u7684\u6A19\u8A18\u5C0D\u9F4A\u5230\u5176\u4ED6\u5716\u5C64\u548C\u9802\u9EDE',
      pinningButton:
        '\u5C07\u5171\u4EAB\u9802\u9EDE\u56FA\u5B9A\u5728\u4E00\u8D77',
      rotateButton: '\u65CB\u8F49\u5716\u5F62',
    },
  };
  var Ss = {
    tooltips: {
      placeMarker: 'Clique para posicionar o marcador',
      firstVertex: 'Clique para posicionar o primeiro v\xE9rtice',
      continueLine: 'Clique para continuar desenhando',
      finishLine: 'Clique em qualquer marcador existente para finalizar',
      finishPoly: 'Clique no primeiro marcador para finalizar',
      finishRect: 'Clique para finalizar',
      startCircle: 'Clique para posicionar o centro do c\xEDrculo',
      finishCircle: 'Clique para finalizar o c\xEDrculo',
      placeCircleMarker: 'Clique para posicionar o marcador circular',
      placeText: 'Clique para inserir texto',
    },
    actions: {
      finish: 'Finalizar',
      cancel: 'Cancelar',
      removeLastVertex: 'Remover \xFAltimo v\xE9rtice',
    },
    buttonTitles: {
      drawMarkerButton: 'Desenhar Marcador',
      drawPolyButton: 'Desenhar Pol\xEDgonos',
      drawLineButton: 'Desenhar Linha Poligonal',
      drawCircleButton: 'Desenhar C\xEDrculo',
      drawRectButton: 'Desenhar Ret\xE2ngulo',
      editButton: 'Editar Camadas',
      dragButton: 'Arrastar Camadas',
      cutButton: 'Recortar Camadas',
      deleteButton: 'Remover Camadas',
      drawCircleMarkerButton: 'Desenhar Marcador de C\xEDrculo',
      snappingButton:
        'Ajustar marcador arrastado a outras camadas e v\xE9rtices',
      pinningButton: 'Unir v\xE9rtices compartilhados',
      rotateButton: 'Rotacionar Camadas',
      drawTextButton: 'Desenhar Texto',
      scaleButton: 'Redimensionar Camadas',
      autoTracingButton: 'Tra\xE7ado Autom\xE1tico de Linha',
    },
    measurements: {
      totalLength: 'Comprimento',
      segmentLength: 'Comprimento do Segmento',
      area: '\xC1rea',
      radius: 'Raio',
      perimeter: 'Per\xEDmetro',
      height: 'Altura',
      width: 'Largura',
      coordinates: 'Posi\xE7\xE3o',
      coordinatesMarker: 'Marcador de Posi\xE7\xE3o',
    },
  };
  var Bs = {
    tooltips: {
      placeMarker: 'Clique para colocar marcador',
      firstVertex: 'Clique para colocar primeiro v\xE9rtice',
      continueLine: 'Clique para continuar a desenhar',
      finishLine: 'Clique num marcador existente para terminar',
      finishPoly: 'Clique no primeiro marcador para terminar',
      finishRect: 'Clique para terminar',
      startCircle: 'Clique para colocar o centro do c\xEDrculo',
      finishCircle: 'Clique para terminar o c\xEDrculo',
      placeCircleMarker: 'Clique para colocar marcador de c\xEDrculo',
      placeText: 'Clique para colocar texto',
    },
    actions: {
      finish: 'Terminar',
      cancel: 'Cancelar',
      removeLastVertex: 'Remover \xDAltimo V\xE9rtice',
    },
    buttonTitles: {
      drawMarkerButton: 'Desenhar Marcador',
      drawPolyButton: 'Desenhar Pol\xEDgonos',
      drawLineButton: 'Desenhar Polilinha',
      drawCircleButton: 'Desenhar C\xEDrculo',
      drawRectButton: 'Desenhar Ret\xE2ngulo',
      editButton: 'Editar Camadas',
      dragButton: 'Arrastar Camadas',
      cutButton: 'Cortar Camadas',
      deleteButton: 'Remover Camadas',
      drawCircleMarkerButton: 'Desenhar Marcador de C\xEDrculo',
      snappingButton:
        'Ajustar marcador arrastado a outras camadas e v\xE9rtices',
      pinningButton: 'Unir v\xE9rtices partilhados',
      rotateButton: 'Rodar Camadas',
      drawTextButton: 'Desenhar Texto',
      scaleButton: 'Escalar Camadas',
      autoTracingButton: 'Tra\xE7ado Autom\xE1tico de Linha',
    },
    measurements: {
      totalLength: 'Comprimento',
      segmentLength: 'Comprimento do Segmento',
      area: '\xC1rea',
      radius: 'Raio',
      perimeter: 'Per\xEDmetro',
      height: 'Altura',
      width: 'Largura',
      coordinates: 'Posi\xE7\xE3o',
      coordinatesMarker: 'Marcador de Posi\xE7\xE3o',
    },
  };
  var Rs = {
    tooltips: {
      placeMarker: 'Kliknij, aby umie\u015Bci\u0107 znacznik',
      firstVertex: 'Kliknij, aby umie\u015Bci\u0107 pierwszy wierzcho\u0142ek',
      continueLine: 'Kliknij, aby kontynuowa\u0107 rysowanie',
      finishLine:
        'Kliknij dowolny istniej\u0105cy znacznik, aby zako\u0144czy\u0107',
      finishPoly: 'Kliknij pierwszy znacznik, aby zako\u0144czy\u0107',
      finishRect: 'Kliknij, aby zako\u0144czy\u0107',
      startCircle: 'Kliknij, aby umie\u015Bci\u0107 \u015Brodek okr\u0119gu',
      finishCircle: 'Kliknij, aby zako\u0144czy\u0107 okr\u0105g',
      placeCircleMarker: 'Kliknij, aby umie\u015Bci\u0107 znacznik okr\u0119gu',
      placeText: 'Kliknij, aby umie\u015Bci\u0107 tekst',
    },
    actions: {
      finish: 'Zako\u0144cz',
      cancel: 'Anuluj',
      removeLastVertex: 'Usu\u0144 ostatni wierzcho\u0142ek',
    },
    buttonTitles: {
      drawMarkerButton: 'Rysuj znacznik',
      drawPolyButton: 'Rysuj wielok\u0105t',
      drawLineButton: 'Rysuj lini\u0119',
      drawCircleButton: 'Rysuj okr\u0105g',
      drawRectButton: 'Rysuj prostok\u0105t',
      editButton: 'Edytuj warstwy',
      dragButton: 'Przeci\u0105gnij warstwy',
      cutButton: 'Wytnij warstwy',
      deleteButton: 'Usu\u0144 warstwy',
      drawCircleMarkerButton: 'Rysuj znacznik okr\u0105g\u0142y',
      snappingButton:
        'Przyci\u0105gnij przenoszony znacznik do innych warstw i wierzcho\u0142k\xF3w',
      pinningButton: 'Przypnij wsp\xF3lne wierzcho\u0142ki razem',
      rotateButton: 'Obr\xF3\u0107 warstwy',
      drawTextButton: 'Rysuj tekst',
      scaleButton: 'Skaluj warstwy',
      autoTracingButton: 'Automatyczne \u015Bledzenie linii',
    },
    measurements: {
      totalLength: 'D\u0142ugo\u015B\u0107',
      segmentLength: 'D\u0142ugo\u015B\u0107 odcinka',
      area: 'Obszar',
      radius: 'Promie\u0144',
      perimeter: 'Obw\xF3d',
      height: 'Wysoko\u015B\u0107',
      width: 'Szeroko\u015B\u0107',
      coordinates: 'Pozycja',
      coordinatesMarker: 'Znacznik pozycji',
    },
  };
  var Ds = {
    tooltips: {
      placeMarker: 'Klicka f\xF6r att placera mark\xF6r',
      firstVertex: 'Klicka f\xF6r att placera f\xF6rsta h\xF6rnet',
      continueLine: 'Klicka f\xF6r att forts\xE4tta rita',
      finishLine: 'Klicka p\xE5 en existerande punkt f\xF6r att slutf\xF6ra',
      finishPoly: 'Klicka p\xE5 den f\xF6rsta punkten f\xF6r att slutf\xF6ra',
      finishRect: 'Klicka f\xF6r att slutf\xF6ra',
      startCircle: 'Klicka f\xF6r att placera cirkelns centrum',
      finishCircle: 'Klicka f\xF6r att slutf\xF6ra cirkeln',
      placeCircleMarker: 'Klicka f\xF6r att placera cirkelmark\xF6r',
    },
    actions: {
      finish: 'Slutf\xF6r',
      cancel: 'Avbryt',
      removeLastVertex: 'Ta bort sista h\xF6rnet',
    },
    buttonTitles: {
      drawMarkerButton: 'Rita Mark\xF6r',
      drawPolyButton: 'Rita Polygoner',
      drawLineButton: 'Rita Linje',
      drawCircleButton: 'Rita Cirkel',
      drawRectButton: 'Rita Rektangel',
      editButton: 'Redigera Lager',
      dragButton: 'Dra Lager',
      cutButton: 'Klipp i Lager',
      deleteButton: 'Ta bort Lager',
      drawCircleMarkerButton: 'Rita Cirkelmark\xF6r',
      snappingButton: 'Sn\xE4pp dra mark\xF6ren till andra lager och h\xF6rn',
      pinningButton: 'F\xE4st delade h\xF6rn tillsammans',
      rotateButton: 'Rotera lagret',
    },
  };
  var Ts = {
    tooltips: {
      placeMarker:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03B5\u03C4\u03B5 \u0394\u03B5\u03AF\u03BA\u03C4\u03B7',
      firstVertex:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF \u03C0\u03C1\u03CE\u03C4\u03BF \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF',
      continueLine:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03C3\u03C7\u03B5\u03B4\u03B9\u03AC\u03B6\u03B5\u03C4\u03B5',
      finishLine:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03C3\u03B5 \u03BF\u03C0\u03BF\u03B9\u03BF\u03BD\u03B4\u03AE\u03C0\u03BF\u03C4\u03B5 \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03BD \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03C9\u03B8\u03B5\u03AF',
      finishPoly:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03C3\u03C4\u03BF \u03C0\u03C1\u03CE\u03C4\u03BF \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03C3\u03B5\u03C4\u03B5',
      finishRect:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03C3\u03B5\u03C4\u03B5',
      startCircle:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03B5\u03C4\u03B5 \u03BA\u03AD\u03BD\u03C4\u03C1\u03BF \u039A\u03CD\u03BA\u03BB\u03BF\u03C5',
      finishCircle:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF\u03BD \u039A\u03CD\u03BA\u03BB\u03BF',
      placeCircleMarker:
        '\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03B5\u03C4\u03B5 \u039A\u03C5\u03BA\u03BB\u03B9\u03BA\u03CC \u0394\u03B5\u03AF\u03BA\u03C4\u03B7',
    },
    actions: {
      finish: '\u03A4\u03AD\u03BB\u03BF\u03C2',
      cancel: '\u0391\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7',
      removeLastVertex:
        '\u039A\u03B1\u03C4\u03AC\u03C1\u03B3\u03B7\u03C3\u03B7 \u03C4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF\u03C5 \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF\u03C5',
    },
    buttonTitles: {
      drawMarkerButton:
        '\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u0394\u03B5\u03AF\u03BA\u03C4\u03B7',
      drawPolyButton:
        '\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u03A0\u03BF\u03BB\u03C5\u03B3\u03CE\u03BD\u03BF\u03C5',
      drawLineButton:
        '\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE\u03C2',
      drawCircleButton:
        '\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u039A\u03CD\u03BA\u03BB\u03BF\u03C5',
      drawRectButton:
        '\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u039F\u03C1\u03B8\u03BF\u03B3\u03C9\u03BD\u03AF\u03BF\u03C5',
      editButton:
        '\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1 \u0395\u03C0\u03B9\u03C0\u03AD\u03B4\u03C9\u03BD',
      dragButton:
        '\u039C\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC \u0395\u03C0\u03B9\u03C0\u03AD\u03B4\u03C9\u03BD',
      cutButton:
        '\u0391\u03C0\u03BF\u03BA\u03BF\u03C0\u03AE \u0395\u03C0\u03B9\u03C0\u03AD\u03B4\u03C9\u03BD',
      deleteButton:
        '\u039A\u03B1\u03C4\u03AC\u03C1\u03B3\u03B7\u03C3\u03B7 \u0395\u03C0\u03B9\u03C0\u03AD\u03B4\u03C9\u03BD',
      drawCircleMarkerButton:
        '\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u039A\u03C5\u03BA\u03BB\u03B9\u03BA\u03BF\u03CD \u0394\u03B5\u03AF\u03BA\u03C4\u03B7',
      snappingButton:
        '\u03A0\u03C1\u03BF\u03C3\u03BA\u03CC\u03BB\u03BB\u03B7\u03C3\u03B7 \u03C4\u03BF\u03C5 \u0394\u03B5\u03AF\u03BA\u03C4\u03B7 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2 \u03C3\u03B5 \u03AC\u03BB\u03BB\u03B1 \u0395\u03C0\u03AF\u03C0\u03B5\u03B4\u03B1 \u03BA\u03B1\u03B9 \u039A\u03BF\u03C1\u03C5\u03C6\u03AD\u03C2',
      pinningButton:
        '\u03A0\u03B5\u03C1\u03B9\u03BA\u03BF\u03C0\u03AE \u03BA\u03BF\u03B9\u03BD\u03CE\u03BD \u03BA\u03BF\u03C1\u03C5\u03C6\u03CE\u03BD \u03BC\u03B1\u03B6\u03AF',
      rotateButton:
        '\u03A0\u03B5\u03C1\u03B9\u03C3\u03C4\u03C1\u03AD\u03C8\u03C4\u03B5 \u03C4\u03BF \u03C3\u03C4\u03C1\u03CE\u03BC\u03B1',
    },
  };
  var Os = {
    tooltips: {
      placeMarker: 'Kattintson a jel\xF6l\u0151 elhelyez\xE9s\xE9hez',
      firstVertex: 'Kattintson az els\u0151 pont elhelyez\xE9s\xE9hez',
      continueLine: 'Kattintson a k\xF6vetkez\u0151 pont elhelyez\xE9s\xE9hez',
      finishLine: 'A befejez\xE9shez kattintson egy megl\xE9v\u0151 pontra',
      finishPoly: 'A befejez\xE9shez kattintson az els\u0151 pontra',
      finishRect: 'Kattintson a befejez\xE9shez',
      startCircle:
        'Kattintson a k\xF6r k\xF6z\xE9ppontj\xE1nak elhelyez\xE9s\xE9hez',
      finishCircle: 'Kattintson a k\xF6r befejez\xE9s\xE9hez',
      placeCircleMarker:
        'Kattintson a k\xF6rjel\xF6l\u0151 elhelyez\xE9s\xE9hez',
    },
    actions: {
      finish: 'Befejez\xE9s',
      cancel: 'M\xE9gse',
      removeLastVertex: 'Utols\xF3 pont elt\xE1vol\xEDt\xE1sa',
    },
    buttonTitles: {
      drawMarkerButton: 'Jel\xF6l\u0151 rajzol\xE1sa',
      drawPolyButton: 'Poligon rajzol\xE1sa',
      drawLineButton: 'Vonal rajzol\xE1sa',
      drawCircleButton: 'K\xF6r rajzol\xE1sa',
      drawRectButton: 'N\xE9gyzet rajzol\xE1sa',
      editButton: 'Elemek szerkeszt\xE9se',
      dragButton: 'Elemek mozgat\xE1sa',
      cutButton: 'Elemek v\xE1g\xE1sa',
      deleteButton: 'Elemek t\xF6rl\xE9se',
      drawCircleMarkerButton: 'K\xF6r jel\xF6l\u0151 rajzol\xE1sa',
      snappingButton:
        'Kapcsolja a jel\xF6lt\u0151t m\xE1sik elemhez vagy ponthoz',
      pinningButton: 'K\xF6z\xF6s pontok \xF6sszek\xF6t\xE9se',
      rotateButton: 'F\xF3lia elforgat\xE1sa',
    },
  };
  var Is = {
    tooltips: {
      placeMarker: 'Tryk for at placere en mark\xF8r',
      firstVertex: 'Tryk for at placere det f\xF8rste punkt',
      continueLine: 'Tryk for at forts\xE6tte linjen',
      finishLine: 'Tryk p\xE5 et eksisterende punkt for at afslutte',
      finishPoly: 'Tryk p\xE5 det f\xF8rste punkt for at afslutte',
      finishRect: 'Tryk for at afslutte',
      startCircle: 'Tryk for at placere cirklens center',
      finishCircle: 'Tryk for at afslutte cirklen',
      placeCircleMarker: 'Tryk for at placere en cirkelmark\xF8r',
    },
    actions: {
      finish: 'Afslut',
      cancel: 'Afbryd',
      removeLastVertex: 'Fjern sidste punkt',
    },
    buttonTitles: {
      drawMarkerButton: 'Placer mark\xF8r',
      drawPolyButton: 'Tegn polygon',
      drawLineButton: 'Tegn linje',
      drawCircleButton: 'Tegn cirkel',
      drawRectButton: 'Tegn firkant',
      editButton: 'Rediger',
      dragButton: 'Tr\xE6k',
      cutButton: 'Klip',
      deleteButton: 'Fjern',
      drawCircleMarkerButton: 'Tegn cirkelmark\xF8r',
      snappingButton: 'Fastg\xF8r trukket mark\xF8r til andre elementer',
      pinningButton: 'Sammenl\xE6g delte elementer',
      rotateButton: 'Roter laget',
    },
  };
  var As = {
    tooltips: {
      placeMarker: 'Klikk for \xE5 plassere punkt',
      firstVertex: 'Klikk for \xE5 plassere f\xF8rste punkt',
      continueLine: 'Klikk for \xE5 tegne videre',
      finishLine: 'Klikk p\xE5 et eksisterende punkt for \xE5 fullf\xF8re',
      finishPoly: 'Klikk f\xF8rste punkt for \xE5 fullf\xF8re',
      finishRect: 'Klikk for \xE5 fullf\xF8re',
      startCircle: 'Klikk for \xE5 sette sirkel midtpunkt',
      finishCircle: 'Klikk for \xE5 fullf\xF8re sirkel',
      placeCircleMarker: 'Klikk for \xE5 plassere sirkel',
      placeText: 'Klikk for \xE5 plassere tekst',
    },
    actions: {
      finish: 'Fullf\xF8r',
      cancel: 'Kanseller',
      removeLastVertex: 'Fjern forrige punkt',
    },
    buttonTitles: {
      drawMarkerButton: 'Tegn punkt',
      drawPolyButton: 'Tegn flate',
      drawLineButton: 'Tegn linje',
      drawCircleButton: 'Tegn sirkel',
      drawRectButton: 'Tegn rektangel',
      editButton: 'Rediger objekter',
      dragButton: 'Dra objekter',
      cutButton: 'Kutt objekter',
      deleteButton: 'Fjern objekter',
      drawCircleMarkerButton: 'Tegn sirkel-punkt',
      snappingButton: 'Fest dratt punkt til andre objekter og punkt',
      pinningButton: 'Pin delte punkter sammen',
      rotateButton: 'Rot\xE9r objekter',
      drawTextButton: 'Tegn tekst',
      scaleButton: 'Skal\xE9r objekter',
      autoTracingButton: 'Automatisk sporing av linje',
    },
    measurements: {
      totalLength: 'Lengde',
      segmentLength: 'Segmentlengde',
      area: 'Omr\xE5de',
      radius: 'Radius',
      perimeter: 'Omriss',
      height: 'H\xF8yde',
      width: 'Bredde',
      coordinates: 'Posisjon',
      coordinatesMarker: 'Posisjonsmark\xF8r',
    },
  };
  var Gs = {
    tooltips: {
      placeMarker:
        '\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u062C\u0627\u0646\u0645\u0627\u06CC\u06CC \u0646\u0634\u0627\u0646',
      firstVertex:
        '\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0631\u0633\u0645 \u0627\u0648\u0644\u06CC\u0646 \u0631\u0623\u0633',
      continueLine:
        '\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0627\u062F\u0627\u0645\u0647 \u0631\u0633\u0645',
      finishLine:
        '\u06A9\u0644\u06CC\u06A9 \u0631\u0648\u06CC \u0647\u0631 \u0646\u0634\u0627\u0646 \u0645\u0648\u062C\u0648\u062F \u0628\u0631\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646',
      finishPoly:
        '\u06A9\u0644\u06CC\u06A9 \u0631\u0648\u06CC \u0627\u0648\u0644\u06CC\u0646 \u0646\u0634\u0627\u0646 \u0628\u0631\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646',
      finishRect:
        '\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646',
      startCircle:
        '\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0631\u0633\u0645 \u0645\u0631\u06A9\u0632 \u062F\u0627\u06CC\u0631\u0647',
      finishCircle:
        '\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u0645 \u062F\u0627\u06CC\u0631\u0647',
      placeCircleMarker:
        '\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0631\u0633\u0645 \u0646\u0634\u0627\u0646 \u062F\u0627\u06CC\u0631\u0647',
      placeText:
        '\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0646\u0648\u0634\u062A\u0646 \u0645\u062A\u0646',
    },
    actions: {
      finish: '\u067E\u0627\u06CC\u0627\u0646',
      cancel: '\u0644\u0641\u0648',
      removeLastVertex:
        '\u062D\u0630\u0641 \u0622\u062E\u0631\u06CC\u0646 \u0631\u0623\u0633',
    },
    buttonTitles: {
      drawMarkerButton: '\u062F\u0631\u062C \u0646\u0634\u0627\u0646',
      drawPolyButton:
        '\u0631\u0633\u0645 \u0686\u0646\u062F\u0636\u0644\u0639\u06CC',
      drawLineButton: '\u0631\u0633\u0645 \u062E\u0637',
      drawCircleButton: '\u0631\u0633\u0645 \u062F\u0627\u06CC\u0631\u0647',
      drawRectButton:
        '\u0631\u0633\u0645 \u0686\u0647\u0627\u0631\u0636\u0644\u0639\u06CC',
      editButton:
        '\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0644\u0627\u06CC\u0647\u200C\u0647\u0627',
      dragButton:
        '\u062C\u0627\u0628\u062C\u0627\u06CC\u06CC \u0644\u0627\u06CC\u0647\u200C\u0647\u0627',
      cutButton:
        '\u0628\u0631\u0634 \u0644\u0627\u06CC\u0647\u200C\u0647\u0627',
      deleteButton:
        '\u062D\u0630\u0641 \u0644\u0627\u06CC\u0647\u200C\u0647\u0627',
      drawCircleMarkerButton:
        '\u0631\u0633\u0645 \u0646\u0634\u0627\u0646 \u062F\u0627\u06CC\u0631\u0647',
      snappingButton:
        '\u0646\u0634\u0627\u0646\u06AF\u0631 \u0631\u0627 \u0628\u0647 \u0644\u0627\u06CC\u0647\u200C\u0647\u0627 \u0648 \u0631\u0626\u0648\u0633 \u062F\u06CC\u06AF\u0631 \u0628\u06A9\u0634\u06CC\u062F',
      pinningButton:
        '\u0631\u0626\u0648\u0633 \u0645\u0634\u062A\u0631\u06A9 \u0631\u0627 \u0628\u0627 \u0647\u0645 \u067E\u06CC\u0646 \u06A9\u0646\u06CC\u062F',
      rotateButton: '\u0686\u0631\u062E\u0634 \u0644\u0627\u06CC\u0647',
      drawTextButton: '\u0631\u0633\u0645 \u0645\u062A\u0646',
      scaleButton:
        '\u0645\u0642\u06CC\u0627\u0633\u200C\u06AF\u0630\u0627\u0631\u06CC',
      autoTracingButton:
        '\u0631\u062F\u06CC\u0627\u0628 \u062E\u0648\u062F\u06A9\u0627\u0631',
    },
    measurements: {
      totalLength: '\u0637\u0648\u0644',
      segmentLength: '\u0637\u0648\u0644 \u0628\u062E\u0634',
      area: '\u0646\u0627\u062D\u06CC\u0647',
      radius: '\u0634\u0639\u0627\u0639',
      perimeter: '\u0645\u062D\u06CC\u0637',
      height: '\u0627\u0631\u062A\u0641\u0627\u0639',
      width: '\u0639\u0631\u0636',
      coordinates: '\u0645\u0648\u0642\u0639\u06CC\u062A',
      coordinatesMarker:
        '\u0645\u0648\u0642\u0639\u06CC\u062A \u0646\u0634\u0627\u0646',
    },
  };
  var qs = {
    tooltips: {
      placeMarker:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043C\u0430\u0440\u043A\u0435\u0440',
      firstVertex:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043F\u0435\u0440\u0448\u0443 \u0432\u0435\u0440\u0448\u0438\u043D\u0443',
      continueLine:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043C\u0430\u043B\u044E\u0432\u0430\u0442\u0438',
      finishLine:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0456\u0441\u043D\u0443\u044E\u0447\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440 \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F',
      finishPoly:
        '\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u043F\u0435\u0440\u0448\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440, \u0449\u043E\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438',
      finishRect:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438',
      startCircle:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0434\u043E\u0434\u0430\u0442\u0438 \u0446\u0435\u043D\u0442\u0440 \u043A\u043E\u043B\u0430',
      finishCircle:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u043A\u043E\u043B\u043E',
      placeCircleMarker:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043A\u0440\u0443\u0433\u043E\u0432\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440',
    },
    actions: {
      finish: '\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438',
      cancel: '\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438',
      removeLastVertex:
        '\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044E \u0432\u0435\u0440\u0448\u0438\u043D\u0443',
    },
    buttonTitles: {
      drawMarkerButton:
        '\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043C\u0430\u0440\u043A\u0435\u0440',
      drawPolyButton:
        '\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043F\u043E\u043B\u0456\u0433\u043E\u043D',
      drawLineButton:
        '\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043A\u0440\u0438\u0432\u0443',
      drawCircleButton:
        '\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043A\u043E\u043B\u043E',
      drawRectButton:
        '\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043F\u0440\u044F\u043C\u043E\u043A\u0443\u0442\u043D\u0438\u043A',
      editButton:
        '\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0448\u0430\u0440\u0438',
      dragButton:
        '\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0448\u0430\u0440\u0438',
      cutButton:
        '\u0412\u0438\u0440\u0456\u0437\u0430\u0442\u0438 \u0448\u0430\u0440\u0438',
      deleteButton:
        '\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0448\u0430\u0440\u0438',
      drawCircleMarkerButton:
        '\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043A\u0440\u0443\u0433\u043E\u0432\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440',
      snappingButton:
        '\u041F\u0440\u0438\u0432\u2019\u044F\u0437\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0443\u0442\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440 \u0434\u043E \u0456\u043D\u0448\u0438\u0445 \u0448\u0430\u0440\u0456\u0432 \u0442\u0430 \u0432\u0435\u0440\u0448\u0438\u043D',
      pinningButton:
        "\u0417\u0432'\u044F\u0437\u0430\u0442\u0438 \u0441\u043F\u0456\u043B\u044C\u043D\u0456 \u0432\u0435\u0440\u0448\u0438\u043D\u0438 \u0440\u0430\u0437\u043E\u043C",
      rotateButton:
        '\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0448\u0430\u0440',
    },
  };
  var zs = {
    tooltips: {
      placeMarker:
        '\u0130\u015Faret\xE7i yerle\u015Ftirmek i\xE7in t\u0131klay\u0131n',
      firstVertex:
        '\u0130lk tepe noktas\u0131n\u0131 yerle\u015Ftirmek i\xE7in t\u0131klay\u0131n',
      continueLine: '\xC7izime devam etmek i\xE7in t\u0131klay\u0131n',
      finishLine:
        'Bitirmek i\xE7in mevcut herhangi bir i\u015Faret\xE7iyi t\u0131klay\u0131n',
      finishPoly: 'Bitirmek i\xE7in ilk i\u015Faret\xE7iyi t\u0131klay\u0131n',
      finishRect: 'Bitirmek i\xE7in t\u0131klay\u0131n',
      startCircle:
        'Daire merkezine yerle\u015Ftirmek i\xE7in t\u0131klay\u0131n',
      finishCircle: 'Daireyi bitirmek i\xE7in t\u0131klay\u0131n',
      placeCircleMarker:
        'Daire i\u015Faret\xE7isi yerle\u015Ftirmek i\xE7in t\u0131klay\u0131n',
    },
    actions: {
      finish: 'Bitir',
      cancel: '\u0130ptal',
      removeLastVertex: 'Son k\xF6\u015Feyi kald\u0131r',
    },
    buttonTitles: {
      drawMarkerButton: '\xC7izim \u0130\u015Faret\xE7isi',
      drawPolyButton: '\xC7okgenler \xE7iz',
      drawLineButton: '\xC7oklu \xE7izgi \xE7iz',
      drawCircleButton: '\xC7ember \xE7iz',
      drawRectButton: 'Dikd\xF6rtgen \xE7iz',
      editButton: 'Katmanlar\u0131 d\xFCzenle',
      dragButton: 'Katmanlar\u0131 s\xFCr\xFCkle',
      cutButton: 'Katmanlar\u0131 kes',
      deleteButton: 'Katmanlar\u0131 kald\u0131r',
      drawCircleMarkerButton: 'Daire i\u015Faret\xE7isi \xE7iz',
      snappingButton:
        'S\xFCr\xFCklenen i\u015Faret\xE7iyi di\u011Fer katmanlara ve k\xF6\u015Felere yap\u0131\u015Ft\u0131r',
      pinningButton: 'Payla\u015F\u0131lan k\xF6\u015Feleri birbirine sabitle',
      rotateButton: 'Katman\u0131 d\xF6nd\xFCr',
    },
  };
  var Ns = {
    tooltips: {
      placeMarker: 'Kliknut\xEDm vytvo\u0159\xEDte zna\u010Dku',
      firstVertex: 'Kliknut\xEDm vytvo\u0159\xEDte prvn\xED objekt',
      continueLine: 'Kliknut\xEDm pokra\u010Dujte v kreslen\xED',
      finishLine:
        'Kliknut\xED na libovolnou existuj\xEDc\xED zna\u010Dku pro dokon\u010Den\xED',
      finishPoly: 'Vyberte prvn\xED bod pro dokon\u010Den\xED',
      finishRect: 'Klikn\u011Bte pro dokon\u010Den\xED',
      startCircle: 'Kliknut\xEDm p\u0159idejte st\u0159ed kruhu',
      finishCircle:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0434\u0430\u0442\u044C \u0440\u0430\u0434\u0438\u0443\u0441',
      placeCircleMarker: 'Kliknut\xEDm nastavte polom\u011Br',
    },
    actions: {
      finish: 'Dokon\u010Dit',
      cancel: 'Zru\u0161it',
      removeLastVertex: 'Zru\u0161it posledn\xED akci',
    },
    buttonTitles: {
      drawMarkerButton: 'P\u0159idat zna\u010Dku',
      drawPolyButton: 'Nakreslit polygon',
      drawLineButton: 'Nakreslit k\u0159ivku',
      drawCircleButton: 'Nakreslit kruh',
      drawRectButton: 'Nakreslit obd\xE9ln\xEDk',
      editButton: 'Upravit vrstvu',
      dragButton: 'P\u0159eneste vrstvu',
      cutButton: 'Vyjmout vrstvu',
      deleteButton: 'Smazat vrstvu',
      drawCircleMarkerButton: 'P\u0159idat kruhovou zna\u010Dku',
      snappingButton:
        'Nav\xE1zat ta\u017Enou zna\u010Dku k dal\u0161\xEDm vrstv\xE1m a vrchol\u016Fm',
      pinningButton: 'Spojit spole\u010Dn\xE9 body dohromady',
      rotateButton: 'Oto\u010Dte vrstvu',
    },
  };
  var Fs = {
    tooltips: {
      placeMarker:
        '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30DE\u30FC\u30AB\u30FC\u3092\u914D\u7F6E',
      firstVertex:
        '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u6700\u521D\u306E\u9802\u70B9\u3092\u914D\u7F6E',
      continueLine:
        '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u63CF\u753B\u3092\u7D9A\u3051\u308B',
      finishLine:
        '\u4EFB\u610F\u306E\u30DE\u30FC\u30AB\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7D42\u4E86',
      finishPoly:
        '\u6700\u521D\u306E\u30DE\u30FC\u30AB\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7D42\u4E86',
      finishRect: '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7D42\u4E86',
      startCircle:
        '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u5186\u306E\u4E2D\u5FC3\u3092\u914D\u7F6E',
      finishCircle:
        '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u5186\u306E\u63CF\u753B\u3092\u7D42\u4E86',
      placeCircleMarker:
        '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u5186\u30DE\u30FC\u30AB\u30FC\u3092\u914D\u7F6E',
      placeText:
        '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30C6\u30AD\u30B9\u30C8\u3092\u914D\u7F6E',
    },
    actions: {
      finish: '\u7D42\u4E86',
      cancel: '\u30AD\u30E3\u30F3\u30BB\u30EB',
      removeLastVertex: '\u6700\u5F8C\u306E\u9802\u70B9\u3092\u524A\u9664',
    },
    buttonTitles: {
      drawMarkerButton: '\u30DE\u30FC\u30AB\u30FC\u3092\u63CF\u753B',
      drawPolyButton: '\u30DD\u30EA\u30B4\u30F3\u3092\u63CF\u753B',
      drawLineButton: '\u6298\u308C\u7DDA\u3092\u63CF\u753B',
      drawCircleButton: '\u5186\u3092\u63CF\u753B',
      drawRectButton: '\u77E9\u5F62\u3092\u63CF\u753B',
      editButton: '\u30EC\u30A4\u30E4\u30FC\u3092\u7DE8\u96C6',
      dragButton: '\u30EC\u30A4\u30E4\u30FC\u3092\u30C9\u30E9\u30C3\u30B0',
      cutButton: '\u30EC\u30A4\u30E4\u30FC\u3092\u5207\u308A\u53D6\u308A',
      deleteButton: '\u30EC\u30A4\u30E4\u30FC\u3092\u524A\u9664',
      drawCircleMarkerButton:
        '\u5186\u30DE\u30FC\u30AB\u30FC\u3092\u63CF\u753B',
      snappingButton:
        '\u30C9\u30E9\u30C3\u30B0\u3057\u305F\u30DE\u30FC\u30AB\u30FC\u3092\u4ED6\u306E\u30EC\u30A4\u30E4\u30FC\u3084\u9802\u70B9\u306B\u30B9\u30CA\u30C3\u30D7\u3059\u308B',
      pinningButton:
        '\u5171\u6709\u3059\u308B\u9802\u70B9\u3092\u540C\u6642\u306B\u52D5\u304B\u3059',
      rotateButton: '\u30EC\u30A4\u30E4\u30FC\u3092\u56DE\u8EE2',
      drawTextButton: '\u30C6\u30AD\u30B9\u30C8\u3092\u63CF\u753B',
    },
  };
  var Vs = {
    tooltips: {
      placeMarker: 'Klikkaa asettaaksesi merkin',
      firstVertex: 'Klikkaa asettaakseni ensimm\xE4isen osuuden',
      continueLine: 'Klikkaa jatkaaksesi piirt\xE4mist\xE4',
      finishLine: 'Klikkaa olemassa olevaa merkki\xE4 lopettaaksesi',
      finishPoly: 'Klikkaa ensimm\xE4ist\xE4 merkki\xE4 lopettaaksesi',
      finishRect: 'Klikkaa lopettaaksesi',
      startCircle: 'Klikkaa asettaaksesi ympyr\xE4n keskipisteen',
      finishCircle: 'Klikkaa lopettaaksesi ympyr\xE4n',
      placeCircleMarker: 'Klikkaa asettaaksesi ympyr\xE4merkin',
      placeText: 'Klikkaa asettaaksesi tekstin',
    },
    actions: {
      finish: 'Valmis',
      cancel: 'Peruuta',
      removeLastVertex: 'Poista viimeinen osuus',
    },
    buttonTitles: {
      drawMarkerButton: 'Piirr\xE4 merkkej\xE4',
      drawPolyButton: 'Piirr\xE4 monikulmioita',
      drawLineButton: 'Piirr\xE4 viivoja',
      drawCircleButton: 'Piirr\xE4 ympyr\xE4',
      drawRectButton: 'Piirr\xE4 neliskulmioita',
      editButton: 'Muokkaa',
      dragButton: 'Siirr\xE4',
      cutButton: 'Leikkaa',
      deleteButton: 'Poista',
      drawCircleMarkerButton: 'Piirr\xE4 ympyr\xE4merkki',
      snappingButton: 'Kiinnit\xE4 siirrett\xE4v\xE4 merkki toisiin muotoihin',
      pinningButton: 'Kiinnit\xE4 jaetut muodot yhteen',
      rotateButton: 'K\xE4\xE4nn\xE4',
      drawTextButton: 'Piirr\xE4 teksti\xE4',
    },
  };
  var Us = {
    tooltips: {
      placeMarker:
        '\uB9C8\uCEE4 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC138\uC694',
      firstVertex:
        '\uCCAB\uBC88\uC9F8 \uAF2D\uC9C0\uC810 \uC704\uCE58\uC744 \uD074\uB9AD\uD558\uC138\uC694',
      continueLine:
        '\uACC4\uC18D \uADF8\uB9AC\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694',
      finishLine:
        '\uB05D\uB0B4\uB824\uBA74 \uAE30\uC874 \uB9C8\uCEE4\uB97C \uD074\uB9AD\uD558\uC138\uC694',
      finishPoly:
        '\uB05D\uB0B4\uB824\uBA74 \uCC98\uC74C \uB9C8\uCEE4\uB97C \uD074\uB9AD\uD558\uC138\uC694',
      finishRect: '\uB05D\uB0B4\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694',
      startCircle:
        '\uC6D0\uC758 \uC911\uC2EC\uC774 \uB420 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC138\uC694',
      finishCircle:
        '\uC6D0\uC744 \uB05D\uB0B4\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694',
      placeCircleMarker:
        '\uC6D0 \uB9C8\uCEE4 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC138\uC694',
      placeText:
        '\uD14D\uC2A4\uD2B8 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC138\uC694',
    },
    actions: {
      finish: '\uB05D\uB0B4\uAE30',
      cancel: '\uCDE8\uC18C',
      removeLastVertex: '\uB9C8\uC9C0\uB9C9 \uAF2D\uC9C0\uC810 \uC81C\uAC70',
    },
    buttonTitles: {
      drawMarkerButton: '\uB9C8\uCEE4 \uADF8\uB9AC\uAE30',
      drawPolyButton: '\uB2E4\uAC01\uD615 \uADF8\uB9AC\uAE30',
      drawLineButton: '\uB2E4\uAC01\uC120 \uADF8\uB9AC\uAE30',
      drawCircleButton: '\uC6D0 \uADF8\uB9AC\uAE30',
      drawRectButton: '\uC9C1\uC0AC\uAC01\uD615 \uADF8\uB9AC\uAE30',
      editButton: '\uB808\uC774\uC5B4 \uD3B8\uC9D1\uD558\uAE30',
      dragButton: '\uB808\uC774\uC5B4 \uB04C\uAE30',
      cutButton: '\uB808\uC774\uC5B4 \uC790\uB974\uAE30',
      deleteButton: '\uB808\uC774\uC5B4 \uC81C\uAC70\uD558\uAE30',
      drawCircleMarkerButton: '\uC6D0 \uB9C8\uCEE4 \uADF8\uB9AC\uAE30',
      snappingButton:
        '\uC7A1\uC544\uB048 \uB9C8\uCEE4\uB97C \uB2E4\uB978 \uB808\uC774\uC5B4 \uBC0F \uAF2D\uC9C0\uC810\uC5D0 \uB4E4\uB7EC\uBD99\uAC8C \uD558\uAE30',
      pinningButton:
        '\uACF5\uC720 \uAF2D\uC9C0\uC810\uC744 \uD568\uAED8 \uCC0D\uAE30',
      rotateButton: '\uB808\uC774\uC5B4 \uD68C\uC804\uD558\uAE30',
      drawTextButton: '\uD14D\uC2A4\uD2B8 \uADF8\uB9AC\uAE30',
    },
  };
  var js = {
    tooltips: {
      placeMarker:
        '\u041C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044B\u0440\u0443\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      firstVertex:
        '\u0411\u0438\u0440\u0438\u043D\u0447\u0438 \u0447\u043E\u043A\u0443\u043D\u0443 \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044B\u0440\u0443\u0443\u043D\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      continueLine:
        '\u0421\u04AF\u0440\u04E9\u0442 \u0442\u0430\u0440\u0442\u0443\u0443\u043D\u0443 \u0443\u043B\u0430\u043D\u0442\u0443\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      finishLine:
        '\u0410\u044F\u043A\u0442\u043E\u043E \u04AF\u0447\u04AF\u043D \u0443\u0447\u0443\u0440\u0434\u0430\u0433\u044B \u043C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      finishPoly:
        '\u0411\u04AF\u0442\u04AF\u0440\u04AF\u04AF \u04AF\u0447\u04AF\u043D \u0431\u0438\u0440\u0438\u043D\u0447\u0438 \u043C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      finishRect:
        '\u0411\u04AF\u0442\u04AF\u0440\u04AF\u04AF \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      startCircle:
        '\u0410\u0439\u043B\u0430\u043D\u0430\u043D\u044B\u043D \u0431\u043E\u0440\u0431\u043E\u0440\u0443\u043D \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044B\u0440\u0443\u0443\u043D\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      finishCircle:
        '\u0410\u0439\u043B\u0430\u043D\u0430\u043D\u044B \u0431\u04AF\u0442\u04AF\u0440\u04AF\u04AF \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      placeCircleMarker:
        '\u0422\u0435\u0433\u0435\u0440\u0435\u043A \u043C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044B\u0440\u0443\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
      placeText:
        '\u0422\u0435\u043A\u0441\u0442\u0442\u0438 \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044B\u0440\u0443\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437',
    },
    actions: {
      finish: '\u0410\u044F\u0433\u044B',
      cancel: '\u0416\u043E\u043A \u043A\u044B\u043B\u0443\u0443',
      removeLastVertex:
        '\u0410\u043A\u044B\u0440\u043A\u044B \u0447\u043E\u043A\u0443\u043D\u0443 \u04E9\u0447\u04AF\u0440\u04AF\u04AF',
    },
    buttonTitles: {
      drawMarkerButton:
        '\u041C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0447\u0438\u0437\u0443\u0443',
      drawPolyButton:
        '\u041F\u043E\u043B\u0438\u0433\u043E\u043D \u0447\u0438\u0437\u0443\u0443',
      drawLineButton:
        '\u041F\u043E\u043B\u0438\u043B\u0438\u043D\u0438\u044F \u0447\u0438\u0437\u0443\u0443',
      drawCircleButton:
        '\u0414\u0430\u0439\u044B\u043D\u0434\u044B \u0447\u0438\u0437\u0443\u0443',
      drawRectButton:
        '\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0447\u0438\u0437\u0443\u0443',
      editButton:
        '\u0421\u043B\u043E\u043E\u043F\u0442\u0443 \u0442\u04AF\u0437\u04E9\u0442\u04AF\u04AF',
      dragButton:
        '\u0421\u043B\u043E\u043E\u043F\u0442\u0443 \u043A\u0430\u0440\u0430\u043F \u0441\u04AF\u0439\u043B\u04E9\u04AF',
      cutButton:
        '\u0421\u043B\u043E\u043E\u043F\u0442\u0443\u043D \u0431\u0430\u0448\u044B\u043D \u043A\u0435\u0441\u04AF\u04AF',
      deleteButton:
        '\u0421\u043B\u043E\u043E\u043F\u0442\u0443\u043D \u04E9\u0447\u04AF\u0440\u04AF\u04AF',
      drawCircleMarkerButton:
        '\u0414\u0430\u0439\u044B\u043D\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0447\u0438\u0437\u0443\u0443',
      snappingButton:
        '\u0411\u0430\u0448\u043A\u0430 \u0441\u043B\u043E\u043E\u043F\u0442\u043E\u0440\u0434\u0443\u043D \u0436\u0430\u043D\u0430 \u0432\u0435\u0440\u0442\u0435\u043A\u0441\u0442\u0435\u0440\u0434\u0438\u043D \u0430\u0440\u0430\u0441\u044B\u043D\u0430 \u0447\u0435\u043A\u0438\u043B\u0434\u04E9\u04E9',
      pinningButton:
        '\u0411\u04E9\u043B\u04AF\u0448\u043A\u04E9\u043D \u0432\u0435\u0440\u0442\u0435\u043A\u0441\u0442\u0435\u0440\u0434\u0438 \u0431\u0438\u0440\u0433\u0435 \u0442\u0443\u0442\u0443\u0448\u0442\u0443\u0440\u0443\u0443',
      rotateButton:
        '\u0421\u043B\u043E\u043E\u043F\u0442\u0443\u043D \u04E9\u0437\u0433\u04E9\u0440\u0442\u04AF\u04AF',
      drawTextButton:
        '\u0422\u0435\u043A\u0441\u0442 \u0447\u0438\u0437\u0443\u0443',
      scaleButton:
        '\u0421\u043B\u043E\u043E\u043F\u0442\u0443\u043D \u04E9\u043B\u0447\u04E9\u043C\u04AF\u043D \u04E9\u0437\u0433\u04E9\u0440\u0442\u04AF\u04AF',
      autoTracingButton:
        '\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0442\u044B\u043A \u0442\u0438\u0437\u043C\u0435\u0433\u0438 \u0447\u0438\u0437\u0443\u0443',
    },
    measurements: {
      totalLength: '\u0423\u0437\u0443\u043D\u0434\u0443\u043A',
      segmentLength:
        '\u0421\u0435\u0433\u043C\u0435\u043D\u0442 \u0443\u0437\u0443\u043D\u0434\u0443\u0433\u0443',
      area: '\u0410\u0439\u043C\u0430\u043A',
      radius: '\u0420\u0430\u0434\u0438\u0443\u0441',
      perimeter: '\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440',
      height: '\u0414\u0438\u0430\u043C\u0435\u0442\u0440',
      width: '\u041A\u0435\u043D\u0447\u0438\u043B\u0438\u043A',
      coordinates:
        '\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0442\u0430\u0440',
      coordinatesMarker:
        '\u041C\u0430\u0440\u043A\u0435\u0440\u0434\u0438\u043D \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0442\u0430\u0440\u044B',
    },
  };
  var zt = {
    en: ys,
    de: vs,
    it: Ls,
    id: bs,
    ro: ks,
    ru: Ms,
    es: xs,
    nl: ws,
    fr: Cs,
    pt_br: Ss,
    pt_pt: Bs,
    zh: Ps,
    zh_tw: Es,
    pl: Rs,
    sv: Ds,
    el: Ts,
    hu: Os,
    da: Is,
    no: As,
    fa: Gs,
    ua: qs,
    tr: zs,
    cz: Ns,
    ja: Fs,
    fi: Vs,
    ko: Us,
    ky: js,
  };
  var Zd = {
      _globalEditModeEnabled: !1,
      enableGlobalEditMode(t) {
        let e = { ...t };
        (this._globalEditModeEnabled = !0),
          this.Toolbar.toggleButton('editMode', this.globalEditModeEnabled()),
          L.PM.Utils.findLayers(this.map).forEach((i) => {
            this._isRelevantForEdit(i) && i.pm.enable(e);
          }),
          this.throttledReInitEdit ||
            (this.throttledReInitEdit = L.Util.throttle(
              this.handleLayerAdditionInGlobalEditMode,
              100,
              this
            )),
          (this._addedLayersEdit = {}),
          this.map.on('layeradd', this._layerAddedEdit, this),
          this.map.on('layeradd', this.throttledReInitEdit, this),
          this._fireGlobalEditModeToggled(!0);
      },
      disableGlobalEditMode() {
        (this._globalEditModeEnabled = !1),
          L.PM.Utils.findLayers(this.map).forEach((e) => {
            e.pm.disable();
          }),
          this.map.off('layeradd', this._layerAddedEdit, this),
          this.map.off('layeradd', this.throttledReInitEdit, this),
          this.Toolbar.toggleButton('editMode', this.globalEditModeEnabled()),
          this._fireGlobalEditModeToggled(!1);
      },
      globalEditEnabled() {
        return this.globalEditModeEnabled();
      },
      globalEditModeEnabled() {
        return this._globalEditModeEnabled;
      },
      toggleGlobalEditMode(t = this.globalOptions) {
        this.globalEditModeEnabled()
          ? this.disableGlobalEditMode()
          : this.enableGlobalEditMode(t);
      },
      handleLayerAdditionInGlobalEditMode() {
        let t = this._addedLayersEdit;
        if (((this._addedLayersEdit = {}), this.globalEditModeEnabled()))
          for (let e in t) {
            let r = t[e];
            this._isRelevantForEdit(r) &&
              r.pm.enable({ ...this.globalOptions });
          }
      },
      _layerAddedEdit({ layer: t }) {
        this._addedLayersEdit[L.stamp(t)] = t;
      },
      _isRelevantForEdit(t) {
        return (
          t.pm &&
          !(t instanceof L.LayerGroup) &&
          ((!L.PM.optIn && !t.options.pmIgnore) ||
            (L.PM.optIn && t.options.pmIgnore === !1)) &&
          !t._pmTempLayer &&
          t.pm.options.allowEditing
        );
      },
    },
    Ks = Zd;
  var $d = {
      _globalDragModeEnabled: !1,
      enableGlobalDragMode() {
        let t = L.PM.Utils.findLayers(this.map);
        (this._globalDragModeEnabled = !0),
          (this._addedLayersDrag = {}),
          t.forEach((e) => {
            this._isRelevantForDrag(e) && e.pm.enableLayerDrag();
          }),
          this.throttledReInitDrag ||
            (this.throttledReInitDrag = L.Util.throttle(
              this.reinitGlobalDragMode,
              100,
              this
            )),
          this.map.on('layeradd', this._layerAddedDrag, this),
          this.map.on('layeradd', this.throttledReInitDrag, this),
          this.Toolbar.toggleButton('dragMode', this.globalDragModeEnabled()),
          this._fireGlobalDragModeToggled(!0);
      },
      disableGlobalDragMode() {
        let t = L.PM.Utils.findLayers(this.map);
        (this._globalDragModeEnabled = !1),
          t.forEach((e) => {
            e.pm.disableLayerDrag();
          }),
          this.map.off('layeradd', this._layerAddedDrag, this),
          this.map.off('layeradd', this.throttledReInitDrag, this),
          this.Toolbar.toggleButton('dragMode', this.globalDragModeEnabled()),
          this._fireGlobalDragModeToggled(!1);
      },
      globalDragModeEnabled() {
        return !!this._globalDragModeEnabled;
      },
      toggleGlobalDragMode() {
        this.globalDragModeEnabled()
          ? this.disableGlobalDragMode()
          : this.enableGlobalDragMode();
      },
      reinitGlobalDragMode() {
        let t = this._addedLayersDrag;
        if (((this._addedLayersDrag = {}), this.globalDragModeEnabled()))
          for (let e in t) {
            let r = t[e];
            this._isRelevantForDrag(r) && r.pm.enableLayerDrag();
          }
      },
      _layerAddedDrag({ layer: t }) {
        this._addedLayersDrag[L.stamp(t)] = t;
      },
      _isRelevantForDrag(t) {
        return (
          t.pm &&
          !(t instanceof L.LayerGroup) &&
          ((!L.PM.optIn && !t.options.pmIgnore) ||
            (L.PM.optIn && t.options.pmIgnore === !1)) &&
          !t._pmTempLayer &&
          t.pm.options.draggable
        );
      },
    },
    Hs = $d;
  var Wd = {
      _globalRemovalModeEnabled: !1,
      enableGlobalRemovalMode() {
        (this._globalRemovalModeEnabled = !0),
          this.map.eachLayer((t) => {
            this._isRelevantForRemoval(t) &&
              (t.pm.enabled() && t.pm.disable(),
              t.on('click', this.removeLayer, this));
          }),
          this.throttledReInitRemoval ||
            (this.throttledReInitRemoval = L.Util.throttle(
              this.handleLayerAdditionInGlobalRemovalMode,
              100,
              this
            )),
          (this._addedLayersRemoval = {}),
          this.map.on('layeradd', this._layerAddedRemoval, this),
          this.map.on('layeradd', this.throttledReInitRemoval, this),
          this.Toolbar.toggleButton(
            'removalMode',
            this.globalRemovalModeEnabled()
          ),
          this._fireGlobalRemovalModeToggled(!0);
      },
      disableGlobalRemovalMode() {
        (this._globalRemovalModeEnabled = !1),
          this.map.eachLayer((t) => {
            t.off('click', this.removeLayer, this);
          }),
          this.map.off('layeradd', this._layerAddedRemoval, this),
          this.map.off('layeradd', this.throttledReInitRemoval, this),
          this.Toolbar.toggleButton(
            'removalMode',
            this.globalRemovalModeEnabled()
          ),
          this._fireGlobalRemovalModeToggled(!1);
      },
      globalRemovalEnabled() {
        return this.globalRemovalModeEnabled();
      },
      globalRemovalModeEnabled() {
        return !!this._globalRemovalModeEnabled;
      },
      toggleGlobalRemovalMode() {
        this.globalRemovalModeEnabled()
          ? this.disableGlobalRemovalMode()
          : this.enableGlobalRemovalMode();
      },
      removeLayer(t) {
        let e = t.target;
        this._isRelevantForRemoval(e) &&
          !e.pm.dragging() &&
          (e.removeFrom(this.map.pm._getContainingLayer()),
          e.remove(),
          e instanceof L.LayerGroup
            ? (this._fireRemoveLayerGroup(e),
              this._fireRemoveLayerGroup(this.map, e))
            : (e.pm._fireRemove(e), e.pm._fireRemove(this.map, e)));
      },
      _isRelevantForRemoval(t) {
        return (
          t.pm &&
          !(t instanceof L.LayerGroup) &&
          ((!L.PM.optIn && !t.options.pmIgnore) ||
            (L.PM.optIn && t.options.pmIgnore === !1)) &&
          !t._pmTempLayer &&
          t.pm.options.allowRemoval
        );
      },
      handleLayerAdditionInGlobalRemovalMode() {
        let t = this._addedLayersRemoval;
        if (((this._addedLayersRemoval = {}), this.globalRemovalModeEnabled()))
          for (let e in t) {
            let r = t[e];
            this._isRelevantForRemoval(r) &&
              (r.pm.enabled() && r.pm.disable(),
              r.on('click', this.removeLayer, this));
          }
      },
      _layerAddedRemoval({ layer: t }) {
        this._addedLayersRemoval[L.stamp(t)] = t;
      },
    },
    Xs = Wd;
  var Qd = {
      _globalRotateModeEnabled: !1,
      enableGlobalRotateMode() {
        (this._globalRotateModeEnabled = !0),
          L.PM.Utils.findLayers(this.map)
            .filter((e) => e instanceof L.Polyline)
            .forEach((e) => {
              this._isRelevantForRotate(e) && e.pm.enableRotate();
            }),
          this.throttledReInitRotate ||
            (this.throttledReInitRotate = L.Util.throttle(
              this.handleLayerAdditionInGlobalRotateMode,
              100,
              this
            )),
          (this._addedLayersRotate = {}),
          this.map.on('layeradd', this._layerAddedRotate, this),
          this.map.on('layeradd', this.throttledReInitRotate, this),
          this.Toolbar.toggleButton(
            'rotateMode',
            this.globalRotateModeEnabled()
          ),
          this._fireGlobalRotateModeToggled();
      },
      disableGlobalRotateMode() {
        (this._globalRotateModeEnabled = !1),
          L.PM.Utils.findLayers(this.map)
            .filter((e) => e instanceof L.Polyline)
            .forEach((e) => {
              e.pm.disableRotate();
            }),
          this.map.off('layeradd', this._layerAddedRotate, this),
          this.map.off('layeradd', this.throttledReInitRotate, this),
          this.Toolbar.toggleButton(
            'rotateMode',
            this.globalRotateModeEnabled()
          ),
          this._fireGlobalRotateModeToggled();
      },
      globalRotateModeEnabled() {
        return !!this._globalRotateModeEnabled;
      },
      toggleGlobalRotateMode() {
        this.globalRotateModeEnabled()
          ? this.disableGlobalRotateMode()
          : this.enableGlobalRotateMode();
      },
      _isRelevantForRotate(t) {
        return (
          t.pm &&
          t instanceof L.Polyline &&
          !(t instanceof L.LayerGroup) &&
          ((!L.PM.optIn && !t.options.pmIgnore) ||
            (L.PM.optIn && t.options.pmIgnore === !1)) &&
          !t._pmTempLayer &&
          t.pm.options.allowRotation
        );
      },
      handleLayerAdditionInGlobalRotateMode() {
        let t = this._addedLayersRotate;
        if (((this._addedLayersRotate = {}), this.globalRotateModeEnabled()))
          for (let e in t) {
            let r = t[e];
            this._isRelevantForRemoval(r) && r.pm.enableRotate();
          }
      },
      _layerAddedRotate({ layer: t }) {
        this._addedLayersRotate[L.stamp(t)] = t;
      },
    },
    Ys = Qd;
  var Js = Lt(Te()),
    tg = {
      _fireDrawStart(t = 'Draw', e = {}) {
        this.__fire(
          this._map,
          'pm:drawstart',
          { shape: this._shape, workingLayer: this._layer },
          t,
          e
        );
      },
      _fireDrawEnd(t = 'Draw', e = {}) {
        this.__fire(this._map, 'pm:drawend', { shape: this._shape }, t, e);
      },
      _fireCreate(t, e = 'Draw', r = {}) {
        this.__fire(
          this._map,
          'pm:create',
          { shape: this._shape, marker: t, layer: t },
          e,
          r
        );
      },
      _fireCenterPlaced(t = 'Draw', e = {}) {
        let r = t === 'Draw' ? this._layer : void 0,
          i = t !== 'Draw' ? this._layer : void 0;
        this.__fire(
          this._layer,
          'pm:centerplaced',
          {
            shape: this._shape,
            workingLayer: r,
            layer: i,
            latlng: this._layer.getLatLng(),
          },
          t,
          e
        );
      },
      _fireCut(t, e, r, i = 'Draw', n = {}) {
        this.__fire(
          t,
          'pm:cut',
          { shape: this._shape, layer: e, originalLayer: r },
          i,
          n
        );
      },
      _fireEdit(t = this._layer, e = 'Edit', r = {}) {
        this.__fire(
          t,
          'pm:edit',
          { layer: this._layer, shape: this.getShape() },
          e,
          r
        );
      },
      _fireEnable(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:enable',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireDisable(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:disable',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireUpdate(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:update',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireMarkerDragStart(t, e = void 0, r = 'Edit', i = {}) {
        this.__fire(
          this._layer,
          'pm:markerdragstart',
          {
            layer: this._layer,
            markerEvent: t,
            shape: this.getShape(),
            indexPath: e,
          },
          r,
          i
        );
      },
      _fireMarkerDrag(t, e = void 0, r = 'Edit', i = {}) {
        this.__fire(
          this._layer,
          'pm:markerdrag',
          {
            layer: this._layer,
            markerEvent: t,
            shape: this.getShape(),
            indexPath: e,
          },
          r,
          i
        );
      },
      _fireMarkerDragEnd(t, e = void 0, r = void 0, i = 'Edit', n = {}) {
        this.__fire(
          this._layer,
          'pm:markerdragend',
          {
            layer: this._layer,
            markerEvent: t,
            shape: this.getShape(),
            indexPath: e,
            intersectionReset: r,
          },
          i,
          n
        );
      },
      _fireDragStart(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:dragstart',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireDrag(t, e = 'Edit', r = {}) {
        this.__fire(
          this._layer,
          'pm:drag',
          { ...t, shape: this.getShape() },
          e,
          r
        );
      },
      _fireDragEnd(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:dragend',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireDragEnable(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:dragenable',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireDragDisable(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:dragdisable',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireRemove(t, e = t, r = 'Edit', i = {}) {
        this.__fire(t, 'pm:remove', { layer: e, shape: this.getShape() }, r, i);
      },
      _fireVertexAdded(t, e, r, i = 'Edit', n = {}) {
        this.__fire(
          this._layer,
          'pm:vertexadded',
          {
            layer: this._layer,
            workingLayer: this._layer,
            marker: t,
            indexPath: e,
            latlng: r,
            shape: this.getShape(),
          },
          i,
          n
        );
      },
      _fireVertexRemoved(t, e, r = 'Edit', i = {}) {
        this.__fire(
          this._layer,
          'pm:vertexremoved',
          {
            layer: this._layer,
            marker: t,
            indexPath: e,
            shape: this.getShape(),
          },
          r,
          i
        );
      },
      _fireVertexClick(t, e, r = 'Edit', i = {}) {
        this.__fire(
          this._layer,
          'pm:vertexclick',
          {
            layer: this._layer,
            markerEvent: t,
            indexPath: e,
            shape: this.getShape(),
          },
          r,
          i
        );
      },
      _fireIntersect(t, e = this._layer, r = 'Edit', i = {}) {
        this.__fire(
          e,
          'pm:intersect',
          { layer: this._layer, intersection: t, shape: this.getShape() },
          r,
          i
        );
      },
      _fireLayerReset(t, e, r = 'Edit', i = {}) {
        this.__fire(
          this._layer,
          'pm:layerreset',
          {
            layer: this._layer,
            markerEvent: t,
            indexPath: e,
            shape: this.getShape(),
          },
          r,
          i
        );
      },
      _fireChange(t, e = 'Edit', r = {}) {
        this.__fire(
          this._layer,
          'pm:change',
          { layer: this._layer, latlngs: t, shape: this.getShape() },
          e,
          r
        );
      },
      _fireTextChange(t, e = 'Edit', r = {}) {
        this.__fire(
          this._layer,
          'pm:textchange',
          { layer: this._layer, text: t, shape: this.getShape() },
          e,
          r
        );
      },
      _fireTextFocus(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:textfocus',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireTextBlur(t = 'Edit', e = {}) {
        this.__fire(
          this._layer,
          'pm:textblur',
          { layer: this._layer, shape: this.getShape() },
          t,
          e
        );
      },
      _fireSnapDrag(t, e, r = 'Snapping', i = {}) {
        this.__fire(t, 'pm:snapdrag', e, r, i);
      },
      _fireSnap(t, e, r = 'Snapping', i = {}) {
        this.__fire(t, 'pm:snap', e, r, i);
      },
      _fireUnsnap(t, e, r = 'Snapping', i = {}) {
        this.__fire(t, 'pm:unsnap', e, r, i);
      },
      _fireRotationEnable(t, e, r = 'Rotation', i = {}) {
        this.__fire(
          t,
          'pm:rotateenable',
          {
            layer: this._layer,
            helpLayer: this._rotatePoly,
            shape: this.getShape(),
          },
          r,
          i
        );
      },
      _fireRotationDisable(t, e = 'Rotation', r = {}) {
        this.__fire(
          t,
          'pm:rotatedisable',
          { layer: this._layer, shape: this.getShape() },
          e,
          r
        );
      },
      _fireRotationStart(t, e, r = 'Rotation', i = {}) {
        this.__fire(
          t,
          'pm:rotatestart',
          {
            layer: this._rotationLayer,
            helpLayer: this._layer,
            startAngle: this._startAngle,
            originLatLngs: e,
          },
          r,
          i
        );
      },
      _fireRotation(t, e, r, i = this._rotationLayer, n = 'Rotation', a = {}) {
        this.__fire(
          t,
          'pm:rotate',
          {
            layer: i,
            helpLayer: this._layer,
            startAngle: this._startAngle,
            angle: i.pm.getAngle(),
            angleDiff: e,
            oldLatLngs: r,
            newLatLngs: i.getLatLngs(),
          },
          n,
          a
        );
      },
      _fireRotationEnd(t, e, r, i = 'Rotation', n = {}) {
        this.__fire(
          t,
          'pm:rotateend',
          {
            layer: this._rotationLayer,
            helpLayer: this._layer,
            startAngle: e,
            angle: this._rotationLayer.pm.getAngle(),
            originLatLngs: r,
            newLatLngs: this._rotationLayer.getLatLngs(),
          },
          i,
          n
        );
      },
      _fireActionClick(t, e, r, i = 'Toolbar', n = {}) {
        this.__fire(
          this._map,
          'pm:actionclick',
          { text: t.text, action: t, btnName: e, button: r },
          i,
          n
        );
      },
      _fireButtonClick(t, e, r = 'Toolbar', i = {}) {
        this.__fire(
          this._map,
          'pm:buttonclick',
          { btnName: t, button: e },
          r,
          i
        );
      },
      _fireLangChange(t, e, r, i, n = 'Global', a = {}) {
        this.__fire(
          this.map,
          'pm:langchange',
          { oldLang: t, activeLang: e, fallback: r, translations: i },
          n,
          a
        );
      },
      _fireGlobalDragModeToggled(t, e = 'Global', r = {}) {
        this.__fire(
          this.map,
          'pm:globaldragmodetoggled',
          { enabled: t, map: this.map },
          e,
          r
        );
      },
      _fireGlobalEditModeToggled(t, e = 'Global', r = {}) {
        this.__fire(
          this.map,
          'pm:globaleditmodetoggled',
          { enabled: t, map: this.map },
          e,
          r
        );
      },
      _fireGlobalRemovalModeToggled(t, e = 'Global', r = {}) {
        this.__fire(
          this.map,
          'pm:globalremovalmodetoggled',
          { enabled: t, map: this.map },
          e,
          r
        );
      },
      _fireGlobalCutModeToggled(t = 'Global', e = {}) {
        this.__fire(
          this._map,
          'pm:globalcutmodetoggled',
          { enabled: !!this._enabled, map: this._map },
          t,
          e
        );
      },
      _fireGlobalDrawModeToggled(t = 'Global', e = {}) {
        this.__fire(
          this._map,
          'pm:globaldrawmodetoggled',
          { enabled: this._enabled, shape: this._shape, map: this._map },
          t,
          e
        );
      },
      _fireGlobalRotateModeToggled(t = 'Global', e = {}) {
        this.__fire(
          this.map,
          'pm:globalrotatemodetoggled',
          { enabled: this.globalRotateModeEnabled(), map: this.map },
          t,
          e
        );
      },
      _fireRemoveLayerGroup(t, e = t, r = 'Edit', i = {}) {
        this.__fire(t, 'pm:remove', { layer: e, shape: void 0 }, r, i);
      },
      _fireKeyeventEvent(t, e, r, i = 'Global', n = {}) {
        this.__fire(
          this.map,
          'pm:keyevent',
          { event: t, eventType: e, focusOn: r },
          i,
          n
        );
      },
      __fire(t, e, r, i, n = {}) {
        (r = (0, Js.default)(r, n, { source: i })),
          L.PM.Utils._fireEvent(t, e, r);
      },
    },
    St = tg;
  var eg = () => ({
      _lastEvents: { keydown: void 0, keyup: void 0, current: void 0 },
      _initKeyListener(t) {
        (this.map = t),
          L.DomEvent.on(document, 'keydown keyup', this._onKeyListener, this),
          L.DomEvent.on(window, 'blur', this._onBlur, this),
          t.once('unload', this._unbindKeyListenerEvents, this);
      },
      _unbindKeyListenerEvents() {
        L.DomEvent.off(document, 'keydown keyup', this._onKeyListener, this),
          L.DomEvent.off(window, 'blur', this._onBlur, this);
      },
      _onKeyListener(t) {
        let e = 'document';
        this.map.getContainer().contains(t.target) && (e = 'map');
        let r = { event: t, eventType: t.type, focusOn: e };
        (this._lastEvents[t.type] = r),
          (this._lastEvents.current = r),
          this.map.pm._fireKeyeventEvent(t, t.type, e);
      },
      _onBlur(t) {
        t.altKey = !1;
        let e = { event: t, eventType: t.type, focusOn: 'document' };
        (this._lastEvents[t.type] = e), (this._lastEvents.current = e);
      },
      getLastKeyEvent(t = 'current') {
        return this._lastEvents[t];
      },
      isShiftKeyPressed() {
        return this._lastEvents.current?.event.shiftKey;
      },
      isAltKeyPressed() {
        return this._lastEvents.current?.event.altKey;
      },
      isCtrlKeyPressed() {
        return this._lastEvents.current?.event.ctrlKey;
      },
      isMetaKeyPressed() {
        return this._lastEvents.current?.event.metaKey;
      },
      getPressedKey() {
        return this._lastEvents.current?.event.key;
      },
    }),
    Zs = eg;
  var hr = Lt(ve());
  function N(t) {
    let e = L.PM.activeLang;
    return (0, hr.default)(zt[e], t) || (0, hr.default)(zt.en, t) || t;
  }
  function Le(t) {
    for (let e = 0; e < t.length; e += 1) {
      let r = t[e];
      if (Array.isArray(r)) {
        if (Le(r)) return !0;
      } else if (r != null && r !== '') return !0;
    }
    return !1;
  }
  function be(t) {
    return t.reduce((e, r) => {
      if (r.length !== 0) {
        let i = Array.isArray(r) ? be(r) : r;
        Array.isArray(i) ? i.length !== 0 && e.push(i) : e.push(i);
      }
      return e;
    }, []);
  }
  function zg(t, e, r) {
    let i = { a: L.CRS.Earth.R, b: 63567523142e-4, f: 0.0033528106647474805 },
      { a: n, b: a, f: o } = i,
      u = t.lng,
      c = t.lat,
      f = r,
      v = Math.PI,
      b = (e * v) / 180,
      E = Math.sin(b),
      M = Math.cos(b),
      B = (1 - o) * Math.tan((c * v) / 180),
      I = 1 / Math.sqrt(1 + B * B),
      g = B * I,
      _ = Math.atan2(B, M),
      w = I * E,
      P = 1 - w * w,
      S = (P * (n * n - a * a)) / (a * a),
      R = 1 + (S / 16384) * (4096 + S * (-768 + S * (320 - 175 * S))),
      T = (S / 1024) * (256 + S * (-128 + S * (74 - 47 * S))),
      G = f / (a * R),
      z = 2 * Math.PI,
      A,
      j,
      F;
    for (; Math.abs(G - z) > 1e-12; ) {
      (A = Math.cos(2 * _ + G)), (j = Math.sin(G)), (F = Math.cos(G));
      let xt =
        T *
        j *
        (A +
          (T / 4) *
            (F * (-1 + 2 * A * A) -
              (T / 6) * A * (-3 + 4 * j * j) * (-3 + 4 * A * A)));
      (z = G), (G = f / (a * R) + xt);
    }
    let Y = g * j - I * F * M,
      Mt = Math.atan2(g * F + I * j * M, (1 - o) * Math.sqrt(w * w + Y * Y)),
      ft = Math.atan2(j * E, I * F - g * j * M),
      ut = (o / 16) * P * (4 + o * (4 - 3 * P)),
      dt =
        ft - (1 - ut) * o * w * (G + ut * j * (A + ut * F * (-1 + 2 * A * A))),
      ne = u + (dt * 180) / v,
      tt = (Mt * 180) / v;
    return L.latLng(ne, tt);
  }
  function ur(t, e, r, i, n = !0) {
    let a,
      o,
      u,
      c = [];
    for (let f = 0; f < r; f += 1) {
      if (n)
        (a = (f * 360) / r + i),
          (o = zg(t, a, e)),
          (u = L.latLng(o.lng, o.lat));
      else {
        let v = t.lat + Math.cos((2 * f * Math.PI) / r) * e,
          b = t.lng + Math.sin((2 * f * Math.PI) / r) * e;
        u = L.latLng(v, b);
      }
      c.push(u);
    }
    return c;
  }
  function Ng(t, e, r) {
    e = (e + 360) % 360;
    let i = Math.PI / 180,
      n = 180 / Math.PI,
      { R: a } = L.CRS.Earth,
      o = t.lng * i,
      u = t.lat * i,
      c = e * i,
      f = Math.sin(u),
      v = Math.cos(u),
      b = Math.cos(r / a),
      E = Math.sin(r / a),
      M = Math.asin(f * b + v * E * Math.cos(c)),
      B = o + Math.atan2(Math.sin(c) * E * v, b - f * Math.sin(M));
    B *= n;
    let I = B - 360,
      g = B < -180 ? B + 360 : B;
    return (B = B > 180 ? I : g), L.latLng([M * n, B]);
  }
  function ke(t, e, r) {
    let i = t.latLngToContainerPoint(e),
      n = t.latLngToContainerPoint(r),
      a = (Math.atan2(n.y - i.y, n.x - i.x) * 180) / Math.PI + 90;
    return (a += a < 0 ? 360 : 0), a;
  }
  function Wt(t, e, r, i) {
    let n = ke(t, e, r);
    return Ng(e, n, i);
  }
  function wo(t, e, r = 'asc') {
    if (!e || Object.keys(e).length === 0) return (c, f) => c - f;
    let i = Object.keys(e),
      n,
      a = i.length - 1,
      o = {};
    for (; a >= 0; ) (n = i[a]), (o[n.toLowerCase()] = e[n]), (a -= 1);
    function u(c) {
      if (c instanceof L.Marker) return 'Marker';
      if (c instanceof L.Circle) return 'Circle';
      if (c instanceof L.CircleMarker) return 'CircleMarker';
      if (c instanceof L.Rectangle) return 'Rectangle';
      if (c instanceof L.Polygon) return 'Polygon';
      if (c instanceof L.Polyline) return 'Line';
    }
    return (c, f) => {
      let v, b;
      if (t === 'instanceofShape') {
        if (
          ((v = u(c.layer).toLowerCase()),
          (b = u(f.layer).toLowerCase()),
          !v || !b)
        )
          return 0;
      } else {
        if (!c.hasOwnProperty(t) || !f.hasOwnProperty(t)) return 0;
        (v = c[t].toLowerCase()), (b = f[t].toLowerCase());
      }
      let E = v in o ? o[v] : Number.MAX_SAFE_INTEGER,
        M = b in o ? o[b] : Number.MAX_SAFE_INTEGER,
        B = 0;
      return E < M ? (B = -1) : E > M && (B = 1), r === 'desc' ? B * -1 : B;
    };
  }
  function bt(t, e = t.getLatLngs()) {
    return t instanceof L.Polygon
      ? L.polygon(e).getLatLngs()
      : L.polyline(e).getLatLngs();
  }
  function cr(t, e) {
    if (e.options.crs?.projection?.MAX_LATITUDE) {
      let r = e.options.crs?.projection?.MAX_LATITUDE;
      t.lat = Math.max(Math.min(r, t.lat), -r);
    }
    return t;
  }
  function Bt(t) {
    return (
      t.options.renderer ||
      (t._map &&
        (t._map._getPaneRenderer(t.options.pane) ||
          t._map.options.renderer ||
          t._map._renderer)) ||
      t._renderer
    );
  }
  var Fg = L.Class.extend({
      includes: [Ks, Hs, Xs, Ys, St],
      initialize(t) {
        (this.map = t),
          (this.Draw = new L.PM.Draw(t)),
          (this.Toolbar = new L.PM.Toolbar(t)),
          (this.Keyboard = Zs()),
          (this.globalOptions = {
            snappable: !0,
            layerGroup: void 0,
            snappingOrder: [
              'Marker',
              'CircleMarker',
              'Circle',
              'Line',
              'Polygon',
              'Rectangle',
            ],
            panes: {
              vertexPane: 'markerPane',
              layerPane: 'overlayPane',
              markerPane: 'markerPane',
            },
            draggable: !0,
          }),
          this.Keyboard._initKeyListener(t);
      },
      setLang(t = 'en', e, r = 'en') {
        let i = L.PM.activeLang;
        e && (zt[t] = (0, pr.default)(zt[r], e)),
          (L.PM.activeLang = t),
          this.map.pm.Toolbar.reinit(),
          this._fireLangChange(i, t, r, zt[t]);
      },
      addControls(t) {
        this.Toolbar.addControls(t);
      },
      removeControls() {
        this.Toolbar.removeControls();
      },
      toggleControls() {
        this.Toolbar.toggleControls();
      },
      controlsVisible() {
        return this.Toolbar.isVisible;
      },
      enableDraw(t = 'Polygon', e) {
        t === 'Poly' && (t = 'Polygon'), this.Draw.enable(t, e);
      },
      disableDraw(t = 'Polygon') {
        t === 'Poly' && (t = 'Polygon'), this.Draw.disable(t);
      },
      setPathOptions(t, e = {}) {
        let r = e.ignoreShapes || [],
          i = e.merge || !1;
        this.map.pm.Draw.shapes.forEach((n) => {
          r.indexOf(n) === -1 && this.map.pm.Draw[n].setPathOptions(t, i);
        });
      },
      getGlobalOptions() {
        return this.globalOptions;
      },
      setGlobalOptions(t) {
        let e = (0, pr.default)(this.globalOptions, t);
        e.editable &&
          ((e.resizeableCircleMarker = e.editable), delete e.editable);
        let r = !1;
        this.map.pm.Draw.CircleMarker.enabled() &&
          !!this.map.pm.Draw.CircleMarker.options.resizeableCircleMarker !=
            !!e.resizeableCircleMarker &&
          (this.map.pm.Draw.CircleMarker.disable(), (r = !0));
        let i = !1;
        this.map.pm.Draw.Circle.enabled() &&
          !!this.map.pm.Draw.Circle.options.resizableCircle !=
            !!e.resizableCircle &&
          (this.map.pm.Draw.Circle.disable(), (i = !0)),
          this.map.pm.Draw.shapes.forEach((a) => {
            this.map.pm.Draw[a].setOptions(e);
          }),
          r && this.map.pm.Draw.CircleMarker.enable(),
          i && this.map.pm.Draw.Circle.enable(),
          L.PM.Utils.findLayers(this.map).forEach((a) => {
            a.pm.setOptions(e);
          }),
          this.map.fire('pm:globaloptionschanged'),
          (this.globalOptions = e),
          this.applyGlobalOptions();
      },
      applyGlobalOptions() {
        L.PM.Utils.findLayers(this.map).forEach((e) => {
          e.pm.enabled() && e.pm.applyOptions();
        });
      },
      globalDrawModeEnabled() {
        return !!this.Draw.getActiveShape();
      },
      globalCutModeEnabled() {
        return !!this.Draw.Cut.enabled();
      },
      enableGlobalCutMode(t) {
        return this.Draw.Cut.enable(t);
      },
      toggleGlobalCutMode(t) {
        return this.Draw.Cut.toggle(t);
      },
      disableGlobalCutMode() {
        return this.Draw.Cut.disable();
      },
      getGeomanLayers(t = !1) {
        let e = L.PM.Utils.findLayers(this.map);
        if (!t) return e;
        let r = L.featureGroup();
        return (
          (r._pmTempLayer = !0),
          e.forEach((i) => {
            r.addLayer(i);
          }),
          r
        );
      },
      getGeomanDrawLayers(t = !1) {
        let e = L.PM.Utils.findLayers(this.map).filter(
          (i) => i._drawnByGeoman === !0
        );
        if (!t) return e;
        let r = L.featureGroup();
        return (
          (r._pmTempLayer = !0),
          e.forEach((i) => {
            r.addLayer(i);
          }),
          r
        );
      },
      _getContainingLayer() {
        return this.globalOptions.layerGroup &&
          this.globalOptions.layerGroup instanceof L.LayerGroup
          ? this.globalOptions.layerGroup
          : this.map;
      },
      _isCRSSimple() {
        return this.map.options.crs === L.CRS.Simple;
      },
      _touchEventCounter: 0,
      _addTouchEvents(t) {
        this._touchEventCounter === 0 &&
          (L.DomEvent.on(t, 'touchmove', this._canvasTouchMove, this),
          L.DomEvent.on(
            t,
            'touchstart touchend touchcancel',
            this._canvasTouchClick,
            this
          )),
          (this._touchEventCounter += 1);
      },
      _removeTouchEvents(t) {
        this._touchEventCounter === 1 &&
          (L.DomEvent.off(t, 'touchmove', this._canvasTouchMove, this),
          L.DomEvent.off(
            t,
            'touchstart touchend touchcancel',
            this._canvasTouchClick,
            this
          )),
          (this._touchEventCounter =
            this._touchEventCounter <= 1 ? 0 : this._touchEventCounter - 1);
      },
      _canvasTouchMove(t) {
        Bt(this.map)._onMouseMove(this._createMouseEvent('mousemove', t));
      },
      _canvasTouchClick(t) {
        let e = '';
        t.type === 'touchstart' || t.type === 'pointerdown'
          ? (e = 'mousedown')
          : (t.type === 'touchend' ||
              t.type === 'pointerup' ||
              t.type === 'touchcancel' ||
              t.type === 'pointercancel') &&
            (e = 'mouseup'),
          e && Bt(this.map)._onClick(this._createMouseEvent(e, t));
      },
      _createMouseEvent(t, e) {
        let r,
          i = e.touches[0] || e.changedTouches[0];
        try {
          r = new MouseEvent(t, {
            bubbles: e.bubbles,
            cancelable: e.cancelable,
            view: e.view,
            detail: i.detail,
            screenX: i.screenX,
            screenY: i.screenY,
            clientX: i.clientX,
            clientY: i.clientY,
            ctrlKey: e.ctrlKey,
            altKey: e.altKey,
            shiftKey: e.shiftKey,
            metaKey: e.metaKey,
            button: e.button,
            relatedTarget: e.relatedTarget,
          });
        } catch {
          (r = document.createEvent('MouseEvents')),
            r.initMouseEvent(
              t,
              e.bubbles,
              e.cancelable,
              e.view,
              i.detail,
              i.screenX,
              i.screenY,
              i.clientX,
              i.clientY,
              e.ctrlKey,
              e.altKey,
              e.shiftKey,
              e.metaKey,
              e.button,
              e.relatedTarget
            );
        }
        return r;
      },
    }),
    Co = Fg;
  var Vg = L.Control.extend({
      includes: [St],
      options: { position: 'topleft', disableByOtherButtons: !0 },
      initialize(t) {
        this._button = L.Util.extend({}, this.options, t);
      },
      onAdd(t) {
        return (
          (this._map = t),
          this._map.pm.Toolbar.options.oneBlock
            ? (this._container = this._map.pm.Toolbar._createContainer(
                this.options.position
              ))
            : this._button.tool === 'edit'
              ? (this._container = this._map.pm.Toolbar.editContainer)
              : this._button.tool === 'options'
                ? (this._container = this._map.pm.Toolbar.optionsContainer)
                : this._button.tool === 'custom'
                  ? (this._container = this._map.pm.Toolbar.customContainer)
                  : (this._container = this._map.pm.Toolbar.drawContainer),
          (this.buttonsDomNode = this._makeButton(this._button)),
          this._container.appendChild(this.buttonsDomNode),
          this._container
        );
      },
      onRemove() {
        return this.buttonsDomNode.remove(), this._container;
      },
      getText() {
        return this._button.text;
      },
      getIconUrl() {
        return this._button.iconUrl;
      },
      destroy() {
        (this._button = {}), this._update();
      },
      toggle(t) {
        return (
          typeof t == 'boolean'
            ? (this._button.toggleStatus = t)
            : (this._button.toggleStatus = !this._button.toggleStatus),
          this._applyStyleClasses(),
          this._button.toggleStatus
        );
      },
      toggled() {
        return this._button.toggleStatus;
      },
      onCreate() {
        this.toggle(!1);
      },
      disable() {
        this.toggle(!1), (this._button.disabled = !0), this._updateDisabled();
      },
      enable() {
        (this._button.disabled = !1), this._updateDisabled();
      },
      _triggerClick(t) {
        t && t.preventDefault(),
          !this._button.disabled &&
            (this._button.onClick(t, { button: this, event: t }),
            this._clicked(t),
            this._button.afterClick(t, { button: this, event: t }));
      },
      _makeButton(t) {
        let e = this.options.position.indexOf('right') > -1 ? 'pos-right' : '',
          r = L.DomUtil.create(
            'div',
            `button-container  ${e}`,
            this._container
          );
        t.title && r.setAttribute('title', t.title);
        let i = L.DomUtil.create('a', 'leaflet-buttons-control-button', r);
        i.setAttribute('role', 'button'),
          i.setAttribute('tabindex', '0'),
          (i.href = '#');
        let n = L.DomUtil.create('div', `leaflet-pm-actions-container ${e}`, r),
          a = t.actions,
          o = {
            cancel: {
              text: N('actions.cancel'),
              onClick() {
                this._triggerClick();
              },
            },
            finishMode: {
              text: N('actions.finish'),
              onClick() {
                this._triggerClick();
              },
            },
            removeLastVertex: {
              text: N('actions.removeLastVertex'),
              onClick() {
                this._map.pm.Draw[t.jsClass]._removeLastVertex();
              },
            },
            finish: {
              text: N('actions.finish'),
              onClick(c) {
                this._map.pm.Draw[t.jsClass]._finishShape(c);
              },
            },
          };
        a.forEach((c) => {
          let f = typeof c == 'string' ? c : c.name,
            v;
          if (o[f]) v = o[f];
          else if (c.text) v = c;
          else return;
          let b = L.DomUtil.create(
            'a',
            `leaflet-pm-action ${e} action-${f}`,
            n
          );
          if (
            (b.setAttribute('role', 'button'),
            b.setAttribute('tabindex', '0'),
            (b.href = '#'),
            (b.innerHTML = v.text),
            L.DomEvent.disableClickPropagation(b),
            L.DomEvent.on(b, 'click', L.DomEvent.stop),
            !t.disabled && v.onClick)
          ) {
            let E = (M) => {
              M.preventDefault();
              let B = '',
                { buttons: I } = this._map.pm.Toolbar;
              for (let g in I)
                if (I[g]._button === t) {
                  B = g;
                  break;
                }
              this._fireActionClick(v, B, t);
            };
            L.DomEvent.addListener(b, 'click', E, this),
              L.DomEvent.addListener(b, 'click', v.onClick, this);
          }
        }),
          t.toggleStatus && L.DomUtil.addClass(r, 'active');
        let u = L.DomUtil.create('div', 'control-icon', i);
        return (
          t.iconUrl && u.setAttribute('src', t.iconUrl),
          t.className && L.DomUtil.addClass(u, t.className),
          L.DomEvent.disableClickPropagation(i),
          L.DomEvent.on(i, 'click', L.DomEvent.stop),
          t.disabled ||
            (L.DomEvent.addListener(i, 'click', this._onBtnClick, this),
            L.DomEvent.addListener(i, 'click', this._triggerClick, this)),
          t.disabled &&
            (L.DomUtil.addClass(i, 'pm-disabled'),
            i.setAttribute('aria-disabled', 'true')),
          r
        );
      },
      _applyStyleClasses() {
        this._container &&
          (!this._button.toggleStatus || this._button.cssToggle === !1
            ? (L.DomUtil.removeClass(this.buttonsDomNode, 'active'),
              L.DomUtil.removeClass(this._container, 'activeChild'))
            : (L.DomUtil.addClass(this.buttonsDomNode, 'active'),
              L.DomUtil.addClass(this._container, 'activeChild')));
      },
      _onBtnClick() {
        if (this._button.disabled) return;
        this._button.disableOtherButtons &&
          this._map.pm.Toolbar.triggerClickOnToggledButtons(this);
        let t = '',
          { buttons: e } = this._map.pm.Toolbar;
        for (let r in e)
          if (e[r]._button === this._button) {
            t = r;
            break;
          }
        this._fireButtonClick(t, this._button);
      },
      _clicked() {
        this._button.doToggle && this.toggle();
      },
      _updateDisabled() {
        if (!this._container) return;
        let t = 'pm-disabled',
          e = this.buttonsDomNode.children[0];
        this._button.disabled
          ? (L.DomUtil.addClass(e, t), e.setAttribute('aria-disabled', 'true'))
          : (L.DomUtil.removeClass(e, t),
            e.setAttribute('aria-disabled', 'false'));
      },
    }),
    Po = Vg;
  L.Control.PMButton = Po;
  var Ug = L.Class.extend({
      options: {
        drawMarker: !0,
        drawRectangle: !0,
        drawPolyline: !0,
        drawPolygon: !0,
        drawCircle: !0,
        drawCircleMarker: !0,
        drawText: !0,
        editMode: !0,
        dragMode: !0,
        cutPolygon: !0,
        removalMode: !0,
        rotateMode: !0,
        snappingOption: !0,
        drawControls: !0,
        editControls: !0,
        optionsControls: !0,
        customControls: !0,
        oneBlock: !1,
        position: 'topleft',
        positions: { draw: '', edit: '', options: '', custom: '' },
      },
      customButtons: [],
      initialize(t) {
        this.init(t);
      },
      reinit() {
        let t = this.isVisible;
        this.removeControls(), this._defineButtons(), t && this.addControls();
      },
      init(t) {
        (this.map = t),
          (this.buttons = {}),
          (this.isVisible = !1),
          (this.drawContainer = L.DomUtil.create(
            'div',
            'leaflet-pm-toolbar leaflet-pm-draw leaflet-bar leaflet-control'
          )),
          (this.editContainer = L.DomUtil.create(
            'div',
            'leaflet-pm-toolbar leaflet-pm-edit leaflet-bar leaflet-control'
          )),
          (this.optionsContainer = L.DomUtil.create(
            'div',
            'leaflet-pm-toolbar leaflet-pm-options leaflet-bar leaflet-control'
          )),
          (this.customContainer = L.DomUtil.create(
            'div',
            'leaflet-pm-toolbar leaflet-pm-custom leaflet-bar leaflet-control'
          )),
          this._defineButtons();
      },
      _createContainer(t) {
        let e = `${t}Container`;
        return (
          this[e] ||
            (this[e] = L.DomUtil.create(
              'div',
              `leaflet-pm-toolbar leaflet-pm-${t} leaflet-bar leaflet-control`
            )),
          this[e]
        );
      },
      getButtons() {
        return this.buttons;
      },
      addControls(t = this.options) {
        typeof t.editPolygon < 'u' && (t.editMode = t.editPolygon),
          typeof t.deleteLayer < 'u' && (t.removalMode = t.deleteLayer),
          L.Util.setOptions(this, t),
          this.applyIconStyle(),
          (this.isVisible = !0),
          this._showHideButtons();
      },
      applyIconStyle() {
        let t = this.getButtons(),
          e = {
            geomanIcons: {
              drawMarker: 'control-icon leaflet-pm-icon-marker',
              drawPolyline: 'control-icon leaflet-pm-icon-polyline',
              drawRectangle: 'control-icon leaflet-pm-icon-rectangle',
              drawPolygon: 'control-icon leaflet-pm-icon-polygon',
              drawCircle: 'control-icon leaflet-pm-icon-circle',
              drawCircleMarker: 'control-icon leaflet-pm-icon-circle-marker',
              editMode: 'control-icon leaflet-pm-icon-edit',
              dragMode: 'control-icon leaflet-pm-icon-drag',
              cutPolygon: 'control-icon leaflet-pm-icon-cut',
              removalMode: 'control-icon leaflet-pm-icon-delete',
              drawText: 'control-icon leaflet-pm-icon-text',
            },
          };
        for (let r in t) {
          let i = t[r];
          L.Util.setOptions(i, { className: e.geomanIcons[r] });
        }
      },
      removeControls() {
        let t = this.getButtons();
        for (let e in t) t[e].remove();
        this.isVisible = !1;
      },
      toggleControls(t = this.options) {
        this.isVisible ? this.removeControls() : this.addControls(t);
      },
      _addButton(t, e) {
        return (
          (this.buttons[t] = e),
          (this.options[t] = this.options[t] || !1),
          this.buttons[t]
        );
      },
      triggerClickOnToggledButtons(t) {
        for (let e in this.buttons) {
          let r = this.buttons[e];
          r._button.disableByOtherButtons &&
            r !== t &&
            r.toggled() &&
            r._triggerClick();
        }
      },
      toggleButton(t, e, r = !0) {
        return (
          t === 'editPolygon' && (t = 'editMode'),
          t === 'deleteLayer' && (t = 'removalMode'),
          r && this.triggerClickOnToggledButtons(this.buttons[t]),
          this.buttons[t] ? this.buttons[t].toggle(e) : !1
        );
      },
      _defineButtons() {
        let t = {
            className: 'control-icon leaflet-pm-icon-marker',
            title: N('buttonTitles.drawMarkerButton'),
            jsClass: 'Marker',
            onClick: () => {},
            afterClick: (E, M) => {
              this.map.pm.Draw[M.button._button.jsClass].toggle();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            actions: ['cancel'],
          },
          e = {
            title: N('buttonTitles.drawPolyButton'),
            className: 'control-icon leaflet-pm-icon-polygon',
            jsClass: 'Polygon',
            onClick: () => {},
            afterClick: (E, M) => {
              this.map.pm.Draw[M.button._button.jsClass].toggle();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            actions: ['finish', 'removeLastVertex', 'cancel'],
          },
          r = {
            className: 'control-icon leaflet-pm-icon-polyline',
            title: N('buttonTitles.drawLineButton'),
            jsClass: 'Line',
            onClick: () => {},
            afterClick: (E, M) => {
              this.map.pm.Draw[M.button._button.jsClass].toggle();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            actions: ['finish', 'removeLastVertex', 'cancel'],
          },
          i = {
            title: N('buttonTitles.drawCircleButton'),
            className: 'control-icon leaflet-pm-icon-circle',
            jsClass: 'Circle',
            onClick: () => {},
            afterClick: (E, M) => {
              this.map.pm.Draw[M.button._button.jsClass].toggle();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            actions: ['cancel'],
          },
          n = {
            title: N('buttonTitles.drawCircleMarkerButton'),
            className: 'control-icon leaflet-pm-icon-circle-marker',
            jsClass: 'CircleMarker',
            onClick: () => {},
            afterClick: (E, M) => {
              this.map.pm.Draw[M.button._button.jsClass].toggle();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            actions: ['cancel'],
          },
          a = {
            title: N('buttonTitles.drawRectButton'),
            className: 'control-icon leaflet-pm-icon-rectangle',
            jsClass: 'Rectangle',
            onClick: () => {},
            afterClick: (E, M) => {
              this.map.pm.Draw[M.button._button.jsClass].toggle();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            actions: ['cancel'],
          },
          o = {
            title: N('buttonTitles.editButton'),
            className: 'control-icon leaflet-pm-icon-edit',
            onClick: () => {},
            afterClick: () => {
              this.map.pm.toggleGlobalEditMode();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            tool: 'edit',
            actions: ['finishMode'],
          },
          u = {
            title: N('buttonTitles.dragButton'),
            className: 'control-icon leaflet-pm-icon-drag',
            onClick: () => {},
            afterClick: () => {
              this.map.pm.toggleGlobalDragMode();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            tool: 'edit',
            actions: ['finishMode'],
          },
          c = {
            title: N('buttonTitles.cutButton'),
            className: 'control-icon leaflet-pm-icon-cut',
            jsClass: 'Cut',
            onClick: () => {},
            afterClick: (E, M) => {
              this.map.pm.Draw[M.button._button.jsClass].toggle({
                snappable: !0,
                cursorMarker: !0,
                allowSelfIntersection: !1,
              });
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            tool: 'edit',
            actions: ['finish', 'removeLastVertex', 'cancel'],
          },
          f = {
            title: N('buttonTitles.deleteButton'),
            className: 'control-icon leaflet-pm-icon-delete',
            onClick: () => {},
            afterClick: () => {
              this.map.pm.toggleGlobalRemovalMode();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            tool: 'edit',
            actions: ['finishMode'],
          },
          v = {
            title: N('buttonTitles.rotateButton'),
            className: 'control-icon leaflet-pm-icon-rotate',
            onClick: () => {},
            afterClick: () => {
              this.map.pm.toggleGlobalRotateMode();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            tool: 'edit',
            actions: ['finishMode'],
          },
          b = {
            className: 'control-icon leaflet-pm-icon-text',
            title: N('buttonTitles.drawTextButton'),
            jsClass: 'Text',
            onClick: () => {},
            afterClick: (E, M) => {
              this.map.pm.Draw[M.button._button.jsClass].toggle();
            },
            doToggle: !0,
            toggleStatus: !1,
            disableOtherButtons: !0,
            position: this.options.position,
            actions: ['cancel'],
          };
        this._addButton('drawMarker', new L.Control.PMButton(t)),
          this._addButton('drawPolyline', new L.Control.PMButton(r)),
          this._addButton('drawRectangle', new L.Control.PMButton(a)),
          this._addButton('drawPolygon', new L.Control.PMButton(e)),
          this._addButton('drawCircle', new L.Control.PMButton(i)),
          this._addButton('drawCircleMarker', new L.Control.PMButton(n)),
          this._addButton('drawText', new L.Control.PMButton(b)),
          this._addButton('editMode', new L.Control.PMButton(o)),
          this._addButton('dragMode', new L.Control.PMButton(u)),
          this._addButton('cutPolygon', new L.Control.PMButton(c)),
          this._addButton('removalMode', new L.Control.PMButton(f)),
          this._addButton('rotateMode', new L.Control.PMButton(v));
      },
      _showHideButtons() {
        if (!this.isVisible) return;
        this.removeControls(), (this.isVisible = !0);
        let t = this.getButtons(),
          e = [];
        this.options.drawControls === !1 &&
          (e = e.concat(Object.keys(t).filter((r) => !t[r]._button.tool))),
          this.options.editControls === !1 &&
            (e = e.concat(
              Object.keys(t).filter((r) => t[r]._button.tool === 'edit')
            )),
          this.options.optionsControls === !1 &&
            (e = e.concat(
              Object.keys(t).filter((r) => t[r]._button.tool === 'options')
            )),
          this.options.customControls === !1 &&
            (e = e.concat(
              Object.keys(t).filter((r) => t[r]._button.tool === 'custom')
            ));
        for (let r in t)
          if (this.options[r] && e.indexOf(r) === -1) {
            let i = t[r]._button.tool;
            i || (i = 'draw'),
              t[r].setPosition(this._getBtnPosition(i)),
              t[r].addTo(this.map);
          }
      },
      _getBtnPosition(t) {
        return this.options.positions && this.options.positions[t]
          ? this.options.positions[t]
          : this.options.position;
      },
      setBlockPosition(t, e) {
        (this.options.positions[t] = e),
          this._showHideButtons(),
          this.changeControlOrder();
      },
      getBlockPositions() {
        return this.options.positions;
      },
      copyDrawControl(t, e) {
        if (e) typeof e != 'object' && (e = { name: e });
        else throw new TypeError('Button has no name');
        let r = this._btnNameMapping(t);
        if (!e.name) throw new TypeError('Button has no name');
        if (this.buttons[e.name])
          throw new TypeError('Button with this name already exists');
        let i = this.map.pm.Draw.createNewDrawInstance(e.name, r);
        e = { ...this.buttons[r]._button, ...e };
        let a = this.createCustomControl(e);
        return { drawInstance: i, control: a };
      },
      createCustomControl(t) {
        if (!t.name) throw new TypeError('Button has no name');
        if (this.buttons[t.name])
          throw new TypeError('Button with this name already exists');
        t.onClick || (t.onClick = () => {}),
          t.afterClick || (t.afterClick = () => {}),
          t.toggle !== !1 && (t.toggle = !0),
          t.block && (t.block = t.block.toLowerCase()),
          (!t.block || t.block === 'draw') && (t.block = ''),
          t.className
            ? t.className.indexOf('control-icon') === -1 &&
              (t.className = `control-icon ${t.className}`)
            : (t.className = 'control-icon');
        let e = {
          tool: t.block,
          className: t.className,
          title: t.title || '',
          jsClass: t.name,
          onClick: t.onClick,
          afterClick: t.afterClick,
          doToggle: t.toggle,
          toggleStatus: !1,
          disableOtherButtons: t.disableOtherButtons ?? !0,
          disableByOtherButtons: t.disableByOtherButtons ?? !0,
          cssToggle: t.toggle,
          position: this.options.position,
          actions: t.actions || [],
          disabled: !!t.disabled,
        };
        this.options[t.name] !== !1 && (this.options[t.name] = !0);
        let r = this._addButton(t.name, new L.Control.PMButton(e));
        return this.changeControlOrder(), r;
      },
      controlExists(t) {
        return !!this.getButton(t);
      },
      getButton(t) {
        return this.getButtons()[t];
      },
      getButtonsInBlock(t) {
        let e = {};
        if (t)
          for (let r in this.getButtons()) {
            let i = this.getButtons()[r];
            (i._button.tool === t || (t === 'draw' && !i._button.tool)) &&
              (e[r] = i);
          }
        return e;
      },
      changeControlOrder(t = []) {
        let e = this._shapeMapping(),
          r = [];
        t.forEach((f) => {
          e[f] ? r.push(e[f]) : r.push(f);
        });
        let i = this.getButtons(),
          n = {};
        r.forEach((f) => {
          i[f] && (n[f] = i[f]);
        }),
          Object.keys(i)
            .filter((f) => !i[f]._button.tool)
            .forEach((f) => {
              r.indexOf(f) === -1 && (n[f] = i[f]);
            }),
          Object.keys(i)
            .filter((f) => i[f]._button.tool === 'edit')
            .forEach((f) => {
              r.indexOf(f) === -1 && (n[f] = i[f]);
            }),
          Object.keys(i)
            .filter((f) => i[f]._button.tool === 'options')
            .forEach((f) => {
              r.indexOf(f) === -1 && (n[f] = i[f]);
            }),
          Object.keys(i)
            .filter((f) => i[f]._button.tool === 'custom')
            .forEach((f) => {
              r.indexOf(f) === -1 && (n[f] = i[f]);
            }),
          Object.keys(i).forEach((f) => {
            r.indexOf(f) === -1 && (n[f] = i[f]);
          }),
          (this.map.pm.Toolbar.buttons = n),
          this._showHideButtons();
      },
      getControlOrder() {
        let t = this.getButtons(),
          e = [];
        for (let r in t) e.push(r);
        return e;
      },
      changeActionsOfControl(t, e) {
        let r = this._btnNameMapping(t);
        if (!r) throw new TypeError('No name passed');
        if (!e) throw new TypeError('No actions passed');
        if (!this.buttons[r])
          throw new TypeError('Button with this name not exists');
        (this.buttons[r]._button.actions = e), this.changeControlOrder();
      },
      setButtonDisabled(t, e) {
        let r = this._btnNameMapping(t);
        e ? this.buttons[r].disable() : this.buttons[r].enable();
      },
      _shapeMapping() {
        return {
          Marker: 'drawMarker',
          Circle: 'drawCircle',
          Polygon: 'drawPolygon',
          Rectangle: 'drawRectangle',
          Polyline: 'drawPolyline',
          Line: 'drawPolyline',
          CircleMarker: 'drawCircleMarker',
          Edit: 'editMode',
          Drag: 'dragMode',
          Cut: 'cutPolygon',
          Removal: 'removalMode',
          Rotate: 'rotateMode',
          Text: 'drawText',
        };
      },
      _btnNameMapping(t) {
        let e = this._shapeMapping();
        return e[t] ? e[t] : t;
      },
    }),
    Eo = Ug;
  var So = Lt(Te());
  var jg = {
      _initSnappableMarkers() {
        (this.options.snapDistance = this.options.snapDistance || 30),
          (this.options.snapSegment =
            this.options.snapSegment === void 0
              ? !0
              : this.options.snapSegment),
          this._assignEvents(this._markers),
          this._layer.off('pm:dragstart', this._unsnap, this),
          this._layer.on('pm:dragstart', this._unsnap, this);
      },
      _disableSnapping() {
        this._layer.off('pm:dragstart', this._unsnap, this);
      },
      _assignEvents(t) {
        t.forEach((e) => {
          if (Array.isArray(e)) {
            this._assignEvents(e);
            return;
          }
          e.off('drag', this._handleSnapping, this),
            e.on('drag', this._handleSnapping, this),
            e.off('dragend', this._cleanupSnapping, this),
            e.on('dragend', this._cleanupSnapping, this);
        });
      },
      _cleanupSnapping(t) {
        if (t) {
          let e = t.target;
          e._snapped = !1;
        }
        delete this._snapList,
          this.throttledList &&
            (this._map.off('layeradd', this.throttledList, this),
            (this.throttledList = void 0)),
          this._map.off('layerremove', this._handleSnapLayerRemoval, this),
          this.debugIndicatorLines &&
            this.debugIndicatorLines.forEach((e) => {
              e.remove();
            });
      },
      _handleThrottleSnapping() {
        this.throttledList && this._createSnapList();
      },
      _handleSnapping(t) {
        let e = t.target;
        if (
          ((e._snapped = !1),
          this.throttledList ||
            (this.throttledList = L.Util.throttle(
              this._handleThrottleSnapping,
              100,
              this
            )),
          t?.originalEvent?.altKey ||
            this._map?.pm?.Keyboard.isAltKeyPressed() ||
            (this._snapList === void 0 &&
              (this._createSnapList(),
              this._map.off('layeradd', this.throttledList, this),
              this._map.on('layeradd', this.throttledList, this)),
            this._snapList.length <= 0))
        )
          return !1;
        let r = this._calcClosestLayer(e.getLatLng(), this._snapList);
        if (Object.keys(r).length === 0) return !1;
        let i =
            r.layer instanceof L.Marker ||
            r.layer instanceof L.CircleMarker ||
            !this.options.snapSegment,
          n;
        i ? (n = r.latlng) : (n = this._checkPrioritiySnapping(r));
        let a = this.options.snapDistance,
          o = {
            marker: e,
            shape: this._shape,
            snapLatLng: n,
            segment: r.segment,
            layer: this._layer,
            workingLayer: this._layer,
            layerInteractedWith: r.layer,
            distance: r.distance,
          };
        if (
          (this._fireSnapDrag(o.marker, o),
          this._fireSnapDrag(this._layer, o),
          r.distance < a)
        ) {
          (e._orgLatLng = e.getLatLng()),
            e.setLatLng(n),
            (e._snapped = !0),
            (e._snapInfo = o);
          let u = () => {
              (this._snapLatLng = n),
                this._fireSnap(e, o),
                this._fireSnap(this._layer, o);
            },
            c = this._snapLatLng || {},
            f = n || {};
          (c.lat !== f.lat || c.lng !== f.lng) && u();
        } else
          this._snapLatLng &&
            (this._unsnap(o),
            (e._snapped = !1),
            (e._snapInfo = void 0),
            this._fireUnsnap(o.marker, o),
            this._fireUnsnap(this._layer, o));
        return !0;
      },
      _createSnapList() {
        let t = [],
          e = [],
          r = this._map;
        r.off('layerremove', this._handleSnapLayerRemoval, this),
          r.on('layerremove', this._handleSnapLayerRemoval, this),
          r.eachLayer((i) => {
            if (
              (i instanceof L.Polyline ||
                i instanceof L.Marker ||
                i instanceof L.CircleMarker ||
                i instanceof L.ImageOverlay) &&
              i.options.snapIgnore !== !0
            ) {
              if (
                i.options.snapIgnore === void 0 &&
                ((!L.PM.optIn && i.options.pmIgnore === !0) ||
                  (L.PM.optIn && i.options.pmIgnore !== !1))
              )
                return;
              (i instanceof L.Circle || i instanceof L.CircleMarker) &&
              i.pm &&
              i.pm._hiddenPolyCircle
                ? t.push(i.pm._hiddenPolyCircle)
                : i instanceof L.ImageOverlay &&
                  (i = L.rectangle(i.getBounds())),
                t.push(i);
              let n = L.polyline([], { color: 'red', pmIgnore: !0 });
              (n._pmTempLayer = !0),
                e.push(n),
                (i instanceof L.Circle || i instanceof L.CircleMarker) &&
                  e.push(n);
            }
          }),
          (t = t.filter((i) => this._layer !== i)),
          (t = t.filter((i) => i._latlng || (i._latlngs && Le(i._latlngs)))),
          (t = t.filter((i) => !i._pmTempLayer)),
          this._otherSnapLayers
            ? (this._otherSnapLayers.forEach(() => {
                let i = L.polyline([], { color: 'red', pmIgnore: !0 });
                (i._pmTempLayer = !0), e.push(i);
              }),
              (this._snapList = t.concat(this._otherSnapLayers)))
            : (this._snapList = t),
          (this.debugIndicatorLines = e);
      },
      _handleSnapLayerRemoval({ layer: t }) {
        if (!t._leaflet_id || !this._snapList) return;
        let e = this._snapList.findIndex(
          (r) => r._leaflet_id === t._leaflet_id
        );
        e > -1 && this._snapList.splice(e, 1);
      },
      _calcClosestLayer(t, e) {
        return this._calcClosestLayers(t, e, 1)[0];
      },
      _calcClosestLayers(t, e, r = 1) {
        let i = [],
          n = {};
        e.forEach((o, u) => {
          if (o._parentCopy && o._parentCopy === this._layer) return;
          let c = this._calcLayerDistances(t, o);
          if (
            ((c.distance = Math.floor(c.distance)), this.debugIndicatorLines)
          ) {
            if (!this.debugIndicatorLines[u]) {
              let f = L.polyline([], { color: 'red', pmIgnore: !0 });
              (f._pmTempLayer = !0), (this.debugIndicatorLines[u] = f);
            }
            this.debugIndicatorLines[u].setLatLngs([t, c.latlng]);
          }
          r === 1 && (n.distance === void 0 || c.distance - 5 <= n.distance)
            ? (c.distance + 5 < n.distance && (i = []),
              (n = c),
              (n.layer = o),
              i.push(n))
            : r !== 1 && ((n = {}), (n = c), (n.layer = o), i.push(n));
        }),
          r !== 1 && (i = i.sort((o, u) => o.distance - u.distance)),
          r === -1 && (r = i.length);
        let a = this._getClosestLayerByPriority(i, r);
        return L.Util.isArray(a) ? a : [a];
      },
      _calcLayerDistances(t, e) {
        let r = this._map,
          i = e instanceof L.Marker || e instanceof L.CircleMarker,
          n = e instanceof L.Polygon,
          a = t;
        if (i) {
          let o = e.getLatLng();
          return { latlng: { ...o }, distance: this._getDistance(r, o, a) };
        }
        return this._calcLatLngDistances(a, e.getLatLngs(), r, n);
      },
      _calcLatLngDistances(t, e, r, i = !1) {
        let n,
          a,
          o,
          u = (c) => {
            c.forEach((f, v) => {
              if (Array.isArray(f)) {
                u(f);
                return;
              }
              if (this.options.snapSegment) {
                let b = f,
                  E;
                i
                  ? (E = v + 1 === c.length ? 0 : v + 1)
                  : (E = v + 1 === c.length ? void 0 : v + 1);
                let M = c[E];
                if (M) {
                  let B = this._getDistanceToSegment(r, t, b, M);
                  (a === void 0 || B < a) && ((a = B), (o = [b, M]));
                }
              } else {
                let b = this._getDistance(r, t, f);
                (a === void 0 || b < a) && ((a = b), (n = f));
              }
            });
          };
        return (
          u(e),
          this.options.snapSegment
            ? {
                latlng: { ...this._getClosestPointOnSegment(r, t, o[0], o[1]) },
                segment: o,
                distance: a,
              }
            : { latlng: n, distance: a }
        );
      },
      _getClosestLayerByPriority(t, e = 1) {
        t = t.sort((o, u) => o._leaflet_id - u._leaflet_id);
        let r = [
            'Marker',
            'CircleMarker',
            'Circle',
            'Line',
            'Polygon',
            'Rectangle',
          ],
          i = this._map.pm.globalOptions.snappingOrder || [],
          n = 0,
          a = {};
        return (
          i.concat(r).forEach((o) => {
            a[o] || ((n += 1), (a[o] = n));
          }),
          t.sort(wo('instanceofShape', a)),
          e === 1 ? t[0] || {} : t.slice(0, e)
        );
      },
      _checkPrioritiySnapping(t) {
        let e = this._map,
          r = t.segment[0],
          i = t.segment[1],
          n = t.latlng,
          a = this._getDistance(e, r, n),
          o = this._getDistance(e, i, n),
          u = a < o ? r : i,
          c = a < o ? a : o;
        if (this.options.snapMiddle) {
          let b = L.PM.Utils.calcMiddleLatLng(e, r, i),
            E = this._getDistance(e, b, n);
          E < a && E < o && ((u = b), (c = E));
        }
        let f = this.options.snapDistance,
          v;
        return c < f ? (v = u) : (v = n), { ...v };
      },
      _unsnap() {
        delete this._snapLatLng;
      },
      _getClosestPointOnSegment(t, e, r, i) {
        let n = t.getMaxZoom();
        n === 1 / 0 && (n = t.getZoom());
        let a = t.project(e, n),
          o = t.project(r, n),
          u = t.project(i, n),
          c = L.LineUtil.closestPointOnSegment(a, o, u);
        return t.unproject(c, n);
      },
      _getDistanceToSegment(t, e, r, i) {
        let n = t.latLngToLayerPoint(e),
          a = t.latLngToLayerPoint(r),
          o = t.latLngToLayerPoint(i);
        return L.LineUtil.pointToSegmentDistance(n, a, o);
      },
      _getDistance(t, e, r) {
        return t.latLngToLayerPoint(e).distanceTo(t.latLngToLayerPoint(r));
      },
    },
    Ie = jg;
  var Kg = L.Class.extend({
      includes: [Ie, St],
      options: {
        snappable: !0,
        snapDistance: 20,
        snapMiddle: !1,
        allowSelfIntersection: !0,
        tooltips: !0,
        templineStyle: {},
        hintlineStyle: { color: '#3388ff', dashArray: '5,5' },
        pathOptions: null,
        cursorMarker: !0,
        finishOn: null,
        markerStyle: { draggable: !0, icon: L.icon() },
        hideMiddleMarkers: !1,
        minRadiusCircle: null,
        maxRadiusCircle: null,
        minRadiusCircleMarker: null,
        maxRadiusCircleMarker: null,
        resizeableCircleMarker: !1,
        resizableCircle: !0,
        markerEditable: !0,
        continueDrawing: !1,
        snapSegment: !0,
        requireSnapToFinish: !1,
        rectangleAngle: 0,
      },
      setOptions(t) {
        L.Util.setOptions(this, t), this.setStyle(this.options);
      },
      setStyle() {},
      getOptions() {
        return this.options;
      },
      initialize(t) {
        let e = new L.Icon.Default();
        (e.options.tooltipAnchor = [0, 0]),
          (this.options.markerStyle.icon = e),
          (this._map = t),
          (this.shapes = [
            'Marker',
            'CircleMarker',
            'Line',
            'Polygon',
            'Rectangle',
            'Circle',
            'Cut',
            'Text',
          ]),
          this.shapes.forEach((r) => {
            this[r] = new L.PM.Draw[r](this._map);
          }),
          this.Marker.setOptions({ continueDrawing: !0 }),
          this.CircleMarker.setOptions({ continueDrawing: !0 });
      },
      setPathOptions(t, e = !1) {
        e
          ? (this.options.pathOptions = (0, So.default)(
              this.options.pathOptions,
              t
            ))
          : (this.options.pathOptions = t);
      },
      getShapes() {
        return this.shapes;
      },
      getShape() {
        return this._shape;
      },
      enable(t, e) {
        if (!t)
          throw new Error(
            `Error: Please pass a shape as a parameter. Possible shapes are: ${this.getShapes().join(',')}`
          );
        this.disable(), this[t].enable(e);
      },
      disable() {
        this.shapes.forEach((t) => {
          this[t].disable();
        });
      },
      addControls() {
        this.shapes.forEach((t) => {
          this[t].addButton();
        });
      },
      getActiveShape() {
        let t;
        return (
          this.shapes.forEach((e) => {
            this[e]._enabled && (t = e);
          }),
          t
        );
      },
      _setGlobalDrawMode() {
        this._shape === 'Cut'
          ? this._fireGlobalCutModeToggled()
          : this._fireGlobalDrawModeToggled();
        let t = [];
        this._map.eachLayer((e) => {
          (e instanceof L.Polyline ||
            e instanceof L.Marker ||
            e instanceof L.Circle ||
            e instanceof L.CircleMarker ||
            e instanceof L.ImageOverlay) &&
            (e._pmTempLayer || t.push(e));
        }),
          this._enabled
            ? t.forEach((e) => {
                L.PM.Utils.disablePopup(e);
              })
            : t.forEach((e) => {
                L.PM.Utils.enablePopup(e);
              });
      },
      createNewDrawInstance(t, e) {
        let r = this._getShapeFromBtnName(e);
        if (this[t]) throw new TypeError('Draw Type already exists');
        if (!L.PM.Draw[r])
          throw new TypeError(`There is no class L.PM.Draw.${r}`);
        return (
          (this[t] = new L.PM.Draw[r](this._map)),
          (this[t].toolbarButtonName = t),
          (this[t]._shape = t),
          this.shapes.push(t),
          this[e] && this[t].setOptions(this[e].options),
          this[t].setOptions(this[t].options),
          this[t]
        );
      },
      _getShapeFromBtnName(t) {
        let e = {
          drawMarker: 'Marker',
          drawCircle: 'Circle',
          drawPolygon: 'Polygon',
          drawPolyline: 'Line',
          drawRectangle: 'Rectangle',
          drawCircleMarker: 'CircleMarker',
          editMode: 'Edit',
          dragMode: 'Drag',
          cutPolygon: 'Cut',
          removalMode: 'Removal',
          rotateMode: 'Rotate',
          drawText: 'Text',
        };
        return e[t] ? e[t] : this[t] ? this[t]._shape : t;
      },
      _finishLayer(t) {
        t.pm &&
          (t.pm.setOptions(this.options),
          (t.pm._shape = this._shape),
          (t.pm._map = this._map)),
          this._addDrawnLayerProp(t);
      },
      _addDrawnLayerProp(t) {
        t._drawnByGeoman = !0;
      },
      _setPane(t, e) {
        e === 'layerPane'
          ? (t.options.pane =
              (this._map.pm.globalOptions.panes &&
                this._map.pm.globalOptions.panes.layerPane) ||
              'overlayPane')
          : e === 'vertexPane'
            ? (t.options.pane =
                (this._map.pm.globalOptions.panes &&
                  this._map.pm.globalOptions.panes.vertexPane) ||
                'markerPane')
            : e === 'markerPane' &&
              (t.options.pane =
                (this._map.pm.globalOptions.panes &&
                  this._map.pm.globalOptions.panes.markerPane) ||
                'markerPane');
      },
      _isFirstLayer() {
        return (
          (this._map || this._layer._map).pm.getGeomanLayers().length === 0
        );
      },
    }),
    J = Kg;
  J.Marker = J.extend({
    initialize(t) {
      (this._map = t),
        (this._shape = 'Marker'),
        (this.toolbarButtonName = 'drawMarker');
    },
    enable(t) {
      L.Util.setOptions(this, t),
        (this._enabled = !0),
        this._map.getContainer().classList.add('geoman-draw-cursor'),
        this._map.on('click', this._createMarker, this),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
        (this._hintMarker = L.marker(
          this._map.getCenter(),
          this.options.markerStyle
        )),
        this._setPane(this._hintMarker, 'markerPane'),
        (this._hintMarker._pmTempLayer = !0),
        this._hintMarker.addTo(this._map),
        this.options.tooltips &&
          this._hintMarker
            .bindTooltip(N('tooltips.placeMarker'), {
              permanent: !0,
              offset: L.point(0, 10),
              direction: 'bottom',
              opacity: 0.8,
            })
            .openTooltip(),
        (this._layer = this._hintMarker),
        this._map.on('mousemove', this._syncHintMarker, this),
        this.options.markerEditable &&
          this._map.eachLayer((e) => {
            this.isRelevantMarker(e) && e.pm.enable();
          }),
        this._fireDrawStart(),
        this._setGlobalDrawMode();
    },
    disable() {
      this._enabled &&
        ((this._enabled = !1),
        this._map.getContainer().classList.remove('geoman-draw-cursor'),
        this._map.off('click', this._createMarker, this),
        this._hintMarker.remove(),
        this._map.off('mousemove', this._syncHintMarker, this),
        this._map.eachLayer((t) => {
          this.isRelevantMarker(t) && t.pm.disable();
        }),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
        this.options.snappable && this._cleanupSnapping(),
        this._fireDrawEnd(),
        this._setGlobalDrawMode());
    },
    enabled() {
      return this._enabled;
    },
    toggle(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    isRelevantMarker(t) {
      return (
        t instanceof L.Marker &&
        t.pm &&
        !t._pmTempLayer &&
        !t.pm._initTextMarker
      );
    },
    _syncHintMarker(t) {
      if ((this._hintMarker.setLatLng(t.latlng), this.options.snappable)) {
        let e = t;
        (e.target = this._hintMarker), this._handleSnapping(e);
      }
      this._fireChange(this._hintMarker.getLatLng(), 'Draw');
    },
    _createMarker(t) {
      if (
        !t.latlng ||
        (this.options.requireSnapToFinish &&
          !this._hintMarker._snapped &&
          !this._isFirstLayer())
      )
        return;
      this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
      let e = this._hintMarker.getLatLng(),
        r = new L.Marker(e, this.options.markerStyle);
      this._setPane(r, 'markerPane'),
        this._finishLayer(r),
        r.pm || (r.options.draggable = !1),
        r.addTo(this._map.pm._getContainingLayer()),
        r.pm && this.options.markerEditable
          ? r.pm.enable()
          : r.dragging && r.dragging.disable(),
        this._fireCreate(r),
        this._cleanupSnapping(),
        this.options.continueDrawing || this.disable();
    },
    setStyle() {
      this.options.markerStyle?.icon &&
        this._hintMarker?.setIcon(this.options.markerStyle.icon);
    },
  });
  var ot = 63710088e-1,
    Bo = {
      centimeters: ot * 100,
      centimetres: ot * 100,
      degrees: ot / 111325,
      feet: ot * 3.28084,
      inches: ot * 39.37,
      kilometers: ot / 1e3,
      kilometres: ot / 1e3,
      meters: ot,
      metres: ot,
      miles: ot / 1609.344,
      millimeters: ot * 1e3,
      millimetres: ot * 1e3,
      nauticalmiles: ot / 1852,
      radians: 1,
      yards: ot * 1.0936,
    },
    PL = {
      centimeters: 100,
      centimetres: 100,
      degrees: 1 / 111325,
      feet: 3.28084,
      inches: 39.37,
      kilometers: 1 / 1e3,
      kilometres: 1 / 1e3,
      meters: 1,
      metres: 1,
      miles: 1 / 1609.344,
      millimeters: 1e3,
      millimetres: 1e3,
      nauticalmiles: 1 / 1852,
      radians: 1 / ot,
      yards: 1.0936133,
    };
  function Rt(t, e, r) {
    r === void 0 && (r = {});
    var i = { type: 'Feature' };
    return (
      (r.id === 0 || r.id) && (i.id = r.id),
      r.bbox && (i.bbox = r.bbox),
      (i.properties = e || {}),
      (i.geometry = t),
      i
    );
  }
  function _t(t, e, r) {
    if ((r === void 0 && (r = {}), !t))
      throw new Error('coordinates is required');
    if (!Array.isArray(t)) throw new Error('coordinates must be an Array');
    if (t.length < 2)
      throw new Error('coordinates must be at least 2 numbers long');
    if (!fr(t[0]) || !fr(t[1]))
      throw new Error('coordinates must contain numbers');
    var i = { type: 'Point', coordinates: t };
    return Rt(i, e, r);
  }
  function wt(t, e, r) {
    if ((r === void 0 && (r = {}), t.length < 2))
      throw new Error('coordinates must be an array of two or more positions');
    var i = { type: 'LineString', coordinates: t };
    return Rt(i, e, r);
  }
  function yt(t, e) {
    e === void 0 && (e = {});
    var r = { type: 'FeatureCollection' };
    return (
      e.id && (r.id = e.id), e.bbox && (r.bbox = e.bbox), (r.features = t), r
    );
  }
  function Ro(t, e) {
    e === void 0 && (e = 'kilometers');
    var r = Bo[e];
    if (!r) throw new Error(e + ' units is invalid');
    return t * r;
  }
  function Do(t, e) {
    e === void 0 && (e = 'kilometers');
    var r = Bo[e];
    if (!r) throw new Error(e + ' units is invalid');
    return t / r;
  }
  function Me(t) {
    var e = t % (2 * Math.PI);
    return (e * 180) / Math.PI;
  }
  function ht(t) {
    var e = t % 360;
    return (e * Math.PI) / 180;
  }
  function fr(t) {
    return !isNaN(t) && t !== null && !Array.isArray(t);
  }
  function Nt(t) {
    var e,
      r,
      i = { type: 'FeatureCollection', features: [] };
    if (
      (t.type === 'Feature' ? (r = t.geometry) : (r = t),
      r.type === 'LineString')
    )
      e = [r.coordinates];
    else if (r.type === 'MultiLineString') e = r.coordinates;
    else if (r.type === 'MultiPolygon') e = [].concat.apply([], r.coordinates);
    else if (r.type === 'Polygon') e = r.coordinates;
    else
      throw new Error(
        'Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry'
      );
    return (
      e.forEach(function (n) {
        e.forEach(function (a) {
          for (var o = 0; o < n.length - 1; o++)
            for (var u = o; u < a.length - 1; u++)
              if (
                !(
                  n === a &&
                  (Math.abs(o - u) === 1 ||
                    (o === 0 &&
                      u === n.length - 2 &&
                      n[o][0] === n[n.length - 1][0] &&
                      n[o][1] === n[n.length - 1][1]))
                )
              ) {
                var c = Hg(
                  n[o][0],
                  n[o][1],
                  n[o + 1][0],
                  n[o + 1][1],
                  a[u][0],
                  a[u][1],
                  a[u + 1][0],
                  a[u + 1][1]
                );
                c && i.features.push(_t([c[0], c[1]]));
              }
        });
      }),
      i
    );
  }
  function Hg(t, e, r, i, n, a, o, u) {
    var c,
      f,
      v,
      b,
      E,
      M = { x: null, y: null, onLine1: !1, onLine2: !1 };
    return (
      (c = (u - a) * (r - t) - (o - n) * (i - e)),
      c === 0
        ? M.x !== null && M.y !== null
          ? M
          : !1
        : ((f = e - a),
          (v = t - n),
          (b = (o - n) * f - (u - a) * v),
          (E = (r - t) * f - (i - e) * v),
          (f = b / c),
          (v = E / c),
          (M.x = t + f * (r - t)),
          (M.y = e + f * (i - e)),
          f >= 0 && f <= 1 && (M.onLine1 = !0),
          v >= 0 && v <= 1 && (M.onLine2 = !0),
          M.onLine1 && M.onLine2 ? [M.x, M.y] : !1)
    );
  }
  J.Line = J.extend({
    initialize(t) {
      (this._map = t),
        (this._shape = 'Line'),
        (this.toolbarButtonName = 'drawPolyline'),
        (this._doesSelfIntersect = !1);
    },
    enable(t) {
      L.Util.setOptions(this, t),
        (this._enabled = !0),
        (this._markers = []),
        (this._layerGroup = new L.FeatureGroup()),
        (this._layerGroup._pmTempLayer = !0),
        this._layerGroup.addTo(this._map),
        (this._layer = L.polyline([], {
          ...this.options.templineStyle,
          pmIgnore: !1,
        })),
        this._setPane(this._layer, 'layerPane'),
        (this._layer._pmTempLayer = !0),
        this._layerGroup.addLayer(this._layer),
        (this._hintline = L.polyline([], this.options.hintlineStyle)),
        this._setPane(this._hintline, 'layerPane'),
        (this._hintline._pmTempLayer = !0),
        this._layerGroup.addLayer(this._hintline),
        (this._hintMarker = L.marker(this._map.getCenter(), {
          interactive: !1,
          zIndexOffset: 100,
          icon: L.divIcon({ className: 'marker-icon cursor-marker' }),
        })),
        this._setPane(this._hintMarker, 'vertexPane'),
        (this._hintMarker._pmTempLayer = !0),
        this._layerGroup.addLayer(this._hintMarker),
        this.options.cursorMarker &&
          L.DomUtil.addClass(this._hintMarker._icon, 'visible'),
        this.options.tooltips &&
          this._hintMarker
            .bindTooltip(N('tooltips.firstVertex'), {
              permanent: !0,
              offset: L.point(0, 10),
              direction: 'bottom',
              opacity: 0.8,
            })
            .openTooltip(),
        this._map.getContainer().classList.add('geoman-draw-cursor'),
        this._map.on('click', this._createVertex, this),
        this.options.finishOn &&
          this.options.finishOn !== 'snap' &&
          this._map.on(this.options.finishOn, this._finishShape, this),
        this.options.finishOn === 'dblclick' &&
          ((this.tempMapDoubleClickZoomState =
            this._map.doubleClickZoom._enabled),
          this.tempMapDoubleClickZoomState &&
            this._map.doubleClickZoom.disable()),
        this._map.on('mousemove', this._syncHintMarker, this),
        this._hintMarker.on('move', this._syncHintLine, this),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
        (this._otherSnapLayers = []),
        (this.isRed = !1),
        this._fireDrawStart(),
        this._setGlobalDrawMode();
    },
    disable() {
      this._enabled &&
        ((this._enabled = !1),
        this._map.getContainer().classList.remove('geoman-draw-cursor'),
        this._map.off('click', this._createVertex, this),
        this._map.off('mousemove', this._syncHintMarker, this),
        this.options.finishOn &&
          this.options.finishOn !== 'snap' &&
          this._map.off(this.options.finishOn, this._finishShape, this),
        this.tempMapDoubleClickZoomState && this._map.doubleClickZoom.enable(),
        this._map.removeLayer(this._layerGroup),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
        this.options.snappable && this._cleanupSnapping(),
        this._fireDrawEnd(),
        this._setGlobalDrawMode());
    },
    enabled() {
      return this._enabled;
    },
    toggle(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    _syncHintLine() {
      let t = this._layer.getLatLngs();
      if (t.length > 0) {
        let e = t[t.length - 1];
        this._hintline.setLatLngs([e, this._hintMarker.getLatLng()]);
      }
    },
    _syncHintMarker(t) {
      if ((this._hintMarker.setLatLng(t.latlng), this.options.snappable)) {
        let r = t;
        (r.target = this._hintMarker), this._handleSnapping(r);
      }
      this.options.allowSelfIntersection ||
        this._handleSelfIntersection(!0, this._hintMarker.getLatLng());
      let e = this._layer._defaultShape().slice();
      e.push(this._hintMarker.getLatLng()), this._change(e);
    },
    hasSelfIntersection() {
      return Nt(this._layer.toGeoJSON(15)).features.length > 0;
    },
    _handleSelfIntersection(t, e) {
      let r = L.polyline(this._layer.getLatLngs());
      t && (e || (e = this._hintMarker.getLatLng()), r.addLatLng(e));
      let i = Nt(r.toGeoJSON(15));
      (this._doesSelfIntersect = i.features.length > 0),
        this._doesSelfIntersect
          ? this.isRed ||
            ((this.isRed = !0),
            this._hintline.setStyle({ color: '#f00000ff' }),
            this._fireIntersect(i, this._map, 'Draw'))
          : this._hintline.isEmpty() ||
            ((this.isRed = !1),
            this._hintline.setStyle(this.options.hintlineStyle));
    },
    _createVertex(t) {
      if (
        !this.options.allowSelfIntersection &&
        (this._handleSelfIntersection(!0, t.latlng), this._doesSelfIntersect)
      )
        return;
      this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
      let e = this._hintMarker.getLatLng(),
        r = this._layer.getLatLngs(),
        i = r[r.length - 1];
      if (e.equals(r[0]) || (r.length > 0 && e.equals(i))) {
        this._finishShape();
        return;
      }
      (this._layer._latlngInfo = this._layer._latlngInfo || []),
        this._layer._latlngInfo.push({
          latlng: e,
          snapInfo: this._hintMarker._snapInfo,
        }),
        this._layer.addLatLng(e);
      let n = this._createMarker(e);
      this._setTooltipText(),
        this._setHintLineAfterNewVertex(e),
        this._fireVertexAdded(n, void 0, e, 'Draw'),
        this._change(this._layer.getLatLngs()),
        this.options.finishOn === 'snap' &&
          this._hintMarker._snapped &&
          this._finishShape(t);
    },
    _setHintLineAfterNewVertex(t) {
      this._hintline.setLatLngs([t, t]);
    },
    _removeLastVertex() {
      let t = this._markers;
      if (t.length <= 1) {
        this.disable();
        return;
      }
      let e = this._layer.getLatLngs(),
        r = t[t.length - 1],
        { indexPath: i } = L.PM.Utils.findDeepMarkerIndex(t, r);
      t.pop(), this._layerGroup.removeLayer(r);
      let n = t[t.length - 1],
        a = e.indexOf(n.getLatLng());
      (e = e.slice(0, a + 1)),
        this._layer.setLatLngs(e),
        this._layer._latlngInfo.pop(),
        this._syncHintLine(),
        this._setTooltipText(),
        this._fireVertexRemoved(r, i, 'Draw'),
        this._change(this._layer.getLatLngs());
    },
    _finishShape() {
      if (
        (!this.options.allowSelfIntersection &&
          (this._handleSelfIntersection(!1), this._doesSelfIntersect)) ||
        (this.options.requireSnapToFinish &&
          !this._hintMarker._snapped &&
          !this._isFirstLayer())
      )
        return;
      let t = this._layer.getLatLngs();
      if (t.length <= 1) return;
      let e = L.polyline(t, this.options.pathOptions);
      this._setPane(e, 'layerPane'),
        this._finishLayer(e),
        e.addTo(this._map.pm._getContainingLayer()),
        this._fireCreate(e),
        this.options.snappable && this._cleanupSnapping(),
        this.disable(),
        this.options.continueDrawing && this.enable();
    },
    _createMarker(t) {
      let e = new L.Marker(t, {
        draggable: !1,
        icon: L.divIcon({ className: 'marker-icon' }),
      });
      return (
        this._setPane(e, 'vertexPane'),
        (e._pmTempLayer = !0),
        this._layerGroup.addLayer(e),
        this._markers.push(e),
        e.on('click', this._finishShape, this),
        e
      );
    },
    _setTooltipText() {
      let { length: t } = this._layer.getLatLngs().flat(),
        e = '';
      t <= 1
        ? (e = N('tooltips.continueLine'))
        : (e = N('tooltips.finishLine')),
        this._hintMarker.setTooltipContent(e);
    },
    _change(t) {
      this._fireChange(t, 'Draw');
    },
    setStyle() {
      this._layer?.setStyle(this.options.templineStyle),
        this._hintline?.setStyle(this.options.hintlineStyle);
    },
  });
  J.Polygon = J.Line.extend({
    initialize(t) {
      (this._map = t),
        (this._shape = 'Polygon'),
        (this.toolbarButtonName = 'drawPolygon');
    },
    enable(t) {
      L.PM.Draw.Line.prototype.enable.call(this, t),
        (this._layer.pm._shape = 'Polygon');
    },
    _createMarker(t) {
      let e = new L.Marker(t, {
        draggable: !1,
        icon: L.divIcon({ className: 'marker-icon' }),
      });
      return (
        this._setPane(e, 'vertexPane'),
        (e._pmTempLayer = !0),
        this._layerGroup.addLayer(e),
        this._markers.push(e),
        this._layer.getLatLngs().flat().length === 1
          ? (e.on('click', this._finishShape, this),
            (this._tempSnapLayerIndex = this._otherSnapLayers.push(e) - 1),
            this.options.snappable && this._cleanupSnapping())
          : e.on('click', () => 1),
        e
      );
    },
    _setTooltipText() {
      let { length: t } = this._layer.getLatLngs().flat(),
        e = '';
      t <= 2
        ? (e = N('tooltips.continueLine'))
        : (e = N('tooltips.finishPoly')),
        this._hintMarker.setTooltipContent(e);
    },
    _finishShape() {
      if (
        (!this.options.allowSelfIntersection &&
          (this._handleSelfIntersection(!0, this._layer.getLatLngs()[0]),
          this._doesSelfIntersect)) ||
        (this.options.requireSnapToFinish &&
          !this._hintMarker._snapped &&
          !this._isFirstLayer())
      )
        return;
      let t = this._layer.getLatLngs();
      if (t.length <= 2) return;
      let e = L.polygon(t, this.options.pathOptions);
      this._setPane(e, 'layerPane'),
        this._finishLayer(e),
        e.addTo(this._map.pm._getContainingLayer()),
        this._fireCreate(e),
        this._cleanupSnapping(),
        this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1),
        delete this._tempSnapLayerIndex,
        this.disable(),
        this.options.continueDrawing && this.enable();
    },
  });
  J.Rectangle = J.extend({
    initialize(t) {
      (this._map = t),
        (this._shape = 'Rectangle'),
        (this.toolbarButtonName = 'drawRectangle');
    },
    enable(t) {
      if (
        (L.Util.setOptions(this, t),
        (this._enabled = !0),
        (this._layerGroup = new L.FeatureGroup()),
        (this._layerGroup._pmTempLayer = !0),
        this._layerGroup.addTo(this._map),
        (this._layer = L.rectangle(
          [
            [0, 0],
            [0, 0],
          ],
          this.options.pathOptions
        )),
        this._setPane(this._layer, 'layerPane'),
        (this._layer._pmTempLayer = !0),
        (this._startMarker = L.marker(this._map.getCenter(), {
          icon: L.divIcon({ className: 'marker-icon rect-start-marker' }),
          draggable: !1,
          zIndexOffset: -100,
          opacity: this.options.cursorMarker ? 1 : 0,
        })),
        this._setPane(this._startMarker, 'vertexPane'),
        (this._startMarker._pmTempLayer = !0),
        this._layerGroup.addLayer(this._startMarker),
        (this._hintMarker = L.marker(this._map.getCenter(), {
          zIndexOffset: 150,
          icon: L.divIcon({ className: 'marker-icon cursor-marker' }),
        })),
        this._setPane(this._hintMarker, 'vertexPane'),
        (this._hintMarker._pmTempLayer = !0),
        this._layerGroup.addLayer(this._hintMarker),
        this.options.cursorMarker &&
          L.DomUtil.addClass(this._hintMarker._icon, 'visible'),
        this.options.tooltips &&
          this._hintMarker
            .bindTooltip(N('tooltips.firstVertex'), {
              permanent: !0,
              offset: L.point(0, 10),
              direction: 'bottom',
              opacity: 0.8,
            })
            .openTooltip(),
        this.options.cursorMarker)
      ) {
        this._styleMarkers = [];
        for (let e = 0; e < 2; e += 1) {
          let r = L.marker(this._map.getCenter(), {
            icon: L.divIcon({ className: 'marker-icon rect-style-marker' }),
            draggable: !1,
            zIndexOffset: 100,
          });
          this._setPane(r, 'vertexPane'),
            (r._pmTempLayer = !0),
            this._layerGroup.addLayer(r),
            this._styleMarkers.push(r);
        }
      }
      this._map.getContainer().classList.add('geoman-draw-cursor'),
        this._map.on('click', this._placeStartingMarkers, this),
        this._map.on('mousemove', this._syncHintMarker, this),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
        (this._otherSnapLayers = []),
        this._fireDrawStart(),
        this._setGlobalDrawMode();
    },
    disable() {
      this._enabled &&
        ((this._enabled = !1),
        this._map.getContainer().classList.remove('geoman-draw-cursor'),
        this._map.off('click', this._finishShape, this),
        this._map.off('click', this._placeStartingMarkers, this),
        this._map.off('mousemove', this._syncHintMarker, this),
        this._map.removeLayer(this._layerGroup),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
        this.options.snappable && this._cleanupSnapping(),
        this._fireDrawEnd(),
        this._setGlobalDrawMode());
    },
    enabled() {
      return this._enabled;
    },
    toggle(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    _placeStartingMarkers(t) {
      this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
      let e = this._hintMarker.getLatLng();
      L.DomUtil.addClass(this._startMarker._icon, 'visible'),
        this._startMarker.setLatLng(e),
        this.options.cursorMarker &&
          this._styleMarkers &&
          this._styleMarkers.forEach((r) => {
            L.DomUtil.addClass(r._icon, 'visible'), r.setLatLng(e);
          }),
        this._map.off('click', this._placeStartingMarkers, this),
        this._map.on('click', this._finishShape, this),
        this._hintMarker.setTooltipContent(N('tooltips.finishRect')),
        this._setRectangleOrigin();
    },
    _setRectangleOrigin() {
      let t = this._startMarker.getLatLng();
      t &&
        (this._layerGroup.addLayer(this._layer),
        this._layer.setLatLngs([t, t]),
        this._hintMarker.on('move', this._syncRectangleSize, this));
    },
    _syncHintMarker(t) {
      if ((this._hintMarker.setLatLng(t.latlng), this.options.snappable)) {
        let r = t;
        (r.target = this._hintMarker), this._handleSnapping(r);
      }
      let e =
        this._layerGroup && this._layerGroup.hasLayer(this._layer)
          ? this._layer.getLatLngs()
          : [this._hintMarker.getLatLng()];
      this._fireChange(e, 'Draw');
    },
    _syncRectangleSize() {
      let t = cr(this._startMarker.getLatLng(), this._map),
        e = cr(this._hintMarker.getLatLng(), this._map),
        r = L.PM.Utils._getRotatedRectangle(
          t,
          e,
          this.options.rectangleAngle || 0,
          this._map
        );
      if (
        (this._layer.setLatLngs(r),
        this.options.cursorMarker && this._styleMarkers)
      ) {
        let i = [];
        r.forEach((n) => {
          !n.equals(t, 1e-8) && !n.equals(e, 1e-8) && i.push(n);
        }),
          i.forEach((n, a) => {
            try {
              this._styleMarkers[a].setLatLng(n);
            } catch {}
          });
      }
    },
    _findCorners() {
      let t = this._layer.getLatLngs()[0];
      return L.PM.Utils._getRotatedRectangle(
        t[0],
        t[2],
        this.options.rectangleAngle || 0,
        this._map
      );
    },
    _finishShape(t) {
      this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
      let e = this._hintMarker.getLatLng(),
        r = this._startMarker.getLatLng();
      if (
        (this.options.requireSnapToFinish &&
          !this._hintMarker._snapped &&
          !this._isFirstLayer()) ||
        r.equals(e)
      )
        return;
      let i = L.rectangle([r, e], this.options.pathOptions);
      if (this.options.rectangleAngle) {
        let n = L.PM.Utils._getRotatedRectangle(
          r,
          e,
          this.options.rectangleAngle || 0,
          this._map
        );
        i.setLatLngs(n),
          i.pm && i.pm._setAngle(this.options.rectangleAngle || 0);
      }
      this._setPane(i, 'layerPane'),
        this._finishLayer(i),
        i.addTo(this._map.pm._getContainingLayer()),
        this._fireCreate(i),
        this.disable(),
        this.options.continueDrawing && this.enable();
    },
    setStyle() {
      this._layer?.setStyle(this.options.pathOptions);
    },
  });
  J.CircleMarker = J.extend({
    initialize(t) {
      (this._map = t),
        (this._shape = 'CircleMarker'),
        (this.toolbarButtonName = 'drawCircleMarker'),
        (this._layerIsDragging = !1),
        (this._BaseCircleClass = L.CircleMarker),
        (this._minRadiusOption = 'minRadiusCircleMarker'),
        (this._maxRadiusOption = 'maxRadiusCircleMarker'),
        (this._editableOption = 'resizeableCircleMarker'),
        (this._defaultRadius = 10);
    },
    enable(t) {
      if (
        (L.Util.setOptions(this, t),
        this.options.editable &&
          ((this.options.resizeableCircleMarker = this.options.editable),
          delete this.options.editable),
        (this._enabled = !0),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
        this._map.getContainer().classList.add('geoman-draw-cursor'),
        this.options[this._editableOption])
      ) {
        let e = {};
        L.extend(e, this.options.templineStyle),
          (e.radius = 0),
          (this._layerGroup = new L.FeatureGroup()),
          (this._layerGroup._pmTempLayer = !0),
          this._layerGroup.addTo(this._map),
          (this._layer = new this._BaseCircleClass(this._map.getCenter(), e)),
          this._setPane(this._layer, 'layerPane'),
          (this._layer._pmTempLayer = !0),
          (this._centerMarker = L.marker(this._map.getCenter(), {
            icon: L.divIcon({ className: 'marker-icon' }),
            draggable: !1,
            zIndexOffset: 100,
          })),
          this._setPane(this._centerMarker, 'vertexPane'),
          (this._centerMarker._pmTempLayer = !0),
          (this._hintMarker = L.marker(this._map.getCenter(), {
            zIndexOffset: 110,
            icon: L.divIcon({ className: 'marker-icon cursor-marker' }),
          })),
          this._setPane(this._hintMarker, 'vertexPane'),
          (this._hintMarker._pmTempLayer = !0),
          this._layerGroup.addLayer(this._hintMarker),
          this.options.cursorMarker &&
            L.DomUtil.addClass(this._hintMarker._icon, 'visible'),
          this.options.tooltips &&
            this._hintMarker
              .bindTooltip(N('tooltips.startCircle'), {
                permanent: !0,
                offset: L.point(0, 10),
                direction: 'bottom',
                opacity: 0.8,
              })
              .openTooltip(),
          (this._hintline = L.polyline([], this.options.hintlineStyle)),
          this._setPane(this._hintline, 'layerPane'),
          (this._hintline._pmTempLayer = !0),
          this._layerGroup.addLayer(this._hintline),
          this._map.on('click', this._placeCenterMarker, this);
      } else
        this._map.on('click', this._createMarker, this),
          (this._hintMarker = new this._BaseCircleClass(this._map.getCenter(), {
            radius: this._defaultRadius,
            ...this.options.templineStyle,
          })),
          this._setPane(this._hintMarker, 'layerPane'),
          (this._hintMarker._pmTempLayer = !0),
          this._hintMarker.addTo(this._map),
          (this._layer = this._hintMarker),
          this.options.tooltips &&
            this._hintMarker
              .bindTooltip(N('tooltips.placeCircleMarker'), {
                permanent: !0,
                offset: L.point(0, 10),
                direction: 'bottom',
                opacity: 0.8,
              })
              .openTooltip();
      this._map.on('mousemove', this._syncHintMarker, this),
        this._extendingEnable(),
        (this._otherSnapLayers = []),
        this._fireDrawStart(),
        this._setGlobalDrawMode();
    },
    _extendingEnable() {
      !this.options[this._editableOption] &&
        this.options.markerEditable &&
        this._map.eachLayer((t) => {
          this.isRelevantMarker(t) && t.pm.enable();
        }),
        this._layer.bringToBack();
    },
    disable() {
      this._enabled &&
        ((this._enabled = !1),
        this._map.getContainer().classList.remove('geoman-draw-cursor'),
        this.options[this._editableOption]
          ? (this._map.off('click', this._finishShape, this),
            this._map.off('click', this._placeCenterMarker, this),
            this._map.removeLayer(this._layerGroup))
          : (this._map.off('click', this._createMarker, this),
            this._extendingDisable(),
            this._hintMarker.remove()),
        this._map.off('mousemove', this._syncHintMarker, this),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
        this.options.snappable && this._cleanupSnapping(),
        this._fireDrawEnd(),
        this._setGlobalDrawMode());
    },
    _extendingDisable() {
      this._map.eachLayer((t) => {
        this.isRelevantMarker(t) && t.pm.disable();
      });
    },
    enabled() {
      return this._enabled;
    },
    toggle(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    _placeCenterMarker(t) {
      this._layerGroup.addLayer(this._layer),
        this._layerGroup.addLayer(this._centerMarker),
        this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
      let e = this._hintMarker.getLatLng();
      this._layerGroup.addLayer(this._layer),
        this._centerMarker.setLatLng(e),
        this._map.off('click', this._placeCenterMarker, this),
        this._map.on('click', this._finishShape, this),
        this._placeCircleCenter();
    },
    _placeCircleCenter() {
      let t = this._centerMarker.getLatLng();
      t &&
        (this._layer.setLatLng(t),
        this._hintMarker.on('move', this._syncHintLine, this),
        this._hintMarker.on('move', this._syncCircleRadius, this),
        this._hintMarker.setTooltipContent(N('tooltips.finishCircle')),
        this._fireCenterPlaced(),
        this._fireChange(this._layer.getLatLng(), 'Draw'));
    },
    _syncHintLine() {
      let t = this._centerMarker.getLatLng(),
        e = this._getNewDestinationOfHintMarker();
      this._hintline.setLatLngs([t, e]);
    },
    _syncCircleRadius() {
      let t = this._centerMarker.getLatLng(),
        e = this._hintMarker.getLatLng(),
        r = this._distanceCalculation(t, e);
      this.options[this._minRadiusOption] &&
      r < this.options[this._minRadiusOption]
        ? this._layer.setRadius(this.options[this._minRadiusOption])
        : this.options[this._maxRadiusOption] &&
            r > this.options[this._maxRadiusOption]
          ? this._layer.setRadius(this.options[this._maxRadiusOption])
          : this._layer.setRadius(r);
    },
    _syncHintMarker(t) {
      if (
        (this._hintMarker.setLatLng(t.latlng),
        this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker()),
        this.options.snappable)
      ) {
        let r = t;
        (r.target = this._hintMarker), this._handleSnapping(r);
      }
      this._handleHintMarkerSnapping();
      let e =
        this._layerGroup && this._layerGroup.hasLayer(this._centerMarker)
          ? this._centerMarker.getLatLng()
          : this._hintMarker.getLatLng();
      this._fireChange(e, 'Draw');
    },
    isRelevantMarker(t) {
      return (
        t instanceof L.CircleMarker &&
        !(t instanceof L.Circle) &&
        t.pm &&
        !t._pmTempLayer
      );
    },
    _createMarker(t) {
      if (
        (this.options.requireSnapToFinish &&
          !this._hintMarker._snapped &&
          !this._isFirstLayer()) ||
        !t.latlng ||
        this._layerIsDragging
      )
        return;
      this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
      let e = this._hintMarker.getLatLng(),
        r = new this._BaseCircleClass(e, {
          radius: this._defaultRadius,
          ...this.options.pathOptions,
        });
      this._setPane(r, 'layerPane'),
        this._finishLayer(r),
        r.addTo(this._map.pm._getContainingLayer()),
        this._extendingCreateMarker(r),
        this._fireCreate(r),
        this._cleanupSnapping(),
        this.options.continueDrawing || this.disable();
    },
    _extendingCreateMarker(t) {
      t.pm && this.options.markerEditable && t.pm.enable();
    },
    _finishShape(t) {
      if (
        this.options.requireSnapToFinish &&
        !this._hintMarker._snapped &&
        !this._isFirstLayer()
      )
        return;
      this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
      let e = this._centerMarker.getLatLng(),
        r = this._defaultRadius;
      if (this.options[this._editableOption]) {
        let a = this._hintMarker.getLatLng();
        (r = this._distanceCalculation(e, a)),
          this.options[this._minRadiusOption] &&
          r < this.options[this._minRadiusOption]
            ? (r = this.options[this._minRadiusOption])
            : this.options[this._maxRadiusOption] &&
              r > this.options[this._maxRadiusOption] &&
              (r = this.options[this._maxRadiusOption]);
      }
      let i = { ...this.options.pathOptions, radius: r },
        n = new this._BaseCircleClass(e, i);
      this._setPane(n, 'layerPane'),
        this._finishLayer(n),
        n.addTo(this._map.pm._getContainingLayer()),
        n.pm && n.pm._updateHiddenPolyCircle(),
        this._fireCreate(n),
        this.disable(),
        this.options.continueDrawing && this.enable();
    },
    _getNewDestinationOfHintMarker() {
      let t = this._hintMarker.getLatLng();
      if (this.options[this._editableOption]) {
        if (!this._layerGroup.hasLayer(this._centerMarker)) return t;
        let e = this._centerMarker.getLatLng(),
          r = this._distanceCalculation(e, t);
        this.options[this._minRadiusOption] &&
        r < this.options[this._minRadiusOption]
          ? (t = Wt(this._map, e, t, this._getMinDistanceInMeter()))
          : this.options[this._maxRadiusOption] &&
            r > this.options[this._maxRadiusOption] &&
            (t = Wt(this._map, e, t, this._getMaxDistanceInMeter()));
      }
      return t;
    },
    _getMinDistanceInMeter() {
      return L.PM.Utils.pxRadiusToMeterRadius(
        this.options[this._minRadiusOption],
        this._map,
        this._centerMarker.getLatLng()
      );
    },
    _getMaxDistanceInMeter() {
      return L.PM.Utils.pxRadiusToMeterRadius(
        this.options[this._maxRadiusOption],
        this._map,
        this._centerMarker.getLatLng()
      );
    },
    _handleHintMarkerSnapping() {
      if (this.options[this._editableOption]) {
        if (this._hintMarker._snapped) {
          let t = this._centerMarker.getLatLng(),
            e = this._hintMarker.getLatLng(),
            r = this._distanceCalculation(t, e);
          this._layerGroup.hasLayer(this._centerMarker) &&
            (this.options[this._minRadiusOption] &&
            r < this.options[this._minRadiusOption]
              ? this._hintMarker.setLatLng(this._hintMarker._orgLatLng)
              : this.options[this._maxRadiusOption] &&
                r > this.options[this._maxRadiusOption] &&
                this._hintMarker.setLatLng(this._hintMarker._orgLatLng));
        }
        this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker());
      }
    },
    setStyle() {
      let t = {};
      L.extend(t, this.options.templineStyle),
        this.options[this._editableOption] && (t.radius = 0),
        this._layer?.setStyle(t),
        this._hintline?.setStyle(this.options.hintlineStyle);
    },
    _distanceCalculation(t, e) {
      return this._map.project(t).distanceTo(this._map.project(e));
    },
  });
  J.Circle = J.CircleMarker.extend({
    initialize(t) {
      (this._map = t),
        (this._shape = 'Circle'),
        (this.toolbarButtonName = 'drawCircle'),
        (this._BaseCircleClass = L.Circle),
        (this._minRadiusOption = 'minRadiusCircle'),
        (this._maxRadiusOption = 'maxRadiusCircle'),
        (this._editableOption = 'resizableCircle'),
        (this._defaultRadius = 100);
    },
    _extendingEnable() {},
    _extendingDisable() {},
    _extendingCreateMarker() {},
    isRelevantMarker() {},
    _getMinDistanceInMeter() {
      return this.options[this._minRadiusOption];
    },
    _getMaxDistanceInMeter() {
      return this.options[this._maxRadiusOption];
    },
    _distanceCalculation(t, e) {
      return this._map.distance(t, e);
    },
  });
  function it(t) {
    if (!t) throw new Error('coord is required');
    if (!Array.isArray(t)) {
      if (
        t.type === 'Feature' &&
        t.geometry !== null &&
        t.geometry.type === 'Point'
      )
        return t.geometry.coordinates;
      if (t.type === 'Point') return t.coordinates;
    }
    if (
      Array.isArray(t) &&
      t.length >= 2 &&
      !Array.isArray(t[0]) &&
      !Array.isArray(t[1])
    )
      return t;
    throw new Error('coord must be GeoJSON Point or an Array of numbers');
  }
  function lt(t) {
    if (Array.isArray(t)) return t;
    if (t.type === 'Feature') {
      if (t.geometry !== null) return t.geometry.coordinates;
    } else if (t.coordinates) return t.coordinates;
    throw new Error(
      'coords must be GeoJSON Feature, Geometry Object or an Array'
    );
  }
  function Qt(t) {
    return t.type === 'Feature' ? t.geometry : t;
  }
  function dr(t, e) {
    return t.type === 'FeatureCollection'
      ? 'FeatureCollection'
      : t.type === 'GeometryCollection'
        ? 'GeometryCollection'
        : t.type === 'Feature' && t.geometry !== null
          ? t.geometry.type
          : t.type;
  }
  function xe(t, e, r) {
    if (t !== null)
      for (
        var i,
          n,
          a,
          o,
          u,
          c,
          f,
          v = 0,
          b = 0,
          E,
          M = t.type,
          B = M === 'FeatureCollection',
          I = M === 'Feature',
          g = B ? t.features.length : 1,
          _ = 0;
        _ < g;
        _++
      ) {
        (f = B ? t.features[_].geometry : I ? t.geometry : t),
          (E = f ? f.type === 'GeometryCollection' : !1),
          (u = E ? f.geometries.length : 1);
        for (var w = 0; w < u; w++) {
          var P = 0,
            S = 0;
          if (((o = E ? f.geometries[w] : f), o !== null)) {
            c = o.coordinates;
            var R = o.type;
            switch (
              ((v = r && (R === 'Polygon' || R === 'MultiPolygon') ? 1 : 0), R)
            ) {
              case null:
                break;
              case 'Point':
                if (e(c, b, _, P, S) === !1) return !1;
                b++, P++;
                break;
              case 'LineString':
              case 'MultiPoint':
                for (i = 0; i < c.length; i++) {
                  if (e(c[i], b, _, P, S) === !1) return !1;
                  b++, R === 'MultiPoint' && P++;
                }
                R === 'LineString' && P++;
                break;
              case 'Polygon':
              case 'MultiLineString':
                for (i = 0; i < c.length; i++) {
                  for (n = 0; n < c[i].length - v; n++) {
                    if (e(c[i][n], b, _, P, S) === !1) return !1;
                    b++;
                  }
                  R === 'MultiLineString' && P++, R === 'Polygon' && S++;
                }
                R === 'Polygon' && P++;
                break;
              case 'MultiPolygon':
                for (i = 0; i < c.length; i++) {
                  for (S = 0, n = 0; n < c[i].length; n++) {
                    for (a = 0; a < c[i][n].length - v; a++) {
                      if (e(c[i][n][a], b, _, P, S) === !1) return !1;
                      b++;
                    }
                    S++;
                  }
                  P++;
                }
                break;
              case 'GeometryCollection':
                for (i = 0; i < o.geometries.length; i++)
                  if (xe(o.geometries[i], e, r) === !1) return !1;
                break;
              default:
                throw new Error('Unknown Geometry Type');
            }
          }
        }
      }
  }
  function Ft(t, e) {
    if (t.type === 'Feature') e(t, 0);
    else if (t.type === 'FeatureCollection')
      for (var r = 0; r < t.features.length && e(t.features[r], r) !== !1; r++);
  }
  function To(t, e, r) {
    var i = r;
    return (
      Ft(t, function (n, a) {
        a === 0 && r === void 0 ? (i = n) : (i = e(i, n, a));
      }),
      i
    );
  }
  function Xg(t, e) {
    var r,
      i,
      n,
      a,
      o,
      u,
      c,
      f,
      v,
      b,
      E = 0,
      M = t.type === 'FeatureCollection',
      B = t.type === 'Feature',
      I = M ? t.features.length : 1;
    for (r = 0; r < I; r++) {
      for (
        u = M ? t.features[r].geometry : B ? t.geometry : t,
          f = M ? t.features[r].properties : B ? t.properties : {},
          v = M ? t.features[r].bbox : B ? t.bbox : void 0,
          b = M ? t.features[r].id : B ? t.id : void 0,
          c = u ? u.type === 'GeometryCollection' : !1,
          o = c ? u.geometries.length : 1,
          n = 0;
        n < o;
        n++
      ) {
        if (((a = c ? u.geometries[n] : u), a === null)) {
          if (e(null, E, f, v, b) === !1) return !1;
          continue;
        }
        switch (a.type) {
          case 'Point':
          case 'LineString':
          case 'MultiPoint':
          case 'Polygon':
          case 'MultiLineString':
          case 'MultiPolygon': {
            if (e(a, E, f, v, b) === !1) return !1;
            break;
          }
          case 'GeometryCollection': {
            for (i = 0; i < a.geometries.length; i++)
              if (e(a.geometries[i], E, f, v, b) === !1) return !1;
            break;
          }
          default:
            throw new Error('Unknown Geometry Type');
        }
      }
      E++;
    }
  }
  function te(t, e) {
    Xg(t, function (r, i, n, a, o) {
      var u = r === null ? null : r.type;
      switch (u) {
        case null:
        case 'Point':
        case 'LineString':
        case 'Polygon':
          return e(Rt(r, n, { bbox: a, id: o }), i, 0) === !1 ? !1 : void 0;
      }
      var c;
      switch (u) {
        case 'MultiPoint':
          c = 'Point';
          break;
        case 'MultiLineString':
          c = 'LineString';
          break;
        case 'MultiPolygon':
          c = 'Polygon';
          break;
      }
      for (var f = 0; f < r.coordinates.length; f++) {
        var v = r.coordinates[f],
          b = { type: c, coordinates: v };
        if (e(Rt(b, n), i, f) === !1) return !1;
      }
    });
  }
  function Yg(t) {
    if (!t) throw new Error('geojson is required');
    var e = [];
    return (
      te(t, function (r) {
        Jg(r, e);
      }),
      yt(e)
    );
  }
  function Jg(t, e) {
    var r = [],
      i = t.geometry;
    if (i !== null) {
      switch (i.type) {
        case 'Polygon':
          r = lt(i);
          break;
        case 'LineString':
          r = [lt(i)];
      }
      r.forEach(function (n) {
        var a = Zg(n, t.properties);
        a.forEach(function (o) {
          (o.id = e.length), e.push(o);
        });
      });
    }
  }
  function Zg(t, e) {
    var r = [];
    return (
      t.reduce(function (i, n) {
        var a = wt([i, n], e);
        return (a.bbox = $g(i, n)), r.push(a), n;
      }),
      r
    );
  }
  function $g(t, e) {
    var r = t[0],
      i = t[1],
      n = e[0],
      a = e[1],
      o = r < n ? r : n,
      u = i < a ? i : a,
      c = r > n ? r : n,
      f = i > a ? i : a;
    return [o, u, c, f];
  }
  var we = Yg;
  var Zo = Lt(Pr(), 1);
  function xm(t, e) {
    var r = {},
      i = [];
    if (
      (t.type === 'LineString' && (t = Rt(t)),
      e.type === 'LineString' && (e = Rt(e)),
      t.type === 'Feature' &&
        e.type === 'Feature' &&
        t.geometry !== null &&
        e.geometry !== null &&
        t.geometry.type === 'LineString' &&
        e.geometry.type === 'LineString' &&
        t.geometry.coordinates.length === 2 &&
        e.geometry.coordinates.length === 2)
    ) {
      var n = Jo(t, e);
      return n && i.push(n), yt(i);
    }
    var a = (0, Zo.default)();
    return (
      a.load(we(e)),
      Ft(we(t), function (o) {
        Ft(a.search(o), function (u) {
          var c = Jo(o, u);
          if (c) {
            var f = lt(c).join(',');
            r[f] || ((r[f] = !0), i.push(c));
          }
        });
      }),
      yt(i)
    );
  }
  function Jo(t, e) {
    var r = lt(t),
      i = lt(e);
    if (r.length !== 2)
      throw new Error('<intersects> line1 must only contain 2 coordinates');
    if (i.length !== 2)
      throw new Error('<intersects> line2 must only contain 2 coordinates');
    var n = r[0][0],
      a = r[0][1],
      o = r[1][0],
      u = r[1][1],
      c = i[0][0],
      f = i[0][1],
      v = i[1][0],
      b = i[1][1],
      E = (b - f) * (o - n) - (v - c) * (u - a),
      M = (v - c) * (a - f) - (b - f) * (n - c),
      B = (o - n) * (a - f) - (u - a) * (n - c);
    if (E === 0) return null;
    var I = M / E,
      g = B / E;
    if (I >= 0 && I <= 1 && g >= 0 && g <= 1) {
      var _ = n + I * (o - n),
        w = a + I * (u - a);
      return _t([_, w]);
    }
    return null;
  }
  var pt = xm;
  var Rr = Lt(Pr(), 1);
  function wm(t, e, r) {
    r === void 0 && (r = {});
    var i = it(t),
      n = it(e),
      a = ht(n[1] - i[1]),
      o = ht(n[0] - i[0]),
      u = ht(i[1]),
      c = ht(n[1]),
      f =
        Math.pow(Math.sin(a / 2), 2) +
        Math.pow(Math.sin(o / 2), 2) * Math.cos(u) * Math.cos(c);
    return Ro(2 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f)), r.units);
  }
  var Ct = wm;
  function Cm(t) {
    var e = t[0],
      r = t[1],
      i = t[2],
      n = t[3],
      a = Ct(t.slice(0, 2), [i, r]),
      o = Ct(t.slice(0, 2), [e, n]);
    if (a >= o) {
      var u = (r + n) / 2;
      return [e, u - (i - e) / 2, i, u + (i - e) / 2];
    } else {
      var c = (e + i) / 2;
      return [c - (n - r) / 2, r, c + (n - r) / 2, n];
    }
  }
  var $o = Cm;
  function Er(t) {
    var e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return (
      xe(t, function (r) {
        e[0] > r[0] && (e[0] = r[0]),
          e[1] > r[1] && (e[1] = r[1]),
          e[2] < r[0] && (e[2] = r[0]),
          e[3] < r[1] && (e[3] = r[1]);
      }),
      e
    );
  }
  Er.default = Er;
  var Vt = Er;
  function Pm(t, e) {
    e === void 0 && (e = {});
    var r = e.precision,
      i = e.coordinates,
      n = e.mutate;
    if (
      ((r = r == null || isNaN(r) ? 6 : r),
      (i = i == null || isNaN(i) ? 3 : i),
      !t)
    )
      throw new Error('<geojson> is required');
    if (typeof r != 'number') throw new Error('<precision> must be a number');
    if (typeof i != 'number') throw new Error('<coordinates> must be a number');
    (n === !1 || n === void 0) && (t = JSON.parse(JSON.stringify(t)));
    var a = Math.pow(10, r);
    return (
      xe(t, function (o) {
        Em(o, a, i);
      }),
      t
    );
  }
  function Em(t, e, r) {
    t.length > r && t.splice(r, t.length);
    for (var i = 0; i < t.length; i++) t[i] = Math.round(t[i] * e) / e;
    return t;
  }
  var Wo = Pm;
  function ze(t, e, r) {
    if ((r === void 0 && (r = {}), r.final === !0)) return Sm(t, e);
    var i = it(t),
      n = it(e),
      a = ht(i[0]),
      o = ht(n[0]),
      u = ht(i[1]),
      c = ht(n[1]),
      f = Math.sin(o - a) * Math.cos(c),
      v =
        Math.cos(u) * Math.sin(c) - Math.sin(u) * Math.cos(c) * Math.cos(o - a);
    return Me(Math.atan2(f, v));
  }
  function Sm(t, e) {
    var r = ze(e, t);
    return (r = (r + 180) % 360), r;
  }
  function Ne(t, e, r, i) {
    i === void 0 && (i = {});
    var n = it(t),
      a = ht(n[0]),
      o = ht(n[1]),
      u = ht(r),
      c = Do(e, i.units),
      f = Math.asin(
        Math.sin(o) * Math.cos(c) + Math.cos(o) * Math.sin(c) * Math.cos(u)
      ),
      v =
        a +
        Math.atan2(
          Math.sin(u) * Math.sin(c) * Math.cos(o),
          Math.cos(c) - Math.sin(o) * Math.sin(f)
        ),
      b = Me(v),
      E = Me(f);
    return _t([b, E], i.properties);
  }
  function Bm(t, e, r) {
    r === void 0 && (r = {});
    var i = _t([1 / 0, 1 / 0], { dist: 1 / 0 }),
      n = 0;
    return (
      te(t, function (a) {
        for (var o = lt(a), u = 0; u < o.length - 1; u++) {
          var c = _t(o[u]);
          c.properties.dist = Ct(e, c, r);
          var f = _t(o[u + 1]);
          f.properties.dist = Ct(e, f, r);
          var v = Ct(c, f, r),
            b = Math.max(c.properties.dist, f.properties.dist),
            E = ze(c, f),
            M = Ne(e, b, E + 90, r),
            B = Ne(e, b, E - 90, r),
            I = pt(
              wt([M.geometry.coordinates, B.geometry.coordinates]),
              wt([c.geometry.coordinates, f.geometry.coordinates])
            ),
            g = null;
          I.features.length > 0 &&
            ((g = I.features[0]),
            (g.properties.dist = Ct(e, g, r)),
            (g.properties.location = n + Ct(c, g, r))),
            c.properties.dist < i.properties.dist &&
              ((i = c), (i.properties.index = u), (i.properties.location = n)),
            f.properties.dist < i.properties.dist &&
              ((i = f),
              (i.properties.index = u + 1),
              (i.properties.location = n + v)),
            g &&
              g.properties.dist < i.properties.dist &&
              ((i = g), (i.properties.index = u)),
            (n += v);
        }
      }),
      i
    );
  }
  var Qo = Bm;
  function Rm(t, e) {
    if (!t) throw new Error('line is required');
    if (!e) throw new Error('splitter is required');
    var r = dr(t),
      i = dr(e);
    if (r !== 'LineString') throw new Error('line must be LineString');
    if (i === 'FeatureCollection')
      throw new Error('splitter cannot be a FeatureCollection');
    if (i === 'GeometryCollection')
      throw new Error('splitter cannot be a GeometryCollection');
    var n = Wo(e, { precision: 7 });
    switch (i) {
      case 'Point':
        return Br(t, n);
      case 'MultiPoint':
        return tl(t, n);
      case 'LineString':
      case 'MultiLineString':
      case 'Polygon':
      case 'MultiPolygon':
        return tl(t, pt(t, n));
    }
  }
  function tl(t, e) {
    var r = [],
      i = (0, Rr.default)();
    return (
      te(e, function (n) {
        if (
          (r.forEach(function (u, c) {
            u.id = c;
          }),
          !r.length)
        )
          (r = Br(t, n).features),
            r.forEach(function (u) {
              u.bbox || (u.bbox = $o(Vt(u)));
            }),
            i.load(yt(r));
        else {
          var a = i.search(n);
          if (a.features.length) {
            var o = el(n, a);
            (r = r.filter(function (u) {
              return u.id !== o.id;
            })),
              i.remove(o),
              Ft(Br(o, n), function (u) {
                r.push(u), i.insert(u);
              });
          }
        }
      }),
      yt(r)
    );
  }
  function Br(t, e) {
    var r = [],
      i = lt(t)[0],
      n = lt(t)[t.geometry.coordinates.length - 1];
    if (Sr(i, it(e)) || Sr(n, it(e))) return yt([t]);
    var a = (0, Rr.default)(),
      o = we(t);
    a.load(o);
    var u = a.search(e);
    if (!u.features.length) return yt([t]);
    var c = el(e, u),
      f = [i],
      v = To(
        o,
        function (b, E, M) {
          var B = lt(E)[1],
            I = it(e);
          return M === c.id
            ? (b.push(I), r.push(wt(b)), Sr(I, B) ? [I] : [I, B])
            : (b.push(B), b);
        },
        f
      );
    return v.length > 1 && r.push(wt(v)), yt(r);
  }
  function el(t, e) {
    if (!e.features.length) throw new Error('lines must contain features');
    if (e.features.length === 1) return e.features[0];
    var r,
      i = 1 / 0;
    return (
      Ft(e, function (n) {
        var a = Qo(n, t),
          o = a.properties.dist;
        o < i && ((r = n), (i = o));
      }),
      r
    );
  }
  function Sr(t, e) {
    return t[0] === e[0] && t[1] === e[1];
  }
  var rl = Rm;
  function re(t, e, r) {
    if ((r === void 0 && (r = {}), !t)) throw new Error('point is required');
    if (!e) throw new Error('polygon is required');
    var i = it(t),
      n = Qt(e),
      a = n.type,
      o = e.bbox,
      u = n.coordinates;
    if (o && Dm(i, o) === !1) return !1;
    a === 'Polygon' && (u = [u]);
    for (var c = !1, f = 0; f < u.length && !c; f++)
      if (il(i, u[f][0], r.ignoreBoundary)) {
        for (var v = !1, b = 1; b < u[f].length && !v; )
          il(i, u[f][b], !r.ignoreBoundary) && (v = !0), b++;
        v || (c = !0);
      }
    return c;
  }
  function il(t, e, r) {
    var i = !1;
    e[0][0] === e[e.length - 1][0] &&
      e[0][1] === e[e.length - 1][1] &&
      (e = e.slice(0, e.length - 1));
    for (var n = 0, a = e.length - 1; n < e.length; a = n++) {
      var o = e[n][0],
        u = e[n][1],
        c = e[a][0],
        f = e[a][1],
        v =
          t[1] * (o - c) + u * (c - t[0]) + f * (t[0] - o) === 0 &&
          (o - t[0]) * (c - t[0]) <= 0 &&
          (u - t[1]) * (f - t[1]) <= 0;
      if (v) return !r;
      var b =
        u > t[1] != f > t[1] && t[0] < ((c - o) * (t[1] - u)) / (f - u) + o;
      b && (i = !i);
    }
    return i;
  }
  function Dm(t, e) {
    return e[0] <= t[0] && e[1] <= t[1] && e[2] >= t[0] && e[3] >= t[1];
  }
  function Tm(t, e, r) {
    r === void 0 && (r = {});
    for (var i = it(t), n = lt(e), a = 0; a < n.length - 1; a++) {
      var o = !1;
      if (
        (r.ignoreEndVertices &&
          (a === 0 && (o = 'start'),
          a === n.length - 2 && (o = 'end'),
          a === 0 && a + 1 === n.length - 1 && (o = 'both')),
        Om(n[a], n[a + 1], i, o, typeof r.epsilon > 'u' ? null : r.epsilon))
      )
        return !0;
    }
    return !1;
  }
  function Om(t, e, r, i, n) {
    var a = r[0],
      o = r[1],
      u = t[0],
      c = t[1],
      f = e[0],
      v = e[1],
      b = r[0] - u,
      E = r[1] - c,
      M = f - u,
      B = v - c,
      I = b * B - E * M;
    if (n !== null) {
      if (Math.abs(I) > n) return !1;
    } else if (I !== 0) return !1;
    if (i) {
      if (i === 'start')
        return Math.abs(M) >= Math.abs(B)
          ? M > 0
            ? u < a && a <= f
            : f <= a && a < u
          : B > 0
            ? c < o && o <= v
            : v <= o && o < c;
      if (i === 'end')
        return Math.abs(M) >= Math.abs(B)
          ? M > 0
            ? u <= a && a < f
            : f < a && a <= u
          : B > 0
            ? c <= o && o < v
            : v < o && o <= c;
      if (i === 'both')
        return Math.abs(M) >= Math.abs(B)
          ? M > 0
            ? u < a && a < f
            : f < a && a < u
          : B > 0
            ? c < o && o < v
            : v < o && o < c;
    } else
      return Math.abs(M) >= Math.abs(B)
        ? M > 0
          ? u <= a && a <= f
          : f <= a && a <= u
        : B > 0
          ? c <= o && o <= v
          : v <= o && o <= c;
    return !1;
  }
  var ie = Tm;
  function Dr(t, e) {
    var r = Qt(t),
      i = Qt(e),
      n = r.type,
      a = i.type,
      o = r.coordinates,
      u = i.coordinates;
    switch (n) {
      case 'Point':
        switch (a) {
          case 'Point':
            return Tr(o, u);
          default:
            throw new Error('feature2 ' + a + ' geometry not supported');
        }
      case 'MultiPoint':
        switch (a) {
          case 'Point':
            return Im(r, i);
          case 'MultiPoint':
            return Am(r, i);
          default:
            throw new Error('feature2 ' + a + ' geometry not supported');
        }
      case 'LineString':
        switch (a) {
          case 'Point':
            return ie(i, r, { ignoreEndVertices: !0 });
          case 'LineString':
            return zm(r, i);
          case 'MultiPoint':
            return Gm(r, i);
          default:
            throw new Error('feature2 ' + a + ' geometry not supported');
        }
      case 'Polygon':
        switch (a) {
          case 'Point':
            return re(i, r, { ignoreBoundary: !0 });
          case 'LineString':
            return Nm(r, i);
          case 'Polygon':
            return Fm(r, i);
          case 'MultiPoint':
            return qm(r, i);
          default:
            throw new Error('feature2 ' + a + ' geometry not supported');
        }
      default:
        throw new Error('feature1 ' + n + ' geometry not supported');
    }
  }
  function Im(t, e) {
    var r,
      i = !1;
    for (r = 0; r < t.coordinates.length; r++)
      if (Tr(t.coordinates[r], e.coordinates)) {
        i = !0;
        break;
      }
    return i;
  }
  function Am(t, e) {
    for (var r = 0, i = e.coordinates; r < i.length; r++) {
      for (var n = i[r], a = !1, o = 0, u = t.coordinates; o < u.length; o++) {
        var c = u[o];
        if (Tr(n, c)) {
          a = !0;
          break;
        }
      }
      if (!a) return !1;
    }
    return !0;
  }
  function Gm(t, e) {
    for (var r = !1, i = 0, n = e.coordinates; i < n.length; i++) {
      var a = n[i];
      if ((ie(a, t, { ignoreEndVertices: !0 }) && (r = !0), !ie(a, t)))
        return !1;
    }
    return !!r;
  }
  function qm(t, e) {
    for (var r = 0, i = e.coordinates; r < i.length; r++) {
      var n = i[r];
      if (!re(n, t, { ignoreBoundary: !0 })) return !1;
    }
    return !0;
  }
  function zm(t, e) {
    for (var r = !1, i = 0, n = e.coordinates; i < n.length; i++) {
      var a = n[i];
      if (
        (ie({ type: 'Point', coordinates: a }, t, { ignoreEndVertices: !0 }) &&
          (r = !0),
        !ie({ type: 'Point', coordinates: a }, t, { ignoreEndVertices: !1 }))
      )
        return !1;
    }
    return r;
  }
  function Nm(t, e) {
    var r = !1,
      i = 0,
      n = Vt(t),
      a = Vt(e);
    if (!nl(n, a)) return !1;
    for (i; i < e.coordinates.length - 1; i++) {
      var o = Vm(e.coordinates[i], e.coordinates[i + 1]);
      if (re({ type: 'Point', coordinates: o }, t, { ignoreBoundary: !0 })) {
        r = !0;
        break;
      }
    }
    return r;
  }
  function Fm(t, e) {
    if (
      (t.type === 'Feature' && t.geometry === null) ||
      (e.type === 'Feature' && e.geometry === null)
    )
      return !1;
    var r = Vt(t),
      i = Vt(e);
    if (!nl(r, i)) return !1;
    for (var n = Qt(e).coordinates, a = 0, o = n; a < o.length; a++)
      for (var u = o[a], c = 0, f = u; c < f.length; c++) {
        var v = f[c];
        if (!re(v, t)) return !1;
      }
    return !0;
  }
  function nl(t, e) {
    return !(t[0] > e[0] || t[2] < e[2] || t[1] > e[1] || t[3] < e[3]);
  }
  function Tr(t, e) {
    return t[0] === e[0] && t[1] === e[1];
  }
  function Vm(t, e) {
    return [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2];
  }
  var dl = Lt(ve());
  var Ar = Lt(al());
  function Ve(t) {
    let e = { type: 'Feature' };
    return (e.geometry = t), e;
  }
  function Fe(t) {
    return t.type === 'Feature' ? t.geometry : t;
  }
  function sl(t) {
    return t && t.geometry && t.geometry.coordinates
      ? t.geometry.coordinates
      : t;
  }
  function Um(t) {
    return Ve({ type: 'LineString', coordinates: t });
  }
  function jm(t) {
    return Ve({ type: 'MultiLineString', coordinates: t });
  }
  function ol(t) {
    return Ve({ type: 'Polygon', coordinates: t });
  }
  function ll(t) {
    return Ve({ type: 'MultiPolygon', coordinates: t });
  }
  function hl(t, e) {
    let r = Fe(t),
      i = Fe(e),
      n = Ar.default.intersection(r.coordinates, i.coordinates);
    return n.length === 0 ? null : n.length === 1 ? ol(n[0]) : ll(n);
  }
  function ul(t, e) {
    let r = Fe(t),
      i = Fe(e),
      n = Ar.default.difference(r.coordinates, i.coordinates);
    return n.length === 0 ? null : n.length === 1 ? ol(n[0]) : ll(n);
  }
  function cl(t) {
    return Array.isArray(t) ? 1 + cl(t[0]) : -1;
  }
  function pl(t) {
    t instanceof L.Polyline && (t = t.toGeoJSON(15));
    let e = sl(t),
      r = cl(e),
      i = [];
    return (
      r > 1
        ? e.forEach((n) => {
            i.push(Um(n));
          })
        : i.push(t),
      i
    );
  }
  function fl(t) {
    let e = [];
    return (
      t.eachLayer((r) => {
        e.push(sl(r.toGeoJSON(15)));
      }),
      jm(e)
    );
  }
  J.Cut = J.Polygon.extend({
    initialize(t) {
      (this._map = t),
        (this._shape = 'Cut'),
        (this.toolbarButtonName = 'cutPolygon');
    },
    _finishShape() {
      if (
        ((this._editedLayers = []),
        (!this.options.allowSelfIntersection &&
          (this._handleSelfIntersection(!0, this._layer.getLatLngs()[0]),
          this._doesSelfIntersect)) ||
          (this.options.requireSnapToFinish &&
            !this._hintMarker._snapped &&
            !this._isFirstLayer()))
      )
        return;
      let t = this._layer.getLatLngs();
      if (t.length <= 2) return;
      let e = L.polygon(t, this.options.pathOptions);
      (e._latlngInfos = this._layer._latlngInfo),
        this.cut(e),
        this._cleanupSnapping(),
        this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1),
        delete this._tempSnapLayerIndex,
        this._editedLayers.forEach(({ layer: r, originalLayer: i }) => {
          this._fireCut(i, r, i),
            this._fireCut(this._map, r, i),
            i.pm._fireEdit();
        }),
        (this._editedLayers = []),
        this.disable(),
        this.options.continueDrawing && this.enable();
    },
    cut(t) {
      let e = this._map._layers,
        r = t._latlngInfos || [];
      Object.keys(e)
        .map((n) => e[n])
        .filter((n) => n.pm)
        .filter((n) => !n._pmTempLayer)
        .filter(
          (n) =>
            (!L.PM.optIn && !n.options.pmIgnore) ||
            (L.PM.optIn && n.options.pmIgnore === !1)
        )
        .filter((n) => n instanceof L.Polyline)
        .filter((n) => n !== t)
        .filter((n) => n.pm.options.allowCutting)
        .filter((n) =>
          this.options.layersToCut &&
          L.Util.isArray(this.options.layersToCut) &&
          this.options.layersToCut.length > 0
            ? this.options.layersToCut.indexOf(n) > -1
            : !0
        )
        .filter((n) => !this._layerGroup.hasLayer(n))
        .filter((n) => {
          try {
            let a = !!pt(t.toGeoJSON(15), n.toGeoJSON(15)).features.length > 0;
            return a || (n instanceof L.Polyline && !(n instanceof L.Polygon))
              ? a
              : !!hl(t.toGeoJSON(15), n.toGeoJSON(15));
          } catch {
            return (
              n instanceof L.Polygon &&
                console.error("You can't cut polygons with self-intersections"),
              !1
            );
          }
        })
        .forEach((n) => {
          let a;
          if (n instanceof L.Polygon) {
            a = L.polygon(n.getLatLngs());
            let f = a.getLatLngs();
            r.forEach((v) => {
              if (v && v.snapInfo) {
                let { latlng: b } = v,
                  E = this._calcClosestLayer(b, [a]);
                if (E && E.segment && E.distance < this.options.snapDistance) {
                  let { segment: M } = E;
                  if (M && M.length === 2) {
                    let {
                      indexPath: B,
                      parentPath: I,
                      newIndex: g,
                    } = L.PM.Utils._getIndexFromSegment(f, M);
                    (B.length > 1 ? (0, dl.default)(f, I) : f).splice(g, 0, b);
                  }
                }
              }
            });
          } else a = n;
          let o = this._cutLayer(t, a),
            u = L.geoJSON(o, n.options);
          u.getLayers().length === 1 && ([u] = u.getLayers()),
            this._setPane(u, 'layerPane');
          let c = u.addTo(this._map.pm._getContainingLayer());
          if (
            (c.pm.enable(n.pm.options),
            c.pm.disable(),
            (n._pmTempLayer = !0),
            (t._pmTempLayer = !0),
            n.remove(),
            n.removeFrom(this._map.pm._getContainingLayer()),
            t.remove(),
            t.removeFrom(this._map.pm._getContainingLayer()),
            c.getLayers &&
              c.getLayers().length === 0 &&
              this._map.pm.removeLayer({ target: c }),
            c instanceof L.LayerGroup
              ? (c.eachLayer((f) => {
                  this._addDrawnLayerProp(f);
                }),
                this._addDrawnLayerProp(c))
              : this._addDrawnLayerProp(c),
            this.options.layersToCut &&
              L.Util.isArray(this.options.layersToCut) &&
              this.options.layersToCut.length > 0)
          ) {
            let f = this.options.layersToCut.indexOf(n);
            f > -1 && this.options.layersToCut.splice(f, 1);
          }
          this._editedLayers.push({ layer: c, originalLayer: n });
        });
    },
    _cutLayer(t, e) {
      let r = L.geoJSON(),
        i;
      if (e instanceof L.Polygon) i = ul(e.toGeoJSON(15), t.toGeoJSON(15));
      else {
        let n = pl(e);
        n.forEach((a) => {
          let o = rl(a, t.toGeoJSON(15)),
            u;
          o && o.features.length > 0 ? (u = L.geoJSON(o)) : (u = L.geoJSON(a)),
            u.getLayers().forEach((c) => {
              Dr(t.toGeoJSON(15), c.toGeoJSON(15)) || c.addTo(r);
            });
        }),
          n.length > 1 ? (i = fl(r)) : (i = r.toGeoJSON(15));
      }
      return i;
    },
    _change: L.Util.falseFn,
  });
  J.Text = J.extend({
    initialize(t) {
      (this._map = t),
        (this._shape = 'Text'),
        (this.toolbarButtonName = 'drawText');
    },
    enable(t) {
      L.Util.setOptions(this, t),
        (this._enabled = !0),
        this._map.on('click', this._createMarker, this),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0),
        (this._hintMarker = L.marker(this._map.getCenter(), {
          interactive: !1,
          zIndexOffset: 100,
          icon: L.divIcon({ className: 'marker-icon cursor-marker' }),
        })),
        this._setPane(this._hintMarker, 'vertexPane'),
        (this._hintMarker._pmTempLayer = !0),
        this._hintMarker.addTo(this._map),
        this.options.cursorMarker &&
          L.DomUtil.addClass(this._hintMarker._icon, 'visible'),
        this.options.tooltips &&
          this._hintMarker
            .bindTooltip(N('tooltips.placeText'), {
              permanent: !0,
              offset: L.point(0, 10),
              direction: 'bottom',
              opacity: 0.8,
            })
            .openTooltip(),
        (this._layer = this._hintMarker),
        this._map.on('mousemove', this._syncHintMarker, this),
        this._map.getContainer().classList.add('geoman-draw-cursor'),
        this._fireDrawStart(),
        this._setGlobalDrawMode();
    },
    disable() {
      this._enabled &&
        ((this._enabled = !1),
        this._map.off('click', this._createMarker, this),
        this._hintMarker?.remove(),
        this._map.getContainer().classList.remove('geoman-draw-cursor'),
        this._map.off('mousemove', this._syncHintMarker, this),
        this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1),
        this.options.snappable && this._cleanupSnapping(),
        this._fireDrawEnd(),
        this._setGlobalDrawMode());
    },
    enabled() {
      return this._enabled;
    },
    toggle(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    _syncHintMarker(t) {
      if ((this._hintMarker.setLatLng(t.latlng), this.options.snappable)) {
        let e = t;
        (e.target = this._hintMarker), this._handleSnapping(e);
      }
    },
    _createMarker(t) {
      if (
        !t.latlng ||
        (this.options.requireSnapToFinish &&
          !this._hintMarker._snapped &&
          !this._isFirstLayer())
      )
        return;
      this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
      let e = this._hintMarker.getLatLng();
      if (
        ((this.textArea = this._createTextArea()),
        this.options.textOptions?.className)
      ) {
        let n = this.options.textOptions.className.split(' ');
        this.textArea.classList.add(...n);
      }
      let r = this._createTextIcon(this.textArea),
        i = new L.Marker(e, { textMarker: !0, _textMarkerOverPM: !0, icon: r });
      if (
        (this._setPane(i, 'markerPane'),
        this._finishLayer(i),
        i.pm || (i.options.draggable = !1),
        i.addTo(this._map.pm._getContainingLayer()),
        i.pm)
      ) {
        (i.pm.textArea = this.textArea),
          L.setOptions(i.pm, {
            removeIfEmpty: this.options.textOptions?.removeIfEmpty ?? !0,
          });
        let n = this.options.textOptions?.focusAfterDraw ?? !0;
        i.pm._createTextMarker(n),
          this.options.textOptions?.text &&
            i.pm.setText(this.options.textOptions.text);
      }
      this._fireCreate(i),
        this._cleanupSnapping(),
        this.disable(),
        this.options.continueDrawing && this.enable();
    },
    _createTextArea() {
      let t = document.createElement('textarea');
      return (
        (t.readOnly = !0), t.classList.add('pm-textarea', 'pm-disabled'), t
      );
    },
    _createTextIcon(t) {
      return L.divIcon({ className: 'pm-text-marker', html: t });
    },
  });
  var Km = {
      enableLayerDrag() {
        if (!this.options.draggable || !this._layer._map) return;
        this.disable(),
          (this._layerDragEnabled = !0),
          this._map || (this._map = this._layer._map),
          (this._layer instanceof L.Marker ||
            this._layer instanceof L.ImageOverlay) &&
            L.DomEvent.on(
              this._getDOMElem(),
              'dragstart',
              this._stopDOMImageDrag
            ),
          this._layer.dragging && this._layer.dragging.disable(),
          (this._tempDragCoord = null),
          Bt(this._layer) instanceof L.Canvas
            ? (this._layer.on('mouseout', this.removeDraggingClass, this),
              this._layer.on('mouseover', this.addDraggingClass, this))
            : this.addDraggingClass(),
          (this._originalMapDragState = this._layer._map.dragging._enabled),
          (this._safeToCacheDragState = !0);
        let t = this._getDOMElem();
        t &&
          (Bt(this._layer) instanceof L.Canvas
            ? (this._layer.on(
                'touchstart mousedown',
                this._dragMixinOnMouseDown,
                this
              ),
              this._map.pm._addTouchEvents(t))
            : L.DomEvent.on(
                t,
                'touchstart mousedown',
                this._simulateMouseDownEvent,
                this
              )),
          this._fireDragEnable();
      },
      disableLayerDrag() {
        (this._layerDragEnabled = !1),
          Bt(this._layer) instanceof L.Canvas
            ? (this._layer.off('mouseout', this.removeDraggingClass, this),
              this._layer.off('mouseover', this.addDraggingClass, this))
            : this.removeDraggingClass(),
          this._originalMapDragState &&
            this._dragging &&
            this._map.dragging.enable(),
          (this._safeToCacheDragState = !1),
          this._layer.dragging && this._layer.dragging.disable();
        let t = this._getDOMElem();
        t &&
          (Bt(this._layer) instanceof L.Canvas
            ? (this._layer.off(
                'touchstart mousedown',
                this._dragMixinOnMouseDown,
                this
              ),
              this._map.pm._removeTouchEvents(t))
            : L.DomEvent.off(
                t,
                'touchstart mousedown',
                this._simulateMouseDownEvent,
                this
              )),
          this._layerDragged && this._fireUpdate(),
          (this._layerDragged = !1),
          this._fireDragDisable();
      },
      dragging() {
        return this._dragging;
      },
      layerDragEnabled() {
        return !!this._layerDragEnabled;
      },
      _simulateMouseDownEvent(t) {
        let e = t.touches ? t.touches[0] : t,
          r = { originalEvent: e, target: this._layer };
        return (
          (r.containerPoint = this._map.mouseEventToContainerPoint(e)),
          (r.latlng = this._map.containerPointToLatLng(r.containerPoint)),
          this._dragMixinOnMouseDown(r),
          !1
        );
      },
      _simulateMouseMoveEvent(t) {
        let e = t.touches ? t.touches[0] : t,
          r = { originalEvent: e, target: this._layer };
        return (
          (r.containerPoint = this._map.mouseEventToContainerPoint(e)),
          (r.latlng = this._map.containerPointToLatLng(r.containerPoint)),
          this._dragMixinOnMouseMove(r),
          !1
        );
      },
      _simulateMouseUpEvent(t) {
        let r = {
          originalEvent: t.touches ? t.touches[0] : t,
          target: this._layer,
        };
        return (
          t.type.indexOf('touch') === -1 &&
            ((r.containerPoint = this._map.mouseEventToContainerPoint(t)),
            (r.latlng = this._map.containerPointToLatLng(r.containerPoint))),
          this._dragMixinOnMouseUp(r),
          !1
        );
      },
      _dragMixinOnMouseDown(t) {
        if (t.originalEvent.button > 0) return;
        this._overwriteEventIfItComesFromMarker(t);
        let e = t._fromLayerSync,
          r = this._syncLayers('_dragMixinOnMouseDown', t);
        if (
          (this._layer instanceof L.Marker &&
            (this.options.snappable && !e && !r
              ? this._initSnappableMarkers()
              : this._disableSnapping()),
          this._layer instanceof L.CircleMarker)
        ) {
          let i = 'resizeableCircleMarker';
          this._layer instanceof L.Circle && (i = 'resizableCircle'),
            this.options.snappable && !e && !r
              ? this._layer.pm.options[i] || this._initSnappableMarkersDrag()
              : this._layer.pm.options[i]
                ? this._layer.pm._disableSnapping()
                : this._layer.pm._disableSnappingDrag();
        }
        this._safeToCacheDragState &&
          ((this._originalMapDragState = this._layer._map.dragging._enabled),
          (this._safeToCacheDragState = !1)),
          (this._tempDragCoord = t.latlng),
          L.DomEvent.on(
            this._map.getContainer(),
            'touchend mouseup',
            this._simulateMouseUpEvent,
            this
          ),
          L.DomEvent.on(
            this._map.getContainer(),
            'touchmove mousemove',
            this._simulateMouseMoveEvent,
            this
          );
      },
      _dragMixinOnMouseMove(t) {
        this._overwriteEventIfItComesFromMarker(t);
        let e = this._getDOMElem();
        this._syncLayers('_dragMixinOnMouseMove', t),
          this._dragging ||
            ((this._dragging = !0),
            L.DomUtil.addClass(e, 'leaflet-pm-dragging'),
            this._layer instanceof L.Marker || this._layer.bringToFront(),
            this._originalMapDragState && this._map.dragging.disable(),
            this._fireDragStart()),
          this._tempDragCoord || (this._tempDragCoord = t.latlng),
          this._onLayerDrag(t),
          this._layer instanceof L.CircleMarker &&
            this._layer.pm._updateHiddenPolyCircle();
      },
      _dragMixinOnMouseUp(t) {
        let e = this._getDOMElem();
        return (
          this._syncLayers('_dragMixinOnMouseUp', t),
          this._originalMapDragState && this._map.dragging.enable(),
          (this._safeToCacheDragState = !0),
          L.DomEvent.off(
            this._map.getContainer(),
            'touchmove mousemove',
            this._simulateMouseMoveEvent,
            this
          ),
          L.DomEvent.off(
            this._map.getContainer(),
            'touchend mouseup',
            this._simulateMouseUpEvent,
            this
          ),
          this._dragging
            ? (this._layer instanceof L.CircleMarker &&
                this._layer.pm._updateHiddenPolyCircle(),
              (this._layerDragged = !0),
              window.setTimeout(() => {
                (this._dragging = !1),
                  e && L.DomUtil.removeClass(e, 'leaflet-pm-dragging'),
                  this._fireDragEnd(),
                  this._fireEdit(),
                  (this._layerEdited = !0);
              }, 10),
              !0)
            : !1
        );
      },
      _onLayerDrag(t) {
        let { latlng: e } = t,
          r = {
            lat: e.lat - this._tempDragCoord.lat,
            lng: e.lng - this._tempDragCoord.lng,
          },
          i = (n) =>
            n.map((a) => {
              if (Array.isArray(a)) return i(a);
              let o = { lat: a.lat + r.lat, lng: a.lng + r.lng };
              return (a.alt || a.alt === 0) && (o.alt = a.alt), o;
            });
        if (
          (this._layer instanceof L.Circle &&
            this._layer.options.resizableCircle) ||
          (this._layer instanceof L.CircleMarker &&
            this._layer.options.resizeableCircleMarker)
        ) {
          let n = i([this._layer.getLatLng()]);
          this._layer.setLatLng(n[0]),
            this._fireChange(this._layer.getLatLng(), 'Edit');
        } else if (
          this._layer instanceof L.CircleMarker ||
          this._layer instanceof L.Marker
        ) {
          let n = this._layer.getLatLng();
          this._layer._snapped && (n = this._layer._orgLatLng);
          let a = i([n]);
          this._layer.setLatLng(a[0]),
            this._fireChange(this._layer.getLatLng(), 'Edit');
        } else if (this._layer instanceof L.ImageOverlay) {
          let n = i([
            this._layer.getBounds().getNorthWest(),
            this._layer.getBounds().getSouthEast(),
          ]);
          this._layer.setBounds(n),
            this._fireChange(this._layer.getBounds(), 'Edit');
        } else {
          let n = i(this._layer.getLatLngs());
          this._layer.setLatLngs(n),
            this._fireChange(this._layer.getLatLngs(), 'Edit');
        }
        (this._tempDragCoord = e), (t.layer = this._layer), this._fireDrag(t);
      },
      addDraggingClass() {
        let t = this._getDOMElem();
        t && L.DomUtil.addClass(t, 'leaflet-pm-draggable');
      },
      removeDraggingClass() {
        let t = this._getDOMElem();
        t && L.DomUtil.removeClass(t, 'leaflet-pm-draggable');
      },
      _getDOMElem() {
        let t = null;
        return (
          this._layer._path
            ? (t = this._layer._path)
            : this._layer._renderer && this._layer._renderer._container
              ? (t = this._layer._renderer._container)
              : this._layer._image
                ? (t = this._layer._image)
                : this._layer._icon && (t = this._layer._icon),
          t
        );
      },
      _overwriteEventIfItComesFromMarker(t) {
        t.target.getLatLng &&
          (!t.target._radius || t.target._radius <= 10) &&
          ((t.containerPoint = this._map.mouseEventToContainerPoint(
            t.originalEvent
          )),
          (t.latlng = this._map.containerPointToLatLng(t.containerPoint)));
      },
      _syncLayers(t, e) {
        if (this.enabled()) return !1;
        if (
          !e._fromLayerSync &&
          this._layer === e.target &&
          this.options.syncLayersOnDrag
        ) {
          e._fromLayerSync = !0;
          let r = [];
          if (L.Util.isArray(this.options.syncLayersOnDrag))
            (r = this.options.syncLayersOnDrag),
              this.options.syncLayersOnDrag.forEach((i) => {
                i instanceof L.LayerGroup && (r = r.concat(i.pm.getLayers(!0)));
              });
          else if (
            this.options.syncLayersOnDrag === !0 &&
            this._parentLayerGroup
          )
            for (let i in this._parentLayerGroup) {
              let n = this._parentLayerGroup[i];
              n.pm && (r = n.pm.getLayers(!0));
            }
          return (
            L.Util.isArray(r) &&
              r.length > 0 &&
              ((r = r
                .filter((i) => !!i.pm)
                .filter((i) => !!i.pm.options.draggable)),
              r.forEach((i) => {
                i !== this._layer && i.pm[t] && ((i._snapped = !1), i.pm[t](e));
              })),
            r.length > 0
          );
        }
        return !1;
      },
      _stopDOMImageDrag(t) {
        return t.preventDefault(), !1;
      },
    },
    gl = Km;
  var ml = Lt(ve());
  function Hm(t, e, r, i) {
    return r.unproject(e.transform(r.project(t, i)), i);
  }
  function Gr(t, e, r) {
    let i = r.getMaxZoom();
    if ((i === 1 / 0 && (i = r.getZoom()), L.Util.isArray(t))) {
      let n = [];
      return (
        t.forEach((a) => {
          n.push(Gr(a, e, r));
        }),
        n
      );
    }
    return t instanceof L.LatLng ? Hm(t, e, r, i) : null;
  }
  function Tt(t, e) {
    e instanceof L.Layer && (e = e.getLatLng());
    let r = t.getMaxZoom();
    return r === 1 / 0 && (r = t.getZoom()), t.project(e, r);
  }
  function Pe(t, e) {
    let r = t.getMaxZoom();
    return r === 1 / 0 && (r = t.getZoom()), t.unproject(e, r);
  }
  var Xm = {
      _onRotateStart(t) {
        this._preventRenderingMarkers(!0),
          (this._rotationOriginLatLng = this._getRotationCenter().clone()),
          (this._rotationOriginPoint = Tt(
            this._map,
            this._rotationOriginLatLng
          )),
          (this._rotationStartPoint = Tt(this._map, t.target.getLatLng())),
          (this._initialRotateLatLng = bt(this._layer)),
          (this._startAngle = this.getAngle());
        let e = bt(
          this._rotationLayer,
          this._rotationLayer.pm._rotateOrgLatLng
        );
        this._fireRotationStart(this._rotationLayer, e),
          this._fireRotationStart(this._map, e);
      },
      _onRotate(t) {
        let e = Tt(this._map, t.target.getLatLng()),
          r = this._rotationStartPoint,
          i = this._rotationOriginPoint,
          n =
            Math.atan2(e.y - i.y, e.x - i.x) - Math.atan2(r.y - i.y, r.x - i.x);
        this._layer.setLatLngs(
          this._rotateLayer(
            n,
            this._initialRotateLatLng,
            this._rotationOriginLatLng,
            L.PM.Matrix.init(),
            this._map
          )
        );
        let a = this;
        function o(v, b = [], E = -1) {
          if ((E > -1 && b.push(E), L.Util.isArray(v[0])))
            v.forEach((M, B) => o(M, b.slice(), B));
          else {
            let M = (0, ml.default)(a._markers, b);
            v.forEach((B, I) => {
              M[I].setLatLng(B);
            });
          }
        }
        o(this._layer.getLatLngs());
        let u = bt(this._rotationLayer);
        this._rotationLayer.setLatLngs(
          this._rotateLayer(
            n,
            this._rotationLayer.pm._rotateOrgLatLng,
            this._rotationOriginLatLng,
            L.PM.Matrix.init(),
            this._map
          )
        );
        let c = (n * 180) / Math.PI;
        c = c < 0 ? c + 360 : c;
        let f = c + this._startAngle;
        this._setAngle(f),
          this._rotationLayer.pm._setAngle(f),
          this._fireRotation(this._rotationLayer, c, u),
          this._fireRotation(this._map, c, u),
          this._rotationLayer.pm._fireChange(
            this._rotationLayer.getLatLngs(),
            'Rotation'
          );
      },
      _onRotateEnd() {
        let t = this._startAngle;
        delete this._rotationOriginLatLng,
          delete this._rotationOriginPoint,
          delete this._rotationStartPoint,
          delete this._initialRotateLatLng,
          delete this._startAngle;
        let e = bt(
          this._rotationLayer,
          this._rotationLayer.pm._rotateOrgLatLng
        );
        (this._rotationLayer.pm._rotateOrgLatLng = bt(this._rotationLayer)),
          this._fireRotationEnd(this._rotationLayer, t, e),
          this._fireRotationEnd(this._map, t, e),
          this._rotationLayer.pm._fireEdit(this._rotationLayer, 'Rotation'),
          this._preventRenderingMarkers(!1),
          (this._layerRotated = !0);
      },
      _rotateLayer(t, e, r, i, n) {
        let a = Tt(n, r);
        return (
          (this._matrix = i.clone().rotate(t, a).flip()), Gr(e, this._matrix, n)
        );
      },
      _setAngle(t) {
        (t = t < 0 ? t + 360 : t), (this._angle = t % 360);
      },
      _getRotationCenter() {
        if (this._rotationCenter) return this._rotationCenter;
        let t = L.polygon(this._layer.getLatLngs(), {
            stroke: !1,
            fill: !1,
            pmIgnore: !0,
          }).addTo(this._layer._map),
          e = t.getCenter();
        return t.removeFrom(this._layer._map), e;
      },
      enableRotate() {
        if (!this.options.allowRotation) {
          this.disableRotate();
          return;
        }
        this.rotateEnabled() && this.disableRotate(),
          this._layer instanceof L.Rectangle &&
            this._angle === void 0 &&
            this.setInitAngle(
              ke(
                this._layer._map,
                this._layer.getLatLngs()[0][0],
                this._layer.getLatLngs()[0][1]
              ) || 0
            );
        let t = { fill: !1, stroke: !1, pmIgnore: !1, snapIgnore: !0 };
        (this._rotatePoly = L.polygon(this._layer.getLatLngs(), t)),
          (this._rotatePoly._pmTempLayer = !0),
          this._rotatePoly.addTo(this._layer._map),
          this._rotatePoly.pm._setAngle(this.getAngle()),
          this._rotatePoly.pm.setRotationCenter(this.getRotationCenter()),
          this._rotatePoly.pm.setOptions(
            this._layer._map.pm.getGlobalOptions()
          ),
          this._rotatePoly.pm.setOptions({
            rotate: !0,
            snappable: !1,
            hideMiddleMarkers: !0,
          }),
          (this._rotatePoly.pm._rotationLayer = this._layer),
          this._rotatePoly.pm.enable(),
          (this._rotateOrgLatLng = bt(this._layer)),
          (this._rotateEnabled = !0),
          this._layer.on('remove', this.disableRotate, this),
          this._fireRotationEnable(this._layer),
          this._fireRotationEnable(this._layer._map);
      },
      disableRotate() {
        this.rotateEnabled() &&
          (this._rotatePoly.pm._layerRotated && this._fireUpdate(),
          (this._rotatePoly.pm._layerRotated = !1),
          this._rotatePoly.pm.disable(),
          this._rotatePoly.remove(),
          this._rotatePoly.pm.setOptions({ rotate: !1 }),
          (this._rotatePoly = void 0),
          (this._rotateOrgLatLng = void 0),
          this._layer.off('remove', this.disableRotate, this),
          (this._rotateEnabled = !1),
          this._fireRotationDisable(this._layer),
          this._fireRotationDisable(this._layer._map));
      },
      rotateEnabled() {
        return !!this._rotateEnabled;
      },
      rotateLayer(t) {
        let e = this.getAngle(),
          r = this._layer.getLatLngs(),
          i = t * (Math.PI / 180);
        this._layer.setLatLngs(
          this._rotateLayer(
            i,
            this._layer.getLatLngs(),
            this._getRotationCenter(),
            L.PM.Matrix.init(),
            this._layer._map
          )
        ),
          (this._rotateOrgLatLng = L.polygon(
            this._layer.getLatLngs()
          ).getLatLngs()),
          this._setAngle(this.getAngle() + t),
          this.rotateEnabled() &&
            this._rotatePoly &&
            this._rotatePoly.pm.enabled() &&
            (this._rotatePoly.setLatLngs(
              this._rotateLayer(
                i,
                this._rotatePoly.getLatLngs(),
                this._getRotationCenter(),
                L.PM.Matrix.init(),
                this._rotatePoly._map
              )
            ),
            this._rotatePoly.pm._initMarkers());
        let n = this.getAngle() - e;
        (n = n < 0 ? n + 360 : n),
          (this._startAngle = e),
          this._fireRotation(this._layer, n, r, this._layer),
          this._fireRotation(this._map || this._layer._map, n, r, this._layer),
          delete this._startAngle,
          this._fireChange(this._layer.getLatLngs(), 'Rotation');
      },
      rotateLayerToAngle(t) {
        let e = t - this.getAngle();
        this.rotateLayer(e);
      },
      getAngle() {
        return this._angle || 0;
      },
      setInitAngle(t) {
        this._setAngle(t);
      },
      getRotationCenter() {
        return this._getRotationCenter();
      },
      setRotationCenter(t) {
        (this._rotationCenter = t),
          this._rotatePoly && this._rotatePoly.pm.setRotationCenter(t);
      },
    },
    _l = Xm;
  var Ym = L.Class.extend({
      includes: [gl, Ie, _l, St],
      options: {
        snappable: !0,
        snapDistance: 20,
        allowSelfIntersection: !0,
        allowSelfIntersectionEdit: !1,
        preventMarkerRemoval: !1,
        removeLayerBelowMinVertexCount: !0,
        limitMarkersToCount: -1,
        hideMiddleMarkers: !1,
        snapSegment: !0,
        syncLayersOnDrag: !1,
        draggable: !0,
        allowEditing: !0,
        allowRemoval: !0,
        allowCutting: !0,
        allowRotation: !0,
        addVertexOn: 'click',
        removeVertexOn: 'contextmenu',
        removeVertexValidation: void 0,
        addVertexValidation: void 0,
        moveVertexValidation: void 0,
        resizeableCircleMarker: !1,
        resizableCircle: !0,
      },
      setOptions(t) {
        L.Util.setOptions(this, t);
      },
      getOptions() {
        return this.options;
      },
      applyOptions() {},
      isPolygon() {
        return this._layer instanceof L.Polygon;
      },
      getShape() {
        return this._shape;
      },
      _setPane(t, e) {
        e === 'layerPane'
          ? (t.options.pane =
              (this._map.pm.globalOptions.panes &&
                this._map.pm.globalOptions.panes.layerPane) ||
              'overlayPane')
          : e === 'vertexPane'
            ? (t.options.pane =
                (this._map.pm.globalOptions.panes &&
                  this._map.pm.globalOptions.panes.vertexPane) ||
                'markerPane')
            : e === 'markerPane' &&
              (t.options.pane =
                (this._map.pm.globalOptions.panes &&
                  this._map.pm.globalOptions.panes.markerPane) ||
                'markerPane');
      },
      remove() {
        (this._map || this._layer._map).pm.removeLayer({ target: this._layer });
      },
      _vertexValidation(t, e) {
        let r = e.target,
          i = { layer: this._layer, marker: r, event: e },
          n = '';
        return (
          t === 'move'
            ? (n = 'moveVertexValidation')
            : t === 'add'
              ? (n = 'addVertexValidation')
              : t === 'remove' && (n = 'removeVertexValidation'),
          this.options[n] &&
          typeof this.options[n] == 'function' &&
          !this.options[n](i)
            ? (t === 'move' && (r._cancelDragEventChain = r.getLatLng()), !1)
            : ((r._cancelDragEventChain = null), !0)
        );
      },
      _vertexValidationDrag(t) {
        return t._cancelDragEventChain
          ? ((t._latlng = t._cancelDragEventChain), t.update(), !1)
          : !0;
      },
      _vertexValidationDragEnd(t) {
        return t._cancelDragEventChain
          ? ((t._cancelDragEventChain = null), !1)
          : !0;
      },
    }),
    H = Ym;
  H.LayerGroup = L.Class.extend({
    initialize(t) {
      (this._layerGroup = t),
        (this._layers = this.getLayers()),
        this._getMap(),
        this._layers.forEach((i) => this._initLayer(i));
      let e = (i) => {
        if (i.layer._pmTempLayer) return;
        this._layers = this.getLayers();
        let n = this._layers.filter(
          (a) =>
            !a.pm._parentLayerGroup ||
            !(this._layerGroup._leaflet_id in a.pm._parentLayerGroup)
        );
        n.forEach((a) => {
          this._initLayer(a);
        }),
          n.length > 0 &&
            this._getMap() &&
            this._getMap().pm.globalEditModeEnabled() &&
            this.enabled() &&
            this.enable(this.getOptions());
      };
      this._layerGroup.on('layeradd', L.Util.throttle(e, 100, this), this),
        this._layerGroup.on(
          'layerremove',
          (i) => {
            this._removeLayerFromGroup(i.target);
          },
          this
        );
      let r = (i) => {
        i.target._pmTempLayer || (this._layers = this.getLayers());
      };
      this._layerGroup.on('layerremove', L.Util.throttle(r, 100, this), this);
    },
    enable(t, e = []) {
      e.length === 0 && (this._layers = this.getLayers()),
        (this._options = t),
        this._layers.forEach((r) => {
          r instanceof L.LayerGroup
            ? e.indexOf(r._leaflet_id) === -1 &&
              (e.push(r._leaflet_id), r.pm.enable(t, e))
            : r.pm.enable(t);
        });
    },
    disable(t = []) {
      t.length === 0 && (this._layers = this.getLayers()),
        this._layers.forEach((e) => {
          e instanceof L.LayerGroup
            ? t.indexOf(e._leaflet_id) === -1 &&
              (t.push(e._leaflet_id), e.pm.disable(t))
            : e.pm.disable();
        });
    },
    enabled(t = []) {
      return (
        t.length === 0 && (this._layers = this.getLayers()),
        !!this._layers.find((r) =>
          r instanceof L.LayerGroup
            ? t.indexOf(r._leaflet_id) === -1
              ? (t.push(r._leaflet_id), r.pm.enabled(t))
              : !1
            : r.pm.enabled()
        )
      );
    },
    toggleEdit(t, e = []) {
      e.length === 0 && (this._layers = this.getLayers()),
        (this._options = t),
        this._layers.forEach((r) => {
          r instanceof L.LayerGroup
            ? e.indexOf(r._leaflet_id) === -1 &&
              (e.push(r._leaflet_id), r.pm.toggleEdit(t, e))
            : r.pm.toggleEdit(t);
        });
    },
    _initLayer(t) {
      let e = L.Util.stamp(this._layerGroup);
      t.pm._parentLayerGroup || (t.pm._parentLayerGroup = {}),
        (t.pm._parentLayerGroup[e] = this._layerGroup);
    },
    _removeLayerFromGroup(t) {
      if (t.pm && t.pm._layerGroup) {
        let e = L.Util.stamp(this._layerGroup);
        delete t.pm._layerGroup[e];
      }
    },
    dragging() {
      return (
        (this._layers = this.getLayers()),
        this._layers ? !!this._layers.find((e) => e.pm.dragging()) : !1
      );
    },
    getOptions() {
      return this.options;
    },
    _getMap() {
      return this._map || this._layers.find((t) => !!t._map)?._map || null;
    },
    getLayers(t = !1, e = !0, r = !0, i = []) {
      let n = [];
      return (
        t
          ? this._layerGroup.getLayers().forEach((a) => {
              n.push(a),
                a instanceof L.LayerGroup &&
                  i.indexOf(a._leaflet_id) === -1 &&
                  (i.push(a._leaflet_id),
                  (n = n.concat(a.pm.getLayers(!0, !0, !0, i))));
            })
          : (n = this._layerGroup.getLayers()),
        r && (n = n.filter((a) => !(a instanceof L.LayerGroup))),
        e &&
          ((n = n.filter((a) => !!a.pm)),
          (n = n.filter((a) => !a._pmTempLayer)),
          (n = n.filter(
            (a) =>
              (!L.PM.optIn && !a.options.pmIgnore) ||
              (L.PM.optIn && a.options.pmIgnore === !1)
          ))),
        n
      );
    },
    setOptions(t, e = []) {
      e.length === 0 && (this._layers = this.getLayers()),
        (this.options = t),
        this._layers.forEach((r) => {
          r.pm &&
            (r instanceof L.LayerGroup
              ? e.indexOf(r._leaflet_id) === -1 &&
                (e.push(r._leaflet_id), r.pm.setOptions(t, e))
              : r.pm.setOptions(t));
        });
    },
  });
  H.Marker = H.extend({
    _shape: 'Marker',
    initialize(t) {
      (this._layer = t),
        (this._enabled = !1),
        this._layer.on('dragend', this._onDragEnd, this);
    },
    enable(t = { draggable: !0 }) {
      if (
        (L.Util.setOptions(this, t),
        !this.options.allowEditing || !this._layer._map)
      ) {
        this.disable();
        return;
      }
      (this._map = this._layer._map),
        this.enabled() && this.disable(),
        this.applyOptions(),
        this._layer.on('remove', this.disable, this),
        (this._enabled = !0),
        this._fireEnable();
    },
    disable() {
      this.enabled() &&
        (this.disableLayerDrag(),
        this._layer.off('remove', this.disable, this),
        this._layer.off('contextmenu', this._removeMarker, this),
        this._layerEdited && this._fireUpdate(),
        (this._layerEdited = !1),
        this._fireDisable(),
        (this._enabled = !1));
    },
    enabled() {
      return this._enabled;
    },
    toggleEdit(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    applyOptions() {
      this.options.snappable
        ? this._initSnappableMarkers()
        : this._disableSnapping(),
        this.options.draggable
          ? this.enableLayerDrag()
          : this.disableLayerDrag(),
        this.options.preventMarkerRemoval ||
          this._layer.on('contextmenu', this._removeMarker, this);
    },
    _removeMarker(t) {
      let e = t.target;
      e.remove(), this._fireRemove(e), this._fireRemove(this._map, e);
    },
    _onDragEnd() {
      this._fireEdit(), (this._layerEdited = !0);
    },
    _initSnappableMarkers() {
      let t = this._layer;
      (this.options.snapDistance = this.options.snapDistance || 30),
        (this.options.snapSegment =
          this.options.snapSegment === void 0 ? !0 : this.options.snapSegment),
        t.off('pm:drag', this._handleSnapping, this),
        t.on('pm:drag', this._handleSnapping, this),
        t.off('pm:dragend', this._cleanupSnapping, this),
        t.on('pm:dragend', this._cleanupSnapping, this),
        t.off('pm:dragstart', this._unsnap, this),
        t.on('pm:dragstart', this._unsnap, this);
    },
    _disableSnapping() {
      let t = this._layer;
      t.off('pm:drag', this._handleSnapping, this),
        t.off('pm:dragend', this._cleanupSnapping, this),
        t.off('pm:dragstart', this._unsnap, this);
    },
  });
  var Pt = Lt(ve());
  var Jm = {
      filterMarkerGroup() {
        (this.markerCache = []),
          this.createCache(),
          this._layer.on('pm:edit', this.createCache, this),
          this.applyLimitFilters({}),
          this.throttledApplyLimitFilters ||
            (this.throttledApplyLimitFilters = L.Util.throttle(
              this.applyLimitFilters,
              100,
              this
            )),
          this._layer.on('pm:disable', this._removeMarkerLimitEvents, this),
          this.options.limitMarkersToCount > -1 &&
            (this._layer.on('pm:vertexremoved', this._initMarkers, this),
            this._map.on('mousemove', this.throttledApplyLimitFilters, this));
      },
      _removeMarkerLimitEvents() {
        this._map.off('mousemove', this.throttledApplyLimitFilters, this),
          this._layer.off('pm:edit', this.createCache, this),
          this._layer.off('pm:disable', this._removeMarkerLimitEvents, this),
          this._layer.off('pm:vertexremoved', this._initMarkers, this);
      },
      createCache() {
        let t = [...this._markerGroup.getLayers(), ...this.markerCache];
        this.markerCache = t.filter((e, r, i) => i.indexOf(e) === r);
      },
      renderLimits(t) {
        this.markerCache.forEach((e) => {
          t.includes(e)
            ? this._markerGroup.addLayer(e)
            : this._markerGroup.removeLayer(e);
        });
      },
      applyLimitFilters({ latlng: t = { lat: 0, lng: 0 } }) {
        if (this._preventRenderMarkers) return;
        let r = [...this._filterClosestMarkers(t)];
        this.renderLimits(r);
      },
      _filterClosestMarkers(t) {
        let e = [...this.markerCache],
          r = this.options.limitMarkersToCount;
        return r === -1
          ? e
          : (e.sort((n, a) => {
              let o = n._latlng.distanceTo(t),
                u = a._latlng.distanceTo(t);
              return o - u;
            }),
            e.filter((n, a) => (r > -1 ? a < r : !0)));
      },
      _preventRenderMarkers: !1,
      _preventRenderingMarkers(t) {
        this._preventRenderMarkers = !!t;
      },
    },
    yl = Jm;
  H.Line = H.extend({
    includes: [yl],
    _shape: 'Line',
    initialize(t) {
      (this._layer = t), (this._enabled = !1);
    },
    enable(t) {
      if (
        (L.Util.setOptions(this, t),
        (this._map = this._layer._map),
        !!this._map)
      ) {
        if (!this.options.allowEditing) {
          this.disable();
          return;
        }
        this.enabled() && this.disable(),
          (this._enabled = !0),
          this._initMarkers(),
          this.applyOptions(),
          this._layer.on('remove', this.disable, this),
          this.options.allowSelfIntersection ||
            this._layer.on(
              'pm:vertexremoved',
              this._handleSelfIntersectionOnVertexRemoval,
              this
            ),
          this.options.allowSelfIntersection
            ? (this.cachedColor = void 0)
            : (this._layer.options.color !== '#f00000ff'
                ? ((this.cachedColor = this._layer.options.color),
                  (this.isRed = !1))
                : (this.isRed = !0),
              this._handleLayerStyle()),
          this._fireEnable();
      }
    },
    disable() {
      if (!this.enabled() || this._dragging) return;
      (this._enabled = !1),
        this._markerGroup.clearLayers(),
        this._markerGroup.removeFrom(this._map),
        this._layer.off('remove', this.disable, this),
        this.options.allowSelfIntersection ||
          this._layer.off(
            'pm:vertexremoved',
            this._handleSelfIntersectionOnVertexRemoval,
            this
          );
      let t = this._layer._path
        ? this._layer._path
        : this._layer._renderer._container;
      L.DomUtil.removeClass(t, 'leaflet-pm-draggable'),
        this._layerEdited && this._fireUpdate(),
        (this._layerEdited = !1),
        this._fireDisable();
    },
    enabled() {
      return this._enabled;
    },
    toggleEdit(t) {
      return this.enabled() ? this.disable() : this.enable(t), this.enabled();
    },
    applyOptions() {
      this.options.snappable
        ? this._initSnappableMarkers()
        : this._disableSnapping();
    },
    _initMarkers() {
      let t = this._map,
        e = this._layer.getLatLngs();
      this._markerGroup && this._markerGroup.clearLayers(),
        (this._markerGroup = new L.FeatureGroup()),
        (this._markerGroup._pmTempLayer = !0);
      let r = (i) => {
        if (Array.isArray(i[0])) return i.map(r, this);
        let n = i.map(this._createMarker, this);
        return (
          this.options.hideMiddleMarkers !== !0 &&
            i.map((a, o) => {
              let u = this.isPolygon() ? (o + 1) % i.length : o + 1;
              return this._createMiddleMarker(n[o], n[u]);
            }),
          n
        );
      };
      (this._markers = r(e)),
        this.filterMarkerGroup(),
        t.addLayer(this._markerGroup);
    },
    _createMarker(t) {
      let e = new L.Marker(t, {
        draggable: !0,
        icon: L.divIcon({ className: 'marker-icon' }),
      });
      return (
        this._setPane(e, 'vertexPane'),
        (e._pmTempLayer = !0),
        this.options.rotate
          ? (e.on('dragstart', this._onRotateStart, this),
            e.on('drag', this._onRotate, this),
            e.on('dragend', this._onRotateEnd, this))
          : (e.on('click', this._onVertexClick, this),
            e.on('dragstart', this._onMarkerDragStart, this),
            e.on('move', this._onMarkerDrag, this),
            e.on('dragend', this._onMarkerDragEnd, this),
            this.options.preventMarkerRemoval ||
              e.on(this.options.removeVertexOn, this._removeMarker, this)),
        this._markerGroup.addLayer(e),
        e
      );
    },
    _createMiddleMarker(t, e) {
      if (!t || !e) return !1;
      let r = L.PM.Utils.calcMiddleLatLng(
          this._map,
          t.getLatLng(),
          e.getLatLng()
        ),
        i = this._createMarker(r),
        n = L.divIcon({ className: 'marker-icon marker-icon-middle' });
      return (
        i.setIcon(n),
        (i.leftM = t),
        (i.rightM = e),
        (t._middleMarkerNext = i),
        (e._middleMarkerPrev = i),
        i.on(this.options.addVertexOn, this._onMiddleMarkerClick, this),
        i.on('movestart', this._onMiddleMarkerMoveStart, this),
        i
      );
    },
    _onMiddleMarkerClick(t) {
      let e = t.target;
      if (!this._vertexValidation('add', t)) return;
      let r = L.divIcon({ className: 'marker-icon' });
      e.setIcon(r), this._addMarker(e, e.leftM, e.rightM);
    },
    _onMiddleMarkerMoveStart(t) {
      let e = t.target;
      if (
        (e.on('moveend', this._onMiddleMarkerMoveEnd, this),
        !this._vertexValidation('add', t))
      ) {
        e.on('move', this._onMiddleMarkerMovePrevent, this);
        return;
      }
      (e._dragging = !0), this._addMarker(e, e.leftM, e.rightM);
    },
    _onMiddleMarkerMovePrevent(t) {
      let e = t.target;
      this._vertexValidationDrag(e);
    },
    _onMiddleMarkerMoveEnd(t) {
      let e = t.target;
      if (
        (e.off('move', this._onMiddleMarkerMovePrevent, this),
        e.off('moveend', this._onMiddleMarkerMoveEnd, this),
        !this._vertexValidationDragEnd(e))
      )
        return;
      let r = L.divIcon({ className: 'marker-icon' });
      e.setIcon(r),
        setTimeout(() => {
          delete e._dragging;
        }, 100);
    },
    _addMarker(t, e, r) {
      t.off('movestart', this._onMiddleMarkerMoveStart, this),
        t.off(this.options.addVertexOn, this._onMiddleMarkerClick, this);
      let i = t.getLatLng(),
        n = this._layer._latlngs;
      delete t.leftM, delete t.rightM;
      let {
          indexPath: a,
          index: o,
          parentPath: u,
        } = L.PM.Utils.findDeepMarkerIndex(this._markers, e),
        c = a.length > 1 ? (0, Pt.default)(n, u) : n,
        f = a.length > 1 ? (0, Pt.default)(this._markers, u) : this._markers;
      c.splice(o + 1, 0, i),
        f.splice(o + 1, 0, t),
        this._layer.setLatLngs(n),
        this.options.hideMiddleMarkers !== !0 &&
          (this._createMiddleMarker(e, t), this._createMiddleMarker(t, r)),
        this._fireEdit(),
        (this._layerEdited = !0),
        this._fireChange(this._layer.getLatLngs(), 'Edit'),
        this._fireVertexAdded(
          t,
          L.PM.Utils.findDeepMarkerIndex(this._markers, t).indexPath,
          i
        ),
        this.options.snappable && this._initSnappableMarkers();
    },
    hasSelfIntersection() {
      return Nt(this._layer.toGeoJSON(15)).features.length > 0;
    },
    _handleSelfIntersectionOnVertexRemoval() {
      this._handleLayerStyle(!0) &&
        (this._layer.setLatLngs(this._coordsBeforeEdit),
        (this._coordsBeforeEdit = null),
        this._initMarkers());
    },
    _handleLayerStyle(t) {
      let e = this._layer,
        r,
        i;
      if (
        (this.options.allowSelfIntersection
          ? (r = !1)
          : ((i = Nt(this._layer.toGeoJSON(15))), (r = i.features.length > 0)),
        r)
      ) {
        if (
          (!this.options.allowSelfIntersection &&
            this.options.allowSelfIntersectionEdit &&
            this._updateDisabledMarkerStyle(this._markers, !0),
          this.isRed)
        )
          return r;
        t
          ? this._flashLayer()
          : (e.setStyle({ color: '#f00000ff' }), (this.isRed = !0)),
          this._fireIntersect(i);
      } else
        e.setStyle({ color: this.cachedColor }),
          (this.isRed = !1),
          !this.options.allowSelfIntersection &&
            this.options.allowSelfIntersectionEdit &&
            this._updateDisabledMarkerStyle(this._markers, !1);
      return r;
    },
    _flashLayer() {
      this.cachedColor || (this.cachedColor = this._layer.options.color),
        this._layer.setStyle({ color: '#f00000ff' }),
        (this.isRed = !0),
        window.setTimeout(() => {
          this._layer.setStyle({ color: this.cachedColor }), (this.isRed = !1);
        }, 200);
    },
    _updateDisabledMarkerStyle(t, e) {
      t.forEach((r) => {
        Array.isArray(r)
          ? this._updateDisabledMarkerStyle(r, e)
          : r._icon &&
            (e && !this._checkMarkerAllowedToDrag(r)
              ? L.DomUtil.addClass(r._icon, 'vertexmarker-disabled')
              : L.DomUtil.removeClass(r._icon, 'vertexmarker-disabled'));
      });
    },
    _removeMarker(t) {
      let e = t.target;
      if (!this._vertexValidation('remove', t)) return;
      this.options.allowSelfIntersection ||
        (this._coordsBeforeEdit = bt(this._layer, this._layer.getLatLngs()));
      let r = this._layer.getLatLngs(),
        {
          indexPath: i,
          index: n,
          parentPath: a,
        } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
      if (!i) return;
      let o = i.length > 1 ? (0, Pt.default)(r, a) : r,
        u = i.length > 1 ? (0, Pt.default)(this._markers, a) : this._markers;
      if (
        !this.options.removeLayerBelowMinVertexCount &&
        (o.length <= 2 || (this.isPolygon() && o.length <= 3))
      ) {
        this._flashLayer();
        return;
      }
      o.splice(n, 1),
        this._layer.setLatLngs(r),
        this.isPolygon() && o.length <= 2 && o.splice(0, o.length);
      let c = !1;
      if (
        (o.length <= 1 &&
          (o.splice(0, o.length),
          a.length > 1 && i.length > 1 && (r = be(r)),
          this._layer.setLatLngs(r),
          this._initMarkers(),
          (c = !0)),
        Le(r) || this._layer.remove(),
        (r = be(r)),
        this._layer.setLatLngs(r),
        (this._markers = be(this._markers)),
        !c &&
          ((u =
            i.length > 1 ? (0, Pt.default)(this._markers, a) : this._markers),
          e._middleMarkerPrev &&
            this._markerGroup.removeLayer(e._middleMarkerPrev),
          e._middleMarkerNext &&
            this._markerGroup.removeLayer(e._middleMarkerNext),
          this._markerGroup.removeLayer(e),
          u))
      ) {
        let f, v;
        if (
          (this.isPolygon()
            ? ((f = (n + 1) % u.length), (v = (n + (u.length - 1)) % u.length))
            : ((v = n - 1 < 0 ? void 0 : n - 1),
              (f = n + 1 >= u.length ? void 0 : n + 1)),
          f !== v)
        ) {
          let b = u[v],
            E = u[f];
          this.options.hideMiddleMarkers !== !0 &&
            this._createMiddleMarker(b, E);
        }
        u.splice(n, 1);
      }
      this._fireEdit(),
        (this._layerEdited = !0),
        this._fireVertexRemoved(e, i),
        this._fireChange(this._layer.getLatLngs(), 'Edit');
    },
    updatePolygonCoordsFromMarkerDrag(t) {
      let e = this._layer.getLatLngs(),
        r = t.getLatLng(),
        {
          indexPath: i,
          index: n,
          parentPath: a,
        } = L.PM.Utils.findDeepMarkerIndex(this._markers, t);
      (i.length > 1 ? (0, Pt.default)(e, a) : e).splice(n, 1, r),
        this._layer.setLatLngs(e);
    },
    _getNeighborMarkers(t) {
      let {
          indexPath: e,
          index: r,
          parentPath: i,
        } = L.PM.Utils.findDeepMarkerIndex(this._markers, t),
        n = e.length > 1 ? (0, Pt.default)(this._markers, i) : this._markers,
        a = (r + 1) % n.length,
        o = (r + (n.length - 1)) % n.length,
        u = n[o],
        c = n[a];
      return { prevMarker: u, nextMarker: c };
    },
    _checkMarkerAllowedToDrag(t) {
      let { prevMarker: e, nextMarker: r } = this._getNeighborMarkers(t),
        i = L.polyline([e.getLatLng(), t.getLatLng()]),
        n = L.polyline([t.getLatLng(), r.getLatLng()]),
        a = pt(this._layer.toGeoJSON(15), i.toGeoJSON(15)).features.length,
        o = pt(this._layer.toGeoJSON(15), n.toGeoJSON(15)).features.length;
      return (
        t.getLatLng() === this._markers[0][0].getLatLng()
          ? (o += 1)
          : t.getLatLng() ===
              this._markers[0][this._markers[0].length - 1].getLatLng() &&
            (a += 1),
        !(a <= 2 && o <= 2)
      );
    },
    _onMarkerDragStart(t) {
      let e = t.target;
      if (
        (this.cachedColor || (this.cachedColor = this._layer.options.color),
        !this._vertexValidation('move', t))
      )
        return;
      let { indexPath: r } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
      this._fireMarkerDragStart(t, r),
        this.options.allowSelfIntersection ||
          (this._coordsBeforeEdit = bt(this._layer, this._layer.getLatLngs())),
        !this.options.allowSelfIntersection &&
        this.options.allowSelfIntersectionEdit &&
        this.hasSelfIntersection()
          ? (this._markerAllowedToDrag = this._checkMarkerAllowedToDrag(e))
          : (this._markerAllowedToDrag = null);
    },
    _onMarkerDrag(t) {
      let e = t.target;
      if (!this._vertexValidationDrag(e)) return;
      let {
        indexPath: r,
        index: i,
        parentPath: n,
      } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
      if (!r) return;
      if (
        !this.options.allowSelfIntersection &&
        this.options.allowSelfIntersectionEdit &&
        this.hasSelfIntersection() &&
        this._markerAllowedToDrag === !1
      ) {
        this._layer.setLatLngs(this._coordsBeforeEdit),
          this._initMarkers(),
          this._handleLayerStyle();
        return;
      }
      this.updatePolygonCoordsFromMarkerDrag(e);
      let a = r.length > 1 ? (0, Pt.default)(this._markers, n) : this._markers,
        o = (i + 1) % a.length,
        u = (i + (a.length - 1)) % a.length,
        c = e.getLatLng(),
        f = a[u].getLatLng(),
        v = a[o].getLatLng();
      if (e._middleMarkerNext) {
        let b = L.PM.Utils.calcMiddleLatLng(this._map, c, v);
        e._middleMarkerNext.setLatLng(b);
      }
      if (e._middleMarkerPrev) {
        let b = L.PM.Utils.calcMiddleLatLng(this._map, c, f);
        e._middleMarkerPrev.setLatLng(b);
      }
      this.options.allowSelfIntersection || this._handleLayerStyle(),
        this._fireMarkerDrag(t, r),
        this._fireChange(this._layer.getLatLngs(), 'Edit');
    },
    _onMarkerDragEnd(t) {
      let e = t.target;
      if (!this._vertexValidationDragEnd(e)) return;
      let { indexPath: r } = L.PM.Utils.findDeepMarkerIndex(this._markers, e),
        i = this.hasSelfIntersection();
      i &&
        this.options.allowSelfIntersectionEdit &&
        this._markerAllowedToDrag &&
        (i = !1);
      let n = !this.options.allowSelfIntersection && i;
      if ((this._fireMarkerDragEnd(t, r, n), n)) {
        this._layer.setLatLngs(this._coordsBeforeEdit),
          (this._coordsBeforeEdit = null),
          this._initMarkers(),
          this.options.snappable && this._initSnappableMarkers(),
          this._handleLayerStyle(),
          this._fireLayerReset(t, r);
        return;
      }
      !this.options.allowSelfIntersection &&
        this.options.allowSelfIntersectionEdit &&
        this._handleLayerStyle(),
        this._fireEdit(),
        (this._layerEdited = !0),
        this._fireChange(this._layer.getLatLngs(), 'Edit');
    },
    _onVertexClick(t) {
      let e = t.target;
      if (e._dragging) return;
      let { indexPath: r } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
      this._fireVertexClick(t, r);
    },
  });
  H.Polygon = H.Line.extend({
    _shape: 'Polygon',
    _checkMarkerAllowedToDrag(t) {
      let { prevMarker: e, nextMarker: r } = this._getNeighborMarkers(t),
        i = L.polyline([e.getLatLng(), t.getLatLng()]),
        n = L.polyline([t.getLatLng(), r.getLatLng()]),
        a = pt(this._layer.toGeoJSON(15), i.toGeoJSON(15)).features.length,
        o = pt(this._layer.toGeoJSON(15), n.toGeoJSON(15)).features.length;
      return !(a <= 2 && o <= 2);
    },
  });
  H.Rectangle = H.Polygon.extend({
    _shape: 'Rectangle',
    _initMarkers() {
      let t = this._map,
        e = this._findCorners();
      this._markerGroup && this._markerGroup.clearLayers(),
        (this._markerGroup = new L.FeatureGroup()),
        (this._markerGroup._pmTempLayer = !0),
        t.addLayer(this._markerGroup),
        (this._markers = []),
        (this._markers[0] = e.map(this._createMarker, this)),
        ([this._cornerMarkers] = this._markers),
        this._layer.getLatLngs()[0].forEach((r, i) => {
          let n = this._cornerMarkers.find((a) => a._index === i);
          n && n.setLatLng(r);
        });
    },
    applyOptions() {
      this.options.snappable
        ? this._initSnappableMarkers()
        : this._disableSnapping(),
        this._addMarkerEvents();
    },
    _createMarker(t, e) {
      let r = new L.Marker(t, {
        draggable: !0,
        icon: L.divIcon({ className: 'marker-icon' }),
      });
      return (
        this._setPane(r, 'vertexPane'),
        (r._origLatLng = t),
        (r._index = e),
        (r._pmTempLayer = !0),
        r.on('click', this._onVertexClick, this),
        this._markerGroup.addLayer(r),
        r
      );
    },
    _addMarkerEvents() {
      this._markers[0].forEach((t) => {
        t.on('dragstart', this._onMarkerDragStart, this),
          t.on('drag', this._onMarkerDrag, this),
          t.on('dragend', this._onMarkerDragEnd, this),
          this.options.preventMarkerRemoval ||
            t.on('contextmenu', this._removeMarker, this);
      });
    },
    _removeMarker() {
      return null;
    },
    _onMarkerDragStart(t) {
      if (!this._vertexValidation('move', t)) return;
      let e = t.target,
        r = this._cornerMarkers;
      (e._oppositeCornerLatLng = r
        .find((i) => i._index === (e._index + 2) % 4)
        .getLatLng()),
        (e._snapped = !1),
        this._fireMarkerDragStart(t);
    },
    _onMarkerDrag(t) {
      let e = t.target;
      this._vertexValidationDrag(e) &&
        e._index !== void 0 &&
        (this._adjustRectangleForMarkerMove(e),
        this._fireMarkerDrag(t),
        this._fireChange(this._layer.getLatLngs(), 'Edit'));
    },
    _onMarkerDragEnd(t) {
      let e = t.target;
      this._vertexValidationDragEnd(e) &&
        (this._cornerMarkers.forEach((r) => {
          delete r._oppositeCornerLatLng;
        }),
        this._fireMarkerDragEnd(t),
        this._fireEdit(),
        (this._layerEdited = !0),
        this._fireChange(this._layer.getLatLngs(), 'Edit'));
    },
    _adjustRectangleForMarkerMove(t) {
      L.extend(t._origLatLng, t._latlng);
      let e = L.PM.Utils._getRotatedRectangle(
        t.getLatLng(),
        t._oppositeCornerLatLng,
        this.getAngle(),
        this._map
      );
      this._layer.setLatLngs(e), this._adjustAllMarkers(), this._layer.redraw();
    },
    _adjustAllMarkers() {
      let t = this._layer.getLatLngs()[0];
      t && t.length !== 4 && t.length > 0
        ? (t.forEach((r, i) => {
            this._cornerMarkers[i].setLatLng(r);
          }),
          this._cornerMarkers.slice(t.length).forEach((r) => {
            r.setLatLng(t[0]);
          }))
        : !t || !t.length
          ? console.error('The layer has no LatLngs')
          : this._cornerMarkers.forEach((e) => {
              e.setLatLng(t[e._index]);
            });
    },
    _findCorners() {
      this._angle === void 0 &&
        this.setInitAngle(
          ke(
            this._map,
            this._layer.getLatLngs()[0][0],
            this._layer.getLatLngs()[0][1]
          ) || 0
        );
      let t = this._layer.getLatLngs()[0];
      return L.PM.Utils._getRotatedRectangle(
        t[0],
        t[2],
        this.getAngle(),
        this._map || this
      );
    },
  });
  H.CircleMarker = H.extend({
    _shape: 'CircleMarker',
    initialize(t) {
      (this._layer = t),
        (this._enabled = !1),
        (this._minRadiusOption = 'minRadiusCircleMarker'),
        (this._maxRadiusOption = 'maxRadiusCircleMarker'),
        (this._editableOption = 'resizeableCircleMarker'),
        this._updateHiddenPolyCircle();
    },
    enable(t = { draggable: !0, snappable: !0 }) {
      if (
        (L.Util.setOptions(this, t),
        this.options.editable &&
          ((this.options.resizeableCircleMarker = this.options.editable),
          delete this.options.editable),
        !this.options.allowEditing || !this._layer._map)
      ) {
        this.disable();
        return;
      }
      (this._map = this._layer._map),
        this.enabled() && this.disable(),
        this.applyOptions(),
        this._layer.on('remove', this.disable, this),
        (this._enabled = !0),
        this._extendingEnable(),
        this._updateHiddenPolyCircle(),
        this._fireEnable();
    },
    _extendingEnable() {
      this._layer.on('pm:dragstart', this._onDragStart, this),
        this._layer.on('pm:drag', this._onMarkerDrag, this),
        this._layer.on('pm:dragend', this._onMarkerDragEnd, this);
    },
    disable() {
      this.dragging() ||
        (this._map || (this._map = this._layer._map),
        this._map &&
          this.enabled() &&
          (this.layerDragEnabled() && this.disableLayerDrag(),
          this.options[this._editableOption]
            ? (this._helperLayers && this._helperLayers.clearLayers(),
              this._map.off('move', this._syncMarkers, this),
              this._outerMarker.off(
                'drag',
                this._handleOuterMarkerSnapping,
                this
              ))
            : this._map.off('move', this._updateHiddenPolyCircle, this),
          this._extendingDisable(),
          this._layer.off('remove', this.disable, this),
          this._layerEdited && this._fireUpdate(),
          (this._layerEdited = !1),
          this._fireDisable(),
          (this._enabled = !1)));
    },
    _extendingDisable() {
      this._layer.off('contextmenu', this._removeMarker, this);
    },
    enabled() {
      return this._enabled;
    },
    toggleEdit(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    applyOptions() {
      this.options[this._editableOption]
        ? (this._initMarkers(),
          this._map.on('move', this._syncMarkers, this),
          this.options.snappable
            ? (this._initSnappableMarkers(),
              this._outerMarker.on(
                'drag',
                this._handleOuterMarkerSnapping,
                this
              ),
              this._outerMarker.on('move', this._syncHintLine, this),
              this._outerMarker.on('move', this._syncCircleRadius, this),
              this._centerMarker.on('move', this._moveCircle, this))
            : this._disableSnapping())
        : (this.options.draggable && this.enableLayerDrag(),
          this._map.on('move', this._updateHiddenPolyCircle, this),
          this.options.snappable
            ? this._initSnappableMarkersDrag()
            : this._disableSnappingDrag()),
        this._extendingApplyOptions();
    },
    _extendingApplyOptions() {
      this.options.preventMarkerRemoval ||
        this._layer.on('contextmenu', this._removeMarker, this);
    },
    _initMarkers() {
      let t = this._map;
      this._helperLayers && this._helperLayers.clearLayers(),
        (this._helperLayers = new L.FeatureGroup()),
        (this._helperLayers._pmTempLayer = !0),
        this._helperLayers.addTo(t);
      let e = this._layer.getLatLng(),
        r = this._layer._radius,
        i = this._getLatLngOnCircle(e, r);
      (this._centerMarker = this._createCenterMarker(e)),
        (this._outerMarker = this._createOuterMarker(i)),
        (this._markers = [this._centerMarker, this._outerMarker]),
        this._createHintLine(this._centerMarker, this._outerMarker);
    },
    _getLatLngOnCircle(t, e) {
      let r = this._map.project(t),
        i = L.point(r.x + e, r.y);
      return this._map.unproject(i);
    },
    _createHintLine(t, e) {
      let r = t.getLatLng(),
        i = e.getLatLng();
      (this._hintline = L.polyline([r, i], this.options.hintlineStyle)),
        this._setPane(this._hintline, 'layerPane'),
        (this._hintline._pmTempLayer = !0),
        this._helperLayers.addLayer(this._hintline);
    },
    _createCenterMarker(t) {
      let e = this._createMarker(t);
      return (
        this.options.draggable
          ? L.DomUtil.addClass(e._icon, 'leaflet-pm-draggable')
          : e.dragging.disable(),
        e
      );
    },
    _createOuterMarker(t) {
      let e = this._createMarker(t);
      return e.on('drag', this._resizeCircle, this), e;
    },
    _createMarker(t) {
      let e = new L.Marker(t, {
        draggable: !0,
        icon: L.divIcon({ className: 'marker-icon' }),
      });
      return (
        this._setPane(e, 'vertexPane'),
        (e._origLatLng = t),
        (e._pmTempLayer = !0),
        e.on('dragstart', this._onMarkerDragStart, this),
        e.on('drag', this._onMarkerDrag, this),
        e.on('dragend', this._onMarkerDragEnd, this),
        e.on('click', this._onVertexClick, this),
        this._helperLayers.addLayer(e),
        e
      );
    },
    _moveCircle(t) {
      if (t.target._cancelDragEventChain) return;
      let r = this._centerMarker.getLatLng();
      this._layer.setLatLng(r);
      let i = this._layer._radius,
        n = this._getLatLngOnCircle(r, i);
      (this._outerMarker._latlng = n),
        this._outerMarker.update(),
        this._syncHintLine(),
        this._updateHiddenPolyCircle(),
        this._fireCenterPlaced('Edit'),
        this._fireChange(this._layer.getLatLng(), 'Edit');
    },
    _syncMarkers() {
      let t = this._layer.getLatLng(),
        e = this._layer._radius,
        r = this._getLatLngOnCircle(t, e);
      this._outerMarker.setLatLng(r),
        this._centerMarker.setLatLng(t),
        this._syncHintLine(),
        this._updateHiddenPolyCircle();
    },
    _resizeCircle() {
      this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker()),
        this._syncHintLine(),
        this._syncCircleRadius();
    },
    _syncCircleRadius() {
      let t = this._centerMarker.getLatLng(),
        e = this._outerMarker.getLatLng(),
        r = this._distanceCalculation(t, e);
      this.options[this._minRadiusOption] &&
      r < this.options[this._minRadiusOption]
        ? this._layer.setRadius(this.options[this._minRadiusOption])
        : this.options[this._maxRadiusOption] &&
            r > this.options[this._maxRadiusOption]
          ? this._layer.setRadius(this.options[this._maxRadiusOption])
          : this._layer.setRadius(r),
        this._updateHiddenPolyCircle(),
        this._fireChange(this._layer.getLatLng(), 'Edit');
    },
    _syncHintLine() {
      let t = this._centerMarker.getLatLng(),
        e = this._outerMarker.getLatLng();
      this._hintline.setLatLngs([t, e]);
    },
    _removeMarker() {
      this.options[this._editableOption] && this.disable(),
        this._layer.remove(),
        this._fireRemove(this._layer),
        this._fireRemove(this._map, this._layer);
    },
    _onDragStart() {
      this._map.pm.Draw.CircleMarker._layerIsDragging = !0;
    },
    _onMarkerDragStart(t) {
      this._vertexValidation('move', t) && this._fireMarkerDragStart(t);
    },
    _onMarkerDrag(t) {
      let e = t.target;
      (e instanceof L.Marker && !this._vertexValidationDrag(e)) ||
        this._fireMarkerDrag(t);
    },
    _onMarkerDragEnd(t) {
      this._extedingMarkerDragEnd();
      let e = t.target;
      this._vertexValidationDragEnd(e) &&
        (this.options[this._editableOption] &&
          (this._fireEdit(), (this._layerEdited = !0)),
        this._fireMarkerDragEnd(t));
    },
    _extedingMarkerDragEnd() {
      this._map.pm.Draw.CircleMarker._layerIsDragging = !1;
    },
    _initSnappableMarkersDrag() {
      let t = this._layer;
      (this.options.snapDistance = this.options.snapDistance || 30),
        (this.options.snapSegment =
          this.options.snapSegment === void 0 ? !0 : this.options.snapSegment),
        t.off('pm:drag', this._handleSnapping, this),
        t.on('pm:drag', this._handleSnapping, this),
        t.off('pm:dragend', this._cleanupSnapping, this),
        t.on('pm:dragend', this._cleanupSnapping, this),
        t.off('pm:dragstart', this._unsnap, this),
        t.on('pm:dragstart', this._unsnap, this);
    },
    _disableSnappingDrag() {
      let t = this._layer;
      t.off('pm:drag', this._handleSnapping, this),
        t.off('pm:dragend', this._cleanupSnapping, this),
        t.off('pm:dragstart', this._unsnap, this);
    },
    _updateHiddenPolyCircle() {
      let t = this._layer._map || this._map;
      if (t) {
        let e = L.PM.Utils.pxRadiusToMeterRadius(
            this._layer.getRadius(),
            t,
            this._layer.getLatLng()
          ),
          r = L.circle(this._layer.getLatLng(), this._layer.options);
        r.setRadius(e);
        let i = t && t.pm._isCRSSimple();
        this._hiddenPolyCircle
          ? this._hiddenPolyCircle.setLatLngs(
              L.PM.Utils.circleToPolygon(r, 200, !i).getLatLngs()
            )
          : (this._hiddenPolyCircle = L.PM.Utils.circleToPolygon(r, 200, !i)),
          this._hiddenPolyCircle._parentCopy ||
            (this._hiddenPolyCircle._parentCopy = this._layer);
      }
    },
    _getNewDestinationOfOuterMarker() {
      let t = this._centerMarker.getLatLng(),
        e = this._outerMarker.getLatLng(),
        r = this._distanceCalculation(t, e);
      return (
        this.options[this._minRadiusOption] &&
        r < this.options[this._minRadiusOption]
          ? (e = Wt(this._map, t, e, this._getMinDistanceInMeter(t)))
          : this.options[this._maxRadiusOption] &&
            r > this.options[this._maxRadiusOption] &&
            (e = Wt(this._map, t, e, this._getMaxDistanceInMeter(t))),
        e
      );
    },
    _handleOuterMarkerSnapping() {
      if (this._outerMarker._snapped) {
        let t = this._centerMarker.getLatLng(),
          e = this._outerMarker.getLatLng(),
          r = this._distanceCalculation(t, e);
        this.options[this._minRadiusOption] &&
        r < this.options[this._minRadiusOption]
          ? this._outerMarker.setLatLng(this._outerMarker._orgLatLng)
          : this.options[this._maxRadiusOption] &&
            r > this.options[this._maxRadiusOption] &&
            this._outerMarker.setLatLng(this._outerMarker._orgLatLng);
      }
      this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker());
    },
    _distanceCalculation(t, e) {
      return this._map.project(t).distanceTo(this._map.project(e));
    },
    _getMinDistanceInMeter(t) {
      return L.PM.Utils.pxRadiusToMeterRadius(
        this.options[this._minRadiusOption],
        this._map,
        t
      );
    },
    _getMaxDistanceInMeter(t) {
      return L.PM.Utils.pxRadiusToMeterRadius(
        this.options[this._maxRadiusOption],
        this._map,
        t
      );
    },
    _onVertexClick(t) {
      t.target._dragging || this._fireVertexClick(t, void 0);
    },
  });
  H.Circle = H.CircleMarker.extend({
    _shape: 'Circle',
    initialize(t) {
      (this._layer = t),
        (this._enabled = !1),
        (this._minRadiusOption = 'minRadiusCircle'),
        (this._maxRadiusOption = 'maxRadiusCircle'),
        (this._editableOption = 'resizableCircle'),
        this._updateHiddenPolyCircle();
    },
    enable(t) {
      L.PM.Edit.CircleMarker.prototype.enable.call(this, t || {});
    },
    _extendingEnable() {},
    _extendingDisable() {
      this._layer.off('remove', this.disable, this);
      let t = this._layer._path
        ? this._layer._path
        : this._layer._renderer._container;
      L.DomUtil.removeClass(t, 'leaflet-pm-draggable');
    },
    _extendingApplyOptions() {},
    _syncMarkers() {},
    _removeMarker() {},
    _onDragStart() {},
    _extedingMarkerDragEnd() {},
    _updateHiddenPolyCircle() {
      let t = this._map && this._map.pm._isCRSSimple();
      this._hiddenPolyCircle
        ? this._hiddenPolyCircle.setLatLngs(
            L.PM.Utils.circleToPolygon(this._layer, 200, !t).getLatLngs()
          )
        : (this._hiddenPolyCircle = L.PM.Utils.circleToPolygon(
            this._layer,
            200,
            !t
          )),
        this._hiddenPolyCircle._parentCopy ||
          (this._hiddenPolyCircle._parentCopy = this._layer);
    },
    _distanceCalculation(t, e) {
      return this._map.distance(t, e);
    },
    _getMinDistanceInMeter() {
      return this.options[this._minRadiusOption];
    },
    _getMaxDistanceInMeter() {
      return this.options[this._maxRadiusOption];
    },
    _onVertexClick(t) {
      t.target._dragging || this._fireVertexClick(t, void 0);
    },
  });
  H.ImageOverlay = H.extend({
    _shape: 'ImageOverlay',
    initialize(t) {
      (this._layer = t), (this._enabled = !1);
    },
    toggleEdit(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    enabled() {
      return this._enabled;
    },
    enable(t = { draggable: !0, snappable: !0 }) {
      if (
        (L.Util.setOptions(this, t),
        (this._map = this._layer._map),
        !!this._map)
      ) {
        if (!this.options.allowEditing) {
          this.disable();
          return;
        }
        this.enabled() || this.disable(),
          this.enableLayerDrag(),
          this._layer.on('remove', this.disable, this),
          (this._enabled = !0),
          (this._otherSnapLayers = this._findCorners()),
          this._fireEnable();
      }
    },
    disable() {
      this._dragging ||
        (this._map || (this._map = this._layer._map),
        this.disableLayerDrag(),
        this._layer.off('remove', this.disable, this),
        this.enabled() ||
          (this._layerEdited && this._fireUpdate(),
          (this._layerEdited = !1),
          this._fireDisable()),
        (this._enabled = !1));
    },
    _findCorners() {
      let t = this._layer.getBounds(),
        e = t.getNorthWest(),
        r = t.getNorthEast(),
        i = t.getSouthEast(),
        n = t.getSouthWest();
      return [e, r, i, n];
    },
  });
  H.Text = H.extend({
    _shape: 'Text',
    initialize(t) {
      (this._layer = t), (this._enabled = !1);
    },
    enable(t) {
      if ((L.Util.setOptions(this, t), !!this.textArea)) {
        if (!this.options.allowEditing || !this._layer._map) {
          this.disable();
          return;
        }
        (this._map = this._layer._map),
          this.enabled() && this.disable(),
          this.applyOptions(),
          (this._safeToCacheDragState = !0),
          this._focusChange(),
          (this.textArea.readOnly = !1),
          this.textArea.classList.remove('pm-disabled'),
          this._layer.on('remove', this.disable, this),
          L.DomEvent.on(this.textArea, 'input', this._autoResize, this),
          L.DomEvent.on(this.textArea, 'focus', this._focusChange, this),
          L.DomEvent.on(this.textArea, 'blur', this._focusChange, this),
          this._layer.on('dblclick', L.DomEvent.stop),
          L.DomEvent.off(
            this.textArea,
            'mousedown',
            this._preventTextSelection
          ),
          (this._enabled = !0),
          this._fireEnable();
      }
    },
    disable() {
      if (!this.enabled()) return;
      this._layer.off('remove', this.disable, this),
        L.DomEvent.off(this.textArea, 'input', this._autoResize, this),
        L.DomEvent.off(this.textArea, 'focus', this._focusChange, this),
        L.DomEvent.off(this.textArea, 'blur', this._focusChange, this),
        L.DomEvent.off(document, 'click', this._documentClick, this),
        this._focusChange(),
        (this.textArea.readOnly = !0),
        this.textArea.classList.add('pm-disabled');
      let t = document.activeElement;
      this.textArea.focus(),
        (this.textArea.selectionStart = 0),
        (this.textArea.selectionEnd = 0),
        L.DomEvent.on(this.textArea, 'mousedown', this._preventTextSelection),
        t.focus(),
        (this._disableOnBlurActive = !1),
        this._layerEdited && this._fireUpdate(),
        (this._layerEdited = !1),
        this._fireDisable(),
        (this._enabled = !1);
    },
    enabled() {
      return this._enabled;
    },
    toggleEdit(t) {
      this.enabled() ? this.disable() : this.enable(t);
    },
    applyOptions() {
      this.options.snappable
        ? this._initSnappableMarkers()
        : this._disableSnapping();
    },
    _initSnappableMarkers() {
      let t = this._layer;
      (this.options.snapDistance = this.options.snapDistance || 30),
        (this.options.snapSegment =
          this.options.snapSegment === void 0 ? !0 : this.options.snapSegment),
        t.off('pm:drag', this._handleSnapping, this),
        t.on('pm:drag', this._handleSnapping, this),
        t.off('pm:dragend', this._cleanupSnapping, this),
        t.on('pm:dragend', this._cleanupSnapping, this),
        t.off('pm:dragstart', this._unsnap, this),
        t.on('pm:dragstart', this._unsnap, this);
    },
    _disableSnapping() {
      let t = this._layer;
      t.off('pm:drag', this._handleSnapping, this),
        t.off('pm:dragend', this._cleanupSnapping, this),
        t.off('pm:dragstart', this._unsnap, this);
    },
    _autoResize() {
      (this.textArea.style.height = '1px'), (this.textArea.style.width = '1px');
      let t = this.textArea.scrollHeight > 21 ? this.textArea.scrollHeight : 21,
        e = this.textArea.scrollWidth > 16 ? this.textArea.scrollWidth : 16;
      (this.textArea.style.height = `${t}px`),
        (this.textArea.style.width = `${e}px`),
        (this._layer.options.text = this.getText()),
        this._fireTextChange(this.getText());
    },
    _disableOnBlur() {
      (this._disableOnBlurActive = !0),
        setTimeout(() => {
          this.enabled() &&
            L.DomEvent.on(document, 'click', this._documentClick, this);
        }, 100);
    },
    _documentClick(t) {
      t.target !== this.textArea &&
        (this.disable(),
        !this.getText() && this.options.removeIfEmpty && this.remove());
    },
    _focusChange(t = {}) {
      let e = this._hasFocus;
      (this._hasFocus = t.type === 'focus'),
        !e != !this._hasFocus &&
          (this._hasFocus
            ? (this._applyFocus(),
              (this._focusText = this.getText()),
              this._fireTextFocus())
            : (this._removeFocus(),
              this._fireTextBlur(),
              this._focusText !== this.getText() &&
                (this._fireEdit(), (this._layerEdited = !0))));
    },
    _applyFocus() {
      this.textArea.classList.add('pm-hasfocus'),
        this._map.dragging &&
          (this._safeToCacheDragState &&
            ((this._originalMapDragState = this._map.dragging._enabled),
            (this._safeToCacheDragState = !1)),
          this._map.dragging.disable());
    },
    _removeFocus() {
      this._map.dragging &&
        (this._originalMapDragState && this._map.dragging.enable(),
        (this._safeToCacheDragState = !0)),
        this.textArea.classList.remove('pm-hasfocus');
    },
    focus() {
      if (!this.enabled()) throw new TypeError('Layer is not enabled');
      this.textArea.focus();
    },
    blur() {
      if (!this.enabled()) throw new TypeError('Layer is not enabled');
      this.textArea.blur(), this._disableOnBlurActive && this.disable();
    },
    hasFocus() {
      return this._hasFocus;
    },
    getElement() {
      return this.textArea;
    },
    setText(t) {
      (this.textArea.value = t), this._autoResize();
    },
    getText() {
      return this.textArea.value;
    },
    _initTextMarker() {
      if (
        ((this.textArea = L.PM.Draw.Text.prototype._createTextArea.call(this)),
        this.options.className)
      ) {
        let e = this.options.className.split(' ');
        this.textArea.classList.add(...e);
      }
      let t = L.PM.Draw.Text.prototype._createTextIcon.call(
        this,
        this.textArea
      );
      this._layer.setIcon(t),
        this._layer.once('add', this._createTextMarker, this);
    },
    _createTextMarker(t = !1) {
      this._layer.off('add', this._createTextMarker, this),
        (this._layer.getElement().tabIndex = -1),
        (this.textArea.wrap = 'off'),
        (this.textArea.style.overflow = 'hidden'),
        (this.textArea.style.height = L.DomUtil.getStyle(
          this.textArea,
          'font-size'
        )),
        (this.textArea.style.width = '1px'),
        this._layer.options.text && this.setText(this._layer.options.text),
        this._autoResize(),
        t === !0 && (this.enable(), this.focus(), this._disableOnBlur());
    },
    _preventTextSelection(t) {
      t.preventDefault();
    },
  });
  var qr = function (e, r, i, n, a, o) {
    this._matrix = [e, r, i, n, a, o];
  };
  qr.init = () => new L.PM.Matrix(1, 0, 0, 1, 0, 0);
  qr.prototype = {
    transform(t) {
      return this._transform(t.clone());
    },
    _transform(t) {
      let e = this._matrix,
        { x: r, y: i } = t;
      return (
        (t.x = e[0] * r + e[1] * i + e[4]),
        (t.y = e[2] * r + e[3] * i + e[5]),
        t
      );
    },
    untransform(t) {
      let e = this._matrix;
      return new L.Point(
        (t.x / e[0] - e[4]) / e[0],
        (t.y / e[2] - e[5]) / e[2]
      );
    },
    clone() {
      let t = this._matrix;
      return new L.PM.Matrix(t[0], t[1], t[2], t[3], t[4], t[5]);
    },
    translate(t) {
      if (t === void 0) return new L.Point(this._matrix[4], this._matrix[5]);
      let e, r;
      return (
        typeof t == 'number' ? ((e = t), (r = t)) : ((e = t.x), (r = t.y)),
        this._add(1, 0, 0, 1, e, r)
      );
    },
    scale(t, e) {
      if (t === void 0) return new L.Point(this._matrix[0], this._matrix[3]);
      let r, i;
      return (
        (e = e || L.point(0, 0)),
        typeof t == 'number' ? ((r = t), (i = t)) : ((r = t.x), (i = t.y)),
        this._add(r, 0, 0, i, e.x, e.y)._add(1, 0, 0, 1, -e.x, -e.y)
      );
    },
    rotate(t, e) {
      let r = Math.cos(t),
        i = Math.sin(t);
      return (
        (e = e || new L.Point(0, 0)),
        this._add(r, i, -i, r, e.x, e.y)._add(1, 0, 0, 1, -e.x, -e.y)
      );
    },
    flip() {
      return (this._matrix[1] *= -1), (this._matrix[2] *= -1), this;
    },
    _add(t, e, r, i, n, a) {
      let o = [[], [], []],
        u = this._matrix,
        c = [
          [u[0], u[2], u[4]],
          [u[1], u[3], u[5]],
          [0, 0, 1],
        ],
        f = [
          [t, r, n],
          [e, i, a],
          [0, 0, 1],
        ],
        v;
      t &&
        t instanceof L.PM.Matrix &&
        ((u = t._matrix),
        (f = [
          [u[0], u[2], u[4]],
          [u[1], u[3], u[5]],
          [0, 0, 1],
        ]));
      for (let b = 0; b < 3; b += 1)
        for (let E = 0; E < 3; E += 1) {
          v = 0;
          for (let M = 0; M < 3; M += 1) v += c[b][M] * f[M][E];
          o[b][E] = v;
        }
      return (
        (this._matrix = [o[0][0], o[1][0], o[0][1], o[1][1], o[0][2], o[1][2]]),
        this
      );
    },
  };
  var vl = qr;
  var Zm = {
      calcMiddleLatLng(t, e, r) {
        let i = t.project(e),
          n = t.project(r);
        return t.unproject(i._add(n)._divideBy(2));
      },
      findLayers(t) {
        let e = [];
        return (
          t.eachLayer((r) => {
            (r instanceof L.Polyline ||
              r instanceof L.Marker ||
              r instanceof L.Circle ||
              r instanceof L.CircleMarker ||
              r instanceof L.ImageOverlay) &&
              e.push(r);
          }),
          (e = e.filter((r) => !!r.pm)),
          (e = e.filter((r) => !r._pmTempLayer)),
          (e = e.filter(
            (r) =>
              (!L.PM.optIn && !r.options.pmIgnore) ||
              (L.PM.optIn && r.options.pmIgnore === !1)
          )),
          e
        );
      },
      circleToPolygon(t, e = 60, r = !0) {
        let i = t.getLatLng(),
          n = t.getRadius(),
          a = ur(i, n, e, 0, r),
          o = [];
        for (let u = 0; u < a.length; u += 1) {
          let c = [a[u].lat, a[u].lng];
          o.push(c);
        }
        return L.polygon(o, t.options);
      },
      disablePopup(t) {
        t.getPopup() && ((t._tempPopupCopy = t.getPopup()), t.unbindPopup());
      },
      enablePopup(t) {
        t._tempPopupCopy &&
          (t.bindPopup(t._tempPopupCopy), delete t._tempPopupCopy);
      },
      _fireEvent(t, e, r, i = !1) {
        t.fire(e, r, i);
        let { groups: n } = this.getAllParentGroups(t);
        n.forEach((a) => {
          a.fire(e, r, i);
        });
      },
      getAllParentGroups(t) {
        let e = [],
          r = [],
          i = (n) => {
            for (let a in n._eventParents)
              if (e.indexOf(a) === -1) {
                e.push(a);
                let o = n._eventParents[a];
                r.push(o), i(o);
              }
          };
        return !t._pmLastGroupFetch ||
          !t._pmLastGroupFetch.time ||
          new Date().getTime() - t._pmLastGroupFetch.time > 1e3
          ? (i(t),
            (t._pmLastGroupFetch = {
              time: new Date().getTime(),
              groups: r,
              groupIds: e,
            }),
            { groupIds: e, groups: r })
          : {
              groups: t._pmLastGroupFetch.groups,
              groupIds: t._pmLastGroupFetch.groupIds,
            };
      },
      createGeodesicPolygon: ur,
      getTranslation: N,
      findDeepCoordIndex(t, e, r = !0) {
        let i,
          n = (o) => (u, c) => {
            let f = o.concat(c);
            if (r) {
              if (u.lat && u.lat === e.lat && u.lng === e.lng)
                return (i = f), !0;
            } else if (u.lat && L.latLng(u).equals(e)) return (i = f), !0;
            return Array.isArray(u) && u.some(n(f));
          };
        t.some(n([]));
        let a = {};
        return (
          i &&
            (a = {
              indexPath: i,
              index: i[i.length - 1],
              parentPath: i.slice(0, i.length - 1),
            }),
          a
        );
      },
      findDeepMarkerIndex(t, e) {
        let r,
          i = (a) => (o, u) => {
            let c = a.concat(u);
            return o._leaflet_id === e._leaflet_id
              ? ((r = c), !0)
              : Array.isArray(o) && o.some(i(c));
          };
        t.some(i([]));
        let n = {};
        return (
          r &&
            (n = {
              indexPath: r,
              index: r[r.length - 1],
              parentPath: r.slice(0, r.length - 1),
            }),
          n
        );
      },
      _getIndexFromSegment(t, e) {
        if (e && e.length === 2) {
          let r = this.findDeepCoordIndex(t, e[0]),
            i = this.findDeepCoordIndex(t, e[1]),
            n = Math.max(r.index, i.index);
          return (
            (r.index === 0 || i.index === 0) && n !== 1 && (n += 1),
            {
              indexA: r,
              indexB: i,
              newIndex: n,
              indexPath: r.indexPath,
              parentPath: r.parentPath,
            }
          );
        }
        return null;
      },
      _getRotatedRectangle(t, e, r, i) {
        let n = Tt(i, t),
          a = Tt(i, e),
          o = (r * Math.PI) / 180,
          u = Math.cos(o),
          c = Math.sin(o),
          f = (a.x - n.x) * u + (a.y - n.y) * c,
          v = (a.y - n.y) * u - (a.x - n.x) * c,
          b = f * u + n.x,
          E = f * c + n.y,
          M = -v * c + n.x,
          B = v * u + n.y,
          I = Pe(i, n),
          g = Pe(i, { x: b, y: E }),
          _ = Pe(i, a),
          w = Pe(i, { x: M, y: B });
        return [I, g, _, w];
      },
      pxRadiusToMeterRadius(t, e, r) {
        let i = e.project(r),
          n = L.point(i.x + t, i.y);
        return e.distance(e.unproject(n), r);
      },
    },
    Ll = Zm;
  L.PM = L.PM || {
    version: jr.version,
    Map: Co,
    Toolbar: Eo,
    Draw: J,
    Edit: H,
    Utils: Ll,
    Matrix: vl,
    activeLang: 'en',
    optIn: !1,
    initialize(t) {
      this.addInitHooks(t);
    },
    setOptIn(t) {
      this.optIn = !!t;
    },
    addInitHooks() {
      function t() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Map(this))
            : this.options.pmIgnore || (this.pm = new L.PM.Map(this)),
          this.pm && this.pm.setGlobalOptions({});
      }
      L.Map.addInitHook(t);
      function e() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 &&
              (this.pm = new L.PM.Edit.LayerGroup(this))
            : this.options.pmIgnore ||
              (this.pm = new L.PM.Edit.LayerGroup(this));
      }
      L.LayerGroup.addInitHook(e);
      function r() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 &&
              (this.options.textMarker
                ? ((this.pm = new L.PM.Edit.Text(this)),
                  this.options._textMarkerOverPM || this.pm._initTextMarker(),
                  delete this.options._textMarkerOverPM)
                : (this.pm = new L.PM.Edit.Marker(this)))
            : this.options.pmIgnore ||
              (this.options.textMarker
                ? ((this.pm = new L.PM.Edit.Text(this)),
                  this.options._textMarkerOverPM || this.pm._initTextMarker(),
                  delete this.options._textMarkerOverPM)
                : (this.pm = new L.PM.Edit.Marker(this)));
      }
      L.Marker.addInitHook(r);
      function i() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 &&
              (this.pm = new L.PM.Edit.CircleMarker(this))
            : this.options.pmIgnore ||
              (this.pm = new L.PM.Edit.CircleMarker(this));
      }
      L.CircleMarker.addInitHook(i);
      function n() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 &&
              (this.pm = new L.PM.Edit.Line(this))
            : this.options.pmIgnore || (this.pm = new L.PM.Edit.Line(this));
      }
      L.Polyline.addInitHook(n);
      function a() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 &&
              (this.pm = new L.PM.Edit.Polygon(this))
            : this.options.pmIgnore || (this.pm = new L.PM.Edit.Polygon(this));
      }
      L.Polygon.addInitHook(a);
      function o() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 &&
              (this.pm = new L.PM.Edit.Rectangle(this))
            : this.options.pmIgnore ||
              (this.pm = new L.PM.Edit.Rectangle(this));
      }
      L.Rectangle.addInitHook(o);
      function u() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 &&
              (this.pm = new L.PM.Edit.Circle(this))
            : this.options.pmIgnore || (this.pm = new L.PM.Edit.Circle(this));
      }
      L.Circle.addInitHook(u);
      function c() {
        (this.pm = void 0),
          L.PM.optIn
            ? this.options.pmIgnore === !1 &&
              (this.pm = new L.PM.Edit.ImageOverlay(this))
            : this.options.pmIgnore ||
              (this.pm = new L.PM.Edit.ImageOverlay(this));
      }
      L.ImageOverlay.addInitHook(c);
    },
    reInitLayer(t) {
      t instanceof L.LayerGroup &&
        t.eachLayer((e) => {
          this.reInitLayer(e);
        }),
        t.pm ||
          (L.PM.optIn && t.options.pmIgnore !== !1) ||
          t.options.pmIgnore ||
          (t instanceof L.Map
            ? (t.pm = new L.PM.Map(t))
            : t instanceof L.Marker
              ? t.options.textMarker
                ? ((t.pm = new L.PM.Edit.Text(t)),
                  t.pm._initTextMarker(),
                  t.pm._createTextMarker(!1))
                : (t.pm = new L.PM.Edit.Marker(t))
              : t instanceof L.Circle
                ? (t.pm = new L.PM.Edit.Circle(t))
                : t instanceof L.CircleMarker
                  ? (t.pm = new L.PM.Edit.CircleMarker(t))
                  : t instanceof L.Rectangle
                    ? (t.pm = new L.PM.Edit.Rectangle(t))
                    : t instanceof L.Polygon
                      ? (t.pm = new L.PM.Edit.Polygon(t))
                      : t instanceof L.Polyline
                        ? (t.pm = new L.PM.Edit.Line(t))
                        : t instanceof L.LayerGroup
                          ? (t.pm = new L.PM.Edit.LayerGroup(t))
                          : t instanceof L.ImageOverlay &&
                            (t.pm = new L.PM.Edit.ImageOverlay(t)));
    },
  };
  L.version === '1.7.1' &&
    L.Canvas.include({
      _onClick(t) {
        let e = this._map.mouseEventToLayerPoint(t),
          r,
          i;
        for (let n = this._drawFirst; n; n = n.next)
          (r = n.layer),
            r.options.interactive &&
              r._containsPoint(e) &&
              (!(t.type === 'click' || t.type === 'preclick') ||
                !this._map._draggableMoved(r)) &&
              (i = r);
        i && (L.DomEvent.fakeStop(t), this._fireEvent([i], t));
      },
    });
  L.PM.initialize();
})();
/*! Bundled license information:

polygon-clipping/dist/polygon-clipping.umd.js:
  (**
   * splaytree v3.1.0
   * Fast Splay tree for Node and browser
   *
   * @author Alexander Milevski <info@w8r.name>
   * @license MIT
   * @preserve
   *)
*/
