$('#ISBN').mask('000-00-0000-000-0');

function submitForm(){
    const formData = {
        title: $('#title').val(),
        author: $('#author').val(),
        pages: $('#pages').val(),
        description: $('#description').val(),
        ISBN: $('#ISBN').val(),
        cover: $('#cover').val()
    }
    
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/livros/',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function (data) {
            console.log('Dados enviados com sucesso:', data);
        },
        error: function (error) {
            console.error('Erro ao enviar dados:', error);
        }
    });
}

$('#new-book-form').submit(submitForm)