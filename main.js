const city=document.querySelector('input').value
const apiKey = "133e179b19cc4c4ab0311edfc8a233f5";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=133e179b19cc4c4ab0311edfc8a233f5`;

const response=await fetch(apiUrl)
const data=await response.json()
console.log(data);