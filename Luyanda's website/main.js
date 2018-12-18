function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-26.172455, 28.127398),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
