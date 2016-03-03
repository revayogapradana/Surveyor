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
  $('#nama').html(localStorage.getItem('navigations_nama'));

  var navigations_id = localStorage.getItem('navigations_id');
  var selbox = '<table width="100%">';

  $.getJSON( url + "/navigation/" + navigations_id, {} ).done( function( res ) {
      if(res.message == 'success'){
        //alert(result.result);
        $.each( res.result, function( i, item ) {
          var count = 1;
          var atribut;
          var nama;
          $.each( this, function( j, item2 ) {
            if(count == 1)
              atribut = item2;
            else if(count == 2)
              nama = item2;
            count++;
            //alert(selbox);
          } );
          selbox += '<tr><td width="50%">' + atribut + '</td><td width="50%">' + nama + '</td></tr>';
        } );
      }
      else {
        alert('data belum diinput di web!');
      }
  });
  selbox += '</table>';
  //alert(selbox);
  $('#list').html("");
  $(selbox).appendTo('#list');
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
  window.location.href = "survey_list.html";
}