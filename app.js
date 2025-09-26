const prompt = require (`prompt-sync`) ();


const characterObjects = {
    health: 100, 
    defense: 0,
    attack: 0,
    sneak: 0, 
    weaponType: "",
    inventory: {
        potion: [], 
        money: 0,
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
