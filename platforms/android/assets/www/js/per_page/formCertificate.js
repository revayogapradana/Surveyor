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
  $('#name_cert').html(name + ' :');
  //document.getElementById('name_cert').innerHTML = name;
  //alert(name);
}

function generateDate() {
  var today = new Date();

  var tglNow = today.getDate();
  var selbox = '<select class="fullwidth" id="tgl_start_certificate">';
  for(var tgl = 1; tgl <= 30; tgl++) selbox += '<option value="' + tgl + '" ' + (tgl == tglNow ? ' selected' : '') + '>' + tgl + '</option>';
  selbox += '</select>';
  $('#tgl_start').html("");
  $(selbox).appendTo('#tgl_start');

  var blnNow = today.getMonth()+1;
  selbox = '<select class="fullwidth" id="bln_start_certificate">';
  var bulan = ['-','Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  for(var bln = 1; bln <= 12; bln++) selbox += '<option value="' + bln + '" ' + (bln == blnNow ? ' selected' : '') + '>' + bulan[bln] + '</option>';
  selbox += '</select>';
  $('#bln_start').html("");
  $(selbox).appendTo('#bln_start');

  //alert(Number(new Date().getFullYear()));
  var thnNow = today.getFullYear();
  //alert(tglNow + ' ' + blnNow + ' ' + thnNow);
  selbox = '<select class="fullwidth" id="thn_end_certificate">';
  for(var thn = thnNow; thn >= 2000; thn--) selbox += '<option value="' + thn + '">' + thn + '</option>';
  selbox += '</select>';
  $('#thn_start').html("");
  $(selbox).appendTo('#thn_start');

  selbox = '<select class="fullwidth" id="tgl_end_certificate">';
  for(var tgl = 1; tgl <= 30; tgl++) selbox += '<option value="' + tgl + '" ' + (tgl == tglNow ? ' selected' : '') + '>' + tgl + '</option>';
  selbox += '</select>';
  $('#tgl_end').html("");
  $(selbox).appendTo('#tgl_end');

  selbox = '<select class="fullwidth" id="bln_end_certificate">';
  var bulan = ['-','Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  for(var bln = 1; bln <= 12; bln++) selbox += '<option value="' + bln + '" ' + (bln == blnNow ? ' selected' : '') + '>' + bulan[bln] + '</option>';
  selbox += '</select>';
  $('#bln_end').html("");
  $(selbox).appendTo('#bln_end');

  //alert(Number(new Date().getFullYear()));
  //alert(tglNow + ' ' + blnNow + ' ' + thnNow);
  selbox = '<select class="fullwidth" id="thn_end_certificate">';
  for(var thn = thnNow; thn >= 2000; thn--) selbox += '<option value="' + thn + '">' + thn + '</option>';
  selbox += '</select>';
  $('#thn_end').html("");
  $(selbox).appendTo('#thn_end');
}