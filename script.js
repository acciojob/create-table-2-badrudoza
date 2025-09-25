const table=document.querySelector("#myTable");

function createTable() {
    //Write your code here
	let rn=parseInt(prompt("Input number of rows"));
	let cn=parseInt(prompt("Input number of columns"));
	if(rn<1 || cn<1) {
		alert("Negative And Zero Number is Not Allowed");
		return;
	}
	for(let i=0;i<rn;i++)
	{
		const tr=document.createElement("tr");
		for(let j=0;j<cn;j++)
			{
			    const td=document.createElement("td");					
				td.textContent=`Row-${i} Column-${j}`;
				tr.appendChild(td);
			}
		table.appendChild(tr);
	}
}
