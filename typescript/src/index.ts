const enum size { small, medium, large };

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void;
}

const employee: Employee = {
    id: 1,
    name: '',
    retire: (date: Date) => {
        console.log(date);
    }
};

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

function kgToLbs(weight: number | string): number {
    //narrowing
    if(typeof weight === 'number') {
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2;
    }
}