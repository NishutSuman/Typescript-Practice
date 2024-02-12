type User={
    name: string,
    id: number
}
type Admin={
    username: string,
    id: number
}

let Nishut : User|Admin = {name: 'Nishut', id:10}

Nishut={username: 'Nishut', id:20}

// Array

let arr: string[] | number[] =[1, 2, 3]
let arr1: string[] | number[]=["1", "2", "3"]
let arr2: (string | number)[]=["1", "2", 3]


