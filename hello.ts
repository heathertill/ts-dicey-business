import $ from 'jquery';

let diceArray: Array<Die> = [];  // declare array



class Die {
    // Field
    die: HTMLDivElement;  //declared variables
    value: number;

    constructor() {
        this.die = document.createElement('div');  // create die div
        this.die.className = 'randomDie';  //  name div
        this.value = this.roll();  // assign value
        this.die.textContent = String(this.value);  //display value
        document.body.appendChild(this.die);  // add die to document.body
        this.die.addEventListener('click', () => {
            this.value = this.roll();  // generates a new value for die clicked
            this.die.textContent = String(this.value);  // updates display value
        });
        this.die.addEventListener('dblclick', () => {
            this.die.remove();  // removes the die
            diceArray.splice(diceArray.indexOf(this), 1)  // removes the die from the array
        })
    }

    roll() {
        return Math.floor(Math.random() * 6) + 1;  // generates a random number when called
    }
}

// Create die function
$('#genDie').click(function (): any {
    diceArray.push(new Die);   //  creates each die and pushes it to the array
});

//  Reroll all die function
$('#rollDie').click(() => {
    for (let i = 0; i < diceArray.length; i++) {
        diceArray[i].value = diceArray[i].roll();  //  loops through the array of die and generates a new number
        diceArray[i].die.innerHTML = String(diceArray[i].value);  //  updates the die values in the array
    }
});

// Sum of all die function
$('#diceSum').click(() => {
    let dieSum = 0;
    diceArray.forEach(randomDie => dieSum += randomDie.value);  //  loops through the array of die and adds their values
    alert(`The sum the the dice is: ${dieSum}`);  //  alerts the sum
})















































