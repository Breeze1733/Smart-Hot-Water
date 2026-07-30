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
define("118EC9A494FC73BF77E8A1A301D7E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    module.exports = {
        strDiscode: function(e) {
            return e = function(e) {
                return e = (e = (e = e.replace(/\r\n/g, "")).replace(/\n/g, "")).replace(/code/g, "wxxxcode-style")
            }(e = function(e) {
                return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&OElig;/g, "Œ")).replace(/&oelig;/g, "œ")).replace(/&Scaron;/g, "Š")).replace(/&scaron;/g, "š")).replace(/&Yuml;/g, "Ÿ")).replace(/&fnof;/g, "ƒ")).replace(/&circ;/g, "ˆ")).replace(/&tilde;/g, "˜")).replace(/&ensp;/g, "")).replace(/&emsp;/g, "")).replace(/&thinsp;/g, "")).replace(/&zwnj;/g, "")).replace(/&zwj;/g, "")).replace(/&lrm;/g, "")).replace(/&rlm;/g, "")).replace(/&ndash;/g, "–")).replace(/&mdash;/g, "—")).replace(/&lsquo;/g, "‘")).replace(/&rsquo;/g, "’")).replace(/&sbquo;/g, "‚")).replace(/&ldquo;/g, "“")).replace(/&rdquo;/g, "”")).replace(/&bdquo;/g, "„")).replace(/&dagger;/g, "†")).replace(/&Dagger;/g, "‡")).replace(/&bull;/g, "•")).replace(/&hellip;/g, "…")).replace(/&permil;/g, "‰")).replace(/&prime;/g, "′")).replace(/&Prime;/g, "″")).replace(/&lsaquo;/g, "‹")).replace(/&rsaquo;/g, "›")).replace(/&oline;/g, "‾")).replace(/&euro;/g, "€")).replace(/&trade;/g, "™")).replace(/&larr;/g, "←")).replace(/&uarr;/g, "↑")).replace(/&rarr;/g, "→")).replace(/&darr;/g, "↓")).replace(/&harr;/g, "↔")).replace(/&crarr;/g, "↵")).replace(/&lceil;/g, "⌈")).replace(/&rceil;/g, "⌉")).replace(/&lfloor;/g, "⌊")).replace(/&rfloor;/g, "⌋")).replace(/&loz;/g, "◊")).replace(/&spades;/g, "♠")).replace(/&clubs;/g, "♣")).replace(/&hearts;/g, "♥")).replace(/&diams;/g, "♦")).replace(/&#39;/g, "'")
            }(e = function(e) {
                return e = (e = (e = (e = (e = (e = e.replace(/&nbsp;/g, " ")).replace(/&quot;/g, "'")).replace(/&amp;/g, "&")).replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&#8226;/g, "•")
            }(e = function(e) {
                return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&Alpha;/g, "Α")).replace(/&Beta;/g, "Β")).replace(/&Gamma;/g, "Γ")).replace(/&Delta;/g, "Δ")).replace(/&Epsilon;/g, "Ε")).replace(/&Zeta;/g, "Ζ")).replace(/&Eta;/g, "Η")).replace(/&Theta;/g, "Θ")).replace(/&Iota;/g, "Ι")).replace(/&Kappa;/g, "Κ")).replace(/&Lambda;/g, "Λ")).replace(/&Mu;/g, "Μ")).replace(/&Nu;/g, "Ν")).replace(/&Xi;/g, "Ν")).replace(/&Omicron;/g, "Ο")).replace(/&Pi;/g, "Π")).replace(/&Rho;/g, "Ρ")).replace(/&Sigma;/g, "Σ")).replace(/&Tau;/g, "Τ")).replace(/&Upsilon;/g, "Υ")).replace(/&Phi;/g, "Φ")).replace(/&Chi;/g, "Χ")).replace(/&Psi;/g, "Ψ")).replace(/&Omega;/g, "Ω")).replace(/&alpha;/g, "α")).replace(/&beta;/g, "β")).replace(/&gamma;/g, "γ")).replace(/&delta;/g, "δ")).replace(/&epsilon;/g, "ε")).replace(/&zeta;/g, "ζ")).replace(/&eta;/g, "η")).replace(/&theta;/g, "θ")).replace(/&iota;/g, "ι")).replace(/&kappa;/g, "κ")).replace(/&lambda;/g, "λ")).replace(/&mu;/g, "μ")).replace(/&nu;/g, "ν")).replace(/&xi;/g, "ξ")).replace(/&omicron;/g, "ο")).replace(/&pi;/g, "π")).replace(/&rho;/g, "ρ")).replace(/&sigmaf;/g, "ς")).replace(/&sigma;/g, "σ")).replace(/&tau;/g, "τ")).replace(/&upsilon;/g, "υ")).replace(/&phi;/g, "φ")).replace(/&chi;/g, "χ")).replace(/&psi;/g, "ψ")).replace(/&omega;/g, "ω")).replace(/&thetasym;/g, "ϑ")).replace(/&upsih;/g, "ϒ")).replace(/&piv;/g, "ϖ")).replace(/&middot;/g, "·")
            }(e = function(e) {
                return e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&forall;/g, "∀")).replace(/&part;/g, "∂")).replace(/&exists;/g, "∃")).replace(/&empty;/g, "∅")).replace(/&nabla;/g, "∇")).replace(/&isin;/g, "∈")).replace(/&notin;/g, "∉")).replace(/&ni;/g, "∋")).replace(/&prod;/g, "∏")).replace(/&sum;/g, "∑")).replace(/&minus;/g, "−")).replace(/&lowast;/g, "∗")).replace(/&radic;/g, "√")).replace(/&prop;/g, "∝")).replace(/&infin;/g, "∞")).replace(/&ang;/g, "∠")).replace(/&and;/g, "∧")).replace(/&or;/g, "∨")).replace(/&cap;/g, "∩")).replace(/&cap;/g, "∪")).replace(/&int;/g, "∫")).replace(/&there4;/g, "∴")).replace(/&sim;/g, "∼")).replace(/&cong;/g, "≅")).replace(/&asymp;/g, "≈")).replace(/&ne;/g, "≠")).replace(/&le;/g, "≤")).replace(/&ge;/g, "≥")).replace(/&sub;/g, "⊂")).replace(/&sup;/g, "⊃")).replace(/&nsub;/g, "⊄")).replace(/&sube;/g, "⊆")).replace(/&supe;/g, "⊇")).replace(/&oplus;/g, "⊕")).replace(/&otimes;/g, "⊗")).replace(/&perp;/g, "⊥")).replace(/&sdot;/g, "⋅")
            }(e)))))
        },
        urlToHttpUrl: function(e, a) {
            return new RegExp("^//").test(e) && (e = a + ":" + e), e
        }
    };
});
define("1D8CB78294FC73BF7BEADF853227E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("@babel/runtime/helpers/typeof.js"),
        r = require("CE76404694FC73BFA81028419976E8C0.js").log,
        t = require("96F37EE694FC73BFF09516E13407E8C0.js").md5,
        a = require("F66EF4C094FC73BF90089CC7F697E8C0.js").formatTime,
        n = require("25B9627594FC73BF43DF0A720987E8C0.js"),
        s = n.getIsArrearage,
        c = n.ConsumeData,
        o = n.WhiteListFunc,
        i = require("C2427CC194FC73BFA42414C6A277E8C0.js"),
        d = require("101E33B294FC73BF76785BB557A6E8C0.js").MING_HAN,
        u = getApp(),
        l = "",
        g = {},
        m = "",
        p = "",
        f = [],
        b = 0,
        h = [],
        k = [],
        v = "",
        S = {
            url: " https://smarth5.gzuci.com/vi1",
            pri: "25",
            mca: "5000",
            npt: "3600",
            lim: "15000",
            fir: "300",
            tp: "2",
            ts: "1",
            pul: "2",
            pun: "1",
            sut: "3600",
            mode: "1",
            om: "1",
            warm: "5",
            wdt: "3600",
            lg: "0",
            ct: "3",
            psw: "88888888",
            comkey: "99999999",
            cp: "1",
            dlt: "0",
            dlv: "10000",
            ltp: "0",
            uct: "0",
            mlt: "3"
        },
        y = 1,
        C = function(e) {
            for (var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4, t = e.toString(); t.length < r;) t = "0" + t;
            return t
        };

    function I() {
        u || (u = getApp())
    }

    function w(r) {
        return "object" != e(r) ? "" : t(JSON.stringify(r).replace(/^\{(.+)\}$/, "$1") + "99999999").substr(0, 10).toUpperCase()
    }

    function D() {
        for (var e = [], r = 0; r < 14; r++) e[r] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
        return "02" + e.join("").toUpperCase()
    }

    function M(e) {
        if ("" === e) return "";
        for (var r = [], t = 0; t < e.length; t++) r.push(e.charCodeAt(t).toString(16));
        return r.join("").toUpperCase()
    }

    function N(e) {
        var r = parseInt(e.no.substr(0, 2), 16);
        17 == e.dt.length && (e.dt = "20" + e.dt);
        var t = Date.parse(new Date(e.dt.replace(/-/g, "/"))) + 1e3 * e.ts;
        return {
            ShutValveState: e.ct,
            MeterAddr: u.device.deviceMac,
            ConsumeId: e.no,
            ConsumeType: r,
            UserId: e.id,
            CardSn: e.cid || "",
            UseAmount: e.fl,
            Temperature: e.tp,
            StartTime: e.dt,
            EndTime: a(new Date(t))
        }
    }
    module.exports = {
        getData: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return v = "", I(), new Promise((function(n) {
                var s, c;
                if (["random", "info", "getdt", "login"].indexOf(e) >= 0) s = {
                    cmd: e
                }, "random" == e ? s.len = "8" : "login" == e && (s.usr = "admin", s.psw = l);
                else {
                    switch (e) {
                        case "gets":
                            s = {
                                cmd: e
                            };
                            break;
                        case "setdt":
                            var o = a(new Date);
                            o < u.userMsg.ServerTime && (o = u.userMsg.ServerTime), s = {
                                cmd: e,
                                data: o
                            };
                            break;
                        case "open":
                            m = D(), i.setStorageSync("ordno", m), s = {
                                cmd: e,
                                ordno: m,
                                value: "05000",
                                uid: u.userId.substr(7)
                            };
                            break;
                        case "close":
                            m = i.getStorageSync("ordno"), s = {
                                cmd: e,
                                ordno: m
                            };
                            break;
                        case "getd":
                            s = {
                                cmd: e,
                                type: "04",
                                no: "",
                                ordno: ""
                            };
                            break;
                        case "clrd":
                            s = {
                                cmd: e,
                                ordno: p
                            };
                            break;
                        case "geta":
                            s = {
                                cmd: e,
                                type: "02",
                                no: ""
                            };
                            break;
                        case "clra":
                            s = {
                                cmd: e,
                                no: ""
                            };
                            break;
                        case "addc":
                            var d = i.getStorageSync("cid");
                            s = {
                                cmd: e,
                                uid: u.userId.substr(7),
                                cid: d,
                                cs: "00"
                            };
                            break;
                        case "editc":
                            s = {
                                cmd: e,
                                uid: u.userId.substr(7),
                                cid: u.cardId,
                                cs: "00"
                            };
                            break;
                        case "delc":
                            s = {
                                cmd: e,
                                uid: t.cardId ? "" : u.userId.substr(7),
                                cid: t.cardId || u.cardId
                            };
                            break;
                        case "getp":
                        case "setp":
                            s = {
                                cmd: e,
                                para: S
                            };
                            break;
                        case "init":
                            s = {
                                cmd: e
                            };
                            break;
                        case "getui":
                            0 == (b = t.getuiIndex) && (f = []), s = {
                                cmd: e,
                                type: "00000002",
                                index: C(b, 3)
                            }
                    }
                    s.pid = C(y), s.token = g.token
                }
                s.mac = w(s), c = M(JSON.stringify(s)), r("生成报文", JSON.stringify(s)), n(c)
            }))
        },
        getDataBack: function(a) {
            if (!a) return !1;
            var n = function(e) {
                var r = (v += e).indexOf("7B");
                r > 0 && (v = v.substring(r));
                var t, a = v.trim(),
                    n = "0x" === a.substr(0, 2).toLowerCase() ? a.substr(2) : a,
                    s = n.length;
                if (s % 2 != 0) return "";
                for (var c = [], o = 0; o < s; o += 2) t = parseInt(n.substr(o, 2), 16), c.push(String.fromCharCode(t));
                return c.join("")
            }(a);
            if (/^\{.+\}$/.test(n)) {
                r("转成对象", n);
                try {
                    var s = function(e) {
                        if (e) {
                            var r = e.mac;
                            return delete e.mac, w(e) == r ? (e.status = !0, e.errormsg = "校验成功") : (e.status = !1, e.errormsg = "校验失败：" + e.resp), e.mac = r, e
                        }
                        return !1
                    }(JSON.parse(n));
                    switch (s.pid && (y = 1 * s.pid + 1), s.resp) {
                        case "random":
                            l = t("admin88888888" + s.random).substr(0, 10).toUpperCase();
                            break;
                        case "info":
                        case "getdt":
                            break;
                        case "login":
                            g = {
                                token: s.token,
                                time: Date.parse(new Date)
                            }, i.setStorageSync("MHtoken", g);
                            break;
                        case "gets":
                            1 == s.rs && (s.id = function(e) {
                                if (8 == e.length) return e;
                                var t = parseInt(e, 10).toString(16);
                                if (r("原始账号", e), "NaN" != t) {
                                    var a = 8 - t.length;
                                    if (a > 0)
                                        for (var n = 0; n < a; n++) t = "0" + t;
                                    var s = "";
                                    for (n = 0; n < t.length; n += 2) {
                                        var c = t.substr(n, 2);
                                        s = c + s
                                    }
                                    return r("真实账号", s), s
                                }
                                return e
                            }(s.id), u.userId.substr(7) == s.id && (m = s.no));
                            break;
                        case "getd":
                            s.data && (p = s.data.no, h.push(N(s.data)));
                            break;
                        case "setdt":
                            break;
                        case "open":
                        case "close":
                            s.data && (p = s.data.no);
                            break;
                        case "geta":
                            break;
                        case "getp":
                            s.para && "https://smarth5.gzuci.com/vi1" != (S = s.para).url && (S.url = "https://smarth5.gzuci.com/vi1");
                            break;
                        case "setp":
                        case "init":
                            break;
                        case "getui":
                            void 0 !== s.index && "object" == e(s.user) && "00000000" != s.user.cid && f.push({
                                UserId: s.user.uid,
                                CardSn: s.user.cid
                            }), b >= 19 && void 0 === s.cardid && (b = 0, o(u.factory || d, f))
                    }
                    return v = "", s
                } catch (e) {
                    return !1
                }
            }
            return !1
        },
        errorCode: function(e) {
            var r = "";
            switch (e) {
                case "01":
                    r = "加密数据错误";
                    break;
                case "02":
                    r = "参数错误";
                    break;
                case "03":
                    r = "执行指令出错";
                    break;
                case "04":
                    r = "token 无效";
                    break;
                case "05":
                    r = "pid 无效";
                    break;
                case "06":
                    r = "没有此用户卡信息";
                    break;
                case "07":
                    r = "没有有效的消费数据";
                    break;
                case "08":
                    r = "没有有效的报警数据";
                    break;
                case "09":
                    r = "订单号错";
                    break;
                case "10":
                    r = "水表忙（在用水）";
                    break;
                case "11":
                    r = "水表记录已满";
                    break;
                case "97":
                    r = "固件跟主板不对应";
                    break;
                case "98":
                    r = "JSON数据格不对";
                    break;
                case "99":
                    r = "执行命令错误"
            }
            return r
        },
        setCollectData: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            1 == e ? i.setStorage({
                key: "installerCollectData",
                data: h
            }) : h = []
        },
        installerConsumeData: function e(r) {
            var t = i.getStorageSync("installerCollectData");
            t && t.length ? (I(), k = [], u.showLoading("上传订单"), function e(r, t, a) {
                u.showLoading("上传订单" + (r.length - t));
                var n = r[t];
                c(u.factory || d, n).then((function(e) {
                    return Promise.reject(e)
                })).catch((function(n) {
                    (null == n.Result || n.Result <= 0) && k.push(r[t]), r.length - 1 > t ? e(r, ++t, a) : a(!0)
                }))
            }(t, 0, (function(a) {
                if (!0 === a)
                    if (k.length) {
                        i.setStorageSync("installerCollectData", k);
                        var n = "上传订单 " + t.length + " 条，其中上传成功 " + (t.length - k.length) + " 条，上传失败 " + k.length + " 条";
                        u.showModal("上传结束", n, "取消", "再次上传").then((function(t) {
                            t ? e(r) : r("有订单上传失败")
                        }))
                    } else i.removeStorage({
                        key: "installerCollectData"
                    }), r && r(a)
            }))) : r(!0)
        },
        consumeData: function(e, r) {
            I();
            var t = N(e);
            c(u.factory || d, t).then((function(e) {
                1 == e.Result && r ? u.installerWork || u.userId.substr(-8) != t.UserId ? r(!0) : s((function() {
                    r(!0)
                })) : r && r(!1)
            })).catch((function(e) {
                r && r(!1)
            }))
        }
    };
});
define("24B5604294FC73BF42D308457C37E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var r = require("@babel/runtime/helpers/createForOfIteratorHelper.js"),
        e = require("F66EF4C094FC73BF90089CC7F697E8C0.js").formatTime,
        s = require("564C179694FC73BF302A7F9142E6E8C0.js").CRC,
        t = require("CE76404694FC73BFA81028419976E8C0.js"),
        a = t.log,
        u = (t.error, require("961D3B4394FC73BFF07B53440C77E8C0.js").API_XT, require("25B9627594FC73BF43DF0A720987E8C0.js")),
        n = u.WhiteListFunc,
        b = u.GetKey,
        d = require("101E33B294FC73BF76785BB557A6E8C0.js").XIN_TIAN,
        c = getApp(),
        i = "",
        o = "",
        k = {
            encryptionNonce: "",
            encryptionFactor: "",
            key1APP: "",
            key2APP: "",
            key3APP: "",
            key3Meter: ""
        },
        f = "",
        A = 1,
        I = [],
        p = "",
        y = "";

    function g(r) {
        f = r.cardId
    }

    function v() {
        c || (c = getApp())
    }

    function l(r) {
        for (var e = "", s = r.length - 2; s >= 0; s -= 2) e += r.substr(s, 2);
        return e
    }

    function S(r) {
        return {
            MeterAddr: i,
            ConsumeId: parseInt(l(r.substr(0, 8)), 16),
            ConsumeType: "AA" == r.substr(8, 2) ? 0 : 1,
            UserId: r.substr(10, 8),
            CardSn: "00000000" != r.substr(18, 8) ? l(r.substr(18, 8)) : "",
            UseAmount: parseInt(l(r.substr(26, 4)), 16),
            Temperature: parseInt(l(r.substr(30, 2)), 16),
            StartTime: h(r.substr(32, 12)),
            EndTime: h(r.substr(44, 12)),
            AlarmList: m(r.substr(56, 2), 2)
        }
    }

    function h(r) {
        return (14 == r.length ? r.substr(0, 2) : "20") + (r = 14 == r.length ? r.substr(2) : r).substr(0, 2) + "-" + r.substr(2, 2) + "-" + r.substr(4, 2) + " " + r.substr(6, 2) + ":" + r.substr(8, 2) + ":" + r.substr(10, 2)
    }

    function m(r, e) {
        var s = C(r);
        if (1 == e) {
            var t = "";
            return 1 == s[3] && (t += "key值异常"), 1 == s[5] && (t += "水表处于绑卡模式中，请等待退出绑卡模式，然后重新操作"), 1 == s[6] && (t += "请长按蓝色按钮后重新操作"), 1 == s[7] && (t += "有卡在使用！"), t || "未知错误"
        }
        s[4], s[5], s[6], s[7];
        return [parseInt(s[4]), parseInt(s[5]), parseInt(s[6])]
    }

    function C(r) {
        r || (r = 0);
        for (var e = parseInt(r, 16).toString(2); e.length < 8;) e = "0" + e;
        return e
    }
    module.exports = {
        myDataSet: g,
        getData: function(r) {
            return y = "", v(), new Promise((function(t, u) {
                var n = l(i),
                    b = r,
                    d = "0000",
                    o = "68A9",
                    I = l(f),
                    y = k.key1APP,
                    g = k.key3APP,
                    v = c.userId.substr(7);
                switch (b) {
                    case "1001":
                        i && t(!0), o += (n = "00000000000000") + b + d;
                        break;
                    case "100F":
                    case "1007":
                    case "1005":
                        o += n + b + d;
                        break;
                    case "100B":
                        o += n + b + (d = "0700") + "0" + A + g;
                        break;
                    case "1004":
                        o += n + b + d;
                        break;
                    case "2004":
                        o += n + b + (d = "0600") + e(new Date).replace(/[-:\s]/g, "").substr(2);
                        break;
                    case "2005":
                        o += n + b + (d = "0A00") + y + v;
                        break;
                    case "2006":
                        o += n + b + (d = "1200") + e(new Date).replace(/[-:\s]/g, "").substr(2) + k.encryptionNonce + k.encryptionFactor;
                        break;
                    case "200A":
                    case "1008":
                        o += n + b + d;
                        break;
                    case "200B":
                    case "200C":
                        o += n + b + (d = "0E00") + v + I + y;
                        break;
                    case "100A":
                        o += n + b + d;
                        break;
                    case "2009":
                        o += n + b + (d = "8600") + p + y;
                        break;
                    case "1009":
                        o += n + b + d;
                        break;
                    case "2008":
                        o += n + b + d + ""
                }
                var S = s.ToModbusCRC16(o, !0);
                a(r + "命令", o += S + "16"), t(o)
            }))
        },
        getDataBack: function(r, e) {
            return v(), new Promise((function(s, t) {
                var a = {
                    rawData: e,
                    T: e.substr(2, 2),
                    bAddr: l(e.substr(4, 14)),
                    C: e.substr(18, 4),
                    L: e.substr(22, 4)
                };
                c.device.bAddr = a.bAddr;
                var u = !0,
                    p = "",
                    v = r;
                switch (r) {
                    case "1001":
                        i = a.bAddr;
                        break;
                    case "100F":
                        a.version = o, a.CCID = e.substr(26, 20), a.IMEI = e.substr(46, 15), a.IMSI = e.substr(61, 15);
                        break;
                    case "1007":
                        o = l(e.substr(26, 4));
                        break;
                    case "1005":
                        a.studentid = e.substr(26, 8), a.consumeType = e.substr(34, 2), "00000000" == a.studentid ? (p = "可开阀", v += "1") : "AA" == a.consumeType ? t({
                            status: u = !1,
                            errMsg: p = "有卡在消费，请取走卡后重新操作",
                            data: a,
                            code: v
                        }) : a.studentid == c.userId.substr(7) ? (p = "可关阀", v += "2") : t({
                            status: u = !1,
                            errMsg: p = "请长按蓝色按钮后重新操作",
                            data: a,
                            code: v
                        });
                        break;
                    case "100B":
                        if (A++, i = a.bAddr, a.idx = e.substr(26, 2), a.orderNum = parseInt(e.substr(28, 2), 16), a.key3Meter = e.substr(30 + 58 * a.orderNum, 12), a.orderArr = [], a.key3Meter != k.key3Meter && (u = !1, p = "key值异常"), "00" == a.idx && (A = 1), a.orderNum)
                            for (var h = 0; h < a.orderNum; h++) {
                                var M = e.substr(30 + 58 * h, 58);
                                a.orderArr[h] = S(M)
                            }
                        break;
                    case "1004":
                        return A = 1, a.key = k, void b(d, e).then((function(r) {
                            a.key = k = r, s({
                                status: u,
                                errMsg: p,
                                data: a,
                                code: v
                            })
                        }));
                    case "2005":
                        a.UserId = l(e.substr(26, 8)), a.status = e.substr(34, 2), "00" == a.status ? p = "开阀成功" : (u = !1, p = m(a.status, 1));
                        break;
                    case "2006":
                        a.key2Metter = e.substr(26, 12), a.orderArr = [S(e.substr(38, 58))], a.key2Metter != k.key2APP && (u = !1, p = "key值异常");
                        break;
                    case "200A":
                        a.bindStatus = e.substr(26, 2);
                        var P = C(a.bindStatus);
                        1 == P[4] ? p = "已进入绑卡模式" : "00" != a.bindStatus && (u = !1, p = ["", "已绑定满16个用户"][P[7]] + ["", "有卡消费用户正在使用"][P[6]] + ["", "有蓝牙消费用户正在使用"][P[5]], t({
                            status: u,
                            errMsg: p,
                            data: a,
                            code: v
                        }));
                        break;
                    case "1008":
                        a.cardNum = f = l(e.substr(26, 8));
                        break;
                    case "200B":
                        if (a.cardNum = f, a.bindStatus = e.substr(26, 2), "00" != a.bindStatus) {
                            var N = C(a.bindStatus);
                            u = !1, p = "已绑定满16个用户", 1 == N[3] && (p = "key值异常")
                        }
                        break;
                    case "200C":
                        if (a.unBindStatus = e.substr(26, 2), "00" != a.unBindStatus) {
                            var U = C(a.unBindStatus);
                            1 == U[7] && (p = "你有未上传的消费记录"), 1 == U[3] && (p = "key值异常")
                        }
                        p && (u = !1);
                        break;
                    case "100A":
                        I = [], a.whiteList = [], a.cardNum = f, v = "100A1";
                        for (var T = 0; T < 16; T++) {
                            var w = e.substr(26 + 16 * T, 16),
                                L = {
                                    UserId: w.substr(0, 8),
                                    CardSn: l(w.substr(8, 8))
                                };
                            a.whiteList.push(L), L.UserId == c.userId.substr(7) && L.CardSn == f && (v = "100A2"), "00000000" != L.CardSn && I.push(L)
                        }
                        a.whiteList2 = I;
                        break;
                    case "2009":
                        a.cardNum = f, n(d, I, i).then((function(r) {
                            var e = c.page("userCenter");
                            c.checkLogin((function() {
                                e && e.setData({
                                    cardId: c.cardId,
                                    cardSt: c.cardSt
                                }), g(c)
                            }))
                        }));
                        break;
                    case "1009":
                        e.substr(18, 2), e.substr(20, 4), e.substr(24, 2), e.substr(26, 2)
                }
                s({
                    status: u,
                    errMsg: p,
                    data: a,
                    code: v
                }), y = ""
            }))
        },
        setWiteList: function(e, s) {
            v(), p = "";
            var t = {
                UserId: c.userId.substr(7),
                CardSn: f
            };
            if (e) {
                for (var a = 0; a < I.length; a++)
                    if (t.UserId == I[a].UserId && t.CardSn == I[a].CardSn) {
                        I.splice(a, 1);
                        break
                    }
            } else {
                for (var u = !1, n = 0; n < I.length; n++)
                    if (t.UserId == I[n].UserId && t.CardSn == I[n].CardSn) {
                        u = !0;
                        break
                    }
                u || I.unshift(t)
            }
            I.length > 16 && I.pop();
            var b = 16 - I.length;
            if (b > 0)
                for (var d = 0; d < b; d++) p += "0000000000000000";
            var i, o = r(I);
            try {
                for (o.s(); !(i = o.n()).done;) {
                    var k = i.value;
                    p += k.UserId + l(k.CardSn)
                }
            } catch (r) {
                o.e(r)
            } finally {
                o.f()
            }
            s && s()
        },
        dealNotify: function(r) {
            if (/^68A9[0-9A-F]+16$/.test(y += r) && 2 * parseInt(y.substr(24, 2) + y.substr(22, 2), 16) + 32 <= y.length) return y
        }
    };
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
                    return P(e, B, "开阀", U)
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
        return (N.IsInstallationWork ? b(B, U).then((function(e) {
            return function(e) {
                return !e || U.is4G ? Promise.resolve() : H("07", e).then((function() {
                    p.setStorageSync(e.key, !0)
                }))
            }(e)
        })) : Promise.resolve()).then((function(e) {
            return K()
        })).then((function(e) {
            return q(e, U)
        })).catch((function(e) {
            return Promise.resolve(e)
        }))
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
                        function(e) {
                            return "关阀" == e ? Promise.resolve() : (f() ? Promise.resolve() : K()).then((function() {
                                return t(f())
                            }))
                        }(n).then((function(e) {
                            return S(d, n)
                        })).then((function(e) {
                            (c(!0, e), "nb" != a) && x(k["关阀" == n ? "Myself" : "Others"]).then((function() {
                                return E()
                            })).then((function() {
                                m()
                            }))
                        })).catch((function(t) {
                            "授权失败" != t || h ? c(!1, t) : x(k.Others).then((function() {
                                return x(k.Myself)
                            })).then((function() {
                                e(n, c, a, !0)
                            }))
                        }));
                    break;
                case "采集":
                    x(k.Others).then((function() {
                        return x(k.Myself)
                    })).then((function() {
                        return E()
                    })).then((function(e) {
                        c(!0, e)
                    }));
                    break;
                case "绑定":
                    K().then((function(e) {
                        c({
                            status: !0,
                            data: e
                        })
                    })).catch((function(e) {
                        c(!1, e)
                    }));
                    break;
                case "绑卡":
                    if (U.is4G) r(U).then((function(e) {
                        return u(c, 0, U)
                    })).catch((function(e) {
                        return c(!1, e)
                    }));
                    else(h ? Promise.resolve() : p.showModal({
                        title: "请放置卡",
                        content: "请把卡片放在感应区，待水表嘀嘀两声后，点击下一步",
                        cancelText: "取消",
                        confirmText: "下一步"
                    }).then((function(e) {
                        return e.confirm ? Promise.resolve() : (p.hideLoading(), Promise.reject())
                    }))).then((function(e) {
                        return l(3)
                    })).then((function(e) {
                        return M()
                    })).then((function(e) {
                        return r(U, e.data.cardid)
                    })).then((function(e) {
                        return c(!0, e)
                    })).catch((function(e) {
                        return c(!1, e)
                    }));
                    break;
                case "解绑":
                    U.is4G ? i((function() {
                        o(U).then((function(e) {
                            return c(!0, e)
                        })).catch((function(e) {
                            return c(!1, e)
                        }))
                    }), 0, U) : o(U).then((function(e) {
                        return c(!0, e)
                    })).catch((function(e) {
                        return c(!1, e)
                    }))
            }
        }
    };
});
define("564C179694FC73BF302A7F9142E6E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var r = {
        CRC16: function(r) {
            var t = r.length;
            if (t > 0) {
                for (var n = 65535, e = 0; e < t; e++) {
                    n ^= r[e];
                    for (var o = 0; o < 8; o++) n = 0 != (1 & n) ? n >> 1 ^ 40961 : n >> 1
                }
                return [(65280 & n) >> 8, 255 & n]
            }
            return [0, 0]
        },
        isArray: function(r) {
            return "[object Array]" === Object.prototype.toString.call(r)
        },
        ToCRC16: function(t, n) {
            return r.toString(r.CRC16(r.isArray(t) ? t : r.strToByte(t)), n)
        },
        ToModbusCRC16: function(t, n) {
            return r.toString(r.CRC16(r.isArray(t) ? t : r.strToHex(t)), n)
        },
        strToByte: function(r) {
            for (var t = r.split(""), n = [], e = 0, o = t.length; e < o; e++) {
                var i = encodeURI(t[e]);
                if (1 == i.length) n.push(i.charCodeAt());
                else
                    for (var s = i.split("%"), u = 1; u < s.length; u++) n.push(parseInt("0x" + s[u]))
            }
            return n
        },
        convertChinese: function(r) {
            for (var t = r.split(""), n = [], e = 0, o = t.length; e < o; e++) {
                var i = t[e].charCodeAt();
                i <= 0 || i >= 127 ? n.push(i.toString(16)) : n.push(t[e])
            }
            return n
        },
        filterChinese: function(r) {
            for (var t = r.split(""), n = [], e = 0, o = t.length; e < o; e++) {
                var i = t[e].charCodeAt();
                i > 0 && i < 127 && n.push(t[e])
            }
            return n
        },
        strToHex: function(t, n) {
            t = (t = n ? r.filterChinese(t).join("") : r.convertChinese(t).join("")).replace(/\s/g, "");
            for (var e = (t += t.length % 2 != 0 ? "0" : "").length / 2, o = [], i = 0; i < e; i++) o.push(parseInt(t.substr(2 * i, 2), 16));
            return o
        },
        padLeft: function(r, t, n) {
            null == n && (n = "0");
            for (var e = 0, o = t - r.length; e < o; e++) r = n + r;
            return r
        },
        toString: function(t, n) {
            void 0 === n && (n = !0);
            var e = t[0],
                o = t[1];
            return r.padLeft((n ? e + 256 * o : 256 * e + o).toString(16).toUpperCase(), 4, "0")
        }
    };
    module.exports = {
        CRC: r
    };
});
define("634DE34294FC73BF052B8B45C2F6E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var r = [
            [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
            [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
            [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
            [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13]
        ],
        t = [
            [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
            [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
            [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
            [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9]
        ],
        n = [
            [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],
            [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
            [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
            [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12]
        ],
        e = [
            [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
            [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
            [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
            [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14]
        ],
        a = [
            [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
            [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
            [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
            [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3]
        ],
        u = [
            [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
            [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
            [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
            [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13]
        ],
        s = [
            [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
            [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
            [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],
            [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12]
        ],
        o = [
            [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],
            [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
            [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
            [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11]
        ],
        c = [58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46, 38, 30, 22, 14, 6, 64, 56, 48, 40, 32, 24, 16, 8, 57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39, 31, 23, 15, 7],
        f = [40, 8, 48, 16, 56, 24, 64, 32, 39, 7, 47, 15, 55, 23, 63, 31, 38, 6, 46, 14, 54, 22, 62, 30, 37, 5, 45, 13, 53, 21, 61, 29, 36, 4, 44, 12, 52, 20, 60, 28, 35, 3, 43, 11, 51, 19, 59, 27, 34, 2, 42, 10, 50, 18, 58, 26, 33, 1, 41, 9, 49, 17, 57, 25],
        i = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1],
        l = v(16, 48);

    function v(r, t) {
        if ("number" == typeof r && "number" == typeof t) {
            for (var n = new Array(r), e = 0; e < r; e++) n[e] = new Array(t);
            return n
        }
        throw new Error("creatArray's parameters can only be numbers")
    }

    function g(r, t, n) {
        if (16 != r.length || 16 != t.length) throw new Error("The length of the source or key is not 16");
        return 0 == n ? p(r, t) : 1 == n ? h(r, t) : null
    }

    function h(r, t) {
        var n = "",
            e = _(r);
        e = C(e);
        for (var a = [], u = [], s = [], o = 0; o < 32; o++) a[o] = e[o], u[o] = e[o + 32];
        E(t);
        for (var c = 16; c > 0; c--) {
            s = a, a = u, u = O(s, b(u, l[c - 1]))
        }
        for (var f = 0; f < 32; f++) e[f] = u[f], e[32 + f] = a[f];
        e = y(e);
        for (var i = 0; i < e.length; i++) n += e[i];
        return n = d(n)
    }

    function p(r, t) {
        var n = [],
            e = _(r);
        e = C(e);
        for (var a = v(17, 32), u = v(17, 32), s = 0; s < 32; s++) a[0][s] = e[s], u[0][s] = e[s + 32];
        E(t);
        for (var o = 1; o < 17; o++) {
            var c = l[o - 1];
            a[o] = u[o - 1];
            var f = b(u[o - 1], c);
            u[o] = O(a[o - 1], f)
        }
        for (var i = 0; i < 32; i++) n[i] = u[16][i], n[32 + i] = a[16][i];
        return d(k(n = y(n)))
    }

    function b(c, f) {
        return function(c) {
            for (var f = v(8, 6), i = [r, t, n, e, a, u, s, o], l = "", g = 0; g < 8; g++)
                for (var h = 0; h < 6; h++) f[g][h] = c[6 * g + h];
            for (var p = 0; p < 8; p++) {
                var b = 2 * f[p][0] + f[p][5],
                    y = 8 * f[p][1] + 4 * f[p][2] + 2 * f[p][3] + f[p][4],
                    E = w(i[p][b][y]);
                l += E
            }
            return function(r) {
                for (var t = [], n = [16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5, 18, 31, 10, 2, 8, 24, 14, 32, 27, 3, 9, 19, 13, 30, 6, 22, 11, 4, 25], e = r.length, a = 0; a < e; a++) t[a] = r[n[a] - 1];
                return t
            }(_(l.toString()))
        }(O(function(r) {
            for (var t = [], n = [32, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8, 9, 10, 11, 12, 13, 12, 13, 14, 15, 16, 17, 16, 17, 18, 19, 20, 21, 20, 21, 22, 23, 24, 25, 24, 25, 26, 27, 28, 29, 28, 29, 30, 31, 32, 1], e = 0; e < 48; e++) t[e] = r[n[e] - 1];
            return t
        }(c), f))
    }

    function w(r) {
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

    function y(r) {
        for (var t = [], n = 0; n < 64; n++) t[n] = r[f[n] - 1];
        return t
    }

    function E(r) {
        l.length > 0 && (l = v(16, 48));
        var t = [],
            n = [],
            e = [];
        e = function(r) {
            for (var t = [], n = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4], e = 0; e < 56; e++) t[e] = r[n[e] - 1];
            return t
        }(_(r));
        for (var a = 0; a < 28; a++) t[a] = e[a], n[a] = e[a + 28];
        for (var u = 0; u < 16; u++) {
            t = A(t, i[u]), n = A(n, i[u]);
            for (var s = 0; s < 28; s++) e[s] = t[s], e[s + 28] = n[s];
            l[u] = S(e)
        }
    }

    function S(r) {
        for (var t = [], n = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32], e = 0; e < 48; e++) t[e] = r[n[e] - 1];
        return t
    }

    function A(r, t) {
        for (var n = 0, e = r.length, a = i[t], u = 0; u < a; u++) {
            n = r[0];
            for (var s = 0; s < e - 1; s++) r[s] = r[s + 1];
            r[e - 1] = n
        }
        return r
    }

    function C(r) {
        for (var t = [], n = 0; n < 64; n++) t[n] = r[c[n] - 1];
        return t
    }

    function D(r) {
        for (var t = "", n = 0; n < str.length; n++) t += str.charCodeAt(n).toString(16);
        return t
    }

    function d(r) {
        var t = "",
            n = r.length;
        if (n % 4 != 0)
            for (; 0 < 4 - n % 4;) r = "0" + r;
        for (var e = 0; e < n / 4; e++) t += m(r.substring(4 * e, 4 * e + 4));
        return t
    }

    function m(r) {
        var t = r.length,
            n = 0,
            e = 0;
        if (t > 4) return null;
        for (var a = t; a > 0; a--) n += parseInt(r.substring(a - 1, a)) * B(2, e), e++;
        switch (n) {
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
                return "" + n;
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

    function B(r, t) {
        var n = r;
        0 == t && (r = 1);
        for (var e = 2; e <= t; e++) r *= n;
        return r
    }

    function _(r) {
        for (var t = r.length, n = [], e = r.split(""), a = 0; a < t; a++) {
            var u = null;
            u = F(e[a]);
            for (var s = 4 * a + 3, o = 3; o >= 0; o--) n[s] = parseInt(u[o].valueOf()), s--
        }
        return n
    }

    function F(r) {
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

    function O(r, t) {
        for (var n = r.length, e = [], a = 0; a < n; a++) e[a] = r[a] ^ t[a];
        return e
    }

    function k(r) {
        try {
            for (var t = "", n = 0; n < r.length; n++) t += r[n];
            return t.toString()
        } catch (r) {
            return null
        }
    }
    module.exports = {
        DES_1: g,
        PBOC_3DES_discryption: function(r, t, n) {
            if (32 != t.length) return null;
            1 == n && (r = D(r));
            var e = r.length,
                a = e % 16 == 0 ? e / 16 : e / 16 + 1,
                u = [];
            if (e % 16 == 0) r += "8000000000000000";
            else {
                r += "80";
                for (var s = 0; s < 15 - e % 16; s++) r += "00"
            }
            for (var o = 0; o < a; o++) u[o] = r.substring(16 * o, 16 * o + 16);
            for (var c = "", f = null, i = t.substring(0, t.length / 2), l = t.substring(t.length / 2), v = 0; v < a; v++) f = h(u[v], i), c += f = h(f = p(f, l), i);
            return c.toString()
        },
        PBOC_3DES: function(r, t, n) {
            if (32 != t.length) throw new Error("The length of the key is not 32");
            1 == n && (r = D(r));
            var e = r.length,
                a = e % 16 == 0 ? e / 16 : e / 16 + 1,
                u = [];
            if (e % 16 == 0) r += "8000000000000000";
            else {
                r += "80";
                for (var s = 0; s < 15 - e % 16; s++) r += "00"
            }
            for (var o = 0; o < a; o++) u[o] = r.substring(16 * o, 16 * o + 16);
            for (var c = "", f = null, i = t.substring(0, t.length / 2), l = t.substring(t.length / 2), v = 0; v < a; v++) f = p(u[v], i), c += f = p(f = h(f, l), i);
            return c.toString()
        }
    };
});
define("88ED228294FC73BFEE8B4A85F6F7E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("@babel/runtime/helpers/typeof.js"),
        r = require("CE76404694FC73BFA81028419976E8C0.js").log,
        t = require("96F37EE694FC73BFF09516E13407E8C0.js").md5,
        a = require("F66EF4C094FC73BF90089CC7F697E8C0.js").formatTime,
        n = require("25B9627594FC73BF43DF0A720987E8C0.js"),
        s = n.getIsArrearage,
        c = n.ConsumeData,
        i = n.WhiteListFunc,
        o = require("C2427CC194FC73BFA42414C6A277E8C0.js"),
        u = require("101E33B294FC73BF76785BB557A6E8C0.js").KANG_ZHI_YUAN,
        d = getApp(),
        l = "",
        g = {},
        m = "",
        p = "",
        f = [],
        b = 0,
        k = [],
        h = [],
        v = "",
        S = {
            url: " https://smarth5.gzuci.com/vi1",
            pri: "25",
            mca: "5000",
            npt: "3600",
            lim: "15000",
            fir: "300",
            tp: "2",
            ts: "1",
            pul: "2",
            pun: "1",
            sut: "3600",
            mode: "1",
            om: "1",
            warm: "5",
            wdt: "3600",
            lg: "0",
            ct: "3",
            psw: "iH7kM4cZ0r",
            comkey: "12345678",
            cp: "1",
            dlt: "0",
            dlv: "10000",
            ltp: "0",
            uct: "0",
            mlt: "3"
        },
        y = 1,
        C = function(e) {
            for (var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4, t = e.toString(); t.length < r;) t = "0" + t;
            return t
        };

    function I() {
        d || (d = getApp())
    }

    function w(r) {
        return "object" != e(r) ? "" : t(JSON.stringify(r).replace(/^\{(.+)\}$/, "$1") + "12345678").substr(0, 10).toUpperCase()
    }

    function D() {
        for (var e = [], r = 0; r < 14; r++) e[r] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
        return "02" + e.join("").toUpperCase()
    }

    function M(e) {
        if ("" === e) return "";
        for (var r = [], t = 0; t < e.length; t++) r.push(e.charCodeAt(t).toString(16));
        return r.join("").toUpperCase()
    }

    function U(e) {
        var r = parseInt(e.no.substr(0, 2), 16),
            t = 1e3 * e.dt,
            n = 1e3 * (e.dt + e.ts);
        return {
            ShutValveState: e.ct || "",
            MeterAddr: d.device.deviceMac,
            ConsumeId: e.no,
            ConsumeType: r,
            UserId: e.id,
            CardSn: e.cid || "",
            UseAmount: e.fl,
            Temperature: e.tp,
            StartTime: a(new Date(t)),
            EndTime: a(new Date(n))
        }
    }
    module.exports = {
        getData: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return v = "", I(), new Promise((function(n) {
                var s, c;
                if (["random", "info", "getdt", "login"].indexOf(e) >= 0) s = {
                    cmd: e
                }, "random" == e ? s.len = "8" : "login" == e && (s.usr = "admin", s.psw = l);
                else {
                    switch (e) {
                        case "gets":
                            s = {
                                cmd: e
                            };
                            break;
                        case "setdt":
                            var i = a(new Date);
                            i < d.userMsg.ServerTime && (i = d.userMsg.ServerTime), s = {
                                cmd: e,
                                data: new Date(i).getTime() / 1e3
                            };
                            break;
                        case "open":
                            m = D(), o.setStorageSync("ordno", m), s = {
                                cmd: e,
                                ordno: m,
                                value: "05000",
                                uid: d.userId.substr(7)
                            };
                            break;
                        case "close":
                            m = o.getStorageSync("ordno"), s = {
                                cmd: e,
                                ordno: m
                            };
                            break;
                        case "getd":
                            s = {
                                cmd: e,
                                type: "04",
                                no: "",
                                ordno: ""
                            };
                            break;
                        case "clrd":
                            s = {
                                cmd: e,
                                ordno: p
                            };
                            break;
                        case "geta":
                            s = {
                                cmd: e,
                                type: "02",
                                no: ""
                            };
                            break;
                        case "clra":
                            s = {
                                cmd: e,
                                no: ""
                            };
                            break;
                        case "addc":
                            var u = o.getStorageSync("cid");
                            s = {
                                cmd: e,
                                uid: d.userId.substr(7),
                                cid: u,
                                cs: "00"
                            };
                            break;
                        case "editc":
                            s = {
                                cmd: e,
                                uid: d.userId.substr(7),
                                cid: d.cardId,
                                cs: "00"
                            };
                            break;
                        case "delc":
                            s = {
                                cmd: e,
                                uid: t.cardId ? "" : d.userId.substr(7),
                                cid: t.cardId || d.cardId
                            };
                            break;
                        case "getp":
                        case "setp":
                            s = {
                                cmd: e,
                                para: S
                            };
                            break;
                        case "init":
                            s = {
                                cmd: e
                            };
                            break;
                        case "getui":
                            0 == (b = t.getuiIndex) && (f = []), s = {
                                cmd: e,
                                type: "00000002",
                                index: C(b, 3)
                            }
                    }
                    s.pid = C(y), s.token = g.token
                }
                s.mac = w(s), c = M(JSON.stringify(s)), r("生成报文", JSON.stringify(s)), n(c)
            }))
        },
        getDataBack: function(a) {
            if (!a) return !1;
            var n = function(e) {
                var r = (v += e).indexOf("7B");
                r > 0 && (v = v.substring(r));
                var t, a = v.trim(),
                    n = "0x" === a.substr(0, 2).toLowerCase() ? a.substr(2) : a,
                    s = n.length;
                if (s % 2 != 0) return "";
                for (var c = [], i = 0; i < s; i += 2) t = parseInt(n.substr(i, 2), 16), c.push(String.fromCharCode(t));
                return c.join("")
            }(a);
            if (/^\{.+\}$/.test(n)) {
                r("转成对象", n);
                try {
                    var s = function(e) {
                        if (e) {
                            var r = e.mac;
                            return delete e.mac, w(e) == r ? (e.status = !0, e.errormsg = "校验成功") : (e.status = !1, e.errormsg = "校验失败：" + e.resp), e.mac = r, e
                        }
                        return !1
                    }(JSON.parse(n));
                    switch (s.pid && (y = 1 * s.pid + 1), s.resp) {
                        case "random":
                            l = t("adminiH7kM4cZ0r" + s.random).substr(0, 10).toUpperCase();
                            break;
                        case "info":
                        case "getdt":
                            break;
                        case "login":
                            g = {
                                token: s.token,
                                time: Date.parse(new Date)
                            }, o.setStorageSync("MHtoken", g);
                            break;
                        case "gets":
                            1 == s.rs && (s.id = function(e) {
                                if (8 == e.length) return e;
                                var t = parseInt(e, 10).toString(16);
                                if (r("原始账号", e), "NaN" != t) {
                                    var a = 8 - t.length;
                                    if (a > 0)
                                        for (var n = 0; n < a; n++) t = "0" + t;
                                    var s = "";
                                    for (n = 0; n < t.length; n += 2) {
                                        var c = t.substr(n, 2);
                                        s = c + s
                                    }
                                    return r("真实账号", s), s
                                }
                                return e
                            }(s.id), d.userId.substr(7) == s.id && (m = s.no));
                            break;
                        case "getd":
                            s.data && s.data.no && (p = s.data.no, k.push(U(s.data)));
                            break;
                        case "setdt":
                            break;
                        case "open":
                        case "close":
                            s.data && (p = s.data.no);
                            break;
                        case "geta":
                            break;
                        case "getp":
                            s.para && "https://smarth5.gzuci.com/vi1" != (S = s.para).url && (S.url = "https://smarth5.gzuci.com/vi1");
                            break;
                        case "setp":
                        case "init":
                            break;
                        case "getui":
                            void 0 !== s.index && "object" == e(s.user) && "00000000" != s.user.cid && f.push({
                                UserId: s.user.uid,
                                CardSn: s.user.cid
                            }), b >= 19 && void 0 === s.cardid && (b = 0, i(d.factory || u, f))
                    }
                    return v = "", s
                } catch (e) {
                    return !1
                }
            }
            return !1
        },
        errorCode: function(e) {
            var r = "";
            switch (e) {
                case 1:
                    r = "加密数据错误";
                    break;
                case 2:
                    r = "参数错误";
                    break;
                case 3:
                    r = "执行指令出错";
                    break;
                case 4:
                    r = "token 无效";
                    break;
                case 5:
                    r = "pid 无效";
                    break;
                case 6:
                    r = "没有此用户卡信息";
                    break;
                case 7:
                    r = "没有有效的消费数据";
                    break;
                case 8:
                    r = "没有有效的报警数据";
                    break;
                case 9:
                    r = "订单号错";
                    break;
                case 10:
                    r = "水表忙（在用水）";
                    break;
                case 11:
                    r = "水表记录已满";
                    break;
                case 97:
                    r = "固件跟主板不对应";
                    break;
                case 98:
                    r = "JSON数据格不对";
                    break;
                case 99:
                    r = "执行命令错误"
            }
            return r
        },
        setCollectData: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            1 == e ? o.setStorage({
                key: "installerCollectData",
                data: k
            }) : k = []
        },
        installerConsumeData: function e(r) {
            var t = o.getStorageSync("installerCollectData");
            t && t.length ? (I(), h = [], d.showLoading("上传订单"), function e(r, t, a) {
                d.showLoading("上传订单" + (r.length - t));
                var n = r[t];
                c(d.factory || u, n).then((function(e) {
                    return Promise.reject(e)
                })).catch((function(n) {
                    (null == n.Result || n.Result <= 0) && h.push(r[t]), r.length - 1 > t ? e(r, ++t, a) : a(!0)
                }))
            }(t, 0, (function(a) {
                if (!0 === a)
                    if (h.length) {
                        o.setStorageSync("installerCollectData", h);
                        var n = "上传订单 " + t.length + " 条，其中上传成功 " + (t.length - h.length) + " 条，上传失败 " + h.length + " 条";
                        d.showModal("上传结束", n, "取消", "再次上传").then((function(t) {
                            t ? e(r) : r("有订单上传失败")
                        }))
                    } else o.removeStorage({
                        key: "installerCollectData"
                    }), r && r(a)
            }))) : r(!0)
        },
        consumeData: function(e, r) {
            I();
            var t = U(e);
            c(d.factory || u, t).then((function(e) {
                1 == e.Result && r ? d.installerWork || d.userId.substr(-8) != t.UserId ? r(!0) : s((function() {
                    r(!0)
                })) : r && r(!1)
            })).catch((function() {
                r && r(!1)
            }))
        }
    };
});
define("92ACE77294FC73BFF4CA8F75C8D6E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("@babel/runtime/helpers/Arrayincludes.js");
    var e = require("EE53C0D194FC73BF8835A8D6D8C6E8C0.js"),
        n = e.getData,
        t = e.getBackData,
        r = e.CMD,
        c = e.makeData,
        u = require("CE76404694FC73BFA81028419976E8C0.js"),
        i = u.log,
        o = u.delay,
        a = require("27F6CAB394FC73BF4190A2B46A86E8C0.js").query,
        s = require("C9B02F2594FC73BFAFD64722A696E8C0.js").isConnected,
        f = require("F66EF4C094FC73BF90089CC7F697E8C0.js").formatTime,
        h = require("A6CC3C9394FC73BFC0AA54949A67E8C0.js"),
        d = h.showModal,
        l = h.showLoading,
        v = (h.hideLoading, require("25B9627594FC73BF43DF0A720987E8C0.js")),
        m = v.ConsumeData,
        g = v.GetDeviceEnable,
        I = v.BindUserCardRequest,
        D = v.UnBindUserCardRequest,
        A = v.NBSwitchProcess,
        b = v.AlarmInfo,
        p = require("101E33B294FC73BF76785BB557A6E8C0.js"),
        E = p.BEI_DIAN,
        R = p.getDevice,
        B = p.getDeviceId,
        C = require("AB02EE3794FC73BFCD6486300866E8C0.js"),
        P = C.getUserId,
        _ = C.getCardId,
        q = require("C2427CC194FC73BFA42414C6A277E8C0.js"),
        L = getApp();

    function O(e, n, t, c) {
        if (L || (L = getApp()), q.setStorageSync("nbOpen", 0), l(e + "中...", "index"), "nb" != t) switch (e) {
            case "开阀":
                var u = !1;
                g(R().deviceMac).then((function(n) {
                    return N(e)
                })).then((function(c) {
                    return function e(n, t, c) {
                        i("开启设备");
                        var u = f(new Date).replace(/[-:\s]/g, "").substr(2);
                        return V(r.OPEN_VALUE, {
                            action: n,
                            openTime: u
                        }).then((function(e) {
                            return q.setStorageSync("GlobalOpenTime", u), Promise.resolve(e)
                        })).catch((function(r) {
                            return "71" == r.code || "01" == r.code ? w(n, t, c).then((function() {
                                return e(n, t, c)
                            })) : "8A" == r.code ? y(n, {
                                blueBillIdList: ["01"]
                            }, "00").then((function() {
                                return e(n, t, c)
                            })) : Promise.reject(r)
                        }))
                    }(e, n, t)
                })).then((function(t) {
                    return u = !0, n(!0, t), U(e)
                })).then((function(n) {
                    return y(e, n)
                })).then((function(e) {
                    return i("采集成功", e)
                })).catch((function(t) {
                    u ? i("采集失败", t) : (i("开阀失败", t), t && !t.code && c ? M(e, n) : n(!1, t))
                }));
                break;
            case "关阀":
                var a = !1;
                N(e).then((function(r) {
                    return w(e, n, t)
                })).then((function(e) {
                    return a = !0, n(!0, e), o(1)
                })).then((function(n) {
                    return U(e)
                })).then((function(n) {
                    return y(e, n)
                })).then((function(e) {
                    return i("采集成功", e)
                })).catch((function(t) {
                    a ? i("采集失败", t) : (i("关阀失败", t), t && !t.code && c ? M(e, n) : n(!1, t))
                }));
                break;
            case "绑卡":
                Promise.resolve("开始绑卡").then((function(n) {
                    return N(e)
                })).then((function(n) {
                    return j(e)
                })).then((function(n) {
                    return G(e, n)
                })).then((function(n) {
                    return function(e, n) {
                        return i("读取卡号"), V(r.READ_CARD_NO, {
                            action: e
                        })
                    }(e)
                })).then((function(n) {
                    return function(e, n) {
                        var t = n.rfId;
                        return i("绑定卡片 " + "rfId=".concat(t, " user=").concat(P()), n), n.action = e, V(r.BIND_CARD, n).then((function() {
                            return I(E, t)
                        }))
                    }(e, n)
                })).then((function(e) {
                    return n(!0, e)
                })).catch((function(e) {
                    i("绑卡失败", e), n(!1, e)
                }));
                break;
            case "解绑":
                N(e).then((function(n) {
                    return j(e)
                })).then((function(n) {
                    return G(e, n)
                })).then((function(e) {
                    return n(!0, e)
                })).catch((function(e) {
                    return n(!1, e)
                }));
                break;
            case "绑定":
                var s = R().deviceName;
                n({
                    status: !0,
                    data: {
                        IMEI: s.replace("BD", ""),
                        version: "1.0.0"
                    }
                });
                break;
            case "采集":
                N(e).then((function(n) {
                    return U(e)
                })).then((function(n) {
                    return y(e, n)
                })).then((function(e) {
                    return n(!0, e)
                })).catch((function(e) {
                    return n(!1, e)
                }))
        } else M(e, n)
    }

    function M(e, n) {
        A("开阀" == e ? "Open" : "Close", E).then((function(e) {
            n(!0)
        })).catch((function(e) {
            return n(!1, e)
        }))
    }

    function N(e) {
        var n = B(),
            t = s(n);
        return i("发送配对 ", t), t ? Promise.resolve("已经配对") : V(r.PAIR_DEVICE, {
            action: e
        }).then((function(e) {
            return Promise.resolve("成功配对")
        })).catch((function(e) {
            return "返回超时" == e.title ? Promise.resolve(e) : Promise.reject(e)
        }))
    }

    function U(e) {
        return i("读取账列"), V(r.READ_ORDER_TABLE, {
            action: e
        })
    }

    function y(e, n, t) {
        var r = "11" == t ? [] : n.blueBillIdList,
            c = "00" == t ? [] : n.cardBillList;
        return S(e, r, "00").then((function(n) {
            return S(e, c, "11")
        }))
    }

    function S(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            t = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == n.length) return Promise.resolve("读取结束 " + t);
        var c = n.shift();
        return i("读取账单", "billId=".concat(c, " type=").concat(t)), V(r.READ_ORDER_DETAIL, {
            action: e,
            billId: c,
            type: t
        }).then((function(r) {
            return T(e, r).then((function(n) {
                return k(e, r)
            })).then((function(r) {
                return S(e, n, t)
            }))
        })).catch((function(r) {
            return S(e, n, t)
        }))
    }

    function T(e, n) {
        return i("上传账单"), m(E, c(n, R().deviceMac))
    }

    function k(e, n) {
        return i("确认账单"), n.action = e, V(r.CONFIRM_ORDER, n)
    }

    function w(e, n, t) {
        i("关闭设备");
        var c = q.getStorageSync("GlobalOpenTime");
        return V(r.CLOSE_VALUE, {
            action: e,
            openTime: c
        }).catch((function(r) {
            return "75" == r.code || "82" == r.code ? (function(e, n, t) {
                d("水表正在使用", "可以手动关闭：\n- 长按水表红色按钮5秒；\n- 待嘀第二声结束后松开 ；\n- 如未成功请重复一次  。", "取消", "重试", (function() {
                    O(e, n, t)
                }))
            }(e, n, t), Promise.reject()) : Promise.reject(r)
        }))
    }

    function j(e) {
        return i("读取卡列"), V(r.READ_CARD_TABLE, {
            action: e
        })
    }

    function G(e, n) {
        i("进入解绑", "来自" + e);
        var t, c, u, o = n.userIdList;
        if (o.includes(P()) ? (t = P(), u = "绑卡存在") : "绑卡" == e && o.length >= 10 && (t = o.sort()[0], u = "绑卡超额"), t) c = n[t];
        else {
            if ("绑卡" == e) return i("没有绑卡"), Promise.resolve("没有绑卡");
            t = P(), c = _(), u = "没有绑卡"
        }
        return i("开始解绑 " + u, "u=".concat(t, " c=").concat(c)), U(e).then((function(n) {
            return y(e, n)
        })).then((function(n) {
            return "没有绑卡" == u ? Promise.resolve() : V(r.UNBIND_CARD, {
                action: e,
                userId: t
            })
        })).then((function(e) {
            return D(E, {
                userId: t,
                cardId: c
            })
        }))
    }

    function V(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise((function(c, u) {
            r.userId || (r.userId = P()), r.deviceId = R().deviceMac.replace("BD", "");
            var o = n(e, r);
            if ("200" != o.code || "" == o.command) return u(o);
            a(R(), o.command, (function(n, r, o) {
                if ("读取成功" == n) {
                    var a = t(e, r);
                    a && (o && o(), i("解析结果", a), "200" == a.code ? c(a) : (u(a), "72" != a.code && "73" != a.code || b(E, "72" == a.code ? 2 : 3)))
                } else {
                    var s = {
                        title: n,
                        msg: r
                    };
                    i("读取失败", s), u(s)
                }
            }))
        }))
    }
    module.exports = {
        switching: O
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
define("@babel/runtime/helpers/arrayLikeToArray.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = new Array(a); e < a; e++) n[e] = r[e];
        return n
    }
    module.exports = _arrayLikeToArray;
});
define("@babel/runtime/helpers/arrayWithHoles.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _arrayWithHoles(r) {
        if (Array.isArray(r)) return r
    }
    module.exports = _arrayWithHoles;
});
define("@babel/runtime/helpers/createForOfIteratorHelper.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var unsupportedIterableToArray = require("./unsupportedIterableToArray");

    function _createForOfIteratorHelper(r, e) {
        var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (!t) {
            if (Array.isArray(r) || (t = unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
                t && (r = t);
                var n = 0,
                    o = function() {};
                return {
                    s: o,
                    n: function() {
                        return n >= r.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: r[n++]
                        }
                    },
                    e: function(r) {
                        throw r
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, u = !0,
            i = !1;
        return {
            s: function() {
                t = t.call(r)
            },
            n: function() {
                var r = t.next();
                return u = r.done, r
            },
            e: function(r) {
                i = !0, a = r
            },
            f: function() {
                try {
                    u || null == t.return || t.return()
                } finally {
                    if (i) throw a
                }
            }
        }
    }
    module.exports = _createForOfIteratorHelper;
});
define("@babel/runtime/helpers/defineProperty.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var toPropertyKey = require("./toPropertyKey");

    function _defineProperty(e, r, t) {
        return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e
    }
    module.exports = _defineProperty;
});
define("@babel/runtime/helpers/iterableToArrayLimit.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _iterableToArrayLimit(r, e) {
        var l = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != l) {
            var t, n, i, a, u = [],
                o = !0,
                f = !1;
            try {
                if (i = (l = l.call(r)).next, 0 === e) {
                    if (Object(l) !== l) return;
                    o = !1
                } else
                    for (; !(o = (t = i.call(l)).done) && (u.push(t.value), u.length !== e); o = !0);
            } catch (r) {
                f = !0, n = r
            } finally {
                try {
                    if (!o && null != l.return && (a = l.return(), Object(a) !== a)) return
                } finally {
                    if (f) throw n
                }
            }
            return u
        }
    }
    module.exports = _iterableToArrayLimit;
});
define("@babel/runtime/helpers/nonIterableRest.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    module.exports = _nonIterableRest;
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
define("@babel/runtime/helpers/slicedToArray.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var arrayWithHoles = require("./arrayWithHoles"),
        iterableToArrayLimit = require("./iterableToArrayLimit"),
        unsupportedIterableToArray = require("./unsupportedIterableToArray"),
        nonIterableRest = require("./nonIterableRest");

    function _slicedToArray(r, e) {
        return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest()
    }
    module.exports = _slicedToArray;
});
define("@babel/runtime/helpers/toPrimitive.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var _typeof = require("./typeof");

    function _toPrimitive(r, t) {
        if ("object" !== _typeof(r) || null === r) return r;
        var e = r[Symbol.toPrimitive];
        if (void 0 !== e) {
            var i = e.call(r, t || "default");
            if ("object" !== _typeof(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(r)
    }
    module.exports = _toPrimitive;
});
define("@babel/runtime/helpers/toPropertyKey.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var _typeof = require("./typeof"),
        toPrimitive = require("./toPrimitive");

    function _toPropertyKey(r) {
        var t = toPrimitive(r, "string");
        return "symbol" === _typeof(t) ? t : String(t)
    }
    module.exports = _toPropertyKey;
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
define("@babel/runtime/helpers/unsupportedIterableToArray.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var arrayLikeToArray = require("./arrayLikeToArray");

    function _unsupportedIterableToArray(r, e) {
        if (r) {
            if ("string" == typeof r) return arrayLikeToArray(r, e);
            var t = Object.prototype.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, e) : void 0
        }
    }
    module.exports = _unsupportedIterableToArray;
});
define("A1AF383294FC73BFC7C9503571B7E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
        t = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
        r = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
        s = c("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),
        a = c("a,address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),
        n = c("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),
        i = c("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),
        o = c("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),
        l = c("wxxxcode-style,script,style,view,scroll-view,block");

    function c(e) {
        for (var t = {}, r = e.split(","), s = 0; s < r.length; s++) t[r[s]] = !0;
        return t
    }
    module.exports = function(c, d) {
        var f, p, u, h = [],
            b = c;
        for (h.last = function() {
                return this[this.length - 1]
            }; c;) {
            if (p = !0, h.last() && l[h.last()]) c = c.replace(new RegExp("([\\s\\S]*?)</" + h.last() + "[^>]*>"), (function(e, t) {
                return t = t.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2"), d.chars && d.chars(t), ""
            })), v("", h.last());
            else if (0 == c.indexOf("\x3c!--") ? (f = c.indexOf("--\x3e")) >= 0 && (d.comment && d.comment(c.substring(4, f)), c = c.substring(f + 3), p = !1) : 0 == c.indexOf("</") ? (u = c.match(t)) && (c = c.substring(u[0].length), u[0].replace(t, v), p = !1) : 0 == c.indexOf("<") && (u = c.match(e)) && (c = c.substring(u[0].length), u[0].replace(e, g), p = !1), p) {
                f = c.indexOf("<");
                for (var m = ""; 0 === f;) m += "<", f = (c = c.substring(1)).indexOf("<");
                m += f < 0 ? c : c.substring(0, f), c = f < 0 ? "" : c.substring(f), d.chars && d.chars(m)
            }
            if (c == b) throw "Parse Error: " + c;
            b = c
        }

        function g(e, t, l, c) {
            if (t = t.toLowerCase(), a[t])
                for (; h.last() && n[h.last()];) v("", h.last());
            if (i[t] && h.last() == t && v("", t), (c = s[t] || !!c) || h.push(t), d.start) {
                var f = [];
                l.replace(r, (function(e, t) {
                    var r = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : o[t] ? t : "";
                    f.push({
                        name: t,
                        value: r,
                        escaped: r.replace(/(^|[^\\])"/g, '$1\\"')
                    })
                })), d.start && d.start(t, f, c)
            }
        }

        function v(e, t) {
            if (t) {
                t = t.toLowerCase();
                for (r = h.length - 1; r >= 0 && h[r] != t; r--);
            } else var r = 0;
            if (r >= 0) {
                for (var s = h.length - 1; s >= r; s--) d.end && d.end(h[s]);
                h.length = r
            }
        }
        v()
    };
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
define("B55E1E0294FC73BFD3387605FBD7E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("@babel/runtime/helpers/defineProperty.js"),
        t = require("@babel/runtime/helpers/createForOfIteratorHelper.js"),
        a = r(require("E138E92794FC73BF875E8120E2C7E8C0.js")),
        i = r(require("E563EC1494FC73BF8305841355A7E8C0.js"));

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var n = 0,
        d = 0;

    function o(e) {
        var t = e.target.dataset.src,
            a = e.target.dataset.from;
        void 0 !== a && a.length > 0 && wx.previewImage({
            current: t,
            urls: this.data[a].imageUrls
        })
    }

    function s(a) {
        var i = a.target.dataset.from,
            r = a.target.dataset.idx;
        void 0 !== i && i.length > 0 && function(a, i, r, o) {
            var s, l = r.data[o];
            if (!l || 0 == l.images.length) return;
            var g, h = l.images,
                m = function(e, t, a, i) {
                    var r, o = 0,
                        s = 0,
                        l = {},
                        g = a.data[i].view.imagePadding;
                    d, e > (r = n - 2 * g) ? (s = (o = r) * t / e, l.imageWidth = o, l.imageheight = s) : (l.imageWidth = e, l.imageheight = t);
                    return l
                }(a.detail.width, a.detail.height, r, o),
                v = h[i].index,
                u = "".concat(o),
                f = t(v.split("."));
            try {
                for (f.s(); !(g = f.n()).done;) {
                    var c = g.value;
                    u += ".nodes[".concat(c, "]")
                }
            } catch (e) {
                f.e(e)
            } finally {
                f.f()
            }
            var w = u + ".width",
                x = u + ".height";
            r.setData((e(s = {}, w, m.imageWidth), e(s, x, m.imageheight), s))
        }(a, r, this, i)
    }
    wx.getSystemInfo({
        success: function(e) {
            n = e.windowWidth, d = e.windowHeight
        }
    }), module.exports = {
        wxParse: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wxParseData",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html",
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '<div class="color:red;">数据不能为空</div>',
                n = arguments.length > 3 ? arguments[3] : void 0,
                d = arguments.length > 4 ? arguments[4] : void 0,
                l = n,
                g = {};
            if ("html" == t) g = i.default.html2json(r, e);
            else if ("md" == t || "markdown" == t) {
                var h = new a.default.Converter,
                    m = h.makeHtml(r);
                g = i.default.html2json(m, e), console.log(JSON.stringify(g, " ", " "))
            }
            g.view = {}, g.view.imagePadding = 0, void 0 !== d && (g.view.imagePadding = d);
            var v = {};
            v[e] = g, l.setData(v), l.wxParseImgLoad = s, l.wxParseImgTap = o
        },
        wxParseTemArray: function(e, t, a, i) {
            for (var r = [], n = i.data, d = null, o = 0; o < a; o++) {
                var s = n[t + o].nodes;
                r.push(s)
            }
            e = e || "wxParseTemArray", (d = JSON.parse('{"' + e + '":""}'))[e] = r, i.setData(d)
        },
        emojisInit: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/",
                a = arguments.length > 2 ? arguments[2] : void 0;
            i.default.emojisInit(e, t, a)
        }
    };
});
define("BFB0FA4194FC73BFD9D6924695E7E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t, n = require("@babel/runtime/helpers/typeof.js"),
        e = require("88ED228294FC73BFEE8B4A85F6F7E8C0.js"),
        c = require("A6CC3C9394FC73BFC0AA54949A67E8C0.js"),
        i = c.showLoading,
        o = c.hideLoading,
        r = c.showModal,
        u = require("CE76404694FC73BFA81028419976E8C0.js"),
        a = u.log,
        f = (u.delay, require("27F6CAB394FC73BF4190A2B46A86E8C0.js")),
        s = f.query,
        h = f.disconnect,
        d = require("25B9627594FC73BF43DF0A720987E8C0.js"),
        l = (d.GetDeviceEnable, d.NBOpenProcess),
        g = (d.AlarmInfo, d.BindUserCardRequest),
        v = d.UnBindUserCardRequest,
        p = require("101E33B294FC73BF76785BB557A6E8C0.js").KANG_ZHI_YUAN,
        b = require("C2427CC194FC73BFA42414C6A277E8C0.js"),
        m = null,
        q = getApp();

    function C() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return a("获取授权 random login ", t), k("random", t).then((function(n) {
            return k("login", t)
        }))
    }

    function k(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return M(t, n).catch((function(e) {
            return !e || "错误98" != e.title && "错误1" != e.title ? Promise.reject(e) : M(t, n)
        }))
    }

    function M(t) {
        var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise((function(i, o) {
            e.getData(t, c).then((function(c) {
                if (!0 !== c) {
                    for (var r = !1, u = [], a = c.toUpperCase(); a.length > 80;) {
                        var f = a.slice(0, 80);
                        a = a.substr(80), u.push(f)
                    }
                    u.push(a), s(q.device, u, (function(c, u, a) {
                        if ("读取成功" == c) {
                            r = !0;
                            var f = e.getDataBack(u);
                            if ("object" == n(f))
                                if (a && a(), [0, 6, 7, 8].indexOf(f.code) >= 0) i(f);
                                else {
                                    if ("getui" == t) return void o();
                                    o({
                                        title: "错误" + f.code,
                                        errMsg: e.errorCode(f.code),
                                        code: f.code
                                    })
                                }
                        } else if (r && "返回超时" == c) o({
                            title: c,
                            errMsg: u
                        });
                        else {
                            if ("getui" == t) return void o();
                            "OK" == c.toUpperCase ? o({
                                title: "连接失败",
                                errMsg: "未能找到要连接的设备",
                                toNB: !0
                            }) : o({
                                title: c,
                                errMsg: u,
                                toNB: !0
                            })
                        }
                    }))
                } else i()
            }))
        }))
    }

    function w(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        k("getd").then((function(i) {
            i.data && i.data.no ? c ? k("clrd").then((function(e) {
                w(t, ++n, c)
            })).catch((function(n) {
                t(!1, n)
            })) : e.consumeData(i.data, (function(e) {
                e ? k("clrd").then((function(e) {
                    w(t, ++n, c)
                })).catch((function(n) {
                    t(!1, n)
                })) : t(!1, e)
            })) : t(!0, i)
        })).catch((function(n) {
            t(!1, n)
        }))
    }
    module.exports = {
        switching: function(n, c, u, f) {
            switch (q || (q = getApp()), t = q.factory || p, i(n + "中...", "index"), m = c, n) {
                case "开阀":
                    if ("nb" == u) return void l(t).then((function(t) {
                        b.setStorageSync("nbOpen", 1), m(!0)
                    })).catch((function(t) {
                        return m(!1, t)
                    }));
                    C({
                        action: n
                    }).then((function(t) {
                        return a("运行状态 gets"), k("gets", {
                            action: n
                        })
                    })).then((function(t) {
                        if (1 == t.rs) {
                            if (q.userId.substr(7) == t.id) return t;
                            throw {
                                errMsg: "水表正在使用，请长按水表上的按钮三秒关阀，然后重新操作"
                            }
                        }
                        return a("设置时间 setdt"), k("setdt", {
                            action: n
                        }).then((function(t) {
                            return a("开启水阀 open"), k("open", {
                                action: n
                            })
                        }))
                    })).then((function(t) {
                        m(!0, t), t.data && t.data.no && e.consumeData(t.data, (function(t) {
                            t && k("clrd").then((function(t) {
                                w((function(t, n) {}))
                            }))
                        }))
                    })).catch((function(n) {
                        a("开阀失败", n), n.toNB ? l(t, n).then((function(t) {
                            b.setStorageSync("nbOpen", 1), m(!0)
                        })).catch((function(t) {
                            return m(!1, t)
                        })) : n && n.errMsg ? m(!1, n) : o()
                    }));
                    break;
                case "关阀":
                    C({
                        action: n
                    }).then((function(t) {
                        return k("close")
                    })).then((function(t) {
                        m(!0, t), t.data && t.data.no && e.consumeData(t.data, (function(t) {
                            t && k("clrd")
                        }))
                    })).catch((function(t) {
                        a("关阀失败", t), !t || "错误2" != t.title && "错误9" != t.title ? m(!1, t) : r("", "请按水控上方按键3秒以上进行结算").then((function(t) {
                            m(!0)
                        }))
                    }));
                    break;
                case "绑定":
                    k("info").then((function(t) {
                        m({
                            status: !0,
                            data: t.data
                        })
                    })).catch((function(t) {
                        a("绑定失败", t), m(!1, t)
                    }));
                    break;
                case "设置":
                    C({
                        action: n
                    }).then((function(t) {
                        return function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return i("复位中..."), k("init").then((function(t) {
                                var n = 10;
                                return i(n + ""), connected.state && h((function() {}), 1), new Promise((function(t) {
                                    var e = setInterval((function() {
                                        --n <= 0 ? (i("重连水表"), clearInterval(e), scanToConnect((function() {
                                            i("水表重置"), t()
                                        }))) : i(n + "")
                                    }), 1e3)
                                }))
                            })).then((function(n) {
                                return C(t)
                            })).then((function(t) {
                                return k("setp")
                            }))
                        }({
                            action: n
                        })
                    })).then((function(t) {
                        m({
                            status: !0
                        })
                    })).catch((function(t) {
                        a("设置失败", t), m({
                            status: !1
                        })
                    }));
                    break;
                case "采集":
                    C({
                        action: n
                    }).then((function(t) {
                        return o("index"), i("采集中..."), e.setCollectData(), new Promise((function(t, n) {
                            w((function(n, c) {
                                e.setCollectData(1), t(n)
                            }), 0, !0)
                        }))
                    })).then((function(t) {
                        m({
                            status: !0
                        })
                    })).catch((function(t) {
                        a("采集失败", t), m({
                            status: !1
                        })
                    }));
                    break;
                case "查询":
                    C({
                        action: n
                    }).then((function(t) {
                        return function t(n) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            i("读白名单"), k("getui", {
                                getuiIndex: e
                            }).then((function(c) {
                                c.cardid ? n(0) : e < 19 ? t(n, ++e) : n(1)
                            })).catch((function(t) {
                                n(0)
                            }))
                        }()
                    })).then((function(t) {
                        m(!0, t)
                    })).catch((function(t) {
                        a("查询失败", t), m(!1, t)
                    }));
                    break;
                case "绑卡":
                    C({
                        action: n
                    }).then((function(t) {
                        return i("绑卡中"), k("addc")
                    })).then((function(n) {
                        return g(t)
                    })).then((function(t) {
                        m(!0)
                    })).catch((function(t) {
                        a("绑卡失败", t), m(!1, t)
                    }));
                    break;
                case "解绑":
                    C({
                        action: n
                    }).then((function(t) {
                        return i("解绑中"), k("delc")
                    })).then((function(n) {
                        return v(t)
                    })).then((function(t) {
                        m(!0)
                    })).catch((function(t) {
                        a("解绑失败", t), m(!1, t)
                    }))
            }
        }
    };
});
define("C2427CC194FC73BFA42414C6A277E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    module.exports = {
        offBluetoothAdapterStateChange: function(e) {
            wx.offBluetoothAdapterStateChange(e)
        },
        onBluetoothAdapterStateChange: function(e) {
            wx.onBluetoothAdapterStateChange(e)
        },
        offBLEConnectionStateChange: function(e) {
            wx.offBLEConnectionStateChange(e)
        },
        onBLEConnectionStateChange: function(e) {
            wx.onBLEConnectionStateChange(e)
        },
        openBluetoothAdapter: function(e) {
            return wx.openBluetoothAdapter(e)
        },
        closeBluetoothAdapter: function(e) {
            return wx.closeBluetoothAdapter(e)
        },
        createBLEConnection: function(e) {
            return wx.createBLEConnection(e)
        },
        closeBLEConnection: function(e) {
            return wx.closeBLEConnection(e)
        },
        startBluetoothDevicesDiscovery: function(e) {
            return wx.startBluetoothDevicesDiscovery(e)
        },
        stopBluetoothDevicesDiscovery: function(e) {
            return wx.stopBluetoothDevicesDiscovery(e)
        },
        getBluetoothDevices: function(e) {
            return wx.getBluetoothDevices(e)
        },
        offBluetoothDeviceFound: function(e) {
            wx.offBluetoothDeviceFound(e)
        },
        onBluetoothDeviceFound: function(e) {
            wx.onBluetoothDeviceFound(e)
        },
        getBLEDeviceServices: function(e) {
            return wx.getBLEDeviceServices(e)
        },
        getBLEDeviceCharacteristics: function(e) {
            return wx.getBLEDeviceCharacteristics(e)
        },
        notifyBLECharacteristicValueChange: function(e) {
            return wx.notifyBLECharacteristicValueChange(e)
        },
        offBLECharacteristicValueChange: function(e) {
            wx.offBLECharacteristicValueChange(e)
        },
        onBLECharacteristicValueChange: function(e) {
            wx.onBLECharacteristicValueChange(e)
        },
        writeBLECharacteristicValue: function(e) {
            return wx.writeBLECharacteristicValue(e)
        },
        getConnectedBluetoothDevices: function(e) {
            return wx.getConnectedBluetoothDevices(e)
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
define("C372FB5794FC73BFA51493505AB6E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("@babel/runtime/helpers/typeof.js"),
        r = require("27F6CAB394FC73BF4190A2B46A86E8C0.js"),
        i = require("A6CC3C9394FC73BFC0AA54949A67E8C0.js"),
        a = i.showLoading,
        t = i.showModal,
        n = require("101E33B294FC73BF76785BB557A6E8C0.js"),
        o = n.getDevice,
        u = n.FactoryName,
        s = require("CE76404694FC73BFA81028419976E8C0.js"),
        c = s.log,
        g = s.error,
        l = require("25B9627594FC73BF43DF0A720987E8C0.js").setPage,
        f = "pri";

    function h(e, i) {
        var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        l(n), a("加载中...", "index");
        var s = q(e, i, n);
        r.timerFunc();
        var g, h = o().factoryName;
        switch (c("设备厂家", h), h) {
            case u.KZY:
                g = require("BFB0FA4194FC73BFD9D6924695E7E8C0.js");
                break;
            case u.BD:
                g = require("92ACE77294FC73BFF4CA8F75C8D6E8C0.js");
                break;
            case u.XT:
                g = require("F143BE6694FC73BF9725D661EB27E8C0.js");
                break;
            case u.MH:
            case u.MH_4G:
                g = require("C4C0007394FC73BFA2A668741317E8C0.js");
                break;
            case u.ZK:
            case u.ZK_4G:
                g = require("3CFBD57594FC73BF5A9DBD72A447E8C0.js")
        }
        g ? g.switching(e, s, f, t) : i(!1, "未知设备厂家类型")
    }

    function q(r, i, a) {
        return function(n, o) {
            var u, s, c = i(n, o);
            if (!n && !c && o) return "object" == e(o) ? (u = o.title || r + "失败", s = o.msg || o.errMsg || o.errormsg || "") : (u = r + "失败", s = o || ""), t(u, s, "取消", "重试", (function() {
                return h(r, i, !0, a)
            })), "请放置卡片" != u && g(u, s), !0
        }
    }
    module.exports = {
        switching: h,
        setType: function(e) {
            f = e
        }
    };
});
define("C4C0007394FC73BFA2A668741317E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var n, t = require("@babel/runtime/helpers/typeof.js"),
        e = require("1D8CB78294FC73BF7BEADF853227E8C0.js"),
        c = require("A6CC3C9394FC73BFC0AA54949A67E8C0.js"),
        i = c.showLoading,
        o = c.hideLoading,
        r = c.showModal,
        u = require("CE76404694FC73BFA81028419976E8C0.js"),
        a = u.log,
        f = (u.delay, require("27F6CAB394FC73BF4190A2B46A86E8C0.js")),
        s = f.query,
        h = f.disconnect,
        d = require("25B9627594FC73BF43DF0A720987E8C0.js"),
        l = d.GetDeviceEnable,
        g = d.NBOpenProcess,
        v = (d.AlarmInfo, d.BindUserCardRequest),
        p = d.UnBindUserCardRequest,
        b = require("101E33B294FC73BF76785BB557A6E8C0.js").MING_HAN,
        m = require("C2427CC194FC73BFA42414C6A277E8C0.js"),
        q = null,
        M = getApp();

    function C() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return a("获取授权 random login ", n), k("random", n).then((function(t) {
            return k("login", n)
        }))
    }

    function k(n) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return w(n, t).catch((function(e) {
            return !e || "错误98" != e.title && "错误01" != e.title ? Promise.reject(e) : w(n, t)
        }))
    }

    function w(n) {
        var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise((function(i, o) {
            e.getData(n, c).then((function(c) {
                if (!0 !== c) {
                    var r = !1;
                    s(M.device, c, (function(c, u, a) {
                        if ("读取成功" == c) {
                            r = !0;
                            var f = e.getDataBack(u);
                            if ("object" == t(f))
                                if (a && a(), ["00", "06", "07", "08"].indexOf(f.code) >= 0) i(f);
                                else {
                                    if ("getui" == n) return void o();
                                    o({
                                        title: "错误" + f.code,
                                        errMsg: e.errorCode(f.code),
                                        code: f.code
                                    })
                                }
                        } else if (r && "返回超时" == c) o({
                            title: c,
                            errMsg: u
                        });
                        else {
                            if ("getui" == n) return void o();
                            "OK" == c.toUpperCase ? o({
                                title: "连接失败",
                                errMsg: "未能找到要连接的设备",
                                toNB: !0
                            }) : o({
                                title: c,
                                errMsg: u,
                                toNB: !0
                            })
                        }
                    }))
                } else i()
            }))
        }))
    }

    function B(n) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        k("getd").then((function(i) {
            i.data ? c ? k("clrd").then((function(e) {
                B(n, ++t, c)
            })).catch((function(t) {
                n(!1, t)
            })) : e.consumeData(i.data, (function(e) {
                e ? k("clrd").then((function(e) {
                    B(n, ++t, c)
                })).catch((function(t) {
                    n(!1, t)
                })) : n(!1, e)
            })) : n(!0, i)
        })).catch((function(t) {
            n(!1, t)
        }))
    }

    function D(n) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        i("读白名单"), k("getui", {
            getuiIndex: t
        }).then((function(e) {
            e.cardid ? n(0) : t < 19 ? D(n, ++t) : n(1)
        })).catch((function(t) {
            n(0)
        }))
    }
    module.exports = {
        switching: function(t, c, u, f) {
            switch (M || (M = getApp()), n = M.factory || b, i(t + "中...", "index"), q = c, t) {
                case "开阀":
                    if ("nb" == u) return void g(n).then((function(n) {
                        m.setStorageSync("nbOpen", 1), q(!0)
                    })).catch((function(n) {
                        return q(!1, n)
                    }));
                    l(M.device.deviceName).then((function(n) {
                        return C({
                            action: t
                        })
                    })).then((function(n) {
                        return a("运行状态 gets"), k("gets", {
                            action: t
                        })
                    })).then((function(n) {
                        if (1 == n.rs) {
                            if (M.userId.substr(7) == n.id) return n;
                            throw {
                                errMsg: "水表正在使用，请长按水表上的按钮三秒关阀，然后重新操作"
                            }
                        }
                        return a("设置时间 setdt"), k("setdt", {
                            action: t
                        }).then((function(n) {
                            return a("开启水阀 open"), k("open", {
                                action: t
                            })
                        }))
                    })).then((function(n) {
                        q(!0, n), n.data && e.consumeData(n.data, (function(n) {
                            n && k("clrd").then((function(n) {
                                B((function(n, t) {}))
                            }))
                        }))
                    })).catch((function(t) {
                        a("开阀失败", t), t.toNB ? g(n, t).then((function(n) {
                            m.setStorageSync("nbOpen", 1), q(!0)
                        })).catch((function(n) {
                            return q(!1, n)
                        })) : t && t.errMsg ? q(!1, t) : o()
                    }));
                    break;
                case "关阀":
                    C({
                        action: t
                    }).then((function(n) {
                        return k("close")
                    })).then((function(n) {
                        q(!0, n), n.data && e.consumeData(n.data, (function(n) {
                            n && k("clrd")
                        }))
                    })).catch((function(n) {
                        a("关阀失败", n), !n || "错误02" != n.title && "错误09" != n.title ? q(!1, n) : r("", "请按水控上方按键3秒以上进行结算").then((function(n) {
                            q(!0)
                        }))
                    }));
                    break;
                case "绑定":
                    k("info").then((function(n) {
                        q({
                            status: !0,
                            data: n.data
                        })
                    })).catch((function(n) {
                        a("绑定失败", n), q(!1, n)
                    }));
                    break;
                case "设置":
                    C({
                        action: t
                    }).then((function(n) {
                        return function() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return i("复位中..."), k("init").then((function(n) {
                                var t = 10;
                                return i(t + ""), connected.state && h((function() {}), 1), new Promise((function(n) {
                                    var e = setInterval((function() {
                                        --t <= 0 ? (i("重连水表"), clearInterval(e), scanToConnect((function() {
                                            i("水表重置"), n()
                                        }))) : i(t + "")
                                    }), 1e3)
                                }))
                            })).then((function(t) {
                                return C(n)
                            })).then((function(n) {
                                return k("setp")
                            }))
                        }({
                            action: t
                        })
                    })).then((function(n) {
                        q({
                            status: !0
                        })
                    })).catch((function(n) {
                        a("设置失败", n), q({
                            status: !1
                        })
                    }));
                    break;
                case "采集":
                    C({
                        action: t
                    }).then((function(n) {
                        return o("index"), i("采集中..."), e.setCollectData(), new Promise((function(n, t) {
                            B((function(t, c) {
                                e.setCollectData(1), n(t)
                            }), 0, !0)
                        }))
                    })).then((function(n) {
                        q({
                            status: !0
                        })
                    })).catch((function(n) {
                        a("采集失败", n), q({
                            status: !1
                        })
                    }));
                    break;
                case "查询":
                    C({
                        action: t
                    }).then((function(n) {
                        return D()
                    })).then((function(n) {
                        q(!0, n)
                    })).catch((function(n) {
                        a("查询失败", n), q(!1, n)
                    }));
                    break;
                case "绑卡":
                    C({
                        action: t
                    }).then((function(n) {
                        return i("绑卡中"), k("addc")
                    })).then((function(t) {
                        return v(n)
                    })).then((function(n) {
                        D((function(n) {
                            q(!0)
                        }))
                    })).catch((function(n) {
                        a("绑卡失败", n), q(!1, n)
                    }));
                    break;
                case "解绑":
                    C({
                        action: t
                    }).then((function(n) {
                        return i("解绑中"), k("delc")
                    })).then((function(t) {
                        return p(n)
                    })).then((function(n) {
                        D((function(n) {
                            q(!0)
                        }))
                    })).catch((function(n) {
                        a("解绑失败", n), q(!1, n)
                    }))
            }
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
define("E138E92794FC73BF875E8120E2C7E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("@babel/runtime/helpers/typeof.js");

    function r(e) {
        var r = {
            omitExtraWLInCodeBlocks: {
                defaultValue: !1,
                describe: "Omit the default extra whiteline added to code blocks",
                type: "boolean"
            },
            noHeaderId: {
                defaultValue: !1,
                describe: "Turn on/off generated header id",
                type: "boolean"
            },
            prefixHeaderId: {
                defaultValue: !1,
                describe: "Specify a prefix to generated header ids",
                type: "string"
            },
            headerLevelStart: {
                defaultValue: !1,
                describe: "The header blocks level start",
                type: "integer"
            },
            parseImgDimensions: {
                defaultValue: !1,
                describe: "Turn on/off image dimension parsing",
                type: "boolean"
            },
            simplifiedAutoLink: {
                defaultValue: !1,
                describe: "Turn on/off GFM autolink style",
                type: "boolean"
            },
            literalMidWordUnderscores: {
                defaultValue: !1,
                describe: "Parse midword underscores as literal underscores",
                type: "boolean"
            },
            strikethrough: {
                defaultValue: !1,
                describe: "Turn on/off strikethrough support",
                type: "boolean"
            },
            tables: {
                defaultValue: !1,
                describe: "Turn on/off tables support",
                type: "boolean"
            },
            tablesHeaderId: {
                defaultValue: !1,
                describe: "Add an id to table headers",
                type: "boolean"
            },
            ghCodeBlocks: {
                defaultValue: !0,
                describe: "Turn on/off GFM fenced code blocks support",
                type: "boolean"
            },
            tasklists: {
                defaultValue: !1,
                describe: "Turn on/off GFM tasklist support",
                type: "boolean"
            },
            smoothLivePreview: {
                defaultValue: !1,
                describe: "Prevents weird effects in live previews due to incomplete input",
                type: "boolean"
            },
            smartIndentationFix: {
                defaultValue: !1,
                description: "Tries to smartly fix identation in es6 strings",
                type: "boolean"
            }
        };
        if (!1 === e) return JSON.parse(JSON.stringify(r));
        var t = {};
        for (var n in r) r.hasOwnProperty(n) && (t[n] = r[n].defaultValue);
        return t
    }
    var t = {},
        n = {},
        s = {},
        a = r(!0),
        o = {
            github: {
                omitExtraWLInCodeBlocks: !0,
                prefixHeaderId: "user-content-",
                simplifiedAutoLink: !0,
                literalMidWordUnderscores: !0,
                strikethrough: !0,
                tables: !0,
                tablesHeaderId: !0,
                ghCodeBlocks: !0,
                tasklists: !0
            },
            vanilla: r(!0)
        };

    function i(r, n) {
        var s = n ? "Error in " + n + " extension->" : "Error in unnamed extension",
            a = {
                valid: !0,
                error: ""
            };
        t.helper.isArray(r) || (r = [r]);
        for (var o = 0; o < r.length; ++o) {
            var i = s + " sub-extension " + o + ": ",
                l = r[o];
            if ("object" !== e(l)) return a.valid = !1, a.error = i + "must be an object, but " + e(l) + " given", a;
            if (!t.helper.isString(l.type)) return a.valid = !1, a.error = i + 'property "type" must be a string, but ' + e(l.type) + " given", a;
            var c = l.type = l.type.toLowerCase();
            if ("language" === c && (c = l.type = "lang"), "html" === c && (c = l.type = "output"), "lang" !== c && "output" !== c && "listener" !== c) return a.valid = !1, a.error = i + "type " + c + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', a;
            if ("listener" === c) {
                if (t.helper.isUndefined(l.listeners)) return a.valid = !1, a.error = i + '. Extensions of type "listener" must have a property called "listeners"', a
            } else if (t.helper.isUndefined(l.filter) && t.helper.isUndefined(l.regex)) return a.valid = !1, a.error = i + c + ' extensions must define either a "regex" property or a "filter" method', a;
            if (l.listeners) {
                if ("object" !== e(l.listeners)) return a.valid = !1, a.error = i + '"listeners" property must be an object but ' + e(l.listeners) + " given", a;
                for (var u in l.listeners)
                    if (l.listeners.hasOwnProperty(u) && "function" != typeof l.listeners[u]) return a.valid = !1, a.error = i + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + u + " must be a function but " + e(l.listeners[u]) + " given", a
            }
            if (l.filter) {
                if ("function" != typeof l.filter) return a.valid = !1, a.error = i + '"filter" must be a function, but ' + e(l.filter) + " given", a
            } else if (l.regex) {
                if (t.helper.isString(l.regex) && (l.regex = new RegExp(l.regex, "g")), !l.regex instanceof RegExp) return a.valid = !1, a.error = i + '"regex" property must either be a string or a RegExp object, but ' + e(l.regex) + " given", a;
                if (t.helper.isUndefined(l.replace)) return a.valid = !1, a.error = i + '"regex" extensions must implement a replace string or function', a
            }
        }
        return a
    }

    function l(e, r) {
        return "~E" + r.charCodeAt(0) + "E"
    }
    t.helper = {}, t.extensions = {}, t.setOption = function(e, r) {
        return a[e] = r, this
    }, t.getOption = function(e) {
        return a[e]
    }, t.getOptions = function() {
        return a
    }, t.resetOptions = function() {
        a = r(!0)
    }, t.setFlavor = function(e) {
        if (o.hasOwnProperty(e)) {
            var r = o[e];
            for (var t in r) r.hasOwnProperty(t) && (a[t] = r[t])
        }
    }, t.getDefaultOptions = function(e) {
        return r(e)
    }, t.subParser = function(e, r) {
        if (t.helper.isString(e)) {
            if (void 0 === r) {
                if (n.hasOwnProperty(e)) return n[e];
                throw Error("SubParser named " + e + " not registered!")
            }
            n[e] = r
        }
    }, t.extension = function(e, r) {
        if (!t.helper.isString(e)) throw Error("Extension 'name' must be a string");
        if (e = t.helper.stdExtName(e), t.helper.isUndefined(r)) {
            if (!s.hasOwnProperty(e)) throw Error("Extension named " + e + " is not registered!");
            return s[e]
        }
        "function" == typeof r && (r = r()), t.helper.isArray(r) || (r = [r]);
        var n = i(r, e);
        if (!n.valid) throw Error(n.error);
        s[e] = r
    }, t.getAllExtensions = function() {
        return s
    }, t.removeExtension = function(e) {
        delete s[e]
    }, t.resetExtensions = function() {
        s = {}
    }, t.validateExtension = function(e) {
        var r = i(e, null);
        return !!r.valid || (console.warn(r.error), !1)
    }, t.hasOwnProperty("helper") || (t.helper = {}), t.helper.isString = function(e) {
        return "string" == typeof e || e instanceof String
    }, t.helper.isFunction = function(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }, t.helper.forEach = function(e, r) {
        if ("function" == typeof e.forEach) e.forEach(r);
        else
            for (var t = 0; t < e.length; t++) r(e[t], t, e)
    }, t.helper.isArray = function(e) {
        return e.constructor === Array
    }, t.helper.isUndefined = function(e) {
        return void 0 === e
    }, t.helper.stdExtName = function(e) {
        return e.replace(/[_-]||\s/g, "").toLowerCase()
    }, t.helper.escapeCharactersCallback = l, t.helper.escapeCharacters = function(e, r, t) {
        var n = "([" + r.replace(/([\[\]\\])/g, "\\$1") + "])";
        t && (n = "\\\\" + n);
        var s = new RegExp(n, "g");
        return e = e.replace(s, l)
    };
    var c = function(e, r, t, n) {
        var s, a, o, i, l, c = n || "",
            u = c.indexOf("g") > -1,
            p = new RegExp(r + "|" + t, "g" + c.replace(/g/g, "")),
            h = new RegExp(r, c.replace(/g/g, "")),
            d = [];
        do {
            for (s = 0; o = p.exec(e);)
                if (h.test(o[0])) s++ || (i = (a = p.lastIndex) - o[0].length);
                else if (s && !--s) {
                l = o.index + o[0].length;
                var f = {
                    left: {
                        start: i,
                        end: a
                    },
                    match: {
                        start: a,
                        end: o.index
                    },
                    right: {
                        start: o.index,
                        end: l
                    },
                    wholeMatch: {
                        start: i,
                        end: l
                    }
                };
                if (d.push(f), !u) return d
            }
        } while (s && (p.lastIndex = a));
        return d
    };
    t.helper.matchRecursiveRegExp = function(e, r, t, n) {
        for (var s = c(e, r, t, n), a = [], o = 0; o < s.length; ++o) a.push([e.slice(s[o].wholeMatch.start, s[o].wholeMatch.end), e.slice(s[o].match.start, s[o].match.end), e.slice(s[o].left.start, s[o].left.end), e.slice(s[o].right.start, s[o].right.end)]);
        return a
    }, t.helper.replaceRecursiveRegExp = function(e, r, n, s, a) {
        if (!t.helper.isFunction(r)) {
            var o = r;
            r = function() {
                return o
            }
        }
        var i = c(e, n, s, a),
            l = e,
            u = i.length;
        if (u > 0) {
            var p = [];
            0 !== i[0].wholeMatch.start && p.push(e.slice(0, i[0].wholeMatch.start));
            for (var h = 0; h < u; ++h) p.push(r(e.slice(i[h].wholeMatch.start, i[h].wholeMatch.end), e.slice(i[h].match.start, i[h].match.end), e.slice(i[h].left.start, i[h].left.end), e.slice(i[h].right.start, i[h].right.end))), h < u - 1 && p.push(e.slice(i[h].wholeMatch.end, i[h + 1].wholeMatch.start));
            i[u - 1].wholeMatch.end < e.length && p.push(e.slice(i[u - 1].wholeMatch.end)), l = p.join("")
        }
        return l
    }, t.helper.isUndefined(console) && (console = {
        warn: function(e) {
            alert(e)
        },
        log: function(e) {
            alert(e)
        },
        error: function(e) {
            throw e
        }
    }), t.Converter = function(r) {
        var n = {},
            l = [],
            c = [],
            u = {};

        function p(e, r) {
            if (r = r || null, t.helper.isString(e)) {
                if (r = e = t.helper.stdExtName(e), t.extensions[e]) return console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), void
                function(e, r) {
                    "function" == typeof e && (e = e(new t.Converter));
                    t.helper.isArray(e) || (e = [e]);
                    var n = i(e, r);
                    if (!n.valid) throw Error(n.error);
                    for (var s = 0; s < e.length; ++s) switch (e[s].type) {
                        case "lang":
                            l.push(e[s]);
                            break;
                        case "output":
                            c.push(e[s]);
                            break;
                        default:
                            throw Error("Extension loader error: Type unrecognized!!!")
                    }
                }(t.extensions[e], e);
                if (t.helper.isUndefined(s[e])) throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
                e = s[e]
            }
            "function" == typeof e && (e = e()), t.helper.isArray(e) || (e = [e]);
            var n = i(e, r);
            if (!n.valid) throw Error(n.error);
            for (var a = 0; a < e.length; ++a) {
                switch (e[a].type) {
                    case "lang":
                        l.push(e[a]);
                        break;
                    case "output":
                        c.push(e[a])
                }
                if (e[a].hasOwnProperty(u))
                    for (var o in e[a].listeners) e[a].listeners.hasOwnProperty(o) && h(o, e[a].listeners[o])
            }
        }

        function h(r, n) {
            if (!t.helper.isString(r)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + e(r) + " given");
            if ("function" != typeof n) throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + e(n) + " given");
            u.hasOwnProperty(r) || (u[r] = []), u[r].push(n)
        }! function() {
            for (var s in r = r || {}, a) a.hasOwnProperty(s) && (n[s] = a[s]);
            if ("object" !== e(r)) throw Error("Converter expects the passed parameter to be an object, but " + e(r) + " was passed instead.");
            for (var o in r) r.hasOwnProperty(o) && (n[o] = r[o]);
            n.extensions && t.helper.forEach(n.extensions, p)
        }(), this._dispatch = function(e, r, t, n) {
            if (u.hasOwnProperty(e))
                for (var s = 0; s < u[e].length; ++s) {
                    var a = u[e][s](e, r, this, t, n);
                    a && void 0 !== a && (r = a)
                }
            return r
        }, this.listen = function(e, r) {
            return h(e, r), this
        }, this.makeHtml = function(e) {
            if (!e) return e;
            var r = {
                gHtmlBlocks: [],
                gHtmlMdBlocks: [],
                gHtmlSpans: [],
                gUrls: {},
                gTitles: {},
                gDimensions: {},
                gListLevel: 0,
                hashLinkCounts: {},
                langExtensions: l,
                outputModifiers: c,
                converter: this,
                ghCodeBlocks: []
            };
            return e = (e = (e = (e = e.replace(/~/g, "~T")).replace(/\$/g, "~D")).replace(/\r\n/g, "\n")).replace(/\r/g, "\n"), n.smartIndentationFix && (e = function(e) {
                var r = e.match(/^\s*/)[0].length,
                    t = new RegExp("^\\s{0," + r + "}", "gm");
                return e.replace(t, "")
            }(e)), e = e, e = t.subParser("detab")(e, n, r), e = t.subParser("stripBlankLines")(e, n, r), t.helper.forEach(l, (function(s) {
                e = t.subParser("runExtension")(s, e, n, r)
            })), e = t.subParser("hashPreCodeTags")(e, n, r), e = t.subParser("githubCodeBlocks")(e, n, r), e = t.subParser("hashHTMLBlocks")(e, n, r), e = t.subParser("hashHTMLSpans")(e, n, r), e = t.subParser("stripLinkDefinitions")(e, n, r), e = t.subParser("blockGamut")(e, n, r), e = t.subParser("unhashHTMLSpans")(e, n, r), e = (e = (e = t.subParser("unescapeSpecialChars")(e, n, r)).replace(/~D/g, "$$")).replace(/~T/g, "~"), t.helper.forEach(c, (function(s) {
                e = t.subParser("runExtension")(s, e, n, r)
            })), e
        }, this.setOption = function(e, r) {
            n[e] = r
        }, this.getOption = function(e) {
            return n[e]
        }, this.getOptions = function() {
            return n
        }, this.addExtension = function(e, r) {
            p(e, r = r || null)
        }, this.useExtension = function(e) {
            p(e)
        }, this.setFlavor = function(e) {
            if (o.hasOwnProperty(e)) {
                var r = o[e];
                for (var t in r) r.hasOwnProperty(t) && (n[t] = r[t])
            }
        }, this.removeExtension = function(e) {
            t.helper.isArray(e) || (e = [e]);
            for (var r = 0; r < e.length; ++r) {
                for (var n = e[r], s = 0; s < l.length; ++s) l[s] === n && l[s].splice(s, 1);
                for (; 0 < c.length; ++s) c[0] === n && c[0].splice(s, 1)
            }
        }, this.getAllExtensions = function() {
            return {
                language: l,
                output: c
            }
        }
    }, t.subParser("anchors", (function(e, r, n) {
        var s = function(e, r, s, a, o, i, l, c) {
            t.helper.isUndefined(c) && (c = ""), e = r;
            var u = s,
                p = a.toLowerCase(),
                h = o,
                d = c;
            if (!h)
                if (p || (p = u.toLowerCase().replace(/ ?\n/g, " ")), h = "#" + p, t.helper.isUndefined(n.gUrls[p])) {
                    if (!(e.search(/\(\s*\)$/m) > -1)) return e;
                    h = ""
                } else h = n.gUrls[p], t.helper.isUndefined(n.gTitles[p]) || (d = n.gTitles[p]);
            var f = '<a href="' + (h = t.helper.escapeCharacters(h, "*_", !1)) + '"';
            return "" !== d && null !== d && (d = d.replace(/"/g, "&quot;"), f += ' title="' + (d = t.helper.escapeCharacters(d, "*_", !1)) + '"'), f += ">" + u + "</a>"
        };
        return e = (e = (e = (e = n.converter._dispatch("anchors.before", e, r, n)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g, s)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, s)).replace(/(\[([^\[\]]+)])()()()()()/g, s), e = n.converter._dispatch("anchors.after", e, r, n)
    })), t.subParser("autoLinks", (function(e, r, n) {
        function s(e, r) {
            var t = r;
            return /^www\./i.test(r) && (r = r.replace(/^www\./i, "http://www.")), '<a href="' + r + '">' + t + "</a>"
        }

        function a(e, r) {
            var n = t.subParser("unescapeSpecialChars")(r);
            return t.subParser("encodeEmailAddress")(n)
        }
        return e = (e = (e = n.converter._dispatch("autoLinks.before", e, r, n)).replace(/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi, s)).replace(/<(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, a), r.simplifiedAutoLink && (e = (e = e.replace(/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/gi, s)).replace(/(?:^|[ \n\t])([A-Za-z0-9!#$%&'*+-/=?^_`\{|}~\.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?:$|[ \n\t])/gi, a)), e = n.converter._dispatch("autoLinks.after", e, r, n)
    })), t.subParser("blockGamut", (function(e, r, n) {
        e = n.converter._dispatch("blockGamut.before", e, r, n), e = t.subParser("blockQuotes")(e, r, n), e = t.subParser("headers")(e, r, n);
        var s = t.subParser("hashBlock")("<hr />", r, n);
        return e = (e = (e = e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, s)).replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, s)).replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm, s), e = t.subParser("lists")(e, r, n), e = t.subParser("codeBlocks")(e, r, n), e = t.subParser("tables")(e, r, n), e = t.subParser("hashHTMLBlocks")(e, r, n), e = t.subParser("paragraphs")(e, r, n), e = n.converter._dispatch("blockGamut.after", e, r, n)
    })), t.subParser("blockQuotes", (function(e, r, n) {
        return e = (e = n.converter._dispatch("blockQuotes.before", e, r, n)).replace(/((^[ \t]{0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm, (function(e, s) {
            var a = s;
            return a = (a = (a = a.replace(/^[ \t]*>[ \t]?/gm, "~0")).replace(/~0/g, "")).replace(/^[ \t]+$/gm, ""), a = t.subParser("githubCodeBlocks")(a, r, n), a = (a = (a = t.subParser("blockGamut")(a, r, n)).replace(/(^|\n)/g, "$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, (function(e, r) {
                var t = r;
                return t = (t = t.replace(/^  /gm, "~0")).replace(/~0/g, "")
            })), t.subParser("hashBlock")("<blockquote>\n" + a + "\n</blockquote>", r, n)
        })), e = n.converter._dispatch("blockQuotes.after", e, r, n)
    })), t.subParser("codeBlocks", (function(e, r, n) {
        e = n.converter._dispatch("codeBlocks.before", e, r, n);
        return e = (e = (e += "~0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, (function(e, s, a) {
            var o = s,
                i = a,
                l = "\n";
            return o = t.subParser("outdent")(o), o = t.subParser("encodeCode")(o), o = (o = (o = t.subParser("detab")(o)).replace(/^\n+/g, "")).replace(/\n+$/g, ""), r.omitExtraWLInCodeBlocks && (l = ""), o = "<pre><code>" + o + l + "</code></pre>", t.subParser("hashBlock")(o, r, n) + i
        }))).replace(/~0/, ""), e = n.converter._dispatch("codeBlocks.after", e, r, n)
    })), t.subParser("codeSpans", (function(e, r, n) {
        return void 0 === (e = n.converter._dispatch("codeSpans.before", e, r, n)) && (e = ""), e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, (function(e, r, n, s) {
            var a = s;
            return a = (a = a.replace(/^([ \t]*)/g, "")).replace(/[ \t]*$/g, ""), r + "<code>" + (a = t.subParser("encodeCode")(a)) + "</code>"
        })), e = n.converter._dispatch("codeSpans.after", e, r, n)
    })), t.subParser("detab", (function(e) {
        return e = (e = (e = (e = (e = e.replace(/\t(?=\t)/g, "    ")).replace(/\t/g, "~A~B")).replace(/~B(.+?)~A/g, (function(e, r) {
            for (var t = r, n = 4 - t.length % 4, s = 0; s < n; s++) t += " ";
            return t
        }))).replace(/~A/g, "    ")).replace(/~B/g, "")
    })), t.subParser("encodeAmpsAndAngles", (function(e) {
        return e = (e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")).replace(/<(?![a-z\/?\$!])/gi, "&lt;")
    })), t.subParser("encodeBackslashEscapes", (function(e) {
        return e = (e = e.replace(/\\(\\)/g, t.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+-.!])/g, t.helper.escapeCharactersCallback)
    })), t.subParser("encodeCode", (function(e) {
        return e = (e = (e = e.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;"), e = t.helper.escapeCharacters(e, "*_{}[]\\", !1)
    })), t.subParser("encodeEmailAddress", (function(e) {
        var r = [function(e) {
            return "&#" + e.charCodeAt(0) + ";"
        }, function(e) {
            return "&#x" + e.charCodeAt(0).toString(16) + ";"
        }, function(e) {
            return e
        }];
        return e = (e = '<a href="' + (e = (e = "mailto:" + e).replace(/./g, (function(e) {
            if ("@" === e) e = r[Math.floor(2 * Math.random())](e);
            else if (":" !== e) {
                var t = Math.random();
                e = t > .9 ? r[2](e) : t > .45 ? r[1](e) : r[0](e)
            }
            return e
        }))) + '">' + e + "</a>").replace(/">.+:/g, '">')
    })), t.subParser("escapeSpecialCharsWithinTagAttributes", (function(e) {
        return e = e.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi, (function(e) {
            var r = e.replace(/(.)<\/?code>(?=.)/g, "$1`");
            return r = t.helper.escapeCharacters(r, "\\`*_", !1)
        }))
    })), t.subParser("githubCodeBlocks", (function(e, r, n) {
        return r.ghCodeBlocks ? (e = n.converter._dispatch("githubCodeBlocks.before", e, r, n), e = (e = (e += "~0").replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, (function(e, s, a) {
            var o = r.omitExtraWLInCodeBlocks ? "" : "\n";
            return a = t.subParser("encodeCode")(a), a = "<pre><code" + (s ? ' class="' + s + " language-" + s + '"' : "") + ">" + (a = (a = (a = t.subParser("detab")(a)).replace(/^\n+/g, "")).replace(/\n+$/g, "")) + o + "</code></pre>", a = t.subParser("hashBlock")(a, r, n), "\n\n~G" + (n.ghCodeBlocks.push({
                text: e,
                codeblock: a
            }) - 1) + "G\n\n"
        }))).replace(/~0/, ""), n.converter._dispatch("githubCodeBlocks.after", e, r, n)) : e
    })), t.subParser("hashBlock", (function(e, r, t) {
        return e = e.replace(/(^\n+|\n+$)/g, ""), "\n\n~K" + (t.gHtmlBlocks.push(e) - 1) + "K\n\n"
    })), t.subParser("hashElement", (function(e, r, t) {
        return function(e, r) {
            var n = r;
            return n = (n = (n = n.replace(/\n\n/g, "\n")).replace(/^\n/, "")).replace(/\n+$/g, ""), n = "\n\n~K" + (t.gHtmlBlocks.push(n) - 1) + "K\n\n"
        }
    })), t.subParser("hashHTMLBlocks", (function(e, r, n) {
        for (var s = ["pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p"], a = function(e, r, t, s) {
                var a = e;
                return -1 !== t.search(/\bmarkdown\b/) && (a = t + n.converter.makeHtml(r) + s), "\n\n~K" + (n.gHtmlBlocks.push(a) - 1) + "K\n\n"
            }, o = 0; o < s.length; ++o) e = t.helper.replaceRecursiveRegExp(e, a, "^(?: |\\t){0,3}<" + s[o] + "\\b[^>]*>", "</" + s[o] + ">", "gim");
        return e = (e = (e = e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, t.subParser("hashElement")(e, r, n))).replace(/(<!--[\s\S]*?-->)/g, t.subParser("hashElement")(e, r, n))).replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, t.subParser("hashElement")(e, r, n))
    })), t.subParser("hashHTMLSpans", (function(e, r, n) {
        for (var s = t.helper.matchRecursiveRegExp(e, "<code\\b[^>]*>", "</code>", "gi"), a = 0; a < s.length; ++a) e = e.replace(s[a][0], "~L" + (n.gHtmlSpans.push(s[a][0]) - 1) + "L");
        return e
    })), t.subParser("unhashHTMLSpans", (function(e, r, t) {
        for (var n = 0; n < t.gHtmlSpans.length; ++n) e = e.replace("~L" + n + "L", t.gHtmlSpans[n]);
        return e
    })), t.subParser("hashPreCodeTags", (function(e, r, n) {
        return e = t.helper.replaceRecursiveRegExp(e, (function(e, r, s, a) {
            var o = s + t.subParser("encodeCode")(r) + a;
            return "\n\n~G" + (n.ghCodeBlocks.push({
                text: e,
                codeblock: o
            }) - 1) + "G\n\n"
        }), "^(?: |\\t){0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^(?: |\\t){0,3}</code>\\s*</pre>", "gim")
    })), t.subParser("headers", (function(e, r, n) {
        e = n.converter._dispatch("headers.before", e, r, n);
        var s = r.prefixHeaderId,
            a = isNaN(parseInt(r.headerLevelStart)) ? 1 : parseInt(r.headerLevelStart),
            o = r.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
            i = r.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;

        function l(e) {
            var r, a = e.replace(/[^\w]/g, "").toLowerCase();
            return n.hashLinkCounts[a] ? r = a + "-" + n.hashLinkCounts[a] ++ : (r = a, n.hashLinkCounts[a] = 1), !0 === s && (s = "section"), t.helper.isString(s) ? s + r : r
        }
        return e = (e = (e = e.replace(o, (function(e, s) {
            var o = t.subParser("spanGamut")(s, r, n),
                i = r.noHeaderId ? "" : ' id="' + l(s) + '"',
                c = "<h" + a + i + ">" + o + "</h" + a + ">";
            return t.subParser("hashBlock")(c, r, n)
        }))).replace(i, (function(e, s) {
            var o = t.subParser("spanGamut")(s, r, n),
                i = r.noHeaderId ? "" : ' id="' + l(s) + '"',
                c = a + 1,
                u = "<h" + c + i + ">" + o + "</h" + c + ">";
            return t.subParser("hashBlock")(u, r, n)
        }))).replace(/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm, (function(e, s, o) {
            var i = t.subParser("spanGamut")(o, r, n),
                c = r.noHeaderId ? "" : ' id="' + l(o) + '"',
                u = a - 1 + s.length,
                p = "<h" + u + c + ">" + i + "</h" + u + ">";
            return t.subParser("hashBlock")(p, r, n)
        })), e = n.converter._dispatch("headers.after", e, r, n)
    })), t.subParser("images", (function(e, r, n) {
        function s(e, r, s, a, o, i, l, c) {
            var u = n.gUrls,
                p = n.gTitles,
                h = n.gDimensions;
            if (s = s.toLowerCase(), c || (c = ""), "" === a || null === a) {
                if ("" !== s && null !== s || (s = r.toLowerCase().replace(/ ?\n/g, " ")), a = "#" + s, t.helper.isUndefined(u[s])) return e;
                a = u[s], t.helper.isUndefined(p[s]) || (c = p[s]), t.helper.isUndefined(h[s]) || (o = h[s].width, i = h[s].height)
            }
            r = r.replace(/"/g, "&quot;"), r = t.helper.escapeCharacters(r, "*_", !1);
            var d = '<img src="' + (a = t.helper.escapeCharacters(a, "*_", !1)) + '" alt="' + r + '"';
            return c && (c = c.replace(/"/g, "&quot;"), d += ' title="' + (c = t.helper.escapeCharacters(c, "*_", !1)) + '"'), o && i && (d += ' width="' + (o = "*" === o ? "auto" : o) + '"', d += ' height="' + (i = "*" === i ? "auto" : i) + '"'), d += " />"
        }
        return e = (e = (e = n.converter._dispatch("images.before", e, r, n)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g, s)).replace(/!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g, s), e = n.converter._dispatch("images.after", e, r, n)
    })), t.subParser("italicsAndBold", (function(e, r, t) {
        return e = t.converter._dispatch("italicsAndBold.before", e, r, t), e = r.literalMidWordUnderscores ? (e = (e = (e = e.replace(/(^|\s|>|\b)__(?=\S)([\s\S]+?)__(?=\b|<|\s|$)/gm, "$1<strong>$2</strong>")).replace(/(^|\s|>|\b)_(?=\S)([\s\S]+?)_(?=\b|<|\s|$)/gm, "$1<em>$2</em>")).replace(/(\*\*)(?=\S)([^\r]*?\S[*]*)\1/g, "<strong>$2</strong>")).replace(/(\*)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>") : (e = e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, "<strong>$2</strong>")).replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>"), e = t.converter._dispatch("italicsAndBold.after", e, r, t)
    })), t.subParser("lists", (function(e, r, n) {
        function s(e, s) {
            n.gListLevel++, e = e.replace(/\n{2,}$/, "\n");
            var a = /\n[ \t]*\n(?!~0)/.test(e += "~0");
            return e = (e = e.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm, (function(e, s, o, i, l, c, u) {
                u = u && "" !== u.trim();
                var p = t.subParser("outdent")(l, r, n),
                    h = "";
                return c && r.tasklists && (h = ' class="task-list-item" style="list-style-type: none;"', p = p.replace(/^[ \t]*\[(x|X| )?]/m, (function() {
                    var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                    return u && (e += " checked"), e += ">"
                }))), s || p.search(/\n{2,}/) > -1 ? (p = t.subParser("githubCodeBlocks")(p, r, n), p = t.subParser("blockGamut")(p, r, n)) : (p = (p = t.subParser("lists")(p, r, n)).replace(/\n$/, ""), p = a ? t.subParser("paragraphs")(p, r, n) : t.subParser("spanGamut")(p, r, n)), p = "\n<li" + h + ">" + p + "</li>\n"
            }))).replace(/~0/g, ""), n.gListLevel--, s && (e = e.replace(/\s+$/, "")), e
        }

        function a(e, r, t) {
            var n = "ul" === r ? /^ {0,2}\d+\.[ \t]/gm : /^ {0,2}[*+-][ \t]/gm,
                a = [],
                o = "";
            if (-1 !== e.search(n)) {
                ! function e(a) {
                    var i = a.search(n); - 1 !== i ? (o += "\n\n<" + r + ">" + s(a.slice(0, i), !!t) + "</" + r + ">\n\n", n = "ul" === (r = "ul" === r ? "ol" : "ul") ? /^ {0,2}\d+\.[ \t]/gm : /^ {0,2}[*+-][ \t]/gm, e(a.slice(i))) : o += "\n\n<" + r + ">" + s(a, !!t) + "</" + r + ">\n\n"
                }(e);
                for (var i = 0; i < a.length; ++i);
            } else o = "\n\n<" + r + ">" + s(e, !!t) + "</" + r + ">\n\n";
            return o
        }
        e = n.converter._dispatch("lists.before", e, r, n), e += "~0";
        var o = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
        return n.gListLevel ? e = e.replace(o, (function(e, r, t) {
            return a(r, t.search(/[*+-]/g) > -1 ? "ul" : "ol", !0)
        })) : (o = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, e = e.replace(o, (function(e, r, t, n) {
            return a(t, n.search(/[*+-]/g) > -1 ? "ul" : "ol")
        }))), e = e.replace(/~0/, ""), e = n.converter._dispatch("lists.after", e, r, n)
    })), t.subParser("outdent", (function(e) {
        return e = (e = e.replace(/^(\t|[ ]{1,4})/gm, "~0")).replace(/~0/g, "")
    })), t.subParser("paragraphs", (function(e, r, n) {
        for (var s = (e = (e = (e = n.converter._dispatch("paragraphs.before", e, r, n)).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g), a = [], o = s.length, i = 0; i < o; i++) {
            var l = s[i];
            l.search(/~(K|G)(\d+)\1/g) >= 0 || (l = (l = t.subParser("spanGamut")(l, r, n)).replace(/^([ \t]*)/g, "<p>"), l += "</p>"), a.push(l)
        }
        for (o = a.length, i = 0; i < o; i++) {
            for (var c = "", u = a[i], p = !1; u.search(/~(K|G)(\d+)\1/) >= 0;) {
                var h = RegExp.$1,
                    d = RegExp.$2;
                c = (c = "K" === h ? n.gHtmlBlocks[d] : p ? t.subParser("encodeCode")(n.ghCodeBlocks[d].text) : n.ghCodeBlocks[d].codeblock).replace(/\$/g, "$$$$"), u = u.replace(/(\n\n)?~(K|G)\d+\2(\n\n)?/, c), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u) && (p = !0)
            }
            a[i] = u
        }
        return e = (e = (e = a.join("\n\n")).replace(/^\n+/g, "")).replace(/\n+$/g, ""), n.converter._dispatch("paragraphs.after", e, r, n)
    })), t.subParser("runExtension", (function(e, r, t, n) {
        if (e.filter) r = e.filter(r, n.converter, t);
        else if (e.regex) {
            var s = e.regex;
            !s instanceof RegExp && (s = new RegExp(s, "g")), r = r.replace(s, e.replace)
        }
        return r
    })), t.subParser("spanGamut", (function(e, r, n) {
        return e = n.converter._dispatch("spanGamut.before", e, r, n), e = t.subParser("codeSpans")(e, r, n), e = t.subParser("escapeSpecialCharsWithinTagAttributes")(e, r, n), e = t.subParser("encodeBackslashEscapes")(e, r, n), e = t.subParser("images")(e, r, n), e = t.subParser("anchors")(e, r, n), e = t.subParser("autoLinks")(e, r, n), e = t.subParser("encodeAmpsAndAngles")(e, r, n), e = t.subParser("italicsAndBold")(e, r, n), e = (e = t.subParser("strikethrough")(e, r, n)).replace(/  +\n/g, " <br />\n"), e = n.converter._dispatch("spanGamut.after", e, r, n)
    })), t.subParser("strikethrough", (function(e, r, t) {
        return r.strikethrough && (e = (e = t.converter._dispatch("strikethrough.before", e, r, t)).replace(/(?:~T){2}([\s\S]+?)(?:~T){2}/g, "<del>$1</del>"), e = t.converter._dispatch("strikethrough.after", e, r, t)), e
    })), t.subParser("stripBlankLines", (function(e) {
        return e.replace(/^[ \t]+$/gm, "")
    })), t.subParser("stripLinkDefinitions", (function(e, r, n) {
        return e = (e = (e += "~0").replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=~0))/gm, (function(e, s, a, o, i, l, c) {
            return s = s.toLowerCase(), n.gUrls[s] = t.subParser("encodeAmpsAndAngles")(a), l ? l + c : (c && (n.gTitles[s] = c.replace(/"|'/g, "&quot;")), r.parseImgDimensions && o && i && (n.gDimensions[s] = {
                width: o,
                height: i
            }), "")
        }))).replace(/~0/, "")
    })), t.subParser("tables", (function(e, r, n) {
        if (!r.tables) return e;

        function s(e, s) {
            return "<td" + s + ">" + t.subParser("spanGamut")(e, r, n) + "</td>\n"
        }
        return e = (e = n.converter._dispatch("tables.before", e, r, n)).replace(/^[ \t]{0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm, (function(e) {
            var a, o = e.split("\n");
            for (a = 0; a < o.length; ++a) /^[ \t]{0,3}\|/.test(o[a]) && (o[a] = o[a].replace(/^[ \t]{0,3}\|/, "")), /\|[ \t]*$/.test(o[a]) && (o[a] = o[a].replace(/\|[ \t]*$/, ""));
            var i, l, c, u, p = o[0].split("|").map((function(e) {
                    return e.trim()
                })),
                h = o[1].split("|").map((function(e) {
                    return e.trim()
                })),
                d = [],
                f = [],
                g = [],
                b = [];
            for (o.shift(), o.shift(), a = 0; a < o.length; ++a) "" !== o[a].trim() && d.push(o[a].split("|").map((function(e) {
                return e.trim()
            })));
            if (p.length < h.length) return e;
            for (a = 0; a < h.length; ++a) g.push((i = h[a], /^:[ \t]*--*$/.test(i) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(i) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(i) ? ' style="text-align:center;"' : ""));
            for (a = 0; a < p.length; ++a) t.helper.isUndefined(g[a]) && (g[a] = ""), f.push((l = p[a], c = g[a], u = void 0, u = "", l = l.trim(), r.tableHeaderId && (u = ' id="' + l.replace(/ /g, "_").toLowerCase() + '"'), "<th" + u + c + ">" + (l = t.subParser("spanGamut")(l, r, n)) + "</th>\n"));
            for (a = 0; a < d.length; ++a) {
                for (var v = [], m = 0; m < f.length; ++m) t.helper.isUndefined(d[a][m]), v.push(s(d[a][m], g[m]));
                b.push(v)
            }
            return function(e, r) {
                for (var t = "<table>\n<thead>\n<tr>\n", n = e.length, s = 0; s < n; ++s) t += e[s];
                for (t += "</tr>\n</thead>\n<tbody>\n", s = 0; s < r.length; ++s) {
                    t += "<tr>\n";
                    for (var a = 0; a < n; ++a) t += r[s][a];
                    t += "</tr>\n"
                }
                return t += "</tbody>\n</table>\n"
            }(f, b)
        })), e = n.converter._dispatch("tables.after", e, r, n)
    })), t.subParser("unescapeSpecialChars", (function(e) {
        return e = e.replace(/~E(\d+)E/g, (function(e, r) {
            var t = parseInt(r);
            return String.fromCharCode(t)
        }))
    })), module.exports = t;
});
define("E563EC1494FC73BF8305841355A7E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = "",
        t = "",
        r = {},
        s = require("118EC9A494FC73BF77E8A1A301D7E8C0.js"),
        n = require("A1AF383294FC73BFC7C9503571B7E8C0.js"),
        a = (l("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), l("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")),
        o = l("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),
        i = l("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
    l("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), l("wxxxcode-style,script,style,view,scroll-view,block");

    function l(e) {
        for (var t = {}, r = e.split(","), s = 0; s < r.length; s++) t[r[s]] = !0;
        return t
    }

    function d(s) {
        var n = [];
        if (0 == e.length || !r) return (d = {
            node: "text"
        }).text = s, o = [d];
        s = s.replace(/\[([^\[\]]+)\]/g, ":$1:");
        for (var a = new RegExp("[:]"), o = s.split(a), i = 0; i < o.length; i++) {
            var l = o[i],
                d = {};
            r[l] ? (d.node = "element", d.tag = "emoji", d.text = r[l], d.baseSrc = t) : (d.node = "text", d.text = l), n.push(d)
        }
        return n
    }
    module.exports = {
        html2json: function(e, t) {
            e = function(e) {
                return e.replace(/\r?\n+/g, "").replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<")
            }(e = function(e) {
                return e.replace(/<\?xml.*\?>\n/, "").replace(/<.*!doctype.*\>\n/, "").replace(/<.*!DOCTYPE.*\>\n/, "")
            }(e)), e = s.strDiscode(e);
            var r = [],
                l = {
                    node: t,
                    nodes: [],
                    images: [],
                    imageUrls: []
                },
                c = 0;
            return n(e, {
                start: function(e, n, d) {
                    var u, p = {
                        node: "element",
                        tag: e
                    };
                    0 === r.length ? (p.index = c.toString(), c += 1) : (void 0 === (u = r[0]).nodes && (u.nodes = []), p.index = u.index + "." + u.nodes.length);
                    if (a[e] ? p.tagType = "block" : o[e] ? p.tagType = "inline" : i[e] && (p.tagType = "closeSelf"), 0 !== n.length && (p.attr = n.reduce((function(e, t) {
                            var r = t.name,
                                s = t.value;
                            return "class" == r && (p.classStr = s), "style" == r && (p.styleStr = s), s.match(/ /) && (s = s.split(" ")), e[r] ? Array.isArray(e[r]) ? e[r].push(s) : e[r] = [e[r], s] : e[r] = s, e
                        }), {})), "img" === p.tag) {
                        p.imgIndex = l.images.length;
                        var g = p.attr.src;
                        "" == g[0] && g.splice(0, 1), g = s.urlToHttpUrl(g, "https"), p.attr.src = g, p.from = t, l.images.push(p), l.imageUrls.push(g)
                    }
                    if ("font" === p.tag) {
                        var m = ["x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large"],
                            h = {
                                color: "color",
                                face: "font-family",
                                size: "font-size"
                            };
                        for (var f in p.attr.style || (p.attr.style = []), p.styleStr || (p.styleStr = ""), h)
                            if (p.attr[f]) {
                                var v = "size" === f ? m[p.attr[f] - 1] : p.attr[f];
                                p.attr.style.push(h[f]), p.attr.style.push(v), p.styleStr += h[f] + ": " + v + ";"
                            }
                    }("source" === p.tag && (l.source = p.attr.src), d) ? (void 0 === (u = r[0] || l).nodes && (u.nodes = []), u.nodes.push(p)) : r.unshift(p)
                },
                end: function(e) {
                    var t = r.shift();
                    if (t.tag !== e && console.error("invalid state: mismatch end tag"), "video" === t.tag && l.source && (t.attr.src = l.source, delete l.source), 0 === r.length) l.nodes.push(t);
                    else {
                        var s = r[0];
                        void 0 === s.nodes && (s.nodes = []), s.nodes.push(t)
                    }
                },
                chars: function(e) {
                    var t = {
                        node: "text",
                        text: e,
                        textArray: d(e)
                    };
                    if (0 === r.length) t.index = c.toString(), c += 1, l.nodes.push(t);
                    else {
                        var s = r[0];
                        void 0 === s.nodes && (s.nodes = []), t.index = s.index + "." + s.nodes.length, s.nodes.push(t)
                    }
                },
                comment: function(e) {}
            }), l
        },
        emojisInit: function() {
            var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/",
                a = arguments.length > 2 ? arguments[2] : void 0;
            e = s, t = n, r = a
        }
    };
});
define("EE53C0D194FC73BF8835A8D6D8C6E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var r = require("634DE34294FC73BF052B8B45C2F6E8C0.js"),
        e = r.PBOC_3DES_discryption,
        t = r.PBOC_3DES,
        n = "202122232425262728292A2B2C2D2E2F",
        s = /\b(0+)/gi,
        a = /\b(F+)/gi,
        i = "",
        u = {
            code: "",
            msg: ""
        },
        c = {
            PAIR_DEVICE: "0405AABBCC",
            READ_ORDER_TABLE: "00F0001B",
            READ_CARD_TABLE: "00F00011",
            OPEN_VALUE: "00F10000",
            CLOSE_VALUE: "00F10001",
            READ_ORDER_DETAIL: "00F10025",
            CONFIRM_ORDER: "00F10035",
            READ_CARD_NO: "00F00012",
            BIND_CARD: "00F10010",
            UNBIND_CARD: "00F10011"
        },
        g = "01020304",
        o = .2,
        m = 25,
        l = 300,
        d = 60;

    function b(r, e) {
        var t = "68" + _(e) + "6811",
            n = I(_(r));
        return ((t = t + O(n) + n) + k(t) + "16").toUpperCase()
    }

    function f(r, e, s) {
        var a = {
            code: "",
            command: "",
            msg: ""
        };
        if (null == e || 2 != e.length) return a.code = 501, a.msg = "orderId长度不为2", a;
        if (null == s) return a.code = 502, a.msg = "type必须为00或者11", a;
        var i = function(r, e, s, a) {
            var i = "68" + _(e) + "681C",
                u = I(function(r, e, s, a) {
                    var i = _(r) + _(e) + s,
                        u = k(i);
                    return i = N(i + u), t(i, n)
                }(r, e, s)),
                c = k(i = i + O(u) + u);
            return i = i + c + "16"
        }("00F10025", r, e);
        return a.code = 200, a.msg = "成功", a.command = i, a
    }

    function v(r, e, s, a) {
        var i = function(r, e, s, a, i) {
                var u = _(r) + _(e) + _(U(s, 18)) + a + _(i),
                    c = k(u);
                return I(t(N(u += c), n))
            }("00F10035", r, e, s, a),
            u = "68" + _(r) + "681C" + O(i) + i;
        return (u = u + k(u) + "16").toUpperCase()
    }

    function A(r, e, s, a, i, u, c, g) {
        var o = function(r, e, s, a, i, u, c, g, o) {
                var m = _(r) + _(U(e, 18)) + _(s) + _(a) + _(i) + _(U((1e3 * u).toString(), 8)) + _(U((100 * c).toString(), 6)) + _(U(g.toString(), 4)) + _(U(o.toString(), 4)),
                    l = k(m);
                return I(t(m += l, n))
            }("00F10000", r, e, s, a, i, u, c, g),
            m = "68" + _(e) + "681C" + O(o) + o;
        return (m + k(m) + "16").toUpperCase()
    }

    function E(r, e, s, a) {
        var i = function(r, e, s, a, i) {
                var u = _(r) + _(U(e, 18)) + _(s) + _(a) + _(i),
                    c = k(u);
                return I(t(u += c, n))
            }("00F10001", r, e, s, a),
            u = "68" + _(e) + "681C" + O(i) + i;
        return (u + k(u) + "16").toUpperCase()
    }

    function D(r) {
        return function(r) {
            var e = {
                code: "",
                msg: ""
            };
            switch (e.code = r, r) {
                case "00":
                    e.code = 200, e.msg = "操作成功";
                    break;
                case "01":
                    e.msg = "用户正在使用";
                    break;
                case "02":
                    e.msg = "该用户已经开阀（第一次开阀成功）";
                    break;
                case "71":
                    e.msg = "用户正在使用";
                    break;
                case "72":
                    e.msg = "阀门故障";
                    break;
                case "73":
                    e.msg = "磁干扰";
                    break;
                case "74":
                    e.msg = "表号错";
                    break;
                case "75":
                    e.msg = "下发时间或者账单号不等于开阀的时间或者账单号";
                    break;
                case "76":
                    e.msg = "可用水量错误（下发的水量为0）";
                    break;
                case "77":
                    e.msg = "自动关阀时间错误";
                    break;
                case "78":
                    e.msg = "可再次开阀时间错误";
                    break;
                case "79":
                    e.msg = "水表上次关阀上报失败";
                    break;
                case "80":
                    e.msg = "校验和错误";
                    break;
                case "81":
                    e.msg = "工厂模式";
                    break;
                case "82":
                    e.msg = "用户码错";
                    break;
                case "83":
                    e.msg = "系统开阀";
                    break;
                case "84":
                    e.msg = "有卡消费用户正在使用";
                    break;
                case "8A":
                    e.msg = "蓝牙账单已满";
                    break;
                default:
                    e.msg = "未知异常" + r
            }
            return u = e, e
        }(e(h(r.substring(20, r.length - 4)), n).substring(46, 48))
    }

    function p(r, e, s, a) {
        var i = function(r, e, s, a, i) {
                var u = _(r) + _(e) + _(U(s, 18)) + a + i,
                    c = k(u);
                return I(t(u += c, n))
            }("00F10010", r, e, s, a),
            u = O(i),
            c = "68" + _(r) + "681C" + u + i;
        return (c + k(c) + "16").toUpperCase()
    }

    function R(r, e) {
        var s = function(r, e, s) {
                var a = _(r) + _(e) + _(U(s, 18)),
                    i = k(a);
                return I(t(a += i, n))
            }("00F10011", r, e),
            a = O(s),
            i = "68" + _(r) + "681C" + a + s;
        return (i + k(i) + "16").toUpperCase()
    }

    function C(r) {
        return function(r) {
            var e = {
                code: "",
                msg: ""
            };
            switch (e.code = r, r) {
                case "00":
                    e.code = 200, e.msg = "操作成功";
                    break;
                case "91":
                    e.msg = "档案已满";
                    break;
                case "92":
                    e.msg = "该卡片已被其他用户绑定";
                    break;
                case "9A":
                    e.msg = "射频卡id不合法";
                    break;
                case "74":
                    e.msg = "绑定表号不对";
                    break;
                case "98":
                    e.msg = "有卡消费未上传";
                    break;
                default:
                    e.msg = "未知异常"
            }
            return u = e, e
        }(e(h(r.substring(20, r.length - 4)), n).substring(8, 10))
    }

    function _(r) {
        for (var e = "", t = r.length - 2; t >= 0; t -= 2) e += r.substr(t, 2);
        return e
    }

    function I(r) {
        for (var e = "", t = Array.from(r), n = t.length, s = 0; s < n / 2; s++) {
            var a = (parseInt(t.splice(0, 2).toString().replace(",", ""), 16) + 51).toString(16),
                i = a.length;
            e += a.substring(i - 2)
        }
        return e.toUpperCase()
    }

    function h(r) {
        for (var e = "", t = Array.from(r), n = t.length, s = 0; s < n / 2; s++) {
            var a = parseInt(t.splice(0, 2).toString().replace(",", ""), 16);
            a < 51 && (a += 256);
            var i = (a - 51).toString(16);
            1 == i.length && (i = "0" + i);
            var u = i.length;
            e += i.substring(u - 2)
        }
        return e.toUpperCase()
    }

    function k(r) {
        for (var e = function(r) {
                for (var e = r.length / 2, t = new Array(e), n = 0; n < e; n++) {
                    var s = r.substring(2 * n, 2 * n + 2),
                        a = parseInt(s, 16);
                    a >= 128 && (a -= 256), t[n] = a
                }
                return t
            }(r), t = 0, n = 0; n < e.length; n++) {
            var s = e[n];
            s < 0 ? t = t + s + 256 : t += s
        }
        var a = (t % 256).toString(16);
        return 2 != a.length && (a = "0" + a), a.toUpperCase()
    }

    function T(r) {
        return null == r || 0 == r.length
    }

    function B(r) {
        return Array.from(r).reverse().join("")
    }

    function L(r, e) {
        for (var t = {
                total: "",
                orderList: ""
            }, n = function(r) {
                for (var e = Array.from(B(r.replace(s, ""))), t = "", n = 0; n < e.length; n++) {
                    var a = parseInt(e[n], 16).toString(2);
                    if (n != e.length - 1)
                        for (; a.length < 4;) a = "0" + a;
                    t += a = B(a)
                }
                return t
            }(r), a = Array.from(n), i = new Array, u = 0, c = 0; c < a.length; c++)
            if (1 == a[c]) {
                u++;
                var g = (c + 1 + e).toString(16);
                g.length < 2 && (g = "0" + g), i.push(g.toUpperCase())
            }
        return t.total = u, t.orderList = i, t
    }

    function N(r) {
        var e = r.length,
            t = parseInt(e / 16),
            n = r;
        if (e % 16 != 0) {
            var s = 16 * (t + 1) - e;
            n += "8";
            for (var a = 0; a < s - 1; a++) n += "0"
        }
        return n
    }

    function O(r) {
        var e = parseInt(r.length / 2).toString(16);
        return 2 == e.length ? e : "0" + e
    }

    function U(r, e) {
        if (r.length < e)
            for (var t = e - r.length, n = 0; n < t; n++) r = "0" + r;
        return r
    }

    function S(r) {
        if (r.length <= 36) return n = 1 == (s = (r.length / 2 + 1).toString(16)).length ? "0" + s + "05" + r : s + "05" + r;
        for (var e = [], t = 0; t < r.length; t += 36) {
            var n;
            if (0 == t) n = "1345" + r.substring(t, t + 36);
            else if (t + 36 >= r.length) {
                var s;
                n = 1 == (s = (r.substring(t).length / 2 + 1).toString(16)).length ? "0" + s + "C5" + r.substring(t) : s + "C5" + r.substring(t)
            } else n = "1385" + r.substring(t, t + 36);
            e.push(n)
        }
        return e
    }

    function F(r) {
        return null === r || 12 != r.length ? r : r.replace(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/, "20$1-$2-$3 $4:$5:$6")
    }
    module.exports = {
        getData: function(r) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            i = "";
            var t = e.userId,
                n = e.deviceId,
                s = {
                    code: "200",
                    command: "",
                    msg: ""
                };
            switch (r) {
                case c.PAIR_DEVICE:
                    return s.command = c.PAIR_DEVICE, s;
                case c.READ_ORDER_TABLE:
                    s.command = b(c.READ_ORDER_TABLE, n);
                    break;
                case c.OPEN_VALUE:
                    var a = e.openTime;
                    s.command = A(t, n, a, g, o, m, l, d);
                    break;
                case c.CLOSE_VALUE:
                    a = e.openTime;
                    s.command = E(t, n, a, g);
                    break;
                case c.READ_ORDER_DETAIL:
                    var u = e.billId,
                        D = e.type;
                    s = f(n, u, D);
                    break;
                case c.CONFIRM_ORDER:
                    var C = e.orderId,
                        _ = e.startTime;
                    s.command = v(n, t, C, _);
                    break;
                case c.READ_CARD_TABLE:
                    s.command = b(c.READ_CARD_TABLE, n);
                    break;
                case c.READ_CARD_NO:
                    s.command = b(c.READ_CARD_NO, n);
                    break;
                case c.BIND_CARD:
                    var I = e.cardNo,
                        h = e.rfId;
                    s.command = p(n, t, I, h);
                    break;
                case c.UNBIND_CARD:
                    s.command = R(n, t)
            }
            return s.command = S(s.command), s
        },
        getBackData: function(r, t) {
            var u, g = function(r) {
                var e;
                "05" == r.substring(2, 4) && (e = r.substring(4), i = "");
                "45" == r.substring(2, 4) && (i = r.substring(4));
                "85" == r.substring(2, 4) && (i += r.substring(4));
                "C5" == r.substring(2, 4) && (e = i + r.substring(4), i = "");
                return e
            }(t);
            switch (r) {
                case c.PAIR_DEVICE:
                    u = {
                        code: "200",
                        msg: "配对成功"
                    };
                    break;
                case c.READ_ORDER_TABLE:
                    g && (u = function(r) {
                        var e = h(_(r.substring(28, 68))),
                            t = {
                                code: "",
                                blueBillNum: "",
                                blueBillIdList: "",
                                cardBillNum: "",
                                cardBillList: "",
                                msg: ""
                            },
                            n = r.substring(16, 18);
                        if (n.substring(), "91" == n) {
                            t.code = 200, t.msg = "success";
                            var s = _((e = h(r.substring(28, 68))).substring(0, 30)),
                                a = _(e.substring(30, 38));
                            if (T(s)) t.blueBillNum = 0;
                            else {
                                var i = L(s, 0);
                                t.blueBillNum = i.total, t.blueBillIdList = i.orderList
                            }
                            if (T(a)) t.cardBillNum = 0;
                            else {
                                var u = L(a, 120);
                                t.cardBillNum = u.total, t.cardBillList = u.orderList
                            }
                        } else t.code = 500, t.msg = "error！";
                        return t
                    }(g));
                    break;
                case c.OPEN_VALUE:
                case c.CLOSE_VALUE:
                    g && (u = D(g));
                    break;
                case c.READ_ORDER_DETAIL:
                    g && (u = function(r) {
                        var t = {
                            code: "",
                            identifier: "",
                            billType: "",
                            orderId: "",
                            rfId: "",
                            userId: "",
                            startTime: "",
                            endTime: "",
                            useTime: "",
                            useQuantity: "",
                            temp: "",
                            msg: ""
                        };
                        if ("9C" == r.substring(16, 18)) {
                            t.code = 200;
                            var a = e(h(r.substring(20, r.length - 4)), n),
                                i = _(a.substring(0, 8));
                            t.identifier = i;
                            var u = _(a.substring(8, 20));
                            t.deviceId = u;
                            var c = a.substring(20, 22);
                            t.billType = c;
                            var g = a.substring(22, 24);
                            t.orderId = g;
                            var o = _(a.substring(24, 34));
                            t.rfId = o;
                            var m = _(a.substring(34, 52)).replace(s, "");
                            t.userId = m;
                            var l = _(a.substring(52, 64));
                            t.startTime = l;
                            var d = _(a.substring(64, 76));
                            t.endTime = d;
                            var b = _(a.substring(76, 84)).replace(s, "");
                            null != b && "" != b || (b = "0"), t.useTime = b;
                            var f = _(a.substring(84, 92)).replace(s, "");
                            T(f) && (f = "0"), t.useQuantity = f;
                            var v = _(a.substring(92, 96)).replace(s, "");
                            if (T(v)) v = 0;
                            else {
                                var A = v.substring(0, v.length - 1);
                                A = A + "." + v.substring(v.length - 1), v = A
                            }
                            t.temp = v, t.msg = "读取账单详情成功！"
                        } else t.code = 501, t.msg = "单号错误！";
                        return t
                    }(g));
                    break;
                case c.CONFIRM_ORDER:
                    g && (u = function(r) {
                        var e = {
                            code: "",
                            msg: ""
                        };
                        return "9C" == r.substring(16, 18) ? (e.code = 200, e.msg = "清除成功") : (e.code = 505, e.msg = "清除失败，请检查清除指令参数"), e
                    }(g));
                    break;
                case c.READ_CARD_TABLE:
                    g && (u = function(r) {
                        var e = {
                            code: "",
                            bindUserNum: "",
                            userIdList: "",
                            msg: ""
                        };
                        if ("91" == r.substring(16, 18)) {
                            e.code = 200;
                            for (var t = r.substring(r.length - 284, r.length - 4), n = t.length / 28, i = 0, u = new Array, c = 0; c < n; c++) {
                                var g = h(t.substring(28 * c, 28 * c + 28)),
                                    o = g.substring(0, 18),
                                    m = g.substring(18, 28);
                                if (!T(o.replace(a, ""))) {
                                    i++;
                                    var l = _(o).replace(s, ""),
                                        d = m.replace(a, "");
                                    u.push(l), e[l] = d
                                }
                            }
                            e.bindUserNum = i, e.userIdList = u, e.msg = "读取绑卡列表成功"
                        } else e.code = 503, e.msg = "读取绑卡列表失败";
                        return e
                    }(g));
                    break;
                case c.READ_CARD_NO:
                    g && (u = function(r) {
                        var e = {
                                code: "",
                                cardNo: "",
                                rfId: "",
                                msg: ""
                            },
                            t = r.substring(16, 18),
                            n = h(r.substring(20, r.length - 4));
                        if ("91" == t) {
                            var s = n.substring(8, 18),
                                i = n.substring(18, 42),
                                u = s.replace(a, ""),
                                c = i.replace(a, "");
                            T(u) || T(c) ? (e.code = "500", e.title = "请放置卡片", e.msg = "请把卡片重新放置水表上，然后重试") : (e.code = 200, e.rfId = s, e.cardNo = i, e.msg = "读取射频卡id和卡号成功")
                        } else e.code = 500, e.msg = "读卡未知异常！";
                        return e
                    }(g));
                    break;
                case c.BIND_CARD:
                case c.UNBIND_CARD:
                    g && (u = C(g))
            }
            return u
        },
        makeData: function(r, e) {
            return {
                ShutValveState: u.code,
                MeterAddr: e,
                ConsumeId: r.startTime,
                ConsumeType: "00" == r.billType ? 1 : 0,
                UserId: r.userId,
                CardSn: r.rfId,
                UseAmount: r.useQuantity,
                Temperature: r.temp,
                StartTime: F(r.startTime),
                EndTime: F(r.endTime),
                UseTime: r.useTime
            }
        },
        CMD: c
    };
});
define("F143BE6694FC73BF9725D661EB27E8C0.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var n = require("24B5604294FC73BF42D308457C37E8C0.js"),
        t = require("A6CC3C9394FC73BFC0AA54949A67E8C0.js"),
        e = t.showModal,
        r = t.showToast,
        u = t.showLoading,
        i = t.hideLoading,
        c = t.loadingTitle,
        o = require("CE76404694FC73BFA81028419976E8C0.js"),
        s = o.log,
        f = (o.error, require("27F6CAB394FC73BF4190A2B46A86E8C0.js")),
        a = f.query,
        h = f.disconnect,
        d = require("25B9627594FC73BF43DF0A720987E8C0.js"),
        g = d.bindUserCardCheck,
        l = d.getIsArrearage,
        M = d.GetDeviceEnable,
        v = d.NBOpenProcess,
        m = d.isPayOffPage,
        p = (d.GetAccessToken, d.ConsumeData),
        w = require("101E33B294FC73BF76785BB557A6E8C0.js").XIN_TIAN,
        A = require("C2427CC194FC73BFA42414C6A277E8C0.js"),
        N = null,
        x = getApp();

    function P(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return new Promise((function(u, i) {
            n.getData(t).then((function(c) {
                !0 !== c ? a(x.device, c, (function(c, o, f) {
                    if ("读取成功" == c) {
                        var a = n.dealNotify(o);
                        a && (f && f(), n.getDataBack(t, a).then((function(n) {
                            if (s(t + "解析", n.errMsg || "OK"), n.status || "key值异常" != n.errMsg || e) u(n);
                            else {
                                var r = t;
                                P("1004").then((function(n) {
                                    P(r, 1).then((function(n) {
                                        u(n)
                                    })).catch((function(n) {
                                        i(n)
                                    }))
                                }))
                            }
                        })).catch((function(n) {
                            i(n)
                        })))
                    } else s(r + "失败", t, o), "OK" == c.toUpperCase ? i({
                        title: "连接失败",
                        errMsg: "未能找到要连接的设备",
                        toNB: !0
                    }) : i({
                        title: c,
                        errMsg: o,
                        toNB: !0
                    })
                })) : u(!0)
            })).catch((function(n) {
                i(n)
            }))
        }))
    }

    function b(n) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        u("查询中", "index"), 1 == ++t && M(x.device.bAddr), P("100B").then((function(e) {
            e.data.orderNum ? (s("采集消费记录", e), q(e.data.orderArr, (function(e, r) {
                e ? b(n, t) : n(r ? {
                    status: !1,
                    errMsg: r
                } : {
                    status: !0,
                    errMsg: ""
                })
            }))) : e.status ? n({
                status: !0,
                errMsg: ""
            }) : n({
                status: !1,
                errMsg: "上传消费记录失败"
            })
        })).catch((function(t) {
            s("100B", t), n({
                status: !1
            })
        }))
    }

    function q(n, t) {
        p(w, n).then((function(n) {
            1 == n.Result && m() && t ? l((function() {
                t(!0)
            })) : t && t(!0)
        })).catch((function(n) {
            t && t(!1)
        }))
    }
    module.exports = {
        switching: function(t, o, f, a) {
            if (x || (x = getApp()), N = o, "开阀" == t) {
                if (u("开阀中..." == c ? c : "连接中...", "index"), "nb" == f) return void v(w).then((function(n) {
                    A.setStorageSync("nbOpen", 1), N(!0), i()
                })).catch((function(n) {
                    return N(!1, n)
                }));
                P("1001", 0, t).then((function(n) {
                    return P("1004", 0, t)
                })).then((function(n) {
                    return P("1005")
                })).then((function(n) {
                    if ("10051" == n.code) return new Promise((function(n, t) {
                        b((function(e) {
                            e.status ? n() : (o(!1), t(e))
                        }))
                    }));
                    throw o(n.status, n), "已开阀"
                })).then((function(n) {
                    return M(x.device.deviceName)
                })).then((function(n) {
                    return P("2004")
                })).then((function(n) {
                    return P("2005")
                })).then((function(n) {
                    n.status && i(), o(n.status, n)
                })).catch((function(n) {
                    s(t + "错误a", n), n.toNB ? v(w, n).then((function(n) {
                        A.setStorageSync("nbOpen", 1), o(!0)
                    })).catch((function(n) {
                        return o(!1, n)
                    })) : n && n.errMsg ? o(!1, n) : i()
                }))
            } else "关阀" == t ? (u("关阀中...", "index"), P("1005").then((function(n) {
                if ("10052" == n.code) return P("2006");
                throw o(n.status, n), ""
            })).then((function(n) {
                n.status && q(n.data.orderArr), o(n.status, n)
            })).catch((function(n) {
                s(t + "错误b", n), n && "返回超时" == n.title ? e("", "请按水控器蓝色按键3秒以上直至显示0！").then((function(n) {
                    o(!0)
                })) : n && n.errMsg ? o(!1, n) : i()
            }))) : 0 == t.indexOf("绑定") ? ("绑定" == t && u("连接中...", "index"), P("1001").then((function(n) {
                return P("1007")
            })).then((function(n) {
                return P("100F")
            })).then((function(n) {
                s("解析结果", n), o(n)
            })).catch((function(n) {
                s(t + "错误c", n), n && n.errMsg && o(!1, n)
            }))) : "设置" == t ? u("连接中...", "index") : 0 == t.indexOf("采集") ? (u("连接中...", "index"), P("1001").then((function(n) {
                return P("1004")
            })).then((function(n) {
                b((function(n) {
                    var t = "采集成功";
                    n.status || (t = "采集失败"), r(t), o(n)
                }))
            })).catch((function(n) {
                s(t + "错误c", n), n && n.errMsg && o(!1, n)
            }))) : "查询" == t ? (u("查询中"), P("1001").then((function(n) {
                return P("1005")
            })).then((function(n) {
                return new Promise((function(n, t) {
                    b((function(e) {
                        e.status ? n() : (o(!1), t(e))
                    }))
                }))
            })).then((function(n) {
                i(), o(n.status, n)
            })).catch((function(n) {
                s(t + "错误c", n), n && n.errMsg ? o(!1, n) : i()
            }))) : "绑卡" == t ? (u("进入绑定模式"), P("1001").then((function(n) {
                return P("200A")
            })).then((function(n) {
                return e("", "水表已进入绑卡模式，请把卡片放在感应区，然后点击下一步", "", "下一步")
            })).then((function(n) {
                return new Promise((function(n, t) {
                    ! function n(t) {
                        u("读卡中"), P("1008").then((function(r) {
                            parseInt(r.data.cardNum, 16) > 0 ? g(w, r.data.cardNum, (function(n) {
                                t(n)
                            })) : e("读卡失败", "请把卡片放置感应区，重新操作", "取消", "重试").then((function(e) {
                                e ? n(t) : t({
                                    status: !1
                                })
                            }))
                        }))
                    }((function(e) {
                        e.status ? n(e) : t(e)
                    }))
                }))
            })).then((function(n) {
                return u("读白名单"), P("100A")
            })).then((function(n) {
                return u("获取秘钥"), P("1004")
            })).then((function(t) {
                return u("绑卡中"), new Promise((function(t, e) {
                    n.setWiteList(0, (function() {
                        P("2009").then((function(n) {
                            return t(n)
                        })).catch((function(n) {
                            return e(n)
                        }))
                    }))
                }))
            })).then((function(n) {
                s("绑卡结果", n), o(n), h()
            })).catch((function(n) {
                s(t + "错误c", n), n && n.errMsg ? o(!1, n) : i()
            }))) : "解绑" == t && (u("解绑中"), P("1001").then((function(n) {
                return u("读白名单"), P("100A")
            })).then((function(n) {
                return "100A1" != n.code || x.isTest() || s("--", "已解绑"), u("获取秘钥"), P("1004")
            })).then((function(n) {
                return new Promise((function(n, t) {
                    b((function(e) {
                        e.status ? n() : t(e)
                    }))
                }))
            })).then((function(t) {
                return u("解绑中"), new Promise((function(t, e) {
                    n.setWiteList(1, (function() {
                        P("2009").then((function(n) {
                            return t(n)
                        })).catch((function(n) {
                            return e(n)
                        }))
                    }))
                }))
            })).then((function(n) {
                o(n)
            })).catch((function(n) {
                s(t + "错误c", n), n && n.errMsg ? o(!1, n) : i()
            })))
        }
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
define("app.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = null,
        t = [];

    function o() {
        var e = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
            var o = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16), ("x" == t ? o : 3 & o | 8).toString(16)
        }))
    }
    App({
        web: "https://smarth5.gzuci.com/UserCenter/",
        botId: "",
        api: "https://hwsmart.gzuci.com/api/",
        apiMH: "https://hwsmart.gzuci.com:8443/api/",
        bot: {
            name: "广州大学城智慧热水",
            id: "110002067850001",
            appId: "wx2ad5ae883d58ac64",
            cloud: "-wfucy",
            kefu: "4008876540"
        },
        index: null,
        userId: "",
        phone: "",
        roomName: "",
        isRealName: !1,
        IsInstallationWork: !1,
        EncryptedPassword: "",
        deposited: !1,
        activated: !1,
        unblocked: !1,
        surplus: !1,
        totalAmount: 0,
        maxAmount: 20,
        logouted: !1,
        DeviceEnable: !0,
        cardId: "",
        cardSt: 0,
        willLogin: !0,
        uuid: "",
        device: {
            deviceId: "",
            deviceName: "",
            deviceMac: "",
            factoryName: "",
            machineid: "",
            bAddr: "",
            type: "",
            version: ""
        },
        factory: {},
        deviceWater: null,
        deviceAir: null,
        userMsg: {},
        platform: "",
        isBinding: !1,
        testDevice: !1,
        secretPhone: function() {
            return 11 == this.phone.length ? this.phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2") : this.phone
        },
        wxData: null,
        wxCard: null,
        hasNet: !0,
        isTestHost: !1,
        openingData: null,
        hasAlarm: !1,
        onLaunch: function() {
            (e = this).botId = e.bot.id, e.uuid = wx.getStorageSync("uuid"), e.uuid || (e.uuid = o(), wx.setStorageSync("uuid", e.uuid));
            var t = wx.getSystemInfoSync();
            this.platform = t.platform.toLowerCase(), e.hasAlarm = !1
        },
        allOK: function() {
            return this.deposited && this.unblocked && this.surplus && !this.logouted
        },
        checkLogin: function(t) {
            r("加载中..."), wx.checkSession({
                success: function() {
                    e.userId = wx.getStorageSync("userId"), e.userId ? (e.phone = wx.getStorageSync("phone"), e.isRealName = wx.getStorageSync("isRealName"), e.activated = wx.getStorageSync("activated"), e.unblocked = wx.getStorageSync("unblocked"), e.logouted = wx.getStorageSync("logout"), e.device = wx.getStorageSync("device"), e.IsInstallationWork = wx.getStorageSync("IsInstallationWork"), e.EncryptedPassword = wx.getStorageSync("EncryptedPassword"), new Promise((function(e) {
                        e()
                    }))).then((function() {
                        if (e.IsInstallationWork) {
                            var o = f + "Logon?userId=" + e.userId + "&encryptedPassword=" + e.EncryptedPassword,
                                a = "../browser/browser?url=" + encodeURIComponent(o) + "&installer=1";
                            wx.redirectTo({
                                url: a
                            })
                        } else e.isRealName ? e.checkState(t) : e.showModal("", "实名认证后才能正常使用！", "退出登录", "实名认证").then((function(t) {
                            t ? wx.redirectTo({
                                url: "../realName/realName?userId=" + e.userId
                            }) : e.logout()
                        }))
                    })) : i()
                },
                fail: function() {
                    i()
                }
            })
        },
        checkState: function(t, o) {
            var a = m + "users/UserStatusInfo?userID=" + e.userId + "&uuid=" + e.uuid;
            e.request({
                url: a,
                method: "GET",
                success: function(a) {
                    var n = a.data;
                    if (n.status) {
                        if (!v(a)) return;
                        l("用户状态", n), e.userMsg = n, e.deposited = 2 == n.CashDepSatus, wx.setStorageSync("deposited", e.deposited), e.activated = n.Mac, wx.setStorageSync("activated", e.activated), e.unblocked = 1 == n.UserStatus, wx.setStorageSync("unblocked", e.unblocked), e.logouted = n.OutsideLogin, wx.setStorageSync("logout", e.logouted), e.cardId = n.ICCardNum, e.cardSt = n.ICCardStatus;
                        var r = n.Mac,
                            c = n.MacName,
                            s = S(c || r, r),
                            u = s.name;
                        e.deviceWater = {
                            deviceId: "",
                            deviceName: n.BluetoothName || n.MacName,
                            deviceMac: r || "",
                            factoryName: u,
                            machineid: n.MachineSN,
                            nbid: n.NbId,
                            type: n.DeviceType,
                            version: n.DeviceVersion,
                            WhiteMac: n.WhiteMac
                        }, e.factory = s, n.VrvMachineModes && (e.deviceAir = {
                            deviceId: "",
                            deviceName: n.VrvMachineModes.Mac ? n.VrvMachineModes.Mac.replace(/:/g, "").toUpperCase() : "",
                            deviceMac: n.VrvMachineModes.Mac ? n.VrvMachineModes.Mac : "",
                            machineid: n.VrvMachineModes.MachineSN,
                            nbid: n.VrvMachineModes.NbId,
                            type: n.VrvMachineModes.DeviceType,
                            version: n.VrvMachineModes.DeviceVersion
                        }), e.postDevice(), i(), e.roomName = (n.SchoolName ? n.SchoolName : "") + " " + n.HouseName + " " + n.DormitoryNo, o && o.deviceMac == r || (e.device = e.deviceWater, wx.setStorageSync("device", e.device));
                        var d = e.page("index");
                        d && (e.device = e.deviceWater, d.setData({
                            roomName: e.roomName
                        }));
                        var h = e.page("air");
                        h && (!o || n.VrvMachineModes && o.deviceMac != n.VrvMachineModes.Mac) && (e.deviceAir && (e.device = e.deviceAir), wx.setStorageSync("device", e.device)), e.logouted ? (wx.removeStorageSync("WXLoginInfo"), e.logout()) : e.unblocked ? e.surplus || !d && !h ? t && t() : e.showModal("待支付订单超额", "待支付订单超过授信额度，请支付订单。", "", "去支付", (function() {
                            wx.switchTab({
                                url: "../bill/bill"
                            })
                        })) : e.showModal("账户被屏蔽", "账户已经被屏蔽，如有疑问请联系客服。", "", "退出程序", (function() {
                            wx.navigateBack({
                                delta: 1
                            })
                        }))
                    } else if (g("用户状态", n), !o) {
                        var f = e.errormsg(a);
                        f && f.indexOf("用户ID不存在") >= 0 ? e.logout() : e.showModal("", f, "取消", "重试", (function() {
                            e.checkState()
                        }))
                    }
                },
                fail: function(t) {
                    g("用户状态", t), o || e.showModal("获取状态失败", t, "取消", "重试", (function() {
                        e.checkState()
                    }))
                }
            })
        },
        uploadimg: function(e) {
            var t = this,
                o = e.i ? e.i : 0,
                a = e.success ? e.success : 0,
                n = e.fail ? e.fail : 0;
            wx.uploadFile({
                url: e.url,
                filePath: e.path[o],
                name: "fileData",
                formData: null,
                success: function(e) {
                    a++
                },
                fail: function(e) {
                    n++
                },
                complete: function() {
                    ++o == e.path.length || (e.i = o, e.success = a, e.fail = n, t.uploadimg(e))
                }
            })
        },
        errormsg: function(e) {
            return u(e)
        },
        postDevice: function() {
            if (this.userId && (e.uuid = wx.getStorageSync("uuid"), e.uuid || (e.uuid = o(), wx.setStorageSync("uuid", e.uuid)), !wx.getStorageSync(e.uuid + this.userId))) {
                var t = wx.getSystemInfoSync();
                e.request({
                    url: m + "users/AddWXDeviceRecord",
                    data: {
                        userId: e.userId,
                        uuid: e.uuid,
                        mod: t.brand + " " + a(t.model),
                        osv: t.system,
                        sdkv: t.SDKVersion,
                        wxv: t.version
                    },
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    success: function(t) {
                        t.data.status ? wx.setStorageSync(e.uuid + e.userId, !0) : g("手机型号", t.data)
                    },
                    fail: function(e) {
                        g("手机型号", e)
                    }
                })
            }
        },
        isTest: function() {
            for (var e in t)
                if (t[e] == this.phone) return !0;
            return !1
        },
        showModal: function(e, t, o, a, n, r) {
            return c(e, t, o, a, n, r, "app")
        },
        showLoading: function(e, t) {
            r(e, t)
        },
        hideLoading: function(e) {
            i(e)
        },
        showToast: function(e, t) {
            s(e, t)
        },
        log: function(e, t) {
            l(e, t)
        },
        page: function(e) {
            for (var t = getCurrentPages(), o = 0; o < t.length; o++) {
                var a = t[o];
                if (a.route.indexOf("/" + e + "/" + e) > -1) return a
            }
        },
        userInfo: function(t, o) {
            e.userInfoNeedUpdate = !1, t && r(t), e.request({
                url: m + "users/GetUserInfo?uid=" + e.userId,
                method: "GET",
                success: function(a) {
                    if (t && e.hideLoading(), a.data.status) {
                        var n = a.data.data,
                            r = n.SchoolName + " " + n.HouseName + " " + n.DormitoryNo,
                            i = n.UserName,
                            s = e.page("userCenter");
                        if (s) {
                            var u = {
                                nickName: i,
                                roomName: r,
                                loginName: n.LoginName,
                                moenyStatus: n.MoenyStatus
                            };
                            s && s.setData(u)
                        }
                        e.roomName = r;
                        var d = e.page("repairDetail"),
                            l = e.page("userdetail");
                        if (d || l) {
                            var S = {
                                schoolStr: "null" != n.CityName ? n.SchoolName : "未选择",
                                schoolAreStr: "null" != n.AreaName ? n.AreaName : "未选择",
                                schoolHouseStr: "null" != n.HouseName ? n.HouseName : "未选择",
                                schoolFloorStr: "null" != n.FloorNo ? n.DormitoryFloorNo : "未选择",
                                schoolRoomStr: "null" != n.RoomNo ? n.DormitoryNo : "未选择",
                                userName: n.UserName,
                                loginName: n.LoginName,
                                userId: n.UserId,
                                gender: n.Gender,
                                moenyStatus: n.MoenyStatus
                            };
                            d && d.setData(S), l && l.setData(S)
                        }
                        wx.setStorageSync("schoolId", n.SchoolId), o && o(n)
                    } else t && (g("个人信息", a.data), c("加载失败", a, "取消", "重试", (function() {
                        e.userInfo(t)
                    })))
                },
                fail: function(o) {
                    g("个人信息", o), t && c("请求错误", o, "取消", "重试", (function() {
                        e.userInfo(t)
                    }))
                }
            })
        },
        onConnectTap: function(e, t) {
            var o = e.currentTarget.dataset.device,
                a = function() {
                    t(o)
                };
            ! function() {
                if (o.RSSI < -85) {
                    var e = "水表信号较弱，可能导致连接失败，请靠近一点水表再继续。\n>> 水表编号：" + o.deviceMac + "\n>> 信号强度：" + o.RSSI;
                    c("水表信号较弱", e, "取消", "继续", (function() {
                        a()
                    }))
                } else a()
            }()
        },
        logout: function() {
            var e = this;
            wx.reLaunch({
                url: "../binding/binding",
                success: function(t) {
                    e.userId = "", e.roomName = "", e.device = {
                        deviceId: "",
                        deviceName: "",
                        deviceMac: "",
                        factoryName: "",
                        machineid: "",
                        bAddr: "",
                        type: "",
                        version: ""
                    };
                    var o = wx.getStorageSync("uuid"),
                        a = wx.getStorageSync("appkey"),
                        n = wx.getStorageSync("pwdCheck"),
                        r = wx.getStorageSync("WXLoginInfo"),
                        i = wx.getStorageSync("isChecked");
                    wx.clearStorageSync(), wx.setStorageSync("uuid", o), a && (wx.setStorageSync("appkey", a), wx.setStorageSync(a, !0)), n && wx.setStorageSync("pwdCheck", n), r && wx.setStorageSync("WXLoginInfo", r), i && wx.setStorageSync("isChecked", i)
                }
            })
        },
        request: function(t) {
            e.userId ? wx.request(t) : e.loginTips()
        },
        loginTips: function() {
            if (!e.userId) return e.showModal("温馨提示", "使用相关功能需要先登录", "暂不登录", "去登录").then((function(t) {
                t && e.logout()
            })), !0
        }
    });
    var a = function(e) {
        return e = (e = e.replace(/</g, "‹")).replace(/>/g, "›")
    };
    var n = require("A6CC3C9394FC73BFC0AA54949A67E8C0.js"),
        r = n.showLoading,
        i = n.hideLoading,
        c = n.showModal,
        s = n.showToast,
        u = n.errormsg,
        d = require("CE76404694FC73BFA81028419976E8C0.js"),
        l = d.log,
        g = d.error,
        S = require("101E33B294FC73BF76785BB557A6E8C0.js").getFactory,
        h = require("961D3B4394FC73BFF07B53440C77E8C0.js"),
        f = h.WEB_UC,
        m = h.API_CO,
        v = require("ADC3732294FC73BFCBA51B256556E8C0.js").isVerified;
});
require("app.js");
__wxRoute = 'Component/my-news/my-news';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'Component/my-news/my-news.js';
define("Component/my-news/my-news.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../CE76404694FC73BFA81028419976E8C0.js"),
        e = require("../../961D3B4394FC73BFF07B53440C77E8C0.js"),
        s = getApp(),
        a = null;
    Component({
        properties: {
            isGetted: {
                type: Boolean,
                value: !1
            }
        },
        data: {
            list: []
        },
        observers: {
            isGetted: function(t) {
                t && this.getMsgList()
            }
        },
        lifetimes: {
            attached: function() {
                a = this
            }
        },
        methods: {
            linkTo: function(t) {
                var e = t.currentTarget.dataset.url;
                wx.navigateTo({
                    url: e
                })
            },
            getMsgList: function() {
                var i = s.userId ? s.userId : "130002051630001",
                    r = e.API_CO + "message/GetMsgList?uid=" + i + "&pageIndex=1";
                wx.request({
                    url: r,
                    success: function(e) {
                        var s = e.data;
                        if (s.status) {
                            for (var i = [], r = 0; r < s.data.length; r++) r < 5 && (i[r] = s.data[r], i[r].time = s.data[r].time.substr(0, 10));
                            a.setData({
                                list: i
                            })
                        } else(0, t.error)("消息列表", s)
                    },
                    fail: function(e) {
                        (0, t.error)("消息列表", e), s.showModal("", e, "取消", "重试", (function() {
                            a.getMsgList()
                        }))
                    }
                })
            }
        }
    });
});
require("Component/my-news/my-news.js");
__wxRoute = 'Component/privacy/privacy';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'Component/privacy/privacy.js';
define("Component/privacy/privacy.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    Component({
        properties: {},
        data: {
            showPrivacy: !1
        },
        lifetimes: {
            created: function() {}
        },
        pageLifetimes: {
            show: function() {
                var t = this;
                wx.getPrivacySetting && wx.getPrivacySetting({
                    success: function(e) {
                        console.log(e), t.setData(e)
                    }
                })
            }
        },
        methods: {
            getPrivacySetting: function(t) {
                var e = this;
                this.callback = t, wx.getPrivacySetting ? wx.getPrivacySetting({
                    success: function(i) {
                        console.log(i), e.setData(i), i.needAuthorization ? (wx.hideLoading(), e.setData({
                            showPrivacy: !0,
                            contractName: i.privacyContractName
                        })) : t()
                    },
                    fail: function() {
                        t()
                    }
                }) : t()
            },
            handleOpen: function(t) {
                wx.openPrivacyContract()
            },
            handleDisagree: function(t) {
                this.setData({
                    showPrivacy: !1
                })
            },
            handleAgree: function(t) {
                this.setData({
                    showPrivacy: !1,
                    needAuthorization: !1
                }), this.callback()
            }
        }
    });
});
require("Component/privacy/privacy.js");
__wxRoute = 'pages/home/home';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/home/home.js';
define("pages/home/home.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../@babel/runtime/helpers/slicedToArray"),
        t = getApp(),
        a = require("../../25B9627594FC73BF43DF0A720987E8C0.js"),
        n = a.getIsArrearage,
        r = a.checkArrearage15,
        i = a.GetAdvertList,
        o = require("../../C9B02F2594FC73BFAFD64722A696E8C0.js"),
        s = require("../../24B5604294FC73BF42D308457C37E8C0.js").myDataSet,
        u = (require("../../A6CC3C9394FC73BFC0AA54949A67E8C0.js").updateUI, null);
    Page({
        data: {
            isGetted: !0
        },
        onLoad: function(e) {
            u = this, i((function(e) {
                u.setData({
                    ads: e
                })
            })), t.willLogin && t.checkLogin((function() {
                u.setData({
                    isGetted: !0
                }), s(t), r(), 1 == t.userMsg.CashDepSatus && t.showModal("", "您已提交授信金退款申请，目前仍在处理中，如需用水，请取消退款申请！")
            })), t.isBinding = !1
        },
        onShow: function() {},
        onShareAppMessage: function() {
            return {}
        },
        linkTo: function(a) {
            var r = a.currentTarget.dataset.url;
            r && r.indexOf("repairDetail") > -1 ? wx.navigateToMiniProgram({
                appId: "wx3f0476bf0c044a7f"
            }) : r && r.indexOf("/air/") > -1 ? t.showModal("", "敬请期待") : t.userId ? 1 == t.userMsg.ICCardStatus || 1 == t.userMsg.SchoolId || 8 == t.userMsg.SchoolId || 5 == t.userMsg.SchoolId ? (t.showLoading("加载中..."), this.selectComponent("#privacy").getPrivacySetting((function() {
                t.showLoading("加载中..."), n((function() {
                    o.openBluetooth().then((function() {
                        t.hideLoading(), wx.navigateTo({
                            url: r
                        })
                    })).catch((function(a) {
                        var n = e(a, 2),
                            r = n[0],
                            i = n[1];
                        t.showModal(r, i)
                    }))
                }))
            }))) : t.showModal("", "请绑定卡片后再进行该操作").then((function(e) {
                wx.switchTab({
                    url: "../userCenter/userCenter"
                })
            })) : wx.navigateTo({
                url: r
            })
        },
        clickAds: function(e) {
            var t = e.currentTarget.dataset.link;
            if (t && 0 == t.indexOf("http")) {
                var a = "../browser/browser?url=" + encodeURIComponent(t);
                wx.navigateTo({
                    url: a
                })
            } else t && 0 == t.indexOf("pages") && wx.navigateTo({
                url: "../../" + t
            })
        }
    });
});
require("pages/home/home.js");
__wxRoute = 'pages/index/index';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/index/index.js';
define("pages/index/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../@babel/runtime/helpers/typeof"),
        t = getApp(),
        n = require("../../C372FB5794FC73BFA51493505AB6E8C0.js"),
        i = require("../../27F6CAB394FC73BF4190A2B46A86E8C0.js"),
        o = require("../../25B9627594FC73BF43DF0A720987E8C0.js"),
        a = require("../../F66EF4C094FC73BF90089CC7F697E8C0.js").getUrlParam,
        c = require("../../961D3B4394FC73BFF07B53440C77E8C0.js").WEB_UC,
        d = require("../../CE76404694FC73BFA81028419976E8C0.js").log,
        s = require("../../C2427CC194FC73BFA42414C6A277E8C0.js"),
        r = require("../../101E33B294FC73BF76785BB557A6E8C0.js").getFactory,
        u = null;
    Page({
        data: {
            countdownHidden: !0,
            switchHidden: !1,
            showLoading: !1,
            countdown: 10,
            fs: 60,
            btnText: "开启用水",
            btnVal: "off",
            state: !1,
            roomName: "--",
            web: c,
            bdHidden: !0,
            items: [{
                name: "pri",
                value: "优先；",
                checked: "true"
            }, {
                name: "nb",
                value: "NB；"
            }, {
                name: "ble",
                value: "蓝牙；"
            }, {
                name: "off",
                value: "离线；"
            }],
            type: "pri",
            isAndroid: "android" == t.platform,
            factoryName: "XT"
        },
        radioChange: function(e) {
            u.setData({
                type: e.detail.value
            })
        },
        onLoad: function(e) {
            t.index = this, u = this, wx.onNetworkStatusChange((function(e) {
                t.hasNet = e.isConnected
            })), t.isBinding = !0, this.data.isAndroid = "android" == t.platform, t.testDevice = !1;
            var n = __wxConfig.envVersion;
            (e && e.testDevice || n && ("trial" == n || "develop" == n)) && (t.testDevice = !0), "home" != e.from ? t.checkLogin((function() {
                1 != t.userMsg.ICCardStatus && 1 != t.userMsg.SchoolId && "ZK" != t.userMsg.MacName ? t.showModal("", "请绑定卡片后再进行该操作").then((function(e) {
                    wx.switchTab({
                        url: "../userCenter/userCenter"
                    })
                })) : u.reloadDevice()
            })) : this.reloadDevice()
        },
        onShow: function() {
            t.userId && t.willLogin && !t.allOK() ? o.getIsArrearage((function() {
                u.setDevice(t.device)
            })) : u.setDevice(t.device), t.isBinding = !1
        },
        reloadDevice: function() {
            var n = this,
                i = wx.getStorageSync("switchStatus");
            "object" == e(i) && "on" == i.btnVal && i.mac == t.device.deviceMac && t.showModal("", "你上次离开时候没有关阀，请确认水表状态", "已关阀", "未关阀").then((function(e) {
                e && n.setData({
                    btnVal: "on",
                    btnText: "关闭用水"
                })
            }))
        },
        changeDevice: function(e) {
            if (!t.loginTips())
                if ("on" != u.data.btnVal) {
                    if (!u.data.showLoading) {
                        var n = "扫描水表上方二维码更换到对应房间";
                        e || (n = "当前房间还没绑定水表，扫描水表上方二维码更换到对应房间"), t.showModal("", n, "手动更换", "扫码更换").then((function(e) {
                            e ? wx.scanCode({
                                success: function(e) {
                                    var n;
                                    if ("QR_CODE" == e.scanType && 0 == e.result.indexOf("https://smarth5.gzuci.com/vi1")) {
                                        var i = e.result.split("?")[1],
                                            c = a("imei", e.result),
                                            d = a("ble", e.result);
                                        n = /^[\d]{12}$/.test(i) ? "00" + i : d || c || i
                                    } else if (12 == e.result.length) n = "00" + e.result;
                                    else if ("QR_CODE" == e.scanType) {
                                        var s = a("imei", e.result);
                                        s && (n = s.substr(9))
                                    } else t.showModal("扫码结果", e.result);
                                    if (n) {
                                        var r = t.device.deviceMac;
                                        60 == n.length && (n = n.substr(34, 16), r = t.device.machineid), o.checkMachineSN(n, r, 1, (function() {
                                            t.device = t.deviceWater
                                        }))
                                    }
                                }
                            }) : wx.navigateTo({
                                url: "../roomInput/roomInput?hasLogin=true"
                            })
                        }))
                    }
                } else t.showModal("小蓝未关闭", "请先关闭小蓝后再去换房间吧。")
        },
        setDevice: function(e) {
            u.setData({
                deviceId: e.deviceId,
                deviceName: e.deviceName,
                deviceMac: e.deviceMac,
                roomName: t.roomName,
                testDevice: t.testDevice
            }), e != t.device && (t.device = e, wx.setStorage({
                key: "device",
                data: t.device
            }), t.factory = r(e.deviceName, e.deviceMac))
        },
        touchStart: function(e) {
            if (t.userId && !t.deposited) return t.showLoading("加载中..."), void t.checkState((function() {
                t.userInfoNeedUpdate = !0, t.hideLoading(), 1 == t.userMsg.CashDepSatus ? t.showModal("授信金退款中", "申请授信金退款受理中，目前不能使用洗浴功能。", "取消退款", "知道了", (function() {}), (function() {
                    wx.switchTab({
                        url: "../userCenter/userCenter"
                    })
                })) : 2 == t.userMsg.CashDepSatus ? u.touchStart(e) : wx.redirectTo({
                    url: "../deposit/deposit"
                })
            }));
            t.device.deviceMac ? !t.willLogin || t.allOK() ? (this.setData({
                factoryName: t.device.factoryName
            }), u.touchEnd()) : o.getIsArrearage((function() {
                u.touchEnd()
            })) : u.changeDevice()
        },
        touchEnd: function(e) {
            t.showLoading("加载中...", "index");
            ! function() {
                var e = "off" == u.data.btnVal,
                    i = u.data.type,
                    o = e ? "开阀" : "关阀";
                n.setType(i), e && (t.openingData = null);
                var a = function(n, i) {
                    if (d(o + (n ? "成功" : "失败"), i), n) {
                        var a = e ? "on" : "off";
                        u.setData({
                            btnVal: a,
                            btnText: e ? "关闭用水" : "开启用水"
                        }), s.setStorageSync("switchStatus", {
                            mac: t.device.deviceMac,
                            btnVal: a
                        }), setTimeout((function() {
                            e ? u.setOpenHint(5) : u.setCloseHint(5), u.setData({
                                state: e
                            })
                        }), 300), t.showToast(o + "成功", "", "index")
                    } else u.setData({
                        btnVal: e ? "off" : "on",
                        btnText: e ? "开启用水" : "关闭用水"
                    }), t.hideLoading()
                };
                if (!e && s.getStorageSync("nbOpen")) {
                    var c = "请按水控器蓝色按键3秒以上直至显示0！";
                    return "MH" != t.device.factoryName && "MH4G" != t.device.factoryName && "KZY4G" != t.device.factoryName || (c = "请按水控上方按键3秒以上进行结算"), t.showModal("", c).then((function(e) {
                        a(!0)
                    })), void s.removeStorageSync("nbOpen")
                }
                n.switching(o, a, !1, "index")
            }()
        },
        setCloseHint: function(e) {
            var t = 0 == Math.floor(2 * Math.random()) ? "谢谢使用，我玩去咯" : "谢谢使用，我休息去咯";
            u.setData({
                countdown: t,
                countdownHint: "",
                countdownHidden: !1,
                switchHidden: !0,
                fs: 50
            }), setTimeout((function() {
                var t = setInterval((function() {
                    var n = u.data.countdown;
                    u.setData({
                        countdown: "string" == typeof n ? e - 1 : n - 1,
                        countdownHint: "小蓝要歇几秒才能继续工作啦",
                        fs: 60
                    }), u.data.countdown <= 0 && (clearInterval(t), u.setData({
                        countdownHidden: !0,
                        switchHidden: !1
                    }))
                }), 1e3)
            }), 1e3)
        },
        setOpenHint: function(e) {
            u.setData({
                countdown: "小蓝已准备好了",
                countdownHint: "",
                countdownHidden: !1,
                switchHidden: !0,
                fs: 50
            }), setTimeout((function() {
                u.setData({
                    countdown: "",
                    countdownHint: "",
                    countdownHidden: !0,
                    switchHidden: !1
                })
            }), 1e3 * e)
        },
        browse: function(e) {
            var t = "../browser/browser?url=" + encodeURIComponent(e.currentTarget.dataset.url);
            wx.navigateTo({
                url: t
            })
        },
        onUnload: function() {
            i.disconnect(), s.getStorageSync("nbOpen") && s.removeStorageSync("nbOpen")
        },
        onHide: function() {
            "off" == this.data.btnVal && i.disconnect()
        },
        collect: function() {
            t.device.deviceMac ? n.switching("采集", (function(e) {
                wx.hideLoading()
            })) : u.changeDevice()
        }
    });
});
require("pages/index/index.js");
__wxRoute = 'pages/testDevice/testDevice';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/testDevice/testDevice.js';
define("pages/testDevice/testDevice.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../@babel/runtime/helpers/slicedToArray"),
        t = getApp(),
        n = require("../../27F6CAB394FC73BF4190A2B46A86E8C0.js"),
        a = require("../../C9B02F2594FC73BFAFD64722A696E8C0.js"),
        o = require("../../C372FB5794FC73BFA51493505AB6E8C0.js"),
        i = require("../../A6CC3C9394FC73BFC0AA54949A67E8C0.js"),
        c = require("../../1D8CB78294FC73BF7BEADF853227E8C0.js").installerConsumeData,
        s = require("../../961D3B4394FC73BFF07B53440C77E8C0.js").WEB_Installer,
        d = require("../../101E33B294FC73BF76785BB557A6E8C0.js").getFactory,
        u = null;
    Page({
        data: {
            filterZK: !1,
            filter: "",
            modalHidden: !0,
            countdownHidden: !0,
            switchHidden: !1,
            showLoading: !1,
            countdown: 10,
            btnText: "开启用水",
            btnVal: "off",
            fs: 60,
            state: !1,
            deviceMac: "--",
            web: s,
            items: [{
                name: "pri",
                value: "蓝牙优先；",
                checked: "true"
            }, {
                name: "ble",
                value: "仅蓝牙；"
            }, {
                name: "nb",
                value: "仅NB/4G；"
            }],
            type: "pri",
            settingHidden: !0,
            factory: [{
                name: "新天",
                value: "XT"
            }, {
                name: "铭汉",
                value: "MH"
            }, {
                name: "铭汉4G",
                value: "MH4G"
            }, {
                name: "北电",
                value: "BD"
            }, {
                name: "中卡",
                value: "ZK"
            }, {
                name: "中卡4G",
                value: "ZK4G"
            }],
            factoryIndex: [0],
            factoryName: "XT"
        },
        radioChange: function(e) {
            u.setData({
                type: e.detail.value
            })
        },
        onLoad: function(e) {
            var n = this;
            if (t.testDevice = !0, u = this, wx.onNetworkStatusChange((function(e) {
                    t.hasNet = e.isConnected
                })), t.isBinding = !0, e.userId && (t.userId = e.userId), e.i) {
                var a = JSON.parse(e.i);
                u.initDevice(a)
            }
            e.WaterConsumption && u.setData({
                switchHidden: !0,
                state: !0
            });
            var o = wx.getStorageSync("installerCollectData");
            o && o.length ? t.showModal("", "有没上传的消费订单数据，请先上传", "", "上传").then((function(a) {
                a ? c((function(n) {
                    !0 === n ? t.showModal("", "订单上传完成").then((function(t) {
                        u.isCollect(e)
                    })) : t.showModal("上传中断", n).then((function(t) {
                        if (e.WaterConsumption) {
                            var n = getCurrentPages()[getCurrentPages().length - 2],
                                a = n.data.url.split("&WaterConsumption")[0] + "&t=1";
                            wx.navigateBack({
                                delta: 1,
                                success: function() {
                                    n.setData({
                                        url: a
                                    })
                                }
                            })
                        } else u.isCollect(e)
                    }))
                })) : n.isCollect(e)
            })) : this.isCollect(e)
        },
        onShow: function(e) {
            u.setDevice(), t.isBinding = !1
        },
        onUnload: function() {
            t.index = null, t.log("onUnload", t.device), n.disconnect(), wx.getStorageSync("nbOpen") && wx.removeStorageSync("nbOpen")
        },
        isCollect: function(n) {
            n.WaterConsumption ? (t.index = null, t.showLoading("采集中...", "index"), a.openBluetooth().then((function() {
                o.switching("采集", (function(e) {
                    var t = getCurrentPages()[getCurrentPages().length - 2],
                        a = t.data.url.split("&WaterConsumption")[0] + "&t=1";
                    (1 == e || e.status) && (a += "&WaterConsumption=" + n.WaterConsumption), wx.navigateBack({
                        delta: 1,
                        success: function() {
                            t.setData({
                                url: a
                            })
                        }
                    })
                }))
            })).catch((function(t) {
                var n = e(t, 2),
                    a = n[0],
                    o = n[1];
                i.showModal(a, o)
            }))) : t.index = this
        },
        initDevice: function(e) {
            t.factory = d(e.factoryName || e.machineid || e.name, e.mac), t.device = {
                deviceId: "",
                deviceName: e.machineid || e.name,
                deviceMac: e.mac,
                factoryName: t.factory.name,
                machineid: e.machineid,
                nbid: e.nbid,
                type: e.type,
                version: e.version
            }
        },
        setDevice: function() {
            var e = t.device;
            u.setData({
                deviceId: e.deviceId,
                deviceName: e.deviceName,
                deviceMac: e.deviceMac || e.deviceName,
                factoryName: e.factoryName
            })
        },
        selectDevice: function(e) {
            "on" != u.data.btnVal ? wx.navigateTo({
                url: "../pickDevice/pickDevice?urlType=testWater"
            }) : t.showModal("小蓝未关闭", "请先关闭小蓝后再去换房间吧。")
        },
        touchStart: function(e) {
            t.device.deviceName ? (t.showLoading("加载中...", "index"), u.touchEnd()) : this.selectDevice()
        },
        touchEnd: function(n) {
            ! function() {
                var n = "off" == u.data.btnVal,
                    c = u.data.type,
                    s = n ? "开阀" : "关阀";
                o.setType(c), n && (t.hasAlarm = !1, t.openingData = null);
                var d = function(e, a) {
                    e ? (u.setData({
                        btnVal: n ? "on" : "off",
                        btnText: n ? "关闭用水" : "开启用水"
                    }), setTimeout((function() {
                        n ? u.setOpenHint(5) : u.setCloseHint(5), u.setData({
                            state: n
                        })
                    }), 300), t.showToast(s + "成功", "", "index")) : u.setData({
                        btnVal: n ? "off" : "on",
                        btnText: n ? "开启用水" : "关闭用水"
                    })
                };
                if (!n && wx.getStorageSync("nbOpen")) {
                    var r = "请按水控器蓝色按键3秒以上直至显示0！";
                    return "MH" != t.device.factoryName && "MH4G" != t.device.factoryName && "KZY4G" != t.device.factoryName || (r = "请按水控上方按键3秒以上进行结算"), t.showModal("", r).then((function(e) {
                        d(!0)
                    })), void wx.removeStorageSync("nbOpen")
                }
                u.selectComponent("#privacy").getPrivacySetting((function() {
                    a.openBluetooth().then((function() {
                        o.switching(s, d)
                    })).catch((function(t) {
                        var n = e(t, 2),
                            a = n[0],
                            o = n[1];
                        i.showModal(a, o)
                    }))
                }))
            }()
        },
        setCloseHint: function(e) {
            var t = 0 == Math.floor(2 * Math.random()) ? "谢谢使用，我玩去咯" : "谢谢使用，我休息去咯";
            u.setData({
                countdown: t,
                countdownHint: "",
                countdownHidden: !1,
                switchHidden: !0,
                fs: 50
            }), setTimeout((function() {
                var t = setInterval((function() {
                    var n = u.data.countdown;
                    u.setData({
                        countdown: "string" == typeof n ? e - 1 : n - 1,
                        countdownHint: "小蓝要歇几秒才能继续工作啦",
                        fs: 60
                    }), u.data.countdown <= 0 && (clearInterval(t), u.setData({
                        countdownHidden: !0,
                        switchHidden: !1
                    }))
                }), 1e3)
            }), 1e3)
        },
        setOpenHint: function(e) {
            u.setData({
                countdown: "小蓝已准备好了",
                countdownHint: "",
                countdownHidden: !1,
                switchHidden: !0,
                fs: 50
            }), setTimeout((function() {
                u.setData({
                    countdown: "",
                    countdownHint: "",
                    countdownHidden: !0,
                    switchHidden: !1
                })
            }), 1e3 * e)
        },
        browse: function(e) {
            var t = "../browser/browser?url=" + encodeURIComponent(e.currentTarget.dataset.url);
            wx.navigateTo({
                url: t
            })
        },
        factoryFunc: function(e) {
            this.setData({
                factoryIndex: e.detail.value
            })
        },
        setpDevice: function() {
            t.device.deviceName ? t.showModal("", "水表初始会采集提交水表订单并清空水表内绑卡名单！", "", "继续").then((function(e) {
                e && (t.showLoading("加载中...", "index"), a.openBluetooth().then((function() {
                    o.switching("采集", (function(e) {
                        wx.hideLoading(), t.showModal("", "水表初始成功，请告知同学重新绑卡")
                    }))
                })))
            })) : this.selectDevice()
        },
        testFunc: function() {
            a.openBluetooth().then((function() {
                o.switching("查询", (function(e) {
                    console.log("--\x3e查询", e), e.status
                }))
            }))
        }
    });
});
require("pages/testDevice/testDevice.js");
__wxRoute = 'pages/deposit/deposit';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/deposit/deposit.js';
define("pages/deposit/deposit.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var o = require("../../CE76404694FC73BFA81028419976E8C0.js"),
        e = require("../../961D3B4394FC73BFF07B53440C77E8C0.js"),
        t = getApp();
    Page({
        data: {},
        onLoad: function(o) {
            t.checkLogin((function() {
                t.deposited && wx.navigateBack()
            }))
        },
        mTips: function() {
            var o = this;
            t.showModal("", "若已经支付过授信金，请在微信下拉页面删除小程序后重新登陆", "知道了", "去支付").then((function(e) {
                e && o.confirm()
            }))
        },
        confirm: function() {
            t.showLoading("加载中...");
            var n = e.API_CO + "Orders/PayOrder";
            wx.request({
                url: n,
                data: {
                    botId: t.botId,
                    userId: wx.getStorageSync("userId"),
                    orderModule: "bath",
                    orderType: "1"
                },
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function(e) {
                    var n = e.data;
                    n.status ? (t.showLoading("支付中..."), wx.requestPayment({
                        timeStamp: n.timestamp,
                        nonceStr: n.nonceStr,
                        package: n.package,
                        signType: n.signType,
                        paySign: n.paySign,
                        success: function(o) {
                            t.showToast("支付成功"), setTimeout((function() {
                                t.deposited = !0, t.userMsg.CashDepSatus = 2, wx.setStorageSync("deposited", t.deposited), wx.switchTab({
                                    url: "../home/home"
                                })
                            }), 800)
                        },
                        fail: function(o) {
                            t.showModal("温馨提示", "客户取消支付或支付失败！")
                        }
                    })) : ((0, o.error)("交付押金", n), "请重新登录！" == n.errormsg ? t.showModal("登录失效", "请重新登录！", "", "去登录").then((function() {
                        t.logout()
                    })) : t.showModal("请求失败", e))
                },
                fail: function(e) {
                    (0, o.error)("交付押金", e), t.showModal("加载失败", e)
                }
            })
        },
        cancel: function() {
            wx.switchTab({
                url: "../home/home"
            })
        },
        logout: function() {
            t.logout()
        }
    });
});
require("pages/deposit/deposit.js");
__wxRoute = 'pages/roomInput/roomInput';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/roomInput/roomInput.js';
define("pages/roomInput/roomInput.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var o = require("../../CE76404694FC73BFA81028419976E8C0.js").error,
        a = require("../../961D3B4394FC73BFF07B53440C77E8C0.js").API_CO,
        e = require("../../25B9627594FC73BF43DF0A720987E8C0.js").CheckOrderIsPaid,
        s = getApp(),
        t = null;
    Page({
        data: {
            pageType: "all",
            schoolArray: [{
                id: "0",
                name: "--请选择--"
            }],
            schoolAreArray: [{
                id: "0",
                name: "--请选择--"
            }],
            schoolHouseArray: [{
                id: "0",
                name: "--请选择--"
            }],
            schoolFloorArray: [{
                id: "0",
                name: "--请选择--"
            }],
            schoolRoomArray: [{
                id: "0",
                name: "--请选择--"
            }],
            schoolIndex: 0,
            schoolAreIndex: 0,
            schoolHouseIndex: 0,
            schoolFloorIndex: 0,
            schoolRoomIndex: 0,
            myRoomData: {}
        },
        onLoad: function(o) {
            this.setData({
                hasLogin: o.hasLogin
            }), t = this;
            var a = wx.getStorageSync("myRoomData");
            a && (this.data.myRoomData = a), wx.getStorageSync("schoolId") ? t.cityGet() : s.userInfo("加载中...", (function() {
                wx.getStorageSync("schoolId"), t.cityGet()
            }))
        },
        onUnload: function() {
            wx.getStorageSync("myRoomData") && wx.removeStorageSync("myRoomData")
        },
        cityGet: function() {
            var e = this.data,
                r = this;
            s.showLoading("加载中..."), s.request({
                url: a + "School/GetList",
                method: "GET",
                header: {
                    "content-type": "application/json"
                },
                data: {},
                success: function(a) {
                    wx.hideLoading();
                    var l = a.data;
                    if (l.status) {
                        for (var h = 0, n = 0; n < l.data.length; n++) {
                            var c = l.data[n].ID;
                            e.schoolArray.push({
                                id: c,
                                name: l.data[n].Name
                            }), t.data.myRoomData && c == t.data.myRoomData.SchoolId && (h = n + 1, t.schoolAreChange({
                                detail: {
                                    value: h
                                }
                            }))
                        }
                        r.setData({
                            schoolIndex: h || 0,
                            schoolArray: e.schoolArray
                        })
                    } else o("获取地址", l), s.showModal("获取地址", a, "取消", "重试", (function() {
                        r.cityGet()
                    }))
                },
                fail: function(a) {
                    o("获取地址", a), s.showModal("获取地址失败", a, "取消", "重试", (function() {
                        r.cityGet()
                    }))
                }
            })
        },
        schoolChange: function(o) {
            var a = o ? o.detail.value : 1;
            this.setData({
                schoolIndex: a,
                schoolAreIndex: 0
            })
        },
        schoolAreChange: function(o) {
            var e = o ? o.detail.value : 1;
            if (this.setData({
                    schoolIndex: e,
                    schoolAreIndex: 0,
                    schoolHouseIndex: 0
                }), 0 != e) {
                var t = this.data,
                    r = this;
                s.showLoading("加载中..."), wx.request({
                    url: a + "School/GetSchoolHouseList?schoolId=" + t.schoolArray[e].id,
                    method: "GET",
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(a) {
                        wx.hideLoading();
                        var e = a.data;
                        t.schoolHouseArray.splice(0, t.schoolHouseArray.length), t.schoolHouseArray.push({
                            id: "0",
                            name: "--请选择--"
                        });
                        var l = 0;
                        if (e.status)
                            for (var h = 0; h < e.data.length; h++) {
                                var n = e.data[h].HouseId;
                                t.schoolHouseArray.push({
                                    id: n,
                                    name: e.data[h].HouseName
                                }), r.data.myRoomData && n == r.data.myRoomData.HouseId && (l = h + 1, r.schoolHouseChange({
                                    detail: {
                                        value: l
                                    }
                                }))
                            } else s.showModal("获取地址", a, "取消", "重试", (function() {
                                r.schoolAreChange(o)
                            }));
                        r.setData({
                            schoolHouseArray: t.schoolHouseArray,
                            schoolHouseIndex: l
                        })
                    },
                    fail: function(a) {
                        s.showModal("获取地址失败", a, "取消", "重试", (function() {
                            r.schoolAreChange(o)
                        }))
                    }
                })
            }
        },
        schoolHouseChange: function(o) {
            if (this.setData({
                    schoolHouseIndex: o.detail.value,
                    schoolFloorIndex: 0
                }), 0 != o.detail.value) {
                var a = this.data;
                this.getSchoolRoomFloorList(a.schoolHouseArray[a.schoolHouseIndex].id)
            }
        },
        schoolFloorChange: function(o) {
            if (this.setData({
                    schoolFloorIndex: o.detail.value,
                    schoolRoomIndex: 0
                }), 0 != o.detail.value) {
                var a = this.data;
                this.getSchoolRoomFloorList(a.schoolHouseArray[a.schoolHouseIndex].id, a.schoolFloorArray[o.detail.value].id)
            }
        },
        getSchoolRoomFloorList: function(o, e) {
            var t = this.data,
                r = this,
                l = this.data.myRoomData,
                h = l && l.HouseId == o,
                n = a + "School/GetSchoolRoomFloorList?houseId=" + o;
            e && (n += "&floorNo=" + e), s.showLoading("加载中..."), wx.request({
                url: n,
                method: "GET",
                header: {
                    "content-type": "application/json"
                },
                success: function(a) {
                    wx.hideLoading();
                    var n = a.data;
                    e ? (t.schoolRoomArray.splice(0, t.schoolRoomArray.length), t.schoolRoomArray.push({
                        id: "0",
                        name: "--请选择--"
                    })) : (t.schoolFloorArray.splice(0, t.schoolFloorArray.length), t.schoolFloorArray.push({
                        id: "0",
                        name: "--请选择--"
                    }));
                    var c = 0,
                        i = 0;
                    if (n.status)
                        for (var d = 0; d < n.data.length; d++)
                            if (e) {
                                var u = n.data[d].RoomNo;
                                t.schoolRoomArray.push({
                                    id: n.data[d].RoomFloorId,
                                    name: u
                                }), h && l.DormitoryNo == u && (i = d + 1)
                            } else {
                                var m = n.data[d].FloorNo,
                                    y = t.schoolFloorArray.length;
                                y > 0 && t.schoolFloorArray[y - 1].id != m && t.schoolFloorArray.push({
                                    id: m,
                                    name: m
                                }), h && l.DormitoryFloorNo == m && (c = d + 1, r.schoolFloorChange({
                                    detail: {
                                        value: c
                                    }
                                }))
                            } else s.showModal("获取地址", a, "取消", "重试", (function() {
                        r.getSchoolRoomFloorList(o, e)
                    }));
                    e ? r.setData({
                        schoolRoomArray: t.schoolRoomArray,
                        schoolRoomIndex: i
                    }) : r.setData({
                        schoolFloorArray: t.schoolFloorArray,
                        schoolFloorIndex: c
                    })
                },
                fail: function(a) {
                    s.showModal("获取地址失败", a, "取消", "重试", (function() {
                        r.getSchoolRoomFloorList(o, e)
                    }))
                }
            })
        },
        schoolRoomChange: function(o) {
            this.setData({
                schoolRoomIndex: o.detail.value
            })
        },
        checkNow: function() {
            var o = this;
            e().then((function() {
                o.confirm()
            }))
        },
        confirm: function(e) {
            var r = this.data;
            if (0 != r.schoolIndex)
                if (0 != r.schoolHouseIndex)
                    if (0 != r.schoolFloorIndex)
                        if (0 != r.schoolRoomIndex) {
                            s.showLoading("加载中...");
                            var l = {
                                UserId: s.userId,
                                SchoolId: r.schoolArray[r.schoolIndex].id,
                                AreaId: r.schoolAreArray[r.schoolAreIndex].id,
                                HouseId: r.schoolHouseArray[r.schoolHouseIndex].id,
                                DormitoryFloorNo: r.schoolFloorArray[r.schoolFloorIndex].name,
                                DormitoryNo: r.schoolRoomArray[r.schoolRoomIndex].name,
                                CardSn: 1 == s.userMsg.ICCardStatus ? s.userMsg.ICCardNum : "",
                                Mobile: s.phone,
                                MachineSn: s.device.deviceMac,
                                MacName: s.device.factoryName
                            };
                            wx.request({
                                url: a + "users/ChangeRoom",
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                data: l,
                                success: function(a) {
                                    wx.hideLoading(), a.data.status ? s.checkLogin((function() {
                                        wx.switchTab({
                                            url: "../home/home"
                                        })
                                    })) : (o("提交宿舍", a.data), s.showModal("保存出错", a, "取消", "重试", (function() {
                                        t.confirm(e)
                                    })))
                                },
                                fail: function(a) {
                                    o("提交宿舍", a), s.showModal("保存出错", a, "取消", "重试", (function() {
                                        t.confirm(e)
                                    }))
                                }
                            })
                        } else s.showModal("温馨提示", "请选择房号！");
            else s.showModal("温馨提示", "请选择楼层！");
            else s.showModal("温馨提示", "请选择楼栋！");
            else s.showModal("温馨提示", "请选择学校！")
        },
        logout: function(o) {
            s.logout()
        }
    });
});
require("pages/roomInput/roomInput.js");
__wxRoute = 'pages/userCenter/userCenter';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/userCenter/userCenter.js';
define("pages/userCenter/userCenter.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = getApp(),
        t = require("../../C372FB5794FC73BFA51493505AB6E8C0.js").switching,
        a = require("../../27F6CAB394FC73BF4190A2B46A86E8C0.js").disconnect,
        n = require("../../C9B02F2594FC73BFAFD64722A696E8C0.js").openBluetooth,
        o = require("../../F66EF4C094FC73BF90089CC7F697E8C0.js").getUrlParam,
        s = require("../../25B9627594FC73BF43DF0A720987E8C0.js"),
        i = s.getIsArrearage,
        r = s.NBUnBindUser,
        u = s.bindUserCardCheck,
        c = s.checkMachineSN,
        d = require("../../A6CC3C9394FC73BFC0AA54949A67E8C0.js"),
        l = d.showLoading,
        f = d.showModal,
        h = d.hideLoading,
        g = require("../../CE76404694FC73BFA81028419976E8C0.js").error,
        m = require("../../961D3B4394FC73BFF07B53440C77E8C0.js").API_CO,
        v = require("../../101E33B294FC73BF76785BB557A6E8C0.js"),
        w = v.MING_HAN,
        p = (v.ZHONG_KA_4G, null);
    Page({
        data: {
            imgUri: e.imgUri,
            motto: "Hello World",
            userInfo: {
                nickName: "点击头像获取信息"
            },
            hasUserInfo: !1,
            nickName: "--",
            roomName: "--",
            moenyStatus: -10,
            modalHidden: !0,
            inputValue: "",
            refundReason: "",
            cardId: "",
            cardSt: "",
            factoryName: "",
            userId: e.userId
        },
        onLoad: function(t) {
            p = this, e.userId && (e.userInfo(), e.checkLogin((function() {})))
        },
        onShow: function() {
            this.setData({
                cardId: e.userMsg.ICCardNum,
                cardSt: e.userMsg.ICCardStatus,
                factoryName: e.device.factoryName,
                roomName: e.roomName,
                userId: e.userId
            }), e.userInfoNeedUpdate && e.userInfo()
        },
        onUnload: function() {
            console.log("onUnload"), a()
        },
        onHide: function() {
            console.log("onHide"), a()
        },
        linkTo: function(t) {
            if (!e.loginTips()) {
                var a = t.currentTarget.dataset.pageType;
                if ("bill" != a) {
                    var n = "../" + a + "/" + a;
                    wx.navigateTo({
                        url: n
                    })
                } else this.billClick()
            }
        },
        logout: function(t) {
            e.logout()
        },
        billClick: function() {
            var t = this;
            3 != t.data.moenyStatus ? "open" != wx.getStorageSync("actionRecord") ? 2 != t.data.moenyStatus && -10 != t.data.moenyStatus && -1 != t.data.moenyStatus && 1 != t.data.moenyStatus ? e.showModal("温馨提示", "确定取消申请退款？", "取消", "确认", (function() {
                t.moneyRequest(m + "refund/CancelApplyBalanceRefund?userId=" + e.userId, !1, (function() {
                    e.deposited = !0, e.userMsg.CashDepSatus = 2
                }))
            })) : t.setData({
                modalHidden: !1
            }) : e.showModal("温馨提示", "请采集数据后再申请退授信金，采集数据方法：开启水控后再关闭，显示消费详情即可。", "知道了", "去采集", (function() {
                wx.switchTab({
                    url: "../home/home"
                })
            })) : e.showModal("温馨提示", "您暂无可退款的授信金额", "知道了")
        },
        onModalConfirm: function(t) {
            var a = this.data.inputValue,
                n = this.data.refundReason;
            if ("请输入真实姓名！" != a && "" != a)
                if (n) {
                    var o = e.userId;
                    this.setData({
                        modalHidden: !0,
                        inputValue: "",
                        refundReason: ""
                    });
                    var s = m + "refund/submit",
                        i = {
                            userRealName: a,
                            userId: o,
                            refundReason: n
                        };
                    this.moneyRequest(s, !0, (function() {
                        e.deposited = !1, e.userMsg.CashDepSatus = 1, e.userMsg.ICCardNum && r()
                    }), i)
                } else e.showToast("请输入原因");
            else e.showToast("姓名不可为空")
        },
        onModalCancel: function() {
            this.setData({
                modalHidden: !0,
                inputValue: "",
                refundReason: ""
            })
        },
        onBindInput: function(e) {
            var t, a = e.currentTarget.id,
                n = e.detail.value.replace(/\s+/g, "").substr(0, 140);
            switch (a) {
                case "inputValue":
                    t = {
                        inputValue: n
                    };
                    break;
                case "refundReason":
                    t = {
                        refundReason: n
                    }
            }
            t && this.setData(t)
        },
        moneyRequest: function(t, a, n, o) {
            var s = this;
            e.showLoading("loading..."), wx.request({
                url: t,
                data: o,
                method: o ? "POST" : "DELETE",
                header: {
                    "content-type": "application/json"
                },
                success: function(t) {
                    t.data.status ? (s.setData({
                        moenyStatus: a ? 0 : -1
                    }), n && n()) : g("押金退款", t.data), e.showModal("", t.data.errormsg)
                },
                fail: function(t) {
                    g("押金退款", t), e.showModal("", t)
                }
            })
        },
        bindCard: function() {
            var a = this;
            if (!e.loginTips())
                if (e.device.deviceMac) {
                    var o = this.selectComponent("#privacy");
                    if (o.data.needAuthorization) o.getPrivacySetting((function() {
                        a.bindCard()
                    }));
                    else if (1 == e.cardSt) e.showModal("温馨提示", "是否解绑卡片？", "否", "是", (function() {
                        l("检查蓝牙..."), ("ZK" == e.device.factoryName || "ZK4G" == e.device.factoryName ? Promise.resolve() : n()).then((function() {
                            t("解绑", (function(t) {
                                t && e.showModal("", "解绑成功！")
                            }))
                        })).catch((function(e) {
                            return f("解绑失败", e)
                        }))
                    }));
                    else {
                        if (!e.deposited) return void(1 == e.userMsg.CashDepSatus ? e.showModal("授信金退款中", "申请授信金退款受理中，目前不能使用绑卡功能。如有疑问咨询客服热线。") : null == e.userMsg.CashDepSatus ? (l("加载中..."), e.checkState((function() {
                            h()
                        }))) : wx.navigateTo({
                            url: "../deposit/deposit"
                        }));
                        l("加载中..."), i((function() {
                            h(), p.checkScan().then((function() {
                                return l("检查蓝牙..."), "ZK" == e.device.factoryName || "ZK4G" == e.device.factoryName ? Promise.resolve() : n()
                            })).then((function() {
                                t("绑卡", (function(t) {
                                    t && e.showModal("", "绑卡成功！请取走卡片。\n重新放置卡片即可刷卡用水。")
                                }))
                            }))
                        }))
                    }
                } else e.showModal("", "当前房间没有绑定设备，不过能进行该操作")
        },
        lockCard: function() {
            wx.navigateTo({
                url: "../lockCard/lockCard"
            })
        },
        checkScan: function() {
            return new Promise((function(t) {
                e.log("检查是否需要扫码", e.device), "MH" == e.device.factoryName || "MH4G" == e.device.factoryName ? wx.scanCode({
                    success: function(a) {
                        var n = o("imei", a.result),
                            s = o("ble", a.result),
                            i = o("cid", a.result),
                            r = a.result.indexOf("&cid="),
                            d = r >= 0 ? a.result.substr(r + 1) : "";
                        if (e.log("二维码->cid=" + i, a.result), i || d) {
                            i || (e.log("二维码2->cid=" + i, d), d = d.substr(0, d.indexOf("&")), i = d.split("=")[1]), e.showLoading("查询中"), wx.setStorageSync("cid", i);
                            var f = function() {
                                    l("检查中..."), u(e.factory || w, i, (function(a) {
                                        a.status ? t() : e.showModal("", a)
                                    }))
                                },
                                h = s || n;
                            if (e.device.deviceMac != h) {
                                var g = e.device.deviceMac;
                                c(h, g, 1, (function() {
                                    e.device = e.deviceWater, p.onShow(), f()
                                }))
                            } else f()
                        } else e.showModal("获取卡号失败", a.result + "\n1、请确认卡片是否放置读卡区\n2、请确认二维码右边文字显示“扫码绑定卡片”字样")
                    }
                }) : "ZK4G" == e.device.factoryName ? wx.scanCode({
                    success: function(a) {
                        var n = a.result;
                        8 == n.length ? (l("检查中..."), wx.setStorageSync("cid", n), t()) : e.showModal("获取卡号失败", "请确认卡片是否放置读卡区\n" + a.result)
                    }
                }) : "KZY4G" == e.device.factoryName ? wx.scanCode({
                    success: function(a) {
                        var n = a.result.match(/vi1\?(\d+)/),
                            o = n ? n[1] : null;
                        10 == o.length ? (l("检查中..."), wx.setStorageSync("cid", o), t()) : e.showModal("获取卡号失败", "请确认卡片是否放置读卡区\n" + a.result)
                    }
                }) : t()
            }))
        },
        callPhone: function(t) {
            e.showModal("客服热线", e.bot.kefu, "取消", "拨打").then((function(t) {
                t && e.bot.kefu && wx.makePhoneCall({
                    phoneNumber: e.bot.kefu
                })
            }))
        },
        testFunc: function() {
            t("查询", (function(e) {
                console.log("--\x3e查询", e), e.status
            }))
        }
    });
});
require("pages/userCenter/userCenter.js");
__wxRoute = 'pages/userdetail/userdetail';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/userdetail/userdetail.js';
define("pages/userdetail/userdetail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var o = getApp();
    Page({
        data: {
            phone: "",
            schoolStr: "",
            schoolAreStr: "",
            schoolHouseStr: "",
            schoolFloorStr: "",
            schoolRoomStr: "",
            myData: {},
            loginName: ""
        },
        onLoad: function(o) {},
        onShow: function() {
            var t = this;
            o.userInfo("加载中...", (function(o) {
                t.setData({
                    myData: {
                        SchoolId: o.SchoolId,
                        AreaId: o.AreaId,
                        HouseId: o.HouseId,
                        DormitoryFloorNo: o.DormitoryFloorNo,
                        DormitoryNo: o.DormitoryNo
                    }
                })
            }))
        },
        GoSelect: function(o) {
            wx.setStorageSync("myRoomData", this.data.myData);
            wx.navigateTo({
                url: "../roomInput/roomInput?hasLogin=true"
            })
        }
    });
});
require("pages/userdetail/userdetail.js");
__wxRoute = 'pages/binding/binding';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/binding/binding.js';
define("pages/binding/binding.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../@babel/runtime/helpers/objectSpread2"),
        t = getApp(),
        a = require("../../ADC3732294FC73BFCBA51B256556E8C0.js").isVerified,
        n = require("../../CE76404694FC73BFA81028419976E8C0.js"),
        o = n.log,
        s = n.error,
        r = require("../../C2427CC194FC73BFA42414C6A277E8C0.js"),
        i = r.setStorageSync,
        d = r.removeStorageSync,
        c = r.getStorageSync,
        u = require("../../961D3B4394FC73BFF07B53440C77E8C0.js"),
        l = u.WEB_UC,
        h = u.API_CO,
        w = require("../../25B9627594FC73BF43DF0A720987E8C0.js").getValidateCode,
        g = require("../../F66EF4C094FC73BF90089CC7F697E8C0.js").checkPassword,
        p = null;

    function f(e) {
        p.data.sessionKey && p.data.openId ? e && e(!0) : (t.showLoading("加载中..."), wx.login({
            success: function(a) {
                ! function(e, a) {
                    var n = h + "users/WeiXinCode";
                    wx.request({
                        url: n,
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: {
                            botId: t.botId,
                            code: e
                        },
                        success: function(e) {
                            if (t.hideLoading(), e.data.status) {
                                var n = {
                                    sessionKey: e.data.sessionKey,
                                    openId: e.data.openId
                                };
                                p.setData(n), wx.setStorageSync("WXLoginInfo", n), a && a(!0)
                            } else s("微信登录", e.data), a && a(!1)
                        },
                        fail: function(e) {
                            t.hideLoading(), s("微信登录", e), a && a(!1)
                        }
                    })
                }(a.code, e)
            },
            fail: function(a) {
                t.hideLoading(), e && e(!1)
            }
        }))
    }

    function I(e, n) {
        t.willLogin = !0, t.showLoading("登录中..."), e.sessionKey = p.data.sessionKey, e.openId = p.data.openId, e.uuid = t.uuid, e.botId = t.botId;
        var r = h + "users/WXWebLogon";
        wx.request({
            url: r,
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: e,
            success: function(r) {
                var c = r.data;
                if (t.hideLoading(), c.status) {
                    if (!a(r)) return;
                    o("手机登录", c);
                    var u = c.IsRealName;
                    if (t.phone = c.Phone, t.isRealName = u, t.userId = c.UserID, t.unblocked = 1 == c.UserStatus, t.IsInstallationWork = c.IsInstallationWork, t.EncryptedPassword = c.EncryptedPassword, wx.setStorageSync("phone", t.phone), wx.setStorageSync("isRealName", t.isRealName), wx.setStorageSync("unblocked", t.unblocked), wx.setStorageSync("userId", t.userId), wx.setStorageSync("IsInstallationWork", t.IsInstallationWork), wx.setStorageSync("EncryptedPassword", t.EncryptedPassword), 0 == p.data.current && (p.data.pwdCheck ? i("pwdCheck", {
                            phone: p.data.phone,
                            password: p.data.password
                        }) : d("pwdCheck")), c.IsInstallationWork) {
                        var h = l + "Logon?userId=" + t.userId + "&encryptedPassword=" + t.EncryptedPassword,
                            w = "../browser/browser?url=" + encodeURIComponent(h) + "&installer=1";
                        wx.redirectTo({
                            url: w
                        })
                    } else u ? t.checkLogin((function() {
                        e.LoginPwd && !g(e.LoginPwd, !0) || (1 == t.userMsg.CashDepSatus || 2 == t.userMsg.CashDepSatus ? wx.switchTab({
                            url: "../home/home"
                        }) : wx.redirectTo({
                            url: "../deposit/deposit"
                        }))
                    })) : u || wx.redirectTo({
                        url: "../realName/realName?userId=" + t.userId
                    })
                } else c.errormsg ? (s("手机登录", c), t.showModal("登录失败", r, "取消", "重试", (function() {
                    I(e)
                }))) : (s("手机登录", c), 2 != p.data.current || n ? t.showToast("网络不给力，请重试！") : (p.setData({
                    sessionKey: ""
                }), f((function(a) {
                    a ? I(e, !0) : t.showToast("网络不给力，请重试！")
                }))))
            },
            fail: function(a) {
                s("手机登录", a), t.showModal("登录失败", a, "取消", "重试", (function() {
                    I(e)
                }))
            }
        })
    }

    function v() {
        wx.showToast({
            title: "请阅读并同意《用户协议》《私隐政策》",
            icon: "none"
        })
    }
    Page({
        data: {
            UserId: t.userId,
            isHideInput: !0,
            current: 0,
            code: "",
            web: l,
            getCodeDisabled: !1,
            getCodeTitle: "点击获取",
            isTestHost: t.isTestHost,
            phone: "",
            vCode: "",
            password: "",
            getPhoneModalHidden: !0,
            isChecked: [],
            pwdCheck: !0,
            pswDisplay: !1,
            clearIcon: !1
        },
        browse: function(e) {
            var t = "../browser/browser?url=" + encodeURIComponent(e.currentTarget.dataset.url) + "&installer=1";
            wx.navigateTo({
                url: t
            })
        },
        onLoad: function(t) {
            p = this;
            var a = c("pwdCheck");
            a && this.setData(e({
                clearIcon: !0
            }, a));
            var n = c("WXLoginInfo");
            n && wx.checkSession().then((function() {
                p.setData(n)
            }))
        },
        showInput: function(e) {
            var t = e.currentTarget.dataset.current;
            this.setData({
                current: t
            })
        },
        swiperChange: function(e) {
            "touch" == e.detail.source && this.setData({
                current: e.detail.current
            }), wx.getStorage({
                key: "isChecked",
                success: function(e) {
                    p.setData({
                        isChecked: e.data || []
                    })
                }
            }), wx.setNavigationBarTitle({
                title: 0 == e.detail.current ? "密码登录" : 1 == e.detail.current ? "短信登录" : "微信登录"
            }), 2 == e.detail.current && f()
        },
        getValidateCode: function(e) {
            var a = this.data.phone;
            /^1[0-9]{10}$/.test(a) ? this.data.isChecked[0] ? w(a, 1).then((function() {
                var e, t, a;
                e = 61, t = function(t) {
                    0 == (e -= 1) ? (clearInterval(t), p.setData({
                        getCodeDisabled: !1,
                        getCodeTitle: "点击获取"
                    })) : p.setData({
                        getCodeDisabled: !0,
                        getCodeTitle: "等待" + e + "s"
                    })
                }, a = setInterval((function() {
                    t(a)
                }), 1e3), t(a)
            })) : v() : t.showModal("", "请输入正确的手机号码！")
        },
        valChange: function(e) {
            var a = this;
            if (console.log(e), e.currentTarget.id) {
                var n = {};
                n[e.currentTarget.id] = e.detail.value, this.setData(n), 2 == this.data.current && this.data.isChecked[0] && f((function(n) {
                    n || t.showModal("", "网络不给力，请稍后重试！", "取消", "重试", (function() {
                        a.valChange(e)
                    }), (function() {
                        a.setData({
                            isChecked: []
                        })
                    }))
                })), wx.setStorageSync("isChecked", e.detail.value)
            }
        },
        confirm: function(e) {
            var a;
            if (/^1[0-9]{10}$/.test(this.data.phone))
                if (this.data.vCode || 1 != this.data.current)
                    if (this.data.password || 0 != this.data.current) {
                        if (!this.data.isChecked[0] && 0 != this.data.current) return void v()
                    } else a = "请输入密码！";
            else a = "请输入手机验证码！";
            else a = "请输入正确的手机号码！";
            if (a) t.showModal("", a);
            else {
                var n = {
                    phone: this.data.phone,
                    validateCode: this.data.vCode,
                    LoginWay: "phoneWx"
                };
                0 == this.data.current && (n = {
                    phone: this.data.phone,
                    LoginPwd: this.data.password,
                    LoginWay: "userPwdWx"
                }), f((function(e) {
                    e ? I(n) : t.showToast("网络不给力，请稍后重试！")
                }))
            }
        },
        bindChange: function(e) {
            if (e.currentTarget.id) {
                var t = {};
                t[e.currentTarget.id] = e.detail.value, "phone" == e.currentTarget.id && (t.clearIcon = e.detail.value.length > 0), this.setData(t)
            }
        },
        getPhoneTap: function(e) {
            v()
        },
        getPhoneNumber: function(e) {
            e.detail.encryptedData && (t.showLoading("登录中..."), I({
                iv: e.detail.iv,
                encryptedData: e.detail.encryptedData,
                LoginWay: "wx"
            }))
        },
        dontLogin: function() {
            t.willLogin = !1, wx.switchTab({
                url: "../home/home"
            })
        },
        callTel: function() {
            wx.makePhoneCall({
                phoneNumber: "4008876540"
            })
        },
        forgetPwd: function() {
            wx.navigateTo({
                url: "./forgetPwd/forgetPwd"
            })
        },
        rememberPwd: function() {
            this.setData({
                pwdCheck: !this.data.pwdCheck
            })
        },
        displaypsw: function(e) {
            var t = this;
            setTimeout((function() {
                t.setData({
                    pswDisplay: !t.data.pswDisplay
                })
            }), 50)
        },
        clearInput: function(e) {
            var t = this;
            setTimeout((function() {
                t.setData({
                    phone: "",
                    clearIcon: !1
                })
            }), 50)
        },
        onShareAppMessage: function() {
            return {}
        }
    });
});
require("pages/binding/binding.js");
__wxRoute = 'pages/bill/bill';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/bill/bill.js';
define("pages/bill/bill.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = getApp(),
        a = require("../../CE76404694FC73BFA81028419976E8C0.js"),
        t = a.log,
        r = a.error,
        s = a.isLog,
        o = require("../../961D3B4394FC73BFF07B53440C77E8C0.js").API_CO,
        n = require("../../25B9627594FC73BF43DF0A720987E8C0.js"),
        i = n.setOrdersPayStatus,
        d = n.NBBindUser,
        c = 1,
        l = !1,
        u = null,
        h = -1,
        m = "",
        p = !1;
    Page({
        data: {
            activeIndex: "wait",
            orderWait: [],
            orderids: [],
            orderAll: [],
            waitPayMenoy: 0,
            waitPay: {
                card: 0,
                ble: 0,
                nb: 0
            },
            subsidyBalance: 0,
            allPay: {
                card: 0,
                ble: 0,
                nb: 0
            },
            detailHidden: !0,
            tintHidden: !0,
            payment: 0,
            userId: e.userId
        },
        onLoad: function(e) {
            u = this, c = 1
        },
        onShow: function() {
            e.userId && (this.navClick(), this.setData({
                tintHidden: (new Date).getHours() < 19,
                userId: e.userId
            }))
        },
        navClick: function(e) {
            return e && this.setData({
                activeIndex: e.currentTarget.dataset.value
            }), this.onPullDownRefresh()
        },
        detailTouchEnd: function(e) {
            0 == e.target.offsetTop && this.setData({
                detailHidden: !0
            })
        },
        showDetail: function() {
            var a = wx.getStorageSync("paytime") + 60 - Date.parse(new Date) / 1e3;
            if (a > 0) e.showToast("请".concat(a, "秒后再尝试"));
            else if (!this.checkStoreOrder()) {
                var t = parseFloat(this.data.waitPayMenoy);
                if (t > 0) {
                    var r = parseFloat(this.data.subsidyBalance);
                    (r = r < 0 ? 0 : r) >= t ? (r = t, t = 0) : t -= r, this.setData({
                        subsidy: "-" + r.toFixed(2),
                        payment: t,
                        detailHidden: !1
                    })
                }
            }
        },
        checkStoreOrder: function() {
            var a = this;
            try {
                var t = wx.getStorageSync("payOrder");
                if (t) {
                    if (this.data.orderids.filter((function(e) {
                            return t.list.indexOf(e) > -1
                        })).length) return e.showModal("", "重复支付，请耐心等待支付状态更新").then((function(r) {
                        return e.showLoading("更新订单"), a.payResultCheck(t.orderNo)
                    })).then((function(e) {
                        a.navClick()
                    })), !0
                } else if (m) return e.showModal("提示", "重复支付，请耐心等待支付状态更新").then((function(t) {
                    return e.showLoading("更新订单"), a.payResultCheck(m)
                })).then((function(e) {
                    a.navClick()
                })), !0;
                return !1
            } catch (e) {
                return !1
            }
        },
        Submit: function() {
            if (!p) {
                p = !0, this.setData({
                    detailHidden: !0
                }), h = this.data.orderids.length;
                var a = {
                    botId: e.botId,
                    userId: e.userId,
                    orderModule: "bath",
                    orderType: "2",
                    orderIdList: JSON.stringify(this.data.orderids)
                };
                e.showLoading("加载中...");
                var s = o + "Orders/PayOrder";
                wx.request({
                    url: s,
                    data: a,
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    success: function(s) {
                        p = !1;
                        var o = s.data;
                        o.status ? (t("账单支付", o), wx.setStorageSync("paytime", Date.parse(new Date) / 1e3), o.isFullSubsidy ? u.payResult("支付成功") : (m = o.orderNo, e.showLoading("支付中..."), wx.requestPayment({
                            timeStamp: o.timestamp,
                            nonceStr: o.nonceStr,
                            package: o.package,
                            signType: o.signType,
                            paySign: o.paySign,
                            success: function(r) {
                                t("支付结果", r), u.payResult("支付成功"), wx.setStorage({
                                    key: "payOrder",
                                    data: {
                                        userId: e.userId,
                                        orderNo: m,
                                        list: a.orderIdList
                                    }
                                }), i(m)
                            },
                            fail: function(a) {
                                r("支付失败", a), e.showModal("温馨提示", "客户取消支付或支付失败！", "", "知道了", (function() {
                                    u.payResult()
                                }))
                            }
                        }))) : (r("账单支付", o), "请重新登录！" == o.errormsg ? e.showModal("登录失效", "请重新登录！", "", "去登录").then((function() {
                            e.logout()
                        })) : e.showModal("请求失败", s))
                    },
                    fail: function(a) {
                        p = !1, r("账单支付", a), e.showModal("请求错误", a)
                    }
                })
            }
        },
        payResult: function(a) {
            var t = this;
            e.showToast(a), "支付成功" == a ? (d(), this.navClick().then((function(a) {
                e.log(h, h <= t.data.orderids.length), h <= t.data.orderids.length && t.payResultCheck(m).then((function(e) {
                    t.navClick()
                })), h = -1
            }))) : this.navClick()
        },
        payResultCheck: function(a) {
            return new Promise((function(r, s) {
                try {
                    var n = o + "orders/WeiXinAppletPayCheck",
                        i = {
                            orderType: 2,
                            botId: e.botId,
                            userId: e.userId,
                            orderId: a
                        };
                    wx.request({
                        url: n,
                        data: i,
                        method: "POST",
                        complete: function(e) {
                            e.data && "订单未支付！" == e.data.errormsg && wx.removeStorageSync("payOrder"), t("主动查询", e.data), r()
                        }
                    })
                } catch (e) {
                    r()
                }
            }))
        },
        onPullDownRefresh: function() {
            return c = 1, this.setData({
                waitPay: {
                    card: 0,
                    ble: 0,
                    nb: 0
                },
                allPay: {
                    card: 0,
                    ble: 0,
                    nb: 0
                }
            }), this.getData()
        },
        onReachBottom: function() {
            l && this.getData()
        },
        getData: function() {
            this.setData({
                detailHidden: !0
            });
            var a = this.data,
                t = this,
                n = "wait" == a.activeIndex;
            wx.showLoading({
                title: "加载中...",
                mask: !0
            });
            var i = n ? s ? 400 : 200 : 30,
                d = o + "Orders/GetOrderList?userId=" + e.userId + "&orderState=" + (n ? "0" : "1") + "&pageSize=" + i + "&pageIndex=" + c;
            return new Promise((function(s, o) {
                e.request({
                    url: d,
                    method: "GET",
                    success: function(o) {
                        wx.hideLoading(), wx.stopPullDownRefresh();
                        var d = o.data;
                        if (d.status) {
                            m = d.orderNo || "", 1 == c && (a.orderAll = new Array, a.orderWait = new Array, a.orderids = new Array);
                            for (var h = u.data.waitPay, p = u.data.allPay, y = 0; y < d.data.length; y++) {
                                var f = d.data[y];
                                if (n) {
                                    parseFloat(f.UsePrice);
                                    var w = u.makeData(h, f);
                                    h = w.payObj, f = w.obj, a.orderWait.push(f), a.orderids.push(f.OrderId)
                                } else {
                                    var g = u.makeData(p, f);
                                    p = g.payObj, f = g.obj, a.orderAll.push(f)
                                }
                            }
                            e.totalAmount = d.totalAmount, t.setData({
                                orderAll: a.orderAll,
                                orderWait: a.orderWait,
                                waitPayMenoy: d.totalAmount,
                                waitPay: h,
                                subsidyBalance: d.subsidyBalance,
                                allPay: p
                            }), d.data.length >= i ? (c++, l = !0) : l = !1
                        } else 1 == c && t.setData({
                            orderAll: [],
                            orderWait: [],
                            orderids: [],
                            waitPayMenoy: 0
                        }), wx.showToast({
                            title: d.errormsg,
                            icon: "succes",
                            mask: !0
                        }), "暂无数据！" != d.errormsg && r("历史账单", d);
                        s()
                    },
                    fail: function(a) {
                        r("历史账单", a), e.showModal("请求错误", a)
                    }
                })
            }))
        },
        makeData: function(e, a) {
            if ("ZK4G" == a.MacName) switch (a.ConsumeType) {
                case 1:
                    e.card += parseFloat(a.UsePrice), a.ConsumeName = "卡";
                    break;
                case 2:
                    e.ble += parseFloat(a.UsePrice), a.ConsumeName = "蓝牙";
                    break;
                case 3:
                    e.nb += parseFloat(a.UsePrice), a.ConsumeName = "4G";
                    break;
                case 4:
                    e.ble += parseFloat(a.UsePrice), a.ConsumeName = "蓝牙"
            } else if ("ZK" == a.MacName) switch (a.ConsumeType) {
                    case 1:
                        e.ble += parseFloat(a.UsePrice), a.ConsumeName = "蓝牙";
                        break;
                    case 2:
                        e.nb += parseFloat(a.UsePrice), a.ConsumeName = "NB";
                        break;
                    case 3:
                        e.card += parseFloat(a.UsePrice), a.ConsumeName = "卡";
                        break;
                    case 4:
                        e.ble += parseFloat(a.UsePrice), a.ConsumeName = "蓝牙"
                } else if ("MH" == a.MacName || "MH4G" == a.MacName || "KZY4G" == a.MacName) switch (a.ConsumeType) {
                    case 1:
                        e.card += parseFloat(a.UsePrice), a.ConsumeName = "卡";
                        break;
                    case 2:
                        e.ble += parseFloat(a.UsePrice), a.ConsumeName = "蓝牙";
                        break;
                    case 3:
                        e.nb += parseFloat(a.UsePrice), a.ConsumeName = "MH" == a.MacName ? "NB" : "4G"
                } else switch (a.ConsumeType) {
                    case 0:
                        e.card += parseFloat(a.UsePrice), a.ConsumeName = "卡";
                        break;
                    case 1:
                        e.ble += parseFloat(a.UsePrice), a.ConsumeName = "蓝牙";
                        break;
                    case 5:
                        e.nb += parseFloat(a.UsePrice), a.ConsumeName = "NB"
                }
                return {
                    payObj: e,
                    obj: a
                }
        },
        logout: function(a) {
            e.logout()
        }
    });
});
require("pages/bill/bill.js");
__wxRoute = 'pages/bindDevice/bindDevice';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/bindDevice/bindDevice.js';
define("pages/bindDevice/bindDevice.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var o = function(o, e) {
            if (!e && o && o.__esModule) return o;
            if (null === o || "object" != typeof o && "function" != typeof o) return {
                default: o
            };
            var t = a(e);
            if (t && t.has(o)) return t.get(o);
            var s = {},
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in o)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(o, r)) {
                    var n = l ? Object.getOwnPropertyDescriptor(o, r) : null;
                    n && (n.get || n.set) ? Object.defineProperty(s, r, n) : s[r] = o[r]
                }
            s.default = o, t && t.set(o, s);
            return s
        }(require("../../CE76404694FC73BFA81028419976E8C0.js")),
        e = require("../../961D3B4394FC73BFF07B53440C77E8C0.js");

    function a(o) {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap,
            t = new WeakMap;
        return (a = function(o) {
            return o ? t : e
        })(o)
    }
    var t = getApp(),
        s = require("../../27F6CAB394FC73BF4190A2B46A86E8C0.js"),
        l = null;
    Page({
        data: {
            device: [],
            schoolArray: [{
                id: "0",
                name: "--请选择--"
            }],
            schoolAreArray: [{
                id: "0",
                name: "--请选择--"
            }],
            schoolHouseArray: [{
                id: "0",
                name: "--请选择--"
            }],
            schoolFloorArray: [{
                id: "0",
                name: "--请选择--"
            }],
            schoolRoomArray: [{
                id: "0",
                name: "--请选择--"
            }],
            schoolIndex: 0,
            schoolAreIndex: 0,
            schoolHouseIndex: 0,
            schoolFloorIndex: 0,
            schoolRoomIndex: 0,
            mac: "--请选择水表--",
            modalHidden: !0,
            filter: !0
        },
        changeDevice: function(o) {
            this.setData({
                modalHidden: !1
            });
            var e = this;
            s.disconnect((function() {
                s.clearScan(), s.scan(null, (function(o, a) {
                    "OK" == o ? e.setData({
                        deviceArray: a
                    }) : s.showModal(o, a, "取消", "重试", (function() {
                        e.changeDevice()
                    }))
                }), e.data.filter)
            }))
        },
        onFilterInput: function(o) {
            l.setData({
                filter: o.detail.value
            })
        },
        onFilterZKTap: function(o) {
            l.setData({
                filterZK: !l.data.filterZK
            }), l.changeDevice()
        },
        onModalConfirm: function() {
            l.setData({
                modalHidden: !0
            }), s.stop()
        },
        onConnectTap: function(o) {
            var e = o.currentTarget.dataset.device;
            this.setData({
                modalHidden: !0,
                mac: e.deviceMac
            })
        },
        onLoad: function(o) {
            (l = this).cityGet()
        },
        cityGet: function() {
            var o = this.data;
            wx.showLoading({
                title: "Loading...",
                mask: !0
            }), wx.request({
                url: e.API_CO + "users/GetHCityListByUInstallId?userId=" + t.userId,
                method: "GET",
                success: function(e) {
                    if (wx.hideLoading(), e.data.status) {
                        for (var a = 0; a < e.data.data.length; a++) o.schoolArray.push({
                            id: e.data.data[a].CityId,
                            name: e.data.data[a].CityName
                        });
                        l.setData({
                            schoolArray: o.schoolArray
                        })
                    } else t.showModal("获取地址", e, "取消", "重试", (function() {
                        l.cityGet()
                    }))
                },
                fail: function(o) {
                    t.showModal("获取地址失败", o, "取消", "重试", (function() {
                        l.cityGet()
                    }))
                }
            })
        },
        schoolChange: function(o) {
            if (this.setData({
                    schoolIndex: o.detail.value,
                    schoolAreIndex: 0
                }), 0 != o.detail.value) {
                var a = this.data,
                    s = this;
                wx.showLoading({
                    title: "Loading...",
                    mask: !0
                }), wx.request({
                    url: e.API_CO + "users/GetHouseAreaListByUInstallId?cityId=" + a.schoolArray[o.detail.value].id + "&userId=" + t.userId,
                    method: "GET",
                    success: function(e) {
                        if (wx.hideLoading(), a.schoolAreArray.splice(0, a.schoolAreArray.length), a.schoolAreArray.push({
                                id: "0",
                                name: "--请选择--"
                            }), e.data.status)
                            for (var l = 0; l < e.data.data.length; l++) a.schoolAreArray.push({
                                id: e.data.data[l].AreaId,
                                name: e.data.data[l].AreaName
                            });
                        else t.showModal("获取地址", e, "取消", "重试", (function() {
                            s.schoolChange(o)
                        }));
                        s.setData({
                            schoolAreArray: a.schoolAreArray
                        })
                    },
                    fail: function(e) {
                        t.showModal("获取地址失败", e, "取消", "重试", (function() {
                            s.schoolChange(o)
                        }))
                    }
                })
            }
        },
        schoolAreChange: function(o) {
            if (this.setData({
                    schoolAreIndex: o.detail.value,
                    schoolHouseIndex: 0
                }), 0 != o.detail.value) {
                var a = this.data,
                    s = this;
                wx.showLoading({
                    title: "Loading...",
                    mask: !0
                }), wx.request({
                    url: e.API_CO + "users/GetHouseBuildingListByUInstallId?areaId=" + a.schoolAreArray[o.detail.value].id + "&userId=" + t.userId,
                    method: "GET",
                    success: function(e) {
                        if (wx.hideLoading(), a.schoolHouseArray.splice(0, a.schoolHouseArray.length), a.schoolHouseArray.push({
                                id: "0",
                                name: "--请选择--"
                            }), e.data.status)
                            for (var l = 0; l < e.data.data.length; l++) a.schoolHouseArray.push({
                                id: e.data.data[l].BuildingId,
                                name: e.data.data[l].BuildingName
                            });
                        else t.showModal("获取地址", e, "取消", "重试", (function() {
                            s.schoolAreChange(o)
                        }));
                        s.setData({
                            schoolHouseArray: a.schoolHouseArray
                        })
                    },
                    fail: function(e) {
                        t.showModal("获取地址失败", e, "取消", "重试", (function() {
                            s.schoolAreChange(o)
                        }))
                    }
                })
            }
        },
        schoolHouseChange: function(o) {
            if (this.setData({
                    schoolHouseIndex: o.detail.value,
                    schoolFloorIndex: 0
                }), 0 != o.detail.value) {
                var a = this.data,
                    s = this;
                wx.showLoading({
                    title: "Loading...",
                    mask: !0
                }), wx.request({
                    url: e.API_CO + "users/GetHouseRoomFloorListByUInstallId?buildingId=" + a.schoolHouseArray[o.detail.value].id + "&userId=" + t.userId,
                    method: "GET",
                    success: function(e) {
                        if (wx.hideLoading(), a.schoolFloorArray.splice(0, a.schoolFloorArray.length), a.schoolFloorArray.push({
                                id: "0",
                                name: "--请选择--"
                            }), e.data.status)
                            for (var l = 0; l < e.data.data.length; l++) a.schoolFloorArray.push({
                                id: e.data.data[l].FloorNo,
                                name: e.data.data[l].FloorNo
                            });
                        else t.showModal("获取地址", e, "取消", "重试", (function() {
                            s.schoolHouseChange(o)
                        }));
                        s.setData({
                            schoolFloorArray: a.schoolFloorArray
                        })
                    },
                    fail: function(e) {
                        t.showModal("获取地址失败", e, "取消", "重试", (function() {
                            s.schoolHouseChange(o)
                        }))
                    }
                })
            }
        },
        schoolFloorChange: function(o) {
            if (this.setData({
                    schoolFloorIndex: o.detail.value,
                    schoolRoomIndex: 0
                }), 0 != o.detail.value) {
                var a = this.data,
                    s = this;
                wx.showLoading({
                    title: "Loading...",
                    mask: !0
                }), wx.request({
                    url: e.API_CO + "users/GetHouseRoomFloorListByUInstallId?buildingId=" + a.schoolHouseArray[a.schoolHouseIndex].id + "&floorNo=" + a.schoolFloorArray[o.detail.value].id + "&userId=" + t.userId,
                    method: "GET",
                    success: function(e) {
                        if (wx.hideLoading(), a.schoolRoomArray.splice(0, a.schoolRoomArray.length), a.schoolRoomArray.push({
                                id: "0",
                                name: "--请选择--"
                            }), e.data.status)
                            for (var l = 0; l < e.data.data.length; l++) a.schoolRoomArray.push({
                                id: e.data.data[l].RoomFloorId,
                                name: e.data.data[l].RoomNo
                            });
                        else t.showModal("获取地址", e, "取消", "重试", (function() {
                            s.schoolFloorChange(o)
                        }));
                        s.setData({
                            schoolRoomArray: a.schoolRoomArray
                        })
                    },
                    fail: function(e) {
                        t.showModal("获取地址失败", e, "取消", "重试", (function() {
                            s.schoolFloorChange(o)
                        }))
                    }
                })
            }
        },
        schoolRoomChange: function(o) {
            this.setData({
                schoolRoomIndex: o.detail.value
            })
        },
        confirm: function(a) {
            var s = this.data;
            if ("--请选择水表--" != s.mac)
                if (0 != s.schoolIndex)
                    if (0 != s.schoolAreIndex)
                        if (0 != s.schoolHouseIndex)
                            if (0 != s.schoolFloorIndex)
                                if (0 != s.schoolRoomIndex) {
                                    wx.showLoading({
                                        title: "Loading...",
                                        mask: !0
                                    });
                                    var l = {
                                            userID: t.userId,
                                            CityId: s.schoolArray[s.schoolIndex].id,
                                            AreaId: s.schoolAreArray[s.schoolAreIndex].id,
                                            BuildingId: s.schoolHouseArray[s.schoolHouseIndex].id,
                                            FloorNo: s.schoolFloorArray[s.schoolFloorIndex].name,
                                            RoomFloorId: s.schoolRoomArray[s.schoolRoomIndex].id,
                                            RoomNo: s.schoolRoomArray[s.schoolRoomIndex].name,
                                            Mac: s.mac
                                        },
                                        r = e.API_CO + "drink/PostWaterMeterInfo";
                                    wx.request({
                                        url: r,
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        data: l,
                                        success: function(e) {
                                            wx.hideLoading(), e.data.status ? wx.showModal({
                                                title: "温馨提示：",
                                                content: "保存信息成功！",
                                                showCancel: !1,
                                                success: function(o) {
                                                    o.confirm && wx.redirectTo({
                                                        url: "../bindDevice/bindDevice"
                                                    })
                                                }
                                            }) : ((0, o.error)("绑定设备", e.data), wx.showModal({
                                                title: "保存出错",
                                                content: t.errormsg(e),
                                                showCancel: !1
                                            }))
                                        },
                                        fail: function(e) {
                                            (0, o.error)("绑定设备", e), wx.showModal({
                                                title: "保存出错",
                                                content: t.errormsg(e),
                                                showCancel: !1
                                            })
                                        }
                                    })
                                } else wx.showModal({
                                    title: "温馨提示：",
                                    content: "请选择房间号！",
                                    showCancel: !1
                                });
            else wx.showModal({
                title: "温馨提示：",
                content: "请选择楼层！",
                showCancel: !1
            });
            else wx.showModal({
                title: "温馨提示：",
                content: "请选择楼栋！",
                showCancel: !1
            });
            else wx.showModal({
                title: "温馨提示：",
                content: "请选择小区！",
                showCancel: !1
            });
            else wx.showModal({
                title: "温馨提示：",
                content: "请选择学校！",
                showCancel: !1
            });
            else wx.showModal({
                title: "温馨提示：",
                content: "请选择水表！",
                showCancel: !1
            })
        }
    });
});
require("pages/bindDevice/bindDevice.js");
__wxRoute = 'pages/repairDetail/repairDetail';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/repairDetail/repairDetail.js';
define("pages/repairDetail/repairDetail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../961D3B4394FC73BFF07B53440C77E8C0.js"),
        t = getApp();
    Page({
        data: {
            schoolStr: "",
            schoolAreStr: "",
            schoolHouseStr: "",
            schoolFloorStr: "",
            schoolRoomStr: "",
            date: "请选择",
            time: "12:30-18:00",
            faultArr: ["花洒软管损坏", "花洒头损坏", "热水开关故障", "热水表故障", "其他"],
            faultIndex: 0,
            remark: "",
            userName: "",
            loginName: "",
            userId: "",
            moenyStatus: -10
        },
        onLoad: function(e) {},
        onReady: function() {},
        onShow: function() {
            this.data;
            var a = this;
            "" != t.userId && (wx.showLoading({
                title: "Loading...",
                mask: !0
            }), wx.request({
                url: e.API_CO + "users/GetUserInfo?uid=" + t.userId,
                method: "GET",
                header: {
                    "content-type": "application/json"
                },
                data: {
                    userID: t.userId
                },
                success: function(e) {
                    if (wx.hideLoading(), e.data.status) {
                        var t = e.data.data;
                        a.setData({
                            schoolStr: "null" != t.CityName ? t.SchoolName : "未选择",
                            schoolAreStr: "null" != t.AreaName ? t.AreaName : "未选择",
                            schoolHouseStr: "null" != t.HouseName ? t.HouseName : "未选择",
                            schoolFloorStr: "null" != t.FloorNo ? t.DormitoryFloorNo : "未选择",
                            schoolRoomStr: "null" != t.RoomNo ? t.DormitoryNo : "未选择",
                            userName: t.UserName,
                            loginName: t.LoginName,
                            userId: t.UserId,
                            moenyStatus: t.MoenyStatus
                        })
                    }
                }
            }))
        },
        bindDateChange: function(e) {
            this.setData({
                date: e.detail.value
            })
        },
        bindTimeChange: function(e) {
            this.setData({
                time: e.detail.value
            })
        },
        bindFaultChange: function(e) {
            this.setData({
                faultIndex: e.detail.value
            })
        },
        remarkChange: function(e) {
            this.setData({
                remark: e.detail.value
            })
        },
        onShareAppMessage: function() {},
        confirm: function(a) {
            var o = this.data;
            if ("请选择" != o.date)
                if ("请选择" != o.time)
                    if ("" != o.remark) {
                        wx.showLoading({
                            title: "Loading...",
                            mask: !0
                        });
                        var n = {
                            UserId: t.userId,
                            AppointmentDate: o.date,
                            AppointmentTimeDepart: o.time,
                            ContractName: o.userName,
                            ContractPhone: o.loginName,
                            Remark: o.remark,
                            ProblemFlag: o.faultIndex
                        };
                        wx.request({
                            url: e.API_CO + "feedback/AddFaultRepair",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: n,
                            success: function(e) {
                                wx.hideLoading(), e.data.status ? wx.showModal({
                                    title: "温馨提示：",
                                    content: "保存信息成功！",
                                    showCancel: !1,
                                    success: function(e) {
                                        e.confirm && wx.navigateBack({
                                            delta: 2
                                        })
                                    }
                                }) : wx.showModal({
                                    title: "保存出错",
                                    content: t.errormsg(e),
                                    showCancel: !1
                                })
                            },
                            fail: function(e) {
                                wx.showModal({
                                    title: "保存出错",
                                    content: t.errormsg(e),
                                    showCancel: !1
                                })
                            }
                        })
                    } else wx.showModal({
                        title: "温馨提示：",
                        content: "请填写故障描述！",
                        showCancel: !1
                    });
            else wx.showModal({
                title: "温馨提示：",
                content: "请选择报修时间！",
                showCancel: !1
            });
            else wx.showModal({
                title: "温馨提示：",
                content: "请选择报修日期！",
                showCancel: !1
            })
        }
    });
});
require("pages/repairDetail/repairDetail.js");
__wxRoute = 'pages/browser/browser';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/browser/browser.js';
define("pages/browser/browser.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var o = require("../../961D3B4394FC73BFF07B53440C77E8C0.js"),
        t = getApp();
    Page({
        data: {
            url: ""
        },
        onLoad: function(e) {
            var n = this,
                a = decodeURIComponent(e.url);
            if (e.isNeedLogin) {
                var i = wx.getStorageSync("hasLogon");
                this.setData({
                    url: i ? a : o.WEB_UC + "Logon"
                }), console.log(this.data.url), i || (t.showLoading("加载中..."), setTimeout((function() {
                    wx.setStorageSync("hasLogon", !0), t.log("url", a), n.setData({
                        url: a
                    }), setTimeout((function() {
                        t.hideLoading()
                    }), 2e3)
                }), 8e3))
            } else {
                if (t.log("url", a), a && a.indexOf(o.WEB_UC + "Logon") > -1 && 1 != e.installer) return void t.logout();
                this.setData({
                    url: a
                })
            }
        },
        bindMessage: function(o) {
            console.log("bindMessage", o)
        },
        reload: function(o) {
            this.setData({
                url: o
            }), t.log("reload", o)
        },
        bindload: function(e) {
            console.log("bindload", e.detail.src, this.data.url), e.detail.src && e.detail.src.indexOf(o.WEB_UC + "Logon") > -1 && this.data.url != e.detail.src && t.logout()
        },
        binderror: function(o) {}
    });
});
require("pages/browser/browser.js");
__wxRoute = 'pages/about/about';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/about/about.js';
define("pages/about/about.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = getApp();
    Page({
        data: {
            imgUri: e.imgUri
        },
        onLoad: function(e) {},
        callPhone: function(e) {
            wx.makePhoneCall({
                phoneNumber: e.currentTarget.dataset.phone
            })
        }
    });
});
require("pages/about/about.js");
__wxRoute = 'pages/realName/realName';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/realName/realName.js';
define("pages/realName/realName.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var o = require("../../CE76404694FC73BFA81028419976E8C0.js"),
        a = require("../../961D3B4394FC73BFF07B53440C77E8C0.js"),
        e = {
            userName: "",
            studentNo: ""
        },
        t = getApp(),
        s = null;
    Page({
        data: {
            gender: ["--请选择--", "男", "女"],
            genderIdx: 0,
            pageType: "all",
            schoolArray: [{
                name: "--请选择--"
            }],
            schoolAreArray: [{
                name: "--请选择--"
            }],
            schoolHouseArray: [{
                name: "--请选择--"
            }],
            schoolFloorArray: [{
                name: "--请选择--"
            }],
            schoolRoomArray: [{
                name: "--请选择--"
            }],
            schoolIndex: 0,
            schoolAreIndex: 0,
            schoolHouseIndex: 0,
            schoolFloorIndex: 0,
            schoolRoomIndex: 0
        },
        onLoad: function(o) {
            o.userId && o.userId.length > 0 && this.setData({
                userId: o.userId
            }), s = this, this.cityGet()
        },
        cityGet: function(o) {
            var e = this.data,
                r = this;
            t.showLoading("加载中..."), wx.request({
                url: a.API_CO + "School/GetListByBotId?botId=" + t.botId,
                method: "GET",
                header: {
                    "content-type": "application/json"
                },
                data: {},
                success: function(a) {
                    if (wx.hideLoading(), a.data.status) {
                        for (var l = [], n = 0; n < a.data.data.length; n++) o && a.data.data[n].Name && a.data.data[n].Name.indexOf(o) >= 0 && l.push({
                            id: a.data.data[n].ID,
                            name: a.data.data[n].Name
                        }), e.schoolArray.push({
                            id: a.data.data[n].ID,
                            name: a.data.data[n].Name
                        });
                        r.setData({
                            schoolArray: l.length > 0 ? l : e.schoolArray
                        }), l.length > 0 && s.schoolAreChange()
                    } else t.showModal("获取地址", a, "取消", "重试", (function() {
                        r.cityGet(o)
                    }))
                },
                fail: function(a) {
                    t.showModal("获取地址失败", a, "取消", "重试", (function() {
                        r.cityGet(o)
                    }))
                }
            })
        },
        schoolChange: function(o) {
            if (this.setData({
                    schoolIndex: o ? o.detail.value : 0,
                    schoolAreIndex: 0
                }), !o || 0 != o.detail.value) {
                var e = this.data,
                    s = this;
                t.showLoading("加载中..."), wx.request({
                    url: a.API_CO + "School/GetSchoolAreaList?schoolId=" + e.schoolArray[o ? o.detail.value : 0].id,
                    method: "GET",
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(a) {
                        wx.hideLoading();
                        var r = a.data;
                        if (e.schoolAreArray.splice(0, e.schoolAreArray.length), e.schoolAreArray.push({
                                id: "0",
                                name: "--请选择--"
                            }), r.status) {
                            for (var l = !1, n = 0, d = 0; d < r.data.length; d++) e.schoolAreArray.push({
                                id: r.data[d].AreaId,
                                name: r.data[d].AreaName
                            }), "1" == r.data[d].AreaId && (l = !0, n = e.schoolAreArray.length - 1);
                            l && s.schoolAreChange({
                                detail: {
                                    value: n
                                }
                            })
                        } else t.showModal("获取地址", a, "取消", "重试", (function() {
                            s.schoolChange(o)
                        }));
                        s.setData({
                            schoolAreArray: e.schoolAreArray
                        })
                    },
                    fail: function(a) {
                        t.showModal("获取地址失败", a, "取消", "重试", (function() {
                            s.schoolChange(o)
                        }))
                    }
                })
            }
        },
        schoolAreChange: function(o) {
            if (this.setData({
                    schoolIndex: o ? o.detail.value : 1,
                    schoolAreIndex: 0,
                    schoolHouseIndex: 0
                }), 0 != o.detail.value) {
                var e = this.data,
                    s = this;
                t.showLoading("加载中...");
                var r = a.API_CO + "School/GetSchoolHouseList?schoolId=" + e.schoolArray[e.schoolIndex].id;
                wx.request({
                    url: r,
                    method: "GET",
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(a) {
                        if (wx.hideLoading(), e.schoolHouseArray.splice(0, e.schoolHouseArray.length), e.schoolHouseArray.push({
                                id: "0",
                                name: "--请选择--"
                            }), a.data.status)
                            for (var r = 0; r < a.data.data.length; r++) e.schoolHouseArray.push({
                                id: a.data.data[r].HouseId,
                                name: a.data.data[r].HouseName
                            });
                        else t.showModal("获取地址", a, "取消", "重试", (function() {
                            s.schoolAreChange(o)
                        }));
                        s.setData({
                            schoolHouseArray: e.schoolHouseArray
                        })
                    },
                    fail: function(a) {
                        t.showModal("获取地址失败", a, "取消", "重试", (function() {
                            s.schoolAreChange(o)
                        }))
                    }
                })
            }
        },
        schoolHouseChange: function(o) {
            if (this.setData({
                    schoolHouseIndex: o.detail.value,
                    schoolFloorIndex: 0
                }), 0 != o.detail.value) {
                var e = this.data,
                    s = this;
                t.showLoading("加载中..."), wx.request({
                    url: a.API_CO + "School/GetSchoolRoomFloorList?houseId=" + e.schoolHouseArray[o.detail.value].id,
                    method: "GET",
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(a) {
                        if (wx.hideLoading(), e.schoolFloorArray.splice(0, e.schoolFloorArray.length), e.schoolFloorArray.push({
                                id: "0",
                                name: "--请选择--"
                            }), a.data.status)
                            for (var r = 0; r < a.data.data.length; r++) e.schoolFloorArray.push({
                                id: a.data.data[r].FloorNo,
                                name: a.data.data[r].FloorNo
                            });
                        else t.showModal("获取地址", a, "取消", "重试", (function() {
                            s.schoolHouseChange(o)
                        }));
                        s.setData({
                            schoolFloorArray: e.schoolFloorArray
                        })
                    },
                    fail: function(a) {
                        t.showModal("获取地址失败", a, "取消", "重试", (function() {
                            s.schoolHouseChange(o)
                        }))
                    }
                })
            }
        },
        schoolFloorChange: function(o) {
            if (this.setData({
                    schoolFloorIndex: o.detail.value,
                    schoolRoomIndex: 0
                }), 0 != o.detail.value) {
                var e = this.data,
                    s = this;
                t.showLoading("加载中..."), wx.request({
                    url: a.API_CO + "School/GetSchoolRoomFloorList?houseId=" + e.schoolHouseArray[e.schoolHouseIndex].id + "&floorNo=" + e.schoolFloorArray[o.detail.value].id,
                    method: "GET",
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(a) {
                        if (wx.hideLoading(), e.schoolRoomArray.splice(0, e.schoolRoomArray.length), e.schoolRoomArray.push({
                                id: "0",
                                name: "--请选择--"
                            }), a.data.status)
                            for (var r = 0; r < a.data.data.length; r++) e.schoolRoomArray.push({
                                id: a.data.data[r].RoomFloorId,
                                name: a.data.data[r].RoomNo
                            });
                        else t.showModal("获取地址", a, "取消", "重试", (function() {
                            s.schoolFloorChange(o)
                        }));
                        s.setData({
                            schoolRoomArray: e.schoolRoomArray
                        })
                    },
                    fail: function(a) {
                        t.showModal("获取地址失败", a, "取消", "重试", (function() {
                            s.schoolFloorChange(o)
                        }))
                    }
                })
            }
        },
        schoolRoomChange: function(o) {
            this.setData({
                schoolRoomIndex: o.detail.value
            })
        },
        confirm: function(r) {
            var l = this.data;
            if (e.userName) {
                if (e.studentNo) {
                    if (0 == l.genderIdx) return void t.showModal("温馨提示", "请选择性别！");
                    if ("--请选择学校--" == l.schoolArray[l.schoolIndex].name) return void t.showModal("温馨提示", "请选择学校！");
                    if (0 == l.schoolHouseIndex) return void t.showModal("温馨提示", "请选择楼栋！");
                    if (0 == l.schoolFloorIndex) return void t.showModal("温馨提示", "请选择楼层！");
                    if (0 == l.schoolRoomIndex) return void t.showModal("温馨提示", "请选择房号！")
                } else e.studentNo = t.phone || t.userId;
                t.showLoading("加载中...");
                var n = {
                    UserId: t.userId,
                    UserName: e.userName,
                    StudentNo: e.studentNo,
                    SchoolId: l.schoolArray[l.schoolIndex].id,
                    HouseId: l.schoolHouseArray[l.schoolHouseIndex].id,
                    DormitoryFloorNo: l.schoolFloorArray[l.schoolFloorIndex].name,
                    DormitoryNo: l.schoolRoomArray[l.schoolRoomIndex].name,
                    Gender: l.genderIdx
                };
                console.log("myData", n), wx.request({
                    url: a.API_CO + "users/RealNameAuthentication",
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    data: n,
                    success: function(a) {
                        wx.hideLoading(), a.data.status ? (t.isRealName = !0, wx.setStorageSync("isRealName", !0), s.data.userId && wx.setStorageSync("userId", s.data.userId), t.checkLogin((function() {
                            wx.switchTab({
                                url: "../home/home"
                            })
                        }))) : ((0, o.error)("实名认证", a.data), t.showModal("保存出错", a, "取消", "重试", (function() {
                            s.confirm(r)
                        })))
                    },
                    fail: function(a) {
                        (0, o.error)("实名认证", a), t.showModal("保存出错", a, "取消", "重试", (function() {
                            s.confirm(r)
                        }))
                    }
                })
            } else t.showModal("温馨提示", "请输入用户名！")
        },
        bindChange: function(o) {
            var a = o.currentTarget.id;
            "gender" == a ? this.setData({
                genderIdx: o.detail.value
            }) : e[a] = o.detail.value
        }
    });
});
require("pages/realName/realName.js");
__wxRoute = 'pages/pickDevice/pickDevice';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/pickDevice/pickDevice.js';
define("pages/pickDevice/pickDevice.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
        a = getApp(),
        i = require("../../27F6CAB394FC73BF4190A2B46A86E8C0.js"),
        t = (require("../../C9B02F2594FC73BFAFD64722A696E8C0.js"), require("../../101E33B294FC73BF76785BB557A6E8C0.js").getFactory),
        n = require("../../C372FB5794FC73BFA51493505AB6E8C0.js"),
        c = require("../../F66EF4C094FC73BF90089CC7F697E8C0.js").getUrlParam,
        o = require("../../CE76404694FC73BFA81028419976E8C0.js").addFilterMsg,
        r = null;
    Page({
        data: {
            filter: !0,
            userId: "",
            deviceArray: [],
            urlType: ""
        },
        onLoad: function(e) {
            a.index = this, a.hideLoading("index"), (r = this).data.userId = e.userId, r.changeDevice(), r.setData({
                urlType: e.urlType || ""
            }), o(r.data.userId)
        },
        onUnload: function() {
            a.index = null
        },
        onPullDownRefresh: function() {
            r.changeDevice(), wx.stopPullDownRefresh()
        },
        changeDevice: function(e) {
            this.setData({
                modalHidden: !1
            }), this.selectComponent("#privacy").getPrivacySetting((function() {
                r.scanDevice()
            }))
        },
        scanDevice: function(e) {
            a.showLoading("扫描中...", "index");
            var t = 0;
            i.clearScan(), i.scan(null, (function(i, n) {
                t || (t = 1, a.hideLoading("index")), "OK" == i ? r.setData({
                    deviceArray: n
                }) : "开启蓝牙失败" == i || "蓝牙加速" == i ? a.showModal(i, "请检查手机蓝牙是否已开启", "取消", "重试", (function() {
                    r.scanDevice()
                })) : e ? a.showModal(i, n, "取消", "重试", (function() {
                    r.scanDevice()
                })) : r.scanDevice(!0)
            }), r.data.filter)
        },
        onConnectTap: function(e) {
            a.onConnectTap(e, (function(e) {
                r.connect(e)
            }))
        },
        scanCode: function(t) {
            wx.scanCode({
                success: function(t) {
                    var n, o;
                    if (a.log("扫码返回", t.result), "QR_CODE" == t.scanType && 0 == t.result.indexOf("https://smarth5.gzuci.com/vi1")) {
                        var s = t.result.split("?")[1];
                        o = c("imei", t.result);
                        var d = c("ble", t.result);
                        n = /^[\d]{12}$/.test(s) ? "00" + s : d || (o || s)
                    } else 12 == t.result.length ? n = "00" + t.result : "QR_CODE" == t.scanType && (o = c("imei", t.result)) && (n = o.substr(9));
                    var l = "";
                    if (60 == n.length && (l = (n = "Z" + n.substr(0, 12)).substr(34, 16)), n) {
                        var u = {
                            deviceId: "",
                            deviceName: n,
                            deviceMac: n,
                            machineid: l,
                            nbid: "",
                            type: "",
                            version: ""
                        };
                        o && (u.imei = o);
                        var f, v = 0,
                            m = e(r.data.deviceArray);
                        try {
                            for (m.s(); !(f = m.n()).done;) {
                                var g = f.value;
                                if (g.deviceName == u.deviceName) {
                                    u.deviceId = g.deviceId, u.deviceName = g.deviceName, v = 1;
                                    break
                                }
                            }
                        } catch (e) {
                            m.e(e)
                        } finally {
                            m.f()
                        }
                        v ? r.connect(u) : (i.clearScan(), i.scan(u, (function(e, i) {
                            "查找成功" == e ? r.connect(u) : a.showModal(e, i)
                        }))), a.log("扫码的设备", u)
                    } else a.showLoading("..."), a.showModal("扫码返回", t.result)
                }
            })
        },
        connect: function(e) {
            if (console.log("device", e), a.factory = t(e.deviceName, e.deviceMac), console.log("factory", a.factory), e.factoryName = a.factory.name, a.device = e, "testWater" == r.data.urlType) return i.stop(), wx.getStorageSync("nbOpen") && wx.removeStorageSync("nbOpen"), void wx.navigateBack({
                delta: 1
            });
            o("安装工" + e.deviceName), a.showLoading("loading..."), n.setType("pri"), n.switching("绑定", (function(i, t) {
                if (a.hideLoading("index"), a.log("switching返回结果", i), i.status) {
                    var n = {
                        imei: i.data.IMEI || i.data.imei || e.imei || "",
                        mac: i.data.bAddr || e.deviceMac || e.deviceName,
                        name: i.data.SN || e.deviceName,
                        factoryName: e.factoryName || "XT",
                        type: i.data.type || "",
                        version: i.data.version || "hw:" + i.data.hw + ",sw:" + i.data.sw
                    };
                    r.bindDevice(n, e)
                } else a.showToast("连接出错 " + t || "")
            }))
        },
        bindDevice: function(e, i) {
            if (!e.imei || "undefined" == e.imei || "null" == e.imei) {
                var t = "读取imei失败";
                return "MH" != i.factoryName && "MH4G" != i.factoryName && "KZY4G" != i.factoryName || (t += "，请扫描获取"), void a.showModal("", t).then((function(t) {
                    "MH" != i.factoryName && "MH4G" != i.factoryName && "KZY4G" != i.factoryName || wx.scanCode({
                        success: function(t) {
                            var n = c("imei", t.result);
                            n ? (e.imei = n, r.bindDevice(e, i)) : a.showModal("扫码结果", t.result)
                        }
                    })
                }))
            }
            var n = "IMEI: " + e.imei + "\n编号: " + e.name + "\n版本号: " + e.type + e.version;
            "ZK" == e.factoryName && (n = "MAC: " + e.mac + "\n" + n), a.showModal("确认设备信息", n, "取消", "确认", (function() {
                var i = getCurrentPages()[getCurrentPages().length - 2],
                    t = i.data.url.split("i="),
                    n = t[0].indexOf("?") >= 0,
                    c = t[0] + (n ? 1 == t.length ? "&" : "" : "?") + "i=" + encodeURIComponent(JSON.stringify(e)) + "&r=" + 1e6 * Math.random().toFixed(6);
                a.log("info", e), wx.navigateBack({
                    delta: 1,
                    success: function() {
                        i.setData({
                            url: c
                        })
                    }
                })
            }))
        },
        filterTap: function() {
            this.setData({
                filter: !this.data.filter
            }), this.onPullDownRefresh()
        }
    });
});
require("pages/pickDevice/pickDevice.js");
__wxRoute = 'pages/news/newsDetail/newsDetail';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/news/newsDetail/newsDetail.js';
define("pages/news/newsDetail/newsDetail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = getApp(),
        t = (require("../../../B55E1E0294FC73BFD3387605FBD7E8C0.js"), require("../../../961D3B4394FC73BFF07B53440C77E8C0.js").API_CO),
        a = require("../../../CE76404694FC73BFA81028419976E8C0.js"),
        s = a.log,
        n = a.error,
        o = null;
    Page({
        data: {
            id: "",
            obj: null,
            editorCtx: null
        },
        onLoad: function(t) {
            t.id ? (this.setData({
                id: t.id
            }), (o = this).getMessageInfo(t.id)) : e.showModal("", "参数不全", "", "知道了", (function() {
                wx.navigateBack({
                    delta: 1
                })
            }))
        },
        getMessageInfo: function(a) {
            var i = e.userId ? e.userId : "130002051630001",
                r = t + "message/ReadMsg?uid=" + i + "&msgid=" + a;
            wx.request({
                url: r,
                success: function(t) {
                    var i = t.data;
                    i.status ? (s("消息详情", i), o.setData({
                        obj: i.data,
                        content: i.data.content.replace(/<img /gi, '<img style="max-width:100%" ')
                    })) : (n("消息详情", i), e.showModal("请求失败", i.errormsg, "取消", "重试", (function() {
                        o.getMessageInfo(a)
                    })))
                },
                fail: function(t) {
                    n("消息详情", t), e.showModal("请求错误", t, "取消", "重试", (function() {
                        o.getMessageInfo(a)
                    }))
                }
            })
        }
    });
});
require("pages/news/newsDetail/newsDetail.js");
__wxRoute = 'pages/news/newsList/newsList';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/news/newsList/newsList.js';
define("pages/news/newsList/newsList.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../../961D3B4394FC73BFF07B53440C77E8C0.js").API_CO,
        s = require("../../../CE76404694FC73BFA81028419976E8C0.js").error,
        e = getApp();
    Page({
        data: {
            bot: e.bot,
            list: []
        },
        onLoad: function(t) {
            this.getMsgList()
        },
        linkTo: function(t) {
            var s = t.currentTarget.id;
            wx.navigateTo({
                url: "../newsDetail/newsDetail?id=" + s
            })
        },
        getMsgList: function() {
            var i = this,
                a = e.userId ? e.userId : "130002051630001",
                n = t + "message/GetMsgList?uid=" + a + "&pageIndex=1";
            wx.request({
                url: n,
                success: function(t) {
                    var a = t.data;
                    a.status ? i.setData({
                        list: a.data
                    }) : (s("消息列表", a), e.showModal("", a.errormsg, "取消", "重试", (function() {
                        i.getMsgList()
                    })))
                },
                fail: function(t) {
                    s("消息列表", t), e.showModal("", t, "取消", "重试", (function() {
                        i.getMsgList()
                    }))
                }
            })
        }
    });
});
require("pages/news/newsList/newsList.js");
__wxRoute = 'pages/air/air';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/air/air.js';
define("pages/air/air.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = getApp(),
        t = require("../../27F6CAB394FC73BF4190A2B46A86E8C0.js"),
        a = null;
    Page({
        data: {
            roomName: "--",
            items: [{
                name: "pri",
                value: "优先；",
                checked: "true"
            }, {
                name: "nb",
                value: "NB；"
            }, {
                name: "ble",
                value: "蓝牙；"
            }, {
                name: "off",
                value: "离线；"
            }],
            type: "pri",
            airBalance: 666,
            temperature: "25",
            windspeed: 0,
            openclose: 0,
            controllerShow: !1
        },
        radioChange: function(e) {
            a.setData({
                type: e.detail.value
            })
        },
        onLoad: function(t) {
            e.index = this, a = this, wx.onNetworkStatusChange((function(t) {
                e.hasNet = t.isConnected
            })), e.isBinding = !0, e.testDevice = !1;
            var i = __wxConfig.envVersion;
            (t && t.testDevice || i && ("trial" == i || "develop" == i)) && (e.testDevice = !0), e.deviceAir && (e.device = e.deviceAir)
        },
        onShow: function(t) {
            e.willLogin && !e.allOK() ? e.checkLogin((function() {
                a.setDevice(e.device), a.connectDevice()
            })) : (a.setDevice(e.device), a.connectDevice()), e.isBinding = !1
        },
        reloadDevice: function() {
            e.checkLogin((function() {
                a.setDevice(e.device)
            }))
        },
        connectDevice: function() {
            e.device.deviceMac || e.showModal("", "你的房间还没安装空调")
        },
        changeDevice: function(e) {
            wx.navigateTo({
                url: "../roomInput/roomInput?hasLogin=true"
            })
        },
        setDevice: function(t) {
            a.setData({
                roomName: e.roomName,
                testDevice: e.testDevice
            })
        },
        airBtnFunc: function(e) {
            var t = e.currentTarget.dataset.type;
            "controller" == t && this.setData({
                controllerShow: !this.data.controllerShow
            })
        },
        controlFunc: function(e) {
            var t = e.currentTarget.id;
            if (this.data.info) switch (t) {
                case "openclose":
                    this.data.info[t] = this.data.openclose ? 0 : 1;
                    break;
                case "geer1":
                    this.data.info.windspeed = this.data.windspeed < 2 ? this.data.windspeed + 1 : 2;
                    break;
                case "geer2":
                    this.data.info.windspeed = this.data.windspeed > 0 ? this.data.windspeed - 1 : 0;
                    break;
                case "temperature1":
                    this.data.info.temperature = this.data.temperature < 35 ? this.data.temperature + 1 : 35;
                    break;
                case "temperature2":
                    this.data.info.temperature = this.data.temperature > 5 ? this.data.temperature - 1 : 5;
                    break;
                case "geerSlider":
                    this.data.info.windspeed = e.detail.value;
                    break;
                case "temperatureSlider":
                    this.data.info.temperature = e.detail.value
            }
            this.airDeviceSetting()
        },
        airDeviceSetting: function() {
            a.data.info ? (e.showLoading(), t.SysNB15KTService(a.data.info, (function() {}), a)) : e.showModal("", "请先连接空调", "", "好的", (function() {
                a.connectDevice()
            }))
        }
    });
});
require("pages/air/air.js");
__wxRoute = 'pages/binding/register/register';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/binding/register/register.js';
define("pages/binding/register/register.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t, a = getApp(),
        e = require("../../../CE76404694FC73BFA81028419976E8C0.js"),
        i = (e.log, e.error),
        o = require("../../../961D3B4394FC73BFF07B53440C77E8C0.js"),
        n = o.WEB_UC,
        s = o.API_CO,
        d = require("../../../25B9627594FC73BF43DF0A720987E8C0.js").getValidateCode,
        r = require("../../../F66EF4C094FC73BF90089CC7F697E8C0.js").checkPassword;
    Page({
        data: {
            web: n,
            count: 0,
            LoginName: "",
            VCode: "",
            LoginPwd: "",
            LoginPwd2: "",
            isChecked: []
        },
        valChange: function(t) {
            if (console.log(t), t.currentTarget.id) {
                var a = {};
                a[t.currentTarget.id] = t.detail.value, this.setData(a)
            }
        },
        getVCode: function() {
            if (/^1\d{10}$/.test(this.data.LoginName)) {
                var e = this;
                d(this.data.LoginName, 1).then((function() {
                    e.setData({
                        count: 90
                    }), t = setInterval((function() {
                        e.data.count--, e.setData({
                            count: e.data.count
                        }), e.data.count <= 0 && clearInterval(t)
                    }), 1e3)
                }))
            } else a.showModal("", "手机号码格式错误")
        },
        register: function(t) {
            var e;
            if (/^1\d{10}$/.test(this.data.LoginName))
                if (this.data.VCode) {
                    if (!r(this.data.LoginPwd)) return;
                    this.data.LoginPwd != this.data.LoginPwd2 ? e = "两次输入的密码不一致" : this.data.isChecked[0] || (e = "请阅读并同意《用户协议》《私隐政策》")
                } else e = "请输入验证码";
            else e = "手机号码格式错误";
            if (e) a.showModal("", e);
            else {
                a.showLoading("加载中...");
                var o = s + "users/Register",
                    n = {
                        LoginName: this.data.LoginName,
                        LoginPwd: this.data.LoginPwd,
                        Phone: this.data.LoginName,
                        VCode: this.data.VCode,
                        UserName: "",
                        EquipCode: a.uuid || ""
                    };
                wx.request({
                    url: o,
                    data: n,
                    method: "POST",
                    success: function(t) {
                        wx.hideLoading(), t.data.status ? a.showModal("", "账号注册成功").then((function(t) {
                            wx.navigateBack({
                                delta: 1
                            })
                        })) : (i("注册账号", t.data), a.showModal("", t.data.errormsg || "未知错误"))
                    },
                    fail: function(t) {
                        i("注册账号", t)
                    }
                })
            }
        },
        browse: function(t) {
            var a = "/pages/browser/browser?url=" + encodeURIComponent(t.currentTarget.dataset.url) + "&installer=1";
            wx.navigateTo({
                url: a
            })
        }
    });
});
require("pages/binding/register/register.js");
__wxRoute = 'pages/binding/forgetPwd/forgetPwd';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/binding/forgetPwd/forgetPwd.js';
define("pages/binding/forgetPwd/forgetPwd.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t, a = require("../../../CE76404694FC73BFA81028419976E8C0.js").error,
        e = require("../../../961D3B4394FC73BFF07B53440C77E8C0.js").API_CO,
        n = require("../../../25B9627594FC73BF43DF0A720987E8C0.js").getValidateCode,
        o = require("../../../F66EF4C094FC73BF90089CC7F697E8C0.js").checkPassword,
        i = getApp();
    Page({
        data: {
            count: 0,
            phone: "",
            vcode: "",
            newPwd: ""
        },
        valChange: function(t) {
            if (t.currentTarget.id) {
                var a = {};
                a[t.currentTarget.id] = t.detail.value, this.setData(a)
            }
        },
        getVCode: function() {
            if (/^1\d{10}$/.test(this.data.phone)) {
                var a = this;
                n(this.data.phone, 2).then((function() {
                    a.setData({
                        count: 90
                    }), t = setInterval((function() {
                        a.data.count--, a.setData({
                            count: a.data.count
                        }), a.data.count <= 0 && t && clearInterval(t)
                    }), 1e3)
                }))
            } else i.showModal("", "手机号码格式错误")
        },
        submit: function() {
            var t;
            if (/^1\d{10}$/.test(this.data.phone))
                if (this.data.vcode) {
                    if (!o(this.data.newPwd)) return
                } else t = "请输入验证码";
            else t = "手机号码格式错误";
            if (t) i.showModal("", t);
            else {
                i.showLoading("加载中...");
                var n = e + "users/FindPwd?phone=".concat(this.data.phone, "&vcode=").concat(this.data.vcode, "&newPwd=").concat(this.data.newPwd);
                wx.request({
                    url: n,
                    success: function(t) {
                        wx.hideLoading(), t.data.status ? i.showModal("", "密码重置成功").then((function(t) {
                            wx.navigateBack({
                                delta: 1
                            })
                        })) : (a("忘记密码", t.data), i.showModal("", t.data.errormsg || "未知错误"))
                    },
                    fail: function(t) {
                        a("忘记密码", t), i.showModal("", t)
                    }
                })
            }
        }
    });
});
require("pages/binding/forgetPwd/forgetPwd.js");
__wxRoute = 'pages/lockCard/lockCard';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/lockCard/lockCard.js';
define("pages/lockCard/lockCard.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var o = require("../../@babel/runtime/helpers/slicedToArray"),
        n = require("../../C9B02F2594FC73BFAFD64722A696E8C0.js"),
        e = require("../../C372FB5794FC73BFA51493505AB6E8C0.js"),
        t = require("../../A6CC3C9394FC73BFC0AA54949A67E8C0.js"),
        i = require("../../25B9627594FC73BF43DF0A720987E8C0.js"),
        a = getApp();
    Page({
        data: {
            isCollectUnlock: !1,
            isManualUnlocked: !1
        },
        onLoad: function(o) {},
        onReady: function() {},
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        CollectUnlock: function() {
            var a = this;
            this.isCollectUnlock ? (0, t.showModal)("解锁成功!", "PF-LOC锁卡已解除，放置卡片即可刷卡用水") : ((0, t.showLoading)("检测中..."), this.selectComponent("#privacy").getPrivacySetting((function() {
                (0, n.openBluetooth)().then((function(o) {
                    (0, e.switching)("采集", (function(o, n) {
                        o ? (0, i.getIsArrearage)((function() {
                            a.isCollectUnlock = !0, (0, t.showModal)("解锁成功!", "PF-LOC锁卡已解除，放置卡片即可刷卡用水")
                        })) : (0, t.showModal)("采集失败", n)
                    }))
                })).catch((function(n) {
                    var e = o(n, 2),
                        i = e[0],
                        a = e[1];
                    (0, t.showModal)(i, a)
                }))
            })))
        },
        ManualUnlock: function() {
            var o = this;
            this.isManualUnlocked ? (0, t.showModal)("解锁成功!", "PF-LLL锁卡已解除，放置卡片即可刷卡用水") : a.deposited ? ((0, t.showLoading)("检测中..."), (0, i.getIsArrearage)((function() {
                (0, i.NBBindUser)((function(n, e) {
                    n ? (0, t.showModal)("解锁成功!", "PF-LLL锁卡已解除，放置卡片即可刷卡用水").then((function() {
                        o.isManualUnlocked = !0
                    })) : (0, t.showModal)("解锁失败", e)
                }))
            }))) : 1 == a.userMsg.CashDepSatus ? a.showModal("授信金退款中", "申请授信金退款受理中，目前不能使用洗浴功能。", "取消退款", "知道了", (function() {}), (function() {
                wx.switchTab({
                    url: "../userCenter/userCenter"
                })
            })) : wx.redirectTo({
                url: "../deposit/deposit"
            })
        }
    });
});
require("pages/lockCard/lockCard.js");