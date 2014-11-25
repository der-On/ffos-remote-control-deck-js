$(function() {
  function toggleBreak()
  {
    $('html').toggleClass('break');
  }

  $.deck.ffosRemoteControl = function(host, port) {
    host = host || 'http://localhost';
    port = port || 9000;
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

  $(window).on('keyup', function(event) {
    if (event.key === 'b') {
      toggleBreak();
    }
  });
});