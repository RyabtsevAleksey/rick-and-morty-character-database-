
// кнопка смены нового персонажа
const button = document.querySelector('.button');
// фото нового персонажа
let photo = document.querySelector('.frame-photo-img');

// divы для информации о персонаже
const characterName = document.querySelector('.character__name');
const characterStatus = document.querySelector('.character__status');
const characterSpecies = document.querySelector('.character__species');
const characterGender = document.querySelector('.character__gender');

// счетчик для смены персонажа в феч запросе
let count = 1;

// слушатель события по клику - феч запрос
button.addEventListener('click',(event)=>{
  // event.preventDefault();
  // феч запрос со счетчиком++
  fetch(`https://rickandmortyapi.com/api/character/${count++}`)
  .then(response=>response.json())
  // обрабатываем полученный результат
  .then(data=>{
    console.log(data);
    // цикл для обработки нужных данных объекта
    // вставляем нужное значение в соотв.div
    for (let key in data) {
      if (key === 'name') {
        characterName.innerText = `name: ${data[key]}`;
      } else if (key === 'status') {
        characterStatus.innerText = `status: ${data[key]}`;
      } else if (key === 'species') {
        characterSpecies.innerText = `species: ${data[key]}`;
      } else if (key === 'gender') {
        characterGender.innerText = `gender: ${data[key]}`;
      } else if (key === 'image') { 
        photo.src = data[key];
      }
    }
    })
  .catch(error =>{
    console.log(`Произошла ошибка ${error.massage}`)
  })
  });

