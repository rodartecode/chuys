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
});
