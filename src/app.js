const App = {
  init: () => {
    $(function() {

      const $form =  $('#signin-form')
      const $submitButton = $form.find("#signInSubmit")
      const $email = $form.find("#signInEmail")
      const $password = $form.find("#signInPassword")
      const apiKey = 'cfed679d59a400ce311452d1f70e6c4d'
      const $userCity = $form.find('#userCity')
    
    //https://api.openweathermap.org/data/2.5/weather?q=Plovdiv&appid=cfed679d59a400ce311452d1f70e6c4d
        $submitButton.on("click", function() {
    
            const email = $email.val()
            const password = $password.val()
            const userData = {
                email,
                password,
            }
            
            const userCity = $userCity.val()
            console.log(userData)
            fetchWeather(userCity)
        })
    
        function fetchWeather(city) {
            $form.find('#error-message').addClass("d-none")
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
            $.get(url, function(response) {
                console.log(response)
              })
            .done(function(response) {
                // const windSpeed = response.wind.speed
                // $form.find('#windSpeed').html(windSpeed)

                const averageTemp = getAverageTemp(response.list)
                const windyHours = getWindyHours(response.list)
                const windyData = getWindyInfo(windyHours)
                
                console.log(averageTemp, windyData)

            })
            .fail(function() {
                $form.find('#error-message').removeClass("d-none")
            })
            .always(function() {
                
            });
        }
    
    
        console.log( "ready!" );
    });
  },

}

const getAverageTemp = (list = [], unitsSign = "℃") => {
  const accTemp = list.reduce((acc, curr) => {
    return acc + curr.main.temp
  }, 0)
  const temp = (accTemp / list.length).toFixed(2)
  return `${temp} ${unitsSign}`
}
 
const getWindyHours = (list = [], windAbove = 2) => {
  const windyHours = list.filter( weather => {
    return weather.wind.speed > windAbove   
   })
  return windyHours
}

const getWindyInfo = (list = []) => {
  return list.map(weather => {
    return  {
      date: weather.dt_txt,
      speed: weather.wind.speed,
    }
   })
}




export const Test = 1

export default App
