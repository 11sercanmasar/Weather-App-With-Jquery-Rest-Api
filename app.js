const response = new Service();
const date = new Date();
const year = date.getFullYear();
const month = date.getUTCMonth();
const day = date.getDay();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

$('#search').on('keyup', function(event){
    if(event.keyCode == '13'){
    let city = $('#search').val().trim();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=801cdb12a046cfd97370266ee636abba&units=metric&lang=tr` 
    response.get(url).then(response=> callback(response));
    }  
})

function callback(response){
    console.log(response)
    let icon = response.weather[0].icon;
    let url= `http://openweathermap.org/img/wn/${icon}@2x.png`;
    $('.image').attr('src', url);
    $('.info').text(response.weather[0].description);
    $('.degree').text(Math.trunc(response.main.temp));
    $('.felt-temperature').text(Math.trunc(response.main.feels_like));
    $('.hour').text(`${hour}:${minute}:${second}`);
    $('.date').text(`${day}/${month}/${year}`);
    $('.min-max ').text(`${Math.trunc(response.main.temp_min)}°C/${Math.trunc(response.main.temp_max)}°C`);
    $('.humidity').text(response.main.humidity);
    $('.pressure').text(response.main.pressure);
    $('.visibility').text(Math.log(response.visibility) * Math.LOG10E+6 | 0 );
    $('.wind').text(response.wind.speed);
    $('.compass-img').css
    ({
        'border': '4px solid red'   
    });
    $('.city').text(`${response.name}/${response.sys.country}`); 
    $('.city').addClass("bounce"); 
    $('#search').val(" ");
    $('.compass-img').addClass('animate-compass'); 
}
