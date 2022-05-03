// REPLACE few same elements /!*$/

function remove(string) {  
    return string.replace(/!*$/, '');
  }


console.log(remove("Hi!"))
console.log(remove("Hi!!!"))
console.log(remove("!Hi"))
console.log(remove("!Hi!"))
console.log(remove("Hi! Hi!"))
console.log(remove("Hi"))

// ///////////////////////////


function remove2(string) {
    while (string && string.slice(-1) == '!') {
        string = string.slice(0, -1)
    }
    return string
}

console.log(remove2("Hi!!! hii!!!!!"))