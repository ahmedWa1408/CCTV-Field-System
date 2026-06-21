document.addEventListener("DOMContentLoaded", function () {

const welcomeScreen = document.getElementById("welcomeScreen");
const homePage = document.getElementById("homePage");

const searchBtn = document.getElementById("searchBtn");
const backBtn = document.getElementById("backBtn");
const historyBtn = document.getElementById("historyBtn");
const startMission = document.getElementById("startMission");

const searchCard = document.querySelector(".plan-card");
const routeCard = document.getElementById("routeCard");

const planNumber = document.getElementById("planNumber");
const routeName = document.getElementById("routeName");


// شاشة الترحيب

setTimeout(function(){

welcomeScreen.classList.add("hidden");

homePage.classList.remove("hidden");

planNumber.focus();

},2500);


// البحث

searchBtn.onclick=function(){

const number=planNumber.value.trim();

if(number===""){

alert("أدخل رقم الخطة");

return;

}

if(!plans[number]){

alert("رقم الخطة غير موجود");

return;

}

routeName.value=plans[number].route;

searchCard.classList.add("hidden");

routeCard.classList.remove("hidden");

};


// الرجوع

backBtn.onclick=function(){

routeCard.classList.add("hidden");

searchCard.classList.remove("hidden");

routeName.value="";

planNumber.focus();

};


// بدء المهمة

startMission.onclick=function(){

const number=planNumber.value.trim();

window.location.href=

"mission.html?plan="+

encodeURIComponent(number);

};


// السجل

historyBtn.onclick=function(){

window.location.href=

"history.html";

};


// Enter

planNumber.addEventListener("keydown",function(e){

if(e.key==="Enter"){

searchBtn.click();

}

});

});
