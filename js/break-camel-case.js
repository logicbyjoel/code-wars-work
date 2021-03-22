//break-camelcse

// function solution(string) {
//     let splitArray = [];
//     do {
//         let tempStr = ''JSON;
//         for (a of string) {
//             if (a === a.toLowerCase()) {
//                 tempStr = a;
//             } else {
//                 tempStr = a;
//             }
//         }
//         splitArray.push(tempStr);
//     } while (!a === a.toLowerCase())
//     console.log(`splitArray: ${splitArray}`);

// }

function solution(string) {
    let splitArray = string.split("");
    for (let i = 0; i < splitArray.length; i++) {
        // check if each element is uppercase char
        if (splitArray[i] === splitArray[i].toUpperCase()) {
            splitArray[i] = " " + splitArray[i];
        }
    }
    // join all chars in splitArray
    return splitArray.join("");
}

// alternate soltion
// function solution(string) {
//     return (string.replace(/([A-Z])/g, ' $1'));
// }
// // refer to : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n


// sample tests
Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
