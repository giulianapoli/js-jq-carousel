$(document).ready(function () {
  $('.next').click (function () {
    var setActive = $('img.active');

    setActive.removeClass('active');

    if (setActive.hasClass('last')) {
      $('img.first').addClass('active');
    } else {
      setActive.next().addClass('active');
    }
  });

  $('.prev').click(function() {
    var activeEl = $('.images > img.active');

    activeEl.removeClass('active');

    if (activeEl.hasClass('first')) {
      $('img.last').addClass('active');
    } else {
      activeEl.prev().addClass('active');
    }
  });
});
