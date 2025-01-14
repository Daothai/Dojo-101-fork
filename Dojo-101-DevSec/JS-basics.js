/* Javascript basics

sécurité: voir aussi `injection`, `XSS`, `CSRF` etc. dans les dossiers `pentest` et `DevSec`

*/

//afficher en console

console.log("hello");


//afficher en DOM (page web)


document.write('...Hello again!');


// variables


var aVariable;


// vairable block scope

 let myVariable;


// constante


const MY_VARIABLE = 123;


// arrays


let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan"];
iceCreamFlavors[3] // Pistachio
iceCreamFlavors[4] = "Butter Pecan"; //Changes "Neapolitan" to "Butter Pecan"
iceCreamFlavors.push("Mint Chip"); //add
iceCreamFlavors.length // 6 flavors, because you recently added "Mint Chip"
delete iceCreamFlavors[iceCreamFlavors.length-1]; //supprime
iceCreamFlavor.splice(2,1); // supprime array.splice(<position index, <number of elements to remove>)



// objets


const obj = { a: 3 };
obj.a = 5;


/* types

string, number, bigint, boolean, undefined, and symbol.

*/

/* operateur int

| Symbol | Description | Example |
|-------|--------------|----------|
| + | Addition | 1 + 2  //expected answer is 3 |
| - | Subtraction | 1 - 2 //expected answer is -1 |
| * | Multiplication |	1 * 2 //expected answer is 2 |
| / | Division | 1 / 2 //expected answer is 0.5 |
| % | Remainder |  % 2 //expected answer is 1 |

*/


// concatenation de strings


let myString1 = "Hello";
let myString2 = "World";
myString1 + ", " + myString2 + "!"; //Hello, World!


//# boolean


let myFalseBool = false


// fonctions


function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}


function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}


// Anonymous functions


setTimeout(
    function() { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)


setTimeout(
    () => { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)


// conditions

/* operateurs

| Symbol| Description | Example |
|--------|---------|-------|
| <| Less than: Compares two values and returns the true Boolean data type if the value on the left side is less than the right | 5 < 6 // true |
| <= | Less than or equal to: Compares two values and returns the true Boolean data type if the value on the left side is less than or equal to the right |	5 <= 6 // true|
| > |Greater than: Compares two values and returns the true Boolean data type if the value on the left side is larger than the right | 5 > 6 // false |
| >= | Greater than or equal to: Compares two values and returns the true Boolean data type if the value on the left side is larger than or equal to the right | 5 >= 6 // false |
| === |Strict equality: Compares two values and returns the true Boolean data type if values on the right and left are equal and are the same data type | 5 === 6 // false |
| !== |	Inequality: Compares two values and returns the opposite Boolean value of what a strict equality operator would return | 5 !== 6 // true|
| && |	Logical AND: Compares two Boolean expressions. Returns true only if both sides are true.	| (5 > 6) && (5 < 6 ) //One side is false, other is true. Returns false |
| \|\| |	Logical OR: Compares two Boolean expressions. Returns true if at least one side is true.	| (5 > 6) \|\| (5 < 6) //One side is false, other is true. Returns true |
| !|  Logical NOT: Returns the opposite value of a Boolean expression.	| !(5 > 6) // 5 is not greater than 6, but "!" will return true |

*/
// if else


let currentMoney = 1000;
let laptopPrice = 1500;

if (currentMoney >= laptopPrice) {
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
} else{
    //Condition was true. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}


// boucle for
 
for (let i = 0; i < 10; i++ ) {
  console.log(i);
}


// boucle while

//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}


// foreach

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number)); // 1 2 3 4 5



// find

let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
iceCreamFlavors.find(flavor => flavor === "Chocolate") // "Chocolate"


// filter


let iceCreamFlavors = [
  { name: "Chocolate", type: "Chocolate" }, 
  { name: "Strawberry", type: "fruit"}, 
  { name: "Vanilla", type: "Vanilla"}, 
  { name: "Pistachio", type: "Nuts"}, 
  { name: "Neapolitan", type: "Chocolate"}, 
  { name: "Mint Chip", type: "Chocolate"}
];
iceCreamFlavors.filter(flavor => flavor.type === "Chocolate") // [{ name: "Chocolate", type: "Chocolate" }, { name: "Neapolitan", type: "Chocolate"}, { name: "Mint Chip", type: "Chocolate"}]



// modifier les objets: map


let iceCreamFlavors = [
  { name: "Chocolate", type: "Chocolate" }, 
  { name: "Strawberry", type: "fruit"}, 
  { name: "Vanilla", type: "Vanilla"}, 
  { name: "Pistachio", type: "Nuts"}, 
  { name: "Neapolitan", type: "Chocolate"}, 
  { name: "Mint Chip", type: "Chocolate"}
];
iceCreamFlavors.map(flavor => {
  flavor.price = 1;
  return flavor;
}) // every item now has a new property price: 1


// Fetch (requete asynchrone)


fetch('https://url', {
method: 'POST',
mode: 'no-cors',
body:"data"
});


// XHR GET


function reqListener() {
  console.log(this.responseText);
}
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "http://www.example.org/example.txt");
req.send();


// XHR POST


var xhr = new XMLHttpRequest();
xhr.open("POST", yourUrl, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    value: value
}));


// valider un formulaire


function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}


/*html
<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>
*/

// soumettre le formulaire automatiquement

document.getElementById("myForm").submit();
