$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var docHeight = $(document).height();
  var fallRate = scrollTop / docHeight * 100;
  console.log(fallRate);
  $('.alice-falling').css({
    'transform': 'translateX(-' + fallRate + '%)' });
});
//# sourceURL=pen.js