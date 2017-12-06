$(document).ready(function(e){
     $(document).on("click","#submit",function(e){
          var url= 'http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/getstock';
          $.ajax({
            type: 'POST',
            url: url,
            data: {id: localStorage.getItem('inventory') ,quantity: $('#textInput').val()},
            success: 
                function(wb){
                    console.log(wb);
                    $('#result').text(wb.message);    
                }
            
           }); 
           setTimeout(function () {
             window.location.href = "http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/index"; 
           }, 2000);          
     }); 
     $("#salelink").click(function(){
           localStorage.setItem('ware_house',warehouse_id);   
     });
     $("#returnlink").click(function(){
           localStorage.setItem('ware_house_1',warehouse_id);
     });
}); 