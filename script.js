let fields = [];
let gameOver = false;
let currentShape = 'cross';

function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            player1Turn();
        }
        else {
            currentShape = 'cross';
            player2Turn();
        }
        fields[id] = currentShape;
        draw();
        checkForWinner();
    }
}
function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}
function player1Turn() {
    document.getElementById('player-1').classList.add('turn');
    document.getElementById('player-2').classList.remove('turn');
}
function player2Turn() {
    document.getElementById('player-2').classList.add('turn');
    document.getElementById('player-1').classList.remove('turn');
}
function checkForWinner() {
    let winner;
    let len = fields.filter(Boolean).length;
    if (len ==9 && !winner) {
        gameOverDraw();
        
    }
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-0').style.transform = 'scaleX(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-6').style.transform = ' scaleX(1)';

    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-7').style.transform = ' scaleX(1)';

    }
    if (winner) {
        console.log('Gewonnen der Gewinner ist', winner);
        gameOver = true;
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('btn-restart').classList.remove('d-none');
        }, 1000);
    }
}

function reload() {
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('btn-restart').classList.add('d-none');
    fields = [];
    gameOver = false;
    currentShape = 'cross';
    player2Turn();

    for (let i = 0; i < 8; i++) {
        document.getElementById('line-' + i).style.transform = ' scaleX(0)';
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById('cross-' + i).classList.add('d-none');
        document.getElementById('circle-' + i).classList.add('d-none');
    }
}

function gameOverDraw(){
    document.getElementById('btn-restart').classList.remove('d-none');

}