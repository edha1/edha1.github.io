

fetch("beamlines_data.json").then((res)=>{return res.json()}).then(function(data){
    console.log(data)
    for (let i = 0, len = 8; i < len; i++){
        arr = data[i];
        beams = arr['beamlines'];
        for (let j = 0, len = beams.length; j< len; j++){ 
            arr1 = beams[j];
            coordinates = arr1['position'];
            name1 = arr1['name'];
            description = arr1['description'].toString()
            url= arr1['url'];
            name2 = name1.toString();
            var marker = L.marker([coordinates[0],coordinates[1]]).addTo(map);
            marker.bindPopup("<h1 class = labels>"+name2+"</h1><b><p class = description>"+description+"</p></b><b><p class = url><a href='" +url+"'>Click here for more information</a></p></b>").openPopup();
        }
    }
})


var count = 1 
var marker = null
var circle = null 
var map = L.map('map').setView([51.574391, -1.31072],17); 
map.locate({watch:true});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap |  </a>' +'&copy; <a href="https://www.diamond.ac.uk/Home.html">DiamondLightSource</a>'
}).addTo(map);

var imageUrl = 'BaseUnder.png';
const topRightCoords = [51.57168183170403, -1.3173294067382815];
const bottomRightCoords = [51.57701619673675, -1.304454803466797];
const imageBounds = new L.LatLngBounds(topRightCoords, bottomRightCoords);
var imageOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(map);
var imageUrl2 = 'BaseOver.png'; 
var imageOverlay2 = L.imageOverlay(imageUrl2, imageBounds).addTo(map);

function onLocationFound(e) {
    var radius = e.accuracy;
    if (marker != null){ 
        map.removeLayer(marker); 
        map.removeLayer(circle); 
    }
    marker = L.marker(e.latlng).addTo(map);
    circle = L.circle(e.latlng, radius).addTo(map);
    count = 0 
}

function onLocationError(e){ 
    count ++ 
}
function newLatLng(e){ 
    e.latLng = new e.latLng
}
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

if (count >=3){ 
    alert(e.message); 
}


