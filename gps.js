const ALLOWED_DISTANCE=5000;

function getDistance(lat1,lon1,lat2,lon2){

const R=6371000;

const dLat=(lat2-lat1)*Math.PI/180;
const dLon=(lon2-lon1)*Math.PI/180;

const a=

Math.sin(dLat/2)*Math.sin(dLat/2)+

Math.cos(lat1*Math.PI/180)*

Math.cos(lat2*Math.PI/180)*

Math.sin(dLon/2)*Math.sin(dLon/2);

const c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));

return R*c;

}

function checkLocation(siteLat,siteLng,row){

if(!navigator.geolocation){

alert("الجهاز لا يدعم GPS");

return;

}

navigator.geolocation.getCurrentPosition(function(pos){

const distance=getDistance(

pos.coords.latitude,

pos.coords.longitude,

siteLat,

siteLng

);

if(distance<=ALLOWED_DISTANCE){

enableRow(row);

row.querySelector(".gps").innerHTML="✅ داخل النطاق";

}else{

alert("يجب الوصول للموقع أولاً");

row.querySelector(".gps").innerHTML="❌ خارج النطاق";

}

});

}
