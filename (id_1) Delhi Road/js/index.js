$(document).ready(function(){
   
      $("#i1").click(function(){
       $('#autocomplete1').val('');
       $("#ic1").css({
          height: "100%",
          transition: "0.3s ease-in-out"
      });
      
    });

     $("#i2").click(function(){
      $('#autocomplete2').val('');
      $("#ic2").css({
          height: "100%",
          transition: "0.3s ease-in-out"
    
      });
    });
      $("#i3").click(function(){
       $('#autocomplete3').val('');
       $("#ic3").css({
          height: "100%",
          transition: "0.3s ease-in-out"
      });
      
    });
    /*  $("#i1").mouseover(function(){
         $(this).css({
         	opacity: '0.8',
            width: '32rem',
            height: '40rem',
            marginLeft: '3rem',
            transition: "0.5s ease-in-out"
         });
      });
         $("#i1").mouseout(function(){
         $(this).css({
         	opacity: '1',
            width: '28rem',
            height: '36rem',
            marginLeft: '5rem',
            transition: "0.5s ease-in-out"
         });
      });
      $("#i2").mouseover(function(){
        
         $(this).css({
         	opacity: '0.8',
            width: '32rem',
            height: '40rem',
            marginLeft: '3rem',
            transition: "0.5s ease-in-out"
           
         });
      });
         $("#i2").mouseout(function(){
         
         $(this).css({
         	opacity: '1',
            width: '28rem',
            height: '36rem',
            marginLeft: '5rem',
            transition: "0.5s ease-in-out"
         });
      });
      $("#i3").mouseover(function(){
        
         $(this).css({
         	opacity: '0.8',
            width: '29rem',
            height: '37rem',
            marginLeft: '5rem',
            transition: "0.5s ease-in-out"
         });
      });
         $("#i3").mouseout(function(){
        
         $(this).css({
         	opacity: '1',
            width: '28rem',
            height: '36rem',
            marginLeft: '5rem',
            transition: "0.5s ease-in-out"
         });
      });*/

    $(".closebtn").click(function(){
      $("#ic1,#ic2,#ic3").css({
          height: "0%",
          transition: "0.3s ease-in-out"
      });

    });
  var samples = [
        {value: 'A-100'},
        {value: 'A-150'},
        {value: 'A-200'},
        {value: 'A-250'},
        {value: 'A-300'},
        {value: 'A-350'},
        {value: 'A-400'},
        {value: 'A-450'},
        {value: 'A-500'},
        {value: 'A-550'},
        {value: 'A-600'},
        {value: 'A-650'},
        {value: 'A-700'},
        {value: 'B-100'},
        {value: 'B-150'},
        {value: 'B-200'},
        {value: 'B-250'},
        {value: 'B-300'},
        {value: 'C-100'},
        {value: 'C-150'},
        {value: 'C-200'},
        {value: 'C-250'},
        {value: 'C-300'},
        {value: 'D-100'},
        {value: 'D-150'},
        {value: 'D-200'},
        {value: 'D-250'},
        {value: 'D-300'},
    ];
         $('#autocomplete1').autocomplete({
             lookup: samples,
             appendTo: '#outputcontent1', 
         });
          $('#autocomplete2').autocomplete({
             lookup: samples,
             appendTo: '#outputcontent2', 
         });
          $('#autocomplete3').autocomplete({
             lookup: samples,
             appendTo: '#outputcontent3',
         });
  
});