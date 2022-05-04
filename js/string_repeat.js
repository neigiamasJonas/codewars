
//// REPEAT pakartoti viena is elementu n kartu / du nezinomieji

function repeatStr (n, s) {
    return s.repeat(n);
}

console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");

// ///////////////////////////

function repeatStr2 (n, s) {
    let str = '';

    for (let i = 0; i < n; i++) {
        str += s
    }
    return str
}

console.log(repeatStr2(3, "*"), "***");
console.log(repeatStr2(5, "#"), "#####");
console.log(repeatStr2(2, "ha "), "ha ha ");