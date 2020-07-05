"use strict";
/* ПЕРЕМЕННЫЕ */
const page = document.querySelector('.page');

/* КОЛБЕКИ */
function createNode(markup) {
  const element = document.createElement('div');
  element.insertAdjacentHTML('afterbegin', markup);
  return element.firstElementChild;
}

function createClauseComponent(type, text, ids, articleObject) {
  const componentData = {
    selector: null,
    markup: null,
  }

  if (type === 'title') {
    componentData.markup = clauseTitleMarkup;
    componentData.selector = '.article__clause-title';
  } else if (type === 'paragraph') {
    componentData.markup = clauseParagraphMarkup;
    componentData.selector = '.article__clause-paragraph';
  }

  return new ClauseComponent(componentData, text, createNode, localStorageClassInst, articleObject).create();
}

/* ЭКЗЕМПЛЯРЫ КЛАССОВ */
const localStorageClassInst = new LocalStorage();
const article = new Article(page, localStorageClassInst, articleMarkup, articleObject, createNode, createClauseComponent);
/* ВЫЗОВЫ ФУНКЦИЙ */
