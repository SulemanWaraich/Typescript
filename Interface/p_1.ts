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
