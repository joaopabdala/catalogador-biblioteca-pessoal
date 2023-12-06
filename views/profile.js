import { fetchShelf } from '../service/fetchShelf.js'

    // localStorage.removeItem('shelf');
    let books = JSON.parse(localStorage.getItem('shelf'));

    books.forEach(book => {
      fetchShelf('#user-shelf', book);
    });

    