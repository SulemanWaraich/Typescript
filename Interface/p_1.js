var book = {
    name: 'xyz',
    price: 200,
    format: 'pdf',
    duration: 4,
};
console.log(book);
function userId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
userId(1);
function getFirstThree(x) {
    console.log(x.slice(0, 3));
}
getFirstThree([1,2,3,4,5]);
