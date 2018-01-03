 $(document).ready(function(){
    $(".js-example-basic-single").select2({
            tags: true,
            placeholder: 'Search'
           
    });
     var ar = [];
         var searchValue = $(".js-example-basic-single").val();
         localStorage.setItem('prodSearch',searchValue);
         var url= 'http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/searchProducts';
         console.log(localStorage.getItem('ware_house'));
         $.ajax({
           type: 'POST',
           url: url,
           // send the id from localstorage to API.
           data: {id: localStorage.getItem('ware_house') , keyword: localStorage.getItem('prodSearch')},
           success: 
           function(wb){
              console.log(wb);
              for(i in wb.allproducts){
                var $prod = wb.allproducts[i];
                ar[$prod.name] = $prod.id;
                $(".js-example-basic-single").append('<option value="'+$prod.name +'">'+ $prod.name + '</option>');
              }
            }
        });
      $(document).on("change",".js-example-basic-single",function() {
          var data = $(".js-example-basic-single option:selected").val();
          console.log(data);
          console.log(ar[data]);
          localStorage.setItem('prod_ID',ar[data]);
      });

      $(document).on("click","#submit",function(e){
          var url= 'http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/sale'
          $.ajax({
            type: 'POST',
            url: url,
            data: {id: localStorage.getItem('prod_ID') ,quantity: $('#textInput_1').val()},
            success: 
                function(wb){
                    console.log(wb);
                    $("#result_1").show();
                    $('#result_1').text(wb.message);    
                }
            
          });
          setTimeout(function () {
             $("#result_1").hide();
             $("#searchBar").show();
             $("#textInput_1").val(' ');
          }, 3000); 
        });  
        $("#salelink").click(function(){
           localStorage.setItem('ware_house',warehouse_id);   
        });
        $("#returnlink").click(function(){
           localStorage.setItem('ware_house',warehouse_id);
        });        
  });