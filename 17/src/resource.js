var Resource = function(name, health, maxHealth, distanceAll, distanceAtMoment) {
    this.name = name;
    this.health = health;
    this.maxHealth = maxHealth;
    this.distanceAll = distanceAll;
    this.distanceAtMoment = distanceAtMoment;
}

Resource.prototype.constructor = Resource;
Resource.prototype.isReadyToMove = function(distance) {
    if (this.distanceAtMoment >= distance) {
        return true;
    } else return false;
};
Resource.prototype.restoreHealth = function() {
    this.health = this.maxHealth;
};
Resource.prototype.restore = function() {
    this.distanceAtMoment = this.distanceAll;
};
Resource.prototype.isReadyToFight = function(damage) {
    if (this.health > damage) {
        return true;
    } else {
        return false;
    }
};
Resource.prototype.clone = function() {
    return new Resource(this.name, this.health, this.maxHealth, this.distanceAll, this.distanceAtMoment);
}

module.exports = Resource;