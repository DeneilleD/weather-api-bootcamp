
document.querySelector('button').addEventListener('click', getTemp)

function getTemp(){
  let city = document.querySelector('#city').value
  let state = document.querySelector('#state').value
  let country = document.querySelector('#country').value

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=a051db2e1d5f64d273bbc702dc948ee9&units=imperial`
  console.log(url)
  fetch(url) 

    .then(res => res.json()) // parse response as JSON 

    .then(data => { 
      console.log(data) 

      

    document.querySelector('.mainTemp').innerText =  data.main.temp

    document.querySelector('.maxTemp').innerText = data.main.temp_max

    document.querySelector('.minTemp').innerText = data.main.temp_min

    document.querySelector('h3').innerText = data.main.feels_like
   })
    .catch(err => { 
        console.log(`error ${err}`) 
    });
}


