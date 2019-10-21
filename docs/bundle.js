(function () {
	'use strict';

	class List {
	    constructor() {
	        this.set = new Set();
	        this.array = [];
	    }
	    get length() {
	        return this.array.length;
	    }
	    has(value) {
	        return this.set.has(value);
	    }
	    add(value) {
	        if (!this.has(value)) {
	            this.set.add(value);
	            this.array.push(value);
	        }
	    }
	    remove(value) {
	        if (this.has(value)) {
	            this.set.delete(value);
	            for (let i = 0; i < this.array.length; i++) {
	                if (this.array[i] === value) {
	                    this.array.splice(i, 1);
	                    break;
	                }
	            }
	        }
	    }
	    removeAt(index) {
	        if (this.array.length - 1 < index) {
	            return;
	        }
	        const [value] = this.array.splice(index, 1);
	        this.set.delete(value);
	    }
	}

	const intMax = 0x7fffffff;
	// We need genuine int32 behavior when mutliplying (ie. accurate int32 overflow
	// behavior), so we're going to cheat and use an int32 array to have JS actually
	// treat it as int32 values. Defining this up here and reusing it to avoid having
	// to reallocate tiny 8 byte buffers over and over.
	const a32 = new Int32Array(2);
	class NumberGenerator {
	    constructor(seed) {
	        this.seed = seed;
	        this.next();
	    }
	    next() {
	        const intSeed = this.seed | 0;
	        // Calculate the first portion of the equation in int32:
	        //   a32[0] = (int) seed * 16807
	        a32[0] = intSeed;
	        a32[0] *= 16807;
	        // Calculate the second portion, also in int32:
	        //   a32[1] = (int) seed / 127773 * -0x7fffffff
	        a32[1] = intSeed;
	        a32[1] /= 127773;
	        a32[1] *= -intMax;
	        // Add the two results above:
	        //   a32[0] = (int) seed * 16807 + (int) seed / 127773 * -0x7fffffff
	        a32[0] += a32[1];
	        if (a32[0] < 0) {
	            a32[0] += intMax;
	        }
	        // When we're done, store the new seed
	        this.seed = a32[0];
	        return this.seed / intMax;
	    }
	}

	const liquidMaterials = [
	    'water',
	    'water_ice',
	    'water_swamp',
	    'oil',
	    'alcohol',
	    'swamp',
	    'mud',
	    'blood',
	    'blood_fungi',
	    'blood_worm',
	    'radioactive_liquid',
	    'cement',
	    'acid',
	    'lava',
	    'urine',
	    'poison',
	    'magic_liquid_teleportation',
	    'magic_liquid_polymorph',
	    'magic_liquid_random_polymorph',
	    'magic_liquid_berserk',
	    'magic_liquid_charm',
	    'magic_liquid_invisibility'
	];
	const alchemyMaterials = [
	    'sand',
	    'bone',
	    'soil',
	    'honey',
	    'slime',
	    'snow',
	    'rotten_meat',
	    'wax',
	    'gold',
	    'silver',
	    'copper',
	    'brass',
	    'diamond',
	    'coal',
	    'gunpowder',
	    'gunpowder_explosive',
	    'grass',
	    'fungi'
	];

	/**
	 * Noita alchemy generator
	 *
	 * Algorithm borrowed from https://github.com/zatherz/NoitaAlchemy/blob/master/Program.cs
	 */
	class NoitaAlchemyGenerator {
	    constructor(seed, full) {
	        this.seed = seed;
	        this.full = full;
	        this.prng = new NumberGenerator(this.seed * 0.17127000 + 1323.59030000);
	        // Pre-warm the PRNG
	        for (let i = 0; i < 5; i++) {
	            this.prng.next();
	        }
	        this.livelyConcoction = this.getRandomRecipe();
	        this.alchemicalPrecursor = this.getRandomRecipe();
	    }
	    chooseRandomMaterials(target, materialList, iterations) {
	        for (let i = 0; i < iterations; i++) {
	            const rand = this.prng.next();
	            const pick = materialList[(rand * materialList.length) | 0];
	            if (target.has(pick)) {
	                i--;
	                continue;
	            }
	            target.add(pick);
	        }
	    }
	    getRandomRecipe() {
	        const materials = new List();
	        this.chooseRandomMaterials(materials, liquidMaterials, 3);
	        this.chooseRandomMaterials(materials, alchemyMaterials, 1);
	        let probability = this.prng.next();
	        this.prng.next();
	        probability = (10 - ((probability * -91) | 0));
	        this.shuffle(materials);
	        if (!this.full && materials.length === 4) {
	            materials.removeAt(materials.length - 1);
	        }
	        return {
	            probability,
	            materials: materials.array
	        };
	    }
	    shuffle(list) {
	        const seed = ((this.seed >> 1) | 0) + 0x30f6;
	        const prng = new NumberGenerator(seed);
	        for (let i = list.length - 1; i >= 0; i--) {
	            const swapIndex = (prng.next() * (i + 1)) | 0;
	            const element = list.array[i];
	            list.array[i] = list.array[swapIndex];
	            list.array[swapIndex] = element;
	        }
	    }
	}

	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';

	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @private
	 */
	function Events() {}

	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);

	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}

	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Add a listener for a given event.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} once Specify if the listener is a one-time listener.
	 * @returns {EventEmitter}
	 * @private
	 */
	function addListener(emitter, event, fn, context, once) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('The listener must be a function');
	  }

	  var listener = new EE(fn, context || emitter, once)
	    , evt = prefix ? prefix + event : event;

	  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
	  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
	  else emitter._events[evt] = [emitter._events[evt], listener];

	  return emitter;
	}

	/**
	 * Clear event by name.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} evt The Event name.
	 * @private
	 */
	function clearEvent(emitter, evt) {
	  if (--emitter._eventsCount === 0) emitter._events = new Events();
	  else delete emitter._events[evt];
	}

	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;

	  if (this._eventsCount === 0) return names;

	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Array} The registered listeners.
	 * @public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  var evt = prefix ? prefix + event : event
	    , handlers = this._events[evt];

	  if (!handlers) return [];
	  if (handlers.fn) return [handlers.fn];

	  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
	    ee[i] = handlers[i].fn;
	  }

	  return ee;
	};

	/**
	 * Return the number of listeners listening to a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Number} The number of listeners.
	 * @public
	 */
	EventEmitter.prototype.listenerCount = function listenerCount(event) {
	  var evt = prefix ? prefix + event : event
	    , listeners = this._events[evt];

	  if (!listeners) return 0;
	  if (listeners.fn) return 1;
	  return listeners.length;
	};

	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Add a listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  return addListener(this, event, fn, context, false);
	};

	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  return addListener(this, event, fn, context, true);
	};

	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {*} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return this;
	  if (!fn) {
	    clearEvent(this, evt);
	    return this;
	  }

	  var listeners = this._events[evt];

	  if (listeners.fn) {
	    if (
	      listeners.fn === fn &&
	      (!once || listeners.once) &&
	      (!context || listeners.context === context)
	    ) {
	      clearEvent(this, evt);
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	        listeners[i].fn !== fn ||
	        (once && !listeners[i].once) ||
	        (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }

	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else clearEvent(this, evt);
	  }

	  return this;
	};

	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {(String|Symbol)} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;

	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) clearEvent(this, evt);
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;

	//
	// Expose the module.
	//
	if ('undefined' !== typeof module) {
	  module.exports = EventEmitter;
	}

	var EventEmitter$1 = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	class SeedFinder extends EventEmitter$1 {
	    constructor(options) {
	        super();
	        this.options = options;
	        this.exclude = new Set(this.options.exclude);
	        this.minScoreThreshold = this.options.minScoreThreshold || 1;
	        this.badMaterialThreshold = this.options.badMaterialThreshold || 17;
	        this.materialWeights = Object.assign({}, defaultMaterialPreference, this.options.materialPreferences || {});
	        const required = this.options.requireMaterials || {};
	        this.lcRequired = new Set(required.lc || []);
	        this.apRequired = new Set(required.ap || []);
	        this.minLcProbability = this.options.minLcProbability || 0;
	        this.maxLcProbability = this.options.maxLcProbability || 100;
	        this.minApProbability = this.options.minApProbability || 0;
	        this.maxApProbability = this.options.maxApProbability || 100;
	    }
	    /**
	     * Start looking for seeds
	     *
	     * @param start The seed to start at while checking
	     * @param count The number of seeds to check before stopping
	     */
	    seek(start, count) {
	        const end = start + count;
	        for (let seed = start; seed < end; seed++) {
	            const result = this.calculateSeed(seed);
	            if (result.score < this.minScoreThreshold || result.hasExcluded || !result.hasIncluded || result.hasBadMat || result.hasBadProbability) {
	                continue;
	            }
	            this.emit('seed', result);
	        }
	        this.emit('done');
	    }
	    /**
	     * Calculates the recipes for a given seed, and calculates scoring information about the seed. The best possible
	     * score for a seed would be 98 / 100. This would be water on both recipes (0 points), and two 1 point materials
	     * shared between both recipes (1 point each, only counted once because they're reused). An example of this would
	     * be "water" + "blood" + "oil" on both recipes. The worst possible score is 100 - (6 * 16), or 4 out of 100.
	     *
	     * @param seed The seed to calculate for
	     */
	    calculateSeed(seed) {
	        const generator = new NoitaAlchemyGenerator(seed, false);
	        let score = 100;
	        let hasBadMat = false;
	        let hasExcluded = false;
	        let hasBadProbability = false;
	        // Materials are only counted against the score one each, so if they
	        // are re-used, don't re-count them. This keeps track of the list of
	        // materials we've already seen
	        const used = new Set();
	        const materials = [
	            ...generator.livelyConcoction.materials,
	            ...generator.alchemicalPrecursor.materials
	        ];
	        let stillRequired = this.apRequired.size + this.lcRequired.size;
	        const processMats = (recipe, required, minProb, maxProb) => {
	            if (recipe.probability < minProb || recipe.probability > maxProb) {
	                hasBadProbability = true;
	            }
	            for (let i = 0; i < 3; i++) {
	                const mat = recipe.materials[i];
	                if (required.has(mat)) {
	                    stillRequired--;
	                }
	                if (used.has(mat)) {
	                    continue;
	                }
	                used.add(mat);
	                const matScore = this.materialWeights[mat];
	                if (matScore > this.badMaterialThreshold) {
	                    hasBadMat = true;
	                }
	                if (this.exclude.has(mat)) {
	                    hasExcluded = true;
	                }
	                score -= matScore;
	            }
	        };
	        processMats(generator.livelyConcoction, this.lcRequired, this.minLcProbability, this.maxLcProbability);
	        processMats(generator.alchemicalPrecursor, this.apRequired, this.minApProbability, this.maxApProbability);
	        return {
	            seed,
	            score,
	            hasBadMat,
	            hasExcluded,
	            hasBadProbability,
	            hasIncluded: !stillRequired,
	            livelyConcoction: generator.livelyConcoction,
	            alchemicalPrecursor: generator.alchemicalPrecursor
	        };
	    }
	}
	/**
	 * Weighted preference scores for each material (lower score is better)
	 */
	const defaultMaterialPreference = {
	    // Obviously, prefer the *really* easy stuff
	    'water': 0,
	    'blood': 1,
	    'oil': 1,
	    'magic_liquid_charm': 1,
	    'magic_liquid_berserk': 1,
	    'magic_liquid_invisibility': 1,
	    'alcohol': 2,
	    // Next, go for stuff that's not too hard, but has some annoying properties / can
	    // be mildly annoying to get a hold of at times
	    'snow': 3,
	    'sand': 3,
	    'acid': 5,
	    'poison': 5,
	    'rotten_meat': 5,
	    'water_ice': 5,
	    'water_swamp': 5,
	    'magic_liquid_polymorph': 6,
	    'magic_liquid_random_polymorph': 6,
	    'magic_liquid_teleportation': 6,
	    // Finally, the stuff that is really hard to find, or is just dangerous
	    'blood_worm': 7,
	    'bone': 7,
	    'lava': 10,
	    'coal': 12,
	    'gunpowder': 12,
	    'fungi': 15,
	    'gunpowder_explosive': 15,
	    'urine': 15,
	    'wax': 15,
	    'gold': 15,
	    'silver': 15,
	    'copper': 15,
	    'brass': 15,
	    'diamond': 15,
	    // Default to "bad" until I care enough to clean up
	    'swamp': 16,
	    'mud': 16,
	    'blood_fungi': 16,
	    'radioactive_liquid': 16,
	    'cement': 16,
	    'soil': 16,
	    'honey': 16,
	    'slime': 16,
	    'grass': 16,
	};

	const seedFinder = new SeedFinder();

	console.log(seedFinder);

}());
