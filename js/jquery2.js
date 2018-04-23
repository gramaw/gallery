$(document).ready(function(){
  $("a").click(function(){
    var selected = $(this);
    $("a").removeClass("active");
    $(selected).addClass("active");
  });
});
