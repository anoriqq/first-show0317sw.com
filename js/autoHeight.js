(function () {
  'use strict';

  /*フッター高さ自動変更*/
  // 子画面の要素を取得
  var footer = document.getElementById("footer");

  // 子画面のコンテンツサイズに合わせてサイズを変更する関数
  function changeParentHeight() {
    footer.style.height = footer.contentWindow.document.body.scrollHeight + "px";
  }

  // 親画面 iframe の高さを変更するイベント
  // 1. 子画面の読み込み完了時点で処理を行う
  footer.contentWindow.onload = function () {
    changeParentHeight();
  };

  // 2. 子画面のウィンドウサイズ変更が完了した時点で処理を行う
  var timer = 0;
  footer.contentWindow.onresize = function () {
    if (timer > 0) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      changeParentHeight();
    }, 100);
  };

})();