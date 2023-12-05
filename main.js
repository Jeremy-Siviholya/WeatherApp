const city=document.querySelector('input')
const degre = document.querySelector(".degre");
const names=document.querySelector('.name')
const wind=document.querySelector('.wind')
const humidity=document.querySelector('.humidity')
async function checkWheather (city){
    const apiKey = "133e179b19cc4c4ab0311edfc8a233f5";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${apiKey}`;
    const response=await fetch(apiUrl)
    const data=await response.json()

    console.log(data);

    degre.innerHTML = `${Math.round(data.main.temp)}<sup>o</sup>C`;
    names.innerHTML=data.name
    wind.innerHTML=`${data.wind.speed} km/h`
    humidity.innerHTML=`${data.main.humidity}%`

}
document.querySelector('img').addEventListener('click',
()=>{

    checkWheather(city.value)
}
)


