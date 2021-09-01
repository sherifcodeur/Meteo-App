

const API = '2512f75f39d80de37ff31d19c7bd8fd5' ;
let currentTime = new Date().getHours();

const descriptionTemps = document.getElementById("meteo-jour--texte--description");
const temperature = document.getElementById("meteo-jour--texte--temperature");
const timezoneformeteo = document.getElementById("meteo-jour--texte--timezone");

const divheuredark = document.querySelectorAll('.bloc-meteo--time--lheure.dark');
const divheurelight = document.querySelectorAll('.bloc-meteo--time--lheure.light');

const imageweather = document.getElementById("logo");


navigator.geolocation.getCurrentPosition(response=>{

        

        let lat = response.coords.latitude;

        let long = response.coords.longitude;

       console.log(lat,long);

       fetchAPI(lat,long);

},()=>{

    // will show a message in the app saying they didn't accept so it will show another position (Paris france)

    let lat = 48.8566;
    let long = 2.3522;
    showMessage();

});


function fetchAPI(latitude,longitude){

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=fr&exclude=minutely&appid=${API}`)
    .then((response)=>response.json())
    .then((data)=>{


        

        console.log(data);

        descriptionTemps.innerText = data.current.weather[0].description;

        temperature.innerText = `${Math.floor(data.current.temp)} ° C`  ;

        timezoneformeteo.innerText = data.timezone;

        let iconeName = data.current.weather[0].icon;

        // on check si on a un icone de nuit et jour
        let dayornight = "jour";
        if(iconeName.includes("n")){
            dayornight = "nuit";
        }

        imageweather.innerHTML = `<img src="/resources/${dayornight}/${data.current.weather[0].icon}.svg" alt="image de la meteo du jour"></img>`;

        

        

        let thehour = 0 ;   

        for(let i = 0 ; i < 7 ; i++){
    
            thehour +=3;
    
            if(currentTime + thehour >= 24 ){
    
                currentTime -= 24 ;
            }

           divheuredark[i].innerText = `${currentTime + thehour}  h` ;
           divheurelight[i].innerText = `${Math.floor(data.hourly[thehour].temp)}°C` ;
        }


        
       


       
        


    }).catch();

}



