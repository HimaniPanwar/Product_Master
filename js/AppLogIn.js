 $(document).ready(function(){
    
  $('#logo').addClass('animated fadeInDown');
  $("input:text:visible:first").focus();
  $('#username').focus(function() {
    $('label[for="username"]').addClass('selected');
  });
  $('#username').blur(function() {
    $('label[for="username"]').removeClass('selected');
  });
  $('#password').focus(function() {
    $('label[for="password"]').addClass('selected');
  });
  $('#password').blur(function() {
    $('label[for="password"]').removeClass('selected');
  });
   $("#submit").click(function(){
       var url= 'http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/checkGeneralLogin';
        $.ajax({
          type: 'POST',
          url: url,
          data: {username: $("#username").val() , password: $("#password").val()},
          success: function(wb){
              console.log(wb);
              if(wb.success === "yes")
              window.location.href="http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/index";
          }
        });
        
   });
});