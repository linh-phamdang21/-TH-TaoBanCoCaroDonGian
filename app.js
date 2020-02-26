let board = [];
let data = "";
for (let i = 0; i < 5; i++) {
    board[i] = [0, 0, 0, 0, 0];
}

for (let i = 0; i < 5; i++) {
    data += "<br>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "   ";
    }
}
document.getElementById("carogame").innerHTML = data;


function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    board[positionX][positionY] = "x";
    data = "";
    for (let i = 0; i < 5; i++) {
        data += "<br>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "   ";
        }
    }
    document.getElementById("carogame").innerHTML = data;
}