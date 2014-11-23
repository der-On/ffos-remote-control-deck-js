$(function() {
  function toggleBreak()
  {
    $('html').toggleClass('break');
  }

  $.deck.ffosRemoteControl = function(host, port) {
    host = host || 'http://localhost';
    port = port || 900;
    var socket = io(host + ':' + port);
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