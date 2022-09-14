type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date()}
}

let customer = getCustomer(1);
// if (customer !== null && customer !== undefined);
//console.log(customer.birthday)

//Optional property access operator
console.log(customer?.birthday?.getFullYear());

//Optional element access operator
// for array customers?.[0]

//Optional call operator
// function?.('') only execute if actual function