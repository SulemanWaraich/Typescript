let num1 = 1;

function calculate(num1: number, num2: number) {
    return num1 + num2;
}

console.log(calculate(num1, 3));

function getTotal(numbers: Array<number>) {
    return numbers.reduce((acc, item) => {
        return acc + item;
    }, 0);
}

console.log(getTotal([3, 2, 1]));

const user1 = {
    firstName: 'John',
    lastName: 'Doe',
    role: 'professor',
};
console.log(user1);

// number
// string
// arr[]
// boolean

// Type alias

type User = {
    name: string;
    age: number;
    address?: string;
};

function login(userData: User): User {
    return userData;
}

const user = {
    name: 'Rakesh K',
    age: 30,
};

console.log(login(user));

type ID = number | string;

const userId: ID = '123';