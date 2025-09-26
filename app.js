const prompt = require (`prompt-sync`) ();

function quickTime(event, action, time) {
    console.log(`Quick time event is coming!! Get ready...`)
    prompt(`Press any key to continue: `)
    let start = Date.now()                   // setting the starting time of function to right now
    const userInput = prompt(`${event}`)    // ask for user input 
    if (userInput === action && (Date.now() - start < time*1000)) {  //takes the difference between the time
        return true                                                  //compares it to the time parameter
    }  else { return false} 

}

const characterObjects = {
    health: 100, 
    defense: 0,
    attack: 0,
    sneak: 0, 
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

if (characterObjects.class === "archer") {
    console.log(`${characterObjects.name} is stalking a deer.`)
    console.log(`As ${characterObjects.name} prepares to shoot the deer`)
    console.log(`A monster runs by and scares the deer away`)
    console.log(`The monster then comes to attack ${characterObjects.name}!!`)


                let success = quickTime(`Press D: `,`D`, 5)    // Creating the "Success" variable and initiating the quicktime event
                if (success === true) {                         // Checks if the user has succeed in the quicktime event
                    success = quickTime(`Press E: `,`E`, 5)     // Starting another quicktime event with the same conditions. 
                    if (success === true) {                     // Returns pass / fail 
                        success = quickTime(`Press A: `,`A`, 5) // Does it again 
                        if (success === true) {                 // if user succeeds in every quicktime event they get these logs
                            console.log(`You defeated the monster!! You have looted 50 gold and a health potion`)
                            characterObjects.inventory.gold += 50 
                            characterObjects.inventory.potion.push(`Health Potion`)
                            console.log(`${characterObjects.name} hears more monsters coming. He starts to run toward safety`)
                        }
                    } 
                }

                if ( success === false) {                       //if user fails any of the quicktime events they get Loser prompt         
                    console.log(`Loser`)
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
