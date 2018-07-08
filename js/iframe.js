(function () {
  'use strict';

  /*変数*/
  var elm = document.getElementById("main-body"); //メインの内容を取得

  // 子画面のコンテンツサイズに合わせてサイズを変更する関数
  function changeParentHeight() {
    elm.style.height = elm.contentWindow.document.body.scrollHeight + "px";
  }

  /*親画面 iframe の高さを変更するイベント*/
  // 1. 子画面の読み込み完了時点で処理を行う
  elm.contentWindow.onload = function () {
    changeParentHeight();
  };

  // 2. 子画面のウィンドウサイズ変更が完了した時点で処理を行う
  var timer = 0;
  elm.contentWindow.onresize = function () {
    if (timer > 0) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      changeParentHeight();
    }, 100);
  };

})();