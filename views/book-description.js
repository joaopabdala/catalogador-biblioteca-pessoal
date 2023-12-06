var urlParams = new URLSearchParams(window.location.search);

        var idGet = urlParams.get('id');

        let storedArray = JSON.parse(localStorage.getItem('shelf')) || [];

        if (storedArray.includes(idGet)) {
            $('.add-shelf').text('Livro já está na estante').attr('class', 'btn bg-primary text-danger d-none d-md-block add-shelf') 
            $('.add-shelf2').text('Livro já está na estante').attr('class', 'btn bg-primary text-danger d-flex d-md-none add-shelf') 
        }

        $('.add-shelf').attr('value', idGet);
        $('.add-shelf, .add-shelf2').on('click', function () {

            if (!storedArray.includes(idGet)) {
                storedArray.push(idGet);
            }

            localStorage.setItem('shelf', JSON.stringify(storedArray));

            $('.add-shelf').text('Livro já está na estante').attr('class', 'btn bg-primary text-danger d-none d-md-block add-shelf')
            $('.add-shelf2').text('Livro já está na estante').attr('class', 'btn bg-primary text-danger d-flex d-md-none add-shelf') 

        })

        $.ajax({
            url: 'http://localhost:3000/livros/',
            data: {
                id: idGet
            },
            success(data) {
                $('#book-name').text(data[0].title)
                $('#author').text(data[0].author)
                $('#book-name2').text(data[0].title)
                $('#author2').text(data[0].author)
                $('#description').text(data[0].description)
                $('#pages').text(data[0].pages)
                $('#isbn').text(data[0].ISBN)
                $('#book-cover').attr("src", data[0].cover)
            }
        }
        )