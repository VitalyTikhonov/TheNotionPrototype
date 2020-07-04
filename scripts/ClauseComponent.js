"use strict";
class ClauseComponent {
    constructor(componentData, text, createNode) {
        this.componentData = componentData;
        this.text = text;
        this.createNode = createNode;
        this.textEditHandler = this.textEditHandler.bind(this);
        this.textEditHandlerTrigger = this.textEditHandlerTrigger.bind(this);
    }

    textEditHandler() {
        /* должен срабатывать по blur, а также по неактивности
        должен быть визуальный фидбек, когда текст сохранен
        должен быть сброс таймаута?
        */
        console.log('textEditHandler');
    }

    textEditHandlerTrigger() {
        setTimeout(textEditHandler, 15000);
    }

    setEventListeners() {
        this.element.addEventListener('blur', this.textEditHandler);
        this.element.addEventListener('change', this.textEditHandlerTrigger);
    }

    create() {
        this.element = this.createNode(this.componentData.markup);
        this.textElement = this.element.querySelector(this.componentData.selector);
        this.textElement.textContent = this.text;
        this.setEventListeners();
        return this.element;
    }
}
