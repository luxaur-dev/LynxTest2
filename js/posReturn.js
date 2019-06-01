// Возвращает строку результата

const resultText = document.getElementById('resulttext');

function posReturn(...arr) {
  const xGood = arr[0];
  const yFinalPos = arr[1];

  let xFinalPos = [];
  let resultArr = [];
  
  for (let i = 0; i < xGood.length; i++) {
	// Конвертирует x-координату в буквенное значение и конкатенирует к нему y-координату
    xFinalPos.push(String.fromCharCode(65 + xGood[i]));
    resultArr.push(xFinalPos[i] + yFinalPos[i]);
  }

  const listOfMoves = resultArr.join(' ');

  if (resultArr.length === 0) {
    popupText.innerHTML = 'Введите верную позицию.';
    resultText.innerHTML = '';
    popupWindow.style.display = "block";
  }
  else {
    popupText.innerHTML = 'Результат:';
    resultText.innerHTML = listOfMoves;
    popupWindow.style.display = "block";
  }
}