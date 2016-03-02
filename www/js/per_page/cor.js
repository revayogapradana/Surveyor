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

function getCOR() {
  getListCertificates();
  getListDocuments();
}

function getListCertificates() {
  var selbox = '<select class="fullwidth" id="id_certificate" onchange="goToCertificate(this)">';

  $.getJSON( url + "/certificates", {
  } ).done( function( res ) {
    //alert(result.result);
    selbox += '<option value="0">-</option>';
    $.each( res.result, function( i, item ) {
      var count = 0;
      var id;
      var nama;
      $.each( this, function( j, item2 ) {
        if(count == 0)
          id = item2;
        else 
          nama = item2;
        count++;
        //alert(selbox);
      } );
      selbox += '<option value="' + id + '">' + nama + '</option>';
    } );
    selbox += '</select>';
    //alert(selbox);
    $('#certificateList').html("");
    $(selbox).appendTo('#certificateList');
  });
}

function getListDocuments() {
  var selbox = '<select class="fullwidth" id="id_document" onchange="goToDocument(this)">';

  $.getJSON( url + "/documents", {
  } ).done( function( res ) {
    //alert(result.result);
    selbox += '<option value="0">-</option>';
    $.each( res.result, function( i, item ) {
      var count = 0;
      var id;
      var nama;
      
      $.each( this, function( j, item2 ) {
        if(count == 0)
          id = item2;
        else 
          nama = item2;
        count++;
        //alert(selbox);
      } );
      selbox += '<option value="' + id + '">' + nama + '</option>';
    } );
    selbox += '</select>';
    //alert(selbox);
    $('#documentList').html("");
    $(selbox).appendTo('#documentList');
  });
}

function goToCertificate(element) {
  var id = element.value;
  var nama = element.options[element.selectedIndex].text;
  localStorage.setItem('id_certificate',id);
  localStorage.setItem('name_certificate',nama);
  window.location.href = "certificate.html";
  //alert('certif');
}

function goToDocument(element) {
  var id = element.value;
  var nama = element.options[element.selectedIndex].text;
  localStorage.setItem('id_document',id);
  localStorage.setItem('name_document',nama);
  window.location.href = "document.html";
  //alert('document');
}