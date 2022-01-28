
function addNewWEField()
{
    // console.log("Adding new Field ")

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    // weOb ke andar new node add kiya hoon Button se pehle..yo yo
    weOb.insertBefore(newNode, weAddButtonOb);

}
function addAcademic()
{
    let newNode2=document.createElement("textarea");
    newNode2.classList.add("form-control");
    newNode2.classList.add("eqField");
    newNode2.classList.add("mt-2");
    newNode2.setAttribute("rows",3);
    newNode2.setAttribute("placeholder","Enter here");

    let aeOb=document.getElementById("ab");
    let aeAddButtonOb = document.getElementById("aqAddButton");

    // weOb ke andar new node add kiya hoon Button se pehle..yo yo
    aeOb.insertBefore(newNode2, aeAddButtonOb);

}

//  Generating CV
function generateCV()
{
    //console.log("Yes Yes")
 
    var nameField = document.getElementById("namefield").value;

    var nameT1 = document.getElementById("nameT");
    nameT1.innerHTML =nameField;

    document.getElementById("nameT2").innerHTML=nameField;

    //----


    document.getElementById("contactT").innerHTML=document.getElementById("Contact").value;

    document.getElementById("addressT").innerHTML=document.getElementById("Address").value;

    document.getElementById("TwT").innerHTML=document.getElementById("Twitter").value;

    document.getElementById("shcT").innerHTML=document.getElementById("Showwcase").value;


    document.getElementById("ObjectiveT").innerHTML=document.getElementById("ObjectiveField").value;

    //document.getElementById("weT").innerHTML=document.getElementById("weF").value;

    var wes = document.getElementsByClassName("weField")
    var str="";
    for (var e of wes)
    {
        str = str + `<li> ${e.value} </li>`;

    }
    document.getElementById("weT").innerHTML=str;

    // Academic Qualification

    var aqs = document.getElementsByClassName("eqField")

    var str1 ="";
    for(var e of aqs)

    {
        str1 = str1 +`<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML=str1;

    // For Setting Image !
    
    let file =document.getElementById('imgField').files[0];
     let reader = new FileReader()
     reader.readAsDataURL(file);

     //Setting the Image to Template

    reader.onloadend = function()
    {
        document.getElementById("imgTemplate").src=reader.result;
    }



    

//---------------------//

document.getElementById("cv-form").style.display='none';
document.getElementById("cv-template").style.display='block';

}

function PrintCV()
{
  //  Popup$('<div/>').append($(elem).clone()).html();
    window.print();
}