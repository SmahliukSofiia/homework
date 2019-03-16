const Resource = require('./resource');
var _ = require('lodash');

var Squad = function() {
    this.stuff = [];
}

Squad.prototype.constructor = Squad;
Squad.prototype.addResource = function(resource) {
    this.stuff.push(resource);
};
Squad.prototype.isReadyToMove = function(distance) {
    return _.every(this.stuff,function (el) {
        return el.distanceAtMoment >= distance;
    })
};
Squad.prototype.moveResources = function(distance) {
    if (this.isReadyToMove(distance)) {
        _.forEach(this.stuff, function(el) {
            el.distanceAtMoment = el.distanceAtMoment - distance;
        });
    } else {
        console.log('Error! Resource cannot pass more');
    }
};
Squad.prototype.restoreHealth = function(index) {
    if (index >= 0) {
        this.stuff[index].health += this.stuff[index].maxHealth - this.stuff[index].health;
    } else {_.forEach(this.stuff, function(def) {
        def.health = def.maxHealth;
    })}
};
Squad.prototype.restore = function(index) {
    if (index >= 0) {
        this.stuff[index].distanceAtMoment += this.stuff[index].distanceAll - this.stuff[index].distanceAtMoment;
    } else {_.forEach(this.stuff, function(def) {
        def.distanceAtMoment = def.distanceAll;
    })}
};
Squad.prototype.getReadyResources = function(distance) {
    return _.filter(this.stuff, function(el) {
        return el.distanceAtMoment >= distance;
    })
};
Squad.prototype.combineResources = function(otherEl) {
    return _.concat(this.stuff, otherEl);
};
Squad.prototype.isReadyToFight = function(damage) {
    _.forEach(this.stuff, function(elReady) {
        if (elReady.health > damage) {
            return true;
        } else {
            return false;
        }
    }) 
};
Squad.prototype.rebuildResources = function(first, second) {
    [this.stuff[first], this.stuff[second]] = [this.stuff[second], this.stuff[first]];
};
Squad.prototype.clone = function(index) {
    return new Resource(this.stuff[index].name, this.stuff[index].health, this.stuff[index].maxHealth, this.stuff[index].distanceAll, this.stuff[index].distanceAtMoment);
}


module.exports = Squad;