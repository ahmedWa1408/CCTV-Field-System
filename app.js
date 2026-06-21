document.addEventListener("DOMContentLoaded",()=>{

const splashScreen=document.getElementById("splashScreen");
const welcomeScreen=document.getElementById("welcomeScreen");
const homePage=document.getElementById("homePage");

const searchCard=document.getElementById("searchCard");
const routeCard=document.getElementById("routeCard");

const searchBtn=document.getElementById("searchBtn");
const backBtn=document.getElementById("backBtn");

const missionBtn=document.getElementById("missionBtn");
const historyBtn=document.getElementById("historyBtn");

const planNumber=document.getElementById("planNumber");
const routeName=document.getElementById("routeName");



//==========================
// شاشة البداية
//==========================

setTimeout(()=>{

splashScreen.style.display="none";

welcomeScreen.classList.remove("hidden");

setTimeout(()=>{

welcomeScreen.classList.add("hidden");

homePage.classList.remove("hidden");

planNumber.focus();

},2500);

},2500);



//==========================
// البحث
//==========================

searchBtn.onclick=function(){

const number=planNumber.value.trim();

if(number===""){

alert("أدخل رقم الخطة");

planNumber.focus();

return;

}

if(!plans[number]){

alert("رقم الخطة غير موجود");

return;

}

routeName.value=plans[number].route;

searchCard.classList.add("hidden");

routeCard.classList.remove("hidden");

};//==========================
// الرجوع
//==========================

backBtn.onclick=function(){

routeCard.classList.add("hidden");

searchCard.classList.remove("hidden");

routeName.value="";

planNumber.focus();

};



//==========================
// بدء المهمة
//==========================

missionBtn.onclick=function(){

const number=planNumber.value.trim();

if(number===""){

alert("أدخل رقم الخطة");

return;

}

window.location.href=

"mission.html?plan="+

encodeURIComponent(number);

};



//==========================
// سجل العمليات
//==========================

historyBtn.onclick=function(){

window.location.href=

"history.html";

};



//==========================
// Enter
//==========================

planNumber.addEventListener(

"keydown",

function(e){

if(e.key==="Enter"){

searchBtn.click();

}

}

);

});
