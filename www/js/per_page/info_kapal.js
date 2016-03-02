/* global variables */
var url = "http://188.166.181.160/kapal/index.php";

/* initializer */
$( document ).ready( function() {
  refresh();

} );

function refresh() {
  if(localStorage.getItem('username') == null){
    alert('You must logged in first');
    window.location.href = "index.html";
  } 
}

function logout() {
  //localStorage.removeItem('item');
  localStorage.clear();
  window.location.href = "index.html";
}

function getKapal() {
  var id = localStorage.getItem('id_kapal');
  $.getJSON( url + "/kapal/" + id, {
  } ).done( function( res ) {
    var str = '<table width="100%">';
    $.each( res.result, function( j, item2 ) {
      str += '<tr>';
      str += '<td width="50%">' + j + '</td><td width="50%">' + item2 + '</td>';
      str += '</tr>';

      localStorage.getItem('company');
      localStorage.getItem('surveyor');

      str += '<tr>';
      str += '<td width="50%">Date of Survey</td><td width="50%">' + localStorage.getItem('date'); + '</td>';
      str += '</tr>';

      str += '<tr>';
      str += '<td width="50%">Survey of Company</td><td width="50%">' + localStorage.getItem('company'); + '</td>';
      str += '</tr>';

      str += '<tr>';
      str += '<td width="50%">Name of Surveyor</td><td width="50%">' + localStorage.getItem('surveyor'); + '</td>';
      str += '</tr>';

    } );
    str += '</table>';
    $('#detail_kapal').html("");
    $(str).appendTo('#detail_kapal');
    //alert(str);
  } );
}

function goToVesselCrew() {
  window.location.href = "vessel_crew.html";
}