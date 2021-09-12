$(document).ready(function () {
  // handler for click event i.e. calling the click handler for hidden elements
  whatWeDoClickHandler("design-icon", "design");
  whatWeDoClickHandler("dev-icon", "dev");
  whatWeDoClickHandler("product-icon", "product");

  portfolioHoverEffect("blm", "blm-txt");
  portfolioHoverEffect("security", "security-txt");
  portfolioHoverEffect("prism", "prism-txt");
  portfolioHoverEffect("hollywood", "hollywood-txt");
  portfolioHoverEffect("daily", "daily-txt");
  portfolioHoverEffect("music", "music-txt");
  portfolioHoverEffect("art", "art-txt");
  portfolioHoverEffect("giraffe", "giraffe-txt");

  $("#sub").click(function (e) {
    e.preventDefault();
    alert("Your message has been received, Thank you.");
  });
});

function whatWeDoClickHandler(clickableIcon, expandedDetails) {
  $(`#${clickableIcon}`).click(function () {
    $(`#${clickableIcon}`).hide();
    $(`#${expandedDetails}`).show();
    $(`#${expandedDetails}`).click(function () {
      $(`#${expandedDetails}`).hide();
      $(`#${clickableIcon}`).show();
    });
  });
}

function portfolioHoverEffect(bgImage, displayText) {
  $(`#${bgImage}`).hover(
    function () {
      $(`#${displayText}`).show();
      $(`#${bgImage}`).css({ opacity: 0.8 });
    },
    function () {
      $(`#${displayText}`).hide();
      $(`#${bgImage}`).css({ opacity: 1 });
    }
  );
}
