const Weather = new weather;
const UI = new ui;
const Storage = new storage;
let city;

// RIGHT YOU ARE MADAFAKAAAAAAAAAAAAAAA

function load_data() {
    if(localStorage.length) {
            for(let i=0;i<localStorage.length;i++){
                UI.draw_added_city(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
    };

//load from localstorage
load_data();

document.querySelector('#city').addEventListener('keyup', (e) => {
    city = e.target.value;

    if(city != '') {
        Weather.get(city).then(
            data => {if(data.message != "city not found") { UI.draw(data) } else { UI.display_massage('ქალაქი ჩაწერე თუ შეიძლება'); }
            }
        );
    }else{
        UI.undraw();
    }

});

document.querySelector('.Weather').addEventListener('click', (e) => {
    if(e.target.id == "save-btn") Storage.store(city.toLowerCase());
});

document.querySelector('#saved-list').addEventListener('click', (e) => {
        let scope = e.target.parentElement.children[0].innerText;
        let data = Storage.get(scope.toLowerCase());

        UI.draw(data);

        //delete target
        e.target.parentElement.remove();
        //remove from storage
        Storage.erase(scope.toLowerCase());
    }
);


