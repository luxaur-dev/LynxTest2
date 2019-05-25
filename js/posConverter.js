// Конвертирует исходную позицию в массив координат
function posConverter() {
	let str = document.getElementById('startPos').value;
  let position = [str.toUpperCase().charCodeAt(0) - 65, parseInt(str.charAt(1))];
  chessKnight(position);
}