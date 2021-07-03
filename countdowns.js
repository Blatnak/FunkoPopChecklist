function updateCountdownOchaco() {
    let releaseDate = new Date('Dec 21, 2021 00:00:00').getTime()
    let currentDate = new Date().getTime()
    let difference = releaseDate - currentDate

    let day = Math.floor(difference / 1000 / 60 / 60 / 24)
    let hour = Math.floor(difference / 1000 / 60 / 60) % 24
    let minute = Math.floor(difference / 1000 / 60) % 60
    let second = Math.floor(difference / 1000) % 60
    
    document.getElementById('daysochaco').innerHTML = day
    document.getElementById('hoursochaco').innerHTML = hour < 10 ? '0' + hour : hour
    document.getElementById('minutesochaco').innerHTML = minute < 10 ? '0' + minute : minute
    document.getElementById('secondsochaco').innerHTML = second < 10 ? '0' + second : second

    if (difference < 0) {
      clearInterval(intervalOchaco)
 
      let header2 = document.createElement('H2')
      header2.classList.add('funko-avaliable')
      let textAvaliable = document.createTextNode('¡Funko disponible!')
      let ochacoIndicators = document.getElementById('countdown-ochaco')
      header2.appendChild(textAvaliable)
      ochacoIndicators.parentNode.insertBefore(header2, ochacoIndicators)

      document.getElementById('countdown-ochaco').style.display = 'none'
    }
  }

  let intervalOchaco = setInterval(updateCountdownOchaco, 1000)

  function updateCountdownNejire() {
    let releaseDate = new Date('Aug 03, 2021 00:00:00').getTime()
    let currentDate = new Date().getTime()
    let difference = releaseDate - currentDate

    let day = Math.floor(difference / 1000 / 60 / 60 / 24)
    let hour = Math.floor(difference / 1000 / 60 / 60) % 24
    let minute = Math.floor(difference / 1000 / 60) % 60
    let second = Math.floor(difference / 1000) % 60
    
    document.getElementById('days-nejire').innerHTML = day
    document.getElementById('hours-nejire').innerHTML = hour < 10 ? '0' + hour : hour
    document.getElementById('minutes-nejire').innerHTML = minute < 10 ? '0' + minute : minute
    document.getElementById('seconds-nejire').innerHTML = second < 10 ? '0' + second : second

    if (difference < 0) {
      clearInterval(intervalNejire)
 
      let header2 = document.createElement('H2')
      header2.classList.add('funko-avaliable')
      let textAvaliable = document.createTextNode('¡Funko disponible!')
      let nejireIndicators = document.getElementById('countdown-nejire')
      header2.appendChild(textAvaliable)
      nejireIndicators.parentNode.insertBefore(header2, nejireIndicators)

      document.getElementById('countdown-nejire').style.display = 'none'
    }
  }
  
  let intervalNejire = setInterval(updateCountdownNejire, 1000)