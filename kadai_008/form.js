$(function () {
  // id属性がbtnの要素がクリックされたら
  $('.btn').on('click', function () {
    // テキストボックス内に「クリックしました！」と表示させる
    $('.text-box').val('クリックしました！');
    //$('.text-box').prop('value','クリックしました！');
  });
});