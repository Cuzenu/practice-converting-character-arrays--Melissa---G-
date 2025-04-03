/*
// Using Arrays Lesson 4 Practice

let chars = ["J", "S", " ", "R", "o", "c", "k", "s"];
// remove all separators and join in 1 string

let result = chars.join("");
console.log(result);

// Create a new variable called "name" and assign it the string: "JavaScript"
let name = "JavaScript";

// Split the string into an array called individChars
let individChars = name.split("");

console.log(individChars);
*/

/* Task 1: Decode the Following Reversed Messages
Use .split(''), reverse.(‘’) and .join('') to convert messages between strings and arrays dynamically. Then log the messages.
*/

//Task 1: Decode the Following Reversed Messages
// Message 1: " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC"
let firstMessage = "!yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC"

let firstMessageReversed = firstMessage.split("").reverse().join("");
console.log(firstMessageReversed);


//2. Message 2: "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB"
let secondMessage = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB"

let secondMessageReversed = secondMessage.split("").reverse().join("");
console.log(secondMessageReversed);

//3. Message 3: "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY"
let thirdMessage = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY"

let thirdMessageReversed = thirdMessage.split("").reverse().join("");
console.log(thirdMessageReversed);

//4. Message 4: ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ"
let fourthMessage = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ"

let fourthMessageReversed = fourthMessage.split("").reverse().join("");
console.log(fourthMessageReversed);


/* Task 2: Write your own reverse messages
1. First, write your own short messages of inspiration (without reversing them).
2. Then, use .split(''), reverse.(‘’) and .join('') to convert messages between
strings and arrays dynamically so that you have a reverse output.
3. Then log the messages.
*/

// Step 1: Log your own short messages of inspiration
let firstQuote = "If you have a dream, don’t wait. Act.";
let secondQuote = "You can die anytime, but living takes true courage.";
let thirdQuote = "Listen To My Story. This May Be Our Last Chance.";

console.log("\nQuotes: \n1. " + firstQuote + "\n2. " + secondQuote + "\n3. " + thirdQuote);

// Step 2: Split, reverse, and join the messages

let firstQuoteReversed = firstQuote.split("").reverse().join("");
let secondQuoteReversed = secondQuote.split("").reverse().join("");
let thirdQuoteReversed = thirdQuote.split("").reverse().join("");

// Step 3: Log the messages

console.log("\nReversed Quotes: \n1. " + firstQuoteReversed + "\n2. " + secondQuoteReversed + "\n3. " + thirdQuoteReversed);