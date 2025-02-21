
// Iteration 1: Names and Input
const hacker1 = 'acundo'
console.log('The driver´s name is ' +hacker1)

const hacker2 = 'Eli'
console.log('The navigator´s name is ' + hacker2)



// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
let finalName = ''
for (let i = 0; i < hacker1.length; i++) {
  let name = hacker1[i].toUpperCase()
  finalName += name + ''
  
}

console.log(finalName);

/* 3.2 */
let finalNameReverse = ''
for (let i = hacker2.length-1; i>= 0; i--) {
  let name = hacker2[i];
  finalNameReverse += name + ''
}

console.log(finalNameReverse)

/* 3.3 */
// const firstLeter = ''
// for (let i = 0; i < hacker1.length; i++) {
//   const element = array[i];
  
// }



const firstLeter = hacker1.charAt(0).toLowerCase()
const firstLeter2 = hacker2.charAt(0).toLowerCase()

if(firstLeter < firstLeter2) {
  console.log("The driver's name goes first")
} else if (firstLeter > firstLeter2) {
  console.log("Yo, the navigator goes first, definitely.")
} else {
  console.log("What?! You both have the same name?")
}
 
console.log(hacker1.localeCompare(hacker2))