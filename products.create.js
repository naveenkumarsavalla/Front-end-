function saveProductData() {
	let title =document.getElementById("title").value; 
	let desc =document.getElementById("desc").value;
    let price =document.getElementById("price").value; 
    let discper =document.getElementById("discountpercentage").value; 
    let rating =document.getElementById("rating").value; 
    let stock  =document.getElementById("stock").value; 
    let  brand =document.getElementById("brand").value; 
    let category =document.getElementById("category").value; 
    let thumbnail  =document.getElementById("thumbnail").value; 
	let propertyTypeObj=  prepareObject(title,  desc , price, discper, rating,  stock, brand, category, thumbnail);



	//alert(obj);
   
	//alert(JSON.stringify(obj))
//alert(JSON.parse(obj));
	
	
	
    let options = {
        method: "POST",
        body: JSON.stringify(propertyTypeObj),
        headers: {
            "content-type": "application/json"
        }
    }
    const url ="https://dummyjson.com/products/"
        fetch(url, options).then(()=>{
            showSuccessMessage();
            
        }).catch((ex)=>{
            showErrorMessage();
            
        });
}
	

function showSuccessMessage(){
document.getElementById("successmsg").classList.remove("d-none");
hideErrorMessage();
setTimeout(()=>{
    hideSuccessMessage()

}, 2000)

}
function hideSuccessMessage(){
document.getElementById("successmsg").classList.add("d-none")
}
function showErrorMessage(){
document.getElementById('failuremsg').classList.remove("d-none");
hideSuccessMessage();
setTimeout(()=>{
    hideErrorMessage()
    

}, 2000)
}
function hideErrorMessage(){
document.getElementById("failuremsg").classList.add("d-none")
}
function prepareObject(title,  desc , price, discper, rating,  stock, brand, category, thumbnail){
let obj = {
    title: title,
    desc: desc,
    price: price,
    discper: discper,
    rating: rating,
    stock: stock,
    brand: brand,
    category: category,
    thumbnail: thumbnail

}
return obj;
}
const url ="https://dummyjson.com/products"


function getProducts(){
    fetch(url).then(res=>res.json()).then((data)=>{
        preparePropertyTypesHtml(data);
        
    }).catch((ex)=>{
        alert("exception")
    })
}

function preparePropertyTypesHtml(data){
    let htmldata = " ";
    for(let item of data){
        htmldata+= ` <tr>
        <td>${item.title}</td>
        <td>${item.description}</td>
        <td>${item.price}</td>
        <td>${item.discountpercentage}</td>
        <td>${item.rating}</td>
        <td>${item.stock}</td>
        <td>${item.brand}</td>
        <td>${item.category}</td>
        <td>${item.thumbnail}</td>
    </tr>`;
    }

if(htmldata == ""){
    htmldata = "<tr><td class='bg-light-red' colspan = '9'>No record found.</td>/tr>"
}
document.querySelector('#propertyTypes').innerHTML = htmldata;
}