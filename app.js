const prompt = require(`prompt-sync`)();

/**
 * // this is an initiator for the function bellow, in this case the quicktime function
 * // this will create a tooltip, explaining the elements of the function we made
 * @param {string} event - description of the quicktime event
 * @param {string} action - the key to prompt
 * @param {number} time - the quick time duration (seconds)
 * @returns true / false  
 */
function quickTime(event, action, time) {
    console.log(`Quick time event is coming!! Get ready...`)
    prompt(`Press any key to continue: `)
    let start = Date.now()                                                      // setting the starting time of function to right now
    console.log(event)                                                         // inform user of event 
    const userInput = prompt(`Press the letter "${action}" : `)               // ask for user input 
    if (userInput === action && (Date.now() - start < time * 1000)) {          //takes the difference between the time
        return true                                                         //compares it to the time parameter
    } else { return false }

}

function loseHealth(damage) {
    characterObjects.health -= damage / characterObjects.defense
    console.log(`Health is now ${characterObjects.health}`)
}

const characterObjects = {
    health: 100,
    defense: 1,
    attack: 1,
    sneak: 1,
    weaponType: "",
    inventory: {
        potion: [],
        gold: 0,
        weaponArray: [],
    }
}


const monsters = {
    bear: {
        attack: 20,
        defense: 50,
        health: 100,
    },
    wolf: {
        attack: 50,
        defense: 20,
        health: 100,
    },
    elf: {
        attack: 50,
        defense: 50,
        health: 100,
    },
    scorpion: {
        attack: 50,
        defense: 75,
        health: 200
    }


}


console.log(`Welcome to Scary Forest III`)
prompt(`Press any key to play`)

characterObjects.name = prompt(`insert your name: `)  // Calling the charachterObjects object. Adds "name".
console.log(characterObjects)

console.log(`chose your class`)
console.log(` 1: archer 2: rogue 3: swordsman `)

const classInput = prompt(``)

if (classInput == 1) {
    characterObjects.class = "archer"
}
else if (classInput == 2) {
    characterObjects.class = "rogue"
}
else if (classInput == 3) {
    characterObjects.class = "swordsman"
}
else {
    characterObjects.class = "archer"
    console.log("Invalid input. Class set to Archer")
}

console.log(characterObjects.class)








// This if statement creates the first branching path 
if (characterObjects.class === "archer") {
    console.log(`${characterObjects.name} is stalking a deer.`)
    console.log(`As ${characterObjects.name} prepares to shoot the deer`)
    console.log(`A monster runs by and scares the deer away`)
    console.log(`The monster then comes to attack ${characterObjects.name}!!`)




    let success = quickTime(`Run away`, `D`, 5)              // Creating the "Success" variable and initiating the quicktime event
    if (success === true) {                                 // Checks if the user has succeed in the quicktime event
        success = quickTime(`Shoot the monster`, `E`, 5)     // Starting another quicktime event with the same conditions. 
        if (success === true) {                             // Returns pass / fail 

            console.log(`You defeated the monster!! You have looted 50 gold and a health potion`)
            characterObjects.inventory.gold += 50
            characterObjects.inventory.potion.push(`Health Potion`)
            console.log(`${characterObjects.name} hears more monsters coming. He starts to run toward safety`)

        }
    }

    if (success === false) {                               //if user fails any of the quicktime events they get Loser prompt         
        loseHealth(10)
        console.log(`The monster whooped you up pretty good. -10 Health`)
        console.log(`You patch up your wounds and head towards safety..`)
    }
}




if (characterObjects.class === "rogue") {
    console.log(`${characterObjects.name} is hiding in a tree stalking a deer.`)
    console.log(`As the deer comes closer ${characterObjects.name} prepares to attack the deer`)
    console.log(`when suddenly a monster runs by and scares the deer away`)
    console.log(`The monster then comes to attack ${characterObjects.name}!!`)
    // quick time event 
    console.log(`You defeated the monster!! You have looted 50 gold and a health potion`)
    characterObjects.inventory.gold += 50
    characterObjects.inventory.potion.push(`Health Potion`)
    console.log(`${characterObjects.name} hears more monsters coming. He starts to run toward safety`)
}

if (characterObjects.class === "swordsman") {
    console.log(`${characterObjects.name} is setting up camp for the night.`)
    console.log(`${characterObjects.name} hears rustling. ${characterObjects.name} picks up his sword `)
    console.log(`Suddenly a monster runs by and charges toward ${characterObjects.name}!!`)
    // quick time event 
    console.log(`You defeated the monster!! You have looted 50 gold and a health potion`)
    characterObjects.inventory.gold += 50
    characterObjects.inventory.potion.push(`Health Potion`)
    console.log(`${characterObjects.name} hears more monsters coming. He starts to run toward safety`)
}







// This is the River Escape section -- happening after the tutorial sections reguardless of outcome

console.log(`You spot a river boat and hop in.`)
console.log(`Out of nowhere, a fairy pops out. It starts to talk to ${characterObjects.name}`)
console.log(`It is asking for help to save Father Tree from the Evil Scary Scorpion`)
console.log(`In order to save Father Tree you will need ...`)
console.log(`1. Mushroom found from the dark bear cave.`)
console.log(`2. Wolf Fur, through killing a magical wolf`)
console.log(`3. A leaf from the world tree... Protected by elves.`)
console.log(`When all of a sudden...`)
console.log(`You enter rapids and need to hold on for dear life.. `)

let riverSuccess = quickTime(`Quick! Grab your paddle`, `grab`, 6)              // Creating the "Success" variable and initiating the quicktime event
if (riverSuccess === true) {                                                  // Checks if the user has succeed in the quicktime event
    riverSuccess = quickTime(`Paddle harder!!`, `paddle`, 6)                     // Starting another quicktime event with the same conditions. 
    if (riverSuccess === true) {
        riverSuccess = quickTime(`There's a branch! Duck!!`, `duck`, 6)                     // Starting another quicktime event with the same conditions. 
        if (riverSuccess === true) {                                                    // Returns pass / fail 

            console.log(`You made it out of the rapids safely`)
            console.log(`${characterObjects.name} keeps paddling until reaching the end of the river`)
            bearCave()
        }
    }
}

if (riverSuccess === false) {                               //if user fails any of the quicktime events they get Loser prompt         
    loseHealth(10)
    characterObjects.gold -= 25
    console.log(`You get knocked off your boat and washed up on the shore. ${characterObjects.name} notices he lost all his gold. Bummer!`)
    console.log(`You dust your self off and head towards Bear Cave`)
}


const wolfPack = () => {

}



function bearCave () {
    console.log(`Youre entering the Bear Cave`)
    console.log(`As you walk, you come across a bear.`)
    console.log(`get ready for a fight...`)


    let bearFight = quickTime(`The bear charges you and swipes you with its claw`, `dodge away`, 6)
    if (bearFight === false) {
        loseHealth(15)
    }
    bearFight = quickTime(`It now tries to bite your face`, `push away`, 6)
    if (bearFight === false) {
        loseHealth(15)
    } 

    
}