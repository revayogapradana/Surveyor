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
    $.each( res.result, function( i, item ) {
      //alert(count + ' ' + id);
      var countItem = 0;
      var ini = 0;
      $.each( this, function( j, item2 ) {
        if(countItem == 1 && item2 == hull_item_id)
          ini = 1;
        else if(countItem == 2 && ini == 1)
          $('#nama_hull_item').html('Masukkan Ketebalan ' + item2 + ':');
        countItem++;
        //alert(selbox);
      } );
      if(ini == 1) return false;
    } );
  });
}

function bantuan() {
  alert('bantuan');
}
function inputKetebalan() {
  // body...
}