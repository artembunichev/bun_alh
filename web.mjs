"use strict";
function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//mol/ambient/ambient.ts
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//mol/delegate/delegate.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//mol/owning/owning.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//mol/fail/fail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//mol/fail/hidden/hidden.ts
;
"use strict";
//mol/type/writable/writable.ts
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//mol/object2/object2.ts
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//mol/object/object.ts
;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));
//mol/wire/cursor/cursor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.pop();
            this.data.pop();
            if (this.data.length === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        get incompleted() {
            return false;
        }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));
//mol/wire/pub/pub.ts
;
"use strict";
//mol/wire/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_wire_auto_sub = null;
    function $mol_wire_auto(next = $.$mol_wire_auto_sub) {
        return $.$mol_wire_auto_sub = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));
//mol/wire/wire.ts
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//mol/dev/format/format.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get temp() {
            return false;
        }
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
                this.data.pop();
                this.data.pop();
            }
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let tail = 0;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.data.length - 2, cursor);
                    this.data.pop();
                    this.data.pop();
                }
                else {
                    ++tail;
                }
            }
            for (; tail; --tail) {
                this.data.pop();
                this.data.pop();
            }
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                if (pub?.incompleted)
                    return;
            }
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/pub/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.web.ts
;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        return val && typeof val.then === 'function';
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));
//mol/promise/like/like.ts
;
"use strict";
var $;
(function ($) {
    const handled = new WeakSet();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_frame(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        [Symbol.toStringTag];
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        get incompleted() {
            return $mol_promise_like(this.cache);
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(cursor + ' '), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result)) {
                    const put = (res) => {
                        if (this.cache === result)
                            this.put(res);
                        return res;
                    };
                    result = Object.assign(result.then(put, put), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result) && !handled.has(result)) {
                    result = Object.assign(result.finally(() => {
                        if (this.cache === result)
                            this.absorb();
                    }), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));
//mol/wire/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//mol/func/name/name.ts
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//mol/guid/guid.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//mol/key/key.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && left.stack === right.stack;
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap([[right, true]]);
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.iterator in left)
                result = compare_iterator(left[Symbol.iterator](), right[Symbol.iterator]());
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));
//mol/compare/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                reuse: if (existen) {
                    if (!existen.temp)
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                return new $mol_wire_task(`${host?.[Symbol.toStringTag] ?? host}.${task.name}(#)`, task, host, args);
            };
        }
        get temp() {
            return true;
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));
//mol/wire/task/task.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));
//mol/wire/method/method.ts
;
"use strict";
//mol/type/tail/tail.ts
;
"use strict";
//mol/type/foot/foot.ts
;
"use strict";
var $;
(function ($) {
    const catched = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.get(error))
            return false;
        catched.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//mol/fail/catch/catch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));
//mol/fail/log/log.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = `${prefix}.${field}`;
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const id = `${prefix}.${task.name}(${$mol_key(key)})`;
            if (dict) {
                const existen = dict.get(id);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(id, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto()?.temp) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            const prev = this.cache;
            if ($mol_owning_check(this, prev)) {
                prev.destructor();
            }
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete(this[Symbol.toStringTag]);
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));
//mol/wire/atom/atom.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));
//mol/wire/solo/solo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));
//mol/wire/plex/plex.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));
//mol/mem/mem.ts
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));
//mol/window/window.web.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//mol/dom/context/context.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//mol/after/tick/tick.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//mol/view/selection/selection.ts
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//mol/maybe/maybe.ts
;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        $mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            $mol_view_selection.focused($mol_maybe($mol_dom_context.document.activeElement), 'notify');
        }, true);
    }
})($ || ($ = {}));
//mol/view/selection/selection.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//mol/wrapper/wrapper.ts
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//mol/memo/memo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//mol/dom/qname/qname.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, def) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            const res = task();
            if (res === undefined)
                return def;
            return res;
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));
//mol/wire/probe/probe.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));
//mol/wire/watch/watch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        const current = $mol_wire_auto();
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/solid/solid.ts
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//mol/const/const.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//mol/dom/render/attributes/attributes.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));
//mol/wire/async/async.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));
//mol/dom/render/events/events.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
            if (typeof val === 'number') {
                style.setProperty(kebab(name), `${val}px`);
            }
            else {
                style.setProperty(kebab(name), val);
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//mol/dom/render/styles/styles.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//mol/dom/render/children/children.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//mol/dom/render/fields/fields.ts
;
"use strict";
//mol/type/keys/extract/extract.ts
;
"use strict";
//mol/type/pick/pick.ts
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach_force() {
        if (all.length) {
            el.innerHTML += '\n' + all.join('\n\n');
            all = [];
        }
        timer = null;
        return el;
    }
    $.$mol_style_attach_force = $mol_style_attach_force;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $mol_after_tick($mol_style_attach_force);
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//mol/style/attach/attach.ts
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//mol/decor/decor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return `${value}%`; }
        static px(value) { return `${value}px`; }
        static mm(value) { return `${value}mm`; }
        static cm(value) { return `${value}cm`; }
        static Q(value) { return `${value}Q`; }
        static in(value) { return `${value}in`; }
        static pc(value) { return `${value}pc`; }
        static pt(value) { return `${value}pt`; }
        static cap(value) { return `${value}cap`; }
        static ch(value) { return `${value}ch`; }
        static em(value) { return `${value}em`; }
        static rem(value) { return `${value}rem`; }
        static ex(value) { return `${value}ex`; }
        static ic(value) { return `${value}ic`; }
        static lh(value) { return `${value}lh`; }
        static rlh(value) { return `${value}rlh`; }
        static vh(value) { return `${value}vh`; }
        static vw(value) { return `${value}vw`; }
        static vi(value) { return `${value}vi`; }
        static vb(value) { return `${value}vb`; }
        static vmin(value) { return `${value}vmin`; }
        static vmax(value) { return `${value}vmax`; }
        static deg(value) { return `${value}deg`; }
        static rad(value) { return `${value}rad`; }
        static grad(value) { return `${value}grad`; }
        static turn(value) { return `${value}turn`; }
        static s(value) { return `${value}s`; }
        static ms(value) { return `${value}ms`; }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//mol/style/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name, defaultValue) {
            return new $mol_style_func('var', defaultValue ? [name, defaultValue] : name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
        static linear(...breakpoints) {
            return new $mol_style_func("linear", breakpoints.map((e) => Array.isArray(e)
                ? String(e[0]) +
                    " " +
                    (typeof e[1] === "number" ? e[1] + "%" : e[1].toString())
                : String(e)));
        }
        static cubic_bezier(x1, y1, x2, y2) {
            return new $mol_style_func('cubic-bezier', [x1, y1, x2, y2]);
        }
        static steps(value, step_position) {
            return new $mol_style_func('steps', [value, step_position]);
        }
        static blur(value) {
            return new $mol_style_func('blur', value ?? "");
        }
        static brightness(value) {
            return new $mol_style_func('brightness', value ?? "");
        }
        static contrast(value) {
            return new $mol_style_func('contrast', value ?? "");
        }
        static drop_shadow(color, x_offset, y_offset, blur_radius) {
            return new $mol_style_func("drop-shadow", blur_radius
                ? [color, x_offset, y_offset, blur_radius]
                : [color, x_offset, y_offset]);
        }
        static grayscale(value) {
            return new $mol_style_func('grayscale', value ?? "");
        }
        static hue_rotate(value) {
            return new $mol_style_func('hue-rotate', value ?? "");
        }
        static invert(value) {
            return new $mol_style_func('invert', value ?? "");
        }
        static opacity(value) {
            return new $mol_style_func('opacity', value ?? "");
        }
        static sepia(value) {
            return new $mol_style_func('sepia', value ?? "");
        }
        static saturate(value) {
            return new $mol_style_func('saturate', value ?? "");
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//mol/style/func/func.ts
;
"use strict";
//mol/type/override/override.ts
;
"use strict";
//mol/style/properties/properties.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_prop(prefix, postfixes) {
        const record = postfixes.reduce((record_obj, postfix) => {
            record_obj[postfix] = $mol_style_func.vary(`--${prefix}_${postfix}`);
            return record_obj;
        }, {});
        return record;
    }
    $.$mol_style_prop = $mol_style_prop;
})($ || ($ = {}));
//mol/style/prop/prop.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_theme = $mol_style_prop('mol_theme', [
        'back',
        'hover',
        'card',
        'current',
        'special',
        'text',
        'control',
        'shade',
        'line',
        'focus',
        'field',
        'image',
    ]);
})($ || ($ = {}));
//mol/theme/theme.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_luma: -1;\n\t--mol_theme_satur: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme] {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n:where([mol_theme]) {\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 20% ), calc( 55% + 45% * var(--mol_theme_luma) ) );\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, calc( 40% - 40% * var(--mol_theme_luma) ) );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 54% + 46% * var(--mol_theme_luma) ), .25 );\n\t\n\t--mol_theme_card: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .2 );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 50%, 1 );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, calc( 55% - 10% * var(--mol_theme_luma) ) );\n\t\n}\n\n[mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 40% );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 60%, 30% );\n\t--mol_theme_current: hsl( var(--mol_theme_hue), 100%, 20% );\n}\n\n[mol_theme=\"$mol_theme_current\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% + 30% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 90%, 50% );\n\t--mol_theme_hover: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 35% );\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n}\n");
})($ || ($ = {}));
//mol/theme/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_gap = $mol_style_prop('mol_gap', [
        'block',
        'text',
        'round',
        'space',
        'blur',
    ]);
})($ || ($ = {}));
//mol/gap/gap.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));
//mol/gap/-css/gap.css.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    const error_showed = new WeakMap();
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = next || $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                const mol_view_error = $mol_promise_like(error) ? 'Promise' : error.name || error.constructor.name;
                $mol_dom_render_attributes(node, { mol_view_error });
                if ($mol_promise_like(error))
                    break render;
                if ((error_showed.get(error) ?? this) !== this)
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
                error_showed.set(error, this);
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        theme(next = null) {
            return next;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                mol_theme: this.theme(),
            };
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            try {
                this.dom_final();
            }
            catch (err) {
                $mol_fail_log(err);
            }
            view.dom_node().scrollIntoView({ block: align });
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_frame(() => {
                this.dom_node().scrollIntoView({ block: 'start', inline: 'end' });
                this.focused(true);
            });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "theme", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//mol/view/view/view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n}\n\n@media print {\n\t[mol_view_root] {\n\t\theight: auto;\n\t}\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .25;\n\t}\n\t20% {\n\t\topacity: .75;\n\t}\n\tto {\n\t\topacity: .25;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps( 20, end ) infinite;\n}\n");
})($ || ($ = {}));
//mol/view/view/-css/view.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.autobind(), { once: true });
})($ || ($ = {}));
//mol/view/view/view.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: this.theme()
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        theme() {
            return "$mol_theme_accent";
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//mol/speck/-view.tree/speck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_layer = $mol_style_prop('mol_layer', [
        'hover',
        'focus',
        'speck',
        'float',
        'popup',
    ]);
})($ || ($ = {}));
//mol/layer/layer.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));
//mol/layer/-css/layer.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n}\n");
})($ || ($ = {}));
//mol/speck/-css/speck.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $mol_view {
        enabled() {
            return true;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                dblclick: (event) => this.clicks(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_safe()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.error();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        clicks(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        error() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "clicks", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//mol/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//mol/keyboard/code/code.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    this.status([error]);
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/button.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));
//mol/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
        style_size() {
            return {};
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//mol/svg/-view.tree/svg.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//mol/after/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//mol/state/time/time.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/svg.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//mol/svg/root/-view.tree/root.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//mol/svg/root/-css/root.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//mol/svg/path/-view.tree/path.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//mol/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1.5em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));
//mol/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_arrow_left extends $mol_icon {
        path() {
            return "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z";
        }
    }
    $.$mol_icon_arrow_left = $mol_icon_arrow_left;
})($ || ($ = {}));
//mol/icon/arrow/left/-view.tree/left.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $bun_alh_page extends $mol_view {
        with_back() {
            return false;
        }
        sub() {
            return [
                this.Head_container(),
                this.Content()
            ];
        }
        back(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        back_hint() {
            return "";
        }
        Back_button() {
            const obj = new this.$.$bun_alh_page_button_back();
            obj.back = (next) => this.back(next);
            obj.hint = () => this.back_hint();
            return obj;
        }
        Head_title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        Head_container_sub() {
            return [
                this.Back_button(),
                this.Head_title()
            ];
        }
        Head_container() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.Head_container_sub();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $bun_alh_page.prototype, "back", null);
    __decorate([
        $mol_mem
    ], $bun_alh_page.prototype, "Back_button", null);
    __decorate([
        $mol_mem
    ], $bun_alh_page.prototype, "Head_title", null);
    __decorate([
        $mol_mem
    ], $bun_alh_page.prototype, "Head_container", null);
    __decorate([
        $mol_mem
    ], $bun_alh_page.prototype, "Content", null);
    $.$bun_alh_page = $bun_alh_page;
    class $bun_alh_page_button_back extends $mol_button {
        sub() {
            return [
                this.Icon()
            ];
        }
        click(next) {
            return this.back(next);
        }
        hint() {
            return "Назад";
        }
        Icon() {
            const obj = new this.$.$mol_icon_arrow_left();
            return obj;
        }
        back(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $bun_alh_page_button_back.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $bun_alh_page_button_back.prototype, "back", null);
    $.$bun_alh_page_button_back = $bun_alh_page_button_back;
})($ || ($ = {}));
//bun/alh/page/-view.tree/page.view.tree.ts
;
"use strict";
//mol/style/pseudo/class.ts
;
"use strict";
//mol/style/pseudo/element.ts
;
"use strict";
//mol/type/error/error.ts
;
"use strict";
//mol/style/guard/guard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^(--)?[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//mol/style/sheet/sheet.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//mol/style/define/define.ts
;
"use strict";
var $;
(function ($) {
    $.$bun_alh_theme = $mol_style_prop('bun_alh_theme', [
        'main',
        'main_light',
        'main_bold',
        'main_bold_alpha',
        'border',
        'border_bold',
        'scroll_back',
        'scroll_thumb',
        'victory',
    ]);
})($ || ($ = {}));
//bun/alh/theme/theme.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("bun/alh/theme/theme.css", ":root {\n\n\t--bun_alh_theme_main: #b3a58c;\n\t--bun_alh_theme_main_light: #fffcbb7d;\n\t--bun_alh_theme_main_bold: #a3915f;\n\t--bun_alh_theme_main_bold_alpha: #a3915f85;\n\t--bun_alh_theme_border: #58573f;\n\t--bun_alh_theme_border_bold: #aba880;\n\t--bun_alh_theme_scroll_back: #0000;\n\t--bun_alh_theme_scroll_thumb: #8d7451;\n\t--bun_alh_theme_victory: #8ef981\n\n}\n");
})($ || ($ = {}));
//bun/alh/theme/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bun_alh_page extends $.$bun_alh_page {
            Head_container_sub() {
                return [
                    ...this.with_back() ? [this.Back_button()] : [],
                    this.Head_title(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $bun_alh_page.prototype, "Head_container_sub", null);
        $$.$bun_alh_page = $bun_alh_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($bun_alh_page, {
            flex: {
                grow: 1,
                shrink: 0,
                basis: 0,
                direction: 'column',
            },
            padding: {
                top: '6px',
                right: '25px',
                bottom: '25px',
                left: '25px',
            },
            align: {
                items: 'center',
            },
            Head_container: {
                position: 'relative',
                color: '#fff',
            },
            Back_button: {
                position: 'absolute',
                top: '21px',
                left: '-40px',
                alignItems: 'center',
                background: {
                    color: $bun_alh_theme.main_bold,
                },
            },
            Content: {
                maxWidth: '100%',
                flex: {
                    grow: 1,
                    shrink: 0,
                    basis: 0,
                },
            },
        });
        $mol_style_define($bun_alh_page_button_back, {
            Icon: {
                width: '28px',
                height: '28px',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $bun_alh_board extends $mol_view {
        sub() {
            return [
                this.Title(),
                this.Content()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $bun_alh_board.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $bun_alh_board.prototype, "Content", null);
    $.$bun_alh_board = $bun_alh_board;
})($ || ($ = {}));
//bun/alh/board/-view.tree/board.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($bun_alh_board, {
            maxWidth: '100%',
            maxHeight: '100%',
            flex: {
                grow: 0,
                basis: 'auto',
            },
            flexDirection: 'column',
            padding: '15px',
            background: {
                color: $bun_alh_theme.main_bold,
            },
            border: {
                width: '4px',
                style: 'solid',
                color: $bun_alh_theme.border_bold,
            },
            borderRadius: '15px',
            Title: {
                justify: {
                    content: 'center',
                },
                marginBottom: '12px',
                font: {
                    size: '20px',
                    weight: 'bold',
                },
            },
            Content: {
                maxHeight: '100%',
                flex: {
                    grow: 1,
                    shrink: 0,
                    basis: 0,
                },
                padding: '15px',
                borderRadius: '15px',
                background: {
                    color: $bun_alh_theme.main_light,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/board/board.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $bun_alh_controls_page extends $bun_alh_page {
        app_page(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        title() {
            return "Управление";
        }
        with_back() {
            return true;
        }
        back(next) {
            return this.open_start_page(next);
        }
        back_hint() {
            return "Назад в меню";
        }
        content() {
            return [
                this.Page_content()
            ];
        }
        open_start_page(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Ways_title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                "В bun_alh существует два способа управления элементами:"
            ];
            return obj;
        }
        way_title(id) {
            return "";
        }
        Way_title(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.way_title(id)
            ];
            return obj;
        }
        way_description(id) {
            return "";
        }
        Way_description(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.way_description(id)
            ];
            return obj;
        }
        Way(id) {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "li";
            obj.sub = () => [
                this.Way_title(id),
                this.Way_description(id)
            ];
            return obj;
        }
        way_list() {
            return [
                this.Way("0")
            ];
        }
        Way_list() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "ul";
            obj.sub = () => this.way_list();
            return obj;
        }
        Board_content() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Ways_title(),
                this.Way_list()
            ];
            return obj;
        }
        Board() {
            const obj = new this.$.$bun_alh_board();
            obj.title = () => "Управление элементами в bun_alh";
            obj.content = () => [
                this.Board_content()
            ];
            return obj;
        }
        Page_content() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Board()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $bun_alh_controls_page.prototype, "app_page", null);
    __decorate([
        $mol_mem
    ], $bun_alh_controls_page.prototype, "open_start_page", null);
    __decorate([
        $mol_mem
    ], $bun_alh_controls_page.prototype, "Ways_title", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_controls_page.prototype, "Way_title", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_controls_page.prototype, "Way_description", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_controls_page.prototype, "Way", null);
    __decorate([
        $mol_mem
    ], $bun_alh_controls_page.prototype, "Way_list", null);
    __decorate([
        $mol_mem
    ], $bun_alh_controls_page.prototype, "Board_content", null);
    __decorate([
        $mol_mem
    ], $bun_alh_controls_page.prototype, "Board", null);
    __decorate([
        $mol_mem
    ], $bun_alh_controls_page.prototype, "Page_content", null);
    $.$bun_alh_controls_page = $bun_alh_controls_page;
})($ || ($ = {}));
//bun/alh/controls/-view.tree/controls.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bun_alh_controls_page extends $.$bun_alh_controls_page {
            open_start_page() {
                this.app_page('start');
            }
            ways() {
                return [
                    {
                        title: 'Перетаскивание',
                        description: 'Перетащите известный элемент в ячейку для комбинирования. Перетащите элемент в любое свободное место вне ячейки комбинирования, чтобы исключить его из комбинации.'
                    },
                    {
                        title: 'Двойной клик',
                        description: 'Кликните дважды по известному элементу, чтобы добавить его в свободную ячейку для комбинирования. Дважды кликните по элементу в ячейке для комбинирования, чтобы исключить его из комбинации.'
                    },
                ];
            }
            way_list() {
                return this.ways().map((_, index) => this.Way(index));
            }
            way_title(idx) {
                return this.ways()[idx].title;
            }
            way_description(idx) {
                return this.ways()[idx].description;
            }
        }
        __decorate([
            $mol_action
        ], $bun_alh_controls_page.prototype, "open_start_page", null);
        __decorate([
            $mol_mem
        ], $bun_alh_controls_page.prototype, "ways", null);
        __decorate([
            $mol_mem
        ], $bun_alh_controls_page.prototype, "way_list", null);
        __decorate([
            $mol_mem_key
        ], $bun_alh_controls_page.prototype, "way_title", null);
        __decorate([
            $mol_mem_key
        ], $bun_alh_controls_page.prototype, "way_description", null);
        $$.$bun_alh_controls_page = $bun_alh_controls_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/controls/controls.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($bun_alh_controls_page, {
            Content: {
                flex: {
                    grow: 0,
                    basis: 'auto',
                },
            },
            Board_content: {
                maxWidth: '600px',
                flex: {
                    grow: 0,
                    basis: 'auto',
                    direction: 'column',
                },
            },
            Ways_title: {
                justify: {
                    content: 'center'
                },
                font: {
                    style: 'italic',
                },
            },
            Way_list: {
                margin: {
                    top: '10px',
                    bottom: '0px',
                },
                flex: {
                    direction: 'column',
                },
            },
            Way: {
                display: 'list-item',
                listStyleType: 'disc',
                flex: {
                    direction: 'column'
                },
                margin: {
                    bottom: '10px',
                },
            },
            Way_title: {
                font: {
                    size: '18px',
                    weight: 'bold',
                },
            },
            Way_description: {
                color: '#242424',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/controls/controls.view.css.ts
;
"use strict";
var $;
(function ($) {
    function $bun_alh_game_combine(...elements) {
        const recipes = $bun_alh_game_recipes;
        for (var new_element in recipes) {
            var ings = recipes[new_element];
            if ((elements[0] === ings[0] && elements[1] === ings[1])
                ||
                    (elements[0] === ings[1] && elements[1] === ings[0])) {
                return new_element;
            }
        }
    }
    $.$bun_alh_game_combine = $bun_alh_game_combine;
})($ || ($ = {}));
//bun/alh/game/combine/combine.ts
;
"use strict";
//bun/alh/game/element/element.ts
;
"use strict";
var $;
(function ($) {
    $.$bun_alh_game_elements = [
        { id: 'water', name: 'Вода' },
        { id: 'fire', name: 'Огонь' },
        { id: 'air', name: 'Воздух' },
        { id: 'earth', name: 'Земля' },
        { id: 'dust', name: 'Пыль' },
        { id: 'energy', name: 'Энергия' },
        { id: 'land', name: 'Территория' },
        { id: 'lava', name: 'Лава' },
        { id: 'mist', name: 'Туман' },
        { id: 'mud', name: 'Грязь' },
        { id: 'pressure', name: 'Давление' },
        { id: 'puddle', name: 'Лужа' },
        { id: 'smoke', name: 'Дым' },
        { id: 'steam', name: 'Пар' },
        { id: 'brick', name: 'Кирпич' },
        { id: 'continent', name: 'Континент' },
        { id: 'earthquake', name: 'Землетрясение' },
        { id: 'eruption', name: 'Извержение' },
        { id: 'geyser', name: 'Гейзер' },
        { id: 'granite', name: 'Гранит' },
        { id: 'gunpowder', name: 'Порох' },
        { id: 'heat', name: 'Жара' },
        { id: 'obsidian', name: 'Обсидиан' },
        { id: 'pond', name: 'Пруд' },
        { id: 'stone', name: 'Камень' },
        { id: 'volcano', name: 'Вулкан' },
        { id: 'wind', name: 'Ветер' },
        { id: 'chimney', name: 'Труба' },
        { id: 'clay', name: 'Глина' },
        { id: 'explosion', name: 'Взрыв' },
        { id: 'lake', name: 'Озеро' },
        { id: 'metal', name: 'Металл' },
        { id: 'mountain', name: 'Гора' },
        { id: 'planet', name: 'Планета' },
        { id: 'plasma', name: 'Плазма' },
        { id: 'sand', name: 'Песок' },
        { id: 'tornado', name: 'Торнадо' },
        { id: 'wall', name: 'Стена' },
        { id: 'warmth', name: 'Тепло' },
        { id: 'atmosphere', name: 'Атмосфера' },
        { id: 'atomic_bomb', name: 'Атомная бомба' },
        { id: 'avalanche', name: 'Лавина' },
        { id: 'beach', name: 'Пляж' },
        { id: 'blade', name: 'Лезвие' },
        { id: 'boiler', name: 'Бойлер' },
        { id: 'bullet', name: 'Пуля' },
        { id: 'desert', name: 'Пустыня' },
        { id: 'dune', name: 'Дюна' },
        { id: 'firewall', name: 'Противопожарная перегородка' },
        { id: 'glass', name: 'Стекло' },
        { id: 'gold', name: 'Золото' },
        { id: 'sun', name: 'Солнце' },
        { id: 'cloud', name: 'Облако' },
        { id: 'sky', name: 'Небо' },
        { id: 'sea', name: 'Море' },
    ];
})($ || ($ = {}));
//bun/alh/game/elements/elements.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//mol/state/local/local.ts
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));
//mol/state/local/local.web.ts
;
"use strict";
var $;
(function ($) {
    class $bun_alh_game extends $mol_object {
        element_list() {
            return $bun_alh_game_elements;
        }
        element(id) {
            return this.element_list().find((el) => el.id === id) ?? null;
        }
        element_icon(id) {
            return `bun/alh/icons/${id}.svg`;
        }
        element_name(id) {
            return this.element(id)?.name ?? '';
        }
        element_ids_base() {
            return [
                'water',
                'fire',
                'air',
                'earth',
            ];
        }
        element_ids_known(next) {
            if (next) {
                $mol_state_local.value('ids_known', next);
            }
            return next ?? this.element_ids_base();
        }
        element_ids_combined() {
            return this.element_ids_known()
                .filter(id => !this.element_ids_base().includes(id));
        }
        combine_list(next) {
            return next ?? [null, null];
        }
        combine(...elements) {
            return $bun_alh_game_combine(...elements);
        }
        victory() {
            return this.element_ids_known().length === $bun_alh_game_elements.length;
        }
    }
    __decorate([
        $mol_mem_key
    ], $bun_alh_game.prototype, "element", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_game.prototype, "element_icon", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_game.prototype, "element_name", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game.prototype, "element_ids_known", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game.prototype, "element_ids_combined", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game.prototype, "combine_list", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_game.prototype, "combine", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game.prototype, "victory", null);
    $.$bun_alh_game = $bun_alh_game;
})($ || ($ = {}));
//bun/alh/game/game.ts
;
"use strict";
var $;
(function ($) {
    class $mol_ghost extends $mol_view {
        Sub() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//mol/ghost/-view.tree/ghost.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node(next) {
                const node = this.Sub().dom_node(next);
                $mol_dom_render_attributes(node, this.attr_static());
                $mol_dom_render_events(node, this.event());
                return node;
            }
            dom_node_actual() {
                this.dom_node();
                const node = this.Sub().dom_node_actual();
                const attr = this.attr();
                const style = this.style();
                const fields = this.field();
                $mol_dom_render_attributes(node, attr);
                $mol_dom_render_styles(node, style);
                $mol_dom_render_fields(node, fields);
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                const node = Sub.dom_tree();
                try {
                    this.dom_node_actual();
                    this.auto();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                return node;
            }
            title() {
                return this.Sub().title();
            }
            minimal_width() {
                return this.Sub().minimal_width();
            }
            minimal_height() {
                return this.Sub().minimal_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node", null);
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node_actual", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/ghost/ghost.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_drop extends $mol_ghost {
        enabled(next) {
            if (next !== undefined)
                return next;
            return true;
        }
        event() {
            return {
                dragenter: (event) => this.enter(event),
                dragover: (event) => this.move(event),
                dragleave: (event) => this.leave(event),
                drop: (event) => this.drop(event)
            };
        }
        attr() {
            return {
                mol_drop_status: this.status()
            };
        }
        adopt(transfer) {
            if (transfer !== undefined)
                return transfer;
            return {};
        }
        receive(transfer) {
            if (transfer !== undefined)
                return transfer;
            return null;
        }
        allow() {
            return [
                "link",
                "copy",
                "move"
            ];
        }
        enter(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        move(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        leave(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        drop(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        status(next) {
            if (next !== undefined)
                return next;
            return "ready";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "enabled", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "adopt", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "receive", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "enter", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "move", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "leave", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "drop", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "status", null);
    $.$mol_drop = $mol_drop;
})($ || ($ = {}));
//mol/drop/-view.tree/drop.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_drop extends $.$mol_drop {
            status(next = 'ready') { return next; }
            _target = null;
            enter(event) {
                if (event.defaultPrevented)
                    return;
                if (!this.enabled())
                    return;
                const action = this.decide_action(event);
                event.dataTransfer.dropEffect = action;
                if (action !== 'none')
                    this.status('drag');
                this._target = event.target;
                event.preventDefault();
            }
            move(event) {
                if (event.defaultPrevented)
                    return;
                if (!this.enabled())
                    return;
                event.dataTransfer.dropEffect = this.decide_action(event);
                event.preventDefault();
            }
            decide_action(event) {
                const allow = this.allow();
                if (allow.includes('move') && event.shiftKey)
                    return 'move';
                else if (allow.includes('copy') && event.ctrlKey)
                    return 'copy';
                else if (allow.includes('link') && event.altKey)
                    return 'link';
                else
                    return allow[0];
            }
            leave(event) {
                if (this._target === event.target) {
                    this.status('ready');
                }
            }
            receive(transfer) {
                return transfer;
            }
            drop(event) {
                if (event.defaultPrevented)
                    return;
                event.preventDefault();
                setTimeout(() => this.status('ready'));
                const obj = this.adopt(event.dataTransfer);
                if (!obj)
                    return;
                this.receive(obj);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_drop.prototype, "status", null);
        $$.$mol_drop = $mol_drop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/drop/drop.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return {
                ...super.field(),
                src: this.uri(),
                alt: this.title(),
                loading: this.loading(),
                decoding: this.decoding(),
                crossOrigin: this.cors()
            };
        }
        attr() {
            return {
                ...super.attr(),
                width: this.natural_width(),
                height: this.natural_height()
            };
        }
        event() {
            return {
                load: (next) => this.load(next)
            };
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        uri() {
            return "";
        }
        loading() {
            return "eager";
        }
        decoding() {
            return "async";
        }
        cors() {
            return null;
        }
        natural_width(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        natural_height(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        load(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_image.prototype, "natural_width", null);
    __decorate([
        $mol_mem
    ], $mol_image.prototype, "natural_height", null);
    __decorate([
        $mol_mem
    ], $mol_image.prototype, "load", null);
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//mol/image/-view.tree/image.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_image extends $.$mol_image {
            natural_width(next) {
                const dom = this.dom_node();
                if (dom.naturalWidth)
                    return dom.naturalWidth;
                const found = this.uri().match(/\bwidth=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            natural_height(next) {
                const dom = this.dom_node();
                if (dom.naturalHeight)
                    return dom.naturalHeight;
                const found = this.uri().match(/\bheight=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            load() {
                this.natural_width(null);
                this.natural_height(null);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_width", null);
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_height", null);
        $$.$mol_image = $mol_image;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/image/image.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tobject-fit: cover;\n\theight: fit-content;\n}\n");
})($ || ($ = {}));
//mol/image/-css/image.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $bun_alh_game_cell extends $mol_view {
        element_size() {
            return 64;
        }
        size() {
            return 64;
        }
        attr() {
            return {
                ...super.attr(),
                title: this.hint()
            };
        }
        style() {
            return {
                width: this.size(),
                height: this.size()
            };
        }
        Element_icon() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.element_icon();
            obj.natural_width = () => this.element_size();
            obj.natural_height = () => this.element_size();
            obj.title = () => this.element_name();
            return obj;
        }
        Element_title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.element_name()
            ];
            return obj;
        }
        Text() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.text()
            ];
            return obj;
        }
        hint() {
            return "";
        }
        element_icon() {
            return "";
        }
        element_name() {
            return "";
        }
        text() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $bun_alh_game_cell.prototype, "Element_icon", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_cell.prototype, "Element_title", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_cell.prototype, "Text", null);
    $.$bun_alh_game_cell = $bun_alh_game_cell;
})($ || ($ = {}));
//bun/alh/game/cell/-view.tree/cell.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bun_alh_game_cell extends $.$bun_alh_game_cell {
            size() {
                return this.element_size() + 50;
            }
            sub() {
                return [
                    ...this.element_icon()
                        ? [this.Element_icon(), this.Element_title()]
                        : [this.Text()],
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $bun_alh_game_cell.prototype, "size", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_cell.prototype, "sub", null);
        $$.$bun_alh_game_cell = $bun_alh_game_cell;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/game/cell/cell.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($bun_alh_game_cell, {
            flexDirection: 'column',
            justify: {
                content: 'center'
            },
            align: {
                items: 'center',
            },
            padding: '5px',
            margin: [0, '5px'],
            borderRadius: '15px',
            cursor: 'pointer',
            Element_title: {
                font: {
                    size: '16px',
                    weight: 'bold',
                },
                margin: {
                    top: '5px',
                },
                textAlign: 'center',
            },
            Text: {
                textAlign: 'center',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/game/cell/cell.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_drag extends $mol_ghost {
        event() {
            return {
                dragstart: (event) => this.drag_start(event),
                drag: (event) => this.drag_move(event),
                dragend: (event) => this.drag_end(event)
            };
        }
        attr() {
            return {
                draggable: true,
                mol_drag_status: this.status()
            };
        }
        transfer() {
            return {
                "text/plain": "",
                "text/html": "",
                "text/uri-list": ""
            };
        }
        allow_copy() {
            return true;
        }
        allow_link() {
            return true;
        }
        allow_move() {
            return true;
        }
        image() {
            return this.dom_node();
        }
        start(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        drag_start(event) {
            return this.start(event);
        }
        move(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        drag_move(event) {
            return this.move(event);
        }
        end(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        drag_end(event) {
            return this.end(event);
        }
        status(next) {
            if (next !== undefined)
                return next;
            return "ready";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_drag.prototype, "start", null);
    __decorate([
        $mol_mem
    ], $mol_drag.prototype, "move", null);
    __decorate([
        $mol_mem
    ], $mol_drag.prototype, "end", null);
    __decorate([
        $mol_mem
    ], $mol_drag.prototype, "status", null);
    $.$mol_drag = $mol_drag;
})($ || ($ = {}));
//mol/drag/-view.tree/drag.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_drag extends $.$mol_drag {
            status(next = 'ready') { return next; }
            drag_start(event) {
                setTimeout(() => this.status('drag'));
                const transfer = this.transfer();
                for (let type in transfer) {
                    event.dataTransfer.setData(type, transfer[type]);
                }
                event.dataTransfer.setDragImage(this.image(), 0, -32);
                const effects = [];
                if (this.allow_copy())
                    effects.push('Copy');
                if (this.allow_link())
                    effects.push('Link');
                if (this.allow_move())
                    effects.push('Move');
                let effectAllowed = effects[0].toLowerCase() + effects.slice(1).join('');
                if (effectAllowed === 'copyLinkMove')
                    effectAllowed = 'all';
                event.dataTransfer.effectAllowed = effectAllowed;
                this.start(event);
            }
            drag_end(event) {
                setTimeout(() => this.status('ready'));
                this.end(event);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_drag.prototype, "status", null);
        $$.$mol_drag = $mol_drag;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/drag/drag.view.ts
;
"use strict";
var $;
(function ($) {
    class $bun_alh_game_cell_drag extends $mol_drag {
        from_id() {
            return "";
        }
        from_data() {
            return null;
        }
        current_dragged(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        transfer() {
            return {
                "text/plain": this.element_id(),
                "text/html": this.element_name(),
                "text/uri-list": ""
            };
        }
        Sub() {
            return this.Cell();
        }
        element_id() {
            return "";
        }
        element_name() {
            return "";
        }
        hint() {
            return this.element_name();
        }
        element_icon() {
            return "";
        }
        element_size() {
            return 0;
        }
        Cell() {
            const obj = new this.$.$bun_alh_game_cell();
            obj.hint = () => this.hint();
            obj.element_icon = () => this.element_icon();
            obj.element_name = () => this.element_name();
            obj.element_size = () => this.element_size();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $bun_alh_game_cell_drag.prototype, "current_dragged", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_cell_drag.prototype, "Cell", null);
    $.$bun_alh_game_cell_drag = $bun_alh_game_cell_drag;
})($ || ($ = {}));
//bun/alh/game/cell/drag/-view.tree/drag.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bun_alh_game_cell_drag extends $.$bun_alh_game_cell_drag {
            auto() {
                this.drag_image();
            }
            from_data() {
                return undefined;
            }
            drag_image() {
                if (this.element_icon()) {
                    const container_id = 'element_icon_canvas_container';
                    var container = document.getElementById(container_id);
                    if (!container) {
                        var container_div = document.createElement('div');
                        container_div.setAttribute('id', container_id);
                        container_div.style.position = 'absolute';
                        container_div.style.top = '-100%';
                        container_div.style.left = '-100%';
                        document.body.appendChild(container_div);
                        container = container_div;
                    }
                    const id = `${this.element_id()}_canvas`;
                    var canvas_from_dom = document.getElementById(id)
                        ?? null;
                    if (!canvas_from_dom) {
                        var canvas = document.createElement('canvas');
                        canvas.setAttribute('id', id);
                        canvas.width = this.element_size();
                        canvas.height = this.element_size();
                        var ctx = canvas.getContext('2d');
                        var img_source = new Image();
                        img_source.src = this.element_icon();
                        img_source.onload = () => {
                            ctx.drawImage(img_source, 0, 0, canvas.width, canvas.height);
                        };
                        container.appendChild(canvas);
                        return canvas;
                    }
                    return canvas_from_dom;
                }
                return new Image;
            }
            drag_image_offset() {
                return this.element_size() / 2;
            }
            drag_start(e) {
                if (this.element_id()) {
                    super.drag_start(e);
                    e.dataTransfer?.setDragImage(this.drag_image(), this.drag_image_offset(), this.drag_image_offset());
                    this.current_dragged({ id: this.element_id(), from: this.from_id(), data: this.from_data() });
                }
                else {
                    e.preventDefault();
                }
            }
            drag_end() {
                super.drag_end();
                this.current_dragged(null);
            }
        }
        __decorate([
            $mol_mem
        ], $bun_alh_game_cell_drag.prototype, "drag_image", null);
        $$.$bun_alh_game_cell_drag = $bun_alh_game_cell_drag;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/game/cell/drag/drag.view.ts
;
"use strict";
var $;
(function ($) {
    class $bun_alh_game_cell_known extends $bun_alh_game_cell_drag {
        combine_list(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        event() {
            return {
                ...super.event(),
                dblclick: (next) => this.add_element_to_empty_combine_cell(next)
            };
        }
        from_id() {
            return "known";
        }
        add_element_to_empty_combine_cell(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $bun_alh_game_cell_known.prototype, "combine_list", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_cell_known.prototype, "add_element_to_empty_combine_cell", null);
    $.$bun_alh_game_cell_known = $bun_alh_game_cell_known;
})($ || ($ = {}));
//bun/alh/game/cell/known/-view.tree/known.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bun_alh_game_cell_known extends $.$bun_alh_game_cell_known {
            add_element_to_empty_combine_cell() {
                var new_combine_list = this.combine_list().slice();
                for (var i = 0; i < this.combine_list().length; ++i) {
                    if (new_combine_list[i] === null) {
                        new_combine_list[i] = this.element_id();
                        break;
                    }
                }
                this.combine_list(new_combine_list);
            }
        }
        __decorate([
            $mol_action
        ], $bun_alh_game_cell_known.prototype, "add_element_to_empty_combine_cell", null);
        $$.$bun_alh_game_cell_known = $bun_alh_game_cell_known;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/game/cell/known/known.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($bun_alh_game_cell_known, {
            background: {
                color: $bun_alh_theme.main,
            },
            border: {
                width: '2px',
                style: 'solid',
                color: $bun_alh_theme.border,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/game/cell/known/known.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $bun_scroll_hor extends $mol_view {
        event() {
            return {
                ...super.event(),
                wheel: (next) => this.on_wheel(next)
            };
        }
        on_wheel(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $bun_scroll_hor.prototype, "on_wheel", null);
    $.$bun_scroll_hor = $bun_scroll_hor;
})($ || ($ = {}));
//bun/scroll/hor/-view.tree/hor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bun_scroll_hor extends $.$bun_scroll_hor {
            on_wheel(e) {
                var node = this.dom_node();
                var delta = e.deltaY;
                node.scrollLeft += delta;
            }
        }
        __decorate([
            $mol_action
        ], $bun_scroll_hor.prototype, "on_wheel", null);
        $$.$bun_scroll_hor = $bun_scroll_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/scroll/hor/hor.view.ts
;
"use strict";
var $;
(function ($) {
    class $bun_alh_game_cell_combine extends $mol_drop {
        ord() {
            return 0;
        }
        combine_list(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        adopt(next) {
            return this.transfer_adopt(next);
        }
        event() {
            return {
                ...super.event(),
                dblclick: (next) => this.clear(next)
            };
        }
        Sub() {
            return this.Drag();
        }
        transfer_adopt(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        clear(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        element_name() {
            return "";
        }
        element_id(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        element_icon() {
            return "";
        }
        element_size() {
            return 0;
        }
        current_dragged(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        drag_from_data() {
            return null;
        }
        Drag() {
            const obj = new this.$.$bun_alh_game_cell_drag();
            obj.hint = () => this.element_name();
            obj.element_id = () => this.element_id();
            obj.element_name = () => this.element_name();
            obj.element_icon = () => this.element_icon();
            obj.element_size = () => this.element_size();
            obj.current_dragged = (next) => this.current_dragged(next);
            obj.from_id = () => "combine";
            obj.from_data = () => this.drag_from_data();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $bun_alh_game_cell_combine.prototype, "combine_list", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_cell_combine.prototype, "transfer_adopt", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_cell_combine.prototype, "clear", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_cell_combine.prototype, "element_id", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_cell_combine.prototype, "current_dragged", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_cell_combine.prototype, "Drag", null);
    $.$bun_alh_game_cell_combine = $bun_alh_game_cell_combine;
})($ || ($ = {}));
//bun/alh/game/cell/combine/-view.tree/combine.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $bun_array_swap(arr, ind1, ind2) {
        var res = arr.slice(0);
        var tmp = res[ind1];
        res[ind1] = res[ind2];
        res[ind2] = tmp;
        return res;
    }
    $.$bun_array_swap = $bun_array_swap;
})($ || ($ = {}));
//bun/array/swap/swap.ts
;
"use strict";
var $;
(function ($) {
    function $bun_array_write(arr, index, new_el) {
        var res = arr.slice();
        res[index] = new_el;
        return res;
    }
    $.$bun_array_write = $bun_array_write;
})($ || ($ = {}));
//bun/array/write/write.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bun_alh_game_cell_combine extends $.$bun_alh_game_cell_combine {
            drag_from_data() {
                return { ord: this.ord() };
            }
            transfer_adopt(transfer) {
                var element_id = transfer.getData('text/plain');
                return element_id;
            }
            receive(element_id) {
                if (element_id === this.current_dragged()?.id) {
                    if (this.element_id() === this.current_dragged().id) {
                        return;
                    }
                    if (this.current_dragged().from === 'combine') {
                        this.combine_list($bun_array_swap(this.combine_list(), 0, 1));
                    }
                    else {
                        this.combine_list($bun_array_write(this.combine_list(), this.ord(), element_id));
                    }
                }
            }
            clear() {
                this.element_id(null);
            }
        }
        __decorate([
            $mol_action
        ], $bun_alh_game_cell_combine.prototype, "clear", null);
        $$.$bun_alh_game_cell_combine = $bun_alh_game_cell_combine;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/game/cell/combine/combine.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($bun_alh_game_cell_combine, {
            Drag: {
                margin: [0, '15px'],
                background: {
                    color: '#cfc49d',
                },
                '@': {
                    mol_drop_status: {
                        drag: {
                            boxShadow: '0 0 19px 11px var( --bun_alh_theme_border )'
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/game/cell/combine/combine.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $bun_alh_game_cell_result extends $bun_alh_game_cell {
        combine_list() {
            return [];
        }
        attr() {
            return {
                ...super.attr(),
                useless: this.useless(),
                new: this.new()
            };
        }
        text() {
            return "Ничего...";
        }
        useless() {
            return false;
        }
        new() {
            return false;
        }
    }
    $.$bun_alh_game_cell_result = $bun_alh_game_cell_result;
})($ || ($ = {}));
//bun/alh/game/cell/result/-view.tree/result.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bun_alh_game_cell_result extends $.$bun_alh_game_cell_result {
            text() {
                var empty_count = this.combine_list().filter(elem => elem === null).length;
                if (empty_count >= 2) {
                    return `Нужны ещё ${empty_count} элемента!`;
                }
                else if (empty_count === 1) {
                    return `Нужен ещё ${empty_count} элемент!`;
                }
                else {
                    return 'Ничего...';
                }
            }
            hint() {
                return this.useless()
                    ? 'Вы уже изучили этот элемент'
                    : this.element_name();
            }
        }
        __decorate([
            $mol_mem
        ], $bun_alh_game_cell_result.prototype, "text", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_cell_result.prototype, "hint", null);
        $$.$bun_alh_game_cell_result = $bun_alh_game_cell_result;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/game/cell/result/result.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($bun_alh_game_cell_result, {
            background: {
                color: '#b3a58c',
            },
            border: {
                width: '2px',
                style: 'solid',
                color: $bun_alh_theme.border,
            },
            Text: {
                color: '#818281',
                font: {
                    size: '18px',
                    weight: 'bold',
                },
            },
            '>': {
                $mol_view: {
                    userSelect: 'none',
                },
            },
            '@': {
                useless: {
                    true: {
                        background: {
                            color: '#998c75',
                            image: `repeating-linear-gradient(
								-45deg,
								#b3a58c 0px 22px,
								#0000 22px 55px
							)`,
                        },
                        userSelect: 'none',
                        cursor: 'not-allowed',
                        '>': {
                            $mol_view: {
                                opacity: 0.5,
                                pointerEvents: 'none',
                            },
                        },
                    },
                },
                new: {
                    true: {
                        background: {
                            color: $bun_alh_theme.main,
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/game/cell/result/result.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $bun_alh_game_page extends $bun_alh_page {
        app_page(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        title() {
            return "bun_alh";
        }
        with_back() {
            return true;
        }
        back(next) {
            return this.open_start_page(next);
        }
        back_hint() {
            return "Назад в меню";
        }
        Head_container_sub() {
            return [
                this.Back_button(),
                this.Head_title(),
                this.Recipes_button()
            ];
        }
        element(id) {
            return this.model().element(id);
        }
        element_name(id) {
            return this.model().element_name(id);
        }
        victory() {
            return this.model().victory();
        }
        model() {
            const obj = new this.$.$bun_alh_game();
            return obj;
        }
        current_dragged(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        combine_list(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        drag_from(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        content() {
            return [
                this.Drop_zone(),
                this.Field()
            ];
        }
        open_start_page(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        open_recipes(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Recipes_button() {
            const obj = new this.$.$mol_button();
            obj.title = () => "Рецепты";
            obj.hint = () => "Открытые рецепты";
            obj.click = (next) => this.open_recipes(next);
            return obj;
        }
        field_adopt(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        field_receive(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Zone() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Drop_zone() {
            const obj = new this.$.$mol_drop();
            obj.adopt = (next) => this.field_adopt(next);
            obj.receive = (next) => this.field_receive(next);
            obj.Sub = () => this.Zone();
            return obj;
        }
        victory_message_text() {
            return "Все элементы открыты! Это победа.";
        }
        Victory_message() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.victory_message_text()
            ];
            return obj;
        }
        element_id(id) {
            return "";
        }
        element_icon(id) {
            return "";
        }
        element_size() {
            return 0;
        }
        Element_cell(id) {
            const obj = new this.$.$bun_alh_game_cell_known();
            obj.current_dragged = (next) => this.current_dragged(next);
            obj.combine_list = (next) => this.combine_list(next);
            obj.element_id = () => this.element_id(id);
            obj.element_icon = () => this.element_icon(id);
            obj.element_name = () => this.element_name(id);
            obj.element_size = () => this.element_size();
            return obj;
        }
        elements() {
            return [
                this.Element_cell("0")
            ];
        }
        Known_elements_scroll() {
            const obj = new this.$.$bun_scroll_hor();
            obj.sub = () => this.elements();
            return obj;
        }
        known_elements_sub() {
            return [
                this.Victory_message(),
                this.Known_elements_scroll()
            ];
        }
        Known_elements() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.known_elements_sub();
            return obj;
        }
        cell_combine_ord(id) {
            return 0;
        }
        combine_element_id(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        combine_element_icon(id) {
            return "";
        }
        combine_element_name(id) {
            return "";
        }
        Cell_combine(id) {
            const obj = new this.$.$bun_alh_game_cell_combine();
            obj.ord = () => this.cell_combine_ord(id);
            obj.combine_list = (next) => this.combine_list(next);
            obj.current_dragged = (next) => this.current_dragged(next);
            obj.element_id = (next) => this.combine_element_id(id, next);
            obj.element_icon = () => this.combine_element_icon(id);
            obj.element_name = () => this.combine_element_name(id);
            obj.element_size = () => this.element_size();
            return obj;
        }
        cells_combine() {
            return [
                this.Cell_combine("0")
            ];
        }
        result_element_name() {
            return "";
        }
        result_element_icon() {
            return "";
        }
        result_element_useless() {
            return false;
        }
        result_element_new() {
            return false;
        }
        on_result_click(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Cell_result() {
            const obj = new this.$.$bun_alh_game_cell_result();
            obj.element_name = () => this.result_element_name();
            obj.element_icon = () => this.result_element_icon();
            obj.element_size = () => this.element_size();
            obj.combine_list = () => this.combine_list();
            obj.useless = () => this.result_element_useless();
            obj.new = () => this.result_element_new();
            obj.event = () => ({
                click: (next) => this.on_result_click(next)
            });
            return obj;
        }
        combine_sub() {
            return [
                this.cells_combine(),
                this.Cell_result()
            ];
        }
        Combine() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.combine_sub();
            return obj;
        }
        Field() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Known_elements(),
                this.Combine()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "app_page", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "model", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "current_dragged", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "combine_list", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "drag_from", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "open_start_page", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "open_recipes", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "Recipes_button", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "field_adopt", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "field_receive", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "Zone", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "Drop_zone", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "Victory_message", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_game_page.prototype, "Element_cell", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "Known_elements_scroll", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "Known_elements", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_game_page.prototype, "combine_element_id", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_game_page.prototype, "Cell_combine", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "on_result_click", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "Cell_result", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "Combine", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_page.prototype, "Field", null);
    $.$bun_alh_game_page = $bun_alh_game_page;
})($ || ($ = {}));
//bun/alh/game/page/-view.tree/game.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bun_alh_game_page extends $.$bun_alh_game_page {
            auto() {
                this.on_game_open();
            }
            on_game_open() {
                this.element_ids_known($mol_state_local.value('ids_known'));
            }
            open_start_page() {
                this.app_page('start');
            }
            open_recipes() {
                this.app_page('recipes');
            }
            element_ids_known(next) {
                return this.model().element_ids_known(next);
            }
            elements() {
                return this.element_ids_known().map(id => this.Element_cell(id));
            }
            element_id(id) {
                return id;
            }
            element_icon(id) {
                if (id === null)
                    return '';
                return this.model().element_icon(id);
            }
            element_size() {
                return 125;
            }
            known_elements_sub() {
                return [
                    ...this.victory() ? [this.Victory_message()] : [],
                    this.Known_elements_scroll(),
                ];
            }
            current_dragged(next) {
                if (next === undefined)
                    return null;
                if (next === null)
                    return null;
                if (this.model().element(next.id) !== null) {
                    return next;
                }
                return null;
            }
            field_adopt(transfer) {
                return transfer.getData('text/plain');
            }
            field_receive(element_id) {
                if (element_id === this.current_dragged()?.id) {
                    if (this.current_dragged()?.from === 'combine') {
                        this.combine_element_id(this.current_dragged()?.data.ord, null);
                    }
                }
            }
            combine_list(next) {
                return this.model().combine_list(next);
            }
            cells_combine() {
                return Array.from({ length: 2 }, (_, i) => this.Cell_combine(i));
            }
            cell_combine_ord(ord) {
                return ord;
            }
            combine_element_id(ord, next) {
                if (next !== undefined) {
                    this.combine_list($bun_array_write(this.combine_list(), ord, next));
                }
                return this.combine_list()[ord] ?? '';
            }
            combine_element_name(ord) {
                return this.element_name(this.combine_list()[ord]);
            }
            combine_element_icon(ord) {
                return this.element_icon(this.combine_list()[ord]);
            }
            combine_sub() {
                return [
                    ...this.cells_combine(),
                    this.Cell_result(),
                ];
            }
            element_useless(element_id) {
                if (!element_id)
                    return false;
                return this.element_ids_known().includes(element_id);
            }
            result_element_id() {
                return this.model().combine(...this.combine_list())
                    ??
                        null;
            }
            result_element_useless() {
                return this.element_useless(this.result_element_id());
            }
            result_element_new() {
                return Boolean(this.result_element_id()
                    &&
                        !this.result_element_useless());
            }
            result_element_icon() {
                return this.element_icon(this.result_element_id());
            }
            result_element_name() {
                return this.element_name(this.result_element_id());
            }
            clear_combine_list() {
                this.combine_list([null, null]);
            }
            know_element(element_id) {
                this.element_ids_known([
                    ...this.element_ids_known(),
                    element_id,
                ]);
            }
            grab_element(element_id) {
                if (!this.element_useless(element_id)) {
                    this.know_element(element_id);
                    this.clear_combine_list();
                }
            }
            on_result_click() {
                if (this.result_element_id()) {
                    this.grab_element(this.result_element_id());
                }
            }
        }
        __decorate([
            $mol_action
        ], $bun_alh_game_page.prototype, "on_game_open", null);
        __decorate([
            $mol_action
        ], $bun_alh_game_page.prototype, "open_start_page", null);
        __decorate([
            $mol_action
        ], $bun_alh_game_page.prototype, "open_recipes", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_page.prototype, "element_ids_known", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_page.prototype, "elements", null);
        __decorate([
            $mol_mem_key
        ], $bun_alh_game_page.prototype, "element_id", null);
        __decorate([
            $mol_mem_key
        ], $bun_alh_game_page.prototype, "element_icon", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_page.prototype, "known_elements_sub", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_page.prototype, "current_dragged", null);
        __decorate([
            $mol_action
        ], $bun_alh_game_page.prototype, "field_adopt", null);
        __decorate([
            $mol_action
        ], $bun_alh_game_page.prototype, "field_receive", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_page.prototype, "combine_list", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_page.prototype, "cells_combine", null);
        __decorate([
            $mol_mem_key
        ], $bun_alh_game_page.prototype, "cell_combine_ord", null);
        __decorate([
            $mol_mem_key
        ], $bun_alh_game_page.prototype, "combine_element_id", null);
        __decorate([
            $mol_mem_key
        ], $bun_alh_game_page.prototype, "combine_element_name", null);
        __decorate([
            $mol_mem_key
        ], $bun_alh_game_page.prototype, "combine_element_icon", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_page.prototype, "combine_sub", null);
        __decorate([
            $mol_mem_key
        ], $bun_alh_game_page.prototype, "element_useless", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_page.prototype, "result_element_id", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_page.prototype, "result_element_useless", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_page.prototype, "result_element_new", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_page.prototype, "result_element_icon", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_page.prototype, "result_element_name", null);
        __decorate([
            $mol_action
        ], $bun_alh_game_page.prototype, "clear_combine_list", null);
        __decorate([
            $mol_action
        ], $bun_alh_game_page.prototype, "know_element", null);
        __decorate([
            $mol_action
        ], $bun_alh_game_page.prototype, "grab_element", null);
        __decorate([
            $mol_action
        ], $bun_alh_game_page.prototype, "on_result_click", null);
        $$.$bun_alh_game_page = $bun_alh_game_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/game/page/game.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($bun_alh_game_page, {
            flex: {
                grow: 1,
                shrink: 0,
                basis: 0,
            },
            Head_container: {
                zIndex: 2,
            },
            Recipes_button: {
                position: 'absolute',
                top: '14.5px',
                left: '127px',
                padding: '8px',
                background: {
                    color: $bun_alh_theme.main_bold,
                },
                font: {
                    size: '18px',
                    weight: 'bold',
                },
            },
            Drop_zone: {
                position: 'absolute',
                top: '0px',
                left: '0px',
                zIndex: 1,
                width: '100%',
                height: '100%',
            },
            Field: {
                flex: {
                    grow: 1,
                    shrink: 0,
                    basis: 0,
                    direction: 'column',
                },
                align: {
                    items: 'center',
                },
                padding: '35px',
            },
            Known_elements: {
                zIndex: 2,
                flex: {
                    direction: 'column',
                },
                align: {
                    items: 'center',
                },
                maxWidth: '100%',
                padding: '15px',
                background: {
                    color: $bun_alh_theme.main_light,
                },
                border: {
                    width: '6px',
                    style: 'solid',
                    color: $bun_alh_theme.border,
                    radius: '15px',
                },
            },
            Victory_message: {
                position: 'relative',
                top: '-9px',
                color: $bun_alh_theme.victory,
                font: {
                    size: '18px',
                    weight: 'bold',
                },
            },
            Known_elements_scroll: {
                maxWidth: '100%',
                overflow: {
                    x: 'auto',
                },
                paddingBottom: '7px',
            },
            Combine: {
                zIndex: 2,
                flex: {
                    grow: 1,
                    shrink: 0,
                    basis: 0,
                },
                align: {
                    items: 'center',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/game/page/game.view.css.ts
;
"use strict";
var $;
(function ($) {
    $.$bun_alh_game_recipes = {
        dust: ['air', 'earth'],
        energy: ['air', 'fire'],
        land: ['earth', 'earth'],
        lava: ['fire', 'earth'],
        mist: ['air', 'water'],
        mud: ['water', 'earth'],
        pressure: ['air', 'air'],
        puddle: ['water', 'water'],
        smoke: ['fire', 'air'],
        steam: ['water', 'fire'],
        brick: ['mud', 'fire'],
        continent: ['land', 'earth'],
        earthquake: ['earth', 'energy'],
        eruption: ['pressure', 'lava'],
        geyser: ['steam', 'earth'],
        granite: ['pressure', 'lava'],
        gunpowder: ['energy', 'dust'],
        heat: ['air', 'energy'],
        obsidian: ['lava', 'water'],
        pond: ['puddle', 'water'],
        stone: ['earth', 'pressure'],
        volcano: ['lava', 'earth'],
        wind: ['air', 'pressure'],
        chimney: ['smoke', 'brick'],
        clay: ['mud', 'stone'],
        explosion: ['fire', 'gunpowder'],
        lake: ['pond', 'water'],
        metal: ['stone', 'fire'],
        mountain: ['earth', 'earthquake'],
        planet: ['continent', 'continent'],
        plasma: ['heat', 'pressure'],
        sand: ['stone', 'wind'],
        tornado: ['wind', 'wind'],
        wall: ['brick', 'brick'],
        warmth: ['heat', 'air'],
        atmosphere: ['air', 'planet'],
        atomic_bomb: ['explosion', 'energy'],
        avalanche: ['earthquake', 'mountain'],
        beach: ['sand', 'ocean'],
        blade: ['stone', 'metal'],
        boiler: ['pressure', 'metal'],
        bullet: ['gunpowder', 'metal'],
        desert: ['sand', 'sand'],
        dune: ['wind', 'desert '],
        firewall: ['fire', 'wall'],
        glass: ['sand', 'fire'],
        gold: ['metal', 'sun'],
        sun: ['fire', 'sky'],
        cloud: ['air', 'steam'],
        sky: ['air', 'cloud'],
        sea: ['water', 'lake'],
    };
})($ || ($ = {}));
//bun/alh/game/recipes/recipes.ts
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//mol/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = (!/Gecko\//.test(navigator.userAgent)
            && this.$mol_dom_context.CSS?.supports('overflow-anchor:auto')) ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//mol/support/css/css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//mol/dom/listener/listener.ts
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//mol/print/print.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));
//mol/mem/cached/cached.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = Math.max(0, max - 1);
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = Math.min(min + 1, kids.length);
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));
//mol/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $mol_icon {
        path() {
            return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//mol/icon/plus/-view.tree/plus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_arrow_right extends $mol_icon {
        path() {
            return "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z";
        }
    }
    $.$mol_icon_arrow_right = $mol_icon_arrow_right;
})($ || ($ = {}));
//mol/icon/arrow/right/-view.tree/right.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_arrow_right_bold extends $mol_icon {
        path() {
            return "M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z";
        }
    }
    $.$mol_icon_arrow_right_bold = $mol_icon_arrow_right_bold;
})($ || ($ = {}));
//mol/icon/arrow/right/bold/-view.tree/bold.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_arrow_right_bold_outline extends $mol_icon {
        path() {
            return "M11,16H3V8H11V2L21,12L11,22V16M13,7V10H5V14H13V17L18,12L13,7Z";
        }
    }
    $.$mol_icon_arrow_right_bold_outline = $mol_icon_arrow_right_bold_outline;
})($ || ($ = {}));
//mol/icon/arrow/right/bold/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $bun_alh_game_recipes_page extends $bun_alh_page {
        title() {
            return "Рецепты";
        }
        with_back() {
            return true;
        }
        back_hint() {
            return "Назад к игре";
        }
        back(next) {
            return this.open_game(next);
        }
        app_page(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        elements() {
            return [];
        }
        element_icon(id) {
            return "";
        }
        element_name(id) {
            return "";
        }
        element_size() {
            return 80;
        }
        No_recipes() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                "У Вас пока нет открытых рецептов..."
            ];
            return obj;
        }
        Recipe_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.recipe_rows();
            return obj;
        }
        content() {
            return [
                this.Board()
            ];
        }
        open_game(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        ing_icon(id) {
            return "";
        }
        ing_name(id) {
            return "";
        }
        Ing(id) {
            const obj = new this.$.$bun_alh_game_cell();
            obj.element_size = () => this.element_size();
            obj.element_icon = () => this.ing_icon(id);
            obj.element_name = () => this.ing_name(id);
            return obj;
        }
        Plus_icon(id) {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Ings_plus_icon(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Plus_icon(id)
            ];
            return obj;
        }
        ing_rows(id) {
            return [
                this.Ing(id),
                this.Ings_plus_icon(id)
            ];
        }
        Ings(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.ing_rows(id);
            return obj;
        }
        Result_icon(id) {
            const obj = new this.$.$mol_icon_arrow_right_bold_outline();
            return obj;
        }
        Recipe_result_icon(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Result_icon(id)
            ];
            return obj;
        }
        Result(id) {
            const obj = new this.$.$bun_alh_game_cell_result();
            obj.element_size = () => this.element_size();
            obj.element_icon = () => this.element_icon(id);
            obj.element_name = () => this.element_name(id);
            obj.new = () => true;
            return obj;
        }
        Recipe(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Ings(id),
                this.Recipe_result_icon(id),
                this.Result(id)
            ];
            return obj;
        }
        recipe_rows() {
            return [
                this.Recipe("0")
            ];
        }
        board_title() {
            return "Открытые рецепты";
        }
        board_content() {
            return [];
        }
        Board() {
            const obj = new this.$.$bun_alh_board();
            obj.title = () => this.board_title();
            obj.content = () => this.board_content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $bun_alh_game_recipes_page.prototype, "app_page", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_recipes_page.prototype, "No_recipes", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_recipes_page.prototype, "Recipe_list", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_recipes_page.prototype, "open_game", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_game_recipes_page.prototype, "Ing", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_game_recipes_page.prototype, "Plus_icon", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_game_recipes_page.prototype, "Ings_plus_icon", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_game_recipes_page.prototype, "Ings", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_game_recipes_page.prototype, "Result_icon", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_game_recipes_page.prototype, "Recipe_result_icon", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_game_recipes_page.prototype, "Result", null);
    __decorate([
        $mol_mem_key
    ], $bun_alh_game_recipes_page.prototype, "Recipe", null);
    __decorate([
        $mol_mem
    ], $bun_alh_game_recipes_page.prototype, "Board", null);
    $.$bun_alh_game_recipes_page = $bun_alh_game_recipes_page;
})($ || ($ = {}));
//bun/alh/game/recipes/page/-view.tree/recipes.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bun_alh_game_recipes_page extends $.$bun_alh_game_recipes_page {
            open_game() {
                this.app_page('game');
            }
            recipe_count_total() {
                return Object.keys($bun_alh_game_recipes).length;
            }
            recipe_count_known() {
                return this.elements().length;
            }
            board_title() {
                return `Открытые рецепты (${this.recipe_count_known()}/${this.recipe_count_total()})`;
            }
            board_content() {
                return this.elements().length
                    ? [this.Recipe_list()]
                    : [this.No_recipes()];
            }
            element_id_no_idx(id) {
                return id.split('_')[0];
            }
            ing_icon(id) {
                return this.element_icon(this.element_id_no_idx(id));
            }
            ing_name(id) {
                return this.element_name(this.element_id_no_idx(id));
            }
            ings(element) {
                return $bun_alh_game_recipes[element];
            }
            ing_rows_components(element) {
                return this.ings(element)
                    .map((ing, idx) => this.Ing(`${ing}_${element}_${idx}`));
            }
            ing_rows(element) {
                return this.ing_rows_components(element)
                    .reduce((rows, ing_comp, idx, comps) => {
                    rows.push(ing_comp);
                    if (idx !== comps.length - 1) {
                        rows.push(this.Ings_plus_icon(`${element}_${idx}`));
                    }
                    return rows;
                }, []);
            }
            recipe_rows() {
                return this.elements().map((element) => this.Recipe(element));
            }
        }
        __decorate([
            $mol_action
        ], $bun_alh_game_recipes_page.prototype, "open_game", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_recipes_page.prototype, "recipe_count_total", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_recipes_page.prototype, "recipe_count_known", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_recipes_page.prototype, "board_title", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_recipes_page.prototype, "board_content", null);
        __decorate([
            $mol_mem_key
        ], $bun_alh_game_recipes_page.prototype, "element_id_no_idx", null);
        __decorate([
            $mol_mem_key
        ], $bun_alh_game_recipes_page.prototype, "ing_icon", null);
        __decorate([
            $mol_mem_key
        ], $bun_alh_game_recipes_page.prototype, "ing_name", null);
        __decorate([
            $mol_mem_key
        ], $bun_alh_game_recipes_page.prototype, "ings", null);
        __decorate([
            $mol_mem_key
        ], $bun_alh_game_recipes_page.prototype, "ing_rows_components", null);
        __decorate([
            $mol_mem_key
        ], $bun_alh_game_recipes_page.prototype, "ing_rows", null);
        __decorate([
            $mol_mem
        ], $bun_alh_game_recipes_page.prototype, "recipe_rows", null);
        $$.$bun_alh_game_recipes_page = $bun_alh_game_recipes_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/game/recipes/page/recipes.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($bun_alh_game_recipes_page, {
            No_recipes: {
                color: '#5a5a5a',
                font: {
                    weight: 'bold',
                },
            },
            Recipe_list: {
                maxHeight: '100%',
                overflow: {
                    y: 'auto',
                },
                padding: {
                    right: '7px',
                },
            },
            Recipe: {
                margin: ['8px', '0px'],
            },
            Ings_plus_icon: {
                align: {
                    items: 'center',
                },
            },
            Ing: {
                background: {
                    color: $bun_alh_theme.main_bold_alpha,
                },
                border: {
                    width: '3px',
                    style: 'solid',
                    color: $bun_alh_theme.border_bold,
                },
                cursor: 'auto',
                Element_title: {
                    font: {
                        size: '13px',
                    },
                },
            },
            Plus_icon: {
                width: '30px',
                height: '30px',
            },
            Recipe_result_icon: {
                align: {
                    items: 'center',
                },
            },
            Result_icon: {
                width: '30px',
                height: '30px',
            },
            Result: {
                border: {
                    width: '3px',
                    color: $bun_alh_theme.border_bold,
                },
                cursor: 'auto',
                Element_title: {
                    font: {
                        size: '13px',
                    },
                },
                '>': {
                    $mol_view: {
                        userSelect: 'all',
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/game/recipes/page/recipes.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $bun_alh_app_menu_button extends $mol_button {
    }
    $.$bun_alh_app_menu_button = $bun_alh_app_menu_button;
})($ || ($ = {}));
//bun/alh/app/menu/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($bun_alh_app_menu_button, {
            font: {
                size: '28px',
                weight: 'bold',
            },
            padding: '8px',
            margin: {
                top: '10px',
            },
            background: {
                color: $bun_alh_theme.main,
            },
            border: {
                width: '4px',
                style: 'solid',
                color: $bun_alh_theme.border,
            },
            justifyContent: 'center',
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/app/menu/button/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node(next) {
            const node = next || $mol_owning_get(this).host.dom_node();
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//mol/plugin/plugin.ts
;
"use strict";
var $;
(function ($) {
    class $bun_alh_app extends $mol_view {
        title() {
            return "bun_alh";
        }
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_light"
            };
        }
        Start_page() {
            const obj = new this.$.$bun_alh_page();
            obj.title = () => "bun_alh";
            obj.content = () => [
                this.Start_menu()
            ];
            return obj;
        }
        Controls_page() {
            const obj = new this.$.$bun_alh_controls_page();
            obj.app_page = (next) => this.page(next);
            return obj;
        }
        element_icon(id) {
            return this.game().element_icon(id);
        }
        element_name(id) {
            return this.game().element_name(id);
        }
        element_ids_known() {
            return this.game().element_ids_known();
        }
        element_ids_combined() {
            return this.game().element_ids_combined();
        }
        game() {
            const obj = new this.$.$bun_alh_game();
            return obj;
        }
        Game_page() {
            const obj = new this.$.$bun_alh_game_page();
            obj.model = () => this.game();
            obj.app_page = (next) => this.page(next);
            return obj;
        }
        Recipes_page() {
            const obj = new this.$.$bun_alh_game_recipes_page();
            obj.app_page = (next) => this.page(next);
            obj.elements = () => this.element_ids_combined_reversed();
            obj.element_icon = (id) => this.element_icon(id);
            obj.element_name = (id) => this.element_name(id);
            return obj;
        }
        play(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Start_button() {
            const obj = new this.$.$bun_alh_app_menu_button();
            obj.title = () => "Играть";
            obj.click = (next) => this.play(next);
            return obj;
        }
        open_controls_page(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Controls_button() {
            const obj = new this.$.$bun_alh_app_menu_button();
            obj.title = () => "Управление";
            obj.click = (next) => this.open_controls_page(next);
            return obj;
        }
        Start_menu() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Start_button(),
                this.Controls_button()
            ];
            return obj;
        }
        page(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        element_ids_combined_reversed() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $bun_alh_app.prototype, "Start_page", null);
    __decorate([
        $mol_mem
    ], $bun_alh_app.prototype, "Controls_page", null);
    __decorate([
        $mol_mem
    ], $bun_alh_app.prototype, "game", null);
    __decorate([
        $mol_mem
    ], $bun_alh_app.prototype, "Game_page", null);
    __decorate([
        $mol_mem
    ], $bun_alh_app.prototype, "Recipes_page", null);
    __decorate([
        $mol_mem
    ], $bun_alh_app.prototype, "play", null);
    __decorate([
        $mol_mem
    ], $bun_alh_app.prototype, "Start_button", null);
    __decorate([
        $mol_mem
    ], $bun_alh_app.prototype, "open_controls_page", null);
    __decorate([
        $mol_mem
    ], $bun_alh_app.prototype, "Controls_button", null);
    __decorate([
        $mol_mem
    ], $bun_alh_app.prototype, "Start_menu", null);
    __decorate([
        $mol_mem
    ], $bun_alh_app.prototype, "page", null);
    $.$bun_alh_app = $bun_alh_app;
})($ || ($ = {}));
//bun/alh/app/-view.tree/app.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bun_alh_app extends $.$bun_alh_app {
            auto() {
                this.on_app_open();
            }
            on_app_open() {
                window.addEventListener('beforeunload', () => this.on_app_close());
            }
            on_app_close() {
                $mol_state_local.value('ids_known', this.element_ids_known());
            }
            page(next) {
                if (next === 'game') {
                    this.game(new $bun_alh_game());
                }
                return next ?? 'start';
            }
            game(next) {
                return next ?? null;
            }
            element_ids_combined_reversed() {
                return this.element_ids_combined()
                    .slice()
                    .reverse();
            }
            play() {
                this.page('game');
            }
            open_controls_page() {
                this.page('controls');
            }
            sub() {
                var current_page = new $mol_view;
                if (this.page() === 'start') {
                    current_page = this.Start_page();
                }
                if (this.page() === 'controls') {
                    current_page = this.Controls_page();
                }
                if (this.page() === 'game') {
                    current_page = this.Game_page();
                }
                if (this.page() === 'recipes') {
                    current_page = this.Recipes_page();
                }
                return [
                    current_page
                ];
            }
        }
        __decorate([
            $mol_action
        ], $bun_alh_app.prototype, "on_app_open", null);
        __decorate([
            $mol_action
        ], $bun_alh_app.prototype, "on_app_close", null);
        __decorate([
            $mol_mem
        ], $bun_alh_app.prototype, "page", null);
        __decorate([
            $mol_mem
        ], $bun_alh_app.prototype, "game", null);
        __decorate([
            $mol_mem
        ], $bun_alh_app.prototype, "element_ids_combined_reversed", null);
        __decorate([
            $mol_action
        ], $bun_alh_app.prototype, "play", null);
        __decorate([
            $mol_action
        ], $bun_alh_app.prototype, "open_controls_page", null);
        __decorate([
            $mol_mem
        ], $bun_alh_app.prototype, "sub", null);
        $$.$bun_alh_app = $bun_alh_app;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/app/app.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($bun_alh_app, {
            background: {
                color: '#7c7157',
            },
            $mol_button: {
                cursor: 'pointer',
            },
            $mol_view: {
                '::-webkit-scrollbar': {
                    height: '7px',
                    background: {
                        color: $bun_alh_theme.scroll_back,
                    },
                },
                '::-webkit-scrollbar-thumb': {
                    background: {
                        color: $bun_alh_theme.scroll_thumb,
                    },
                    borderRadius: '15px',
                },
            },
            flexDirection: 'column',
            Start_menu: {
                flexDirection: 'column',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bun/alh/app/app.view.css.ts

export default $
//# sourceMappingURL=web.js.map
