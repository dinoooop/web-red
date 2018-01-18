var appConst = {};
console.log(location);
if (location.hostname == 'localhost') {
    appConst.apiBaseUrl = location.protocol + '//' + location.host + '/portfolio-api/wp-json/apip/v1';
} else {
    appConst.apiBaseUrl = "https://dinoop.000webhostapp.com/wp-json/apip/v1";
}
