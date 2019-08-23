function cakes(recipe, available) {
  // TODO: insert code
let ingredientsChecklist = {}

for(key in recipe) {
  if(!available[key]) {
    return 0
  }

  let canDo = Math.floor(available[key] / recipe[key]);
  ingredientsChecklist[key] = canDo;
  
}
let result = Object.values(ingredientsChecklist)

return Math.min(...result);

}

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

cakes(recipe, available)
//  2, 'Wrong result for example #1');

// let recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
// let available = {sugar: 500, flour: 2000, milk: 2000};

// cakes(recipe, available)
//  0, 'Wrong result for example #2');