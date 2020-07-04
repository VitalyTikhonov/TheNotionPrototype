"use strict";
class ClauseComponent {
  constructor(componentData, text, createNode) {
    this.componentData = componentData;
    this.text = text;
    this.createNode = createNode;
  }

  create() {
    this.element = this.createNode(this.componentData.markup);
    this.textElement = this.element.querySelector(this.componentData.selector);
    this.textElement.textContent = this.text;
    return this.element;
  }
}
