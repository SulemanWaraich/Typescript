// Generics

function logString(arg: string) {
    console.log(arg);
    return arg;
}

function logNumber(arg: number) {
    console.log(arg);
    return arg;
}

function logArray(arg: any[]) {
    console.log(arg);
    return arg;
}

function logAnything<T>(arg: T): T {
    console.log(arg);
    return arg;
}

logAnything(['hello']);

interface HasAge {
    age: number;
}

function getOldest<T extends HasAge>(people: T[]): T {
    return people.sort((a, b) => b.age - a.age)[0];
}

const people: HasAge[] = [{ age: 30 }, { age: 40 }, { age: 10 }];

interface Player {
    name: string;
    age: number;
}
const players: Player[] = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 35 },
    { name: 'Joe', age: 16 },
];
// Assertion
// const person = getOldest(players) as Player;

const person = getOldest(people);
// Generics
person.age;

interface IPost {
  title: string;
  id: number;
  description: string;
}

interface IUser {
  id: number;
  name: string;
  age: number;
}

const fetchPostData = async (path: string): Promise<IPost[]> => {
    const response = await fetch(`http://example.com${path}`);
    return response.json();
};

const fetchUsersData = async (path: string): Promise<IUser[]> => {
    const response = await fetch(`http://example.com${path}`);
    return response.json();
};

const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
    const response = await fetch(`http://example.com${path}`);
    return response.json();
}

(async () => {
    // const posts = await fetchPostData('/posts');
    const posts = await fetchData<IPost[]>('/posts');
    posts[0];
})();