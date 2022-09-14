"use strict";
;
const employee = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
const mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
console.log(calculateTax(10000));
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
//# sourceMappingURL=index.js.map