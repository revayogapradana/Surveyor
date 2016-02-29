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

function goToCOR() {
  window.location.href = "survey_list.html";
}

function goToHull() {
  window.location.href = "survey_list.html";
}

function goToMachinery() {
  window.location.href = "survey_list.html";
}

function goToOutFitting() {
  window.location.href = "survey_list.html";
}

function goToNavigations() {
  window.location.href = "survey_list.html";
}