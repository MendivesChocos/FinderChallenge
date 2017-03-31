function searchForm(){

    loadJSON(function(response) {

      var arrListBooks = [];

      var actual_JSON = JSON.parse(response);
      // manipulacion del autocompletado con un max de 3
      // letras y que muestre 7 listas, como lo espeficado
      $.each(actual_JSON.data, function(idx, obj) {
        arrListBooks.push(obj.title);
        //console.log(arrListBooks[idx]);
      })

      var inputL = document.getElementById("input");
      var awesomplete = new Awesomplete(inputL,{
      	minChars: 3,
      	maxItems: 7,
      });

      awesomplete.list = arrListBooks;

      // manipulación del boton, al escribir en la
      // caja de texto
      $('#search').prop('disabled', true);
        $('#input').keydown(function(){
          var name = jQuery.trim($("#input").val());

           if (name.lehgth != 0) {
              $('#search').prop('disabled', false);

            }else {
              $('#search').prop('disabled', true);
            }
        })

      })

      // varificar los cambios realizados en la caja de texto
      $('#input').change(function(){
      //your codes
        var name = jQuery.trim($("#input").val());
        if (name.lehgth == 0) {
           $('#search').prop('disabled', true);
         }

      });
}
