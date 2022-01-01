function check() {
    let cityName = document.getElementById("cityName").value.toUppercase;
    let result = document.getElementById("result");

    if (cityName === "London") {
        result.innerText = "Your city is one of the top 5 city in the world";
    }
    else if (cityName === "Paris") {
        result.innerText = "Your city is one of the top 5 city in the world";
    }
    else if (cityName === "Newyork") {
        result.innerText = "Your city is one of the top 5 city in the world";
    }
    else if (cityName === "Berlin") {
        result.innerText = "Your city is one of the top 5 city in the world";
    }
    else if (cityName === "Dubai") {
        result.innerText = "Your city is one of the top 5 city in the world";
    }
    else if (cityName === "Karachi") {
        result.innerText = "Your city is one of the top 5 city in the world";
    }
    else {
        result.innerText = "Sorry! Your city is not one of the top 5 city in the world";
    }
}

// switch (cityName) {
//     case 5:
//         console.log("Its 5");
//         break;

//     case "LONDON":
//         result.innerText = "Your city is one of the top 5 city in the world";
// }