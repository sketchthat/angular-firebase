import { CommonModule } from '@angular/common';
import { Injectable, InjectionToken, NgModule } from '@angular/core';

/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/

---

typedarray.js
Copyright (c) 2010, Linden Research, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerDatabase = registerDatabase;

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _Database = require('./database/api/Database');

var _Query = require('./database/api/Query');

var _Reference = require('./database/api/Reference');

var _util = require('./database/core/util/util');

var _RepoManager = require('./database/core/RepoManager');

var _internal = require('./database/api/internal');

var INTERNAL = _interopRequireWildcard(_internal);

var _test_access = require('./database/api/test_access');

var TEST_ACCESS = _interopRequireWildcard(_test_access);

var _environment = require('./utils/environment');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerDatabase(instance) {
    // Register the Database Service with the 'firebase' namespace.
    var namespace = instance.INTERNAL.registerService('database', function (app) {
        return _RepoManager.RepoManager.getInstance().databaseFromApp(app);
    },
    // firebase.database namespace properties
    {
        Reference: _Reference.Reference,
        Query: _Query.Query,
        Database: _Database.Database,
        enableLogging: _util.enableLogging,
        INTERNAL: INTERNAL,
        ServerValue: _Database.Database.ServerValue,
        TEST_ACCESS: TEST_ACCESS
    });
    if ((0, _environment.isNodeSdk)()) {
        module.exports = namespace;
    }
} /**
  * Copyright 2017 Google Inc.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

registerDatabase(_app2.default);

/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./utils/shims');

var _firebase_app = require('./app/firebase_app');

// Export a single instance of firebase app
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// Import the needed shims
var firebase = (0, _firebase_app.createFirebaseNamespace)();
// Import the createFirebaseNamespace function
exports.default = firebase;
module.exports = exports['default'];

var FirebaseAppConfigToken = new InjectionToken('FirebaseAppConfigToken');
var FirebaseApp = (function () {
    function FirebaseApp() {
    }
    return FirebaseApp;
}());

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof commonjsGlobal !== 'undefined' && commonjsGlobal;
var _root = __window || __global || __self;
var root_1 = _root;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();


var root = {
	root: root_1
};

var isArray_1 = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });


var isArray = {
	isArray: isArray_1
};

function isObject(x) {
    return x != null && typeof x === 'object';
}
var isObject_2 = isObject;


var isObject_1 = {
	isObject: isObject_2
};

function isFunction(x) {
    return typeof x === 'function';
}
var isFunction_2 = isFunction;


var isFunction_1 = {
	isFunction: isFunction_2
};

// typeof any so that it we don't have to cast when comparing a result to the error object
var errorObject_1 = { e: {} };


var errorObject = {
	errorObject: errorObject_1
};

var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject.errorObject.e = e;
        return errorObject.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
var tryCatch_2 = tryCatch;



var tryCatch_1 = {
	tryCatch: tryCatch_2
};

var __extends$3 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends$3(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
var UnsubscriptionError_2 = UnsubscriptionError;


var UnsubscriptionError_1 = {
	UnsubscriptionError: UnsubscriptionError_2
};

/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject.errorObject.e.errors) : [errorObject.errorObject.e]);
            }
        }
        if (isArray.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
var Subscription_2 = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}


var Subscription_1 = {
	Subscription: Subscription_2
};

var __extends$2 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends$2(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
var Action_2 = Action;


var Action_1 = {
	Action: Action_2
};

var __extends$1 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends$1(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // or the action has been rescheduled before it's executed, clear the interval id
        return root.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
var AsyncAction_2 = AsyncAction;


var AsyncAction_1 = {
	AsyncAction: AsyncAction_2
};

var __extends = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Otherwise flush the scheduler starting with this action.
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
var QueueAction_2 = QueueAction;


var QueueAction_1 = {
	QueueAction: QueueAction_2
};

/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
var Scheduler_2 = Scheduler;


var Scheduler_1 = {
	Scheduler: Scheduler_2
};

var __extends$5 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var AsyncScheduler = (function (_super) {
    __extends$5(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
var AsyncScheduler_2 = AsyncScheduler;


var AsyncScheduler_1 = {
	AsyncScheduler: AsyncScheduler_2
};

var __extends$4 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var QueueScheduler = (function (_super) {
    __extends$4(QueueScheduler, _super);
    function QueueScheduler() {
        _super.apply(this, arguments);
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
var QueueScheduler_2 = QueueScheduler;


var QueueScheduler_1 = {
	QueueScheduler: QueueScheduler_2
};

/**
 *
 * Queue Scheduler
 *
 * <span class="informal">Put every next task on a queue, instead of executing it immediately</span>
 *
 * `queue` scheduler, when used with delay, behaves the same as {@link async} scheduler.
 *
 * When used without delay, it schedules given task synchronously - executes it right when
 * it is scheduled. However when called recursively, that is when inside the scheduled task,
 * another task is scheduled with queue scheduler, instead of executing immediately as well,
 * that task will be put on a queue and wait for current one to finish.
 *
 * This means that when you execute task with `queue` scheduler, you are sure it will end
 * before any other task scheduled with that scheduler will start.
 *
 * @examples <caption>Schedule recursively first, then do something</caption>
 *
 * Rx.Scheduler.queue.schedule(() => {
 *   Rx.Scheduler.queue.schedule(() => console.log('second')); // will not happen now, but will be put on a queue
 *
 *   console.log('first');
 * });
 *
 * // Logs:
 * // "first"
 * // "second"
 *
 *
 * @example <caption>Reschedule itself recursively</caption>
 *
 * Rx.Scheduler.queue.schedule(function(state) {
 *   if (state !== 0) {
 *     console.log('before', state);
 *     this.schedule(state - 1); // `this` references currently executing Action,
 *                               // which we reschedule with new state
 *     console.log('after', state);
 *   }
 * }, 0, 3);
 *
 * // In scheduler that runs recursively, you would expect:
 * // "before", 3
 * // "before", 2
 * // "before", 1
 * // "after", 1
 * // "after", 2
 * // "after", 3
 *
 * // But with queue it logs:
 * // "before", 3
 * // "after", 3
 * // "before", 2
 * // "after", 2
 * // "before", 1
 * // "after", 1
 *
 *
 * @static true
 * @name queue
 * @owner Scheduler
 */
var queue_1 = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);

var FirebaseAppName = new InjectionToken('FirebaseAppName');

var ZoneScheduler = (function () {
    function ZoneScheduler(zone) {
        this.zone = zone;
    }
    ZoneScheduler.prototype.schedule = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.zone.run(function () { return queue_1.schedule.apply(queue_1, args); });
    };
    return ZoneScheduler;
}());

var REGEX_ABSOLUTE_URL = /^[a-z]+:\/\/.*/;
function isNil(obj) {
    return obj === undefined || obj === null;
}
function hasKey(obj, key) {
    return obj && obj[key] !== undefined;
}
function isString(value) {
    return typeof value === 'string';
}
function isFirebaseRef(value) {
    return typeof value.set === 'function';
}
function isFirebaseDataSnapshot(value) {
    return typeof value.exportVal === 'function';
}
function isAFUnwrappedSnapshot(value) {
    return typeof value.$key === 'string';
}

function isEmptyObject(obj) {
    if (isNil(obj)) {
        return false;
    }
    return Object.keys(obj).length === 0 && JSON.stringify(obj) === JSON.stringify({});
}
function unwrapMapFn(snapshot) {
    var unwrapped = !isNil(snapshot.val()) ? snapshot.val() : { $value: null };
    if ((/string|number|boolean/).test(typeof unwrapped)) {
        unwrapped = {
            $value: unwrapped
        };
    }
    Object.defineProperty(unwrapped, '$key', {
        value: snapshot.ref.key,
        enumerable: false
    });
    Object.defineProperty(unwrapped, '$exists', {
        value: function () {
            return snapshot.exists();
        },
        enumerable: false
    });
    return unwrapped;
}


function isAbsoluteUrl(url) {
    return REGEX_ABSOLUTE_URL.test(url);
}
function getRef(app, pathRef) {
    if (isFirebaseRef(pathRef)) {
        return pathRef;
    }
    var path = pathRef;
    if (isAbsoluteUrl(pathRef)) {
        return app.database().refFromURL(path);
    }
    return app.database().ref(path);
}

var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};


var Observer = {
	empty: empty
};

var rxSubscriber = createCommonjsModule(function (module, exports) {
"use strict";

var Symbol = root.root.Symbol;
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
/**
 * @deprecated use rxSubscriber instead
 */
exports.$$rxSubscriber = exports.rxSubscriber;

});

var __extends$7 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends$7(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber.rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
var Subscriber_2 = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends$7(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));


var Subscriber_1 = {
	Subscriber: Subscriber_2
};

function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber.rxSubscriber]) {
            return nextOrObserver[rxSubscriber.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
var toSubscriber_2 = toSubscriber;


var toSubscriber_1 = {
	toSubscriber: toSubscriber_2
};

var observable = createCommonjsModule(function (module, exports) {
"use strict";

function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.observable = getSymbolObservable(root.root);
/**
 * @deprecated use observable instead
 */
exports.$$observable = exports.observable;

});

/**
 * A representation of any set of values over any amount of time. This is the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable$$1 = new Observable();
        observable$$1.source = this;
        observable$$1.operator = operator;
        return observable$$1;
    };
    /**
     * Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
     *
     * <span class="informal">Use it when you have all these Observables, but still nothing is happening.</span>
     *
     * `subscribe` is not a regular operator, but a method that calls Observable's internal `subscribe` function. It
     * might be for example a function that you passed to a {@link create} static factory, but most of the time it is
     * a library implementation, which defines what and when will be emitted by an Observable. This means that calling
     * `subscribe` is actually the moment when Observable starts its work, not when it is created, as it is often
     * thought.
     *
     * Apart from starting the execution of an Observable, this method allows you to listen for values
     * that an Observable emits, as well as for when it completes or errors. You can achieve this in two
     * following ways.
     *
     * The first way is creating an object that implements {@link Observer} interface. It should have methods
     * defined by that interface, but note that it should be just a regular JavaScript object, which you can create
     * yourself in any way you want (ES6 class, classic function constructor, object literal etc.). In particular do
     * not attempt to use any RxJS implementation details to create Observers - you don't need them. Remember also
     * that your object does not have to implement all methods. If you find yourself creating a method that doesn't
     * do anything, you can simply omit it. Note however, that if `error` method is not provided, all errors will
     * be left uncaught.
     *
     * The second way is to give up on Observer object altogether and simply provide callback functions in place of its methods.
     * This means you can provide three functions as arguments to `subscribe`, where first function is equivalent
     * of a `next` method, second of an `error` method and third of a `complete` method. Just as in case of Observer,
     * if you do not need to listen for something, you can omit a function, preferably by passing `undefined` or `null`,
     * since `subscribe` recognizes these functions by where they were placed in function call. When it comes
     * to `error` function, just as before, if not provided, errors emitted by an Observable will be thrown.
     *
     * Whatever style of calling `subscribe` you use, in both cases it returns a Subscription object.
     * This object allows you to call `unsubscribe` on it, which in turn will stop work that an Observable does and will clean
     * up all resources that an Observable used. Note that cancelling a subscription will not call `complete` callback
     * provided to `subscribe` function, which is reserved for a regular completion signal that comes from an Observable.
     *
     * Remember that callbacks provided to `subscribe` are not guaranteed to be called asynchronously.
     * It is an Observable itself that decides when these functions will be called. For example {@link of}
     * by default emits all its values synchronously. Always check documentation for how given Observable
     * will behave when subscribed and if its default behavior can be modified with a {@link Scheduler}.
     *
     * @example <caption>Subscribe with an Observer</caption>
     * const sumObserver = {
     *   sum: 0,
     *   next(value) {
     *     console.log('Adding: ' + value);
     *     this.sum = this.sum + value;
     *   },
     *   error() { // We actually could just remove this method,
     *   },        // since we do not really care about errors right now.
     *   complete() {
     *     console.log('Sum equals: ' + this.sum);
     *   }
     * };
     *
     * Rx.Observable.of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
     * .subscribe(sumObserver);
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Subscribe with functions</caption>
     * let sum = 0;
     *
     * Rx.Observable.of(1, 2, 3)
     * .subscribe(
     *   function(value) {
     *     console.log('Adding: ' + value);
     *     sum = sum + value;
     *   },
     *   undefined,
     *   function() {
     *     console.log('Sum equals: ' + sum);
     *   }
     * );
     *
     * // Logs:
     * // "Adding: 1"
     * // "Adding: 2"
     * // "Adding: 3"
     * // "Sum equals: 6"
     *
     *
     * @example <caption>Cancel a subscription</caption>
     * const subscription = Rx.Observable.interval(1000).subscribe(
     *   num => console.log(num),
     *   undefined,
     *   () => console.log('completed!') // Will not be called, even
     * );                                // when cancelling subscription
     *
     *
     * setTimeout(() => {
     *   subscription.unsubscribe();
     *   console.log('unsubscribed!');
     * }, 2500);
     *
     * // Logs:
     * // 0 after 1s
     * // 1 after 2s
     * // "unsubscribed!" after 2.5s
     *
     *
     * @param {Observer|Function} observerOrNext (optional) Either an observer with methods to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the subscribed
     *  Observable.
     * @param {Function} error (optional) A handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled.
     * @param {Function} complete (optional) A handler for a terminal event resulting from successful completion.
     * @return {ISubscription} a subscription reference to the registered handlers
     * @method subscribe
     */
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this.source ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root.root.Rx && root.root.Rx.config && root.root.Rx.config.Promise) {
                PromiseCtor = root.root.Rx.config.Promise;
            }
            else if (root.root.Promise) {
                PromiseCtor = root.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable.observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
var Observable_2 = Observable;


var Observable_1 = {
	Observable: Observable_2
};

var __extends$6 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FirebaseListObservable = (function (_super) {
    __extends$6(FirebaseListObservable, _super);
    function FirebaseListObservable($ref, subscribe) {
        var _this = _super.call(this, subscribe) || this;
        _this.$ref = $ref;
        return _this;
    }
    FirebaseListObservable.prototype.lift = function (operator) {
        var observable = new FirebaseListObservable(this.$ref);
        observable.source = this;
        observable.operator = operator;
        observable.$ref = this.$ref;
        return observable;
    };
    FirebaseListObservable.prototype.push = function (val) {
        if (!this.$ref) {
            throw new Error('No ref specified for this Observable!');
        }
        return this.$ref.ref.push(val);
    };
    FirebaseListObservable.prototype.set = function (item, value) {
        var _this = this;
        return this._checkOperationCases(item, {
            stringCase: function () { return _this.$ref.ref.child(item).set(value); },
            firebaseCase: function () { return item.set(value); },
            snapshotCase: function () { return item.ref.set(value); },
            unwrappedSnapshotCase: function () { return _this.$ref.ref.child(item.$key).set(value); }
        });
    };
    FirebaseListObservable.prototype.update = function (item, value) {
        var _this = this;
        return this._checkOperationCases(item, {
            stringCase: function () { return _this.$ref.ref.child(item).update(value); },
            firebaseCase: function () { return item.update(value); },
            snapshotCase: function () { return item.ref.update(value); },
            unwrappedSnapshotCase: function () { return _this.$ref.ref.child(item.$key).update(value); }
        });
    };
    FirebaseListObservable.prototype.remove = function (item) {
        var _this = this;
        if (!item) {
            return this.$ref.ref.remove();
        }
        return this._checkOperationCases(item, {
            stringCase: function () { return _this.$ref.ref.child(item).remove(); },
            firebaseCase: function () { return item.remove(); },
            snapshotCase: function () { return item.ref.remove(); },
            unwrappedSnapshotCase: function () { return _this.$ref.ref.child(item.$key).remove(); }
        });
    };
    FirebaseListObservable.prototype._checkOperationCases = function (item, cases) {
        if (isString(item)) {
            return cases.stringCase();
        }
        else if (isFirebaseRef(item)) {
            return cases.firebaseCase();
        }
        else if (isFirebaseDataSnapshot(item)) {
            return cases.snapshotCase();
        }
        else if (isAFUnwrappedSnapshot(item)) {
            return cases.unwrappedSnapshotCase();
        }
        throw new Error("Method requires a key, snapshot, reference, or unwrapped snapshot. Got: " + typeof item);
    };
    return FirebaseListObservable;
}(Observable_2));

/**
 * Represents a push-based event or value that an {@link Observable} can emit.
 * This class is particularly useful for operators that manage notifications,
 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
 * others. Besides wrapping the actual delivered value, it also annotates it
 * with metadata of, for instance, what type of push message it is (`next`,
 * `error`, or `complete`).
 *
 * @see {@link materialize}
 * @see {@link dematerialize}
 * @see {@link observeOn}
 *
 * @class Notification<T>
 */
var Notification = (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    /**
     * Delivers to the given `observer` the value wrapped by this Notification.
     * @param {Observer} observer
     * @return
     */
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    /**
     * Given some {@link Observer} callbacks, deliver the value represented by the
     * current Notification to the correctly corresponding callback.
     * @param {function(value: T): void} next An Observer `next` callback.
     * @param {function(err: any): void} [error] An Observer `error` callback.
     * @param {function(): void} [complete] An Observer `complete` callback.
     * @return {any}
     */
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    /**
     * Takes an Observer or its individual callback functions, and calls `observe`
     * or `do` methods accordingly.
     * @param {Observer|function(value: T): void} nextOrObserver An Observer or
     * the `next` callback.
     * @param {function(err: any): void} [error] An Observer `error` callback.
     * @param {function(): void} [complete] An Observer `complete` callback.
     * @return {any}
     */
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    /**
     * Returns a simple Observable that just delivers the notification represented
     * by this Notification instance.
     * @return {any}
     */
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return Observable_1.Observable.of(this.value);
            case 'E':
                return Observable_1.Observable.throw(this.error);
            case 'C':
                return Observable_1.Observable.empty();
        }
        throw new Error('unexpected notification kind value');
    };
    /**
     * A shortcut to create a Notification instance of the type `next` from a
     * given value.
     * @param {T} value The `next` value.
     * @return {Notification<T>} The "next" Notification representing the
     * argument.
     */
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    };
    /**
     * A shortcut to create a Notification instance of the type `error` from a
     * given error.
     * @param {any} [err] The `error` error.
     * @return {Notification<T>} The "error" Notification representing the
     * argument.
     */
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    /**
     * A shortcut to create a Notification instance of the type `complete`.
     * @return {Notification<any>} The valueless "complete" Notification.
     */
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());
var Notification_2 = Notification;


var Notification_1 = {
	Notification: Notification_2
};

var __extends$8 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 *
 * Re-emits all notifications from source Observable with specified scheduler.
 *
 * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
 *
 * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
 * notifications emitted by the source Observable. It might be useful, if you do not have control over
 * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
 *
 * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
 * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
 * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
 * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
 * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
 * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
 * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
 * little bit more, to ensure that they are emitted at expected moments.
 *
 * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
 * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
 * will delay all notifications - including error notifications - while `delay` will pass through error
 * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
 * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
 * for notification emissions in general.
 *
 * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
 * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
 *                                               // with async scheduler by default...
 *
 * intervals
 * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
 * .subscribe(val => {                           // scheduler to ensure smooth animation.
 *   someDiv.style.height = val + 'px';
 * });
 *
 * @see {@link delay}
 *
 * @param {IScheduler} scheduler Scheduler that will be used to reschedule notifications from source Observable.
 * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
 * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
 * but with provided scheduler.
 *
 * @method observeOn
 * @owner Observable
 */
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return this.lift(new ObserveOnOperator(scheduler, delay));
}
var observeOn_2 = observeOn;
var ObserveOnOperator = (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ObserveOnSubscriber = (function (_super) {
    __extends$8(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        _super.call(this, destination);
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(Notification_1.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(Notification_1.Notification.createError(err));
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(Notification_1.Notification.createComplete());
    };
    return ObserveOnSubscriber;
}(Subscriber_1.Subscriber));
var ObserveOnMessage = (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());

var __extends$10 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ScalarObservable = (function (_super) {
    __extends$10(ScalarObservable, _super);
    function ScalarObservable(value, scheduler) {
        _super.call(this);
        this.value = value;
        this.scheduler = scheduler;
        this._isScalar = true;
        if (scheduler) {
            this._isScalar = false;
        }
    }
    ScalarObservable.create = function (value, scheduler) {
        return new ScalarObservable(value, scheduler);
    };
    ScalarObservable.dispatch = function (state) {
        var done = state.done, value = state.value, subscriber = state.subscriber;
        if (done) {
            subscriber.complete();
            return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
        state.done = true;
        this.schedule(state);
    };
    ScalarObservable.prototype._subscribe = function (subscriber) {
        var value = this.value;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ScalarObservable.dispatch, 0, {
                done: false, value: value, subscriber: subscriber
            });
        }
        else {
            subscriber.next(value);
            if (!subscriber.closed) {
                subscriber.complete();
            }
        }
    };
    return ScalarObservable;
}(Observable_1.Observable));
var ScalarObservable_2 = ScalarObservable;


var ScalarObservable_1 = {
	ScalarObservable: ScalarObservable_2
};

var __extends$11 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var EmptyObservable = (function (_super) {
    __extends$11(EmptyObservable, _super);
    function EmptyObservable(scheduler) {
        _super.call(this);
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits a complete notification.
     *
     * <span class="informal">Just emits 'complete', and nothing else.
     * </span>
     *
     * <img src="./img/empty.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the complete notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then complete.</caption>
     * var result = Rx.Observable.empty().startWith(7);
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
     * );
     * result.subscribe(x => console.log(x));
     *
     * // Results in the following to the console:
     * // x is equal to the count on the interval eg(0,1,2,3,...)
     * // x will occur every 1000ms
     * // if x % 2 is equal to 1 print abc
     * // if x % 2 is not equal to 1 nothing will be output
     *
     * @see {@link create}
     * @see {@link never}
     * @see {@link of}
     * @see {@link throw}
     *
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emission of the complete notification.
     * @return {Observable} An "empty" Observable: emits only the complete
     * notification.
     * @static true
     * @name empty
     * @owner Observable
     */
    EmptyObservable.create = function (scheduler) {
        return new EmptyObservable(scheduler);
    };
    EmptyObservable.dispatch = function (arg) {
        var subscriber = arg.subscriber;
        subscriber.complete();
    };
    EmptyObservable.prototype._subscribe = function (subscriber) {
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
        }
        else {
            subscriber.complete();
        }
    };
    return EmptyObservable;
}(Observable_1.Observable));
var EmptyObservable_2 = EmptyObservable;


var EmptyObservable_1 = {
	EmptyObservable: EmptyObservable_2
};

function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
var isScheduler_2 = isScheduler;


var isScheduler_1 = {
	isScheduler: isScheduler_2
};

var __extends$9 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ArrayObservable = (function (_super) {
    __extends$9(ArrayObservable, _super);
    function ArrayObservable(array, scheduler) {
        _super.call(this);
        this.array = array;
        this.scheduler = scheduler;
        if (!scheduler && array.length === 1) {
            this._isScalar = true;
            this.value = array[0];
        }
    }
    ArrayObservable.create = function (array, scheduler) {
        return new ArrayObservable(array, scheduler);
    };
    /**
     * Creates an Observable that emits some values you specify as arguments,
     * immediately one after the other, and then emits a complete notification.
     *
     * <span class="informal">Emits the arguments you provide, then completes.
     * </span>
     *
     * <img src="./img/of.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the arguments given, and the complete notification thereafter. It can
     * be used for composing with other Observables, such as with {@link concat}.
     * By default, it uses a `null` IScheduler, which means the `next`
     * notifications are sent synchronously, although with a different IScheduler
     * it is possible to determine when those notifications will be delivered.
     *
     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
     * var numbers = Rx.Observable.of(10, 20, 30);
     * var letters = Rx.Observable.of('a', 'b', 'c');
     * var interval = Rx.Observable.interval(1000);
     * var result = numbers.concat(letters).concat(interval);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link throw}
     *
     * @param {...T} values Arguments that represent `next` values to be emitted.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emissions of the `next` notifications.
     * @return {Observable<T>} An Observable that emits each given input value.
     * @static true
     * @name of
     * @owner Observable
     */
    ArrayObservable.of = function () {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i - 0] = arguments[_i];
        }
        var scheduler = array[array.length - 1];
        if (isScheduler_1.isScheduler(scheduler)) {
            array.pop();
        }
        else {
            scheduler = null;
        }
        var len = array.length;
        if (len > 1) {
            return new ArrayObservable(array, scheduler);
        }
        else if (len === 1) {
            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
        }
        else {
            return new EmptyObservable_1.EmptyObservable(scheduler);
        }
    };
    ArrayObservable.dispatch = function (state) {
        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(array[index]);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        this.schedule(state);
    };
    ArrayObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var array = this.array;
        var count = array.length;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ArrayObservable.dispatch, 0, {
                array: array, index: index, count: count, subscriber: subscriber
            });
        }
        else {
            for (var i = 0; i < count && !subscriber.closed; i++) {
                subscriber.next(array[i]);
            }
            subscriber.complete();
        }
    };
    return ArrayObservable;
}(Observable_1.Observable));
var ArrayObservable_2 = ArrayObservable;


var ArrayObservable_1 = {
	ArrayObservable: ArrayObservable_2
};

var of_1 = ArrayObservable_1.ArrayObservable.of;

var __extends$13 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var OuterSubscriber = (function (_super) {
    __extends$13(OuterSubscriber, _super);
    function OuterSubscriber() {
        _super.apply(this, arguments);
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber_1.Subscriber));
var OuterSubscriber_2 = OuterSubscriber;


var OuterSubscriber_1 = {
	OuterSubscriber: OuterSubscriber_2
};

var isArrayLike_1 = (function (x) { return x && typeof x.length === 'number'; });


var isArrayLike = {
	isArrayLike: isArrayLike_1
};

function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
var isPromise_2 = isPromise;


var isPromise_1 = {
	isPromise: isPromise_2
};

var iterator = createCommonjsModule(function (module, exports) {
"use strict";

function symbolIteratorPonyfill(root$$2) {
    var Symbol = root$$2.Symbol;
    if (typeof Symbol === 'function') {
        if (!Symbol.iterator) {
            Symbol.iterator = Symbol('iterator polyfill');
        }
        return Symbol.iterator;
    }
    else {
        // [for Mozilla Gecko 27-35:](https://mzl.la/2ewE1zC)
        var Set_1 = root$$2.Set;
        if (Set_1 && typeof new Set_1()['@@iterator'] === 'function') {
            return '@@iterator';
        }
        var Map_1 = root$$2.Map;
        // required for compatability with es6-shim
        if (Map_1) {
            var keys = Object.getOwnPropertyNames(Map_1.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                // according to spec, Map.prototype[@@iterator] and Map.orototype.entries must be equal.
                if (key !== 'entries' && key !== 'size' && Map_1.prototype[key] === Map_1.prototype['entries']) {
                    return key;
                }
            }
        }
        return '@@iterator';
    }
}
exports.symbolIteratorPonyfill = symbolIteratorPonyfill;
exports.iterator = symbolIteratorPonyfill(root.root);
/**
 * @deprecated use iterator instead
 */
exports.$$iterator = exports.iterator;

});

var __extends$14 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var InnerSubscriber = (function (_super) {
    __extends$14(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        _super.call(this);
        this.parent = parent;
        this.outerValue = outerValue;
        this.outerIndex = outerIndex;
        this.index = 0;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber_1.Subscriber));
var InnerSubscriber_2 = InnerSubscriber;


var InnerSubscriber_1 = {
	InnerSubscriber: InnerSubscriber_2
};

function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    if (destination.closed) {
        return null;
    }
    if (result instanceof Observable_1.Observable) {
        if (result._isScalar) {
            destination.next(result.value);
            destination.complete();
            return null;
        }
        else {
            return result.subscribe(destination);
        }
    }
    else if (isArrayLike.isArrayLike(result)) {
        for (var i = 0, len = result.length; i < len && !destination.closed; i++) {
            destination.next(result[i]);
        }
        if (!destination.closed) {
            destination.complete();
        }
    }
    else if (isPromise_1.isPromise(result)) {
        result.then(function (value) {
            if (!destination.closed) {
                destination.next(value);
                destination.complete();
            }
        }, function (err) { return destination.error(err); })
            .then(null, function (err) {
            // Escaping the Promise trap: globally throw unhandled errors
            root.root.setTimeout(function () { throw err; });
        });
        return destination;
    }
    else if (result && typeof result[iterator.iterator] === 'function') {
        var iterator$$1 = result[iterator.iterator]();
        do {
            var item = iterator$$1.next();
            if (item.done) {
                destination.complete();
                break;
            }
            destination.next(item.value);
            if (destination.closed) {
                break;
            }
        } while (true);
    }
    else if (result && typeof result[observable.observable] === 'function') {
        var obs = result[observable.observable]();
        if (typeof obs.subscribe !== 'function') {
            destination.error(new TypeError('Provided object does not correctly implement Symbol.observable'));
        }
        else {
            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
        }
    }
    else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = ("You provided " + value + " where a stream was expected.")
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        destination.error(new TypeError(msg));
    }
    return null;
}
var subscribeToResult_2 = subscribeToResult;


var subscribeToResult_1 = {
	subscribeToResult: subscribeToResult_2
};

var __extends$12 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




var none = {};
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from this Observable with values from
 * Observables passed as arguments. This is done by subscribing to each
 * Observable, in order, and collecting an array of each of the most recent
 * values any time any of the input Observables emits, then either taking that
 * array and passing it as arguments to an optional `project` function and
 * emitting the return value of that, or just emitting the array of recent
 * values directly if there is no `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && isArray.isArray(observables[0])) {
        observables = observables[0].slice();
    }
    observables.unshift(this);
    return this.lift.call(new ArrayObservable_1.ArrayObservable(observables), new CombineLatestOperator(project));
}
var combineLatest_2 = combineLatest;
var CombineLatestOperator = (function () {
    function CombineLatestOperator(project) {
        this.project = project;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.project));
    };
    return CombineLatestOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CombineLatestSubscriber = (function (_super) {
    __extends$12(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, project) {
        _super.call(this, destination);
        this.project = project;
        this.active = 0;
        this.values = [];
        this.observables = [];
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(none);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === none ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.project) {
                this._tryProject(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryProject = function (values) {
        var result;
        try {
            result = this.project.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(OuterSubscriber_1.OuterSubscriber));

var __extends$15 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Converts a higher-order Observable into a first-order Observable which
 * concurrently delivers all values that are emitted on the inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables.</span>
 *
 * <img src="./img/mergeAll.png" width="100%">
 *
 * `mergeAll` subscribes to an Observable that emits Observables, also known as
 * a higher-order Observable. Each time it observes one of these emitted inner
 * Observables, it subscribes to that and delivers all the values from the
 * inner Observable on the output Observable. The output Observable only
 * completes once all inner Observables have completed. Any error delivered by
 * a inner Observable will be immediately emitted on the output Observable.
 *
 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var firstOrder = higherOrder.mergeAll();
 * firstOrder.subscribe(x => console.log(x));
 *
 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
 * var firstOrder = higherOrder.mergeAll(2);
 * firstOrder.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link merge}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 * @see {@link switch}
 * @see {@link zipAll}
 *
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits values coming from all the
 * inner Observables emitted by the source Observable.
 * @method mergeAll
 * @owner Observable
 */
function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return this.lift(new MergeAllOperator(concurrent));
}
var mergeAll_2 = mergeAll;
var MergeAllOperator = (function () {
    function MergeAllOperator(concurrent) {
        this.concurrent = concurrent;
    }
    MergeAllOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeAllSubscriber(observer, this.concurrent));
    };
    return MergeAllOperator;
}());
var MergeAllOperator_1 = MergeAllOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeAllSubscriber = (function (_super) {
    __extends$15(MergeAllSubscriber, _super);
    function MergeAllSubscriber(destination, concurrent) {
        _super.call(this, destination);
        this.concurrent = concurrent;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
    }
    MergeAllSubscriber.prototype._next = function (observable) {
        if (this.active < this.concurrent) {
            this.active++;
            this.add(subscribeToResult_1.subscribeToResult(this, observable));
        }
        else {
            this.buffer.push(observable);
        }
    };
    MergeAllSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
    };
    MergeAllSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeAllSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
var MergeAllSubscriber_1 = MergeAllSubscriber;


var mergeAll_1 = {
	mergeAll: mergeAll_2,
	MergeAllOperator: MergeAllOperator_1,
	MergeAllSubscriber: MergeAllSubscriber_1
};

/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which concurrently emits all values from every
 * given input Observable.
 *
 * <span class="informal">Flattens multiple Observables together by blending
 * their values into one Observable.</span>
 *
 * <img src="./img/merge.png" width="100%">
 *
 * `merge` subscribes to each given input Observable (either the source or an
 * Observable given as argument), and simply forwards (without doing any
 * transformation) all the values from all the input Observables to the output
 * Observable. The output Observable only completes once all input Observables
 * have completed. Any error delivered by an input Observable will be immediately
 * emitted on the output Observable.
 *
 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var clicksOrTimer = clicks.merge(timer);
 * clicksOrTimer.subscribe(x => console.log(x));
 *
 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var concurrent = 2; // the argument
 * var merged = timer1.merge(timer2, timer3, concurrent);
 * merged.subscribe(x => console.log(x));
 *
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 *
 * @param {ObservableInput} other An input Observable to merge with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for managing
 * concurrency of input Observables.
 * @return {Observable} An Observable that emits items that are the result of
 * every input Observable.
 * @method merge
 * @owner Observable
 */
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return this.lift.call(mergeStatic.apply(void 0, [this].concat(observables)));
}
var merge_2 = merge;
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which concurrently emits all values from every
 * given input Observable.
 *
 * <span class="informal">Flattens multiple Observables together by blending
 * their values into one Observable.</span>
 *
 * <img src="./img/merge.png" width="100%">
 *
 * `merge` subscribes to each given input Observable (as arguments), and simply
 * forwards (without doing any transformation) all the values from all the input
 * Observables to the output Observable. The output Observable only completes
 * once all input Observables have completed. Any error delivered by an input
 * Observable will be immediately emitted on the output Observable.
 *
 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var clicksOrTimer = Rx.Observable.merge(clicks, timer);
 * clicksOrTimer.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // timer will emit ascending values, one every second(1000ms) to console
 * // clicks logs MouseEvents to console everytime the "document" is clicked
 * // Since the two streams are merged you see these happening
 * // as they occur.
 *
 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var concurrent = 2; // the argument
 * var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
 * merged.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - First timer1 and timer2 will run concurrently
 * // - timer1 will emit a value every 1000ms for 10 iterations
 * // - timer2 will emit a value every 2000ms for 6 iterations
 * // - after timer1 hits it's max iteration, timer2 will
 * //   continue, and timer3 will start to run concurrently with timer2
 * // - when timer2 hits it's max iteration it terminates, and
 * //   timer3 will continue to emit a value every 500ms until it is complete
 *
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 *
 * @param {...ObservableInput} observables Input Observables to merge together.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for managing
 * concurrency of input Observables.
 * @return {Observable} an Observable that emits items that are the result of
 * every input Observable.
 * @static true
 * @name merge
 * @owner Observable
 */
function mergeStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler_1.isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable_1.Observable) {
        return observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
}

var __extends$16 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Applies a given `project` function to each value emitted by the source
 * Observable, and emits the resulting values as an Observable.
 *
 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
 * it passes each source value through a transformation function to get
 * corresponding output values.</span>
 *
 * <img src="./img/map.png" width="100%">
 *
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the output
 * Observable.
 *
 * @example <caption>Map every click to the clientX position of that click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks.map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link mapTo}
 * @see {@link pluck}
 *
 * @param {function(value: T, index: number): R} project The function to apply
 * to each `value` emitted by the source Observable. The `index` parameter is
 * the number `i` for the i-th emission that has happened since the
 * subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to define what `this` is in the
 * `project` function.
 * @return {Observable<R>} An Observable that emits the values from the source
 * Observable transformed by the given `project` function.
 * @method map
 * @owner Observable
 */
function map(project, thisArg) {
    if (typeof project !== 'function') {
        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }
    return this.lift(new MapOperator(project, thisArg));
}
var map_2 = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MapSubscriber = (function (_super) {
    __extends$16(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        _super.call(this, destination);
        this.project = project;
        this.count = 0;
        this.thisArg = thisArg || this;
    }
    // NOTE: This looks unoptimized, but it's actually purposefully NOT
    // using try/catch optimizations.
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));

/**
 *
 * Async Scheduler
 *
 * <span class="informal">Schedule task as if you used setTimeout(task, duration)</span>
 *
 * `async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
 * event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
 * in intervals.
 *
 * If you just want to "defer" task, that is to perform it right after currently
 * executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
 * better choice will be the {@link asap} scheduler.
 *
 * @example <caption>Use async scheduler to delay task</caption>
 * const task = () => console.log('it works!');
 *
 * Rx.Scheduler.async.schedule(task, 2000);
 *
 * // After 2 seconds logs:
 * // "it works!"
 *
 *
 * @example <caption>Use async scheduler to repeat task in intervals</caption>
 * function task(state) {
 *   console.log(state);
 *   this.schedule(state + 1, 1000); // `this` references currently executing Action,
 *                                   // which we reschedule with new state and delay
 * }
 *
 * Rx.Scheduler.async.schedule(task, 3000, 0);
 *
 * // Logs:
 * // 0 after 3s
 * // 1 after 4s
 * // 2 after 5s
 * // 3 after 6s
 *
 * @static true
 * @name async
 * @owner Scheduler
 */
var async_1 = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);


var async = {
	async: async_1
};

var __extends$17 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Ignores source values for `duration` milliseconds, then emits the most recent
 * value from the source Observable, then repeats this process.
 *
 * <span class="informal">When it sees a source values, it ignores that plus
 * the next ones for `duration` milliseconds, and then it emits the most recent
 * value from the source.</span>
 *
 * <img src="./img/auditTime.png" width="100%">
 *
 * `auditTime` is similar to `throttleTime`, but emits the last value from the
 * silenced time window, instead of the first value. `auditTime` emits the most
 * recent value from the source Observable on the output Observable as soon as
 * its internal timer becomes disabled, and ignores source values while the
 * timer is enabled. Initially, the timer is disabled. As soon as the first
 * source value arrives, the timer is enabled. After `duration` milliseconds (or
 * the time unit determined internally by the optional `scheduler`) has passed,
 * the timer is disabled, then the most recent source value is emitted on the
 * output Observable, and this process repeats for the next source value.
 * Optionally takes a {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.auditTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} duration Time to wait before emitting the most recent source
 * value, measured in milliseconds or the time unit determined internally
 * by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the rate-limiting behavior.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method auditTime
 * @owner Observable
 */
function auditTime(duration, scheduler) {
    if (scheduler === void 0) { scheduler = async.async; }
    return this.lift(new AuditTimeOperator(duration, scheduler));
}
var auditTime_2 = auditTime;
var AuditTimeOperator = (function () {
    function AuditTimeOperator(duration, scheduler) {
        this.duration = duration;
        this.scheduler = scheduler;
    }
    AuditTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new AuditTimeSubscriber(subscriber, this.duration, this.scheduler));
    };
    return AuditTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AuditTimeSubscriber = (function (_super) {
    __extends$17(AuditTimeSubscriber, _super);
    function AuditTimeSubscriber(destination, duration, scheduler) {
        _super.call(this, destination);
        this.duration = duration;
        this.scheduler = scheduler;
        this.hasValue = false;
    }
    AuditTimeSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, this));
        }
    };
    AuditTimeSubscriber.prototype.clearThrottle = function () {
        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
        if (hasValue) {
            this.value = null;
            this.hasValue = false;
            this.destination.next(value);
        }
    };
    return AuditTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.clearThrottle();
}

var OrderByOptions;
(function (OrderByOptions) {
    OrderByOptions[OrderByOptions["Child"] = 0] = "Child";
    OrderByOptions[OrderByOptions["Key"] = 1] = "Key";
    OrderByOptions[OrderByOptions["Value"] = 2] = "Value";
    OrderByOptions[OrderByOptions["Priority"] = 3] = "Priority";
})(OrderByOptions || (OrderByOptions = {}));
var LimitToOptions;
(function (LimitToOptions) {
    LimitToOptions[LimitToOptions["First"] = 0] = "First";
    LimitToOptions[LimitToOptions["Last"] = 1] = "Last";
})(LimitToOptions || (LimitToOptions = {}));
var QueryOptions;
(function (QueryOptions) {
    QueryOptions[QueryOptions["EqualTo"] = 0] = "EqualTo";
    QueryOptions[QueryOptions["StartAt"] = 1] = "StartAt";
    QueryOptions[QueryOptions["EndAt"] = 2] = "EndAt";
})(QueryOptions || (QueryOptions = {}));

function observeQuery(query, audit) {
    if (audit === void 0) { audit = true; }
    if (isNil(query)) {
        return of_1(null);
    }
    return Observable_2.create(function (observer) {
        var combined = combineLatest_2.call(getOrderObservables(query), getStartAtObservable(query), getEndAtObservable(query), getEqualToObservable(query), getLimitToObservables(query));
        if (audit) {
            combined = auditTime_2.call(combined, 0);
        }
        combined
            .subscribe(function (_a) {
            var orderBy = _a[0], startAt = _a[1], endAt = _a[2], equalTo = _a[3], limitTo = _a[4];
            var serializedOrder = {};
            if (!isNil(orderBy) && !isNil(orderBy.value)) {
                switch (orderBy.key) {
                    case OrderByOptions.Key:
                        serializedOrder = { orderByKey: orderBy.value };
                        break;
                    case OrderByOptions.Priority:
                        serializedOrder = { orderByPriority: orderBy.value };
                        break;
                    case OrderByOptions.Value:
                        serializedOrder = { orderByValue: orderBy.value };
                        break;
                    case OrderByOptions.Child:
                        serializedOrder = { orderByChild: orderBy.value };
                        break;
                }
            }
            if (!isNil(limitTo) && !isNil(limitTo.value)) {
                switch (limitTo.key) {
                    case LimitToOptions.First:
                        serializedOrder.limitToFirst = limitTo.value;
                        break;
                    case LimitToOptions.Last: {
                        serializedOrder.limitToLast = limitTo.value;
                        break;
                    }
                }
            }
            if (startAt !== undefined) {
                serializedOrder.startAt = startAt;
            }
            if (endAt !== undefined) {
                serializedOrder.endAt = endAt;
            }
            if (equalTo !== undefined) {
                serializedOrder.equalTo = equalTo;
            }
            observer.next(serializedOrder);
        });
    });
}
function getOrderObservables(query) {
    var observables = ['orderByChild', 'orderByKey', 'orderByValue', 'orderByPriority']
        .map(function (key, option) {
        return ({ key: key, option: option });
    })
        .filter(function (_a) {
        var key = _a.key, option = _a.option;
        return !isNil(query[key]);
    })
        .map(function (_a) {
        var key = _a.key, option = _a.option;
        return mapToOrderBySelection(query[key], option);
    });
    if (observables.length === 1) {
        return observables[0];
    }
    else if (observables.length > 1) {
        return merge_2.apply(observables[0], observables.slice(1));
    }
    else {
        return new Observable_2(function (subscriber) {
            subscriber.next(null);
        });
    }
}
function getLimitToObservables(query) {
    var observables = ['limitToFirst', 'limitToLast']
        .map(function (key, option) { return ({ key: key, option: option }); })
        .filter(function (_a) {
        var key = _a.key, option = _a.option;
        return !isNil(query[key]);
    })
        .map(function (_a) {
        var key = _a.key, option = _a.option;
        return mapToLimitToSelection(query[key], option);
    });
    if (observables.length === 1) {
        return observables[0];
    }
    else if (observables.length > 1) {
        var mergedObs = merge_2.apply(observables[0], observables.slice(1));
        return mergedObs;
    }
    else {
        return new Observable_2(function (subscriber) {
            subscriber.next(null);
        });
    }
}
function getStartAtObservable(query) {
    if (query.startAt instanceof Observable_2) {
        return query.startAt;
    }
    else if (hasKey(query, 'startAt')) {
        return new Observable_2(function (subscriber) {
            subscriber.next(query.startAt);
        });
    }
    else {
        return new Observable_2(function (subscriber) {
            subscriber.next(undefined);
        });
    }
}
function getEndAtObservable(query) {
    if (query.endAt instanceof Observable_2) {
        return query.endAt;
    }
    else if (hasKey(query, 'endAt')) {
        return new Observable_2(function (subscriber) {
            subscriber.next(query.endAt);
        });
    }
    else {
        return new Observable_2(function (subscriber) {
            subscriber.next(undefined);
        });
    }
}
function getEqualToObservable(query) {
    if (query.equalTo instanceof Observable_2) {
        return query.equalTo;
    }
    else if (hasKey(query, 'equalTo')) {
        return new Observable_2(function (subscriber) {
            subscriber.next(query.equalTo);
        });
    }
    else {
        return new Observable_2(function (subscriber) {
            subscriber.next(undefined);
        });
    }
}
function mapToOrderBySelection(value, key) {
    if (value instanceof Observable_2) {
        return map_2
            .call(value, function (value) {
            return ({ value: value, key: key });
        });
    }
    else {
        return new Observable_2(function (subscriber) {
            subscriber.next({ key: key, value: value });
        });
    }
}
function mapToLimitToSelection(value, key) {
    if (value instanceof Observable_2) {
        return map_2
            .call(value, function (value) { return ({ value: value, key: key }); });
    }
    else {
        return new Observable_2(function (subscriber) {
            subscriber.next({ key: key, value: value });
        });
    }
}

var __extends$18 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return this.lift(new SwitchMapOperator(project, resultSelector));
}
var switchMap_2 = switchMap;
var SwitchMapOperator = (function () {
    function SwitchMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
    }
    SwitchMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchMapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchMapSubscriber = (function (_super) {
    __extends$18(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.index = 0;
    }
    SwitchMapSubscriber.prototype._next = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    SwitchMapSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (this.resultSelector) {
            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            this.destination.next(innerValue);
        }
    };
    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
        var result;
        try {
            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return SwitchMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));

function FirebaseListFactory(ref, _a) {
    var _b = _a === void 0 ? {} : _a, preserveSnapshot = _b.preserveSnapshot, _c = _b.query, query = _c === void 0 ? {} : _c;
    if (isEmptyObject(query)) {
        return firebaseListObservable(ref, { preserveSnapshot: preserveSnapshot });
    }
    var queryObs = observeQuery(query);
    return new FirebaseListObservable(ref, function (subscriber) {
        var sub = switchMap_2.call(map_2.call(queryObs, function (query) {
            var queried = ref;
            if (query.orderByChild) {
                queried = queried.orderByChild(query.orderByChild);
            }
            else if (query.orderByKey) {
                queried = queried.orderByKey();
            }
            else if (query.orderByPriority) {
                queried = queried.orderByPriority();
            }
            else if (query.orderByValue) {
                queried = queried.orderByValue();
            }
            if (hasKey(query, "equalTo")) {
                if (hasKey(query.equalTo, "value")) {
                    queried = queried.equalTo(query.equalTo.value, query.equalTo.key);
                }
                else {
                    queried = queried.equalTo(query.equalTo);
                }
                if (hasKey(query, "startAt") || hasKey(query, "endAt")) {
                    throw new Error('Query Error: Cannot use startAt or endAt with equalTo.');
                }
                if (!isNil(query.limitToFirst)) {
                    queried = queried.limitToFirst(query.limitToFirst);
                }
                if (!isNil(query.limitToLast)) {
                    queried = queried.limitToLast(query.limitToLast);
                }
                return queried;
            }
            if (hasKey(query, "startAt")) {
                if (hasKey(query.startAt, "value")) {
                    queried = queried.startAt(query.startAt.value, query.startAt.key);
                }
                else {
                    queried = queried.startAt(query.startAt);
                }
            }
            if (hasKey(query, "endAt")) {
                if (hasKey(query.endAt, "value")) {
                    queried = queried.endAt(query.endAt.value, query.endAt.key);
                }
                else {
                    queried = queried.endAt(query.endAt);
                }
            }
            if (!isNil(query.limitToFirst) && query.limitToLast) {
                throw new Error('Query Error: Cannot use limitToFirst with limitToLast.');
            }
            if (!isNil(query.limitToFirst)) {
                queried = queried.limitToFirst(query.limitToFirst);
            }
            if (!isNil(query.limitToLast)) {
                queried = queried.limitToLast(query.limitToLast);
            }
            return queried;
        }), function (queryRef, ix) {
            return firebaseListObservable(queryRef, { preserveSnapshot: preserveSnapshot });
        })
            .subscribe(subscriber);
        return function () { return sub.unsubscribe(); };
    });
}
function firebaseListObservable(ref, _a) {
    var preserveSnapshot = (_a === void 0 ? {} : _a).preserveSnapshot;
    var toValue = preserveSnapshot ? (function (snapshot) { return snapshot; }) : unwrapMapFn;
    var toKey = preserveSnapshot ? (function (value) { return value.key; }) : (function (value) { return value.$key; });
    var listObs = new FirebaseListObservable(ref, function (obs) {
        var handles = [];
        var hasLoaded = false;
        var lastLoadedKey = null;
        var array = [];
        ref.once('value', function (snap) {
            if (snap.exists()) {
                snap.forEach(function (child) {
                    lastLoadedKey = child.key;
                });
                if (array.find(function (child) { return toKey(child) === lastLoadedKey; })) {
                    hasLoaded = true;
                    obs.next(array);
                }
            }
            else {
                hasLoaded = true;
                obs.next(array);
            }
        }, function (err) {
            if (err) {
                obs.error(err);
                obs.complete();
            }
        });
        var addFn = ref.on('child_added', function (child, prevKey) {
            array = onChildAdded(array, toValue(child), toKey, prevKey);
            if (hasLoaded) {
                obs.next(array);
            }
            else if (child.key === lastLoadedKey) {
                hasLoaded = true;
                obs.next(array);
            }
        }, function (err) {
            if (err) {
                obs.error(err);
                obs.complete();
            }
        });
        handles.push({ event: 'child_added', handle: addFn });
        var remFn = ref.on('child_removed', function (child) {
            array = onChildRemoved(array, toValue(child), toKey);
            if (hasLoaded) {
                obs.next(array);
            }
        }, function (err) {
            if (err) {
                obs.error(err);
                obs.complete();
            }
        });
        handles.push({ event: 'child_removed', handle: remFn });
        var chgFn = ref.on('child_changed', function (child, prevKey) {
            array = onChildChanged(array, toValue(child), toKey, prevKey);
            if (hasLoaded) {
                obs.next(array);
            }
        }, function (err) {
            if (err) {
                obs.error(err);
                obs.complete();
            }
        });
        handles.push({ event: 'child_changed', handle: chgFn });
        return function () {
            handles.forEach(function (item) {
                ref.off(item.event, item.handle);
            });
        };
    });
    return observeOn_2.call(listObs, new ZoneScheduler(Zone.current));
}
function onChildAdded(arr, child, toKey, prevKey) {
    if (!arr.length) {
        return [child];
    }
    return arr.reduce(function (accumulator, curr, i) {
        if (!prevKey && i === 0) {
            accumulator.push(child);
        }
        accumulator.push(curr);
        if (prevKey && prevKey === toKey(curr)) {
            accumulator.push(child);
        }
        return accumulator;
    }, []);
}
function onChildChanged(arr, child, toKey, prevKey) {
    var childKey = toKey(child);
    return arr.reduce(function (accumulator, val, i) {
        var valKey = toKey(val);
        if (!prevKey && i == 0) {
            accumulator.push(child);
            if (valKey !== childKey) {
                accumulator.push(val);
            }
        }
        else if (valKey === prevKey) {
            accumulator.push(val);
            accumulator.push(child);
        }
        else if (valKey !== childKey) {
            accumulator.push(val);
        }
        return accumulator;
    }, []);
}
function onChildRemoved(arr, child, toKey) {
    var childKey = toKey(child);
    return arr.filter(function (c) { return toKey(c) !== childKey; });
}

var __extends$19 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FirebaseObjectObservable = (function (_super) {
    __extends$19(FirebaseObjectObservable, _super);
    function FirebaseObjectObservable(subscribe, $ref) {
        var _this = _super.call(this, subscribe) || this;
        _this.$ref = $ref;
        return _this;
    }
    FirebaseObjectObservable.prototype.lift = function (operator) {
        var observable = new FirebaseObjectObservable();
        observable.source = this;
        observable.operator = operator;
        observable.$ref = this.$ref;
        return observable;
    };
    FirebaseObjectObservable.prototype.set = function (value) {
        if (!this.$ref) {
            throw new Error('No ref specified for this Observable!');
        }
        return this.$ref.set(value);
    };
    FirebaseObjectObservable.prototype.update = function (value) {
        if (!this.$ref) {
            throw new Error('No ref specified for this Observable!');
        }
        return this.$ref.update(value);
    };
    FirebaseObjectObservable.prototype.remove = function () {
        if (!this.$ref) {
            throw new Error('No ref specified for this Observable!');
        }
        return this.$ref.remove();
    };
    return FirebaseObjectObservable;
}(Observable_2));

function FirebaseObjectFactory(ref, _a) {
    var preserveSnapshot = (_a === void 0 ? {} : _a).preserveSnapshot;
    var objectObservable = new FirebaseObjectObservable(function (obs) {
        var fn = ref.on('value', function (snapshot) {
            obs.next(preserveSnapshot ? snapshot : unwrapMapFn(snapshot));
        }, function (err) {
            if (err) {
                obs.error(err);
                obs.complete();
            }
        });
        return function () { return ref.off('value', fn); };
    }, ref);
    return observeOn_2.call(objectObservable, new ZoneScheduler(Zone.current));
}

var AngularFireDatabase = (function () {
    function AngularFireDatabase(app) {
        this.app = app;
        this.database = app.database();
    }
    AngularFireDatabase.prototype.list = function (pathOrRef, opts) {
        var ref = getRef(this.app, pathOrRef);
        return FirebaseListFactory(ref, opts);
    };
    AngularFireDatabase.prototype.object = function (pathOrRef, opts) {
        var ref = getRef(this.app, pathOrRef);
        return FirebaseObjectFactory(ref, opts);
    };
    AngularFireDatabase.decorators = [
        { type: Injectable },
    ];
    AngularFireDatabase.ctorParameters = function () { return [
        { type: FirebaseApp, },
    ]; };
    return AngularFireDatabase;
}());

/*! @license Firebase v4.3.0
Build: rev-bd8265e
Terms: https://firebase.google.com/terms/ */

var firebase$1 = require('./app');
(function(){(function(){var h,aa=aa||{},k=this,ba=function(a){return void 0!==a},m=function(a){return"string"==typeof a},ca=function(a){return"boolean"==typeof a},da=function(a){return"number"==typeof a},ea=function(){},fa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ha=function(a){return null===a},ia=function(a){return"array"==fa(a)},ja=function(a){var b=fa(a);return"array"==b||"object"==b&&"number"==typeof a.length},p=function(a){return"function"==fa(a)},q=function(a){var b=
typeof a;return"object"==b&&null!=a||"function"==b},ka=function(a,b,c){return a.call.apply(a.bind,arguments)},la=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return r.apply(null,
arguments)},ma=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},na=Date.now||function(){return+new Date},t=function(a,b){function c(){}c.prototype=b.prototype;a.Uc=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Kg=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)};};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b);}a&&(this.message=String(a));};t(u,Error);u.prototype.name="CustomError";var oa=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},xa=function(a){if(!qa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ra,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(sa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ta,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ua,"&quot;"));-1!=a.indexOf("'")&&
(a=a.replace(va,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(wa,"&#0;"));return a},ra=/&/g,sa=/</g,ta=/>/g,ua=/"/g,va=/'/g,wa=/\x00/g,qa=/[\x00&<>"']/,v=function(a,b){return-1!=a.indexOf(b)},ya=function(a,b){return a<b?-1:a>b?1:0};var za=function(a,b){b.unshift(a);u.call(this,oa.apply(null,b));b.shift();};t(za,u);za.prototype.name="AssertionError";
var Aa=function(a,b,c,d){var e="Assertion failed";if(c){e+=": "+c;var f=d;}else a&&(e+=": "+a,f=b);throw new za(""+e,f||[]);},w=function(a,b,c){a||Aa("",null,b,Array.prototype.slice.call(arguments,2));return a},Ba=function(a,b){throw new za("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},Ca=function(a,b,c){da(a)||Aa("Expected number but got %s: %s.",[fa(a),a],b,Array.prototype.slice.call(arguments,2));return a},Da=function(a,b,c){m(a)||Aa("Expected string but got %s: %s.",[fa(a),
a],b,Array.prototype.slice.call(arguments,2));},Ea=function(a,b,c){p(a)||Aa("Expected function but got %s: %s.",[fa(a),a],b,Array.prototype.slice.call(arguments,2));};var Ga=function(){this.Tc="";this.df=Fa;};Ga.prototype.ob=!0;Ga.prototype.mb=function(){return this.Tc};Ga.prototype.toString=function(){return"Const{"+this.Tc+"}"};var Ha=function(a){if(a instanceof Ga&&a.constructor===Ga&&a.df===Fa)return a.Tc;Ba("expected object of type Const, got '"+a+"'");return"type_error:Const"},Fa={},Ia=function(a){var b=new Ga;b.Tc=a;return b};Ia("");var Ka=function(){this.Mc="";this.ef=Ja;};Ka.prototype.ob=!0;Ka.prototype.mb=function(){return this.Mc};Ka.prototype.toString=function(){return"TrustedResourceUrl{"+this.Mc+"}"};
var La=function(a){if(a instanceof Ka&&a.constructor===Ka&&a.ef===Ja)return a.Mc;Ba("expected object of type TrustedResourceUrl, got '"+a+"' of type "+fa(a));return"type_error:TrustedResourceUrl"},Na=function(a,b){a=Ma(a,b);b=new Ka;b.Mc=a;return b},Ma=function(a,b){var c=Ha(a);if(!Oa.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);return c.replace(Pa,function(a,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+
JSON.stringify(b));a=b[e];return a instanceof Ga?Ha(a):encodeURIComponent(String(a))})},Pa=/%{(\w+)}/g,Oa=/^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i,Ja={};var Qa=Array.prototype.indexOf?function(a,b,c){w(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){w(null!=a.length);Array.prototype.forEach.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a);},Ra=function(a,b){for(var c=m(a)?
a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a);},Sa=Array.prototype.map?function(a,b,c){w(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=m(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ta=Array.prototype.some?function(a,b,c){w(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
Va=function(a){a:{var b=Ua;for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1;}return 0>b?null:m(a)?a.charAt(b):a[b]},Wa=function(a,b){return 0<=Qa(a,b)},Ya=function(a,b){b=Qa(a,b);var c;(c=0<=b)&&Xa(a,b);return c},Xa=function(a,b){w(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},Za=function(a,b){var c=0;Ra(a,function(d,e){b.call(void 0,d,e,a)&&Xa(a,e)&&c++;});},$a=function(a){return Array.prototype.concat.apply([],arguments)},
ab=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var bb=function(a){return Sa(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};var cb;a:{var db=k.navigator;if(db){var eb=db.userAgent;if(eb){cb=eb;break a}}cb="";}var y=function(a){return v(cb,a)};var fb=function(a,b){for(var c in a)b.call(void 0,a[c],c,a);},gb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1},hb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},ib=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},jb=function(a){for(var b in a)return!1;return!0},kb=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},lb=function(a){var b={},c;for(c in a)b[c]=a[c];return b},mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
nb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c]);}};var ob=function(a){ob[" "](a);return a};ob[" "]=ea;var qb=function(a,b){var c=pb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var rb=y("Opera"),z=y("Trident")||y("MSIE"),sb=y("Edge"),tb=sb||z,ub=y("Gecko")&&!(v(cb.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),vb=v(cb.toLowerCase(),"webkit")&&!y("Edge"),xb=function(){var a=k.document;return a?a.documentMode:void 0},yb;
a:{var zb="",Ab=function(){var a=cb;if(ub)return/rv\:([^\);]+)(\)|;)/.exec(a);if(sb)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(vb)return/WebKit\/(\S+)/.exec(a);if(rb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ab&&(zb=Ab?Ab[1]:"");if(z){var Bb=xb();if(null!=Bb&&Bb>parseFloat(zb)){yb=String(Bb);break a}}yb=zb;}
var Cb=yb,pb={},A=function(a){return qb(a,function(){for(var b=0,c=pa(String(Cb)).split("."),d=pa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",l=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==g[0].length&&0==l[0].length)break;b=ya(0==g[1].length?0:parseInt(g[1],10),0==l[1].length?0:parseInt(l[1],10))||ya(0==g[2].length,0==l[2].length)||ya(g[2],l[2]);g=g[3];l=l[3];}while(0==b)}return 0<=b})},Db;var Eb=k.document;
Db=Eb&&z?xb()||("CSS1Compat"==Eb.compatMode?parseInt(Cb,10):5):void 0;var Fb=null,Gb=null,Ib=function(a){var b="";Hb(a,function(a){b+=String.fromCharCode(a);});return b},Hb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=Gb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}Jb();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=l&&b(g<<6&192|l));}},Jb=function(){if(!Fb){Fb={};Gb={};for(var a=0;65>a;a++)Fb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
Gb[Fb[a]]=a,62<=a&&(Gb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a);}};var Kb=function(){this.Ca=-1;};var Nb=function(a,b){this.Ca=-1;this.Ca=64;this.qc=k.Uint8Array?new Uint8Array(this.Ca):Array(this.Ca);this.Xc=this.pb=0;this.l=[];this.Yf=a;this.Ae=b;this.Ag=k.Int32Array?new Int32Array(64):Array(64);ba(Lb)||(Lb=k.Int32Array?new Int32Array(Mb):Mb);this.reset();},Lb;t(Nb,Kb);for(var Ob=[],Pb=0;63>Pb;Pb++)Ob[Pb]=0;var Qb=$a(128,Ob);Nb.prototype.reset=function(){this.Xc=this.pb=0;this.l=k.Int32Array?new Int32Array(this.Ae):ab(this.Ae);};
var Rb=function(a){var b=a.qc;w(b.length==a.Ca);for(var c=a.Ag,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,g=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+g|0;}d=a.l[0]|0;e=a.l[1]|0;var l=a.l[2]|0,n=a.l[3]|0,F=a.l[4]|0,wb=a.l[5]|0,gc=a.l[6]|0;f=a.l[7]|0;for(b=0;64>b;b++){var ri=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&l^e&l)|0;g=F&wb^~F&gc;f=f+((F>>>
6|F<<26)^(F>>>11|F<<21)^(F>>>25|F<<7))|0;g=g+(Lb[b]|0)|0;g=f+(g+(c[b]|0)|0)|0;f=gc;gc=wb;wb=F;F=n+g|0;n=l;l=e;e=d;d=g+ri|0;}a.l[0]=a.l[0]+d|0;a.l[1]=a.l[1]+e|0;a.l[2]=a.l[2]+l|0;a.l[3]=a.l[3]+n|0;a.l[4]=a.l[4]+F|0;a.l[5]=a.l[5]+wb|0;a.l[6]=a.l[6]+gc|0;a.l[7]=a.l[7]+f|0;};
Nb.prototype.update=function(a,b){ba(b)||(b=a.length);var c=0,d=this.pb;if(m(a))for(;c<b;)this.qc[d++]=a.charCodeAt(c++),d==this.Ca&&(Rb(this),d=0);else if(ja(a))for(;c<b;){var e=a[c++];if(!("number"==typeof e&&0<=e&&255>=e&&e==(e|0)))throw Error("message must be a byte array");this.qc[d++]=e;d==this.Ca&&(Rb(this),d=0);}else throw Error("message must be string or array");this.pb=d;this.Xc+=b;};
Nb.prototype.digest=function(){var a=[],b=8*this.Xc;56>this.pb?this.update(Qb,56-this.pb):this.update(Qb,this.Ca-(this.pb-56));for(var c=63;56<=c;c--)this.qc[c]=b&255,b/=256;Rb(this);for(c=b=0;c<this.Yf;c++)for(var d=24;0<=d;d-=8)a[b++]=this.l[c]>>d&255;return a};
var Mb=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];var Tb=function(){Nb.call(this,8,Sb);};t(Tb,Nb);var Sb=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];var Ub=function(){this.La=this.La;this.Jc=this.Jc;};Ub.prototype.La=!1;Ub.prototype.isDisposed=function(){return this.La};Ub.prototype.kb=function(){if(this.Jc)for(;this.Jc.length;)this.Jc.shift()();};var Vb=!z||9<=Number(Db),Wb=z&&!A("9");!vb||A("528");ub&&A("1.9b")||z&&A("8")||rb&&A("9.5")||vb&&A("528");ub&&!A("8")||z&&A("9");var Xb=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0;}});k.addEventListener("test",ea,b);k.removeEventListener("test",ea,b);return a}();var B=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Va=!1;this.Ne=!0;};B.prototype.stopPropagation=function(){this.Va=!0;};B.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Ne=!1;};var Yb=function(a,b){B.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.O=this.state=null;a&&this.init(a,b);};t(Yb,B);
Yb.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(ub){a:{try{ob(b.nodeName);var e=!0;break a}catch(f){}e=!1;}e||(b=null);}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=vb||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=vb||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,
this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.O=a;a.defaultPrevented&&
this.preventDefault();};Yb.prototype.stopPropagation=function(){Yb.Uc.stopPropagation.call(this);this.O.stopPropagation?this.O.stopPropagation():this.O.cancelBubble=!0;};Yb.prototype.preventDefault=function(){Yb.Uc.preventDefault.call(this);var a=this.O;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Wb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1;}catch(b){}};Yb.prototype.Bf=function(){return this.O};var Zb="closure_listenable_"+(1E6*Math.random()|0),$b=0;var ac=function(a,b,c,d,e){this.listener=a;this.Nc=null;this.src=b;this.type=c;this.capture=!!d;this.wc=e;this.key=++$b;this.Ab=this.pc=!1;},bc=function(a){a.Ab=!0;a.listener=null;a.Nc=null;a.src=null;a.wc=null;};var cc=function(a){this.src=a;this.J={};this.jc=0;};cc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.J[f];a||(a=this.J[f]=[],this.jc++);var g=dc(a,b,d,e);-1<g?(b=a[g],c||(b.pc=!1)):(b=new ac(b,this.src,f,!!d,e),b.pc=c,a.push(b));return b};cc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.J))return!1;var e=this.J[a];b=dc(e,b,c,d);return-1<b?(bc(e[b]),Xa(e,b),0==e.length&&(delete this.J[a],this.jc--),!0):!1};
var ec=function(a,b){var c=b.type;c in a.J&&Ya(a.J[c],b)&&(bc(b),0==a.J[c].length&&(delete a.J[c],a.jc--));};cc.prototype.rd=function(a,b,c,d){a=this.J[a.toString()];var e=-1;a&&(e=dc(a,b,c,d));return-1<e?a[e]:null};cc.prototype.hasListener=function(a,b){var c=ba(a),d=c?a.toString():"",e=ba(b);return gb(this.J,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};
var dc=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ab&&f.listener==b&&f.capture==!!c&&f.wc==d)return e}return-1};var fc="closure_lm_"+(1E6*Math.random()|0),hc={},ic=0,kc=function(a,b,c,d,e){if(d&&d.once)jc(a,b,c,d,e);else if(ia(b))for(var f=0;f<b.length;f++)kc(a,b[f],c,d,e);else c=lc(c),a&&a[Zb]?a.listen(b,c,q(d)?!!d.capture:!!d,e):mc(a,b,c,!1,d,e);},mc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=q(e)?!!e.capture:!!e,l=nc(a);l||(a[fc]=l=new cc(a));c=l.add(b,c,d,g,f);if(!c.Nc){d=oc();c.Nc=d;d.src=a;d.listener=c;if(a.addEventListener)Xb||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),
d,e);else if(a.attachEvent)a.attachEvent(pc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");ic++;}},oc=function(){var a=qc,b=Vb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},jc=function(a,b,c,d,e){if(ia(b))for(var f=0;f<b.length;f++)jc(a,b[f],c,d,e);else c=lc(c),a&&a[Zb]?rc(a,b,c,q(d)?!!d.capture:!!d,e):mc(a,b,c,!0,d,e);},sc=function(a,b,c,d,e){if(ia(b))for(var f=0;f<b.length;f++)sc(a,b[f],c,d,
e);else d=q(d)?!!d.capture:!!d,c=lc(c),a&&a[Zb]?a.ga.remove(String(b),c,d,e):a&&(a=nc(a))&&(b=a.rd(b,c,d,e))&&tc(b);},tc=function(a){if(!da(a)&&a&&!a.Ab){var b=a.src;if(b&&b[Zb])ec(b.ga,a);else{var c=a.type,d=a.Nc;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(pc(c),d);ic--;(c=nc(b))?(ec(c,a),0==c.jc&&(c.src=null,b[fc]=null)):bc(a);}}},pc=function(a){return a in hc?hc[a]:hc[a]="on"+a},vc=function(a,b,c,d){var e=!0;if(a=nc(a))if(b=a.J[b.toString()])for(b=b.concat(),
a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Ab&&(f=uc(f,d),e=e&&!1!==f);}return e},uc=function(a,b){var c=a.listener,d=a.wc||a.src;a.pc&&tc(a);return c.call(d,b)},qc=function(a,b){if(a.Ab)return!0;if(!Vb){if(!b)a:{b=["window","event"];for(var c=k,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c;}d=b;b=new Yb(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0;}if(e||void 0==d.returnValue)d.returnValue=!0;}d=[];for(e=
b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.Va&&0<=e;e--){b.currentTarget=d[e];var f=vc(d[e],a,!0,b);c=c&&f;}for(e=0;!b.Va&&e<d.length;e++)b.currentTarget=d[e],f=vc(d[e],a,!1,b),c=c&&f;}return c}return uc(a,new Yb(b,this))},nc=function(a){a=a[fc];return a instanceof cc?a:null},wc="__closure_events_fn_"+(1E9*Math.random()>>>0),lc=function(a){w(a,"Listener can not be null.");if(p(a))return a;w(a.handleEvent,"An object listener must have handleEvent method.");a[wc]||(a[wc]=
function(b){return a.handleEvent(b)});return a[wc]};var xc=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var zc=function(){this.xa="";this.cf=yc;};zc.prototype.ob=!0;zc.prototype.mb=function(){return this.xa};zc.prototype.toString=function(){return"SafeUrl{"+this.xa+"}"};
var Ac=function(a){if(a instanceof zc&&a.constructor===zc&&a.cf===yc)return a.xa;Ba("expected object of type SafeUrl, got '"+a+"' of type "+fa(a));return"type_error:SafeUrl"},Bc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Dc=function(a){if(a instanceof zc)return a;a=a.ob?a.mb():String(a);Bc.test(a)||(a="about:invalid#zClosurez");return Cc(a)},yc={},Cc=function(a){var b=new zc;b.xa=a;return b};Cc("about:blank");var Gc=function(a){var b=[];Ec(new Fc,a,b);return b.join("")},Fc=function(){this.Oc=void 0;},Ec=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ia(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Ec(a,a.Oc?a.Oc.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),
Hc(d,c),c.push(":"),Ec(a,a.Oc?a.Oc.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Hc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},Ic={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Jc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,
Hc=function(a,b){b.push('"',a.replace(Jc,function(a){var b=Ic[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ic[a]=b);return b}),'"');};var Kc=function(){};Kc.prototype.fe=null;var Lc=function(a){return a.fe||(a.fe=a.zd())};var Mc,Nc=function(){};t(Nc,Kc);Nc.prototype.rc=function(){var a=Oc(this);return a?new ActiveXObject(a):new XMLHttpRequest};Nc.prototype.zd=function(){var a={};Oc(this)&&(a[0]=!0,a[1]=!0);return a};
var Oc=function(a){if(!a.ze&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.ze=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.ze};Mc=new Nc;var Pc=function(){};t(Pc,Kc);Pc.prototype.rc=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Qc;throw Error("Unsupported browser");};Pc.prototype.zd=function(){return{}};
var Qc=function(){this.oa=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.oa.onload=r(this.Ff,this);this.oa.onerror=r(this.ue,this);this.oa.onprogress=r(this.Gf,this);this.oa.ontimeout=r(this.Hf,this);};h=Qc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.oa.open(a,b);};
h.send=function(a){if(a)if("string"==typeof a)this.oa.send(a);else throw Error("Only string data is supported");else this.oa.send();};h.abort=function(){this.oa.abort();};h.setRequestHeader=function(){};h.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.oa.contentType:""};h.Ff=function(){this.status=200;this.responseText=this.oa.responseText;Rc(this,4);};h.ue=function(){this.status=500;this.responseText="";Rc(this,4);};h.Hf=function(){this.ue();};
h.Gf=function(){this.status=200;Rc(this,1);};var Rc=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange();};Qc.prototype.getAllResponseHeaders=function(){return"content-type: "+this.oa.contentType};var Sc=function(a,b,c){this.Uf=c;this.qf=a;this.ig=b;this.Ic=0;this.xc=null;};Sc.prototype.get=function(){if(0<this.Ic){this.Ic--;var a=this.xc;this.xc=a.next;a.next=null;}else a=this.qf();return a};Sc.prototype.put=function(a){this.ig(a);this.Ic<this.Uf&&(this.Ic++,a.next=this.xc,this.xc=a);};var Tc=function(a){k.setTimeout(function(){throw a;},0);},Uc,Vc=function(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;
a=r(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage();},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d);}};});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(ba(c.next)){c=c.next;var a=c.je;c.je=null;a();}};return function(a){d.next={je:a};d=d.next;b.port2.postMessage(0);}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null;};document.documentElement.appendChild(b);}:function(a){k.setTimeout(a,0);}};var Wc=function(){this.bd=this.gb=null;},Yc=new Sc(function(){return new Xc},function(a){a.reset();},100);Wc.prototype.add=function(a,b){var c=Yc.get();c.set(a,b);this.bd?this.bd.next=c:(w(!this.gb),this.gb=c);this.bd=c;};Wc.prototype.remove=function(){var a=null;this.gb&&(a=this.gb,this.gb=this.gb.next,this.gb||(this.bd=null),a.next=null);return a};var Xc=function(){this.next=this.scope=this.qd=null;};Xc.prototype.set=function(a,b){this.qd=a;this.scope=b;this.next=null;};
Xc.prototype.reset=function(){this.next=this.scope=this.qd=null;};var cd=function(a,b){Zc||$c();ad||(Zc(),ad=!0);bd.add(a,b);},Zc,$c=function(){if(-1!=String(k.Promise).indexOf("[native code]")){var a=k.Promise.resolve(void 0);Zc=function(){a.then(dd);};}else Zc=function(){var a=dd;!p(k.setImmediate)||k.Window&&k.Window.prototype&&!y("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(Uc||(Uc=Vc()),Uc(a)):k.setImmediate(a);};},ad=!1,bd=new Wc,dd=function(){for(var a;a=bd.remove();){try{a.qd.call(a.scope);}catch(b){Tc(b);}Yc.put(a);}ad=!1;};var ed=function(a){return q(a)?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):void 0===a?"undefined":null===a?"null":typeof a},fd=function(a){return(a=a&&a.ownerDocument)&&(a.defaultView||a.parentWindow)||k};var gd=!z||9<=Number(Db);!ub&&!z||z&&9<=Number(Db)||ub&&A("1.9.1");z&&A("9");var id=function(){this.xa="";this.bf=hd;};id.prototype.ob=!0;id.prototype.mb=function(){return this.xa};id.prototype.toString=function(){return"SafeHtml{"+this.xa+"}"};var jd=function(a){if(a instanceof id&&a.constructor===id&&a.bf===hd)return a.xa;Ba("expected object of type SafeHtml, got '"+a+"' of type "+fa(a));return"type_error:SafeHtml"},hd={};id.prototype.Of=function(a){this.xa=a;return this};var kd=function(a,b){var c=fd(a);"undefined"!=typeof c.HTMLScriptElement&&"undefined"!=typeof c.Element&&w(a&&(a instanceof c.HTMLScriptElement||!(a instanceof c.Element)),"Argument is not a HTMLScriptElement (or a non-Element mock); got: %s",ed(a));a.src=La(b);};var ld=function(a){var b=document;return m(a)?b.getElementById(a):a},nd=function(a,b){fb(b,function(b,d){b&&b.ob&&(b=b.mb());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:md.hasOwnProperty(d)?a.setAttribute(md[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b;});},md={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",
type:"type",usemap:"useMap",valign:"vAlign",width:"width"},pd=function(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!gd&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',xa(g.name),'"');if(g.type){f.push(' type="',xa(g.type),'"');var l={};nb(l,g);delete l.type;g=l;}f.push(">");f=f.join("");}f=e.createElement(f);g&&(m(g)?f.className=g:ia(g)?f.className=g.join(" "):nd(f,g));2<d.length&&od(e,f,d);return f},od=function(a,b,c){function d(c){c&&b.appendChild(m(c)?a.createTextNode(c):
c);}for(var e=2;e<c.length;e++){var f=c[e];!ja(f)||q(f)&&0<f.nodeType?d(f):x(qd(f)?ab(f):f,d);}},qd=function(a){if(a&&"number"==typeof a.length){if(q(a))return"function"==typeof a.item||"string"==typeof a.item;if(p(a))return"function"==typeof a.item}return!1};var rd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0;},sd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var C=function(a,b){this.aa=0;this.za=void 0;this.jb=this.ua=this.w=null;this.vc=this.od=!1;if(a!=ea)try{var c=this;a.call(b,function(a){td(c,2,a);},function(a){if(!(a instanceof ud))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}td(c,3,a);});}catch(d){td(this,3,d);}},vd=function(){this.next=this.context=this.rb=this.Ta=this.child=null;this.Gb=!1;};vd.prototype.reset=function(){this.context=this.rb=this.Ta=this.child=null;this.Gb=!1;};
var wd=new Sc(function(){return new vd},function(a){a.reset();},100),xd=function(a,b,c){var d=wd.get();d.Ta=a;d.rb=b;d.context=c;return d},D=function(a){if(a instanceof C)return a;var b=new C(ea);td(b,2,a);return b},E=function(a){return new C(function(b,c){c(a);})},zd=function(a,b,c){yd(a,b,c,null)||cd(ma(b,a));},Ad=function(a){return new C(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e);},g=function(a){c(a);},l=0,n;l<a.length;l++)n=a[l],zd(n,ma(f,l),g);else b(e);})},
Bd=function(a){return new C(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{zf:!0,value:f}:{zf:!1,reason:f};0==c&&b(d);},f=0,g;f<a.length;f++)g=a[f],zd(g,ma(e,f,!0),ma(e,f,!1));else b(d);})};C.prototype.then=function(a,b,c){null!=a&&Ea(a,"opt_onFulfilled should be a function.");null!=b&&Ea(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Cd(this,p(a)?a:null,p(b)?b:null,c)};rd(C);
var Ed=function(a,b){b=xd(b,b,void 0);b.Gb=!0;Dd(a,b);return a};C.prototype.f=function(a,b){return Cd(this,null,a,b)};C.prototype.cancel=function(a){0==this.aa&&cd(function(){var b=new ud(a);Fd(this,b);},this);};
var Fd=function(a,b){if(0==a.aa)if(a.w){var c=a.w;if(c.ua){for(var d=0,e=null,f=null,g=c.ua;g&&(g.Gb||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.aa&&1==d?Fd(c,b):(f?(d=f,w(c.ua),w(null!=d),d.next==c.jb&&(c.jb=d),d.next=d.next.next):Gd(c),Hd(c,e,3,b)));}a.w=null;}else td(a,3,b);},Dd=function(a,b){a.ua||2!=a.aa&&3!=a.aa||Id(a);w(null!=b.Ta);a.jb?a.jb.next=b:a.ua=b;a.jb=b;},Cd=function(a,b,c,d){var e=xd(null,null,null);e.child=new C(function(a,g){e.Ta=b?function(c){try{var e=b.call(d,
c);a(e);}catch(F){g(F);}}:a;e.rb=c?function(b){try{var e=c.call(d,b);!ba(e)&&b instanceof ud?g(b):a(e);}catch(F){g(F);}}:g;});e.child.w=a;Dd(a,e);return e.child};C.prototype.wg=function(a){w(1==this.aa);this.aa=0;td(this,2,a);};C.prototype.xg=function(a){w(1==this.aa);this.aa=0;td(this,3,a);};
var td=function(a,b,c){0==a.aa&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.aa=1,yd(c,a.wg,a.xg,a)||(a.za=c,a.aa=b,a.w=null,Id(a),3!=b||c instanceof ud||Jd(a,c)));},yd=function(a,b,c,d){if(a instanceof C)return null!=b&&Ea(b,"opt_onFulfilled should be a function."),null!=c&&Ea(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),Dd(a,xd(b||ea,c||null,d)),!0;if(sd(a))return a.then(b,c,d),!0;if(q(a))try{var e=a.then;if(p(e))return Kd(a,
e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},Kd=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a));},l=function(a){f||(f=!0,d.call(e,a));};try{b.call(a,g,l);}catch(n){l(n);}},Id=function(a){a.od||(a.od=!0,cd(a.vf,a));},Gd=function(a){var b=null;a.ua&&(b=a.ua,a.ua=b.next,b.next=null);a.ua||(a.jb=null);null!=b&&w(null!=b.Ta);return b};C.prototype.vf=function(){for(var a;a=Gd(this);)Hd(this,a,this.aa,this.za);this.od=!1;};
var Hd=function(a,b,c,d){if(3==c&&b.rb&&!b.Gb)for(;a&&a.vc;a=a.w)a.vc=!1;if(b.child)b.child.w=null,Ld(b,c,d);else try{b.Gb?b.Ta.call(b.context):Ld(b,c,d);}catch(e){Md.call(null,e);}wd.put(b);},Ld=function(a,b,c){2==b?a.Ta.call(a.context,c):a.rb&&a.rb.call(a.context,c);},Jd=function(a,b){a.vc=!0;cd(function(){a.vc&&Md.call(null,b);});},Md=Tc,ud=function(a){u.call(this,a);};t(ud,u);ud.prototype.name="cancel";
var Nd=function(a,b){this.Qc=[];this.He=a;this.ne=b||null;this.Ob=this.lb=!1;this.za=void 0;this.Yd=this.de=this.fd=!1;this.Yc=0;this.w=null;this.gd=0;};Nd.prototype.cancel=function(a){if(this.lb)this.za instanceof Nd&&this.za.cancel();else{if(this.w){var b=this.w;delete this.w;a?b.cancel(a):(b.gd--,0>=b.gd&&b.cancel());}this.He?this.He.call(this.ne,this):this.Yd=!0;this.lb||Od(this,new Pd);}};Nd.prototype.le=function(a,b){this.fd=!1;Qd(this,a,b);};
var Qd=function(a,b,c){a.lb=!0;a.za=c;a.Ob=!b;Rd(a);},Td=function(a){if(a.lb){if(!a.Yd)throw new Sd;a.Yd=!1;}};Nd.prototype.callback=function(a){Td(this);Ud(a);Qd(this,!0,a);};var Od=function(a,b){Td(a);Ud(b);Qd(a,!1,b);},Ud=function(a){w(!(a instanceof Nd),"An execution sequence may not be initiated with a blocking Deferred.");},Wd=function(a,b){Vd(a,null,b,void 0);},Vd=function(a,b,c,d){w(!a.de,"Blocking Deferreds can not be re-used");a.Qc.push([b,c,d]);a.lb&&Rd(a);};
Nd.prototype.then=function(a,b,c){var d,e,f=new C(function(a,b){d=a;e=b;});Vd(this,d,function(a){a instanceof Pd?f.cancel():e(a);});return f.then(a,b,c)};rd(Nd);
var Xd=function(a){return Ta(a.Qc,function(a){return p(a[1])})},Rd=function(a){if(a.Yc&&a.lb&&Xd(a)){var b=a.Yc,c=Yd[b];c&&(k.clearTimeout(c.Pb),delete Yd[b]);a.Yc=0;}a.w&&(a.w.gd--,delete a.w);b=a.za;for(var d=c=!1;a.Qc.length&&!a.fd;){var e=a.Qc.shift(),f=e[0],g=e[1];e=e[2];if(f=a.Ob?g:f)try{var l=f.call(e||a.ne,b);ba(l)&&(a.Ob=a.Ob&&(l==b||l instanceof Error),a.za=b=l);if(sd(b)||"function"===typeof k.Promise&&b instanceof k.Promise)d=!0,a.fd=!0;}catch(n){b=n,a.Ob=!0,Xd(a)||(c=!0);}}a.za=b;d&&(l=r(a.le,
a,!0),d=r(a.le,a,!1),b instanceof Nd?(Vd(b,l,d),b.de=!0):b.then(l,d));c&&(b=new Zd(b),Yd[b.Pb]=b,a.Yc=b.Pb);},Sd=function(){u.call(this);};t(Sd,u);Sd.prototype.message="Deferred has already fired";Sd.prototype.name="AlreadyCalledError";var Pd=function(){u.call(this);};t(Pd,u);Pd.prototype.message="Deferred was canceled";Pd.prototype.name="CanceledError";var Zd=function(a){this.Pb=k.setTimeout(r(this.vg,this),0);this.ba=a;};
Zd.prototype.vg=function(){w(Yd[this.Pb],"Cannot throw an error that is not scheduled.");delete Yd[this.Pb];throw this.ba;};var Yd={};var de=function(a){var b={},c=b.document||document,d=La(a),e=document.createElement("SCRIPT"),f={Oe:e,ic:void 0},g=new Nd($d,f),l=null,n=null!=b.timeout?b.timeout:5E3;0<n&&(l=window.setTimeout(function(){ae(e,!0);Od(g,new be(1,"Timeout reached for loading script "+d));},n),f.ic=l);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(ae(e,b.Lg||!1,l),g.callback(null));};e.onerror=function(){ae(e,!0,l);Od(g,new be(0,"Error while loading script "+d));};
f=b.attributes||{};nb(f,{type:"text/javascript",charset:"UTF-8"});nd(e,f);kd(e,a);ce(c).appendChild(e);return g},ce=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement},$d=function(){if(this&&this.Oe){var a=this.Oe;a&&"SCRIPT"==a.tagName&&ae(a,!0,this.ic);}},ae=function(a,b,c){null!=c&&k.clearTimeout(c);a.onload=ea;a.onerror=ea;a.onreadystatechange=ea;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a);},0);},be=function(a,
b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a;};t(be,u);var ee=function(a,b,c,d,e){this.reset(a,b,c,d,e);};ee.prototype.pe=null;var fe=0;ee.prototype.reset=function(a,b,c,d,e){"number"==typeof e||fe++;d||na();this.Ub=a;this.Xf=b;delete this.pe;};ee.prototype.Qe=function(a){this.Ub=a;};var ge=function(a){this.Fe=a;this.ve=this.jd=this.Ub=this.w=null;},he=function(a,b){this.name=a;this.value=b;};he.prototype.toString=function(){return this.name};var ie=new he("SEVERE",1E3),je=new he("INFO",800),ke=new he("CONFIG",700),le=new he("FINE",500);ge.prototype.getName=function(){return this.Fe};ge.prototype.getParent=function(){return this.w};ge.prototype.Qe=function(a){this.Ub=a;};var me=function(a){if(a.Ub)return a.Ub;if(a.w)return me(a.w);Ba("Root logger has no level set.");return null};
ge.prototype.log=function(a,b,c){if(a.value>=me(this).value)for(p(b)&&(b=b()),a=new ee(a,String(b),this.Fe),c&&(a.pe=c),c="log:"+a.Xf,(b=k.console)&&b.timeStamp&&b.timeStamp(c),(b=k.msWriteProfilerMark)&&b(c),c=this;c;){var d=c,e=a;if(d.ve)for(var f=0;b=d.ve[f];f++)b(e);c=c.getParent();}};ge.prototype.info=function(a,b){this.log(je,a,b);};ge.prototype.config=function(a,b){this.log(ke,a,b);};
var ne={},oe=null,pe=function(a){oe||(oe=new ge(""),ne[""]=oe,oe.Qe(ke));var b;if(!(b=ne[a])){b=new ge(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=pe(a.substr(0,c));c.jd||(c.jd={});c.jd[d]=b;b.w=c;ne[a]=b;}return b};var G=function(){Ub.call(this);this.ga=new cc(this);this.gf=this;this.Hd=null;};t(G,Ub);G.prototype[Zb]=!0;h=G.prototype;h.addEventListener=function(a,b,c,d){kc(this,a,b,c,d);};h.removeEventListener=function(a,b,c,d){sc(this,a,b,c,d);};
h.dispatchEvent=function(a){qe(this);var b=this.Hd;if(b){var c=[];for(var d=1;b;b=b.Hd)c.push(b),w(1E3>++d,"infinite loop");}b=this.gf;d=a.type||a;if(m(a))a=new B(a,b);else if(a instanceof B)a.target=a.target||b;else{var e=a;a=new B(d,b);nb(a,e);}e=!0;if(c)for(var f=c.length-1;!a.Va&&0<=f;f--){var g=a.currentTarget=c[f];e=re(g,d,!0,a)&&e;}a.Va||(g=a.currentTarget=b,e=re(g,d,!0,a)&&e,a.Va||(e=re(g,d,!1,a)&&e));if(c)for(f=0;!a.Va&&f<c.length;f++)g=a.currentTarget=c[f],e=re(g,d,!1,a)&&e;return e};
h.kb=function(){G.Uc.kb.call(this);if(this.ga){var a=this.ga,b=0,c;for(c in a.J){for(var d=a.J[c],e=0;e<d.length;e++)++b,bc(d[e]);delete a.J[c];a.jc--;}}this.Hd=null;};h.listen=function(a,b,c,d){qe(this);return this.ga.add(String(a),b,!1,c,d)};
var rc=function(a,b,c,d,e){a.ga.add(String(b),c,!0,d,e);},re=function(a,b,c,d){b=a.ga.J[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ab&&g.capture==c){var l=g.listener,n=g.wc||g.src;g.pc&&ec(a.ga,g);e=!1!==l.call(n,d)&&e;}}return e&&0!=d.Ne};G.prototype.rd=function(a,b,c,d){return this.ga.rd(String(a),b,c,d)};G.prototype.hasListener=function(a,b){return this.ga.hasListener(ba(a)?String(a):void 0,b)};var qe=function(a){w(a.ga,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");};var se="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""},te=function(){};te.prototype.next=function(){throw se;};te.prototype.ff=function(){return this};var H=function(a,b){a&&a.log(le,b,void 0);};var ue=function(a,b){this.ja={};this.A=[];this.fb=this.s=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1]);}else a&&this.addAll(a);};h=ue.prototype;h.ha=function(){ve(this);for(var a=[],b=0;b<this.A.length;b++)a.push(this.ja[this.A[b]]);return a};h.va=function(){ve(this);return this.A.concat()};h.Ib=function(a){return we(this.ja,a)};h.clear=function(){this.ja={};this.fb=this.s=this.A.length=0;};
h.remove=function(a){return we(this.ja,a)?(delete this.ja[a],this.s--,this.fb++,this.A.length>2*this.s&&ve(this),!0):!1};var ve=function(a){if(a.s!=a.A.length){for(var b=0,c=0;b<a.A.length;){var d=a.A[b];we(a.ja,d)&&(a.A[c++]=d);b++;}a.A.length=c;}if(a.s!=a.A.length){var e={};for(c=b=0;b<a.A.length;)d=a.A[b],we(e,d)||(a.A[c++]=d,e[d]=1),b++;a.A.length=c;}};h=ue.prototype;h.get=function(a,b){return we(this.ja,a)?this.ja[a]:b};
h.set=function(a,b){we(this.ja,a)||(this.s++,this.A.push(a),this.fb++);this.ja[a]=b;};h.addAll=function(a){if(a instanceof ue){var b=a.va();a=a.ha();}else b=ib(a),a=hb(a);for(var c=0;c<b.length;c++)this.set(b[c],a[c]);};h.forEach=function(a,b){for(var c=this.va(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this);}};h.clone=function(){return new ue(this)};
h.ff=function(a){ve(this);var b=0,c=this.fb,d=this,e=new te;e.next=function(){if(c!=d.fb)throw Error("The map has changed since the iterator was created");if(b>=d.A.length)throw se;var e=d.A[b++];return a?e:d.ja[e]};return e};var we=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var xe=function(a){if(a.ha&&"function"==typeof a.ha)return a.ha();if(m(a))return a.split("");if(ja(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return hb(a)},ye=function(a){if(a.va&&"function"==typeof a.va)return a.va();if(!a.ha||"function"!=typeof a.ha){if(ja(a)||m(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return ib(a)}},ze=function(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(ja(a)||m(a))x(a,b,c);else for(var d=ye(a),e=xe(a),f=e.length,
g=0;g<f;g++)b.call(c,e[g],d&&d[g],a);};var Ae=function(a,b,c){if(p(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)},Be=function(a){var b=null;return(new C(function(c,d){b=Ae(function(){c(void 0);},a);-1==b&&d(Error("Failed to schedule timer."));})).f(function(a){k.clearTimeout(b);throw a;})};var Ce=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,De=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1);}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"");}}};var I=function(a){G.call(this);this.headers=new ue;this.dd=a||null;this.Ba=!1;this.cd=this.b=null;this.Tb=this.Ee=this.Fc="";this.Pa=this.wd=this.Ac=this.nd=!1;this.Cb=0;this.Vc=null;this.Pc="";this.Zc=this.dg=this.af=!1;};t(I,G);var Ee=I.prototype,Fe=pe("goog.net.XhrIo");Ee.P=Fe;var Ge=/^https?$/i,He=["POST","PUT"];
I.prototype.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Fc+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Fc=a;this.Tb="";this.Ee=b;this.nd=!1;this.Ba=!0;this.b=this.dd?this.dd.rc():Mc.rc();this.cd=this.dd?Lc(this.dd):Lc(Mc);this.b.onreadystatechange=r(this.Ke,this);this.dg&&"onprogress"in this.b&&(this.b.onprogress=r(function(a){this.Je(a,!0);},this),this.b.upload&&(this.b.upload.onprogress=r(this.Je,this)));try{H(this.P,Ie(this,"Opening Xhr")),
this.wd=!0,this.b.open(b,String(a),!0),this.wd=!1;}catch(f){H(this.P,Ie(this,"Error opening Xhr: "+f.message));this.ba(5,f);return}a=c||"";var e=this.headers.clone();d&&ze(d,function(a,b){e.set(b,a);});d=Va(e.va());c=k.FormData&&a instanceof k.FormData;!Wa(He,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a);},this);this.Pc&&(this.b.responseType=this.Pc);"withCredentials"in this.b&&this.b.withCredentials!==this.af&&
(this.b.withCredentials=this.af);try{Je(this),0<this.Cb&&(this.Zc=Ke(this.b),H(this.P,Ie(this,"Will abort after "+this.Cb+"ms if incomplete, xhr2 "+this.Zc)),this.Zc?(this.b.timeout=this.Cb,this.b.ontimeout=r(this.ic,this)):this.Vc=Ae(this.ic,this.Cb,this)),H(this.P,Ie(this,"Sending request")),this.Ac=!0,this.b.send(a),this.Ac=!1;}catch(f){H(this.P,Ie(this,"Send error: "+f.message)),this.ba(5,f);}};
var Ke=function(a){return z&&A(9)&&da(a.timeout)&&ba(a.ontimeout)},Ua=function(a){return"content-type"==a.toLowerCase()};I.prototype.ic=function(){"undefined"!=typeof aa&&this.b&&(this.Tb="Timed out after "+this.Cb+"ms, aborting",H(this.P,Ie(this,this.Tb)),this.dispatchEvent("timeout"),this.abort(8));};I.prototype.ba=function(a,b){this.Ba=!1;this.b&&(this.Pa=!0,this.b.abort(),this.Pa=!1);this.Tb=b;Le(this);Me(this);};var Le=function(a){a.nd||(a.nd=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"));};
I.prototype.abort=function(){this.b&&this.Ba&&(H(this.P,Ie(this,"Aborting")),this.Ba=!1,this.Pa=!0,this.b.abort(),this.Pa=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Me(this));};I.prototype.kb=function(){this.b&&(this.Ba&&(this.Ba=!1,this.Pa=!0,this.b.abort(),this.Pa=!1),Me(this,!0));I.Uc.kb.call(this);};I.prototype.Ke=function(){this.isDisposed()||(this.wd||this.Ac||this.Pa?Ne(this):this.$f());};I.prototype.$f=function(){Ne(this);};
var Ne=function(a){if(a.Ba&&"undefined"!=typeof aa)if(a.cd[1]&&4==Oe(a)&&2==Pe(a))H(a.P,Ie(a,"Local request error detected and ignored"));else if(a.Ac&&4==Oe(a))Ae(a.Ke,0,a);else if(a.dispatchEvent("readystatechange"),4==Oe(a)){H(a.P,Ie(a,"Request complete"));a.Ba=!1;try{var b=Pe(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1;}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.Fc).match(Ce)[1]||null;if(!f&&k.self&&k.self.location){var g=
k.self.location.protocol;f=g.substr(0,g.length-1);}e=!Ge.test(f?f.toLowerCase():"");}d=e;}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var l=2<Oe(a)?a.b.statusText:"";}catch(n){H(a.P,"Can not get status: "+n.message),l="";}a.Tb=l+" ["+Pe(a)+"]";Le(a);}}finally{Me(a);}}};I.prototype.Je=function(a,b){w("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Qe(a,"progress"));this.dispatchEvent(Qe(a,b?"downloadprogress":"uploadprogress"));};
var Qe=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Me=function(a,b){if(a.b){Je(a);var c=a.b,d=a.cd[0]?ea:null;a.b=null;a.cd=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d;}catch(e){(a=a.P)&&a.log(ie,"Problem encountered resetting onreadystatechange: "+e.message,void 0);}}},Je=function(a){a.b&&a.Zc&&(a.b.ontimeout=null);da(a.Vc)&&(k.clearTimeout(a.Vc),a.Vc=null);},Oe=function(a){return a.b?a.b.readyState:0},Pe=function(a){try{return 2<Oe(a)?
a.b.status:-1}catch(b){return-1}},Re=function(a){try{return a.b?a.b.responseText:""}catch(b){return H(a.P,"Can not get responseText: "+b.message),""}};
I.prototype.getResponse=function(){try{if(!this.b)return null;if("response"in this.b)return this.b.response;switch(this.Pc){case "":case "text":return this.b.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.b)return this.b.mozResponseArrayBuffer}var a=this.P;a&&a.log(ie,"Response type "+this.Pc+" is not supported on this browser",void 0);return null}catch(b){return H(this.P,"Can not get response: "+b.message),null}};
I.prototype.getResponseHeader=function(a){if(this.b&&4==Oe(this))return a=this.b.getResponseHeader(a),null===a?void 0:a};I.prototype.getAllResponseHeaders=function(){return this.b&&4==Oe(this)?this.b.getAllResponseHeaders():""};var Ie=function(a,b){return b+" ["+a.Ee+" "+a.Fc+" "+Pe(a)+"]"};var Se=function(a,b){this.pa=this.cb=this.qa="";this.tb=null;this.Oa=this.Fa="";this.da=this.Sf=!1;if(a instanceof Se){this.da=ba(b)?b:a.da;Te(this,a.qa);var c=a.cb;J(this);this.cb=c;Ue(this,a.pa);Ve(this,a.tb);We(this,a.Fa);Xe(this,a.ea.clone());a=a.Oa;J(this);this.Oa=a;}else a&&(c=String(a).match(Ce))?(this.da=!!b,Te(this,c[1]||"",!0),a=c[2]||"",J(this),this.cb=Ye(a),Ue(this,c[3]||"",!0),Ve(this,c[4]),We(this,c[5]||"",!0),Xe(this,c[6]||"",!0),a=c[7]||"",J(this),this.Oa=Ye(a)):(this.da=!!b,this.ea=
new Ze(null,0,this.da));};Se.prototype.toString=function(){var a=[],b=this.qa;b&&a.push($e(b,af,!0),":");var c=this.pa;if(c||"file"==b)a.push("//"),(b=this.cb)&&a.push($e(b,af,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.tb,null!=c&&a.push(":",String(c));if(c=this.Fa)this.pa&&"/"!=c.charAt(0)&&a.push("/"),a.push($e(c,"/"==c.charAt(0)?bf:cf,!0));(c=this.ea.toString())&&a.push("?",c);(c=this.Oa)&&a.push("#",$e(c,df));return a.join("")};
Se.prototype.resolve=function(a){var b=this.clone(),c=!!a.qa;c?Te(b,a.qa):c=!!a.cb;if(c){var d=a.cb;J(b);b.cb=d;}else c=!!a.pa;c?Ue(b,a.pa):c=null!=a.tb;d=a.Fa;if(c)Ve(b,a.tb);else if(c=!!a.Fa){if("/"!=d.charAt(0))if(this.pa&&!this.Fa)d="/"+d;else{var e=b.Fa.lastIndexOf("/");-1!=e&&(d=b.Fa.substr(0,e+1)+d);}e=d;if(".."==e||"."==e)d="";else if(v(e,"./")||v(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var l=e[g++];"."==l?d&&g==e.length&&f.push(""):".."==l?((1<f.length||
1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(l),d=!0);}d=f.join("/");}else d=e;}c?We(b,d):c=""!==a.ea.toString();c?Xe(b,a.ea.clone()):c=!!a.Oa;c&&(a=a.Oa,J(b),b.Oa=a);return b};Se.prototype.clone=function(){return new Se(this)};
var Te=function(a,b,c){J(a);a.qa=c?Ye(b,!0):b;a.qa&&(a.qa=a.qa.replace(/:$/,""));},Ue=function(a,b,c){J(a);a.pa=c?Ye(b,!0):b;},Ve=function(a,b){J(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.tb=b;}else a.tb=null;},We=function(a,b,c){J(a);a.Fa=c?Ye(b,!0):b;},Xe=function(a,b,c){J(a);b instanceof Ze?(a.ea=b,a.ea.Wd(a.da)):(c||(b=$e(b,ef)),a.ea=new Ze(b,0,a.da));},K=function(a,b,c){J(a);a.ea.set(b,c);},ff=function(a,b){return a.ea.get(b)};
Se.prototype.removeParameter=function(a){J(this);this.ea.remove(a);return this};var J=function(a){if(a.Sf)throw Error("Tried to modify a read-only Uri");};Se.prototype.Wd=function(a){this.da=a;this.ea&&this.ea.Wd(a);return this};
var gf=function(a){return a instanceof Se?a.clone():new Se(a,void 0)},hf=function(a,b){var c=new Se(null,void 0);Te(c,"https");a&&Ue(c,a);b&&We(c,b);return c},Ye=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},$e=function(a,b,c){return m(a)?(a=encodeURI(a).replace(b,jf),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},jf=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},af=/[#\/\?@]/g,cf=/[\#\?:]/g,bf=/[\#\?]/g,ef=/[\#\?@]/g,
df=/#/g,Ze=function(a,b,c){this.s=this.m=null;this.U=a||null;this.da=!!c;},kf=function(a){a.m||(a.m=new ue,a.s=0,a.U&&De(a.U,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c);}));},mf=function(a){var b=ye(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Ze(null,0,void 0);a=xe(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];ia(f)?lf(c,e,f):c.add(e,f);}return c};h=Ze.prototype;
h.add=function(a,b){kf(this);this.U=null;a=this.ca(a);var c=this.m.get(a);c||this.m.set(a,c=[]);c.push(b);this.s=Ca(this.s)+1;return this};h.remove=function(a){kf(this);a=this.ca(a);return this.m.Ib(a)?(this.U=null,this.s=Ca(this.s)-this.m.get(a).length,this.m.remove(a)):!1};h.clear=function(){this.m=this.U=null;this.s=0;};h.Ib=function(a){kf(this);a=this.ca(a);return this.m.Ib(a)};h.forEach=function(a,b){kf(this);this.m.forEach(function(c,d){x(c,function(c){a.call(b,c,d,this);},this);},this);};
h.va=function(){kf(this);for(var a=this.m.ha(),b=this.m.va(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};h.ha=function(a){kf(this);var b=[];if(m(a))this.Ib(a)&&(b=$a(b,this.m.get(this.ca(a))));else{a=this.m.ha();for(var c=0;c<a.length;c++)b=$a(b,a[c]);}return b};h.set=function(a,b){kf(this);this.U=null;a=this.ca(a);this.Ib(a)&&(this.s=Ca(this.s)-this.m.get(a).length);this.m.set(a,[b]);this.s=Ca(this.s)+1;return this};
h.get=function(a,b){a=a?this.ha(a):[];return 0<a.length?String(a[0]):b};var lf=function(a,b,c){a.remove(b);0<c.length&&(a.U=null,a.m.set(a.ca(b),ab(c)),a.s=Ca(a.s)+c.length);};h=Ze.prototype;h.toString=function(){if(this.U)return this.U;if(!this.m)return"";for(var a=[],b=this.m.va(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.ha(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g);}}return this.U=a.join("&")};
h.clone=function(){var a=new Ze;a.U=this.U;this.m&&(a.m=this.m.clone(),a.s=this.s);return a};h.ca=function(a){a=String(a);this.da&&(a=a.toLowerCase());return a};h.Wd=function(a){a&&!this.da&&(kf(this),this.U=null,this.m.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),lf(this,b,a));},this));this.da=a;};h.extend=function(a){for(var b=0;b<arguments.length;b++)ze(arguments[b],function(a,b){this.add(b,a);},this);};var nf={Gg:{pd:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",Sd:"https://securetoken.googleapis.com/v1/token",id:"p"},Hg:{pd:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",Sd:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},Ig:{pd:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",Sd:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}},of=function(a){for(var b in nf)if(nf[b].id===a)return a=
nf[b],{firebaseEndpoint:a.pd,secureTokenEndpoint:a.Sd};return null},pf;pf=of("__EID__")?"__EID__":void 0;var qf=function(){var a=L();return z&&!!Db&&11==Db||/Edge\/\d+/.test(a)},rf=function(){return k.window&&k.window.location.href||""},sf=function(a,b){b=b||k.window;var c="about:blank";a&&(c=Ac(Dc(a)));b.location.href=c;},tf=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):ia(a[d])?kb(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<tf(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},vf=function(){var a=
L();a="Chrome"!=uf(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!z||!Db||9<Db},wf=function(a){a=(a||L()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1},xf=function(a){a=a||k.window;try{a.close();}catch(b){}},yf=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-
b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=L().toLowerCase();d&&(b.target=d,v(c,"crios/")&&(b.target="_blank"));"Firefox"==uf(L())&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(d=b)||(d={});a=window;b=c instanceof zc?c:Dc("undefined"!=typeof c.href?c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+d[g]);break;case "target":case "noreferrer":break;default:e.push(g+
"="+(d[g]?1:0));}var g=e.join(",");(y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),e=fd(g),"undefined"!=typeof e.HTMLAnchorElement&&"undefined"!=typeof e.Location&&"undefined"!=typeof e.Element&&w(g&&(g instanceof e.HTMLAnchorElement||!(g instanceof e.Location||g instanceof e.Element)),"Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s",ed(g)),b instanceof zc||b instanceof zc||(b=b.ob?
b.mb():String(b),w(Bc.test(b))||(b="about:invalid#zClosurez"),b=Cc(b)),g.href=Ac(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",c,g),d=Ac(b),g&&(tb&&v(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=Ia("b/12014412, meta tag with sanitized URL"),d='<META HTTP-EQUIV="refresh" content="0; url='+xa(d)+'">',Da(Ha(a),"must provide justification"),
w(!/^[\s\xa0]*$/.test(Ha(a)),"must provide non-empty justification"),g.document.write(jd((new id).Of(d))),g.document.close())):g=a.open(Ac(b),c,g);if(g)try{g.focus();}catch(l){}return g},zf=function(a){return new C(function(b){var c=function(){Be(2E3).then(function(){if(!a||a.closed)b();else return c()});};return c()})},Af=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bf=function(){var a=null;return(new C(function(b){"complete"==k.document.readyState?b():(a=function(){b();},jc(window,"load",a));})).f(function(b){sc(window,
"load",a);throw b;})},Df=function(){return Cf(void 0)?Bf().then(function(){return new C(function(a,b){var c=k.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."));},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a();},!1);})}):E(Error("Cordova must run in an Android or iOS file scheme."))},Cf=function(a){a=a||L();return!("file:"!==Ef()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))},Ff=function(){var a=k.window;try{return!(!a||a==a.top)}catch(b){return!1}},
Gf=function(){return firebase$1.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":firebase$1.INTERNAL.hasOwnProperty("node")?"Node":"Browser"},Hf=function(){var a=Gf();return"ReactNative"===a||"Node"===a},uf=function(a){var b=a.toLowerCase();if(v(b,"opera/")||v(b,"opr/")||v(b,"opios/"))return"Opera";if(v(b,"iemobile"))return"IEMobile";if(v(b,"msie")||v(b,"trident/"))return"IE";if(v(b,"edge/"))return"Edge";if(v(b,"firefox/"))return"Firefox";if(v(b,"silk/"))return"Silk";if(v(b,"blackberry"))return"Blackberry";
if(v(b,"webos"))return"Webos";if(!v(b,"safari/")||v(b,"chrome/")||v(b,"crios/")||v(b,"android"))if(!v(b,"chrome/")&&!v(b,"crios/")||v(b,"edge/")){if(v(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1]}else return"Chrome";else return"Safari";return"Other"},If=function(a){var b=Gf();return("Browser"===b?uf(L()):b)+"/JsCore/"+a},L=function(){return k.navigator&&k.navigator.userAgent||""},M=function(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length&&
"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b},Kf=function(){try{var a=k.localStorage,b=Jf();if(a)return a.setItem(b,"1"),a.removeItem(b),qf()?!!k.indexedDB:!0}catch(c){}return!1},Mf=function(){return(Lf()||"chrome-extension:"===Ef()||Cf())&&!Hf()&&Kf()},Lf=function(){return"http:"===Ef()||"https:"===Ef()},Ef=function(){return k.location&&k.location.protocol||null},Nf=function(a){a=a||L();return wf(a)||"Firefox"==uf(a)?!1:!0},Of=function(a){return"undefined"===typeof a?
null:Gc(a)},Pf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b},Qf=function(a){if(null!==a)return JSON.parse(a)},Jf=function(a){return a?a:""+Math.floor(1E9*Math.random()).toString()},Rf=function(a){a=a||L();return"Safari"==uf(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0},Sf=function(){var a=k.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=
null;},Tf=function(){var a=k.navigator;return a&&"boolean"===typeof a.onLine&&(Lf()||"chrome-extension:"===Ef()||"undefined"!==typeof a.connection)?a.onLine:!0},Uf=function(a,b,c,d){if(a>b)throw Error("Short delay should be less than long delay!");this.rg=a;this.Wf=b;a=c||L();d=d||Gf();this.Rf=wf(a)||"ReactNative"===d;};Uf.prototype.get=function(){return this.Rf?this.Wf:this.rg};
var Vf=function(){var a=k.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0},Wf=function(){var a=k.document,b=null;return Vf()||!a?D():(new C(function(c){b=function(){Vf()&&(a.removeEventListener("visibilitychange",b,!1),c());};a.addEventListener("visibilitychange",b,!1);})).f(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})};var Xf={};var Yf;try{var Zf={};Object.defineProperty(Zf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Zf,"abcd",{configurable:!0,enumerable:!0,value:2});Yf=2==Zf.abcd;}catch(a){Yf=!1;}
var N=function(a,b,c){Yf?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c;},$f=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&N(a,c,b[c]);},ag=function(a){var b={};$f(b,a);return b},bg=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},cg=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0},dg=function(a){var b=a;if("object"==typeof a&&null!=a){b=
"length"in a?[]:{};for(var c in a)N(b,c,dg(a[c]));}return b};var eg="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),fg=["client_id","response_type","scope","redirect_uri","state"],gg={Dg:{Ec:"locale",Yb:500,Xb:600,providerId:"facebook.com",Qd:fg},Eg:{Ec:null,Yb:500,Xb:620,providerId:"github.com",Qd:fg},Fg:{Ec:"hl",Yb:515,Xb:680,providerId:"google.com",Qd:fg},Jg:{Ec:"lang",Yb:485,Xb:705,providerId:"twitter.com",Qd:eg}},hg=function(a){for(var b in gg)if(gg[b].providerId==a)return gg[b];
return null};var O=function(a,b){this.code="auth/"+a;this.message=b||ig[a]||"";};t(O,Error);O.prototype.I=function(){return{code:this.code,message:this.message}};O.prototype.toJSON=function(){return this.I()};
var jg=function(a){var b=a&&a.code;return b?new O(b.substring(5),a.message):null},ig={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
"code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
"dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
"invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.",
"invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.",
"invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
"invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.",
"invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
"missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.",
"missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.",
"no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.",
"popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The SMS quota for this project has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.",
"too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.",
"user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};var kg=function(a,b,c,d,e){this.ma=a;this.W=b||null;this.Db=c||null;this.Ud=d||null;this.ba=e||null;if(this.Db||this.ba){if(this.Db&&this.ba)throw new O("invalid-auth-event");if(this.Db&&!this.Ud)throw new O("invalid-auth-event");}else throw new O("invalid-auth-event");};kg.prototype.uc=function(){return this.Ud};kg.prototype.getError=function(){return this.ba};kg.prototype.I=function(){return{type:this.ma,eventId:this.W,urlResponse:this.Db,sessionId:this.Ud,error:this.ba&&this.ba.I()}};
var lg=function(a){a=a||{};return a.type?new kg(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&jg(a.error)):null};var mg=function(a){var b="unauthorized-domain",c=void 0,d=gf(a);a=d.pa;d=d.qa;"chrome-extension"==d?c=oa("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=oa("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b=
"operation-not-supported-in-this-environment";O.call(this,b,c);};t(mg,O);var ng=function(a){this.Vf=a.sub;na();this.Lb=a.email||null;this.eg=a.provider_id||null;this.jf=!!a.is_anonymous||"anonymous"==this.eg;};ng.prototype.getEmail=function(){return this.Lb};ng.prototype.isAnonymous=function(){return this.jf};var og=function(a,b){return a.then(function(a){if(a.idToken){a:{var c=a.idToken.split(".");if(3==c.length){c=c[1];for(var e=(4-c.length%4)%4,f=0;f<e;f++)c+=".";try{var g=JSON.parse(Ib(c));if(g.sub&&g.iss&&g.aud&&g.exp){var l=new ng(g);break a}}catch(n){}}l=null;}if(!l||b!=l.Vf)throw new O("user-mismatch");return a}throw new O("user-mismatch");}).f(function(a){throw a&&a.code&&"auth/user-not-found"==a.code?new O("user-mismatch"):a;})},pg=function(a,b){if(b.idToken||b.accessToken)b.idToken&&N(this,"idToken",
b.idToken),b.accessToken&&N(this,"accessToken",b.accessToken);else if(b.oauthToken&&b.oauthTokenSecret)N(this,"accessToken",b.oauthToken),N(this,"secret",b.oauthTokenSecret);else throw new O("internal-error","failed to construct a credential");N(this,"providerId",a);};pg.prototype.Nb=function(a){return qg(a,rg(this))};pg.prototype.Gc=function(a,b){var c=rg(this);c.idToken=b;return sg(a,c)};pg.prototype.Dd=function(a,b){var c=rg(this);return og(tg(a,c),b)};
var rg=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;return{postBody:mf(b).toString(),requestUri:"http://localhost"}};pg.prototype.I=function(){var a={providerId:this.providerId};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
var ug=function(a,b){this.hg=b||[];$f(this,{providerId:a,isOAuthProvider:!0});this.me={};this.Bd=(hg(a)||{}).Ec||null;this.md=null;};ug.prototype.setCustomParameters=function(a){this.me=lb(a);return this};var P=function(a){ug.call(this,a,fg);this.Rd=[];};t(P,ug);P.prototype.addScope=function(a){Wa(this.Rd,a)||this.Rd.push(a);return this};P.prototype.te=function(){return ab(this.Rd)};
P.prototype.credential=function(a,b){if(!a&&!b)throw new O("argument-error","credential failed: must provide the ID token and/or the access token.");return new pg(this.providerId,{idToken:a||null,accessToken:b||null})};var vg=function(){P.call(this,"facebook.com");};t(vg,P);N(vg,"PROVIDER_ID","facebook.com");
var wg=function(a){if(!a)throw new O("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new vg).credential(null,b)},xg=function(){P.call(this,"github.com");};t(xg,P);N(xg,"PROVIDER_ID","github.com");var yg=function(a){if(!a)throw new O("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new xg).credential(null,b)},zg=function(){P.call(this,"google.com");this.addScope("profile");};
t(zg,P);N(zg,"PROVIDER_ID","google.com");var Ag=function(a,b){var c=a;q(a)&&(c=a.idToken,b=a.accessToken);return(new zg).credential(c,b)},Bg=function(){ug.call(this,"twitter.com",eg);};t(Bg,ug);N(Bg,"PROVIDER_ID","twitter.com");
var Cg=function(a,b){var c=a;q(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new O("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new pg("twitter.com",c)},Dg=function(a,b){this.Lb=a;this.Id=b;N(this,"providerId","password");};Dg.prototype.Nb=function(a){return Q(a,Eg,{email:this.Lb,password:this.Id})};Dg.prototype.Gc=function(a,b){return Q(a,Fg,{idToken:b,email:this.Lb,password:this.Id})};
Dg.prototype.Dd=function(a,b){return og(this.Nb(a),b)};Dg.prototype.I=function(){return{email:this.Lb,password:this.Id}};var Gg=function(){$f(this,{providerId:"password",isOAuthProvider:!1});};$f(Gg,{PROVIDER_ID:"password"});var Hg=function(a){if(!(a.verificationId&&a.$c||a.hc&&a.phoneNumber))throw new O("internal-error");this.R=a;N(this,"providerId","phone");};Hg.prototype.Nb=function(a){return a.verifyPhoneNumber(Ig(this))};Hg.prototype.Gc=function(a,b){var c=Ig(this);c.idToken=b;return Q(a,Jg,c)};
Hg.prototype.Dd=function(a,b){var c=Ig(this);c.operation="REAUTH";a=Q(a,Kg,c);return og(a,b)};Hg.prototype.I=function(){var a={providerId:"phone"};this.R.verificationId&&(a.verificationId=this.R.verificationId);this.R.$c&&(a.verificationCode=this.R.$c);this.R.hc&&(a.temporaryProof=this.R.hc);this.R.phoneNumber&&(a.phoneNumber=this.R.phoneNumber);return a};
var Ig=function(a){return a.R.hc&&a.R.phoneNumber?{temporaryProof:a.R.hc,phoneNumber:a.R.phoneNumber}:{sessionInfo:a.R.verificationId,code:a.R.$c}},Lg=function(a){try{this.mf=a||firebase$1.auth();}catch(b){throw new O("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}$f(this,{providerId:"phone",isOAuthProvider:!1});};
Lg.prototype.verifyPhoneNumber=function(a,b){var c=this.mf.g;return D(b.verify()).then(function(d){if(!m(d))throw new O("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":return Q(c,Mg,{phoneNumber:a,recaptchaToken:d});default:throw new O("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};
var Ng=function(a,b){if(!a)throw new O("missing-verification-id");if(!b)throw new O("missing-verification-code");return new Hg({verificationId:a,$c:b})};$f(Lg,{PROVIDER_ID:"phone"});
var Og=function(a){if(a.temporaryProof&&a.phoneNumber)return new Hg({hc:a.temporaryProof,phoneNumber:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;try{switch(b){case "google.com":return Ag(a,c);case "facebook.com":return wg(c);case "github.com":return yg(c);case "twitter.com":return Cg(c,d);default:return(new P(b)).credential(a,c)}}catch(e){return null}},Pg=function(a){if(!a.isOAuthProvider)throw new O("invalid-oauth-provider");
};var Qg=function(a,b,c){O.call(this,a,c);a=b||{};a.email&&N(this,"email",a.email);a.phoneNumber&&N(this,"phoneNumber",a.phoneNumber);a.credential&&N(this,"credential",a.credential);};t(Qg,O);Qg.prototype.I=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);var b=this.credential&&this.credential.I();b&&nb(a,b);return a};Qg.prototype.toJSON=function(){return this.I()};
var Rg=function(a){if(a.code){var b=a.code||"";0==b.indexOf("auth/")&&(b=b.substring(5));var c={credential:Og(a)};if(a.email)c.email=a.email;else if(a.phoneNumber)c.phoneNumber=a.phoneNumber;else return new O(b,a.message||void 0);return new Qg(b,c,a.message)}return null};var Sg=function(a){this.Cg=a;};t(Sg,Kc);Sg.prototype.rc=function(){return new this.Cg};Sg.prototype.zd=function(){return{}};
var R=function(a,b,c){var d="Node"==Gf();d=k.XMLHttpRequest||d&&firebase$1.INTERNAL.node&&firebase$1.INTERNAL.node.XMLHttpRequest;if(!d)throw new O("internal-error","The XMLHttpRequest compatibility library was not found.");this.o=a;a=b||{};this.ng=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.og=a.secureTokenTimeout||Tg;this.Pe=lb(a.secureTokenHeaders||Ug);this.xf=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.yf=a.firebaseTimeout||
Vg;this.sc=lb(a.firebaseHeaders||Wg);c&&(this.sc["X-Client-Version"]=c,this.Pe["X-Client-Version"]=c);this.pf=new Pc;this.Bg=new Sg(d);},Xg,Tg=new Uf(3E4,6E4),Ug={"Content-Type":"application/x-www-form-urlencoded"},Vg=new Uf(3E4,6E4),Wg={"Content-Type":"application/json"},Yg=function(a,b){b?a.sc["X-Firebase-Locale"]=b:delete a.sc["X-Firebase-Locale"];},$g=function(a,b,c,d,e,f,g){Tf()?(vf()?a=r(a.qg,a):(Xg||(Xg=new C(function(a,b){Zg(a,b);})),a=r(a.pg,a)),a(b,c,d,e,f,g)):c&&c(null);};
R.prototype.qg=function(a,b,c,d,e,f){var g="Node"==Gf(),l=Hf()?g?new I(this.Bg):new I:new I(this.pf);if(f){l.Cb=Math.max(0,f);var n=setTimeout(function(){l.dispatchEvent("timeout");},f);}l.listen("complete",function(){n&&clearTimeout(n);var a=null;try{a=JSON.parse(Re(this))||null;}catch(wb){a=null;}b&&b(a);});rc(l,"ready",function(){n&&clearTimeout(n);this.La||(this.La=!0,this.kb());});rc(l,"timeout",function(){n&&clearTimeout(n);this.La||(this.La=!0,this.kb());b&&b(null);});l.send(a,c,d,e);};
var ah=Ia("https://apis.google.com/js/client.js?onload=%{onload}"),bh="__fcb"+Math.floor(1E6*Math.random()).toString(),Zg=function(a,b){if(((window.gapi||{}).client||{}).request)a();else{k[bh]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"));};var c=Na(ah,{onload:bh});Wd(de(c),function(){b(Error("CORS_UNSUPPORTED"));});}};
R.prototype.pg=function(a,b,c,d,e){var f=this;Xg.then(function(){window.gapi.client.setApiKey(f.o);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a);}});}).f(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}});});};
var dh=function(a,b){return new C(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?$g(a,a.ng+"?key="+encodeURIComponent(a.o),function(a){a?a.error?d(ch(a)):a.access_token&&a.refresh_token?c(a):d(new O("internal-error")):d(new O("network-request-failed"));},"POST",mf(b).toString(),a.Pe,a.og.get()):d(new O("internal-error"));})},eh=function(a,b,c,d,e,f){var g=gf(a.xf+b);K(g,"key",a.o);f&&K(g,"cb",na().toString());var l="GET"==c;if(l)for(var n in d)d.hasOwnProperty(n)&&
K(g,n,d[n]);return new C(function(b,f){$g(a,g.toString(),function(a){a?a.error?f(ch(a,e||{})):b(a):f(new O("network-request-failed"));},c,l?void 0:Gc(Pf(d)),a.sc,a.yf.get());})},fh=function(a){if(!xc.test(a.email))throw new O("invalid-email");},gh=function(a){"email"in a&&fh(a);},ih=function(a,b){return Q(a,hh,{identifier:b,continueUri:Lf()?rf():"http://localhost"}).then(function(a){return a.allProviders||[]})},kh=function(a){return Q(a,jh,{}).then(function(a){return a.authorizedDomains||[]})},lh=function(a){if(!a.idToken)throw new O("internal-error");
},mh=function(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new O("internal-error");}else{if(!a.sessionInfo)throw new O("missing-verification-id");if(!a.code)throw new O("missing-verification-code");}};R.prototype.signInAnonymously=function(){return Q(this,nh,{})};R.prototype.updateEmail=function(a,b){return Q(this,oh,{idToken:a,email:b})};R.prototype.updatePassword=function(a,b){return Q(this,Fg,{idToken:a,password:b})};var ph={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};
R.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];fb(ph,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e);});d.length&&(c.deleteAttribute=d);return Q(this,oh,c)};R.prototype.sendPasswordResetEmail=function(a,b){a={requestType:"PASSWORD_RESET",email:a};nb(a,b);return Q(this,qh,a)};R.prototype.sendEmailVerification=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};nb(a,b);return Q(this,rh,a)};R.prototype.verifyPhoneNumber=function(a){return Q(this,sh,a)};
var uh=function(a,b,c){return Q(a,th,{idToken:b,deleteProvider:c})},vh=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new O("internal-error");},wh=function(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=Rg(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=Rg(a)):"EMAIL_EXISTS"==a.errorMessage&&(a.code="email-already-in-use",b=Rg(a));if(b)throw b;if(!a.idToken)throw new O("internal-error");},qg=function(a,
b){b.returnIdpCredential=!0;return Q(a,xh,b)},sg=function(a,b){b.returnIdpCredential=!0;return Q(a,yh,b)},tg=function(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return Q(a,zh,b)},Ah=function(a){if(!a.oobCode)throw new O("invalid-action-code");};R.prototype.confirmPasswordReset=function(a,b){return Q(this,Bh,{oobCode:a,newPassword:b})};R.prototype.checkActionCode=function(a){return Q(this,Ch,{oobCode:a})};R.prototype.applyActionCode=function(a){return Q(this,Dh,{oobCode:a})};
var Dh={endpoint:"setAccountInfo",F:Ah,ab:"email"},Ch={endpoint:"resetPassword",F:Ah,$:function(a){if(!a.email||!a.requestType)throw new O("internal-error");}},Eh={endpoint:"signupNewUser",F:function(a){fh(a);if(!a.password)throw new O("weak-password");},$:lh,Aa:!0},hh={endpoint:"createAuthUri"},Fh={endpoint:"deleteAccount",Za:["idToken"]},th={endpoint:"setAccountInfo",Za:["idToken","deleteProvider"],F:function(a){if(!ia(a.deleteProvider))throw new O("internal-error");}},Gh={endpoint:"getAccountInfo"},
rh={endpoint:"getOobConfirmationCode",Za:["idToken","requestType"],F:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new O("internal-error");},ab:"email"},qh={endpoint:"getOobConfirmationCode",Za:["requestType"],F:function(a){if("PASSWORD_RESET"!=a.requestType)throw new O("internal-error");fh(a);},ab:"email"},jh={ee:!0,endpoint:"getProjectConfig",ye:"GET"},Hh={ee:!0,endpoint:"getRecaptchaParam",ye:"GET",$:function(a){if(!a.recaptchaSiteKey)throw new O("internal-error");}},Bh={endpoint:"resetPassword",
F:Ah,ab:"email"},Mg={endpoint:"sendVerificationCode",Za:["phoneNumber","recaptchaToken"],ab:"sessionInfo"},oh={endpoint:"setAccountInfo",Za:["idToken"],F:gh,Aa:!0},Fg={endpoint:"setAccountInfo",Za:["idToken"],F:function(a){gh(a);if(!a.password)throw new O("weak-password");},$:lh,Aa:!0},nh={endpoint:"signupNewUser",$:lh,Aa:!0},xh={endpoint:"verifyAssertion",F:vh,$:wh,Aa:!0},zh={endpoint:"verifyAssertion",F:vh,$:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new O("user-not-found");
if(!a.idToken)throw new O("internal-error");},Aa:!0},yh={endpoint:"verifyAssertion",F:function(a){vh(a);if(!a.idToken)throw new O("internal-error");},$:wh,Aa:!0},Ih={endpoint:"verifyCustomToken",F:function(a){if(!a.token)throw new O("invalid-custom-token");},$:lh,Aa:!0},Eg={endpoint:"verifyPassword",F:function(a){fh(a);if(!a.password)throw new O("wrong-password");},$:lh,Aa:!0},sh={endpoint:"verifyPhoneNumber",F:mh,$:lh},Jg={endpoint:"verifyPhoneNumber",F:function(a){if(!a.idToken)throw new O("internal-error");
mh(a);},$:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",Rg(a);lh(a);}},Kg={sf:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",F:mh,$:lh},Q=function(a,b,c){if(!cg(c,b.Za))return E(new O("internal-error"));var d=b.ye||"POST",e;return D(c).then(b.F).then(function(){b.Aa&&(c.returnSecureToken=!0);return eh(a,b.endpoint,d,c,b.sf,b.ee||!1)}).then(function(a){return e=a}).then(b.$).then(function(){if(!b.ab)return e;if(!(b.ab in e))throw new O("internal-error");return e[b.ab]})},
ch=function(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new O(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",
INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",
INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",
UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri"};nb(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new O(d[e],b);!b&&a&&(b=Of(a));return new O("internal-error",b)};var Jh=function(a){this.D=a;};Jh.prototype.value=function(){return this.D};Jh.prototype.Re=function(a){this.D.style=a;return this};Jh.prototype.getStyle=function(){return this.D.style};var Kh=function(a){this.D=a||{};};h=Kh.prototype;h.value=function(){return this.D};h.getUrl=function(){return this.D.url};h.Re=function(a){this.D.style=a;return this};h.getStyle=function(){return this.D.style};h.getId=function(){return this.D.id};h.getContext=function(){return this.D.context};var Mh=function(a){this.yg=a;this.zc=null;this.Fd=Lh(this);},Nh=function(a){var b=new Kh;b.D.where=document.body;b.D.url=a.yg;b.D.messageHandlersFilter=M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.D.attributes=b.D.attributes||{};(new Jh(b.D.attributes)).Re({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.D.dontclear=!0;return b},Lh=function(a){return Oh().then(function(){return new C(function(b,c){M("gapi.iframes.getContext")().open(Nh(a).value(),function(d){a.zc=d;a.zc.restyle({setHideOnLeave:!1});
var e=setTimeout(function(){c(Error("Network Error"));},Ph.get()),f=function(){clearTimeout(e);b();};d.ping(f).then(f,function(){c(Error("Network Error"));});});})})};Mh.prototype.sendMessage=function(a){var b=this;return this.Fd.then(function(){return new C(function(c){b.zc.send(a.type,a,c,M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));})})};
var Qh=function(a,b){a.Fd.then(function(){a.zc.register("authEvent",b,M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));});},Rh=Ia("https://apis.google.com/js/api.js?onload=%{onload}"),Sh=new Uf(3E4,6E4),Ph=new Uf(5E3,15E3),Th=null,Oh=function(){return Th?Th:Th=(new C(function(a,b){if(Tf()){var c=function(){Sf();M("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Sf();b(Error("Network Error"));},timeout:Sh.get()});};if(M("gapi.iframes.Iframe"))a();else if(M("gapi.load"))c();else{var d="__iframefcb"+
Math.floor(1E6*Math.random()).toString();k[d]=function(){M("gapi.load")?c():b(Error("Network Error"));};d=Na(Rh,{onload:d});D(de(d)).f(function(){b(Error("Network Error"));});}}else b(Error("Network Error"));})).f(function(a){Th=null;throw a;})};var Uh=function(a,b,c){this.C=a;this.o=b;this.u=c;this.eb=null;this.bb=hf(this.C,"/__/auth/iframe");K(this.bb,"apiKey",this.o);K(this.bb,"appName",this.u);this.V=null;};Uh.prototype.Xd=function(a){this.eb=a;return this};Uh.prototype.Vd=function(a){this.V=a;return this};Uh.prototype.toString=function(){this.eb?K(this.bb,"v",this.eb):this.bb.removeParameter("v");this.V?K(this.bb,"eid",this.V):this.bb.removeParameter("eid");return this.bb.toString()};
var Vh=function(a,b,c,d,e){this.C=a;this.o=b;this.u=c;this.lf=d;this.eb=this.W=this.Pd=null;this.vb=e;this.V=null;};Vh.prototype.Xd=function(a){this.eb=a;return this};Vh.prototype.Vd=function(a){this.V=a;return this};
Vh.prototype.toString=function(){var a=hf(this.C,"/__/auth/handler");K(a,"apiKey",this.o);K(a,"appName",this.u);K(a,"authType",this.lf);if(this.vb.isOAuthProvider){var b=this.vb;try{var c=firebase$1.app(this.u).auth().ia;}catch(l){c=null;}b.md=c;K(a,"providerId",this.vb.providerId);b=this.vb;c=Pf(b.me);for(var d in c)c[d]=c[d].toString();d=b.hg;c=lb(c);for(var e=0;e<d.length;e++){var f=d[e];f in c&&delete c[f];}b.Bd&&b.md&&!c[b.Bd]&&(c[b.Bd]=b.md);jb(c)||K(a,"customParameters",Of(c));}"function"===typeof this.vb.te&&
(b=this.vb.te(),b.length&&K(a,"scopes",b.join(",")));this.Pd?K(a,"redirectUrl",this.Pd):a.removeParameter("redirectUrl");this.W?K(a,"eventId",this.W):a.removeParameter("eventId");this.eb?K(a,"v",this.eb):a.removeParameter("v");if(this.mc)for(var g in this.mc)this.mc.hasOwnProperty(g)&&!ff(a,g)&&K(a,g,this.mc[g]);this.V?K(a,"eid",this.V):a.removeParameter("eid");return a.toString()};
var Wh=function(a,b,c,d,e){this.C=a;this.o=b;this.u=c;this.Ka=d||null;this.V=e||null;this.Af=this.Ka?If(this.Ka):null;d=this.Ka;var f=this.V;this.Kf=(new Uh(a,b,c)).Xd(d).Vd(f).toString();this.ta=[];this.g=new R(b,of(e),this.Af);this.Bc=this.wa=null;},Xh=function(a){var b=rf();return kh(a).then(function(a){a:{var c=gf(b),e=c.qa;c=c.pa;for(var f=0;f<a.length;f++){var g=a[f];var l=c;var n=e;0==g.indexOf("chrome-extension://")?l=gf(g).pa==l&&"chrome-extension"==n:"http"!=n&&"https"!=n?l=!1:Af.test(g)?
l=l==g:(g=g.split(".").join("\\."),l=(new RegExp("^(.+\\."+g+"|"+g+")$","i")).test(l));if(l){a=!0;break a}}a=!1;}if(!a)throw new mg(rf());})};h=Wh.prototype;h.Rb=function(){if(this.Bc)return this.Bc;var a=this;return this.Bc=Bf().then(function(){a.yc=new Mh(a.Kf);Yh(a);})};h.ec=function(a,b,c){var d=new O("popup-closed-by-user"),e=new O("web-storage-unsupported"),f=this,g=!1;return this.Qa().then(function(){Zh(f).then(function(c){c||(a&&xf(a),b(e),g=!0);});}).f(function(){}).then(function(){if(!g)return zf(a)}).then(function(){if(!g)return Be(c).then(function(){b(d);})})};
h.Se=function(){var a=L();return!Nf(a)&&!Rf(a)};h.we=function(){return!1};
h.Zb=function(a,b,c,d,e,f,g){if(!a)return E(new O("popup-blocked"));if(g&&!Nf())return this.Qa().f(function(b){xf(a);e(b);}),d(),D();this.wa||(this.wa=Xh(this.g));var l=this;return this.wa.then(function(){var b=l.Qa().f(function(b){xf(a);e(b);throw b;});d();return b}).then(function(){Pg(c);if(!g){var d=$h(l.C,l.o,l.u,b,c,null,f,l.Ka,void 0,l.V);sf(d,a);}}).f(function(a){"auth/network-request-failed"==a.code&&(l.wa=null);throw a;})};
h.$b=function(a,b,c){this.wa||(this.wa=Xh(this.g));var d=this;return this.wa.then(function(){Pg(b);var e=$h(d.C,d.o,d.u,a,b,rf(),c,d.Ka,void 0,d.V);sf(e);}).f(function(a){"auth/network-request-failed"==a.code&&(d.wa=null);throw a;})};h.Qa=function(){var a=this;return this.Rb().then(function(){return a.yc.Fd}).f(function(){a.wa=null;throw new O("network-request-failed");})};h.We=function(){return!0};
var $h=function(a,b,c,d,e,f,g,l,n,F){a=new Vh(a,b,c,d,e);a.Pd=f;a.W=g;f=a.Xd(l);f.mc=lb(n||null);return f.Vd(F).toString()},Yh=function(a){if(!a.yc)throw Error("IfcHandler must be initialized!");Qh(a.yc,function(b){var c={};if(b&&b.authEvent){var d=!1;b=lg(b.authEvent);for(c=0;c<a.ta.length;c++)d=a.ta[c](b)||d;c={};c.status=d?"ACK":"ERROR";return D(c)}c.status="ERROR";return D(c)});},Zh=function(a){var b={type:"webStorageSupport"};return a.Rb().then(function(){return a.yc.sendMessage(b)}).then(function(a){if(a&&
a.length&&"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})};Wh.prototype.hb=function(a){this.ta.push(a);};Wh.prototype.cc=function(a){Za(this.ta,function(b){return b==a});};var ai=function(a,b,c,d,e,f){N(this,"type","recaptcha");this.ad=this.Hb=null;this.Jb=!1;this.ke=b;this.Ea=c||{theme:"light",type:"image"};this.K=[];if(this.Ea.sitekey)throw new O("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.Cc="invisible"===this.Ea.size;if(!ld(b)||!this.Cc&&ld(b).hasChildNodes())throw new O("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.g=new R(a,
f||null,e||null);this.Df=d||function(){return null};var g=this;this.Wc=[];var l=this.Ea.callback;this.Ea.callback=function(a){g.Kb(a);if("function"===typeof l)l(a);else if("string"===typeof l){var b=M(l,k);"function"===typeof b&&b(a);}};var n=this.Ea["expired-callback"];this.Ea["expired-callback"]=function(){g.Kb(null);if("function"===typeof n)n();else if("string"===typeof n){var a=M(n,k);"function"===typeof a&&a();}};};ai.prototype.Kb=function(a){for(var b=0;b<this.Wc.length;b++)try{this.Wc[b](a);}catch(c){}};
var bi=function(a,b){Za(a.Wc,function(a){return a==b});};ai.prototype.c=function(a){var b=this;this.K.push(a);Ed(a,function(){Ya(b.K,a);});return a};
ai.prototype.Sb=function(){var a=this;return this.Hb?this.Hb:this.Hb=this.c(D().then(function(){if(Lf())return Bf();throw new O("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return ci(di(),a.Df())}).then(function(){return Q(a.g,Hh,{})}).then(function(b){a.Ea.sitekey=b.recaptchaSiteKey;}).f(function(b){a.Hb=null;throw b;}))};
ai.prototype.render=function(){ei(this);var a=this;return this.c(this.Sb().then(function(){if(null===a.ad){var b=a.ke;if(!a.Cc){var c=ld(b);b=pd("DIV");c.appendChild(b);}a.ad=grecaptcha.render(b,a.Ea);}return a.ad}))};ai.prototype.verify=function(){ei(this);var a=this;return this.c(this.render().then(function(b){return new C(function(c){var d=grecaptcha.getResponse(b);if(d)c(d);else{var e=function(b){b&&(bi(a,e),c(b));};a.Wc.push(e);a.Cc&&grecaptcha.execute(a.ad);}})}))};
var ei=function(a){if(a.Jb)throw new O("internal-error","RecaptchaVerifier instance has been destroyed.");};ai.prototype.clear=function(){ei(this);this.Jb=!0;di().kd--;for(var a=0;a<this.K.length;a++)this.K[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.Cc){a=ld(this.ke);for(var b;b=a.firstChild;)a.removeChild(b);}};
var fi=Ia("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),gi=function(){this.kd=k.grecaptcha?Infinity:0;this.xe=null;this.hd="__rcb"+Math.floor(1E6*Math.random()).toString();},ci=function(a,b){return new C(function(c,d){if(Tf())if(!k.grecaptcha||b!==a.xe&&!a.kd){k[a.hd]=function(){if(k.grecaptcha){a.xe=b;var e=k.grecaptcha.render;k.grecaptcha.render=function(b,c){b=e(b,c);a.kd++;return b};c();}else d(new O("internal-error"));delete k[a.hd];};var e=Na(fi,{onload:a.hd,
hl:b||""});D(de(e)).f(function(){d(new O("internal-error","Unable to load external reCAPTCHA dependencies!"));});}else c();else d(new O("network-request-failed"));})},hi=null,di=function(){hi||(hi=new gi);return hi},ii=function(a,b,c){try{this.j=c||firebase$1.app();}catch(f){throw new O("argument-error","No firebase.app.App instance is currently initialized.");}if(this.j.options&&this.j.options.apiKey)c=this.j.options.apiKey;else throw new O("invalid-api-key");var d=this,e=firebase$1.SDK_VERSION?If(firebase$1.SDK_VERSION):
null;ai.call(this,c,a,b,function(){try{var a=d.j.auth().ia;}catch(g){a=null;}return a},e,of(pf));};t(ii,ai);var ji=function(a){this.G=a||firebase$1.INTERNAL.reactNative&&firebase$1.INTERNAL.reactNative.AsyncStorage;if(!this.G)throw new O("internal-error","The React Native compatibility library was not found.");};h=ji.prototype;h.get=function(a){return D(this.G.getItem(a)).then(function(a){return a&&Qf(a)})};h.set=function(a,b){return D(this.G.setItem(a,Of(b)))};h.remove=function(a){return D(this.G.removeItem(a))};h.ib=function(){};h.Ya=function(){};var ki=function(){this.G={};};h=ki.prototype;h.get=function(a){return D(this.G[a])};h.set=function(a,b){this.G[a]=b;return D()};h.remove=function(a){delete this.G[a];return D()};h.ib=function(){};h.Ya=function(){};var mi=function(){if(!li()){if("Node"==Gf())throw new O("internal-error","The LocalStorage compatibility library was not found.");throw new O("web-storage-unsupported");}this.G=k.localStorage||firebase$1.INTERNAL.node.localStorage;},li=function(){var a="Node"==Gf();a=k.localStorage||a&&firebase$1.INTERNAL.node&&firebase$1.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=mi.prototype;
h.get=function(a){var b=this;return D().then(function(){var c=b.G.getItem(a);return Qf(c)})};h.set=function(a,b){var c=this;return D().then(function(){var d=Of(b);null===d?c.remove(a):c.G.setItem(a,d);})};h.remove=function(a){var b=this;return D().then(function(){b.G.removeItem(a);})};h.ib=function(a){k.window&&kc(k.window,"storage",a);};h.Ya=function(a){k.window&&sc(k.window,"storage",a);};var ni=function(){this.G={};};h=ni.prototype;h.get=function(){return D(null)};h.set=function(){return D()};h.remove=function(){return D()};h.ib=function(){};h.Ya=function(){};var pi=function(){if(!oi()){if("Node"==Gf())throw new O("internal-error","The SessionStorage compatibility library was not found.");throw new O("web-storage-unsupported");}this.G=k.sessionStorage||firebase$1.INTERNAL.node.sessionStorage;},oi=function(){var a="Node"==Gf();a=k.sessionStorage||a&&firebase$1.INTERNAL.node&&firebase$1.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=pi.prototype;
h.get=function(a){var b=this;return D().then(function(){var c=b.G.getItem(a);return Qf(c)})};h.set=function(a,b){var c=this;return D().then(function(){var d=Of(b);null===d?c.remove(a):c.G.setItem(a,d);})};h.remove=function(a){var b=this;return D().then(function(){b.G.removeItem(a);})};h.ib=function(){};h.Ya=function(){};var qi=function(a,b,c,d,e,f){if(!window.indexedDB)throw new O("web-storage-unsupported");this.tf=a;this.Ed=b;this.ld=c;this.$e=d;this.fb=e;this.Y={};this.fc=[];this.Vb=0;this.Mf=f||k.indexedDB;},si,ti=function(a){return new C(function(b,c){var d=a.Mf.open(a.tf,a.fb);d.onerror=function(a){c(Error(a.target.errorCode));};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.Ed,{keyPath:a.ld});}catch(f){c(f);}};d.onsuccess=function(a){b(a.target.result);};})},ui=function(a){a.Be||(a.Be=
ti(a));return a.Be},vi=function(a,b){return b.objectStore(a.Ed)},wi=function(a,b,c){return b.transaction([a.Ed],c?"readwrite":"readonly")},xi=function(a){return new C(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b();};a.onerror=function(a){c(Error(a.target.errorCode));};})};h=qi.prototype;
h.set=function(a,b){var c=!1,d,e=this;return Ed(ui(this).then(function(b){d=b;b=vi(e,wi(e,d,!0));return xi(b.get(a))}).then(function(f){var g=vi(e,wi(e,d,!0));if(f)return f.value=b,xi(g.put(f));e.Vb++;c=!0;f={};f[e.ld]=a;f[e.$e]=b;return xi(g.add(f))}).then(function(){e.Y[a]=b;}),function(){c&&e.Vb--;})};h.get=function(a){var b=this;return ui(this).then(function(c){return xi(vi(b,wi(b,c,!1)).get(a))}).then(function(a){return a&&a.value})};
h.remove=function(a){var b=!1,c=this;return Ed(ui(this).then(function(d){b=!0;c.Vb++;return xi(vi(c,wi(c,d,!0))["delete"](a))}).then(function(){delete c.Y[a];}),function(){b&&c.Vb--;})};
h.ug=function(){var a=this;return ui(this).then(function(b){var c=vi(a,wi(a,b,!1));return c.getAll?xi(c.getAll()):new C(function(a,b){var d=[],e=c.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d);};e.onerror=function(a){b(Error(a.target.errorCode));};})}).then(function(b){var c={},d=[];if(0==a.Vb){for(d=0;d<b.length;d++)c[b[d][a.ld]]=b[d][a.$e];d=tf(a.Y,c);a.Y=c;}return d})};h.ib=function(a){0==this.fc.length&&this.Zd();this.fc.push(a);};
h.Ya=function(a){Za(this.fc,function(b){return b==a});0==this.fc.length&&this.Sc();};h.Zd=function(){var a=this;this.Sc();var b=function(){a.Kd=Be(800).then(r(a.ug,a)).then(function(b){0<b.length&&x(a.fc,function(a){a(b);});}).then(b).f(function(a){"STOP_EVENT"!=a.message&&b();});return a.Kd};b();};h.Sc=function(){this.Kd&&this.Kd.cancel("STOP_EVENT");};var Bi=function(){this.oe={Browser:yi,Node:zi,ReactNative:Ai}[Gf()];},Ci,yi={B:mi,ae:pi},zi={B:mi,ae:pi},Ai={B:ji,ae:ni};var Di=function(a){this.yd(a);};
Di.prototype.yd=function(a){var b=a.url;if("undefined"===typeof b)throw new O("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new O("invalid-continue-uri");this.nf=b;this.ce=this.nc=null;this.Ce=!1;var c=a.android;if(c&&"object"===typeof c){b=c.packageName;var d=c.installApp;c=c.minimumVersion;if("string"===typeof b&&b.length){this.nc=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new O("argument-error","installApp property must be a boolean when specified.");this.Ce=
!!d;if("undefined"!==typeof c&&("string"!==typeof c||"string"===typeof c&&!c.length))throw new O("argument-error","minimumVersion property must be a non empty string when specified.");this.ce=c||null;}else{if("undefined"!==typeof b)throw new O("argument-error","packageName property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new O("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new O("argument-error","android property must be a non null object when specified.");
this.vd=null;if((b=a.iOS)&&"object"===typeof b)if(b=b.bundleId,"string"===typeof b&&b.length)this.vd=b;else{if("undefined"!==typeof b)throw new O("argument-error","bundleId property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new O("argument-error","iOS property must be a non null object when specified.");a=a.handleCodeInApp;if("undefined"!==typeof a&&"boolean"!==typeof a)throw new O("argument-error","handleCodeInApp property must be a boolean when specified.");
if((this.ie=!!a)&&!this.vd&&!this.nc)throw new O("argument-error","handleCodeInApp property can't be true when no mobile application is provided.");};var Ei=function(a){var b={};b.continueUrl=a.nf;b.canHandleCodeInApp=a.ie;if(b.androidPackageName=a.nc)b.androidMinimumVersion=a.ce,b.androidInstallApp=a.Ce;b.iOSBundleId=a.vd;for(var c in b)null===b[c]&&delete b[c];return b};var Fi=function(a,b){this.rf=b;N(this,"verificationId",a);};Fi.prototype.confirm=function(a){a=Ng(this.verificationId,a);return this.rf(a)};var Gi=function(a,b,c,d){return(new Lg(a)).verifyPhoneNumber(b,c).then(function(a){return new Fi(a,d)})};var Hi=function(a){var b={},c=a.email,d=a.newEmail;a=a.requestType;if(!c||!a)throw Error("Invalid provider user info!");b.fromEmail=d||null;b.email=c;N(this,"operation",a);N(this,"data",dg(b));};var Ii=function(a,b,c,d,e,f){this.bg=a;this.jg=b;this.Ef=c;this.Hc=d;this.be=e;this.kg=!!f;this.sb=null;this.Ra=this.Hc;if(this.be<this.Hc)throw Error("Proactive refresh lower bound greater than upper bound!");};Ii.prototype.start=function(){this.Ra=this.Hc;Ji(this,!0);};
var Ki=function(a,b){if(b)return a.Ra=a.Hc,a.Ef();b=a.Ra;a.Ra*=2;a.Ra>a.be&&(a.Ra=a.be);return b},Ji=function(a,b){a.stop();a.sb=Be(Ki(a,b)).then(function(){return a.kg?D():Wf()}).then(function(){return a.bg()}).then(function(){Ji(a,!0);}).f(function(b){a.jg(b)&&Ji(a,!1);});};Ii.prototype.stop=function(){this.sb&&(this.sb.cancel(),this.sb=null);};var Qi=function(a){var b={};b["facebook.com"]=Li;b["google.com"]=Mi;b["github.com"]=Ni;b["twitter.com"]=Oi;var c=a&&a.providerId;return c?b[c]?new b[c](a):new Pi(a):null},Pi=function(a){var b=Qf(a.rawUserInfo||"{}");a=a.providerId;if(!a)throw Error("Invalid additional user info!");N(this,"profile",dg(b||{}));N(this,"providerId",a);},Li=function(a){Pi.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider id!");};t(Li,Pi);
var Ni=function(a){Pi.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider id!");N(this,"username",this.profile&&this.profile.login||null);};t(Ni,Pi);var Mi=function(a){Pi.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider id!");};t(Mi,Pi);var Oi=function(a){Pi.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider id!");N(this,"username",a.screenName||null);};t(Oi,Pi);var Ri={LOCAL:"local",NONE:"none",SESSION:"session"},Si=function(a){var b=new O("invalid-persistence-type"),c=new O("unsupported-persistence-type");a:{for(d in Ri)if(Ri[d]==a){var d=!0;break a}d=!1;}if(!d||"string"!==typeof a)throw b;switch(Gf()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;default:if(!Kf()&&"none"!==a)throw c;}},Ti=function(a,b,c,d){this.Ge=a;this.Td=b;this.lg=c;this.dc=d;this.X={};Ci||(Ci=new Bi);a=Ci;try{if(qf()){si||(si=new qi("firebaseLocalStorageDb",
"firebaseLocalStorage","fbase_key","value",1));var e=si;}else e=new a.oe.B;this.Le=e;}catch(f){this.Le=new ki,this.dc=!0;}try{this.Ve=new a.oe.ae;}catch(f){this.Ve=new ki;}this.Lf=new ki;this.$d=r(this.Te,this);this.Y={};},Ui,Vi=function(){Ui||(Ui=new Ti("firebase",":",!Rf(L())&&Ff()?!0:!1,Nf()));return Ui},Wi=function(a,b){switch(b){case "session":return a.Ve;case "none":return a.Lf;default:return a.Le}};h=Ti.prototype;h.ca=function(a,b){return this.Ge+this.Td+a.name+(b?this.Td+b:"")};
h.get=function(a,b){return Wi(this,a.B).get(this.ca(a,b))};h.remove=function(a,b){b=this.ca(a,b);"local"!=a.B||this.dc||(this.Y[b]=null);return Wi(this,a.B).remove(b)};h.set=function(a,b,c){var d=this.ca(a,c),e=this,f=Wi(this,a.B);return f.set(d,b).then(function(){return f.get(d)}).then(function(b){"local"!=a.B||e.dc||(e.Y[d]=b);})};h.addListener=function(a,b,c){a=this.ca(a,b);this.dc||(this.Y[a]=k.localStorage.getItem(a));jb(this.X)&&this.Zd();this.X[a]||(this.X[a]=[]);this.X[a].push(c);};
h.removeListener=function(a,b,c){a=this.ca(a,b);this.X[a]&&(Za(this.X[a],function(a){return a==c}),0==this.X[a].length&&delete this.X[a]);jb(this.X)&&this.Sc();};h.Zd=function(){Wi(this,"local").ib(this.$d);this.dc||qf()||Xi(this);};var Xi=function(a){Yi(a);a.Cd=setInterval(function(){for(var b in a.X){var c=k.localStorage.getItem(b),d=a.Y[b];c!=d&&(a.Y[b]=c,c=new Yb({type:"storage",key:b,target:window,oldValue:d,newValue:c,Jd:!0}),a.Te(c));}},1E3);},Yi=function(a){a.Cd&&(clearInterval(a.Cd),a.Cd=null);};
Ti.prototype.Sc=function(){Wi(this,"local").Ya(this.$d);Yi(this);};
Ti.prototype.Te=function(a){if(a&&a.Bf){var b=a.O.key;if(0==b.indexOf(this.Ge+this.Td)&&this.X[b]){"undefined"!==typeof a.O.Jd?Wi(this,"local").Ya(this.$d):Yi(this);if(this.lg){var c=k.localStorage.getItem(b),d=a.O.newValue;if(d!==c)null!==d?k.localStorage.setItem(b,d):k.localStorage.removeItem(b);else if(this.Y[b]===d&&"undefined"===typeof a.O.Jd)return}var e=this;c=function(){if("undefined"!==typeof a.O.Jd||e.Y[b]!==k.localStorage.getItem(b))e.Y[b]=k.localStorage.getItem(b),e.ge(b);};z&&Db&&10==
Db&&k.localStorage.getItem(b)!==a.O.newValue&&a.O.newValue!==a.O.oldValue?setTimeout(c,10):c();}}else x(a,r(this.ge,this));};Ti.prototype.ge=function(a){this.X[a]&&x(this.X[a],function(a){a();});};var Zi=function(a,b){this.i=a;this.h=b||Vi();},$i={name:"authEvent",B:"local"},aj=function(a){return a.h.get($i,a.i).then(function(a){return lg(a)})};Zi.prototype.hb=function(a){this.h.addListener($i,this.i,a);};Zi.prototype.cc=function(a){this.h.removeListener($i,this.i,a);};var bj=function(a){this.h=a||Vi();},cj={name:"sessionId",B:"session"};bj.prototype.uc=function(a){return this.h.get(cj,a)};var dj=function(a,b,c,d,e,f,g){this.C=a;this.o=b;this.u=c;this.Ka=d||null;this.V=g||null;this.Ue=b+":"+c;this.mg=new bj;this.se=new Zi(this.Ue);this.xd=null;this.ta=[];this.Qf=e||500;this.fg=f||2E3;this.Qb=this.Kc=null;},ej=function(a){return new O("invalid-cordova-configuration",a)};
dj.prototype.Qa=function(){return this.Sb?this.Sb:this.Sb=Df().then(function(){if("function"!==typeof M("universalLinks.subscribe",k))throw ej("cordova-universal-links-plugin is not installed");if("undefined"===typeof M("BuildInfo.packageName",k))throw ej("cordova-plugin-buildinfo is not installed");if("function"!==typeof M("cordova.plugins.browsertab.openUrl",k))throw ej("cordova-plugin-browsertab is not installed");if("function"!==typeof M("cordova.InAppBrowser.open",k))throw ej("cordova-plugin-inappbrowser is not installed");
},function(){throw new O("cordova-not-ready");})};var fj=function(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")},gj=function(a){var b=new Tb;b.update(a);return bb(b.digest())};h=dj.prototype;h.ec=function(a,b){b(new O("operation-not-supported-in-this-environment"));return D()};h.Zb=function(){return E(new O("operation-not-supported-in-this-environment"))};h.We=function(){return!1};h.Se=function(){return!0};
h.we=function(){return!0};
h.$b=function(a,b,c){if(this.Kc)return E(new O("redirect-operation-pending"));var d=this,e=k.document,f=null,g=null,l=null,n=null;return this.Kc=Ed(D().then(function(){Pg(b);return hj(d)}).then(function(){return ij(d,a,b,c)}).then(function(){return(new C(function(a,b){g=function(){var b=M("cordova.plugins.browsertab.close",k);a();"function"===typeof b&&b();d.Qb&&"function"===typeof d.Qb.close&&(d.Qb.close(),d.Qb=null);return!1};d.hb(g);l=function(){f||(f=Be(d.fg).then(function(){b(new O("redirect-cancelled-by-user"));}));};n=
function(){Vf()&&l();};e.addEventListener("resume",l,!1);L().toLowerCase().match(/android/)||e.addEventListener("visibilitychange",n,!1);})).f(function(a){return jj(d).then(function(){throw a;})})}),function(){l&&e.removeEventListener("resume",l,!1);n&&e.removeEventListener("visibilitychange",n,!1);f&&f.cancel();g&&d.cc(g);d.Kc=null;})};
var ij=function(a,b,c,d){var e=fj(),f=new kg(b,d,null,e,new O("no-auth-event")),g=M("BuildInfo.packageName",k);if("string"!==typeof g)throw new O("invalid-cordova-configuration");var l=M("BuildInfo.displayName",k),n={};if(L().toLowerCase().match(/iphone|ipad|ipod/))n.ibi=g;else if(L().toLowerCase().match(/android/))n.apn=g;else return E(new O("operation-not-supported-in-this-environment"));l&&(n.appDisplayName=l);e=gj(e);n.sessionId=e;var F=$h(a.C,a.o,a.u,b,c,null,d,a.Ka,n,a.V);return a.Qa().then(function(){var b=
a.Ue;return a.mg.h.set($i,f.I(),b)}).then(function(){var b=M("cordova.plugins.browsertab.isAvailable",k);if("function"!==typeof b)throw new O("invalid-cordova-configuration");var c=null;b(function(b){if(b){c=M("cordova.plugins.browsertab.openUrl",k);if("function"!==typeof c)throw new O("invalid-cordova-configuration");c(F);}else{c=M("cordova.InAppBrowser.open",k);if("function"!==typeof c)throw new O("invalid-cordova-configuration");b=c;var d=L();d=!(!d.match(/(iPad|iPhone|iPod).*OS 7_\d/i)&&!d.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
a.Qb=b(F,d?"_blank":"_system","location=yes");}});})};dj.prototype.Kb=function(a){for(var b=0;b<this.ta.length;b++)try{this.ta[b](a);}catch(c){}};
var hj=function(a){a.xd||(a.xd=a.Qa().then(function(){return new C(function(b){var c=function(d){b(d);a.cc(c);return!1};a.hb(c);kj(a);})}));return a.xd},jj=function(a){var b=null;return aj(a.se).then(function(c){b=c;c=a.se;return c.h.remove($i,c.i)}).then(function(){return b})},kj=function(a){var b=M("universalLinks.subscribe",k);if("function"!==typeof b)throw new O("invalid-cordova-configuration");var c=new kg("unknown",null,null,null,new O("no-auth-event")),d=!1,e=Be(a.Qf).then(function(){return jj(a).then(function(){d||
a.Kb(c);})}),f=function(b){d=!0;e&&e.cancel();jj(a).then(function(d){var e=c;if(d&&b&&b.url){e=null;var f=b.url;var g=gf(f),l=ff(g,"link"),n=ff(gf(l),"link");g=ff(g,"deep_link_id");f=ff(gf(g),"link")||g||n||l||f;-1!=f.indexOf("/__/auth/callback")&&(e=gf(f),e=Qf(ff(e,"firebaseError")||null),e=(e="object"===typeof e?jg(e):null)?new kg(d.ma,d.W,null,null,e):new kg(d.ma,d.W,f,d.uc()));e=e||c;}a.Kb(e);});},g=k.handleOpenURL;k.handleOpenURL=function(a){0==a.toLowerCase().indexOf(M("BuildInfo.packageName",k).toLowerCase()+
"://")&&f({url:a});if("function"===typeof g)try{g(a);}catch(n){console.error(n);}};b(null,f);};dj.prototype.hb=function(a){this.ta.push(a);hj(this).f(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new kg("unknown",null,null,null,new O("no-auth-event")),a(b));});};dj.prototype.cc=function(a){Za(this.ta,function(b){return b==a});};var lj=function(a){this.i=a;this.h=Vi();},mj={name:"pendingRedirect",B:"session"},nj=function(a){return a.h.set(mj,"pending",a.i)},oj=function(a){return a.h.remove(mj,a.i)},pj=function(a){return a.h.get(mj,a.i).then(function(a){return"pending"==a})};var tj=function(a,b,c){this.C=a;this.o=b;this.u=c;this.gc=[];this.qb=!1;this.ed=r(this.td,this);this.Wa=new qj(this);this.Ld=new rj(this);this.Wb=new lj(this.o+":"+this.u);this.Ha={};this.Ha.unknown=this.Wa;this.Ha.signInViaRedirect=this.Wa;this.Ha.linkViaRedirect=this.Wa;this.Ha.reauthViaRedirect=this.Wa;this.Ha.signInViaPopup=this.Ld;this.Ha.linkViaPopup=this.Ld;this.Ha.reauthViaPopup=this.Ld;this.Z=sj(this.C,this.o,this.u,pf);},sj=function(a,b,c,d){var e=firebase$1.SDK_VERSION||null;return Cf()?new dj(a,
b,c,e,void 0,void 0,d):new Wh(a,b,c,e,d)};tj.prototype.reset=function(){this.qb=!1;this.Z.cc(this.ed);this.Z=sj(this.C,this.o,this.u);};tj.prototype.Rb=function(){var a=this;this.qb||(this.qb=!0,this.Z.hb(this.ed));var b=this.Z;return this.Z.Qa().f(function(c){a.Z==b&&a.reset();throw c;})};var wj=function(a){a.Z.Se()&&a.Rb().f(function(b){var c=new kg("unknown",null,null,null,new O("operation-not-supported-in-this-environment"));uj(b)&&a.td(c);});a.Z.we()||vj(a.Wa);};
tj.prototype.subscribe=function(a){Wa(this.gc,a)||this.gc.push(a);if(!this.qb){var b=this;pj(this.Wb).then(function(a){a?oj(b.Wb).then(function(){b.Rb().f(function(a){var c=new kg("unknown",null,null,null,new O("operation-not-supported-in-this-environment"));uj(a)&&b.td(c);});}):wj(b);}).f(function(){wj(b);});}};tj.prototype.unsubscribe=function(a){Za(this.gc,function(b){return b==a});};
tj.prototype.td=function(a){if(!a)throw new O("invalid-auth-event");for(var b=!1,c=0;c<this.gc.length;c++){var d=this.gc[c];if(d.he(a.ma,a.W)){(b=this.Ha[a.ma])&&b.Me(a,d);b=!0;break}}vj(this.Wa);return b};var xj=new Uf(2E3,1E4),yj=new Uf(3E4,6E4);tj.prototype.getRedirectResult=function(){return this.Wa.getRedirectResult()};tj.prototype.Zb=function(a,b,c,d,e){var f=this;return this.Z.Zb(a,b,c,function(){f.qb||(f.qb=!0,f.Z.hb(f.ed));},function(){f.reset();},d,e)};
var uj=function(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1};tj.prototype.$b=function(a,b,c){var d=this,e;return nj(this.Wb).then(function(){return d.Z.$b(a,b,c).f(function(a){if(uj(a))throw new O("operation-not-supported-in-this-environment");e=a;return oj(d.Wb).then(function(){throw e;})}).then(function(){return d.Z.We()?new C(function(){}):oj(d.Wb).then(function(){return d.getRedirectResult()}).then(function(){}).f(function(){})})})};
tj.prototype.ec=function(a,b,c,d){return this.Z.ec(c,function(c){a.$a(b,null,c,d);},xj.get())};var zj={},Aj=function(a,b,c){var d=b+":"+c;zj[d]||(zj[d]=new tj(a,b,c));return zj[d]},qj=function(a){this.h=a;this.zb=null;this.bc=[];this.ac=[];this.wb=null;this.Od=!1;};qj.prototype.reset=function(){this.zb=null;this.wb&&(this.wb.cancel(),this.wb=null);};
qj.prototype.Me=function(a,b){if(!a)return E(new O("invalid-auth-event"));this.reset();this.Od=!0;var c=a.ma,d=a.W,e=a.getError()&&"auth/web-storage-unsupported"==a.getError().code,f=a.getError()&&"auth/operation-not-supported-in-this-environment"==a.getError().code;"unknown"!=c||e||f?a=a.ba?this.Md(a,b):b.Mb(c,d)?this.Nd(a,b):E(new O("invalid-auth-event")):(Bj(this,!1,null,null),a=D());return a};var vj=function(a){a.Od||(a.Od=!0,Bj(a,!1,null,null));};
qj.prototype.Md=function(a){Bj(this,!0,null,a.getError());return D()};qj.prototype.Nd=function(a,b){var c=this;b=b.Mb(a.ma,a.W);var d=a.Db,e=a.uc(),f=!!a.ma.match(/Redirect$/);return b(d,e).then(function(a){Bj(c,f,a,null);}).f(function(a){Bj(c,f,null,a);})};
var Cj=function(a,b){a.zb=function(){return E(b)};if(a.ac.length)for(var c=0;c<a.ac.length;c++)a.ac[c](b);},Dj=function(a,b){a.zb=function(){return D(b)};if(a.bc.length)for(var c=0;c<a.bc.length;c++)a.bc[c](b);},Bj=function(a,b,c,d){b?d?Cj(a,d):Dj(a,c):Dj(a,{user:null});a.bc=[];a.ac=[];};qj.prototype.getRedirectResult=function(){var a=this;return new C(function(b,c){a.zb?a.zb().then(b,c):(a.bc.push(b),a.ac.push(c),Ej(a));})};
var Ej=function(a){var b=new O("timeout");a.wb&&a.wb.cancel();a.wb=Be(yj.get()).then(function(){a.zb||Bj(a,!0,null,b);});},rj=function(a){this.h=a;};rj.prototype.Me=function(a,b){if(!a)return E(new O("invalid-auth-event"));var c=a.ma,d=a.W;return a.ba?this.Md(a,b):b.Mb(c,d)?this.Nd(a,b):E(new O("invalid-auth-event"))};rj.prototype.Md=function(a,b){b.$a(a.ma,null,a.getError(),a.W);return D()};
rj.prototype.Nd=function(a,b){var c=a.W,d=a.ma,e=b.Mb(d,c),f=a.Db;a=a.uc();return e(f,a).then(function(a){b.$a(d,a,null,c);}).f(function(a){b.$a(d,null,a,c);})};var Fj=function(a){this.g=a;this.Ia=this.fa=null;this.Ma=0;};Fj.prototype.I=function(){return{apiKey:this.g.o,refreshToken:this.fa,accessToken:this.Ia,expirationTime:this.Ma}};
var Hj=function(a,b){var c=b.idToken,d=b.refreshToken;b=Gj(b.expiresIn);a.Ia=c;a.Ma=b;a.fa=d;},Gj=function(a){return na()+1E3*parseInt(a,10)},Ij=function(a,b){return dh(a.g,b).then(function(b){a.Ia=b.access_token;a.Ma=Gj(b.expires_in);a.fa=b.refresh_token;return{accessToken:a.Ia,expirationTime:a.Ma,refreshToken:a.fa}}).f(function(b){"auth/user-token-expired"==b.code&&(a.fa=null);throw b;})};
Fj.prototype.getToken=function(a){a=!!a;return this.Ia&&!this.fa?E(new O("user-token-expired")):a||!this.Ia||na()>this.Ma-3E4?this.fa?Ij(this,{grant_type:"refresh_token",refresh_token:this.fa}):D(null):D({accessToken:this.Ia,expirationTime:this.Ma,refreshToken:this.fa})};var Jj=function(a,b,c,d,e,f){$f(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b});},Kj=function(a,b){B.call(this,a);for(var c in b)this[c]=b[c];};t(Kj,B);
var S=function(a,b,c){this.K=[];this.o=a.apiKey;this.u=a.appName;this.C=a.authDomain||null;a=firebase$1.SDK_VERSION?If(firebase$1.SDK_VERSION):null;this.g=new R(this.o,of(pf),a);this.ra=new Fj(this.g);Lj(this,b.idToken);Hj(this.ra,b);N(this,"refreshToken",this.ra.fa);Mj(this,c||{});G.call(this);this.Lc=!1;this.C&&Mf()&&(this.v=Aj(this.C,this.o,this.u));this.Rc=[];this.sa=null;this.ub=Nj(this);this.Fb=r(this.ud,this);var d=this;this.ia=null;this.Ie=function(a){d.Bb(a.Tf);};this.Ad=null;};t(S,G);
S.prototype.Bb=function(a){this.ia=a;Yg(this.g,a);};var Oj=function(a,b){a.Ad&&sc(a.Ad,"languageCodeChanged",a.Ie);(a.Ad=b)&&kc(b,"languageCodeChanged",a.Ie);};S.prototype.ud=function(){this.ub.sb&&(this.ub.stop(),this.ub.start());};
var Pj=function(a){try{return firebase$1.app(a.u).auth()}catch(b){throw new O("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.u+"'!");}},Nj=function(a){return new Ii(function(){return a.getIdToken(!0)},function(a){return a&&"auth/network-request-failed"==a.code?!0:!1},function(){var b=a.ra.Ma-na()-3E5;return 0<b?b:0},3E4,96E4,!1)},Qj=function(a){a.Jb||a.ub.sb||(a.ub.start(),sc(a,"tokenChanged",a.Fb),kc(a,"tokenChanged",a.Fb));},Rj=function(a){sc(a,"tokenChanged",
a.Fb);a.ub.stop();},Lj=function(a,b){a.De=b;N(a,"_lat",b);},Sj=function(a,b){Za(a.Rc,function(a){return a==b});},Tj=function(a){for(var b=[],c=0;c<a.Rc.length;c++)b.push(a.Rc[c](a));return Bd(b).then(function(){return a})},Uj=function(a){a.v&&!a.Lc&&(a.Lc=!0,a.v.subscribe(a));},Mj=function(a,b){$f(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,providerData:[]});};
N(S.prototype,"providerId","firebase");var Vj=function(){},Wj=function(a){return D().then(function(){if(a.Jb)throw new O("app-deleted");})},Xj=function(a){return Sa(a.providerData,function(a){return a.providerId})},Zj=function(a,b){b&&(Yj(a,b.providerId),a.providerData.push(b));},Yj=function(a,b){Za(a.providerData,function(a){return a.providerId==b});},ak=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&N(a,b,c);};
S.prototype.copy=function(a){var b=this;b!=a&&($f(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,phoneNumber:a.phoneNumber,isAnonymous:a.isAnonymous,providerData:[]}),x(a.providerData,function(a){Zj(b,a);}),this.ra=a.ra,N(this,"refreshToken",this.ra.fa));};S.prototype.reload=function(){var a=this;return this.c(Wj(this).then(function(){return bk(a).then(function(){return Tj(a)}).then(Vj)}))};
var bk=function(a){return a.getIdToken().then(function(b){var c=a.isAnonymous;return ck(a,b).then(function(){c||ak(a,"isAnonymous",!1);return b})})};S.prototype.getIdToken=function(a){var b=this;return this.c(Wj(this).then(function(){return b.ra.getToken(a)}).then(function(a){if(!a)throw new O("internal-error");a.accessToken!=b.De&&(Lj(b,a.accessToken),b.Sa());ak(b,"refreshToken",a.refreshToken);return a.accessToken}))};
S.prototype.getToken=function(a){Xf["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."]||(Xf["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn("firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."));return this.getIdToken(a)};
var dk=function(a,b){b.idToken&&a.De!=b.idToken&&(Hj(a.ra,b),a.Sa(),Lj(a,b.idToken),ak(a,"refreshToken",a.ra.fa));};S.prototype.Sa=function(){this.dispatchEvent(new Kj("tokenChanged"));};var ck=function(a,b){return Q(a.g,Gh,{idToken:b}).then(r(a.cg,a))};
S.prototype.cg=function(a){a=a.users;if(!a||!a.length)throw new O("internal-error");a=a[0];Mj(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber});for(var b=ek(a),c=0;c<b.length;c++)Zj(this,b[c]);ak(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length));};
var ek=function(a){return(a=a.providerUserInfo)&&a.length?Sa(a,function(a){return new Jj(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl,a.phoneNumber)}):[]};S.prototype.reauthenticateAndRetrieveDataWithCredential=function(a){var b=this,c=null;return this.c(a.Dd(this.g,this.uid).then(function(a){dk(b,a);c=fk(b,a,"reauthenticate");b.sa=null;return b.reload()}).then(function(){return c}),!0)};S.prototype.reauthenticateWithCredential=function(a){return this.reauthenticateAndRetrieveDataWithCredential(a).then(function(){})};
var gk=function(a,b){return bk(a).then(function(){if(Wa(Xj(a),b))return Tj(a).then(function(){throw new O("provider-already-linked");})})};S.prototype.linkAndRetrieveDataWithCredential=function(a){var b=this,c=null;return this.c(gk(this,a.providerId).then(function(){return b.getIdToken()}).then(function(c){return a.Gc(b.g,c)}).then(function(a){c=fk(b,a,"link");return hk(b,a)}).then(function(){return c}))};S.prototype.linkWithCredential=function(a){return this.linkAndRetrieveDataWithCredential(a).then(function(a){return a.user})};
S.prototype.linkWithPhoneNumber=function(a,b){var c=this;return this.c(gk(this,"phone").then(function(){return Gi(Pj(c),a,b,r(c.linkAndRetrieveDataWithCredential,c))}))};S.prototype.reauthenticateWithPhoneNumber=function(a,b){var c=this;return this.c(D().then(function(){return Gi(Pj(c),a,b,r(c.reauthenticateAndRetrieveDataWithCredential,c))}),!0)};var fk=function(a,b,c){var d=Og(b);b=Qi(b);return ag({user:a,credential:d,additionalUserInfo:b,operationType:c})},hk=function(a,b){dk(a,b);return a.reload().then(function(){return a})};
h=S.prototype;h.updateEmail=function(a){var b=this;return this.c(this.getIdToken().then(function(c){return b.g.updateEmail(c,a)}).then(function(a){dk(b,a);return b.reload()}))};h.updatePhoneNumber=function(a){var b=this;return this.c(this.getIdToken().then(function(c){return a.Gc(b.g,c)}).then(function(a){dk(b,a);return b.reload()}))};h.updatePassword=function(a){var b=this;return this.c(this.getIdToken().then(function(c){return b.g.updatePassword(c,a)}).then(function(a){dk(b,a);return b.reload()}))};
h.updateProfile=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return Wj(this);var b=this;return this.c(this.getIdToken().then(function(c){return b.g.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){dk(b,a);ak(b,"displayName",a.displayName||null);ak(b,"photoURL",a.photoUrl||null);x(b.providerData,function(a){"password"===a.providerId&&(N(a,"displayName",b.displayName),N(a,"photoURL",b.photoURL));});return Tj(b)}).then(Vj))};
h.unlink=function(a){var b=this;return this.c(bk(this).then(function(c){return Wa(Xj(b),a)?uh(b.g,c,[a]).then(function(a){var c={};x(a.providerUserInfo||[],function(a){c[a.providerId]=!0;});x(Xj(b),function(a){c[a]||Yj(b,a);});c[Lg.PROVIDER_ID]||N(b,"phoneNumber",null);return Tj(b)}):Tj(b).then(function(){throw new O("no-such-provider");})}))};
h["delete"]=function(){var a=this;return this.c(this.getIdToken().then(function(b){return Q(a.g,Fh,{idToken:b})}).then(function(){a.dispatchEvent(new Kj("userDeleted"));})).then(function(){for(var b=0;b<a.K.length;b++)a.K[b].cancel("app-deleted");Oj(a,null);a.K=[];a.Jb=!0;Rj(a);N(a,"refreshToken",null);a.v&&a.v.unsubscribe(a);})};
h.he=function(a,b){return"linkViaPopup"==a&&(this.la||null)==b&&this.ka||"reauthViaPopup"==a&&(this.la||null)==b&&this.ka||"linkViaRedirect"==a&&(this.Ga||null)==b||"reauthViaRedirect"==a&&(this.Ga||null)==b?!0:!1};h.$a=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.la||null)||(c&&this.Ua?this.Ua(c):b&&!c&&this.ka&&this.ka(b),this.M&&(this.M.cancel(),this.M=null),delete this.ka,delete this.Ua);};
h.Mb=function(a,b){return"linkViaPopup"==a&&b==(this.la||null)?r(this.qe,this):"reauthViaPopup"==a&&b==(this.la||null)?r(this.re,this):"linkViaRedirect"==a&&(this.Ga||null)==b?r(this.qe,this):"reauthViaRedirect"==a&&(this.Ga||null)==b?r(this.re,this):null};h.tc=function(){return Jf(this.uid+":::")};h.linkWithPopup=function(a){var b=this;return ik(this,"linkViaPopup",a,function(){return gk(b,a.providerId).then(function(){return Tj(b)})},!1)};
h.reauthenticateWithPopup=function(a){return ik(this,"reauthViaPopup",a,function(){return D()},!0)};
var ik=function(a,b,c,d,e){if(!Mf())return E(new O("operation-not-supported-in-this-environment"));if(a.sa&&!e)return E(a.sa);var f=hg(c.providerId),g=a.tc(),l=null;(!Nf()||Ff())&&a.C&&c.isOAuthProvider&&(l=$h(a.C,a.o,a.u,b,c,null,g,firebase$1.SDK_VERSION||null));var n=yf(l,f&&f.Yb,f&&f.Xb);d=d().then(function(){jk(a);if(!e)return a.getIdToken().then(function(){})}).then(function(){return a.v.Zb(n,b,c,g,!!l)}).then(function(){return new C(function(c,d){a.$a(b,null,new O("cancelled-popup-request"),a.la||
null);a.ka=c;a.Ua=d;a.la=g;a.M=a.v.ec(a,b,n,g);})}).then(function(a){n&&xf(n);return a?ag(a):null}).f(function(a){n&&xf(n);throw a;});return a.c(d,e)};S.prototype.linkWithRedirect=function(a){var b=this;return kk(this,"linkViaRedirect",a,function(){return gk(b,a.providerId)},!1)};S.prototype.reauthenticateWithRedirect=function(a){return kk(this,"reauthViaRedirect",a,function(){return D()},!0)};
var kk=function(a,b,c,d,e){if(!Mf())return E(new O("operation-not-supported-in-this-environment"));if(a.sa&&!e)return E(a.sa);var f=null,g=a.tc();d=d().then(function(){jk(a);if(!e)return a.getIdToken().then(function(){})}).then(function(){a.Ga=g;return Tj(a)}).then(function(b){a.Xa&&(b=a.Xa,b=b.h.set(lk,a.I(),b.i));return b}).then(function(){return a.v.$b(b,c,g)}).f(function(b){f=b;if(a.Xa)return mk(a.Xa);throw f;}).then(function(){if(f)throw f;});return a.c(d,e)},jk=function(a){if(!a.v||!a.Lc){if(a.v&&
!a.Lc)throw new O("internal-error");throw new O("auth-domain-config-required");}};S.prototype.qe=function(a,b){var c=this;this.M&&(this.M.cancel(),this.M=null);var d=null,e=this.getIdToken().then(function(d){return sg(c.g,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=fk(c,a,"link");return hk(c,a)}).then(function(){return d});return this.c(e)};
S.prototype.re=function(a,b){var c=this;this.M&&(this.M.cancel(),this.M=null);var d=null,e=D().then(function(){return og(tg(c.g,{requestUri:a,sessionId:b}),c.uid)}).then(function(a){d=fk(c,a,"reauthenticate");dk(c,a);c.sa=null;return c.reload()}).then(function(){return d});return this.c(e,!0)};
S.prototype.sendEmailVerification=function(a){var b=this,c=null;return this.c(this.getIdToken().then(function(b){c=b;return"undefined"===typeof a||jb(a)?{}:Ei(new Di(a))}).then(function(a){return b.g.sendEmailVerification(c,a)}).then(function(a){if(b.email!=a)return b.reload()}).then(function(){}))};S.prototype.c=function(a,b){var c=this,d=nk(this,a,b);this.K.push(d);Ed(d,function(){Ya(c.K,d);});return d};
var nk=function(a,b,c){return a.sa&&!c?(b.cancel(),E(a.sa)):b.f(function(b){!b||"auth/user-disabled"!=b.code&&"auth/user-token-expired"!=b.code||(a.sa||a.dispatchEvent(new Kj("userInvalidated")),a.sa=b);throw b;})};S.prototype.toJSON=function(){return this.I()};
S.prototype.I=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.o,appName:this.u,authDomain:this.C,stsTokenManager:this.ra.I(),redirectEventId:this.Ga||null};x(this.providerData,function(b){a.providerData.push(bg(b));});return a};
var ok=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-na())/1E3;else return null;var d=new S(b,c,a);a.providerData&&x(a.providerData,function(a){a&&Zj(d,ag(a));});a.redirectEventId&&(d.Ga=a.redirectEventId);return d},
pk=function(a,b,c){var d=new S(a,b);c&&(d.Xa=c);return d.reload().then(function(){return d})};var qk=function(a){this.i=a;this.h=Vi();},lk={name:"redirectUser",B:"session"},mk=function(a){return a.h.remove(lk,a.i)},rk=function(a,b){return a.h.get(lk,a.i).then(function(a){a&&b&&(a.authDomain=b);return ok(a||{})})};var tk=function(a,b){this.i=a;this.h=b||Vi();this.N=null;this.Gd=this.yd();this.h.addListener(sk("local"),this.i,r(this.sg,this));};tk.prototype.sg=function(){var a=this,b=sk("local");uk(this,function(){return D().then(function(){return a.N&&"local"!=a.N.B?a.h.get(b,a.i):null}).then(function(c){if(c)return vk(a,"local").then(function(){a.N=b;})})});};var vk=function(a,b){var c=[],d;for(d in Ri)Ri[d]!==b&&c.push(a.h.remove(sk(Ri[d]),a.i));c.push(a.h.remove(wk,a.i));return Ad(c)};
tk.prototype.yd=function(){var a=this,b=sk("local"),c=sk("session"),d=sk("none");return this.h.get(c,this.i).then(function(e){return e?c:a.h.get(d,a.i).then(function(c){return c?d:a.h.get(b,a.i).then(function(c){return c?b:a.h.get(wk,a.i).then(function(a){return a?sk(a):b})})})}).then(function(b){a.N=b;return vk(a,b.B)}).f(function(){a.N||(a.N=b);})};var wk={name:"persistence",B:"session"},sk=function(a){return{name:"authUser",B:a}};
tk.prototype.setPersistence=function(a){var b=null,c=this;Si(a);return uk(this,function(){return a!=c.N.B?c.h.get(c.N,c.i).then(function(d){b=d;return vk(c,a)}).then(function(){c.N=sk(a);if(b)return c.h.set(c.N,b,c.i)}):D()})};
var xk=function(a){return uk(a,function(){return a.h.set(wk,a.N.B,a.i)})},yk=function(a,b){return uk(a,function(){return a.h.set(a.N,b.I(),a.i)})},zk=function(a){return uk(a,function(){return a.h.remove(a.N,a.i)})},Ak=function(a,b){return uk(a,function(){return a.h.get(a.N,a.i).then(function(a){a&&b&&(a.authDomain=b);return ok(a||{})})})},uk=function(a,b){a.Gd=a.Gd.then(b,b);return a.Gd};var T=function(a){this.Da=!1;N(this,"app",a);if(this.j().options&&this.j().options.apiKey)a=firebase$1.SDK_VERSION?If(firebase$1.SDK_VERSION):null,this.g=new R(this.j().options&&this.j().options.apiKey,of(pf),a);else throw new O("invalid-api-key");this.K=[];this.Ja=[];this.Eb=[];this.Zf=firebase$1.INTERNAL.createSubscribe(r(this.Nf,this));this.kc=void 0;this.ag=firebase$1.INTERNAL.createSubscribe(r(this.Pf,this));Bk(this,null);a=this.j().options.apiKey;var b=this.j().name;this.na=new tk(a+":"+b);a=this.j().options.apiKey;
b=this.j().name;this.xb=new qk(a+":"+b);this.oc=this.c(Ck(this));this.ya=this.c(Dk(this));this.Dc=!1;this.sd=r(this.tg,this);this.Ze=r(this.nb,this);this.Fb=r(this.ud,this);this.Xe=r(this.If,this);this.Ye=r(this.Jf,this);Ek(this);this.INTERNAL={};this.INTERNAL["delete"]=r(this["delete"],this);this.Na=0;G.call(this);Fk(this);};t(T,G);var Gk=function(a){B.call(this,"languageCodeChanged");this.Tf=a;};t(Gk,B);T.prototype.setPersistence=function(a){a=this.na.setPersistence(a);return this.c(a)};
T.prototype.Bb=function(a){this.ia===a||this.Da||(this.ia=a,Yg(this.g,this.ia),this.dispatchEvent(new Gk(this.ia)));};T.prototype.zg=function(){var a=k.navigator;this.Bb(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null);};var Fk=function(a){Object.defineProperty(a,"lc",{get:function(){return this.ia},set:function(a){this.Bb(a);},enumerable:!1});a.ia=null;};
T.prototype.toJSON=function(){return{apiKey:this.j().options.apiKey,authDomain:this.j().options.authDomain,appName:this.j().name,currentUser:U(this)&&U(this).I()}};var Hk=function(a){return a.uf||E(new O("auth-domain-config-required"))},Ek=function(a){var b=a.j().options.authDomain,c=a.j().options.apiKey;b&&Mf()&&(a.uf=a.oc.then(function(){if(!a.Da){a.v=Aj(b,c,a.j().name);a.v.subscribe(a);U(a)&&Uj(U(a));if(a.yb){Uj(a.yb);var d=a.yb;d.Bb(a.ia);Oj(d,a);a.yb=null;}return a.v}}));};h=T.prototype;
h.he=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.la==b&&!!this.ka;default:return!1}};h.$a=function(a,b,c,d){"signInViaPopup"==a&&this.la==d&&(c&&this.Ua?this.Ua(c):b&&!c&&this.ka&&this.ka(b),this.M&&(this.M.cancel(),this.M=null),delete this.ka,delete this.Ua);};h.Mb=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.la==b&&this.ka?r(this.wf,this):null};
h.wf=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.M&&(this.M.cancel(),this.M=null);var d=null,e=null,f=qg(c.g,a).then(function(a){d=Og(a);e=Qi(a);return a});a=c.oc.then(function(){return f}).then(function(a){return Ik(c,a)}).then(function(){return ag({user:U(c),credential:d,additionalUserInfo:e,operationType:"signIn"})});return this.c(a)};h.tc=function(){return Jf()};
h.signInWithPopup=function(a){if(!Mf())return E(new O("operation-not-supported-in-this-environment"));var b=this,c=hg(a.providerId),d=this.tc(),e=null;(!Nf()||Ff())&&this.j().options.authDomain&&a.isOAuthProvider&&(e=$h(this.j().options.authDomain,this.j().options.apiKey,this.j().name,"signInViaPopup",a,null,d,firebase$1.SDK_VERSION||null));var f=yf(e,c&&c.Yb,c&&c.Xb);c=Hk(this).then(function(b){return b.Zb(f,"signInViaPopup",a,d,!!e)}).then(function(){return new C(function(a,c){b.$a("signInViaPopup",
null,new O("cancelled-popup-request"),b.la);b.ka=a;b.Ua=c;b.la=d;b.M=b.v.ec(b,"signInViaPopup",f,d);})}).then(function(a){f&&xf(f);return a?ag(a):null}).f(function(a){f&&xf(f);throw a;});return this.c(c)};h.signInWithRedirect=function(a){if(!Mf())return E(new O("operation-not-supported-in-this-environment"));var b=this,c=Hk(this).then(function(){return xk(b.na)}).then(function(){return b.v.$b("signInViaRedirect",a)});return this.c(c)};
h.getRedirectResult=function(){if(!Mf())return E(new O("operation-not-supported-in-this-environment"));var a=this,b=Hk(this).then(function(){return a.v.getRedirectResult()}).then(function(a){return a?ag(a):null});return this.c(b)};
var Ik=function(a,b){var c={};c.apiKey=a.j().options.apiKey;c.authDomain=a.j().options.authDomain;c.appName=a.j().name;return a.oc.then(function(){return pk(c,b,a.xb)}).then(function(b){if(U(a)&&b.uid==U(a).uid)return U(a).copy(b),a.nb(b);Bk(a,b);Uj(b);return a.nb(b)}).then(function(){a.Sa();})},Bk=function(a,b){U(a)&&(Sj(U(a),a.Ze),sc(U(a),"tokenChanged",a.Fb),sc(U(a),"userDeleted",a.Xe),sc(U(a),"userInvalidated",a.Ye),Rj(U(a)));b&&(b.Rc.push(a.Ze),kc(b,"tokenChanged",a.Fb),kc(b,"userDeleted",a.Xe),
kc(b,"userInvalidated",a.Ye),0<a.Na&&Qj(b));N(a,"currentUser",b);b&&(b.Bb(a.ia),Oj(b,a));};T.prototype.signOut=function(){var a=this,b=this.ya.then(function(){if(!U(a))return D();Bk(a,null);return zk(a.na).then(function(){a.Sa();})});return this.c(b)};
var Jk=function(a){var b=a.j().options.authDomain;b=rk(a.xb,b).then(function(b){if(a.yb=b)b.Xa=a.xb;return mk(a.xb)});return a.c(b)},Ck=function(a){var b=a.j().options.authDomain,c=Jk(a).then(function(){return Ak(a.na,b)}).then(function(b){return b?(b.Xa=a.xb,a.yb&&(a.yb.Ga||null)==(b.Ga||null)?b:b.reload().then(function(){return yk(a.na,b).then(function(){return b})}).f(function(c){return"auth/network-request-failed"==c.code?b:zk(a.na)})):null}).then(function(b){Bk(a,b||null);});return a.c(c)},Dk=
function(a){return a.oc.then(function(){return a.getRedirectResult()}).f(function(){}).then(function(){if(!a.Da)return a.sd()}).f(function(){}).then(function(){if(!a.Da){a.Dc=!0;var b=a.na;b.h.addListener(sk("local"),b.i,a.sd);}})};h=T.prototype;
h.tg=function(){var a=this,b=this.j().options.authDomain;return Ak(this.na,b).then(function(b){if(!a.Da){var c;if(c=U(a)&&b){c=U(a).uid;var e=b.uid;c=void 0===c||null===c||""===c||void 0===e||null===e||""===e?!1:c==e;}if(c)return U(a).copy(b),U(a).getIdToken();if(U(a)||b)Bk(a,b),b&&(Uj(b),b.Xa=a.xb),a.v&&a.v.subscribe(a),a.Sa();}})};h.nb=function(a){return yk(this.na,a)};h.ud=function(){this.Sa();this.nb(U(this));};h.If=function(){this.signOut();};h.Jf=function(){this.signOut();};
var Kk=function(a,b){var c=null,d=null;return a.c(b.then(function(b){c=Og(b);d=Qi(b);return Ik(a,b)}).then(function(){return ag({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))};h=T.prototype;h.Nf=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b));});};h.Pf=function(a){var b=this;Lk(this,function(){a.next(U(b));});};
h.onIdTokenChanged=function(a,b,c){var d=this;this.Dc&&firebase$1.Promise.resolve().then(function(){p(a)?a(U(d)):p(a.next)&&a.next(U(d));});return this.Zf(a,b,c)};h.onAuthStateChanged=function(a,b,c){var d=this;this.Dc&&firebase$1.Promise.resolve().then(function(){d.kc=d.getUid();p(a)?a(U(d)):p(a.next)&&a.next(U(d));});return this.ag(a,b,c)};h.Cf=function(a){var b=this,c=this.ya.then(function(){return U(b)?U(b).getIdToken(a).then(function(a){return{accessToken:a}}):null});return this.c(c)};
h.signInWithCustomToken=function(a){var b=this;return this.ya.then(function(){return Kk(b,Q(b.g,Ih,{token:a}))}).then(function(a){a=a.user;ak(a,"isAnonymous",!1);return b.nb(a)}).then(function(){return U(b)})};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.ya.then(function(){return Kk(c,Q(c.g,Eg,{email:a,password:b}))}).then(function(a){return a.user})};h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.ya.then(function(){return Kk(c,Q(c.g,Eh,{email:a,password:b}))}).then(function(a){return a.user})};
h.signInWithCredential=function(a){return this.signInAndRetrieveDataWithCredential(a).then(function(a){return a.user})};h.signInAndRetrieveDataWithCredential=function(a){var b=this;return this.ya.then(function(){return Kk(b,a.Nb(b.g))})};h.signInAnonymously=function(){var a=this;return this.ya.then(function(){var b=U(a);return b&&b.isAnonymous?b:Kk(a,a.g.signInAnonymously()).then(function(b){b=b.user;ak(b,"isAnonymous",!0);return a.nb(b)}).then(function(){return U(a)})})};h.j=function(){return this.app};
var U=function(a){return a.currentUser};T.prototype.getUid=function(){return U(this)&&U(this).uid||null};var Mk=function(a){return U(a)&&U(a)._lat||null};h=T.prototype;h.Sa=function(){if(this.Dc){for(var a=0;a<this.Ja.length;a++)if(this.Ja[a])this.Ja[a](Mk(this));if(this.kc!==this.getUid()&&this.Eb.length)for(this.kc=this.getUid(),a=0;a<this.Eb.length;a++)if(this.Eb[a])this.Eb[a](Mk(this));}};h.hf=function(a){this.addAuthTokenListener(a);this.Na++;0<this.Na&&U(this)&&Qj(U(this));};
h.gg=function(a){var b=this;x(this.Ja,function(c){c==a&&b.Na--;});0>this.Na&&(this.Na=0);0==this.Na&&U(this)&&Rj(U(this));this.removeAuthTokenListener(a);};h.addAuthTokenListener=function(a){var b=this;this.Ja.push(a);this.c(this.ya.then(function(){b.Da||Wa(b.Ja,a)&&a(Mk(b));}));};h.removeAuthTokenListener=function(a){Za(this.Ja,function(b){return b==a});};var Lk=function(a,b){a.Eb.push(b);a.c(a.ya.then(function(){!a.Da&&Wa(a.Eb,b)&&a.kc!==a.getUid()&&(a.kc=a.getUid(),b(Mk(a)));}));};h=T.prototype;
h["delete"]=function(){this.Da=!0;for(var a=0;a<this.K.length;a++)this.K[a].cancel("app-deleted");this.K=[];this.na&&(a=this.na,a.h.removeListener(sk("local"),a.i,this.sd));this.v&&this.v.unsubscribe(this);return firebase$1.Promise.resolve()};h.c=function(a){var b=this;this.K.push(a);Ed(a,function(){Ya(b.K,a);});return a};h.fetchProvidersForEmail=function(a){return this.c(ih(this.g,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};
h.confirmPasswordReset=function(a,b){return this.c(this.g.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.c(this.g.checkActionCode(a).then(function(a){return new Hi(a)}))};h.applyActionCode=function(a){return this.c(this.g.applyActionCode(a).then(function(){}))};h.sendPasswordResetEmail=function(a,b){var c=this;return this.c(D().then(function(){return"undefined"===typeof b||jb(b)?{}:Ei(new Di(b))}).then(function(b){return c.g.sendPasswordResetEmail(a,b)}).then(function(){}))};
h.signInWithPhoneNumber=function(a,b){return this.c(Gi(this,a,b,r(this.signInAndRetrieveDataWithCredential,this)))};var Ok=function(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,g=0;g<b.length;g++)if(b[g].optional)f=!0;else{if(f)throw new O("internal-error","Argument validator encountered a required argument after an optional argument.");e++;}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else{for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].T(c[e])&&!f){b=b[e];if(0>e||e>=Nk.length)throw new O("internal-error",
"Argument validator received an unsupported number of arguments.");c=Nk[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.S+".";break a}d=null;}}if(d)throw new O("argument-error",a+" failed: "+d);},Nk="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),V=function(a,b){return{name:a||"",S:"a valid string",optional:!!b,T:m}},Pk=function(){return{name:"opt_forceRefresh",S:"a boolean",optional:!0,T:ca}},W=function(a,b){return{name:a||"",S:"a valid object",optional:!!b,
T:q}},Qk=function(a,b){return{name:a||"",S:"a function",optional:!!b,T:p}},Rk=function(a,b){return{name:a||"",S:"null",optional:!!b,T:ha}},Sk=function(){return{name:"",S:"an HTML element",optional:!1,T:function(a){return!!(a&&a instanceof Element)}}},Tk=function(){return{name:"auth",S:"an instance of Firebase Auth",optional:!0,T:function(a){return!!(a&&a instanceof T)}}},Uk=function(){return{name:"app",S:"an instance of Firebase App",optional:!0,T:function(a){return!!(a&&a instanceof firebase$1.app.App)}}},
Vk=function(a){return{name:a?a+"Credential":"credential",S:a?"a valid "+a+" credential":"a valid credential",optional:!1,T:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.Nb||!c)}}},Wk=function(){return{name:"authProvider",S:"a valid Auth provider",optional:!1,T:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},Xk=function(){return{name:"applicationVerifier",S:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,T:function(a){return!!(a&&
m(a.type)&&p(a.verify))}}},X=function(a,b,c,d){return{name:c||"",S:a.S+" or "+b.S,optional:!!d,T:function(c){return a.T(c)||b.T(c)}}};var Y=function(a,b){for(var c in b){var d=b[c].name;a[d]=Yk(d,a[c],b[c].a);}},Z=function(a,b,c,d){a[b]=Yk(b,c,d);},Yk=function(a,b,c){if(!c)return b;var d=Zk(a);a=function(){var a=Array.prototype.slice.call(arguments);Ok(d,c,a);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=b.prototype[e];return a},Zk=function(a){a=a.split(".");return a[a.length-1]};Y(T.prototype,{applyActionCode:{name:"applyActionCode",a:[V("code")]},checkActionCode:{name:"checkActionCode",a:[V("code")]},confirmPasswordReset:{name:"confirmPasswordReset",a:[V("code"),V("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",a:[V("email"),V("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",a:[V("email")]},getRedirectResult:{name:"getRedirectResult",a:[]},onAuthStateChanged:{name:"onAuthStateChanged",a:[X(W(),Qk(),"nextOrObserver"),
Qk("opt_error",!0),Qk("opt_completed",!0)]},onIdTokenChanged:{name:"onIdTokenChanged",a:[X(W(),Qk(),"nextOrObserver"),Qk("opt_error",!0),Qk("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",a:[V("email"),X(W("opt_actionCodeSettings",!0),Rk(null,!0),"opt_actionCodeSettings",!0)]},setPersistence:{name:"setPersistence",a:[V("persistence")]},signInAndRetrieveDataWithCredential:{name:"signInAndRetrieveDataWithCredential",a:[Vk()]},signInAnonymously:{name:"signInAnonymously",a:[]},
signInWithCredential:{name:"signInWithCredential",a:[Vk()]},signInWithCustomToken:{name:"signInWithCustomToken",a:[V("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",a:[V("email"),V("password")]},signInWithPhoneNumber:{name:"signInWithPhoneNumber",a:[V("phoneNumber"),Xk()]},signInWithPopup:{name:"signInWithPopup",a:[Wk()]},signInWithRedirect:{name:"signInWithRedirect",a:[Wk()]},signOut:{name:"signOut",a:[]},toJSON:{name:"toJSON",a:[V(null,!0)]},zg:{name:"useDeviceLanguage",
a:[]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",a:[V("code")]}});(function(a,b){for(var c in b){var d=b[c].name;if(d!==c){var e=b[c].kf;Object.defineProperty(a,d,{get:function(){return this[c]},set:function(a){Ok(d,[e],[a],!0);this[c]=a;},enumerable:!0});}}})(T.prototype,{lc:{name:"languageCode",kf:X(V(),Rk(),"languageCode")}});T.Persistence=Ri;T.Persistence.LOCAL="local";T.Persistence.SESSION="session";T.Persistence.NONE="none";
Y(S.prototype,{"delete":{name:"delete",a:[]},getIdToken:{name:"getIdToken",a:[Pk()]},getToken:{name:"getToken",a:[Pk()]},linkAndRetrieveDataWithCredential:{name:"linkAndRetrieveDataWithCredential",a:[Vk()]},linkWithCredential:{name:"linkWithCredential",a:[Vk()]},linkWithPhoneNumber:{name:"linkWithPhoneNumber",a:[V("phoneNumber"),Xk()]},linkWithPopup:{name:"linkWithPopup",a:[Wk()]},linkWithRedirect:{name:"linkWithRedirect",a:[Wk()]},reauthenticateAndRetrieveDataWithCredential:{name:"reauthenticateAndRetrieveDataWithCredential",
a:[Vk()]},reauthenticateWithCredential:{name:"reauthenticateWithCredential",a:[Vk()]},reauthenticateWithPhoneNumber:{name:"reauthenticateWithPhoneNumber",a:[V("phoneNumber"),Xk()]},reauthenticateWithPopup:{name:"reauthenticateWithPopup",a:[Wk()]},reauthenticateWithRedirect:{name:"reauthenticateWithRedirect",a:[Wk()]},reload:{name:"reload",a:[]},sendEmailVerification:{name:"sendEmailVerification",a:[X(W("opt_actionCodeSettings",!0),Rk(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",a:[V(null,
!0)]},unlink:{name:"unlink",a:[V("provider")]},updateEmail:{name:"updateEmail",a:[V("email")]},updatePassword:{name:"updatePassword",a:[V("password")]},updatePhoneNumber:{name:"updatePhoneNumber",a:[Vk("phone")]},updateProfile:{name:"updateProfile",a:[W("profile")]}});Y(C.prototype,{f:{name:"catch"},then:{name:"then"}});Y(Fi.prototype,{confirm:{name:"confirm",a:[V("verificationCode")]}});Z(Gg,"credential",function(a,b){return new Dg(a,b)},[V("email"),V("password")]);
Y(vg.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(vg,"credential",wg,[X(V(),W(),"token")]);Y(xg.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(xg,"credential",yg,[X(V(),W(),"token")]);Y(zg.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});
Z(zg,"credential",Ag,[X(V(),X(W(),Rk()),"idToken"),X(V(),Rk(),"accessToken",!0)]);Y(Bg.prototype,{setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(Bg,"credential",Cg,[X(V(),W(),"token"),V("secret",!0)]);Y(P.prototype,{addScope:{name:"addScope",a:[V("scope")]},credential:{name:"credential",a:[X(V(),Rk(),"idToken",!0),X(V(),Rk(),"accessToken",!0)]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});
Z(Lg,"credential",Ng,[V("verificationId"),V("verificationCode")]);Y(Lg.prototype,{verifyPhoneNumber:{name:"verifyPhoneNumber",a:[V("phoneNumber"),Xk()]}});Y(O.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(Qg.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(mg.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(ii.prototype,{clear:{name:"clear",a:[]},render:{name:"render",a:[]},verify:{name:"verify",a:[]}});
(function(){if("undefined"!==typeof firebase$1&&firebase$1.INTERNAL&&firebase$1.INTERNAL.registerService){var a={Auth:T,Error:O};Z(a,"EmailAuthProvider",Gg,[]);Z(a,"FacebookAuthProvider",vg,[]);Z(a,"GithubAuthProvider",xg,[]);Z(a,"GoogleAuthProvider",zg,[]);Z(a,"TwitterAuthProvider",Bg,[]);Z(a,"OAuthProvider",P,[V("providerId")]);Z(a,"PhoneAuthProvider",Lg,[Tk()]);Z(a,"RecaptchaVerifier",ii,[X(V(),Sk(),"recaptchaContainer"),W("recaptchaParameters",!0),Uk()]);firebase$1.INTERNAL.registerService("auth",function(a,
c){a=new T(a);c({INTERNAL:{getUid:r(a.getUid,a),getToken:r(a.Cf,a),addAuthTokenListener:r(a.hf,a),removeAuthTokenListener:r(a.gg,a)}});return a},a,function(a,c){if("create"===a)try{c.auth();}catch(d){}});firebase$1.INTERNAL.extendNamespace({User:S});}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();}).call(this);
}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});

var AngularFireAuth = (function () {
    function AngularFireAuth(app) {
        this.app = app;
        this.authState = FirebaseAuthStateObservable(app);
        this.idToken = FirebaseIdTokenObservable(app);
        this.auth = app.auth();
    }
    AngularFireAuth.decorators = [
        { type: Injectable },
    ];
    AngularFireAuth.ctorParameters = function () { return [
        { type: FirebaseApp, },
    ]; };
    return AngularFireAuth;
}());
function FirebaseAuthStateObservable(app) {
    var authState = Observable_2.create(function (observer) {
        app.auth().onAuthStateChanged(function (user) { return observer.next(user); }, function (error) { return observer.error(error); }, function () { observer.complete(); return undefined; });
    });
    return observeOn_2.call(authState, new ZoneScheduler(Zone.current));
}
function FirebaseIdTokenObservable(app) {
    var idToken = Observable_2.create(function (observer) {
        app.auth().onIdTokenChanged(function (user) { return observer.next(user); }, function (error) { return observer.error(error); }, function () { observer.complete(); return undefined; });
    });
    return observeOn_2.call(idToken, new ZoneScheduler(Zone.current));
}

var SampleService = (function () {
    /**
     * @param {?} db
     * @param {?} auth
     */
    function SampleService(db, auth) {
        this.db = db;
        this.auth = auth;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    SampleService.prototype.calculate = function (a, b) {
        return a * b;
    };
    return SampleService;
}());
SampleService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
SampleService.ctorParameters = function () { return [
    { type: AngularFireDatabase, },
    { type: AngularFireAuth, },
]; };

var FirebaseExampleModule = (function () {
    function FirebaseExampleModule() {
    }
    /**
     * @return {?}
     */
    FirebaseExampleModule.forRoot = function () {
        return {
            ngModule: FirebaseExampleModule,
            providers: [SampleService]
        };
    };
    return FirebaseExampleModule;
}());
FirebaseExampleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                exports: [],
                imports: [
                    CommonModule
                ]
            },] },
];
/**
 * @nocollapse
 */
FirebaseExampleModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */

export { SampleService, FirebaseExampleModule };
//# sourceMappingURL=firebase-example.es5.js.map
