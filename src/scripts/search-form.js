function searchForm(){

    loadJSON(function(response) {

      var arrListBooks = [];

      var actual_JSON = JSON.parse(response);
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

      $('#input').change(function(){
      //your codes
        var name = jQuery.trim($("#input").val());
        if (name.lehgth == 0) {
           $('#search').prop('disabled', true);
         }

      });
}
