function validatefield(id,errorid, errormessage){

    var input = document.getElementById(id);
    var errorId=document.getElementById(errorid);

    if(input.value==""){
        errorId.innerText=errormessage;
        return Number(0);
    }
    else{
        errorId.innerText="";
        console.log(errorId.value);
        return Number(1);
    }
}