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

function next(id) {
  localStorage.setItem('engine_id',id);
  window.location.href = "engine_next.html";
}

function getList() {
  $.getJSON( url + "/machine", {} ).done( function( res ) {
    //alert(result.result);
    $.each( res.result, function( i, item ) {
      var count = 1;
      var ok = 0;
      $.each( this, function( j, item2 ) {
        if(count == 1 && item2 == localStorage.getItem('machinery_id'))
          ok = 1;
        else if(count == 2 && ok == 1){
          $('#nama_engine').html(item2);
        }
        count++;
      } );
    } );
  });

  var machinery_id = localStorage.getItem('machinery_id');
  var selbox = '<table width="100%">';

  $.getJSON( url + "/machine/engine/" + machinery_id, {} ).done( function( res ) {
    $.each( res.result, function( i, item ) {
      var count = 0;
      var item_id;
      var nama;
      $.each( this, function( j, item2 ) {
        if(count == 0)
          item_id = item2;
        else if(count == 2)
          nama = item2;
        count++;
      } );
      //console.log(item_id + ' ');
      selbox += '<tr><td colspan="3"><input type="submit" class="fullwidth" value="' + nama + '" onclick="next(' + item_id + ')"></td></tr>';
    } );
    selbox += '</table>';
    //alert(selbox);
    $('#list').html("");
    $(selbox).appendTo('#list');
  });
}