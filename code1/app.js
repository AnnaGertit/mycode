'use strict';
/*
создать кв матр 5х5, найти сумму эл главной и побочной диагонали
*/

function mainDiagonal(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i][i]; 
    }
    return sum;
}

function sideDiagonal(array) {
    let sum = 0;
    let i = 0;
    for (let j = array.length -1 ; j >= 0; j-- ) {
        sum += array[i][j];
        i++;
    }
    return sum;
}

const array = [
    [6,7,3,1,9],
    [1,7,2,4,5],
    [9,8,5,2,3],
    [2,6,3,8,5],
    [8,7,4,5,3]
]

console.log(`
сумма главной диагонали: ${mainDiagonal(array)} 
сумма пабочной диагонали: ${sideDiagonal(array)}
сумма двух диагоналей: ${mainDiagonal(array) + sideDiagonal(array)}
`);