document
  .getElementById("player__select")
  .addEventListener("click", playerSelect);

function playerSelect() {
  fetch("qb_data.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Player</h2>";
      data.forEach(function (Player, Games) {
        output += `
            <ul>
                <li>Player: ${Player[0]}</li>
                <li>Game1: ${Games.Attempts}</li>
            </ul>
            `;
        console.log(Player);
        console.log(Games);
      });
      window.onload.document.getElementById("output").innerHTML = output;
    });
}
