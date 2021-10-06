const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let x = 0;
while(x < ingredients.length){
  console.log(ingredients[x]);
  x++
}

console.log("\n");

for(let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

console.log("\n");

for(let i = ingredients.length-1; i >= 0; i--){
  console.log(ingredients[i]);
}