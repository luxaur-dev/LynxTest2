// Возвращает строку результата
function posReturn(...arr){
  let xGood = arr[0];
  let xFinalPos = [];
  let yFinalPos = arr[1];
  let resultArr = [];
  
  for (let i = 0; i < xGood.length; i++) {
	// Конвертирует x-координату в буквенное значение и конкатенирует к нему y-координату
    xFinalPos.push(String.fromCharCode(65 + xGood[i]));
    resultArr.push(xFinalPos[i] + yFinalPos[i]);
  }
  //console.log(xGood, xFinalPos, yFinalPos);
  let result = resultArr.join(' ');
  document.getElementById("result").innerHTML = result;
  document.getElementById("popup").style.display = "block";
  console.log(result)
}