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
