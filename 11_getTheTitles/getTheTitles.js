const getTheTitles = function(books) {
    let bookTitlesCounter;
    const bookTitleArray = [];

      for(bookTitlesCounter = 0; bookTitlesCounter <=books.length-1; bookTitlesCounter++){
        
        bookTitleArray.push(books[bookTitlesCounter].title);
    }
    return bookTitleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
