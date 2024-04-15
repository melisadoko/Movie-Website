function UploadImg(event){
    var div=document.getElementById("default_profile_pic");
    div.style.backgroundImage="url("+URL.createObjectURL(event.target.files[0])+")";
    div.style.backgroundSize="cover";
    localStorage.setItem("profile_pic", URL.createObjectURL(event.target.files[0]))
}

document.getElementById('create_account').addEventListener('click', function(event) {
    event.preventDefault();
    var gender=document.querySelector('input[name="Gender"]:checked');
    var g_value= (gender==null) ? null : gender.value;
    var acceptTD=document.getElementById('AcceptTD').checked;
    var v_name=ValidateName();
    var v_email=ValidateEmail();
    var v_phone=ValidatePhone();
    var v_birthday=ValidateBirthday();
    var v_password=ValidatePassword();
    var v_passowrd2=MatchPassword();
    var check=(g_value!=null)&&(acceptTD==true || acceptTD.toLowerCase()=='true' || acceptTD.toLowerCase()=="true")&&v_name&&v_email&&v_birthday&&v_phone&&v_passowrd2&&v_password;

    if(check)
    document.getElementById('create_account').submit();
});

function ValidateName(){
    var name=document.getElementById('name').value;
    var check=false;
    if(name!="" && name !=null)
    {
        check=true;
    }
    ValidationStyling(document.getElementById('name'),check, "kot");
    return check;
}

function ValidateEmail(){
    debugger
    var email=document.getElementById('email').value;
    email_regex=/[a-zA-Z0-9_.]{5,30}@[a-zA-Z]{2,10}(\.[a-zA-Z]{3}){1,2}/;
    var check=false;

    if(email_regex.test(email))
    {
        check=true;
    }
    ValidationStyling(document.getElementById('email'),check, "kot");
    return check;
}

function ValidatePhone(){
    var phone=document.getElementById('phone').value;
    phone_regex=/06[7-9][0-9]{7}/;
    var check=false;

    if(phone_regex.test(phone))
    {
        check=true;
    }
    ValidationStyling(document.getElementById('phone'),check, "kot");

    return check;
}

function ValidatePassword(){
    var password=document.getElementById('password').value;
    password_regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%.,*?&])[A-Za-z\d@$.,!%*?&]{8,}$/;
    var check=false;

    if(password_regex.test(password))
    {
        check=true;
    }
    ValidationStyling(document.getElementById('password'),check, "kot");

    return check;
}

function MatchPassword(){
    var password=document.getElementById('password').value;
    var password2=document.getElementById('confirmPwd').value;
    var check=false;
    if(password===password2 && password.length!=0)
    {
        check=true;
    }
    ValidationStyling(document.getElementById('confirmPwd'),check, "kot");

    return check;
}

function ValidateBirthday(){
    var bDay=document.getElementById('birthDay').value;
    var check=false;

    if(bDay!=null)
    {
        const dateCheck=new Date();
        var birthDay=new Date(bDay);
        dateCheck.setFullYear(dateCheck.getFullYear-13);
        if(dateCheck>birthDay)
        {
        check=true;
        }
    }
    ValidationStyling(document.getElementById('birthDay'),check, "kot");

   return check;
}

function ValidationStyling(objekti, lloji, error){
objekti.style.border="0";
if(lloji==true)
{
    objekti.style.borderBottom="1px solid green";
    objekti.style.color="green";
}
    else
    {
    objekti.style.borderBottom="1px solid red";
    objekti.style.color="red";
    }

}

(function() {
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
  
    var inputs = document.getElementsByClassName("text_inputs");
    Array.from(inputs).forEach(function(input) {
      input.addEventListener("focusout", handleFocusOut);
    });
  })();