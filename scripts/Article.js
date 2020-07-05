"use strict";
class Article {
    /*
      объект

        метод А: из локалсторадж в объект
        метод Б: из объекта в локалсторадж
        метод В (RENDER): из объекта на страницу
            методы В.а, В.б и т. д.: каскадно формируют разметку?

        метод Г Принять от юзера:
            метод Г.а: со страницы в объект
            метод Б: из объекта в локалсторадж

        метод Д Отобразить начальные:
            проверить локалсторадж
                если пусто -
                    метод Д.а: из файла дата в объект
                    метод Б: из объекта в локалсторадж

                если не пусто -
                    метод А: из локалсторадж в объект
                    метод В: из объекта на страницу

        А. Объект и сначала снаружи, и потом в него же и запись - так отражать не будет - плохо, но так объект один - гут.
        Б. Объект сразу внутри? Это криво сразу внутри класса прописывать исходные данные, но так объект один - гут.
        В. Объект сначала снаружи, а потом запись во внутреннюю копию? Так класс отражает сущность - гут, но объекта два - плохо.
     */
    constructor(container, localStorageClassInst, markup, articleObject, createNode, createClauseComponent) {
        this.container = container;
        this.localStorageClassInst = localStorageClassInst;
        this.markup = markup;
        this.articleObject = articleObject;
        this.createNode = createNode;
        this.createClauseComponent = createClauseComponent;
        this.articleElement = null;
        this.renderInitial();
    }

    render() { // метод В (RENDER): из объекта на страницу
        // методы В.а, В.б и т. д.: каскадно формируют разметку?
        this.articleElement = this.createNode(this.markup);
        this.articleIconElement = this.articleElement.querySelector('.article__icon');
        this.articleIconElement.src = this.articleObject.icon;

        this.articleTitleElement = this.articleElement.querySelector('.article__headline');
        this.articleTitleElement.textContent = this.articleObject.title; // Если h
        // this.articleTitleElement.querySelector('.').value = name; // Если input

        // this.articleObject.items.forEach(function (item) {
        this.articleObject.items.forEach((item) => {
            this.articleElement.appendChild(this.createClauseComponent(item, this.articleObject));
        });

        this.container.appendChild(this.articleElement);
    }

    // writeToArticleObject(clauseItem, text) {
    //     clauseItem.text = text;
    // }

    // getFromPage() { // метод Г Принять от юзера: /* Это и должен быть обработчик input? */
    //     //        метод Г.а: со страницы в объект
    //     //        метод Б: из объекта в локалсторадж
    // }

    renderInitial() { //    метод Д Отобразить начальные:
        //        проверить локалсторадж
        if (localStorage.getItem('article') === null) {
            //            если пусто -
            //                (ЕСЛИ ДВА ОБЪЕКТА: метод Д.а: из файла дата в объект)
            //                метод Б: из объекта в локалсторадж
            this.localStorageClassInst.setToLocalStorage(this.articleObject);
            // console.log('renderInitial true');
        } else {
            //            если не пусто -
            //                метод А: из локалсторадж в объект
            this.localStorageClassInst.getFromLocalStorage(this.articleObject);
            // console.log('renderInitial false');
        }
        //                метод В: из объекта на страницу
        this.render();
    }
}
