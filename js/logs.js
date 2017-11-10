$(document).ready(function(e){
         $.getJSON('http://flourish-release.ap-south-1.elasticbeanstalk.com/stocks/logs',
                      function(wb){
                      	
                         for(i in wb.recentlog){
                            var recent_Log = wb.recentlog[i];
                            console.log(recent_Log);
                            $("#result").append('<tr id="myTable"><td>'+ recent_Log.warehouse + '</td><td>' + recent_Log.type + '</td><td id="prodLog">\
                              ' +recent_Log.product + '</td><td>' + ' '+ recent_Log.quantity+ '</td><td>'+ recent_Log.created_at + '</td>\
                              </tr>');
                         } 
                      
                         
         });
         $("#textInput").on("keyup", function() {
         var value = $(this).val().toLowerCase();
         $("#result tr#myTable").filter(function() {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
         });
      });
   	  });