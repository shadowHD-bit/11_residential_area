$(document).ready(function () {
  let popup_open = $("#popup_pashal");
  let popup_close = $(".popup");
  let popup_content = $('.popup__content')

  $(".popup__body").click(function (e) {
    if(!popup_content.is(e.target) && popup_content.has(e.target).length === 0){
        popup_open.removeClass('open')
    }
  });
  
  $(".tree_title").click(function () {
    popup_close.addClass('open')
  });
});
