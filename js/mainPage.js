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

  /*ローダー*/
  const element = document.getElementById('loader');
  document.body.onload = function () {
    //element.style.display = 'none';
    element.classList.add('none');
  };

  /*サイドバー高さ自動変更*/
  // 子画面の要素を取得
  var sideMenu = document.getElementById("sideMenu");

  // 子画面のコンテンツサイズに合わせてサイズを変更する関数
  function changeParentHeight() {
    sideMenu.style.height = sideMenu.contentWindow.document.body.scrollHeight + 30 + "px";
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

  /*フッター高さ自動変更*/
  // 子画面の要素を取得
  var footer = document.getElementById("footer");

  // 子画面のコンテンツサイズに合わせてサイズを変更する関数
  function changeParentHeight() {
    footer.style.height = footer.contentWindow.document.body.scrollHeight + 30 + "px";
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