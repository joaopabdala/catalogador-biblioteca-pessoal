import { readData } from "./readData.js"

export function fetchLimited(component, n) {
    $.ajax({
        url: `http://localhost:3000/livros?_limit=${n}`,

        success(books) {
            books.forEach(book => {
                readData(component, book)
            });
            
        }
    })
}
