$(document).ready(function(){
   	    var id= localStorage.getItem('prod');
   	    
   	    localStorage.setItem('inventory',id);
        $(document).on("click","#btn1",function(e){
            window.location.href="http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/Login_1html";
        });
        $(document).on("click","#btn2", function(e){
            window.location.href="http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/Login_2html";
        });
        $(document).on("click","#btn3", function(e){
            window.location.href="http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/Login_3html";
        });
});