$('.open-instructions').click(function() {
  $(this).closest('.descriptive-text').find('.descriptive-overlay').animate({left: 0});
});

$('.close-instructions').click(function() {
  $(this).closest('.descriptive-text').find('.descriptive-overlay').animate({left: -500});
});


$('.new-game').click(function(){
  $(".game-over").css("visibility", "visible");
})




$('.retry-button').click(function(){
  location.reload();
})



