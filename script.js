// **Game Play of jQuery Fungus Fighter
    // Fight mutant fungus villains, with jQuery!
    // It is you versus the Freaky Fungus, an evil mycological menace from mars. 
    // Use your jQuery skills to dispatch attacks against your enemy. 
    // To win, the Freaky Fungus must have 0 hit points (HP) before you are out of attack points (AP).

/* 

** PART 1: HANDLE CLICK EVENTS - EVENTS TRIGGERED BY USERS / EVENT HANDLERS

 - [ ] 1. When you click an attack button:
    - [ ] a. Update state variable(s) to make the Freaky Fungus lose hit points (HP), 
            and to reduce your attack points (AP).
    - [ ] b. See Attacks below, for the attack points (AP) and hit points HP values of each attack
            - [ ] i. Arcane Scepter
                - AP Cost: 12
                - HP Damage: 14
            - [ ] ii. Entangle
                - AP Cost: 23
                - HP Damage: 9
            - [ ] iii. Dragon Blade
                - AP Cost: 38
                - HP Damage: 47
            - [ ] iv. Star Fire
                - AP Cost: 33
                - HP Damage: 25

- [ ] 2.  State may be held in one or more variables of your choosing

- [ ] 3. HP and AP values may not be negative (set to zero, if they would otherwise be negative)

** PART 2: STATE CHANGES TO THE DOM - RENDER!

- [ ] 4. Update the text for: 
    - [ ] a. Update the text above the attack buttons (eg, "100 AP")
    - [ ] b. Update the text above the enemy fungus (eg, "100 HP")

- [ ] 5. If the Freaky Fungus runs out of HP, the monster is dead and you win! 
    -[ ] a. Replace the walk class with a dead class on the freaky-fungus element, to make them fall over and die.

- [ ] 6. If you run out of AP, the monster wins and humanity is doomed 😢 
    - [ ] a. Replace the walk class with a jump class on the freaky-fungus element, to make them jump for the glory of the fungal race.
    
- [ ] 7. You may no longer attack, if AP is 0. 
    - [ ] a. Give all of the attack buttons a disabled attribute, so they may no longer be used.

*/

$(document).ready(onReady);

// ** PART 1: HANDLE CLICK EVENTS

// Keep track of state - global variables that are not confined to a specific function, object, etc. 
let playerAP = 100;
let fungusHP = 100;

const attacks = [
    {attackName: "Arcane Scepter", apCost: 12, hpDamage: 14},
    {attackName: "Entangle", apCost: 23, hpDamage: 9},
    {attackName: "Dragon Blade", apCost: 38, hpDamage: 47},
    {attackName: "Star Fire", apCost: 33, hpDamage: 25}
];

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    console.log('check if jQuery ready: ');
    // Set up EVENT LISTENERS - 
        // 'Hey jQuery! Listen for clicks on this target and if triggered, call this function.'
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!

    // Listen for 'click' on the following attack buttons
        // i. Arcane Scepter
        $('.attack-btn.arcane-scepter').on('click', arcaneScepterAttack);
        // ii. Entangle
        // iii. Dragon Blade
        // iv. Star Fire


    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

// Create EVENT HANDLERS - 

function arcaneScepterAttack() {
    // Update your state variable(s)
    if(playerAP && fungusHP) {
        playerAP -= 12;
        fungusHP -= 14; 
    }
    console.log('The amount of playerAP left: ', playerAP);

    console.log('The amount of fungusHP left: ', fungusHP);


    // Render your updated state
        // Call the render function to take the state data and convert it visually 
    render();

} //*end attackFungus


// ** PART 2: RENDER STATE CHANGES TO THE DOM
    // Updating the DOM. 
        // Take raw (state) data and convert it to something users can see. 
function render() {
    $('#ap-text-amount').text(playerAP);
    $('#ap-meter').val(playerAP);
    $('#hp-text-amount').text(fungusHP);
    $('#hp-meter').val(fungusHP);


} //*end render