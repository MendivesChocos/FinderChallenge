/*
  constants and global functions
*/

var JSON_FILE = '/books-schema.json';

/*
 @method loadJSON
 source: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", JSON_FILE, true);
    xobj.onreadystatechange = function(){
        if(xobj.readyState == 4 && xobj.status == "200"){
            //var content = JSON.parse(xobj.responseText);
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
};


function deploy(idList) {
  var idNum = 'fila'+idList;
  document.getElementById(idNum).style.display = 'block';

}


function hide(idList){
  var idNum = 'fila'+idList;
	document.getElementById(idNum).style.display = 'none';

}


function init() {

  var idList = 0;
  var actual_JSON;

      loadJSON(function(response) {
      // Parse JSON string into object
       actual_JSON = JSON.parse(response);
       var arrListBooks = [];
       $.each(actual_JSON.data, function(idx, obj) {
         arrListBooks.push(obj);
         //console.log(arrListBooks[idx]);
         $(`<div id="booksLibraryOne" class="col-sm-6 col-md-4 ">
               <div class="thumbnail booksLibraryOne">
                 <div class="caption">
                   <h3>${arrListBooks[idx].title}</h3>
                   <p class="ajust">${arrListBooks[idx].teaser}</p>
                 </div>
               </div>
             </div>
           `).appendTo('#blocksBooks');
       })



      $.each(actual_JSON.entities.categories, function(idx, obj) {

        $(`<li id="${idx}" class="">
            <a onmouseover="deploy(${idx});"  href='${obj.url}'>${obj.label}
            </a>
          </li>
          `).appendTo('#listCat');
      });


      $.each(actual_JSON.entities.saved, function(idx, obj) {
        idList++;
        $(`<li id="${idx}" class="">
            <a onmouseover="deploy(${idx});"  href='${obj.url}'>${obj.label}
              <div onmouseout="hide(${idx});" class="col-md-offset-2" style="display:none;" id="fila${idx}">
                <span>Editar</span>
                <span>Eliminar</span>
              </div>
            </a>

          </li>

          `).appendTo('#list');

      });
    });

  };

$(document).on('ready',init())
