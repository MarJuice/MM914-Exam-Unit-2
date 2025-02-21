// Function tests:

import books from "./books.json" with { type: "json" };

// Return only books starting with The
console.log("\nBook titles starting with 'The': ", find("title", "The", "start"));

// Return only books written by authors with a t in their name
console.log("\nBooks written by authors with 't' in their names: ", find("author", "t", "contains"));

// The number of books written after 1992
console.log("\nThe number of books written after 1992: ", find("publication_year", 1992, "after"));

// The number of books written before 2004
console.log("\nThe number of books written before 2004: ", find("publication_year", 2004, "before"));

// Return the isbn number of all the books for a given author.
console.log("\nISBN of books by Neil Gaiman: ", find("author", "Neil Gaiman", "isbn"));

// List books alphabetically ascending or descending
console.log("\nBooks listed alphabetically: ", sortBooks("title", "asc"));

// List books chronologically ascending or descending
console.log("\nBooks listed chronologically: ", sortBooks("year", "desc"));

// List books grouped by author last name
console.log("\nBooks grouped by author last name: ", sortBooks("lastName", "asc"));

// List books grouped by author first name
console.log("\nBooks grouped by author first name: ", sortBooks("firstName", "asc"));


//#region TASK: My books they are a mess

// FORMAT: find(type, value, options);
// type: title, author, publication_year, isbn
// value: search value
// options: start, contains, after, before, bookKey

function find(type, value, options) {
    let matches = ["\n"];
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

    return matches.join("\n");
}

// FORMAT: sortBooks(by, order);
// by: title, year, lastName, firstName
// order: asc, desc
function sortBooks(by, order) {
    let sorted = ["\n"];
    let firstName, lastName;
    
    for (let book of books) {
        
        if (by == "title") { 
            sorted.push(`${book.title} (${book.publication_year}) by ${book.author}`); 
        } else if (by == "year") { 
            sorted.push(`${book.publication_year}: ${book.title} by ${book.author}`); 
        } else if (by == "lastName") { 
            firstName = book.author.split(" ")[0]; // First word of author string
            lastName = book.author.split(" ")[1]; // Second word of author string
            if (firstName.includes("Translated")) { // Check if translated is in author name
                firstName = book.author.split(" ")[2] + " (Translation)"; // Skip past "Translated by" and move it to the end
                lastName = book.author.split(" ")[3];
            } else if (lastName.includes("(")) { // Check if author has one name
                lastName = firstName;
                firstName = book.author.slice([firstName.length + 1]);
            }
            sorted.push(`${lastName} ${firstName} - ${book.title} (${book.publication_year})`); 
        } else if (by == "firstName" || by == "author") { 
            firstName = book.author.split(" ")[0];
            lastName = book.author.split(" ")[1];
            if (firstName.includes("Translated")) { 
                firstName = book.author.split(" ")[2];
                lastName = book.author.split(" ")[3] + " (Translation)";
            } else if (lastName.includes("(")) {
                lastName = book.author.slice([firstName.length + 1]);
            }
            sorted.push(`${firstName} ${lastName} - ${book.title} (${book.publication_year})`); 
        } else if (by == "isbn") { 
            sorted.push(`${book.isbn}: ${book.title} by ${book.author} (${book.publication_year})`);
        }
    }

    if (order == "asc") { sorted.sort(); }
    if (order == "desc") { sorted.sort().reverse(); }

    return sorted.join("\n");
}
//#endregion 