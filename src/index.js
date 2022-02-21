import Book from '../modules/app.js';
import { DateTime } from '../node_modules/luxon/src/luxon.js';

const bookObj = new Book();
bookObj.fillBooks();

const form = document.querySelector('#form');
form.addEventListener('submit', bookObj.storeBooks);
const diplayContainer = (item) => {
  const disObj = new Book();
  disObj.updateSection(item);
};

window.diplayContainer = diplayContainer;

const date = DateTime.now();
const currentDate = date.toLocaleString(
  DateTime.DATETIME_FULL_WITH_SECONDS,
  (DateTime.DATETIME_FULL_WITH_SECONDS.timeZoneName = undefined),
);
document.getElementById('time-val').innerHTML = currentDate;
