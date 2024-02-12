interface User {
	readonly _id: number;
	name: string;
	age: number;
	mail?: string;
	getMark(): number;
	finalGrade(marks: number): string;
}

let Nishut: User = {
	_id: 16,
	name: "Nishut",
	age: 25,
	mail: "nishut@gmail.com",
	getMark: () => {
		return 50;
	},
	finalGrade: (marks: 50) => {
		return "B+";
	},
};

//  class Admin{
//     public name: string
//     private age: number
//     mail?: string
//  }

class Admin {
	constructor(public name: string, private age: number, mail?: string) {}
}
