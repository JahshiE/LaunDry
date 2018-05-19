function changeSpan(number){
    // alert("YAY");

    document.getElementById("calculatedHours").innerHTML = number;
}

function testapi(){
    var aucklandid = "2193734";
    var apikey = "ab3b534277236c4d3ea8a475ecef0705";
    var uri = "http://api.openweathermap.org/data/2.5/forecast";

    var fulluri = uri + "?id=" + aucklandid + "&mode=json&APPID=" + apikey

    var xhr = new XMLHttpRequest();
    xhr.open("GET", fulluri, true);
    xhr.onload = function () {
        var forecastdata = JSON.parse(xhr.responseText);
        document.getElementById("datetime").innerHTML = forecastdata.list[0].dt_txt;
        document.getElementById("weather").innerHTML = forecastdata.list[0].weather[0].main;
        
    }
    xhr.send(null);
}

function getWeatherData(latlong) {
    
}

function getTwoBlocks(){
    var aucklandid = "2193734";
    var apikey = "ab3b534277236c4d3ea8a475ecef0705";
    var uri = "http://api.openweathermap.org/data/2.5/forecast";

    var fulluri = uri + "?id=" + aucklandid + "&mode=json&APPID=" + apikey

    var xhr = new XMLHttpRequest();
    xhr.open("GET", fulluri, true);
    xhr.onload = function () {
        var forecastdata = JSON.parse(xhr.responseText);

        // Turns button to read the weather (eg. Rain/Cloudy/Sunny etc.)
        document.getElementById("blockOne").innerHTML = forecastdata.list[0].weather[0].main;
        document.getElementById("blockTwo").innerHTML = forecastdata.list[1].weather[0].main;

        document.getElementById("weatherTitleThreeHours").innerHTML ="Weather in the next 3 hours"
        document.getElementById("weatherTitleThreeToSix").innerHTML  ="Weather for 3 to 6 hours "

        blockOne = forecastdata.list[0].weather[0].main;
        blockTwo = forecastdata.list[1].weather[0].main;
        changeButtonColor(blockOne, "blockOne");
        changeButtonColor(blockTwo, "blockTwo");

        if (blockOne == "Rain" || blockTwo =="Rain"){
            vartest = findNextTime();
            
        } else {
            document.getElementById("mainStatement").innerHTML = "You can hang your washing out it isn't due to rain for the next 6 hours"

        }


        
    }
    xhr.send(null);
}

function changeButtonColor(forecast, buttonId) {
    // Changes button color weather it's raining or not
    if (forecast == "Rain") {
        myButton = document.getElementById(buttonId).style
        myButton.backgroundColor = 'blue';
        myButton.borderColor = 'blue';
        myButton.color = 'white';
    }
    // Changes button color weather 
    if (forecast == "Clouds") {
        myButton = document.getElementById(buttonId).style
        myButton.backgroundColor = 'grey';
        myButton.borderColor = 'grey';
        myButton.color = 'white';
    }

        if (forecast == "Sun") {
        myButton = document.getElementById(buttonId).style
        myButton.backgroundColor = 'yellow';
        myButton.borderColor = 'yellow';
        myButton.color = 'white';
    }
}

function findNextTime(){
    var aucklandid = "2193734";
    var apikey = "ab3b534277236c4d3ea8a475ecef0705";
    var uri = "http://api.openweathermap.org/data/2.5/forecast";

    var fulluri = uri + "?id=" + aucklandid + "&mode=json&APPID=" + apikey

    var xhr = new XMLHttpRequest();
    xhr.open("GET", fulluri, true);
    xhr.onload = function () {
        var forecastdata = JSON.parse(xhr.responseText);
        var i; // at the next 6 hours
        var j; 
        for (i = 2,  j =3; i < 24 ; i++, j++ ){
            if (forecastdata.list[i].weather[0].main && forecastdata.list[j].weather[0].main != "Rain"){
                document.getElementById("mainStatement").innerHTML = "Looking at the future weather you may be able to do your washing on " + forecastdata.list[i].dt_txt;

            }else{
                document.getElementById("mainStatement").innerHTML = "Sorry looking at the weather forecast there doesn't look like a gap in the rain for the next 3 days, check back later";
 
            }


        }
        
    }
    xhr.send(null);
}

function changeImage(){

}


