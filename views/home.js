import { fetchData } from '../service/fetchDb.js'

$.ajax({
  url: 'http://localhost:3000/livros',

  success(data) {
    fetchData('#books-home', data.length);
  }
})

