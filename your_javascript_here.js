// Variables
//## Section 1. Creating the hero object
//Declare the global variable hero and assign it an object. This object has the following keys and values:

let hero = {
  name: 'mazza', //1. `name` which is a string (you choose the name)
  heroic: true,  //2. `heroic` which is a boolean
  inventory: [], //3. `inventory` which is an array
  health: 20,   //4. `health` which is a number
  weapon: {      //5. `weapon` which is an object (it has some stats in the form keys and values)
    type: 'sword', //6. `weapon` has a key `type` which is a string
    damage: 8}, //7. `weapon` has a key `damage` which is a number
};

//If you've implemented these instructions you console in the browser should read: `Hero tests passed! `
// ---------------------------- SECTION ONE -- DONE! --------------------------------

// Game logic
//## Section 2. Implementing the game logic
//#### Declare the following functions in global scope: `rest, pickUpItem, dealDamage, equipWeapon, doBattle`
// - `rest` is a function that restores a creatures health to 10
//  1. `rest` should have one parameter: `creature`. You can assume that creature has the same structure as your `hero` object
//  2. modify the `health` of the `creature` object by assigning it `10`
//  3. return the `creature`object from the function

function rest(creature) {
  creature.health = 10;
  return creature;
}

//  - `pickUpItem` is a function that adds an item to the inventory of a creature
//  1. `pickUpItem` should have two parameters: `creature` and `item`. You can assume that creature has the same structure as your `hero` object and that `item` has the same structure as a `weapon` object
//  2. modify the `inventory` of the `creature` by adding the item to it.
//  3. return the `creature` object from the function

function pickUpItem(creature, item) {
  creature.inventory.push(item);
  return creature;
}

//- `dealDamage` is a function that subtracts one creatures weapon damage from another creatures health
//  1. `dealDamage` should have two parameters: `attacker` and `defender`. You can assume that both have the same structure as your `hero` object.
//  2. modify the `health` value of the `defender` object by subtracting the value of the attacker's weapon damage.
//  3. return the `defender` object from this function.

function dealDamage(attacker, defender) {
  defender.health = defender.health-attacker.weapon.damage;
  return defender;
}

//- `equipWeapon` is a function that takes a changes the weapon of the creature to one that is in their inventory and removes that weapon from their inventory.
//  1. `equipWeapon` should have two parameters. `creature` and `index`. You can assume that creature has the same structure as your `hero` object and that `index` is a number.
//  2. modify the `weapon` of the `creature` by assigning it the value of the `index`th element of the `inventory`
//  3. modify the creature's `inventory` by removing the `index`th element from it
//  4. return the `creature` object from the function

function equipWeapon(creature, index) {
  creature.weapon = creature.inventory[index];
  creature.inventory.splice(index, 1);
  return creature;
}

//- `doBattle` is a function that takes two creatures, the first of which is a hero, which deal damage to each other until one of them dies.
//  1. `doBattle` should have two parameters `heroicCreature` and `creature`. You can assume that both have the same structure as your `hero` object.
//  2. make a guard clause which checks if `heroicCreature` is `heroic`. If `heroicCreature` is not `heroic` return `null` from this function.
//  3. while `heroicCreature` and `creature` have health above zero they take turns dealingDamage to eachother:
//  `heroicCreature` deals damage to `creature` first. If `creature` survives it deals damage to `heroicCreature`.
//  4. at the end of `doBattle` check if `heroicCreature` has health above zero; if so return it from the function. Otherwise give the user feedback about the death of their hero with a popup.

function doBattle(heroicCreature, creature) {
  if (heroicCreature.heroic !== true) { return null };

  while (heroicCreature.health > 0 && creature.health > 0) {
    dealDamage(heroicCreature, creature);

    if (creature.health > 0) {
        dealDamage(creature, heroicCreature);
    }
  }

  if (heroicCreature.health > 0) {
      return heroicCreature;
  } else {
    window.alert('Ohh nooo! Your hero died.');
  }
}

//If you've implemented these instructions you console in the browser should read: `Function tests passed! `
// ---------------------------- SECTION TWO -- DONE! --------------------------------

// UI
//### SECTION 3 ###
//- Add a picture of a bed or an inn to your page.
//When it is clicked by the user the `rest` function should get called with `hero` as an argument.
//Put a console.log in your code to verify that `rest` gets called correctly.

//applying something new I've  just found on google: creating an img inside an div and creating a class on img element to manipulate external css :)

let imgInn = document.createElement("img");
imgInn.src = "images/my_inn_rest.png";
imgInn.className = "img_inn";
let imgContainer = document.getElementById("container_div_img");
imgContainer.appendChild(imgInn);

imgInn.addEventListener('click', function() {
console.log(rest(hero));
});


//- Add a picture of a weapon to the page. //When it is clicked by the user the `pickUpItem` should get called with `hero` as a first argument.
//The second argument should be an object. The object should have a `type` key with a string value and //a `damage` key with a number value (like a weapon object).
//Put a console.log in your code to verify that `pickUpItem` gets called correctly.
let imgWeapon = document.createElement('img');
imgWeapon.src = "images/weapon_arrow_bow.png";
imgWeapon.className = "img_arrow_bow";
imgContainer.appendChild(imgWeapon);

imgWeapon.addEventListener('click', function() {
  console.log(pickUpItem(hero, { type: 'bow and arrow', damage: 10 } ));
});

//- Add a picture of an enemy to the page.
//When it gets clicked by the user the `doBattle` function should get called with `hero` as a first argument.
//The second argument should be an object (the enemy). This object needs a `health` key with a number value and a `weapon` key which is an object. This `weapon` object has a `damage` value which should be a number.
//Put a console.log in your code to verify that `doBattle` gets called correctly.
//(TASK NOT COMPLETED) ----- :( -----

let imgEnemy = document.createElement('img');
imgEnemy.src = "images/enemy.png";
imgEnemy.className = "img_enemy";
imgContainer.appendChild(imgEnemy);
//imgWeapon.addEventListener('click', function() {
  //console.log(doBattle(hero, { health: 8, ...
  //....I've GOT CONFUSED WITH OBJECT INSIDE OBJECTS inside another one - ? -
  // - I've DECIDED THAT I REALLY NEED TO REST.


//- Add a picture of a backpack When it gets clicked by
// the user the `equipWeapon` function should get called with `hero` as the first argument.
// The second argument should be `window.prompt()` that asks the user for the index of the weapon
// they want to equip. Put a console.log in your code to verify that `doBattle` gets called correctly.

let imgBackpack = document.createElement('img');
imgBackpack.src = "images/backpack.png";
imgBackpack.className = "img_Backpack";
imgContainer.appendChild(imgBackpack);

imgBackpack.addEventListener('click', function() {
  console.log(equipWeapon(hero, window.prompt('Which index to you want to equip?')));
});

//console.log(doBattle); -- doBatlle is not being called because I haven't completed previous task.


//- Link an external stylesheet and make all the pictures the same size. (---DONE!---)
