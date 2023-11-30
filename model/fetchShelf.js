function readData(component, data) {
    $(component).append(`<div class="col-6 col-md mb-3">
<a href="/views/book-description.html?id=${data.id}">
    <img class="img-book-shelf" src="${data.cover}" alt="">
</a>
</div>`);
}

export function fetchShelf(component, id) {
    $.ajax({
        url: `http://localhost:3000/livros/${id}`,

        success(data) {
            readData(component, data)
        }
    })

}