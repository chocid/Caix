function date(){
var x=document.querySelector(".date")

	
	var d= new Date()
	var day= d.getDate()
	var month= d.getMonth()+1
	var year= d.getFullYear()
	
	if(day<10){
	day="0"+day;
	}
	
	if(month<10){
	month="0"+month;
	}
	
	x.innerHTML=day+"/"+month+"/"+year
}
setInterval(date , 1000)




const alert=()=>{
swal({
  title: "Cuenta bloqueada",
  text: "Por favor, cumpla las condiciones para desbloquear su cuenta",
  icon: "warning",
  dangerMode: true,
})}

function vir(){
window.location="virement.html"
}

const alert1=()=>{
swal({
  title: "póngase en contacto con el banco para desbloquear su cuenta",
  text: "transferencia denegada",
  icon: "error",
  dangerMode: true,
})}