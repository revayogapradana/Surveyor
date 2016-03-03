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
  $.getJSON( url + "/machine", {} ).done( function( res ) {
    //alert(result.result);
    $.each( res.result, function( i, item ) {
      var count = 1;
      var ok = 0;
      $.each( this, function( j, item2 ) {
        if(count == 1 && item2 == localStorage.getItem('machinery_id'))
          ok = 1;
        else if(count == 2 && ok == 1){
          $('#nama_machine_engine').html(item2);
        }
        count++;
      } );
    } );
  });

  var machinery_id = localStorage.getItem('machinery_id');
  $.getJSON( url + "/machine/engine/" + machinery_id, {} ).done( function( res ) {
    $.each( res.result, function( i, item ) {
      var count = 0;
      var id;
      var nama;
      var ok = 0;
      $.each( this, function( j, item2 ) {
        if(count == 0 && item2 == localStorage.getItem('engine_id'))
          ok = 1;
        else if(count == 2 && ok == 1){
          //alert(item2);
          $('#nama_engine_next').html(item2);
          return false;
        }
        count++;
      } );
      if(ok) return false;
    } );
  });
  
  var selbox = '<select class="fullwidth" id="label_id">';
var engine_id = localStorage.getItem('engine_id');
  $.getJSON( url + "/machine/engine/" + machinery_id + '/' + engine_id, {} ).done( function( res ) {
    //alert(result.result);
    $.each( res.result, function( i, item ) {
      var count = 0;
      var id;
      var nama;
      $.each( this, function( j, item2 ) {
        if(count == 0)
          id = item2;
        else if(count == 1){
          nama = item2;
        }
        count++;
      } );
      selbox += '<option value="' + id + '">' + nama + '</option>';
    } );
    selbox += '</select>';
    //alert(selbox);
    $('#list_item').html("");
    $(selbox).appendTo('#list_item');
  });
}

function selectItem() {
  var label_id = $('#label_id').val();
  localStorage.setItem('label_id', label_id);
  var id = localStorage.getItem('engine_id');
  if(id == 1 || id == 2 || id == 4) window.location.href = "form_engine_next.html";
  else if(id == 3) window.location.href = "form_bahan_next.html";
  else window.location.href = "form_indi_uji_next.html";
}