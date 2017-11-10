$(document).ready(function(){
        var url= 'http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/getMainCategory';
        $.ajax({
          type: 'POST',
          url: url,
          // send the id from localstorage to API.
          data: {id: localStorage.getItem('warehouse_Loc') },
          success: function(wb){
            console.log(wb);
            for(i in wb.allcat){
              var maincat = wb.allcat[i];
              console.log(maincat);
              $("#maincat_row").append('<div id="columns" class="col-md-4 col-md-4 col-xs-12 thumb">\
                <p id="result"><button class="main_item" id='+maincat.id+'>'+ maincat.name + '</button></p>\
                </div>');
            } 
           }
        });
        $(document).on("click", ".main_item", function(e){
          var id = $(this).attr('id');
          // store ID of main category in storage
          localStorage.setItem('main_cat',id);
          window.location.href = "../static/./sub_cat.html";
        });
        $("#textInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#maincat_row div#columns").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
});