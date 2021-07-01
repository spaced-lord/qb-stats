// const stats = 'qb_data.json';

function getStats() {
   const jsonUrl = 'qb_data.json';

   xmlhttp = new XMLHttpRequest();
   xmlhttp.onreadystatechange = function() {
       if(this.readyState == 4 && this.status == 200) {
           var data = JSON.parse(this.responseText);
           appendJSON(data);
       }
   }
   xmlhttp.open("POST", jsonUrl, true);
   xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xmlhttp.send();

}

function appendJSON(data) {
    var table = document.getElementById('table__container');

    data.forEach(function(object){
        var tr = document.createElement('tr');

        tr.innerHTML = '<td>' = object.Player + '</td>' +
        '<td>' + object.Game + '</td>' +
        '<td>' + object.Attempts + '</td>' +
        '<td>' + object.Completions + '</td>' +
        '<td>' + object.Yards + '</td>' +
        '<td>' + object.Long + '</td>' +
        '<td>' + object.LongTDPass + '</td>' +
        '<td>' + object.Touchdowns + '</td>' +
        '<td>' + object.Interceptions + '</td>' +
        '<td>' + object.Sacks + '</td>';
        table.appendChild(tr).appendChild
    });
}
