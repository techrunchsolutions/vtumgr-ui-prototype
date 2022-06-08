$(document).ready(function () {
  var advertBoard = $("#advertBoard");

  advertBoard.owlCarousel({
    items: 1,
    slideSpeed: 3000,
    margin: 10,
    nav: false,
    autoplay: true,
    dots: true,
    loop: true,
    responsiveRefreshRate: 200,
    navText: [
      '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
      '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>',
    ],
  });
});
