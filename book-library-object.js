const library = {
    books: [
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 }
    ]
};

let myArray = library.books;



for (let i = 0; i < myArray.length; i++) {
    for (key in myArray[i]) {
        
    }
    console.log("title:", myArray[i].title);
    console.log("author:",myArray[i].author);
    console.log("year:", myArray[i].year);
}

