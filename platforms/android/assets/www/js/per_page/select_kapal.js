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

function getListKapal() {
  var selbox = '<select class="fullwidth" id="id_kapal">';

  $.getJSON( url + "/kapal", {
  } ).done( function( res ) {
    //alert(result.result);
    $.each( res.result, function( i, item ) {
      var count = 0;
      var id_kapal;
      var nama_kapal;
      $.each( this, function( j, item2 ) {
        if(count == 0)
          nama_kapal = item2;
        else 
          id_kapal = item2;
        count++;
        //alert(selbox);
      } );
      selbox += '<option value="' + id_kapal + '">' + nama_kapal + '</option>';
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
  window.location.href = "buat_survey.html";
}