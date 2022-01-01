function think() {
    var temp = document.getElementById("temp").value;
    var minTemp = document.getElementById("minTemp").value;
    var maxTemp = document.getElementById("maxTemp").value;
    var result = document.getElementById("result");

    if ((temp <= 10) || (minTemp < -10)){
        result.innerText = "Don't go out, it's too cold";
    }
    else if (temp > 35 || maxTemp > 35){
        result.innerText = "Don't go outside, it's too hot";
    }
    else if ((temp >= -10 && temp <= 5) || (minTemp >= -10 && minTemp <= 5)){
        result.innerText = "Carry coat & be carefull";
    }
    else if ((temp > 5 && temp <= 20) || (minTemp <= 20)) {
        result.innerText = "Carry jacket with you";
    }
    else if (temp > 20 && temp <= 35){
        result.innerText = "Don't carry jacket";
    }
}

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });