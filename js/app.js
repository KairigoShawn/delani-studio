$(document).ready(function () {
  // handler for click event i.e. calling the click handler for hidden elements
  whatWeDoClickHandler("design-icon", "design");
  whatWeDoClickHandler("dev-icon", "dev");
  whatWeDoClickHandler("product-icon", "product");

  })
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


