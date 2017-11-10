$(document).ready(function(){
       $("#submit").click(function(){
       var url= 'http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/checkLogin';
        $.ajax({
          type: 'POST',
          url: url,
          data: {username: $("#username").val() , password: $("#password").val()},
          success: function(wb){
              console.log(wb);
              if(wb.success === "yes")
              window.location.href="http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/returnhtml";
          }
        });
        
       });
});