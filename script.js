let getBtn = document.getElementById('btn');
let map = document.getElementById('map');
let removeBtn = document.getElementById('rbtn');

function getLocation(){
    //console.log("ocate");
    getBtn.disabled = true;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        map.textContent="Geolocation is not supported by this broweser";
    }
}
function showPosition(position){
    storedFnc()
    var positions ={
        lat: position.coords.latitude,
        long: position.coords.longitude,
    }
    localStorage.setItem("location",JSON.stringify(positions));
   map.innerHTML= `<iframe src= "https://maps.google.com/maps?q=${positions.lat}, ${positions.long}&output=embed"
    width="360" height="270" frameborder="0" style="border:0"></iframe>`
}
function removeLocation(){
    localStorage.setItem("location","");
    map.innerHTML='';
    getBtn.disabled = false;
    
}
function storedFnc(){
    const lat = localStorage.getItem('lat');
    const long = localStorage.getItem('long');
    if(lat&&long){
        map.innerHTML= `<iframe src= "https://maps.google.com/maps?q=${lat}, ${long}&output=embed"
        width="360" height="270" frameborder="0" style="border:0"></iframe>`
        getBtn.disabled = true;
    }
}

getBtn.addEventListener('click',getLocation);
removeBtn.addEventListener('click',removeLocation);
