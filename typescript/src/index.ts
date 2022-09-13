const enum size { small, medium, large };

const mySize: size = size.large;
console.log(mySize)

function calculateTax(income: number, taxYear = 2022): number {
    if(taxYear < 2022) {
        return income * 1.2;
    } else {
        return income * 1.3;
    }
}

console.log(calculateTax(10_000));