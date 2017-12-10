 $(document).ready(function(){
    var ar = [];
    // $('#inputText').val(' ');
       $("#inputText1").keypress(function(){
         var searchValue = $("#inputText1").val();
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
                $("#dropdown1").append('<option value="'+$prod.name +'" />');
                if(i>15)
                  break;
              }
            }
        });
       });

      $(document).on("change","#inputText1",function() {
        var value = $("#inputText1").val();
        // var valArray = value.split("-");
        // console.log(valArray[0]);
        console.log(ar[value]);
        localStorage.setItem('prod_ID',ar[value]);
        // Do task here
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