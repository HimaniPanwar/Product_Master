$(document).ready(function(){
        var url= 'http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/getSubCategory';
        $.ajax({
          type: 'POST',
          url: url,
          // send the id from localstorage to API.
          data: {id: localStorage.getItem('main_cat')},
          success: function(wb){
	          console.log(wb);
            for(i in wb.allsubcat){
              $subcat = wb.allsubcat[i];
              $("#sub_item").append('<div id="columns" class="col-md-4 col-md-4 col-xs-12 thumb">\
                <p id="result"><button class="sub_item" id='+$subcat.id+'>'+$subcat.name+'</button></p>\
                </div>');
            }
          }
        });
  
        $(document).on("click", ".sub_item", function(e){
          var id = $(this).attr('id');
          // store ID of sub category in storage
          localStorage.setItem('sub_cat',id);
          window.location.href = "http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/producthtml";
        });
        $("#textInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#sub_item div#columns").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
});