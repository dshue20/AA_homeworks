const titleize = function(names, func) {
    titleized = names.map( name => `Mx. ${name} Jingleheimer Schmidt`);
    func(titleized);
};
// titleize(["Mary", "Brian", "Leo"], names => names.forEach(name => console.log(name)));

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
};
Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`)
};
Elephant.prototype.grow = function() {
    this.height += 12;
};
Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick);
};
Elephant.prototype.play = function() {
    console.log(`${this.name} is ${this.tricks[Math.floor(Math.random() * this.tricks.length)]}`);
};
let dumbo = new Elephant('Dumbo',48,['eating', 'playing', 'sleeping']);
// dumbo.trumpet();
// dumbo.grow;
// console.log(dumbo.height);
// dumbo.addTrick('jumping');
// console.log(dumbo.tricks);
// dumbo.play();

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [dumbo, ellie, charlie, kate, micah];

Elephant.paradeHelper = function(elephant) {
    console.log(`${elephant.name} is trotting by!`)
}
// Elephant.paradeHelper(dumbo);
// herd.forEach(elephant => Elephant.paradeHelper(elephant));

const dinerBreakfast = function() {
    let order = "I'd like cheesy scrambled eggs";
    return add_order = function(food) {
        order += ` and ${food}`;
        return order + " please";
    }
}
let bfastOrder = dinerBreakfast();
console.log(bfastOrder("chocolate chip pancakes"));
console.log(bfastOrder("grits"));