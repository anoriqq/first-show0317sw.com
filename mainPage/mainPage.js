(function(){
  'use strict';



  function nawTime(){
    var target = document.getElementById('pageTop_link');
    var y = window.scrollY
    document.getElementById('test').innerText = '現在の高さは' + y + 'です';
    if(y >= 300){
      document.getElementById('test-2').innerText = 'topへもどる';
      target.style.display = 'block';
    }else{
      document.getElementById('test-2').innerText = '';
      target.style.display = 'none';
    }
  }

  setInterval(nawTime, 1);

})();