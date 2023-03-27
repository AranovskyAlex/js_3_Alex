let car = {
name: 'BMW',
model: 'M5 E60',
topSpeed: '360 km/h',
year: 2007,
drive: 'RW drive',
defaultHP: '500hp',
modedHP: '850hp',
speedTest() {
console.log(`${this.name} ${this.model} ${this.year} top speed is ${this.topSpeed}`);
},
driveInfo() {
console.log(`In year ${this.year} all ${this.model} had ${this.drive}`);
},
improve(){
console.log(`Stock ${this.model} has ${this.defaultHP}, but you can increase it up to ${this.modedHP}  `);
}
} 

car.speedTest();
car.driveInfo();
car.improve();