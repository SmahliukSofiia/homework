const Squad = require('./squad');
const Resource = require('./resource');

var squad = new Squad();

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