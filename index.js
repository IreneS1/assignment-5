
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product

let number1 = parseInt(prompt("Give me a number")); 
let number2 = parseInt(prompt("Give me an other number"));
const multiplication = (number1,number2) => {
  
  let stored = number1; 
  for (let i = 1; i < number2; i++){
    stored += number1
  } return stored;
}

const answer1 = multiplication(number1,number2)
console.log('answer1', answer1)

const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1




//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters

var words = prompt("write something").toLowerCase().split('');
var vowels = ['a', 'e', 'i', 'o', 'u']
var userVowels = []
var userConson =[]
let answer2 = "";
console.log(words);

for (let i = 0; i < words.length; i++) {
let character = words[i];
if ((character === ('a')) || (character === 'e') || (character === 'i') || (character === 'o') || (character === 'u')){
  userVowels.push(character);
} else if (character === (' ')){
  spaces.push(character);
}
else {userConson.push(character)}
}

var first = prompt("Type 'vowels' if wanting first or 'consonants' if wanting first in array").toLowerCase();
 if (first === "vowels") {
  answer2 = `${userVowels}, ${userConson}`;
   console.log(`these are vowels ${userVowels}`);
   console.log(`these are constantants ${userConson}`);
 } 
 
 if (first === "consonants") {
  answer2 = `${userConson}, ${userVowels}`;
   console.log(`these are constantants ${userConson}`);
   console.log(`this is vowels ${userVowels}`);
 }

 //const answer2 = vowelOrConsonant(userVowels, userConson);

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2




//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins


let playerName = prompt("What's your name?");
let guessTheNumber = Math.floor(Math.random() * 40) + 10;
console.log(guessTheNumber);
let playerGuess;
let answer3;

let playerInfo = {
  name: "",
  lives: 3,
  fail_numbers:[]
};

playerInfo["name"] = playerName;


for (let i = 0; i < 3; i++){
  let playerGuess = prompt("Guess a number between 10 - 50! You have three tries!");
  if (playerGuess !== guessTheNumber) {
    playerInfo.fail_numbers.push(playerGuess)
  }
}

if (playerGuess === guessTheNumber) {
  alert(`congratulations ${playerInfo.name.toUpperCase()}, you guessed the right number!`);
  answer3 = `congratulations ${playerInfo.name.toUpperCase()}, you guessed the right number!`;
} else {
  alert(`Sorry, you lose ${playerInfo.name}... Here are your guesses: ${playerInfo.fail_numbers} And here is the correct number: ${guessTheNumber}`);
  answer3 = `Sorry, you lose ${playerInfo.name}... Here are your guesses: ${playerInfo.fail_numbers} And here is the correct number: ${guessTheNumber}`;
}
console.log(playerInfo.fail_numbers);
console.log(playerInfo);


const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3



//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"

const library = [
  {
      title:  'The Road Ahead',
      author: 'Bill Gates',
      libraryID: 1254
  },
  {
      title: 'Walter Isaacson',
      author: 'Steve Jobs',
      libraryID: 4264
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      libraryID: 3245
  }];

let property = prompt("Type 'title', 'author', or 'id' depending which property you want listed first.")

console.log(property);
// variables
var text = '';
/*
console.log(Object.values(library));*/
if (property === "title") {
 for (let i = 0; i < library.length; i++) {
   var txt = `${library[i].title}; ${library[i].author}; ${library[i].libraryID} `;
   text += txt
 }
}

if (property === "author") {
 for (let i = 0; i < library.length; i++) {
   var txt = `${library[i].author}; ${library[i].title}; ${library[i].libraryID} `;
   text += txt
 }
}

if (property === "id") {
 for (let i = 0; i < library.length; i++) {
   var txt = `${library[i].libraryID}; ${library[i].title}; ${library[i].author} `;
   text += txt
 }
}

console.log(text);


const answer4 = text

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4
