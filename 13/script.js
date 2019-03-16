function Squad() {
    this.stuff = [];
}

function Resource(name, health, maxHealth, distanceAll, distanceAtMoment) {
    this.name = name;
    this.health = health;
    this.maxHealth = maxHealth;
    this.distanceAll = distanceAll;
    this.distanceAtMoment = distanceAtMoment;
}

Resource.prototype = {
    constructor: Resource,
    isReadyToMove: function(distance) {
        if (this.distanceAtMoment >= distance) {
            return true;
        } else return false;
    },
    restoreHealth: function() {
        this.health = this.maxHealth;
    },
    restore: function() {
        this.distanceAtMoment = this.distanceAll;
    },
    isReadyToFight: function(damage) {
        if (this.health > damage) {
            return true;
        } else return false;
    },
    clone: function() {
        return new Resource(this.name, this.health, this.maxHealth, this.distanceAll, this.distanceAtMoment);
    }
}

Squad.prototype = {
    constructor: Squad,
    addResource: function(resource) {
        this.stuff.push(resource);
    },
    isReadyToMove: function(distance) {
       return this.stuff.every(function (el) {
            return el.distanceAtMoment >= distance;
        })
    },
    moveResources: function(distance) {
        if (this.isReadyToMove(distance)) {
            this.stuff.forEach(function(el) {
                el.distanceAtMoment = el.distanceAtMoment - distance;
            });
        } else {
            console.log('Error! Resource cannot pass more');
        }
    },
    restoreHealth: function(index) {
        if (index >= 0) {
            this.stuff[index].health += this.stuff[index].maxHealth - this.stuff[index].health;
        } else {this.stuff.forEach(function(def) {
            def.health = def.maxHealth;
        })}
    },
    restore: function(index) {
        if (index >= 0) {
            this.stuff[index].distanceAtMoment += this.stuff[index].distanceAll - this.stuff[index].distanceAtMoment;
        } else {this.stuff.forEach(function(def) {
            def.distanceAtMoment = def.distanceAll;
        })}
    },
    getReadyResources: function(distance) {
        return this.stuff.filter(function(el) {
            return el.distanceAtMoment >= distance;
        })
    }, 
    combineResources: function(otherEl) {
        return this.stuff.concat(otherEl);
    },
    isReadyToFight: function(damage) {
        this.stuff.forEach(function(elReady) {
            if (elReady.health > damage) {
                return true;
            } else {
                return false;
            }
        }) 
    },
    rebuildResources: function(first, second) {
        [this.stuff[first], this.stuff[second]] = [this.stuff[second], this.stuff[first]];
    },
    clone: function(index) {
        return new Resource(this.stuff[index].name, this.stuff[index].health, this.stuff[index].maxHealth, this.stuff[index].distanceAll, this.stuff[index].distanceAtMoment);
    }
}

var squad = new Squad();
var resource = new Resource();

var resource1 = new Resource('soldier 1', 30, 70, 70, 35),
    resource2 = new Resource('horse 1', 5, 90, 90, 30),
    resource3 = new Resource('car 1', 50, 100, 100, 30);

squad.addResource(resource1);
squad.addResource(resource2);
squad.addResource(resource3);

squad.moveResources(20);

var newResources = squad.combineResources([new Resource('soldier2', 30, 70, 70, 35), new Resource('horse2', 30, 70, 70, 35), new Resource('car2', 30, 70, 70, 35)]);

var readyResource = squad.getReadyResources(12);

squad.rebuildResources(2, 0);

squad.isReadyToFight(20);

var cloneResource = squad.clone(0);

squad.restoreHealth(0);

resource1.isReadyToMove(20);
resource1.restoreHealth();
resource1.restore();
resource1.isReadyToFight(80);
var clone = resource1.clone();

console.log(squad);
console.log(readyResource);
console.log(newResources);
console.log(cloneResource);

console.log(resource1);
console.log(clone);
