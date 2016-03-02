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

function getCertificate() {
  var name = localStorage.getItem('name_certificate');
  $('#name_cert').html(name);
  //document.getElementById('name_cert').innerHTML = name;
  //alert(name);
}

function goToFormCertificate() {
  window.location.href = "formCertificate.html";
}