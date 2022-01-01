function check() {
    let cityName = document.getElementById("cityName").value.toUppercase;
    // let result = document.getElementById("result");

    switch (cityName) {

        case "LONDON":
            console.log("switch matched");
            break;
        case "PARIS":
            console.log("switch matched");
            break;
        case "NEWYORK":
            console.log("switch matched");
            break;
        case "DUBAI":
            console.log("switch matched");
            break;
        default:
            console.log("not matched");
            break;
    }
}