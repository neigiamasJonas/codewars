// Test and Match

//      'string'.match(/regex/);
//      /regex/.test('string');


// test
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./;
let result = unRegex.test(exampleStr);

console.log(result + " - Testas parodo tik ar yra ko ieskau stringe");
console.log("-------------------------------");

// match
let exampleStr1 = "Let's have fun with regular expressions!";
let unRegex1 = /.un/;
let result1 = exampleStr1.match(unRegex1);

console.log(result1 + " - Match parodo kiek randa match'u tame stringe");
console.log("-------------------------------");

// match global ir case insensitive

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result2 = quoteSample.match(vowelRegex);

console.log(result2);
console.log("-------------------------------");

// match tuos kuriu nenoriu rast

let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^ie]/gi; 
let result3 = quoteSample3.match(myRegex3); 

console.log(result3);
console.log("-------------------------------");

// match kur kartojasi raides ar skaiciai paeiliui

let difficultSpelling = "Mississippi";
let myRegex4 = /s+|p+/g;
let result4 = difficultSpelling.match(myRegex4);

console.log(result4);
console.log("-------------------------------");

// Match su * (option that matches characters that occur zero or more times)
let text = "<h1>Winter is coming</h1>";
let myRegex5 = /i*/g; // Change this line
let result5 = text.match(myRegex5);

console.log(result5)
console.log("-------------------------------");


// match *? kuris atranda maziausia verte "lazy match"
let text2 = "<h1>Winter is coming</h1>";
let myRegex6 = /<h[a-z]*?1>/; // Change this line
let result6 = text2.match(myRegex6);

console.log(result6)
console.log("-------------------------------");


// ieskoti pradzioj stringo ^

let caboose = "The last car on a train is the caboose";
let lastRegex = /^the/i; // Change this line
let result7 = lastRegex.test(caboose);

console.log(result7);

// ieskoti gale stringo $
let caboose2 = "The last car on a train is the caboose";
let lastRegex2 = /caboose$/; // Change this line
let result8 = lastRegex2.test(caboose2);

console.log(result8);
console.log("-------------------------------");

// \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. 
// Note, this character class also includes the underscore character (_).

let quoteSample9 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // 
let result9 = quoteSample9.match(alphabetRegexV2).length;

console.log(result9);

// \W yra atvirkscias \w


// {} yrasoma kiek raidziu turi kartotis is eiles. {3,} - minimum trys / {3,6} nuo triju iki 6
// let multipleHA = /ha{3}h/;


// match passwords that are greater than 5 characters long, and have two consecutive digits.
// /(?=\w{6})(?=\w*\d{2})/


// If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: 
// /P(engu|umpk)in/g


// Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner
// and it should make concessions for middle names
// /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;