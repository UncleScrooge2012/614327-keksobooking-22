

const generateNumberRange = function (min, max) {
  if (min >= 0 && max >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min  //Максимум и минимум включаются
  }

  alert(`Занчение min = ${min} и max = ${max} должны быть положительные, больще 0 `)

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

generateNumberRange(2, 5);

alert(generateRandomRangeWithComma(1, 1 , 3))

const TITLE = ['Отели', 'Апартаменты/квартиры', 'Курортные отели', 'Виллы', 'Шале', 'Коттеджи', 'Глэмпинг']; // заголовок предложения
const PRICE = [20000, 40000, 50000, 70000, 150000, 32000, 90000]; // Рандом цен
const TYPE = ['palace', 'flat', 'house', 'bungalow']; // одно из четырёх фиксированных значений
const TIME = ['12:00', '13:00', '14:00']; //  одно из трёх фиксированных значений
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']; // преимущества
const DESCRIPTION = ['панорамным видом на Средиземное море оснащены',
  'кондиционером', 'телевизором с плоским экраном и международными каналами',
  'В каждом номере можно воспользоваться принадлежностями для чая/кофе.',
  'В распоряжении гостей собственная ванная комната с ванной',
  'душевой кабиной и роскошными туалетно-косметическими принадлежностями',
  'С балкона или террасы всех номеров открывается панорамный вид на Средиземное море.',
];

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

const generateOffer = function () {  // функция генерирует случайную информацию

  const offer = {};
  offer.title = generate(TITLE);
  offer.address = generaterLocation();
  offer.price = generate(PRICE);
  offer.type = generate(TYPE);
  offer.rooms = generateNumber();
  offer.guests = generateNumber();
  offer.checkin = generate(TIME);
  offer.checkout = generate(TIME);
  offer.features = generateRandom(FEATURES);
  offer.description = generateRandom(DESCRIPTION);
  offer.photos = generaterFoto();


  return offer
}

//написать функцию , которая создает масиив из 10 сгенерированных JS-объектов.


// 1) объект авотар

// 1.1) создать функуцию которая рандомно будет присваевать строке число от 1 до 8 с ведушим 0

const generateAvatar = function ()  { // Функция случайное число с ведушим нулем
  const number = '0';
  const randomNumber = number + generateNumber();
  const randomString = `img/avatars/user${randomNumber}.png`;
  return randomString
};




const generateAds = function () { // функция создает объявления
  const adsArray = [];
  for (let i = 1; i < 4; i++ ) {
    let ad = 'Ad' + i;
    ad = new Object();
    ad.author = generateAvatar();
    ad.offer = generateOffer() ;
    ad.location = ad.offer.address;
    adsArray.push(ad)
  }
  return adsArray
};

generateAds()
