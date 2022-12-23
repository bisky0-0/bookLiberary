let addBtn = document.getElementById("add-btn");
let form = document.getElementById("form");
let cancleBtn = document.getElementById("cancle");
let removealeBook = document.getElementById("removable");


//add the form 
function getForm() {
    form.style.cssText = `top: 100px; 
    z-index: 10;
    width:470px;
    height: 800px;
    
    flex-flow: column;`;
    removealeBook.style.display = "none";
}
addBtn.addEventListener('click', getForm)

//remove the form
function removeForm() {
    form.reset()
    form.style.cssText = `top: 0; 
    z-index: 0;
    width:0;
    height: 0;
    transition: 0.5s`;
}
cancleBtn.addEventListener('click', removeForm);


//now we are in the form
let title = document.getElementById("form-title");
let author = document.getElementById("form-author");
let type = document.getElementById("form-category")
let pagesNum = document.getElementById("form-pages");
let radioContainer = document.getElementsByClassName("radio");
let readIt = document.getElementsByClassName("radio-btn");
let submitBtn = document.getElementById("add-the-book");
let booksContainer = document.getElementById("books-container");

//styling radios
for (const radioCont of radioContainer) {
    radioCont.addEventListener('click', function () {
        for (const radioChild of radioCont.children) {
            radioChild.click() == true;
        }
    })
}


//adding book
function Book(title, author, type, num, read) {
    this.title = title;
    this.author = author;
    this.type = type;
    this.num = num;
    this.read = read;
}

const booksLiberary = [];

submitBtn.addEventListener("click", addingBook);

let radioValue;
for (const radioBtn of readIt) {
    radioBtn.addEventListener('click', function () {
        radioBtn.parentElement.focus() == true;
        return radioValue = radioBtn.value;
    })
}


function addingBook(event) {
    if (form.checkValidity()) {
        event.preventDefault();
        let newBook = Object.create(Book.prototype);
        newBook = new Book(title.value, author.value, type.value, Number(pagesNum.value), radioValue);
        booksLiberary.push(newBook);
        console.log(booksLiberary);
        //adding book to html file
        booksContainer.style.cssText = `justify-content: flex-start`
        let newBookContainer = document.createElement("div");
        newBookContainer.classList.add("book");
        booksContainer.appendChild(newBookContainer);

        let bookNew = document.createElement("div");
        switch (type.value) {
            case "horror": bookNew.classList.add("book-added", "horror");
                break;
            case "fashion": bookNew.classList.add("book-added", "fashoin")
                break;
            case "philosophy": bookNew.classList.add("book-added", "philo");
                break;
            case "adventure": bookNew.classList.add("book-added", "adventure");
        }
        newBookContainer.appendChild(bookNew);


        let bookTitle = document.createElement("p")
        bookTitle.classList.add("title");
        bookNew.appendChild(bookTitle);
        bookTitle.textContent = newBook.title;


        let bookPOne = document.createElement("p");
        let br = document.createElement("br")
        let bookPOneSpan = document.createElement("span");
        bookNew.appendChild(bookPOne);
        bookPOne.textContent = `written by`;
        bookPOne.appendChild(br);
        bookPOne.appendChild(bookPOneSpan);
        bookPOneSpan.textContent = newBook.author;

        let bookPages = document.createElement("p");
        bookNew.appendChild(bookPages);
        let bookPagesNum = document.createElement("span");
        bookPages.textContent = `pages `;
        bookPages.appendChild(bookPagesNum);
        bookPagesNum.textContent = newBook.num

        let readBook = document.createElement("p")
        bookNew.appendChild(readBook);
        readBook.textContent = newBook.read == "read" ? "read it" : "didn't read it";

        let bookButtons = document.createElement("div");
        bookButtons.classList.add("book-buttons")
        newBookContainer.appendChild(bookButtons);

        let removeBtn = document.createElement("button")
        removeBtn.classList.add(`${type.value}-remove`);
        removeBtn.textContent = "remove"
        bookButtons.appendChild(removeBtn);

        let editBtn = document.createElement("button");
        editBtn.classList.add(`${type.value}-edit`);
        editBtn.textContent = newBook.read == "read" ? "unread" : " mark read"
        bookButtons.appendChild(editBtn);


        removeBtn.addEventListener('click', function () {
            booksLiberary.splice(booksLiberary.indexOf(newBook), 1)
            booksContainer.removeChild(newBookContainer)
        });

        editBtn.addEventListener('click', function () {
            readBook.textContent = readBook.textContent == "read" ? "didn't read" : "read";
            editBtn.textContent = editBtn.textContent == "unread" ? "mark read" : "unread";
        });

        removeForm();
    }
}