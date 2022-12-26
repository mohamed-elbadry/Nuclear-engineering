// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 700) {
//             $(".scroll-top-button").fadeIn();
//         } else {
//             $(".scroll-top-button").fadeOut();
//         }
//     });

$(".hamburger").click(function () {
  $(".hamburger").addClass("active");
  $(".nav-contain").addClass("active-nav");
  $("body").addClass("overflowNone");
});

$(".nav-contain .overlay").click(function () {
  $(".hamburger").removeClass("active");
  $(".nav-contain").removeClass("active-nav");
  $("body").removeClass("overflowNone");
});

$(".nav-contain .close-navbar").click(function () {
  $(".hamburger").removeClass("active");
  $(".nav-contain").removeClass("active-nav");
  $("body").removeClass("overflowNone");
});

const nextIcon = '<img src="assets/images/eng/Path 10 (2).png ">';
const prevIcon = '<img src="assets/images/eng/Path 9.png">';
$("#owl-carousel2").owlCarousel({
  rtl: true,
  loop: true,
  autoplay: true,
  nav: true,
  navText: [nextIcon, prevIcon],
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// $('.owl-testimonials').owlCarousel({
//     rtl: true,
//     loop: true,
//     margin: 0,
//     nav: true,
//     dots: false,
//     autoplay: true,
//     touchDrag: true,
//     mouseDrag: true,
//     autoWidth: false,
//     animateOut: 'fadeOut',
//     animateIn: 'fadeIn',
//     autoplayTimeout: 6000,
//     smartSpeed: 2000,
//     dragEndSpeed: 2000,
//     slidSpeed: 900,
//     paginationSpeed: 900,
//     autoplayHoverPause: true,
//     responsive: {
//         0: {
//             items: 2
//         },
//         600: {
//             items: 2
//         },
//         1000: {
//             items: 5
//         }
//     }
// });

//  const rightIcon = '<img src="assets/images/eng/Path 10 (2).png ">'
//  const leftIcon = '<img src="assets/images/eng/Path 9.png">'

$(".owl-carousel").owlCarousel({
  rtl: true,
  loop: true,
  autoplay: true,
  nav: true,
  navText: [
    '<i class="fa fa-angle-right"></i>',
    '<i class="fa fa-angle-left"></i>',
  ],
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

var flag = false;
function PlayPauseVideo() {
  if (flag == true) {
    flag = false;
    document.getElementById("video").pause();
    document.getElementById("playpuseimg").src =
      "assets/images/eng/play.png";
  } else {
    flag = true;
    document.getElementById("video").play();
    document.getElementById("playpuseimg").src = "assets/images/eng/pause1.png";
  }
}

document.getElementById("video").addEventListener("ended", myHandler, false);
function myHandler(e) {
  document.getElementById("playpuseimg").src =
    "assets/images/eng/play.png";
  document.getElementById("video").currentTime = 0;
}
