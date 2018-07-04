$('.open-instructions').click(function() {
  $(this).closest('.descriptive-text').find('.descriptive-overlay').animate({left: 0});
});

$('.close-instructions').click(function() {
  $(this).closest('.descriptive-text').find('.descriptive-overlay').animate({left: -500});
});



const submitNewScore = () => {
  let userName = $('.player-score-input'.val());
  let userScore = $(this.score)
  let newScore = `<li>${userName} ............. ${userScore}</li>`;
  $('score-list').prepend(newScore)
}

// module.exports = stylescript;


