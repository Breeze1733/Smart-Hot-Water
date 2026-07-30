var __wxAppData = __wxAppData || {};
var __wxRoute = __wxRoute || "";
var __wxRouteBegin = __wxRouteBegin || "";
var __wxAppCode__ = __wxAppCode__ || {};
var global = global || {};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {};
var __wxAppCurrentFile__ = __wxAppCurrentFile__ || "";
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var __vd_version_info__ = __vd_version_info__ || {};
var __wxAppConsole__ = console;
definePlugin("plugin://wxb2d7434be3e563d6", function(define, require, module, exports, global, wx, App, Page, Component, Behavior, getApp, getCurrentPages, console, requireMiniProgram) {
    var __vd_version_info__ = __vd_version_info__ || {};
    if (typeof console === 'undefined') {
        console = __wxAppConsole__;
    };
    /*v0.5vv_20200413_syb_scopedata*/
    global.__wcc_version__ = 'v0.5vv_20200413_syb_scopedata';
    global.__wcc_version_info__ = {
        "customComponents": true,
        "fixZeroRpx": true,
        "propValueDeepCopy": false
    };
    var $gwxc
    var $gaic = {}
    $gwx_wxb2d7434be3e563d6 = function(path, global) {
        if (typeof global === 'undefined') global = {};
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};

        function _(a, b) {
            if (typeof(b) != 'undefined') a.children.push(b);
        }

        function _v(k) {
            if (typeof(k) != 'undefined') return {
                tag: 'virtual',
                'wxKey': k,
                children: []
            };
            return {
                tag: 'virtual',
                children: []
            };
        }

        function _n(tag) {
            $gwxc++;
            if ($gwxc >= 16000) {
                throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'
            };
            return {
                tag: 'wx-' + tag,
                attr: {},
                children: [],
                n: [],
                raw: {},
                generics: {}
            }
        }

        function _p(a, b) {
            b && a.properities.push(b);
        }

        function _s(scope, env, key) {
            return typeof(scope[key]) != 'undefined' ? scope[key] : env[key]
        }

        function _wp(m) {
            console.warn("WXMLRT_$gwx_wxb2d7434be3e563d6:" + m)
        }

        function _wl(tname, prefix) {
            _wp(prefix + ':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')
        }
        $gwn = console.warn;
        $gwl = console.log;

        function $gwh() {
            function x() {}
            x.prototype = {
                hn: function(obj, all) {
                    if (typeof(obj) == 'object') {
                        var cnt = 0;
                        var any1 = false,
                            any2 = false;
                        for (var x in obj) {
                            any1 = any1 | x === '__value__';
                            any2 = any2 | x === '__wxspec__';
                            cnt++;
                            if (cnt > 2) break;
                        }
                        return cnt == 2 && any1 && any2 && (all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h') ? "h" : "n";
                    }
                    return "n";
                },
                nh: function(obj, special) {
                    return {
                        __value__: obj,
                        __wxspec__: special ? special : true
                    }
                },
                rv: function(obj) {
                    return this.hn(obj, true) === 'n' ? obj : this.rv(obj.__value__);
                },
                hm: function(obj) {
                    if (typeof(obj) == 'object') {
                        var cnt = 0;
                        var any1 = false,
                            any2 = false;
                        for (var x in obj) {
                            any1 = any1 | x === '__value__';
                            any2 = any2 | x === '__wxspec__';
                            cnt++;
                            if (cnt > 2) break;
                        }
                        return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__));
                    }
                    return false;
                }
            }
            return new x;
        }
        wh = $gwh();

        function $gstack(s) {
            var tmp = s.split('\n ' + ' ' + ' ' + ' ');
            for (var i = 0; i < tmp.length; ++i) {
                if (0 == i) continue;
                if (")" === tmp[i][tmp[i].length - 1])
                    tmp[i] = tmp[i].replace(/\s\(.*\)$/, "");
                else
                    tmp[i] = "at anonymous function";
            }
            return tmp.join('\n ' + ' ' + ' ' + ' ');
        }

        function $gwrt(should_pass_type_info) {
            function ArithmeticEv(ops, e, s, g, o) {
                var _f = false;
                var rop = ops[0][1];
                var _a, _b, _c, _d, _aa, _bb;
                switch (rop) {
                    case '?:':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) === 'h');
                        _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : rev(ops[3], e, s, g, o, _f);
                        _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                        return _d;
                        break;
                    case '&&':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) === 'h');
                        _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : wh.rv(_a);
                        _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                        return _d;
                        break;
                    case '||':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) === 'h');
                        _d = wh.rv(_a) ? wh.rv(_a) : rev(ops[2], e, s, g, o, _f);
                        _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                        return _d;
                        break;
                    case '+':
                    case '*':
                    case '/':
                    case '%':
                    case '|':
                    case '^':
                    case '&':
                    case '===':
                    case '==':
                    case '!=':
                    case '!==':
                    case '>=':
                    case '<=':
                    case '>':
                    case '<':
                    case '<<':
                    case '>>':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _b = rev(ops[2], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
                        switch (rop) {
                            case '+':
                                _d = wh.rv(_a) + wh.rv(_b);
                                break;
                            case '*':
                                _d = wh.rv(_a) * wh.rv(_b);
                                break;
                            case '/':
                                _d = wh.rv(_a) / wh.rv(_b);
                                break;
                            case '%':
                                _d = wh.rv(_a) % wh.rv(_b);
                                break;
                            case '|':
                                _d = wh.rv(_a) | wh.rv(_b);
                                break;
                            case '^':
                                _d = wh.rv(_a) ^ wh.rv(_b);
                                break;
                            case '&':
                                _d = wh.rv(_a) & wh.rv(_b);
                                break;
                            case '===':
                                _d = wh.rv(_a) === wh.rv(_b);
                                break;
                            case '==':
                                _d = wh.rv(_a) == wh.rv(_b);
                                break;
                            case '!=':
                                _d = wh.rv(_a) != wh.rv(_b);
                                break;
                            case '!==':
                                _d = wh.rv(_a) !== wh.rv(_b);
                                break;
                            case '>=':
                                _d = wh.rv(_a) >= wh.rv(_b);
                                break;
                            case '<=':
                                _d = wh.rv(_a) <= wh.rv(_b);
                                break;
                            case '>':
                                _d = wh.rv(_a) > wh.rv(_b);
                                break;
                            case '<':
                                _d = wh.rv(_a) < wh.rv(_b);
                                break;
                            case '<<':
                                _d = wh.rv(_a) << wh.rv(_b);
                                break;
                            case '>>':
                                _d = wh.rv(_a) >> wh.rv(_b);
                                break;
                            default:
                                break;
                        }
                        return _c ? wh.nh(_d, "c") : _d;
                        break;
                    case '-':
                        _a = ops.length === 3 ? rev(ops[1], e, s, g, o, _f) : 0;
                        _b = ops.length === 3 ? rev(ops[2], e, s, g, o, _f) : rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
                        _d = _c ? wh.rv(_a) - wh.rv(_b) : _a - _b;
                        return _c ? wh.nh(_d, "c") : _d;
                        break;
                    case '!':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) == 'h');
                        _d = !wh.rv(_a);
                        return _c ? wh.nh(_d, "c") : _d;
                    case '~':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) == 'h');
                        _d = ~wh.rv(_a);
                        return _c ? wh.nh(_d, "c") : _d;
                    default:
                        $gwn('unrecognized op' + rop);
                }
            }

            function rev(ops, e, s, g, o, newap) {
                var op = ops[0];
                var _f = false;
                if (typeof newap !== "undefined") o.ap = newap;
                if (typeof(op) === 'object') {
                    var vop = op[0];
                    var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
                    switch (vop) {
                        case 2:
                            return ArithmeticEv(ops, e, s, g, o);
                            break;
                        case 4:
                            return rev(ops[1], e, s, g, o, _f);
                            break;
                        case 5:
                            switch (ops.length) {
                                case 2:
                                    _a = rev(ops[1], e, s, g, o, _f);
                                    return should_pass_type_info ? [_a] : [wh.rv(_a)];
                                    return [_a];
                                    break;
                                case 1:
                                    return [];
                                    break;
                                default:
                                    _a = rev(ops[1], e, s, g, o, _f);
                                    _b = rev(ops[2], e, s, g, o, _f);
                                    _a.push(
                                        should_pass_type_info ?
                                        _b :
                                        wh.rv(_b)
                                    );
                                    return _a;
                                    break;
                            }
                            break;
                        case 6:
                            _a = rev(ops[1], e, s, g, o);
                            var ap = o.ap;
                            _ta = wh.hn(_a) === 'h';
                            _aa = _ta ? wh.rv(_a) : _a;
                            o.is_affected |= _ta;
                            if (should_pass_type_info) {
                                if (_aa === null || typeof(_aa) === 'undefined') {
                                    return _ta ? wh.nh(undefined, 'e') : undefined;
                                }
                                _b = rev(ops[2], e, s, g, o, _f);
                                _tb = wh.hn(_b) === 'h';
                                _bb = _tb ? wh.rv(_b) : _b;
                                o.ap = ap;
                                o.is_affected |= _tb;
                                if (_bb === null || typeof(_bb) === 'undefined' ||
                                    _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
                                    return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
                                }
                                _d = _aa[_bb];
                                if (typeof _d === 'function' && !ap) _d = undefined;
                                _td = wh.hn(_d) === 'h';
                                o.is_affected |= _td;
                                return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
                            } else {
                                if (_aa === null || typeof(_aa) === 'undefined') {
                                    return undefined;
                                }
                                _b = rev(ops[2], e, s, g, o, _f);
                                _tb = wh.hn(_b) === 'h';
                                _bb = _tb ? wh.rv(_b) : _b;
                                o.ap = ap;
                                o.is_affected |= _tb;
                                if (_bb === null || typeof(_bb) === 'undefined' ||
                                    _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
                                    return undefined;
                                }
                                _d = _aa[_bb];
                                if (typeof _d === 'function' && !ap) _d = undefined;
                                _td = wh.hn(_d) === 'h';
                                o.is_affected |= _td;
                                return _td ? wh.rv(_d) : _d;
                            }
                        case 7:
                            switch (ops[1][0]) {
                                case 11:
                                    o.is_affected |= wh.hn(g) === 'h';
                                    return g;
                                case 3:
                                    _s = wh.rv(s);
                                    _e = wh.rv(e);
                                    _b = ops[1][1];
                                    if (g && g.f && g.f.hasOwnProperty(_b)) {
                                        _a = g.f;
                                        o.ap = true;
                                    } else {
                                        _a = _s && _s.hasOwnProperty(_b) ?
                                            s : (_e && _e.hasOwnProperty(_b) ? e : undefined);
                                    }
                                    if (should_pass_type_info) {
                                        if (_a) {
                                            _ta = wh.hn(_a) === 'h';
                                            _aa = _ta ? wh.rv(_a) : _a;
                                            _d = _aa[_b];
                                            _td = wh.hn(_d) === 'h';
                                            o.is_affected |= _ta || _td;
                                            _d = _ta && !_td ? wh.nh(_d, 'e') : _d;
                                            return _d;
                                        }
                                    } else {
                                        if (_a) {
                                            _ta = wh.hn(_a) === 'h';
                                            _aa = _ta ? wh.rv(_a) : _a;
                                            _d = _aa[_b];
                                            _td = wh.hn(_d) === 'h';
                                            o.is_affected |= _ta || _td;
                                            return wh.rv(_d);
                                        }
                                    }
                                    return undefined;
                            }
                            break;
                        case 8:
                            _a = {};
                            _a[ops[1]] = rev(ops[2], e, s, g, o, _f);
                            return _a;
                            break;
                        case 9:
                            _a = rev(ops[1], e, s, g, o, _f);
                            _b = rev(ops[2], e, s, g, o, _f);

                            function merge(_a, _b, _ow) {
                                var ka, _bbk;
                                _ta = wh.hn(_a) === 'h';
                                _tb = wh.hn(_b) === 'h';
                                _aa = wh.rv(_a);
                                _bb = wh.rv(_b);
                                for (var k in _bb) {
                                    if (_ow || !_aa.hasOwnProperty(k)) {
                                        _aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k], 'e') : _bb[k]) : wh.rv(_bb[k]);
                                    }
                                }
                                return _a;
                            }
                            var _c = _a
                            var _ow = true
                            if (typeof(ops[1][0]) === "object" && ops[1][0][0] === 10) {
                                _a = _b
                                _b = _c
                                _ow = false
                            }
                            if (typeof(ops[1][0]) === "object" && ops[1][0][0] === 10) {
                                var _r = {}
                                return merge(merge(_r, _a, _ow), _b, _ow);
                            } else
                                return merge(_a, _b, _ow);
                            break;
                        case 10:
                            _a = rev(ops[1], e, s, g, o, _f);
                            _a = should_pass_type_info ? _a : wh.rv(_a);
                            return _a;
                            break;
                        case 12:
                            var _r;
                            _a = rev(ops[1], e, s, g, o);
                            if (!o.ap) {
                                return should_pass_type_info && wh.hn(_a) === 'h' ? wh.nh(_r, 'f') : _r;
                            }
                            var ap = o.ap;
                            _b = rev(ops[2], e, s, g, o, _f);
                            o.ap = ap;
                            _ta = wh.hn(_a) === 'h';
                            _tb = _ca(_b);
                            _aa = wh.rv(_a);
                            _bb = wh.rv(_b);
                            snap_bb = $gdc(_bb, "nv_");
                            try {
                                _r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
                            } catch (e) {
                                e.message = e.message.replace(/nv_/g, "");
                                e.stack = e.stack.substring(0, e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
                                e.stack = e.stack.replace(/\snv_/g, " ");
                                e.stack = $gstack(e.stack);
                                if (g.debugInfo) {
                                    e.stack += "\n " + " " + " " + " at " + g.debugInfo[0] + ":" + g.debugInfo[1] + ":" + g.debugInfo[2];
                                    console.error(e);
                                }
                                _r = undefined;
                            }
                            return should_pass_type_info && (_tb || _ta) ? wh.nh(_r, 'f') : _r;
                    }
                } else {
                    if (op === 3 || op === 1) return ops[1];
                    else if (op === 11) {
                        var _a = '';
                        for (var i = 1; i < ops.length; i++) {
                            var xp = wh.rv(rev(ops[i], e, s, g, o, _f));
                            _a += typeof(xp) === 'undefined' ? '' : xp;
                        }
                        return _a;
                    }
                }
            }

            function wrapper(ops, e, s, g, o, newap) {
                if (ops[0] == '11182016') {
                    g.debugInfo = ops[2];
                    return rev(ops[1], e, s, g, o, newap);
                } else {
                    g.debugInfo = null;
                    return rev(ops, e, s, g, o, newap);
                }
            }
            return wrapper;
        }
        gra = $gwrt(true);
        grb = $gwrt(false);

        function TestTest(expr, ops, e, s, g, expect_a, expect_b, expect_affected) {
            {
                var o = {
                    is_affected: false
                };
                var a = gra(ops, e, s, g, o);
                if (JSON.stringify(a) != JSON.stringify(expect_a) || o.is_affected != expect_affected) {
                    console.warn("A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_a) + ", " + expect_affected + " is expected");
                }
            } {
                var o = {
                    is_affected: false
                };
                var a = grb(ops, e, s, g, o);
                if (JSON.stringify(a) != JSON.stringify(expect_b) || o.is_affected != expect_affected) {
                    console.warn("B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_b) + ", " + expect_affected + " is expected");
                }
            }
        }

        function wfor(to_iter, func, env, _s, global, father, itemname, indexname, keyname) {
            var _n = wh.hn(to_iter) === 'n';
            var scope = wh.rv(_s);
            var has_old_item = scope.hasOwnProperty(itemname);
            var has_old_index = scope.hasOwnProperty(indexname);
            var old_item = scope[itemname];
            var old_index = scope[indexname];
            var full = Object.prototype.toString.call(wh.rv(to_iter));
            var type = full[8];
            if (type === 'N' && full[10] === 'l') type = 'X';
            var _y;
            if (_n) {
                if (type === 'A') {
                    var r_iter_item;
                    for (var i = 0; i < to_iter.length; i++) {
                        scope[itemname] = to_iter[i];
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        r_iter_item = wh.rv(to_iter[i]);
                        var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                        _y = _v(key);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else if (type === 'O') {
                    var i = 0;
                    var r_iter_item;
                    for (var k in to_iter) {
                        scope[itemname] = to_iter[k];
                        scope[indexname] = _n ? k : wh.nh(k, 'h');
                        r_iter_item = wh.rv(to_iter[k]);
                        var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                        _y = _v(key);
                        _(father, _y);
                        func(env, scope, _y, global);
                        i++;
                    }
                } else if (type === 'S') {
                    for (var i = 0; i < to_iter.length; i++) {
                        scope[itemname] = to_iter[i];
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        _y = _v(to_iter[i] + i);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else if (type === 'N') {
                    for (var i = 0; i < to_iter; i++) {
                        scope[itemname] = i;
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        _y = _v(i);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else {}
            } else {
                var r_to_iter = wh.rv(to_iter);
                var r_iter_item, iter_item;
                if (type === 'A') {
                    for (var i = 0; i < r_to_iter.length; i++) {
                        iter_item = r_to_iter[i];
                        iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
                        r_iter_item = wh.rv(iter_item);
                        scope[itemname] = iter_item
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                        _y = _v(key);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else if (type === 'O') {
                    var i = 0;
                    for (var k in r_to_iter) {
                        iter_item = r_to_iter[k];
                        iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
                        r_iter_item = wh.rv(iter_item);
                        scope[itemname] = iter_item;
                        scope[indexname] = _n ? k : wh.nh(k, 'h');
                        var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                        _y = _v(key);
                        _(father, _y);
                        func(env, scope, _y, global);
                        i++
                    }
                } else if (type === 'S') {
                    for (var i = 0; i < r_to_iter.length; i++) {
                        iter_item = wh.nh(r_to_iter[i], 'h');
                        scope[itemname] = iter_item;
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        _y = _v(to_iter[i] + i);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else if (type === 'N') {
                    for (var i = 0; i < r_to_iter; i++) {
                        iter_item = wh.nh(i, 'h');
                        scope[itemname] = iter_item;
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        _y = _v(i);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else {}
            }
            if (has_old_item) {
                scope[itemname] = old_item;
            } else {
                delete scope[itemname];
            }
            if (has_old_index) {
                scope[indexname] = old_index;
            } else {
                delete scope[indexname];
            }
        }

        function _ca(o) {
            if (wh.hn(o) == 'h') return true;
            if (typeof o !== "object") return false;
            for (var i in o) {
                if (o.hasOwnProperty(i)) {
                    if (_ca(o[i])) return true;
                }
            }
            return false;
        }

        function _da(node, attrname, opindex, raw, o) {
            var isaffected = false;
            var value = $gdc(raw, "", 2);
            if (o.ap && value && value.constructor === Function) {
                attrname = "$wxs:" + attrname;
                node.attr["$gdc"] = $gdc;
            }
            if (o.is_affected || _ca(raw)) {
                node.n.push(attrname);
                node.raw[attrname] = raw;
            }
            node.attr[attrname] = value;
        }

        function _r(node, attrname, opindex, env, scope, global) {
            global.opindex = opindex;
            var o = {},
                _env;
            var a = grb(z[opindex], env, scope, global, o);
            _da(node, attrname, opindex, a, o);
        }

        function _rz(z, node, attrname, opindex, env, scope, global) {
            global.opindex = opindex;
            var o = {},
                _env;
            var a = grb(z[opindex], env, scope, global, o);
            _da(node, attrname, opindex, a, o);
        }

        function _o(opindex, env, scope, global) {
            global.opindex = opindex;
            var nothing = {};
            var r = grb(z[opindex], env, scope, global, nothing);
            return (r && r.constructor === Function) ? undefined : r;
        }

        function _oz(z, opindex, env, scope, global) {
            global.opindex = opindex;
            var nothing = {};
            var r = grb(z[opindex], env, scope, global, nothing);
            return (r && r.constructor === Function) ? undefined : r;
        }

        function _1(opindex, env, scope, global, o) {
            var o = o || {};
            global.opindex = opindex;
            return gra(z[opindex], env, scope, global, o);
        }

        function _1z(z, opindex, env, scope, global, o) {
            var o = o || {};
            global.opindex = opindex;
            return gra(z[opindex], env, scope, global, o);
        }

        function _2(opindex, func, env, scope, global, father, itemname, indexname, keyname) {
            var o = {};
            var to_iter = _1(opindex, env, scope, global);
            wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
        }

        function _2z(z, opindex, func, env, scope, global, father, itemname, indexname, keyname) {
            var o = {};
            var to_iter = _1z(z, opindex, env, scope, global);
            wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
        }


        function _m(tag, attrs, generics, env, scope, global) {
            var tmp = _n(tag);
            var base = 0;
            for (var i = 0; i < attrs.length; i += 2) {
                if (base + attrs[i + 1] < 0) {
                    tmp.attr[attrs[i]] = true;
                } else {
                    _r(tmp, attrs[i], base + attrs[i + 1], env, scope, global);
                    if (base === 0) base = attrs[i + 1];
                }
            }
            for (var i = 0; i < generics.length; i += 2) {
                if (base + generics[i + 1] < 0) {
                    tmp.generics[generics[i]] = "";
                } else {
                    var $t = grb(z[base + generics[i + 1]], env, scope, global);
                    if ($t != "") $t = "wx-" + $t;
                    tmp.generics[generics[i]] = $t;
                    if (base === 0) base = generics[i + 1];
                }
            }
            return tmp;
        }

        function _mz(z, tag, attrs, generics, env, scope, global) {
            var tmp = _n(tag);
            var base = 0;
            for (var i = 0; i < attrs.length; i += 2) {
                if (base + attrs[i + 1] < 0) {
                    tmp.attr[attrs[i]] = true;
                } else {
                    _rz(z, tmp, attrs[i], base + attrs[i + 1], env, scope, global);
                    if (base === 0) base = attrs[i + 1];
                }
            }
            for (var i = 0; i < generics.length; i += 2) {
                if (base + generics[i + 1] < 0) {
                    tmp.generics[generics[i]] = "";
                } else {
                    var $t = grb(z[base + generics[i + 1]], env, scope, global);
                    if ($t != "") $t = "wx-" + $t;
                    tmp.generics[generics[i]] = $t;
                    if (base === 0) base = generics[i + 1];
                }
            }
            return tmp;
        }

        var nf_init = function() {
            if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
                nf_init_Object();
                nf_init_Function();
                nf_init_Array();
                nf_init_String();
                nf_init_Boolean();
                nf_init_Number();
                nf_init_Math();
                nf_init_Date();
                nf_init_RegExp();
            }
            if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true;
        };
        var nf_init_Object = function() {
            Object.defineProperty(Object.prototype, "nv_constructor", {
                writable: true,
                value: "Object"
            })
            Object.defineProperty(Object.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return "[object Object]"
                }
            })
        }
        var nf_init_Function = function() {
            Object.defineProperty(Function.prototype, "nv_constructor", {
                writable: true,
                value: "Function"
            })
            Object.defineProperty(Function.prototype, "nv_length", {get: function() {
                    return this.length;
                },
                set: function() {}
            });
            Object.defineProperty(Function.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return "[function Function]"
                }
            })
        }
        var nf_init_Array = function() {
            Object.defineProperty(Array.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return this.nv_join();
                }
            })
            Object.defineProperty(Array.prototype, "nv_join", {
                writable: true,
                value: function(s) {
                    s = undefined == s ? ',' : s;
                    var r = "";
                    for (var i = 0; i < this.length; ++i) {
                        if (0 != i) r += s;
                        if (null == this[i] || undefined == this[i]) r += '';
                        else if (typeof this[i] == 'function') r += this[i].nv_toString();
                        else if (typeof this[i] == 'object' && this[i].nv_constructor === "Array") r += this[i].nv_join();
                        else r += this[i].toString();
                    }
                    return r;
                }
            })
            Object.defineProperty(Array.prototype, "nv_constructor", {
                writable: true,
                value: "Array"
            })
            Object.defineProperty(Array.prototype, "nv_concat", {
                writable: true,
                value: Array.prototype.concat
            })
            Object.defineProperty(Array.prototype, "nv_pop", {
                writable: true,
                value: Array.prototype.pop
            })
            Object.defineProperty(Array.prototype, "nv_push", {
                writable: true,
                value: Array.prototype.push
            })
            Object.defineProperty(Array.prototype, "nv_reverse", {
                writable: true,
                value: Array.prototype.reverse
            })
            Object.defineProperty(Array.prototype, "nv_shift", {
                writable: true,
                value: Array.prototype.shift
            })
            Object.defineProperty(Array.prototype, "nv_slice", {
                writable: true,
                value: Array.prototype.slice
            })
            Object.defineProperty(Array.prototype, "nv_sort", {
                writable: true,
                value: Array.prototype.sort
            })
            Object.defineProperty(Array.prototype, "nv_splice", {
                writable: true,
                value: Array.prototype.splice
            })
            Object.defineProperty(Array.prototype, "nv_unshift", {
                writable: true,
                value: Array.prototype.unshift
            })
            Object.defineProperty(Array.prototype, "nv_indexOf", {
                writable: true,
                value: Array.prototype.indexOf
            })
            Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
                writable: true,
                value: Array.prototype.lastIndexOf
            })
            Object.defineProperty(Array.prototype, "nv_every", {
                writable: true,
                value: Array.prototype.every
            })
            Object.defineProperty(Array.prototype, "nv_some", {
                writable: true,
                value: Array.prototype.some
            })
            Object.defineProperty(Array.prototype, "nv_forEach", {
                writable: true,
                value: Array.prototype.forEach
            })
            Object.defineProperty(Array.prototype, "nv_map", {
                writable: true,
                value: Array.prototype.map
            })
            Object.defineProperty(Array.prototype, "nv_filter", {
                writable: true,
                value: Array.prototype.filter
            })
            Object.defineProperty(Array.prototype, "nv_reduce", {
                writable: true,
                value: Array.prototype.reduce
            })
            Object.defineProperty(Array.prototype, "nv_reduceRight", {
                writable: true,
                value: Array.prototype.reduceRight
            })
            Object.defineProperty(Array.prototype, "nv_length", {get: function() {
                    return this.length;
                },
                set: function(value) {
                    this.length = value;
                }
            });
        }
        var nf_init_String = function() {
            Object.defineProperty(String.prototype, "nv_constructor", {
                writable: true,
                value: "String"
            })
            Object.defineProperty(String.prototype, "nv_toString", {
                writable: true,
                value: String.prototype.toString
            })
            Object.defineProperty(String.prototype, "nv_valueOf", {
                writable: true,
                value: String.prototype.valueOf
            })
            Object.defineProperty(String.prototype, "nv_charAt", {
                writable: true,
                value: String.prototype.charAt
            })
            Object.defineProperty(String.prototype, "nv_charCodeAt", {
                writable: true,
                value: String.prototype.charCodeAt
            })
            Object.defineProperty(String.prototype, "nv_concat", {
                writable: true,
                value: String.prototype.concat
            })
            Object.defineProperty(String.prototype, "nv_indexOf", {
                writable: true,
                value: String.prototype.indexOf
            })
            Object.defineProperty(String.prototype, "nv_lastIndexOf", {
                writable: true,
                value: String.prototype.lastIndexOf
            })
            Object.defineProperty(String.prototype, "nv_localeCompare", {
                writable: true,
                value: String.prototype.localeCompare
            })
            Object.defineProperty(String.prototype, "nv_match", {
                writable: true,
                value: String.prototype.match
            })
            Object.defineProperty(String.prototype, "nv_replace", {
                writable: true,
                value: String.prototype.replace
            })
            Object.defineProperty(String.prototype, "nv_search", {
                writable: true,
                value: String.prototype.search
            })
            Object.defineProperty(String.prototype, "nv_slice", {
                writable: true,
                value: String.prototype.slice
            })
            Object.defineProperty(String.prototype, "nv_split", {
                writable: true,
                value: String.prototype.split
            })
            Object.defineProperty(String.prototype, "nv_substring", {
                writable: true,
                value: String.prototype.substring
            })
            Object.defineProperty(String.prototype, "nv_toLowerCase", {
                writable: true,
                value: String.prototype.toLowerCase
            })
            Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
                writable: true,
                value: String.prototype.toLocaleLowerCase
            })
            Object.defineProperty(String.prototype, "nv_toUpperCase", {
                writable: true,
                value: String.prototype.toUpperCase
            })
            Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
                writable: true,
                value: String.prototype.toLocaleUpperCase
            })
            Object.defineProperty(String.prototype, "nv_trim", {
                writable: true,
                value: String.prototype.trim
            })
            Object.defineProperty(String.prototype, "nv_length", {get: function() {
                    return this.length;
                },
                set: function(value) {
                    this.length = value;
                }
            });
        }
        var nf_init_Boolean = function() {
            Object.defineProperty(Boolean.prototype, "nv_constructor", {
                writable: true,
                value: "Boolean"
            })
            Object.defineProperty(Boolean.prototype, "nv_toString", {
                writable: true,
                value: Boolean.prototype.toString
            })
            Object.defineProperty(Boolean.prototype, "nv_valueOf", {
                writable: true,
                value: Boolean.prototype.valueOf
            })
        }
        var nf_init_Number = function() {
            Object.defineProperty(Number, "nv_MAX_VALUE", {
                writable: false,
                value: Number.MAX_VALUE
            })
            Object.defineProperty(Number, "nv_MIN_VALUE", {
                writable: false,
                value: Number.MIN_VALUE
            })
            Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
                writable: false,
                value: Number.NEGATIVE_INFINITY
            })
            Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
                writable: false,
                value: Number.POSITIVE_INFINITY
            })
            Object.defineProperty(Number.prototype, "nv_constructor", {
                writable: true,
                value: "Number"
            })
            Object.defineProperty(Number.prototype, "nv_toString", {
                writable: true,
                value: Number.prototype.toString
            })
            Object.defineProperty(Number.prototype, "nv_toLocaleString", {
                writable: true,
                value: Number.prototype.toLocaleString
            })
            Object.defineProperty(Number.prototype, "nv_valueOf", {
                writable: true,
                value: Number.prototype.valueOf
            })
            Object.defineProperty(Number.prototype, "nv_toFixed", {
                writable: true,
                value: Number.prototype.toFixed
            })
            Object.defineProperty(Number.prototype, "nv_toExponential", {
                writable: true,
                value: Number.prototype.toExponential
            })
            Object.defineProperty(Number.prototype, "nv_toPrecision", {
                writable: true,
                value: Number.prototype.toPrecision
            })
        }
        var nf_init_Math = function() {
            Object.defineProperty(Math, "nv_E", {
                writable: false,
                value: Math.E
            })
            Object.defineProperty(Math, "nv_LN10", {
                writable: false,
                value: Math.LN10
            })
            Object.defineProperty(Math, "nv_LN2", {
                writable: false,
                value: Math.LN2
            })
            Object.defineProperty(Math, "nv_LOG2E", {
                writable: false,
                value: Math.LOG2E
            })
            Object.defineProperty(Math, "nv_LOG10E", {
                writable: false,
                value: Math.LOG10E
            })
            Object.defineProperty(Math, "nv_PI", {
                writable: false,
                value: Math.PI
            })
            Object.defineProperty(Math, "nv_SQRT1_2", {
                writable: false,
                value: Math.SQRT1_2
            })
            Object.defineProperty(Math, "nv_SQRT2", {
                writable: false,
                value: Math.SQRT2
            })
            Object.defineProperty(Math, "nv_abs", {
                writable: false,
                value: Math.abs
            })
            Object.defineProperty(Math, "nv_acos", {
                writable: false,
                value: Math.acos
            })
            Object.defineProperty(Math, "nv_asin", {
                writable: false,
                value: Math.asin
            })
            Object.defineProperty(Math, "nv_atan", {
                writable: false,
                value: Math.atan
            })
            Object.defineProperty(Math, "nv_atan2", {
                writable: false,
                value: Math.atan2
            })
            Object.defineProperty(Math, "nv_ceil", {
                writable: false,
                value: Math.ceil
            })
            Object.defineProperty(Math, "nv_cos", {
                writable: false,
                value: Math.cos
            })
            Object.defineProperty(Math, "nv_exp", {
                writable: false,
                value: Math.exp
            })
            Object.defineProperty(Math, "nv_floor", {
                writable: false,
                value: Math.floor
            })
            Object.defineProperty(Math, "nv_log", {
                writable: false,
                value: Math.log
            })
            Object.defineProperty(Math, "nv_max", {
                writable: false,
                value: Math.max
            })
            Object.defineProperty(Math, "nv_min", {
                writable: false,
                value: Math.min
            })
            Object.defineProperty(Math, "nv_pow", {
                writable: false,
                value: Math.pow
            })
            Object.defineProperty(Math, "nv_random", {
                writable: false,
                value: Math.random
            })
            Object.defineProperty(Math, "nv_round", {
                writable: false,
                value: Math.round
            })
            Object.defineProperty(Math, "nv_sin", {
                writable: false,
                value: Math.sin
            })
            Object.defineProperty(Math, "nv_sqrt", {
                writable: false,
                value: Math.sqrt
            })
            Object.defineProperty(Math, "nv_tan", {
                writable: false,
                value: Math.tan
            })
        }
        var nf_init_Date = function() {
            Object.defineProperty(Date.prototype, "nv_constructor", {
                writable: true,
                value: "Date"
            })
            Object.defineProperty(Date, "nv_parse", {
                writable: true,
                value: Date.parse
            })
            Object.defineProperty(Date, "nv_UTC", {
                writable: true,
                value: Date.UTC
            })
            Object.defineProperty(Date, "nv_now", {
                writable: true,
                value: Date.now
            })
            Object.defineProperty(Date.prototype, "nv_toString", {
                writable: true,
                value: Date.prototype.toString
            })
            Object.defineProperty(Date.prototype, "nv_toDateString", {
                writable: true,
                value: Date.prototype.toDateString
            })
            Object.defineProperty(Date.prototype, "nv_toTimeString", {
                writable: true,
                value: Date.prototype.toTimeString
            })
            Object.defineProperty(Date.prototype, "nv_toLocaleString", {
                writable: true,
                value: Date.prototype.toLocaleString
            })
            Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
                writable: true,
                value: Date.prototype.toLocaleDateString
            })
            Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
                writable: true,
                value: Date.prototype.toLocaleTimeString
            })
            Object.defineProperty(Date.prototype, "nv_valueOf", {
                writable: true,
                value: Date.prototype.valueOf
            })
            Object.defineProperty(Date.prototype, "nv_getTime", {
                writable: true,
                value: Date.prototype.getTime
            })
            Object.defineProperty(Date.prototype, "nv_getFullYear", {
                writable: true,
                value: Date.prototype.getFullYear
            })
            Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
                writable: true,
                value: Date.prototype.getUTCFullYear
            })
            Object.defineProperty(Date.prototype, "nv_getMonth", {
                writable: true,
                value: Date.prototype.getMonth
            })
            Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
                writable: true,
                value: Date.prototype.getUTCMonth
            })
            Object.defineProperty(Date.prototype, "nv_getDate", {
                writable: true,
                value: Date.prototype.getDate
            })
            Object.defineProperty(Date.prototype, "nv_getUTCDate", {
                writable: true,
                value: Date.prototype.getUTCDate
            })
            Object.defineProperty(Date.prototype, "nv_getDay", {
                writable: true,
                value: Date.prototype.getDay
            })
            Object.defineProperty(Date.prototype, "nv_getUTCDay", {
                writable: true,
                value: Date.prototype.getUTCDay
            })
            Object.defineProperty(Date.prototype, "nv_getHours", {
                writable: true,
                value: Date.prototype.getHours
            })
            Object.defineProperty(Date.prototype, "nv_getUTCHours", {
                writable: true,
                value: Date.prototype.getUTCHours
            })
            Object.defineProperty(Date.prototype, "nv_getMinutes", {
                writable: true,
                value: Date.prototype.getMinutes
            })
            Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
                writable: true,
                value: Date.prototype.getUTCMinutes
            })
            Object.defineProperty(Date.prototype, "nv_getSeconds", {
                writable: true,
                value: Date.prototype.getSeconds
            })
            Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
                writable: true,
                value: Date.prototype.getUTCSeconds
            })
            Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
                writable: true,
                value: Date.prototype.getMilliseconds
            })
            Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
                writable: true,
                value: Date.prototype.getUTCMilliseconds
            })
            Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
                writable: true,
                value: Date.prototype.getTimezoneOffset
            })
            Object.defineProperty(Date.prototype, "nv_setTime", {
                writable: true,
                value: Date.prototype.setTime
            })
            Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
                writable: true,
                value: Date.prototype.setMilliseconds
            })
            Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
                writable: true,
                value: Date.prototype.setUTCMilliseconds
            })
            Object.defineProperty(Date.prototype, "nv_setSeconds", {
                writable: true,
                value: Date.prototype.setSeconds
            })
            Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
                writable: true,
                value: Date.prototype.setUTCSeconds
            })
            Object.defineProperty(Date.prototype, "nv_setMinutes", {
                writable: true,
                value: Date.prototype.setMinutes
            })
            Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
                writable: true,
                value: Date.prototype.setUTCMinutes
            })
            Object.defineProperty(Date.prototype, "nv_setHours", {
                writable: true,
                value: Date.prototype.setHours
            })
            Object.defineProperty(Date.prototype, "nv_setUTCHours", {
                writable: true,
                value: Date.prototype.setUTCHours
            })
            Object.defineProperty(Date.prototype, "nv_setDate", {
                writable: true,
                value: Date.prototype.setDate
            })
            Object.defineProperty(Date.prototype, "nv_setUTCDate", {
                writable: true,
                value: Date.prototype.setUTCDate
            })
            Object.defineProperty(Date.prototype, "nv_setMonth", {
                writable: true,
                value: Date.prototype.setMonth
            })
            Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
                writable: true,
                value: Date.prototype.setUTCMonth
            })
            Object.defineProperty(Date.prototype, "nv_setFullYear", {
                writable: true,
                value: Date.prototype.setFullYear
            })
            Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
                writable: true,
                value: Date.prototype.setUTCFullYear
            })
            Object.defineProperty(Date.prototype, "nv_toUTCString", {
                writable: true,
                value: Date.prototype.toUTCString
            })
            Object.defineProperty(Date.prototype, "nv_toISOString", {
                writable: true,
                value: Date.prototype.toISOString
            })
            Object.defineProperty(Date.prototype, "nv_toJSON", {
                writable: true,
                value: Date.prototype.toJSON
            })
        }
        var nf_init_RegExp = function() {
            Object.defineProperty(RegExp.prototype, "nv_constructor", {
                writable: true,
                value: "RegExp"
            })
            Object.defineProperty(RegExp.prototype, "nv_exec", {
                writable: true,
                value: RegExp.prototype.exec
            })
            Object.defineProperty(RegExp.prototype, "nv_test", {
                writable: true,
                value: RegExp.prototype.test
            })
            Object.defineProperty(RegExp.prototype, "nv_toString", {
                writable: true,
                value: RegExp.prototype.toString
            })
            Object.defineProperty(RegExp.prototype, "nv_source", {get: function() {
                    return this.source;
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_global", {get: function() {
                    return this.global;
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {get: function() {
                    return this.ignoreCase;
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_multiline", {get: function() {
                    return this.multiline;
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_lastIndex", {get: function() {
                    return this.lastIndex;
                },
                set: function(v) {
                    this.lastIndex = v;
                }
            });
        }
        nf_init();
        var nv_getDate = function() {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(Date);
            return new(Function.prototype.bind.apply(Date, args));
        }
        var nv_getRegExp = function() {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(RegExp);
            return new(Function.prototype.bind.apply(RegExp, args));
        }
        var nv_console = {}
        nv_console.nv_log = function() {
            var res = "WXSRT:";
            for (var i = 0; i < arguments.length; ++i) res += arguments[i] + " ";
            console.log(res);
        }
        var nv_parseInt = parseInt,
            nv_parseFloat = parseFloat,
            nv_isNaN = isNaN,
            nv_isFinite = isFinite,
            nv_decodeURI = decodeURI,
            nv_decodeURIComponent = decodeURIComponent,
            nv_encodeURI = encodeURI,
            nv_encodeURIComponent = encodeURIComponent;

        function $gdc(o, p, r) {
            o = wh.rv(o);
            if (o === null || o === undefined) return o;
            if (o.constructor === String || o.constructor === Boolean || o.constructor === Number) return o;
            if (o.constructor === Object) {
                var copy = {};
                for (var k in o)
                    if (o.hasOwnProperty(k))
                        if (undefined === p) copy[k.substring(3)] = $gdc(o[k], p, r);
                        else copy[p + k] = $gdc(o[k], p, r);
                return copy;
            }
            if (o.constructor === Array) {
                var copy = [];
                for (var i = 0; i < o.length; i++) copy.push($gdc(o[i], p, r));
                return copy;
            }
            if (o.constructor === Date) {
                var copy = new Date();
                copy.setTime(o.getTime());
                return copy;
            }
            if (o.constructor === RegExp) {
                var f = "";
                if (o.global) f += "g";
                if (o.ignoreCase) f += "i";
                if (o.multiline) f += "m";
                return (new RegExp(o.source, f));
            }
            if (r && o.constructor === Function) {
                if (r == 1) return $gdc(o(), undefined, 2);
                if (r == 2) return o;
            }
            return null;
        }
        var nv_JSON = {}
        nv_JSON.nv_stringify = function(o) {
            JSON.stringify(o);
            return JSON.stringify($gdc(o));
        }
        nv_JSON.nv_parse = function(o) {
            if (o === undefined) return undefined;
            var t = JSON.parse(o);
            return $gdc(t, 'nv_');
        }

        function _af(p, a, r, c) {
            p.extraAttr = {
                "t_action": a,
                "t_rawid": r
            };
            if (typeof(c) != 'undefined') p.extraAttr.t_cid = c;
        }

        function _ai(i, p, e, me, r, c) {
            var x = _grp(p, e, me);
            if (x) i.push(x);
            else {
                i.push('');
                _wp(me + ':import:' + r + ':' + c + ': Path `' + p + '` not found from `' + me + '`.')
            }
        }

        function _grp(p, e, me) {
            if (p[0] != '/') {
                var mepart = me.split('/');
                mepart.pop();
                var ppart = p.split('/');
                for (var i = 0; i < ppart.length; i++) {
                    if (ppart[i] == '..') mepart.pop();
                    else if (!ppart[i] || ppart[i] == '.') continue;
                    else mepart.push(ppart[i]);
                }
                p = mepart.join('/');
            }
            if (me[0] == '.' && p[0] == '/') p = '.' + p;
            if (e[p]) return p;
            if (e[p + '.wxml']) return p + '.wxml';
        }

        function _gd(p, c, e, d) {
            if (!c) return;
            if (d[p][c]) return d[p][c];
            for (var x = e[p].i.length - 1; x >= 0; x--) {
                if (e[p].i[x] && d[e[p].i[x]][c]) return d[e[p].i[x]][c]
            };
            for (var x = e[p].ti.length - 1; x >= 0; x--) {
                var q = _grp(e[p].ti[x], e, p);
                if (q && d[q][c]) return d[q][c]
            }
            var ii = _gapi(e, p);
            for (var x = 0; x < ii.length; x++) {
                if (ii[x] && d[ii[x]][c]) return d[ii[x]][c]
            }
            for (var k = e[p].j.length - 1; k >= 0; k--)
                if (e[p].j[k]) {
                    for (var q = e[e[p].j[k]].ti.length - 1; q >= 0; q--) {
                        var pp = _grp(e[e[p].j[k]].ti[q], e, p);
                        if (pp && d[pp][c]) {
                            return d[pp][c]
                        }
                    }
                }
        }

        function _gapi(e, p) {
            if (!p) return [];
            if ($gaic[p]) {
                return $gaic[p]
            };
            var ret = [],
                q = [],
                h = 0,
                t = 0,
                put = {},
                visited = {};
            q.push(p);
            visited[p] = true;
            t++;
            while (h < t) {
                var a = q[h++];
                for (var i = 0; i < e[a].ic.length; i++) {
                    var nd = e[a].ic[i];
                    var np = _grp(nd, e, a);
                    if (np && !visited[np]) {
                        visited[np] = true;
                        q.push(np);
                        t++;
                    }
                }
                for (var i = 0; a != p && i < e[a].ti.length; i++) {
                    var ni = e[a].ti[i];
                    var nm = _grp(ni, e, a);
                    if (nm && !put[nm]) {
                        put[nm] = true;
                        ret.push(nm);
                    }
                }
            }
            $gaic[p] = ret;
            return ret;
        }
        var $ixc = {};

        function _ic(p, ent, me, e, s, r, gg) {
            var x = _grp(p, ent, me);
            ent[me].j.push(x);
            if (x) {
                if ($ixc[x]) {
                    _wp('-1:include:-1:-1: `' + p + '` is being included in a loop, will be stop.');
                    return;
                }
                $ixc[x] = true;
                try {
                    ent[x].f(e, s, r, gg)
                } catch (e) {}
                $ixc[x] = false;
            } else {
                _wp(me + ':include:-1:-1: Included path `' + p + '` not found from `' + me + '`.')
            }
        }

        function _w(tn, f, line, c) {
            _wp(f + ':template:' + line + ':' + c + ': Template `' + tn + '` not found.');
        }

        function _ev(dom) {
            var changed = false;
            delete dom.properities;
            delete dom.n;
            if (dom.children) {
                do {
                    changed = false;
                    var newch = [];
                    for (var i = 0; i < dom.children.length; i++) {
                        var ch = dom.children[i];
                        if (ch.tag == 'virtual') {
                            changed = true;
                            for (var j = 0; ch.children && j < ch.children.length; j++) {
                                newch.push(ch.children[j]);
                            }
                        } else {
                            newch.push(ch);
                        }
                    }
                    dom.children = newch;
                } while (changed);
                for (var i = 0; i < dom.children.length; i++) {
                    _ev(dom.children[i]);
                }
            }
            return dom;
        }

        function _tsd(root) {
            if (root.tag == "wx-wx-scope") {
                root.tag = "virtual";
                root.wxCkey = "11";
                root['wxScopeData'] = root.attr['wx:scope-data'];
                delete root.n;
                delete root.raw;
                delete root.generics;
                delete root.attr;
            }
            for (var i = 0; root.children && i < root.children.length; i++) {
                _tsd(root.children[i]);
            }
            return root;
        }

        var e_ = {}
        if (typeof(global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof(global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof(global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx_wxb2d7434be3e563d6 || [];

        function gz$gwx_wxb2d7434be3e563d6_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_wxb2d7434be3e563d6_1) return __WXML_GLOBAL__.ops_cached.$gwx_wxb2d7434be3e563d6_1
            __WXML_GLOBAL__.ops_cached.$gwx_wxb2d7434be3e563d6_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_wxb2d7434be3e563d6_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_wxb2d7434be3e563d6_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_wxb2d7434be3e563d6 = z;
        __WXML_GLOBAL__.ops_init.$gwx_wxb2d7434be3e563d6 = true;
        var nv_require = function() {
            var nnm = {};
            var nom = {};
            return function(n) {
                return function() {
                    if (!nnm[n]) return undefined;
                    try {
                        if (!nom[n]) nom[n] = nnm[n]();
                        return nom[n];
                    } catch (e) {
                        e.message = e.message.replace(/nv_/g, '');
                        var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
                        e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
                        e.stack = e.stack.replace(/\snv_/g, ' ');
                        e.stack = $gstack(e.stack);
                        e.stack += '\n    at ' + n.substring(2);
                        console.error(e);
                    }
                }
            }
        }()
        var x = ['./components/list/list.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_wxb2d7434be3e563d6_1()
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = []
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                }
                return root;
            }
        }
    }

    global.__wxAppCode__['plugin-private://wxb2d7434be3e563d6/components/list/list.json'] = {
        "component": true
    };
    if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxb2d7434be3e563d6/components/list/list.wxml'] = [$gwx_wxb2d7434be3e563d6, './components/list/list.wxml'];
    else global.__wxAppCode__['plugin-private://wxb2d7434be3e563d6/components/list/list.wxml'] = $gwx_wxb2d7434be3e563d6('./components/list/list.wxml');
    global.__wxAppCode__['plugin-private://wxb2d7434be3e563d6/plugin.json'] = {
        "main": "api/nb.js"
    };
    if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxb2d7434be3e563d6/plugin.wxml'] = [$gwx_wxb2d7434be3e563d6, './plugin.wxml'];
    else global.__wxAppCode__['plugin-private://wxb2d7434be3e563d6/plugin.wxml'] = $gwx_wxb2d7434be3e563d6('./plugin.wxml');

    define("api/des.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        "use strict";

        function r(r, e) {
            if ("number" == typeof r && "number" == typeof e) {
                for (var t = new Array(r), n = 0; n < r; n++) t[n] = new Array(e);
                return t
            }
            throw new Error("creatArray's parameters can only be numbers")
        }

        function e(r, e, a) {
            if (16 != r.length || 16 != e.length) throw new Error("The length of the source or key is not 16");
            return 0 == a ? n(r, e) : 1 == a ? t(r, e) : null
        }

        function t(r, e) {
            var t = "",
                n = d(r);
            n = h(n);
            for (var u = [], s = [], o = [], c = 0; c < 32; c++) u[c] = n[c], s[c] = n[c + 32];
            i(e);
            for (var l = 16; l > 0; l--) o = u, u = s, s = E(o, a(s, q[l - 1]));
            for (var v = 0; v < 32; v++) n[v] = s[v], n[32 + v] = u[v];
            n = f(n);
            for (var g = 0; g < n.length; g++) t += n[g];
            return t = b(t)
        }

        function n(e, t) {
            var n = [],
                u = d(e);
            u = h(u);
            for (var s = r(17, 32), o = r(17, 32), c = 0; c < 32; c++) s[0][c] = u[c], o[0][c] = u[c + 32];
            i(t);
            for (var l = 1; l < 17; l++) {
                var v = q[l - 1];
                s[l] = o[l - 1];
                var g = a(o[l - 1], v);
                o[l] = E(s[l - 1], g)
            }
            for (var p = 0; p < 32; p++) n[p] = o[16][p], n[32 + p] = s[16][p];
            return n = f(n), b(m(n))
        }

        function a(r, e) {
            var t = [];
            return t = E(c(r), e), u(t)
        }

        function u(e) {
            for (var t = [], n = r(8, 6), a = [S, D, B, F, k, I, T, x], u = "", c = 0; c < 8; c++)
                for (var f = 0; f < 6; f++) n[c][f] = e[6 * c + f];
            for (var i = 0; i < 8; i++) {
                var l = 2 * n[i][0] + n[i][5],
                    v = 8 * n[i][1] + 4 * n[i][2] + 2 * n[i][3] + n[i][4];
                u += o(a[i][l][v])
            }
            return t = d(u.toString()), t = s(t)
        }

        function s(r) {
            for (var e = [], t = [16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5, 18, 31, 10, 2, 8, 24, 14, 32, 27, 3, 9, 19, 13, 30, 6, 22, 11, 4, 25], n = r.length, a = 0; a < n; a++) e[a] = r[t[a] - 1];
            return e
        }

        function o(r) {
            switch (r) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    return "" + r;
                case 10:
                    return "A";
                case 11:
                    return "B";
                case 12:
                    return "C";
                case 13:
                    return "D";
                case 14:
                    return "E";
                case 15:
                    return "F";
                default:
                    return null
            }
        }

        function c(r) {
            for (var e = [], t = [32, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8, 9, 10, 11, 12, 13, 12, 13, 14, 15, 16, 17, 16, 17, 18, 19, 20, 21, 20, 21, 22, 23, 24, 25, 24, 25, 26, 27, 28, 29, 28, 29, 30, 31, 32, 1], n = 0; n < 48; n++) e[n] = r[t[n] - 1];
            return e
        }

        function f(r) {
            for (var e = [], t = 0; t < 64; t++) e[t] = r[U[t] - 1];
            return e
        }

        function i(e) {
            q.length > 0 && (q = r(16, 48));
            var t = [],
                n = [],
                a = [];
            a = g(d(e));
            for (var u = 0; u < 28; u++) t[u] = a[u], n[u] = a[u + 28];
            for (var s = 0; s < 16; s++) {
                t = v(t, j[s]), n = v(n, j[s]);
                for (var o = 0; o < 28; o++) a[o] = t[o], a[o + 28] = n[o];
                q[s] = l(a)
            }
        }

        function l(r) {
            for (var e = [], t = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32], n = 0; n < 48; n++) e[n] = r[t[n] - 1];
            return e
        }

        function v(r, e) {
            for (var t = 0, n = r.length, a = j[e], u = 0; u < a; u++) {
                t = r[0];
                for (var s = 0; s < n - 1; s++) r[s] = r[s + 1];
                r[n - 1] = t
            }
            return r
        }

        function g(r) {
            for (var e = [], t = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4], n = 0; n < 56; n++) e[n] = r[t[n] - 1];
            return e
        }

        function h(r) {
            for (var e = [], t = 0; t < 64; t++) e[t] = r[O[t] - 1];
            return e
        }

        function p(r) {
            for (var e = "", t = 0; t < str.length; t++) e += str.charCodeAt(t).toString(16);
            return e
        }

        function b(r) {
            var e = "",
                t = r.length;
            if (t % 4 != 0)
                for (; 0 < 4 - t % 4;) r = "0" + r;
            for (var n = 0; n < t / 4; n++) e += w(r.substring(4 * n, 4 * n + 4));
            return e
        }

        function w(r) {
            var e = r.length,
                t = 0,
                n = 0;
            if (e > 4) return null;
            for (var a = e; a > 0; a--) t += parseInt(r.substring(a - 1, a)) * y(2, n), n++;
            switch (t) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    return "" + t;
                case 10:
                    return "A";
                case 11:
                    return "B";
                case 12:
                    return "C";
                case 13:
                    return "D";
                case 14:
                    return "E";
                case 15:
                    return "F";
                default:
                    return null
            }
        }

        function y(r, e) {
            var t = r;
            0 == e && (r = 1);
            for (var n = 2; n <= e; n++) r *= t;
            return r
        }

        function d(r) {
            for (var e = r.length, t = [], n = r.split(""), a = 0; a < e; a++) {
                var u = null;
                u = A(n[a]);
                for (var s = 4 * a + 3, o = 3; o >= 0; o--) t[s] = parseInt(u[o].valueOf()), s--
            }
            return t
        }

        function A(r) {
            switch (r.toUpperCase()) {
                case "0":
                    return "0000".split("");
                case "1":
                    return "0001".split("");
                case "2":
                    return "0010".split("");
                case "3":
                    return "0011".split("");
                case "4":
                    return "0100".split("");
                case "5":
                    return "0101".split("");
                case "6":
                    return "0110".split("");
                case "7":
                    return "0111".split("");
                case "8":
                    return "1000".split("");
                case "9":
                    return "1001".split("");
                case "A":
                    return "1010".split("");
                case "B":
                    return "1011".split("");
                case "C":
                    return "1100".split("");
                case "D":
                    return "1101".split("");
                case "E":
                    return "1110".split("");
                case "F":
                    return "1111".split("")
            }
        }

        function E(r, e) {
            for (var t = r.length, n = [], a = 0; a < t; a++) n[a] = r[a] ^ e[a];
            return n
        }

        function m(r) {
            try {
                for (var e = "", t = 0; t < r.length; t++) e += r[t];
                return e.toString()
            } catch (r) {
                return null
            }
        }
        var C = 1,
            S = [
                [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
                [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
                [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
                [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13]
            ],
            D = [
                [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
                [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
                [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
                [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9]
            ],
            B = [
                [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],
                [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
                [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
                [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12]
            ],
            F = [
                [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
                [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
                [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
                [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14]
            ],
            k = [
                [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
                [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
                [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
                [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3]
            ],
            I = [
                [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
                [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
                [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
                [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13]
            ],
            T = [
                [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
                [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
                [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],
                [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12]
            ],
            x = [
                [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],
                [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
                [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
                [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11]
            ],
            O = [58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46, 38, 30, 22, 14, 6, 64, 56, 48, 40, 32, 24, 16, 8, 57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39, 31, 23, 15, 7],
            U = [40, 8, 48, 16, 56, 24, 64, 32, 39, 7, 47, 15, 55, 23, 63, 31, 38, 6, 46, 14, 54, 22, 62, 30, 37, 5, 45, 13, 53, 21, 61, 29, 36, 4, 44, 12, 52, 20, 60, 28, 35, 3, 43, 11, 51, 19, 59, 27, 34, 2, 42, 10, 50, 18, 58, 26, 33, 1, 41, 9, 49, 17, 57, 25],
            j = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1],
            q = r(16, 48);
        module.exports = {
            des1: e,
            des3Decrypt: function(r, e, a) {
                if (32 != e.length) return null;
                a == C && (r = p());
                var u = r.length,
                    s = u % 16 == 0 ? u / 16 : u / 16 + 1,
                    o = [];
                if (u % 16 == 0) r += "8000000000000000";
                else {
                    r += "80";
                    for (var c = 0; c < 15 - u % 16; c++) r += "00"
                }
                for (var f = 0; f < s; f++) o[f] = r.substring(16 * f, 16 * f + 16);
                for (var i = "", l = e.substring(0, e.length / 2), v = e.substring(e.length / 2), g = 0; g < s; g++) i += t(n(t(o[g], l), v), l);
                return i.toString()
            },
            des3: function(r, e, a) {
                if (32 != e.length) throw new Error("The length of the key is not 32");
                a == C && (r = p());
                var u = r.length,
                    s = u % 16 == 0 ? u / 16 : u / 16 + 1,
                    o = [];
                if (u % 16 == 0) r += "8000000000000000";
                else {
                    r += "80";
                    for (var c = 0; c < 15 - u % 16; c++) r += "00"
                }
                for (var f = 0; f < s; f++) o[f] = r.substring(16 * f, 16 * f + 16);
                for (var i = "", l = e.substring(0, e.length / 2), v = e.substring(e.length / 2), g = 0; g < s; g++) i += n(t(n(o[g], l), v), l);
                return i.toString()
            }
        };
    });
    define("api/nb.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        "use strict";
        var t = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a])
                }
                return t
            },
            e = require("./des"),
            r = function(t, e) {
                if (!t || "string" != typeof t && "number" != typeof t) throw new Error("parameter of formatTime function should be timestamp");
                var r = new Date(parseInt(t)),
                    s = parseInt(r.getFullYear().toString().substr(2, 2)),
                    n = r.getMonth() + 1,
                    o = r.getDate(),
                    i = r.getHours(),
                    u = r.getMinutes(),
                    c = r.getSeconds(),
                    f = r.getMilliseconds();
                return f = f.toString(), f = f[1] ? f[2] ? f : "0" + f : "00" + f, !0 === e ? [s, n, o, i, u, c, f].map(a).join("") : [s, n, o, i, u, c].map(a).join("")
            },
            a = function(t) {
                return (t = t.toString(16))[1] ? t : "0" + t
            },
            s = function(t, r) {
                var a = t.length % 16;
                if (0 !== a) {
                    a = 16 - a;
                    for (var s = 0; s < a; s++) t += "A"
                }
                return (0, e.des3)(t, r)
            },
            n = function() {
                for (var t = "0123456789ABCDEF", e = "", r = 0; r < 2; r++) e += t[Math.floor(Math.random() * t.length)];
                return e
            },
            o = function(t, e, r) {
                t = parseInt("0x" + t, 16), e = parseInt("0x" + e, 16), r = parseInt("0x" + r, 16);
                var a = t - 170;
                if (isNaN(a) || isNaN(e) || isNaN(r)) throw new Error("parameter of getCode function is not a number");
                return a < 0 && (a += 256), a = a ^ e ^ r, (a = a.toString(16).toUpperCase())[1] || (a = "0" + a), a
            },
            i = function(t, e, r) {
                if (t = parseInt("0x" + t, 16), e = parseInt("0x" + e, 16), r = parseInt("0x" + r, 16), isNaN(t) || isNaN(e) || isNaN(r)) throw new Error("parameter of getResCode function is not a number");
                var a = 170 + (t ^ e ^ r);
                return a > 255 && (a -= 256), (a = a.toString(16).toUpperCase())[1] || (a = "0" + a), a
            },
            u = function(t) {
                var e = 0,
                    r = 0;
                for (t.length; r < t.length;)(e += parseInt("0x" + t.substr(r, 2), 16)) > 255 && (e -= 256), r += 2;
                return (e = e.toString(16).toUpperCase())[1] || (e = "0" + e), e
            },
            c = function(t) {
                var e = Math.ceil(t.length / 2).toString(16);
                return e[1] || (e = "0" + e), e
            },
            f = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.data,
                    r = t.restore,
                    a = void 0 === r || r;
                if (!e || "string" != typeof e || 0 != e.indexOf("A5") && 0 != e.indexOf("a5")) throw new Error("parameter.data of changeChar function should be string that start with 'A5'");
                e = (e = e.toUpperCase()).substr(2);
                var s = "";
                if (a) {
                    for (var n = 0, o = e.length; n < o; n += 2) {
                        var i = e.substr(n, 2);
                        "1B" === i ? "E7" === e.substr(n + 2, 2) ? (s += "A5", n += 2) : "00E7" === e.substr(n + 2, 4) ? (s += "1BE7", n += 4) : s += i : s += i
                    }
                    return "A5" + s
                }
                for (var u = 0, c = e.length; u < c; u += 2) {
                    var f = e.substr(u, 2);
                    "A5" === f ? s += "1BE7" : "1BE7" === e.substr(u, 4) ? (s += "1B00E7", u += 2) : s += f
                }
                return "A5" + s
            },
            d = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.rns0,
                    r = void 0 === e ? null : e,
                    a = t.rns1,
                    s = void 0 === a ? null : a,
                    o = t.cmd,
                    d = t.data,
                    l = void 0 === d ? "" : d,
                    m = "A5",
                    p = n(),
                    g = n();
                if (r || (r = n()), s || (s = n()), !o) throw new Error("parameter.cmd of sendData function is null");
                var b = p + g + i(s, g, p) + i(r, g, p) + i(o, g, p);
                return m = m + c(b + l) + b + l + u(b + l), m = f({
                    data: m.toUpperCase(),
                    restore: !1
                }), {
                    data: m
                }
            },
            l = function(t) {
                var e = t.p,
                    r = t.success,
                    a = t.fail,
                    s = t.complete;
                return e.then(function(t) {
                    r && "function" == typeof r && r(t), s && "function" == typeof s && s(t)
                }).catch(function(t) {
                    if (!(t && t.nbCode && t.nbCode >= 10050)) throw t;
                    a && "function" == typeof a && a(t), s && "function" == typeof s && s(t)
                }), e
            },
            m = function(t, e, r, a) {
                if (!t && !t.data && t.data.length < 45) throw new Error("macBackData of F0 should be 96-bit string");
                t.SN = t.data.substr(0, 16), t.Mac = t.data.substr(16, 12), t.IMEI = t.data.substr(28, 16), t.data.length > 70 ? 17 == t.type ? (t.cumulative = t.data.substr(44, 8), t.rate = t.data.substr(52, 4), t.deductionFeeRate = t.data.substr(56, 2), t.quota = t.data.substr(58, 4), t.QValue = t.data.substr(62, 2), t.temperature = t.data.substr(64, 2), t.temperatureSetting = t.data.substr(66, 2), t.gears = t.data.substr(68, 2), t.switchState = t.data.substr(70, 2)) : (t.cumulative = t.data.substr(44, 8), t.rate = t.data.substr(52, 4), t.deductionFeeRate = t.data.substr(56, 2), t.quota = t.data.substr(58, 4), t.QValue = t.data.substr(62, 2), t.lackOfWaterAlarmTime = t.data.substr(64, 2), t.antimagneticAlarmNum = t.data.substr(66, 2), t.meterAlarmNum = t.data.substr(68, 2), t.shieldDestroyedAlarm = t.data.substr(70, 2)) : t.data.length >= 48 && t.data.length < 70 && (t.pwdVer = t.data.substr(44, 4));
                var s = Promise.resolve(t);
                return l({
                    success: e,
                    fail: r,
                    complete: a,
                    p: s
                })
            },
            p = function(t, e, r, a) {
                var s = Promise.resolve(t);
                return l({
                    success: e,
                    fail: r,
                    complete: a,
                    p: s
                })
            },
            g = function(t, e, r, a) {
                var s = t.data.substr(0, 2),
                    n = void 0;
                if ("03" == s) {
                    var o = t.data.substr(2, 8);
                    n = Promise.reject({
                        nbCode: 10053,
                        nbMsg: "设备正在忙",
                        ID: o
                    })
                } else n = "06" == s ? Promise.reject({
                    nbCode: 10051,
                    nbMsg: "该账户正在使用中"
                }) : Promise.resolve(t);
                return l({
                    success: e,
                    fail: r,
                    complete: a,
                    p: n
                })
            },
            b = function(t, e, r, a) {
                var s = t.data.substr(0, 2),
                    n = void 0;
                if ("00" == s) n = Promise.resolve(t);
                else if ("01" == s) n = Promise.reject({
                    nbCode: 10052,
                    nbMsg: "授权失败"
                });
                else if ("03" == s) {
                    var o = t.data.substr(2, 8);
                    n = Promise.reject({
                        nbCode: 10053,
                        nbMsg: "设备正在忙",
                        ID: o
                    })
                } else n = Promise.reject({
                    nbCode: 10054,
                    nbMsg: "消费记录返回失败"
                });
                return l({
                    success: e,
                    fail: r,
                    complete: a,
                    p: n
                })
            },
            v = function(t, e, r, a) {
                var s = t.data.substr(0, 2),
                    n = void 0;
                if ("00" == s) n = Promise.resolve(t);
                else if ("01" == s) n = Promise.resolve({
                    nbMsg: "设备已关闭"
                });
                else {
                    var o = t.data.substr(2, 8);
                    n = Promise.reject({
                        nbCode: 10053,
                        nbMsg: "设备正在忙",
                        ID: o
                    })
                }
                return l({
                    success: e,
                    fail: r,
                    complete: a,
                    p: n
                })
            },
            h = function(t, e, r, a) {
                var s = t.data.substr(0, 2),
                    n = void 0;
                if ("00" == s) n = Promise.resolve(t);
                else if ("01" == s) n = Promise.reject({
                    nbCode: 10052,
                    nbMsg: "授权失败"
                });
                else if ("02" == s) n = Promise.reject({
                    nbCode: 10055,
                    nbMsg: "未绑定设备"
                });
                else {
                    var o = t.data.substr(2, 8);
                    n = Promise.reject({
                        nbCode: 10053,
                        nbMsg: "设备正在忙",
                        ID: o
                    })
                }
                return l({
                    success: e,
                    fail: r,
                    complete: a,
                    p: n
                })
            },
            w = function(t, e, r, a) {
                var s = void 0;
                return s = "00" == t.data.substr(0, 2) ? Promise.resolve(t) : Promise.reject({
                    nbCode: 10056,
                    nbMsg: "更新失败"
                }), l({
                    success: e,
                    fail: r,
                    complete: a,
                    p: s
                })
            },
            D = function(t, e, r, a) {
                var s = void 0;
                return s = "00" == t.data.substr(0, 2) ? Promise.resolve(t) : Promise.reject({
                    nbCode: 10056,
                    nbMsg: "更新失败"
                }), l({
                    success: e,
                    fail: r,
                    complete: a,
                    p: s
                })
            },
            P = function(t) {
                var e = t.data;
                if ("string" == typeof e && 0 === e.indexOf("A5") && e.length >= 24) {
                    var r = (e = e.toUpperCase()).substr(4, e.length - 6),
                        a = r.substr(0, 2),
                        s = r.substr(2, 2);
                    return {
                        rns3: a,
                        rns2: s,
                        rns1: o(r.substr(4, 2), s, a),
                        rns0: o(r.substr(6, 2), s, a),
                        cmd: o(r.substr(8, 2), s, a),
                        type: o(r.substr(10, 2), s, a),
                        version: o(r.substr(12, 2), s, a),
                        way: o(r.substr(14, 2), s, a),
                        status: o(r.substr(16, 2), s, a),
                        data: r.substr(18),
                        originalData: e
                    }
                }
                throw new Error("data of resolveData function should be string that start with 'A5' and more than 24-bit")
            };
        module.exports = {
            getF0Data: function(e) {
                var r = Promise.resolve(d({
                    cmd: "F0"
                }));
                return l(t({}, e, {
                    p: r
                }))
            },
            get08Data: function(e) {
                var r = Promise.resolve(d({
                    cmd: "08"
                }));
                return l(t({}, e, {
                    p: r
                }))
            },
            get02Data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.type,
                    r = t.ID,
                    a = void 0 === r ? "" : r,
                    s = t.success,
                    n = t.fail,
                    o = t.complete;
                if ("string" != typeof e) throw new Error("parameter.type of get02Data function should be string");
                if ("01" !== (e = e[1] ? e : "0" + e) || a && 16 == a.length) {
                    if ("01" === e) {
                        var i = Promise.resolve(d({
                            cmd: "02",
                            data: e + a
                        }));
                        return l({
                            success: s,
                            fail: n,
                            complete: o,
                            p: i
                        })
                    }
                    if ("00" === e) {
                        var u = Promise.resolve(d({
                            cmd: "02",
                            data: e
                        }));
                        return l({
                            success: s,
                            fail: n,
                            complete: o,
                            p: u
                        })
                    }
                    throw new Error("parameter.type of get02Data function is invalid")
                }
                throw new Error("parameter.ID of get02Data function should be 16-bit string")
            },
            get06Data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.type,
                    r = t.data,
                    a = void 0 === r ? "" : r,
                    s = t.success,
                    n = t.fail,
                    o = t.complete;
                if ("string" != typeof e) throw new Error("parameter.type of get06Data function should be string");
                if (!a) throw new Error("parameter.data of get06Data function should be string");
                if ("01" === (e = e[1] ? e : "0" + e) || "02" === e) {
                    var i = Promise.resolve(d({
                        cmd: "06",
                        data: e + a
                    }));
                    return l({
                        success: s,
                        fail: n,
                        complete: o,
                        p: i
                    })
                }
                throw new Error("parameter.type of get06Data function is invalid")
            },
            get14Data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.ID,
                    r = t.success,
                    a = t.fail,
                    s = t.complete;
                if (!e || e && 16 != e.length) throw new Error("parameter.ID of get14Data function should be 16-bit string");
                var n = Promise.resolve(d({
                    cmd: "14",
                    data: "00" + e
                }));
                return l({
                    success: r,
                    fail: a,
                    complete: s,
                    p: n
                })
            },
            get01Data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.SN,
                    a = t.appKey,
                    n = t.randonNum,
                    o = t.ID,
                    i = t.success,
                    u = t.fail,
                    c = t.complete;
                if (!e || e && 16 != e.length) throw new Error("parameter.SN of get01Data function should be 16-bit string");
                if (!a || a && 8 != a.length) throw new Error("parameter.appKey of get01Data function should be 8-bit string");
                if (!n || n && 8 != n.length) throw new Error("parameter.randonNum of get01Data function should be 8-bit string");
                if (!o || o && 16 != o.length) throw new Error("parameter.ID of get01Data function should be 16-bit string");
                var f = e.toString() + n.toString() + a.toString(),
                    m = (new Date).getTime(),
                    p = "00" + s(o + "0000FFFFFFFF", f) + r(m),
                    g = Promise.resolve(d({
                        cmd: "01",
                        data: p
                    }));
                return l({
                    success: i,
                    fail: u,
                    complete: c,
                    p: g
                })
            },
            get07Data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.data,
                    r = t.success,
                    a = t.fail,
                    s = t.complete;
                if (e) {
                    var n = Promise.resolve(d({
                        cmd: "07",
                        data: e
                    }));
                    return l({
                        success: r,
                        fail: a,
                        complete: s,
                        p: n
                    })
                }
                throw new Error("parameter.data of get07Data function should be string")
            },
            get15Data: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.data,
                    r = t.success,
                    a = t.fail,
                    s = t.complete;
                if (e) {
                    var n = Promise.resolve(d({
                        cmd: "15",
                        data: e
                    }));
                    return l({
                        success: r,
                        fail: a,
                        complete: s,
                        p: n
                    })
                }
                throw new Error("parameter.data of get15Data function should be string")
            },
            getBackData: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.sendData,
                    r = t.macBackData,
                    a = t.success,
                    s = t.fail,
                    n = t.complete;
                if (!e) throw new Error("parameter.sendData of getBackData function should be string");
                if (!r) throw new Error("parameter.macBackData of getBackData function should be string");
                var i = P({
                        data: r
                    }),
                    u = (e = f({
                        data: e
                    })).substr(4, 2),
                    c = e.substr(6, 2),
                    d = o(e.substr(12, 2), c, u);
                if (i.rns1 !== u || i.rns0 !== c) {
                    var E = Promise.reject({
                        nbCode: 10050,
                        nbMsg: "数据验证错误"
                    });
                    return l({
                        success: a,
                        fail: s,
                        complete: n,
                        p: E
                    })
                }
                switch (d) {
                    case "F0":
                        return m(i, a, s, n);
                    case "08":
                        return p(i, a, s, n);
                    case "02":
                        return g(i, a, s, n);
                    case "06":
                        return b(i, a, s, n);
                    case "14":
                        return v(i, a, s, n);
                    case "01":
                        return h(i, a, s, n);
                    case "07":
                        return w(i, a, s, n);
                    case "15":
                        return D(i, a, s, n)
                }
            },
            changeChar: f,
            resolveData: P,
            getCode: o
        };
    });
    define("index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        "use strict";
    });
    global.__wxAppCurrentFile__ = 'plugin-private://wxb2d7434be3e563d6/components/list/list.js';
    global.__wxRouteBegin = true;
    define("components/list/list.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        "use strict";
        Component({
            data: {
                list: []
            },
            attached: function() {
                this.setData({
                    list: [{
                        name: "电视",
                        price: 1e3
                    }, {
                        name: "电脑",
                        price: 4e3
                    }, {
                        name: "手机",
                        price: 3e3
                    }]
                })
            }
        });
    });
    require("components/list/list.js");

    global.publishDomainComponents({

    })
    module.exports = function() {
        return require('api/nb.js')
    }
});
requirePlugin("plugin://wxb2d7434be3e563d6");
/*v0.5vv_20211229_syb_scopedata*/
global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
global.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
$gwx = function(path, global) {
    if (typeof global === 'undefined') global = {};
    if (typeof __WXML_GLOBAL__ === 'undefined') {
        __WXML_GLOBAL__ = {};
    }
    __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};

    function _(a, b) {
        if (typeof(b) != 'undefined') a.children.push(b);
    }

    function _v(k) {
        if (typeof(k) != 'undefined') return {
            tag: 'virtual',
            'wxKey': k,
            children: []
        };
        return {
            tag: 'virtual',
            children: []
        };
    }

    function _n(tag) {
        return {
            tag: 'wx-' + tag,
            attr: {},
            children: [],
            n: [],
            raw: {},
            generics: {}
        }
    }

    function _p(a, b) {
        b && a.properities.push(b);
    }

    function _s(scope, env, key) {
        return typeof(scope[key]) != 'undefined' ? scope[key] : env[key]
    }

    function _wp(m) {
        console.warn("WXMLRT_$gwx:" + m)
    }

    function _wl(tname, prefix) {
        _wp(prefix + ':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')
    }
    $gwn = console.warn;
    $gwl = console.log;

    function $gwh() {
        function x() {}
        x.prototype = {
            hn: function(obj, all) {
                if (typeof(obj) == 'object') {
                    var cnt = 0;
                    var any1 = false,
                        any2 = false;
                    for (var x in obj) {
                        any1 = any1 | x === '__value__';
                        any2 = any2 | x === '__wxspec__';
                        cnt++;
                        if (cnt > 2) break;
                    }
                    return cnt == 2 && any1 && any2 && (all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h') ? "h" : "n";
                }
                return "n";
            },
            nh: function(obj, special) {
                return {
                    __value__: obj,
                    __wxspec__: special ? special : true
                }
            },
            rv: function(obj) {
                return this.hn(obj, true) === 'n' ? obj : this.rv(obj.__value__);
            },
            hm: function(obj) {
                if (typeof(obj) == 'object') {
                    var cnt = 0;
                    var any1 = false,
                        any2 = false;
                    for (var x in obj) {
                        any1 = any1 | x === '__value__';
                        any2 = any2 | x === '__wxspec__';
                        cnt++;
                        if (cnt > 2) break;
                    }
                    return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__));
                }
                return false;
            }
        }
        return new x;
    }
    wh = $gwh();

    function $gstack(s) {
        var tmp = s.split('\n ' + ' ' + ' ' + ' ');
        for (var i = 0; i < tmp.length; ++i) {
            if (0 == i) continue;
            if (")" === tmp[i][tmp[i].length - 1])
                tmp[i] = tmp[i].replace(/\s\(.*\)$/, "");
            else
                tmp[i] = "at anonymous function";
        }
        return tmp.join('\n ' + ' ' + ' ' + ' ');
    }

    function $gwrt(should_pass_type_info) {
        function ArithmeticEv(ops, e, s, g, o) {
            var _f = false;
            var rop = ops[0][1];
            var _a, _b, _c, _d, _aa, _bb;
            switch (rop) {
                case '?:':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h');
                    _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : rev(ops[3], e, s, g, o, _f);
                    _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                    return _d;
                    break;
                case '&&':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h');
                    _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : wh.rv(_a);
                    _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                    return _d;
                    break;
                case '||':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h');
                    _d = wh.rv(_a) ? wh.rv(_a) : rev(ops[2], e, s, g, o, _f);
                    _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                    return _d;
                    break;
                case '+':
                case '*':
                case '/':
                case '%':
                case '|':
                case '^':
                case '&':
                case '===':
                case '==':
                case '!=':
                case '!==':
                case '>=':
                case '<=':
                case '>':
                case '<':
                case '<<':
                case '>>':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _b = rev(ops[2], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
                    switch (rop) {
                        case '+':
                            _d = wh.rv(_a) + wh.rv(_b);
                            break;
                        case '*':
                            _d = wh.rv(_a) * wh.rv(_b);
                            break;
                        case '/':
                            _d = wh.rv(_a) / wh.rv(_b);
                            break;
                        case '%':
                            _d = wh.rv(_a) % wh.rv(_b);
                            break;
                        case '|':
                            _d = wh.rv(_a) | wh.rv(_b);
                            break;
                        case '^':
                            _d = wh.rv(_a) ^ wh.rv(_b);
                            break;
                        case '&':
                            _d = wh.rv(_a) & wh.rv(_b);
                            break;
                        case '===':
                            _d = wh.rv(_a) === wh.rv(_b);
                            break;
                        case '==':
                            _d = wh.rv(_a) == wh.rv(_b);
                            break;
                        case '!=':
                            _d = wh.rv(_a) != wh.rv(_b);
                            break;
                        case '!==':
                            _d = wh.rv(_a) !== wh.rv(_b);
                            break;
                        case '>=':
                            _d = wh.rv(_a) >= wh.rv(_b);
                            break;
                        case '<=':
                            _d = wh.rv(_a) <= wh.rv(_b);
                            break;
                        case '>':
                            _d = wh.rv(_a) > wh.rv(_b);
                            break;
                        case '<':
                            _d = wh.rv(_a) < wh.rv(_b);
                            break;
                        case '<<':
                            _d = wh.rv(_a) << wh.rv(_b);
                            break;
                        case '>>':
                            _d = wh.rv(_a) >> wh.rv(_b);
                            break;
                        default:
                            break;
                    }
                    return _c ? wh.nh(_d, "c") : _d;
                    break;
                case '-':
                    _a = ops.length === 3 ? rev(ops[1], e, s, g, o, _f) : 0;
                    _b = ops.length === 3 ? rev(ops[2], e, s, g, o, _f) : rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
                    _d = _c ? wh.rv(_a) - wh.rv(_b) : _a - _b;
                    return _c ? wh.nh(_d, "c") : _d;
                    break;
                case '!':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) == 'h');
                    _d = !wh.rv(_a);
                    return _c ? wh.nh(_d, "c") : _d;
                case '~':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) == 'h');
                    _d = ~wh.rv(_a);
                    return _c ? wh.nh(_d, "c") : _d;
                default:
                    $gwn('unrecognized op' + rop);
            }
        }

        function rev(ops, e, s, g, o, newap) {
            var op = ops[0];
            var _f = false;
            if (typeof newap !== "undefined") o.ap = newap;
            if (typeof(op) === 'object') {
                var vop = op[0];
                var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
                switch (vop) {
                    case 2:
                        return ArithmeticEv(ops, e, s, g, o);
                        break;
                    case 4:
                        return rev(ops[1], e, s, g, o, _f);
                        break;
                    case 5:
                        switch (ops.length) {
                            case 2:
                                _a = rev(ops[1], e, s, g, o, _f);
                                return should_pass_type_info ? [_a] : [wh.rv(_a)];
                                return [_a];
                                break;
                            case 1:
                                return [];
                                break;
                            default:
                                _a = rev(ops[1], e, s, g, o, _f);
                                _b = rev(ops[2], e, s, g, o, _f);
                                _a.push(
                                    should_pass_type_info ?
                                    _b :
                                    wh.rv(_b)
                                );
                                return _a;
                                break;
                        }
                        break;
                    case 6:
                        _a = rev(ops[1], e, s, g, o);
                        var ap = o.ap;
                        _ta = wh.hn(_a) === 'h';
                        _aa = _ta ? wh.rv(_a) : _a;
                        o.is_affected |= _ta;
                        if (should_pass_type_info) {
                            if (_aa === null || typeof(_aa) === 'undefined') {
                                return _ta ? wh.nh(undefined, 'e') : undefined;
                            }
                            _b = rev(ops[2], e, s, g, o, _f);
                            _tb = wh.hn(_b) === 'h';
                            _bb = _tb ? wh.rv(_b) : _b;
                            o.ap = ap;
                            o.is_affected |= _tb;
                            if (_bb === null || typeof(_bb) === 'undefined' ||
                                _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
                                return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
                            }
                            _d = _aa[_bb];
                            if (typeof _d === 'function' && !ap) _d = undefined;
                            _td = wh.hn(_d) === 'h';
                            o.is_affected |= _td;
                            return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
                        } else {
                            if (_aa === null || typeof(_aa) === 'undefined') {
                                return undefined;
                            }
                            _b = rev(ops[2], e, s, g, o, _f);
                            _tb = wh.hn(_b) === 'h';
                            _bb = _tb ? wh.rv(_b) : _b;
                            o.ap = ap;
                            o.is_affected |= _tb;
                            if (_bb === null || typeof(_bb) === 'undefined' ||
                                _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
                                return undefined;
                            }
                            _d = _aa[_bb];
                            if (typeof _d === 'function' && !ap) _d = undefined;
                            _td = wh.hn(_d) === 'h';
                            o.is_affected |= _td;
                            return _td ? wh.rv(_d) : _d;
                        }
                    case 7:
                        switch (ops[1][0]) {
                            case 11:
                                o.is_affected |= wh.hn(g) === 'h';
                                return g;
                            case 3:
                                _s = wh.rv(s);
                                _e = wh.rv(e);
                                _b = ops[1][1];
                                if (g && g.f && g.f.hasOwnProperty(_b)) {
                                    _a = g.f;
                                    o.ap = true;
                                } else {
                                    _a = _s && _s.hasOwnProperty(_b) ?
                                        s : (_e && _e.hasOwnProperty(_b) ? e : undefined);
                                }
                                if (should_pass_type_info) {
                                    if (_a) {
                                        _ta = wh.hn(_a) === 'h';
                                        _aa = _ta ? wh.rv(_a) : _a;
                                        _d = _aa[_b];
                                        _td = wh.hn(_d) === 'h';
                                        o.is_affected |= _ta || _td;
                                        _d = _ta && !_td ? wh.nh(_d, 'e') : _d;
                                        return _d;
                                    }
                                } else {
                                    if (_a) {
                                        _ta = wh.hn(_a) === 'h';
                                        _aa = _ta ? wh.rv(_a) : _a;
                                        _d = _aa[_b];
                                        _td = wh.hn(_d) === 'h';
                                        o.is_affected |= _ta || _td;
                                        return wh.rv(_d);
                                    }
                                }
                                return undefined;
                        }
                        break;
                    case 8:
                        _a = {};
                        _a[ops[1]] = rev(ops[2], e, s, g, o, _f);
                        return _a;
                        break;
                    case 9:
                        _a = rev(ops[1], e, s, g, o, _f);
                        _b = rev(ops[2], e, s, g, o, _f);

                        function merge(_a, _b, _ow) {
                            var ka, _bbk;
                            _ta = wh.hn(_a) === 'h';
                            _tb = wh.hn(_b) === 'h';
                            _aa = wh.rv(_a);
                            _bb = wh.rv(_b);
                            for (var k in _bb) {
                                if (_ow || !_aa.hasOwnProperty(k)) {
                                    _aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k], 'e') : _bb[k]) : wh.rv(_bb[k]);
                                }
                            }
                            return _a;
                        }
                        var _c = _a
                        var _ow = true
                        if (typeof(ops[1][0]) === "object" && ops[1][0][0] === 10) {
                            _a = _b
                            _b = _c
                            _ow = false
                        }
                        if (typeof(ops[1][0]) === "object" && ops[1][0][0] === 10) {
                            var _r = {}
                            return merge(merge(_r, _a, _ow), _b, _ow);
                        } else
                            return merge(_a, _b, _ow);
                        break;
                    case 10:
                        _a = rev(ops[1], e, s, g, o, _f);
                        _a = should_pass_type_info ? _a : wh.rv(_a);
                        return _a;
                        break;
                    case 12:
                        var _r;
                        _a = rev(ops[1], e, s, g, o);
                        if (!o.ap) {
                            return should_pass_type_info && wh.hn(_a) === 'h' ? wh.nh(_r, 'f') : _r;
                        }
                        var ap = o.ap;
                        _b = rev(ops[2], e, s, g, o, _f);
                        o.ap = ap;
                        _ta = wh.hn(_a) === 'h';
                        _tb = _ca(_b);
                        _aa = wh.rv(_a);
                        _bb = wh.rv(_b);
                        snap_bb = $gdc(_bb, "nv_");
                        try {
                            _r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
                        } catch (e) {
                            e.message = e.message.replace(/nv_/g, "");
                            e.stack = e.stack.substring(0, e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
                            e.stack = e.stack.replace(/\snv_/g, " ");
                            e.stack = $gstack(e.stack);
                            if (g.debugInfo) {
                                e.stack += "\n " + " " + " " + " at " + g.debugInfo[0] + ":" + g.debugInfo[1] + ":" + g.debugInfo[2];
                                console.error(e);
                            }
                            _r = undefined;
                        }
                        return should_pass_type_info && (_tb || _ta) ? wh.nh(_r, 'f') : _r;
                }
            } else {
                if (op === 3 || op === 1) return ops[1];
                else if (op === 11) {
                    var _a = '';
                    for (var i = 1; i < ops.length; i++) {
                        var xp = wh.rv(rev(ops[i], e, s, g, o, _f));
                        _a += typeof(xp) === 'undefined' ? '' : xp;
                    }
                    return _a;
                }
            }
        }

        function wrapper(ops, e, s, g, o, newap) {
            if (ops[0] == '11182016') {
                g.debugInfo = ops[2];
                return rev(ops[1], e, s, g, o, newap);
            } else {
                g.debugInfo = null;
                return rev(ops, e, s, g, o, newap);
            }
        }
        return wrapper;
    }
    gra = $gwrt(true);
    grb = $gwrt(false);

    function TestTest(expr, ops, e, s, g, expect_a, expect_b, expect_affected) {
        {
            var o = {
                is_affected: false
            };
            var a = gra(ops, e, s, g, o);
            if (JSON.stringify(a) != JSON.stringify(expect_a) || o.is_affected != expect_affected) {
                console.warn("A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_a) + ", " + expect_affected + " is expected");
            }
        } {
            var o = {
                is_affected: false
            };
            var a = grb(ops, e, s, g, o);
            if (JSON.stringify(a) != JSON.stringify(expect_b) || o.is_affected != expect_affected) {
                console.warn("B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_b) + ", " + expect_affected + " is expected");
            }
        }
    }

    function wfor(to_iter, func, env, _s, global, father, itemname, indexname, keyname) {
        var _n = wh.hn(to_iter) === 'n';
        var scope = wh.rv(_s);
        var has_old_item = scope.hasOwnProperty(itemname);
        var has_old_index = scope.hasOwnProperty(indexname);
        var old_item = scope[itemname];
        var old_index = scope[indexname];
        var full = Object.prototype.toString.call(wh.rv(to_iter));
        var type = full[8];
        if (type === 'N' && full[10] === 'l') type = 'X';
        var _y;
        if (_n) {
            if (type === 'A') {
                var r_iter_item;
                for (var i = 0; i < to_iter.length; i++) {
                    scope[itemname] = to_iter[i];
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    r_iter_item = wh.rv(to_iter[i]);
                    var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                    _y = _v(key);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else if (type === 'O') {
                var i = 0;
                var r_iter_item;
                for (var k in to_iter) {
                    scope[itemname] = to_iter[k];
                    scope[indexname] = _n ? k : wh.nh(k, 'h');
                    r_iter_item = wh.rv(to_iter[k]);
                    var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                    _y = _v(key);
                    _(father, _y);
                    func(env, scope, _y, global);
                    i++;
                }
            } else if (type === 'S') {
                for (var i = 0; i < to_iter.length; i++) {
                    scope[itemname] = to_iter[i];
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    _y = _v(to_iter[i] + i);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else if (type === 'N') {
                for (var i = 0; i < to_iter; i++) {
                    scope[itemname] = i;
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    _y = _v(i);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else {}
        } else {
            var r_to_iter = wh.rv(to_iter);
            var r_iter_item, iter_item;
            if (type === 'A') {
                for (var i = 0; i < r_to_iter.length; i++) {
                    iter_item = r_to_iter[i];
                    iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
                    r_iter_item = wh.rv(iter_item);
                    scope[itemname] = iter_item
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                    _y = _v(key);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else if (type === 'O') {
                var i = 0;
                for (var k in r_to_iter) {
                    iter_item = r_to_iter[k];
                    iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
                    r_iter_item = wh.rv(iter_item);
                    scope[itemname] = iter_item;
                    scope[indexname] = _n ? k : wh.nh(k, 'h');
                    var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                    _y = _v(key);
                    _(father, _y);
                    func(env, scope, _y, global);
                    i++
                }
            } else if (type === 'S') {
                for (var i = 0; i < r_to_iter.length; i++) {
                    iter_item = wh.nh(r_to_iter[i], 'h');
                    scope[itemname] = iter_item;
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    _y = _v(to_iter[i] + i);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else if (type === 'N') {
                for (var i = 0; i < r_to_iter; i++) {
                    iter_item = wh.nh(i, 'h');
                    scope[itemname] = iter_item;
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    _y = _v(i);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else {}
        }
        if (has_old_item) {
            scope[itemname] = old_item;
        } else {
            delete scope[itemname];
        }
        if (has_old_index) {
            scope[indexname] = old_index;
        } else {
            delete scope[indexname];
        }
    }

    function _ca(o) {
        if (wh.hn(o) == 'h') return true;
        if (typeof o !== "object") return false;
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                if (_ca(o[i])) return true;
            }
        }
        return false;
    }

    function _da(node, attrname, opindex, raw, o) {
        var isaffected = false;
        var value = $gdc(raw, "", 2);
        if (o.ap && value && value.constructor === Function) {
            attrname = "$wxs:" + attrname;
            node.attr["$gdc"] = $gdc;
        }
        if (o.is_affected || _ca(raw)) {
            node.n.push(attrname);
            node.raw[attrname] = raw;
        }
        node.attr[attrname] = value;
    }

    function _r(node, attrname, opindex, env, scope, global) {
        global.opindex = opindex;
        var o = {},
            _env;
        var a = grb(z[opindex], env, scope, global, o);
        _da(node, attrname, opindex, a, o);
    }

    function _rz(z, node, attrname, opindex, env, scope, global) {
        global.opindex = opindex;
        var o = {},
            _env;
        var a = grb(z[opindex], env, scope, global, o);
        _da(node, attrname, opindex, a, o);
    }

    function _o(opindex, env, scope, global) {
        global.opindex = opindex;
        var nothing = {};
        var r = grb(z[opindex], env, scope, global, nothing);
        return (r && r.constructor === Function) ? undefined : r;
    }

    function _oz(z, opindex, env, scope, global) {
        global.opindex = opindex;
        var nothing = {};
        var r = grb(z[opindex], env, scope, global, nothing);
        return (r && r.constructor === Function) ? undefined : r;
    }

    function _1(opindex, env, scope, global, o) {
        var o = o || {};
        global.opindex = opindex;
        return gra(z[opindex], env, scope, global, o);
    }

    function _1z(z, opindex, env, scope, global, o) {
        var o = o || {};
        global.opindex = opindex;
        return gra(z[opindex], env, scope, global, o);
    }

    function _2(opindex, func, env, scope, global, father, itemname, indexname, keyname) {
        var o = {};
        var to_iter = _1(opindex, env, scope, global);
        wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
    }

    function _2z(z, opindex, func, env, scope, global, father, itemname, indexname, keyname) {
        var o = {};
        var to_iter = _1z(z, opindex, env, scope, global);
        wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
    }


    function _m(tag, attrs, generics, env, scope, global) {
        var tmp = _n(tag);
        var base = 0;
        for (var i = 0; i < attrs.length; i += 2) {
            if (base + attrs[i + 1] < 0) {
                tmp.attr[attrs[i]] = true;
            } else {
                _r(tmp, attrs[i], base + attrs[i + 1], env, scope, global);
                if (base === 0) base = attrs[i + 1];
            }
        }
        for (var i = 0; i < generics.length; i += 2) {
            if (base + generics[i + 1] < 0) {
                tmp.generics[generics[i]] = "";
            } else {
                var $t = grb(z[base + generics[i + 1]], env, scope, global);
                if ($t != "") $t = "wx-" + $t;
                tmp.generics[generics[i]] = $t;
                if (base === 0) base = generics[i + 1];
            }
        }
        return tmp;
    }

    function _mz(z, tag, attrs, generics, env, scope, global) {
        var tmp = _n(tag);
        var base = 0;
        for (var i = 0; i < attrs.length; i += 2) {
            if (base + attrs[i + 1] < 0) {
                tmp.attr[attrs[i]] = true;
            } else {
                _rz(z, tmp, attrs[i], base + attrs[i + 1], env, scope, global);
                if (base === 0) base = attrs[i + 1];
            }
        }
        for (var i = 0; i < generics.length; i += 2) {
            if (base + generics[i + 1] < 0) {
                tmp.generics[generics[i]] = "";
            } else {
                var $t = grb(z[base + generics[i + 1]], env, scope, global);
                if ($t != "") $t = "wx-" + $t;
                tmp.generics[generics[i]] = $t;
                if (base === 0) base = generics[i + 1];
            }
        }
        return tmp;
    }

    var nf_init = function() {
        if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
            nf_init_Object();
            nf_init_Function();
            nf_init_Array();
            nf_init_String();
            nf_init_Boolean();
            nf_init_Number();
            nf_init_Math();
            nf_init_Date();
            nf_init_RegExp();
        }
        if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true;
    };
    var nf_init_Object = function() {
        Object.defineProperty(Object.prototype, "nv_constructor", {
            writable: true,
            value: "Object"
        })
        Object.defineProperty(Object.prototype, "nv_toString", {
            writable: true,
            value: function() {
                return "[object Object]"
            }
        })
    }
    var nf_init_Function = function() {
        Object.defineProperty(Function.prototype, "nv_constructor", {
            writable: true,
            value: "Function"
        })
        Object.defineProperty(Function.prototype, "nv_length", {get: function() {
                return this.length;
            },
            set: function() {}
        });
        Object.defineProperty(Function.prototype, "nv_toString", {
            writable: true,
            value: function() {
                return "[function Function]"
            }
        })
    }
    var nf_init_Array = function() {
        Object.defineProperty(Array.prototype, "nv_toString", {
            writable: true,
            value: function() {
                return this.nv_join();
            }
        })
        Object.defineProperty(Array.prototype, "nv_join", {
            writable: true,
            value: function(s) {
                s = undefined == s ? ',' : s;
                var r = "";
                for (var i = 0; i < this.length; ++i) {
                    if (0 != i) r += s;
                    if (null == this[i] || undefined == this[i]) r += '';
                    else if (typeof this[i] == 'function') r += this[i].nv_toString();
                    else if (typeof this[i] == 'object' && this[i].nv_constructor === "Array") r += this[i].nv_join();
                    else r += this[i].toString();
                }
                return r;
            }
        })
        Object.defineProperty(Array.prototype, "nv_constructor", {
            writable: true,
            value: "Array"
        })
        Object.defineProperty(Array.prototype, "nv_concat", {
            writable: true,
            value: Array.prototype.concat
        })
        Object.defineProperty(Array.prototype, "nv_pop", {
            writable: true,
            value: Array.prototype.pop
        })
        Object.defineProperty(Array.prototype, "nv_push", {
            writable: true,
            value: Array.prototype.push
        })
        Object.defineProperty(Array.prototype, "nv_reverse", {
            writable: true,
            value: Array.prototype.reverse
        })
        Object.defineProperty(Array.prototype, "nv_shift", {
            writable: true,
            value: Array.prototype.shift
        })
        Object.defineProperty(Array.prototype, "nv_slice", {
            writable: true,
            value: Array.prototype.slice
        })
        Object.defineProperty(Array.prototype, "nv_sort", {
            writable: true,
            value: Array.prototype.sort
        })
        Object.defineProperty(Array.prototype, "nv_splice", {
            writable: true,
            value: Array.prototype.splice
        })
        Object.defineProperty(Array.prototype, "nv_unshift", {
            writable: true,
            value: Array.prototype.unshift
        })
        Object.defineProperty(Array.prototype, "nv_indexOf", {
            writable: true,
            value: Array.prototype.indexOf
        })
        Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
            writable: true,
            value: Array.prototype.lastIndexOf
        })
        Object.defineProperty(Array.prototype, "nv_every", {
            writable: true,
            value: Array.prototype.every
        })
        Object.defineProperty(Array.prototype, "nv_some", {
            writable: true,
            value: Array.prototype.some
        })
        Object.defineProperty(Array.prototype, "nv_forEach", {
            writable: true,
            value: Array.prototype.forEach
        })
        Object.defineProperty(Array.prototype, "nv_map", {
            writable: true,
            value: Array.prototype.map
        })
        Object.defineProperty(Array.prototype, "nv_filter", {
            writable: true,
            value: Array.prototype.filter
        })
        Object.defineProperty(Array.prototype, "nv_reduce", {
            writable: true,
            value: Array.prototype.reduce
        })
        Object.defineProperty(Array.prototype, "nv_reduceRight", {
            writable: true,
            value: Array.prototype.reduceRight
        })
        Object.defineProperty(Array.prototype, "nv_length", {get: function() {
                return this.length;
            },
            set: function(value) {
                this.length = value;
            }
        });
    }
    var nf_init_String = function() {
        Object.defineProperty(String.prototype, "nv_constructor", {
            writable: true,
            value: "String"
        })
        Object.defineProperty(String.prototype, "nv_toString", {
            writable: true,
            value: String.prototype.toString
        })
        Object.defineProperty(String.prototype, "nv_valueOf", {
            writable: true,
            value: String.prototype.valueOf
        })
        Object.defineProperty(String.prototype, "nv_charAt", {
            writable: true,
            value: String.prototype.charAt
        })
        Object.defineProperty(String.prototype, "nv_charCodeAt", {
            writable: true,
            value: String.prototype.charCodeAt
        })
        Object.defineProperty(String.prototype, "nv_concat", {
            writable: true,
            value: String.prototype.concat
        })
        Object.defineProperty(String.prototype, "nv_indexOf", {
            writable: true,
            value: String.prototype.indexOf
        })
        Object.defineProperty(String.prototype, "nv_lastIndexOf", {
            writable: true,
            value: String.prototype.lastIndexOf
        })
        Object.defineProperty(String.prototype, "nv_localeCompare", {
            writable: true,
            value: String.prototype.localeCompare
        })
        Object.defineProperty(String.prototype, "nv_match", {
            writable: true,
            value: String.prototype.match
        })
        Object.defineProperty(String.prototype, "nv_replace", {
            writable: true,
            value: String.prototype.replace
        })
        Object.defineProperty(String.prototype, "nv_search", {
            writable: true,
            value: String.prototype.search
        })
        Object.defineProperty(String.prototype, "nv_slice", {
            writable: true,
            value: String.prototype.slice
        })
        Object.defineProperty(String.prototype, "nv_split", {
            writable: true,
            value: String.prototype.split
        })
        Object.defineProperty(String.prototype, "nv_substring", {
            writable: true,
            value: String.prototype.substring
        })
        Object.defineProperty(String.prototype, "nv_toLowerCase", {
            writable: true,
            value: String.prototype.toLowerCase
        })
        Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
            writable: true,
            value: String.prototype.toLocaleLowerCase
        })
        Object.defineProperty(String.prototype, "nv_toUpperCase", {
            writable: true,
            value: String.prototype.toUpperCase
        })
        Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
            writable: true,
            value: String.prototype.toLocaleUpperCase
        })
        Object.defineProperty(String.prototype, "nv_trim", {
            writable: true,
            value: String.prototype.trim
        })
        Object.defineProperty(String.prototype, "nv_length", {get: function() {
                return this.length;
            },
            set: function(value) {
                this.length = value;
            }
        });
    }
    var nf_init_Boolean = function() {
        Object.defineProperty(Boolean.prototype, "nv_constructor", {
            writable: true,
            value: "Boolean"
        })
        Object.defineProperty(Boolean.prototype, "nv_toString", {
            writable: true,
            value: Boolean.prototype.toString
        })
        Object.defineProperty(Boolean.prototype, "nv_valueOf", {
            writable: true,
            value: Boolean.prototype.valueOf
        })
    }
    var nf_init_Number = function() {
        Object.defineProperty(Number, "nv_MAX_VALUE", {
            writable: false,
            value: Number.MAX_VALUE
        })
        Object.defineProperty(Number, "nv_MIN_VALUE", {
            writable: false,
            value: Number.MIN_VALUE
        })
        Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
            writable: false,
            value: Number.NEGATIVE_INFINITY
        })
        Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
            writable: false,
            value: Number.POSITIVE_INFINITY
        })
        Object.defineProperty(Number.prototype, "nv_constructor", {
            writable: true,
            value: "Number"
        })
        Object.defineProperty(Number.prototype, "nv_toString", {
            writable: true,
            value: Number.prototype.toString
        })
        Object.defineProperty(Number.prototype, "nv_toLocaleString", {
            writable: true,
            value: Number.prototype.toLocaleString
        })
        Object.defineProperty(Number.prototype, "nv_valueOf", {
            writable: true,
            value: Number.prototype.valueOf
        })
        Object.defineProperty(Number.prototype, "nv_toFixed", {
            writable: true,
            value: Number.prototype.toFixed
        })
        Object.defineProperty(Number.prototype, "nv_toExponential", {
            writable: true,
            value: Number.prototype.toExponential
        })
        Object.defineProperty(Number.prototype, "nv_toPrecision", {
            writable: true,
            value: Number.prototype.toPrecision
        })
    }
    var nf_init_Math = function() {
        Object.defineProperty(Math, "nv_E", {
            writable: false,
            value: Math.E
        })
        Object.defineProperty(Math, "nv_LN10", {
            writable: false,
            value: Math.LN10
        })
        Object.defineProperty(Math, "nv_LN2", {
            writable: false,
            value: Math.LN2
        })
        Object.defineProperty(Math, "nv_LOG2E", {
            writable: false,
            value: Math.LOG2E
        })
        Object.defineProperty(Math, "nv_LOG10E", {
            writable: false,
            value: Math.LOG10E
        })
        Object.defineProperty(Math, "nv_PI", {
            writable: false,
            value: Math.PI
        })
        Object.defineProperty(Math, "nv_SQRT1_2", {
            writable: false,
            value: Math.SQRT1_2
        })
        Object.defineProperty(Math, "nv_SQRT2", {
            writable: false,
            value: Math.SQRT2
        })
        Object.defineProperty(Math, "nv_abs", {
            writable: false,
            value: Math.abs
        })
        Object.defineProperty(Math, "nv_acos", {
            writable: false,
            value: Math.acos
        })
        Object.defineProperty(Math, "nv_asin", {
            writable: false,
            value: Math.asin
        })
        Object.defineProperty(Math, "nv_atan", {
            writable: false,
            value: Math.atan
        })
        Object.defineProperty(Math, "nv_atan2", {
            writable: false,
            value: Math.atan2
        })
        Object.defineProperty(Math, "nv_ceil", {
            writable: false,
            value: Math.ceil
        })
        Object.defineProperty(Math, "nv_cos", {
            writable: false,
            value: Math.cos
        })
        Object.defineProperty(Math, "nv_exp", {
            writable: false,
            value: Math.exp
        })
        Object.defineProperty(Math, "nv_floor", {
            writable: false,
            value: Math.floor
        })
        Object.defineProperty(Math, "nv_log", {
            writable: false,
            value: Math.log
        })
        Object.defineProperty(Math, "nv_max", {
            writable: false,
            value: Math.max
        })
        Object.defineProperty(Math, "nv_min", {
            writable: false,
            value: Math.min
        })
        Object.defineProperty(Math, "nv_pow", {
            writable: false,
            value: Math.pow
        })
        Object.defineProperty(Math, "nv_random", {
            writable: false,
            value: Math.random
        })
        Object.defineProperty(Math, "nv_round", {
            writable: false,
            value: Math.round
        })
        Object.defineProperty(Math, "nv_sin", {
            writable: false,
            value: Math.sin
        })
        Object.defineProperty(Math, "nv_sqrt", {
            writable: false,
            value: Math.sqrt
        })
        Object.defineProperty(Math, "nv_tan", {
            writable: false,
            value: Math.tan
        })
    }
    var nf_init_Date = function() {
        Object.defineProperty(Date.prototype, "nv_constructor", {
            writable: true,
            value: "Date"
        })
        Object.defineProperty(Date, "nv_parse", {
            writable: true,
            value: Date.parse
        })
        Object.defineProperty(Date, "nv_UTC", {
            writable: true,
            value: Date.UTC
        })
        Object.defineProperty(Date, "nv_now", {
            writable: true,
            value: Date.now
        })
        Object.defineProperty(Date.prototype, "nv_toString", {
            writable: true,
            value: Date.prototype.toString
        })
        Object.defineProperty(Date.prototype, "nv_toDateString", {
            writable: true,
            value: Date.prototype.toDateString
        })
        Object.defineProperty(Date.prototype, "nv_toTimeString", {
            writable: true,
            value: Date.prototype.toTimeString
        })
        Object.defineProperty(Date.prototype, "nv_toLocaleString", {
            writable: true,
            value: Date.prototype.toLocaleString
        })
        Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
            writable: true,
            value: Date.prototype.toLocaleDateString
        })
        Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
            writable: true,
            value: Date.prototype.toLocaleTimeString
        })
        Object.defineProperty(Date.prototype, "nv_valueOf", {
            writable: true,
            value: Date.prototype.valueOf
        })
        Object.defineProperty(Date.prototype, "nv_getTime", {
            writable: true,
            value: Date.prototype.getTime
        })
        Object.defineProperty(Date.prototype, "nv_getFullYear", {
            writable: true,
            value: Date.prototype.getFullYear
        })
        Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
            writable: true,
            value: Date.prototype.getUTCFullYear
        })
        Object.defineProperty(Date.prototype, "nv_getMonth", {
            writable: true,
            value: Date.prototype.getMonth
        })
        Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
            writable: true,
            value: Date.prototype.getUTCMonth
        })
        Object.defineProperty(Date.prototype, "nv_getDate", {
            writable: true,
            value: Date.prototype.getDate
        })
        Object.defineProperty(Date.prototype, "nv_getUTCDate", {
            writable: true,
            value: Date.prototype.getUTCDate
        })
        Object.defineProperty(Date.prototype, "nv_getDay", {
            writable: true,
            value: Date.prototype.getDay
        })
        Object.defineProperty(Date.prototype, "nv_getUTCDay", {
            writable: true,
            value: Date.prototype.getUTCDay
        })
        Object.defineProperty(Date.prototype, "nv_getHours", {
            writable: true,
            value: Date.prototype.getHours
        })
        Object.defineProperty(Date.prototype, "nv_getUTCHours", {
            writable: true,
            value: Date.prototype.getUTCHours
        })
        Object.defineProperty(Date.prototype, "nv_getMinutes", {
            writable: true,
            value: Date.prototype.getMinutes
        })
        Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
            writable: true,
            value: Date.prototype.getUTCMinutes
        })
        Object.defineProperty(Date.prototype, "nv_getSeconds", {
            writable: true,
            value: Date.prototype.getSeconds
        })
        Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
            writable: true,
            value: Date.prototype.getUTCSeconds
        })
        Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
            writable: true,
            value: Date.prototype.getMilliseconds
        })
        Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
            writable: true,
            value: Date.prototype.getUTCMilliseconds
        })
        Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
            writable: true,
            value: Date.prototype.getTimezoneOffset
        })
        Object.defineProperty(Date.prototype, "nv_setTime", {
            writable: true,
            value: Date.prototype.setTime
        })
        Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
            writable: true,
            value: Date.prototype.setMilliseconds
        })
        Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
            writable: true,
            value: Date.prototype.setUTCMilliseconds
        })
        Object.defineProperty(Date.prototype, "nv_setSeconds", {
            writable: true,
            value: Date.prototype.setSeconds
        })
        Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
            writable: true,
            value: Date.prototype.setUTCSeconds
        })
        Object.defineProperty(Date.prototype, "nv_setMinutes", {
            writable: true,
            value: Date.prototype.setMinutes
        })
        Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
            writable: true,
            value: Date.prototype.setUTCMinutes
        })
        Object.defineProperty(Date.prototype, "nv_setHours", {
            writable: true,
            value: Date.prototype.setHours
        })
        Object.defineProperty(Date.prototype, "nv_setUTCHours", {
            writable: true,
            value: Date.prototype.setUTCHours
        })
        Object.defineProperty(Date.prototype, "nv_setDate", {
            writable: true,
            value: Date.prototype.setDate
        })
        Object.defineProperty(Date.prototype, "nv_setUTCDate", {
            writable: true,
            value: Date.prototype.setUTCDate
        })
        Object.defineProperty(Date.prototype, "nv_setMonth", {
            writable: true,
            value: Date.prototype.setMonth
        })
        Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
            writable: true,
            value: Date.prototype.setUTCMonth
        })
        Object.defineProperty(Date.prototype, "nv_setFullYear", {
            writable: true,
            value: Date.prototype.setFullYear
        })
        Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
            writable: true,
            value: Date.prototype.setUTCFullYear
        })
        Object.defineProperty(Date.prototype, "nv_toUTCString", {
            writable: true,
            value: Date.prototype.toUTCString
        })
        Object.defineProperty(Date.prototype, "nv_toISOString", {
            writable: true,
            value: Date.prototype.toISOString
        })
        Object.defineProperty(Date.prototype, "nv_toJSON", {
            writable: true,
            value: Date.prototype.toJSON
        })
    }
    var nf_init_RegExp = function() {
        Object.defineProperty(RegExp.prototype, "nv_constructor", {
            writable: true,
            value: "RegExp"
        })
        Object.defineProperty(RegExp.prototype, "nv_exec", {
            writable: true,
            value: RegExp.prototype.exec
        })
        Object.defineProperty(RegExp.prototype, "nv_test", {
            writable: true,
            value: RegExp.prototype.test
        })
        Object.defineProperty(RegExp.prototype, "nv_toString", {
            writable: true,
            value: RegExp.prototype.toString
        })
        Object.defineProperty(RegExp.prototype, "nv_source", {get: function() {
                return this.source;
            },
            set: function() {}
        });
        Object.defineProperty(RegExp.prototype, "nv_global", {get: function() {
                return this.global;
            },
            set: function() {}
        });
        Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {get: function() {
                return this.ignoreCase;
            },
            set: function() {}
        });
        Object.defineProperty(RegExp.prototype, "nv_multiline", {get: function() {
                return this.multiline;
            },
            set: function() {}
        });
        Object.defineProperty(RegExp.prototype, "nv_lastIndex", {get: function() {
                return this.lastIndex;
            },
            set: function(v) {
                this.lastIndex = v;
            }
        });
    }
    nf_init();
    var nv_getDate = function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(Date);
        return new(Function.prototype.bind.apply(Date, args));
    }
    var nv_getRegExp = function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(RegExp);
        return new(Function.prototype.bind.apply(RegExp, args));
    }
    var nv_console = {}
    nv_console.nv_log = function() {
        var res = "WXSRT:";
        for (var i = 0; i < arguments.length; ++i) res += arguments[i] + " ";
        console.log(res);
    }
    var nv_parseInt = parseInt,
        nv_parseFloat = parseFloat,
        nv_isNaN = isNaN,
        nv_isFinite = isFinite,
        nv_decodeURI = decodeURI,
        nv_decodeURIComponent = decodeURIComponent,
        nv_encodeURI = encodeURI,
        nv_encodeURIComponent = encodeURIComponent;

    function $gdc(o, p, r) {
        o = wh.rv(o);
        if (o === null || o === undefined) return o;
        if (typeof o === "string" || typeof o === "boolean" || typeof o === "number") return o;
        if (o.constructor === Object) {
            var copy = {};
            for (var k in o)
                if (Object.prototype.hasOwnProperty.call(o, k))
                    if (undefined === p) copy[k.substring(3)] = $gdc(o[k], p, r);
                    else copy[p + k] = $gdc(o[k], p, r);
            return copy;
        }
        if (o.constructor === Array) {
            var copy = [];
            for (var i = 0; i < o.length; i++) copy.push($gdc(o[i], p, r));
            return copy;
        }
        if (o.constructor === Date) {
            var copy = new Date();
            copy.setTime(o.getTime());
            return copy;
        }
        if (o.constructor === RegExp) {
            var f = "";
            if (o.global) f += "g";
            if (o.ignoreCase) f += "i";
            if (o.multiline) f += "m";
            return (new RegExp(o.source, f));
        }
        if (r && typeof o === "function") {
            if (r == 1) return $gdc(o(), undefined, 2);
            if (r == 2) return o;
        }
        return null;
    }
    var nv_JSON = {}
    nv_JSON.nv_stringify = function(o) {
        JSON.stringify(o);
        return JSON.stringify($gdc(o));
    }
    nv_JSON.nv_parse = function(o) {
        if (o === undefined) return undefined;
        var t = JSON.parse(o);
        return $gdc(t, 'nv_');
    }

    function _af(p, a, r, c) {
        p.extraAttr = {
            "t_action": a,
            "t_rawid": r
        };
        if (typeof(c) != 'undefined') p.extraAttr.t_cid = c;
    }

    function _ai(i, p, e, me, r, c) {
        var x = _grp(p, e, me);
        if (x) i.push(x);
        else {
            i.push('');
            _wp(me + ':import:' + r + ':' + c + ': Path `' + p + '` not found from `' + me + '`.')
        }
    }

    function _grp(p, e, me) {
        if (p[0] != '/') {
            var mepart = me.split('/');
            mepart.pop();
            var ppart = p.split('/');
            for (var i = 0; i < ppart.length; i++) {
                if (ppart[i] == '..') mepart.pop();
                else if (!ppart[i] || ppart[i] == '.') continue;
                else mepart.push(ppart[i]);
            }
            p = mepart.join('/');
        }
        if (me[0] == '.' && p[0] == '/') p = '.' + p;
        if (e[p]) return p;
        if (e[p + '.wxml']) return p + '.wxml';
    }

    function _gd(p, c, e, d) {
        if (!c) return;
        if (d[p][c]) return d[p][c];
        for (var x = e[p].i.length - 1; x >= 0; x--) {
            if (e[p].i[x] && d[e[p].i[x]][c]) return d[e[p].i[x]][c]
        };
        for (var x = e[p].ti.length - 1; x >= 0; x--) {
            var q = _grp(e[p].ti[x], e, p);
            if (q && d[q][c]) return d[q][c]
        }
        var ii = _gapi(e, p);
        for (var x = 0; x < ii.length; x++) {
            if (ii[x] && d[ii[x]][c]) return d[ii[x]][c]
        }
        for (var k = e[p].j.length - 1; k >= 0; k--)
            if (e[p].j[k]) {
                for (var q = e[e[p].j[k]].ti.length - 1; q >= 0; q--) {
                    var pp = _grp(e[e[p].j[k]].ti[q], e, p);
                    if (pp && d[pp][c]) {
                        return d[pp][c]
                    }
                }
            }
    }

    function _gapi(e, p) {
        if (!p) return [];
        if ($gaic[p]) {
            return $gaic[p]
        };
        var ret = [],
            q = [],
            h = 0,
            t = 0,
            put = {},
            visited = {};
        q.push(p);
        visited[p] = true;
        t++;
        while (h < t) {
            var a = q[h++];
            for (var i = 0; i < e[a].ic.length; i++) {
                var nd = e[a].ic[i];
                var np = _grp(nd, e, a);
                if (np && !visited[np]) {
                    visited[np] = true;
                    q.push(np);
                    t++;
                }
            }
            for (var i = 0; a != p && i < e[a].ti.length; i++) {
                var ni = e[a].ti[i];
                var nm = _grp(ni, e, a);
                if (nm && !put[nm]) {
                    put[nm] = true;
                    ret.push(nm);
                }
            }
        }
        $gaic[p] = ret;
        return ret;
    }
    var $ixc = {};

    function _ic(p, ent, me, e, s, r, gg) {
        var x = _grp(p, ent, me);
        ent[me].j.push(x);
        if (x) {
            if ($ixc[x]) {
                _wp('-1:include:-1:-1: `' + p + '` is being included in a loop, will be stop.');
                return;
            }
            $ixc[x] = true;
            try {
                ent[x].f(e, s, r, gg)
            } catch (e) {}
            $ixc[x] = false;
        } else {
            _wp(me + ':include:-1:-1: Included path `' + p + '` not found from `' + me + '`.')
        }
    }

    function _w(tn, f, line, c) {
        _wp(f + ':template:' + line + ':' + c + ': Template `' + tn + '` not found.');
    }

    function _ev(dom) {
        var changed = false;
        delete dom.properities;
        delete dom.n;
        if (dom.children) {
            do {
                changed = false;
                var newch = [];
                for (var i = 0; i < dom.children.length; i++) {
                    var ch = dom.children[i];
                    if (ch.tag == 'virtual') {
                        changed = true;
                        for (var j = 0; ch.children && j < ch.children.length; j++) {
                            newch.push(ch.children[j]);
                        }
                    } else {
                        newch.push(ch);
                    }
                }
                dom.children = newch;
            } while (changed);
            for (var i = 0; i < dom.children.length; i++) {
                _ev(dom.children[i]);
            }
        }
        return dom;
    }

    function _tsd(root) {
        if (root.tag == "wx-wx-scope") {
            root.tag = "virtual";
            root.wxCkey = "11";
            root['wxScopeData'] = root.attr['wx:scope-data'];
            delete root.n;
            delete root.raw;
            delete root.generics;
            delete root.attr;
        }
        for (var i = 0; root.children && i < root.children.length; i++) {
            _tsd(root.children[i]);
        }
        return root;
    }

    var e_ = {}
    if (typeof(global.entrys) === 'undefined') global.entrys = {};
    e_ = global.entrys;
    var d_ = {}
    if (typeof(global.defines) === 'undefined') global.defines = {};
    d_ = global.defines;
    var f_ = {}
    if (typeof(global.modules) === 'undefined') global.modules = {};
    f_ = global.modules || {};
    var p_ = {}
    __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx || [];

    function gz$gwx_1() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_1) return __WXML_GLOBAL__.ops_cached.$gwx_1
        __WXML_GLOBAL__.ops_cached.$gwx_1 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([
                [2, '!'],
                [
                    [6],
                    [
                        [7],
                        [3, 'list']
                    ],
                    [3, 'length']
                ]
            ])
        })(__WXML_GLOBAL__.ops_cached.$gwx_1);
        return __WXML_GLOBAL__.ops_cached.$gwx_1
    }

    function gz$gwx_2() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_2) return __WXML_GLOBAL__.ops_cached.$gwx_2
        __WXML_GLOBAL__.ops_cached.$gwx_2 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx_2);
        return __WXML_GLOBAL__.ops_cached.$gwx_2
    }

    function gz$gwx_3() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_3) return __WXML_GLOBAL__.ops_cached.$gwx_3
        __WXML_GLOBAL__.ops_cached.$gwx_3 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx_3);
        return __WXML_GLOBAL__.ops_cached.$gwx_3
    }

    function gz$gwx_4() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_4) return __WXML_GLOBAL__.ops_cached.$gwx_4
        __WXML_GLOBAL__.ops_cached.$gwx_4 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([
                [7],
                [3, 'controllerShow']
            ])
        })(__WXML_GLOBAL__.ops_cached.$gwx_4);
        return __WXML_GLOBAL__.ops_cached.$gwx_4
    }

    function gz$gwx_5() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_5) return __WXML_GLOBAL__.ops_cached.$gwx_5
        __WXML_GLOBAL__.ops_cached.$gwx_5 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([
                [7],
                [3, 'userId']
            ])
            Z([3, 'idx'])
            Z([3, 'row'])
            Z([
                [7],
                [3, 'orderAll']
            ])
            Z([3, 'OrderId'])
            Z([
                [6],
                [
                    [7],
                    [3, 'row']
                ],
                [3, 'Status']
            ])
        })(__WXML_GLOBAL__.ops_cached.$gwx_5);
        return __WXML_GLOBAL__.ops_cached.$gwx_5
    }

    function gz$gwx_6() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_6) return __WXML_GLOBAL__.ops_cached.$gwx_6
        __WXML_GLOBAL__.ops_cached.$gwx_6 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx_6);
        return __WXML_GLOBAL__.ops_cached.$gwx_6
    }

    function gz$gwx_7() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_7) return __WXML_GLOBAL__.ops_cached.$gwx_7
        __WXML_GLOBAL__.ops_cached.$gwx_7 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx_7);
        return __WXML_GLOBAL__.ops_cached.$gwx_7
    }

    function gz$gwx_8() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_8) return __WXML_GLOBAL__.ops_cached.$gwx_8
        __WXML_GLOBAL__.ops_cached.$gwx_8 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx_8);
        return __WXML_GLOBAL__.ops_cached.$gwx_8
    }

    function gz$gwx_9() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_9) return __WXML_GLOBAL__.ops_cached.$gwx_9
        __WXML_GLOBAL__.ops_cached.$gwx_9 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx_9);
        return __WXML_GLOBAL__.ops_cached.$gwx_9
    }

    function gz$gwx_10() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_10) return __WXML_GLOBAL__.ops_cached.$gwx_10
        __WXML_GLOBAL__.ops_cached.$gwx_10 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx_10);
        return __WXML_GLOBAL__.ops_cached.$gwx_10
    }

    function gz$gwx_11() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_11) return __WXML_GLOBAL__.ops_cached.$gwx_11
        __WXML_GLOBAL__.ops_cached.$gwx_11 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx_11);
        return __WXML_GLOBAL__.ops_cached.$gwx_11
    }

    function gz$gwx_12() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_12) return __WXML_GLOBAL__.ops_cached.$gwx_12
        __WXML_GLOBAL__.ops_cached.$gwx_12 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx_12);
        return __WXML_GLOBAL__.ops_cached.$gwx_12
    }

    function gz$gwx_13() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_13) return __WXML_GLOBAL__.ops_cached.$gwx_13
        __WXML_GLOBAL__.ops_cached.$gwx_13 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx_13);
        return __WXML_GLOBAL__.ops_cached.$gwx_13
    }

    function gz$gwx_14() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_14) return __WXML_GLOBAL__.ops_cached.$gwx_14
        __WXML_GLOBAL__.ops_cached.$gwx_14 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([
                [7],
                [3, 'isGetted']
            ])
            Z([3, 'privacy'])
        })(__WXML_GLOBAL__.ops_cached.$gwx_14);
        return __WXML_GLOBAL__.ops_cached.$gwx_14
    }

    function gz$gwx_15() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_15) return __WXML_GLOBAL__.ops_cached.$gwx_15
        __WXML_GLOBAL__.ops_cached.$gwx_15 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([
                [2, '=='],
                [
                    [7],
                    [3, 'btnText']
                ],
                [1, '开启用水']
            ])
        })(__WXML_GLOBAL__.ops_cached.$gwx_15);
        return __WXML_GLOBAL__.ops_cached.$gwx_15
    }

    function gz$gwx_16() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_16) return __WXML_GLOBAL__.ops_cached.$gwx_16
        __WXML_GLOBAL__.ops_cached.$gwx_16 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'privacy'])
        })(__WXML_GLOBAL__.ops_cached.$gwx_16);
        return __WXML_GLOBAL__.ops_cached.$gwx_16
    }

    function gz$gwx_17() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_17) return __WXML_GLOBAL__.ops_cached.$gwx_17
        __WXML_GLOBAL__.ops_cached.$gwx_17 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx_17);
        return __WXML_GLOBAL__.ops_cached.$gwx_17
    }

    function gz$gwx_18() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_18) return __WXML_GLOBAL__.ops_cached.$gwx_18
        __WXML_GLOBAL__.ops_cached.$gwx_18 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx_18);
        return __WXML_GLOBAL__.ops_cached.$gwx_18
    }

    function gz$gwx_19() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_19) return __WXML_GLOBAL__.ops_cached.$gwx_19
        __WXML_GLOBAL__.ops_cached.$gwx_19 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'privacy'])
        })(__WXML_GLOBAL__.ops_cached.$gwx_19);
        return __WXML_GLOBAL__.ops_cached.$gwx_19
    }

    function gz$gwx_20() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_20) return __WXML_GLOBAL__.ops_cached.$gwx_20
        __WXML_GLOBAL__.ops_cached.$gwx_20 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx_20);
        return __WXML_GLOBAL__.ops_cached.$gwx_20
    }

    function gz$gwx_21() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_21) return __WXML_GLOBAL__.ops_cached.$gwx_21
        __WXML_GLOBAL__.ops_cached.$gwx_21 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx_21);
        return __WXML_GLOBAL__.ops_cached.$gwx_21
    }

    function gz$gwx_22() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_22) return __WXML_GLOBAL__.ops_cached.$gwx_22
        __WXML_GLOBAL__.ops_cached.$gwx_22 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx_22);
        return __WXML_GLOBAL__.ops_cached.$gwx_22
    }

    function gz$gwx_23() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_23) return __WXML_GLOBAL__.ops_cached.$gwx_23
        __WXML_GLOBAL__.ops_cached.$gwx_23 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'privacy'])
        })(__WXML_GLOBAL__.ops_cached.$gwx_23);
        return __WXML_GLOBAL__.ops_cached.$gwx_23
    }

    function gz$gwx_24() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_24) return __WXML_GLOBAL__.ops_cached.$gwx_24
        __WXML_GLOBAL__.ops_cached.$gwx_24 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
            Z([3, 'privacy'])
        })(__WXML_GLOBAL__.ops_cached.$gwx_24);
        return __WXML_GLOBAL__.ops_cached.$gwx_24
    }

    function gz$gwx_25() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_25) return __WXML_GLOBAL__.ops_cached.$gwx_25
        __WXML_GLOBAL__.ops_cached.$gwx_25 = [];
        (function(z) {
            var a = 11;

            function Z(ops) {
                z.push(ops)
            }
        })(__WXML_GLOBAL__.ops_cached.$gwx_25);
        return __WXML_GLOBAL__.ops_cached.$gwx_25
    }
    __WXML_GLOBAL__.ops_set.$gwx = z;
    __WXML_GLOBAL__.ops_init.$gwx = true;
    var nv_require = function() {
        var nnm = {
            "p_./wxs/data.wxs": np_0,
        };
        var nom = {};
        return function(n) {
            if (n[0] === 'p' && n[1] === '_' && f_[n.slice(2)]) return f_[n.slice(2)];
            return function() {
                if (!nnm[n]) return undefined;
                try {
                    if (!nom[n]) nom[n] = nnm[n]();
                    return nom[n];
                } catch (e) {
                    e.message = e.message.replace(/nv_/g, '');
                    var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
                    e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
                    e.stack = e.stack.replace(/\snv_/g, ' ');
                    e.stack = $gstack(e.stack);
                    e.stack += '\n    at ' + n.substring(2);
                    console.error(e);
                }
            }
        }
    }()
    f_['./pages/bill/bill.wxml'] = {};
    f_['./pages/bill/bill.wxml']['foo'] = f_['./wxs/data.wxs'] || nv_require("p_./wxs/data.wxs");
    f_['./pages/bill/bill.wxml']['foo']();

    f_['./wxs/data.wxs'] = nv_require("p_./wxs/data.wxs");

    function np_0() {
        var nv_module = {
            nv_exports: {}
        };
        var nv_dealMoney = (function(nv_num) {
            if (typeof nv_num == 'string') nv_num = nv_parseFloat(nv_num);;
            return (nv_num.nv_toFixed(2))
        });
        var nv_dealMoney2 = (function(nv_num) {
            if (typeof nv_num == 'string') nv_num = nv_parseFloat(nv_num);;
            return (nv_parseFloat(nv_num.nv_toFixed(2)))
        });
        var nv_getDate = (function(nv_str) {
            return (nv_str.nv_split(" ")[(0)])
        });
        var nv_getTime = (function(nv_str) {
            return (nv_str.nv_split(" ")[(1)])
        });
        var nv_isNull = (function(nv_str, nv_re) {
            if (nv_str && nv_str.nv_toLowerCase() != 'null' && nv_str.nv_toLowerCase() != 'undefined') {
                return (nv_str)
            } else {
                return (nv_re ? nv_re : '')
            }
        });
        nv_module.nv_exports = ({
            nv_dealMoney: nv_dealMoney,
            nv_dealMoney2: nv_dealMoney2,
            nv_getDate: nv_getDate,
            nv_getTime: nv_getTime,
            nv_isNull: nv_isNull,
        });
        return nv_module.nv_exports;
    }

    var x = ['./Component/my-news/my-news.wxml', './Component/privacy/privacy.wxml', './pages/about/about.wxml', './pages/air/air.wxml', './pages/bill/bill.wxml', './pages/bindDevice/bindDevice.wxml', '../common/roomSelector.wxml', '../common/deviceModal.wxml', './pages/binding/binding.wxml', './pages/binding/forgetPwd/forgetPwd.wxml', './pages/binding/register/register.wxml', './pages/browser/browser.wxml', './pages/common/deviceModal.wxml', './pages/common/roomSelector.wxml', './pages/deposit/deposit.wxml', './pages/home/home.wxml', './pages/index/index.wxml', './pages/lockCard/lockCard.wxml', './pages/news/newsDetail/newsDetail.wxml', './pages/news/newsList/newsList.wxml', './pages/pickDevice/pickDevice.wxml', './pages/realName/realName.wxml', './pages/repairDetail/repairDetail.wxml', './pages/roomInput/roomInput.wxml', './pages/testDevice/testDevice.wxml', './pages/userCenter/userCenter.wxml', './pages/userdetail/userdetail.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
        var z = gz$gwx_1()
        var oB = _v()
        _(r, oB)
        if (_oz(z, 0, e, s, gg)) {
            oB.wxVkey = 1
        }
        oB.wxXCkey = 1
        return r
    }
    e_[x[0]] = {
        f: m0,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[1]] = {}
    var m1 = function(e, s, r, gg) {
        var z = gz$gwx_2()
        return r
    }
    e_[x[1]] = {
        f: m1,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[2]] = {}
    var m2 = function(e, s, r, gg) {
        var z = gz$gwx_3()
        return r
    }
    e_[x[2]] = {
        f: m2,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[3]] = {}
    var m3 = function(e, s, r, gg) {
        var z = gz$gwx_4()
        var cF = _v()
        _(r, cF)
        if (_oz(z, 0, e, s, gg)) {
            cF.wxVkey = 1
        }
        cF.wxXCkey = 1
        return r
    }
    e_[x[3]] = {
        f: m3,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[4]] = {}
    var m4 = function(e, s, r, gg) {
        var z = gz$gwx_5()
        var oH = _v()
        _(r, oH)
        if (_oz(z, 0, e, s, gg)) {
            oH.wxVkey = 1
            var cI = _v()
            _(oH, cI)
            var oJ = function(aL, lK, tM, gg) {
                var bO = _v()
                _(tM, bO)
                if (_oz(z, 5, aL, lK, gg)) {
                    bO.wxVkey = 1
                }
                bO.wxXCkey = 1
                return tM
            }
            cI.wxXCkey = 2
            _2z(z, 3, oJ, e, s, gg, cI, 'row', 'idx', 'OrderId')
        } else {
            oH.wxVkey = 2
        }
        oH.wxXCkey = 1
        return r
    }
    e_[x[4]] = {
        f: m4,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[5]] = {}
    var m5 = function(e, s, r, gg) {
        var z = gz$gwx_6()
        var xQ = e_[x[5]].j
        _ic(x[6], e_, x[5], e, s, r, gg);
        _ic(x[7], e_, x[5], e, s, r, gg);
        xQ.pop()
        xQ.pop()
        return r
    }
    e_[x[5]] = {
        f: m5,
        j: [],
        i: [],
        ti: [],
        ic: [x[6], x[7]]
    }
    d_[x[8]] = {}
    var m6 = function(e, s, r, gg) {
        var z = gz$gwx_7()
        return r
    }
    e_[x[8]] = {
        f: m6,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[9]] = {}
    var m7 = function(e, s, r, gg) {
        var z = gz$gwx_8()
        return r
    }
    e_[x[9]] = {
        f: m7,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[10]] = {}
    var m8 = function(e, s, r, gg) {
        var z = gz$gwx_9()
        return r
    }
    e_[x[10]] = {
        f: m8,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[11]] = {}
    var m9 = function(e, s, r, gg) {
        var z = gz$gwx_10()
        return r
    }
    e_[x[11]] = {
        f: m9,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[12]] = {}
    var m10 = function(e, s, r, gg) {
        var z = gz$gwx_11()
        return r
    }
    e_[x[12]] = {
        f: m10,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[13]] = {}
    var m11 = function(e, s, r, gg) {
        var z = gz$gwx_12()
        return r
    }
    e_[x[13]] = {
        f: m11,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[14]] = {}
    var m12 = function(e, s, r, gg) {
        var z = gz$gwx_13()
        return r
    }
    e_[x[14]] = {
        f: m12,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[15]] = {}
    var m13 = function(e, s, r, gg) {
        var z = gz$gwx_14()
        var aZ = _n('my-news')
        _rz(z, aZ, 'isGetted', 0, e, s, gg)
        _(r, aZ)
        var t1 = _n('privacy')
        _rz(z, t1, 'id', 1, e, s, gg)
        _(r, t1)
        return r
    }
    e_[x[15]] = {
        f: m13,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[16]] = {}
    var m14 = function(e, s, r, gg) {
        var z = gz$gwx_15()
        var b3 = _v()
        _(r, b3)
        if (_oz(z, 0, e, s, gg)) {
            b3.wxVkey = 1
        }
        b3.wxXCkey = 1
        return r
    }
    e_[x[16]] = {
        f: m14,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[17]] = {}
    var m15 = function(e, s, r, gg) {
        var z = gz$gwx_16()
        var x5 = _n('privacy')
        _rz(z, x5, 'id', 0, e, s, gg)
        _(r, x5)
        return r
    }
    e_[x[17]] = {
        f: m15,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[18]] = {}
    var m16 = function(e, s, r, gg) {
        var z = gz$gwx_17()
        return r
    }
    e_[x[18]] = {
        f: m16,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[19]] = {}
    var m17 = function(e, s, r, gg) {
        var z = gz$gwx_18()
        return r
    }
    e_[x[19]] = {
        f: m17,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[20]] = {}
    var m18 = function(e, s, r, gg) {
        var z = gz$gwx_19()
        var h9 = _n('privacy')
        _rz(z, h9, 'id', 0, e, s, gg)
        _(r, h9)
        return r
    }
    e_[x[20]] = {
        f: m18,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[21]] = {}
    var m19 = function(e, s, r, gg) {
        var z = gz$gwx_20()
        var cAB = e_[x[21]].j
        _ic(x[6], e_, x[21], e, s, r, gg);
        cAB.pop()
        return r
    }
    e_[x[21]] = {
        f: m19,
        j: [],
        i: [],
        ti: [],
        ic: [x[6]]
    }
    d_[x[22]] = {}
    var m20 = function(e, s, r, gg) {
        var z = gz$gwx_21()
        return r
    }
    e_[x[22]] = {
        f: m20,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[23]] = {}
    var m21 = function(e, s, r, gg) {
        var z = gz$gwx_22()
        var aDB = e_[x[23]].j
        _ic(x[6], e_, x[23], e, s, r, gg);
        aDB.pop()
        return r
    }
    e_[x[23]] = {
        f: m21,
        j: [],
        i: [],
        ti: [],
        ic: [x[6]]
    }
    d_[x[24]] = {}
    var m22 = function(e, s, r, gg) {
        var z = gz$gwx_23()
        var eFB = _n('privacy')
        _rz(z, eFB, 'id', 0, e, s, gg)
        _(r, eFB)
        return r
    }
    e_[x[24]] = {
        f: m22,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[25]] = {}
    var m23 = function(e, s, r, gg) {
        var z = gz$gwx_24()
        var oHB = _n('privacy')
        _rz(z, oHB, 'id', 0, e, s, gg)
        _(r, oHB)
        return r
    }
    e_[x[25]] = {
        f: m23,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[26]] = {}
    var m24 = function(e, s, r, gg) {
        var z = gz$gwx_25()
        return r
    }
    e_[x[26]] = {
        f: m24,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    if (path && e_[path]) {
        return function(env, dd, global) {
            $gwxc = 0;
            var root = {
                "tag": "wx-page"
            };
            root.children = []
            var main = e_[path].f
            if (typeof global === "undefined") global = {};
            global.f = $gdc(f_[path], "", 1);
            try {
                main(env, {}, root, global);
                _tsd(root)
            } catch (err) {
                console.log(err)
            }
            return root;
        }
    }
}
__wxAppCode__['Component/my-news/my-news.json'] = {
    "component": true,
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['Component/my-news/my-news.wxml'] = [$gwx, './Component/my-news/my-news.wxml'];
else __wxAppCode__['Component/my-news/my-news.wxml'] = $gwx('./Component/my-news/my-news.wxml');
__wxAppCode__['Component/privacy/privacy.json'] = {
    "component": true,
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['Component/privacy/privacy.wxml'] = [$gwx, './Component/privacy/privacy.wxml'];
else __wxAppCode__['Component/privacy/privacy.wxml'] = $gwx('./Component/privacy/privacy.wxml');
__wxAppCode__['pages/about/about.json'] = {
    "navigationBarTitleText": "关于我们",
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/about/about.wxml'] = [$gwx, './pages/about/about.wxml'];
else __wxAppCode__['pages/about/about.wxml'] = $gwx('./pages/about/about.wxml');
__wxAppCode__['pages/air/air.json'] = {
    "usingComponents": {},
    "navigationBarTitleText": "空调",
    "navigationBarBackgroundColor": "#7dced8"
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/air/air.wxml'] = [$gwx, './pages/air/air.wxml'];
else __wxAppCode__['pages/air/air.wxml'] = $gwx('./pages/air/air.wxml');
__wxAppCode__['pages/bill/bill.json'] = {
    "navigationBarTitleText": "订单",
    "enablePullDownRefresh": true,
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/bill/bill.wxml'] = [$gwx, './pages/bill/bill.wxml'];
else __wxAppCode__['pages/bill/bill.wxml'] = $gwx('./pages/bill/bill.wxml');
__wxAppCode__['pages/bindDevice/bindDevice.json'] = {
    "navigationBarTitleText": "绑定新表",
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/bindDevice/bindDevice.wxml'] = [$gwx, './pages/bindDevice/bindDevice.wxml'];
else __wxAppCode__['pages/bindDevice/bindDevice.wxml'] = $gwx('./pages/bindDevice/bindDevice.wxml');
__wxAppCode__['pages/binding/binding.json'] = {
    "navigationBarTitleText": "密码登录",
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/binding/binding.wxml'] = [$gwx, './pages/binding/binding.wxml'];
else __wxAppCode__['pages/binding/binding.wxml'] = $gwx('./pages/binding/binding.wxml');
__wxAppCode__['pages/binding/forgetPwd/forgetPwd.json'] = {
    "navigationBarTitleText": "忘记密码",
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/binding/forgetPwd/forgetPwd.wxml'] = [$gwx, './pages/binding/forgetPwd/forgetPwd.wxml'];
else __wxAppCode__['pages/binding/forgetPwd/forgetPwd.wxml'] = $gwx('./pages/binding/forgetPwd/forgetPwd.wxml');
__wxAppCode__['pages/binding/register/register.json'] = {
    "navigationBarTitleText": "注册账号",
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/binding/register/register.wxml'] = [$gwx, './pages/binding/register/register.wxml'];
else __wxAppCode__['pages/binding/register/register.wxml'] = $gwx('./pages/binding/register/register.wxml');
__wxAppCode__['pages/browser/browser.json'] = {
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/browser/browser.wxml'] = [$gwx, './pages/browser/browser.wxml'];
else __wxAppCode__['pages/browser/browser.wxml'] = $gwx('./pages/browser/browser.wxml');
__wxAppCode__['pages/deposit/deposit.json'] = {
    "navigationBarTitleText": "授信金额",
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/deposit/deposit.wxml'] = [$gwx, './pages/deposit/deposit.wxml'];
else __wxAppCode__['pages/deposit/deposit.wxml'] = $gwx('./pages/deposit/deposit.wxml');
__wxAppCode__['pages/home/home.json'] = {
    "usingComponents": {
        "my-news": "/Component/my-news/my-news",
        "privacy": "/Component/privacy/privacy"
    },
    "navigationBarTitleText": "",
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black"
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home/home.wxml'] = [$gwx, './pages/home/home.wxml'];
else __wxAppCode__['pages/home/home.wxml'] = $gwx('./pages/home/home.wxml');
__wxAppCode__['pages/index/index.json'] = {
    "navigationBarTitleText": "洗浴",
    "disableScroll": true,
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];
else __wxAppCode__['pages/index/index.wxml'] = $gwx('./pages/index/index.wxml');
__wxAppCode__['pages/lockCard/lockCard.json'] = {
    "navigationBarTitleText": "锁卡情况说明",
    "usingComponents": {
        "privacy": "/Component/privacy/privacy"
    }
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/lockCard/lockCard.wxml'] = [$gwx, './pages/lockCard/lockCard.wxml'];
else __wxAppCode__['pages/lockCard/lockCard.wxml'] = $gwx('./pages/lockCard/lockCard.wxml');
__wxAppCode__['pages/news/newsDetail/newsDetail.json'] = {
    "usingComponents": {},
    "navigationBarTitleText": "系统消息"
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/news/newsDetail/newsDetail.wxml'] = [$gwx, './pages/news/newsDetail/newsDetail.wxml'];
else __wxAppCode__['pages/news/newsDetail/newsDetail.wxml'] = $gwx('./pages/news/newsDetail/newsDetail.wxml');
__wxAppCode__['pages/news/newsList/newsList.json'] = {
    "usingComponents": {},
    "navigationBarTitleText": "系统消息"
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/news/newsList/newsList.wxml'] = [$gwx, './pages/news/newsList/newsList.wxml'];
else __wxAppCode__['pages/news/newsList/newsList.wxml'] = $gwx('./pages/news/newsList/newsList.wxml');
__wxAppCode__['pages/pickDevice/pickDevice.json'] = {
    "navigationBarTitleText": "选择设备",
    "enablePullDownRefresh": true,
    "usingComponents": {
        "privacy": "/Component/privacy/privacy"
    }
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/pickDevice/pickDevice.wxml'] = [$gwx, './pages/pickDevice/pickDevice.wxml'];
else __wxAppCode__['pages/pickDevice/pickDevice.wxml'] = $gwx('./pages/pickDevice/pickDevice.wxml');
__wxAppCode__['pages/realName/realName.json'] = {
    "navigationBarTitleText": "完善信息",
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/realName/realName.wxml'] = [$gwx, './pages/realName/realName.wxml'];
else __wxAppCode__['pages/realName/realName.wxml'] = $gwx('./pages/realName/realName.wxml');
__wxAppCode__['pages/repairDetail/repairDetail.json'] = {
    "navigationBarTitleText": "我要报修",
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/repairDetail/repairDetail.wxml'] = [$gwx, './pages/repairDetail/repairDetail.wxml'];
else __wxAppCode__['pages/repairDetail/repairDetail.wxml'] = $gwx('./pages/repairDetail/repairDetail.wxml');
__wxAppCode__['pages/roomInput/roomInput.json'] = {
    "navigationBarTitleText": "使用地址",
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/roomInput/roomInput.wxml'] = [$gwx, './pages/roomInput/roomInput.wxml'];
else __wxAppCode__['pages/roomInput/roomInput.wxml'] = $gwx('./pages/roomInput/roomInput.wxml');
__wxAppCode__['pages/testDevice/testDevice.json'] = {
    "navigationBarTitleText": "智慧热水",
    "disableScroll": true,
    "usingComponents": {
        "privacy": "/Component/privacy/privacy"
    }
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/testDevice/testDevice.wxml'] = [$gwx, './pages/testDevice/testDevice.wxml'];
else __wxAppCode__['pages/testDevice/testDevice.wxml'] = $gwx('./pages/testDevice/testDevice.wxml');
__wxAppCode__['pages/userCenter/userCenter.json'] = {
    "navigationBarTitleText": "个人中心",
    "usingComponents": {
        "privacy": "/Component/privacy/privacy"
    }
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/userCenter/userCenter.wxml'] = [$gwx, './pages/userCenter/userCenter.wxml'];
else __wxAppCode__['pages/userCenter/userCenter.wxml'] = $gwx('./pages/userCenter/userCenter.wxml');
__wxAppCode__['pages/userdetail/userdetail.json'] = {
    "navigationBarTitleText": "个人信息",
    "enablePullDownRefresh": true,
    "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/userdetail/userdetail.wxml'] = [$gwx, './pages/userdetail/userdetail.wxml'];
else __wxAppCode__['pages/userdetail/userdetail.wxml'] = $gwx('./pages/userdetail/userdetail.wxml');


define("101E33B294FC73BF76785BB557A6E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.BEI_DIAN = void 0, exports.Device = x, exports.Factory = d, exports.ZHONG_KA_4G = exports.ZHONG_KA = exports.XIN_TIAN = exports.MING_HAN_4G = exports.MING_HAN = exports.KANG_ZHI_YUAN = exports.FactoryName = void 0, exports.getDevice = Z, exports.getDeviceId = function() {
        return Z().deviceId
    }, exports.getDeviceMac = function() {
        return Z().deviceMac
    }, exports.getDeviceSN = function() {
        return Z().machineid
    }, exports.getFactory = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("KZY4G" == e || /^kzy[\d]{15}$/.test(e)) return N;
        if ("BD" == e || /^BD[\d]{12}$/.test(e)) return c;
        if ("XT" == e || /^[\d]{14}$/.test(e)) return u;
        if ("MH" == e || /^[\d]{6}$/.test(e)) return _;
        if ("MH4G" == e || /^[\d]{15}$/.test(e)) return f;
        if ("ZK4G" == e || /^Z[A-Fa-f0-9]{12}$/.test(e)) return v;
        if ("ZK" == e || /^[\w]{16}$/.test(e) || "HMSoft" == e || e.indexOf("ZK") > -1 || /^[\d]{3}[-][\d]{6}$/.test(e) || /^([0-9A-F]{2}[:]){5}([0-9A-F]{2})$/.test(t)) return p;
        return d("", "")
    }, exports.getFactoryName = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if (/^kzy[\d]{15}$/.test(e)) return A.KZY;
        if (/^BD[\d]{12}$/.test(e)) return A.BD;
        if (/^[\d]{14}$/.test(e)) return A.XT;
        if (/^[\d]{6}$/.test(e)) return A.MH;
        if (/^[\d]{15}$/.test(e)) return A.MH_4G;
        if (/^Z[A-Fa-f0-9]{12}$/.test(e)) return A.ZK_4G;
        if (/^[\w]{16}$/.test(e) || "HMSoft" == e || e.indexOf("ZK") > -1 || /^[\d]{3}[-][\d]{6}$/.test(e)) return A.ZK
    }, exports.isKZY = function() {
        return G.factoryName == A.KZY
    };
    var e = require("961D3B4394FC73BFF07B53440C77E8C0.js"),
        t = e.API_BD,
        r = e.API_XT,
        n = e.API_MH,
        i = e.API_MH_4G,
        o = e.API_ZK,
        s = e.API_ZK_4G,
        a = e.API_KZY;

    function d(e, t, r) {
        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return {
            name: e,
            api: t,
            nbs: r || "已发送远程命令，请检查是否成功",
            is4G: n
        }
    }
    var c = d("BD", t);
    exports.BEI_DIAN = c;
    var u = d("XT", r, "已发送NB开阀，请1分钟内操作：\n1、长按水表蓝色按钮激活；\n2、滴声后15秒内开阀成功。");
    exports.XIN_TIAN = u;
    var _ = d("MH", n);
    exports.MING_HAN = _;
    var f = d("MH4G", i, "", !0);
    exports.MING_HAN_4G = f;
    var p = d("ZK", o);
    exports.ZHONG_KA = p;
    var v = d("ZK4G", s, "", !0);
    exports.ZHONG_KA_4G = v;
    var N = d("KZY4G", a, "", !0);
    exports.KANG_ZHI_YUAN = N;
    var A = {
        BD: c.name,
        XT: u.name,
        MH: _.name,
        MH_4G: f.name,
        ZK: p.name,
        ZK_4G: v.name,
        KZY: N.name
    };

    function x() {
        return {
            deviceId: "",
            deviceName: "BD220710000009",
            deviceMac: "BD220710000009",
            factoryName: A.BD,
            machineid: "BD220710000009",
            bAddr: "",
            type: "",
            version: ""
        }
    }
    exports.FactoryName = A;
    var G = x();

    function Z() {
        return G = getApp().device
    }
});

define("25B9627594FC73BF43DF0A720987E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("101E33B294FC73BF76785BB557A6E8C0.js"),
        r = e.Factory,
        t = e.getFactory,
        n = e.getDeviceMac,
        a = (e.getDevice, e.getDeviceSN),
        i = require("CE76404694FC73BFA81028419976E8C0.js"),
        s = i.log,
        o = i.delay,
        c = i.error,
        d = require("961D3B4394FC73BFF07B53440C77E8C0.js").API_CO,
        u = require("AB02EE3794FC73BFCD6486300866E8C0.js"),
        g = u.getUserId,
        l = u.User,
        v = u.getCardId,
        h = require("F66EF4C094FC73BF90089CC7F697E8C0.js").formatTime,
        f = require("C2427CC194FC73BFA42414C6A277E8C0.js"),
        m = require("ADC3732294FC73BFCBA51B256556E8C0.js"),
        p = m.isVerified,
        M = (m.signJson, getApp());

    function S() {
        M || (M = getApp())
    }

    function I() {
        for (var e = getCurrentPages(), r = e[e.length - 1].route, t = 0, n = ["/index/index", "/air/air", "/userCenter/userCenter"]; t < n.length; t++) {
            var a = n[t];
            if (r.indexOf(a) > -1) return !0
        }
        return !1
    }
    var y = "";

    function C(e, r, t, n) {
        var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        return A(e).then((function(e) {
            return new Promise((function(i, o) {
                s("请求接口", r);
                var d = {
                    "content-type": "application/json;charset=utf-8",
                    Accept: "application/json",
                    AccessToken: e.AccessToken,
                    Authorization: e.Authorization
                };
                f.request({
                    url: r,
                    data: t,
                    method: "POST",
                    header: d,
                    complete: function(e) {
                        var r = e.data;
                        if (r && (r.Result || r.status)) {
                            if (a && !p(e)) return;
                            s(n || "请求结果", r), i(r)
                        } else n && c(n, r || e, t), o(O(e))
                    }
                })
            }))
        })).catch((function(e) {
            return Promise.reject(e)
        }))
    }

    function A() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r();
        return null == e ? Promise.resolve({}) : new Promise((function(r, t) {
            var n = e.api,
                a = e.name,
                i = f.getStorageSync("GetGZGHJAccessToken" + a),
                s = f.getStorageSync("GetGZGHJAccessTokenTime" + a) || 0,
                o = (new Date).getTime();
            if (i && o - s < 36e5) r(i);
            else {
                var d = n + a.toLowerCase().replace("4g", "") + "kj/GetGZGHJAccessToken";
                f.request({
                    url: d,
                    complete: function(e) {
                        var n = e.data;
                        n && n.AccessToken ? (n.status = !0, n.errMsg = "", f.setStorageSync("GetGZGHJAccessToken" + a, n), f.setStorageSync("GetGZGHJAccessTokenTime" + a, (new Date).getTime()), r(n)) : (c("请求令牌 " + a, n || e), t(O(e)))
                    }
                })
            }
        }))
    }

    function w(e, r, t) {
        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return new Promise((function(e, a) {
            f.request({
                url: r,
                complete: function(i) {
                    var o = i.data;
                    if (o && (o.Result || o.status)) {
                        if (n && !p(i)) return;
                        s(t || "请求结果", o), e(o)
                    } else t && c(t, o || i, r), a(O(i))
                }
            })
        }))
    }

    function P() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r(),
            t = e.api + "".concat(e.is4G ? "4G" : "NB", "/OpenValve"),
            n = {
                MeterAddr: M.device.deviceMac,
                UserId: M.userId
            };
        return C(e, t, n, "NB开阀 " + e.name)
    }

    function T() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Open",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r(),
            n = t.api + "".concat(t.is4G ? "4G" : "NB", "/").concat(e, "Valve"),
            a = f.getStorageSync("GlobalOpenTime"),
            i = {
                Mac: M.device.deviceMac,
                MeterAddr: M.device.machineid,
                UserId: M.userId,
                timeOrNumber: a
            };
        return C(t, n, i, "NB".concat("Open" == e ? "开" : "关", "阀 ") + t.name)
    }
    var N = {};

    function B() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Open",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r(),
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        "BD" != t.name && "ZK" != t.name && (n = n.replace(/[^\da-f]/gi, ""));
        var i = t.api + "".concat(t.is4G ? "4G" : "NB", "/Check").concat(e, "ValveStatus?userId=") + M.userId + "&commandId=" + n;
        a || (N[n] = (new Date).getTime());
        var c = (new Date).getTime(),
            d = N[n] || 0;
        return c - d > 3e3 ? (s("状态超时", n), Promise.reject({
            status: !1,
            errMsg: "查询NB状态超时"
        })) : w(t, i, "NB查询 " + t.name).catch((function(r) {
            var a = (new Date).getTime() - c,
                i = (a >= 2e3 ? 0 : 2e3 - a) / 1e3;
            return s("状态延时", i), o(i).then((function(r) {
                return B(e, t, n, !0)
            }))
        }))
    }

    function D() {
        var e = M.page("userCenter");
        M.checkState((function() {
            e && e.setData({
                cardId: M.cardId,
                cardSt: M.cardSt
            })
        }), M.device)
    }

    function O(e) {
        var r = {};
        if ("string" == typeof e) r = {
            errMsg: b(e)
        };
        else if (e && e.data) {
            var t = e.data.Msg || e.data.errormsg || "";
            r = {
                errMsg: t + (e.data.Message || "") + (e.data.ExceptionMessage || "") + (e.data.ExceptionType || ""),
                isMyErr: "" != t
            }
        } else r = e && e.errMsg ? e : {
            errMsg: JSON.stringify(e)
        };
        return r.errMsg = b(r.errMsg), r
    }

    function b() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if (e.indexOf("11000ms") >= 0 && (e = "网络不给力，请检查手机网络后重试\n" + e), e.indexOf("ERR_CERT_COMMON_NAME_INVALID") >= 0) c("删除操作", e), e = "请删除小程序，重新搜索进入操作。";
        else if (e.indexOf("request:fail") >= 0) {
            c("错峰用水", e);
            var r = new Date;
            e = r.getHours() > 21 ? "用水高峰，请错峰用水，或改用IC卡开阀。" : "网络不给力，请检查手机网络后重试"
        } else if (e.indexOf("给定关键字不在字典中") >= 0) {
            c("通道受限", e);
            var t = new Date;
            e = t.getHours > 21 ? "用水高峰，物联通道受限。请稍后再试，或改用IC卡开阀。" : "网络不给力，请检查手机网络后重试！"
        }
        return e
    }
    module.exports = {
        checkMachineSN: function(e, r, t, n) {
            S();
            var a = d + "bathmachine/CheckMachineSN",
                i = {
                    UserId: M.userId,
                    MachineSn: e,
                    MachineType: t,
                    CardSn: 1 == M.userMsg.ICCardStatus ? M.userMsg.ICCardNum : "",
                    Mobile: M.phone,
                    MachineSnOld: r,
                    MacName: M.device.factoryName
                };
            M.showLoading("变更中..."), C(null, a, i, "变更房间").then((function(e) {
                M.hideLoading(), f.getStorageSync("nbOpen") && f.removeStorageSync("nbOpen"), M.checkState(n)
            })).catch((function(e) {
                M.hideLoading(), M.showModal("请求失败", e)
            }))
        },
        bindUserCardCheck: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r(),
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = arguments.length > 2 ? arguments[2] : void 0;
            S();
            var a = e.api + "card/BindUserCardCheck?userId=" + M.userId + "&cardNum=" + t + "&machineSn=" + M.device.deviceMac;
            w(e, a, "检测卡号 " + e.name).then((function(e) {
                var r = {
                    status: e.status,
                    errMsg: e.errormsg,
                    DeviceEnable: e.DeviceEnable
                };
                r.status && !r.DeviceEnable && (r.status = !1, r.errMsg = "设备(" + M.device.deviceName + ")已禁用，请联系管理员"), n(r)
            })).catch((function(e) {
                n({
                    status: !1,
                    errMsg: e.errMsg
                })
            }))
        },
        getIsArrearage: function(e) {
            S(), M.page("testDevice") ? e && e() : (M.userId = f.getStorageSync("userId"), M.userId ? w(null, d + "users/UserIsArrearage?userId=" + M.userId, "查询超额", !0).then((function(r) {
                M.CanUseAmount = r.CanUseAmount;
                var t = "ZK" == M.device.factoryName && r.CanUseAmount < 500 || r.IsArrearageBath;
                M.surplus = !t, f.setStorageSync("surplus", M.surplus), M.surplus ? e && e() : M.showModal("待支付订单超额", "待支付订单超过授信额度，请支付订单。", "", "去支付", (function() {
                    f.switchTab({
                        url: "../bill/bill"
                    })
                }))
            })).catch((function(e) {
                e.isMyErr ? M.showToast(e.errMsg) : M.showToast("网络不给力，请稍后重试！")
            })) : M.showModal("登录失效", "请重新登录", "", "去登录", (function() {
                M.logout()
            })))
        },
        NBUnBindUser: function e(r, n, a) {
            S();
            var i = a || t(M.userMsg.WhiteMac),
                o = i.api + "command/UnBindUser",
                d = i.name,
                u = "XT" == d ? "POST" : "DELETE",
                g = {
                    MeterAddr: M.userMsg.WhiteMac,
                    UserId: M.userId,
                    CardSn: M.userMsg.ICCardNum,
                    UBindType: 0
                };
            f.request({
                url: o,
                data: g,
                method: u,
                success: function(t) {
                    var i = t.data;
                    i.status ? (s("NB解绑 " + d, i), M.cardId && (M.cardSt = 2, M.userMsg.ICCardStatus = 2), r && r(!0)) : n ? (c("NB解绑 " + d, i, g), r && r(!1, t)) : (c("NB解绑 " + d, i, g), e(r, 1, a))
                },
                fail: function(e) {
                    c("NB解绑 " + d, e, g), r && r(!1, e)
                }
            })
        },
        NBBindUser: function e(r, n, a) {
            if (S(), M.cardId)
                if (M.deposited) {
                    var i = a || t(M.userMsg.WhiteMac),
                        o = i.api + "command/BindUser",
                        d = i.name,
                        u = "XT" == d ? "POST" : "PUT",
                        g = {
                            MeterAddr: M.deviceWater.WhiteMac,
                            UserId: M.userId,
                            CardSn: M.cardId
                        };
                    f.request({
                        url: o,
                        data: g,
                        method: u,
                        success: function(t) {
                            var i = t.data;
                            i.status ? (s("NB绑卡 " + d, i), M.cardId && (M.cardSt = 1, M.userMsg.ICCardStatus = 1), "XT" == d && M.showModal("", "绑卡用户请长按蓝色按钮直到滴一声"), r && r(!0)) : n ? (c("NB绑卡 " + d, i, g), r && r(!1, i)) : (c("NB绑卡 " + d, i, g), e(r, 1, a))
                        },
                        fail: function(e) {
                            c("NB绑卡 " + d, e, g), r && r(!1, e)
                        }
                    })
                } else r && r(!1, "未交押金");
            else r && r(!1, "未曾绑卡")
        },
        getValidateCode: function(e, r) {
            return S(), M.showLoading("加载中..."), new Promise((function(t, n) {
                var a = d + "utility/GetValidateCode",
                    i = {
                        phone: e,
                        ctype: r,
                        projectBotId: M.botId
                    };
                f.request({
                    url: a,
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    data: i,
                    success: function(e) {
                        var r;
                        if (M.hideLoading(), e.data.status) s("获取验码", e.data), r = "短信发送成功，请注意查看！", t();
                        else switch (c("获取验码", e.data), e.data.data) {
                            case "0":
                                r = "操作频繁，请5分钟后再试 ！";
                                break;
                            case "-5":
                                r = "此手机号码已绑定过了！";
                                break;
                            case "-2":
                                r = "该手机号码还未进行注册！";
                                break;
                            case "1":
                                r = "手机号码格式不正确！";
                                break;
                            case "2":
                                r = "您的帐号异常，请联系客服！"
                        }
                        r && M.showModal("", r)
                    },
                    fail: function(e) {
                        c("获取验码", e), M.showModal("请求失败", e)
                    }
                })
            }))
        },
        setOrdersPayStatus: function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            S();
            var t = d + "orders/SetOrdersPayStatus",
                n = {
                    OrderNo: e,
                    UserId: M.userId,
                    OrderType: r
                };
            return new Promise((function(e, r) {
                f.request({
                    url: t,
                    data: n,
                    method: "PUT",
                    success: function(r) {
                        s("支付通知", r.data), e(r.data)
                    },
                    fail: function(e) {
                        c("支付通知", e), r(e)
                    }
                })
            }))
        },
        GetDeviceEnable: function(e) {
            S();
            var r = f.getStorageSync("getDeviceEnable");
            return r && r.mac == e ? (M.DeviceEnable = r.DeviceEnable, Promise.resolve({
                status: !0
            })) : w(null, d + "bathmachine/DeviceEnable?machineSn=" + e, "启用状态").then((function(r) {
                return M.DeviceEnable = r.DeviceEnable, f.setStorageSync("getDeviceEnable", {
                    mac: e,
                    DeviceEnable: r.DeviceEnable,
                    time: Date.parse(new Date) / 1e3
                }), M.DeviceEnable ? I() && !M.surplus && "15989140870" != M.phone ? Promise.reject({
                    errMsg: "你的未付款订单已超出额度上限，请结算后重新操作"
                }) : Promise.resolve(r) : Promise.reject({
                    errMsg: "设备(" + e + ")已禁用，请联系管理员"
                })
            })).catch((function(r) {
                return r.isMyErr ? r.errMsg.indexOf("该表不存在") >= 0 ? Promise.reject({
                    errMsg: "设备(".concat(e, ")还没绑定或已删除，请联系管理员")
                }) : Promise.resolve(json) : Promise.reject(r)
            }))
        },
        ConsumeData: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r(),
                t = arguments.length > 1 ? arguments[1] : void 0;
            S();
            var n = "index" == y ? "" : "Change",
                a = e.api + "BleReported/ConsumeData" + n;
            return C(e, a, t, "订单采集 ".concat(e.name, " ").concat(n), "index" == y)
        },
        NBOpenProcess: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r(),
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    title: "",
                    errMsg: ""
                };
            S();
            var n = !1;
            return P(e).then((function(r) {
                if (n = !0, "XT" == e.name) {
                    var a = t.errMsg ? "蓝牙开阀失败" : "NB开阀中";
                    return M.showModal(a, "已下发NB远程开阀指令。请在1分钟内长按水表上的蓝色按钮激活水表！").then((function(t) {
                        return M.showLoading("等待中...", "index"), o(4).then((function() {
                            return B("Open", e, r.CommandId)
                        }))
                    }))
                }
                return o(4).then((function() {
                    return B("Open", e, r.CommandId)
                }))
            })).catch((function(r) {
                c("开阀失败", r);
                var a = M.page("index"),
                    i = M.page("testDevice");
                return n && (a || i) ? M.showModal("", e.nbs, "开阀失败", "开阀成功").then((function(e) {
                    return e ? Promise.resolve() : Promise.reject()
                })) : Promise.reject(r && r.errMsg ? r : t)
            }))
        },
        NBSwitchProcess: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Open",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r(),
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    title: "",
                    errMsg: ""
                };
            S();
            var a = !1;
            return T(e, t).then((function(r) {
                a = !0;
                var n = r.timeOrNumber;
                n && f.setStorageSync("GlobalOpenTime", n);
                var i = r.appkey;
                return i && f.setStorageSync("AppKey", i), o(4).then((function() {
                    return B(e, t, r.CommandId)
                }))
            })).catch((function(r) {
                var i = "Open" == e ? "开阀" : "关阀";
                s(i + "异常", r);
                var o = M.page("index"),
                    c = M.page("testDevice");
                return a && (o || c) ? M.showModal("", t.nbs.replace("命令", i), i + "失败", i + "成功").then((function(e) {
                    return e ? Promise.resolve() : Promise.reject()
                })) : Promise.reject(r && r.errMsg ? r : n)
            }))
        },
        isPayOffPage: I,
        BindUserCardRequest: function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r(),
                n = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 ? arguments[2] : void 0;
            S();
            var s = n || f.getStorageSync("cid"),
                o = t.api + "card/BindUserCard",
                c = {
                    UserId: g(),
                    CardNum: s,
                    MeterAddr: a()
                };
            return C(t, o, c, "绑定卡片 " + t.name).then((function(e) {
                return M.cardId = s, D(), Promise.resolve(e)
            })).catch((function(r) {
                return i ? (D(), Promise.reject(r)) : e(t, n, 1)
            }))
        },
        UnBindUserCardRequest: function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r(),
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l(),
                i = arguments.length > 2 ? arguments[2] : void 0;
            S();
            var s = t.api + "card/UnBindUserCard",
                o = {
                    UserId: n.userId || g(),
                    CardNum: n.cardId || v(),
                    MeterAddr: a()
                };
            return C(t, s, o, "解绑卡片 " + t.name).then((function(e) {
                return D(), Promise.resolve(e)
            })).catch((function(r) {
                return i ? (D(), r.isMyErr ? Promise.resolve(r) : Promise.reject(r)) : e(t, n, 1)
            }))
        },
        AlarmInfo: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r(),
                t = arguments.length > 1 ? arguments[1] : void 0,
                a = arguments.length > 2 ? arguments[2] : void 0;
            S();
            var i = e.api + "BleReported/AlarmInfo",
                s = {
                    MeterAddr: n(),
                    AlarmType: t,
                    ReportTime: a || h(new Date)
                };
            return C(e, i, s, "上传报警 " + e.name)
        },
        ErrMsg: O,
        GetRequest: w,
        PostRequest: C,
        GetAccessToken: A,
        setPage: function(e) {
            y = e
        },
        WhiteListFunc: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r(),
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = arguments.length > 2 ? arguments[2] : void 0;
            S();
            var a = e.api + "BleReported/WhiteList?meterAddr=" + (n || M.device.deviceMac);
            return C(e, a, t, "上传白单 " + e.name)
        },
        GetKey: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r(),
                t = arguments.length > 1 ? arguments[1] : void 0;
            S();
            var n = e.api + e.name.toLowerCase() + "kj/GetKey?dataStr=" + t;
            return w(e, n, "获取密钥 " + e.name)
        },
        checkArrearage15: function() {
            if (S(), h(new Date, "yymmdd") != f.getStorageSync("checkArrearage15")) {
                M.showLoading("加载中...");
                var e = d + "users/UserIsExcess15?userId=" + M.userId;
                f.request({
                    url: e,
                    success: function(e) {
                        M.hideLoading();
                        var r = e.data;
                        s("检测欠费", r), r.isExcess && M.showModal("提示", "您的未付款订单总额已超过15元，请尽快结算订单"), f.setStorageSync("checkArrearage15", h(new Date, "yymmdd"))
                    },
                    fail: function(e) {
                        M.hideLoading(), c("检测欠费", e)
                    }
                })
            }
        },
        GetAdvertList: function(e) {
            S();
            var r = [{
                    ImgFlash: "https://ucsmart.gzuci.com/upload/advert/202504101013496757335.jpg",
                    AdvertId: "0"
                }],
                t = f.getStorageSync("userId");
            if (t) {
                var n = "AdvertList" + t,
                    a = f.getStorageSync(n);
                a && e(a);
                var i = d + "advert/GetAdvertListByUserId?userId=" + t;
                f.request({
                    url: i,
                    success: function(t) {
                        var a = t.data;
                        if (a && a.data) {
                            var i = a.data;
                            i = i.length > 0 ? i : r, f.setStorageSync(n, i), e(i)
                        }
                    }
                })
            } else e(r)
        },
        CheckOrderIsPaid: function() {
            M.showLoading("加载中...");
            var e = d + "Orders/GetOrderList?userId=" + M.userId + "&orderState=0&pageSize=1&pageIndex=1";
            return new Promise((function(r, t) {
                M.request({
                    url: e,
                    method: "GET",
                    success: function(e) {
                        M.hideLoading(), e.data.totalAmount <= 0 ? r() : M.showModal("温馨提示", "您有欠费账单未支付，请先完成支付再更换用户地址")
                    },
                    fail: function(e) {
                        M.showModal("请求错误", e)
                    }
                })
            }))
        }
    };
});

define("27F6CAB394FC73BF4190A2B46A86E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("@babel/runtime/helpers/Arrayincludes.js");
    var e, t = require("@babel/runtime/helpers/objectSpread2.js"),
        c = require("@babel/runtime/helpers/typeof.js"),
        i = (require("F66EF4C094FC73BF90089CC7F697E8C0.js").compareVersion, require("CE76404694FC73BFA81028419976E8C0.js")),
        r = i.log,
        n = i.isAndroid,
        a = i.delay,
        o = require("C9B02F2594FC73BFAFD64722A696E8C0.js"),
        u = o.connectedDevices,
        s = o.errMsg,
        f = o.openBluetooth,
        d = o.closeBluetooth,
        l = o.connectedRecord,
        v = require("101E33B294FC73BF76785BB557A6E8C0.js"),
        h = v.getFactoryName,
        m = v.FactoryName,
        I = v.isKZY,
        g = require("C2427CC194FC73BFA42414C6A277E8C0.js"),
        p = {
            deviceId: "",
            deviceName: "",
            deviceMac: "",
            serviceId: "",
            characteristicIdNotify: "",
            characteristicIdWrite: "",
            sending: !1
        },
        T = [],
        b = null,
        M = null,
        N = null,
        S = null,
        y = null,
        B = null,
        D = 0;

    function C() {
        return e && clearTimeout(e), u().then((function(e) {
            return r("断开列表", e),
                function e(t) {
                    if (0 == t.length) return Promise.resolve("断开结束 ");
                    var c = t.shift();
                    return g.closeBLEConnection(c).then((function(i) {
                        return r("断开设备 成功", c), c.connected = !1, l(c), e(t)
                    })).catch((function(i) {
                        return r("断开设备 失败", c, i), e(t)
                    }))
                }(e)
        })).catch((function(e) {
            return r("断开列表", e), Promise.resolve(e)
        }))
    }

    function L(e, t, i, n) {
        b = t, e && r("查找设备", "".concat(e.deviceName, " ").concat(e.deviceId)), E().then((function(e) {
            return C()
        })).then((function(e) {
            return d()
        })).then((function(e) {
            return f()
        })).then((function(t) {
            ! function(e, t, i) {
                S && clearTimeout(S);
                S = setTimeout((function() {
                    if (e) {
                        var t = e.deviceName,
                            c = 14 == t.length ? t.substr(2) : t;
                        b("找不到水表", "您要连接是".concat(c, "吗？请靠近水表确认，轻触按钮一秒，唤醒水表！"))
                    } else 0 == T.length && b("扫描超时", "手机蓝牙异常，请重启手机蓝牙（关闭后再开启），确保手机GPS开启，再重试！")
                }), (i || 1e4) + D), D = 0, g.offBluetoothDeviceFound(), g.onBluetoothDeviceFound((function(c) {
                    w(c.devices[0], e, t) && (S && clearTimeout(S), b("查找成功", e))
                })), g.startBluetoothDevicesDiscovery({
                    services: [],
                    allowDuplicatesKey: !1,
                    success: function(e) {
                        r("扫描开始")
                    },
                    fail: function(e) {
                        S && clearTimeout(S), r("扫描失败", e), "object" != c(e) || 1509009 != e.errno && 1509008 != e.errno || (g.setStorageSync("checkLocationStatus", !1), g.offBluetoothDeviceFound(), e = "定位权限未开启，请确认开启定位并允许小程序定位授权，然后重新操作。"), b("开启查找设备失败", s(e))
                    }
                })
            }(e, i, n)
        }))
    }

    function E() {
        return g.stopBluetoothDevicesDiscovery().then((function(e) {
            r("停止扫描 成功")
        })).catch((function(e) {
            return r("停止扫描 失败", e), Promise.resolve(e)
        }))
    }

    function w(e, c, i) {
        var a = e.name;
        if (!a || "未知设备" == a) return !1;
        if (!c) return function(e, c) {
            if (e.RSSI > 0 || e.RSSI < -90) return;
            try {
                e = t(t({}, e), {}, {
                    name: e.name.replace("MX_BLE_HOTWM:", "BD").replace(/[^\w\-]/g, ""),
                    localName: e.localName.replace("MX_BLE_HOTWM:", "BD").replace(/[^\w\-]/g, "")
                })
            } catch (e) {}
            var i = e.name;
            i && e.localName && i != e.localName && (i = e.localName);
            var r = h(i);
            if (r || !c) {
                var a = i;
                if (r == m.ZK || !r)
                    if (n()) a = e.deviceId;
                    else {
                        var o = e.advertisData;
                        o && ((a = g.buf2hex(o).toUpperCase()).length >= 16 && (a = a.substr(4, 12)), 12 == a.length && (a = a.substr(0, 2) + ":" + a.substr(2, 2) + ":" + a.substr(4, 2) + ":" + a.substr(6, 2) + ":" + a.substr(8, 2) + ":" + a.substr(10, 2)))
                    }
                e.deviceMac = a, e.deviceName = i, T.push(e), T = function(e) {
                    for (var t = 0; t < e.length - 1; t++)
                        for (var c = 0; c < e.length - 1; c++) {
                            var i = e[c + 1];
                            i.RSSI > e[c].RSSI && (e[c + 1] = e[c], e[c] = i)
                        }
                    return e
                }(T), b("OK", T)
            }
        }(e, i), !1;
        try {
            a = a ? a.replace("MX_BLE_HOTWM:", "BD").replace(/[^\w\-]/g, "") : "", e = t(t({}, e), {}, {
                name: e.name ? e.name.replace("MX_BLE_HOTWM:", "BD").replace(/[^\w\-]/g, "") : "",
                localName: e.localName ? e.localName.replace("MX_BLE_HOTWM:", "BD").replace(/[^\w\-]/g, "") : ""
            })
        } catch (e) {}
        var o = !1,
            u = e.name || "",
            s = c.deviceId,
            f = c.deviceMac,
            d = c.deviceName;
        if (e.deviceId == s) o = !0, e.name = d;
        else if (a == f) o = !0;
        else if (u == d) o = !0;
        else if (u.includes(d)) o = !0, e.name = d;
        else if (e.localName == d) o = !0, e.name = e.localName;
        else {
            var l = h(a);
            if (!l || l == m.ZK) {
                if (n()) a = e.deviceId;
                else {
                    var v = e.advertisData;
                    v && ((a = g.buf2hex(v).toUpperCase()).length >= 16 && (a = a.substr(4, 12)), 12 == a.length && (a = a.substr(0, 2) + ":" + a.substr(2, 2) + ":" + a.substr(4, 2) + ":" + a.substr(6, 2) + ":" + a.substr(8, 2) + ":" + a.substr(10, 2)))
                }
                a == f && (o = !0)
            }
        }
        return !!o && (c.deviceId = e.deviceId, c.deviceName = e.name, c.RSSI = e.RSSI, e.RSSI && r("查找成功", "".concat(e.name, " ").concat(e.RSSI)), !0)
    }

    function O(e, t, c, i) {
        M = t;
        var n = e.deviceId,
            a = e.deviceName;
        e.deviceMac;
        r("连接设备", a, n);
        var o = c || 0;
        y && clearTimeout(y), y = setTimeout((function() {
            M("连接超时", 0 == o ? "请重启手机蓝牙或长按水表上的按钮，然后重新操作." : "请重启手机蓝牙或长按水表上的按钮，然后重新操作(" + e.deviceMac + ")")
        }), 22e3);
        var u = !1;
        g.createBLEConnection({
            deviceId: n,
            timeout: 8e3,
            success: function(c) {
                u = !0, R(e, t, i)
            },
            fail: function(c) {
                p.sending = !1, o++;
                var n = s(c);
                if (r("连接失败 " + o, c), !u)
                    if (y && clearTimeout(y), n.indexOf("打开手机蓝牙，") >= 0) M("开启蓝牙失败", n);
                    else {
                        var a = function(c) {
                            i ? o < 2 ? O(e, t, o, i) : M(n, "请重启手机蓝牙或长按水表上的按钮，然后重新操作。" + c) : (e.deviceId = "", F(e, t))
                        };
                        n.indexOf("-1") >= 0 || n.indexOf("already connect") >= 0 ? (u = !0, R(e, t, i)) : "未初始化" == n ? a("(00)") : "连接超时" == n ? a("(12)") : "连接失败" == n ? a("(03)") : o < 2 ? 10003 == c.errCode || c.errMsg.indexOf("status:133") > -1 ? C().then((function() {
                            setTimeout((function() {
                                O(e, t, o, i)
                            }), 500)
                        })) : setTimeout((function() {
                            O(e, t, o, i)
                        }), 500) : "找不到水表" == n ? M(n + "(02)", "请重启手机蓝牙或长按水表上的按钮，然后重新操作.！") : M("连接失败", "连接失败次数过多，请重启手机蓝牙或长按按钮，然后重新操作！")
                    }
            }
        })
    }
    var P = {};

    function R(e, t, c) {
        y && clearTimeout(y), p.deviceId = e.deviceId, p.deviceName = e.deviceName, p.deviceMac = e.deviceMac, g.setStorage({
                key: p.deviceId,
                data: p.deviceMac
            }), g.setStorage({
                key: p.deviceMac,
                data: p.deviceId
            }), r("连接成功", p.deviceName, p.deviceId), y = setTimeout((function() {
                _() ? W(p) : (r("获取服务超时", p, P), M("连接出错", "获取设备服务超时，请稍后重试"))
            }), 22e3), P = {},
            function(e) {
                return g.getBLEDeviceServices({
                    doDiscover: !0,
                    deviceId: p.deviceId
                }).then((function(t) {
                    return function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            c = arguments.length > 1 ? arguments[1] : void 0,
                            i = arguments.length > 2 ? arguments[2] : void 0;
                        if (p.characteristicIdNotify = "", p.characteristicIdWrite = "", p.serviceId = "", 0 == t.length) return Promise.reject(i || {});
                        var r = t.shift(),
                            n = r.uuid || r.serviceId;
                        return g.getBLEDeviceCharacteristics({
                            deviceId: p.deviceId,
                            serviceId: n
                        }).then((function(i) {
                            var r, a;
                            P[n] = i.characteristics;
                            for (var o = 0; o < i.characteristics.length; o++) {
                                var u = i.characteristics[o],
                                    s = u.properties,
                                    f = u.uuid || u.characteristicId;
                                if (s.notify && (r = f), s.write && (a = f), r && a) return p.serviceId = n, p.characteristicIdNotify = r, p.characteristicIdWrite = a, Promise.resolve(p)
                            }
                            return e(t, c)
                        })).catch((function(i) {
                            return i.scMsg = "获取特征失败", e(t, c, i)
                        }))
                    }(I() && t.services.filter((function(e) {
                        return (e.uuid || e.serviceId).includes("00008900")
                    })) || t.services, e)
                })).catch((function(e) {
                    return e.scMsg = "获取服务失败", Promise.reject(e)
                }))
            }(e).then((function(e) {
                W(e)
            })).catch((function(i) {
                var n = i.scMsg || "获取服务失败";
                r(n, p, P), y && clearTimeout(y), c ? (C(), M(n, s(i))) : (e.deviceId = "", F(e, t))
            }))
    }

    function W(e) {
        y && clearTimeout(y), r("开启通知", p), g.notifyBLECharacteristicValueChange({
            deviceId: p.deviceId,
            serviceId: p.serviceId,
            characteristicId: p.characteristicIdNotify,
            state: !0,
            success: function(t) {
                g.offBLECharacteristicValueChange(), g.onBLECharacteristicValueChange((function(e) {
                    var t = e.value,
                        c = g.buf2hex(t).toUpperCase();
                    N && N("读取成功", c, (function() {
                        B && (N = null, clearTimeout(B))
                    }))
                })), setTimeout((function() {
                    M("连接成功", e)
                }), n() ? 300 : 0)
            },
            fail: function(e) {
                M("使能失败", s(e))
            }
        })
    }

    function _() {
        return p.serviceId && p.characteristicIdNotify && p.characteristicIdWrite
    }

    function q(e) {
        return u().then((function(t) {
            var c = !1;
            if (t)
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    if (r.RSSI = null, c = w(r, e)) break
                }
            return c && p.deviceMac == e.deviceMac && _() ? Promise.resolve() : Promise.reject()
        }))
    }

    function x(e, t, c) {
        B && clearTimeout(B), B = setTimeout((function() {
                c ? t("返回超时", "返回超时，请多重试几次。") : x(e, t, 1)
            }), 5e3), N = t,
            function(e) {
                var t = [];
                if (e instanceof Array) t = e;
                else {
                    for (var c = e.toUpperCase(); c.length > 38;) {
                        var i = c.slice(0, 38);
                        c = c.substr(38), t.push(i)
                    }
                    t.push(c)
                }! function e(c) {
                    ! function e(t, c, i) {
                        var n = new Uint8Array(t.match(/[\da-f]{2}/gi).map((function(e) {
                            return parseInt(e, 16)
                        })));
                        g.writeBLECharacteristicValue({
                            deviceId: p.deviceId,
                            serviceId: p.serviceId,
                            characteristicId: p.characteristicIdWrite,
                            value: n.buffer,
                            success: function(e) {
                                c && c()
                            },
                            fail: function(n) {
                                r("发送失败".concat(i || 0), n);
                                var a = s(n);
                                if ("连接断开" == a) B && clearTimeout(B), r("连接断开 write", n), C().then((function() {
                                    N && N("连接断开06", "发送数据失败，" + a)
                                }));
                                else if ("没有服务" == a) B && clearTimeout(B), r("没有服务 write", n), N && N("没有服务04", "发送数据失败，" + a);
                                else {
                                    if (!i) return void setTimeout((function() {
                                        e(t, c, 1)
                                    }), 200);
                                    B && clearTimeout(B), "系统异常" == a ? (r("系统异常", n), C(), N && N("系统异常08", "发送数据失败，" + a)) : N && N("发送数据失败", s(n))
                                }
                            }
                        })
                    }(t[c], (function() {
                        c + 1 < t.length && setTimeout((function() {
                            e(c + 1)
                        }), 20)
                    }))
                }(0)
            }(e)
    }

    function F(e, t) {
        var c = function(e, c) {
            O(e, (function(e, c) {
                t(e, c)
            }), 0, c)
        };
        r("扫连开始", e.deviceName, e.deviceId), e.deviceId ? c(e, 0) : L(e, (function(e, i) {
            E().then((function(r) {
                "查找成功" == e ? a(.2).then((function() {
                    return c(i, 1)
                })) : t(e, i)
            }))
        }))
    }
    module.exports = {
        scan: L,
        stop: E,
        disconnect: C,
        connect: O,
        clearScan: function() {
            T = []
        },
        scanPlusTime: function(e) {
            D = e
        },
        strToMac: function(e) {
            for (var t = "", c = 0; c < 12; c += 2) c && (t += ":"), t += e.substr(c, 2);
            return t.toUpperCase()
        },
        query: function(e, t, c) {
            q(e).then((function() {
                x(t, c)
            })).catch((function() {
                F(e, (function(e, i) {
                    "string" == typeof e && e.indexOf("成功") >= 0 ? x(t, c) : c(e, i)
                }))
            }))
        },
        timerFunc: function() {
            e && clearTimeout(e), e = setTimeout((function() {
                C()
            }), 12e4)
        },
        errMsg: s
    };
});

define("3CFBD57594FC73BF5A9DBD72A447E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("25B9627594FC73BF43DF0A720987E8C0.js"),
        n = e.NBSwitchProcess,
        t = e.GetDeviceEnable,
        r = e.BindUserCardRequest,
        o = e.UnBindUserCardRequest,
        u = e.NBBindUser,
        i = e.NBUnBindUser,
        c = require("101E33B294FC73BF76785BB557A6E8C0.js"),
        s = c.ZHONG_KA,
        a = c.getDevice,
        f = c.getDeviceSN,
        h = require("CE76404694FC73BFA81028419976E8C0.js"),
        d = h.log,
        l = (h.error, h.delay),
        v = require("27F6CAB394FC73BF4190A2B46A86E8C0.js"),
        g = v.query,
        m = v.disconnect,
        p = require("C2427CC194FC73BFA42414C6A277E8C0.js"),
        I = require("A6CC3C9394FC73BFC0AA54949A67E8C0.js").showLoading,
        y = require("A4E4D9B094FC73BFC282B1B73757E8C0.js"),
        P = y.AuthorityReqCommand,
        b = y.SettingParReqCommand,
        q = y.UpdateRunReqCommand,
        M = y.GetCardIdReqCommand,
        S = require("F189637094FC73BF97EF0B777167E8C0.js").ProcessExecuter,
        C = requirePlugin("zk"),
        N = getApp(),
        B = "",
        D = {
            SN: ""
        },
        U = s,
        k = {
            Myself: "01",
            Others: "00"
        },
        O = "01",
        w = "02";

    function G(e) {
        switch (e) {
            case "开阀":
                var n = k.Myself,
                    t = O;
                return L().then((function(e) {
                    return j(n)
                })).then((function(e) {
                    // 绕过服务器授权请求 P()，直接返回本地数据给下一步 F(e, t)
                    return Promise.resolve(e && e.data ? e.data : "0000000000000000")
                })).then((function(e) {
                    return F(e, t)
                }));
            case "关阀":
                return r = N.userId.substr(7), o = 8 == N.cardId.length ? N.cardId : "00000000", H("14", {
                    ID: r + o
                })
        }
        var r, o
    }

    function R(e) {
        return (f() ? Promise.resolve() : K()).then((function() {
            return n("开阀" == e ? "Open" : "Close", U)
        }))
    }

    function A(e) {
        return L().then((function(e) {
            return n = N.device.machineid, t = N.userId.substr(7), r = 8 == N.cardId.length ? N.cardId : "00000000", o = p.getStorageSync("AppKey") || "05C50F3B", H("01", {
                SN: n,
                appKey: o,
                randonNum: B,
                ID: t + r
            });
            var n, t, r, o
        }))
    }

    function x() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k.Myself,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (n > 5) return Promise.resolve("采集中止，超过5条");
        var t = w;
        return L().then((function(n) {
            return j(e)
        })).then((function(e) {
            return P(e, B, "采集", U)
        })).then((function(e) {
            return F(e, t)
        })).then((function(t) {
            return x(e, n + 1)
        })).catch((function(e) {
            return Promise.resolve(e)
        }))
    }

    function E(e) {
        // 直接通过蓝牙向水表发送 07 指令 (标记/擦除水表订单)
        return H("07", e || {}).catch((function(err) {
            // 容错处理：即使水表响应异常也强行 resolve
            return Promise.resolve();
        }));
    }

    function K() {
        return D.SN && D.SN == f() ? Promise.resolve(D) : H("F0").then((function(e) {
            return D = e, Promise.resolve(e)
        }))
    }

    function L() {
        return (f() ? Promise.resolve() : K()).then((function() {
            return H("08")
        })).then((function(e) {
            return B = e.data, Promise.resolve(e)
        }))
    }

    function j(e, n) {
        var t = n || N.cardId;
        return H("02", {
            type: e,
            ID: N.userId.substr(7) + (8 == t.length ? t : "00000000")
        })
    }

    function F(e, n) {
        return H(U.is4G ? "" : "06", {
            type: n,
            data: e
        })
    }

    function H(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return d("执行命令", e, n), new Promise((function(t, r) {
            (e ? C["get".concat(e, "Data")](n) : Promise.resolve(n)).then((function(n) {
                var o = "",
                    u = a();
                d("发送数据", n.data), g(u, n.data, (function(i, c, s) {
                    if ("读取成功" == i) {
                        d("接收数据", c);
                        var a = (o = (o += c).length > 2 ? C.changeChar({
                            data: o,
                            restore: !0
                        }) : o).length > 4 ? 2 * parseInt(o.substr(2, 2), 16) + 6 : 0;
                        o.length === a && (s && s(), C.getBackData({
                            sendData: n.data,
                            macBackData: o
                        }).then((function(e) {
                            e.IMEI && (e.IMEI = e.IMEI.substr(0, 15)), e.SN && (u.machineid = e.SN), e.type && (u.type = e.type), e.version && (u.version = e.version), t(e)
                        })).catch((function(n) {
                            d("解析失败 " + e + " ", n), n = n.nbMsg || T[n.nbCode] || n, r(n)
                        })))
                    } else d("读取失败", i, c), "OK" == i.toUpperCase ? r({
                        title: "连接失败",
                        errMsg: "未能找到要连接的设备",
                        toNB: !0
                    }) : r({
                        title: i,
                        errMsg: c,
                        toNB: !0
                    })
                }))
            })).catch((function(n) {
                d("执行异常", "获取".concat(e, "命令失败"), n), r("获取".concat(e, "命令失败"))
            }))
        }))
    }
    var T = {
        10050: "数据验证错误",
        10051: "该账户正在使用中",
        10052: "授权失败",
        10053: "设备正在忙",
        10054: "消费记录返回失败",
        10055: "未绑定设备",
        10056: "更新失败",
        10057: "额度不足"
    };
    module.exports = {
        switching: function e(n, c, a, h) {
            switch (N || (N = getApp()), U = N.factory || s, p.setStorageSync("nbOpen", 0), I(n + "中...", "index"), n) {
                case "开阀":
                case "关阀":
                    var d;
                    d = "ble" == a ? [G] : "nb" == a ? [R] : [G, R].concat("开阀" == n ? A : []),
                    Promise.resolve()
                    .then((function(e) {
                            return S(d, n)
                        })).then((function(e) {
                            // 绕过服务器采集上传 x()，直接下发蓝牙 07 指令标记完成并断开连接
                            (c(!0, e), "nb" != a) && E().then((function() {
                                m()
                            }))
                        }));
                    break;
            }
        }
    };
});

define("961D3B4394FC73BFF07B53440C77E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.WEB_UC = exports.WEB_Installer = exports.API_ZK_4G = exports.API_ZK = exports.API_XT = exports.API_MH_4G = exports.API_MH = exports.API_KZY = exports.API_CO = exports.API_BD = void 0;
    var t = "gzuci.com",
        c = "".concat(":8443"),
        a = "".concat("beidian"),
        o = "".concat("xintian"),
        n = "".concat("minghan"),
        r = "".concat("minghan4g"),
        p = "".concat("zhongka"),
        s = "".concat("zhongka4g"),
        e = "".concat("hnkzy4g"),
        _ = "".concat("smarth5"),
        x = "".concat("hwsmart"),
        I = "https://".concat(x, ".").concat(t, "/api/");
    exports.API_CO = I;
    var i = "https://".concat(a, ".").concat(t).concat(c, "/api/");
    exports.API_BD = i;
    var h = "https://".concat(o, ".").concat(t).concat(c, "/api/");
    exports.API_XT = h;
    var P = "https://".concat(n, ".").concat(t).concat(c, "/api/");
    exports.API_MH = P;
    var A = "https://".concat(r, ".").concat(t).concat(c, "/api/");
    exports.API_MH_4G = A;
    var v = "https://".concat(p, ".").concat(t).concat(c, "/api/");
    exports.API_ZK = v;
    var g = "https://".concat(s, ".").concat(t).concat(c, "/api/");
    exports.API_ZK_4G = g;
    var l = "https://".concat(e, ".").concat(t).concat(c, "/api/");
    exports.API_KZY = l;
    var B = "https://".concat(_, ".").concat(t, "/UserCenter/");
    exports.WEB_UC = B;
    var K = "https://".concat(_, ".").concat(t, "/Installer/");
    exports.WEB_Installer = K;
});

define("96F37EE694FC73BFF09516E13407E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";

    function r(r, n) {
        return r << n | r >>> 32 - n
    }

    function n(r, n) {
        var t, o, e, u, f;
        return e = 2147483648 & r, u = 2147483648 & n, f = (1073741823 & r) + (1073741823 & n), (t = 1073741824 & r) & (o = 1073741824 & n) ? 2147483648 ^ f ^ e ^ u : t | o ? 1073741824 & f ? 3221225472 ^ f ^ e ^ u : 1073741824 ^ f ^ e ^ u : f ^ e ^ u
    }

    function t(t, o, e, u, f, i, a) {
        return t = n(t, n(n(function(r, n, t) {
            return r & n | ~r & t
        }(o, e, u), f), a)), n(r(t, i), o)
    }

    function o(t, o, e, u, f, i, a) {
        return t = n(t, n(n(function(r, n, t) {
            return r & t | n & ~t
        }(o, e, u), f), a)), n(r(t, i), o)
    }

    function e(t, o, e, u, f, i, a) {
        return t = n(t, n(n(function(r, n, t) {
            return r ^ n ^ t
        }(o, e, u), f), a)), n(r(t, i), o)
    }

    function u(t, o, e, u, f, i, a) {
        return t = n(t, n(n(function(r, n, t) {
            return n ^ (r | ~t)
        }(o, e, u), f), a)), n(r(t, i), o)
    }

    function f(r) {
        var n, t = "",
            o = "";
        for (n = 0; n <= 3; n++) t += (o = "0" + (r >>> 8 * n & 255).toString(16)).substr(o.length - 2, 2);
        return t
    }
    module.exports.md5 = function(r) {
        var i, a, c, C, h, g, d, m, S, s = Array();
        for (s = function(r) {
                var n, t = r.length,
                    o = t + 8,
                    e = 16 * ((o - o % 64) / 64 + 1),
                    u = Array(e - 1),
                    f = 0,
                    i = 0;
                for (; i < t;) f = i % 4 * 8, u[n = (i - i % 4) / 4] = u[n] | r.charCodeAt(i) << f, i++;
                return f = i % 4 * 8, u[n = (i - i % 4) / 4] = u[n] | 128 << f, u[e - 2] = t << 3, u[e - 1] = t >>> 29, u
            }(r = function(r) {
                for (var n = "", t = 0; t < r.length; t++) {
                    var o = r.charCodeAt(t);
                    o < 128 ? n += String.fromCharCode(o) : o > 127 && o < 2048 ? (n += String.fromCharCode(o >> 6 | 192), n += String.fromCharCode(63 & o | 128)) : (n += String.fromCharCode(o >> 12 | 224), n += String.fromCharCode(o >> 6 & 63 | 128), n += String.fromCharCode(63 & o | 128))
                }
                return n
            }(r)), g = 1732584193, d = 4023233417, m = 2562383102, S = 271733878, i = 0; i < s.length; i += 16) a = g, c = d, C = m, h = S, g = t(g, d, m, S, s[i + 0], 7, 3614090360), S = t(S, g, d, m, s[i + 1], 12, 3905402710), m = t(m, S, g, d, s[i + 2], 17, 606105819), d = t(d, m, S, g, s[i + 3], 22, 3250441966), g = t(g, d, m, S, s[i + 4], 7, 4118548399), S = t(S, g, d, m, s[i + 5], 12, 1200080426), m = t(m, S, g, d, s[i + 6], 17, 2821735955), d = t(d, m, S, g, s[i + 7], 22, 4249261313), g = t(g, d, m, S, s[i + 8], 7, 1770035416), S = t(S, g, d, m, s[i + 9], 12, 2336552879), m = t(m, S, g, d, s[i + 10], 17, 4294925233), d = t(d, m, S, g, s[i + 11], 22, 2304563134), g = t(g, d, m, S, s[i + 12], 7, 1804603682), S = t(S, g, d, m, s[i + 13], 12, 4254626195), m = t(m, S, g, d, s[i + 14], 17, 2792965006), g = o(g, d = t(d, m, S, g, s[i + 15], 22, 1236535329), m, S, s[i + 1], 5, 4129170786), S = o(S, g, d, m, s[i + 6], 9, 3225465664), m = o(m, S, g, d, s[i + 11], 14, 643717713), d = o(d, m, S, g, s[i + 0], 20, 3921069994), g = o(g, d, m, S, s[i + 5], 5, 3593408605), S = o(S, g, d, m, s[i + 10], 9, 38016083), m = o(m, S, g, d, s[i + 15], 14, 3634488961), d = o(d, m, S, g, s[i + 4], 20, 3889429448), g = o(g, d, m, S, s[i + 9], 5, 568446438), S = o(S, g, d, m, s[i + 14], 9, 3275163606), m = o(m, S, g, d, s[i + 3], 14, 4107603335), d = o(d, m, S, g, s[i + 8], 20, 1163531501), g = o(g, d, m, S, s[i + 13], 5, 2850285829), S = o(S, g, d, m, s[i + 2], 9, 4243563512), m = o(m, S, g, d, s[i + 7], 14, 1735328473), g = e(g, d = o(d, m, S, g, s[i + 12], 20, 2368359562), m, S, s[i + 5], 4, 4294588738), S = e(S, g, d, m, s[i + 8], 11, 2272392833), m = e(m, S, g, d, s[i + 11], 16, 1839030562), d = e(d, m, S, g, s[i + 14], 23, 4259657740), g = e(g, d, m, S, s[i + 1], 4, 2763975236), S = e(S, g, d, m, s[i + 4], 11, 1272893353), m = e(m, S, g, d, s[i + 7], 16, 4139469664), d = e(d, m, S, g, s[i + 10], 23, 3200236656), g = e(g, d, m, S, s[i + 13], 4, 681279174), S = e(S, g, d, m, s[i + 0], 11, 3936430074), m = e(m, S, g, d, s[i + 3], 16, 3572445317), d = e(d, m, S, g, s[i + 6], 23, 76029189), g = e(g, d, m, S, s[i + 9], 4, 3654602809), S = e(S, g, d, m, s[i + 12], 11, 3873151461), m = e(m, S, g, d, s[i + 15], 16, 530742520), g = u(g, d = e(d, m, S, g, s[i + 2], 23, 3299628645), m, S, s[i + 0], 6, 4096336452), S = u(S, g, d, m, s[i + 7], 10, 1126891415), m = u(m, S, g, d, s[i + 14], 15, 2878612391), d = u(d, m, S, g, s[i + 5], 21, 4237533241), g = u(g, d, m, S, s[i + 12], 6, 1700485571), S = u(S, g, d, m, s[i + 3], 10, 2399980690), m = u(m, S, g, d, s[i + 10], 15, 4293915773), d = u(d, m, S, g, s[i + 1], 21, 2240044497), g = u(g, d, m, S, s[i + 8], 6, 1873313359), S = u(S, g, d, m, s[i + 15], 10, 4264355552), m = u(m, S, g, d, s[i + 6], 15, 2734768916), d = u(d, m, S, g, s[i + 13], 21, 1309151649), g = u(g, d, m, S, s[i + 4], 6, 4149444226), S = u(S, g, d, m, s[i + 11], 10, 3174756917), m = u(m, S, g, d, s[i + 2], 15, 718787259), d = u(d, m, S, g, s[i + 9], 21, 3951481745), g = n(g, a), d = n(d, c), m = n(m, C), S = n(S, h);
        return (f(g) + f(d) + f(m) + f(S)).toLowerCase()
    };
});

define("@babel/runtime/helpers/Arrayincludes.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(r, e) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var t = Object(this),
                n = t.length >>> 0;
            if (0 == n) return !1;
            for (var i, o, a = 0 | e, u = Math.max(0 <= a ? a : n - Math.abs(a), 0); u < n;) {
                if ((i = t[u]) === (o = r) || "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o)) return !0;
                u++
            }
            return !1
        }
    });
});

define("@babel/runtime/helpers/objectSpread2.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var defineProperty = require("./defineProperty");

    function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter((function(r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
            }))), t.push.apply(t, o)
        }
        return t
    }

    function _objectSpread2(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys(Object(t), !0).forEach((function(r) {
                defineProperty(e, r, t[r])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach((function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
            }))
        }
        return e
    }
    module.exports = _objectSpread2;
});

define("@babel/runtime/helpers/typeof.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _typeof(o) {
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
        }, _typeof(o)
    }
    module.exports = _typeof;
});

define("A4E4D9B094FC73BFC282B1B73757E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("C2427CC194FC73BFA42414C6A277E8C0.js"),
        a = require("C2427CC194FC73BFA42414C6A277E8C0.js").setStorageSync,
        t = require("961D3B4394FC73BFF07B53440C77E8C0.js").API_ZK,
        r = require("25B9627594FC73BF43DF0A720987E8C0.js"),
        n = r.PostRequest,
        i = r.GetRequest,
        s = require("101E33B294FC73BF76785BB557A6E8C0.js"),
        d = s.getDevice,
        m = (s.ZHONG_KA, s.Factory),
        o = {
            val: "2",
            def: "2",
            min: 1,
            max: 2,
            des: "设备类型"
        },
        u = {
            val: "1",
            def: "1",
            min: 1,
            max: 31,
            des: "扇区号"
        },
        l = {
            val: "500",
            def: "500",
            min: 1,
            max: 5e3,
            des: "设备限额"
        },
        c = {
            val: "45",
            def: "45",
            min: 0,
            max: 99,
            des: "毫"
        },
        v = {
            val: "5",
            def: "5",
            min: 0,
            max: 9,
            des: "厘"
        },
        p = {
            val: "2",
            def: "2",
            min: 0,
            max: 255,
            des: "分"
        },
        h = {
            val: "1",
            def: "1",
            min: 0,
            max: 255,
            des: "脉冲"
        },
        g = {
            val: "30",
            def: "30",
            min: 0,
            max: 255,
            des: "脉冲Q值"
        },
        f = {
            val: "64",
            def: "64",
            min: 0,
            max: 255,
            des: "缺水报警"
        };

    function y(e, a, t) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : m(),
            i = getApp(),
            s = d();
        if ("采集" == t && 2 == e.data.length) return Promise.reject("采集结束");
        var o = {
                MeterAddr: s.machineid,
                DeviceRandom: a || "00000000",
                Data02: e.originalData,
                UserId: i.userId
            },
            u = r.api + "Ble/" + ("采集" == t ? "GatherData" : "OpenValve");
        return n(null, u, o, "授权数据").then((function(e) {
            if (e.OpenData) return Promise.resolve(e.OpenData);
            var a = e.studentid,
                r = e.systemdata,
                n = (e.systemtime, e.posmoney);
            e.postime;
            return "采集" == t && 0 == n && i.userId.substr(7) == a ? Promise.reject("采集结束") : Promise.resolve(r)
        }))
    }

    function I(e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m(),
            t = d(),
            r = getApp(),
            i = {
                UserId: r.userId,
                MeterAddr: t.machineid,
                DeviceMode: o.val,
                SectorNo: u.val,
                Cent: p.val,
                Li: v.val,
                Pulse: h.val,
                QVal: g.val,
                WaterShortageAlarm: f.val,
                LimitMoney: l.val
            },
            s = a.api + "Ble/SetPosRate";
        return n(null, s, i, "设置费率").then((function(e) {
            return Promise.resolve({
                data: "",
                key: "SP1." + t.machineid
            })
        }))
    }

    function A(e, a, t) {
        for (var r = (parseInt(e || "0", 10) * (t || 1) >>> 0).toString(16).toUpperCase(), n = (a || 2) - r.length, i = 0; i < n; i++) r = "0" + r;
        return r
    }
    module.exports = {
        AuthorityReqCommand: function(e, t, r) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : m();
            if (!e || !e.data) return Promise.reject("02数据异常");
            if (i.is4G) return y(e, t, r, i);
            var s = e.data.substr(0, 2).toUpperCase(),
                o = "",
                u = "";
            if (("00" == s || "01" == s) && e.data.length >= 48) o = e.data.substr(36, 12).toUpperCase(), u = e.data.substr(20, 16).toUpperCase();
            else if ("采集" == r) return Promise.reject("采集结束");
            var l = parseInt(e.data.length >= 50 ? e.data.substr(48, 2) : "00", 16),
                c = parseInt(e.data.length >= 4 ? e.data.substr(2, 2) : "00", 16),
                v = getApp(),
                p = d(),
                h = v.cardId || "00000000",
                g = {
                    UserId: v.userId,
                    Mac: p.deviceMac,
                    MachineId: p.machineid,
                    MachineTypeid: p.type,
                    MachineVer: p.version,
                    Machinedata: u,
                    MachineRandom: t || "00000000",
                    PosSystemtime: o,
                    CallType: "开阀" == r ? 0 : 1,
                    watertemperature: l,
                    postool: c,
                    CardId: 8 == h.length ? h : "00000000",
                    CanUseAmount: v.CanUseAmount || 1e3
                },
                f = "https://mzhongka.gzuci.com/api/Ble/GatherParseData";
            return n(null, f, g, "授权数据").then((function(e) {
                a("AppKey", e.data.appkey);
                var t = e.data.studentid,
                    n = e.data.systemdata + e.data.systemtime,
                    i = e.data.posmoney;
                e.data.postime;
                return "采集" == r && 0 == i && v.userId.substr(7) == t ? Promise.reject("采集结束") : Promise.resolve(n)
            }))
        },
        SettingParReqCommand: function(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m(),
                i = d(),
                s = e.getStorageSync("SP1." + i.machineid);
            if (s) return Promise.resolve();
            if (r.is4G) return I(t, r);
            var v = {
                machineid: i.machineid,
                machine_typeid: i.type,
                machine_ver: i.version,
                machineid_random: t
            };
            v.setmachinedata = A(p.val) + A(h.val) + A(c.val) + A(l.val, 4) + A(o.val) + A(g.val) + A(f.val) + A(u.val);
            var y = "https://mzhongka.gzuci.com/api/Ble/SetPosRate";
            return n(null, y, v, "设置费率").then((function(e) {
                a("AppKey", e.appkey);
                var t = e.systemdata,
                    r = (e.systemtime, t);
                return Promise.resolve({
                    data: r,
                    key: "SP1." + i.machineid
                })
            }))
        },
        UpdateRunReqCommand: function(a) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m(),
                r = getApp();
            if (r.hasUpdateRun) return Promise.resolve();
            var i = d(),
                s = a.data.substr(44, 28),
                o = e.getStorageSync(i.machineid + "_1");
            if (s == o) return Promise.resolve();
            var u = {
                    SN: a.SN,
                    Cumulative: parseInt(a.cumulative, 16),
                    Rate: .01 * parseInt(a.rate.substr(0, 2), 16) + 1e-4 * parseInt(a.deductionFeeRate, 16),
                    Quota: .01 * parseInt(a.quota.substr(2, 2) + a.quota.substr(0, 2), 16),
                    Qvalue: parseInt(a.QValue, 16),
                    LackOfWaterAlarmTime: parseInt(a.lackOfWaterAlarmTime, 16),
                    AntimagneticAlarmNum: parseInt(a.antimagneticAlarmNum, 16),
                    MeterAlarmNum: parseInt(a.meterAlarmNum, 16),
                    ShieldDestroyedAlarm: parseInt(a.shieldDestroyedAlarm, 16)
                },
                l = t.api + "Ble/UpdateMachine";
            return n(null, l, u, "运行状态").then((function(a) {
                r.hasUpdateRun = !0, e.setStorageSync(i.machineid + "_1", s)
            }))
        },
        GetCardIdReqCommand: function(e) {
            var a = getApp(),
                r = d(),
                n = t + "NB/GetUserCardIdToBindByMachineId?userId=".concat(a.userId, "&machineId=").concat(r.machineid);
            return i(null, n, "获取卡号")
        }
    };
});

define("A6CC3C9394FC73BFC0AA54949A67E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var n = require("CE76404694FC73BFA81028419976E8C0.js"),
        o = n.log,
        t = n.isAndroid,
        e = n.isLog,
        i = require("C2427CC194FC73BFA42414C6A277E8C0.js"),
        a = require("25B9627594FC73BF43DF0A720987E8C0.js").ErrMsg;

    function s(n) {
        i.hideLoading()
    }

    function c(n, o, e) {
        n && setTimeout((function() {
            n.indexOf("成功") >= 0 ? i.showToast({
                title: n,
                icon: "success",
                duration: 600,
                mask: !0
            }) : o ? i.showToast({
                title: n,
                image: "../../images/" + o + ".png",
                duration: 800,
                mask: !0
            }) : i.showToast({
                title: n,
                icon: "none",
                duration: 800,
                mask: !0
            })
        }), (t(), 0)), s()
    }

    function r(n, o, t, e, a, c, r) {
        s();
        var u = d(o);
        return "自动断开" == u && (connected.state = !1), new Promise((function(o, s) {
            i.showModal({
                title: n || "温馨提示",
                content: u,
                showCancel: !!t,
                cancelText: t || "",
                confirmText: e || "知道了",
                success: function(n) {
                    n.confirm && a ? a() : c && c(), n.confirm && o(1), n.cancel && o(0)
                }
            })
        }))
    }

    function d(n) {
        return a(n).errMsg
    }
    module.exports = {
        loadingTitle: null,
        showLoading: function(n, t) {
            var a = !e; //!app.isTest()
            o("调试模式", e, n = n || "loading"), i.showLoading({
                title: n,
                mask: a
            })
        },
        hideLoading: s,
        showModal: r,
        showBleModal: function(n, o, t, e, i, a) {
            r(n, o, t, e, i, a, "index")
        },
        showToast: c,
        showBleToast: function(n, o) {
            c(n, o, "index")
        },
        errormsg: d,
        updateUI: function() {
            var n = i.getUpdateManager();
            n.onCheckForUpdate((function(n) {
                n.hasUpdate || o("最新版本")
            })), n.onUpdateReady((function() {
                i.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启应用？",
                    success: function(t) {
                        t.confirm && (o("更新版本"), n.applyUpdate())
                    }
                })
            })), n.onUpdateFailed((function() {
                o("更新失败")
            }))
        }
    };
});

define("AB02EE3794FC73BFCD6486300866E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.User = function(e, r) {
        return {
            userId: e,
            cardId: r
        }
    }, exports.getCardId = function() {
        return getApp().cardId
    }, exports.getUserId = function() {
        return getApp().userId
    };
});

define("ADC3732294FC73BFCBA51B256556E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.isVerified = function(t) {
        r || (r = getApp());
        var o = t.header["X-Sign"] || t.header["x-sign"],
            n = t.data;
        (0, e.log)("校验数据");
        var s = i(n, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJod3NtYXJ0Lmd6dWNpLmNvbSIsIm5hbWUiOiJIdWFKdW4gQmFuIiwiaWF0IjoxNjY5MDk3Mjk4fQ.DLsJXUfoeOq7c5Bq-gm7gwX-ds0IfTzu9k3tatzrtng");
        if (s == o) return !0;
        return r.showModal("非法数据", "服务器返回数据可能被截取和篡改，若无非法操作，请联系客服。", "", "知道了", (function() {
            r.logout()
        })), (0, e.error)("非法数据", "".concat(s, " ").concat(o, " ").concat((new Date).getTime()), n), !1
    }, exports.signJson = i;
    var e = require("CE76404694FC73BFA81028419976E8C0.js"),
        t = require("96F37EE694FC73BFF09516E13407E8C0.js"),
        r = getApp();

    function i(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "5b&8Nj7-4V2G4qMp";
        return (0, t.md5)(JSON.stringify(e) + r).toUpperCase()
    }
});

define("C2427CC194FC73BFA42414C6A277E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var WX = typeof wx !== 'undefined' ? wx : (window.wx || {});
    var NativeBle = typeof window !== 'undefined' ? (window.AppNativeBle || {}) : {};

    module.exports = {
        offBluetoothAdapterStateChange: function(e) { WX.offBluetoothAdapterStateChange ? WX.offBluetoothAdapterStateChange(e) : null; },
        onBluetoothAdapterStateChange: function(e) { WX.onBluetoothAdapterStateChange ? WX.onBluetoothAdapterStateChange(e) : null; },
        offBLEConnectionStateChange: function(e) { WX.offBLEConnectionStateChange ? WX.offBLEConnectionStateChange(e) : null; },
        onBLEConnectionStateChange: function(e) { WX.onBLEConnectionStateChange ? WX.onBLEConnectionStateChange(e) : null; },
        openBluetoothAdapter: function(e) {
            e = e || {};
            if (WX.openBluetoothAdapter) return WX.openBluetoothAdapter(e);
            if (NativeBle.init) return NativeBle.init();
            var res = { errMsg: "openBluetoothAdapter:ok" };
            e.success && e.success(res);
            return Promise.resolve(res);
        },
        closeBluetoothAdapter: function(e) {
            e = e || {};
            if (WX.closeBluetoothAdapter) return WX.closeBluetoothAdapter(e);
            var res = { errMsg: "closeBluetoothAdapter:ok" };
            e.success && e.success(res);
            return Promise.resolve(res);
        },
        createBLEConnection: function(e) {
            e = e || {};
            if (WX.createBLEConnection) return WX.createBLEConnection(e);
            if (NativeBle.connect) return NativeBle.connect({ mac: e.deviceId });
            var res = { errMsg: "createBLEConnection:ok" };
            e.success && e.success(res);
            return Promise.resolve(res);
        },
        closeBLEConnection: function(e) {
            e = e || {};
            var devId = typeof e === 'string' ? e : (e ? e.deviceId : '');
            if (WX.closeBLEConnection) return WX.closeBLEConnection(e);
            if (NativeBle.disconnect) return NativeBle.disconnect(devId);
            var res = { errMsg: "closeBLEConnection:ok" };
            e.success && e.success(res);
            return Promise.resolve(res);
        },
        startBluetoothDevicesDiscovery: function(e) {
            e = e || {};
            if (WX.startBluetoothDevicesDiscovery) return WX.startBluetoothDevicesDiscovery(e);
            var res = { errMsg: "startBluetoothDevicesDiscovery:ok" };
            e.success && e.success(res);
            return Promise.resolve(res);
        },
        stopBluetoothDevicesDiscovery: function(e) {
            e = e || {};
            if (WX.stopBluetoothDevicesDiscovery) return WX.stopBluetoothDevicesDiscovery(e);
            var res = { errMsg: "stopBluetoothDevicesDiscovery:ok" };
            e.success && e.success(res);
            return Promise.resolve(res);
        },
        getBluetoothDevices: function(e) {
            e = e || {};
            if (WX.getBluetoothDevices) return WX.getBluetoothDevices(e);
            var res = { devices: [] };
            e.success && e.success(res);
            return Promise.resolve(res);
        },
        offBluetoothDeviceFound: function(e) { WX.offBluetoothDeviceFound ? WX.offBluetoothDeviceFound(e) : null; },
        onBluetoothDeviceFound: function(e) { WX.onBluetoothDeviceFound ? WX.onBluetoothDeviceFound(e) : null; },
        getBLEDeviceServices: function(e) {
            e = e || {};
            if (WX.getBLEDeviceServices) return WX.getBLEDeviceServices(e);
            if (NativeBle.getServices) return NativeBle.getServices(e.deviceId);
            var res = { services: [{ uuid: "0000FEE7-0000-1000-8000-00805F9B34FB" }] };
            e.success && e.success(res);
            return Promise.resolve(res);
        },
        getBLEDeviceCharacteristics: function(e) {
            e = e || {};
            if (WX.getBLEDeviceCharacteristics) return WX.getBLEDeviceCharacteristics(e);
            if (NativeBle.getCharacteristics) return NativeBle.getCharacteristics(e.deviceId, e.serviceId);
            var res = {
                characteristics: [
                    { uuid: "000036F5-0000-1000-8000-00805F9B34FB", properties: { notify: true } },
                    { uuid: "000036F6-0000-1000-8000-00805F9B34FB", properties: { write: true } }
                ]
            };
            e.success && e.success(res);
            return Promise.resolve(res);
        },
        notifyBLECharacteristicValueChange: function(e) {
            e = e || {};
            if (WX.notifyBLECharacteristicValueChange) return WX.notifyBLECharacteristicValueChange(e);
            if (NativeBle.startNotification) return NativeBle.startNotification(e);
            var res = { errMsg: "notifyBLECharacteristicValueChange:ok" };
            e.success && e.success(res);
            return Promise.resolve(res);
        },
        offBLECharacteristicValueChange: function(e) { WX.offBLECharacteristicValueChange ? WX.offBLECharacteristicValueChange(e) : null; },
        onBLECharacteristicValueChange: function(e) {
            if (WX.onBLECharacteristicValueChange) return WX.onBLECharacteristicValueChange(e);
            if (NativeBle.onDataReceived) {
                NativeBle.onDataReceived(function(data) {
                    e && e({ value: data.buffer || data });
                });
            }
        },
        writeBLECharacteristicValue: function(e) {
            e = e || {};
            if (WX.writeBLECharacteristicValue) return WX.writeBLECharacteristicValue(e);
            if (NativeBle.write) return NativeBle.write(e);
            var res = { errMsg: "writeBLECharacteristicValue:ok" };
            e.success && e.success(res);
            return Promise.resolve(res);
        },
        getConnectedBluetoothDevices: function(e) {
            e = e || {};
            if (WX.getConnectedBluetoothDevices) return WX.getConnectedBluetoothDevices(e);
            var res = { devices: [] };
            e.success && e.success(res);
            return Promise.resolve(res);
        },
        setStorageSync: function(e, t) {
            wx.setStorageSync(e, t)
        },
        getStorageSync: function(e) {
            return wx.getStorageSync(e)
        },
        setStorage: function(e) {
            return wx.setStorage(e)
        },
        removeStorage: function(e) {
            return wx.removeStorage(e)
        },
        removeStorageSync: function(e) {
            wx.removeStorageSync(e)
        },
        getSystemInfoSync: function() {
            return wx.getSystemInfoSync()
        },
        getLog: function() {
            return wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null
        },
        isDebug: function() {
            return !!wx.getAppBaseInfo && wx.getAppBaseInfo().enableDebug || "release" != wx.getAccountInfoSync().miniProgram.envVersion
        },
        navigateBack: function(e) {
            return wx.navigateBack(e)
        },
        switchTab: function(e) {
            return wx.switchTab(e)
        },
        getLocation: function(e) {
            return wx.getLocation(e)
        },
        openSetting: function(e) {
            return wx.openSetting(e)
        },
        getSetting: function(e) {
            return wx.getSetting(e)
        },
        authorize: function(e) {
            return wx.authorize(e)
        },
        showLoading: function(e) {
            return wx.showLoading(e)
        },
        hideLoading: function(e) {
            return wx.hideLoading(e)
        },
        showToast: function(e) {
            return wx.showToast(e)
        },
        showModal: function(e) {
            return wx.showModal(e)
        },
        request: function(e) {
            return wx.request(e)
        },
        getUpdateManager: function() {
            return wx.getUpdateManager()
        },
        buf2hex: function(e) {
            return Array.prototype.map.call(new Uint8Array(e), (function(e) {
                return ("00" + e.toString(16)).slice(-2)
            })).join("")
        },
        isSystemLBSDenied: function() {
            if ("authorized" != wx.getAppAuthorizeSetting().locationAuthorized) {
                return wx.hideLoading(), wx.showModal({
                    title: "未开启位置权限",
                    content: "蓝牙需要微信位置权限，请在权限管理允许“位置”或“定位”权限。",
                    showCancel: !1,
                    confirmText: "去开启",
                    complete: function(e) {
                        wx.openAppAuthorizeSetting()
                    }
                }), !0
            }
            if (!wx.getSystemSetting().locationEnabled) {
                return wx.hideLoading(), wx.showModal({
                    title: "未开启系统定位",
                    content: "蓝牙需要开启系统定位，请在手机控制面板打开“位置信息”或“定位服务”开关。",
                    showCancel: !1,
                    confirmText: "知道了"
                }), !0
            }
            return !1
        },
        isSystemBLEDenied: function() {
            if ("ios" == wx.getSystemInfoSync().platform.toLowerCase() && "denied" == wx.getAppAuthorizeSetting().bluetoothAuthorized) {
                return wx.hideLoading(), wx.showModal({
                    title: "未开启蓝牙权限",
                    content: "需要微信蓝牙权限，请在微信设置中允许“蓝牙”权限",
                    showCancel: !1,
                    confirmText: "去开启",
                    complete: function(e) {
                        wx.openAppAuthorizeSetting()
                    }
                }), !0
            }
            if (!wx.getSystemSetting().bluetoothEnabled) {
                return wx.hideLoading(), wx.showModal({
                    title: "未开启系统蓝牙",
                    content: "系统蓝牙已关闭，请在手机控制面板打开“蓝牙”开关。",
                    showCancel: !1,
                    confirmText: "知道了"
                }), !0
            }
            return !1
        },
        isAuthDenied: function(e) {
            return e.indexOf("auth deny") >= 0 || e.indexOf("auth denied") >= 0
        },
        isAuthDeniedKeepAsk: function(e) {
            return !1
        }
    };
});

define("C9B02F2594FC73BFAFD64722A696E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("@babel/runtime/helpers/typeof.js"),
        t = require("CE76404694FC73BFA81028419976E8C0.js"),
        n = t.log,
        r = t.isAndroid,
        o = t.delay,
        i = require("A6CC3C9394FC73BFC0AA54949A67E8C0.js").showModal,
        c = require("C2427CC194FC73BFA42414C6A277E8C0.js"),
        a = [];

    function u(e) {
        var t = e.deviceId,
            r = e.connected,
            o = a.indexOf(t);
        o < 0 ? r && a.push(t) : r || a.splice(o, 1), n("连接记录", a)
    }

    function s() {
        return c.closeBluetoothAdapter().then((function(e) {
            !1, n("关闭蓝牙 成功")
        })).catch((function(e) {
            return n("关闭蓝牙 失败", e), Promise.resolve(e)
        }))
    }

    function f(t) {
        try {
            t = JSON.parse(t)
        } catch (t) {}
        var r;
        if (n("错误信息", t), "object" == e(t)) try {
            switch (t.errCode) {
                case 1e4:
                    r = "未初始化";
                    break;
                case 10001:
                    r = "打开手机蓝牙，才能使用蓝牙设备！";
                    break;
                case 10002:
                    r = "找不到水表";
                    break;
                case 10003:
                    r = "连接失败";
                    break;
                case 10004:
                    r = "没有服务";
                    break;
                case 10005:
                    r = "没有找到指定特征值";
                    break;
                case 10006:
                    r = "连接断开";
                    break;
                case 10007:
                    r = "当前特征值不支持此操作";
                    break;
                case 10008:
                    r = "系统异常：" + t.errMsg;
                    break;
                case 10009:
                    r = "Android系统版本低于 4.3 不支持BLE";
                    break;
                case 10012:
                    r = "连接超时";
                    break;
                case 10013:
                    r = "连接 deviceId 为空或者是格式不正确";
                    break;
                default:
                    r = t.errMsg
            }
        } catch (e) {
            r = JSON.stringify(t)
        } else {
            if ("string" != typeof t) return "未知错误";
            r = t
        }
        return r
    }
    module.exports = {
        openBluetooth: function() {
            return c.offBluetoothAdapterStateChange(), c.onBluetoothAdapterStateChange((function(e) {
                n("蓝牙状态", e), e.available || (c.navigateBack({
                    delta: 2
                }), s())
            })), c.offBLEConnectionStateChange(), c.onBLEConnectionStateChange((function(e) {
                n("连接状态", e), u(e)
            })), new Promise((function(e, t) {
                if (!c.isSystemBLEDenied()) {
                    var a = setTimeout((function() {
                            t(["开启蓝牙超时", "请重启手机蓝牙或长按蓝色按钮"])
                        }), 15e3),
                        u = function(r, o) {
                            n("开启蓝牙 " + (r ? "成功" : "失败")), r, clearTimeout(a), r ? e(o) : t(["开启蓝牙失败", o])
                        };
                    c.openBluetoothAdapter({
                        success: function(e) {
                            n("开启蓝牙 成功", e), u(!0, e)
                        },
                        fail: function(e) {
                            n("开启蓝牙 失败", e);
                            var t = JSON.stringify(e);
                            c.isAuthDenied(t) ? (clearTimeout(a), i("未授权使用蓝牙", "你已经拒绝蓝牙授权，请点“去设置”去开启“蓝牙”授权。", "", "去设置", (function() {
                                c.openSetting()
                            }))) : r() && 3 == e.errno ? (clearTimeout(a), i("开启附近设备权限", "请在权限管理中允许“附近设备”权限，或关闭再开启一次。", "", "去开启", (function() {
                                wx.openAppAuthorizeSetting()
                            }))) : o(1).then((function() {
                                c.openBluetoothAdapter({
                                    success: function(e) {
                                        u(!0, e)
                                    },
                                    fail: function(e) {
                                        var t = e.errMsg.includes("already opened");
                                        u(!!t, f(e))
                                    }
                                })
                            }))
                        }
                    })
                }
            })).then((function(e) {
                return new Promise((function(e, t) {
                    r() && c.isSystemLBSDenied() || e()
                }))
            })).catch((function(e) {
                return Promise.reject(e)
            }))
        },
        closeBluetooth: s,
        isConnected: function(e) {
            return a.indexOf(e) >= 0
        },
        connectedDevices: function() {
            return c.getConnectedBluetoothDevices({
                services: ["2600", "FEE0", "FF12", "FFE0", "FE60", "8900"]
            }).then((function(e) {
                if ((t = e.devices) && t.length > 0) return Promise.resolve(t);
                var t = [];
                return a.forEach((function(e) {
                    return t.push({
                        deviceId: e
                    })
                })), Promise.resolve(t)
            }))
        },
        errMsg: f,
        connectedRecord: u
    };
});

define("CE76404694FC73BFA81028419976E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var n = require("C2427CC194FC73BFA42414C6A277E8C0.js"),
        e = n.getLog(),
        l = getApp(),
        o = n.isDebug(),
        r = null;
    module.exports = {
        info: function() {
            e && e.info.apply(e, arguments)
        },
        warn: function() {
            e && e.warn.apply(e, arguments)
        },
        error: function(n, r, t) {
            l || (l = getApp());
            var i = null != r.errormsg || null != r.Msg;
            o && (i ? console.warn(n, null != r ? r : "", null != t ? t : "") : console.error(n, null != r ? r : "", null != t ? t : "")), e && (e.addFilterMsg(l.phone), l.device.deviceName && (e.addFilterMsg(l.device.deviceName), e.addFilterMsg(l.device.factoryName)), e.addFilterMsg(n), i ? e.warn(n, null != r ? r : "", null != t ? t : "") : e.error(n, null != r ? r : "", null != t ? t : ""))
        },
        setFilterMsg: function(n) {
            e && e.setFilterMsg && "string" == typeof n && e.setFilterMsg(n)
        },
        addFilterMsg: function(n) {
            e && e.addFilterMsg && "string" == typeof n && e.addFilterMsg(n)
        },
        log: function(n, l, r) {
            o && ("发送数据" == n || "接收数据" == n ? console.info(n, null != l ? l : "", null != r ? r : "") : console.log(n, null != l ? l : "", null != r ? r : "")), e && e.info(n, null != l ? l : "", null != r ? r : "")
        },
        isAndroid: function() {
            if (null != r) return r;
            var e = n.getSystemInfoSync().platform.toLowerCase();
            return r = "android" == e || "devtools" == e
        },
        delay: function(n) {
            return new Promise((function(e) {
                setTimeout((function() {
                    e()
                }), 1e3 * n)
            }))
        },
        isLog: o
    };
});

define("F189637094FC73BF97EF0B777167E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("@babel/runtime/helpers/Arrayincludes.js");
    var e = require("CE76404694FC73BFA81028419976E8C0.js").log,
        r = ["该账户正在使用中"],
        t = ["设备正在忙", "授权失败"],
        n = ["如未有人使用，可以手动关闭：\n- 长按水表蓝色按钮5秒；\n- 待嘀一声结束后松开  ；\n- 如未成功请重复一次  。"];

    function i() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            s = arguments.length > 1 ? arguments[1] : void 0,
            u = arguments.length > 2 ? arguments[2] : void 0;
        if (o.length > 0) {
            var l = o.pop();
            return l(s).catch((function(u) {
                if (e("执行异常", u), r.includes(u)) return Promise.resolve(u);
                var l = t.indexOf(u);
                if (l >= 0) {
                    var c = n[l];
                    return c ? Promise.reject({
                        title: u,
                        msg: c
                    }) : Promise.reject(u)
                }
                return i(o, s, u)
            }))
        }
        return Promise.reject(u)
    }
    module.exports = {
        ProcessExecuter: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                r = arguments.length > 1 ? arguments[1] : void 0;
            return i(e.reverse(), r)
        }
    };
});

define("F66EF4C094FC73BF90089CC7F697E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("@babel/runtime/helpers/typeof.js"),
        r = require("C2427CC194FC73BFA42414C6A277E8C0.js"),
        t = require("961D3B4394FC73BFF07B53440C77E8C0.js").API_CO;

    function s(e) {
        return (e = e.toString())[1] ? e : "0" + e
    }
    module.exports = {
        formatTime: function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                t = e.getFullYear(),
                n = e.getMonth() + 1,
                o = e.getDate(),
                a = e.getHours(),
                i = e.getMinutes(),
                g = e.getSeconds();
            if (r) {
                for (var f = ["yy", "mm", "dd", "hh", "ii", "ss"], u = [t, n, o, a, i, g], l = 0; l < f.length; l++) r = r.replace(f[l], s(u[l]));
                return r
            }
            return [t, n, o].map(s).join("-") + " " + [a, i, g].map(s).join(":")
        },
        compareVersion: function(e) {
            var r = wx.getSystemInfoSync().SDKVersion;
            e = e.split(".");
            for (var t = r.split("."), s = Math.max(e.length, t.length); e.length < s;) e.push("0");
            for (; t.length < s;) t.push("0");
            for (var n = 0; n < s; n++) {
                var o = parseInt(e[n]),
                    a = parseInt(t[n]);
                if (o > a) return 1;
                if (o < a) return -1
            }
            return 0
        },
        fnJson: function(r, s) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "POST",
                o = new Promise((function(o, a) {
                    if ("string" != typeof r) a("fnJson参数url错误");
                    else if ("object" != e(s)) a("fnJson参数data错误");
                    else if ("POST" != n && "GET" != n) a("fnJson参数method错误");
                    else {
                        getApp() && r && wx.request({
                            url: t + r,
                            data: s,
                            method: n,
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            timeout: 3e4,
                            success: function(e) {
                                e.statusCode >= 200 && e.statusCode < 300 ? o(e.data) : a({
                                    data: e.data,
                                    error: "112512",
                                    errorMessage: "request fail：" + e.statusCode
                                })
                            },
                            fail: function(e) {
                                console.log("request fail"), console.log(e);
                                var r = e;
                                wx.getNetworkType({
                                    success: function(e) {
                                        if ("none" == e.networkType) a({
                                            error: "112511",
                                            errorMessage: "网络异常,请检查wifi或数据连接"
                                        });
                                        else {
                                            var t = {};
                                            r.errMsg.indexOf("30000ms") > -1 || r.errMsg.indexOf("fail timeout") > -1 || r.errMsg.indexOf("请求超时") > -1 ? (t.error = "112513", t.errorMessage = "网络不给力，请重试一下啦!") : r.errMsg.indexOf("request:fail") > -1 && (t.error = "112512", t.errorMessage = "网络出错,请稍后重新再试哦"), a(t)
                                        }
                                    }
                                })
                            }
                        })
                    }
                }));
            return o
        },
        showErrMsg: function(e) {
            return e && e.data && e.data.data && (e = e.data), (e && e.message && "string" == typeof e.message && e.message.length > 0 ? e.message : e && e.errormsg && "string" == typeof e.errormsg && e.errormsg.length > 0 ? e.errormsg : e && e.Message && "string" == typeof e.Message && e.Message.length > 0 ? e.Message : e && e.errorMessage && "string" == typeof e.errorMessage && e.errorMessage.length > 0 ? e.errorMessage : "string" == typeof e ? e : e && e.errMsg && "string" == typeof e.errMsg && e.errMsg.length > 0 ? e.errMsg : null == e || "function" == typeof e ? "未知错误" : JSON.stringify(e)).replace(/request:fail|。|！|!/gi, "")
        },
        getUrlParam: function(e, r) {
            if (!e || !r) return null;
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                s = r.indexOf("?") + 1,
                n = r.substr(s).match(t);
            return null != n ? unescape(n[2]) : null
        },
        checkPassword: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                s = "",
                n = "密码不少于8位，必须同时包含且仅包含英文字母、数字和特殊符号",
                o = /[!@#$%^&*()_+-=,.?]/;
            return e.length < 8 ? s = "密码少于8位" : /[a-zA-Z]/.test(e) ? /[\d]/.test(e) ? o.test(e) ? /[^a-zA-Z\d!@#$%^&*()_+-=,.?]/.test(e) && (s = "密码含有规则以外的字符。") : s = "密码缺少特殊字符" : s = "密码缺少数字" : s = "密码缺少字母", !s || (t && (s = "密码安全升级", n = "密码必须不少于8位，必须同时包含且仅包含英文字母、数字和特殊符号。请修改密码。"), r.showModal({
                title: s,
                content: n,
                showCancel: t,
                confirmText: "好的",
                success: function(e) {
                    e.confirm && t && wx.navigateTo({
                        url: "/pages/binding/forgetPwd/forgetPwd"
                    })
                }
            }), !1)
        }
    };
});


define("pages/index/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches,
  screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";

        Page({
            // 核心控制
            switchWater: function(isOpen, macNumber) {
                var targetMac = macNumber;

                // 强行指定设备参数
                var app = getApp();
                app.device = {
                    deviceId: targetMac,
                    deviceName: targetMac,
                    deviceMac: targetMac,
                    machineid: targetMac,
                    factoryName: "XT"
                };
                app.userId = app.userId || "0000000000000000";
                app.cardId = app.cardId || "00000000";

                // 执行开关水
                var switcher = require("3CFBD57594FC73BF5A9DBD72A447E8C0.js");
                var actionName = isOpen ? "开阀" : "关阀";
                var callback = function(success, resultData) {
                    if (success) {
                        alert(actionName + " 成功");
                    } else {
                        alert(actionName + " 失败: " + JSON.stringify(resultData));
                    }
                };
                switcher.switching(actionName, callback, "ble", false);
            }
        });
    });