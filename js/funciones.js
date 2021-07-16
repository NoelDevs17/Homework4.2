let players = [];

const cont = document.getElementById("container");
const button = document.getElementById("createPlayerBtn");
const ul = document.createElement("ul");

ul.setAttribute("id", "playerList");

button.addEventListener("click", function (e) {
    e.preventDefault();
    const playerName = prompt("Introduce el nombre del jugador");
    players.push(playerName);
    cont.appendChild(ul);

    updatePlayers();
});

button.addEventListener("click", function (e) {
    e.preventDefault();
    const playerName = prompt("Introduce el nombre del jugador");
    players.push(playerName);
    cont.appendChild(ul);

    updatePlayers();
});

function updatePlayers() {
    for(let index = 0; index <= players.length -1; index++){
        const li = document.createElement('li');
        const para = document.createElement('p');
        para.setAttribute("id", `${index+1}`);
        const node = document.createTextNode(`Player ${index+1}:${players[index]}`);
    
        para.appendChild(node);
        li.appendChild(para);
        ul.appendChild(li);
    };
}

function updateOnePlayer(){

}