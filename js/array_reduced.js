// REDUCE

function grow(x){
    return x.reduce((a, b) => a * b)
  }

console.log(grow([4, 1, 1, 1, 4]), 16)