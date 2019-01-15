$(Document).ready(function() {
    $(".btn1").click(function(){
     $("#snek").show();
    });

    $(".btn2").click(function(){
     $("#snek2").fadeToggle("slow");
    });

    $(".example3").click(function(){
     $("#snek3").animate({
       left: '450px',
          opacity: '5.5',
          height: '1050px',
          width: '1050px'
       });
    });

});
