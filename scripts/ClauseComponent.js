"use strict";
class ClauseComponent {
    constructor(componentData, createNode, localStorageClassInst, articleObject) {
        this.componentData = componentData;
        this.createNode = createNode;
        this.localStorageClassInst = localStorageClassInst;
        this.articleObject = articleObject;
        this.textEditHandler = this.textEditHandler.bind(this);
        this.textEditHandlerTrigger = this.textEditHandlerTrigger.bind(this);
    }


    getFromPage() { // метод Г Принять от юзера: /* Это и должен быть обработчик input? */
        //        метод Г.а: со страницы в объект
        const component = this.articleObject.items.find(item => item.id = this.id)
        component.text = this.textElement.textContent;
        console.log('getFromPage this.element', this.element);
        //        метод Б: из объекта в локалсторадж
        this.localStorageClassInst.setToLocalStorage(this.articleObject);
        console.log('getFromPage end');
    }


    textEditHandler() {
        /* должен срабатывать по blur, а также по неактивности
        должен быть визуальный фидбек, когда текст сохранен
        должен быть сброс таймаута?
        */
        console.log('textEditHandler');
        this.getFromPage();
    }

    textEditHandlerTrigger() {
        setTimeout(this.textEditHandler, 15000);
    }

    setEventListeners() {
        this.element.addEventListener('blur', this.textEditHandler);
        this.element.addEventListener('change', this.textEditHandlerTrigger);
    }

    setId() {
        const idsArray = this.articleObject.items.map(({ id }) => id);
        this.id = Math.max(...idsArray) + 1;
    }

    create() {
        this.element = this.createNode(this.componentData.markup);
        this.textElement = this.element.querySelector(this.componentData.selector);
        this.textElement.textContent = this.componentData.text;
        this.id = this.componentData.id;
        console.log(this.id, 'this.id');
        this.setEventListeners();
        return this.element;
    }
}
