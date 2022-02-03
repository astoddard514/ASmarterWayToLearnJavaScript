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

