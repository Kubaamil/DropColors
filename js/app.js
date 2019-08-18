let playerBool = true;
const player1 = "gracz 1"//prompt("Wprowadź nazwę gracza 1. Będziesz miał/a niebieski kolor");
const player2 = "gracz 2"//prompt("Wprowadź nazwę gracza 2. Będziesz miał/a pomarańczowy kolor");
const gameUpdate = $('.game-update');
let colorVal = "blue";
let colorClass = "p1";

gameUpdate.text(`Tura gracza: ${player1}`);
gameUpdate.css("color", colorVal);

function changePlayerName() {
    playerBool = !playerBool;
    if (playerBool) {
        colorVal = "blue";
        colorClass = "p1";
        gameUpdate.text(`Tura gracza: ${player1}`);
        gameUpdate.css("color", colorVal);
    } else {
        colorVal = "orangered";
        colorClass = "p2";
        gameUpdate.text(`Tura gracza: ${player2}`);
        gameUpdate.css("color", colorVal);
    }
}

function selectColumn(el) {
    const classList = $(el).attr('class').split(" ");
    const re = /col-[1-7]/g;
    let columnVal;

    for (const el of classList) {
        if (el.match(re)) {
            columnVal = el.match(re).toString();
        }
    }
    return columnVal;
}

function colorCircle(columnEl) {
    for (const el of columnEl) {
        if ($(el).css('background-color') === 'rgb(128, 128, 128)') {
            $(el).addClass(colorClass);
            changePlayerName();
            break;
        }
    }
}

function updateArray() {
    const localArray = [];

    for (let i = 7; i > 0; i--) {
        const tmpArray = [];
        for (const el of $(`.row-${i}`)) {
            if ($(el).hasClass('p1')) {
                tmpArray.push('p1');
            } else if ($(el).hasClass('p2')) {
                tmpArray.push('p2');
            } else {
                tmpArray.push(null);
            }
        }
        localArray.push(tmpArray);
    }

    return localArray;
}

function checkColumn(array) {
    for (let i = array.length - 1; i >= 3; i--) {
        for (let j = 0; j < array[i].length; j++) {
            if ((array[i][j] === "p1" || array[i][j] === "p2") && array[i][j] === array[i - 1][j] && array[i][j] === array[i - 2][j] && array[i][j] === array[i - 3][j]) {
                alert(`${array[i][j]} WYGRAŁ!!!`);
            }
        }
    }
}

function checkRow(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length - 3; j++) {
            if ((array[i][j] === "p1" || array[i][j] === "p2") && array[i][j] === array[i][j + 1] && array[i][j] === array[i][j + 2] && array[i][j] === array[i][j + 3]) {
                alert(`${array[i][j]} WYGRAŁ!!!`);
            }
        }
    }
}

function checkDiagonal(array) {
    for (let i = 0; i < array.length - 3; i++) {
        for (let j = 0; j < array[i].length - 3; j++) {
            if ((array[i][j] === "p1" || array[i][j] === "p2") && array[i][j] === array[i + 1][j + 1] && array[i][j] === array[i + 2][j + 2] && array[i][j] === array[i + 3][j + 3]) {
                alert(`${array[i][j]} WYGRAŁ!!!`);
            }
        }
    }

    for (let i = array.length - 1; i >= 3; i--) {
        for (let j = 0; j < array[i].length - 3; j++) {
            if ((array[i][j] === "p1" || array[i][j] === "p2") && array[i][j] === array[i - 1][j + 1] && array[i][j] === array[i - 2][j + 2] && array[i][j] === array[i - 3][j + 3]) {
                alert(`${array[i][j]} WYGRAŁ!!!`);
            }
        }
    }
}

// // @TODO upload on server

$('.container div').click(function () {
    colorCircle($(`.${selectColumn(this)}`).get().reverse())
    checkRow(updateArray());
    checkColumn(updateArray());
    checkDiagonal(updateArray());
});