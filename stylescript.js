$('.open-instructions').click(function() {
  $(this).closest('.descriptive-text').find('.descriptive-overlay').animate({left: 0});
});

$('.close-instructions').click(function() {
  $(this).closest('.descriptive-text').find('.descriptive-overlay').animate({left: -500});
});


$('.new-game').click(function(){
  location.reload();
})

function displayGameOver() {
  $(".game-over").css("visibility", "visible");
}








