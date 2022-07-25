$(document).ready(function () {
  $(window).scroll(function (event) {
    let scroll_pixels = $(this).scrollTop();
    let width_window = $(this).outerWidth();
    let height_content_lazy = $(".lazy").outerHeight();
    let height_content_part = $(".area_content").outerHeight();
    let height_parallax_content = $(".parallax_fog").outerHeight();
    let proc_scroll_content = (scroll_pixels / height_content_part) * 100;
    let proc_scroll_lazy = (scroll_pixels / height_content_lazy) * 100;
    let opacity_fog = 1 - (1 / 100) * proc_scroll_content * 1;

    let zoom_fog = 1 + (width_window / 200000) * proc_scroll_lazy;
    $(".parallax_fog").css("transform", "scale(" + zoom_fog + ")");
    $(".parallax_fog").css("opacity", opacity_fog);
  });
});
