/* global variables */
var url = "http://188.166.181.160/kapal/index.php";

/* initializer */
$( document ).ready( function() {
  refresh();

} );
function refresh() {
  if(localStorage.getItem('username') != null){
    alert(localStorage.getItem('username') + ' was logged in');
    window.location.href = "select_kapal.html";
  }
}

/* fungsi lain */

/* fungsi login and logout */
function login() {
	//console.log("login");
 	if ( $('#username').val() != "" && $('#password').val() != "" ) {
    //console.log("user / pass ada");
    var dataToBeSent = {
      'username' : $('#username').val(),
      'password' : $('#password').val()
    };
    $.post(url + "/login", dataToBeSent, function(data, textStatus) {
      if(data.message == 'failed'){
        alert('Username / Password Anda salah!');
      } else {
        alert('Welcome ' + data.result.username);
        localStorage.setItem('username', data.result.username);
        window.location.href = "select_kapal.html";
      }
    }, "json");
    
    /*
    $.getJSON( url, {
      username: $('#username').val()
    } ).done( function( result ) {
        alert(result.result.status)
    } );
    */
  }
  else {
    alert('username dan password harus terisi!');
  }
}