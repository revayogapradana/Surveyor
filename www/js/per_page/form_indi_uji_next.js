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
  $('#nama_engine_item').html(localStorage.getItem('nama_label_engine'));
  var machinery_id = localStorage.getItem('machinery_id');
  var engine_id = localStorage.getItem('engine_id');
  var label_id = localStorage.getItem('label_id')-8;

  var selbox = '<table width="100%">';
  var count = 0;
  $.getJSON( url + "/machine/engine/sub/" + machinery_id + '/' + engine_id + '/' + label_id, {} ).done( function( res ) {
    //alert(result.result);
    $.each( res.result, function(i, item) {
      if(count > 4){
        selbox += '<tr><td width="50%">' + i + '</td><td width="50%">: ' + item + '</td></tr>';
      }
      count++;
    } );
    selbox += '</table>';
    $('#list_item').html(selbox);
  });
}

function selectItem() {
  var kondisi = "";
  var kondisi = $("input[name='kondisi']:checked").val();
  if($('#pressure').val() != "" && $('#suhu').val() != "" && $('#value_lajur').val() != "" && $('#kondisi') != "") {
    var dataToBeSent = {
      'pressure' : $('#pressure').val(),
      'suhu' : $('#suhu').val(),
      'kondisi' : kondisi,
      'keterangan' : $('#keterangan').val(),
      'id_survey' : localStorage.getItem('id_survey'),
      'vessel_imo' : localStorage.getItem('id_kapal'),
      'engine_id' : localStorage.getItem('machinery_id'),
      'engine_item_id' : localStorage.getItem('engine_id'),
      'engine_item_sub_id' : localStorage.getItem('label_id')-8
    };
    $.post(url + "/machine", dataToBeSent, function(data, textStatus) {
      if(data.message == 'failed'){
        alert('Ada kesalahan data!');
      } else {
        //alert(data.result);
        alert('data pengecekan berhasil terisi');
        window.location.href = "form_engine_next.html";
      }
    }, "json");
  } else {
    alert('Data harus terisi semua!');
  }
}

function bantuan() {
  alert('<ul><li>aa</li></ul>');
}

function goToSurveyList() {
  window.location.href = "survey_list";
}