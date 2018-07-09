(function () {
  'use strict';

  /*変数*/
  var pageTop_link = document.getElementById('pageTop_link'); //トップに戻るリンクを取得
  var header = document.getElementById('header'); //ヘッダーを取得

  /*トップに戻るリンクの表示非表示切り替え関数*/
  function height() {
    var y = window.scrollY; //スクロール高さを代入
    if (y >= 500) { //300位上時にのみ表示
      pageTop_link.classList.add('show');
      header.classList.add('fixed');
    } else {
      pageTop_link.classList.remove('show');
      header.classList.remove('fixed');
    }
  }
  setInterval(height, 10); //10msに一回"height"関数を実行

  /*トップに戻るリンクの動作処理関数*/
  pageTop_link.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  /*変数*/
  var elm = document.getElementById("main-body"); //メインの内容を取得

  // 子画面のコンテンツサイズに合わせてサイズを変更する関数
  function changeParentHeight() {
    elm.style.height = elm.contentWindow.document.body.scrollHeight + 30 + "px";
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