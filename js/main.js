
let numberRandomRange = function (min, max) {
if (min >= 0 && max >= 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min  //Максимум и минимум включаются



}

alert(`Занчение min = ${min} и max = ${max} должны быть положительные, больще 0 `)

};


let numberRandomRange2 = function (min, max, comma = 0) {
  if (min >= 0 && max >= 0 && comma >= 0) {
    let number = Math.random() * (max - min + 1) + min
    let result = +number.toFixed(comma)

    return result

  }

  alert(`Занчение min = ${min} , max = ${max} comma = ${comma} должны быть положительные, больще 0 `)

  };






