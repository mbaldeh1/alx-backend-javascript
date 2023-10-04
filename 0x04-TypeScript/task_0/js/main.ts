export interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const firstStudent: Student = {
	firstName: "Abiodun",
	lastName: "Shittu",
	age: 28,
	location: "Lagos, Nigeria",
};

const secondStudent: Student = {
	firstName: "Yomi",
	lastName: "Iyikuro",
	age: 29,
	location: "Toronto, Canada",
};

const studentList: Student[] = [firstStudent, secondStudent];
