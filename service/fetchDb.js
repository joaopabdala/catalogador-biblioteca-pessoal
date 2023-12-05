import { readData } from "./readData.js"

export function fetchData(component, n) {
    $.ajax({
        url: 'http://localhost:3000/livros',

        success(data) {
            for (let i = 0; i < n; i++) {
                readData(component, data[i])
            }
        }
    })
}