(function () {
  var navigation = document.querySelector(".site-nav");

  if (!navigation) {
    return;
  }

  navigation.addEventListener(
    "click",
    function (event) {
      var link = event.target.closest("a");

      if (
        link &&
        link.hash &&
        link.origin === window.location.origin &&
        link.pathname === window.location.pathname
      ) {
        event.stopPropagation();
      }
    },
    true
  );
})();
