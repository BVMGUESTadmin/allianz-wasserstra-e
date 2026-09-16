// Scales the 1920x1080 canvas to the window width (desktop/tablet only)
(function () {
  var wrap = document.querySelector('.stage-wrap');
  var stage = document.querySelector('.stage');
  function fit() {
    if (window.innerWidth <= 900) {           // mobile layout takes over
      stage.style.transform = ''; wrap.style.height = ''; return;
    }
    var s = window.innerWidth / 1920;
    stage.style.transform = 'scale(' + s + ')';
    wrap.style.height = (1080 * s) + 'px';
  }
  window.addEventListener('resize', fit);
  fit();
})();
