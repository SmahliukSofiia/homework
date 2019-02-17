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
}

Squad.prototype = {
    constructor: Squad,
    addResource: function(resource) {
        this.stuff.push(resource);
    },
    isReadyToMove: function(distance) {
       return this.stuff.every(function (el) {
            return el.distanceAtMoment >= distance
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
        return this.stuff[index].health += this.stuff[index].maxHealth - this.stuff[index].health;
    },
    restore: function(index) {
        return this.stuff[index].distanceAtMoment += this.stuff[index].distanceAll - this.stuff[index].distanceAtMoment;
    },
    getReadyResources: function(distance) {
        var readyToMoveResources = [];
        this.stuff.forEach(function(el) {
            if (el.distanceAtMoment >= distance) {
                readyToMoveResources.push(el);
            }
        })
        return readyToMoveResources;
    }, 
    combineResources: function(otherEl) {
        return this.stuff.concat(otherEl);
    },
    isReadyToFight: function(damage) {
        this.stuff.forEach(function(elReady) {
            if (elReady.health > damage) {
                console.log(true);
            } else {
                console.log(false)
            }
        }) 
    },
    rebuildResources: function(first, second) {
        [this.stuff[first], this.stuff[second]] = [this.stuff[second], this.stuff[first]];
    },
    clone: function(index) {
        var clone = {};
        for (var key in this.stuff[index]) {
            clone[key] = this.stuff[index][key];
        }
        return clone;
    }
}

var squad = new Squad();
var resource = new Resource();

squad.addResource(new Resource('soldier1', 30, 70, 70, 35));
squad.addResource(new Resource('horse1', 5, 90, 90, 30));
squad.addResource(new Resource('car1', 50, 100, 100, 30))

squad.moveResources(20)

var newResources = squad.combineResources([new Resource('soldier2', 30, 70, 70, 35), 
    new Resource('horse2', 30, 70, 70, 35), new Resource('car2', 30, 70, 70, 35)])

var readyResource = squad.getReadyResources(10)

squad.rebuildResources(2, 0)

squad.isReadyToFight(20)

var cloneResource = squad.clone(0)

console.log(squad)
console.log(readyResource)
console.log(newResources)
console.log(cloneResource)
