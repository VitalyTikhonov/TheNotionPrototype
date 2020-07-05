"use strict";
class ClauseComponent {
    constructor(componentData, createNode, localStorageClassInst, articleObject) {
        this.componentData = componentData;
        this.createNode = createNode;
        this.localStorageClassInst = localStorageClassInst;
        this.articleObject = articleObject;
        this.textEditHandler = this.textEditHandler.bind(this);
        // this.textEditHandlerTrigger = this.textEditHandlerTrigger.bind(this);
    }


    getFromPage() { // метод Г Принять от юзера: /* Это и должен быть обработчик input? */
        //        метод Г.а: со страницы в объект
        const component = this.articleObject.items.find(item => item.id === this.id);
        // console.log(component);
        component.text = this.textElement.textContent;
        //        метод Б: из объекта в локалсторадж
        this.localStorageClassInst.setToLocalStorage(this.articleObject);
    }


    textEditHandler() {
        /* должен срабатывать по blur, а также по неактивности
        должен быть визуальный фидбек, когда текст сохранен
        должен быть сброс таймаута?
        */
        this.getFromPage();
    }

    // textEditHandlerTrigger() {
    //     setTimeout(this.textEditHandler, 15000);
    // }

    setEventListeners() {
        this.textElement.addEventListener('blur', this.textEditHandler);
        // this.element.addEventListener('input', this.textEditHandlerTrigger);
    }

    // setId() {
    //     const idsArray = this.articleObject.items.map(({ id }) => id);
    //     this.id = Math.max(...idsArray) + 1;
    // }

    create() {
        this.element = this.createNode(this.componentData.markup);
        this.textElement = this.element.querySelector(this.componentData.selector);
        this.textElement.textContent = this.componentData.text;
        this.id = this.componentData.id;
        this.setEventListeners();
        return this.element;
    }
}
