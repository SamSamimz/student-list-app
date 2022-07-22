//Selecting all elements we should need
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const isbn = document.querySelector('#isbn');
const form = document.querySelector('#book-form');
const bookList = document.querySelector('#book-list');


form.addEventListener('submit', (e) => {
    ////Preventing the default behavior of the form
    e.preventDefault();
    //Validation
    if (title.value === '' || author.value === '' || isbn.value === '') {
        alert('Please fill in all fields');
    } else {
        const book = {
            title: title.value,
            author: author.value,
            isbn: isbn.value,
        }

        ///Clearing the form after ssubmitting
        title.value = '';
        author.value = '';
        isbn.value = '';
        //create a new html table element(tr)
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger delete">X</a></td>`;

        //Appending the row to the table
        bookList.appendChild(row);


        //Deleting the book
        const deleteBtn = document.querySelector('.delete');
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.parentElement.remove();
            const show_alert = document.querySelector('.show-alert');
            const create_alert = document.createElement('div');
            const alert_text = document.createTextNode('Data Deleted');
            create_alert.className = 'alert alert-danger';
            create_alert.appendChild(alert_text);
            show_alert.appendChild(create_alert);
            setTimeout(() => {
                create_alert.remove();
            }, 2000)
        });
    }

});
