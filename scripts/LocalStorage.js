class LocalStorage {
    constructor() {

    }

    getFromLocalStorage(object) { // метод А: из локалсторадж в объект
        object = JSON.parse(localStorage.getItem('article'));
        // console.log(object);
    }

    setToLocalStorage(object) { // метод Б: из объекта в локалсторадж
        localStorage.setItem('article', JSON.stringify(object));
        console.log(localStorage.getItem('article'));
    }
}
