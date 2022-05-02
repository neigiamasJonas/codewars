// push into array

function monkeyCount(n) {
    monkeys = [];

    for (let i = 1; i < n+1; i++) {
        monkeys.push(i)
    }
    return monkeys
    }

 console.log(monkeyCount(5))