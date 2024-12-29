$(function() {
  // 「文字色変化」ボタンを押した際に、文字色が任意の色に更新される
  $('#change-color').on('click', function(){
    $('#target').css('color', 'red');
  });

  // 「文字内容変化」ボタンを押した際に、任意の文字内容に更新される
  $('#change-text').on('click', function(){
    $('#target').text('Hello!');
    //$('#target').css('color', 'red');
  });

  // 「フェードアウト」ボタンを押した際に、フェードアウトで文字が消える
  $('#fade-out').on('click', function(){
    $('#target').fadeOut();
  });

  // 「フェードイン」ボタンを押した際に、フェードインで文字が現れる
  $('#fade-in').on('click', function(){
    $('#target').fadeIn();
    //$('#target').text('Hello!');
    //$('#target').css('color', 'red');
  });
});

