class LocalStorage {
    constructor() {

    }

    getFromLocalStorage() { // метод А: из локалсторадж в объект
        this.articleObject = JSON.parse(localStorage.getItem('article'));
    }

    setToLocalStorage() { // метод Б: из объекта в локалсторадж
        // debugger;
        localStorage.setItem('article', JSON.stringify(this.articleObject));
    }
}
