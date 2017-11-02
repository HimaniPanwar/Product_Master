$(document).ready(function(){
       $("#submit").click(function(){
       var url= 'flourish-release.ap-south-1.elasticbeanstalk.com/stocks/checkLogin';
        $.ajax({
          type: 'POST',
          url: url,
          data: {username: $("#username").val() , password: $("#password").val()},
          success: function(wb){
              console.log(wb);
          }
        });
        window.location.href="./return.html";
       });
});