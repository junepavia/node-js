"use strict";
;
const mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
console.log(calculateTax(10000, 2022));
//# sourceMappingURL=index.js.map