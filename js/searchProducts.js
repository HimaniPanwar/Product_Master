$(document).ready(function(){
        $('.btn').click(function(){
         var url= 'http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/searchProducts';
         $.ajax({
           type: 'POST',
           url: url,
           // send the id from localstorage to API.
           data: {id: localStorage.getItem('warehouse_Loc') , keyword: localStorage.getItem('prod_search')},
           success: 
           function(wb){
              console.log(wb);
              for(i in wb.allproducts){
                $prod = wb.allproducts[i];
                 $("#result").append('<tr id="myTable"><td class="product" id='+ $prod.id + '>'+ $prod.name + '</td><td id="sizeCol">\
                  ' + $prod.size + '</td><td>' + ' '+ $prod.quantity+ '</td></tr>');
              }
            }
        });
      $(document).on("click", ".product", function(e){
        var id = $(this).attr('id');
        // store ID of sub category in storage
        localStorage.setItem('prod',id);
        window.location.href="http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/inventoryhtml";
      });
	});