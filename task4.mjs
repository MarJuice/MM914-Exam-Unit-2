// Function tests:

import books from "./books.json" with { type: "json" };

// Return only books starting with The
console.log("Book titles starting with 'The': ", find("title", "The", "start"));

// Return only books written by authors with a t in their name
console.log("Books written by authors with 't' in their names: ", find("author", "t", "contains"));

// The number of books written after 1992
console.log("The number of books written after 1992: ", find("publication_year", 1992, "after"));

// The number of books written before 2004
console.log("The number of books written before 2004: ", find("publication_year", 2004, "before"));

// Return the isbn number of all the books for a given author.
console.log("ISBN of books by Neil Gaiman: ", find("author", "Neil Gaiman", "isbn"));

// List books alphabetically assending or descending
console.log("Books sorted alphabetically: ", sort("title", "asc"));

// List books chronologically assending or descending


// List books grouped by author last name


// Lits books grouped by author first name


//#region TASK: My books they are a mess

// FORMAT: find(type, value, options);
// type: title, author, publication_year, isbn
// value: search value
// options: start, contains, after, before, bookKey

function find(type, value, options) {
    let matches = [];
    let count = 0;
    
    for (let book of books) {
        if (options == "start" && book[type].includes(value) && book[type].indexOf(value) == 0) {
            matches.push(book["title"]);
        } else if (options == "contains"){
            if (book[type].includes(value)) {

                matches.push(book["title"] + " by " + book["author"]);
            }
        } else if (options == "after") { // Check if book published after given year
            if (book[type] >= value) {
                count++;
            }
        } else if (options == "before") { // Check if book published before given year
            if (book[type] <= value) {
                count++;
            }
        } else if (options) { // Return the book key of option from value (title, year, author or isbn)
            if (book[type] == value) {
                matches.push(book[options]);
            }
        } 
    }

    if (count > 0) return count;

    return matches;
}

function sort(by, order) {
    let sorted = [];

    if (by == "title") {
        sorted = books.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
        });
    } else if (by == "publication_year") {
        sorted = books.sort((a, b) => {
            if (a.publication_year < b.publication_year) {
                return -1;
            }
            if (a.publication_year > b.publication_year) {
                return 1;
            }
        });
    } else if (by == "author") {
        sorted = books.sort((a, b) => {
            if (a.author < b.author) {
                return -1;
            }
            if (a.author > b.author) {
                return 1;
            }
        });
    }

    if (order == "asc") {
        return sorted;
    } else if (order == "desc") {
        return sorted.reverse();
    } 
}

//#endregion 