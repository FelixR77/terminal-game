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
    attack: 25,
    sneak: 1,
    inventory: {
        potion: [],
        gold: 45,
        weaponArray: 3,
    },
    ingredients: []
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








// This if statement creates the first branching path.
// Archer path 
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


// Rogue path
if (characterObjects.class === "rogue") {
    console.log(`${characterObjects.name} is hiding in a tree stalking a deer.`)
    console.log(`As the deer comes closer ${characterObjects.name} prepares to attack the deer`)
    console.log(`when suddenly a monster runs by and scares the deer away`)
    console.log(`The monster then comes to attack ${characterObjects.name}!!`)


    let success = quickTime(`Run away`, `D`, 5)
    if (success === true) {
        success = quickTime(`Throw a dagger at the monster`, `E`, 5)
        if (success === true) {

            console.log(`You defeated the monster!! You have looted 50 gold and a health potion`)
            characterObjects.inventory.gold += 50
            characterObjects.inventory.potion.push(`Health Potion`)
            console.log(`${characterObjects.name} hears more monsters coming. He starts to run toward safety`)

        }
    }


    console.log(`You defeated the monster!! You have looted 50 gold and a health potion`)
    characterObjects.inventory.gold += 50
    characterObjects.inventory.potion.push(`Health Potion`)
    console.log(`${characterObjects.name} hears more monsters coming. He starts to run toward safety`)
}

// Swordsman path
if (characterObjects.class === "swordsman") {
    console.log(`${characterObjects.name} is setting up camp for the night.`)
    console.log(`${characterObjects.name} hears rustling. ${characterObjects.name} picks up his sword `)
    console.log(`Suddenly a monster runs by and charges toward ${characterObjects.name}!!`)

    let success = quickTime(`Run away`, `D`, 5)
    if (success === true) {
        success = quickTime(`Use the sword to attack the monster`, `E`, 5)
        if (success === true) {

            console.log(`You defeated the monster!! You have looted 50 gold and a health potion`)
            characterObjects.inventory.gold += 50
            characterObjects.inventory.potion.push(`Health Potion`)
            console.log(`${characterObjects.name} hears more monsters coming. He starts to run toward safety`)

        }
    }

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
    wolfPack()
}


function wolfPack() {
    console.log(`While on your journey you run into a wolf pack`)


    let wolfFight = quickTime(`Alpha wolf tries assert dominance over you`, `puff chest`, 6)
    if (wolfFight === false) {
        characterObjects.defense = characterObjects.defense / 2;
        console.log(`${characterObjects.name} realizes he a total beta. -10 aura`)
    }
    wolfFight = quickTime(`Wolf pack attacks all at once`, `spinning leg whip`, 10)
    if (wolfFight === false) {
        loseHealth(15)
    }
    wolfFight = quickTime(`${characterObjects.name} grabs a lock of wolf fur`, `grab wolf fur`, 8)
    if (wolfFight === false) {
        loseHealth(15)
    }
    wolfFight = quickTime(`Run for your life`, `run real real fast`, 10)
    if (wolfFight === false) {
        loseHealth(15)
    }


    console.log(`You escaped the wolfs safely with the fur you need`)
    console.log(`And now you head over to the Elfs`)
    characterObjects.ingredients.push(`Fur`)
    if (characterObjects.ingredients[0] != `Mushroom`) {
        bearCave()
    }

}



function bearCave() {
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
    bearFight = quickTime(`Rush past to grab a mushroom`, `grab mushroom`, 6)
    if (bearFight === false) {
        loseHealth(15)
    }
    bearFight = quickTime(`Run past the bear to escape`, `run real fast`, 6)
    if (bearFight === false) {
        loseHealth(15)
    }


    console.log(`You escaped the bear safely with the mushrooms you need`)
    console.log(`And now you head over to the Elfs`)
    characterObjects.ingredients.push(`Mushroom`)
    if (characterObjects.ingredients[0] != `Fur`) {
        wolfPack()
    }
}

// Merchant Experience
console.log(`Along your journey towards the elf forest you find a Merchant`)
console.log(`Would you like shop with the merchant? (Yes / No)`)
const visitMerchant = prompt(`> `)
if (visitMerchant === `Yes`) {
    console.log(`You stop by the merchant and browse their wares`)
    console.log(`You see the Merchant is selling:`)
    console.log(`1. Health Potion (10g)`)
    console.log(`2. Armor (25g)`)
    if (characterObjects.class === `archer`) {
        console.log(`3. Arrows (5g) - ${characterObjects.name} has ${characterObjects.inventory.weaponArray} arrows`)
    }
    console.log(`Type "leave" if you want to exit`)


    function merchant() {
        console.log(`${characterObjects.name} has ${characterObjects.inventory.gold}g`)
        console.log(`what would you like to purchase?`)
        const purchase = prompt(`> `)
        if (purchase === `1` && characterObjects.inventory.gold >= 10) {
            console.log(`${characterObjects.name} bought a Health Potion!`)
            characterObjects.inventory.potion.push(`Health Potion`)
            characterObjects.inventory.gold -= 10
            merchant()                                                                  // This creates a recursive function because it loops to the begining of the function after user input
        } else if (purchase === `2` && characterObjects.inventory.gold >= 25) {
            console.log(`${characterObjects.name} bought a Armor!!`)
            characterObjects.defense += 2
            characterObjects.inventory.gold -= 25
            merchant()
        } else if (purchase === `3` && characterObjects.class === `archer` && characterObjects.inventory.gold >= 5) {
            console.log(`${characterObjects.name} bought a Arrows!`)
            characterObjects.inventory.weaponArray += 1
            characterObjects.inventory.gold -= 5
            merchant()
        } else if (purchase === `leave`) {
            console.log(`You are leaving the shop`)
        } else {
            console.log(`Invalid Input. Try again!`)
            merchant()
        }
    }
    merchant()

}
else {
    console.log(`You chose to skip past the Merchant and continue on your way.`)
}


console.log(`You head on your way to the Elf forest`)
console.log(`You are met with a band of Elves`)
console.log(`You tell them you need their leaf to save the Father Tree`)
console.log(`They say: "You can have it, but you have to fight us for it!!"`)
console.log(`The battle begins!!`)



function bossFight() {
    console.log(`You have ${characterObjects.health} health`)
    console.log(`Enemy has ${monsters.elf.health} health`)
    console.log(`What would you like to do?`)
    console.log(`Attack`)
    console.log(`Inventory`)
    if (characterObjects.class === `archer`) {
        console.log(`Shoot from distance`)
    }
    const bossInput = prompt(`> `)
    if (bossInput === `Attack`) {
        monsters.elf.health -= characterObjects.attack
        if (monsters.elf.health > 0) {
            loseHealth(monsters.elf.attack)
            if (characterObjects.health > 0) {
                bossFight()
            } else {
                die()
            }
        } else {
            win()
        }

    } else if (bossInput === `Inventory`) {
        function checkInventory() {
            console.log(`You check your Inventory. You have:`)
            console.log(`${characterObjects.inventory.weaponArray} arrows`)
            console.log(`${characterObjects.inventory.potion.length} Health Potions`)
            console.log(`What would you like to do?`)
            console.log(`1. Use Potion`)
            console.log(`2. Exit inventory`) 
            const inventoryInput = prompt(`> `)
            if (inventoryInput === `1` && characterObjects.inventory.potion.length > 0) {
                characterObjects.health += 50
                characterObjects.inventory.potion.pop()
                console.log(`${characterObjects.name} gained 50 health!!`)
                checkInventory()
            } else if (inventoryInput === `2`) {
                bossFight()
            } else {
                console.log(`Invalid prompt. Try Again!!`)
                checkInventory()
            }
        }
        checkInventory()
    } else if (bossInput === `Shoot from distance` && characterObjects.class === `archer`) {
        if (characterObjects.inventory.weaponArray > 0) {
            monsters.elf.health -= characterObjects.attack
            if (monsters.elf.health > 0) {
                bossFight()
            } else {
                win()
            }
        }

    } else {
        console.log(`Invalid Input: Try Again!!`)
        bossFight()
    }

}

bossFight()

function win() {
    console.log(`You have defeated the elves, the Elf Leader giver you the leaf`)
    console.log(`You finally have all of the ingredients needed to save Father Tree`)
    console.log(`You win!! Congratulations!`)
    prompt(`press any key to close the game.`)
}

function die() {
    console.log(`Wow you lost.. got your butt kicked by the elves`)
    console.log(`They dont give you the leaf now Father Tree dies because of your weakness you pathetic coward`)
    console.log(`Game OVER`)
    prompt(`Press any key to end the game`)
}

