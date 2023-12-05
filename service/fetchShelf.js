import { readData } from "./readData.js"


export function fetchShelf(component, id) {
    $.ajax({
        url: `http://localhost:3000/livros/${id}`,

        success(data) {
            readData(component, data)
        }
    })

}