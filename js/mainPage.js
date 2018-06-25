(function () {
  'use strict';

  var target = document.getElementById('pageTop_link');

  function height() {
    var y = window.scrollY;

    document.getElementById('test').innerText = '現在の高さは' + y + 'です';

    if (y >= 300) {
      target.style.display = 'block';
    } else {
      target.style.display = 'none';
    }
  }
  setInterval(height, 1);

})();