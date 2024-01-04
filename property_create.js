// function saveproperty() {
//     alert(" 'Registration Id' field is required ");
//     alert(" 'Type' field is required ");
//     alert(" 'Owner' field is required ");
//     alert(" 'Orders' field is required ");
//     alert(" 'Description' field is required ");
// }


/*function showAlert(){
	alert(document.getElementById("Registration id").value);
	alert(document.getElementById("Type").value);
	alert(document.getElementById("Registration Owner").value);
	alert(document.getElementById("Address").value);
	alert(document.getElementById("Description").value);

}*/

/*function showAlertMessage() {
	alert("some Message");
}*/



function property_create()  {
    let regid = document.getElementById("regid").value;
    let type = document.getElementById("type").value;
    let regowner = document.getElementById("regowner").value;
    let address = document.getElementById("address").value;
    let desc = document.getElementById("desc").value;
    prepareObject(regid,type,regowner,address,desc);
}
function prepareObject(regid,type,regowner,address,desc) {
    let obj={
        RegID:regid,
        Type:type,
        RegOwner:regowner,
        Address:address,
        Description:desc
    }
	//alert(obj);
	alert(JSON.stringify(obj));

	//string formated object.
	let data ='{"name":"jyothi","email": "j@gmail.com"}';
	//alert(data);
	//convert to an object.
	alert(JSON.parse(data));
	
};