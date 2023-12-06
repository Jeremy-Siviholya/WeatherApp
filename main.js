const city=document.querySelector('input')
const degre = document.querySelector(".degre");
const names=document.querySelector('.name')
const wind=document.querySelector('.wind')
const humidity=document.querySelector('.humidity')
const icon = document.querySelector(".icon");
const img = document.querySelector(".image");

async function checkWheather (city){
    const apiKey = "133e179b19cc4c4ab0311edfc8a233f5";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city},uk&APPID=${apiKey}`;
    const response=await fetch(apiUrl)
    const data=await response.json()

    // console.log(data);
    if(data.cod =='404')
    {
        alert('not found')
    }

    degre.innerHTML = `${Math.round(data.main.temp)}<sup>o</sup>C`;
    names.innerHTML=data.name
    wind.innerHTML=`${data.wind.speed} km/h`
    humidity.innerHTML=`${data.main.humidity}%`
    switch (data.weather[0].main) {
      case "Clouds":
        img.src = "./public/Assets/images/clouds.png";
        break;
      case "Clear":
        img.src = "./public/Assets/images/clear.png";
        break;
      case "Rain":
        img.src = "./public/Assets/images/rain.png";
        break;
      case "Drizzle":
        img.src = "./public/Assets/images/drizzle.png";
        break;
      case "Mist":
        img.src = "./public/Assets/images/mist.png";
        break;

      default:
        break;
    }


}
icon.addEventListener('click',
()=>{

    checkWheather(city.value)
     
}
)


