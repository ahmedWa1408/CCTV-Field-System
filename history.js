const historyTable=document.getElementById("historyTable");

const records=[
{
plan:"1",
route:"عنيزة والمذنب",
operator:"—",
date:"—",
status:"بانتظار الاعتماد"
}
];

records.forEach(function(item){

const row=document.createElement("tr");

row.innerHTML=`
<td>${item.plan}</td>
<td>${item.route}</td>
<td>${item.operator}</td>
<td>${item.date}</td>
<td>${item.status}</td>
<td><button>فتح</button></td>
<td><button>PDF</button></td>
<td><button>طباعة</button></td>
`;

historyTable.appendChild(row);

});

document.getElementById("searchHistory").addEventListener("keyup",function(){

const value=this.value.toLowerCase();

document.querySelectorAll("#historyTable tr").forEach(function(row){

row.style.display=row.innerText.toLowerCase().includes(value)?"":"none";

});

});
