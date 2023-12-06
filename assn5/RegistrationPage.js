function validatePayment() {
  const selectedOptions = document.querySelectorAll(
    'input[name="radio"]:checked'
  );

  if (selectedOptions.length < 2) {
    return Number(1);
  } else {
    return Number(0);
  }
}

function validatefield(id, errorid, errormessage) {
  var input = document.getElementById(id);
  var errorId = document.getElementById(errorid);

  if (input.value == "") {
    errorId.innerText = errormessage;
    return Number(0);
  } else {
    errorId.innerText = "";
    console.log(errorId.value);
    return Number(1);
  }
}

function pincodeVal(id, errorid, errormessage) {
  if (/^\d{6}$/.test(input)) {
    return Number(1);
  } else {
    return Number(0);
  }
}
function mobilenoVal(id, errorid, errormessage) {
  if (/^\d{10}$/.test(input)) {
    return Number(1);
  } else {
    return Number(0);
  }
}

function passwordVal(id1, id2, errorid1, errorid2, matched, unmacthed) {
  var input1 = document.getElementById(id1);
  var ErrorId1 = document.getElementById(errorid1);
  var input2 = document.getElementById(id2);
  var ErrorId2 = document.getElementById(errorid2);

  if (input1.value == input2.value) {
    ErrorId1.innerHTML(matched);
    ErrorId2.innerHTML(matched);
    return Number(1);
  } else {
    ErrorId1.innerHTML(unmacthed);
    ErrorId2.innerHTML(unmacthed);
    return Number(0);
  }
}

function emailVal(input) {
  if (/^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(input)) {
    console.log("Input is valid.");
  } else {
    console.log("Input is not valid.");
  }
}

function Register() {
  var Cnum = document.getElementById("cnum");
  var Cname = document.getElementById("name");
  var namer = document.getElementById("email");
  var namer = document.getElementById("password");
  var namer = document.getElementById("cpassword");
  var namer = document.getElementById("mobileno");
  var namer = document.getElementById("state");
  var namer = document.getElementById("cities");
  var namer = document.getElementById("pincode");

  var Vcnum = validatefield();
}
