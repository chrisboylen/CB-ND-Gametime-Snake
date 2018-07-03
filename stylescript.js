$('.open-instructions').click(function() {
  $(this).closest('.descriptive-text').find('.descriptive-overlay').animate({left: 0});
});

$('.close-instructions').click(function() {
  $(this).closest('.descriptive-text').find('.descriptive-overlay').animate({left: -500});
});


$('.new-game').click(function(){
  $(".game-over").css("visibility", "visible");
})

$('.fa-times-circle').click(function(){
  $(".welcome-screen").css("opacity", 0);
  $(".welcome-screen").animate({left: -500});
})

