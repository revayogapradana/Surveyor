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

function getHull() {
  var selbox = '<select class="fullwidth" id="item_id">';

  $.getJSON( url + "/outfitting", {
  } ).done( function( res ) {
    //alert(result.result);
    $.each( res.result, function( i, item ) {
      var count = 1;
      var id;
      var nama;
      $.each( this, function( j, item2 ) {
        if(count == 1)
          id = item2;
        else if(count == 2)
          nama = item2;
        count++;
        //alert(selbox);
      } );
      selbox += '<option value="' + id + '">' + nama + '</option>';
    } );
    selbox += '</select>';
    //alert(selbox);
    $('#list').html("");
    $(selbox).appendTo('#list');
  });
}

function selectItem() {
  var id = $('#item_id').val();
  var nama = $("#item_id option[value='" + id + "']").text();
  localStorage.setItem('outfitting_id', id);
  localStorage.setItem('outfitting_nama',nama);
  window.location.href = "form_outfitting.html";
}