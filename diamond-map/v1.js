var popup = L.popup(); 
var map = L.map('map').setView([51.574391, -1.31072],20); 

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circle = L.circle([51.57437493079715, -1.3109280570165434],{ 
    color: '#5795cf', 
    fillColor: '#699fd1',
    fillOpacity: 0.5, 
    radius: 150
}).addTo(map)


var marker = L.marker([51.57505288496901, -1.3139513147669035]).addTo(map); 

function onMapClick(e) { 
    popup 
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map); 
}

let circlepopup = circle.bindPopup("<h1 id = 'circlepopup'>Diamond Light Source</h1>");


function openCircle() { 
    circlepopup.openPopup()
}

function closeCircle() { 
    circlepopup.closePopup()
}

map.on('click', onMapClick); 
marker.bindPopup("<p id = 'markerpopup'>Harwell Oxford </p>").openPopup();
circle.on('mouseover', openCircle);
circle.on('mouseout', closeCircle); 

