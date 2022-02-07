// 1 - Alerts

alert("Thanks for your input!")

/* alert is a keyword, or a word that has special meaning in JavaScript. Inside the parentheses is a text string or string. JavaScript ignores spaces, so they wouldn’t hurt, but keep this code without spaces to comply with style conventions. The semicolon ends every statement (even if it doesn’t need it, it’s a good practice to have. window.alert is another, more formal way to write the same statement, but we can stick to short form. Single quotations would also work, but we will stick with double quotations.*/

// 2 - Variables for Strings

var name = "Mark";

/* A variable is created when you write `var` followed by the name you choose to give it. It takes on a particular value when you assign the value to it. `var name = "Mark";` Variable names can be anything that makes sense.*/ 

// I can come along and code: 

name = "Ace"; // note: trickiness of global JS variable conflict 

/* It will overwrite the value of var name, which we can test by printing it. Notice how the keyword was not needed in that line. The variable was declared earlier, and `var` does not need to be used in subsequent assignments. You can also declare and assign in separate lines (with any amount of code between):*/

var nationality;
nationality = "U.S.";

var pet = "Nutmeg";
alert(pet);

// 3 - Variables for Numbers

var weight = 150;
weight + 25

// No quotes for numbers. A zip code would have quotes because JavaScript would handle it like a string of text.  Cannot start a variable name with a number.

var originalNum = 23;
var newNum = originalNum + 7;

// JavaScript can also handle expressions made up of just variables:

var originalNum = 23;
var numToBeAdded = 7;
var newNum = originalNum + numToBeAdded;

// A variable can be used in calculating its own new value.

var originalNum = 90;
originalNum = originalNum + 10;

// JavaScript cannot sum a string and a number

alert(144);

// or

var caseQty = 144;
alert(caseQty);

// alert will convert the number to a string and display it.

// 4 - Variable Names Legal and Illegal

abstract 
alert 
as 
boolean 
break 
byte 
case 
catch
char 
class 
continue 
const 
debugger 
default 
delete 
do 
double 
else 
enum 
export 
extends 
false 
final 
finally 
float 
for 
function 
goto 
if 
implements 
import 
in 
instanceof 
int 
interface 
is 
long 
namespace 
native 
new 
null 
package 
private 
protected 
public 
return 
short 
static 
super 
switch 
synchronized 
this 
throw 
throws
transient 
true 
try 
typeof 
use 
var 
void 
volatile 
while 
with 

// Variable rules:

// - No spaces
// - Letters, numbers, dollar signs, and underscores only
// - Keywords can be mixed into other unique naming (i.e. `myVar`)
// - Capital letters are fine, but you have to be consistent with them!
// - camelCase
// - Create descriptive variable names.

// 5 - Math expressions: Familiar operators

// Wherever you can use a number, you can use a math expression. `+`, `-`, `*`, and ` 

// `%` is the *modulus operator*. It gives you the remainder when division is executed. if numbers divide evenly, the modulus operation will return 0. 

var whatsLeftOver = 10 % 3;

// `whatsLeftOver` has a value of 1.

// 6 - Math expressions: Unfamiliar operators

// `num++;` is the same as `num = num + 1;` and increments.

// `num--;` decrements

// Werid situation when new variable increments upon previous variable. Only previous variable gets incremented! Not the new variable. 

var num = 1;
var newNum = num++;

// is actually like:

var num = 1;
var newNum = num;
num++;

// If you want to increment *both* you need to arrange the pluses *before* the variable.

var num = 1;
var newNum = ++num;

// is a short way to say

var num = 1;
num++;
var new Num = num;


// It works the same way with minuses.

// 7 Math expressions: Eliminating ambiguity

// Use parantheses in complex math operations to clear up precedence confusion.

// 8 - Concatenating text strings

alert("Thanks, " + userName + "!");

// or

var message = "Thanks, ";
var banger = "!";
alert(message + userName + banger); 

// 9 - Prompts 

// Prompt code is like alert code, with two differences. In a prompt, you need a way to capture the user’s response: declare a variable with an equal sign to store the response. In a prompt, you can specificy a second optional string that will be the default reponse displayed in the prompt field.  

var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);


// JavaScript will return string answers even if a user provides a number, which means that “3” + 1 will equal “31” and not 4. 

// `window.prompt` is the same as `prompt`

// 10 - if statements

var x = prompt("What does a dog wag?");
if (x === "tail") {
	alert("Correct!");
}

// Notice the: 

// - space after *if*
// - condition enclosed in parentheses
// - triple equals signs
// - curly brackets
// - 2-space indent of the action that executes if the condition is true
// - lack of semicolon for complex statement with curly brackets.

// variables instead of strings

var correctAnswer = "tail";
if (x === correctAnswer) {
  alert("Correct!");
}

// multiple statements execute after condition is met

var correctAnswer = "tail";
if (x === correctAnswer) {
	score++;
	userIQ = "genius";
	alert("Correct!");
}

// # 11 - Comparison operators

=== // equality operator

if (fullName === "Mark" + " " + "Myers") {
if (fullName === firstName + " " + "Myers") {
if (fullName === firstName + " " + lastName) {
if (totalCost === 81.50 + 135) {
if (totalCost === materialsCost + 135) {
if (totalCost === marterialsCost + laborCost) {
if (x + y === a - b) {

!==      // not equal to

>        // is greater than

<        // is less than

>=       // </> is greater than or equal to

<=       // is less than or equal to

// 12 - *if...else* and *else if* statements

// `if...else`

var x = prompt("What does a dog wag?");
if (x === "tail") {
	alert("Correct!");
}
if (x !== "tail" {
	alert("Wrong answer");
}

// is more concise using a an else clause

if (x === "tail") {
	alert("Correct!");
}
else {
	alert("Wrong answer");
}

// Same styling as if, else clauses can also have multiple statements. 

// `else if`

var correctAnswer = "tail";
if (x === correctAnswer) {
  alert("Correct!");
}
else if (x === "tale") {
	alert("Incorrect but close");
}
else {
	alert("Incorrect");
}

// 13 - Testing sets of conditions

&& // and

if (weight > 300 && time < 6) {
	alert("Come to our tryout!");
}
else {
	alert("Come to our cookout!");
}

// You can change any number of conditions together.

|| // or

if (SAT > avg || GPA > 2.5 || sport === "football") {
	alert("Welcome to Bubba State!");
else {
	alert("Have you looked into ___?");

// You can combine any number of `&&` and `||` conditions.  Use sets of parentheses to clarify which conditions are pairing up.

// 14 - *if* statements nested

if ((x === y || a === b) && c === d) {
	g = h;
}
else {
	e = f;

// can also be written

if (c === d) {
	if (x ===y) {
		g = h;
	}
	else if (a === b) {
		g = h;
	}
	else {
		e = f;
	}
}
else {
	e = f;
}

// In the second way, if the first `c === d` statement is false, none of the nested blocks run.

// 15 - Arrays

var cities = ["Atlanta",  "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

cities[0] // is “Atlanta”

cities[1] // is “Baltimore”

alert("Welcome to " + cities[3]);

var mixedArray = [1, "Bob", "Now is", true];

/* - Index starts at 0
   - Same naming rules as variables (abc123_$)
   - Makes sense to have plural names for arrays
   - Only need to declare the array once, like variables  */

   // 16 - Arrays: Adding and removing elements

   // You can define an empty array and separately assign items to the array.
   
   var pets = [];
   
   pets[0] = "dog";
   pets[1] = "cat";
   pets[2] = "bird";
   pets[3] = "lizard";
   pets[6] = "snake";     // skipping index locations is allowed, but the empty spots will return as undefined
   
   // If you assign a new value to an array element that already has one, the old value is replaced by the new one. 
   
   pop // removes the last element of an array.
   
   var lastElement = pets.pop();
   
   push // adds one or more elements to the end of an array. 
   
   pets.push("fish", "ferret");