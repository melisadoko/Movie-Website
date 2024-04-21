// ky funksion ben ngarkimin e fotos se profilit dhe ruajtjes se blobit ne localStorage
function UploadImg(event){
    var imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'];
    var filename=event.target.files[0].name
    var ext=filename.substring(filename.lastIndexOf('.')+1);
    ext=ext.toLowerCase();
    
    if(imageExtensions.includes(ext)){    
    var div=document.getElementById("default_profile_pic");
    var url=URL.createObjectURL(event.target.files[0]);
    div.style.backgroundImage="url("+url+")";
    div.style.backgroundSize="cover";
    localStorage.setItem("profile_pic", url)
  }
}

//ky funksion behet trigger ne momentin qe shtypet butoni krijo
//behet kontrolli percdo fushe dhe me pas behet redirect te home page
document.getElementById('create_account').addEventListener('click', function(event) {
    event.preventDefault();

    var v_acceptTD = ValidateTerms();
    var v_gender = ValidateGender();
    var v_name = ValidateName();
    var v_email = ValidateEmail();
    var v_phone = ValidatePhone();
    var v_birthday = ValidateBirthday();
    var v_password = ValidatePassword();
    var v_passowrd2 = MatchPassword();
    var check =
      v_gender &&
      v_acceptTD &&
      v_name &&
      v_email &&
      v_birthday &&
      v_phone &&
      v_passowrd2 &&
      v_password;

    if (check) {
      localStorage.setItem("user", JSON.stringify(getUserData()));
      document.getElementById("createAccount").submit();
    }
  });

  //ketu behet krijimi i objektit te js per tu ruajtur ne localStorage
function getUserData() {
  return {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    phone: document.getElementById("phone").value,
    birthDay: document.getElementById("birthDay").value,
    gender: document.querySelector('input[name="Gender"]:checked').value,
  };
}
//ketu behet validimi i radio button per gjinine
function ValidateGender() {
  var gender = document.querySelector('input[name="Gender"]:checked');
  var g_value = gender == null ? null : gender.value;
  var check = false;
  if (g_value != null) check = true;
  ValidationStyling(document.getElementById("Male"), check, "Gender_error");
  return check;
}
//ketu behet validimi per checkboxin e termave dhe kushteve
function ValidateTerms() {
  var acceptTD = document
    .getElementById("AcceptTD")
    .checked.toString()
    .toLowerCase();
  var check = false;
  if (acceptTD.toLowerCase() == "true" || acceptTD.toLowerCase() == "true")
    check = true;
  ValidationStyling(
    document.getElementById("AcceptTD"),
    check,
    "AcceptTD_error"
  );
  return check;
}

//ketu behet validimi per emrin
function ValidateName() {
  var name = document.getElementById("name").value;
  var check = false;
  if (name != "" && name != null) {
    check = true;
  }
  ValidationStyling(document.getElementById("name"), check, "name_error");
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

//ketu behet validimi me regex per passwordin
function ValidatePassword() {
  var password = document.getElementById("password").value;
  password_regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%.,*?&])[A-Za-z\d@$.,!%*?&]{8,}$/;
  var check = false;

  if (password_regex.test(password)) {
    check = true;
  }
  ValidationStyling(
    document.getElementById("password"),
    check,
    "password_error"
  );

  return check;
}
//ketu behet kontrolli mes 2 fushave te password
function MatchPassword() {
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("confirmPwd").value;
  var check = false;
  if (password === password2 && password.length != 0) {
    check = true;
  }
  ValidationStyling(
    document.getElementById("confirmPwd"),
    check,
    "confirmPwd_error"
  );

  return check;
}

//ketu behet validimi per ditlindjen nqs perdoruesi eshte te pakten 13 vjec
function ValidateBirthday() {
  var bDay = document.getElementById("birthDay").value;
  var check = false;

  if (bDay != null) {
    const dateCheck = new Date();
    var birthDay = new Date(bDay);
    dateCheck.setFullYear(dateCheck.getFullYear() - 13);
    if (dateCheck > birthDay) {
      check = true;
    }
  }
  ValidationStyling(
    document.getElementById("birthDay"),
    check,
    "birthDay_error"
  );

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
      case "name":
        ValidateName();
        break;
      case "email":
        ValidateEmail();
        break;
      case "phone":
        ValidatePhone();
        break;
      case "birthDay":
        ValidateBirthday();
        break;
      case "password":
        ValidatePassword();
        break;
      case "confirmPwd":
        MatchPassword();
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
