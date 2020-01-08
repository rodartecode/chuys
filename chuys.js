$(document).ready(function() {
  $("#learn-more-btn").on("click", function(e) {
    console.log("click");
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;
      console.log(hash);

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        550
      );
    }
  });

  $(function() {
    createSticky(jQuery("#header"));
  });

  function createSticky(sticky) {
    if (typeof sticky !== "undefined") {
      var pos = sticky.offset().top,
        win = jQuery(window);

      win.on("scroll", function() {
        win.scrollTop() >= pos ? sticky.addClass("fixed") : sticky.removeClass("fixed");
      });
    }
  }
});
