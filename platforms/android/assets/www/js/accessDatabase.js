/* global variables */
var url = "http://188.166.181.160/kapal/index.php";

/* initializer */
$( document ).ready( function() {
  refresh();

} );
function refresh() {
  if(localStorage.getItem('username') != null){
    alert(localStorage.getItem('username') + ' was logged in');
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
function logout() {
  //localStorage.removeItem('item');
  localStorage.clear();
}
function getListKapal() {
  var selbox = '<select class="fullwidth" name="id_kapal">';

  $.getJSON( url + "/kapal", {
  } ).done( function( res ) {
    //alert(result.result);
    $.each( res.result, function( i, item ) {
      var count = 0;

      $.each( this, function( j, item2 ) {
        if(count == 0)
          selbox += '<option value="' + item2 + '">';
        else 
          selbox += item2 + '</option>';
        count++;
        //alert(selbox);
      } );

    } );
    selbox += '</select>';
    //alert(selbox);
    $('#list_kapal').html("");
    $(selbox).appendTo('#list_kapal');
  });
}
function selectKapal() {
  var id_kapal = $('#id_kapal').val();
  localStorage.setItem('id_kapal', id_kapal);
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
function selectKapal() {
  // body...
}