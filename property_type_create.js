function savePropertyTypeCreate(){
    
    let type = document.getElementById("propertytype").value;
    let desc = document.getElementById("typeDescription").value;
    let propertyTypeobj = prepareObject(type,desc);
    //alert(JSON.stringify(propertyTypeobj));

    let options={
        method: "POST",
        body:JSON.stringify(propertyTypeobj),
        headers:{
            "content-type":"application/json"
        }
    }
    const url="http://localhost:3000/properttype/";
    
    
    fetch(url,options).then(() =>{
        showSuccessMessage();
    }).catch((ex) =>{
        hideSuccessMessage();
    });

}

function showSuccessMessage() {
	document.querySelector('[data-success="true"]').classList.remove("d-none");
	hideErrorMessage();
}

function hideSuccessMessage() {
	document.querySelector('[data-success="true"]').classList.add("d-none");
}

function showErrorMessage() {
	document.querySelector('[data-failure="true"]').classList.remove("d-none");
	hideSuccessMessage();
}

function hideErrorMessage() {
	document.querySelector('[data-failure="true"]').classList.add("d-none");
}


function prepareObject(type,desc) {
    let obj={
        type : type,
        desc : desc
    }
    //alert(JSON.stringify(obj));
    return obj;
}
const url="http://localhost:3000/properttype/";

function getPropertyTypes(){
    fetch(url).then(res=>res.json()).then((data)=>{
        preparePropertyTypesHtml(data);
    }).catch((ex)=>{
        alert("Exception");
    })
}
function preparePropertyTypesHtml(data){
    let htmldata="";
    for(let item of data){
        htmldata +=`<tr>
       <td> ${ item.id }</td>
       <td> ${ item.type }</td>
       <td> ${ item.desc }</td>
       </td>

    </tr>`;

    }

	

if(htmldata == ""){
    htmldata="<tr><td class='bg-color' colspan='4' bg-danger>No records found.</td></tr>"
}
document.querySelector("#propertyTypes").innerHTML=htmldata;
}