const User = {
	name: "Nishut",
	age: 25,
	married: false,
};

function createUser({ name: string, age: number, married: boolean }) {}

 
type User = {
	name: string,
	age: number,
	married: boolean
};

function createUser1(user: User) {}
function createUser2(user: User): User {
    return {name: "Nishut", age: 25, married: false}
}

type Userr = {
    readonly _id: number
	name: string,
	age: number,
	married: boolean,
    city?: string
};

let User1: Userr ={
   _id: 10,
   name: "Nishut",
   age: 25,
   married: false 
}