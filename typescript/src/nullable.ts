function greet(name: string | null | undefined) {
    if(name)
    return name.toUpperCase();
    else
    return 'Hola'
}

console.log(greet(null));