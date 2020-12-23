class weather {
    constructor(city) {
        this.API_key = '3c448b9a811367f740c8defe3e26a98a';
        this.units = 'units=metric';
    }

    async get(city) {
        const response = await fetch
        (`http://api.openweathermap.org/data/2.5/weather?q=${city}&${this.units}&appid=${this.API_key}`);
        const data = await response.json();
        return data;
    }
}