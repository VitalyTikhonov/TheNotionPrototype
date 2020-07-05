class LocalStorage {
    constructor() {

    }

    getFromLocalStorage(object) { // метод А: из локалсторадж в объект
        object = JSON.parse(localStorage.getItem('article'));
    }

    setToLocalStorage(object) { // метод Б: из объекта в локалсторадж
        // debugger;
        console.log('setToLocalStorage', this)
        localStorage.setItem('article', JSON.stringify(object));
    }
}
