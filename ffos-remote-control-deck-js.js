$(function() {
  function toggleBreak()
  {
    $('html').toggleClass('break');
  }

  $.deck.ffosRemoteControl = function() {
    var socket = io('http://localhost:9000');
    socket.on('message', function(data) {
      switch(data.name) {
        case 'prev':
          $.deck('prev');
          break;

        case 'next':
          $.deck('next');
          break;

        case 'break':
          toggleBreak();
          break;
      }
    });
  }
});