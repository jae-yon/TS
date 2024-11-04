type StrOrNum = number | string;

let numStr : StrOrNum = '100';

const convertToString = (val : StrOrNum) => {
	return val;
}

const convertToNumber = (val : StrOrNum) : number => {
	return Number(val);
}

const showValue = (val : StrOrNum) : void => {
	if (typeof val === 'number') {
		console.log(val + 10);	
	} else {
		console.log(val);
	}
}

console.log(convertToString(numStr));
console.log(convertToNumber(numStr));

/*

enum GenderType {
  Male,
  Female,
}

interface User {
	id : number;
	name : string;
	age : number;
	sex : GenderType;
	job : string;
}

const person : User = {
	id: 1,
	name: "kim",
	age: 20,
	sex: GenderType.Male,
	job: "programmer",
}

function student() : User {
	return person;
}

console.log(student());

*/