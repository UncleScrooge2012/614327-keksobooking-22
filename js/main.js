
let numberRandomRange = function (min, max) {
  if (min >= 0 && max >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min  //Максимум и минимум включаются
  }

  alert(`Занчение min = ${min} и max = ${max} должны быть положительные, больще 0 `)

};


let numberRandomRange2 = function (min, max, comma = 0) {
  if (min >= 0 && max >= 0 && comma >= 0) {
    let result = +number.toFixed(comma)
    let number = Math.random() * (max - min + 1) + min
    return result

  }

  alert(`Занчение min = ${min} , max = ${max} comma = ${comma} должны быть положительные, больще 0 `);

};

numberRandomRange(2, 5);

numberRandomRange2(1, 6 , 3);



