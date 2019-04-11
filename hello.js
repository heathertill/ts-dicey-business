"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var diceArray = []; // declare array
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.die = document.createElement('div'); // create die div
        this.die.className = 'randomDie'; //  name div
        this.value = this.roll(); // assign value
        this.die.textContent = String(this.value); //display value
        document.body.appendChild(this.die); // add die to document.body
        this.die.addEventListener('click', function () {
            _this.value = _this.roll(); // generates a new value for die clicked
            _this.die.textContent = String(_this.value); // updates display value
        });
        this.die.addEventListener('dblclick', function () {
            _this.die.remove(); // removes the die
            diceArray.splice(diceArray.indexOf(_this), 1); // removes the die from the array
        });
    }
    Die.prototype.roll = function () {
        return Math.floor(Math.random() * 6) + 1; // generates a random number when called
    };
    return Die;
}());
// Create die function
jquery_1.default('#genDie').click(function () {
    diceArray.push(new Die); //  creates each die and pushes it to the array
});
//  Reroll all die function
jquery_1.default('#rollDie').click(function () {
    for (var i = 0; i < diceArray.length; i++) {
        diceArray[i].value = diceArray[i].roll(); //  loops through the array of die and generates a new number
        diceArray[i].die.innerHTML = String(diceArray[i].value); //  updates the die values in the array
    }
});
// Sum of all die function
jquery_1.default('#diceSum').click(function () {
    var dieSum = 0;
    diceArray.forEach(function (randomDie) { return dieSum += randomDie.value; }); //  loops through the array of die and adds their values
    alert("The sum the the dice is: " + dieSum); //  alerts the sum
});
