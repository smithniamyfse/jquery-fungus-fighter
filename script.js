// **Game Play of jQuery Fungus Fighter
// Fight mutant fungus villains, with jQuery!
// It is you versus the Freaky Fungus, an evil mycological menace from mars. 
// Use your jQuery skills to dispatch attacks against your enemy. 
// To win, the Freaky Fungus must have 0 hit points (HP) before you are out of attack points (AP).

/* 
** HANDLE CLICK EVENTS

 - [ ] 1. When you click an attack button:
    - [ ] a. update state variable(s) to make the Freaky Fungus lose hit points (HP), 
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

    - [ ] c. State may be held in one or more variables of your choosing

    - [ ] d. HP and AP values may not be negative (set to zero, if they would otherwise be negative)

** RENDER STATE CHANGES TO THE DOM

- [ ] 3. Update the text for: 
    - [ ] a. Update the text above the attack buttons (eg, "100 AP")
    - [ ] b. Update the text above the enemy fungus (eg, "100 HP")

- [ ] 4. If the Freaky Fungus runs out of HP, the monster is dead and you win! 
    -[ ] a. Replace the walk class with a dead class on the freaky-fungus element, to make them fall over and die.

- [ ] 5. If you run out of AP, the monster wins and humanity is doomed 😢 
    - [ ] a. Replace the walk class with a jump class on the freaky-fungus element, to make them jump for the glory of the fungal race.
    
- [ ] 6. You may no longer attack, if AP is 0. 
    - [ ] a. Give all of the attack buttons a disabled attribute, so they may no longer be used.

*/

$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
