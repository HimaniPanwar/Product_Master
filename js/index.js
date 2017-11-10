 $(document).ready(function(){
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
        }
       /* window.onclick = function(event) {
           if (event.target == modal) {
              modal.style.display = "none";
           }
        }*/

         $.getJSON('http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/getWarehouses',
          function(wb){
            for(i in wb.allwarehouses){
              var warehouse = wb.allwarehouses[i];
              console.log(warehouse);
              $("#warehouse").append('<div id="columns" class="col-md-4 col-md-4 col-xs-12 thumb">\
                <p id="result"><button class="warehouse_place animated fadeIn" id='+warehouse.id+'>'+ warehouse.name + '</button></p>\
                </div>');
            } 
          }
        );
         $(document).on("click", ".warehouse_place", function(e){
          var id = $(this).attr('id');
          // store ID of main category in storage
          localStorage.setItem('warehouse_Loc',id);
          window.location.href = "http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/main_cathtml";
        });
});