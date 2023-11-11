// function to get the current date and time in a specific timezone
function getTimeZones() {
    const cities = document.querySelectorAll(".world-clock .city");
    const DateAndTime = luxon.DateTime.now();
    const currentDate = DateAndTime.toFormat('DDDD');
    const currentTime = DateAndTime.toFormat('t');
    const local = luxon.DateTime.local();
    const localTimeZone = local.zoneName;
    const splitTImeZone = localTimeZone.split("/");

    const timeZones = [
    "America/Chicago",
    "America/Los_Angeles",
    "Asia/Dubai",
    "Africa/Nairobi",
    "Africa/Mogadishu",
        "Europe/London"];
    
    console.log(splitTImeZone[1]);
    console.log(splitTImeZone[0]);

    cities.forEach(function(city, index) {
    const cityName = city.querySelector('.city h2');
    const cityTime = city.querySelector('h3');
    const cityDate = city.querySelector('h4');

    const timezoneraw = DateAndTime.setZone(timeZones[index]);
    const nameTimeZones = timezoneraw.zoneName;
    cityName.innerHTML = nameTimeZones.split("/")[1]; // remove /
    // cityName.style.color = 'red';
    // cityTime.innerHTML = worldTime.toFormat('t');
      cityTime.innerHTML = timezoneraw.toFormat('t');
    // cityTime.style.color = "blue";
    cityDate.innerHTML = currentDate.replace(/[!.,]/g, ' ');;

});

}

getTimeZones();


