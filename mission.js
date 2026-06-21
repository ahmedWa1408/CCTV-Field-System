const progressBar=document.getElementById("progressBar");
const progressText=document.getElementById("progressText");
const sitesTable=document.getElementById("sitesTable");

const sites=[
"QSMSM204",
"QSMSM205",
"QSMSM206",
"QSMSM207",
"QSMSM208"
];

let completed=0;

function updateProgress(){

const percent=Math.round((completed/sites.length)*100);

progressBar.style.width=percent+"%";

progressText.innerText=percent+"% مكتمل";

}

sites.forEach(function(code){

const row=document.createElement("tr");

row.innerHTML=`
<td>${code}</td>
<td><button>📍 فتح</button></td>
<td>🔴 خارج النطاق</td>
<td>
<select>
<option>يوجد</option>
<option>لا يوجد</option>
</select>
</td>
<td>
<select>
<option>🟢 يعمل</option>
<option>🟡 يعمل ولا توجد مخالفات</option>
<option>🟤 لا يعمل وتوجد مخالفات</option>
<option>🔴 لا يعمل ولا توجد مخالفات</option>
</select>
</td>
<td><input type="datetime-local"></td>
<td><input type="datetime-local"></td>
<td><input type="text" readonly></td>
<td><input type="file"></td>
<td><input type="text"></td>
`;

sitesTable.appendChild(row);

});

updateProgress();document.querySelectorAll("input[type='datetime-local']").forEach(function(input){

input.addEventListener("change",function(){

const row=input.closest("tr");

const start=row.cells[5].querySelector("input").value;
const end=row.cells[6].querySelector("input").value;

if(start!=="" && end!==""){

const diff=(new Date(end)-new Date(start))/3600000;

row.cells[7].querySelector("input").value=diff.toFixed(2);

}

});

});

document.querySelectorAll("select").forEach(function(select){

select.addEventListener("change",function(){

const row=this.closest("tr");

if(!row.dataset.done){

row.dataset.done="1";

completed++;

updateProgress();

}

});

});

document.getElementById("finishBtn").onclick=function(){

alert("تم إنهاء المهمة بنجاح");

};

document.getElementById("saveBtn").onclick=function(){

alert("تم حفظ المهمة");

};
