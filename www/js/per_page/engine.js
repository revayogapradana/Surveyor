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

function getData() {

  $.getJSON( url + "/machine", {
  } ).done( function( res ) {
    //alert(result.result);
    $.each( res.result, function( i, item ) {
      var count = 1;
      var ok = 0;
      $.each( this, function( j, item2 ) {
        if(count == 1 && item2 == localStorage.getItem('machinery_id'))
          ok = 1;
        else if(count == 2 && ok == 1)
          $('#nama_engine').html(item2);
        count++;
      } );
    } );
  });

  var selbox = '<table width="100%"><tr><td colspan="2"><b>Motor Induk</b></td></tr>';
  var atribut;
  var flag = 0;

  $.getJSON( url + "/machine/engine", {
  } ).done( function( res ) {
    //alert(result.result);
    $.each( res.result, function( i, item ) {
      $.each( this, function( j, item2 ) {
        if(j.substring(0,1) == 'g' && !flag){
          selbox += '<tr><td colspan="2" style="padding-top: 10px;"><b>Gearbox</b></td></tr>';
          flag = 1;
        }
        atribut = j.substring(j.indexOf("_")+1);
        if(atribut != 'id' && atribut != 'imo' && atribut != 'nama') selbox += '<tr><td width="50%">' + atribut + '</td><td width="50%">: ' + item2 + '</td></tr>';
      } );
    } );
    selbox += '</tr></table>';
    //alert(selbox);
    $('#list').html("");
    $(selbox).appendTo('#list');
  });
}

function selectItem() {
  window.location.href = "engine_item.html";
}