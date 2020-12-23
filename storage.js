class storage {
    constructor() {
        this.Weather = new weather;
        this.UI = new ui;
    }

    store(city) {
        this.Weather.get(city).then(
            data => { 
                localStorage.setItem(`${city}`,JSON.stringify(data));
                this.UI.draw_added_city(data);
         }
        )
    };

    erase(city) {
        localStorage.removeItem(city);
    }

    get(city) {
        return JSON.parse(localStorage.getItem(city));
    }

}