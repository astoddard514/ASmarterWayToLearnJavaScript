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