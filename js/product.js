 $(document).ready(function(){
        var url= 'http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/getProducts';
        $.ajax({
          type: 'POST',
          url: url,
           // send the id from localstorage to API.
          data: {id: localStorage.getItem('sub_cat')},
          success: 
            function(wb){
              console.log(wb);
              for(i in wb.allproducts){
                $prod = wb.allproducts[i];
                /*$("#prod_item").append('<div class="col-md-4 col-md-4 col-xs-12 thumb">\
                <p id="result"><button class="product" id='+$prod.id+'>'+$prod.name+'<hr class="segment"><p class="productD" id='+$prod.id+'><b>Size:</b>'+' '
                +$prod.size+'<br><b>Quantity:</b>'+' '+$prod.quantity+'</p></button></p>\
                </div>');*/
                 $("#result").append('<tr id="myTable"><td class="product" id='+ $prod.id + '>'+ $prod.name + '</td><td id="sizeCol">' + $prod.size + '</td><td>\
                  ' + ' '+ $prod.quantity+ '</td></tr>');
              }
            }
          });
      
      $(document).on("click", ".product", function(e){
        var id = $(this).attr('id');
        // store ID of sub category in storage
        localStorage.setItem('prod',id);
        window.location.href="../static/./inventory.html";
      });
      $("#textInput").on("keyup", function() {
         var value = $(this).val().toLowerCase();
         $("#result tr#myTable").filter(function() {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
         });
      });
});