$(function() {

    $('#login-form-link').click(function(e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#register-form-link').click(function(e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

});


$(function() {

    $('#adventure1-link').click(function(e) {
     // console.log(document.getElementById("radioama1").checked);
      if(!document.getElementById("radioama1").checked){ 
      //   !document.getElementById("radioama2").checked ) &&
      //   (!document.getElementById("radiokofi1").checked || 
      //   !document.getElementById("radiokofi2").checked ) {
      // alert('Please answer the questions first.');
      }
    e.preventDefault();
  });

});

