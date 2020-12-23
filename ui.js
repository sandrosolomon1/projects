class ui {
    constructor() {
        this.Weather_ui = document.querySelector('.Weather');
        this.saved_cities = document.querySelector('#saved-list');
    }

    draw(data) {
        //log data
        console.log(data);

        this.Weather_ui.innerHTML = `<div class="container" tex><h2>${data.name},${data.sys.country}</h1>
        <h2>${data.main.temp} °C</h2>
        <h2><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"></h2>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col">მინ ტემპ.</th>
                    <th scope="col">მაქს ტემპ.</th>
                    <th scope="col">ტვინის ტყვნა</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-light">
                    <th scope="row">მთავარი</th>
                    <td>${data.main.temp_min}°C</td>
                    <td>${data.main.temp_max}°C</td>
                    <td>${data.main.pressure}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col">სიჩქარე</th>
                    <th scope="col">გრადუსი</th>
                    <th scope="col">ვიზიბილითი თუ რაგაც</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-light">
                    <th scope="row">ქარი</th>
                    <td>${data.wind.speed} კმ/წმ</td>
                    <td>${data.wind.deg}°</td>
                    <td>${data.main.pressure}</td>
                </tr>
            </tbody>
        </table>
        <h4><span class="badge badge-danger">timezone ${data.timezone}</span><h4>
        <h3><span class="badge badge-warning">${data.coord.lon}</span>
        <span class="badge badge-info">${data.coord.lat}</span>
        </h3>
        <br>
        <button type="button" id="save-btn" class="btn btn-success">შეინახე</button>
        <br><br>
      </div>`;
    }

    undraw() {
        this.Weather_ui.innerHTML = '';
    }

    display_massage(text) {
        this.Weather_ui.innerHTML= `<div class="alert alert-dismissible alert-danger">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>${text}</strong> <a href="#" class="alert-link"> .!.</a>
      </div>
      <img src="https://cdn141.picsart.com/313963028400211.png?type=webp&to=min&r=240&SameSite=None">`;
    }

    draw_added_city(city) {
        this.saved_cities.innerHTML += ` <tr class="table-primary">
            <th scope="row">${city.name}</th>
            <td>${city.main.temp} °C</td>
            <td><img src="http://openweathermap.org/img/w/${city.weather[0].icon}.png" width=30 height=30></td>
        </tr>`
    }

}