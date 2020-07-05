class LocalStorage {
    constructor() {

    }

    getFromLocalStorage() { // метод А: из локалсторадж в объект
        return JSON.parse(localStorage.getItem('article'));
    }

    setToLocalStorage(object) { // метод Б: из объекта в локалсторадж
        localStorage.setItem('article', JSON.stringify(object));
        // console.log(localStorage.getItem('article'));
    }
}
