$(document).ready(function () {
  "use strict";

  // Toggle Switches
  $(".az-toggle").on("click", function () {
    $(this).toggleClass("on");
  });

  let element = document.getElementById("resizable");
  let leftArrow =
    '<svg class="resize-btn-arrow" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M13.706 9.698a.988.988 0 0 0 0-1.407 1.01 1.01 0 0 0-1.419 0l-2.965 2.94a1.09 1.09 0 0 0 0 1.548l2.955 2.93a1.01 1.01 0 0 0 1.42 0 .988.988 0 0 0 0-1.407l-2.318-2.297 2.327-2.307z" fill-rule="evenodd"></path></svg>';

  let rightArrow =
    '<svg class="resize-btn-arrow" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M10.294 9.698a.988.988 0 0 1 0-1.407 1.01 1.01 0 0 1 1.419 0l2.965 2.94a1.09 1.09 0 0 1 0 1.548l-2.955 2.93a1.01 1.01 0 0 1-1.42 0 .988.988 0 0 1 0-1.407l2.318-2.297-2.327-2.307z" fill-rule="evenodd"></path></svg>';

  let menuWidth = 240;
  let collapseWidth = 20;
  sessionStorage.setItem("menuState", "open");
  sessionStorage.setItem("menuPadding", menuWidth);
  sessionStorage.setItem("resizeBtnStatus", "fix");

  let resizeBtn = document.createElement("div");

  if (element) {
    let dragHandle = document.createElement("div");
    let highlighter = document.createElement("div");

    dragHandle.className = "dragHandle";
    dragHandle.style.width = "10px";
    dragHandle.style.height = "100vh";

    highlighter.className = "dragHandle-inner";
    highlighter.style.width = "1px";
    highlighter.style.height = "100%";

    resizeBtn.className = "resize-btn";
    resizeBtn.id = "resizeBtn";

    element.appendChild(dragHandle);
    dragHandle.appendChild(highlighter);
    dragHandle.appendChild(resizeBtn);
    resizeBtn.addEventListener("click", autoResize, true);
    dragHandle.addEventListener("mousedown", initResize, true);
  }

  $("#resizeBtn").addClass("visible");
  $("#resizeBtn").html(leftArrow);

  function switchArrow() {
    let state = sessionStorage.getItem("menuState");
    if (state === "closed") {
      $("#resizeBtn").empty();
      $("#resizeBtn").html(leftArrow);
    } else if (state === "open") {
      $("#resizeBtn").empty();
      $("#resizeBtn").html(rightArrow);
    }
  }

  function _resize(padding) {
    if ($("#mainArea").hasClass("resizable-main")) {
      if (window.innerWidth > 992) {
        $("#mainArea.resizable-main").css("padding-left", padding + "px");
      } else {
        $("#mainArea.resizable-main").css("padding-left", "20px");
      }
    } else {
      if (window.innerWidth > 992) {
        $("#mainArea").css("padding-left", padding + "px");
      } else {
        $("#mainArea").css("padding-left", "20px");
      }
    }
    element.style.width = padding + "px";
  }

  function autoResize(e) {
    let minPadding = collapseWidth;
    let standardPadding = menuWidth;
    let currentPadding = sessionStorage.getItem("menuPadding");

    switchArrow();

    if (sessionStorage.getItem("menuState") === "open") {
      _resize(minPadding);
      sessionStorage.setItem("menuState", "closed");
    } else if (sessionStorage.getItem("menuState") === "closed") {
      if (
        currentPadding <= menuWidth + collapseWidth &&
        currentPadding >= menuWidth - collapseWidth
      ) {
        _resize(standardPadding);
      } else {
        _resize(currentPadding);
      }
      sessionStorage.setItem("menuState", "open");
    }
  }

  function initResize(e) {
    if (e.button == 0) {
      if (e.clientY < 93 || e.clientY > 118) {
        window.addEventListener("mousemove", Resize, false);
        window.addEventListener("mouseup", stopResize, false);
      }
    }
  }

  function Resize(e) {
    let paddingLeft =
      e.clientX > window.innerWidth * 0.7 ? "70%" : e.clientX + "px";
    $("#mainArea").addClass("resizable-main");
    element.style.width = paddingLeft;
    if (window.innerWidth > 992) {
      $("#mainArea.resizable-main").css("padding-left", paddingLeft);
    } else {
      $("#mainArea.resizable-main").css("padding-left", "20px");
    }
  }

  function stopResize(e) {
    window.removeEventListener("mousemove", Resize, false);
    window.removeEventListener("mouseup", stopResize, false);
    if (e.clientX >= menuWidth - collapseWidth) {
      sessionStorage.setItem("menuPadding", e.clientX);
      sessionStorage.setItem("menuState", "open");
      console.log("start-full");
      $("#resizeBtn").empty();
      $("#resizeBtn").html(leftArrow);
      console.log("end");
    } else {
      _resize(collapseWidth);
      sessionStorage.setItem("menuState", "closed");
      console.log("start-collapse");
      $("#resizeBtn").empty();
      $("#resizeBtn").html(rightArrow);
      console.log("end");
    }
  }

  $(".az-sidebar .with-sub").on("click", function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("show");
    $(this).parent().siblings().removeClass("show");
  });

  $(document).on("click", (e) => {
    let $trigger = $(".dropdown-menu");
    let $parent = $(".dropdown");
    let windowWidth = window.innerWidth;

    if (
      $(e.target).attr("class") !== "dropdown-menu" &&
      $(e.target).attr("class") !== "az-header-profile"
    ) {
      console.log($(e.target).attr("class"));
      $(".dropdown").removeClass("show");
    }
  });

  $("#notificationIcon .top-nav-icon-btn").on("click", (e) => {
    e.preventDefault();
    $("#notificationIcon").parent().siblings().children().removeClass("show");
    $("#notificationIcon").toggleClass("show");
    e.stopPropagation();
  });

  $("#profileIcon .profile-img ").on("click", (e) => {
    e.preventDefault();
    $("#profileIcon").parent().siblings().children().removeClass("show");
    $("#profileIcon").toggleClass("show");
    e.stopPropagation();
  });

  $("#sectionMenu")
    .parent()
    .on("click", (e) => {
      e.preventDefault();
      $("#sectionMenu").toggleClass("show");
      e.stopPropagation();
    });

  $("#hideMenu").on("click", (e) => {
    e.preventDefault();
    alert(this);
    $(this).hide();
    $(this).closest(".dashboard-section").hide(300);
    e.stopPropagation();
  });
});

$(function () {
  "use strict";

  // This template is mobile first so active menu in navbar
  // has submenu displayed by default but not in desktop
  // so the code below will hide the active menu if it's in desktop
  if (window.matchMedia("(min-width: 992px)").matches) {
    $(".az-navbar .active").removeClass("show");
    $(".az-header-menu .active").removeClass("show");
  }

  // Shows header dropdown while hiding others
  $(".az-header .dropdown > a").on("click", function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("show");
    $(this).parent().siblings().removeClass("show");
  });

  // Showing submenu in navbar while hiding previous open submenu
  $(".az-navbar .with-sub").on("click", function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("show");
    $(this).parent().siblings().removeClass("show");
  });

  // this will hide dropdown menu from open in mobile
  $(".dropdown-menu .az-header-arrow").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".dropdown").removeClass("show");
  });

  // this will show navbar in left for mobile only
  $("#azNavShow, #azNavbarShow").on("click", function (e) {
    e.preventDefault();
    $("body").addClass("az-navbar-show");
  });

  // this will hide currently open content of page
  // only works for mobile
  $("#azContentLeftShow").on("click touch", function (e) {
    e.preventDefault();
    $("body").addClass("az-content-left-show");
  });

  // This will hide left content from showing up in mobile only
  $("#azContentLeftHide").on("click touch", function (e) {
    e.preventDefault();
    $("body").removeClass("az-content-left-show");
  });

  // this will hide content body from showing up in mobile only
  $("#azContentBodyHide").on("click touch", function (e) {
    e.preventDefault();
    $("body").removeClass("az-content-body-show");
  });

  // navbar backdrop for mobile only
  $("body").append('<div class="az-navbar-backdrop"></div>');
  $(".az-navbar-backdrop").on("click touchstart", function () {
    $("body").removeClass("az-navbar-show");
  });

  // Close dropdown menu of header menu
  $(document).on("click touchstart", function (e) {
    e.stopPropagation();

    // closing of dropdown menu in header when clicking outside of it
    var dropTarg = $(e.target).closest(".az-header .dropdown").length;
    if (!dropTarg) {
      $(".az-header .dropdown").removeClass("show");
    }

    // closing nav sub menu of header when clicking outside of it
    if (window.matchMedia("(min-width: 992px)").matches) {
      // Navbar
      var navTarg = $(e.target).closest(".az-navbar .nav-item").length;
      if (!navTarg) {
        $(".az-navbar .show").removeClass("show");
      }

      // Header Menu
      var menuTarg = $(e.target).closest(".az-header-menu .nav-item").length;
      if (!menuTarg) {
        $(".az-header-menu .show").removeClass("show");
      }

      if ($(e.target).hasClass("az-menu-sub-mega")) {
        $(".az-header-menu .show").removeClass("show");
      }
    } else {
      //
      if (!$(e.target).closest("#azMenuShow").length) {
        var hm = $(e.target).closest(".az-header-menu").length;
        if (!hm) {
          $("body").removeClass("az-header-menu-show");
        }
      }
    }
  });

  $("#azMenuShow").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("az-header-menu-show");
  });

  $(".az-header-menu .with-sub").on("click", function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("show");
    $(this).parent().siblings().removeClass("show");
  });

  $(".az-header-menu-header .close").on("click", function (e) {
    e.preventDefault();
    $("body").removeClass("az-header-menu-show");
  });
});
