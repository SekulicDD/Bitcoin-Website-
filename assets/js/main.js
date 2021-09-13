
window.onload = function () {
    menuCreate();

    //menu animacija
    $("li").hover(function () {
        $(this).find("ul").stop(true, true).slideDown(300);
        $(this).children().stop(true, true).addClass("hover2");
    },
        function () {
            $(this).find("ul").stop(true, true).slideUp(150);
            $(this).children().stop(true, true).removeClass("hover2");
        });

    //footer
    

    //mali menu
    $("#smallHeader").click(function () {
        $(this).find("ul").stop(true, true).toggle(300);
    });

    let fileName = location.pathname.split("/").slice(-1);
    if ((fileName == "index.html") || (fileName == "")) {

        //BUY ME DUGME
        $("#dugme").hover(function () {

            $(this).stop(true, true).css({ color: "#FF9500" });

        },
            function () {
                $(this).stop(true, true).css({ color: "black" });

            });

        $(".funFact").click(function (e) {
            e.preventDefault();
            $(this).find("p").stop(true, true).toggle(300);
        });

        $(".funFact").hover(function () {         
            $(this).find("a").stop(true, true).addClass("hover2");
        },
            function () {
                $(this).find("a").stop(true, true).removeClass("hover2");
            });

        

        //fotorama i go to top preuzeti plugini
        fotoramaVersion = "4.6.4", function (t, e, n, o, i) { "use strict"; function r() { } function a(t, e, n) { return Math.max(isNaN(e) ? -1 / 0 : e, Math.min(isNaN(n) ? 1 / 0 : n, t)) } function s(t) { var e = {}; return Me ? e.transform = "translate3d(" + t + "px,0,0)" : e.left = t, e } function u(t) { return { "transition-duration": t + "ms" } } function c(t, e) { return isNaN(t) ? e : t } function l(t, e) { return c(+String(t).replace(e || "px", "")) } function f(t, e) { return c(function (t) { return /%$/.test(t) ? l(t, "%") : i }(t) / 100 * e, l(t)) } function d(t) { return (!isNaN(l(t)) || !isNaN(l(t, "%"))) && t } function h(t, e, n, o) { return (t - (o || 0)) * (e + (n || 0)) } function p(t, e, n, o) { var i, r = t.data(); r && (r.onEndFn = function () { i || (i = !0, clearTimeout(r.tT), n()) }, r.tProp = e, clearTimeout(r.tT), r.tT = setTimeout(function () { r.onEndFn() }, 1.5 * o), function (t) { var e = t.data(); e.tEnd || (O(t[0], { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", msTransition: "MSTransitionEnd", transition: "transitionend" }[ue.prefixed("transition")], function (t) { e.tProp && t.propertyName.match(e.tProp) && e.onEndFn() }), e.tEnd = !0) }(t)) } function m(t, e) { if (t.length) { var n = t.data(); Me ? (t.css(u(0)), n.onEndFn = r, clearTimeout(n.tT)) : t.stop(); var o = v(e, function () { return function (t) { return Me ? +function (t) { return t.match(/ma/) && t.match(/-?\d+(?!d)/g)[t.match(/3d/) ? 12 : 4] }(t.css("transform")) : +t.css("left").replace("px", "") }(t) }); return t.css(s(o)), o } } function v() { for (var t, e = 0, n = arguments.length; n > e && "number" != typeof (t = e ? arguments[e]() : arguments[e]); e++); return t } function g(t, e) { return Math.round(t + (e - t) / 1.5) } function w() { return w.p = w.p || ("https:" === n.protocol ? "https://" : "http://"), w.p } function y(t) { var n = e.createElement("a"); return n.href = t, n } function b(t, e) { if ("string" != typeof t) return t; var n, o; if ((t = y(t)).host.match(/youtube\.com/) && t.search) { if (n = t.search.split("v=")[1]) { var i = n.indexOf("&"); -1 !== i && (n = n.substring(0, i)), o = "youtube" } } else t.host.match(/youtube\.com|youtu\.be/) ? (n = t.pathname.replace(/^\/(embed\/|v\/)?/, "").replace(/\/.*/, ""), o = "youtube") : t.host.match(/vimeo\.com/) && (o = "vimeo", n = t.pathname.replace(/^\/(video\/)?/, "").replace(/\/.*/, "")); return n && o || !e || (n = t.href, o = "custom"), !!n && { id: n, type: o, s: t.search.replace(/^\?/, ""), p: w() } } function x(t, e, n) { var i, r, a = t.video; return "youtube" === a.type ? (i = (r = w() + "img.youtube.com/vi/" + a.id + "/default.jpg").replace(/\/default.jpg$/, "/hqdefault.jpg"), t.thumbsReady = !0) : "vimeo" === a.type ? o.ajax({ url: w() + "vimeo.com/api/v2/video/" + a.id + ".json", dataType: "jsonp", success: function (o) { t.thumbsReady = !0, T(e, { img: o[0].thumbnail_large, thumb: o[0].thumbnail_small }, t.i, n) } }) : t.thumbsReady = !0, { img: i, thumb: r } } function T(t, e, n, i) { for (var r = 0, a = t.length; a > r; r++) { var s = t[r]; if (s.i === n && s.thumbsReady) { var u = { videoReady: !0 }; u[De] = u[We] = u[Re] = !1, i.splice(r, 1, o.extend({}, s, u, e)); break } } } function _(t) { function e(t, e, n) { var i = n.thumb && n.img !== n.thumb, r = l(n.width || t.attr("width")), a = l(n.height || t.attr("height")); o.extend(n, { width: r, height: a, thumbratio: A(n.thumbratio || l(n.thumbwidth || e && e.attr("width") || i || r) / l(n.thumbheight || e && e.attr("height") || i || a)) }) } var n = []; return t.children().each(function () { var t = o(this), i = q(o.extend(t.data(), { id: t.attr("id") })); if (t.is("a, img")) !function (t, n, i) { var r = t.children("img").eq(0), a = t.attr("href"), s = t.attr("src"), u = r.attr("src"), c = n.video, l = !!i && b(a, !0 === c); l ? a = !1 : l = c, e(t, r, o.extend(n, { video: l, img: n.img || a || s || u, thumb: n.thumb || u || s || a })) }(t, i, !0); else { if (t.is(":empty")) return; e(t, null, o.extend(i, { html: this, _html: t.html() })) } n.push(i) }), n } function C(t) { return !o.contains(e.documentElement, t) } function k(t, e, n, o) { return k.i || (k.i = 1, k.ii = [!0]), o = o || k.i, void 0 === k.ii[o] && (k.ii[o] = !0), t() ? e() : k.ii[o] && setTimeout(function () { k.ii[o] && k(t, e, n, o) }, n || 100), k.i++ } function M(t) { n.replace(n.protocol + "//" + n.host + n.pathname.replace(/^\/?/, "/") + n.search + "#" + t) } function S(t, e, n, o) { var i = t.data(), r = i.measures; if (r && (!i.l || i.l.W !== r.width || i.l.H !== r.height || i.l.r !== r.ratio || i.l.w !== e.w || i.l.h !== e.h || i.l.m !== n || i.l.p !== o)) { var s = r.width, u = r.height, c = e.w / e.h, l = r.ratio >= c, h = "scaledown" === n, p = "contain" === n, m = "cover" === n, v = function (t) { return { x: d((t = (t + "").split(/\s+/))[0]) || Xe, y: d(t[1]) || Xe } }(o); l && (h || p) || !l && m ? u = (s = a(e.w, 0, h ? s : 1 / 0)) / r.ratio : (l && m || !l && (h || p)) && (s = (u = a(e.h, 0, h ? u : 1 / 0)) * r.ratio), t.css({ width: s, height: u, left: f(v.x, e.w - s), top: f(v.y, e.h - u) }), i.l = { W: r.width, H: r.height, r: r.ratio, w: e.w, h: e.h, m: n, p: o } } return !0 } function F(t, e, n) { return e !== n && (e >= t ? "left" : t >= n ? "right" : "left right") } function E(t, e, n, o) { if (!n) return !1; if (!isNaN(t)) return t - (o ? 0 : 1); for (var i, r = 0, a = e.length; a > r; r++) { if (e[r].id === t) { i = r; break } } return i } function P(t, e, n) { n = n || {}, t.each(function () { var t, i = o(this), a = i.data(); a.clickOn || (a.clickOn = !0, o.extend(V(i, { onStart: function (e) { t = e, (n.onStart || r).call(this, e) }, onMove: n.onMove || r, onTouchEnd: n.onTouchEnd || r, onEnd: function (n) { n.moved || e.call(this, t) } }), { noMove: !0 })) }) } function j(t, e) { return '<div class="' + t + '">' + (e || "") + "</div>" } function N(t) { for (var e = t.length; e;) { var n = Math.floor(Math.random() * e--), o = t[e]; t[e] = t[n], t[n] = o } return t } function $(t) { return "[object Array]" == Object.prototype.toString.call(t) && o.map(t, function (t) { return o.extend({}, t) }) } function z(t, e, n) { t.scrollLeft(e || 0).scrollTop(n || 0) } function q(t) { if (t) { var e = {}; return o.each(t, function (t, n) { e[t.toLowerCase()] = n }), e } } function A(t) { if (t) { var e = +t; return isNaN(e) ? +(e = t.split("/"))[0] / +e[1] || i : e } } function O(t, e, n, o) { e && (t.addEventListener ? t.addEventListener(e, n, !!o) : t.attachEvent("on" + e, n)) } function I(t) { return { tabindex: -1 * t + "", disabled: t } } function L(t, e) { O(t, "keyup", function (n) { (function (t) { return !!t.getAttribute("disabled") })(t) || 13 == n.keyCode && e.call(t, n) }) } function D(t, e) { O(t, "focus", t.onfocusin = function (n) { e.call(t, n) }, !0) } function R(t, e) { t.preventDefault ? t.preventDefault() : t.returnValue = !1, e && t.stopPropagation && t.stopPropagation() } function W(t) { return t ? ">" : "<" } function H(t, e) { var n = t.data(), i = Math.round(e.pos), a = function () { n.sliding = !1, (e.onEnd || r)() }; void 0 !== e.overPos && e.overPos !== e.pos && (i = e.overPos, a = function () { H(t, o.extend({}, e, { overPos: e.pos, time: Math.max(ze, e.time / 2) })) }); var c = o.extend(s(i), e.width && { width: e.width }); n.sliding = !0, Me ? (t.css(o.extend(u(e.time), c)), e.time > 10 ? p(t, "transform", a, e.time) : a()) : t.stop().animate(c, e.time, Ke, a) } function K(t, e, n, i, a, s) { var u = void 0 !== s; if (u || (a.push(arguments), Array.prototype.push.call(arguments, a.length), !(a.length > 1))) { t = t || o(t), e = e || o(e); var c = t[0], l = e[0], f = "crossfade" === i.method, d = function () { if (!d.done) { d.done = !0; var t = (u || a.shift()) && a.shift(); t && K.apply(this, t), (i.onEnd || r)(!!t) } }, h = i.time / (s || 1); n.removeClass($t + " " + Nt), t.stop().addClass($t), e.stop().addClass(Nt), f && l && t.fadeTo(0, 0), t.fadeTo(f ? h : 0, 1, f && d), e.fadeTo(h, 0, d), c && f || l || d() } } function X(t) { var e = (t.touches || [])[0] || t; t._x = e.pageX, t._y = e.clientY, t._now = o.now() } function V(t, n) { function i(t) { return f = o(t.target), y.checked = p = m = g = !1, c || y.flow || t.touches && t.touches.length > 1 || t.which > 1 || we && we.type !== t.type && be || (p = n.select && f.is(n.select, w)) ? p : (h = "touchstart" === t.type, m = f.is("a, a *", w), d = y.control, v = y.noMove || y.noSwipe || d ? 16 : y.snap ? 0 : 4, X(t), l = we = t, ye = t.type.replace(/down|start/, "move").replace(/Down/, "Move"), (n.onStart || r).call(w, t, { control: d, $target: f }), c = y.flow = !0, void ((!h || y.go) && R(t))) } function a(t) { if (t.touches && t.touches.length > 1 || je && !t.isPrimary || ye !== t.type || !c) return c && s(), void (n.onTouchEnd || r)(); X(t); var e = Math.abs(t._x - l._x), o = Math.abs(t._y - l._y), i = e - o, a = (y.go || y.x || i >= 0) && !y.noSwipe, u = 0 > i; h && !y.checked ? (c = a) && R(t) : (R(t), (n.onMove || r).call(w, t, { touch: h })), !g && Math.sqrt(Math.pow(e, 2) + Math.pow(o, 2)) > v && (g = !0), y.checked = y.checked || a || u } function s(t) { (n.onTouchEnd || r)(); var e = c; y.control = c = !1, e && (y.flow = !1), !e || m && !y.checked || (t && R(t), be = !0, clearTimeout(xe), xe = setTimeout(function () { be = !1 }, 1e3), (n.onEnd || r).call(w, { moved: g, $target: f, control: d, touch: h, startEvent: l, aborted: !t || "MSPointerCancel" === t.type })) } function u() { y.flow && setTimeout(function () { y.flow = !1 }, $e) } var c, l, f, d, h, p, m, v, g, w = t[0], y = {}; return je ? (O(w, "MSPointerDown", i), O(e, "MSPointerMove", a), O(e, "MSPointerCancel", s), O(e, "MSPointerUp", s)) : (O(w, "touchstart", i), O(w, "touchmove", a), O(w, "touchend", s), O(e, "touchstart", function () { y.flow || setTimeout(function () { y.flow = !0 }, 10) }), O(e, "touchend", u), O(e, "touchcancel", u), Te.on("scroll", u), t.on("mousedown", i), _e.on("mousemove", a).on("mouseup", s)), t.on("click", "a", function (t) { y.checked && R(t) }), y } function B(t, e) { function n(n, o) { T = !0, i = u = n._x, h = n._now, d = [[h, i]], c = l = k.noMove || o ? 0 : m(t, (e.getPos || r)()), (e.onStart || r).call(_, n) } var i, u, c, l, f, d, h, p, v, w, y, b, x, T, _ = t[0], C = t.data(), k = {}; return k = o.extend(V(e.$wrap, o.extend({}, e, { onStart: function (t, e) { v = k.min, w = k.max, y = k.snap, b = t.altKey, T = x = !1, e.control || C.sliding || n(t) }, onMove: function (o, a) { k.noSwipe || (T || n(o), u = o._x, d.push([o._now, u]), f = F(l = c - (i - u), v, w), v >= l ? l = g(l, v) : l >= w && (l = g(l, w)), k.noMove || (t.css(s(l)), x || (x = !0, a.touch || je || t.addClass(Bt)), (e.onMove || r).call(_, o, { pos: l, edge: f }))) }, onEnd: function (i) { if (!k.noSwipe || !i.moved) { T || n(i.startEvent, !0), i.touch || je || t.removeClass(Bt); for (var s, f, h, m, g, x, C, M, S, F = (p = o.now()) - $e, E = null, P = ze, j = e.friction, N = d.length - 1; N >= 0; N--) { if (s = d[N][0], f = Math.abs(s - F), null === E || h > f) E = s, m = d[N][1]; else if (E === F || f > h) break; h = f } C = a(l, v, w); var $ = m - u, z = $ >= 0, q = p - E, A = q > $e, O = !A && l !== c && C === l; y && (C = a(Math[O ? z ? "floor" : "ceil" : "round"](l / y) * y, v, w), v = w = C), O && (y || C === l) && (S = -$ / q, P *= a(Math.abs(S), e.timeLow, e.timeHigh), g = Math.round(l + S * P / j), y || (C = g), (!z && g > w || z && v > g) && (x = z ? v : w, y || (C = x), M = a(C + .03 * (M = g - x), x - 50, x + 50), P = Math.abs((l - M) / (S / j)))), P *= b ? 10 : 1, (e.onEnd || r).call(_, o.extend(i, { moved: i.moved || A && y, pos: l, newPos: C, overPos: M, time: P })) } } })), k) } function Y(t, e) { var n, i, a, s = t[0], u = { prevent: {} }; return O(s, Ne, function (t) { var s = t.wheelDeltaY || -1 * t.deltaY || 0, c = t.wheelDeltaX || -1 * t.deltaX || 0, l = Math.abs(c) && !Math.abs(s), f = W(0 > c), d = i === f, h = o.now(), p = $e > h - a; i = f, a = h, l && u.ok && (!u.prevent[f] || n) && (R(t, !0), n && d && p || (e.shift && (n = !0, clearTimeout(u.t), u.t = setTimeout(function () { n = !1 }, qe)), (e.onEnd || r)(t, e.shift ? f : c))) }), u } function Q() { o.each(o.Fotorama.instances, function (t, e) { e.index = t }) } function U(t) { o.Fotorama.instances.push(t), Q() } function G(t) { o.Fotorama.instances.splice(t.index, 1), Q() } var J = "fotorama", Z = "fullscreen", tt = J + "__wrap", et = tt + "--css2", nt = tt + "--css3", ot = tt + "--video", it = tt + "--fade", rt = tt + "--slide", at = tt + "--no-controls", st = tt + "--no-shadows", ut = tt + "--pan-y", ct = tt + "--rtl", lt = tt + "--only-active", ft = tt + "--no-captions", dt = tt + "--toggle-arrows", ht = J + "__stage", pt = ht + "__frame", mt = pt + "--video", vt = ht + "__shaft", gt = J + "__grab", wt = J + "__pointer", yt = J + "__arr", bt = yt + "--disabled", xt = yt + "--prev", Tt = yt + "--next", _t = J + "__nav", Ct = _t + "-wrap", kt = _t + "__shaft", Mt = _t + "--dots", St = _t + "--thumbs", Ft = _t + "__frame", Et = Ft + "--dot", Pt = Ft + "--thumb", jt = J + "__fade", Nt = jt + "-front", $t = jt + "-rear", zt = J + "__shadow" + "s", qt = zt + "--left", At = zt + "--right", Ot = J + "__active", It = J + "__select", Lt = J + "--hidden", Dt = J + "--fullscreen", Rt = J + "__fullscreen-icon", Wt = J + "__error", Ht = J + "__loading", Kt = J + "__loaded", Xt = Kt + "--full", Vt = Kt + "--img", Bt = J + "__grabbing", Yt = J + "__img", Qt = Yt + "--full", Ut = J + "__dot", Gt = J + "__thumb", Jt = Gt + "-border", Zt = J + "__html", te = J + "__video", ee = te + "-play", ne = te + "-close", oe = J + "__caption", ie = J + "__caption__wrap", re = J + "__spinner", ae = '" tabindex="0" role="button', se = o && o.fn.jquery.split("."); if (!se || se[0] < 1 || 1 == se[0] && se[1] < 8) throw "Fotorama requires jQuery 1.8 or later and will not run without it."; var ue = function (t, e, n) { function o(t, e) { return typeof t === e } function i(t, e) { return !!~("" + t).indexOf(e) } function r(t, e) { for (var o in t) { var r = t[o]; if (!i(r, "-") && p[r] !== n) return "pfx" != e || r } return !1 } function a(t, e, i) { for (var r in t) { var a = e[t[r]]; if (a !== n) return !1 === i ? t[r] : o(a, "function") ? a.bind(i || e) : a } return !1 } function s(t, e, n) { var i = t.charAt(0).toUpperCase() + t.slice(1), s = (t + " " + g.join(i + " ") + i).split(" "); return o(e, "string") || o(e, "undefined") ? r(s, e) : a(s = (t + " " + w.join(i + " ") + i).split(" "), e, n) } var u, c, l = {}, f = e.documentElement, d = "modernizr", h = e.createElement(d), p = h.style, m = " -webkit- -moz- -o- -ms- ".split(" "), v = "Webkit Moz O ms", g = v.split(" "), w = v.toLowerCase().split(" "), y = {}, b = [], x = b.slice, T = {}.hasOwnProperty; for (var _ in c = o(T, "undefined") || o(T.call, "undefined") ? function (t, e) { return e in t && o(t.constructor.prototype[e], "undefined") } : function (t, e) { return T.call(t, e) }, Function.prototype.bind || (Function.prototype.bind = function (t) { var e = this; if ("function" != typeof e) throw new TypeError; var n = x.call(arguments, 1), o = function () { if (this instanceof o) { var i = function () { }; i.prototype = e.prototype; var r = new i, a = e.apply(r, n.concat(x.call(arguments))); return Object(a) === a ? a : r } return e.apply(t, n.concat(x.call(arguments))) }; return o }), y.csstransforms3d = function () { return !!s("perspective") }, y) c(y, _) && (u = _.toLowerCase(), l[u] = y[_](), b.push((l[u] ? "" : "no-") + u)); return l.addTest = function (t, e) { if ("object" == typeof t) for (var o in t) c(t, o) && l.addTest(o, t[o]); else { if (t = t.toLowerCase(), l[t] !== n) return l; e = "function" == typeof e ? e() : e, "undefined" != typeof enableClasses && enableClasses && (f.className += " " + (e ? "" : "no-") + t), l[t] = e } return l }, function (t) { p.cssText = t }(""), h = null, l._version = "2.6.2", l._prefixes = m, l._domPrefixes = w, l._cssomPrefixes = g, l.testProp = function (t) { return r([t]) }, l.testAllProps = s, l.testStyles = function (t, n, o, i) { var r, a, s, u, c = e.createElement("div"), l = e.body, h = l || e.createElement("body"); if (parseInt(o, 10)) for (; o--;)(s = e.createElement("div")).id = i ? i[o] : d + (o + 1), c.appendChild(s); return r = ["&#173;", '<style id="s', d, '">', t, "</style>"].join(""), c.id = d, (l ? c : h).innerHTML += r, h.appendChild(c), l || (h.style.background = "", h.style.overflow = "hidden", u = f.style.overflow, f.style.overflow = "hidden", f.appendChild(h)), a = n(c, t), l ? c.parentNode.removeChild(c) : (h.parentNode.removeChild(h), f.style.overflow = u), !!a }, l.prefixed = function (t, e, n) { return e ? s(t, e, n) : s(t, "pfx") }, l }(0, e), ce = { ok: !1, is: function () { return !1 }, request: function () { }, cancel: function () { }, event: "", prefix: "" }, le = "webkit moz o ms khtml".split(" "); if (void 0 !== e.cancelFullScreen) ce.ok = !0; else for (var fe = 0, de = le.length; de > fe; fe++)if (ce.prefix = le[fe], void 0 !== e[ce.prefix + "CancelFullScreen"]) { ce.ok = !0; break } ce.ok && (ce.event = ce.prefix + "fullscreenchange", ce.is = function () { switch (this.prefix) { case "": return e.fullScreen; case "webkit": return e.webkitIsFullScreen; default: return e[this.prefix + "FullScreen"] } }, ce.request = function (t) { return "" === this.prefix ? t.requestFullScreen() : t[this.prefix + "RequestFullScreen"]() }, ce.cancel = function () { return "" === this.prefix ? e.cancelFullScreen() : e[this.prefix + "CancelFullScreen"]() }); var he, pe = { lines: 12, length: 5, width: 2, radius: 7, corners: 1, rotate: 15, color: "rgba(128, 128, 128, .75)", hwaccel: !0 }, me = { top: "auto", left: "auto", className: "" }; !function (t, e) { he = e() }(0, function () { function t(t, n) { var o, i = e.createElement(t || "div"); for (o in n) i[o] = n[o]; return i } function n(t) { for (var e = 1, n = arguments.length; n > e; e++)t.appendChild(arguments[e]); return t } function o(t, e, n, o) { var i = ["opacity", e, ~~(100 * t), n, o].join("-"), r = .01 + n / o * 100, a = Math.max(1 - (1 - t) / e * (100 - r), t), s = f.substring(0, f.indexOf("Animation")).toLowerCase(), u = s && "-" + s + "-" || ""; return h[i] || (p.insertRule("@" + u + "keyframes " + i + "{0%{opacity:" + a + "}" + r + "%{opacity:" + t + "}" + (r + .01) + "%{opacity:1}" + (r + e) % 100 + "%{opacity:" + t + "}100%{opacity:" + a + "}}", p.cssRules.length), h[i] = 1), i } function r(t, e) { var n, o, r = t.style; for (e = e.charAt(0).toUpperCase() + e.slice(1), o = 0; o < d.length; o++)if (r[n = d[o] + e] !== i) return n; return r[e] !== i ? e : void 0 } function a(t, e) { for (var n in e) t.style[r(t, n) || n] = e[n]; return t } function s(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var o in n) t[o] === i && (t[o] = n[o]) } return t } function u(t) { for (var e = { x: t.offsetLeft, y: t.offsetTop }; t = t.offsetParent;)e.x += t.offsetLeft, e.y += t.offsetTop; return e } function c(t, e) { return "string" == typeof t ? t : t[e % t.length] } function l(t) { return void 0 === this ? new l(t) : void (this.opts = s(t || {}, l.defaults, m)) } var f, d = ["webkit", "Moz", "ms", "O"], h = {}, p = function () { var o = t("style", { type: "text/css" }); return n(e.getElementsByTagName("head")[0], o), o.sheet || o.styleSheet }(), m = { lines: 12, length: 7, width: 5, radius: 10, rotate: 0, corners: 1, color: "#000", direction: 1, speed: 1, trail: 100, opacity: .25, fps: 20, zIndex: 2e9, className: "spinner", top: "auto", left: "auto", position: "relative" }; l.defaults = {}, s(l.prototype, { spin: function (e) { this.stop(); var n, o, i = this, r = i.opts, s = i.el = a(t(0, { className: r.className }), { position: r.position, width: 0, zIndex: r.zIndex }), c = r.radius + r.length + r.width; if (e && (e.insertBefore(s, e.firstChild || null), o = u(e), n = u(s), a(s, { left: ("auto" == r.left ? o.x - n.x + (e.offsetWidth >> 1) : parseInt(r.left, 10) + c) + "px", top: ("auto" == r.top ? o.y - n.y + (e.offsetHeight >> 1) : parseInt(r.top, 10) + c) + "px" })), s.setAttribute("role", "progressbar"), i.lines(s, i.opts), !f) { var l, d = 0, h = (r.lines - 1) * (1 - r.direction) / 2, p = r.fps, m = p / r.speed, v = (1 - r.opacity) / (m * r.trail / 100), g = m / r.lines; !function t() { d++; for (var e = 0; e < r.lines; e++)l = Math.max(1 - (d + (r.lines - e) * g) % m * v, r.opacity), i.opacity(s, e * r.direction + h, l, r); i.timeout = i.el && setTimeout(t, ~~(1e3 / p)) }() } return i }, stop: function () { var t = this.el; return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = i), this }, lines: function (e, i) { function r(e, n) { return a(t(), { position: "absolute", width: i.length + i.width + "px", height: i.width + "px", background: e, boxShadow: n, transformOrigin: "left", transform: "rotate(" + ~~(360 / i.lines * u + i.rotate) + "deg) translate(" + i.radius + "px,0)", borderRadius: (i.corners * i.width >> 1) + "px" }) } for (var s, u = 0, l = (i.lines - 1) * (1 - i.direction) / 2; u < i.lines; u++)s = a(t(), { position: "absolute", top: 1 + ~(i.width / 2) + "px", transform: i.hwaccel ? "translate3d(0,0,0)" : "", opacity: i.opacity, animation: f && o(i.opacity, i.trail, l + u * i.direction, i.lines) + " " + 1 / i.speed + "s linear infinite" }), i.shadow && n(s, a(r("#000", "0 0 4px #000"), { top: "2px" })), n(e, n(s, r(c(i.color, u), "0 0 1px rgba(0,0,0,.1)"))); return e }, opacity: function (t, e, n) { e < t.childNodes.length && (t.childNodes[e].style.opacity = n) } }); var v = a(t("group"), { behavior: "url(#default#VML)" }); return !r(v, "transform") && v.adj ? function () { function e(e, n) { return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', n) } p.addRule(".spin-vml", "behavior:url(#default#VML)"), l.prototype.lines = function (t, o) { function i() { return a(e("group", { coordsize: l + " " + l, coordorigin: -u + " " + -u }), { width: l, height: l }) } function r(t, r, s) { n(d, n(a(i(), { rotation: 360 / o.lines * t + "deg", left: ~~r }), n(a(e("roundrect", { arcsize: o.corners }), { width: u, height: o.width, left: o.radius, top: -o.width >> 1, filter: s }), e("fill", { color: c(o.color, t), opacity: o.opacity }), e("stroke", { opacity: 0 })))) } var s, u = o.length + o.width, l = 2 * u, f = 2 * -(o.width + o.length) + "px", d = a(i(), { position: "absolute", top: f, left: f }); if (o.shadow) for (s = 1; s <= o.lines; s++)r(s, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)"); for (s = 1; s <= o.lines; s++)r(s); return n(t, d) }, l.prototype.opacity = function (t, e, n, o) { var i = t.firstChild; o = o.shadow && o.lines || 0, i && e + o < i.childNodes.length && (i = (i = (i = i.childNodes[e + o]) && i.firstChild) && i.firstChild) && (i.opacity = n) } }() : f = r(v, "animation"), l }); var ve, ge, we, ye, be, xe, Te = o(t), _e = o(e), Ce = "quirks" === n.hash.replace("#", ""), ke = ue.csstransforms3d, Me = ke && !Ce, Se = ke || "CSS1Compat" === e.compatMode, Fe = ce.ok, Ee = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i), Pe = !Me || Ee, je = navigator.msPointerEnabled, Ne = "onwheel" in e.createElement("div") ? "wheel" : e.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll", $e = 250, ze = 300, qe = 1400, Ae = 5e3, Oe = 64, Ie = 500, Le = 333, De = "$stageFrame", Re = "$navDotFrame", We = "$navThumbFrame", He = "auto", Ke = function (t) { var e = "bez_" + o.makeArray(arguments).join("_").replace(".", "p"); if ("function" != typeof o.easing[e]) { var n = function (t, e) { var n = [null, null], o = [null, null], i = [null, null], r = function (r, a) { return i[a] = 3 * t[a], o[a] = 3 * (e[a] - t[a]) - i[a], n[a] = 1 - i[a] - o[a], r * (i[a] + r * (o[a] + r * n[a])) }, a = function (t) { return i[0] + t * (2 * o[0] + 3 * n[0] * t) }; return function (t) { return r(function (t) { for (var e, n = t, o = 0; ++o < 14 && (e = r(n, 0) - t, !(Math.abs(e) < .001));)n -= e / a(n); return n }(t), 1) } }; o.easing[e] = function (e, o, i, r, a) { return r * n([t[0], t[1]], [t[2], t[3]])(o / a) + i } } return e }([.1, 0, .25, 1]), Xe = "50%", Ve = { width: null, minwidth: null, maxwidth: "100%", height: null, minheight: null, maxheight: null, ratio: null, margin: 2, glimpse: 0, fit: "contain", position: Xe, thumbposition: Xe, nav: "dots", navposition: "bottom", navwidth: null, thumbwidth: Oe, thumbheight: Oe, thumbmargin: 2, thumbborderwidth: 2, thumbfit: "cover", allowfullscreen: !1, transition: "slide", clicktransition: null, transitionduration: ze, captions: !0, hash: !1, startindex: 0, loop: !1, autoplay: !1, stopautoplayontouch: !0, keyboard: !1, arrows: !0, click: !0, swipe: !0, trackpad: !1, enableifsingleframe: !1, controlsonstart: !0, shuffle: !1, direction: "ltr", shadows: !0, spinner: null }, Be = { left: !0, right: !0, down: !1, up: !1, space: !1, home: !1, end: !1 }; k.stop = function (t) { k.ii[t] = !1 }, jQuery.Fotorama = function (t, i) { function r(t) { return Dn[t] || Gn.fullScreen } function c(e) { e !== c.f && (e ? (t.html("").addClass(J + " " + Zn).append(ro).before(oo).before(io), U(Gn)) : (ro.detach(), oo.detach(), io.detach(), t.html(no.urtext).removeClass(Zn), G(Gn)), function (t) { var e = "keydown." + J, n = J + Jn, o = "keydown." + n, a = "resize." + n + " orientationchange." + n; t ? (_e.on(o, function (t) { var e, n; gn && 27 === t.keyCode ? (e = !0, nn(gn, !0, !0)) : (Gn.fullScreen || i.keyboard && !Gn.index) && (27 === t.keyCode ? (e = !0, Gn.cancelFullScreen()) : t.shiftKey && 32 === t.keyCode && r("space") || 37 === t.keyCode && r("left") || 38 === t.keyCode && r("up") ? n = "<" : 32 === t.keyCode && r("space") || 39 === t.keyCode && r("right") || 40 === t.keyCode && r("down") ? n = ">" : 36 === t.keyCode && r("home") ? n = "<<" : 35 === t.keyCode && r("end") && (n = ">>")), (e || n) && R(t), n && Gn.show({ index: n, slow: t.altKey, user: !0 }) }), Gn.index || _e.off(e).on(e, "textarea, input, select", function (t) { !ge.hasClass(Z) && t.stopPropagation() }), Te.on(a, Gn.resize)) : (_e.off(o), Te.off(a)) }(e), c.f = e) } function p() { hn = Gn.data = hn || $(i.data) || _(t), pn = Gn.size = hn.length, !dn.ok && i.shuffle && N(hn), o.each(hn, function (t, e) { if (!e.i) { e.i = eo++; var n = b(e.video, !0); if (n) { var o = {}; e.video = n, e.img || e.thumb ? e.thumbsReady = !0 : o = x(e, hn, Gn), T(hn, { img: o.img, thumb: o.thumb }, e.i, Gn) } } }), Co = X(Co), pn && c(!0) } function g() { var t = 2 > pn && !i.enableifsingleframe || gn; Mo.noMove = t || $n, Mo.noSwipe = t || !i.swipe, !On && so.toggleClass(gt, !i.click && !Mo.noMove && !Mo.noSwipe), je && ro.toggleClass(ut, !Mo.noSwipe) } function w(t) { !0 === t && (t = ""), i.autoplay = Math.max(+t || Ae, 1.5 * An) } function y(t) { return 0 > t ? (pn + t % pn) % pn : t >= pn ? t % pn : t } function X(t) { return a(t, 0, pn - 1) } function V(t) { return Sn ? y(t) : X(t) } function Q(t) { return !!(t > 0 || Sn) && t - 1 } function jt(t) { return !!(pn - 1 > t || Sn) && t + 1 } function Nt(t, e, n) { if ("number" == typeof t) { t = new Array(t); var i = !0 } return o.each(t, function (t, o) { if (i && (o = t), "number" == typeof o) { var r = hn[y(o)]; if (r) { var a = "$" + e + "Frame", s = r[a]; n.call(this, t, o, r, s, a, s && s.data()) } } }) } function $t(t, e, n, o) { (!Rn || "*" === Rn && o === Mn) && (t = d(i.width) || d(t) || Ie, e = d(i.height) || d(e) || Le, Gn.resize({ width: t, ratio: i.ratio || n || t / e }, 0, o !== Mn && "*")) } function Bt(t, e, n, r, a, s) { Nt(t, e, function (t, u, c, l, f, d) { function h(t) { var e = y(u); Qe(t, { index: e, src: T, frame: hn[e] }) } function p() { w.remove(), o.Fotorama.cache[T] = "error", c.html && "stage" === e || !_ || _ === T ? (!T || c.html || v ? "stage" === e && (l.trigger("f:load").removeClass(Ht + " " + Wt).addClass(Kt), h("load"), $t()) : (l.trigger("f:error").removeClass(Ht).addClass(Wt), h("error")), d.state = "error", !(pn > 1 && hn[u] === c) || c.html || c.deleted || c.video || v || (c.deleted = !0, Gn.splice(u, 1))) : (c[x] = T = _, Bt([u], e, n, r, a, !0)) } function m() { var t = 10; k(function () { return !Yn || !t-- && !Pe }, function () { o.Fotorama.measures[T] = b.measures = o.Fotorama.measures[T] || { width: g.width, height: g.height, ratio: g.width / g.height }, $t(b.measures.width, b.measures.height, b.measures.ratio, u), w.off("load error").addClass(Yt + (v ? " " + Qt : "")).prependTo(l), S(w, (o.isFunction(n) ? n() : n) || ko, r || c.fit || i.fit, a || c.position || i.position), o.Fotorama.cache[T] = d.state = "loaded", setTimeout(function () { l.trigger("f:load").removeClass(Ht + " " + Wt).addClass(Kt + " " + (v ? Xt : Vt)), "stage" === e ? h("load") : (c.thumbratio === He || !c.thumbratio && i.thumbratio === He) && (c.thumbratio = b.measures.ratio, fn()) }, 0) }) } if (l) { var v = Gn.fullScreen && c.full && c.full !== c.img && !d.$full && "stage" === e; if (!d.$img || s || v) { var g = new Image, w = o(g), b = w.data(); d[v ? "$full" : "$img"] = w; var x = "stage" === e ? v ? "full" : "img" : "thumb", T = c[x], _ = v ? null : c["stage" === e ? "thumb" : "img"]; if ("navThumb" === e && (l = d.$wrap), !T) return void p(); o.Fotorama.cache[T] ? function t() { "error" === o.Fotorama.cache[T] ? p() : "loaded" === o.Fotorama.cache[T] ? setTimeout(m, 0) : setTimeout(t, 100) }() : (o.Fotorama.cache[T] = "*", w.on("load", m).on("error", p)), d.state = "", g.src = T } } }) } function te() { _o.detach(), vn && vn.stop() } function se() { var t = wn[De]; t && !t.data().state && (function (t) { _o.append(vn.spin().el).appendTo(t) }(t), t.on("f:load f:error", function () { t.off("f:load f:error"), te() })) } function ue(t) { L(t, un), D(t, function () { setTimeout(function () { z(po) }, 0), qe({ time: An, guessIndex: o(this).data().eq, minMax: Fo }) }) } function le(t, e) { Nt(t, e, function (t, n, i, r, a, s) { if (!r) { r = i[a] = ro[a].clone(), (s = r.data()).data = i; var u = r[0]; "stage" === e ? (i.html && o('<div class="' + Zt + '"></div>').append(i._html ? o(i.html).removeAttr("id").html(i._html) : i.html).appendTo(r), i.caption && o(j(oe, j(ie, i.caption))).appendTo(r), i.video && r.addClass(mt).append(xo.clone()), D(u, function () { setTimeout(function () { z(ao) }, 0), an({ index: s.eq, user: !0 }) }), uo = uo.add(r)) : "navDot" === e ? (ue(u), vo = vo.add(r)) : "navThumb" === e && (ue(u), s.$wrap = r.children(":first"), go = go.add(r), i.video && s.$wrap.append(xo.clone())) } }) } function fe(t, e, n, o) { return t && t.length && S(t, e, n, o) } function de(t) { Nt(t, "stage", function (t, e, n, r, a, s) { if (r) { var c = y(e), l = n.fit || i.fit, f = n.position || i.position; s.eq = c, jo[De][c] = r.css(o.extend({ left: $n ? 0 : h(e, ko.w, i.margin, bn) }, $n && u(0))), C(r[0]) && (r.appendTo(so), nn(n.$video)), fe(s.$img, ko, l, f), fe(s.$full, ko, l, f) } }) } function we(t, e) { if ("thumbs" === Fn && !isNaN(t)) { var n = -t, r = -t + ko.nw; go.each(function () { var t = o(this).data(), a = t.eq, s = function () { return { h: qn, w: t.w } }, u = s(), c = hn[a] || {}, l = c.thumbfit || i.thumbfit, f = c.thumbposition || i.thumbposition; u.w = t.w, t.l + t.w < n || t.l > r || fe(t.$img, u, l, f) || e && Bt([a], "navThumb", s, l, f) }) } } function ye(t, e, n) { if (!ye[n]) { var r = "nav" === n && En, a = 0; e.append(t.filter(function () { for (var t, e = o(this), n = e.data(), i = 0, r = hn.length; r > i; i++)if (n.data === hn[i]) { t = !0, n.eq = i; break } return t || e.remove() && !1 }).sort(function (t, e) { return o(t).data().eq - o(e).data().eq }).each(function () { if (r) { var t = o(this), e = t.data(), n = Math.round(qn * e.data.thumbratio) || zn; e.l = a, e.w = n, t.css({ width: n }), a += n + i.thumbmargin } })), ye[n] = !0 } } function be(t) { return t - No > ko.w / 3 } function xe(t) { return !(Sn || Co + t && Co - pn + t || gn) } function Ce() { var t = xe(0), e = xe(1); co.toggleClass(bt, t).attr(I(t)), lo.toggleClass(bt, e).attr(I(e)) } function ke() { So.ok && (So.prevent = { "<": xe(0), ">": xe(1) }) } function Ee(t) { var e, n, o = t.data(); return En ? (e = o.l, n = o.w) : (e = t.position().left, n = t.width()), { c: e + n / 2, min: -e + 10 * i.thumbmargin, max: -e + ko.w - n - 10 * i.thumbmargin } } function Ne(t) { var e = wn[Un].data(); H(wo, { time: 1.2 * t, pos: e.l, width: e.w - 2 * i.thumbborderwidth }) } function qe(t) { var e = hn[t.guessIndex][Un]; if (e) { var n = Fo.min !== Fo.max, o = t.minMax || n && Ee(wn[Un]), i = n && (t.keep && qe.l ? qe.l : a((t.coo || ko.nw / 2) - Ee(e).c, o.min, o.max)), r = n && a(i, Fo.min, Fo.max), s = 1.1 * t.time; H(mo, { time: s, pos: r || 0, onEnd: function () { we(r, !0) } }), en(po, F(r, Fo.min, Fo.max)), qe.l = i } } function Ke(t) { for (var e = Po[t]; e.length;)e.shift().removeClass(Ot) } function Xe(t) { var e = jo[t]; o.each(yn, function (t, n) { delete e[y(n)] }), o.each(e, function (t, n) { delete e[t], n.detach() }) } function Ve(t) { bn = xn = Co; var e = wn[De]; e && (Ke(De), Po[De].push(e.addClass(Ot)), t || Gn.show.onEnd(!0), m(so, 0), Xe(De), de(yn), Mo.min = Sn ? -1 / 0 : -h(pn - 1, ko.w, i.margin, bn), Mo.max = Sn ? 1 / 0 : -h(0, ko.w, i.margin, bn), Mo.snap = ko.w + i.margin, Fo.min = Math.min(0, ko.nw - mo.width()), Fo.max = 0, mo.toggleClass(gt, !(Fo.noMove = Fo.min === Fo.max))) } function Ye(t, e) { t && o.each(e, function (e, n) { n && o.extend(n, { width: t.width || n.width, height: t.height, minwidth: t.minwidth, maxwidth: t.maxwidth, minheight: t.minheight, maxheight: t.maxheight, ratio: A(t.ratio) }) }) } function Qe(e, n) { t.trigger(J + ":" + e, [Gn, n]) } function Ue() { clearTimeout(Ge.t), Yn = 1, i.stopautoplayontouch ? Gn.stopAutoplay() : Xn = !0 } function Ge() { Yn && (i.stopautoplayontouch || (Je(), Ze()), Ge.t = setTimeout(function () { Yn = 0 }, ze + $e)) } function Je() { Xn = !(!gn && !Vn) } function Ze() { if (clearTimeout(Ze.t), k.stop(Ze.w), i.autoplay && !Xn) { Gn.autoplay || (Gn.autoplay = !0, Qe("startautoplay")); var t = Co, e = wn[De].data(); Ze.w = k(function () { return e.state || t !== Co }, function () { Ze.t = setTimeout(function () { if (!Xn && t === Co) { var e = kn, n = hn[e][De].data(); Ze.w = k(function () { return n.state || e !== kn }, function () { Xn || e !== kn || Gn.show(Sn ? W(!Ln) : kn) }) } }, i.autoplay) }) } else Gn.autoplay && (Gn.autoplay = !1, Qe("stopautoplay")) } function tn() { Gn.fullScreen && (Gn.fullScreen = !1, Fe && ce.cancel(to), ge.removeClass(Z), ve.removeClass(Z), t.removeClass(Dt).insertAfter(io), ko = o.extend({}, Bn), nn(gn, !0, !0), sn("x", !1), Gn.resize(), Bt(yn, "stage"), z(Te, Hn, Wn), Qe("fullscreenexit")) } function en(t, e) { In && (t.removeClass(qt + " " + At), e && !gn && t.addClass(e.replace(/^|\s/g, " " + zt + "--"))) } function nn(t, e, n) { e && (ro.removeClass(ot), gn = !1, g()), t && t !== gn && (t.remove(), Qe("unloadvideo")), n && (Je(), Ze()) } function on(t) { ro.toggleClass(at, t) } function rn(t) { if (!Mo.flow) { var e = t ? t.pageX : rn.x, n = e && !xe(be(e)) && i.click; rn.p !== n && ao.toggleClass(wt, n) && (rn.p = n, rn.x = e) } } function an(t) { clearTimeout(an.t), i.clicktransition && i.clicktransition !== i.transition ? setTimeout(function () { var e = i.transition; Gn.setOptions({ transition: i.clicktransition }), On = e, an.t = setTimeout(function () { Gn.show(t) }, 10) }, 0) : Gn.show(t) } function sn(t, e) { Mo[t] = Fo[t] = e } function un(t) { an({ index: o(this).data().eq, slow: t.altKey, user: !0, coo: t._x - po.offset().left }) } function cn(t) { an({ index: fo.index(this) ? ">" : "<", slow: t.altKey, user: !0 }) } function ln(t) { D(t, function () { setTimeout(function () { z(ao) }, 0), on(!1) }) } function fn() { if (p(), function () { function t(t, n) { e[t ? "add" : "remove"].push(n) } Gn.options = i = q(i), $n = "crossfade" === i.transition || "dissolve" === i.transition, Sn = i.loop && (pn > 2 || $n && (!On || "slide" !== On)), An = +i.transitionduration || ze, Ln = "rtl" === i.direction, Dn = o.extend({}, i.keyboard && Be, i.keyboard); var e = { add: [], remove: [] }; pn > 1 || i.enableifsingleframe ? (Fn = i.nav, Pn = "top" === i.navposition, e.remove.push(It), fo.toggle(!!i.arrows)) : (Fn = !1, fo.hide()), te(), vn = new he(o.extend(pe, i.spinner, me, { direction: Ln ? -1 : 1 })), Ce(), ke(), i.autoplay && w(i.autoplay), zn = l(i.thumbwidth) || Oe, qn = l(i.thumbheight) || Oe, So.ok = Eo.ok = i.trackpad && !Pe, g(), Ye(i, [ko]), (En = "thumbs" === Fn) ? (le(pn, "navThumb"), mn = go, Un = We, function (t, e) { var n = t[0]; n.styleSheet ? n.styleSheet.cssText = e : t.html(e) }(oo, o.Fotorama.jst.style({ w: zn, h: qn, b: i.thumbborderwidth, m: i.thumbmargin, s: Jn, q: !Se })), po.addClass(St).removeClass(Mt)) : "dots" === Fn ? (le(pn, "navDot"), mn = vo, Un = Re, po.addClass(Mt).removeClass(St)) : (Fn = !1, po.removeClass(St + " " + Mt)), Fn && (Pn ? ho.insertBefore(ao) : ho.insertAfter(ao), ye.nav = !1, ye(mn, mo, "nav")), (jn = i.allowfullscreen) ? (yo.prependTo(ao), Nn = Fe && "native" === jn) : (yo.detach(), Nn = !1), t($n, it), t(!$n, rt), t(!i.captions, ft), t(Ln, ct), t("always" !== i.arrows, dt), t(!(In = i.shadows && !Pe), st), ro.addClass(e.add.join(" ")).removeClass(e.remove.join(" ")), o.extend({}, i) }(), !fn.i) { fn.i = !0; var t = i.startindex; (t || i.hash && n.hash) && (Mn = E(t || n.hash.replace(/^#/, ""), hn, 0 === Gn.index || t, t)), Co = bn = xn = Tn = Mn = V(Mn) || 0 } if (pn) { if (function t() { return !t.f === Ln ? (t.f = Ln, Co = pn - 1 - Co, Gn.reverse(), !0) : void 0 }()) return; gn && nn(gn, !0), yn = [], Xe(De), fn.ok = !0, Gn.show({ index: Co, time: 0 }), Gn.resize() } else Gn.destroy() } function dn() { dn.ok || (dn.ok = !0, Qe("ready")) } ve = o("html"), ge = o("body"); var hn, pn, mn, vn, gn, wn, yn, bn, xn, Tn, _n, Cn, kn, Mn, Sn, Fn, En, Pn, jn, Nn, $n, zn, qn, An, On, In, Ln, Dn, Rn, Wn, Hn, Kn, Xn, Vn, Bn, Yn, Qn, Un, Gn = this, Jn = o.now(), Zn = J + Jn, to = t[0], eo = 1, no = t.data(), oo = o("<style></style>"), io = o(j(Lt)), ro = o(j(tt)), ao = o(j(ht)).appendTo(ro), so = (ao[0], o(j(vt)).appendTo(ao)), uo = o(), co = o(j(yt + " " + xt + ae)), lo = o(j(yt + " " + Tt + ae)), fo = co.add(lo).appendTo(ao), ho = o(j(Ct)), po = o(j(_t)).appendTo(ho), mo = o(j(kt)).appendTo(po), vo = o(), go = o(), wo = (so.data(), mo.data(), o(j(Jt)).appendTo(mo)), yo = o(j(Rt + ae)), bo = yo[0], xo = o(j(ee)), To = o(j(ne)).appendTo(ao)[0], _o = o(j(re)), Co = !1, ko = {}, Mo = {}, So = {}, Fo = {}, Eo = {}, Po = {}, jo = {}, No = 0, $o = []; ro[De] = o(j(pt)), ro[We] = o(j(Ft + " " + Pt + ae, j(Gt))), ro[Re] = o(j(Ft + " " + Et + ae, j(Ut))), Po[De] = [], Po[We] = [], Po[Re] = [], jo[De] = {}, ro.addClass(Me ? nt : et).toggleClass(at, !i.controlsonstart), no.fotorama = this, Gn.startAutoplay = function (t) { return Gn.autoplay ? this : (Xn = Vn = !1, w(t || i.autoplay), Ze(), this) }, Gn.stopAutoplay = function () { return Gn.autoplay && (Xn = Vn = !0, Ze()), this }, Gn.show = function (t) { var e; "object" != typeof t ? (e = t, t = {}) : e = t.index, e = ">" === e ? xn + 1 : "<" === e ? xn - 1 : "<<" === e ? 0 : ">>" === e ? pn - 1 : e, e = void 0 === (e = isNaN(e) ? E(e, hn, !0) : e) ? Co || 0 : e, Gn.activeIndex = Co = V(e), _n = Q(Co), Cn = jt(Co), kn = y(Co + (Ln ? -1 : 1)), yn = [Co, _n, Cn], xn = Sn ? e : Co; var n = Math.abs(Tn - xn), o = v(t.time, function () { return Math.min(An * (1 + (n - 1) / 12), 2 * An) }), r = t.overPos; t.slow && (o *= 10); var s = wn; Gn.activeFrame = wn = hn[Co]; var u = s === wn && !t.user; nn(gn, wn.i !== hn[y(bn)].i), le(yn, "stage"), de(Pe ? [xn] : [xn, Q(xn), jt(xn)]), sn("go", !0), u || Qe("show", { user: t.user, time: o }), Xn = !0; var c = Gn.show.onEnd = function (e) { if (!c.ok) { if (c.ok = !0, e || Ve(!0), u || Qe("showend", { user: t.user }), !e && On && On !== i.transition) return Gn.setOptions({ transition: On }), void (On = !1); se(), Bt(yn, "stage"), sn("go", !1), ke(), rn(), Je(), Ze() } }; $n ? K(wn[De], Co !== Tn ? hn[Tn][De] : null, uo, { time: o, method: i.transition, onEnd: c }, $o) : H(so, { pos: -h(xn, ko.w, i.margin, bn), overPos: r, time: o, onEnd: c }); if (Ce(), Fn) { Ke(Un), Po[Un].push(wn[Un].addClass(Ot)); var l = X(Co + a(xn - Tn, -1, 1)); qe({ time: o, coo: l !== Co && t.coo, guessIndex: void 0 !== t.coo ? l : Co, keep: u }), En && Ne(o) } return Kn = void 0 !== Tn && Tn !== Co, Tn = Co, i.hash && Kn && !Gn.eq && M(wn.id || Co + 1), this }, Gn.requestFullScreen = function () { return jn && !Gn.fullScreen && (Wn = Te.scrollTop(), Hn = Te.scrollLeft(), z(Te), sn("x", !0), Bn = o.extend({}, ko), t.addClass(Dt).appendTo(ge.addClass(Z)), ve.addClass(Z), nn(gn, !0, !0), Gn.fullScreen = !0, Nn && ce.request(to), Gn.resize(), Bt(yn, "stage"), se(), Qe("fullscreenenter")), this }, Gn.cancelFullScreen = function () { return Nn && ce.is() ? ce.cancel(e) : tn(), this }, Gn.toggleFullScreen = function () { return Gn[(Gn.fullScreen ? "cancel" : "request") + "FullScreen"]() }, O(e, ce.event, function () { !hn || ce.is() || gn || tn() }), Gn.resize = function (t) { if (!hn) return this; var e = arguments[1] || 0, n = arguments[2]; Ye(Gn.fullScreen ? { width: "100%", maxwidth: null, minwidth: null, height: "100%", maxheight: null, minheight: null } : q(t), [ko, n || Gn.fullScreen || i]); var o = ko.width, r = ko.height, s = ko.ratio, u = Te.height() - (Fn ? po.height() : 0); return d(o) && (ro.addClass(lt).css({ width: o, minWidth: ko.minwidth || 0, maxWidth: ko.maxwidth || 99999 }), o = ko.W = ko.w = ro.width(), ko.nw = Fn && f(i.navwidth, o) || o, i.glimpse && (ko.w -= Math.round(2 * (f(i.glimpse, o) || 0))), so.css({ width: ko.w, marginLeft: (ko.W - ko.w) / 2 }), (r = (r = f(r, u)) || s && o / s) && (o = Math.round(o), r = ko.h = Math.round(a(r, f(ko.minheight, u), f(ko.maxheight, u))), ao.stop().animate({ width: o, height: r }, e, function () { ro.removeClass(lt) }), Ve(), Fn && (po.stop().animate({ width: ko.nw }, e), qe({ guessIndex: Co, time: e, keep: !0 }), En && ye.nav && Ne(e)), Rn = n || !0, dn())), No = ao.offset().left, this }, Gn.setOptions = function (t) { return o.extend(i, t), fn(), this }, Gn.shuffle = function () { return hn && N(hn) && fn(), this }, Gn.destroy = function () { return Gn.cancelFullScreen(), Gn.stopAutoplay(), hn = Gn.data = null, c(), yn = [], Xe(De), fn.ok = !1, this }, Gn.playVideo = function () { var t = wn, e = t.video, n = Co; return "object" == typeof e && t.videoReady && (Nn && Gn.fullScreen && Gn.cancelFullScreen(), k(function () { return !ce.is() || n !== Co }, function () { n === Co && (t.$video = t.$video || o(o.Fotorama.jst.video(e)), t.$video.appendTo(t[De]), ro.addClass(ot), gn = t.$video, g(), fo.blur(), yo.blur(), Qe("loadvideo")) })), this }, Gn.stopVideo = function () { return nn(gn, !0, !0), this }, ao.on("mousemove", rn), Mo = B(so, { onStart: Ue, onMove: function (t, e) { en(ao, e.edge) }, onTouchEnd: Ge, onEnd: function (t) { en(ao); var e = (je && !Qn || t.touch) && i.arrows && "always" !== i.arrows; if (t.moved || e && t.pos !== t.newPos && !t.control) { var n = function (t, e, n, o) { return -Math.round(t / (e + (n || 0)) - (o || 0)) }(t.newPos, ko.w, i.margin, bn); Gn.show({ index: n, time: $n ? An : t.time, overPos: t.overPos, user: !0 }) } else t.aborted || t.control || function (t, e) { var n = t.target; o(n).hasClass(ee) ? Gn.playVideo() : n === bo ? Gn.toggleFullScreen() : gn ? n === To && nn(gn, !0, !0) : e ? on() : i.click && an({ index: t.shiftKey || W(be(t._x)), slow: t.altKey, user: !0 }) }(t.startEvent, e) }, timeLow: 1, timeHigh: 1, friction: 2, select: "." + It + ", ." + It + " *", $wrap: ao }), Fo = B(mo, { onStart: Ue, onMove: function (t, e) { en(po, e.edge) }, onTouchEnd: Ge, onEnd: function (t) { function e() { qe.l = t.newPos, Je(), Ze(), we(t.newPos, !0) } if (t.moved) t.pos !== t.newPos ? (Xn = !0, H(mo, { time: t.time, pos: t.newPos, overPos: t.overPos, onEnd: e }), we(t.newPos), In && en(po, F(t.newPos, Fo.min, Fo.max))) : e(); else { var n = t.$target.closest("." + Ft, mo)[0]; n && un.call(n, t.startEvent) } }, timeLow: .5, timeHigh: 2, friction: 5, $wrap: po }), So = Y(ao, { shift: !0, onEnd: function (t, e) { Ue(), Ge(), Gn.show({ index: e, slow: t.altKey }) } }), Eo = Y(po, { onEnd: function (t, e) { Ue(), Ge(); var n = m(mo) + .25 * e; mo.css(s(a(n, Fo.min, Fo.max))), In && en(po, F(n, Fo.min, Fo.max)), Eo.prevent = { "<": n >= Fo.max, ">": n <= Fo.min }, clearTimeout(Eo.t), Eo.t = setTimeout(function () { qe.l = n, we(n, !0) }, $e), we(n) } }), ro.hover(function () { setTimeout(function () { Yn || on(!(Qn = !0)) }, 0) }, function () { Qn && on(!(Qn = !1)) }), P(fo, function (t) { R(t), cn.call(this, t) }, { onStart: function () { Ue(), Mo.control = !0 }, onTouchEnd: Ge }), fo.each(function () { L(this, function (t) { cn.call(this, t) }), ln(this) }), L(bo, Gn.toggleFullScreen), ln(bo), o.each("load push pop shift unshift reverse sort splice".split(" "), function (t, e) { Gn[e] = function () { return hn = hn || [], "load" !== e ? Array.prototype[e].apply(hn, arguments) : arguments[0] && "object" == typeof arguments[0] && arguments[0].length && (hn = $(arguments[0])), fn(), Gn } }), fn() }, o.fn.fotorama = function (e) { return this.each(function () { var n = this, i = o(this), r = i.data(), a = r.fotorama; a ? a.setOptions(e, !0) : k(function () { return !(0 === (t = n).offsetWidth && 0 === t.offsetHeight); var t }, function () { r.urtext = i.html(), new o.Fotorama(i, o.extend({}, Ve, t.fotoramaDefaults, e, r)) }) }) }, o.Fotorama.instances = [], o.Fotorama.cache = {}, o.Fotorama.measures = {}, (o = o || {}).Fotorama = o.Fotorama || {}, o.Fotorama.jst = o.Fotorama.jst || {}, o.Fotorama.jst.style = function (t) { var e; return "" + ".fotorama" + (null == (e = t.s) ? "" : e) + " .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:" + (null == (e = t.m) ? "" : e) + "px;\nheight:" + (null == (e = t.h) ? "" : e) + "px}\n.fotorama" + (null == (e = t.s) ? "" : e) + " .fotorama__thumb-border{\nheight:" + (null == (e = t.h - t.b * (t.q ? 0 : 2)) ? "" : e) + "px;\nborder-width:" + (null == (e = t.b) ? "" : e) + "px;\nmargin-top:" + (null == (e = t.m) ? "" : e) + "px}" }, o.Fotorama.jst.video = function (t) { var e = "", n = Array.prototype.join; return e += '<div class="fotorama__video"><iframe src="', function () { e += n.call(arguments, "") }(("youtube" == t.type ? t.p + "youtube.com/embed/" + t.id + "?autoplay=1" : "vimeo" == t.type ? t.p + "player.vimeo.com/video/" + t.id + "?autoplay=1&badge=0" : t.id) + (t.s && "custom" != t.type ? "&" + t.s : "")), e += '" frameborder="0" allowfullscreen></iframe></div>\n' }, o(function () { o("." + J + ':not([data-auto="false"])').fotorama() }) }(window, document, location, "undefined" != typeof jQuery && jQuery), function (t) { t.fn.goTop = function (e) { t.fn.goTop.defaults = { container: "", appear: 200, scrolltime: 800, src: "fas fa-chevron-up", width: 45, place: "right", fadein: 500, fadeout: 500, opacity: .5, marginX: 2, marginY: 2, zIndex: 9 }; var n = t.extend({}, t.fn.goTop.defaults, e); return this.each(function () { var e = t(this); e.html("<a id='goTopAnchor'><span id='goTopSpan' /></a>"); var o = e.children("a"), i = o.children("span"), r = { position: "fixed", display: "block", width: "'" + n.width + "px'", "z-index": n.zIndex, bottom: n.marginY + "%" }; r["left" === n.place ? "left" : "right"] = n.marginX + "%", e.css(r), o.css("opacity", n.opacity), i.addClass(n.src), i.css("font-size", n.width), i.hide(), t(function () { t(n.container || window).scroll(function () { t(this).scrollTop() > n.appear ? i.fadeIn(n.fadein) : i.fadeOut(n.fadeout) }), t(o).hover(function () { t(this).css("opacity", "1.0"), t(this).css("cursor", "pointer") }, function () { t(this).css("opacity", n.opacity) }), t(o).click(function () { return t("body,html").animate({ scrollTop: 0 }, n.scrolltime), !1 }) }) }) } }(jQuery), $(document).ready(function () { $("#goTop").goTop({ appear: 300, scrolltime: 250, width: 45, place: "right", opacity: .9, marginX: 4, marginY: 4, zIndex: 9 }) });

    }

    else if (fileName == "support.html") {

        $(".arrow a").hover(function () {
            $(this).stop(true, true).addClass("hover");

        },
            function () {
                $(this).stop(true, true).removeClass("hover");

            });

        //ways to support us
        
        

        let position=0;

        let timer=setInterval(function(){
            position++;
            ChangeBlock();
        }, 10000);

        ChangeBlock();
        
        document.getElementById("bLeft").addEventListener("click", function (e){
            e.preventDefault();
            position-=1;           
            ChangeBlock();
        });
        document.getElementById("bRight").addEventListener("click", function (e){
            e.preventDefault();
            position+=1;
            ChangeBlock();
        });

        function ChangeBlock()
        {
            clearInterval(timer);

            timer=setInterval(function(){
                position++;
                ChangeBlock();
            }, 10000);
        
            let supportBlok=document.getElementById("bBlock");
            
            let blokovi=[
                {
                    slika:{
                        src:"assets/img/bBlock1.png",
                        alt:"heart"
                    },
                    naslov:"Using bitcoin",
                    text: "Using Bitcoin is the first thing you can do to support Bitcoin. There are probably many cases where it can make your life easier. You can accept payments and make purchases with Bitcoin."
                },

                {
                    slika:{
                        src:"assets/img/bBlock2.png",
                        alt:"mine"
                    },
                    naslov:"Mining",
                    text: "You can start mining bitcoins to help processing transactions. In order to protect the network, you should join smaller mining pools and prefer decentralized pools like P2Pool or pools with getblocktemplate (GBT) support."
                },

                {
                    slika:{
                        src:"assets/img/bBlock3.png",
                        alt:"screen"
                    },
                    naslov:"Development",
                    text: "Bitcoin is free software. If you are a developer, you can use your superpowers to do good and improve Bitcoin. Or you can build amazing new services or software that use Bitcoin."
                }
            ];


            if(position<0)
                position=blokovi.length-1;
            else if(position>blokovi.length-1)
                position=0;
       
            supportBlok.innerHTML= `<img src=${blokovi[position].slika.src} alt=${blokovi[position].slika.alt}>
            <h2>${blokovi[position].naslov}</h2>
            <p>${blokovi[position].text}</p>`;

              
        }
        



        //osatlo
        document.getElementById("submit").addEventListener("click", test);
        document.getElementById("coins").addEventListener("blur", price);
        document.getElementById("value").addEventListener("change", price);

        let greskaS = [];
        let podaciS = [];
        function test() {

            let submit = true;
            let firstName, reName, lastName, birth, reBirth, phone, rePhone, creditCard, cardNumber, reCardNumber, value, coinsNumber, reCoins;
            firstName = document.querySelector("#firstName").value.trim();
            lastName = document.querySelector("#lastName").value.trim();
            birth = document.querySelector("#birth").value.trim();
            phone = document.querySelector("#phone").value.trim();
            creditCard = document.querySelector("#creditCard").value;
            cardNumber = document.querySelector("#credit").value.trim();
            value = document.querySelector("#value").value;
            coinsNumber = document.querySelector("#coins").value.trim();

            reName = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})*$/;
            reBirth = /^(19[\d]{2}|20[01][\d])\-(0[1-9]|1[012])\-(0[1-9]|[12][\d]|3[01])$/;
            rePhone = /^06[01234569]\/[\d]{3}\-[\d]{3,4}$/;
            reCardNumber = /^\d{4}(\-\d{4}){3}$/;
            reCoins = /^[1-9]{1,3}$/;

            if (!reName.test(firstName)) {
                greskaS.push("Wrong first name - Corret format example: John");
                document.querySelector("#firstName").classList.add("inputError");
                submit = false;
            }
            else 
                document.querySelector("#firstName").classList.remove("inputError");                         

            if (!reName.test(lastName)) {
                greskaS.push("Wrong last name - Corret format example: Smith");
                document.querySelector("#lastName").classList.add("inputError");
                submit = false;
            }
            else              
                document.querySelector("#lastName").classList.remove("inputError");
            

            if (!reBirth.test(birth)) {
                greskaS.push("Wrong birth date - Corret format: yyyy-mm-dd");
                document.querySelector("#birth").classList.add("inputError");
                submit = false;
            }
            else                
                document.querySelector("#birth").classList.remove("inputError");
            

            if (!rePhone.test(phone)) {
                greskaS.push("Wrong phone number - Corret format: 06x-yyy-yyy(y)");
                document.querySelector("#phone").classList.add("inputError");
                submit = false;
            }
            else               
                document.querySelector("#phone").classList.remove("inputError");
            

            if (!reCardNumber.test(cardNumber)) {
                greskaS.push("Wrong card number - Corret format: 0000-0000-0000-0000");
                document.querySelector("#credit").classList.add("inputError");
                submit = false;
            }
            else                 
                document.querySelector("#credit").classList.remove("inputError");
            

            if (!reCoins.test(coinsNumber)) {
                greskaS.push("Please enter valid number of coins");
                submit = false;
                document.querySelector("#coins").classList.add("inputError");
            }
            else                
                document.querySelector("#coins").classList.remove("inputError");
            

            if (creditCard == "error") {
                greskaS.push("Please choose your credit card!");
                submit = false;
                document.querySelector("#creditCard").classList.add("inputError");
            }
            else 
                document.querySelector("#creditCard").classList.remove("inputError");
            

            if (!submit) {
                let list = "<ul>";
                for (let i = 0; i < greskaS.length; i++)
                    list += "<li>" + greskaS[i] + "</li>";
                list += "</ul>";
                document.getElementById("new").innerHTML = "";
                document.getElementById("new").innerHTML = list;
                document.getElementById("new").style.display="block";
                greskaS = [];
                podaci=[];
            }
            else {
                podaciS.push(firstName);
                podaciS.push(lastName);
                podaciS.push(birth);
                podaciS.push(phone);
                podaciS.push(cardNumber);
                podaciS.push(coinsNumber);
                podaciS.push(creditCard);

                console.log(podaciS);
                document.getElementById("new").innerHTML = "";
                greskaS = [];
                
                alert("Kupovina uspesno obavljena.");
                podaciS=[];
                document.getElementById("new").style.display="none";
            }

        }

        function price() {
            let creditType = document.getElementById("value").value;
            let price = 0;
            switch (creditType) {
                case "USD": price = 7554;
                    break;
                case "EUR": price = 6906;;
                    break;
                case "GBP": price = 6187;
                    break;
                case "CNY": price = 53879;
                    break;
            }

            let number = document.getElementById("coins").value;
            if (isNaN(number) || !number)
                document.getElementById("price").innerText = "PRICE: 0"
            else
                document.getElementById("price").innerText = "PRICE:" + (number * price);
        }

    }

    else if (fileName == "contact.html") {

        //FAQ search
        let searchBar=document.getElementById("search");
        let questions=document.querySelectorAll(".question a");
        searchBar.addEventListener("keyup",search);
        

        function search(){
            let searchValue=searchBar.value.toLowerCase();
                       
            for (let question of questions) {
                    if(question.text.toLowerCase().indexOf(searchValue)>-1){
                        question.classList.add("hover3");                       
                    }
                    else                         
                    question.classList.remove("hover3");  
                }  

            for (let question of questions) {
                if(searchValue.length<=0)
                    question.classList.remove("hover3"); 
            }  
                                              
        }
       


        //FAQ
        $(".question").click(function (e) {
            e.preventDefault();
            $(this).find("p").stop(true, true).toggle(300);
        });

        $(".question a").hover(function () {
            $(this).stop(true, true).addClass("hover2");

        },
            function () {
                $(this).stop(true, true).removeClass("hover2");

            });

        document.getElementById("send").addEventListener("click", test);
        document.getElementById("name").addEventListener("blur", testName);
        document.getElementById("email").addEventListener("blur", testEmail);
        document.getElementById("mess").addEventListener("blur", testMess);

        let send = true;
        let podaciM=[];

        function test() {
            send = true;
            testName();
            testEmail();
            testMess();

            if (send) {
                podaciM.push( document.querySelector("#name").value.trim());
                podaciM.push( document.querySelector("#email").value.trim());
                podaciM.push( document.querySelector("#mess").value.trim());
                console.log(podaciM);
                alert("Message was sent");   
                podaciM=[];        
            }
        }

        function testName() {          
            let name = document.querySelector("#name").value.trim();
            let reName = /^[A-Z][a-z]{1,14}(\s[A-Z][a-z]{1,19})+$/;

            if (!reName.test(name)) {
                document.getElementById("nameError").classList.add("showError");
                send = false;
            }
            else
                document.getElementById("nameError").classList.remove("showError");
        }

        function testEmail() {       
            let email = document.querySelector("#email").value.trim();     
            let reEmail = /^[a-z][a-z\d\_\.\-]+\@[a-z\d]+(\.[a-z]{2,4}){1,3}$/;

            if (!reEmail.test(email)) {
                document.getElementById("emailError").classList.add("showError");
                send = false;
            }
            else
                document.getElementById("emailError").classList.remove("showError");
        }

        function testMess() {
            let message=document.querySelector("#mess").value.trim();
            if (message.length > 160||message.length < 16) {
                document.getElementById("messageError1").classList.add("showError");
                send = false;
            }
            else
                document.getElementById("messageError1").classList.remove("showError");
  
        }

    }

    else if (fileName == "author.html") {

        //AUTHOR
        $("#aLeft img").hover(function () {
            $(this).stop(true, true).css({ "opacity": "1","border":"4px solid #4a4aff"});

        },
            function () {
                $(this).stop(true, true).css({ "opacity": "0.8","border":"4px solid white"});

            });

        $("#aShow").hover(function () {
            $(this).find("img").stop(true, true).css({  "opacity": "1","border":"4px solid #4a4aff" });

        },
            function () {
                $(this).find("img").stop(true, true).css({  "opacity": "0.8","border":"4px solid white" });

            });

        $(".list li").hover(function () {
            $(this).stop(true, true).css({ "font-size": "26px", "cursor": "pointer" }).addClass("hover2");

        },
            function () {
                $(this).stop(true, true).css({ "font-size": "22px", "cursor": "pointer" }).removeClass("hover2");

            });

        
        let listItems = document.querySelectorAll(".list li");
        let prev = 0;
        let selected = 0;

        let workNiz = [];
        workNiz[1] = '<a href="https://sekula99.github.io"><img src="assets/img/rest.jpg" alt="restaurant"></a>';
        workNiz[0] = '<a href="https://valve1.000webhostapp.com"><img src="assets/img/valve.jpg" alt="valve"></a>';
     
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].addEventListener("click", function () { show(i) });
        }
        
        function show(i) {

            selected = i;
            if (selected != prev) {
                listItems[selected].classList.add("selected");
                listItems[prev].classList.remove("selected");
                prev = selected;
            }

            let show = document.querySelector("#workShow");
            show.innerHTML = workNiz[i];
        }

    }

}

//menu 
function menuCreate() {
    let menu = [["index.html", "INTRODUCTION"], ["support.html", "SUPPORT US"], ["contact.html", "CONTACT"]];
    let dropMenu = [[["index.html#started", "Get Started"], ["index.html#drugi", "How It Works"], ["index.html#gallery", "Gallery"]], [["support.html#", "Support"],["support.html#buy", "Buy Bitcoin"]], [["contact.html#message", "Message"], ["#", "FAQ"]]];

    let value = '<ul id="menu2">';

    let outerMenu = document.getElementById("menu");
    let innerMenu = document.getElementById("menu");

    for (let i = 0; i < menu.length; i++) {
        value += "<li><a href='" + menu[i][0] + "'>" + menu[i][1] + "</a>";
        value += "<ul>";
        for (let j = 0; j < dropMenu[i].length; j++) {
            value += "<li><a href='" + dropMenu[i][j][0] + "'>" + dropMenu[i][j][1] + "</a></li>";
        }
        value += "</li></ul>"
    }
    value += "</ul>"
    outerMenu.innerHTML = value;
} 