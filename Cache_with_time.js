// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.


var TimeLimitedCache = function() {

     this.cache = new Map();
    
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    let existed = false;

    if (this.cache.has(key)) {
        const entry = this.cache.get(key);
        if (entry.expiresAt > now) existed = true;
    }

    this.cache.set(key, {
        value: value,
        expiresAt: now + duration
    });

    return existed;
};

TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now();

    if (!this.cache.has(key)) return -1;

    const entry = this.cache.get(key);

    if (entry.expiresAt <= now) {
        this.cache.delete(key);
        return -1;
    }

    return entry.value;   
};

TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let count = 0;

    for (const [key, entry] of this.cache) {
        if (entry.expiresAt <= now) {
            this.cache.delete(key);
        } else {
            count++;
        }
    }

    return count;   
};



/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
