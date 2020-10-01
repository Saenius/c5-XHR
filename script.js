
let jButton = document.querySelector('#j-btn');
let jParagraph = document.querySelector('.j-par')



jButton.onclick = function(){
  let jInputValue = document.querySelector('#j-inpt').value;
  console.log(+jInputValue)
  if (0 < +jInputValue <= 10){
    let xhr = new XMLHttpRequest();
    xhr.open('GET',  `https://picsum.photos/v2/list?limit=${jInputValue}`)
    xhr.onload = function() {
      if (xhr.status != 200) { 
        console.log('Статус ответа: ', xhr.status);
      } else {
        console.log('Результат: ', JSON.parse(xhr.response));
      }
    };
    xhr.onerror = () => {
      console.log('Ошибка! Статус ответа: ', xhr.status)
    }
    xhr.send();
  } else {
    j-par.innerHTML('Число вне диапазона от 1 до 10')
  }
}

 
