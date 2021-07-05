document
  .getElementById("player__select")
  .addEventListener("click", playerSelect);

function playerSelect() {
  fetch("qb_data.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Players</h2>";
      data.forEach(function (player) {
        output += `
            <ul>
                <li>Player Name: ${player}</li>
            </ul>
            `;
      });
      document.getElementById("output").innerHTML = output;
    });
}
