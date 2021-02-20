


const generateAvatar = function ()  { // Функция случайное число с ведушим нулем
  const number = '0';
  const randomNumber = number + generateNumber();
  const randomString = `img/avatars/user${randomNumber}.png`;
  return randomString
};




const generateRandomRangeWithComma = function (min, max, comma = 0) {
  if (min >= 0 && max >= 0 && comma >= 0) {
    if (min === max ) {
      return min

    }
    const number = Math.random() * (max - min ) + min
    return  +number.toFixed(comma)

  }

  alert(`Занчение min = ${min} , max = ${max} comma = ${comma} должны быть положительные, больще 0 `);

};

const generateNumber = function (min = 1, max = 8) {     // Функция для рандомного чилса range
  return  Math.floor( Math.random() * (max - min + 1) + min )
};

const generate = function (array) {  // Функция для рандомного выбора
  return array[Math.floor(Math.random() * array.length)]
};

const generateRandom = function (array) {  // функция для  рандомного  создания массива
  const randomNumber = Math.floor(Math.random() * array.length + 1  );
  const newArray = [];
  for(let i = 0; i < randomNumber ; i++ ) {
    const randomArray = array.filter((currentValue) => {
      return newArray.indexOf(currentValue) === -1
    })
    newArray.push(randomArray[Math.floor(Math.random() * randomArray.length )])
  }
  return newArray
};


const generaterFoto = function () { // Функция для закгрузки фотографии
  const randomNumber = generateNumber();
  const photosArray = [];
  for(let i = 1; i <= randomNumber; i++  ){
    photosArray.push(`http://o0.github.io/assets/images/tokyo/hotel${i}.jpg`)
  }
  return photosArray
};

const generaterLocation = function () {  // Функция по оси X и Y

  const location = {};

  location.x = generateRandomRangeWithComma(35.65000, 35.70000, 5)
  location.y = generateRandomRangeWithComma(139.70000, 139.80000, 5)
  return location
}










export {generate, generaterLocation, generateNumber, generateRandom, generaterFoto, generateAvatar };
