(function () {
  'use strict';

  /*変数*/
  var pageTop_link = document.getElementById('pageTop_link'); //トップに戻るリンクを代入

  /*トップに戻るリンクの表示非表示切り替え*/
  function height() {
    var y = window.scrollY;//スクロール高さを代入
    if (y >= 300) {//300位上時にのみ表示
      pageTop_link.style.display = 'block';
    } else {
      pageTop_link.style.display = 'none';
    }
  }
  setInterval(height, 10); //10msに一回"height"関数を実行

  /*トップに戻るリンクの動作*/
  pageTop_link.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

})();