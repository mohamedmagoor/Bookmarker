var siteName = document.getElementById("site-name")
var siteUrl = document.getElementById("site-url")
var addButton = document.getElementById("submitButton")
var visitButton = document.getElementById("visitButton")
var deleteButton= document.getElementById("deleteButton")
// var alertBox = document.getElementById("alert")
// var closeButton = document.getElementById("Xbutton")

var patternUrl =/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/
var patternSiteName = /^[a-zA-Z]{3,}$/




var arrOfObject = [];

if(localStorage.getItem("urlinfo"))
{
    arrOfObject =  JSON.parse(localStorage.getItem("urlinfo")) 
    showData(arrOfObject)
    
} 



function addUrlTabel (){

    if(patternUrl.test(siteUrl.value) && patternSiteName.test(siteName.value)){

        var urlInfo = {

            siteName:siteName.value,
            siteUrl:siteUrl.value,
        }
    
        arrOfObject.push(urlInfo);
    
        localStorage.setItem("urlinfo",JSON.stringify(arrOfObject))
        showData(arrOfObject)
        empty()

    }else{

        // alertBox.style.display = "block"
        // closeButton.onclick=function(){

        //     alertBox.style.display = "none"

        swal("Site Name or Url is not valid, Please follow the rules below :", "Site name must contain at least 3 characters Site and URL must be a valid one", "error");

        } 
        
        



       
    }

    



//display data

function showData(arr){

    var cartona = "";
    for(var i = 0; i < arr.length;i++){

        cartona +=`
        <tr>
             <td>${i+1}</td>
             <td>${arr[i].siteName}</td>
            <td>

             <a href=${arr[i].siteUrl} target="_blank" id="visitButton" class="btn btn-primary text-white fw-bold"> <i class="fa-solid fa-eye me-1"></i>Visite</a>
             </td>
             <td><button onclick="deleteB(${i})" id="deleteButton"  class="btn btn-danger text-white fw-bold"> <i class="fa-solid fa-trash-can me-1"></i>Delete</button></td>
         </tr>
        
        `

       


    }

    document.getElementById("tableContent").innerHTML = cartona;

}


//emptey the values of inputes

function empty(){

    siteName.value="";
    siteUrl.value=""

}

//delete function

function deleteB(arr){

    arrOfObject.splice(arr,1)
    localStorage.setItem("urlinfo",JSON.stringify(arrOfObject))
    showData(arrOfObject)


}




