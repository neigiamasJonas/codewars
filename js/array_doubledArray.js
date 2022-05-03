
// pirmas variantas 'for'

function maps(x){
const doubled = [];

    for (let i = 0; i < x.length; i++) {
    // skaicius = x[i] * 2;
    doubled.push(x[i] * 2)
    }
    return doubled
}

console.log(maps([1, 2, 3]))
console.log(maps([5, 10, 20]))

// antras variantas 'forEach'

function maps2(x){
    const doubled = [];
    x.forEach((x) => {
        doubled.push(x * 2)
    });
    return doubled
}

console.log(maps2([1, 2, 3]))
console.log(maps2([5, 10, 20]))

// trecias variantas 'for of'

function maps3(x){
    const doubled = [];
    
        for (const number of x) {
        doubled.push(number * 2)
        }
        return doubled
    }
    
    console.log(maps3([1, 2, 3]))
    console.log(maps3([5, 10, 20]))

// ketvirtas variantas 'for in'

function maps4(x){
    const doubled = [];
    
        for (const i in x) {
            const number = x[i];
            doubled.push(number * 2)
        }
        return doubled
    }
    
    console.log(maps4([1, 2, 3]))
    console.log(maps4([5, 10, 20]))

    // penktas variabtas 'maps'

    function maps5(x){
        return x.map((x) => {
            const doubleNumber = x * 2;
            return doubleNumber
        })
    }

    console.log(maps5([1, 2, 3]))
    console.log(maps5([5, 10, 20]))
// ////////////////////////////
    function maps6(x){
        return x.map((x) => {
            return x * 2;
        })
    }
    console.log(maps6([2, 4, 6]))
// ////////////////////////////
    function maps7(x){
        return x.map((x) => x * 2)
    }
    console.log(maps7([2, 4, 6]))
