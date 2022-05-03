// REPLACE multiple letters   /[]/g   /[]/gi

function replace(string) {
    return string.replace(/[aeiouAEIOU]/g, '!');
}

console.log(replace("Hi!"))
console.log(replace("!Hi! Hi!"))
console.log(replace("aeiou"))
console.log(replace("ABCDE"))

// ////////////////////////////////////

function replace2(string) {
    return string.replace(/[aeiou]/gi, '!');
}

console.log(replace2("Hi!"))
console.log(replace2("!Hi! Hi!"))
console.log(replace2("aeiou"))
console.log(replace2("ABCDE"))

// ///////////////////////

// const replace3 = string => (string.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('');

const replace3 = string => (string.split('').map(raides => 'aioue'.includes(raides.toLowerCase()) ? "!" : raides)).join('');

console.log(replace3("Hi!"))
console.log(replace3("!Hi! Hi!"))
console.log(replace3("aeiou"))
console.log(replace3("ABCDE"))