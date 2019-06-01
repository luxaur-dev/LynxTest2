// Принимает массив координат и возвращает 2 массива с возможными позициями

function chessKnight(arr) {
	 //Размерность доски
  const Board = 8;
  
	 //Исходная позиция коня
  const xPos = arr[0];
  const yPos = arr[1];
  
	 //Все возможные ходы конем
  const xMove = [2, 1, -1, -2, -2, -1, 1, 2];
  const yMove = [1, 2, 2, 1, -1, -2, -2, -1];
  
   //Верный ход
  let xGood = [];
  let yGood = [];
	
  for (let i=0; i < 8; i++) {
  	  let x = xPos + xMove[i];
      let y = yPos + yMove[i];

      if (x > 0 && y > 0 && x < Board && y < Board) {
    	xGood.push(x);
    	yGood.push(y);
      }
  }
  posReturn(xGood, yGood);
}