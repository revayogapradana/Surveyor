/* global variables */
var url = "http://188.166.181.160/kapal/index.php";

/* initializer */
$( document ).ready( function() {
  refresh();

} );
function refresh() {
  if(sessionStorage.getItem('username') != null){
    alert(sessionStorage.getItem('username') + ' was logged in');
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
      alert(data.message);
      //sessionStorage.setItem('username', data.result.username);
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
    //console.log("user / pass kosong");
    //$('#login-emptyfield').popup("open");
  }
}
function logout() {

}
function getListKapal() {
  $.getJSON( url + "/kapal", {
  } ).done( function( res ) {
    //alert(result.result);
    $.each( res.result, function( i, item ) {
      var str = '';
        $.each( this, function( j, item2 ) {
          str += j + ': ' + item2 + ', ';
        } );
      alert(str);
    } );
  } );
}
function getKapal() {
  var id = $('#id_kapal').val();
  $.getJSON( url + "/kapal/" + id, {
  } ).done( function( res ) {
    var str = '';
    $.each( res.result, function( j, item2 ) {
      str += j + ': ' + item2 + ', ';
    } );
    str += '\n';
    alert(str);
  } );
}
function getListCertificates() {
  $.getJSON( url + "/certificates", {
  } ).done( function( res ) {
    //alert(result.result);
    $.each( res.result, function( i, item ) {
      var str = '';
        $.each( this, function( j, item2 ) {
          str += j + ': ' + item2 + ', ';
        } );
      alert(str);
    } );
  } );
}
function getCertificates() {
  var id = $('#id_certificates').val();
  $.getJSON( url + "/certificates/" + id, {
  } ).done( function( res ) {
    var str = '';
    $.each( res.result, function( j, item2 ) {
      str += j + ': ' + item2 + ', ';
    } );
    str += '\n';
    alert(str);
  } );
}
function getListDocuments() {
  $.getJSON( url + "/documents", {
  } ).done( function( res ) {
    //alert(result.result);
    $.each( res.result, function( i, item ) {
      var str = '';
        $.each( this, function( j, item2 ) {
          str += j + ': ' + item2 + ', ';
        } );
      alert(str);
    } );
  } );
}
function getDocuments() {
  var id = $('#id_documents').val();
  $.getJSON( url + "/documents/" + id, {
  } ).done( function( res ) {
    var str = '';
    $.each( res.result, function( j, item2 ) {
      str += j + ': ' + item2 + ', ';
    } );
    str += '\n';
    alert(str);
  } );
}
function getListDocuments() {
  $.getJSON( url + "/hull", {
  } ).done( function( res ) {
    //alert(result.result);
    $.each( res.result, function( i, item ) {
      var str = '';
        $.each( this, function( j, item2 ) {
          str += j + ': ' + item2 + ', ';
        } );
      alert(str);
    } );
  } );
}
function getDocuments() {
  var id = $('#id_hull').val();
  $.getJSON( url + "/hull/" + id, {
  } ).done( function( res ) {
    var str = '';
    $.each( res.result, function( j, item2 ) {
      str += j + ': ' + item2 + ', ';
    } );
    str += '\n';
    alert(str);
  } );
}