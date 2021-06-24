'use strict';

const wrapper = document.querySelector('body');

function DomElement(selector, height, width, bg, fontSize) {
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;
}

DomElement.prototype.create = function () {
   let newElem;
   if (this.selector[0] === '.') {
      newElem = document.createElement('div');
      newElem.classList.add(this.selector.substr(1));
      // wrap.append(newElem);
   } else {
      newElem = document.createElement('p');
      newElem.setAttribute("id", this.selector.substr(1));
      // wrap.append(newElem);
   }

   newElem.style.width = this.width + 'px';
   newElem.style.height = this.height + 'px';
   newElem.style.backgroundColor = this.bg;
   newElem.style.fontSize = this.fontSize + 'px';

   newElem.textContent = 'Хелоу';
  wrapper.append(newElem);

  console.log('newElement: ', newElem);


};

let newElem2 = new DomElement('.abc', 150, 150, 'palegreen', 34);
newElem2.create();


let newElem3 = new DomElement('#abc', 100, 100, 'darkcyan', 34);
newElem3.create();