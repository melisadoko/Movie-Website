//ketu behet validimi per emrin
function ValidateFirstname() {
  var name = document.getElementById("firstname").value;
  var check = false;
  if (name != "" && name != null) {
    check = true;
  }
  ValidationStyling(
    document.getElementById("firstname"),
    check,
    "firstname_error"
  );
  return check;
}

//ketu behet validimi per mbiemrin
function ValidateLastname() {
  var name = document.getElementById("lastname").value;
  var check = false;
  if (name != "" && name != null) {
    check = true;
  }
  ValidationStyling(
    document.getElementById("lastname"),
    check,
    "lastname_error"
  );
  return check;
}

//ketu behet validimi me regex per email
function ValidateEmail() {
  var email = document.getElementById("email").value;
  email_regex = /[a-zA-Z0-9_.]{5,30}@[a-zA-Z]{2,10}(\.[a-zA-Z]{3}){1,2}/;
  var check = false;

  if (email_regex.test(email)) {
    check = true;
  }
  ValidationStyling(document.getElementById("email"), check, "email_error");
  return check;
}

//ketu behet validimi me regex per nr celularit
function ValidatePhone() {
  var phone = document.getElementById("phone").value;
  phone_regex = /06[7-9][0-9]{7}/;
  var check = false;

  if (phone_regex.test(phone)) {
    check = true;
  }
  ValidationStyling(document.getElementById("phone"), check, "phone_error");

  return check;
}

//ketu behet validimi per mesazhin
function ValidateMessage() {
  var mes = document.getElementById("message").value;
  var check = false;
  if (mes != "" && mes != null && mes.length > 20) {
    check = true;
  }
  ValidationStyling(document.getElementById("message"), check, "message_error");
  return check;
}

//ketu behet stilimi nqs jane plotesuar fushat sakte ose gabim
//nqs jan plotesuar gabim shtohet mesazhi i errorit
function ValidationStyling(objekti, lloji, error) {
  var e = document.getElementById(error).style;
  if (objekti.classList.contains("text_inputs")) {
    objekti.style.border = "0";
    if (lloji == true) {
      objekti.style.borderBottom = "1px solid green";
      objekti.style.color = "green";
      e.display = "none";
    } else {
      objekti.style.borderBottom = "1px solid red";
      objekti.style.color = "red";
      e.display = "block";
    }
  } else {
    if (lloji == false) {
      e.display = "block";
    }
  }
}

(function () {
  function handleFocusOut(event) {
    var id = event.target.id;
    switch (id) {
      case "firstname":
        ValidateFirstname();
        break;
      case "lastname":
        ValidateLastname();
        break;
      case "email":
        ValidateEmail();
        break;
      case "phone":
        ValidatePhone();
        break;
      case "message":
        ValidateMessage();
        break;
    }
  }

  //ketu i eshte shtuar cdo fushe input me tekst nje listener qe ne cdo moment qe behet
  //focus out te kontrollohet fusha perkatese
  var inputs = document.getElementsByClassName("text_inputs");
  Array.from(inputs).forEach(function (input) {
    input.addEventListener("focusout", handleFocusOut);
  });
})();

document
  .getElementById("sendEmail")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var valid_Firstname = ValidateFirstname();
    var valid_Lastname = ValidateLastname();
    var valid_Email = ValidateEmail();
    var valid_Phone = ValidatePhone();
    var valid_Message = ValidateMessage();

    var check =
      valid_Firstname &&
      valid_Lastname &&
      valid_Email &&
      valid_Phone &&
      valid_Message;
    if (check) {
      document.getElementById("contact-form").submit();
    }
  });
