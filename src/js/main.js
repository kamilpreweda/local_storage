"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
    <label for="">${plate.text}</label>
    </li>
    `;
  }).join('');
}

addItems.addEventListener('submit', addItem);



