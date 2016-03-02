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
  var hull_id = localStorage.getItem('hull_id');
  var hull_item_id = localStorage.getItem('hull_item_id');
  $.getJSON( url + "/hull/" + hull_id, {} ).done( function( res ) {
    //alert(result.result);
    var count = 1;
    $.each( res.result, function( i, item ) {
      //alert(count + ' ' + id);
      if(count == hull_item_id){
        var countItem = 0;
        $.each( this, function( j, item2 ) {
          if(countItem == 1)
            
          else if(countItem == 2)
            $('#nama_hull_item').html(item2 + ' :');
          countItem++;
          //alert(selbox);
        } );
        return false;
      }
      count++;
    } );
  });
  
  var selbox = '<select class="fullwidth" id="hull_item_id">';

  $.getJSON( url + "/hull/" + id, {
  } ).done( function( res ) {
    //alert(result.result);
    $.each( res.result, function( i, item ) {
      var count = 0;
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
    $('#list_hull').html("");
    $(selbox).appendTo('#list_hull');
  });
}