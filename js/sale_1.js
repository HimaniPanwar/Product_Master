$(document).ready(function(){
		$("#prodList,#backSearch").hide();
		var searchValue = $("#textInput").val();
        localStorage.setItem('prodSearch',searchValue);
        var id= localStorage.getItem('ware_house');

       $("#textInput").keypress(function(){
       	 
         var url= 'http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/searchProducts';
         console.log(localStorage.getItem('ware_house'));
         $.ajax({
           type: 'POST',
           url: url,
           // send the id from localstorage to API.
           data: {id: localStorage.getItem('ware_house') , keyword: localStorage.getItem('prodSearch')},
           success: 
           function(wb){
              $("#dropdown").html(' ');
              for(i in wb.allproducts){
              	var $prod = wb.allproducts[i];
                $("#dropdown").append('<option id="autocomplete" value="'+ $prod.name+'"/>');
              }
            }
        });
       });
       
       $('button.click').click(function(){
           localStorage.setItem('warehouse',id);
           var searchVal = $("#textInput").val();
           localStorage.setItem('prod_search',searchVal);
           $("#searchBar").hide();
           $("#prodList,#backSearch").show();
           $("#result").html(' ');

           var url= 'http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/searchProducts';
           console.log(localStorage.getItem('warehouse'));
           $.ajax({
             type: 'POST',
             url: url,
             // send the id from localstorage to API.
             data: {id: localStorage.getItem('warehouse') , keyword: localStorage.getItem('prod_search')},
             success: 
             function(wb){
              console.log(wb);
              for(i in wb.allproducts){
                $prod = wb.allproducts[i];
                 $("#result").html('<tr id="myTable"><td class="product" id='+ $prod.id + '>'+ $prod.name + '</td><td id="sizeCol">' + $prod.size + '</td><td id="sizeQuat">\
                  ' + ' '+ '0.'+$prod.quantity+ '</td></tr>').show(50);
              }
            }
        });
       });
        $(document).on("click","#backSearch",function(e){
            $("#searchBar").show();
            $("#prodList,#backSearch,#message,#result_1").hide();
            $("#textInput").val(' ');
        });

        $(document).on("click", ".product", function(e){
           var id1 = $(this).attr('id');
           $("#message").show();
           $("#message").text("Item selected successfully");
           // store ID of sub category in storage
           localStorage.setItem('prod',id1);
           console.log(id1);
        });

        $(document).on("click","#submit",function(e){
          var url= 'http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/sale'
          $.ajax({
            type: 'POST',
            url: url,
            data: {id: localStorage.getItem('prod') ,quantity: $('#textInput_1').val()},
            success: 
                function(wb){
                    console.log(wb);
                    $("#result_1").show();
                    $('#result_1').text(wb.message);    
                }
            
          });
          setTimeout(function () {
             $("#result_1,#prodList,#backSearch,#message").hide();
             $("#searchBar").show();
             $("#textInput_1,#textInput").val(' ');
             $("#result").val(' ');
          }, 3000); 
        });  
        $("#salelink").click(function(){
           localStorage.setItem('ware_house',warehouse_id);   
        });
        $("#returnlink").click(function(){
           localStorage.setItem('ware_house',warehouse_id);
        });              
  }); 