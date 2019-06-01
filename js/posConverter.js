// Конвертирует исходную позицию в массив координат

const popupWindow = document.getElementById('popupwindow');
const popupText = document.getElementById('popuptext');

function posConverter() {
    const str = document.getElementById('startPos').value;
    const convertedLetter = str.toUpperCase().charCodeAt(0) - 65;
    const posNumber = parseInt(str.charAt(1));

    let startPositionArr = [];

    if (str.length === 2 && posNumber !== 0){
        startPositionArr.push(convertedLetter, posNumber);
        chessKnight(startPositionArr);
    }
    else {
        popupText.innerHTML = 'Введите позицию фигуры.';
        resultText.innerHTML = '';
        popupWindow.style.display = 'block';
    }
}