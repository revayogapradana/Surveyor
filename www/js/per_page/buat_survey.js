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

function getKapal() {
  var id = localStorage.getItem('id_kapal');
  $.getJSON( url + "/kapal/" + id, {
  } ).done( function( res ) {
    var str = '';
    $.each( res.result, function( j, item2 ) {
      str += j + ': ' + item2 + ', ';
    } );
    str += '\n';
    alert(str);
  } );
}

function submitSurvey() {

  localStorage.setItem('date',$('#bln_survey').val() + '/' + $('#tgl_survey').val() + '/' + $('#thn_survey').val());
  localStorage.setItem('company',$('#company').val());
  localStorage.setItem('surveyor',$('#surveyor').val());


  var dataToBeSent = {
      'date' : localStorage.getItem('date'),
      'company' : localStorage.getItem('company'),
      'surveyor' : localStorage.getItem('surveyor'),
      'username' : localStorage.getItem('username'),
      'vessel_imo' : localStorage.getItem('id_kapal')
  };

  $.post(url + "/survey", dataToBeSent, function(data, textStatus) {
      if(data.message == 'failed'){
        alert('Ada kesalahan pengiriman data');
      } else {
        alert('Data survey berhasil dimasukkan');
        localStorage.setItem('id_survey',data.id_survey);
        //alert(data.id_survey);
        window.location.href = "info_kapal.html";
      }
    }, "json");
}

function generateDate() {
  var today = new Date();

  var tglNow = today.getDate();
  var selbox = '<select class="fullwidth" id="tgl_survey">';
  for(var tgl = 1; tgl <= 30; tgl++) selbox += '<option value="' + tgl + '" ' + (tgl == tglNow ? ' selected' : '') + '>' + tgl + '</option>';
  selbox += '</select>';
  $('#tgl').html("");
  $(selbox).appendTo('#tgl');

  var blnNow = today.getMonth()+1;
  selbox = '<select class="fullwidth" id="bln_survey">';
  var bulan = ['-','Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  for(var bln = 1; bln <= 12; bln++) selbox += '<option value="' + bln + '" ' + (bln == blnNow ? ' selected' : '') + '>' + bulan[bln] + '</option>';
  selbox += '</select>';
  $('#bln').html("");
  $(selbox).appendTo('#bln');

  //alert(Number(new Date().getFullYear()));
  var thnNow = today.getFullYear();
  //alert(tglNow + ' ' + blnNow + ' ' + thnNow);
  selbox = '<select class="fullwidth" id="thn_survey">';
  for(var thn = thnNow; thn >= 2000; thn--) selbox += '<option value="' + thn + '">' + thn + '</option>';
  selbox += '</select>';
  $('#thn').html("");
  $(selbox).appendTo('#thn');
}