document.addEventListener("DOMContentLoaded",()=>{

const splash=document.getElementById("splashScreen");
const welcome=document.getElementById("welcomeScreen");
const home=document.getElementById("homePage");

const searchCard=document.getElementById("searchCard");
const routeCard=document.getElementById("routeCard");

const planNumber=document.getElementById("planNumber");
const routeName=document.getElementById("routeName");

const searchBtn=document.getElementById("searchBtn");
const backBtn=document.getElementById("backBtn");
const missionBtn=document.getElementById("missionBtn");
const historyBtn=document.getElementById("historyBtn");



/* شاشة الشعار */

setTimeout(()=>{

splash.style.display="none";

welcome.classList.remove("hidden");



setTimeout(()=>{

welcome.classList.add("hidden");

home.classList.remove("hidden");

planNumber.focus();

},2500);

},2500);



/* البحث */

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

};/* الرجوع */

backBtn.onclick=function(){

routeCard.classList.add("hidden");

searchCard.classList.remove("hidden");

routeName.value="";

planNumber.focus();

};



/* بدء المهمة */

missionBtn.onclick=function(){

const number=planNumber.value.trim();

if(number===""){

alert("أدخل رقم الخطة أولاً");

return;

}

window.location.href=

"mission.html?plan="+

encodeURIComponent(number);

};



/* سجل الخطط السابقة */

historyBtn.onclick=function(){

window.location.href=

"history.html";

};



/* Enter */

planNumber.addEventListener(

"keydown",

function(e){

if(e.key==="Enter"){

searchBtn.click();

}

}

);

});
