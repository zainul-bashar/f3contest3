const getBtn = document.getElementById('btn');
let map = document.getElementById('map');
const removeBtn = document.getElementById('rbtn');
removeBtn.addEventListener('click',removeLocation);
getBtn.addEventListener('click',getLocation);
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
        //console.log("ocate");
    }
    else{
        map.textContent="Geolocation is not supported by this broweser";
    }
}
function showPosition(position){
    var positions ={
        lat: position.coords.latitude,
        long: position.coords.longitude,
    }
    localStorage.setItem("location",JSON.stringify(positions));
    map.innerHTML= <iframe src= "https://maps.google.com/maps?q=${positions.lat}, ${positions.long}&z=15&output=embed"
    width="360" height="270" frameborder="0" style="border:0"></iframe>;
}
function removeLocation(){
    localStorage.setItem("location"," ");
    
}
