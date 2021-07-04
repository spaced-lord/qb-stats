const xhttp = new XMLHttpRequest();

document
  .getElementById("player__select")
  .addEventListener("click", playerSelect);

function playerSelect() {
  const subjectIdNode = document.getElementById("player__select");
  const value = subjectIdNode.options[subjectIdNode.selectedIndex].text;
  console.log(value);
}

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(xhttp.responseText);
    const response = JSON.parse(xhttp.responseText);
    const games = response.games;

    var output = "";
    for (var i = 0; i < games.length; i++) {
      output += "<colspan>" + games[i].Player + "</colspan>";
    }
    document.getElementById("player").innerHTML = output;
  }
};

function appendJSON(data) {
  var table = document.getElementById("stats__table");
  data.forEach(function (object) {
    var tr = document.createElement("tr");
    tr.innerHTML =
      "<td>" +
      object.Game +
      "</td>" +
      "<td>" +
      object.Attempts +
      "</td>" +
      "<td>" +
      object.Completions +
      "</td>" +
      "<td>" +
      object.Yards +
      "</td>" +
      "<td>" +
      object.Long +
      "</td>" +
      "<td>" +
      object.LongTDPass +
      "</td>" +
      "<td>" +
      object.Touchdowns +
      "</td>" +
      "<td>" +
      object.Interceptions +
      "</td>" +
      "<td>" +
      object.Sacks +
      "</td>" +
      table.appendChild(tr);
  });
}

xhttp.open("GET", "qb_data.json", true);
xhttp.send();
