interface Book {
  name: string;
  price: number;
}

interface Ebook extends Book{
  format: string;
}

interface AubioBook extends Ebook{
  duration: number;
}


const book: AubioBook = {
  name: 'xyz',
  price: 200,
  format: 'pdf',
  duration: 4,
}

console.log(book);


type ID = number | string;

function userId(id: ID){
  if(typeof id === "string"){
    
    console.log(id.toUpperCase());
  }
  else{
    console.log(id);
  }
}

userId(1);


function getFirstThree(x: string | number[]){
    console.log(x.slice(0,3));
}

getFirstThree('number');