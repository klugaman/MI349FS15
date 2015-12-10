function getDate(){
	document.getElementById('date').innerHTML = Date();
	Date().setHours(Date().getHours()+6);
}
