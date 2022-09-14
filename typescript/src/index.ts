const enum size { small, medium, large };

const employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void;
} = {
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