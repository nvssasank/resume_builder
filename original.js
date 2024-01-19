function addNewWEField() {
    /console.log("Adding new field");/
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter Here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter Here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);

}
function addNewLAField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add("laField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter Here");

    let laOb = document.getElementById("la");
    let laAddButtonOb = document.getElementById("laAddButton");

    laOb.insertBefore(newNode,laAddButtonOb);

}
function addNewPROField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add("proField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter Here");

    let proOb = document.getElementById("pro");
    let proAddButtonOb = document.getElementById("proAddButton");

    proOb.insertBefore(newNode,proAddButtonOb);

}
function addNewSKField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter Here");

    let skOb = document.getElementById("sk");
    let skAddButtonOb = document.getElementById("skAddButton");

    skOb.insertBefore(newNode,skAddButtonOb);

}

function addNewINField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add("inField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter Here");

    let inOb = document.getElementById("in");
    let inAddButtonOb = document.getElementById("inAddButton");

    inOb.insertBefore(newNode,inAddButtonOb);
    

}
function check1() {
    var checkBox1 = document.getElementById("a1");
    var text1 = document.getElementById("facebookO");
    if (checkBox1.checked == true){
      text1.style.display = "block";
      document.getElementById('fbD1').style.display='block'
      document.getElementById('fbD2').style.display='block'
      document.getElementById('fbD3').style.display='block'
    } else {
       text1.style.display = "none";
       document.getElementById('fbD1').style.display='none'
       document.getElementById('fbD2').style.display='none'
       document.getElementById('fbD3').style.display='none'
    }
    
}
function check2() {
    var checkBox2 = document.getElementById("a2");
    var text2 = document.getElementById("twitterO");
    if (checkBox2.checked == true){
      text2.style.display = "block";
      document.getElementById('twitterD1').style.display='block'
      document.getElementById('twitterD2').style.display='block'
      document.getElementById('twitterD3').style.display='block'
    } else {
       text2.style.display = "none";
       document.getElementById('twitterD1').style.display='none'
       document.getElementById('twitterD2').style.display='none'
       document.getElementById('twitterD3').style.display='none'
    }
    
}
function check3() {
    var checkBox3 = document.getElementById("a3");
    var text3 = document.getElementById("linkedO");
    if (checkBox3.checked == true){
      text3.style.display = "block";
      document.getElementById('linkedD1').style.display='block'
      document.getElementById('linkedD2').style.display='block'
      document.getElementById('linkedD3').style.display='block'
    } else {
       text3.style.display = "none";
       document.getElementById('linkedD1').style.display='none'
       document.getElementById('linkedD2').style.display='none'
       document.getElementById('linkedD3').style.display='none'
    }
    
}
function check4() {
    var checkBox4 = document.getElementById("a4");
    var text4 = document.getElementById("in");
    if (checkBox4.checked == true){
      text4.style.display = "block";
      document.getElementById('inD1').style.display='block'
      document.getElementById('inD2').style.display='block'
      document.getElementById('inD3').style.display='block'
    } else {
       text4.style.display = "none";
       document.getElementById('inD1').style.display='none'
       document.getElementById('inD2').style.display='none'
       document.getElementById('inD3').style.display='none'
    }
    
}
function check5() {
    var checkBox5 = document.getElementById("a5");
    var text5 = document.getElementById("careerO");
    if (checkBox5.checked == true){
      text5.style.display = "block";
      document.getElementById('careerD1').style.display='block'
      document.getElementById('careerD2').style.display='block'
      document.getElementById('careerD3').style.display='block'
    } else {
       text5.style.display = "none";
       document.getElementById('careerD1').style.display='none'
       document.getElementById('careerD2').style.display='none'
       document.getElementById('careerD3').style.display='none'
    }
    
}
function check6() {
    var checkBox6 = document.getElementById("a6");
    var text6 = document.getElementById("we");
    if (checkBox6.checked == true){
      text6.style.display = "block";
      document.getElementById('weD1').style.display='block'
      document.getElementById('weD2').style.display='block'
      document.getElementById('weD3').style.display='block'
    } else {
       text6.style.display = "none";
       document.getElementById('weD1').style.display='none'
       document.getElementById('weD2').style.display='none'
       document.getElementById('weD3').style.display='none'
    }
    
}
function check7() {
    var checkBox7 = document.getElementById("a7");
    var text7 = document.getElementById("aq");
    if (checkBox7.checked == true){
      text7.style.display = "block";
      document.getElementById('aqD1').style.display='block'
      document.getElementById('aqD2').style.display='block'
      document.getElementById('aqD3').style.display='block'
    } else {
       text7.style.display = "none";
       document.getElementById('aqD1').style.display='none'
       document.getElementById('aqD2').style.display='none'
       document.getElementById('aqD3').style.display='none'
    }
    
}
function check8() {
    var checkBox8 = document.getElementById("a8");
    var text8 = document.getElementById("sk");
    if (checkBox8.checked == true){
      text8.style.display = "block";
      document.getElementById('skD1').style.display='block'
      document.getElementById('skD2').style.display='block'
      document.getElementById('skD3').style.display='block'
    } else {
       text8.style.display = "none";
       document.getElementById('skD1').style.display='none'
       document.getElementById('skD2').style.display='none'
       document.getElementById('skD3').style.display='none'
    }
    
}
function check9() {
    var checkBox9 = document.getElementById("a9");
    var text9= document.getElementById("la");
    if (checkBox9.checked == true){
      text9.style.display = "block";
      document.getElementById('laD1').style.display='block'
      document.getElementById('laD2').style.display='block'
      document.getElementById('laD3').style.display='block'
    } else {
       text9.style.display = "none";
       document.getElementById('laD1').style.display='none'
       document.getElementById('laD2').style.display='none'
       document.getElementById('laD3').style.display='none'
    }
    
    
}
function check10() {
    var checkBox10 = document.getElementById("a10");
    var text10 = document.getElementById("pro");
    if (checkBox10.checked == true){
      text10.style.display = "block";
      document.getElementById('proD1').style.display='block'
      document.getElementById('proD2').style.display='block'
      document.getElementById('proD3').style.display='block'
    } else {
       text10.style.display = "none";
       document.getElementById('proD1').style.display='none'
       document.getElementById('proD2').style.display='none'
       document.getElementById('proD3').style.display='none'
    }
    
}

function next(){
    document.getElementById('option').style.display='none';
    document.getElementById('cv-form').style.display='block';
    document.getElementById('cv-template').style.display='none';
    document.getElementById('cv-template1').style.display='none';
    document.getElementById('cv-template2').style.display='none';
}
function option(){
    document.getElementById("option").style.display='block';
    document.getElementById("cv-form").style.display='none';
}

//generating CV
function generateCV(){
    console.log("Adding new field");
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    document.getElementById("contactT").innereHTML = document.getElementById("contactField").value;
    document.getElementById("emailT").innereHTML= document.getElementById("emailField").value;
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("twitterT").innerHTML = document.getElementById("twitterField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;
    document.getElementById("careerT").innerHTML = document.getElementById("careerField").value;
    
    let wes = document.getElementsByClassName("weField");
    let str="";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    let eqs = document.getElementsByClassName("eqField");
    let str1="";
    for (let e of eqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    

    let pros = document.getElementsByClassName("proField");
    let str2="";
    for (let e of pros) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("proT").innerHTML=str2;
    
    let sks = document.getElementsByClassName("skField");
    let str3="";
    for (let e of sks) {
        str3 = str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById("skT").innerHTML=str3;

    let las = document.getElementsByClassName("laField");
    let str4="";
    for (let e of las) {
        str4 = str4 + `<li> ${e.value} </li>`;
    }
    document.getElementById("laT").innerHTML=str4;

    let ins = document.getElementsByClassName("inField");
    let str5="";
    for (let e of ins) {
        str5 = str5 + `<li> ${e.value} </li>`;
    }
    document.getElementById("inT").innerHTML=str5;
    
    let file=document.getElementById('imgField').files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend=function(){
        document.getElementById('imgTemplate1').src = reader.result;
        document.getElementById('imgTemplate2').src = reader.result;
        document.getElementById('imgTemplate3').src = reader.result;
    }
    
    

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
    document.getElementById('cv-template1').style.display='none';
    document.getElementById('cv-template2').style.display='none';

    
}
var a;
function printCV(){
    console.log("jhdgh")
    if(a==1){
        document.getElementById("back").style.display="inline";
        document.getElementById("print").style.display="inline";
        document.getElementById("background3").style.display="inline";
        document.getElementById("background2").style.display="inline";
        document.getElementById("background1").style.display="inline";
        document.getElementById("print1").style.display="inline";
        document.getElementById("back1").style.display="inline";
        document.getElementById("back2").style.display="inline";
        document.getElementById("print2").style.display="inline";
        return a=0;
    }
    else{
        document.getElementById("back").style.display="none";
        document.getElementById("print").style.display="none";
        document.getElementById("background3").style.display="none";
        document.getElementById("background2").style.display="none";
        document.getElementById("background1").style.display="none";
        document.getElementById("back1").style.display="none";
        document.getElementById("print1").style.display="none";
    }
    window.print();
    document.getElementById("back").style.display="inline";
    document.getElementById("print").style.display="inline";
    document.getElementById("background3").style.display="inline";
    document.getElementById("background2").style.display="inline";
    document.getElementById("background1").style.display="inline";
    document.getElementById("back1").style.display="inline";
    document.getElementById("print1").style.display="inline";
    document.getElementById("back2").style.display="inline";
    document.getElementById("print2").style.display="inline";
}
function backCV(){
    document.getElementById('cv-template').style.display='none';
    document.getElementById('cv-form').style.display='block';
}
function backCV1(){
    document.getElementById('cv-template1').style.display='none';
    document.getElementById('cv-form').style.display='block';
}
function backCV2(){
    document.getElementById('cv-template2').style.display='none';
    document.getElementById('cv-form').style.display='block';
}

function nextCV(){
    console.log("Adding new field");
    let nameField=document.getElementById("nameField").value;
    let nameT2=document.getElementById("nameT2");
    nameT2.innerHTML = nameField;

    document.getElementById("contactT1").innereHTML = document.getElementById("contactField").value;
    document.getElementById("emailT1").innereHTML= document.getElementById("emailField").value;
    document.getElementById("fbT1").innerHTML = document.getElementById("fbField").value;
    document.getElementById("twitterT1").innerHTML = document.getElementById("twitterField").value;
    document.getElementById("linkedT1").innerHTML = document.getElementById("linkedField").value;
    document.getElementById("careerT1").innerHTML = document.getElementById("careerField").value;
    
    let wes1 = document.getElementsByClassName("weField");
    let str6="";
    for (let e of wes1) {
        str6 = str6 + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT1").innerHTML=str6;

    let eqs1 = document.getElementsByClassName("eqField");
    let str7="";
    for (let e of eqs1) {
        str7 = str7 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT1").innerHTML=str7;

    

    let pros1 = document.getElementsByClassName("proField");
    let str8="";
    for (let e of pros1) {
        str8 = str8 + `<li> ${e.value} </li>`;
    }
    document.getElementById("proT1").innerHTML=str8;
    
    let sks1 = document.getElementsByClassName("skField");
    let str9="";
    for (let e of sks1) {
        str9 = str9 + `<li> ${e.value} </li>`;
    }
    document.getElementById("skT1").innerHTML=str9;

    let las1 = document.getElementsByClassName("laField");
    let str10="";
    for (let e of las1) {
        str10 = str10 + `<li> ${e.value} </li>`;
    }
    document.getElementById("laT1").innerHTML=str10;

    let ins1 = document.getElementsByClassName("inField");
    let str11="";
    for (let e of ins1) {
        str11 = str11 + `<li> ${e.value} </li>`;
    }
    document.getElementById("inT1").innerHTML=str11;

     

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='none';
    document.getElementById('cv-template2').style.display='none';
    document.getElementById('cv-template1').style.display='block';
}
/*function success() {
    if(document.getElementById("nameField").value==="") { 
        document.getElementById('generate').disabled = true; 
    } 
    else { 
        document.getElementById('generate').disabled = false;
    }
    if(document.getElementById("contactField").value==="") { 
        document.getElementById('generate').disabled = true; 
    } 
    else { 
        document.getElementById('generate').disabled = false;
    }
    if(document.getElementById("emailField").value==="") { 
        document.getElementById('generate').disabled = true; 
    } 
    else { 
        document.getElementById('generate').disabled = false;
    }
    if(document.getElementById("addressField").value==="") { 
        document.getElementById('generate').disabled = true; 
    } else { 
        document.getElementById('generate').disabled = false;
    }
    if(document.getElementById("fbField").value==="") { 
        document.getElementById('generate').disabled = true; 
    } else { 
        document.getElementById('generate').disabled = false;
    }
    if(document.getElementById("linkedField").value==="") { 
        document.getElementById('generate').disabled = true; 
    } else { 
        document.getElementById('generate').disabled = false;
    }
    if(document.getElementById("twitterField").value==="") { 
        document.getElementById('generate').disabled = true; 
    } else { 
        document.getElementById('generate').disabled = false;
    }
    /*if(document.getElementById("aqAddButtonField").value==="") { 
            document.getElementById('generate').disabled = true; 
    } 
    else { 
        document.getElementById('generate').disabled = false;
    }*
}*/
function changeStyle(){
    console.log("jhagdh")
    var element = document.getElementsByClassName("resume-header");
    element.style.backgroundColor = "#00FF00";
}
/*function success(){
    if(this.value.length > 0) { 
        document.getElementById('generate').disabled = false; 
    } else { 
        document.getElementById('generate').disabled = true;
    }
}
function generateCV(){


    if ($(#nameField).empty()) {
        alert ("Put some text in there!")
        return
    }
    else{
        do button (functionality)
    }
}*/


function nextCV1(){
    console.log("Adding new field");
    let nameField=document.getElementById("nameField").value;
    let nameT3=document.getElementById("nameT3");
    nameT3.innerHTML = nameField;

    document.getElementById("contactT2").innereHTML = document.getElementById("contactField").value;
    document.getElementById("emailT2").innereHTML= document.getElementById("emailField").value;
    document.getElementById("fbT2").innerHTML = document.getElementById("fbField").value;
    document.getElementById("twitterT2").innerHTML = document.getElementById("twitterField").value;
    document.getElementById("linkedT2").innerHTML = document.getElementById("linkedField").value;
    document.getElementById("careerT2").innerHTML = document.getElementById("careerField").value;
    
    let wes2 = document.getElementsByClassName("weField");
    let str6="";
    for (let e of wes2) {
        str6 = str6 + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT2").innerHTML=str6;

    let eqs2 = document.getElementsByClassName("eqField");
    let str7="";
    for (let e of eqs2) {
        str7 = str7 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT2").innerHTML=str7;

    

    let pros2 = document.getElementsByClassName("proField");
    let str8="";
    for (let e of pros2) {
        str8 = str8 + `<li> ${e.value} </li>`;
    }
    document.getElementById("proT2").innerHTML=str8;
    
    let sks2 = document.getElementsByClassName("skField");
    let str9="";
    for (let e of sks2) {
        str9 = str9 + `<li> ${e.value} </li>`;
    }
    document.getElementById("skT2").innerHTML=str9;

    let las2 = document.getElementsByClassName("laField");
    let str10="";
    for (let e of las2) {
        str10 = str10 + `<li> ${e.value} </li>`;
    }
    document.getElementById("laT2").innerHTML=str10;

    let ins2 = document.getElementsByClassName("inField");
    let str11="";
    for (let e of ins2) {
        str11 = str11 + `<li> ${e.value} </li>`;
    }
    document.getElementById("inT2").innerHTML=str11;

     

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='none';
    document.getElementById('cv-template1').style.display='none';
    document.getElementById('cv-template2').style.display='block';
}
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
