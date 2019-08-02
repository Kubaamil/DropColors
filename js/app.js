let player = true;
const player1 = prompt("Wprowadź nazwę gracza 1");
const player2 = prompt("Wprowadź nazwę gracza 2");
$('.game-update').text(`Tura gracza: ${player1}`);

function changePlayerName() {
    player = !player;
    if(player) {
        $('.game-update').text(`Tura gracza: ${player1}`);
    } else {
        $('.game-update').text(`Tura gracza: ${player2}`);
    }
}

$('.container div').on('click', function() {
    const column = $(this).parent().attr('class');
    let row;

    $($(`.${column}`).children().get().reverse()).each(function() {
    if(player){
            if (!($(this).hasClass('p1') || $(this).hasClass('p2'))) {
                $(this).addClass('p1');
                row = $(this).attr('class');
                return false;
            }
    } else if(!player){
            if (!($(this).hasClass('p1') || $(this).hasClass('p2'))) {
                $(this).addClass('p2');
                row = $(this).attr('class');
                return false;
            }
    }
    })

    const checkColumn = $($(`.${column}`).children().get().reverse()).toArray();
    checkColumn.some(function(a,i,aa){
        if(i>1) {
            if(a.classList.contains('p1') && aa[i-1].classList.contains('p1') && aa[i-2].classList.contains('p1') && aa[i-3].classList.contains('p1')){
                alert(`${player1} wygrał!!!!!`);
            } else if(a.classList.contains('p2') && aa[i-1].classList.contains('p2') && aa[i-2].classList.contains('p2') && aa[i-3].classList.contains('p2')){
                alert(`${player2} wygrał!!!!!`);
            }
    }
    })

    const checkRow = $(`.${row.split(" ")[0]}`).toArray();
    console.log(row.split(" ")[0]);
    checkRow.some(function(a,i,aa){
        if (i>1) {
            if(a.classList.contains('p1') && aa[i-1].classList.contains('p1') && aa[i-2].classList.contains('p1') && aa[i-3].classList.contains('p1')){
                alert(`${player1} wygrał!!!!!`);
            } else if(a.classList.contains('p2') && aa[i-1].classList.contains('p2') && aa[i-2].classList.contains('p2') && aa[i-3].classList.contains('p2')){
                alert(`${player2} wygrał!!!!!`);
    }
}
    })

    changePlayerName();
});