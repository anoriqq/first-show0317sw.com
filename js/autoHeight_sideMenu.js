(function () {
  'use strict';

  /*サイドバー高さ自動変更*/
  // 子画面の要素を取得
  var sideMenu = document.getElementById("sideMenu");

  // 子画面のコンテンツサイズに合わせてサイズを変更する関数
  function changeParentHeight() {
    sideMenu.style.height = sideMenu.contentWindow.document.body.scrollHeight + 10 + "px";
  }

  // 親画面 iframe の高さを変更するイベント
  // 1. 子画面の読み込み完了時点で処理を行う
  sideMenu.contentWindow.onload = function () {
    changeParentHeight();
  };

  // 2. 子画面のウィンドウサイズ変更が完了した時点で処理を行う
  var timer = 0;
  sideMenu.contentWindow.onresize = function () {
    if (timer > 0) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      changeParentHeight();
    }, 100);
  };

  // 3. bodyの読み込みが完了時点で処理を行う｡
  document.body.onload = function () {
    changeParentHeight();
  };

})();