import {generate, generaterLocation, generateNumber, generateRandom, generaterFoto, generateAvatar } from './util.js';
import {TITLE, PRICE, TYPE, TIME, FEATURES, DESCRIPTION} from './date.js'


const generateOffer = function () {  // функция генерирует случайную информацию

  const offer = {};
  offer.title = generate(TITLE);
  offer.address = generaterLocation() ;
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


const generateAds = function () { // функция создает объявления
  const adsArray = [];
  for (let i = 1; i < 2; i++ ) {
    let ad = 'Ad' + i;
    ad = new Object();
    ad.author = generateAvatar();
    ad.offer = generateOffer() ;
    ad.location = ad.offer.address;
    adsArray.push(ad)
  }
  return adsArray
};


export {generateAds}
