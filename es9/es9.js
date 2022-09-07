const animals = {
    tiger: 20,
    lion: 10,
    monkey: 2
}

const { tiger, ...rest } = animals;

console.log(tiger, rest)