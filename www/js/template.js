!function ($) {
  
  // ------------------------------------------
  //  REGISTER
  // ------------------------------------------
  
  var socket = false;
  var registerSocketIO = function(){
    socket = io();
    socket.on('template', function(msg){
      console.log(msg);
    });
  }
  
  var register = function(){
    // ...
    // Put you jQuery events here
    // $(document).on('click', 'A.clickme', function(event){ });
    // ...
    
    // Register SocketIO
    // registerSocketIO();
  }

  // ------------------------------------------
  //  PUBLIC
  // ------------------------------------------
  
  // Plugin initialization on DOM ready
  $(document).ready(function() {
    register();
  });
  
}(jQuery);
