//string-repeat kata

function repeatStr(n, s) {
    let repeated = s.slice();
    if (n == 1) {
        return s;
    }
    else if (n > 1) {
        for (let i = 1; i < n; i++) {
            repeated += s.slice();
        }
    }
    return repeated;
}

// alternate solution
// function repeatStr (n, s) {
//     return s.repeat(n);
//   }