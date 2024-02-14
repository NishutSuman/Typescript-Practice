type User = {
	name: string;
	id: number;
};
type Admin = {
	username: string;
	id: number;
};

let Nishut: User | Admin = { name: "Nishut", id: 10 };

Nishut = { username: "Nishut", id: 20 };

// Array

let arr: string[] | number[] = [1, 2, 3];
let arr1: string[] | number[] = ["1", "2", "3"];
let arr2: (string | number)[] = ["1", "2", 3];

// Dicriminated Unions

interface Circle {
	kind: "circle";
	radius: number;
}
interface Square {
	kind: "square";
	side: number;
}
interface Rectangle {
	kind: "rectangle";
	length: number;
	width: number;
}

type Shape = Circle | Square | Rectangle;

function getArea(shape: Shape) {
	switch (shape.kind) {
		case "circle":
			return Math.PI * shape.radius ** 2;

		case "square":
			return shape.side ** 2;

        case "rectangle":
            return shape.length * shape.width;
        
		default:
			const _defArea: never = shape;
			return _defArea;
	}
}
