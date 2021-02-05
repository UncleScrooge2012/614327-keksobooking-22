

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
    const number = Math.random() * (max - min + 1) + min
    return  +number.toFixed(comma)

  }

  alert(`Занчение min = ${min} , max = ${max} comma = ${comma} должны быть положительные, больще 0 `);

};

generateNumberRange(2, 5);

alert(generateRandomRangeWithComma(1, 1 , 3))





