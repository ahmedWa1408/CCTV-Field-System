const params=new URLSearchParams(window.location.search);
const planNumber=params.get("plan");

const table=document.getElementById("sitesTable");
const progressBar=document.getElementById("progressBar");
const progressText=document.getElementById("progressText");

let sites=[];

if(planNumber==="1"){
sites=plan1;
}

let completed=0;

function updateProgress(){

const percent=sites.length===0?0:Math.round((completed/sites.length)*100);

progressBar.style.width=percent+"%";

progressText.innerText=percent+"% مكتمل";

}

function createTable(){

table.innerHTML="";

sites.forEach(function(site,index){

const row=document.createElement("tr");

row.innerHTML=`
<td>${site.code}</td>

<td>
<a href="${site.map}" target="_blank">
📍 فتح
</a>
</td>

<td class="gps">
خارج النطاق
</td>

<td>
<select disabled class="xml">
<option>يوجد</option>
<option>لا يوجد</option>
</select>
</td>

<td>
<select disabled class="status">
<option>🟢 يعمل</option>
<option>🟡 يعمل ولا توجد مخالفات</option>
<option>🟠 لا يعمل وتوجد مخالفات</option>
<option>🔴 لا يعمل ولا توجد مخالفات</option>
</select>
</td>

<td>
<input disabled type="datetime-local" class="start">
</td>

<td>
<input disabled type="datetime-local" class="end">
</td>

<td>
<input readonly class="hours">
</td>

<td>
<input disabled type="file">
</td>

<td>
<input disabled type="text">
</td>
`;

table.appendChild(row);

});

updateProgress();

}

createTable();function enableRow(row){

row.querySelector(".gps").innerHTML="✅ داخل النطاق";

row.querySelectorAll("select").forEach(function(item){

item.disabled=false;

});

row.querySelectorAll("input").forEach(function(item){

if(item.type!=="file"&&item.className!=="hours"){

item.disabled=false;

}

});

}

document.querySelectorAll("#sitesTable tr").forEach(function(row){

row.cells[1].onclick=function(){

enableRow(row);

};

});

document.addEventListener("change",function(e){

if(e.target.classList.contains("status")){

const row=e.target.closest("tr");

if(!row.dataset.done){

row.dataset.done="1";

completed++;

updateProgress();

}

}

});

document.addEventListener("change",function(e){

if(e.target.classList.contains("end")){

const row=e.target.closest("tr");

const start=row.querySelector(".start").value;

const end=row.querySelector(".end").value;

if(start!==""&&end!==""){

const diff=(new Date(end)-new Date(start))/3600000;

row.querySelector(".hours").value=diff.toFixed(2);

}

}

});document.getElementById("saveBtn").onclick=function(){

localStorage.setItem(

"lastMission",

JSON.stringify({

plan:planNumber,

date:new Date().toLocaleString(),

completed:completed

})

);

alert("تم حفظ المهمة");

};

document.getElementById("finishBtn").onclick=function(){

alert("تم إنهاء المهمة");

window.location.href="history.html";

};

document.getElementById("pdfBtn").onclick=function(){

window.print();

};

document.getElementById("printBtn").onclick=function(){

window.print();

};
