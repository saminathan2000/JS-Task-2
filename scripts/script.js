var isNameValid=isMobileValid=isEmailValid=isPincodeValid=false;
function validateName(event,warningField){
    console.log("first")
    if(! /^[A-Za-z]{1,}$/.test(event.target.value)){
        document.getElementById(warningField).innerHTML="Please enter only alphabets";
        isNameValid=false;
    }
    else{
        document.getElementById(warningField).innerHTML="";
        isNameValid=true;
    }
}
function validateEmail(event){
    if(event.target.value.includes("@gmail.com")){
        document.getElementById("emailwarning").innerHTML="@gmail.com is not allowed";
        isEmailValid=false;
    }
    else{
        document.getElementById("emailwarning").innerHTML="";
        isEmailValid=true;
    }
}
function validateMobile(event){
    if(! /^[0-9]{10}$/.test(event.target.value)){
        document.getElementById("mobilewarning").innerHTML="Please enter valid mobile number";
        isMobileValid=false;
    }
    else{
        document.getElementById("mobilewarning").innerHTML="";
        isMobileValid=true;
    }
}
function validatePincode(event){
    var zipcodes=["110001","110002","110003","110004","110005","110006","110007","110008","110009","110010"];
    if(!zipcodes.includes(event.target.value)){
        document.getElementById("pincodewarning").innerHTML="Please enter a valid pincode";
        isPincodeValid=false;
    }
    else{
        document.getElementById("pincodewarning").innerHTML="";
        isPincodeValid=true;
    }
}
function onSubmit(){
    if(isPincodeValid && isNameValid && isMobileValid && isEmailValid){
        alert("Successfully submitted");
    }
    else{
        console.log(isPincodeValid && isNameValid && isMobileValid && isEmailValid,isPincodeValid , isNameValid , isMobileValid , isEmailValid)
        alert("Please enter all the details correctly!!")
    }
}