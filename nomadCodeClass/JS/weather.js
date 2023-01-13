const API_KEY="";//개인 Key

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    //console.log("you live in ", lat, lng);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&unit=metric`
    fetch(url).then(response=>response.json()).then(data=>{
        /*console.log(data.name, data.weather[0].main);
        const cityData = data.name;
        const weatherData=data.weather[0].main;*/

        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        console.log(data);
        const tempC=(data.main.temp-273.15).toFixed(2);//절대온도(Kelvin) -> 섭씨온도(Rankin).소수점표시
        weather.innerHTML=`${data.weather[0].main} / ${tempC}&#8451;`;
        city.innerText=data.name;
    });
    //fetch(): 서버의 응답을 5분까지 기다림. 
    //then(): 완료된 후 chain되어 이어질 method들.(ajax의 on)
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
