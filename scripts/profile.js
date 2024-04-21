(function(){
    const data = {
        labels: ['Aksion', 'Komedi', 'Dramë', 'Fantashkencë', 'Horror', 'Aventurë'],
        datasets: [{
            data: [20, 15, 10, 25, 15, 15], // Perqindjet percdo zhaner ne listen siper
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
    
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Zhanerat më të ndjekur',
                    font:{
                        size:18
                    }
                }
            }
        },
    };
    
    var myChart = new Chart(document.getElementById('genre_chart'),config);




    const data2 = {
        labels: ['E hënë', 'E martë', 'E mërkurë', 'E enjte', 'E premte', 'E shtunë', 'E dielë'],
        datasets: [{
            label: 'Mesatarja e Kohës së Kaluar (orë)',
            data: [3, 4, 3.5, 4.5, 5, 4, 3],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };
    
    const config2 = {
        type: 'bar',
        data: data2,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Orët'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Mesatarja e Kohës së Kaluar në Javë',
                    font:{
                        size:18
                    }
                }
            }
        },
    };
    
    var myChart2 = new Chart(
        document.getElementById('time_spent_chart'),config2);

    function GetName(){
        var user=localStorage.getItem("user");
        var text='Perdorues';
        if(user!=null)
        {
            if(user.name!=null)
            text=user.name;
        }
        document.getElementById('name').textContent=text;
    }  
    GetName();
})();

function removePhoto(){
    var container = document.getElementById('default_profile_pic');
    container.style.backgroundImage = "url('../images/user.png')";
    localStorage.removeItem('profile_pic');
}

  function ValidationStyling(objekti, lloji, error){
    var e=document.getElementById(error).style
if(objekti.classList.contains("text_inputs"))
    {
        objekti.style.border="0";
    if(lloji==true)
    {
        objekti.style.borderBottom="1px solid green";
        objekti.style.color="green";
        e.display='none';
    }
    else{
        objekti.style.borderBottom="1px solid red";
        objekti.style.color="red";
        e.display="block";
        }

}else{
    if(lloji==false)
    {
        e.display="block";
    }
}
}

function ValidateNewPswd(){
    var password=document.getElementById('new_pswd').value;
    password_regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%.,*?&])[A-Za-z\d@$.,!%*?&]{8,}$/;
    var check=false;

    if(password_regex.test(password))
    {
        check=true;
    }
    ValidationStyling(document.getElementById('new_pswd'),check, "password_error");

    return check;
}

function ConfirmNewPswd(){
    var password=document.getElementById('new_pswd').value;
    var password2=document.getElementById('confirm_new_pswd').value;
    var check=false;
    if(password===password2 && password.length!=0)
    {
        check=true;
    }
    ValidationStyling(document.getElementById('confirm_new_pswd'),check, "confirmPwd_error");

    return check;
}

function ValidateOldPswd(){
    var oldPswd=document.getElementById('existing_pswd').value;
    var userPswd=localStorage.getItem("user").password;
    var check=false;
    if(oldPswd===userPswd)
    check=true;
    ValidationStyling(document.getElementById('existing_pswd'),check, "existing_pswd_error");
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
    ValidationStyling(document.getElementById('phone'),check, "phone_error");

    return check;
}


document.getElementById('save_changes').addEventListener('click', function(event) {
    event.preventDefault();
    debugger
    var user=JSON.parse(localStorage.getItem("user"));
    var v_phone=true;
    if(document.getElementById('phone').value!='')
    {
        v_phone=ValidatePhone();
        if(v_phone)
        {
            user.phone=document.getElementById('phone').value;
        }
    }

var v_password = true;
if (document.getElementById('new_pswd').value !== '') {
    v_password = ValidateNewPswd();
    if(v_password)
    {
        user.password=document.getElementById('new_pswd').value;

    }
}

var v_password2 = true;
if (document.getElementById('confirm_new_pswd').value !== '') {
    v_password2 = ConfirmNewPswd();
}

var v_old_password = true;
if (document.getElementById('existing_pswd').value !== '') {
    v_old_password = ValidateOldPswd();
}

var check = v_phone && v_password && v_password2 && v_old_password;

    if(check)
    {
        localStorage.setItem('user', user)
        document.getElementById('createAccount').submit();
    }
});