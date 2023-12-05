export function readData(component, data) {
    $(component).append(
        `<div class="col-6 col-md mb-3">
<a href="/views/book-description.html?id=${data.id}">
    <img class="img-book-shelf" src="${data.cover}" alt="">
</a>
</div>`
);
}