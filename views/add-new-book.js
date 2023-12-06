$(document).ready(function() {
    $('#ISBN').mask('000-00-0000-000-0');


    

    $('#new-book-form').validate({
        ignore: [],
      rules: {
        title: {
          required: true,
          minlength: 1
        },
        author: {
          required: true
        },
        pages: {
          required: true,
          min: 1,
          max: 10000
        },
        ISBN: {
          required: true,

        },
        cover: {
          required: true
        }
      },
      messages: {
        title: {
          required: "Por favor, informe o título",
          minlength: "Nome muito curto"
        },
        author: {
          required: "Por favor, informe o autor"
        },
        pages: {
          required: "Por favor, informe o número de páginas",
          min: "O número de páginas deve ser no mínimo 1",
          max: "O número de páginas deve ser no máximo 10000"
        },
        ISBN: {
          min: "O ISBN deve conter 13 caractéres e seguir o padrão 000-00-0000-000-0"
        },
        cover: {
          required: "Por favor, informe o link da capa"
        }
      },
      submitHandler: function() {
        submitForm();
    },
    
});

    function submitForm() {
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
        success: function(data) {
          console.log('Dados enviados com sucesso:', data);
        },
        error: function(error) {
          console.error('Erro ao enviar dados:', error);
        }
      });
    }
  });