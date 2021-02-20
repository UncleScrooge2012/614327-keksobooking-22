import { genereateFeatures , checkAvailability, getTitel} from './util.js';
import {generateAds} from './announcement.js';

const userSearch= document.querySelector('main');
const listAds = userSearch.querySelector('#map-canvas');
const cardAds = document.querySelector('#card').content.querySelector('.popup');
const similarAds = generateAds();

similarAds.forEach( ({author, offer, location}) => {
  const cardElement = cardAds.cloneNode(true);
  cardElement.querySelector('.popup__avatar').setAttribute('src', `${author}`)
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = `Кординаты  x = (${location.x}) и  y = (${location.y}) `;
  cardElement.querySelector('.popup__text--price').innerHTML = `${offer.price}`+ '<span>₽/ночь</span>';
  cardElement.querySelector('.popup__text--capacity').textContent = ` ${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = ` Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardElement.querySelector('.popup__description').textContent = `${offer.description}`;
  cardElement.querySelectorAll('.popup__features li').forEach((item) => {
    if (checkAvailability( genereateFeatures(offer.features, cardElement.querySelectorAll('.popup__features li')), item) !== true ) {
      item.style = 'display: none'
    }
  })
  cardElement.querySelector('.popup__type').textContent = getTitel(offer.type);
  const getPhoto = () => {
    const parentPhoto = cardElement.querySelector('.popup__photo').parentNode
    let newPhoto = cardElement.querySelector('.popup__photo').cloneNode(true);
    return  parentPhoto.appendChild(newPhoto)
  }
  for(let i = 0; i < offer.photos.length - 1 ; i++) {
    getPhoto()
  }
  const allPhoto = cardElement.querySelectorAll('.popup__photo')
  for(let i = 0;  i < allPhoto.length; i++) {
    allPhoto[i].setAttribute('src', `${offer.photos[i]}`)
  }
  listAds.appendChild(cardElement);


})


