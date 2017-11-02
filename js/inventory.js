$(document).ready(function(){
   	    var id= localStorage.getItem('prod');
   	    
   	    localStorage.setItem('inventory',id);
        $(document).on("click","#btn1",function(e){
            window.location.href="./LogIn_1.html";
        });
        $(document).on("click","#btn2", function(e){
            window.location.href="./LogIn_2.html";
        });
        $(document).on("click","#btn3", function(e){
            window.location.href="./LogIn_3.html";
        });
});