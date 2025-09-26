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


console.log(`Welcome to Scary Forest III. Press `)
