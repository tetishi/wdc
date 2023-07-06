//ページトップへ戻る
var $pageTop = $('.pagetop');
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $pageTop.fadeIn();
    
  } else {
    $pageTop.fadeOut();
  }
});
$pageTop.on('click', function () {
  $('body,html').animate({
  scrollTop: 0
  }, 300);
  return false;
});

//ページ内の指定の場所にスクロール
$('#page-link a[href*="#"]').click(function() {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top;
  $('body,html').animate({scrollTop: pos},500);
  return false;
});
