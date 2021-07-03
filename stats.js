const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(xhttp.responseText);
    const response = JSON.parse(xhttp.responseText);
    const qbData = response.qb_data;

    var output = "";
    for (var i = 0; i < qb_data.length; i++) {
      output += "<colgroup>" + qbData[i].Player + "</colgroup>";
    }
    document.getElementById("people").innerHTML = output;
  }
};

xhttp.open("GET", "qb_data.json", true);
xhttp.send();
