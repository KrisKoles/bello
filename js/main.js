$(function () {
  $(".header__btn-menu").on("click", function () {
    $(".menu ul").slideToggle();
  });

  $(".resources-title").click(function () {
    $(".footer__navResources").slideToggle();
  });
  $(".magazine-title").click(function () {
    $(".footer__navMagazine").slideToggle();
  });
  $(".more-title").click(function () {
    $(".footer__navTitle").slideToggle();
  });
});
